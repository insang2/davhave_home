---
title: 마크다운 렌더링의 예상 외 성능 vs 정규식 전처리
slug: markdown-rendering-perf
excerpt: marked.js 성능 측정과 정규식 전처리를 통한 최적화 실험.
seo_title: 마크다운 렌더링 성능 최적화
seo_description: marked.js, 정규식, 캐싱을 활용한 마크다운 렌더링 최적화 방법.
---

## 시작: 느린 페이지 로딩

davhave.com의 블로그 포스트를 로드할 때, 가끔 1초 이상 걸렸다.

```
요청: GET /blog/cloudflare-fullstack
Worker 처리 시간: 1.2s
응답: 200 OK
```

1초는 사용자 경험에 의미 있는 지연이다. 원인을 파악했다:

```javascript
// 이전 코드
const htmlContent = marked(post.content_markdown);
// marked 라이브러리가 매번 전체 마크다운을 파싱
```

마크다운 파싱이 느렸던 거다.

## 벤치마크: 측정 없이 최적화 없다

정확한 원인을 알기 위해 벤치마크를 만들었다:

```javascript
// src/lib/bench.js
export async function benchmarkMarkdown(markdown) {
  const tests = [
    { name: 'marked (first time)', fn: () => marked(markdown) },
    { name: 'marked (cached)', fn: () => cachedMarked(markdown) },
    { name: 'regex preprocessing', fn: () => regexPreprocess(markdown) },
    { name: 'combined', fn: () => regexThenMarked(markdown) }
  ];

  for (const test of tests) {
    const start = performance.now();
    for (let i = 0; i < 100; i++) {
      test.fn();
    }
    const end = performance.now();
    const avg = (end - start) / 100;
    
    console.log(`${test.name}: ${avg.toFixed(2)}ms per parse`);
  }
}
```

실제 블로그 포스트 (약 2000단어)로 테스트:

```
marked (first time): 15.4ms per parse
marked (cached): 0.1ms per parse
regex preprocessing: 2.3ms per parse
combined: 2.4ms per parse
```

흥미롭게도, **marked 자체는 빠르지만 캐싱이 핵심**이었다.

## 문제: 매번 파싱하고 있었다

Worker는 요청마다 다시 마크다운을 HTML로 변환했다:

```javascript
// 문제 있는 코드
export async function renderBlogPage(slug, env) {
  const post = await env.DB.prepare(`SELECT * FROM posts WHERE slug = ?`).bind(slug).first();
  
  // 매번 파싱! (DB에는 이미 HTML로 저장되어 있는데)
  const html = marked(post.content_markdown);
  
  return new Response(html);
}
```

## 솔루션 1: DB에 미리 렌더링

가장 간단한 해결책은 **마크다운을 저장할 때만 HTML로 변환하는 것**:

```sql
-- posts 테이블 구조
CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  title TEXT,
  content_markdown TEXT,     -- 원본 (편집용)
  content_html TEXT,         -- 미리 렌더링된 HTML
  published_at DATETIME
);
```

포스트 저장 시에만 렌더링:

```javascript
export async function savePost(title, markdown, slug) {
  // marked로 한 번만 렌더링
  const html = marked(markdown);

  await env.DB.prepare(`
    INSERT INTO posts (title, content_markdown, content_html, slug)
    VALUES (?, ?, ?, ?)
  `).bind(title, markdown, html, slug).run();
}
```

조회할 때는 HTML만 반환:

```javascript
export async function renderBlogPage(slug) {
  const post = await env.DB.prepare(`
    SELECT content_html FROM posts WHERE slug = ?
  `).bind(slug).first();

  return new Response(post.content_html);
}
```

**결과**: 0ms (HTML 그냥 반환)

## 솔루션 2: 메모리 캐싱 (더 복잡한 경우)

만약 마크다운이 매번 달라진다면? (예: 동적 콘텐츠)

```javascript
// src/lib/cache.js
const markdownCache = new Map();

export function cachedMarked(markdown, ttl = 3600) {
  const hash = hashString(markdown);
  
  // 캐시 확인
  if (markdownCache.has(hash)) {
    const cached = markdownCache.get(hash);
    if (Date.now() - cached.timestamp < ttl * 1000) {
      return cached.html;
    }
  }

  // 캐시 미스: 파싱
  const html = marked(markdown);

  // 저장
  markdownCache.set(hash, {
    html,
    timestamp: Date.now()
  });

  return html;
}

function hashString(str) {
  // 간단한 해시 (실제로는 crypto.subtle.digest 사용)
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 32비트 정수로 변환
  }
  return hash.toString();
}
```

## 솔루션 3: 정규식 전처리 (특수한 경우)

포스트가 매우 길 경우, 렌더링 전에 정규식으로 일부를 제거할 수 있다:

```javascript
export function regexPreprocess(markdown) {
  let processed = markdown;

  // 1. 주석 제거 (<!-- comment --> 형식)
  processed = processed.replace(/<!--[\s\S]*?-->/g, '');

  // 2. 불필요한 공백 제거
  processed = processed.replace(/\n{3,}/g, '\n\n');

  // 3. 코드 블록은 marked에게 맡기기
  // (정규식으로 코드 블록을 건드리지 않음)

  return marked(processed);
}
```

하지만 **정규식은 마크다운 문법을 완벽히 이해하지 못한다**. 예를 들어:

```markdown
이것은 코드 블록입니다:
```javascript
const url = "https://example.com";
```

위 예제에서 정규식으로 공백을 제거하려고 하면 코드 블록 내부도 영향받을 수 있다.

## 최종 전략: 측정 기반 최적화

현재 davhave.com의 전략:

```javascript
export async function renderBlogPage(slug, env) {
  // 1. DB에서 이미 렌더링된 HTML 가져오기
  const post = await env.DB.prepare(`
    SELECT 
      id, title, content_html, published_at
    FROM posts 
    WHERE slug = ? AND published_at <= DATETIME('now')
  `).bind(slug).first();

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  // 2. SEO 메타 태그는 따로 생성 (빠름)
  const metaTags = generateMetaTags(slug, post.title);

  // 3. HTML 조립
  const html = `<!DOCTYPE html>
<html>
<head>
  ${metaTags}
</head>
<body>
  <article>
    <h1>${post.title}</h1>
    <div class="content">
      ${post.content_html}
    </div>
  </article>
</body>
</html>`;

  // 4. Worker 엣지 캐싱 (1시간)
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
```

## 측정 결과

최적화 후:

| 단계 | 시간 |
|------|------|
| DB 쿼리 | 45ms |
| HTML 렌더링 | 2ms |
| 메타 태그 생성 | 1ms |
| **총합** | **48ms** |

캐싱이 있으면 25ms까지 떨어진다 (Worker 엣지 캐시 사용 시).

## marked.js 최적화 팁

만약 marked.js로 많은 양의 마크다운을 파싱해야 한다면:

```javascript
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/+esm';

// 1. Hooks를 활용한 커스텀 렌더링
marked.use({
  hooks: {
    preprocess: (markdown) => {
      // 전처리
      return markdown;
    },
    postprocess: (html) => {
      // 후처리 (예: 외부 링크에 target="_blank" 추가)
      return html.replace(/<a href="http/g, '<a target="_blank" href="http');
    }
  }
});

// 2. 렌더러 커스텀 (필요한 부분만)
const renderer = {
  heading(token) {
    // 기본 동작 대신 커스텀 구현
    return `<h${token.depth} id="h-${token.text.toLowerCase()}">${token.text}</h${token.depth}>`;
  }
};
marked.use({ renderer });

// 3. 토큰화 (파싱만 하고 렌더링 X)
const tokens = marked.lexer(markdown);
// 토큰 조작
const html = marked.parser(tokens);
```

## 언제 정규식을 써야 하는가?

정규식은 매우 제한적이다. 다음 경우에만:

1. **간단한 텍스트 변환**: "2025-01-01" → "Jan 1, 2025"
2. **메타데이터 추출**: Frontmatter의 YAML 파싱 (제한적)
3. **보안 필터**: XSS 방지 (< > 같은 문자 제거)

**마크다운 파싱에는 사용하지 말 것.** 마크다운은 복잡해서 정규식으로는 불가능하다.

## 결론: 측정이 최적화의 시작

처음엔 marked.js가 병목인 줄 알았지만, 실제론 **캐싱 전략 부재**였다.

최고의 최적화는:

1. **측정**: 정확한 병목 파악
2. **캐싱**: 99%의 성능 향상
3. **필요시 코드 개선**: 나머지 1%

정규식이나 복잡한 전처리는 필요 없었다.
