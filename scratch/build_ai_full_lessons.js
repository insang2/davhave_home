import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  {
    order_index: 1,
    slug: 'ch01-ai-llm-introduction',
    title: '생성형 AI와 거대언어모델(LLM) 및 구글 코랩 입문',
    seo_title: '생성형 AI와 LLM 개념 이해 - ChatGPT, Gemini 및 구글 코랩 환경 구축',
    seo_description: '인공지능과 생성형 AI의 차이, 거대언어모델(LLM)의 동작 원리, 트랜스포머 아키텍처 및 클라우드 파이썬 실습 환경인 구글 코랩(Google Colab) 사용법을 안내합니다.',
    excerpt: '생성형 AI와 거대언어모델(LLM)의 핵심 개념을 파악하고, 파이썬 기반 AI 개발을 위한 무료 클라우드 환경 구글 코랩(Google Colab)의 기초를 다집니다.',
    content_md: `**생성형 AI(Generative AI)**는 텍스트, 이미지, 음성, 코드 등 새로운 콘텐츠를 스스로 생성해내는 인공지능 기술입니다. 그 중심에는 인간의 언어를 이해하고 생성하는 **거대언어모델(LLM, Large Language Model)**이 있습니다.

---

## 1. 생성형 AI & LLM 전문 용어 사전 (Glossary)

- **LLM (Large Language Model)**: 수천억 개 이상의 매개변수(Parameter)를 바탕으로 방대한 문헌 데이터를 학습한 거대 신경망 모델입니다.
- **Transformer (트랜스포머)**: 2017년 구글이 발표한 'Attention Is All You Need' 논문 기반의 신경망 아키텍처로, 문맥 전체의 관계를 동시에 파악하는 Self-Attention 기법을 활용합니다.
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
3. 코드 셀에 파이썬 코드 입력 후 \`Shift + Enter\` 로 즉시 실행.

\`\`\`python
# 코랩 파이썬 실행 테스트
import sys
print(f"Python Version: {sys.version}")
print("Hello, DAVHAVE Generative AI World!")
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파이썬 초보자도 LLM API 개발을 시작할 수 있나요?**
A. 네! 최근 LLM 라이브러리(\`openai\`, \`google-generativeai\`)는 몇 줄의 파이썬 코드만으로도 강력한 AI 모델을 호출할 수 있어 입문하기 매우 좋습니다.
`
  },
  {
    order_index: 2,
    slug: 'ch02-prompt-engineering-principles',
    title: '프롬프트 엔지니어링의 핵심 4대 원칙',
    seo_title: '프롬프트 엔지니어링 기초 - 원하는 답변을 얻는 4가지 핵심 작성 원칙',
    seo_description: 'LLM에게 원하는 정확한 답변을 유도하는 프롬프트 엔지니어링 4대 원칙(명확성, 맥락 제공, 출력 형식 지정, 페르소나 부여)을 비교 예제와 학습합니다.',
    excerpt: 'AI 모델에 던지는 명령어인 프롬프트(Prompt)를 효과적으로 설계하여 답변의 품질을 10배 이상 올리는 4가지 핵심 작성 원칙을 다룹니다.',
    content_md: `**프롬프트 엔지니어링(Prompt Engineering)**이란 생성형 AI 모델이 의도에 정확히 부합하는 최상의 결과물을 출력하도록 지시문(Prompt)을 정교하게 설계하는 기술입니다.

---

## 1. 프롬프트 핵심 용어 사전 (Glossary)

- **System Prompt (시스템 프롬프트)**: AI 모델의 역할, 행동 규칙, 금지 사항을 상위 수준에서 통제하는 지시문입니다.
- **User Prompt (사용자 프롬프트)**: 사용자가 AI에게 던지는 직접적인 질문이나 요청 사항입니다.
- **Context (맥락/배경 지식)**: AI가 올바른 판단을 하도록 돕기 위해 프롬프트 내에 제공하는 배경 정보입니다.
- **Delimiters (구분자)**: \`"""\` 나 \`###\` 처럼 프롬프트 내에서 지시 사항과 입력 데이터 구역을 명확히 가르는 기호입니다.

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

\`\`\`markdown
[역할] 너는 전문 IT 커리어 컨설턴트야.
[목적] 지원자의 개발자 이력서를 검토하고 피드백을 제공하는 거야.
[맥락] 지원자는 신입 프론트엔드 개발자이며, React 프로젝트 경험 2개가 있어.
[출력 형식] 
1. 강점 (2가지)
2. 개선할 점 (2가지)
3. 추천 기술 스택 (bullet point)
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 한국어로 물어보는 것과 영어로 프롬프트를 작성하는 것에 차이가 있나요?**
A. 대부분의 최신 LLM은 영문 데이터로 가장 많이 학습되었으므로, 영어로 작성 시 답변 속도 및 복잡한 논리 처리 성능이 10~20% 높습니다. 하지만 최근 GPT-4o나 Gemini 1.5는 한국어 능력도 매우 훌륭합니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-advanced-prompting-techniques',
    title: '고급 프롬프팅 기법 (Few-Shot, Chain-of-Thought)',
    seo_title: '고급 프롬프트 엔지니어링 - Few-Shot Prompting과 Chain-of-Thought(CoT)',
    seo_description: '예시를 주고 학습시키는 Zero-Shot vs Few-Shot Prompting, AI의 추론 성능을 향상시키는 생각의 사슬(Chain-of-Thought) 기법을 배웁니다.',
    excerpt: '예시 입출력을 전달하는 Few-Shot 프롬프팅과 AI가 단계별로 논리적으로 생각하게 만드는 Chain-of-Thought(CoT) 고급 기법을 다룹니다.',
    content_md: `단순한 질문을 넘어서 complex한 문제 해결 및 정확한 분류 작업을 수행할 때는 **고급 프롬프팅 기법**을 활용해야 합니다.

---

## 1. 고급 프롬프팅 용어 사전 (Glossary)

- **Zero-Shot Prompting**: 예시 데이터 없이 지시문만으로 즉시 답변을 요청하는 기본 방식입니다.
- **Few-Shot Prompting**: 원하는 결과의 입력과 출력 예시(Example)를 1개 이상 제시하여 AI가 패턴을 유추하도록 돕는 프롬프팅입니다.
- **Chain-of-Thought (CoT, 생각의 사슬)**: 중간 추론 과정을 단계별로 서술하도록 유도하여 복잡한 계산이나 논리 문제의 정답률을 올리는 기법입니다.
- **Prompt Chaining**: 거대한 작업을 여러 개의 작은 프롬프트 단계로 쪼개어 앞 단계의 출력을 다음 단계의 입력으로 전달하는 모듈화 기법입니다.

---

## 2. Few-Shot Prompting 실전 예시

\`\`\`markdown
[Few-Shot 예시]
다음 감정 상태를 분석해 줘.

입력: "오늘 주문한 상품이 깨져서 왔어요. 너무 화나요!" -> 감정: 부적절/분노
입력: "배송도 빠르고 서비스도 친절해서 만족합니다." -> 감정: 긍정/만족
입력: "제품 성능은 보통인 것 같네요." -> 감정: 중립

입력: "액정이 안 켜지는데 어떻게 해야 하나요?" -> 감정:
\`\`\`

---

## 3. 생각의 사슬: Chain-of-Thought (CoT)

복잡한 산수, 논리 퀴즈, 코드 분석 문제에서 **"단계별로 차근차근 생각해 보자(Let's think step by step)"** 구문을 넣어주면 AI의 정답률이 획기적으로 올라갑니다.

### CoT 프롬프트 예시
\`\`\`markdown
Q: 식당에 테이블이 5개 있습니다. 각 테이블마다 의자가 4개씩 있고, 스태프용 의자가 2개 더 있습니다. 
의자 3개가 부러져서 버렸다면, 현재 쓸 수 있는 의자는 총 몇 개인가요?

단계별로 생각을 정리하여 풀어주세요:
1. 전체 의자 수 계산
2. 부러진 의자 수 차감
3. 최종 답 제출
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Few-Shot 예시를 너무 많이 넣으면 안 되나요?**
A. 예시가 많을수록 정확도는 올라가지만, 모델의 토큰(Token) 비용이 증가하고 입력 컨텍스트 길이가 길어져 핵심 지시문이 묻힐 수 있으므로 2~5개 예시가 가장 적절합니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-llm-api-setup-and-key',
    title: '파이썬으로 시작하는 LLM API 연동',
    seo_title: 'OpenAI 및 Gemini API 키 발급 및 파이썬 SDK 연동 환경 구축',
    seo_description: 'OpenAI API 및 Google Gemini API 발급 과정, python-dotenv 패키지로 환경변수 안전 관리, 구글 코랩에서 첫 LLM 호출 코드를 작성해 봅니다.',
    excerpt: '파이썬 코드에서 OpenAI(GPT-4o) 및 Google Gemini API를 호출하기 위한 API 키 발급, 환경 설정 및 첫 API 호출 실습을 진행합니다.',
    content_md: `웹 사이트나 웹 앱에 생성형 AI 기능을 연동하려면 **API(Application Programming Interface)**를 통해 파이썬 코드에서 LLM을 호출해야 합니다.

---

## 1. API 연동 핵심 용어 사전 (Glossary)

- **API Key**: API 서비스 이용자 식별 및 인증을 위해 발급되는 비밀 암호 키입니다.
- **SDK (Software Development Kit)**: 특정 API를 파이썬 등 프로그래밍 언어에서 간편히 쓸 수 있도록 패키징한 라이브러리입니다. (예: \`openai\`, \`google-generativeai\`)
- **Environment Variable (환경변수)**: 보안 소스코드 외부에 비밀 키나 매개변수를 보관하는 시스템 변수 방식입니다. (\`python-dotenv\` 사용)

---

## 2. OpenAI 및 Gemini API 키 발급 및 파이썬 코드

### 구글 코랩에 패키지 설치
\`\`\`bash
!pip install -q openai google-generativeai python-dotenv
\`\`\`

### OpenAI API 파이썬 호출 예제
\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. API 키를 소스 코드에 직접 하드코딩하지 않고 안전하게 관리하려면?**
A. \`.env\` 파일이나 구글 코랩의 **[Secrets (열쇠 아이콘)]** 기능을 이용해 환경변수(\`os.environ["OPENAI_API_KEY"]\`)로 읽어들이는 것이 보안 표준입니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-system-prompt-and-hyperparameters',
    title: '시스템 메시지와 하이퍼파라미터 제어',
    seo_title: 'LLM 하이퍼파라미터 완벽 정리 - System Prompt, Temperature, Top_P, Max Tokens',
    seo_description: '개발자의 지침을 정의하는 System Message, 답변의 창의성과 정밀도를 제어하는 Temperature, Top_P, 최대 출력 길이 Max Tokens 파라미터를 다룹니다.',
    excerpt: 'AI 모델의 역할과 페르소나를 결정하는 System Prompt와 창의성, 정밀도를 제어하는 하이퍼파라미터(Temperature, Top_P)의 원리를 다룹니다.',
    content_md: `LLM API를 사용할 때 모델에게 페르소나를 부여하는 **System Message**와 모델의 생성 성향을 조절하는 **하이퍼파라미터(Hyperparameter)**를 설정할 수 있습니다.

---

## 1. 하이퍼파라미터 용어 사전 (Glossary)

- **Temperature (온도)**: 0.0 ~ 2.0 사이의 값으로, 확률 분포를 평탄하게 만들어 답변의 다양성/창의성을 결정합니다.
- **Top_P (Nucleus Sampling)**: 누적 확률 상위 P% 범위 내의 단어들 중에서만 후보를 선택하는 샘플링 방식입니다.
- **Max Tokens**: 모델이 단일 응답으로 생성할 수 있는 최대 토큰 자원 한도입니다.

---

## 2. LLM 핵심 하이퍼파라미터 조절 가이드

- **낮은 Temperature (0.0 ~ 0.2)**: 예측 가능하고 일관되며 정밀한 답변 (수학 계산, 코딩, 번역, 사실 요약에 적합).
- **높은 Temperature (0.8 ~ 1.2)**: 창의적이고 다양한 단어 선택 (소설 작성, 아이디어 브레인스토밍에 적합).

\`\`\`python
response = client.chat.completions.create(
    model="gpt-4o-mini",
    temperature=0.1, # 일관된 정답 추출을 위해 낮게 설정
    messages=[
        {"role": "system", "content": "너는 깐깐한 데이터 검증 시스템이야."},
        {"role": "user", "content": "입력 데이터를 검증해 줘."}
    ]
)
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Temperature와 Top_P를 동시에 수정해도 되나요?**
A. 두 파라미터는 모두 답변의 무작위성을 제어하므로, 예측 불가능한 이상 동작을 막기 위해 둘 중 하나만 조절하는 것이 권장됩니다.
`
  },
  {
    order_index: 6,
    slug: 'ch06-structured-outputs-json',
    title: '구조화된 데이터 출력 (Structured Output & JSON)',
    seo_title: 'LLM JSON 파싱 및 Structured Output 구현 - Pydantic과 response_format',
    seo_description: '자유 텍스트 답변 대신 데이터베이스에 곧바로 저장 가능한 JSON 규격(Structured Output)으로 AI 답변을 강제하고 파싱하는 방법을 학습합니다.',
    excerpt: 'AI의 답변을 웹 서버나 DB에서 즉시 활용할 수 있도록 정교한 JSON 형식으로 강제 출력하는 Structured Output 및 파이썬 데이터 파싱 기법을 배웁니다.',
    content_md: `생성형 AI를 실제 서비스 서비스나 DB와 연동하려면 단순 텍스트 답변이 아닌 규격화된 **JSON 데이터(Structured Output)**로 결과를 받아야 합니다.

---

## 1. Structured Output 용어 사전 (Glossary)

- **JSON (JavaScript Object Notation)**: 키-값(Key-Value) 쌍으로 데이터를 표현하는 경량 표준 데이터 교환 포맷입니다.
- **Pydantic**: 파이썬에서 데이터 타입을 선언하고 실행 시점에 자동으로 타입을 검증해주는 데이터 모델링 라이브러리입니다.
- **JSON Schema**: JSON 데이터의 구조, 필수 키, 데이터 타입을 정의하는 명세서 규격입니다.

---

## 2. Pydantic 라이브러리를 활용한 엄격한 타입 검증

\`\`\`python
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
print(user.name, user.skills) # 홍길동 ['Python', 'JS']
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. AI가 출력한 JSON 문법이 깨져서 \`json.loads()\` 에러가 날 때 대처법은?**
A. 최신 API의 \`Structured Output\` 기능 또는 \`pydantic\` 모델을 사용하면 문법 오류율을 0%에 가깝게 보장할 수 있습니다.
`
  },
  {
    order_index: 7,
    slug: 'ch07-conversational-ai-history',
    title: '대화형 AI 챗봇 구현과 대화 이력 관리',
    seo_title: '파이썬 챗봇 개발 - 대화 이력(Chat History) 세션 유지 및 멀티턴 대화',
    seo_description: '챗봇이 이전 대화 내용을 기억하도록 messages 리스트에 이전 대화 이력(Chat History)을 유지하고 관리하는 멀티턴(Multi-turn) 챗봇 구현을 학습합니다.',
    excerpt: '이전 사용자 질문과 답변 기록을 적절히 기억하고 이어서 대화하는 대화형 AI 챗봇의 핵심 알고리즘과 대화 이력(Chat History) 메모리 관리법을 배웁니다.',
    content_md: `LLM API는 상태가 없는 **Stateless(무상태성)** 방식입니다. 즉, 이전에 내가 무슨 질문을 했는지 기억하지 못하므로, 개발자가 직접 이전 대화 기록(**Chat History**)을 축적해 전달해야 합니다.

---

## 1. 대화 이력 용어 사전 (Glossary)

- **Stateless (무상태성)**: 서버나 API가 이전 요청의 상태 정보를 보관하지 않는 독립적인 통신 방식입니다.
- **Multi-turn (멀티턴 대화)**: 단발성 질의응답(Single-turn)이 아닌 이전 대화 맥락을 주고받는 연속적 대화 형태입니다.
- **Sliding Window Memory**: 대화가 길어질 때 메모리 초과를 막기 위해 최근 N개의 대화 이력만 잘라내어 유지하는 전략입니다.

---

## 2. 멀티턴 챗봇 파이썬 알고리즘

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 대화 이력이 너무 길어지면 어떻게 요약하나요?**
A. 대화 수가 10회가 넘어가면 별도의 LLM 호출을 통해 "이전 대화를 3줄로 요약해 줘"라고 청크화하여 \`system\` 메시지 뒤에 요약본으로 삽입하는 방식을 사용합니다.
`
  },
  {
    order_index: 8,
    slug: 'ch08-function-calling-and-tools',
    title: 'LLM 외부 도구 연동 (Function Calling과 에이전트)',
    seo_title: 'LLM 함수 호출(Function Calling) 기초 - 외부 API 및 DB 연동 AI 에이전트',
    seo_description: 'LLM이 스스로 어떤 파이썬 함수를 호출해야 하는지 판단하고 실행 결과를 받아 답변을 완성하는 Function Calling(함수 호출)의 개념을 학습합니다.',
    excerpt: 'LLM이 실시간 날씨 검색, 계산기, DB 조회 등 외부 파이썬 함수를 스스로 선택하여 실행하도록 돕는 Function Calling 기법과 AI 에이전트 기본 구조를 학습합니다.',
    content_md: `**함수 호출(Function Calling)**은 LLM이 직접 대답할 수 없는 실시간 정보(날씨, 주가, DB 조회)가 필요할 때, 스스로 외부 파이썬 함수를 지정하여 실행 결과를 요청하는 연동 기법입니다.

---

## 1. Function Calling 용어 사전 (Glossary)

- **Function Calling**: LLM이 질문을 해석하여 적절한 함수 이름과 파라미터를 JSON 형태로 반환하는 기능입니다.
- **AI Agent (AI 에이전트)**: 목표 달성을 위해 직접 계획(Planning)을 세우고 도구(Tools)를 스스로 선택해 호출하는 자율 시스템입니다.

---

## 2. 파이썬 Function Calling 구현 예제

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. AI 에이전트(Agent)의 기본 3대 요소는?**
A. 1) Brain (LLM 모델), 2) Memory (대화 및 컨텍스트 기재), 3) Tools (Function Calling, 웹 검색, 코드 실행기)입니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-embeddings-and-rag-basics',
    title: '임베딩(Embedding)과 RAG(검색 증강 생성) 기초',
    seo_title: '임베딩(Embedding) 개념과 RAG(Retrieval-Augmented Generation) 시스템 기초',
    seo_description: '문장의 의미를 수치 벡터로 변환하는 임베딩(Embedding)의 원리, 사내 문서나 PDF를 기반으로 환각 없이 답하는 RAG(검색 증강 생성) 아키텍처를 이해합니다.',
    excerpt: '텍스트의 의미를 숫자의 배열(Vector)로 표현하는 임베딩과 외부 문서 데이터를 검색하여 정확한 답변을 생성하는 RAG(검색 증강 생성) 기초를 배웁니다.',
    content_md: `**RAG(Retrieval-Augmented Generation, 검색 증강 생성)**는 사내 문서나 최신 자료를 검색하여 LLM에 전달함으로써 환각 현상을 방지하는 핵심 아키텍처입니다.

---

## 1. RAG 핵심 용어 사전 (Glossary)

- **Embedding (임베딩)**: 단어나 문장의 의미적 유사도를 수백~수천 차원의 숫자 벡터(Vector) 배열로 변환하는 기법입니다.
- **Vector DB (벡터 데이터베이스)**: 벡터 간의 코사인 유사도(Cosine Similarity)를 고속으로 검색하는 전용 DB입니다. (예: ChromaDB, Pinecone, FAISS)
- **Chunking (청킹)**: 긴 문서 텍스트를 검색에 최적화된 작은 단락(Chunk) 단위로 쪼개는 작업입니다.

---

## 2. RAG 파이프라인 3단계 구조

1. **문서 색인 (Indexing)**: 사내 PDF/매뉴얼 텍스트 분할(Chunking) $\rightarrow$ 임베딩 변환 $\rightarrow$ Vector DB 저장
2. **검색 (Retrieval)**: 사용자 질문 입력 $\rightarrow$ 질문을 임베딩하여 Vector DB에서 가장 유사한 문서 Top-3 추출
3. **생성 (Generation)**: 추출된 문서 조각을 프롬프트 맥락(Context)에 넣어 LLM에게 답변 요청

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파인튜닝(Fine-tuning)과 RAG 중 어떤 것을 선택해야 하나요?**
A. 최신 지식 업데이트와 출처 명시가 중요한 경우 **RAG**를 선택하고, 특정 말투나 출력 스타일 형식을 고정하고 싶을 때 파인튜닝을 선택합니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-ai-application-project',
    title: '실전 프로젝트: 나만의 AI 비서 애플리케이션 구축',
    seo_title: '파이썬 기반 AI 비서 챗봇 구축 실전 프로젝트 - OpenAI/Gemini 웹 앱 제작',
    seo_description: '배운 시스템 프롬프트, JSON 출력, 대화 이력 및 함수 호출 기법을 종합하여 실전 파이썬 스마트 AI 비서 애플리케이션을 단계별로 완성해 봅니다.',
    excerpt: '앞서 배운 시스템 프롬프트 설계, 대화 메모리 이력 관리, JSON 구조화 및 도구 연동을 종합하여 나만의 실전 파이썬 AI 비서를 완성합니다.',
    content_md: `배운 프롬프트 엔지니어링, LLM API, 대화 이력 관리 기술을 종합하여 **나만의 AI 통합 업무 비서**를 구현합니다.

---

## 1. 파이썬 실전 AI 비서 통합 코드

\`\`\`python
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
\`\`\`

---

## 2. 자주 묻는 질문 (Q&A)

**Q. 백엔드 서비스로 확장할 때 주의점은?**
A. API 키 보안 관리와 사용자 세션별 대화 이력 구분(Session ID 기준 메모리 분리)이 필수적입니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-vibe-coding-fundamentals',
    title: 'AI 시대의 개발 패러다임: 바이브 코딩(Vibe Coding) 입문',
    seo_title: '바이브 코딩(Vibe Coding)이란? 프롬프트 기반 웹/앱 초고속 개발 패러다임',
    seo_description: '안드레 카파시(Andrepathy Karpathy)가 주창한 바이브 코딩(Vibe Coding)의 개념, AI 코딩 어시스턴트(Cursor, Claude Artifacts)를 활용해 자연어로 소프트웨어를 빌드하는 법을 다룹니다.',
    excerpt: '자연어 프롬프트 지시만으로 웹 서비스와 앱을 초고속으로 창작하는 최신 AI 개발 패러다임인 바이브 코딩(Vibe Coding)의 개념과 실전 활용법을 배웁니다.',
    content_md: `**바이브 코딩(Vibe Coding)**은 전 테슬라 AI 이사이자 전 OpenAI 연구원인 안드레 카파시(Andrej Karpathy)가 제시한 최신 개발 개념입니다. 복잡한 문법 코딩 대신 **개발자의 의도와 '느낌(Vibe)'을 자연어 프롬프트로 전달**하여 AI가 애플리케이션 전체 코드를 생성하게 만드는 혁신적 개발 방식입니다.

---

## 1. 바이브 코딩 전문 용어 사전 (Glossary)

- **Vibe Coding (바이브 코딩)**: 전통적 라인 바이 라인 코딩에서 벗어나 AI 모델과 대화하며 전체 앱/웹 서비스를 빠르게 창작하는 프롬프트 기반 코딩 기법입니다.
- **AI Coding Assistant**: 코드 자동 완성, 리팩토링, 버그 수정 및 풀스택 코드 생성을 돕는 AI 도구입니다. (예: Cursor IDE, GitHub Copilot, Claude Artifacts, Bolt.new)
- **Iteration (반복적 피드백)**: AI가 작성한 코드를 실행해 본 후 오류나 추가 요구사항을 대화로 수정해 나가는 개발 루프입니다.

---

## 2. 바이브 코딩으로 웹 애플리케이션 제작하는 4단계

1. **아이디어와 와이어프레임 프롬프팅**: "HTML, CSS, JS만 사용해 깔끔한 반응형 글자 수 세기 웹 앱을 만들어 줘."
2. **첫 번째 시제품(MVP) 실행**: AI가 생성한 \`index.html\`, \`style.css\`, \`script.js\` 코드를 복사해 브라우저에서 실행.
3. **기능 추가 및 인터랙션 피드백**: "공백 포함/제외 글자 수 세기 버튼 기능과 단어 수 카운트 기능도 추가해 줘."
4. **스타일링 및 폴리싱**: "Glassmorphic 다크 모드 스타일로 CSS를 고급스럽게 수정해 줘."

---

## 3. 바이브 코딩 실전 예제: 글자 수 세기 웹 앱 생성 프롬프트

\`\`\`html
<!-- 바이브 코딩으로 10초 만에 생성된 글자 수 세기 핵심 엔진 -->
<textarea id="textInput" placeholder="텍스트를 입력하세요..."></textarea>
<div id="stats">
  <p>공백 포함: <span id="charWithSpace">0</span>자</p>
  <p>공백 제외: <span id="charNoSpace">0</span>자</p>
  <p>단어 수: <span id="wordCount">0</span>개</p>
</div>

<script>
const textInput = document.getElementById('textInput');
textInput.addEventListener('input', () => {
  const text = textInput.value;
  document.getElementById('charWithSpace').textContent = text.length;
  document.getElementById('charNoSpace').textContent = text.replace(/\s/g, '').length;
  document.getElementById('wordCount').textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
});
</script>
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 바이브 코딩을 하면 전통적인 프로그래밍 언어 공부가 필요 없나요?**
A. 아닙니다! AI가 코드를 빠르게 생성해 주더라도, 코드가 올바르게 동작하는지 검증하고 버그를 파악하며 시스템 아키텍처를 설계하기 위해 기본 프로그래밍 기초 지식은 여전히 매우 중요합니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-stt-tts-voice-ai',
    title: '음성 인식(STT)과 음성 합성(TTS) 기반 Voice AI 구현',
    seo_title: 'Voice AI 구축 - Whisper STT 음성 인식 및 gTTS/ElevenLabs 음성 합성 연동',
    seo_description: '사람의 말을 알아듣는 STT(Speech-to-Text: OpenAI Whisper)와 목소리로 대답하는 TTS(Text-to-Speech)를 연동해 말로 대화하는 음성 AI 시스템을 구축합니다.',
    excerpt: '음성 인식(Whisper STT) 기술과 음성 합성(TTS) 기술을 결합하여, 사용자의 목소리를 알아듣고 말로 대답하는 음성 대화 AI 서비스를 구축합니다.',
    content_md: `텍스트 기반 AI를 넘어 사용자의 목소리를 알아듣고 자연스러운 음성으로 답변하는 **Voice AI 애플리케이션**을 구축합니다.

---

## 1. Voice AI 전문 용어 사전 (Glossary)

- **STT (Speech-to-Text)**: 사람의 음성 오디오 파일(MP3, WAV)을 텍스트 텍스트로 전환하는 기술입니다. (예: OpenAI Whisper)
- **TTS (Text-to-Speech)**: 텍스트 문장을 감정이 담긴 사람 목소리 오디오 파일로 합성해내는 기술입니다. (예: ElevenLabs, gTTS)
- **Sample Rate (샘플링 주파수)**: 아날로그 음성 신호를 디지털로 전환할 때 1초당 추출하는 샘플 개수입니다. (보통 16kHz, 44.1kHz 사용)

---

## 2. Whisper API 기반 음성 인식(STT) 파이썬 코드

\`\`\`python
from openai import OpenAI

client = OpenAI()

# 1. 오디오 파일 열기 및 STT 음성 인식 실행
audio_file = open("sample_speech.mp3", "rb")
transcription = client.audio.transcriptions.create(
  model="whisper-1",
  file=audio_file,
  language="ko" # 한국어 지정
)

print("음성 인식 결과:", transcription.text)
\`\`\`

---

## 3. OpenAI Audio TTS 음성 합성 파이썬 코드

\`\`\`python
# 2. 텍스트 답변을 음성 파일로 생성 (TTS)
response = client.audio.speech.create(
    model="tts-1",
    voice="alloy", # 목소리 톤 선택: alloy, echo, fable, onyx, nova, shimmer
    input="안녕하세요! DAVHAVE Voice AI 서비스입니다. 무엇을 도와드릴까요?"
)

response.stream_to_file("output_response.mp3")
print("음성 합성 오디오 파일 저장 완료: output_response.mp3")
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 웹 브라우저에서 마이크로 음성을 실시간 녹음하려면?**
A. HTML5 \`MediaRecorder\` API를 사용하면 브라우저에서 마이크 권한을 얻어 오디오 Blob 데이터를 생성한 후, 백엔드 파이썬 API로 전송할 수 있습니다.
`
  },
  {
    order_index: 13,
    slug: 'ch13-pdf-document-qa-rag',
    title: 'PDF 문서를 읽고 답하는 RAG 문서 질의응답 시스템',
    seo_title: 'PDF RAG 시스템 구축 - PyPDF 텍스트 추출, Vector DB 및 LangChain 질의응답',
    seo_description: '수십 페이지의 PDF 문서나 매뉴얼을 파싱(PyPDF)하고, 임베딩을 거쳐 Vector DB에 저장한 후 질문에 환각 없이 답변하는 PDF RAG 서비스를 다룹니다.',
    excerpt: '긴 PDF 문서나 사내 규정 파일을 파싱하고 벡터 DB에 저장하여, 문서 내용에 기반해 명확히 답변하는 PDF 전용 RAG 질의응답 서비스를 만듭니다.',
    content_md: `사내 계약서, 연구 논문, 매뉴얼 등 **PDF 파일**을 업로드하면 내용을 스스로 분석하여 질문에 정밀하게 답변하는 **PDF RAG 시스템**을 구축합니다.

---

## 1. PDF RAG 전문 용어 사전 (Glossary)

- **PyPDF / pdfplumber**: PDF 파일 내부의 텍스트, 표, 레이아웃을 파싱하여 문자열 데이터로 추출하는 파이썬 라이브러리입니다.
- **RecursiveCharacterTextSplitter**: 문단, 줄바꿈, 띄어쓰기 단위를 고려하여 의미가 단절되지 않게 텍스트를 청크(Chunk) 단위로 분할하는 도구입니다.
- **Overlap (오버랩)**: 분할된 청크 간에 일부분(예: 100자)을 중복되게 겹쳐서 문맥의 연속성을 보장하는 기법입니다.

---

## 2. PDF 파싱 및 RAG 통합 시스템 구축 4단계

\`\`\`python
# 1. PDF 텍스트 추출
from pypdf import PdfReader

reader = PdfReader("company_policy.pdf")
full_text = ""
for page in reader.pages:
    full_text += page.extract_text() + "\n"

print(f"총 {len(reader.pages)} 페이지 텍스트 추출 완료.")

# 2. LLM 질의응답 요청 (추출된 PDF 컨텍스트 주입)
def ask_pdf_question(query, pdf_context):
    prompt = f"""
다음 제공된 PDF 문서 내용만을 바탕으로 사용자 질문에 사실대로 답변해 주세요.
문서에 없는 내용이라면 "문서에 해당 내용이 존재하지 않습니다"라고 답해 주세요.

[PDF 문서 내용]
{pdf_context[:3000]} # 최대 컨텍스트 슬라이싱

[사용자 질문]
{query}
"""
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.0
    )
    return res.choices[0].message.content

print(ask_pdf_question("연차 유급휴가 규정이 어떻게 되나요?", full_text))
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 스캔된 이미지 형태의 PDF 문서도 읽을 수 있나요?**
A. 텍스트가 아닌 이미지 스캔 PDF인 경우 단순 \`PyPDF\`로는 글자를 읽을 수 없으므로, \`Tesseract OCR\` 기법이나 OpenAI \`gpt-4o\` 멀티모달 비전(Vision) 기능을 사용해야 합니다.
`
  },
  {
    order_index: 14,
    slug: 'ch014-auto-summary-report-generator',
    title: '대화 및 문서를 자동 요약하여 레포트로 생성하는 AI 서비스',
    seo_title: 'AI 문서 자동 요약 및 레포트 생성기 - 요약 프롬프트와 Markdown/PDF 변환',
    seo_description: '긴 대화 록이나 회의록을 핵심 요약, Action Item, 담당자별 할 일로 구조화하여 깔끔한 레포트(Report) 문서로 자동 생성하는 시스템을 제작합니다.',
    excerpt: '수많은 회의록이나 긴 문서를 입력받아 핵심 요점, Action Item, 담당자로 정돈된 멋진 Markdown/PDF 레포트를 생성하는 자동화 서비스를 만듭니다.',
    content_md: `긴 회의록이나 대화 기록을 파싱하여 핵심 내용 요약, 결정 사항, 담당자별 **Action Item**을 자동으로 분류하고 멋진 레포트 문서로 생성하는 서비스를 구축합니다.

---

## 1. 레포트 생성 전문 용어 사전 (Glossary)

- **Extractive Summarization (추출 요약)**: 본문 문장 중 가장 중요한 문장을 그대로 뽑아내는 요약 방식입니다.
- **Abstractive Summarization (생성 요약)**: 문장의 의미를 이해하고 새로운 단어와 정돈된 문체로 재구성하는 LLM 방식의 고급 요약입니다.
- **Action Item (실행 과제)**: 회의나 대화 결과 후 특정 담당자가 언제까지 수행해야 할 명확한 과제 목록입니다.

---

## 2. AI 자동 레포트 생성기 파이썬 코드

\`\`\`python
def generate_meeting_report(meeting_transcript):
    system_prompt = """
너는 전문 비즈니스 수석 서기야.
제공된 회의 대화록을 읽고 다음 Markdown 레포트 양식으로 정돈해 줘.

# 📋 회의 요약 레포트
## 1. 회의 핵심 요약 (3줄 요약)
## 2. 주요 결정 사항 (Decision Points)
## 3. 담당자별 Action Items (담당자 | 과제 | 기한 표 형태)
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

transcript = """
김팀장: 다음 주 월요일까지 신규 서비스 메인 페이지 시안이 나와야 합니다.
이대리: 네, 제가 프론트엔드 디자인 시안을 일요일까지 완성하겠습니다.
박과장: 저는 백엔드 API 명세서를 토요일까지 서버에 배포해 두겠습니다.
"""

report = generate_meeting_report(transcript)
print(report)
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 생성된 마크다운 레포트를 PDF 파일로 저장하려면?**
A. 파이썬 \`markdown\` 및 \`pdfkit\` (또는 \`reportlab\`) 라이브러리를 사용하면 생성된 마크다운 텍스트를 인쇄 가능한 깔끔한 PDF 문서로 즉시 출력할 수 있습니다.
`
  },
  {
    order_index: 15,
    slug: 'ch15-web-browsing-search-agent',
    title: '실시간 웹 서핑 및 자료 탐색 AI 에이전트 구축',
    seo_title: '웹 서핑 AI 에이전트 구축 - Tavily/SerpAPI 연동, Web Scraping 및 실시간 RAG',
    seo_description: '최신 인터넷 정보가 필요할 때 검색 엔진(Tavily API)을 직접 서핑하여 자료를 수집하고 요약하여 최신 정답을 내놓는 실시간 웹 서핑 AI 에이전트를 제작합니다.',
    excerpt: 'LLM의 최신 정보 부재(Knowledge Cutoff) 한계를 극복하기 위해 실시간 웹 검색 및 웹 스크래핑을 수행하고 답하는 웹 탐색 AI 에이전트를 제작합니다.',
    content_md: `학습 데이터 끊김(Knowledge Cutoff) 한계를 넘어서, 최신 뉴스나 실시간 정보를 **직접 인터넷 서핑하여 검색하고 결과를 종합해 답하는 AI 에이전트**를 구축합니다.

---

## 1. 웹 서핑 에이전트 전문 용어 사전 (Glossary)

- **Search API (Tavily / SerpAPI)**: AI 에이전트 전용으로 구글/네이버 검색 결과를 clean한 JSON 형태로 반환해 주는 검색 API입니다.
- **Web Scraping (웹 스크래핑)**: 검색된 웹페이지 URL에 접속해 HTML을 읽고 본문 텍스트를 추출해내는 작업입니다. (예: BeautifulSoup, Newspaper3k)
- **Real-time RAG**: 사전 저장된 DB가 아닌 실시간 검색 결과 텍스트를 컨텍스트로 바로 활용하는 튜닝 방식입니다.

---

## 2. 파이썬 웹 서핑 AI 에이전트 예제 코드

\`\`\`python
import requests

def search_tavily(query, api_key):
    """Tavily Search API로 실시간 웹 정보 수집"""
    url = "https://api.tavily.com/search"
    payload = {"api_key": api_key, "query": query, "search_depth": "basic"}
    res = requests.post(url, json=payload).json()
    
    # 검색된 웹페이지 본문 조각 모으기
    snippets = ""
    for result in res.get("results", [])[:3]:
        snippets += f"출처: {result['url']}\n내용: {result['content']}\n\n"
    return snippets

def web_browsing_agent(user_query, tavily_key):
    # 1. 실시간 웹 검색 수행
    web_context = search_tavily(user_query, tavily_key)
    
    # 2. 검색 결과를 바탕으로 LLM 답변 생성
    prompt = f"다음 최신 웹 검색 결과를 참조하여 사용자 질문에 명확히 답변하고 출처를 명시해 줘.\n\n[웹 검색 결과]\n{web_context}\n\n[질문]\n{user_query}"
    
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return res.choices[0].message.content
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 일반 브라우저 크롤링과 Tavily API의 차이점은?**
A. 일반 웹 크롤링은 차단(CAPTCHA) 위험이 높고 광고/네비게이션 태그가 섞여 나오지만, Tavily 같은 AI 전용 검색 API는 본문 핵심 텍스트만 깨끗이 정제하여 토큰을 80% 이상 절약해 줍니다.
`
  },
  {
    order_index: 16,
    slug: 'ch16-financial-stock-analysis-ai',
    title: '실시간 주식/금융 데이터 연동 AI 투자 분석 시스템',
    seo_title: 'AI 금융 투자가 구축 - yfinance 실시간 주가 데이터 연동 및 포트폴리오 분석',
    seo_description: 'yfinance 라이브러리로 실시간 주식/재무제표 데이터를 수집하고, LLM을 결합하여 종목 분석 및 포트폴리오 투자 시뮬레이션을 수행하는 시스템을 만듭니다.',
    excerpt: '실시간 주식 가격 및 기업 재무제표 데이터를 수집하고 LLM 투자 분석 모델을 적용하여 금융 리포트를 자동 작성하는 주식 분석 서비스를 구축합니다.',
    content_md: `야후 파이낸스(\`yfinance\`) 등 금융 API로 **실시간 주가 및 재무제표 데이터**를 가져와 LLM이 금융 전문가 관점에서 분석하고 포트폴리오를 제안하는 시스템을 구현합니다.

---

## 1. 금융 AI 전문 용어 사전 (Glossary)

- **yfinance**: 야후 파이낸스(Yahoo Finance)의 주가, 이동평균선, PER, PBR, 재무제표 데이터를 파이썬으로 수집하는 라이브러리입니다.
- **PER (Price to Earnings Ratio, 주가수익비율)**: 주가를 1주당 순이익으로 나눈 값으로 주가의 고평가/저평가를 판단합니다.
- **Portfolio Simulation**: 자산 배분 비중을 조절하며 과거 데이터 기반 수익률과 변동성을 테스트하는 시뮬레이션입니다.

---

## 2. 파이썬 주식 데이터 수집 및 AI 분석 예제

\`\`\`python
import yfinance as yf

def analyze_stock(ticker_symbol):
    # 1. 주식 데이터 가져오기 (예: Apple 'AAPL' 또는 삼성전자 '005930.KS')
    ticker = yf.Ticker(ticker_symbol)
    info = ticker.info
    
    stock_data = {
        "company": info.get("longName"),
        "current_price": info.get("currentPrice"),
        "PER": info.get("trailingPE"),
        "PBR": info.get("priceToBook"),
        "52week_high": info.get("fiftyTwoWeekHigh"),
        "52week_low": info.get("fiftyTwoWeekLow"),
    }
    
    # 2. AI 분석 프롬프트 작성
    prompt = f"""
너는 월스트리트 수석 금융 분석가야. 
다음 수집된 주식 재무 데이터를 분석하고 투자 의견(매수/관망)과 리스크 요인을 정리해 줘.

[주식 데이터]
{stock_data}
"""
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2
    )
    return res.choices[0].message.content

print(analyze_stock("AAPL"))
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. AI가 투자 조언을 할 때 법적 주의사항(면책조항)은?**
A. AI 서비스 화면 하단에 "본 분석은 단순 참고용이며 최종 투자 결정과 책임은 본인에게 있습니다"라는 **면책 조항(Disclaimer)** 문구를 반드시 명시해야 합니다.
`
  },
  {
    order_index: 17,
    slug: 'ch17-google-oauth-and-cloud-backup',
    title: '구글 로그인(OAuth 2.0) 및 클라우드 데이터 백업',
    seo_title: '웹/앱 회원가입 구축 - 구글 OAuth 2.0 로그인 및 Firebase/Supabase 데이터 백업',
    seo_description: '구글 OAuth 2.0 간편 로그인 서비스 연동, Firebase/Supabase 클라우드 DB를 활용하여 사용자 개인 설정 및 대화 기록을 안전하게 백업하는 법을 다룹니다.',
    excerpt: '사용자 친화적인 구글 OAuth 2.0 소셜 로그인을 연동하고 Firebase/Supabase 데이터베이스에 개인 대화 기록과 설정을 동기화하는 백업 시스템을 구축합니다.',
    content_md: `사용자가 클릭 한 번으로 소셜 로그인할 수 있는 **구글 OAuth 2.0** 시스템을 구현하고, 사용자별 AI 대화 이력과 설정을 클라우드 DB에 백업 동기화합니다.

---

## 1. 회원가입 및 DB 전문 용어 사전 (Glossary)

- **OAuth 2.0**: 비밀번호 노출 없이 구글, 카카오 등 외부 서비스의 인증 자격 증명을 안전하게 수용하는 표준 인증 프로토콜입니다.
- **Firebase / Supabase**: Serverless 환경에서 즉시 사용할 수 있는 BaaS(Backend-as-a-Service) 데이터베이스 서비스입니다.
- **ID Token**: 구글 로그인 성공 시 발급되는 사용자 식별용 암호화 토큰(JWT)입니다.

---

## 2. 구글 OAuth 2.0 연동 3단계 절차

1. **Google Cloud Console 프로젝트 생성**: OAuth 동의 화면 설정 및 클라이언트 ID 발급.
2. **프론트엔드 버튼 배치**: Google Identity Services SDK 연동.
3. **백엔드 검증 및 백업**: 수신한 토큰을 검증하고 DB에 유저 프로필 저장.

\`\`\`html
<!-- 구글 간편 로그인 버튼 HTML 템플릿 -->
<script src="https://accounts.google.com/gsi/client" async defer></script>
<div id="g_id_onload"
     data-client_id="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
     data-callback="handleCredentialResponse">
</div>
<div class="g_id_signin" data-type="standard"></div>

<script>
function handleCredentialResponse(response) {
  // 구글 로그인 성공 시 JWT ID 토큰 수신
  const id_token = response.credential;
  console.log("인증 토큰 획득:", id_token);
  // 백엔드 또는 Firebase로 토큰 전달 후 백업 수행
}
</script>
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 자체 데이터베이스 대신 Supabase나 Firebase를 많이 쓰나요?**
A. 데이터베이스 서버를 직접 구축 및 관리할 필요 없이 인증, 데이터 백업, 실시간 동기화를 몇 줄의 API 호출로 처리할 수 있어 바이브 코딩 개발 속도가 10배 이상 빨라집니다.
`
  },
  {
    order_index: 18,
    slug: 'ch18-pwa-and-mobile-app-conversion',
    title: '설치 없이 사용하는 PWA 및 모바일 앱(APK) 전환',
    seo_title: 'PWA(Progressive Web App) 제작과 안드로이드 APK / iOS 웹앱 초고속 전환',
    seo_description: '웹사이트를 앱처럼 홈 화면에 추가하고 오프라인 동작을 돕는 PWA(Manifest, Service Worker) 구축과 1분 만에 안드로이드 APK 앱으로 포팅하는 기법을 배웁니다.',
    excerpt: '내가 만든 웹 앱을 설치형 PWA(Progressive Web App)로 변환하고, 1분 만에 안드로이드 APK 모바일 앱으로 빌드하여 배포하는 방법을 다룹니다.',
    content_md: `복잡한 앱스토어 심사나 모바일 네이티브 코딩 없이, 완성된 웹 애플리케이션을 즉시 설치 가능한 **PWA(Progressive Web App)** 및 **안드로이드 APK 앱**으로 변환합니다.

---

## 1. PWA 및 모바일 앱 전문 용어 사전 (Glossary)

- **PWA (Progressive Web App)**: 웹 기술(HTML/CSS/JS)로 개발되었지만 홈 화면 추가, 푸시 알림, 오프라인 동작 등 모바일 앱처럼 작동하는 웹 앱입니다.
- **Service Worker (서비스 워커)**: 브라우저 백그라운드에서 실행되며 캐싱, 리소스 오프라인 제공, 푸시 알림을 처리하는 스크립트입니다.
- **manifest.json**: 앱 이름, 아이콘, 테마 색상, 실행 모드(standalone) 등 앱 설치에 필요한 정보가 적힌 설정 파일입니다.
- **TWA (Trusted Web Activity)**: PWA 웹 앱을 안드로이드 플레이스토어용 APK/AAB 바이너리로 감싸주는 표준 패키징 기술입니다.

---

## 2. PWA 필수 설정 1: \`manifest.json\`

\`\`\`json
{
  "name": "DAVHAVE 스마트 AI 비서",
  "short_name": "DAVHAVE AI",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0908",
  "theme_color": "#ff6b35",
  "icons": [
    {
      "src": "/images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
\`\`\`

---

## 3. 웹을 1분 만에 안드로이드 APK로 만드는 방법

- **PWABuilder ([pwabuilder.com](https://www.pwabuilder.com/)) 활용**:
  1. 배포된 PWA 웹사이트 URL 입력.
  2. **[Package for Store]** 버튼 클릭.
  3. 안드로이드 APK 및 AAB 파일 즉시 다운로드 후 휴대폰 설치!

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 아이폰(iOS)에서도 PWA 설치가 가능한가요?**
A. 네! 사파리(Safari) 브라우저에서 웹사이트 접속 후 **[공유 버튼] $\rightarrow$ [홈 화면에 추가]**를 누르면 아이폰 바탕화면에 앱 아이콘이 생성되어 독립 실행됩니다.
`
  },
  {
    order_index: 19,
    slug: 'ch19-media-processing-utility-apps',
    title: '미디어 처리 AI 유틸리티 앱 제작 (이미지, 오디오, GIF)',
    seo_title: '미디어 처리 유틸리티 앱 개발 - Pillow 이미지 변환, GIF 생성 및 미디어 제어',
    seo_description: '파이썬 Pillow/FFmpeg 및 Canvas API를 활용하여 이미지 일괄 리사이즈, GIF 애니메이션 생성, 문서 압축 유틸리티 웹 앱을 개발해 봅니다.',
    excerpt: '이미지 일괄 변환, GIF 동영상 애니메이션 생성, 오디오/문서 용량 압축 등 실무에 유용한 유틸리티 미디어 처리 앱을 제작합니다.',
    content_md: `이미지 일괄 리사이즈, GIF 동영상 생성, 오디오 편집 등 실생활과 업무 생산성을 극대화하는 **미디어 처리 AI 유틸리티 애플리케이션**을 제작합니다.

---

## 1. 미디어 처리 전문 용어 사전 (Glossary)

- **Pillow (PIL)**: 이미지 생성, 리사이즈, 포맷 변환(PNG $\rightarrow$ WEBP), 필터 처리를 담당하는 파이썬 대표 이미지 라이브러리입니다.
- **FFmpeg**: 동영상 및 오디오 파일의 인코딩, 자르기, 병합, 압축을 수행하는 초고속 멀티미디어 프레임워크입니다.
- **HTML5 Canvas**: 브라우저 화면 상에서 자바스크립트로 그래픽을 그리고 이미지를 조작하는 픽셀 드로잉 엘리먼트입니다.

---

## 2. 이미지 일괄 변환 파이썬 코드 예제

\`\`\`python
from PIL import Image
import os

def batch_resize_images(input_dir, output_dir, max_width=800):
    """지정한 디렉터리 내 모든 이미지를 최대 너비 800px로 일괄 리사이즈 및 WEBP 압축"""
    os.makedirs(output_dir, exist_ok=True)
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('png', 'jpg', 'jpeg')):
            filepath = os.path.join(input_dir, filename)
            with Image.open(filepath) as img:
                # 비율 유지 리사이즈 계산
                w_percent = (max_width / float(img.size[0]))
                h_size = int((float(img.size[1]) * float(w_percent)))
                
                resized_img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
                
                # 용량이 작은 WEBP 포맷으로 저장
                save_path = os.path.join(output_dir, f"compressed_{os.path.splitext(filename)[0]}.webp")
                resized_img.save(save_path, "WEBP", quality=85)
                print(f"변환 완료: {save_path}")

# batch_resize_images("raw_images", "output_images")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 브라우저 단에서 클라이언트 자바스크립트만으로 이미지 압축이 가능한가요?**
A. 네! HTML5 \`<canvas>\` 태그에 이미지를 그린 후 \`canvas.toDataURL('image/jpeg', 0.7)\` 메소드를 사용하면 서버 업로드 없이 브라우저에서 70% 용량으로 압축할 수 있습니다.
`
  },
  {
    order_index: 20,
    slug: 'ch20-fullstack-ai-service-deployment',
    title: '풀스택 AI 애플리케이션 구축 및 클라우드 배포 종합 실습',
    seo_title: '풀스택 AI 서비스 배포 실습 - Streamlit, Cloudflare Workers, Vercel 클라우드 배포',
    seo_description: '백엔드 AI 모델과 프론트엔드를 결합한 완벽한 풀스택 AI 웹 애플리케이션을 제작하고 Cloudflare Workers / Vercel에 도메인 연결하여 라이브 배포합니다.',
    excerpt: '지금까지 배운 바이브 코딩과 LLM API, 대화 메모리, UI 라이브러리를 총동원하여 완벽한 풀스택 AI 서비스를 만들고 글로벌 서버에 최종 배포합니다.',
    content_md: `배운 모든 생성형 AI 기술, 바이브 코딩, 프론트엔드 UI 및 백엔드 데이터베이스를 결합하여 완벽한 **풀스택 AI 서비스를 제작하고 글로벌 클라우드에 라이브 배포**합니다.

---

## 1. 클라우드 배포 전문 용어 사전 (Glossary)

- **Cloudflare Workers / Pages**: 전 세계 Edge 데이터센터 망에서 서버리스(Serverless)로 자바스크립트/웹 앱을 1초 만에 배포하는 플랫폼입니다.
- **Streamlit / Gradio**: 파이썬 코드 몇 줄만으로 AI 인터랙티브 웹 UI 화면을 생성해주는 파이썬 전용 웹 프레임워크입니다.
- **Custom Domain & SSL**: \`https://davhave.com\` 처럼 사용자 전용 도메인을 연결하고 암호화 보안(HTTPS)을 적용하는 작업입니다.

---

## 2. Streamlit 기반 AI 챗봇 풀스택 코드

\`\`\`python
import streamlit as st
from openai import OpenAI

# 1. 페이지 타이틀 및 설정
st.set_page_config(page_title="DAVHAVE AI 비서", page_icon="🤖")
st.title("🤖 DAVHAVE 스마트 AI 통합 비서")

# 2. API 키 및 클라이언트 초기화
openai_api_key = st.sidebar.text_input("OpenAI API Key", type="password")

# 3. 세션 대화 이력 초기화
if "messages" not in st.session_state:
    st.session_state["messages"] = [{"role": "assistant", "content": "안녕하세요! 무엇을 도와드릴까요?"}]

# 4. 이전 대화 화면 렌더링
for msg in st.session_state.messages:
    st.chat_message(msg["role"]).write(msg["content"])

# 5. 사용자 입력 처리
if prompt := st.chat_input():
    if not openai_api_key:
        st.info("왼쪽 사이드바에 OpenAI API 키를 입력해 주세요.")
        st.stop()

    client = OpenAI(api_key=openai_api_key)
    st.session_state.messages.append({"role": "user", "content": prompt})
    st.chat_message("user").write(prompt)

    response = client.chat.completions.create(model="gpt-4o-mini", messages=st.session_state.messages)
    msg = response.choices[0].message.content
    st.session_state.messages.append({"role": "assistant", "content": msg})
    st.chat_message("assistant").write(msg)
\`\`\`

---

## 3. 성공적인 AI 파이프라인 개발 및 배포 체크리스트

1. **보안 체크**: API Key 및 DB 암호가 소스코드에 하드코딩되지 않았는가?
2. **예외 처리**: API 연결 실패, 토큰 한계 초과, 빈 입력값 제출 시 사용자 안내 메시지가 나오는가?
3. **사용자 경험(UX)**: AI 답변이 나오는 동안 로딩 스피너나 스트리밍(Streaming) 처리가 되어 있는가?
4. **글로벌 배포**: HTTPS 보안 접속이 지원되는 도메인으로 서비스되고 있는가?

---

## 4. 자주 묻는 질문 (Q&A)

**Q. DAVHAVE 플랫폼처럼 Cloudflare Workers에 배포할 때의 이점은 무엇인가요?**
A. 전 세계 300개 이상의 엣지 데이터센터에서 코드가 실행되므로 접속 속도가 압도적으로 빠르고, 콜드 스타트(Cold Start) 지연이 없어 쾌적한 AI 서비스를 제공할 수 있습니다.
`
  }
];

// Split into 4 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 5),
  lessons.slice(5, 10),
  lessons.slice(10, 15),
  lessons.slice(15, 20)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full AI Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_ai_full_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 4 full SQL chunk files for AI!');
