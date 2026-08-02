import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  {
    order_index: 1,
    slug: 'ch01-web-history-and-html5',
    title: '인터넷과 웹 환경의 발전 및 HTML5 개요',
    seo_title: 'HTML5 웹 프로그래밍 입문 - 인터넷의 발전, 웹 클라이언트/서버, HTML5 특징',
    seo_description: '인터넷과 웹의 역사, 클라이언트-서버 메커니즘, HTTP 프로토콜 및 웹 표준 시대를 연 HTML5의 핵심 특징을 초보자 눈높이에서 해설합니다.',
    excerpt: '팀 버너스 리의 웹 탄생부터 클라이언트-서버 메커니즘, 웹 표준과 리치 웹 애플리케이션 시대를 연 HTML5의 탄생 배경과 특징을 공부합니다.',
    content_md: `**웹(World Wide Web, WWW)**은 인터넷 망 위에서 문자, 이미지, 동영상 등의 정보를 하이퍼텍스트(Hypertext) 방식으로 연결하여 공유하는 정보 공간입니다. 1989년 팀 버너스 리(Tim Berners-Lee)에 의해 처음 개발되었습니다.

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

1. **플러그인 없는 웹 구현**: 과거 Flash나 ActiveX 없이도 \`<audio>\`, \`<video>\`, \`<canvas>\` 태그로 멀티미디어와 그래픽을 직접 표현합니다.
2. **시맨틱 태그 (Semantic Tags)**: \`<header>\`, \`<nav>\`, \`<article>\` 등 의미가 명확한 태그를 도입하여 검색엔진(SEO)이 웹페이지를 더 잘 이해하도록 돕습니다.
3. **풍부한 웹 API 지원**: 위치 정보(Geolocation), 웹 스토리지(Web Storage), 드래그 앤 드롭 등 강력한 브라우저 API를 지원합니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 웹 표준(Web Standards)이란 왜 중요한가요?**
A. 사용자가 어떠한 브라우저(Chrome, Safari, Firefox 등)나 기기(PC, 스마트폰, 태블릿)를 사용하더라도 동일한 웹페이지 콘텐츠가 깨짐 없이 바르게 보이도록 보장하는 지침입니다.
`
  },
  {
    order_index: 2,
    slug: 'ch02-html5-basics',
    title: 'HTML5 문서의 기본 구조와 시맨틱 태그',
    seo_title: 'HTML5 태그 기초와 시맨틱 태그 완벽 이해 - header, nav, section, article',
    seo_description: '<!DOCTYPE html> 문서 선언, head와 body 태그, 그리고 웹 접근성과 SEO를 높이는 header, nav, main, section, article, footer 시맨틱 태그 구조를 설명합니다.',
    excerpt: 'HTML5 문서의 필수 뼈대 태그 구조와 웹 문서의 의미와 구조적 가치를 부여하는 시맨틱 태그(Semantic Tag)의 종류와 활용법을 학습합니다.',
    content_md: `**HTML(HyperText Markup Language)**은 꺾쇠괄호(\`< >\`) 형태의 **태그(Tag)**를 사용하여 웹 문서의 구조를 서술하는 마크업 언어입니다.

---

## 1. HTML5 표준 문서 뼈대

\`\`\`html
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
\`\`\`

- **\`<!DOCTYPE html>\`**: 이 문서가 표준 HTML5 형식임을 브라우저에 알리는 선언.
- **\`<head>\`**: 문서의 제목, 인코딩 설정(\`UTF-8\`), 외부 스타일시트 연결 등 문서의 메타데이터 정보가 위치.
- **\`<body>\`**: 사용자의 눈에 실제로 보이는 모든 웹 콘텐츠가 담기는 구역.

---

## 2. 시맨틱 태그 (Semantic Tag)의 종류와 목적

시맨틱(Semantic)이란 **"의미가 있는"**이라는 뜻으로, 단순 \`<div>\` 대신 영역의 역할이 명확한 전용 태그를 사용하는 것을 말합니다.

- **\`<header>\`**: 웹사이트 상단 영역 (로고, 서브메뉴 등).
- **\`<nav>\`**: 주요 내비게이션 메뉴 항목 링크 모음.
- **\`<main>\`**: 페이지의 가장 핵심적인 주요 본문 콘텐츠.
- **\`<section>\`**: 문서 내의 독립적인 문단/주제별 구역.
- **\`<article>\`**: 블로그 포스트, 뉴스 기사처럼 그 자체로 독립적인 글.
- **\`<aside>\`**: 사이드바, 광고, 관련 링크 구역.
- **\`<footer>\`**: 웹사이트 최하단 영역 (저작권, 사업자 정보, 연락처).

---

## 3. 시맨틱 태그 사용 시의 이점

1. **검색엔진 최적화 (SEO)**: 구글이나 네이버 크롤러 로봇이 사이트의 핵심 내용을 더 정확히 파악하여 검색 상위에 반영합니다.
2. **웹 접근성 (Accessibility)**: 시각 장애인용 스크린 리더 프로그램이 웹사이트 구조를 효율적으로 읽어줍니다.
3. **코드 가독성 및 유지보수**: 수많은 \`<div>\` 대신 태그 이름만 봐도 해당 구역의 기능을 직관적으로 알 수 있습니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`<section>\`과 \`<article>\`은 어떻게 구분하여 사용해야 하나요?**
A. \`<article>\`은 해당 부분만 떼어내어 다른 사이트(RSS, 소셜 미디어)에 공유해도 그 자체로 완벽한 포스트가 되는 독립 콘텐츠에 쓰며, \`<section>\`은 페이지 안에서 주제별로 구역을 나눌 때 사용합니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-links-and-multimedia',
    title: '링크와 멀티미디어 (a, img, audio, video 태그)',
    seo_title: 'HTML5 멀티미디어 태그 가이드 - a 링크, img 이미지, audio, video 및 iframe',
    seo_description: '하이퍼링크 <a> 태그, 이미지 <img>와 alt 속성, 웹 브라우저 재생 <audio>, <video> 태그 및 유튜브 외부 영상 <iframe> 삽입법을 실습 코드와 다룹니다.',
    excerpt: '다른 페이지로 연결되는 <a> 하이퍼링크 태그와 웹 페이지를 다채롭게 만드는 이미지, 오디오, 비디오 멀티미디어 태그의 사용법을 다룹니다.',
    content_md: `웹(Web)이 가지는 최고의 강력함은 페이지 간을 연결하는 **하이퍼링크(Hyperlink)**와 글자 외에 이미지, 동영상 등 **멀티미디어** 요소를 간편하게 통합하는 점에 있습니다.

---

## 1. 하이퍼링크 <a> 태그

\`\`\`html
<!-- 외부 사이트로 이동 (새 탭에서 열기: target="_blank") -->
<a href="https://davhave.com" target="_blank" rel="noopener">DAVHAVE 이동</a>

<!-- 페이지 내부 앵커 이동 -->
<a href="#section2">2구역으로 이동</a>
\`\`\`

- **\`href\`**: 이동하고자 하는 목표 페이지의 URL 주소.
- **\`target="_blank"\`**: 현재 창이 아닌 새로운 탭에서 링크를 엽니다.

---

## 2. 이미지 <img> 태그와 alt 웹 접근성 속성

\`\`\`html
<img src="/images/logo.png" alt="DAVHAVE 대표 로고 이미지" width="200">
\`\`\`

- **\`src\`**: 이미지 파일의 경로.
- **\`alt\` (Alternative Text)**: 이미지를 로드할 수 없거나 스크린 리더 사용 시 이미지를 대신해 읽어줄 설명 텍스트 (**SEO 필수 속성**).

---

## 3. HTML5 비디오 & 오디오 재생 태그

별도의 외부 플러그인 설치 없이 브라우저 자체에서 영상과 음악을 재생합니다.

\`\`\`html
<!-- 비디오 태그 -->
<video src="sample.mp4" controls width="640" poster="thumbnail.jpg">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

<!-- 오디오 태그 -->
<audio src="music.mp3" controls autoplay loop></audio>
\`\`\`

- **\`controls\`**: 재생, 일시정지, 음량 조절 등 브라우저 기본 컨트롤러 바를 표시.
- **\`autoplay\`**: 자동 재생 (최근 브라우저 보안 정책상 음소거 \`muted\` 필요).
- **\`loop\`**: 무한 반복 재생.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 이미지 태그의 \`alt\` 속성을 생략하면 어떤 영향이 생기나요?**
A. 시각 장애인이 웹 브라우징을 할 때 스크린 리더가 해당 이미지의 내용을 읽지 못하며, 구글 등의 검색엔진 크롤러 평가 점수가 감점되어 SEO 성능이 떨어집니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-css3-basics',
    title: 'CSS3 스타일시트 기초와 선택자',
    seo_title: 'CSS3 스타일시트 입문 - 선택자(Selector), 폰트 및 텍스트 스타일 규칙',
    seo_description: 'HTML을 이쁘게 꾸미는 CSS3 스타일시트 기본 문법, 3가지 적용 방법(Inline, Internal, External), 요소 선택자, 클래스(.class), 아이디(#id) 선택자의 우선순위를 배웁니다.',
    excerpt: 'HTML 요소의 디자인, 색상, 글꼴, 레이아웃을 다듬는 CSS3(Cascading Style Sheets)의 기본 구조와 선택자(Selector) 및 스타일 적용 우선순위를 공부합니다.',
    content_md: `**CSS(Cascading Style Sheets)**는 HTML 문서의 색상, 폰트, 크기, 배치 등 외형적인 디자인을 지정하여 보기 좋게 꾸미는 스타일 시트 언어입니다.

---

## 1. CSS 적용 3가지 방법

1. **외부 스타일시트 (External)**: 별도의 \`.css\` 파일을 만들고 \`<link>\` 태그로 연결 (**가장 권장**).
2. **내부 스타일시트 (Internal)**: HTML 문장의 \`<head>\` 안에 \`<style>\` 태그로 작성.
3. **인라인 스타일 (Inline)**: HTML 태그에 직접 \`style=""\` 속성으로 지정 (유지보수가 어려워 비권장).

\`\`\`html
<!-- 외부 CSS 연결 표준 방법 -->
<link rel="stylesheet" href="style.css">
\`\`\`

---

## 2. CSS 기본 문법과 핵심 선택자 (Selector)

\`\`\`css
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
\`\`\`

---

## 3. CSS 적용 우선순위 (Cascading Order)

동일한 HTML 요소에 여러 스타일이 동시에 적용될 때 다음 명시도(Specificity) 순서에 따라 최종 디자인이 결정됩니다.

1. **\`!important\`** (최우선 강제 적용)
2. **인라인 스타일** (\`style="..."\`)
3. **아이디 선택자** (\`#id\`)
4. **클래스 / 가상클래스 선택자** (\`.class\`, \`:hover\`)
5. **태그 선택자** (\`h1\`, \`p\`, \`div\`)
6. **전체 선택자** (\`*\`) 및 상속된 스타일

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 클래스(\`.class\`)와 아이디(\`#id\`)는 언제 나누어 써야 하나요?**
A. 아이디(\`#id\`)는 페이지 내에서 단 하나만 존재하는 독보적 요소(예: 최상단 헤더, 메인 레이아웃)에만 사용하고, 클래스(\`.class\`)는 버튼 스타일, 카드 디자인처럼 여러 곳에 반복적으로 재사용될 스타일 스타일에 지정합니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-css3-layout-and-advanced',
    title: '고급 표현을 위한 CSS3 활용 (박스 모델, Flexbox)',
    seo_title: 'CSS3 레이아웃 핵심 분석 - 박스 모델(Box Model), Flexbox 및 Position',
    seo_description: '마진(margin), 패딩(padding), 테두리(border) 박스 모델부터 요소의 위치를 제어하는 position 속성, 현대 웹 레이아웃의 필수품 Flexbox(플렉스박스) 사용법을 다룹니다.',
    excerpt: '모든 HTML 요소를 사각형 상자로 다루는 박스 모델(Box Model)의 개념과 모던 웹 레이아웃 배치의 표준인 Flexbox 정렬 시스템을 파악합니다.',
    content_md: `CSS 레이아웃을 제대로 자유자재로 다루려면 모든 HTML 요소가 사각형 형태의 상자라는 **박스 모델(Box Model)**과 1차원 정렬 도구인 **Flexbox**를 완벽히 이해해야 합니다.

---

## 1. 박스 모델 (Box Model)의 4가지 구역

1. **Content (내용)**: 글자나 이미지가 실제 들어가는 영역.
2. **Padding (안쪽 여백)**: 내용과 테두리(Border) 사이의 내부 여백.
3. **Border (테두리)**: 안쪽 여백과 바깥 여백을 가르는 테두리 선.
4. **Margin (바깥 여백)**: 요소와 다른 요소 사이의 외부 간격.

\`\`\`css
/* 박스 크기 계산을 직관적으로 만들어주는 필수 설정 */
* {
  box-sizing: border-box; /* width에 padding과 border를 포함시켜 계산 */
}
\`\`\`

---

## 2. 요소 위치 지정: Position 속성

- **\`static\`**: 기본값 (문서의 일반적인 흐름에 따라 배치).
- **\`relative\`**: 자기 자신의 원래 위치를 기준으로 상대 이동.
- **\`absolute\`**: 가장 가까운 \`position: relative\`인 부모 요소를 기준으로 절대 배치.
- **\`fixed\`**: 브라우저 화면(Viewport) 창을 기준으로 고정 (스크롤해도 안 움직임).
- **\`sticky\`**: 스크롤하다가 특정 위치에 도달하면 상단에 부착 고정.

---

## 3. 모던 레이아웃의 핵심: Flexbox (플렉스박스)

요소들을 가로 또는 세로로 자유롭게 정렬하고 공간을 분배하는 현대 웹 디자인의 핵심 도구입니다.

\`\`\`css
.container {
  display: flex;
  flex-direction: row;            /* 가로 방향 배치 */
  justify-content: space-between; /* 주축 정렬 (좌우 균등 배치) */
  align-items: center;            /* 교차축 정렬 (수직 중앙 정렬) */
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`box-sizing: border-box;\`를 전역에 적용하는 이유는 무엇인가요?**
A. 기본값인 \`content-box\`는 \`width: 200px\`에 \`padding: 20px\`을 주면 전체 너비가 240px로 늘어나서 레이아웃 계산이 매우 까다로워집니다. \`border-box\`를 쓰면 패딩과 테두리를 포함해 딱 200px로 유지해 줍니다.
`
  },
  {
    order_index: 6,
    slug: 'ch06-forms-and-inputs',
    title: '다양한 입력 폼과 HTML5 유효성 검사',
    seo_title: 'HTML5 폼(Form)과 input 태그 총정리 - 유효성 검사 속성 및 폼 요소',
    seo_description: '사용자의 정보를 입력받는 <form> 태그, 다양한 type(text, password, email, date 등)을 가진 <input> 태그 및 required, pattern 자동 유효성 검사 속성을 다룹니다.',
    excerpt: '로그인, 회원가입, 설문조사 등 사용자로부터 데이터를 입력받아 서버로 전송하는 <form> 태그와 HTML5에서 추가된 최신 입력 폼 요소를 학습합니다.',
    content_md: `**폼(Form)**은 웹 사이트 이용자로부터 아이디, 비밀번호, 이메일, 날짜 등의 데이터를 입력받아 서버로 전달하는 입력 인터페이스입니다.

---

## 1. 폼 기본 구조와 <form> 태그 속성

\`\`\`html
<form action="/api/login" method="POST">
  <label for="user-id">아이디:</label>
  <input type="text" id="user-id" name="username" required placeholder="아이디 입력">

  <button type="submit">로그인</button>
</form>
\`\`\`

- **\`action\`**: 입력받은 데이터가 전송될 서버의 URL 주소.
- **\`method\`**: 전송 방식 (\`GET\` - URL 파라미터로 전송 / \`POST\` - 요청 본문에 숨겨서 안전하게 전송).

---

## 2. 다양한 <input> 태그의 \`type\` 종류

HTML5에서는 모바일 환경에 최적화된 다양한 타입의 입력 필드를 제공합니다.

| type 속성값 | 용도 | 모바일 키보드 형태 변화 |
| :--- | :--- | :--- |
| **\`text\` / \`password\`** | 일반 텍스트 및 암호 마스킹 입력 | 일반 키보드 |
| **\`email\`** | 이메일 주소 입력 | \`@\` 기호가 포함된 키보드 |
| **\`tel\`** | 전화번호 입력 | 숫자 패드 키보드 |
| **\`number\`** | 숫자 입력 (min, max, step 조절) | 숫자 키보드 |
| **\`date\` / \`time\`** | 날짜 및 시간 선택 | 달력/시계 피커 출력 |
| **\`color\`** | 색상 선택기 팝업 표시 | 컬러 피커 출력 |

---

## 3. HTML5 자체 유효성 검사 (Validation) 속성

자바스크립트 코드 없이도 HTML 태그 속성만으로 올바른 값 입력 여부를 자동 검사합니다.

- **\`required\`**: 필수로 입력해야 하는 항목 지정.
- **\`placeholder="..."\`**: 입력 힌트 안내 문구 표시.
- **\`autofocus\`**: 페이지가 열리자마자 해당 입력란으로 커서 이동.
- **\`pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"\`**: 정규표현식에 맞는 형태만 허용.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`<label>\` 태그는 왜 꼭 써야 하나요?**
A. \`<label>\` 태그의 \`for\` 속성과 \`<input>\`의 \`id\`를 연결하면, 글자(라벨)를 클릭해도 입력창에 커서가 닿아 편의성이 향상되고 스크린 리더의 접근성이 크게 올라갑니다.
`
  },
  {
    order_index: 7,
    slug: 'ch07-website-layout-practice',
    title: '실전 웹사이트 레이아웃 제작 실습',
    seo_title: 'HTML5/CSS3 실전 레이아웃 제작 - 시맨틱 구조 설계와 웹사이트 완성',
    seo_description: '배운 HTML5 시맨틱 태그와 CSS3 Flexbox를 종합하여 실제 동작하는 완벽한 반응형 2단/3단 웹사이트 레이아웃을 단계별로 실습 제작합니다.',
    excerpt: '앞서 배운 HTML5 시맨틱 구조와 CSS3 Flexbox 스타일링을 종합하여, 실제 프로덕션 수준의 웹사이트 레이아웃 뼈대를 완성하는 실습을 진행합니다.',
    content_md: `지금까지 배운 HTML5 시맨틱 태그와 CSS3 스타일링 기법을 종합하여 실제 동작하는 웹사이트의 전체 레이아웃 구성을 직접 제작해 봅니다.

---

## 1. 웹사이트 뼈대 구조 설계 (HTML)

\`\`\`html
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
\`\`\`

---

## 2. Flexbox 기반 CSS3 레이아웃 구성

\`\`\`css
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
\`\`\`

---

## 3. 웹사이트 개발 단계 요약

1. **와이어프레임(Wireframe) 구상**: 페이지의 구역 배치 설계.
2. **HTML 시맨틱 태그 골조 완성**: 의미에 맞는 태그 배치.
3. **CSS 초기화 및 레이아웃 정렬**: Flexbox를 활용한 위치 구성.
4. **디테일 디자이닝**: 색상, 폰트, 호버 효과(\`:hover\`) 추가.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 메인 콘텐츠와 사이드바의 비율을 동적으로 설정하려면 어떻게 하나요?**
A. Flexbox의 \`flex: 3;\`과 \`flex: 1;\` 속성을 부여하면 비율이 3:1로 유지되면서 화면 크기에 따라 자동으로 동적 확장 및 축소가 일어납니다.
`
  },
  {
    order_index: 8,
    slug: 'ch08-javascript-fundamentals',
    title: '자바스크립트 프로그래밍 기초',
    seo_title: '자바스크립트(JavaScript) 기초 문법 - 변수(let/const), 자료형, 제어문',
    seo_description: '웹에 동적 기능을 불어넣는 자바스크립트! 변수 선언 let/const, 데이터 타입, 콘솔 출력 console.log, 조건문과 반복문 문법을 기초부터 살펴봅니다.',
    excerpt: '정적인 웹 문서를 사용자와 상호작용하는 동적인 애플리케이션으로 탈바꿈시키는 자바스크립트(JavaScript)의 기본 문법과 변수, 제어문을 공부합니다.',
    content_md: `**자바스크립트(JavaScript)**는 웹 브라우저 안에서 동작하여 사용자의 클릭, 입력 반응 등 동적인 기능을 구현하는 프로그래밍 언어입니다.

---

## 1. 자바스크립트 변수 선언: \`let\` 과 \`const\`

과거에는 \`var\`를 사용했으나, 현대 자바스크립트(ES6+)에서는 범위 오류를 막기 위해 \`let\`과 \`const\`를 사용합니다.

- **\`const\`**: 값이 바뀌지 않는 **상수** 선언 (**기본적으로 먼저 사용 권장**).
- **\`let\`**: 재할당이 필요한 **변수** 선언.

\`\`\`javascript
const siteName = "DAVHAVE"; // 재할당 불가능
let visitorCount = 100;     // 재할당 가능
visitorCount = 101;
\`\`\`

---

## 2. 자바스크립트 주요 자료형 (Data Types)

- **원시 타입 (Primitive)**: \`Number\` (숫자), \`String\` (문자열), \`Boolean\` (\`true\`/\`false\`), \`null\`, \`undefined\`, \`Symbol\`
- **객체 타입 (Object)**: 배열(\`Array\`), 객체(\`Object\`), 함수(\`Function\`)

---

## 3. 동등 비교 연산자 주의점: \`==\` vs \`===\`

- **\`==\` (Loose Equality)**: 암묵적 형 변환 후 비교 (\`5 == "5"\` 는 **참**).
- **\`===\` (Strict Equality)**: **자료형과 값이 모두 엄격히 같은지 비교** (\`5 === "5"\` 는 **거짓** - **항상 권장!**).

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`null\`과 \`undefined\`의 차이점은 무엇인가요?**
A. \`undefined\`는 변수를 선언했으나 아직 아무 값도 할당하지 않은 상태이고, \`null\`은 개발자가 의도적으로 "이 변수는 비어있다"고 명시한 값입니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-javascript-functions-and-objects',
    title: '자바스크립트 함수와 내장 객체',
    seo_title: '자바스크립트 함수와 내장 객체 - 화살표 함수, Array, Date, Math 객체',
    seo_description: '함수 선언문, 화살표 함수(=>) 문법, 자바스크립트 객체 리터럴, 배열 조작 메서드(push, filter, map) 및 내장 객체의 활용법을 다룹니다.',
    excerpt: '자바스크립트 함수 작성법(화살표 함수)과 객체(Object), 그리고 자주 사용하는 배열 메서드(push, pop, map, filter) 및 내장 객체를 학습합니다.',
    content_md: `자바스크립트는 객체 기반의 언어이며, 함수 또한 일급 객체(First-class Object)로 다루어지는 유연한 특성을 가집니다.

---

## 1. 화살표 함수 (Arrow Function)

ES6에서 도입된 더 간결하고 현대적인 함수 작성 문법입니다.

\`\`\`javascript
// 기존 함수 선언문
function multiply(a, b) {
  return a * b;
}

// 화살표 함수
const multiplyArrow = (a, b) => a * b;
\`\`\`

---

## 2. 자바스크립트 객체 (Object)와 배열 (Array)

\`\`\`javascript
// 객체 (Key - Value 쌍)
const user = {
  name: "이인상",
  role: "Developer",
  greet() {
    console.log("안녕하세요, " + this.name + "입니다.");
  }
};

// 배열과 유용한 고차 함수
const scores = [80, 95, 100, 60];
const passedScores = scores.filter(s => s >= 80); // [80, 95, 100]
\`\`\`

---

## 3. 대표적인 자바스크립트 내장 객체

- **\`Math\`**: \`Math.random()\`, \`Math.floor()\`, \`Math.max()\` 등 수학 연산.
- **\`Date\`**: 현재 시간 및 날짜 조작 (\`new Date()\`).
- **\`JSON\`**: 객체와 문자열 간 데이터 변환 (\`JSON.stringify()\`, \`JSON.parse()\`).

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 배열 메서드 중 \`map()\`과 \`forEach()\`의 차이는 무엇인가요?**
A. \`forEach()\`는 단순히 각 요소를 순회하며 실행만 하고 반환값이 없지만, \`map()\`은 각 요소를 가공한 **새로운 배열을 생성하여 반환**합니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-dom-and-html-document',
    title: 'HTML 문서와 DOM(Document Object Model)',
    seo_title: '자바스크립트 DOM 조작 - querySelector, getElementById, 요소 변경',
    seo_description: 'HTML 문서를 자바스크립트가 조작할 수 있는 트리고 만들 구조 DOM(Document Object Model)의 개념과 document.querySelector를 이용한 요소 탐색을 다룹니다.',
    excerpt: '웹 브라우저가 HTML 문서를 읽어 메모리에 구축하는 객체 트리인 DOM(Document Object Model)의 개념과 자바스크립트로 요소를 탐색하는 방법을 배웁니다.',
    content_md: `**DOM(Document Object Model, 문서 객체 모델)**은 웹 브라우저가 HTML 문서를 파싱하여, 자바스크립트가 접근하고 조작할 수 있도록 만든 **객체의 트리 구조**입니다.

---

## 1. DOM 트리 구조

브라우저는 HTML 태그들을 **노드(Node)**라는 객체로 변환하여 상하 부모-자식 계층 구조를 만듭니다.

- **\`document\`**: DOM 트리의 최상위 루트 객체.
- **\`element node\`**: \`<h1>\`, \`<p>\`, \`<div>\` 등의 HTML 태그 요소.
- **\`text node\`**: 태그 안에 적힌 글자 데이터.

---

## 2. DOM 요소 탐색하기 (Selection)

현대 자바스크립트에서는 CSS 선택자 스타일을 그대로 사용하는 \`querySelector\` 방식을 주로 사용합니다.

\`\`\`javascript
// 아이디로 탐색
const title = document.querySelector('#main-title');

// 클래스로 첫 번째 요소 탐색
const button = document.querySelector('.btn-submit');

// 해당되는 모든 요소를 NodeList 배열 형태로 선택
const items = document.querySelectorAll('.menu-item');
\`\`\`

---

## 3. DOM 요소 내용 및 스타일 변경

\`\`\`javascript
const heading = document.querySelector('h1');

// 텍스트 내용 변경
heading.textContent = "반갑습니다!";

// CSS 스타일 직접 변경
heading.style.color = "#ff6b35";

// HTML 클래스 추가/제거
heading.classList.add('active');
heading.classList.remove('hidden');
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`innerHTML\` 과 \`textContent\` 의 차이와 보안상 주의점은?**
A. \`textContent\`는 순수 글자만 안전하게 변경하지만, \`innerHTML\`은 HTML 태그를 직접 파싱해 삽입합니다. 사용자가 입력한 데이터를 \`innerHTML\`로 그냥 넣으면 악성 스크립트가 실행되는 **XSS(크로스 사이트 스크립팅)** 공격 위험이 생깁니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-events-and-dynamic-web',
    title: '이벤트 처리와 동적 웹 문서',
    seo_title: '자바스크립트 이벤트 처리 - addEventListener, 클릭/키보드 이벤트',
    seo_description: '클릭, 마우스 이동, 키보드 입력 등 사용자 동작을 감지하는 addEventListener 사용법, 이벤트 객체(e.target, e.preventDefault)를 익힙니다.',
    excerpt: '사용자의 버튼 클릭, 키보드 입력, 마우스 이동 등의 동작에 반응하여 웹 페이지를 동적으로 변경하는 이벤트 처리(Event Handling)를 학습합니다.',
    content_md: `웹 페이지에서 일어나는 사용자의 모든 클릭, 스크롤, 키보드 누름 등의 상호작용 동작을 **이벤트(Event)**라고 부릅니다.

---

## 1. 이벤트 리스너: \`addEventListener()\`

웹 요소에 이벤트를 등록하는 표준 방법입니다.

\`\`\`javascript
const button = document.querySelector('#my-btn');

button.addEventListener('click', (event) => {
  console.log("버튼이 클릭되었습니다!");
  console.log("클릭된 요소:", event.target);
});
\`\`\`

---

## 2. 자주 쓰이는 주요 이벤트 종류

- **마우스 이벤트**: \`click\`, \`dblclick\`, \`mouseenter\`, \`mouseleave\`
- **키보드 이벤트**: \`keydown\`, \`keyup\`
- **폼 이벤트**: \`submit\` (폼 제출), \`change\` (값 변경), \`focus\` / \`blur\`
- **문서/브라우저 이벤트**: \`DOMContentLoaded\` (DOM 완성 시), \`resize\` (창 크기 변경)

---

## 3. 이벤트 기본 동작 방지: \`e.preventDefault()\`

태그가 가지는 기본 동작(예: \`<a>\` 태그의 페이지 이동, \`<form>\` 태그의 전송 후 새로고침)을 막고 자바스크립트로 직접 제어할 때 사용합니다.

\`\`\`javascript
const form = document.querySelector('#login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // 폼 제출 시 화면 전체 새로고침 방지
  console.log("자바스크립트 AJAX로 로그인 요청 전송");
});
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. HTML 태그에 \`onclick="..."\` 속성을 직접 쓰는 방식과 \`addEventListener\`의 차이는?**
A. \`onclick\` 속성은 하나의 이벤트 핸들러만 등록 가능해 덮어씌워지지만, \`addEventListener\`를 쓰면 여러 개의 서로 다른 이벤트를 깔끔하게 등록할 수 있어 모듈화에 유리합니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-html5-apis-geolocation-drag',
    title: 'HTML5 API - 드래그 앤 드롭 및 위치 정보',
    seo_title: 'HTML5 고급 API - Drag and Drop과 Geolocation 위치 정보 활용',
    seo_description: '요소를 끌어다 놓는 드래그 앤 드롭(Drag & Drop) API의 드래그 이벤트와 사용자의 GPS/Wi-Fi 위도·경도 위치 정보를 가져오는 Geolocation API를 다룹니다.',
    excerpt: 'HTML5에서 제공하는 강력한 브라우저 API 중 요소를 끌어다 놓는 드래그 앤 드롭(Drag & Drop)과 사용자의 현재 위치를 파악하는 Geolocation API를 공부합니다.',
    content_md: `HTML5는 웹 브라우저를 단순한 문서 뷰어가 아닌 강력한 애플리케이션 플랫폼으로 만들어주는 다양한 표준 **HTML5 API**를 내장하고 있습니다.

---

## 1. 드래그 앤 드롭 (Drag and Drop) API

HTML 요소를 마우스로 끌어다 다른 구역에 놓는 인터페이스입니다.

\`\`\`html
<!-- draggable="true" 속성 지정 -->
<div id="drag-item" draggable="true">나를 끌어다 놓으세요</div>
<div id="drop-zone">여기에 드롭하세요</div>

<script>
const item = document.querySelector('#drag-item');
const zone = document.querySelector('#drop-zone');

item.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
});

zone.addEventListener('dragover', (e) => e.preventDefault()); // 드롭 허용

zone.addEventListener('drop', (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData('text/plain');
  zone.appendChild(document.getElementById(id));
});
</script>
\`\`\`

---

## 2. 위치 정보 (Geolocation) API

사용자의 동의를 얻어 현재 장치의 위도(Latitude)와 경도(Longitude) 위치 정보를 파악합니다.

\`\`\`javascript
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log("위도: " + lat + ", 경도: " + lng);
    },
    (error) => {
      console.error("위치 정보를 가져올 수 없습니다:", error.message);
    }
  );
}
\`\`\`

---

## 3. HTML5 API 활용 시 보안 주의사항

- **HTTPS 필수 정책**: Geolocation 위치 정보 등 사용자의 개인정보와 연관된 최신 HTML5 API는 보안 연결인 **HTTPS 환경에서만 작동**하도록 제한됩니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Geolocation API는 위치를 어떻게 알아내나요?**
A. 스마트폰 등 GPS 장치가 탑재된 기기는 GPS 신호를 이용하고, PC 환경에서는 주변 Wi-Fi 신호와 IP 주소를 기반으로 대략적인 위치 정보를 측정합니다.
`
  },
  {
    order_index: 13,
    slug: 'ch13-web-storage-media-apis',
    title: '웹 스토리지(Web Storage)와 미디어 제어 API',
    seo_title: 'HTML5 Web Storage(LocalStorage vs SessionStorage) 및 미디어 제어 API',
    seo_description: '브라우저에 영구히 데이터를 보관하는 LocalStorage, 탭 닫으면 사라지는 SessionStorage, 그리고 커스텀 비디오/오디오 플레이어 제작 미디어 API를 배웁니다.',
    excerpt: '쿠키(Cookie)의 한계를 극복하고 브라우저에 클라이언트 데이터를 저장하는 웹 스토리지(LocalStorage/SessionStorage)와 오디오/비디오 미디어 제어 API를 다룹니다.',
    content_md: `**웹 스토리지(Web Storage)**는 과거 용량이 작고(4KB) 매 요청마다 서버로 전송되던 쿠키(Cookie)의 단점을 극복하고, 클라이언트 브라우저에 약 5MB 이상의 데이터를 저장하게 돕는 기능입니다.

---

## 1. LocalStorage vs SessionStorage

- **\`localStorage\`**: 브라우저를 닫거나 컴퓨터를 재부팅해도 데이터가 **영구히 보관**됨 (사용자가 직접 삭제 전까지 유지).
- **\`sessionStorage\`**: 해당 브라우저 **탭(Tab)이 열려있는 동안에만 데이터가 유지**되며 탭을 닫으면 자동 삭제.

\`\`\`javascript
// 1. LocalStorage 데이터 저장 (Key-Value)
localStorage.setItem('theme', 'dark');

// 2. LocalStorage 데이터 읽기
const currentTheme = localStorage.getItem('theme'); // 'dark'

// 3. LocalStorage 데이터 삭제
localStorage.removeItem('theme');
\`\`\`

---

## 2. 객체/배열 저장 시 \`JSON\` 변환 필수

웹 스토리지는 오직 문자열(String)만 저장할 수 있으므로, 자바스크립트 객체나 배열을 저장할 때는 \`JSON.stringify()\`를 사용해야 합니다.

\`\`\`javascript
const userSettings = { volume: 80, autoplay: true };

// 저장할 때: 객체 -> JSON 문자열 변환
localStorage.setItem('settings', JSON.stringify(userSettings));

// 가져올 때: JSON 문자열 -> 객체 파싱
const saved = JSON.parse(localStorage.getItem('settings'));
console.log(saved.volume); // 80
\`\`\`

---

## 3. 비디오/오디오 미디어 API 제어

자바스크립트로 HTML5 \`<video>\` 태그의 재생, 일시정지, 음량을 직접 제어할 수 있습니다.

\`\`\`javascript
const video = document.querySelector('video');

// 자바스크립트로 비디오 제어
video.play();     // 재생
video.pause();    // 일시정지
video.volume = 0.5; // 음량 50%
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 웹 스토리지에 사용자 비밀번호나 결제 정보를 저장해도 되나요?**
A. 절대로 안 됩니다! 웹 스토리지는 자바스크립트 코드에서 누구나 쉽게 접근해 읽을 수 있으므로, 민감한 개인정보나 보안 토큰을 저장해서는 안 되며, 테마 설정, 장바구니 임시 목록 데이터 등에 사용해야 합니다.
`
  },
  {
    order_index: 14,
    slug: 'ch14-responsive-mobile-web',
    title: '반응형 웹 디자인과 모바일 웹 제작 실습',
    seo_title: '반응형 웹 디자인(RWD) 가이드 - 뷰포트 meta 태그, 미디어 쿼리 @media',
    seo_description: '데스크톱, 태블릿, 스마트폰 등 기기 화면 크기에 따라 알아서 레이아웃이 조절되는 반응형 웹의 핵심! 뷰포트 메타 태그와 미디어 쿼리(@media) 사용법을 다룹니다.',
    excerpt: 'PC, 태블릿, 모바일 스마트폰 등 다양한 디바이스 화면 크기에 유연하게 대응하는 반응형 웹 디자인(Responsive Web Design)의 핵심 기법을 완성합니다.',
    content_md: `**반응형 웹 디자인(Responsive Web Design, RWD)**이란 접속하는 기기(PC, 태블릿, 스마트폰)의 화면 크기에 맞춰 웹 레이아웃이 유연하게 반응하여 최적의 화면을 보여주는 설계 방식입니다.

---

## 1. 반응형 웹의 1단계 필수 설정: 뷰포트 (Viewport)

모바일 브라우저가 화면을 임의로 축소해 보여주지 않도록 \`<head>\` 안에 **뷰포트 메타 태그**를 반드시 작성해야 합니다.

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

- **\`width=device-width\`**: 페이지 너비를 기기의 실제 화면 너비와 동일하게 맞춤.
- **\`initial-scale=1.0\`**: 처음 로딩 시 확대/축소 없이 100% 배율로 설정.

---

## 2. 미디어 쿼리 (Media Query, \`@media\`)

화면 너비(Width) 조건에 따라 서로 다른 CSS 스타일 규칙을 적용합니다.

\`\`\`css
/* 기본 PC 스타일 */
.container {
  display: flex;
  flex-direction: row;
}

/* 태블릿 & 모바일 화면 (너비 768px 이하일 때 적용) */
@media (max-width: 768px) {
  .container {
    flex-direction: column; /* 세로 배치로 전환 */
  }
  
  .main-nav {
    display: none; /* 모바일에서는 내비게이션 일단 숨김 */
  }
}
\`\`\`

---

## 3. 모바일 퍼스트(Mobile-First) 전략

작은 모바일 화면 스타일을 기본으로 먼저 작성하고, 미디어 쿼리 \`@media (min-width: 768px)\` 형태로 화면이 커질수록 레이아웃을 확장해 나가는 최신 웹 디자인 접근법입니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 반응형 웹에서 이미지 크기가 화면 밖으로 넘치지 않게 하려면?**
A. CSS에 \`img { max-width: 100%; height: auto; }\` 구문을 추가해 두면 이미지가 부모 요소의 너비보다 커지지 않고 비율을 유지하며 자동으로 축소됩니다.
`
  }
];

// Split into 2 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 7),
  lessons.slice(7, 14)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Seed HTML5-Web Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const content_html = marked.parse(lesson.content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'html5-web',
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

  fs.writeFileSync(`scratch/seed_html5_web_part${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 2 SQL chunk files for HTML5-Web!');
