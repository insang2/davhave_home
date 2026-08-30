-- Insert 20 Digital Marketing lessons into D1 Database

DELETE FROM posts WHERE slug = 'digital-marketing-fundamentals-and-audience-persona';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '디지털 마케팅 개론 및 오디언스 페르소나 설계 가이드',
  'digital-marketing-fundamentals-and-audience-persona',
  'marketing',
  'published',
  1,
  '디지털 마케팅의 기본 개념부터 제품의 타겟 고객을 명확하게 입체화하는 타겟 페르소나(Target Audience Persona) 프레임워크와 AI 프롬프트를 상세 수록합니다.',
  '## 디지털 마케팅의 정의와 핵심 메커니즘

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
',
  '디지털 마케팅 입문 & 타겟 고객 페르소나 설계 완벽 튜토리얼',
  '디지털 마케팅의 기본 개념부터 제품의 타겟 고객을 명확하게 입체화하는 타겟 페르소나(Target Audience Persona) 프레임워크와 AI 프롬프트를 상세 수록합니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'seo-fundamentals-and-onpage-optimization';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '검색엔진 최적화(SEO) 기초부터 On-Page 테크니컬 가이드',
  'seo-fundamentals-and-onpage-optimization',
  'marketing',
  'published',
  2,
  '검색엔진이 내 사이트를 좋아하게 만드는 검색엔진 최적화(SEO)의 기본 원리와 타이틀, 메타 태그, H1~H3 헤딩 구조 설정법을 배웁니다.',
  '## 검색엔진 최적화(SEO)란 무엇인가?

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
',
  'SEO 기초 입문 & 온페이지(On-Page) 태그 최적화 실전 전략',
  '검색엔진이 내 사이트를 좋아하게 만드는 검색엔진 최적화(SEO)의 기본 원리와 타이틀, 메타 태그, H1~H3 헤딩 구조 설정법을 배웁니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'search-console-and-naver-searchadvisor-optimization';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '구글 검색 콘솔과 네이버 서치어드바이저 수집 최적화 실전',
  'search-console-and-naver-searchadvisor-optimization',
  'marketing',
  'published',
  3,
  'Google Search Console과 네이버 서치어드바이저에 사이트 소유권을 확인하고 sitemap.xml과 rss.xml을 등록하여 수집률을 100% 올리는 가이드입니다.',
  '## 검색엔진 색인(Indexing)의 기본 이해

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
- [ ] sitemap.xml 제출 상태가 ''성공''인가?
- [ ] robots.txt가 수집을 차단하고 있지 않은가?
',
  'Google Search Console & 네이버 서치어드바이저 색인 등록 실전',
  'Google Search Console과 네이버 서치어드바이저에 사이트 소유권을 확인하고 sitemap.xml과 rss.xml을 등록하여 수집률을 100% 올리는 가이드입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'keyword-research-and-search-intent-analysis';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '키워드 리서치와 검색 의도(Search Intent) 분석 전략',
  'keyword-research-and-search-intent-analysis',
  'marketing',
  'published',
  4,
  '월간 검색량, 경쟁 강도, 사용자 검색 의도(Informational, Transactional)를 분석하여 상위 노출될 키워드를 발굴하는 튜토리얼입니다.',
  '## 키워드 리서치의 중요성

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
',
  '키워드 리서치 기법 & 검색 의도(Search Intent) 맞춤형 콘텐츠 전략',
  '월간 검색량, 경쟁 강도, 사용자 검색 의도(Informational, Transactional)를 분석하여 상위 노출될 키워드를 발굴하는 튜토리얼입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'content-marketing-and-viral-storytelling-guide';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '콘텐츠 마케팅과 바이럴 스토리텔링 기획 워크북',
  'content-marketing-and-viral-storytelling-guide',
  'marketing',
  'published',
  5,
  '독자의 몰입을 끌어내는 스토리텔링 공식(PAS, AIDA)과 SNS 바이럴을 일으키는 아티클 기획 구조를 배웁니다.',
  '## 콘텐츠 마케팅의 본질

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
',
  '콘텐츠 마케팅 전략 & 바이럴 스토리텔링 작성 구조 가이드',
  '독자의 몰입을 끌어내는 스토리텔링 공식(PAS, AIDA)과 SNS 바이럴을 일으키는 아티클 기획 구조를 배웁니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'ai-assisted-marketing-copywriting-prompts';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'AI(Claude & ChatGPT)를 활용한 마케팅 카피라이팅 기법',
  'ai-assisted-marketing-copywriting-prompts',
  'marketing',
  'published',
  6,
  'Claude 및 ChatGPT AI 모델을 활용해 광고 카피, 블로그 개요, 이메일 제목을 10배 빠르게 생성하는 프롬프트 모음집입니다.',
  '## AI 카피라이팅 시대의 마케팅

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
',
  'AI 마케팅 카피라이팅 & Claude/ChatGPT 실전 프롬프트 10선',
  'Claude 및 ChatGPT AI 모델을 활용해 광고 카피, 블로그 개요, 이메일 제목을 10배 빠르게 생성하는 프롬프트 모음집입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'technical-seo-semantic-tags-and-jsonld';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '테크니컬 SEO: 시맨틱 태그, 폰트 Preload, JSON-LD 구조화 데이터',
  'technical-seo-semantic-tags-and-jsonld',
  'marketing',
  'published',
  7,
  '검색엔진 로봇과 웹 브라우저의 파싱 속도를 끌어올리는 시맨틱 HTML5, 폰트 Preload 힌트, Schema.org JSON-LD 구조화 데이터 기술입니다.',
  '## 테크니컬 SEO(Technical SEO)의 의의

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
',
  '테크니컬 SEO 완벽 가이드: 시맨틱 HTML, Preload & JSON-LD',
  '검색엔진 로봇과 웹 브라우저의 파싱 속도를 끌어올리는 시맨틱 HTML5, 폰트 Preload 힌트, Schema.org JSON-LD 구조화 데이터 기술입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'funnel-marketing-and-customer-journey-mapping';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '퍼널 마케팅과 고객 여정(Customer Journey) 지도 설계',
  'funnel-marketing-and-customer-journey-mapping',
  'marketing',
  'published',
  8,
  '인지(Awareness)부터 유입, 고려, 전환, 재방문까지 이어지는 마케팅 퍼널(AARRR)과 고객 이탈을 방지하는 모니터링 기법입니다.',
  '## 마케팅 퍼널(Funnel)의 개념

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
',
  '마케팅 퍼널(Funnel) 5단계 & 고객 여정 지도(Customer Journey) 설계',
  '인지(Awareness)부터 유입, 고려, 전환, 재방문까지 이어지는 마케팅 퍼널(AARRR)과 고객 이탈을 방지하는 모니터링 기법입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'sns-organic-growth-and-community-marketing';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'SNS 인스타그램 & X(트위터) 오가닉 성장 및 커뮤니티 마케팅',
  'sns-organic-growth-and-community-marketing',
  'marketing',
  'published',
  9,
  '유료 광고 없이 오가닉(Organic)으로 팔로워와 커뮤니티 팬덤을 늘리는 인스타그램 캐러셀 및 트위터 타임라인 성장 공식입니다.',
  '## 오가닉 마케팅(Organic Marketing)의 힘

광고비를 지출하지 않고 오직 고품질 콘텐츠와 커뮤니티 소통만으로 브랜딩을 구축하는 오가닉 마케팅은 가장 견고한 팬덤을 형성합니다.

---

## 인스타그램 10장 카드뉴스(Carousel) 성공 공식

1. **1번 표지**: "저장 필수" 강력한 이득 제시 (예: `2026년 마케터 필수 무료 AI 도구 7선`)
2. **2~8번 본문**: 요점만 명확히 간결한 텍스트 + 시각적 카드 UI
3. **9번 요약**: 핵심 1줄 요약 정리
4. **10번 CTA**: "프로필 링크 클릭" 또는 "댓글로 ''템플릿''을 남겨주시면 DMs로 보내드립니다"

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
',
  '인스타그램 & X(트위터) 오가닉 성장 & 커뮤니티 마케팅 튜토리얼',
  '유료 광고 없이 오가닉(Organic)으로 팔로워와 커뮤니티 팬덤을 늘리는 인스타그램 캐러셀 및 트위터 타임라인 성장 공식입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'email-marketing-and-lead-nurturing-automation';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '이메일 마케팅과 리드 너처링(Lead Nurturing) 자동화',
  'email-marketing-and-lead-nurturing-automation',
  'marketing',
  'published',
  10,
  '수신자의 클릭을 유발하는 뉴스레터 작성법과 리드(Lead)를 수집하여 지속적으로 고객으로 육성(Nurturing)하는 이메일 자동화 시퀀스입니다.',
  '## 이메일 마케팅의 여전한 강력함

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
',
  '이메일 마케팅 전환 전략 & 자동화 리드 너처링 파이프라인',
  '수신자의 클릭을 유발하는 뉴스레터 작성법과 리드(Lead)를 수집하여 지속적으로 고객으로 육성(Nurturing)하는 이메일 자동화 시퀀스입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'performance-ad-meta-and-google-ads-fundamentals';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '퍼포먼스 광고 기초: 메타(Meta) & 구글 디스플레이 광고',
  'performance-ad-meta-and-google-ads-fundamentals',
  'marketing',
  'published',
  11,
  'Meta(인스타그램/페이스북) 타겟 광고와 구글 검색/디스플레이(GDN) 광고의 캠페인 구조, 소재 소재 제작 및 타겟팅 기법을 배웁니다.',
  '## 퍼포먼스 마케팅(Performance Marketing)이란?

디지털 광고 플랫폼의 정밀한 데이터 추적 기능을 활용해 소액의 테스트 예산부터 대규모 예산까지 집행하며 측정 가능한 ROI/ROAS를 창출하는 광고 기법입니다.

---

## Meta(인스타그램) 광고 3단계 캠페인 구조

1. **캠페인 (Campaign)**: 광고 목표 설정 (유입, 리드 수집, 판매 전환 등)
2. **광고 세트 (Ad Set)**: 타겟 오디언스(위치, 연령, 관심사), 예산 및 노출 위치 설정
3. **광고 소재 (Ad Creative)**: 실제 이미지, 카드뉴스, 동영상 및 카피라이팅

---

## Google Ads 핵심 광고 유형 2가지

### 1. 검색 광고 (Search Ads)
사용자가 특정 키워드를 검색했을 때 상단에 노출되는 구매 의도가 매우 높은 광고 형태.

### 2. 디스플레이 광고 (GDN)
제휴 웹사이트 및 언론사 배너 영역에 비주얼 소재를 노출하여 리마케팅(Retargeting) 수행.

---

## 퍼포먼스 광고 점검 체크리스트

- [ ] 타겟 오디언스 세팅이 너무 좁거나 넓지 않은가?
- [ ] 이미지 소재 내 텍스트 비율이 과도하지 않은가?
- [ ] 랜딩 페이지와 광고 카피의 내용이 100% 일치하는가?
',
  '퍼포먼스 마케팅 입문: Meta(인스타그램) & Google Ads 타겟팅',
  'Meta(인스타그램/페이스북) 타겟 광고와 구글 검색/디스플레이(GDN) 광고의 캠페인 구조, 소재 소재 제작 및 타겟팅 기법을 배웁니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'roas-cac-metrics-and-performance-optimization';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'ROAS 및 CAC 계산법과 퍼포먼스 지표 최적화 전략',
  'roas-cac-metrics-and-performance-optimization',
  'marketing',
  'published',
  12,
  '광고 수익률(ROAS), 고객 획득 비용(CAC), 고객 생애 가치(LTV) 지표를 정확히 산출하고 마케팅 예산 집행을 데이터 기반으로 수호하는 가이드입니다.',
  '## 핵심 디지털 마케팅 메트릭 3선

데이터 중심 마케팅에서는 주관적인 직관 대신 숫자로 말해야 합니다.

---

## 1. ROAS (Return on Ad Spend, 광고비 대비 매출액)

광고 지출 대비 얼마나 많은 매출이 발생했는가를 측정하는 지표입니다.

$$ROAS(\%) = \frac{\text{광고를 통한 매출액}}{\text{집행한 총 광고비}} \times 100$$

*예시*: 광고비 100만 원 집행 후 매출 500만 원 발생 시 ROAS는 500%입니다.

---

## 2. CAC (Customer Acquisition Cost, 고객 획득 비용)

신규 고객 1명을 유치하는 데 들어간 모든 마케팅 및 영업 비용의 합입니다.

$$CAC = \frac{\text{총 마케팅 및 광고 집행비}}{\text{획득한 신규 고객 수}}$$

---

## 3. LTV (Lifetime Value, 고객 생애 가치)

한 명의 고객이 우리 브랜드와의 전체 관계 기간 동안 지출하는 총 금액입니다.

성공적인 비즈니스는 **LTV > 3 x CAC** 공식을 만족해야 합니다.

---

## 지표 최적화 체크리스트

- [ ] 채널별 정확한 CAC가 산출되었는가?
- [ ] 손익분기점(BEP) ROAS 기준선이 수립되어 있는가?
',
  'ROAS, CAC, LTV 지표 공식 계산법 & 마케팅 효율 최적화',
  '광고 수익률(ROAS), 고객 획득 비용(CAC), 고객 생애 가치(LTV) 지표를 정확히 산출하고 마케팅 예산 집행을 데이터 기반으로 수호하는 가이드입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'ga4-event-tracking-and-web-analytics';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '구글 애널리틱스 4(GA4) 이벤트 설치 및 웹 분석 실전',
  'ga4-event-tracking-and-web-analytics',
  'marketing',
  'published',
  13,
  'GA4 데이터 스크림 설정부터 구글 태그 매니저(GTM)를 활용한 버튼 클릭, 폼 제출 이벤트 자동 추적 가이드입니다.',
  '## GA4(Google Analytics 4)의 패러다임

GA4는 기존 유니버설 애널리틱스(UA)와 달리 모든 사용자 상호작용을 **이벤트(Event)** 단위로 측정합니다.

---

## 웹사이트 GA4 기본 태그 설치 코드

웹사이트의 `<head>` 영역 최상단에 주입하는 기본 측정 스크립트입니다.

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(''js'', new Date());
  gtag(''config'', ''G-YOUR_MEASUREMENT_ID'');
</script>
```

---

## 주요 커스텀 이벤트 추적 예시

특정 버튼 클릭 시 커스텀 이벤트를 발송하는 자바스크립트 스크립트입니다.

```javascript
document.querySelector(''.cta-btn'').addEventListener(''click'', function() {
  gtag(''event'', ''contact_button_click'', {
    ''event_category'': ''Engagement'',
    ''event_label'': ''Main Page CTA''
  });
});
```

---

## 웹 데이터 분석 체크리스트

- [ ] GA4 측정 ID가 모든 페이지에 주입되었는가?
- [ ] 주요 전환 버튼(문의, 결제)에 이벤트 트래킹이 설정되었는가?
- [ ] 내부 IP 주소 제외 필터가 적용되었는가?
',
  'GA4(Google Analytics 4) 이벤트 트래킹 & 웹 데이터 분석',
  'GA4 데이터 스크림 설정부터 구글 태그 매니저(GTM)를 활용한 버튼 클릭, 폼 제출 이벤트 자동 추적 가이드입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'conversion-rate-optimization-and-ab-testing';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '전환율 최적화(CRO) 및 A/B 테스트 실험 설계',
  'conversion-rate-optimization-and-ab-testing',
  'marketing',
  'published',
  14,
  '동일한 방문자 수로 2배 이상의 매출을 내는 전환율 최적화(CRO) 프로세스와 A/B 테스트 실험 가설 수립 기법입니다.',
  '## 전환율 최적화(CRO)의 중요성

웹사이트 유입을 2배 늘리는 것은 광고비가 2배 들지만, 웹사이트 전환율(Conversion Rate)을 2%에서 4%로 2배 올리는 것은 추가 광고비가 들지 않습니다.

---

## 4단계 A/B 테스트 실험 프로세스

1. **데이터 관찰**: GA4 및 히트맵(Hotjar)을 통한 이탈 구간 포착
2. **가설 수립**: "메인 CTA 버튼 색상을 주황색으로 바꾸면 클릭률이 15% 상승할 것이다."
3. **실험 집행**: 원본(A)과 변형(B)에 트래픽 50:50 분동 배정
4. **결과 분석**: 통계적 유의미성(p-value < 0.05) 검증 후 확정

---

## CRO를 위한 3대 핵심 승부처

1. **Headline (제목)**: 3초 안에 가치를 전달하는가?
2. **CTA (행동 유도 버튼)**: 버튼 문구가 ''제출''인가, ''무료 가이드 받기''인가?
3. **Social Proof (사회적 증거)**: 고객 후기, 별점, 실제 사용 지표 표시 여부

---

## CRO 체크리스트

- [ ] 명확한 가설에 기초하여 A/B 테스트가 진행 중인가?
- [ ] 실험에 충분한 모수(샘플 사이즈)가 확보되었는가?
',
  'CRO(전환율 최적화) 기법 & A/B 테스트 통계적 실험 설계',
  '동일한 방문자 수로 2배 이상의 매출을 내는 전환율 최적화(CRO) 프로세스와 A/B 테스트 실험 가설 수립 기법입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'landing-page-psychology-and-cta-optimization';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '랜딩 페이지 디자인 심리학과 CTA(Call to Action) 배치 법칙',
  'landing-page-psychology-and-cta-optimization',
  'marketing',
  'published',
  15,
  '방문자를 고객으로 바꾸는 랜딩 페이지 레이아웃 섹션 순서와 설득 심리학 요소 및 고성능 CTA 버튼 구성법입니다.',
  '## 고성능 랜딩 페이지의 섹션 배치 공식

잘 팔리는 랜딩 페이지는 설득의 심리학 구조를 완벽하게 따릅니다.

---

## 랜딩 페이지 7대 필수 섹션 구조

1. **Hero Section**: 강렬한 헤드라인 + 서브 문구 + Primary CTA
2. **Social Proof (신뢰)**: 대표 고객사 로고, 미디어 보도, 만족도 지표
3. **Pain Points (문제점)**: 고객이 현재 겪는 고통 지적
4. **Features & Benefits (해결책)**: 제품의 핵심 특징과 이점 3가지
5. **Detailed Portfolio / Case Study (증명)**: 실제 포트폴리오 사례
6. **FAQ (의구심 해소)**: 고객이 가질 만한 자주 묻는 질문 5가지
7. **Final Sticky CTA (최종 결론)**: 상담 및 구매 버튼

---

## CTA 버튼 디자인 법칙

- **색상**: 배경색과 대비되는 고대비 포인트 컬러 (예: 검은 배경에 주황색)
- **문구**: ''등록'' 대신 **''지금 바로 100% 무료로 시작하기''**
- **위치**: 스크롤 없이 보이는 화면(Above the Fold)과 페이지 하단에 배치

---

## 랜딩 페이지 체크리스트

- [ ] Above the Fold 영역에 메인 가치 제안과 CTA가 보이는가?
- [ ] 고객의 의구심을 해소해줄 FAQ 섹션이 존재하는가?
',
  '랜딩 페이지 설득 심리학 & CTA 버튼 최적화 디자인 가이드',
  '방문자를 고객으로 바꾸는 랜딩 페이지 레이아웃 섹션 순서와 설득 심리학 요소 및 고성능 CTA 버튼 구성법입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'generative-engine-optimization-and-llm-indexing';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'AI 크롤러 수집 가이드: GEO & LLM 인덱싱 최적화',
  'generative-engine-optimization-and-llm-indexing',
  'marketing',
  'published',
  16,
  'Perplexity, ChatGPT, Claude 등 AI 검색엔진에 내 사이트 콘텐츠가 답변으로 인용되도록 최적화하는 GEO(Generative Engine Optimization) 기술입니다.',
  '## SEO에서 GEO(Generative Engine Optimization)로의 진화

이제 사용자들은 구글 검색 외에도 Perplexity, Claude, ChatGPT AI 답변을 통해 정보를 얻습니다. AI 모델이 내 사이트 아티클을 출처로 인용하도록 만드는 기술이 **GEO**입니다.

---

## LLM 크롤러봇 허용 robots.txt 표준 설정

AI 크롤러봇(GPTBot, ClaudeBot, PerplexityBot 등)의 수집을 100% 개방합니다.

```text
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

---

## AI 답변으로 채택되는 콘텐츠의 3대 조건

1. **명확한 파싱 구조**: 마크다운 표, 번호 매기기 리스트, 코드 블록
2. **권위 있는 출처 명시**: 데이터 지표와 근거 서술
3. **llms.txt 제공**: 사이트 루트에 `llms.txt`를 서빙하여 사이트의 모든 최신 아티클 요약 제공

```text
# DAVHAVE LLMs Context File
> DAVHAVE는 모바일 앱, 웹, AI 개발 및 283개+ 무료 레슨을 서빙하는 플랫폼입니다.

## Key Hubs
- Blog: https://davhave.com/blog
- Education: https://davhave.com/education
```

---

## GEO 최적화 체크리스트

- [ ] robots.txt에서 AI 크롤러 봇을 차단하고 있지 않은가?
- [ ] /llms.txt 경로가 제대로 구현되어 200 OK 서빙되는가?
',
  'GEO(생성형 엔진 최적화) & GPTBot/ClaudeBot AI 수집 허용',
  'Perplexity, ChatGPT, Claude 등 AI 검색엔진에 내 사이트 콘텐츠가 답변으로 인용되도록 최적화하는 GEO(Generative Engine Optimization) 기술입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'brand-positioning-and-identity-strategy';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '브랜드 마케팅과 차별화 포지셔닝(Positioning) 기획',
  'brand-positioning-and-identity-strategy',
  'marketing',
  'published',
  17,
  '경쟁사와 확연히 다른 브랜드 가치를 고객의 뇌리에 각인시키는 포지셔닝 맵 작성과 브랜드 톤앤매너 설정 방법입니다.',
  '## 포지셔닝(Positioning)이란 무엇인가?

포지셔닝은 고객의 마음속에 내 브랜드가 차지하는 독보적인 위치를 설계하는 일입니다. "무엇이든 잘해요"가 아니라 "이 분야에서만큼은 독보적입니다"를 전달해야 합니다.

---

## 3단계 포지셔닝 맵(Positioning Map) 작성법

1. **축(Axis) 설정**: 시장의 핵심 구매 결정 요소 2가지선정 (예: 가격 x 전문성)
2. **경쟁사 배치**: 기존 플레이어들의 위치 매핑
3. **블루오션 발굴**: 아무도 차지하지 않은 유익한 공백 지점 선점

---

## DAVHAVE 브랜드 포지셔닝 예시

- **기존 시장**: 묵직하고 비싼 대형 외주 개발사 vs 검증되지 않은 저가 프리랜서
- **DAVHAVE 포지셔닝**: **"1인 스튜디오의 압도적 책임감 + 엣지 서버리스 기술력 + 무료 지식 개방"**

---

## 브랜드 마케팅 체크리스트

- [ ] 경쟁사와 차별화되는 한 줄 포지셔닝 문장이 완성되었는가?
- [ ] 모든 마케팅 채널의 톤앤매너가 일관성 있게 유지되는가?
',
  '브랜드 마케팅 & 포지셔닝(Positioning) 차별화 전략 수립',
  '경쟁사와 확연히 다른 브랜드 가치를 고객의 뇌리에 각인시키는 포지셔닝 맵 작성과 브랜드 톤앤매너 설정 방법입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'b2b-lead-generation-and-linkedin-outreach';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'B2B 리드 제너레이션과 콜드 이메일/링크드인 마케팅',
  'b2b-lead-generation-and-linkedin-outreach',
  'marketing',
  'published',
  18,
  '기업 의사결정권자(C-Level)를 타겟으로 고품질 B2B 리드를 수집하고 링크드인과 아웃리치 메일로 계약을 성사시키는 가이드입니다.',
  '## B2B 마케팅의 특징

B2C 마케팅이 개인의 감정적 구매를 유도한다면, B2B 마케팅은 기업의 ROI 개선과 위험 최소화를 논리적으로 증명해야 합니다.

---

## B2B 리드 폼(Lead Form) 구성 법칙

너무 많은 필드는 이탈률을 높입니다. 핵심 필드 4개만 수집합니다.

1. 이름 및 직함
2. 회사명 및 사이트 URL
3. 이메일 및 연락처
4. 현재 가장 해결하고 싶은 프로젝트 과제

---

## B2B 콜드 이메일(Cold Email) 작성 구조

```text
제목: [회사명]의 웹 로딩 속도 40% 개선 방안 제안

안녕하세요 [담당자명] 님,

[회사명] 사이트를 인상 깊게 보았습니다.
현재 모바일 환경에서 LCP 로딩 속도가 3.2초로 측정되어 아쉬운 이탈이 발생하는 것을 확인했습니다.

저희가 보유한 엣지 서버리스 기술을 적용하면 0.5초 이내로 단축이 가능합니다.

관련하여 10분 간략 커피챗 미팅이 가능하신지 여쭤봅니다.

감사합니다.
DAVHAVE Oscar Lee 드림
```

---

## B2B 마케팅 체크리스트

- [ ] B2B 리드 수집 폼이 간결하고 직관적인가?
- [ ] 콜드 메일에 상대방 기업에 대한 맞춤형 분석 내용이 수록되었는가?
',
  'B2B 마케팅 전략: 리드 수집, LinkedIn 아웃리치 & 콜드 메일',
  '기업 의사결정권자(C-Level)를 타겟으로 고품질 B2B 리드를 수집하고 링크드인과 아웃리치 메일로 계약을 성사시키는 가이드입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'short-form-video-marketing-and-youtube-seo';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '동영상 마케팅: 숏폼(Shorts, Reels) 및 유튜브 검색 노출',
  'short-form-video-marketing-and-youtube-seo',
  'marketing',
  'published',
  19,
  '1분 이내의 유튜브 쇼츠(Shorts)와 인스타그램 릴스(Reels) 후킹 대본 작성법과 유튜브 알고리즘 상위 노출 전략입니다.',
  '## 숏폼(Short-form) 콘텐츠가 대세인 이유

모바일 사용자들의 주의 지속 시간(Attention Span)이 짧아짐에 따라 60초 이내의 숏폼 동영상이 브랜드 인지도 확보에 최고의 마케팅 수단이 되었습니다.

---

## 숏폼 60초 대본 작성 공식 (Hook - Value - CTA)

- **0~3초 (Hook)**: 강렬한 질문이나 시각적 반전 (예: "아직도 블로그 글 하나 쓰는데 3시간 걸리시나요?")
- **4~45초 (Value)**: 핵심 꿀팁 3가지 빠른 전달
- **46~60초 (CTA)**: "더 자세한 복붙용 템플릿은 프로필 링크에서 확인하세요"

---

## 유튜브 SEO(Youtube SEO) 3대 설정

1. **Title**: 메인 키워드를 앞쪽에 둔 흥미로운 제목
2. **Description**: 영상 내용 요약 + 타임스탬프 + 사이트 URL 수록
3. **Tags**: 관련 검색 키워드 5~8개 수록

---

## 숏폼 마케팅 체크리스트

- [ ] 영상 시작 3초 안에 시청자의 주의를 끌었는가?
- [ ] 자막 폰트 크기가 모바일 화면에서 명확히 읽히는가?
',
  '숏폼 마케팅(유튜브 쇼츠, 릴스) 대본 기획 & 유튜브 SEO 노출',
  '1분 이내의 유튜브 쇼츠(Shorts)와 인스타그램 릴스(Reels) 후킹 대본 작성법과 유튜브 알고리즘 상위 노출 전략입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = '360-integrated-marketing-communications-roadmap';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '디지털 마케팅 총정리: 360도 통합 마케팅(IMC) 로드맵',
  '360-integrated-marketing-communications-roadmap',
  'marketing',
  'published',
  20,
  'SEO, 콘텐츠, 퍼포먼스 광고, SNS, 이메일 채널을 시너지 있게 결합하는 360도 통합 디지털 마케팅 Master 로드맵입니다.',
  '## 통합 마케팅 커뮤니케이션(IMC)의 완성

독립된 마케팅 채널(SEO, 광고, SNS, 이메일)들이 파편화되지 않고 하나의 명확한 브랜드 메시지로 유기적으로 연결될 때 마케팅 성과는 극대화됩니다.

---

## 360도 디지털 마케팅 로드맵 구조

```text
                     ┌──────────────────┐
                     │   타겟 페르소나  │
                     └────────┬─────────┘
                              │
             ┌────────────────┴────────────────┐
             ▼                                 ▼
   [Inbound / Organic]                [Outbound / Paid]
   - SEO 최적화 (Google/Naver)        - Meta 디스플레이 광고
   - 무료 Education Hub 레슨           - Google 검색 광고
   - SNS (Insta, X, YouTube)          - B2B 콜드 아웃리치
             │                                 │
             └────────────────┬────────────────┘
                              ▼
                   ┌──────────────────┐
                   │  고성능 랜딩페이지 │
                   └──────────┬───────┘
                              ▼
                   ┌──────────────────┐
                   │  리드 너처링 이메일│
                   └──────────┬───────┘
                              ▼
                   ┌──────────────────┐
                   │  최종 서비스 전환  │
                   └──────────────────┘
```

---

## 지속 가능한 마케팅을 위한 3대 계율

1. **콘텐츠 자산화**: 사라지는 광고비에만 의존하지 않고, 검색엔진에 영구 축적되는 SEO 아티클 구축
2. **데이터 피드백**: 매주 GA4 및 전환 지표를 확인하여 하위 10% 콘텐츠 리팩터링
3. **고객과의 진솔한 연결**: 단기적인 판매보다 장기적인 브랜드 신뢰 구축

---

## 디지털 마케팅 마스터 체크리스트

- [ ] Inbound(SEO, 콘텐츠)와 Outbound(광고, 아웃리치)가 균형을 이루는가?
- [ ] 모든 채널이 랜딩 페이지와 최종 전환으로 원활히 유도되고 있는가?
',
  '디지털 마케팅 총정리 & 360도 통합 마케팅(IMC) 실전 로드맵',
  'SEO, 콘텐츠, 퍼포먼스 광고, SNS, 이메일 채널을 시너지 있게 결합하는 360도 통합 디지털 마케팅 Master 로드맵입니다.',
  DATETIME('now'),
  DATETIME('now')
);
