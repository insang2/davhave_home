import json, subprocess, os, sys

# 1 ~ 10 디지털 마케팅 전문 레슨 10편 생성
lessons_1to10 = [
    {
        "order_index": 1,
        "slug": "digital-marketing-fundamentals-and-audience-persona",
        "title": "디지털 마케팅 개론 및 오디언스 페르소나 설계 가이드",
        "seo_title": "디지털 마케팅 입문 & 타겟 고객 페르소나 설계 완벽 튜토리얼",
        "excerpt": "디지털 마케팅의 기본 개념부터 제품의 타겟 고객을 명확하게 입체화하는 타겟 페르소나(Target Audience Persona) 프레임워크와 AI 프롬프트를 상세 수록합니다.",
        "content_md": """## 디지털 마케팅의 정의와 핵심 메커니즘

디지털 마케팅(Digital Marketing)은 인터넷, 검색엔진, 모바일 기기, 소셜 미디어 등의 디지털 채널을 활용해 잠재고객에게 제품과 서비스의 가치를 전달하고, 고객 행동(구매, 가입, 문의)을 유도하는 과학적인 활동입니다.

기존 매체(TV, 신문) 마케팅과의 가장 큰 차이점은 **모든 데이터의 측정 가능성(Measurability)**과 **정밀한 타겟팅(Targeting)**에 있습니다.

---

## 3단계 마케팅 타겟 페르소나(Persona) 설계 템플릿

성공적인 마케팅 캠페인을 위해서는 우리의 핵심 고객이 누구인지 명확히 설정해야 합니다.

### 1단계: 데모그래픽(Demographics) 수집
- **연령/성별**: 예: 28~38세 남녀 직장인
- **직업/소득**: IT/스타트업/전문직, 연봉 4,000만~6,000만 원
- **주요 채널**: 인스타그램, 유튜브, 네이버 블로그

### 2단계: 핑포인트(Pain Points) 파악
- "업무 생산성을 높이고 싶지만 시간이 부족함"
- "퇴근 후 자기개발을 하고 싶지만 무엇부터 시작할지 막막함"

### 3단계: 해결책(Solution) 연결
- "하루 10분 투자로 AI 도구를 마스터하는 숏폼 가이드 제공"

---

## AI 활용 페르소나 작성 복붙용 프롬프트

Claude 및 ChatGPT에 아래 프롬프트를 복사하여 붙여넣으면 3분 만에 정밀 페르소나를 얻을 수 있습니다.

```text
[역할 부여]
당신은 10년 차 수석 마케팅 전략가입니다.

[제품 정보]
제품명: DAVHAVE Education Hub
특징: AI, 개발, 마케팅에 관한 283개 이상의 무료 정밀 레슨 제공

[목표]
이 제품을 적극 이용할 가장 핵심적인 구매자 페르소나 2명을 상세히 작성해주세요.

[출력 형식]
1. 이름 및 프로필 (나이, 직업, 라이프스타일)
2. 가장 고통받는 문제점 (Pain Points 3가지)
3. 구매 결정 요소 (Key Decision Drivers)
4. 자주 사용하는 소셜 미디어 및 미디어 소비 습관
5. 이 고객의 마음을 사로잡을 마케팅 헤드라인 문구 3개
```

---

## 핵심 체크리스트 (Summary Checklist)

- [ ] 타겟 페르소나의 인구통계학적 특징이 정의되었는가?
- [ ] 고객의 Pain Point와 제품의 해결책이 1:1로 매칭되는가?
- [ ] 페르소나에 맞는 메인 마케팅 소셜 채널이 선정되었는가?
"""
    },
    {
        "order_index": 2,
        "slug": "seo-fundamentals-and-onpage-optimization",
        "title": "검색엔진 최적화(SEO) 기초부터 On-Page 테크니컬 가이드",
        "seo_title": "SEO 기초 입문 & 온페이지(On-Page) 태그 최적화 실전 전략",
        "excerpt": "검색엔진이 내 사이트를 좋아하게 만드는 검색엔진 최적화(SEO)의 기본 원리와 타이틀, 메타 태그, H1~H3 헤딩 구조 설정법을 배웁니다.",
        "content_md": """## 검색엔진 최적화(SEO)란 무엇인가?

검색엔진 최적화(Search Engine Optimization, SEO)는 구글, 네이버, 빙 등의 검색엔진 검색 결과 상단에 내 웹페이지가 무료(Organic)로 노출되도록 웹사이트 구조와 콘텐츠를 최적화하는 전략입니다.

---

## 필수 On-Page SEO 4대 요소

### 1. Title 태그 (제목 태그)
검색 결과 클릭률(CTR)에 직결되는 가장 중요한 요소입니다. 50~60자 이내로 핵심 키워드를 전면에 배치합니다.

```html
<title>디지털 마케팅 입문 &amp; SEO 최적화 완벽 가이드 | DAVHAVE</title>
```

### 2. Meta Description (메타 설명)
검색 결과 스니펫에 노출되는 요약문입니다. 130~150자 이내로 클릭을 유도하는 액션 문구를 작성합니다.

```html
<meta name="description" content="SEO의 기본 원리와 Title, Meta Description, H1 헤딩 태그 설정법을 초보자 눈높이에서 가장 정밀하게 설명합니다." />
```

### 3. H1, H2, H3 헤딩 구조
페이지당 오직 **하나의 `<h1>` 태그**만을 사용하고, 논리적인 계층 구조로 배치합니다.

```html
<h1>SEO 최적화 마스터 가이드</h1>
<h2>1. On-Page SEO의 개념</h2>
<h3>1-1. Title 태그 작성법</h3>
<h2>2. Off-Page SEO 전략</h2>
```

### 4. Canonical URL (대표 URL)
중복 콘텐츠 이슈를 방지하기 위해 검색엔진에 정본 URL을 명시합니다.

```html
<link rel="canonical" href="https://davhave.com/education/marketing/seo-fundamentals-and-onpage-optimization" />
```

---

## SEO 점검 체크리스트

- [ ] 페이지당 `<h1>` 태그가 오직 1개만 존재하는가?
- [ ] Title 태그에 메인 키워드가 포함되었는가?
- [ ] Meta Description이 150자 이내로 영감 있게 작성되었는가?
- [ ] Canonical URL 태그가 제대로 연결되었는가?
"""
    },
    {
        "order_index": 3,
        "slug": "search-console-and-naver-searchadvisor-optimization",
        "title": "구글 검색 콘솔과 네이버 서치어드바이저 수집 최적화 실전",
        "seo_title": "Google Search Console & 네이버 서치어드바이저 색인 등록 실전",
        "excerpt": "Google Search Console과 네이버 서치어드바이저에 사이트 소유권을 확인하고 sitemap.xml과 rss.xml을 등록하여 수집률을 100% 올리는 가이드입니다.",
        "content_md": """## 검색엔진 색인(Indexing)의 기본 이해

웹사이트를 아무리 아름답게 만들어도 크롤러 봇(Googlebot, Yeti)이 내 사이트를 방문하고 색인(Index)하지 않으면 검색 결과에 노출되지 않습니다.

---

## Google Search Console 설정 4단계

### 1단계: 소유권 확인 (HTML 태그)
`<head>` 영역에 구글이 제공하는 소유권 메타 태그를 주입합니다.

```html
<meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
```

### 2단계: sitemap.xml 등록
검색 콘솔의 `Sitemaps` 메뉴로 이동하여 `sitemap.xml` 경로를 제출합니다.

### 3단계: URL 검사 및 색인 요청
신규 포스트 등록 시 `URL 검사` 기능을 통해 `색인 생성 요청`을 클릭합니다.

---

## 네이버 서치어드바이저 (Search Advisor) 설정

1. **소유 확인**: 네이버 서치어드바이저 접속 ➔ 웹마스터 도구 ➔ HTML 태그 등록
2. **RSS 제출**: `https://davhave.com/rss.xml` 제출
3. **사이트맵 제출**: `https://davhave.com/sitemap.xml` 제출

---

## robots.txt 완벽 개방 설정 표준 예시

모든 크롤러봇의 수집을 100% 허용하는 표준 `robots.txt` 코드입니다.

```text
User-agent: *
Allow: /

Sitemap: https://davhave.com/sitemap.xml
```

---

## 수집 최적화 체크리스트

- [ ] 구글 검색 콘솔 및 네이버 서치어드바이저 소유권 확인 완료
- [ ] sitemap.xml 제출 상태가 '성공'인가?
- [ ] robots.txt가 수집을 차단하고 있지 않은가?
"""
    },
    {
        "order_index": 4,
        "slug": "keyword-research-and-search-intent-analysis",
        "title": "키워드 리서치와 검색 의도(Search Intent) 분석 전략",
        "seo_title": "키워드 리서치 기법 & 검색 의도(Search Intent) 맞춤형 콘텐츠 전략",
        "excerpt": "월간 검색량, 경쟁 강도, 사용자 검색 의도(Informational, Transactional)를 분석하여 상위 노출될 키워드를 발굴하는 튜토리얼입니다.",
        "content_md": """## 키워드 리서치의 중요성

모든 마케팅과 SEO의 출발점은 "고객이 검색창에 무엇을 입력하는가?"에 있습니다. 검색량이 높으면서 경쟁이 완만한 롱테일 키워드(Long-tail Keyword)를 발굴하는 것이 핵심입니다.

---

## 검색 의도(Search Intent) 4가지 분류

1. **정보성 의도 (Informational Intent)**: "Claude 사용법", "SEO란 무엇인가" ➔ 개념 정리 및 튜토리얼 제공
2. **거래성 의도 (Transactional Intent)**: "AI 마케팅 외주 가격", "웹사이트 제작 문의" ➔ 서비스 상담 및 견적 안내
3. **네비게이션 의도 (Navigational Intent)**: "DAVHAVE", "구글 검색 콘솔" ➔ 해당 브랜드/사이트로 직접 이동
4. **상업적 탐색 의도 (Commercial Investigation)**: "Flutter vs React Native 비교" ➔ 비교 분석표 및 추천 리포트

---

## 키워드 리서치 3단계 실행 가이드

### 1단계: 씨앗 키워드(Seed Keywords) 추출
우리의 서비스 분야와 관련된 핵심 단어 5~10개 수집. (예: `마케팅`, `SEO`, `AI`)

### 2단계: 키워드 도구 활용
네이버 키워드 도구, Google Keyword Planner, 블랙키위 등을 활용해 월간 검색량 및 문서 수 수집.

### 3단계: 황금 키워드 선별
- **월간 검색량**: 1,000 ~ 10,000회
- **경쟁 강도**: 낮은 문서 수 (블로그 수 적음)

---

## 키워드 분석 체크리스트

- [ ] 타겟 키워드의 검색 의도(정보성 vs 거래성)를 파악했는가?
- [ ] Title과 Heading에 메인 키워드가 자연스럽게 녹아있는가?
- [ ] 롱테일 키워드를 적절히 분산 수록했는가?
"""
    },
    {
        "order_index": 5,
        "slug": "content-marketing-and-viral-storytelling-guide",
        "title": "콘텐츠 마케팅과 바이럴 스토리텔링 기획 워크북",
        "seo_title": "콘텐츠 마케팅 전략 & 바이럴 스토리텔링 작성 구조 가이드",
        "excerpt": "독자의 몰입을 끌어내는 스토리텔링 공식(PAS, AIDA)과 SNS 바이럴을 일으키는 아티클 기획 구조를 배웁니다.",
        "content_md": """## 콘텐츠 마케팅의 본질

콘텐츠 마케팅은 단순히 상품을 파는 글이 아니라, 독자에게 실질적인 도움과 지식적 가치를 제공하여 자연스럽게 브랜드 팬덤으로 전환시키는 지속 가능한 마케팅 기법입니다.

---

## 바이럴 마케팅의 2대 카피라이팅 프레임워크

### 1. PAS 프레임워크 (Problem - Agitate - Solution)
- **Problem (문제 제시)**: "블로그를 써도 방문자가 0명이라 고민이신가요?"
- **Agitate (문제 심화)**: "좋은 글을 써도 아무도 보지 않는다면 시간과 노력이 그대로 버려집니다."
- **Solution (해결책)**: "검색엔진 상위 노출 100% 보장하는 SEO 체크리스트 5가지를 공개합니다."

### 2. AIDA 프레임워크 (Attention - Interest - Desire - Action)
- **Attention (주의 끌기)**: 강렬한 헤드라인과 통계 지표 제시
- **Interest (흥미 유발)**: 실제 성공 및 실패 사례 스토리 전개
- **Desire (욕구 자극)**: 제품/노하우 도입 후 얻게 될 비포&애프터 제시
- **Action (행동 유도)**: 지금 바로 시작할 수 있는 CTA 클릭 유도

---

## 공유하고 싶어지는 바이럴 요소 3가지

1. **실용성 (Practical Value)**: 보관해두고 두고두고 보고 싶은 복붙용 자료
2. **시각적 명확성**: 표, 체크리스트, 코드 블록을 활용한 높은 가독성
3. **감정적 공감**: 실패를 극복한 진솔한 비하인드 스토리

---

## 콘텐츠 기획 체크리스트

- [ ] 독자의 문제를 명확히 짚어주는 헤드라인인가?
- [ ] PAS 또는 AIDA 프레임워크가 적용되었는가?
- [ ] 글 하단에 명확한 행동 유도(CTA) 버튼이 수록되었는가?
"""
    },
    {
        "order_index": 6,
        "slug": "ai-assisted-marketing-copywriting-prompts",
        "title": "AI(Claude & ChatGPT)를 활용한 마케팅 카피라이팅 기법",
        "seo_title": "AI 마케팅 카피라이팅 & Claude/ChatGPT 실전 프롬프트 10선",
        "excerpt": "Claude 및 ChatGPT AI 모델을 활용해 광고 카피, 블로그 개요, 이메일 제목을 10배 빠르게 생성하는 프롬프트 모음집입니다.",
        "content_md": """## AI 카피라이팅 시대의 마케팅

AI는 마케터를 대체하는 것이 아니라, 마케터의 아이디어 도출 속도를 10배 이상 향상시키는 강력한 어시스턴트입니다.

---

## 실전 마케팅 카피라이팅 프롬프트 3선

### 1. SNS 광고 카피 5종 생성 프롬프트

```text
[역할]
당신은 메타(Meta) 디스플레이 광고 카피를 전문으로 쓰는 카피라이터입니다.

[제품 정보]
제품: DAVHAVE 개발 & AI 컨설팅
타겟: 앱/웹 제작이 필요한 스타트업 대표 및 개인 사업자

[요구사항]
아래 5가지 스타일로 인스타그램 광고 헤드라인(20자 이내)과 본문(100자 이내)을 각각 작성해주세요.
1. 공감 유도형
2. 숫자로 증명하는 신뢰형
3. 호기심 자극 질문형
4. 긴급성 부여형
5. 직관적 혜택 강조형
```

### 2. 이메일 마케팅 오픈율 향상 제목 프롬프트

```text
[요구사항]
아래 주제의 뉴스레터 수신율을 높이기 위한 클릭 유발 이메일 제목 7개를 작성해주세요.
주제: 2026년 최신 구글 SEO 알도리즘 변경점 및 대응 가이드
조건: 이모지 1개 포함, 30자 이내, 호기심 유발
```

---

## AI 카피 수정 및 검수 원칙

- **할루시네이션 점검**: AI가 생성한 숫자, 스펙, 법적 문구 100% 검증
- **휴먼 터치(Human Touch)**: 브랜드의 독자적인 톤앤매너(Tone & Manner) 주입
"""
    },
    {
        "order_index": 7,
        "slug": "technical-seo-semantic-tags-and-jsonld",
        "title": "테크니컬 SEO: 시맨틱 태그, 폰트 Preload, JSON-LD 구조화 데이터",
        "seo_title": "테크니컬 SEO 완벽 가이드: 시맨틱 HTML, Preload & JSON-LD",
        "excerpt": "검색엔진 로봇과 웹 브라우저의 파싱 속도를 끌어올리는 시맨틱 HTML5, 폰트 Preload 힌트, Schema.org JSON-LD 구조화 데이터 기술입니다.",
        "content_md": """## 테크니컬 SEO(Technical SEO)의 의의

아무리 훌륭한 마케팅 글을 써도, 브라우저와 검색엔진 봇이 렌더링에 실패하거나 구조를 이해하지 못하면 노출에서 배제됩니다.

---

## 1. HTML5 시맨틱 태그(Semantic HTML)
`<div>` 남발을 피하고 의미론적 시맨틱 엘리먼트를 사용합니다.

```html
<header>
  <nav><!-- 메인 내비게이션 --></nav>
</header>
<main>
  <article>
    <h1>아티클 제목</h1>
    <section>본문 영역</section>
  </article>
</main>
<footer>© DAVHAVE</footer>
```

---

## 2. Core Web Vitals 폰트 Preload 힌트
웹폰트로 인한 렌더링 지연(FOUT/FOIT) 및 CLS(레이아웃 이동) 현상을 사전 차단합니다.

```html
<link rel="preload" href="/fonts/bricolage-grotesque-800.woff2" as="font" type="font/woff2" crossorigin />
```

---

## 3. Schema.org JSON-LD 구조화 데이터

구글 검색 결과에 리치 스니펫(Rich Snippets)으로 표시되도록 정밀 데이터를 제공합니다.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "테크니컬 SEO 완벽 가이드",
  "description": "시맨틱 태그와 Preload, JSON-LD 구조화 데이터 적용 가이드",
  "author": {
    "@type": "Person",
    "name": "Oscar Lee"
  },
  "publisher": {
    "@type": "Organization",
    "name": "DAVHAVE",
    "url": "https://davhave.com"
  }
}
</script>
```

---

## 테크니컬 SEO 체크리스트

- [ ] HTML 시맨틱 태그(`<main>`, `<article>`, `<header>`)가 올바른가?
- [ ] 핵심 폰트 파일에 `rel="preload"` 힌트가 적용되었는가?
- [ ] JSON-LD 구조화 데이터 문법 오류가 없는가?
"""
    },
    {
        "order_index": 8,
        "slug": "funnel-marketing-and-customer-journey-mapping",
        "title": "퍼널 마케팅과 고객 여정(Customer Journey) 지도 설계",
        "seo_title": "마케팅 퍼널(Funnel) 5단계 & 고객 여정 지도(Customer Journey) 설계",
        "excerpt": "인지(Awareness)부터 유입, 고려, 전환, 재방문까지 이어지는 마케팅 퍼널(AARRR)과 고객 이탈을 방지하는 모니터링 기법입니다.",
        "content_md": """## 마케팅 퍼널(Funnel)의 개념

퍼널(Funnel, 깔때기)은 잠재 고객이 브랜드를 처음 인지한 시점부터 최종 구매 및 열성 팬이 되기까지의 단계를 시각화한 모형입니다.

---

## AARRR 해적 지표 프레임워크

1. **Acquisition (유입)**: 고객이 어떤 채널(SEO, SNS, 광고)을 통해 방문하는가?
2. **Activation (최초 활성화)**: 고객이 첫 방문 시 긍정적인 경험(Aha! Moment)을 느끼는가?
3. **Retention (리텐션/재방문)**: 고객이 지속적으로 사이트에 돌아오는가?
4. **Revenue (매출/전환)**: 고객이 실제 서비스 상담이나 구매로 이어지는가?
5. **Referral (추천/바이럴)**: 고객이 자발적으로 타인에게 공유하는가?

---

## 고객 여정 지도(Customer Journey Map) 작성법

```text
[인지 (Awareness)]
- 매체: 검색엔진 (Google/Naver), SNS
- 고객 니즈: "웹사이트 만들 때 SEO 어떻게 해야 하지?"
- 제공 콘텐츠: 무료 SEO 기초 레슨 가이드

[고려 (Consideration)]
- 매체: DAVHAVE Education Hub & Portfolio
- 고객 니즈: "이 스튜디오 개발 실력과 철학이 믿을 만한가?"
- 제공 콘텐츠: 포트폴리오 사례 (tax103) & 개발 철학

[전환 (Conversion)]
- 매체: 메인 페이지 CTA & Contact
- 고객 행동: 이메일 문의 및 프로젝트 상담 요청
```

---

## 퍼널 최적화 체크리스트

- [ ] 퍼널 각 단계별 유입 경로와 측정 지표가 수립되었는가?
- [ ] 이탈률(Bounce Rate)이 가장 높은 구역을 파악했는가?
- [ ] 각 단계에 맞는 맞춤형 콘텐츠와 CTA가 준비되어 있는가?
"""
    },
    {
        "order_index": 9,
        "slug": "sns-organic-growth-and-community-marketing",
        "title": "SNS 인스타그램 & X(트위터) 오가닉 성장 및 커뮤니티 마케팅",
        "seo_title": "인스타그램 & X(트위터) 오가닉 성장 & 커뮤니티 마케팅 튜토리얼",
        "excerpt": "유료 광고 없이 오가닉(Organic)으로 팔로워와 커뮤니티 팬덤을 늘리는 인스타그램 캐러셀 및 트위터 타임라인 성장 공식입니다.",
        "content_md": """## 오가닉 마케팅(Organic Marketing)의 힘

광고비를 지출하지 않고 오직 고품질 콘텐츠와 커뮤니티 소통만으로 브랜딩을 구축하는 오가닉 마케팅은 가장 견고한 팬덤을 형성합니다.

---

## 인스타그램 10장 카드뉴스(Carousel) 성공 공식

1. **1번 표지**: "저장 필수" 강력한 이득 제시 (예: `2026년 마케터 필수 무료 AI 도구 7선`)
2. **2~8번 본문**: 요점만 명확히 간결한 텍스트 + 시각적 카드 UI
3. **9번 요약**: 핵심 1줄 요약 정리
4. **10번 CTA**: "프로필 링크 클릭" 또는 "댓글로 '템플릿'을 남겨주시면 DMs로 보내드립니다"

---

## X (Twitter) 타임라인 알도리즘 최적화 3수칙

1. **스레드(Thread) 활용**: 1개 트윗에 5~7개의 연결된 짧은 지식 스레드 작성
2. **외부 링크 분리**: 첫 트윗에 외부 URL을 넣으면 인게이지먼트 감소 ➔ 마지막 스레드 댓글에 URL 수록
3. **1-Click 공유 지원**: 웹사이트 내에 1-Click X 공유 버튼 설치

```html
<a href="https://x.com/intent/tweet?text=TITLE&url=URL" class="share-x-btn" target="_blank">
  𝕏 트위터 공유하기
</a>
```

---

## SNS 오가닉 성장 체크리스트

- [ ] 1번 표지가 직관적이고 저장을 유발하는가?
- [ ] 댓글 소통 및 리플라이에 적극적으로 반응하고 있는가?
- [ ] 사이트 내 소셜 공유 버튼이 제대로 구동하는가?
"""
    },
    {
        "order_index": 10,
        "slug": "email-marketing-and-lead-nurturing-automation",
        "title": "이메일 마케팅과 리드 너처링(Lead Nurturing) 자동화",
        "seo_title": "이메일 마케팅 전환 전략 & 자동화 리드 너처링 파이프라인",
        "excerpt": "수신자의 클릭을 유발하는 뉴스레터 작성법과 리드(Lead)를 수집하여 지속적으로 고객으로 육성(Nurturing)하는 이메일 자동화 시퀀스입니다.",
        "content_md": """## 이메일 마케팅의 여전한 강력함

소셜 미디어 알고리즘은 수시로 변경되지만, 이메일은 리드(Lead) 구독자와 1:1로 직접 소통할 수 있는 가장 확실한 소유 채널(Owned Media)입니다.

---

## 이메일 오픈율 & 클릭률 극대화 4대 요소

### 1. 직관적인 발신자 이름 (Sender Name)
`no-reply@` 대신 사람 이름이나 친근한 브랜드를 사용합니다. (예: `DAVHAVE Oscar Lee`)

### 2. 호기심 자극 제목 (Subject Line)
30자 이내로 수신자의 궁금증을 자극합니다. (예: `[단독] 2026년 구글 SEO 가이드 북 배포`)

### 3. 단 하나의 명확한 CTA (Single CTA)
이메일 안에 여러 목적의 버튼을 넣지 말고, 단 하나의 메인 버튼에 집중시킵니다.

---

## 4단계 리드 너처링(Lead Nurturing) 자동화 시퀀스

- **1일 차 (웰컴 메일)**: 무료 리소스(PDF, 템플릿) 전달 + 인사
- **3일 차 (지식 전달)**: 서비스 관련 가장 인기가 높은 무료 가이드 아티클 전송
- **7일 차 (성공 사례)**: 포트폴리오 및 실제 고객 후기 전송
- **14일 차 (전환 유도)**: 1:1 무료 상담 및 프로젝트 시작 제안

---

## 이메일 마케팅 체크리스트

- [ ] 이메일 제목이 30자 이내로 호기심을 유발하는가?
- [ ] 모바일 화면에서 이메일 템플릿이 깨지지 않고 잘 보이는가?
- [ ] 명확하고 눈에 띄는 단 하나의 CTA 버튼이 있는가?
"""
    }
]

print(f"1~10번 마케팅 레슨 {len(lessons_1to10)}개 생성 준비 완료")
