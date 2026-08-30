-- Full Python Mega Lessons Part 5

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch17-functional-programming-map-filter-reduce',
  '파이썬 함수형 프로그래밍 기법 (map, filter, reduce, functools)',
  '부작용(Side Effect)이 없는 순수 함수 기반의 파이썬 함수형 프로그래밍(map, filter, reduce, functools.lru_cache) 기법을 학습합니다.',
  '부작용(Side Effect)을 줄이고 불변성 데이터를 가공하는 **파이썬 함수형 프로그래밍(Functional Programming)** 기법을 다룹니다.

---

## 1. 함수형 프로그래밍 용어 사전 (Glossary)

- **Pure Function (순수 함수)**: 동일한 입력을 주면 항상 동일한 출력을 반환하고 외부 상태를 변경하지 않는 함수입니다.
- **`map(func, iterable)`**: 이터러블의 모든 요소에 함수를 적용하여 변환해 주는 고차 함수입니다.
- **`filter(func, iterable)`**: 조건 함수 결과가 `True`인 요소들만 걸러내는 고차 함수입니다.
- **`functools.lru_cache`**: 함수의 리턴 결과를 메모리에 캐싱(Memoization)하여 재호출 시 속도를 1000배 이상 높이는 데코레이터입니다.

---

## 2. `functools.lru_cache` 메모이제이션 실습

```python
from functools import lru_cache, reduce

# 1. LRU 캐시 적용 피보나치 수열 (중복 연산 방지)
@lru_cache(maxsize=128)
def fibonacci(n: int) -> int:
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(f"피보나치 50번째 값: {fibonacci(50)}")

# 2. reduce() 곱셈 누적 집계
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
print(f"요소 전체 곱: {product}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `map()`과 리스트 컴프리헨션 중 어느 것을 쓰는 것이 좋은가요?**
A. 파이썬에서는 가독성이 높고 파이썬다운(Pythonic) **리스트 컴프리헨션** 사용이 권장됩니다.
',
  '<p>부작용(Side Effect)을 줄이고 불변성 데이터를 가공하는 <strong>파이썬 함수형 프로그래밍(Functional Programming)</strong> 기법을 다룹니다.</p>
<hr>
<h2>1. 함수형 프로그래밍 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Pure Function (순수 함수)</strong>: 동일한 입력을 주면 항상 동일한 출력을 반환하고 외부 상태를 변경하지 않는 함수입니다.</li>
<li><strong><code>map(func, iterable)</code></strong>: 이터러블의 모든 요소에 함수를 적용하여 변환해 주는 고차 함수입니다.</li>
<li><strong><code>filter(func, iterable)</code></strong>: 조건 함수 결과가 <code>True</code>인 요소들만 걸러내는 고차 함수입니다.</li>
<li><strong><code>functools.lru_cache</code></strong>: 함수의 리턴 결과를 메모리에 캐싱(Memoization)하여 재호출 시 속도를 1000배 이상 높이는 데코레이터입니다.</li>
</ul>
<hr>
<h2>2. <code>functools.lru_cache</code> 메모이제이션 실습</h2>
<pre><code class="language-python">from functools import lru_cache, reduce

# 1. LRU 캐시 적용 피보나치 수열 (중복 연산 방지)
@lru_cache(maxsize=128)
def fibonacci(n: int) -&gt; int:
    if n &lt; 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(f&quot;피보나치 50번째 값: {fibonacci(50)}&quot;)

# 2. reduce() 곱셈 누적 집계
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
print(f&quot;요소 전체 곱: {product}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>map()</code>과 리스트 컴프리헨션 중 어느 것을 쓰는 것이 좋은가요?</strong>
A. 파이썬에서는 가독성이 높고 파이썬다운(Pythonic) <strong>리스트 컴프리헨션</strong> 사용이 권장됩니다.</p>
',
  'published',
  '파이썬 함수형 프로그래밍 - map, filter, reduce, functools & lru_cache',
  '고차 함수 map(), filter(), functools.reduce(), partial(), 그리고 메모이제이션 성능을 극대화하는 lru_cache 데코레이터를 배웁니다.',
  17,
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
  'ch18-python-c-extension-and-ctypes',
  '파이썬 C 연동 및 ctypes, cffi 확장 모듈',
  '파이썬의 실행 속도 한계를 극복하기 위해 C 언어로 작성된 콤파일 라이브러리(.so/.dll)를 ctypes 모듈로 직접 불러와 호출하는 기법을 배웁니다.',
  '파이썬의 편리함과 C 언어의 연산 속도를 결합하여 **C 언어 라이브러리(`.so`, `.dll`)를 파이썬에서 바인딩 호출하는 `ctypes` 모듈**을 다룹니다.

---

## 1. C 연동 핵심 용어 사전 (Glossary)

- **ctypes**: 파이썬 표준 라이브러리로 제공되는 C 언어 호환 래퍼 모듈로, C 공유 라이브러리를 직접 로드하고 파이썬 C 타입을 전달할 수 있습니다.
- **Shared Library (공유 라이브러리)**: C 컴파일러로 빌드된 `.so` (Linux/macOS) 또는 `.dll` (Windows) 라이브러리 파일입니다.

---

## 2. ctypes C 라이브러리 로드 예제

```python
import ctypes
import sys

# 시스템 표준 C 라이브러리(libc) 로드
if sys.platform.startswith("win"):
    libc = ctypes.cdll.msvcrt
else:
    libc = ctypes.cdll.LoadLibrary("libc.dylib" if sys.platform == "darwin" else "libc.so.6")

# C 함수 호출 (printf)
libc.printf(b"Hello from C Library via Python ctypes!
")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬 속도를 수십 배 올릴 수 있는 파이썬 C 확장 도구들에는 무엇이 있나요?**
A. `ctypes`, `cffi`, `Cython`, 그리고 Rust 언어로 파이썬 모듈을 만드는 `PyO3`가 각광받고 있습니다.
',
  '<p>파이썬의 편리함과 C 언어의 연산 속도를 결합하여 <strong>C 언어 라이브러리(<code>.so</code>, <code>.dll</code>)를 파이썬에서 바인딩 호출하는 <code>ctypes</code> 모듈</strong>을 다룹니다.</p>
<hr>
<h2>1. C 연동 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>ctypes</strong>: 파이썬 표준 라이브러리로 제공되는 C 언어 호환 래퍼 모듈로, C 공유 라이브러리를 직접 로드하고 파이썬 C 타입을 전달할 수 있습니다.</li>
<li><strong>Shared Library (공유 라이브러리)</strong>: C 컴파일러로 빌드된 <code>.so</code> (Linux/macOS) 또는 <code>.dll</code> (Windows) 라이브러리 파일입니다.</li>
</ul>
<hr>
<h2>2. ctypes C 라이브러리 로드 예제</h2>
<pre><code class="language-python">import ctypes
import sys

# 시스템 표준 C 라이브러리(libc) 로드
if sys.platform.startswith(&quot;win&quot;):
    libc = ctypes.cdll.msvcrt
else:
    libc = ctypes.cdll.LoadLibrary(&quot;libc.dylib&quot; if sys.platform == &quot;darwin&quot; else &quot;libc.so.6&quot;)

# C 함수 호출 (printf)
libc.printf(b&quot;Hello from C Library via Python ctypes!
&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬 속도를 수십 배 올릴 수 있는 파이썬 C 확장 도구들에는 무엇이 있나요?</strong>
A. <code>ctypes</code>, <code>cffi</code>, <code>Cython</code>, 그리고 Rust 언어로 파이썬 모듈을 만드는 <code>PyO3</code>가 각광받고 있습니다.</p>
',
  'published',
  '파이썬 C 연동 - ctypes, C-API, Shared Library .so/.dll 호출 & 바인딩',
  'C 언어로 작성된 고속 공유 라이브러리(.so/.dll)를 파이썬에서 호출하는 ctypes 모듈, CPython C-API 바인딩 및 연동 기법을 배웁니다.',
  18,
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
  'ch19-python-packaging-distribution-wheel',
  '파이썬 패키징과 PyPI 배포 (pyproject.toml, setuptools, wheel)',
  '직접 작성한 파이썬 모듈을 전 세계 개발자들이 pip install로 사용할 수 있도록 pyproject.toml과 build, twine을 이용해 PyPI에 배포하는 과정을 학습합니다.',
  '개발한 파이썬 오픈소스 패키지를 표준 규격(**`pyproject.toml`**)으로 패키징하여 **PyPI(Python Package Index)**에 등록 배포하는 과정을 다룹니다.

---

## 1. 패키징 용어 사전 (Glossary)

- **PyPI (Python Package Index)**: 전 세계 파이썬 오픈소스 라이브러리들이 등록되어 있는 공식 패키지 저장소입니다.
- **pyproject.toml**: PEP 518/PEP 621 규격에 맞춰 파이썬 패키지의 메타데이터와 빌드 도구를 정의하는 표준 패키징 파일입니다.
- **Wheel (`.whl`)**: 소스코드 컴파일 과정 없이 즉시 파이썬에 설치 가능한 컴파일 완료 표준 바이너리 패키지 포맷입니다.
- **twine**: 빌드된 Wheel 패키지를 PyPI 서버로 검증 및 안전하게 업로드해 주는 보안 도구입니다.

---

## 2. pyproject.toml 설정 및 빌드/배포 명령어

```toml
# pyproject.toml 설정 예시
[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"

[project]
name = "davhave-utils"
version = "0.1.0"
description = "DAVHAVE 전용 파이썬 라이브러리"
authors = [{ name = "DAVHAVE", email = "dev@davhave.com" }]
dependencies = ["requests>=2.28.0"]
```

```bash
# 1. 빌드 도구 설치 및 휠 패키지 빌드
pip install build twine
python -m build

# 2. PyPI 저장소로 테스트 패키지 업로드
python -m twine upload --repository testpypi dist/*
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `pip install -e .` (Editable Mode)란 무엇인가요?**
A. 패키지를 개발하는 동안 코드를 수정할 때마다 재설치할 필요 없이, 소스 코드 변경 사항이 현 환경에 즉시 반영되도록 심볼릭 링크 형태로 설치하는 개발용 옵션입니다.
',
  '<p>개발한 파이썬 오픈소스 패키지를 표준 규격(<strong><code>pyproject.toml</code></strong>)으로 패키징하여 **PyPI(Python Package Index)**에 등록 배포하는 과정을 다룹니다.</p>
<hr>
<h2>1. 패키징 용어 사전 (Glossary)</h2>
<ul>
<li><strong>PyPI (Python Package Index)</strong>: 전 세계 파이썬 오픈소스 라이브러리들이 등록되어 있는 공식 패키지 저장소입니다.</li>
<li><strong>pyproject.toml</strong>: PEP 518/PEP 621 규격에 맞춰 파이썬 패키지의 메타데이터와 빌드 도구를 정의하는 표준 패키징 파일입니다.</li>
<li><strong>Wheel (<code>.whl</code>)</strong>: 소스코드 컴파일 과정 없이 즉시 파이썬에 설치 가능한 컴파일 완료 표준 바이너리 패키지 포맷입니다.</li>
<li><strong>twine</strong>: 빌드된 Wheel 패키지를 PyPI 서버로 검증 및 안전하게 업로드해 주는 보안 도구입니다.</li>
</ul>
<hr>
<h2>2. pyproject.toml 설정 및 빌드/배포 명령어</h2>
<pre><code class="language-toml"># pyproject.toml 설정 예시
[build-system]
requires = [&quot;setuptools&gt;=61.0&quot;]
build-backend = &quot;setuptools.build_meta&quot;

[project]
name = &quot;davhave-utils&quot;
version = &quot;0.1.0&quot;
description = &quot;DAVHAVE 전용 파이썬 라이브러리&quot;
authors = [{ name = &quot;DAVHAVE&quot;, email = &quot;dev@davhave.com&quot; }]
dependencies = [&quot;requests&gt;=2.28.0&quot;]
</code></pre>
<pre><code class="language-bash"># 1. 빌드 도구 설치 및 휠 패키지 빌드
pip install build twine
python -m build

# 2. PyPI 저장소로 테스트 패키지 업로드
python -m twine upload --repository testpypi dist/*
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>pip install -e .</code> (Editable Mode)란 무엇인가요?</strong>
A. 패키지를 개발하는 동안 코드를 수정할 때마다 재설치할 필요 없이, 소스 코드 변경 사항이 현 환경에 즉시 반영되도록 심볼릭 링크 형태로 설치하는 개발용 옵션입니다.</p>
',
  'published',
  '파이썬 패키징 - pyproject.toml, setuptools, wheel & PyPI twine 배포',
  '내가 만든 파이썬 패키지를 pyproject.toml 스펙으로 패키징하고 wheel 빌드 후 PyPI 전 세계 패키지 저장소에 twine으로 오픈소스 배포하는 법을 배웁니다.',
  19,
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
  'ch20-python-final-project-mini-game-and-apps',
  '파이썬 실전 종합 프로젝트: 터틀 그래픽 미니 게임 & GUI 관리 앱',
  '파이썬의 기초 문법, 객체지향, 파일 처리, tkinter GUI 기술을 종합하여 터틀 그래픽 미니 게임과 실전 데이터 관리 애플리케이션을 완성합니다.',
  '배운 파이썬의 모든 핵심 기초 문법, 자료구조, 객체지향 설계, 파일 처리 및 tkinter GUI 기술을 통합하여 **실전 파이썬 종합 프로젝트**를 완성합니다.

---

## 1. 프로젝트 아키텍처 용어 사전 (Glossary)

- **Turtle Graphics**: 파이썬 기본 모듈로 제공되는 직관적인 교육용 2D 그래픽 & 미니 게임 구현 라이브러리입니다.
- **Persistence (지속성)**: 프로그램이 종료되어도 데이터를 잃지 않고 JSON이나 파일로 영구 보관하는 성질입니다.

---

## 2. 터틀 그래픽 미니 슈팅 게임 코드

```python
import turtle

def run_turtle_game():
    screen = turtle.Screen()
    screen.title("DAVHAVE 터틀 미니 게임")
    screen.bgcolor("black")
    screen.setup(width=600, height=600)

    player = turtle.Turtle()
    player.shape("turtle")
    player.color("cyan")
    player.penup()
    player.speed(0)

    def move_left(): player.setx(player.xcor() - 20)
    def move_right(): player.setx(player.xcor() + 20)

    screen.listen()
    screen.onkey(move_left, "Left")
    screen.onkey(move_right, "Right")

    print("터틀 게임이 가동되었습니다. 화살표 키로 조작하세요!")

if __name__ == "__main__":
    run_turtle_game()
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 완벽하게 만든 파이썬 프로그램을 실행 파일(`.exe` 또는 `.app`)로 상용 포장하려면?**
A. **`PyInstaller`** 라이브러리를 활용하여 `pyinstaller --onefile --noconsole main.py` 명령을 실행하면, 파이썬이 설치되지 않은 다른 PC에서도 더블 클릭으로 바로 구동되는 단일 실행 파일이 자동 생성됩니다.
',
  '<p>배운 파이썬의 모든 핵심 기초 문법, 자료구조, 객체지향 설계, 파일 처리 및 tkinter GUI 기술을 통합하여 <strong>실전 파이썬 종합 프로젝트</strong>를 완성합니다.</p>
<hr>
<h2>1. 프로젝트 아키텍처 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Turtle Graphics</strong>: 파이썬 기본 모듈로 제공되는 직관적인 교육용 2D 그래픽 &amp; 미니 게임 구현 라이브러리입니다.</li>
<li><strong>Persistence (지속성)</strong>: 프로그램이 종료되어도 데이터를 잃지 않고 JSON이나 파일로 영구 보관하는 성질입니다.</li>
</ul>
<hr>
<h2>2. 터틀 그래픽 미니 슈팅 게임 코드</h2>
<pre><code class="language-python">import turtle

def run_turtle_game():
    screen = turtle.Screen()
    screen.title(&quot;DAVHAVE 터틀 미니 게임&quot;)
    screen.bgcolor(&quot;black&quot;)
    screen.setup(width=600, height=600)

    player = turtle.Turtle()
    player.shape(&quot;turtle&quot;)
    player.color(&quot;cyan&quot;)
    player.penup()
    player.speed(0)

    def move_left(): player.setx(player.xcor() - 20)
    def move_right(): player.setx(player.xcor() + 20)

    screen.listen()
    screen.onkey(move_left, &quot;Left&quot;)
    screen.onkey(move_right, &quot;Right&quot;)

    print(&quot;터틀 게임이 가동되었습니다. 화살표 키로 조작하세요!&quot;)

if __name__ == &quot;__main__&quot;:
    run_turtle_game()
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 완벽하게 만든 파이썬 프로그램을 실행 파일(<code>.exe</code> 또는 <code>.app</code>)로 상용 포장하려면?</strong>
A. <strong><code>PyInstaller</code></strong> 라이브러리를 활용하여 <code>pyinstaller --onefile --noconsole main.py</code> 명령을 실행하면, 파이썬이 설치되지 않은 다른 PC에서도 더블 클릭으로 바로 구동되는 단일 실행 파일이 자동 생성됩니다.</p>
',
  'published',
  '파이썬 실전 프로젝트 - Turtle 터틀 그래픽 미니 게임 & GUI 관리 앱',
  '배운 파이썬 기술(자료구조, OOP, 파일 I/O, tkinter, Turtle)을 총동원하여 터틀 그래픽 피하기 미니 게임과 실전 GUI 도서/회원 관리 애플리케이션을 구현합니다.',
  20,
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
