---
title: 동적 sitemap/RSS 생성으로 SEO 배워가기
slug: dynamic-sitemap-rss
excerpt: 블로그 콘텐츠를 DB에서 읽어서 실시간으로 sitemap.xml과 rss.xml을 생성하는 과정.
seo_title: 동적 Sitemap과 RSS 생성 구현
seo_description: Cloudflare Workers에서 동적 sitemap.xml, rss.xml 생성, 검색엔진 크롤링 최적화.
---

## 시작: 정적 파일은 이제 그만

초기엔 sitemap.xml과 rss.xml을 손으로 만들고 커밋했다. 하지만 포스트를 10개 추가할 때마다 파일을 수정하는 건 비효율적이다. 게다가 발행 날짜 변경 같은 작은 수정도 일일이 반영해야 했다.

그 순간 깨달았다: **이건 자동화해야 한다.**

## Sitemap: 검색엔진에게 지도 그려주기

Google Search Console에 처음 사이트를 등록하면, 가장 먼저 요구하는 게 sitemap.xml이다. 이건 검색 로봇에게 "내 사이트의 모든 페이지는 이것들입니다"라고 말하는 파일이다.

sitemap의 구조는 간단하다:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://davhave.com/blog/cloudflare-fullstack</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://davhave.com/portfolio/kconstrade</loc>
    <lastmod>2025-11-15</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

Workers에서 이걸 생성하려면:

```javascript
export async function renderSitemap(env) {
  // DB에서 모든 발행 콘텐츠 가져오기
  const posts = await env.DB.prepare(`
    SELECT slug, published_at, updated_at, kind FROM posts
    WHERE published_at IS NOT NULL AND published_at <= DATETIME('now')
    ORDER BY updated_at DESC
  `).all();

  const projects = PROJECTS.filter(p => p.published);

  const baseUrl = 'https://davhave.com';
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // 홈페이지
  sitemap += `
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  // 블로그 & 교육 포스트
  for (const post of posts.results) {
    const url = post.kind === 'blog'
      ? `${baseUrl}/blog/${post.slug}`
      : `${baseUrl}/education/${post.kind}/${post.slug}`;
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${post.updated_at.split('T')[0]}</lastmod>
    <changefreq>never</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  // 포트폴리오
  for (const project of projects) {
    sitemap += `
  <url>
    <loc>${baseUrl}/portfolio/${project.slug}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  // 주요 페이지들
  const pages = [
    { path: '/blog', priority: 0.9 },
    { path: '/portfolio', priority: 0.9 },
    { path: '/education', priority: 0.8 },
  ];

  for (const page of pages) {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
```

이제 `/sitemap.xml`에 접근하면, 항상 최신 콘텐츠 목록이 반영된다.

## RSS: 독자들이 구독하는 방식

RSS (Really Simple Syndication)는 블로그 구독자들이 모든 포스트를 놓치지 않도록 하는 표준이다. 예전엔 Feedly, Inoreader 같은 RSS 리더가 인기였고, 지금도 여전히 개발자들 사이에서는 필수다.

RSS 2.0 형식은 이렇다:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>DAVHAVE - 개발 스튜디오</title>
    <link>https://davhave.com</link>
    <description>Oscar Lee의 개발 경험과 교육</description>
    <language>ko-kr</language>
    <lastBuildDate>2025-12-01T10:00:00Z</lastBuildDate>
    
    <item>
      <title>Cloudflare Workers로 풀스택 시스템 구축한 경험</title>
      <link>https://davhave.com/blog/cloudflare-fullstack</link>
      <guid>https://davhave.com/blog/cloudflare-fullstack</guid>
      <pubDate>2025-12-01T10:00:00Z</pubDate>
      <description><![CDATA[
        Workers + D1 + R2 조합으로 AWS 없이 풀스택을 구성한 이유와 그 과정에서 배운 실전 교훈.
      ]]></description>
    </item>
  </channel>
</rss>
```

Workers에서 동적으로 생성:

```javascript
export async function renderRss(env) {
  const posts = await env.DB.prepare(`
    SELECT title, slug, excerpt, published_at FROM posts
    WHERE kind = 'blog' AND published_at IS NOT NULL AND published_at <= DATETIME('now')
    ORDER BY published_at DESC
    LIMIT 20
  `).all();

  const baseUrl = 'https://davhave.com';
  const lastBuild = new Date().toISOString();

  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>DAVHAVE - 개발 스튜디오</title>
    <link>${baseUrl}</link>
    <description>Oscar Lee의 개발 경험과 교육</description>
    <language>ko-kr</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />`;

  for (const post of posts.results) {
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const pubDate = new Date(post.published_at).toUTCString();
    
    rss += `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`;
  }

  rss += `
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
```

## 라우팅: 캐싱이 중요

sitemap과 RSS는 자주 변하지 않는다. 매번 쿼리를 실행하는 건 낭비다. 그래서 캐싱이 필수다:

```javascript
export async function handleSitemap(req, env) {
  const cacheUrl = new URL(req.url);
  cacheUrl.pathname = '/sitemap-cache';

  let response = await caches.default.match(cacheUrl);

  if (!response) {
    // 캐시 미스: 새로 생성
    const xml = await renderSitemap(env);
    response = new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400' // 24시간
      }
    });
    await caches.default.put(cacheUrl, response.clone());
  }

  return response;
}
```

## SEO 효과: 눈에 띄는 변화

동적 sitemap과 RSS를 배포한 후:

- **Google Search Console에 수동으로 제출**: "좋아, 이제 크롤러가 모든 페이지를 알겠네."
- **RSS 구독 수**: 첫 달에 5명, 이제는 20명 정도
- **검색 결과**: davhave.com 관련 키워드가 첫 페이지에 나타나기 시작

큰 트래픽 변화는 아니지만, **"내 콘텐츠를 사람들이 찾을 수 있도록 했다"는 만족감이 있다.**

## 마지막: llms.txt

최근 트렌드로, LLM 시대에는 AI가 크롤링할 수 있는 파일이 필요하다는 것을 배웠다. Google의 robots.txt처럼, `/llms.txt`는 "AI 모델의 학습 대상으로 이 사이트 콘텐츠를 사용해도 된다"는 의사 표시다.

```
User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /blog
Allow: /education

User-agent: *
Disallow: /admin
```

이제 Claude 같은 모델들이 내 블로그를 학습 데이터로 활용할 때, 자동으로 허가를 얻는다.

## 결론

동적 sitemap/RSS는 단순한 기술이지만, **SEO의 본질을 이해하는 첫 걸음**이다. 검색 엔진은 우리의 콘텐츠를 찾아야 하고, 독자들은 새 글을 놓치지 않아야 한다. 자동화가 이 둘을 동시에 해결한다.
