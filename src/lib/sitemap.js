function urlEntry(loc, { lastmod, changefreq = "monthly", priority = "0.7" } = {}) {
  return `  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod.slice(0, 10)}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function renderSitemap({ blogPosts = [], projects = [], educationPosts = [] }) {
  const eduCategories = [...new Set(educationPosts.map((p) => p.category).filter(Boolean))];

  const entries = [
    urlEntry("https://davhave.com/", { changefreq: "monthly", priority: "1.0" }),
    urlEntry("https://davhave.com/blog", { changefreq: "daily", priority: "0.9" }),
    urlEntry("https://davhave.com/portfolio", { changefreq: "monthly", priority: "0.9" }),
    urlEntry("https://davhave.com/education", { changefreq: "weekly", priority: "0.9" }),
    ...blogPosts.map((p) =>
      urlEntry(`https://davhave.com/blog/${p.slug}`, {
        lastmod: p.updated_at,
        changefreq: "monthly",
        priority: "0.7",
      })
    ),
    ...projects.map((p) => urlEntry(`https://davhave.com/portfolio/${p.slug}`, { changefreq: "monthly", priority: "0.8" })),
    ...eduCategories.map((c) => urlEntry(`https://davhave.com/education/${c}`, { changefreq: "weekly", priority: "0.8" })),
    ...educationPosts.map((p) =>
      urlEntry(`https://davhave.com/education/${p.category}/${p.slug}`, {
        lastmod: p.updated_at,
        changefreq: "monthly",
        priority: "0.7",
      })
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;
}
