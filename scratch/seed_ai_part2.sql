-- Seed AI Lessons Part 2

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

## 1. JSON 스키마 출력 강제 (`response_format`)

OpenAI API는 `response_format={"type": "json_object"}` 설정을 제공합니다. (단, 시스템 프롬프트에 JSON이라는 단어를 명시해야 함)

```python
import json

response = client.chat.completions.create(
    model="gpt-4o-mini",
    response_format={"type": "json_object"},
    messages=[
        {"role": "system", "content": "너는 입력을 받으면 JSON으로만 결과를 반환하는 객체 분석기야. JSON keys: name, age, skills(array)"},
        {"role": "user", "content": "이인상 개발자는 30세이고 Python, JS, C를 잘해요."}
    ]
)

# JSON 문자열을 파이썬 딕셔너리로 변환
data = json.loads(response.choices[0].message.content)
print(data["skills"]) # [''Python'', ''JS'', ''C'']
```

---

## 2. Pydantic 라이브러리를 활용한 엄격한 타입 검증

`pydantic`을 이용해 데이터 클래스 모델을 정의하면 타입 오류 없는 안전한 JSON 추출이 가능합니다.

```python
from pydantic import BaseModel

class UserProfile(BaseModel):
    name: str
    age: int
    is_developer: bool

# OpenAI Structured Output (Beta)
completion = client.beta.chat.completions.parse(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "홍길동 25세 비개발자"}],
    response_format=UserProfile,
)

user = completion.choices[0].message.parsed
print(user.name, user.age) # 홍길동 25
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. AI가 출력한 JSON 문법이 깨져서 `json.loads()` 에러가 날 때 대처법은?**
A. 최신 API의 `Structured Output` 기능 또는 `pydantic` 모델을 사용하면 문법 오류율을 0%에 가깝게 보장할 수 있습니다.
',
  '<p>생성형 AI를 실제 서비스 서비스나 DB와 연동하려면 단순 텍스트 답변이 아닌 규격화된 **JSON 데이터(Structured Output)**로 결과를 받아야 합니다.</p>
<hr>
<h2>1. JSON 스키마 출력 강제 (<code>response_format</code>)</h2>
<p>OpenAI API는 <code>response_format={&quot;type&quot;: &quot;json_object&quot;}</code> 설정을 제공합니다. (단, 시스템 프롬프트에 JSON이라는 단어를 명시해야 함)</p>
<pre><code class="language-python">import json

response = client.chat.completions.create(
    model=&quot;gpt-4o-mini&quot;,
    response_format={&quot;type&quot;: &quot;json_object&quot;},
    messages=[
        {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;너는 입력을 받으면 JSON으로만 결과를 반환하는 객체 분석기야. JSON keys: name, age, skills(array)&quot;},
        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;이인상 개발자는 30세이고 Python, JS, C를 잘해요.&quot;}
    ]
)

# JSON 문자열을 파이썬 딕셔너리로 변환
data = json.loads(response.choices[0].message.content)
print(data[&quot;skills&quot;]) # [&#39;Python&#39;, &#39;JS&#39;, &#39;C&#39;]
</code></pre>
<hr>
<h2>2. Pydantic 라이브러리를 활용한 엄격한 타입 검증</h2>
<p><code>pydantic</code>을 이용해 데이터 클래스 모델을 정의하면 타입 오류 없는 안전한 JSON 추출이 가능합니다.</p>
<pre><code class="language-python">from pydantic import BaseModel

class UserProfile(BaseModel):
    name: str
    age: int
    is_developer: bool

# OpenAI Structured Output (Beta)
completion = client.beta.chat.completions.parse(
    model=&quot;gpt-4o-mini&quot;,
    messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;홍길동 25세 비개발자&quot;}],
    response_format=UserProfile,
)

user = completion.choices[0].message.parsed
print(user.name, user.age) # 홍길동 25
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

## 1. 멀티턴(Multi-turn) 챗봇 파이썬 알고리즘

이전 `user` 질문과 `assistant` 답변을 파이썬 리스트에 순서대로 덧붙여(Append) 매 호출마다 함께 전달합니다.

```python
history = [
    {"role": "system", "content": "너는 DAVHAVE의 친절한 AI 고객상담원이야."}
]

def chat(user_input):
    # 1. 사용자 질문을 이력에 추가
    history.append({"role": "user", "content": user_input})
    
    # 2. 전체 대화 이력을 포함하여 API 호출
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=history
    )
    
    bot_reply = response.choices[0].message.content
    
    # 3. AI 답변을 이력에 추가
    history.append({"role": "assistant", "content": bot_reply})
    return bot_reply

print(chat("안녕하세요! 제 이름은 인상입니다."))
print(chat("제 이름이 뭔지 기억하시나요?")) # "네, 인상님!" 정답 출력
```

---

## 2. 토큰 누수 방지를 위한 슬라이딩 윈도우 (Sliding Window)

대화가 길어지면 대화 이력이 수만 토큰에 달해 API 비용이 폭증하고 컨텍스트 한계를 초과하게 됩니다.

- **슬라이딩 윈도우**: 최근 N개(예: 최근 6개 대화)만 유지하고 오래된 이전 대화는 잘라내거나 요약(Summarization)하여 보관합니다.

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 대화 이력이 너무 길어지면 어떻게 요약하나요?**
A. 대화 수가 10회가 넘어가면 별도의 LLM 호출을 통해 "이전 대화를 3줄로 요약해 줘"라고 청크화하여 `system` 메시지 뒤에 요약본으로 삽입하는 방식을 사용합니다.
',
  '<p>LLM API는 상태가 없는 <strong>Stateless(무상태성)</strong> 방식입니다. 즉, 이전에 내가 무슨 질문을 했는지 기억하지 못하므로, 개발자가 직접 이전 대화 기록(<strong>Chat History</strong>)을 축적해 전달해야 합니다.</p>
<hr>
<h2>1. 멀티턴(Multi-turn) 챗봇 파이썬 알고리즘</h2>
<p>이전 <code>user</code> 질문과 <code>assistant</code> 답변을 파이썬 리스트에 순서대로 덧붙여(Append) 매 호출마다 함께 전달합니다.</p>
<pre><code class="language-python">history = [
    {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;너는 DAVHAVE의 친절한 AI 고객상담원이야.&quot;}
]

def chat(user_input):
    # 1. 사용자 질문을 이력에 추가
    history.append({&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: user_input})
    
    # 2. 전체 대화 이력을 포함하여 API 호출
    response = client.chat.completions.create(
        model=&quot;gpt-4o-mini&quot;,
        messages=history
    )
    
    bot_reply = response.choices[0].message.content
    
    # 3. AI 답변을 이력에 추가
    history.append({&quot;role&quot;: &quot;assistant&quot;, &quot;content&quot;: bot_reply})
    return bot_reply

print(chat(&quot;안녕하세요! 제 이름은 인상입니다.&quot;))
print(chat(&quot;제 이름이 뭔지 기억하시나요?&quot;)) # &quot;네, 인상님!&quot; 정답 출력
</code></pre>
<hr>
<h2>2. 토큰 누수 방지를 위한 슬라이딩 윈도우 (Sliding Window)</h2>
<p>대화가 길어지면 대화 이력이 수만 토큰에 달해 API 비용이 폭증하고 컨텍스트 한계를 초과하게 됩니다.</p>
<ul>
<li><strong>슬라이딩 윈도우</strong>: 최근 N개(예: 최근 6개 대화)만 유지하고 오래된 이전 대화는 잘라내거나 요약(Summarization)하여 보관합니다.</li>
</ul>
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
  '**함수 호출(Function Calling)**은 LLM이 계산할 수 없는 실시간 정보(날씨, 주가, DB 조회)가 필요할 때, 직접 답변하는 대신 **"이 파이썬 함수를 이런 인자값으로 실행해 줘"**라고 개발자에게 요청하는 강력한 연동 기법입니다.

---

## 1. Function Calling 동작 4단계 워크플로우

1. **사용자 요청**: "지금 서울 날씨 어때?"
2. **LLM 수신 및 판단**: "직접 모르는 데이터군! `get_current_weather(location=''Seoul'')` 함수를 실행하세요!" (함수명 및 인자 반환)
3. **앱 코드 실행**: 개발자 파이썬 코드가 실제 날씨 API를 호출하여 "맑음, 24도" 데이터 획득
4. **LLM 최종 답변**: 날씨 데이터를 전달받아 "현재 서울 날씨는 맑고 24도입니다." 최종 자연어 답변 완성

---

## 2. 파이썬 Function Calling 구현 예제

```python
# 1. 실제 실행할 외부 파이썬 함수 정의
def get_current_weather(location):
    if "서울" in location:
        return "맑음, 기온 24도"
    return "정보 없음"

# 2. OpenAI에 도구(Tools) 규격 등록
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

# 3. API 호출
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "지금 서울 날씨 알려줘"}],
    tools=tools
)

print(response.choices[0].message.tool_calls[0].function)
# Output: name=''get_current_weather'', arguments=''{"location":"서울"}''
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. AI 에이전트(Agent)란 무엇인가요?**
A. 단순히 묻는 말에 대답만 하는 모델을 넘어, 주어진 목표 달성을 위해 직접 계획을 세우고, 필요한 도구(Function)를 스스로 반복 호출하며 작업을 완수하는 자율 인공지능 시스템입니다.
',
  '<p>**함수 호출(Function Calling)**은 LLM이 계산할 수 없는 실시간 정보(날씨, 주가, DB 조회)가 필요할 때, 직접 답변하는 대신 **&quot;이 파이썬 함수를 이런 인자값으로 실행해 줘&quot;**라고 개발자에게 요청하는 강력한 연동 기법입니다.</p>
<hr>
<h2>1. Function Calling 동작 4단계 워크플로우</h2>
<ol>
<li><strong>사용자 요청</strong>: &quot;지금 서울 날씨 어때?&quot;</li>
<li><strong>LLM 수신 및 판단</strong>: &quot;직접 모르는 데이터군! <code>get_current_weather(location=&#39;Seoul&#39;)</code> 함수를 실행하세요!&quot; (함수명 및 인자 반환)</li>
<li><strong>앱 코드 실행</strong>: 개발자 파이썬 코드가 실제 날씨 API를 호출하여 &quot;맑음, 24도&quot; 데이터 획득</li>
<li><strong>LLM 최종 답변</strong>: 날씨 데이터를 전달받아 &quot;현재 서울 날씨는 맑고 24도입니다.&quot; 최종 자연어 답변 완성</li>
</ol>
<hr>
<h2>2. 파이썬 Function Calling 구현 예제</h2>
<pre><code class="language-python"># 1. 실제 실행할 외부 파이썬 함수 정의
def get_current_weather(location):
    if &quot;서울&quot; in location:
        return &quot;맑음, 기온 24도&quot;
    return &quot;정보 없음&quot;

# 2. OpenAI에 도구(Tools) 규격 등록
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

# 3. API 호출
response = client.chat.completions.create(
    model=&quot;gpt-4o-mini&quot;,
    messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;지금 서울 날씨 알려줘&quot;}],
    tools=tools
)

print(response.choices[0].message.tool_calls[0].function)
# Output: name=&#39;get_current_weather&#39;, arguments=&#39;{&quot;location&quot;:&quot;서울&quot;}&#39;
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. AI 에이전트(Agent)란 무엇인가요?</strong>
A. 단순히 묻는 말에 대답만 하는 모델을 넘어, 주어진 목표 달성을 위해 직접 계획을 세우고, 필요한 도구(Function)를 스스로 반복 호출하며 작업을 완수하는 자율 인공지능 시스템입니다.</p>
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
  '**RAG(Retrieval-Augmented Generation, 검색 증강 생성)**는 LLM의 가장 큰 한계인 환각(Hallucination)과 최신/사내 데이터 미비 문제를 해결하기 위해, 관련 문서 검색 시스템과 LLM을 결합하는 최신 표준 기술입니다.

---

## 1. 텍스트 임베딩 (Embedding)이란?

단어나 문장의 **"의미적인 유사도"**를 수백~수천 차원의 숫자 벡터(Vector)로 변환하는 기술입니다.

- 예: `"강아지"`와 `"개"`는 단어 형태는 다르지만 벡터 공간 상에서 거리가 매우 가깝게 배치됩니다.

```python
# OpenAI 임베딩 생성 예시
emb_response = client.embeddings.create(
    model="text-embedding-3-small",
    input="DAVHAVE 웹 개발 교육 파이프라인"
)

vector = emb_response.data[0].embedding # 1536 차원의 숫자 리스트
```

---

## 2. RAG 파이프라인 3단계 구조

1. **문서 색인 (Indexing)**: 사내 PDF/매뉴얼 텍스트 분할(Chunking) $ightarrow$ 임베딩 변환 $ightarrow$ 벡터 데이터베이스(Vector DB)에 저장
2. **검색 (Retrieval)**: 사용자 질문 입력 $ightarrow$ 질문을 임베딩하여 Vector DB에서 가장 유사한 문서 Top-3 추출
3. **생성 (Generation)**: 추출된 문서 조각을 프롬프트 맥락(Context)에 넣어 LLM에게 "이 문서를 바탕으로 답변해 줘" 요청

---

## 3. RAG 도입 시 얻는 3대 장점

1. **환각 현상 최소화**: AI가 검증된 검색 문서에 기반해서만 답변함.
2. **사내 보안 문서 학습 비용 절감**: 모델을 새로 미세조정(Fine-tuning)하지 않고도 즉시 최신 데이터 반영.
3. **출처 명시 가능**: 답변 끝에 참조한 문서 페이지나 링크를 제공할 수 있음.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파이낸튜닝(Fine-tuning)과 RAG 중 어떤 것을 선택해야 하나요?**
A. 새로운 지식을 지속적으로 업데이트하고 출처 제공이 필요한 경우 **RAG**가 훨씬 유리하며, 특정한 말투나 출력 포맷 스타일 자체를 고정시키고 싶을 때 파인튜닝을 선택합니다.
',
  '<p>**RAG(Retrieval-Augmented Generation, 검색 증강 생성)**는 LLM의 가장 큰 한계인 환각(Hallucination)과 최신/사내 데이터 미비 문제를 해결하기 위해, 관련 문서 검색 시스템과 LLM을 결합하는 최신 표준 기술입니다.</p>
<hr>
<h2>1. 텍스트 임베딩 (Embedding)이란?</h2>
<p>단어나 문장의 **&quot;의미적인 유사도&quot;**를 수백~수천 차원의 숫자 벡터(Vector)로 변환하는 기술입니다.</p>
<ul>
<li>예: <code>&quot;강아지&quot;</code>와 <code>&quot;개&quot;</code>는 단어 형태는 다르지만 벡터 공간 상에서 거리가 매우 가깝게 배치됩니다.</li>
</ul>
<pre><code class="language-python"># OpenAI 임베딩 생성 예시
emb_response = client.embeddings.create(
    model=&quot;text-embedding-3-small&quot;,
    input=&quot;DAVHAVE 웹 개발 교육 파이프라인&quot;
)

vector = emb_response.data[0].embedding # 1536 차원의 숫자 리스트
</code></pre>
<hr>
<h2>2. RAG 파이프라인 3단계 구조</h2>
<ol>
<li><strong>문서 색인 (Indexing)</strong>: 사내 PDF/매뉴얼 텍스트 분할(Chunking) $
ightarrow$ 임베딩 변환 $
ightarrow$ 벡터 데이터베이스(Vector DB)에 저장</li>
<li><strong>검색 (Retrieval)</strong>: 사용자 질문 입력 $
ightarrow$ 질문을 임베딩하여 Vector DB에서 가장 유사한 문서 Top-3 추출</li>
<li><strong>생성 (Generation)</strong>: 추출된 문서 조각을 프롬프트 맥락(Context)에 넣어 LLM에게 &quot;이 문서를 바탕으로 답변해 줘&quot; 요청</li>
</ol>
<hr>
<h2>3. RAG 도입 시 얻는 3대 장점</h2>
<ol>
<li><strong>환각 현상 최소화</strong>: AI가 검증된 검색 문서에 기반해서만 답변함.</li>
<li><strong>사내 보안 문서 학습 비용 절감</strong>: 모델을 새로 미세조정(Fine-tuning)하지 않고도 즉시 최신 데이터 반영.</li>
<li><strong>출처 명시 가능</strong>: 답변 끝에 참조한 문서 페이지나 링크를 제공할 수 있음.</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이낸튜닝(Fine-tuning)과 RAG 중 어떤 것을 선택해야 하나요?</strong>
A. 새로운 지식을 지속적으로 업데이트하고 출처 제공이 필요한 경우 <strong>RAG</strong>가 훨씬 유리하며, 특정한 말투나 출력 포맷 스타일 자체를 고정시키고 싶을 때 파인튜닝을 선택합니다.</p>
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
  '지금까지 배운 프롬프트 엔지니어링 4대 원칙, LLM API 호출, 대화 이력 관리, JSON 구조화 기술을 종합하여 **나만의 AI 통합 업무 비서**를 직접 구현해 봅니다.

---

## 1. AI 통합 비서 아키텍처

- **역할**: 사용자의 일정을 정리하고, 텍스트 요약 및 키워드 추출을 수행하며, 대화 맥락을 기억하는 스마트 업무 비서.
- **사용 모델**: OpenAI `gpt-4o-mini` 또는 Google `gemini-1.5-flash`

---

## 2. 파이썬 실전 AI 비서 통합 코드

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
        # 1. 대화 이력에 사용자 메시지 저장
        self.history.append({"role": "user", "content": user_message})

        # 2. LLM 응답 생성
        response = self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=self.history,
            temperature=0.3
        )

        reply = response.choices[0].message.content
        
        # 3. AI 답변을 대화 이력에 저장
        self.history.append({"role": "assistant", "content": reply})
        return reply

    def summarize_json(self, long_text):
        """긴 문서를 구조화된 JSON으로 요약 추출하는 메쏘드"""
        res = self.client.chat.completions.create(
            model="gpt-4o-mini",
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": "입력 문서를 요약하여 JSON으로만 반환해 줘. Keys: title, summary_bullets(array), action_items(array)"},
                {"role": "user", "content": long_text}
            ]
        )
        return json.loads(res.choices[0].message.content)

# 실행 테스트
# assistant = AIAssistant("YOUR_API_KEY")
# print(assistant.ask("내일 아침 9시 회의 준비 체크리스트 만들어 줘."))
```

---

## 3. AI 앱 프로젝트 발전 방향

1. **Streamlit / Gradio 프론트엔드 연동**: 파이썬 전용 웹 UI 라이브러리를 붙여 웹 페이지 챗봇 서비스로 확장.
2. **FastAPI 백엔드 서버 구축**: 모바일 앱이나 웹 프론트엔드와 통신하는 AI REST API 서버 구축.
3. **RAG 챗봇 확장**: 내 컴퓨터의 PDF 파일들을 읽어 답변하는 나만의 문서 질의응답 비서 구축.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. AI 비서 프로젝트를 포트폴리오로 만들 때 강조해야 할 핵심은?**
A. 단순히 API를 부르는 것에 그치지 않고, 예외 처리(API 실패 처리), 보안(API Key 관리), 비용 절감(슬라이딩 윈도우), 그리고 UX(JSON 처리 및 빠른 답변 속도)를 고민한 흔적을 담아내는 것이 중요합니다.
',
  '<p>지금까지 배운 프롬프트 엔지니어링 4대 원칙, LLM API 호출, 대화 이력 관리, JSON 구조화 기술을 종합하여 <strong>나만의 AI 통합 업무 비서</strong>를 직접 구현해 봅니다.</p>
<hr>
<h2>1. AI 통합 비서 아키텍처</h2>
<ul>
<li><strong>역할</strong>: 사용자의 일정을 정리하고, 텍스트 요약 및 키워드 추출을 수행하며, 대화 맥락을 기억하는 스마트 업무 비서.</li>
<li><strong>사용 모델</strong>: OpenAI <code>gpt-4o-mini</code> 또는 Google <code>gemini-1.5-flash</code></li>
</ul>
<hr>
<h2>2. 파이썬 실전 AI 비서 통합 코드</h2>
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
        # 1. 대화 이력에 사용자 메시지 저장
        self.history.append({&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: user_message})

        # 2. LLM 응답 생성
        response = self.client.chat.completions.create(
            model=&quot;gpt-4o-mini&quot;,
            messages=self.history,
            temperature=0.3
        )

        reply = response.choices[0].message.content
        
        # 3. AI 답변을 대화 이력에 저장
        self.history.append({&quot;role&quot;: &quot;assistant&quot;, &quot;content&quot;: reply})
        return reply

    def summarize_json(self, long_text):
        &quot;&quot;&quot;긴 문서를 구조화된 JSON으로 요약 추출하는 메쏘드&quot;&quot;&quot;
        res = self.client.chat.completions.create(
            model=&quot;gpt-4o-mini&quot;,
            response_format={&quot;type&quot;: &quot;json_object&quot;},
            messages=[
                {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;입력 문서를 요약하여 JSON으로만 반환해 줘. Keys: title, summary_bullets(array), action_items(array)&quot;},
                {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: long_text}
            ]
        )
        return json.loads(res.choices[0].message.content)

# 실행 테스트
# assistant = AIAssistant(&quot;YOUR_API_KEY&quot;)
# print(assistant.ask(&quot;내일 아침 9시 회의 준비 체크리스트 만들어 줘.&quot;))
</code></pre>
<hr>
<h2>3. AI 앱 프로젝트 발전 방향</h2>
<ol>
<li><strong>Streamlit / Gradio 프론트엔드 연동</strong>: 파이썬 전용 웹 UI 라이브러리를 붙여 웹 페이지 챗봇 서비스로 확장.</li>
<li><strong>FastAPI 백엔드 서버 구축</strong>: 모바일 앱이나 웹 프론트엔드와 통신하는 AI REST API 서버 구축.</li>
<li><strong>RAG 챗봇 확장</strong>: 내 컴퓨터의 PDF 파일들을 읽어 답변하는 나만의 문서 질의응답 비서 구축.</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. AI 비서 프로젝트를 포트폴리오로 만들 때 강조해야 할 핵심은?</strong>
A. 단순히 API를 부르는 것에 그치지 않고, 예외 처리(API 실패 처리), 보안(API Key 관리), 비용 절감(슬라이딩 윈도우), 그리고 UX(JSON 처리 및 빠른 답변 속도)를 고민한 흔적을 담아내는 것이 중요합니다.</p>
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
