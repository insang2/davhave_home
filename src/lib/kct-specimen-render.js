// KCT Specimen Fabrication Center Renderer
export function renderKctSpecimenPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>공학 시편제작 센터 | ASTM D638 고분자 인장 시편 & ASTM C1401 구조 실리콘 시험체 종합 기술 백서 - KCT 한국건설트레이딩</title>
  <meta name="description" content="ASTM D638 주요 측정값, Type I~V 시편 유형, 계산 및 결과 설명, 12대 FAQ, ASTM C1401/C1135 구조용 실리콘 H-Block 접착 시험체 및 DIC(Digital Image Correlation) 광학 변형률 분석 종합 기술 가이드.">
  <meta name="keywords" content="ASTM D638, ASTM D638 주요 측정값, ASTM D638 시편 유형, ASTM C1401, ASTM C1135, ASTM D412, ASTM D882, ASTM D3039, 인장 시편 제작, 3D프린팅 시편, PLA시편, DIC 변형률분석, 인스트론, 만능재료시험기, 구조용 실리콘 H-Block, KCT">
  
  <link rel="canonical" href="https://davhave.com/projects/kct/specimens">
  <meta property="og:type" content="website">
  <meta property="og:title" content="공학 시편제작 센터 | ASTM D638 & ASTM C1401 - KCT 한국건설트레이딩">
  <meta property="og:description" content="ASTM D638 Type I~V 플라스틱 인장 시편 및 실리콘 구조 접착 시험체 3D 프린팅 정밀 제작 및 UTM 시험 지원.">
  <meta property="og:url" content="https://davhave.com/projects/kct/specimens">
  
  <!-- KaTeX Math Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

  <!-- CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <style>

    :root {
      --primary: #0F2D6B;       /* 클래식 공학 네이비 */
      --primary-dark: #000000;
      --primary-light: #1D4ED8;
      --accent: #B43403;        /* 딥 테라코타 오렌지 */
      --accent-hover: #9A2C02;
      --text-black: #000000;     /* 100% 잉크 블랙 */
      --text-main: #0F172A;      /* 최고 가독성 다크 차콜 */
      --text-sub: #1E293B;       /* 선명한 서브 텍스트 */
      --border-dark: #0F172A;    /* 선명한 2px 테두리 */
      --border-med: #94A3B8;
      --border-light: #CBD5E1;
      --bg-white: #FFFFFF;
      --bg-gray: #F8FAFC;
      --bg-box: #F1F5F9;
      --font: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
      --mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font); color: var(--text-black); background: var(--bg-white); line-height: 1.8; -webkit-font-smoothing: antialiased; }
    a { color: inherit; text-decoration: none; }
    .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }

    /* Top Bar - Mobile Clean */
    .top-bar { background: #0F172A; color: #FFFFFF; font-size: 0.82rem; font-weight: 600; padding: 0.55rem 0; border-bottom: 2px solid #000000; }
    .top-bar-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.6rem; }
    .top-bar-info { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
    .top-bar-info span { display: inline-flex; align-items: center; gap: 0.35rem; }
    .top-bar-links { display: flex; gap: 0.9rem; align-items: center; flex-wrap: wrap; }
    .top-bar-links a { color: #E2E8F0; text-decoration: underline; text-underline-offset: 2px; }
    .top-bar-links a:hover { color: #FFFFFF; }

    /* GNB Header - High Contrast & Mobile Compact */
    header { background: #FFFFFF; position: sticky; top: 0; z-index: 1000; border-bottom: 2px solid #0F172A; }
    .nav-inner { display: flex; justify-content: space-between; align-items: center; height: 64px; }
    .brand-logo { display: flex; align-items: center; gap: 0.6rem; font-weight: 900; font-size: 1.35rem; color: #0F2D6B; letter-spacing: -0.02em; }
    .brand-badge { background: #0F2D6B; color: #FFFFFF; font-size: 0.68rem; font-weight: 800; padding: 0.2rem 0.55rem; border-radius: 3px; font-family: var(--mono); }
    .nav-menu { display: flex; gap: 0.25rem; align-items: center; }
    .nav-link { padding: 0.5rem 0.8rem; font-weight: 700; font-size: 0.9rem; color: #000000; border-radius: 4px; transition: all 0.15s; display: inline-flex; align-items: center; gap: 0.3rem; }
    .nav-link:hover { color: #0F2D6B; background: #EEF2FF; }
    .nav-link.active { color: #0F2D6B; background: #DBEAFE; font-weight: 900; border: 1px solid #93C5FD; }
    .nav-link.highlight { color: #B43403; background: #FFEDD5; border: 1px solid #FDBA74; }

    .nav-actions { display: flex; align-items: center; gap: 0.6rem; }
    .btn-quote { background: #0F2D6B; color: #FFFFFF; font-weight: 800; font-size: 0.88rem; padding: 0.55rem 1.1rem; border-radius: 6px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.4rem; border: 1.5px solid #000000; }
    .btn-quote:hover { background: #000000; color: #FFFFFF; }

    /* Quick Jump Subnav - Mobile Horizontal Scroll Chip Bar */
    .subnav-bar { background: #F8FAFC; border-bottom: 2px solid #CBD5E1; position: sticky; top: 64px; z-index: 990; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
    .subnav-bar::-webkit-scrollbar { display: none; }
    .subnav-inner { display: flex; gap: 0.5rem; padding: 0.6rem 0; min-width: max-content; }
    .subnav-btn { font-size: 0.82rem; font-weight: 800; color: #000000; padding: 0.4rem 0.85rem; border-radius: 4px; background: #FFFFFF; border: 1.5px solid #94A3B8; transition: all 0.15s; display: inline-flex; align-items: center; gap: 0.35rem; }
    .subnav-btn:hover { background: #0F2D6B; color: #FFFFFF; border-color: #0F2D6B; }

    /* Hero Section - Clean Engineering Lab Paper Style */
    .spec-hero {
      background: #FFFFFF;
      color: #000000;
      padding: 3.5rem 0 3.8rem;
      border-bottom: 3px solid #0F172A;
      position: relative;
    }
    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: #EEF2FF;
      border: 1.5px solid #6366F1;
      padding: 0.35rem 0.85rem;
      border-radius: 4px;
      font-size: 0.82rem;
      font-weight: 800;
      color: #3730A3;
      margin-bottom: 1rem;
      font-family: var(--mono);
    }
    .hero-title { font-size: 2.35rem; font-weight: 900; line-height: 1.3; letter-spacing: -0.03em; margin-bottom: 1.2rem; color: #000000; }
    .hero-title span { color: #B43403; }
    .hero-desc { font-size: 1.1rem; color: #1E293B; max-width: 900px; line-height: 1.8; margin-bottom: 1.8rem; font-weight: 600; }
    
    .hero-badges { display: flex; flex-wrap: wrap; gap: 0.55rem; margin-bottom: 2rem; }
    .hero-badge {
      background: #F8FAFC;
      border: 1.5px solid #0F172A;
      padding: 0.45rem 0.85rem;
      border-radius: 4px;
      font-size: 0.84rem;
      font-weight: 800;
      color: #000000;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
    }
    .hero-badge i { color: #B43403; font-size: 0.95rem; }

    .hero-quick-cta { display: flex; gap: 0.8rem; flex-wrap: wrap; }
    .btn-hero-primary { background: #0F2D6B; color: #FFFFFF; font-weight: 900; padding: 0.85rem 1.6rem; border-radius: 6px; font-size: 0.95rem; border: 2px solid #000000; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.2s; }
    .btn-hero-primary:hover { background: #000000; color: #FFFFFF; }
    .btn-hero-secondary { background: #FFFFFF; border: 2px solid #0F172A; color: #000000; font-weight: 800; padding: 0.85rem 1.4rem; border-radius: 6px; font-size: 0.92rem; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.2s; }
    .btn-hero-secondary:hover { background: #F1F5F9; color: #000000; }

    /* Section Styles */
    section { padding: 4rem 0; }
    .section-header { text-align: left; max-width: 1000px; margin: 0 0 2.5rem; border-bottom: 2px solid #0F172A; padding-bottom: 1.2rem; }
    .section-tag { font-family: var(--mono); font-size: 0.82rem; font-weight: 900; color: #B43403; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.4rem; display: block; }
    .section-title { font-size: 1.95rem; font-weight: 900; color: #000000; letter-spacing: -0.02em; margin-bottom: 0.6rem; }
    .section-subtitle { font-size: 1.02rem; color: #1E293B; line-height: 1.7; font-weight: 600; }

    /* Whitepaper Technical Box - Research Paper Style */
    .whitepaper-box {
      background: #FFFFFF;
      border: 2px solid #0F172A;
      border-radius: 6px;
      padding: 2.2rem;
      box-shadow: 4px 4px 0px #0F172A;
      margin-bottom: 2.8rem;
    }
    .wp-header { display: flex; align-items: center; gap: 1rem; border-bottom: 2px solid #E2E8F0; padding-bottom: 1.2rem; margin-bottom: 1.6rem; }
    .wp-icon-ring { width: 48px; height: 48px; border-radius: 6px; background: #0F2D6B; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex: none; }
    .wp-title-wrap h3 { font-size: 1.35rem; font-weight: 900; color: #000000; margin-bottom: 0.25rem; }
    .wp-title-wrap p { font-size: 0.88rem; color: #334155; font-weight: 700; }

    .wp-content h4 { font-size: 1.15rem; font-weight: 900; color: #0F2D6B; margin: 1.8rem 0 0.75rem; display: flex; align-items: center; gap: 0.5rem; border-left: 4px solid #0F2D6B; padding-left: 0.6rem; }
    .wp-content p { font-size: 0.98rem; color: #000000; line-height: 1.85; margin-bottom: 1rem; font-weight: 500; }
    .wp-content strong { color: #000000; font-weight: 900; }

    /* Property Cards Grid (Key Measurements) */
    .prop-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin: 1.8rem 0; }
    .prop-card {
      background: #FFFFFF;
      border: 2px solid #0F172A;
      border-radius: 6px;
      padding: 1.6rem;
      box-shadow: 3px 3px 0px #0F172A;
      display: flex;
      flex-direction: column;
    }
    .prop-badge { font-family: var(--mono); font-size: 0.74rem; font-weight: 900; padding: 0.25rem 0.6rem; border-radius: 3px; background: #0F2D6B; color: #FFFFFF; display: inline-block; margin-bottom: 0.75rem; width: fit-content; }
    .prop-title { font-size: 1.15rem; font-weight: 900; color: #000000; margin-bottom: 0.5rem; }
    .prop-desc { font-size: 0.94rem; color: #1E293B; line-height: 1.75; margin-bottom: 1rem; flex: 1; font-weight: 600; }

    /* Formula Box - Research Math Box (Ultra Sharp) */
    .formula-box {
      background: #F8FAFC;
      border: 2px solid #0F172A;
      border-left: 6px solid #B43403;
      border-radius: 4px;
      padding: 1.2rem 1.4rem;
      margin: 1rem 0;
      color: #000000;
    }
    .formula-title {
      font-size: 0.82rem;
      font-weight: 900;
      color: #B43403;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.6rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .formula-main {
      font-family: var(--mono);
      font-size: 1.15rem;
      font-weight: 900;
      color: #000000;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding: 0.3rem 0 0.6rem;
    }
    .math-sym { font-size: 1.25rem; font-weight: 900; color: #0F2D6B; }
    .math-frac {
      display: inline-flex;
      flex-direction: column;
      vertical-align: middle;
      text-align: center;
      padding: 0 0.35rem;
      font-size: 0.95rem;
    }
    .math-num { border-bottom: 2px solid #000000; padding-bottom: 2px; font-weight: 900; color: #000000; }
    .math-den { padding-top: 2px; font-weight: 900; color: #000000; }
    .math-unit { font-size: 0.85rem; color: #475569; font-weight: 700; margin-left: 0.4rem; }
    .formula-desc { font-size: 0.86rem; color: #334155; border-top: 1.5px solid #CBD5E1; padding-top: 0.5rem; margin-top: 0.3rem; font-weight: 600; }
    .formula-desc strong { color: #000000; font-weight: 900; }

    .alert-box-info {
      background: #EFF6FF;
      border: 2px solid #3B82F6;
      border-radius: 6px;
      padding: 1.2rem 1.5rem;
      color: #000000;
      font-size: 0.95rem;
      line-height: 1.75;
      margin: 1.5rem 0;
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
      font-weight: 600;
    }
    .alert-box-info strong { color: #0F2D6B; font-weight: 900; }

    /* Specimen Card Grid */
    .spec-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.8rem; }
    .spec-card {
      background: #FFFFFF;
      border: 2px solid #0F172A;
      border-radius: 6px;
      padding: 1.8rem;
      box-shadow: 4px 4px 0px #0F172A;
      transition: transform 0.15s ease;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .spec-card:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0px #0F172A; }
    .spec-card.highlight {
      border: 2.5px solid #B43403;
      background: #FFFDFB;
      box-shadow: 4px 4px 0px #B43403;
    }
    .spec-badge-top {
      position: absolute;
      top: -12px;
      right: 16px;
      background: #B43403;
      color: #FFFFFF;
      font-family: var(--mono);
      font-size: 0.75rem;
      font-weight: 900;
      padding: 0.3rem 0.8rem;
      border-radius: 3px;
      border: 1px solid #000000;
    }
    .spec-card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.9rem; }
    .spec-type-tag { font-family: var(--mono); font-size: 0.82rem; font-weight: 900; color: #FFFFFF; background: #0F2D6B; padding: 0.3rem 0.65rem; border-radius: 3px; }
    .spec-title { font-size: 1.3rem; font-weight: 900; color: #000000; margin-bottom: 0.3rem; }
    .spec-subtitle { font-size: 0.88rem; color: #334155; margin-bottom: 1.1rem; font-weight: 700; }
    
    .spec-metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.6rem;
      background: #F8FAFC;
      border: 1.5px solid #0F172A;
      border-radius: 4px;
      padding: 0.9rem;
      margin-bottom: 1.1rem;
    }
    .metric-item { display: flex; flex-direction: column; }
    .metric-label { font-size: 0.74rem; color: #475569; font-weight: 800; margin-bottom: 0.15rem; }
    .metric-val { font-family: var(--mono); font-size: 1.02rem; font-weight: 900; color: #000000; }
    .metric-val.accent { color: #B43403; }

    .spec-dim-table { width: 100%; border-collapse: collapse; font-size: 0.86rem; margin-bottom: 1.2rem; }
    .spec-dim-table th, .spec-dim-table td { padding: 0.5rem 0.55rem; border-bottom: 1px solid #CBD5E1; }
    .spec-dim-table th { color: #1E293B; font-weight: 800; text-align: left; }
    .spec-dim-table td { font-family: var(--mono); font-weight: 900; text-align: right; color: #000000; }

    .spec-desc { font-size: 0.92rem; color: #000000; line-height: 1.7; margin-bottom: 1.4rem; flex: 1; font-weight: 500; }
    .spec-desc strong { font-weight: 900; }
    .spec-btn-action {
      margin-top: auto;
      background: #FFFFFF;
      color: #0F2D6B;
      border: 2px solid #0F2D6B;
      font-weight: 900;
      font-size: 0.88rem;
      padding: 0.75rem 1rem;
      border-radius: 4px;
      text-align: center;
      transition: all 0.15s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
    }
    .spec-btn-action:hover { background: #0F2D6B; color: #FFFFFF; }
    .spec-card.highlight .spec-btn-action { background: #B43403; color: #FFFFFF; border-color: #B43403; }
    .spec-card.highlight .spec-btn-action:hover { background: #000000; border-color: #000000; }

    /* Comparison Table - Standard IEEE/Nature 3-Line Table */
    .table-container { background: #FFFFFF; border: 2px solid #0F172A; border-radius: 6px; overflow-x: auto; margin: 1.5rem 0; }
    .full-comp-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; min-width: 900px; }
    .full-comp-table thead tr { border-top: 3px solid #000000; border-bottom: 2px solid #000000; }
    .full-comp-table th { background: #F8FAFC; color: #000000; padding: 1rem 1.1rem; font-weight: 900; font-family: var(--mono); font-size: 0.84rem; }
    .full-comp-table td { padding: 1rem 1.1rem; border-bottom: 1px solid #CBD5E1; color: #000000; font-weight: 600; }
    .full-comp-table tbody tr:last-child td { border-bottom: 3px solid #000000; }
    .full-comp-table tr.highlight td { background: #FFF7ED; font-weight: 900; }
    .badge-opt { background: #DCFCE7; color: #14532D; font-size: 0.74rem; font-weight: 900; padding: 0.2rem 0.55rem; border-radius: 3px; border: 1px solid #86EFAC; font-family: var(--mono); }

    /* FAQ Box - 100% Crisp Black & Easy Click */
    .faq-container-box {
      background: #FFFFFF;
      border: 2px solid #0F172A;
      border-radius: 6px;
      padding: 2.5rem 2rem;
      box-shadow: 4px 4px 0px #0F172A;
      margin: 2rem 0;
    }
    .faq-controls-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-bottom: 1.8rem;
      padding-bottom: 1.4rem;
      border-bottom: 2px solid #E2E8F0;
    }
    .faq-search-wrap {
      flex: 1;
      min-width: 260px;
      position: relative;
    }
    .faq-search-input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.6rem;
      border: 2px solid #0F172A;
      border-radius: 4px;
      font-size: 0.94rem;
      font-weight: 700;
      color: #000000;
      outline: none;
      background: #FFFFFF;
    }
    .faq-search-input:focus { border-color: #0F2D6B; box-shadow: 0 0 0 3px rgba(15,45,107,0.15); }
    .faq-search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #0F172A; font-size: 1rem; }
    
    .faq-btn-toggle-all {
      background: #F8FAFC;
      border: 2px solid #0F172A;
      color: #000000;
      font-size: 0.86rem;
      font-weight: 900;
      padding: 0.7rem 1.1rem;
      border-radius: 4px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      transition: all 0.15s;
    }
    .faq-btn-toggle-all:hover { background: #0F2D6B; color: #FFFFFF; }

    .faq-accordion-group { display: flex; flex-direction: column; gap: 1rem; }
    .faq-item {
      background: #FFFFFF;
      border: 2px solid #0F172A;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.15s ease;
    }
    .faq-item:hover { border-color: #0F2D6B; box-shadow: 2px 2px 0px #0F2D6B; }
    .faq-item[open] { border-color: #0F2D6B; border-width: 2.5px; box-shadow: 3px 3px 0px #0F2D6B; }
    .faq-item summary {
      padding: 1.2rem 1.4rem;
      font-size: 1.05rem;
      font-weight: 900;
      color: #000000;
      cursor: pointer;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      background: #F8FAFC;
      border-bottom: 1px solid transparent;
    }
    .faq-item summary::-webkit-details-marker { display: none; }
    .faq-item summary:hover { background: #EEF2FF; }
    .faq-item[open] summary { background: #DBEAFE; color: #0F2D6B; border-bottom: 2px solid #93C5FD; }
    .faq-q-text { display: flex; align-items: center; gap: 0.75rem; flex: 1; padding-right: 0.8rem; }
    .faq-expand-badge {
      font-family: var(--mono);
      font-size: 0.78rem;
      font-weight: 900;
      padding: 0.3rem 0.7rem;
      border-radius: 3px;
      background: #FFFFFF;
      color: #000000;
      border: 1.5px solid #0F172A;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      flex: none;
    }
    .faq-item[open] .faq-expand-badge {
      background: #0F2D6B;
      color: #FFFFFF;
      border-color: #0F2D6B;
    }
    .faq-answer {
      padding: 1.6rem 1.8rem;
      font-size: 0.98rem;
      color: #000000;
      line-height: 1.85;
      background: #FFFFFF;
      font-weight: 500;
    }
    .faq-answer strong { color: #000000; font-weight: 900; }
    .faq-answer p { margin-bottom: 0.9rem; }
    .faq-answer p:last-child { margin-bottom: 0; }
    .faq-answer ul { padding-left: 1.4rem; margin: 0.7rem 0; }
    .faq-answer li { margin-bottom: 0.45rem; }
    .faq-tag { font-family: var(--mono); font-size: 0.72rem; font-weight: 900; padding: 0.2rem 0.55rem; border-radius: 3px; background: #0F2D6B; color: #FFFFFF; }

    /* Estimator Card - Clean High Contrast Box */
    .estimator-card {
      background: #FFFFFF;
      color: #000000;
      border: 2px solid #0F172A;
      border-radius: 6px;
      padding: 2.5rem 2rem;
      box-shadow: 4px 4px 0px #0F172A;
      margin: 2rem 0;
    }
    .estimator-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 2.5rem; align-items: start; }
    @media (max-width: 900px) { .estimator-grid { grid-template-columns: 1fr; } }
    
    .form-group { margin-bottom: 1.2rem; }
    .form-label { display: block; font-size: 0.9rem; font-weight: 900; color: #000000; margin-bottom: 0.45rem; }
    .form-select, .form-input {
      width: 100%;
      background: #FFFFFF;
      border: 2px solid #0F172A;
      color: #000000;
      padding: 0.8rem 1rem;
      border-radius: 4px;
      font-size: 0.94rem;
      font-family: var(--font);
      font-weight: 700;
      outline: none;
    }
    .form-select:focus, .form-input:focus { border-color: #0F2D6B; box-shadow: 0 0 0 3px rgba(15,45,107,0.15); }

    .calc-result-box {
      background: #F8FAFC;
      border: 2px solid #0F172A;
      border-radius: 6px;
      padding: 1.8rem;
    }
    .res-row { display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 0; border-bottom: 1.5px solid #CBD5E1; }
    .res-row:last-child { border-bottom: none; }
    .res-label { font-size: 0.92rem; color: #1E293B; font-weight: 800; }
    .res-val { font-family: var(--mono); font-size: 1.15rem; font-weight: 900; color: #B43403; }

    /* Order Form */
    .order-section { background: #FFFFFF; border: 2px solid #0F172A; border-radius: 6px; padding: 2.5rem 2rem; margin-top: 2.5rem; box-shadow: 4px 4px 0px #0F172A; }
    .form-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.2rem; margin-bottom: 1.2rem; }
    .input-field { width: 100%; border: 2px solid #0F172A; border-radius: 4px; padding: 0.85rem 1rem; font-size: 0.95rem; font-family: var(--font); font-weight: 700; color: #000000; outline: none; background: #FFFFFF; }
    .input-field:focus { border-color: #0F2D6B; box-shadow: 0 0 0 3px rgba(15,45,107,0.15); }
    .btn-submit-order { width: 100%; background: #0F2D6B; color: #FFFFFF; border: 2px solid #000000; padding: 1.1rem; border-radius: 6px; font-weight: 900; font-size: 1.05rem; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
    .btn-submit-order:hover { background: #000000; }

    /* Footer */
    footer { background: #0F172A; color: #FFFFFF; padding: 4rem 0 2rem; border-top: 3px solid #000000; font-size: 0.9rem; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 2.5rem; margin-bottom: 3rem; }
    @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr; } }
    .footer-col h5 { color: #FFFFFF; font-size: 1.05rem; font-weight: 900; margin-bottom: 1.1rem; }
    .footer-links-list { list-style: none; }
    .footer-links-list li { margin-bottom: 0.65rem; }
    .footer-links-list a { color: #E2E8F0; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }
    .footer-links-list a:hover { color: #FFFFFF; }
    .footer-bottom { border-top: 1px solid #334155; padding-top: 1.8rem; text-align: center; font-size: 0.82rem; color: #CBD5E1; font-weight: 600; }

    /* Mobile Media Queries (< 768px) */
    @media (max-width: 768px) {
      .container { padding: 0 1rem; }
      .nav-inner { height: 58px; }
      .brand-logo { font-size: 1.15rem; }
      .nav-menu { display: none; } /* Hide heavy desktop menu in mobile */
      .subnav-bar { top: 58px; }
      .hero-title { font-size: 1.85rem; line-height: 1.35; }
      .hero-desc { font-size: 0.98rem; }
      .section-title { font-size: 1.55rem; }
      .section-subtitle { font-size: 0.92rem; }
      .whitepaper-box, .faq-container-box, .estimator-card, .order-section { padding: 1.4rem 1.1rem; }
      .spec-card { padding: 1.4rem 1.1rem; }
      .formula-box { padding: 1rem 1.1rem; }
      .formula-main { font-size: 1rem; }
      .faq-item summary { padding: 1rem 1.1rem; font-size: 0.95rem; }
      .faq-answer { padding: 1.2rem 1.1rem; font-size: 0.92rem; }
      .faq-q-text { flex-direction: column; align-items: flex-start; gap: 0.35rem; }
    }

  </style>

  <!-- JSON-LD FAQPage Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ASTM D638의 ISO 등가 표준은 무엇입니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASTM D638의 대표적인 ISO 등가 표준은 ISO 527-1(일반 원칙) 및 ISO 527-2(성형 및 압출 플라스틱의 시험 조건)입니다. 두 규격 모두 플라스틱의 인장 물성을 평가하지만 시편 형상 치수, 시험 속도 전환 규정 및 탄성계수 계산 방식에서 기술적 차이가 존재합니다."
        }
      },
      {
        "@type": "Question",
        "name": "ASTM D638 결과와 ISO 527-2 결과는 어떻게 비교되며, 어떤 차이점을 알아야 합니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASTM D638 Type I 시편(전장 165mm, 폭 13mm, 표점 50mm)과 ISO 527-2 Type 1A/1B 시편(전장 170mm, 폭 10mm, 표점 75mm/50mm)은 치수가 다릅니다. 또한 ISO 527은 모듈러스 측정 시 1mm/min 후 본 시험 시 속도를 자동 전환하는 2단계 속도 제어를 요구하는 반면 ASTM D638은 단일 속도(통상 5mm/min)를 유지합니다."
        }
      },
      {
        "@type": "Question",
        "name": "항복 후 연신율에 공칭 변형률이 필요한 이유는 무엇입니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "플라스틱이 항복 지점을 지나면 시편 국부에서 단면이 급격히 줄어드는 네킹(Necking) 현상이 발생합니다. 네킹이 표점거리 밖에서 발생하거나 급격한 연신으로 신율계 범위를 벗어나면 측정이 왜곡되므로, ASTM D638에서는 초기 그립 간격(D) 이동량을 기준으로 하는 공칭 변형률(Nominal Strain)을 적용하도록 규정하고 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "ASTM D638에 필요한 신장계 등급은 무엇입니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "탄성계수(Young's Modulus) 측정을 위해 ASTM E83 Class B-2 이상의 고정밀 신율계가 필수입니다. 항복 및 파단 연신율 측정을 위해서는 Class C 또는 D 등급이나 비접촉 비디오 신율계(AVE 2), DIC 광학 계측 시스템이 널리 사용됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "ASTM D638은 조절(노화)되거나 비상온 환경(예: 고온, 습도)에 노출된 플라스틱에 사용할 수 있습니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "사용 가능합니다. 시험 전 ASTM D618 표준(23±2℃, 상대습도 50±5%, 40시간)에 따라 상태 조절을 수행해야 하며, -70℃~+300℃ 범위의 환경 챔버를 장착하여 고온 열화, 저온 취성 및 내후성 노화 인장 시험을 진행할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "ASTM D638 인장 시험을 수행할 때 흔히 발생하는 오류 또는 비준수 원인은 무엇이며, 이를 어떻게 완화할 수 있습니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "시편 가공 시 미세 노치(Burr), 상하 그립 정렬 불량으로 인한 비틀림 굽힘 응력, 그립부 조기 파단 및 슬립, 크로스헤드 변위로 탄성계수를 산출하는 오류가 대표적입니다. 정밀 절삭/3D 적층, 공압 쐐기형 그립 및 표점 신율계 직접 계측으로 완화합니다."
        }
      },
      {
        "@type": "Question",
        "name": "현재 사용 중인 ASTM D638 버전은 무엇이며, 제 실험실이 최신 상태인지 어떻게 알 수 있습니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "현재 최신 유효 표준은 ASTM D638-22입니다. ASTM International 포털을 통해 최신 표준 번호를 확인하고 연 1회 로드셀(ASTM E4) 및 신율계(ASTM E83) 교정 성적서를 유지해야 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "ASTM D638 대신 ASTM D882를 언제 사용해야 합니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "시편 두께가 1.0mm(0.04인치) 미만인 얇은 플라스틱 필름 및 시트는 덤벨 가공 시 찢김이 발생하므로 직사각형 스트립 시편을 사용하는 ASTM D882를 사용해야 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "ASTM D638과 D412의 차이점은 무엇입니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASTM D638은 경질/반경질 플라스틱용(속도 1~50mm/min, Type I~V)이며, ASTM D412는 가황 고무, 열가소성 엘라스토머(TPE/TPU), 실리콘용으로 Die C 덤벨 시편과 500mm/min의 고속 시험을 적용합니다."
        }
      },
      {
        "@type": "Question",
        "name": "ASTM D638과 D1708의 차이점은 무엇입니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASTM D1708은 신소재 R&D 등 가용 재료 양이 극도로 적을 때 사용하는 마이크로 인장 시편(전장 38mm, 폭 5mm) 규격입니다."
        }
      },
      {
        "@type": "Question",
        "name": "ASTM D638과 D3039의 차이점은 무엇입니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASTM D3039는 탄소섬유강화플라스틱(CFRP) 등 연속 섬유 복합재 전용 규격으로, 직사각형 평판에 단부 탭(End Tabs)을 부착하여 초고하중 인장강도를 측정합니다."
        }
      },
      {
        "@type": "Question",
        "name": "ASTM D638은 무엇을 측정합니까?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "플라스틱 재료의 인장 강도(Strength), 강성(Stiffness, 탄성계수), 연성(Ductility, 파단연신율), 항복 거동 및 인성(Toughness, 흡수에너지)을 종합 측정합니다."
        }
      }
    ]
  }
  </script>
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

  <!-- Quick Jump Subnav -->
  <div class="subnav-bar">
    <div class="container subnav-inner">
      <a href="#key-measurements" class="subnav-btn"><i class="bi bi-graph-up"></i> 주요 측정값 6대 지표</a>
      <a href="#specimen-types" class="subnav-btn"><i class="bi bi-diagram-3"></i> 시편 유형 (Type I~V)</a>
      <a href="#calculations-results" class="subnav-btn"><i class="bi bi-calculator"></i> 계산 및 결과 설명</a>
      <a href="#c1401-deepdive" class="subnav-btn"><i class="bi bi-building"></i> ASTM C1401 구조 실리콘</a>
      <a href="#fdm-dic" class="subnav-btn"><i class="bi bi-camera"></i> FDM 3D & DIC 광학분석</a>
      <a href="#estimator" class="subnav-btn"><i class="bi bi-speedometer2"></i> 소요시간 견적기</a>
      <a href="#faq" class="subnav-btn" style="color:var(--accent);"><i class="bi bi-question-circle-fill"></i> 12대 전문 기술 FAQ</a>
      <a href="#order-form" class="subnav-btn" style="background:var(--primary); color:#fff;"><i class="bi bi-send"></i> 시편 제작 의뢰</a>
    </div>
  </div>

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
        ASTM D638 주요 측정값과 5대 덤벨 시편 유형(Type I~V), 응력-변형률 계산 및 시험 결과 해석, 
        커튼월 구조 글레이징(SSG)을 위한 ASTM C1401 / C1135 H-Block 인장 접착 시험체 제작, 
        DIC(Digital Image Correlation) 광학 변형률 분석 및 12대 전문 FAQ를 포괄하는 종합 엔지니어링 기술 센터입니다.
      </p>

      <div class="hero-badges">
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> ASTM D638 Type I ~ Type V 전 규격 완벽 대응</span>
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> ASTM C1401 / C1135 H-Block 구조접착 시험체 (50×12×12mm)</span>
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> DIC 2~4px 고대비 스펙클 표면 가공 (Ncorr 분석 연동)</span>
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> ★ Type V 고효율 시편 (제작시간 5배 단축, 재료 80% 절감)</span>
        <span class="hero-badge"><i class="bi bi-check-circle-fill text-accent"></i> 12대 전문 기술 FAQ & Instron 표준 매핑</span>
      </div>

      <div class="hero-quick-cta">
        <a href="#key-measurements" class="btn-hero-primary"><i class="bi bi-graph-up"></i> 주요 측정값 & 계산식 보기</a>
        <a href="#specimen-types" class="btn-hero-secondary"><i class="bi bi-diagram-3"></i> Type I~V 시편 치수 비교표</a>
        <a href="#faq" class="btn-hero-secondary"><i class="bi bi-question-circle"></i> 12대 기술 FAQ 바로가기</a>
      </div>
    </div>

  
  <!-- SECTION 1: ASTM D638 Key Measurements -->
  <section id="key-measurements" class="container">
    <div class="section-header">
      <span class="section-tag">// Standard Key Measurements</span>
      <h2 class="section-title">ASTM D638의 주요 측정값 (Key Tensile Properties)</h2>
      <p class="section-subtitle">
        만능재료시험기(UTM)를 통해 플라스틱 고분자 재료의 인장 하중 거동을 특성화하는 6대 핵심 측정 지표입니다.
      </p>
    </div>

    <div class="prop-grid">
      <!-- 1. Tensile Strength -->
      <div class="prop-card">
        <span class="prop-badge">STRENGTH METRIC</span>
        <h3 class="prop-title">1. 인장 강도 (Tensile Strength, UTS / 항복 시 & 파단 시)</h3>
        <p class="prop-desc">
          시편이 인장 하중을 받을 때 견딜 수 있는 최대 응력입니다. 항복점에서의 강도(Tensile Strength at Yield)와 최종 파단 시점에서의 강도(Tensile Strength at Break)로 구분하여 기록합니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-calculator"></i> 인장 강도 산출식</div>
          <div class="formula-main">
            <span class="math-sym">σ</span> = 
            <span class="math-frac">
              <span class="math-num">F<sub>max</sub></span>
              <span class="math-den">A<sub>0</sub></span>
            </span> = 
            <span class="math-frac">
              <span class="math-num">F<sub>max</sub></span>
              <span class="math-den">W × T</span>
            </span>
            <span class="math-unit">[MPa, N/mm²]</span>
          </div>
          <div class="formula-desc">F<sub>max</sub>: 최대 하중 [N], W: 평행부 폭 [mm], T: 두께 [mm]</div>
        </div>
      </div>

      <!-- 2. Tensile Modulus -->
      <div class="prop-card">
        <span class="prop-badge">STIFFNESS METRIC</span>
        <h3 class="prop-title">2. 인장 탄성률 (Tensile Modulus / Chord Modulus, E)</h3>
        <p class="prop-desc">
          재료의 강성(Stiffness)을 정량화하며, 응력-변형률 곡선의 초기 선형 탄성 구간(통상 변형률 0.05% ~ 0.25% 범위)의 할선(Chord) 기울기로 산출됩니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-graph-up"></i> 인장 탄성률 산출식</div>
          <div class="formula-main">
            <span class="math-sym">E</span> = 
            <span class="math-frac">
              <span class="math-num">σ<sub>2</sub> - σ<sub>1</sub></span>
              <span class="math-den">ε<sub>2</sub> - ε<sub>1</sub></span>
            </span>
            <span class="math-unit">[GPa 또는 MPa]</span>
          </div>
          <div class="formula-desc">σ<sub>1</sub>, σ<sub>2</sub>: 변형률 ε<sub>1</sub>=0.0005, ε<sub>2</sub>=0.0025 지점에서의 응력</div>
        </div>
      </div>

      <!-- 3. Elongation -->
      <div class="prop-card">
        <span class="prop-badge">DUCTILITY METRIC</span>
        <h3 class="prop-title">3. 파단 연신율 (Tensile Elongation at Break, ε<sub>b</sub>)</h3>
        <p class="prop-desc">
          시편이 파단되는 순간 초기 표점거리(Gage Length, L<sub>0</sub>) 대비 늘어난 변위의 백분율로, 재료가 부서지기 전 얼마나 늘어날 수 있는지를 나타내는 연성(Ductility) 척도입니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-arrows-expand"></i> 파단 연신율 산출식</div>
          <div class="formula-main">
            <span class="math-sym">ε<sub>b</sub></span> = 
            <span class="math-frac">
              <span class="math-num">L<sub>f</sub> - L<sub>0</sub></span>
              <span class="math-den">L<sub>0</sub></span>
            </span> × 100
            <span class="math-unit">[%]</span>
          </div>
          <div class="formula-desc">L<sub>0</sub>: 초기 표점거리 [mm], L<sub>f</sub>: 파단 시점 표점거리 [mm]</div>
        </div>
      </div>

      <!-- 4. Nominal Strain -->
      <div class="prop-card">
        <span class="prop-badge">POST-YIELD METRIC</span>
        <h3 class="prop-title">4. 공칭 변형률 (Nominal Strain, ε<sub>t</sub>)</h3>
        <p class="prop-desc">
          항복 후 네킹(Necking)이 발생하여 표점거리 신율계 측정이 제한될 때, 초기 그립 간격(Grip Separation, D)의 이동 변위를 기준으로 산출하는 대변형률 지표입니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-distribute-horizontal"></i> 공칭 변형률 산출식</div>
          <div class="formula-main">
            <span class="math-sym">ε<sub>t</sub></span> = 
            <span class="math-frac">
              <span class="math-num">ΔD</span>
              <span class="math-den">D</span>
            </span> = 
            <span class="math-frac">
              <span class="math-num">D<sub>f</sub> - D<sub>0</sub></span>
              <span class="math-den">D<sub>0</sub></span>
            </span>
            <span class="math-unit">[mm/mm 또는 %]</span>
          </div>
          <div class="formula-desc">D<sub>0</sub>: 초기 그립 간격 [mm], ΔD: 그립 이동 변위량 [mm]</div>
        </div>
      </div>

      <!-- 5. Poisson's Ratio -->
      <div class="prop-card">
        <span class="prop-badge">TENSOR METRIC</span>
        <h3 class="prop-title">5. 포아송 비 (Poisson's Ratio, ν)</h3>
        <p class="prop-desc">
          축방향 인장 변형률(ε<sub>yy</sub>)에 대한 횡방향 수축 변형률(ε<sub>xx</sub>)의 비율로, DIC 광학 변형률 분석을 통해 2차원 텐서로 정밀 측정됩니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-aspect-ratio"></i> 포아송 비 산출식</div>
          <div class="formula-main">
            <span class="math-sym">ν</span> = - 
            <span class="math-frac">
              <span class="math-num">ε<sub>xx</sub> (횡방향 수축)</span>
              <span class="math-den">ε<sub>yy</sub> (축방향 연신)</span>
            </span>
          </div>
          <div class="formula-desc">(플라스틱 PLA/ABS: 0.33 ~ 0.38, 실리콘 고무: 약 0.48 ~ 0.499)</div>
        </div>
      </div>

      <!-- 6. Tensile Energy Absorption -->
      <div class="prop-card">
        <span class="prop-badge">TOUGHNESS METRIC</span>
        <h3 class="prop-title">6. 인장 에너지 흡수율 (TEA / Toughness)</h3>
        <p class="prop-desc">
          시편이 최종 파단될 때까지 흡수한 총 일(Work)의 양으로, 응력-변형률 곡선 아래의 총 면적을 적분하여 재료의 충격 흡수 인성을 평가합니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-lightning-charge"></i> 인성(TEA) 적분식</div>
          <div class="formula-main">
            <span class="math-sym">TEA</span> = 
            ∫ 
            <span class="math-num" style="border:none;">σ · dε</span>
            <span class="math-unit">[MJ/m³ 또는 kJ/m²]</span>
          </div>
          <div class="formula-desc">응력-변형률 곡선의 0부터 파단 변형률(ε<sub>b</sub>)까지의 하부 적분 면적</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 2: ASTM D638 Specimen Types -->
  <section id="specimen-types" style="background:var(--white); border-top:1px solid var(--gray-200); border-bottom:1px solid var(--gray-200);">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">// Standard Specimen Geometries</span>
        <h2 class="section-title">ASTM D638 5대 시편 유형 (Type I ~ Type V) 상세 규격</h2>
        <p class="section-subtitle">
          재료 두께, 형태, 가용량 및 파단 특성에 따라 최적화된 5가지 덤벨(Dog-bone) 시편 형상입니다.
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
            <strong>권장 용도:</strong> 가장 대표적인 표준 시편으로 강성 및 반경질 플라스틱(PLA+, ABS, PC, POM 등)의 표준 인증 시험에 필수입니다.
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
    </div>
  </section>

  <!-- SECTION 3: Calculations & Results Interpretation -->
  <section id="calculations-results" class="container">
    <div class="section-header">
      <span class="section-tag">// Calculations & Stress-Strain Curve Analysis</span>
      <h2 class="section-title">계산 및 시험 결과 설명 (Calculations & Results)</h2>
      <p class="section-subtitle">
        인장 시험 중 나타나는 응력-변형률 곡선의 4단계 거동 영역과 공학적 해석 방법입니다.
      </p>
    </div>

    <div class="whitepaper-box">
      <div class="wp-header">
        <div class="wp-icon-ring"><i class="bi bi-activity"></i></div>
        <div class="wp-title-wrap">
          <h3>응력-변형률 곡선(Stress-Strain Curve)의 4대 거동 영역 해석</h3>
          <p>Elastic Region, Yielding, Necking & Plastic Flow, Ultimate Failure</p>
        </div>
      </div>

      <div class="wp-content">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1.2rem; margin-bottom:2rem;">
          <div style="background:var(--gray-50); padding:1.4rem; border-radius:8px; border:1px solid var(--gray-200);">
            <div style="font-weight:800; color:var(--primary); margin-bottom:0.3rem;">1. 선형 탄성 구간 (Elastic Zone)</div>
            <p style="font-size:0.86rem; color:var(--gray-600); margin:0;">하중 제거 시 원래 형상으로 완전 복원되는 구간으로 Hooke의 법칙에 따라 탄성계수(E)가 산출됩니다.</p>
          </div>
          <div style="background:var(--gray-50); padding:1.4rem; border-radius:8px; border:1px solid var(--gray-200);">
            <div style="font-weight:800; color:var(--accent); margin-bottom:0.3rem;">2. 항복점 (Yield Point)</div>
            <p style="font-size:0.86rem; color:var(--gray-600); margin:0;">소성 변형이 개시되는 임계 응력 지점으로, 응력 증가 없이 변형률만 급증하기 시작하는 분기점입니다.</p>
          </div>
          <div style="background:var(--gray-50); padding:1.4rem; border-radius:8px; border:1px solid var(--gray-200);">
            <div style="font-weight:800; color:#7C3AED; margin-bottom:0.3rem;">3. 네킹 및 소성 유동 (Necking)</div>
            <p style="font-size:0.86rem; color:var(--gray-600); margin:0;">시편 특정 부위 단면적이 급격히 축소되며 고분자 사슬이 인장 방향으로 정렬(배향)되는 소성 변형 구간입니다.</p>
          </div>
          <div style="background:var(--gray-50); padding:1.4rem; border-radius:8px; border:1px solid var(--gray-200);">
            <div style="font-weight:800; color:#DC2626; margin-bottom:0.3rem;">4. 최종 파단 (Ultimate Rupture)</div>
            <p style="font-size:0.86rem; color:var(--gray-600); margin:0;">미세 크랙이 진전되어 최종 파단되는 지점으로, 파단 연신율(ε<sub>b</sub>) 및 파단 에너지(TEA)가 결정됩니다.</p>
          </div>
        </div>

        <div class="alert-box-info">
          <i class="bi bi-info-circle-fill" style="font-size:1.3rem; flex:none; color:var(--primary);"></i>
          <div>
            <strong>Instron UTM 시험 시 필수 주의사항 (신율계 Extensometer 사용):</strong><br>
            크로스헤드 이동 거리만으로 변형률을 계산하면 그립 슬립(Grip Slip)과 장비 프레임의 탄성 변형으로 인해 탄성계수가 최대 30~50% 과소평가될 수 있습니다. 정밀한 물성 측정을 위해 반드시 <strong>25~50mm 게이지 클립온 신율계</strong> 또는 <strong>비접촉 비디오/DIC 신율계</strong>를 사용해야 합니다.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 4: ASTM C1401 Structural Glazing Guide -->
  <section id="c1401-deepdive" style="background:var(--white); border-top:1px solid var(--gray-200); border-bottom:1px solid var(--gray-200);">
    <div class="container">
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

          <h4>1. 동적 풍하중 지지를 위한 최소 구조 바이트 (Structural Bite, B)</h4>
          <p>
            유리 패널 단변 길이(W<sub>short</sub>)와 설계 풍하중(P<sub>wind</sub>)을 바탕으로, Dow Chemical 표준 허용 동적 인장응력 <strong>140 kPa (20 psi, 안전율 2.5~3.0)</strong>를 적용하여 최소 접착 폭을 산출합니다.
          </p>
          <div class="formula-box">
            <div class="formula-title"><i class="bi bi-shield-check"></i> ASTM C1401 풍하중 구조 바이트 산출식 (Trapezoidal Load Method)</div>
            <div class="formula-main">
              <span class="math-sym">B</span> = 
              <span class="math-frac">
                <span class="math-num">W<sub>short</sub> × P<sub>wind</sub></span>
                <span class="math-den">2 × 140 kPa</span>
              </span>
              <span class="math-unit">[mm]</span>
            </div>
            <div class="formula-desc">
              (규정 절대 최소 구조 바이트: <strong>B<sub>min</sub> ≥ 6.4 mm</strong> 필수 준수)
            </div>
          </div>

          <h4>2. 지속 패널 자중 지지를 위한 수직 접착 연장 (Deadload Contact Length)</h4>
          <p>
            하부 기계적 세팅 블록이 없는 4변 구조 글레이징의 경우, 유리 자중에 의한 장기 크리프(Creep) 변형을 방지하기 위해 허용 전단응력 <strong>7.0 kPa (1.0 psi)</strong>를 적용합니다.
          </p>
          <div class="formula-box">
            <div class="formula-title"><i class="bi bi-arrow-down-square"></i> 패널 자중 지지 최소 접착 연장 산출식</div>
            <div class="formula-main">
              <span class="math-sym">L<sub>deadload</sub></span> = 
              <span class="math-frac">
                <span class="math-num">Glass Weight (kg) × 9.81 m/s²</span>
                <span class="math-den">Bite (m) × 7,000 Pa</span>
              </span>
              <span class="math-unit">[m]</span>
            </div>
            <div class="formula-desc">
              (유리 밀도 2,500 kg/m³ 기준, 허용 전단응력 7.0 kPa 적용)
            </div>
          </div>

          <h4>3. 글루라인 두께 (Glueline Thickness, G<sub>t</sub>) 설계 규격</h4>
          <p>
            유리와 알루미늄 프레임 간의 열팽창 차이에 따른 전단 변형을 흡수할 수 있도록 바이트 대비 1:1 ~ 1:3 비율 범위 내에서 최소 6.4 mm 이상, 최대 12.7 mm 이하로 유지해야 합니다.
          </p>

          <h4>4. ASTM C1135 H-Block 구조 접착 인장 시험체 (50 × 12 × 12 mm)</h4>
          <p>
            구조용 실리콘(Dow DOWSIL™ 983 / 995 등)의 실제 접착 성능을 공인 검증하기 위해 50 mm 길이, 12 mm 폭, 12 mm 두께의 H형 실리콘 비드를 2조의 아노다이징 알루미늄 및 유리 사이에 타설한 시험체입니다.
          </p>
          <ul style="padding-left:1.2rem; color:var(--gray-700); font-size:0.92rem; line-height:1.75;">
            <li><strong>시험 속도 (ASTM C1135):</strong> 만능재료시험기(UTM)에서 <strong>12.5 mm/min</strong> 일정한 속도로 인장 하중 인가.</li>
            <li><strong>최소 인장 접착 강도:</strong> 통상 ≥ 1.0 ~ 1.5 MPa 이상 도달 필수.</li>
            <li><strong>★ 합격 판정 기준 (100% Cohesive Failure):</strong> 기재와 실리콘 계면이 떨어지는 계면 박리(Adhesive Failure)가 0%여야 하며, <strong>실리콘 내부가 찢어지는 응집 파괴(Cohesive Failure)가 100%</strong> 발생해야만 구조심의 합격 승인을 획득합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 5: FDM 3D & DIC Analysis -->
  <section id="fdm-dic" class="container">
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
          DIC는 시험체 표면의 무작위 스펙클 패턴(Random Speckle Pattern)의 이동을 추적하여 sub-pixel 정밀도로 2차원 변형률 텐서(E<sub>xx</sub>, E<sub>yy</sub>)를 가시화하는 첨단 비접촉 광학 계측 기술입니다.
        </p>
        <ul style="padding-left:1.2rem; color:var(--gray-700); font-size:0.92rem; line-height:1.75;">
          <li><strong>표면 가공:</strong> 백색 무광 스프레이 페인트 2~3회 균일 도포 후, 에어브러시를 이용해 <strong>2 ~ 4 pixel 크기의 고밀도 블랙 스펙클 패턴</strong>을 형성.</li>
          <li><strong>Ncorr 분석 파라미터:</strong> MATLAB Ncorr 툴킷에서 Subset Radius 23, Spacing 2, Newton-Raphson 서브픽셀 알고리즘을 적용하여 R² > 0.95의 높은 선형 회귀 신뢰도 확보.</li>
          <li><strong>네킹(Necking) 및 변형 거동:</strong> 인장 진행에 따라 축방향 연신(E<sub>yy</sub> 증가)과 횡방향 수축(E<sub>xx</sub> 감소)을 실시간으로 추적하여 소성 변형 구간을 정밀 분석.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- SECTION 6: Interactive Estimator 2.0 -->
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

  
  
  <!-- SECTION 7: ASTM D638 Comprehensive 12 FAQs -->
  
  <section class="container" id="faq">
    <div class="section-header">
      <span class="section-tag">// Expert Technical FAQ (Instron Standard Guidance)</span>
      <h2 class="section-title">ASTM D638 플라스틱 인장 시험 12대 전문 기술 FAQ</h2>
      <p class="section-subtitle">
        ISO 등가 표준 비교, 신장계 등급 규격, 공칭 변형률 적용 원리 및 현장 시험 오류 완화 방안에 대한 12대 핵심 질의응답 (각 질문 우측 [Expand]를 클릭하여 답변을 확인하십시오).
      </p>
    </div>

    <div class="faq-container-box">
      <!-- Search & Controls Bar -->
      <div class="faq-controls-bar">
        <div class="faq-search-wrap">
          <i class="bi bi-search faq-search-icon"></i>
          <input type="text" id="faqSearchInput" class="faq-search-input" placeholder="FAQ 키워드 검색 (예: ISO 527, 신장계, 공칭 변형률, D882, D412, D3039, 오류 완화...)" oninput="filterFaqQuestions()">
        </div>
        <div>
          <button class="faq-btn-toggle-all" onclick="toggleAllFaqs(true)"><i class="bi bi-arrows-expand"></i> 전체 펼치기 (Expand All)</button>
          <button class="faq-btn-toggle-all" onclick="toggleAllFaqs(false)" style="margin-left:0.4rem;"><i class="bi bi-arrows-collapse"></i> 전체 접기 (Collapse All)</button>
        </div>
      </div>

      <div class="faq-accordion-group" id="faqAccordionGroup">
        <!-- Q1 -->
        <details class="faq-item" open>
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q1. 표준 비교</span>
              <span>ASTM D638의 ISO 등가 표준은 무엇입니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              ASTM D638의 대표적인 국제 등가 표준은 <strong>ISO 527-1(일반 원칙)</strong> 및 <strong>ISO 527-2(성형 및 압출 플라스틱의 시험 조건)</strong>입니다.
            </p>
            <p>
              두 규격 모두 비보강 및 보강 열가소성/열경화성 고분자의 인장 물성(강도, 모듈러스, 신율)을 도출하는 데 사용되지만, 시편 형상 치수(ASTM Type I vs ISO Type 1A/1B), 시험 속도 전환 규정 및 탄성계수 산출 방식에서 기술적 차이가 존재하므로 시험 성적서 상호 인용 시 세부 조건을 확인해야 합니다.
            </p>
          </div>
        </details>

        <!-- Q2 -->
        <details class="faq-item" open>
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q2. ISO 527 비교</span>
              <span>ASTM D638 결과와 ISO 527-2 결과는 어떻게 비교되며, 어떤 차이점을 알아야 합니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>ASTM D638과 ISO 527-2의 3대 핵심 차이점은 다음과 같습니다:</p>
            <ul>
              <li><strong>시편 형상 치수:</strong> ASTM D638 Type I 시편은 전장 165mm, 평행부 폭 13.0mm, 표점거리 50.0mm인 반면, ISO 527-2 Type 1A/1B 시편은 전장 170mm, 평행부 폭 10.0mm, 표점거리 75.0mm(또는 50.0mm)로 설계되어 있습니다.</li>
              <li><strong>시험 속도 전환 규정:</strong> ISO 527은 탄성계수(Modulus) 측정 구간에서 <strong>1 mm/min</strong> 속도로 시험한 후, 항복 및 파단 시험 시 <strong>5 mm/min 또는 50 mm/min</strong>으로 속도를 자동 전환하는 2단계 속도 제어를 필수 규정으로 두고 있습니다. 반면 ASTM D638은 단일 속도(통상 5 mm/min) 유지를 기본으로 합니다.</li>
              <li><strong>탄성계수 산출 방식:</strong> ISO 527은 0.05%~0.25% 변형률 구간의 시컨트(Secant) 또는 회귀 기울기를 계산하며, ASTM D638은 초기 탄성 영역의 할선(Chord) 탄성계수를 산출하므로 동일 소재라도 2~5% 내외의 측정값 차이가 발생할 수 있습니다.</li>
            </ul>
          </div>
        </details>

        <!-- Q3 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q3. 변형률 이론</span>
              <span>항복 후 연신율에 공칭 변형률(Nominal Strain)이 필요한 이유는 무엇입니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              경질 및 연질 고분자 재료가 항복점(Yield Point)을 지나 소성 변형 영역에 진입하면, 특정 부위에서 단면적이 급격히 줄어드는 <strong>네킹(Necking) 현상</strong>이 발생합니다.
            </p>
            <p>
              네킹이 초기 표점거리(Gage Length) 외부에서 발생하거나 급격한 연신으로 클립온 신율계의 최대 측정 범위를 벗어날 경우, 접촉식 센서가 이탈하거나 오차가 발생합니다. 따라서 ASTM D638 표준에서는 항복 이후 파단까지의 큰 변형률 구간에서는 표점거리 대신 <strong>초기 그립 간격(Grip Separation, D)의 이동 변위를 기준으로 산출하는 공칭 변형률(Nominal Strain, ε<sub>t</sub> = ΔD / D)</strong>을 적용하도록 명시하고 있습니다.
            </p>
          </div>
        </details>

        <!-- Q4 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q4. 계측 등급</span>
              <span>ASTM D638에 필요한 신장계(신율계, Extensometer) 등급은 무엇입니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              ASTM D638 표준은 측정 대상 물성치에 따라 서로 다른 신율계 등급(ASTM E83)을 요구합니다:
            </p>
            <ul>
              <li><strong>인장 탄성계수(Young's Modulus) 측정:</strong> 0.05%~0.25% 미세 변형률 측정을 위해 반드시 <strong>ASTM E83 Class B-2 이상</strong>(변형률 오차 ±0.0001 mm/mm 이내)의 고정밀 신율계를 사용해야 합니다.</li>
              <li><strong>항복 및 파단 연신율 측정:</strong> 대변형률 측정을 위해 <strong>ASTM E83 Class C 또는 Class D</strong> 등급이 허용됩니다.</li>
              <li><strong>권장 첨단 센서:</strong> 최근에는 시편에 물리적 하중을 가하지 않고 전체 시험 과정을 단일 세팅으로 측정하는 <strong>비접촉 비디오 신율계(AVE 2)</strong>, <strong>DIC 광학 계측 시스템(Ncorr 연동)</strong>, 또는 <strong>자동 접촉식 신율계(AutoX)</strong>가 널리 채택됩니다.</li>
            </ul>
          </div>
        </details>

        <!-- Q5 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q5. 환경 챔버</span>
              <span>ASTM D638은 조절(노화)되거나 비상온 환경(예: 고온, 습도)에 노출된 플라스틱에 사용할 수 있습니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              네, 완벽히 적용 가능합니다. 플라스틱 고분자는 온도와 수분에 극도로 민감하므로 시험 전 상태 조절이 필수입니다:
            </p>
            <ul>
              <li><strong>표준 상태 조절 (ASTM D618):</strong> 표준 상온 시험 전 <strong>23 ± 2 °C</strong> 및 <strong>상대습도 50 ± 5 %</strong> 챔버 환경에서 최소 40시간 동안 상태 조절(Conditioning)을 수행합니다.</li>
              <li><strong>비상온 환경 챔버 시험:</strong> 자동차 엔진룸, 항공우주, 배터리 팩용 부품 평가를 위해 <strong>-70 °C ~ +300 °C</strong> 온도 챔버를 UTM 장비에 장착하여 고온 열화, 저온 취성 및 내후성 노화 인장 시험을 진행할 수 있습니다.</li>
            </ul>
          </div>
        </details>

        <!-- Q6 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q6. 오류 완화</span>
              <span>ASTM D638 인장 시험을 수행할 때 흔히 발생하는 오류 또는 비준수 원인은 무엇이며, 이를 어떻게 완화할 수 있습니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>현장 시험에서 자주 발생하는 4대 오류 원인과 엔지니어링 완화 대책은 다음과 같습니다:</p>
            <ul>
              <li><strong>1. 시편 모서리 가공 불량(Micro-notches):</strong> CNC 절삭이나 금형 절단 시 발생한 미세 노치가 응력 집중을 일으켜 조기 취성 파단을 유발합니다. ➔ 정밀 엔드밀 가공 및 미세 사포 디버링 마감 필수.</li>
              <li><strong>2. 상하 그립 정렬 불량(Misalignment):</strong> 축이 틀어지면 시편에 비틀림 및 굽힘 응력(Bending Stress)이 발생하여 인장강도가 10~20% 저하됩니다. ➔ 자동 센터링 그립 및 정렬 지그 사용.</li>
              <li><strong>3. 그립부 슬립 및 탭 파단:</strong> 그립 압력이 낮으면 시편이 미끄러지고, 압력이 너무 높으면 턱(Jaw)에 물린 부위가 먼저 파단됩니다. ➔ 비례 압력 제어 공압 쐐기형 그립(Pneumatic Wedge Grips) 사용.</li>
              <li><strong>4. 크로스헤드 변위로 탄성계수 산출:</strong> 로드셀과 프레임 유연성으로 인해 탄성계수가 30~50% 왜곡됩니다. ➔ 반드시 시편 표점 신율계 직접 계측.</li>
            </ul>
          </div>
        </details>

        <!-- Q7 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q7. 규격 관리</span>
              <span>현재 사용 중인 ASTM D638 버전은 무엇이며, 제 실험실이 최신 상태인지 어떻게 알 수 있습니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              현재 최신 유효 표준은 <strong>ASTM D638-22</strong> (2022년 개정판)입니다.
            </p>
            <p>
              실험실이 최신 표준 규격을 준수하고 있는지 확인하려면 미국 재료시험협회(astm.org) 표준 스토어의 활성(Active) 상태를 조회하거나, KOLAS/KTR 등 공인 시험기관의 인증 범위를 대조해야 합니다. 또한 로드셀 교정(ASTM E4) 및 신율계 교정(ASTM E83) 성적서를 주기적으로 갱신해야 합니다.
            </p>
          </div>
        </details>

        <!-- Q8 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q8. 박막 필름</span>
              <span>ASTM D638 대신 ASTM D882를 언제 사용해야 합니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              시험 대상 플라스틱 시편의 두께가 <strong>1.0 mm (0.04 inch) 미만</strong>인 얇은 플라스틱 필름 및 멤브레인 시트의 경우 ASTM D638을 적용할 수 없습니다.
            </p>
            <p>
              얇은 박막 시트는 덤벨 형상으로 가공할 때 가장자리에 미세한 찢김(Tear)이 발생하기 쉬우므로, 균일한 폭의 직사각형 스트립(Strip) 시편을 사용하는 <strong>ASTM D882 (Standard Test Method for Tensile Properties of Thin Plastic Sheeting)</strong>를 필히 적용해야 합니다.
            </p>
          </div>
        </details>

        <!-- Q9 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q9. 엘라스토머</span>
              <span>ASTM D638과 ASTM D412의 차이점은 무엇입니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              <strong>ASTM D638</strong>은 플라스틱(경질/반경질 열가소성 고분자)을 주 대상으로 하며, 시험 속도가 1 ~ 50 mm/min 범위입니다.
            </p>
            <p>
              반면 <strong>ASTM D412</strong>는 가황 고무(Vulcanized Rubber), 열가소성 엘라스토머(TPE/TPU) 및 구조용 실리콘 고무를 위한 시험 표준입니다. ASTM D412는 <strong>Die C 덤벨 형상</strong>을 사용하며, 시험 속도가 <strong>500 ± 50 mm/min</strong>으로 매우 빠르고, 100%/300% 모듈러스 및 파단 연신율(400~800%)을 측정합니다.
            </p>
          </div>
        </details>

        <!-- Q10 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q10. 마이크로 시편</span>
              <span>ASTM D638과 ASTM D1708의 차이점은 무엇입니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              <strong>ASTM D1708</strong>은 신소재 합성 초기 단계, 바이오 고분자, 극소량 샘플 등 시험에 가용한 재료의 양이 극도로 제한적일 때 사용하는 <strong>마이크로 인장 시편(Microtensile Specimen, 전장 38.0mm, 폭 5.0mm)</strong> 표준입니다.
            </p>
            <p>
              ASTM D638의 Type V 시편(전장 63.5mm, 폭 3.18mm)과 유사한 목적을 가지나, 시편 치수 및 곡률 반경이 상이하므로 상호 물성치 직접 비교 시 형상 계수를 고려해야 합니다.
            </p>
          </div>
        </details>

        <!-- Q11 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q11. 복합재 규격</span>
              <span>ASTM D638과 ASTM D3039의 차이점은 무엇입니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              <strong>ASTM D3039</strong>는 탄소섬유강화플라스틱(CFRP), 유리섬유강화플라스틱(GFRP) 등 <strong>고강도 연속 섬유 강화 고분자 복합재(Polymer Matrix Composites)</strong> 전용 인장 시험 규격입니다.
            </p>
            <p>
              복합재는 덤벨 형상으로 가공 시 섬유의 연속성이 끊어지므로, ASTM D3039에서는 <strong>직사각형 평판 시편의 양 끝에 단부 탭(End Tabs)</strong>을 접착하여 그립부의 섬유 손상을 방지하면서 최대 수천 MPa에 달하는 초고하중 인장 강도를 측정합니다.
            </p>
          </div>
        </details>

        <!-- Q12 -->
        <details class="faq-item">
          <summary>
            <div class="faq-q-text">
              <span class="faq-tag">Q12. 측정 총괄</span>
              <span>ASTM D638은 무엇을 측정합니까?</span>
            </div>
            <span class="faq-expand-badge"><i class="bi bi-chevron-down"></i> Expand</span>
          </summary>
          <div class="faq-answer">
            <p>
              ASTM D638은 플라스틱 부품 및 조형물이 정적 인장 하중을 받을 때 나타내는 <strong>4대 거동 특성</strong>을 정량 측정합니다:
            </p>
            <ul>
              <li><strong>강도 (Strength):</strong> 최대 인장강도(UTS) 및 항복강도 (하중 지탱 한계).</li>
              <li><strong>강성 (Stiffness):</strong> 인장 탄성계수(Young's Modulus) (초기 탄성 변형 저항력).</li>
              <li><strong>연성 (Ductility):</strong> 파단 연신율(Elongation at Break) (늘어나는 유연성 한계).</li>
              <li><strong>인성 (Toughness):</strong> 응력-변형률 곡선 하부 면적인 인장 흡수 에너지(TEA) (파괴 전 충격 흡수 에너지).</li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  </section>

  </div>

  <!-- SECTION 8: Order Form -->
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
            <li><a href="/projects/kct/specimens#key-measurements">주요 측정값 6대 지표</a></li>
            <li><a href="/projects/kct/specimens#specimen-types">시편 유형 (Type I~V)</a></li>
            <li><a href="/projects/kct/specimens#calculations-results">계산 및 결과 설명</a></li>
            <li><a href="/projects/kct/specimens#c1401-deepdive">ASTM C1401 구조 설계</a></li>
            <li><a href="/projects/kct/specimens#faq">12대 기술 FAQ</a></li>
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
      document.getElementById('orderNotes').value = \`[계산기 자동연동]
- 소재: \${mat}
- 표면가공: \${surf}
- 산출 소요시간: \${document.getElementById('resPrintTime').innerText}
- 예상 중량: \${document.getElementById('resFilament').innerText}\`;

      document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
    }

    function handleSpecimenOrderSubmit(e) {
      e.preventDefault();
      const company = document.getElementById('orderCompany').value;
      const name = document.getElementById('orderName').value;
      const email = document.getElementById('orderEmail').value;
      const spec = document.getElementById('orderSpecType').value;
      const qty = document.getElementById('orderQty').value;

      alert(\`[시편 제작 의뢰 접수 완료]

의뢰 기관: \${company}
담당자: \${name} 님
회신 이메일: \${email}
신청 규격: \${spec} (\${qty}개)

24시간 이내 담당 엔지니어가 CAD 도면 검토 및 견적서를 이메일로 회신드립니다.\`);
    }

    // Initialize calculation on load
    runSpecimenCalculation();

    // Initialize KaTeX if available
    document.addEventListener("DOMContentLoaded", function() {
      if (typeof renderMathInElement === "function") {
        renderMathInElement(document.body, {
          delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
          ]
        });
      }
    });
  </script>
</body>
</html>
`;
}
