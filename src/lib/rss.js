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

export function renderRss(posts = []) {
  const items = posts
    .map((p) => {
      const link = p.kind === "education"
        ? `https://davhave.com/education/${p.category}/${p.slug}`
        : `https://davhave.com/blog/${p.slug}`;
      const content = (p.content_html || p.content_md || "").replace(/\]\]>/g, "]]&gt;");

      return `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRfc822(p.published_at || p.created_at)}</pubDate>
      <description>${escapeXml(p.excerpt || "")}</description>
      <content:encoded><![CDATA[${content}]]></content:encoded>
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DAVHAVE | Oscar Lee</title>
    <link>https://davhave.com/</link>
    <atom:link href="https://davhave.com/rss.xml" rel="self" type="application/rss+xml" />
    <description>모바일 앱·웹·AI 프로그래밍 스튜디오 DAVHAVE 최신 기술 블로그 및 교육 피드</description>
    <language>ko-kr</language>${items}
  </channel>
</rss>
`;
}
