-- Full Python Master Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch01-python-introduction-and-interpreter',
  '파이썬(Python) 소개와 CPython 인터프리터 작동 원리, REPL & IDLE/VS Code 환경 구축',
  '가독성과 간결성을 최우선으로 하는 파이썬 프로그래밍 언어의 특징, CPython 인터프리터 작동 원리 및 IDLE/VS Code 개발 환경을 배웁니다.',
  '**파이썬(Python)**은 1991년 귀도 반 로섬(Guido van Rossum)이 발표한 **고수준 인터프리터 언어**입니다. 파이썬은 "인간의 생각을 코드로 자연스럽게 표현한다"는 가치 아래 CPython 표준 인터프리터 엔진을 기반으로 작동합니다.

---

## 1. 파이썬 핵심 전문 용어 사전 (Glossary)

- **CPython**: C 언어로 구현된 파이썬 공식 표준 인터프리터 엔진입니다.
- **REPL (Read-Eval-Print Loop)**: 사용자가 입력한 파이썬 코드를 즉시 읽고 실행하여 결과를 콘솔에 출력하는 대화형 프롬프트 인터페이스입니다.
- **Zen of Python**: `import this` 명령으로 확인할 수 있는 파이썬의 19가지 설계 철학입니다. ("Beautiful is better than ugly", "Simple is better than complex")
- **GIL (Global Interpreter Lock)**: CPython에서 C 언어 쓰레드 안전성을 위해 한 번에 하나의 스레드만 파이썬 바이트코드를 실행하도록 제어하는 메커니즘입니다.
- **Dynamic Typing (동적 타이핑)**: 변수 선언 시 타입을 명시하지 않고, 런타임에 값이 할당될 때 자동으로 데이터 타입이 결정되는 성질입니다.

---

## 2. 파이썬 Hello World 첫 스케치 프로그램

```python
# 파일명: hello.py
# 설명: 첫 번째 파이썬 출력 프로그램

import sys

def main():
    print("Hello, DAVHAVE Python World!")
    print(f"현재 파이썬 엔진 버전: {sys.version}")

if __name__ == "__main__":
    main()
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬 2와 파이썬 3의 차이는 무엇인가요?**
A. 파이썬 2는 2020년부로 공식 지원이 전면 종료(EOL)되었습니다. 파이썬 3는 모든 문자열의 기본 유니코드(UTF-8) 처리, `print()`의 함수화, 나누기 연산자(`/`)의 실수 반환 등 현대적 기능으로 완벽히 대체되었습니다.
',
  '<p>**파이썬(Python)**은 1991년 귀도 반 로섬(Guido van Rossum)이 발표한 <strong>고수준 인터프리터 언어</strong>입니다. 파이썬은 &quot;인간의 생각을 코드로 자연스럽게 표현한다&quot;는 가치 아래 CPython 표준 인터프리터 엔진을 기반으로 작동합니다.</p>
<hr>
<h2>1. 파이썬 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>CPython</strong>: C 언어로 구현된 파이썬 공식 표준 인터프리터 엔진입니다.</li>
<li><strong>REPL (Read-Eval-Print Loop)</strong>: 사용자가 입력한 파이썬 코드를 즉시 읽고 실행하여 결과를 콘솔에 출력하는 대화형 프롬프트 인터페이스입니다.</li>
<li><strong>Zen of Python</strong>: <code>import this</code> 명령으로 확인할 수 있는 파이썬의 19가지 설계 철학입니다. (&quot;Beautiful is better than ugly&quot;, &quot;Simple is better than complex&quot;)</li>
<li><strong>GIL (Global Interpreter Lock)</strong>: CPython에서 C 언어 쓰레드 안전성을 위해 한 번에 하나의 스레드만 파이썬 바이트코드를 실행하도록 제어하는 메커니즘입니다.</li>
<li><strong>Dynamic Typing (동적 타이핑)</strong>: 변수 선언 시 타입을 명시하지 않고, 런타임에 값이 할당될 때 자동으로 데이터 타입이 결정되는 성질입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 Hello World 첫 스케치 프로그램</h2>
<pre><code class="language-python"># 파일명: hello.py
# 설명: 첫 번째 파이썬 출력 프로그램

import sys

def main():
    print(&quot;Hello, DAVHAVE Python World!&quot;)
    print(f&quot;현재 파이썬 엔진 버전: {sys.version}&quot;)

if __name__ == &quot;__main__&quot;:
    main()
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬 2와 파이썬 3의 차이는 무엇인가요?</strong>
A. 파이썬 2는 2020년부로 공식 지원이 전면 종료(EOL)되었습니다. 파이썬 3는 모든 문자열의 기본 유니코드(UTF-8) 처리, <code>print()</code>의 함수화, 나누기 연산자(<code>/</code>)의 실수 반환 등 현대적 기능으로 완벽히 대체되었습니다.</p>
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
  '프로그램에서 데이터를 기억하는 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**, 그리고 데이터를 가공하는 **연산자(Operator)**를 학습합니다.

---

## 1. 변수 & 자료형 용어 사전 (Glossary)

- **Variable (변수)**: 값이 저장된 객체를 가리키는 메모리 참조 이름(Reference Label)입니다.
- **f-string**: 파이썬 3.6+에 도입된 가장 빠르고 직관적인 문자열 포맷팅 문법입니다.
- **Immutable Object**: 한 번 생성되면 내부 데이터 값을 변경할 수 없는 불변 객체입니다. (`int`, `float`, `str`, `tuple`, `bool`)
- **Mutable Object**: 생성 후에도 내부 데이터 수정 및 추가가 가능한 가변 객체입니다. (`list`, `dict`, `set`)

---

## 2. 파이썬 기본 자료형 정리표

| 자료형 분류 | 타입 키워드 | 가변성 (Mutability) | 예시 표현 |
| :--- | :--- | :---: | :--- |
| **정수형** | `int` | Immutable | `100`, `-42`, `10_000_000` |
| **실수형** | `float` | Immutable | `3.14159`, `-0.001` |
| **문자열** | `str` | Immutable | `''Hello''`, `"파이썬"` |
| **불리언** | `bool` | Immutable | `True`, `False` |
| **None 타입** | `NoneType` | Immutable | `None` (값이 없음을 명시) |

---

## 3. f-string 및 연산자 활용 실습

```python
item_name = "맥북 프로"
price = 2_500_000
discount_rate = 0.1

final_price = int(price * (1 - discount_rate))

print(f"상품명: {item_name}")
print(f"원가: {price:,}원")
print(f"할인가: {final_price:,}원 (할인율: {discount_rate * 100:.0f}%)")
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파이썬의 정수형(`int`)은 왜 메모리 오버플로우가 발생하지 않나요?**
A. 파이썬 3의 `int`는 임의 정밀도 정수(Arbitrary-precision integer) 시스템을 채택하고 있어, 메모리가 허용하는 한 오버플로우 없이 정확하게 계산합니다.
',
  '<p>프로그램에서 데이터를 기억하는 **변수(Variable)**와 데이터의 종류를 규정하는 <strong>자료형(Data Type)</strong>, 그리고 데이터를 가공하는 **연산자(Operator)**를 학습합니다.</p>
<hr>
<h2>1. 변수 &amp; 자료형 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Variable (변수)</strong>: 값이 저장된 객체를 가리키는 메모리 참조 이름(Reference Label)입니다.</li>
<li><strong>f-string</strong>: 파이썬 3.6+에 도입된 가장 빠르고 직관적인 문자열 포맷팅 문법입니다.</li>
<li><strong>Immutable Object</strong>: 한 번 생성되면 내부 데이터 값을 변경할 수 없는 불변 객체입니다. (<code>int</code>, <code>float</code>, <code>str</code>, <code>tuple</code>, <code>bool</code>)</li>
<li><strong>Mutable Object</strong>: 생성 후에도 내부 데이터 수정 및 추가가 가능한 가변 객체입니다. (<code>list</code>, <code>dict</code>, <code>set</code>)</li>
</ul>
<hr>
<h2>2. 파이썬 기본 자료형 정리표</h2>
<table>
<thead>
<tr>
<th align="left">자료형 분류</th>
<th align="left">타입 키워드</th>
<th align="center">가변성 (Mutability)</th>
<th align="left">예시 표현</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>정수형</strong></td>
<td align="left"><code>int</code></td>
<td align="center">Immutable</td>
<td align="left"><code>100</code>, <code>-42</code>, <code>10_000_000</code></td>
</tr>
<tr>
<td align="left"><strong>실수형</strong></td>
<td align="left"><code>float</code></td>
<td align="center">Immutable</td>
<td align="left"><code>3.14159</code>, <code>-0.001</code></td>
</tr>
<tr>
<td align="left"><strong>문자열</strong></td>
<td align="left"><code>str</code></td>
<td align="center">Immutable</td>
<td align="left"><code>&#39;Hello&#39;</code>, <code>&quot;파이썬&quot;</code></td>
</tr>
<tr>
<td align="left"><strong>불리언</strong></td>
<td align="left"><code>bool</code></td>
<td align="center">Immutable</td>
<td align="left"><code>True</code>, <code>False</code></td>
</tr>
<tr>
<td align="left"><strong>None 타입</strong></td>
<td align="left"><code>NoneType</code></td>
<td align="center">Immutable</td>
<td align="left"><code>None</code> (값이 없음을 명시)</td>
</tr>
</tbody></table>
<hr>
<h2>3. f-string 및 연산자 활용 실습</h2>
<pre><code class="language-python">item_name = &quot;맥북 프로&quot;
price = 2_500_000
discount_rate = 0.1

final_price = int(price * (1 - discount_rate))

print(f&quot;상품명: {item_name}&quot;)
print(f&quot;원가: {price:,}원&quot;)
print(f&quot;할인가: {final_price:,}원 (할인율: {discount_rate * 100:.0f}%)&quot;)
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬의 정수형(<code>int</code>)은 왜 메모리 오버플로우가 발생하지 않나요?</strong>
A. 파이썬 3의 <code>int</code>는 임의 정밀도 정수(Arbitrary-precision integer) 시스템을 채택하고 있어, 메모리가 허용하는 한 오버플로우 없이 정확하게 계산합니다.</p>
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
  '프로그램의 논리적 실행 제어를 담당하는 **조건문(if)**과 **패턴 매칭(match-case)**, 반복 수행을 처리하는 **반복문(for, while)**의 사용법을 학습합니다.

---

## 1. 제어문 용어 사전 (Glossary)

- **Structural Pattern Matching**: 파이썬 3.10에 도입된 `match-case` 문법으로, 복잡한 데이터 구조 패턴을 가독성 높게 조건 처리하는 구문입니다.
- **range()**: 숫자 시퀀스를 효율적으로 생성하는 이터러블 객체입니다.
- **enumerate()**: 반복문 순회 시 인덱스 번호와 실제 값을 튜플 형태로 동시에 반환해 주는 내장 함수입니다.
- **zip()**: 여러 개의 컬렉션 요소를 같은 인덱스끼리 묶어서 병렬 순회할 수 있도록 짝지어 주는 내장 함수입니다.

---

## 2. match-case 패턴 매칭 실습

```python
def process_command(command):
    match command.split():
        case ["quit"]:
            print("프로그램을 종료합니다.")
        case ["load", filename]:
            print(f"파일 ''{filename}''을 읽어옵니다.")
        case _:
            print("알 수 없는 명령입니다.")

process_command("load data.csv")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. for-else 문에서 `else` 블록은 언제 실행되나요?**
A. for 루프가 `break` 문을 만나 중단되지 않고 정상적으로 끝까지 완주했을 때 실행됩니다.
',
  '<p>프로그램의 논리적 실행 제어를 담당하는 **조건문(if)**과 <strong>패턴 매칭(match-case)</strong>, 반복 수행을 처리하는 **반복문(for, while)**의 사용법을 학습합니다.</p>
<hr>
<h2>1. 제어문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Structural Pattern Matching</strong>: 파이썬 3.10에 도입된 <code>match-case</code> 문법으로, 복잡한 데이터 구조 패턴을 가독성 높게 조건 처리하는 구문입니다.</li>
<li><strong>range()</strong>: 숫자 시퀀스를 효율적으로 생성하는 이터러블 객체입니다.</li>
<li><strong>enumerate()</strong>: 반복문 순회 시 인덱스 번호와 실제 값을 튜플 형태로 동시에 반환해 주는 내장 함수입니다.</li>
<li><strong>zip()</strong>: 여러 개의 컬렉션 요소를 같은 인덱스끼리 묶어서 병렬 순회할 수 있도록 짝지어 주는 내장 함수입니다.</li>
</ul>
<hr>
<h2>2. match-case 패턴 매칭 실습</h2>
<pre><code class="language-python">def process_command(command):
    match command.split():
        case [&quot;quit&quot;]:
            print(&quot;프로그램을 종료합니다.&quot;)
        case [&quot;load&quot;, filename]:
            print(f&quot;파일 &#39;{filename}&#39;을 읽어옵니다.&quot;)
        case _:
            print(&quot;알 수 없는 명령입니다.&quot;)

process_command(&quot;load data.csv&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. for-else 문에서 <code>else</code> 블록은 언제 실행되나요?</strong>
A. for 루프가 <code>break</code> 문을 만나 중단되지 않고 정상적으로 끝까지 완주했을 때 실행됩니다.</p>
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
  '여러 개의 관련 데이터를 묶어서 관리하는 파이썬 4대 데이터 구조인 **리스트(List), 튜플(Tuple), 집합(Set), 딕셔너리(Dictionary)**를 학습합니다.

---

## 1. 자료구조 용어 사전 (Glossary)

- **Slicing (슬라이싱)**: 시퀀스 자료형에서 `[start:stop:step]` 형식으로 원하는 일부분을 추출해 내는 기법입니다.
- **List Comprehension**: 루프문과 조건문을 한 줄로 조합하여 간결하게 새 리스트를 생성하는 파이썬 고유 문법입니다.
- **Dictionary View**: `dict.keys()`, `dict.values()`, `dict.items()` 처럼 딕셔너리의 내부 상태를 실시간 반영하는 동적 뷰 객체입니다.

---

## 2. List Comprehension 및 딕셔너리 실습

```python
evens_squared = [x**2 for x in range(1, 11) if x % 2 == 0]
print(f"짝수 제곱 리스트: {evens_squared}")

user_profile = {"name": "홍길동", "email": "hong@davhave.com", "role": "admin"}
phone = user_profile.get("phone", "미등록 번호")
print(f"전화번호: {phone}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 리스트 복사 시 `b = a` 와 `b = a.copy()` 의 차이는?**
A. `b = a`는 얕은 참조(Reference Copy)이므로 b를 고치면 a도 수정됩니다. 독립된 복사본을 만들려면 `copy()`를 써야 합니다.
',
  '<p>여러 개의 관련 데이터를 묶어서 관리하는 파이썬 4대 데이터 구조인 **리스트(List), 튜플(Tuple), 집합(Set), 딕셔너리(Dictionary)**를 학습합니다.</p>
<hr>
<h2>1. 자료구조 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Slicing (슬라이싱)</strong>: 시퀀스 자료형에서 <code>[start:stop:step]</code> 형식으로 원하는 일부분을 추출해 내는 기법입니다.</li>
<li><strong>List Comprehension</strong>: 루프문과 조건문을 한 줄로 조합하여 간결하게 새 리스트를 생성하는 파이썬 고유 문법입니다.</li>
<li><strong>Dictionary View</strong>: <code>dict.keys()</code>, <code>dict.values()</code>, <code>dict.items()</code> 처럼 딕셔너리의 내부 상태를 실시간 반영하는 동적 뷰 객체입니다.</li>
</ul>
<hr>
<h2>2. List Comprehension 및 딕셔너리 실습</h2>
<pre><code class="language-python">evens_squared = [x**2 for x in range(1, 11) if x % 2 == 0]
print(f&quot;짝수 제곱 리스트: {evens_squared}&quot;)

user_profile = {&quot;name&quot;: &quot;홍길동&quot;, &quot;email&quot;: &quot;hong@davhave.com&quot;, &quot;role&quot;: &quot;admin&quot;}
phone = user_profile.get(&quot;phone&quot;, &quot;미등록 번호&quot;)
print(f&quot;전화번호: {phone}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 리스트 복사 시 <code>b = a</code> 와 <code>b = a.copy()</code> 의 차이는?</strong>
A. <code>b = a</code>는 얕은 참조(Reference Copy)이므로 b를 고치면 a도 수정됩니다. 독립된 복사본을 만들려면 <code>copy()</code>를 써야 합니다.</p>
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
