import { STACK_DATA } from "./stack-data.js";
import { PHILOSOPHY_DATA } from "./philosophy-data.js";
import { SERVICES_DATA } from "./services-data.js";
import { eduLessonPath } from "./education-render.js";

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
  const today = "2026-09-20";

  const entries = [
    urlEntry("https://davhave.com/", { lastmod: today, changefreq: "monthly", priority: "1.0" }),
    urlEntry("https://davhave.com/projects", { lastmod: today, changefreq: "weekly", priority: "0.9" }),
    urlEntry("https://davhave.com/projects/kct", { lastmod: today, changefreq: "weekly", priority: "0.9" }),
    urlEntry("https://davhave.com/projects/kct/specimens", { lastmod: today, changefreq: "weekly", priority: "0.9" }),
    urlEntry("https://davhave.com/projects/kct/color-samples", { lastmod: today, changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/projects/kct/technical", { lastmod: today, changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/portfolio", { lastmod: today, changefreq: "monthly", priority: "0.9" }),
    urlEntry("https://davhave.com/services", { lastmod: today, changefreq: "monthly", priority: "0.9" }),
    urlEntry("https://davhave.com/stack", { lastmod: today, changefreq: "monthly", priority: "0.9" }),
    urlEntry("https://davhave.com/philosophy", { lastmod: today, changefreq: "monthly", priority: "0.9" }),
    urlEntry("https://davhave.com/education", { lastmod: today, changefreq: "weekly", priority: "0.9" }),
    urlEntry("https://davhave.com/education/ai/claude", { lastmod: today, changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/education/ai/codex", { lastmod: today, changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/education/ai/gemini", { lastmod: today, changefreq: "weekly", priority: "0.8" }),
    urlEntry("https://davhave.com/blog", { lastmod: today, changefreq: "daily", priority: "0.9" }),
    urlEntry("https://davhave.com/terms", { lastmod: today, changefreq: "yearly", priority: "0.3" }),
    urlEntry("https://davhave.com/privacy", { lastmod: today, changefreq: "yearly", priority: "0.3" }),
    urlEntry("https://davhave.com/privacy/retroboy", { lastmod: today, changefreq: "monthly", priority: "0.5" }),
    ...svcSlugs.map((s) => urlEntry(`https://davhave.com/services/${s}`, { lastmod: today, changefreq: "monthly", priority: "0.8" })),
    ...stackSlugs.map((s) => urlEntry(`https://davhave.com/stack/${s}`, { lastmod: today, changefreq: "monthly", priority: "0.8" })),
    ...philSlugs.map((s) => urlEntry(`https://davhave.com/philosophy/${s}`, { lastmod: today, changefreq: "monthly", priority: "0.8" })),
    ...eduCategories.map((c) => urlEntry(`https://davhave.com/education/${c}`, { lastmod: today, changefreq: "weekly", priority: "0.8" })),
    ...projects.filter((p) => p.slug !== "kconstrade" && p.slug !== "kct").map((p) => urlEntry(`https://davhave.com/portfolio/${p.slug}`, { lastmod: today, changefreq: "monthly", priority: "0.8" })),
    ...blogPosts.map((p) =>
      urlEntry(`https://davhave.com/blog/${p.slug}`, {
        lastmod: p.updated_at ? p.updated_at.slice(0, 10) : today,
        changefreq: "monthly",
        priority: "0.7",
      })
    ),
    ...educationPosts.map((p) =>
      urlEntry(`https://davhave.com${eduLessonPath(p)}`, {
        lastmod: p.updated_at ? p.updated_at.slice(0, 10) : today,
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
