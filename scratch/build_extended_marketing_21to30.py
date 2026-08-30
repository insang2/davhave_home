import json, os, sys, re

# 21~30번 레슨 내용 대폭 확장 & 핵심 마케팅 & SEO 용어 사전 (Glossary) 추가
lessons_21to30_ext = [
    {
        "order_index": 21,
        "slug": "backlink-building-and-offpage-seo-strategy",
        "title": "백링크(Backlink) 구축과 획득 전략: 오프페이지(Off-Page) SEO 완벽 가이드",
        "seo_title": "백링크 구축 기법 & 오프페이지(Off-Page) SEO 신뢰도 향상 가이드",
        "excerpt": "검색엔진 상위 노출의 핵심인 고품질 백링크(Backlink)를 획득하는 5가지 전략과 스팸 백링크 차단 기법 및 용어 사전입니다.",
        "content_md": """## 백링크(Backlink)란 무엇이며 왜 중요한가?

백링크(Backlink, 역링크)는 다른 웹사이트가 내 웹사이트의 특정 페이지로 연결해 주는 텍스트나 이미지 하이퍼링크를 의미합니다.

구글과 검색엔진 알고리즘은 백링크를 다른 웹사이트가 내 사이트에 보낸 **"투표(Vote)이자 신뢰의 표징"**으로 해석합니다. 권위 있는 외부 사이트로부터 많은 백링크를 받을수록 검색 결과 1페이지 상단에 노출될 확률이 비례하여 높아집니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **백링크 (Backlink / Inbound Link)**: 다른 외부 웹사이트에서 내 웹사이트로 들어오도록 걸어놓은 하이퍼링크.
- **앵커 텍스트 (Anchor Text)**: 하이퍼링크가 걸려 있는 클릭 가능한 텍스트 문구.
- **링크 주스 (Link Juice)**: 백링크를 통해 권위 있는 사이트에서 내 사이트로 전달되는 검색엔진 신뢰도 점수 및 평판 지표.
- **DoFollow / NoFollow**: DoFollow는 검색엔진 로봇에게 링크를 따라가서 점수를 주라는 지시이고, NoFollow(`rel="nofollow"`)는 '이 링크로 점수를 전달하지 말라'는 지시.

---

## 백링크 전략 체크리스트

- [ ] 내 사이트로 유입되는 백링크의 앵커 텍스트가 자연스러운가?
- [ ] 스팸/성인/박스형 저품질 사이트의 악성 백링크가 없는가?
- [ ] 도메인 권위도(DA)가 높은 언론사 및 전문 사이트의 링크를 획득했는가?
"""
    },
    {
        "order_index": 22,
        "slug": "naver-search-algorithm-and-naver-seo",
        "title": "네이버 블로그 및 지식인 노출 알고리즘과 상위 노출 기법",
        "seo_title": "네이버 상위 노출 알고리즘(C-Rank & DIA+) & 네이버 SEO 실전",
        "excerpt": "네이버 서치 알고리즘인 C-Rank와 DIA+의 작동 원리를 파악하고 블로그, 스마트스토어, 웹사이트를 상위 노출시키는 네이버 SEO 기법입니다.",
        "content_md": """## 네이버 검색 알고리즘의 2대 축: C-Rank & DIA+

국내 최대 검색 포털 네이버는 구글과 다른 독자적인 알고리즘으로 콘텐츠의 순위를 결정합니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **C-Rank 알고리즘**: Creator Rank. 블로그나 출처의 전문성, 인지도, 꾸준함을 평가하는 네이버의 출처 신뢰도 평가 알고리즘.
- **DIA+ 알고리즘**: Deep Intent Analysis. 출처와 관계없이 개별 게시글 문서 자체의 깊이, 체류시간, 독창성을 인공지능 딥러닝으로 평가하는 알고리즘.
- **네이버 서치어드바이저 (Search Advisor)**: 네이버 검색엔진에 내 웹사이트의 수집 현황을 모니터링하고 사이트맵을 등록하는 네이버 공식 웹마스터 도구.
- **체류 시간 (Dwell Time)**: 유저가 검색 결과를 클릭해 웹페이지에 들어와서 나가기 전까지 머무른 평균 시간.

---

## 네이버 SEO 체크리스트

- [ ] 네이버 서치어드바이저 웹마스터 도구에 수집 오류가 없는가?
- [ ] 글 내용에 직접 촬영/제작한 시각 자료가 포함되어 있는가?
- [ ] 문맥과 관련 없는 키워드 반복 남발(Abusing)을 하지 않았는가?
"""
    },
    {
        "order_index": 23,
        "slug": "javascript-seo-and-rendering-optimization",
        "title": "구글 딥렌더링과 자바스크립트 SEO(JS SEO) 최적화",
        "seo_title": "자바스크립트 SEO(JS SEO) & React/Next.js 크롤링 렌더링 최적화",
        "excerpt": "React, Next.js, Vue 등 싱글 페이지 애플리케이션(SPA)의 자바스크립트 실행 지연을 극복하고 Googlebot 수집률을 높이는 JS SEO 기법입니다.",
        "content_md": """## 자바스크립트 SEO(JS SEO)란 무엇인가?

클라이언트 사이드 렌더링(CSR) 기반의 React, Vue 앱은 구글봇이 접근했을 때 빈 화면(`div id="root"`)만 보일 위험이 있습니다. 

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **JS SEO (JavaScript SEO)**: 자바스크립트로 구축된 모던 프론트엔드 웹 앱이 검색엔진 크롤러봇에게 지연 없이 잘 읽히도록 렌더링 아키텍처를 최적화하는 기술.
- **CSR (Client-Side Rendering)**: 브라우저에서 자바스크립트를 다 다운로드받은 후 비동기로 화면을 그리는 렌더링 방식.
- **SSR (Server-Side Rendering)**: 서버(Cloudflare Workers/Next.js)에서 미리 완성된 HTML을 생성하여 브라우저에 즉시 응답을 전송하는 방식.
- **WRS (Web Rendering Service)**: 구글 검색엔진 내부에서 자바스크립트를 실제 브라우저처럼 실행해 보고 화면을 파싱하는 전용 렌더링 서비스 엔진.

---

## JS SEO 체크리스트

- [ ] 자바스크립트를 비활성화(Disable JS)해도 주요 텍스트와 링크가 보이는가?
- [ ] View Source(소스 보기) 실행 시 H1 제목과 본문 내용이 HTML에 들어있는가?
- [ ] Fetch & Render 도구에서 구글봇 렌더링 스크린샷이 깨지지 않는가?
"""
    },
    {
        "order_index": 24,
        "slug": "domain-authority-and-backlink-profile-audit",
        "title": "도메인 권위도(DA/DR) 향상과 백링크 프로필 퀄리티 감사(Audit)",
        "seo_title": "도메인 권위도(DA/DR) 점수 측정 & 악성 백링크 감사(Audit) 가이드",
        "excerpt": "Ahrefs DR, Moz DA 도메인 점수의 원리를 이해하고, 내 사이트를 공격하는 악성 스팸 백링크를 디스아보(Disavow) 거부 조치하는 튜토리얼입니다.",
        "content_md": """## 도메인 권위도 (Domain Authority) 평가지표

구글은 공식적으로 DA 점수를 명시하지 않지만, Ahrefs(DR), Moz(DA), Semrush(AS) 등 글로벌 SEO 데이터 툴은 사이트의 검색 지배력을 0~100점 점수로 측정합니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **도메인 권위도 (DA / DR)**: Domain Authority / Domain Rating. 특정 웹사이트 도메인이 검색엔진 결과에서 가지는 전반적인 영향력과 신뢰도 점수 (0~100점).
- **Disavow (백링크 거부)**: 내 웹사이트 평판을 갉아먹는 악성 스팸 사이트의 백링크를 구글 서치 콘솔을 통해 '이 링크를 무효화해달라'고 거부 신청하는 기능.
- **스팸 백링크 (Spammy Backlink)**: 도메인 구매 스팸업체, 해외 도박/성인/악성코드 사이트가 내 사이트로 무단 연결해놓은 저품질 링크.
- **Ahrefs / Moz**: 글로벌 마케터들이 전 세계 웹사이트의 백링크 및 키워드 순위를 추적할 때 사용하는 대표적인 SEO 전문 소프트웨어.

---

## DA/DR 향상 체크리스트

- [ ] 주기적으로 구글 서치 콘솔에서 신규 외부 링크를 감사하고 있는가?
- [ ] 악성 백링크를 발견하면 Disavow 파일로 거부 조치했는가?
- [ ] 신뢰도 높은 외부 전문 사이트로부터 건강한 백링크가 늘고 있는가?
"""
    },
    {
        "order_index": 25,
        "slug": "meta-pixel-and-google-conversion-tracking",
        "title": "구글 디스플레이(GDN) 및 메타 타겟팅 픽셀(Pixel/API) 연동 실전",
        "seo_title": "Meta 픽셀(Pixel) & 구글 애즈 전환 추적(Conversion Tracking) 실전",
        "excerpt": "인스타그램 광고 리마케팅을 위한 Meta Pixel 스크립트 설치와 Google Ads 전환 추적 이벤트 연동 기법입니다.",
        "content_md": """## 리마케팅(Retargeting)과 픽셀(Pixel)의 원리

내 사이트에 한 번이라도 방문한 사용자는 구매 의도가 매우 높습니다. 

사이트에 Meta Pixel과 Google Conversion Tag를 설치하면, 방문자의 행동 데이터를 추적하여 맞춤 광고를 지속 노출할 수 있습니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **Meta Pixel (메타 픽셀)**: 인스타그램과 페이스북 광고를 위해 자사 웹사이트에 심는 자바스크립트 행동 추적 스크립트 코드.
- **리타겟팅 / 리마케팅 (Retargeting)**: 내 사이트를 이전에 방문했던 유저들을 픽셀 쿠키 데이터로 식별하여 소셜 미디어나 타 웹사이트에서 재노출 광고를 집행하는 기술.
- **전환 추적 (Conversion Tracking)**: 광고를 클릭해 들어온 방문자가 구매나 문의 신청 등 목표 행동을 실제 수행했는지 추적 측정하는 기술.
- **CAPI (Conversions API)**: 브라우저 쿠키 차단에 대비해 서버 대 서버(Server-to-Server)로 메타 광고 서버에 이벤트를 직접 발송하는 최신 전환 API.

---

## 픽셀 연동 체크리스트

- [ ] Meta Pixel Helper 크롬 확장 프로그램에서 Pixel이 정상 작동(Green)인가?
- [ ] 상담 신청 및 문의 완료 시 전환 이벤트가 정상 전송되는가?
"""
    },
    {
        "order_index": 26,
        "slug": "performance-ad-creative-ab-testing-and-copywriting",
        "title": "퍼포먼스 광고 소재 A/B 테스트와 카피라이팅 리팩터링",
        "seo_title": "디스플레이 광고 소재 A/B 테스트 & CTR 3배 상승 카피라이팅",
        "excerpt": "클릭률(CTR)과 전환율을 극대화하기 위해 광고 이미지 소재, 영상 오프닝 3초, 카피 문구를 승자(Winner) 소재로 리팩터링하는 테스트 전략입니다.",
        "content_md": """## 광고 소재(Creative)가 성패의 80%를 결정한다

퍼포먼스 마케팅에서 아무리 타겟팅을 정교하게 설정해도, 사용자의 피드 스크롤을 멈추게 만드는 광고 소재(Image/Video)와 카피 문구가 매력적이지 않으면 광고비는 공중에 날아갑니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **광고 소재 (Ad Creative)**: 피드나 배너에 실제로 렌더링되는 이미지, 디스플레이 배너, 카드리프렛, 동영상 및 텍스트 문구의 총칭.
- **승자 소재 (Winner Creative)**: A/B 테스트 결과 다른 소재들보다 압도적으로 높은 CTR(클릭률)과 낮은 CAC(고객 획득 비용)를 기록한 최고 효율의 소재.
- **피드 스크롤 스토퍼 (Scroll Stopper)**: 유저가 인스타그램이나 유튜브 피드를 빠르게 넘기다가 시선을 강제로 멈추게 만드는 0.5초 이내의 강렬한 비주얼적 요소.
- **손실 회피 심리 (Loss Aversion)**: 사람은 이득을 얻는 기쁨보다 손실을 피하려는 욕구가 2배 이상 강하다는 행동경제학 이론으로 카피라이팅에 자주 응용됨.

---

## 소재 리팩터링 체크리스트

- [ ] 한 번에 하나의 변수만 변경하여 A/B 테스트를 실행했는가?
- [ ] 피드 스크롤을 멈추게 하는 가독성 높은 폰트와 고대비 색상을 썼는가?
- [ ] CTR(클릭률) 상위 10% 승자(Winner) 소재에 예산을 집중 증액했는가?
"""
    },
    {
        "order_index": 27,
        "slug": "local-seo-and-google-business-profile",
        "title": "로컬 SEO 및 구글 비즈니스 프로필(Google Business Profile) 상위 노출",
        "seo_title": "로컬 SEO(지역 검색) & 구글 비즈니스 프로필 지도 상위 노출",
        "excerpt": "병원, 세무사, 오프라인 매장 및 지역 기반 사업자가 구글 지도(Google Maps) 및 네이버 플레이스 상위에 노출되도록 최적화하는 로컬 SEO 가이드입니다.",
        "content_md": """## 로컬 SEO(Local SEO)의 개념과 강력함

"강남 세무사", "홍대 카페"처럼 특정 지역명을 포함한 검색어는 구매 및 방문 의도가 즉각적입니다. 

구글 지도(Google Maps) 파일럿 패크(Local 3-Pack)에 상위 노출되면 엄청난 고객 유입을 획득할 수 있습니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **로컬 SEO (Local SEO)**: 특정 지역이나 오프라인 매장 기반의 키워드 검색 시 지도 및 상단 결과에 플레이스를 노출시키는 지역 최적화 마케팅.
- **NAP (Name, Address, Phone)**: 사업자 상호명, 주소, 전화번호. 로컬 SEO의 신뢰도를 판가름하는 가장 핵심적인 데이터 정합성 항목.
- **Google Business Profile (구글 비즈니스 프로필)**: 구글 지도 및 검색 결과에 매장 정보, 영업시간, 사진, 후기를 무료로 등록하는 비즈니스 관리도구.
- **Local 3-Pack**: 구글에서 지역 검색 시 검색 결과 상단에 지도와 함께 최상위로 노출되는 3개의 대표 오프라인 매장 리스트 구좌.

---

## 로컬 SEO 체크리스트

- [ ] 구글 비즈니스 프로필 및 네이버 플레이스 소유권 인증이 되었는가?
- [ ] 전 웹사이트의 NAP(상호, 주소, 전화번호)가 100% 일치하는가?
- [ ] 고객의 실제 후기 리뷰가 지속적으로 누적되고 있는가?
"""
    },
    {
        "order_index": 28,
        "slug": "programmatic-advertising-and-dsp-ssp-guide",
        "title": "프로그램 방식 디지털 광고(Programmatic Ads)와 DSP/SSP 이해",
        "seo_title": "프로그래매틱 광고(Programmatic Advertising) & DSP, SSP, RTB 완벽 이해",
        "excerpt": "빅데이터와 소프트웨어 알고리즘으로 실시간 입찰(RTB)을 진행하는 프로그래매틱 광고 생태계와 DSP, SSP, Ad Exchange 구조입니다.",
        "content_md": """## 프로그래매틱 광고(Programmatic Advertising)란?

사람이 일일이 매체 담당자와 연락해 광고 구좌를 구매하는 대신, 자동화된 소프트웨어와 실시간 경매(RTB - Real-Time Bidding) 알고리즘을 통해 0.1초 만에 타겟 유저에게 최적의 광고를 노출하는 방식입니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **프로그래매틱 광고 (Programmatic Ads)**: 사람이 아닌 소프트웨어 알고리즘과 빅데이터를 이용하여 디지털 광고 공간을 실시간으로 구매하고 세팅하는 자동화 광고.
- **RTB (Real-Time Bidding)**: 실시간 경매. 웹페이지가 로딩되는 100밀리초(0.1초)의 아주 짧은 순간에 최고 입찰가를 제시한 광고주의 광고를 노출하는 시스템.
- **DSP (Demand-Side Platform)**: 광고주가 최선의 가격으로 가장 효율적인 광고 타겟 오디언스 구좌를 자동으로 인바운드 구매할 수 있게 돕는 플랫폼.
- **SSP (Supply-Side Platform)**: 지면을 가진 웹/앱 매체사가 자신의 광고 지면을 최고가에 자동 판매하여 수익을 극대화할 수 있도록 돕는 플랫폼.

---

## 프로그래매틱 광고 체크리스트

- [ ] 리타겟팅 및 인구통계 데이터 세그먼트가 제대로 구축되어 있는가?
- [ ] 브랜드 안전성(Brand Safety) 필터가 설정되어 부정적 웹사이트 노출을 막고 있는가?
"""
    },
    {
        "order_index": 29,
        "slug": "naver-search-ad-powerlink-bidding-optimization",
        "title": "네이버 검색광고(SA) 및 파워링크 키워드입찰 효율 최적화",
        "seo_title": "네이버 파워링크 검색광고(SA) 키워드 입찰 & Quality Index 최적화",
        "excerpt": "네이버 파워링크 광고의 품질지수(Quality Index)를 올려 클릭당 비용(CPC)을 낮추고 매출 전환을 극대화하는 실전 입찰 전략입니다.",
        "content_md": """## 네이버 파워링크 입찰가 산정 원리

네이버 파워링크 노출 순위는 오직 입찰가만으로 결정되지 않습니다.

$$\\text{노출 순위 점수} = \\text{입찰가 (CPC)} \\times \\text{품질지수 (Quality Index)}$$

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **검색광고 (SA - Search Advertising)**: 네이버나 구글 검색 결과 상단에 텍스트 링크 형태로 노출되는 키워드 입찰 기반 광고.
- **CPC (Cost Per Click)**: 유저가 광고를 1회 클릭할 때마다 광고주가 플랫폼에 지불하는 클릭당 비용.
- **품질지수 (Quality Index)**: 네이버 검색광고에서 키워드와 광고문구, 랜딩페이지 간의 연관성과 유저 만족도를 종합하여 부여하는 1~7점의 평가 지수.
- **음영 키워드 / 제외 키워드**: 전환 가능성이 희박하거나 무관한 검색어 클릭으로 인한 불필요한 광고비 낭비를 막기 위해 사전에 광고 노출을 차단하는 키워드.

---

## 파워링크 최적화 체크리스트

- [ ] 품질지수가 5점 이상(최대 7점) 유지되고 있는가?
- [ ] 검색 의도와 맞지 않는 불필요한 음영 키워드는 제외 키워드로 등록했는가?
- [ ] 가능한 모든 파워링크 확장 소재를 등록했는가?
"""
    },
    {
        "order_index": 30,
        "slug": "eeat-building-and-performance-marketing-orchestration",
        "title": "디지털 마케팅 총정리: E-E-A-T 구축과 백링크-광고 오케스트레이션",
        "seo_title": "디지털 마케팅 완결판: 구글 E-E-A-T 평가축 & 백링크-광고 오케스트레이션",
        "excerpt": "구글 검색엔진의 E-E-A-T(경험, 전문성, 권위성, 신뢰성) 평가 기준을 만족시키고 SEO와 퍼포먼스 광고를 유기적으로 오케스트레이션하는 마스터 가이드입니다.",
        "content_md": """## 구글 E-E-A-T 평가 기준 완벽 해부

구글 검색 품질 평가 가이드라인의 핵심 기준은 **E-E-A-T**입니다.

1. **Experience (경험)**: 직접 프로젝트를 진행하고 검증한 실전 경험 서술
2. **Expertise (전문성)**: 기술과 지식의 깊이 및 정확한 근거 제시
3. **Authoritativeness (권위성)**: 업계 및 타 사이트로부터의 인정과 백링크 인용
4. **Trustworthiness (신뢰성)**: 투명한 작성자 정보, 연락처, SSL 보안 및 개인정보 처리방침

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **E-E-A-T**: Experience(경험), Expertise(전문성), Authoritativeness(권위성), Trustworthiness(신뢰성)의 약자로 구글이 웹사이트 콘텐츠의 신뢰도를 판가름하는 핵심 가이드라인.
- **YMYL (Your Money or Your Life)**: 건강, 금융, 재산, 법률 등 유저의 삶에 중대한 영향을 미치는 웹페이지 주제군으로 구글이 가장 엄격하게 E-E-A-T를 적용함.
- **Full-Funnel Marketing**: 브랜드 인식(Upper)부터 고려(Middle), 전환(Lower)에 이르기까지 고객 여정의 전체 퍼널을 통합적으로 커버하는 풀패키지 마케팅 전략.

---

## 디지털 마케팅 마스터 최종 점검 리스트

- [ ] 작성자 정보(Author Profile)와 투명한 스튜디오 소개가 존재하는가?
- [ ] Paid 광고 유입과 Organic SEO 유입이 서로 시너지를 발휘하는가?
- [ ] 단기 편법(스팸 백링크, 어뷰징) 없이 정직하고 지속 가능한 콘텐츠 자산이 쌓이고 있는가?
"""
    }
]

print(f"확장 21~30번 레슨 {len(lessons_21to30_ext)}개 생성 준비 완료")
