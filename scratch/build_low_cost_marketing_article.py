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
    "order_index": 32,
    "slug": "zero-budget-low-cost-digital-marketing-growth-hacks",
    "title": "최소 비용으로 최대 효과를 내는 8가지 제로 예산 마케팅 전략과 기법",
    "seo_title": "최소 비용 제로 예산 마케팅 기법 8가지 총정리 | DAVHAVE 마케팅",
    "excerpt": "광고비 예산이 전혀 없거나 최소한의 비용으로 유저 유입과 매출 성장을 만들어내는 오가닉 SEO, 빌딩인파블릭, OSMU, 바이럴 루프, 커뮤니티 시딩 등 8가지 핵심 성장 기법 가이드입니다.",
    "content_md": """## 마케팅 예산이 부족할 때 선택해야 할 고효율 성장 전략

초기 스타트업, 개인 개발자, 소상공인에게 가장 큰 장벽은 '비싼 광고비'입니다. 구글이나 네이버 파워링크, 키워드 광고에 매달 수백만 원을 쏟아붓지 않고도 **무료 또는 최소한의 비용(Zero-Budget)**으로 강력한 팬덤을 형성하고 고객을 끌어모으는 검증된 마케팅 기법들이 존재합니다.

돈을 쓰는 광고(Paid Media) 대신 **시간과 지식, 커뮤니티, 자사 미디어(Owned Media)**를 활용하여 극강의 ROI를 뽑아내는 8가지 최소 비용 마케팅 기법을 정밀 정리합니다.

---

## 1. 오가닉 SEO (자연 검색 최적화) & 롱테일 키워드 점령

광고비를 1원도 쓰지 않고 지속적인 유저 유입을 만드는 가장 강력한 무기는 검색엔진 최적화(SEO)입니다.

- **롱테일 키워드(Long-Tail Keyword) 공략**: "앱 개발" 같은 경쟁이 심하고 클릭당 비용이 비싼 대형 키워드 대신 "Flutter 모바일 앱 개발 외주 비용 절감 팁"처럼 검색량은 적지만 구매 의도가 100% 명확한 롱테일 키워드를 타깃팅합니다.
- **Q&A 형태의 지식 콘텐츠 발행**: "어떻게 ~하나요?", "~하는 방법" 형태의 사용자가 자주 묻는 질문(FAQ)을 블로그 아티클로 수록하여 구글 및 네이버 검색 상단을 점령합니다.
- **영구적인 자산화**: 유료 광고는 돈을 끄면 유입이 즉시 멈추지만, 작성된 SEO 아티클은 24시간 365일 무료로 고객을 끌어오는 영구 자산이 됩니다.

---

## 2. 빌딩 인 파블릭 (Building in Public) — 과정을 솔직히 공개하기

개발 제품이나 서비스를 완성한 후 홍보하는 것이 아니라, **제작하는 과정과 시행착오, 성과 숫자를 SNS에 솔직하게 공유**하여 제품 출시 전에 열렬한 팬덤을 형성하는 기법입니다.

- **공유할 콘텐츠 요소**: 제품 기획 배경, 주차별 개발 진행 상황, 실패한 에피소드, 매출/유저 수 지표 변화 등.
- **핵심 채널**: X(Twitter), LinkedIn, Threads, 벨로그, 디스콰이엇(Disquiet).
- **효과**: 소비자는 '단순한 홍보 문구'에는 반감을 느끼지만, '한 창업자의 진솔한 여정과 성장 서사'에는 깊이 공감하고 제품이 나오자마자 초기 구매자가 되어줍니다.

---

## 3. 원소스 멀티유즈 (OSMU) & 콘텐츠 재가공 파이프라인

콘텐츠 제작에 들어가는 시간과 인건비 비용을 최소화하기 위해 **잘 만든 1개의 긴 아티클(Long-form)을 10개의 미니 소셜 콘텐츠(Short-form)로 쪼개어 배포**합니다.

```
[ 1개의 메인 블로그 글 / 유튜브 영상 ]
         │
         ├─► X(Twitter) 스레드 글 5개로 쪼개어 발행
         ├─► LinkedIn 아티클 및 인사이트 포스팅으로 재가공
         ├─► 인스타그램 카드뉴스 10장으로 요약 디자인
         └─► 자사 이메일 뉴스레터 아티클로 구독자 발송
```

---

## 4. 커뮤니티 시딩 (Community Seeding) & 제품 론칭 플랫폼 활용

목표 고객들이 이미 빽빽하게 모여있는 기존 타깃 커뮤니티에 진정성 있는 해결책으로 제품을 소개합니다.

- **국내외 무료 론칭 플랫폼**:
  - **국내**: 디스콰이엇(Disquiet), 릴렛(Relet), 클리앙, 보배드림, 지디넷 커뮤니티, 카카오톡 오픈채팅방.
  - **해외**: Product Hunt, Reddit (관련 서브레딧), Hacker News, Indie Hackers.
- **핵심 수칙**: 대놓고 광고 글을 쓰면 즉시 강퇴당합니다. "저희가 이런 불편함을 겪어 이를 해결해 줄 무료 도구를 만들어 보았습니다. 의견을 부탁드립니다" 형태로 접근하세요.

---

## 5. 바이럴 루프 및 추천인 프로그램 (Referral & Viral Loop)

기존 유저가 주변 지인에게 스스로 서비스를 추천하도록 보상 장치나 공유 장치를 디자인하여 **유저 획득 비용(CAC)을 0원에 가깝게 낮추는 기법**입니다.

- **초대 보상 (Referral Incentive)**: "친구를 초대하면 두 사람 모두에게 1개월 무료 사용권 / 5,000 포인트 지급" (드롭박스, 토스, 우버 방식).
- **자연스러운 워터마크/워딩 유도**: 서비스 결과물 하단에 "Powered by [브랜드명]" 문구를 포함하거나 SNS 공유 버튼을 유저가 자랑하고 싶은 위치에 배치합니다.

---

## 6. 게스트 포스팅 & 크로스 프로모션 (Guest Blogging & Cross-Promotion)

비슷한 타깃 고객층을 가진 다른 유관 브랜드나 인플루언서와 **돈을 주지 않고 상호 이익(Win-Win) 관계**로 협력하는 기법입니다.

- **게스트 아티클 기고**: 관련 업계 유명 블로그나 매체에 전문가 칼럼을 무료로 기고하고, 하단 프로필에 자사 웹사이트 링크(백링크)를 삽입합니다.
- **교차 뉴스레터 홍보**: 구독자 수가 비슷한 타사 뉴스레터와 서로의 프로덕트를 한 단락씩 무료 소개(Cross-Mention)해 줍니다.

---

## 7. 이메일 뉴스레터 CRM & 자사 미디어 드라이브 (Owned Media)

비싼 수수료나 플랫폼 알고리즘 변덕(알고리즘 저해)에 좌우되지 않는 **100% 도달률의 자사 미디어(Owned Media)**를 구축합니다.

- **무료 이메일 툴 활용**: Stibee(스티비), Mailchimp 등의 무료 플랜을 활용해 유용한 지식 정보 뉴스레터를 정기 발송합니다.
- **리드 획득 팝업 (Lead Magnet)**: "무료 PDF 가이드북 다운로드" 또는 "무료 템플릿 받기"의 대가로 방문자의 이메일 주소를 확보합니다.

---

## 8. AI 프롬프트 자동화를 활용한 생산 비용 90% 절감

ChatGPT, Claude, Gemini 등의 AI 툴을 활용하여 마케팅 문구 작성, 이미지 제작, 소셜 포스팅 규격 변환을 자동화합니다.

- **마케팅 소재 자동화**: 1개의 제품 특징을 바탕으로 헤드라인 카피 20개, 페이스북 광고 문구 10개, SEO 메타 태그를 3초 만에 생성합니다.
- **비용 절감 효과**: 외주 카피라이터나 디자이너 비용 없이 혼자서 10인분 이상의 마케팅 콘텐츠 생산을 유지할 수 있습니다.

---

## 💡 핵심 마케팅 용어 사전 (Glossary)

- **Building in Public**: 제품 개발 과정과 성공/실패 지표를 소셜 미디어에 투명하게 공개하며 출시 전 팬덤을 모으는 마케팅 기법.
- **OSMU (One Source Multi Use)**: 하나의 원본 콘텐츠를 카드뉴스, 소셜 스레드, 뉴스레터 등 다양한 포맷으로 재가공하여 유통하는 방식.
- **Referral Loop (추천 바이럴 루프)**: 기존 유저가 혜택을 얻기 위해 새 유저를 계속 초청하도록 설계된 선순환 구조.
- **Lead Magnet (리드 매그닛)**: 잠재 고객의 이메일이나 연락처를 얻기 위해 무료로 제공하는 고품질 PDF 가이드, 템플릿 등의 혜택.

---

## 제로 예산 마케팅 실행 체크리스트 (Low-Cost Checklist)

- [ ] 타깃 유저가 검색할 롱테일 키워드 기반 아티클이 작성되었는가?
- [ ] X, LinkedIn, 디스콰이엇 등에 제품 제작 과정(Building in Public)이 공유되고 있는가?
- [ ] 메인 아티클 1개가 소셜 스레드, 뉴스레터로 재가공되어 다채널 배포되는가?
- [ ] Product Hunt나 타깃 커뮤니티에 진정성 있는 해결책으로 제품을 소개했는가?
- [ ] 유저가 지인에게 공유할 수 있는 바이럴/추천 요소가 제품 내 포함되어 있는가?
- [ ] 무료 이메일 뉴스레터를 통해 고객 이메일을 수집하고 소통하고 있는가?
"""
}

# Write SQL file
sql_file = os.path.join(os.path.dirname(__file__), "insert_low_cost_marketing.sql")
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
