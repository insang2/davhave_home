# 📋 KCT 웹 개발 프로젝트 단계별 실행 계획 (Project Plan)

본 문서는 **한국건설트레이딩(KCT)** 웹 플랫폼 개발을 위한 단계별 개발 로드맵, 핵심 구현 기능, 마일스톤 및 품질 보증(QA) 계획을 정의합니다.

---

## 🗓️ 1. 개발 마일스톤 (Milestones)

```
[ Phase 1: 기획 및 데이터 설계 ] ──► [ Phase 2: UI/UX & 컴포넌트 설계 ] ──► [ Phase 3: 핵심 인터랙션 개발 ] ──► [ Phase 4: 배포 & 글로벌 SEO ]
  - 회사/제품 데이터 정형화              - 반응형 메가메뉴 & 네비게이션             - 다이나믹 산업/제품 필터링           - Lighthouse 95+ 성능 최적화
  - KCC식 적용산업 분류 정의             - 히어로 & 신뢰도 섹션 디자인              - 실리콘 소요량 계산기               - Schema.org 구조화 데이터
  - 조인트 계산기 수식 도출              - B2B 견적 및 모달 시스템                 - WhatsApp & 이메일 발송 연동       - 다국어(KO/EN/JA) 메타태그
```

---

## 🚀 2. 단계별 세부 실행 계획

### Phase 1: 정보 구조화 및 데이터 모델링 (Data Architecture)
- **회사 정보 정밀 반영**:
  - 한국건설트레이딩 정식 상호, 사업자번호(371-07-03719), 송파 가든파이브 본사 위치 및 연락처 정형화.
- **적용분야(Application) 7대 카테고리 분류** (KCC실리콘 벤치마크):
  1. 커튼월 및 외장 판넬 (Curtain Wall & Exterior Panels)
  2. 창호 및 일반 글레이징 (Window & General Glazing)
  3. 복층유리 2차 실링 (Insulating Glass Secondary Seal)
  4. 내화 및 방화 구획 실링 (Firestop & Fire-rated Joint)
  5. 위생 및 욕실/클린룸 방균 (Sanitary & Anti-mold Bio)
  6. 토목/도로 및 콘크리트 조인트 (Civil & Concrete Joint)
  7. 산업용 고강도 접착 및 특수 실리콘 코팅 (Industrial & Waterproofing)
- **제품군(Products) 스펙 데이터베이스 구축**:
  - 대표 제품 라인업 (Dow 실란트 시리즈, 내후성/구조용/방화용/무초산/바이오 실란트).
  - 물성표 (경화 방식, 인장강도, 신율, 복원율, 이동 허용치, 포장 단위).

---

### Phase 2: UI/UX 디자인 및 레이아웃 구축 (Frontend Design)
- **모던 엔터프라이즈 디자인 테마**:
  - 신뢰감을 주는 딥 네이비(`Primary: #1558D6`, `Dark: #0F172A`)와 포인트 오렌지/골드 컬러 시스템.
  - 가독성 높은 폰트 조합 (Pretendard / Poppins).
- **글로벌 스탠다드 네비게이션 (GNB & Mega Menu)**:
  - 데스크톱: 마우스 호버 시 펼쳐지는 KCC 스타일의 직관적인 2Depth 메가 메뉴.
  - 모바일: 오프캔버스 햄버거 메뉴 및 터치 친화적 아코디언 네비게이션.
- **반응형 히어로 섹션**:
  - 현장감 넘치는 고화질 건설/커튼월 배경 및 신뢰도 배지(Dow 공식 소싱, 24h 견적).

---

### Phase 3: 핵심 인터랙티브 기능 구현 (Interactive Engineering)
- **1. 동적 산업/제품 필터링 시스템 (Dynamic Isotope/Grid Filter)**:
  - '전체보기(Show All)' 및 각 적용산업 버튼 클릭 시 부드러운 애니메이션과 함께 관련 솔루션 카드만 즉시 필터링.
- **2. 실리콘 소요량 자동 계산기 (Silicone Joint Volume Calculator)**:
  - 입력값: 조인트 폭(Width mm), 조인트 깊이(Depth mm), 총 시공 길이(Length M).
  - 산출값: 총 소요 부피(Liter), 필요 카트리지(300ml) 수량, 필요 소시지(500ml) 수량 (할증률 10% 자동 포함).
- **3. 스마트 B2B 견적 요청 폼 (Smart B2B Quote Form)**:
  - 현장 담당자가 제품군 선택, 수량, 현장 주소 입력 시 즉시 영업팀 이메일 및 백엔드로 전송.
  - WhatsApp 1-Click 다이렉트 상담 버튼 연동.

---

### Phase 4: 글로벌 SEO & 배포 최적화 (Launch & Optimization)
- **Search Engine Optimization (SEO)**:
  - 네이버 서치어드바이저 및 구글 서치콘솔 최적화 메타 태그, `robots.txt`, `sitemap.xml`.
  - JSON-LD 구조화 데이터 (`Organization`, `LocalBusiness`, `Product`, `FAQPage`).
- **웹 성능 최적화**:
  - Core Web Vitals (LCP, FID, CLS) 지표 최상위 달성 (Lighthouse 점수 95+).
  - 이미지 최적화 (WebP / SVG) 및 폰트 사전 로드(preconnect).
