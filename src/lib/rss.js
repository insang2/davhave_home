function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(iso) {
  return iso ? new Date(iso).toUTCString() : new Date().toUTCString();
}

export function renderRss(posts) {
  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>https://davhave.com/blog/${p.slug}</link>
      <guid isPermaLink="true">https://davhave.com/blog/${p.slug}</guid>
      <pubDate>${toRfc822(p.published_at)}</pubDate>
      <description>${escapeXml(p.excerpt || "")}</description>
      <content:encoded><![CDATA[${p.content_html}]]></content:encoded>
    </item>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DAVHAVE 블로그</title>
    <link>https://davhave.com/blog</link>
    <atom:link href="https://davhave.com/rss.xml" rel="self" type="application/rss+xml" />
    <description>모바일 앱·웹·AI 개발에 대한 DAVHAVE의 기록</description>
    <language>ko-kr</language>${items}
  </channel>
</rss>
`;
}
