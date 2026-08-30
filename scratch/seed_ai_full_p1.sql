-- Full AI Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch01-ai-llm-introduction',
  '생성형 AI와 거대언어모델(LLM) 및 구글 코랩 입문',
  '생성형 AI와 거대언어모델(LLM)의 핵심 개념을 파악하고, 파이썬 기반 AI 개발을 위한 무료 클라우드 환경 구글 코랩(Google Colab)의 기초를 다집니다.',
  '**생성형 AI(Generative AI)**는 텍스트, 이미지, 음성, 코드 등 새로운 콘텐츠를 스스로 생성해내는 인공지능 기술입니다. 그 중심에는 인간의 언어를 이해하고 생성하는 **거대언어모델(LLM, Large Language Model)**이 있습니다.

---

## 1. 생성형 AI & LLM 전문 용어 사전 (Glossary)

- **LLM (Large Language Model)**: 수천억 개 이상의 매개변수(Parameter)를 바탕으로 방대한 문헌 데이터를 학습한 거대 신경망 모델입니다.
- **Transformer (트랜스포머)**: 2017년 구글이 발표한 ''Attention Is All You Need'' 논문 기반의 신경망 아키텍처로, 문맥 전체의 관계를 동시에 파악하는 Self-Attention 기법을 활용합니다.
- **Token (토큰)**: LLM이 텍스트를 처리하는 최소 글자/단어 단위입니다. (영어는 약 4글자당 1토큰, 한국어는 1글자당 1~3토큰)
- **Parameter (매개변수/파라미터)**: AI 모델 내부의 가중치(Weight) 집합으로, 파라미터 수가 클수록 정교한 추론 능력을 가집니다.
- **Hallucination (환각 현상)**: 모델이 사실이 아닌 내용을 그럴듯하게 거짓으로 지어내어 답변하는 현상입니다.

---

## 2. LLM의 동작 메커니즘과 주요 모델 비교

LLM은 이전 단어들을 바탕으로 **"다음에 올 가장 확률이 높은 단어(Next-Token Prediction)"를 예측**하는 방식으로 문장을 완성합니다.

| 주요 LLM 모델 | 개발사 | 대표 특징 및 강점 |
| :--- | :--- | :--- |
| **GPT-4o / GPT-4o-mini** | OpenAI | 최고 수준의 멀티모달(텍스트/이미지/음성) 처리 및 압도적 한국어 성능 |
| **Gemini 1.5 Pro / Flash** | Google | 최대 200만 토큰의 압도적 롱 컨텍스트(Long-Context) 및 무료 API 지원 |
| **Claude 3.5 Sonnet** | Anthropic | 뛰어난 코딩, 글쓰기 및 코딩 에이전트(Artifacts) 능력 |
| **Llama 3.1 / 3.2** | Meta | 대표적인 오픈소스(Open-Weights) 모델로 자사 서버 구축 가능 |

---

## 3. 무료 AI 실습 환경: 구글 코랩 (Google Colab)

별도의 파이썬 설치 없이 웹 브라우저에서 곧바로 Jupyter Notebook 환경을 무료로 사용할 수 있는 서비스입니다.

### 구글 코랩 시작하기 3단계
1. [Google Colab 접속](https://colab.research.google.com/) 후 구글 계정 로그인.
2. **[새 노트]** 클릭하여 파이썬 코딩 창 생성.
3. 코드 셀에 파이썬 코드 입력 후 `Shift + Enter` 로 즉시 실행.

```python
# 코랩 파이썬 실행 테스트
import sys
print(f"Python Version: {sys.version}")
print("Hello, DAVHAVE Generative AI World!")
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파이썬 초보자도 LLM API 개발을 시작할 수 있나요?**
A. 네! 최근 LLM 라이브러리(`openai`, `google-generativeai`)는 몇 줄의 파이썬 코드만으로도 강력한 AI 모델을 호출할 수 있어 입문하기 매우 좋습니다.
',
  '<p>**생성형 AI(Generative AI)**는 텍스트, 이미지, 음성, 코드 등 새로운 콘텐츠를 스스로 생성해내는 인공지능 기술입니다. 그 중심에는 인간의 언어를 이해하고 생성하는 **거대언어모델(LLM, Large Language Model)**이 있습니다.</p>
<hr>
<h2>1. 생성형 AI &amp; LLM 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>LLM (Large Language Model)</strong>: 수천억 개 이상의 매개변수(Parameter)를 바탕으로 방대한 문헌 데이터를 학습한 거대 신경망 모델입니다.</li>
<li><strong>Transformer (트랜스포머)</strong>: 2017년 구글이 발표한 &#39;Attention Is All You Need&#39; 논문 기반의 신경망 아키텍처로, 문맥 전체의 관계를 동시에 파악하는 Self-Attention 기법을 활용합니다.</li>
<li><strong>Token (토큰)</strong>: LLM이 텍스트를 처리하는 최소 글자/단어 단위입니다. (영어는 약 4글자당 1토큰, 한국어는 1글자당 1~3토큰)</li>
<li><strong>Parameter (매개변수/파라미터)</strong>: AI 모델 내부의 가중치(Weight) 집합으로, 파라미터 수가 클수록 정교한 추론 능력을 가집니다.</li>
<li><strong>Hallucination (환각 현상)</strong>: 모델이 사실이 아닌 내용을 그럴듯하게 거짓으로 지어내어 답변하는 현상입니다.</li>
</ul>
<hr>
<h2>2. LLM의 동작 메커니즘과 주요 모델 비교</h2>
<p>LLM은 이전 단어들을 바탕으로 <strong>&quot;다음에 올 가장 확률이 높은 단어(Next-Token Prediction)&quot;를 예측</strong>하는 방식으로 문장을 완성합니다.</p>
<table>
<thead>
<tr>
<th align="left">주요 LLM 모델</th>
<th align="left">개발사</th>
<th align="left">대표 특징 및 강점</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>GPT-4o / GPT-4o-mini</strong></td>
<td align="left">OpenAI</td>
<td align="left">최고 수준의 멀티모달(텍스트/이미지/음성) 처리 및 압도적 한국어 성능</td>
</tr>
<tr>
<td align="left"><strong>Gemini 1.5 Pro / Flash</strong></td>
<td align="left">Google</td>
<td align="left">최대 200만 토큰의 압도적 롱 컨텍스트(Long-Context) 및 무료 API 지원</td>
</tr>
<tr>
<td align="left"><strong>Claude 3.5 Sonnet</strong></td>
<td align="left">Anthropic</td>
<td align="left">뛰어난 코딩, 글쓰기 및 코딩 에이전트(Artifacts) 능력</td>
</tr>
<tr>
<td align="left"><strong>Llama 3.1 / 3.2</strong></td>
<td align="left">Meta</td>
<td align="left">대표적인 오픈소스(Open-Weights) 모델로 자사 서버 구축 가능</td>
</tr>
</tbody></table>
<hr>
<h2>3. 무료 AI 실습 환경: 구글 코랩 (Google Colab)</h2>
<p>별도의 파이썬 설치 없이 웹 브라우저에서 곧바로 Jupyter Notebook 환경을 무료로 사용할 수 있는 서비스입니다.</p>
<h3>구글 코랩 시작하기 3단계</h3>
<ol>
<li><a href="https://colab.research.google.com/">Google Colab 접속</a> 후 구글 계정 로그인.</li>
<li><strong>[새 노트]</strong> 클릭하여 파이썬 코딩 창 생성.</li>
<li>코드 셀에 파이썬 코드 입력 후 <code>Shift + Enter</code> 로 즉시 실행.</li>
</ol>
<pre><code class="language-python"># 코랩 파이썬 실행 테스트
import sys
print(f&quot;Python Version: {sys.version}&quot;)
print(&quot;Hello, DAVHAVE Generative AI World!&quot;)
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬 초보자도 LLM API 개발을 시작할 수 있나요?</strong>
A. 네! 최근 LLM 라이브러리(<code>openai</code>, <code>google-generativeai</code>)는 몇 줄의 파이썬 코드만으로도 강력한 AI 모델을 호출할 수 있어 입문하기 매우 좋습니다.</p>
',
  'published',
  '생성형 AI와 LLM 개념 이해 - ChatGPT, Gemini 및 구글 코랩 환경 구축',
  '인공지능과 생성형 AI의 차이, 거대언어모델(LLM)의 동작 원리, 트랜스포머 아키텍처 및 클라우드 파이썬 실습 환경인 구글 코랩(Google Colab) 사용법을 안내합니다.',
  1,
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
  'ch02-prompt-engineering-principles',
  '프롬프트 엔지니어링의 핵심 4대 원칙',
  'AI 모델에 던지는 명령어인 프롬프트(Prompt)를 효과적으로 설계하여 답변의 품질을 10배 이상 올리는 4가지 핵심 작성 원칙을 다룹니다.',
  '**프롬프트 엔지니어링(Prompt Engineering)**이란 생성형 AI 모델이 의도에 정확히 부합하는 최상의 결과물을 출력하도록 지시문(Prompt)을 정교하게 설계하는 기술입니다.

---

## 1. 프롬프트 핵심 용어 사전 (Glossary)

- **System Prompt (시스템 프롬프트)**: AI 모델의 역할, 행동 규칙, 금지 사항을 상위 수준에서 통제하는 지시문입니다.
- **User Prompt (사용자 프롬프트)**: 사용자가 AI에게 던지는 직접적인 질문이나 요청 사항입니다.
- **Context (맥락/배경 지식)**: AI가 올바른 판단을 하도록 돕기 위해 프롬프트 내에 제공하는 배경 정보입니다.
- **Delimiters (구분자)**: `"""` 나 `###` 처럼 프롬프트 내에서 지시 사항과 입력 데이터 구역을 명확히 가르는 기호입니다.

---

## 2. 프롬프트 작성 4대 핵심 원칙

### 원칙 1: 명확하고 구체적으로 지시하라 (Clarity & Specificity)
모호한 질문 대신 원하는 결과물의 조건, 대상, 길이를 명확히 지정합니다.
- ❌ 나쁜 프롬프트: "마케팅 글 써줘."
- ⭕ 좋은 프롬프트: "20대 대학생을 대상으로 한 친환경 텀블러 블로그 홍보 글을 300자 이내로 친근한 어조로 작성해 줘."

### 원칙 2: 풍부한 배경 맥락(Context)을 제공하라
AI가 왜 이 작업을 해야 하는지 목적과 상황을 충분히 알려줍니다.
- "우리 회사는 B2B SaaS 기업이며, 신규 기능 출시 이메일을 기존 고객에게 발송하려고 해..."

### 원칙 3: 원하는 출력 형식(Format)을 지정하라
- "답변은 반드시 Markdown 표(Table) 형태로 3가지 항목(장점, 단점, 가격)으로 정리해 줘."

### 원칙 4: 페르소나(Persona/Role)를 부여하라
- "너는 15년 차 최고의 수석 소프트웨어 아키텍트야. 신입 개발자 눈높이에 맞춰 설명해 줘."

---

## 3. 실전 프롬프트 구조 템플릿

```markdown
[역할] 너는 전문 IT 커리어 컨설턴트야.
[목적] 지원자의 개발자 이력서를 검토하고 피드백을 제공하는 거야.
[맥락] 지원자는 신입 프론트엔드 개발자이며, React 프로젝트 경험 2개가 있어.
[출력 형식] 
1. 강점 (2가지)
2. 개선할 점 (2가지)
3. 추천 기술 스택 (bullet point)
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 한국어로 물어보는 것과 영어로 프롬프트를 작성하는 것에 차이가 있나요?**
A. 대부분의 최신 LLM은 영문 데이터로 가장 많이 학습되었으므로, 영어로 작성 시 답변 속도 및 복잡한 논리 처리 성능이 10~20% 높습니다. 하지만 최근 GPT-4o나 Gemini 1.5는 한국어 능력도 매우 훌륭합니다.
',
  '<p>**프롬프트 엔지니어링(Prompt Engineering)**이란 생성형 AI 모델이 의도에 정확히 부합하는 최상의 결과물을 출력하도록 지시문(Prompt)을 정교하게 설계하는 기술입니다.</p>
<hr>
<h2>1. 프롬프트 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>System Prompt (시스템 프롬프트)</strong>: AI 모델의 역할, 행동 규칙, 금지 사항을 상위 수준에서 통제하는 지시문입니다.</li>
<li><strong>User Prompt (사용자 프롬프트)</strong>: 사용자가 AI에게 던지는 직접적인 질문이나 요청 사항입니다.</li>
<li><strong>Context (맥락/배경 지식)</strong>: AI가 올바른 판단을 하도록 돕기 위해 프롬프트 내에 제공하는 배경 정보입니다.</li>
<li><strong>Delimiters (구분자)</strong>: <code>&quot;&quot;&quot;</code> 나 <code>###</code> 처럼 프롬프트 내에서 지시 사항과 입력 데이터 구역을 명확히 가르는 기호입니다.</li>
</ul>
<hr>
<h2>2. 프롬프트 작성 4대 핵심 원칙</h2>
<h3>원칙 1: 명확하고 구체적으로 지시하라 (Clarity &amp; Specificity)</h3>
<p>모호한 질문 대신 원하는 결과물의 조건, 대상, 길이를 명확히 지정합니다.</p>
<ul>
<li>❌ 나쁜 프롬프트: &quot;마케팅 글 써줘.&quot;</li>
<li>⭕ 좋은 프롬프트: &quot;20대 대학생을 대상으로 한 친환경 텀블러 블로그 홍보 글을 300자 이내로 친근한 어조로 작성해 줘.&quot;</li>
</ul>
<h3>원칙 2: 풍부한 배경 맥락(Context)을 제공하라</h3>
<p>AI가 왜 이 작업을 해야 하는지 목적과 상황을 충분히 알려줍니다.</p>
<ul>
<li>&quot;우리 회사는 B2B SaaS 기업이며, 신규 기능 출시 이메일을 기존 고객에게 발송하려고 해...&quot;</li>
</ul>
<h3>원칙 3: 원하는 출력 형식(Format)을 지정하라</h3>
<ul>
<li>&quot;답변은 반드시 Markdown 표(Table) 형태로 3가지 항목(장점, 단점, 가격)으로 정리해 줘.&quot;</li>
</ul>
<h3>원칙 4: 페르소나(Persona/Role)를 부여하라</h3>
<ul>
<li>&quot;너는 15년 차 최고의 수석 소프트웨어 아키텍트야. 신입 개발자 눈높이에 맞춰 설명해 줘.&quot;</li>
</ul>
<hr>
<h2>3. 실전 프롬프트 구조 템플릿</h2>
<pre><code class="language-markdown">[역할] 너는 전문 IT 커리어 컨설턴트야.
[목적] 지원자의 개발자 이력서를 검토하고 피드백을 제공하는 거야.
[맥락] 지원자는 신입 프론트엔드 개발자이며, React 프로젝트 경험 2개가 있어.
[출력 형식] 
1. 강점 (2가지)
2. 개선할 점 (2가지)
3. 추천 기술 스택 (bullet point)
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 한국어로 물어보는 것과 영어로 프롬프트를 작성하는 것에 차이가 있나요?</strong>
A. 대부분의 최신 LLM은 영문 데이터로 가장 많이 학습되었으므로, 영어로 작성 시 답변 속도 및 복잡한 논리 처리 성능이 10~20% 높습니다. 하지만 최근 GPT-4o나 Gemini 1.5는 한국어 능력도 매우 훌륭합니다.</p>
',
  'published',
  '프롬프트 엔지니어링 기초 - 원하는 답변을 얻는 4가지 핵심 작성 원칙',
  'LLM에게 원하는 정확한 답변을 유도하는 프롬프트 엔지니어링 4대 원칙(명확성, 맥락 제공, 출력 형식 지정, 페르소나 부여)을 비교 예제와 학습합니다.',
  2,
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
  'ch03-advanced-prompting-techniques',
  '고급 프롬프팅 기법 (Few-Shot, Chain-of-Thought)',
  '예시 입출력을 전달하는 Few-Shot 프롬프팅과 AI가 단계별로 논리적으로 생각하게 만드는 Chain-of-Thought(CoT) 고급 기법을 다룹니다.',
  '단순한 질문을 넘어서 complex한 문제 해결 및 정확한 분류 작업을 수행할 때는 **고급 프롬프팅 기법**을 활용해야 합니다.

---

## 1. 고급 프롬프팅 용어 사전 (Glossary)

- **Zero-Shot Prompting**: 예시 데이터 없이 지시문만으로 즉시 답변을 요청하는 기본 방식입니다.
- **Few-Shot Prompting**: 원하는 결과의 입력과 출력 예시(Example)를 1개 이상 제시하여 AI가 패턴을 유추하도록 돕는 프롬프팅입니다.
- **Chain-of-Thought (CoT, 생각의 사슬)**: 중간 추론 과정을 단계별로 서술하도록 유도하여 복잡한 계산이나 논리 문제의 정답률을 올리는 기법입니다.
- **Prompt Chaining**: 거대한 작업을 여러 개의 작은 프롬프트 단계로 쪼개어 앞 단계의 출력을 다음 단계의 입력으로 전달하는 모듈화 기법입니다.

---

## 2. Few-Shot Prompting 실전 예시

```markdown
[Few-Shot 예시]
다음 감정 상태를 분석해 줘.

입력: "오늘 주문한 상품이 깨져서 왔어요. 너무 화나요!" -> 감정: 부적절/분노
입력: "배송도 빠르고 서비스도 친절해서 만족합니다." -> 감정: 긍정/만족
입력: "제품 성능은 보통인 것 같네요." -> 감정: 중립

입력: "액정이 안 켜지는데 어떻게 해야 하나요?" -> 감정:
```

---

## 3. 생각의 사슬: Chain-of-Thought (CoT)

복잡한 산수, 논리 퀴즈, 코드 분석 문제에서 **"단계별로 차근차근 생각해 보자(Let''s think step by step)"** 구문을 넣어주면 AI의 정답률이 획기적으로 올라갑니다.

### CoT 프롬프트 예시
```markdown
Q: 식당에 테이블이 5개 있습니다. 각 테이블마다 의자가 4개씩 있고, 스태프용 의자가 2개 더 있습니다. 
의자 3개가 부러져서 버렸다면, 현재 쓸 수 있는 의자는 총 몇 개인가요?

단계별로 생각을 정리하여 풀어주세요:
1. 전체 의자 수 계산
2. 부러진 의자 수 차감
3. 최종 답 제출
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Few-Shot 예시를 너무 많이 넣으면 안 되나요?**
A. 예시가 많을수록 정확도는 올라가지만, 모델의 토큰(Token) 비용이 증가하고 입력 컨텍스트 길이가 길어져 핵심 지시문이 묻힐 수 있으므로 2~5개 예시가 가장 적절합니다.
',
  '<p>단순한 질문을 넘어서 complex한 문제 해결 및 정확한 분류 작업을 수행할 때는 <strong>고급 프롬프팅 기법</strong>을 활용해야 합니다.</p>
<hr>
<h2>1. 고급 프롬프팅 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Zero-Shot Prompting</strong>: 예시 데이터 없이 지시문만으로 즉시 답변을 요청하는 기본 방식입니다.</li>
<li><strong>Few-Shot Prompting</strong>: 원하는 결과의 입력과 출력 예시(Example)를 1개 이상 제시하여 AI가 패턴을 유추하도록 돕는 프롬프팅입니다.</li>
<li><strong>Chain-of-Thought (CoT, 생각의 사슬)</strong>: 중간 추론 과정을 단계별로 서술하도록 유도하여 복잡한 계산이나 논리 문제의 정답률을 올리는 기법입니다.</li>
<li><strong>Prompt Chaining</strong>: 거대한 작업을 여러 개의 작은 프롬프트 단계로 쪼개어 앞 단계의 출력을 다음 단계의 입력으로 전달하는 모듈화 기법입니다.</li>
</ul>
<hr>
<h2>2. Few-Shot Prompting 실전 예시</h2>
<pre><code class="language-markdown">[Few-Shot 예시]
다음 감정 상태를 분석해 줘.

입력: &quot;오늘 주문한 상품이 깨져서 왔어요. 너무 화나요!&quot; -&gt; 감정: 부적절/분노
입력: &quot;배송도 빠르고 서비스도 친절해서 만족합니다.&quot; -&gt; 감정: 긍정/만족
입력: &quot;제품 성능은 보통인 것 같네요.&quot; -&gt; 감정: 중립

입력: &quot;액정이 안 켜지는데 어떻게 해야 하나요?&quot; -&gt; 감정:
</code></pre>
<hr>
<h2>3. 생각의 사슬: Chain-of-Thought (CoT)</h2>
<p>복잡한 산수, 논리 퀴즈, 코드 분석 문제에서 <strong>&quot;단계별로 차근차근 생각해 보자(Let&#39;s think step by step)&quot;</strong> 구문을 넣어주면 AI의 정답률이 획기적으로 올라갑니다.</p>
<h3>CoT 프롬프트 예시</h3>
<pre><code class="language-markdown">Q: 식당에 테이블이 5개 있습니다. 각 테이블마다 의자가 4개씩 있고, 스태프용 의자가 2개 더 있습니다. 
의자 3개가 부러져서 버렸다면, 현재 쓸 수 있는 의자는 총 몇 개인가요?

단계별로 생각을 정리하여 풀어주세요:
1. 전체 의자 수 계산
2. 부러진 의자 수 차감
3. 최종 답 제출
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Few-Shot 예시를 너무 많이 넣으면 안 되나요?</strong>
A. 예시가 많을수록 정확도는 올라가지만, 모델의 토큰(Token) 비용이 증가하고 입력 컨텍스트 길이가 길어져 핵심 지시문이 묻힐 수 있으므로 2~5개 예시가 가장 적절합니다.</p>
',
  'published',
  '고급 프롬프트 엔지니어링 - Few-Shot Prompting과 Chain-of-Thought(CoT)',
  '예시를 주고 학습시키는 Zero-Shot vs Few-Shot Prompting, AI의 추론 성능을 향상시키는 생각의 사슬(Chain-of-Thought) 기법을 배웁니다.',
  3,
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
  'ch04-llm-api-setup-and-key',
  '파이썬으로 시작하는 LLM API 연동',
  '파이썬 코드에서 OpenAI(GPT-4o) 및 Google Gemini API를 호출하기 위한 API 키 발급, 환경 설정 및 첫 API 호출 실습을 진행합니다.',
  '웹 사이트나 웹 앱에 생성형 AI 기능을 연동하려면 **API(Application Programming Interface)**를 통해 파이썬 코드에서 LLM을 호출해야 합니다.

---

## 1. API 연동 핵심 용어 사전 (Glossary)

- **API Key**: API 서비스 이용자 식별 및 인증을 위해 발급되는 비밀 암호 키입니다.
- **SDK (Software Development Kit)**: 특정 API를 파이썬 등 프로그래밍 언어에서 간편히 쓸 수 있도록 패키징한 라이브러리입니다. (예: `openai`, `google-generativeai`)
- **Environment Variable (환경변수)**: 보안 소스코드 외부에 비밀 키나 매개변수를 보관하는 시스템 변수 방식입니다. (`python-dotenv` 사용)

---

## 2. OpenAI 및 Gemini API 키 발급 및 파이썬 코드

### 구글 코랩에 패키지 설치
```bash
!pip install -q openai google-generativeai python-dotenv
```

### OpenAI API 파이썬 호출 예제
```python
from openai import OpenAI

# Client 객체 생성
client = OpenAI(api_key="YOUR_OPENAI_API_KEY")

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "파이썬으로 웹 크롤링하는 법을 한 줄로 요약해줘."}
    ]
)

print(response.choices[0].message.content)
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. API 키를 소스 코드에 직접 하드코딩하지 않고 안전하게 관리하려면?**
A. `.env` 파일이나 구글 코랩의 **[Secrets (열쇠 아이콘)]** 기능을 이용해 환경변수(`os.environ["OPENAI_API_KEY"]`)로 읽어들이는 것이 보안 표준입니다.
',
  '<p>웹 사이트나 웹 앱에 생성형 AI 기능을 연동하려면 **API(Application Programming Interface)**를 통해 파이썬 코드에서 LLM을 호출해야 합니다.</p>
<hr>
<h2>1. API 연동 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>API Key</strong>: API 서비스 이용자 식별 및 인증을 위해 발급되는 비밀 암호 키입니다.</li>
<li><strong>SDK (Software Development Kit)</strong>: 특정 API를 파이썬 등 프로그래밍 언어에서 간편히 쓸 수 있도록 패키징한 라이브러리입니다. (예: <code>openai</code>, <code>google-generativeai</code>)</li>
<li><strong>Environment Variable (환경변수)</strong>: 보안 소스코드 외부에 비밀 키나 매개변수를 보관하는 시스템 변수 방식입니다. (<code>python-dotenv</code> 사용)</li>
</ul>
<hr>
<h2>2. OpenAI 및 Gemini API 키 발급 및 파이썬 코드</h2>
<h3>구글 코랩에 패키지 설치</h3>
<pre><code class="language-bash">!pip install -q openai google-generativeai python-dotenv
</code></pre>
<h3>OpenAI API 파이썬 호출 예제</h3>
<pre><code class="language-python">from openai import OpenAI

# Client 객체 생성
client = OpenAI(api_key=&quot;YOUR_OPENAI_API_KEY&quot;)

response = client.chat.completions.create(
    model=&quot;gpt-4o-mini&quot;,
    messages=[
        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;파이썬으로 웹 크롤링하는 법을 한 줄로 요약해줘.&quot;}
    ]
)

print(response.choices[0].message.content)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. API 키를 소스 코드에 직접 하드코딩하지 않고 안전하게 관리하려면?</strong>
A. <code>.env</code> 파일이나 구글 코랩의 <strong>[Secrets (열쇠 아이콘)]</strong> 기능을 이용해 환경변수(<code>os.environ[&quot;OPENAI_API_KEY&quot;]</code>)로 읽어들이는 것이 보안 표준입니다.</p>
',
  'published',
  'OpenAI 및 Gemini API 키 발급 및 파이썬 SDK 연동 환경 구축',
  'OpenAI API 및 Google Gemini API 발급 과정, python-dotenv 패키지로 환경변수 안전 관리, 구글 코랩에서 첫 LLM 호출 코드를 작성해 봅니다.',
  4,
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
  'ch05-system-prompt-and-hyperparameters',
  '시스템 메시지와 하이퍼파라미터 제어',
  'AI 모델의 역할과 페르소나를 결정하는 System Prompt와 창의성, 정밀도를 제어하는 하이퍼파라미터(Temperature, Top_P)의 원리를 다룹니다.',
  'LLM API를 사용할 때 모델에게 페르소나를 부여하는 **System Message**와 모델의 생성 성향을 조절하는 **하이퍼파라미터(Hyperparameter)**를 설정할 수 있습니다.

---

## 1. 하이퍼파라미터 용어 사전 (Glossary)

- **Temperature (온도)**: 0.0 ~ 2.0 사이의 값으로, 확률 분포를 평탄하게 만들어 답변의 다양성/창의성을 결정합니다.
- **Top_P (Nucleus Sampling)**: 누적 확률 상위 P% 범위 내의 단어들 중에서만 후보를 선택하는 샘플링 방식입니다.
- **Max Tokens**: 모델이 단일 응답으로 생성할 수 있는 최대 토큰 자원 한도입니다.

---

## 2. LLM 핵심 하이퍼파라미터 조절 가이드

- **낮은 Temperature (0.0 ~ 0.2)**: 예측 가능하고 일관되며 정밀한 답변 (수학 계산, 코딩, 번역, 사실 요약에 적합).
- **높은 Temperature (0.8 ~ 1.2)**: 창의적이고 다양한 단어 선택 (소설 작성, 아이디어 브레인스토밍에 적합).

```python
response = client.chat.completions.create(
    model="gpt-4o-mini",
    temperature=0.1, # 일관된 정답 추출을 위해 낮게 설정
    messages=[
        {"role": "system", "content": "너는 깐깐한 데이터 검증 시스템이야."},
        {"role": "user", "content": "입력 데이터를 검증해 줘."}
    ]
)
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Temperature와 Top_P를 동시에 수정해도 되나요?**
A. 두 파라미터는 모두 답변의 무작위성을 제어하므로, 예측 불가능한 이상 동작을 막기 위해 둘 중 하나만 조절하는 것이 권장됩니다.
',
  '<p>LLM API를 사용할 때 모델에게 페르소나를 부여하는 <strong>System Message</strong>와 모델의 생성 성향을 조절하는 **하이퍼파라미터(Hyperparameter)**를 설정할 수 있습니다.</p>
<hr>
<h2>1. 하이퍼파라미터 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Temperature (온도)</strong>: 0.0 ~ 2.0 사이의 값으로, 확률 분포를 평탄하게 만들어 답변의 다양성/창의성을 결정합니다.</li>
<li><strong>Top_P (Nucleus Sampling)</strong>: 누적 확률 상위 P% 범위 내의 단어들 중에서만 후보를 선택하는 샘플링 방식입니다.</li>
<li><strong>Max Tokens</strong>: 모델이 단일 응답으로 생성할 수 있는 최대 토큰 자원 한도입니다.</li>
</ul>
<hr>
<h2>2. LLM 핵심 하이퍼파라미터 조절 가이드</h2>
<ul>
<li><strong>낮은 Temperature (0.0 ~ 0.2)</strong>: 예측 가능하고 일관되며 정밀한 답변 (수학 계산, 코딩, 번역, 사실 요약에 적합).</li>
<li><strong>높은 Temperature (0.8 ~ 1.2)</strong>: 창의적이고 다양한 단어 선택 (소설 작성, 아이디어 브레인스토밍에 적합).</li>
</ul>
<pre><code class="language-python">response = client.chat.completions.create(
    model=&quot;gpt-4o-mini&quot;,
    temperature=0.1, # 일관된 정답 추출을 위해 낮게 설정
    messages=[
        {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;너는 깐깐한 데이터 검증 시스템이야.&quot;},
        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;입력 데이터를 검증해 줘.&quot;}
    ]
)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Temperature와 Top_P를 동시에 수정해도 되나요?</strong>
A. 두 파라미터는 모두 답변의 무작위성을 제어하므로, 예측 불가능한 이상 동작을 막기 위해 둘 중 하나만 조절하는 것이 권장됩니다.</p>
',
  'published',
  'LLM 하이퍼파라미터 완벽 정리 - System Prompt, Temperature, Top_P, Max Tokens',
  '개발자의 지침을 정의하는 System Message, 답변의 창의성과 정밀도를 제어하는 Temperature, Top_P, 최대 출력 길이 Max Tokens 파라미터를 다룹니다.',
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
