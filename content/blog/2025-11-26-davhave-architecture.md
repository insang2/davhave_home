---
title: davhave.com 아키텍처: Worker + D1 + R2 조합의 진짜 의도
slug: davhave-architecture
excerpt: 개인 스튜디오 사이트를 최소 비용으로 운영하기 위한 아키텍처 설계와 구현 이야기.
seo_title: davhave.com 풀스택 아키텍처
seo_description: Cloudflare Workers, D1, R2를 활용한 개인 블로그 플랫폼 설계.
---

## 설계의 출발점

davhave.com을 만들 때의 제약사항:

1. **비용 최소화**: 개인 프로젝트, 월 예산 $10 이하
2. **콘텐츠 관리**: 블로그 + 교육 + 포트폴리오, SSR 필수
3. **운영 자동화**: 배포, 캐싱, SEO 자동 처리
4. **글로벌 배포**: 한국뿐 아니라 해외 사용자도 고려

이 조건들이 **Cloudflare를 선택하게 한 결정적 이유**였다.

## 아키텍처 전체 그림

```
User (전 세계)
  ↓
Cloudflare Edge (지리적으로 가장 가까운 데이터센터)
  ↓
┌─────────────────────────────────────┐
│ Cloudflare Workers                  │
│ ├─ Router: /api /blog /portfolio    │
│ ├─ SSR: 요청받은 페이지를 동적 생성  │
│ └─ 캐싱: 정적 결과는 엣지에 1시간 캐싱│
└──────────────┬──────────────────────┘
      ↓ (필요 시)
   ┌──┴─────────────────┐
   ↓                    ↓
D1 (SQLite)          R2 (이미지)
├─ posts              ├─ /media/:key
├─ tags               └─ 퍼블릭 URL로
├─ post_tags            서빙 가능
└─ 읽기 최적화 지표
```

이 구조가 작동하는 이유는 **데이터 흐름을 단순화했기 때문**이다.

## Workers: 엣지에서 모든 것을 처리

davhave.com의 핵심은 **Worker가 정적 서빙과 동적 생성을 동시에 한다**는 점이다.

### 라우팅

```javascript
// src/worker.js
import { renderBlogPage, renderBlogList } from './pages/blog';
import { renderPortfolio } from './pages/portfolio';
import { renderEducation } from './pages/education';
import { handleApi } from './api/handler';
import { renderSitemap, renderRss } from './lib/feeds';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // API 라우트
    if (pathname.startsWith('/api/')) {
      return handleApi(request, env);
    }

    // 피드
    if (pathname === '/sitemap.xml') {
      return renderSitemap(env);
    }

    if (pathname === '/rss.xml') {
      return renderRss(env);
    }

    // 블로그
    if (pathname === '/blog') {
      return renderBlogList(env);
    }

    if (pathname.match(/^\/blog\/[\w-]+$/)) {
      const slug = pathname.split('/')[2];
      return renderBlogPage(slug, env);
    }

    // 포트폴리오
    if (pathname.startsWith('/portfolio')) {
      return renderPortfolio(pathname, env);
    }

    // 교육
    if (pathname.startsWith('/education')) {
      return renderEducation(pathname, env);
    }

    // 나머지는 정적 자산
    return env.ASSETS.fetch(request);
  }
};
```

### 캐싱 전략

Worker는 응답을 엣지에 캐싱한다:

```javascript
async function renderBlogList(env) {
  const cacheKey = new Request('https://davhave.com/blog-list-cache', {
    method: 'GET'
  });

  // 1. 엣지 캐시 확인
  let response = await caches.default.match(cacheKey);
  
  if (!response) {
    // 2. 캐시 미스: D1에서 데이터 가져오기
    const posts = await env.DB.prepare(`
      SELECT id, title, slug, excerpt, published_at
      FROM posts
      WHERE kind = 'blog' AND published_at <= DATETIME('now')
      ORDER BY published_at DESC
      LIMIT 20
    `).all();

    // 3. HTML 생성
    const html = await renderPostListHtml(posts.results);

    // 4. 캐싱하고 반환
    response = new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600' // 1시간
      }
    });

    await caches.default.put(cacheKey, response.clone());
  }

  return response;
}
```

**캐싱의 핵심**: 정적 콘텐츠는 1시간 캐싱, 사용자 인증이 필요한 페이지는 캐싱 안 함.

## D1: 필요한 데이터만 저장

davhave.com은 읽기 위주라서 D1으로 충분하다. 쓰기는 관리자가 하루에 몇 번 정도.

### 스키마 (최종 버전)

```sql
-- 포스트 (블로그 + 교육)
CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  kind TEXT CHECK (kind IN ('blog', 'education', 'portfolio')),
  excerpt TEXT,
  content_html TEXT,
  content_markdown TEXT,
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 태그
CREATE TABLE tags (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE post_tags (
  post_id INTEGER,
  tag_id INTEGER,
  PRIMARY KEY (post_id, tag_id)
);

-- 인덱싱 (검색 속도 최적화)
CREATE INDEX idx_posts_kind_published 
  ON posts(kind, published_at DESC);

CREATE INDEX idx_posts_slug 
  ON posts(slug);
```

### 쿼리 최적화

단순하지만 효과적:

```javascript
// 블로그 포스트 조회 (JOIN으로 태그까지 한 번에)
async function getBlogPosts(limit = 20) {
  return await env.DB.prepare(`
    SELECT 
      p.id, p.title, p.slug, p.excerpt, p.published_at,
      GROUP_CONCAT(t.name, ',') as tags
    FROM posts p
    LEFT JOIN post_tags pt ON p.id = pt.post_id
    LEFT JOIN tags t ON pt.tag_id = t.id
    WHERE p.kind = 'blog' AND p.published_at <= DATETIME('now')
    GROUP BY p.id
    ORDER BY p.published_at DESC
    LIMIT ?
  `).bind(limit).all();
}

// 특정 태그의 포스트
async function getPostsByTag(tagName, limit = 20) {
  return await env.DB.prepare(`
    SELECT p.id, p.title, p.slug, p.excerpt, p.published_at
    FROM posts p
    JOIN post_tags pt ON p.id = pt.post_id
    JOIN tags t ON pt.tag_id = t.id
    WHERE t.name = ? AND p.kind = 'blog' 
      AND p.published_at <= DATETIME('now')
    ORDER BY p.published_at DESC
    LIMIT ?
  `).bind(tagName, limit).all();
}
```

## R2: 이미지 저장소

블로그 포스트의 모든 이미지는 R2에 저장된다:

```javascript
// 관리자가 이미지를 업로드할 때
async function uploadImage(request, env) {
  const formData = await request.formData();
  const file = formData.get('file');

  if (!file) {
    return new Response('No file provided', { status: 400 });
  }

  // 파일명 생성: YYYY-MM-DD-hash
  const timestamp = new Date().toISOString().split('T')[0];
  const hash = Math.random().toString(36).substring(2, 8);
  const ext = file.name.split('.').pop();
  const filename = `${timestamp}-${hash}.${ext}`;

  // R2에 저장
  await env.MEDIA.put(filename, file.stream(), {
    httpMetadata: {
      contentType: file.type,
      cacheControl: 'public, max-age=31536000' // 1년
    }
  });

  return new Response(JSON.stringify({
    url: `https://media.davhave.com/${filename}`
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

이미지는 `https://media.davhave.com/` 로 퍼블릭 하게 접근 가능하다.

## 관리자 인증: 간단하고 안전하게

davhave.com은 운영자 1인이라서 복잡한 권한 관리가 필요 없다:

```javascript
// 관리자 로그인
async function handleLogin(request, env) {
  const { password } = await request.json();

  if (password === env.ADMIN_PASSWORD) {
    // HMAC 서명 쿠키 생성
    const sessionId = crypto.randomUUID();
    const signature = await signSession(sessionId, env.SESSION_SECRET);

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Set-Cookie': `session=${sessionId}; sig=${signature}; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`
      }
    });
  }

  return new Response(JSON.stringify({ error: 'Invalid password' }), {
    status: 401
  });
}

// 인증 체크 (모든 /api 요청에 적용)
async function requireAuth(request, env) {
  const cookie = request.headers.get('cookie');
  if (!cookie) return false;

  const sessionMatch = cookie.match(/session=([^;]+)/);
  const sigMatch = cookie.match(/sig=([^;]+)/);

  if (!sessionMatch || !sigMatch) return false;

  const [, sessionId] = sessionMatch;
  const [, signature] = sigMatch;

  // 서명 검증
  const expectedSig = await signSession(sessionId, env.SESSION_SECRET);
  return signature === expectedSig;
}
```

## 배포 워크플로우

```bash
# 1. 로컬에서 수정 및 테스트
npx wrangler dev

# 2. 배포
npx wrangler publish

# 3. git에 커밋
git add .
git commit -m "Update blog post"
git push origin main
```

배포는 1분이면 충분하다. (정적 사이트 빌드 불필요)

## 비용 분석 (실제)

- **Workers**: $0 (무료 티어: 월 10만 요청)
- **D1**: $0.75/월 (읽기 1만 번)
- **R2**: $1.50/월 (저장소 10GB, 다운로드)
- **도메인**: $0 (cloudflare.com 호스팅)

**총 월 비용: ~$2.25**

AWS로 같은 서비스를 운영하려면:

- EC2 t3.micro: $7/월
- RDS: $15/월
- S3: $5/월
- **총 ~$27/월** (3배 이상)

## 한계와 트레이드오프

1. **콜드 스타트**: Worker 번들이 크면 첫 요청이 느릴 수 있음 (현재는 없음)
2. **D1 쿼리 제한**: 월 10만 쿼리까지만 무료 (대규모 분석 불가)
3. **디버깅**: 프로덕션 에러 추적이 제한적

하지만 **블로그 수준의 트래픽에서는 전혀 문제 없다.**

## 결론: 적절한 도구 선택

davhave.com의 성공은 **"우리가 실제로 필요한 것"을 정확히 파악하고, 그에 딱 맞는 도구를 선택한 결과**다. 

Workers는 빠르고, D1은 가볍고, R2는 저렴하다. 이 셋의 조합은 개인 블로그라는 작은 프로젝트에 완벽하다. 만약 대규모 트래픽이 생기면, 그때 AWS로 마이그레이션하면 된다. 지금 과도하게 설계할 이유는 없다.
