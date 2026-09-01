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
import { renderEducationHub, renderEducationCategory, renderLesson, CATEGORIES, AI_SUBCATEGORIES, classifyAiPost } from "./lib/education-render.js";
import { projects, getProject } from "./lib/projects.js";
import { renderSitemap } from "./lib/sitemap.js";
import { renderRss } from "./lib/rss.js";
import { renderLlms, renderLlmsFull } from "./lib/llms.js";
import { renderRobotsTxt } from "./lib/robots.js";
import { STACK_DATA } from "./lib/stack-data.js";
import { renderStackHub, renderStackDetail } from "./lib/stack-render.js";
import { PHILOSOPHY_DATA } from "./lib/philosophy-data.js";
import { renderPhilosophyHub, renderPhilosophyDetail } from "./lib/philosophy-render.js";
import { SERVICES_DATA } from "./lib/services-data.js";
import { renderTermsPage, renderPrivacyPage } from "./lib/policy-render.js";
import { renderKctPage } from "./lib/kct-render.js";
import { renderKctTechPage } from "./lib/kct-tech-render.js";
import { renderKctColorPage } from "./lib/kct-color-render.js";
import { renderKctSpecimenPage } from "./lib/kct-specimen-render.js";
import { renderProjectsHub } from "./lib/projects-hub-render.js";

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

function withSecurityHeaders(res, customHeaders = {}) {
  if (!res) return res;
  const newHeaders = new Headers(res.headers);
  newHeaders.set("X-Content-Type-Options", "nosniff");
  newHeaders.set("X-Frame-Options", "DENY");
  newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
  for (const [k, v] of Object.entries(customHeaders)) {
    newHeaders.set(k, v);
  }
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: newHeaders,
  });
}

async function handleBlog(request, env, parts, url) {
  // parts[0] === 'blog'
  const page = Number(url.searchParams.get("page") || 1);

  if (parts.length === 1) {
    const data = await listPosts(env.DB, { kind: "blog", page });
    return withSecurityHeaders(new Response(renderBlogList({ ...data, basePath: "/blog" }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  if (parts[1] === "tag" && parts[2]) {
    const tagSlug = decodeURIComponent(parts[2]);
    const data = await listPosts(env.DB, { kind: "blog", tagSlug, page });
    return withSecurityHeaders(new Response(renderBlogList({ ...data, tag: tagSlug, basePath: `/blog/tag/${parts[2]}` }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  if (parts.length === 2) {
    const admin = await isAdminRequest(request, env);
    const post = await getPostBySlug(env.DB, decodeURIComponent(parts[1]));
    if (!post || (post.status !== "published" && !admin)) return notFound();
    return withSecurityHeaders(new Response(renderBlogPost(post), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  return notFound();
}

async function handleEducation(env, parts) {
  // parts[0] === 'education'
  if (parts.length === 1) {
    const counts = await getEducationCategoryCounts(env.DB);
    return withSecurityHeaders(new Response(renderEducationHub(counts), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  const category = decodeURIComponent(parts[1]);
  if (!CATEGORIES[category]) return notFound();

  // /education/[category] (e.g. /education/ai, /education/python)
  if (parts.length === 2) {
    const posts = await listAllInCategory(env.DB, "education", category);
    return withSecurityHeaders(new Response(renderEducationCategory({ category, posts }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  // /education/ai/[subcat] OR /education/[category]/[slug]
  if (parts.length === 3) {
    const target = decodeURIComponent(parts[2]);
    if (category === "ai" && AI_SUBCATEGORIES[target]) {
      // Subcategory Hub Page: /education/ai/claude, /education/ai/codex, /education/ai/gemini
      const posts = await listAllInCategory(env.DB, "education", category);
      return withSecurityHeaders(new Response(renderEducationCategory({ category, subcat: target, posts }), {
        headers: { "content-type": "text/html; charset=utf-8" },
      }));
    }

    // Direct lesson slug: /education/[category]/[slug]
    const post = await getPostBySlug(env.DB, target);
    if (!post || post.kind !== "education" || post.status !== "published") {
      return notFound();
    }

    // 301 Redirect legacy /education/ai/[slug] to canonical /education/ai/[subcat]/[slug]
    if (category === "ai") {
      const subcat = classifyAiPost(post);
      return Response.redirect(`https://davhave.com/education/ai/${subcat}/${post.slug}`, 301);
    }

    const { prev, next } = await getAdjacentLessons(env.DB, post.category, post.order_index);
    return withSecurityHeaders(new Response(renderLesson({ post, prev, next }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  // /education/ai/[subcat]/[slug] OR /education/[category]/[subcat]/[slug]
  if (parts.length === 4) {
    const slug = decodeURIComponent(parts[3]);
    const post = await getPostBySlug(env.DB, slug);
    if (!post || post.kind !== "education" || post.status !== "published") {
      return notFound();
    }
    const { prev, next } = await getAdjacentLessons(env.DB, post.category, post.order_index);
    return withSecurityHeaders(new Response(renderLesson({ post, prev, next }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  return notFound();
}

async function handlePortfolio(parts) {
  if (parts.length === 1) {
    return withSecurityHeaders(new Response(renderPortfolioHub(), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }
  if (parts.length === 2) {
    const project = getProject(decodeURIComponent(parts[1]));
    if (!project) return notFound();
    return withSecurityHeaders(new Response(renderPortfolioDetail(project), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }
  return notFound();
}



export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    // Redirect HTTP to HTTPS
    if (url.protocol === "http:" && !url.hostname.includes("localhost") && !url.hostname.includes("127.0.0.1")) {
      return Response.redirect(`https://${url.hostname}${url.pathname}${url.search}`, 301);
    }

    if (pathname === "/terms") {
      return withSecurityHeaders(new Response(renderTermsPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      }), { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/privacy") {
      return withSecurityHeaders(new Response(renderPrivacyPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      }), { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/projects/kct/specimens" || pathname === "/projects/kct/specimens/" || pathname === "/projects/kct/specimen" || pathname === "/projects/kct/specimen/" || pathname === "/pjt/kct/specimens" || pathname === "/pjt/kct/specimens/" || pathname === "/pjt/kct/specimen" || pathname === "/pjt/kct/specimen/" || pathname === "/projects/kct/astm-d638" || pathname === "/projects/kct/astm-d638/") {
      const raw = new Response(renderKctSpecimenPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "no-cache, no-store, must-revalidate" });
    }

    if (pathname === "/projects/kct/color-samples" || pathname === "/projects/kct/color-samples/" || pathname === "/projects/kct/sample" || pathname === "/projects/kct/sample/" || pathname === "/pjt/kct/color-samples" || pathname === "/pjt/kct/color-samples/" || pathname === "/pjt/kct/sample" || pathname === "/pjt/kct/sample/") {
      const raw = new Response(renderKctColorPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/projects/kct/technical" || pathname === "/projects/kct/technical/" || pathname === "/projects/kct/tech" || pathname === "/projects/kct/tech/" || pathname === "/pjt/kct/technical" || pathname === "/pjt/kct/technical/" || pathname === "/pjt/kct/tech" || pathname === "/pjt/kct/tech/") {
      const raw = new Response(renderKctTechPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/projects/kct" || pathname === "/projects/kct/" || pathname === "/pjt/kct" || pathname === "/pjt/kct/") {
      const raw = new Response(renderKctPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/projects" || pathname === "/projects/" || pathname === "/pjt" || pathname === "/pjt/") {
      const raw = new Response(renderProjectsHub(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/" || pathname === "/index.html") {
      const assetRes = await env.ASSETS.fetch(request);
      return withSecurityHeaders(assetRes, { "Cache-Control": "no-cache" });
    }

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
      const raw = new Response(renderLlms({ blogPosts, educationPosts, projects }), {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/llms-full.txt") {
      const [blogPosts, educationPosts] = await Promise.all([
        listAllPublished(env.DB, "blog"),
        listAllPublished(env.DB, "education"),
      ]);
      const raw = new Response(renderLlmsFull({ blogPosts, educationPosts, projects }), {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }


    if (pathname === "/rss.xml") {
      const [blogPosts, educationPosts] = await Promise.all([
        listAllPublished(env.DB, "blog"),
        listAllPublished(env.DB, "education"),
      ]);
      const combined = [...blogPosts, ...educationPosts].sort((a, b) => {
        const da = new Date(a.published_at || a.created_at || 0).getTime();
        const db = new Date(b.published_at || b.created_at || 0).getTime();
        return db - da;
      });
      const raw = new Response(renderRss(combined.slice(0, 50)), {
        headers: { "content-type": "application/rss+xml; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/robots.txt") {
      const raw = new Response(renderRobotsTxt(), {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=86400" });
    }

    if (pathname === "/sitemap.xml") {
      const [blogPosts, educationPosts] = await Promise.all([
        listAllPublished(env.DB, "blog"),
        listAllPublished(env.DB, "education"),
      ]);
      const xml = renderSitemap({ blogPosts, projects, educationPosts });
      const raw = new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/portfolio" || pathname.startsWith("/portfolio/")) {
      return withSecurityHeaders(await handlePortfolio(pathname.split("/").filter(Boolean)));
    }

    if (pathname === "/stack" || pathname.startsWith("/stack/")) {
      const parts = pathname.split("/").filter(Boolean);
      if (parts.length === 1) {
        return withSecurityHeaders(new Response(renderStackHub(), {
          headers: { "content-type": "text/html; charset=utf-8" },
        }));
      }
      if (parts.length === 2) {
        const item = STACK_DATA[decodeURIComponent(parts[1])];
        if (!item) return notFound();
        return withSecurityHeaders(new Response(renderStackDetail(item), {
          headers: { "content-type": "text/html; charset=utf-8" },
        }));
      }
      return notFound();
    }

    if (pathname === "/philosophy" || pathname.startsWith("/philosophy/")) {
      const parts = pathname.split("/").filter(Boolean);
      if (parts.length === 1) {
        return withSecurityHeaders(new Response(renderPhilosophyHub(), {
          headers: { "content-type": "text/html; charset=utf-8" },
        }), { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
      }
      if (parts.length === 2) {
        const item = PHILOSOPHY_DATA[decodeURIComponent(parts[1])];
        if (!item) return notFound();
        return withSecurityHeaders(new Response(renderPhilosophyDetail(item), {
          headers: { "content-type": "text/html; charset=utf-8" },
        }), { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
      }
      return notFound();
    }

    if (pathname === "/services" || pathname.startsWith("/services/")) {
      const parts = pathname.split("/").filter(Boolean);
      if (parts.length === 1) {
        return withSecurityHeaders(new Response(renderServicesHub(), {
          headers: { "content-type": "text/html; charset=utf-8" },
        }), { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
      }
      if (parts.length === 2) {
        const item = SERVICES_DATA[decodeURIComponent(parts[1])];
        if (!item) return notFound();
        return withSecurityHeaders(new Response(renderServicesDetail(item), {
          headers: { "content-type": "text/html; charset=utf-8" },
        }), { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
      }
      return notFound();
    }


    if (pathname === "/content") {
      const raw = new Response(renderContentHub(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw);
    }

    if (pathname === "/education" || pathname.startsWith("/education/")) {
      return withSecurityHeaders(await handleEducation(env, pathname.split("/").filter(Boolean)));
    }

    if (pathname === "/admin") {
      const raw = new Response(renderAdminPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw);
    }

    if (pathname === "/blog" || pathname.startsWith("/blog/")) {
      const parts = pathname.split("/").filter(Boolean);
      return withSecurityHeaders(await handleBlog(request, env, parts, url));
    }

    return env.ASSETS.fetch(request);
  },
};
