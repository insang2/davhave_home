import { head, navBar, escapeHtml } from "./render.js";
import { SERVICES_DATA } from "./services-data.js";

const SERVICES_STYLE = `
  .svc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.8rem;margin-top:2.5rem;}
  .svc-card{display:flex;flex-direction:column;justify-content:space-between;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:2.2rem;transition:transform .35s var(--ease),border-color .35s var(--ease),box-shadow .35s var(--ease);text-decoration:none;position:relative;overflow:hidden;}
  .svc-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(255,107,53,.08),transparent 70%);opacity:0;transition:opacity .35s var(--ease);pointer-events:none;}
  .svc-card:hover{transform:translateY(-6px);border-color:rgba(255,107,53,.4);box-shadow:0 20px 45px rgba(0,0,0,.45);}
  .svc-card:hover::before{opacity:1;}

  .svc-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.2rem;}
  .svc-icon-box{width:3rem;height:3rem;border-radius:14px;display:flex;align-items:center;justify-content:center;background:rgba(255,107,53,.08);border:1px solid rgba(255,107,53,.2);flex:none;}
  .svc-icon-box .icon{width:22px;height:22px;stroke:var(--accent);fill:none;}

  .svc-card h3{font-family:var(--font);font-size:1.35rem;font-weight:800;color:var(--text);margin-bottom:.35rem;}
  .svc-card .sub-title{font-family:var(--mono);font-size:.82rem;color:var(--accent2);margin-bottom:.9rem;font-weight:500;}
  .svc-card p{color:var(--muted);font-size:.92rem;line-height:1.65;margin-bottom:1.4rem;}

  .svc-card-footer{display:flex;align-items:center;justify-content:space-between;padding-top:1.2rem;border-top:1px solid var(--border);margin-top:auto;}
  .svc-card-link{font-family:var(--mono);font-size:.82rem;color:var(--accent);display:inline-flex;align-items:center;gap:.4rem;font-weight:600;}
  .svc-card:hover .svc-card-link{color:var(--accent2);gap:.7rem;}

  /* Detail View */
  .svc-detail-hero{margin-bottom:2.5rem;padding-bottom:2rem;border-bottom:1px solid var(--border);}
  .svc-badge-tag{font-family:var(--mono);font-size:.72rem;letter-spacing:.04em;padding:.25rem .75rem;border-radius:100px;border:1px solid rgba(255,107,53,.3);background:rgba(255,107,53,.1);color:var(--accent);font-weight:600;display:inline-block;margin-bottom:.8rem;}

  .feature-box{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:2rem;margin:2.5rem 0;}
  .feature-box h3{font-family:var(--font);font-size:1.3rem;margin-bottom:1.2rem;color:var(--accent2);}
  .feature-list{list-style:none;margin:0;padding:0;}
  .feature-list li{position:relative;padding-left:1.8rem;margin-bottom:1rem;color:var(--text);font-size:1rem;line-height:1.65;}
  .feature-list li::before{content:"✓";position:absolute;left:0;color:var(--accent);font-weight:bold;font-size:1.1rem;}

  .target-box{background:rgba(79,209,197,.05);border:1px solid rgba(79,209,197,.2);border-radius:var(--radius);padding:1.5rem 1.8rem;margin:2rem 0;}
  .target-box h4{font-family:var(--mono);font-size:.82rem;color:#4fd1c5;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem;}
  .target-box p{color:var(--text);font-size:.98rem;margin:0;}
`;

export function renderServicesHub() {
  const title = "서비스 & 교육 영역 (SERVICES & EDUCATION) | DAVHAVE";
  const description = "DAVHAVE가 제작하는 모바일 앱, 반응형 웹, AI 솔루션, 엣지 백엔드 서비스 및 283개+ 무료 교육 리소스 영역입니다.";
  const canonical = "https://davhave.com/services";

  const cards = Object.values(SERVICES_DATA).map((item) => {
    return `
      <a class="svc-card" href="/services/${item.slug}">
        <div>
          <div class="svc-card-top">
            <div class="svc-icon-box"><svg class="icon"><use href="${item.icon}"/></svg></div>
            <span class="svc-badge-tag">${escapeHtml(item.category)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <div class="sub-title">${escapeHtml(item.subTitle)}</div>
          <p>${escapeHtml(item.summary)}</p>
        </div>
        <div class="svc-card-footer">
          <div class="chips" style="margin:0;">
            ${item.stack.slice(0, 3).map(s => `<span class="chip">${escapeHtml(s)}</span>`).join("")}
          </div>
          <div class="svc-card-link">
            <span>자세히 보기</span>
            <span>→</span>
          </div>
        </div>
      </a>
    `;
  }).join("");

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical })}<style>${SERVICES_STYLE}</style></head>
<body>
  ${navBar("/", "← 메인으로")}
  <div class="wrap">
    <span class="eyebrow">// services & education</span>
    <h1>무엇을 <span style="color:var(--accent);">만들고 나누나요</span></h1>
    <p class="desc">${escapeHtml(description)}</p>
    <div class="svc-grid">
      ${cards}
    </div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}

export function renderServicesDetail(item) {
  const title = `${item.title} — DAVHAVE 서비스 & 교육`;
  const description = `${item.subTitle}. ${item.summary}`;
  const url = `https://davhave.com/services/${item.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.summary,
    url,
    provider: { "@type": "Organization", name: "DAVHAVE", url: "https://davhave.com/" },
  };

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical: url, extraJsonLd: jsonLd })}<style>${SERVICES_STYLE}</style></head>
<body>
  ${navBar("/services", "← 전체 서비스 목록")}
  <div class="wrap">
    <div class="svc-detail-hero">
      <span class="svc-badge-tag">${escapeHtml(item.category)}</span>
      <h1 style="margin-bottom:.4rem;">${escapeHtml(item.title)}</h1>
      <p style="color:var(--accent2); font-size:1.15rem; font-weight:500; font-family:var(--mono);">${escapeHtml(item.subTitle)}</p>
    </div>

    <article>
      <h2>서비스 개요 (Service Overview)</h2>
      <p style="font-size:1.1rem; line-height:1.8; color:var(--text); white-space:pre-line;">${escapeHtml(item.details)}</p>

      <div class="feature-box">
        <h3>💡 주요 개발 및 서빙 기능 (Key Features)</h3>
        <ul class="feature-list">
          ${item.features.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
        </ul>
      </div>

      <div class="target-box">
        <h4>🎯 추천 대상 (Target Audience)</h4>
        <p>${escapeHtml(item.targetAudience)}</p>
      </div>

      <div style="margin:2.5rem 0;">
        <h3 style="font-size:1.1rem; margin-bottom:1rem; color:var(--muted);">활용 기술 스택 (Tech Stack)</h3>
        <div class="chips">
          ${item.stack.map(s => `<span class="chip" style="font-size:.85rem; padding:.4rem 1rem;">${escapeHtml(s)}</span>`).join("")}
        </div>
      </div>

      <div class="cta-card" style="margin-top:3.5rem;">
        <h3>🚀 ${escapeHtml(item.title)} 관련 프로젝트 & 협업 문의</h3>
        <p>DAVHAVE는 맞춤형 모바일 앱, 반응형 웹, AI 연동 구축 문의에 대해 신속하게 상담 및 아키텍처 가이드를 제공해드립니다.</p>
        <a class="cta-btn" href="mailto:useapp.davhave@gmail.com">프로젝트 상담 & 견적 문의하기 →</a>
      </div>
    </article>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}
