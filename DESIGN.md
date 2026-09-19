---
name: DAVHAVE Precision Engineering System
description: High-performance edge studio and paper-grade laboratory design system
colors:
  bg-dark: "#0a0908"
  surface-dark: "#16130f"
  text-light: "#f2ede4"
  muted-warm: "#9a8f80"
  accent-orange: "#ff6b35"
  accent-amber: "#f2c879"
  border-dark: "rgba(242, 237, 228, 0.09)"
  bg-white: "#ffffff"
  bg-gray: "#f8fafc"
  bg-box: "#f1f5f9"
  text-black: "#000000"
  text-main: "#0f172a"
  text-sub: "#1e293b"
  primary-navy: "#0f2d6b"
  accent-terracotta: "#b43403"
  border-solid: "#0f172a"
  border-light: "#cbd5e1"
typography:
  display:
    fontFamily: "'DH Display', 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Pretendard', -apple-system, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 3.5vw, 1.95rem)"
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Pretendard', -apple-system, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 900
    lineHeight: 1.4
  body:
    fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif"
    fontSize: "0.98rem"
    fontWeight: 500
    lineHeight: 1.8
  mono:
    fontFamily: "'DH Mono', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.82rem"
    fontWeight: 700
    letterSpacing: "0.05em"
rounded:
  none: "0px"
  xxs: "2px"
  xs: "3px"
  sm: "4px"
  md: "6px"
  lg: "12px"
  xl: "18px"
  full: "100px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary-navy}"
    textColor: "{colors.bg-white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-accent:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.bg-dark}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
---

# Design System: DAVHAVE Precision Engineering System

## Overview

**Creative North Star: "The Precision Engineering Laboratory"**

DAVHAVE의 디자인 시스템은 첨단 소프트웨어 개발 스튜디오의 정체성과 실물 산업 도메인의 정밀성을 아우르는 **이중 구획(Dual-Domain) 아키텍처**를 채택합니다. 감성적이고 몰입감 있는 메인 쇼케이스와 엄격한 수치 검증이 요구되는 엔지니어링 계산기·시편제작 허브가 각자의 목표에 최적화된 시각적 문법을 구사합니다.

1. **The Edge Studio (Dark Sanctuary)**: 메인 홈, 포트폴리오, 철학, 서비스 페이지는 딥 보이드 블랙(`#0a0908`)과 솔라 오렌지(`#ff6b35`) 액센트, 블러 글래스모피즘 캡슐 네비게이션을 통해 초경량 0ms 반응성과 미래지향적 사이버네틱 무드를 전달합니다.
2. **The Research Lab (White Paper)**: KCT 실리콘 플랫폼, ASTM D638/C1401 시편제작 센터, 정책 문서는 학술 논문 및 공학 백서 표준을 따릅니다. 순백색(`#ffffff`) 배경 위에 **100% 잉크 블랙(`#000000`)**과 클래식 엔지니어링 네이비(`#0f2d6b`), 테라코타 오렌지(`#b43403`), IEEE/Nature 스타일 3선 표(Three-line table)를 배치하여 어떤 환경에서도 번짐 없는 극대화된 시인성을 보장합니다.

**Key Characteristics:**
- **Zero Ambiguity**: 회색 톤으로 타협하지 않는 확실한 고대비(WCAG AAA 21:1 만족).
- **Tactile, Dense & Confident**: 부유하는 모호함 대신 2px 솔리드 라인과 3px 하드 섀도우를 통한 단단한 물리적 존재감.
- **Mobile-First Compactness**: 모바일 화면에서 불필요한 시야 차단을 없앤 슬림 헤더와 스와이프 칩 네비게이션.

---

## Colors

시스템은 상황에 따라 두 가지 엄격한 팔레트를 적용하며, 색상은 감상이 아닌 정보의 기능적 위계를 위해서만 사용됩니다.

### Primary
- **Classic Engineering Navy** (`#0f2d6b`): 연구소 백서의 주기둥. 신뢰성 있는 기술 헤더, 주요 동작 버튼, 강조 배지에 사용.
- **Deep Void Black** (`#0a0908`): 다크 스튜디오의 캔버스. 깊이 있는 암전 배경.

### Secondary (Accents)
- **Solar Orange** (`#ff6b35`): 다크 모드의 핵심 불꽃. 로고 강조, 활성 태그, 시선 유도 CTA.
- **Terracotta Ochre** (`#b43403`): 백서 모드의 기술 인디케이터. 수식 박스 좌측 강조선, 주요 공학 수치 표기.
- **Golden Amber** (`#f2c879`): 프로젝트 링크, 주요 메타데이터 하이라이트.

### Neutral
- **Ink Black** (`#000000`): 백서 모드의 모든 본문 텍스트, 3선 표 상하단 보더, 견고한 2px 컴포넌트 외곽선.
- **Dark Charcoal** (`#0f172a`): 다크 모드 톱바 및 백서 모드의 서브 헤딩.
- **Warm Off-White** (`#f2ede4`): 다크 모드의 주 텍스트. 눈부심 없는 자연스러운 판독감.
- **Pure White** (`#ffffff`): 백서 모드의 주 배경 및 카드 배경.
- **Slate Gray** (`#f8fafc`, `#f1f5f9`): 수식 박스 배경, 테이블 헤더 음영, 호버 상태 배경.

### Named Rules
**The Ink-Black Rule.** 연구용/공학용 백서 페이지에서는 흐릿한 회색 폰트(`#64748B` 등) 사용을 엄격히 금지합니다. 모든 본문과 수치 텍스트는 반드시 `#000000` 또는 `#0f172a`를 사용하여 종이에 인쇄된 활자 수준의 또렷한 시인성을 유지해야 합니다.

---

## Typography

**Display Font:** 'DH Display' (Bricolage Grotesque, 800 weight) / 'Pretendard' (900 weight)  
**Body Font:** 'Pretendard' / System Neo Grotesque (`-apple-system`, `BlinkMacSystemFont`)  
**Code/Data Font:** 'DH Mono' / 'JetBrains Mono' (Fixed-width numerals)  

**Character:** 구조적이며 단호한 지오메트릭 고딕과 엄격한 모노스페이스의 결합으로, 테크니컬한 공학 문서의 정밀성과 현대적인 세련미를 동시에 발산합니다.

### Hierarchy
- **Display** (`800`, `clamp(1.8rem, 4vw, 2.6rem)`, `line-height: 1.15`): 메인 랜딩 및 히어로 타이틀.
- **Headline / Section Title** (`900`, `clamp(1.4rem, 3.5vw, 1.95rem)`, `line-height: 1.3`): 섹션 주요 제목.
- **Title / Card Heading** (`900`, `1.15rem ~ 1.35rem`, `line-height: 1.4`): 컴포넌트, 시편 카드, 아티클 제목.
- **Body** (`500 ~ 600`, `0.94rem ~ 0.98rem`, `line-height: 1.8`): 설명문 및 기술 분석 본문.
- **Label / Tag** (`800 ~ 900`, `0.72rem ~ 0.82rem`, `letter-spacing: 0.05em`, uppercase): 모노스페이스 기술 태그, 수식 기호, 스펙 라벨.

### Named Rules
**The Fixed-Width Numeral Rule.** 모든 공학 수치(치수 mm, 압력 MPa, 연신율 %, 계산기 결과)는 줄바꿈이나 너비 떨림 방지를 위해 반드시 고정폭 모노스페이스 폰트(`JetBrains Mono`)로 렌더링합니다.

---

## Layout

**Container Grid:** 최대 폭 `1200px` (백서 및 B2B 도구) / `820px` (블로그 및 단일 아티클 칼럼).  
**Padding:** 데스크톱 `0 1.5rem`, 모바일 `< 768px` 환경 `0 1rem` ~ `1.1rem`.  
**Responsive Strategy:**
- 모바일 환경에서 상단 네비게이션 높이를 `58px`로 컴팩트화하여 작업 영역 시야를 극대화.
- 퀵점프 탭바는 모바일에서 `-webkit-overflow-scrolling: touch` 및 `scrollbar-width: none`을 적용한 터치 칩 스와이프 바 형태로 렌더링.
- 모든 비교표와 계산식 테이블은 가로 스크롤(`overflow-x: auto`)을 제공하여 모바일 화면 깨짐 방지.

---

## Elevation & Depth

이 시스템은 인위적인 블러 그림자를 지양하고 **구조적 솔리드 테두리와 하드 섀도우(Hard Shadow)**를 통해 깊이를 표현합니다.

### Shadow Vocabulary
- **Hard Technical Shadow** (`box-shadow: 3px 3px 0px #0f172a`): 카드, 백서 박스, FAQ 아코디언의 기본 상태.
- **Elevated Hover Shadow** (`box-shadow: 6px 6px 0px #0f172a`, `transform: translate(-2px, -2px)`): 카드 호버 인터랙션.
- **Glassmorphic Glow (Dark Mode only)** (`box-shadow: 0 16px 50px rgba(0,0,0,.45), 0 0 20px rgba(255,107,53,.08)`): 플로팅 캡슐 네브바.

### Named Rules
**The Physical Surface Rule.** 백서 모드에서 엘리먼트의 깊이는 부드러운 그림자가 아닌 솔리드 2px 오프셋 섀도우(`3px 3px 0px #0F172A`)로 표현하여, 도면과 인쇄물의 물리적 두께감을 구현합니다.

---

## Shapes

- **Radius Scale:**
  - `xs (3px) / sm (4px)`: 배지, 태그, 입력 필드, 아코디언 모서리.
  - `md (6px)`: 기술 카드, 백서 박스, 테이블 외곽선.
  - `full (100px)`: 캡슐형 퀵점프 칩, 언어 전환 토글 버튼.
- **Border Grammar:** 모든 인터랙티브 및 독립 컨테이너는 기본 `2px solid #0f172a` (또는 하이라이트 시 `2.5px solid #b43403`) 테두리를 가집니다.

---

## Components

### Buttons
- **Shape:** `border-radius: 4px ~ 6px` (백서 모드) / `100px` (다크 캡슐 모드).
- **Primary:** 배경 `#0f2d6b`, 텍스트 `#ffffff`, 테두리 `2px solid #000000`, 폰트 `weight: 900`.
- **Accent:** 배경 `#b43403`, 텍스트 `#ffffff`, 호버 시 `#000000`으로 반전.
- **Secondary / Action:** 배경 `#ffffff`, 텍스트 `#0f2d6b`, 테두리 `2px solid #0f2d6b`, 호버 시 네이비 반전.

### Cards / Specimen Tiles
- **Corner & Border:** `border-radius: 6px`, `border: 2px solid #0f172a`, 배경 `#ffffff`.
- **Hover:** `transform: translate(-2px, -2px)`, `box-shadow: 6px 6px 0px #0f172a`.
- **Internal Padding:** `1.6rem ~ 1.8rem` (모바일 `1.2rem ~ 1.4rem`).

### Three-Line Tables (공학 3선 표)
- **Top Border:** `3px solid #000000`
- **Header Divider:** `2px solid #000000`
- **Bottom Border:** `3px solid #000000`
- **Row Divider:** `1px solid #cbd5e1`
- **Row Hover:** `background: #f8fafc`

### Math Formula Boxes (연구용 수식 박스)
- **Border:** `2px solid #0f172a`, 좌측 `6px solid #b43403` 오렌지 인디케이터.
- **Background:** `#f8fafc` 클린 슬레이트.
- **Formula Styling:** 그리스 기호 및 분자/분모 구분선 모두 굵은 `#000000` 잉크 폰트.

### FAQ Accordions
- **Summary:** 배경 `#f8fafc`, 폰트 `#000000` (900 weight), 우측에 `[Expand]` 뱃지 배치.
- **Open State:** 배경 `#dbeafe`, 텍스트 `#0f2d6b`, 하단 `2px solid #93c5fd` 구분선.
- **Answer:** 배경 `#ffffff`, 텍스트 `#000000` (line-height: 1.85), 모바일 최적화 패딩.

---

## Do's and Don'ts

### Do:
- **Do** 모든 기술 데이터 및 치수 단위(mm, MPa, % 등)는 `JetBrains Mono` 고정폭 폰트로 표기하십시오.
- **Do** 백서 모드에서는 배경 `#ffffff`와 글자색 `#000000` 간 21:1 최고 명암 대비를 준수하십시오.
- **Do** 모바일 뷰포트(`< 768px`)에서 네비게이션이 콘텐츠를 가리지 않도록 슬림 헤더와 스와이프 칩 UI를 적용하십시오.
- **Do** 공학적 신뢰성을 위해 복잡한 수식은 KaTeX 또는 네이티브 2px 분수 CSS 박스로 선명하게 분리하십시오.

### Don't:
- **Don't** 연구용 백서 페이지에서 흐릿한 중간 회색 폰트(`#64748B`, `#94A3B8`)를 본문 텍스트에 사용하지 마십시오.
- **Don't** 보더 없는 카드나 모호한 흐림 효과를 남발하지 마십시오 (항상 2px 솔리드 라인 유지).
- **Don't** KCT 플랫폼 및 산업 프로젝트 페이지에 금기 단어("정품", "공식")를 일절 포함하지 마십시오.
- **Don't** 개인 전화번호를 공개 웹페이지에 노출하지 마십시오 (온라인 의뢰 폼 및 공식 이메일 접수 유지).
