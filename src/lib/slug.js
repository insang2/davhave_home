export function slugify(input) {
  const base = input
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
  return base || "post";
}

export async function uniqueSlug(db, baseSlug, excludeId = null) {
  let candidate = baseSlug;
  let suffix = 2;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const existing = excludeId
      ? await db.prepare("SELECT id FROM posts WHERE slug = ? AND id != ?").bind(candidate, excludeId).first()
      : await db.prepare("SELECT id FROM posts WHERE slug = ?").bind(candidate).first();
    if (!existing) return candidate;
    candidate = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
}
