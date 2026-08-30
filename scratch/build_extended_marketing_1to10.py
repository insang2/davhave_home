import json, os, sys, re

# 1~10번 레슨 내용 대폭 확장 & 핵심 마케팅 & SEO 용어 사전 (Glossary) 추가
lessons_1to10_ext = [
    {
        "order_index": 1,
        "slug": "digital-marketing-fundamentals-and-audience-persona",
        "title": "디지털 마케팅 개론 및 오디언스 페르소나 설계 가이드",
        "seo_title": "디지털 마케팅 입문 & 타겟 고객 페르소나 설계 완벽 튜토리얼",
        "excerpt": "디지털 마케팅의 기본 개념부터 제품의 타겟 고객을 명확하게 입체화하는 타겟 페르소나(Target Audience Persona) 프레임워크와 용어 사전 및 AI 프롬프트를 상세 수록합니다.",
        "content_md": """## 디지털 마케팅의 정의와 핵심 메커니즘

디지털 마케팅(Digital Marketing)은 인터넷, 검색엔진, 모바일 기기, 소셜 미디어 등의 디지털 채널을 활용해 잠재고객에게 제품과 서비스의 가치를 전달하고, 고객 행동(구매, 가입, 문의)을 유도하는 과학적인 활동입니다.

기존 매체(TV, 신문, 전단지) 마케팅과의 가장 큰 차이점은 **모든 데이터의 측정 가능성(Measurability)**과 **정밀한 타겟팅(Targeting)**에 있습니다. 과거에는 광고를 1,000만 명에게 노출해도 몇 명이 실제로 매장에 방문했는지 알 수 없었지만, 디지털 마케팅에서는 광고를 클릭한 유저의 연령, 기기, 접속 시간, 최종 구매 여부까지 1원 단위로 추적할 수 있습니다.

---

## 3단계 마케팅 타겟 페르소나(Persona) 설계 템플릿

성공적인 마케팅 캠페인을 위해서는 우리의 핵심 고객이 누구인지 명확히 설정해야 합니다. 가상의 인물인 '페르소나'를 구체적으로 그릴수록 광고 문구와 콘텐츠의 설득력이 10배 이상 상승합니다.

### 1단계: 데모그래픽(Demographics - 인구통계학적 특성) 수집
- **연령/성별**: 예: 28~38세 남녀 직장인 및 초보 창업가
- **직업/소득**: IT/스타트업/전문직, 연봉 4,000만~6,000만 원
- **주요 채널**: 인스타그램, 유튜브, 네이버 블로그, 트위터(X)

### 2단계: 페인 포인트(Pain Points - 고통과 불편함) 파악
- "업무 생산성을 높이고 싶지만 기술적 지식이 부족하여 시간이 오래 걸림"
- "퇴근 후 자기개발이나 마케팅을 하고 싶지만 무엇부터 시작할지 막막함"
- "비싼 외주 마케팅 비를 지출했지만 실질적인 매출로 이어지지 않음"

### 3단계: 솔루션(Solution - 가치 제안) 연결
- "하루 10분 투자로 AI 도구와 마케팅 전략을 마스터하는 숏폼 튜토리얼 제공"
- "검증된 복붙용 프롬프트와 템플릿 제공으로 작업 시간 80% 단축"

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

초보 사용자가 마케팅 실무에서 반드시 알아야 할 핵심 용어 설명입니다.

- **페르소나 (Target Persona)**: 제품이나 서비스를 구매할 가능성이 가장 높은 상상의 대표 타겟 고객 프로필.
- **타겟팅 (Targeting)**: 전체 시장 중 우리 제품의 핵심 고객군을 집중적으로 선별하여 마케팅 자원을 집중하는 행위.
- **페인 포인트 (Pain Point)**: 고객이 일상이나 업무에서 실제로 겪고 있는 고통, 문제점, 혹은 강한 불편함.
- **전환 (Conversion)**: 웹사이트 방문자가 마케터가 의도한 행동(회원가입, 무료 가이드 다운로드, 견적 문의, 제품 결제)을 완료하는 것.
- **CTA (Call to Action)**: '무료 가이드 다운로드', '지금 상담하기'처럼 유저의 행동을 직접적으로 유도하는 버튼이나 문구.

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
        "excerpt": "검색엔진이 내 사이트를 좋아하게 만드는 검색엔진 최적화(SEO)의 기본 원리와 타이틀, 메타 태그, H1~H3 헤딩 구조, 용어 사전을 배웁니다.",
        "content_md": """## 검색엔진 최적화(SEO)란 무엇인가?

검색엔진 최적화(Search Engine Optimization, SEO)는 구글, 네이버, 빙 등의 검색엔진 검색 결과 상단에 내 웹페이지가 무료(Organic)로 노출되도록 웹사이트 구조와 콘텐츠를 최적화하는 전략입니다.

광고비를 지출하는 검색광고(SA)와 달리, SEO를 통해 상위에 노출된 웹페이지는 24시간 365일 광고비 지출 없이 지속적인 유기적 트래픽(Organic Traffic)을 끌어오는 최고의 디지털 자산이 됩니다.

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **SEO (Search Engine Optimization)**: 검색엔진 최적화. 검색 결과 상단에 사이트를 노출시키는 마케팅 기법.
- **On-Page SEO (온페이지 SEO)**: 내 웹사이트 내부의 HTML 코드, 메타 태그, 헤딩 구조, 콘텐츠 퀄리티를 최적화하는 작업.
- **Off-Page SEO (오프페이지 SEO)**: 외부 사이트에서의 백링크(Backlink) 획득, SNS 공유 등 사이트 외부 신뢰도를 높이는 작업.
- **Canonical Tag (대표 URL 태그)**: 동일하거나 유사한 여러 URL 중에서 검색엔진에게 '이것이 진짜 대표 문서'임을 알려주는 HTML 태그.
- **CTR (Click-Through Rate)**: 클릭률. 검색 결과에 노출된 횟수 대비 실제 클릭하여 접속한 비율.

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
        "excerpt": "Google Search Console과 네이버 서치어드바이저에 사이트 소유권을 확인하고 sitemap.xml과 rss.xml, 용어 사전을 배우는 가이드입니다.",
        "content_md": """## 검색엔진 색인(Indexing)의 기본 이해

웹사이트를 아무리 아름답게 만들어도 크롤러 봇(Googlebot, Yeti)이 내 사이트를 방문하고 색인(Index)하지 않으면 검색 결과에 노출되지 않습니다.

웹의 세계에서는 **크롤링(Crawling) ➔ 색인(Indexing) ➔ 랭킹(Ranking)** 3단계를 거쳐 비로소 유저에게 웹페이지가 노출됩니다.

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **크롤러 (Crawler / Bot)**: 인터넷을 돌아다니며 웹페이지의 콘텐츠와 링크를 수집하는 검색엔진 로봇 (예: Googlebot, Yeti).
- **색인 (Indexing)**: 크롤러가 수집한 웹페이지 정보를 검색엔진의 거대한 데이터베이스 서버에 등록하는 과정.
- **Sitemap.xml (사이트맵)**: 웹사이트에 존재하는 모든 공개 페이지의 목록과 업데이트 날짜를 담고 있는 XML 파일.
- **robots.txt**: 검색엔진 크롤러 봇에게 '어느 페이지를 수집해도 되고, 어느 페이지는 접근하면 안 되는지' 알려주는 규약 파일.
- **RSS (Really Simple Syndication)**: 웹사이트의 최신 콘텐츠 목록을 실시간으로 구독 기기나 검색엔진에 전달하는 규격.

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **검색 의도 (Search Intent)**: 사용자가 특정 키워드를 검색창에 입력한 근본적인 목적과 요구사항.
- **숏테일 키워드 (Short-tail Keyword)**: '마케팅', '앱 개발'처럼 1~2 단어로 이루어진 검색량이 매우 많고 경쟁이 치열한 키워드.
- **롱테일 키워드 (Long-tail Keyword)**: '초보자를 위한 인스타그램 마케팅 가이드'처럼 3단어 이상으로 구성되어 검색량은 적지만 전환율이 높은 키워드.
- **씨앗 키워드 (Seed Keyword)**: 키워드 리서치의 출발점이 되는 가장 기본적이고 광범위한 대표 주제 단어.

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
        "excerpt": "독자의 몰입을 끌어내는 스토리텔링 공식(PAS, AIDA)과 SNS 바이럴을 일으키는 아티클 기획 구조 및 용어 설명입니다.",
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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **콘텐츠 마케팅 (Content Marketing)**: 유용하고 일관된 콘텐츠를 제작·배포하여 명확하게 정의된 오디언스를 유인하고 이끄는 전략적 마케팅.
- **바이럴 (Viral)**: 바이러스처럼 입소문이 퍼지듯 유저들이 자발적으로 콘텐츠를 공유하고 퍼트리는 현상.
- **PAS 프레임워크**: 문제(Problem) ➔ 심화(Agitate) ➔ 해결책(Solution) 순서로 독자를 설득하는 카피라이팅 공식.
- **AIDA 프레임워크**: 주의(Attention) ➔ 흥미(Interest) ➔ 욕구(Desire) ➔ 행동(Action) 순서의 마케팅 설득 모델.

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
주제: 2026년 최신 구글 SEO 알고리즘 변경점 및 대응 가이드
조건: 이모지 1개 포함, 30자 이내, 호기심 유발
```

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **카피라이팅 (Copywriting)**: 광고나 마케팅 목적으로 독자의 구매나 행동을 유도하기 위한 문장을 작성하는 기술.
- **프롬프트 (Prompt)**: AI 모델(Claude, ChatGPT)에게 원하는 결과물을 얻기 위해 입력하는 명령어나 질문 텍스트.
- **할루시네이션 (Hallucination)**: AI가 거짓 정보나 없는 사실을 마치 진실인 것처럼 그럴듯하게 생성하는 현상.
- **톤앤매너 (Tone & Manner)**: 브랜드나 글이 가지고 있는 전반적인 어조, 분위기, 표현 방식.

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **테크니컬 SEO (Technical SEO)**: 크롤링과 인덱싱이 원활하도록 웹사이트의 기술적 아키텍처, 속도, 보안을 최적화하는 작업.
- **시맨틱 HTML (Semantic HTML)**: `<article>`, `<header>`처럼 태그 자체가 의미를 가진 HTML5 태그 구조.
- **JSON-LD**: JavaScript Object Notation for Linked Data. 웹페이지의 의미 구조를 검색엔진에게 자바스크립트 객체 형태로 전달하는 표준 형식.
- **리치 스니펫 (Rich Snippets)**: 검색 결과 화면에 일반 텍스트 외에 별점, 이미지, FAQ 등이 풍부하게 함께 노출되는 기능.
- **Preload (프리로드)**: 브라우저가 리소스를 발견하기 전에 가장 중요한 폰트나 CSS를 미리 다운로드하도록 지시하는 힌트.

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **마케팅 퍼널 (Marketing Funnel)**: 유저가 브랜드를 알게 된 후 최종 구매에 이르기까지 단계별로 이탈하며 좁아지는 과정을 표현한 모델.
- **AARRR (해적 지표)**: 벤처투자자 데이브 맥클루어가 제안한 유입(Acquisition), 활성화(Activation), 리텐션(Retention), 매출(Revenue), 추천(Referral) 5단계 성과 지표.
- **고객 여정 지도 (Customer Journey Map)**: 고객이 제품을 접하고 구매하기까지의 모든 터치포인트와 감정 변화를 단계별로 그린 지도.
- **이탈률 (Bounce Rate)**: 방문자가 첫 페이지에 진입한 후 다른 클릭이나 이동 없이 곧바로 사이트를 나가버린 비율.

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

## X (Twitter) 타임라인 알고리즘 최적화 3수칙

1. **스레드(Thread) 활용**: 1개 트윗에 5~7개의 연결된 짧은 지식 스레드 작성
2. **외부 링크 분리**: 첫 트윗에 외부 URL을 넣으면 인게이지먼트 감소 ➔ 마지막 스레드 댓글에 URL 수록
3. **1-Click 공유 지원**: 웹사이트 내에 1-Click X 공유 버튼 설치

```html
<a href="https://x.com/intent/tweet?text=TITLE&url=URL" class="share-x-btn" target="_blank">
  𝕏 트위터 공유하기
</a>
```

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **오가닉 트래픽 (Organic Traffic)**: 유료 광고비를 지출하지 않고 검색엔진이나 소셜미디어 유저의 자연발생적 클릭으로 유입된 트래픽.
- **캐러셀 (Carousel)**: 인스타그램 등에서 여러 장의 이미지 카드를 슬라이드 형태로 옆으로 넘겨볼 수 있게 만든 카드뉴스 형식.
- **스레드 (Thread)**: 트위터(X)에서 하나의 주제에 대해 여러 개의 트윗을 릴레이처럼 연결하여 쓴 연작 글.
- **인게이지먼트 (Engagement)**: 유저가 콘텐츠에 보인 반응(좋아요, 댓글, 공유, 저장)의 총체적 참여도.

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **리드 (Lead)**: 우리 제품에 관심을 가지고 이메일이나 연락처 정보를 제공한 잠재 고객.
- **리드 너처링 (Lead Nurturing)**: 아직 구매 준비가 되지 않은 리드에게 유용한 지식과 정보를 지속적으로 제공하여 구매고객으로 육성하는 활동.
- **오픈율 (Open Rate)**: 발송된 전체 이메일 중 수신자가 실제로 메일을 열어본 비율.
- **오운드 미디어 (Owned Media)**: 기업이 직접 소유하고 통제할 수 있는 자사 웹사이트, 이메일 뉴스레터 리스트, 자체 앱.

---

## 이메일 마케팅 체크리스트

- [ ] 이메일 제목이 30자 이내로 호기심을 유발하는가?
- [ ] 모바일 화면에서 이메일 템플릿이 깨지지 않고 잘 보이는가?
- [ ] 명확하고 눈에 띄는 단 하나의 CTA 버튼이 있는가?
"""
    }
]

print(f"확장 1~10번 레슨 {len(lessons_1to10_ext)}개 생성 준비 완료")
