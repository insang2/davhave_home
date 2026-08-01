export function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const BASE_STYLE = `
  @font-face{font-family:'DH Display';font-weight:500;font-style:normal;font-display:swap;src:url('/fonts/bricolage-grotesque-500.woff2') format('woff2');}
  @font-face{font-family:'DH Display';font-weight:800;font-style:normal;font-display:swap;src:url('/fonts/bricolage-grotesque-800.woff2') format('woff2');}
  @font-face{font-family:'DH Mono';font-weight:400;font-style:normal;font-display:swap;src:url('/fonts/jetbrains-mono-400.woff2') format('woff2');}
  @font-face{font-family:'DH Mono';font-weight:500;font-style:normal;font-display:swap;src:url('/fonts/jetbrains-mono-500.woff2') format('woff2');}

  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --bg:#0a0908;--surface:#16130f;--border:rgba(242,237,228,.09);--border-strong:rgba(242,237,228,.16);
    --accent:#ff6b35;--accent2:#f2c879;--text:#f2ede4;--muted:#9a8f80;
    --radius:18px;
    --font:'DH Display',ui-sans-serif,system-ui,-apple-system,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;
    --mono:'DH Mono',ui-monospace,'SFMono-Regular',Menlo,monospace,-apple-system,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;
    --kr:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif;
  }
  html{scroll-behavior:smooth;color-scheme:dark;}
  body{background:var(--bg);color:var(--text);font-family:var(--kr);line-height:1.75;-webkit-font-smoothing:antialiased;}
  a{color:var(--accent);text-decoration:none;}
  :focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px;}
  ::selection{background:var(--accent);color:#17110a;}
  .wrap{max-width:820px;margin:0 auto;padding:7.5rem 5vw 6rem;}
  nav{
    position:fixed;top:1.1rem;left:50%;transform:translateX(-50%);z-index:100;
    display:flex;align-items:center;gap:2rem;width:min(92vw,760px);
    padding:.7rem 1.3rem;background:rgba(15,13,10,.72);
    backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
    border:1px solid var(--border-strong);border-radius:100px;
    box-shadow:0 12px 40px rgba(0,0,0,.35);
  }
  .logo{font-family:var(--font);font-weight:800;font-size:1rem;letter-spacing:-.01em;color:var(--text);}
  .logo span{color:var(--accent);}
  nav .back{margin-left:auto;font-family:var(--mono);font-size:.78rem;color:var(--muted);transition:color .2s;}
  nav .back:hover{color:var(--accent);}
  .eyebrow{display:inline-block;font-family:var(--mono);font-size:.75rem;letter-spacing:.14em;color:var(--accent);
    text-transform:uppercase;margin-bottom:1rem;}
  h1{font-family:var(--font);font-size:clamp(1.8rem,4vw,2.6rem);font-weight:800;letter-spacing:-.02em;line-height:1.15;margin-bottom:1rem;text-wrap:balance;}
  .desc{color:var(--muted);margin-bottom:2.5rem;}
  .post-card{display:block;padding:1.6rem 0;border-bottom:1px solid var(--border);}
  .post-card:hover .post-title{color:var(--accent);}
  .post-title{font-size:1.2rem;font-weight:600;color:var(--text);margin-bottom:.5rem;transition:color .2s;}
  .post-meta{font-family:var(--mono);font-size:.78rem;color:var(--muted);margin-bottom:.6rem;}
  .post-excerpt{color:var(--muted);font-size:.92rem;}
  .tag-row{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.8rem;}
  .tag-chip{font-family:var(--mono);font-size:.72rem;color:var(--muted);border:1px solid var(--border);
    border-radius:100px;padding:.2rem .7rem;transition:color .2s,border-color .2s;}
  .tag-chip:hover{color:var(--accent);border-color:var(--accent);}
  .pagination{display:flex;gap:1rem;margin-top:2.5rem;font-family:var(--mono);font-size:.85rem;}
  .empty{color:var(--muted);padding:3rem 0;text-align:center;}
  article img{max-width:100%;border-radius:var(--radius);margin:1.5rem 0;}
  article h2{font-family:var(--font);font-size:1.4rem;margin:2rem 0 1rem;}
  article h3{font-family:var(--font);font-size:1.15rem;margin:1.6rem 0 .8rem;}
  article p{margin-bottom:1.1rem;color:var(--text);}
  article a{border-bottom:1px solid var(--accent);}
  article code{font-family:var(--mono);background:rgba(242,237,228,.07);padding:.1em .4em;border-radius:5px;font-size:.88em;}
  article pre{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.2rem;
    overflow-x:auto;margin:1.5rem 0;}
  article pre code{background:none;padding:0;}
  article ul,article ol{margin:0 0 1.1rem 1.4rem;color:var(--text);}
  article table{width:100%;border-collapse:collapse;margin:0 0 1.5rem;font-size:.92rem;}
  article th,article td{border:1px solid var(--border);padding:.55rem .8rem;text-align:left;}
  article th{color:var(--muted);font-family:var(--mono);font-size:.78rem;font-weight:600;}
  article blockquote{margin:0 0 1.1rem;padding:.2rem 1.2rem;border-left:2px solid var(--accent);color:var(--muted);}
  .cover{width:100%;border-radius:var(--radius);margin-bottom:2rem;border:1px solid var(--border);}
  .share-row{display:flex;align-items:center;gap:1rem;margin:2.5rem 0;padding:1.2rem;border:1px solid var(--border);
    border-radius:var(--radius);background:var(--surface);}
  .copy-btn{font-family:var(--mono);font-size:.82rem;color:#17110a;background:linear-gradient(135deg,var(--accent),var(--accent2));
    border:none;border-radius:8px;padding:.6rem 1.1rem;cursor:pointer;font-weight:600;}
  .copy-url{font-family:var(--mono);font-size:.8rem;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  footer{padding:2.5rem 5vw 3rem;border-top:1px solid var(--border);text-align:center;font-family:var(--mono);
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
  <meta name="theme-color" content="#0a0908" />
  <meta property="og:type" content="${escapeHtml(ogType)}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  ${canonical ? `<meta property="og:url" content="${escapeHtml(canonical)}" />` : ""}
  ${ogImage ? `<meta property="og:image" content="${escapeHtml(ogImage)}" />` : ""}
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="alternate" type="application/rss+xml" title="DAVHAVE 블로그 RSS" href="https://davhave.com/rss.xml" />
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
