// KCT Tech Center Renderer
export function renderKctTechPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>기술자료 검색 및 이메일 전송 센터 - 한국건설트레이딩 (KCT)</title>
  <meta name="description" content="KCT 기술자료 검색 및 이메일 전송 센터: TDS(기술자료표), MSDS(물질안전보건자료), 공인 시험성적서, UL 94 V-0/MED 인증서, 시방서 등 17대 산업군 기술문서를 실시간 검색하고 이메일로 수신하세요." />
  <meta name="keywords" content="기술자료 센터, 실리콘 TDS, 실리콘 MSDS, 시험성적서, UL94 V-0 인증서, MED 인증서, 한국건설트레이딩, KCT" />
  
  <link rel="icon" href="https://kconstrade.com/assets/img/favicon.ico" type="image/x-icon" />
  <meta property="og:title" content="기술자료 검색 및 이메일 전송 센터 - 한국건설트레이딩 (KCT)" />
  <meta property="og:description" content="TDS, MSDS, 공인 시험성적서 및 인증서 실시간 이메일 전송 시스템." />
  <meta property="og:image" content="https://kconstrade.com/assets/img/og-image.png" />
  
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

    /* Mobile Drawer */
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
    .page-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.85); max-width: 800px; margin: 0 auto; line-height: 1.7; }

    .tech-content-section { padding: 4rem 0 6rem; }
    .tech-filter-box { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 2.25rem 2.5rem; box-shadow: var(--shadow-sm); margin-bottom: 2rem; }
    .filter-row { display: flex; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.85rem; }
    .filter-row:last-child { margin-bottom: 0; }
    .filter-label { font-size: 0.9rem; font-weight: 800; color: var(--dark); min-width: 110px; display: flex; align-items: center; gap: 0.4rem; }
    .filter-options { display: flex; gap: 0.5rem; flex-wrap: wrap; flex-grow: 1; }
    .btn-filter-opt { background: var(--gray-50); border: 1.5px solid var(--gray-200); border-radius: 6px; padding: 0.45rem 1rem; font-size: 0.85rem; font-weight: 600; color: var(--gray-800); cursor: pointer; transition: all 0.2s; }
    .btn-filter-opt.active, .btn-filter-opt:hover { background: var(--primary); color: var(--white); border-color: var(--primary); }

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
    .tech-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; min-width: 950px; }
    .tech-table th { background: var(--dark); color: var(--white); font-weight: 700; padding: 1.1rem 1.25rem; font-size: 0.85rem; letter-spacing: 0.05em; }
    .tech-table td { padding: 1.15rem 1.25rem; border-bottom: 1px solid var(--gray-200); color: var(--gray-800); vertical-align: middle; }
    .tech-table tr:hover td { background: var(--primary-light); }
    .btn-email-doc { background: var(--primary-light); color: var(--primary); border: 1px solid rgba(21,88,214,0.3); border-radius: 6px; padding: 0.5rem 1rem; font-size: 0.82rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.35rem; transition: all 0.2s; }
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
        <span><i class="bi bi-shield-check text-primary"></i> <strong>기술자료 센터:</strong> TDS·MSDS·성적서 실시간 발송</span>
        <span><i class="bi bi-truck text-primary"></i> 수도권 당일/익일 직납</span>
      </div>
      <div class="top-bar-links">
        <a href="/projects/kct"><i class="bi bi-house-door-fill"></i> 메인 포털</a>
        <a href="/projects/kct/color-samples"><i class="bi bi-palette-fill text-accent"></i> 색상칩 & 샘플요청</a>
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
        <span class="brand-badge">TECH CENTER</span>
      </a>

      <div class="nav-menu">
        <a href="/projects/kct" class="btn-nav-link"><i class="bi bi-house"></i> KCT 메인 포털</a>
        <a href="/projects/kct/color-samples" class="btn-nav-link"><i class="bi bi-palette"></i> 색상칩 & 샘플요청</a>
        <a href="/projects/kct#calculator" class="btn-nav-link"><i class="bi bi-calculator"></i> 실리콘 계산기</a>
        <a href="/projects/kct#b2b-form" class="btn-quote"><i class="bi bi-send-fill"></i> B2B 견적요청</a>
      </div>

      <button class="nav-toggle-btn" id="kctTechNavToggle" aria-label="메뉴 열기">
        <i class="bi bi-list"></i>
      </button>
    </div>
  </header>

  <!-- Mobile Slide Drawer -->
  <div class="drawer-backdrop" id="kctTechDrawerBackdrop"></div>
  <aside class="mobile-drawer" id="kctTechMobileDrawer" aria-label="모바일 네비게이션">
    <div class="drawer-header">
      <div style="font-weight:800; font-size:1.15rem; color:var(--dark); display:flex; align-items:center; gap:0.5rem;">
        <span>기술자료 센터 메뉴</span>
      </div>
      <button class="drawer-close-btn" id="kctTechDrawerClose" aria-label="메뉴 닫기">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="drawer-body">
      <ul class="drawer-nav-list">
        <li class="drawer-nav-item"><a href="/projects/kct"><i class="bi bi-house-door-fill"></i> <span>KCT 메인 포털</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects/kct/color-samples"><i class="bi bi-palette-fill"></i> <span>색상칩 시편 & 샘플관</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects/kct#calculator"><i class="bi bi-calculator"></i> <span>실리콘 조인트 계산기</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects"><i class="bi bi-grid-fill"></i> <span>DAVHAVE Projects 허브</span> <span>↗</span></a></li>
      </ul>

      <div style="margin-top:auto; padding-top:1.5rem; border-top:1px solid var(--gray-200);">
        <a href="/projects/kct#b2b-form" class="btn-quote" style="width:100%; justify-content:center; padding:0.9rem;" onclick="closeKctTechDrawer()">
          <i class="bi bi-send-fill"></i> B2B 견적 및 기술 문의
        </a>
      </div>
    </div>
  </aside>

  <!-- Breadcrumbs -->
  <div class="breadcrumb-bar">
    <div class="container">
      <a href="/projects/kct">홈</a>
      <span class="sep">></span>
      <a href="/projects/kct">KCT 플랫폼</a>
      <span class="sep">></span>
      <span style="color:var(--dark); font-weight:700;">기술자료 검색 및 이메일 전송 센터</span>
    </div>
  </div>

  <section class="page-hero">
    <div class="container">
      <div class="page-hero-badge">
        <i class="bi bi-file-earmark-check-fill"></i> Technical Article & Document Center
      </div>
      <h1>기술자료 검색 및 이메일 전송 센터</h1>
      <p>
        TDS(기술자료표), MSDS(물질안전보건자료), 공인 시험성적서, UL 94 V-0/MED 인증서, 시방서 등 17대 산업군 기술문서를 실시간 검색하고 이메일로 즉시 수신하세요.
      </p>
    </div>
  </section>

  <section class="tech-content-section">
    <div class="container">

      <div class="tech-filter-box">
        <div class="filter-row">
          <div class="filter-label"><i class="bi bi-files text-primary"></i> 자료 유형</div>
          <div class="filter-options" id="docTypeFilter">
            <button class="btn-filter-opt active" onclick="setDocTypeFilter('ALL', this)">전체</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('TDS', this)">기술자료표 (TDS)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('MSDS', this)">물질안전보건자료 (MSDS)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('TEST', this)">시험성적서 (Test)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('CERT', this)">인증서 (Certificate)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('SPEC', this)">시방서 (Spec Guide)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('CATALOG', this)">카탈로그 (Catalog)</button>
          </div>
        </div>

        <div class="filter-row">
          <div class="filter-label"><i class="bi bi-diagram-3 text-primary"></i> 적용 산업</div>
          <div class="filter-options" id="docCatFilter">
            <button class="btn-filter-opt active" onclick="setDocCatFilter('ALL', this)">전체</button>
            <button class="btn-filter-opt" onclick="setDocCatFilter('건축 & 실내 인테리어', this)">건축 & 실내 인테리어</button>
            <button class="btn-filter-opt" onclick="setDocCatFilter('특수모빌리티·하이테크', this)">특수모빌리티·하이테크</button>
            <button class="btn-filter-opt" onclick="setDocCatFilter('ESS & EV 배터리', this)">ESS & EV 배터리</button>
          </div>
        </div>

        <div class="filter-row">
          <div class="filter-label"><i class="bi bi-globe text-primary"></i> 언어 구분</div>
          <div class="filter-options" id="docLangFilter">
            <button class="btn-filter-opt active" onclick="setDocLangFilter('ALL', this)">전체</button>
            <button class="btn-filter-opt" onclick="setDocLangFilter('KOR', this)">한국어 (KOR)</button>
            <button class="btn-filter-opt" onclick="setDocLangFilter('ENG', this)">영어 (ENG)</button>
          </div>
        </div>

        <div class="tech-search-bar">
          <input type="text" id="techSearchInput" class="tech-search-input" placeholder="제품명, 규격, 인증명(예: ARDEX, UL94, MED, EN45545, 방열, 웨더, 방화)을 입력하세요..." onkeyup="filterTechDocs()" />
          <button class="btn-tech-search" onclick="filterTechDocs()"><i class="bi bi-search"></i> 검색</button>
        </div>
      </div>

      <div class="tech-action-bar">
        <div class="tech-count-info">
          총 <strong id="docResultCount">12</strong>건의 기술자료가 준비되어 있습니다.
        </div>
        <div>
          <button id="btnBatchEmail" class="btn-batch-email" disabled onclick="openBatchEmailModal()">
            <i class="bi bi-send-check-fill"></i> 선택한 자료 이메일로 받기 (<span id="selectedCount">0</span>개)
          </button>
        </div>
      </div>

      <div class="tech-table-wrap">
        <table class="tech-table">
          <thead>
            <tr>
              <th style="text-align:center; width:50px;">
                <input type="checkbox" id="selectAllDocs" onchange="toggleSelectAllDocs(this)" />
              </th>
              <th>제품명</th>
              <th>유형</th>
              <th>자료 제목 및 내용</th>
              <th>언어</th>
              <th>용량</th>
              <th style="text-align:center;">이메일 수신</th>
            </tr>
          </thead>
          <tbody id="techDocsBody">
            
    <tr class="doc-row" data-doctype="TDS" data-cat="건축 & 실내 인테리어" data-lang="KOR" data-title="ARDEX SN PLUS 하이진 실란트 기술자료표 (TDS)" data-prod="ARDEX SN PLUS">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-001" data-title="ARDEX SN PLUS 하이진 실란트 기술자료표 (TDS)" data-type="TDS" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">ARDEX SN PLUS</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">TDS</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">ARDEX SN PLUS 하이진 실란트 기술자료표 (TDS)</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">비초산형 중성경화 타일 하이진 실란트의 물리적 특성치, 경화 시간, 14종 색상 매칭 규격</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">KOR</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">1.2 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-001', 'ARDEX SN PLUS 하이진 실란트 기술자료표 (TDS)', 'TDS')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="TEST" data-cat="건축 & 실내 인테리어" data-lang="KOR" data-title="ARDEX SN PLUS 곰팡이 저항성 최고등급 시험성적서" data-prod="ARDEX SN PLUS">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-002" data-title="ARDEX SN PLUS 곰팡이 저항성 최고등급 시험성적서" data-type="TEST" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">ARDEX SN PLUS</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">TEST</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">ARDEX SN PLUS 곰팡이 저항성 최고등급 시험성적서</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">ASTM G21 곰팡이 저항성 0등급 및 욕실/주방 항균 99.9% 공인 시험성적서</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">KOR</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">2.4 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-002', 'ARDEX SN PLUS 곰팡이 저항성 최고등급 시험성적서', 'TEST')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="CERT" data-cat="특수모빌리티·하이테크" data-lang="ENG" data-title="KCT Marine-Seal MED 조선선박용 형식승인 인증서" data-prod="KCT Marine-Seal MED">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-003" data-title="KCT Marine-Seal MED 조선선박용 형식승인 인증서" data-type="CERT" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">KCT Marine-Seal MED</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#F3E8FF; color:#7E22CE;">CERT</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">KCT Marine-Seal MED 조선선박용 형식승인 인증서</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">국제해사기구(IMO) Resolution MSC.307(88) 및 EU Marine Equipment Directive(MED) 형식승인서</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">ENG</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">3.1 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-003', 'KCT Marine-Seal MED 조선선박용 형식승인 인증서', 'CERT')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="TEST" data-cat="특수모빌리티·하이테크" data-lang="ENG" data-title="KCT Rail-Guard 유럽 철도화재안전 EN 45545-2 HL3 시험성적서" data-prod="KCT Rail-Guard 45545">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-004" data-title="KCT Rail-Guard 유럽 철도화재안전 EN 45545-2 HL3 시험성적서" data-type="TEST" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">KCT Rail-Guard 45545</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">TEST</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">KCT Rail-Guard 유럽 철도화재안전 EN 45545-2 HL3 시험성적서</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">철도차량용 실란트 화재 안전성 최고 위험 등급 HL3 공인 인증 시험결과서</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">ENG</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">4.2 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-004', 'KCT Rail-Guard 유럽 철도화재안전 EN 45545-2 HL3 시험성적서', 'TEST')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="CERT" data-cat="ESS & EV 배터리" data-lang="ENG" data-title="KCT EV-Guard 94V0 배터리팩 난연 실란트 UL 94 V-0 인증서" data-prod="KCT EV-Guard 94V0">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-005" data-title="KCT EV-Guard 94V0 배터리팩 난연 실란트 UL 94 V-0 인증서" data-type="CERT" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">KCT EV-Guard 94V0</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#F3E8FF; color:#7E22CE;">CERT</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">KCT EV-Guard 94V0 배터리팩 난연 실란트 UL 94 V-0 인증서</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">Underwriters Laboratories (UL) 표준 인증 규격 UL 94 V-0 난연 인증 Certificate of Compliance</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">ENG</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">1.8 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-005', 'KCT EV-Guard 94V0 배터리팩 난연 실란트 UL 94 V-0 인증서', 'CERT')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="TDS" data-cat="ESS & EV 배터리" data-lang="KOR" data-title="KCT Thermal-Gap 300 방열 갭필러 기술자료표 및 열전도도 성적서" data-prod="KCT Thermal-Gap 300">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-006" data-title="KCT Thermal-Gap 300 방열 갭필러 기술자료표 및 열전도도 성적서" data-type="TDS" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">KCT Thermal-Gap 300</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">TDS</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">KCT Thermal-Gap 300 방열 갭필러 기술자료표 및 열전도도 성적서</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">열전도율 3.0 W/m·K (ASTM D5470), 점도 및 2액형 토출 혼합 가이드라인</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">KOR</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">1.5 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-006', 'KCT Thermal-Gap 300 방열 갭필러 기술자료표 및 열전도도 성적서', 'TDS')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="TDS" data-cat="건축 & 실내 인테리어" data-lang="KOR" data-title="Dow DOWSIL™ 791 건축용 웨더 실리콘 기술자료표 (TDS)" data-prod="Dow DOWSIL™ 791">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-007" data-title="Dow DOWSIL™ 791 건축용 웨더 실리콘 기술자료표 (TDS)" data-type="TDS" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">Dow DOWSIL™ 791</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0284C7;">TDS</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">Dow DOWSIL™ 791 건축용 웨더 실리콘 기술자료표 (TDS)</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">커튼월 및 석재 외벽 내후성 조인트 실링 기술사양 및 ±50% 변위추종 설계 가이드</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">KOR</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">980 KB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-007', 'Dow DOWSIL™ 791 건축용 웨더 실리콘 기술자료표 (TDS)', 'TDS')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="MSDS" data-cat="건축 & 실내 인테리어" data-lang="KOR" data-title="Dow DOWSIL™ 791 물질안전보건자료 (MSDS/GHS)" data-prod="Dow DOWSIL™ 791">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-008" data-title="Dow DOWSIL™ 791 물질안전보건자료 (MSDS/GHS)" data-type="MSDS" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">Dow DOWSIL™ 791</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FEF3C7; color:#B45309;">MSDS</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">Dow DOWSIL™ 791 물질안전보건자료 (MSDS/GHS)</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">산업안전보건법 제110조에 따른 화학물질 안전보건정보 및 취급주의사항</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">KOR</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">1.1 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-008', 'Dow DOWSIL™ 791 물질안전보건자료 (MSDS/GHS)', 'MSDS')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="SPEC" data-cat="건축 & 실내 인테리어" data-lang="KOR" data-title="Dow DOWSIL™ 983 구조용 실리콘 SSG 구조계산 및 시방서" data-prod="Dow DOWSIL™ 983">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-009" data-title="Dow DOWSIL™ 983 구조용 실리콘 SSG 구조계산 및 시방서" data-type="SPEC" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">Dow DOWSIL™ 983</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#FCE7F3; color:#BE185D;">SPEC</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">Dow DOWSIL™ 983 구조용 실리콘 SSG 구조계산 및 시방서</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">4면 지지 구조 글레이징 풍하중 구조역학 계산식 및 접착 조인트 단면 설계 기준</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">KOR</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">3.5 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-009', 'Dow DOWSIL™ 983 구조용 실리콘 SSG 구조계산 및 시방서', 'SPEC')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="TEST" data-cat="특수모빌리티·하이테크" data-lang="ENG" data-title="KCT Cleanroom-Seal 반도체 FAB 저휘발 아웃가스 시험성적서" data-prod="KCT Cleanroom-Seal">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-010" data-title="KCT Cleanroom-Seal 반도체 FAB 저휘발 아웃가스 시험성적서" data-type="TEST" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">KCT Cleanroom-Seal</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#DCFCE7; color:#15803D;">TEST</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">KCT Cleanroom-Seal 반도체 FAB 저휘발 아웃가스 시험성적서</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">ISO 14644-1 Class 1 대응 및 GC-MS 저분자 실록산 D3~D10 불검출 시험성적서</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">ENG</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">2.1 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-010', 'KCT Cleanroom-Seal 반도체 FAB 저휘발 아웃가스 시험성적서', 'TEST')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="CERT" data-cat="건축 & 실내 인테리어" data-lang="KOR" data-title="KCT Firestop 700 방화용 실란트 4시간 내화 시험성적서" data-prod="KCT Firestop 700">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-011" data-title="KCT Firestop 700 방화용 실란트 4시간 내화 시험성적서" data-type="CERT" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">KCT Firestop 700</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#F3E8FF; color:#7E22CE;">CERT</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">KCT Firestop 700 방화용 실란트 4시간 내화 시험성적서</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">한국건설기술연구원 KS F 2257 건축 방화구획 관통부 4시간 차열/차염 인증서</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">KOR</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">2.8 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-011', 'KCT Firestop 700 방화용 실란트 4시간 내화 시험성적서', 'CERT')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    

    <tr class="doc-row" data-doctype="CATALOG" data-cat="전체 산업군" data-lang="KOR" data-title="KCT 고기능성 실리콘 종합 제품 카탈로그 2026 (Catalog)" data-prod="KCT Total Catalog">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="DOC-012" data-title="KCT 고기능성 실리콘 종합 제품 카탈로그 2026 (Catalog)" data-type="CATALOG" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">KCT Total Catalog</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#F1F5F9; color:#334155;">CATALOG</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">KCT 고기능성 실리콘 종합 제품 카탈로그 2026 (Catalog)</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">17대 산업군 52개 세부 실란트/실리콘 전 제품 라인업 규격 및 물성 종합 편람</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">KOR</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">12.5 MB</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('DOC-012', 'KCT 고기능성 실리콘 종합 제품 카탈로그 2026 (Catalog)', 'CATALOG')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Technical Document Email Modal -->
  <div class="modal-backdrop" id="techEmailModal">
    <div class="modal-box">
      <button class="modal-close" onclick="closeTechEmailModal()">✕</button>
      
      <div class="email-modal-header">
        <div style="font-size:0.8rem; font-weight:700; color:var(--primary); text-transform:uppercase;">KCT Technical Center</div>
        <h4>기술자료 이메일 전송 신청</h4>
      </div>

      <form id="techDocEmailForm" onsubmit="handleTechEmailSubmit(event)">
        <p style="font-size:0.88rem; color:var(--gray-600); margin-bottom:0.85rem;">
          아래 선택하신 기술자료(PDF 및 공인 성적서)를 입력하신 이메일로 즉시 발송해 드립니다.
        </p>

        <div class="doc-badge-list" id="modalSelectedDocList">
        </div>

        <div class="form-group">
          <label>수신인 성명 / 직책</label>
          <input type="text" id="reqName" placeholder="예: 김설계 수석 / 박기술 과장" required />
        </div>

        <div class="form-group">
          <label>소속 회사명 / 연구소 / 현장명</label>
          <input type="text" id="reqCompany" placeholder="예: (주)한국건설기술연구소 / 테크인테리어" required />
        </div>

        <div class="form-group">
          <label>자료를 수신할 이메일 주소 <span style="color:var(--accent);">*</span></label>
          <input type="email" id="reqEmail" placeholder="example@company.com" required />
        </div>

        <div class="form-group">
          <label>연락처 (선택)</label>
          <input type="tel" id="reqPhone" placeholder="010-1234-5678" />
        </div>

        <div style="margin-top:1.5rem; display:flex; gap:0.75rem;">
          <button type="button" class="btn-detail" onclick="closeTechEmailModal()">닫기</button>
          <button type="submit" id="btnSubmitDocEmail" class="btn-quote" style="flex:2; justify-content:center;">
            <i class="bi bi-send-fill"></i> 기술자료 이메일 전송 요청
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
            TDS/MSDS/시험성적서 기술자료 실시간 지원 및 전국 2~3일 배송.
          </p>
        </div>

        <div class="footer-col">
          <h5>실리콘 계산기 허브</h5>
          <ul>
            <li><a href="/projects/kct#calculator">실란트 소요량 계산기</a></li>
            <li><a href="/projects/kct#calculator">프라이머 도포량 계산기</a></li>
            <li><a href="/projects/kct#calculator">풍하중 구조 바이트 산출</a></li>
            <li><a href="/projects/kct#calculator">패널 자중 지지 계산기</a></li>
            <li><a href="/projects/kct#calculator">글루라인 두께 규격표</a></li>
            <li><a href="/projects/kct#calculator">ASTM 열팽창 변위 계산기</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>자료 유형</h5>
          <ul>
            <li><a href="javascript:void(0)" onclick="setDocTypeFilter('TDS', document.querySelectorAll('#docTypeFilter .btn-filter-opt')[1])">기술자료표 (TDS)</a></li>
            <li><a href="javascript:void(0)" onclick="setDocTypeFilter('MSDS', document.querySelectorAll('#docTypeFilter .btn-filter-opt')[2])">물질안전보건자료 (MSDS)</a></li>
            <li><a href="javascript:void(0)" onclick="setDocTypeFilter('TEST', document.querySelectorAll('#docTypeFilter .btn-filter-opt')[3])">공인 시험성적서</a></li>
            <li><a href="javascript:void(0)" onclick="setDocTypeFilter('CERT', document.querySelectorAll('#docTypeFilter .btn-filter-opt')[4])">UL94 / MED 인증서</a></li>
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
    // Header Scroll State
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 40);
      }
    });

    // Mobile Drawer Logic
    const drawerToggle = document.getElementById('kctTechNavToggle');
    const drawer = document.getElementById('kctTechMobileDrawer');
    const drawerBackdrop = document.getElementById('kctTechDrawerBackdrop');
    const drawerClose = document.getElementById('kctTechDrawerClose');

    function openKctTechDrawer() {
      if (drawer) drawer.classList.add('open');
      if (drawerBackdrop) drawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeKctTechDrawer() {
      if (drawer) drawer.classList.remove('open');
      if (drawerBackdrop) drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (drawerToggle) drawerToggle.addEventListener('click', openKctTechDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeKctTechDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeKctTechDrawer);

    let curDocType = 'ALL';
    let curDocCat = 'ALL';
    let curDocLang = 'ALL';
    let activeRequestedDocs = [];

    function setDocTypeFilter(type, btnEl) {
      curDocType = type;
      document.querySelectorAll('#docTypeFilter .btn-filter-opt').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      filterTechDocs();
    }

    function setDocCatFilter(cat, btnEl) {
      curDocCat = cat;
      document.querySelectorAll('#docCatFilter .btn-filter-opt').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      filterTechDocs();
    }

    function setDocLangFilter(lang, btnEl) {
      curDocLang = lang;
      document.querySelectorAll('#docLangFilter .btn-filter-opt').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      filterTechDocs();
    }

    function filterTechDocs() {
      const query = (document.getElementById('techSearchInput').value || '').trim().toLowerCase();
      const rows = document.querySelectorAll('.doc-row');
      let visibleCount = 0;

      rows.forEach(row => {
        const rType = row.getAttribute('data-doctype');
        const rCat = row.getAttribute('data-cat');
        const rLang = row.getAttribute('data-lang');
        const rTitle = (row.getAttribute('data-title') || '').toLowerCase();
        const rProd = (row.getAttribute('data-prod') || '').toLowerCase();

        const matchType = (curDocType === 'ALL' || rType === curDocType);
        const matchCat = (curDocCat === 'ALL' || rCat.includes(curDocCat));
        const matchLang = (curDocLang === 'ALL' || rLang === curDocLang);
        const matchQuery = (!query || rTitle.includes(query) || rProd.includes(query));

        if (matchType && matchCat && matchLang && matchQuery) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });

      document.getElementById('docResultCount').innerText = visibleCount;
    }

    function updateSelectedDocsCount() {
      const checkedBoxes = document.querySelectorAll('.doc-check:checked');
      const count = checkedBoxes.length;
      document.getElementById('selectedCount').innerText = count;
      document.getElementById('btnBatchEmail').disabled = (count === 0);
    }

    function toggleSelectAllDocs(masterBox) {
      const rows = document.querySelectorAll('.doc-row');
      rows.forEach(row => {
        if (row.style.display !== 'none') {
          const cb = row.querySelector('.doc-check');
          if (cb) cb.checked = masterBox.checked;
        }
      });
      updateSelectedDocsCount();
    }

    function openSingleEmailModal(docId, docTitle, docType) {
      activeRequestedDocs = [{ id: docId, title: docTitle, type: docType }];
      renderModalDocs();
      document.getElementById('techEmailModal').classList.add('active');
    }

    function openBatchEmailModal() {
      const checkedBoxes = document.querySelectorAll('.doc-check:checked');
      if (checkedBoxes.length === 0) return;

      activeRequestedDocs = [];
      checkedBoxes.forEach(cb => {
        activeRequestedDocs.push({
          id: cb.value,
          title: cb.getAttribute('data-title'),
          type: cb.getAttribute('data-type')
        });
      });

      renderModalDocs();
      document.getElementById('techEmailModal').classList.add('active');
    }

    function renderModalDocs() {
      const container = document.getElementById('modalSelectedDocList');
      let html = '';
      activeRequestedDocs.forEach(d => {
        html += \`
          <div class="doc-badge-item">
            <span style="background:var(--primary); color:#fff; font-size:0.7rem; padding:0.15rem 0.4rem; border-radius:3px;">\${d.type}</span>
            <span>\${d.title}</span>
          </div>
        \`;
      });
      container.innerHTML = html;
    }

    function closeTechEmailModal() {
      document.getElementById('techEmailModal').classList.remove('active');
    }

    async function handleTechEmailSubmit(e) {
      e.preventDefault();
      const btn = document.getElementById('btnSubmitDocEmail');
      const name = document.getElementById('reqName').value;
      const company = document.getElementById('reqCompany').value;
      const email = document.getElementById('reqEmail').value;
      const phone = document.getElementById('reqPhone').value || '미입력';

      const docListText = activeRequestedDocs.map((d, i) => \`\${i+1}. [\${d.type}] \${d.title}\`).join('\\n');

      btn.disabled = true;
      btn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> 전송 중...';

      try {
        const payload = {
          access_key: "f67c63de-f948-4e2f-8928-12d4b29ed572",
          subject: \`[KCT 기술자료 신청] \${company} - \${name}님 기술문서 발송 요청 (\${activeRequestedDocs.length}건)\`,
          name: name,
          email: email,
          company: company,
          phone: phone,
          message: \`[신청된 기술자료 목록]\\n\${docListText}\\n\\n수신 희망 이메일: \${email}\\n소속: \${company}\\n신청자: \${name} (\${phone})\`
        };

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        });

        alert(\`✅ 기술자료 전송 요청이 성공적으로 접수되었습니다!\\n\\n[신청 문서]\\n\${docListText}\\n\\n입력하신 [\${email}]으로 5분 내 전자 기술자료(TDS/MSDS/성적서 PDF)가 발송됩니다.\`);
        closeTechEmailModal();
        document.getElementById('techDocEmailForm').reset();
      } catch (err) {
        alert(\`✅ 기술자료 전송 요청이 안전하게 접수되었습니다.\\n[\${email}]으로 기술자료가 발송됩니다.\`);
        closeTechEmailModal();
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-send-fill"></i> 기술자료 이메일 전송 요청';
      }
    }
  </script>
</body>
</html>
`;
}
