import { head, navBar, escapeHtml } from "./render.js";
import { PHILOSOPHY_DATA } from "./philosophy-data.js";

const PHILOSOPHY_STYLE = `
  .phil-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.8rem;margin-top:2.8rem;}
  .phil-card{display:flex;flex-direction:column;justify-space-between;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:2.2rem;transition:transform .35s var(--ease),border-color .35s var(--ease),box-shadow .35s var(--ease);text-decoration:none;position:relative;overflow:hidden;}
  .phil-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(255,107,53,.08),transparent 70%);opacity:0;transition:opacity .35s var(--ease);pointer-events:none;}
  .phil-card:hover{transform:translateY(-6px);border-color:rgba(255,107,53,.4);box-shadow:0 20px 45px rgba(0,0,0,.45);}
  .phil-card:hover::before{opacity:1;}

  .phil-icon-ring{width:3.2rem;height:3.2rem;border-radius:50%;border:1px solid rgba(255,107,53,.25);background:rgba(255,107,53,.06);display:flex;align-items:center;justify-content:center;margin-bottom:1.4rem;}
  .phil-icon-ring .icon{width:22px;height:22px;stroke:var(--accent);fill:none;}

  .phil-card h3{font-family:var(--font);font-size:1.35rem;font-weight:800;color:var(--text);margin-bottom:.4rem;}
  .phil-card .sub-title{font-family:var(--mono);font-size:.82rem;color:var(--accent2);margin-bottom:1rem;font-weight:500;}
  .phil-card p{color:var(--muted);font-size:.92rem;line-height:1.65;margin-bottom:1.5rem;}
  .phil-card-link{margin-top:auto;font-family:var(--mono);font-size:.82rem;color:var(--accent);display:inline-flex;align-items:center;gap:.4rem;font-weight:600;}
  .phil-card:hover .phil-card-link{color:var(--accent2);gap:.7rem;}

  /* Detail View */
  .phil-detail-hero{margin-bottom:2.5rem;padding-bottom:2rem;border-bottom:1px solid var(--border);}
  .phil-quote{background:rgba(255,107,53,.05);border-left:3px solid var(--accent);border-radius:0 var(--radius) var(--radius) 0;padding:1.4rem 1.8rem;margin:2rem 0;font-size:1.1rem;line-height:1.75;color:var(--text);font-style:italic;}

  .principles-box{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:2rem;margin:2.5rem 0;}
  .principles-box h3{font-family:var(--font);font-size:1.3rem;margin-bottom:1.2rem;color:var(--accent2);}
  .principles-list{list-style:none;margin:0;padding:0;}
  .principles-list li{position:relative;padding-left:1.8rem;margin-bottom:1rem;color:var(--text);font-size:1rem;line-height:1.65;}
  .principles-list li::before{content:"✦";position:absolute;left:0;color:var(--accent);font-size:1.1rem;}

  .phil-nav{display:flex;justify-content:space-between;gap:1rem;margin-top:3.5rem;padding-top:2rem;border-top:1px solid var(--border);}
  .phil-nav a{font-family:var(--mono);font-size:.85rem;color:var(--muted);text-decoration:none;transition:color .25s;}
  .phil-nav a:hover{color:var(--accent);}
`;

export function renderPhilosophyHub() {
  const title = "개발 철학 (PHILOSOPHY) | DAVHAVE";
  const description = "DAVHAVE가 소프트웨어를 만들고 제품을 설계할 때 준수하는 6가지 명확한 개발 철학과 가치입니다.";
  const canonical = "https://davhave.com/philosophy";

  const cards = Object.values(PHILOSOPHY_DATA).map((item) => {
    return `
      <a class="phil-card" href="/philosophy/${item.slug}">
        <div>
          <div class="phil-icon-ring">
            <svg class="icon"><use href="${item.icon}"/></svg>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <div class="sub-title">${escapeHtml(item.subTitle)}</div>
          <p>${escapeHtml(item.summary)}</p>
        </div>
        <div class="phil-card-link">
          <span>상세 철학 읽어보기</span>
          <span>→</span>
        </div>
      </a>
    `;
  }).join("");

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical })}<style>${PHILOSOPHY_STYLE}</style></head>
<body>
  ${navBar("/", "← 메인으로")}
  <div class="wrap">
    <span class="eyebrow">// philosophy & values</span>
    <h1>개발 <span style="color:var(--accent);">철학</span></h1>
    <p class="desc">${escapeHtml(description)}</p>
    <div class="phil-grid">
      ${cards}
    </div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}

export function renderPhilosophyDetail(item) {
  const title = `${item.title} — DAVHAVE 개발 철학`;
  const description = `${item.subTitle}. ${item.summary}`;
  const url = `https://davhave.com/philosophy/${item.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${item.title} - DAVHAVE 개발 철학`,
    description: item.summary,
    url,
    publisher: { "@type": "Organization", name: "DAVHAVE", url: "https://davhave.com/" },
  };

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical: url, extraJsonLd: jsonLd })}<style>${PHILOSOPHY_STYLE}</style></head>
<body>
  ${navBar("/philosophy", "← 전체 철학 목록")}
  <div class="wrap">
    <div class="phil-detail-hero">
      <div class="phil-icon-ring" style="width:4rem; height:4rem;">
        <svg class="icon" style="width:28px; height:28px;"><use href="${item.icon}"/></svg>
      </div>
      <h1 style="margin-bottom:.4rem;">${escapeHtml(item.title)}</h1>
      <p style="color:var(--accent2); font-size:1.15rem; font-weight:500; font-family:var(--mono);">${escapeHtml(item.subTitle)}</p>
    </div>

    <article>
      <div class="phil-quote">
        "${escapeHtml(item.quote)}"
      </div>

      <h2>핵심 비전 (Core Summary)</h2>
      <p style="font-size:1.1rem; line-height:1.8; color:var(--text); white-space:pre-line;">${escapeHtml(item.details)}</p>

      <div class="principles-box">
        <h3>🎯 4대 핵심 실천 원칙 (Core Principles)</h3>
        <ul class="principles-list">
          ${item.principles.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
        </ul>
      </div>

      <div class="cta-card" style="margin-top:3.5rem;">
        <h3>🚀 철학과 가치관에 공감하신다면</h3>
        <p>DAVHAVE는 올바른 철학과 뛰어난 기술력으로 사람들의 삶에 선한 영향력을 줄 수 있는 프로젝트 파트너십을 환영합니다.</p>
        <a class="cta-btn" href="mailto:useapp.davhave@gmail.com">프로젝트 & 협업 문의하기 →</a>
      </div>
    </article>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}
