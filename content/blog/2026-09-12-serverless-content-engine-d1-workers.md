---
title: CMS 없이 블로그·교육 콘텐츠 엔진 만들기 — Cloudflare D1 + Workers
slug: serverless-content-engine-d1-workers
excerpt: WordPress도 Headless CMS도 없이, Cloudflare Workers와 D1 테이블 하나로 블로그와 교육 콘텐츠를 함께 굴리는 방법. 스키마 설계, 단일 비밀번호 인증, SSR 렌더링까지.
seo_title: Cloudflare D1 + Workers로 서버리스 콘텐츠 엔진 만들기
seo_description: Headless CMS 없이 Cloudflare Workers와 D1으로 블로그·교육 콘텐츠 CRUD, SSR, 동적 sitemap을 구축한 실제 아키텍처. 스키마·인증·렌더링 설계 정리.
---

## 문제: 개인 사이트에 CMS는 과하다

davhave.com에는 블로그 글과 교육 레슨(수백 편)이 올라간다. 처음엔 선택지가 이랬다.

- **WordPress** — DB, PHP 호스팅, 플러그인 업데이트, 보안 패치. 운영자 1명한테 과한 유지보수.
- **Headless CMS (Contentful, Sanity 등)** — 월 구독료, 벤더 종속, API 왕복 지연.
- **Markdown + 정적 빌드 (Astro 등)** — 좋지만 글을 쓸 때마다 빌드·배포가 필요하고, 관리 UI가 없다.

결국 **Cloudflare Workers + D1 테이블 하나**로 갔다. 이 글은 그 구조다.

## 스키마: 블로그와 교육이 한 테이블을 공유한다

핵심 결정 하나. 블로그 글과 교육 레슨은 **같은 `posts` 테이블**을 쓰고, `kind` 컬럼(`blog` | `education`)으로만 구분한다.

```sql
CREATE TABLE posts (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  kind          TEXT NOT NULL CHECK (kind IN ('blog', 'education')),
  category      TEXT,                            -- 교육 카테고리 (ai, python, ...)
  slug          TEXT NOT NULL UNIQUE,
  title         TEXT NOT NULL,
  excerpt       TEXT,
  content_md    TEXT NOT NULL DEFAULT '',
  content_html  TEXT NOT NULL DEFAULT '',        -- 저장 시점에 마크다운 → HTML 변환
  cover_image_url TEXT,
  status        TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  seo_title     TEXT,
  seo_description TEXT,
  order_index   INTEGER NOT NULL DEFAULT 0,
  published_at  TEXT,
  updated_at    TEXT NOT NULL DEFAULT (datetime('now')),
  created_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_posts_kind_status ON posts (kind, status, published_at DESC);
```

둘 다 "제목·슬러그·본문·SEO 메타·발행 상태"가 필요하다. 90%가 같은데 CRUD 스택을 두 벌 만드는 건 낭비다. 다른 부분(교육의 `category`, `order_index` 기반 이전/다음 레슨)은 컬럼 몇 개와 쿼리 분기로 흡수된다.

태그는 정석대로 조인 테이블:

```sql
CREATE TABLE tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE
);
CREATE TABLE post_tags (
  post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag_id  INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);
```

## 마크다운은 "쓸 때" 변환하고 저장한다

`content_md`(원본)와 `content_html`(렌더된 것)을 **둘 다** 저장한다. 변환은 글을 저장하는 순간 한 번만.

```javascript
// POST /api/posts
body.content_html = marked.parse(body.content_md || "");
const post = await createPost(env.DB, body, uniqueSlug);
```

읽기 요청마다 마크다운을 파싱하지 않는다. 페이지 렌더는 `content_html`을 그대로 `<article>`에 꽂으면 끝이다. 읽기가 쓰기보다 수천 배 많은 워크로드에서 이건 큰 차이다.

## 인증: 운영자 1명이면 회원 시스템이 필요 없다

관리자가 한 명이다. 이메일/비밀번호 테이블, 세션 스토어, 비밀번호 재설정 플로우 — 전부 필요 없다.

단일 비밀번호(시크릿 `ADMIN_PASSWORD`) → 맞으면 **HMAC 서명 쿠키**를 발급한다. 서버에 세션을 저장하지 않는다. 쿠키 자체가 만료 시각을 담고, 서명으로 위조를 막는다.

```javascript
export async function createSessionToken(secret) {
  const payload = JSON.stringify({
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 14, // 14일
  });
  const payloadB64 = toBase64Url(encoder.encode(payload));
  const key = await hmacKey(secret);                       // WebCrypto HMAC-SHA256
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payloadB64));
  return `${payloadB64}.${toBase64Url(sig)}`;
}
```

검증은 서명 재계산 + 만료 확인뿐이다.

```javascript
export async function verifySessionToken(token, secret) {
  if (!token || !token.includes(".")) return false;
  const [payloadB64, sigB64] = token.split(".");
  const key = await hmacKey(secret);
  const valid = await crypto.subtle.verify(
    "HMAC", key, fromBase64Url(sigB64), encoder.encode(payloadB64)
  );
  if (!valid) return false;
  const payload = JSON.parse(decoder.decode(fromBase64Url(payloadB64)));
  return typeof payload.exp === "number" && payload.exp > Math.floor(Date.now() / 1000);
}
```

쿠키는 `HttpOnly; Secure; SameSite=Lax`. WebCrypto는 Workers 런타임에 내장이라 라이브러리도 없다. 30줄이면 끝난다.

> 이건 "운영자 1명, 낮은 가치 대상"이라서 성립하는 설계다. 사용자 계정이 여럿이거나 민감 데이터를 다루면 제대로 된 인증으로 가야 한다.

## 라우팅: Worker가 정적 자산보다 먼저 실행된다

`wrangler.toml`에 `run_worker_first = true`. 모든 요청이 Worker를 먼저 탄다.

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname.startsWith("/api/"))      return handleApi(request, env, url);
    if (pathname.startsWith("/media/"))    return handleMedia(request, env, pathname.slice(7));
    if (pathname === "/sitemap.xml")       return renderSitemapRoute(env);
    if (pathname === "/rss.xml")           return renderRssRoute(env);
    if (pathname.startsWith("/blog"))      return handleBlog(request, env, ...);
    if (pathname.startsWith("/education")) return handleEducation(env, ...);

    // 그 외는 기존 정적 파일 (홈페이지, robots.txt 등)
    return env.ASSETS.fetch(request);
  },
};
```

SSR 페이지, 이미지 서빙(R2), API가 한 파일에서 갈린다. 매칭 안 되면 `env.ASSETS`로 정적 파일 패스스루.

## 공짜로 얻는 것: 동적 sitemap · RSS · llms.txt

콘텐츠가 DB에 있으니, `/sitemap.xml`은 요청 시점에 생성하면 항상 최신이다.

```javascript
if (pathname === "/sitemap.xml") {
  const [blogPosts, educationPosts] = await Promise.all([
    listAllPublished(env.DB, "blog"),
    listAllPublished(env.DB, "education"),
  ]);
  const xml = renderSitemap({ blogPosts, projects, educationPosts });
  return withSecurityHeaders(
    new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } }),
    { "Cache-Control": "public, max-age=3600, s-maxage=86400" }
  );
}
```

글을 발행하면 sitemap·RSS·`llms.txt`(AI 크롤러용)에 자동으로 나타난다. 따로 갱신할 파일이 없다. `s-maxage`로 엣지 캐시에 얹으면 실제 origin 실행은 캐시 만료 때만.

## 비용과 운영

- **서버**: 없음. Workers 무료 한도(일 10만 요청) 안에서 돈이 안 나간다.
- **DB**: D1 무료 한도(5GB, 일 500만 read)로 충분.
- **이미지**: R2는 egress 무료.
- **배포**: `wrangler deploy` — 5초.
- **패치할 서버가 없다**: 런타임은 Cloudflare가 관리한다.

## 정리

개인·소규모 사이트의 콘텐츠 엔진에 CMS는 대개 과하다. **테이블 하나 + `kind` 컬럼**으로 콘텐츠 종류를 통합하고, 마크다운은 쓸 때 변환해 저장하고, 인증은 HMAC 쿠키로 상태 없이 처리하면 — Cloudflare Workers + D1만으로 유지보수 없는 콘텐츠 시스템이 된다.

이 스택으로 사이트·백엔드를 옮기고 싶다면 [엣지 & 서버리스 인프라](/services/edge-infra), 콘텐츠 중심 웹 서비스는 [반응형 웹 & SaaS](/services/responsive-web)를 참고하면 된다. 스키마 설계와 SQL의 기초는 [데이터베이스 교육](/education/database)에 정리해뒀고, 다른 구축 사례는 [프로젝트 페이지](/projects)에 있다.
