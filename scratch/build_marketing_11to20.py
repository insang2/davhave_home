import json, subprocess, os, sys

# 11 ~ 20 디지털 마케팅 전문 레슨 10편 생성
lessons_11to20 = [
    {
        "order_index": 11,
        "slug": "performance-ad-meta-and-google-ads-fundamentals",
        "title": "퍼포먼스 광고 기초: 메타(Meta) & 구글 디스플레이 광고",
        "seo_title": "퍼포먼스 마케팅 입문: Meta(인스타그램) & Google Ads 타겟팅",
        "excerpt": "Meta(인스타그램/페이스북) 타겟 광고와 구글 검색/디스플레이(GDN) 광고의 캠페인 구조, 소재 소재 제작 및 타겟팅 기법을 배웁니다.",
        "content_md": """## 퍼포먼스 마케팅(Performance Marketing)이란?

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
"""
    },
    {
        "order_index": 12,
        "slug": "roas-cac-metrics-and-performance-optimization",
        "title": "ROAS 및 CAC 계산법과 퍼포먼스 지표 최적화 전략",
        "seo_title": "ROAS, CAC, LTV 지표 공식 계산법 & 마케팅 효율 최적화",
        "excerpt": "광고 수익률(ROAS), 고객 획득 비용(CAC), 고객 생애 가치(LTV) 지표를 정확히 산출하고 마케팅 예산 집행을 데이터 기반으로 수호하는 가이드입니다.",
        "content_md": """## 핵심 디지털 마케팅 메트릭 3선

데이터 중심 마케팅에서는 주관적인 직관 대신 숫자로 말해야 합니다.

---

## 1. ROAS (Return on Ad Spend, 광고비 대비 매출액)

광고 지출 대비 얼마나 많은 매출이 발생했는가를 측정하는 지표입니다.

$$ROAS(\\%) = \\frac{\\text{광고를 통한 매출액}}{\\text{집행한 총 광고비}} \\times 100$$

*예시*: 광고비 100만 원 집행 후 매출 500만 원 발생 시 ROAS는 500%입니다.

---

## 2. CAC (Customer Acquisition Cost, 고객 획득 비용)

신규 고객 1명을 유치하는 데 들어간 모든 마케팅 및 영업 비용의 합입니다.

$$CAC = \\frac{\\text{총 마케팅 및 광고 집행비}}{\\text{획득한 신규 고객 수}}$$

---

## 3. LTV (Lifetime Value, 고객 생애 가치)

한 명의 고객이 우리 브랜드와의 전체 관계 기간 동안 지출하는 총 금액입니다.

성공적인 비즈니스는 **LTV > 3 x CAC** 공식을 만족해야 합니다.

---

## 지표 최적화 체크리스트

- [ ] 채널별 정확한 CAC가 산출되었는가?
- [ ] 손익분기점(BEP) ROAS 기준선이 수립되어 있는가?
"""
    },
    {
        "order_index": 13,
        "slug": "ga4-event-tracking-and-web-analytics",
        "title": "구글 애널리틱스 4(GA4) 이벤트 설치 및 웹 분석 실전",
        "seo_title": "GA4(Google Analytics 4) 이벤트 트래킹 & 웹 데이터 분석",
        "excerpt": "GA4 데이터 스크림 설정부터 구글 태그 매니저(GTM)를 활용한 버튼 클릭, 폼 제출 이벤트 자동 추적 가이드입니다.",
        "content_md": """## GA4(Google Analytics 4)의 패러다임

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
  gtag('js', new Date());
  gtag('config', 'G-YOUR_MEASUREMENT_ID');
</script>
```

---

## 주요 커스텀 이벤트 추적 예시

특정 버튼 클릭 시 커스텀 이벤트를 발송하는 자바스크립트 스크립트입니다.

```javascript
document.querySelector('.cta-btn').addEventListener('click', function() {
  gtag('event', 'contact_button_click', {
    'event_category': 'Engagement',
    'event_label': 'Main Page CTA'
  });
});
```

---

## 웹 데이터 분석 체크리스트

- [ ] GA4 측정 ID가 모든 페이지에 주입되었는가?
- [ ] 주요 전환 버튼(문의, 결제)에 이벤트 트래킹이 설정되었는가?
- [ ] 내부 IP 주소 제외 필터가 적용되었는가?
"""
    },
    {
        "order_index": 14,
        "slug": "conversion-rate-optimization-and-ab-testing",
        "title": "전환율 최적화(CRO) 및 A/B 테스트 실험 설계",
        "seo_title": "CRO(전환율 최적화) 기법 & A/B 테스트 통계적 실험 설계",
        "excerpt": "동일한 방문자 수로 2배 이상의 매출을 내는 전환율 최적화(CRO) 프로세스와 A/B 테스트 실험 가설 수립 기법입니다.",
        "content_md": """## 전환율 최적화(CRO)의 중요성

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
2. **CTA (행동 유도 버튼)**: 버튼 문구가 '제출'인가, '무료 가이드 받기'인가?
3. **Social Proof (사회적 증거)**: 고객 후기, 별점, 실제 사용 지표 표시 여부

---

## CRO 체크리스트

- [ ] 명확한 가설에 기초하여 A/B 테스트가 진행 중인가?
- [ ] 실험에 충분한 모수(샘플 사이즈)가 확보되었는가?
"""
    },
    {
        "order_index": 15,
        "slug": "landing-page-psychology-and-cta-optimization",
        "title": "랜딩 페이지 디자인 심리학과 CTA(Call to Action) 배치 법칙",
        "seo_title": "랜딩 페이지 설득 심리학 & CTA 버튼 최적화 디자인 가이드",
        "excerpt": "방문자를 고객으로 바꾸는 랜딩 페이지 레이아웃 섹션 순서와 설득 심리학 요소 및 고성능 CTA 버튼 구성법입니다.",
        "content_md": """## 고성능 랜딩 페이지의 섹션 배치 공식

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
- **문구**: '등록' 대신 **'지금 바로 100% 무료로 시작하기'**
- **위치**: 스크롤 없이 보이는 화면(Above the Fold)과 페이지 하단에 배치

---

## 랜딩 페이지 체크리스트

- [ ] Above the Fold 영역에 메인 가치 제안과 CTA가 보이는가?
- [ ] 고객의 의구심을 해소해줄 FAQ 섹션이 존재하는가?
"""
    },
    {
        "order_index": 16,
        "slug": "generative-engine-optimization-and-llm-indexing",
        "title": "AI 크롤러 수집 가이드: GEO & LLM 인덱싱 최적화",
        "seo_title": "GEO(생성형 엔진 최적화) & GPTBot/ClaudeBot AI 수집 허용",
        "excerpt": "Perplexity, ChatGPT, Claude 등 AI 검색엔진에 내 사이트 콘텐츠가 답변으로 인용되도록 최적화하는 GEO(Generative Engine Optimization) 기술입니다.",
        "content_md": """## SEO에서 GEO(Generative Engine Optimization)로의 진화

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
"""
    },
    {
        "order_index": 17,
        "slug": "brand-positioning-and-identity-strategy",
        "title": "브랜드 마케팅과 차별화 포지셔닝(Positioning) 기획",
        "seo_title": "브랜드 마케팅 & 포지셔닝(Positioning) 차별화 전략 수립",
        "excerpt": "경쟁사와 확연히 다른 브랜드 가치를 고객의 뇌리에 각인시키는 포지셔닝 맵 작성과 브랜드 톤앤매너 설정 방법입니다.",
        "content_md": """## 포지셔닝(Positioning)이란 무엇인가?

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
"""
    },
    {
        "order_index": 18,
        "slug": "b2b-lead-generation-and-linkedin-outreach",
        "title": "B2B 리드 제너레이션과 콜드 이메일/링크드인 마케팅",
        "seo_title": "B2B 마케팅 전략: 리드 수집, LinkedIn 아웃리치 & 콜드 메일",
        "excerpt": "기업 의사결정권자(C-Level)를 타겟으로 고품질 B2B 리드를 수집하고 링크드인과 아웃리치 메일로 계약을 성사시키는 가이드입니다.",
        "content_md": """## B2B 마케팅의 특징

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
"""
    },
    {
        "order_index": 19,
        "slug": "short-form-video-marketing-and-youtube-seo",
        "title": "동영상 마케팅: 숏폼(Shorts, Reels) 및 유튜브 검색 노출",
        "seo_title": "숏폼 마케팅(유튜브 쇼츠, 릴스) 대본 기획 & 유튜브 SEO 노출",
        "excerpt": "1분 이내의 유튜브 쇼츠(Shorts)와 인스타그램 릴스(Reels) 후킹 대본 작성법과 유튜브 알고리즘 상위 노출 전략입니다.",
        "content_md": """## 숏폼(Short-form) 콘텐츠가 대세인 이유

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
"""
    },
    {
        "order_index": 20,
        "slug": "360-integrated-marketing-communications-roadmap",
        "title": "디지털 마케팅 총정리: 360도 통합 마케팅(IMC) 로드맵",
        "seo_title": "디지털 마케팅 총정리 & 360도 통합 마케팅(IMC) 실전 로드맵",
        "excerpt": "SEO, 콘텐츠, 퍼포먼스 광고, SNS, 이메일 채널을 시너지 있게 결합하는 360도 통합 디지털 마케팅 Master 로드맵입니다.",
        "content_md": """## 통합 마케팅 커뮤니케이션(IMC)의 완성

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
"""
    }
]

print(f"11~20번 마케팅 레슨 {len(lessons_11to20)}개 생성 준비 완료")
