-- Update 30 marketing lessons with extended content and Glossary section

UPDATE posts 
SET title = '디지털 마케팅 개론 및 오디언스 페르소나 설계 가이드',
    excerpt = '디지털 마케팅의 기본 개념부터 제품의 타겟 고객을 명확하게 입체화하는 타겟 페르소나(Target Audience Persona) 프레임워크와 용어 사전 및 AI 프롬프트를 상세 수록합니다.',
    content_md = '## 디지털 마케팅의 정의와 핵심 메커니즘

디지털 마케팅(Digital Marketing)은 인터넷, 검색엔진, 모바일 기기, 소셜 미디어 등의 디지털 채널을 활용해 잠재고객에게 제품과 서비스의 가치를 전달하고, 고객 행동(구매, 가입, 문의)을 유도하는 과학적인 활동입니다.

기존 매체(TV, 신문, 전단지) 마케팅과의 가장 큰 차이점은 **모든 데이터의 측정 가능성(Measurability)**과 **정밀한 타겟팅(Targeting)**에 있습니다. 과거에는 광고를 1,000만 명에게 노출해도 몇 명이 실제로 매장에 방문했는지 알 수 없었지만, 디지털 마케팅에서는 광고를 클릭한 유저의 연령, 기기, 접속 시간, 최종 구매 여부까지 1원 단위로 추적할 수 있습니다.

---

## 3단계 마케팅 타겟 페르소나(Persona) 설계 템플릿

성공적인 마케팅 캠페인을 위해서는 우리의 핵심 고객이 누구인지 명확히 설정해야 합니다. 가상의 인물인 ''페르소나''를 구체적으로 그릴수록 광고 문구와 콘텐츠의 설득력이 10배 이상 상승합니다.

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
- **CTA (Call to Action)**: ''무료 가이드 다운로드'', ''지금 상담하기''처럼 유저의 행동을 직접적으로 유도하는 버튼이나 문구.

---

## 핵심 체크리스트 (Summary Checklist)

- [ ] 타겟 페르소나의 인구통계학적 특징이 정의되었는가?
- [ ] 고객의 Pain Point와 제품의 해결책이 1:1로 매칭되는가?
- [ ] 페르소나에 맞는 메인 마케팅 소셜 채널이 선정되었는가?
',
    content_html = '<h2>디지털 마케팅의 정의와 핵심 메커니즘</h2>
<p>디지털 마케팅(Digital Marketing)은 인터넷, 검색엔진, 모바일 기기, 소셜 미디어 등의 디지털 채널을 활용해 잠재고객에게 제품과 서비스의 가치를 전달하고, 고객 행동(구매, 가입, 문의)을 유도하는 과학적인 활동입니다.</p>
<p>기존 매체(TV, 신문, 전단지) 마케팅과의 가장 큰 차이점은 <strong>모든 데이터의 측정 가능성(Measurability)</strong>과 <strong>정밀한 타겟팅(Targeting)</strong>에 있습니다. 과거에는 광고를 1,000만 명에게 노출해도 몇 명이 실제로 매장에 방문했는지 알 수 없었지만, 디지털 마케팅에서는 광고를 클릭한 유저의 연령, 기기, 접속 시간, 최종 구매 여부까지 1원 단위로 추적할 수 있습니다.</p>
<hr />
<h2>3단계 마케팅 타겟 페르소나(Persona) 설계 템플릿</h2>
<p>성공적인 마케팅 캠페인을 위해서는 우리의 핵심 고객이 누구인지 명확히 설정해야 합니다. 가상의 인물인 ''페르소나''를 구체적으로 그릴수록 광고 문구와 콘텐츠의 설득력이 10배 이상 상승합니다.</p>
<h3>1단계: 데모그래픽(Demographics - 인구통계학적 특성) 수집</h3>
<ul>
<li><strong>연령/성별</strong>: 예: 28~38세 남녀 직장인 및 초보 창업가</li>
<li><strong>직업/소득</strong>: IT/스타트업/전문직, 연봉 4,000만~6,000만 원</li>
<li><strong>주요 채널</strong>: 인스타그램, 유튜브, 네이버 블로그, 트위터(X)</li>
</ul>
<h3>2단계: 페인 포인트(Pain Points - 고통과 불편함) 파악</h3>
<ul>
<li>"업무 생산성을 높이고 싶지만 기술적 지식이 부족하여 시간이 오래 걸림"</li>
<li>"퇴근 후 자기개발이나 마케팅을 하고 싶지만 무엇부터 시작할지 막막함"</li>
<li>"비싼 외주 마케팅 비를 지출했지만 실질적인 매출로 이어지지 않음"</li>
</ul>
<h3>3단계: 솔루션(Solution - 가치 제안) 연결</h3>
<ul>
<li>"하루 10분 투자로 AI 도구와 마케팅 전략을 마스터하는 숏폼 튜토리얼 제공"</li>
<li>"검증된 복붙용 프롬프트와 템플릿 제공으로 작업 시간 80% 단축"</li>
</ul>
<hr />
<h2>AI 활용 페르소나 작성 복붙용 프롬프트</h2>
<p>Claude 및 ChatGPT에 아래 프롬프트를 복사하여 붙여넣으면 3분 만에 정밀 페르소나를 얻을 수 있습니다.</p>
<pre><code class="language-text">[역할 부여]
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
5. 이 고객의 마음을 사로잡을 마케팅 헤드라인 문구 3개</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<p>초보 사용자가 마케팅 실무에서 반드시 알아야 할 핵심 용어 설명입니다.</p>
<ul>
<li><strong>페르소나 (Target Persona)</strong>: 제품이나 서비스를 구매할 가능성이 가장 높은 상상의 대표 타겟 고객 프로필.</li>
<li><strong>타겟팅 (Targeting)</strong>: 전체 시장 중 우리 제품의 핵심 고객군을 집중적으로 선별하여 마케팅 자원을 집중하는 행위.</li>
<li><strong>페인 포인트 (Pain Point)</strong>: 고객이 일상이나 업무에서 실제로 겪고 있는 고통, 문제점, 혹은 강한 불편함.</li>
<li><strong>전환 (Conversion)</strong>: 웹사이트 방문자가 마케터가 의도한 행동(회원가입, 무료 가이드 다운로드, 견적 문의, 제품 결제)을 완료하는 것.</li>
<li><strong>CTA (Call to Action)</strong>: ''무료 가이드 다운로드'', ''지금 상담하기''처럼 유저의 행동을 직접적으로 유도하는 버튼이나 문구.</li>
</ul>
<hr />
<h2>핵심 체크리스트 (Summary Checklist)</h2>
<ul>
<li>[ ] 타겟 페르소나의 인구통계학적 특징이 정의되었는가?</li>
<li>[ ] 고객의 Pain Point와 제품의 해결책이 1:1로 매칭되는가?</li>
<li>[ ] 페르소나에 맞는 메인 마케팅 소셜 채널이 선정되었는가?</li>
</ul>',
    seo_description = '디지털 마케팅의 기본 개념부터 제품의 타겟 고객을 명확하게 입체화하는 타겟 페르소나(Target Audience Persona) 프레임워크와 용어 사전 및 AI 프롬프트를 상세 수록합니다.',
    updated_at = DATETIME('now')
WHERE slug = 'digital-marketing-fundamentals-and-audience-persona';

UPDATE posts 
SET title = '검색엔진 최적화(SEO) 기초부터 On-Page 테크니컬 가이드',
    excerpt = '검색엔진이 내 사이트를 좋아하게 만드는 검색엔진 최적화(SEO)의 기본 원리와 타이틀, 메타 태그, H1~H3 헤딩 구조, 용어 사전을 배웁니다.',
    content_md = '## 검색엔진 최적화(SEO)란 무엇인가?

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
- **Canonical Tag (대표 URL 태그)**: 동일하거나 유사한 여러 URL 중에서 검색엔진에게 ''이것이 진짜 대표 문서''임을 알려주는 HTML 태그.
- **CTR (Click-Through Rate)**: 클릭률. 검색 결과에 노출된 횟수 대비 실제 클릭하여 접속한 비율.

---

## SEO 점검 체크리스트

- [ ] 페이지당 `<h1>` 태그가 오직 1개만 존재하는가?
- [ ] Title 태그에 메인 키워드가 포함되었는가?
- [ ] Meta Description이 150자 이내로 영감 있게 작성되었는가?
- [ ] Canonical URL 태그가 제대로 연결되었는가?
',
    content_html = '<h2>검색엔진 최적화(SEO)란 무엇인가?</h2>
<p>검색엔진 최적화(Search Engine Optimization, SEO)는 구글, 네이버, 빙 등의 검색엔진 검색 결과 상단에 내 웹페이지가 무료(Organic)로 노출되도록 웹사이트 구조와 콘텐츠를 최적화하는 전략입니다.</p>
<p>광고비를 지출하는 검색광고(SA)와 달리, SEO를 통해 상위에 노출된 웹페이지는 24시간 365일 광고비 지출 없이 지속적인 유기적 트래픽(Organic Traffic)을 끌어오는 최고의 디지털 자산이 됩니다.</p>
<hr />
<h2>필수 On-Page SEO 4대 요소</h2>
<h3>1. Title 태그 (제목 태그)</h3>
<p>검색 결과 클릭률(CTR)에 직결되는 가장 중요한 요소입니다. 50~60자 이내로 핵심 키워드를 전면에 배치합니다.</p>
<pre><code class="language-html">&lt;title&gt;디지털 마케팅 입문 &amp;amp; SEO 최적화 완벽 가이드 | DAVHAVE&lt;/title&gt;</code></pre>
<h3>2. Meta Description (메타 설명)</h3>
<p>검색 결과 스니펫에 노출되는 요약문입니다. 130~150자 이내로 클릭을 유도하는 액션 문구를 작성합니다.</p>
<pre><code class="language-html">&lt;meta name="description" content="SEO의 기본 원리와 Title, Meta Description, H1 헤딩 태그 설정법을 초보자 눈높이에서 가장 정밀하게 설명합니다." /&gt;</code></pre>
<h3>3. H1, H2, H3 헤딩 구조</h3>
<p>페이지당 오직 <strong>하나의 <code><h1></code> 태그</strong>만을 사용하고, 논리적인 계층 구조로 배치합니다.</p>
<pre><code class="language-html">&lt;h1&gt;SEO 최적화 마스터 가이드&lt;/h1&gt;
&lt;h2&gt;1. On-Page SEO의 개념&lt;/h2&gt;
&lt;h3&gt;1-1. Title 태그 작성법&lt;/h3&gt;
&lt;h2&gt;2. Off-Page SEO 전략&lt;/h2&gt;</code></pre>
<h3>4. Canonical URL (대표 URL)</h3>
<p>중복 콘텐츠 이슈를 방지하기 위해 검색엔진에 정본 URL을 명시합니다.</p>
<pre><code class="language-html">&lt;link rel="canonical" href="https://davhave.com/education/marketing/seo-fundamentals-and-onpage-optimization" /&gt;</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>SEO (Search Engine Optimization)</strong>: 검색엔진 최적화. 검색 결과 상단에 사이트를 노출시키는 마케팅 기법.</li>
<li><strong>On-Page SEO (온페이지 SEO)</strong>: 내 웹사이트 내부의 HTML 코드, 메타 태그, 헤딩 구조, 콘텐츠 퀄리티를 최적화하는 작업.</li>
<li><strong>Off-Page SEO (오프페이지 SEO)</strong>: 외부 사이트에서의 백링크(Backlink) 획득, SNS 공유 등 사이트 외부 신뢰도를 높이는 작업.</li>
<li><strong>Canonical Tag (대표 URL 태그)</strong>: 동일하거나 유사한 여러 URL 중에서 검색엔진에게 ''이것이 진짜 대표 문서''임을 알려주는 HTML 태그.</li>
<li><strong>CTR (Click-Through Rate)</strong>: 클릭률. 검색 결과에 노출된 횟수 대비 실제 클릭하여 접속한 비율.</li>
</ul>
<hr />
<h2>SEO 점검 체크리스트</h2>
<ul>
<li>[ ] 페이지당 <code><h1></code> 태그가 오직 1개만 존재하는가?</li>
<li>[ ] Title 태그에 메인 키워드가 포함되었는가?</li>
<li>[ ] Meta Description이 150자 이내로 영감 있게 작성되었는가?</li>
<li>[ ] Canonical URL 태그가 제대로 연결되었는가?</li>
</ul>',
    seo_description = '검색엔진이 내 사이트를 좋아하게 만드는 검색엔진 최적화(SEO)의 기본 원리와 타이틀, 메타 태그, H1~H3 헤딩 구조, 용어 사전을 배웁니다.',
    updated_at = DATETIME('now')
WHERE slug = 'seo-fundamentals-and-onpage-optimization';

UPDATE posts 
SET title = '구글 검색 콘솔과 네이버 서치어드바이저 수집 최적화 실전',
    excerpt = 'Google Search Console과 네이버 서치어드바이저에 사이트 소유권을 확인하고 sitemap.xml과 rss.xml, 용어 사전을 배우는 가이드입니다.',
    content_md = '## 검색엔진 색인(Indexing)의 기본 이해

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
- **robots.txt**: 검색엔진 크롤러 봇에게 ''어느 페이지를 수집해도 되고, 어느 페이지는 접근하면 안 되는지'' 알려주는 규약 파일.
- **RSS (Really Simple Syndication)**: 웹사이트의 최신 콘텐츠 목록을 실시간으로 구독 기기나 검색엔진에 전달하는 규격.

---

## 수집 최적화 체크리스트

- [ ] 구글 검색 콘솔 및 네이버 서치어드바이저 소유권 확인 완료
- [ ] sitemap.xml 제출 상태가 ''성공''인가?
- [ ] robots.txt가 수집을 차단하고 있지 않은가?
',
    content_html = '<h2>검색엔진 색인(Indexing)의 기본 이해</h2>
<p>웹사이트를 아무리 아름답게 만들어도 크롤러 봇(Googlebot, Yeti)이 내 사이트를 방문하고 색인(Index)하지 않으면 검색 결과에 노출되지 않습니다.</p>
<p>웹의 세계에서는 <strong>크롤링(Crawling) ➔ 색인(Indexing) ➔ 랭킹(Ranking)</strong> 3단계를 거쳐 비로소 유저에게 웹페이지가 노출됩니다.</p>
<hr />
<h2>Google Search Console 설정 4단계</h2>
<h3>1단계: 소유권 확인 (HTML 태그)</h3>
<p><code><head></code> 영역에 구글이 제공하는 소유권 메타 태그를 주입합니다.</p>
<pre><code class="language-html">&lt;meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /&gt;</code></pre>
<h3>2단계: sitemap.xml 등록</h3>
<p>검색 콘솔의 <code>Sitemaps</code> 메뉴로 이동하여 <code>sitemap.xml</code> 경로를 제출합니다.</p>
<h3>3단계: URL 검사 및 색인 요청</h3>
<p>신규 포스트 등록 시 <code>URL 검사</code> 기능을 통해 <code>색인 생성 요청</code>을 클릭합니다.</p>
<hr />
<h2>네이버 서치어드바이저 (Search Advisor) 설정</h2>
<p>1. <strong>소유 확인</strong>: 네이버 서치어드바이저 접속 ➔ 웹마스터 도구 ➔ HTML 태그 등록</p>
<p>2. <strong>RSS 제출</strong>: <code>https://davhave.com/rss.xml</code> 제출</p>
<p>3. <strong>사이트맵 제출</strong>: <code>https://davhave.com/sitemap.xml</code> 제출</p>
<hr />
<h2>robots.txt 완벽 개방 설정 표준 예시</h2>
<p>모든 크롤러봇의 수집을 100% 허용하는 표준 <code>robots.txt</code> 코드입니다.</p>
<pre><code class="language-text">User-agent: *
Allow: /

Sitemap: https://davhave.com/sitemap.xml</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>크롤러 (Crawler / Bot)</strong>: 인터넷을 돌아다니며 웹페이지의 콘텐츠와 링크를 수집하는 검색엔진 로봇 (예: Googlebot, Yeti).</li>
<li><strong>색인 (Indexing)</strong>: 크롤러가 수집한 웹페이지 정보를 검색엔진의 거대한 데이터베이스 서버에 등록하는 과정.</li>
<li><strong>Sitemap.xml (사이트맵)</strong>: 웹사이트에 존재하는 모든 공개 페이지의 목록과 업데이트 날짜를 담고 있는 XML 파일.</li>
<li><strong>robots.txt</strong>: 검색엔진 크롤러 봇에게 ''어느 페이지를 수집해도 되고, 어느 페이지는 접근하면 안 되는지'' 알려주는 규약 파일.</li>
<li><strong>RSS (Really Simple Syndication)</strong>: 웹사이트의 최신 콘텐츠 목록을 실시간으로 구독 기기나 검색엔진에 전달하는 규격.</li>
</ul>
<hr />
<h2>수집 최적화 체크리스트</h2>
<ul>
<li>[ ] 구글 검색 콘솔 및 네이버 서치어드바이저 소유권 확인 완료</li>
<li>[ ] sitemap.xml 제출 상태가 ''성공''인가?</li>
<li>[ ] robots.txt가 수집을 차단하고 있지 않은가?</li>
</ul>',
    seo_description = 'Google Search Console과 네이버 서치어드바이저에 사이트 소유권을 확인하고 sitemap.xml과 rss.xml, 용어 사전을 배우는 가이드입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'search-console-and-naver-searchadvisor-optimization';

UPDATE posts 
SET title = '키워드 리서치와 검색 의도(Search Intent) 분석 전략',
    excerpt = '월간 검색량, 경쟁 강도, 사용자 검색 의도(Informational, Transactional)를 분석하여 상위 노출될 키워드를 발굴하는 튜토리얼입니다.',
    content_md = '## 키워드 리서치의 중요성

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
- **숏테일 키워드 (Short-tail Keyword)**: ''마케팅'', ''앱 개발''처럼 1~2 단어로 이루어진 검색량이 매우 많고 경쟁이 치열한 키워드.
- **롱테일 키워드 (Long-tail Keyword)**: ''초보자를 위한 인스타그램 마케팅 가이드''처럼 3단어 이상으로 구성되어 검색량은 적지만 전환율이 높은 키워드.
- **씨앗 키워드 (Seed Keyword)**: 키워드 리서치의 출발점이 되는 가장 기본적이고 광범위한 대표 주제 단어.

---

## 키워드 분석 체크리스트

- [ ] 타겟 키워드의 검색 의도(정보성 vs 거래성)를 파악했는가?
- [ ] Title과 Heading에 메인 키워드가 자연스럽게 녹아있는가?
- [ ] 롱테일 키워드를 적절히 분산 수록했는가?
',
    content_html = '<h2>키워드 리서치의 중요성</h2>
<p>모든 마케팅과 SEO의 출발점은 "고객이 검색창에 무엇을 입력하는가?"에 있습니다. 검색량이 높으면서 경쟁이 완만한 롱테일 키워드(Long-tail Keyword)를 발굴하는 것이 핵심입니다.</p>
<hr />
<h2>검색 의도(Search Intent) 4가지 분류</h2>
<p>1. <strong>정보성 의도 (Informational Intent)</strong>: "Claude 사용법", "SEO란 무엇인가" ➔ 개념 정리 및 튜토리얼 제공</p>
<p>2. <strong>거래성 의도 (Transactional Intent)</strong>: "AI 마케팅 외주 가격", "웹사이트 제작 문의" ➔ 서비스 상담 및 견적 안내</p>
<p>3. <strong>네비게이션 의도 (Navigational Intent)</strong>: "DAVHAVE", "구글 검색 콘솔" ➔ 해당 브랜드/사이트로 직접 이동</p>
<p>4. <strong>상업적 탐색 의도 (Commercial Investigation)</strong>: "Flutter vs React Native 비교" ➔ 비교 분석표 및 추천 리포트</p>
<hr />
<h2>키워드 리서치 3단계 실행 가이드</h2>
<h3>1단계: 씨앗 키워드(Seed Keywords) 추출</h3>
<p>우리의 서비스 분야와 관련된 핵심 단어 5~10개 수집. (예: <code>마케팅</code>, <code>SEO</code>, <code>AI</code>)</p>
<h3>2단계: 키워드 도구 활용</h3>
<p>네이버 키워드 도구, Google Keyword Planner, 블랙키위 등을 활용해 월간 검색량 및 문서 수 수집.</p>
<h3>3단계: 황금 키워드 선별</h3>
<ul>
<li><strong>월간 검색량</strong>: 1,000 ~ 10,000회</li>
<li><strong>경쟁 강도</strong>: 낮은 문서 수 (블로그 수 적음)</li>
</ul>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>검색 의도 (Search Intent)</strong>: 사용자가 특정 키워드를 검색창에 입력한 근본적인 목적과 요구사항.</li>
<li><strong>숏테일 키워드 (Short-tail Keyword)</strong>: ''마케팅'', ''앱 개발''처럼 1~2 단어로 이루어진 검색량이 매우 많고 경쟁이 치열한 키워드.</li>
<li><strong>롱테일 키워드 (Long-tail Keyword)</strong>: ''초보자를 위한 인스타그램 마케팅 가이드''처럼 3단어 이상으로 구성되어 검색량은 적지만 전환율이 높은 키워드.</li>
<li><strong>씨앗 키워드 (Seed Keyword)</strong>: 키워드 리서치의 출발점이 되는 가장 기본적이고 광범위한 대표 주제 단어.</li>
</ul>
<hr />
<h2>키워드 분석 체크리스트</h2>
<ul>
<li>[ ] 타겟 키워드의 검색 의도(정보성 vs 거래성)를 파악했는가?</li>
<li>[ ] Title과 Heading에 메인 키워드가 자연스럽게 녹아있는가?</li>
<li>[ ] 롱테일 키워드를 적절히 분산 수록했는가?</li>
</ul>',
    seo_description = '월간 검색량, 경쟁 강도, 사용자 검색 의도(Informational, Transactional)를 분석하여 상위 노출될 키워드를 발굴하는 튜토리얼입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'keyword-research-and-search-intent-analysis';

UPDATE posts 
SET title = '콘텐츠 마케팅과 바이럴 스토리텔링 기획 워크북',
    excerpt = '독자의 몰입을 끌어내는 스토리텔링 공식(PAS, AIDA)과 SNS 바이럴을 일으키는 아티클 기획 구조 및 용어 설명입니다.',
    content_md = '## 콘텐츠 마케팅의 본질

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
',
    content_html = '<h2>콘텐츠 마케팅의 본질</h2>
<p>콘텐츠 마케팅은 단순히 상품을 파는 글이 아니라, 독자에게 실질적인 도움과 지식적 가치를 제공하여 자연스럽게 브랜드 팬덤으로 전환시키는 지속 가능한 마케팅 기법입니다.</p>
<hr />
<h2>바이럴 마케팅의 2대 카피라이팅 프레임워크</h2>
<h3>1. PAS 프레임워크 (Problem - Agitate - Solution)</h3>
<ul>
<li><strong>Problem (문제 제시)</strong>: "블로그를 써도 방문자가 0명이라 고민이신가요?"</li>
<li><strong>Agitate (문제 심화)</strong>: "좋은 글을 써도 아무도 보지 않는다면 시간과 노력이 그대로 버려집니다."</li>
<li><strong>Solution (해결책)</strong>: "검색엔진 상위 노출 100% 보장하는 SEO 체크리스트 5가지를 공개합니다."</li>
</ul>
<h3>2. AIDA 프레임워크 (Attention - Interest - Desire - Action)</h3>
<ul>
<li><strong>Attention (주의 끌기)</strong>: 강렬한 헤드라인과 통계 지표 제시</li>
<li><strong>Interest (흥미 유발)</strong>: 실제 성공 및 실패 사례 스토리 전개</li>
<li><strong>Desire (욕구 자극)</strong>: 제품/노하우 도입 후 얻게 될 비포&애프터 제시</li>
<li><strong>Action (행동 유도)</strong>: 지금 바로 시작할 수 있는 CTA 클릭 유도</li>
</ul>
<hr />
<h2>공유하고 싶어지는 바이럴 요소 3가지</h2>
<p>1. <strong>실용성 (Practical Value)</strong>: 보관해두고 두고두고 보고 싶은 복붙용 자료</p>
<p>2. <strong>시각적 명확성</strong>: 표, 체크리스트, 코드 블록을 활용한 높은 가독성</p>
<p>3. <strong>감정적 공감</strong>: 실패를 극복한 진솔한 비하인드 스토리</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>콘텐츠 마케팅 (Content Marketing)</strong>: 유용하고 일관된 콘텐츠를 제작·배포하여 명확하게 정의된 오디언스를 유인하고 이끄는 전략적 마케팅.</li>
<li><strong>바이럴 (Viral)</strong>: 바이러스처럼 입소문이 퍼지듯 유저들이 자발적으로 콘텐츠를 공유하고 퍼트리는 현상.</li>
<li><strong>PAS 프레임워크</strong>: 문제(Problem) ➔ 심화(Agitate) ➔ 해결책(Solution) 순서로 독자를 설득하는 카피라이팅 공식.</li>
<li><strong>AIDA 프레임워크</strong>: 주의(Attention) ➔ 흥미(Interest) ➔ 욕구(Desire) ➔ 행동(Action) 순서의 마케팅 설득 모델.</li>
</ul>
<hr />
<h2>콘텐츠 기획 체크리스트</h2>
<ul>
<li>[ ] 독자의 문제를 명확히 짚어주는 헤드라인인가?</li>
<li>[ ] PAS 또는 AIDA 프레임워크가 적용되었는가?</li>
<li>[ ] 글 하단에 명확한 행동 유도(CTA) 버튼이 수록되었는가?</li>
</ul>',
    seo_description = '독자의 몰입을 끌어내는 스토리텔링 공식(PAS, AIDA)과 SNS 바이럴을 일으키는 아티클 기획 구조 및 용어 설명입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'content-marketing-and-viral-storytelling-guide';

UPDATE posts 
SET title = 'AI(Claude & ChatGPT)를 활용한 마케팅 카피라이팅 기법',
    excerpt = 'Claude 및 ChatGPT AI 모델을 활용해 광고 카피, 블로그 개요, 이메일 제목을 10배 빠르게 생성하는 프롬프트 모음집입니다.',
    content_md = '## AI 카피라이팅 시대의 마케팅

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
',
    content_html = '<h2>AI 카피라이팅 시대의 마케팅</h2>
<p>AI는 마케터를 대체하는 것이 아니라, 마케터의 아이디어 도출 속도를 10배 이상 향상시키는 강력한 어시스턴트입니다.</p>
<hr />
<h2>실전 마케팅 카피라이팅 프롬프트 3선</h2>
<h3>1. SNS 광고 카피 5종 생성 프롬프트</h3>
<pre><code class="language-text">[역할]
당신은 메타(Meta) 디스플레이 광고 카피를 전문으로 쓰는 카피라이터입니다.

[제품 정보]
제품: DAVHAVE 개발 &amp; AI 컨설팅
타겟: 앱/웹 제작이 필요한 스타트업 대표 및 개인 사업자

[요구사항]
아래 5가지 스타일로 인스타그램 광고 헤드라인(20자 이내)과 본문(100자 이내)을 각각 작성해주세요.
1. 공감 유도형
2. 숫자로 증명하는 신뢰형
3. 호기심 자극 질문형
4. 긴급성 부여형
5. 직관적 혜택 강조형</code></pre>
<h3>2. 이메일 마케팅 오픈율 향상 제목 프롬프트</h3>
<pre><code class="language-text">[요구사항]
아래 주제의 뉴스레터 수신율을 높이기 위한 클릭 유발 이메일 제목 7개를 작성해주세요.
주제: 2026년 최신 구글 SEO 알고리즘 변경점 및 대응 가이드
조건: 이모지 1개 포함, 30자 이내, 호기심 유발</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>카피라이팅 (Copywriting)</strong>: 광고나 마케팅 목적으로 독자의 구매나 행동을 유도하기 위한 문장을 작성하는 기술.</li>
<li><strong>프롬프트 (Prompt)</strong>: AI 모델(Claude, ChatGPT)에게 원하는 결과물을 얻기 위해 입력하는 명령어나 질문 텍스트.</li>
<li><strong>할루시네이션 (Hallucination)</strong>: AI가 거짓 정보나 없는 사실을 마치 진실인 것처럼 그럴듯하게 생성하는 현상.</li>
<li><strong>톤앤매너 (Tone & Manner)</strong>: 브랜드나 글이 가지고 있는 전반적인 어조, 분위기, 표현 방식.</li>
</ul>
<hr />
<h2>AI 카피 수정 및 검수 원칙</h2>
<ul>
<li><strong>할루시네이션 점검</strong>: AI가 생성한 숫자, 스펙, 법적 문구 100% 검증</li>
<li><strong>휴먼 터치(Human Touch)</strong>: 브랜드의 독자적인 톤앤매너(Tone & Manner) 주입</li>
</ul>',
    seo_description = 'Claude 및 ChatGPT AI 모델을 활용해 광고 카피, 블로그 개요, 이메일 제목을 10배 빠르게 생성하는 프롬프트 모음집입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'ai-assisted-marketing-copywriting-prompts';

UPDATE posts 
SET title = '테크니컬 SEO: 시맨틱 태그, 폰트 Preload, JSON-LD 구조화 데이터',
    excerpt = '검색엔진 로봇과 웹 브라우저의 파싱 속도를 끌어올리는 시맨틱 HTML5, 폰트 Preload 힌트, Schema.org JSON-LD 구조화 데이터 기술입니다.',
    content_md = '## 테크니컬 SEO(Technical SEO)의 의의

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
',
    content_html = '<h2>테크니컬 SEO(Technical SEO)의 의의</h2>
<p>아무리 훌륭한 마케팅 글을 써도, 브라우저와 검색엔진 봇이 렌더링에 실패하거나 구조를 이해하지 못하면 노출에서 배제됩니다.</p>
<hr />
<h2>1. HTML5 시맨틱 태그(Semantic HTML)</h2>
<p><code><div></code> 남발을 피하고 의미론적 시맨틱 엘리먼트를 사용합니다.</p>
<pre><code class="language-html">&lt;header&gt;
  &lt;nav&gt;&lt;!-- 메인 내비게이션 --&gt;&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;article&gt;
    &lt;h1&gt;아티클 제목&lt;/h1&gt;
    &lt;section&gt;본문 영역&lt;/section&gt;
  &lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;© DAVHAVE&lt;/footer&gt;</code></pre>
<hr />
<h2>2. Core Web Vitals 폰트 Preload 힌트</h2>
<p>웹폰트로 인한 렌더링 지연(FOUT/FOIT) 및 CLS(레이아웃 이동) 현상을 사전 차단합니다.</p>
<pre><code class="language-html">&lt;link rel="preload" href="/fonts/bricolage-grotesque-800.woff2" as="font" type="font/woff2" crossorigin /&gt;</code></pre>
<hr />
<h2>3. Schema.org JSON-LD 구조화 데이터</h2>
<p>구글 검색 결과에 리치 스니펫(Rich Snippets)으로 표시되도록 정밀 데이터를 제공합니다.</p>
<pre><code class="language-html">&lt;script type="application/ld+json"&gt;
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
&lt;/script&gt;</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>테크니컬 SEO (Technical SEO)</strong>: 크롤링과 인덱싱이 원활하도록 웹사이트의 기술적 아키텍처, 속도, 보안을 최적화하는 작업.</li>
<li><strong>시맨틱 HTML (Semantic HTML)</strong>: <code><article></code>, <code><header></code>처럼 태그 자체가 의미를 가진 HTML5 태그 구조.</li>
<li><strong>JSON-LD</strong>: JavaScript Object Notation for Linked Data. 웹페이지의 의미 구조를 검색엔진에게 자바스크립트 객체 형태로 전달하는 표준 형식.</li>
<li><strong>리치 스니펫 (Rich Snippets)</strong>: 검색 결과 화면에 일반 텍스트 외에 별점, 이미지, FAQ 등이 풍부하게 함께 노출되는 기능.</li>
<li><strong>Preload (프리로드)</strong>: 브라우저가 리소스를 발견하기 전에 가장 중요한 폰트나 CSS를 미리 다운로드하도록 지시하는 힌트.</li>
</ul>
<hr />
<h2>테크니컬 SEO 체크리스트</h2>
<ul>
<li>[ ] HTML 시맨틱 태그(<code><main></code>, <code><article></code>, <code><header></code>)가 올바른가?</li>
<li>[ ] 핵심 폰트 파일에 <code>rel="preload"</code> 힌트가 적용되었는가?</li>
<li>[ ] JSON-LD 구조화 데이터 문법 오류가 없는가?</li>
</ul>',
    seo_description = '검색엔진 로봇과 웹 브라우저의 파싱 속도를 끌어올리는 시맨틱 HTML5, 폰트 Preload 힌트, Schema.org JSON-LD 구조화 데이터 기술입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'technical-seo-semantic-tags-and-jsonld';

UPDATE posts 
SET title = '퍼널 마케팅과 고객 여정(Customer Journey) 지도 설계',
    excerpt = '인지(Awareness)부터 유입, 고려, 전환, 재방문까지 이어지는 마케팅 퍼널(AARRR)과 고객 이탈을 방지하는 모니터링 기법입니다.',
    content_md = '## 마케팅 퍼널(Funnel)의 개념

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
',
    content_html = '<h2>마케팅 퍼널(Funnel)의 개념</h2>
<p>퍼널(Funnel, 깔때기)은 잠재 고객이 브랜드를 처음 인지한 시점부터 최종 구매 및 열성 팬이 되기까지의 단계를 시각화한 모형입니다.</p>
<hr />
<h2>AARRR 해적 지표 프레임워크</h2>
<p>1. <strong>Acquisition (유입)</strong>: 고객이 어떤 채널(SEO, SNS, 광고)을 통해 방문하는가?</p>
<p>2. <strong>Activation (최초 활성화)</strong>: 고객이 첫 방문 시 긍정적인 경험(Aha! Moment)을 느끼는가?</p>
<p>3. <strong>Retention (리텐션/재방문)</strong>: 고객이 지속적으로 사이트에 돌아오는가?</p>
<p>4. <strong>Revenue (매출/전환)</strong>: 고객이 실제 서비스 상담이나 구매로 이어지는가?</p>
<p>5. <strong>Referral (추천/바이럴)</strong>: 고객이 자발적으로 타인에게 공유하는가?</p>
<hr />
<h2>고객 여정 지도(Customer Journey Map) 작성법</h2>
<pre><code class="language-text">[인지 (Awareness)]
- 매체: 검색엔진 (Google/Naver), SNS
- 고객 니즈: "웹사이트 만들 때 SEO 어떻게 해야 하지?"
- 제공 콘텐츠: 무료 SEO 기초 레슨 가이드

[고려 (Consideration)]
- 매체: DAVHAVE Education Hub &amp; Portfolio
- 고객 니즈: "이 스튜디오 개발 실력과 철학이 믿을 만한가?"
- 제공 콘텐츠: 포트폴리오 사례 (tax103) &amp; 개발 철학

[전환 (Conversion)]
- 매체: 메인 페이지 CTA &amp; Contact
- 고객 행동: 이메일 문의 및 프로젝트 상담 요청</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>마케팅 퍼널 (Marketing Funnel)</strong>: 유저가 브랜드를 알게 된 후 최종 구매에 이르기까지 단계별로 이탈하며 좁아지는 과정을 표현한 모델.</li>
<li><strong>AARRR (해적 지표)</strong>: 벤처투자자 데이브 맥클루어가 제안한 유입(Acquisition), 활성화(Activation), 리텐션(Retention), 매출(Revenue), 추천(Referral) 5단계 성과 지표.</li>
<li><strong>고객 여정 지도 (Customer Journey Map)</strong>: 고객이 제품을 접하고 구매하기까지의 모든 터치포인트와 감정 변화를 단계별로 그린 지도.</li>
<li><strong>이탈률 (Bounce Rate)</strong>: 방문자가 첫 페이지에 진입한 후 다른 클릭이나 이동 없이 곧바로 사이트를 나가버린 비율.</li>
</ul>
<hr />
<h2>퍼널 최적화 체크리스트</h2>
<ul>
<li>[ ] 퍼널 각 단계별 유입 경로와 측정 지표가 수립되었는가?</li>
<li>[ ] 이탈률(Bounce Rate)이 가장 높은 구역을 파악했는가?</li>
<li>[ ] 각 단계에 맞는 맞춤형 콘텐츠와 CTA가 준비되어 있는가?</li>
</ul>',
    seo_description = '인지(Awareness)부터 유입, 고려, 전환, 재방문까지 이어지는 마케팅 퍼널(AARRR)과 고객 이탈을 방지하는 모니터링 기법입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'funnel-marketing-and-customer-journey-mapping';

UPDATE posts 
SET title = 'SNS 인스타그램 & X(트위터) 오가닉 성장 및 커뮤니티 마케팅',
    excerpt = '유료 광고 없이 오가닉(Organic)으로 팔로워와 커뮤니티 팬덤을 늘리는 인스타그램 캐러셀 및 트위터 타임라인 성장 공식입니다.',
    content_md = '## 오가닉 마케팅(Organic Marketing)의 힘

광고비를 지출하지 않고 오직 고품질 콘텐츠와 커뮤니티 소통만으로 브랜딩을 구축하는 오가닉 마케팅은 가장 견고한 팬덤을 형성합니다.

---

## 인스타그램 10장 카드뉴스(Carousel) 성공 공식

1. **1번 표지**: "저장 필수" 강력한 이득 제시 (예: `2026년 마케터 필수 무료 AI 도구 7선`)
2. **2~8번 본문**: 요점만 명확히 간결한 텍스트 + 시각적 카드 UI
3. **9번 요약**: 핵심 1줄 요약 정리
4. **10번 CTA**: "프로필 링크 클릭" 또는 "댓글로 ''템플릿''을 남겨주시면 DMs로 보내드립니다"

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
',
    content_html = '<h2>오가닉 마케팅(Organic Marketing)의 힘</h2>
<p>광고비를 지출하지 않고 오직 고품질 콘텐츠와 커뮤니티 소통만으로 브랜딩을 구축하는 오가닉 마케팅은 가장 견고한 팬덤을 형성합니다.</p>
<hr />
<h2>인스타그램 10장 카드뉴스(Carousel) 성공 공식</h2>
<p>1. <strong>1번 표지</strong>: "저장 필수" 강력한 이득 제시 (예: <code>2026년 마케터 필수 무료 AI 도구 7선</code>)</p>
<p>2. <strong>2~8번 본문</strong>: 요점만 명확히 간결한 텍스트 + 시각적 카드 UI</p>
<p>3. <strong>9번 요약</strong>: 핵심 1줄 요약 정리</p>
<p>4. <strong>10번 CTA</strong>: "프로필 링크 클릭" 또는 "댓글로 ''템플릿''을 남겨주시면 DMs로 보내드립니다"</p>
<hr />
<h2>X (Twitter) 타임라인 알고리즘 최적화 3수칙</h2>
<p>1. <strong>스레드(Thread) 활용</strong>: 1개 트윗에 5~7개의 연결된 짧은 지식 스레드 작성</p>
<p>2. <strong>외부 링크 분리</strong>: 첫 트윗에 외부 URL을 넣으면 인게이지먼트 감소 ➔ 마지막 스레드 댓글에 URL 수록</p>
<p>3. <strong>1-Click 공유 지원</strong>: 웹사이트 내에 1-Click X 공유 버튼 설치</p>
<pre><code class="language-html">&lt;a href="https://x.com/intent/tweet?text=TITLE&amp;url=URL" class="share-x-btn" target="_blank"&gt;
  𝕏 트위터 공유하기
&lt;/a&gt;</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>오가닉 트래픽 (Organic Traffic)</strong>: 유료 광고비를 지출하지 않고 검색엔진이나 소셜미디어 유저의 자연발생적 클릭으로 유입된 트래픽.</li>
<li><strong>캐러셀 (Carousel)</strong>: 인스타그램 등에서 여러 장의 이미지 카드를 슬라이드 형태로 옆으로 넘겨볼 수 있게 만든 카드뉴스 형식.</li>
<li><strong>스레드 (Thread)</strong>: 트위터(X)에서 하나의 주제에 대해 여러 개의 트윗을 릴레이처럼 연결하여 쓴 연작 글.</li>
<li><strong>인게이지먼트 (Engagement)</strong>: 유저가 콘텐츠에 보인 반응(좋아요, 댓글, 공유, 저장)의 총체적 참여도.</li>
</ul>
<hr />
<h2>SNS 오가닉 성장 체크리스트</h2>
<ul>
<li>[ ] 1번 표지가 직관적이고 저장을 유발하는가?</li>
<li>[ ] 댓글 소통 및 리플라이에 적극적으로 반응하고 있는가?</li>
<li>[ ] 사이트 내 소셜 공유 버튼이 제대로 구동하는가?</li>
</ul>',
    seo_description = '유료 광고 없이 오가닉(Organic)으로 팔로워와 커뮤니티 팬덤을 늘리는 인스타그램 캐러셀 및 트위터 타임라인 성장 공식입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'sns-organic-growth-and-community-marketing';

UPDATE posts 
SET title = '이메일 마케팅과 리드 너처링(Lead Nurturing) 자동화',
    excerpt = '수신자의 클릭을 유발하는 뉴스레터 작성법과 리드(Lead)를 수집하여 지속적으로 고객으로 육성(Nurturing)하는 이메일 자동화 시퀀스입니다.',
    content_md = '## 이메일 마케팅의 여전한 강력함

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
',
    content_html = '<h2>이메일 마케팅의 여전한 강력함</h2>
<p>소셜 미디어 알고리즘은 수시로 변경되지만, 이메일은 리드(Lead) 구독자와 1:1로 직접 소통할 수 있는 가장 확실한 소유 채널(Owned Media)입니다.</p>
<hr />
<h2>이메일 오픈율 & 클릭률 극대화 4대 요소</h2>
<h3>1. 직관적인 발신자 이름 (Sender Name)</h3>
<p><code>no-reply@</code> 대신 사람 이름이나 친근한 브랜드를 사용합니다. (예: <code>DAVHAVE Oscar Lee</code>)</p>
<h3>2. 호기심 자극 제목 (Subject Line)</h3>
<p>30자 이내로 수신자의 궁금증을 자극합니다. (예: <code>[단독] 2026년 구글 SEO 가이드 북 배포</code>)</p>
<h3>3. 단 하나의 명확한 CTA (Single CTA)</h3>
<p>이메일 안에 여러 목적의 버튼을 넣지 말고, 단 하나의 메인 버튼에 집중시킵니다.</p>
<hr />
<h2>4단계 리드 너처링(Lead Nurturing) 자동화 시퀀스</h2>
<ul>
<li><strong>1일 차 (웰컴 메일)</strong>: 무료 리소스(PDF, 템플릿) 전달 + 인사</li>
<li><strong>3일 차 (지식 전달)</strong>: 서비스 관련 가장 인기가 높은 무료 가이드 아티클 전송</li>
<li><strong>7일 차 (성공 사례)</strong>: 포트폴리오 및 실제 고객 후기 전송</li>
<li><strong>14일 차 (전환 유도)</strong>: 1:1 무료 상담 및 프로젝트 시작 제안</li>
</ul>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>리드 (Lead)</strong>: 우리 제품에 관심을 가지고 이메일이나 연락처 정보를 제공한 잠재 고객.</li>
<li><strong>리드 너처링 (Lead Nurturing)</strong>: 아직 구매 준비가 되지 않은 리드에게 유용한 지식과 정보를 지속적으로 제공하여 구매고객으로 육성하는 활동.</li>
<li><strong>오픈율 (Open Rate)</strong>: 발송된 전체 이메일 중 수신자가 실제로 메일을 열어본 비율.</li>
<li><strong>오운드 미디어 (Owned Media)</strong>: 기업이 직접 소유하고 통제할 수 있는 자사 웹사이트, 이메일 뉴스레터 리스트, 자체 앱.</li>
</ul>
<hr />
<h2>이메일 마케팅 체크리스트</h2>
<ul>
<li>[ ] 이메일 제목이 30자 이내로 호기심을 유발하는가?</li>
<li>[ ] 모바일 화면에서 이메일 템플릿이 깨지지 않고 잘 보이는가?</li>
<li>[ ] 명확하고 눈에 띄는 단 하나의 CTA 버튼이 있는가?</li>
</ul>',
    seo_description = '수신자의 클릭을 유발하는 뉴스레터 작성법과 리드(Lead)를 수집하여 지속적으로 고객으로 육성(Nurturing)하는 이메일 자동화 시퀀스입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'email-marketing-and-lead-nurturing-automation';

UPDATE posts 
SET title = '퍼포먼스 광고 기초: 메타(Meta) & 구글 디스플레이 광고',
    excerpt = 'Meta(인스타그램/페이스북) 타겟 광고와 구글 검색/디스플레이(GDN) 광고의 캠페인 구조, 용어 사전, 소재 제작 및 타겟팅 기법을 배웁니다.',
    content_md = '## 퍼포먼스 마케팅(Performance Marketing)이란?

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **퍼포먼스 마케팅 (Performance Marketing)**: 정밀한 데이터 트래킹을 기반으로 유저의 전환 반응에 따라 실시간으로 지출과 광고 소재를 최적화하는 마케팅.
- **GDN (Google Display Network)**: 구글과 제휴된 수백만 개 웹사이트, 앱, 유튜브 화면에 이미지 배너 광고를 노출하는 구글 디스플레이 네트워크.
- **맞춤 타겟 (Custom Audience)**: 내 웹사이트 방문자, 이메일 구독자 리스트 등 이미 우리 브랜드와 상호작용이 있던 유저 집단.
- **유사 타겟 (Lookalike Audience)**: 기존 우수 고객과 유사한 관심사와 행동 패턴을 가진 신규 유저들을 AI 알고리즘으로 찾아내어 광고를 노출하는 기법.

---

## 퍼포먼스 광고 점검 체크리스트

- [ ] 타겟 오디언스 세팅이 너무 좁거나 넓지 않은가?
- [ ] 이미지 소재 내 텍스트 비율이 과도하지 않은가?
- [ ] 랜딩 페이지와 광고 카피의 내용이 100% 일치하는가?
',
    content_html = '<h2>퍼포먼스 마케팅(Performance Marketing)이란?</h2>
<p>디지털 광고 플랫폼의 정밀한 데이터 추적 기능을 활용해 소액의 테스트 예산부터 대규모 예산까지 집행하며 측정 가능한 ROI/ROAS를 창출하는 광고 기법입니다.</p>
<hr />
<h2>Meta(인스타그램) 광고 3단계 캠페인 구조</h2>
<p>1. <strong>캠페인 (Campaign)</strong>: 광고 목표 설정 (유입, 리드 수집, 판매 전환 등)</p>
<p>2. <strong>광고 세트 (Ad Set)</strong>: 타겟 오디언스(위치, 연령, 관심사), 예산 및 노출 위치 설정</p>
<p>3. <strong>광고 소재 (Ad Creative)</strong>: 실제 이미지, 카드뉴스, 동영상 및 카피라이팅</p>
<hr />
<h2>Google Ads 핵심 광고 유형 2가지</h2>
<h3>1. 검색 광고 (Search Ads)</h3>
<p>사용자가 특정 키워드를 검색했을 때 상단에 노출되는 구매 의도가 매우 높은 광고 형태.</p>
<h3>2. 디스플레이 광고 (GDN)</h3>
<p>제휴 웹사이트 및 언론사 배너 영역에 비주얼 소재를 노출하여 리마케팅(Retargeting) 수행.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>퍼포먼스 마케팅 (Performance Marketing)</strong>: 정밀한 데이터 트래킹을 기반으로 유저의 전환 반응에 따라 실시간으로 지출과 광고 소재를 최적화하는 마케팅.</li>
<li><strong>GDN (Google Display Network)</strong>: 구글과 제휴된 수백만 개 웹사이트, 앱, 유튜브 화면에 이미지 배너 광고를 노출하는 구글 디스플레이 네트워크.</li>
<li><strong>맞춤 타겟 (Custom Audience)</strong>: 내 웹사이트 방문자, 이메일 구독자 리스트 등 이미 우리 브랜드와 상호작용이 있던 유저 집단.</li>
<li><strong>유사 타겟 (Lookalike Audience)</strong>: 기존 우수 고객과 유사한 관심사와 행동 패턴을 가진 신규 유저들을 AI 알고리즘으로 찾아내어 광고를 노출하는 기법.</li>
</ul>
<hr />
<h2>퍼포먼스 광고 점검 체크리스트</h2>
<ul>
<li>[ ] 타겟 오디언스 세팅이 너무 좁거나 넓지 않은가?</li>
<li>[ ] 이미지 소재 내 텍스트 비율이 과도하지 않은가?</li>
<li>[ ] 랜딩 페이지와 광고 카피의 내용이 100% 일치하는가?</li>
</ul>',
    seo_description = 'Meta(인스타그램/페이스북) 타겟 광고와 구글 검색/디스플레이(GDN) 광고의 캠페인 구조, 용어 사전, 소재 제작 및 타겟팅 기법을 배웁니다.',
    updated_at = DATETIME('now')
WHERE slug = 'performance-ad-meta-and-google-ads-fundamentals';

UPDATE posts 
SET title = 'ROAS 및 CAC 계산법과 퍼포먼스 지표 최적화 전략',
    excerpt = '광고 수익률(ROAS), 고객 획득 비용(CAC), 고객 생애 가치(LTV) 지표와 용어 사전을 통해 마케팅 예산 집행을 데이터 기반으로 수호하는 가이드입니다.',
    content_md = '## 핵심 디지털 마케팅 메트릭 3선

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **ROAS (Return on Ad Spend)**: 광고비 대비 매출액 비율. 광고의 직관적인 수익성을 평가하는 대표적 평가지표.
- **CAC (Customer Acquisition Cost)**: 고객 획득 비용. 신규 결제 고객 1명을 데려오는 데 소요된 전체 광고 및 마케팅 지출액.
- **LTV (Lifetime Value)**: 고객 생애 가치. 한 명의 유저가 브랜드의 고객으로 머무는 동안 발생시키는 전체 누적 매출.
- **BEP ROAS (손익분기점 ROAS)**: 원가 구조를 고려했을 때 손실을 보지 않기 위해 달성해야 하는 최소한의 ROAS 마지노선.

---

## 지표 최적화 체크리스트

- [ ] 채널별 정확한 CAC가 산출되었는가?
- [ ] 손익분기점(BEP) ROAS 기준선이 수립되어 있는가?
',
    content_html = '<h2>핵심 디지털 마케팅 메트릭 3선</h2>
<p>데이터 중심 마케팅에서는 주관적인 직관 대신 숫자로 말해야 합니다.</p>
<hr />
<h2>1. ROAS (Return on Ad Spend, 광고비 대비 매출액)</h2>
<p>광고 지출 대비 얼마나 많은 매출이 발생했는가를 측정하는 지표입니다.</p>
<p>$$ROAS(\%) = \frac{\text{광고를 통한 매출액}}{\text{집행한 총 광고비}} \times 100$$</p>
<p>*예시*: 광고비 100만 원 집행 후 매출 500만 원 발생 시 ROAS는 500%입니다.</p>
<hr />
<h2>2. CAC (Customer Acquisition Cost, 고객 획득 비용)</h2>
<p>신규 고객 1명을 유치하는 데 들어간 모든 마케팅 및 영업 비용의 합입니다.</p>
<p>$$CAC = \frac{\text{총 마케팅 및 광고 집행비}}{\text{획득한 신규 고객 수}}$$</p>
<hr />
<h2>3. LTV (Lifetime Value, 고객 생애 가치)</h2>
<p>한 명의 고객이 우리 브랜드와의 전체 관계 기간 동안 지출하는 총 금액입니다.</p>
<p>성공적인 비즈니스는 <strong>LTV > 3 x CAC</strong> 공식을 만족해야 합니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>ROAS (Return on Ad Spend)</strong>: 광고비 대비 매출액 비율. 광고의 직관적인 수익성을 평가하는 대표적 평가지표.</li>
<li><strong>CAC (Customer Acquisition Cost)</strong>: 고객 획득 비용. 신규 결제 고객 1명을 데려오는 데 소요된 전체 광고 및 마케팅 지출액.</li>
<li><strong>LTV (Lifetime Value)</strong>: 고객 생애 가치. 한 명의 유저가 브랜드의 고객으로 머무는 동안 발생시키는 전체 누적 매출.</li>
<li><strong>BEP ROAS (손익분기점 ROAS)</strong>: 원가 구조를 고려했을 때 손실을 보지 않기 위해 달성해야 하는 최소한의 ROAS 마지노선.</li>
</ul>
<hr />
<h2>지표 최적화 체크리스트</h2>
<ul>
<li>[ ] 채널별 정확한 CAC가 산출되었는가?</li>
<li>[ ] 손익분기점(BEP) ROAS 기준선이 수립되어 있는가?</li>
</ul>',
    seo_description = '광고 수익률(ROAS), 고객 획득 비용(CAC), 고객 생애 가치(LTV) 지표와 용어 사전을 통해 마케팅 예산 집행을 데이터 기반으로 수호하는 가이드입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'roas-cac-metrics-and-performance-optimization';

UPDATE posts 
SET title = '구글 애널리틱스 4(GA4) 이벤트 설치 및 웹 분석 실전',
    excerpt = 'GA4 데이터 스크림 설정부터 구글 태그 매니저(GTM)를 활용한 버튼 클릭, 폼 제출 이벤트 자동 추적 가이드와 용어 설명입니다.',
    content_md = '## GA4(Google Analytics 4)의 패러다임

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **GA4 (Google Analytics 4)**: 구글이 제공하는 무료 모바일 및 웹 이중 데이터 분석 로그 통합 플랫폼.
- **이벤트 (Event)**: 웹페이지 방문자가 클릭, 스크롤, 동영상 재생, 구매 폼 제출 등 웹상에서 수행하는 개별 상호작용 단위.
- **GTM (Google Tag Manager)**: 개발자의 코드 수정 없이 마케터가 브라우저상에서 웹사이트 내 다양한 추적 태그를 간편하게 심을 수 있는 도구.
- **디멘션 & 메트릭 (Dimension & Metric)**: 디멘션은 데이터를 설명하는 기준(예: 도시, 브라우저), 메트릭은 정량적 측정 수치(예: 방문자 수, 세션 수).

---

## 웹 데이터 분석 체크리스트

- [ ] GA4 측정 ID가 모든 페이지에 주입되었는가?
- [ ] 주요 전환 버튼(문의, 결제)에 이벤트 트래킹이 설정되었는가?
- [ ] 내부 IP 주소 제외 필터가 적용되었는가?
',
    content_html = '<h2>GA4(Google Analytics 4)의 패러다임</h2>
<p>GA4는 기존 유니버설 애널리틱스(UA)와 달리 모든 사용자 상호작용을 <strong>이벤트(Event)</strong> 단위로 측정합니다.</p>
<hr />
<h2>웹사이트 GA4 기본 태그 설치 코드</h2>
<p>웹사이트의 <code><head></code> 영역 최상단에 주입하는 기본 측정 스크립트입니다.</p>
<pre><code class="language-html">&lt;!-- Global site tag (gtag.js) - Google Analytics --&gt;
&lt;script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"&gt;&lt;/script&gt;
&lt;script&gt;
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(''js'', new Date());
  gtag(''config'', ''G-YOUR_MEASUREMENT_ID'');
&lt;/script&gt;</code></pre>
<hr />
<h2>주요 커스텀 이벤트 추적 예시</h2>
<p>특정 버튼 클릭 시 커스텀 이벤트를 발송하는 자바스크립트 스크립트입니다.</p>
<pre><code class="language-javascript">document.querySelector(''.cta-btn'').addEventListener(''click'', function() {
  gtag(''event'', ''contact_button_click'', {
    ''event_category'': ''Engagement'',
    ''event_label'': ''Main Page CTA''
  });
});</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>GA4 (Google Analytics 4)</strong>: 구글이 제공하는 무료 모바일 및 웹 이중 데이터 분석 로그 통합 플랫폼.</li>
<li><strong>이벤트 (Event)</strong>: 웹페이지 방문자가 클릭, 스크롤, 동영상 재생, 구매 폼 제출 등 웹상에서 수행하는 개별 상호작용 단위.</li>
<li><strong>GTM (Google Tag Manager)</strong>: 개발자의 코드 수정 없이 마케터가 브라우저상에서 웹사이트 내 다양한 추적 태그를 간편하게 심을 수 있는 도구.</li>
<li><strong>디멘션 & 메트릭 (Dimension & Metric)</strong>: 디멘션은 데이터를 설명하는 기준(예: 도시, 브라우저), 메트릭은 정량적 측정 수치(예: 방문자 수, 세션 수).</li>
</ul>
<hr />
<h2>웹 데이터 분석 체크리스트</h2>
<ul>
<li>[ ] GA4 측정 ID가 모든 페이지에 주입되었는가?</li>
<li>[ ] 주요 전환 버튼(문의, 결제)에 이벤트 트래킹이 설정되었는가?</li>
<li>[ ] 내부 IP 주소 제외 필터가 적용되었는가?</li>
</ul>',
    seo_description = 'GA4 데이터 스크림 설정부터 구글 태그 매니저(GTM)를 활용한 버튼 클릭, 폼 제출 이벤트 자동 추적 가이드와 용어 설명입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'ga4-event-tracking-and-web-analytics';

UPDATE posts 
SET title = '전환율 최적화(CRO) 및 A/B 테스트 실험 설계',
    excerpt = '동일한 방문자 수로 2배 이상의 매출을 내는 전환율 최적화(CRO) 프로세스와 A/B 테스트 실험 가설 수립 및 용어 가이드입니다.',
    content_md = '## 전환율 최적화(CRO)의 중요성

웹사이트 유입을 2배 늘리는 것은 광고비가 2배 들지만, 웹사이트 전환율(Conversion Rate)을 2%에서 4%로 2배 올리는 것은 추가 광고비가 들지 않습니다.

---

## 4단계 A/B 테스트 실험 프로세스

1. **데이터 관찰**: GA4 및 히트맵(Hotjar)을 통한 이탈 구간 포착
2. **가설 수립**: "메인 CTA 버튼 색상을 주황색으로 바꾸면 클릭률이 15% 상승할 것이다."
3. **실험 집행**: 원본(A)과 변형(B)에 트래픽 50:50 분동 배정
4. **결과 분석**: 통계적 유의미성(p-value < 0.05) 검증 후 확정

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **CRO (Conversion Rate Optimization)**: 전환율 최적화. 유입된 방문자 대비 구매/신청 등 목표 행동을 수행하는 유저 비율을 높이는 과학적 최적화 과정.
- **A/B 테스트**: 기존 웹페이지(A안)와 일부 요소(버튼, 문구)를 변경한 새로운 디자인(B안)을 동시에 무작위 방문자에게 노출하여 성과를 비교하는 실험 기법.
- **히트맵 (Heatmap)**: 유저의 마우스 클릭, 스크롤 깊이, 시선 이동 집중도를 색상 고대비로 시각화해주는 사용자 행동 분석 도구 (예: Hotjar, Microsoft Clarity).
- **통계적 유의성 (Statistical Significance)**: 실험 결과가 단순 우연이나 무작위 오차가 아닌 실제로 의미 있는 차이임을 증명하는 통계 지표.

---

## CRO 체크리스트

- [ ] 명확한 가설에 기초하여 A/B 테스트가 진행 중인가?
- [ ] 실험에 충분한 모수(샘플 사이즈)가 확보되었는가?
',
    content_html = '<h2>전환율 최적화(CRO)의 중요성</h2>
<p>웹사이트 유입을 2배 늘리는 것은 광고비가 2배 들지만, 웹사이트 전환율(Conversion Rate)을 2%에서 4%로 2배 올리는 것은 추가 광고비가 들지 않습니다.</p>
<hr />
<h2>4단계 A/B 테스트 실험 프로세스</h2>
<p>1. <strong>데이터 관찰</strong>: GA4 및 히트맵(Hotjar)을 통한 이탈 구간 포착</p>
<p>2. <strong>가설 수립</strong>: "메인 CTA 버튼 색상을 주황색으로 바꾸면 클릭률이 15% 상승할 것이다."</p>
<p>3. <strong>실험 집행</strong>: 원본(A)과 변형(B)에 트래픽 50:50 분동 배정</p>
<p>4. <strong>결과 분석</strong>: 통계적 유의미성(p-value < 0.05) 검증 후 확정</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>CRO (Conversion Rate Optimization)</strong>: 전환율 최적화. 유입된 방문자 대비 구매/신청 등 목표 행동을 수행하는 유저 비율을 높이는 과학적 최적화 과정.</li>
<li><strong>A/B 테스트</strong>: 기존 웹페이지(A안)와 일부 요소(버튼, 문구)를 변경한 새로운 디자인(B안)을 동시에 무작위 방문자에게 노출하여 성과를 비교하는 실험 기법.</li>
<li><strong>히트맵 (Heatmap)</strong>: 유저의 마우스 클릭, 스크롤 깊이, 시선 이동 집중도를 색상 고대비로 시각화해주는 사용자 행동 분석 도구 (예: Hotjar, Microsoft Clarity).</li>
<li><strong>통계적 유의성 (Statistical Significance)</strong>: 실험 결과가 단순 우연이나 무작위 오차가 아닌 실제로 의미 있는 차이임을 증명하는 통계 지표.</li>
</ul>
<hr />
<h2>CRO 체크리스트</h2>
<ul>
<li>[ ] 명확한 가설에 기초하여 A/B 테스트가 진행 중인가?</li>
<li>[ ] 실험에 충분한 모수(샘플 사이즈)가 확보되었는가?</li>
</ul>',
    seo_description = '동일한 방문자 수로 2배 이상의 매출을 내는 전환율 최적화(CRO) 프로세스와 A/B 테스트 실험 가설 수립 및 용어 가이드입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'conversion-rate-optimization-and-ab-testing';

UPDATE posts 
SET title = '랜딩 페이지 디자인 심리학과 CTA(Call to Action) 배치 법칙',
    excerpt = '방문자를 고객으로 바꾸는 랜딩 페이지 레이아웃 섹션 순서와 설득 심리학 요소 및 고성능 CTA 버튼 구성법, 용어 해설입니다.',
    content_md = '## 고성능 랜딩 페이지의 섹션 배치 공식

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **랜딩 페이지 (Landing Page)**: 유저가 광고나 링크를 클릭했을 때 최초로 도착하게 되는 목적 페이지.
- **Above the Fold (상단 노출 영역)**: 방문자가 스크롤을 아래로 내리지 않고 첫 화면에서 곧바로 볼 수 있는 최상단 디스플레이 영역.
- **소셜 프루프 (Social Proof / 사회적 증거)**: "1만 명의 선택", 실제 사용자의 별점 평가나 고객사 로고를 통해 신뢰감을 형성하는 설득 장치.
- **Sticky CTA**: 스크롤을 내리더라도 화면 하단이나 상단에 고정되어 항상 유저에게 노출되는 행동 유도 버튼.

---

## 랜딩 페이지 체크리스트

- [ ] Above the Fold 영역에 메인 가치 제안과 CTA가 보이는가?
- [ ] 고객의 의구심을 해소해줄 FAQ 섹션이 존재하는가?
',
    content_html = '<h2>고성능 랜딩 페이지의 섹션 배치 공식</h2>
<p>잘 팔리는 랜딩 페이지는 설득의 심리학 구조를 완벽하게 따릅니다.</p>
<hr />
<h2>랜딩 페이지 7대 필수 섹션 구조</h2>
<p>1. <strong>Hero Section</strong>: 강렬한 헤드라인 + 서브 문구 + Primary CTA</p>
<p>2. <strong>Social Proof (신뢰)</strong>: 대표 고객사 로고, 미디어 보도, 만족도 지표</p>
<p>3. <strong>Pain Points (문제점)</strong>: 고객이 현재 겪는 고통 지적</p>
<p>4. <strong>Features & Benefits (해결책)</strong>: 제품의 핵심 특징과 이점 3가지</p>
<p>5. <strong>Detailed Portfolio / Case Study (증명)</strong>: 실제 포트폴리오 사례</p>
<p>6. <strong>FAQ (의구심 해소)</strong>: 고객이 가질 만한 자주 묻는 질문 5가지</p>
<p>7. <strong>Final Sticky CTA (최종 결론)</strong>: 상담 및 구매 버튼</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>랜딩 페이지 (Landing Page)</strong>: 유저가 광고나 링크를 클릭했을 때 최초로 도착하게 되는 목적 페이지.</li>
<li><strong>Above the Fold (상단 노출 영역)</strong>: 방문자가 스크롤을 아래로 내리지 않고 첫 화면에서 곧바로 볼 수 있는 최상단 디스플레이 영역.</li>
<li><strong>소셜 프루프 (Social Proof / 사회적 증거)</strong>: "1만 명의 선택", 실제 사용자의 별점 평가나 고객사 로고를 통해 신뢰감을 형성하는 설득 장치.</li>
<li><strong>Sticky CTA</strong>: 스크롤을 내리더라도 화면 하단이나 상단에 고정되어 항상 유저에게 노출되는 행동 유도 버튼.</li>
</ul>
<hr />
<h2>랜딩 페이지 체크리스트</h2>
<ul>
<li>[ ] Above the Fold 영역에 메인 가치 제안과 CTA가 보이는가?</li>
<li>[ ] 고객의 의구심을 해소해줄 FAQ 섹션이 존재하는가?</li>
</ul>',
    seo_description = '방문자를 고객으로 바꾸는 랜딩 페이지 레이아웃 섹션 순서와 설득 심리학 요소 및 고성능 CTA 버튼 구성법, 용어 해설입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'landing-page-psychology-and-cta-optimization';

UPDATE posts 
SET title = 'AI 크롤러 수집 가이드: GEO & LLM 인덱싱 최적화',
    excerpt = 'Perplexity, ChatGPT, Claude 등 AI 검색엔진에 내 사이트 콘텐츠가 답변으로 인용되도록 최적화하는 GEO(Generative Engine Optimization) 기술입니다.',
    content_md = '## SEO에서 GEO(Generative Engine Optimization)로의 진화

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **GEO (Generative Engine Optimization)**: 생성형 엔진 최적화. AI 모델(ChatGPT, Perplexity)의 생성 답변 속에 내 브랜드나 서비스가 답변 출처로 채택되도록 만드는 최신 최적화 기법.
- **LLM (Large Language Model)**: 거대 언어 모델. Claude, GPT-4처럼 대규모 텍스트 데이터를 학습하여 사람 수준의 문장을 이해하고 답변하는 인공지능.
- **llms.txt**: AI 로봇이 사이트의 주요 구조와 아티클을 수 밀리초 만에 쉽게 파싱하도록 돕는 마크다운 기반의 사이트 요약 파일 규약.
- **GPTBot / ClaudeBot**: OpenAI 및 Anthropic 사에서 웹상의 최신 정보를 수집하기 위해 운영하는 전용 AI 크롤러 봇.

---

## GEO 최적화 체크리스트

- [ ] robots.txt에서 AI 크롤러 봇을 차단하고 있지 않은가?
- [ ] /llms.txt 경로가 제대로 구현되어 200 OK 서빙되는가?
',
    content_html = '<h2>SEO에서 GEO(Generative Engine Optimization)로의 진화</h2>
<p>이제 사용자들은 구글 검색 외에도 Perplexity, Claude, ChatGPT AI 답변을 통해 정보를 얻습니다. AI 모델이 내 사이트 아티클을 출처로 인용하도록 만드는 기술이 <strong>GEO</strong>입니다.</p>
<hr />
<h2>LLM 크롤러봇 허용 robots.txt 표준 설정</h2>
<p>AI 크롤러봇(GPTBot, ClaudeBot, PerplexityBot 등)의 수집을 100% 개방합니다.</p>
<pre><code class="language-text">User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>GEO (Generative Engine Optimization)</strong>: 생성형 엔진 최적화. AI 모델(ChatGPT, Perplexity)의 생성 답변 속에 내 브랜드나 서비스가 답변 출처로 채택되도록 만드는 최신 최적화 기법.</li>
<li><strong>LLM (Large Language Model)</strong>: 거대 언어 모델. Claude, GPT-4처럼 대규모 텍스트 데이터를 학습하여 사람 수준의 문장을 이해하고 답변하는 인공지능.</li>
<li><strong>llms.txt</strong>: AI 로봇이 사이트의 주요 구조와 아티클을 수 밀리초 만에 쉽게 파싱하도록 돕는 마크다운 기반의 사이트 요약 파일 규약.</li>
<li><strong>GPTBot / ClaudeBot</strong>: OpenAI 및 Anthropic 사에서 웹상의 최신 정보를 수집하기 위해 운영하는 전용 AI 크롤러 봇.</li>
</ul>
<hr />
<h2>GEO 최적화 체크리스트</h2>
<ul>
<li>[ ] robots.txt에서 AI 크롤러 봇을 차단하고 있지 않은가?</li>
<li>[ ] /llms.txt 경로가 제대로 구현되어 200 OK 서빙되는가?</li>
</ul>',
    seo_description = 'Perplexity, ChatGPT, Claude 등 AI 검색엔진에 내 사이트 콘텐츠가 답변으로 인용되도록 최적화하는 GEO(Generative Engine Optimization) 기술입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'generative-engine-optimization-and-llm-indexing';

UPDATE posts 
SET title = '브랜드 마케팅과 차별화 포지셔닝(Positioning) 기획',
    excerpt = '경쟁사와 확연히 다른 브랜드 가치를 고객의 뇌리에 각인시키는 포지셔닝 맵 작성과 브랜드 톤앤매너 설정 및 용어 가이드입니다.',
    content_md = '## 포지셔닝(Positioning)이란 무엇인가?

포지셔닝은 고객의 마음속에 내 브랜드가 차지하는 독보적인 위치를 설계하는 일입니다. "무엇이든 잘해요"가 아니라 "이 분야에서만큼은 독보적입니다"를 전달해야 합니다.

---

## 3단계 포지셔닝 맵(Positioning Map) 작성법

1. **축(Axis) 설정**: 시장의 핵심 구매 결정 요소 2가지선정 (예: 가격 x 전문성)
2. **경쟁사 배치**: 기존 플레이어들의 위치 매핑
3. **블루오션 발굴**: 아무도 차지하지 않은 유익한 공백 지점 선점

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **포지셔닝 (Positioning)**: 잠재 고객의 뇌리 속에 우리 제품이 타사 제품과 구별되는 독특하고 유익한 위상을 정립하는 작업.
- **포지셔닝 맵 (Positioning Map)**: 2개의 주요 속성 축을 기준으로 경쟁 브랜드와 자사 브랜드의 위치 관계를 2차원 평면에 시각화한 지도.
- **USP (Unique Selling Proposition)**: 제품이나 브랜드가 가진 유일무이하고 독보적인 핵심 강점 및 셀링 포인트.
- **브랜드 인지도 (Brand Awareness)**: 소비자가 특정 제품 카테고리에서 우리 브랜드를 얼마나 잘 떠올리고 인지하는지를 보여주는 지표.

---

## 브랜드 마케팅 체크리스트

- [ ] 경쟁사와 차별화되는 한 줄 포지셔닝 문장이 완성되었는가?
- [ ] 모든 마케팅 채널의 톤앤매너가 일관성 있게 유지되는가?
',
    content_html = '<h2>포지셔닝(Positioning)이란 무엇인가?</h2>
<p>포지셔닝은 고객의 마음속에 내 브랜드가 차지하는 독보적인 위치를 설계하는 일입니다. "무엇이든 잘해요"가 아니라 "이 분야에서만큼은 독보적입니다"를 전달해야 합니다.</p>
<hr />
<h2>3단계 포지셔닝 맵(Positioning Map) 작성법</h2>
<p>1. <strong>축(Axis) 설정</strong>: 시장의 핵심 구매 결정 요소 2가지선정 (예: 가격 x 전문성)</p>
<p>2. <strong>경쟁사 배치</strong>: 기존 플레이어들의 위치 매핑</p>
<p>3. <strong>블루오션 발굴</strong>: 아무도 차지하지 않은 유익한 공백 지점 선점</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>포지셔닝 (Positioning)</strong>: 잠재 고객의 뇌리 속에 우리 제품이 타사 제품과 구별되는 독특하고 유익한 위상을 정립하는 작업.</li>
<li><strong>포지셔닝 맵 (Positioning Map)</strong>: 2개의 주요 속성 축을 기준으로 경쟁 브랜드와 자사 브랜드의 위치 관계를 2차원 평면에 시각화한 지도.</li>
<li><strong>USP (Unique Selling Proposition)</strong>: 제품이나 브랜드가 가진 유일무이하고 독보적인 핵심 강점 및 셀링 포인트.</li>
<li><strong>브랜드 인지도 (Brand Awareness)</strong>: 소비자가 특정 제품 카테고리에서 우리 브랜드를 얼마나 잘 떠올리고 인지하는지를 보여주는 지표.</li>
</ul>
<hr />
<h2>브랜드 마케팅 체크리스트</h2>
<ul>
<li>[ ] 경쟁사와 차별화되는 한 줄 포지셔닝 문장이 완성되었는가?</li>
<li>[ ] 모든 마케팅 채널의 톤앤매너가 일관성 있게 유지되는가?</li>
</ul>',
    seo_description = '경쟁사와 확연히 다른 브랜드 가치를 고객의 뇌리에 각인시키는 포지셔닝 맵 작성과 브랜드 톤앤매너 설정 및 용어 가이드입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'brand-positioning-and-identity-strategy';

UPDATE posts 
SET title = 'B2B 리드 제너레이션과 콜드 이메일/링크드인 마케팅',
    excerpt = '기업 의사결정권자(C-Level)를 타겟으로 고품질 B2B 리드를 수집하고 링크드인과 아웃리치 메일로 계약을 성사시키는 가이드입니다.',
    content_md = '## B2B 마케팅의 특징

B2C 마케팅이 개인의 감정적 구매를 유도한다면, B2B 마케팅은 기업의 ROI 개선과 위험 최소화를 논리적으로 증명해야 합니다.

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

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **B2B (Business to Business)**: 기업과 기업 간의 거래를 목적으로 수행되는 사업 및 마케팅 모델.
- **콜드 이메일 (Cold Email)**: 관계가 전혀 없는 초면의 잠재 고객에게 제안이나 비즈니스 미팅을 요청하기 위해 발송하는 아웃리치 메일.
- **C-Level**: CEO(대표), CTO(최고기술책임자), CMO(최고마케팅책임자) 등 기업의 최종 결정권을 가진 핵심 경영진.
- **리드 제너레이션 (Lead Generation)**: 우리 제품에 관심을 가질 법한 기업 담당자의 이메일, 연락처 정보를 획득하는 마케팅 과정.

---

## B2B 마케팅 체크리스트

- [ ] B2B 리드 수집 폼이 간결하고 직관적인가?
- [ ] 콜드 메일에 상대방 기업에 대한 맞춤형 분석 내용이 수록되었는가?
',
    content_html = '<h2>B2B 마케팅의 특징</h2>
<p>B2C 마케팅이 개인의 감정적 구매를 유도한다면, B2B 마케팅은 기업의 ROI 개선과 위험 최소화를 논리적으로 증명해야 합니다.</p>
<hr />
<h2>B2B 콜드 이메일(Cold Email) 작성 구조</h2>
<pre><code class="language-text">제목: [회사명]의 웹 로딩 속도 40% 개선 방안 제안

안녕하세요 [담당자명] 님,

[회사명] 사이트를 인상 깊게 보았습니다.
현재 모바일 환경에서 LCP 로딩 속도가 3.2초로 측정되어 아쉬운 이탈이 발생하는 것을 확인했습니다.

저희가 보유한 엣지 서버리스 기술을 적용하면 0.5초 이내로 단축이 가능합니다.

관련하여 10분 간략 커피챗 미팅이 가능하신지 여쭤봅니다.

감사합니다.
DAVHAVE Oscar Lee 드림</code></pre>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>B2B (Business to Business)</strong>: 기업과 기업 간의 거래를 목적으로 수행되는 사업 및 마케팅 모델.</li>
<li><strong>콜드 이메일 (Cold Email)</strong>: 관계가 전혀 없는 초면의 잠재 고객에게 제안이나 비즈니스 미팅을 요청하기 위해 발송하는 아웃리치 메일.</li>
<li><strong>C-Level</strong>: CEO(대표), CTO(최고기술책임자), CMO(최고마케팅책임자) 등 기업의 최종 결정권을 가진 핵심 경영진.</li>
<li><strong>리드 제너레이션 (Lead Generation)</strong>: 우리 제품에 관심을 가질 법한 기업 담당자의 이메일, 연락처 정보를 획득하는 마케팅 과정.</li>
</ul>
<hr />
<h2>B2B 마케팅 체크리스트</h2>
<ul>
<li>[ ] B2B 리드 수집 폼이 간결하고 직관적인가?</li>
<li>[ ] 콜드 메일에 상대방 기업에 대한 맞춤형 분석 내용이 수록되었는가?</li>
</ul>',
    seo_description = '기업 의사결정권자(C-Level)를 타겟으로 고품질 B2B 리드를 수집하고 링크드인과 아웃리치 메일로 계약을 성사시키는 가이드입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'b2b-lead-generation-and-linkedin-outreach';

UPDATE posts 
SET title = '동영상 마케팅: 숏폼(Shorts, Reels) 및 유튜브 검색 노출',
    excerpt = '1분 이내의 유튜브 쇼츠(Shorts)와 인스타그램 릴스(Reels) 후킹 대본 작성법과 유튜브 알고리즘 상위 노출 전략입니다.',
    content_md = '## 숏폼(Short-form) 콘텐츠가 대세인 이유

모바일 사용자들의 주의 지속 시간(Attention Span)이 짧아짐에 따라 60초 이내의 숏폼 동영상이 브랜드 인지도 확보에 최고의 마케팅 수단이 되었습니다.

---

## 숏폼 60초 대본 작성 공식 (Hook - Value - CTA)

- **0~3초 (Hook)**: 강렬한 질문이나 시각적 반전 (예: "아직도 블로그 글 하나 쓰는데 3시간 걸리시나요?")
- **4~45초 (Value)**: 핵심 꿀팁 3가지 빠른 전달
- **46~60초 (CTA)**: "더 자세한 복붙용 템플릿은 프로필 링크에서 확인하세요"

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **숏폼 (Short-form Video)**: 유튜브 쇼츠, 인스타그램 릴스, 틱톡 등 1분 이내의 짧은 세로형 동영상 콘텐츠.
- **후킹 (Hooking)**: 영상 첫 1~3초 안에 시청자의 호기심이나 놀라움을 자극하여 이탈하지 않도록 시선을 사로잡는 기법.
- **유튜브 SEO**: 유튜브 검색 결과에 내 동영상이 노출되도록 제목, 설명란, 타임스탬프, 태그를 최적화하는 전략.
- **시청 지속 시간 (Watch Time)**: 시청자가 동영상을 도중에 이탈하지 않고 시청한 평균 누적 시간 비율.

---

## 숏폼 마케팅 체크리스트

- [ ] 영상 시작 3초 안에 시청자의 주의를 끌었는가?
- [ ] 자막 폰트 크기가 모바일 화면에서 명확히 읽히는가?
',
    content_html = '<h2>숏폼(Short-form) 콘텐츠가 대세인 이유</h2>
<p>모바일 사용자들의 주의 지속 시간(Attention Span)이 짧아짐에 따라 60초 이내의 숏폼 동영상이 브랜드 인지도 확보에 최고의 마케팅 수단이 되었습니다.</p>
<hr />
<h2>숏폼 60초 대본 작성 공식 (Hook - Value - CTA)</h2>
<ul>
<li><strong>0~3초 (Hook)</strong>: 강렬한 질문이나 시각적 반전 (예: "아직도 블로그 글 하나 쓰는데 3시간 걸리시나요?")</li>
<li><strong>4~45초 (Value)</strong>: 핵심 꿀팁 3가지 빠른 전달</li>
<li><strong>46~60초 (CTA)</strong>: "더 자세한 복붙용 템플릿은 프로필 링크에서 확인하세요"</li>
</ul>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>숏폼 (Short-form Video)</strong>: 유튜브 쇼츠, 인스타그램 릴스, 틱톡 등 1분 이내의 짧은 세로형 동영상 콘텐츠.</li>
<li><strong>후킹 (Hooking)</strong>: 영상 첫 1~3초 안에 시청자의 호기심이나 놀라움을 자극하여 이탈하지 않도록 시선을 사로잡는 기법.</li>
<li><strong>유튜브 SEO</strong>: 유튜브 검색 결과에 내 동영상이 노출되도록 제목, 설명란, 타임스탬프, 태그를 최적화하는 전략.</li>
<li><strong>시청 지속 시간 (Watch Time)</strong>: 시청자가 동영상을 도중에 이탈하지 않고 시청한 평균 누적 시간 비율.</li>
</ul>
<hr />
<h2>숏폼 마케팅 체크리스트</h2>
<ul>
<li>[ ] 영상 시작 3초 안에 시청자의 주의를 끌었는가?</li>
<li>[ ] 자막 폰트 크기가 모바일 화면에서 명확히 읽히는가?</li>
</ul>',
    seo_description = '1분 이내의 유튜브 쇼츠(Shorts)와 인스타그램 릴스(Reels) 후킹 대본 작성법과 유튜브 알고리즘 상위 노출 전략입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'short-form-video-marketing-and-youtube-seo';

UPDATE posts 
SET title = '디지털 마케팅 총정리: 360도 통합 마케팅(IMC) 로드맵',
    excerpt = 'SEO, 콘텐츠, 퍼포먼스 광고, SNS, 이메일 채널을 시너지 있게 결합하는 360도 통합 디지털 마케팅 Master 로드맵과 용어 해설입니다.',
    content_md = '## 통합 마케팅 커뮤니케이션(IMC)의 완성

독립된 마케팅 채널(SEO, 광고, SNS, 이메일)들이 파편화되지 않고 하나의 명확한 브랜드 메시지로 유기적으로 연결될 때 마케팅 성과는 극대화됩니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **IMC (Integrated Marketing Communications)**: 통합 마케팅 커뮤니케이션. 광고, PR, SEO, 이벤트 등 다양한 마케팅 수단을 일관된 브랜딩 메시지로 통합하는 전략.
- **인바운드 마케팅 (Inbound Marketing)**: SEO, 지식 블로그처럼 고객이 도움이 되는 콘텐츠를 찾아 스스로 방문하게 만드는 고객 친화적 마케팅.
- **아웃바운드 마케팅 (Outbound Marketing)**: 디스플레이 광고, 콜드 메일처럼 브랜드가 적극적으로 메시지를 유저에게 발송하는 마케팅.
- **마케팅 오케스트레이션 (Orchestration)**: 여러 마케팅 데이터와 채널을 오케스트라 지휘자처럼 유기적으로 결합하고 시너지를 극대화하는 관리 기법.

---

## 디지털 마케팅 마스터 체크리스트

- [ ] Inbound(SEO, 콘텐츠)와 Outbound(광고, 아웃리치)가 균형을 이루는가?
- [ ] 모든 채널이 랜딩 페이지와 최종 전환으로 원활히 유도되고 있는가?
',
    content_html = '<h2>통합 마케팅 커뮤니케이션(IMC)의 완성</h2>
<p>독립된 마케팅 채널(SEO, 광고, SNS, 이메일)들이 파편화되지 않고 하나의 명확한 브랜드 메시지로 유기적으로 연결될 때 마케팅 성과는 극대화됩니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>IMC (Integrated Marketing Communications)</strong>: 통합 마케팅 커뮤니케이션. 광고, PR, SEO, 이벤트 등 다양한 마케팅 수단을 일관된 브랜딩 메시지로 통합하는 전략.</li>
<li><strong>인바운드 마케팅 (Inbound Marketing)</strong>: SEO, 지식 블로그처럼 고객이 도움이 되는 콘텐츠를 찾아 스스로 방문하게 만드는 고객 친화적 마케팅.</li>
<li><strong>아웃바운드 마케팅 (Outbound Marketing)</strong>: 디스플레이 광고, 콜드 메일처럼 브랜드가 적극적으로 메시지를 유저에게 발송하는 마케팅.</li>
<li><strong>마케팅 오케스트레이션 (Orchestration)</strong>: 여러 마케팅 데이터와 채널을 오케스트라 지휘자처럼 유기적으로 결합하고 시너지를 극대화하는 관리 기법.</li>
</ul>
<hr />
<h2>디지털 마케팅 마스터 체크리스트</h2>
<ul>
<li>[ ] Inbound(SEO, 콘텐츠)와 Outbound(광고, 아웃리치)가 균형을 이루는가?</li>
<li>[ ] 모든 채널이 랜딩 페이지와 최종 전환으로 원활히 유도되고 있는가?</li>
</ul>',
    seo_description = 'SEO, 콘텐츠, 퍼포먼스 광고, SNS, 이메일 채널을 시너지 있게 결합하는 360도 통합 디지털 마케팅 Master 로드맵과 용어 해설입니다.',
    updated_at = DATETIME('now')
WHERE slug = '360-integrated-marketing-communications-roadmap';

UPDATE posts 
SET title = '백링크(Backlink) 구축과 획득 전략: 오프페이지(Off-Page) SEO 완벽 가이드',
    excerpt = '검색엔진 상위 노출의 핵심인 고품질 백링크(Backlink)를 획득하는 5가지 전략과 스팸 백링크 차단 기법 및 용어 사전입니다.',
    content_md = '## 백링크(Backlink)란 무엇이며 왜 중요한가?

백링크(Backlink, 역링크)는 다른 웹사이트가 내 웹사이트의 특정 페이지로 연결해 주는 텍스트나 이미지 하이퍼링크를 의미합니다.

구글과 검색엔진 알고리즘은 백링크를 다른 웹사이트가 내 사이트에 보낸 **"투표(Vote)이자 신뢰의 표징"**으로 해석합니다. 권위 있는 외부 사이트로부터 많은 백링크를 받을수록 검색 결과 1페이지 상단에 노출될 확률이 비례하여 높아집니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **백링크 (Backlink / Inbound Link)**: 다른 외부 웹사이트에서 내 웹사이트로 들어오도록 걸어놓은 하이퍼링크.
- **앵커 텍스트 (Anchor Text)**: 하이퍼링크가 걸려 있는 클릭 가능한 텍스트 문구.
- **링크 주스 (Link Juice)**: 백링크를 통해 권위 있는 사이트에서 내 사이트로 전달되는 검색엔진 신뢰도 점수 및 평판 지표.
- **DoFollow / NoFollow**: DoFollow는 검색엔진 로봇에게 링크를 따라가서 점수를 주라는 지시이고, NoFollow(`rel="nofollow"`)는 ''이 링크로 점수를 전달하지 말라''는 지시.

---

## 백링크 전략 체크리스트

- [ ] 내 사이트로 유입되는 백링크의 앵커 텍스트가 자연스러운가?
- [ ] 스팸/성인/박스형 저품질 사이트의 악성 백링크가 없는가?
- [ ] 도메인 권위도(DA)가 높은 언론사 및 전문 사이트의 링크를 획득했는가?
',
    content_html = '<h2>백링크(Backlink)란 무엇이며 왜 중요한가?</h2>
<p>백링크(Backlink, 역링크)는 다른 웹사이트가 내 웹사이트의 특정 페이지로 연결해 주는 텍스트나 이미지 하이퍼링크를 의미합니다.</p>
<p>구글과 검색엔진 알고리즘은 백링크를 다른 웹사이트가 내 사이트에 보낸 <strong>"투표(Vote)이자 신뢰의 표징"</strong>으로 해석합니다. 권위 있는 외부 사이트로부터 많은 백링크를 받을수록 검색 결과 1페이지 상단에 노출될 확률이 비례하여 높아집니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>백링크 (Backlink / Inbound Link)</strong>: 다른 외부 웹사이트에서 내 웹사이트로 들어오도록 걸어놓은 하이퍼링크.</li>
<li><strong>앵커 텍스트 (Anchor Text)</strong>: 하이퍼링크가 걸려 있는 클릭 가능한 텍스트 문구.</li>
<li><strong>링크 주스 (Link Juice)</strong>: 백링크를 통해 권위 있는 사이트에서 내 사이트로 전달되는 검색엔진 신뢰도 점수 및 평판 지표.</li>
<li><strong>DoFollow / NoFollow</strong>: DoFollow는 검색엔진 로봇에게 링크를 따라가서 점수를 주라는 지시이고, NoFollow(<code>rel="nofollow"</code>)는 ''이 링크로 점수를 전달하지 말라''는 지시.</li>
</ul>
<hr />
<h2>백링크 전략 체크리스트</h2>
<ul>
<li>[ ] 내 사이트로 유입되는 백링크의 앵커 텍스트가 자연스러운가?</li>
<li>[ ] 스팸/성인/박스형 저품질 사이트의 악성 백링크가 없는가?</li>
<li>[ ] 도메인 권위도(DA)가 높은 언론사 및 전문 사이트의 링크를 획득했는가?</li>
</ul>',
    seo_description = '검색엔진 상위 노출의 핵심인 고품질 백링크(Backlink)를 획득하는 5가지 전략과 스팸 백링크 차단 기법 및 용어 사전입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'backlink-building-and-offpage-seo-strategy';

UPDATE posts 
SET title = '네이버 블로그 및 지식인 노출 알고리즘과 상위 노출 기법',
    excerpt = '네이버 서치 알고리즘인 C-Rank와 DIA+의 작동 원리를 파악하고 블로그, 스마트스토어, 웹사이트를 상위 노출시키는 네이버 SEO 기법입니다.',
    content_md = '## 네이버 검색 알고리즘의 2대 축: C-Rank & DIA+

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
',
    content_html = '<h2>네이버 검색 알고리즘의 2대 축: C-Rank & DIA+</h2>
<p>국내 최대 검색 포털 네이버는 구글과 다른 독자적인 알고리즘으로 콘텐츠의 순위를 결정합니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>C-Rank 알고리즘</strong>: Creator Rank. 블로그나 출처의 전문성, 인지도, 꾸준함을 평가하는 네이버의 출처 신뢰도 평가 알고리즘.</li>
<li><strong>DIA+ 알고리즘</strong>: Deep Intent Analysis. 출처와 관계없이 개별 게시글 문서 자체의 깊이, 체류시간, 독창성을 인공지능 딥러닝으로 평가하는 알고리즘.</li>
<li><strong>네이버 서치어드바이저 (Search Advisor)</strong>: 네이버 검색엔진에 내 웹사이트의 수집 현황을 모니터링하고 사이트맵을 등록하는 네이버 공식 웹마스터 도구.</li>
<li><strong>체류 시간 (Dwell Time)</strong>: 유저가 검색 결과를 클릭해 웹페이지에 들어와서 나가기 전까지 머무른 평균 시간.</li>
</ul>
<hr />
<h2>네이버 SEO 체크리스트</h2>
<ul>
<li>[ ] 네이버 서치어드바이저 웹마스터 도구에 수집 오류가 없는가?</li>
<li>[ ] 글 내용에 직접 촬영/제작한 시각 자료가 포함되어 있는가?</li>
<li>[ ] 문맥과 관련 없는 키워드 반복 남발(Abusing)을 하지 않았는가?</li>
</ul>',
    seo_description = '네이버 서치 알고리즘인 C-Rank와 DIA+의 작동 원리를 파악하고 블로그, 스마트스토어, 웹사이트를 상위 노출시키는 네이버 SEO 기법입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'naver-search-algorithm-and-naver-seo';

UPDATE posts 
SET title = '구글 딥렌더링과 자바스크립트 SEO(JS SEO) 최적화',
    excerpt = 'React, Next.js, Vue 등 싱글 페이지 애플리케이션(SPA)의 자바스크립트 실행 지연을 극복하고 Googlebot 수집률을 높이는 JS SEO 기법입니다.',
    content_md = '## 자바스크립트 SEO(JS SEO)란 무엇인가?

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
',
    content_html = '<h2>자바스크립트 SEO(JS SEO)란 무엇인가?</h2>
<p>클라이언트 사이드 렌더링(CSR) 기반의 React, Vue 앱은 구글봇이 접근했을 때 빈 화면(<code>div id="root"</code>)만 보일 위험이 있습니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>JS SEO (JavaScript SEO)</strong>: 자바스크립트로 구축된 모던 프론트엔드 웹 앱이 검색엔진 크롤러봇에게 지연 없이 잘 읽히도록 렌더링 아키텍처를 최적화하는 기술.</li>
<li><strong>CSR (Client-Side Rendering)</strong>: 브라우저에서 자바스크립트를 다 다운로드받은 후 비동기로 화면을 그리는 렌더링 방식.</li>
<li><strong>SSR (Server-Side Rendering)</strong>: 서버(Cloudflare Workers/Next.js)에서 미리 완성된 HTML을 생성하여 브라우저에 즉시 응답을 전송하는 방식.</li>
<li><strong>WRS (Web Rendering Service)</strong>: 구글 검색엔진 내부에서 자바스크립트를 실제 브라우저처럼 실행해 보고 화면을 파싱하는 전용 렌더링 서비스 엔진.</li>
</ul>
<hr />
<h2>JS SEO 체크리스트</h2>
<ul>
<li>[ ] 자바스크립트를 비활성화(Disable JS)해도 주요 텍스트와 링크가 보이는가?</li>
<li>[ ] View Source(소스 보기) 실행 시 H1 제목과 본문 내용이 HTML에 들어있는가?</li>
<li>[ ] Fetch & Render 도구에서 구글봇 렌더링 스크린샷이 깨지지 않는가?</li>
</ul>',
    seo_description = 'React, Next.js, Vue 등 싱글 페이지 애플리케이션(SPA)의 자바스크립트 실행 지연을 극복하고 Googlebot 수집률을 높이는 JS SEO 기법입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'javascript-seo-and-rendering-optimization';

UPDATE posts 
SET title = '도메인 권위도(DA/DR) 향상과 백링크 프로필 퀄리티 감사(Audit)',
    excerpt = 'Ahrefs DR, Moz DA 도메인 점수의 원리를 이해하고, 내 사이트를 공격하는 악성 스팸 백링크를 디스아보(Disavow) 거부 조치하는 튜토리얼입니다.',
    content_md = '## 도메인 권위도 (Domain Authority) 평가지표

구글은 공식적으로 DA 점수를 명시하지 않지만, Ahrefs(DR), Moz(DA), Semrush(AS) 등 글로벌 SEO 데이터 툴은 사이트의 검색 지배력을 0~100점 점수로 측정합니다.

---

## 💡 핵심 마케팅 & SEO 용어 사전 (Glossary)

- **도메인 권위도 (DA / DR)**: Domain Authority / Domain Rating. 특정 웹사이트 도메인이 검색엔진 결과에서 가지는 전반적인 영향력과 신뢰도 점수 (0~100점).
- **Disavow (백링크 거부)**: 내 웹사이트 평판을 갉아먹는 악성 스팸 사이트의 백링크를 구글 서치 콘솔을 통해 ''이 링크를 무효화해달라''고 거부 신청하는 기능.
- **스팸 백링크 (Spammy Backlink)**: 도메인 구매 스팸업체, 해외 도박/성인/악성코드 사이트가 내 사이트로 무단 연결해놓은 저품질 링크.
- **Ahrefs / Moz**: 글로벌 마케터들이 전 세계 웹사이트의 백링크 및 키워드 순위를 추적할 때 사용하는 대표적인 SEO 전문 소프트웨어.

---

## DA/DR 향상 체크리스트

- [ ] 주기적으로 구글 서치 콘솔에서 신규 외부 링크를 감사하고 있는가?
- [ ] 악성 백링크를 발견하면 Disavow 파일로 거부 조치했는가?
- [ ] 신뢰도 높은 외부 전문 사이트로부터 건강한 백링크가 늘고 있는가?
',
    content_html = '<h2>도메인 권위도 (Domain Authority) 평가지표</h2>
<p>구글은 공식적으로 DA 점수를 명시하지 않지만, Ahrefs(DR), Moz(DA), Semrush(AS) 등 글로벌 SEO 데이터 툴은 사이트의 검색 지배력을 0~100점 점수로 측정합니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>도메인 권위도 (DA / DR)</strong>: Domain Authority / Domain Rating. 특정 웹사이트 도메인이 검색엔진 결과에서 가지는 전반적인 영향력과 신뢰도 점수 (0~100점).</li>
<li><strong>Disavow (백링크 거부)</strong>: 내 웹사이트 평판을 갉아먹는 악성 스팸 사이트의 백링크를 구글 서치 콘솔을 통해 ''이 링크를 무효화해달라''고 거부 신청하는 기능.</li>
<li><strong>스팸 백링크 (Spammy Backlink)</strong>: 도메인 구매 스팸업체, 해외 도박/성인/악성코드 사이트가 내 사이트로 무단 연결해놓은 저품질 링크.</li>
<li><strong>Ahrefs / Moz</strong>: 글로벌 마케터들이 전 세계 웹사이트의 백링크 및 키워드 순위를 추적할 때 사용하는 대표적인 SEO 전문 소프트웨어.</li>
</ul>
<hr />
<h2>DA/DR 향상 체크리스트</h2>
<ul>
<li>[ ] 주기적으로 구글 서치 콘솔에서 신규 외부 링크를 감사하고 있는가?</li>
<li>[ ] 악성 백링크를 발견하면 Disavow 파일로 거부 조치했는가?</li>
<li>[ ] 신뢰도 높은 외부 전문 사이트로부터 건강한 백링크가 늘고 있는가?</li>
</ul>',
    seo_description = 'Ahrefs DR, Moz DA 도메인 점수의 원리를 이해하고, 내 사이트를 공격하는 악성 스팸 백링크를 디스아보(Disavow) 거부 조치하는 튜토리얼입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'domain-authority-and-backlink-profile-audit';

UPDATE posts 
SET title = '구글 디스플레이(GDN) 및 메타 타겟팅 픽셀(Pixel/API) 연동 실전',
    excerpt = '인스타그램 광고 리마케팅을 위한 Meta Pixel 스크립트 설치와 Google Ads 전환 추적 이벤트 연동 기법입니다.',
    content_md = '## 리마케팅(Retargeting)과 픽셀(Pixel)의 원리

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
',
    content_html = '<h2>리마케팅(Retargeting)과 픽셀(Pixel)의 원리</h2>
<p>내 사이트에 한 번이라도 방문한 사용자는 구매 의도가 매우 높습니다.</p>
<p>사이트에 Meta Pixel과 Google Conversion Tag를 설치하면, 방문자의 행동 데이터를 추적하여 맞춤 광고를 지속 노출할 수 있습니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Meta Pixel (메타 픽셀)</strong>: 인스타그램과 페이스북 광고를 위해 자사 웹사이트에 심는 자바스크립트 행동 추적 스크립트 코드.</li>
<li><strong>리타겟팅 / 리마케팅 (Retargeting)</strong>: 내 사이트를 이전에 방문했던 유저들을 픽셀 쿠키 데이터로 식별하여 소셜 미디어나 타 웹사이트에서 재노출 광고를 집행하는 기술.</li>
<li><strong>전환 추적 (Conversion Tracking)</strong>: 광고를 클릭해 들어온 방문자가 구매나 문의 신청 등 목표 행동을 실제 수행했는지 추적 측정하는 기술.</li>
<li><strong>CAPI (Conversions API)</strong>: 브라우저 쿠키 차단에 대비해 서버 대 서버(Server-to-Server)로 메타 광고 서버에 이벤트를 직접 발송하는 최신 전환 API.</li>
</ul>
<hr />
<h2>픽셀 연동 체크리스트</h2>
<ul>
<li>[ ] Meta Pixel Helper 크롬 확장 프로그램에서 Pixel이 정상 작동(Green)인가?</li>
<li>[ ] 상담 신청 및 문의 완료 시 전환 이벤트가 정상 전송되는가?</li>
</ul>',
    seo_description = '인스타그램 광고 리마케팅을 위한 Meta Pixel 스크립트 설치와 Google Ads 전환 추적 이벤트 연동 기법입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'meta-pixel-and-google-conversion-tracking';

UPDATE posts 
SET title = '퍼포먼스 광고 소재 A/B 테스트와 카피라이팅 리팩터링',
    excerpt = '클릭률(CTR)과 전환율을 극대화하기 위해 광고 이미지 소재, 영상 오프닝 3초, 카피 문구를 승자(Winner) 소재로 리팩터링하는 테스트 전략입니다.',
    content_md = '## 광고 소재(Creative)가 성패의 80%를 결정한다

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
',
    content_html = '<h2>광고 소재(Creative)가 성패의 80%를 결정한다</h2>
<p>퍼포먼스 마케팅에서 아무리 타겟팅을 정교하게 설정해도, 사용자의 피드 스크롤을 멈추게 만드는 광고 소재(Image/Video)와 카피 문구가 매력적이지 않으면 광고비는 공중에 날아갑니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>광고 소재 (Ad Creative)</strong>: 피드나 배너에 실제로 렌더링되는 이미지, 디스플레이 배너, 카드리프렛, 동영상 및 텍스트 문구의 총칭.</li>
<li><strong>승자 소재 (Winner Creative)</strong>: A/B 테스트 결과 다른 소재들보다 압도적으로 높은 CTR(클릭률)과 낮은 CAC(고객 획득 비용)를 기록한 최고 효율의 소재.</li>
<li><strong>피드 스크롤 스토퍼 (Scroll Stopper)</strong>: 유저가 인스타그램이나 유튜브 피드를 빠르게 넘기다가 시선을 강제로 멈추게 만드는 0.5초 이내의 강렬한 비주얼적 요소.</li>
<li><strong>손실 회피 심리 (Loss Aversion)</strong>: 사람은 이득을 얻는 기쁨보다 손실을 피하려는 욕구가 2배 이상 강하다는 행동경제학 이론으로 카피라이팅에 자주 응용됨.</li>
</ul>
<hr />
<h2>소재 리팩터링 체크리스트</h2>
<ul>
<li>[ ] 한 번에 하나의 변수만 변경하여 A/B 테스트를 실행했는가?</li>
<li>[ ] 피드 스크롤을 멈추게 하는 가독성 높은 폰트와 고대비 색상을 썼는가?</li>
<li>[ ] CTR(클릭률) 상위 10% 승자(Winner) 소재에 예산을 집중 증액했는가?</li>
</ul>',
    seo_description = '클릭률(CTR)과 전환율을 극대화하기 위해 광고 이미지 소재, 영상 오프닝 3초, 카피 문구를 승자(Winner) 소재로 리팩터링하는 테스트 전략입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'performance-ad-creative-ab-testing-and-copywriting';

UPDATE posts 
SET title = '로컬 SEO 및 구글 비즈니스 프로필(Google Business Profile) 상위 노출',
    excerpt = '병원, 세무사, 오프라인 매장 및 지역 기반 사업자가 구글 지도(Google Maps) 및 네이버 플레이스 상위에 노출되도록 최적화하는 로컬 SEO 가이드입니다.',
    content_md = '## 로컬 SEO(Local SEO)의 개념과 강력함

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
',
    content_html = '<h2>로컬 SEO(Local SEO)의 개념과 강력함</h2>
<p>"강남 세무사", "홍대 카페"처럼 특정 지역명을 포함한 검색어는 구매 및 방문 의도가 즉각적입니다.</p>
<p>구글 지도(Google Maps) 파일럿 패크(Local 3-Pack)에 상위 노출되면 엄청난 고객 유입을 획득할 수 있습니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>로컬 SEO (Local SEO)</strong>: 특정 지역이나 오프라인 매장 기반의 키워드 검색 시 지도 및 상단 결과에 플레이스를 노출시키는 지역 최적화 마케팅.</li>
<li><strong>NAP (Name, Address, Phone)</strong>: 사업자 상호명, 주소, 전화번호. 로컬 SEO의 신뢰도를 판가름하는 가장 핵심적인 데이터 정합성 항목.</li>
<li><strong>Google Business Profile (구글 비즈니스 프로필)</strong>: 구글 지도 및 검색 결과에 매장 정보, 영업시간, 사진, 후기를 무료로 등록하는 비즈니스 관리도구.</li>
<li><strong>Local 3-Pack</strong>: 구글에서 지역 검색 시 검색 결과 상단에 지도와 함께 최상위로 노출되는 3개의 대표 오프라인 매장 리스트 구좌.</li>
</ul>
<hr />
<h2>로컬 SEO 체크리스트</h2>
<ul>
<li>[ ] 구글 비즈니스 프로필 및 네이버 플레이스 소유권 인증이 되었는가?</li>
<li>[ ] 전 웹사이트의 NAP(상호, 주소, 전화번호)가 100% 일치하는가?</li>
<li>[ ] 고객의 실제 후기 리뷰가 지속적으로 누적되고 있는가?</li>
</ul>',
    seo_description = '병원, 세무사, 오프라인 매장 및 지역 기반 사업자가 구글 지도(Google Maps) 및 네이버 플레이스 상위에 노출되도록 최적화하는 로컬 SEO 가이드입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'local-seo-and-google-business-profile';

UPDATE posts 
SET title = '프로그램 방식 디지털 광고(Programmatic Ads)와 DSP/SSP 이해',
    excerpt = '빅데이터와 소프트웨어 알고리즘으로 실시간 입찰(RTB)을 진행하는 프로그래매틱 광고 생태계와 DSP, SSP, Ad Exchange 구조입니다.',
    content_md = '## 프로그래매틱 광고(Programmatic Advertising)란?

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
',
    content_html = '<h2>프로그래매틱 광고(Programmatic Advertising)란?</h2>
<p>사람이 일일이 매체 담당자와 연락해 광고 구좌를 구매하는 대신, 자동화된 소프트웨어와 실시간 경매(RTB - Real-Time Bidding) 알고리즘을 통해 0.1초 만에 타겟 유저에게 최적의 광고를 노출하는 방식입니다.</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>프로그래매틱 광고 (Programmatic Ads)</strong>: 사람이 아닌 소프트웨어 알고리즘과 빅데이터를 이용하여 디지털 광고 공간을 실시간으로 구매하고 세팅하는 자동화 광고.</li>
<li><strong>RTB (Real-Time Bidding)</strong>: 실시간 경매. 웹페이지가 로딩되는 100밀리초(0.1초)의 아주 짧은 순간에 최고 입찰가를 제시한 광고주의 광고를 노출하는 시스템.</li>
<li><strong>DSP (Demand-Side Platform)</strong>: 광고주가 최선의 가격으로 가장 효율적인 광고 타겟 오디언스 구좌를 자동으로 인바운드 구매할 수 있게 돕는 플랫폼.</li>
<li><strong>SSP (Supply-Side Platform)</strong>: 지면을 가진 웹/앱 매체사가 자신의 광고 지면을 최고가에 자동 판매하여 수익을 극대화할 수 있도록 돕는 플랫폼.</li>
</ul>
<hr />
<h2>프로그래매틱 광고 체크리스트</h2>
<ul>
<li>[ ] 리타겟팅 및 인구통계 데이터 세그먼트가 제대로 구축되어 있는가?</li>
<li>[ ] 브랜드 안전성(Brand Safety) 필터가 설정되어 부정적 웹사이트 노출을 막고 있는가?</li>
</ul>',
    seo_description = '빅데이터와 소프트웨어 알고리즘으로 실시간 입찰(RTB)을 진행하는 프로그래매틱 광고 생태계와 DSP, SSP, Ad Exchange 구조입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'programmatic-advertising-and-dsp-ssp-guide';

UPDATE posts 
SET title = '네이버 검색광고(SA) 및 파워링크 키워드입찰 효율 최적화',
    excerpt = '네이버 파워링크 광고의 품질지수(Quality Index)를 올려 클릭당 비용(CPC)을 낮추고 매출 전환을 극대화하는 실전 입찰 전략입니다.',
    content_md = '## 네이버 파워링크 입찰가 산정 원리

네이버 파워링크 노출 순위는 오직 입찰가만으로 결정되지 않습니다.

$$\text{노출 순위 점수} = \text{입찰가 (CPC)} \times \text{품질지수 (Quality Index)}$$

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
',
    content_html = '<h2>네이버 파워링크 입찰가 산정 원리</h2>
<p>네이버 파워링크 노출 순위는 오직 입찰가만으로 결정되지 않습니다.</p>
<p>$$\text{노출 순위 점수} = \text{입찰가 (CPC)} \times \text{품질지수 (Quality Index)}$$</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>검색광고 (SA - Search Advertising)</strong>: 네이버나 구글 검색 결과 상단에 텍스트 링크 형태로 노출되는 키워드 입찰 기반 광고.</li>
<li><strong>CPC (Cost Per Click)</strong>: 유저가 광고를 1회 클릭할 때마다 광고주가 플랫폼에 지불하는 클릭당 비용.</li>
<li><strong>품질지수 (Quality Index)</strong>: 네이버 검색광고에서 키워드와 광고문구, 랜딩페이지 간의 연관성과 유저 만족도를 종합하여 부여하는 1~7점의 평가 지수.</li>
<li><strong>음영 키워드 / 제외 키워드</strong>: 전환 가능성이 희박하거나 무관한 검색어 클릭으로 인한 불필요한 광고비 낭비를 막기 위해 사전에 광고 노출을 차단하는 키워드.</li>
</ul>
<hr />
<h2>파워링크 최적화 체크리스트</h2>
<ul>
<li>[ ] 품질지수가 5점 이상(최대 7점) 유지되고 있는가?</li>
<li>[ ] 검색 의도와 맞지 않는 불필요한 음영 키워드는 제외 키워드로 등록했는가?</li>
<li>[ ] 가능한 모든 파워링크 확장 소재를 등록했는가?</li>
</ul>',
    seo_description = '네이버 파워링크 광고의 품질지수(Quality Index)를 올려 클릭당 비용(CPC)을 낮추고 매출 전환을 극대화하는 실전 입찰 전략입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'naver-search-ad-powerlink-bidding-optimization';

UPDATE posts 
SET title = '디지털 마케팅 총정리: E-E-A-T 구축과 백링크-광고 오케스트레이션',
    excerpt = '구글 검색엔진의 E-E-A-T(경험, 전문성, 권위성, 신뢰성) 평가 기준을 만족시키고 SEO와 퍼포먼스 광고를 유기적으로 오케스트레이션하는 마스터 가이드입니다.',
    content_md = '## 구글 E-E-A-T 평가 기준 완벽 해부

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
',
    content_html = '<h2>구글 E-E-A-T 평가 기준 완벽 해부</h2>
<p>구글 검색 품질 평가 가이드라인의 핵심 기준은 <strong>E-E-A-T</strong>입니다.</p>
<p>1. <strong>Experience (경험)</strong>: 직접 프로젝트를 진행하고 검증한 실전 경험 서술</p>
<p>2. <strong>Expertise (전문성)</strong>: 기술과 지식의 깊이 및 정확한 근거 제시</p>
<p>3. <strong>Authoritativeness (권위성)</strong>: 업계 및 타 사이트로부터의 인정과 백링크 인용</p>
<p>4. <strong>Trustworthiness (신뢰성)</strong>: 투명한 작성자 정보, 연락처, SSL 보안 및 개인정보 처리방침</p>
<hr />
<h2>💡 핵심 마케팅 & SEO 용어 사전 (Glossary)</h2>
<ul>
<li><strong>E-E-A-T</strong>: Experience(경험), Expertise(전문성), Authoritativeness(권위성), Trustworthiness(신뢰성)의 약자로 구글이 웹사이트 콘텐츠의 신뢰도를 판가름하는 핵심 가이드라인.</li>
<li><strong>YMYL (Your Money or Your Life)</strong>: 건강, 금융, 재산, 법률 등 유저의 삶에 중대한 영향을 미치는 웹페이지 주제군으로 구글이 가장 엄격하게 E-E-A-T를 적용함.</li>
<li><strong>Full-Funnel Marketing</strong>: 브랜드 인식(Upper)부터 고려(Middle), 전환(Lower)에 이르기까지 고객 여정의 전체 퍼널을 통합적으로 커버하는 풀패키지 마케팅 전략.</li>
</ul>
<hr />
<h2>디지털 마케팅 마스터 최종 점검 리스트</h2>
<ul>
<li>[ ] 작성자 정보(Author Profile)와 투명한 스튜디오 소개가 존재하는가?</li>
<li>[ ] Paid 광고 유입과 Organic SEO 유입이 서로 시너지를 발휘하는가?</li>
<li>[ ] 단기 편법(스팸 백링크, 어뷰징) 없이 정직하고 지속 가능한 콘텐츠 자산이 쌓이고 있는가?</li>
</ul>',
    seo_description = '구글 검색엔진의 E-E-A-T(경험, 전문성, 권위성, 신뢰성) 평가 기준을 만족시키고 SEO와 퍼포먼스 광고를 유기적으로 오케스트레이션하는 마스터 가이드입니다.',
    updated_at = DATETIME('now')
WHERE slug = 'eeat-building-and-performance-marketing-orchestration';
