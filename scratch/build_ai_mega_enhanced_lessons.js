import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  {
    order_index: 1,
    slug: 'ch01-ai-llm-introduction',
    title: '생성형 AI와 거대언어모델(LLM) 및 구글 코랩 입문',
    seo_title: '생성형 AI와 LLM 핵심 원리 - GPT-4o, DeepSeek, Gemini, Transformer & Colab',
    seo_description: '인공지능과 생성형 AI의 차이, 거대언어모델(LLM)의 핵심 아키텍처 Transformer, Self-Attention 메커니즘, DeepSeek-R1 및 최신 LLM 비교, 구글 코랩 파이썬 실습을 해설합니다.',
    excerpt: '생성형 AI와 LLM의 핵심 동작 원리인 Transformer 아키텍처, 최신 AI 모델(GPT-4o, DeepSeek-R1, Gemini 1.5 Pro) 비교 및 구글 코랩 실습 환경을 구축합니다.',
    content_md: `**생성형 인공지능(Generative AI)**은 텍스트, 이미지, 오디오, 비디오, 소스코드 등 인간 고유의 창작 영역이었던 다양한 모달리티(Modality)의 데이터를 스스로 생성해내는 인공지능 기술입니다. 그 중심에는 인간의 언어를 유연하게 이해하고 생성하는 **거대언어모델(LLM, Large Language Model)**이 위치하고 있습니다.

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

$$P(w_n | w_1, w_2, \\dots, w_{n-1}) = \\text{softmax}(W \\cdot h_{n-1})$$

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
- **\`Shift + Enter\`**: 현재 셀을 실행하고 다음 셀로 이동
- **\`Ctrl + M B\`**: 아래쪽에 새 코드 셀 추가
- **\`! (느낌표)\`**: 파이썬 셀 내부에서 쉘 명령어 실행 (예: \`!pip install openai\`)

\`\`\`python
# 구글 코랩 환경 및 시스템 패키지 확인
import sys
import os

print(f"파이썬 실행 버전: {sys.version}")
print(f"현재 실행 경로: {os.getcwd()}")

# 주요 AI 파이썬 라이브러리 버전 확인
import torch
print(f"PyTorch 버전: {torch.__version__} | GPU 가능 여부: {torch.cuda.is_available()}")
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. LLM 모델의 파라미터 수(예: 7B, 70B, 405B)는 무엇을 의미하나요?**
A. 'B'는 Billion(10억)을 뜻합니다. 7B는 70억 개, 70B는 700억 개의 매개변수를 의미합니다. 파라미터가 클수록 지식의 폭과 추론 능력이 뛰어난 대신, 실행 시 필요한 GPU VRAM 메모리 용량이 비례하여 증가합니다.
`
  },
  {
    order_index: 2,
    slug: 'ch02-prompt-engineering-principles',
    title: '프롬프트 엔지니어링의 핵심 4대 원칙',
    seo_title: '프롬프트 엔지니어링 4대 원칙 - 명확성, 맥락, 출력 형식, 페르소나 설계',
    seo_description: 'LLM의 잠재 능력을 100% 끌어내는 4대 프롬프트 작성 원칙, 시스템 프롬프트(System Prompt), 구분자(Delimiter) 기법, 실전 비즈니스 프롬프트 템플릿을 해설합니다.',
    excerpt: 'AI에 던지는 입력 지시문(Prompt)을 정교하게 설계하여 원하는 최상의 답변 품질을 이끌어내는 4가지 핵심 원칙과 실전 프롬프트 패턴을 배웁니다.',
    content_md: `**프롬프트 엔지니어링(Prompt Engineering)**이란 생성형 AI 모델이 개발자나 사용자의 의도에 정확히 부합하는 정밀하고 고품질의 결과물을 출력하도록 지시문(Prompt)의 구조와 맥락을 디자인하는 고도화된 기술입니다.

---

## 1. 프롬프트 핵심 용어 사전 (Glossary)

- **System Prompt (시스템 프롬프트)**: AI 모델의 페르소나(역할), 출력 말투, 행동 제약 조건, 금지 사항을 최상위 레벨에서 규정하는 핵심 지시문입니다.
- **User Prompt (사용자 프롬프트)**: 실시간으로 사용자가 질문하거나 처리를 맡기는 구체적인 작업 요청서입니다.
- **Context (맥락 데이터)**: AI가 정밀하게 판단할 수 있도록 프롬프트에 주입하는 배경 지식, 참고 문헌, 사전 지침 정보입니다.
- **Delimiters (구분자)**: \`"""\`, \`###\`, \`<context>\` 처럼 프롬프트 내부에서 지시 사항과 입력 데이터, 참고 문서 구역을 나누어 인지 부하를 줄여주는 기호입니다.
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

\`\`\`markdown
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
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 부정문 지시어("~하지 마세요")를 쓰면 왜 모델이 잘 안 듣나요?**
A. LLM은 '하지 마라'는 금지어 자체의 단어 토큰에 어텐션이 쏠려 오히려 금지한 동작을 수행하는 경향이 있습니다. 따라서 부정문 대신 **긍정문 대체 지시어**("대신 ~로 표현하세요")를 사용하는 것이 훨씬 효과적입니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-advanced-prompting-techniques',
    title: '고급 프롬프팅 기법 (Few-Shot, Chain-of-Thought)',
    seo_title: '고급 프롬프트 기법 - Zero/Few-Shot, Chain-of-Thought(CoT), Self-Consistency',
    seo_description: '예시 입출력을 보여주는 Few-Shot Prompting, 추론 능력을 획기적으로 높이는 생각의 사슬 Chain-of-Thought(CoT), Self-Consistency 및 Prompt Chaining을 배웁니다.',
    excerpt: '예시 패턴을 보여주는 Few-Shot 프롬프팅과 단계별 추론 과정(Chain-of-Thought)을 유도하여 복잡한 수학, 코딩, 논리 문제 정답률을 극대화하는 고급 기법을 학습합니다.',
    content_md: `단순 질문을 넘어 복잡한 수학 계산, 논리적 추론, 정밀한 텍스트 분류 작업을 수행할 때는 **고급 프롬프팅 기법**을 적용해야 합니다.

---

## 1. 고급 프롬프팅 용어 사전 (Glossary)

- **Zero-Shot Prompting**: 사전 예시 없이 오직 명령어만 전달하는 기법입니다.
- **Few-Shot Prompting**: 원하는 입출력 예시 패킷을 1~5개 제시하여 모델이 패턴을 그대로 모방하여 수행하도록 유도하는 기법입니다.
- **Chain-of-Thought (CoT, 생각의 사슬)**: "단계별로 차근차근 생각해 보자(Let's think step by step)"라는 문구를 주입하여 중간 추론 과정을 스스로 도출하게 만드는 기법입니다.
- **Self-Consistency (자아 일관성)**: 동일한 CoT 프롬프트를 여러 번 독립적으로 실행하여 가장 많이 나온 답변을 다수결로 선택하는 고도화 기법입니다.
- **Tree-of-Thoughts (ToT)**: 여러 추론 가지(Branch)를 트리 형태로 탐색하며 최적의 해법을 찾아가는 에이전트형 프롬프팅 구조입니다.

---

## 2. Few-Shot Prompting 실전 작성법

\`\`\`markdown
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
\`\`\`

---

## 3. 생각의 사슬 (Chain-of-Thought, CoT) 효과

CoT를 적용하면 복잡한 수치 계산이나 다단계 논리 문제에서 산술 오류가 획기적으로 줄어듭니다.

\`\`\`markdown
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
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Few-Shot 예시 작성 시 주의할 점은 무엇인가요?**
A. 예시의 무작위성이나 일탈을 막기 위해 예시 포맷(JSON, Markdown 등)을 완전히 통일해야 하며, 편향을 방지하기 위해 긍정/부정/중립 예시를 균형 있게 배치해야 합니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-llm-api-setup-and-key',
    title: '파이썬으로 시작하는 LLM API 연동',
    seo_title: 'LLM API 파이썬 개발 환경 구축 - OpenAI API & Gemini API 연동 및 보안',
    seo_description: 'OpenAI API 키, Google Gemini API 키 발급, python-dotenv 패키지로 환경변수 안전 보관, 구글 코랩 및 파이썬 SDK 첫 연동 코드를 학습합니다.',
    excerpt: '파이썬 환경에서 OpenAI(GPT-4o) 및 Google Gemini API를 안전하게 발급받고 코드로 호출하여 결과를 수신하는 API 개발 기반을 다집니다.',
    content_md: `프로그램에 생성형 AI 기능을 통합하려면 웹 브라우저 접속 대신 파이썬 코드에서 **API(Application Programming Interface)**를 통해 LLM을 호출해야 합니다.

---

## 1. API 연동 핵심 용어 사전 (Glossary)

- **API Key**: API 서비스 제공자로부터 본인 식별 및 과금을 위해 발급받는 보안 암호 문자열입니다.
- **SDK (Software Development Kit)**: 특정 API를 파이썬 등 프로그래밍 언어 개발자가 손쉽게 사용할 수 있도록 Wrapping한 라이브러리 패키지입니다. (예: \`openai\`, \`google-generativeai\`)
- **Environment Variable (환경변수)**: 보안상 소스코드에 직접 암호를 하드코딩하지 않고, OS 시스템 환경 영역에 값을 감추어 관리하는 방식입니다. (\`python-dotenv\` 사용)

---

## 2. API 키 안전 관리와 \`python-dotenv\` 설정

소스코드에 API 키가 포함된 채 GitHub 등에 실수로 공개되면 수백만 원의 무단 과금이 발생할 수 있으므로, 반드시 ** 환경변수(\`.env\` 파일)**로 관리해야 합니다.

### \`.env\` 파일 내용
\`\`\`env
OPENAI_API_KEY=sk-proj-xxxx...
GEMINI_API_KEY=AIzaSy...
\`\`\`

### 파이썬 연동 코드 (\`main.py\`)
\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. API 호출 시 발생하는 RateLimitError(요청 한도 초과)는 어떻게 해결하나요?**
A. 분당 요청 수(RPM)나 분당 토큰 수(TPM) 한도를 초과했을 때 발생합니다. 코드에 \`tenacity\` 라이브러리를 활용해 지수 백오프(Exponential Backoff) 재시도 로직을 추가하거나 결제 한도 플랜을 상향해야 합니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-system-prompt-and-hyperparameters',
    title: '시스템 메시지와 하이퍼파라미터 제어',
    seo_title: 'LLM 하이퍼파라미터 완전 조율 - Temperature, Top_P, Max Tokens, Presence Penalty',
    seo_description: '모델의 창의성과 무작위성을 제어하는 Temperature, Top_P, 최대 출력 토큰 제어 Max Tokens, 반복 방지 Presence/Frequency Penalty 하이퍼파라미터를 배웁니다.',
    excerpt: 'AI 모델의 페르소나를 결정하는 System Prompt와 답변의 창의성, 안정성, 문장 반복 방지를 제어하는 하이퍼파라미터 설정 노하우를 배웁니다.',
    content_md: `LLM API 호출 시 모델에게 역할을 부여하는 **System Message**와 모델의 확률 추론 성향을 세밀하게 조율하는 **하이퍼파라미터(Hyperparameter)**를 제어할 수 있습니다.

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

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Temperature를 0.0으로 두면 항상 100% 똑같은 답변이 나오나요?**
A. 이론적으로는 동일한 입력에 동일한 단어가 나와야 하지만, GPU 병렬 연산의 미세한 부동소수점 오차로 인해 실제로는 약간의 차이가 발생할 수 있습니다. (완벽 고정을 위해 \`seed\` 파라미터 활용 가능)
`
  },
  {
    order_index: 6,
    slug: 'ch06-structured-outputs-json',
    title: '구조화된 데이터 출력 (Structured Output & JSON)',
    seo_title: 'LLM JSON 파싱 및 Structured Output - Pydantic 기반 정밀 데이터 모델링',
    seo_description: '자유 텍스트 답변 대신 DB 및 외부 시스템에 직접 삽입 가능한 100% 검증된 JSON 출력(Structured Output)과 Pydantic 파이썬 모델 활용법을 학습합니다.',
    excerpt: 'AI 답변을 애플리케이션이나 DB에 오류 없이 파싱할 수 있도록 엄격한 JSON 규격으로 출력시키는 Structured Output 기술을 배웁니다.',
    content_md: `생성형 AI를 실제 웹 서비스의 데이터베이스나 백엔드 로직에 연동하려면 텍스트 답변 대신 검증 가능한 규격화된 **JSON 데이터(Structured Output)**로 받아야 합니다.

---

## 1. Structured Output 용어 사전 (Glossary)

- **JSON (JavaScript Object Notation)**: 키-값(Key-Value) 구조로 데이터를 표현하는 국제 경량 표준 데이터 교환 포맷입니다.
- **Pydantic**: 파이썬에서 데이터 구조와 타입을 클래스 형태로 선언하고, 런타임에 자동으로 데이터 유효성을 검증(Validation)해주는 대표적 라이브러리입니다.
- **Structured Outputs**: OpenAI가 도입한 기능으로, 제공된 JSON Schema를 모델이 100% 완벽하게 준수하도록 이진 문법 제약을 거는 기술입니다.

---

## 2. Pydantic 라이브러리 기반 정밀 JSON 데이터 추출

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`response_format={"type": "json_object"}\`와 \`Structured Outputs\`의 차이는?**
A. 기존 \`json_object\` 방식은 JSON 형태로 출력하려 노력하지만 키 이름이 빠지거나 문법이 깨질 확률이 미세하게 존재했습니다. 반면 \`Structured Outputs\`(Pydantic 스키마 연동)는 스키마 일치율 100%를 보장합니다.
`
  },
  {
    order_index: 7,
    slug: 'ch07-conversational-ai-history',
    title: '대화형 AI 챗봇 구현과 대화 이력 관리',
    seo_title: '대화형 AI 챗봇 개발 - 대화 이력(Chat History) 메모리 관리 및 슬라이딩 윈도우',
    seo_description: '무상태성(Stateless) LLM API에 이전 대화 내용(Chat History)을 기억시키는 멀티턴 대화 구조, 세션 관리 및 메모리 초과 방지 슬라이딩 윈도우 전략을 학습합니다.',
    excerpt: '이전 사용자 질문과 답변 기록을 효율적으로 기억하고 이어서 대화하는 대화형 AI 챗봇의 대화 이력(Chat History) 메모리 관리 알고리즘을 배웁니다.',
    content_md: `LLM API는 자체적으로 이전 대화를 기억하지 않는 **Stateless(무상태성)** 통신 방식을 사용합니다. 따라서 챗봇이 대화 맥락을 기억하게 하려면 개발자가 이전 대화 기록(**Chat History**)을 배열에 유지하여 매 요청마다 전달해야 합니다.

---

## 1. 대화 이력 용어 사전 (Glossary)

- **Stateless (무상태성)**: API 요청과 요청 사이의 상태나 이전 입력값을 서버가 보관하지 않는 독립적 통신 특성입니다.
- **Multi-turn (멀티턴 대화)**: 한 번의 질의응답으로 끝나지 않고, 이전 대화 맥락을 계속 참조하며 연속적으로 이어지는 대화 형태입니다.
- **Sliding Window Memory**: 대화 턴(Turn)이 늘어날 때 토큰 수 한도를 넘지 않도록 최신 N개의 대화 이력만 잘라서 유지하는 전략입니다.
- **Summary Memory**: 오래된 대화 이력을 LLM을 통해 축약 문장으로 요약하여 컨텍스트 상단에 주입하는 메모리 절약 전략입니다.

---

## 2. 슬라이딩 윈도우 대화 메모리 파이썬 챗봇 클래스

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 다수의 웹 사용자가 동시에 접속할 때 대화 이력은 어떻게 구분하나요?**
A. 사용자별로 고유한 \`session_id\` (UUID)를 발급하고, Redis나 데이터베이스에 \`session_id\`를 키로 하여 대화 기록 리스트를 분리 관리해야 합니다.
`
  },
  {
    order_index: 8,
    slug: 'ch08-function-calling-and-tools',
    title: 'LLM 외부 도구 연동 (Function Calling과 에이전트)',
    seo_title: 'Function Calling과 AI 에이전트 - LLM 외부 API 연동 및 자율 도구 실행',
    seo_description: 'LLM이 직접 대답할 수 없는 실시간 정보(날씨, 주가, DB 조회)가 필요할 때 파이썬 함수를 스스로 호출하는 Function Calling 기법과 AI 에이전트 구조를 해설합니다.',
    excerpt: 'LLM이 실시간 날씨, 계산기, DB 조회 등 파이썬 외부 도구를 스스로 판단하여 선택하고 호출하는 Function Calling 기반 자율 에이전트를 구축합니다.',
    content_md: `**함수 호출(Function Calling)**은 LLM이 직접 대답할 수 없는 실시간 데이터(날씨, 주가, DB 조회, 외부 API)가 필요할 때, 어떤 파이썬 함수를 호출해야 하는지 스스로 판단하여 매개변수 JSON을 반환하는 기술입니다.

---

## 1. Function Calling & Agent 용어 사전 (Glossary)

- **Function Calling**: LLM이 질문을 분석하여 미리 정의된 도구(Tools) 목록 중 필요한 함수 이름과 전달 인자(Arguments)를 도출해내는 기능입니다.
- **AI Agent (자율 AI 에이전트)**: 스스로 목표(Goal)를 이해하고, 계획(Plan)을 세우며, 주도적으로 도구를 호출해 결과를 종합하는 지능형 시스템입니다.
- **ReAct Framework (Reasoning + Acting)**: "생각(Thought) -> 행동(Action) -> 관찰(Observation)"의 루프를 반복하여 문제를 해결하는 에이전트 핵심 아키텍처입니다.

---

## 2. 파이썬 Function Calling 풀 루프 구현 코드

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. LLM이 무한히 루프를 돌며 나쁜 함수를 실행할 위험은 없나요?**
A. 에이전트 구축 시 최대 도구 실행 횟수(예: \`max_iterations=5\`) 제약 조건을 걸어야 하며, 데이터 삭제/결제 같은 위험한 함수 실행 전에는 사람의 승인(Human-in-the-loop)을 받도록 설계해야 합니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-embeddings-and-rag-basics',
    title: '임베딩(Embedding)과 RAG(검색 증강 생성) 기초',
    seo_title: '임베딩과 RAG 시스템 - Vector DB, 청킹, 코사인 유사도 및 GraphRAG 입문',
    seo_description: '텍스트를 숫자의 벡터로 바꾸는 임베딩(Embedding) 원리, 사내 문서를 검색해 환각 없이 답하는 RAG(Search-Augmented Generation) 3단계 아키텍처를 학습합니다.',
    excerpt: '문장의 의미를 수치 벡터로 변환하는 임베딩 기술과 외부 보안 문서 데이터를 검색해 LLM에 제공하는 RAG(검색 증강 생성) 시스템의 구조를 배웁니다.',
    content_md: `**RAG(Retrieval-Augmented Generation, 검색 증강 생성)**는 모델을 새로 학습시키지 않고도 사내 보안 문서나 최신 자료를 실시간 검색하여 환각 없이 정밀한 답변을 내놓게 만드는 핵심 Enterprise 아키텍처입니다.

---

## 1. RAG 핵심 용어 사전 (Glossary)

- **Embedding (임베딩)**: 단어나 문장의 고유한 의미적 특징을 수백~수천 차원의 숫자 벡터(Vector Array)로 변환하는 기법입니다. (비슷한 의미의 문장은 고차원 공간에서 가까운 거리에 위치)
- **Vector DB (벡터 데이터베이스)**: 고차원 임베딩 벡터 간의 거리를 인덱싱하여 밀리초(ms) 단위로 고속 검색하는 전문 DB입니다. (예: ChromaDB, Pinecone, FAISS, Qdrant)
- **Cosine Similarity (코사인 유사도)**: 두 벡터 사이의 각도 코사인 값을 이용해 문장의 의미적 유사도(-1 ~ 1)를 측정하는 수학 공식입니다.
- **Chunking (청킹)**: 긴 문서 텍스트를 검색 효율을 높이기 위해 300~1000자 내외의 작은 단락 조각으로 쪼개는 전처리입니다.

---

## 2. RAG 아키텍처의 3단계 작동 흐름

\`\`\`
[1. Indexing 단계] 
원본 문서 (PDF/Word) ---> 텍스트 분할 (Chunking) ---> Embedding 모델 변환 ---> Vector DB 저장

[2. Retrieval & Generation 단계]
사용자 질문 ---> 질문 Embedding 변환 ---> Vector DB에서 유사 문서 Top-K 검색 ---> Prompt Context 합체 ---> LLM 최종 답변
\`\`\`

---

## 3. 파이썬 임베딩 생성 및 코사인 유사도 실습 예제

\`\`\`python
import numpy as np

# 1. OpenAI 임베딩 API 호출 (text-embedding-3-small)
def get_embedding(text):
    res = client.embeddings.create(input=text, model="text-embedding-3-small")
    return res.data[0].embedding

# 2. 코사인 유사도 계산 함수
def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

vec1 = get_embedding("아두이노 마이크로컨트롤러 프로그래밍")
vec2 = get_embedding("임베디드 보드 스케치 코딩")
vec3 = get_embedding("맛있는 맛집 삼겹살 레시피")

print("문장 1과 문장 2 유사도 (연관성 높음):", cosine_similarity(vec1, vec2))
print("문장 1과 문장 3 유사도 (연관성 낮음):", cosine_similarity(vec1, vec3))
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 키워드 검색(BM25)과 벡터 유사도 검색의 차이는?**
A. 키워드 검색은 정확히 일치하는 단어 문자가 있어야 찾지만, 벡터 검색은 "노트북이 고장 났어요"라고 검색해도 키워드는 없지만 의미가 통하는 "PC 수리 A/S 안내문"을 찾아내는 장점이 있습니다. 최신 RAG 시스템은 둘을 섞어 쓰는 **Hybrid Search**를 채택합니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-ai-application-project',
    title: '실전 프로젝트: 나만의 AI 비서 애플리케이션 구축',
    seo_title: '파이썬 실전 AI 비서 프로젝트 - 멀티턴 챗봇, 요약 엔진 및 도구 연동',
    seo_description: '배운 시스템 프롬프트, JSON 파싱, 대화 이력 메모리 및 도구 호출 기법을 결합하여 실전 동작하는 파이썬 스마트 AI 비서 객체를 개발합니다.',
    excerpt: '프롬프트 엔지니어링, 대화 메모리 관리, JSON 파싱 및 외부 도구 연동 기술을 하나로 융합한 나만의 실전 파이썬 AI 비서 모듈을 구현합니다.',
    content_md: `앞서 배운 프롬프트 디자인, 대화 이력 메모리, JSON 구조화 및 함수 연동 기법을 하나로 융합하여 **실무형 파이썬 AI 스마트 비서 모듈**을 구현합니다.

---

## 1. 실전 파이썬 AI 비서 클래스 완전체 코드

\`\`\`python
import json
from openai import OpenAI

class EnterpriseAIAssistant:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)
        self.system_prompt = {
            "role": "system",
            "content": "너는 DAVHAVE의 스마트 수석 AI 비서야. 답변은 간결하고 전문적으로 작성해 줘."
        }
        self.history = [self.system_prompt]

    def ask(self, user_text):
        """1. 일반 멀티턴 대화 수행"""
        self.history.append({"role": "user", "content": user_text})
        
        response = self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=self.history,
            temperature=0.4
        )
        
        reply = response.choices[0].message.content
        self.history.append({"role": "assistant", "content": reply})
        return reply

    def extract_tasks_json(self, document_text):
        """2. 업무 문서에서 할 일 목록을 JSON으로 자동 구조화 파싱"""
        prompt = f"다음 문서에서 핵심 작업 목록과 기한을 JSON으로 파싱해 줘:\n{document_text}"
        
        res = self.client.chat.completions.create(
            model="gpt-4o-mini",
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": "JSON format: {\"tasks\": [{\"task\": \"\", \"due\": \"\"}]}"},
                {"role": "user", "content": prompt}
            ]
        )
        return json.loads(res.choices[0].message.content)

# 사용 테스트
assistant = EnterpriseAIAssistant(api_key="YOUR_API_KEY")
print(assistant.ask("안녕하세요! 오늘 마케팅 회의 준비를 도와주세요."))
\`\`\`

---

## 2. 자주 묻는 질문 (Q&A)

**Q. AI 비서를 서비스 서비스로 프로덕션 배포할 때 가장 중요한 고려 요소 3가지는?**
A. 1) **API Key 보안 감추기** (환경변수/Secret 매니저), 2) **비동기 스트리밍(Streaming)**으로 답변 반응 시간 단축, 3) **토큰 비용 과금 모니터링**입니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-vibe-coding-fundamentals',
    title: 'AI 시대의 개발 패러다임: 바이브 코딩(Vibe Coding) 입문',
    seo_title: '바이브 코딩(Vibe Coding) 완벽 가이드 - Cursor, Claude Artifacts & 프롬프트 앱 제작',
    seo_description: '안드레 카파시가 주창한 바이브 코딩(Vibe Coding)의 정의, Cursor IDE 및 Claude Artifacts 연동, 자연어로 풀스택 웹 앱을 10분 만에 빌드하는 노하우를 배웁니다.',
    excerpt: '문법 코딩 대신 자연어 프롬프트 대화만으로 전체 웹 서비스와 애플리케이션을 완성하는 최신 AI 개발 패러다임 바이브 코딩(Vibe Coding)을 다룹니다.',
    content_md: `**바이브 코딩(Vibe Coding)**은 전 테슬라 AI 총괄이자 OpenAI 연구원인 안드레 카파시(Andrej Karpathy)가 제시한 미래형 개발 방법론입니다. 복잡한 프로그래밍 언어의 문법을 사람이 직접 한 줄 한 줄 타핑하는 대신, **개발자의 의도와 '느낌(Vibe)'을 자연어로 지시**하여 AI 코딩 에이전트가 소프트웨어 전체를 빌드하게 만드는 혁신적 개발 패러다임입니다.

---

## 1. 바이브 코딩 전문 용어 사전 (Glossary)

- **Vibe Coding (바이브 코딩)**: 코드 한 줄 작성 없이 자연어 대화와 피에백만으로 풀스택 서비스나 유틸리티 소프트웨어를 창작하는 프롬프트 기반 개발 기법입니다.
- **AI Native IDE (Cursor / Windsurf)**: 프로젝트 전체 코드베이스의 파일 문맥을 이해하고, 내장된 LLM이 직접 코드를 수정, 리팩토링, 빌드해주는 차세대 에디터입니다.
- **Claude Artifacts / Bolt.new**: 브레인스토밍 프롬프트만 입력하면 실시간으로 인터랙티브한 웹 화면과 코드를 우측 샌드박스 창에 렌더링해 주는 웹 에이전트 서비스입니다.
- **Iterative Refinement (반복적 개선)**: 첫 시제품(MVP)을 생성한 후 버그나 추가 디자인 요구사항을 프롬프터가 AI와 대화하며 단계별로 다듬어가는 개발 루프입니다.

---

## 2. 바이브 코딩으로 유틸리티 앱 빌드하는 4단계 프로세스

1. **아이디어 및 화면 명세 프롬프팅**: "HTML, Vanilla CSS, JS만 사용해서 예쁜 글자 수 세기 웹 앱을 만들어 줘."
2. **시제품(MVP) 동작 검증**: AI가 생성한 코드 조각을 실행하고 기본 동작(글자 수 카운팅) 확인.
3. **인터랙션 및 기능 확장 피드백**: "공백 포함/제외 기능과 예상 읽기 시간(Read Time) 카운트 기능도 추가해 줘."
4. **디자인 UI 폴리싱**: "Glassmorphism 다크 모드 스타일로 반응형 UI를 모던하게 변경해 줘."

---

## 3. 바이브 코딩 실전 예제 코드: 실시간 글자 수 분석기

\`\`\`html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Vibe Coding - 실시간 글자 수 분석기</title>
  <style>
    body { background: #121212; color: #fff; font-family: 'Pretendard', sans-serif; display: flex; justify-content: center; padding: 40px; }
    .card { background: #1e1e1e; padding: 30px; border-radius: 16px; width: 100%; max-width: 600px; box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
    textarea { width: 100%; height: 180px; background: #2a2a2a; border: 1px solid #444; color: #fff; padding: 15px; border-radius: 8px; font-size: 16px; resize: vertical; }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px; }
    .stat-box { background: #2a2a2a; padding: 15px; border-radius: 8px; text-align: center; }
    .stat-box h4 { margin: 0; color: #888; font-size: 14px; }
    .stat-box p { margin: 8px 0 0; font-size: 24px; font-weight: bold; color: #ff6b35; }
  </style>
</head>
<body>
  <div class="card">
    <h2>✍️ 실시간 텍스트 분석기</h2>
    <textarea id="editor" placeholder="여기에 텍스트를 입력하거나 붙여넣으세요..."></textarea>
    <div class="stats-grid">
      <div class="stat-box"><h4>공백 포함</h4><p id="cntWithSpace">0</p></div>
      <div class="stat-box"><h4>공백 제외</h4><p id="cntNoSpace">0</p></div>
      <div class="stat-box"><h4>단어 수</h4><p id="cntWords">0</p></div>
    </div>
  </div>

  <script>
    const editor = document.getElementById('editor');
    editor.addEventListener('input', () => {
      const val = editor.value;
      document.getElementById('cntWithSpace').textContent = val.length;
      document.getElementById('cntNoSpace').textContent = val.replace(/\s/g, '').length;
      const words = val.trim().split(/\s+/).filter(w => w.length > 0);
      document.getElementById('cntWords').textContent = words.length;
    });
  </script>
</body>
</html>
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 바이브 코딩 시 코드가 꼬이거나 에러가 나면 어떻게 하나요?**
A. 에러 브라우저 콘솔 로그나 터미널의 에러 메시지 텍스트 전체를 복사하여 AI에게 "이 에러가 발생했어. 원인을 분석하고 전면 수정된 전체 코드를 제공해 줘"라고 다시 피드백을 전달하면 95% 이상 스스로 수정합니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-stt-tts-voice-ai',
    title: '음성 인식(STT)과 음성 합성(TTS) 기반 Voice AI 구현',
    seo_title: 'Voice AI 개발 - OpenAI Whisper STT 음성 인식 & gTTS/ElevenLabs 음성 합성',
    seo_description: '음성 오디오를 텍스트로 변환하는 Whisper STT, 답변 텍스트를 자연스러운 인간 목소리로 렌더링하는 TTS 및 음성 인터랙션 파이프라인을 구축합니다.',
    excerpt: '사람의 말을 알아듣는 STT 기술과 목소리로 대답하는 TTS 기술을 결합하여 말로 대화하는 대화형 Voice AI 서비스를 개발합니다.',
    content_md: `사용자의 목소리를 알아듣고 자연스러운 음성 톤으로 답변을 들려주는 **Voice AI 애플리케이션** 시스템을 개발합니다.

---

## 1. Voice AI 전문 용어 사전 (Glossary)

- **STT (Speech-to-Text)**: 사람의 아날로그 음성 녹음 오디오 데이터(MP3, WAV)를 인공지능이 분석하여 텍스트 문자열로 자동 변환하는 기술입니다.
- **Whisper**: OpenAI가 만든 대표적인 오픈소스 다국어 음성 인식 신경망 모델로, 노이즈와 사투리가 섞인 음성도 높은 정확도로 텍스트화합니다.
- **TTS (Text-to-Speech)**: 텍스트 문장을 감정이 이입된 실제 사람의 다양한 목소리 톤 오디오 파일로 합성하는 기술입니다. (예: ElevenLabs, OpenAI Audio)
- **Audio Sampling Rate (샘플링 주파수)**: 아날로그 음성 파형을 디지털 신호로 바꿀 때 1초당 추출하는 데이터 샘플 수입니다. (예: 16,000Hz / 44,100Hz)

---

## 2. OpenAI Whisper STT & TTS 파이썬 통합 구현

\`\`\`python
from openai import OpenAI

client = OpenAI()

# 1. 사용자의 녹음 음성 파일(STT) 인코딩
def transcribe_audio(audio_filepath):
    with open(audio_filepath, "rb") as f:
        transcript = client.audio.transcriptions.create(
            model="whisper-1",
            file=f,
            language="ko" # 한국어 강제
        )
    return transcript.text

# 2. AI 답변 텍스트를 사람 목소리 오디오로 생성 (TTS)
def generate_speech(text_content, output_mp3_path):
    response = client.audio.speech.create(
        model="tts-1",
        voice="nova", # 목소리 톤: alloy, echo, fable, onyx, nova, shimmer
        input=text_content
    )
    response.stream_to_file(output_mp3_path)
    return output_mp3_path

# Voice AI 파이프라인 연동 테스트
user_voice_text = transcribe_audio("user_question.mp3")
print("음성 인식 결과:", user_voice_text)

ai_reply = "안녕하세요! 말씀하신 질문에 대해 답변해 드리겠습니다."
generate_speech(ai_reply, "ai_response.mp3")
print("AI 목소리 답변 생성 완료: ai_response.mp3")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 음성 대화 시 반응 시간(Latency)을 최소화하려면 어떻게 해야 하나요?**
A. 전체 텍스트가 다 완성될 때까지 기다리지 않고, LLM이 문장을 생성하는 즉시 스트리밍(Streaming) 단위로 청크를 쪼개어 TTS로 넘기는 **Streaming Voice Pipeline**을 구축해야 합니다.
`
  },
  {
    order_index: 13,
    slug: 'ch13-pdf-document-qa-rag',
    title: 'PDF 문서를 읽고 답하는 RAG 문서 질의응답 시스템',
    seo_title: 'PDF RAG 서비스 개발 - PyPDF 텍스트 추출, LangChain & Vector DB 질의응답',
    seo_description: '수백 페이지의 PDF 문서 및 업무 매뉴얼을 파싱하고, 의미 단위 청킹(Chunking) 및 Vector DB 저장을 거쳐 답변하는 PDF RAG 서비스를 구현합니다.',
    excerpt: '사내 PDF 문서나 긴 연구 보고서를 읽고 내용에 기반하여 환각 없이 정확히 답변하는 PDF 전용 RAG 질의응답 서비스를 구축합니다.',
    content_md: `수백 페이지에 달하는 **PDF 문서, 규정집, 매뉴얼**을 읽고 사용자의 질문에 해당 문서 구절을 출처로 인용하여 정확히 답변하는 **PDF RAG 시스템**을 제작합니다.

---

## 1. PDF RAG 전문 용어 사전 (Glossary)

- **PyPDF / pdfplumber**: PDF 파일 내부의 텍스트 레이아웃, 이미지, 표 데이터를 문자열로 파싱하는 파이썬 라이브러리입니다.
- **RecursiveCharacterTextSplitter**: 줄바꿈(\`\n\n\`), 마침표(\`.\`), 띄어쓰기를 순차적으로 파악하여 의미 단락이 끊기지 않게 분할하는 청킹 도구입니다.
- **Overlap Size**: 분할된 청크 간에 일정한 문장(예: 100자)을 겹쳐 배치하여 청크 경계에서 문맥 손실이 발생하는 것을 방지하는 기술입니다.

---

## 2. PDF 파싱 및 RAG 질의응답 시스템 파이썬 구현

\`\`\`python
from pypdf import PdfReader
from openai import OpenAI

client = OpenAI()

def process_pdf_and_ask(pdf_filepath, user_question):
    # 1. PDF 파일 텍스트 전체 추출
    reader = PdfReader(pdf_filepath)
    raw_text = ""
    for idx, page in enumerate(reader.pages):
        raw_text += f"\n--- [Page {idx+1}] ---\n" + page.extract_text()

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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. PDF 내 표(Table)나 그래프 데이터도 RAG가 잘 읽나요?**
A. 단순 텍스트 추출기를 쓰면 표의 행과 열이 뭉개져 엉뚱한 수치를 읽을 수 있습니다. 표가 많은 문서의 경우 \`pdfplumber\`로 표 구조를 마크다운 테이블 형태(\`|---|---|\`)로 파싱하거나 멀티모달 LLM 비전 모델로 이미지 그대로 전달하는 방식을 써야 합니다.
`
  },
  {
    order_index: 14,
    slug: 'ch014-auto-summary-report-generator',
    title: '대화 및 문서를 자동 요약하여 레포트로 생성하는 AI 서비스',
    seo_title: 'AI 문서 요약 및 레포트 생성기 - 회의록 요약, Action Item 및 PDF 문서 전환',
    seo_description: '긴 대화록이나 업무 회의 녹취록을 핵심 요약, 주요 결정 사항, 담당자별 Action Item으로 자동 정리하여 마크다운 및 PDF 레포트로 생성하는 시스템을 만듭니다.',
    excerpt: '수많은 회의록이나 대화 기록을 파싱하여 핵심 요점, 결정 사항, 담당자별 Action Item으로 자동 정리해 주는 AI 레포트 생성 서비스를 만듭니다.',
    content_md: `긴 대화 녹취록이나 업무 회의록을 입력받아 핵심 요약, 주요 결정 사항, 담당자별 **Action Item**으로 정돈하고 깔끔한 레포트 문서로 생성하는 시스템을 구현합니다.

---

## 1. 레포트 생성 전문 용어 사전 (Glossary)

- **Abstractive Summarization (생성 요약)**: 문장을 그대로 복사하는 대신 의미를 완벽히 이해하고 새로운 문체와 요점 위주로 재구성하는 고도화된 LLM 요약 기법입니다.
- **Action Item (실행 과제)**: 회의 결과로 도출되어 특정 담당자가 지정된 기한까지 완료해야 하는 명확한 과제 항목입니다.
- **Markdown-to-PDF**: AI가 생성한 마크다운 텍스트를 인쇄 가능한 PDF 보고서 문서 파일로 변환하는 기술 파이프라인입니다.

---

## 2. AI 회의록 자동 요약 및 레포트 생성기 파이썬 코드

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 요약 결과물에 환각이나 왜곡이 발생하지 않도록 하려면?**
A. Temperature를 0.0~0.1로 낮추고, 프롬프트에 "원문에 언급되지 않은 내용은 절대로 추측하여 작성하지 말 것"이라는 명시적 제약 조건을 부여해야 합니다.
`
  },
  {
    order_index: 15,
    slug: 'ch15-web-browsing-search-agent',
    title: '실시간 웹 서핑 및 자료 탐색 AI 에이전트 구축',
    seo_title: '웹 서핑 AI 에이전트 구축 - Tavily API, 웹 스크래핑 및 실시간 정보 검색',
    seo_description: '학습 데이터 최신성 한계(Knowledge Cutoff)를 넘어서 직접 구글/웹을 실시간 서핑(Tavily API)하여 최신 뉴스와 정보를 탐색하고 답하는 에이전트를 만듭니다.',
    excerpt: 'LLM의 최신 정보 부재 한계를 극복하기 위해 인터넷을 실시간 탐색 및 스크래핑하여 최신 정보와 출처를 함께 제공하는 웹 서핑 AI 에이전트를 구축합니다.',
    content_md: `LLM 모델의 데이터 학습 시점 한계(**Knowledge Cutoff**)를 극복하기 위해, **직접 실시간 인터넷 서핑을 수행하여 최신 뉴스와 데이터를 탐색하고 출처를 명시하여 답하는 AI 에이전트**를 제작합니다.

---

## 1. 웹 서핑 에이전트 전문 용어 사전 (Glossary)

- **Search API (Tavily / SerpAPI)**: AI 에이전트 전용으로 광고와 불필요한 태그를 제거하고 본문 핵심 텍스트만 깨끗하게 반환해 주는 전용 검색 API입니다.
- **Web Scraping (웹 스크래핑)**: 수집된 웹페이지 URL에 접속하여 HTML 구조를 분석하고 본문 텍스트를 정제해내는 기술입니다.
- **Knowledge Cutoff**: 특정 LLM 모델의 사전 학습 데이터가 차단된 최신 날짜 시점을 뜻합니다.

---

## 2. Tavily API 연동 웹 탐색 AI 에이전트 파이썬 코드

\`\`\`python
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
        context += f"\n[출처: {item['url']}]\n제목: {item['title']}\n내용: {item['content']}\n"
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 일반 웹 크롤링(BeautifulSoup) 대신 Tavily나 SerpAPI를 쓰는 이유는?**
A. 일반 웹사이트는 보안 차단(CAPTCHA, Cloudflare)이 자주 걸리고 헤더/푸터 광고 태그가 섞여 있어 토큰이 낭비됩니다. 반면 Tavily는 AI 연동 전용으로 본문 텍스트만 정제하여 전달하므로 토큰을 80% 이상 절약합니다.
`
  },
  {
    order_index: 16,
    slug: 'ch16-financial-stock-analysis-ai',
    title: '실시간 주식/금융 데이터 연동 AI 투자 분석 시스템',
    seo_title: 'AI 주식 금융 분석가 구축 - yfinance 실시간 주가 데이터 수집 & LLM 리포트',
    seo_description: 'yfinance 파이썬 라이브러리로 실시간 주가, 재무제표, PER/PBR 지표를 수집하고, LLM을 결합하여 종목 투자 분석 및 포트폴리오 리포트를 생성하는 시스템을 학습합니다.',
    excerpt: '실시간 주식 가격 및 기업 재무제표 데이터를 수집하고 LLM 투자 분석 모델을 적용하여 금융 리포트를 자동 작성하는 주식 분석 서비스를 구축합니다.',
    content_md: `야후 파이낸스(\`yfinance\`) 라이브러리로 **실시간 주가, 재무제표, 52주 최고/최저가 및 지표**를 수집하여 AI가 전문가 관점에서 종목 분석 리포트를 작성하는 시스템을 구축합니다.

---

## 1. 금융 AI 전문 용어 사전 (Glossary)

- **yfinance**: 야후 파이낸스(Yahoo Finance)의 미국/한국 주식 실시간 시세 및 재무제표 데이터를 수집하는 파이썬 패키지입니다.
- **PER (Price to Earnings Ratio)**: 주가를 1주당 순이익(EPS)으로 나눈 수치로, 기업 가치의 저평가/고평가 여부를 판단합니다.
- **PBR (Price to Book Ratio)**: 주가를 1주당 순자산(BPS)으로 나눈 수치입니다.
- **Portfolio Simulation**: 자산 배분 비중을 조절하며 백테스팅(Backtesting)을 수행하여 미래 수익률을 시뮬레이션하는 기법입니다.

---

## 2. 파이썬 실시간 주가 수집 및 AI 리포트 생성기

\`\`\`python
import yfinance as yf
from openai import OpenAI

client = OpenAI()

def analyze_financial_stock(ticker_symbol):
    # 1. yfinance로 주식 데이터 수집 (예: Apple 'AAPL', 테슬라 'TSLA', 삼성전자 '005930.KS')
    stock = yf.Ticker(ticker_symbol)
    info = stock.info
    
    financial_data = {
        "종목명": info.get("shortName"),
        "현재주가": f"{info.get('currentPrice')} {info.get('currency')}",
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 금융 AI 서비스를 제공할 때 법적으로 명시해야 하는 항목은?**
A. AI 서비스 화면 하단에 "본 서비스가 제공하는 분석 자료는 단순 정보 제공 목적이며, 모든 투자 결정과 책임은 이용자 본인에게 있습니다"라는 **법적 면책 조항(Disclaimer)**을 반드시 표기해야 합니다.
`
  },
  {
    order_index: 17,
    slug: 'ch17-google-oauth-and-cloud-backup',
    title: '구글 로그인(OAuth 2.0) 및 클라우드 데이터 백업',
    seo_title: '구글 OAuth 2.0 회원가입 및 Firebase/Supabase 클라우드 데이터 백업',
    seo_description: '구글 OAuth 2.0 소셜 로그인 연동, Firebase / Supabase 클라우드 DB에 사용자 개인 대화 기록과 AI 설정을 동기화하여 안전하게 백업하는 시스템을 구축합니다.',
    excerpt: '사용자 친화적인 구글 OAuth 2.0 소셜 로그인을 연동하고 Firebase/Supabase 데이터베이스에 개인 대화 기록과 설정을 동기화하는 백업 시스템을 구축합니다.',
    content_md: `사용자가 클릭 한 번으로 간편 로그인할 수 있는 **구글 OAuth 2.0** 시스템을 연동하고, 사용자별 AI 대화 기록과 환경 설정을 클라우드 데이터베이스에 백업 동기화합니다.

---

## 1. 회원 인증 & DB 전문 용어 사전 (Glossary)

- **OAuth 2.0**: 비밀번호를 직접 저장하지 않고 구글, 카카오 등 검증된 기업의 인증 자격 증명을 안전하게 수용하는 표준 소셜 로그인 인증 규격입니다.
- **Firebase / Supabase**: 서버 관리 없이 데이터베이스(NoSQL/PostgreSQL), 사용자 인증, 파일 스토리지 기능을 즉시 사용할 수 있는 BaaS(Backend-as-a-Service) 플랫폼입니다.
- **JWT (JSON Web Token)**: 인증 성공 후 사용자의 식별 정보와 권한을 암호화하여 서버와 주고받는 토큰 문자열입니다.

---

## 2. 구글 OAuth 2.0 로그인 프론트엔드 연동 코드

\`\`\`html
<!-- 구글 간편 로그인 버튼 HTML 템플릿 -->
<script src="https://accounts.google.com/gsi/client" async defer></script>

<div id="g_id_onload"
     data-client_id="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
     data-callback="handleCredentialResponse">
</div>

<div class="g_id_signin" data-type="standard" data-theme="filled_blue"></div>

<script>
function handleCredentialResponse(response) {
  // 구글 로그인 성공 시 암호화된 JWT ID 토큰 수신
  const id_token = response.credential;
  console.log("구글 인증 토큰 획득 완료:", id_token);
  
  // 백엔드 API 또는 Firebase로 토큰 전달하여 사용자 로그인 처리 및 데이터 백업
}
</script>
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 자체 DB 서버 대신 Supabase/Firebase BaaS를 많이 사용하나요?**
A. 데이터베이스 서버 설치, 보안 패치, 인증 로직 구축 시간을 절약할 수 있어, 바이브 코딩 및 AI 앱 개발 속도가 10배 이상 단축되기 때문입니다.
`
  },
  {
    order_index: 18,
    slug: 'ch18-pwa-and-mobile-app-conversion',
    title: '설치 없이 사용하는 PWA 및 모바일 앱(APK) 전환',
    seo_title: 'PWA(Progressive Web App) 구축과 안드로이드 APK / iOS 웹앱 포팅',
    seo_description: '웹 서비스를 모바일 앱처럼 설치 가능하게 만드는 PWA(Manifest, Service Worker) 구축과 1분 만에 안드로이드 APK 앱 파일로 포팅하는 기법을 해설합니다.',
    excerpt: '내가 만든 웹 앱을 설치형 PWA(Progressive Web App)로 변환하고, 1분 만에 안드로이드 APK 모바일 앱으로 빌드하여 배포하는 방법을 다룹니다.',
    content_md: `앱스토어 등록 절차나 모바일 코딩 없이, 웹 애플리케이션을 사용자의 스마트폰 바탕화면에 즉시 설치 가능한 **PWA(Progressive Web App)** 및 **안드로이드 APK 모바일 앱**으로 전환합니다.

---

## 1. PWA & 모바일 앱 전문 용어 사전 (Glossary)

- **PWA (Progressive Web App)**: 웹 표준 기술(HTML/CSS/JS) 기반이지만 모바일 앱처럼 홈 화면 설치, 오프라인 동작, 푸시 알림 기능을 제공하는 앱 형태입니다.
- **Service Worker (서비스 워커)**: 브라우저 백그라운드에서 실행되며 네트워크 요청 캐싱, 오프라인 화면 표시, 푸시 메시지 수신을 전담하는 자바스크립트 스크립트입니다.
- **manifest.json**: 앱 이름, 아이콘 이미지, 테마 색상, 디스플레이 모드(\`standalone\`) 정보가 적힌 설정 파일입니다.
- **TWA (Trusted Web Activity)**: PWA 웹사이트를 안드로이드 플레이스토어용 APK/AAB 패키지로 감싸주는 구글의 공식 기술 규격입니다.

---

## 2. PWA 필수 설정 1: \`manifest.json\` 파일 명세

\`\`\`json
{
  "name": "DAVHAVE 스마트 AI 비서",
  "short_name": "DAVHAVE AI",
  "description": "생성형 AI 기반 스마트 업무 보조 웹 앱",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#121212",
  "theme_color": "#ff6b35",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
\`\`\`

---

## 3. 웹을 1분 만에 안드로이드 APK 앱으로 만드는 방법

1. **PWABuilder ([pwabuilder.com](https://www.pwabuilder.com/)) 접속**:
2. 라이브 배포된 PWA 웹사이트 URL 입력 및 검증.
3. **[Package for Store]** 버튼 클릭 후 안드로이드 **APK 파일 다운로드** 및 스마트폰 설치!

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 아이폰(iOS Safari)에서도 PWA 설치가 잘 되나요?**
A. 네! 사파리 브라우저에서 웹사이트 접속 후 하단 **[공유 버튼] $\rightarrow$ [홈 화면에 추가]**를 누르면 아이폰 바탕화면에 앱 아이콘이 생성되어 상단 주소창이 없는 완전한 앱 모드로 실행됩니다.
`
  },
  {
    order_index: 19,
    slug: 'ch19-media-processing-utility-apps',
    title: '미디어 처리 AI 유틸리티 앱 제작 (이미지, 오디오, GIF)',
    seo_title: '미디어 처리 유틸리티 개발 - Pillow 이미지 리사이즈, WEBP 및 GIF 변환',
    seo_description: '파이썬 Pillow/FFmpeg 및 HTML5 Canvas를 활용하여 이미지 일괄 리사이즈, WEBP 용량 압축, GIF 애니메이션 생성 유틸리티 서비스를 개발합니다.',
    excerpt: '이미지 일괄 변환, WEBP 용량 압축, GIF 동영상 애니메이션 생성, 오디오 편집 등 실무 생산성을 조력하는 미디어 유틸리티 앱을 제작합니다.',
    content_md: `이미지 일괄 리사이즈, WEBP 포맷 용량 압축, GIF 애니메이션 동영상 제작 등 업무와 실생활 생산성을 조력하는 **미디어 처리 유틸리티 서비스**를 제작합니다.

---

## 1. 미디어 처리 전문 용어 사전 (Glossary)

- **Pillow (PIL)**: 파이썬에서 이미지 렌더링, 크롭, 리사이즈, 포맷 변환(PNG $\rightarrow$ WEBP), 필터링을 수행하는 대표 이미지 패키지입니다.
- **FFmpeg**: 동영상 및 오디오 파일의 자르기, 병합, 인코딩, 포맷 변환을 고속 수행하는 표준 멀티미디어 프레임워크입니다.
- **HTML5 Canvas**: 브라우저 단에서 자바스크립트로 픽셀을 직접 그리거나 이미지를 즉시 압축 편집할 수 있는 그래픽 요소입니다.

---

## 2. 파이썬 Pillow 이미지 일괄 압축/변환 예제 코드

\`\`\`python
from PIL import Image
import os

def batch_compress_images(input_folder, output_folder, max_width=800):
    """이미지를 최대 너비 800px로 비율 유지 리사이즈하고 WEBP 포맷으로 일괄 압축"""
    os.makedirs(output_folder, exist_ok=True)
    
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(('png', 'jpg', 'jpeg')):
            src_path = os.path.join(input_folder, filename)
            with Image.open(src_path) as img:
                # 1. 가로 세로 비율 계산하여 리사이즈
                w_percent = (max_width / float(img.size[0]))
                h_size = int((float(img.size[1]) * float(w_percent)))
                
                resized = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
                
                # 2. 용량이 작은 WEBP 포맷으로 저장
                out_name = f"opt_{os.path.splitext(filename)[0]}.webp"
                out_path = os.path.join(output_folder, out_name)
                resized.save(out_path, "WEBP", quality=80)
                print(f"압축 완료: {out_path}")

# batch_compress_images("raw_photos", "optimized_photos")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 서버를 거치지 않고 브라우저 자바스크립트만으로 이미지 용량을 압축할 수 있나요?**
A. 네! HTML5 \`<canvas>\` 태그에 사용자 선택 이미지를 그리고 \`canvas.toDataURL('image/jpeg', 0.7)\` 메소드를 호출하면 70% 압축된 JPEG 이미지 Blob 데이터를 즉시 추출할 수 있습니다.
`
  },
  {
    order_index: 20,
    slug: 'ch20-fullstack-ai-service-deployment',
    title: '풀스택 AI 애플리케이션 구축 및 클라우드 배포 종합 실습',
    seo_title: '풀스택 AI 서비스 배포 실습 - Streamlit & Cloudflare Workers 글로벌 배포',
    seo_description: '백엔드 LLM 모델 파이프라인과 프론트엔드를 결합한 풀스택 AI 웹 서비스를 구축하고 Cloudflare Workers / Streamlit 클라우드에 글로벌 배포합니다.',
    excerpt: '배운 생성형 AI 프롬프트 엔지니어링, 바이브 코딩, UI 프레임워크를 총동원하여 풀스택 AI 서비스를 개발하고 글로벌 클라우드 서버에 최종 배포합니다.',
    content_md: `배운 모든 생성형 AI 기술, 바이브 코딩, 프론트엔드 UI 및 백엔드 데이터베이스를 결합하여 완벽한 **풀스택 AI 서비스를 제작하고 글로벌 클라우드에 라이브 배포**합니다.

---

## 1. 클라우드 배포 전문 용어 사전 (Glossary)

- **Cloudflare Workers / Pages**: 전 세계 300개 이상의 Edge 데이터센터 망에서 서버리스(Serverless)로 애플리케이션을 1초 만에 배포하는 글로벌 플랫폼입니다.
- **Streamlit**: 파이썬 코드 몇 줄만으로 AI 인터랙티브 웹 UI 화면을 자동으로 생성해주는 대표적 파이썬 전용 풀스택 프레임워크입니다.
- **Custom Domain & SSL**: \`https://davhave.com\` 처럼 나만의 커스텀 도메인을 연결하고 암호화 보안(HTTPS)을 적용하는 작업입니다.

---

## 2. Streamlit 파이썬 풀스택 AI 챗봇 완성 코드

\`\`\`python
import streamlit as st
from openai import OpenAI

# 1. 페이지 타이틀 및 메타 레이아웃 설정
st.set_page_config(page_title="DAVHAVE AI 비서", page_icon="🤖", layout="centered")
st.title("🤖 DAVHAVE 스마트 풀스택 AI 비서")

# 2. 사이드바 API 키 입력
with st.sidebar:
    st.header("⚙️ 서비스 설정")
    user_api_key = st.text_input("OpenAI API Key", type="password")
    selected_model = st.selectbox("AI 모델 선택", ["gpt-4o-mini", "gpt-4o"])

# 3. 대화 세션 이력 초기화
if "messages" not in st.session_state:
    st.session_state["messages"] = [
        {"role": "assistant", "content": "안녕하세요! DAVHAVE 풀스택 AI 비서입니다. 무엇을 도와드릴까요?"}
    ]

# 4. 이전 대화 화면 렌더링
for msg in st.session_state.messages:
    st.chat_message(msg["role"]).write(msg["content"])

# 5. 사용자 입력 수신 및 AI 응답 렌더링
if prompt := st.chat_input("질문을 입력하세요..."):
    if not user_api_key:
        st.error("사이드바에 API 키를 입력해 주세요!")
        st.stop()

    client = OpenAI(api_key=user_api_key)
    
    st.session_state.messages.append({"role": "user", "content": prompt})
    st.chat_message("user").write(prompt)

    # API 응답 생성
    response = client.chat.completions.create(
        model=selected_model,
        messages=st.session_state.messages
    )
    
    reply = response.choices[0].message.content
    st.session_state.messages.append({"role": "assistant", "content": reply})
    st.chat_message("assistant").write(reply)
\`\`\`

---

## 3. 프로덕션 성공 배포 체크리스트 4단계

1. **보안 인프라**: API 키나 DB 비밀번호가 소스코드에 포함되지 않도록 \`secrets.toml\` 또는 환경변수로 감싸기
2. **반응 속도 (UX)**: 답변이 완성되는 동안 사용자에게 로딩 스피너(\`st.spinner\`)나 스트리밍(Streaming) 파이프라인 적용
3. **에러 핸들링**: API 연결 끊김이나 네트워크 장애 시 튕기지 않고 안내 팝업을 띄우는 예외 처리
4. **글로벌 배포**: Cloudflare / Streamlit Cloud / Vercel에 연결하여 SSL 보안이 적용된 서브도메인 발급

---

## 4. 자주 묻는 질문 (Q&A)

**Q. DAVHAVE 사이트처럼 Cloudflare Workers로 글로벌 배포할 때의 이점은?**
A. 사용자와 가장 가까운 글로벌 엣지 데이터센터에서 초저지연(Low Latency)으로 구동되며, 서버 관리 부담이나 콜드 스타트 지연 없이 안전하게 배포할 수 있습니다.
`
  }
];

// Split into 5 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 16),
  lessons.slice(16, 20)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Mega Enhanced AI Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const content_html = marked.parse(lesson.content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  '${escapeSql(lesson.slug)}',
  '${escapeSql(lesson.title)}',
  '${escapeSql(lesson.excerpt)}',
  '${escapeSql(lesson.content_md)}',
  '${escapeSql(content_html)}',
  'published',
  '${escapeSql(lesson.seo_title)}',
  '${escapeSql(lesson.seo_description)}',
  ${lesson.order_index},
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
`;
  }

  fs.writeFileSync(`scratch/seed_ai_mega_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 5 mega enhanced SQL chunk files for AI!');
