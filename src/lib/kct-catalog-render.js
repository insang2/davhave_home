// KCT 디지털 카탈로그 (iPad 최적화) Renderer
export function renderKctCatalogPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>KCT 디지털 제품 카탈로그 | 17대 산업군 52종 실리콘·실란트 인터랙티브 브로슈어</title>
  <meta name="description" content="KCT 한국건설트레이딩의 17대 산업군 52종 실리콘·실란트 제품을 아이패드 최적화 인터랙티브 화면으로 탐색하세요. 제품별 기능, 용도, 성능, 특징을 카드 넘김 방식으로 확인하고 바로 견적을 문의할 수 있습니다." />
  <meta name="keywords" content="KCT 디지털 카탈로그, 실리콘 제품 카탈로그, 실란트 카탈로그, 아이패드 카탈로그, Dow 실리콘, 건축 실란트, 인터랙티브 브로슈어" />

  <link rel="canonical" href="https://davhave.com/projects/kct/catalog" />
  <link rel="icon" href="https://kconstrade.com/assets/img/favicon.ico" type="image/x-icon" />
  <meta property="og:title" content="KCT 디지털 제품 카탈로그 | 17대 산업군 52종 실리콘·실란트 인터랙티브 브로슈어" />
  <meta property="og:description" content="아이패드 최적화 인터랙티브 화면으로 탐색하는 KCT 17대 산업군 52종 실리콘·실란트 제품 디지털 카탈로그." />
  <meta property="og:image" content="https://kconstrade.com/assets/img/og-image.png" />
  <meta property="og:url" content="https://davhave.com/projects/kct/catalog" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

  <style>
    :root {
      --bg: #05060C;
      --bg-elev: #0A0D1A;
      --panel: rgba(255,255,255,0.045);
      --panel-strong: rgba(255,255,255,0.08);
      --border: rgba(255,255,255,0.10);
      --border-strong: rgba(255,255,255,0.22);
      --text: #E7EAF5;
      --text-dim: rgba(231,234,245,0.62);
      --text-faint: rgba(231,234,245,0.38);
      --cyan: #22D3EE;
      --violet: #A78BFA;
      --white: #FFFFFF;
      --font-kr: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      --font-en: 'Space Grotesk', 'Pretendard', sans-serif;
      --radius: 20px;
      --radius-sm: 12px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
    html, body { height: 100%; overscroll-behavior: none; }
    body {
      font-family: var(--font-kr);
      color: var(--text);
      background: var(--bg);
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
      overflow: hidden;
      touch-action: pan-y;
    }
    a { text-decoration: none; color: inherit; }
    ul { list-style: none; }
    img { max-width: 100%; display: block; }
    button { font-family: inherit; }

    .bg-field {
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background:
        radial-gradient(900px 500px at 12% -10%, rgba(34,211,238,0.14), transparent 60%),
        radial-gradient(900px 600px at 110% 10%, rgba(167,139,250,0.14), transparent 55%),
        linear-gradient(180deg, #05060C 0%, #080A14 60%, #05060C 100%);
    }
    .bg-grid {
      position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.35;
      background-image:
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
      background-size: 42px 42px;
      mask-image: radial-gradient(1200px 700px at 50% 0%, #000 40%, transparent 85%);
    }

    .app-shell { position: relative; z-index: 1; height: 100vh; height: 100dvh; display: flex; flex-direction: column; }

    .top-strip {
      display: flex; align-items: center; justify-content: space-between;
      padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--border);
      background: rgba(5,6,12,0.75); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      flex-shrink: 0;
    }
    .brand-mini { display: flex; align-items: center; gap: 0.6rem; font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; color: var(--white); }
    .brand-mini .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 12px 2px var(--cyan); }
    .brand-mini small { font-family: var(--font-kr); font-weight: 500; color: var(--text-dim); font-size: 0.78rem; margin-left: 0.3rem; }
    .top-actions { display: flex; align-items: center; gap: 0.6rem; }
    .btn-ghost { display: inline-flex; align-items: center; gap: 0.4rem; background: var(--panel); border: 1px solid var(--border); color: var(--text); font-size: 0.82rem; font-weight: 600; padding: 0.55rem 1rem; border-radius: 50px; min-height: 40px; transition: all 0.2s; }
    .btn-ghost:active, .btn-ghost:hover { background: var(--panel-strong); border-color: var(--border-strong); }
    .btn-glow { display: inline-flex; align-items: center; gap: 0.4rem; background: linear-gradient(135deg, var(--cyan), #0EA5B8); color: #04141A; font-weight: 700; font-size: 0.82rem; padding: 0.55rem 1.1rem; border-radius: 50px; min-height: 40px; border: none; box-shadow: 0 0 22px rgba(34,211,238,0.35); transition: transform 0.2s; }
    .btn-glow:active { transform: scale(0.97); }

    .hero-strip { padding: 1.1rem 1.25rem 0.3rem; flex-shrink: 0; }
    .hero-strip .eyebrow { display: inline-flex; align-items: center; gap: 0.4rem; font-family: var(--font-en); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; color: var(--cyan); text-transform: uppercase; }
    .hero-strip h1 { font-size: clamp(1.25rem, 2.4vw, 1.7rem); font-weight: 800; margin-top: 0.35rem; letter-spacing: -0.01em; }
    .hero-strip p { font-size: 0.86rem; color: var(--text-dim); margin-top: 0.3rem; max-width: 680px; }

    .main-area { flex: 1; min-height: 0; display: flex; overflow: hidden; }

    /* Category rail - landscape iPad default */
    .cat-rail { width: 128px; flex-shrink: 0; border-right: 1px solid var(--border); padding: 1rem 0.65rem; display: flex; flex-direction: column; gap: 0.5rem; overflow-y: auto; -webkit-overflow-scrolling: touch; }
    .cat-btn { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem 0.4rem; border-radius: var(--radius-sm); background: transparent; border: 1px solid transparent; color: var(--text-dim); cursor: pointer; min-height: 72px; transition: all 0.2s; text-align: center; }
    .cat-btn i { font-size: 1.25rem; }
    .cat-btn span { font-size: 0.68rem; font-weight: 700; line-height: 1.25; }
    .cat-btn.active { background: var(--panel-strong); border-color: var(--border-strong); color: var(--white); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04); }
    .cat-btn .count { font-family: var(--font-en); font-size: 0.62rem; color: var(--text-faint); }
    .cat-btn.active .count { color: var(--cyan); }

    /* Horizontal rail for portrait */
    .cat-rail-h { display: none; }

    .stage { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden; }
    .stage-header { display: flex; align-items: center; justify-content: space-between; padding: 0.9rem 1.25rem; flex-shrink: 0; }
    .stage-header h2 { font-size: 1.05rem; font-weight: 800; display: flex; align-items: center; gap: 0.55rem; }
    .stage-header .cat-dot { width: 10px; height: 10px; border-radius: 3px; }
    .stage-count { font-family: var(--font-en); font-size: 0.78rem; color: var(--text-faint); }

    .card-grid { flex: 1; overflow-y: auto; -webkit-overflow-scrolling: touch; padding: 0.25rem 1.25rem 2rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; align-content: start; }

    .p-card { background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; cursor: pointer; transition: all 0.25s; display: flex; flex-direction: column; -webkit-tap-highlight-color: transparent; }
    .p-card:active { transform: scale(0.98); }
    .p-card:hover { border-color: var(--border-strong); background: var(--panel-strong); transform: translateY(-2px); }
    .p-card .img-wrap { position: relative; width: 100%; height: 0; padding-bottom: 75%; overflow: hidden; background: #0C0F1C; flex-shrink: 0; }
    .p-card .img-wrap img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.92; }
    .p-card .cat-chip { position: absolute; top: 0.6rem; left: 0.6rem; font-family: var(--font-en); font-size: 0.6rem; font-weight: 700; letter-spacing: 0.04em; padding: 0.25rem 0.55rem; border-radius: 50px; backdrop-filter: blur(6px); background: rgba(5,6,12,0.55); border: 1px solid rgba(255,255,255,0.18); }
    .p-card .body { padding: 0.85rem 0.95rem 1rem; display: flex; flex-direction: column; gap: 0.3rem; flex: 1; }
    .p-card h3 { font-size: 0.88rem; font-weight: 700; line-height: 1.35; }
    .p-card .sub { font-family: var(--font-en); font-size: 0.66rem; color: var(--text-faint); }
    .p-card .tap-hint { margin-top: auto; display: flex; align-items: center; gap: 0.3rem; font-size: 0.72rem; color: var(--cyan); font-weight: 600; }

    /* Detail overlay — full-screen "catalog spread" */
    .detail-overlay { position: fixed; inset: 0; z-index: 50; background: rgba(5,6,12,0.88); backdrop-filter: blur(10px); display: none; flex-direction: column; }
    .detail-overlay.open { display: flex; }
    .detail-topbar { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; flex-shrink: 0; }
    .detail-page-counter { font-family: var(--font-en); font-size: 0.78rem; color: var(--text-faint); }
    .btn-close { width: 40px; height: 40px; border-radius: 50%; background: var(--panel); border: 1px solid var(--border); color: var(--text); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }

    .detail-body { flex: 1; min-height: 0; display: flex; overflow: hidden; }
    .detail-visual { flex: 0 0 44%; position: relative; overflow: hidden; background: #0C0F1C; }
    .detail-visual img { width: 100%; height: 100%; object-fit: cover; }
    .detail-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent 60%, rgba(5,6,12,0.65) 100%); }
    .detail-visual .badge-float { position: absolute; top: 1.25rem; left: 1.25rem; z-index: 2; font-family: var(--font-en); font-size: 0.72rem; font-weight: 700; padding: 0.4rem 0.85rem; border-radius: 50px; backdrop-filter: blur(6px); background: rgba(5,6,12,0.55); border: 1px solid rgba(255,255,255,0.25); }

    .detail-info { flex: 1; min-width: 0; overflow-y: auto; -webkit-overflow-scrolling: touch; padding: 2rem 2.5rem 7rem; }
    .detail-info .d-eyebrow { font-family: var(--font-en); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
    .detail-info h2 { font-size: clamp(1.4rem, 2.6vw, 2rem); font-weight: 800; margin-top: 0.4rem; letter-spacing: -0.01em; }
    .detail-info .d-subtitle { font-family: var(--font-en); font-size: 0.85rem; color: var(--text-dim); margin-top: 0.3rem; }

    .spec-grid { margin-top: 1.75rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem; }
    .spec-box { background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1rem 1.15rem; }
    .spec-box.full { grid-column: 1 / -1; }
    .spec-box .s-label { display: flex; align-items: center; gap: 0.4rem; font-size: 0.72rem; font-weight: 700; color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.4rem; }
    .spec-box .s-val { font-size: 0.92rem; font-weight: 600; line-height: 1.5; color: var(--text); }

    .detail-cta { margin-top: 2rem; display: flex; gap: 0.75rem; flex-wrap: wrap; }

    .nav-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 52px; height: 52px; border-radius: 50%; background: var(--panel); border: 1px solid var(--border-strong); color: var(--white); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; z-index: 5; backdrop-filter: blur(8px); }
    .nav-arrow:active { transform: translateY(-50%) scale(0.92); }
    .nav-prev { left: 1rem; }
    .nav-next { right: 1rem; }

    .bottom-bar { flex-shrink: 0; display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 0.85rem; border-top: 1px solid var(--border); background: rgba(5,6,12,0.7); }
    .progress-track { width: min(60%, 420px); height: 4px; border-radius: 2px; background: rgba(255,255,255,0.1); overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, var(--cyan), var(--violet)); transition: width 0.3s; }

    /* ===== iPad landscape (1024–1366) ===== */
    @media (min-width: 1024px) {
      .card-grid { grid-template-columns: repeat(4, 1fr); }
    }

    /* ===== iPad portrait / narrower (≤ 900px) ===== */
    @media (max-width: 900px) {
      .cat-rail { display: none; }
      .cat-rail-h { display: flex; gap: 0.6rem; padding: 0 1.25rem 0.9rem; overflow-x: auto; -webkit-overflow-scrolling: touch; flex-shrink: 0; }
      .cat-rail-h .cat-chip-btn { flex-shrink: 0; display: flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1rem; border-radius: 50px; background: var(--panel); border: 1px solid var(--border); color: var(--text-dim); font-size: 0.8rem; font-weight: 700; min-height: 42px; }
      .cat-rail-h .cat-chip-btn.active { background: var(--panel-strong); border-color: var(--border-strong); color: var(--white); }
      .card-grid { grid-template-columns: repeat(2, 1fr); padding-bottom: 1.25rem; }
      .detail-body { flex-direction: column; }
      .detail-visual { flex: 0 0 38%; }
      .detail-info { padding: 1.5rem 1.4rem 6rem; }
      .spec-grid { grid-template-columns: 1fr; }
      .nav-arrow { width: 44px; height: 44px; font-size: 1.1rem; }
    }

    @media (max-width: 600px) {
      .card-grid { grid-template-columns: repeat(2, 1fr); gap: 0.7rem; padding: 0.25rem 1rem 1.5rem; }
      .top-strip { padding: 0.7rem 1rem; }
      .hero-strip { padding: 0.9rem 1rem 0.2rem; }
      .stage-header { padding: 0.7rem 1rem; }
      .detail-info { padding: 1.25rem 1.1rem 6rem; }
    }

    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
  </style>
</head>
<body>

  <div class="bg-field"></div>
  <div class="bg-grid"></div>

  <div class="app-shell">
    <div class="top-strip">
      <div class="brand-mini">
        <span class="dot"></span> KCT <small>디지털 카탈로그</small>
      </div>
      <div class="top-actions">
        <a href="/projects/kct" class="btn-ghost"><i class="bi bi-arrow-left"></i> KCT 포털</a>
        <a href="/projects/kct#b2b-form" class="btn-glow"><i class="bi bi-send-fill"></i> 견적요청</a>
      </div>
    </div>

    <div class="hero-strip">
      <span class="eyebrow"><i class="bi bi-grid-3x3-gap-fill"></i> Interactive Digital Catalog</span>
      <h1>17대 산업군 52종 실리콘·실란트 디지털 카탈로그</h1>
      <p>카테고리를 선택하고 제품 카드를 탭하면 기능·용도·성능·특징을 한 화면에서 확인할 수 있습니다. 아이패드 가로/세로 화면에 최적화되어 있습니다.</p>
    </div>

    <div class="cat-rail-h" id="catRailH"></div>

    <div class="main-area">
      <nav class="cat-rail" id="catRail"></nav>

      <div class="stage">
        <div class="stage-header">
          <h2><span class="cat-dot" id="stageDot"></span> <span id="stageTitle">전체 제품</span></h2>
          <span class="stage-count"><strong id="stageCount">52</strong>종</span>
        </div>
        <div class="card-grid" id="cardGrid"></div>
      </div>
    </div>
  </div>

  <div class="detail-overlay" id="detailOverlay">
    <div class="detail-topbar">
      <span class="detail-page-counter"><span id="detailIdx">1</span> / <span id="detailTotal">52</span></span>
      <button class="btn-close" onclick="closeDetail()" aria-label="닫기"><i class="bi bi-x-lg"></i></button>
    </div>
    <div class="detail-body" id="detailBody">
      <button class="nav-arrow nav-prev" onclick="navDetail(-1)" aria-label="이전 제품"><i class="bi bi-chevron-left"></i></button>
      <div class="detail-visual">
        <span class="badge-float" id="detailBadge"></span>
        <img id="detailImg" src="" alt="" />
      </div>
      <div class="detail-info">
        <span class="d-eyebrow" id="detailEyebrow" style="color:var(--cyan);">CATEGORY</span>
        <h2 id="detailTitle"></h2>
        <div class="d-subtitle" id="detailSubtitle"></div>

        <div class="spec-grid">
          <div class="spec-box full">
            <div class="s-label"><i class="bi bi-lightning-charge-fill"></i> 기능 (Function)</div>
            <div class="s-val" id="detailFunc"></div>
          </div>
          <div class="spec-box">
            <div class="s-label"><i class="bi bi-bar-chart-fill"></i> <span id="detailPerfLabel">성능</span></div>
            <div class="s-val" id="detailPerf"></div>
          </div>
          <div class="spec-box">
            <div class="s-label"><i class="bi bi-gem"></i> 특징 / 주요 제품</div>
            <div class="s-val" id="detailFeature"></div>
          </div>
          <div class="spec-box full">
            <div class="s-label"><i class="bi bi-geo-alt-fill"></i> 용도 (적용 부위)</div>
            <div class="s-val" id="detailUse"></div>
          </div>
        </div>

        <div class="detail-cta">
          <a class="btn-glow" id="detailQuoteLink" href="#"><i class="bi bi-send-fill"></i> 이 제품 견적 문의</a>
          <a class="btn-ghost" href="/projects/kct/technical"><i class="bi bi-file-earmark-pdf"></i> TDS/MSDS 자료 센터</a>
        </div>
      </div>
      <button class="nav-arrow nav-next" onclick="navDetail(1)" aria-label="다음 제품"><i class="bi bi-chevron-right"></i></button>
    </div>
    <div class="bottom-bar">
      <div class="progress-track"><div class="progress-fill" id="progressFill" style="width:0%;"></div></div>
    </div>
  </div>

  <script>
    const PRODUCTS = [{"id":"P01","cat":"specialty-silicone","title":"조선·해양 선박용 실란트","subtitle":"Marine & Offshore Sealant (MED/IMO)","badge":"특수","img":"https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80","func":"염분 해수, 강자외선, 선체 비틀림 진동을 견디며 선박 데크 코킹 및 수밀 해치를 밀봉하는 국제선박용품(MED/IMO) 형식승인 실란트.","perfLabel":"인증 규격","perf":"MED / IMO 해사기구 난연 및 수밀 형식승인","feature":"Dow DOWSIL™ Marine / Marine Polyurethane","use":"선박 티크 데크 줄눈, 수밀 해치 커버, 선체 글레이징"},{"id":"P02","cat":"specialty-silicone","title":"철도 & 고속차량용 실란트","subtitle":"Railway & Rolling Stock Sealant (EN 45545-2)","badge":"특수","img":"https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80","func":"KTX/SRT 고속철도 및 지하철 전동차의 창문 직접 접합(Direct Glazing) 및 유럽 철도 화재안전 규격을 충족하는 고탄성 난연 실란트.","perfLabel":"화재안전 등급","perf":"EN 45545-2 HL3 (최고 위험등급 인증)","feature":"High Modulus Rail Silicone / MS Polymer","use":"고속철 전면 유리 접합, 승강문 기밀 씰, 지붕 공조부"},{"id":"P03","cat":"specialty-silicone","title":"반도체 FAB & 제약 클린룸 실란트","subtitle":"Cleanroom & Pharma Outgas-Free Sealant","badge":"특수","img":"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80","func":"가소제 및 저분자 실록산 방출이 전혀 없어 초미세 웨이퍼 오염을 막고, VHP(과산화수소 훈증 소독)에 내성을 지닌 초저VOC 무기 실란트.","perfLabel":"청정도 대응","perf":"ISO 14644-1 Class 1, Zero-Outgassing","feature":"Ultra-pure Cleanroom Neutral Silicone","use":"반도체 FAB 패널 조인트, 제약/바이오 무균실 벽체 줄눈"},{"id":"P04","cat":"specialty-silicone","title":"수소 모빌리티 & 연료전지 실란트","subtitle":"Hydrogen Fuel Cell & Stack Gasket","badge":"특수","img":"https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80","func":"가장 미세한 수소(H2) 기체의 극미세 누출을 완벽 차단하고 강산성 전해질 환경을 견디는 연료전지 스택 분리판 전용 액상 실리콘 가스켓.","perfLabel":"기밀 성능","perf":"수소 투과 계수 최소화, 내열·내산성","feature":"Liquid Silicone Rubber (LSR) for Bipolar Plate","use":"FCEV 수소차 스택 분리판 가스켓, 수소 배관 씰링"},{"id":"P05","cat":"specialty-silicone","title":"BIPV(건물일체형태양광) & 스마트 글래스 실란트","subtitle":"BIPV & Smart Electrochromic Glazing Sealant","badge":"특수","img":"https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80","func":"건물일체형 태양광(BIPV) 파사드 및 스마트 틴팅 글래스(PDLC/EC)의 전극 부식을 막고 30년 이상의 옥외 절연 기밀을 유지하는 특수 실란트.","perfLabel":"절연 내력","perf":"> 20 kV/mm, 전극 부식 방지 중성 배합","feature":"Solar BIPV Edge Sealant & Potting","use":"BIPV 모듈 테두리, 스마트 글래스 전극 엣지 실링"},{"id":"P06","cat":"specialty-silicone","title":"극저온 콜드체인 & 냉동물류창고 실란트","subtitle":"Deep Freeze & Cold Storage Joint Sealant","badge":"특수","img":"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80","func":"영하 -40℃ ~ -60℃의 급속 냉동 물류 환경에서도 경화 균열 없이 100% 탄성을 유지하여 냉기 유출과 결로를 차단하는 저온 전용 실란트.","perfLabel":"사용 온도 범위","perf":"-60℃ ~ 150℃ (극저온 탄성 유지)","feature":"Low-temperature Elastic Silicone Sealant","use":"냉동/냉장창고 샌드위치 패널 조인트, 급속동결실 바닥"},{"id":"P07","cat":"specialty-silicone","title":"친환경 목조 건축 & CLT 패널 실란트","subtitle":"Mass Timber & CLT Construction Sealant","badge":"특수","img":"https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80","func":"목재의 습도 팽창·수축을 유연하게 추종하며 목재 표면에 오일 오염을 남기지 않고 수증기 통기성(Breathable)을 제공하는 친환경 실란트.","perfLabel":"통기성/비오염","perf":"수증기 투과성 우수, 목재 비오염 무변색","feature":"Breathable Hybrid Polymer / Timber Sealant","use":"대단면 CLT 목조 빌딩 접합부, 중목구조 기둥/보 줄눈"},{"id":"P08","cat":"specialty-silicone","title":"방산·항공우주 초저휘발 실란트","subtitle":"Aerospace & Defense Space-Grade Low Outgassing","badge":"특수","img":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80","func":"우주 진공 환경에서 휘발성 응축 물질이 방출되지 않아 광학 센서 오염을 방지하는 NASA 규격 우주항공·방위산업 전용 초순도 실란트.","perfLabel":"핵심 특성","perf":"Space-Grade Ultra-Low Outgassing RTV Silicone","feature":"Space-Grade Ultra-Low Outgassing RTV Silicone","use":"인공위성 광학 페이로드 마운팅, 군용 레이더 돔 실링"},{"id":"P09","cat":"ess-ev","title":"EV 배터리 팩용 UL 94 V-0 난연 실란트","subtitle":"UL-94 V0 Flame Retardant Battery Pack Sealant","badge":"ESS","img":"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80","func":"화재 시 10초 이내 자기소화 및 보호 차르(Char) 층을 형성하여 열폭주 전파를 차단하고 IP67/IP68 방수를 완벽 보장하는 1액형/2액형 난연 RTV 실리콘.","perfLabel":"난연 등급","perf":"UL 94 V-0 인증 (화염 방울 없음)","feature":"Dow DOWSIL™ / KCT EV-Guard 94V0","use":"배터리 팩 상하부 커버 하우징 실링, 부스바 절연"},{"id":"P10","cat":"ess-ev","title":"배터리 열관리용 방열 갭필러 & 방열 겔","subtitle":"Thermal Conductive Gap Filler & Gel","badge":"ESS","img":"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80","func":"배터리 셀과 냉각 플레이트(Chiller Plate) 사이의 공극을 완벽 충진하여 초고속 열전도를 실현하고 셀 수명을 연장하는 액상 방열 갭필러.","perfLabel":"열전도율","perf":"1.5 ~ 4.0 W/m·K (고열전도 세라믹 필러)","feature":"2-Part Silicone Thermal Gap Filler","use":"셀-냉각판 사이 인터페이스, BMS 보드 방열"},{"id":"P11","cat":"ess-ev","title":"셀-투-팩(CTP) 구조용 접착제","subtitle":"Cell-to-Pack (CTP) Structural Adhesive","badge":"ESS","img":"https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80","func":"배터리 셀과 트레이를 모듈 없이 직접 영구 결합하여 에너지 밀도를 극대화하고 주행 진동 충격을 흡수하는 고강도 탄성 접착제.","perfLabel":"인장 전단 강도","perf":"> 8.0 MPa, 우수한 피로 내구성","feature":"High Modulus Structural Silicone / Epoxy","use":"원통형/각형 셀 하우징 고정, CTP/CTC 팩 접착"},{"id":"P12","cat":"ess-ev","title":"난연 실리콘 폼 & 스펀지 가스켓","subtitle":"Flame Retardant Silicone Foam & Gasket","badge":"ESS","img":"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80","func":"배터리 셀 충·방전 팽창(Swelling)을 완벽 흡수하고 셀 간 화염 전이를 물리적으로 격리하는 초경량 난연 실리콘 폼.","perfLabel":"핵심 특성","perf":"Low-density Silicone Foam Sheet","feature":"Low-density Silicone Foam Sheet","use":"셀 간 단열 쿠션 패드, 배터리 팩 엔클로저 가스켓"},{"id":"P13","cat":"ess-ev","title":"대용량 ESS용 침지식 실리콘 쿨런트 & 씰","subtitle":"Immersion Silicone Coolant & Seal for ESS","badge":"ESS","img":"https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80","func":"대용량 컨테이너형 ESS 랙의 액침 냉각(Immersion Cooling)에 최적화된 초저점도 무독성 절연 실리콘 유체 및 내화학 침지 씰링.","perfLabel":"절연 파괴 전압","perf":"> 40 kV/2.5mm, 불연성","feature":"Dielectric Immersion Coolant & FVMQ Seal","use":"ESS 배터리 랙 직접 침지 냉각, 냉매 배관 씰링"},{"id":"P14","cat":"ess-ev","title":"배터리 모듈 내화 단열시트 & 절연 테이프","subtitle":"Battery Thermal Barrier Sheet & PI Tape","badge":"ESS","img":"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80","func":"1,000℃ 이상의 화염 제트 분사에도 관통되지 않는 세라믹/실리콘 복합 단열시트 및 고전압 배터리 절연 테이프.","perfLabel":"내열 온도","perf":"최대 1,200℃ 순간 화염 저항","feature":"Ceramic-Silicone Barrier Sheet, PI Tape","use":"배터리 팩 상부 방화 시트, 모듈 층간 방화벽"},{"id":"P15","cat":"electronics","title":"항공/우주용 실리콘","subtitle":"Silicone for Aerospace","badge":"전자","img":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80","func":"극한의 고온·저온 및 방사선, 진공 환경을 견디는 항공우주 및 위성 부품 전용 특수 실링·포팅재.","perfLabel":"핵심 특성","perf":"극저온/초고온 안정성 (-100℃ ~ 300℃)","feature":"Dow / KCC 특수 항공 실리콘","use":"인공위성 전자 모듈, 항공기 엔진 실링, 센서 포팅"},{"id":"P16","cat":"electronics","title":"통신장비용 실리콘","subtitle":"Silicones for Telecommunication","badge":"전자","img":"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80","func":"5G/6G 기지국 및 중계기의 고발열 해소, 수분 차단 및 전자기파 간섭(EMI) 차폐 실링 솔루션.","perfLabel":"핵심 특성","perf":"고방열 열전도율 (Thermal Conductivity)","feature":"방열 겔(Gel), 방열 그리스, RTV 실란트","use":"5G 안테나 모듈, 통신 중계기 케이스 방수 실링"},{"id":"P17","cat":"electronics","title":"자동차 전장용 실리콘","subtitle":"Automotive Electronics Silicone","badge":"전자","img":"https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80","func":"전기차 배터리 팩, 인버터, 자율주행 센서(LiDAR/Radar)의 내진동 접착 및 방열 포팅.","perfLabel":"핵심 특성","perf":"난연 UL 94 V-0 인증, 절연 내력 우수","feature":"Dow DOWSIL™ 2액형 방열 포팅재","use":"EV 배터리 모듈 실링, ECU 케이스 접착"},{"id":"P18","cat":"electronics","title":"가전제품용 실리콘","subtitle":"Home Appliances Silicone","badge":"전자","img":"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80","func":"세탁기, 냉장고, 식기세척기, 오븐 등 백색 가전의 고내열 가스켓 및 방수 실링 접착제.","perfLabel":"핵심 특성","perf":"FDA 식품접촉 안전 등급, 무독성 무취","feature":"LSR 사출 실리콘, RTV 가스켓","use":"스팀오븐 도어 실링, 세탁기 드럼 댐퍼, 냉장고 도어"},{"id":"P19","cat":"electronics","title":"반도체용 실리콘","subtitle":"Silicones for Semiconductor","badge":"전자","img":"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80","func":"초미세 반도체 패키징, 다이 캐리어, 웨이퍼 이송용 초순도 실리콘 엘라스토머 및 겔.","perfLabel":"핵심 특성","perf":"초저이온 불순물, 아웃가스(Outgassing) 최소화","feature":"Semiconductor Die Carrier, SiC 부품 코팅","use":"웨이퍼 이송 캐리어, 반도체 칩 보호 코팅"},{"id":"P20","cat":"electronics","title":"LED용 실리콘","subtitle":"Silicones for LED Encapsulant","badge":"전자","img":"https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80","func":"고출력 LED 및 자동차 조명용 고투명 봉지재(Encapsulant) 및 고반사 화이트 실리콘.","perfLabel":"핵심 특성","perf":"고굴절률 (Refractive Index > 1.5), 내황변성","feature":"LED 봉지재, White Reflector 실리콘","use":"헤드램프 LED 패키지, 마이크로 LED 디스플레이"},{"id":"P21","cat":"automotive","title":"자동차 전자 기기용 실리콘","subtitle":"Silicones for Automotive Devices","badge":"자동차","img":"https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80","func":"차량용 네비게이션, 인포테인먼트 디스플레이 OCR 광학 접착 및 카메라 모듈 실링.","perfLabel":"핵심 특성","perf":"고투명 광학 접착(LOCA), 충격 흡수","feature":"Optical Clear Silicone Gel","use":"CID 디스플레이 접합, ADAS 전방 카메라 실링"},{"id":"P22","cat":"automotive","title":"자동차용 실리콘 엘라스토머","subtitle":"Automotive Silicone Elastomers","badge":"자동차","img":"https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80","func":"터보차저 호스, 점화 플러그 부트, 와이어링 하네스 커넥터 실링용 고인열 실리콘 고무.","perfLabel":"핵심 특성","perf":"엔진오일/냉각수 저항성, 고탄성 복원율","feature":"FVMQ(불소실리콘), HTV 고무","use":"인터쿨러 호스, 커넥터 방수 씰, O-링"},{"id":"P23","cat":"automotive","title":"자동차용 하드코팅","subtitle":"Automotive Hardcoat","badge":"자동차","img":"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80","func":"폴리카보네이트(PC) 헤드램프 렌즈 및 글레이징의 스크래치 방지, 자외선 내후성 실록산 하드코팅.","perfLabel":"핵심 특성","perf":"내스크래치성 연필경도 > 4H, UV 차단","feature":"Thermal-cure Siloxane Hardcoat","use":"자동차 헤드램프 커버, PC 윈도우 글레이징"},{"id":"P24","cat":"automotive","title":"자동차용 우레탄 첨가제","subtitle":"Urethane Additives for Automotive","badge":"자동차","img":"https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80","func":"차량용 시트 쿠션, 헤드레스트, 흡차음재의 균일한 셀 구조 형성을 돕는 실리콘 계면활성제.","perfLabel":"핵심 특성","perf":"저VOC / 저냄새 친환경 폼 안정제","feature":"Silicone Surfactant for PU Foam","use":"자동차 시트 폼, 핸들 성형, 소음 흡음재"},{"id":"P25","cat":"beauty","title":"컬러 코스메틱","subtitle":"Color Cosmetics","badge":"뷰티","img":"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80","func":"파운데이션, 립스틱, 마스카라의 롱래스팅(지속력), 피지 저항성 및 뭉침 방지 레진 블렌드.","perfLabel":"핵심 특성","perf":"피막 형성능, 우수한 내수성 및 색소 분산력","feature":"Silicone Resin Blend, Alkyl Silicone","use":"쿠션 팩트, 립스틱, 아이라이너"},{"id":"P26","cat":"beauty","title":"헤어 케어","subtitle":"Hair Care","badge":"뷰티","img":"https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80","func":"샴푸, 린스, 헤어 에센스의 모발 부드러움, 열 보호, 윤기 및 정전기 방지 아미노 실리콘 에멀전.","perfLabel":"핵심 특성","perf":"손상모 케어, 뛰어난 컨디셔닝 효과","feature":"Amino Silicone Fluid, Gum Blend","use":"헤어 세럼, 트리트먼트, 염색약"},{"id":"P27","cat":"beauty","title":"스킨 케어","subtitle":"Skin Care","badge":"뷰티","img":"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80","func":"수분크림, 로션, 세럼의 실크처럼 매끄러운 발림성과 벨벳 피니시를 선사하는 엘라스토머 겔.","perfLabel":"핵심 특성","perf":"매트한 마무리감, 모공 블러 효과","feature":"Silicone Elastomer Gel, Powder","use":"수분 프라이머, 안티에이징 크림, BB크림"},{"id":"P28","cat":"beauty","title":"선 케어","subtitle":"Sun Care","badge":"뷰티","img":"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80","func":"자외선 차단제의 백탁 현상 방지, 유기/무기 자외선 차단 필터 균일 분산 및 워터프루프 유지.","perfLabel":"핵심 특성","perf":"땀/물에 강한 방수막, 백탁 억제","feature":"Acrylate Silicone, W/Si 유화제","use":"선크림, 선스틱, 워터프루프 선스프레이"},{"id":"P29","cat":"building","title":"실내 인테리어 & 타일 바이오 실란트","subtitle":"Premium Interior & Tile Hygiene Silicone (ARDEX SN+ Grade)","badge":"건축","img":"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80","func":"위생이 중요한 욕실, 주방, 거실 타일 및 천연 대리석 코너 조인트용 비초산형 프리미엄 하이진 실란트. 자극적인 냄새가 없고 변색/황변이 없으며 14가지 타일 줄눈 매칭 색상 지원.","perfLabel":"경화 방식 / 특성","perf":"비초산형 중성경화, 무취, 곰팡이 저항성 최고 등급","feature":"ARDEX SN PLUS / KCT Interior Hygiene Bio","use":"욕실 코너 줄눈, 타일-타일 조인트, 욕조·싱크대·세면대 실링, 이질재 접합부"},{"id":"P30","cat":"building","title":"범용, 유리글레이징","subtitle":"General Glass Glazing","badge":"건축","img":"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80","func":"유리와 알루미늄/스틸 프레임 간의 표준 글레이징 접착 및 기밀 수밀 유지 실란트.","perfLabel":"핵심 특성","perf":"무초산 중성경화, 우수한 접착력","feature":"Dow DOWSIL™ 789 / KCT Neutral","use":"상가 유리, 파티션, 창호 유리 테두리"},{"id":"P31","cat":"building","title":"복층유리용","subtitle":"Insulating Glass Secondary Seal","badge":"건축","img":"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80","func":"아르곤 단열 가스 누출을 막고 유리의 구조적 일체성을 보장하는 고탄성 2차 실란트.","perfLabel":"핵심 특성","perf":"가스 투과도 최저, EN 1279 인증","feature":"Dow DOWSIL™ 3362 / 3363","use":"로이 복층유리, 3중 복층유리 에지 실링"},{"id":"P32","cat":"building","title":"구조 글레이징용 (SSG)","subtitle":"Structural Glazing Sealant","badge":"건축","img":"https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80","func":"프레임 없이 유리와 메탈을 영구 접착하여 외풍압과 지진 하중을 견디는 초고강도 실리콘.","perfLabel":"핵심 특성","perf":"인장강도 2.4 MPa, ASTM C1184","feature":"Dow DOWSIL™ 983 / 895","use":"초고층 빌딩 4면 지지 커튼월 시스템"},{"id":"P33","cat":"building","title":"창호용","subtitle":"Window Perimeter Sealant","badge":"건축","img":"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80","func":"알루미늄/PVC 창호와 콘크리트 골조 사이의 빗물 누수를 차단하고 신축을 흡수하는 창호 전용 실란트.","perfLabel":"핵심 특성","perf":"변위추종 ±35%, 우수한 내후성","feature":"Dow 791 / KCT Window Perimeter","use":"아파트/빌딩 외벽 창호 주위 조인트"},{"id":"P34","cat":"building","title":"웨더용 (내후성)","subtitle":"Weatherproofing Silicone","badge":"건축","img":"https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80","func":"석재, 알루미늄 복합패널 외벽의 오염(Staining)을 방지하고 자외선을 영구 견디는 외장 실란트.","perfLabel":"핵심 특성","perf":"비오염성 (Non-staining), ±50% 변위","feature":"Dow DOWSIL™ 991 / 791","use":"석재 외벽 줄눈, 복합판넬 익스팬션 조인트"},{"id":"P35","cat":"building","title":"욕실용, 방균","subtitle":"Sanitary & Anti-fungal","badge":"건축","img":"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80","func":"강력한 항균 배합으로 물때와 곰팡이 번식을 원천 차단하는 위생 실리콘.","perfLabel":"핵심 특성","perf":"곰팡이 저항성 최고 0등급 (ASTM G21)","feature":"KCT Bio Sanitary Silicone","use":"욕조 테두리, 세면대, 싱크대, 클린룸"},{"id":"P36","cat":"building","title":"방화용","subtitle":"Firestop Silicone","badge":"건축","img":"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80","func":"화재 발생 시 최대 4시간 내화 차단 성능으로 화염과 유독가스를 차단하는 건축법 필수 자재.","perfLabel":"핵심 특성","perf":"KS F 2257 2~4시간 내화 인증","feature":"KCT Firestop 700","use":"방화벽 파이프 관통부, 엘리베이터 방화구획"},{"id":"P37","cat":"building","title":"토목용","subtitle":"Civil Engineering Joint","badge":"건축","img":"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80","func":"콘크리트 고속도로, 공항 활주로, 교량 신축이음부의 자가수평(Self-leveling) 토목 실란트.","perfLabel":"핵심 특성","perf":"중차량 하중 저항, 염화칼슘 내약품성","feature":"KCT Highway SL Joint","use":"고속도로 슬래브 줄눈, 교량 접속부"},{"id":"P38","cat":"building","title":"산업용(접착제 外)","subtitle":"Industrial Structural Adhesive","badge":"건축","img":"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80","func":"건축용 금속 브라켓, 승강기 패널, 복합재 부착을 위한 고강도 탄성 접착제.","perfLabel":"핵심 특성","perf":"진동 흡수 및 고전단 접착력","feature":"KCT Industrial MS / Silicone","use":"엘리베이터 카 벽체 접착, 금속 외장재 조립"},{"id":"P39","cat":"building","title":"발수제","subtitle":"Silicone Water Repellent","badge":"건축","img":"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80","func":"적벽돌, 콘크리트, 석재 외벽 내부로 빗물 침투를 막고 통기성을 유지하는 실리콘 침투성 발수제.","perfLabel":"핵심 특성","perf":"무색 투명, 백화 방지, 통기성 유지","feature":"KCT Silane/Siloxane Water Repellent","use":"벽돌 조적조 외벽, 노출 콘크리트 외벽"},{"id":"P40","cat":"building","title":"가스켓","subtitle":"Silicone Gasket","badge":"건축","img":"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80","func":"커튼월 및 고급 알루미늄 창호의 영구 기밀을 유지하는 고내후성 압출 실리콘 가스켓.","perfLabel":"핵심 특성","perf":"영구 압축줄음률(Compression Set) 최소화","feature":"Extruded Silicone Gasket Profile","use":"커튼월 프레임 완충재, 시스템 창호 수밀 씰"},{"id":"P41","cat":"building","title":"실리콘 방수 코팅","subtitle":"Silicone Waterproof Coating","badge":"건축","img":"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80","func":"기존 우레탄 방수 대비 수명이 2배 이상 긴 옥상 및 외벽 100% 무이음 실리콘 도막 방수제.","perfLabel":"핵심 특성","perf":"자외선 분해 없음, 고반사 쿨루프 효과","feature":"KCT Silicone Liquid Roof Coating","use":"공장 지붕, 빌딩 옥상, 노후 방수면 리모델링"},{"id":"P42","cat":"industrial-other","title":"소비재 (Consumer Goods)","subtitle":"Silicone for Consumer Goods","badge":"산업","img":"https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80","func":"유아용 젖꼭지, 주방 조리도구, 친환경 식품 밀폐용기 가스켓용 무독성 액상 실리콘(LSR).","perfLabel":"핵심 특성","perf":"BPA Free, FDA / LFGB 유럽 식품용기 인증","feature":"LSR Injection Grade","use":"유아용품, 친환경 조리도구, 식품 패키징"},{"id":"P43","cat":"industrial-other","title":"헬스케어 (Healthcare)","subtitle":"Medical & Healthcare Silicone","badge":"산업","img":"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80","func":"의료용 튜브, 인공호흡기 마스크, 피부 부착용 소프트 실리콘 접착제(PSA).","perfLabel":"핵심 특성","perf":"생체 적합성 ISO 10993, 무자극 피부접착","feature":"Medical Grade Silicone","use":"카테터, 산소마스크, 창상피복재 드레싱"},{"id":"P44","cat":"industrial-other","title":"오일 및 가스 (Oil & Gas)","subtitle":"Oil & Gas Solutions","badge":"산업","img":"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80","func":"해양 플랜트 및 정유시설의 가혹한 탄화수소 환경을 견디는 소포제 및 내유성 실리콘 씰.","perfLabel":"핵심 특성","perf":"고온 고압 내약품성, 황화수소 저항","feature":"Fluorosilicone & Silicone Defoamer","use":"원유 추출 설비 소포, 밸브 내화학 가스켓"},{"id":"P45","cat":"industrial-other","title":"섬유 및 가죽 (Textile & Leather)","subtitle":"Textile & Leather Softener","badge":"산업","img":"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80","func":"원단 및 천연/합성 피혁에 부드러운 감촉, 발수성, 신축성 및 내구성을 부여하는 가공제.","perfLabel":"핵심 특성","perf":"극세사 터치감, 세탁 내구성 유지","feature":"Hydrophilic Silicone Softener","use":"기능성 아웃도어 의류, 고급 가죽 시트"},{"id":"P46","cat":"industrial-other","title":"농업용 (Agriculture)","subtitle":"Agricultural Adjuvant","badge":"산업","img":"https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80","func":"농약 및 엽면시비 영양제의 잎 표면 흡수를 10배 이상 촉진하는 초확산(Super-spreading) 실리콘 전착제.","perfLabel":"핵심 특성","perf":"Organosilicone Surfactant","feature":"Organosilicone Surfactant","use":"작물 보호제 전착제, 스마트팜 영양액"},{"id":"P47","cat":"industrial-other","title":"재생에너지 (Renewable Energy)","subtitle":"Solar & Renewable Energy","badge":"산업","img":"https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80","func":"태양광 PV 모듈 알루미늄 프레임 실링, 정션박스 포팅 및 풍력 발전기 터빈 블레이드 보호 코팅.","perfLabel":"핵심 특성","perf":"25년 옥외 수명 보증, PID 억제","feature":"PV Module Frame Sealant","use":"태양광 모듈 테두리, 풍력 발전기 씰"},{"id":"P48","cat":"industrial-other","title":"가구·침구 및 카펫 (Furniture & Bedding)","subtitle":"Furniture, Bedding & Carpet","badge":"산업","img":"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80","func":"메모리폼 매트리스, 소파 폼 및 발수 카펫 섬유 코팅용 친환경 실리콘 첨가제.","perfLabel":"핵심 특성","perf":"고탄성 반발력 조절, 오염 방지","feature":"PU Foam Stabilizer, Stain Release","use":"매트리스 폼, 방오 카펫 코팅"},{"id":"P49","cat":"industrial-other","title":"송전 및 배전 (Electrical Transmission)","subtitle":"Electrical Transmission & Insulators","badge":"산업","img":"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80","func":"초고압 송전선 폴리머 애자(Insulator), 케이블 접속재용 내트래킹 실리콘 고무.","perfLabel":"핵심 특성","perf":"발수성 유지(HC Class 1), 내염해 아크 저항","feature":"High Voltage HTV / LSR","use":"초고압 송전 애자, 변전소 케이블 조인트"},{"id":"P50","cat":"industrial-other","title":"산업용 생산 (Industrial Production)","subtitle":"Industrial Production & Release","badge":"산업","img":"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80","func":"플라스틱/다이캐스팅 성형용 실리콘 이형제, 정밀 기계 윤활유 및 소포제.","perfLabel":"핵심 특성","perf":"고온 안정성, 우수한 이형성 및 윤활력","feature":"Silicone Release Agent, Grease","use":"금형 이형, 산업용 기계 윤활"},{"id":"P51","cat":"industrial-other","title":"테이프 & 라벨 (Tapes & Labels)","subtitle":"Pressure Sensitive Adhesives & Release","badge":"산업","img":"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80","func":"점착 테이프(PSA) 및 라벨 이형지(Release Liner) 코팅용 실리콘 솔루션.","perfLabel":"핵심 특성","perf":"고온 점착력 유지, 정밀 박리력 제어","feature":"Silicone PSA, Solventless Release Coating","use":"내열 마스킹 테이프, 라벨 이형 라이너"},{"id":"P52","cat":"industrial-other","title":"타이어 및 고무 (Tire & Rubber)","subtitle":"Silane Coupling Agents for Tire","badge":"산업","img":"https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80","func":"친환경 에코 타이어의 연비와 젖은 노면 제동력을 획기적으로 향상시키는 실란 커플링제.","perfLabel":"핵심 특성","perf":"실리카-고무 결합력 증대, 회전저항 감소","feature":"Sulfur Silane Coupling Agent","use":"고성능 친환경 타이어 트레드 고무"}];
    const CATS = {"building":{"label":"건축 & 실내 인테리어","en":"Building & Interior","icon":"bi-building","color":"#22D3EE"},"specialty-silicone":{"label":"특수모빌리티·하이테크","en":"Specialty & High-Tech","icon":"bi-shield-check","color":"#A78BFA"},"ess-ev":{"label":"ESS & EV 배터리","en":"ESS & EV Battery","icon":"bi-battery-charging","color":"#FBBF24"},"electronics":{"label":"전자·반도체","en":"Electronics & Semicon","icon":"bi-cpu","color":"#60A5FA"},"automotive":{"label":"자동차","en":"Automotive","icon":"bi-car-front","color":"#FB923C"},"beauty":{"label":"뷰티 & 퍼스널케어","en":"Beauty & Personal Care","icon":"bi-stars","color":"#F472B6"},"industrial-other":{"label":"산업·에너지·소비재","en":"Industrial & Specialty","icon":"bi-gear-wide-connected","color":"#34D399"}};
    const CAT_ORDER = ["building","specialty-silicone","ess-ev","electronics","automotive","beauty","industrial-other"];

    let currentCat = 'all';
    let filtered = PRODUCTS.slice();
    let detailIndex = 0;

    function countFor(catKey) {
      return catKey === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === catKey).length;
    }

    function renderRails() {
      const rail = document.getElementById('catRail');
      const railH = document.getElementById('catRailH');
      let railHtml = \`<button class="cat-btn \${currentCat === 'all' ? 'active' : ''}" onclick="setCategory('all')"><i class="bi bi-grid-fill"></i><span>전체보기</span><span class="count">\${PRODUCTS.length}종</span></button>\`;
      let railHtmlH = \`<button class="cat-chip-btn \${currentCat === 'all' ? 'active' : ''}" onclick="setCategory('all')"><i class="bi bi-grid-fill"></i> 전체 (\${PRODUCTS.length})</button>\`;
      CAT_ORDER.forEach(key => {
        const c = CATS[key];
        const n = countFor(key);
        const active = currentCat === key;
        railHtml += \`<button class="cat-btn \${active ? 'active' : ''}" onclick="setCategory('\${key}')" style="\${active ? \`color:\${c.color};\` : ''}"><i class="bi \${c.icon}" style="\${active ? \`color:\${c.color};\` : ''}"></i><span>\${c.label}</span><span class="count">\${n}종</span></button>\`;
        railHtmlH += \`<button class="cat-chip-btn \${active ? 'active' : ''}" onclick="setCategory('\${key}')" style="\${active ? \`color:\${c.color}; border-color:\${c.color}55;\` : ''}"><i class="bi \${c.icon}"></i> \${c.label} (\${n})</button>\`;
      });
      rail.innerHTML = railHtml;
      railH.innerHTML = railHtmlH;
    }

    function setCategory(key) {
      currentCat = key;
      filtered = key === 'all' ? PRODUCTS.slice() : PRODUCTS.filter(p => p.cat === key);
      renderRails();
      renderStage();
    }

    function renderStage() {
      const title = document.getElementById('stageTitle');
      const dot = document.getElementById('stageDot');
      const count = document.getElementById('stageCount');
      if (currentCat === 'all') {
        title.textContent = '전체 제품';
        dot.style.background = 'var(--cyan)';
      } else {
        const c = CATS[currentCat];
        title.textContent = c.label;
        dot.style.background = c.color;
      }
      count.textContent = filtered.length;

      const grid = document.getElementById('cardGrid');
      grid.innerHTML = filtered.map((p, i) => {
        const c = CATS[p.cat];
        return \`
          <div class="p-card" onclick="openDetail(\${i})">
            <div class="img-wrap">
              <img src="\${p.img}" alt="\${p.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';" />
              <span class="cat-chip" style="color:\${c.color}; border-color:\${c.color}66;">\${p.badge}</span>
            </div>
            <div class="body">
              <h3>\${p.title}</h3>
              <span class="sub">\${p.subtitle}</span>
              <span class="tap-hint"><i class="bi bi-hand-index-thumb"></i> 탭하여 상세보기</span>
            </div>
          </div>
        \`;
      }).join('');
    }

    function openDetail(i) {
      detailIndex = i;
      renderDetail();
      document.getElementById('detailOverlay').classList.add('open');
    }

    function closeDetail() {
      document.getElementById('detailOverlay').classList.remove('open');
    }

    function navDetail(delta) {
      detailIndex = (detailIndex + delta + filtered.length) % filtered.length;
      renderDetail();
    }

    function renderDetail() {
      const p = filtered[detailIndex];
      const c = CATS[p.cat];
      document.getElementById('detailIdx').textContent = detailIndex + 1;
      document.getElementById('detailTotal').textContent = filtered.length;
      document.getElementById('detailImg').src = p.img;
      document.getElementById('detailImg').alt = p.title;
      document.getElementById('detailBadge').textContent = p.badge + ' · ' + c.label;
      document.getElementById('detailBadge').style.color = c.color;
      document.getElementById('detailBadge').style.borderColor = c.color + '66';
      document.getElementById('detailEyebrow').textContent = c.en.toUpperCase();
      document.getElementById('detailEyebrow').style.color = c.color;
      document.getElementById('detailTitle').textContent = p.title;
      document.getElementById('detailSubtitle').textContent = p.subtitle;
      document.getElementById('detailFunc').textContent = p.func;
      document.getElementById('detailPerfLabel').textContent = p.perfLabel;
      document.getElementById('detailPerf').textContent = p.perf;
      document.getElementById('detailFeature').textContent = p.feature;
      document.getElementById('detailUse').textContent = p.use;
      const subject = encodeURIComponent('[KCT 디지털 카탈로그 견적문의] ' + p.title);
      const body = encodeURIComponent('아래 제품에 대한 견적을 문의드립니다.\\n\\n제품명: ' + p.title + ' (' + p.subtitle + ')\\n적용 산업: ' + c.label + '\\n주요 제품: ' + p.feature + '\\n적용 부위: ' + p.use + '\\n');
      document.getElementById('detailQuoteLink').href = 'mailto:sales@kconstrade.com?subject=' + subject + '&body=' + body;
      document.getElementById('progressFill').style.width = (((detailIndex + 1) / filtered.length) * 100) + '%';
    }

    // Swipe gesture for iPad touch navigation
    let touchStartX = 0;
    const detailBody = document.getElementById('detailBody');
    detailBody.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    detailBody.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 60) navDetail(dx < 0 ? 1 : -1);
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
      if (!document.getElementById('detailOverlay').classList.contains('open')) return;
      if (e.key === 'ArrowLeft') navDetail(-1);
      if (e.key === 'ArrowRight') navDetail(1);
      if (e.key === 'Escape') closeDetail();
    });

    renderRails();
    renderStage();
  </script>
</body>
</html>
`;
}
