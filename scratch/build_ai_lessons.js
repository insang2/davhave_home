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

## 1. LLM(거대언어모델)이란 무엇인가?

LLM은 수천억 개 이상의 매개변수(Parameter)를 바탕으로 방대한 인터넷 문헌 데이터를 학습한 딥러닝 모델입니다.

- **원리**: 이전 단어들을 바탕으로 **"다음에 올 가장 확률이 높은 단어(Token)"를 예측**하는 방식으로 문장을 완성합니다.
- **주요 LLM 종류**: OpenAI GPT-4o, Google Gemini 1.5, Anthropic Claude 3.5, Meta Llama 3 등.

---

## 2. AI 실습 환경: 구글 코랩 (Google Colab)

별도의 파이썬 설치 없이 웹 브라우저에서 곧바로 Jupyter Notebook 환경을 무료로 사용할 수 있는 서비스입니다.

### 구글 코랩 시작하기 3단계
1. [Google Colab 접속](https://colab.research.google.com/) 후 구글 계정 로그인.
2. **[새 노트]** 클릭하여 파이썬 코딩 창 생성.
3. 코드 셀에 파이썬 코드 입력 후 \`Shift + Enter\` 로 즉시 실행.

\`\`\`python
# 코랩 파이썬 실행 테스트
print("Hello, Generative AI World!")
\`\`\`

---

## 3. LLM의 한계와 주의사항 (환각 현상)

- **환각 (Hallucination)**: LLM은 사실(Fact)을 검색하는 엔진이 아니라 확률적 단어 조합기이므로, 그럴듯하지만 완전히 틀린 내용을 참처럼 지어내는 현상이 일어납니다.
- **최신 정보 미비 (Knowledge Cutoff)**: 학습이 끝난 시점 이후의 최신 정보를 자체적으로 알지 못합니다. (RAG 및 웹 검색으로 보완 필요)

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

## 1. 프롬프트 작성 4대 핵심 원칙

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

## 2. 실전 프롬프트 구조 템플릿

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

## 3. 자주 묻는 질문 (Q&A)

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

## 1. Zero-Shot vs Few-Shot Prompting

- **Zero-Shot**: 예시 없이 바로 질문하는 방식.
- **Few-Shot**: 원하는 입출력 폼 예시(Example)를 1~3개 포함시켜 AI가 패턴을 완전히 익히도록 만드는 방식.

\`\`\`markdown
[Few-Shot 예시]
다음 감정 상태를 분석해 줘.

입력: "오늘 주문한 상품이 깨져서 왔어요. 너무 화나요!" -> 감정: 부적절/분노
입력: "배송도 빠르고 서비스도 친절해서 만족합니다." -> 감정: 긍정/만족
입력: "제품 성능은 보통인 것 같네요." -> 감정: 중립

입력: "액정이 안 켜지는데 어떻게 해야 하나요?" -> 감정:
\`\`\`

---

## 2. 생각의 사슬: Chain-of-Thought (CoT)

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

## 3. 프롬프트 연쇄 (Prompt Chaining)

하나의 거대한 프롬프트로 모든 것을 해결하려 하지 않고, **작은 1차 프롬프트의 결과물을 2차 프롬프트의 입력으로 이어받아** 실행하는 모듈화 기법입니다.

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

## 1. OpenAI 및 Gemini API 키 발급

1. **OpenAI API Key**: [OpenAI Platform](https://platform.openai.com/) 접속 $\rightarrow$ API Keys 메뉴에서 발급.
2. **Google Gemini API Key**: [Google AI Studio](https://aistudio.google.com/) 접속 $\rightarrow$ Get API key 발급 (**무료 쿼리 제공**).

> ⚠️ **보안 주의**: API 키는 절대로 GitHub이나 공개 블로그에 올리면 안 됩니다! 외부 유출 시 예기치 못한 비용이 청구될 수 있습니다.

---

## 2. 라이브러리 설치 및 파이썬 연동 코드

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

### Google Gemini API 파이썬 호출 예제
\`\`\`python
import google.generativeai as genai

genai.configure(api_key="YOUR_GEMINI_API_KEY")
model = genai.GenerativeModel('gemini-1.5-flash')

response = model.generate_content("인공지능의 미래에 대해 2문장으로 요약해줘.")
print(response.text)
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

## 1. 대화 역할 3가지 (Roles)

- **\`system\`**: AI의 성격, 규칙, 한계, 행동 방식을 지정하는 **개발자 지시문**.
- **\`user\`**: 실제 사용자가 입력하는 질문 및 지시.
- **\`assistant\`**: AI 모델이 이전에 생성한 답변 내용.

\`\`\`python
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "너는 코딩 지식을 상냥하게 가르쳐주는 친절한 튜터야."},
        {"role": "user", "content": "C 언어 포인터가 뭐야?"}
    ]
)
\`\`\`

---

## 2. LLM 핵심 하이퍼파라미터 조절

### 1) Temperature (온도: 0.0 ~ 2.0)
- **낮은 값 (0.0 ~ 0.2)**: 예측 가능하고 일관되며 정밀한 답변 (수학 계산, 코딩, 번역, 사실 요약에 적합).
- **높은 값 (0.8 ~ 1.2)**: 창의적이고 다양한 단어 선택 (소설 작성, 아이디어 브레인스토밍에 적합).

### 2) Top_P (Nucleus Sampling: 0.0 ~ 1.0)
- 확률 누적 상위 P%의 단어 후보군 내에서만 단어를 선택합니다. (\`temperature\`와 \`top_p\` 둘 중 하나만 조절하는 것을 권장).

### 3) Max Tokens
- AI 모델이 응답으로 생성할 수 있는 **최대 토큰(글자 단위) 수**를 제한합니다.

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 코딩 자동화나 JSON 출력에는 Temperature를 몇으로 설정해야 하나요?**
A. 문법 오차 없이 일관된 정답 출력이 중요하므로 \`temperature=0.0\` 또는 \`0.1\`로 바짝 낮춰 설정하는 것이 정석입니다.
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

## 1. JSON 스키마 출력 강제 (\`response_format\`)

OpenAI API는 \`response_format={"type": "json_object"}\` 설정을 제공합니다. (단, 시스템 프롬프트에 JSON이라는 단어를 명시해야 함)

\`\`\`python
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
print(data["skills"]) # ['Python', 'JS', 'C']
\`\`\`

---

## 2. Pydantic 라이브러리를 활용한 엄격한 타입 검증

\`pydantic\`을 이용해 데이터 클래스 모델을 정의하면 타입 오류 없는 안전한 JSON 추출이 가능합니다.

\`\`\`python
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

## 1. 멀티턴(Multi-turn) 챗봇 파이썬 알고리즘

이전 \`user\` 질문과 \`assistant\` 답변을 파이썬 리스트에 순서대로 덧붙여(Append) 매 호출마다 함께 전달합니다.

\`\`\`python
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
\`\`\`

---

## 2. 토큰 누수 방지를 위한 슬라이딩 윈도우 (Sliding Window)

대화가 길어지면 대화 이력이 수만 토큰에 달해 API 비용이 폭증하고 컨텍스트 한계를 초과하게 됩니다.

- **슬라이딩 윈도우**: 최근 N개(예: 최근 6개 대화)만 유지하고 오래된 이전 대화는 잘라내거나 요약(Summarization)하여 보관합니다.

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
    content_md: `**함수 호출(Function Calling)**은 LLM이 계산할 수 없는 실시간 정보(날씨, 주가, DB 조회)가 필요할 때, 직접 답변하는 대신 **"이 파이썬 함수를 이런 인자값으로 실행해 줘"**라고 개발자에게 요청하는 강력한 연동 기법입니다.

---

## 1. Function Calling 동작 4단계 워크플로우

1. **사용자 요청**: "지금 서울 날씨 어때?"
2. **LLM 수신 및 판단**: "직접 모르는 데이터군! \`get_current_weather(location='Seoul')\` 함수를 실행하세요!" (함수명 및 인자 반환)
3. **앱 코드 실행**: 개발자 파이썬 코드가 실제 날씨 API를 호출하여 "맑음, 24도" 데이터 획득
4. **LLM 최종 답변**: 날씨 데이터를 전달받아 "현재 서울 날씨는 맑고 24도입니다." 최종 자연어 답변 완성

---

## 2. 파이썬 Function Calling 구현 예제

\`\`\`python
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
# Output: name='get_current_weather', arguments='{"location":"서울"}'
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. AI 에이전트(Agent)란 무엇인가요?**
A. 단순히 묻는 말에 대답만 하는 모델을 넘어, 주어진 목표 달성을 위해 직접 계획을 세우고, 필요한 도구(Function)를 스스로 반복 호출하며 작업을 완수하는 자율 인공지능 시스템입니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-embeddings-and-rag-basics',
    title: '임베딩(Embedding)과 RAG(검색 증강 생성) 기초',
    seo_title: '임베딩(Embedding) 개념과 RAG(Retrieval-Augmented Generation) 시스템 기초',
    seo_description: '문장의 의미를 수치 벡터로 변환하는 임베딩(Embedding)의 원리, 사내 문서나 PDF를 기반으로 환각 없이 답하는 RAG(검색 증강 생성) 아키텍처를 이해합니다.',
    excerpt: '텍스트의 의미를 숫자의 배열(Vector)로 표현하는 임베딩과 외부 문서 데이터를 검색하여 정확한 답변을 생성하는 RAG(검색 증강 생성) 기초를 배웁니다.',
    content_md: `**RAG(Retrieval-Augmented Generation, 검색 증강 생성)**는 LLM의 가장 큰 한계인 환각(Hallucination)과 최신/사내 데이터 미비 문제를 해결하기 위해, 관련 문서 검색 시스템과 LLM을 결합하는 최신 표준 기술입니다.

---

## 1. 텍스트 임베딩 (Embedding)이란?

단어나 문장의 **"의미적인 유사도"**를 수백~수천 차원의 숫자 벡터(Vector)로 변환하는 기술입니다.

- 예: \`"강아지"\`와 \`"개"\`는 단어 형태는 다르지만 벡터 공간 상에서 거리가 매우 가깝게 배치됩니다.

\`\`\`python
# OpenAI 임베딩 생성 예시
emb_response = client.embeddings.create(
    model="text-embedding-3-small",
    input="DAVHAVE 웹 개발 교육 파이프라인"
)

vector = emb_response.data[0].embedding # 1536 차원의 숫자 리스트
\`\`\`

---

## 2. RAG 파이프라인 3단계 구조

1. **문서 색인 (Indexing)**: 사내 PDF/매뉴얼 텍스트 분할(Chunking) $\rightarrow$ 임베딩 변환 $\rightarrow$ 벡터 데이터베이스(Vector DB)에 저장
2. **검색 (Retrieval)**: 사용자 질문 입력 $\rightarrow$ 질문을 임베딩하여 Vector DB에서 가장 유사한 문서 Top-3 추출
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
`
  },
  {
    order_index: 10,
    slug: 'ch10-ai-application-project',
    title: '실전 프로젝트: 나만의 AI 비서 애플리케이션 구축',
    seo_title: '파이썬 기반 AI 비서 챗봇 구축 실전 프로젝트 - OpenAI/Gemini 웹 앱 제작',
    seo_description: '배운 시스템 프롬프트, JSON 출력, 대화 이력 및 함수 호출 기법을 종합하여 실전 파이썬 스마트 AI 비서 애플리케이션을 단계별로 완성해 봅니다.',
    excerpt: '앞서 배운 시스템 프롬프트 설계, 대화 메모리 이력 관리, JSON 구조화 및 도구 연동을 종합하여 나만의 실전 파이썬 AI 비서를 완성합니다.',
    content_md: `지금까지 배운 프롬프트 엔지니어링 4대 원칙, LLM API 호출, 대화 이력 관리, JSON 구조화 기술을 종합하여 **나만의 AI 통합 업무 비서**를 직접 구현해 봅니다.

---

## 1. AI 통합 비서 아키텍처

- **역할**: 사용자의 일정을 정리하고, 텍스트 요약 및 키워드 추출을 수행하며, 대화 맥락을 기억하는 스마트 업무 비서.
- **사용 모델**: OpenAI \`gpt-4o-mini\` 또는 Google \`gemini-1.5-flash\`

---

## 2. 파이썬 실전 AI 비서 통합 코드

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
\`\`\`

---

## 3. AI 앱 프로젝트 발전 방향

1. **Streamlit / Gradio 프론트엔드 연동**: 파이썬 전용 웹 UI 라이브러리를 붙여 웹 페이지 챗봇 서비스로 확장.
2. **FastAPI 백엔드 서버 구축**: 모바일 앱이나 웹 프론트엔드와 통신하는 AI REST API 서버 구축.
3. **RAG 챗봇 확장**: 내 컴퓨터의 PDF 파일들을 읽어 답변하는 나만의 문서 질의응답 비서 구축.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. AI 비서 프로젝트를 포트폴리오로 만들 때 강조해야 할 핵심은?**
A. 단순히 API를 부르는 것에 그치지 않고, 예외 처리(API 실패 처리), 보안(API Key 관리), 비용 절감(슬라이딩 윈도우), 그리고 UX(JSON 처리 및 빠른 답변 속도)를 고민한 흔적을 담아내는 것이 중요합니다.
`
  }
];

// Split into 2 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 5),
  lessons.slice(5, 10)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Seed AI Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_ai_part${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 2 SQL chunk files for AI!');
