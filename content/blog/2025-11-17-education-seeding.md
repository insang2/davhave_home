---
title: 교육 콘텐츠 시딩: 파일 + 시드 스크립트 vs 관리자 UI
slug: education-seeding
excerpt: 22강 교육 커리큘럼을 D1에 초기 로드하는 두 가지 방식과 각각의 트레이드오프.
seo_title: 데이터베이스 시딩 전략 비교
seo_description: 대량 초기 데이터 로드, 스크립트 기반 vs UI 기반 방식, 유지보수 고려.
---

## 문제: 22개 강의를 어떻게 로드할 것인가?

davhave.com의 교육 섹션이 완성되고, 22개 강의를 D1에 넣어야 했다.

선택지:

1. **파일 + 시드 스크립트**: 마크다운 파일을 읽어서 자동으로 DB에 로드
2. **관리자 UI**: 브라우저에서 손으로 하나씩 입력

초기에 난 자동화를 좋아하므로 1번을 선택했다. 하지만 3개월 뒤, 단점을 배웠다.

## 방법 1: 파일 + 시드 스크립트

### 구조

```
content/education/
  ├─ section-1/
  │  ├─ 001-intro.md
  │  ├─ 002-concepts.md
  │  ├─ 003-architecture.md
  │  └─ ...
  ├─ section-2/
  │  ├─ 001-advanced-topic.md
  │  └─ ...
  └─ ...

scripts/
  └─ seed-education.js ← 이 스크립트가 모든 파일을 읽어 DB에 로드
```

### 시드 스크립트

```javascript
// scripts/seed-education.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '../content/education');

async function seedEducation(db) {
  // 섹션 디렉토리 순회
  const sections = fs.readdirSync(contentDir);

  for (const section of sections) {
    const sectionPath = path.join(contentDir, section);
    const sectionStats = fs.statSync(sectionPath);

    if (!sectionStats.isDirectory()) continue;

    // 섹션별 마크다운 파일 읽기
    const files = fs.readdirSync(sectionPath).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(sectionPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Frontmatter 파싱
      const [, frontmatter, body] = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      const metadata = parseFrontmatter(frontmatter);

      // DB에 삽입
      const result = await db.prepare(`
        INSERT INTO posts (
          title, slug, kind, category, excerpt, 
          content_markdown, content_html, published_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(slug) DO UPDATE SET
          title = excluded.title,
          content_html = excluded.content_html,
          updated_at = CURRENT_TIMESTAMP
      `).bind(
        metadata.title,
        metadata.slug,
        'education',
        section.replace('section-', ''), // category
        metadata.excerpt,
        body,
        marked(body), // HTML 렌더링
        new Date().toISOString()
      ).run();

      console.log(`✓ Loaded: ${metadata.slug}`);
    }
  }

  console.log('✅ Education seeding complete!');
}

function parseFrontmatter(frontmatter) {
  const metadata = {};
  for (const line of frontmatter.split('\n')) {
    if (!line.includes(':')) continue;
    const [key, ...valueParts] = line.split(':');
    metadata[key.trim()] = valueParts.join(':').trim();
  }
  return metadata;
}

// 실행
async function main() {
  const db = /* D1 연결 */;
  await seedEducation(db);
}

main().catch(console.error);
```

### 실행 방법

```bash
# 로컬에서 테스트
npx wrangler d1 execute davhave-content --local --file=scripts/seed-education.js

# 프로덕션에 적용
npx wrangler d1 execute davhave-content --remote --file=scripts/seed-education.js
```

### 장점

```
✓ 일괄 로드 가능
✓ 버전 관리 (git에 커밋)
✓ 대량 수정 쉬움 (find & replace)
✓ 자동화 가능 (CI/CD와 통합)
✓ 재현 가능 (같은 파일로 몇 번이고 반복)
```

### 단점 (마주친 것)

```
✗ 파일과 DB 간 동기화 문제
  → 브라우저에서 수정했는데, 파일은 그대로면?
  
✗ 오타 수정이 어려움
  → 파일 수정 → 스크립트 실행 → 배포
  
✗ 포맷 변경 시 모든 파일 수정 필요
  → 예: Frontmatter 필드 추가
  
✗ 동적 콘텐츠 불가
  → 실시간 데이터, 통계 등
  
✗ 스크립트 버그 시 전체 데이터 손상 가능
```

## 방법 2: 관리자 UI

### 구현

```javascript
// src/pages/admin/edit-lesson.js
export async function handleEditLesson(req, env) {
  if (req.method === 'POST') {
    const { title, slug, category, excerpt, content } = await req.json();

    // 즉시 DB에 저장
    const result = await env.DB.prepare(`
      INSERT INTO posts (title, slug, kind, category, excerpt, 
                        content_markdown, content_html, published_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(slug) DO UPDATE SET ...
    `).bind(
      title, slug, 'education', category, excerpt,
      content, marked(content), new Date().toISOString()
    ).run();

    return new Response(JSON.stringify({ success: true, id: result.meta.last_row_id }));
  }

  // GET: 편집 폼 반환
  const lesson = await env.DB.prepare(`
    SELECT * FROM posts WHERE slug = ? AND kind = 'education'
  `).bind(req.query.slug).first();

  return new Response(renderEditForm(lesson));
}
```

### UI

```html
<form id="edit-form">
  <input type="text" id="title" placeholder="강의 제목" required>
  <input type="text" id="slug" placeholder="슬러그" required>
  <select id="category" required>
    <option>section-1</option>
    <option>section-2</option>
    <!-- ... -->
  </select>
  <textarea id="excerpt" placeholder="요약" required></textarea>
  <textarea id="content" placeholder="마크다운 본문" required></textarea>
  <button type="submit">저장</button>
</form>

<script>
document.getElementById('edit-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const data = {
    title: document.getElementById('title').value,
    slug: document.getElementById('slug').value,
    category: document.getElementById('category').value,
    excerpt: document.getElementById('excerpt').value,
    content: document.getElementById('content').value
  };

  const res = await fetch('/api/admin/lessons', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) alert('저장되었습니다!');
});
</script>
```

### 장점

```
✓ 실시간 수정 (배포 불필요)
✓ 손쉬운 오타 수정
✓ 빠른 피드백 루프
✓ 파일/DB 동기화 불필요
✓ 버전 관리 자유로움
```

### 단점

```
✗ 초기 22개 강의를 손으로 입력? (4~5시간)
✗ 역사 추적 불가 (git log 없음)
✗ 백업 의존
✗ 다중 편집자 시 충돌 가능
✗ 마크다운 프리뷰 필요 (별도 구현)
```

## 현실: 최고의 방식은 둘의 조합

현재 davhave의 전략:

### Phase 1: 초기 로드 (파일 + 스크립트)

```bash
# 22개 강의를 일괄 로드
node scripts/seed-education.js
git commit -m "Initial education content seeding"
```

**선택 이유**: 대량 데이터를 빠르게 로드하고, git 히스토리 유지

### Phase 2: 유지보수 (관리자 UI + git sync)

```javascript
// 매일 오전 6시에 자동 백업
export async function backupToGit(env) {
  const lessons = await env.DB.prepare(`
    SELECT * FROM posts WHERE kind = 'education'
  `).all();

  // content/education/ 디렉토리 업데이트
  for (const lesson of lessons.results) {
    const filePath = `content/education/${lesson.category}/${lesson.slug}.md`;
    const content = reconstructMarkdown(lesson);
    
    fs.writeFileSync(filePath, content);
  }

  // git 커밋
  execSync('git add content/education/');
  execSync('git commit -m "Auto-sync education content"');
  execSync('git push origin main');
}
```

이렇게 하면:

1. **브라우저에서 수정** (빠름)
2. **자동으로 파일에 반영** (히스토리 유지)
3. **매일 백업** (안전)

## 하이브리드 구현

```javascript
// src/lib/contentSync.js
export async function syncContentBidirectional(env) {
  // 1. DB에서 최신 데이터 읽기
  const lessons = await env.DB.prepare(`
    SELECT * FROM posts WHERE kind = 'education'
  `).all();

  // 2. 파일 시스템에 쓰기
  for (const lesson of lessons.results) {
    const dir = `content/education/${lesson.category}`;
    const filePath = path.join(dir, `${lesson.slug}.md`);

    ensureDirExists(dir);
    fs.writeFileSync(filePath, reconstructMarkdown(lesson));
  }

  // 3. git 커밋
  if (hasChanges()) {
    execSync('git add content/education/');
    execSync(`git commit -m "Auto-sync: ${new Date().toISOString()}"`);
    execSync('git push origin main');
  }
}

// 역방향: 파일이 변경되면 DB 업데이트
export async function syncFilesToDatabase(env) {
  const files = findMarkdownFiles('content/education');

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const [, frontmatter, body] = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    const metadata = parseFrontmatter(frontmatter);

    // DB 업데이트
    await env.DB.prepare(`
      INSERT OR REPLACE INTO posts (...)
      VALUES (...)
    `).bind(...).run();
  }
}
```

## 결론: 선택은 상황에 따라

| 상황 | 추천 방식 |
|------|---------|
| 초기 대량 데이터 로드 | 파일 + 스크립트 |
| 빈번한 수정 | 관리자 UI |
| 역사 추적 중요 | 파일 + git |
| 팀 협업 | 관리자 UI + auto-sync |
| 성능 최적화 | 파일 캐싱 + 정적 생성 |

davhave는 **초기엔 스크립트, 운영은 UI**를 선택했다. 이것이 **유연성과 안정성의 최고의 조합**이다.
