-- Insert 10 Gemini lessons into D1 database for category = 'ai'

DELETE FROM posts WHERE slug = 'gemini-15-pro-flash-api-overview-and-architecture';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Gemini 1.5 Pro & Flash API 아키텍처 및 200만 토큰 멀티모달 가이드',
  'gemini-15-pro-flash-api-overview-and-architecture',
  'ai',
  'published',
  50,
  'Google의 차세대 LLM인 Gemini 1.5 Pro와 초고속 Flash 모델의 아키텍처, 200만 토큰 문맥 윈도우, 용어 사전 및 API 연동 기초를 배웁니다.',
  '## Gemini 1.5 Pro & Flash 아키텍처의 특징

Google의 Gemini 1.5 프로 및 플래시 모델은 업계 최초로 **최대 200만 토큰(2M Context Window)**의 대용량 문맥 처리 기능을 제공합니다.

비디오 1시간, 오디오 11시간, 소스코드 60,000줄을 한 번의 프롬프트에 통째로 입력하고 지능형 추론 및 Q&A를 진행할 수 있습니다.

---

## 1.5 Pro vs 1.5 Flash 모델 비교

| 모델 (Model) | 주요 특징 | 추천 유즈케이스 |
| :--- | :--- | :--- |
| **Gemini 1.5 Pro** | 복잡한 코딩, 깊이 있는 추론, 대용량 파일 다중 분석 | 시스템 설계, 레거시 코드 리팩터링, 연구 보고서 |
| **Gemini 1.5 Flash** | 서브 밀리초 속도, 저렴한 토큰 비용, 경량화 추론 | 챗봇 응답, 실시간 요약, 대량 데이터 파싱 |

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **Gemini (제미나이)**: Google DeepMind 팀이 개발한 멀티모달 텍스트, 코드, 이미지, 오디오 융합 거대 언어 모델 family.
- **Context Window (문맥 윈도우)**: AI 모델이 단일 요청(Prompt)에서 한 번에 기억하고 처리할 수 있는 최대 토큰 입력량.
- **Multimodal (멀티모달)**: 텍스트뿐만 아니라 이미지, 비디오, 음성, PDF 파일 등 다양한 형태의 입력을 동시에 파싱하고 추론하는 인공지능 능력.

---

## Gemini 체크리스트

- [ ] 200만 토큰 용량에 맞는 최적의 1.5 Pro / Flash 모델을 선택했는가?
- [ ] Google AI Studio API Key 발급 및 보안 환경 변수가 수립되었는가?
',
  '<h2>Gemini 1.5 Pro & Flash 아키텍처의 특징</h2>
<p>Google의 Gemini 1.5 프로 및 플래시 모델은 업계 최초로 <strong>최대 200만 토큰(2M Context Window)</strong>의 대용량 문맥 처리 기능을 제공합니다.</p>
<p>비디오 1시간, 오디오 11시간, 소스코드 60,000줄을 한 번의 프롬프트에 통째로 입력하고 지능형 추론 및 Q&A를 진행할 수 있습니다.</p>
<hr />
<h2>1.5 Pro vs 1.5 Flash 모델 비교</h2>
<p>| 모델 (Model) | 주요 특징 | 추천 유즈케이스 |</p>
<p>| :--- | :--- | :--- |</p>
<p>| <strong>Gemini 1.5 Pro</strong> | 복잡한 코딩, 깊이 있는 추론, 대용량 파일 다중 분석 | 시스템 설계, 레거시 코드 리팩터링, 연구 보고서 |</p>
<p>| <strong>Gemini 1.5 Flash</strong> | 서브 밀리초 속도, 저렴한 토큰 비용, 경량화 추론 | 챗봇 응답, 실시간 요약, 대량 데이터 파싱 |</p>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Gemini (제미나이)</strong>: Google DeepMind 팀이 개발한 멀티모달 텍스트, 코드, 이미지, 오디오 융합 거대 언어 모델 family.</li>
<li><strong>Context Window (문맥 윈도우)</strong>: AI 모델이 단일 요청(Prompt)에서 한 번에 기억하고 처리할 수 있는 최대 토큰 입력량.</li>
<li><strong>Multimodal (멀티모달)</strong>: 텍스트뿐만 아니라 이미지, 비디오, 음성, PDF 파일 등 다양한 형태의 입력을 동시에 파싱하고 추론하는 인공지능 능력.</li>
</ul>
<hr />
<h2>Gemini 체크리스트</h2>
<ul>
<li>[ ] 200만 토큰 용량에 맞는 최적의 1.5 Pro / Flash 모델을 선택했는가?</li>
<li>[ ] Google AI Studio API Key 발급 및 보안 환경 변수가 수립되었는가?</li>
</ul>',
  'Google Gemini 1.5 Pro/Flash 아키텍처 & 200만 토큰 멀티모달',
  'Google의 차세대 LLM인 Gemini 1.5 Pro와 초고속 Flash 모델의 아키텍처, 200만 토큰 문맥 윈도우, 용어 사전 및 API 연동 기초를 배웁니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'google-ai-studio-system-instructions-and-prompt-tuning';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Google AI Studio 시스템 프롬프트 세팅 및 파라미터 최적화',
  'google-ai-studio-system-instructions-and-prompt-tuning',
  'ai',
  'published',
  51,
  'Google AI Studio 웹 콘솔을 활용해 System Instruction, Temperature, Top-K 파라미터를 최적화하고 프로토타입을 테스트하는 가이드입니다.',
  '## Google AI Studio의 개념과 활용법

Google AI Studio는 개발자가 코드 한 줄 작성 없이 웹 브라우저에서 Gemini 모델의 프롬프트를 설계하고, 파라미터를 조절하며, 1클릭으로 cURL / Python / JS 코드를 추출할 수 있는 공식 개발 환경입니다.

---

## 3대 핵심 파라미터 설정법

1. **System Instruction**: AI의 역할과 엄격한 제약 조건을 지정 (예: "너는 10년 차 IT 전문 마케터이다.")
2. **Temperature (0.0 ~ 2.0)**: 0.0에 가까울수록 정답 지향적(코딩, 수학), 1.0 이상일수록 창의적인 문장 생성
3. **Safety Settings**: 차단 임계값(Hate Speech, Harassment) 조절

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **Google AI Studio**: Gemini API 키 발급 및 프롬프트 프로토타이핑을 지원하는 구글의 웹 기반 개발자 콘솔.
- **System Instruction**: 모델의 답변 톤앤매너, 역할, 금지 사항을 최상위에서 지정하는 시스템 설정 프롬프트.
- **Temperature (온도)**: AI 모델 답변의 창의성과 무작위성을 제어하는 하이퍼파라미터.

---

## AI Studio 체크리스트

- [ ] System Instruction에 AI의 역할과 금지 규칙이 명확히 수록되었는가?
- [ ] 코딩 및 쿼리 파싱 작업 시 Temperature를 0.2 이하로 낮추었는가?
',
  '<h2>Google AI Studio의 개념과 활용법</h2>
<p>Google AI Studio는 개발자가 코드 한 줄 작성 없이 웹 브라우저에서 Gemini 모델의 프롬프트를 설계하고, 파라미터를 조절하며, 1클릭으로 cURL / Python / JS 코드를 추출할 수 있는 공식 개발 환경입니다.</p>
<hr />
<h2>3대 핵심 파라미터 설정법</h2>
<p>1. <strong>System Instruction</strong>: AI의 역할과 엄격한 제약 조건을 지정 (예: "너는 10년 차 IT 전문 마케터이다.")</p>
<p>2. <strong>Temperature (0.0 ~ 2.0)</strong>: 0.0에 가까울수록 정답 지향적(코딩, 수학), 1.0 이상일수록 창의적인 문장 생성</p>
<p>3. <strong>Safety Settings</strong>: 차단 임계값(Hate Speech, Harassment) 조절</p>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Google AI Studio</strong>: Gemini API 키 발급 및 프롬프트 프로토타이핑을 지원하는 구글의 웹 기반 개발자 콘솔.</li>
<li><strong>System Instruction</strong>: 모델의 답변 톤앤매너, 역할, 금지 사항을 최상위에서 지정하는 시스템 설정 프롬프트.</li>
<li><strong>Temperature (온도)</strong>: AI 모델 답변의 창의성과 무작위성을 제어하는 하이퍼파라미터.</li>
</ul>
<hr />
<h2>AI Studio 체크리스트</h2>
<ul>
<li>[ ] System Instruction에 AI의 역할과 금지 규칙이 명확히 수록되었는가?</li>
<li>[ ] 코딩 및 쿼리 파싱 작업 시 Temperature를 0.2 이하로 낮추었는가?</li>
</ul>',
  'Google AI Studio 활용 가이드: System Instruction & 프롬프트 튜닝',
  'Google AI Studio 웹 콘솔을 활용해 System Instruction, Temperature, Top-K 파라미터를 최적화하고 프로토타입을 테스트하는 가이드입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'gemini-multimodal-pdf-image-audio-parsing';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Gemini 멀티모달: 이미지, 오디오, 1,000페이지 PDF 대용량 문서 분석',
  'gemini-multimodal-pdf-image-audio-parsing',
  'ai',
  'published',
  52,
  '1,000페이지 분량의 수치 PDF 문서, 회의록 오디오 녹음본, 복잡한 설계도 이미지를 Gemini API로 원스톱 파싱하는 실전 가이드입니다.',
  '## 네이티브 멀티모달(Native Multimodal) 파이프라인

Gemini는 별도의 OCR(광학 문자 인식)이나 음성 텍스트 변환(STT) 엔진 없이도, 이미지 파일과 mp3 오디오, PDF 문서를 원본 파일 그대로 받아들여 내부 딥러닝 층에서 즉시 해석합니다.

---

## Python SDK 오디오 & PDF 파싱 코드 예시

```python
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")

# 1. 대용량 오디오 및 PDF 파일 업로드
audio_file = genai.upload_file(path="meeting_recording.mp3")
pdf_file = genai.upload_file(path="annual_report_2026.pdf")

# 2. Gemini 1.5 Pro 모델 생성
model = genai.GenerativeModel(model_name="gemini-1.5-pro")

# 3. 동시 질문 파싱
response = model.generate_content([
    audio_file, 
    pdf_file, 
    "회의 녹음본과 연간 보고서를 비교하여 올해 마케팅 예산 변경점 3가지를 요약해주세요."
])

print(response.text)
```

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **File API**: Gemini API에서 20MB 이상의 대용량 비디오, 오디오, PDF 파일을 임시 업로드하여 관리하는 전용 파일 처리 API.
- **OCR (Optical Character Recognition)**: 이미지나 PDF 스캔 문서 속에 들어있는 텍스트를 인공지능이 자동으로 인식하여 추출하는 기술.
- **Native Processing**: 외부 변환 과정 없이 모델 자체의 신경망이 다종 입력 데이터를 직접 파싱하는 특성.

---

## 멀티모달 체크리스트

- [ ] 대용량 파일 전송 시 `genai.upload_file` API를 활용했는가?
- [ ] 오디오 파일의 음질과 PDF 문서의 보안 태그가 제거되었는가?
',
  '<h2>네이티브 멀티모달(Native Multimodal) 파이프라인</h2>
<p>Gemini는 별도의 OCR(광학 문자 인식)이나 음성 텍스트 변환(STT) 엔진 없이도, 이미지 파일과 mp3 오디오, PDF 문서를 원본 파일 그대로 받아들여 내부 딥러닝 층에서 즉시 해석합니다.</p>
<hr />
<h2>Python SDK 오디오 & PDF 파싱 코드 예시</h2>
<pre><code class="language-python">import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")

# 1. 대용량 오디오 및 PDF 파일 업로드
audio_file = genai.upload_file(path="meeting_recording.mp3")
pdf_file = genai.upload_file(path="annual_report_2026.pdf")

# 2. Gemini 1.5 Pro 모델 생성
model = genai.GenerativeModel(model_name="gemini-1.5-pro")

# 3. 동시 질문 파싱
response = model.generate_content([
    audio_file, 
    pdf_file, 
    "회의 녹음본과 연간 보고서를 비교하여 올해 마케팅 예산 변경점 3가지를 요약해주세요."
])

print(response.text)</code></pre>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>File API</strong>: Gemini API에서 20MB 이상의 대용량 비디오, 오디오, PDF 파일을 임시 업로드하여 관리하는 전용 파일 처리 API.</li>
<li><strong>OCR (Optical Character Recognition)</strong>: 이미지나 PDF 스캔 문서 속에 들어있는 텍스트를 인공지능이 자동으로 인식하여 추출하는 기술.</li>
<li><strong>Native Processing</strong>: 외부 변환 과정 없이 모델 자체의 신경망이 다종 입력 데이터를 직접 파싱하는 특성.</li>
</ul>
<hr />
<h2>멀티모달 체크리스트</h2>
<ul>
<li>[ ] 대용량 파일 전송 시 <code>genai.upload_file</code> API를 활용했는가?</li>
<li>[ ] 오디오 파일의 음질과 PDF 문서의 보안 태그가 제거되었는가?</li>
</ul>',
  'Gemini 멀티모달 분석: 이미지, 오디오 파일 & 대용량 PDF 파싱',
  '1,000페이지 분량의 수치 PDF 문서, 회의록 오디오 녹음본, 복잡한 설계도 이미지를 Gemini API로 원스톱 파싱하는 실전 가이드입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'gemini-structured-output-json-schema';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Gemini Structured Output: JSON Schema 기반 구조화 데이터 100% 보장',
  'gemini-structured-output-json-schema',
  'ai',
  'published',
  53,
  'Gemini API의 `response_mime_type` 및 JSON Schema 파라미터를 활용해 파싱 오류 없이 100% 완벽한 JSON 규격을 반환받는 기술입니다.',
  '## 구조화 데이터(Structured Output)의 의의

AI 모델을 백엔드 파이프라인이나 서비스 코드에 연동할 때 가장 곤란한 순간은 AI가 텍스트 주석이나 마크다운 문구를 섞어서 답할 때입니다.

Gemini 1.5 모델은 `response_mime_type="application/json"` 옵션과 `response_schema`를 통해 100% 완벽한 JSON 출력을 보장합니다.

---

## Python JSON Schema 강제 지정 예시

```python
import google.generativeai as genai
from typing_extensions import TypedDict

# 1. 반환 타입 데이터 규격 정의
class MarketingResult(TypedDict):
    campaign_title: str
    target_audience: str
    estimated_roas: float
    keywords: list[str]

# 2. JSON Schema 강제 모델 세팅
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config={
        "response_mime_type": "application/json",
        "response_schema": MarketingResult,
    }
)

prompt = "신규 모바일 앱 런칭을 위한 마케팅 기획안 구조를 생성해줘."
response = model.generate_content(prompt)
print(response.text) # 100% 검증된 JSON 출력
```

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **Structured Output (구조화 출력)**: LLM이 자유로운 텍스트 대신 지정된 JSON schema 규격에 맞춰 100% 기계 독해 가능한 데이터로 반환하는 기능.
- **JSON Schema**: JSON 데이터의 구조, 필수 키, 데이터 타입(String, Number, Array)을 명시하는 가이드라인 표준.
- **TypedDict**: 파이썬에서 키의 이름과 값의 타입을 명확하게 힌팅하는 딕셔너리 규격 클래스.

---

## Structured Output 체크리스트

- [ ] `generation_config` 내에 `response_mime_type="application/json"`이 명시되었는가?
- [ ] 파이썬 또는 자바스크립트 측에서 타입 검증 예외 처리가 마련되었는가?
',
  '<h2>구조화 데이터(Structured Output)의 의의</h2>
<p>AI 모델을 백엔드 파이프라인이나 서비스 코드에 연동할 때 가장 곤란한 순간은 AI가 텍스트 주석이나 마크다운 문구를 섞어서 답할 때입니다.</p>
<p>Gemini 1.5 모델은 <code>response_mime_type="application/json"</code> 옵션과 <code>response_schema</code>를 통해 100% 완벽한 JSON 출력을 보장합니다.</p>
<hr />
<h2>Python JSON Schema 강제 지정 예시</h2>
<pre><code class="language-python">import google.generativeai as genai
from typing_extensions import TypedDict

# 1. 반환 타입 데이터 규격 정의
class MarketingResult(TypedDict):
    campaign_title: str
    target_audience: str
    estimated_roas: float
    keywords: list[str]

# 2. JSON Schema 강제 모델 세팅
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config={
        "response_mime_type": "application/json",
        "response_schema": MarketingResult,
    }
)

prompt = "신규 모바일 앱 런칭을 위한 마케팅 기획안 구조를 생성해줘."
response = model.generate_content(prompt)
print(response.text) # 100% 검증된 JSON 출력</code></pre>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Structured Output (구조화 출력)</strong>: LLM이 자유로운 텍스트 대신 지정된 JSON schema 규격에 맞춰 100% 기계 독해 가능한 데이터로 반환하는 기능.</li>
<li><strong>JSON Schema</strong>: JSON 데이터의 구조, 필수 키, 데이터 타입(String, Number, Array)을 명시하는 가이드라인 표준.</li>
<li><strong>TypedDict</strong>: 파이썬에서 키의 이름과 값의 타입을 명확하게 힌팅하는 딕셔너리 규격 클래스.</li>
</ul>
<hr />
<h2>Structured Output 체크리스트</h2>
<ul>
<li>[ ] <code>generation_config</code> 내에 <code>response_mime_type="application/json"</code>이 명시되었는가?</li>
<li>[ ] 파이썬 또는 자바스크립트 측에서 타입 검증 예외 처리가 마련되었는가?</li>
</ul>',
  'Gemini Structured Output: response_mime_type & JSON Schema 출력',
  'Gemini API의 `response_mime_type` 및 JSON Schema 파라미터를 활용해 파싱 오류 없이 100% 완벽한 JSON 규격을 반환받는 기술입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'gemini-function-calling-and-tool-use-guide';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Gemini Function Calling & 서드파티 API 커스텀 툴 융합 개발',
  'gemini-function-calling-and-tool-use-guide',
  'ai',
  'published',
  54,
  'Gemini 모델이 직접 실시간 날씨, 데이터베이스 쿼리, 사내 REST API 함수를 호출하여 답변을 완성하는 Function Calling 튜토리얼입니다.',
  '## Function Calling(함수 호출)의 동작 원리

AI 모델 자체는 실시간 날씨 데이터나 사내 데이터베이스를 직접 조회할 수 없습니다. 

Function Calling 기능을 사용하면 Gemini가 유저의 질문을 분석한 후, **"이 질문을 해결하려면 외부 함수 `get_current_weather(city=''Seoul'')`을 이 인자값으로 실행하라"**는 실행 요청을 반환합니다.

---

## 4단계 Function Calling 시퀀스

```text
1. 유저 질문: "현재 서울 마포구 날씨 어때?"
2. Gemini ➔ 앱: `get_weather(location="마포구")` 실행 명령 전달
3. 앱 ➔ 외부 API: 실제 기상청 REST API 호출 및 결과 "맑음, 24도" 수집
4. 앱 ➔ Gemini: 수집된 날씨 결과 전달
5. Gemini ➔ 유저: "현재 서울 마포구 날씨는 24도로 쾌청하고 맑습니다." 완성된 정답 응답
```

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **Function Calling (함수 호출)**: AI 모델이 외부 코드, API, 데이터베이스 쿼리를 직접 실행할 수 있도록 연결 고리를 제공하는 기능.
- **Tool Use (도구 활용)**: AI 에이전트가 주도적으로 계산기, 웹 검색, 코드 실행기 등의 도구를 선택하여 문제를 해결하는 능력.
- **Tool Declaration**: Gemini에게 제공할 함수의 이름, 설명, 매개변수 타입을 정의하는 인터페이스 선언.

---

## Function Calling 체크리스트

- [ ] 제공할 함수의 파라미터 타입과 docstring 설명이 명확한가?
- [ ] 외부 API 오류 발생 시 예외 처리 리턴값이 수립되어 있는가?
',
  '<h2>Function Calling(함수 호출)의 동작 원리</h2>
<p>AI 모델 자체는 실시간 날씨 데이터나 사내 데이터베이스를 직접 조회할 수 없습니다.</p>
<p>Function Calling 기능을 사용하면 Gemini가 유저의 질문을 분석한 후, <strong>"이 질문을 해결하려면 외부 함수 <code>get_current_weather(city=''Seoul'')</code>을 이 인자값으로 실행하라"</strong>는 실행 요청을 반환합니다.</p>
<hr />
<h2>4단계 Function Calling 시퀀스</h2>
<pre><code class="language-text">1. 유저 질문: "현재 서울 마포구 날씨 어때?"
2. Gemini ➔ 앱: `get_weather(location="마포구")` 실행 명령 전달
3. 앱 ➔ 외부 API: 실제 기상청 REST API 호출 및 결과 "맑음, 24도" 수집
4. 앱 ➔ Gemini: 수집된 날씨 결과 전달
5. Gemini ➔ 유저: "현재 서울 마포구 날씨는 24도로 쾌청하고 맑습니다." 완성된 정답 응답</code></pre>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Function Calling (함수 호출)</strong>: AI 모델이 외부 코드, API, 데이터베이스 쿼리를 직접 실행할 수 있도록 연결 고리를 제공하는 기능.</li>
<li><strong>Tool Use (도구 활용)</strong>: AI 에이전트가 주도적으로 계산기, 웹 검색, 코드 실행기 등의 도구를 선택하여 문제를 해결하는 능력.</li>
<li><strong>Tool Declaration</strong>: Gemini에게 제공할 함수의 이름, 설명, 매개변수 타입을 정의하는 인터페이스 선언.</li>
</ul>
<hr />
<h2>Function Calling 체크리스트</h2>
<ul>
<li>[ ] 제공할 함수의 파라미터 타입과 docstring 설명이 명확한가?</li>
<li>[ ] 외부 API 오류 발생 시 예외 처리 리턴값이 수립되어 있는가?</li>
</ul>',
  'Gemini Function Calling & 외부 REST API 툴 연동 실전 가이드',
  'Gemini 모델이 직접 실시간 날씨, 데이터베이스 쿼리, 사내 REST API 함수를 호출하여 답변을 완성하는 Function Calling 튜토리얼입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'firebase-ai-logic-gemini-web-integration';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Firebase AI Logic (Gemini API) 웹/모바일 앱 네이티브 통합 튜토리얼',
  'firebase-ai-logic-gemini-web-integration',
  'ai',
  'published',
  55,
  'Firebase Vertex AI SDK(Firebase AI Logic)를 활용해 웹 브라우저 및 모바일 앱에서 백엔드 없이 안전하게 Gemini API를 연동하는 가이드입니다.',
  '## Firebase AI Logic (Vertex AI for Firebase) 소개

클라이언트 사이드 웹이나 모바일 앱에서 Gemini API를 호출할 때 가장 큰 문제는 **API Key 유출 위험**입니다.

Firebase AI Logic은 Firebase App Check 및 IAM 인증을 기반으로, API Key를 클라이언트에 노출하지 않고 안전하게 Gemini 1.5 모델을 모바일/웹 앱에 직접 연동하도록 지원합니다.

---

## JavaScript / Web SDK 연동 코드 예시

```javascript
import { initializeApp } from "firebase/app";
import { getVertexAI, getGenerativeModel } from "firebase/vertexai";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id"
};

// 1. Firebase 앱 및 Vertex AI 서비스 초기화
const app = initializeApp(firebaseConfig);
const vertexAI = getVertexAI(app);

// 2. Gemini 1.5 Flash 모델 인스턴스 생성
const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });

// 3. 인텔리전트 텍스트 생성
async function askAI(prompt) {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}
```

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **Firebase AI Logic**: Firebase 플랫폼 환경에서 Gemini API 및 Vertex AI 모델을 보안 인증을 거쳐 안전하게 사용할 수 있도록 지원하는 라이브러리.
- **App Check**: 악성 클라이언트나 매크로 봇이 내 API 자원을 무단 도용하는 것을 사전 방지하는 Firebase의 앱 보안 검증 서비스.
- **Client SDK**: 웹 브라우저나 iOS/Android 앱 환경에서 직접 서버 서비스에 연결할 수 있도록 제공하는 라이브러리.

---

## Firebase AI 연동 체크리스트

- [ ] Firebase App Check가 활성화되어 유효한 요청만 처리하고 있는가?
- [ ] 사용량 과금을 방지하기 위한 Daily Quota 제한이 설정되었는가?
',
  '<h2>Firebase AI Logic (Vertex AI for Firebase) 소개</h2>
<p>클라이언트 사이드 웹이나 모바일 앱에서 Gemini API를 호출할 때 가장 큰 문제는 <strong>API Key 유출 위험</strong>입니다.</p>
<p>Firebase AI Logic은 Firebase App Check 및 IAM 인증을 기반으로, API Key를 클라이언트에 노출하지 않고 안전하게 Gemini 1.5 모델을 모바일/웹 앱에 직접 연동하도록 지원합니다.</p>
<hr />
<h2>JavaScript / Web SDK 연동 코드 예시</h2>
<pre><code class="language-javascript">import { initializeApp } from "firebase/app";
import { getVertexAI, getGenerativeModel } from "firebase/vertexai";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id"
};

// 1. Firebase 앱 및 Vertex AI 서비스 초기화
const app = initializeApp(firebaseConfig);
const vertexAI = getVertexAI(app);

// 2. Gemini 1.5 Flash 모델 인스턴스 생성
const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });

// 3. 인텔리전트 텍스트 생성
async function askAI(prompt) {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}</code></pre>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Firebase AI Logic</strong>: Firebase 플랫폼 환경에서 Gemini API 및 Vertex AI 모델을 보안 인증을 거쳐 안전하게 사용할 수 있도록 지원하는 라이브러리.</li>
<li><strong>App Check</strong>: 악성 클라이언트나 매크로 봇이 내 API 자원을 무단 도용하는 것을 사전 방지하는 Firebase의 앱 보안 검증 서비스.</li>
<li><strong>Client SDK</strong>: 웹 브라우저나 iOS/Android 앱 환경에서 직접 서버 서비스에 연결할 수 있도록 제공하는 라이브러리.</li>
</ul>
<hr />
<h2>Firebase AI 연동 체크리스트</h2>
<ul>
<li>[ ] Firebase App Check가 활성화되어 유효한 요청만 처리하고 있는가?</li>
<li>[ ] 사용량 과금을 방지하기 위한 Daily Quota 제한이 설정되었는가?</li>
</ul>',
  'Firebase Vertex AI / Gemini API 웹 & Flutter 네이티브 연동',
  'Firebase Vertex AI SDK(Firebase AI Logic)를 활용해 웹 브라우저 및 모바일 앱에서 백엔드 없이 안전하게 Gemini API를 연동하는 가이드입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'gemini-context-caching-cost-reduction-strategies';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Context Caching 기술로 Gemini API 프롬프트 호스팅 비용 90% 절감',
  'gemini-context-caching-cost-reduction-strategies',
  'ai',
  'published',
  56,
  '대용량 코드베이스나 매뉴얼 PDF를 캐싱하여 repeated input 토큰 비용을 최대 90% 아끼는 Gemini Context Caching 활용법입니다.',
  '## Context Caching이란 무엇인가?

동일한 500,000 토큰 분량의 사내 매뉴얼이나 소스코드를 대상으로 반복 질문을 던질 때, 질문마다 50만 토큰의 프롬프트 비용을 내는 것은 비효율적입니다.

Gemini 1.5의 **Context Caching** 기술을 사용하면 대용량 토큰 데이터를 Gemini 서버 메모리에 임시 캐싱해 두고, 질문 시 오직 신규 질문 토큰에 대해서만 최소 과금을 내게 됩니다. (비용 90% 절감)

---

## Python Context Caching 구현 예시

```python
import google.generativeai as genai
from google.generativeai import caching
import datetime

# 1. 대용량 문서 업로드 및 캐시 생성 (1시간 유효)
large_file = genai.upload_file("huge_codebase.zip")

cache = caching.CachedContent.create(
    model="models/gemini-1.5-pro-001",
    display_name="codebase_cache",
    contents=[large_file],
    ttl=datetime.timedelta(hours=1),
)

# 2. 캐시된 콘텐츠 기반 모델 생성 (토큰 비용 90% 할인 적용)
model = genai.GenerativeModel.from_cached_content(cached_content=cache)

# 3. 질문 수행 (속도 5배 향상 & 초저렴 비용)
response = model.generate_content("이 코드베이스에서 인증 로직 흐름을 설명해줘.")
print(response.text)
```

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **Context Caching (문맥 캐싱)**: 자주 재사용되는 대용량 토큰 데이터(코드, PDF, 비디오)를 Gemini 메모리에 저장해두고 재활용하여 비용과 지연시간을 획기적으로 낮추는 기능.
- **TTL (Time To Live)**: 캐시된 데이터가 메모리에 유지되는 유효 수명 시간 (예: 1시간, 24시간).
- **Cached Input Tokens**: 일반 입력 토큰 비용 대비 최대 75~90% 할인된 가격으로 제공되는 캐시 토큰 과금 요금제.

---

## Context Caching 체크리스트

- [ ] 최소 캐싱 모수 기준(32,000 토큰 이상)을 충족하는가?
- [ ] 캐시의 TTL 유효시간이 작업 시간과 부합하게 설정되었는가?
',
  '<h2>Context Caching이란 무엇인가?</h2>
<p>동일한 500,000 토큰 분량의 사내 매뉴얼이나 소스코드를 대상으로 반복 질문을 던질 때, 질문마다 50만 토큰의 프롬프트 비용을 내는 것은 비효율적입니다.</p>
<p>Gemini 1.5의 <strong>Context Caching</strong> 기술을 사용하면 대용량 토큰 데이터를 Gemini 서버 메모리에 임시 캐싱해 두고, 질문 시 오직 신규 질문 토큰에 대해서만 최소 과금을 내게 됩니다. (비용 90% 절감)</p>
<hr />
<h2>Python Context Caching 구현 예시</h2>
<pre><code class="language-python">import google.generativeai as genai
from google.generativeai import caching
import datetime

# 1. 대용량 문서 업로드 및 캐시 생성 (1시간 유효)
large_file = genai.upload_file("huge_codebase.zip")

cache = caching.CachedContent.create(
    model="models/gemini-1.5-pro-001",
    display_name="codebase_cache",
    contents=[large_file],
    ttl=datetime.timedelta(hours=1),
)

# 2. 캐시된 콘텐츠 기반 모델 생성 (토큰 비용 90% 할인 적용)
model = genai.GenerativeModel.from_cached_content(cached_content=cache)

# 3. 질문 수행 (속도 5배 향상 &amp; 초저렴 비용)
response = model.generate_content("이 코드베이스에서 인증 로직 흐름을 설명해줘.")
print(response.text)</code></pre>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Context Caching (문맥 캐싱)</strong>: 자주 재사용되는 대용량 토큰 데이터(코드, PDF, 비디오)를 Gemini 메모리에 저장해두고 재활용하여 비용과 지연시간을 획기적으로 낮추는 기능.</li>
<li><strong>TTL (Time To Live)</strong>: 캐시된 데이터가 메모리에 유지되는 유효 수명 시간 (예: 1시간, 24시간).</li>
<li><strong>Cached Input Tokens</strong>: 일반 입력 토큰 비용 대비 최대 75~90% 할인된 가격으로 제공되는 캐시 토큰 과금 요금제.</li>
</ul>
<hr />
<h2>Context Caching 체크리스트</h2>
<ul>
<li>[ ] 최소 캐싱 모수 기준(32,000 토큰 이상)을 충족하는가?</li>
<li>[ ] 캐시의 TTL 유효시간이 작업 시간과 부합하게 설정되었는가?</li>
</ul>',
  'Gemini Context Caching: 프롬프트 비용 90% 절감 & 속도 향상 전략',
  '대용량 코드베이스나 매뉴얼 PDF를 캐싱하여 repeated input 토큰 비용을 최대 90% 아끼는 Gemini Context Caching 활용법입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'gemini-python-sdk-realtime-streaming-agent';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Python SDK 및 실시간 스트리밍 에이전트 구축 실전',
  'gemini-python-sdk-realtime-streaming-agent',
  'ai',
  'published',
  57,
  'Python `google-generativeai` SDK를 사용해 답안이 출력되는 즉시 타자기 효과로 실시간 응답을 스트리밍하는 자율형 챗봇 구축 튜토리얼입니다.',
  '## 스트리밍(Streaming) 답변의 필연성

대용량 추론이나 장문의 코드를 응답받을 때, 전체 답변 생성이 완료될 때까지 10초 이상 기다리게 하면 유저는 답답함을 느끼고 이탈합니다.

`generate_content(..., stream=True)` 옵션을 사용하면 AI가 첫 단어를 생성하는 0.3초 만에 타자기(Typewriter) 효과처럼 실시간으로 결과를 화면에 출력할 수 있습니다.

---

## Python 실시간 스트리밍 구현 코드

```python
import google.generativeai as genai

genai.configure(api_key="YOUR_GEMINI_API_KEY")
model = genai.GenerativeModel("gemini-1.5-flash")

prompt = "파이썬으로 구현하는 비동기 웹 크롤러 작성법을 단계별로 상술해줘."

# stream=True 옵션 설정
response = model.generate_content(prompt, stream=True)

# 텍스트 덩어리(Chunk)가 생성되는 즉시 화면 출력
for chunk in response:
    print(chunk.text, end="", flush=True)
```

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **Streaming (스트리밍)**: AI 모델의 전체 생성이 끝나기를 기다리지 않고, 부분 결과 조각(Chunk)이 나오는 즉시 실시간으로 클라이언트에 전달하는 렌더링 기법.
- **Chunk (데이터 조각)**: 스트리밍 과정에서 끊김 없이 연쇄적으로 전송되는 텍스트 및 데이터 토큰 덩어리.
- **Typewriter Effect**: 텍스트가 마치 타자기를 치듯 한 글자씩 실시간으로 화면에 찍히는 시각적 반응형 UX 효과.

---

## 스트리밍 체크리스트

- [ ] 백엔드 응답 API에 `Server-Sent Events(SSE)` 또는 `stream=True`가 적용되었는가?
- [ ] 네트워크 스트리밍 도중 커넥션 끊김 예외처리가 수립되었는가?
',
  '<h2>스트리밍(Streaming) 답변의 필연성</h2>
<p>대용량 추론이나 장문의 코드를 응답받을 때, 전체 답변 생성이 완료될 때까지 10초 이상 기다리게 하면 유저는 답답함을 느끼고 이탈합니다.</p>
<p><code>generate_content(..., stream=True)</code> 옵션을 사용하면 AI가 첫 단어를 생성하는 0.3초 만에 타자기(Typewriter) 효과처럼 실시간으로 결과를 화면에 출력할 수 있습니다.</p>
<hr />
<h2>Python 실시간 스트리밍 구현 코드</h2>
<pre><code class="language-python">import google.generativeai as genai

genai.configure(api_key="YOUR_GEMINI_API_KEY")
model = genai.GenerativeModel("gemini-1.5-flash")

prompt = "파이썬으로 구현하는 비동기 웹 크롤러 작성법을 단계별로 상술해줘."

# stream=True 옵션 설정
response = model.generate_content(prompt, stream=True)

# 텍스트 덩어리(Chunk)가 생성되는 즉시 화면 출력
for chunk in response:
    print(chunk.text, end="", flush=True)</code></pre>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Streaming (스트리밍)</strong>: AI 모델의 전체 생성이 끝나기를 기다리지 않고, 부분 결과 조각(Chunk)이 나오는 즉시 실시간으로 클라이언트에 전달하는 렌더링 기법.</li>
<li><strong>Chunk (데이터 조각)</strong>: 스트리밍 과정에서 끊김 없이 연쇄적으로 전송되는 텍스트 및 데이터 토큰 덩어리.</li>
<li><strong>Typewriter Effect</strong>: 텍스트가 마치 타자기를 치듯 한 글자씩 실시간으로 화면에 찍히는 시각적 반응형 UX 효과.</li>
</ul>
<hr />
<h2>스트리밍 체크리스트</h2>
<ul>
<li>[ ] 백엔드 응답 API에 <code>Server-Sent Events(SSE)</code> 또는 <code>stream=True</code>가 적용되었는가?</li>
<li>[ ] 네트워크 스트리밍 도중 커넥션 끊김 예외처리가 수립되었는가?</li>
</ul>',
  'Gemini Python SDK & 실시간 스트리밍(Streaming) 챗봇 에이전트',
  'Python `google-generativeai` SDK를 사용해 답안이 출력되는 즉시 타자기 효과로 실시간 응답을 스트리밍하는 자율형 챗봇 구축 튜토리얼입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'gemini-vertex-ai-enterprise-security-governance';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Vertex AI 전환과 엔터프라이즈 데이터 보안 & 쿼터 관리',
  'gemini-vertex-ai-enterprise-security-governance',
  'ai',
  'published',
  58,
  'Google AI Studio에서 기업용 Vertex AI 플랫폼으로 마이그레이션하고 SOC2, HIPAA 데이터 보안 준수 및 쿼터(Quota) 관리를 구성하는 가이드입니다.',
  '## Google AI Studio vs Vertex AI 차이점

개인 개발자나 프로토타이핑 단계에서는 Google AI Studio가 편리하지만, 대기업이나 엔터프라이즈 서비스 단계에서는 Google Cloud Platform(GCP) 기반의 **Vertex AI** 플랫폼을 사용하여 엄격한 데이터 거버넌스를 구축해야 합니다.

Vertex AI 환경에서는 입력된 프롬프트와 고객 데이터가 **구글 모델 학습에 절대로 사용되지 않음**을 보장합니다.

---

## 엔터프라이즈 4대 보안 체계

1. **학습 금지 (Zero Data Retention)**: 데이터 유출 차단 100% 보장
2. **VPC Service Controls**: 사내 폐쇄망 네트워크 안에서만 API 통신 허용
3. **IAM (Identity and Access Management)**: 직원 역할별 API 키 및 접근 권한 분리
4. **SLA (Service Level Agreement)**: 99.9% 무중단 가동률 인프라 보장

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **Vertex AI**: Google Cloud가 제공하는 기업용 엔터프라이즈 AI 관리 및 MLOps 종합 머신러닝 플랫폼.
- **Data Governance (데이터 거버넌스)**: 기업 데이터의 보안, 프라이버시, 법적 준수(Compliance)를 총체적으로 관리하는 시스템 및 규정.
- **Quota (쿼터)**: API 호출 남용을 막기 위해 분당 요청 수(RPM)나 분당 토큰 수(TPM)에 설정하는 인프라 제한 한도.

---

## 엔터프라이즈 보안 체크리스트

- [ ] 사내 기밀 데이터 다룰 시 Vertex AI 보안 옵션이 적용되었는가?
- [ ] API Key 대신 GCP IAM Service Account 인증 방식을 썼는가?
',
  '<h2>Google AI Studio vs Vertex AI 차이점</h2>
<p>개인 개발자나 프로토타이핑 단계에서는 Google AI Studio가 편리하지만, 대기업이나 엔터프라이즈 서비스 단계에서는 Google Cloud Platform(GCP) 기반의 <strong>Vertex AI</strong> 플랫폼을 사용하여 엄격한 데이터 거버넌스를 구축해야 합니다.</p>
<p>Vertex AI 환경에서는 입력된 프롬프트와 고객 데이터가 <strong>구글 모델 학습에 절대로 사용되지 않음</strong>을 보장합니다.</p>
<hr />
<h2>엔터프라이즈 4대 보안 체계</h2>
<p>1. <strong>학습 금지 (Zero Data Retention)</strong>: 데이터 유출 차단 100% 보장</p>
<p>2. <strong>VPC Service Controls</strong>: 사내 폐쇄망 네트워크 안에서만 API 통신 허용</p>
<p>3. <strong>IAM (Identity and Access Management)</strong>: 직원 역할별 API 키 및 접근 권한 분리</p>
<p>4. <strong>SLA (Service Level Agreement)</strong>: 99.9% 무중단 가동률 인프라 보장</p>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Vertex AI</strong>: Google Cloud가 제공하는 기업용 엔터프라이즈 AI 관리 및 MLOps 종합 머신러닝 플랫폼.</li>
<li><strong>Data Governance (데이터 거버넌스)</strong>: 기업 데이터의 보안, 프라이버시, 법적 준수(Compliance)를 총체적으로 관리하는 시스템 및 규정.</li>
<li><strong>Quota (쿼터)</strong>: API 호출 남용을 막기 위해 분당 요청 수(RPM)나 분당 토큰 수(TPM)에 설정하는 인프라 제한 한도.</li>
</ul>
<hr />
<h2>엔터프라이즈 보안 체크리스트</h2>
<ul>
<li>[ ] 사내 기밀 데이터 다룰 시 Vertex AI 보안 옵션이 적용되었는가?</li>
<li>[ ] API Key 대신 GCP IAM Service Account 인증 방식을 썼는가?</li>
</ul>',
  'Gemini Vertex AI 엔터프라이즈 보안 & Google Cloud 쿼터 관리',
  'Google AI Studio에서 기업용 Vertex AI 플랫폼으로 마이그레이션하고 SOC2, HIPAA 데이터 보안 준수 및 쿼터(Quota) 관리를 구성하는 가이드입니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'gemini-developer-cheatsheet-and-master-roadmap';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Gemini 에이전틱 개발자 종합 치트시트 & 마스터 로드맵',
  'gemini-developer-cheatsheet-and-master-roadmap',
  'ai',
  'published',
  59,
  'Gemini 1.5 Pro/Flash 파이프라인 구축부터 치트시트, 멀티모달, Function Calling, 요금 최적화까지 종합 정리한 완결 가이드입니다.',
  '## Gemini 에이전틱 개발 마스터 로드맵

Google Gemini AI 생태계를 활용해 성공적인 에이전틱 앱을 개발하기 위한 전체 종합 성숙도 5단계 지도입니다.

```text
[1단계: 기초 입문] 
Google AI Studio 발급 ➔ System Instruction & Temperature 파라미터 튜닝

[2단계: 멀티모달 파이프라인]
PDF, 오디오, 비디오 파일 업로드 ➔ Native Parsing 및 Q&A

[3단계: 서비스 통합]
Structured Output (JSON Schema) 강제 ➔ 백엔드 DB 연동

[4단계: 자율형 에이전트]
Function Calling & 커스텀 REST API 툴 결합 ➔ 자율 판단 워크플로우

[5단계: 비용 & 엔터프라이즈 최적화]
Context Caching (90% 절감) ➔ Vertex AI IAM 및 데이터 거버넌스 완성
```

---

## 💡 핵심 Gemini AI 용어 사전 (Glossary)

- **Agentic AI (에이전틱 AI)**: 단순 질문 답변을 넘어 목표를 수립하고, 도구를 선택하며, 스스로 판단하여 복잡한 작업을 완수하는 능동형 AI 시스템.
- **RAG (Retrieval-Augmented Generation)**: 검색 증강 생성. 사내 데이터베이스나 문서 검색 결과를 프롬프트에 주입하여 AI 답변의 정확도를 극대화하는 기법.
- **MLOps**: 머신러닝 모델의 개발, 테스트, 배포, 모니터링 전체 생태계를 자동화하는 통합 엔지니어링 프로세스.

---

## Gemini 마스터 체크리스트

- [ ] Gemini 1.5 멀티모달 및 Context Caching 기술을 서비스에 적용했는가?
- [ ] 100% 구조화된 JSON 반환 파이프라인이 정립되었는가?
- [ ] 지속 가능한 AI API 비용 최적화 정책이 수립되었는가?
',
  '<h2>Gemini 에이전틱 개발 마스터 로드맵</h2>
<p>Google Gemini AI 생태계를 활용해 성공적인 에이전틱 앱을 개발하기 위한 전체 종합 성숙도 5단계 지도입니다.</p>
<pre><code class="language-text">[1단계: 기초 입문] 
Google AI Studio 발급 ➔ System Instruction &amp; Temperature 파라미터 튜닝

[2단계: 멀티모달 파이프라인]
PDF, 오디오, 비디오 파일 업로드 ➔ Native Parsing 및 Q&amp;A

[3단계: 서비스 통합]
Structured Output (JSON Schema) 강제 ➔ 백엔드 DB 연동

[4단계: 자율형 에이전트]
Function Calling &amp; 커스텀 REST API 툴 결합 ➔ 자율 판단 워크플로우

[5단계: 비용 &amp; 엔터프라이즈 최적화]
Context Caching (90% 절감) ➔ Vertex AI IAM 및 데이터 거버넌스 완성</code></pre>
<hr />
<h2>💡 핵심 Gemini AI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Agentic AI (에이전틱 AI)</strong>: 단순 질문 답변을 넘어 목표를 수립하고, 도구를 선택하며, 스스로 판단하여 복잡한 작업을 완수하는 능동형 AI 시스템.</li>
<li><strong>RAG (Retrieval-Augmented Generation)</strong>: 검색 증강 생성. 사내 데이터베이스나 문서 검색 결과를 프롬프트에 주입하여 AI 답변의 정확도를 극대화하는 기법.</li>
<li><strong>MLOps</strong>: 머신러닝 모델의 개발, 테스트, 배포, 모니터링 전체 생태계를 자동화하는 통합 엔지니어링 프로세스.</li>
</ul>
<hr />
<h2>Gemini 마스터 체크리스트</h2>
<ul>
<li>[ ] Gemini 1.5 멀티모달 및 Context Caching 기술을 서비스에 적용했는가?</li>
<li>[ ] 100% 구조화된 JSON 반환 파이프라인이 정립되었는가?</li>
<li>[ ] 지속 가능한 AI API 비용 최적화 정책이 수립되었는가?</li>
</ul>',
  'Gemini 에이전틱 개발자 치트시트 & 2026 마스터 로드맵',
  'Gemini 1.5 Pro/Flash 파이프라인 구축부터 치트시트, 멀티모달, Function Calling, 요금 최적화까지 종합 정리한 완결 가이드입니다.',
  DATETIME('now'),
  DATETIME('now')
);
