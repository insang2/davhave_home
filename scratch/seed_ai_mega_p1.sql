-- Mega Enhanced AI Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch01-ai-llm-introduction',
  '생성형 AI와 거대언어모델(LLM) 및 구글 코랩 입문',
  '생성형 AI와 LLM의 핵심 동작 원리인 Transformer 아키텍처, 최신 AI 모델(GPT-4o, DeepSeek-R1, Gemini 1.5 Pro) 비교 및 구글 코랩 실습 환경을 구축합니다.',
  '**생성형 인공지능(Generative AI)**은 텍스트, 이미지, 오디오, 비디오, 소스코드 등 인간 고유의 창작 영역이었던 다양한 모달리티(Modality)의 데이터를 스스로 생성해내는 인공지능 기술입니다. 그 중심에는 인간의 언어를 유연하게 이해하고 생성하는 **거대언어모델(LLM, Large Language Model)**이 위치하고 있습니다.

---

## 1. 생성형 AI & LLM 전문 용어 사전 (Glossary)

- **LLM (Large Language Model)**: 수천억 개(Hundreds of Billions) 이상의 매개변수(Parameter)를 바탕으로 인터넷 상의 거대한 문헌 빅데이터를 사전 학습(Pre-training)한 거대 인공신경망입니다.
- **Transformer (트랜스포머)**: 2017년 구글 연구진의 "Attention Is All You Need" 논문에서 제시된 아키텍처로, 순차 처리(RNN) 방식 대신 문맥 전체의 연관성을 병렬 처리하는 Self-Attention 기법을 사용합니다.
- **Self-Attention (자체 주의집중 메커니즘)**: 문장 내의 모든 단어가 서로 어떤 관계를 맺고 있는지 확률적 가중치(Query, Key, Value)로 수치화하여 핵심 문맥을 파악하는 알고리즘입니다.
- **Token (토큰)**: LLM이 텍스트를 처리하는 인코딩/디코딩 최빈 단위입니다. 보통 영어는 약 4자당 1토큰, 한국어는 1글자당 1~3토큰(BPE 기반)으로 분할됩니다.
- **Parameter (매개변수/파라미터)**: 신경망 내부의 노드 연결 가중치(Weights)와 편향(Biases)의 총합으로, AI 모델의 지능적 능력과 기억 용량을 결정합니다.
- **Hallucination (환각 현상)**: 모델이 근거 없는 거짓 정보를 마치 사실인 것처럼 매끄러운 어조로 지어내어 출력하는 본질적 약점 현상입니다.
- **Reasoning Model (추론 전용 모델)**: DeepSeek-R1이나 OpenAI o1/o3처럼 정답을 출력하기 전 내부적 생각을 정리하는 "Chain-of-Thought" 사고 과정을 거치는 최신 인공지능 모델입니다.

---

## 2. LLM의 동작 메커니즘: Next-Token Prediction

LLM은 근본적으로 문장 속에 연속된 단어 시퀀스가 주어졌을 때, **"다음에 올 가장 확률이 높은 단어(Next-Token Prediction)"를 수학적 확률로 예측**하는 소프트웨어입니다.

$$P(w_n | w_1, w_2, \dots, w_{n-1}) = \text{softmax}(W \cdot h_{n-1})$$

### 2026년 기준 글로벌 대표 LLM 최신 성능 비교

| LLM 모델 | 개발사 | 대표 특징 및 기술적 강점 | 롱 컨텍스트 한도 |
| :--- | :--- | :--- | :--- |
| **GPT-4o / o1** | OpenAI | 실시간 음성/비전 멀티모달, 추론 성능 우수 | 128,000 토큰 |
| **DeepSeek-R1** | DeepSeek | 오픈소스 추론 모델, 강화학습(RL) 기반 가성비 최강 | 128,000 토큰 |
| **Gemini 1.5 Pro** | Google | 비디오/오디오/문서 분석용 멀티모달, 초거대 컨텍스트 | **2,000,000 토큰** |
| **Claude 3.5 Sonnet** | Anthropic | 소프트웨어 코딩 능력 1위, 글쓰기 및 코딩 에이전트 | 200,000 토큰 |
| **Llama 3.3 (70B)** | Meta | 대표적 오픈소스(Open-Weights), 사내 서버 직접 구축 | 128,000 토큰 |

---

## 3. 무료 파이썬 AI 실습 환경: 구글 코랩 (Google Colab)

클라우드 상에서 GPU 자원(T4, V100 등)과 최신 파이썬 3.10+ 환경을 웹 브라우저만으로 즉시 사용할 수 있는 구글의 개발 플랫폼입니다.

### 구글 코랩 필수 단축키 및 실행 가이드
- **`Shift + Enter`**: 현재 셀을 실행하고 다음 셀로 이동
- **`Ctrl + M B`**: 아래쪽에 새 코드 셀 추가
- **`! (느낌표)`**: 파이썬 셀 내부에서 쉘 명령어 실행 (예: `!pip install openai`)

```python
# 구글 코랩 환경 및 시스템 패키지 확인
import sys
import os

print(f"파이썬 실행 버전: {sys.version}")
print(f"현재 실행 경로: {os.getcwd()}")

# 주요 AI 파이썬 라이브러리 버전 확인
import torch
print(f"PyTorch 버전: {torch.__version__} | GPU 가능 여부: {torch.cuda.is_available()}")
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. LLM 모델의 파라미터 수(예: 7B, 70B, 405B)는 무엇을 의미하나요?**
A. ''B''는 Billion(10억)을 뜻합니다. 7B는 70억 개, 70B는 700억 개의 매개변수를 의미합니다. 파라미터가 클수록 지식의 폭과 추론 능력이 뛰어난 대신, 실행 시 필요한 GPU VRAM 메모리 용량이 비례하여 증가합니다.
',
  '<p>**생성형 인공지능(Generative AI)**은 텍스트, 이미지, 오디오, 비디오, 소스코드 등 인간 고유의 창작 영역이었던 다양한 모달리티(Modality)의 데이터를 스스로 생성해내는 인공지능 기술입니다. 그 중심에는 인간의 언어를 유연하게 이해하고 생성하는 **거대언어모델(LLM, Large Language Model)**이 위치하고 있습니다.</p>
<hr>
<h2>1. 생성형 AI &amp; LLM 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>LLM (Large Language Model)</strong>: 수천억 개(Hundreds of Billions) 이상의 매개변수(Parameter)를 바탕으로 인터넷 상의 거대한 문헌 빅데이터를 사전 학습(Pre-training)한 거대 인공신경망입니다.</li>
<li><strong>Transformer (트랜스포머)</strong>: 2017년 구글 연구진의 &quot;Attention Is All You Need&quot; 논문에서 제시된 아키텍처로, 순차 처리(RNN) 방식 대신 문맥 전체의 연관성을 병렬 처리하는 Self-Attention 기법을 사용합니다.</li>
<li><strong>Self-Attention (자체 주의집중 메커니즘)</strong>: 문장 내의 모든 단어가 서로 어떤 관계를 맺고 있는지 확률적 가중치(Query, Key, Value)로 수치화하여 핵심 문맥을 파악하는 알고리즘입니다.</li>
<li><strong>Token (토큰)</strong>: LLM이 텍스트를 처리하는 인코딩/디코딩 최빈 단위입니다. 보통 영어는 약 4자당 1토큰, 한국어는 1글자당 1~3토큰(BPE 기반)으로 분할됩니다.</li>
<li><strong>Parameter (매개변수/파라미터)</strong>: 신경망 내부의 노드 연결 가중치(Weights)와 편향(Biases)의 총합으로, AI 모델의 지능적 능력과 기억 용량을 결정합니다.</li>
<li><strong>Hallucination (환각 현상)</strong>: 모델이 근거 없는 거짓 정보를 마치 사실인 것처럼 매끄러운 어조로 지어내어 출력하는 본질적 약점 현상입니다.</li>
<li><strong>Reasoning Model (추론 전용 모델)</strong>: DeepSeek-R1이나 OpenAI o1/o3처럼 정답을 출력하기 전 내부적 생각을 정리하는 &quot;Chain-of-Thought&quot; 사고 과정을 거치는 최신 인공지능 모델입니다.</li>
</ul>
<hr>
<h2>2. LLM의 동작 메커니즘: Next-Token Prediction</h2>
<p>LLM은 근본적으로 문장 속에 연속된 단어 시퀀스가 주어졌을 때, <strong>&quot;다음에 올 가장 확률이 높은 단어(Next-Token Prediction)&quot;를 수학적 확률로 예측</strong>하는 소프트웨어입니다.</p>
<p>$$P(w_n | w_1, w_2, \dots, w_{n-1}) = \text{softmax}(W \cdot h_{n-1})$$</p>
<h3>2026년 기준 글로벌 대표 LLM 최신 성능 비교</h3>
<table>
<thead>
<tr>
<th align="left">LLM 모델</th>
<th align="left">개발사</th>
<th align="left">대표 특징 및 기술적 강점</th>
<th align="left">롱 컨텍스트 한도</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>GPT-4o / o1</strong></td>
<td align="left">OpenAI</td>
<td align="left">실시간 음성/비전 멀티모달, 추론 성능 우수</td>
<td align="left">128,000 토큰</td>
</tr>
<tr>
<td align="left"><strong>DeepSeek-R1</strong></td>
<td align="left">DeepSeek</td>
<td align="left">오픈소스 추론 모델, 강화학습(RL) 기반 가성비 최강</td>
<td align="left">128,000 토큰</td>
</tr>
<tr>
<td align="left"><strong>Gemini 1.5 Pro</strong></td>
<td align="left">Google</td>
<td align="left">비디오/오디오/문서 분석용 멀티모달, 초거대 컨텍스트</td>
<td align="left"><strong>2,000,000 토큰</strong></td>
</tr>
<tr>
<td align="left"><strong>Claude 3.5 Sonnet</strong></td>
<td align="left">Anthropic</td>
<td align="left">소프트웨어 코딩 능력 1위, 글쓰기 및 코딩 에이전트</td>
<td align="left">200,000 토큰</td>
</tr>
<tr>
<td align="left"><strong>Llama 3.3 (70B)</strong></td>
<td align="left">Meta</td>
<td align="left">대표적 오픈소스(Open-Weights), 사내 서버 직접 구축</td>
<td align="left">128,000 토큰</td>
</tr>
</tbody></table>
<hr>
<h2>3. 무료 파이썬 AI 실습 환경: 구글 코랩 (Google Colab)</h2>
<p>클라우드 상에서 GPU 자원(T4, V100 등)과 최신 파이썬 3.10+ 환경을 웹 브라우저만으로 즉시 사용할 수 있는 구글의 개발 플랫폼입니다.</p>
<h3>구글 코랩 필수 단축키 및 실행 가이드</h3>
<ul>
<li><strong><code>Shift + Enter</code></strong>: 현재 셀을 실행하고 다음 셀로 이동</li>
<li><strong><code>Ctrl + M B</code></strong>: 아래쪽에 새 코드 셀 추가</li>
<li><strong><code>! (느낌표)</code></strong>: 파이썬 셀 내부에서 쉘 명령어 실행 (예: <code>!pip install openai</code>)</li>
</ul>
<pre><code class="language-python"># 구글 코랩 환경 및 시스템 패키지 확인
import sys
import os

print(f&quot;파이썬 실행 버전: {sys.version}&quot;)
print(f&quot;현재 실행 경로: {os.getcwd()}&quot;)

# 주요 AI 파이썬 라이브러리 버전 확인
import torch
print(f&quot;PyTorch 버전: {torch.__version__} | GPU 가능 여부: {torch.cuda.is_available()}&quot;)
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. LLM 모델의 파라미터 수(예: 7B, 70B, 405B)는 무엇을 의미하나요?</strong>
A. &#39;B&#39;는 Billion(10억)을 뜻합니다. 7B는 70억 개, 70B는 700억 개의 매개변수를 의미합니다. 파라미터가 클수록 지식의 폭과 추론 능력이 뛰어난 대신, 실행 시 필요한 GPU VRAM 메모리 용량이 비례하여 증가합니다.</p>
',
  'published',
  '생성형 AI와 LLM 핵심 원리 - GPT-4o, DeepSeek, Gemini, Transformer & Colab',
  '인공지능과 생성형 AI의 차이, 거대언어모델(LLM)의 핵심 아키텍처 Transformer, Self-Attention 메커니즘, DeepSeek-R1 및 최신 LLM 비교, 구글 코랩 파이썬 실습을 해설합니다.',
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
  'AI에 던지는 입력 지시문(Prompt)을 정교하게 설계하여 원하는 최상의 답변 품질을 이끌어내는 4가지 핵심 원칙과 실전 프롬프트 패턴을 배웁니다.',
  '**프롬프트 엔지니어링(Prompt Engineering)**이란 생성형 AI 모델이 개발자나 사용자의 의도에 정확히 부합하는 정밀하고 고품질의 결과물을 출력하도록 지시문(Prompt)의 구조와 맥락을 디자인하는 고도화된 기술입니다.

---

## 1. 프롬프트 핵심 용어 사전 (Glossary)

- **System Prompt (시스템 프롬프트)**: AI 모델의 페르소나(역할), 출력 말투, 행동 제약 조건, 금지 사항을 최상위 레벨에서 규정하는 핵심 지시문입니다.
- **User Prompt (사용자 프롬프트)**: 실시간으로 사용자가 질문하거나 처리를 맡기는 구체적인 작업 요청서입니다.
- **Context (맥락 데이터)**: AI가 정밀하게 판단할 수 있도록 프롬프트에 주입하는 배경 지식, 참고 문헌, 사전 지침 정보입니다.
- **Delimiters (구분자)**: `"""`, `###`, `<context>` 처럼 프롬프트 내부에서 지시 사항과 입력 데이터, 참고 문서 구역을 나누어 인지 부하를 줄여주는 기호입니다.
- **Instruction Tuning (지시 조정)**: 사람이 자연어로 지시한 프롬프트 명령을 모델이 의도대로 정확히 따르도록 미세조정(Fine-Tuning)한 학습 상태입니다.

---

## 2. 프롬프트 작성 4대 핵심 원칙

### 원칙 1: 명확하고 구체적으로 지시하라 (Clarity & Specificity)
- ❌ 모호한 요청: "이 텍스트 요약해 줘."
- ⭕ 명확한 요청: "다음 텍스트를 읽고 IT 개발자 관점에서 핵심 내용 3가지를 각각 1문장으로 요약해 줘."

### 원칙 2: 풍부한 배경 맥락(Context)을 주입하라
- AI에게 현재 상태, 작업의 목적, 타깃 독자를 알려주면 답변의 타율이 급상승합니다.
- 예: "우리는 20대 커머스 사용자를 위한 앱을 만드는 스타트업이야..."

### 원칙 3: 원하는 출력 형식(Format)을 명시하라
- Markdown 표, Bullet Point, JSON 규격, 파이썬 코드 블록 등 원하는 형태를 지정하세요.

### 원칙 4: 페르소나(Persona/Role)를 부여하라
- "너는 20년 경력의 글로벌 벤처캐피털(VC) 심사역이야. 사업계획서의 단점 위주로 매섭게 비판해 줘."

---

## 3. 실전 만능 프롬프트 구조 템플릿 (CRISPE Framework)

```markdown
### [1. Role (역할)]
너는 데이터 기반의 최고 마케팅 책임자(CMO)야.

### [2. Context (배경)]
우리는 20대 직장인을 위한 AI 기반 자산 관리 앱의 론칭을 앞두고 있어.

### [3. Instruction (지시)]
인스타그램 광고 캠페인 카피라이팅 문구 5개를 작성해 줘.

### [4. Specification (제약 조건)]
- 각 카피는 20자 이내일 것.
- 숫자를 포함하여 신뢰감을 줄 것.
- 이모지를 적절히 사용할 것.

### [5. Output Format (출력 형태)]
1. [카피 1] - [기획 의도]
2. [카피 2] - [기획 의도]
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 부정문 지시어("~하지 마세요")를 쓰면 왜 모델이 잘 안 듣나요?**
A. LLM은 ''하지 마라''는 금지어 자체의 단어 토큰에 어텐션이 쏠려 오히려 금지한 동작을 수행하는 경향이 있습니다. 따라서 부정문 대신 **긍정문 대체 지시어**("대신 ~로 표현하세요")를 사용하는 것이 훨씬 효과적입니다.
',
  '<p>**프롬프트 엔지니어링(Prompt Engineering)**이란 생성형 AI 모델이 개발자나 사용자의 의도에 정확히 부합하는 정밀하고 고품질의 결과물을 출력하도록 지시문(Prompt)의 구조와 맥락을 디자인하는 고도화된 기술입니다.</p>
<hr>
<h2>1. 프롬프트 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>System Prompt (시스템 프롬프트)</strong>: AI 모델의 페르소나(역할), 출력 말투, 행동 제약 조건, 금지 사항을 최상위 레벨에서 규정하는 핵심 지시문입니다.</li>
<li><strong>User Prompt (사용자 프롬프트)</strong>: 실시간으로 사용자가 질문하거나 처리를 맡기는 구체적인 작업 요청서입니다.</li>
<li><strong>Context (맥락 데이터)</strong>: AI가 정밀하게 판단할 수 있도록 프롬프트에 주입하는 배경 지식, 참고 문헌, 사전 지침 정보입니다.</li>
<li><strong>Delimiters (구분자)</strong>: <code>&quot;&quot;&quot;</code>, <code>###</code>, <code>&lt;context&gt;</code> 처럼 프롬프트 내부에서 지시 사항과 입력 데이터, 참고 문서 구역을 나누어 인지 부하를 줄여주는 기호입니다.</li>
<li><strong>Instruction Tuning (지시 조정)</strong>: 사람이 자연어로 지시한 프롬프트 명령을 모델이 의도대로 정확히 따르도록 미세조정(Fine-Tuning)한 학습 상태입니다.</li>
</ul>
<hr>
<h2>2. 프롬프트 작성 4대 핵심 원칙</h2>
<h3>원칙 1: 명확하고 구체적으로 지시하라 (Clarity &amp; Specificity)</h3>
<ul>
<li>❌ 모호한 요청: &quot;이 텍스트 요약해 줘.&quot;</li>
<li>⭕ 명확한 요청: &quot;다음 텍스트를 읽고 IT 개발자 관점에서 핵심 내용 3가지를 각각 1문장으로 요약해 줘.&quot;</li>
</ul>
<h3>원칙 2: 풍부한 배경 맥락(Context)을 주입하라</h3>
<ul>
<li>AI에게 현재 상태, 작업의 목적, 타깃 독자를 알려주면 답변의 타율이 급상승합니다.</li>
<li>예: &quot;우리는 20대 커머스 사용자를 위한 앱을 만드는 스타트업이야...&quot;</li>
</ul>
<h3>원칙 3: 원하는 출력 형식(Format)을 명시하라</h3>
<ul>
<li>Markdown 표, Bullet Point, JSON 규격, 파이썬 코드 블록 등 원하는 형태를 지정하세요.</li>
</ul>
<h3>원칙 4: 페르소나(Persona/Role)를 부여하라</h3>
<ul>
<li>&quot;너는 20년 경력의 글로벌 벤처캐피털(VC) 심사역이야. 사업계획서의 단점 위주로 매섭게 비판해 줘.&quot;</li>
</ul>
<hr>
<h2>3. 실전 만능 프롬프트 구조 템플릿 (CRISPE Framework)</h2>
<pre><code class="language-markdown">### [1. Role (역할)]
너는 데이터 기반의 최고 마케팅 책임자(CMO)야.

### [2. Context (배경)]
우리는 20대 직장인을 위한 AI 기반 자산 관리 앱의 론칭을 앞두고 있어.

### [3. Instruction (지시)]
인스타그램 광고 캠페인 카피라이팅 문구 5개를 작성해 줘.

### [4. Specification (제약 조건)]
- 각 카피는 20자 이내일 것.
- 숫자를 포함하여 신뢰감을 줄 것.
- 이모지를 적절히 사용할 것.

### [5. Output Format (출력 형태)]
1. [카피 1] - [기획 의도]
2. [카피 2] - [기획 의도]
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 부정문 지시어(&quot;~하지 마세요&quot;)를 쓰면 왜 모델이 잘 안 듣나요?</strong>
A. LLM은 &#39;하지 마라&#39;는 금지어 자체의 단어 토큰에 어텐션이 쏠려 오히려 금지한 동작을 수행하는 경향이 있습니다. 따라서 부정문 대신 <strong>긍정문 대체 지시어</strong>(&quot;대신 ~로 표현하세요&quot;)를 사용하는 것이 훨씬 효과적입니다.</p>
',
  'published',
  '프롬프트 엔지니어링 4대 원칙 - 명확성, 맥락, 출력 형식, 페르소나 설계',
  'LLM의 잠재 능력을 100% 끌어내는 4대 프롬프트 작성 원칙, 시스템 프롬프트(System Prompt), 구분자(Delimiter) 기법, 실전 비즈니스 프롬프트 템플릿을 해설합니다.',
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
  '예시 패턴을 보여주는 Few-Shot 프롬프팅과 단계별 추론 과정(Chain-of-Thought)을 유도하여 복잡한 수학, 코딩, 논리 문제 정답률을 극대화하는 고급 기법을 학습합니다.',
  '단순 질문을 넘어 복잡한 수학 계산, 논리적 추론, 정밀한 텍스트 분류 작업을 수행할 때는 **고급 프롬프팅 기법**을 적용해야 합니다.

---

## 1. 고급 프롬프팅 용어 사전 (Glossary)

- **Zero-Shot Prompting**: 사전 예시 없이 오직 명령어만 전달하는 기법입니다.
- **Few-Shot Prompting**: 원하는 입출력 예시 패킷을 1~5개 제시하여 모델이 패턴을 그대로 모방하여 수행하도록 유도하는 기법입니다.
- **Chain-of-Thought (CoT, 생각의 사슬)**: "단계별로 차근차근 생각해 보자(Let''s think step by step)"라는 문구를 주입하여 중간 추론 과정을 스스로 도출하게 만드는 기법입니다.
- **Self-Consistency (자아 일관성)**: 동일한 CoT 프롬프트를 여러 번 독립적으로 실행하여 가장 많이 나온 답변을 다수결로 선택하는 고도화 기법입니다.
- **Tree-of-Thoughts (ToT)**: 여러 추론 가지(Branch)를 트리 형태로 탐색하며 최적의 해법을 찾아가는 에이전트형 프롬프팅 구조입니다.

---

## 2. Few-Shot Prompting 실전 작성법

```markdown
[입력 데이터 감정 상태 분류 Few-Shot 예시]

입력: "배송이 3일이나 늦게 도착해서 일정이 다 꼬였어요." 
분석: {"감정": "분노/불만", "점수": 1, "카테고리": "배송지연"}

입력: "포장도 매우 꼼꼼하고 사은품까지 챙겨주셔서 너무 감사합니다!" 
분석: {"감정": "극찬/만족", "점수": 5, "카테고리": "포장/서비스"}

입력: "디자인은 예쁜데 가격이 조금 부담스럽네요." 
분석: {"감정": "중립/아쉬움", "점수": 3, "카테고리": "가격"}

---
[실제 처리 대상]
입력: "버튼을 눌러도 반응이 없고 전원이 자꾸 꺼집니다."
분석:
```

---

## 3. 생각의 사슬 (Chain-of-Thought, CoT) 효과

CoT를 적용하면 복잡한 수치 계산이나 다단계 논리 문제에서 산술 오류가 획기적으로 줄어듭니다.

```markdown
[일반 프롬프트]
Q: 공장에 부품 10개가 있습니다. 매일 3개씩 만들고 1개는 불량으로 버립니다. 4일 후 부품은 몇 개인가요?
A: (단순 예측 실패 가능성 높음)

[CoT 프롬프트]
Q: 상기 문제를 단계별로 풀이해 주세요.
A: 
1단계: 초기 부품 수 = 10개
2단계: 하루 순 생산량 = 3개 - 1개(불량) = 2개
3단계: 4일간 순 생산량 = 2개 * 4일 = 8개
4단계: 4일 후 총 부품 수 = 10개 + 8개 = 18개
정답: 18개
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Few-Shot 예시 작성 시 주의할 점은 무엇인가요?**
A. 예시의 무작위성이나 일탈을 막기 위해 예시 포맷(JSON, Markdown 등)을 완전히 통일해야 하며, 편향을 방지하기 위해 긍정/부정/중립 예시를 균형 있게 배치해야 합니다.
',
  '<p>단순 질문을 넘어 복잡한 수학 계산, 논리적 추론, 정밀한 텍스트 분류 작업을 수행할 때는 <strong>고급 프롬프팅 기법</strong>을 적용해야 합니다.</p>
<hr>
<h2>1. 고급 프롬프팅 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Zero-Shot Prompting</strong>: 사전 예시 없이 오직 명령어만 전달하는 기법입니다.</li>
<li><strong>Few-Shot Prompting</strong>: 원하는 입출력 예시 패킷을 1~5개 제시하여 모델이 패턴을 그대로 모방하여 수행하도록 유도하는 기법입니다.</li>
<li><strong>Chain-of-Thought (CoT, 생각의 사슬)</strong>: &quot;단계별로 차근차근 생각해 보자(Let&#39;s think step by step)&quot;라는 문구를 주입하여 중간 추론 과정을 스스로 도출하게 만드는 기법입니다.</li>
<li><strong>Self-Consistency (자아 일관성)</strong>: 동일한 CoT 프롬프트를 여러 번 독립적으로 실행하여 가장 많이 나온 답변을 다수결로 선택하는 고도화 기법입니다.</li>
<li><strong>Tree-of-Thoughts (ToT)</strong>: 여러 추론 가지(Branch)를 트리 형태로 탐색하며 최적의 해법을 찾아가는 에이전트형 프롬프팅 구조입니다.</li>
</ul>
<hr>
<h2>2. Few-Shot Prompting 실전 작성법</h2>
<pre><code class="language-markdown">[입력 데이터 감정 상태 분류 Few-Shot 예시]

입력: &quot;배송이 3일이나 늦게 도착해서 일정이 다 꼬였어요.&quot; 
분석: {&quot;감정&quot;: &quot;분노/불만&quot;, &quot;점수&quot;: 1, &quot;카테고리&quot;: &quot;배송지연&quot;}

입력: &quot;포장도 매우 꼼꼼하고 사은품까지 챙겨주셔서 너무 감사합니다!&quot; 
분석: {&quot;감정&quot;: &quot;극찬/만족&quot;, &quot;점수&quot;: 5, &quot;카테고리&quot;: &quot;포장/서비스&quot;}

입력: &quot;디자인은 예쁜데 가격이 조금 부담스럽네요.&quot; 
분석: {&quot;감정&quot;: &quot;중립/아쉬움&quot;, &quot;점수&quot;: 3, &quot;카테고리&quot;: &quot;가격&quot;}

---
[실제 처리 대상]
입력: &quot;버튼을 눌러도 반응이 없고 전원이 자꾸 꺼집니다.&quot;
분석:
</code></pre>
<hr>
<h2>3. 생각의 사슬 (Chain-of-Thought, CoT) 효과</h2>
<p>CoT를 적용하면 복잡한 수치 계산이나 다단계 논리 문제에서 산술 오류가 획기적으로 줄어듭니다.</p>
<pre><code class="language-markdown">[일반 프롬프트]
Q: 공장에 부품 10개가 있습니다. 매일 3개씩 만들고 1개는 불량으로 버립니다. 4일 후 부품은 몇 개인가요?
A: (단순 예측 실패 가능성 높음)

[CoT 프롬프트]
Q: 상기 문제를 단계별로 풀이해 주세요.
A: 
1단계: 초기 부품 수 = 10개
2단계: 하루 순 생산량 = 3개 - 1개(불량) = 2개
3단계: 4일간 순 생산량 = 2개 * 4일 = 8개
4단계: 4일 후 총 부품 수 = 10개 + 8개 = 18개
정답: 18개
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Few-Shot 예시 작성 시 주의할 점은 무엇인가요?</strong>
A. 예시의 무작위성이나 일탈을 막기 위해 예시 포맷(JSON, Markdown 등)을 완전히 통일해야 하며, 편향을 방지하기 위해 긍정/부정/중립 예시를 균형 있게 배치해야 합니다.</p>
',
  'published',
  '고급 프롬프트 기법 - Zero/Few-Shot, Chain-of-Thought(CoT), Self-Consistency',
  '예시 입출력을 보여주는 Few-Shot Prompting, 추론 능력을 획기적으로 높이는 생각의 사슬 Chain-of-Thought(CoT), Self-Consistency 및 Prompt Chaining을 배웁니다.',
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
  '파이썬 환경에서 OpenAI(GPT-4o) 및 Google Gemini API를 안전하게 발급받고 코드로 호출하여 결과를 수신하는 API 개발 기반을 다집니다.',
  '프로그램에 생성형 AI 기능을 통합하려면 웹 브라우저 접속 대신 파이썬 코드에서 **API(Application Programming Interface)**를 통해 LLM을 호출해야 합니다.

---

## 1. API 연동 핵심 용어 사전 (Glossary)

- **API Key**: API 서비스 제공자로부터 본인 식별 및 과금을 위해 발급받는 보안 암호 문자열입니다.
- **SDK (Software Development Kit)**: 특정 API를 파이썬 등 프로그래밍 언어 개발자가 손쉽게 사용할 수 있도록 Wrapping한 라이브러리 패키지입니다. (예: `openai`, `google-generativeai`)
- **Environment Variable (환경변수)**: 보안상 소스코드에 직접 암호를 하드코딩하지 않고, OS 시스템 환경 영역에 값을 감추어 관리하는 방식입니다. (`python-dotenv` 사용)

---

## 2. API 키 안전 관리와 `python-dotenv` 설정

소스코드에 API 키가 포함된 채 GitHub 등에 실수로 공개되면 수백만 원의 무단 과금이 발생할 수 있으므로, 반드시 ** 환경변수(`.env` 파일)**로 관리해야 합니다.

### `.env` 파일 내용
```env
OPENAI_API_KEY=sk-proj-xxxx...
GEMINI_API_KEY=AIzaSy...
```

### 파이썬 연동 코드 (`main.py`)
```python
import os
from dotenv import load_dotenv
from openai import OpenAI

# .env 파일에서 환경변수 읽어오기
load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

# 첫 API 테스트 호출
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "너는 DAVHAVE의 친절한 AI 조수야."},
        {"role": "user", "content": "파이썬 API 연동 성공 축하 메시지를 한 줄로 남겨줘!"}
    ]
)

print(response.choices[0].message.content)
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. API 호출 시 발생하는 RateLimitError(요청 한도 초과)는 어떻게 해결하나요?**
A. 분당 요청 수(RPM)나 분당 토큰 수(TPM) 한도를 초과했을 때 발생합니다. 코드에 `tenacity` 라이브러리를 활용해 지수 백오프(Exponential Backoff) 재시도 로직을 추가하거나 결제 한도 플랜을 상향해야 합니다.
',
  '<p>프로그램에 생성형 AI 기능을 통합하려면 웹 브라우저 접속 대신 파이썬 코드에서 **API(Application Programming Interface)**를 통해 LLM을 호출해야 합니다.</p>
<hr>
<h2>1. API 연동 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>API Key</strong>: API 서비스 제공자로부터 본인 식별 및 과금을 위해 발급받는 보안 암호 문자열입니다.</li>
<li><strong>SDK (Software Development Kit)</strong>: 특정 API를 파이썬 등 프로그래밍 언어 개발자가 손쉽게 사용할 수 있도록 Wrapping한 라이브러리 패키지입니다. (예: <code>openai</code>, <code>google-generativeai</code>)</li>
<li><strong>Environment Variable (환경변수)</strong>: 보안상 소스코드에 직접 암호를 하드코딩하지 않고, OS 시스템 환경 영역에 값을 감추어 관리하는 방식입니다. (<code>python-dotenv</code> 사용)</li>
</ul>
<hr>
<h2>2. API 키 안전 관리와 <code>python-dotenv</code> 설정</h2>
<p>소스코드에 API 키가 포함된 채 GitHub 등에 실수로 공개되면 수백만 원의 무단 과금이 발생할 수 있으므로, 반드시 ** 환경변수(<code>.env</code> 파일)**로 관리해야 합니다.</p>
<h3><code>.env</code> 파일 내용</h3>
<pre><code class="language-env">OPENAI_API_KEY=sk-proj-xxxx...
GEMINI_API_KEY=AIzaSy...
</code></pre>
<h3>파이썬 연동 코드 (<code>main.py</code>)</h3>
<pre><code class="language-python">import os
from dotenv import load_dotenv
from openai import OpenAI

# .env 파일에서 환경변수 읽어오기
load_dotenv()

api_key = os.getenv(&quot;OPENAI_API_KEY&quot;)
client = OpenAI(api_key=api_key)

# 첫 API 테스트 호출
response = client.chat.completions.create(
    model=&quot;gpt-4o-mini&quot;,
    messages=[
        {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;너는 DAVHAVE의 친절한 AI 조수야.&quot;},
        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;파이썬 API 연동 성공 축하 메시지를 한 줄로 남겨줘!&quot;}
    ]
)

print(response.choices[0].message.content)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. API 호출 시 발생하는 RateLimitError(요청 한도 초과)는 어떻게 해결하나요?</strong>
A. 분당 요청 수(RPM)나 분당 토큰 수(TPM) 한도를 초과했을 때 발생합니다. 코드에 <code>tenacity</code> 라이브러리를 활용해 지수 백오프(Exponential Backoff) 재시도 로직을 추가하거나 결제 한도 플랜을 상향해야 합니다.</p>
',
  'published',
  'LLM API 파이썬 개발 환경 구축 - OpenAI API & Gemini API 연동 및 보안',
  'OpenAI API 키, Google Gemini API 키 발급, python-dotenv 패키지로 환경변수 안전 보관, 구글 코랩 및 파이썬 SDK 첫 연동 코드를 학습합니다.',
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
