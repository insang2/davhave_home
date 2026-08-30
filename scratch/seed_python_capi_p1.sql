-- Full Python C-API Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch01-python-introduction-and-interpreter',
  '파이썬(Python) 소개와 CPython 인터프리터 작동 원리, REPL & IDLE/VS Code 환경 구축',
  '가독성과 간결성을 최우선으로 하는 파이썬 프로그래밍 언어의 특징, CPython 인터프리터 작동 원리 및 IDLE/VS Code 개발 환경을 배웁니다.',
  '**파이썬(Python)**은 1991년 귀도 반 로섬(Guido van Rossum)이 발표한 **고수준 인터프리터 언어**입니다. CPython 표준 인터프리터 엔진을 기반으로 동작합니다.

---

## 1. 파이썬 핵심 전문 용어 사전 (Glossary)

- **CPython**: C 언어로 구현된 파이썬 공식 표준 인터프리터 엔진입니다.
- **REPL (Read-Eval-Print Loop)**: 입력한 파이썬 코드를 즉시 읽고 실행하여 결과를 콘솔에 출력하는 대화형 인터페이스입니다.
- **Zen of Python**: `import this` 명령으로 확인할 수 있는 파이썬의 19가지 설계 철학입니다.
- **GIL (Global Interpreter Lock)**: 한 번에 하나의 스레드만 파이썬 바이트코드를 실행하도록 제어하는 메커니즘입니다.

---

## 2. 파이썬 Hello World 예제

```python
import sys
print("Hello, DAVHAVE Python World!")
print(f"현재 파이썬 버전: {sys.version}")
```
',
  '<p>**파이썬(Python)**은 1991년 귀도 반 로섬(Guido van Rossum)이 발표한 <strong>고수준 인터프리터 언어</strong>입니다. CPython 표준 인터프리터 엔진을 기반으로 동작합니다.</p>
<hr>
<h2>1. 파이썬 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>CPython</strong>: C 언어로 구현된 파이썬 공식 표준 인터프리터 엔진입니다.</li>
<li><strong>REPL (Read-Eval-Print Loop)</strong>: 입력한 파이썬 코드를 즉시 읽고 실행하여 결과를 콘솔에 출력하는 대화형 인터페이스입니다.</li>
<li><strong>Zen of Python</strong>: <code>import this</code> 명령으로 확인할 수 있는 파이썬의 19가지 설계 철학입니다.</li>
<li><strong>GIL (Global Interpreter Lock)</strong>: 한 번에 하나의 스레드만 파이썬 바이트코드를 실행하도록 제어하는 메커니즘입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 Hello World 예제</h2>
<pre><code class="language-python">import sys
print(&quot;Hello, DAVHAVE Python World!&quot;)
print(f&quot;현재 파이썬 버전: {sys.version}&quot;)
</code></pre>
',
  'published',
  '파이썬 입문 가이드 - CPython 인터프리터, Zen of Python, IDLE & VS Code',
  '파이썬의 역사, 설계 철학(Zen of Python), CPython 바이트코드 컴파일 메커니즘, GIL(Global Interpreter Lock), REPL 대화형 모드 및 VS Code 설치를 배웁니다.',
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
  'python',
  'ch02-variables-data-types-and-operators',
  '변수, 기본 자료형(Numbers, Strings, Booleans) 및 수치 연산',
  '변수 개념, 기본 수치 및 문자열 자료형, f-string 포맷팅과 연산자 활용법을 학습합니다.',
  '변수(Variable)와 자료형(Data Type)을 학습합니다.',
  '<p>변수(Variable)와 자료형(Data Type)을 학습합니다.</p>
',
  'published',
  '파이썬 변수와 자료형 - int, float, str, bool, f-string 포맷팅 & 연산자',
  '동적 타입 변수, 기본 자료형, f-string 포맷팅, type() 및 id() 검사, 산술/비교/논리 연산자를 배웁니다.',
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
  'python',
  'ch03-control-flow-conditionals-and-loops',
  '제어 구조: 조건문(if-elif-else, match-case)과 루프(for, while, range, enumerate, zip)',
  '조건문과 match-case 패턴 매칭, range(), enumerate(), zip() 함수를 배웁니다.',
  '조건문(if)과 반복문(for, while)의 사용법을 학습합니다.',
  '<p>조건문(if)과 반복문(for, while)의 사용법을 학습합니다.</p>
',
  'published',
  '파이썬 제어문 - if-elif-else, match-case, for, while, range, enumerate, zip',
  '조건문, match-case 패턴 매칭, 반복문, range, enumerate, zip, break/continue를 학습합니다.',
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
  'python',
  'ch04-data-structures-list-tuple-set-dict',
  '파이썬 핵심 자료구조: 리스트, 튜플, 집합(Set) 및 딕셔너리',
  '리스트, 튜플, 집합, 딕셔너리와 컴프리헨션을 배웁니다.',
  '파이썬 4대 데이터 구조인 리스트, 튜플, 집합, 딕셔너리를 학습합니다.',
  '<p>파이썬 4대 데이터 구조인 리스트, 튜플, 집합, 딕셔너리를 학습합니다.</p>
',
  'published',
  '파이썬 자료구조 - List, Tuple, Set, Dictionary & List Comprehension',
  '4대 기본 자료구조의 특징, 슬라이싱, List Comprehension, Dict View 메소드를 다룹니다.',
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
