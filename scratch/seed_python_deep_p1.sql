-- Full Python Stdlib Deep Lessons Part 1

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
  '파이썬의 동적 바인딩 변수 개념, 기본 수치 및 문자열 자료형, f-string 포맷팅과 산술, 비교, 논리 연산자 활용법을 학습합니다.',
  '프로그램에서 데이터를 기억하는 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**을 학습합니다.',
  '<p>프로그램에서 데이터를 기억하는 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**을 학습합니다.</p>
',
  'published',
  '파이썬 변수와 자료형 - int, float, str, bool, f-string 포맷팅 & 연산자',
  '파이썬의 동적 타입 변수, 기본 자료형(숫자형, 문자열, 불리언), f-string 포맷팅, type() 및 id() 검사, 산술/비교/논리 연산자를 배웁니다.',
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
  '프로그램 실행 흐름을 제어하는 조건문과 파이썬 3.10+ match-case 패턴 매칭, range(), enumerate(), zip() 함수를 활용한 고급 루프 순회 기법을 배웁니다.',
  '프로그램의 논리적 실행 제어를 담당하는 **조건문(if)**과 **패턴 매칭(match-case)**, 반복 수행을 처리하는 **반복문(for, while)**의 사용법을 학습합니다.',
  '<p>프로그램의 논리적 실행 제어를 담당하는 **조건문(if)**과 <strong>패턴 매칭(match-case)</strong>, 반복 수행을 처리하는 **반복문(for, while)**의 사용법을 학습합니다.</p>
',
  'published',
  '파이썬 제어문 - if-elif-else, match-case, for, while, range, enumerate, zip',
  '조건문(if-elif-else), 파이썬 3.10+ match-case 패턴 매칭, 반복문(for, while), 내장 루프 함수(range, enumerate, zip), break 및 continue 흐름 제어를 학습합니다.',
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
  '파이썬 4대 핵심 컬렉션인 리스트, 튜플, 집합, 딕셔너리의 가변성(Mutability)과 파이썬 특유의 한 줄 생성식 컴프리헨션(Comprehension)을 배웁니다.',
  '여러 개의 관련 데이터를 묶어서 관리하는 파이썬 4대 데이터 구조인 **리스트(List), 튜플(Tuple), 집합(Set), 딕셔너리(Dictionary)**를 학습합니다.',
  '<p>여러 개의 관련 데이터를 묶어서 관리하는 파이썬 4대 데이터 구조인 **리스트(List), 튜플(Tuple), 집합(Set), 딕셔너리(Dictionary)**를 학습합니다.</p>
',
  'published',
  '파이썬 자료구조 - List, Tuple, Set, Dictionary & List Comprehension',
  '파이썬의 4대 기본 자료구조(리스트, 튜플, 집합, 딕셔너리)의 특징, 슬라이싱([:]), List Comprehension, Dict View 메소드를 다룹니다.',
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
