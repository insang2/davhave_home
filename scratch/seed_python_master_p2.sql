-- Full Python Master Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch05-functions-lambda-and-scope',
  '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 LEGB 스코프 룰',
  '코드의 재사용성을 극대화하는 함수(Function) 정의, 가변 인자(*args, **kwargs), 익명 함수 람다(lambda) 및 변수 검색 범위인 LEGB 규칙을 학습합니다.',
  '특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 **함수(Function)** 선언과 파이썬 변수 검색 범위인 **LEGB 규칙**을 다룹니다.

---

## 1. 함수 및 스코프 용어 사전 (Glossary)

- **First-Class Citizen (일급 객체)**: 파이썬에서 함수는 변수에 할당할 수 있고, 다른 함수의 인자로 전달되거나 반환값으로 리턴될 수 있는 일급 객체입니다.
- **`*args` / `**kwargs`**: 위치 가변 인자(`*args`)와 키워드 가변 인자(`**kwargs`)를 튜플 및 딕셔너리 형태로 동적 수집하는 매개변수 표현식입니다.
- **Lambda Function**: 이름 없이 한 줄로 간단하게 선언하는 익명 함수 표현식입니다. (`lambda x: x + 1`)
- **LEGB Rule**: 파이썬 변수 이름을 검색하는 4단계 영역 우선순위입니다. (**L**ocal $ightarrow$ **E**nclosing $ightarrow$ **G**lobal $ightarrow$ **B**uilt-in)

---

## 2. 가변 인자 및 람다 함수 실습

```python
# 가변 인자 함수
def calculate_total(*args, **kwargs):
    base_sum = sum(args)
    tax_rate = kwargs.get("tax", 0.0)
    return base_sum * (1 + tax_rate)

print(f"합계 및 세금 계산: {calculate_total(100, 200, 300, tax=0.1):,.0f}원")

# 람다 함수 정렬
products = [("노트북", 150), ("키보드", 8), ("마우스", 4)]
products.sort(key=lambda x: x[1]) # 가격 기준 정렬
print(f"가격 오름차순 정렬: {products}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 함수 안에서 전역 변수를 수정하려면 어떻게 하나요?**
A. 함수 내부에서 `global 변수명` 키워드를 선언하면 전역 영역의 변수를 직접 참조하고 변경할 수 있습니다. (다만 남용 시 사이드 이펙트 주의)
',
  '<p>특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 <strong>함수(Function)</strong> 선언과 파이썬 변수 검색 범위인 <strong>LEGB 규칙</strong>을 다룹니다.</p>
<hr>
<h2>1. 함수 및 스코프 용어 사전 (Glossary)</h2>
<ul>
<li><strong>First-Class Citizen (일급 객체)</strong>: 파이썬에서 함수는 변수에 할당할 수 있고, 다른 함수의 인자로 전달되거나 반환값으로 리턴될 수 있는 일급 객체입니다.</li>
<li><strong><code>*args</code> / <code>**kwargs</code></strong>: 위치 가변 인자(<code>*args</code>)와 키워드 가변 인자(<code>**kwargs</code>)를 튜플 및 딕셔너리 형태로 동적 수집하는 매개변수 표현식입니다.</li>
<li><strong>Lambda Function</strong>: 이름 없이 한 줄로 간단하게 선언하는 익명 함수 표현식입니다. (<code>lambda x: x + 1</code>)</li>
<li><strong>LEGB Rule</strong>: 파이썬 변수 이름을 검색하는 4단계 영역 우선순위입니다. (<strong>L</strong>ocal $
ightarrow$ <strong>E</strong>nclosing $
ightarrow$ <strong>G</strong>lobal $
ightarrow$ <strong>B</strong>uilt-in)</li>
</ul>
<hr>
<h2>2. 가변 인자 및 람다 함수 실습</h2>
<pre><code class="language-python"># 가변 인자 함수
def calculate_total(*args, **kwargs):
    base_sum = sum(args)
    tax_rate = kwargs.get(&quot;tax&quot;, 0.0)
    return base_sum * (1 + tax_rate)

print(f&quot;합계 및 세금 계산: {calculate_total(100, 200, 300, tax=0.1):,.0f}원&quot;)

# 람다 함수 정렬
products = [(&quot;노트북&quot;, 150), (&quot;키보드&quot;, 8), (&quot;마우스&quot;, 4)]
products.sort(key=lambda x: x[1]) # 가격 기준 정렬
print(f&quot;가격 오름차순 정렬: {products}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 함수 안에서 전역 변수를 수정하려면 어떻게 하나요?</strong>
A. 함수 내부에서 <code>global 변수명</code> 키워드를 선언하면 전역 영역의 변수를 직접 참조하고 변경할 수 있습니다. (다만 남용 시 사이드 이펙트 주의)</p>
',
  'published',
  '파이썬 함수와 람다 - def, *args, **kwargs, lambda, LEGB 스코프 룰',
  'def 함수 정의, 가변 인자(*args, **kwargs), 익명 람다(lambda) 함수, 일급 객체(First-class Citizen), LEGB 스코프 변수 참조 규칙을 해설합니다.',
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
  'python',
  'ch06-modules-packages-and-venv',
  '모듈(Module), 패키지(Package)와 가상환경(venv) 및 pip',
  '독립된 코드 파일인 모듈과 패키지 구조, __name__ 엔트리 포인트 제어, 의존성 충돌을 막아주는 venv 가상환경과 pip 패키지 관리자를 학습합니다.',
  '코드의 모듈화와 재사용을 돕는 **모듈(Module)**과 **패키지(Package)**, 그리고 프로젝트별 독립된 개발 환경을 보장하는 **가상환경(venv)**을 다룹니다.

---

## 1. 모듈 & 가상환경 용어 사전 (Glossary)

- **Module**: 함수, 클래스, 변수들을 모아 놓은 단일 파이썬 소스 파일(`.py`)입니다.
- **Package**: 여러 모듈들을 폴더 구조로 묶어 관리하는 디렉토리입니다. (파이썬 3.3+부터 `__init__.py`가 선택 사항임)
- **`__name__ == ''__main__''`**: 현재 파일이 직접 실행되었는지, 다른 파일에 의해 `import` 되었는지를 구별하는 파이썬 엔트리 포인트 진단 구문입니다.
- **Virtual Environment (venv)**: 프로젝트마다 독립된 파이썬 실행 환경과 패키지 세트를 격리하여 의존성 충돌을 막아주는 내장 모듈입니다.

---

## 2. venv 가상환경 명령어 사용법

```bash
# 1. ''myenv'' 이름의 가상환경 생성
python3 -m venv myenv

# 2. 가상환경 활성화 (macOS / Linux)
source myenv/bin/activate

# 3. 가상환경 활성화 (Windows)
myenvScriptsactivate

# 4. 외부 패키지 설치 및 의존성 저장
pip install requests pandas
pip freeze > requirements.txt
```
',
  '<p>코드의 모듈화와 재사용을 돕는 **모듈(Module)**과 <strong>패키지(Package)</strong>, 그리고 프로젝트별 독립된 개발 환경을 보장하는 **가상환경(venv)**을 다룹니다.</p>
<hr>
<h2>1. 모듈 &amp; 가상환경 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Module</strong>: 함수, 클래스, 변수들을 모아 놓은 단일 파이썬 소스 파일(<code>.py</code>)입니다.</li>
<li><strong>Package</strong>: 여러 모듈들을 폴더 구조로 묶어 관리하는 디렉토리입니다. (파이썬 3.3+부터 <code>__init__.py</code>가 선택 사항임)</li>
<li><strong><code>__name__ == &#39;__main__&#39;</code></strong>: 현재 파일이 직접 실행되었는지, 다른 파일에 의해 <code>import</code> 되었는지를 구별하는 파이썬 엔트리 포인트 진단 구문입니다.</li>
<li><strong>Virtual Environment (venv)</strong>: 프로젝트마다 독립된 파이썬 실행 환경과 패키지 세트를 격리하여 의존성 충돌을 막아주는 내장 모듈입니다.</li>
</ul>
<hr>
<h2>2. venv 가상환경 명령어 사용법</h2>
<pre><code class="language-bash"># 1. &#39;myenv&#39; 이름의 가상환경 생성
python3 -m venv myenv

# 2. 가상환경 활성화 (macOS / Linux)
source myenv/bin/activate

# 3. 가상환경 활성화 (Windows)
myenvScriptsactivate

# 4. 외부 패키지 설치 및 의존성 저장
pip install requests pandas
pip freeze &gt; requirements.txt
</code></pre>
',
  'published',
  '파이썬 모듈과 패키지 - import, __name__, sys.path, venv 가상환경 & pip',
  '파이썬 파일 모듈(Module)과 디렉토리 패키지(Package), __name__ == "__main__" 구문, sys.path 탐색 경로, pip 패키지 관리 및 venv 가상환경 구축법을 배웁니다.',
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
  'python',
  'ch07-file-io-and-context-managers',
  '파일 입출력(File I/O)과 컨텍스트 매니저(with 문) 및 pathlib',
  '텍스트 및 바이너리 파일을 읽고 쓰는 open() 함수, 리소스 자동 마감을 보장하는 with 컨텍스트 매니저 및 현대적인 pathlib 모듈을 배웁니다.',
  '디스크 상의 텍스트 및 바이너리 파일을 읽고 쓰는 **파일 입출력(File I/O)**과 리소스를 안전하게 관리하는 **with 컨텍스트 매니저**를 다룹니다.

---

## 1. 파일 I/O 용어 사전 (Glossary)

- **Context Manager (컨텍스트 매니저)**: `with` 문 구문 탈출 시 자동으로 `close()` 또는 자원 해제 작업을 안전하게 처리하는 메커니즘입니다.
- **`pathlib.Path`**: 파이썬 3.4+에 도입된 객체지향적인 파일 및 디렉토리 경로 조작 표준 모듈입니다.
- **Encoding (UTF-8)**: 텍스트 파일 입출력 시 한글 깨짐 현상을 방지하기 위해 지정하는 표준 문자 인코딩 설정입니다. (`encoding=''utf-8''`)

---

## 2. 파일 쓰기/읽기 및 pathlib 예제

```python
from pathlib import Path

# pathlib 객체 생성 및 파일 생성
file_path = Path("sample_data.txt")

# 파일 쓰기 (with 컨텍스트 매니저)
with file_path.open("w", encoding="utf-8") as f:
    f.write("DAVHAVE 파이썬 파일 입출력 테스트
")
    f.write("Line 2: 인코딩 안전성 확보
")

# 파일 읽기
if file_path.exists():
    content = file_path.read_text(encoding="utf-8")
    print("=== [파일 읽기 결과] ===")
    print(content)
```
',
  '<p>디스크 상의 텍스트 및 바이너리 파일을 읽고 쓰는 **파일 입출력(File I/O)**과 리소스를 안전하게 관리하는 <strong>with 컨텍스트 매니저</strong>를 다룹니다.</p>
<hr>
<h2>1. 파일 I/O 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Context Manager (컨텍스트 매니저)</strong>: <code>with</code> 문 구문 탈출 시 자동으로 <code>close()</code> 또는 자원 해제 작업을 안전하게 처리하는 메커니즘입니다.</li>
<li><strong><code>pathlib.Path</code></strong>: 파이썬 3.4+에 도입된 객체지향적인 파일 및 디렉토리 경로 조작 표준 모듈입니다.</li>
<li><strong>Encoding (UTF-8)</strong>: 텍스트 파일 입출력 시 한글 깨짐 현상을 방지하기 위해 지정하는 표준 문자 인코딩 설정입니다. (<code>encoding=&#39;utf-8&#39;</code>)</li>
</ul>
<hr>
<h2>2. 파일 쓰기/읽기 및 pathlib 예제</h2>
<pre><code class="language-python">from pathlib import Path

# pathlib 객체 생성 및 파일 생성
file_path = Path(&quot;sample_data.txt&quot;)

# 파일 쓰기 (with 컨텍스트 매니저)
with file_path.open(&quot;w&quot;, encoding=&quot;utf-8&quot;) as f:
    f.write(&quot;DAVHAVE 파이썬 파일 입출력 테스트
&quot;)
    f.write(&quot;Line 2: 인코딩 안전성 확보
&quot;)

# 파일 읽기
if file_path.exists():
    content = file_path.read_text(encoding=&quot;utf-8&quot;)
    print(&quot;=== [파일 읽기 결과] ===&quot;)
    print(content)
</code></pre>
',
  'published',
  '파이썬 파일 입출력 - open(), read, write, with 문 & pathlib 모듈',
  '파일 읽기/쓰기 모드(r, w, a), 컨텍스트 매니저(with 문)를 통한 리소스 자동 해제, readlines(), csv/json 파일 처리 및 pathlib 객체지향 경로 조작을 다룹니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch08-exception-handling-and-custom-exceptions',
  '예외 처리(try-except-else-finally) 및 사용자 정의 예외',
  '프로그램 런타임 오류 시 강제 종료를 방지하는 try-except-else-finally 구문, raise 키워드 및 Exception 상속 기반 커스텀 예외 클래스 생성을 학습합니다.',
  '프로그램 실행 중 예기치 못한 에러가 발생해도 프로그램이 멈추지 않도록 안전하게 포획하는 **예외 처리(Exception Handling)**를 학습합니다.

---

## 1. 예외 처리 용어 사전 (Glossary)

- **Exception (예외)**: 프로그램 실행 중(런타임)에 발생하는 오류 상황으로, 포획하지 않으면 프로그램이 강제 종료됩니다.
- **`try-except-else-finally`**:
  - `try`: 에러가 발생할 수 있는 위험 코드 실행 구역.
  - `except`: 예외가 발생했을 때 처리하는 구역.
  - `else`: 에러 없이 정상적으로 성공했을 때만 실행되는 구역.
  - `finally`: 에러 발생 여부와 상관없이 무조건 마지막에 실행되는 자원 정제 구역.
- **Custom Exception**: 표준 `Exception` 클래스를 상속받아 도메인 특화 에러 상황을 명시하는 사용자 정의 클래스입니다.

---

## 2. 예외 처리 실습 코드

```python
class OutOfStockError(Exception):
    """재고 부족 시 발생하는 커스텀 예외"""
    pass

def purchase_item(stock: int, quantity: int):
    if quantity > stock:
        raise OutOfStockError(f"요청 수량({quantity})이 재고({stock})를 초과했습니다.")
    return stock - quantity

try:
    remaining = purchase_item(5, 10)
except OutOfStockError as e:
    print(f"구매 실패 경고: {e}")
finally:
    print("결제 프로세스가 마감되었습니다.")
```
',
  '<p>프로그램 실행 중 예기치 못한 에러가 발생해도 프로그램이 멈추지 않도록 안전하게 포획하는 **예외 처리(Exception Handling)**를 학습합니다.</p>
<hr>
<h2>1. 예외 처리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Exception (예외)</strong>: 프로그램 실행 중(런타임)에 발생하는 오류 상황으로, 포획하지 않으면 프로그램이 강제 종료됩니다.</li>
<li><strong><code>try-except-else-finally</code></strong>:<ul>
<li><code>try</code>: 에러가 발생할 수 있는 위험 코드 실행 구역.</li>
<li><code>except</code>: 예외가 발생했을 때 처리하는 구역.</li>
<li><code>else</code>: 에러 없이 정상적으로 성공했을 때만 실행되는 구역.</li>
<li><code>finally</code>: 에러 발생 여부와 상관없이 무조건 마지막에 실행되는 자원 정제 구역.</li>
</ul>
</li>
<li><strong>Custom Exception</strong>: 표준 <code>Exception</code> 클래스를 상속받아 도메인 특화 에러 상황을 명시하는 사용자 정의 클래스입니다.</li>
</ul>
<hr>
<h2>2. 예외 처리 실습 코드</h2>
<pre><code class="language-python">class OutOfStockError(Exception):
    &quot;&quot;&quot;재고 부족 시 발생하는 커스텀 예외&quot;&quot;&quot;
    pass

def purchase_item(stock: int, quantity: int):
    if quantity &gt; stock:
        raise OutOfStockError(f&quot;요청 수량({quantity})이 재고({stock})를 초과했습니다.&quot;)
    return stock - quantity

try:
    remaining = purchase_item(5, 10)
except OutOfStockError as e:
    print(f&quot;구매 실패 경고: {e}&quot;)
finally:
    print(&quot;결제 프로세스가 마감되었습니다.&quot;)
</code></pre>
',
  'published',
  '파이썬 예외 처리 - try, except, else, finally, raise & 사용자 정의 Exception',
  '런타임 에러 방지를 위한 try-except-else-finally 블록 구문, built-in 예외 종류, raise 예외 발생 및 Exception 클래스 상속 기반 사용자 정의 예외를 배웁니다.',
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
