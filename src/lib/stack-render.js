import { head, navBar, escapeHtml } from "./render.js";
import { STACK_DATA } from "./stack-data.js";

const STACK_STYLE = `
  .stack-hub-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:2.5rem;}
  .stack-card{display:flex;flex-direction:column;justify-content:space-between;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.8rem;transition:transform .3s var(--ease),border-color .3s var(--ease),box-shadow .3s var(--ease);text-decoration:none;}
  .stack-card:hover{transform:translateY(-5px);border-color:rgba(255,107,53,.4);box-shadow:0 18px 40px rgba(0,0,0,.35);}
  .stack-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;}
  .stack-card h3{font-family:var(--font);font-size:1.3rem;color:var(--text);margin-bottom:.4rem;}
  .stack-card p{color:var(--muted);font-size:.9rem;line-height:1.6;margin-bottom:1.2rem;}
  .stack-badge{font-family:var(--mono);font-size:.7rem;letter-spacing:.04em;padding:.2rem .65rem;border-radius:100px;border:1px solid var(--border-strong);font-weight:500;}
  .stack-badge-mobile{color:var(--accent);background:rgba(255,107,53,.12);}
  .stack-badge-web{color:#4fd1c5;background:rgba(79,209,197,.12);}
  .stack-badge-ai{color:var(--accent2);background:rgba(242,200,121,.12);}
  .stack-badge-infra{color:#a855f7;background:rgba(168,85,247,.12);}
  .stack-card-link{font-family:var(--mono);font-size:.8rem;color:var(--accent);display:inline-flex;align-items:center;gap:.4rem;font-weight:600;}
  .stack-card:hover .stack-card-link{color:var(--accent2);}

  /* Detail Page Styles */
  .stack-detail-hero{margin-bottom:2.5rem;padding-bottom:2rem;border-bottom:1px solid var(--border);}
  .official-links{display:flex;flex-wrap:wrap;gap:1rem;margin:2rem 0 2.5rem;}
  .btn-official{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--mono);font-size:.85rem;font-weight:600;padding:.75rem 1.4rem;border-radius:8px;text-decoration:none;transition:transform .2s,box-shadow .2s;}
  .btn-official-primary{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#17110a;box-shadow:0 6px 20px rgba(255,107,53,.3);}
  .btn-official-primary:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(255,107,53,.45);color:#17110a;border-bottom:none;}
  .btn-official-sec{background:var(--surface);color:var(--text);border:1px solid var(--border-strong);}
  .btn-official-sec:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px);border-bottom:none;}

  .feature-box{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.8rem;margin:2rem 0;}
  .feature-box h3{font-family:var(--font);font-size:1.25rem;margin-bottom:1rem;color:var(--accent2);}
  .feature-list{list-style:none;margin:0;padding:0;}
  .feature-list li{position:relative;padding-left:1.5rem;margin-bottom:.8rem;color:var(--text);font-size:.95rem;line-height:1.6;}
  .feature-list li::before{content:"✓";position:absolute;left:0;color:var(--accent);font-weight:bold;}

  .usecase-box{background:rgba(255,107,53,.04);border:1px solid rgba(255,107,53,.2);border-radius:var(--radius);padding:1.5rem 1.8rem;margin:2rem 0;}
  .usecase-box h4{font-family:var(--mono);font-size:.82rem;color:var(--accent);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem;}
  .usecase-box p{color:var(--text);font-size:.95rem;margin:0;}
`;

export function renderStackHub() {
  const title = "쓰는 기술 스택 (TECH STACK) | DAVHAVE";
  const description = "DAVHAVE가 실제 프로덕트 개발과 인프라 운영에 활용하는 13개 핵심 기술 스택과 공식 설명 및 공식 가이드입니다.";
  const canonical = "https://davhave.com/stack";

  const items = Object.values(STACK_DATA).map((item) => {
    let badgeClass = "stack-badge-mobile";
    if (item.category === "Web") badgeClass = "stack-badge-web";
    if (item.category === "AI") badgeClass = "stack-badge-ai";
    if (item.category === "Infra") badgeClass = "stack-badge-infra";

    return `
      <a class="stack-card" href="/stack/${item.slug}">
        <div>
          <div class="stack-card-top">
            <span class="stack-badge ${badgeClass}">${item.category}</span>
          </div>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.summary)}</p>
        </div>
        <div class="stack-card-link">
          <span>공식 설명 & 문서 보기</span>
          <span>→</span>
        </div>
      </a>
    `;
  }).join("");

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical })}<style>${STACK_STYLE}</style></head>
<body>
  ${navBar("/", "← 메인으로")}
  <div class="wrap">
    <span class="eyebrow">// tech stack</span>
    <h1>쓰는 <span style="color:var(--accent);">기술</span></h1>
    <p class="desc">${escapeHtml(description)}</p>
    <div class="stack-hub-grid">
      ${items}
    </div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}

export function renderStackDetail(item) {
  const title = `${item.name} (${item.category}) 기술 스택 & 공식 설명 | DAVHAVE`;
  const description = `${item.name}의 공식 특징, 사용 용도 및 공식 문서 링크입니다. ${item.tagline}`;
  const url = `https://davhave.com/stack/${item.slug}`;

  let badgeClass = "stack-badge-mobile";
  if (item.category === "Web") badgeClass = "stack-badge-web";
  if (item.category === "AI") badgeClass = "stack-badge-ai";
  if (item.category === "Infra") badgeClass = "stack-badge-infra";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${item.name} 공식 기술 설명`,
    description: item.summary,
    url,
    about: item.category,
    publisher: { "@type": "Organization", name: "DAVHAVE", url: "https://davhave.com/" },
  };

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical: url, extraJsonLd: jsonLd })}<style>${STACK_STYLE}</style></head>
<body>
  ${navBar("/stack", "← 전체 기술 스택")}
  <div class="wrap">
    <div class="stack-detail-hero">
      <span class="stack-badge ${badgeClass}" style="display:inline-block; margin-bottom:.8rem;">${item.category}</span>
      <h1 style="margin-bottom:.5rem;">${escapeHtml(item.name)}</h1>
      <p style="color:var(--accent2); font-size:1.1rem; font-weight:500;">${escapeHtml(item.tagline)}</p>
    </div>

    <article>
      <h2>공식 설명 (Official Summary)</h2>
      <p style="font-size:1.05rem; line-height:1.75; color:var(--text);">${escapeHtml(item.summary)}</p>

      <div class="official-links">
        <a class="btn-official btn-official-primary" href="${item.officialUrl}" target="_blank" rel="noopener noreferrer">
          🌐 ${escapeHtml(item.name)} 공식 웹사이트 방문 ↗
        </a>
        <a class="btn-official btn-official-sec" href="${item.docsUrl}" target="_blank" rel="noopener noreferrer">
          📚 공식 개발자 문서(Docs) 보러가기 ↗
        </a>
      </div>

      <div class="feature-box">
        <h3>💡 핵심 주요 특징 (Key Features)</h3>
        <ul class="feature-list">
          ${item.features.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
        </ul>
      </div>

      <div class="usecase-box">
        <h4>🎯 DAVHAVE 추천 사용 사례 (Best Use Cases)</h4>
        <p>${escapeHtml(item.useCases)}</p>
      </div>

      <div class="cta-card" style="margin-top:3rem;">
        <h3>🚀 ${escapeHtml(item.name)} 기반 프로덕트 구축 문의</h3>
        <p>DAVHAVE는 ${escapeHtml(item.name)}을(를) 비롯한 최신 모바일, 웹 및 AI 기술 스택으로 고성능 디지털 프로덕트를 제작합니다.</p>
        <a class="cta-btn" href="mailto:useapp.davhave@gmail.com">기술 상담 & 프로젝트 문의 →</a>
      </div>
    </article>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}
