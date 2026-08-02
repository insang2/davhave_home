-- Seed HTML5-Web Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'html5-web',
  'ch08-javascript-fundamentals',
  '자바스크립트 프로그래밍 기초',
  '정적인 웹 문서를 사용자와 상호작용하는 동적인 애플리케이션으로 탈바꿈시키는 자바스크립트(JavaScript)의 기본 문법과 변수, 제어문을 공부합니다.',
  '**자바스크립트(JavaScript)**는 웹 브라우저 안에서 동작하여 사용자의 클릭, 입력 반응 등 동적인 기능을 구현하는 프로그래밍 언어입니다.

---

## 1. 자바스크립트 변수 선언: `let` 과 `const`

과거에는 `var`를 사용했으나, 현대 자바스크립트(ES6+)에서는 범위 오류를 막기 위해 `let`과 `const`를 사용합니다.

- **`const`**: 값이 바뀌지 않는 **상수** 선언 (**기본적으로 먼저 사용 권장**).
- **`let`**: 재할당이 필요한 **변수** 선언.

```javascript
const siteName = "DAVHAVE"; // 재할당 불가능
let visitorCount = 100;     // 재할당 가능
visitorCount = 101;
```

---

## 2. 자바스크립트 주요 자료형 (Data Types)

- **원시 타입 (Primitive)**: `Number` (숫자), `String` (문자열), `Boolean` (`true`/`false`), `null`, `undefined`, `Symbol`
- **객체 타입 (Object)**: 배열(`Array`), 객체(`Object`), 함수(`Function`)

---

## 3. 동등 비교 연산자 주의점: `==` vs `===`

- **`==` (Loose Equality)**: 암묵적 형 변환 후 비교 (`5 == "5"` 는 **참**).
- **`===` (Strict Equality)**: **자료형과 값이 모두 엄격히 같은지 비교** (`5 === "5"` 는 **거짓** - **항상 권장!**).

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `null`과 `undefined`의 차이점은 무엇인가요?**
A. `undefined`는 변수를 선언했으나 아직 아무 값도 할당하지 않은 상태이고, `null`은 개발자가 의도적으로 "이 변수는 비어있다"고 명시한 값입니다.
',
  '<p>**자바스크립트(JavaScript)**는 웹 브라우저 안에서 동작하여 사용자의 클릭, 입력 반응 등 동적인 기능을 구현하는 프로그래밍 언어입니다.</p>
<hr>
<h2>1. 자바스크립트 변수 선언: <code>let</code> 과 <code>const</code></h2>
<p>과거에는 <code>var</code>를 사용했으나, 현대 자바스크립트(ES6+)에서는 범위 오류를 막기 위해 <code>let</code>과 <code>const</code>를 사용합니다.</p>
<ul>
<li><strong><code>const</code></strong>: 값이 바뀌지 않는 <strong>상수</strong> 선언 (<strong>기본적으로 먼저 사용 권장</strong>).</li>
<li><strong><code>let</code></strong>: 재할당이 필요한 <strong>변수</strong> 선언.</li>
</ul>
<pre><code class="language-javascript">const siteName = &quot;DAVHAVE&quot;; // 재할당 불가능
let visitorCount = 100;     // 재할당 가능
visitorCount = 101;
</code></pre>
<hr>
<h2>2. 자바스크립트 주요 자료형 (Data Types)</h2>
<ul>
<li><strong>원시 타입 (Primitive)</strong>: <code>Number</code> (숫자), <code>String</code> (문자열), <code>Boolean</code> (<code>true</code>/<code>false</code>), <code>null</code>, <code>undefined</code>, <code>Symbol</code></li>
<li><strong>객체 타입 (Object)</strong>: 배열(<code>Array</code>), 객체(<code>Object</code>), 함수(<code>Function</code>)</li>
</ul>
<hr>
<h2>3. 동등 비교 연산자 주의점: <code>==</code> vs <code>===</code></h2>
<ul>
<li><strong><code>==</code> (Loose Equality)</strong>: 암묵적 형 변환 후 비교 (<code>5 == &quot;5&quot;</code> 는 <strong>참</strong>).</li>
<li><strong><code>===</code> (Strict Equality)</strong>: <strong>자료형과 값이 모두 엄격히 같은지 비교</strong> (<code>5 === &quot;5&quot;</code> 는 <strong>거짓</strong> - <strong>항상 권장!</strong>).</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>null</code>과 <code>undefined</code>의 차이점은 무엇인가요?</strong>
A. <code>undefined</code>는 변수를 선언했으나 아직 아무 값도 할당하지 않은 상태이고, <code>null</code>은 개발자가 의도적으로 &quot;이 변수는 비어있다&quot;고 명시한 값입니다.</p>
',
  'published',
  '자바스크립트(JavaScript) 기초 문법 - 변수(let/const), 자료형, 제어문',
  '웹에 동적 기능을 불어넣는 자바스크립트! 변수 선언 let/const, 데이터 타입, 콘솔 출력 console.log, 조건문과 반복문 문법을 기초부터 살펴봅니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'html5-web',
  'ch09-javascript-functions-and-objects',
  '자바스크립트 함수와 내장 객체',
  '자바스크립트 함수 작성법(화살표 함수)과 객체(Object), 그리고 자주 사용하는 배열 메서드(push, pop, map, filter) 및 내장 객체를 학습합니다.',
  '자바스크립트는 객체 기반의 언어이며, 함수 또한 일급 객체(First-class Object)로 다루어지는 유연한 특성을 가집니다.

---

## 1. 화살표 함수 (Arrow Function)

ES6에서 도입된 더 간결하고 현대적인 함수 작성 문법입니다.

```javascript
// 기존 함수 선언문
function multiply(a, b) {
  return a * b;
}

// 화살표 함수
const multiplyArrow = (a, b) => a * b;
```

---

## 2. 자바스크립트 객체 (Object)와 배열 (Array)

```javascript
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
```

---

## 3. 대표적인 자바스크립트 내장 객체

- **`Math`**: `Math.random()`, `Math.floor()`, `Math.max()` 등 수학 연산.
- **`Date`**: 현재 시간 및 날짜 조작 (`new Date()`).
- **`JSON`**: 객체와 문자열 간 데이터 변환 (`JSON.stringify()`, `JSON.parse()`).

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 배열 메서드 중 `map()`과 `forEach()`의 차이는 무엇인가요?**
A. `forEach()`는 단순히 각 요소를 순회하며 실행만 하고 반환값이 없지만, `map()`은 각 요소를 가공한 **새로운 배열을 생성하여 반환**합니다.
',
  '<p>자바스크립트는 객체 기반의 언어이며, 함수 또한 일급 객체(First-class Object)로 다루어지는 유연한 특성을 가집니다.</p>
<hr>
<h2>1. 화살표 함수 (Arrow Function)</h2>
<p>ES6에서 도입된 더 간결하고 현대적인 함수 작성 문법입니다.</p>
<pre><code class="language-javascript">// 기존 함수 선언문
function multiply(a, b) {
  return a * b;
}

// 화살표 함수
const multiplyArrow = (a, b) =&gt; a * b;
</code></pre>
<hr>
<h2>2. 자바스크립트 객체 (Object)와 배열 (Array)</h2>
<pre><code class="language-javascript">// 객체 (Key - Value 쌍)
const user = {
  name: &quot;이인상&quot;,
  role: &quot;Developer&quot;,
  greet() {
    console.log(&quot;안녕하세요, &quot; + this.name + &quot;입니다.&quot;);
  }
};

// 배열과 유용한 고차 함수
const scores = [80, 95, 100, 60];
const passedScores = scores.filter(s =&gt; s &gt;= 80); // [80, 95, 100]
</code></pre>
<hr>
<h2>3. 대표적인 자바스크립트 내장 객체</h2>
<ul>
<li><strong><code>Math</code></strong>: <code>Math.random()</code>, <code>Math.floor()</code>, <code>Math.max()</code> 등 수학 연산.</li>
<li><strong><code>Date</code></strong>: 현재 시간 및 날짜 조작 (<code>new Date()</code>).</li>
<li><strong><code>JSON</code></strong>: 객체와 문자열 간 데이터 변환 (<code>JSON.stringify()</code>, <code>JSON.parse()</code>).</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 배열 메서드 중 <code>map()</code>과 <code>forEach()</code>의 차이는 무엇인가요?</strong>
A. <code>forEach()</code>는 단순히 각 요소를 순회하며 실행만 하고 반환값이 없지만, <code>map()</code>은 각 요소를 가공한 <strong>새로운 배열을 생성하여 반환</strong>합니다.</p>
',
  'published',
  '자바스크립트 함수와 내장 객체 - 화살표 함수, Array, Date, Math 객체',
  '함수 선언문, 화살표 함수(=>) 문법, 자바스크립트 객체 리터럴, 배열 조작 메서드(push, filter, map) 및 내장 객체의 활용법을 다룹니다.',
  9,
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
  'ch10-dom-and-html-document',
  'HTML 문서와 DOM(Document Object Model)',
  '웹 브라우저가 HTML 문서를 읽어 메모리에 구축하는 객체 트리인 DOM(Document Object Model)의 개념과 자바스크립트로 요소를 탐색하는 방법을 배웁니다.',
  '**DOM(Document Object Model, 문서 객체 모델)**은 웹 브라우저가 HTML 문서를 파싱하여, 자바스크립트가 접근하고 조작할 수 있도록 만든 **객체의 트리 구조**입니다.

---

## 1. DOM 트리 구조

브라우저는 HTML 태그들을 **노드(Node)**라는 객체로 변환하여 상하 부모-자식 계층 구조를 만듭니다.

- **`document`**: DOM 트리의 최상위 루트 객체.
- **`element node`**: `<h1>`, `<p>`, `<div>` 등의 HTML 태그 요소.
- **`text node`**: 태그 안에 적힌 글자 데이터.

---

## 2. DOM 요소 탐색하기 (Selection)

현대 자바스크립트에서는 CSS 선택자 스타일을 그대로 사용하는 `querySelector` 방식을 주로 사용합니다.

```javascript
// 아이디로 탐색
const title = document.querySelector(''#main-title'');

// 클래스로 첫 번째 요소 탐색
const button = document.querySelector(''.btn-submit'');

// 해당되는 모든 요소를 NodeList 배열 형태로 선택
const items = document.querySelectorAll(''.menu-item'');
```

---

## 3. DOM 요소 내용 및 스타일 변경

```javascript
const heading = document.querySelector(''h1'');

// 텍스트 내용 변경
heading.textContent = "반갑습니다!";

// CSS 스타일 직접 변경
heading.style.color = "#ff6b35";

// HTML 클래스 추가/제거
heading.classList.add(''active'');
heading.classList.remove(''hidden'');
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `innerHTML` 과 `textContent` 의 차이와 보안상 주의점은?**
A. `textContent`는 순수 글자만 안전하게 변경하지만, `innerHTML`은 HTML 태그를 직접 파싱해 삽입합니다. 사용자가 입력한 데이터를 `innerHTML`로 그냥 넣으면 악성 스크립트가 실행되는 **XSS(크로스 사이트 스크립팅)** 공격 위험이 생깁니다.
',
  '<p>**DOM(Document Object Model, 문서 객체 모델)**은 웹 브라우저가 HTML 문서를 파싱하여, 자바스크립트가 접근하고 조작할 수 있도록 만든 <strong>객체의 트리 구조</strong>입니다.</p>
<hr>
<h2>1. DOM 트리 구조</h2>
<p>브라우저는 HTML 태그들을 **노드(Node)**라는 객체로 변환하여 상하 부모-자식 계층 구조를 만듭니다.</p>
<ul>
<li><strong><code>document</code></strong>: DOM 트리의 최상위 루트 객체.</li>
<li><strong><code>element node</code></strong>: <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code> 등의 HTML 태그 요소.</li>
<li><strong><code>text node</code></strong>: 태그 안에 적힌 글자 데이터.</li>
</ul>
<hr>
<h2>2. DOM 요소 탐색하기 (Selection)</h2>
<p>현대 자바스크립트에서는 CSS 선택자 스타일을 그대로 사용하는 <code>querySelector</code> 방식을 주로 사용합니다.</p>
<pre><code class="language-javascript">// 아이디로 탐색
const title = document.querySelector(&#39;#main-title&#39;);

// 클래스로 첫 번째 요소 탐색
const button = document.querySelector(&#39;.btn-submit&#39;);

// 해당되는 모든 요소를 NodeList 배열 형태로 선택
const items = document.querySelectorAll(&#39;.menu-item&#39;);
</code></pre>
<hr>
<h2>3. DOM 요소 내용 및 스타일 변경</h2>
<pre><code class="language-javascript">const heading = document.querySelector(&#39;h1&#39;);

// 텍스트 내용 변경
heading.textContent = &quot;반갑습니다!&quot;;

// CSS 스타일 직접 변경
heading.style.color = &quot;#ff6b35&quot;;

// HTML 클래스 추가/제거
heading.classList.add(&#39;active&#39;);
heading.classList.remove(&#39;hidden&#39;);
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>innerHTML</code> 과 <code>textContent</code> 의 차이와 보안상 주의점은?</strong>
A. <code>textContent</code>는 순수 글자만 안전하게 변경하지만, <code>innerHTML</code>은 HTML 태그를 직접 파싱해 삽입합니다. 사용자가 입력한 데이터를 <code>innerHTML</code>로 그냥 넣으면 악성 스크립트가 실행되는 <strong>XSS(크로스 사이트 스크립팅)</strong> 공격 위험이 생깁니다.</p>
',
  'published',
  '자바스크립트 DOM 조작 - querySelector, getElementById, 요소 변경',
  'HTML 문서를 자바스크립트가 조작할 수 있는 트리고 만들 구조 DOM(Document Object Model)의 개념과 document.querySelector를 이용한 요소 탐색을 다룹니다.',
  10,
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
  'ch11-events-and-dynamic-web',
  '이벤트 처리와 동적 웹 문서',
  '사용자의 버튼 클릭, 키보드 입력, 마우스 이동 등의 동작에 반응하여 웹 페이지를 동적으로 변경하는 이벤트 처리(Event Handling)를 학습합니다.',
  '웹 페이지에서 일어나는 사용자의 모든 클릭, 스크롤, 키보드 누름 등의 상호작용 동작을 **이벤트(Event)**라고 부릅니다.

---

## 1. 이벤트 리스너: `addEventListener()`

웹 요소에 이벤트를 등록하는 표준 방법입니다.

```javascript
const button = document.querySelector(''#my-btn'');

button.addEventListener(''click'', (event) => {
  console.log("버튼이 클릭되었습니다!");
  console.log("클릭된 요소:", event.target);
});
```

---

## 2. 자주 쓰이는 주요 이벤트 종류

- **마우스 이벤트**: `click`, `dblclick`, `mouseenter`, `mouseleave`
- **키보드 이벤트**: `keydown`, `keyup`
- **폼 이벤트**: `submit` (폼 제출), `change` (값 변경), `focus` / `blur`
- **문서/브라우저 이벤트**: `DOMContentLoaded` (DOM 완성 시), `resize` (창 크기 변경)

---

## 3. 이벤트 기본 동작 방지: `e.preventDefault()`

태그가 가지는 기본 동작(예: `<a>` 태그의 페이지 이동, `<form>` 태그의 전송 후 새로고침)을 막고 자바스크립트로 직접 제어할 때 사용합니다.

```javascript
const form = document.querySelector(''#login-form'');

form.addEventListener(''submit'', (e) => {
  e.preventDefault(); // 폼 제출 시 화면 전체 새로고침 방지
  console.log("자바스크립트 AJAX로 로그인 요청 전송");
});
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. HTML 태그에 `onclick="..."` 속성을 직접 쓰는 방식과 `addEventListener`의 차이는?**
A. `onclick` 속성은 하나의 이벤트 핸들러만 등록 가능해 덮어씌워지지만, `addEventListener`를 쓰면 여러 개의 서로 다른 이벤트를 깔끔하게 등록할 수 있어 모듈화에 유리합니다.
',
  '<p>웹 페이지에서 일어나는 사용자의 모든 클릭, 스크롤, 키보드 누름 등의 상호작용 동작을 **이벤트(Event)**라고 부릅니다.</p>
<hr>
<h2>1. 이벤트 리스너: <code>addEventListener()</code></h2>
<p>웹 요소에 이벤트를 등록하는 표준 방법입니다.</p>
<pre><code class="language-javascript">const button = document.querySelector(&#39;#my-btn&#39;);

button.addEventListener(&#39;click&#39;, (event) =&gt; {
  console.log(&quot;버튼이 클릭되었습니다!&quot;);
  console.log(&quot;클릭된 요소:&quot;, event.target);
});
</code></pre>
<hr>
<h2>2. 자주 쓰이는 주요 이벤트 종류</h2>
<ul>
<li><strong>마우스 이벤트</strong>: <code>click</code>, <code>dblclick</code>, <code>mouseenter</code>, <code>mouseleave</code></li>
<li><strong>키보드 이벤트</strong>: <code>keydown</code>, <code>keyup</code></li>
<li><strong>폼 이벤트</strong>: <code>submit</code> (폼 제출), <code>change</code> (값 변경), <code>focus</code> / <code>blur</code></li>
<li><strong>문서/브라우저 이벤트</strong>: <code>DOMContentLoaded</code> (DOM 완성 시), <code>resize</code> (창 크기 변경)</li>
</ul>
<hr>
<h2>3. 이벤트 기본 동작 방지: <code>e.preventDefault()</code></h2>
<p>태그가 가지는 기본 동작(예: <code>&lt;a&gt;</code> 태그의 페이지 이동, <code>&lt;form&gt;</code> 태그의 전송 후 새로고침)을 막고 자바스크립트로 직접 제어할 때 사용합니다.</p>
<pre><code class="language-javascript">const form = document.querySelector(&#39;#login-form&#39;);

form.addEventListener(&#39;submit&#39;, (e) =&gt; {
  e.preventDefault(); // 폼 제출 시 화면 전체 새로고침 방지
  console.log(&quot;자바스크립트 AJAX로 로그인 요청 전송&quot;);
});
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. HTML 태그에 <code>onclick=&quot;...&quot;</code> 속성을 직접 쓰는 방식과 <code>addEventListener</code>의 차이는?</strong>
A. <code>onclick</code> 속성은 하나의 이벤트 핸들러만 등록 가능해 덮어씌워지지만, <code>addEventListener</code>를 쓰면 여러 개의 서로 다른 이벤트를 깔끔하게 등록할 수 있어 모듈화에 유리합니다.</p>
',
  'published',
  '자바스크립트 이벤트 처리 - addEventListener, 클릭/키보드 이벤트',
  '클릭, 마우스 이동, 키보드 입력 등 사용자 동작을 감지하는 addEventListener 사용법, 이벤트 객체(e.target, e.preventDefault)를 익힙니다.',
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
  'html5-web',
  'ch12-html5-apis-geolocation-drag',
  'HTML5 API - 드래그 앤 드롭 및 위치 정보',
  'HTML5에서 제공하는 강력한 브라우저 API 중 요소를 끌어다 놓는 드래그 앤 드롭(Drag & Drop)과 사용자의 현재 위치를 파악하는 Geolocation API를 공부합니다.',
  'HTML5는 웹 브라우저를 단순한 문서 뷰어가 아닌 강력한 애플리케이션 플랫폼으로 만들어주는 다양한 표준 **HTML5 API**를 내장하고 있습니다.

---

## 1. 드래그 앤 드롭 (Drag and Drop) API

HTML 요소를 마우스로 끌어다 다른 구역에 놓는 인터페이스입니다.

```html
<!-- draggable="true" 속성 지정 -->
<div id="drag-item" draggable="true">나를 끌어다 놓으세요</div>
<div id="drop-zone">여기에 드롭하세요</div>

<script>
const item = document.querySelector(''#drag-item'');
const zone = document.querySelector(''#drop-zone'');

item.addEventListener(''dragstart'', (e) => {
  e.dataTransfer.setData(''text/plain'', e.target.id);
});

zone.addEventListener(''dragover'', (e) => e.preventDefault()); // 드롭 허용

zone.addEventListener(''drop'', (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData(''text/plain'');
  zone.appendChild(document.getElementById(id));
});
</script>
```

---

## 2. 위치 정보 (Geolocation) API

사용자의 동의를 얻어 현재 장치의 위도(Latitude)와 경도(Longitude) 위치 정보를 파악합니다.

```javascript
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
```

---

## 3. HTML5 API 활용 시 보안 주의사항

- **HTTPS 필수 정책**: Geolocation 위치 정보 등 사용자의 개인정보와 연관된 최신 HTML5 API는 보안 연결인 **HTTPS 환경에서만 작동**하도록 제한됩니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Geolocation API는 위치를 어떻게 알아내나요?**
A. 스마트폰 등 GPS 장치가 탑재된 기기는 GPS 신호를 이용하고, PC 환경에서는 주변 Wi-Fi 신호와 IP 주소를 기반으로 대략적인 위치 정보를 측정합니다.
',
  '<p>HTML5는 웹 브라우저를 단순한 문서 뷰어가 아닌 강력한 애플리케이션 플랫폼으로 만들어주는 다양한 표준 <strong>HTML5 API</strong>를 내장하고 있습니다.</p>
<hr>
<h2>1. 드래그 앤 드롭 (Drag and Drop) API</h2>
<p>HTML 요소를 마우스로 끌어다 다른 구역에 놓는 인터페이스입니다.</p>
<pre><code class="language-html">&lt;!-- draggable=&quot;true&quot; 속성 지정 --&gt;
&lt;div id=&quot;drag-item&quot; draggable=&quot;true&quot;&gt;나를 끌어다 놓으세요&lt;/div&gt;
&lt;div id=&quot;drop-zone&quot;&gt;여기에 드롭하세요&lt;/div&gt;

&lt;script&gt;
const item = document.querySelector(&#39;#drag-item&#39;);
const zone = document.querySelector(&#39;#drop-zone&#39;);

item.addEventListener(&#39;dragstart&#39;, (e) =&gt; {
  e.dataTransfer.setData(&#39;text/plain&#39;, e.target.id);
});

zone.addEventListener(&#39;dragover&#39;, (e) =&gt; e.preventDefault()); // 드롭 허용

zone.addEventListener(&#39;drop&#39;, (e) =&gt; {
  e.preventDefault();
  const id = e.dataTransfer.getData(&#39;text/plain&#39;);
  zone.appendChild(document.getElementById(id));
});
&lt;/script&gt;
</code></pre>
<hr>
<h2>2. 위치 정보 (Geolocation) API</h2>
<p>사용자의 동의를 얻어 현재 장치의 위도(Latitude)와 경도(Longitude) 위치 정보를 파악합니다.</p>
<pre><code class="language-javascript">if (&quot;geolocation&quot; in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) =&gt; {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(&quot;위도: &quot; + lat + &quot;, 경도: &quot; + lng);
    },
    (error) =&gt; {
      console.error(&quot;위치 정보를 가져올 수 없습니다:&quot;, error.message);
    }
  );
}
</code></pre>
<hr>
<h2>3. HTML5 API 활용 시 보안 주의사항</h2>
<ul>
<li><strong>HTTPS 필수 정책</strong>: Geolocation 위치 정보 등 사용자의 개인정보와 연관된 최신 HTML5 API는 보안 연결인 <strong>HTTPS 환경에서만 작동</strong>하도록 제한됩니다.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Geolocation API는 위치를 어떻게 알아내나요?</strong>
A. 스마트폰 등 GPS 장치가 탑재된 기기는 GPS 신호를 이용하고, PC 환경에서는 주변 Wi-Fi 신호와 IP 주소를 기반으로 대략적인 위치 정보를 측정합니다.</p>
',
  'published',
  'HTML5 고급 API - Drag and Drop과 Geolocation 위치 정보 활용',
  '요소를 끌어다 놓는 드래그 앤 드롭(Drag & Drop) API의 드래그 이벤트와 사용자의 GPS/Wi-Fi 위도·경도 위치 정보를 가져오는 Geolocation API를 다룹니다.',
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
  'html5-web',
  'ch13-web-storage-media-apis',
  '웹 스토리지(Web Storage)와 미디어 제어 API',
  '쿠키(Cookie)의 한계를 극복하고 브라우저에 클라이언트 데이터를 저장하는 웹 스토리지(LocalStorage/SessionStorage)와 오디오/비디오 미디어 제어 API를 다룹니다.',
  '**웹 스토리지(Web Storage)**는 과거 용량이 작고(4KB) 매 요청마다 서버로 전송되던 쿠키(Cookie)의 단점을 극복하고, 클라이언트 브라우저에 약 5MB 이상의 데이터를 저장하게 돕는 기능입니다.

---

## 1. LocalStorage vs SessionStorage

- **`localStorage`**: 브라우저를 닫거나 컴퓨터를 재부팅해도 데이터가 **영구히 보관**됨 (사용자가 직접 삭제 전까지 유지).
- **`sessionStorage`**: 해당 브라우저 **탭(Tab)이 열려있는 동안에만 데이터가 유지**되며 탭을 닫으면 자동 삭제.

```javascript
// 1. LocalStorage 데이터 저장 (Key-Value)
localStorage.setItem(''theme'', ''dark'');

// 2. LocalStorage 데이터 읽기
const currentTheme = localStorage.getItem(''theme''); // ''dark''

// 3. LocalStorage 데이터 삭제
localStorage.removeItem(''theme'');
```

---

## 2. 객체/배열 저장 시 `JSON` 변환 필수

웹 스토리지는 오직 문자열(String)만 저장할 수 있으므로, 자바스크립트 객체나 배열을 저장할 때는 `JSON.stringify()`를 사용해야 합니다.

```javascript
const userSettings = { volume: 80, autoplay: true };

// 저장할 때: 객체 -> JSON 문자열 변환
localStorage.setItem(''settings'', JSON.stringify(userSettings));

// 가져올 때: JSON 문자열 -> 객체 파싱
const saved = JSON.parse(localStorage.getItem(''settings''));
console.log(saved.volume); // 80
```

---

## 3. 비디오/오디오 미디어 API 제어

자바스크립트로 HTML5 `<video>` 태그의 재생, 일시정지, 음량을 직접 제어할 수 있습니다.

```javascript
const video = document.querySelector(''video'');

// 자바스크립트로 비디오 제어
video.play();     // 재생
video.pause();    // 일시정지
video.volume = 0.5; // 음량 50%
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 웹 스토리지에 사용자 비밀번호나 결제 정보를 저장해도 되나요?**
A. 절대로 안 됩니다! 웹 스토리지는 자바스크립트 코드에서 누구나 쉽게 접근해 읽을 수 있으므로, 민감한 개인정보나 보안 토큰을 저장해서는 안 되며, 테마 설정, 장바구니 임시 목록 데이터 등에 사용해야 합니다.
',
  '<p>**웹 스토리지(Web Storage)**는 과거 용량이 작고(4KB) 매 요청마다 서버로 전송되던 쿠키(Cookie)의 단점을 극복하고, 클라이언트 브라우저에 약 5MB 이상의 데이터를 저장하게 돕는 기능입니다.</p>
<hr>
<h2>1. LocalStorage vs SessionStorage</h2>
<ul>
<li><strong><code>localStorage</code></strong>: 브라우저를 닫거나 컴퓨터를 재부팅해도 데이터가 <strong>영구히 보관</strong>됨 (사용자가 직접 삭제 전까지 유지).</li>
<li><strong><code>sessionStorage</code></strong>: 해당 브라우저 <strong>탭(Tab)이 열려있는 동안에만 데이터가 유지</strong>되며 탭을 닫으면 자동 삭제.</li>
</ul>
<pre><code class="language-javascript">// 1. LocalStorage 데이터 저장 (Key-Value)
localStorage.setItem(&#39;theme&#39;, &#39;dark&#39;);

// 2. LocalStorage 데이터 읽기
const currentTheme = localStorage.getItem(&#39;theme&#39;); // &#39;dark&#39;

// 3. LocalStorage 데이터 삭제
localStorage.removeItem(&#39;theme&#39;);
</code></pre>
<hr>
<h2>2. 객체/배열 저장 시 <code>JSON</code> 변환 필수</h2>
<p>웹 스토리지는 오직 문자열(String)만 저장할 수 있으므로, 자바스크립트 객체나 배열을 저장할 때는 <code>JSON.stringify()</code>를 사용해야 합니다.</p>
<pre><code class="language-javascript">const userSettings = { volume: 80, autoplay: true };

// 저장할 때: 객체 -&gt; JSON 문자열 변환
localStorage.setItem(&#39;settings&#39;, JSON.stringify(userSettings));

// 가져올 때: JSON 문자열 -&gt; 객체 파싱
const saved = JSON.parse(localStorage.getItem(&#39;settings&#39;));
console.log(saved.volume); // 80
</code></pre>
<hr>
<h2>3. 비디오/오디오 미디어 API 제어</h2>
<p>자바스크립트로 HTML5 <code>&lt;video&gt;</code> 태그의 재생, 일시정지, 음량을 직접 제어할 수 있습니다.</p>
<pre><code class="language-javascript">const video = document.querySelector(&#39;video&#39;);

// 자바스크립트로 비디오 제어
video.play();     // 재생
video.pause();    // 일시정지
video.volume = 0.5; // 음량 50%
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 웹 스토리지에 사용자 비밀번호나 결제 정보를 저장해도 되나요?</strong>
A. 절대로 안 됩니다! 웹 스토리지는 자바스크립트 코드에서 누구나 쉽게 접근해 읽을 수 있으므로, 민감한 개인정보나 보안 토큰을 저장해서는 안 되며, 테마 설정, 장바구니 임시 목록 데이터 등에 사용해야 합니다.</p>
',
  'published',
  'HTML5 Web Storage(LocalStorage vs SessionStorage) 및 미디어 제어 API',
  '브라우저에 영구히 데이터를 보관하는 LocalStorage, 탭 닫으면 사라지는 SessionStorage, 그리고 커스텀 비디오/오디오 플레이어 제작 미디어 API를 배웁니다.',
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
  'html5-web',
  'ch14-responsive-mobile-web',
  '반응형 웹 디자인과 모바일 웹 제작 실습',
  'PC, 태블릿, 모바일 스마트폰 등 다양한 디바이스 화면 크기에 유연하게 대응하는 반응형 웹 디자인(Responsive Web Design)의 핵심 기법을 완성합니다.',
  '**반응형 웹 디자인(Responsive Web Design, RWD)**이란 접속하는 기기(PC, 태블릿, 스마트폰)의 화면 크기에 맞춰 웹 레이아웃이 유연하게 반응하여 최적의 화면을 보여주는 설계 방식입니다.

---

## 1. 반응형 웹의 1단계 필수 설정: 뷰포트 (Viewport)

모바일 브라우저가 화면을 임의로 축소해 보여주지 않도록 `<head>` 안에 **뷰포트 메타 태그**를 반드시 작성해야 합니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- **`width=device-width`**: 페이지 너비를 기기의 실제 화면 너비와 동일하게 맞춤.
- **`initial-scale=1.0`**: 처음 로딩 시 확대/축소 없이 100% 배율로 설정.

---

## 2. 미디어 쿼리 (Media Query, `@media`)

화면 너비(Width) 조건에 따라 서로 다른 CSS 스타일 규칙을 적용합니다.

```css
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
```

---

## 3. 모바일 퍼스트(Mobile-First) 전략

작은 모바일 화면 스타일을 기본으로 먼저 작성하고, 미디어 쿼리 `@media (min-width: 768px)` 형태로 화면이 커질수록 레이아웃을 확장해 나가는 최신 웹 디자인 접근법입니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 반응형 웹에서 이미지 크기가 화면 밖으로 넘치지 않게 하려면?**
A. CSS에 `img { max-width: 100%; height: auto; }` 구문을 추가해 두면 이미지가 부모 요소의 너비보다 커지지 않고 비율을 유지하며 자동으로 축소됩니다.
',
  '<p>**반응형 웹 디자인(Responsive Web Design, RWD)**이란 접속하는 기기(PC, 태블릿, 스마트폰)의 화면 크기에 맞춰 웹 레이아웃이 유연하게 반응하여 최적의 화면을 보여주는 설계 방식입니다.</p>
<hr>
<h2>1. 반응형 웹의 1단계 필수 설정: 뷰포트 (Viewport)</h2>
<p>모바일 브라우저가 화면을 임의로 축소해 보여주지 않도록 <code>&lt;head&gt;</code> 안에 <strong>뷰포트 메타 태그</strong>를 반드시 작성해야 합니다.</p>
<pre><code class="language-html">&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
</code></pre>
<ul>
<li><strong><code>width=device-width</code></strong>: 페이지 너비를 기기의 실제 화면 너비와 동일하게 맞춤.</li>
<li><strong><code>initial-scale=1.0</code></strong>: 처음 로딩 시 확대/축소 없이 100% 배율로 설정.</li>
</ul>
<hr>
<h2>2. 미디어 쿼리 (Media Query, <code>@media</code>)</h2>
<p>화면 너비(Width) 조건에 따라 서로 다른 CSS 스타일 규칙을 적용합니다.</p>
<pre><code class="language-css">/* 기본 PC 스타일 */
.container {
  display: flex;
  flex-direction: row;
}

/* 태블릿 &amp; 모바일 화면 (너비 768px 이하일 때 적용) */
@media (max-width: 768px) {
  .container {
    flex-direction: column; /* 세로 배치로 전환 */
  }
  
  .main-nav {
    display: none; /* 모바일에서는 내비게이션 일단 숨김 */
  }
}
</code></pre>
<hr>
<h2>3. 모바일 퍼스트(Mobile-First) 전략</h2>
<p>작은 모바일 화면 스타일을 기본으로 먼저 작성하고, 미디어 쿼리 <code>@media (min-width: 768px)</code> 형태로 화면이 커질수록 레이아웃을 확장해 나가는 최신 웹 디자인 접근법입니다.</p>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 반응형 웹에서 이미지 크기가 화면 밖으로 넘치지 않게 하려면?</strong>
A. CSS에 <code>img { max-width: 100%; height: auto; }</code> 구문을 추가해 두면 이미지가 부모 요소의 너비보다 커지지 않고 비율을 유지하며 자동으로 축소됩니다.</p>
',
  'published',
  '반응형 웹 디자인(RWD) 가이드 - 뷰포트 meta 태그, 미디어 쿼리 @media',
  '데스크톱, 태블릿, 스마트폰 등 기기 화면 크기에 따라 알아서 레이아웃이 조절되는 반응형 웹의 핵심! 뷰포트 메타 태그와 미디어 쿼리(@media) 사용법을 다룹니다.',
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
