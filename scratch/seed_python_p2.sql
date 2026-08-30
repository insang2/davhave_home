-- Full Python Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch05-functions-lambda-and-scope',
  '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 스코프(LEGB)',
  '코드의 재사용성을 극대화하는 함수(Function) 정의, 가변 인자(*args, **kwargs), 익명 함수 람다(lambda) 및 변수 검색 범위인 LEGB 규칙을 학습합니다.',
  '특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 **함수(Function)** 선언과 파이썬 변수 검색 범위인 **LEGB 규칙**을 다룹니다.

---

## 1. 함수 핵심 용어 사전 (Glossary)

- **First-class Citizen (일급 객체)**: 파이썬의 함수는 변수에 할당할 수 있고, 다른 함수의 인자로 전달되거나 리턴값으로 반환될 수 있는 일급 객체입니다.
- ***args / **kwargs**: 정해지지 않은 개수의 가변 인자들을 각각 튜플(`*args`)과 딕셔너리(`**kwargs`) 형태로 받는 매개변수 표현법입니다.
- **Lambda Function**: 이름 없이 한 줄로 간결하게 정의하는 익명 함수입니다. (`lambda x, y: x + y`)
- **LEGB Rule**: 파이썬이 변수를 찾을 때 **L**ocal $ightarrow$ **E**nclosing $ightarrow$ **G**lobal $ightarrow$ **B**uilt-in 순서로 검색하는 스코프 영역 규칙입니다.

---

## 2. 가변 인자 및 람다 함수 실습 예제

```python
# 1. *args와 **kwargs 가변 인자 함수
def build_user_report(main_role, *hobbies, **details):
    print(f"주 역할: {main_role}")
    print(f"취미 목록: {hobbies}")
    print("상세 프로필 데이터:")
    for key, val in details.items():
        print(f" - {key}: {val}")

build_user_report("개발자", "독서", "코딩", "수영", age=28, city="서울")

# 2. Higher-Order Function과 lambda 활용
numbers = [5, 2, 8, 1, 9]
sorted_numbers = sorted(numbers, key=lambda x: -x) # 내림차순 정렬
print(f"람다 내림차순 정렬: {sorted_numbers}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 함수 내부에서 외부 전역 변수를 수정하려면?**
A. 함수 내부에서 전역 변수를 수정하려면 `global 변수명` 키워드를 선언해야 합니다. 중첩 함수에서 상위 함수의 변수를 수정하려면 `nonlocal 변수명`을 선언합니다.
',
  '<p>특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 <strong>함수(Function)</strong> 선언과 파이썬 변수 검색 범위인 <strong>LEGB 규칙</strong>을 다룹니다.</p>
<hr>
<h2>1. 함수 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>First-class Citizen (일급 객체)</strong>: 파이썬의 함수는 변수에 할당할 수 있고, 다른 함수의 인자로 전달되거나 리턴값으로 반환될 수 있는 일급 객체입니다.</li>
<li>***args / <strong>kwargs</strong>: 정해지지 않은 개수의 가변 인자들을 각각 튜플(<code>*args</code>)과 딕셔너리(<code>**kwargs</code>) 형태로 받는 매개변수 표현법입니다.</li>
<li><strong>Lambda Function</strong>: 이름 없이 한 줄로 간결하게 정의하는 익명 함수입니다. (<code>lambda x, y: x + y</code>)</li>
<li><strong>LEGB Rule</strong>: 파이썬이 변수를 찾을 때 <strong>L</strong>ocal $
ightarrow$ <strong>E</strong>nclosing $
ightarrow$ <strong>G</strong>lobal $
ightarrow$ <strong>B</strong>uilt-in 순서로 검색하는 스코프 영역 규칙입니다.</li>
</ul>
<hr>
<h2>2. 가변 인자 및 람다 함수 실습 예제</h2>
<pre><code class="language-python"># 1. *args와 **kwargs 가변 인자 함수
def build_user_report(main_role, *hobbies, **details):
    print(f&quot;주 역할: {main_role}&quot;)
    print(f&quot;취미 목록: {hobbies}&quot;)
    print(&quot;상세 프로필 데이터:&quot;)
    for key, val in details.items():
        print(f&quot; - {key}: {val}&quot;)

build_user_report(&quot;개발자&quot;, &quot;독서&quot;, &quot;코딩&quot;, &quot;수영&quot;, age=28, city=&quot;서울&quot;)

# 2. Higher-Order Function과 lambda 활용
numbers = [5, 2, 8, 1, 9]
sorted_numbers = sorted(numbers, key=lambda x: -x) # 내림차순 정렬
print(f&quot;람다 내림차순 정렬: {sorted_numbers}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 함수 내부에서 외부 전역 변수를 수정하려면?</strong>
A. 함수 내부에서 전역 변수를 수정하려면 <code>global 변수명</code> 키워드를 선언해야 합니다. 중첩 함수에서 상위 함수의 변수를 수정하려면 <code>nonlocal 변수명</code>을 선언합니다.</p>
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

- **Module (모듈)**: 파이썬 함수, 클래스, 변수들이 작성된 하나의 `.py` 소스 파일입니다.
- **Package (패키지)**: 여러 모듈 파일들을 폴더 구역 단위로 그룹화한 디렉토리입니다.
- **`__name__ == ''__main__''`**: 현재 파일이 직접 실행(Main Entry Point)된 것인지, 다른 파일에 `import` 되어 불러와진 것인지 식별하는 조건 구문입니다.
- **venv (Virtual Environment)**: 프로젝트마다 각기 다른 라이브러리와 파이썬 버전을 독립적으로 유지할 수 있도록 격리해 주는 가상환경 도구입니다.

---

## 2. 가상환경(venv) 생성 및 사용 가이드

```bash
# 1. myenv 이름의 가상환경 생성
python -m venv myenv

# 2. 가상환경 활성화 (macOS / Linux)
source myenv/bin/activate

# 2-1. 가상환경 활성화 (Windows cmd)
myenvScriptsactivate.bat

# 3. 외부 패키지 설치 및 의존성 리스트 내보내기
pip install requests pandas
pip freeze > requirements.txt
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `import` 시 `ModuleNotFoundError`가 발생하는 원인은?**
A. 파이썬이 모듈을 검색하는 경로 리스트인 `sys.path` 상에 해당 모듈이 위치한 디렉토리가 포함되어 있지 않거나 패키지가 설치되지 않았을 때 발생합니다.
',
  '<p>코드의 모듈화와 재사용을 돕는 **모듈(Module)**과 <strong>패키지(Package)</strong>, 그리고 프로젝트별 독립된 개발 환경을 보장하는 **가상환경(venv)**을 다룹니다.</p>
<hr>
<h2>1. 모듈 &amp; 가상환경 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Module (모듈)</strong>: 파이썬 함수, 클래스, 변수들이 작성된 하나의 <code>.py</code> 소스 파일입니다.</li>
<li><strong>Package (패키지)</strong>: 여러 모듈 파일들을 폴더 구역 단위로 그룹화한 디렉토리입니다.</li>
<li><strong><code>__name__ == &#39;__main__&#39;</code></strong>: 현재 파일이 직접 실행(Main Entry Point)된 것인지, 다른 파일에 <code>import</code> 되어 불러와진 것인지 식별하는 조건 구문입니다.</li>
<li><strong>venv (Virtual Environment)</strong>: 프로젝트마다 각기 다른 라이브러리와 파이썬 버전을 독립적으로 유지할 수 있도록 격리해 주는 가상환경 도구입니다.</li>
</ul>
<hr>
<h2>2. 가상환경(venv) 생성 및 사용 가이드</h2>
<pre><code class="language-bash"># 1. myenv 이름의 가상환경 생성
python -m venv myenv

# 2. 가상환경 활성화 (macOS / Linux)
source myenv/bin/activate

# 2-1. 가상환경 활성화 (Windows cmd)
myenvScriptsactivate.bat

# 3. 외부 패키지 설치 및 의존성 리스트 내보내기
pip install requests pandas
pip freeze &gt; requirements.txt
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>import</code> 시 <code>ModuleNotFoundError</code>가 발생하는 원인은?</strong>
A. 파이썬이 모듈을 검색하는 경로 리스트인 <code>sys.path</code> 상에 해당 모듈이 위치한 디렉토리가 포함되어 있지 않거나 패키지가 설치되지 않았을 때 발생합니다.</p>
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
  '파일 입출력(File I/O)과 컨텍스트 매니저(with 문)',
  '텍스트 및 바이너리 파일을 읽고 쓰는 open() 함수, 리소스 자동 마감을 보장하는 with 컨텍스트 매니저 및 현대적인 pathlib 모듈을 배웁니다.',
  '디스크 상의 텍스트 및 바이너리 파일을 읽고 쓰는 **파일 입출력(File I/O)**과 리소스를 안전하게 관리하는 **with 컨텍스트 매니저**를 다룹니다.

---

## 1. 파일 입출력 용어 사전 (Glossary)

- **Context Manager**: `with` 구문과 함께 사용되어 작업 시작 시 `__enter__()`, 작업 종료 시 `__exit__()`를 자동 실행해 리소스를 마감해 주는 객체입니다.
- **File Modes**: `''r''`(읽기 전용), `''w''`(덮어쓰기 생성), `''a''`(끝에 덧붙이기), `''b''`(바이너리 모드).
- **pathlib**: 파이썬 3.4+에 도입된 파일 경로를 문자열이 아닌 객체(Object)로 다루는 객체지향 경로 조작 표준 모듈입니다.

---

## 2. 안전한 파일 입출력 및 pathlib 코드 예제

```python
from pathlib import Path

# 1. pathlib을 이용한 파일 및 디렉토리 관리
base_dir = Path("./data_logs")
base_dir.mkdir(exist_ok=True) # 폴더 생성

log_file = base_dir / "system.log"

# 2. with 컨텍스트 매니저 파일 쓰기
with open(log_file, "w", encoding="utf-8") as f:
    f.write("2026-08-02 INFO: 시스템 가동 시작
")
    f.write("2026-08-02 SUCCESS: 데이터베이스 연결 완료
")

# 3. 파일 한 줄씩 읽기
with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        print(f"[읽은 로그]: {line.strip()}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파일을 다룬 후 왜 반드시 `close()`를 해주어야 하나요?**
A. `close()`를 하지 않으면 메모리 버퍼에 남아있는 데이터가 디스크에 즉시 기록되지 않거나, 파일 락(Lock) 자원이 유지되어 다른 프로세스가 파일에 접근할 수 없게 됩니다. `with` 문을 쓰면 자동으로 `close()` 됩니다.
',
  '<p>디스크 상의 텍스트 및 바이너리 파일을 읽고 쓰는 **파일 입출력(File I/O)**과 리소스를 안전하게 관리하는 <strong>with 컨텍스트 매니저</strong>를 다룹니다.</p>
<hr>
<h2>1. 파일 입출력 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Context Manager</strong>: <code>with</code> 구문과 함께 사용되어 작업 시작 시 <code>__enter__()</code>, 작업 종료 시 <code>__exit__()</code>를 자동 실행해 리소스를 마감해 주는 객체입니다.</li>
<li><strong>File Modes</strong>: <code>&#39;r&#39;</code>(읽기 전용), <code>&#39;w&#39;</code>(덮어쓰기 생성), <code>&#39;a&#39;</code>(끝에 덧붙이기), <code>&#39;b&#39;</code>(바이너리 모드).</li>
<li><strong>pathlib</strong>: 파이썬 3.4+에 도입된 파일 경로를 문자열이 아닌 객체(Object)로 다루는 객체지향 경로 조작 표준 모듈입니다.</li>
</ul>
<hr>
<h2>2. 안전한 파일 입출력 및 pathlib 코드 예제</h2>
<pre><code class="language-python">from pathlib import Path

# 1. pathlib을 이용한 파일 및 디렉토리 관리
base_dir = Path(&quot;./data_logs&quot;)
base_dir.mkdir(exist_ok=True) # 폴더 생성

log_file = base_dir / &quot;system.log&quot;

# 2. with 컨텍스트 매니저 파일 쓰기
with open(log_file, &quot;w&quot;, encoding=&quot;utf-8&quot;) as f:
    f.write(&quot;2026-08-02 INFO: 시스템 가동 시작
&quot;)
    f.write(&quot;2026-08-02 SUCCESS: 데이터베이스 연결 완료
&quot;)

# 3. 파일 한 줄씩 읽기
with open(log_file, &quot;r&quot;, encoding=&quot;utf-8&quot;) as f:
    for line in f:
        print(f&quot;[읽은 로그]: {line.strip()}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파일을 다룬 후 왜 반드시 <code>close()</code>를 해주어야 하나요?</strong>
A. <code>close()</code>를 하지 않으면 메모리 버퍼에 남아있는 데이터가 디스크에 즉시 기록되지 않거나, 파일 락(Lock) 자원이 유지되어 다른 프로세스가 파일에 접근할 수 없게 됩니다. <code>with</code> 문을 쓰면 자동으로 <code>close()</code> 됩니다.</p>
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

- **Exception (예외)**: 프로그램 실행 중(Runtime) 발생하는 오류 상태로, 적절히 처리하지 않으면 프로그램이 비정상 종료됩니다.
- **try-except-else-finally**:
  - `try`: 예외가 발생할 가능성이 있는 코드 구역.
  - `except`: 예외가 발생했을 때 실행되는 대응 구역.
  - `else`: 예외가 발생하지 **않았을 때만** 실행되는 구역.
  - `finally`: 예외 발생 여부와 상관없이 **항상 실행**되는 마감 구역.
- **Traceback**: 예외가 발생한 파일, 줄 번호, 호출 스택 경로 정보를 상세히 보여주는 추적 메시지입니다.

---

## 2. 사용자 정의 예외 및 try-except 실습

```python
# 1. Exception 상속 사용자 정의 예외 클래스
class InvalidAgeError(Exception):
    def __init__(self, age, message="나이는 0세 이상이어야 합니다."):
        self.age = age
        self.message = message
        super().__init__(self.message)

# 2. 예외 발생(raise) 및 검증 함수
def register_user(name, age):
    if age < 0:
        raise InvalidAgeError(age, f"잘못된 나이 입력: {age}세")
    print(f"회원 가입 완료: {name} ({age}세)")

# 3. try-except-else-finally 구문 실행
try:
    register_user("홍길동", -5)
except InvalidAgeError as e:
    print(f"[검증 실패]: {e}")
except Exception as e:
    print(f"[기타 예외 발생]: {e}")
else:
    print("성공적으로 회원 가입이 처리되었습니다.")
finally:
    print("회원 가입 프로세스가 마감되었습니다.")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `except Exception:` 과 `except:` 의 차이는 무엇인가요?**
A. 아무 타입도 안 적은 `except:`는 `SystemExit`나 `KeyboardInterrupt`(Ctrl+C) 같은 파이썬 인터프리터 종료 신호까지 포획해 버리므로 프로그램 강제 종료가 안 될 수 있습니다. 일반 에러 포획 시에는 반드시 `except Exception:`을 쓰는 것이 권장됩니다.
',
  '<p>프로그램 실행 중 예기치 못한 에러가 발생해도 프로그램이 멈추지 않도록 안전하게 포획하는 **예외 처리(Exception Handling)**를 학습합니다.</p>
<hr>
<h2>1. 예외 처리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Exception (예외)</strong>: 프로그램 실행 중(Runtime) 발생하는 오류 상태로, 적절히 처리하지 않으면 프로그램이 비정상 종료됩니다.</li>
<li><strong>try-except-else-finally</strong>:<ul>
<li><code>try</code>: 예외가 발생할 가능성이 있는 코드 구역.</li>
<li><code>except</code>: 예외가 발생했을 때 실행되는 대응 구역.</li>
<li><code>else</code>: 예외가 발생하지 <strong>않았을 때만</strong> 실행되는 구역.</li>
<li><code>finally</code>: 예외 발생 여부와 상관없이 <strong>항상 실행</strong>되는 마감 구역.</li>
</ul>
</li>
<li><strong>Traceback</strong>: 예외가 발생한 파일, 줄 번호, 호출 스택 경로 정보를 상세히 보여주는 추적 메시지입니다.</li>
</ul>
<hr>
<h2>2. 사용자 정의 예외 및 try-except 실습</h2>
<pre><code class="language-python"># 1. Exception 상속 사용자 정의 예외 클래스
class InvalidAgeError(Exception):
    def __init__(self, age, message=&quot;나이는 0세 이상이어야 합니다.&quot;):
        self.age = age
        self.message = message
        super().__init__(self.message)

# 2. 예외 발생(raise) 및 검증 함수
def register_user(name, age):
    if age &lt; 0:
        raise InvalidAgeError(age, f&quot;잘못된 나이 입력: {age}세&quot;)
    print(f&quot;회원 가입 완료: {name} ({age}세)&quot;)

# 3. try-except-else-finally 구문 실행
try:
    register_user(&quot;홍길동&quot;, -5)
except InvalidAgeError as e:
    print(f&quot;[검증 실패]: {e}&quot;)
except Exception as e:
    print(f&quot;[기타 예외 발생]: {e}&quot;)
else:
    print(&quot;성공적으로 회원 가입이 처리되었습니다.&quot;)
finally:
    print(&quot;회원 가입 프로세스가 마감되었습니다.&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>except Exception:</code> 과 <code>except:</code> 의 차이는 무엇인가요?</strong>
A. 아무 타입도 안 적은 <code>except:</code>는 <code>SystemExit</code>나 <code>KeyboardInterrupt</code>(Ctrl+C) 같은 파이썬 인터프리터 종료 신호까지 포획해 버리므로 프로그램 강제 종료가 안 될 수 있습니다. 일반 에러 포획 시에는 반드시 <code>except Exception:</code>을 쓰는 것이 권장됩니다.</p>
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
