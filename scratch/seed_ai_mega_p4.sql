-- Mega Enhanced AI Lessons Part 4

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch13-pdf-document-qa-rag',
  'PDF 문서를 읽고 답하는 RAG 문서 질의응답 시스템',
  '사내 PDF 문서나 긴 연구 보고서를 읽고 내용에 기반하여 환각 없이 정확히 답변하는 PDF 전용 RAG 질의응답 서비스를 구축합니다.',
  '수백 페이지에 달하는 **PDF 문서, 규정집, 매뉴얼**을 읽고 사용자의 질문에 해당 문서 구절을 출처로 인용하여 정확히 답변하는 **PDF RAG 시스템**을 제작합니다.

---

## 1. PDF RAG 전문 용어 사전 (Glossary)

- **PyPDF / pdfplumber**: PDF 파일 내부의 텍스트 레이아웃, 이미지, 표 데이터를 문자열로 파싱하는 파이썬 라이브러리입니다.
- **RecursiveCharacterTextSplitter**: 줄바꿈(`

`), 마침표(`.`), 띄어쓰기를 순차적으로 파악하여 의미 단락이 끊기지 않게 분할하는 청킹 도구입니다.
- **Overlap Size**: 분할된 청크 간에 일정한 문장(예: 100자)을 겹쳐 배치하여 청크 경계에서 문맥 손실이 발생하는 것을 방지하는 기술입니다.

---

## 2. PDF 파싱 및 RAG 질의응답 시스템 파이썬 구현

```python
from pypdf import PdfReader
from openai import OpenAI

client = OpenAI()

def process_pdf_and_ask(pdf_filepath, user_question):
    # 1. PDF 파일 텍스트 전체 추출
    reader = PdfReader(pdf_filepath)
    raw_text = ""
    for idx, page in enumerate(reader.pages):
        raw_text += f"
--- [Page {idx+1}] ---
" + page.extract_text()

    # 2. 프롬프트 컨텍스트에 PDF 문맥 주입
    prompt = f"""
너는 제공된 PDF 문서의 내용을 기반으로 질문에 사실만을 답변하는 문서 분석관이야.
문서에 존재하지 않는 정보라면 절대로 거짓으로 답변하지 말고 "제공된 PDF 문서에 해당 내용이 존재하지 않습니다"라고 답변해 줘.

[PDF 문서 컨텍스트]
{raw_text[:4000]} # 토큰 초과 방지 슬라이싱

[사용자 질문]
{user_question}
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.0
    )
    return response.choices[0].message.content

# 실행 예제
print(process_pdf_and_ask("company_rules.pdf", "연차 사용 시 며칠 전에 신청해야 하나요?"))
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. PDF 내 표(Table)나 그래프 데이터도 RAG가 잘 읽나요?**
A. 단순 텍스트 추출기를 쓰면 표의 행과 열이 뭉개져 엉뚱한 수치를 읽을 수 있습니다. 표가 많은 문서의 경우 `pdfplumber`로 표 구조를 마크다운 테이블 형태(`|---|---|`)로 파싱하거나 멀티모달 LLM 비전 모델로 이미지 그대로 전달하는 방식을 써야 합니다.
',
  '<p>수백 페이지에 달하는 <strong>PDF 문서, 규정집, 매뉴얼</strong>을 읽고 사용자의 질문에 해당 문서 구절을 출처로 인용하여 정확히 답변하는 <strong>PDF RAG 시스템</strong>을 제작합니다.</p>
<hr>
<h2>1. PDF RAG 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>PyPDF / pdfplumber</strong>: PDF 파일 내부의 텍스트 레이아웃, 이미지, 표 데이터를 문자열로 파싱하는 파이썬 라이브러리입니다.</li>
<li><strong>RecursiveCharacterTextSplitter</strong>: 줄바꿈(`</li>
</ul>
<p><code>), 마침표(</code>.`), 띄어쓰기를 순차적으로 파악하여 의미 단락이 끊기지 않게 분할하는 청킹 도구입니다.</p>
<ul>
<li><strong>Overlap Size</strong>: 분할된 청크 간에 일정한 문장(예: 100자)을 겹쳐 배치하여 청크 경계에서 문맥 손실이 발생하는 것을 방지하는 기술입니다.</li>
</ul>
<hr>
<h2>2. PDF 파싱 및 RAG 질의응답 시스템 파이썬 구현</h2>
<pre><code class="language-python">from pypdf import PdfReader
from openai import OpenAI

client = OpenAI()

def process_pdf_and_ask(pdf_filepath, user_question):
    # 1. PDF 파일 텍스트 전체 추출
    reader = PdfReader(pdf_filepath)
    raw_text = &quot;&quot;
    for idx, page in enumerate(reader.pages):
        raw_text += f&quot;
--- [Page {idx+1}] ---
&quot; + page.extract_text()

    # 2. 프롬프트 컨텍스트에 PDF 문맥 주입
    prompt = f&quot;&quot;&quot;
너는 제공된 PDF 문서의 내용을 기반으로 질문에 사실만을 답변하는 문서 분석관이야.
문서에 존재하지 않는 정보라면 절대로 거짓으로 답변하지 말고 &quot;제공된 PDF 문서에 해당 내용이 존재하지 않습니다&quot;라고 답변해 줘.

[PDF 문서 컨텍스트]
{raw_text[:4000]} # 토큰 초과 방지 슬라이싱

[사용자 질문]
{user_question}
&quot;&quot;&quot;

    response = client.chat.completions.create(
        model=&quot;gpt-4o-mini&quot;,
        messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: prompt}],
        temperature=0.0
    )
    return response.choices[0].message.content

# 실행 예제
print(process_pdf_and_ask(&quot;company_rules.pdf&quot;, &quot;연차 사용 시 며칠 전에 신청해야 하나요?&quot;))
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. PDF 내 표(Table)나 그래프 데이터도 RAG가 잘 읽나요?</strong>
A. 단순 텍스트 추출기를 쓰면 표의 행과 열이 뭉개져 엉뚱한 수치를 읽을 수 있습니다. 표가 많은 문서의 경우 <code>pdfplumber</code>로 표 구조를 마크다운 테이블 형태(<code>|---|---|</code>)로 파싱하거나 멀티모달 LLM 비전 모델로 이미지 그대로 전달하는 방식을 써야 합니다.</p>
',
  'published',
  'PDF RAG 서비스 개발 - PyPDF 텍스트 추출, LangChain & Vector DB 질의응답',
  '수백 페이지의 PDF 문서 및 업무 매뉴얼을 파싱하고, 의미 단위 청킹(Chunking) 및 Vector DB 저장을 거쳐 답변하는 PDF RAG 서비스를 구현합니다.',
  13,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch014-auto-summary-report-generator',
  '대화 및 문서를 자동 요약하여 레포트로 생성하는 AI 서비스',
  '수많은 회의록이나 대화 기록을 파싱하여 핵심 요점, 결정 사항, 담당자별 Action Item으로 자동 정리해 주는 AI 레포트 생성 서비스를 만듭니다.',
  '긴 대화 녹취록이나 업무 회의록을 입력받아 핵심 요약, 주요 결정 사항, 담당자별 **Action Item**으로 정돈하고 깔끔한 레포트 문서로 생성하는 시스템을 구현합니다.

---

## 1. 레포트 생성 전문 용어 사전 (Glossary)

- **Abstractive Summarization (생성 요약)**: 문장을 그대로 복사하는 대신 의미를 완벽히 이해하고 새로운 문체와 요점 위주로 재구성하는 고도화된 LLM 요약 기법입니다.
- **Action Item (실행 과제)**: 회의 결과로 도출되어 특정 담당자가 지정된 기한까지 완료해야 하는 명확한 과제 항목입니다.
- **Markdown-to-PDF**: AI가 생성한 마크다운 텍스트를 인쇄 가능한 PDF 보고서 문서 파일로 변환하는 기술 파이프라인입니다.

---

## 2. AI 회의록 자동 요약 및 레포트 생성기 파이썬 코드

```python
def generate_business_report(meeting_transcript):
    system_prompt = """
너는 전문 경영 컨설팅 회의 서기야.
제공된 대화 기록을 분석하여 다음 Markdown 보고서 양식에 맞추어 작성해 줘.

# 📑 업무 회의 종합 보고서
## 1. 회의 핵심 요약 (3줄 요약)
## 2. 주요 결정 사항 (Decision Points)
## 3. 담당자별 Action Items (표 형태: 담당자 | 수행 할 일 | 기한)
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": meeting_transcript}
        ],
        temperature=0.2
    )
    return response.choices[0].message.content

# 대화록 샘플
transcript_sample = """
김팀장: 3분기 마케팅 예산안 승인이 필요합니다. 총 5천만 원 선입니다.
이과장: 제가 예산 세부 내역서를 금요일까지 작성해서 전결 올리겠습니다.
박대리: 소셜미디어 광고 카피 시안은 목요일까지 3개 정리해 오겠습니다.
"""

print(generate_business_report(transcript_sample))
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 요약 결과물에 환각이나 왜곡이 발생하지 않도록 하려면?**
A. Temperature를 0.0~0.1로 낮추고, 프롬프트에 "원문에 언급되지 않은 내용은 절대로 추측하여 작성하지 말 것"이라는 명시적 제약 조건을 부여해야 합니다.
',
  '<p>긴 대화 녹취록이나 업무 회의록을 입력받아 핵심 요약, 주요 결정 사항, 담당자별 <strong>Action Item</strong>으로 정돈하고 깔끔한 레포트 문서로 생성하는 시스템을 구현합니다.</p>
<hr>
<h2>1. 레포트 생성 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Abstractive Summarization (생성 요약)</strong>: 문장을 그대로 복사하는 대신 의미를 완벽히 이해하고 새로운 문체와 요점 위주로 재구성하는 고도화된 LLM 요약 기법입니다.</li>
<li><strong>Action Item (실행 과제)</strong>: 회의 결과로 도출되어 특정 담당자가 지정된 기한까지 완료해야 하는 명확한 과제 항목입니다.</li>
<li><strong>Markdown-to-PDF</strong>: AI가 생성한 마크다운 텍스트를 인쇄 가능한 PDF 보고서 문서 파일로 변환하는 기술 파이프라인입니다.</li>
</ul>
<hr>
<h2>2. AI 회의록 자동 요약 및 레포트 생성기 파이썬 코드</h2>
<pre><code class="language-python">def generate_business_report(meeting_transcript):
    system_prompt = &quot;&quot;&quot;
너는 전문 경영 컨설팅 회의 서기야.
제공된 대화 기록을 분석하여 다음 Markdown 보고서 양식에 맞추어 작성해 줘.

# 📑 업무 회의 종합 보고서
## 1. 회의 핵심 요약 (3줄 요약)
## 2. 주요 결정 사항 (Decision Points)
## 3. 담당자별 Action Items (표 형태: 담당자 | 수행 할 일 | 기한)
&quot;&quot;&quot;

    response = client.chat.completions.create(
        model=&quot;gpt-4o-mini&quot;,
        messages=[
            {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: system_prompt},
            {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: meeting_transcript}
        ],
        temperature=0.2
    )
    return response.choices[0].message.content

# 대화록 샘플
transcript_sample = &quot;&quot;&quot;
김팀장: 3분기 마케팅 예산안 승인이 필요합니다. 총 5천만 원 선입니다.
이과장: 제가 예산 세부 내역서를 금요일까지 작성해서 전결 올리겠습니다.
박대리: 소셜미디어 광고 카피 시안은 목요일까지 3개 정리해 오겠습니다.
&quot;&quot;&quot;

print(generate_business_report(transcript_sample))
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 요약 결과물에 환각이나 왜곡이 발생하지 않도록 하려면?</strong>
A. Temperature를 0.0~0.1로 낮추고, 프롬프트에 &quot;원문에 언급되지 않은 내용은 절대로 추측하여 작성하지 말 것&quot;이라는 명시적 제약 조건을 부여해야 합니다.</p>
',
  'published',
  'AI 문서 요약 및 레포트 생성기 - 회의록 요약, Action Item 및 PDF 문서 전환',
  '긴 대화록이나 업무 회의 녹취록을 핵심 요약, 주요 결정 사항, 담당자별 Action Item으로 자동 정리하여 마크다운 및 PDF 레포트로 생성하는 시스템을 만듭니다.',
  14,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch15-web-browsing-search-agent',
  '실시간 웹 서핑 및 자료 탐색 AI 에이전트 구축',
  'LLM의 최신 정보 부재 한계를 극복하기 위해 인터넷을 실시간 탐색 및 스크래핑하여 최신 정보와 출처를 함께 제공하는 웹 서핑 AI 에이전트를 구축합니다.',
  'LLM 모델의 데이터 학습 시점 한계(**Knowledge Cutoff**)를 극복하기 위해, **직접 실시간 인터넷 서핑을 수행하여 최신 뉴스와 데이터를 탐색하고 출처를 명시하여 답하는 AI 에이전트**를 제작합니다.

---

## 1. 웹 서핑 에이전트 전문 용어 사전 (Glossary)

- **Search API (Tavily / SerpAPI)**: AI 에이전트 전용으로 광고와 불필요한 태그를 제거하고 본문 핵심 텍스트만 깨끗하게 반환해 주는 전용 검색 API입니다.
- **Web Scraping (웹 스크래핑)**: 수집된 웹페이지 URL에 접속하여 HTML 구조를 분석하고 본문 텍스트를 정제해내는 기술입니다.
- **Knowledge Cutoff**: 특정 LLM 모델의 사전 학습 데이터가 차단된 최신 날짜 시점을 뜻합니다.

---

## 2. Tavily API 연동 웹 탐색 AI 에이전트 파이썬 코드

```python
import requests
from openai import OpenAI

client = OpenAI()

def search_web_tavily(query, tavily_api_key):
    """Tavily API로 웹 실시간 정보 탐색"""
    url = "https://api.tavily.com/search"
    payload = {
        "api_key": tavily_api_key,
        "query": query,
        "search_depth": "basic",
        "max_results": 3
    }
    response = requests.post(url, json=payload).json()
    
    context = ""
    for item in response.get("results", []):
        context += f"
[출처: {item[''url'']}]
제목: {item[''title'']}
내용: {item[''content'']}
"
    return context

def web_agent(user_query, tavily_key):
    # 1. 실시간 웹 서핑 수행
    search_results = search_web_tavily(user_query, tavily_key)
    
    # 2. 웹 서핑 결과를 컨텍스트로 결합하여 LLM 답변 요청
    prompt = f"""
다음 실시간 웹 서핑 검색 결과를 바탕으로 사용자 질문에 답변해 줘. 반드시 출처 URL을 명시해 줘.

[실시간 웹 서핑 데이터]
{search_results}

[질문]
{user_query}
"""
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return res.choices[0].message.content
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 일반 웹 크롤링(BeautifulSoup) 대신 Tavily나 SerpAPI를 쓰는 이유는?**
A. 일반 웹사이트는 보안 차단(CAPTCHA, Cloudflare)이 자주 걸리고 헤더/푸터 광고 태그가 섞여 있어 토큰이 낭비됩니다. 반면 Tavily는 AI 연동 전용으로 본문 텍스트만 정제하여 전달하므로 토큰을 80% 이상 절약합니다.
',
  '<p>LLM 모델의 데이터 학습 시점 한계(<strong>Knowledge Cutoff</strong>)를 극복하기 위해, <strong>직접 실시간 인터넷 서핑을 수행하여 최신 뉴스와 데이터를 탐색하고 출처를 명시하여 답하는 AI 에이전트</strong>를 제작합니다.</p>
<hr>
<h2>1. 웹 서핑 에이전트 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Search API (Tavily / SerpAPI)</strong>: AI 에이전트 전용으로 광고와 불필요한 태그를 제거하고 본문 핵심 텍스트만 깨끗하게 반환해 주는 전용 검색 API입니다.</li>
<li><strong>Web Scraping (웹 스크래핑)</strong>: 수집된 웹페이지 URL에 접속하여 HTML 구조를 분석하고 본문 텍스트를 정제해내는 기술입니다.</li>
<li><strong>Knowledge Cutoff</strong>: 특정 LLM 모델의 사전 학습 데이터가 차단된 최신 날짜 시점을 뜻합니다.</li>
</ul>
<hr>
<h2>2. Tavily API 연동 웹 탐색 AI 에이전트 파이썬 코드</h2>
<pre><code class="language-python">import requests
from openai import OpenAI

client = OpenAI()

def search_web_tavily(query, tavily_api_key):
    &quot;&quot;&quot;Tavily API로 웹 실시간 정보 탐색&quot;&quot;&quot;
    url = &quot;https://api.tavily.com/search&quot;
    payload = {
        &quot;api_key&quot;: tavily_api_key,
        &quot;query&quot;: query,
        &quot;search_depth&quot;: &quot;basic&quot;,
        &quot;max_results&quot;: 3
    }
    response = requests.post(url, json=payload).json()
    
    context = &quot;&quot;
    for item in response.get(&quot;results&quot;, []):
        context += f&quot;
[출처: {item[&#39;url&#39;]}]
제목: {item[&#39;title&#39;]}
내용: {item[&#39;content&#39;]}
&quot;
    return context

def web_agent(user_query, tavily_key):
    # 1. 실시간 웹 서핑 수행
    search_results = search_web_tavily(user_query, tavily_key)
    
    # 2. 웹 서핑 결과를 컨텍스트로 결합하여 LLM 답변 요청
    prompt = f&quot;&quot;&quot;
다음 실시간 웹 서핑 검색 결과를 바탕으로 사용자 질문에 답변해 줘. 반드시 출처 URL을 명시해 줘.

[실시간 웹 서핑 데이터]
{search_results}

[질문]
{user_query}
&quot;&quot;&quot;
    res = client.chat.completions.create(
        model=&quot;gpt-4o-mini&quot;,
        messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: prompt}]
    )
    return res.choices[0].message.content
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 일반 웹 크롤링(BeautifulSoup) 대신 Tavily나 SerpAPI를 쓰는 이유는?</strong>
A. 일반 웹사이트는 보안 차단(CAPTCHA, Cloudflare)이 자주 걸리고 헤더/푸터 광고 태그가 섞여 있어 토큰이 낭비됩니다. 반면 Tavily는 AI 연동 전용으로 본문 텍스트만 정제하여 전달하므로 토큰을 80% 이상 절약합니다.</p>
',
  'published',
  '웹 서핑 AI 에이전트 구축 - Tavily API, 웹 스크래핑 및 실시간 정보 검색',
  '학습 데이터 최신성 한계(Knowledge Cutoff)를 넘어서 직접 구글/웹을 실시간 서핑(Tavily API)하여 최신 뉴스와 정보를 탐색하고 답하는 에이전트를 만듭니다.',
  15,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch16-financial-stock-analysis-ai',
  '실시간 주식/금융 데이터 연동 AI 투자 분석 시스템',
  '실시간 주식 가격 및 기업 재무제표 데이터를 수집하고 LLM 투자 분석 모델을 적용하여 금융 리포트를 자동 작성하는 주식 분석 서비스를 구축합니다.',
  '야후 파이낸스(`yfinance`) 라이브러리로 **실시간 주가, 재무제표, 52주 최고/최저가 및 지표**를 수집하여 AI가 전문가 관점에서 종목 분석 리포트를 작성하는 시스템을 구축합니다.

---

## 1. 금융 AI 전문 용어 사전 (Glossary)

- **yfinance**: 야후 파이낸스(Yahoo Finance)의 미국/한국 주식 실시간 시세 및 재무제표 데이터를 수집하는 파이썬 패키지입니다.
- **PER (Price to Earnings Ratio)**: 주가를 1주당 순이익(EPS)으로 나눈 수치로, 기업 가치의 저평가/고평가 여부를 판단합니다.
- **PBR (Price to Book Ratio)**: 주가를 1주당 순자산(BPS)으로 나눈 수치입니다.
- **Portfolio Simulation**: 자산 배분 비중을 조절하며 백테스팅(Backtesting)을 수행하여 미래 수익률을 시뮬레이션하는 기법입니다.

---

## 2. 파이썬 실시간 주가 수집 및 AI 리포트 생성기

```python
import yfinance as yf
from openai import OpenAI

client = OpenAI()

def analyze_financial_stock(ticker_symbol):
    # 1. yfinance로 주식 데이터 수집 (예: Apple ''AAPL'', 테슬라 ''TSLA'', 삼성전자 ''005930.KS'')
    stock = yf.Ticker(ticker_symbol)
    info = stock.info
    
    financial_data = {
        "종목명": info.get("shortName"),
        "현재주가": f"{info.get(''currentPrice'')} {info.get(''currency'')}",
        "PER": info.get("trailingPE"),
        "PBR": info.get("priceToBook"),
        "52주 최고가": info.get("fiftyTwoWeekHigh"),
        "52주 최저가": info.get("fiftyTwoWeekLow"),
        "시가총액": info.get("marketCap")
    }

    # 2. AI 분석 프롬프트 주입
    prompt = f"""
너는 월스트리트 수석 주식 분석가야.
다음 수집된 기업 재무 데이터를 바탕으로 투자 분석 리포트를 작성해 줘.

[재무 데이터]
{financial_data}

[작성 양식]
1. 기업 재무상태 평가
2. 주요 밸류에이션(PER/PBR) 분석
3. 투자 유의점 및 리스크 관전 포인트
"""
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2
    )
    return res.choices[0].message.content

print(analyze_financial_stock("AAPL"))
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 금융 AI 서비스를 제공할 때 법적으로 명시해야 하는 항목은?**
A. AI 서비스 화면 하단에 "본 서비스가 제공하는 분석 자료는 단순 정보 제공 목적이며, 모든 투자 결정과 책임은 이용자 본인에게 있습니다"라는 **법적 면책 조항(Disclaimer)**을 반드시 표기해야 합니다.
',
  '<p>야후 파이낸스(<code>yfinance</code>) 라이브러리로 <strong>실시간 주가, 재무제표, 52주 최고/최저가 및 지표</strong>를 수집하여 AI가 전문가 관점에서 종목 분석 리포트를 작성하는 시스템을 구축합니다.</p>
<hr>
<h2>1. 금융 AI 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>yfinance</strong>: 야후 파이낸스(Yahoo Finance)의 미국/한국 주식 실시간 시세 및 재무제표 데이터를 수집하는 파이썬 패키지입니다.</li>
<li><strong>PER (Price to Earnings Ratio)</strong>: 주가를 1주당 순이익(EPS)으로 나눈 수치로, 기업 가치의 저평가/고평가 여부를 판단합니다.</li>
<li><strong>PBR (Price to Book Ratio)</strong>: 주가를 1주당 순자산(BPS)으로 나눈 수치입니다.</li>
<li><strong>Portfolio Simulation</strong>: 자산 배분 비중을 조절하며 백테스팅(Backtesting)을 수행하여 미래 수익률을 시뮬레이션하는 기법입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 실시간 주가 수집 및 AI 리포트 생성기</h2>
<pre><code class="language-python">import yfinance as yf
from openai import OpenAI

client = OpenAI()

def analyze_financial_stock(ticker_symbol):
    # 1. yfinance로 주식 데이터 수집 (예: Apple &#39;AAPL&#39;, 테슬라 &#39;TSLA&#39;, 삼성전자 &#39;005930.KS&#39;)
    stock = yf.Ticker(ticker_symbol)
    info = stock.info
    
    financial_data = {
        &quot;종목명&quot;: info.get(&quot;shortName&quot;),
        &quot;현재주가&quot;: f&quot;{info.get(&#39;currentPrice&#39;)} {info.get(&#39;currency&#39;)}&quot;,
        &quot;PER&quot;: info.get(&quot;trailingPE&quot;),
        &quot;PBR&quot;: info.get(&quot;priceToBook&quot;),
        &quot;52주 최고가&quot;: info.get(&quot;fiftyTwoWeekHigh&quot;),
        &quot;52주 최저가&quot;: info.get(&quot;fiftyTwoWeekLow&quot;),
        &quot;시가총액&quot;: info.get(&quot;marketCap&quot;)
    }

    # 2. AI 분석 프롬프트 주입
    prompt = f&quot;&quot;&quot;
너는 월스트리트 수석 주식 분석가야.
다음 수집된 기업 재무 데이터를 바탕으로 투자 분석 리포트를 작성해 줘.

[재무 데이터]
{financial_data}

[작성 양식]
1. 기업 재무상태 평가
2. 주요 밸류에이션(PER/PBR) 분석
3. 투자 유의점 및 리스크 관전 포인트
&quot;&quot;&quot;
    res = client.chat.completions.create(
        model=&quot;gpt-4o-mini&quot;,
        messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: prompt}],
        temperature=0.2
    )
    return res.choices[0].message.content

print(analyze_financial_stock(&quot;AAPL&quot;))
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 금융 AI 서비스를 제공할 때 법적으로 명시해야 하는 항목은?</strong>
A. AI 서비스 화면 하단에 &quot;본 서비스가 제공하는 분석 자료는 단순 정보 제공 목적이며, 모든 투자 결정과 책임은 이용자 본인에게 있습니다&quot;라는 **법적 면책 조항(Disclaimer)**을 반드시 표기해야 합니다.</p>
',
  'published',
  'AI 주식 금융 분석가 구축 - yfinance 실시간 주가 데이터 수집 & LLM 리포트',
  'yfinance 파이썬 라이브러리로 실시간 주가, 재무제표, PER/PBR 지표를 수집하고, LLM을 결합하여 종목 투자 분석 및 포트폴리오 리포트를 생성하는 시스템을 학습합니다.',
  16,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;
