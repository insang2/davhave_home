import { escapeHtml, head, navBar } from "./render.js";

export const CATEGORIES = {
  ai: { label: "AI", desc: "프롬프트 엔지니어링, LLM 연동, 에이전트 개발" },
  python: { label: "Python", desc: "문법부터 실전 프로젝트까지" },
  java: { label: "Java", desc: "문법, 객체지향, 실무 패턴" },
  mobile: { label: "모바일 개발", desc: "Flutter · React Native · Swift · Kotlin" },
  "software-engineering": { label: "소프트웨어 공학", desc: "요구사항 분석부터 설계·테스트·프로젝트 관리까지, SE 핵심 이론" },
  algorithm: { label: "알고리즘", desc: "자료구조 기초부터 정렬·탐색·DP·탐욕법·백트래킹까지, 핵심 알고리즘 및 문제 해결 기법" },
  "data-structure": { label: "자료구조", desc: "선형 자료구조(리스트·스택·큐)부터 트리의 균형(AVL)·해시 테이블·그래프 알고리즘까지, 파이썬 기반 핵심 자료구조의 이론과 실전 코드" },
  "c-basics": { label: "C 언어 기초", desc: "프로그래밍 입문부터 변수·연산자·제어문·함수·포인터·구조체·파일 입출력·동적 메모리 할당까지, 초보자 눈높이에 맞춘 완벽 C 프로그래밍 가이드" },
  "html5-web": { label: "HTML5 웹 프로그래밍", desc: "웹의 기초부터 HTML5 시맨틱 태그·CSS3 스타일링·자바스크립트 DOM 제어·반응형 웹·HTML5 API까지, 웹 개발 입문자를 위한 실전 가이드" },
  arduino: { label: "아두이노", desc: "마이크로컨트롤러 입문부터 전기전자 기본, 센서·모터 제어, 시리얼/무선 통신, 인터럽트 및 실전 프로젝트까지 아두이노 임베디드 완벽 가이드" },
  database: { label: "데이터베이스", desc: "관계형 모델, SQL 쿼리, ERD 설계, 정규화, 인덱스 아키텍처 및 트랜잭션/동시성 제어" },
  marketing: { label: "디지털 마케팅", desc: "검색엔진 최적화(SEO), 콘텐츠 마케팅, AI 프롬프트 마케팅, 퍼포먼스 광고 및 데이터 분석 실전 가이드" },
};

export const AI_SUBCATEGORIES = {
  claude: { label: "Claude 사용법", desc: "Anthropic Claude 3.5 API, Claude Code CLI, 프롬프트 엔지니어링, 에이전트 구축 가이드", icon: "⚡" },
  codex: { label: "Codex & OpenAI", desc: "OpenAI Codex, ChatGPT API, 데이터 파싱, AI 임베딩 & RAG 파이프라인", icon: "🧠" },
  gemini: { label: "Gemini & Google AI", desc: "Google Gemini 1.5 Pro/Flash API, Google AI Studio, 200만 토큰 멀티모달 가이드", icon: "💎" }
};

export function classifyAiPost(post) {
  const text = ((post.slug || "") + " " + (post.title || "")).toLowerCase();
  if (text.includes("gemini")) return "gemini";
  if (text.includes("codex")) return "codex";
  return "claude";
}

const EDU_STYLE = `
  .cat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.4rem;margin-top:2rem;}
  .cat-card{display:block;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
    padding:1.6rem;transition:transform .25s,border-color .25s;text-decoration:none;}
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
  .search-box{display:flex;gap:.5rem;margin:1.5rem 0;align-items:center;}
  .search-box input{flex:1;max-width:300px;font-family:inherit;font-size:.9rem;padding:.5rem .8rem;border:1px solid var(--border);background:var(--surface);color:var(--text);border-radius:var(--radius);}
  .search-box button{font-family:inherit;font-size:.9rem;padding:.5rem 1rem;border:1px solid var(--accent);background:transparent;color:var(--accent);border-radius:var(--radius);cursor:pointer;}
  .search-box button:hover{background:rgba(79,209,197,.1);}
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

export function renderEducationCategory({ category, subcat = null, posts }) {
  const cat = CATEGORIES[category] || { label: category, desc: "" };
  let displayTitle = cat.label;
  let displayDesc = cat.desc;
  let canonicalUrl = `https://davhave.com/education/${category}`;

  if (category === "ai" && subcat && AI_SUBCATEGORIES[subcat]) {
    const sub = AI_SUBCATEGORIES[subcat];
    displayTitle = `AI — ${sub.label}`;
    displayDesc = sub.desc;
    canonicalUrl = `https://davhave.com/education/ai/${subcat}`;
  }

  let filteredPosts = posts;
  if (category === "ai" && subcat) {
    filteredPosts = posts.filter(p => classifyAiPost(p) === subcat);
  }

  const title = `${displayTitle} | DAVHAVE 교육`;
  const description = displayDesc;

  let subcatSection = "";
  if (category === "ai") {
    subcatSection = `
      <div style="margin: 1.8rem 0 2.5rem;">
        <h3 style="font-size:1.05rem; color:var(--accent2); margin-bottom:.9rem; font-family:var(--mono);">📁 AI 하위 전문 폴더 (Sub-Directories)</h3>
        <div class="cat-grid" style="margin-top:0; grid-template-columns:repeat(auto-fit,minmax(220px,1fr));">
          ${Object.entries(AI_SUBCATEGORIES).map(([key, sub]) => {
            const isSelected = subcat === key;
            const count = posts.filter(p => classifyAiPost(p) === key).length;
            return `
              <a class="cat-card" href="/education/ai/${key}" style="${isSelected ? 'border-color:var(--accent); background:rgba(255,107,53,.08);' : ''}">
                <div style="font-size:1.4rem; margin-bottom:.4rem;">${sub.icon}</div>
                <h3 style="font-size:1.1rem; margin-bottom:.3rem;">${escapeHtml(sub.label)}</h3>
                <p style="font-size:.82rem; margin-bottom:.8rem;">${escapeHtml(sub.desc)}</p>
                <div class="cat-count">${count}개 레슨 전문 수록 →</div>
              </a>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  const items = filteredPosts.length
    ? filteredPosts
        .map(
          (p, i) => {
            const sub = category === "ai" ? classifyAiPost(p) : "";
            const href = category === "ai" ? `/education/ai/${sub}/${escapeHtml(p.slug)}` : `/education/${category}/${escapeHtml(p.slug)}`;
            return `
      <a class="lesson-row" href="${href}" style="text-decoration:none;">
        <span class="lesson-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="lesson-title">${escapeHtml(p.title)}</span>
        ${sub ? `<span style="margin-left:auto; font-family:var(--mono); font-size:.72rem; padding:.15rem .55rem; border-radius:100px; border:1px solid var(--border); color:var(--accent2);">${sub.toUpperCase()}</span>` : ""}
      </a>`;
          }
        )
        .join("")
    : `<div class="empty">아직 등록된 레슨이 없습니다.</div>`;

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({
    title,
    description,
    canonical: canonicalUrl,
    ogType: "website",
  })}<style>${EDU_STYLE}</style></head>
<body>
  ${navBar("/education", "← 교육 메인")}
  <div class="wrap">
    <div class="breadcrumb">
      <a href="/education">교육</a> / 
      <a href="/education/${category}">${escapeHtml(cat.label)}</a>
      ${subcat && AI_SUBCATEGORIES[subcat] ? ` / <a href="/education/ai/${subcat}">${escapeHtml(AI_SUBCATEGORIES[subcat].label)}</a>` : ""}
    </div>
    <span class="eyebrow">// education & ai</span>
    <h1>${escapeHtml(displayTitle)}</h1>
    <p class="desc">${escapeHtml(description)}</p>

    ${subcatSection}

    <div class="search-box">
      <input type="text" id="searchInput" placeholder="레슨 검색..." />
      <button id="searchBtn">검색</button>
    </div>
    <div id="lessonList">${items}</div>
    <script>
      const searchInput = document.getElementById('searchInput');
      const searchBtn = document.getElementById('searchBtn');
      const lessonList = document.getElementById('lessonList');
      async function search() {
        const q = searchInput.value.trim();
        if (!q) {
          location.reload();
          return;
        }
        const res = await fetch('/api/search?q=' + encodeURIComponent(q) + '&kind=education');
        const data = await res.json();
        if (!data.posts.length) {
          lessonList.innerHTML = '<div class="empty">검색 결과가 없습니다.</div>';
          return;
        }
        lessonList.innerHTML = data.posts.map((p, i) => \`
          <a class="lesson-row" href="/education/\${p.category}/\${p.slug}" style="text-decoration:none;">
            <span class="lesson-num">\${String(i + 1).padStart(2, '0')}</span>
            <span class="lesson-title">\${p.title}</span>
          </a>\`).join('');
      }
      searchBtn.addEventListener('click', search);
      searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') search(); });
    </script>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
</body>
</html>`;
}

export function renderLesson({ post, prev, next }) {
  const cat = CATEGORIES[post.category] || { label: post.category };
  const subcat = post.category === "ai" ? classifyAiPost(post) : null;
  const url = subcat 
    ? `https://davhave.com/education/ai/${subcat}/${post.slug}`
    : `https://davhave.com/education/${post.category}/${post.slug}`;
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

  const backUrl = subcat ? `/education/ai/${subcat}` : `/education/${post.category}`;
  const backLabel = subcat && AI_SUBCATEGORIES[subcat] ? AI_SUBCATEGORIES[subcat].label : cat.label;

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical: url, ogImage: post.cover_image_url, extraJsonLd: jsonLd })}<style>${EDU_STYLE}</style></head>
<body>
  ${navBar(backUrl, `← ${escapeHtml(backLabel)}`)}
  <div class="wrap">
    <div class="breadcrumb">
      <a href="/education">교육</a> / 
      <a href="/education/${post.category}">${escapeHtml(cat.label)}</a>
      ${subcat && AI_SUBCATEGORIES[subcat] ? ` / <a href="/education/ai/${subcat}">${escapeHtml(AI_SUBCATEGORIES[subcat].label)}</a>` : ""}
    </div>
    <span class="eyebrow">// education & ai</span>
    <h1>${escapeHtml(post.title)}</h1>
    ${post.cover_image_url ? `<img class="cover" src="${escapeHtml(post.cover_image_url)}" alt="${escapeHtml(post.title)}" />` : ""}
    <div id="toc-placeholder"></div>
    <article id="article-body">${post.content_html || post.content_md || ""}</article>
    
    <div class="cta-card">
      <h3>🎓 DAVHAVE AI & 모바일 개발 마스터링</h3>
      <p>AI 및 마스터 가이드 수강 중 도움이 필요하시거나 사내 AI 교육 및 에이전트 도입 컨설팅이 필요하신가요?</p>
      <a class="cta-btn" href="mailto:useapp.davhave@gmail.com">AI 마스터 문의하기 →</a>
    </div>

    <div class="share-row">
      <span class="copy-url" id="post-url">${url}</span>
      <button class="copy-btn" id="copy-btn">링크 복사</button>
      <a class="share-x-btn" id="share-x" href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}" target="_blank" rel="noopener">X 공유</a>
    </div>

    <div class="lesson-nav">
      <a href="${prev ? (post.category === 'ai' ? `/education/ai/${classifyAiPost(prev)}/${escapeHtml(prev.slug)}` : `/education/${post.category}/${escapeHtml(prev.slug)}`) : "#"}" ${prev ? "" : 'style="visibility:hidden;"'}>
        <span class="dir">← 이전 레슨</span>${prev ? escapeHtml(prev.title) : ""}
      </a>
      <a href="${next ? (post.category === 'ai' ? `/education/ai/${classifyAiPost(next)}/${escapeHtml(next.slug)}` : `/education/${post.category}/${escapeHtml(next.slug)}`) : "#"}" ${next ? "" : 'style="visibility:hidden;"'} style="text-align:right;">
        <span class="dir">다음 레슨 →</span>${next ? escapeHtml(next.title) : ""}
      </a>
    </div>
  </div>
  <footer>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee</footer>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('article table').forEach(tbl => {
        const wrap = document.createElement('div');
        wrap.className = 'table-wrapper';
        tbl.parentNode.insertBefore(wrap, tbl);
        wrap.appendChild(tbl);
      });

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

      const article = document.getElementById('article-body');
      const headings = article.querySelectorAll('h2, h3');
      if (headings.length >= 3) {
        const tocBox = document.createElement('div');
        tocBox.className = 'toc-box';
        let html = '<div class="toc-title">📋 레슨 목차 (Table of Contents)</div><ul class="toc-list">';
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
