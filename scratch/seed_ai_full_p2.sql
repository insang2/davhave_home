-- Full AI Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch06-structured-outputs-json',
  '구조화된 데이터 출력 (Structured Output & JSON)',
  'AI의 답변을 웹 서버나 DB에서 즉시 활용할 수 있도록 정교한 JSON 형식으로 강제 출력하는 Structured Output 및 파이썬 데이터 파싱 기법을 배웁니다.',
  '생성형 AI를 실제 서비스 서비스나 DB와 연동하려면 단순 텍스트 답변이 아닌 규격화된 **JSON 데이터(Structured Output)**로 결과를 받아야 합니다.

---

## 1. Structured Output 용어 사전 (Glossary)

- **JSON (JavaScript Object Notation)**: 키-값(Key-Value) 쌍으로 데이터를 표현하는 경량 표준 데이터 교환 포맷입니다.
- **Pydantic**: 파이썬에서 데이터 타입을 선언하고 실행 시점에 자동으로 타입을 검증해주는 데이터 모델링 라이브러리입니다.
- **JSON Schema**: JSON 데이터의 구조, 필수 키, 데이터 타입을 정의하는 명세서 규격입니다.

---

## 2. Pydantic 라이브러리를 활용한 엄격한 타입 검증

```python
from pydantic import BaseModel
from typing import List

class UserProfile(BaseModel):
    name: str
    age: int
    skills: List[str]
    is_developer: bool

# OpenAI Structured Output (Beta)
completion = client.beta.chat.completions.parse(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "홍길동 25세 개발자 Python, JS 사용 가능"}],
    response_format=UserProfile,
)

user = completion.choices[0].message.parsed
print(user.name, user.skills) # 홍길동 [''Python'', ''JS'']
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. AI가 출력한 JSON 문법이 깨져서 `json.loads()` 에러가 날 때 대처법은?**
A. 최신 API의 `Structured Output` 기능 또는 `pydantic` 모델을 사용하면 문법 오류율을 0%에 가깝게 보장할 수 있습니다.
',
  '<p>생성형 AI를 실제 서비스 서비스나 DB와 연동하려면 단순 텍스트 답변이 아닌 규격화된 **JSON 데이터(Structured Output)**로 결과를 받아야 합니다.</p>
<hr>
<h2>1. Structured Output 용어 사전 (Glossary)</h2>
<ul>
<li><strong>JSON (JavaScript Object Notation)</strong>: 키-값(Key-Value) 쌍으로 데이터를 표현하는 경량 표준 데이터 교환 포맷입니다.</li>
<li><strong>Pydantic</strong>: 파이썬에서 데이터 타입을 선언하고 실행 시점에 자동으로 타입을 검증해주는 데이터 모델링 라이브러리입니다.</li>
<li><strong>JSON Schema</strong>: JSON 데이터의 구조, 필수 키, 데이터 타입을 정의하는 명세서 규격입니다.</li>
</ul>
<hr>
<h2>2. Pydantic 라이브러리를 활용한 엄격한 타입 검증</h2>
<pre><code class="language-python">from pydantic import BaseModel
from typing import List

class UserProfile(BaseModel):
    name: str
    age: int
    skills: List[str]
    is_developer: bool

# OpenAI Structured Output (Beta)
completion = client.beta.chat.completions.parse(
    model=&quot;gpt-4o-mini&quot;,
    messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;홍길동 25세 개발자 Python, JS 사용 가능&quot;}],
    response_format=UserProfile,
)

user = completion.choices[0].message.parsed
print(user.name, user.skills) # 홍길동 [&#39;Python&#39;, &#39;JS&#39;]
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. AI가 출력한 JSON 문법이 깨져서 <code>json.loads()</code> 에러가 날 때 대처법은?</strong>
A. 최신 API의 <code>Structured Output</code> 기능 또는 <code>pydantic</code> 모델을 사용하면 문법 오류율을 0%에 가깝게 보장할 수 있습니다.</p>
',
  'published',
  'LLM JSON 파싱 및 Structured Output 구현 - Pydantic과 response_format',
  '자유 텍스트 답변 대신 데이터베이스에 곧바로 저장 가능한 JSON 규격(Structured Output)으로 AI 답변을 강제하고 파싱하는 방법을 학습합니다.',
  6,
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
  'ch07-conversational-ai-history',
  '대화형 AI 챗봇 구현과 대화 이력 관리',
  '이전 사용자 질문과 답변 기록을 적절히 기억하고 이어서 대화하는 대화형 AI 챗봇의 핵심 알고리즘과 대화 이력(Chat History) 메모리 관리법을 배웁니다.',
  'LLM API는 상태가 없는 **Stateless(무상태성)** 방식입니다. 즉, 이전에 내가 무슨 질문을 했는지 기억하지 못하므로, 개발자가 직접 이전 대화 기록(**Chat History**)을 축적해 전달해야 합니다.

---

## 1. 대화 이력 용어 사전 (Glossary)

- **Stateless (무상태성)**: 서버나 API가 이전 요청의 상태 정보를 보관하지 않는 독립적인 통신 방식입니다.
- **Multi-turn (멀티턴 대화)**: 단발성 질의응답(Single-turn)이 아닌 이전 대화 맥락을 주고받는 연속적 대화 형태입니다.
- **Sliding Window Memory**: 대화가 길어질 때 메모리 초과를 막기 위해 최근 N개의 대화 이력만 잘라내어 유지하는 전략입니다.

---

## 2. 멀티턴 챗봇 파이썬 알고리즘

```python
history = [
    {"role": "system", "content": "너는 DAVHAVE의 친절한 AI 고객상담원이야."}
]

def chat(user_input):
    history.append({"role": "user", "content": user_input})
    
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=history
    )
    
    bot_reply = response.choices[0].message.content
    history.append({"role": "assistant", "content": bot_reply})
    return bot_reply

print(chat("안녕하세요! 제 이름은 인상입니다."))
print(chat("제 이름이 뭔지 기억하시나요?")) # "네, 인상님!" 정답 출력
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 대화 이력이 너무 길어지면 어떻게 요약하나요?**
A. 대화 수가 10회가 넘어가면 별도의 LLM 호출을 통해 "이전 대화를 3줄로 요약해 줘"라고 청크화하여 `system` 메시지 뒤에 요약본으로 삽입하는 방식을 사용합니다.
',
  '<p>LLM API는 상태가 없는 <strong>Stateless(무상태성)</strong> 방식입니다. 즉, 이전에 내가 무슨 질문을 했는지 기억하지 못하므로, 개발자가 직접 이전 대화 기록(<strong>Chat History</strong>)을 축적해 전달해야 합니다.</p>
<hr>
<h2>1. 대화 이력 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Stateless (무상태성)</strong>: 서버나 API가 이전 요청의 상태 정보를 보관하지 않는 독립적인 통신 방식입니다.</li>
<li><strong>Multi-turn (멀티턴 대화)</strong>: 단발성 질의응답(Single-turn)이 아닌 이전 대화 맥락을 주고받는 연속적 대화 형태입니다.</li>
<li><strong>Sliding Window Memory</strong>: 대화가 길어질 때 메모리 초과를 막기 위해 최근 N개의 대화 이력만 잘라내어 유지하는 전략입니다.</li>
</ul>
<hr>
<h2>2. 멀티턴 챗봇 파이썬 알고리즘</h2>
<pre><code class="language-python">history = [
    {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;너는 DAVHAVE의 친절한 AI 고객상담원이야.&quot;}
]

def chat(user_input):
    history.append({&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: user_input})
    
    response = client.chat.completions.create(
        model=&quot;gpt-4o-mini&quot;,
        messages=history
    )
    
    bot_reply = response.choices[0].message.content
    history.append({&quot;role&quot;: &quot;assistant&quot;, &quot;content&quot;: bot_reply})
    return bot_reply

print(chat(&quot;안녕하세요! 제 이름은 인상입니다.&quot;))
print(chat(&quot;제 이름이 뭔지 기억하시나요?&quot;)) # &quot;네, 인상님!&quot; 정답 출력
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 대화 이력이 너무 길어지면 어떻게 요약하나요?</strong>
A. 대화 수가 10회가 넘어가면 별도의 LLM 호출을 통해 &quot;이전 대화를 3줄로 요약해 줘&quot;라고 청크화하여 <code>system</code> 메시지 뒤에 요약본으로 삽입하는 방식을 사용합니다.</p>
',
  'published',
  '파이썬 챗봇 개발 - 대화 이력(Chat History) 세션 유지 및 멀티턴 대화',
  '챗봇이 이전 대화 내용을 기억하도록 messages 리스트에 이전 대화 이력(Chat History)을 유지하고 관리하는 멀티턴(Multi-turn) 챗봇 구현을 학습합니다.',
  7,
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
  'ch08-function-calling-and-tools',
  'LLM 외부 도구 연동 (Function Calling과 에이전트)',
  'LLM이 실시간 날씨 검색, 계산기, DB 조회 등 외부 파이썬 함수를 스스로 선택하여 실행하도록 돕는 Function Calling 기법과 AI 에이전트 기본 구조를 학습합니다.',
  '**함수 호출(Function Calling)**은 LLM이 직접 대답할 수 없는 실시간 정보(날씨, 주가, DB 조회)가 필요할 때, 스스로 외부 파이썬 함수를 지정하여 실행 결과를 요청하는 연동 기법입니다.

---

## 1. Function Calling 용어 사전 (Glossary)

- **Function Calling**: LLM이 질문을 해석하여 적절한 함수 이름과 파라미터를 JSON 형태로 반환하는 기능입니다.
- **AI Agent (AI 에이전트)**: 목표 달성을 위해 직접 계획(Planning)을 세우고 도구(Tools)를 스스로 선택해 호출하는 자율 시스템입니다.

---

## 2. 파이썬 Function Calling 구현 예제

```python
def get_current_weather(location):
    if "서울" in location:
        return "맑음, 기온 24도"
    return "정보 없음"

tools = [{
    "type": "function",
    "function": {
        "name": "get_current_weather",
        "description": "특정 도시의 현재 날씨를 조회합니다.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {"type": "string", "description": "도시 이름 (예: 서울, 부산)"}
            },
            "required": ["location"]
        }
    }
}]

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "지금 서울 날씨 알려줘"}],
    tools=tools
)

print(response.choices[0].message.tool_calls[0].function)
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. AI 에이전트(Agent)의 기본 3대 요소는?**
A. 1) Brain (LLM 모델), 2) Memory (대화 및 컨텍스트 기재), 3) Tools (Function Calling, 웹 검색, 코드 실행기)입니다.
',
  '<p>**함수 호출(Function Calling)**은 LLM이 직접 대답할 수 없는 실시간 정보(날씨, 주가, DB 조회)가 필요할 때, 스스로 외부 파이썬 함수를 지정하여 실행 결과를 요청하는 연동 기법입니다.</p>
<hr>
<h2>1. Function Calling 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Function Calling</strong>: LLM이 질문을 해석하여 적절한 함수 이름과 파라미터를 JSON 형태로 반환하는 기능입니다.</li>
<li><strong>AI Agent (AI 에이전트)</strong>: 목표 달성을 위해 직접 계획(Planning)을 세우고 도구(Tools)를 스스로 선택해 호출하는 자율 시스템입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 Function Calling 구현 예제</h2>
<pre><code class="language-python">def get_current_weather(location):
    if &quot;서울&quot; in location:
        return &quot;맑음, 기온 24도&quot;
    return &quot;정보 없음&quot;

tools = [{
    &quot;type&quot;: &quot;function&quot;,
    &quot;function&quot;: {
        &quot;name&quot;: &quot;get_current_weather&quot;,
        &quot;description&quot;: &quot;특정 도시의 현재 날씨를 조회합니다.&quot;,
        &quot;parameters&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
                &quot;location&quot;: {&quot;type&quot;: &quot;string&quot;, &quot;description&quot;: &quot;도시 이름 (예: 서울, 부산)&quot;}
            },
            &quot;required&quot;: [&quot;location&quot;]
        }
    }
}]

response = client.chat.completions.create(
    model=&quot;gpt-4o-mini&quot;,
    messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;지금 서울 날씨 알려줘&quot;}],
    tools=tools
)

print(response.choices[0].message.tool_calls[0].function)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. AI 에이전트(Agent)의 기본 3대 요소는?</strong>
A. 1) Brain (LLM 모델), 2) Memory (대화 및 컨텍스트 기재), 3) Tools (Function Calling, 웹 검색, 코드 실행기)입니다.</p>
',
  'published',
  'LLM 함수 호출(Function Calling) 기초 - 외부 API 및 DB 연동 AI 에이전트',
  'LLM이 스스로 어떤 파이썬 함수를 호출해야 하는지 판단하고 실행 결과를 받아 답변을 완성하는 Function Calling(함수 호출)의 개념을 학습합니다.',
  8,
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
  'ch09-embeddings-and-rag-basics',
  '임베딩(Embedding)과 RAG(검색 증강 생성) 기초',
  '텍스트의 의미를 숫자의 배열(Vector)로 표현하는 임베딩과 외부 문서 데이터를 검색하여 정확한 답변을 생성하는 RAG(검색 증강 생성) 기초를 배웁니다.',
  '**RAG(Retrieval-Augmented Generation, 검색 증강 생성)**는 사내 문서나 최신 자료를 검색하여 LLM에 전달함으로써 환각 현상을 방지하는 핵심 아키텍처입니다.

---

## 1. RAG 핵심 용어 사전 (Glossary)

- **Embedding (임베딩)**: 단어나 문장의 의미적 유사도를 수백~수천 차원의 숫자 벡터(Vector) 배열로 변환하는 기법입니다.
- **Vector DB (벡터 데이터베이스)**: 벡터 간의 코사인 유사도(Cosine Similarity)를 고속으로 검색하는 전용 DB입니다. (예: ChromaDB, Pinecone, FAISS)
- **Chunking (청킹)**: 긴 문서 텍스트를 검색에 최적화된 작은 단락(Chunk) 단위로 쪼개는 작업입니다.

---

## 2. RAG 파이프라인 3단계 구조

1. **문서 색인 (Indexing)**: 사내 PDF/매뉴얼 텍스트 분할(Chunking) $ightarrow$ 임베딩 변환 $ightarrow$ Vector DB 저장
2. **검색 (Retrieval)**: 사용자 질문 입력 $ightarrow$ 질문을 임베딩하여 Vector DB에서 가장 유사한 문서 Top-3 추출
3. **생성 (Generation)**: 추출된 문서 조각을 프롬프트 맥락(Context)에 넣어 LLM에게 답변 요청

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파인튜닝(Fine-tuning)과 RAG 중 어떤 것을 선택해야 하나요?**
A. 최신 지식 업데이트와 출처 명시가 중요한 경우 **RAG**를 선택하고, 특정 말투나 출력 스타일 형식을 고정하고 싶을 때 파인튜닝을 선택합니다.
',
  '<p>**RAG(Retrieval-Augmented Generation, 검색 증강 생성)**는 사내 문서나 최신 자료를 검색하여 LLM에 전달함으로써 환각 현상을 방지하는 핵심 아키텍처입니다.</p>
<hr>
<h2>1. RAG 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Embedding (임베딩)</strong>: 단어나 문장의 의미적 유사도를 수백~수천 차원의 숫자 벡터(Vector) 배열로 변환하는 기법입니다.</li>
<li><strong>Vector DB (벡터 데이터베이스)</strong>: 벡터 간의 코사인 유사도(Cosine Similarity)를 고속으로 검색하는 전용 DB입니다. (예: ChromaDB, Pinecone, FAISS)</li>
<li><strong>Chunking (청킹)</strong>: 긴 문서 텍스트를 검색에 최적화된 작은 단락(Chunk) 단위로 쪼개는 작업입니다.</li>
</ul>
<hr>
<h2>2. RAG 파이프라인 3단계 구조</h2>
<ol>
<li><strong>문서 색인 (Indexing)</strong>: 사내 PDF/매뉴얼 텍스트 분할(Chunking) $
ightarrow$ 임베딩 변환 $
ightarrow$ Vector DB 저장</li>
<li><strong>검색 (Retrieval)</strong>: 사용자 질문 입력 $
ightarrow$ 질문을 임베딩하여 Vector DB에서 가장 유사한 문서 Top-3 추출</li>
<li><strong>생성 (Generation)</strong>: 추출된 문서 조각을 프롬프트 맥락(Context)에 넣어 LLM에게 답변 요청</li>
</ol>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파인튜닝(Fine-tuning)과 RAG 중 어떤 것을 선택해야 하나요?</strong>
A. 최신 지식 업데이트와 출처 명시가 중요한 경우 <strong>RAG</strong>를 선택하고, 특정 말투나 출력 스타일 형식을 고정하고 싶을 때 파인튜닝을 선택합니다.</p>
',
  'published',
  '임베딩(Embedding) 개념과 RAG(Retrieval-Augmented Generation) 시스템 기초',
  '문장의 의미를 수치 벡터로 변환하는 임베딩(Embedding)의 원리, 사내 문서나 PDF를 기반으로 환각 없이 답하는 RAG(검색 증강 생성) 아키텍처를 이해합니다.',
  9,
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
  'ch10-ai-application-project',
  '실전 프로젝트: 나만의 AI 비서 애플리케이션 구축',
  '앞서 배운 시스템 프롬프트 설계, 대화 메모리 이력 관리, JSON 구조화 및 도구 연동을 종합하여 나만의 실전 파이썬 AI 비서를 완성합니다.',
  '배운 프롬프트 엔지니어링, LLM API, 대화 이력 관리 기술을 종합하여 **나만의 AI 통합 업무 비서**를 구현합니다.

---

## 1. 파이썬 실전 AI 비서 통합 코드

```python
import json
from openai import OpenAI

class AIAssistant:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)
        self.history = [
            {
                "role": "system", 
                "content": "너는 사용자의 생산성을 돕는 스마트 AI 비서야. 친절하고 명확하며, 핵심 위주로 정리해 줘."
            }
        ]

    def ask(self, user_message):
        self.history.append({"role": "user", "content": user_message})

        response = self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=self.history,
            temperature=0.3
        )

        reply = response.choices[0].message.content
        self.history.append({"role": "assistant", "content": reply})
        return reply

    def summarize_json(self, long_text):
        res = self.client.chat.completions.create(
            model="gpt-4o-mini",
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": "입력 문서를 요약하여 JSON으로만 반환해 줘. Keys: title, summary_bullets(array), action_items(array)"},
                {"role": "user", "content": long_text}
            ]
        )
        return json.loads(res.choices[0].message.content)
```

---

## 2. 자주 묻는 질문 (Q&A)

**Q. 백엔드 서비스로 확장할 때 주의점은?**
A. API 키 보안 관리와 사용자 세션별 대화 이력 구분(Session ID 기준 메모리 분리)이 필수적입니다.
',
  '<p>배운 프롬프트 엔지니어링, LLM API, 대화 이력 관리 기술을 종합하여 <strong>나만의 AI 통합 업무 비서</strong>를 구현합니다.</p>
<hr>
<h2>1. 파이썬 실전 AI 비서 통합 코드</h2>
<pre><code class="language-python">import json
from openai import OpenAI

class AIAssistant:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)
        self.history = [
            {
                &quot;role&quot;: &quot;system&quot;, 
                &quot;content&quot;: &quot;너는 사용자의 생산성을 돕는 스마트 AI 비서야. 친절하고 명확하며, 핵심 위주로 정리해 줘.&quot;
            }
        ]

    def ask(self, user_message):
        self.history.append({&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: user_message})

        response = self.client.chat.completions.create(
            model=&quot;gpt-4o-mini&quot;,
            messages=self.history,
            temperature=0.3
        )

        reply = response.choices[0].message.content
        self.history.append({&quot;role&quot;: &quot;assistant&quot;, &quot;content&quot;: reply})
        return reply

    def summarize_json(self, long_text):
        res = self.client.chat.completions.create(
            model=&quot;gpt-4o-mini&quot;,
            response_format={&quot;type&quot;: &quot;json_object&quot;},
            messages=[
                {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;입력 문서를 요약하여 JSON으로만 반환해 줘. Keys: title, summary_bullets(array), action_items(array)&quot;},
                {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: long_text}
            ]
        )
        return json.loads(res.choices[0].message.content)
</code></pre>
<hr>
<h2>2. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 백엔드 서비스로 확장할 때 주의점은?</strong>
A. API 키 보안 관리와 사용자 세션별 대화 이력 구분(Session ID 기준 메모리 분리)이 필수적입니다.</p>
',
  'published',
  '파이썬 기반 AI 비서 챗봇 구축 실전 프로젝트 - OpenAI/Gemini 웹 앱 제작',
  '배운 시스템 프롬프트, JSON 출력, 대화 이력 및 함수 호출 기법을 종합하여 실전 파이썬 스마트 AI 비서 애플리케이션을 단계별로 완성해 봅니다.',
  10,
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
