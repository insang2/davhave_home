import { escapeHtml, head, navBar } from "./render.js";

const PROJECTS_HUB_STYLE = `
  .hub-head { margin: 2rem 0 3.5rem; text-align: left; }
  .hub-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 2rem; margin-top: 2rem; }
  @media (max-width: 600px) { .hub-grid { grid-template-columns: 1fr; } }

  .pjt-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform .3s var(--ease), border-color .3s var(--ease), box-shadow .3s var(--ease);
    position: relative;
  }
  .pjt-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255,107,53,.45);
    box-shadow: 0 20px 50px rgba(0,0,0,.5), 0 0 30px rgba(255,107,53,.12);
  }
  .pjt-card.featured {
    border-color: rgba(255,107,53,.3);
    background: linear-gradient(180deg, rgba(255,107,53,.04) 0%, var(--surface) 100%);
  }

  .pjt-banner {
    height: 190px;
    background: #1e1a14;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border);
  }
  .pjt-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform .5s var(--ease);
  }
  .pjt-card:hover .pjt-banner img {
    transform: scale(1.06);
  }
  .pjt-badge-live {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(15,13,10,.85);
    backdrop-filter: blur(8px);
    color: #4fd1c5;
    border: 1px solid rgba(79,209,197,.3);
    font-family: var(--mono);
    font-size: .72rem;
    font-weight: 600;
    padding: .3rem .75rem;
    border-radius: 100px;
    display: inline-flex;
    align-items: center;
    gap: .4rem;
  }
  .live-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4fd1c5;
    box-shadow: 0 0 8px #4fd1c5;
  }

  .pjt-body {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .pjt-title {
    font-family: var(--font);
    font-weight: 800;
    font-size: 1.35rem;
    color: var(--text);
    margin-bottom: .35rem;
    letter-spacing: -.01em;
  }
  .pjt-tagline {
    font-family: var(--mono);
    font-size: .82rem;
    color: var(--accent);
    margin-bottom: .85rem;
  }
  .pjt-desc {
    color: var(--muted);
    font-size: .92rem;
    line-height: 1.65;
    margin-bottom: 1.35rem;
    flex-grow: 1;
  }

  .pjt-sublinks {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: .85rem 1.1rem;
    margin-bottom: 1.35rem;
    display: flex;
    flex-direction: column;
    gap: .45rem;
  }
  .pjt-sublinks-title {
    font-family: var(--mono);
    font-size: .72rem;
    color: var(--muted2);
    text-transform: uppercase;
    letter-spacing: .08em;
  }
  .sublink-item {
    font-size: .84rem;
    color: var(--text);
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    transition: color .2s, transform .2s;
    text-decoration: none;
  }
  .sublink-item:hover {
    color: var(--accent2);
    transform: translateX(3px);
  }
  .sublink-item i {
    color: var(--accent);
    font-size: .8rem;
  }

  .pjt-tags {
    display: flex;
    flex-wrap: wrap;
    gap: .45rem;
    margin-bottom: 1.5rem;
  }
  .pjt-tag {
    font-family: var(--mono);
    font-size: .72rem;
    color: var(--accent2);
    background: rgba(242,200,121,.08);
    border: 1px solid rgba(242,200,121,.2);
    padding: .25rem .65rem;
    border-radius: 100px;
  }

  .pjt-actions {
    display: flex;
    gap: .75rem;
    align-items: center;
  }
  .btn-pjt-main {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: #17110a;
    font-family: var(--mono);
    font-weight: 700;
    font-size: .88rem;
    padding: .75rem 1.25rem;
    border-radius: 100px;
    text-decoration: none;
    transition: transform .25s var(--ease), box-shadow .25s var(--ease);
  }
  .btn-pjt-main:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255,107,53,.35);
  }
  .btn-pjt-sub {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .75rem 1.1rem;
    background: rgba(242,237,228,.06);
    border: 1px solid var(--border-strong);
    color: var(--text);
    border-radius: 100px;
    font-family: var(--mono);
    font-size: .85rem;
    text-decoration: none;
    transition: background .2s;
  }
  .btn-pjt-sub:hover {
    background: rgba(242,237,228,.12);
  }

  /* Filter category bar */
  .hub-filter-bar {
    display: flex;
    gap: .6rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }
  .filter-chip {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--muted);
    font-family: var(--mono);
    font-size: .82rem;
    padding: .55rem 1.2rem;
    border-radius: 100px;
    cursor: pointer;
    transition: all .25s var(--ease);
    text-decoration: none;
  }
  .filter-chip.active, .filter-chip:hover {
    background: var(--surface2);
    color: var(--text);
    border-color: var(--accent);
  }
`;

export function renderProjectsHub() {
  const title = "Projects Hub | DAVHAVE — 라이브 프로덕트 & 플랫폼";
  const description = "DAVHAVE가 직접 설계·개발하고 엣지 인프라로 운영 중인 실제 라이브 프로젝트, B2B 솔루션 플랫폼 및 서비스 허브.";
  const canonical = "https://davhave.com/projects";

  const extraJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://davhave.com/projects#webpage",
        "url": "https://davhave.com/projects",
        "name": title,
        "description": description,
        "isPartOf": { "@id": "https://davhave.com/#website" }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "KCT 한국건설트레이딩 실리콘 B2B 플랫폼",
            "url": "https://davhave.com/projects/kct",
            "description": "Dow Chemical 실리콘 6대 공학 계산기 허브, 색상칩 시편관, TDS/MSDS 기술자료 센터"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "일공삼택스 (TAX103)",
            "url": "https://tax103.com",
            "description": "개인·법인·창업 절세 및 원터치 세무 상담 플랫폼"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Daily Positive (데일리 포지티브)",
            "url": "https://davhave.com/portfolio/daily-positive",
            "description": "AI 맞춤 긍정 메시지 & 멘탈 루틴 모바일 앱"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Smart Assistant (스마트 어시스턴트)",
            "url": "https://davhave.com/portfolio/smart-assistant",
            "description": "지능형 음성 인식 및 비서 모바일 애플리케이션"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Tech Education Platform (테크 에듀)",
            "url": "https://davhave.com/education",
            "description": "AI, 파이썬, 자바 등 283개 이상의 무료 코딩 레슨을 제공하는 에듀테크 허브"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Community Hub (커뮤니티 허브)",
            "url": "https://davhave.com/portfolio/community-hub",
            "description": "엣지 기반 고성능 반응형 모바일 웹 커뮤니티"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://davhave.com/projects#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "DAVHAVE Projects 허브는 어떤 프로젝트들을 다루나요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "B2B 엔지니어링 플랫폼(한국건설트레이딩 KCT), 세무 상담 웹서비스(TAX103), Flutter/React Native 모바일 앱(Daily Positive, Smart Assistant), 에듀테크 플랫폼 등 실제 라이브 운영 중인 제품들을 쇼케이스합니다."
            }
          },
          {
            "@type": "Question",
            "name": "KCT 실리콘 플랫폼의 공학 계산기는 어떤 기술로 구현되었나요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dow Chemical 글로벌 표준 및 ASTM C1401, ASTM C1472 공학 기준을 바탕으로 실란트/프라이머 소요량, 풍하중 구조 바이트, 자중 지지, 글루라인 두께 및 열팽창 변위를 실시간 산출하는 클라이언트 엔진으로 구축되었습니다."
            }
          }
        ]
      }
    ]
  };

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  ${head({
    title,
    description,
    canonical,
    ogType: "website",
    extraJsonLd,
  })}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <style>${PROJECTS_HUB_STYLE}</style>
</head>
<body>
  ${navBar("/", "← 홈으로")}
  
  <div class="wrap" style="padding-top: 7rem; padding-bottom: 6rem;">
    <div class="hub-head">
      <span class="eyebrow"><span class="dot"></span> // live projects hub</span>
      <h1 class="h2" style="margin-top: 1rem;">DAVHAVE <span class="ink">Projects</span></h1>
      <p class="section-desc">
        DAVHAVE에서 직접 기획, 아키텍처 설계, 풀스택 개발 및 Cloudflare 글로벌 엣지 인프라로 서빙 중인 라이브 프로덕트 모음입니다.
      </p>
    </div>

    <!-- Filter Buttons -->
    <div class="hub-filter-bar">
      <button class="filter-chip active" onclick="filterProjects('all', this)">전체 프로젝트 (6)</button>
      <button class="filter-chip" onclick="filterProjects('b2b', this)">B2B 솔루션 & 플랫폼</button>
      <button class="filter-chip" onclick="filterProjects('mobile', this)">모바일 앱 & AI</button>
      <button class="filter-chip" onclick="filterProjects('edutech', this)">에듀테크 & 커뮤니티</button>
    </div>

    <!-- Projects Grid -->
    <div class="hub-grid" id="projectsGrid">
      
      <!-- 1. KCT (Featured B2B Platform) -->
      <article class="pjt-card featured" data-cat="b2b">
        <div class="pjt-banner" style="background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%);">
          <div style="text-align:center; padding: 2rem; color: #fff;">
            <div style="font-family:var(--font); font-size: 2.2rem; font-weight: 800; letter-spacing: -.02em;">KCT</div>
            <div style="font-family:var(--mono); font-size: .78rem; color: #38BDF8; letter-spacing: .08em; margin-top: .3rem;">GLOBAL SILICONE PLATFORM</div>
          </div>
          <span class="pjt-badge-live"><span class="live-dot"></span> LIVE SERVICE</span>
        </div>
        <div class="pjt-body">
          <div class="pjt-title">한국건설트레이딩 (KCT)</div>
          <div class="pjt-tagline">프리미엄 인테리어·특수실란트·배터리 B2B 플랫폼</div>
          <p class="pjt-desc">
            Dow Chemical 및 ARDEX SN+급 인테리어 타일 하이진 실란트, 조선 MED, 철도 EN45545, EV 배터리 난연 등 17대 산업군 52개 분야를 포괄하는 종합 B2B 플랫폼.
          </p>

          <!-- Sub Features Fast Access -->
          <div class="pjt-sublinks">
            <span class="pjt-sublinks-title">주요 서브 도구 바로가기</span>
            <a href="/projects/kct/specimens" class="sublink-item" style="color:var(--accent); font-weight:700;">
              <i class="bi bi-box-seam-fill"></i> ASTM D638 / C1401 공학 시편제작 센터 →
            </a>
            <a href="/projects/kct/color-samples" class="sublink-item">
              <i class="bi bi-palette-fill"></i> 색상칩 시편 비교기 & 무료 샘플 요청관 →
            </a>
            <a href="/projects/kct/technical" class="sublink-item">
              <i class="bi bi-file-earmark-pdf-fill"></i> TDS/MSDS/성적서 기술자료 이메일 전송 센터 →
            </a>
            <a href="/projects/kct#calculator" class="sublink-item">
              <i class="bi bi-calculator-fill"></i> Dow 기준 6대 실리콘 공학 계산기 허브 →
            </a>
          </div>

          <div class="pjt-tags">
            <span class="pjt-tag">Edge SSR</span>
            <span class="pjt-tag">ASTM D638</span>
            <span class="pjt-tag">B2B Platform</span>
            <span class="pjt-tag">Color Swatch</span>
            <span class="pjt-tag">Tech Docs</span>
          </div>

          <div class="pjt-actions">
            <a href="/projects/kct" class="btn-pjt-main">
              <span>KCT 플랫폼 입장</span> <span>→</span>
            </a>
            <a href="/portfolio/kconstrade" class="btn-pjt-sub">개발사례</a>
          </div>
        </div>
      </article>

      <!-- 2. TAX103 -->
      <article class="pjt-card" data-cat="b2b">
        <div class="pjt-banner" style="background: linear-gradient(135deg, #1C1917 0%, #44403C 100%);">
          <div style="text-align:center; padding: 2rem; color: #fff;">
            <div style="font-family:var(--font); font-size: 2rem; font-weight: 800;">TAX103</div>
            <div style="font-family:var(--mono); font-size: .78rem; color: #F59E0B; margin-top: .3rem;">일공삼택스 · 권지현 세무사</div>
          </div>
          <span class="pjt-badge-live"><span class="live-dot"></span> LIVE SERVICE</span>
        </div>
        <div class="pjt-body">
          <div class="pjt-title">일공삼택스 (TAX103)</div>
          <div class="pjt-tagline">개인·법인·창업 절세 및 원터치 상담 플랫폼</div>
          <p class="pjt-desc">
            세무 전문가의 신뢰도를 극대화하는 반응형 웹사이트. 카카오톡 실시간 상담 연동, 세금 계산기 및 고객 맞춤형 절세 진단 시스템을 탑재했습니다.
          </p>

          <div class="pjt-tags">
            <span class="pjt-tag">Client Web</span>
            <span class="pjt-tag">Kakao API</span>
            <span class="pjt-tag">Tax Calculator</span>
          </div>

          <div class="pjt-actions">
            <a href="https://tax103.com" target="_blank" rel="noopener" class="btn-pjt-main">
              <span>웹사이트 방문</span> <span>↗</span>
            </a>
            <a href="/portfolio/tax103" class="btn-pjt-sub">사례 상세</a>
          </div>
        </div>
      </article>

      <!-- 3. Daily Positive -->
      <article class="pjt-card" data-cat="mobile">
        <div class="pjt-banner" style="background: linear-gradient(135deg, #431407 0%, #9A3412 100%);">
          <div style="text-align:center; padding: 2rem; color: #fff;">
            <div style="font-family:var(--font); font-size: 1.9rem; font-weight: 800;">Daily Positive</div>
            <div style="font-family:var(--mono); font-size: .78rem; color: #FDBA74; margin-top: .3rem;">AI LIFESTYLE APP</div>
          </div>
          <span class="pjt-badge-live" style="color:#FDBA74; border-color:rgba(251,146,60,.3);"><span class="live-dot" style="background:#FDBA74;"></span> MOBILE APP</span>
        </div>
        <div class="pjt-body">
          <div class="pjt-title">Daily Positive (데일리 포지티브)</div>
          <div class="pjt-tagline">AI 맞춤 긍정 메시지 & 멘탈 루틴 앱</div>
          <p class="pjt-desc">
            사용자의 일상 패턴과 감정 상태에 맞춰 최적의 마인드셋 루틴을 제공하는 모바일 앱. AI 기반 개인화 피드와 오프라인 로컬 데이터 동기화를 지원합니다.
          </p>

          <div class="pjt-tags">
            <span class="pjt-tag">Flutter</span>
            <span class="pjt-tag">Dart</span>
            <span class="pjt-tag">Claude API</span>
            <span class="pjt-tag">SQLite</span>
          </div>

          <div class="pjt-actions">
            <a href="/portfolio/daily-positive" class="btn-pjt-main">
              <span>앱 프로젝트 상세</span> <span>→</span>
            </a>
          </div>
        </div>
      </article>

      <!-- 4. Smart Assistant -->
      <article class="pjt-card" data-cat="mobile">
        <div class="pjt-banner" style="background: linear-gradient(135deg, #1E1B4B 0%, #4338CA 100%);">
          <div style="text-align:center; padding: 2rem; color: #fff;">
            <div style="font-family:var(--font); font-size: 1.9rem; font-weight: 800;">Smart Assistant</div>
            <div style="font-family:var(--mono); font-size: .78rem; color: #A5B4FC; margin-top: .3rem;">AI WORKFLOW AGENT</div>
          </div>
          <span class="pjt-badge-live" style="color:#A5B4FC; border-color:rgba(165,180,252,.3);"><span class="live-dot" style="background:#A5B4FC;"></span> AI SOLUTION</span>
        </div>
        <div class="pjt-body">
          <div class="pjt-title">Smart Assistant (스마트 어시스턴트)</div>
          <div class="pjt-tagline">지능형 일정 관리 & 업무 자동화 AI 비서</div>
          <p class="pjt-desc">
            자연어 기반 일정 등록, 이메일/문서 핵심 요약 및 워크플로우 자동화를 제공하는 에이전틱 AI 솔루션입니다.
          </p>

          <div class="pjt-tags">
            <span class="pjt-tag">Claude API</span>
            <span class="pjt-tag">FastAPI</span>
            <span class="pjt-tag">React Native</span>
          </div>

          <div class="pjt-actions">
            <a href="/portfolio/smart-assistant" class="btn-pjt-main">
              <span>솔루션 상세 보기</span> <span>→</span>
            </a>
          </div>
        </div>
      </article>

      <!-- 5. Education Hub -->
      <article class="pjt-card" data-cat="edutech">
        <div class="pjt-banner" style="background: linear-gradient(135deg, #064E3B 0%, #047857 100%);">
          <div style="text-align:center; padding: 2rem; color: #fff;">
            <div style="font-family:var(--font); font-size: 2rem; font-weight: 800;">Education Hub</div>
            <div style="font-family:var(--mono); font-size: .78rem; color: #6EE7B7; margin-top: .3rem;">283+ FREE DEV LESSONS</div>
          </div>
          <span class="pjt-badge-live"><span class="live-dot"></span> LIVE SERVICE</span>
        </div>
        <div class="pjt-body">
          <div class="pjt-title">DAVHAVE Education Hub</div>
          <div class="pjt-tagline">283개+ 전문 프로그래밍 무료 교육 허브</div>
          <p class="pjt-desc">
            AI 모델링, Python, 자료구조, 알고리즘, 데이터베이스 등 11대 카테고리의 283개 이상 고품질 개발 레슨을 100% 무료로 제공하는 교육 플랫폼입니다.
          </p>

          <div class="pjt-tags">
            <span class="pjt-tag">EduTech</span>
            <span class="pjt-tag">283+ Lessons</span>
            <span class="pjt-tag">D1 DB</span>
            <span class="pjt-tag">SEO 100%</span>
          </div>

          <div class="pjt-actions">
            <a href="/education" class="btn-pjt-main">
              <span>교육 허브 입장</span> <span>→</span>
            </a>
            <a href="/services/education-hub" class="btn-pjt-sub">서비스 소개</a>
          </div>
        </div>
      </article>

      <!-- 6. Community Hub -->
      <article class="pjt-card" data-cat="edutech">
        <div class="pjt-banner" style="background: linear-gradient(135deg, #312E81 0%, #1E1B4B 100%);">
          <div style="text-align:center; padding: 2rem; color: #fff;">
            <div style="font-family:var(--font); font-size: 1.9rem; font-weight: 800;">Community Hub</div>
            <div style="font-family:var(--mono); font-size: .78rem; color: #C7D2FE; margin-top: .3rem;">EDGE WEB COMMUNITY</div>
          </div>
          <span class="pjt-badge-live" style="color:#C7D2FE;"><span class="live-dot" style="background:#C7D2FE;"></span> WEB APP</span>
        </div>
        <div class="pjt-body">
          <div class="pjt-title">Community Hub (커뮤니티 허브)</div>
          <div class="pjt-tagline">엣지 기반 고성능 반응형 모바일 웹 커뮤니티</div>
          <p class="pjt-desc">
            Cloudflare Workers 엣지 서버사이드 렌더링으로 0ms에 가깝게 동작하는 고성능 지식 공유 및 커뮤니케이션 플랫폼입니다.
          </p>

          <div class="pjt-tags">
            <span class="pjt-tag">React</span>
            <span class="pjt-tag">Cloudflare Workers</span>
            <span class="pjt-tag">Edge SSR</span>
          </div>

          <div class="pjt-actions">
            <a href="/portfolio/community-hub" class="btn-pjt-main">
              <span>사례 상세 보기</span> <span>→</span>
            </a>
          </div>
        </div>
      </article>

    </div>
  </div>

  <footer style="border-top:1px solid var(--border); padding:3rem 0; text-align:center; font-family:var(--mono); font-size:.82rem; color:var(--muted);">
    <div class="wrap">
      <div>© ${new Date().getFullYear()} DAVHAVE · Oscar Lee. All rights reserved.</div>
      <div style="margin-top:.6rem; display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap;">
        <a href="/" style="color:var(--text); text-decoration:none;">홈</a>
        <a href="/projects" style="color:var(--accent); text-decoration:none;">Projects 허브</a>
        <a href="/projects/kct" style="color:var(--text); text-decoration:none;">KCT 플랫폼</a>
        <a href="/services" style="color:var(--text); text-decoration:none;">Services</a>
        <a href="/education" style="color:var(--text); text-decoration:none;">Education</a>
        <a href="/blog" style="color:var(--text); text-decoration:none;">Blog</a>
      </div>
    </div>
  </footer>

  <script>
    function filterProjects(cat, btnEl) {
      document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');

      const cards = document.querySelectorAll('.pjt-card');
      cards.forEach(card => {
        const cCat = card.getAttribute('data-cat');
        if (cat === 'all' || cCat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>
</body>
</html>`;
}
