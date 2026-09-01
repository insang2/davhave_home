// KCT Specimen Fabrication Center Renderer
export function renderKctSpecimenPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>공학 시편제작 센터 | ASTM D638 고분자 인장 시편 & ASTM C1401 구조 실리콘 시험체 종합 기술 백서 - KCT 한국건설트레이딩</title>
  <meta name="description" content="ASTM D638 Type I~V 고분자 3D 프린팅 정밀 인장 시편, ASTM C1401/C1135 구조용 실리콘 H-Block 접착 시험체, ASTM D412 Die C 엘라스토머 덤벨 시편 제작 및 DIC(Digital Image Correlation) 광학 변형률 분석 지원.">
  <meta name="keywords" content="ASTM D638, ASTM C1401, ASTM D412, ASTM C1135, ASTM C719, 인장 시편 제작, 3D프린팅 시편, PLA시편, DIC 변형률분석, 인스트론, 만능재료시험기, 구조용 실리콘 H-Block, KCT">
  
  <link rel="canonical" href="https://davhave.com/projects/kct/specimens">
  <meta property="og:type" content="website">
  <meta property="og:title" content="공학 시편제작 센터 | ASTM D638 & ASTM C1401 - KCT 한국건설트레이딩">
  <meta property="og:description" content="ASTM D638 Type I~V 플라스틱 인장 시편 및 실리콘 구조 접착 시험체 3D 프린팅 정밀 제작 및 UTM 시험 지원.">
  <meta property="og:url" content="https://davhave.com/projects/kct/specimens">
  
  <!-- CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --primary: #1E3A8A;
      --primary-dark: #172554;
      --primary-light: #3B82F6;
      --accent: #EA580C;
      --accent-hover: #C2410C;
      --dark: #0F172A;
      --gray-900: #1E293B;
      --gray-800: #334155;
      --gray-700: #475569;
      --gray-600: #64748B;
      --gray-400: #94A3B8;
      --gray-200: #E2E8F0;
      --gray-100: #F1F5F9;
      --gray-50: #F8FAFC;
      --white: #FFFFFF;
      --radius-sm: 6px;
      --radius: 12px;
      --radius-lg: 20px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
      --shadow: 0 10px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04);
      --shadow-xl: 0 25px 50px -12px rgba(0,0,0,0.18);
      --font: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
      --mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font); color: var(--gray-800); background: var(--gray-50); line-height: 1.7; -webkit-font-smoothing: antialiased; }
    a { color: inherit; text-decoration: none; }
    .container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 1.5rem; }

    /* Top Bar */
    .top-bar { background: var(--gray-900); color: var(--gray-400); font-size: 0.8rem; padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .top-bar-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; }
    .top-bar-info { display: flex; gap: 1.25rem; align-items: center; }
    .top-bar-links { display: flex; gap: 1rem; align-items: center; }
    .top-bar-links a { color: var(--gray-300); transition: color 0.2s; }
    .top-bar-links a:hover { color: var(--white); }

    /* GNB Header */
    header { background: rgba(255,255,255,0.96); backdrop-filter: blur(12px); position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid var(--gray-200); }
    .nav-inner { display: flex; justify-content: space-between; align-items: center; height: 72px; }
    .brand-logo { display: flex; align-items: center; gap: 0.75rem; font-weight: 900; font-size: 1.45rem; color: var(--primary); letter-spacing: -0.02em; }
    .brand-badge { background: linear-gradient(135deg, var(--accent), var(--accent-hover)); color: var(--white); font-size: 0.68rem; font-weight: 800; padding: 0.25rem 0.6rem; border-radius: 4px; font-family: var(--mono); }
    .nav-menu { display: flex; gap: 0.35rem; align-items: center; }
    .nav-link { padding: 0.65rem 1rem; font-weight: 600; font-size: 0.92rem; color: var(--gray-700); border-radius: var(--radius-sm); transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.4rem; }
    .nav-link:hover { color: var(--primary); background: var(--gray-100); }
    .nav-link.active { color: var(--primary); background: rgba(30,58,138,0.08); font-weight: 700; }
    .nav-link.highlight { color: var(--accent); background: rgba(234,88,12,0.08); }
    .nav-link.highlight:hover { background: rgba(234,88,12,0.15); color: var(--accent-hover); }

    .nav-actions { display: flex; align-items: center; gap: 0.75rem; }
    .btn-quote { background: var(--primary); color: var(--white); font-weight: 700; font-size: 0.88rem; padding: 0.65rem 1.25rem; border-radius: 8px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 12px rgba(30,58,138,0.25); }
    .btn-quote:hover { background: var(--primary-dark); transform: translateY(-1px); }

    /* Hero Section */
    .spec-hero {
      background: linear-gradient(135deg, #0B132B 0%, #1C2541 50%, #0F172A 100%);
      color: var(--white);
      padding: 5rem 0 5.5rem;
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .spec-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 80% 20%, rgba(234,88,12,0.18) 0%, transparent 60%),
                  radial-gradient(circle at 20% 80%, rgba(59,130,246,0.18) 0%, transparent 60%);
      pointer-events: none;
    }
    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      backdrop-filter: blur(8px);
      padding: 0.45rem 1rem;
      border-radius: 100px;
      font-size: 0.84rem;
      font-weight: 700;
      color: #93C5FD;
      margin-bottom: 1.25rem;
      font-family: var(--mono);
    }
    .hero-title { font-size: 2.75rem; font-weight: 900; line-height: 1.2; letter-spacing: -0.03em; margin-bottom: 1.25rem; }
    .hero-title span { color: #F97316; }
    .hero-desc { font-size: 1.15rem; color: #CBD5E1; max-width: 860px; line-height: 1.75; margin-bottom: 2rem; font-weight: 400; }
    
    .hero-badges { display: flex; flex-wrap: wrap; gap: 0.65rem; margin-bottom: 2.5rem; }
    .hero-badge {
      background: rgba(15,23,42,0.75);
      border: 1px solid rgba(255,255,255,0.15);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.84rem;
      font-weight: 600;
      color: #F1F5F9;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
    }

    .hero-quick-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-hero-primary { background: linear-gradient(135deg, #EA580C, #C2410C); color: #fff; font-weight: 800; padding: 0.95rem 1.9rem; border-radius: 10px; font-size: 1rem; box-shadow: 0 10px 25px rgba(234,88,12,0.4); display: inline-flex; align-items: center; gap: 0.5rem; transition: transform 0.2s; }
    .btn-hero-primary:hover { transform: translateY(-2px); color: #fff; }
    .btn-hero-secondary { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-weight: 700; padding: 0.95rem 1.7rem; border-radius: 10px; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.2s; backdrop-filter: blur(8px); }
    .btn-hero-secondary:hover { background: rgba(255,255,255,0.2); color: #fff; }

    /* Section Styles */
    section { padding: 5rem 0; }
    .section-header { text-align: center; max-width: 860px; margin: 0 auto 3.5rem; }
    .section-tag { font-family: var(--mono); font-size: 0.82rem; font-weight: 800; color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.5rem; display: block; }
    .section-title { font-size: 2.25rem; font-weight: 900; color: var(--dark); letter-spacing: -0.02em; margin-bottom: 0.9rem; }
    .section-subtitle { font-size: 1.05rem; color: var(--gray-600); line-height: 1.7; }

    /* White Paper Technical Box */
    .whitepaper-box {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-lg);
      padding: 3rem;
      box-shadow: var(--shadow);
      margin-bottom: 3.5rem;
    }
    .wp-header { display: flex; align-items: center; gap: 1rem; border-bottom: 2px solid var(--gray-100); padding-bottom: 1.5rem; margin-bottom: 2rem; }
    .wp-icon-ring { width: 54px; height: 54px; border-radius: 12px; background: rgba(30,58,138,0.08); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; flex: none; }
    .wp-title-wrap h3 { font-size: 1.45rem; font-weight: 800; color: var(--dark); margin-bottom: 0.25rem; }
    .wp-title-wrap p { font-size: 0.88rem; color: var(--gray-600); }

    .wp-content h4 { font-size: 1.18rem; font-weight: 800; color: var(--primary-dark); margin: 1.8rem 0 0.8rem; display: flex; align-items: center; gap: 0.5rem; }
    .wp-content p { font-size: 0.95rem; color: var(--gray-700); line-height: 1.75; margin-bottom: 1rem; }
    
    .formula-callout {
      background: #0F172A;
      color: #E2E8F0;
      border-left: 4px solid var(--accent);
      border-radius: 0 8px 8px 0;
      padding: 1.25rem 1.6rem;
      margin: 1.2rem 0 1.6rem;
      font-family: var(--mono);
      font-size: 0.92rem;
      line-height: 1.7;
    }
    .formula-callout strong { color: #F97316; }

    .alert-box-info {
      background: #EFF6FF;
      border: 1px solid #BFDBFE;
      border-radius: 8px;
      padding: 1.2rem 1.5rem;
      color: #1E40AF;
      font-size: 0.92rem;
      line-height: 1.65;
      margin: 1.5rem 0;
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
    }

    /* Card Grid */
    .spec-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 2rem; }
    .spec-card {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius);
      padding: 2rem;
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .spec-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary-light);
    }
    .spec-card.highlight {
      border: 2px solid var(--accent);
      background: linear-gradient(180deg, rgba(234,88,12,0.03) 0%, var(--white) 100%);
    }
    .spec-badge-top {
      position: absolute;
      top: -12px;
      right: 20px;
      background: var(--accent);
      color: var(--white);
      font-family: var(--mono);
      font-size: 0.74rem;
      font-weight: 800;
      padding: 0.3rem 0.85rem;
      border-radius: 100px;
      box-shadow: 0 4px 12px rgba(234,88,12,0.35);
    }
    .spec-card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
    .spec-type-tag { font-family: var(--mono); font-size: 0.82rem; font-weight: 800; color: var(--primary); background: var(--gray-100); padding: 0.3rem 0.65rem; border-radius: 4px; }
    .spec-title { font-size: 1.3rem; font-weight: 800; color: var(--dark); margin-bottom: 0.35rem; }
    .spec-subtitle { font-size: 0.86rem; color: var(--gray-600); margin-bottom: 1.2rem; }
    
    .spec-metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.65rem;
      background: var(--gray-50);
      border: 1px solid var(--gray-200);
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1.2rem;
    }
    .metric-item { display: flex; flex-direction: column; }
    .metric-label { font-size: 0.72rem; color: var(--gray-600); font-weight: 600; margin-bottom: 0.15rem; }
    .metric-val { font-family: var(--mono); font-size: 0.98rem; font-weight: 800; color: var(--dark); }
    .metric-val.accent { color: var(--accent); }

    .spec-dim-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; margin-bottom: 1.2rem; }
    .spec-dim-table th, .spec-dim-table td { padding: 0.45rem 0.5rem; border-bottom: 1px solid var(--gray-200); }
    .spec-dim-table th { color: var(--gray-600); font-weight: 600; text-align: left; }
    .spec-dim-table td { font-family: var(--mono); font-weight: 600; text-align: right; color: var(--dark); }

    .spec-desc { font-size: 0.9rem; color: var(--gray-700); line-height: 1.65; margin-bottom: 1.5rem; flex: 1; }
    .spec-btn-action {
      margin-top: auto;
      background: var(--gray-100);
      color: var(--primary);
      border: 1px solid var(--gray-300);
      font-weight: 700;
      font-size: 0.88rem;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      text-align: center;
      transition: all 0.2s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
    }
    .spec-btn-action:hover { background: var(--primary); color: var(--white); border-color: var(--primary); }
    .spec-card.highlight .spec-btn-action { background: var(--accent); color: var(--white); border-color: var(--accent); }
    .spec-card.highlight .spec-btn-action:hover { background: var(--accent-hover); }

    /* Comparison Table Section */
    .table-container { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius); overflow-x: auto; box-shadow: var(--shadow-sm); }
    .full-comp-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left; min-width: 950px; }
    .full-comp-table th { background: var(--gray-900); color: var(--white); padding: 1.1rem 1.2rem; font-weight: 700; font-family: var(--mono); font-size: 0.82rem; }
    .full-comp-table td { padding: 1.1rem 1.2rem; border-bottom: 1px solid var(--gray-200); }
    .full-comp-table tr:hover td { background: var(--gray-50); }
    .full-comp-table tr.highlight td { background: rgba(234,88,12,0.04); font-weight: 600; }
    .badge-opt { background: #DCFCE7; color: #166534; font-size: 0.72rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 4px; font-family: var(--mono); }

    /* Tech Cards Grid */
    .tech-box-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 2rem; margin-top: 2rem; }
    .tech-box { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 2.2rem; box-shadow: var(--shadow-sm); }
    .tech-box h4 { font-size: 1.3rem; font-weight: 800; color: var(--dark); margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.6rem; }
    .tech-box p { font-size: 0.92rem; color: var(--gray-700); line-height: 1.7; margin-bottom: 1.2rem; }

    /* Interactive Estimator */
    .estimator-card {
      background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
      color: var(--white);
      border-radius: var(--radius-lg);
      padding: 3.5rem 3rem;
      box-shadow: var(--shadow-xl);
      border: 1px solid rgba(255,255,255,0.1);
      margin: 2rem 0;
    }
    .estimator-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: center; }
    @media (max-width: 900px) { .estimator-grid { grid-template-columns: 1fr; } }
    
    .form-group { margin-bottom: 1.2rem; }
    .form-label { display: block; font-size: 0.85rem; font-weight: 700; color: #94A3B8; margin-bottom: 0.45rem; }
    .form-select, .form-input {
      width: 100%;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.2);
      color: var(--white);
      padding: 0.85rem 1rem;
      border-radius: 8px;
      font-size: 0.92rem;
      font-family: var(--font);
      outline: none;
      transition: border 0.2s;
    }
    .form-select option { background: #1E293B; color: #fff; }
    .form-select:focus, .form-input:focus { border-color: var(--accent); }

    .calc-result-box {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: var(--radius);
      padding: 2.2rem;
      backdrop-filter: blur(10px);
    }
    .res-row { display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .res-row:last-child { border-bottom: none; }
    .res-label { font-size: 0.88rem; color: #94A3B8; }
    .res-val { font-family: var(--mono); font-size: 1.15rem; font-weight: 800; color: #F97316; }

    /* Order Form */
    .order-section { background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 3.5rem 3rem; margin-top: 3rem; box-shadow: var(--shadow); }
    .form-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.2rem; margin-bottom: 1.2rem; }
    .input-field { width: 100%; border: 1px solid var(--gray-300); border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.95rem; font-family: var(--font); outline: none; transition: all 0.2s; }
    .input-field:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(30,58,138,0.12); }
    .btn-submit-order { width: 100%; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: var(--white); border: none; padding: 1.1rem; border-radius: 8px; font-weight: 800; font-size: 1.05rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 8px 20px rgba(30,58,138,0.25); display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
    .btn-submit-order:hover { transform: translateY(-2px); box-shadow: 0 12px 25px rgba(30,58,138,0.35); }

    /* Footer */
    footer { background: var(--gray-900); color: var(--gray-400); padding: 4.5rem 0 2rem; border-top: 1px solid rgba(255,255,255,0.08); font-size: 0.88rem; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3rem; margin-bottom: 3.5rem; }
    @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr; } }
    .footer-col h5 { color: var(--white); font-size: 1rem; font-weight: 800; margin-bottom: 1.2rem; }
    .footer-links-list { list-style: none; }
    .footer-links-list li { margin-bottom: 0.65rem; }
    .footer-links-list a { color: var(--gray-400); transition: color 0.2s; }
    .footer-links-list a:hover { color: var(--white); }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 2rem; text-align: center; font-size: 0.8rem; color: var(--gray-600); }
  </style>
</head>
<body>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-bar-info">
        <span><i class="bi bi-shield-check text-primary-light"></i> <strong>시험규격:</strong> ASTM D638 / ASTM C1401 / ASTM C1135 / ASTM D412</span>
        <span><i class="bi bi-cpu text-primary-light"></i> <strong>정밀조형:</strong> FDM 0.05mm 정밀 적층</span>
        <span><i class="bi bi-camera text-primary-light"></i> <strong>광학측정:</strong> DIC 변형률 분석 (Ncorr)</span>
      </div>
      <div class="top-bar-links">
        <a href="/projects/kct"><i class="bi bi-house-door"></i> KCT 홈</a>
        <a href="/projects/kct/specimens"><i class="bi bi-box-seam-fill text-primary-light"></i> 시편제작 센터</a>
        <a href="/projects/kct/color-samples"><i class="bi bi-palette"></i> 색상칩 시편관</a>
        <a href="/projects/kct/technical"><i class="bi bi-file-earmark-pdf"></i> 기술자료 센터</a>
        <a href="/projects/kct#calculator"><i class="bi bi-calculator"></i> 6대 계산기</a>
        <a href="mailto:sales@kconstrade.com"><i class="bi bi-envelope"></i> sales@kconstrade.com</a>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header>
    <div class="container nav-inner">
      <a href="/projects/kct" class="brand-logo">
        KCT <span style="font-weight:400; color:var(--gray-600); font-size:1.05rem;">한국건설트레이딩</span>
        <span class="brand-badge">SPECIMEN LAB</span>
      </a>

      <nav class="nav-menu">
        <a href="/projects/kct" class="nav-link">KCT 메인</a>
        <a href="/projects/kct/specimens" class="nav-link active"><i class="bi bi-box-seam-fill"></i> 시편제작 센터</a>
        <a href="/projects/kct/color-samples" class="nav-link"><i class="bi bi-palette"></i> 색상칩 시편</a>
        <a href="/projects/kct/technical" class="nav-link"><i class="bi bi-file-earmark-arrow-down"></i> 기술자료 센터</a>
        <a href="/projects/kct#calculator" class="nav-link">실리콘 계산기</a>
        <a href="#estimator" class="nav-link highlight"><i class="bi bi-calculator-fill"></i> 소요시간 계산기</a>
      </nav>

      <div class="nav-actions">
        <a href="#order-form" class="btn-quote"><i class="bi bi-send-fill"></i> 시편제작 의뢰</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <div class="spec-hero">
    <div class="container">
      <div class="hero-eyebrow">
        <i class="bi bi-gear-wide-connected"></i> ASTM D638 & ASTM C1401 COMPREHENSIVE ENGINEERING SPECIMEN LAB
      </div>
      <h1 class="hero-title">
        ASTM D638 고분자 인장 시편 &<br>ASTM C1401 구조 실리콘 <span>정밀 시편 제작 센터</span>
      </h1>
      <p class="hero-desc">
        ASTM D638 Type I~V 플라스틱 인장 덤벨 시편의 5대 기하학적 형상과 FDM 3D 적층 파라미터 최적화, 
        DIC(Digital Image Correlation) 광학 변형률 분석, 그리고 커튼월 구조 글레이징(SSG)을 위한 ASTM C1401 / ASTM C1135 
        H-Block 인장 접착 시험체 제작 및 Instron UTM 시험 가이드를 제공하는 엔지니어링 기술 센터입니다.
      </p>

      <div class="hero-badges">
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> ASTM D638 Type I ~ Type V 전 규격 완벽 대응</span>
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> ASTM C1401 / C1135 H-Block 구조접착 시험체 (50×12×12mm)</span>
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> DIC 2~4px 고대비 스펙클 표면 가공 (Ncorr 분석 연동)</span>
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> ★ Type V 고효율 시편 (제작시간 5배 단축, 재료 80% 절감)</span>
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> Instron 만능재료시험기 속도 및 신율계 세팅 매핑</span>
      </div>

      <div class="hero-quick-cta">
        <a href="#d638-deepdive" class="btn-hero-primary"><i class="bi bi-book-half"></i> ASTM D638 공학 기술 가이드</a>
        <a href="#c1401-deepdive" class="btn-hero-secondary"><i class="bi bi-building-gear"></i> ASTM C1401 실리콘 구조설계 가이드</a>
        <a href="#estimator" class="btn-hero-secondary"><i class="bi bi-calculator"></i> 시편 출력시간 & 중량 계산기</a>
      </div>
    </div>
  </div>

  <!-- Engineering Deep Dive 1: ASTM D638 Comprehensive Guide -->
  <section id="d638-deepdive" class="container">
    <div class="section-header">
      <span class="section-tag">// Engineering Fundamentals</span>
      <h2 class="section-title">ASTM D638 플라스틱 인장 시험 심층 공학 가이드</h2>
      <p class="section-subtitle">
        고분자 재료의 기계적 거동을 정량화하기 위한 시험 원리, 측정 파라미터 수식 및 Instron UTM 장비 설정 프로토콜입니다.
      </p>
    </div>

    <div class="whitepaper-box">
      <div class="wp-header">
        <div class="wp-icon-ring"><i class="bi bi-rulers"></i></div>
        <div class="wp-title-wrap">
          <h3>ASTM D638 표준의 핵심 목적 및 5대 기계적 물성 파라미터</h3>
          <p>Standard Test Method for Tensile Properties of Plastics (ASTM International / Instron Guidance)</p>
        </div>
      </div>

      <div class="wp-content">
        <p>
          ASTM D638은 비보강 및 보강 플라스틱, 열가소성/열경화성 고분자, 3D 프린팅 조형물의 인장 물성을 평가하는 대표적인 국제 시험 규격입니다. 덤벨(Dog-bone) 형상의 시편에 일정한 속도로 인장 하중을 가하여 응력-변형률 곡선(Stress-Strain Curve)을 도출하며, 다음 5대 핵심 파라미터를 측정합니다.
        </p>

        <h4>1. 최종 인장강도 (Ultimate Tensile Strength, UTS / $\\sigma_u$)</h4>
        <p>
          시편이 파단될 때까지 견디는 최대 인장 하중($F_{\\text{max}}$)을 초기 평행부 최소 단면적($A_0 = W \\times T$)으로 나눈 값입니다.
        </p>
        <div class="formula-callout">
          <strong>인장강도 산출식:</strong><br>
          $\\sigma = \\frac{F_{\\text{max}}}{A_0} = \\frac{F_{\\text{max}}}{W \\times T} \\quad [\\text{MPa 또는 } \\text{N/mm}^2]$<br>
          <em>(여기서 $W$: 평행부 협소 폭, $T$: 시편 두께)</em>
        </div>

        <h4>2. 인장 탄성계수 (Young's Modulus / Tensile Modulus, $E$)</h4>
        <p>
          재료의 강성(Stiffness)을 나타내며, 응력-변형률 곡선의 초기 탄성 선형 구간(보통 변형률 $0.05\\% \\sim 0.25\\%$ 범위)에서의 기울기로 산출됩니다.
        </p>
        <div class="formula-callout">
          <strong>인장 탄성계수 산출식 (Hooke의 법칙):</strong><br>
          $E = \\frac{\\Delta \\sigma}{\\Delta \\varepsilon} = \\frac{\\sigma_2 - \\sigma_1}{\\varepsilon_2 - \\varepsilon_1} \\quad [\\text{GPa 또는 } \\text{MPa}]$
        </div>

        <h4>3. 항복강도 및 오프셋 항복점 (Yield Strength / $0.2\\%$ Offset Yield)</h4>
        <p>
          탄성 변형에서 영구적인 소성 변형으로 전이되는 지점의 응력입니다. 뚜렷한 항복점이 나타나지 않는 고분자의 경우 $0.2\\%$ 변형률 오프셋 직선을 그어 교차점을 산출합니다.
        </p>

        <h4>4. 파단 연신율 (Elongation at Break / Nominal Strain, $\\varepsilon_b$)</h4>
        <p>
          시편이 파단되는 순간 초기 표점거리($G$ 또는 $L_0$) 대비 늘어난 길이의 백분율입니다. 재료의 연성(Ductility)을 평가하는 핵심 척도입니다.
        </p>
        <div class="formula-callout">
          <strong>파단 연신율 산출식:</strong><br>
          $\\varepsilon_b = \\frac{L_f - L_0}{L_0} \\times 100 \\quad [\\%]$<br>
          <em>(여기서 $L_0$: 초기 표점거리 Gage Length, $L_f$: 파단 시점 표점거리)</em>
        </div>

        <h4>5. 포아송 비 (Poisson's Ratio, $\\nu$)</h4>
        <p>
          축방향 인장 변형률($\\varepsilon_{yy}$)에 대한 횡방향 수축 변형률($\\varepsilon_{xx}$)의 비율로, DIC(Digital Image Correlation) 광학 변형률 분석을 통해 실시간 2차원 텐서로 측정됩니다.
        </p>
        <div class="formula-callout">
          <strong>포아송 비 산출식:</strong><br>
          $\\nu = - \\frac{\\varepsilon_{\\text{transverse}}}{\\varepsilon_{\\text{longitudinal}}} = - \\frac{\\varepsilon_{xx}}{\\varepsilon_{yy}}$
        </div>

        <div class="alert-box-info">
          <i class="bi bi-info-circle-fill" style="font-size:1.2rem; flex:none;"></i>
          <div>
            <strong>Instron UTM 시험 시 주의사항 (신율계 Extensometer 필수):</strong><br>
            크로스헤드 이동 거리(Crosshead Displacement)만으로 변형률을 계산하면 그립 슬립 및 시스템 유연성으로 인해 탄성계수가 최대 $30\\sim 50\\%$ 과소평가될 수 있습니다. 정밀 탄성계수 측정을 위해서는 반드시 <strong>클립온 접촉식 신율계</strong> 또는 <strong>비접촉 비디오/DIC 신율계</strong>를 사용해야 합니다.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: ASTM D638 5 Types Detailed Grid -->
  <section class="container" style="padding-top:0;">
    <div class="section-header">
      <span class="section-tag">// Specimen Types & Dimensions</span>
      <h2 class="section-title">ASTM D638 5대 덤벨 시편 규격별 상세 치수 & 용도</h2>
      <p class="section-subtitle">
        시편 두께, 재료 가용량, 파단 특성 및 시험 목적에 따라 엄격히 정의된 5가지 형상 규격입니다.
      </p>
    </div>

    <div class="spec-grid">
      <!-- Type I -->
      <div class="spec-card">
        <div class="spec-card-head">
          <span class="spec-type-tag">TYPE I</span>
          <span style="font-size:0.75rem; color:var(--primary); font-weight:700;"><i class="bi bi-award-fill"></i> 표준 덤벨 규격</span>
        </div>
        <h3 class="spec-title">ASTM D638 Type I</h3>
        <div class="spec-subtitle">표준 경질 플라스틱 (두께 ≤ 7.0mm)</div>
        
        <div class="spec-metrics">
          <div class="metric-item">
            <span class="metric-label">최종 인장강도 (UTS)</span>
            <span class="metric-val">43.18 MPa</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">3D 출력 소요시간</span>
            <span class="metric-val">1시간 18분 31초</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">필라멘트 소모량</span>
            <span class="metric-val">9.8 g (3.30 m)</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">추천 시험속도</span>
            <span class="metric-val">5 mm/min</span>
          </div>
        </div>

        <table class="spec-dim-table">
          <tr><th>W - 평행부 폭</th><td>13.0 mm (±0.5)</td></tr>
          <tr><th>L - 평행부 길이</th><td>57.0 mm (±0.5)</td></tr>
          <tr><th>WO - 전체 폭</th><td>19.0 mm (+6.4)</td></tr>
          <tr><th>LO - 전체 길이</th><td>165.0 mm</td></tr>
          <tr><th>G - 표점거리 (Gage Length)</th><td>50.0 mm (±0.25)</td></tr>
          <tr><th>D - 그립간 거리</th><td>115.0 mm (±5.0)</td></tr>
          <tr><th>R - 필렛 반경</th><td>76.0 mm (±1.0)</td></tr>
        </table>

        <p class="spec-desc">
          <strong>권장 용도:</strong> 가장 대표적인 표준 시편으로 강성 및 반경질 플라스틱(PLA+, ABS, PC, POM 등)의 공인 인증 시험에 필수입니다.
        </p>
        <button class="spec-btn-action" onclick="selectSpecimenToCalc('TYPE-1')">
          <i class="bi bi-check2-circle"></i> 견적 계산기 적용
        </button>
      </div>

      <!-- Type II -->
      <div class="spec-card">
        <div class="spec-card-head">
          <span class="spec-type-tag" style="color:#0284C7;">TYPE II</span>
          <span style="font-size:0.75rem; color:#0284C7; font-weight:700;"><i class="bi bi-shield-slash"></i> 슬립/조기파단 방지</span>
        </div>
        <h3 class="spec-title">ASTM D638 Type II</h3>
        <div class="spec-subtitle">협소 평행부 (슬립 및 그립부 파단 방지용)</div>
        
        <div class="spec-metrics">
          <div class="metric-item">
            <span class="metric-label">최종 인장강도 (UTS)</span>
            <span class="metric-val">43.16 MPa</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">3D 출력 소요시간</span>
            <span class="metric-val">1시간 09분 45초</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">필라멘트 소모량</span>
            <span class="metric-val">8.3 g (2.80 m)</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">추천 시험속도</span>
            <span class="metric-val">5 mm/min</span>
          </div>
        </div>

        <table class="spec-dim-table">
          <tr><th>W - 평행부 폭</th><td>6.0 mm (±0.5)</td></tr>
          <tr><th>L - 평행부 길이</th><td>57.0 mm (±0.5)</td></tr>
          <tr><th>WO - 전체 폭</th><td>19.0 mm (+6.4)</td></tr>
          <tr><th>LO - 전체 길이</th><td>183.0 mm</td></tr>
          <tr><th>G - 표점거리</th><td>50.0 mm (±0.25)</td></tr>
          <tr><th>D - 그립간 거리</th><td>135.0 mm (±5.0)</td></tr>
          <tr><th>R - 필렛 반경</th><td>76.0 mm (±1.0)</td></tr>
        </table>

        <p class="spec-desc">
          <strong>권장 용도:</strong> Type I 시험 시 그립 부근의 응력 집중으로 표점 외부 조기 파단이 일어나는 재료에 적합한 긴 그립 구조입니다.
        </p>
        <button class="spec-btn-action" onclick="selectSpecimenToCalc('TYPE-2')">
          <i class="bi bi-check2-circle"></i> 견적 계산기 적용
        </button>
      </div>

      <!-- Type III -->
      <div class="spec-card">
        <div class="spec-card-head">
          <span class="spec-type-tag" style="color:#7C3AED;">TYPE III</span>
          <span style="font-size:0.75rem; color:#7C3AED; font-weight:700;"><i class="bi bi-layers-fill"></i> 후판/대형 구조재</span>
        </div>
        <h3 class="spec-title">ASTM D638 Type III</h3>
        <div class="spec-subtitle">후판 시트 및 대형 구조재 (두께 7~14mm)</div>
        
        <div class="spec-metrics">
          <div class="metric-item">
            <span class="metric-label">최종 인장강도 (UTS)</span>
            <span class="metric-val">43.02 MPa</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">3D 출력 소요시간</span>
            <span class="metric-val">3시간 05분 27초</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">필라멘트 소모량</span>
            <span class="metric-val">23.0 g (7.70 m)</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">추천 시험속도</span>
            <span class="metric-val">5 mm/min</span>
          </div>
        </div>

        <table class="spec-dim-table">
          <tr><th>W - 평행부 폭</th><td>19.0 mm (±0.5)</td></tr>
          <tr><th>L - 평행부 길이</th><td>57.0 mm (±0.5)</td></tr>
          <tr><th>WO - 전체 폭</th><td>29.0 mm (+6.4)</td></tr>
          <tr><th>LO - 전체 길이</th><td>246.0 mm</td></tr>
          <tr><th>G - 표점거리</th><td>50.0 mm (±0.25)</td></tr>
          <tr><th>D - 그립간 거리</th><td>115.0 mm (±5.0)</td></tr>
          <tr><th>R - 필렛 반경</th><td>76.0 mm (±1.0)</td></tr>
        </table>

        <p class="spec-desc">
          <strong>권장 용도:</strong> 두께 7mm를 초과하는 두꺼운 엔지니어링 플라스틱 판재, 압출재 및 대형 3D 조형체의 대하중 인장 평가용 규격입니다.
        </p>
        <button class="spec-btn-action" onclick="selectSpecimenToCalc('TYPE-3')">
          <i class="bi bi-check2-circle"></i> 견적 계산기 적용
        </button>
      </div>

      <!-- Type IV -->
      <div class="spec-card">
        <div class="spec-card-head">
          <span class="spec-type-tag" style="color:#D97706;">TYPE IV</span>
          <span style="font-size:0.75rem; color:#D97706; font-weight:700;"><i class="bi bi-shuffle"></i> 연질/탄성체 비교</span>
        </div>
        <h3 class="spec-title">ASTM D638 Type IV</h3>
        <div class="spec-subtitle">경질 및 비경질 플라스틱 비교 시험용</div>
        
        <div class="spec-metrics">
          <div class="metric-item">
            <span class="metric-label">최종 인장강도 (UTS)</span>
            <span class="metric-val">40.30 MPa</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">3D 출력 소요시간</span>
            <span class="metric-val">48분 38초</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">필라멘트 소모량</span>
            <span class="metric-val">5.7 g (1.91 m)</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">추천 시험속도</span>
            <span class="metric-val">50 mm/min (연질)</span>
          </div>
        </div>

        <table class="spec-dim-table">
          <tr><th>W - 평행부 폭</th><td>6.0 mm (±0.5)</td></tr>
          <tr><th>L - 평행부 길이</th><td>33.0 mm (±0.5)</td></tr>
          <tr><th>WO - 전체 폭</th><td>19.0 mm (+6.4)</td></tr>
          <tr><th>LO - 전체 길이</th><td>115.0 mm</td></tr>
          <tr><th>G - 표점거리</th><td>25.0 mm (±0.13)</td></tr>
          <tr><th>D - 그립간 거리</th><td>65.0 mm (±5.0)</td></tr>
          <tr><th>R / RO - 필렛 / 외측반경</th><td>14.0 mm / 25.0 mm</td></tr>
        </table>

        <p class="spec-desc">
          <strong>권장 용도:</strong> 경질 고분자와 유연 고분자(TPU, PE 등)의 연신율 거동 비교를 위해 외측 라운딩(RO 25mm)이 적용된 콤팩트 규격입니다.
        </p>
        <button class="spec-btn-action" onclick="selectSpecimenToCalc('TYPE-4')">
          <i class="bi bi-check2-circle"></i> 견적 계산기 적용
        </button>
      </div>

      <!-- Type V (Optimal Recommendation) -->
      <div class="spec-card highlight">
        <span class="spec-badge-top"><i class="bi bi-star-fill"></i> ★ 연구 논문 검증 최고 효율 시편</span>
        <div class="spec-card-head">
          <span class="spec-type-tag" style="background:var(--accent); color:#fff;">TYPE V (MICRO)</span>
          <span style="font-size:0.75rem; color:var(--accent); font-weight:800;"><i class="bi bi-lightning-charge-fill"></i> 80% 시간·비용 절감</span>
        </div>
        <h3 class="spec-title">ASTM D638 Type V (마이크로)</h3>
        <div class="spec-subtitle">래피드 프로토타이핑 & 고효율 신속 시험용</div>
        
        <div class="spec-metrics" style="background:rgba(234,88,12,0.06); border-color:rgba(234,88,12,0.2);">
          <div class="metric-item">
            <span class="metric-label">최종 인장강도 (UTS)</span>
            <span class="metric-val accent">42.64 MPa (Type I과 동등)</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">3D 출력 소요시간</span>
            <span class="metric-val accent">14분 59초 (5배 단축)</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">필라멘트 소모량</span>
            <span class="metric-val accent">1.8 g (5배 절감)</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">추천 시험속도</span>
            <span class="metric-val">1 ~ 5 mm/min</span>
          </div>
        </div>

        <table class="spec-dim-table">
          <tr><th>W - 평행부 폭</th><td>3.18 mm (±0.5)</td></tr>
          <tr><th>L - 평행부 길이</th><td>9.53 mm (±0.5)</td></tr>
          <tr><th>WO - 전체 폭</th><td>9.53 mm (+3.18)</td></tr>
          <tr><th>LO - 전체 길이</th><td>63.5 mm</td></tr>
          <tr><th>G - 표점거리</th><td>7.62 mm (±0.25)</td></tr>
          <tr><th>D - 그립간 거리</th><td>25.4 mm (±5.0)</td></tr>
          <tr><th>R - 필렛 반경</th><td>12.7 mm (±1.0)</td></tr>
        </table>

        <p class="spec-desc">
          <strong>★ 논문 결론 및 추천:</strong> Type I 대비 출력 시간 14분(5배 단축), 재료 1.8g(5배 절감)으로 80% 이상 원가를 줄이면서도 42.64 MPa의 정밀 인장강도를 도출하는 최고 가성비 마이크로 시편입니다.
        </p>
        <button class="spec-btn-action" onclick="selectSpecimenToCalc('TYPE-5')">
          <i class="bi bi-star-fill"></i> ★ Type V 계산기 적용
        </button>
      </div>
    </div>
  </section>

  <!-- Engineering Deep Dive 2: FDM 3D Printing & DIC Optical Analysis -->
  <section style="background:var(--white); border-top:1px solid var(--gray-200); border-bottom:1px solid var(--gray-200);">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">// Additive Manufacturing & DIC Analysis</span>
        <h2 class="section-title">FDM 3D 적층 파라미터 최적화 & DIC 광학 변형률 분석</h2>
        <p class="section-subtitle">
          인장 하중 방향 정렬 메커니즘과 비접촉 2차원 고정밀 변형률 필드 가시화 기술입니다.
        </p>
      </div>

      <div class="whitepaper-box" style="margin-bottom:2.5rem;">
        <div class="wp-header">
          <div class="wp-icon-ring" style="background:rgba(234,88,12,0.1); color:var(--accent);"><i class="bi bi-cpu-fill"></i></div>
          <div class="wp-title-wrap">
            <h3>3D 프린팅 적층 파라미터가 인장 물성에 미치는 영향 (연구 논문 분석)</h3>
            <p>Layer Height, Infill Raster Angle (0° vs 90°), Extrusion Temperature Optimization</p>
          </div>
        </div>

        <div class="wp-content">
          <p>
            FDM(Fused Deposition Modeling) 3D 프린팅으로 제작된 시편은 적층 방향(Build Orientation)과 라스터 각도(Raster Angle)에 따라 극심한 이방성(Anisotropy)을 나타냅니다. 본 연구 논문(Gomaa et al., 2025)에 따르면:
          </p>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; margin:1.5rem 0;">
            <div style="background:var(--gray-50); padding:1.5rem; border-radius:8px; border:1px solid var(--gray-200);">
              <div style="font-weight:800; color:var(--dark); margin-bottom:0.4rem;"><i class="bi bi-arrow-right-circle-fill text-accent"></i> 인장 방향 0° 라스터 정렬 (최우수)</div>
              <p style="font-size:0.88rem; color:var(--gray-700); margin:0;">
                인장 하중 방향과 필라멘트 압출 방향을 0° 평행하게 적층할 경우 <strong>최대 58.0 ~ 64.0 MPa</strong>의 높은 UTS를 달성하며 층간 박리를 원천 억제합니다.
              </p>
            </div>
            <div style="background:var(--gray-50); padding:1.5rem; border-radius:8px; border:1px solid var(--gray-200);">
              <div style="font-weight:800; color:var(--dark); margin-bottom:0.4rem;"><i class="bi bi-x-circle-fill text-gray-600"></i> 인장 수직 90° 라스터 적층 (강도 저하)</div>
              <p style="font-size:0.88rem; color:var(--gray-700); margin:0;">
                90° 수직 적층 시 층간 계면 접착력 부족으로 인해 인장강도가 <strong>52.8% 급격히 감소(약 35.16 MPa)</strong>합니다.
              </p>
            </div>
            <div style="background:var(--gray-50); padding:1.5rem; border-radius:8px; border:1px solid var(--gray-200);">
              <div style="font-weight:800; color:var(--dark); margin-bottom:0.4rem;"><i class="bi bi-thermometer-high text-primary"></i> 215℃ 노즐 & 80℃ 베드 최적화</div>
              <p style="font-size:0.88rem; color:var(--gray-700); margin:0;">
                215℃ 고온 압출과 80℃ 히팅베드, 100% Solid 인필을 적용하여 미세 공극을 제거하고 완전한 균질 밀도를 형성합니다.
              </p>
            </div>
          </div>

          <h4>DIC(Digital Image Correlation) 비접촉 광학 변형률 분석 프로토콜 (Ncorr)</h4>
          <p>
            DIC는 시험체 표면의 무작위 스펙클 패턴(Random Speckle Pattern)의 이동을 추적하여 sub-pixel 정밀도로 2차원 변형률 텐서($E_{xx}, E_{yy}$)를 가시화하는 첨단 비접촉 광학 계측 기술입니다.
          </p>
          <ul style="padding-left:1.2rem; color:var(--gray-700); font-size:0.92rem; line-height:1.75;">
            <li><strong>표면 가공:</strong> 백색 무광 스프레이 페인트 2~3회 균일 도포 후, 에어브러시를 이용해 <strong>2 ~ 4 pixel 크기의 고밀도 블랙 스펙클 패턴</strong>을 형성.</li>
            <li><strong>Ncorr 분석 파라미터:</strong> MATLAB Ncorr 툴킷에서 Subset Radius 23, Spacing 2, Newton-Raphson 서브픽셀 알고리즘을 적용하여 $R^2 > 0.95$의 높은 선형 회귀 신뢰도 확보.</li>
            <li><strong>네킹(Necking) 및 변형 거동:</strong> 인장 진행에 따라 축방향 연신($E_{yy}$ 증가)과 횡방향 수축($E_{xx}$ 감소)을 실시간으로 추적하여 소성 변형 구간을 정밀 분석.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Engineering Deep Dive 3: ASTM C1401 Structural Glazing Guide -->
  <section id="c1401-deepdive" class="container">
    <div class="section-header">
      <span class="section-tag">// Structural Silicone Glazing (SSG) Standards</span>
      <h2 class="section-title">ASTM C1401 구조 글레이징 실리콘 시편 및 공학 설계 가이드</h2>
      <p class="section-subtitle">
        초고층 커튼월 풍하중 구조 바이트 계산 및 ASTM C1135 H-Block 인장 접착 강도 시험 규격입니다.
      </p>
    </div>

    <div class="whitepaper-box">
      <div class="wp-header">
        <div class="wp-icon-ring" style="background:rgba(30,58,138,0.08); color:var(--primary);"><i class="bi bi-building"></i></div>
        <div class="wp-title-wrap">
          <h3>ASTM C1401 표준 개요 & 구조용 실리콘 핵심 설계 수식</h3>
          <p>Standard Guide for Structural Sealant Glazing (ASTM C1401 / Dow Chemical Engineering Standard)</p>
        </div>
      </div>

      <div class="wp-content">
        <p>
          ASTM C1401은 2변 및 4변 지지 구조 글레이징(SSG) 시스템에서 유리 패널에 가해지는 풍하중(Wind Load)과 자중(Deadload)을 구조용 실리콘 실란트로 알루미늄 프레임에 안전하게 전달하기 위한 미국 재료시험협회(ASTM) 표준 설계 지침입니다.
        </p>

        <h4>1. 동적 풍하중 지지를 위한 최소 구조 바이트 (Structural Bite, $B$)</h4>
        <p>
          유리 패널 단변 길이($W_{\\text{short}}$)와 설계 풍하중($P_{\\text{wind}}$)을 바탕으로, Dow Chemical 표준 허용 동적 인장응력 <strong>$140\\,\\text{kPa}$ ($20\\,\\text{psi}$, 안전율 $2.5\\sim 3.0$)</strong>를 적용하여 최소 접착 폭을 산출합니다.
        </p>
        <div class="formula-callout">
          <strong>풍하중 구조 바이트 산출 수식 (ASTM C1401 Trapezoidal Load Distribution):</strong><br>
          $B = \\frac{W_{\\text{short}} \\times P_{\\text{wind}}}{2 \\times 140\\,\\text{kPa}} \\quad [\\text{mm}]$<br>
          <em>(규정 절대 최소 바이트: $B_{\\text{min}} \\ge 6.4\\,\\text{mm}$)</em>
        </div>

        <h4>2. 지속 패널 자중 지지를 위한 수직 접착 연장 (Deadload Contact Length)</h4>
        <p>
          하부 기계적 세팅 블록이 없는 4변 구조 글레이징의 경우, 유리 자중에 의한 장기 크리프(Creep) 변형을 방지하기 위해 허용 전단응력 <strong>$7.0\\,\\text{kPa}$ ($1.0\\,\\text{psi}$)</strong>를 적용합니다.
        </p>
        <div class="formula-callout">
          <strong>자중 지지 최소 접착 연장 수식:</strong><br>
          $L_{\\text{deadload}} = \\frac{\\text{Glass Weight } (\\text{kg}) \\times 9.81\\,\\text{m/s}^2}{\\text{Bite } (\\text{m}) \\times 7,000\\,\\text{Pa}} \\quad [\\text{m}]$
        </div>

        <h4>3. 글루라인 두께 (Glueline Thickness, $G_t$) 설계 규격</h4>
        <p>
          유리와 알루미늄 프레임 간의 열팽창 차이에 따른 전단 변형을 흡수할 수 있도록 바이트 대비 $1:1 \\sim 1:3$ 비율 범위 내에서 최소 $6.4\\,\\text{mm}$ 이상, 최대 $12.7\\,\\text{mm}$ 이하로 유지해야 합니다.
        </p>

        <h4>4. ASTM C1135 H-Block 구조 접착 인장 시험체 (50 × 12 × 12 mm)</h4>
        <p>
          구조용 실리콘(Dow DOWSIL™ 983 / 995 등)의 실제 접착 성능을 공인 검증하기 위해 $50\\,\\text{mm}$ 길이, $12\\,\\text{mm}$ 폭, $12\\,\\text{mm}$ 두께의 H형 실리콘 비드를 2조의 아노다이징 알루미늄 및 유리 사이에 타설한 시험체입니다.
        </p>
        <ul style="padding-left:1.2rem; color:var(--gray-700); font-size:0.92rem; line-height:1.75;">
          <li><strong>시험 속도 (ASTM C1135):</strong> 만능재료시험기(UTM)에서 <strong>$12.5\\,\\text{mm/min}$</strong> 일정한 속도로 인장 하중 인가.</li>
          <li><strong>최소 인장 접착 강도:</strong> 통상 $\\ge 1.0 \\sim 1.5\\,\\text{MPa}$ 이상 도달 필수.</li>
          <li><strong>★ 합격 판정 기준 (100% Cohesive Failure):</strong> 기재와 실리콘 계면이 떨어지는 계면 박리(Adhesive Failure)가 $0\\%$여야 하며, <strong>실리콘 내부가 찢어지는 응집 파괴(Cohesive Failure)가 $100\\%$</strong> 발생해야만 구조심의 합격 승인을 획득합니다.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Interactive Estimator 2.0 -->
  <section id="estimator" class="container">
    <div class="estimator-card">
      <div class="section-header" style="margin-bottom:2rem; text-align:left;">
        <span class="section-tag" style="color:#F97316;">// Real-time Specimen Estimator 2.0</span>
        <h2 class="section-title" style="color:#fff;">시편 제작 소요시간 & 중량 견적 계산기</h2>
        <p class="section-subtitle" style="color:#94A3B8;">
          필요한 시편 규격과 수량을 입력하시면 예상 제작 시간, 소모 필라멘트 중량 및 권장 시험 파라미터를 즉시 산출해 드립니다.
        </p>
      </div>

      <div class="estimator-grid">
        <!-- Input Form -->
        <div>
          <div class="form-group">
            <label class="form-label"><i class="bi bi-box"></i> 시편 규격 선택</label>
            <select class="form-select" id="calcSpecType" onchange="runSpecimenCalculation()">
              <option value="TYPE-5" selected>★ ASTM D638 Type V (마이크로 - 14분/개, 추천)</option>
              <option value="TYPE-1">ASTM D638 Type I (표준 경질 플라스틱 - 1시간18분/개)</option>
              <option value="TYPE-2">ASTM D638 Type II (협소 평행부 비파단용 - 1시간09분/개)</option>
              <option value="TYPE-3">ASTM D638 Type III (후판 7~14mm 구조재 - 3시간05분/개)</option>
              <option value="TYPE-4">ASTM D638 Type IV (연질 탄성체 비교용 - 48분/개)</option>
              <option value="SIL-HBLOCK">ASTM C1401 / C1135 H-Block 구조접착 시편</option>
              <option value="SIL-D412">ASTM D412 Die C 실리콘 덤벨 시편</option>
              <option value="SIL-C719">ASTM C719 사이클릭 신축 변위 시험체</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label"><i class="bi bi-123"></i> 시편 필요 수량 (개)</label>
            <input type="number" class="form-input" id="calcSpecQty" value="5" min="1" max="100" oninput="runSpecimenCalculation()">
          </div>

          <div class="form-group">
            <label class="form-label"><i class="bi bi-palette"></i> 시편 소재 및 후가공</label>
            <select class="form-select" id="calcMaterial">
              <option value="PLA">eSUN PLA+ (고강도 엔지니어링 필라멘트, 100% Infill)</option>
              <option value="ABS">ABS / ASA (내열·내충격 고분자)</option>
              <option value="PA12">PA12 탄소섬유 복합재 (Carbon Fiber)</option>
              <option value="SILICONE">구조용 실리콘 몰딩 (Dow DOWSIL™ 983 / 791)</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label"><i class="bi bi-camera"></i> 표면 처리 옵션</label>
            <select class="form-select" id="calcSurface">
              <option value="STANDARD">표준 정밀 적층 마감 (기본)</option>
              <option value="DIC">DIC 전용 무광 백색 코팅 + 2~4px 스펙클 패턴 (+추천)</option>
            </select>
          </div>
        </div>

        <!-- Result Box -->
        <div class="calc-result-box">
          <div style="font-weight:800; font-size:1.15rem; color:#fff; margin-bottom:1.2rem; display:flex; align-items:center; gap:0.5rem;">
            <i class="bi bi-speedometer2 text-accent"></i> 실시간 산출 결과
          </div>

          <div class="res-row">
            <span class="res-label">총 예상 제작 소요시간</span>
            <span class="res-val" id="resPrintTime">1시간 15분</span>
          </div>
          <div class="res-row">
            <span class="res-label">총 필라멘트 소모 중량</span>
            <span class="res-val" id="resFilament">9.0 g (3.0 m)</span>
          </div>
          <div class="res-row">
            <span class="res-label">예상 인장강도 (UTS)</span>
            <span class="res-val" id="resUts">42.64 MPa</span>
          </div>
          <div class="res-row">
            <span class="res-label">Instron UTM 권장 시험속도</span>
            <span class="res-val" id="resSpeed">1 ~ 5 mm/min</span>
          </div>
          <div class="res-row">
            <span class="res-label">권장 신율계(Extensometer)</span>
            <span class="res-val" id="resExtensometer" style="font-size:0.95rem; color:#93C5FD;">DIC / 7.62mm 게이지</span>
          </div>

          <button class="btn-hero-primary" style="width:100%; margin-top:1.5rem; justify-content:center;" onclick="applyEstimateToOrder()">
            <i class="bi bi-file-earmark-check-fill"></i> 이 견적으로 시편 제작 의뢰서 작성
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Order Form -->
  <section id="order-form" class="container" style="padding-top:0;">
    <div class="order-section">
      <div class="section-header" style="margin-bottom:2.5rem;">
        <span class="section-tag">// Specimen Order & Consultation</span>
        <h2 class="section-title">온라인 시편 제작 및 시험 의뢰</h2>
        <p class="section-subtitle">
          공인 시험성적서 제출용, 신소재 R&D 인장강도 평가 및 커튼월 구조 심의용 시편 제작을 신속히 지원합니다.
        </p>
      </div>

      <form onsubmit="handleSpecimenOrderSubmit(event)">
        <div class="form-row">
          <div>
            <label class="form-label" style="color:var(--dark);">회사명 / 기관명 *</label>
            <input type="text" class="input-field" id="orderCompany" placeholder="예: (주)한국건설엔지니어링 / 연구소" required>
          </div>
          <div>
            <label class="form-label" style="color:var(--dark);">담당자 성함 / 직책 *</label>
            <input type="text" class="input-field" id="orderName" placeholder="예: 홍길동 책임연구원" required>
          </div>
        </div>

        <div class="form-row">
          <div>
            <label class="form-label" style="color:var(--dark);">회신용 이메일 *</label>
            <input type="email" class="input-field" id="orderEmail" placeholder="example@company.com" required>
          </div>
          <div>
            <label class="form-label" style="color:var(--dark);">연락처 (사내 직통번호 등) *</label>
            <input type="text" class="input-field" id="orderPhone" placeholder="02-1234-5678" required>
          </div>
        </div>

        <div class="form-row">
          <div>
            <label class="form-label" style="color:var(--dark);">시편 규격 선택 *</label>
            <select class="input-field" id="orderSpecType" required>
              <option value="ASTM D638 Type V (마이크로 - 추천)">ASTM D638 Type V (마이크로 - 초고속/추천)</option>
              <option value="ASTM D638 Type I (표준 경질)">ASTM D638 Type I (표준 경질 덤벨)</option>
              <option value="ASTM D638 Type II (협소 평행부)">ASTM D638 Type II (협소 평행부)</option>
              <option value="ASTM D638 Type III (후판 7~14mm)">ASTM D638 Type III (후판 7~14mm)</option>
              <option value="ASTM D638 Type IV (연질 비교용)">ASTM D638 Type IV (연질 비교용)</option>
              <option value="ASTM C1401 / C1135 H-Block 구조접착 시편">ASTM C1401 / C1135 H-Block 구조접착 시편</option>
              <option value="ASTM D412 Die C 실리콘 덤벨">ASTM D412 Die C 실리콘 덤벨</option>
              <option value="ASTM C719 사이클릭 신축 변위 시험체">ASTM C719 사이클릭 신축 변위 시험체</option>
              <option value="커스텀 CAD 도면 (.STL / .STEP) 제작">커스텀 CAD 도면 (.STL / .STEP) 제작</option>
            </select>
          </div>
          <div>
            <label class="form-label" style="color:var(--dark);">필요 수량 *</label>
            <input type="number" class="input-field" id="orderQty" value="5" min="1" required>
          </div>
        </div>

        <div class="form-row">
          <div>
            <label class="form-label" style="color:var(--dark);">의뢰 목적 *</label>
            <select class="input-field" id="orderPurpose">
              <option value="공인시험성적서 (KTR/KCL) 제출용">공인시험성적서 (KTR/KCL) 제출용</option>
              <option value="신소재 R&D 인장 물성치 평가">신소재 R&D 인장 물성치 평가</option>
              <option value="커튼월 구조 글레이징(SSG) 심의용">커튼월 구조 글레이징(SSG) 심의용</option>
              <option value="현장 품질관리 및 납품 검수">현장 품질관리 및 납품 검수</option>
              <option value="기타 시험 및 연구">기타 시험 및 연구</option>
            </select>
          </div>
          <div>
            <label class="form-label" style="color:var(--dark);">희망 납기일</label>
            <input type="date" class="input-field" id="orderDueDate">
          </div>
        </div>

        <div style="margin-bottom:1.5rem;">
          <label class="form-label" style="color:var(--dark);">상세 요청사항 / 특수 가공 조건 (DIC 코팅, 재질 등)</label>
          <textarea class="input-field" id="orderNotes" rows="3" placeholder="예: DIC 광학 분석용 2~4px 스펙클 패턴 표면 가공 요청, eSUN PLA+ 레드 색상, 시험성적서 첨부 요망 등"></textarea>
        </div>

        <button type="submit" class="btn-submit-order">
          <i class="bi bi-send-fill"></i> 시편 제작 의뢰서 접수하기 (24시간 내 기술상담 회신)
        </button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h5 style="color:var(--white); font-size:1.2rem; font-weight:900;">KCT 한국건설트레이딩</h5>
          <p style="color:var(--gray-400); line-height:1.7; margin-bottom:1.2rem;">
            Dow Chemical 실란트 전문 공급 및 ASTM D638 / C1401 공학 시편 정밀 제작, 6대 실리콘 공학 계산기 허브를 지원하는 B2B 엔지니어링 플랫폼입니다.
          </p>
          <div style="font-size:0.82rem; color:var(--gray-500);">
            <div><strong>사업자등록번호:</strong> 371-07-03719</div>
            <div><strong>기술상담:</strong> sales@kconstrade.com</div>
          </div>
        </div>

        <div class="footer-col">
          <h5>시편 제작 허브</h5>
          <ul class="footer-links-list">
            <li><a href="/projects/kct/specimens">ASTM D638 Type I~V 시편</a></li>
            <li><a href="/projects/kct/specimens#d638-deepdive">ASTM D638 공학 가이드</a></li>
            <li><a href="/projects/kct/specimens#c1401-deepdive">ASTM C1401 구조 설계</a></li>
            <li><a href="/projects/kct/specimens#estimator">소요시간 & 중량 계산기</a></li>
            <li><a href="/projects/kct/specimens#order-form">온라인 시편 제작 의뢰</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>KCT 플랫폼 센터</h5>
          <ul class="footer-links-list">
            <li><a href="/projects/kct">KCT 메인 포털</a></li>
            <li><a href="/projects/kct/specimens">시편제작 센터</a></li>
            <li><a href="/projects/kct/color-samples">색상칩 시편 & 무료샘플</a></li>
            <li><a href="/projects/kct/technical">TDS/MSDS 기술자료 센터</a></li>
            <li><a href="/projects/kct#calculator">실리콘 6대 계산기</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>글로벌 엣지 인프라</h5>
          <p style="font-size:0.82rem; color:var(--gray-400); line-height:1.7;">
            Cloudflare Workers 글로벌 엣지 SSR과 ASTM 국제공학표준 연산 엔진으로 초저지연 기술 서비스를 제공합니다.
          </p>
          <div style="margin-top:1rem;">
            <a href="https://smartstore.naver.com/kconstrade/" target="_blank" rel="noopener" style="background:rgba(255,255,255,0.1); padding:0.4rem 0.8rem; border-radius:4px; font-size:0.8rem; color:#fff;">
              <i class="bi bi-bag-check"></i> 스마트스토어 바로가기 ↗
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 한국건설트레이딩 (KCT) · All rights reserved.</p>
        <p style="margin-top:0.4rem; font-family:var(--mono);">홈페이지 제작 및 유지보수: <a href="https://davhave.com" target="_blank" style="color:var(--accent); text-decoration:underline;">davhave.com</a></p>
      </div>
    </div>
  </footer>

  <!-- JS Logic -->
  <script>
    const SPEC_DATA = {
      'TYPE-1': { name: 'ASTM D638 Type I', timePerUnitMin: 78.5, weightPerUnitG: 9.8, uts: '43.18 MPa', speed: '5 mm/min', ext: '25~50 mm 접촉식/DIC' },
      'TYPE-2': { name: 'ASTM D638 Type II', timePerUnitMin: 69.75, weightPerUnitG: 8.3, uts: '43.16 MPa', speed: '5 mm/min', ext: '50 mm 게이지' },
      'TYPE-3': { name: 'ASTM D638 Type III', timePerUnitMin: 185.45, weightPerUnitG: 23.0, uts: '43.02 MPa', speed: '5 mm/min', ext: '50 mm 대형 게이지' },
      'TYPE-4': { name: 'ASTM D638 Type IV', timePerUnitMin: 48.6, weightPerUnitG: 5.7, uts: '40.30 MPa', speed: '50 mm/min (연질) / 5 mm/min', ext: '25 mm 비접촉/비디오' },
      'TYPE-5': { name: 'ASTM D638 Type V', timePerUnitMin: 15.0, weightPerUnitG: 1.8, uts: '42.64 MPa (Type I 근접)', speed: '1 ~ 5 mm/min', ext: 'DIC / 7.62 mm 마이크로' },
      'SIL-HBLOCK': { name: 'ASTM C1401 H-Block', timePerUnitMin: 45.0, weightPerUnitG: 35.0, uts: '≥ 1.0~1.5 MPa (100% 응집파괴)', speed: '12.5 mm/min', ext: 'LVDT 변위 센서' },
      'SIL-D412': { name: 'ASTM D412 Die C', timePerUnitMin: 20.0, weightPerUnitG: 12.0, uts: '2.5~3.5 MPa (연신율 600%)', speed: '500 mm/min', ext: '고신율 비디오 게이지' },
      'SIL-C719': { name: 'ASTM C719 사이클 시편', timePerUnitMin: 50.0, weightPerUnitG: 40.0, uts: '±50% 반복 변위 내구', speed: '3.2 mm/h', ext: '온도챔버 센서' }
    };

    function runSpecimenCalculation() {
      const type = document.getElementById('calcSpecType').value;
      const qty = parseInt(document.getElementById('calcSpecQty').value) || 1;
      const data = SPEC_DATA[type] || SPEC_DATA['TYPE-5'];

      const totalMin = Math.round(data.timePerUnitMin * qty);
      const totalHours = Math.floor(totalMin / 60);
      const remainMin = totalMin % 60;
      const timeStr = totalHours > 0 ? \`\${totalHours}시간 \${remainMin}분\` : \`\${remainMin}분\`;

      const totalWeight = (data.weightPerUnitG * qty).toFixed(1);
      const totalMeters = (totalWeight / 3.0).toFixed(1);

      document.getElementById('resPrintTime').innerText = timeStr;
      document.getElementById('resFilament').innerText = \`\${totalWeight} g (\${totalMeters} m)\`;
      document.getElementById('resUts').innerText = data.uts;
      document.getElementById('resSpeed').innerText = data.speed;
      document.getElementById('resExtensometer').innerText = data.ext;
    }

    function selectSpecimenToCalc(typeId) {
      document.getElementById('calcSpecType').value = typeId;
      runSpecimenCalculation();
      document.getElementById('estimator').scrollIntoView({ behavior: 'smooth' });
    }

    function applyEstimateToOrder() {
      const type = document.getElementById('calcSpecType').value;
      const qty = document.getElementById('calcSpecQty').value;
      const mat = document.getElementById('calcMaterial').value;
      const surf = document.getElementById('calcSurface').value;

      const specSelect = document.getElementById('orderSpecType');
      if (type === 'TYPE-1') specSelect.value = 'ASTM D638 Type I (표준 경질)';
      else if (type === 'TYPE-2') specSelect.value = 'ASTM D638 Type II (협소 평행부)';
      else if (type === 'TYPE-3') specSelect.value = 'ASTM D638 Type III (후판 7~14mm)';
      else if (type === 'TYPE-4') specSelect.value = 'ASTM D638 Type IV (연질 비교용)';
      else if (type === 'TYPE-5') specSelect.value = 'ASTM D638 Type V (마이크로 - 추천)';
      else if (type === 'SIL-HBLOCK') specSelect.value = 'ASTM C1401 / C1135 H-Block 구조접착 시편';
      else if (type === 'SIL-D412') specSelect.value = 'ASTM D412 Die C 실리콘 덤벨';
      else if (type === 'SIL-C719') specSelect.value = 'ASTM C719 사이클릭 신축 변위 시험체';

      document.getElementById('orderQty').value = qty;
      document.getElementById('orderNotes').value = \`[계산기 자동연동]\\n- 소재: \${mat}\\n- 표면가공: \${surf}\\n- 산출 소요시간: \${document.getElementById('resPrintTime').innerText}\\n- 예상 중량: \${document.getElementById('resFilament').innerText}\`;

      document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
    }

    function handleSpecimenOrderSubmit(e) {
      e.preventDefault();
      const company = document.getElementById('orderCompany').value;
      const name = document.getElementById('orderName').value;
      const email = document.getElementById('orderEmail').value;
      const spec = document.getElementById('orderSpecType').value;
      const qty = document.getElementById('orderQty').value;

      alert(\`[시편 제작 의뢰 접수 완료]\\n\\n의뢰 기관: \${company}\\n담당자: \${name} 님\\n회신 이메일: \${email}\\n신청 규격: \${spec} (\${qty}개)\\n\\n24시간 이내 담당 엔지니어가 CAD 도면 검토 및 견적서를 이메일로 회신드립니다.\`);
    }

    // Initialize calculation on load
    runSpecimenCalculation();
  </script>
</body>
</html>
`;
}
