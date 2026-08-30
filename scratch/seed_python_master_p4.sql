-- Full Python Master Lessons Part 4

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch13-gui-programming-with-tkinter',
  'tkinter를 활용한 파이썬 데스크톱 GUI 프로그래밍',
  '파이썬에 내장된 표준 GUI 엔진 tkinter를 이용하여 윈도우 그래픽 데스크톱 앱을 만들고 위젯과 레이아웃 매니저(pack, grid)를 배치하는 기법을 배웁니다.',
  '파이썬 표준 라이브러리로 기본 탑재되어 있는 그래픽 유저 인터페이스 모듈인 **tkinter**를 이용하여 데스크톱 GUI 프로그램 개발을 학습합니다.

---

## 1. GUI 핵심 용어 사전 (Glossary)

- **Widget (위젯)**: GUI 화면을 구성하는 시각적 요소 단위입니다. (`Label`, `Button`, `Entry`, `Frame` 등)
- **Layout Manager (레이아웃 매니저)**: 위젯을 창에 어떻게 배치할지 결정하는 알고리즘 매니저입니다. (`pack()`, `grid()`, `place()`)
- **Event-Driven Programming**: 사용자의 마우스 클릭이나 키보드 입력 이벤트를 감지하여 바인딩된 콜백 함수를 실행하는 프로그래밍 방식입니다.

---

## 2. tkinter 간단한 GUI 창 생성 코드

```python
import tkinter as tk
from tkinter import messagebox

def on_click():
    name = entry.get()
    messagebox.showinfo("환영", f"안녕하세요, {name}님! DAVHAVE GUI 앱에 오신 것을 환영합니다.")

# 메인 윈도우 생성
root = tk.Tk()
root.title("DAVHAVE Python GUI")
root.geometry("300x150")

# 위젯 배치
label = tk.Label(root, text="이름을 입력하세요:")
label.pack(pady=5)

entry = tk.Entry(root)
entry.pack(pady=5)

button = tk.Button(root, text="확인", command=on_click)
button.pack(pady=5)

# root.mainloop() # 메인 이벤트 루프 구동
```
',
  '<p>파이썬 표준 라이브러리로 기본 탑재되어 있는 그래픽 유저 인터페이스 모듈인 <strong>tkinter</strong>를 이용하여 데스크톱 GUI 프로그램 개발을 학습합니다.</p>
<hr>
<h2>1. GUI 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Widget (위젯)</strong>: GUI 화면을 구성하는 시각적 요소 단위입니다. (<code>Label</code>, <code>Button</code>, <code>Entry</code>, <code>Frame</code> 등)</li>
<li><strong>Layout Manager (레이아웃 매니저)</strong>: 위젯을 창에 어떻게 배치할지 결정하는 알고리즘 매니저입니다. (<code>pack()</code>, <code>grid()</code>, <code>place()</code>)</li>
<li><strong>Event-Driven Programming</strong>: 사용자의 마우스 클릭이나 키보드 입력 이벤트를 감지하여 바인딩된 콜백 함수를 실행하는 프로그래밍 방식입니다.</li>
</ul>
<hr>
<h2>2. tkinter 간단한 GUI 창 생성 코드</h2>
<pre><code class="language-python">import tkinter as tk
from tkinter import messagebox

def on_click():
    name = entry.get()
    messagebox.showinfo(&quot;환영&quot;, f&quot;안녕하세요, {name}님! DAVHAVE GUI 앱에 오신 것을 환영합니다.&quot;)

# 메인 윈도우 생성
root = tk.Tk()
root.title(&quot;DAVHAVE Python GUI&quot;)
root.geometry(&quot;300x150&quot;)

# 위젯 배치
label = tk.Label(root, text=&quot;이름을 입력하세요:&quot;)
label.pack(pady=5)

entry = tk.Entry(root)
entry.pack(pady=5)

button = tk.Button(root, text=&quot;확인&quot;, command=on_click)
button.pack(pady=5)

# root.mainloop() # 메인 이벤트 루프 구동
</code></pre>
',
  'published',
  '파이썬 GUI 프로그래밍 - tkinter, Tk, Label, Button, Entry, pack/grid',
  '파이썬 표준 GUI 라이브러리 tkinter, 기본 창 생성(Tk), 컴포넌트(Label, Button, Entry, Text), 레이아웃 매니저(pack, grid) 및 버튼 클릭 이벤트를 학습합니다.',
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
  'python',
  'ch14-concurrency-multiprocessing-and-asyncio',
  '파이썬 동시성 프로그래밍: threading, multiprocessing 및 asyncio',
  'GIL(Global Interpreter Lock)의 특성을 이해하고, I/O 대기 시간을 극복하는 threading과 CPU 코어를 100% 활용하는 multiprocessing 및 asyncio 비동기 코딩을 학습합니다.',
  '여러 작업을 동시에 동시 실행(Concurrency)하거나 병렬 처리(Parallelism)하여 성능을 극대화하는 **threading, multiprocessing, asyncio** 모듈을 다룹니다.',
  '<p>여러 작업을 동시에 동시 실행(Concurrency)하거나 병렬 처리(Parallelism)하여 성능을 극대화하는 <strong>threading, multiprocessing, asyncio</strong> 모듈을 다룹니다.</p>
',
  'published',
  '파이썬 동시성 - threading, multiprocessing, GIL 한계 & asyncio async/await',
  'GIL을 우회하는 multiprocessing, I/O 바운드 작업에 적합한 threading, 파이썬 3.7+ async/await 기반 asyncio 비동기 이벤트 루프 프로그래밍을 배웁니다.',
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
  'python',
  'ch15-web-scraping-and-http-requests',
  '웹 스크래핑과 파이썬 HTTP 통신 (requests, BeautifulSoup4)',
  '인터넷 웹사이트의 데이터를 자동으로 수집하는 requests 모듈과 HTML 문서를 파싱하여 필요한 정보를 추출하는 BeautifulSoup4 스크래핑 기법을 배웁니다.',
  '웹 서버와 HTTP 통신을 주고받는 **`requests`** 모듈과 웹 페이지의 HTML 구조를 분석하여 필요한 정보를 크롤링하는 **`BeautifulSoup4`**를 학습합니다.',
  '<p>웹 서버와 HTTP 통신을 주고받는 <strong><code>requests</code></strong> 모듈과 웹 페이지의 HTML 구조를 분석하여 필요한 정보를 크롤링하는 **<code>BeautifulSoup4</code>**를 학습합니다.</p>
',
  'published',
  '파이썬 웹 크롤링 - requests HTTP GET/POST, BeautifulSoup4 파싱 & CSS 셀렉터',
  'HTTP 통신 라이브러리 requests, 응답 상태 코드(200, 404), BeautifulSoup4 HTML DOM 파싱 및 CSS 셀렉터(select)를 활용한 실전 웹 크롤링을 학습합니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch16-python-type-hinting-and-annotations',
  '파이썬 타입 힌팅(Type Hinting)과 typing 모듈',
  '파이썬 코드 가독성과 IDE 자동 완성을 획기적으로 올리는 타입 힌팅(Type Hinting)과 typing 모듈, mypy 정적 분석기를 다룹니다.',
  '동적 타이핑 언어인 파이썬에서 컴파일 타임 및 개발 시점에 변수와 함수 매개변수의 데이터 타입을 명시해 주는 **타입 힌팅(Type Hinting)** 기술을 다룹니다.',
  '<p>동적 타이핑 언어인 파이썬에서 컴파일 타임 및 개발 시점에 변수와 함수 매개변수의 데이터 타입을 명시해 주는 <strong>타입 힌팅(Type Hinting)</strong> 기술을 다룹니다.</p>
',
  'published',
  '파이썬 타입 힌팅 - type annotations, typing 모듈, mypy 정적 분석',
  '파이썬 3.5+ 타입 어노테이션(Type Annotations), typing 모듈(List, Dict, Optional, Union, Callable)과 mypy 정적 타입 검사기 활용법을 학습합니다.',
  16,
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
