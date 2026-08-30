-- Full AI Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch11-vibe-coding-fundamentals',
  'AI 시대의 개발 패러다임: 바이브 코딩(Vibe Coding) 입문',
  '자연어 프롬프트 지시만으로 웹 서비스와 앱을 초고속으로 창작하는 최신 AI 개발 패러다임인 바이브 코딩(Vibe Coding)의 개념과 실전 활용법을 배웁니다.',
  '**바이브 코딩(Vibe Coding)**은 전 테슬라 AI 이사이자 전 OpenAI 연구원인 안드레 카파시(Andrej Karpathy)가 제시한 최신 개발 개념입니다. 복잡한 문법 코딩 대신 **개발자의 의도와 ''느낌(Vibe)''을 자연어 프롬프트로 전달**하여 AI가 애플리케이션 전체 코드를 생성하게 만드는 혁신적 개발 방식입니다.

---

## 1. 바이브 코딩 전문 용어 사전 (Glossary)

- **Vibe Coding (바이브 코딩)**: 전통적 라인 바이 라인 코딩에서 벗어나 AI 모델과 대화하며 전체 앱/웹 서비스를 빠르게 창작하는 프롬프트 기반 코딩 기법입니다.
- **AI Coding Assistant**: 코드 자동 완성, 리팩토링, 버그 수정 및 풀스택 코드 생성을 돕는 AI 도구입니다. (예: Cursor IDE, GitHub Copilot, Claude Artifacts, Bolt.new)
- **Iteration (반복적 피드백)**: AI가 작성한 코드를 실행해 본 후 오류나 추가 요구사항을 대화로 수정해 나가는 개발 루프입니다.

---

## 2. 바이브 코딩으로 웹 애플리케이션 제작하는 4단계

1. **아이디어와 와이어프레임 프롬프팅**: "HTML, CSS, JS만 사용해 깔끔한 반응형 글자 수 세기 웹 앱을 만들어 줘."
2. **첫 번째 시제품(MVP) 실행**: AI가 생성한 `index.html`, `style.css`, `script.js` 코드를 복사해 브라우저에서 실행.
3. **기능 추가 및 인터랙션 피드백**: "공백 포함/제외 글자 수 세기 버튼 기능과 단어 수 카운트 기능도 추가해 줘."
4. **스타일링 및 폴리싱**: "Glassmorphic 다크 모드 스타일로 CSS를 고급스럽게 수정해 줘."

---

## 3. 바이브 코딩 실전 예제: 글자 수 세기 웹 앱 생성 프롬프트

```html
<!-- 바이브 코딩으로 10초 만에 생성된 글자 수 세기 핵심 엔진 -->
<textarea id="textInput" placeholder="텍스트를 입력하세요..."></textarea>
<div id="stats">
  <p>공백 포함: <span id="charWithSpace">0</span>자</p>
  <p>공백 제외: <span id="charNoSpace">0</span>자</p>
  <p>단어 수: <span id="wordCount">0</span>개</p>
</div>

<script>
const textInput = document.getElementById(''textInput'');
textInput.addEventListener(''input'', () => {
  const text = textInput.value;
  document.getElementById(''charWithSpace'').textContent = text.length;
  document.getElementById(''charNoSpace'').textContent = text.replace(/s/g, '''').length;
  document.getElementById(''wordCount'').textContent = text.trim() ? text.trim().split(/s+/).length : 0;
});
</script>
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 바이브 코딩을 하면 전통적인 프로그래밍 언어 공부가 필요 없나요?**
A. 아닙니다! AI가 코드를 빠르게 생성해 주더라도, 코드가 올바르게 동작하는지 검증하고 버그를 파악하며 시스템 아키텍처를 설계하기 위해 기본 프로그래밍 기초 지식은 여전히 매우 중요합니다.
',
  '<p>**바이브 코딩(Vibe Coding)**은 전 테슬라 AI 이사이자 전 OpenAI 연구원인 안드레 카파시(Andrej Karpathy)가 제시한 최신 개발 개념입니다. 복잡한 문법 코딩 대신 <strong>개발자의 의도와 &#39;느낌(Vibe)&#39;을 자연어 프롬프트로 전달</strong>하여 AI가 애플리케이션 전체 코드를 생성하게 만드는 혁신적 개발 방식입니다.</p>
<hr>
<h2>1. 바이브 코딩 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Vibe Coding (바이브 코딩)</strong>: 전통적 라인 바이 라인 코딩에서 벗어나 AI 모델과 대화하며 전체 앱/웹 서비스를 빠르게 창작하는 프롬프트 기반 코딩 기법입니다.</li>
<li><strong>AI Coding Assistant</strong>: 코드 자동 완성, 리팩토링, 버그 수정 및 풀스택 코드 생성을 돕는 AI 도구입니다. (예: Cursor IDE, GitHub Copilot, Claude Artifacts, Bolt.new)</li>
<li><strong>Iteration (반복적 피드백)</strong>: AI가 작성한 코드를 실행해 본 후 오류나 추가 요구사항을 대화로 수정해 나가는 개발 루프입니다.</li>
</ul>
<hr>
<h2>2. 바이브 코딩으로 웹 애플리케이션 제작하는 4단계</h2>
<ol>
<li><strong>아이디어와 와이어프레임 프롬프팅</strong>: &quot;HTML, CSS, JS만 사용해 깔끔한 반응형 글자 수 세기 웹 앱을 만들어 줘.&quot;</li>
<li><strong>첫 번째 시제품(MVP) 실행</strong>: AI가 생성한 <code>index.html</code>, <code>style.css</code>, <code>script.js</code> 코드를 복사해 브라우저에서 실행.</li>
<li><strong>기능 추가 및 인터랙션 피드백</strong>: &quot;공백 포함/제외 글자 수 세기 버튼 기능과 단어 수 카운트 기능도 추가해 줘.&quot;</li>
<li><strong>스타일링 및 폴리싱</strong>: &quot;Glassmorphic 다크 모드 스타일로 CSS를 고급스럽게 수정해 줘.&quot;</li>
</ol>
<hr>
<h2>3. 바이브 코딩 실전 예제: 글자 수 세기 웹 앱 생성 프롬프트</h2>
<pre><code class="language-html">&lt;!-- 바이브 코딩으로 10초 만에 생성된 글자 수 세기 핵심 엔진 --&gt;
&lt;textarea id=&quot;textInput&quot; placeholder=&quot;텍스트를 입력하세요...&quot;&gt;&lt;/textarea&gt;
&lt;div id=&quot;stats&quot;&gt;
  &lt;p&gt;공백 포함: &lt;span id=&quot;charWithSpace&quot;&gt;0&lt;/span&gt;자&lt;/p&gt;
  &lt;p&gt;공백 제외: &lt;span id=&quot;charNoSpace&quot;&gt;0&lt;/span&gt;자&lt;/p&gt;
  &lt;p&gt;단어 수: &lt;span id=&quot;wordCount&quot;&gt;0&lt;/span&gt;개&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
const textInput = document.getElementById(&#39;textInput&#39;);
textInput.addEventListener(&#39;input&#39;, () =&gt; {
  const text = textInput.value;
  document.getElementById(&#39;charWithSpace&#39;).textContent = text.length;
  document.getElementById(&#39;charNoSpace&#39;).textContent = text.replace(/s/g, &#39;&#39;).length;
  document.getElementById(&#39;wordCount&#39;).textContent = text.trim() ? text.trim().split(/s+/).length : 0;
});
&lt;/script&gt;
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 바이브 코딩을 하면 전통적인 프로그래밍 언어 공부가 필요 없나요?</strong>
A. 아닙니다! AI가 코드를 빠르게 생성해 주더라도, 코드가 올바르게 동작하는지 검증하고 버그를 파악하며 시스템 아키텍처를 설계하기 위해 기본 프로그래밍 기초 지식은 여전히 매우 중요합니다.</p>
',
  'published',
  '바이브 코딩(Vibe Coding)이란? 프롬프트 기반 웹/앱 초고속 개발 패러다임',
  '안드레 카파시(Andrepathy Karpathy)가 주창한 바이브 코딩(Vibe Coding)의 개념, AI 코딩 어시스턴트(Cursor, Claude Artifacts)를 활용해 자연어로 소프트웨어를 빌드하는 법을 다룹니다.',
  11,
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
  'ch12-stt-tts-voice-ai',
  '음성 인식(STT)과 음성 합성(TTS) 기반 Voice AI 구현',
  '음성 인식(Whisper STT) 기술과 음성 합성(TTS) 기술을 결합하여, 사용자의 목소리를 알아듣고 말로 대답하는 음성 대화 AI 서비스를 구축합니다.',
  '텍스트 기반 AI를 넘어 사용자의 목소리를 알아듣고 자연스러운 음성으로 답변하는 **Voice AI 애플리케이션**을 구축합니다.

---

## 1. Voice AI 전문 용어 사전 (Glossary)

- **STT (Speech-to-Text)**: 사람의 음성 오디오 파일(MP3, WAV)을 텍스트 텍스트로 전환하는 기술입니다. (예: OpenAI Whisper)
- **TTS (Text-to-Speech)**: 텍스트 문장을 감정이 담긴 사람 목소리 오디오 파일로 합성해내는 기술입니다. (예: ElevenLabs, gTTS)
- **Sample Rate (샘플링 주파수)**: 아날로그 음성 신호를 디지털로 전환할 때 1초당 추출하는 샘플 개수입니다. (보통 16kHz, 44.1kHz 사용)

---

## 2. Whisper API 기반 음성 인식(STT) 파이썬 코드

```python
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
```

---

## 3. OpenAI Audio TTS 음성 합성 파이썬 코드

```python
# 2. 텍스트 답변을 음성 파일로 생성 (TTS)
response = client.audio.speech.create(
    model="tts-1",
    voice="alloy", # 목소리 톤 선택: alloy, echo, fable, onyx, nova, shimmer
    input="안녕하세요! DAVHAVE Voice AI 서비스입니다. 무엇을 도와드릴까요?"
)

response.stream_to_file("output_response.mp3")
print("음성 합성 오디오 파일 저장 완료: output_response.mp3")
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 웹 브라우저에서 마이크로 음성을 실시간 녹음하려면?**
A. HTML5 `MediaRecorder` API를 사용하면 브라우저에서 마이크 권한을 얻어 오디오 Blob 데이터를 생성한 후, 백엔드 파이썬 API로 전송할 수 있습니다.
',
  '<p>텍스트 기반 AI를 넘어 사용자의 목소리를 알아듣고 자연스러운 음성으로 답변하는 <strong>Voice AI 애플리케이션</strong>을 구축합니다.</p>
<hr>
<h2>1. Voice AI 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>STT (Speech-to-Text)</strong>: 사람의 음성 오디오 파일(MP3, WAV)을 텍스트 텍스트로 전환하는 기술입니다. (예: OpenAI Whisper)</li>
<li><strong>TTS (Text-to-Speech)</strong>: 텍스트 문장을 감정이 담긴 사람 목소리 오디오 파일로 합성해내는 기술입니다. (예: ElevenLabs, gTTS)</li>
<li><strong>Sample Rate (샘플링 주파수)</strong>: 아날로그 음성 신호를 디지털로 전환할 때 1초당 추출하는 샘플 개수입니다. (보통 16kHz, 44.1kHz 사용)</li>
</ul>
<hr>
<h2>2. Whisper API 기반 음성 인식(STT) 파이썬 코드</h2>
<pre><code class="language-python">from openai import OpenAI

client = OpenAI()

# 1. 오디오 파일 열기 및 STT 음성 인식 실행
audio_file = open(&quot;sample_speech.mp3&quot;, &quot;rb&quot;)
transcription = client.audio.transcriptions.create(
  model=&quot;whisper-1&quot;,
  file=audio_file,
  language=&quot;ko&quot; # 한국어 지정
)

print(&quot;음성 인식 결과:&quot;, transcription.text)
</code></pre>
<hr>
<h2>3. OpenAI Audio TTS 음성 합성 파이썬 코드</h2>
<pre><code class="language-python"># 2. 텍스트 답변을 음성 파일로 생성 (TTS)
response = client.audio.speech.create(
    model=&quot;tts-1&quot;,
    voice=&quot;alloy&quot;, # 목소리 톤 선택: alloy, echo, fable, onyx, nova, shimmer
    input=&quot;안녕하세요! DAVHAVE Voice AI 서비스입니다. 무엇을 도와드릴까요?&quot;
)

response.stream_to_file(&quot;output_response.mp3&quot;)
print(&quot;음성 합성 오디오 파일 저장 완료: output_response.mp3&quot;)
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 웹 브라우저에서 마이크로 음성을 실시간 녹음하려면?</strong>
A. HTML5 <code>MediaRecorder</code> API를 사용하면 브라우저에서 마이크 권한을 얻어 오디오 Blob 데이터를 생성한 후, 백엔드 파이썬 API로 전송할 수 있습니다.</p>
',
  'published',
  'Voice AI 구축 - Whisper STT 음성 인식 및 gTTS/ElevenLabs 음성 합성 연동',
  '사람의 말을 알아듣는 STT(Speech-to-Text: OpenAI Whisper)와 목소리로 대답하는 TTS(Text-to-Speech)를 연동해 말로 대화하는 음성 AI 시스템을 구축합니다.',
  12,
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
  'ch13-pdf-document-qa-rag',
  'PDF 문서를 읽고 답하는 RAG 문서 질의응답 시스템',
  '긴 PDF 문서나 사내 규정 파일을 파싱하고 벡터 DB에 저장하여, 문서 내용에 기반해 명확히 답변하는 PDF 전용 RAG 질의응답 서비스를 만듭니다.',
  '사내 계약서, 연구 논문, 매뉴얼 등 **PDF 파일**을 업로드하면 내용을 스스로 분석하여 질문에 정밀하게 답변하는 **PDF RAG 시스템**을 구축합니다.

---

## 1. PDF RAG 전문 용어 사전 (Glossary)

- **PyPDF / pdfplumber**: PDF 파일 내부의 텍스트, 표, 레이아웃을 파싱하여 문자열 데이터로 추출하는 파이썬 라이브러리입니다.
- **RecursiveCharacterTextSplitter**: 문단, 줄바꿈, 띄어쓰기 단위를 고려하여 의미가 단절되지 않게 텍스트를 청크(Chunk) 단위로 분할하는 도구입니다.
- **Overlap (오버랩)**: 분할된 청크 간에 일부분(예: 100자)을 중복되게 겹쳐서 문맥의 연속성을 보장하는 기법입니다.

---

## 2. PDF 파싱 및 RAG 통합 시스템 구축 4단계

```python
# 1. PDF 텍스트 추출
from pypdf import PdfReader

reader = PdfReader("company_policy.pdf")
full_text = ""
for page in reader.pages:
    full_text += page.extract_text() + "
"

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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 스캔된 이미지 형태의 PDF 문서도 읽을 수 있나요?**
A. 텍스트가 아닌 이미지 스캔 PDF인 경우 단순 `PyPDF`로는 글자를 읽을 수 없으므로, `Tesseract OCR` 기법이나 OpenAI `gpt-4o` 멀티모달 비전(Vision) 기능을 사용해야 합니다.
',
  '<p>사내 계약서, 연구 논문, 매뉴얼 등 <strong>PDF 파일</strong>을 업로드하면 내용을 스스로 분석하여 질문에 정밀하게 답변하는 <strong>PDF RAG 시스템</strong>을 구축합니다.</p>
<hr>
<h2>1. PDF RAG 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>PyPDF / pdfplumber</strong>: PDF 파일 내부의 텍스트, 표, 레이아웃을 파싱하여 문자열 데이터로 추출하는 파이썬 라이브러리입니다.</li>
<li><strong>RecursiveCharacterTextSplitter</strong>: 문단, 줄바꿈, 띄어쓰기 단위를 고려하여 의미가 단절되지 않게 텍스트를 청크(Chunk) 단위로 분할하는 도구입니다.</li>
<li><strong>Overlap (오버랩)</strong>: 분할된 청크 간에 일부분(예: 100자)을 중복되게 겹쳐서 문맥의 연속성을 보장하는 기법입니다.</li>
</ul>
<hr>
<h2>2. PDF 파싱 및 RAG 통합 시스템 구축 4단계</h2>
<pre><code class="language-python"># 1. PDF 텍스트 추출
from pypdf import PdfReader

reader = PdfReader(&quot;company_policy.pdf&quot;)
full_text = &quot;&quot;
for page in reader.pages:
    full_text += page.extract_text() + &quot;
&quot;

print(f&quot;총 {len(reader.pages)} 페이지 텍스트 추출 완료.&quot;)

# 2. LLM 질의응답 요청 (추출된 PDF 컨텍스트 주입)
def ask_pdf_question(query, pdf_context):
    prompt = f&quot;&quot;&quot;
다음 제공된 PDF 문서 내용만을 바탕으로 사용자 질문에 사실대로 답변해 주세요.
문서에 없는 내용이라면 &quot;문서에 해당 내용이 존재하지 않습니다&quot;라고 답해 주세요.

[PDF 문서 내용]
{pdf_context[:3000]} # 최대 컨텍스트 슬라이싱

[사용자 질문]
{query}
&quot;&quot;&quot;
    res = client.chat.completions.create(
        model=&quot;gpt-4o-mini&quot;,
        messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: prompt}],
        temperature=0.0
    )
    return res.choices[0].message.content

print(ask_pdf_question(&quot;연차 유급휴가 규정이 어떻게 되나요?&quot;, full_text))
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 스캔된 이미지 형태의 PDF 문서도 읽을 수 있나요?</strong>
A. 텍스트가 아닌 이미지 스캔 PDF인 경우 단순 <code>PyPDF</code>로는 글자를 읽을 수 없으므로, <code>Tesseract OCR</code> 기법이나 OpenAI <code>gpt-4o</code> 멀티모달 비전(Vision) 기능을 사용해야 합니다.</p>
',
  'published',
  'PDF RAG 시스템 구축 - PyPDF 텍스트 추출, Vector DB 및 LangChain 질의응답',
  '수십 페이지의 PDF 문서나 매뉴얼을 파싱(PyPDF)하고, 임베딩을 거쳐 Vector DB에 저장한 후 질문에 환각 없이 답변하는 PDF RAG 서비스를 다룹니다.',
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
  '수많은 회의록이나 긴 문서를 입력받아 핵심 요점, Action Item, 담당자로 정돈된 멋진 Markdown/PDF 레포트를 생성하는 자동화 서비스를 만듭니다.',
  '긴 회의록이나 대화 기록을 파싱하여 핵심 내용 요약, 결정 사항, 담당자별 **Action Item**을 자동으로 분류하고 멋진 레포트 문서로 생성하는 서비스를 구축합니다.

---

## 1. 레포트 생성 전문 용어 사전 (Glossary)

- **Extractive Summarization (추출 요약)**: 본문 문장 중 가장 중요한 문장을 그대로 뽑아내는 요약 방식입니다.
- **Abstractive Summarization (생성 요약)**: 문장의 의미를 이해하고 새로운 단어와 정돈된 문체로 재구성하는 LLM 방식의 고급 요약입니다.
- **Action Item (실행 과제)**: 회의나 대화 결과 후 특정 담당자가 언제까지 수행해야 할 명확한 과제 목록입니다.

---

## 2. AI 자동 레포트 생성기 파이썬 코드

```python
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 생성된 마크다운 레포트를 PDF 파일로 저장하려면?**
A. 파이썬 `markdown` 및 `pdfkit` (또는 `reportlab`) 라이브러리를 사용하면 생성된 마크다운 텍스트를 인쇄 가능한 깔끔한 PDF 문서로 즉시 출력할 수 있습니다.
',
  '<p>긴 회의록이나 대화 기록을 파싱하여 핵심 내용 요약, 결정 사항, 담당자별 <strong>Action Item</strong>을 자동으로 분류하고 멋진 레포트 문서로 생성하는 서비스를 구축합니다.</p>
<hr>
<h2>1. 레포트 생성 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Extractive Summarization (추출 요약)</strong>: 본문 문장 중 가장 중요한 문장을 그대로 뽑아내는 요약 방식입니다.</li>
<li><strong>Abstractive Summarization (생성 요약)</strong>: 문장의 의미를 이해하고 새로운 단어와 정돈된 문체로 재구성하는 LLM 방식의 고급 요약입니다.</li>
<li><strong>Action Item (실행 과제)</strong>: 회의나 대화 결과 후 특정 담당자가 언제까지 수행해야 할 명확한 과제 목록입니다.</li>
</ul>
<hr>
<h2>2. AI 자동 레포트 생성기 파이썬 코드</h2>
<pre><code class="language-python">def generate_meeting_report(meeting_transcript):
    system_prompt = &quot;&quot;&quot;
너는 전문 비즈니스 수석 서기야.
제공된 회의 대화록을 읽고 다음 Markdown 레포트 양식으로 정돈해 줘.

# 📋 회의 요약 레포트
## 1. 회의 핵심 요약 (3줄 요약)
## 2. 주요 결정 사항 (Decision Points)
## 3. 담당자별 Action Items (담당자 | 과제 | 기한 표 형태)
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

transcript = &quot;&quot;&quot;
김팀장: 다음 주 월요일까지 신규 서비스 메인 페이지 시안이 나와야 합니다.
이대리: 네, 제가 프론트엔드 디자인 시안을 일요일까지 완성하겠습니다.
박과장: 저는 백엔드 API 명세서를 토요일까지 서버에 배포해 두겠습니다.
&quot;&quot;&quot;

report = generate_meeting_report(transcript)
print(report)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 생성된 마크다운 레포트를 PDF 파일로 저장하려면?</strong>
A. 파이썬 <code>markdown</code> 및 <code>pdfkit</code> (또는 <code>reportlab</code>) 라이브러리를 사용하면 생성된 마크다운 텍스트를 인쇄 가능한 깔끔한 PDF 문서로 즉시 출력할 수 있습니다.</p>
',
  'published',
  'AI 문서 자동 요약 및 레포트 생성기 - 요약 프롬프트와 Markdown/PDF 변환',
  '긴 대화 록이나 회의록을 핵심 요약, Action Item, 담당자별 할 일로 구조화하여 깔끔한 레포트(Report) 문서로 자동 생성하는 시스템을 제작합니다.',
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
  'LLM의 최신 정보 부재(Knowledge Cutoff) 한계를 극복하기 위해 실시간 웹 검색 및 웹 스크래핑을 수행하고 답하는 웹 탐색 AI 에이전트를 제작합니다.',
  '학습 데이터 끊김(Knowledge Cutoff) 한계를 넘어서, 최신 뉴스나 실시간 정보를 **직접 인터넷 서핑하여 검색하고 결과를 종합해 답하는 AI 에이전트**를 구축합니다.

---

## 1. 웹 서핑 에이전트 전문 용어 사전 (Glossary)

- **Search API (Tavily / SerpAPI)**: AI 에이전트 전용으로 구글/네이버 검색 결과를 clean한 JSON 형태로 반환해 주는 검색 API입니다.
- **Web Scraping (웹 스크래핑)**: 검색된 웹페이지 URL에 접속해 HTML을 읽고 본문 텍스트를 추출해내는 작업입니다. (예: BeautifulSoup, Newspaper3k)
- **Real-time RAG**: 사전 저장된 DB가 아닌 실시간 검색 결과 텍스트를 컨텍스트로 바로 활용하는 튜닝 방식입니다.

---

## 2. 파이썬 웹 서핑 AI 에이전트 예제 코드

```python
import requests

def search_tavily(query, api_key):
    """Tavily Search API로 실시간 웹 정보 수집"""
    url = "https://api.tavily.com/search"
    payload = {"api_key": api_key, "query": query, "search_depth": "basic"}
    res = requests.post(url, json=payload).json()
    
    # 검색된 웹페이지 본문 조각 모으기
    snippets = ""
    for result in res.get("results", [])[:3]:
        snippets += f"출처: {result[''url'']}
내용: {result[''content'']}

"
    return snippets

def web_browsing_agent(user_query, tavily_key):
    # 1. 실시간 웹 검색 수행
    web_context = search_tavily(user_query, tavily_key)
    
    # 2. 검색 결과를 바탕으로 LLM 답변 생성
    prompt = f"다음 최신 웹 검색 결과를 참조하여 사용자 질문에 명확히 답변하고 출처를 명시해 줘.

[웹 검색 결과]
{web_context}

[질문]
{user_query}"
    
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return res.choices[0].message.content
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 일반 브라우저 크롤링과 Tavily API의 차이점은?**
A. 일반 웹 크롤링은 차단(CAPTCHA) 위험이 높고 광고/네비게이션 태그가 섞여 나오지만, Tavily 같은 AI 전용 검색 API는 본문 핵심 텍스트만 깨끗이 정제하여 토큰을 80% 이상 절약해 줍니다.
',
  '<p>학습 데이터 끊김(Knowledge Cutoff) 한계를 넘어서, 최신 뉴스나 실시간 정보를 <strong>직접 인터넷 서핑하여 검색하고 결과를 종합해 답하는 AI 에이전트</strong>를 구축합니다.</p>
<hr>
<h2>1. 웹 서핑 에이전트 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Search API (Tavily / SerpAPI)</strong>: AI 에이전트 전용으로 구글/네이버 검색 결과를 clean한 JSON 형태로 반환해 주는 검색 API입니다.</li>
<li><strong>Web Scraping (웹 스크래핑)</strong>: 검색된 웹페이지 URL에 접속해 HTML을 읽고 본문 텍스트를 추출해내는 작업입니다. (예: BeautifulSoup, Newspaper3k)</li>
<li><strong>Real-time RAG</strong>: 사전 저장된 DB가 아닌 실시간 검색 결과 텍스트를 컨텍스트로 바로 활용하는 튜닝 방식입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 웹 서핑 AI 에이전트 예제 코드</h2>
<pre><code class="language-python">import requests

def search_tavily(query, api_key):
    &quot;&quot;&quot;Tavily Search API로 실시간 웹 정보 수집&quot;&quot;&quot;
    url = &quot;https://api.tavily.com/search&quot;
    payload = {&quot;api_key&quot;: api_key, &quot;query&quot;: query, &quot;search_depth&quot;: &quot;basic&quot;}
    res = requests.post(url, json=payload).json()
    
    # 검색된 웹페이지 본문 조각 모으기
    snippets = &quot;&quot;
    for result in res.get(&quot;results&quot;, [])[:3]:
        snippets += f&quot;출처: {result[&#39;url&#39;]}
내용: {result[&#39;content&#39;]}

&quot;
    return snippets

def web_browsing_agent(user_query, tavily_key):
    # 1. 실시간 웹 검색 수행
    web_context = search_tavily(user_query, tavily_key)
    
    # 2. 검색 결과를 바탕으로 LLM 답변 생성
    prompt = f&quot;다음 최신 웹 검색 결과를 참조하여 사용자 질문에 명확히 답변하고 출처를 명시해 줘.

[웹 검색 결과]
{web_context}

[질문]
{user_query}&quot;
    
    res = client.chat.completions.create(
        model=&quot;gpt-4o-mini&quot;,
        messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: prompt}]
    )
    return res.choices[0].message.content
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 일반 브라우저 크롤링과 Tavily API의 차이점은?</strong>
A. 일반 웹 크롤링은 차단(CAPTCHA) 위험이 높고 광고/네비게이션 태그가 섞여 나오지만, Tavily 같은 AI 전용 검색 API는 본문 핵심 텍스트만 깨끗이 정제하여 토큰을 80% 이상 절약해 줍니다.</p>
',
  'published',
  '웹 서핑 AI 에이전트 구축 - Tavily/SerpAPI 연동, Web Scraping 및 실시간 RAG',
  '최신 인터넷 정보가 필요할 때 검색 엔진(Tavily API)을 직접 서핑하여 자료를 수집하고 요약하여 최신 정답을 내놓는 실시간 웹 서핑 AI 에이전트를 제작합니다.',
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
