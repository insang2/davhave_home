import os, sys, re

print("=== Upgrading specimens_template.html with Ultra High-Contrast Typography & Readable Colors ===")

with open("scratch/specimens_template.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update CSS Variables and Global Typography
high_contrast_css = """
    :root {
      --primary: #1E3A8A;
      --primary-dark: #0F172A;
      --primary-light: #2563EB;
      --accent: #C2410C;
      --accent-hover: #9A3412;
      --accent-light: #EA580C;
      --dark: #020617;
      --text-main: #0F172A;      /* 진한 흑청색 (최고 가독성) */
      --text-muted: #334155;     /* 선명한 서브 텍스트 (기존 #64748B에서 대폭 개선) */
      --text-dim: #475569;
      --gray-900: #0F172A;
      --gray-800: #1E293B;
      --gray-700: #334155;
      --gray-600: #475569;
      --gray-400: #64748B;
      --gray-300: #CBD5E1;
      --gray-200: #E2E8F0;
      --gray-100: #F1F5F9;
      --gray-50: #F8FAFC;
      --white: #FFFFFF;
      --radius-sm: 6px;
      --radius: 12px;
      --radius-lg: 20px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
      --shadow: 0 10px 25px -5px rgba(0,0,0,0.12), 0 8px 10px -6px rgba(0,0,0,0.06);
      --shadow-xl: 0 25px 50px -12px rgba(0,0,0,0.22);
      --font: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
      --mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font); color: var(--text-main); background: #F8FAFC; line-height: 1.75; -webkit-font-smoothing: antialiased; }
    a { color: inherit; text-decoration: none; }
    .container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 1.5rem; }

    /* Top Bar */
    .top-bar { background: #0B132B; color: #E2E8F0; font-size: 0.82rem; font-weight: 500; padding: 0.65rem 0; border-bottom: 1px solid rgba(255,255,255,0.15); }
    .top-bar-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; }
    .top-bar-info { display: flex; gap: 1.25rem; align-items: center; }
    .top-bar-info strong { color: #FFFFFF; font-weight: 700; }
    .top-bar-links { display: flex; gap: 1.1rem; align-items: center; }
    .top-bar-links a { color: #CBD5E1; transition: color 0.2s; }
    .top-bar-links a:hover { color: #FFFFFF; text-decoration: underline; }

    /* GNB Header */
    header { background: #FFFFFF; position: sticky; top: 0; z-index: 1000; border-bottom: 2px solid var(--gray-200); box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
    .nav-inner { display: flex; justify-content: space-between; align-items: center; height: 74px; }
    .brand-logo { display: flex; align-items: center; gap: 0.75rem; font-weight: 900; font-size: 1.5rem; color: var(--primary); letter-spacing: -0.02em; }
    .brand-badge { background: linear-gradient(135deg, #C2410C, #EA580C); color: #FFFFFF; font-size: 0.7rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 4px; font-family: var(--mono); }
    .nav-menu { display: flex; gap: 0.4rem; align-items: center; }
    .nav-link { padding: 0.65rem 1rem; font-weight: 700; font-size: 0.95rem; color: #1E293B; border-radius: var(--radius-sm); transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.4rem; }
    .nav-link:hover { color: var(--primary); background: #EFF6FF; }
    .nav-link.active { color: var(--primary); background: #DBEAFE; font-weight: 800; }
    .nav-link.highlight { color: #C2410C; background: #FFEDD5; }
    .nav-link.highlight:hover { background: #FED7AA; color: #9A3412; }

    .nav-actions { display: flex; align-items: center; gap: 0.75rem; }
    .btn-quote { background: var(--primary); color: #FFFFFF; font-weight: 800; font-size: 0.92rem; padding: 0.7rem 1.35rem; border-radius: 8px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 12px rgba(30,58,138,0.3); }
    .btn-quote:hover { background: #172554; transform: translateY(-1px); color:#FFFFFF; }

    /* Quick Jump Subnav */
    .subnav-bar { background: #FFFFFF; border-bottom: 2px solid var(--gray-200); position: sticky; top: 74px; z-index: 990; overflow-x: auto; box-shadow: 0 2px 5px rgba(0,0,0,0.03); }
    .subnav-inner { display: flex; gap: 0.6rem; padding: 0.75rem 0; min-width: max-content; }
    .subnav-btn { font-size: 0.85rem; font-weight: 800; color: #1E293B; padding: 0.45rem 1rem; border-radius: 100px; background: #F1F5F9; border: 1px solid #CBD5E1; transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.35rem; }
    .subnav-btn:hover { background: var(--primary); color: #FFFFFF; border-color: var(--primary); }

    /* Hero Section */
    .spec-hero {
      background: linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E293B 100%);
      color: #FFFFFF;
      padding: 5rem 0 5.5rem;
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid rgba(255,255,255,0.15);
    }
    .spec-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 80% 20%, rgba(234,88,12,0.22) 0%, transparent 60%),
                  radial-gradient(circle at 20% 80%, rgba(59,130,246,0.22) 0%, transparent 60%);
      pointer-events: none;
    }
    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      backdrop-filter: blur(8px);
      padding: 0.5rem 1.1rem;
      border-radius: 100px;
      font-size: 0.88rem;
      font-weight: 800;
      color: #BAE6FD;
      margin-bottom: 1.35rem;
      font-family: var(--mono);
    }
    .hero-title { font-size: 2.85rem; font-weight: 900; line-height: 1.25; letter-spacing: -0.03em; margin-bottom: 1.35rem; color: #FFFFFF; }
    .hero-title span { color: #FB923C; }
    .hero-desc { font-size: 1.18rem; color: #F1F5F9; max-width: 880px; line-height: 1.8; margin-bottom: 2.2rem; font-weight: 500; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
    
    .hero-badges { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2.5rem; }
    .hero-badge {
      background: rgba(15,23,42,0.85);
      border: 1.5px solid rgba(255,255,255,0.25);
      padding: 0.55rem 1.1rem;
      border-radius: 8px;
      font-size: 0.88rem;
      font-weight: 700;
      color: #FFFFFF;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .hero-quick-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-hero-primary { background: linear-gradient(135deg, #EA580C, #C2410C); color: #FFFFFF; font-weight: 900; padding: 1rem 2rem; border-radius: 10px; font-size: 1.05rem; box-shadow: 0 10px 25px rgba(234,88,12,0.45); display: inline-flex; align-items: center; gap: 0.5rem; transition: transform 0.2s; }
    .btn-hero-primary:hover { transform: translateY(-2px); color: #FFFFFF; }
    .btn-hero-secondary { background: rgba(255,255,255,0.18); border: 1.5px solid rgba(255,255,255,0.4); color: #FFFFFF; font-weight: 800; padding: 1rem 1.8rem; border-radius: 10px; font-size: 1rem; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.2s; backdrop-filter: blur(8px); }
    .btn-hero-secondary:hover { background: rgba(255,255,255,0.3); color: #FFFFFF; }

    /* Section Styles */
    section { padding: 5rem 0; }
    .section-header { text-align: center; max-width: 880px; margin: 0 auto 3.5rem; }
    .section-tag { font-family: var(--mono); font-size: 0.85rem; font-weight: 900; color: #C2410C; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.6rem; display: block; }
    .section-title { font-size: 2.35rem; font-weight: 900; color: #020617; letter-spacing: -0.02em; margin-bottom: 0.95rem; }
    .section-subtitle { font-size: 1.1rem; color: #334155; line-height: 1.75; font-weight: 500; }

    /* White Paper Technical Box */
    .whitepaper-box {
      background: #FFFFFF;
      border: 2px solid #E2E8F0;
      border-radius: var(--radius-lg);
      padding: 3.2rem;
      box-shadow: var(--shadow);
      margin-bottom: 3.5rem;
    }
    .wp-header { display: flex; align-items: center; gap: 1.2rem; border-bottom: 2px solid #E2E8F0; padding-bottom: 1.5rem; margin-bottom: 2rem; }
    .wp-icon-ring { width: 56px; height: 56px; border-radius: 12px; background: #DBEAFE; color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.75rem; flex: none; font-weight: 900; }
    .wp-title-wrap h3 { font-size: 1.55rem; font-weight: 900; color: #020617; margin-bottom: 0.35rem; }
    .wp-title-wrap p { font-size: 0.92rem; color: #475569; font-weight: 600; }

    .wp-content h4 { font-size: 1.25rem; font-weight: 900; color: #1E3A8A; margin: 2rem 0 0.85rem; display: flex; align-items: center; gap: 0.55rem; }
    .wp-content p { font-size: 1rem; color: #1E293B; line-height: 1.8; margin-bottom: 1.1rem; font-weight: 500; }

    /* Property Cards Grid (Key Measurements) */
    .prop-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.8rem; margin: 2rem 0; }
    .prop-card {
      background: #FFFFFF;
      border: 2px solid #E2E8F0;
      border-radius: var(--radius);
      padding: 2rem;
      box-shadow: var(--shadow-sm);
      transition: all 0.25s ease;
      display: flex;
      flex-direction: column;
    }
    .prop-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); border-color: var(--primary); }
    .prop-badge { font-family: var(--mono); font-size: 0.76rem; font-weight: 900; padding: 0.3rem 0.7rem; border-radius: 4px; background: #DBEAFE; color: #1E3A8A; display: inline-block; margin-bottom: 0.85rem; }
    .prop-title { font-size: 1.22rem; font-weight: 900; color: #020617; margin-bottom: 0.5rem; }
    .prop-desc { font-size: 0.95rem; color: #334155; line-height: 1.7; margin-bottom: 1.2rem; flex: 1; font-weight: 500; }

    /* Math Formula Block Styles (Ultra High Contrast) */
    .formula-box {
      background: #090D16;
      border: 2px solid #334155;
      border-left: 5px solid #EA580C;
      border-radius: 8px;
      padding: 1.4rem 1.8rem;
      margin: 1.2rem 0;
      color: #FFFFFF;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.4);
    }
    .formula-title {
      font-size: 0.85rem;
      font-weight: 900;
      color: #FB923C;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .formula-main {
      font-family: var(--mono);
      font-size: 1.2rem;
      font-weight: 800;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.6rem;
      padding: 0.4rem 0 0.75rem;
    }
    .math-sym { font-size: 1.3rem; font-weight: 900; color: #93C5FD; }
    .math-frac {
      display: inline-flex;
      flex-direction: column;
      vertical-align: middle;
      text-align: center;
      padding: 0 0.4rem;
      font-size: 0.98rem;
    }
    .math-num { border-bottom: 2px solid #E2E8F0; padding-bottom: 3px; font-weight: 800; color: #FFFFFF; }
    .math-den { padding-top: 3px; font-weight: 800; color: #E2E8F0; }
    .math-unit { font-size: 0.9rem; color: #CBD5E1; font-weight: 600; margin-left: 0.5rem; }
    .formula-desc { font-size: 0.88rem; color: #CBD5E1; border-top: 1px solid #334155; padding-top: 0.6rem; margin-top: 0.4rem; font-weight: 500; }
    .formula-desc strong { color: #FFFFFF; font-weight: 800; }

    .alert-box-info {
      background: #EFF6FF;
      border: 2px solid #93C5FD;
      border-radius: 8px;
      padding: 1.4rem 1.8rem;
      color: #1E3A8A;
      font-size: 0.98rem;
      line-height: 1.75;
      margin: 1.8rem 0;
      display: flex;
      gap: 0.85rem;
      align-items: flex-start;
      font-weight: 500;
    }
    .alert-box-info strong { color: #0F172A; font-weight: 900; }

    /* Card Grid */
    .spec-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 2rem; }
    .spec-card {
      background: #FFFFFF;
      border: 2px solid #E2E8F0;
      border-radius: var(--radius);
      padding: 2.2rem;
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .spec-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary);
    }
    .spec-card.highlight {
      border: 2.5px solid #EA580C;
      background: linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%);
    }
    .spec-badge-top {
      position: absolute;
      top: -14px;
      right: 20px;
      background: #EA580C;
      color: #FFFFFF;
      font-family: var(--mono);
      font-size: 0.78rem;
      font-weight: 900;
      padding: 0.35rem 0.95rem;
      border-radius: 100px;
      box-shadow: 0 4px 12px rgba(234,88,12,0.4);
    }
    .spec-card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.1rem; }
    .spec-type-tag { font-family: var(--mono); font-size: 0.85rem; font-weight: 900; color: var(--primary); background: #DBEAFE; padding: 0.35rem 0.75rem; border-radius: 4px; }
    .spec-title { font-size: 1.35rem; font-weight: 900; color: #020617; margin-bottom: 0.4rem; }
    .spec-subtitle { font-size: 0.92rem; color: #475569; margin-bottom: 1.35rem; font-weight: 700; }
    
    .spec-metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
      background: #F1F5F9;
      border: 1.5px solid #CBD5E1;
      border-radius: 8px;
      padding: 1.1rem;
      margin-bottom: 1.35rem;
    }
    .metric-item { display: flex; flex-direction: column; }
    .metric-label { font-size: 0.78rem; color: #475569; font-weight: 700; margin-bottom: 0.2rem; }
    .metric-val { font-family: var(--mono); font-size: 1.05rem; font-weight: 900; color: #020617; }
    .metric-val.accent { color: #C2410C; }

    .spec-dim-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; margin-bottom: 1.35rem; }
    .spec-dim-table th, .spec-dim-table td { padding: 0.55rem 0.6rem; border-bottom: 1px solid #E2E8F0; }
    .spec-dim-table th { color: #334155; font-weight: 800; text-align: left; }
    .spec-dim-table td { font-family: var(--mono); font-weight: 800; text-align: right; color: #020617; }

    .spec-desc { font-size: 0.95rem; color: #1E293B; line-height: 1.7; margin-bottom: 1.6rem; flex: 1; font-weight: 500; }
    .spec-desc strong { color: #020617; font-weight: 900; }
    .spec-btn-action {
      margin-top: auto;
      background: #F1F5F9;
      color: var(--primary);
      border: 2px solid #CBD5E1;
      font-weight: 800;
      font-size: 0.92rem;
      padding: 0.85rem 1rem;
      border-radius: 8px;
      text-align: center;
      transition: all 0.2s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
    }
    .spec-btn-action:hover { background: var(--primary); color: #FFFFFF; border-color: var(--primary); }
    .spec-card.highlight .spec-btn-action { background: #EA580C; color: #FFFFFF; border-color: #EA580C; }
    .spec-card.highlight .spec-btn-action:hover { background: #C2410C; border-color: #C2410C; }

    /* Comparison Table Section */
    .table-container { background: #FFFFFF; border: 2px solid #E2E8F0; border-radius: var(--radius); overflow-x: auto; box-shadow: var(--shadow-sm); }
    .full-comp-table { width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left; min-width: 960px; }
    .full-comp-table th { background: #0F172A; color: #FFFFFF; padding: 1.2rem 1.3rem; font-weight: 800; font-family: var(--mono); font-size: 0.85rem; }
    .full-comp-table td { padding: 1.2rem 1.3rem; border-bottom: 1px solid #E2E8F0; color: #1E293B; font-weight: 600; }
    .full-comp-table tr:hover td { background: #F8FAFC; }
    .full-comp-table tr.highlight td { background: #FFF7ED; font-weight: 800; color: #020617; }
    .badge-opt { background: #DCFCE7; color: #14532D; font-size: 0.76rem; font-weight: 900; padding: 0.25rem 0.6rem; border-radius: 4px; font-family: var(--mono); }

    /* FAQ Accordion Styles (High Contrast) */
    .faq-container-box {
      background: #FFFFFF;
      border: 2px solid #CBD5E1;
      border-radius: var(--radius-lg);
      padding: 3.2rem 2.6rem;
      box-shadow: var(--shadow);
      margin: 2.5rem 0;
    }
    .faq-controls-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 2rem;
      padding-bottom: 1.6rem;
      border-bottom: 2px solid #E2E8F0;
    }
    .faq-search-wrap {
      flex: 1;
      min-width: 280px;
      position: relative;
    }
    .faq-search-input {
      width: 100%;
      padding: 0.85rem 1rem 0.85rem 2.8rem;
      border: 2px solid #CBD5E1;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #020617;
      outline: none;
      transition: all 0.2s;
      background: #F8FAFC;
    }
    .faq-search-input:focus {
      border-color: var(--primary);
      background: #FFFFFF;
      box-shadow: 0 0 0 3px rgba(30,58,138,0.15);
    }
    .faq-search-icon {
      position: absolute;
      left: 1.1rem;
      top: 50%;
      transform: translateY(-50%);
      color: #64748B;
      font-size: 1.1rem;
    }
    .faq-btn-toggle-all {
      background: #F1F5F9;
      border: 2px solid #CBD5E1;
      color: #0F172A;
      font-size: 0.88rem;
      font-weight: 800;
      padding: 0.75rem 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
    }
    .faq-btn-toggle-all:hover {
      background: var(--primary);
      color: #FFFFFF;
      border-color: var(--primary);
    }
    .faq-accordion-group { display: flex; flex-direction: column; gap: 1.1rem; }
    .faq-item {
      background: #FFFFFF;
      border: 2px solid #CBD5E1;
      border-radius: var(--radius);
      overflow: hidden;
      transition: all 0.25s ease;
      box-shadow: var(--shadow-sm);
    }
    .faq-item:hover { border-color: var(--primary); box-shadow: var(--shadow); }
    .faq-item[open] { border-color: var(--primary); background: #FFFFFF; box-shadow: var(--shadow); }
    .faq-item summary {
      padding: 1.35rem 1.75rem;
      font-size: 1.08rem;
      font-weight: 800;
      color: #020617;
      cursor: pointer;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      transition: background 0.2s;
      background: #F8FAFC;
    }
    .faq-item summary::-webkit-details-marker { display: none; }
    .faq-item summary:hover { background: #EFF6FF; }
    .faq-item[open] summary { background: #DBEAFE; color: #1E3A8A; font-weight: 900; border-bottom: 2px solid #BFDBFE; }
    .faq-q-text { display: flex; align-items: center; gap: 0.85rem; flex: 1; padding-right: 1rem; }
    .faq-expand-badge {
      font-family: var(--mono);
      font-size: 0.8rem;
      font-weight: 900;
      padding: 0.35rem 0.8rem;
      border-radius: 100px;
      background: #E2E8F0;
      color: #0F172A;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      flex: none;
      transition: all 0.2s;
    }
    .faq-item[open] .faq-expand-badge {
      background: var(--primary);
      color: #FFFFFF;
    }
    .faq-answer {
      padding: 1.75rem 2rem;
      font-size: 1rem;
      color: #0F172A;
      line-height: 1.85;
      background: #FFFFFF;
      font-weight: 500;
    }
    .faq-answer strong { color: #020617; font-weight: 900; }
    .faq-answer p { margin-bottom: 0.95rem; }
    .faq-answer p:last-child { margin-bottom: 0; }
    .faq-answer ul { padding-left: 1.5rem; margin: 0.75rem 0; }
    .faq-answer li { margin-bottom: 0.5rem; }
    .faq-tag { font-family: var(--mono); font-size: 0.75rem; font-weight: 900; padding: 0.25rem 0.6rem; border-radius: 4px; background: #DBEAFE; color: #1E3A8A; border: 1px solid #BFDBFE; }

    /* Interactive Estimator */
    .estimator-card {
      background: linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E293B 100%);
      color: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 3.5rem 3rem;
      box-shadow: var(--shadow-xl);
      border: 2px solid rgba(255,255,255,0.2);
      margin: 2rem 0;
    }
    .estimator-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: center; }
    @media (max-width: 900px) { .estimator-grid { grid-template-columns: 1fr; } }
    
    .form-group { margin-bottom: 1.35rem; }
    .form-label { display: block; font-size: 0.92rem; font-weight: 800; color: #E2E8F0; margin-bottom: 0.55rem; }
    .form-select, .form-input {
      width: 100%;
      background: rgba(255,255,255,0.12);
      border: 1.5px solid rgba(255,255,255,0.35);
      color: #FFFFFF;
      padding: 0.9rem 1.1rem;
      border-radius: 8px;
      font-size: 0.96rem;
      font-family: var(--font);
      font-weight: 600;
      outline: none;
      transition: border 0.2s;
    }
    .form-select option { background: #0F172A; color: #FFFFFF; }
    .form-select:focus, .form-input:focus { border-color: #FB923C; background: rgba(255,255,255,0.18); }

    .calc-result-box {
      background: rgba(15,23,42,0.75);
      border: 2px solid rgba(255,255,255,0.25);
      border-radius: var(--radius);
      padding: 2.4rem;
      backdrop-filter: blur(12px);
    }
    .res-row { display: flex; justify-content: space-between; align-items: center; padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.15); }
    .res-row:last-child { border-bottom: none; }
    .res-label { font-size: 0.95rem; color: #CBD5E1; font-weight: 700; }
    .res-val { font-family: var(--mono); font-size: 1.25rem; font-weight: 900; color: #FB923C; }

    /* Order Form */
    .order-section { background: #FFFFFF; border: 2px solid #CBD5E1; border-radius: var(--radius-lg); padding: 3.5rem 3rem; margin-top: 3rem; box-shadow: var(--shadow); }
    .form-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.35rem; margin-bottom: 1.35rem; }
    .input-field { width: 100%; border: 2px solid #CBD5E1; border-radius: 8px; padding: 0.9rem 1.1rem; font-size: 0.98rem; font-family: var(--font); font-weight: 600; color: #020617; outline: none; transition: all 0.2s; background: #F8FAFC; }
    .input-field:focus { border-color: var(--primary); background: #FFFFFF; box-shadow: 0 0 0 3px rgba(30,58,138,0.15); }
    .btn-submit-order { width: 100%; background: linear-gradient(135deg, var(--primary), #172554); color: #FFFFFF; border: none; padding: 1.2rem; border-radius: 8px; font-weight: 900; font-size: 1.12rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 8px 20px rgba(30,58,138,0.35); display: flex; align-items: center; justify-content: center; gap: 0.55rem; }
    .btn-submit-order:hover { transform: translateY(-2px); box-shadow: 0 12px 25px rgba(30,58,138,0.45); }

    /* Footer */
    footer { background: #020617; color: #CBD5E1; padding: 4.5rem 0 2rem; border-top: 2px solid rgba(255,255,255,0.15); font-size: 0.92rem; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3rem; margin-bottom: 3.5rem; }
    @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr; } }
    .footer-col h5 { color: #FFFFFF; font-size: 1.1rem; font-weight: 900; margin-bottom: 1.35rem; }
    .footer-links-list { list-style: none; }
    .footer-links-list li { margin-bottom: 0.75rem; }
    .footer-links-list a { color: #CBD5E1; font-weight: 600; transition: color 0.2s; }
    .footer-links-list a:hover { color: #FFFFFF; text-decoration: underline; }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,0.15); padding-top: 2rem; text-align: center; font-size: 0.85rem; color: #94A3B8; font-weight: 500; }
"""

# Replace entire style block
style_pattern = re.compile(r'<style>.*?</style>', re.DOTALL)
html = style_pattern.sub(f'<style>\n{high_contrast_css}\n  </style>', html)

with open("scratch/specimens_template.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Applied High Contrast CSS successfully!")
