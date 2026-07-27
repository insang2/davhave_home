import { escapeHtml, head, navBar } from "./render.js";
import { projects } from "./projects.js";

const PORTFOLIO_STYLE = `
  .case-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-top:2rem;}
  .case-card{display:block;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
    overflow:hidden;transition:transform .25s,box-shadow .25s,border-color .25s;}
  .case-card:hover{transform:translateY(-4px);border-color:rgba(79,209,197,.35);box-shadow:0 16px 40px rgba(0,0,0,.4);}
  .case-card img{width:100%;height:170px;object-fit:cover;object-position:top;display:block;border-bottom:1px solid var(--border);}
  .case-card .body{padding:1.4rem 1.5rem;}
  .case-card .client{font-size:1.05rem;font-weight:600;margin-bottom:.4rem;color:var(--text);}
  .case-card .tagline{font-size:.85rem;color:var(--accent);font-family:var(--mono);margin-bottom:.6rem;}
  .case-card .summary{font-size:.88rem;color:var(--muted);}
  .detail-cover{width:100%;border-radius:var(--radius);border:1px solid var(--border);margin-bottom:2rem;
    max-height:420px;object-fit:cover;object-position:top;}
  .stack-row{display:flex;flex-wrap:wrap;gap:.5rem;margin:1.5rem 0;}
  .stack-chip{font-family:var(--mono);font-size:.75rem;color:var(--accent2);border:1px solid rgba(124,108,248,.3);
    background:rgba(124,108,248,.08);padding:.3rem .8rem;border-radius:100px;}
  .feature-list{margin:1.5rem 0;padding:0;list-style:none;}
  .feature-list li{padding:.6rem 0;border-bottom:1px solid var(--border);color:var(--text);font-size:.92rem;
    display:flex;gap:.6rem;}
  .feature-list li::before{content:'✓';color:var(--accent);font-weight:700;}
  .visit-btn{display:inline-flex;align-items:center;gap:.5rem;margin-top:1rem;padding:.75rem 1.6rem;
    background:linear-gradient(135deg,var(--accent),var(--accent2));color:#000;border-radius:10px;font-weight:600;
    font-size:.9rem;}
  .verify-note{margin-top:2rem;padding:1rem 1.2rem;border:1px solid var(--border);border-radius:var(--radius);
    background:var(--surface);color:var(--muted);font-size:.82rem;}
`;

export function renderPortfolioHub() {
  const title = "포트폴리오 | DAVHAVE";
  const description = "DAVHAVE가 실제로 설계·개발한 클라이언트 사이트 사례 모음.";
  const cards = projects
    .map(
      (p) => `
    <a class="case-card" href="/portfolio/${escapeHtml(p.slug)}">
      <img src="${escapeHtml(p.coverImage)}" alt="${escapeHtml(p.clientName)} 스크린샷" loading="lazy" />
      <div class="body">
        <div class="client">${escapeHtml(p.clientName)}</div>
        <div class="tagline">${escapeHtml(p.tagline)}</div>
        <div class="summary">${escapeHtml(p.summary)}</div>
      </div>
    </a>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical: "https://davhave.com/portfolio", ogType: "website" })}<style>${PORTFOLIO_STYLE}</style></head>
<body>
  ${navBar("/", "← 홈")}
  <div class="wrap">
    <span class="eyebrow">// portfolio</span>
    <h1>포트폴리오</h1>
    <p class="desc">${escapeHtml(description)}</p>
    <div class="case-grid">${cards}</div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}

export function renderPortfolioDetail(project) {
  const url = `https://davhave.com/portfolio/${project.slug}`;
  const title = `${project.clientName} 개발 사례 | DAVHAVE 포트폴리오`;
  const description = project.summary;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.clientName} 웹사이트 개발`,
    description: project.summary,
    url,
    image: `https://davhave.com${project.coverImage}`,
    creator: { "@type": "Person", name: "Oscar Lee", url: "https://davhave.com/" },
  };

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({
    title,
    description,
    canonical: url,
    ogImage: `https://davhave.com${project.coverImage}`,
    extraJsonLd: jsonLd,
    ogType: "website",
  })}<style>${PORTFOLIO_STYLE}</style></head>
<body>
  ${navBar("/portfolio", "← 포트폴리오")}
  <div class="wrap">
    <span class="eyebrow">// portfolio</span>
    <h1>${escapeHtml(project.clientName)}</h1>
    <p class="desc">${escapeHtml(project.tagline)}</p>
    <img class="detail-cover" src="${escapeHtml(project.coverImage)}" alt="${escapeHtml(project.clientName)} 스크린샷" />
    <p>${escapeHtml(project.intro)}</p>
    <div class="stack-row">${project.stack.map((s) => `<span class="stack-chip">${escapeHtml(s)}</span>`).join("")}</div>
    <h3 style="margin-top:2rem;font-size:1.1rem;">구현 기능</h3>
    <ul class="feature-list">${project.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
    <a class="visit-btn" href="${escapeHtml(project.siteUrl)}" target="_blank" rel="noopener">사이트 방문하기 →</a>
    <div class="verify-note">${escapeHtml(project.verifiedNote)}</div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}
