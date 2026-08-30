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
    display:flex;align-items:center;gap:1.5rem;width:min(94vw,840px);
    padding:.65rem 1.4rem;background:rgba(15,13,10,.78);
    backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);
    border:1px solid rgba(255,107,53,.22);border-radius:100px;
    box-shadow:0 16px 50px rgba(0,0,0,.45),0 0 20px rgba(255,107,53,.08);
  }
  .logo{font-family:var(--font);font-weight:800;font-size:1.05rem;letter-spacing:-.01em;color:var(--text);text-decoration:none;flex:none;}
  .logo span{color:var(--accent);}
  .nav-quick-links{display:flex;gap:1.2rem;align-items:center;list-style:none;margin-left:auto;}
  .nav-quick-links a{font-family:var(--mono);font-size:.78rem;color:var(--muted);transition:color .2s;text-decoration:none;}
  .nav-quick-links a:hover{color:var(--text);}
  .nav-quick-links a.pjt-link{color:var(--accent2);font-weight:700;}
  nav .back{font-family:var(--mono);font-size:.78rem;color:var(--accent);transition:all .2s;padding:.35rem .85rem;background:rgba(255,107,53,.12);border:1px solid rgba(255,107,53,.3);border-radius:100px;text-decoration:none;white-space:nowrap;flex:none;}
  nav .back:hover{background:rgba(255,107,53,.25);transform:translateY(-1px);}
  @media(max-width:680px){.nav-quick-links{display:none;} nav{padding:.55rem 1rem;}}
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
  article h2{font-family:var(--font);font-size:1.4rem;margin:2rem 0 1rem;scroll-margin-top:5rem;}
  article h3{font-family:var(--font);font-size:1.15rem;margin:1.6rem 0 .8rem;scroll-margin-top:5rem;}
  article p{margin-bottom:1.1rem;color:var(--text);}
  article a{border-bottom:1px solid var(--accent);transition:color .2s,border-color .2s;}
  article a:hover{color:var(--accent2);border-color:var(--accent2);}
  article code{font-family:var(--mono);background:rgba(242,237,228,.07);padding:.15em .45em;border-radius:5px;font-size:.88em;color:var(--accent2);}
  article pre{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.2rem;
    overflow-x:auto;margin:1.5rem 0;position:relative;}
  article pre code{background:none;padding:0;color:var(--text);}
  .code-block-wrapper{position:relative;margin:1.5rem 0;}
  .code-block-wrapper pre{margin:0;}
  .code-copy-btn{position:absolute;top:.7rem;right:.7rem;font-family:var(--mono);font-size:.72rem;padding:.35rem .75rem;
    background:rgba(255,255,255,.08);color:var(--muted);border:1px solid var(--border);border-radius:6px;cursor:pointer;
    backdrop-filter:blur(8px);transition:all .2s;}
  .code-copy-btn:hover{background:var(--accent);color:#17110a;border-color:var(--accent);}
  article ul,article ol{margin:0 0 1.1rem 1.4rem;color:var(--text);}
  article li{margin-bottom:.4rem;}
  .table-wrapper{overflow-x:auto;margin:1.5rem 0;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);}
  article table{width:100%;border-collapse:collapse;margin:0;font-size:.92rem;}
  article th,article td{border-bottom:1px solid var(--border);padding:.75rem 1rem;text-align:left;}
  article th{background:rgba(255,255,255,.03);color:var(--accent2);font-family:var(--mono);font-size:.8rem;font-weight:600;letter-spacing:.04em;}
  article tr:last-child td{border-bottom:none;}
  article tr:nth-child(even){background:rgba(255,255,255,.015);}
  article blockquote{margin:1.5rem 0;padding:.8rem 1.4rem;border-left:3px solid var(--accent);background:rgba(255,107,53,.04);
    border-radius:0 var(--radius) var(--radius) 0;color:var(--text);}
  .cover{width:100%;border-radius:var(--radius);margin-bottom:2rem;border:1px solid var(--border);}
  
  /* TOC Box */
  .toc-box{background:var(--surface);border:1px solid var(--border-strong);border-radius:var(--radius);padding:1.2rem 1.5rem;margin:1.8rem 0 2.5rem;}
  .toc-title{font-family:var(--mono);font-size:.82rem;letter-spacing:.1em;color:var(--accent);text-transform:uppercase;margin-bottom:.8rem;font-weight:600;}
  .toc-list{list-style:none;margin:0;padding:0;}
  .toc-list li{margin-bottom:.4rem;font-size:.9rem;}
  .toc-list li.toc-h3{padding-left:1.2rem;font-size:.85rem;}
  .toc-list a{color:var(--muted);border-bottom:none;transition:color .2s;}
  .toc-list a:hover{color:var(--text);}

  /* CTA Card */
  .cta-card{margin:3.5rem 0 2rem;padding:2rem;background:linear-gradient(135deg,rgba(22,19,15,.9),rgba(255,107,53,.08));
    border:1px solid var(--border-strong);border-radius:var(--radius);text-align:center;}
  .cta-card h3{font-family:var(--font);font-size:1.3rem;margin-bottom:.6rem;color:var(--text);}
  .cta-card p{color:var(--muted);font-size:.92rem;margin-bottom:1.4rem;}
  .cta-btn{display:inline-block;font-family:var(--mono);font-size:.85rem;font-weight:600;color:#17110a;
    background:linear-gradient(135deg,var(--accent),var(--accent2));padding:.7rem 1.4rem;border-radius:8px;transition:transform .2s,box-shadow .2s;}
  .cta-btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(255,107,53,.3);color:#17110a;border-bottom:none;}

  .share-row{display:flex;align-items:center;flex-wrap:wrap;gap:1rem;margin:2.5rem 0;padding:1.2rem;border:1px solid var(--border);
    border-radius:var(--radius);background:var(--surface);}
  .copy-btn,.share-x-btn{font-family:var(--mono);font-size:.82rem;color:#17110a;background:linear-gradient(135deg,var(--accent),var(--accent2));
    border:none;border-radius:8px;padding:.6rem 1.1rem;cursor:pointer;font-weight:600;display:inline-flex;align-items:center;gap:.4rem;}
  .share-x-btn{background:rgba(255,255,255,.1);color:var(--text);border:1px solid var(--border);}
  .share-x-btn:hover{background:rgba(255,255,255,.2);color:var(--text);}
  .copy-url{font-family:var(--mono);font-size:.8rem;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;}
  footer{padding:2.5rem 5vw 3rem;border-top:1px solid var(--border);text-align:center;font-family:var(--mono);
    font-size:.8rem;color:var(--muted);}
`;

export function head({ title, description, canonical, ogImage, extraJsonLd, noindex, ogType = "article", googleVerification }) {
  const googleMeta = googleVerification ? `<meta name="google-site-verification" content="${escapeHtml(googleVerification)}" />` : "";
  return `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  ${googleMeta}
  ${noindex ? '<meta name="robots" content="noindex, nofollow" />' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />'}
  <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  ${canonical ? `<link rel="canonical" href="${escapeHtml(canonical)}" />` : ""}
  <link rel="preload" href="/fonts/bricolage-grotesque-800.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/fonts/jetbrains-mono-400.woff2" as="font" type="font/woff2" crossorigin />
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
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-T3JSFH8T');</script>
  <!-- End Google Tag Manager -->
  <style>${BASE_STYLE}</style>
  `;
}

export function navBar(backHref = "/blog", backLabel = "← 목록으로") {
  return `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3JSFH8T" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<nav>
  <a class="logo" href="/">DAV<span>HAVE</span></a>
  <ul class="nav-quick-links">
    <li><a href="/projects" class="pjt-link">Projects ↗</a></li>
    <li><a href="/education">Education</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/stack">Stack</a></li>
  </ul>
  <a class="back" href="${backHref}">${backLabel}</a>
</nav>`;
}

export function renderFooter() {
  return `<footer>
    <div style="margin-bottom:.8rem; display:flex; justify-content:center; gap:1.2rem; flex-wrap:wrap;">
      <a href="/terms" style="color:var(--muted); font-size:.8rem; transition:color .2s;">서비스 이용약관</a>
      <span style="color:var(--border-strong);">·</span>
      <a href="/privacy" style="color:var(--muted); font-size:.8rem; transition:color .2s;">개인정보 처리방침</a>
      <span style="color:var(--border-strong);">·</span>
      <a href="mailto:useapp.davhave@gmail.com" style="color:var(--muted); font-size:.8rem; transition:color .2s;">문의하기</a>
    </div>
    © ${new Date().getFullYear()} DAVHAVE · Oscar Lee
  </footer>`;
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
  ${renderFooter()}
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
    <div id="toc-placeholder"></div>
    <article id="article-body">${post.content_html}</article>
    ${
      post.tags?.length
        ? `<div class="tag-row">${post.tags
            .map((t) => `<a class="tag-chip" href="/blog/tag/${escapeHtml(t.slug)}">#${escapeHtml(t.name)}</a>`)
            .join("")}</div>`
        : ""
    }
    
    <div class="cta-card">
      <h3>🚀 모바일 앱 · 웹 · AI 프로젝트 제작 문의</h3>
      <p>DAVHAVE는 비즈니스의 성장과 혁신을 돕는 유익한 디지털 경험을 설계하고 구축합니다.</p>
      <a class="cta-btn" href="mailto:useapp.davhave@gmail.com">프로젝트 문의하기 →</a>
    </div>

    <div class="share-row">
      <span class="copy-url" id="post-url">${url}</span>
      <button class="copy-btn" id="copy-btn">링크 복사</button>
      <a class="share-x-btn" id="share-x" href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}" target="_blank" rel="noopener">X 공유</a>
    </div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Table Wrapper Auto Wrap
      document.querySelectorAll('article table').forEach(tbl => {
        const wrap = document.createElement('div');
        wrap.className = 'table-wrapper';
        tbl.parentNode.insertBefore(wrap, tbl);
        wrap.appendChild(tbl);
      });

      // 2. Code Block Copy Buttons
      document.querySelectorAll('article pre').forEach(pre => {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const btn = document.createElement('button');
        btn.className = 'code-copy-btn';
        btn.textContent = 'Copy';
        btn.addEventListener('click', async () => {
          const codeText = pre.querySelector('code')?.innerText || pre.innerText;
          try {
            await navigator.clipboard.writeText(codeText);
            btn.textContent = 'Copied! ✓';
            setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
          } catch (e) {
            btn.textContent = 'Failed';
          }
        });
        wrapper.appendChild(btn);
      });

      // 3. Auto Table of Contents (TOC)
      const article = document.getElementById('article-body');
      const headings = article.querySelectorAll('h2, h3');
      if (headings.length >= 3) {
        const tocBox = document.createElement('div');
        tocBox.className = 'toc-box';
        let html = '<div class="toc-title">📋 목차 (Table of Contents)</div><ul class="toc-list">';
        headings.forEach((h, i) => {
          const id = 'heading-' + i;
          h.id = id;
          const isH3 = h.tagName.toLowerCase() === 'h3';
          html += \`<li class="\${isH3 ? 'toc-h3' : ''}"><a href="#\${id}">\${h.innerText}</a></li>\`;
        });
        html += '</ul>';
        tocBox.innerHTML = html;
        document.getElementById('toc-placeholder').appendChild(tocBox);
      }
    });

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
