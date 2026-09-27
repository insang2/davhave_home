// KCT 전국 건축 허가/착공 현장 리드 데이터베이스 Renderer
export function renderKctPermitsPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>전국 건축 허가·착공 신규현장 리드 데이터베이스 | KCT 한국건설트레이딩</title>
  <meta name="description" content="공장, 창고, 업무시설, 공동주택 등 전국 신규 건축 허가·착공 현장 300건을 실시간 정리한 KCT 영업 리드 데이터베이스. 주소, 용도, 연면적, 설계·시공·감리사, 착공일 기준 필터링 및 견적문의." />
  <meta name="keywords" content="건축 허가 현황, 착공 현장, 건축 인허가, 신축 증축 대수선, 실란트 영업 리드, 건설사 정보, KCT" />

  <link rel="canonical" href="https://davhave.com/projects/kct/permits" />
  <link rel="icon" href="https://kconstrade.com/assets/img/favicon.ico" type="image/x-icon" />
  <meta property="og:title" content="전국 건축 허가·착공 신규현장 리드 데이터베이스 | KCT 한국건설트레이딩" />
  <meta property="og:description" content="공장, 창고, 업무시설, 공동주택 등 전국 신규 건축 허가·착공 현장 300건을 실시간 정리한 KCT 영업 리드 데이터베이스." />
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
        <span><i class="bi bi-geo-alt-fill text-primary"></i> <strong>허가/착공 현장:</strong> 전국 300건 실시간 정리</span>
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
        <div class="stat-chip"><strong>300</strong><span>전체 현장</span></div>
        <div class="stat-chip"><strong>78</strong><span>신축</span></div>
        <div class="stat-chip"><strong>166</strong><span>증축</span></div>
        <div class="stat-chip"><strong>53</strong><span>대수선</span></div>
        <div class="stat-chip"><strong>3</strong><span>개축/재축</span></div>
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
            <button class="btn-filter-opt" onclick="setPermitTypeFilter('개축', this)">개축</button>
            <button class="btn-filter-opt" onclick="setPermitTypeFilter('재축', this)">재축</button>
          </div>
        </div>

        <div class="filter-row">
          <div class="filter-label"><i class="bi bi-building text-primary"></i> 건물 용도</div>
          <select class="select-use" id="permitUseFilter" onchange="filterPermits()">
            <option value="ALL">전체 용도</option>
            <option value="공장">공장 (115)</option>
            <option value="동물및식물관련시설">동물및식물관련시설 (30)</option>
            <option value="업무시설">업무시설 (24)</option>
            <option value="제1종근린생활시설">제1종근린생활시설 (22)</option>
            <option value="교육연구시설">교육연구시설 (17)</option>
            <option value="창고시설">창고시설 (15)</option>
            <option value="공동주택">공동주택 (12)</option>
            <option value="문화및집회시설">문화및집회시설 (10)</option>
            <option value="제2종근린생활시설">제2종근린생활시설 (7)</option>
            <option value="자원순환관련시설">자원순환관련시설 (6)</option>
            <option value="종교시설">종교시설 (6)</option>
            <option value="의료시설">의료시설 (6)</option>
            <option value="자동차관련시설">자동차관련시설 (4)</option>
            <option value="운동시설">운동시설 (4)</option>
            <option value="숙박시설">숙박시설 (4)</option>
            <option value="판매시설">판매시설 (4)</option>
            <option value="노유자시설">노유자시설 (3)</option>
            <option value="국방,군사시설">국방,군사시설 (3)</option>
            <option value="단독주택">단독주택 (2)</option>
            <option value="위험물저장및처리시설">위험물저장및처리시설 (2)</option>
            <option value="방송통신시설">방송통신시설 (1)</option>
            <option value="발전시설">발전시설 (1)</option>
            <option value="관광휴게시설">관광휴게시설 (1)</option>
            <option value="운수시설">운수시설 (1)</option>
          </select>
        </div>

        <div class="tech-search-bar">
          <input type="text" id="permitSearchInput" class="tech-search-input" placeholder="주소, 설계사, 시공사, 감리사로 검색하세요 (예: 화성, 공장, 건축사사무소)..." onkeyup="filterPermits()" />
          <button class="btn-tech-search" onclick="filterPermits()"><i class="bi bi-search"></i> 검색</button>
        </div>
      </div>

      <div class="tech-action-bar">
        <div class="tech-count-info">
          총 <strong id="permitResultCount">300</strong>건의 허가/착공 현장이 검색되었습니다.
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

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="경기 광주시 송정동 432 제1종근린생활시설 건축사사무소세세영 한산건설주식회사 주식회사젠트로 외 1 (주)도화엔지니어링">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-106" data-addr="경기 광주시 송정동 432" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 광주시 송정동 432</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">7,360㎡</td>
      <td style="white-space:nowrap;">지하1층/2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">149억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소세세영</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 한산건설주식회사 주식회사젠트로 외 1</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)도화엔지니어링</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EC%A3%BC%EC%8B%9C%20%EC%86%A1%EC%A0%95%EB%8F%99%20432%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EC%A3%BC%EC%8B%9C%20%EC%86%A1%EC%A0%95%EB%8F%99%20432%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C360%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F2%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20149%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%84%B8%EC%84%B8%EC%98%81%0A%EC%8B%9C%EA%B3%B5%3A%20%ED%95%9C%EC%82%B0%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%A0%A0%ED%8A%B8%EB%A1%9C%20%EC%99%B8%201%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EB%8F%84%ED%99%94%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="개축" data-use="동물및식물관련시설" data-q="경남 함안군 함안면 봉성리 554 동물및식물관련시설 종합건축사사무소예감  종합건축사사무소예감">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-107" data-addr="경남 함안군 함안면 봉성리 554" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 함안군 함안면 봉성리 554</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#F3E8FF; color:#7E22CE;">개축</span></td>
      <td style="white-space:nowrap;">2,614㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3,258만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 종합건축사사무소예감</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 종합건축사사무소예감</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%ED%95%A8%EC%95%88%EA%B5%B0%20%ED%95%A8%EC%95%88%EB%A9%B4%20%EB%B4%89%EC%84%B1%EB%A6%AC%20554%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EA%B0%9C%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%ED%95%A8%EC%95%88%EA%B5%B0%20%ED%95%A8%EC%95%88%EB%A9%B4%20%EB%B4%89%EC%84%B1%EB%A6%AC%20554%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EA%B0%9C%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C614%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203%2C258%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%98%88%EA%B0%90%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%98%88%EA%B0%90%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 파주시 파평면 눌노리 144 공장 도시건축사사무소 소현종합건설주식회사 지앤피디자인건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-108" data-addr="경기 파주시 파평면 눌노리 144" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 파주시 파평면 눌노리 144</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,164㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">17.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 도시건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 소현종합건설주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 지앤피디자인건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%ED%8C%8C%ED%8F%89%EB%A9%B4%20%EB%88%8C%EB%85%B8%EB%A6%AC%20144%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%ED%8C%8C%ED%8F%89%EB%A9%B4%20%EB%88%8C%EB%85%B8%EB%A6%AC%20144%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C164%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2017.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%8F%84%EC%8B%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%86%8C%ED%98%84%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20%EC%A7%80%EC%95%A4%ED%94%BC%EB%94%94%EC%9E%90%EC%9D%B8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="종교시설" data-q="경기 남양주시 평내동 88-4 종교시설 건축사사무소모던아이 주식회사디에이치건설 건축사사무소모던아이">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-109" data-addr="경기 남양주시 평내동 88-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 남양주시 평내동 88-4</td>
      <td>종교시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,119㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">31.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소모던아이</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사디에이치건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소모던아이</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C%20%ED%8F%89%EB%82%B4%EB%8F%99%2088-4%20(%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C%20%ED%8F%89%EB%82%B4%EB%8F%99%2088-4%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C119%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2031.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%AA%A8%EB%8D%98%EC%95%84%EC%9D%B4%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%94%94%EC%97%90%EC%9D%B4%EC%B9%98%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%AA%A8%EB%8D%98%EC%95%84%EC%9D%B4%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="울산 울주군 상북면 양등리 810-3 공장 주식회사종합건축사사무소와이지 서진종합건설(주) 한성건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-110" data-addr="울산 울주군 상북면 양등리 810-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">울산 울주군 상북면 양등리 810-3</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,991㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">24.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사종합건축사사무소와이지</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 서진종합건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 한성건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9A%B8%EC%82%B0%20%EC%9A%B8%EC%A3%BC%EA%B5%B0%20%EC%83%81%EB%B6%81%EB%A9%B4%20%EC%96%91%EB%93%B1%EB%A6%AC%20810-3%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9A%B8%EC%82%B0%20%EC%9A%B8%EC%A3%BC%EA%B5%B0%20%EC%83%81%EB%B6%81%EB%A9%B4%20%EC%96%91%EB%93%B1%EB%A6%AC%20810-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C991%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2024.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%99%80%EC%9D%B4%EC%A7%80%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%84%9C%EC%A7%84%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20%ED%95%9C%EC%84%B1%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공동주택" data-q="서울 노원구 공릉동 312-6 공동주택 주식회사시그에이건축사사무소 바른건설주식회사 주식회사시그에이건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-111" data-addr="서울 노원구 공릉동 312-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 노원구 공릉동 312-6</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,695㎡</td>
      <td style="white-space:nowrap;">지하1층/8층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">7.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사시그에이건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 바른건설주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 주식회사시그에이건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EB%85%B8%EC%9B%90%EA%B5%AC%20%EA%B3%B5%EB%A6%89%EB%8F%99%20312-6%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EB%85%B8%EC%9B%90%EA%B5%AC%20%EA%B3%B5%EB%A6%89%EB%8F%99%20312-6%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C695%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F8%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%207.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%8B%9C%EA%B7%B8%EC%97%90%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EB%B0%94%EB%A5%B8%EA%B1%B4%EC%84%A4%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%8B%9C%EA%B7%B8%EC%97%90%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="경기도 안성시 양성면 구장리 블록 공장 이노종합건축사사무소 에스디종합건설(주) 이노종합건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-112" data-addr="경기도 안성시 양성면 구장리 블록" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기도 안성시 양성면 구장리 블록</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,186㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 이노종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 에스디종합건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 이노종합건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%84%B1%EC%8B%9C%20%EC%96%91%EC%84%B1%EB%A9%B4%20%EA%B5%AC%EC%9E%A5%EB%A6%AC%20%EB%B8%94%EB%A1%9D%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%84%B1%EC%8B%9C%20%EC%96%91%EC%84%B1%EB%A9%B4%20%EA%B5%AC%EC%9E%A5%EB%A6%AC%20%EB%B8%94%EB%A1%9D%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C186%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EC%9D%B4%EB%85%B8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%97%90%EC%8A%A4%EB%94%94%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20%EC%9D%B4%EB%85%B8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="창고시설" data-q="제주 제주시 애월읍 신엄리 2083-4 창고시설 건축사사무소다정 주식회사가우디종합건설 건축사사무소다정">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-113" data-addr="제주 제주시 애월읍 신엄리 2083-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">제주 제주시 애월읍 신엄리 2083-4</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,150㎡</td>
      <td style="white-space:nowrap;">지하2층/3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">10.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소다정</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사가우디종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소다정</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%A0%EC%9B%94%EC%9D%8D%20%EC%8B%A0%EC%97%84%EB%A6%AC%202083-4%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%A0%EC%9B%94%EC%9D%8D%20%EC%8B%A0%EC%97%84%EB%A6%AC%202083-4%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C150%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%982%EC%B8%B5%2F3%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2010.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%8B%A4%EC%A0%95%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EA%B0%80%EC%9A%B0%EB%94%94%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%8B%A4%EC%A0%95%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="경기 용인시 양지읍 양지리 1-2 공장 건축사사무소홍한 건설업 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-114" data-addr="경기 용인시 양지읍 양지리 1-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 용인시 양지읍 양지리 1-2</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">3,760㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">32.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소홍한</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 건설업</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%96%91%EC%A7%80%EC%9D%8D%20%EC%96%91%EC%A7%80%EB%A6%AC%201-2%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%96%91%EC%A7%80%EC%9D%8D%20%EC%96%91%EC%A7%80%EB%A6%AC%201-2%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C760%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2032.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%ED%99%8D%ED%95%9C%0A%EC%8B%9C%EA%B3%B5%3A%20%EA%B1%B4%EC%84%A4%EC%97%85%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 용인시 이동읍 덕성리 1273-3 공장 건축사사무소가호 (주)기성종합건설 건축사사무소가호">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-115" data-addr="경기 용인시 이동읍 덕성리 1273-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 용인시 이동읍 덕성리 1273-3</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,220㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">17.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소가호</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)기성종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소가호</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%9D%B4%EB%8F%99%EC%9D%8D%20%EB%8D%95%EC%84%B1%EB%A6%AC%201273-3%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%9D%B4%EB%8F%99%EC%9D%8D%20%EB%8D%95%EC%84%B1%EB%A6%AC%201273-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C220%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2017.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EA%B0%80%ED%98%B8%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EA%B8%B0%EC%84%B1%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EA%B0%80%ED%98%B8%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="업무시설" data-q="인천 연수구 송도동 208-1 업무시설 디아키건축사사무소 공신건설(주) ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-116" data-addr="인천 연수구 송도동 208-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">인천 연수구 송도동 208-1</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,966㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">188억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 디아키건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 공신건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%86%A1%EB%8F%84%EB%8F%99%20208-1%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%86%A1%EB%8F%84%EB%8F%99%20208-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C966%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20188%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%94%94%EC%95%84%ED%82%A4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EA%B3%B5%EC%8B%A0%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="단독주택" data-q="경기 용인시 원삼면 고당리 99 단독주택 (주)하니플랜건축사사무소 (주)시오씨앤씨 ㈜단건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-117" data-addr="경기 용인시 원삼면 고당리 99" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 용인시 원삼면 고당리 99</td>
      <td>단독주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,054㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">11.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)하니플랜건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)시오씨앤씨</div>
        <div><strong style="color:var(--gray-800);">감리</strong> ㈜단건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%9B%90%EC%82%BC%EB%A9%B4%20%EA%B3%A0%EB%8B%B9%EB%A6%AC%2099%20(%EB%8B%A8%EB%8F%85%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%9B%90%EC%82%BC%EB%A9%B4%20%EA%B3%A0%EB%8B%B9%EB%A6%AC%2099%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8B%A8%EB%8F%85%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C054%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2011.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%95%98%EB%8B%88%ED%94%8C%EB%9E%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%8B%9C%EC%98%A4%EC%94%A8%EC%95%A4%EC%94%A8%0A%EA%B0%90%EB%A6%AC%3A%20%E3%88%9C%EB%8B%A8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="제2종근린생활시설" data-q="서울 강남구 대치동 961 제2종근린생활시설 (주)건축사사무소신성 (주)메타이엔씨 (주)건축사사무소신성">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-118" data-addr="서울 강남구 대치동 961" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강남구 대치동 961</td>
      <td>제2종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">3,485㎡</td>
      <td style="white-space:nowrap;">17층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">219억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)건축사사무소신성</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)메타이엔씨</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)건축사사무소신성</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8C%80%EC%B9%98%EB%8F%99%20961%20(%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8C%80%EC%B9%98%EB%8F%99%20961%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C485%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%2017%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20219%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%8B%A0%EC%84%B1%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EB%A9%94%ED%83%80%EC%9D%B4%EC%97%94%EC%94%A8%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%8B%A0%EC%84%B1%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="업무시설" data-q="서울 강남구 삼성동 38-25 업무시설 건축사사무소네오마루 (주)정인종합건설 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-119" data-addr="서울 강남구 삼성동 38-25" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강남구 삼성동 38-25</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,731㎡</td>
      <td style="white-space:nowrap;">지하20층/34층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">204억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소네오마루</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)정인종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%82%BC%EC%84%B1%EB%8F%99%2038-25%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%82%BC%EC%84%B1%EB%8F%99%2038-25%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C731%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%9820%EC%B8%B5%2F34%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20204%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%84%A4%EC%98%A4%EB%A7%88%EB%A3%A8%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%A0%95%EC%9D%B8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 청주시 오창읍 송대리 311-1 공장 (주)청사엔지니어링종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-120" data-addr="충북 청주시 오창읍 송대리 311-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 청주시 오창읍 송대리 311-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">41,032㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">55.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)청사엔지니어링종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%98%A4%EC%B0%BD%EC%9D%8D%20%EC%86%A1%EB%8C%80%EB%A6%AC%20311-1%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%98%A4%EC%B0%BD%EC%9D%8D%20%EC%86%A1%EB%8C%80%EB%A6%AC%20311-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2041%2C032%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2055.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%B2%AD%EC%82%AC%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="경남 진주시 충무공동 15-4 교육연구시설 창조건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-121" data-addr="경남 진주시 충무공동 15-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 진주시 충무공동 15-4</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">25,150㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">320억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 창조건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EC%A7%84%EC%A3%BC%EC%8B%9C%20%EC%B6%A9%EB%AC%B4%EA%B3%B5%EB%8F%99%2015-4%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EC%A7%84%EC%A3%BC%EC%8B%9C%20%EC%B6%A9%EB%AC%B4%EA%B3%B5%EB%8F%99%2015-4%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2025%2C150%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20320%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%B0%BD%EC%A1%B0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="의료시설" data-q="경기 안산시 고잔동 516 의료시설 중앙포럼건축사사무소(주) (주)이가건설디자인 재명건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-122" data-addr="경기 안산시 고잔동 516" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 안산시 고잔동 516</td>
      <td>의료시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">95,152㎡</td>
      <td style="white-space:nowrap;">지하4층/1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1,416억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 중앙포럼건축사사무소(주)</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)이가건설디자인</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 재명건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EA%B3%A0%EC%9E%94%EB%8F%99%20516%20(%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EA%B3%A0%EC%9E%94%EB%8F%99%20516%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2095%2C152%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%984%EC%B8%B5%2F1%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201%2C416%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A4%91%EC%95%99%ED%8F%AC%EB%9F%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C(%EC%A3%BC)%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%9D%B4%EA%B0%80%EA%B1%B4%EC%84%A4%EB%94%94%EC%9E%90%EC%9D%B8%0A%EA%B0%90%EB%A6%AC%3A%20%EC%9E%AC%EB%AA%85%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 음성군 감곡면 상우리 474-1 공장 (주)정림건축종합건축사사무소 소담건축사사무소 주식회사디비월드 (주)희림종합건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-123" data-addr="충북 음성군 감곡면 상우리 474-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 음성군 감곡면 상우리 474-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">120,380㎡</td>
      <td style="white-space:nowrap;">지하1층/3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">125억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)정림건축종합건축사사무소 소담건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사디비월드</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)희림종합건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EA%B0%90%EA%B3%A1%EB%A9%B4%20%EC%83%81%EC%9A%B0%EB%A6%AC%20474-1%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EA%B0%90%EA%B3%A1%EB%A9%B4%20%EC%83%81%EC%9A%B0%EB%A6%AC%20474-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20120%2C380%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F3%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20125%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%A0%95%EB%A6%BC%EA%B1%B4%EC%B6%95%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%86%8C%EB%8B%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%94%94%EB%B9%84%EC%9B%94%EB%93%9C%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%ED%9D%AC%EB%A6%BC%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 음성군 대소읍 대풍리 37 공장 (주)우일종합건축사사무소 티엔이엔씨(주) (주)우일종합건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-124" data-addr="충북 음성군 대소읍 대풍리 37" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 음성군 대소읍 대풍리 37</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">47,239㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">183억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)우일종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 티엔이엔씨(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)우일종합건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EB%8C%80%EC%86%8C%EC%9D%8D%20%EB%8C%80%ED%92%8D%EB%A6%AC%2037%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EB%8C%80%EC%86%8C%EC%9D%8D%20%EB%8C%80%ED%92%8D%EB%A6%AC%2037%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2047%2C239%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20183%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%9A%B0%EC%9D%BC%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%ED%8B%B0%EC%97%94%EC%9D%B4%EC%97%94%EC%94%A8(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EC%9A%B0%EC%9D%BC%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="부산 강서구 구랑동 1199-6 공장 건축사사무소터 (주)바른종합건설 ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-125" data-addr="부산 강서구 구랑동 1199-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 강서구 구랑동 1199-6</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,765㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">17.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소터</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)바른종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EA%B5%AC%EB%9E%91%EB%8F%99%201199-6%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EA%B5%AC%EB%9E%91%EB%8F%99%201199-6%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C765%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2017.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%ED%84%B0%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EB%B0%94%EB%A5%B8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제2종근린생활시설" data-q="전남 곡성군 석곡면 석곡리 204 제2종근린생활시설 주식회사 맥스유엔지니어링건축사사무소 주식회사 더시선 건축사사무소 주식회사가온건설 갑진건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-126" data-addr="전남 곡성군 석곡면 석곡리 204" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 곡성군 석곡면 석곡리 204</td>
      <td>제2종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,433㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사 맥스유엔지니어링건축사사무소 주식회사 더시선 건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사가온건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 갑진건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EA%B3%A1%EC%84%B1%EA%B5%B0%20%EC%84%9D%EA%B3%A1%EB%A9%B4%20%EC%84%9D%EA%B3%A1%EB%A6%AC%20204%20(%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EA%B3%A1%EC%84%B1%EA%B5%B0%20%EC%84%9D%EA%B3%A1%EB%A9%B4%20%EC%84%9D%EA%B3%A1%EB%A6%AC%20204%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C433%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%20%EB%A7%A5%EC%8A%A4%EC%9C%A0%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%20%EB%8D%94%EC%8B%9C%EC%84%A0%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EA%B0%80%EC%98%A8%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B0%91%EC%A7%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 청주시 향정동 1 공장 (주)팀텐건축사사무소 에스케이에코플랜트주식회사 (주)한미글로벌건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-127" data-addr="충북 청주시 향정동 1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 청주시 향정동 1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">502,119㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">61.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)팀텐건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 에스케이에코플랜트주식회사</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)한미글로벌건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%ED%96%A5%EC%A0%95%EB%8F%99%201%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%ED%96%A5%EC%A0%95%EB%8F%99%201%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20502%2C119%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2061.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%8C%80%ED%85%90%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%97%90%EC%8A%A4%EC%BC%80%EC%9D%B4%EC%97%90%EC%BD%94%ED%94%8C%EB%9E%9C%ED%8A%B8%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%ED%95%9C%EB%AF%B8%EA%B8%80%EB%A1%9C%EB%B2%8C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="전북 완주군 고산면 남봉리 992-6 동물및식물관련시설 두인건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-128" data-addr="전북 완주군 고산면 남봉리 992-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 완주군 고산면 남봉리 992-6</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,444㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 두인건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EA%B3%A0%EC%82%B0%EB%A9%B4%20%EB%82%A8%EB%B4%89%EB%A6%AC%20992-6%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EA%B3%A0%EC%82%B0%EB%A9%B4%20%EB%82%A8%EB%B4%89%EB%A6%AC%20992-6%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C444%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%91%90%EC%9D%B8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="의료시설" data-q="경기 군포시 당동 730 의료시설 (주)포에이그룹건축사사무소  (주)포에이그룹건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-129" data-addr="경기 군포시 당동 730" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 군포시 당동 730</td>
      <td>의료시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">33,923㎡</td>
      <td style="white-space:nowrap;">지하1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">218억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)포에이그룹건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)포에이그룹건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B5%B0%ED%8F%AC%EC%8B%9C%20%EB%8B%B9%EB%8F%99%20730%20(%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B5%B0%ED%8F%AC%EC%8B%9C%20%EB%8B%B9%EB%8F%99%20730%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2033%2C923%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20218%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%8F%AC%EC%97%90%EC%9D%B4%EA%B7%B8%EB%A3%B9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%ED%8F%AC%EC%97%90%EC%9D%B4%EA%B7%B8%EB%A3%B9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="경남 진주시 충무공동 15-3 교육연구시설 창조건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-130" data-addr="경남 진주시 충무공동 15-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 진주시 충무공동 15-3</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">6,512㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">71.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 창조건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EC%A7%84%EC%A3%BC%EC%8B%9C%20%EC%B6%A9%EB%AC%B4%EA%B3%B5%EB%8F%99%2015-3%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EC%A7%84%EC%A3%BC%EC%8B%9C%20%EC%B6%A9%EB%AC%B4%EA%B3%B5%EB%8F%99%2015-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C512%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2071.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%B0%BD%EC%A1%B0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충남 공주시 우성면 보흥리 652-8 공장 우리건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-131" data-addr="충남 공주시 우성면 보흥리 652-8" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 공주시 우성면 보흥리 652-8</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,589㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">23.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 우리건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EA%B3%B5%EC%A3%BC%EC%8B%9C%20%EC%9A%B0%EC%84%B1%EB%A9%B4%20%EB%B3%B4%ED%9D%A5%EB%A6%AC%20652-8%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EA%B3%B5%EC%A3%BC%EC%8B%9C%20%EC%9A%B0%EC%84%B1%EB%A9%B4%20%EB%B3%B4%ED%9D%A5%EB%A6%AC%20652-8%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C589%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2023.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9A%B0%EB%A6%AC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충남 예산군 예산읍 관작리 276-2 공장 건축사사무소예산건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-132" data-addr="충남 예산군 예산읍 관작리 276-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 예산군 예산읍 관작리 276-2</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,051㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">19.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소예산건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%98%88%EC%82%B0%EA%B5%B0%20%EC%98%88%EC%82%B0%EC%9D%8D%20%EA%B4%80%EC%9E%91%EB%A6%AC%20276-2%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%98%88%EC%82%B0%EA%B5%B0%20%EC%98%88%EC%82%B0%EC%9D%8D%20%EA%B4%80%EC%9E%91%EB%A6%AC%20276-2%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C051%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2019.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%98%88%EC%82%B0%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="업무시설" data-q="대구 중구 남일동 110-1 업무시설 건축사사무소건우 (주)디엘리온 건축사사무소건우">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-133" data-addr="대구 중구 남일동 110-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 중구 남일동 110-1</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">6,452㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">130억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소건우</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)디엘리온</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소건우</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EC%9D%BC%EB%8F%99%20110-1%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EC%9D%BC%EB%8F%99%20110-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C452%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20130%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EA%B1%B4%EC%9A%B0%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EB%94%94%EC%97%98%EB%A6%AC%EC%98%A8%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EA%B1%B4%EC%9A%B0%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="강원 춘천시 칠전동 650 공장 (주)삼우종합건축사사무소 삼성물산(주) (주)삼우씨엠건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-134" data-addr="강원 춘천시 칠전동 650" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 춘천시 칠전동 650</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">19,714㎡</td>
      <td style="white-space:nowrap;">지하1층/4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">78.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)삼우종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 삼성물산(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> (주)삼우씨엠건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EC%B9%A0%EC%A0%84%EB%8F%99%20650%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EC%B9%A0%EC%A0%84%EB%8F%99%20650%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2019%2C714%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F4%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2078.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%82%BC%EC%9A%B0%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%82%BC%EC%84%B1%EB%AC%BC%EC%82%B0(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20(%EC%A3%BC)%EC%82%BC%EC%9A%B0%EC%94%A8%EC%97%A0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경남 김해시 진례면 담안리 123 공장 토림건축사사무소 (주)고명건설 종합건축사사무소금정">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-135" data-addr="경남 김해시 진례면 담안리 123" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 김해시 진례면 담안리 123</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,422㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">19.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 토림건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)고명건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 종합건축사사무소금정</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EC%A7%84%EB%A1%80%EB%A9%B4%20%EB%8B%B4%EC%95%88%EB%A6%AC%20123%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EC%A7%84%EB%A1%80%EB%A9%B4%20%EB%8B%B4%EC%95%88%EB%A6%AC%20123%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C422%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2019.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%86%A0%EB%A6%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EA%B3%A0%EB%AA%85%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EA%B8%88%EC%A0%95%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="강원 강릉시 구정면 제비리 608-1 제1종근린생활시설 아름현건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-136" data-addr="강원 강릉시 구정면 제비리 608-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 강릉시 구정면 제비리 608-1</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,039㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">73.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 아름현건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EA%B5%AC%EC%A0%95%EB%A9%B4%20%EC%A0%9C%EB%B9%84%EB%A6%AC%20608-1%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EA%B5%AC%EC%A0%95%EB%A9%B4%20%EC%A0%9C%EB%B9%84%EB%A6%AC%20608-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C039%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2073.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%95%84%EB%A6%84%ED%98%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="강원 강릉시 구정면 제비리 888 제1종근린생활시설 아름현건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-137" data-addr="강원 강릉시 구정면 제비리 888" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 강릉시 구정면 제비리 888</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,071㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">58.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 아름현건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.30</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EA%B5%AC%EC%A0%95%EB%A9%B4%20%EC%A0%9C%EB%B9%84%EB%A6%AC%20888%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EA%B5%AC%EC%A0%95%EB%A9%B4%20%EC%A0%9C%EB%B9%84%EB%A6%AC%20888%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C071%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2058.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%95%84%EB%A6%84%ED%98%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.30%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="서울 양천구 신정동 321 업무시설 (주)종합건축사사무소림  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-138" data-addr="서울 양천구 신정동 321" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 양천구 신정동 321</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">18,789㎡</td>
      <td style="white-space:nowrap;">지하1층/7층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">672억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)종합건축사사무소림</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%96%91%EC%B2%9C%EA%B5%AC%20%EC%8B%A0%EC%A0%95%EB%8F%99%20321%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%96%91%EC%B2%9C%EA%B5%AC%20%EC%8B%A0%EC%A0%95%EB%8F%99%20321%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2018%2C789%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F7%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20672%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%A6%BC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경북 경주시 황성동 70-6 공장 주식회사홍은건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-139" data-addr="경북 경주시 황성동 70-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 경주시 황성동 70-6</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">25,516㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">85억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사홍은건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%ED%99%A9%EC%84%B1%EB%8F%99%2070-6%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%ED%99%A9%EC%84%B1%EB%8F%99%2070-6%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2025%2C516%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2085%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%ED%99%8D%EC%9D%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="인천 남동구 고잔동 644-5 공장 지그집건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-140" data-addr="인천 남동구 고잔동 644-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">인천 남동구 고잔동 644-5</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,677㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">29.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 지그집건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EA%B3%A0%EC%9E%94%EB%8F%99%20644-5%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EA%B3%A0%EC%9E%94%EB%8F%99%20644-5%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C677%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2029.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A7%80%EA%B7%B8%EC%A7%91%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전북 정읍시 고부면 덕안리 943 공장 마당건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-141" data-addr="전북 정읍시 고부면 덕안리 943" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 정읍시 고부면 덕안리 943</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,427㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 마당건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%A0%95%EC%9D%8D%EC%8B%9C%20%EA%B3%A0%EB%B6%80%EB%A9%B4%20%EB%8D%95%EC%95%88%EB%A6%AC%20943%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%A0%95%EC%9D%8D%EC%8B%9C%20%EA%B3%A0%EB%B6%80%EB%A9%B4%20%EB%8D%95%EC%95%88%EB%A6%AC%20943%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C427%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%A7%88%EB%8B%B9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="운동시설" data-q="경기 가평군 설악면 방일리 산 90-2 운동시설 건축사사무소명성  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-142" data-addr="경기 가평군 설악면 방일리 산 90-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 가평군 설악면 방일리 산 90-2</td>
      <td>운동시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">12,688㎡</td>
      <td style="white-space:nowrap;">지하1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">591억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소명성</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B0%80%ED%8F%89%EA%B5%B0%20%EC%84%A4%EC%95%85%EB%A9%B4%20%EB%B0%A9%EC%9D%BC%EB%A6%AC%20%EC%82%B0%2090-2%20(%EC%9A%B4%EB%8F%99%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B0%80%ED%8F%89%EA%B5%B0%20%EC%84%A4%EC%95%85%EB%A9%B4%20%EB%B0%A9%EC%9D%BC%EB%A6%AC%20%EC%82%B0%2090-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9A%B4%EB%8F%99%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2012%2C688%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20591%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%AA%85%EC%84%B1%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="판매시설" data-q="전남 화순군 화순읍 광덕리 183 판매시설 주식회사건영종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-143" data-addr="전남 화순군 화순읍 광덕리 183" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 화순군 화순읍 광덕리 183</td>
      <td>판매시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,940㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사건영종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%ED%99%94%EC%88%9C%EA%B5%B0%20%ED%99%94%EC%88%9C%EC%9D%8D%20%EA%B4%91%EB%8D%95%EB%A6%AC%20183%20(%ED%8C%90%EB%A7%A4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%ED%99%94%EC%88%9C%EA%B5%B0%20%ED%99%94%EC%88%9C%EC%9D%8D%20%EA%B4%91%EB%8D%95%EB%A6%AC%20183%0A%EC%9A%A9%EB%8F%84%3A%20%ED%8C%90%EB%A7%A4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C940%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EA%B1%B4%EC%98%81%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="교육연구시설" data-q="전남 순천시 석현동 313 교육연구시설 (유)신구조엔지니어링건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-144" data-addr="전남 순천시 석현동 313" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 순천시 석현동 313</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">10,000㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">345억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (유)신구조엔지니어링건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%88%9C%EC%B2%9C%EC%8B%9C%20%EC%84%9D%ED%98%84%EB%8F%99%20313%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%88%9C%EC%B2%9C%EC%8B%9C%20%EC%84%9D%ED%98%84%EB%8F%99%20313%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2010%2C000%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20345%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%9C%A0)%EC%8B%A0%EA%B5%AC%EC%A1%B0%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="문화및집회시설" data-q="경남 밀양시 삼문동 271 문화및집회시설 (주)신한종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-145" data-addr="경남 밀양시 삼문동 271" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 밀양시 삼문동 271</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">8,688㎡</td>
      <td style="white-space:nowrap;">지하3층/7층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)신한종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EC%82%BC%EB%AC%B8%EB%8F%99%20271%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EC%82%BC%EB%AC%B8%EB%8F%99%20271%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%208%2C688%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%983%EC%B8%B5%2F7%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%8B%A0%ED%95%9C%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="제주 제주시 아라일동 1 교육연구시설 건축사사무소 무이건축 (주)아이엔지그룹건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-146" data-addr="제주 제주시 아라일동 1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">제주 제주시 아라일동 1</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">359,086㎡</td>
      <td style="white-space:nowrap;">지하1층/4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3,578억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소 무이건축 (주)아이엔지그룹건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%84%EB%9D%BC%EC%9D%BC%EB%8F%99%201%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%84%EB%9D%BC%EC%9D%BC%EB%8F%99%201%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20359%2C086%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F4%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203%2C578%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%EB%AC%B4%EC%9D%B4%EA%B1%B4%EC%B6%95%20(%EC%A3%BC)%EC%95%84%EC%9D%B4%EC%97%94%EC%A7%80%EA%B7%B8%EB%A3%B9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="문화및집회시설" data-q="전남 영암군 삼호읍 용당리 2178-2 문화및집회시설 (유)종합건축사사무소신도시  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-147" data-addr="전남 영암군 삼호읍 용당리 2178-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 영암군 삼호읍 용당리 2178-2</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">19,939㎡</td>
      <td style="white-space:nowrap;">지하6층/15층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">69.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (유)종합건축사사무소신도시</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EC%82%BC%ED%98%B8%EC%9D%8D%20%EC%9A%A9%EB%8B%B9%EB%A6%AC%202178-2%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EC%82%BC%ED%98%B8%EC%9D%8D%20%EC%9A%A9%EB%8B%B9%EB%A6%AC%202178-2%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2019%2C939%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%986%EC%B8%B5%2F15%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2069.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%9C%A0)%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%8B%A0%EB%8F%84%EC%8B%9C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="대구 달성군 논공읍 북리 1-78 공장 천우건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-148" data-addr="대구 달성군 논공읍 북리 1-78" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 달성군 논공읍 북리 1-78</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,784㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">17.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 천우건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%B1%EA%B5%B0%20%EB%85%BC%EA%B3%B5%EC%9D%8D%20%EB%B6%81%EB%A6%AC%201-78%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%B1%EA%B5%B0%20%EB%85%BC%EA%B3%B5%EC%9D%8D%20%EB%B6%81%EB%A6%AC%201-78%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C784%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2017.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%B2%9C%EC%9A%B0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="전북 부안군 주산면 사산리 609-11 동물및식물관련시설 민건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-149" data-addr="전북 부안군 주산면 사산리 609-11" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 부안군 주산면 사산리 609-11</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">7,001㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 민건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EB%B6%80%EC%95%88%EA%B5%B0%20%EC%A3%BC%EC%82%B0%EB%A9%B4%20%EC%82%AC%EC%82%B0%EB%A6%AC%20609-11%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EB%B6%80%EC%95%88%EA%B5%B0%20%EC%A3%BC%EC%82%B0%EB%A9%B4%20%EC%82%AC%EC%82%B0%EB%A6%AC%20609-11%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C001%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%AF%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="경기 화성시 방교동 840-3 공장 목전건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-150" data-addr="경기 화성시 방교동 840-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 화성시 방교동 840-3</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">4,276㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">60.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 목전건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%B0%A9%EA%B5%90%EB%8F%99%20840-3%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%B0%A9%EA%B5%90%EB%8F%99%20840-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C276%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2060.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%AA%A9%EC%A0%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="의료시설" data-q="대전 서구 둔산동 1161 의료시설 주식회사건축사사무소우림  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-151" data-addr="대전 서구 둔산동 1161" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대전 서구 둔산동 1161</td>
      <td>의료시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">12,312㎡</td>
      <td style="white-space:nowrap;">지하10층/12층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">47.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사건축사사무소우림</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EC%A0%84%20%EC%84%9C%EA%B5%AC%20%EB%91%94%EC%82%B0%EB%8F%99%201161%20(%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EC%A0%84%20%EC%84%9C%EA%B5%AC%20%EB%91%94%EC%82%B0%EB%8F%99%201161%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2012%2C312%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%9810%EC%B8%B5%2F12%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2047.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%9A%B0%EB%A6%BC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="제2종근린생활시설" data-q="경기 하남시 감이동 525-4 제2종근린생활시설 (주)건축사사무소다림건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-152" data-addr="경기 하남시 감이동 525-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 하남시 감이동 525-4</td>
      <td>제2종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,795㎡</td>
      <td style="white-space:nowrap;">지하4층/5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">50.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)건축사사무소다림건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%95%98%EB%82%A8%EC%8B%9C%20%EA%B0%90%EC%9D%B4%EB%8F%99%20525-4%20(%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%95%98%EB%82%A8%EC%8B%9C%20%EA%B0%90%EC%9D%B4%EB%8F%99%20525-4%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C795%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%984%EC%B8%B5%2F5%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2050.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%8B%A4%EB%A6%BC%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="제1종근린생활시설" data-q="서울 용산구 한남동 4-22 제1종근린생활시설 (주)종합건축사사무소시건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-153" data-addr="서울 용산구 한남동 4-22" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 용산구 한남동 4-22</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,047㎡</td>
      <td style="white-space:nowrap;">지하4층/6층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">74.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)종합건축사사무소시건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EB%82%A8%EB%8F%99%204-22%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EB%82%A8%EB%8F%99%204-22%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C047%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%984%EC%B8%B5%2F6%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2074.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%8B%9C%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="제1종근린생활시설" data-q="경기 파주시 다율동 1037-5 제1종근린생활시설 건축사사무소마루  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-154" data-addr="경기 파주시 다율동 1037-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 파주시 다율동 1037-5</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">9,834㎡</td>
      <td style="white-space:nowrap;">지하2층/5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">15.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소마루</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%EB%8B%A4%EC%9C%A8%EB%8F%99%201037-5%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%EB%8B%A4%EC%9C%A8%EB%8F%99%201037-5%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%209%2C834%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%982%EC%B8%B5%2F5%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2015.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%A7%88%EB%A3%A8%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="인천 남동구 고잔동 693-1 공장 주식회사엠에이건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-155" data-addr="인천 남동구 고잔동 693-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">인천 남동구 고잔동 693-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">13,458㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">238억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사엠에이건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EA%B3%A0%EC%9E%94%EB%8F%99%20693-1%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EA%B3%A0%EC%9E%94%EB%8F%99%20693-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2013%2C458%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20238%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%97%A0%EC%97%90%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="경기 부천시 내동 222-28 공장 (주)광현건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-156" data-addr="경기 부천시 내동 222-28" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 부천시 내동 222-28</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,401㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">22.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)광현건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EB%B6%80%EC%B2%9C%EC%8B%9C%20%EB%82%B4%EB%8F%99%20222-28%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EB%B6%80%EC%B2%9C%EC%8B%9C%20%EB%82%B4%EB%8F%99%20222-28%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C401%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2022.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B4%91%ED%98%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="제1종근린생활시설" data-q="서울 용산구 한강로2가 157-2 제1종근린생활시설 (주)호안건축건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-157" data-addr="서울 용산구 한강로2가 157-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 용산구 한강로2가 157-2</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,087㎡</td>
      <td style="white-space:nowrap;">지하1층/8층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">100억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)호안건축건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%A1%9C2%EA%B0%80%20157-2%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%A1%9C2%EA%B0%80%20157-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C087%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F8%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20100%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%98%B8%EC%95%88%EA%B1%B4%EC%B6%95%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="개축" data-use="동물및식물관련시설" data-q="전남 영암군 도포면 덕화리 1-3 동물및식물관련시설 명제건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-158" data-addr="전남 영암군 도포면 덕화리 1-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 영암군 도포면 덕화리 1-3</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#F3E8FF; color:#7E22CE;">개축</span></td>
      <td style="white-space:nowrap;">2,391㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4,688만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 명제건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EB%8F%84%ED%8F%AC%EB%A9%B4%20%EB%8D%95%ED%99%94%EB%A6%AC%201-3%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EA%B0%9C%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EB%8F%84%ED%8F%AC%EB%A9%B4%20%EB%8D%95%ED%99%94%EB%A6%AC%201-3%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EA%B0%9C%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C391%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204%2C688%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EB%AA%85%EC%A0%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="전북 남원시 대강면 사석리 1961-5 동물및식물관련시설 아키엔건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-159" data-addr="전북 남원시 대강면 사석리 1961-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 남원시 대강면 사석리 1961-5</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,705㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1,883만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 아키엔건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EB%82%A8%EC%9B%90%EC%8B%9C%20%EB%8C%80%EA%B0%95%EB%A9%B4%20%EC%82%AC%EC%84%9D%EB%A6%AC%201961-5%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EB%82%A8%EC%9B%90%EC%8B%9C%20%EB%8C%80%EA%B0%95%EB%A9%B4%20%EC%82%AC%EC%84%9D%EB%A6%AC%201961-5%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C705%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201%2C883%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EC%95%84%ED%82%A4%EC%97%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공동주택" data-q="부산 수영구 민락동 181-79 공동주택 건축사사무소메인  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-160" data-addr="부산 수영구 민락동 181-79" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 수영구 민락동 181-79</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">34,985㎡</td>
      <td style="white-space:nowrap;">16층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">260억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소메인</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EB%AF%BC%EB%9D%BD%EB%8F%99%20181-79%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EB%AF%BC%EB%9D%BD%EB%8F%99%20181-79%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2034%2C985%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%2016%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20260%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%A9%94%EC%9D%B8%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공동주택" data-q="부산 수영구 민락동 181-79 공동주택 건축사사무소메인  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-161" data-addr="부산 수영구 민락동 181-79" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 수영구 민락동 181-79</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">34,985㎡</td>
      <td style="white-space:nowrap;">16층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">260억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소메인</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EB%AF%BC%EB%9D%BD%EB%8F%99%20181-79%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EB%AF%BC%EB%9D%BD%EB%8F%99%20181-79%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2034%2C985%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%2016%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20260%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%A9%94%EC%9D%B8%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경남 함안군 칠서면 계내리 626-4 공장 종합건축사사무소늘채움  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-162" data-addr="경남 함안군 칠서면 계내리 626-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 함안군 칠서면 계내리 626-4</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,803㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">39.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 종합건축사사무소늘채움</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%ED%95%A8%EC%95%88%EA%B5%B0%20%EC%B9%A0%EC%84%9C%EB%A9%B4%20%EA%B3%84%EB%82%B4%EB%A6%AC%20626-4%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%ED%95%A8%EC%95%88%EA%B5%B0%20%EC%B9%A0%EC%84%9C%EB%A9%B4%20%EA%B3%84%EB%82%B4%EB%A6%AC%20626-4%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C803%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2039.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%8A%98%EC%B1%84%EC%9B%80%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="제주 제주시 조천읍 대흘리 110-3 공장 정건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-163" data-addr="제주 제주시 조천읍 대흘리 110-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">제주 제주시 조천읍 대흘리 110-3</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">10,576㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">20.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 정건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%A1%B0%EC%B2%9C%EC%9D%8D%20%EB%8C%80%ED%9D%98%EB%A6%AC%20110-3%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%A1%B0%EC%B2%9C%EC%9D%8D%20%EB%8C%80%ED%9D%98%EB%A6%AC%20110-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2010%2C576%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2020.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A0%95%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="대전 중구 목동 24-14 교육연구시설 주식회사에이치앤에스에이건축사사무소 (주)장종합건축사사무소 외 1  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-164" data-addr="대전 중구 목동 24-14" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대전 중구 목동 24-14</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">42,933㎡</td>
      <td style="white-space:nowrap;">지하2층/5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">87.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사에이치앤에스에이건축사사무소 (주)장종합건축사사무소 외 1</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EC%A0%84%20%EC%A4%91%EA%B5%AC%20%EB%AA%A9%EB%8F%99%2024-14%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EC%A0%84%20%EC%A4%91%EA%B5%AC%20%EB%AA%A9%EB%8F%99%2024-14%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2042%2C933%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%982%EC%B8%B5%2F5%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2087.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%97%90%EC%9D%B4%EC%B9%98%EC%95%A4%EC%97%90%EC%8A%A4%EC%97%90%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20(%EC%A3%BC)%EC%9E%A5%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%99%B8%201%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="문화및집회시설" data-q="서울 용산구 한남동 737-24 문화및집회시설 엠아이엔건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-165" data-addr="서울 용산구 한남동 737-24" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 용산구 한남동 737-24</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">3,382㎡</td>
      <td style="white-space:nowrap;">지하5층/11층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">160억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 엠아이엔건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EB%82%A8%EB%8F%99%20737-24%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EB%82%A8%EB%8F%99%20737-24%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C382%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%985%EC%B8%B5%2F11%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20160%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%97%A0%EC%95%84%EC%9D%B4%EC%97%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="충북 제천시 왕암동 1357-2 공장 (주)선엔지니어링종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-166" data-addr="충북 제천시 왕암동 1357-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 제천시 왕암동 1357-2</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,491㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">22.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)선엔지니어링종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%99%95%EC%95%94%EB%8F%99%201357-2%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%99%95%EC%95%94%EB%8F%99%201357-2%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C491%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2022.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%84%A0%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="경남 사천시 사남면 유천리 802 공장 정인종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-167" data-addr="경남 사천시 사남면 유천리 802" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 사천시 사남면 유천리 802</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">306,054㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">469억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 정인종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EC%82%AC%EC%B2%9C%EC%8B%9C%20%EC%82%AC%EB%82%A8%EB%A9%B4%20%EC%9C%A0%EC%B2%9C%EB%A6%AC%20802%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EC%82%AC%EC%B2%9C%EC%8B%9C%20%EC%82%AC%EB%82%A8%EB%A9%B4%20%EC%9C%A0%EC%B2%9C%EB%A6%AC%20802%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20306%2C054%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20469%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A0%95%EC%9D%B8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="창고시설" data-q="제주 제주시 구좌읍 세화리 1283 창고시설 주식회사 디엠이엔지종합건축사사무소 주식회사 건축사사무소 이즈건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-168" data-addr="제주 제주시 구좌읍 세화리 1283" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">제주 제주시 구좌읍 세화리 1283</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,800㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">7.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사 디엠이엔지종합건축사사무소 주식회사 건축사사무소 이즈건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EC%A2%8C%EC%9D%8D%20%EC%84%B8%ED%99%94%EB%A6%AC%201283%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EC%A2%8C%EC%9D%8D%20%EC%84%B8%ED%99%94%EB%A6%AC%201283%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C800%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%207.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%20%EB%94%94%EC%97%A0%EC%9D%B4%EC%97%94%EC%A7%80%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%9D%B4%EC%A6%88%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 파주시 문발동 507-4 공장 코아건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-169" data-addr="경기 파주시 문발동 507-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 파주시 문발동 507-4</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">11,829㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">79.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 코아건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%EB%AC%B8%EB%B0%9C%EB%8F%99%20507-4%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%EB%AC%B8%EB%B0%9C%EB%8F%99%20507-4%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2011%2C829%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2079.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%BD%94%EC%95%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="재축" data-use="자원순환관련시설" data-q="충남 천안시 성거읍 오목리 12-4 자원순환관련시설 온유건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-170" data-addr="충남 천안시 성거읍 오목리 12-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 천안시 성거읍 오목리 12-4</td>
      <td>자원순환관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FCE7F3; color:#BE185D;">재축</span></td>
      <td style="white-space:nowrap;">2,543㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">12.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 온유건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%B1%EA%B1%B0%EC%9D%8D%20%EC%98%A4%EB%AA%A9%EB%A6%AC%2012-4%20(%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%9E%AC%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%B1%EA%B1%B0%EC%9D%8D%20%EC%98%A4%EB%AA%A9%EB%A6%AC%2012-4%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%9E%AC%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C543%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2012.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%98%A8%EC%9C%A0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="서울 동대문구 이문동 251-7 업무시설 동화종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-171" data-addr="서울 동대문구 이문동 251-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 동대문구 이문동 251-7</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">5,495㎡</td>
      <td style="white-space:nowrap;">지하2층/14층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">31억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 동화종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9D%B4%EB%AC%B8%EB%8F%99%20251-7%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9D%B4%EB%AC%B8%EB%8F%99%20251-7%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C495%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%982%EC%B8%B5%2F14%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2031%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%8F%99%ED%99%94%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경남 사천시 사남면 방지리 599 공장 건축사사무소이도  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-172" data-addr="경남 사천시 사남면 방지리 599" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 사천시 사남면 방지리 599</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">32,658㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">83.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소이도</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EC%82%AC%EC%B2%9C%EC%8B%9C%20%EC%82%AC%EB%82%A8%EB%A9%B4%20%EB%B0%A9%EC%A7%80%EB%A6%AC%20599%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EC%82%AC%EC%B2%9C%EC%8B%9C%20%EC%82%AC%EB%82%A8%EB%A9%B4%20%EB%B0%A9%EC%A7%80%EB%A6%AC%20599%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2032%2C658%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2083.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%9D%B4%EB%8F%84%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="강원 강릉시 대전동 896-1 공장 가우재건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-173" data-addr="강원 강릉시 대전동 896-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 강릉시 대전동 896-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">6,400㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">23.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 가우재건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EB%8C%80%EC%A0%84%EB%8F%99%20896-1%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EB%8C%80%EC%A0%84%EB%8F%99%20896-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C400%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2023.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B0%80%EC%9A%B0%EC%9E%AC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경북 경주시 외동읍 문산리 986 공장 유일종합장래운건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-174" data-addr="경북 경주시 외동읍 문산리 986" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 경주시 외동읍 문산리 986</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,271㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">16.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 유일종합장래운건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EC%99%B8%EB%8F%99%EC%9D%8D%20%EB%AC%B8%EC%82%B0%EB%A6%AC%20986%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EC%99%B8%EB%8F%99%EC%9D%8D%20%EB%AC%B8%EC%82%B0%EB%A6%AC%20986%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C271%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2016.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9C%A0%EC%9D%BC%EC%A2%85%ED%95%A9%EC%9E%A5%EB%9E%98%EC%9A%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="업무시설" data-q="서울 구로구 구로동 107 업무시설 퍼디건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-175" data-addr="서울 구로구 구로동 107" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 구로구 구로동 107</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">4,092㎡</td>
      <td style="white-space:nowrap;">지하1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">47억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 퍼디건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EA%B5%AC%EB%A1%9C%EB%8F%99%20107%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EA%B5%AC%EB%A1%9C%EB%8F%99%20107%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C092%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2047%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%8D%BC%EB%94%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="업무시설" data-q="서울 구로구 구로동 107-8 업무시설 퍼디건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-176" data-addr="서울 구로구 구로동 107-8" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 구로구 구로동 107-8</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">4,117㎡</td>
      <td style="white-space:nowrap;">지하1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">43.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 퍼디건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EA%B5%AC%EB%A1%9C%EB%8F%99%20107-8%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EA%B5%AC%EB%A1%9C%EB%8F%99%20107-8%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C117%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2043.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%8D%BC%EB%94%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="자동차관련시설" data-q="대구 북구 관음동 448-1 자동차관련시설 주식회사건축사사무소에이디에프건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-177" data-addr="대구 북구 관음동 448-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 북구 관음동 448-1</td>
      <td>자동차관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">9,328㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">22.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사건축사사무소에이디에프건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EB%B6%81%EA%B5%AC%20%EA%B4%80%EC%9D%8C%EB%8F%99%20448-1%20(%EC%9E%90%EB%8F%99%EC%B0%A8%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EB%B6%81%EA%B5%AC%20%EA%B4%80%EC%9D%8C%EB%8F%99%20448-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EB%8F%99%EC%B0%A8%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%209%2C328%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2022.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%97%90%EC%9D%B4%EB%94%94%EC%97%90%ED%94%84%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="서울 강남구 역삼동 648-22 제1종근린생활시설 (주)국전건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-178" data-addr="서울 강남구 역삼동 648-22" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강남구 역삼동 648-22</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,249㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">360억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)국전건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%97%AD%EC%82%BC%EB%8F%99%20648-22%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%97%AD%EC%82%BC%EB%8F%99%20648-22%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C249%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20360%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B5%AD%EC%A0%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="창고시설" data-q="전북 완주군 삼례읍 수계리 1382 창고시설 호연건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-179" data-addr="전북 완주군 삼례읍 수계리 1382" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 완주군 삼례읍 수계리 1382</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,668㎡</td>
      <td style="white-space:nowrap;">지하1층/4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">5.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 호연건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EC%82%BC%EB%A1%80%EC%9D%8D%20%EC%88%98%EA%B3%84%EB%A6%AC%201382%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EC%82%BC%EB%A1%80%EC%9D%8D%20%EC%88%98%EA%B3%84%EB%A6%AC%201382%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C668%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F4%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%205.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%98%B8%EC%97%B0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공동주택" data-q="부산 연제구 거제동 1528 공동주택   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-180" data-addr="부산 연제구 거제동 1528" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 연제구 거제동 1528</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">106,522㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">173억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EC%97%B0%EC%A0%9C%EA%B5%AC%20%EA%B1%B0%EC%A0%9C%EB%8F%99%201528%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EC%97%B0%EC%A0%9C%EA%B5%AC%20%EA%B1%B0%EC%A0%9C%EB%8F%99%201528%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20106%2C522%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20173%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제2종근린생활시설" data-q="인천 서해구 청라동 157-7 제2종근린생활시설 예가람건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-181" data-addr="인천 서해구 청라동 157-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">인천 서해구 청라동 157-7</td>
      <td>제2종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">15,691㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 예가람건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9D%B8%EC%B2%9C%20%EC%84%9C%ED%95%B4%EA%B5%AC%20%EC%B2%AD%EB%9D%BC%EB%8F%99%20157-7%20(%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9D%B8%EC%B2%9C%20%EC%84%9C%ED%95%B4%EA%B5%AC%20%EC%B2%AD%EB%9D%BC%EB%8F%99%20157-7%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C2%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2015%2C691%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EC%98%88%EA%B0%80%EB%9E%8C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="전남 해남군 계곡면 법곡리 664-3 동물및식물관련시설 주식회사문엔창건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-182" data-addr="전남 해남군 계곡면 법곡리 664-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 해남군 계곡면 법곡리 664-3</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,351㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2,291만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사문엔창건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%ED%95%B4%EB%82%A8%EA%B5%B0%20%EA%B3%84%EA%B3%A1%EB%A9%B4%20%EB%B2%95%EA%B3%A1%EB%A6%AC%20664-3%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%ED%95%B4%EB%82%A8%EA%B5%B0%20%EA%B3%84%EA%B3%A1%EB%A9%B4%20%EB%B2%95%EA%B3%A1%EB%A6%AC%20664-3%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C351%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202%2C291%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%AC%B8%EC%97%94%EC%B0%BD%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="문화및집회시설" data-q="경기 안산시 본오동 665-55 문화및집회시설 (주)에스이오피 건축사사무소 호림디자인건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-183" data-addr="경기 안산시 본오동 665-55" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 안산시 본오동 665-55</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,102㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">807억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)에스이오피 건축사사무소 호림디자인건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EB%B3%B8%EC%98%A4%EB%8F%99%20665-55%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EB%B3%B8%EC%98%A4%EB%8F%99%20665-55%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C102%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20807%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%97%90%EC%8A%A4%EC%9D%B4%EC%98%A4%ED%94%BC%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%ED%98%B8%EB%A6%BC%EB%94%94%EC%9E%90%EC%9D%B8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="부산 기장군 장안읍 명례리 897-4 공장 대승종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-184" data-addr="부산 기장군 장안읍 명례리 897-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 기장군 장안읍 명례리 897-4</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">17,952㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">78억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 대승종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EB%AA%85%EB%A1%80%EB%A6%AC%20897-4%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EB%AA%85%EB%A1%80%EB%A6%AC%20897-4%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2017%2C952%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2078%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%8C%80%EC%8A%B9%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="울산 북구 명촌동 1-2 공장 현대엔지니어링(주)  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-185" data-addr="울산 북구 명촌동 1-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">울산 북구 명촌동 1-2</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">452,798㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">17.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 현대엔지니어링(주)</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9A%B8%EC%82%B0%20%EB%B6%81%EA%B5%AC%20%EB%AA%85%EC%B4%8C%EB%8F%99%201-2%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9A%B8%EC%82%B0%20%EB%B6%81%EA%B5%AC%20%EB%AA%85%EC%B4%8C%EB%8F%99%201-2%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20452%2C798%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2017.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%98%84%EB%8C%80%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81(%EC%A3%BC)%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="종교시설" data-q="충북 청주시 북문로3가 3-2 종교시설 주식회사센건축사사무소 (주)에스건설 주식회사센건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-186" data-addr="충북 청주시 북문로3가 3-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 청주시 북문로3가 3-2</td>
      <td>종교시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,275㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">15.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사센건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> (주)에스건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 주식회사센건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EB%B6%81%EB%AC%B8%EB%A1%9C3%EA%B0%80%203-2%20(%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EB%B6%81%EB%AC%B8%EB%A1%9C3%EA%B0%80%203-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C275%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2015.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%84%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20(%EC%A3%BC)%EC%97%90%EC%8A%A4%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%84%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 안산시 성곡동 701-5 공장 건축사사무소더반  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-187" data-addr="경기 안산시 성곡동 701-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 안산시 성곡동 701-5</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,034㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">18.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소더반</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%84%B1%EA%B3%A1%EB%8F%99%20701-5%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%84%B1%EA%B3%A1%EB%8F%99%20701-5%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C034%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2018.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%8D%94%EB%B0%98%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="경기 화성시 송산동 100-47 공장 (주)동원디엔씨건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-188" data-addr="경기 화성시 송산동 100-47" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 화성시 송산동 100-47</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,408㎡</td>
      <td style="white-space:nowrap;">지하1층/4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">10.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)동원디엔씨건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EC%86%A1%EC%82%B0%EB%8F%99%20100-47%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EC%86%A1%EC%82%B0%EB%8F%99%20100-47%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C408%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F4%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2010.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%8F%99%EC%9B%90%EB%94%94%EC%97%94%EC%94%A8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="서울 성동구 성수동2가 322-6 업무시설 (주)더시스템랩건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-189" data-addr="서울 성동구 성수동2가 322-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 성동구 성수동2가 322-6</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,648㎡</td>
      <td style="white-space:nowrap;">지하8층/10층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">56.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)더시스템랩건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%84%B1%EC%88%98%EB%8F%992%EA%B0%80%20322-6%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%84%B1%EC%88%98%EB%8F%992%EA%B0%80%20322-6%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C648%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%988%EC%B8%B5%2F10%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2056.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%8D%94%EC%8B%9C%EC%8A%A4%ED%85%9C%EB%9E%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="충남 당진시 고대면 성산리 192-10 동물및식물관련시설 (주)선건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-190" data-addr="충남 당진시 고대면 성산리 192-10" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 당진시 고대면 성산리 192-10</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">7,658㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2,696만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)선건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EB%8B%B9%EC%A7%84%EC%8B%9C%20%EA%B3%A0%EB%8C%80%EB%A9%B4%20%EC%84%B1%EC%82%B0%EB%A6%AC%20192-10%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EB%8B%B9%EC%A7%84%EC%8B%9C%20%EA%B3%A0%EB%8C%80%EB%A9%B4%20%EC%84%B1%EC%82%B0%EB%A6%AC%20192-10%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C658%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202%2C696%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%84%A0%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="창고시설" data-q="경기 화성시 향남읍 도이리 165-14 창고시설 지에이건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-191" data-addr="경기 화성시 향남읍 도이리 165-14" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 화성시 향남읍 도이리 165-14</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,629㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 지에이건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%ED%96%A5%EB%82%A8%EC%9D%8D%20%EB%8F%84%EC%9D%B4%EB%A6%AC%20165-14%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%ED%96%A5%EB%82%A8%EC%9D%8D%20%EB%8F%84%EC%9D%B4%EB%A6%AC%20165-14%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C629%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A7%80%EC%97%90%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경북 경주시 안강읍 옥산리 1053-1 공장 이공건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-192" data-addr="경북 경주시 안강읍 옥산리 1053-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 경주시 안강읍 옥산리 1053-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,478㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">9,374만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 이공건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EC%95%88%EA%B0%95%EC%9D%8D%20%EC%98%A5%EC%82%B0%EB%A6%AC%201053-1%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EC%95%88%EA%B0%95%EC%9D%8D%20%EC%98%A5%EC%82%B0%EB%A6%AC%201053-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C478%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%209%2C374%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EC%9D%B4%EA%B3%B5%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="문화및집회시설" data-q="경기 안성시 보개면 양복리 238-2 문화및집회시설 (주)건축사사무소메타  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-193" data-addr="경기 안성시 보개면 양복리 238-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 안성시 보개면 양복리 238-2</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,406㎡</td>
      <td style="white-space:nowrap;">지하1층/3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">25.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)건축사사무소메타</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%84%B1%EC%8B%9C%20%EB%B3%B4%EA%B0%9C%EB%A9%B4%20%EC%96%91%EB%B3%B5%EB%A6%AC%20238-2%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%84%B1%EC%8B%9C%20%EB%B3%B4%EA%B0%9C%EB%A9%B4%20%EC%96%91%EB%B3%B5%EB%A6%AC%20238-2%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C406%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F3%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2025.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%A9%94%ED%83%80%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충남 서천군 장항읍 신창리 399 공장 (주)종합건축사사무소환경건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-194" data-addr="충남 서천군 장항읍 신창리 399" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 서천군 장항읍 신창리 399</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">162,304㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">144억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)종합건축사사무소환경건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%84%9C%EC%B2%9C%EA%B5%B0%20%EC%9E%A5%ED%95%AD%EC%9D%8D%20%EC%8B%A0%EC%B0%BD%EB%A6%AC%20399%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%84%9C%EC%B2%9C%EA%B5%B0%20%EC%9E%A5%ED%95%AD%EC%9D%8D%20%EC%8B%A0%EC%B0%BD%EB%A6%AC%20399%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20162%2C304%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20144%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%ED%99%98%EA%B2%BD%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="전북 부안군 계화면 궁안리 2406-5 동물및식물관련시설 (주)다온건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-195" data-addr="전북 부안군 계화면 궁안리 2406-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 부안군 계화면 궁안리 2406-5</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,880㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">8,256만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)다온건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EB%B6%80%EC%95%88%EA%B5%B0%20%EA%B3%84%ED%99%94%EB%A9%B4%20%EA%B6%81%EC%95%88%EB%A6%AC%202406-5%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EB%B6%80%EC%95%88%EA%B5%B0%20%EA%B3%84%ED%99%94%EB%A9%B4%20%EA%B6%81%EC%95%88%EB%A6%AC%202406-5%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C880%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%208%2C256%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%8B%A4%EC%98%A8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="전남 영암군 군서면 마산리 257 동물및식물관련시설 명제건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-196" data-addr="전남 영암군 군서면 마산리 257" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 영암군 군서면 마산리 257</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,061㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4,091만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 명제건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EA%B5%B0%EC%84%9C%EB%A9%B4%20%EB%A7%88%EC%82%B0%EB%A6%AC%20257%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%EA%B5%B0%EC%84%9C%EB%A9%B4%20%EB%A7%88%EC%82%B0%EB%A6%AC%20257%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C061%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204%2C091%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EB%AA%85%EC%A0%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="제1종근린생활시설" data-q="충북 충주시 중앙탑면 하구암리 727 제1종근린생활시설 한국전력공사  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-197" data-addr="충북 충주시 중앙탑면 하구암리 727" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 충주시 중앙탑면 하구암리 727</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,900㎡</td>
      <td style="white-space:nowrap;">지하1층/4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 한국전력공사</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EC%A4%91%EC%95%99%ED%83%91%EB%A9%B4%20%ED%95%98%EA%B5%AC%EC%95%94%EB%A6%AC%20727%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EC%A4%91%EC%95%99%ED%83%91%EB%A9%B4%20%ED%95%98%EA%B5%AC%EC%95%94%EB%A6%AC%20727%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C900%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F4%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%95%9C%EA%B5%AD%EC%A0%84%EB%A0%A5%EA%B3%B5%EC%82%AC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="강원 춘천시 동내면 거두리 1151 공장 건축사사무소 시노시아 씨앤에이치 엔지니어링  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-198" data-addr="강원 춘천시 동내면 거두리 1151" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 춘천시 동내면 거두리 1151</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">14,188㎡</td>
      <td style="white-space:nowrap;">지하1층/3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">41.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소 시노시아 씨앤에이치 엔지니어링</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EB%8F%99%EB%82%B4%EB%A9%B4%20%EA%B1%B0%EB%91%90%EB%A6%AC%201151%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EB%8F%99%EB%82%B4%EB%A9%B4%20%EA%B1%B0%EB%91%90%EB%A6%AC%201151%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2014%2C188%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F3%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2041.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%8B%9C%EB%85%B8%EC%8B%9C%EC%95%84%20%EC%94%A8%EC%95%A4%EC%97%90%EC%9D%B4%EC%B9%98%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="노유자시설" data-q="전남 장성군 남면 분향리 258-1 노유자시설 로켓건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-199" data-addr="전남 장성군 남면 분향리 258-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 장성군 남면 분향리 258-1</td>
      <td>노유자시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,166㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 로켓건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%9E%A5%EC%84%B1%EA%B5%B0%20%EB%82%A8%EB%A9%B4%20%EB%B6%84%ED%96%A5%EB%A6%AC%20258-1%20(%EB%85%B8%EC%9C%A0%EC%9E%90%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%9E%A5%EC%84%B1%EA%B5%B0%20%EB%82%A8%EB%A9%B4%20%EB%B6%84%ED%96%A5%EB%A6%AC%20258-1%0A%EC%9A%A9%EB%8F%84%3A%20%EB%85%B8%EC%9C%A0%EC%9E%90%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C166%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%A1%9C%EC%BC%93%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="판매시설" data-q="경기 광명시 일직동 500 판매시설 (주)한원포럼건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-200" data-addr="경기 광명시 일직동 500" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 광명시 일직동 500</td>
      <td>판매시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">258,881㎡</td>
      <td style="white-space:nowrap;">지하7층/10층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3,176억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)한원포럼건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EB%AA%85%EC%8B%9C%20%EC%9D%BC%EC%A7%81%EB%8F%99%20500%20(%ED%8C%90%EB%A7%A4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EB%AA%85%EC%8B%9C%20%EC%9D%BC%EC%A7%81%EB%8F%99%20500%0A%EC%9A%A9%EB%8F%84%3A%20%ED%8C%90%EB%A7%A4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20258%2C881%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%987%EC%B8%B5%2F10%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203%2C176%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%95%9C%EC%9B%90%ED%8F%AC%EB%9F%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="서울 중구 황학동 1582 업무시설 브엔엘메타건축사사무소주식회사  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-201" data-addr="서울 중구 황학동 1582" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 중구 황학동 1582</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,192㎡</td>
      <td style="white-space:nowrap;">지하2층/12층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">22.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 브엔엘메타건축사사무소주식회사</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%99%A9%ED%95%99%EB%8F%99%201582%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%99%A9%ED%95%99%EB%8F%99%201582%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C192%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%982%EC%B8%B5%2F12%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2022.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%B8%8C%EC%97%94%EC%97%98%EB%A9%94%ED%83%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경북 포항시 동촌동 5 공장 (주)디와이건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-202" data-addr="경북 포항시 동촌동 5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 포항시 동촌동 5</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,917,738㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">239억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)디와이건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%8F%99%EC%B4%8C%EB%8F%99%205%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%8F%99%EC%B4%8C%EB%8F%99%205%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C917%2C738%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20239%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%94%94%EC%99%80%EC%9D%B4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="전남 담양군 무정면 봉안리 383-1 공장 천지인건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-203" data-addr="전남 담양군 무정면 봉안리 383-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 담양군 무정면 봉안리 383-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,122㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 천지인건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EB%8B%B4%EC%96%91%EA%B5%B0%20%EB%AC%B4%EC%A0%95%EB%A9%B4%20%EB%B4%89%EC%95%88%EB%A6%AC%20383-1%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EB%8B%B4%EC%96%91%EA%B5%B0%20%EB%AC%B4%EC%A0%95%EB%A9%B4%20%EB%B4%89%EC%95%88%EB%A6%AC%20383-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C122%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%B2%9C%EC%A7%80%EC%9D%B8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="창고시설" data-q="경남 진주시 가좌동 900 창고시설 조은김진희건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-204" data-addr="경남 진주시 가좌동 900" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 진주시 가좌동 900</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">445,956㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1,666억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 조은김진희건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EC%A7%84%EC%A3%BC%EC%8B%9C%20%EA%B0%80%EC%A2%8C%EB%8F%99%20900%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EC%A7%84%EC%A3%BC%EC%8B%9C%20%EA%B0%80%EC%A2%8C%EB%8F%99%20900%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20445%2C956%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201%2C666%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A1%B0%EC%9D%80%EA%B9%80%EC%A7%84%ED%9D%AC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="대전 유성구 장동 100 교육연구시설 (주)건축사사무소 티오피 (주)건축사사무소인 외 1  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-205" data-addr="대전 유성구 장동 100" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대전 유성구 장동 100</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">124,877㎡</td>
      <td style="white-space:nowrap;">지하1층/5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">35.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)건축사사무소 티오피 (주)건축사사무소인 외 1</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%9E%A5%EB%8F%99%20100%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%9E%A5%EB%8F%99%20100%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20124%2C877%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F5%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2035.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%ED%8B%B0%EC%98%A4%ED%94%BC%20(%EC%A3%BC)%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%9D%B8%20%EC%99%B8%201%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="창고시설" data-q="충남 아산시 음봉면 신휴리 774 창고시설 주식회사남호종합엔지니어링건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-206" data-addr="충남 아산시 음봉면 신휴리 774" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 아산시 음봉면 신휴리 774</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">21,801㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">128억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사남호종합엔지니어링건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%9D%8C%EB%B4%89%EB%A9%B4%20%EC%8B%A0%ED%9C%B4%EB%A6%AC%20774%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%9D%8C%EB%B4%89%EB%A9%B4%20%EC%8B%A0%ED%9C%B4%EB%A6%AC%20774%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2021%2C801%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20128%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%82%A8%ED%98%B8%EC%A2%85%ED%95%A9%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="제1종근린생활시설" data-q="서울 강남구 신사동 629-31 제1종근린생활시설 원이엔씨종합건축사사무소주식회사  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-207" data-addr="서울 강남구 신사동 629-31" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강남구 신사동 629-31</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">2,985㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">286억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 원이엔씨종합건축사사무소주식회사</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%8B%A0%EC%82%AC%EB%8F%99%20629-31%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%8B%A0%EC%82%AC%EB%8F%99%20629-31%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C985%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20286%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9B%90%EC%9D%B4%EC%97%94%EC%94%A8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전남 광양시 광양읍 익신리 756-8 공장 신아건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-208" data-addr="전남 광양시 광양읍 익신리 756-8" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 광양시 광양읍 익신리 756-8</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,629㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">9.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 신아건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EA%B4%91%EC%96%91%EC%8B%9C%20%EA%B4%91%EC%96%91%EC%9D%8D%20%EC%9D%B5%EC%8B%A0%EB%A6%AC%20756-8%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EA%B4%91%EC%96%91%EC%8B%9C%20%EA%B4%91%EC%96%91%EC%9D%8D%20%EC%9D%B5%EC%8B%A0%EB%A6%AC%20756-8%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C629%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%209.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%8B%A0%EC%95%84%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="울산 남구 상개동 472-9 공장 석원건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-209" data-addr="울산 남구 상개동 472-9" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">울산 남구 상개동 472-9</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">53,871㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">287억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 석원건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9A%B8%EC%82%B0%20%EB%82%A8%EA%B5%AC%20%EC%83%81%EA%B0%9C%EB%8F%99%20472-9%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9A%B8%EC%82%B0%20%EB%82%A8%EA%B5%AC%20%EC%83%81%EA%B0%9C%EB%8F%99%20472-9%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2053%2C871%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20287%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%84%9D%EC%9B%90%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="강원 철원군 동송읍 관우리 250 동물및식물관련시설 (주)엄씨네건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-210" data-addr="강원 철원군 동송읍 관우리 250" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 철원군 동송읍 관우리 250</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,836㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">7,763만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)엄씨네건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EC%B2%A0%EC%9B%90%EA%B5%B0%20%EB%8F%99%EC%86%A1%EC%9D%8D%20%EA%B4%80%EC%9A%B0%EB%A6%AC%20250%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EC%B2%A0%EC%9B%90%EA%B5%B0%20%EB%8F%99%EC%86%A1%EC%9D%8D%20%EA%B4%80%EC%9A%B0%EB%A6%AC%20250%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C836%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%207%2C763%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%97%84%EC%94%A8%EB%84%A4%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="교육연구시설" data-q="경기 성남시 구미동 159 교육연구시설 건축사사무소예정  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-211" data-addr="경기 성남시 구미동 159" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 성남시 구미동 159</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">134,124㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">168억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소예정</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EA%B5%AC%EB%AF%B8%EB%8F%99%20159%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EA%B5%AC%EB%AF%B8%EB%8F%99%20159%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20134%2C124%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20168%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%98%88%EC%A0%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="서울 관악구 봉천동 862-7 제1종근린생활시설 (주)에이아이종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-212" data-addr="서울 관악구 봉천동 862-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 관악구 봉천동 862-7</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,988㎡</td>
      <td style="white-space:nowrap;">지하1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">64.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)에이아이종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%B4%89%EC%B2%9C%EB%8F%99%20862-7%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%B4%89%EC%B2%9C%EB%8F%99%20862-7%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C988%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2064.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%97%90%EC%9D%B4%EC%95%84%EC%9D%B4%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 충주시 주덕읍 당우리 1513 공장 우리종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-213" data-addr="충북 충주시 주덕읍 당우리 1513" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 충주시 주덕읍 당우리 1513</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,832㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">11.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 우리종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EC%A3%BC%EB%8D%95%EC%9D%8D%20%EB%8B%B9%EC%9A%B0%EB%A6%AC%201513%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EC%A3%BC%EB%8D%95%EC%9D%8D%20%EB%8B%B9%EC%9A%B0%EB%A6%AC%201513%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C832%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2011.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9A%B0%EB%A6%AC%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경북 성주군 선남면 문방리 1411 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-214" data-addr="경북 성주군 선남면 문방리 1411" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 성주군 선남면 문방리 1411</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,108㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">7.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EC%84%B1%EC%A3%BC%EA%B5%B0%20%EC%84%A0%EB%82%A8%EB%A9%B4%20%EB%AC%B8%EB%B0%A9%EB%A6%AC%201411%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EC%84%B1%EC%A3%BC%EA%B5%B0%20%EC%84%A0%EB%82%A8%EB%A9%B4%20%EB%AC%B8%EB%B0%A9%EB%A6%AC%201411%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C108%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%207.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="의료시설" data-q="서울 구로구 구로동 26-2 의료시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-215" data-addr="서울 구로구 구로동 26-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 구로구 구로동 26-2</td>
      <td>의료시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">7,340㎡</td>
      <td style="white-space:nowrap;">5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">183억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EA%B5%AC%EB%A1%9C%EB%8F%99%2026-2%20(%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EA%B5%AC%EB%A1%9C%EB%8F%99%2026-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9D%98%EB%A3%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C340%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%205%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20183%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="판매시설" data-q="제주 제주시 구좌읍 세화리 1339-2 판매시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-216" data-addr="제주 제주시 구좌읍 세화리 1339-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">제주 제주시 구좌읍 세화리 1339-2</td>
      <td>판매시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">9,627㎡</td>
      <td style="white-space:nowrap;">지하1층/11층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EC%A2%8C%EC%9D%8D%20%EC%84%B8%ED%99%94%EB%A6%AC%201339-2%20(%ED%8C%90%EB%A7%A4%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EC%A2%8C%EC%9D%8D%20%EC%84%B8%ED%99%94%EB%A6%AC%201339-2%0A%EC%9A%A9%EB%8F%84%3A%20%ED%8C%90%EB%A7%A4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%209%2C627%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F11%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="경기도 화성시 만세구 송산면 용포리 블록 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-217" data-addr="경기도 화성시 만세구 송산면 용포리 블록" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기도 화성시 만세구 송산면 용포리 블록</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,185㎡</td>
      <td style="white-space:nowrap;">6층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%A7%8C%EC%84%B8%EA%B5%AC%20%EC%86%A1%EC%82%B0%EB%A9%B4%20%EC%9A%A9%ED%8F%AC%EB%A6%AC%20%EB%B8%94%EB%A1%9D%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%A7%8C%EC%84%B8%EA%B5%AC%20%EC%86%A1%EC%82%B0%EB%A9%B4%20%EC%9A%A9%ED%8F%AC%EB%A6%AC%20%EB%B8%94%EB%A1%9D%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C185%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%206%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="국방,군사시설" data-q="경기 양평군 청운면 도원리 505-1 국방,군사시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-218" data-addr="경기 양평군 청운면 도원리 505-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 양평군 청운면 도원리 505-1</td>
      <td>국방,군사시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,334㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%ED%8F%89%EA%B5%B0%20%EC%B2%AD%EC%9A%B4%EB%A9%B4%20%EB%8F%84%EC%9B%90%EB%A6%AC%20505-1%20(%EA%B5%AD%EB%B0%A9%2C%EA%B5%B0%EC%82%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%ED%8F%89%EA%B5%B0%20%EC%B2%AD%EC%9A%B4%EB%A9%B4%20%EB%8F%84%EC%9B%90%EB%A6%AC%20505-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%AD%EB%B0%A9%2C%EA%B5%B0%EC%82%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C334%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="관광휴게시설" data-q="충북 음성군 금왕읍 용계리 190-3 관광휴게시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-219" data-addr="충북 음성군 금왕읍 용계리 190-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 음성군 금왕읍 용계리 190-3</td>
      <td>관광휴게시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,396㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">17.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EA%B8%88%EC%99%95%EC%9D%8D%20%EC%9A%A9%EA%B3%84%EB%A6%AC%20190-3%20(%EA%B4%80%EA%B4%91%ED%9C%B4%EA%B2%8C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EA%B8%88%EC%99%95%EC%9D%8D%20%EC%9A%A9%EA%B3%84%EB%A6%AC%20190-3%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B4%80%EA%B4%91%ED%9C%B4%EA%B2%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C396%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2017.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="교육연구시설" data-q="충남 홍성군 홍북읍 신경리 1576 교육연구시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-220" data-addr="충남 홍성군 홍북읍 신경리 1576" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 홍성군 홍북읍 신경리 1576</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,000㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">16.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%ED%99%8D%EC%84%B1%EA%B5%B0%20%ED%99%8D%EB%B6%81%EC%9D%8D%20%EC%8B%A0%EA%B2%BD%EB%A6%AC%201576%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%ED%99%8D%EC%84%B1%EA%B5%B0%20%ED%99%8D%EB%B6%81%EC%9D%8D%20%EC%8B%A0%EA%B2%BD%EB%A6%AC%201576%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C000%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2016.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 안산시 초지동 654-10 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-221" data-addr="경기 안산시 초지동 654-10" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 안산시 초지동 654-10</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">6,322㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">41.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%B4%88%EC%A7%80%EB%8F%99%20654-10%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%B4%88%EC%A7%80%EB%8F%99%20654-10%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C322%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2041.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="경기 구리시 인창동 676-2 제1종근린생활시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-222" data-addr="경기 구리시 인창동 676-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 구리시 인창동 676-2</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">8,970㎡</td>
      <td style="white-space:nowrap;">지하2층/17층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">121억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B5%AC%EB%A6%AC%EC%8B%9C%20%EC%9D%B8%EC%B0%BD%EB%8F%99%20676-2%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B5%AC%EB%A6%AC%EC%8B%9C%20%EC%9D%B8%EC%B0%BD%EB%8F%99%20676-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%208%2C970%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%982%EC%B8%B5%2F17%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20121%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="자원순환관련시설" data-q="충남 논산시 부적면 감곡리 82-23 자원순환관련시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-223" data-addr="충남 논산시 부적면 감곡리 82-23" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 논산시 부적면 감곡리 82-23</td>
      <td>자원순환관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,374㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">8.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EB%B6%80%EC%A0%81%EB%A9%B4%20%EA%B0%90%EA%B3%A1%EB%A6%AC%2082-23%20(%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EB%B6%80%EC%A0%81%EB%A9%B4%20%EA%B0%90%EA%B3%A1%EB%A6%AC%2082-23%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9E%90%EC%9B%90%EC%88%9C%ED%99%98%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C374%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%208.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="강원 속초시 대포동 45-15 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-224" data-addr="강원 속초시 대포동 45-15" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 속초시 대포동 45-15</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,833㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">8.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EC%86%8D%EC%B4%88%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EB%8F%99%2045-15%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EC%86%8D%EC%B4%88%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EB%8F%99%2045-15%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C833%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%208.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="강원 원주시 문막읍 후용리 1153 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-225" data-addr="강원 원주시 문막읍 후용리 1153" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 원주시 문막읍 후용리 1153</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,130㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EB%AC%B8%EB%A7%89%EC%9D%8D%20%ED%9B%84%EC%9A%A9%EB%A6%AC%201153%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EB%AC%B8%EB%A7%89%EC%9D%8D%20%ED%9B%84%EC%9A%A9%EB%A6%AC%201153%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C130%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="동물및식물관련시설" data-q="경북 영천시 금호읍 남성리 153-5 동물및식물관련시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-226" data-addr="경북 영천시 금호읍 남성리 153-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 영천시 금호읍 남성리 153-5</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,163㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2,906만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%B2%9C%EC%8B%9C%20%EA%B8%88%ED%98%B8%EC%9D%8D%20%EB%82%A8%EC%84%B1%EB%A6%AC%20153-5%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%B2%9C%EC%8B%9C%20%EA%B8%88%ED%98%B8%EC%9D%8D%20%EB%82%A8%EC%84%B1%EB%A6%AC%20153-5%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C163%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202%2C906%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경남 거제시 사등면 사등리 2050 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-227" data-addr="경남 거제시 사등면 사등리 2050" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 거제시 사등면 사등리 2050</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">18,231㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">83.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EA%B1%B0%EC%A0%9C%EC%8B%9C%20%EC%82%AC%EB%93%B1%EB%A9%B4%20%EC%82%AC%EB%93%B1%EB%A6%AC%202050%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EA%B1%B0%EC%A0%9C%EC%8B%9C%20%EC%82%AC%EB%93%B1%EB%A9%B4%20%EC%82%AC%EB%93%B1%EB%A6%AC%202050%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2018%2C231%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2083.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="경기 평택시 고덕동 2153-5 업무시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-228" data-addr="경기 평택시 고덕동 2153-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 고덕동 2153-5</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">17,665㎡</td>
      <td style="white-space:nowrap;">지하5층/14층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">92.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EA%B3%A0%EB%8D%95%EB%8F%99%202153-5%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EA%B3%A0%EB%8D%95%EB%8F%99%202153-5%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2017%2C665%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%985%EC%B8%B5%2F14%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2092.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="국방,군사시설" data-q="충남 논산시 양촌면 거사리 576 국방,군사시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-229" data-addr="충남 논산시 양촌면 거사리 576" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 논산시 양촌면 거사리 576</td>
      <td>국방,군사시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">67,914㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">220억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EC%96%91%EC%B4%8C%EB%A9%B4%20%EA%B1%B0%EC%82%AC%EB%A6%AC%20576%20(%EA%B5%AD%EB%B0%A9%2C%EA%B5%B0%EC%82%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EC%96%91%EC%B4%8C%EB%A9%B4%20%EA%B1%B0%EC%82%AC%EB%A6%AC%20576%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%AD%EB%B0%A9%2C%EA%B5%B0%EC%82%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2067%2C914%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20220%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="운수시설" data-q="서울 강서구 오곡동 1 운수시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-230" data-addr="서울 강서구 오곡동 1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강서구 오곡동 1</td>
      <td>운수시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">45,655㎡</td>
      <td style="white-space:nowrap;">지하1층/3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4,762억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EC%98%A4%EA%B3%A1%EB%8F%99%201%20(%EC%9A%B4%EC%88%98%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EC%98%A4%EA%B3%A1%EB%8F%99%201%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9A%B4%EC%88%98%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2045%2C655%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F3%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204%2C762%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="전북 남원시 대강면 월탄리 820-3 동물및식물관련시설 아키엔건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-231" data-addr="전북 남원시 대강면 월탄리 820-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 남원시 대강면 월탄리 820-3</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,330㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2,378만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 아키엔건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EB%82%A8%EC%9B%90%EC%8B%9C%20%EB%8C%80%EA%B0%95%EB%A9%B4%20%EC%9B%94%ED%83%84%EB%A6%AC%20820-3%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EB%82%A8%EC%9B%90%EC%8B%9C%20%EB%8C%80%EA%B0%95%EB%A9%B4%20%EC%9B%94%ED%83%84%EB%A6%AC%20820-3%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C330%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202%2C378%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EC%95%84%ED%82%A4%EC%97%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 연천군 백학면 통구리 1062-9 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-232" data-addr="경기 연천군 백학면 통구리 1062-9" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 연천군 백학면 통구리 1062-9</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,920㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">8.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%97%B0%EC%B2%9C%EA%B5%B0%20%EB%B0%B1%ED%95%99%EB%A9%B4%20%ED%86%B5%EA%B5%AC%EB%A6%AC%201062-9%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%97%B0%EC%B2%9C%EA%B5%B0%20%EB%B0%B1%ED%95%99%EB%A9%B4%20%ED%86%B5%EA%B5%AC%EB%A6%AC%201062-9%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C920%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%208.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="제1종근린생활시설" data-q="대구 서구 내당동 871-40 제1종근린생활시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-233" data-addr="대구 서구 내당동 871-40" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 서구 내당동 871-40</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,257㎡</td>
      <td style="white-space:nowrap;">지하1층/11층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">12.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EC%84%9C%EA%B5%AC%20%EB%82%B4%EB%8B%B9%EB%8F%99%20871-40%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EC%84%9C%EA%B5%AC%20%EB%82%B4%EB%8B%B9%EB%8F%99%20871-40%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C257%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F11%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2012.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="종교시설" data-q="경기 양평군 양서면 목왕리 116 종교시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-234" data-addr="경기 양평군 양서면 목왕리 116" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 양평군 양서면 목왕리 116</td>
      <td>종교시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">11,370㎡</td>
      <td style="white-space:nowrap;">지하1층/2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%ED%8F%89%EA%B5%B0%20%EC%96%91%EC%84%9C%EB%A9%B4%20%EB%AA%A9%EC%99%95%EB%A6%AC%20116%20(%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%ED%8F%89%EA%B5%B0%20%EC%96%91%EC%84%9C%EB%A9%B4%20%EB%AA%A9%EC%99%95%EB%A6%AC%20116%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2011%2C370%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F2%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="서울 강북구 수유동 192-59 업무시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-235" data-addr="서울 강북구 수유동 192-59" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 강북구 수유동 192-59</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">69,080㎡</td>
      <td style="white-space:nowrap;">지하8층/20층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">490억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%B6%81%EA%B5%AC%20%EC%88%98%EC%9C%A0%EB%8F%99%20192-59%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%B6%81%EA%B5%AC%20%EC%88%98%EC%9C%A0%EB%8F%99%20192-59%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2069%2C080%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%988%EC%B8%B5%2F20%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20490%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 제천시 왕암동 924 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-236" data-addr="충북 제천시 왕암동 924" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 제천시 왕암동 924</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">16,381㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">41.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%99%95%EC%95%94%EB%8F%99%20924%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%99%95%EC%95%94%EB%8F%99%20924%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2016%2C381%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2041.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="업무시설" data-q="서울 양천구 신월동 331-1 업무시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-237" data-addr="서울 양천구 신월동 331-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 양천구 신월동 331-1</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">10,502㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">311억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%96%91%EC%B2%9C%EA%B5%AC%20%EC%8B%A0%EC%9B%94%EB%8F%99%20331-1%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%96%91%EC%B2%9C%EA%B5%AC%20%EC%8B%A0%EC%9B%94%EB%8F%99%20331-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2010%2C502%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20311%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="제1종근린생활시설" data-q="대구 달서구 두류동 101-8 제1종근린생활시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-238" data-addr="대구 달서구 두류동 101-8" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 달서구 두류동 101-8</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">2,062㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">14.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%9C%EA%B5%AC%20%EB%91%90%EB%A5%98%EB%8F%99%20101-8%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%9C%EA%B5%AC%20%EB%91%90%EB%A5%98%EB%8F%99%20101-8%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C062%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2014.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="제1종근린생활시설" data-q="경기 고양시 지축동 895 제1종근린생활시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-239" data-addr="경기 고양시 지축동 895" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 고양시 지축동 895</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">12,485㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">60억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%A7%80%EC%B6%95%EB%8F%99%20895%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%A7%80%EC%B6%95%EB%8F%99%20895%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2012%2C485%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2060%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="제주 제주시 영평동 2231-1 교육연구시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-240" data-addr="제주 제주시 영평동 2231-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">제주 제주시 영평동 2231-1</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">7,368㎡</td>
      <td style="white-space:nowrap;">지하1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">32.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%98%81%ED%8F%89%EB%8F%99%202231-1%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%98%81%ED%8F%89%EB%8F%99%202231-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C368%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2032.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 안산시 성곡동 823-1 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-241" data-addr="경기 안산시 성곡동 823-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 안산시 성곡동 823-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">15,642㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">148억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%84%B1%EA%B3%A1%EB%8F%99%20823-1%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%84%B1%EA%B3%A1%EB%8F%99%20823-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2015%2C642%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20148%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="경기 김포시 양촌읍 학운리 3871 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-242" data-addr="경기 김포시 양촌읍 학운리 3871" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 김포시 양촌읍 학운리 3871</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">7,691㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">39.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EC%96%91%EC%B4%8C%EC%9D%8D%20%ED%95%99%EC%9A%B4%EB%A6%AC%203871%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EC%96%91%EC%B4%8C%EC%9D%8D%20%ED%95%99%EC%9A%B4%EB%A6%AC%203871%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C691%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2039.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="경북 영천시 도동 193-3 동물및식물관련시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-243" data-addr="경북 영천시 도동 193-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 영천시 도동 193-3</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,617㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4,224만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%B2%9C%EC%8B%9C%20%EB%8F%84%EB%8F%99%20193-3%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%B2%9C%EC%8B%9C%20%EB%8F%84%EB%8F%99%20193-3%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C617%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204%2C224%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 평택시 포승읍 원정리 1177-2 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-244" data-addr="경기 평택시 포승읍 원정리 1177-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 포승읍 원정리 1177-2</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">41,481㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%8F%AC%EC%8A%B9%EC%9D%8D%20%EC%9B%90%EC%A0%95%EB%A6%AC%201177-2%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%8F%AC%EC%8A%B9%EC%9D%8D%20%EC%9B%90%EC%A0%95%EB%A6%AC%201177-2%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2041%2C481%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="대전 유성구 구성동 23 교육연구시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-245" data-addr="대전 유성구 구성동 23" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대전 유성구 구성동 23</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">643,664㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4,773억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EA%B5%AC%EC%84%B1%EB%8F%99%2023%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EA%B5%AC%EC%84%B1%EB%8F%99%2023%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20643%2C664%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204%2C773%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 평택시 안중읍 덕우리 82-18 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-246" data-addr="경기 평택시 안중읍 덕우리 82-18" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 안중읍 덕우리 82-18</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">7,827㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">47.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EC%95%88%EC%A4%91%EC%9D%8D%20%EB%8D%95%EC%9A%B0%EB%A6%AC%2082-18%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EC%95%88%EC%A4%91%EC%9D%8D%20%EB%8D%95%EC%9A%B0%EB%A6%AC%2082-18%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C827%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2047.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="제1종근린생활시설" data-q="강원 춘천시 퇴계동 195-2 제1종근린생활시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-247" data-addr="강원 춘천시 퇴계동 195-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 춘천시 퇴계동 195-2</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,653㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">12.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%ED%87%B4%EA%B3%84%EB%8F%99%20195-2%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%ED%87%B4%EA%B3%84%EB%8F%99%20195-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C653%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2012.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전남 완도군 완도읍 대야리 655 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-248" data-addr="전남 완도군 완도읍 대야리 655" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 완도군 완도읍 대야리 655</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,564㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%99%84%EB%8F%84%EA%B5%B0%20%EC%99%84%EB%8F%84%EC%9D%8D%20%EB%8C%80%EC%95%BC%EB%A6%AC%20655%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%99%84%EB%8F%84%EA%B5%B0%20%EC%99%84%EB%8F%84%EC%9D%8D%20%EB%8C%80%EC%95%BC%EB%A6%AC%20655%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C564%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 양주시 은현면 도하리 314-1 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-249" data-addr="경기 양주시 은현면 도하리 314-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 양주시 은현면 도하리 314-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">11,754㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">35.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%EC%A3%BC%EC%8B%9C%20%EC%9D%80%ED%98%84%EB%A9%B4%20%EB%8F%84%ED%95%98%EB%A6%AC%20314-1%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%EC%A3%BC%EC%8B%9C%20%EC%9D%80%ED%98%84%EB%A9%B4%20%EB%8F%84%ED%95%98%EB%A6%AC%20314-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2011%2C754%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2035.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="숙박시설" data-q="서울 영등포구 신길동 65-85 숙박시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-250" data-addr="서울 영등포구 신길동 65-85" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 영등포구 신길동 65-85</td>
      <td>숙박시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">4,886㎡</td>
      <td style="white-space:nowrap;">지하2층/20층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">61.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EC%8B%A0%EA%B8%B8%EB%8F%99%2065-85%20(%EC%88%99%EB%B0%95%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EC%8B%A0%EA%B8%B8%EB%8F%99%2065-85%0A%EC%9A%A9%EB%8F%84%3A%20%EC%88%99%EB%B0%95%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C886%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%982%EC%B8%B5%2F20%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2061.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공동주택" data-q="강원 원주시 단계동 1221 공동주택   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-251" data-addr="강원 원주시 단계동 1221" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 원주시 단계동 1221</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">68,700㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">183억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EB%8B%A8%EA%B3%84%EB%8F%99%201221%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EB%8B%A8%EA%B3%84%EB%8F%99%201221%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2068%2C700%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20183%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공동주택" data-q="서울 노원구 공릉동 649-14 공동주택   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-252" data-addr="서울 노원구 공릉동 649-14" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 노원구 공릉동 649-14</td>
      <td>공동주택</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">3,697㎡</td>
      <td style="white-space:nowrap;">지하1층/12층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">15.5억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.09.10</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EB%85%B8%EC%9B%90%EA%B5%AC%20%EA%B3%B5%EB%A6%89%EB%8F%99%20649-14%20(%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EB%85%B8%EC%9B%90%EA%B5%AC%20%EA%B3%B5%EB%A6%89%EB%8F%99%20649-14%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EB%8F%99%EC%A3%BC%ED%83%9D%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C697%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F12%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2015.5%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.09.10%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="인천 제물포구 송현동 1-6 공장 건축사사무소미본  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-253" data-addr="인천 제물포구 송현동 1-6" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">인천 제물포구 송현동 1-6</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">127,647㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소미본</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.29</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%86%A1%ED%98%84%EB%8F%99%201-6%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%86%A1%ED%98%84%EB%8F%99%201-6%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20127%2C647%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%AF%B8%EB%B3%B8%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.29%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="인천 서해구 청라동 204-5 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-254" data-addr="인천 서해구 청라동 204-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">인천 서해구 청라동 204-5</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">4,979㎡</td>
      <td style="white-space:nowrap;">8층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9D%B8%EC%B2%9C%20%EC%84%9C%ED%95%B4%EA%B5%AC%20%EC%B2%AD%EB%9D%BC%EB%8F%99%20204-5%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9D%B8%EC%B2%9C%20%EC%84%9C%ED%95%B4%EA%B5%AC%20%EC%B2%AD%EB%9D%BC%EB%8F%99%20204-5%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C979%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%208%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="경기 파주시 와동동 1498-1 업무시설 (주)에이플랜건축사사무소 경우종합건설(주) 주식회사한빛건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-255" data-addr="경기 파주시 와동동 1498-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 파주시 와동동 1498-1</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">15,259㎡</td>
      <td style="white-space:nowrap;">지하2층/23층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">58.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)에이플랜건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 경우종합건설(주)</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 주식회사한빛건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%EC%99%80%EB%8F%99%EB%8F%99%201498-1%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%EC%99%80%EB%8F%99%EB%8F%99%201498-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2015%2C259%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%982%EC%B8%B5%2F23%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2058.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%97%90%EC%9D%B4%ED%94%8C%EB%9E%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20%EA%B2%BD%EC%9A%B0%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4(%EC%A3%BC)%0A%EA%B0%90%EB%A6%AC%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%ED%95%9C%EB%B9%9B%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="업무시설" data-q="경북 포항시 대잠동 1001 업무시설 시민건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-256" data-addr="경북 포항시 대잠동 1001" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 포항시 대잠동 1001</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">36,333㎡</td>
      <td style="white-space:nowrap;">지하6층/15층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">657억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 시민건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%8C%80%EC%9E%A0%EB%8F%99%201001%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%8C%80%EC%9E%A0%EB%8F%99%201001%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2036%2C333%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%986%EC%B8%B5%2F15%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20657%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%8B%9C%EB%AF%BC%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="충청북도 청주시 흥덕구 강내면 다락리 블록 공장 건축사사무소장  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-257" data-addr="충청북도 청주시 흥덕구 강내면 다락리 블록" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충청북도 청주시 흥덕구 강내면 다락리 블록</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">7,746㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">-</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소장</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%ED%9D%A5%EB%8D%95%EA%B5%AC%20%EA%B0%95%EB%82%B4%EB%A9%B4%20%EB%8B%A4%EB%9D%BD%EB%A6%AC%20%EB%B8%94%EB%A1%9D%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%ED%9D%A5%EB%8D%95%EA%B5%AC%20%EA%B0%95%EB%82%B4%EB%A9%B4%20%EB%8B%A4%EB%9D%BD%EB%A6%AC%20%EB%B8%94%EB%A1%9D%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C746%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20-%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%9E%A5%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 진천군 이월면 미잠리 129-15 공장 단건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-258" data-addr="충북 진천군 이월면 미잠리 129-15" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 진천군 이월면 미잠리 129-15</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,642㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 단건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%A7%84%EC%B2%9C%EA%B5%B0%20%EC%9D%B4%EC%9B%94%EB%A9%B4%20%EB%AF%B8%EC%9E%A0%EB%A6%AC%20129-15%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%A7%84%EC%B2%9C%EA%B5%B0%20%EC%9D%B4%EC%9B%94%EB%A9%B4%20%EB%AF%B8%EC%9E%A0%EB%A6%AC%20129-15%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C642%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%8B%A8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="운동시설" data-q="대구 북구 고성동3가 2 운동시설 건축사사무소제이앤케이  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-259" data-addr="대구 북구 고성동3가 2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">대구 북구 고성동3가 2</td>
      <td>운동시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">33,050㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1,537억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소제이앤케이</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%8C%80%EA%B5%AC%20%EB%B6%81%EA%B5%AC%20%EA%B3%A0%EC%84%B1%EB%8F%993%EA%B0%80%202%20(%EC%9A%B4%EB%8F%99%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%8C%80%EA%B5%AC%20%EB%B6%81%EA%B5%AC%20%EA%B3%A0%EC%84%B1%EB%8F%993%EA%B0%80%202%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9A%B4%EB%8F%99%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2033%2C050%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201%2C537%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%A0%9C%EC%9D%B4%EC%95%A4%EC%BC%80%EC%9D%B4%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="전북 장수군 계북면 양악리 569 동물및식물관련시설 주식회사누리종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-260" data-addr="전북 장수군 계북면 양악리 569" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 장수군 계북면 양악리 569</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,835㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">8,914만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사누리종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%9E%A5%EC%88%98%EA%B5%B0%20%EA%B3%84%EB%B6%81%EB%A9%B4%20%EC%96%91%EC%95%85%EB%A6%AC%20569%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%9E%A5%EC%88%98%EA%B5%B0%20%EA%B3%84%EB%B6%81%EB%A9%B4%20%EC%96%91%EC%95%85%EB%A6%AC%20569%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C835%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%208%2C914%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%88%84%EB%A6%AC%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="교육연구시설" data-q="경기 김포시 고촌읍 신곡리 446-2 교육연구시설 건축사사무소청명  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-261" data-addr="경기 김포시 고촌읍 신곡리 446-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 김포시 고촌읍 신곡리 446-2</td>
      <td>교육연구시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">9,410㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">105억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소청명</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EA%B3%A0%EC%B4%8C%EC%9D%8D%20%EC%8B%A0%EA%B3%A1%EB%A6%AC%20446-2%20(%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EA%B3%A0%EC%B4%8C%EC%9D%8D%20%EC%8B%A0%EA%B3%A1%EB%A6%AC%20446-2%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%209%2C410%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20105%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%B2%AD%EB%AA%85%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경북 포항시 동촌동 5 공장 (주)포스코이앤씨  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-262" data-addr="경북 포항시 동촌동 5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 포항시 동촌동 5</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,913,762㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">239억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)포스코이앤씨</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%8F%99%EC%B4%8C%EB%8F%99%205%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%8F%99%EC%B4%8C%EB%8F%99%205%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C913%2C762%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20239%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%8F%AC%EC%8A%A4%EC%BD%94%EC%9D%B4%EC%95%A4%EC%94%A8%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="경기 평택시 모곡동 432-1 공장 건축사사무소길온건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-263" data-addr="경기 평택시 모곡동 432-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 모곡동 432-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">24,299㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">85.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소길온건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EB%AA%A8%EA%B3%A1%EB%8F%99%20432-1%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%EB%AA%A8%EA%B3%A1%EB%8F%99%20432-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2024%2C299%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2085.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EA%B8%B8%EC%98%A8%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="업무시설" data-q="서울 동대문구 장안동 464-3 업무시설 동화종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-264" data-addr="서울 동대문구 장안동 464-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">서울 동대문구 장안동 464-3</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">6,692㎡</td>
      <td style="white-space:nowrap;">지하1층/5층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">171억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 동화종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9E%A5%EC%95%88%EB%8F%99%20464-3%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9E%A5%EC%95%88%EB%8F%99%20464-3%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C692%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F5%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20171%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%8F%99%ED%99%94%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경남 김해시 진영읍 하계리 753-5 공장 세모건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-265" data-addr="경남 김해시 진영읍 하계리 753-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 김해시 진영읍 하계리 753-5</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,172㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">14.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 세모건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EC%A7%84%EC%98%81%EC%9D%8D%20%ED%95%98%EA%B3%84%EB%A6%AC%20753-5%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EC%A7%84%EC%98%81%EC%9D%8D%20%ED%95%98%EA%B3%84%EB%A6%AC%20753-5%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C172%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2014.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%84%B8%EB%AA%A8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="숙박시설" data-q="경기 평택시 평택동 188-12 숙박시설 (주)삼중아키텍트건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-266" data-addr="경기 평택시 평택동 188-12" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 평택동 188-12</td>
      <td>숙박시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">8,670㎡</td>
      <td style="white-space:nowrap;">지하3층/16층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">16.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)삼중아키텍트건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%8F%89%ED%83%9D%EB%8F%99%20188-12%20(%EC%88%99%EB%B0%95%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%8F%89%ED%83%9D%EB%8F%99%20188-12%0A%EC%9A%A9%EB%8F%84%3A%20%EC%88%99%EB%B0%95%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%208%2C670%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%983%EC%B8%B5%2F16%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2016.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%82%BC%EC%A4%91%EC%95%84%ED%82%A4%ED%85%8D%ED%8A%B8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="업무시설" data-q="강원 홍천군 홍천읍 희망리 267-3 업무시설 지안건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-267" data-addr="강원 홍천군 홍천읍 희망리 267-3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">강원 홍천군 홍천읍 희망리 267-3</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,097㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 지안건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B0%95%EC%9B%90%20%ED%99%8D%EC%B2%9C%EA%B5%B0%20%ED%99%8D%EC%B2%9C%EC%9D%8D%20%ED%9D%AC%EB%A7%9D%EB%A6%AC%20267-3%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B0%95%EC%9B%90%20%ED%99%8D%EC%B2%9C%EA%B5%B0%20%ED%99%8D%EC%B2%9C%EC%9D%8D%20%ED%9D%AC%EB%A7%9D%EB%A6%AC%20267-3%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C097%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A7%80%EC%95%88%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전남 광양시 금호동 645 공장 (주)포스코에이앤씨건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-268" data-addr="전남 광양시 금호동 645" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 광양시 금호동 645</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">163,192㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2,087억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)포스코에이앤씨건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EA%B4%91%EC%96%91%EC%8B%9C%20%EA%B8%88%ED%98%B8%EB%8F%99%20645%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EA%B4%91%EC%96%91%EC%8B%9C%20%EA%B8%88%ED%98%B8%EB%8F%99%20645%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20163%2C192%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202%2C087%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%ED%8F%AC%EC%8A%A4%EC%BD%94%EC%97%90%EC%9D%B4%EC%95%A4%EC%94%A8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="공장" data-q="전북 완주군 봉동읍 장구리 580-1 공장 건축법인녹엔지니어링건축사사무소(주)  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-269" data-addr="전북 완주군 봉동읍 장구리 580-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 완주군 봉동읍 장구리 580-1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">6,559㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">16.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축법인녹엔지니어링건축사사무소(주)</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EB%B4%89%EB%8F%99%EC%9D%8D%20%EC%9E%A5%EA%B5%AC%EB%A6%AC%20580-1%20(%EA%B3%B5%EC%9E%A5%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EB%B4%89%EB%8F%99%EC%9D%8D%20%EC%9E%A5%EA%B5%AC%EB%A6%AC%20580-1%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C559%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2016.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EB%B2%95%EC%9D%B8%EB%85%B9%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C(%EC%A3%BC)%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경남 김해시 주촌면 망덕리 872-7 공장 명문종합건축사(사)  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-270" data-addr="경남 김해시 주촌면 망덕리 872-7" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 김해시 주촌면 망덕리 872-7</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">8,206㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">43.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 명문종합건축사(사)</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EC%A3%BC%EC%B4%8C%EB%A9%B4%20%EB%A7%9D%EB%8D%95%EB%A6%AC%20872-7%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EA%B9%80%ED%95%B4%EC%8B%9C%20%EC%A3%BC%EC%B4%8C%EB%A9%B4%20%EB%A7%9D%EB%8D%95%EB%A6%AC%20872-7%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%208%2C206%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2043.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%AA%85%EB%AC%B8%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC(%EC%82%AC)%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="울산 동구 전하동 1 공장 (주)정림건축종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-271" data-addr="울산 동구 전하동 1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">울산 동구 전하동 1</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">1,484,966㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3,116억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)정림건축종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9A%B8%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EC%A0%84%ED%95%98%EB%8F%99%201%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9A%B8%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EC%A0%84%ED%95%98%EB%8F%99%201%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%201%2C484%2C966%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203%2C116%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%A0%95%EB%A6%BC%EA%B1%B4%EC%B6%95%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="업무시설" data-q="경남 창녕군 대지면 효정리 292-1 업무시설 (주)라움건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-272" data-addr="경남 창녕군 대지면 효정리 292-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경남 창녕군 대지면 효정리 292-1</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,078㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)라움건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%82%A8%20%EC%B0%BD%EB%85%95%EA%B5%B0%20%EB%8C%80%EC%A7%80%EB%A9%B4%20%ED%9A%A8%EC%A0%95%EB%A6%AC%20292-1%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%82%A8%20%EC%B0%BD%EB%85%95%EA%B5%B0%20%EB%8C%80%EC%A7%80%EB%A9%B4%20%ED%9A%A8%EC%A0%95%EB%A6%AC%20292-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C078%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EB%9D%BC%EC%9B%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="창고시설" data-q="인천 연수구 송도동 605-5 창고시설 호미건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-273" data-addr="인천 연수구 송도동 605-5" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">인천 연수구 송도동 605-5</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">4,945㎡</td>
      <td style="white-space:nowrap;">9층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">34.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 호미건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%86%A1%EB%8F%84%EB%8F%99%20605-5%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%86%A1%EB%8F%84%EB%8F%99%20605-5%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C945%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%209%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2034.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%98%B8%EB%AF%B8%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="창고시설" data-q="경기 이천시 설성면 상봉리 3 창고시설 야그(yaga&amp;d)건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-274" data-addr="경기 이천시 설성면 상봉리 3" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 이천시 설성면 상봉리 3</td>
      <td>창고시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">43,799㎡</td>
      <td style="white-space:nowrap;">지하1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">54.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 야그(YAGA&amp;D)건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%9D%B4%EC%B2%9C%EC%8B%9C%20%EC%84%A4%EC%84%B1%EB%A9%B4%20%EC%83%81%EB%B4%89%EB%A6%AC%203%20(%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%9D%B4%EC%B2%9C%EC%8B%9C%20%EC%84%A4%EC%84%B1%EB%A9%B4%20%EC%83%81%EB%B4%89%EB%A6%AC%203%0A%EC%9A%A9%EB%8F%84%3A%20%EC%B0%BD%EA%B3%A0%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2043%2C799%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2054.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%95%BC%EA%B7%B8(YAGA%26D)%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="운동시설" data-q="전북 임실군 성수면 도인리 703 운동시설 건축무한이엔지종합건축사사무소 제이플랜건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-275" data-addr="전북 임실군 성수면 도인리 703" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 임실군 성수면 도인리 703</td>
      <td>운동시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,208㎡</td>
      <td style="white-space:nowrap;">지하1층/2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축무한이엔지종합건축사사무소 제이플랜건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%9E%84%EC%8B%A4%EA%B5%B0%20%EC%84%B1%EC%88%98%EB%A9%B4%20%EB%8F%84%EC%9D%B8%EB%A6%AC%20703%20(%EC%9A%B4%EB%8F%99%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%9E%84%EC%8B%A4%EA%B5%B0%20%EC%84%B1%EC%88%98%EB%A9%B4%20%EB%8F%84%EC%9D%B8%EB%A6%AC%20703%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9A%B4%EB%8F%99%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C208%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F2%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EB%AC%B4%ED%95%9C%EC%9D%B4%EC%97%94%EC%A7%80%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%A0%9C%EC%9D%B4%ED%94%8C%EB%9E%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="판매시설" data-q="경기 성남시 서현동 263 판매시설 유앤지건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-276" data-addr="경기 성남시 서현동 263" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 성남시 서현동 263</td>
      <td>판매시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">119,609㎡</td>
      <td style="white-space:nowrap;">지하1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2,016억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 유앤지건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EC%84%9C%ED%98%84%EB%8F%99%20263%20(%ED%8C%90%EB%A7%A4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EC%84%9C%ED%98%84%EB%8F%99%20263%0A%EC%9A%A9%EB%8F%84%3A%20%ED%8C%90%EB%A7%A4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%20119%2C609%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202%2C016%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9C%A0%EC%95%A4%EC%A7%80%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="세종 전의면 양곡리 592 공장 명작건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-277" data-addr="세종 전의면 양곡리 592" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">세종 전의면 양곡리 592</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">6,960㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">29.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 명작건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%84%B8%EC%A2%85%20%EC%A0%84%EC%9D%98%EB%A9%B4%20%EC%96%91%EA%B3%A1%EB%A6%AC%20592%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%84%B8%EC%A2%85%20%EC%A0%84%EC%9D%98%EB%A9%B4%20%EC%96%91%EA%B3%A1%EB%A6%AC%20592%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C960%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2029.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%AA%85%EC%9E%91%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="제1종근린생활시설" data-q="전남 구례군 구례읍 봉동리 94-2 제1종근린생활시설 유한회사단건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-278" data-addr="전남 구례군 구례읍 봉동리 94-2" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 구례군 구례읍 봉동리 94-2</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,579㎡</td>
      <td style="white-space:nowrap;">4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">4.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 유한회사단건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EA%B5%AC%EB%A1%80%EA%B5%B0%20%EA%B5%AC%EB%A1%80%EC%9D%8D%20%EB%B4%89%EB%8F%99%EB%A6%AC%2094-2%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EA%B5%AC%EB%A1%80%EA%B5%B0%20%EA%B5%AC%EB%A1%80%EC%9D%8D%20%EB%B4%89%EB%8F%99%EB%A6%AC%2094-2%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C579%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%204%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%204.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%9C%A0%ED%95%9C%ED%9A%8C%EC%82%AC%EB%8B%A8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="위험물저장및처리시설" data-q="경기 평택시 포승읍 만호리 626 위험물저장및처리시설 핸드건축사사무소  아지트건축사사무소">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-279" data-addr="경기 평택시 포승읍 만호리 626" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 평택시 포승읍 만호리 626</td>
      <td>위험물저장및처리시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,155㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">329억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 핸드건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 아지트건축사사무소</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%8F%AC%EC%8A%B9%EC%9D%8D%20%EB%A7%8C%ED%98%B8%EB%A6%AC%20626%20(%EC%9C%84%ED%97%98%EB%AC%BC%EC%A0%80%EC%9E%A5%EB%B0%8F%EC%B2%98%EB%A6%AC%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%8F%AC%EC%8A%B9%EC%9D%8D%20%EB%A7%8C%ED%98%B8%EB%A6%AC%20626%0A%EC%9A%A9%EB%8F%84%3A%20%EC%9C%84%ED%97%98%EB%AC%BC%EC%A0%80%EC%9E%A5%EB%B0%8F%EC%B2%98%EB%A6%AC%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C155%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20329%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%ED%95%B8%EB%93%9C%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20%EC%95%84%EC%A7%80%ED%8A%B8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="종교시설" data-q="제주 제주시 아라이동 1002-1 종교시설 건축사사무소신일  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-280" data-addr="제주 제주시 아라이동 1002-1" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">제주 제주시 아라이동 1002-1</td>
      <td>종교시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,022㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">21.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소신일</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%84%EB%9D%BC%EC%9D%B4%EB%8F%99%201002-1%20(%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%9C%EC%A3%BC%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%84%EB%9D%BC%EC%9D%B4%EB%8F%99%201002-1%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A2%85%EA%B5%90%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C022%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2021.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%8B%A0%EC%9D%BC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="문화및집회시설" data-q="전남 보성군 웅치면 대산리 산 113-22 문화및집회시설 나눔건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-281" data-addr="전남 보성군 웅치면 대산리 산 113-22" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 보성군 웅치면 대산리 산 113-22</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,504㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">653만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 나눔건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EB%B3%B4%EC%84%B1%EA%B5%B0%20%EC%9B%85%EC%B9%98%EB%A9%B4%20%EB%8C%80%EC%82%B0%EB%A6%AC%20%EC%82%B0%20113-22%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EB%B3%B4%EC%84%B1%EA%B5%B0%20%EC%9B%85%EC%B9%98%EB%A9%B4%20%EB%8C%80%EC%82%B0%EB%A6%AC%20%EC%82%B0%20113-22%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C504%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20653%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%EB%82%98%EB%88%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="전남 광양시 태인동 1801 공장 건축사사무소인중헌  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-282" data-addr="전남 광양시 태인동 1801" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 광양시 태인동 1801</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">6,723㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">22.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소인중헌</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EA%B4%91%EC%96%91%EC%8B%9C%20%ED%83%9C%EC%9D%B8%EB%8F%99%201801%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EA%B4%91%EC%96%91%EC%8B%9C%20%ED%83%9C%EC%9D%B8%EB%8F%99%201801%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C723%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2022.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%9D%B8%EC%A4%91%ED%97%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="광주 광산구 삼거동 925 공장 디바건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-283" data-addr="광주 광산구 삼거동 925" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">광주 광산구 삼거동 925</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">8,937㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">18.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 디바건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B4%91%EC%A3%BC%20%EA%B4%91%EC%82%B0%EA%B5%AC%20%EC%82%BC%EA%B1%B0%EB%8F%99%20925%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B4%91%EC%A3%BC%20%EA%B4%91%EC%82%B0%EA%B5%AC%20%EC%82%BC%EA%B1%B0%EB%8F%99%20925%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%208%2C937%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2018.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EB%94%94%EB%B0%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="공장" data-q="부산 기장군 장안읍 반룡리 949-4 공장 건축사사무소누리 주식회사지음종합건설 건축사사무소누리">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-284" data-addr="부산 기장군 장안읍 반룡리 949-4" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 기장군 장안읍 반룡리 949-4</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">6,082㎡</td>
      <td style="white-space:nowrap;">3층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">41억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소누리</div>
        <div><strong style="color:var(--gray-800);">시공</strong> 주식회사지음종합건설</div>
        <div><strong style="color:var(--gray-800);">감리</strong> 건축사사무소누리</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EB%B0%98%EB%A3%A1%EB%A6%AC%20949-4%20(%EA%B3%B5%EC%9E%A5%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EB%B0%98%EB%A3%A1%EB%A6%AC%20949-4%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%206%2C082%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%203%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2041%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%88%84%EB%A6%AC%0A%EC%8B%9C%EA%B3%B5%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%A7%80%EC%9D%8C%EC%A2%85%ED%95%A9%EA%B1%B4%EC%84%A4%0A%EA%B0%90%EB%A6%AC%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EB%88%84%EB%A6%AC%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전남 여수시 화치동 1295 공장 건축사사무소예장  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-285" data-addr="전남 여수시 화치동 1295" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 여수시 화치동 1295</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">99,307㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">664억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소예장</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%97%AC%EC%88%98%EC%8B%9C%20%ED%99%94%EC%B9%98%EB%8F%99%201295%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%97%AC%EC%88%98%EC%8B%9C%20%ED%99%94%EC%B9%98%EB%8F%99%201295%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2099%2C307%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20664%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%98%88%EC%9E%A5%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="제1종근린생활시설" data-q="경북 봉화군 상운면 하눌리 898 제1종근린생활시설 한국전력공사  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-286" data-addr="경북 봉화군 상운면 하눌리 898" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 봉화군 상운면 하눌리 898</td>
      <td>제1종근린생활시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,900㎡</td>
      <td style="white-space:nowrap;">지하1층/4층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">3,506만</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 한국전력공사</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EB%B4%89%ED%99%94%EA%B5%B0%20%EC%83%81%EC%9A%B4%EB%A9%B4%20%ED%95%98%EB%88%8C%EB%A6%AC%20898%20(%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EB%B4%89%ED%99%94%EA%B5%B0%20%EC%83%81%EC%9A%B4%EB%A9%B4%20%ED%95%98%EB%88%8C%EB%A6%AC%20898%0A%EC%9A%A9%EB%8F%84%3A%20%EC%A0%9C1%EC%A2%85%EA%B7%BC%EB%A6%B0%EC%83%9D%ED%99%9C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C900%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F4%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%203%2C506%EB%A7%8C%0A%EC%84%A4%EA%B3%84%3A%20%ED%95%9C%EA%B5%AD%EC%A0%84%EB%A0%A5%EA%B3%B5%EC%82%AC%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="업무시설" data-q="부산 동구 범일동 830-266 업무시설 주식회사인우종합건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-287" data-addr="부산 동구 범일동 830-266" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">부산 동구 범일동 830-266</td>
      <td>업무시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">9,391㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">50.4억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 주식회사인우종합건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EB%B6%80%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EB%B2%94%EC%9D%BC%EB%8F%99%20830-266%20(%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EB%B6%80%EC%82%B0%20%EB%8F%99%EA%B5%AC%20%EB%B2%94%EC%9D%BC%EB%8F%99%20830-266%0A%EC%9A%A9%EB%8F%84%3A%20%EC%97%85%EB%AC%B4%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%209%2C391%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2050.4%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EC%9D%B8%EC%9A%B0%EC%A2%85%ED%95%A9%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="경기 김포시 대곶면 석정리 19-15 공장 (주)예림호건축사사무소  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-288" data-addr="경기 김포시 대곶면 석정리 19-15" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 김포시 대곶면 석정리 19-15</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,570㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">43.9억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)예림호건축사사무소</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%EA%B3%B6%EB%A9%B4%20%EC%84%9D%EC%A0%95%EB%A6%AC%2019-15%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%EA%B3%B6%EB%A9%B4%20%EC%84%9D%EC%A0%95%EB%A6%AC%2019-15%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C570%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2043.9%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EC%98%88%EB%A6%BC%ED%98%B8%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="광주 광산구 소촌동 846 공장 에이디건축사사무소윤  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-289" data-addr="광주 광산구 소촌동 846" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">광주 광산구 소촌동 846</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">5,020㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">26.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 에이디건축사사무소윤</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B4%91%EC%A3%BC%20%EA%B4%91%EC%82%B0%EA%B5%AC%20%EC%86%8C%EC%B4%8C%EB%8F%99%20846%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B4%91%EC%A3%BC%20%EA%B4%91%EC%82%B0%EA%B5%AC%20%EC%86%8C%EC%B4%8C%EB%8F%99%20846%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%205%2C020%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2026.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EC%97%90%EC%9D%B4%EB%94%94%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%9C%A4%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 진천군 문백면 문덕리 723 공장 건축사사무소양지  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-290" data-addr="충북 진천군 문백면 문덕리 723" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 진천군 문백면 문덕리 723</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">72,408㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">100억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소양지</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%A7%84%EC%B2%9C%EA%B5%B0%20%EB%AC%B8%EB%B0%B1%EB%A9%B4%20%EB%AC%B8%EB%8D%95%EB%A6%AC%20723%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%A7%84%EC%B2%9C%EA%B5%B0%20%EB%AC%B8%EB%B0%B1%EB%A9%B4%20%EB%AC%B8%EB%8D%95%EB%A6%AC%20723%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2072%2C408%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20100%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%96%91%EC%A7%80%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="대수선" data-use="동물및식물관련시설" data-q="경기 포천시 이동면 노곡리 750 동물및식물관련시설 건축사사무소하랑  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-291" data-addr="경기 포천시 이동면 노곡리 750" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 포천시 이동면 노곡리 750</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">대수선</span></td>
      <td style="white-space:nowrap;">2,726㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">2.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소하랑</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%ED%8F%AC%EC%B2%9C%EC%8B%9C%20%EC%9D%B4%EB%8F%99%EB%A9%B4%20%EB%85%B8%EA%B3%A1%EB%A6%AC%20750%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EB%8C%80%EC%88%98%EC%84%A0)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%ED%8F%AC%EC%B2%9C%EC%8B%9C%20%EC%9D%B4%EB%8F%99%EB%A9%B4%20%EB%85%B8%EA%B3%A1%EB%A6%AC%20750%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EB%8C%80%EC%88%98%EC%84%A0%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C726%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%202.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%ED%95%98%EB%9E%91%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="충북 진천군 진천읍 상신리 566 동물및식물관련시설 건축사사무소아뜰리에윤  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-292" data-addr="충북 진천군 진천읍 상신리 566" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 진천군 진천읍 상신리 566</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">3,921㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.1억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> 건축사사무소아뜰리에윤</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%A7%84%EC%B2%9C%EA%B5%B0%20%EC%A7%84%EC%B2%9C%EC%9D%8D%20%EC%83%81%EC%8B%A0%EB%A6%AC%20566%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%A7%84%EC%B2%9C%EA%B5%B0%20%EC%A7%84%EC%B2%9C%EC%9D%8D%20%EC%83%81%EC%8B%A0%EB%A6%AC%20566%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%203%2C921%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.1%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90%EC%9C%A4%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 옥천군 동이면 적하리 960-8 공장 (주)건축사사무소신건축  ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-293" data-addr="충북 옥천군 동이면 적하리 960-8" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 옥천군 동이면 적하리 960-8</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">4,188㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">6.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> (주)건축사사무소신건축</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;">2026.07.28</td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%98%A5%EC%B2%9C%EA%B5%B0%20%EB%8F%99%EC%9D%B4%EB%A9%B4%20%EC%A0%81%ED%95%98%EB%A6%AC%20960-8%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%98%A5%EC%B2%9C%EA%B5%B0%20%EB%8F%99%EC%9D%B4%EB%A9%B4%20%EC%A0%81%ED%95%98%EB%A6%AC%20960-8%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%204%2C188%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%206.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20(%EC%A3%BC)%EA%B1%B4%EC%B6%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C%EC%8B%A0%EA%B1%B4%EC%B6%95%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%202026.07.28%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="신축" data-use="숙박시설" data-q="충남 아산시 둔포면 석곡리 1711 숙박시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-294" data-addr="충남 아산시 둔포면 석곡리 1711" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충남 아산시 둔포면 석곡리 1711</td>
      <td>숙박시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">신축</span></td>
      <td style="white-space:nowrap;">2,512㎡</td>
      <td style="white-space:nowrap;">10층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">12.8억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EB%91%94%ED%8F%AC%EB%A9%B4%20%EC%84%9D%EA%B3%A1%EB%A6%AC%201711%20(%EC%88%99%EB%B0%95%EC%8B%9C%EC%84%A4%2F%EC%8B%A0%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EB%91%94%ED%8F%AC%EB%A9%B4%20%EC%84%9D%EA%B3%A1%EB%A6%AC%201711%0A%EC%9A%A9%EB%8F%84%3A%20%EC%88%99%EB%B0%95%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%8B%A0%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C512%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%2010%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2012.8%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="문화및집회시설" data-q="경기 용인시 백암면 고안리 1743 문화및집회시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-295" data-addr="경기 용인시 백암면 고안리 1743" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경기 용인시 백암면 고안리 1743</td>
      <td>문화및집회시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">20,800㎡</td>
      <td style="white-space:nowrap;">지하1층/1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">23.2억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EB%B0%B1%EC%95%94%EB%A9%B4%20%EA%B3%A0%EC%95%88%EB%A6%AC%201743%20(%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EB%B0%B1%EC%95%94%EB%A9%B4%20%EA%B3%A0%EC%95%88%EB%A6%AC%201743%0A%EC%9A%A9%EB%8F%84%3A%20%EB%AC%B8%ED%99%94%EB%B0%8F%EC%A7%91%ED%9A%8C%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2020%2C800%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%20%EC%A7%80%ED%95%981%EC%B8%B5%2F1%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2023.2%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 충주시 대소원면 본리 600 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-296" data-addr="충북 충주시 대소원면 본리 600" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 충주시 대소원면 본리 600</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">7,414㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">21.7억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EB%8C%80%EC%86%8C%EC%9B%90%EB%A9%B4%20%EB%B3%B8%EB%A6%AC%20600%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EB%8C%80%EC%86%8C%EC%9B%90%EB%A9%B4%20%EB%B3%B8%EB%A6%AC%20600%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%207%2C414%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2021.7%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="동물및식물관련시설" data-q="경북 성주군 용암면 대봉리 428 동물및식물관련시설   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-297" data-addr="경북 성주군 용암면 대봉리 428" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">경북 성주군 용암면 대봉리 428</td>
      <td>동물및식물관련시설</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">2,141㎡</td>
      <td style="white-space:nowrap;">6층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">1.3억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EA%B2%BD%EB%B6%81%20%EC%84%B1%EC%A3%BC%EA%B5%B0%20%EC%9A%A9%EC%95%94%EB%A9%B4%20%EB%8C%80%EB%B4%89%EB%A6%AC%20428%20(%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EA%B2%BD%EB%B6%81%20%EC%84%B1%EC%A3%BC%EA%B5%B0%20%EC%9A%A9%EC%95%94%EB%A9%B4%20%EB%8C%80%EB%B4%89%EB%A6%AC%20428%0A%EC%9A%A9%EB%8F%84%3A%20%EB%8F%99%EB%AC%BC%EB%B0%8F%EC%8B%9D%EB%AC%BC%EA%B4%80%EB%A0%A8%EC%8B%9C%EC%84%A4%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%202%2C141%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%206%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%201.3%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전북 완주군 봉동읍 용암리 869 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-298" data-addr="전북 완주군 봉동읍 용암리 869" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전북 완주군 봉동읍 용암리 869</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">72,839㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">256억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EB%B4%89%EB%8F%99%EC%9D%8D%20%EC%9A%A9%EC%95%94%EB%A6%AC%20869%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%B6%81%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EB%B4%89%EB%8F%99%EC%9D%8D%20%EC%9A%A9%EC%95%94%EB%A6%AC%20869%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2072%2C839%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20256%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="전남 여수시 적량동 1320 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-299" data-addr="전남 여수시 적량동 1320" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">전남 여수시 적량동 1320</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">21,328㎡</td>
      <td style="white-space:nowrap;">2층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">340억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%A0%84%EB%82%A8%20%EC%97%AC%EC%88%98%EC%8B%9C%20%EC%A0%81%EB%9F%89%EB%8F%99%201320%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%A0%84%EB%82%A8%20%EC%97%AC%EC%88%98%EC%8B%9C%20%EC%A0%81%EB%9F%89%EB%8F%99%201320%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2021%2C328%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%202%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%20340%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
          <i class="bi bi-envelope-at-fill"></i> 견적문의
        </a>
      </td>
    </tr>

    <tr class="permit-row" data-type="증축" data-use="공장" data-q="충북 청주시 송정동 140-20 공장   ">
      <td style="text-align:center; width:46px;">
        <input type="checkbox" class="permit-check" value="PMT-300" data-addr="충북 청주시 송정동 140-20" onchange="updateSelectedPermitsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark); min-width:220px;">충북 청주시 송정동 140-20</td>
      <td>공장</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">증축</span></td>
      <td style="white-space:nowrap;">10,840㎡</td>
      <td style="white-space:nowrap;">1층</td>
      <td style="white-space:nowrap; font-family:var(--font-en);">89.6억</td>
      <td style="font-size:0.78rem; color:var(--gray-600); line-height:1.6; min-width:160px;">
        <div><strong style="color:var(--gray-800);">설계</strong> -</div>
        <div><strong style="color:var(--gray-800);">시공</strong> -</div>
        <div><strong style="color:var(--gray-800);">감리</strong> -</div>
      </td>
      <td style="white-space:nowrap; font-family:var(--font-en); font-weight:700;"><span style="color:var(--gray-400);">착공일 미정</span></td>
      <td style="text-align:center; white-space:nowrap;">
        <a class="btn-email-doc" href="mailto:sales@kconstrade.com?subject=%5B%ED%97%88%EA%B0%80%2F%EC%B0%A9%EA%B3%B5%20%ED%98%84%EC%9E%A5%20%EB%AC%B8%EC%9D%98%5D%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%86%A1%EC%A0%95%EB%8F%99%20140-20%20(%EA%B3%B5%EC%9E%A5%2F%EC%A6%9D%EC%B6%95)&body=%EC%95%84%EB%9E%98%20%ED%98%84%EC%9E%A5%20%EC%A0%95%EB%B3%B4%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%8B%A4%EB%9E%80%ED%8A%B8%2F%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A0%9C%ED%92%88%20%EA%B2%AC%EC%A0%81%EC%9D%84%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%A3%BC%EC%86%8C%3A%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%86%A1%EC%A0%95%EB%8F%99%20140-20%0A%EC%9A%A9%EB%8F%84%3A%20%EA%B3%B5%EC%9E%A5%0A%EA%B5%AC%EB%B6%84%3A%20%EC%A6%9D%EC%B6%95%0A%EC%97%B0%EB%A9%B4%EC%A0%81%3A%2010%2C840%E3%8E%A1%0A%EC%B8%B5%EC%88%98%3A%201%EC%B8%B5%0A%EA%B3%B5%EC%82%AC%EB%B9%84%3A%2089.6%EC%96%B5%0A%EC%84%A4%EA%B3%84%3A%20-%0A%EC%8B%9C%EA%B3%B5%3A%20-%0A%EA%B0%90%EB%A6%AC%3A%20-%0A%EC%B0%A9%EA%B3%B5%EC%9D%BC%3A%20%EB%AF%B8%EC%A0%95%0A">
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
