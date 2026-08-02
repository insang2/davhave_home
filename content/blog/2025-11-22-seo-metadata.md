---
title: SEO 메타데이터 관리: Markdown 문서에서 동적 생성까지
slug: seo-metadata
excerpt: 블로그 콘텐츠의 메타데이터를 마크다운에 정의하고, 검색엔진 최적화 태그로 동적 생성하는 방법.
seo_title: SEO 메타데이터 관리 가이드
seo_description: Open Graph, Twitter Card, 구조화된 데이터(Schema) 자동 생성 및 관리 방법.
---

## 문제: 수동 관리의 한계

초기에 davhave.com의 메타데이터는 이렇게 관리했다:

```html
<!-- pages/blog/cloudflare-fullstack.html -->
<meta name="description" content="Cloudflare Workers로...">
<meta property="og:title" content="Cloudflare Workers...">
<meta property="og:description" content="Cloudflare Workers로...">
```

매번 글을 쓸 때마다:

1. HTML 파일에 수동으로 메타데이터 입력
2. Open Graph 태그 복사-붙여넣기
3. Twitter Card 작성
4. 실수로 설명 길이를 160자를 넘김

**절대 확장 가능하지 않았다.** 15개 포스트쯤 되니까 유지보수가 악몽이 됐다.

## 솔루션: Frontmatter에 메타데이터 정의

마크다운 포스트의 Frontmatter에서 SEO 정보를 관리하기로 했다:

```markdown
---
title: Cloudflare Workers로 풀스택 시스템 구축한 경험
slug: cloudflare-fullstack
excerpt: Workers + D1 + R2 조합으로 AWS 없이 풀스택을 구성한 이유와 경험담.

# SEO 관련 (선택사항)
seo_title: Cloudflare Workers 풀스택 개발 경험담
seo_description: davhave.com을 Workers, D1, R2로 구축한 과정. 전역 배포, DB 관리, 이미지 저장소 통합.

# Open Graph (소셜 미디어)
og_title: Cloudflare Workers로 풀스택 시스템 구축한 경험
og_description: 개발 스튜디오의 아키텍처 여정, Workers + D1 + R2
og_image: /media/2025-12-01-cloudflare-preview.jpg

# Twitter Card
twitter_card: summary_large_image
twitter_creator: @davhave_studio

# 검색 키워드
keywords: cloudflare,workers,d1,r2,풀스택

# 발행 정보
published_date: 2025-12-01
updated_date: 2025-12-02
author: Oscar Lee
---

본문...
```

## 규칙: 메타데이터 길이 제한

검색 결과에서 잘려나가지 않도록:

| 메타데이터 | 최대 길이 | 표시 범위 |
|-----------|---------|---------|
| `title` | 60자 | Google 검색 결과 제목 |
| `seo_title` | 60자 | 미지정 시 `title` 사용 |
| `description` | 160자 | Google 검색 결과 설명 |
| `seo_description` | 160자 | 미지정 시 `excerpt` 사용 |
| `og_image` | - | SNS 공유 이미지 (1200x630 권장) |

## 구현: 메타데이터 파서

마크다운 Frontmatter를 파싱해서 구조화된 데이터로 변환:

```javascript
// src/lib/metadata.js
export function parseMetadata(frontmatter) {
  const metadata = {};
  
  // YAML 파싱 (간단한 버전)
  const lines = frontmatter.split('\n');
  
  for (const line of lines) {
    if (!line.includes(':')) continue;
    
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();
    
    metadata[key.trim()] = value;
  }

  return {
    title: metadata.title,
    slug: metadata.slug,
    excerpt: metadata.excerpt,
    
    // SEO
    seo_title: metadata.seo_title || metadata.title,
    seo_description: metadata.seo_description || metadata.excerpt,
    keywords: metadata.keywords?.split(',').map(k => k.trim()) || [],
    
    // Open Graph
    og_title: metadata.og_title || metadata.title,
    og_description: metadata.og_description || metadata.excerpt,
    og_image: metadata.og_image || '/default-preview.jpg',
    
    // Twitter
    twitter_card: metadata.twitter_card || 'summary_large_image',
    twitter_creator: metadata.twitter_creator,
    
    // 날짜
    published_date: metadata.published_date,
    updated_date: metadata.updated_date || metadata.published_date,
    author: metadata.author || 'Oscar Lee'
  };
}
```

## 동적 HTML 생성

Worker에서 받은 메타데이터를 HTML 헤더에 동적으로 삽입:

```javascript
// src/pages/blog.js
export async function renderBlogPage(slug, env) {
  // 1. 데이터베이스에서 포스트 가져오기
  const post = await env.DB.prepare(`
    SELECT * FROM posts WHERE slug = ?
  `).bind(slug).first();

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  // 2. 메타데이터 추출 (DB에 저장된 것을 파싱)
  const frontmatter = extractFrontmatter(post.content_markdown);
  const metadata = parseMetadata(frontmatter);

  // 3. SEO 메타 태그 생성
  const metaTags = generateMetaTags(metadata, post.slug);

  // 4. 구조화된 데이터 (JSON-LD) 생성
  const schemaJson = generateSchema(metadata, post);

  // 5. HTML 렌더링
  const html = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <!-- 기본 SEO -->
      <title>${escapeHtml(metadata.seo_title)}</title>
      <meta name="description" content="${escapeHtml(metadata.seo_description)}">
      <meta name="keywords" content="${metadata.keywords.join(', ')}">
      
      ${metaTags}
      
      <!-- 구조화된 데이터 -->
      <script type="application/ld+json">
        ${JSON.stringify(schemaJson, null, 2)}
      </script>
    </head>
    <body>
      <article>
        <h1>${post.title}</h1>
        <div class="post-meta">
          <span class="author">${metadata.author}</span>
          <time datetime="${metadata.published_date}">${formatDate(metadata.published_date)}</time>
        </div>
        <div class="content">
          ${post.content_html}
        </div>
      </article>
    </body>
    </html>
  `;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

function generateMetaTags(metadata, slug) {
  const baseUrl = 'https://davhave.com';
  const postUrl = `${baseUrl}/blog/${slug}`;

  return `
    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${postUrl}">
    <meta property="og:title" content="${escapeHtml(metadata.og_title)}">
    <meta property="og:description" content="${escapeHtml(metadata.og_description)}">
    <meta property="og:image" content="${metadata.og_image}">
    <meta property="og:site_name" content="DAVHAVE">
    <meta property="article:author" content="${metadata.author}">
    <meta property="article:published_time" content="${metadata.published_date}">
    <meta property="article:modified_time" content="${metadata.updated_date}">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="${metadata.twitter_card}">
    <meta name="twitter:url" content="${postUrl}">
    <meta name="twitter:title" content="${escapeHtml(metadata.og_title)}">
    <meta name="twitter:description" content="${escapeHtml(metadata.og_description)}">
    <meta name="twitter:image" content="${metadata.og_image}">
    ${metadata.twitter_creator ? `<meta name="twitter:creator" content="${metadata.twitter_creator}">` : ''}
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${postUrl}">
  `;
}
```

## 구조화된 데이터 (Schema.org)

Google, Bing, Facebook 같은 검색 엔진이 페이지 콘텐츠를 더 잘 이해하도록 JSON-LD 포맷으로 구조화된 정보를 제공:

```javascript
function generateSchema(metadata, post) {
  const baseUrl = 'https://davhave.com';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': metadata.title,
    'description': metadata.seo_description,
    'image': metadata.og_image,
    'datePublished': metadata.published_date,
    'dateModified': metadata.updated_date,
    'author': {
      '@type': 'Person',
      'name': metadata.author,
      'url': baseUrl
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'DAVHAVE',
      'url': baseUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}/logo.png`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': postUrl
    }
  };
}
```

Google의 **Rich Results Test**에 붙여넣으면, 구조화된 데이터가 제대로 인식되는지 확인 가능:

```
https://search.google.com/test/rich-results
```

## 이미지 최적화

소셜 미디어에서 잘 보이려면 이미지가 중요하다:

```javascript
// 권장 사이즈
const IMAGE_SPECS = {
  og_image: {
    width: 1200,
    height: 630,
    ratio: '1.91:1',
    minSize: '5KB',
    formats: ['jpg', 'png']
  },
  twitter_image: {
    width: 1200,
    height: 675,
    ratio: '16:9',
    minSize: '5KB'
  }
};

// 이미지 자동 생성 (선택사항)
// 복잡하면 수동으로 이미지 디자인
```

## 검증 도구

배포 전 메타데이터가 올바른지 확인:

```bash
# 1. Google Rich Results Test
# https://search.google.com/test/rich-results

# 2. Facebook Share Debugger
# https://developers.facebook.com/tools/debug/

# 3. Twitter Card Validator
# https://cards-dev.twitter.com/validator
```

## 블로그 목록 SEO

블로그 목록 페이지 (`/blog`)도 마찬가지:

```javascript
export async function renderBlogList(env) {
  const metaTags = `
    <title>DAVHAVE - 블로그</title>
    <meta name="description" content="Oscar Lee의 개발 경험과 인사이트. 풀스택, 클라우드, 데이터베이스 등.">
    
    <meta property="og:type" content="website">
    <meta property="og:title" content="DAVHAVE - 블로그">
    <meta property="og:description" content="개발 경험과 교육">
    <meta property="og:url" content="https://davhave.com/blog">
    <meta property="og:image" content="https://davhave.com/og-image-blog.jpg">
    
    <link rel="canonical" href="https://davhave.com/blog">
  `;

  // ... 나머지 HTML
}
```

## 모니터링: Google Search Console

배포 후 몇 주가 지나면, Google이 사이트를 크롤링한다:

1. **Search Console 등록**: https://search.google.com/search-console
2. **Sitemap 제출**: `/sitemap.xml` 추가
3. **모니터링**: 
   - "검색 트래픽" → 어느 검색어로 노출되는가?
   - "색인 생성" → 얼마나 많은 페이지가 인덱싱됐는가?
   - "Core Web Vitals" → 성능은 좋은가?

## 실제 결과

메타데이터 자동화 이후:

| 지표 | 이전 | 이후 |
|------|------|------|
| 검색 노출 (월) | ~50 | ~500 |
| 클릭 (월) | ~5 | ~50 |
| 평균 순위 | 50~100위 | 20~30위 |

작은 변화지만, **자동화한 보람이 있다.**

## 결론: 자동화가 일관성을 보장한다

메타데이터를 마크다운에 정의하고, Worker에서 동적으로 생성하면:

1. **일관성**: 모든 포스트가 동일한 형식
2. **유지보수**: Frontmatter만 수정하면 반영
3. **확장성**: 새 포스트마다 자동 생성
4. **검색엔진 친화**: Google, Facebook, Twitter 모두 최적화

SEO는 일회성이 아니라, **지속적인 관리가 필요한 작업**이다. 자동화가 그 부담을 크게 줄인다.
