export function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const BASE_STYLE = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --bg:#050811;--surface:#0b1120;--border:rgba(99,179,237,.15);
    --accent:#4fd1c5;--accent2:#7c6cf8;--text:#e2e8f0;--muted:#718096;
    --radius:14px;--font:'Space Grotesk',sans-serif;--mono:'Space Mono',monospace;
  }
  html{scroll-behavior:smooth;}
  body{background:var(--bg);color:var(--text);font-family:var(--font);line-height:1.75;}
  a{color:var(--accent);text-decoration:none;}
  .wrap{max-width:820px;margin:0 auto;padding:7rem 5vw 6rem;}
  nav{position:fixed;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;
    padding:1.2rem 5vw;backdrop-filter:blur(18px);background:rgba(5,8,17,.75);border-bottom:1px solid var(--border);z-index:100;}
  .logo{font-family:var(--mono);font-weight:700;letter-spacing:.12em;color:var(--accent);font-size:1.1rem;}
  .logo span{color:var(--accent2);}
  nav .back{font-size:.85rem;color:var(--muted);}
  nav .back:hover{color:var(--accent);}
  .eyebrow{display:inline-block;font-family:var(--mono);font-size:.75rem;letter-spacing:.15em;color:var(--accent);
    text-transform:uppercase;margin-bottom:1rem;}
  h1{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:700;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem;}
  .desc{color:var(--muted);margin-bottom:2.5rem;}
  .post-card{display:block;padding:1.6rem 0;border-bottom:1px solid var(--border);}
  .post-card:hover .post-title{color:var(--accent);}
  .post-title{font-size:1.2rem;font-weight:600;color:var(--text);margin-bottom:.5rem;transition:color .2s;}
  .post-meta{font-family:var(--mono);font-size:.78rem;color:var(--muted);margin-bottom:.6rem;}
  .post-excerpt{color:var(--muted);font-size:.92rem;}
  .tag-row{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.8rem;}
  .tag-chip{font-family:var(--mono);font-size:.72rem;color:var(--muted);border:1px solid var(--border);
    border-radius:100px;padding:.2rem .7rem;}
  .tag-chip:hover{color:var(--accent);border-color:var(--accent);}
  .pagination{display:flex;gap:1rem;margin-top:2.5rem;font-family:var(--mono);font-size:.85rem;}
  .empty{color:var(--muted);padding:3rem 0;text-align:center;}
  article img{max-width:100%;border-radius:var(--radius);margin:1.5rem 0;}
  article h2{font-size:1.4rem;margin:2rem 0 1rem;}
  article h3{font-size:1.15rem;margin:1.6rem 0 .8rem;}
  article p{margin-bottom:1.1rem;color:var(--text);}
  article a{border-bottom:1px solid var(--accent);}
  article code{font-family:var(--mono);background:rgba(255,255,255,.06);padding:.1em .4em;border-radius:5px;font-size:.88em;}
  article pre{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.2rem;
    overflow-x:auto;margin:1.5rem 0;}
  article pre code{background:none;padding:0;}
  article ul,article ol{margin:0 0 1.1rem 1.4rem;color:var(--text);}
  .cover{width:100%;border-radius:var(--radius);margin-bottom:2rem;border:1px solid var(--border);}
  .share-row{display:flex;align-items:center;gap:1rem;margin:2.5rem 0;padding:1.2rem;border:1px solid var(--border);
    border-radius:var(--radius);background:var(--surface);}
  .copy-btn{font-family:var(--mono);font-size:.82rem;color:#000;background:linear-gradient(135deg,var(--accent),var(--accent2));
    border:none;border-radius:8px;padding:.6rem 1.1rem;cursor:pointer;font-weight:600;}
  .copy-url{font-family:var(--mono);font-size:.8rem;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  footer{padding:2.5rem 5vw;border-top:1px solid var(--border);text-align:center;font-family:var(--mono);
    font-size:.8rem;color:var(--muted);}
`;

export function head({ title, description, canonical, ogImage, extraJsonLd, noindex, ogType = "article" }) {
  return `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  ${noindex ? '<meta name="robots" content="noindex, nofollow" />' : '<meta name="robots" content="index, follow" />'}
  ${canonical ? `<link rel="canonical" href="${escapeHtml(canonical)}" />` : ""}
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#050811" />
  <meta property="og:type" content="${escapeHtml(ogType)}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  ${canonical ? `<meta property="og:url" content="${escapeHtml(canonical)}" />` : ""}
  ${ogImage ? `<meta property="og:image" content="${escapeHtml(ogImage)}" />` : ""}
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="alternate" type="application/rss+xml" title="DAVHAVE 블로그 RSS" href="https://davhave.com/rss.xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
  ${extraJsonLd ? `<script type="application/ld+json">${JSON.stringify(extraJsonLd)}</script>` : ""}
  <style>${BASE_STYLE}</style>
  `;
}

export function navBar(backHref = "/blog", backLabel = "← 블로그 목록") {
  return `<nav><a class="logo" href="/">DAV<span>HAVE</span></a><a class="back" href="${backHref}">${backLabel}</a></nav>`;
}

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export function renderBlogList({ posts, page, pageSize, total, tag, basePath = "/blog" }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const items = posts.length
    ? posts
        .map(
          (p) => `
      <a class="post-card" href="/blog/${escapeHtml(p.slug)}">
        <div class="post-meta">${formatDate(p.published_at)}</div>
        <div class="post-title">${escapeHtml(p.title)}</div>
        <div class="post-excerpt">${escapeHtml(p.excerpt || "")}</div>
        ${
          p.tags?.length
            ? `<div class="tag-row">${p.tags.map((t) => `<span class="tag-chip">#${escapeHtml(t.name)}</span>`).join("")}</div>`
            : ""
        }
      </a>`
        )
        .join("")
    : `<div class="empty">${tag ? `#${escapeHtml(tag)} 태그의 글이 아직 없습니다.` : "아직 발행된 글이 없습니다."}</div>`;

  const pagination =
    totalPages > 1
      ? `<div class="pagination">
          ${page > 1 ? `<a href="${basePath}?page=${page - 1}">← 이전</a>` : ""}
          <span>${page} / ${totalPages}</span>
          ${page < totalPages ? `<a href="${basePath}?page=${page + 1}">다음 →</a>` : ""}
        </div>`
      : "";

  const title = tag ? `#${tag} 태그 | DAVHAVE 블로그` : "블로그 | DAVHAVE";
  const description = tag
    ? `DAVHAVE 블로그의 #${tag} 태그 글 모음`
    : "모바일 앱·웹·AI 개발에 대한 DAVHAVE의 기록.";

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical: `https://davhave.com${basePath}` })}</head>
<body>
  ${navBar()}
  <div class="wrap">
    <span class="eyebrow">// ${tag ? "tag" : "blog"}</span>
    <h1>${tag ? `#${escapeHtml(tag)}` : "블로그"}</h1>
    <p class="desc">${escapeHtml(description)}</p>
    ${items}
    ${pagination}
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}

export function renderBlogPost(post) {
  const url = `https://davhave.com/blog/${post.slug}`;
  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    url,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { "@type": "Person", name: "Oscar Lee", url: "https://davhave.com/" },
    publisher: { "@type": "Organization", name: "DAVHAVE", url: "https://davhave.com/" },
    ...(post.cover_image_url ? { image: post.cover_image_url } : {}),
  };

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical: url, ogImage: post.cover_image_url, extraJsonLd: jsonLd })}</head>
<body>
  ${navBar()}
  <div class="wrap">
    <span class="eyebrow">// blog</span>
    <h1>${escapeHtml(post.title)}</h1>
    <div class="post-meta">${formatDate(post.published_at)} 발행 · 수정 ${formatDate(post.updated_at)}</div>
    ${post.cover_image_url ? `<img class="cover" src="${escapeHtml(post.cover_image_url)}" alt="${escapeHtml(post.title)}" />` : ""}
    <article>${post.content_html}</article>
    ${
      post.tags?.length
        ? `<div class="tag-row">${post.tags
            .map((t) => `<a class="tag-chip" href="/blog/tag/${escapeHtml(t.slug)}">#${escapeHtml(t.name)}</a>`)
            .join("")}</div>`
        : ""
    }
    <div class="share-row">
      <span class="copy-url" id="post-url">${url}</span>
      <button class="copy-btn" id="copy-btn">링크 복사</button>
    </div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
  <script>
    document.getElementById('copy-btn').addEventListener('click', async () => {
      const btn = document.getElementById('copy-btn');
      try {
        await navigator.clipboard.writeText(document.getElementById('post-url').textContent.trim());
        const original = btn.textContent;
        btn.textContent = '복사됨 ✓';
        setTimeout(() => { btn.textContent = original; }, 1800);
      } catch (e) {
        alert('클립보드 복사에 실패했습니다.');
      }
    });
  </script>
</body>
</html>`;
}
