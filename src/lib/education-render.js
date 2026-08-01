import { escapeHtml, head, navBar } from "./render.js";

export const CATEGORIES = {
  ai: { label: "AI", desc: "프롬프트 엔지니어링, LLM 연동, 에이전트 개발" },
  python: { label: "Python", desc: "문법부터 실전 프로젝트까지" },
  java: { label: "Java", desc: "문법, 객체지향, 실무 패턴" },
  mobile: { label: "모바일 개발", desc: "Flutter · React Native · Swift · Kotlin" },
  "software-engineering": { label: "소프트웨어 공학", desc: "요구사항 분석부터 설계·테스트·프로젝트 관리까지, SE 핵심 이론" },
};

const EDU_STYLE = `
  .cat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.4rem;margin-top:2rem;}
  .cat-card{display:block;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
    padding:1.6rem;transition:transform .25s,border-color .25s;}
  .cat-card:hover{transform:translateY(-4px);border-color:var(--border-strong);}
  .cat-card h3{font-size:1.15rem;margin-bottom:.5rem;color:var(--text);}
  .cat-card p{font-size:.86rem;color:var(--muted);margin-bottom:1rem;}
  .cat-count{font-family:var(--mono);font-size:.75rem;color:var(--accent);}
  .lesson-row{display:flex;align-items:baseline;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--border);}
  .lesson-num{font-family:var(--mono);color:var(--muted);font-size:.85rem;min-width:2rem;}
  .lesson-title{font-weight:600;color:var(--text);}
  .lesson-title:hover{color:var(--accent);}
  .breadcrumb{font-family:var(--mono);font-size:.8rem;color:var(--muted);margin-bottom:1rem;}
  .breadcrumb a{color:var(--muted);}
  .breadcrumb a:hover{color:var(--accent);}
  .lesson-nav{display:flex;justify-content:space-between;gap:1rem;margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--border);}
  .lesson-nav a{font-size:.85rem;color:var(--muted);max-width:45%;}
  .lesson-nav a:hover{color:var(--accent);}
  .lesson-nav .dir{display:block;font-family:var(--mono);font-size:.7rem;color:var(--faint,var(--muted));margin-bottom:.2rem;}
`;

export function renderEducationHub(counts) {
  const title = "교육 | DAVHAVE";
  const description = "AI, Python, Java, 모바일 개발 — DAVHAVE가 정리한 실전 학습 콘텐츠.";
  const cards = Object.entries(CATEGORIES)
    .map(
      ([key, cat]) => `
      <a class="cat-card" href="/education/${key}">
        <h3>${escapeHtml(cat.label)}</h3>
        <p>${escapeHtml(cat.desc)}</p>
        <span class="cat-count">${counts[key] || 0}개 레슨</span>
      </a>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical: "https://davhave.com/education", ogType: "website" })}<style>${EDU_STYLE}</style></head>
<body>
  ${navBar("/", "← 홈")}
  <div class="wrap">
    <span class="eyebrow">// education</span>
    <h1>교육</h1>
    <p class="desc">${escapeHtml(description)}</p>
    <div class="cat-grid">${cards}</div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}

export function renderEducationCategory({ category, posts }) {
  const cat = CATEGORIES[category];
  const title = `${cat.label} | DAVHAVE 교육`;
  const description = cat.desc;
  const items = posts.length
    ? posts
        .map(
          (p, i) => `
      <a class="lesson-row" href="/education/${category}/${escapeHtml(p.slug)}" style="text-decoration:none;">
        <span class="lesson-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="lesson-title">${escapeHtml(p.title)}</span>
      </a>`
        )
        .join("")
    : `<div class="empty">아직 등록된 레슨이 없습니다.</div>`;

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({
    title,
    description,
    canonical: `https://davhave.com/education/${category}`,
    ogType: "website",
  })}<style>${EDU_STYLE}</style></head>
<body>
  ${navBar("/education", "← 교육 허브")}
  <div class="wrap">
    <div class="breadcrumb"><a href="/education">교육</a> / ${escapeHtml(cat.label)}</div>
    <span class="eyebrow">// education</span>
    <h1>${escapeHtml(cat.label)}</h1>
    <p class="desc">${escapeHtml(description)}</p>
    <div>${items}</div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}

export function renderLesson({ post, prev, next }) {
  const cat = CATEGORIES[post.category] || { label: post.category };
  const url = `https://davhave.com/education/${post.category}/${post.slug}`;
  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: post.title,
    description,
    url,
    learningResourceType: "lesson",
    about: cat.label,
    provider: { "@type": "Organization", name: "DAVHAVE", url: "https://davhave.com/" },
  };

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical: url, ogImage: post.cover_image_url, extraJsonLd: jsonLd })}<style>${EDU_STYLE}</style></head>
<body>
  ${navBar(`/education/${post.category}`, `← ${escapeHtml(cat.label)}`)}
  <div class="wrap">
    <div class="breadcrumb"><a href="/education">교육</a> / <a href="/education/${post.category}">${escapeHtml(cat.label)}</a></div>
    <span class="eyebrow">// education</span>
    <h1>${escapeHtml(post.title)}</h1>
    ${post.cover_image_url ? `<img class="cover" src="${escapeHtml(post.cover_image_url)}" alt="${escapeHtml(post.title)}" />` : ""}
    <article>${post.content_html}</article>
    <div class="lesson-nav">
      <a href="${prev ? `/education/${post.category}/${escapeHtml(prev.slug)}` : "#"}" ${prev ? "" : 'style="visibility:hidden;"'}>
        <span class="dir">← 이전</span>${prev ? escapeHtml(prev.title) : ""}
      </a>
      <a href="${next ? `/education/${post.category}/${escapeHtml(next.slug)}` : "#"}" ${next ? "" : 'style="visibility:hidden;"'} style="text-align:right;">
        <span class="dir">다음 →</span>${next ? escapeHtml(next.title) : ""}
      </a>
    </div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}
