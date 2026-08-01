// content/education/software-engineering/chNN-*.md -> SQL INSERT OR REPLACE for the `posts` table.
// Usage: node scripts/seed-education.mjs > /path/to/seed-education.sql
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { marked } from "marked";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, "..", "content", "education", "software-engineering");
const CATEGORY = "software-engineering";

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("frontmatter not found");
  const [, fmBlock, body] = match;
  const fm = {};
  for (const line of fmBlock.split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (/^".*"$/.test(value)) value = value.slice(1, -1);
    fm[key] = value;
  }
  return { fm, body: body.trim() };
}

function sqlStr(value) {
  if (value === null || value === undefined) return "NULL";
  return `'${String(value).replace(/'/g, "''")}'`;
}

const files = readdirSync(CONTENT_DIR)
  .filter((f) => /^ch\d{2}-.*\.md$/.test(f))
  .sort();

const statements = files.map((file) => {
  const raw = readFileSync(join(CONTENT_DIR, file), "utf8");
  const { fm, body } = parseFrontmatter(raw);
  const contentHtml = marked.parse(body);

  return `INSERT OR REPLACE INTO posts
    (kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at)
  VALUES
    ('education', ${sqlStr(CATEGORY)}, ${sqlStr(fm.slug)}, ${sqlStr(fm.title)}, ${sqlStr(fm.excerpt)}, ${sqlStr(body)}, ${sqlStr(contentHtml)}, 'draft', ${sqlStr(fm.seo_title)}, ${sqlStr(fm.seo_description)}, ${Number(fm.order_index) || 0}, NULL, datetime('now'), datetime('now'));`;
});

console.log(statements.join("\n\n"));
console.error(`seeded ${statements.length} lessons from ${CONTENT_DIR}`);
