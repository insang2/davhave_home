import sys, os, subprocess, re

# 마크다운 ➔ HTML 변환기
def md_to_html(md_text):
    if not md_text: return ""
    lines = md_text.split("\n")
    html_out = []
    in_code, code_lang, code_lines, in_list = False, "", [], False

    for line in lines:
        if line.startswith("```"):
            if in_code:
                code_content = "\n".join(code_lines).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
                html_out.append(f'<pre><code class="language-{code_lang}">{code_content}</code></pre>')
                in_code, code_lines, code_lang = False, [], ""
            else:
                if in_list: html_out.append("</ul>"); in_list = False
                in_code = True
                code_lang = line.replace("```", "").strip()
            continue
        if in_code:
            code_lines.append(line); continue
        if line.startswith("- ") or line.startswith("* "):
            if not in_list: html_out.append("<ul>"); in_list = True
            item_text = line[2:].strip()
            item_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', item_text)
            item_text = re.sub(r'`(.*?)`', r'<code>\1</code>', item_text)
            html_out.append(f"<li>{item_text}</li>")
            continue
        else:
            if in_list: html_out.append("</ul>"); in_list = False

        if line.startswith("### "):
            html_out.append(f"<h3>{re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line[4:].strip())}</h3>")
            continue
        elif line.startswith("## "):
            html_out.append(f"<h2>{re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line[3:].strip())}</h2>")
            continue
        elif line.startswith("# "):
            html_out.append(f"<h1>{re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line[2:].strip())}</h1>")
            continue

        if line.strip() in ["---", "***", "___"]:
            html_out.append("<hr />"); continue

        if line.startswith("> "):
            html_out.append(f"<blockquote><p>{re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line[2:].strip())}</p></blockquote>")
            continue

        if line.strip():
            p_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line.strip())
            p_text = re.sub(r'`(.*?)`', r'<code>\1</code>', p_text)
            p_text = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2" target="_blank" rel="noopener">\1</a>', p_text)
            html_out.append(f"<p>{p_text}</p>")

    if in_list: html_out.append("</ul>")
    return "\n".join(html_out)

lesson_data = {
    "order_index": 31,
    "slug": "website-launch-digital-marketing-step-by-step-roadmap",
    "title": "웹사이트 제작 후 디지털 마케팅을 위해 진행해야 할 7단계 마스터 로드맵",
    "seo_title": "웹사이트 제작 후 마케팅 진행 순서 7단계 로드맵 | DAVHAVE 마케팅",
    "excerpt": "웹사이트 론칭 직후 무작정 광고를 돌리기 전에 반드시 집행해야 하는 기술적 인프라 구축, SEO, 검색엔진 등록, 콘텐츠 마케팅, 리타게팅 광고 및 전환율 최적화(CRO) 7단계 실전 로드맵 가이드입니다.",
    "content_md": """## 웹사이트 론칭 직후 마케팅 성공을 결정짓는 7단계 순서

멋진 웹사이트를 제작했다고 해서 자동으로 유저들이 찾아오거나 매출이 발생하지 않습니다. 웹사이트 론칭 직후 유료 광고를 무작정집행하면 밑 빠진 독에 물 붓기처럼 마케팅 예산만 허비하게 됩니다.

성공적인 웹사이트 론칭 마케팅을 위해서는 **데이터 수집 기반 마련 ➔ 검색엔진 최적화 ➔ 색인 제출 ➔ 콘텐츠 클러스터 ➔ 소셜 리퍼럴 ➔ 유료 퍼포먼스 광고 ➔ 전환율 최적화(CRO)**로 이어지는 체계적인 7단계 순서가 필수적입니다.

---

## Step 1. 기술적 마케팅 기반 구축 (Tracking & Analytics Infrastructure)

웹사이트 마케팅의 첫걸음은 방문자의 유입 경로와 행동 데이터를 정밀하게 기록하는 추적 장치를 설치하는 것입니다.

- **Google Tag Manager (GTM) 설치**: 모든 마케팅 태그(GA4, Meta Pixel, Naver Premium Log 등)를 코드 직접 수정 없이 중앙에서 관리합니다.
- **Google Analytics 4 (GA4) 연동**: 단순 방문자 수(PV)를 넘어 전자상거래 이벤트(Purchase), 문의하기(Lead), 스크롤 깊이(Scroll Depth) 등의 세부 이벤트를 정의합니다.
- **주요 픽셀(Pixel) 배치**: Meta Pixel, Kakao Pixel, Naver 프리미엄 로그분석 스크립트를 주입하여 향후 리타게팅 광고 모수를 확보합니다.

---

## Step 2. 검색엔진 최적화 (On-Page & Technical SEO)

검색엔진 크롤러가 사이트의 목적을 명확히 이해하고 검색 결과 상단에 노출시킬 수 있도록 웹사이트 내부를 정돈합니다.

- **Title Tag & Meta Description 정밀 설계**: 각 페이지마다 중복되지 않는 고유한 타깃 키워드가 포함된 제목과 설명을 명시합니다.
- **HTML5 시맨틱 구조화**: 단일 페이지 내 하나의 `<h1>` 헤딩 태그를 유지하고 `<h2>`, `<h3>` 옥타브 계층 구조를 준수합니다.
- **Schema.org 구조화 데이터(JSON-LD)**: `Organization`, `WebSite`, `Article`, `Product` 타입의 JSON-LD 태그를 삽입하여 구글 서치 리치 결과(Rich Snippet) 노출을 확보합니다.
- **코어 웹 바이탈 (Core Web Vitals) 최적화**: LCP(로딩 속도), INP(상호작용성), CLS(시각적 안정성) 지표를 최적화합니다.

---

## Step 3. 검색엔진 소유권 검증 및 사이트맵 제출 (Off-Page SEO & Indexing)

웹사이트가 완성되었음을 구글과 네이버, 빙(Bing)의 크롤러 로봇에게 공식 알리고 수집을 요청합니다.

- **Google Search Console (구글 서치콘솔)**: 사이트 소유권을 검증하고 `sitemap.xml` 및 `robots.txt`를 공식 제출합니다.
- **네이버 서치어드바이저 (Naver Search Advisor)**: 네이버 웹마스터 도구에 소유권 확인 태그를 주입하고 사이트맵과 RSS를 등록합니다.
- **Microsoft Bing Webmaster Tools**: Bing 웹마스터 도구 연동을 통해 MS Copilot 및 Bing 검색 노출 노출을 확보합니다.
- **네이버 네이버지도 / 구글 마이 비즈니스(GMB) 등록**: 오프라인 위치 기반 비즈니스의 경우 위치 등록을 함께 진행합니다.

---

## Step 4. 키워드 클러스터링 & 콘텐츠 마케팅 연재 (Content Marketing)

자사의 제품이나 서비스와 연관된 고의도 검색 키워드를 발굴하고 잠재 고객이 검색할 가치 있는 문서를 연재합니다.

- **시드 키워드 & 롱테일 키워드 추출**: Google Keyword Planner, Ahrefs, 블랙키위 등을 활용해 고객이 실제로 검색하는 문제 해결형 키워드를 추출합니다.
- **필라 페이지(Pillar Page)와 클러스터 콘텐츠(Cluster Content)**: 핵심 주제를 다루는 거대한 총론 문서(Pillar)를 구축하고, 하위 세부 문서(Cluster)들을 정밀 하이퍼링크로 연결하는 Topic Cluster 구조를 완성합니다.
- **정기적 블로그/교육 리소스 발행**: 주 1~2회 이상의 고품질 지식 콘텐츠를 꾸준히 발행하여 검색엔진에 사이트의 신뢰도(Domain Authority)를 각인시킵니다.

---

## Step 5. 소셜 미디어 연동 및 리퍼럴 바이럴 구축 (Social Media & Referral)

콘텐츠가 자리를 잡으면 다양한 외부 플랫폼을 통해 사이트로 고객을 유인하는 소셜 바이럴망을 구축합니다.

- **공식 SNS 채널 개설**: X(Twitter), LinkedIn, Threads, Instagram, YouTube 등 타깃 고객이 모여있는 플랫폼 공식 계정을 개설합니다.
- **Open Graph (OG) & Twitter Card 최적화**: SNS 카카오톡, X, 페이스북 공유 시 매력적인 썸네일 이미지와 타이틀이 뜨도록 메타 태그를 적용합니다.
- **커뮤니티 및 오픈소스 홍보**: 론칭 소식을 기클리글, 디스콰이엇(Disquiet), 릴렛, Reddit, Hacker News 등에 제품 스토리를 공유합니다.

---

## Step 6. 유료 퍼포먼스 광고 및 리타게팅 집행 (Paid Media & Retargeting)

기초 유입 데이터와 SEO 체계가 갖춰진 후 유료 광고를 집행하여 즉각적인 고의도 유저 유입과 매출 전환을 부스트합니다.

- **구글 검색 광고 (Google Search Ads)**: 자사 브랜드 키워드 및 구매 의도가 극도로 높은 검색어에 광고를 노출시킵니다.
- **네이버 검색광고 (Naver Powerlink)**: 국내 키워드 탐색 유저를 대상으로 네이버 파워링크 및 브랜드 검색광고를 세팅합니다.
- **Meta (Instagram / Facebook) 디스플레이 광고**: 매력적인 카피와 숏폼 동영상/이미지 소재로 관심 고객 획득 타게팅을 진행합니다.
- **리타게팅 광고 (Retargeting Ads)**: 사이트를 방문했지만 아직 전환하지 않은 유저를 대상으로 맞춤 소재 광고를 재노출합니다.

---

## Step 7. 전환율 최적화 (CRO) & 데이터 기반 A/B 테스트 (CRO & Retention)

유입된 유저가 이탈하지 않고 실제 구매/문의 고객으로 전환되도록 데이터를 분석하고 개선합니다.

- **이탈 구간 분석 (Drop-off Analysis)**: GA4 퍼널 보고서 및 Clarity/Hotjar 뷰어를 통해 유저들이 주로 이탈하는 페이지 요소를 파악합니다.
- **A/B 테스트 집행**: 랜딩페이지의 메인 헤드라인, CTA 버튼 색상, 문의 폼 단순화 등을 A/B 테스트하여 최고 전환율 조합을 도출합니다.
- **이메일 마케팅 & 리텐션(CRM)**: Stibee, Mailchimp 등을 연동하여 신규 가입자 웰컴 이메일 및 뉴스레터 자동 배치 파이프라인을 가동합니다.

---

## 💡 핵심 마케팅 용어 사전 (Glossary)

- **GTM (Google Tag Manager)**: 마케팅 추적 태그와 픽셀을 코드 수정 없이 웹사이트에 주입하고 관리하는 구글 태그 관리 도구.
- **SEO (Search Engine Optimization)**: 검색엔진 검색 결과 상단에 웹사이트를 자연 노출(Organic Search)시키는 기술적·콘텐츠적 최적화 작업.
- **Topic Cluster (토픽 클러스터)**: 하나의 대주제(Pillar Page)를 중심으로 세부 연관 하위 글들을 내부 링크로 묶어 검색엔진 신뢰도를 최대로 높이는 SEO 방법론.
- **CRO (Conversion Rate Optimization)**: 웹사이트 방문자가 회원가입, 문의, 결제 등 목표 행동을 수행하는 비율(전환율)을 높이는 최적화 과정.

---

## 론칭 마케팅 7단계 실행 체크리스트 (Launch Checklist)

- [ ] GTM 및 GA4 추적 태그와 주요 전환 이벤트를 설치했는가?
- [ ] 구글 서치콘솔 및 네이버 서치어드바이저에 사이트 소유권 확인과 `sitemap.xml` 제출을 마쳤는가?
- [ ] 각 페이지별 Title Tag, Meta Description, JSON-LD 구조화 데이터가 적용되어 있는가?
- [ ] SNS 공유 시 매력적인 썸네일과 문구가 뜨도록 Open Graph(OG) 태그가 최적화되었는가?
- [ ] 자사 타깃 키워드 기반의 블로그/교육 리소스가 론칭과 함께 연재되고 있는가?
- [ ] 리타게팅 픽셀(Meta, Kakao)이 탑재되어 유료 퍼포먼스 광고 집행 준비가 되었는가?
"""
}

# Write SQL file
sql_file = os.path.join(os.path.dirname(__file__), "insert_site_launch_marketing.sql")
with open(sql_file, "w", encoding="utf-8") as f:
    title = lesson_data["title"].replace("'", "''")
    seo_title = lesson_data["seo_title"].replace("'", "''")
    excerpt = lesson_data["excerpt"].replace("'", "''")
    content_md = lesson_data["content_md"].replace("'", "''")
    content_html = md_to_html(lesson_data["content_md"]).replace("'", "''")
    slug = lesson_data["slug"]
    order_index = lesson_data["order_index"]

    sql = f"""
DELETE FROM posts WHERE slug = '{slug}';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '{title}',
  '{slug}',
  'marketing',
  'published',
  {order_index},
  '{excerpt}',
  '{content_md}',
  '{content_html}',
  '{seo_title}',
  '{excerpt}',
  DATETIME('now'),
  DATETIME('now')
);
"""
    f.write(sql)

print(f"Generated SQL file at {sql_file}")

# Execute SQL via wrangler d1
cmd = f"npx wrangler d1 execute davhave-content --remote --file={sql_file}"
print(f"Executing: {cmd}")
res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
print("STDOUT:", res.stdout)
print("STDERR:", res.stderr)
