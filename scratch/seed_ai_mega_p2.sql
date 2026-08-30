-- Mega Enhanced AI Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch05-system-prompt-and-hyperparameters',
  '시스템 메시지와 하이퍼파라미터 제어',
  'AI 모델의 페르소나를 결정하는 System Prompt와 답변의 창의성, 안정성, 문장 반복 방지를 제어하는 하이퍼파라미터 설정 노하우를 배웁니다.',
  'LLM API 호출 시 모델에게 역할을 부여하는 **System Message**와 모델의 확률 추론 성향을 세밀하게 조율하는 **하이퍼파라미터(Hyperparameter)**를 제어할 수 있습니다.

---

## 1. 하이퍼파라미터 용어 사전 (Glossary)

- **Temperature (온도)**: 0.0 ~ 2.0 사이의 값으로, 토큰 확률 분포를 조절합니다. 0에 가까우면 가장 확률이 높은 단어만 선택(정밀성), 1에 가까우면 다양한 단어를 선택(창의성)합니다.
- **Top_P (Nucleus Sampling)**: 누적 확률 상위 P% (예: 0.9 = 상위 90%) 범위 안의 단어 후보군 중에서만 선택합니다.
- **Max Tokens**: 단일 API 응답으로 모델이 출력할 수 있는 최대 토큰 자원 한계입니다.
- **Presence Penalty (존재 패널티)**: 이미 생성된 단어가 다시 등장하는 것에 감점을 주어 새로운 주제와 단어로 전환되도록 유도합니다. (0.0 ~ 2.0)
- **Frequency Penalty (빈도 패널티)**: 텍스트 내에서 특정 단어가 반복되는 빈도수에 비례해 감점을 부여하여 동일 단어 도배를 막습니다. (0.0 ~ 2.0)

---

## 2. 작업 목적별 최적 하이퍼파라미터 조합 가이드

| 작업 유형 | Temperature | Top_P | 추천 용도 |
| :--- | :--- | :--- | :--- |
| **정밀 작업** | **0.0 ~ 0.2** | 0.1 | 수학 문제 풀이, 파이썬 코딩, JSON 추출, 번역, 계약서 분석 |
| **일반 대화** | **0.5 ~ 0.7** | 0.9 | 고객 상담 챗봇, 일반 질의응답, 요약 |
| **창의적 작업** | **0.9 ~ 1.2** | 0.95 | 마케팅 카피라이팅, 소설 작성, 브레인스토밍 아이디어 |

```python
# 정밀 데이터 추출을 위한 하이퍼파라미터 조율 예시
response = client.chat.completions.create(
    model="gpt-4o-mini",
    temperature=0.0,       # 결정론적(Deterministic) 정답 유도
    presence_penalty=0.0,
    frequency_penalty=0.5, # 단어 반복 억제
    messages=[
        {"role": "system", "content": "너는 데이터 추출 전문가야."},
        {"role": "user", "content": "텍스트에서 이메일 주소만 정확히 추출해 줘."}
    ]
)
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Temperature를 0.0으로 두면 항상 100% 똑같은 답변이 나오나요?**
A. 이론적으로는 동일한 입력에 동일한 단어가 나와야 하지만, GPU 병렬 연산의 미세한 부동소수점 오차로 인해 실제로는 약간의 차이가 발생할 수 있습니다. (완벽 고정을 위해 `seed` 파라미터 활용 가능)
',
  '<p>LLM API 호출 시 모델에게 역할을 부여하는 <strong>System Message</strong>와 모델의 확률 추론 성향을 세밀하게 조율하는 **하이퍼파라미터(Hyperparameter)**를 제어할 수 있습니다.</p>
<hr>
<h2>1. 하이퍼파라미터 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Temperature (온도)</strong>: 0.0 ~ 2.0 사이의 값으로, 토큰 확률 분포를 조절합니다. 0에 가까우면 가장 확률이 높은 단어만 선택(정밀성), 1에 가까우면 다양한 단어를 선택(창의성)합니다.</li>
<li><strong>Top_P (Nucleus Sampling)</strong>: 누적 확률 상위 P% (예: 0.9 = 상위 90%) 범위 안의 단어 후보군 중에서만 선택합니다.</li>
<li><strong>Max Tokens</strong>: 단일 API 응답으로 모델이 출력할 수 있는 최대 토큰 자원 한계입니다.</li>
<li><strong>Presence Penalty (존재 패널티)</strong>: 이미 생성된 단어가 다시 등장하는 것에 감점을 주어 새로운 주제와 단어로 전환되도록 유도합니다. (0.0 ~ 2.0)</li>
<li><strong>Frequency Penalty (빈도 패널티)</strong>: 텍스트 내에서 특정 단어가 반복되는 빈도수에 비례해 감점을 부여하여 동일 단어 도배를 막습니다. (0.0 ~ 2.0)</li>
</ul>
<hr>
<h2>2. 작업 목적별 최적 하이퍼파라미터 조합 가이드</h2>
<table>
<thead>
<tr>
<th align="left">작업 유형</th>
<th align="left">Temperature</th>
<th align="left">Top_P</th>
<th align="left">추천 용도</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>정밀 작업</strong></td>
<td align="left"><strong>0.0 ~ 0.2</strong></td>
<td align="left">0.1</td>
<td align="left">수학 문제 풀이, 파이썬 코딩, JSON 추출, 번역, 계약서 분석</td>
</tr>
<tr>
<td align="left"><strong>일반 대화</strong></td>
<td align="left"><strong>0.5 ~ 0.7</strong></td>
<td align="left">0.9</td>
<td align="left">고객 상담 챗봇, 일반 질의응답, 요약</td>
</tr>
<tr>
<td align="left"><strong>창의적 작업</strong></td>
<td align="left"><strong>0.9 ~ 1.2</strong></td>
<td align="left">0.95</td>
<td align="left">마케팅 카피라이팅, 소설 작성, 브레인스토밍 아이디어</td>
</tr>
</tbody></table>
<pre><code class="language-python"># 정밀 데이터 추출을 위한 하이퍼파라미터 조율 예시
response = client.chat.completions.create(
    model=&quot;gpt-4o-mini&quot;,
    temperature=0.0,       # 결정론적(Deterministic) 정답 유도
    presence_penalty=0.0,
    frequency_penalty=0.5, # 단어 반복 억제
    messages=[
        {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;너는 데이터 추출 전문가야.&quot;},
        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;텍스트에서 이메일 주소만 정확히 추출해 줘.&quot;}
    ]
)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Temperature를 0.0으로 두면 항상 100% 똑같은 답변이 나오나요?</strong>
A. 이론적으로는 동일한 입력에 동일한 단어가 나와야 하지만, GPU 병렬 연산의 미세한 부동소수점 오차로 인해 실제로는 약간의 차이가 발생할 수 있습니다. (완벽 고정을 위해 <code>seed</code> 파라미터 활용 가능)</p>
',
  'published',
  'LLM 하이퍼파라미터 완전 조율 - Temperature, Top_P, Max Tokens, Presence Penalty',
  '모델의 창의성과 무작위성을 제어하는 Temperature, Top_P, 최대 출력 토큰 제어 Max Tokens, 반복 방지 Presence/Frequency Penalty 하이퍼파라미터를 배웁니다.',
  5,
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
  'ch06-structured-outputs-json',
  '구조화된 데이터 출력 (Structured Output & JSON)',
  'AI 답변을 애플리케이션이나 DB에 오류 없이 파싱할 수 있도록 엄격한 JSON 규격으로 출력시키는 Structured Output 기술을 배웁니다.',
  '생성형 AI를 실제 웹 서비스의 데이터베이스나 백엔드 로직에 연동하려면 텍스트 답변 대신 검증 가능한 규격화된 **JSON 데이터(Structured Output)**로 받아야 합니다.

---

## 1. Structured Output 용어 사전 (Glossary)

- **JSON (JavaScript Object Notation)**: 키-값(Key-Value) 구조로 데이터를 표현하는 국제 경량 표준 데이터 교환 포맷입니다.
- **Pydantic**: 파이썬에서 데이터 구조와 타입을 클래스 형태로 선언하고, 런타임에 자동으로 데이터 유효성을 검증(Validation)해주는 대표적 라이브러리입니다.
- **Structured Outputs**: OpenAI가 도입한 기능으로, 제공된 JSON Schema를 모델이 100% 완벽하게 준수하도록 이진 문법 제약을 거는 기술입니다.

---

## 2. Pydantic 라이브러리 기반 정밀 JSON 데이터 추출

```python
from pydantic import BaseModel, Field
from typing import List, Optional

# 1. Pydantic을 이용한 원하는 출력 스키마 정의
class MovieReviewAnalysis(BaseModel):
    movie_title: str = Field(description="영화 제목")
    rating: float = Field(description="1.0 ~ 5.0 사이의 별점")
    sentiment: str = Field(description="긍정, 부정, 중립 중 하나")
    keywords: List[str] = Field(description="리뷰에서 추출한 핵심 키워드 3개")
    summary: str = Field(description="한 줄 요약")

# 2. OpenAI Structured Output API 호출
completion = client.beta.chat.completions.parse(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "너는 영화 리뷰 데이터 분석 시스템이야."},
        {"role": "user", "content": "인터스텔라 봤는데 우주 연출이 대박이고 음악이 지렸다. 인생작 5점 줌!"}
    ],
    response_format=MovieReviewAnalysis,
)

# 3. 파싱된 객체 바로 사용
result: MovieReviewAnalysis = completion.choices[0].message.parsed
print(f"영화제목: {result.movie_title}")
print(f"평점: {result.rating} / 감정: {result.sentiment}")
print(f"키워드: {result.keywords}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `response_format={"type": "json_object"}`와 `Structured Outputs`의 차이는?**
A. 기존 `json_object` 방식은 JSON 형태로 출력하려 노력하지만 키 이름이 빠지거나 문법이 깨질 확률이 미세하게 존재했습니다. 반면 `Structured Outputs`(Pydantic 스키마 연동)는 스키마 일치율 100%를 보장합니다.
',
  '<p>생성형 AI를 실제 웹 서비스의 데이터베이스나 백엔드 로직에 연동하려면 텍스트 답변 대신 검증 가능한 규격화된 **JSON 데이터(Structured Output)**로 받아야 합니다.</p>
<hr>
<h2>1. Structured Output 용어 사전 (Glossary)</h2>
<ul>
<li><strong>JSON (JavaScript Object Notation)</strong>: 키-값(Key-Value) 구조로 데이터를 표현하는 국제 경량 표준 데이터 교환 포맷입니다.</li>
<li><strong>Pydantic</strong>: 파이썬에서 데이터 구조와 타입을 클래스 형태로 선언하고, 런타임에 자동으로 데이터 유효성을 검증(Validation)해주는 대표적 라이브러리입니다.</li>
<li><strong>Structured Outputs</strong>: OpenAI가 도입한 기능으로, 제공된 JSON Schema를 모델이 100% 완벽하게 준수하도록 이진 문법 제약을 거는 기술입니다.</li>
</ul>
<hr>
<h2>2. Pydantic 라이브러리 기반 정밀 JSON 데이터 추출</h2>
<pre><code class="language-python">from pydantic import BaseModel, Field
from typing import List, Optional

# 1. Pydantic을 이용한 원하는 출력 스키마 정의
class MovieReviewAnalysis(BaseModel):
    movie_title: str = Field(description=&quot;영화 제목&quot;)
    rating: float = Field(description=&quot;1.0 ~ 5.0 사이의 별점&quot;)
    sentiment: str = Field(description=&quot;긍정, 부정, 중립 중 하나&quot;)
    keywords: List[str] = Field(description=&quot;리뷰에서 추출한 핵심 키워드 3개&quot;)
    summary: str = Field(description=&quot;한 줄 요약&quot;)

# 2. OpenAI Structured Output API 호출
completion = client.beta.chat.completions.parse(
    model=&quot;gpt-4o-mini&quot;,
    messages=[
        {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;너는 영화 리뷰 데이터 분석 시스템이야.&quot;},
        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;인터스텔라 봤는데 우주 연출이 대박이고 음악이 지렸다. 인생작 5점 줌!&quot;}
    ],
    response_format=MovieReviewAnalysis,
)

# 3. 파싱된 객체 바로 사용
result: MovieReviewAnalysis = completion.choices[0].message.parsed
print(f&quot;영화제목: {result.movie_title}&quot;)
print(f&quot;평점: {result.rating} / 감정: {result.sentiment}&quot;)
print(f&quot;키워드: {result.keywords}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>response_format={&quot;type&quot;: &quot;json_object&quot;}</code>와 <code>Structured Outputs</code>의 차이는?</strong>
A. 기존 <code>json_object</code> 방식은 JSON 형태로 출력하려 노력하지만 키 이름이 빠지거나 문법이 깨질 확률이 미세하게 존재했습니다. 반면 <code>Structured Outputs</code>(Pydantic 스키마 연동)는 스키마 일치율 100%를 보장합니다.</p>
',
  'published',
  'LLM JSON 파싱 및 Structured Output - Pydantic 기반 정밀 데이터 모델링',
  '자유 텍스트 답변 대신 DB 및 외부 시스템에 직접 삽입 가능한 100% 검증된 JSON 출력(Structured Output)과 Pydantic 파이썬 모델 활용법을 학습합니다.',
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
  '이전 사용자 질문과 답변 기록을 효율적으로 기억하고 이어서 대화하는 대화형 AI 챗봇의 대화 이력(Chat History) 메모리 관리 알고리즘을 배웁니다.',
  'LLM API는 자체적으로 이전 대화를 기억하지 않는 **Stateless(무상태성)** 통신 방식을 사용합니다. 따라서 챗봇이 대화 맥락을 기억하게 하려면 개발자가 이전 대화 기록(**Chat History**)을 배열에 유지하여 매 요청마다 전달해야 합니다.

---

## 1. 대화 이력 용어 사전 (Glossary)

- **Stateless (무상태성)**: API 요청과 요청 사이의 상태나 이전 입력값을 서버가 보관하지 않는 독립적 통신 특성입니다.
- **Multi-turn (멀티턴 대화)**: 한 번의 질의응답으로 끝나지 않고, 이전 대화 맥락을 계속 참조하며 연속적으로 이어지는 대화 형태입니다.
- **Sliding Window Memory**: 대화 턴(Turn)이 늘어날 때 토큰 수 한도를 넘지 않도록 최신 N개의 대화 이력만 잘라서 유지하는 전략입니다.
- **Summary Memory**: 오래된 대화 이력을 LLM을 통해 축약 문장으로 요약하여 컨텍스트 상단에 주입하는 메모리 절약 전략입니다.

---

## 2. 슬라이딩 윈도우 대화 메모리 파이썬 챗봇 클래스

```python
class MemoryChatbot:
    def __init__(self, client, max_history_turns=5):
        self.client = client
        self.max_turns = max_history_turns
        self.system_message = {"role": "system", "content": "너는 DAVHAVE의 다정한 AI 상담사야."}
        self.history = [] # 대화 기록 저장소

    def chat(self, user_input):
        # 1. 사용자 메시지 추가
        self.history.append({"role": "user", "content": user_input})

        # 2. 슬라이딩 윈도우 적용 (최신 N개 턴만 슬라이싱)
        recent_history = self.history[-(self.max_turns * 2):]
        full_messages = [self.system_message] + recent_history

        # 3. API 호출
        response = self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=full_messages
        )

        bot_reply = response.choices[0].message.content
        self.history.append({"role": "assistant", "content": bot_reply})
        return bot_reply

# 챗봇 사용 테스트
bot = MemoryChatbot(client, max_history_turns=3)
print(bot.chat("안녕! 나는 서울에 사는 개발자 인상이야."))
print(bot.chat("내가 어디에 산다고 했지?")) # "서울에 사신다고 하셨어요!" 정답 출력
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 다수의 웹 사용자가 동시에 접속할 때 대화 이력은 어떻게 구분하나요?**
A. 사용자별로 고유한 `session_id` (UUID)를 발급하고, Redis나 데이터베이스에 `session_id`를 키로 하여 대화 기록 리스트를 분리 관리해야 합니다.
',
  '<p>LLM API는 자체적으로 이전 대화를 기억하지 않는 <strong>Stateless(무상태성)</strong> 통신 방식을 사용합니다. 따라서 챗봇이 대화 맥락을 기억하게 하려면 개발자가 이전 대화 기록(<strong>Chat History</strong>)을 배열에 유지하여 매 요청마다 전달해야 합니다.</p>
<hr>
<h2>1. 대화 이력 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Stateless (무상태성)</strong>: API 요청과 요청 사이의 상태나 이전 입력값을 서버가 보관하지 않는 독립적 통신 특성입니다.</li>
<li><strong>Multi-turn (멀티턴 대화)</strong>: 한 번의 질의응답으로 끝나지 않고, 이전 대화 맥락을 계속 참조하며 연속적으로 이어지는 대화 형태입니다.</li>
<li><strong>Sliding Window Memory</strong>: 대화 턴(Turn)이 늘어날 때 토큰 수 한도를 넘지 않도록 최신 N개의 대화 이력만 잘라서 유지하는 전략입니다.</li>
<li><strong>Summary Memory</strong>: 오래된 대화 이력을 LLM을 통해 축약 문장으로 요약하여 컨텍스트 상단에 주입하는 메모리 절약 전략입니다.</li>
</ul>
<hr>
<h2>2. 슬라이딩 윈도우 대화 메모리 파이썬 챗봇 클래스</h2>
<pre><code class="language-python">class MemoryChatbot:
    def __init__(self, client, max_history_turns=5):
        self.client = client
        self.max_turns = max_history_turns
        self.system_message = {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;너는 DAVHAVE의 다정한 AI 상담사야.&quot;}
        self.history = [] # 대화 기록 저장소

    def chat(self, user_input):
        # 1. 사용자 메시지 추가
        self.history.append({&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: user_input})

        # 2. 슬라이딩 윈도우 적용 (최신 N개 턴만 슬라이싱)
        recent_history = self.history[-(self.max_turns * 2):]
        full_messages = [self.system_message] + recent_history

        # 3. API 호출
        response = self.client.chat.completions.create(
            model=&quot;gpt-4o-mini&quot;,
            messages=full_messages
        )

        bot_reply = response.choices[0].message.content
        self.history.append({&quot;role&quot;: &quot;assistant&quot;, &quot;content&quot;: bot_reply})
        return bot_reply

# 챗봇 사용 테스트
bot = MemoryChatbot(client, max_history_turns=3)
print(bot.chat(&quot;안녕! 나는 서울에 사는 개발자 인상이야.&quot;))
print(bot.chat(&quot;내가 어디에 산다고 했지?&quot;)) # &quot;서울에 사신다고 하셨어요!&quot; 정답 출력
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 다수의 웹 사용자가 동시에 접속할 때 대화 이력은 어떻게 구분하나요?</strong>
A. 사용자별로 고유한 <code>session_id</code> (UUID)를 발급하고, Redis나 데이터베이스에 <code>session_id</code>를 키로 하여 대화 기록 리스트를 분리 관리해야 합니다.</p>
',
  'published',
  '대화형 AI 챗봇 개발 - 대화 이력(Chat History) 메모리 관리 및 슬라이딩 윈도우',
  '무상태성(Stateless) LLM API에 이전 대화 내용(Chat History)을 기억시키는 멀티턴 대화 구조, 세션 관리 및 메모리 초과 방지 슬라이딩 윈도우 전략을 학습합니다.',
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
  'LLM이 실시간 날씨, 계산기, DB 조회 등 파이썬 외부 도구를 스스로 판단하여 선택하고 호출하는 Function Calling 기반 자율 에이전트를 구축합니다.',
  '**함수 호출(Function Calling)**은 LLM이 직접 대답할 수 없는 실시간 데이터(날씨, 주가, DB 조회, 외부 API)가 필요할 때, 어떤 파이썬 함수를 호출해야 하는지 스스로 판단하여 매개변수 JSON을 반환하는 기술입니다.

---

## 1. Function Calling & Agent 용어 사전 (Glossary)

- **Function Calling**: LLM이 질문을 분석하여 미리 정의된 도구(Tools) 목록 중 필요한 함수 이름과 전달 인자(Arguments)를 도출해내는 기능입니다.
- **AI Agent (자율 AI 에이전트)**: 스스로 목표(Goal)를 이해하고, 계획(Plan)을 세우며, 주도적으로 도구를 호출해 결과를 종합하는 지능형 시스템입니다.
- **ReAct Framework (Reasoning + Acting)**: "생각(Thought) -> 행동(Action) -> 관찰(Observation)"의 루프를 반복하여 문제를 해결하는 에이전트 핵심 아키텍처입니다.

---

## 2. 파이썬 Function Calling 풀 루프 구현 코드

```python
import json

# 1. 실제 실행될 파이썬 외부 함수 정의
def get_stock_price(ticker):
    prices = {"AAPL": "$225.50", "NVDA": "$130.20", "005930.KS": "75,000원"}
    return json.dumps({"ticker": ticker, "price": prices.get(ticker, "알수없음")})

# 2. LLM에 바인딩할 도구 명세서(Tools) 정의
tools = [{
    "type": "function",
    "function": {
        "name": "get_stock_price",
        "description": "주식 티커 심볼을 받아 현재 실시간 주가를 조회합니다.",
        "parameters": {
            "type": "object",
            "properties": {
                "ticker": {"type": "string", "description": "주식 티커 (예: AAPL, NVDA)"}
            },
            "required": ["ticker"]
        }
    }
}]

# 3. 1차 API 호출 (LLM이 함수 호출 필요성을 판단)
messages = [{"role": "user", "content": "엔비디아(NVDA) 현재 주가 좀 알려줘"}]
response = client.chat.completions.create(model="gpt-4o-mini", messages=messages, tools=tools)

tool_call = response.choices[0].message.tool_calls[0]
print(f"AI의 판단: {tool_call.function.name} 함수를 인자 {tool_call.function.arguments} 로 호출할 것.")

# 4. 실제 파이썬 함수 실행 후 2차 API 호출로 최종 답변 완성
args = json.loads(tool_call.function.arguments)
result_json = get_stock_price(args["ticker"])

messages.append(response.choices[0].message) # AI의 tool_call 요청 저장
messages.append({"role": "tool", "tool_call_id": tool_call.id, "content": result_json})

final_response = client.chat.completions.create(model="gpt-4o-mini", messages=messages)
print("최종 응답:", final_response.choices[0].message.content)
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. LLM이 무한히 루프를 돌며 나쁜 함수를 실행할 위험은 없나요?**
A. 에이전트 구축 시 최대 도구 실행 횟수(예: `max_iterations=5`) 제약 조건을 걸어야 하며, 데이터 삭제/결제 같은 위험한 함수 실행 전에는 사람의 승인(Human-in-the-loop)을 받도록 설계해야 합니다.
',
  '<p>**함수 호출(Function Calling)**은 LLM이 직접 대답할 수 없는 실시간 데이터(날씨, 주가, DB 조회, 외부 API)가 필요할 때, 어떤 파이썬 함수를 호출해야 하는지 스스로 판단하여 매개변수 JSON을 반환하는 기술입니다.</p>
<hr>
<h2>1. Function Calling &amp; Agent 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Function Calling</strong>: LLM이 질문을 분석하여 미리 정의된 도구(Tools) 목록 중 필요한 함수 이름과 전달 인자(Arguments)를 도출해내는 기능입니다.</li>
<li><strong>AI Agent (자율 AI 에이전트)</strong>: 스스로 목표(Goal)를 이해하고, 계획(Plan)을 세우며, 주도적으로 도구를 호출해 결과를 종합하는 지능형 시스템입니다.</li>
<li><strong>ReAct Framework (Reasoning + Acting)</strong>: &quot;생각(Thought) -&gt; 행동(Action) -&gt; 관찰(Observation)&quot;의 루프를 반복하여 문제를 해결하는 에이전트 핵심 아키텍처입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 Function Calling 풀 루프 구현 코드</h2>
<pre><code class="language-python">import json

# 1. 실제 실행될 파이썬 외부 함수 정의
def get_stock_price(ticker):
    prices = {&quot;AAPL&quot;: &quot;$225.50&quot;, &quot;NVDA&quot;: &quot;$130.20&quot;, &quot;005930.KS&quot;: &quot;75,000원&quot;}
    return json.dumps({&quot;ticker&quot;: ticker, &quot;price&quot;: prices.get(ticker, &quot;알수없음&quot;)})

# 2. LLM에 바인딩할 도구 명세서(Tools) 정의
tools = [{
    &quot;type&quot;: &quot;function&quot;,
    &quot;function&quot;: {
        &quot;name&quot;: &quot;get_stock_price&quot;,
        &quot;description&quot;: &quot;주식 티커 심볼을 받아 현재 실시간 주가를 조회합니다.&quot;,
        &quot;parameters&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
                &quot;ticker&quot;: {&quot;type&quot;: &quot;string&quot;, &quot;description&quot;: &quot;주식 티커 (예: AAPL, NVDA)&quot;}
            },
            &quot;required&quot;: [&quot;ticker&quot;]
        }
    }
}]

# 3. 1차 API 호출 (LLM이 함수 호출 필요성을 판단)
messages = [{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;엔비디아(NVDA) 현재 주가 좀 알려줘&quot;}]
response = client.chat.completions.create(model=&quot;gpt-4o-mini&quot;, messages=messages, tools=tools)

tool_call = response.choices[0].message.tool_calls[0]
print(f&quot;AI의 판단: {tool_call.function.name} 함수를 인자 {tool_call.function.arguments} 로 호출할 것.&quot;)

# 4. 실제 파이썬 함수 실행 후 2차 API 호출로 최종 답변 완성
args = json.loads(tool_call.function.arguments)
result_json = get_stock_price(args[&quot;ticker&quot;])

messages.append(response.choices[0].message) # AI의 tool_call 요청 저장
messages.append({&quot;role&quot;: &quot;tool&quot;, &quot;tool_call_id&quot;: tool_call.id, &quot;content&quot;: result_json})

final_response = client.chat.completions.create(model=&quot;gpt-4o-mini&quot;, messages=messages)
print(&quot;최종 응답:&quot;, final_response.choices[0].message.content)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. LLM이 무한히 루프를 돌며 나쁜 함수를 실행할 위험은 없나요?</strong>
A. 에이전트 구축 시 최대 도구 실행 횟수(예: <code>max_iterations=5</code>) 제약 조건을 걸어야 하며, 데이터 삭제/결제 같은 위험한 함수 실행 전에는 사람의 승인(Human-in-the-loop)을 받도록 설계해야 합니다.</p>
',
  'published',
  'Function Calling과 AI 에이전트 - LLM 외부 API 연동 및 자율 도구 실행',
  'LLM이 직접 대답할 수 없는 실시간 정보(날씨, 주가, DB 조회)가 필요할 때 파이썬 함수를 스스로 호출하는 Function Calling 기법과 AI 에이전트 구조를 해설합니다.',
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
