import os, sys, re

print("=== Upgrading specimens_template.html with Beautiful Math Formulas & KaTeX ===")

with open("scratch/specimens_template.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add KaTeX in <head>
katex_head = """  <!-- KaTeX Math Rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
"""

if "katex.min.css" not in html:
    html = html.replace("<!-- CSS -->", katex_head + "  <!-- CSS -->")

# 2. Add Math Formula CSS in <style>
math_css = """
    /* Math Formula Block Styles */
    .formula-box {
      background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
      border: 1px solid rgba(255,255,255,0.12);
      border-left: 4px solid var(--accent);
      border-radius: 8px;
      padding: 1.4rem 1.8rem;
      margin: 1.4rem 0 1.8rem;
      color: #F8FAFC;
    }
    .formula-title {
      font-size: 0.84rem;
      font-weight: 800;
      color: #F97316;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .formula-main {
      font-family: var(--mono);
      font-size: 1.15rem;
      font-weight: 700;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.6rem;
      padding: 0.4rem 0 0.8rem;
    }
    .math-sym { font-size: 1.25rem; font-weight: 800; color: #60A5FA; }
    .math-frac {
      display: inline-flex;
      flex-direction: column;
      vertical-align: middle;
      text-align: center;
      padding: 0 0.35rem;
      font-size: 0.95rem;
    }
    .math-num { border-bottom: 1.5px solid #94A3B8; padding-bottom: 2px; font-weight: 700; color: #F1F5F9; }
    .math-den { padding-top: 2px; font-weight: 700; color: #CBD5E1; }
    .math-unit { font-size: 0.88rem; color: #94A3B8; font-weight: 500; margin-left: 0.5rem; }
    .formula-desc { font-size: 0.85rem; color: #94A3B8; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.6rem; margin-top: 0.4rem; }
    .formula-desc strong { color: #E2E8F0; }
"""

if ".formula-box" not in html:
    html = html.replace("/* Card Grid */", math_css + "\n    /* Card Grid */")

# 3. Replace ASTM D638 Whitepaper Section with clean HTML & LaTeX
old_d638_section_start = '<!-- Engineering Deep Dive 1: ASTM D638 Comprehensive Guide -->'
old_d638_section_end = '<!-- Section: ASTM D638 5 Types Detailed Grid -->'

new_d638_section = """<!-- Engineering Deep Dive 1: ASTM D638 Comprehensive Guide -->
  <section id="d638-deepdive" class="container">
    <div class="section-header">
      <span class="section-tag">// Engineering Fundamentals & Testing Standards</span>
      <h2 class="section-title">ASTM D638 플라스틱 인장 시험 심층 공학 기술 가이드</h2>
      <p class="section-subtitle">
        고분자 재료의 기계적 거동을 정량화하기 위한 시험 원리, 5대 물성 파라미터 산출식 및 Instron UTM 장비 설정 프로토콜입니다.
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
          ASTM D638은 비보강 및 보강 플라스틱, 열가소성/열경화성 고분자, 3D 프린팅 조형물의 인장 물성을 평가하는 대표적인 국제 시험 규격입니다. 덤벨(Dog-bone) 형상의 시편에 일정한 속도로 인장 하중을 가하여 응력-변형률 곡선(Stress-Strain Curve)을 도출하며, 다음 5대 핵심 파라미터를 정밀 측정합니다.
        </p>

        <h4>1. 최종 인장강도 (Ultimate Tensile Strength, UTS / σ<sub>u</sub>)</h4>
        <p>
          시편이 인장 하중을 받아 파단될 때까지 견디는 최대 인장 하중(F<sub>max</sub>)을 초기 평행부 최소 단면적(A<sub>0</sub> = W × T)으로 나눈 값입니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-calculator"></i> 인장강도 산출식 (Tensile Strength Formula)</div>
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
            <span class="math-unit">[MPa 또는 N/mm²]</span>
          </div>
          <div class="formula-desc">
            (여기서 <strong>F<sub>max</sub></strong>: 최대 인장 하중 [N], <strong>W</strong>: 평행부 협소 폭 [mm], <strong>T</strong>: 시편 두께 [mm])
          </div>
        </div>

        <h4>2. 인장 탄성계수 (Young's Modulus / Tensile Modulus, E)</h4>
        <p>
          재료의 강성(Stiffness)을 나타내며, 응력-변형률 곡선의 초기 탄성 선형 구간(보통 변형률 0.05% ~ 0.25% 범위)에서의 기울기로 산출됩니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-graph-up"></i> 인장 탄성계수 산출식 (Hooke's Law Elastic Modulus)</div>
          <div class="formula-main">
            <span class="math-sym">E</span> = 
            <span class="math-frac">
              <span class="math-num">Δσ</span>
              <span class="math-den">Δε</span>
            </span> = 
            <span class="math-frac">
              <span class="math-num">σ<sub>2</sub> - σ<sub>1</sub></span>
              <span class="math-den">ε<sub>2</sub> - ε<sub>1</sub></span>
            </span>
            <span class="math-unit">[GPa 또는 MPa]</span>
          </div>
          <div class="formula-desc">
            (여기서 <strong>σ<sub>1</sub>, σ<sub>2</sub></strong>: 변형률 ε<sub>1</sub>=0.0005, ε<sub>2</sub>=0.0025 지점에서의 응력)
          </div>
        </div>

        <h4>3. 항복강도 및 0.2% 오프셋 항복점 (Yield Strength / 0.2% Offset Yield)</h4>
        <p>
          탄성 변형에서 영구적인 소성 변형으로 전이되는 임계 응력입니다. 뚜렷한 항복점이 나타나지 않는 고분자의 경우 0.2% (0.002) 변형률 오프셋 평행선을 그어 교차점을 항복강도로 산출합니다.
        </p>

        <h4>4. 파단 연신율 (Elongation at Break / Nominal Strain at Break, ε<sub>b</sub>)</h4>
        <p>
          시편이 파단되는 순간 초기 표점거리(Gage Length, L<sub>0</sub>) 대비 늘어난 변위의 백분율로, 재료의 연성(Ductility)과 신장 한계를 평가합니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-arrows-expand"></i> 파단 연신율 산출식 (Elongation at Break Formula)</div>
          <div class="formula-main">
            <span class="math-sym">ε<sub>b</sub></span> = 
            <span class="math-frac">
              <span class="math-num">L<sub>f</sub> - L<sub>0</sub></span>
              <span class="math-den">L<sub>0</sub></span>
            </span> × 100
            <span class="math-unit">[%]</span>
          </div>
          <div class="formula-desc">
            (여기서 <strong>L<sub>0</sub></strong>: 초기 표점거리 [mm], <strong>L<sub>f</sub></strong>: 파단 시점 표점거리 [mm])
          </div>
        </div>

        <h4>5. 포아송 비 (Poisson's Ratio, ν)</h4>
        <p>
          인장 하중에 따른 축방향 연신 변형률(ε<sub>yy</sub>)에 대한 횡방향 수축 변형률(ε<sub>xx</sub>)의 비율로, DIC(Digital Image Correlation) 광학 계측을 통해 실시간 2차원 텐서로 측정됩니다.
        </p>
        <div class="formula-box">
          <div class="formula-title"><i class="bi bi-aspect-ratio"></i> 포아송 비 산출식 (Poisson's Ratio Formula)</div>
          <div class="formula-main">
            <span class="math-sym">ν</span> = - 
            <span class="math-frac">
              <span class="math-num">ε<sub>transverse</sub></span>
              <span class="math-den">ε<sub>longitudinal</sub></span>
            </span> = - 
            <span class="math-frac">
              <span class="math-num">ε<sub>xx</sub></span>
              <span class="math-den">ε<sub>yy</sub></span>
            </span>
          </div>
          <div class="formula-desc">
            (일반 고분자 PLA/ABS: 0.33 ~ 0.38, 탄성 실리콘: 약 0.48 ~ 0.499)
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
"""

pattern_d638 = re.compile(f"{re.escape(old_d638_section_start)}.*?{re.escape(old_d638_section_end)}", re.DOTALL)
html = pattern_d638.sub(new_d638_section + "\n  " + old_d638_section_end, html)

# 4. Replace ASTM C1401 Whitepaper Section with clean HTML formulas
old_c1401_section_start = '<!-- Engineering Deep Dive 3: ASTM C1401 Structural Glazing Guide -->'
old_c1401_section_end = '<!-- Interactive Estimator 2.0 -->'

new_c1401_section = """<!-- Engineering Deep Dive 3: ASTM C1401 Structural Glazing Guide -->
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
  </section>
"""

pattern_c1401 = re.compile(f"{re.escape(old_c1401_section_start)}.*?{re.escape(old_c1401_section_end)}", re.DOTALL)
html = pattern_c1401.sub(new_c1401_section + "\n  " + old_c1401_section_end, html)

# 5. Add Auto-render init script at bottom
init_script = """
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
"""
if "renderMathInElement" not in html:
    html = html.replace("runSpecimenCalculation();", "runSpecimenCalculation();\n" + init_script)

with open("scratch/specimens_template.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Updated scratch/specimens_template.html with clean HTML/CSS math formulas successfully!")
