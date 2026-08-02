import { slugify } from "./slug.js";

const PAGE_SIZE = 10;

function normalizeTagNames(tags) {
  if (!Array.isArray(tags)) return [];
  return [...new Set(tags.map((t) => String(t).trim()).filter(Boolean))].slice(0, 12);
}

async function syncPostTags(db, postId, tagNames) {
  await db.prepare("DELETE FROM post_tags WHERE post_id = ?").bind(postId).run();
  for (const name of normalizeTagNames(tagNames)) {
    const slug = slugify(name);
    await db
      .prepare("INSERT INTO tags (name, slug) VALUES (?, ?) ON CONFLICT(slug) DO UPDATE SET name = excluded.name")
      .bind(name, slug)
      .run();
    const tagRow = await db.prepare("SELECT id FROM tags WHERE slug = ?").bind(slug).first();
    if (tagRow) {
      await db
        .prepare("INSERT OR IGNORE INTO post_tags (post_id, tag_id) VALUES (?, ?)")
        .bind(postId, tagRow.id)
        .run();
    }
  }
}

async function attachTags(db, posts) {
  if (posts.length === 0) return posts;
  const ids = posts.map((p) => p.id);
  const placeholders = ids.map(() => "?").join(",");
  const { results } = await db
    .prepare(
      `SELECT pt.post_id AS post_id, t.name AS name, t.slug AS slug
       FROM post_tags pt JOIN tags t ON t.id = pt.tag_id
       WHERE pt.post_id IN (${placeholders})`
    )
    .bind(...ids)
    .all();
  const byPost = new Map();
  for (const row of results) {
    if (!byPost.has(row.post_id)) byPost.set(row.post_id, []);
    byPost.get(row.post_id).push({ name: row.name, slug: row.slug });
  }
  return posts.map((p) => ({ ...p, tags: byPost.get(p.id) || [] }));
}

export async function listPosts(db, { kind = "blog", category, tagSlug, searchTerm, includeDrafts = false, page = 1 } = {}) {
  const conditions = ["kind = ?"];
  const params = [kind];
  if (!includeDrafts) conditions.push("status = 'published'");
  if (category) {
    conditions.push("category = ?");
    params.push(category);
  }
  if (searchTerm) {
    const term = `%${searchTerm}%`;
    conditions.push("(posts.title LIKE ? OR posts.excerpt LIKE ?)");
    params.push(term, term);
  }
  let joinClause = "";
  if (tagSlug) {
    joinClause = "JOIN post_tags pt ON pt.post_id = posts.id JOIN tags t ON t.id = pt.tag_id";
    conditions.push("t.slug = ?");
    params.push(tagSlug);
  }
  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const offset = (Math.max(1, page) - 1) * PAGE_SIZE;

  const countRow = await db
    .prepare(`SELECT COUNT(*) AS total FROM posts ${joinClause} ${where}`)
    .bind(...params)
    .first();

  const { results } = await db
    .prepare(
      `SELECT posts.* FROM posts ${joinClause} ${where}
       ORDER BY (posts.published_at IS NULL), posts.order_index ASC, posts.published_at DESC, posts.created_at DESC
       LIMIT ? OFFSET ?`
    )
    .bind(...params, PAGE_SIZE, offset)
    .all();

  const posts = await attachTags(db, results);
  return { posts, total: countRow?.total || 0, page: Math.max(1, page), pageSize: PAGE_SIZE };
}

export async function listAllInCategory(db, kind, category) {
  const { results } = await db
    .prepare(
      `SELECT * FROM posts WHERE kind = ? AND category = ? AND status = 'published'
       ORDER BY order_index ASC, published_at DESC`
    )
    .bind(kind, category)
    .all();
  return attachTags(db, results);
}

export async function getPostBySlug(db, slug) {
  const post = await db.prepare("SELECT * FROM posts WHERE slug = ?").bind(slug).first();
  if (!post) return null;
  const [withTags] = await attachTags(db, [post]);
  return withTags;
}

export async function getPostById(db, id) {
  const post = await db.prepare("SELECT * FROM posts WHERE id = ?").bind(id).first();
  if (!post) return null;
  const [withTags] = await attachTags(db, [post]);
  return withTags;
}

export async function createPost(db, data, uniqueSlugFn) {
  const now = new Date().toISOString();
  const baseSlug = data.slug ? slugify(data.slug) : slugify(data.title);
  const slug = await uniqueSlugFn(db, baseSlug);
  const publishedAt = data.status === "published" ? now : null;

  const result = await db
    .prepare(
      `INSERT INTO posts
        (kind, category, slug, title, excerpt, content_md, content_html, cover_image_url,
         status, seo_title, seo_description, order_index, published_at, updated_at, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      data.kind,
      data.category || null,
      slug,
      data.title,
      data.excerpt || "",
      data.content_md || "",
      data.content_html || "",
      data.cover_image_url || null,
      data.status || "draft",
      data.seo_title || null,
      data.seo_description || null,
      data.order_index || 0,
      publishedAt,
      now,
      now
    )
    .run();

  const id = result.meta.last_row_id;
  await syncPostTags(db, id, data.tags);
  return getPostById(db, id);
}

export async function updatePost(db, id, data, uniqueSlugFn) {
  const existing = await db.prepare("SELECT * FROM posts WHERE id = ?").bind(id).first();
  if (!existing) return null;

  const now = new Date().toISOString();
  let slug = existing.slug;
  if (data.slug && slugify(data.slug) !== existing.slug) {
    slug = await uniqueSlugFn(db, slugify(data.slug), id);
  }

  const publishedAt =
    data.status === "published" ? existing.published_at || now : data.status === "draft" ? null : existing.published_at;

  await db
    .prepare(
      `UPDATE posts SET
        category = ?, slug = ?, title = ?, excerpt = ?, content_md = ?, content_html = ?,
        cover_image_url = ?, status = ?, seo_title = ?, seo_description = ?, order_index = ?,
        published_at = ?, updated_at = ?
       WHERE id = ?`
    )
    .bind(
      data.category ?? existing.category,
      slug,
      data.title ?? existing.title,
      data.excerpt ?? existing.excerpt,
      data.content_md ?? existing.content_md,
      data.content_html ?? existing.content_html,
      data.cover_image_url ?? existing.cover_image_url,
      data.status ?? existing.status,
      data.seo_title ?? existing.seo_title,
      data.seo_description ?? existing.seo_description,
      data.order_index ?? existing.order_index,
      publishedAt,
      now,
      id
    )
    .run();

  if (data.tags) await syncPostTags(db, id, data.tags);
  return getPostById(db, id);
}

export async function deletePost(db, id) {
  await db.prepare("DELETE FROM post_tags WHERE post_id = ?").bind(id).run();
  await db.prepare("DELETE FROM posts WHERE id = ?").bind(id).run();
}

export async function listTags(db) {
  const { results } = await db
    .prepare(
      `SELECT t.id, t.name, t.slug, COUNT(pt.post_id) AS post_count
       FROM tags t LEFT JOIN post_tags pt ON pt.tag_id = t.id
       GROUP BY t.id ORDER BY post_count DESC, t.name ASC`
    )
    .all();
  return results;
}

export async function listAllPublished(db, kind) {
  const { results } = await db
    .prepare(
      `SELECT slug, category, title, excerpt, order_index, updated_at, published_at FROM posts
       WHERE kind = ? AND status = 'published'
       ORDER BY updated_at DESC`
    )
    .bind(kind)
    .all();
  return results;
}

export async function getEducationCategoryCounts(db) {
  const { results } = await db
    .prepare(
      `SELECT category, COUNT(*) AS count FROM posts
       WHERE kind = 'education' AND status = 'published' AND category IS NOT NULL
       GROUP BY category`
    )
    .all();
  const counts = {};
  for (const row of results) counts[row.category] = row.count;
  return counts;
}

export async function getAdjacentLessons(db, category, orderIndex) {
  const prev = await db
    .prepare(
      `SELECT slug, title FROM posts
       WHERE kind = 'education' AND status = 'published' AND category = ? AND order_index < ?
       ORDER BY order_index DESC LIMIT 1`
    )
    .bind(category, orderIndex)
    .first();
  const next = await db
    .prepare(
      `SELECT slug, title FROM posts
       WHERE kind = 'education' AND status = 'published' AND category = ? AND order_index > ?
       ORDER BY order_index ASC LIMIT 1`
    )
    .bind(category, orderIndex)
    .first();
  return { prev, next };
}
