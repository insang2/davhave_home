import os, sys, re

print("=== Transforming specimens_template.html into Clean Engineering Lab Paper Style with Mobile UX & 100% Black Contrast ===")

with open("scratch/specimens_template.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Research Lab Whitepaper CSS & Mobile Responsive
research_css = """
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
"""

# Replace <style> block
style_pattern = re.compile(r'<style>.*?</style>', re.DOTALL)
html = style_pattern.sub(f'<style>\n{research_css}\n  </style>', html)

with open("scratch/specimens_template.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Applied Clean Research Paper Style with Mobile UX successfully!")
