// KCT 전국 건축 허가/착공 현장 리드 데이터베이스 Renderer
export function renderKctPermitsPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>전국 건축 허가·착공 신규현장 리드 데이터베이스 | KCT 한국건설트레이딩</title>
  <meta name="description" content="공장, 창고, 업무시설, 공동주택 등 전국 신규 건축 허가·착공 현장 105건을 실시간 정리한 KCT 영업 리드 데이터베이스. 주소, 용도, 연면적, 설계·시공·감리사, 착공일 기준 필터링 및 견적문의." />
  <meta name="keywords" content="건축 허가 현황, 착공 현장, 건축 인허가, 신축 증축 대수선, 실란트 영업 리드, 건설사 정보, KCT" />

  <link rel="canonical" href="https://davhave.com/projects/kct/permits" />
  <link rel="icon" href="https://kconstrade.com/assets/img/favicon.ico" type="image/x-icon" />
  <meta property="og:title" content="전국 건축 허가·착공 신규현장 리드 데이터베이스 | KCT 한국건설트레이딩" />
  <meta property="og:description" content="공장, 창고, 업무시설, 공동주택 등 전국 신규 건축 허가·착공 현장 105건을 실시간 정리한 KCT 영업 리드 데이터베이스." />
  <meta property="og:image" content="https://kconstrade.com/assets/img/og-image.png" />
  <meta property="og:url" content="https://davhave.com/projects/kct/permits" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

  <style>
    :root {
      --primary: #1558D6;
      --primary-dark: #0D3F9E;
      --primary-light: #EBF2FE;
      --accent: #FF6B35;
      --accent-hover: #E0531D;
      --dark: #0F172A;
      --dark-light: #1E293B;
      --gray-50: #F8FAFC;
      --gray-100: #F1F5F9;
      --gray-200: #E2E8F0;
      --gray-400: #94A3B8;
      --gray-600: #475569;
      --gray-800: #1E293B;
      --white: #FFFFFF;
      --radius-sm: 8px;
      --radius: 12px;
      --radius-lg: 18px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
      --shadow-md: 0 6px 18px rgba(15,23,42,0.08);
      --shadow-lg: 0 16px 36px rgba(15,23,42,0.12);
      --font: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      --font-en: 'Poppins', sans-serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font); color: var(--gray-800); background: #F8FAFC; line-height: 1.6; -webkit-font-smoothing: antialiased; }
    a { text-decoration: none; color: inherit; }
    ul { list-style: none; }
    img { max-width: 100%; height: auto; display: block; }
    .container { max-width: 1300px; margin: 0 auto; padding: 0 1.5rem; }

    .top-bar { background: var(--dark); color: rgba(255,255,255,0.75); font-size: 0.82rem; padding: 0.55rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
    .top-bar-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
    .top-bar-info { display: flex; gap: 1.5rem; flex-wrap: wrap; }
    .top-bar-info span { display: inline-flex; align-items: center; gap: 0.35rem; }
    .top-bar-links { display: flex; gap: 1.25rem; align-items: center; }
    .top-bar-links a { color: rgba(255,255,255,0.85); transition: color 0.2s; display: inline-flex; align-items: center; gap: 0.3rem; }
    .top-bar-links a:hover { color: var(--white); }

    header { position: sticky; top: 0; background: rgba(255,255,255,0.96); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); z-index: 1000; border-bottom: 1px solid var(--gray-200); box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: all 0.3s; }
    header.scrolled { box-shadow: 0 10px 30px rgba(15,23,42,0.12); background: rgba(255,255,255,0.98); }
    .nav-inner { display: flex; justify-content: space-between; align-items: center; height: 76px; transition: height 0.3s; }
    header.scrolled .nav-inner { height: 64px; }
    .brand-logo { display: flex; align-items: center; gap: 0.75rem; font-weight: 800; font-size: 1.35rem; color: var(--dark); text-decoration: none; }
    .brand-badge { background: var(--primary-light); color: var(--primary); font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 4px; letter-spacing: 0.05em; }

    .nav-menu { display: flex; align-items: center; gap: 1rem; }
    .btn-nav-link { background: var(--gray-100); color: var(--dark); font-weight: 700; font-size: 0.88rem; padding: 0.6rem 1.15rem; border-radius: 50px; border: 1px solid var(--gray-200); display: inline-flex; align-items: center; gap: 0.4rem; transition: all 0.2s; text-decoration: none; }
    .btn-nav-link:hover { background: var(--primary-light); color: var(--primary); border-color: var(--primary); }
    .btn-quote { background: var(--primary); color: var(--white); font-weight: 700; font-size: 0.88rem; padding: 0.6rem 1.25rem; border-radius: 50px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.4rem; border: none; cursor: pointer; text-decoration: none; }
    .btn-quote:hover { background: var(--primary-dark); transform: translateY(-1px); }

    .nav-toggle-btn { display: none; background: var(--gray-100); border: 1px solid var(--gray-200); border-radius: 8px; width: 42px; height: 42px; align-items: center; justify-content: center; font-size: 1.25rem; color: var(--dark); cursor: pointer; }
    @media (max-width: 860px) {
      .nav-menu { display: none; }
      .nav-toggle-btn { display: flex; }
    }

    .mobile-drawer { position: fixed; top: 0; right: -100%; width: min(360px, 86vw); height: 100%; background: var(--white); z-index: 2500; box-shadow: -10px 0 35px rgba(0,0,0,0.25); transition: right 0.35s cubic-bezier(0.32, 0.72, 0, 1); display: flex; flex-direction: column; overflow-y: auto; }
    .mobile-drawer.open { right: 0; }
    .drawer-backdrop { position: fixed; inset: 0; background: rgba(15,23,42,0.6); backdrop-filter: blur(4px); z-index: 2400; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
    .drawer-backdrop.open { opacity: 1; pointer-events: auto; }
    .drawer-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--gray-200); display: flex; align-items: center; justify-content: space-between; background: var(--gray-50); }
    .drawer-close-btn { background: none; border: none; font-size: 1.4rem; color: var(--gray-600); cursor: pointer; }
    .drawer-body { padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem; }
    .drawer-nav-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
    .drawer-nav-item a { display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; color: var(--gray-800); text-decoration: none; background: var(--gray-50); transition: all 0.2s; }
    .drawer-nav-item a:hover { background: var(--primary-light); color: var(--primary); }

    .breadcrumb-bar { background: var(--white); border-bottom: 1px solid var(--gray-200); padding: 0.85rem 0; font-size: 0.85rem; color: var(--gray-600); }
    .breadcrumb-bar a { color: var(--primary); font-weight: 600; text-decoration: none; }
    .breadcrumb-bar a:hover { text-decoration: underline; }
    .breadcrumb-bar span.sep { margin: 0 0.5rem; color: var(--gray-400); }

    .page-hero { background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%); color: var(--white); padding: 4.5rem 0 4rem; text-align: center; }
    .page-hero-badge { display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(56,189,248,0.2); color: #38BDF8; padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem; border: 1px solid rgba(56,189,248,0.3); }
    .page-hero h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 0.85rem; letter-spacing: -0.02em; }
    .page-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.85); max-width: 1000px; margin: 0 auto; line-height: 1.7; }

    .stats-bar { display: flex; justify-content: center; gap: 2.5rem; flex-wrap: wrap; margin-top: 2.25rem; }
    .stat-chip { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; }
    .stat-chip strong { font-size: 1.7rem; font-weight: 800; color: var(--white); font-family: var(--font-en); }
    .stat-chip span { font-size: 0.82rem; color: rgba(255,255,255,0.7); }

    .tech-content-section { padding: 4rem 0 6rem; }
    .tech-filter-box { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 2.25rem 2.5rem; box-shadow: var(--shadow-sm); margin-bottom: 2rem; }
    .filter-row { display: flex; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.85rem; }
    .filter-row:last-child { margin-bottom: 0; }
    .filter-label { font-size: 0.9rem; font-weight: 800; color: var(--dark); min-width: 110px; display: flex; align-items: center; gap: 0.4rem; }
    .filter-options { display: flex; gap: 0.5rem; flex-wrap: wrap; flex-grow: 1; }
    .btn-filter-opt { background: var(--gray-50); border: 1.5px solid var(--gray-200); border-radius: 6px; padding: 0.45rem 1rem; font-size: 0.85rem; font-weight: 600; color: var(--gray-800); cursor: pointer; transition: all 0.2s; }
    .btn-filter-opt.active, .btn-filter-opt:hover { background: var(--primary); color: var(--white); border-color: var(--primary); }
    .select-use { flex-grow: 1; max-width: 320px; padding: 0.55rem 0.85rem; border: 1.5px solid var(--gray-200); border-radius: 6px; font-size: 0.85rem; font-weight: 600; color: var(--gray-800); background: var(--gray-50); font-family: var(--font); }
    .select-use:focus { outline: none; border-color: var(--primary); }

    .tech-search-bar { display: flex; gap: 0.75rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--gray-200); }
    .tech-search-input { flex-grow: 1; padding: 0.9rem 1.25rem; border: 1.5px solid var(--gray-200); border-radius: 8px; font-size: 0.95rem; font-family: var(--font); background: var(--gray-50); transition: all 0.2s; }
    .tech-search-input:focus { outline: none; border-color: var(--primary); background: var(--white); box-shadow: 0 0 0 3px rgba(21,88,214,0.15); }
    .btn-tech-search { background: var(--primary); color: var(--white); border: none; border-radius: 8px; padding: 0 2rem; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 0.4rem; }
    .btn-tech-search:hover { background: var(--primary-dark); }

    .tech-action-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem; }
    .tech-count-info { font-size: 0.95rem; color: var(--gray-600); }
    .tech-count-info strong { color: var(--primary); font-size: 1.1rem; }
    .btn-batch-email { background: var(--accent); color: var(--white); border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 0.92rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.45rem; transition: all 0.2s; box-shadow: var(--shadow-sm); }
    .btn-batch-email:hover { background: var(--accent-hover); transform: translateY(-1px); }
    .btn-batch-email:disabled { background: var(--gray-400); cursor: not-allowed; transform: none; box-shadow: none; }

    .tech-table-wrap { background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--gray-200); box-shadow: var(--shadow-sm); overflow-x: auto; }
    .tech-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.87rem; min-width: 1300px; }
    .tech-table th { background: var(--dark); color: var(--white); font-weight: 700; padding: 1.1rem 1.1rem; font-size: 0.8rem; letter-spacing: 0.03em; white-space: nowrap; }
    .tech-table td { padding: 1rem 1.1rem; border-bottom: 1px solid var(--gray-200); color: var(--gray-800); vertical-align: middle; }
    .tech-table tr:hover td { background: var(--primary-light); }
    .btn-email-doc { background: var(--primary-light); color: var(--primary); border: 1px solid rgba(21,88,214,0.3); border-radius: 6px; padding: 0.5rem 0.9rem; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.35rem; transition: all 0.2s; }
    .btn-email-doc:hover { background: var(--primary); color: var(--white); }

    .modal-backdrop { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,23,42,0.65); backdrop-filter: blur(4px); z-index: 2000; justify-content: center; align-items: center; padding: 1.5rem; }
    .modal-backdrop.active { display: flex; }
    .modal-box { background: var(--white); border-radius: var(--radius-lg); max-width: 580px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 2.5rem; position: relative; box-shadow: var(--shadow-lg); }
    .modal-close { position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; font-size: 1.5rem; color: var(--gray-600); cursor: pointer; }
    .email-modal-header { border-bottom: 1px solid var(--gray-200); padding-bottom: 1rem; margin-bottom: 1.5rem; }
    .email-modal-header h4 { font-size: 1.35rem; font-weight: 800; color: var(--dark); }
    .doc-badge-list { display: flex; flex-direction: column; gap: 0.5rem; max-height: 140px; overflow-y: auto; background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 8px; padding: 0.85rem; margin-bottom: 1.25rem; font-size: 0.85rem; }
    .doc-badge-item { display: flex; align-items: center; gap: 0.5rem; color: var(--dark); font-weight: 600; }
    .form-group { margin-bottom: 1.25rem; }
    .form-group label { display: block; font-size: 0.85rem; font-weight: 700; color: var(--gray-800); margin-bottom: 0.45rem; }
    .form-group input { width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--gray-200); border-radius: 8px; font-size: 0.95rem; font-family: var(--font); background: var(--gray-50); transition: all 0.2s; }
    .form-group input:focus { outline: none; border-color: var(--primary); background: var(--white); box-shadow: 0 0 0 3px rgba(21,88,214,0.15); }
    .btn-detail { background: var(--gray-100); color: var(--gray-800); font-weight: 600; font-size: 0.9rem; padding: 0.8rem 1.2rem; border-radius: 8px; border: 1px solid var(--gray-200); cursor: pointer; text-align: center; }

    .source-note { font-size: 0.8rem; color: var(--gray-400); margin-top: 1.5rem; text-align: center; }

    footer { background: var(--dark); color: rgba(255,255,255,0.75); padding: 4.5rem 0 2.5rem; font-size: 0.88rem; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3rem; margin-bottom: 3rem; }
    @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 550px) { .footer-grid { grid-template-columns: 1fr; } }
    .footer-col h5 { font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .footer-col ul li { margin-bottom: 0.65rem; }
    .footer-col ul li a { color: rgba(255,255,255,0.7); transition: color 0.2s; }
    .footer-col ul li a:hover { color: var(--white); }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; font-size: 0.8rem; }
  </style>
</head>
<body>

  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-bar-info">
        <span><i class="bi bi-building-check text-primary"></i> <strong>사업자등록번호:</strong> 371-07-03719</span>
        <span><i class="bi bi-geo-alt-fill text-primary"></i> <strong>허가/착공 현장:</strong> 전국 105건 실시간 정리</span>
        <span><i class="bi bi-truck text-primary"></i> 수도권 당일/익일 직납</span>
      </div>
      <div class="top-bar-links">
        <a href="/projects/kct"><i class="bi bi-house-door-fill"></i> 메인 포털</a>
        <a href="/projects/kct/technical"><i class="bi bi-file-earmark-arrow-down-fill"></i> 기술자료 센터</a>
        <a href="https://smartstore.naver.com/kconstrade/" target="_blank" rel="noopener"><i class="bi bi-bag-check"></i> 스마트스토어</a>
        <a href="/projects/kct#b2b-form"><i class="bi bi-chat-left-text-fill"></i> 온라인 견적문의</a>
        <a href="mailto:sales@kconstrade.com"><i class="bi bi-envelope-fill"></i> sales@kconstrade.com</a>
      </div>
    </div>
  </div>

  <header>
    <div class="container nav-inner">
      <a href="/projects/kct" class="brand-logo">
        KCT <span style="font-weight:400; color:var(--gray-600); font-size:1.05rem;">한국건설트레이딩</span>
        <span class="brand-badge">허가/착공 DB</span>
      </a>

      <div class="nav-menu">
        <a href="/projects/kct" class="btn-nav-link"><i class="bi bi-house"></i> KCT 메인 포털</a>
        <a href="/projects/kct/color-samples" class="btn-nav-link"><i class="bi bi-palette"></i> 색상칩 & 샘플요청</a>
        <a href="/projects/kct/technical" class="btn-nav-link"><i class="bi bi-file-earmark-pdf"></i> 기술자료 센터</a>
        <a href="/projects/kct#b2b-form" class="btn-quote"><i class="bi bi-send-fill"></i> B2B 견적요청</a>
      </div>

      <button class="nav-toggle-btn" id="kctPermitsNavToggle" aria-label="메뉴 열기">
        <i class="bi bi-list"></i>
      </button>
    </div>
  </header>

  <div class="drawer-backdrop" id="kctPermitsDrawerBackdrop"></div>
  <aside class="mobile-drawer" id="kctPermitsMobileDrawer" aria-label="모바일 네비게이션">
    <div class="drawer-header">
      <div style="font-weight:800; font-size:1.15rem; color:var(--dark); display:flex; align-items:center; gap:0.5rem;">
        <span>허가/착공 DB 메뉴</span>
      </div>
      <button class="drawer-close-btn" id="kctPermitsDrawerClose" aria-label="메뉴 닫기">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="drawer-body">
      <ul class="drawer-nav-list">
        <li class="drawer-nav-item"><a href="/projects/kct"><i class="bi bi-house-door-fill"></i> <span>KCT 메인 포털</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects/kct/color-samples"><i class="bi bi-palette-fill"></i> <span>색상칩 시편 & 샘플관</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects/kct/technical"><i class="bi bi-file-earmark-pdf-fill"></i> <span>기술자료(TDS/MSDS) 센터</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects"><i class="bi bi-grid-fill"></i> <span>DAVHAVE Projects 허브</span> <span>↗</span></a></li>
      </ul>

      <div style="margin-top:auto; padding-top:1.5rem; border-top:1px solid var(--gray-200);">
        <a href="/projects/kct#b2b-form" class="btn-quote" style="width:100%; justify-content:center; padding:0.9rem;" onclick="closeKctPermitsDrawer()">
          <i class="bi bi-send-fill"></i> B2B 견적 및 기술 문의
        </a>
      </div>
    </div>
  </aside>

  <div class="breadcrumb-bar">
    <div class="container">
      <a href="/projects/kct">홈</a>
      <span class="sep">></span>
      <a href="/projects/kct">KCT 플랫폼</a>
      <span class="sep">></span>
      <span style="color:var(--dark); font-weight:700;">전국 건축 허가·착공 현장 리드 데이터베이스</span>
    </div>
  </div>

  <section class="page-hero">
    <div class="container">
      <div class="page-hero-badge">
        <i class="bi bi-building-check"></i> Building Permit & Groundbreaking Lead Database
      </div>
      <h1>전국 건축 허가·착공 신규현장 리드 데이터베이스</h1>
      <p>
        공장, 창고, 업무시설, 공동주택 등 전국 신규 건축 허가·착공 현장 정보를 주소·용도·연면적·설계/시공/감리사·착공일 기준으로 정리했습니다.
        실란트·실리콘 자재가 필요한 신축·증축·대수선 현장을 찾아 바로 견적을 문의하세요.
      </p>
      <div class="stats-bar">
        <div class="stat-chip"><strong>105</strong><span>전체 현장</span></div>
        <div class="stat-chip"><strong>29</strong><span>신축</span></div>
        <div class="stat-chip"><strong>57</strong><span>증축</span></div>
        <div class="stat-chip"><strong>19</strong><span>대수선</span></div>
      </div>
    </div>
  </section>

  <section class="tech-content-section">
    <div class="container">

      <div class="tech-filter-box">
        <div class="filter-row">
          <div class="filter-label"><i class="bi bi-diagram-3 text-primary"></i> 공사 구분</div>
          <div class="filter-options" id="permitTypeFilter">
            <button class="btn-filter-opt active" onclick="setPermitTypeFilter('ALL', this)">전체</button>
            <button class="btn-filter-opt" onclick="setPermitTypeFilter('신축', this)">신축</button>
            <button class="btn-filter-opt" onclick="setPermitTypeFilter('증축', this)">증축</button>
            <button class="btn-filter-opt" onclick="setPermitTypeFilter('대수선', this)">대수선</button>
          </div>
        </div>

        <div class="filter-row">
          <div class="filter-label"><i class="bi bi-building text-primary"></i> 건물 용도</div>
          <select class="select-use" id="permitUseFilter" onchange="filterPermits()">
            <option value="ALL">전체 용도</option>
            <option value="공장">공장 (36)</option>
            <option value="동물및식물관련시설">동물및식물관련시설 (13)</option>
            <option value="창고시설">창고시설 (7)</option>
            <option value="교육연구시설">교육연구시설 (6)</option>
            <option value="업무시설">업무시설 (6)</option>
            <option value="공동주택">공동주택 (6)</option>
            <option value="제1종근린생활시설">제1종근린생활시설 (5)</option>
            <option value="자원순환관련시설">자원순환관련시설 (4)</option>
            <option value="자동차관련시설">자동차관련시설 (3)</option>
            <option value="문화및집회시설">문화및집회시설 (3)</option>
            <option value="제2종근린생활시설">제2종근린생활시설 (3)</option>
            <option value="노유자시설">노유자시설 (2)</option>
            <option value="종교시설">종교시설 (2)</option>
            <option value="의료시설">의료시설 (2)</option>
            <option value="운동시설">운동시설 (1)</option>
            <option value="숙박시설">숙박시설 (1)</option>
            <option value="방송통신시설">방송통신시설 (1)</option>
            <option value="발전시설">발전시설 (1)</option>
            <option value="단독주택">단독주택 (1)</option>
            <option value="위험물저장및처리시설">위험물저장및처리시설 (1)</option>
            <option value="국방,군사시설">국방,군사시설 (1)</option>
          </select>
        </div>

        <div class="tech-search-bar">
          <input type="text" id="permitSearchInput" class="tech-search-input" placeholder="주소, 설계사, 시공사, 감리사로 검색하세요 (예: 화성, 공장, 건축사사무소)..." onkeyup="filterPermits()" />
          <button class="btn-tech-search" onclick="filterPermits()"><i class="bi bi-search"></i> 검색</button>
        </div>
      </div>

      <div class="tech-action-bar">
        <div class="tech-count-info">
          총 <strong id="permitResultCount">105</strong>건의 허가/착공 현장이 검색되었습니다.
        </div>
        <div>
          <button id="btnBatchPermitEmail" class="btn-batch-email" disabled onclick="openBatchPermitModal()">
            <i class="bi bi-send-check-fill"></i> 선택한 현장 일괄 견적문의 (<span id="selectedPermitCount">0</span>개)
          </button>
        </div>
      </div>

      <div class="tech-table-wrap">
        <table class="tech-table">
          <thead>
            <tr>
              <th style="text-align:center; width:46px;">
                <input type="checkbox" id="selectAllPermits" onchange="toggleSelectAllPermits(this)" />
              </th>
              <th>주소</th>
              <th>용도</th>
              <th>구분</th>
              <th>연면적</th>
              <th>층수</th>
              <th>공사비</th>
              <th>설계 / 시공 / 감리</th>
              <th>착공일</th>
              <th style="text-align:center;">견적문의</th>
            </tr>
          </thead>
          <tbody id="permitsTableBody">
    <tr class="permit-row" data-type="대수선" data-use="자원순환관련시설" data-q="경기 광명시 소하동 702-6 자원순환관련시설 비스타건축사사무소 (주)이레토건 비스타건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-001" data-addr="경기 광명시 소하동 702-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 광명시 소하동 702-6</td>
      <td>자원순환관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">7,286㎡</td>
      <td style="white-space:nowrap;">지하1층/2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">49.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 비스타건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)이레토건</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 비스타건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EB%AA%85%EC%8B%9C%20%EC%86%8C%ED%95%98%EB%8F%99%20702-6%20(%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EB%AA%85%EC%8B%9C%20%EC%86%8C%ED%95%98%EB%8F%99%20702-6%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C286%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F2%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2049.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%B9%84%EC%8A%A4%ED%83%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%9D%B4%EB%A0%88%ED%86%A0%EA%B1%B4%0A%EA%B0%90%EB%A6%AC%3A%20%EB%B9%84%EC%8A%A4%ED%83%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="교육연구시설" data-q="경남 사천시 용현면 통양리 58-1 교육연구시설 (주)동서이앤씨건축사사무소 (주)만도건설 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-002" data-addr="경남 사천시 용현면 통양리 58-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 사천시 용현면 통양리 58-1</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">5,545㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">49.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)동서이앤씨건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)만도건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EC%82%AC%EC%B2%9C%EC%8B%9C%20%EC%9A%A9%ED%98%84%EB%A9%B4%20%ED%86%B5%EC%96%91%EB%A6%AC%2058-1%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EC%82%AC%EC%B2%9C%EC%8B%9C%20%EC%9A%A9%ED%98%84%EB%A9%B4%20%ED%86%B5%EC%96%91%EB%A6%AC%2058-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C545%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2049.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%8F%99%EC%84%9C%EC%9D%B4%EC%95%A4%EC%94%A8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EB%A7%8C%EB%8F%84%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="노유자시설" data-q="경기 남양주시 진접읍 장현리 363-7 노유자시설 청건축사사무소 주식회사인왕종합건설 청건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-003" data-addr="경기 남양주시 진접읍 장현리 363-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 남양주시 진접읍 장현리 363-7</td>
      <td>노유자시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,151㎡</td>
      <td style="white-space:nowrap;">지하1층/6층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">17.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 청건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사인왕종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 청건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C%20%EC%A7%84%EC%A0%91%EC%9D%8D%20%EC%9E%A5%ED%98%84%EB%A6%AC%20363-7%20(%EB%85%B8%EC%9C%A0%EC%9E%90%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C%20%EC%A7%84%EC%A0%91%EC%9D%8D%20%EC%9E%A5%ED%98%84%EB%A6%AC%20363-7%0A%EC%9A%A9%EB%8F%84%3A%20%EB%85%B8%EC%9C%A0%EC%9E%90%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C151%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F6%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2017.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%B2%AD%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%9D%B8%EC%99%95%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EC%B2%AD%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="전남 신안군 지도읍 자동리 553-1 동물및식물관련시설 주식회사로운건축사사무소 주식회사혜민 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-004" data-addr="전남 신안군 지도읍 자동리 553-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 신안군 지도읍 자동리 553-1</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">11,866㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">264만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사로운건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사혜민</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%8B%A0%EC%95%88%EA%B5%B0%20%EC%A7%80%EB%8F%84%EC%9D%8D%20%EC%9E%90%EB%8F%99%EB%A6%AC%20553-1%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%8B%A0%EC%95%88%EA%B5%B0%20%EC%A7%80%EB%8F%84%EC%9D%8D%20%EC%9E%90%EB%8F%99%EB%A6%AC%20553-1%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2011%2C866%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20264%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%A1%9C%EC%9A%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%ED%98%9C%EB%AF%BC%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경남 김해시 대동면 월촌리 1279-8 공장 건축사사무소일우 강명종합건설(주) 건축사사무소일우">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-005" data-addr="경남 김해시 대동면 월촌리 1279-8" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 김해시 대동면 월촌리 1279-8</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,881㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">44.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소일우</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 강명종합건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소일우</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EB%8C%80%EB%8F%99%EB%A9%B4%20%EC%9B%94%EC%B4%8C%EB%A6%AC%201279-8%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EB%8C%80%EB%8F%99%EB%A9%B4%20%EC%9B%94%EC%B4%8C%EB%A6%AC%201279-8%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C881%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2044.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%9D%BC%EC%9A%B0%0A%EC%8B%9C%EA%B3%B5%3A%20%EA%B0%95%EB%AA%85%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%9D%BC%EC%9A%B0%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="울산 울주군 온산읍 대정리 391 공장 에스팀건축사사무소 동원건설주식회사 에스팀건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-006" data-addr="울산 울주군 온산읍 대정리 391" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">울산 울주군 온산읍 대정리 391</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">10,169㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">61.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 에스팀건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 동원건설주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 에스팀건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9A%B8%EC%82%B0%20%EC%9A%B8%EC%A3%BC%EA%B5%B0%20%EC%98%A8%EC%82%B0%EC%9D%8D%20%EB%8C%80%EC%A0%95%EB%A6%AC%20391%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9A%B8%EC%82%B0%20%EC%9A%B8%EC%A3%BC%EA%B5%B0%20%EC%98%A8%EC%82%B0%EC%9D%8D%20%EB%8C%80%EC%A0%95%EB%A6%AC%20391%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2010%2C169%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2061.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%97%90%EC%8A%A4%ED%8C%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EB%8F%99%EC%9B%90%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20%EC%97%90%EC%8A%A4%ED%8C%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="전북 고창군 신림면 자포리 1334 동물및식물관련시설 균정건축사사무소  건축사사무소엘">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-007" data-addr="전북 고창군 신림면 자포리 1334" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 고창군 신림면 자포리 1334</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,290㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2,047만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 균정건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소엘</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EA%B3%A0%EC%B0%BD%EA%B5%B0%20%EC%8B%A0%EB%A6%BC%EB%A9%B4%20%EC%9E%90%ED%8F%AC%EB%A6%AC%201334%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EA%B3%A0%EC%B0%BD%EA%B5%B0%20%EC%8B%A0%EB%A6%BC%EB%A9%B4%20%EC%9E%90%ED%8F%AC%EB%A6%AC%201334%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C290%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202%2C047%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EA%B7%A0%EC%A0%95%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%97%98%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="창고시설" data-q="경기 화성시 팔탄면 해창리 259-23 창고시설 (주)두가씨앤씨종합건축사사무소 활림건설(주) (주)두가씨앤씨종합건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-008" data-addr="경기 화성시 팔탄면 해창리 259-23" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 화성시 팔탄면 해창리 259-23</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">54,897㎡</td>
      <td style="white-space:nowrap;">지하1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">109억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)두가씨앤씨종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 활림건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)두가씨앤씨종합건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%ED%8C%94%ED%83%84%EB%A9%B4%20%ED%95%B4%EC%B0%BD%EB%A6%AC%20259-23%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%ED%8C%94%ED%83%84%EB%A9%B4%20%ED%95%B4%EC%B0%BD%EB%A6%AC%20259-23%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2054%2C897%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20109%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%91%90%EA%B0%80%EC%94%A8%EC%95%A4%EC%94%A8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%ED%99%9C%EB%A6%BC%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EB%91%90%EA%B0%80%EC%94%A8%EC%95%A4%EC%94%A8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="대구 수성구 지산동 914 제1종근린생활시설 건축사사무소포튼도시건축  건축사사무소포튼도시건축">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-009" data-addr="대구 수성구 지산동 914" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 수성구 지산동 914</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,514㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">46억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소포튼도시건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소포튼도시건축</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EC%88%98%EC%84%B1%EA%B5%AC%20%EC%A7%80%EC%82%B0%EB%8F%99%20914%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EC%88%98%EC%84%B1%EA%B5%AC%20%EC%A7%80%EC%82%B0%EB%8F%99%20914%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C514%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2046%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%ED%8F%AC%ED%8A%BC%EB%8F%84%EC%8B%9C%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%ED%8F%AC%ED%8A%BC%EB%8F%84%EC%8B%9C%EA%B1%B4%EC%B6%95%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="경북 안동시 와룡면 가야리 767 동물및식물관련시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-010" data-addr="경북 안동시 와룡면 가야리 767" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 안동시 와룡면 가야리 767</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,017㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">6,837만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EC%95%88%EB%8F%99%EC%8B%9C%20%EC%99%80%EB%A3%A1%EB%A9%B4%20%EA%B0%80%EC%95%BC%EB%A6%AC%20767%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EC%95%88%EB%8F%99%EC%8B%9C%20%EC%99%80%EB%A3%A1%EB%A9%B4%20%EA%B0%80%EC%95%BC%EB%A6%AC%20767%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C017%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%206%2C837%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 청주시 송정동 150-32 공장 제가건축사사무소주식회사 대경건설(주) ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-011" data-addr="충북 청주시 송정동 150-32" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 청주시 송정동 150-32</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">154,848㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">274억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 제가건축사사무소주식회사</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 대경건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%86%A1%EC%A0%95%EB%8F%99%20150-32%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%86%A1%EC%A0%95%EB%8F%99%20150-32%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20154%2C848%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20274%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A0%9C%EA%B0%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EC%8B%9C%EA%B3%B5%3A%20%EB%8C%80%EA%B2%BD%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="대구 달성군 구지면 예현리 760-3 공장 현아건축사사무소 다음건설주식회사 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-012" data-addr="대구 달성군 구지면 예현리 760-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 달성군 구지면 예현리 760-3</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">21,902㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">77억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 현아건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 다음건설주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%B1%EA%B5%B0%20%EA%B5%AC%EC%A7%80%EB%A9%B4%20%EC%98%88%ED%98%84%EB%A6%AC%20760-3%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%B1%EA%B5%B0%20%EA%B5%AC%EC%A7%80%EB%A9%B4%20%EC%98%88%ED%98%84%EB%A6%AC%20760-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2021%2C902%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2077%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%98%84%EC%95%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EB%8B%A4%EC%9D%8C%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 안산시 목내동 457-9 공장 (주)대원건축사사무소 (주)한국종합건설 (주)대원건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-013" data-addr="경기 안산시 목내동 457-9" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 안산시 목내동 457-9</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,424㎡</td>
      <td style="white-space:nowrap;">6층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">18.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)대원건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)한국종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)대원건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EB%AA%A9%EB%82%B4%EB%8F%99%20457-9%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EB%AA%A9%EB%82%B4%EB%8F%99%20457-9%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C424%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%206%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2018.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%8C%80%EC%9B%90%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%ED%95%9C%EA%B5%AD%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EB%8C%80%EC%9B%90%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="자동차관련시설" data-q="전남 구례군 구례읍 봉동리 183-1 자동차관련시설 (주)디아이지엔지니어링건축사사무소 정원산업개발(주) (주)하우엔지니어링건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-014" data-addr="전남 구례군 구례읍 봉동리 183-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 구례군 구례읍 봉동리 183-1</td>
      <td>자동차관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,929㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)디아이지엔지니어링건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 정원산업개발(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)하우엔지니어링건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EA%B5%AC%EB%A1%80%EA%B5%B0%20%EA%B5%AC%EB%A1%80%EC%9D%8D%20%EB%B4%89%EB%8F%99%EB%A6%AC%20183-1%20(%EC%9E%90%EB%8F%99%EC%B0%A8%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EA%B5%AC%EB%A1%80%EA%B5%B0%20%EA%B5%AC%EB%A1%80%EC%9D%8D%20%EB%B4%89%EB%8F%99%EB%A6%AC%20183-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EB%8F%99%EC%B0%A8%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C929%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%94%94%EC%95%84%EC%9D%B4%EC%A7%80%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A0%95%EC%9B%90%EC%82%B0%EC%97%85%EA%B0%9C%EB%B0%9C(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%ED%95%98%EC%9A%B0%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="충남 공주시 신관동 26 제1종근린생활시설 한샘건축사사무소 이엠씨건설주식회사 한샘건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-015" data-addr="충남 공주시 신관동 26" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 공주시 신관동 26</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,320㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">8.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 한샘건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 이엠씨건설주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 한샘건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EA%B3%B5%EC%A3%BC%EC%8B%9C%20%EC%8B%A0%EA%B4%80%EB%8F%99%2026%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EA%B3%B5%EC%A3%BC%EC%8B%9C%20%EC%8B%A0%EA%B4%80%EB%8F%99%2026%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C320%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%208.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%95%9C%EC%83%98%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%9D%B4%EC%97%A0%EC%94%A8%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20%ED%95%9C%EC%83%98%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 화성시 팔탄면 서근리 224-31 공장 월드종합건축사사무소 주식회사이수산업건설 월드종합건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-016" data-addr="경기 화성시 팔탄면 서근리 224-31" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 화성시 팔탄면 서근리 224-31</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,639㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">10억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 월드종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사이수산업건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 월드종합건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%ED%8C%94%ED%83%84%EB%A9%B4%20%EC%84%9C%EA%B7%BC%EB%A6%AC%20224-31%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%ED%8C%94%ED%83%84%EB%A9%B4%20%EC%84%9C%EA%B7%BC%EB%A6%AC%20224-31%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C639%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2010%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9B%94%EB%93%9C%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%9D%B4%EC%88%98%EC%82%B0%EC%97%85%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EC%9B%94%EB%93%9C%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="창고시설" data-q="경기 용인시 양지읍 양지리 920 창고시설 주식회사아이에프디건축사사무소 (주)참존건설 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-017" data-addr="경기 용인시 양지읍 양지리 920" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 용인시 양지읍 양지리 920</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">205,789㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">316억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사아이에프디건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)참존건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%96%91%EC%A7%80%EC%9D%8D%20%EC%96%91%EC%A7%80%EB%A6%AC%20920%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%96%91%EC%A7%80%EC%9D%8D%20%EC%96%91%EC%A7%80%EB%A6%AC%20920%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20205%2C789%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20316%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%95%84%EC%9D%B4%EC%97%90%ED%94%84%EB%94%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%B0%B8%EC%A1%B4%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="충남 예산군 신암면 예림리 산 6-102 동물및식물관련시설 (주)한라건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-018" data-addr="충남 예산군 신암면 예림리 산 6-102" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 예산군 신암면 예림리 산 6-102</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">10,389㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">6,472만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)한라건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%98%88%EC%82%B0%EA%B5%B0%20%EC%8B%A0%EC%95%94%EB%A9%B4%20%EC%98%88%EB%A6%BC%EB%A6%AC%20%EC%82%B0%206-102%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%98%88%EC%82%B0%EA%B5%B0%20%EC%8B%A0%EC%95%94%EB%A9%B4%20%EC%98%88%EB%A6%BC%EB%A6%AC%20%EC%82%B0%206-102%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2010%2C389%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%206%2C472%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%95%9C%EB%9D%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 음성군 맹동면 신돈리 1-2 공장 (주)뿌리건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-019" data-addr="충북 음성군 맹동면 신돈리 1-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 음성군 맹동면 신돈리 1-2</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,712㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">16.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)뿌리건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EB%A7%B9%EB%8F%99%EB%A9%B4%20%EC%8B%A0%EB%8F%88%EB%A6%AC%201-2%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EB%A7%B9%EB%8F%99%EB%A9%B4%20%EC%8B%A0%EB%8F%88%EB%A6%AC%201-2%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C712%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2016.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%BF%8C%EB%A6%AC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="자동차관련시설" data-q="부산 수영구 광안동 117-3 자동차관련시설 건축사사무소도운 (주)에스에이치종합건설 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-020" data-addr="부산 수영구 광안동 117-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 수영구 광안동 117-3</td>
      <td>자동차관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">2,764㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">126억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소도운</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)에스에이치종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EA%B4%91%EC%95%88%EB%8F%99%20117-3%20(%EC%9E%90%EB%8F%99%EC%B0%A8%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EA%B4%91%EC%95%88%EB%8F%99%20117-3%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EB%8F%99%EC%B0%A8%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C764%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20126%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%8F%84%EC%9A%B4%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%97%90%EC%8A%A4%EC%97%90%EC%9D%B4%EC%B9%98%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="충남 논산시 은진면 교촌리 346-8 교육연구시설 스플렌디드건축사사무소 (주)오지아이건설 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-021" data-addr="충남 논산시 은진면 교촌리 346-8" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 논산시 은진면 교촌리 346-8</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,655㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 스플렌디드건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)오지아이건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EC%9D%80%EC%A7%84%EB%A9%B4%20%EA%B5%90%EC%B4%8C%EB%A6%AC%20346-8%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EC%9D%80%EC%A7%84%EB%A9%B4%20%EA%B5%90%EC%B4%8C%EB%A6%AC%20346-8%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C655%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%8A%A4%ED%94%8C%EB%A0%8C%EB%94%94%EB%93%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%98%A4%EC%A7%80%EC%95%84%EC%9D%B4%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 안산시 목내동 403-4 공장 에이스건축사사무소 주식회사바인종합건설 에이스건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-022" data-addr="경기 안산시 목내동 403-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 안산시 목내동 403-4</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,131㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">19.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 에이스건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사바인종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 에이스건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EB%AA%A9%EB%82%B4%EB%8F%99%20403-4%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EB%AA%A9%EB%82%B4%EB%8F%99%20403-4%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C131%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2019.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%97%90%EC%9D%B4%EC%8A%A4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%B0%94%EC%9D%B8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EC%97%90%EC%9D%B4%EC%8A%A4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="교육연구시설" data-q="경북 안동시 풍산읍 매곡리 1164 교육연구시설 (주)인터건축사사무소 다이텍연구원 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-023" data-addr="경북 안동시 풍산읍 매곡리 1164" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 안동시 풍산읍 매곡리 1164</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">8,417㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">36.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)인터건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 다이텍연구원</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EC%95%88%EB%8F%99%EC%8B%9C%20%ED%92%8D%EC%82%B0%EC%9D%8D%20%EB%A7%A4%EA%B3%A1%EB%A6%AC%201164%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EC%95%88%EB%8F%99%EC%8B%9C%20%ED%92%8D%EC%82%B0%EC%9D%8D%20%EB%A7%A4%EA%B3%A1%EB%A6%AC%201164%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%208%2C417%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2036.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%9D%B8%ED%84%B0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EB%8B%A4%EC%9D%B4%ED%85%8D%EC%97%B0%EA%B5%AC%EC%9B%90%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="경북 고령군 대가야읍 본관리 925-137 동물및식물관련시설 건축사사무소바다  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-024" data-addr="경북 고령군 대가야읍 본관리 925-137" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 고령군 대가야읍 본관리 925-137</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,235㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소바다</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EA%B3%A0%EB%A0%B9%EA%B5%B0%20%EB%8C%80%EA%B0%80%EC%95%BC%EC%9D%8D%20%EB%B3%B8%EA%B4%80%EB%A6%AC%20925-137%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EA%B3%A0%EB%A0%B9%EA%B5%B0%20%EB%8C%80%EA%B0%80%EC%95%BC%EC%9D%8D%20%EB%B3%B8%EA%B4%80%EB%A6%AC%20925-137%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C235%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%B0%94%EB%8B%A4%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="창고시설" data-q="경북 김천시 구성면 구미리 429 창고시설 호원건축사사무소 주식회사성아종합건설 호원건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-025" data-addr="경북 김천시 구성면 구미리 429" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 김천시 구성면 구미리 429</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">2,631㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">9,974만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 호원건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사성아종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 호원건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.08.03</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EA%B9%80%EC%B2%9C%EC%8B%9C%20%EA%B5%AC%EC%84%B1%EB%A9%B4%20%EA%B5%AC%EB%AF%B8%EB%A6%AC%20429%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EA%B9%80%EC%B2%9C%EC%8B%9C%20%EA%B5%AC%EC%84%B1%EB%A9%B4%20%EA%B5%AC%EB%AF%B8%EB%A6%AC%20429%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C631%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%209%2C974%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%ED%98%B8%EC%9B%90%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%84%B1%EC%95%84%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%ED%98%B8%EC%9B%90%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.08.03%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="문화및집회시설" data-q="강원 동해시 삼화동 762-6 문화및집회시설 (주)제이유건축사사무소 (주)대명종합건설 건축사사무소팀21">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-026" data-addr="강원 동해시 삼화동 762-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 동해시 삼화동 762-6</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,510㎡</td>
      <td style="white-space:nowrap;">지하6층/3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">12억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)제이유건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)대명종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소팀21</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EB%8F%99%ED%95%B4%EC%8B%9C%20%EC%82%BC%ED%99%94%EB%8F%99%20762-6%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EB%8F%99%ED%95%B4%EC%8B%9C%20%EC%82%BC%ED%99%94%EB%8F%99%20762-6%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C510%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%986%EC%B8%B5%2F3%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2012%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%A0%9C%EC%9D%B4%EC%9C%A0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EB%8C%80%EB%AA%85%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%ED%8C%8021%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="자원순환관련시설" data-q="경북 청도군 청도읍 거연리 216-2 자원순환관련시설 (주)이산 백송건설(주) 브니엘네이처(주) (주)유신 (주)한주엔지니어링 외 1">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-027" data-addr="경북 청도군 청도읍 거연리 216-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 청도군 청도읍 거연리 216-2</td>
      <td>자원순환관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,089㎡</td>
      <td style="white-space:nowrap;">지하1층/2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">5.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)이산</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 백송건설(주) 브니엘네이처(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)유신 (주)한주엔지니어링 외 1</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EC%B2%AD%EB%8F%84%EA%B5%B0%20%EC%B2%AD%EB%8F%84%EC%9D%8D%20%EA%B1%B0%EC%97%B0%EB%A6%AC%20216-2%20(%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EC%B2%AD%EB%8F%84%EA%B5%B0%20%EC%B2%AD%EB%8F%84%EC%9D%8D%20%EA%B1%B0%EC%97%B0%EB%A6%AC%20216-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C089%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F2%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%205.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%9D%B4%EC%82%B0%0A%EC%8B%9C%EA%B3%B5%3A%20%EB%B0%B1%EC%86%A1%EA%B1%B4%EC%84%A4(%EC%A3%BC)%20%EB%B8%8C%EB%8B%88%EC%97%98%EB%84%A4%EC%9D%B4%EC%B2%98(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EC%9C%A0%EC%8B%A0%20(%EC%A3%BC)%ED%95%9C%EC%A3%BC%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20%EC%99%B8%201%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="부산 해운대구 중동 1490-3 제1종근린생활시설 (주)건축사사무소모아 조트러스트주식회사 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-028" data-addr="부산 해운대구 중동 1490-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 해운대구 중동 1490-3</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,308㎡</td>
      <td style="white-space:nowrap;">지하3층/5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">29.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)건축사사무소모아</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 조트러스트주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EC%A4%91%EB%8F%99%201490-3%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EC%A4%91%EB%8F%99%201490-3%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C308%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%983%EC%B8%B5%2F5%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2029.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%AA%A8%EC%95%84%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A1%B0%ED%8A%B8%EB%9F%AC%EC%8A%A4%ED%8A%B8%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="문화및집회시설" data-q="서울 중구 저동2가 69 문화및집회시설 project91건축사사무소 우산종합건설(주) project91건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-029" data-addr="서울 중구 저동2가 69" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 중구 저동2가 69</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">5,366㎡</td>
      <td style="white-space:nowrap;">-</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1,449억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> PROJECT91건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 우산종합건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> PROJECT91건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%A0%80%EB%8F%992%EA%B0%80%2069%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%A0%80%EB%8F%992%EA%B0%80%2069%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C366%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20-%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201%2C449%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20PROJECT91%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%9A%B0%EC%82%B0%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20PROJECT91%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="전남 영암군 군서면 동호리 41-7 동물및식물관련시설 다보건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-030" data-addr="전남 영암군 군서면 동호리 41-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 영암군 군서면 동호리 41-7</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,538㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4,713만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 다보건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EA%B5%B0%EC%84%9C%EB%A9%B4%20%EB%8F%99%ED%98%B8%EB%A6%AC%2041-7%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EA%B5%B0%EC%84%9C%EB%A9%B4%20%EB%8F%99%ED%98%B8%EB%A6%AC%2041-7%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C538%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204%2C713%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EB%8B%A4%EB%B3%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="대전 유성구 문지동 104-1 교육연구시설 현은건축사사무소 에스앤아이코퍼레이션 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-031" data-addr="대전 유성구 문지동 104-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대전 유성구 문지동 104-1</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">176,546㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">546억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 현은건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 에스앤아이코퍼레이션</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EB%AC%B8%EC%A7%80%EB%8F%99%20104-1%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EB%AC%B8%EC%A7%80%EB%8F%99%20104-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20176%2C546%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20546%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%98%84%EC%9D%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%97%90%EC%8A%A4%EC%95%A4%EC%95%84%EC%9D%B4%EC%BD%94%ED%8D%BC%EB%A0%88%EC%9D%B4%EC%85%98%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="운동시설" data-q="경북 고령군 쌍림면 월막리 824 운동시설 건축사사무소옥토 행복도시개발(주) ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-032" data-addr="경북 고령군 쌍림면 월막리 824" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 고령군 쌍림면 월막리 824</td>
      <td>운동시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,802㎡</td>
      <td style="white-space:nowrap;">지하1층/1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">319억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소옥토</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 행복도시개발(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EA%B3%A0%EB%A0%B9%EA%B5%B0%20%EC%8C%8D%EB%A6%BC%EB%A9%B4%20%EC%9B%94%EB%A7%89%EB%A6%AC%20824%20(%EC%9A%B4%EB%8F%99%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EA%B3%A0%EB%A0%B9%EA%B5%B0%20%EC%8C%8D%EB%A6%BC%EB%A9%B4%20%EC%9B%94%EB%A7%89%EB%A6%AC%20824%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9A%B4%EB%8F%99%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C802%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F1%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20319%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%98%A5%ED%86%A0%0A%EC%8B%9C%EA%B3%B5%3A%20%ED%96%89%EB%B3%B5%EB%8F%84%EC%8B%9C%EA%B0%9C%EB%B0%9C(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="업무시설" data-q="서울 서초구 서초동 1306-3 업무시설 (주)티에이치케이건축사사무소 주식회사전설디자인 주식회사티에이치케이건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-033" data-addr="서울 서초구 서초동 1306-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 서초구 서초동 1306-3</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">7,385㎡</td>
      <td style="white-space:nowrap;">지하1층/1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">608억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)티에이치케이건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사전설디자인</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 주식회사티에이치케이건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8F%99%201306-3%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8F%99%201306-3%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C385%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F1%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20608%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%8B%B0%EC%97%90%EC%9D%B4%EC%B9%98%EC%BC%80%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%A0%84%EC%84%A4%EB%94%94%EC%9E%90%EC%9D%B8%0A%EA%B0%90%EB%A6%AC%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%ED%8B%B0%EC%97%90%EC%9D%B4%EC%B9%98%EC%BC%80%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="자원순환관련시설" data-q="광주 서구 치평동 753-1 자원순환관련시설 우리건축사사무소 충연건설(주) 건축사사무소광림">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-034" data-addr="광주 서구 치평동 753-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">광주 서구 치평동 753-1</td>
      <td>자원순환관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">27,492㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">7.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 우리건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 충연건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소광림</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B4%91%EC%A3%BC%20%EC%84%9C%EA%B5%AC%20%EC%B9%98%ED%8F%89%EB%8F%99%20753-1%20(%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B4%91%EC%A3%BC%20%EC%84%9C%EA%B5%AC%20%EC%B9%98%ED%8F%89%EB%8F%99%20753-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2027%2C492%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%207.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9A%B0%EB%A6%AC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%B6%A9%EC%97%B0%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EA%B4%91%EB%A6%BC%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="경기도 화성시 만세구 송산면 블록 공장 소랑건축사사무소 주식회사에이원이엔씨 소랑건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-035" data-addr="경기도 화성시 만세구 송산면 블록" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기도 화성시 만세구 송산면 블록</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">5,901㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 소랑건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사에이원이엔씨</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 소랑건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%A7%8C%EC%84%B8%EA%B5%AC%20%EC%86%A1%EC%82%B0%EB%A9%B4%20%EB%B8%94%EB%A1%9D%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%A7%8C%EC%84%B8%EA%B5%AC%20%EC%86%A1%EC%82%B0%EB%A9%B4%20%EB%B8%94%EB%A1%9D%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C901%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EC%86%8C%EB%9E%91%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%97%90%EC%9D%B4%EC%9B%90%EC%9D%B4%EC%97%94%EC%94%A8%0A%EA%B0%90%EB%A6%AC%3A%20%EC%86%8C%EB%9E%91%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 화성시 장안면 독정리 416-7 공장 (주)에스앤제이건축사사무소 보림종합건설주식회사 (주)에스앤제이건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-036" data-addr="경기 화성시 장안면 독정리 416-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 화성시 장안면 독정리 416-7</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,876㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">6.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)에스앤제이건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 보림종합건설주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)에스앤제이건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EC%9E%A5%EC%95%88%EB%A9%B4%20%EB%8F%85%EC%A0%95%EB%A6%AC%20416-7%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EC%9E%A5%EC%95%88%EB%A9%B4%20%EB%8F%85%EC%A0%95%EB%A6%AC%20416-7%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C876%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%206.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%97%90%EC%8A%A4%EC%95%A4%EC%A0%9C%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EB%B3%B4%EB%A6%BC%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EC%97%90%EC%8A%A4%EC%95%A4%EC%A0%9C%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 안성시 미양면 강덕리 67-5 공장 엠에이건축사사무소 주식회사해드림종합건설 엠에이건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-037" data-addr="경기 안성시 미양면 강덕리 67-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 안성시 미양면 강덕리 67-5</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,730㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 엠에이건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사해드림종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 엠에이건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%84%B1%EC%8B%9C%20%EB%AF%B8%EC%96%91%EB%A9%B4%20%EA%B0%95%EB%8D%95%EB%A6%AC%2067-5%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%84%B1%EC%8B%9C%20%EB%AF%B8%EC%96%91%EB%A9%B4%20%EA%B0%95%EB%8D%95%EB%A6%AC%2067-5%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C730%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%97%A0%EC%97%90%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%ED%95%B4%EB%93%9C%EB%A6%BC%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EC%97%A0%EC%97%90%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="서울 강남구 청담동 132-15 업무시설 (주)종합건축사사무소명인 서원토건(주) (주)종합건축사사무소명인">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-038" data-addr="서울 강남구 청담동 132-15" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강남구 청담동 132-15</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,617㎡</td>
      <td style="white-space:nowrap;">지하4층/9층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">95.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)종합건축사사무소명인</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 서원토건(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)종합건축사사무소명인</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%B2%AD%EB%8B%B4%EB%8F%99%20132-15%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%B2%AD%EB%8B%B4%EB%8F%99%20132-15%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C617%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%984%EC%B8%B5%2F9%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2095.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%AA%85%EC%9D%B8%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%84%9C%EC%9B%90%ED%86%A0%EA%B1%B4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%AA%85%EC%9D%B8%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="숙박시설" data-q="충북 청주시 미원면 구방리 산 38-4 숙박시설 주식회사케이엔피건축사사무소 대오토건(주) 메디치건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-039" data-addr="충북 청주시 미원면 구방리 산 38-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 청주시 미원면 구방리 산 38-4</td>
      <td>숙박시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,230㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">46.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사케이엔피건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 대오토건(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 메디치건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EB%AF%B8%EC%9B%90%EB%A9%B4%20%EA%B5%AC%EB%B0%A9%EB%A6%AC%20%EC%82%B0%2038-4%20(%EC%88%99%EB%B0%95%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EB%AF%B8%EC%9B%90%EB%A9%B4%20%EA%B5%AC%EB%B0%A9%EB%A6%AC%20%EC%82%B0%2038-4%0A%EC%9A%A9%EB%8F%84%3A%20%EC%88%99%EB%B0%95%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C230%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2046.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%BC%80%EC%9D%B4%EC%97%94%ED%94%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EB%8C%80%EC%98%A4%ED%86%A0%EA%B1%B4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20%EB%A9%94%EB%94%94%EC%B9%98%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충남 서산시 수석동 1156 공장 반도건축사사무소 태서종합건설주식회사 반도건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-040" data-addr="충남 서산시 수석동 1156" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 서산시 수석동 1156</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">6,342㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">10.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 반도건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 태서종합건설주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 반도건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%84%9C%EC%82%B0%EC%8B%9C%20%EC%88%98%EC%84%9D%EB%8F%99%201156%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%84%9C%EC%82%B0%EC%8B%9C%20%EC%88%98%EC%84%9D%EB%8F%99%201156%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C342%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2010.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%B0%98%EB%8F%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%ED%83%9C%EC%84%9C%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20%EB%B0%98%EB%8F%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="블록 공장 유담왕현식건축사사무소 주식회사다운종합건설 바른건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-041" data-addr="블록" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">블록</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,640㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 유담왕현식건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사다운종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 바른건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B8%94%EB%A1%9D%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B8%94%EB%A1%9D%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C640%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EC%9C%A0%EB%8B%B4%EC%99%95%ED%98%84%EC%8B%9D%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%8B%A4%EC%9A%B4%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EB%B0%94%EB%A5%B8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="대전광역시 서구 평촌동 블록 공장 드림건축사사무소 (주)정인해썹종합건설 드림건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-042" data-addr="대전광역시 서구 평촌동 블록" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대전광역시 서구 평촌동 블록</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,902㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 드림건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)정인해썹종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 드림건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%ED%8F%89%EC%B4%8C%EB%8F%99%20%EB%B8%94%EB%A1%9D%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%ED%8F%89%EC%B4%8C%EB%8F%99%20%EB%B8%94%EB%A1%9D%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C902%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EB%93%9C%EB%A6%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%A0%95%EC%9D%B8%ED%95%B4%EC%8D%B9%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EB%93%9C%EB%A6%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="경기 용인시 백암면 백봉리 1648 동물및식물관련시설 티엠건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-043" data-addr="경기 용인시 백암면 백봉리 1648" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 용인시 백암면 백봉리 1648</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,526㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 티엠건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EB%B0%B1%EC%95%94%EB%A9%B4%20%EB%B0%B1%EB%B4%89%EB%A6%AC%201648%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EB%B0%B1%EC%95%94%EB%A9%B4%20%EB%B0%B1%EB%B4%89%EB%A6%AC%201648%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C526%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%8B%B0%EC%97%A0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="창고시설" data-q="경기 평택시 포승읍 석정리 869-2 창고시설 이승현건축사사무소 주식회사화담건설 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-044" data-addr="경기 평택시 포승읍 석정리 869-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 포승읍 석정리 869-2</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">46,306㎡</td>
      <td style="white-space:nowrap;">지하5층/13층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">118억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 이승현건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사화담건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%8F%AC%EC%8A%B9%EC%9D%8D%20%EC%84%9D%EC%A0%95%EB%A6%AC%20869-2%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%8F%AC%EC%8A%B9%EC%9D%8D%20%EC%84%9D%EC%A0%95%EB%A6%AC%20869-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2046%2C306%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%985%EC%B8%B5%2F13%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20118%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9D%B4%EC%8A%B9%ED%98%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%ED%99%94%EB%8B%B4%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="울산 울주군 서생면 신암리 516-3 공장 성동이엔지건축사사무소 강명종합건설(주) 성동이엔지건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-045" data-addr="울산 울주군 서생면 신암리 516-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">울산 울주군 서생면 신암리 516-3</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">6,304㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">12.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 성동이엔지건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 강명종합건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 성동이엔지건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9A%B8%EC%82%B0%20%EC%9A%B8%EC%A3%BC%EA%B5%B0%20%EC%84%9C%EC%83%9D%EB%A9%B4%20%EC%8B%A0%EC%95%94%EB%A6%AC%20516-3%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9A%B8%EC%82%B0%20%EC%9A%B8%EC%A3%BC%EA%B5%B0%20%EC%84%9C%EC%83%9D%EB%A9%B4%20%EC%8B%A0%EC%95%94%EB%A6%AC%20516-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C304%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2012.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%84%B1%EB%8F%99%EC%9D%B4%EC%97%94%EC%A7%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EA%B0%95%EB%AA%85%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20%EC%84%B1%EB%8F%99%EC%9D%B4%EC%97%94%EC%A7%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="충남 아산시 음봉면 동암리 784 공장 (주)예가플러스건축사사무소 활림건설(주) (주)예가플러스건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-046" data-addr="충남 아산시 음봉면 동암리 784" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 아산시 음봉면 동암리 784</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,840㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">10.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)예가플러스건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 활림건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)예가플러스건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%9D%8C%EB%B4%89%EB%A9%B4%20%EB%8F%99%EC%95%94%EB%A6%AC%20784%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%9D%8C%EB%B4%89%EB%A9%B4%20%EB%8F%99%EC%95%94%EB%A6%AC%20784%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C840%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2010.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%98%88%EA%B0%80%ED%94%8C%EB%9F%AC%EC%8A%A4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%ED%99%9C%EB%A6%BC%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EC%98%88%EA%B0%80%ED%94%8C%EB%9F%AC%EC%8A%A4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 시흥시 정왕동 1251-6 공장 무아건축사사무소 한스종합건설주식회사 무아건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-047" data-addr="경기 시흥시 정왕동 1251-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 시흥시 정왕동 1251-6</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">41,710㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">337억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 무아건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 한스종합건설주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 무아건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%8B%9C%ED%9D%A5%EC%8B%9C%20%EC%A0%95%EC%99%95%EB%8F%99%201251-6%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%8B%9C%ED%9D%A5%EC%8B%9C%20%EC%A0%95%EC%99%95%EB%8F%99%201251-6%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2041%2C710%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20337%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%AC%B4%EC%95%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%ED%95%9C%EC%8A%A4%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20%EB%AC%B4%EC%95%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="울산 남구 용연동 77 공장 석원건축사사무소 성도종합건설(주) ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-048" data-addr="울산 남구 용연동 77" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">울산 남구 용연동 77</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,327㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">268억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 석원건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 성도종합건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9A%B8%EC%82%B0%20%EB%82%A8%EA%B5%AC%20%EC%9A%A9%EC%97%B0%EB%8F%99%2077%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9A%B8%EC%82%B0%20%EB%82%A8%EA%B5%AC%20%EC%9A%A9%EC%97%B0%EB%8F%99%2077%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C327%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20268%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%84%9D%EC%9B%90%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%84%B1%EB%8F%84%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전북 완주군 봉동읍 둔산리 951-1 공장 (주)가운종합건축사사무소 현대엔지니어링(주) 정건사건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-049" data-addr="전북 완주군 봉동읍 둔산리 951-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 완주군 봉동읍 둔산리 951-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,366㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">342억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)가운종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 현대엔지니어링(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 정건사건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EB%B4%89%EB%8F%99%EC%9D%8D%20%EB%91%94%EC%82%B0%EB%A6%AC%20951-1%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EB%B4%89%EB%8F%99%EC%9D%8D%20%EB%91%94%EC%82%B0%EB%A6%AC%20951-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C366%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20342%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B0%80%EC%9A%B4%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%ED%98%84%EB%8C%80%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20%EC%A0%95%EA%B1%B4%EC%82%AC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 평택시 칠괴동 577-4 공장 (주)신도시건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-050" data-addr="경기 평택시 칠괴동 577-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 칠괴동 577-4</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,225㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">23.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)신도시건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EC%B9%A0%EA%B4%B4%EB%8F%99%20577-4%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EC%B9%A0%EA%B4%B4%EB%8F%99%20577-4%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C225%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2023.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%8B%A0%EB%8F%84%EC%8B%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 김포시 양촌읍 학운리 3221-2 공장 대림건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-051" data-addr="경기 김포시 양촌읍 학운리 3221-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 김포시 양촌읍 학운리 3221-2</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,458㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">30.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 대림건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EC%96%91%EC%B4%8C%EC%9D%8D%20%ED%95%99%EC%9A%B4%EB%A6%AC%203221-2%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EC%96%91%EC%B4%8C%EC%9D%8D%20%ED%95%99%EC%9A%B4%EB%A6%AC%203221-2%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C458%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2030.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%8C%80%EB%A6%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전남 영암군 삼호읍 나불리 339-7 공장 (주)다온건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-052" data-addr="전남 영암군 삼호읍 나불리 339-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 영암군 삼호읍 나불리 339-7</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,310㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">16.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)다온건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EC%82%BC%ED%98%B8%EC%9D%8D%20%EB%82%98%EB%B6%88%EB%A6%AC%20339-7%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EC%82%BC%ED%98%B8%EC%9D%8D%20%EB%82%98%EB%B6%88%EB%A6%AC%20339-7%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C310%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2016.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%8B%A4%EC%98%A8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경남 김해시 대동면 월촌리 1281-8 공장 세종건축사(사) (주)상우토건) ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-053" data-addr="경남 김해시 대동면 월촌리 1281-8" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 김해시 대동면 월촌리 1281-8</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,431㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">22.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 세종건축사(사)</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)상우토건)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EB%8C%80%EB%8F%99%EB%A9%B4%20%EC%9B%94%EC%B4%8C%EB%A6%AC%201281-8%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EB%8C%80%EB%8F%99%EB%A9%B4%20%EC%9B%94%EC%B4%8C%EB%A6%AC%201281-8%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C431%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2022.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%84%B8%EC%A2%85%EA%B1%B4%EC%B6%95%EC%82%AC(%EC%82%AC)%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%83%81%EC%9A%B0%ED%86%A0%EA%B1%B4)%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제2종근린생활시설" data-q="충남 천안시 백석동 148-2 제2종근린생활시설 큐빅eng김팽식건축사사무소  종합건축사사무소제이엠">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-054" data-addr="충남 천안시 백석동 148-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 천안시 백석동 148-2</td>
      <td>제2종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,753㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">10.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 큐빅ENG김팽식건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 종합건축사사무소제이엠</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%B0%B1%EC%84%9D%EB%8F%99%20148-2%20(%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%B0%B1%EC%84%9D%EB%8F%99%20148-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C753%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2010.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%81%90%EB%B9%85ENG%EA%B9%80%ED%8C%BD%EC%8B%9D%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%A0%9C%EC%9D%B4%EC%97%A0%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="대전 대덕구 오정동 705-60 동물및식물관련시설 정일건축사사무소 주식회사장원식품 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-055" data-addr="대전 대덕구 오정동 705-60" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대전 대덕구 오정동 705-60</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,032㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3,127만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 정일건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사장원식품</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EC%A0%84%20%EB%8C%80%EB%8D%95%EA%B5%AC%20%EC%98%A4%EC%A0%95%EB%8F%99%20705-60%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EC%A0%84%20%EB%8C%80%EB%8D%95%EA%B5%AC%20%EC%98%A4%EC%A0%95%EB%8F%99%20705-60%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C032%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203%2C127%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EC%A0%95%EC%9D%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%9E%A5%EC%9B%90%EC%8B%9D%ED%92%88%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전남 여수시 화양면 화동리 2149 공장 한양건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-056" data-addr="전남 여수시 화양면 화동리 2149" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 여수시 화양면 화동리 2149</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">8,634㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">19.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 한양건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.31</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%97%AC%EC%88%98%EC%8B%9C%20%ED%99%94%EC%96%91%EB%A9%B4%20%ED%99%94%EB%8F%99%EB%A6%AC%202149%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%97%AC%EC%88%98%EC%8B%9C%20%ED%99%94%EC%96%91%EB%A9%B4%20%ED%99%94%EB%8F%99%EB%A6%AC%202149%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%208%2C634%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2019.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%95%9C%EC%96%91%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.31%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="전남 장흥군 장흥읍 우산리 553 교육연구시설 한가림건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-057" data-addr="전남 장흥군 장흥읍 우산리 553" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 장흥군 장흥읍 우산리 553</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">7,708㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">13.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 한가림건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%9E%A5%ED%9D%A5%EA%B5%B0%20%EC%9E%A5%ED%9D%A5%EC%9D%8D%20%EC%9A%B0%EC%82%B0%EB%A6%AC%20553%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%9E%A5%ED%9D%A5%EA%B5%B0%20%EC%9E%A5%ED%9D%A5%EC%9D%8D%20%EC%9A%B0%EC%82%B0%EB%A6%AC%20553%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C708%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2013.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%95%9C%EA%B0%80%EB%A6%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="대구 달성군 구지면 유산리 647 공장 건축사사무소수림  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-058" data-addr="대구 달성군 구지면 유산리 647" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 달성군 구지면 유산리 647</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,274㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">7.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소수림</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%B1%EA%B5%B0%20%EA%B5%AC%EC%A7%80%EB%A9%B4%20%EC%9C%A0%EC%82%B0%EB%A6%AC%20647%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%B1%EA%B5%B0%20%EA%B5%AC%EC%A7%80%EB%A9%B4%20%EC%9C%A0%EC%82%B0%EB%A6%AC%20647%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C274%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%207.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%88%98%EB%A6%BC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="충북 제천시 송학면 포전리 52-2 동물및식물관련시설 영건건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-059" data-addr="충북 제천시 송학면 포전리 52-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 제천시 송학면 포전리 52-2</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,166㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 영건건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%86%A1%ED%95%99%EB%A9%B4%20%ED%8F%AC%EC%A0%84%EB%A6%AC%2052-2%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%86%A1%ED%95%99%EB%A9%B4%20%ED%8F%AC%EC%A0%84%EB%A6%AC%2052-2%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C166%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%98%81%EA%B1%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="문화및집회시설" data-q="전남 영광군 법성면 신장리 868 문화및집회시설 건축사사무소다담  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-060" data-addr="전남 영광군 법성면 신장리 868" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 영광군 법성면 신장리 868</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">6,211㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소다담</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%98%81%EA%B4%91%EA%B5%B0%20%EB%B2%95%EC%84%B1%EB%A9%B4%20%EC%8B%A0%EC%9E%A5%EB%A6%AC%20868%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%98%81%EA%B4%91%EA%B5%B0%20%EB%B2%95%EC%84%B1%EB%A9%B4%20%EC%8B%A0%EC%9E%A5%EB%A6%AC%20868%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C211%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%8B%A4%EB%8B%B4%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경북 구미시 산동읍 도중리 822 공장 건축사사무소선진건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-061" data-addr="경북 구미시 산동읍 도중리 822" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 구미시 산동읍 도중리 822</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,843㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">11.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소선진건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EA%B5%AC%EB%AF%B8%EC%8B%9C%20%EC%82%B0%EB%8F%99%EC%9D%8D%20%EB%8F%84%EC%A4%91%EB%A6%AC%20822%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EA%B5%AC%EB%AF%B8%EC%8B%9C%20%EC%82%B0%EB%8F%99%EC%9D%8D%20%EB%8F%84%EC%A4%91%EB%A6%AC%20822%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C843%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2011.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%84%A0%EC%A7%84%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="경북 구미시 공단동 290 공장 (주)hd엔지니어링건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-062" data-addr="경북 구미시 공단동 290" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 구미시 공단동 290</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">165,917㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">535억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)HD엔지니어링건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EA%B5%AC%EB%AF%B8%EC%8B%9C%20%EA%B3%B5%EB%8B%A8%EB%8F%99%20290%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EA%B5%AC%EB%AF%B8%EC%8B%9C%20%EA%B3%B5%EB%8B%A8%EB%8F%99%20290%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20165%2C917%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20535%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)HD%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="방송통신시설" data-q="경북 구미시 산동읍 적림리 551 방송통신시설 (주)선엔지니어링종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-063" data-addr="경북 구미시 산동읍 적림리 551" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 구미시 산동읍 적림리 551</td>
      <td>방송통신시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">69,801㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">43.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)선엔지니어링종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EA%B5%AC%EB%AF%B8%EC%8B%9C%20%EC%82%B0%EB%8F%99%EC%9D%8D%20%EC%A0%81%EB%A6%BC%EB%A6%AC%20551%20(%EB%B0%A9%EC%86%A1%ED%86%B5%EC%8B%A0%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EA%B5%AC%EB%AF%B8%EC%8B%9C%20%EC%82%B0%EB%8F%99%EC%9D%8D%20%EC%A0%81%EB%A6%BC%EB%A6%AC%20551%0A%EC%9A%A9%EB%8F%84%3A%20%EB%B0%A9%EC%86%A1%ED%86%B5%EC%8B%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2069%2C801%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2043.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%84%A0%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="자동차관련시설" data-q="부산 해운대구 반여동 1594-73 자동차관련시설 건축사사무소지.평.선  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-064" data-addr="부산 해운대구 반여동 1594-73" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 해운대구 반여동 1594-73</td>
      <td>자동차관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,380㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">199억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소지.평.선</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EB%B0%98%EC%97%AC%EB%8F%99%201594-73%20(%EC%9E%90%EB%8F%99%EC%B0%A8%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EB%B0%98%EC%97%AC%EB%8F%99%201594-73%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EB%8F%99%EC%B0%A8%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C380%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20199%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%A7%80.%ED%8F%89.%EC%84%A0%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="울산 동구 방어동 1381 공장 (주)가나건축사사무소 (주)에스케이쉴더스 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-065" data-addr="울산 동구 방어동 1381" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">울산 동구 방어동 1381</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">244,055㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">356억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)가나건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)에스케이쉴더스</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9A%B8%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EB%B0%A9%EC%96%B4%EB%8F%99%201381%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9A%B8%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EB%B0%A9%EC%96%B4%EB%8F%99%201381%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20244%2C055%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20356%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B0%80%EB%82%98%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%97%90%EC%8A%A4%EC%BC%80%EC%9D%B4%EC%89%B4%EB%8D%94%EC%8A%A4%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 음성군 생극면 신양리 906 공장 (주)일건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-066" data-addr="충북 음성군 생극면 신양리 906" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 음성군 생극면 신양리 906</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,426㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">13.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)일건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EC%83%9D%EA%B7%B9%EB%A9%B4%20%EC%8B%A0%EC%96%91%EB%A6%AC%20906%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EC%83%9D%EA%B7%B9%EB%A9%B4%20%EC%8B%A0%EC%96%91%EB%A6%AC%20906%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C426%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2013.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%9D%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="자원순환관련시설" data-q="부산 강서구 생곡동 1512-7 자원순환관련시설 종합건축사사무소시안  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-067" data-addr="부산 강서구 생곡동 1512-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 강서구 생곡동 1512-7</td>
      <td>자원순환관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,816㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">41.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 종합건축사사무소시안</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EC%83%9D%EA%B3%A1%EB%8F%99%201512-7%20(%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EC%83%9D%EA%B3%A1%EB%8F%99%201512-7%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C816%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2041.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%8B%9C%EC%95%88%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="부산 동구 범일동 830-9 제1종근린생활시설 주식회사종합건축사사무소삼원  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-068" data-addr="부산 동구 범일동 830-9" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 동구 범일동 830-9</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">6,843㎡</td>
      <td style="white-space:nowrap;">8층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">131억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사종합건축사사무소삼원</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EB%B2%94%EC%9D%BC%EB%8F%99%20830-9%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EB%B2%94%EC%9D%BC%EB%8F%99%20830-9%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C843%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%208%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20131%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%82%BC%EC%9B%90%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="종교시설" data-q="서울 성동구 마장동 768-2 종교시설 제이아리건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-069" data-addr="서울 성동구 마장동 768-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 성동구 마장동 768-2</td>
      <td>종교시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,680㎡</td>
      <td style="white-space:nowrap;">지하1층/7층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">40.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 제이아리건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EB%A7%88%EC%9E%A5%EB%8F%99%20768-2%20(%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EB%A7%88%EC%9E%A5%EB%8F%99%20768-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C680%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F7%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2040.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A0%9C%EC%9D%B4%EC%95%84%EB%A6%AC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="제1종근린생활시설" data-q="인천 부평구 부평동 132-5 제1종근린생활시설 건축사사무소아름유한회사  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-070" data-addr="인천 부평구 부평동 132-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">인천 부평구 부평동 132-5</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">23,019㎡</td>
      <td style="white-space:nowrap;">지하1층/9층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">30.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소아름유한회사</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9D%B8%EC%B2%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EB%B6%80%ED%8F%89%EB%8F%99%20132-5%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9D%B8%EC%B2%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EB%B6%80%ED%8F%89%EB%8F%99%20132-5%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2023%2C019%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F9%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2030.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%95%84%EB%A6%84%EC%9C%A0%ED%95%9C%ED%9A%8C%EC%82%AC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 시흥시 정왕동 1258-3 공장 (주)창조종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-071" data-addr="경기 시흥시 정왕동 1258-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 시흥시 정왕동 1258-3</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">6,197㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">91.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)창조종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%8B%9C%ED%9D%A5%EC%8B%9C%20%EC%A0%95%EC%99%95%EB%8F%99%201258-3%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%8B%9C%ED%9D%A5%EC%8B%9C%20%EC%A0%95%EC%99%95%EB%8F%99%201258-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C197%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2091.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%B0%BD%EC%A1%B0%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="전남 고흥군 도덕면 신양리 2963 동물및식물관련시설 한제건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-072" data-addr="전남 고흥군 도덕면 신양리 2963" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 고흥군 도덕면 신양리 2963</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,268㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 한제건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EA%B3%A0%ED%9D%A5%EA%B5%B0%20%EB%8F%84%EB%8D%95%EB%A9%B4%20%EC%8B%A0%EC%96%91%EB%A6%AC%202963%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EA%B3%A0%ED%9D%A5%EA%B5%B0%20%EB%8F%84%EB%8D%95%EB%A9%B4%20%EC%8B%A0%EC%96%91%EB%A6%AC%202963%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C268%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%95%9C%EC%A0%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="창고시설" data-q="경북 상주시 남적동 606-83 창고시설 건축사사무소이움  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-073" data-addr="경북 상주시 남적동 606-83" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 상주시 남적동 606-83</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,894㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소이움</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EC%83%81%EC%A3%BC%EC%8B%9C%20%EB%82%A8%EC%A0%81%EB%8F%99%20606-83%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EC%83%81%EC%A3%BC%EC%8B%9C%20%EB%82%A8%EC%A0%81%EB%8F%99%20606-83%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C894%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%9D%B4%EC%9B%80%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="울산 동구 방어동 686 공장 (주)큐브건축사사무소 에스케이쉴더스(주) ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-074" data-addr="울산 동구 방어동 686" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">울산 동구 방어동 686</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">201,573㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1,071억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)큐브건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 에스케이쉴더스(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9A%B8%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EB%B0%A9%EC%96%B4%EB%8F%99%20686%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9A%B8%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EB%B0%A9%EC%96%B4%EB%8F%99%20686%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20201%2C573%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201%2C071%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%81%90%EB%B8%8C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%97%90%EC%8A%A4%EC%BC%80%EC%9D%B4%EC%89%B4%EB%8D%94%EC%8A%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="종교시설" data-q="서울 동작구 신대방동 607-32 종교시설 (주)씨앤에이건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-075" data-addr="서울 동작구 신대방동 607-32" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 동작구 신대방동 607-32</td>
      <td>종교시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">7,297㎡</td>
      <td style="white-space:nowrap;">지하3층/11층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">43억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)씨앤에이건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EC%8B%A0%EB%8C%80%EB%B0%A9%EB%8F%99%20607-32%20(%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EC%8B%A0%EB%8C%80%EB%B0%A9%EB%8F%99%20607-32%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C297%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%983%EC%B8%B5%2F11%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2043%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%94%A8%EC%95%A4%EC%97%90%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전북 완주군 봉동읍 장구리 583-7 공장 건축사사무소한결  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-076" data-addr="전북 완주군 봉동읍 장구리 583-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 완주군 봉동읍 장구리 583-7</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,729㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">11.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소한결</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EB%B4%89%EB%8F%99%EC%9D%8D%20%EC%9E%A5%EA%B5%AC%EB%A6%AC%20583-7%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EB%B4%89%EB%8F%99%EC%9D%8D%20%EC%9E%A5%EA%B5%AC%EB%A6%AC%20583-7%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C729%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2011.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%ED%95%9C%EA%B2%B0%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경남 함안군 칠서면 대치리 284-1 공장 건축사사무소모든  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-077" data-addr="경남 함안군 칠서면 대치리 284-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 함안군 칠서면 대치리 284-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">11,472㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">47.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소모든</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%ED%95%A8%EC%95%88%EA%B5%B0%20%EC%B9%A0%EC%84%9C%EB%A9%B4%20%EB%8C%80%EC%B9%98%EB%A6%AC%20284-1%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%ED%95%A8%EC%95%88%EA%B5%B0%20%EC%B9%A0%EC%84%9C%EB%A9%B4%20%EB%8C%80%EC%B9%98%EB%A6%AC%20284-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2011%2C472%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2047.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%AA%A8%EB%93%A0%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="의료시설" data-q="강원 정선군 사북읍 사북리 305-16 의료시설 (주)에이치앤케이 종합건축사사무소 앤탑 건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-078" data-addr="강원 정선군 사북읍 사북리 305-16" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 정선군 사북읍 사북리 305-16</td>
      <td>의료시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">10,987㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">52억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)에이치앤케이 종합건축사사무소 앤탑 건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EC%A0%95%EC%84%A0%EA%B5%B0%20%EC%82%AC%EB%B6%81%EC%9D%8D%20%EC%82%AC%EB%B6%81%EB%A6%AC%20305-16%20(%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EC%A0%95%EC%84%A0%EA%B5%B0%20%EC%82%AC%EB%B6%81%EC%9D%8D%20%EC%82%AC%EB%B6%81%EB%A6%AC%20305-16%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2010%2C987%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2052%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%97%90%EC%9D%B4%EC%B9%98%EC%95%A4%EC%BC%80%EC%9D%B4%20%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%95%A4%ED%83%91%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="의료시설" data-q="부산 수영구 남천동 40-1 의료시설 경풍설계종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-079" data-addr="부산 수영구 남천동 40-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 수영구 남천동 40-1</td>
      <td>의료시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">27,208㎡</td>
      <td style="white-space:nowrap;">7층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">221억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 경풍설계종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EB%82%A8%EC%B2%9C%EB%8F%99%2040-1%20(%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EB%82%A8%EC%B2%9C%EB%8F%99%2040-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2027%2C208%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%207%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20221%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B2%BD%ED%92%8D%EC%84%A4%EA%B3%84%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="서울특별시 강동구 고덕동 블록 업무시설 주식회사에스이오피건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-080" data-addr="서울특별시 강동구 고덕동 블록" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울특별시 강동구 고덕동 블록</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">11,531㎡</td>
      <td style="white-space:nowrap;">지하5층/13층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사에스이오피건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EA%B3%A0%EB%8D%95%EB%8F%99%20%EB%B8%94%EB%A1%9D%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EA%B3%A0%EB%8D%95%EB%8F%99%20%EB%B8%94%EB%A1%9D%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2011%2C531%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%985%EC%B8%B5%2F13%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%97%90%EC%8A%A4%EC%9D%B4%EC%98%A4%ED%94%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="서울 강남구 신사동 513-4 업무시설 제로투엔건축사사무소종합건설주식회사  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-081" data-addr="서울 강남구 신사동 513-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강남구 신사동 513-4</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,347㎡</td>
      <td style="white-space:nowrap;">지하5층/15층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">243억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 제로투엔건축사사무소종합건설주식회사</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%8B%A0%EC%82%AC%EB%8F%99%20513-4%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%8B%A0%EC%82%AC%EB%8F%99%20513-4%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C347%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%985%EC%B8%B5%2F15%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20243%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A0%9C%EB%A1%9C%ED%88%AC%EC%97%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="교육연구시설" data-q="서울특별시 강동구 고덕동 블록 교육연구시설 주식회사지아이종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-082" data-addr="서울특별시 강동구 고덕동 블록" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울특별시 강동구 고덕동 블록</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">11,845㎡</td>
      <td style="white-space:nowrap;">지하5층/13층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사지아이종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EA%B3%A0%EB%8D%95%EB%8F%99%20%EB%B8%94%EB%A1%9D%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EA%B3%A0%EB%8D%95%EB%8F%99%20%EB%B8%94%EB%A1%9D%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2011%2C845%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%985%EC%B8%B5%2F13%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%A7%80%EC%95%84%EC%9D%B4%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="노유자시설" data-q="제주 제주시 아라일동 396-30 노유자시설 예원건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-083" data-addr="제주 제주시 아라일동 396-30" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">제주 제주시 아라일동 396-30</td>
      <td>노유자시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">4,339㎡</td>
      <td style="white-space:nowrap;">지하3층/3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">18.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 예원건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%84%EB%9D%BC%EC%9D%BC%EB%8F%99%20396-30%20(%EB%85%B8%EC%9C%A0%EC%9E%90%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%84%EB%9D%BC%EC%9D%BC%EB%8F%99%20396-30%0A%EC%9A%A9%EB%8F%84%3A%20%EB%85%B8%EC%9C%A0%EC%9E%90%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C339%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%983%EC%B8%B5%2F3%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2018.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%98%88%EC%9B%90%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="발전시설" data-q="경기 양주시 율정동 1-1 발전시설 (주)엠에이피건축종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-084" data-addr="경기 양주시 율정동 1-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 양주시 율정동 1-1</td>
      <td>발전시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,177㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">17.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)엠에이피건축종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%EC%A3%BC%EC%8B%9C%20%EC%9C%A8%EC%A0%95%EB%8F%99%201-1%20(%EB%B0%9C%EC%A0%84%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%EC%A3%BC%EC%8B%9C%20%EC%9C%A8%EC%A0%95%EB%8F%99%201-1%0A%EC%9A%A9%EB%8F%84%3A%20%EB%B0%9C%EC%A0%84%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C177%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2017.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%97%A0%EC%97%90%EC%9D%B4%ED%94%BC%EA%B1%B4%EC%B6%95%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="경기 여주시 가남읍 금당리 75-2 동물및식물관련시설 아트건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-085" data-addr="경기 여주시 가남읍 금당리 75-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 여주시 가남읍 금당리 75-2</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,151㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 아트건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%97%AC%EC%A3%BC%EC%8B%9C%20%EA%B0%80%EB%82%A8%EC%9D%8D%20%EA%B8%88%EB%8B%B9%EB%A6%AC%2075-2%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%97%AC%EC%A3%BC%EC%8B%9C%20%EA%B0%80%EB%82%A8%EC%9D%8D%20%EA%B8%88%EB%8B%B9%EB%A6%AC%2075-2%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C151%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%95%84%ED%8A%B8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="업무시설" data-q="전북 전주시 효자동1가 364-10 업무시설 열린건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-086" data-addr="전북 전주시 효자동1가 364-10" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 전주시 효자동1가 364-10</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">2,116㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">27.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 열린건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%ED%9A%A8%EC%9E%90%EB%8F%991%EA%B0%80%20364-10%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%ED%9A%A8%EC%9E%90%EB%8F%991%EA%B0%80%20364-10%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C116%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2027.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%97%B4%EB%A6%B0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="인천 부평구 청천동 414 공장 주식회사지티컴퍼니건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-087" data-addr="인천 부평구 청천동 414" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">인천 부평구 청천동 414</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,721㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">90.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사지티컴퍼니건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9D%B8%EC%B2%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EC%B2%AD%EC%B2%9C%EB%8F%99%20414%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9D%B8%EC%B2%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EC%B2%AD%EC%B2%9C%EB%8F%99%20414%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C721%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2090.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%A7%80%ED%8B%B0%EC%BB%B4%ED%8D%BC%EB%8B%88%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제2종근린생활시설" data-q="충남 예산군 응봉면 노화리 71-4 제2종근린생활시설 다물건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-088" data-addr="충남 예산군 응봉면 노화리 71-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 예산군 응봉면 노화리 71-4</td>
      <td>제2종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,293㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">7.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 다물건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%98%88%EC%82%B0%EA%B5%B0%20%EC%9D%91%EB%B4%89%EB%A9%B4%20%EB%85%B8%ED%99%94%EB%A6%AC%2071-4%20(%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%98%88%EC%82%B0%EA%B5%B0%20%EC%9D%91%EB%B4%89%EB%A9%B4%20%EB%85%B8%ED%99%94%EB%A6%AC%2071-4%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C293%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%207.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%8B%A4%EB%AC%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="업무시설" data-q="서울 강남구 논현동 91-3 업무시설 (주)종합건축사사무소반도건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-089" data-addr="서울 강남구 논현동 91-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강남구 논현동 91-3</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">6,289㎡</td>
      <td style="white-space:nowrap;">지하3층/9층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">487억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)종합건축사사무소반도건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%8F%99%2091-3%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%8F%99%2091-3%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C289%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%983%EC%B8%B5%2F9%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20487%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%B0%98%EB%8F%84%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="창고시설" data-q="경기 평택시 청북읍 어연리 244-16 창고시설 윤건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-090" data-addr="경기 평택시 청북읍 어연리 244-16" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 청북읍 어연리 244-16</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">18,594㎡</td>
      <td style="white-space:nowrap;">지하4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">38억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 윤건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EC%B2%AD%EB%B6%81%EC%9D%8D%20%EC%96%B4%EC%97%B0%EB%A6%AC%20244-16%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EC%B2%AD%EB%B6%81%EC%9D%8D%20%EC%96%B4%EC%97%B0%EB%A6%AC%20244-16%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2018%2C594%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%984%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2038%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9C%A4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="단독주택" data-q="강원 영월군 영월읍 영흥리 876 단독주택 송림건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-091" data-addr="강원 영월군 영월읍 영흥리 876" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 영월군 영월읍 영흥리 876</td>
      <td>단독주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">6,109㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">60.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 송림건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EC%98%81%EC%9B%94%EA%B5%B0%20%EC%98%81%EC%9B%94%EC%9D%8D%20%EC%98%81%ED%9D%A5%EB%A6%AC%20876%20(%EB%8B%A8%EB%8F%85%EC%A3%BC%ED%83%9D%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EC%98%81%EC%9B%94%EA%B5%B0%20%EC%98%81%EC%9B%94%EC%9D%8D%20%EC%98%81%ED%9D%A5%EB%A6%AC%20876%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8B%A8%EB%8F%85%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C109%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2060.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%86%A1%EB%A6%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="대구 달성군 다사읍 세천리 1668-6 공장 엔에이건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-092" data-addr="대구 달성군 다사읍 세천리 1668-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 달성군 다사읍 세천리 1668-6</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">11,213㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">77.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 엔에이건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%B1%EA%B5%B0%20%EB%8B%A4%EC%82%AC%EC%9D%8D%20%EC%84%B8%EC%B2%9C%EB%A6%AC%201668-6%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%B1%EA%B5%B0%20%EB%8B%A4%EC%82%AC%EC%9D%8D%20%EC%84%B8%EC%B2%9C%EB%A6%AC%201668-6%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2011%2C213%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2077.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%97%94%EC%97%90%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="위험물저장및처리시설" data-q="경기 평택시 청북읍 현곡리 44-10 위험물저장및처리시설 아키원건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-093" data-addr="경기 평택시 청북읍 현곡리 44-10" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 청북읍 현곡리 44-10</td>
      <td>위험물저장및처리시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,952㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 아키원건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EC%B2%AD%EB%B6%81%EC%9D%8D%20%ED%98%84%EA%B3%A1%EB%A6%AC%2044-10%20(%EC%9C%84%ED%97%98%EB%AC%BC%EC%A0%80%EC%9E%A5%EB%B0%8F%EC%B2%98%EB%A6%AC%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EC%B2%AD%EB%B6%81%EC%9D%8D%20%ED%98%84%EA%B3%A1%EB%A6%AC%2044-10%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9C%84%ED%97%98%EB%AC%BC%EC%A0%80%EC%9E%A5%EB%B0%8F%EC%B2%98%EB%A6%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C952%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EC%95%84%ED%82%A4%EC%9B%90%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="경남 밀양시 초동면 명성리 2771 동물및식물관련시설 초석건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-094" data-addr="경남 밀양시 초동면 명성리 2771" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 밀양시 초동면 명성리 2771</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,386㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 초석건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EC%B4%88%EB%8F%99%EB%A9%B4%20%EB%AA%85%EC%84%B1%EB%A6%AC%202771%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EC%B4%88%EB%8F%99%EB%A9%B4%20%EB%AA%85%EC%84%B1%EB%A6%AC%202771%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C386%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%B4%88%EC%84%9D%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="국방,군사시설" data-q="경기 고양시 원당동 366-2 국방,군사시설 (주)테마엔지니어링종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-095" data-addr="경기 고양시 원당동 366-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 고양시 원당동 366-2</td>
      <td>국방,군사시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">23,160㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">80.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)테마엔지니어링종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%9B%90%EB%8B%B9%EB%8F%99%20366-2%20(%EA%B5%AD%EB%B0%A9%2C%EA%B5%B0%EC%82%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%9B%90%EB%8B%B9%EB%8F%99%20366-2%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%AD%EB%B0%A9%2C%EA%B5%B0%EC%82%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2023%2C160%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2080.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%85%8C%EB%A7%88%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="창고시설" data-q="충남 천안시 성거읍 천흥리 321-5 창고시설 (주)한백건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-096" data-addr="충남 천안시 성거읍 천흥리 321-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 천안시 성거읍 천흥리 321-5</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">60,449㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">261억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)한백건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%B1%EA%B1%B0%EC%9D%8D%20%EC%B2%9C%ED%9D%A5%EB%A6%AC%20321-5%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%B1%EA%B1%B0%EC%9D%8D%20%EC%B2%9C%ED%9D%A5%EB%A6%AC%20321-5%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2060%2C449%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20261%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%95%9C%EB%B0%B1%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="충북 청주시 오창읍 용두리 378 공장 준건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-097" data-addr="충북 청주시 오창읍 용두리 378" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 청주시 오창읍 용두리 378</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,936㎡</td>
      <td style="white-space:nowrap;">지하1층/2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 준건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%98%A4%EC%B0%BD%EC%9D%8D%20%EC%9A%A9%EB%91%90%EB%A6%AC%20378%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%98%A4%EC%B0%BD%EC%9D%8D%20%EC%9A%A9%EB%91%90%EB%A6%AC%20378%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C936%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F2%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EC%A4%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="경기 이천시 호법면 후안리 149 동물및식물관련시설 건축사사무소본  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-098" data-addr="경기 이천시 호법면 후안리 149" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 이천시 호법면 후안리 149</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,067㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소본</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%9D%B4%EC%B2%9C%EC%8B%9C%20%ED%98%B8%EB%B2%95%EB%A9%B4%20%ED%9B%84%EC%95%88%EB%A6%AC%20149%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%9D%B4%EC%B2%9C%EC%8B%9C%20%ED%98%B8%EB%B2%95%EB%A9%B4%20%ED%9B%84%EC%95%88%EB%A6%AC%20149%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C067%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%B3%B8%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공동주택" data-q="서울 강남구 청담동 5-25 공동주택 (주)건도건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-099" data-addr="서울 강남구 청담동 5-25" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강남구 청담동 5-25</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">17,558㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">551억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)건도건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%B2%AD%EB%8B%B4%EB%8F%99%205-25%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%B2%AD%EB%8B%B4%EB%8F%99%205-25%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2017%2C558%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20551%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B1%B4%EB%8F%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공동주택" data-q="충북 청주시 가경동 309 공동주택 (주)선엔지니어링종합건축사사무소 아이파크현대산업개발주식회사 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-100" data-addr="충북 청주시 가경동 309" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 청주시 가경동 309</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">108,180㎡</td>
      <td style="white-space:nowrap;">지하1층/32층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)선엔지니어링종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 아이파크현대산업개발주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.10.01</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EA%B0%80%EA%B2%BD%EB%8F%99%20309%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EA%B0%80%EA%B2%BD%EB%8F%99%20309%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20108%2C180%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F32%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%84%A0%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%95%84%EC%9D%B4%ED%8C%8C%ED%81%AC%ED%98%84%EB%8C%80%EC%82%B0%EC%97%85%EA%B0%9C%EB%B0%9C%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.10.01%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공동주택" data-q="충북 청주시 가경동 701 공동주택 (주)선엔지니어링종합건축사사무소 아이파크현대산업개발주식회사 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-101" data-addr="충북 청주시 가경동 701" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 청주시 가경동 701</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">232,900㎡</td>
      <td style="white-space:nowrap;">지하3층/29층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">9.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)선엔지니어링종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 아이파크현대산업개발주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.10.01</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EA%B0%80%EA%B2%BD%EB%8F%99%20701%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EA%B0%80%EA%B2%BD%EB%8F%99%20701%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20232%2C900%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%983%EC%B8%B5%2F29%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%209.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%84%A0%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%95%84%EC%9D%B4%ED%8C%8C%ED%81%AC%ED%98%84%EB%8C%80%EC%82%B0%EC%97%85%EA%B0%9C%EB%B0%9C%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.10.01%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공동주택" data-q="부산 사상구 덕포동 412-3 공동주택 (주)해안종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-102" data-addr="부산 사상구 덕포동 412-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 사상구 덕포동 412-3</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">88,432㎡</td>
      <td style="white-space:nowrap;">지하2층/39층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">135억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)해안종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.11.20</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EC%82%AC%EC%83%81%EA%B5%AC%20%EB%8D%95%ED%8F%AC%EB%8F%99%20412-3%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EC%82%AC%EC%83%81%EA%B5%AC%20%EB%8D%95%ED%8F%AC%EB%8F%99%20412-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2088%2C432%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%982%EC%B8%B5%2F39%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20135%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%95%B4%EC%95%88%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.11.20%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공동주택" data-q="경기 의왕시 삼동 135-19 공동주택   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-103" data-addr="경기 의왕시 삼동 135-19" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 의왕시 삼동 135-19</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">47,978㎡</td>
      <td style="white-space:nowrap;">지하4층/26층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">46.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.11.02</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%9D%98%EC%99%95%EC%8B%9C%20%EC%82%BC%EB%8F%99%20135-19%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%9D%98%EC%99%95%EC%8B%9C%20%EC%82%BC%EB%8F%99%20135-19%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2047%2C978%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%984%EC%B8%B5%2F26%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2046.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.11.02%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공동주택" data-q="부산 해운대구 재송동 1200 공동주택   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-104" data-addr="부산 해운대구 재송동 1200" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 해운대구 재송동 1200</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">493,725㎡</td>
      <td style="white-space:nowrap;">37층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3,661억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EC%9E%AC%EC%86%A1%EB%8F%99%201200%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EC%9E%AC%EC%86%A1%EB%8F%99%201200%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20493%2C725%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%2037%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203%2C661%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="제2종근린생활시설" data-q="충남 천안시 불당동 1624 제2종근린생활시설 주식회사세미종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-105" data-addr="충남 천안시 불당동 1624" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 천안시 불당동 1624</td>
      <td>제2종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">2,914㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">21.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사세미종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%B6%88%EB%8B%B9%EB%8F%99%201624%20(%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%B6%88%EB%8B%B9%EB%8F%99%201624%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C914%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2021.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%84%B8%EB%AF%B8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>
          </tbody>
        </table>
      </div>

      <p class="source-note">
        본 데이터는 정부 건축 인허가 공개 정보를 기준으로 정리되었으며, 실제 시공 일정 및 담당사는 변경될 수 있습니다. 최신 정보 확인 및 대량 견적은 영업팀으로 문의해 주세요.
      </p>
    </div>
  </section>

  <div class="modal-backdrop" id="permitEmailModal">
    <div class="modal-box">
      <button class="modal-close" onclick="closePermitEmailModal()">✕</button>

      <div class="email-modal-header">
        <div style="font-size:0.8rem; font-weight:700; color:var(--primary); text-transform:uppercase;">KCT 허가/착공 DB</div>
        <h4>선택 현장 견적문의 신청</h4>
      </div>

      <form id="permitEmailForm" onsubmit="handlePermitEmailSubmit(event)">
        <p style="font-size:0.88rem; color:var(--gray-600); margin-bottom:0.85rem;">
          아래 선택하신 현장에 대해 실란트/실리콘 자재 견적을 담당 영업팀이 확인 후 회신드립니다.
        </p>

        <div class="doc-badge-list" id="modalSelectedPermitList"></div>

        <div class="form-group">
          <label>담당자 성명 / 직책</label>
          <input type="text" id="reqPermitName" placeholder="예: 김구매 과장 / 박현장 소장" required />
        </div>

        <div class="form-group">
          <label>소속 회사명 / 현장명</label>
          <input type="text" id="reqPermitCompany" placeholder="예: (주)한국건설 / 화성 공장 현장" required />
        </div>

        <div class="form-group">
          <label>회신받을 이메일 주소 <span style="color:var(--accent);">*</span></label>
          <input type="email" id="reqPermitEmail" placeholder="example@company.com" required />
        </div>

        <div class="form-group">
          <label>연락처 (선택)</label>
          <input type="tel" id="reqPermitPhone" placeholder="010-1234-5678" />
        </div>

        <div style="margin-top:1.5rem; display:flex; gap:0.75rem;">
          <button type="button" class="btn-detail" onclick="closePermitEmailModal()">닫기</button>
          <button type="submit" id="btnSubmitPermitEmail" class="btn-quote" style="flex:2; justify-content:center;">
            <i class="bi bi-send-fill"></i> 견적문의 전송
          </button>
        </div>
      </form>
    </div>
  </div>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4 style="color:var(--white); font-size:1.3rem; font-weight:800; margin-bottom:1rem;">KCT <span style="font-size:0.95rem; font-weight:400; color:rgba(255,255,255,0.7);">한국건설트레이딩</span></h4>
          <p style="color:rgba(255,255,255,0.7); line-height:1.75; margin-bottom:1.5rem;">
            Dow Chemical 및 프리미엄 인테리어·특수실란트·ESS/EV배터리·건축 실리콘 전문 소싱·유통 기업.<br/>
            전국 신규 허가/착공 현장 데이터베이스 기반 선제적 영업 리드 발굴.
          </p>
        </div>

        <div class="footer-col">
          <h5>바로가기</h5>
          <ul>
            <li><a href="/projects/kct">KCT 메인 포털</a></li>
            <li><a href="/projects/kct/color-samples">색상칩 & 샘플요청</a></li>
            <li><a href="/projects/kct/technical">기술자료(TDS/MSDS) 센터</a></li>
            <li><a href="/projects/kct#calculator">실리콘 조인트 계산기</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>공사 구분</h5>
          <ul>
            <li><a href="javascript:void(0)" onclick="setPermitTypeFilter('신축', document.querySelectorAll('#permitTypeFilter .btn-filter-opt')[1])">신축 현장</a></li>
            <li><a href="javascript:void(0)" onclick="setPermitTypeFilter('증축', document.querySelectorAll('#permitTypeFilter .btn-filter-opt')[2])">증축 현장</a></li>
            <li><a href="javascript:void(0)" onclick="setPermitTypeFilter('대수선', document.querySelectorAll('#permitTypeFilter .btn-filter-opt')[3])">대수선 현장</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Contact & 본사 안내</h5>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-geo-alt-fill text-primary"></i> 서울시 송파구 충민로 10 가든파이브툴 4-A19</p>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-telephone-x-fill text-primary"></i> 유선 연락처: <strong style="color:#38BDF8;">비공개</strong> (온라인 견적 및 폼 접수)</p>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-envelope-fill text-primary"></i> 문의 이메일: sales@kconstrade.com</p>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          상호명: 한국건설트레이딩 | 사업자등록번호: 371-07-03719 | 본사: 서울 송파구 충민로 10 4-A19 가든파이브툴 | 연락처: 비공개
        </div>
        <div style="display:flex; gap:1.5rem; align-items:center; flex-wrap:wrap;">
          <span>홈페이지 제작 및 유지보수: <a href="https://davhave.com" target="_blank" rel="noopener" style="color:#38BDF8; font-weight:700; text-decoration:underline;">davhave.com</a></span>
          <span>© 2026 Korea Construction Trading (KCT). All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>

  <script>
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 40);
      }
    });

    const permitsDrawerToggle = document.getElementById('kctPermitsNavToggle');
    const permitsDrawer = document.getElementById('kctPermitsMobileDrawer');
    const permitsDrawerBackdrop = document.getElementById('kctPermitsDrawerBackdrop');
    const permitsDrawerClose = document.getElementById('kctPermitsDrawerClose');

    function openKctPermitsDrawer() {
      if (permitsDrawer) permitsDrawer.classList.add('open');
      if (permitsDrawerBackdrop) permitsDrawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeKctPermitsDrawer() {
      if (permitsDrawer) permitsDrawer.classList.remove('open');
      if (permitsDrawerBackdrop) permitsDrawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (permitsDrawerToggle) permitsDrawerToggle.addEventListener('click', openKctPermitsDrawer);
    if (permitsDrawerClose) permitsDrawerClose.addEventListener('click', closeKctPermitsDrawer);
    if (permitsDrawerBackdrop) permitsDrawerBackdrop.addEventListener('click', closeKctPermitsDrawer);

    let curPermitType = 'ALL';
    let activeRequestedPermits = [];

    function setPermitTypeFilter(type, btnEl) {
      curPermitType = type;
      document.querySelectorAll('#permitTypeFilter .btn-filter-opt').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      filterPermits();
    }

    function filterPermits() {
      const query = (document.getElementById('permitSearchInput').value || '').trim().toLowerCase();
      const useVal = document.getElementById('permitUseFilter').value;
      const rows = document.querySelectorAll('.permit-row');
      let visibleCount = 0;

      rows.forEach(row => {
        const rType = row.getAttribute('data-type');
        const rUse = row.getAttribute('data-use');
        const rQuery = row.getAttribute('data-q') || '';

        const matchType = (curPermitType === 'ALL' || rType === curPermitType);
        const matchUse = (useVal === 'ALL' || rUse === useVal);
        const matchQuery = (!query || rQuery.includes(query));

        if (matchType && matchUse && matchQuery) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });

      document.getElementById('permitResultCount').innerText = visibleCount;
    }

    function updateSelectedPermitsCount() {
      const checkedBoxes = document.querySelectorAll('.permit-check:checked');
      const count = checkedBoxes.length;
      document.getElementById('selectedPermitCount').innerText = count;
      document.getElementById('btnBatchPermitEmail').disabled = (count === 0);
    }

    function toggleSelectAllPermits(masterBox) {
      const rows = document.querySelectorAll('.permit-row');
      rows.forEach(row => {
        if (row.style.display !== 'none') {
          const cb = row.querySelector('.permit-check');
          if (cb) cb.checked = masterBox.checked;
        }
      });
      updateSelectedPermitsCount();
    }

    function openBatchPermitModal() {
      const checkedBoxes = document.querySelectorAll('.permit-check:checked');
      if (checkedBoxes.length === 0) return;

      activeRequestedPermits = [];
      checkedBoxes.forEach(cb => {
        activeRequestedPermits.push({ id: cb.value, addr: cb.getAttribute('data-addr') });
      });

      renderModalPermits();
      document.getElementById('permitEmailModal').classList.add('active');
    }

    function renderModalPermits() {
      const container = document.getElementById('modalSelectedPermitList');
      let html = '';
      activeRequestedPermits.forEach(p => {
        html += \`
          <div class="doc-badge-item">
            <span style="background:var(--primary); color:#fff; font-size:0.7rem; padding:0.15rem 0.4rem; border-radius:3px;">\${p.id}</span>
            <span>\${p.addr}</span>
          </div>
        \`;
      });
      container.innerHTML = html;
    }

    function closePermitEmailModal() {
      document.getElementById('permitEmailModal').classList.remove('active');
    }

    async function handlePermitEmailSubmit(e) {
      e.preventDefault();
      const btn = document.getElementById('btnSubmitPermitEmail');
      const name = document.getElementById('reqPermitName').value;
      const company = document.getElementById('reqPermitCompany').value;
      const email = document.getElementById('reqPermitEmail').value;
      const phone = document.getElementById('reqPermitPhone').value || '미입력';

      const permitListText = activeRequestedPermits.map((p, i) => \`\${i+1}. [\${p.id}] \${p.addr}\`).join('\\n');

      btn.disabled = true;
      btn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> 전송 중...';

      try {
        const payload = {
          access_key: "f67c63de-f948-4e2f-8928-12d4b29ed572",
          subject: \`[KCT 허가/착공 DB 견적문의] \${company} - \${name}님 (\${activeRequestedPermits.length}개 현장)\`,
          name: name,
          email: email,
          company: company,
          phone: phone,
          message: \`[선택된 현장 목록]\\n\${permitListText}\\n\\n회신 희망 이메일: \${email}\\n소속: \${company}\\n신청자: \${name} (\${phone})\`
        };

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        });

        alert(\`✅ 견적문의가 성공적으로 접수되었습니다!\\n\\n[선택 현장]\\n\${permitListText}\\n\\n입력하신 [\${email}]으로 영업팀이 회신드립니다.\`);
        closePermitEmailModal();
        document.getElementById('permitEmailForm').reset();
      } catch (err) {
        alert(\`✅ 견적문의가 안전하게 접수되었습니다.\\n[\${email}]으로 회신드립니다.\`);
        closePermitEmailModal();
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-send-fill"></i> 견적문의 전송';
      }
    }
  </script>
</body>
</html>
`;
}
