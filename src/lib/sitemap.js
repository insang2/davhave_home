import { STACK_DATA } from "./stack-data.js";
import { PHILOSOPHY_DATA } from "./philosophy-data.js";
import { SERVICES_DATA } from "./services-data.js";

function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function safeUrl(url) {
  try {
    return escapeXml(encodeURI(url));
  } catch {
    return escapeXml(url);
  }
}

function urlEntry(loc, { lastmod, changefreq = "monthly", priority = "0.7" } = {}) {
  return `  <url>
    <loc>${safeUrl(loc)}</loc>
    ${lastmod ? `<lastmod>${escapeXml(lastmod.slice(0, 10))}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function renderSitemap({ blogPosts = [], projects = [], educationPosts = [] }) {
  const eduCategories = [...new Set(educationPosts.map((p) => p.category).filter(Boolean))];
  const stackSlugs = Object.keys(STACK_DATA);
  const philSlugs = Object.keys(PHILOSOPHY_DATA);
  const svcSlugs = Object.keys(SERVICES_DATA);

  const entries = [
    urlEntry("https://davhave.com/", { changefreq: "monthly", priority: "1.0" }),
    urlEntry("https://davhave.com/blog", { changefreq: "daily", priority: "0.9" }),
    urlEntry("https://davhave.com/portfolio", { changefreq: "monthly", priority: "0.9" }),
    urlEntry("https://davhave.com/education", { changefreq: "weekly", priority: "0.9" }),
    urlEntry("https://davhave.com/education/ai/claude", { changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/education/ai/codex", { changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/education/ai/gemini", { changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/services", { changefreq: "monthly", priority: "0.9" }),
    urlEntry("https://davhave.com/stack", { changefreq: "monthly", priority: "0.9" }),
    urlEntry("https://davhave.com/philosophy", { changefreq: "monthly", priority: "0.9" }),
    urlEntry("https://davhave.com/content", { changefreq: "monthly", priority: "0.6" }),
    urlEntry("https://davhave.com/projects", { changefreq: "weekly", priority: "0.9" }),
    urlEntry("https://davhave.com/projects/kct", { changefreq: "weekly", priority: "0.9" }),
    urlEntry("https://davhave.com/projects/kct/specimens", { changefreq: "weekly", priority: "0.9" }),
    urlEntry("https://davhave.com/projects/kct/color-samples", { changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/projects/kct/technical", { changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/terms", { changefreq: "yearly", priority: "0.4" }),
    urlEntry("https://davhave.com/privacy", { changefreq: "yearly", priority: "0.4" }),
    ...svcSlugs.map((s) => urlEntry(`https://davhave.com/services/${s}`, { changefreq: "monthly", priority: "0.8" })),
    ...stackSlugs.map((s) => urlEntry(`https://davhave.com/stack/${s}`, { changefreq: "monthly", priority: "0.8" })),
    ...philSlugs.map((s) => urlEntry(`https://davhave.com/philosophy/${s}`, { changefreq: "monthly", priority: "0.8" })),
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
