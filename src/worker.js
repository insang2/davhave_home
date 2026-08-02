import { marked } from "marked";
import {
  createSessionToken,
  isAdminRequest,
  sessionCookieHeader,
  clearSessionCookieHeader,
} from "./lib/auth.js";
import { slugify, uniqueSlug } from "./lib/slug.js";
import {
  listPosts,
  listAllInCategory,
  getPostBySlug,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  listTags,
  getEducationCategoryCounts,
  getAdjacentLessons,
  listAllPublished,
} from "./lib/db.js";
import { renderBlogList, renderBlogPost } from "./lib/render.js";
import { renderAdminPage } from "./lib/admin.js";
import { renderPortfolioHub, renderPortfolioDetail } from "./lib/portfolio-render.js";
import { renderContentHub } from "./lib/content-render.js";
import { renderEducationHub, renderEducationCategory, renderLesson, CATEGORIES } from "./lib/education-render.js";
import { projects, getProject } from "./lib/projects.js";
import { renderSitemap } from "./lib/sitemap.js";
import { renderRss } from "./lib/rss.js";
import { renderLlms } from "./lib/llms.js";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function notFound() {
  return new Response("Not Found", { status: 404 });
}

async function requireAdmin(request, env) {
  const ok = await isAdminRequest(request, env);
  if (!ok) return json({ error: "인증이 필요합니다." }, 401);
  return null;
}

async function handleApi(request, env, url) {
  const { pathname } = url;
  const method = request.method;

  if (pathname === "/api/admin/login" && method === "POST") {
    const body = await request.json().catch(() => ({}));
    if (!env.ADMIN_PASSWORD || body.password !== env.ADMIN_PASSWORD) {
      return json({ error: "비밀번호가 올바르지 않습니다." }, 401);
    }
    const token = await createSessionToken(env.SESSION_SECRET);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Set-Cookie": sessionCookieHeader(token),
      },
    });
  }

  if (pathname === "/api/admin/logout" && method === "POST") {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Set-Cookie": clearSessionCookieHeader(),
      },
    });
  }

  if (pathname === "/api/admin/check" && method === "GET") {
    const authed = await isAdminRequest(request, env);
    return json({ authenticated: authed });
  }

  if (pathname === "/api/tags" && method === "GET") {
    return json(await listTags(env.DB));
  }

  if (pathname === "/api/posts" && method === "GET") {
    const admin = await isAdminRequest(request, env);
    const kind = url.searchParams.get("kind") || "blog";
    const category = url.searchParams.get("category") || undefined;
    const tagSlug = url.searchParams.get("tag") || undefined;
    const page = Number(url.searchParams.get("page") || 1);
    const includeDrafts = admin && url.searchParams.get("status") === "all";
    const data = await listPosts(env.DB, { kind, category, tagSlug, includeDrafts, page });
    return json(data);
  }

  if (pathname === "/api/search" && method === "GET") {
    const q = url.searchParams.get("q") || "";
    const kind = url.searchParams.get("kind") || "education";
    if (!q) return json({ posts: [], total: 0, page: 1, pageSize: 10 });
    const data = await listPosts(env.DB, { kind, searchTerm: q, includeDrafts: false, page: 1 });
    return json(data);
  }

  if (pathname === "/api/posts" && method === "POST") {
    const denied = await requireAdmin(request, env);
    if (denied) return denied;
    const body = await request.json().catch(() => null);
    if (!body || !body.title) return json({ error: "제목은 필수입니다." }, 400);
    body.content_html = marked.parse(body.content_md || "");
    const post = await createPost(env.DB, body, uniqueSlug);
    return json(post, 201);
  }

  const postIdMatch = pathname.match(/^\/api\/posts\/(\d+)$/);
  if (postIdMatch) {
    const id = Number(postIdMatch[1]);
    if (method === "GET") {
      const denied = await requireAdmin(request, env);
      if (denied) return denied;
      const post = await getPostById(env.DB, id);
      return post ? json(post) : notFound();
    }
    if (method === "PUT") {
      const denied = await requireAdmin(request, env);
      if (denied) return denied;
      const body = await request.json().catch(() => null);
      if (!body) return json({ error: "잘못된 요청입니다." }, 400);
      if (body.content_md !== undefined) body.content_html = marked.parse(body.content_md || "");
      const post = await updatePost(env.DB, id, body, uniqueSlug);
      return post ? json(post) : notFound();
    }
    if (method === "DELETE") {
      const denied = await requireAdmin(request, env);
      if (denied) return denied;
      await deletePost(env.DB, id);
      return json({ ok: true });
    }
  }

  if (pathname === "/api/upload" && method === "POST") {
    const denied = await requireAdmin(request, env);
    if (denied) return denied;
    const form = await request.formData().catch(() => null);
    const file = form?.get("file");
    if (!file || typeof file === "string") return json({ error: "파일이 필요합니다." }, 400);
    const ext = (file.name?.split(".").pop() || "bin").toLowerCase();
    const key = `blog/${Date.now()}-${slugify(file.name?.replace(/\.[^.]+$/, "") || "image")}.${ext}`;
    await env.MEDIA.put(key, await file.arrayBuffer(), {
      httpMetadata: { contentType: file.type || "application/octet-stream" },
    });
    return json({ url: `/media/${key}` });
  }

  return notFound();
}

async function handleMedia(request, env, key) {
  const obj = await env.MEDIA.get(key);
  if (!obj) return notFound();
  return new Response(obj.body, {
    headers: {
      "content-type": obj.httpMetadata?.contentType || "application/octet-stream",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
}

async function handleBlog(request, env, parts, url) {
  // parts[0] === 'blog'
  const page = Number(url.searchParams.get("page") || 1);

  if (parts.length === 1) {
    const data = await listPosts(env.DB, { kind: "blog", page });
    return new Response(renderBlogList({ ...data, basePath: "/blog" }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  if (parts[1] === "tag" && parts[2]) {
    const tagSlug = decodeURIComponent(parts[2]);
    const data = await listPosts(env.DB, { kind: "blog", tagSlug, page });
    return new Response(renderBlogList({ ...data, tag: tagSlug, basePath: `/blog/tag/${parts[2]}` }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  if (parts.length === 2) {
    const admin = await isAdminRequest(request, env);
    const post = await getPostBySlug(env.DB, decodeURIComponent(parts[1]));
    if (!post || (post.status !== "published" && !admin)) return notFound();
    return new Response(renderBlogPost(post), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  return notFound();
}

async function handleEducation(env, parts) {
  // parts[0] === 'education'
  if (parts.length === 1) {
    const counts = await getEducationCategoryCounts(env.DB);
    return new Response(renderEducationHub(counts), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  const category = decodeURIComponent(parts[1]);
  if (!CATEGORIES[category]) return notFound();

  if (parts.length === 2) {
    const posts = await listAllInCategory(env.DB, "education", category);
    return new Response(renderEducationCategory({ category, posts }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  if (parts.length === 3) {
    const post = await getPostBySlug(env.DB, decodeURIComponent(parts[2]));
    if (!post || post.kind !== "education" || post.category !== category || post.status !== "published") {
      return notFound();
    }
    const { prev, next } = await getAdjacentLessons(env.DB, category, post.order_index);
    return new Response(renderLesson({ post, prev, next }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  return notFound();
}

async function handlePortfolio(parts) {
  if (parts.length === 1) {
    return new Response(renderPortfolioHub(), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
  if (parts.length === 2) {
    const project = getProject(decodeURIComponent(parts[1]));
    if (!project) return notFound();
    return new Response(renderPortfolioDetail(project), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
  return notFound();
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname.startsWith("/api/")) {
      return handleApi(request, env, url);
    }

    if (pathname.startsWith("/media/")) {
      return handleMedia(request, env, pathname.slice("/media/".length));
    }

    if (pathname === "/llms.txt") {
      const [blogPosts, educationPosts] = await Promise.all([
        listAllPublished(env.DB, "blog"),
        listAllPublished(env.DB, "education"),
      ]);
      return new Response(renderLlms({ blogPosts, educationPosts, projects }), {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    if (pathname === "/rss.xml") {
      const { posts } = await listPosts(env.DB, { kind: "blog", page: 1 });
      return new Response(renderRss(posts), {
        headers: { "content-type": "application/rss+xml; charset=utf-8" },
      });
    }

    if (pathname === "/sitemap.xml") {
      const [blogPosts, educationPosts] = await Promise.all([
        listAllPublished(env.DB, "blog"),
        listAllPublished(env.DB, "education"),
      ]);
      const xml = renderSitemap({ blogPosts, projects, educationPosts });
      return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
    }

    if (pathname === "/portfolio" || pathname.startsWith("/portfolio/")) {
      return handlePortfolio(pathname.split("/").filter(Boolean));
    }

    if (pathname === "/content") {
      return new Response(renderContentHub(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }

    if (pathname === "/education" || pathname.startsWith("/education/")) {
      return handleEducation(env, pathname.split("/").filter(Boolean));
    }

    if (pathname === "/admin") {
      return new Response(renderAdminPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }

    if (pathname === "/blog" || pathname.startsWith("/blog/")) {
      const parts = pathname.split("/").filter(Boolean);
      return handleBlog(request, env, parts, url);
    }

    return env.ASSETS.fetch(request);
  },
};
