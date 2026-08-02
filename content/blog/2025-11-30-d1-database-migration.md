---
title: D1 데이터베이스 초기 설계와 마이그레이션 시행착오
slug: d1-database-migration
excerpt: SQLite 스키마를 Cloudflare D1으로 옮기면서 만난 문제들과 해결 방법.
seo_title: D1 데이터베이스 마이그레이션 가이드
seo_description: D1 스키마 설계, 타입 체크, 날짜 처리, 로컬-프로덕션 동기화 방법.
---

## 시작: "그냥 SQLite지, 뭐가 어렵겠어?"

D1을 처음 접했을 때 나는 자신만만했다. SQLite는 알고 있고, Cloudflare 바인딩도 복잡하지 않아 보였다. 그래서 스키마를 다다닥 만들고 배포했다. 그리고 한 시간 뒤, 첫 번째 문제가 터졌다.

## 문제 1: 로컬과 프로덕션의 스키마 불일치

```bash
# 로컬: 잘 작동
npx wrangler d1 execute davhave-content --local --file=./src/schema.sql

# 프로덕션: 에러!
npx wrangler d1 execute davhave-content --remote --file=./src/schema.sql
```

로컬 D1과 프로덕션 D1의 스키마가 다른 상태가 됐다. 왜인가? **D1에는 마이그레이션 관리 시스템이 없기 때문이다.** 

SQL 스크립트를 실행하면 그냥 실행할 뿐, "이 스크립트가 이미 실행됐는가?"를 추적하지 않는다. 그래서 같은 스크립트를 두 번 실행하면 테이블 생성 에러가 난다.

**해결책**: 수동으로 `__migrations` 테이블을 관리하기로 했다.

```sql
-- src/schema.sql
CREATE TABLE IF NOT EXISTS __migrations (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  executed_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 각 마이그레이션을 조건부로 실행
INSERT OR IGNORE INTO __migrations (name) VALUES ('001_initial_schema');

CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  kind TEXT CHECK (kind IN ('blog', 'education')),
  content TEXT,
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

이제 같은 스크립트를 여러 번 실행해도 안전하다.

## 문제 2: 타임존 지옥

블로그 포스트의 `published_at`을 저장할 때, 처음엔 단순하게 했다:

```javascript
const now = new Date().toISOString(); // "2025-11-30T08:30:00.000Z"
await DB.prepare(
  `INSERT INTO posts (title, published_at) VALUES (?, ?)`
).bind(title, now).run();
```

이건 UTC로 저장되는데, **문제는 사용자 입력이다.** 관리자가 "내일 오후 3시에 발행하고 싶다"고 하면, 그건 그 사람의 로컬 시간대에서의 오후 3시다. UTC로 변환해야 한다.

더 복잡한 건, 블로그 목록을 표시할 때다:

```sql
SELECT * FROM posts 
WHERE published_at <= DATETIME('now') 
ORDER BY published_at DESC;
```

이 쿼리는 D1 서버의 시간 (UTC)을 기준으로 한다. 만약 관리자가 서울 시간대라면, UTC+9 시간만큼 보정해야 한다.

**해결책**: 모든 시간을 UTC로 저장하고, API 응답 시 사용자의 시간대로 변환하는 로직을 미들웨어에 넣었다.

```javascript
export const formatPostDate = (utcDate, timezone = 'Asia/Seoul') => {
  return new Date(utcDate).toLocaleString('ko-KR', { timeZone: timezone });
};

// 응답 시
const posts = await fetchPosts();
return posts.map(p => ({
  ...p,
  published_at: formatPostDate(p.published_at, userTimezone)
}));
```

## 문제 3: 관계형 데이터 설계

초기에는 `posts` 테이블 하나에 모든 정보를 때려박으려고 했다:

```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  title TEXT,
  tags TEXT,  -- ← 위험! (예: "javascript,cloudflare,d1")
  ...
);
```

이렇게 하면 검색(`WHERE tags LIKE '%javascript%'`)이 느리고, 중복 제거도 힘들다. 정규화된 스키마로 바꿨다:

```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  title TEXT,
  slug TEXT UNIQUE,
  kind TEXT,
  content TEXT,
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tags (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post_tags (
  post_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  PRIMARY KEY (post_id, tag_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id)
);
```

이제 쿼리는 JOIN으로 한다:

```sql
SELECT p.*, GROUP_CONCAT(t.name, ',') as tags
FROM posts p
LEFT JOIN post_tags pt ON p.id = pt.post_id
LEFT JOIN tags t ON pt.tag_id = t.id
WHERE p.kind = 'blog' AND p.published_at <= DATETIME('now')
GROUP BY p.id
ORDER BY p.published_at DESC;
```

## 문제 4: 성능 vs 개발 속도

D1에서 쿼리 1번은 ~50ms 정도 걸린다. 네트워크 왕복 때문이다. 만약 블로그 목록을 보여줄 때마다:

1. 포스트 전체 조회
2. 각 포스트의 태그 조회
3. 각 태그의 카운트 조회

이렇게 3번 쿼리하면, 50ms × 3 = 150ms 오버헤드다. 사용자는 페이지가 느리다고 느낀다.

**해결책**: SSR 단계에서 모든 데이터를 한 번에 조회하고, 페이지를 캐싱한다.

```javascript
export async function renderBlogPage(req) {
  const cached = cache.get('blog-list');
  if (cached && isFresh(cached)) {
    return new Response(cached, { headers: { 'Content-Type': 'text/html' } });
  }

  // 한 번의 JOIN 쿼리로 전부 가져오기
  const posts = await DB.prepare(`
    SELECT p.*, GROUP_CONCAT(t.name) as tags
    FROM posts p
    LEFT JOIN post_tags pt ON p.id = pt.post_id
    LEFT JOIN tags t ON pt.tag_id = t.id
    WHERE p.kind = 'blog' AND p.published_at <= DATETIME('now')
    GROUP BY p.id
    ORDER BY p.published_at DESC
  `).all();

  const html = renderPostList(posts);
  cache.set('blog-list', html);
  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}
```

## 문제 5: 백업과 복구

D1에는 자동 백업이 없다. (유료 플랜은 있을 수도) 그래서 중요한 데이터는 수동으로 백업해야 한다.

```bash
# 프로덕션 데이터 로컬로 가져오기
npx wrangler d1 backup davhave-content

# 로컬 DB를 프로덕션으로 복구
npx wrangler d1 restore davhave-content backup.sqlite3 --remote
```

이 작업을 자동화하려면 별도의 스크립트가 필요하다.

## 최종 스키마 (현재 버전)

```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  kind TEXT NOT NULL CHECK (kind IN ('blog', 'education')),
  content TEXT,
  excerpt TEXT,
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tags (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post_tags (
  post_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  PRIMARY KEY (post_id, tag_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE INDEX idx_posts_kind_published ON posts(kind, published_at DESC);
CREATE INDEX idx_posts_slug ON posts(slug);
```

## 배운 점

D1은 "SQLite를 클라우드에 올린 것"이지만, 실제로는 **다른 운영 모델**이다. 마이그레이션 추적, 타임존 관리, 네트워크 레이턴시를 고려한 쿼리 최적화가 필수다. 하지만 이런 제약들을 이해하고 나면, 매우 강력한 도구가 된다.
