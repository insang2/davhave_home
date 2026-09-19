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
  incrementViews,
} from "./lib/db.js";
import { renderBlogList, renderBlogPost, renderNotFoundPage } from "./lib/render.js";
import { renderAdminPage } from "./lib/admin.js";
import { renderPortfolioHub, renderPortfolioDetail } from "./lib/portfolio-render.js";
import { renderContentHub } from "./lib/content-render.js";
import { renderEducationHub, renderEducationCategory, renderLesson, CATEGORIES, AI_SUBCATEGORIES, classifyAiPost, eduLessonPath } from "./lib/education-render.js";
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
import { renderServicesHub, renderServicesDetail } from "./lib/services-render.js";
import { renderTermsPage, renderPrivacyPage, renderRetroBoyPrivacyPage } from "./lib/policy-render.js";
import { renderKctPage } from "./lib/kct-render.js";
import { renderKctTechPage } from "./lib/kct-tech-render.js";
import { renderKctColorPage } from "./lib/kct-color-render.js";
import { renderKctSpecimenPage } from "./lib/kct-specimen-render.js";
import { renderProjectsHub } from "./lib/projects-hub-render.js";
import { INDEXNOW_KEY, submitUrls, urlsForPost } from "./lib/indexnow.js";

const TEMPLATE_SLUG_REDIRECTS = {
  // c-basics 10 duplicate template posts -> canonical English lessons
  "ch01-c-프로그래밍-입문": "/education/c-basics/ch01-c-intro",
  "ch02-변수와-자료형": "/education/c-basics/ch02-program-development",
  "ch03-연산자와-제어문": "/education/c-basics/ch03-c-elements",
  "ch04-함수와-스코프": "/education/c-basics/ch04-variables-and-data-types",
  "ch05-포인터-마스터하기": "/education/c-basics/ch05-operators-and-expressions",
  "ch06-배열과-문자열": "/education/c-basics/ch06-conditional-statements",
  "ch07-구조체와-공용체": "/education/c-basics/ch07-loops-and-iterations",
  "ch08-파일-i-o": "/education/c-basics/ch08-functions-basics",
  "ch09-동적-메모리-할당": "/education/c-basics/ch09-scope-and-storage-classes",
  "ch10-전처리기와-매크로": "/education/c-basics/ch10-arrays",
  // java 10 duplicate template posts -> canonical English lessons
  "ch01-jvm과-자바의-특징": "/education/java/ch01-java-introduction-and-jvm",
  "ch02-변수와-자료형-완벽-이해": "/education/java/ch02-java-basics-data-types-operators",
  "ch03-제어문과-반복문": "/education/java/ch03-control-flow-arrays-exceptions",
  "ch04-클래스와-객체-설계": "/education/java/ch04-object-oriented-programming-classes",
  "ch05-상속과-인터페이스": "/education/java/ch05-inheritance-polymorphism-interfaces",
  "ch06-컬렉션-프레임워크": "/education/java/ch06-packages-modules-java-lang-util",
  "ch07-스트림-api와-함수형": "/education/java/ch07-generics-and-collection-framework",
  "ch08-멀티스레딩-동시성": "/education/java/ch08-io-streams-and-file-processing",
  "ch09-네트워킹-기초": "/education/java/ch09-gui-basics-and-swing-components",
  "ch10-디자인-패턴과-실전": "/education/java/ch10-gui-event-handling-model",
  // html5-web 10 duplicate template posts -> canonical English lessons
  "ch01-웹-개발의-기초": "/education/html5-web/ch01-web-history-and-html5",
  "ch02-html5-구조와-의미": "/education/html5-web/ch02-html5-basics",
  "ch03-폼과-입력-요소": "/education/html5-web/ch03-links-and-multimedia",
  "ch04-css3-스타일링": "/education/html5-web/ch04-css3-basics",
  "ch05-flexbox-레이아웃": "/education/html5-web/ch05-css3-layout-and-advanced",
  "ch06-css-grid": "/education/html5-web/ch06-forms-and-inputs",
  "ch07-javascript-기초": "/education/html5-web/ch07-website-layout-practice",
  "ch08-dom-조작": "/education/html5-web/ch08-javascript-fundamentals",
  "ch09-html5-api": "/education/html5-web/ch09-javascript-functions-and-objects",
  "ch10-웹-성능과-seo": "/education/html5-web/ch10-dom-and-html-document",
  // data-structure 10 duplicate template posts -> category hub
  "ch01-배열과-동적-배열": "/education/data-structure",
  "ch02-연결-리스트": "/education/data-structure",
  "ch03-스택과-큐": "/education/data-structure",
  "ch04-해시-테이블": "/education/data-structure",
  "ch05-이진-탐색-트리": "/education/data-structure",
  "ch06-자가-균형-트리": "/education/data-structure",
  "ch07-b-트리": "/education/data-structure",
  "ch08-힙과-우선순위": "/education/data-structure",
  "ch09-그래프-표현": "/education/data-structure",
  "ch10-고급-자료구조": "/education/data-structure",
};

const CANONICAL_ALIASES = {
  "/retroboy/privacy": "/privacy/retroboy",
  "/privacy/retro-boy": "/privacy/retroboy",
  "/pjt": "/projects",
  "/pjt/kct": "/projects/kct",
  "/pjt/kct/specimens": "/projects/kct/specimens",
  "/projects/kct/specimen": "/projects/kct/specimens",
  "/pjt/kct/specimen": "/projects/kct/specimens",
  "/projects/kct/astm-d638": "/projects/kct/specimens",
  "/pjt/kct/astm-d638": "/projects/kct/specimens",
  "/pjt/kct/color-samples": "/projects/kct/color-samples",
  "/projects/kct/sample": "/projects/kct/color-samples",
  "/pjt/kct/sample": "/projects/kct/color-samples",
  "/pjt/kct/technical": "/projects/kct/technical",
  "/projects/kct/tech": "/projects/kct/technical",
  "/pjt/kct/tech": "/projects/kct/technical",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function notFound() {
  return withSecurityHeaders(new Response(renderNotFoundPage(), {
    status: 404,
    headers: { "content-type": "text/html; charset=utf-8" },
  }));
}


async function requireAdmin(request, env) {
  const ok = await isAdminRequest(request, env);
  if (!ok) return json({ error: "인증이 필요합니다." }, 401);
  return null;
}

async function handleApi(request, env, url, ctx) {
  const { pathname } = url;
  const ping = (urls) => ctx?.waitUntil ? ctx.waitUntil(submitUrls(urls)) : submitUrls(urls);
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

function validateBlogMetadata(post) {
  if (post.kind !== "blog") return [];
  const warnings = [];
  const title = (post.seo_title || post.title || "").trim();
  const desc = (post.seo_description || post.excerpt || "").trim();
  if (title.length < 30) warnings.push(`SEO 제목 길이 미달 (${title.length}자 / 권장 30~60자)`);
  else if (title.length > 60) warnings.push(`SEO 제목 길이 초과 (${title.length}자 / 권장 30~60자)`);
  if (desc.length < 100) warnings.push(`SEO 설명 길이 미달 (${desc.length}자 / 권장 100~160자)`);
  else if (desc.length > 160) warnings.push(`SEO 설명 길이 초과 (${desc.length}자 / 권장 100~160자)`);
  return warnings;
}

  if (pathname === "/api/posts" && method === "POST") {
    const denied = await requireAdmin(request, env);
    if (denied) return denied;
    const body = await request.json().catch(() => null);
    if (!body || !body.title) return json({ error: "제목은 필수입니다." }, 400);
    body.content_html = marked.parse(body.content_md || "");
    const post = await createPost(env.DB, body, uniqueSlug);
    if (post.status === "published") ping(urlsForPost(post));
    const seo_warnings = post.status === "published" ? validateBlogMetadata(post) : [];
    return json({ ...post, seo_warnings }, 201);
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
      if (post && post.status === "published") ping(urlsForPost(post));
      if (!post) return notFound();
      const seo_warnings = post.status === "published" ? validateBlogMetadata(post) : [];
      return json({ ...post, seo_warnings });
    }
    if (method === "DELETE") {
      const denied = await requireAdmin(request, env);
      if (denied) return denied;
      const existing = await getPostById(env.DB, id);
      await deletePost(env.DB, id);
      if (existing && existing.status === "published") ping(urlsForPost(existing));
      return json({ ok: true });
    }
  }

  if (pathname === "/api/indexnow/resubmit" && method === "POST") {
    const denied = await requireAdmin(request, env);
    if (denied) return denied;
    const [blogPosts, educationPosts] = await Promise.all([
      listAllPublished(env.DB, "blog"),
      listAllPublished(env.DB, "education"),
    ]);
    const urls = [
      "https://davhave.com/sitemap.xml",
      ...blogPosts.map((p) => `https://davhave.com/blog/${p.slug}`),
      ...educationPosts.map((p) => `https://davhave.com${eduLessonPath(p)}`),
    ];
    ping(urls);
    return json({ ok: true, submitted: urls.length });
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

async function handleBlog(request, env, parts, url, ctx) {
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
    if (!post || post.kind !== "blog" || (post.status !== "published" && !admin)) {
      return Response.redirect("https://davhave.com/blog", 301);
    }
    if (post.status === "published") ctx?.waitUntil?.(incrementViews(env.DB, post.id));
    return withSecurityHeaders(new Response(renderBlogPost(post), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  return Response.redirect("https://davhave.com/blog", 301);
}

async function handleEducation(env, parts, ctx) {
  // parts[0] === 'education'
  if (parts.length === 1) {
    const counts = await getEducationCategoryCounts(env.DB);
    return withSecurityHeaders(new Response(renderEducationHub(counts), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  const category = decodeURIComponent(parts[1]);
  if (!CATEGORIES[category]) {
    return Response.redirect("https://davhave.com/education", 301);
  }

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

    // 301 Redirect duplicate template lessons to canonical counterpart
    if (TEMPLATE_SLUG_REDIRECTS[target]) {
      return Response.redirect(`https://davhave.com${TEMPLATE_SLUG_REDIRECTS[target]}`, 301);
    }

    // Direct lesson slug: /education/[category]/[slug]
    const post = await getPostBySlug(env.DB, target);
    if (!post || post.kind !== "education" || post.status !== "published") {
      return Response.redirect(`https://davhave.com/education/${category}`, 301);
    }

    // 301 Redirect legacy /education/ai/[slug] to canonical /education/ai/[subcat]/[slug]
    if (category === "ai") {
      const subcat = classifyAiPost(post);
      return Response.redirect(`https://davhave.com/education/ai/${subcat}/${post.slug}`, 301);
    }

    const { prev, next } = await getAdjacentLessons(env.DB, post.category, post.order_index);
    ctx?.waitUntil?.(incrementViews(env.DB, post.id));
    return withSecurityHeaders(new Response(renderLesson({ post, prev, next }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  // /education/ai/[subcat]/[slug] OR /education/[category]/[subcat]/[slug]
  if (parts.length === 4) {
    const slug = decodeURIComponent(parts[3]);
    if (TEMPLATE_SLUG_REDIRECTS[slug]) {
      return Response.redirect(`https://davhave.com${TEMPLATE_SLUG_REDIRECTS[slug]}`, 301);
    }
    const post = await getPostBySlug(env.DB, slug);
    if (!post || post.kind !== "education" || post.status !== "published") {
      return Response.redirect(`https://davhave.com/education/${category}`, 301);
    }
    const { prev, next } = await getAdjacentLessons(env.DB, post.category, post.order_index);
    ctx?.waitUntil?.(incrementViews(env.DB, post.id));
    return withSecurityHeaders(new Response(renderLesson({ post, prev, next }), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }

  return Response.redirect("https://davhave.com/education", 301);
}

async function handlePortfolio(parts) {
  if (parts.length === 1) {
    return withSecurityHeaders(new Response(renderPortfolioHub(), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }
  if (parts.length === 2) {
    const slug = decodeURIComponent(parts[1]);
    if (slug === "kct" || slug === "kconstrade") {
      return Response.redirect("https://davhave.com/projects/kct", 301);
    }
    const project = getProject(slug);
    if (!project) return Response.redirect("https://davhave.com/portfolio", 301);
    return withSecurityHeaders(new Response(renderPortfolioDetail(project), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }));
  }
  return Response.redirect("https://davhave.com/portfolio", 301);
}




export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname === `/${INDEXNOW_KEY}.txt`) {
      return new Response(INDEXNOW_KEY, {
        headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=86400" },
      });
    }

    // Redirect HTTP to HTTPS
    if (url.protocol === "http:" && !url.hostname.includes("localhost") && !url.hostname.includes("127.0.0.1")) {
      return Response.redirect(`https://${url.hostname}${url.pathname}${url.search}`, 301);
    }

    // Strip trailing slash and resolve canonical aliases (canonical normalization) - exclude root "/"
    if (pathname.length > 1 && pathname.endsWith("/")) {
      const cleanPath = pathname.slice(0, -1);
      const target = CANONICAL_ALIASES[cleanPath] || (cleanPath.startsWith("/pjt/") ? "/projects" + cleanPath.slice("/pjt".length) : cleanPath);
      return Response.redirect(`https://${url.hostname}${target}${url.search}`, 301);
    }

    // Canonical 301 redirects for legacy aliases
    if (CANONICAL_ALIASES[pathname]) {
      return Response.redirect(`https://${url.hostname}${CANONICAL_ALIASES[pathname]}${url.search}`, 301);
    }

    if (pathname.startsWith("/pjt/")) {
      return Response.redirect(`https://${url.hostname}/projects${pathname.slice("/pjt".length)}${url.search}`, 301);
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

    if (pathname === "/privacy/retroboy") {
      return withSecurityHeaders(new Response(renderRetroBoyPrivacyPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      }), { "Cache-Control": "no-cache, no-store, must-revalidate" });
    }

    if (pathname === "/projects/kct/specimens") {
      const raw = new Response(renderKctSpecimenPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "no-cache, no-store, must-revalidate" });
    }

    if (pathname === "/projects/kct/color-samples") {
      const raw = new Response(renderKctColorPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/projects/kct/technical") {
      const raw = new Response(renderKctTechPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/projects/kct") {
      const raw = new Response(renderKctPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });
    }

    if (pathname === "/projects") {
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
      return handleApi(request, env, url, ctx);
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
      const combined = [
        ...blogPosts.map((p) => ({ ...p, kind: "blog" })),
        ...educationPosts.map((p) => ({ ...p, kind: "education" })),
      ].sort((a, b) => {
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
      return withSecurityHeaders(await handleEducation(env, pathname.split("/").filter(Boolean), ctx));
    }

    if (pathname === "/admin") {
      const raw = new Response(renderAdminPage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return withSecurityHeaders(raw);
    }

    if (pathname === "/blog" || pathname.startsWith("/blog/")) {
      const parts = pathname.split("/").filter(Boolean);
      return withSecurityHeaders(await handleBlog(request, env, parts, url, ctx));
    }

    const assetRes = await env.ASSETS.fetch(request);
    if (assetRes.status === 404) {
      return notFound();
    }
    return withSecurityHeaders(assetRes);
  },
};
