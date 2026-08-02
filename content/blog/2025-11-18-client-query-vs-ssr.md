---
title: 클라이언트 쿼리 vs SSR: davhave.com의 선택과 트레이드오프
slug: client-query-vs-ssr
excerpt: 동일한 콘텐츠를 보여줄 때, 클라이언트에서 쿼리할지, 서버에서 렌더링할지의 비교.
seo_title: 클라이언트 쿼리 vs SSR 비교
seo_description: 성능, SEO, 사용자 경험, 개발 복잡도를 고려한 렌더링 전략 선택.
---

## 문제 상황

davhave.com의 블로그 목록 페이지(`/blog`)를 만들 때:

```
요구사항:
1. 모든 발행된 블로그 포스트 표시
2. 태그로 필터링 가능
3. 빠른 로딩
4. SEO 최적화
```

두 가지 접근이 가능했다:

### 방법 1: 클라이언트 쿼리 (CSR)

```html
<!-- /blog/index.html (정적) -->
<!DOCTYPE html>
<html>
<head>
  <title>블로그</title>
</head>
<body>
  <div id="posts"></div>
  
  <script>
    // 브라우저에서 실행
    async function loadPosts() {
      const res = await fetch('/api/posts');
      const posts = await res.json();
      
      document.getElementById('posts').innerHTML = posts
        .map(p => `<div>${p.title}</div>`)
        .join('');
    }
    
    loadPosts();
  </script>
</body>
</html>
```

### 방법 2: 서버 쪽 렌더링 (SSR)

```javascript
// Cloudflare Worker에서
export async function renderBlogPage(req, env) {
  // 서버에서 데이터 조회
  const posts = await env.DB.prepare(`
    SELECT * FROM posts WHERE published = true
  `).all();
  
  // 서버에서 HTML 생성
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>블로그</title>
    </head>
    <body>
      ${posts.results.map(p => 
        `<div>${p.title}</div>`
      ).join('')}
    </body>
    </html>
  `;
  
  return new Response(html);
}
```

## 비교: 7가지 관점

### 1. 초기 로딩 속도

**CSR (클라이언트 쿼리)**:
```
사용자: 페이지 요청
  ↓ (100ms)
브라우저: 빈 HTML 받음
  ↓ (JS 로드 100ms)
JavaScript 실행
  ↓ (API 요청 50ms)
/api/posts 호출
  ↓ (DB 쿼리 50ms)
JSON 응답
  ↓ (렌더링 30ms)
HTML 완성

총 합계: ~330ms 이상
```

**SSR (서버 렌더링)**:
```
사용자: 페이지 요청
  ↓ (100ms)
Worker: DB 쿼리 (50ms)
  ↓
HTML 생성 (30ms)
  ↓
완성된 HTML 반환

총 합계: ~180ms
```

**승자: SSR (약 2배 빠름)**

### 2. SEO

**CSR의 문제**:

초기 HTML은:
```html
<html>
  <body>
    <div id="posts"></div> ← 비어있음!
  </body>
</html>
```

Google 크롤러가 이걸 보면 "포스트가 없다"고 판단한다. JavaScript를 실행해서 최종 페이지를 파악하려면 시간이 걸린다.

**SSR의 장점**:

```html
<html>
  <body>
    <article>
      <h2>Cloudflare Workers 경험담</h2>
      <p>본문 미리보기...</p>
    </article>
    <article>
      <h2>D1 데이터베이스 설계</h2>
      <!-- ... -->
    </article>
  </body>
</html>
```

크롤러가 즉시 모든 콘텐츠를 인식한다.

**승자: SSR (SEO에 결정적)**

### 3. 개발 복잡도

**CSR**:
```javascript
// frontend/pages/blog.js
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('/api/posts')
    .then(r => r.json())
    .then(setPosts)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);

return (
  <>
    {loading && <div>로딩 중...</div>}
    {error && <div>에러!</div>}
    {posts.map(p => <div key={p.id}>{p.title}</div>)}
  </>
);
```

상태 관리, 에러 처리, 로딩 상태가 필요하다.

**SSR**:
```javascript
// server/pages/blog.js
export async function renderBlogPage(env) {
  const posts = await env.DB.prepare(`
    SELECT * FROM posts WHERE published = true
  `).all();
  
  return new Response(`
    <!DOCTYPE html>
    <html>
      <body>
        ${posts.results.map(p => 
          `<div>${p.title}</div>`
        ).join('')}
      </body>
    </html>
  `);
}
```

더 간단하고 선형적이다.

**승자: SSR (코드 단순함)**

### 4. 캐싱 전략

**CSR**:
```javascript
// API는 항상 최신 데이터 반환
app.get('/api/posts', (req, res) => {
  // DB 쿼리는 매번 실행
  const posts = await db.query('SELECT * FROM posts');
  res.json(posts);
});
```

캐싱이 어렵다. 포스트 업데이트 시 클라이언트 캐시를 무효화하기 복잡하다.

**SSR**:
```javascript
export async function renderBlogPage(env) {
  // 1시간 캐싱
  const cacheKey = new Request('https://cache/blog');
  let response = await caches.default.match(cacheKey);
  
  if (!response) {
    const html = generateHTML();
    response = new Response(html, {
      headers: { 'Cache-Control': 'max-age=3600' }
    });
    await caches.default.put(cacheKey, response.clone());
  }
  
  return response;
}
```

**승자: SSR (캐싱이 자연스러움)**

### 5. 네트워크 트래픽

**CSR**:
```
1. HTML 요청: 5KB
2. JavaScript 번들: 50KB
3. API 응답: 30KB (포스트 데이터)
--------
총 85KB
```

**SSR**:
```
1. HTML (완성된 상태): 80KB
--------
총 80KB
```

거의 같지만, SSR은 CSS/JS 번들이 필요 없을 수 있다.

**비긴장: 비슷**

### 6. 상호작용 (인터랙티비티)

**CSR의 강점**:

```javascript
// 클라이언트에서 필터링 (DB 쿼리 없음)
const [selectedTag, setSelectedTag] = useState(null);

const filteredPosts = selectedTag
  ? posts.filter(p => p.tags.includes(selectedTag))
  : posts;
```

태그 필터링이 즉시 반영된다. 새 요청 불필요.

**SSR의 약점**:

```javascript
// 필터링할 때마다 새 요청
if (req.query.tag) {
  const posts = await env.DB.prepare(`
    SELECT * FROM posts WHERE tags LIKE ?
  `).bind(`%${tag}%`).all();
}
```

매번 서버 왕복 필요.

**승자: CSR (상호작용이 부드러움)**

### 7. 유지보수

**CSR**: 클라이언트/서버 코드 분리, 버전 불일치 가능
**SSR**: 한 곳에서 관리, 일관성 높음

**승자: SSR**

## davhave의 선택: SSR + 하이브리드

결론: **SSR을 기본으로, 필요시 CSR 추가**

```javascript
export async function renderBlogPage(req, env) {
  const tag = new URL(req.url).searchParams.get('tag');

  // SSR: 초기 HTML 렌더링 (SEO 중요)
  let posts;
  if (tag) {
    posts = await env.DB.prepare(`
      SELECT p.* FROM posts p
      JOIN post_tags pt ON p.id = pt.post_id
      JOIN tags t ON pt.tag_id = t.id
      WHERE t.name = ? AND p.published = true
    `).bind(tag).all();
  } else {
    posts = await env.DB.prepare(`
      SELECT * FROM posts WHERE published = true
    `).all();
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>블로그${tag ? ` - ${tag}` : ''}</title>
    </head>
    <body>
      <div class="posts">
        ${posts.results.map(p => 
          `<article data-id="${p.id}">
            <h2>${p.title}</h2>
            <p>${p.excerpt}</p>
          </article>`
        ).join('')}
      </div>
      
      <!-- CSR: 클라이언트 상호작용 추가 -->
      <script>
        document.querySelectorAll('article').forEach(el => {
          el.addEventListener('click', () => {
            const id = el.dataset.id;
            // 상세 페이지로 이동
            window.location.href = '/blog/' + id;
          });
        });
      </script>
    </body>
    </html>
  `;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
```

## 최종 비교표

| 기준 | CSR | SSR | davhave 선택 |
|------|-----|-----|-------------|
| 초기 로딩 속도 | 느림 | 빠름 | SSR |
| SEO | 약함 | 강함 | SSR |
| 개발 복잡도 | 높음 | 낮음 | SSR |
| 캐싱 | 어려움 | 쉬움 | SSR |
| 상호작용 | 좋음 | 약함 | 필요시 JS |
| 유지보수 | 어려움 | 쉬움 | SSR |

## 결론

**SSR은 블로그/콘텐츠 중심 사이트에 최적이다.**

CSR은:
- 대시보드 (실시간 업데이트)
- SPA (Single Page Application)
- 매우 상호작용적인 앱 (게임, 에디터)

에 더 적합하다. davhave는 전자라서 SSR을 선택했다.
