# 🏗️ 한국건설트레이딩 (KCT) 차세대 웹 플랫폼 개발 프로젝트

> **KOREA CONSTRUCTION TRADING (KCT) - Architectural Silicone & Industrial Solutions Platform**  
> 글로벌 실리콘 전문 유통·수출 기업 KCT의 프리미엄 B2B 웹 플랫폼 구축 프로젝트

---

## 📌 1. 프로젝트 개요 (Overview)

본 프로젝트는 **한국건설트레이딩(KCT)**의 신뢰도 높은 기업 정보와 **KCC실리콘의 체계적인 적용산업(Application) & 제품(Product) 분류 아키텍처**를 융합하여, 국내외 B2B 고객(건설사, 설계사무소, 창호/커튼월 시공사, 해외 바이어)에게 최적화된 **차세대 건축용 실리콘 솔루션 웹 플랫폼**을 구축하는 프로젝트입니다.

### 🏢 기업 정보 (Company Profile - Source: kconstrade.com)
- **회사명**: 한국건설트레이딩 (KOREA CONSTRUCTION TRADING, KCT)
- **대표자**: 이준환 (Lee Joon-hwan)
- **사업자등록번호**: 371-07-03719
- **본사 주소**: 서울특별시 송파구 충민로 10 4-A19 가든파이브툴 (Garden Five Tools 4-A19, Songpa-gu, Seoul, Korea)
- **연락처**: +82-10-8939-0284 / **이메일**: sales@kconstrade.com
- **핵심 사업**:
  - Dow Chemical 및 글로벌 최고 품질 건축용·구조용 실리콘 전문 유통
  - 내후성(Weather), 구조용(Structural), 복층유리(IG), 방화/방균 특수 실란트 전문 소싱
  - 글로벌 수출 (일본, 대만, 동남아시아 및 미주/유럽 B2B 네트워크)
  - 24시간 B2B 견적 발송, 현장 직납, 다중 현장 분할 배송

---

## 🎯 2. 벤치마킹 및 정보 구조 (Information Architecture)

> **KCC실리콘(kccsilicone.com)의 산업별 솔루션(Application) 및 제품 그리드/필터링 시스템**을 벤치마크하여, 복잡한 실리콘 화학 자재를 고객의 현장 니즈(산업별/부위별)에 맞춰 직관적으로 탐색할 수 있도록 설계합니다.

```
[ KCT 웹 플랫폼 네비게이션 구조도 (IA) ]

  ├── 1. 홈 (Home)
  │    ├── Hero 인터랙티브 비주얼 (글로벌 실리콘 파트너십)
  │    ├── 핵심 경쟁력 (24h 견적, 현장 직납, 품질 보증, 수출 네트워크)
  │    ├── 적용산업 큐레이션 쇼케이스 (건축, 창호, 유리, 방화, 토목, 특수)
  │    ├── 추천 베스트 실란트 라인업 (Dow & 프리미엄 실란트)
  │    ├── 간편 4단계 B2B 발주 프로세스
  │    ├── 실시간 B2B 대량 견적 문의 폼
  │    └── 글로벌 바이어 다국어 지원 & 오시는 길 (Garden Five 본사)
  │
  ├── 2. 회사소개 (About KCT)
  │    ├── KCT 비전 & CEO 인사말
  │    ├── 파트너십 & 글로벌 공급망 (Dow Chemical 공식 소싱)
  │    ├── 인증 현황 & 품질 관리 기준 (KS / ASTM / ISO)
  │    └── 글로벌 수출 네트워크 (일본, 대만, 동남아 등)
  │
  ├── 3. 적용분야/솔루션 (Applications) [★ KCC실리콘 구조 벤치마크]
  │    ├── [Category 1] 커튼월 & 건축 외장 (Curtain Wall & Facade)
  │    ├── [Category 2] 창호 & 유리 글레이징 (Window & Glass Glazing)
  │    ├── [Category 3] 복층유리 2차 실링 (Insulating Glass Secondary Seal)
  │    ├── [Category 4] 인테리어 & 욕실/방균 (Interior & Anti-fungal)
  │    ├── [Category 5] 방화 & 내화 실링 (Firestop & Fire-rated)
  │    ├── [Category 6] 토목 & 도로 조인트 (Civil Engineering & Road Joint)
  │    └── [Category 7] 산업용 접착 및 특수 코팅 (Industrial & Specialty Coating)
  │
  ├── 4. 제품소개 (Products)
  │    ├── 실시간 카테고리 필터링 (구조용 / 내후성 / 방화 / 복층유리 / 무초산 / 바이오)
  │    ├── 제품 상세 스펙 테이블 (경화타입, 모듈러스, 신율, 인장강도, 포장)
  │    └── 기술문서 다운로드 (TDS 기술자료표, MSDS 물질안전보건자료)
  │
  ├── 5. 기술지원 & 데이터센터 (Technical Center)
  │    ├── 조인트 치수 및 실리콘 소요량 자동 계산기 (Volume Calculator)
  │    ├── 계절별(동절기/하절기) 시공 기술 가이드 & 하자 방지 FAQ
  │    └── 공인 시험성적서 및 인증서 열람
  │
  └── 6. B2B 견적 및 수출문의 (Contact & B2B Inquiry)
       ├── 원클릭 견적 요청 폼 (수량, 현장 납품 위치, 희망 납기일)
       ├── 해외 바이어 전용 수출 문의 (Incoterms, 컨테이너 선적, 다국어)
       └── WhatsApp / 전화 / 이메일 실시간 상담 채널
```

---

## 🛠️ 3. 기술 스택 & 개발 환경 (Tech Stack)

| 구분 | 기술 스택 | 선정 사유 및 역할 |
| :--- | :--- | :--- |
| **Frontend Framework** | **HTML5, Modern ES6+ JavaScript, CSS3 / TailwindCSS or Bootstrap5** | 초고속 로딩, 완벽한 SEO 지원, 반응형 모바일 최적화 |
| **Component System** | **Modular Semantic Components** | Header/Nav, Mega Menu, Filterable Product Grid, Interactive Calculator |
| **Interactive Feature** | **실리콘 조인트 소요량 계산기 & 다이나믹 필터링** | 건설 현장 실무자가 현장 폭/깊이/길이 입력 시 필요한 소시지/카트리지 수량 자동 산출 |
| **Forms & CRM** | **B2B 견적 자동 발송 시스템 / Web3Forms / WhatsApp API** | 24시간 내 빠른 견적 수신 및 영업팀 실시간 알림 |
| **SEO & Performance** | **Schema.org Structured Data (Organization, Product, LocalBusiness)** | 네이버, 구글, Daum 검색 상위 노출 및 글로벌 다국어 SEO (ko, en, ja) |

---

## 📁 4. 프로젝트 폴더 구조 (Project Structure)

```
projects/kct/
├── README.md                 # 프로젝트 개요 및 기획서 (현재 파일)
├── PLAN.md                   # 단계별 개발 마일스톤 및 일정 계획
├── ARCHITECTURE.md           # 정보 구조도(IA), 페이지 라우팅 및 UI 디자인 가이드
├── DATA.md                   # KCT 회사 정보, 적용산업 데이터, 제품 카탈로그 데이터셋
├── public/                   # 정적 에셋 (이미지, 로고, 아이콘, 폰트)
│   ├── assets/
│   │   ├── img/              # 로고, 히어로 배너, 솔루션/제품 이미지
│   │   ├── css/              # 커스텀 스타일시트 (theme.css, custom.css)
│   │   └── js/               # 인터랙티브 스크립트 (filter, calculator, form)
│   └── index.html            # KCT 메인 웹 플랫폼 완성형 단일/다중 페이지
└── src/                      # 컴포넌트 및 모듈 소스 코드
```
