import os, sys, re

print("=== Upgrading FAQ Experience: Top Placement, Search Filter, Expand All/Collapse All, Expand Badge ===")

with open("scratch/specimens_template.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update CSS for FAQ
new_faq_css = """
    /* Premium Interactive FAQ Styles */
    .faq-container-box {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-lg);
      padding: 3rem 2.5rem;
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
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--gray-200);
    }
    .faq-search-wrap {
      flex: 1;
      min-width: 280px;
      position: relative;
    }
    .faq-search-input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.6rem;
      border: 1px solid var(--gray-300);
      border-radius: 8px;
      font-size: 0.92rem;
      outline: none;
      transition: all 0.2s;
    }
    .faq-search-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(30,58,138,0.1);
    }
    .faq-search-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--gray-400);
    }
    .faq-btn-toggle-all {
      background: var(--gray-100);
      border: 1px solid var(--gray-300);
      color: var(--gray-700);
      font-size: 0.85rem;
      font-weight: 700;
      padding: 0.65rem 1.1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }
    .faq-btn-toggle-all:hover {
      background: var(--primary);
      color: var(--white);
      border-color: var(--primary);
    }
    .faq-accordion-group { display: flex; flex-direction: column; gap: 1rem; }
    .faq-item {
      background: var(--gray-50);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius);
      overflow: hidden;
      transition: all 0.25s ease;
    }
    .faq-item:hover { border-color: var(--primary-light); background: var(--white); box-shadow: var(--shadow-sm); }
    .faq-item[open] { border-color: var(--primary); background: #FFFFFF; box-shadow: var(--shadow-sm); }
    .faq-item summary {
      padding: 1.25rem 1.6rem;
      font-size: 1.02rem;
      font-weight: 700;
      color: var(--dark);
      cursor: pointer;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      transition: background 0.2s;
    }
    .faq-item summary::-webkit-details-marker { display: none; }
    .faq-item summary:hover { background: rgba(30,58,138,0.03); }
    .faq-item[open] summary { background: rgba(30,58,138,0.05); color: var(--primary); font-weight: 800; border-bottom: 1px solid var(--gray-200); }
    .faq-q-text { display: flex; align-items: center; gap: 0.75rem; flex: 1; padding-right: 1rem; }
    .faq-expand-badge {
      font-family: var(--mono);
      font-size: 0.76rem;
      font-weight: 800;
      padding: 0.3rem 0.7rem;
      border-radius: 100px;
      background: var(--gray-200);
      color: var(--gray-700);
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      flex: none;
      transition: all 0.2s;
    }
    .faq-item[open] .faq-expand-badge {
      background: var(--primary);
      color: var(--white);
    }
    .faq-answer {
      padding: 1.5rem 1.8rem;
      font-size: 0.94rem;
      color: var(--gray-700);
      line-height: 1.8;
      background: #FFFFFF;
    }
    .faq-answer p { margin-bottom: 0.8rem; }
    .faq-answer p:last-child { margin-bottom: 0; }
    .faq-answer ul { padding-left: 1.3rem; margin: 0.6rem 0; }
    .faq-answer li { margin-bottom: 0.4rem; }
    .faq-tag { font-family: var(--mono); font-size: 0.72rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 4px; background: rgba(30,58,138,0.08); color: var(--primary); }
"""

# Replace existing FAQ CSS
pattern_faq_css = re.compile(r'/\* FAQ Accordion Styles \*/.*?(?=/\* Interactive Estimator \*/)', re.DOTALL)
html = pattern_faq_css.sub(new_faq_css + '\n    ', html)

# 2. Build the Complete Interactive FAQ Section
complete_faq_section = """<!-- SECTION: ASTM D638 Comprehensive 12 FAQs -->
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
"""

# Replace FAQ Section in HTML
pattern_faq_sec = re.compile(r'<!-- SECTION 7: ASTM D638 Comprehensive 12 FAQs -->.*?<!-- SECTION 8: Order Form -->', re.DOTALL)
if '<!-- SECTION 7: ASTM D638 Comprehensive 12 FAQs -->' in html:
    html = pattern_faq_sec.sub(complete_faq_section + '\n  <!-- SECTION 8: Order Form -->', html)
elif '<section class="container" id="faq">' in html:
    pattern_alt = re.compile(r'<section class="container" id="faq">.*?<!-- SECTION 8: Order Form -->', re.DOTALL)
    html = pattern_alt.sub(complete_faq_section + '\n  <!-- SECTION 8: Order Form -->', html)

# 3. Add FAQ Interactive JS functions
faq_js = """
    function toggleAllFaqs(shouldOpen) {
      const details = document.querySelectorAll('#faqAccordionGroup details');
      details.forEach(d => {
        d.open = shouldOpen;
      });
    }

    function filterFaqQuestions() {
      const q = document.getElementById('faqSearchInput').value.toLowerCase().trim();
      const items = document.querySelectorAll('#faqAccordionGroup .faq-item');
      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (!q || text.includes(q)) {
          item.style.display = 'block';
          if (q) item.open = true;
        } else {
          item.style.display = 'none';
        }
      });
    }
"""

if "toggleAllFaqs" not in html:
    html = html.replace("runSpecimenCalculation();", "runSpecimenCalculation();\n" + faq_js)

with open("scratch/specimens_template.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Upgraded specimens_template.html FAQ section successfully!")
