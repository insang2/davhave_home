import { escapeHtml, head, navBar } from "./render.js";
import { getProject } from "./projects.js";
import { contentHub } from "./content-links.js";

const STYLE = `
  .breadcrumb{font-family:var(--mono);font-size:.78rem;color:var(--muted);margin-bottom:1rem;}
  .breadcrumb a{color:var(--muted);}
  .breadcrumb a:hover{color:var(--accent);}
  .hub-toc{display:flex;flex-wrap:wrap;gap:.6rem;margin:1.5rem 0 3rem;padding:0;list-style:none;}
  .hub-toc a{font-family:var(--mono);font-size:.8rem;color:var(--accent2);border:1px solid rgba(242,200,121,.3);
    background:rgba(242,200,121,.08);padding:.4rem 1rem;border-radius:100px;}
  .site-section{margin-bottom:3.5rem;padding-top:1rem;border-top:1px solid var(--border);}
  .site-head{display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:.6rem;margin-bottom:.6rem;}
  .site-head h2{font-family:var(--font);font-size:1.4rem;}
  .site-head .site-link{font-family:var(--mono);font-size:.78rem;}
  .site-intro{color:var(--muted);font-size:.92rem;margin-bottom:1.8rem;}
  .link-group h3{font-family:var(--font);font-size:1.05rem;margin:1.6rem 0 .6rem;}
  .link-list{list-style:none;padding:0;margin:0 0 .5rem;}
  .link-list li{padding:.9rem 0;border-bottom:1px solid var(--border);}
  .link-list a{font-weight:600;font-size:.98rem;}
  .link-list p{color:var(--muted);font-size:.88rem;margin-top:.35rem;}
`;

function buildJsonLd(sites) {
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://davhave.com/" },
      { "@type": "ListItem", position: 2, name: "Content", item: "https://davhave.com/content" },
    ],
  };

  const hasPart = sites.flatMap((s) =>
    s.groups.flatMap((g) =>
      g.links.map((l) => ({
        "@type": "WebPage",
        name: l.anchor,
        description: l.description,
        url: l.href,
      }))
    )
  );

  const collectionPage = {
    "@type": "CollectionPage",
    name: "콘텐츠 허브",
    description: "DAVHAVE가 설계·개발한 사이트들의 주요 페이지를 모아 소개하는 콘텐츠 허브.",
    url: "https://davhave.com/content",
    hasPart,
  };

  return { "@context": "https://schema.org", "@graph": [breadcrumb, collectionPage] };
}

export function renderContentHub() {
  const title = "콘텐츠 허브 | DAVHAVE";
  const description = "DAVHAVE가 설계·개발한 사이트들의 주요 페이지와 도구를 모아 소개하는 콘텐츠 허브.";

  const sites = contentHub
    .map((site) => ({ ...site, project: getProject(site.projectSlug) }))
    .filter((site) => site.project);

  const toc = sites
    .map((site) => `<li><a href="#${escapeHtml(site.projectSlug)}">${escapeHtml(site.project.clientName)}</a></li>`)
    .join("");

  const sections = sites
    .map(
      (site) => `
    <section class="site-section" id="${escapeHtml(site.projectSlug)}">
      <div class="site-head">
        <h2>${escapeHtml(site.project.clientName)}</h2>
        <a class="site-link" href="/portfolio/${escapeHtml(site.projectSlug)}">개발 사례 상세 보기 →</a>
      </div>
      <p class="site-intro">${escapeHtml(site.intro)}</p>
      ${site.groups
        .map(
          (g) => `
      <div class="link-group">
        <h3>${escapeHtml(g.label)}</h3>
        <ul class="link-list">
          ${g.links
            .map(
              (l) => `
          <li>
            <a href="${escapeHtml(l.href)}" target="_blank" rel="noopener">${escapeHtml(l.anchor)}</a>
            <p>${escapeHtml(l.description)}</p>
          </li>`
            )
            .join("")}
        </ul>
      </div>`
        )
        .join("")}
    </section>`
    )
    .join("");

  const jsonLd = buildJsonLd(sites);

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({
    title,
    description,
    canonical: "https://davhave.com/content",
    ogType: "website",
    extraJsonLd: jsonLd,
  })}<style>${STYLE}</style></head>
<body>
  ${navBar("/", "← 홈")}
  <div class="wrap">
    <nav class="breadcrumb" aria-label="breadcrumb"><a href="/">홈</a> / 콘텐츠</nav>
    <span class="eyebrow">// content hub</span>
    <h1>콘텐츠 허브</h1>
    <p class="desc">${escapeHtml(description)}</p>
    <ul class="hub-toc">${toc}</ul>
    ${sections}
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}
