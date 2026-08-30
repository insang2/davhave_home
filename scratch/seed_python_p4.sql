-- Full Python Lessons Part 4

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

## 1. tkinter GUI 용어 사전 (Glossary)

- **tkinter**: Tcl/Tk GUI 툴킷을 파이썬에서 사용할 수 있도록 래핑한 파이썬 표준 GUI 모듈입니다.
- **Widget (위젯)**: 화면에 표시되는 개별 GUI 구성 부품입니다. (`Label`, `Button`, `Entry`, `Text`, `Checkbutton`)
- **Geometry Manager**: 위젯을 창에 배치하는 레이아웃 매니저입니다. (`pack()`: 상하좌우 순차배치, `grid()`: 격자 행렬 배치, `place()`: 절대좌표 배치)

---

## 2. tkinter 간단한 GUI 계산기 화면 예제

```python
import tkinter as tk
from tkinter import messagebox

def calculate():
    try:
        n1 = float(entry1.get())
        n2 = float(entry2.get())
        result_label.config(text=f"결과: {n1 + n2}")
    except ValueError:
        messagebox.showerror("입력 오류", "올바른 숫자를 입력하세요!")

# 메인 윈도우 생성
root = tk.Tk()
root.title("DAVHAVE 계산기")
root.geometry("300 x 180")

# 위젯 배치 (grid 레이아웃)
tk.Label(root, text="숫자 1:").grid(row=0, column=0, padx=10, pady=10)
entry1 = tk.Entry(root)
entry1.grid(row=0, column=1)

tk.Label(root, text="숫자 2:").grid(row=1, column=0, padx=10, pady=10)
entry2 = tk.Entry(root)
entry2.grid(row=1, column=1)

calc_btn = tk.Button(root, text="더하기 연산", command=calculate)
calc_btn.grid(row=2, column=0, columnspan=2, pady=10)

result_label = tk.Label(root, text="결과: ", font=("Arial", 12, "bold"))
result_label.grid(row=3, column=0, columnspan=2)

root.mainloop() # GUI 이벤트 루프 시작
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `root.mainloop()` 구문은 무슨 역할을 하나요?**
A. 사용자의 마우스 클릭, 키보드 입력 등 창에서 일어나는 모든 이벤트(Event)를 감지하기 위해 무한 루프를 돌며 GUI 창이 닫히지 않고 계속 유지되도록 하는 엔진 구문입니다.
',
  '<p>파이썬 표준 라이브러리로 기본 탑재되어 있는 그래픽 유저 인터페이스 모듈인 <strong>tkinter</strong>를 이용하여 데스크톱 GUI 프로그램 개발을 학습합니다.</p>
<hr>
<h2>1. tkinter GUI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>tkinter</strong>: Tcl/Tk GUI 툴킷을 파이썬에서 사용할 수 있도록 래핑한 파이썬 표준 GUI 모듈입니다.</li>
<li><strong>Widget (위젯)</strong>: 화면에 표시되는 개별 GUI 구성 부품입니다. (<code>Label</code>, <code>Button</code>, <code>Entry</code>, <code>Text</code>, <code>Checkbutton</code>)</li>
<li><strong>Geometry Manager</strong>: 위젯을 창에 배치하는 레이아웃 매니저입니다. (<code>pack()</code>: 상하좌우 순차배치, <code>grid()</code>: 격자 행렬 배치, <code>place()</code>: 절대좌표 배치)</li>
</ul>
<hr>
<h2>2. tkinter 간단한 GUI 계산기 화면 예제</h2>
<pre><code class="language-python">import tkinter as tk
from tkinter import messagebox

def calculate():
    try:
        n1 = float(entry1.get())
        n2 = float(entry2.get())
        result_label.config(text=f&quot;결과: {n1 + n2}&quot;)
    except ValueError:
        messagebox.showerror(&quot;입력 오류&quot;, &quot;올바른 숫자를 입력하세요!&quot;)

# 메인 윈도우 생성
root = tk.Tk()
root.title(&quot;DAVHAVE 계산기&quot;)
root.geometry(&quot;300 x 180&quot;)

# 위젯 배치 (grid 레이아웃)
tk.Label(root, text=&quot;숫자 1:&quot;).grid(row=0, column=0, padx=10, pady=10)
entry1 = tk.Entry(root)
entry1.grid(row=0, column=1)

tk.Label(root, text=&quot;숫자 2:&quot;).grid(row=1, column=0, padx=10, pady=10)
entry2 = tk.Entry(root)
entry2.grid(row=1, column=1)

calc_btn = tk.Button(root, text=&quot;더하기 연산&quot;, command=calculate)
calc_btn.grid(row=2, column=0, columnspan=2, pady=10)

result_label = tk.Label(root, text=&quot;결과: &quot;, font=(&quot;Arial&quot;, 12, &quot;bold&quot;))
result_label.grid(row=3, column=0, columnspan=2)

root.mainloop() # GUI 이벤트 루프 시작
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>root.mainloop()</code> 구문은 무슨 역할을 하나요?</strong>
A. 사용자의 마우스 클릭, 키보드 입력 등 창에서 일어나는 모든 이벤트(Event)를 감지하기 위해 무한 루프를 돌며 GUI 창이 닫히지 않고 계속 유지되도록 하는 엔진 구문입니다.</p>
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
  '여러 작업을 동시에 동시 실행(Concurrency)하거나 병렬 처리(Parallelism)하여 성능을 극대화하는 **threading, multiprocessing, asyncio** 모듈을 다룹니다.

---

## 1. 동시성 프로그래밍 용어 사전 (Glossary)

- **I/O Bound vs CPU Bound**: 웹 요청/파일 읽기처럼 입출력 대기가 많은 작업(I/O Bound) vs 연산량이 엄청난 수치 계산 작업(CPU Bound).
- **threading**: 단일 프로세스 내에서 여러 제어 흐름을 가져가며, I/O Bound 작업의 대기 시간을 줄이기에 최적화된 모듈입니다.
- **multiprocessing**: GIL 제약을 완전히 극복하기 위해 별도의 파이썬 프로세스(Process)들을 새로 띄워 멀티코어 CPU 병렬 계산을 수행하는 모듈입니다.
- **asyncio (async/await)**: 단일 스레드 상에서 이벤트 루프(Event Loop)를 이용해 비동기(Asynchronous) I/O 작업을 처리하는 파이썬 표준 프레임워크입니다.

---

## 2. asyncio 비동기 웹 작업 요청 예제

```python
import asyncio
import time

# 비동기 함수 정의 (async def)
async def fetch_data(task_id, delay):
    print(f"[작업 {task_id}] 데이터 요청 시작...")
    await asyncio.sleep(delay) # Non-blocking 비동기 대기
    print(f"[작업 {task_id}] {delay}초 후 응답 완료!")
    return f"결과-{task_id}"

async def main():
    start = time.time()
    # 3개의 비동기 작업을 동시에 코루틴으로 실행
    results = await asyncio.gather(
        fetch_data(1, 2),
        fetch_data(2, 3),
        fetch_data(3, 1)
    )
    end = time.time()
    print(f"전체 수집 결과: {results}")
    print(f"총 소요 시간: {end - start:.2f}초 (동기 실행 시 6초 대비 대폭 단축!)")

# asyncio 이벤트 루프 구동
asyncio.run(main())
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. CPU 연산이 많은 작업에 왜 `threading`을 쓰면 성능이 안 나오나요?**
A. CPython의 **GIL(Global Interpreter Lock)** 제약 때문에 스레드가 아무리 많아도 CPU 연산 코드는 한 순간에 오직 1개 스레드만 실행할 수 있기 때문입니다. CPU 연산 작업에는 반드시 `multiprocessing`을 써야 합니다.
',
  '<p>여러 작업을 동시에 동시 실행(Concurrency)하거나 병렬 처리(Parallelism)하여 성능을 극대화하는 <strong>threading, multiprocessing, asyncio</strong> 모듈을 다룹니다.</p>
<hr>
<h2>1. 동시성 프로그래밍 용어 사전 (Glossary)</h2>
<ul>
<li><strong>I/O Bound vs CPU Bound</strong>: 웹 요청/파일 읽기처럼 입출력 대기가 많은 작업(I/O Bound) vs 연산량이 엄청난 수치 계산 작업(CPU Bound).</li>
<li><strong>threading</strong>: 단일 프로세스 내에서 여러 제어 흐름을 가져가며, I/O Bound 작업의 대기 시간을 줄이기에 최적화된 모듈입니다.</li>
<li><strong>multiprocessing</strong>: GIL 제약을 완전히 극복하기 위해 별도의 파이썬 프로세스(Process)들을 새로 띄워 멀티코어 CPU 병렬 계산을 수행하는 모듈입니다.</li>
<li><strong>asyncio (async/await)</strong>: 단일 스레드 상에서 이벤트 루프(Event Loop)를 이용해 비동기(Asynchronous) I/O 작업을 처리하는 파이썬 표준 프레임워크입니다.</li>
</ul>
<hr>
<h2>2. asyncio 비동기 웹 작업 요청 예제</h2>
<pre><code class="language-python">import asyncio
import time

# 비동기 함수 정의 (async def)
async def fetch_data(task_id, delay):
    print(f&quot;[작업 {task_id}] 데이터 요청 시작...&quot;)
    await asyncio.sleep(delay) # Non-blocking 비동기 대기
    print(f&quot;[작업 {task_id}] {delay}초 후 응답 완료!&quot;)
    return f&quot;결과-{task_id}&quot;

async def main():
    start = time.time()
    # 3개의 비동기 작업을 동시에 코루틴으로 실행
    results = await asyncio.gather(
        fetch_data(1, 2),
        fetch_data(2, 3),
        fetch_data(3, 1)
    )
    end = time.time()
    print(f&quot;전체 수집 결과: {results}&quot;)
    print(f&quot;총 소요 시간: {end - start:.2f}초 (동기 실행 시 6초 대비 대폭 단축!)&quot;)

# asyncio 이벤트 루프 구동
asyncio.run(main())
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. CPU 연산이 많은 작업에 왜 <code>threading</code>을 쓰면 성능이 안 나오나요?</strong>
A. CPython의 <strong>GIL(Global Interpreter Lock)</strong> 제약 때문에 스레드가 아무리 많아도 CPU 연산 코드는 한 순간에 오직 1개 스레드만 실행할 수 있기 때문입니다. CPU 연산 작업에는 반드시 <code>multiprocessing</code>을 써야 합니다.</p>
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
  '웹 서버와 HTTP 통신을 주고받는 **`requests`** 모듈과 웹 페이지의 HTML 구조를 분석하여 필요한 정보를 크롤링하는 **`BeautifulSoup4`**를 학습합니다.

---

## 1. 웹 스크래핑 용어 사전 (Glossary)

- **HTTP Status Code**: 서번 응답 상태 코드입니다. (`200 OK`: 성공, `404 Not Found`: 페이지 없음, `500 Internal Error`: 서버 에러)
- **User-Agent**: 웹 요청을 보내는 주체가 브라우저인지 크롤링 스크립트인지 식별하는 HTTP 요청 헤더 정보입니다.
- **BeautifulSoup4 (bs4)**: HTML/XML 문서 텍스트를 파싱하여 DOM 트리 구조로 탐색하고 추출할 수 있게 돕는 파이썬 크롤링 대표 패키지입니다.

---

## 2. requests & BeautifulSoup4 크롤링 예제

```python
import requests
from bs4 import BeautifulSoup

# 크롤링 대상 URL 및 User-Agent 헤더 설정
url = "https://news.ycombinator.com/"
headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"}

try:
    response = requests.get(url, headers=headers, timeout=5)
    response.raise_for_status() # HTTP 200 OK 검증

    # BeautifulSoup HTML 파싱
    soup = BeautifulSoup(response.text, "html.parser")
    
    # CSS 셀렉터로 뉴스 기사 제목 추출
    titles = soup.select(".titleline > a")
    
    print(f"=== [해커뉴스 실시간 헤드라인 Top {len(titles[:5])}] ===")
    for idx, title in enumerate(titles[:5], start=1):
        print(f"{idx}. {title.text} ({title[''href'']})")

except requests.exceptions.RequestException as e:
    print(f"웹 요청 오류 발생: {e}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 크롤링 시 차단당하지 않으려면 어떤 점에 유의해야 하나요?**
A. 서버에 무리를 주지 않도록 `time.sleep(1)` 같은 요청 간격을 두고, 올바른 `User-Agent` 헤더를 전달하며, 웹사이트의 `robots.txt` 수집 규약을 준수해야 합니다.
',
  '<p>웹 서버와 HTTP 통신을 주고받는 <strong><code>requests</code></strong> 모듈과 웹 페이지의 HTML 구조를 분석하여 필요한 정보를 크롤링하는 **<code>BeautifulSoup4</code>**를 학습합니다.</p>
<hr>
<h2>1. 웹 스크래핑 용어 사전 (Glossary)</h2>
<ul>
<li><strong>HTTP Status Code</strong>: 서번 응답 상태 코드입니다. (<code>200 OK</code>: 성공, <code>404 Not Found</code>: 페이지 없음, <code>500 Internal Error</code>: 서버 에러)</li>
<li><strong>User-Agent</strong>: 웹 요청을 보내는 주체가 브라우저인지 크롤링 스크립트인지 식별하는 HTTP 요청 헤더 정보입니다.</li>
<li><strong>BeautifulSoup4 (bs4)</strong>: HTML/XML 문서 텍스트를 파싱하여 DOM 트리 구조로 탐색하고 추출할 수 있게 돕는 파이썬 크롤링 대표 패키지입니다.</li>
</ul>
<hr>
<h2>2. requests &amp; BeautifulSoup4 크롤링 예제</h2>
<pre><code class="language-python">import requests
from bs4 import BeautifulSoup

# 크롤링 대상 URL 및 User-Agent 헤더 설정
url = &quot;https://news.ycombinator.com/&quot;
headers = {&quot;User-Agent&quot;: &quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)&quot;}

try:
    response = requests.get(url, headers=headers, timeout=5)
    response.raise_for_status() # HTTP 200 OK 검증

    # BeautifulSoup HTML 파싱
    soup = BeautifulSoup(response.text, &quot;html.parser&quot;)
    
    # CSS 셀렉터로 뉴스 기사 제목 추출
    titles = soup.select(&quot;.titleline &gt; a&quot;)
    
    print(f&quot;=== [해커뉴스 실시간 헤드라인 Top {len(titles[:5])}] ===&quot;)
    for idx, title in enumerate(titles[:5], start=1):
        print(f&quot;{idx}. {title.text} ({title[&#39;href&#39;]})&quot;)

except requests.exceptions.RequestException as e:
    print(f&quot;웹 요청 오류 발생: {e}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 크롤링 시 차단당하지 않으려면 어떤 점에 유의해야 하나요?</strong>
A. 서버에 무리를 주지 않도록 <code>time.sleep(1)</code> 같은 요청 간격을 두고, 올바른 <code>User-Agent</code> 헤더를 전달하며, 웹사이트의 <code>robots.txt</code> 수집 규약을 준수해야 합니다.</p>
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
  'ch16-python-final-project-mini-game-and-apps',
  '파이썬 실전 종합 프로젝트: 터틀 그래픽 미니 게임 & 유틸리티 앱',
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
import random

def run_turtle_game():
    # 1. 화면 스크린 설정
    screen = turtle.Screen()
    screen.title("DAVHAVE 터틀 미니 게임")
    screen.bgcolor("black")
    screen.setup(width=600, height=600)

    # 2. 플레이어 거북이 생성
    player = turtle.Turtle()
    player.shape("turtle")
    player.color("cyan")
    player.penup()
    player.speed(0)

    # 이동 조작 함수
    def move_left(): player.setx(player.xcor() - 20)
    def move_right(): player.setx(player.xcor() + 20)

    # 키보드 이벤트 연결
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
import random

def run_turtle_game():
    # 1. 화면 스크린 설정
    screen = turtle.Screen()
    screen.title(&quot;DAVHAVE 터틀 미니 게임&quot;)
    screen.bgcolor(&quot;black&quot;)
    screen.setup(width=600, height=600)

    # 2. 플레이어 거북이 생성
    player = turtle.Turtle()
    player.shape(&quot;turtle&quot;)
    player.color(&quot;cyan&quot;)
    player.penup()
    player.speed(0)

    # 이동 조작 함수
    def move_left(): player.setx(player.xcor() - 20)
    def move_right(): player.setx(player.xcor() + 20)

    # 키보드 이벤트 연결
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
