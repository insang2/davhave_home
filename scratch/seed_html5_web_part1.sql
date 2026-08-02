-- Seed HTML5-Web Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'html5-web',
  'ch01-web-history-and-html5',
  '인터넷과 웹 환경의 발전 및 HTML5 개요',
  '팀 버너스 리의 웹 탄생부터 클라이언트-서버 메커니즘, 웹 표준과 리치 웹 애플리케이션 시대를 연 HTML5의 탄생 배경과 특징을 공부합니다.',
  '**웹(World Wide Web, WWW)**은 인터넷 망 위에서 문자, 이미지, 동영상 등의 정보를 하이퍼텍스트(Hypertext) 방식으로 연결하여 공유하는 정보 공간입니다. 1989년 팀 버너스 리(Tim Berners-Lee)에 의해 처음 개발되었습니다.

---

## 1. 웹의 작동 원리: 클라이언트와 서버

웹 시스템은 **클라이언트(Client)**의 요청(Request)과 **서버(Server)**의 응답(Response) 구조로 동작합니다.

- **웹 브라우저 (Client)**: 사용자가 접속하는 Chrome, Safari, Edge 등. URL 주소를 입력하여 웹 서버에 HTML 문서를 요청합니다.
- **웹 서버 (Server)**: 인터넷 상에서 24시간 대기하며 브라우저의 요청에 따라 저장된 HTML, CSS, JS, 이미지 파일 등을 전송합니다.
- **HTTP/HTTPS 프로토콜**: 웹 브라우저와 웹 서버가 서로 데이터를 주고받기 위한 통신 규약입니다.

---

## 2. 웹 문서 3대 요소의 역할 분담

현대 웹 페이지는 3가지 기술이 조화롭게 결합되어 완성됩니다.

| 구성 요소 | 기술 | 역할 및 비유 |
| :--- | :--- | :--- |
| **구조 (Structure)** | **HTML5** | 웹 문서의 뼈대와 내용을 작성 (건물의 골조) |
| **표현 (Presentation)** | **CSS3** | 웹 문서의 디자인과 레이아웃 꾸미기 (건물의 인테리어) |
| **동작 (Behavior)** | **JavaScript** | 웹 문서에 동적 기능과 생명력 부여 (건물의 엘리베이터/전기 시스템) |

---

## 3. HTML5가 이전 버전과 다른 주요 특징

1. **플러그인 없는 웹 구현**: 과거 Flash나 ActiveX 없이도 `<audio>`, `<video>`, `<canvas>` 태그로 멀티미디어와 그래픽을 직접 표현합니다.
2. **시맨틱 태그 (Semantic Tags)**: `<header>`, `<nav>`, `<article>` 등 의미가 명확한 태그를 도입하여 검색엔진(SEO)이 웹페이지를 더 잘 이해하도록 돕습니다.
3. **풍부한 웹 API 지원**: 위치 정보(Geolocation), 웹 스토리지(Web Storage), 드래그 앤 드롭 등 강력한 브라우저 API를 지원합니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 웹 표준(Web Standards)이란 왜 중요한가요?**
A. 사용자가 어떠한 브라우저(Chrome, Safari, Firefox 등)나 기기(PC, 스마트폰, 태블릿)를 사용하더라도 동일한 웹페이지 콘텐츠가 깨짐 없이 바르게 보이도록 보장하는 지침입니다.
',
  '<p>**웹(World Wide Web, WWW)**은 인터넷 망 위에서 문자, 이미지, 동영상 등의 정보를 하이퍼텍스트(Hypertext) 방식으로 연결하여 공유하는 정보 공간입니다. 1989년 팀 버너스 리(Tim Berners-Lee)에 의해 처음 개발되었습니다.</p>
<hr>
<h2>1. 웹의 작동 원리: 클라이언트와 서버</h2>
<p>웹 시스템은 **클라이언트(Client)**의 요청(Request)과 **서버(Server)**의 응답(Response) 구조로 동작합니다.</p>
<ul>
<li><strong>웹 브라우저 (Client)</strong>: 사용자가 접속하는 Chrome, Safari, Edge 등. URL 주소를 입력하여 웹 서버에 HTML 문서를 요청합니다.</li>
<li><strong>웹 서버 (Server)</strong>: 인터넷 상에서 24시간 대기하며 브라우저의 요청에 따라 저장된 HTML, CSS, JS, 이미지 파일 등을 전송합니다.</li>
<li><strong>HTTP/HTTPS 프로토콜</strong>: 웹 브라우저와 웹 서버가 서로 데이터를 주고받기 위한 통신 규약입니다.</li>
</ul>
<hr>
<h2>2. 웹 문서 3대 요소의 역할 분담</h2>
<p>현대 웹 페이지는 3가지 기술이 조화롭게 결합되어 완성됩니다.</p>
<table>
<thead>
<tr>
<th align="left">구성 요소</th>
<th align="left">기술</th>
<th align="left">역할 및 비유</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>구조 (Structure)</strong></td>
<td align="left"><strong>HTML5</strong></td>
<td align="left">웹 문서의 뼈대와 내용을 작성 (건물의 골조)</td>
</tr>
<tr>
<td align="left"><strong>표현 (Presentation)</strong></td>
<td align="left"><strong>CSS3</strong></td>
<td align="left">웹 문서의 디자인과 레이아웃 꾸미기 (건물의 인테리어)</td>
</tr>
<tr>
<td align="left"><strong>동작 (Behavior)</strong></td>
<td align="left"><strong>JavaScript</strong></td>
<td align="left">웹 문서에 동적 기능과 생명력 부여 (건물의 엘리베이터/전기 시스템)</td>
</tr>
</tbody></table>
<hr>
<h2>3. HTML5가 이전 버전과 다른 주요 특징</h2>
<ol>
<li><strong>플러그인 없는 웹 구현</strong>: 과거 Flash나 ActiveX 없이도 <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;canvas&gt;</code> 태그로 멀티미디어와 그래픽을 직접 표현합니다.</li>
<li><strong>시맨틱 태그 (Semantic Tags)</strong>: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code> 등 의미가 명확한 태그를 도입하여 검색엔진(SEO)이 웹페이지를 더 잘 이해하도록 돕습니다.</li>
<li><strong>풍부한 웹 API 지원</strong>: 위치 정보(Geolocation), 웹 스토리지(Web Storage), 드래그 앤 드롭 등 강력한 브라우저 API를 지원합니다.</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 웹 표준(Web Standards)이란 왜 중요한가요?</strong>
A. 사용자가 어떠한 브라우저(Chrome, Safari, Firefox 등)나 기기(PC, 스마트폰, 태블릿)를 사용하더라도 동일한 웹페이지 콘텐츠가 깨짐 없이 바르게 보이도록 보장하는 지침입니다.</p>
',
  'published',
  'HTML5 웹 프로그래밍 입문 - 인터넷의 발전, 웹 클라이언트/서버, HTML5 특징',
  '인터넷과 웹의 역사, 클라이언트-서버 메커니즘, HTTP 프로토콜 및 웹 표준 시대를 연 HTML5의 핵심 특징을 초보자 눈높이에서 해설합니다.',
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
  'html5-web',
  'ch02-html5-basics',
  'HTML5 문서의 기본 구조와 시맨틱 태그',
  'HTML5 문서의 필수 뼈대 태그 구조와 웹 문서의 의미와 구조적 가치를 부여하는 시맨틱 태그(Semantic Tag)의 종류와 활용법을 학습합니다.',
  '**HTML(HyperText Markup Language)**은 꺾쇠괄호(`< >`) 형태의 **태그(Tag)**를 사용하여 웹 문서의 구조를 서술하는 마크업 언어입니다.

---

## 1. HTML5 표준 문서 뼈대

```html
<!DOCTYPE html> <!-- HTML5 문서 선언 -->
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>첫 번째 웹 페이지</title>
</head>
<body>
  <h1>안녕하세요! HTML5의 세계에 오신 것을 환영합니다.</h1>
  <p>이곳은 본문 내용을 작성하는 구역입니다.</p>
</body>
</html>
```

- **`<!DOCTYPE html>`**: 이 문서가 표준 HTML5 형식임을 브라우저에 알리는 선언.
- **`<head>`**: 문서의 제목, 인코딩 설정(`UTF-8`), 외부 스타일시트 연결 등 문서의 메타데이터 정보가 위치.
- **`<body>`**: 사용자의 눈에 실제로 보이는 모든 웹 콘텐츠가 담기는 구역.

---

## 2. 시맨틱 태그 (Semantic Tag)의 종류와 목적

시맨틱(Semantic)이란 **"의미가 있는"**이라는 뜻으로, 단순 `<div>` 대신 영역의 역할이 명확한 전용 태그를 사용하는 것을 말합니다.

- **`<header>`**: 웹사이트 상단 영역 (로고, 서브메뉴 등).
- **`<nav>`**: 주요 내비게이션 메뉴 항목 링크 모음.
- **`<main>`**: 페이지의 가장 핵심적인 주요 본문 콘텐츠.
- **`<section>`**: 문서 내의 독립적인 문단/주제별 구역.
- **`<article>`**: 블로그 포스트, 뉴스 기사처럼 그 자체로 독립적인 글.
- **`<aside>`**: 사이드바, 광고, 관련 링크 구역.
- **`<footer>`**: 웹사이트 최하단 영역 (저작권, 사업자 정보, 연락처).

---

## 3. 시맨틱 태그 사용 시의 이점

1. **검색엔진 최적화 (SEO)**: 구글이나 네이버 크롤러 로봇이 사이트의 핵심 내용을 더 정확히 파악하여 검색 상위에 반영합니다.
2. **웹 접근성 (Accessibility)**: 시각 장애인용 스크린 리더 프로그램이 웹사이트 구조를 효율적으로 읽어줍니다.
3. **코드 가독성 및 유지보수**: 수많은 `<div>` 대신 태그 이름만 봐도 해당 구역의 기능을 직관적으로 알 수 있습니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `<section>`과 `<article>`은 어떻게 구분하여 사용해야 하나요?**
A. `<article>`은 해당 부분만 떼어내어 다른 사이트(RSS, 소셜 미디어)에 공유해도 그 자체로 완벽한 포스트가 되는 독립 콘텐츠에 쓰며, `<section>`은 페이지 안에서 주제별로 구역을 나눌 때 사용합니다.
',
  '<p>**HTML(HyperText Markup Language)**은 꺾쇠괄호(<code>&lt; &gt;</code>) 형태의 **태그(Tag)**를 사용하여 웹 문서의 구조를 서술하는 마크업 언어입니다.</p>
<hr>
<h2>1. HTML5 표준 문서 뼈대</h2>
<pre><code class="language-html">&lt;!DOCTYPE html&gt; &lt;!-- HTML5 문서 선언 --&gt;
&lt;html lang=&quot;ko&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;title&gt;첫 번째 웹 페이지&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;안녕하세요! HTML5의 세계에 오신 것을 환영합니다.&lt;/h1&gt;
  &lt;p&gt;이곳은 본문 내용을 작성하는 구역입니다.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<ul>
<li><strong><code>&lt;!DOCTYPE html&gt;</code></strong>: 이 문서가 표준 HTML5 형식임을 브라우저에 알리는 선언.</li>
<li><strong><code>&lt;head&gt;</code></strong>: 문서의 제목, 인코딩 설정(<code>UTF-8</code>), 외부 스타일시트 연결 등 문서의 메타데이터 정보가 위치.</li>
<li><strong><code>&lt;body&gt;</code></strong>: 사용자의 눈에 실제로 보이는 모든 웹 콘텐츠가 담기는 구역.</li>
</ul>
<hr>
<h2>2. 시맨틱 태그 (Semantic Tag)의 종류와 목적</h2>
<p>시맨틱(Semantic)이란 **&quot;의미가 있는&quot;**이라는 뜻으로, 단순 <code>&lt;div&gt;</code> 대신 영역의 역할이 명확한 전용 태그를 사용하는 것을 말합니다.</p>
<ul>
<li><strong><code>&lt;header&gt;</code></strong>: 웹사이트 상단 영역 (로고, 서브메뉴 등).</li>
<li><strong><code>&lt;nav&gt;</code></strong>: 주요 내비게이션 메뉴 항목 링크 모음.</li>
<li><strong><code>&lt;main&gt;</code></strong>: 페이지의 가장 핵심적인 주요 본문 콘텐츠.</li>
<li><strong><code>&lt;section&gt;</code></strong>: 문서 내의 독립적인 문단/주제별 구역.</li>
<li><strong><code>&lt;article&gt;</code></strong>: 블로그 포스트, 뉴스 기사처럼 그 자체로 독립적인 글.</li>
<li><strong><code>&lt;aside&gt;</code></strong>: 사이드바, 광고, 관련 링크 구역.</li>
<li><strong><code>&lt;footer&gt;</code></strong>: 웹사이트 최하단 영역 (저작권, 사업자 정보, 연락처).</li>
</ul>
<hr>
<h2>3. 시맨틱 태그 사용 시의 이점</h2>
<ol>
<li><strong>검색엔진 최적화 (SEO)</strong>: 구글이나 네이버 크롤러 로봇이 사이트의 핵심 내용을 더 정확히 파악하여 검색 상위에 반영합니다.</li>
<li><strong>웹 접근성 (Accessibility)</strong>: 시각 장애인용 스크린 리더 프로그램이 웹사이트 구조를 효율적으로 읽어줍니다.</li>
<li><strong>코드 가독성 및 유지보수</strong>: 수많은 <code>&lt;div&gt;</code> 대신 태그 이름만 봐도 해당 구역의 기능을 직관적으로 알 수 있습니다.</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>&lt;section&gt;</code>과 <code>&lt;article&gt;</code>은 어떻게 구분하여 사용해야 하나요?</strong>
A. <code>&lt;article&gt;</code>은 해당 부분만 떼어내어 다른 사이트(RSS, 소셜 미디어)에 공유해도 그 자체로 완벽한 포스트가 되는 독립 콘텐츠에 쓰며, <code>&lt;section&gt;</code>은 페이지 안에서 주제별로 구역을 나눌 때 사용합니다.</p>
',
  'published',
  'HTML5 태그 기초와 시맨틱 태그 완벽 이해 - header, nav, section, article',
  '<!DOCTYPE html> 문서 선언, head와 body 태그, 그리고 웹 접근성과 SEO를 높이는 header, nav, main, section, article, footer 시맨틱 태그 구조를 설명합니다.',
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
  'html5-web',
  'ch03-links-and-multimedia',
  '링크와 멀티미디어 (a, img, audio, video 태그)',
  '다른 페이지로 연결되는 <a> 하이퍼링크 태그와 웹 페이지를 다채롭게 만드는 이미지, 오디오, 비디오 멀티미디어 태그의 사용법을 다룹니다.',
  '웹(Web)이 가지는 최고의 강력함은 페이지 간을 연결하는 **하이퍼링크(Hyperlink)**와 글자 외에 이미지, 동영상 등 **멀티미디어** 요소를 간편하게 통합하는 점에 있습니다.

---

## 1. 하이퍼링크 <a> 태그

```html
<!-- 외부 사이트로 이동 (새 탭에서 열기: target="_blank") -->
<a href="https://davhave.com" target="_blank" rel="noopener">DAVHAVE 이동</a>

<!-- 페이지 내부 앵커 이동 -->
<a href="#section2">2구역으로 이동</a>
```

- **`href`**: 이동하고자 하는 목표 페이지의 URL 주소.
- **`target="_blank"`**: 현재 창이 아닌 새로운 탭에서 링크를 엽니다.

---

## 2. 이미지 <img> 태그와 alt 웹 접근성 속성

```html
<img src="/images/logo.png" alt="DAVHAVE 대표 로고 이미지" width="200">
```

- **`src`**: 이미지 파일의 경로.
- **`alt` (Alternative Text)**: 이미지를 로드할 수 없거나 스크린 리더 사용 시 이미지를 대신해 읽어줄 설명 텍스트 (**SEO 필수 속성**).

---

## 3. HTML5 비디오 & 오디오 재생 태그

별도의 외부 플러그인 설치 없이 브라우저 자체에서 영상과 음악을 재생합니다.

```html
<!-- 비디오 태그 -->
<video src="sample.mp4" controls width="640" poster="thumbnail.jpg">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

<!-- 오디오 태그 -->
<audio src="music.mp3" controls autoplay loop></audio>
```

- **`controls`**: 재생, 일시정지, 음량 조절 등 브라우저 기본 컨트롤러 바를 표시.
- **`autoplay`**: 자동 재생 (최근 브라우저 보안 정책상 음소거 `muted` 필요).
- **`loop`**: 무한 반복 재생.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 이미지 태그의 `alt` 속성을 생략하면 어떤 영향이 생기나요?**
A. 시각 장애인이 웹 브라우징을 할 때 스크린 리더가 해당 이미지의 내용을 읽지 못하며, 구글 등의 검색엔진 크롤러 평가 점수가 감점되어 SEO 성능이 떨어집니다.
',
  '<p>웹(Web)이 가지는 최고의 강력함은 페이지 간을 연결하는 **하이퍼링크(Hyperlink)**와 글자 외에 이미지, 동영상 등 <strong>멀티미디어</strong> 요소를 간편하게 통합하는 점에 있습니다.</p>
<hr>
<h2>1. 하이퍼링크 <a> 태그</h2>
<pre><code class="language-html">&lt;!-- 외부 사이트로 이동 (새 탭에서 열기: target=&quot;_blank&quot;) --&gt;
&lt;a href=&quot;https://davhave.com&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;DAVHAVE 이동&lt;/a&gt;

&lt;!-- 페이지 내부 앵커 이동 --&gt;
&lt;a href=&quot;#section2&quot;&gt;2구역으로 이동&lt;/a&gt;
</code></pre>
<ul>
<li><strong><code>href</code></strong>: 이동하고자 하는 목표 페이지의 URL 주소.</li>
<li><strong><code>target=&quot;_blank&quot;</code></strong>: 현재 창이 아닌 새로운 탭에서 링크를 엽니다.</li>
</ul>
<hr>
<h2>2. 이미지 <img> 태그와 alt 웹 접근성 속성</h2>
<pre><code class="language-html">&lt;img src=&quot;/images/logo.png&quot; alt=&quot;DAVHAVE 대표 로고 이미지&quot; width=&quot;200&quot;&gt;
</code></pre>
<ul>
<li><strong><code>src</code></strong>: 이미지 파일의 경로.</li>
<li><strong><code>alt</code> (Alternative Text)</strong>: 이미지를 로드할 수 없거나 스크린 리더 사용 시 이미지를 대신해 읽어줄 설명 텍스트 (<strong>SEO 필수 속성</strong>).</li>
</ul>
<hr>
<h2>3. HTML5 비디오 &amp; 오디오 재생 태그</h2>
<p>별도의 외부 플러그인 설치 없이 브라우저 자체에서 영상과 음악을 재생합니다.</p>
<pre><code class="language-html">&lt;!-- 비디오 태그 --&gt;
&lt;video src=&quot;sample.mp4&quot; controls width=&quot;640&quot; poster=&quot;thumbnail.jpg&quot;&gt;
  브라우저가 비디오 태그를 지원하지 않습니다.
&lt;/video&gt;

&lt;!-- 오디오 태그 --&gt;
&lt;audio src=&quot;music.mp3&quot; controls autoplay loop&gt;&lt;/audio&gt;
</code></pre>
<ul>
<li><strong><code>controls</code></strong>: 재생, 일시정지, 음량 조절 등 브라우저 기본 컨트롤러 바를 표시.</li>
<li><strong><code>autoplay</code></strong>: 자동 재생 (최근 브라우저 보안 정책상 음소거 <code>muted</code> 필요).</li>
<li><strong><code>loop</code></strong>: 무한 반복 재생.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 이미지 태그의 <code>alt</code> 속성을 생략하면 어떤 영향이 생기나요?</strong>
A. 시각 장애인이 웹 브라우징을 할 때 스크린 리더가 해당 이미지의 내용을 읽지 못하며, 구글 등의 검색엔진 크롤러 평가 점수가 감점되어 SEO 성능이 떨어집니다.</p>
',
  'published',
  'HTML5 멀티미디어 태그 가이드 - a 링크, img 이미지, audio, video 및 iframe',
  '하이퍼링크 <a> 태그, 이미지 <img>와 alt 속성, 웹 브라우저 재생 <audio>, <video> 태그 및 유튜브 외부 영상 <iframe> 삽입법을 실습 코드와 다룹니다.',
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
  'html5-web',
  'ch04-css3-basics',
  'CSS3 스타일시트 기초와 선택자',
  'HTML 요소의 디자인, 색상, 글꼴, 레이아웃을 다듬는 CSS3(Cascading Style Sheets)의 기본 구조와 선택자(Selector) 및 스타일 적용 우선순위를 공부합니다.',
  '**CSS(Cascading Style Sheets)**는 HTML 문서의 색상, 폰트, 크기, 배치 등 외형적인 디자인을 지정하여 보기 좋게 꾸미는 스타일 시트 언어입니다.

---

## 1. CSS 적용 3가지 방법

1. **외부 스타일시트 (External)**: 별도의 `.css` 파일을 만들고 `<link>` 태그로 연결 (**가장 권장**).
2. **내부 스타일시트 (Internal)**: HTML 문장의 `<head>` 안에 `<style>` 태그로 작성.
3. **인라인 스타일 (Inline)**: HTML 태그에 직접 `style=""` 속성으로 지정 (유지보수가 어려워 비권장).

```html
<!-- 외부 CSS 연결 표준 방법 -->
<link rel="stylesheet" href="style.css">
```

---

## 2. CSS 기본 문법과 핵심 선택자 (Selector)

```css
/*  선택자 { 속성: 속성값; }  */
h1 {
  color: #ff6b35;
  font-size: 24px;
}

/* 클래스 선택자 (. 사용): 여러 요소에 재사용 가능 */
.highlight {
  background-color: yellow;
}

/* 아이디 선택자 (# 사용): 페이지 내 유일한 1개 요소 */
#main-header {
  font-weight: bold;
}
```

---

## 3. CSS 적용 우선순위 (Cascading Order)

동일한 HTML 요소에 여러 스타일이 동시에 적용될 때 다음 명시도(Specificity) 순서에 따라 최종 디자인이 결정됩니다.

1. **`!important`** (최우선 강제 적용)
2. **인라인 스타일** (`style="..."`)
3. **아이디 선택자** (`#id`)
4. **클래스 / 가상클래스 선택자** (`.class`, `:hover`)
5. **태그 선택자** (`h1`, `p`, `div`)
6. **전체 선택자** (`*`) 및 상속된 스타일

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 클래스(`.class`)와 아이디(`#id`)는 언제 나누어 써야 하나요?**
A. 아이디(`#id`)는 페이지 내에서 단 하나만 존재하는 독보적 요소(예: 최상단 헤더, 메인 레이아웃)에만 사용하고, 클래스(`.class`)는 버튼 스타일, 카드 디자인처럼 여러 곳에 반복적으로 재사용될 스타일 스타일에 지정합니다.
',
  '<p>**CSS(Cascading Style Sheets)**는 HTML 문서의 색상, 폰트, 크기, 배치 등 외형적인 디자인을 지정하여 보기 좋게 꾸미는 스타일 시트 언어입니다.</p>
<hr>
<h2>1. CSS 적용 3가지 방법</h2>
<ol>
<li><strong>외부 스타일시트 (External)</strong>: 별도의 <code>.css</code> 파일을 만들고 <code>&lt;link&gt;</code> 태그로 연결 (<strong>가장 권장</strong>).</li>
<li><strong>내부 스타일시트 (Internal)</strong>: HTML 문장의 <code>&lt;head&gt;</code> 안에 <code>&lt;style&gt;</code> 태그로 작성.</li>
<li><strong>인라인 스타일 (Inline)</strong>: HTML 태그에 직접 <code>style=&quot;&quot;</code> 속성으로 지정 (유지보수가 어려워 비권장).</li>
</ol>
<pre><code class="language-html">&lt;!-- 외부 CSS 연결 표준 방법 --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
</code></pre>
<hr>
<h2>2. CSS 기본 문법과 핵심 선택자 (Selector)</h2>
<pre><code class="language-css">/*  선택자 { 속성: 속성값; }  */
h1 {
  color: #ff6b35;
  font-size: 24px;
}

/* 클래스 선택자 (. 사용): 여러 요소에 재사용 가능 */
.highlight {
  background-color: yellow;
}

/* 아이디 선택자 (# 사용): 페이지 내 유일한 1개 요소 */
#main-header {
  font-weight: bold;
}
</code></pre>
<hr>
<h2>3. CSS 적용 우선순위 (Cascading Order)</h2>
<p>동일한 HTML 요소에 여러 스타일이 동시에 적용될 때 다음 명시도(Specificity) 순서에 따라 최종 디자인이 결정됩니다.</p>
<ol>
<li><strong><code>!important</code></strong> (최우선 강제 적용)</li>
<li><strong>인라인 스타일</strong> (<code>style=&quot;...&quot;</code>)</li>
<li><strong>아이디 선택자</strong> (<code>#id</code>)</li>
<li><strong>클래스 / 가상클래스 선택자</strong> (<code>.class</code>, <code>:hover</code>)</li>
<li><strong>태그 선택자</strong> (<code>h1</code>, <code>p</code>, <code>div</code>)</li>
<li><strong>전체 선택자</strong> (<code>*</code>) 및 상속된 스타일</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 클래스(<code>.class</code>)와 아이디(<code>#id</code>)는 언제 나누어 써야 하나요?</strong>
A. 아이디(<code>#id</code>)는 페이지 내에서 단 하나만 존재하는 독보적 요소(예: 최상단 헤더, 메인 레이아웃)에만 사용하고, 클래스(<code>.class</code>)는 버튼 스타일, 카드 디자인처럼 여러 곳에 반복적으로 재사용될 스타일 스타일에 지정합니다.</p>
',
  'published',
  'CSS3 스타일시트 입문 - 선택자(Selector), 폰트 및 텍스트 스타일 규칙',
  'HTML을 이쁘게 꾸미는 CSS3 스타일시트 기본 문법, 3가지 적용 방법(Inline, Internal, External), 요소 선택자, 클래스(.class), 아이디(#id) 선택자의 우선순위를 배웁니다.',
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
  'html5-web',
  'ch05-css3-layout-and-advanced',
  '고급 표현을 위한 CSS3 활용 (박스 모델, Flexbox)',
  '모든 HTML 요소를 사각형 상자로 다루는 박스 모델(Box Model)의 개념과 모던 웹 레이아웃 배치의 표준인 Flexbox 정렬 시스템을 파악합니다.',
  'CSS 레이아웃을 제대로 자유자재로 다루려면 모든 HTML 요소가 사각형 형태의 상자라는 **박스 모델(Box Model)**과 1차원 정렬 도구인 **Flexbox**를 완벽히 이해해야 합니다.

---

## 1. 박스 모델 (Box Model)의 4가지 구역

1. **Content (내용)**: 글자나 이미지가 실제 들어가는 영역.
2. **Padding (안쪽 여백)**: 내용과 테두리(Border) 사이의 내부 여백.
3. **Border (테두리)**: 안쪽 여백과 바깥 여백을 가르는 테두리 선.
4. **Margin (바깥 여백)**: 요소와 다른 요소 사이의 외부 간격.

```css
/* 박스 크기 계산을 직관적으로 만들어주는 필수 설정 */
* {
  box-sizing: border-box; /* width에 padding과 border를 포함시켜 계산 */
}
```

---

## 2. 요소 위치 지정: Position 속성

- **`static`**: 기본값 (문서의 일반적인 흐름에 따라 배치).
- **`relative`**: 자기 자신의 원래 위치를 기준으로 상대 이동.
- **`absolute`**: 가장 가까운 `position: relative`인 부모 요소를 기준으로 절대 배치.
- **`fixed`**: 브라우저 화면(Viewport) 창을 기준으로 고정 (스크롤해도 안 움직임).
- **`sticky`**: 스크롤하다가 특정 위치에 도달하면 상단에 부착 고정.

---

## 3. 모던 레이아웃의 핵심: Flexbox (플렉스박스)

요소들을 가로 또는 세로로 자유롭게 정렬하고 공간을 분배하는 현대 웹 디자인의 핵심 도구입니다.

```css
.container {
  display: flex;
  flex-direction: row;            /* 가로 방향 배치 */
  justify-content: space-between; /* 주축 정렬 (좌우 균등 배치) */
  align-items: center;            /* 교차축 정렬 (수직 중앙 정렬) */
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `box-sizing: border-box;`를 전역에 적용하는 이유는 무엇인가요?**
A. 기본값인 `content-box`는 `width: 200px`에 `padding: 20px`을 주면 전체 너비가 240px로 늘어나서 레이아웃 계산이 매우 까다로워집니다. `border-box`를 쓰면 패딩과 테두리를 포함해 딱 200px로 유지해 줍니다.
',
  '<p>CSS 레이아웃을 제대로 자유자재로 다루려면 모든 HTML 요소가 사각형 형태의 상자라는 **박스 모델(Box Model)**과 1차원 정렬 도구인 <strong>Flexbox</strong>를 완벽히 이해해야 합니다.</p>
<hr>
<h2>1. 박스 모델 (Box Model)의 4가지 구역</h2>
<ol>
<li><strong>Content (내용)</strong>: 글자나 이미지가 실제 들어가는 영역.</li>
<li><strong>Padding (안쪽 여백)</strong>: 내용과 테두리(Border) 사이의 내부 여백.</li>
<li><strong>Border (테두리)</strong>: 안쪽 여백과 바깥 여백을 가르는 테두리 선.</li>
<li><strong>Margin (바깥 여백)</strong>: 요소와 다른 요소 사이의 외부 간격.</li>
</ol>
<pre><code class="language-css">/* 박스 크기 계산을 직관적으로 만들어주는 필수 설정 */
* {
  box-sizing: border-box; /* width에 padding과 border를 포함시켜 계산 */
}
</code></pre>
<hr>
<h2>2. 요소 위치 지정: Position 속성</h2>
<ul>
<li><strong><code>static</code></strong>: 기본값 (문서의 일반적인 흐름에 따라 배치).</li>
<li><strong><code>relative</code></strong>: 자기 자신의 원래 위치를 기준으로 상대 이동.</li>
<li><strong><code>absolute</code></strong>: 가장 가까운 <code>position: relative</code>인 부모 요소를 기준으로 절대 배치.</li>
<li><strong><code>fixed</code></strong>: 브라우저 화면(Viewport) 창을 기준으로 고정 (스크롤해도 안 움직임).</li>
<li><strong><code>sticky</code></strong>: 스크롤하다가 특정 위치에 도달하면 상단에 부착 고정.</li>
</ul>
<hr>
<h2>3. 모던 레이아웃의 핵심: Flexbox (플렉스박스)</h2>
<p>요소들을 가로 또는 세로로 자유롭게 정렬하고 공간을 분배하는 현대 웹 디자인의 핵심 도구입니다.</p>
<pre><code class="language-css">.container {
  display: flex;
  flex-direction: row;            /* 가로 방향 배치 */
  justify-content: space-between; /* 주축 정렬 (좌우 균등 배치) */
  align-items: center;            /* 교차축 정렬 (수직 중앙 정렬) */
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>box-sizing: border-box;</code>를 전역에 적용하는 이유는 무엇인가요?</strong>
A. 기본값인 <code>content-box</code>는 <code>width: 200px</code>에 <code>padding: 20px</code>을 주면 전체 너비가 240px로 늘어나서 레이아웃 계산이 매우 까다로워집니다. <code>border-box</code>를 쓰면 패딩과 테두리를 포함해 딱 200px로 유지해 줍니다.</p>
',
  'published',
  'CSS3 레이아웃 핵심 분석 - 박스 모델(Box Model), Flexbox 및 Position',
  '마진(margin), 패딩(padding), 테두리(border) 박스 모델부터 요소의 위치를 제어하는 position 속성, 현대 웹 레이아웃의 필수품 Flexbox(플렉스박스) 사용법을 다룹니다.',
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
  'html5-web',
  'ch06-forms-and-inputs',
  '다양한 입력 폼과 HTML5 유효성 검사',
  '로그인, 회원가입, 설문조사 등 사용자로부터 데이터를 입력받아 서버로 전송하는 <form> 태그와 HTML5에서 추가된 최신 입력 폼 요소를 학습합니다.',
  '**폼(Form)**은 웹 사이트 이용자로부터 아이디, 비밀번호, 이메일, 날짜 등의 데이터를 입력받아 서버로 전달하는 입력 인터페이스입니다.

---

## 1. 폼 기본 구조와 <form> 태그 속성

```html
<form action="/api/login" method="POST">
  <label for="user-id">아이디:</label>
  <input type="text" id="user-id" name="username" required placeholder="아이디 입력">

  <button type="submit">로그인</button>
</form>
```

- **`action`**: 입력받은 데이터가 전송될 서버의 URL 주소.
- **`method`**: 전송 방식 (`GET` - URL 파라미터로 전송 / `POST` - 요청 본문에 숨겨서 안전하게 전송).

---

## 2. 다양한 <input> 태그의 `type` 종류

HTML5에서는 모바일 환경에 최적화된 다양한 타입의 입력 필드를 제공합니다.

| type 속성값 | 용도 | 모바일 키보드 형태 변화 |
| :--- | :--- | :--- |
| **`text` / `password`** | 일반 텍스트 및 암호 마스킹 입력 | 일반 키보드 |
| **`email`** | 이메일 주소 입력 | `@` 기호가 포함된 키보드 |
| **`tel`** | 전화번호 입력 | 숫자 패드 키보드 |
| **`number`** | 숫자 입력 (min, max, step 조절) | 숫자 키보드 |
| **`date` / `time`** | 날짜 및 시간 선택 | 달력/시계 피커 출력 |
| **`color`** | 색상 선택기 팝업 표시 | 컬러 피커 출력 |

---

## 3. HTML5 자체 유효성 검사 (Validation) 속성

자바스크립트 코드 없이도 HTML 태그 속성만으로 올바른 값 입력 여부를 자동 검사합니다.

- **`required`**: 필수로 입력해야 하는 항목 지정.
- **`placeholder="..."`**: 입력 힌트 안내 문구 표시.
- **`autofocus`**: 페이지가 열리자마자 해당 입력란으로 커서 이동.
- **`pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"`**: 정규표현식에 맞는 형태만 허용.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `<label>` 태그는 왜 꼭 써야 하나요?**
A. `<label>` 태그의 `for` 속성과 `<input>`의 `id`를 연결하면, 글자(라벨)를 클릭해도 입력창에 커서가 닿아 편의성이 향상되고 스크린 리더의 접근성이 크게 올라갑니다.
',
  '<p>**폼(Form)**은 웹 사이트 이용자로부터 아이디, 비밀번호, 이메일, 날짜 등의 데이터를 입력받아 서버로 전달하는 입력 인터페이스입니다.</p>
<hr>
<h2>1. 폼 기본 구조와 <form> 태그 속성</h2>
<pre><code class="language-html">&lt;form action=&quot;/api/login&quot; method=&quot;POST&quot;&gt;
  &lt;label for=&quot;user-id&quot;&gt;아이디:&lt;/label&gt;
  &lt;input type=&quot;text&quot; id=&quot;user-id&quot; name=&quot;username&quot; required placeholder=&quot;아이디 입력&quot;&gt;

  &lt;button type=&quot;submit&quot;&gt;로그인&lt;/button&gt;
&lt;/form&gt;
</code></pre>
<ul>
<li><strong><code>action</code></strong>: 입력받은 데이터가 전송될 서버의 URL 주소.</li>
<li><strong><code>method</code></strong>: 전송 방식 (<code>GET</code> - URL 파라미터로 전송 / <code>POST</code> - 요청 본문에 숨겨서 안전하게 전송).</li>
</ul>
<hr>
<h2>2. 다양한 <input> 태그의 <code>type</code> 종류</h2>
<p>HTML5에서는 모바일 환경에 최적화된 다양한 타입의 입력 필드를 제공합니다.</p>
<table>
<thead>
<tr>
<th align="left">type 속성값</th>
<th align="left">용도</th>
<th align="left">모바일 키보드 형태 변화</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong><code>text</code> / <code>password</code></strong></td>
<td align="left">일반 텍스트 및 암호 마스킹 입력</td>
<td align="left">일반 키보드</td>
</tr>
<tr>
<td align="left"><strong><code>email</code></strong></td>
<td align="left">이메일 주소 입력</td>
<td align="left"><code>@</code> 기호가 포함된 키보드</td>
</tr>
<tr>
<td align="left"><strong><code>tel</code></strong></td>
<td align="left">전화번호 입력</td>
<td align="left">숫자 패드 키보드</td>
</tr>
<tr>
<td align="left"><strong><code>number</code></strong></td>
<td align="left">숫자 입력 (min, max, step 조절)</td>
<td align="left">숫자 키보드</td>
</tr>
<tr>
<td align="left"><strong><code>date</code> / <code>time</code></strong></td>
<td align="left">날짜 및 시간 선택</td>
<td align="left">달력/시계 피커 출력</td>
</tr>
<tr>
<td align="left"><strong><code>color</code></strong></td>
<td align="left">색상 선택기 팝업 표시</td>
<td align="left">컬러 피커 출력</td>
</tr>
</tbody></table>
<hr>
<h2>3. HTML5 자체 유효성 검사 (Validation) 속성</h2>
<p>자바스크립트 코드 없이도 HTML 태그 속성만으로 올바른 값 입력 여부를 자동 검사합니다.</p>
<ul>
<li><strong><code>required</code></strong>: 필수로 입력해야 하는 항목 지정.</li>
<li><strong><code>placeholder=&quot;...&quot;</code></strong>: 입력 힌트 안내 문구 표시.</li>
<li><strong><code>autofocus</code></strong>: 페이지가 열리자마자 해당 입력란으로 커서 이동.</li>
<li><strong><code>pattern=&quot;[0-9]{3}-[0-9]{4}-[0-9]{4}&quot;</code></strong>: 정규표현식에 맞는 형태만 허용.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>&lt;label&gt;</code> 태그는 왜 꼭 써야 하나요?</strong>
A. <code>&lt;label&gt;</code> 태그의 <code>for</code> 속성과 <code>&lt;input&gt;</code>의 <code>id</code>를 연결하면, 글자(라벨)를 클릭해도 입력창에 커서가 닿아 편의성이 향상되고 스크린 리더의 접근성이 크게 올라갑니다.</p>
',
  'published',
  'HTML5 폼(Form)과 input 태그 총정리 - 유효성 검사 속성 및 폼 요소',
  '사용자의 정보를 입력받는 <form> 태그, 다양한 type(text, password, email, date 등)을 가진 <input> 태그 및 required, pattern 자동 유효성 검사 속성을 다룹니다.',
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
  'html5-web',
  'ch07-website-layout-practice',
  '실전 웹사이트 레이아웃 제작 실습',
  '앞서 배운 HTML5 시맨틱 구조와 CSS3 Flexbox 스타일링을 종합하여, 실제 프로덕션 수준의 웹사이트 레이아웃 뼈대를 완성하는 실습을 진행합니다.',
  '지금까지 배운 HTML5 시맨틱 태그와 CSS3 스타일링 기법을 종합하여 실제 동작하는 웹사이트의 전체 레이아웃 구성을 직접 제작해 봅니다.

---

## 1. 웹사이트 뼈대 구조 설계 (HTML)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>DAVHAVE 스튜디오</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- 상단 헤더 & 메뉴 -->
  <header class="site-header">
    <div class="logo">DAV<span>HAVE</span></div>
    <nav class="main-nav">
      <a href="#">홈</a>
      <a href="#">소개</a>
      <a href="#">포트폴리오</a>
      <a href="#">교육</a>
    </nav>
  </header>

  <!-- 메인 본문 콘텐츠 -->
  <main class="main-container">
    <article class="content-body">
      <h2>최신 웹 기술 스택 분석</h2>
      <p>HTML5와 CSS3 Flexbox를 활용한 모던 웹페이지 구현...</p>
    </article>
    <aside class="sidebar">
      <h3>카테고리</h3>
      <ul>
        <li>HTML5/CSS3</li>
        <li>JavaScript</li>
      </ul>
    </aside>
  </main>

  <!-- 푸터 -->
  <footer class="site-footer">
    <p>© 2026 DAVHAVE. All rights reserved.</p>
  </footer>
</body>
</html>
```

---

## 2. Flexbox 기반 CSS3 레이아웃 구성

```css
/* 전역 초기화 */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; line-height: 1.6; background: #0a0908; color: #f2ede4; }

/* 헤더 가로 정렬 */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #16130f;
  border-bottom: 1px solid rgba(242,237,228,0.1);
}
.main-nav a { color: #f2ede4; margin-left: 1.5rem; text-decoration: none; }

/* 본문 2단 레이아웃 (본문 + 사이드바) */
.main-container {
  display: flex;
  max-width: 1000px;
  margin: 2rem auto;
  gap: 2rem;
}
.content-body { flex: 3; background: #16130f; padding: 1.5rem; border-radius: 12px; }
.sidebar { flex: 1; background: #16130f; padding: 1.5rem; border-radius: 12px; }

/* 푸터 */
.site-footer { text-align: center; padding: 2rem; color: #9a8f80; border-top: 1px solid rgba(242,237,228,0.1); }
```

---

## 3. 웹사이트 개발 단계 요약

1. **와이어프레임(Wireframe) 구상**: 페이지의 구역 배치 설계.
2. **HTML 시맨틱 태그 골조 완성**: 의미에 맞는 태그 배치.
3. **CSS 초기화 및 레이아웃 정렬**: Flexbox를 활용한 위치 구성.
4. **디테일 디자이닝**: 색상, 폰트, 호버 효과(`:hover`) 추가.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 메인 콘텐츠와 사이드바의 비율을 동적으로 설정하려면 어떻게 하나요?**
A. Flexbox의 `flex: 3;`과 `flex: 1;` 속성을 부여하면 비율이 3:1로 유지되면서 화면 크기에 따라 자동으로 동적 확장 및 축소가 일어납니다.
',
  '<p>지금까지 배운 HTML5 시맨틱 태그와 CSS3 스타일링 기법을 종합하여 실제 동작하는 웹사이트의 전체 레이아웃 구성을 직접 제작해 봅니다.</p>
<hr>
<h2>1. 웹사이트 뼈대 구조 설계 (HTML)</h2>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;ko&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;title&gt;DAVHAVE 스튜디오&lt;/title&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- 상단 헤더 &amp; 메뉴 --&gt;
  &lt;header class=&quot;site-header&quot;&gt;
    &lt;div class=&quot;logo&quot;&gt;DAV&lt;span&gt;HAVE&lt;/span&gt;&lt;/div&gt;
    &lt;nav class=&quot;main-nav&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;홈&lt;/a&gt;
      &lt;a href=&quot;#&quot;&gt;소개&lt;/a&gt;
      &lt;a href=&quot;#&quot;&gt;포트폴리오&lt;/a&gt;
      &lt;a href=&quot;#&quot;&gt;교육&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;!-- 메인 본문 콘텐츠 --&gt;
  &lt;main class=&quot;main-container&quot;&gt;
    &lt;article class=&quot;content-body&quot;&gt;
      &lt;h2&gt;최신 웹 기술 스택 분석&lt;/h2&gt;
      &lt;p&gt;HTML5와 CSS3 Flexbox를 활용한 모던 웹페이지 구현...&lt;/p&gt;
    &lt;/article&gt;
    &lt;aside class=&quot;sidebar&quot;&gt;
      &lt;h3&gt;카테고리&lt;/h3&gt;
      &lt;ul&gt;
        &lt;li&gt;HTML5/CSS3&lt;/li&gt;
        &lt;li&gt;JavaScript&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/aside&gt;
  &lt;/main&gt;

  &lt;!-- 푸터 --&gt;
  &lt;footer class=&quot;site-footer&quot;&gt;
    &lt;p&gt;© 2026 DAVHAVE. All rights reserved.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<hr>
<h2>2. Flexbox 기반 CSS3 레이아웃 구성</h2>
<pre><code class="language-css">/* 전역 초기화 */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; line-height: 1.6; background: #0a0908; color: #f2ede4; }

/* 헤더 가로 정렬 */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #16130f;
  border-bottom: 1px solid rgba(242,237,228,0.1);
}
.main-nav a { color: #f2ede4; margin-left: 1.5rem; text-decoration: none; }

/* 본문 2단 레이아웃 (본문 + 사이드바) */
.main-container {
  display: flex;
  max-width: 1000px;
  margin: 2rem auto;
  gap: 2rem;
}
.content-body { flex: 3; background: #16130f; padding: 1.5rem; border-radius: 12px; }
.sidebar { flex: 1; background: #16130f; padding: 1.5rem; border-radius: 12px; }

/* 푸터 */
.site-footer { text-align: center; padding: 2rem; color: #9a8f80; border-top: 1px solid rgba(242,237,228,0.1); }
</code></pre>
<hr>
<h2>3. 웹사이트 개발 단계 요약</h2>
<ol>
<li><strong>와이어프레임(Wireframe) 구상</strong>: 페이지의 구역 배치 설계.</li>
<li><strong>HTML 시맨틱 태그 골조 완성</strong>: 의미에 맞는 태그 배치.</li>
<li><strong>CSS 초기화 및 레이아웃 정렬</strong>: Flexbox를 활용한 위치 구성.</li>
<li><strong>디테일 디자이닝</strong>: 색상, 폰트, 호버 효과(<code>:hover</code>) 추가.</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 메인 콘텐츠와 사이드바의 비율을 동적으로 설정하려면 어떻게 하나요?</strong>
A. Flexbox의 <code>flex: 3;</code>과 <code>flex: 1;</code> 속성을 부여하면 비율이 3:1로 유지되면서 화면 크기에 따라 자동으로 동적 확장 및 축소가 일어납니다.</p>
',
  'published',
  'HTML5/CSS3 실전 레이아웃 제작 - 시맨틱 구조 설계와 웹사이트 완성',
  '배운 HTML5 시맨틱 태그와 CSS3 Flexbox를 종합하여 실제 동작하는 완벽한 반응형 2단/3단 웹사이트 레이아웃을 단계별로 실습 제작합니다.',
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
