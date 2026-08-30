-- Full Python Stdlib Deep Lessons Part 8

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch29-python-stdlib-os-sys-subprocess',
  '파이썬 시스템 제어 표준 라이브러리: os, sys 및 subprocess 프로세스 관리',
  '운영체제 환경 변수와 디렉토리를 조작하는 os, sys 인터프리터 제어 및 외부 쉘 명령어/프로세스를 독립 구동하는 subprocess 라이브러리를 다룹니다.',
  '운영체제 파일 시스템 제어(**`os`**), 인터프리터 파라미터(**`sys`**), 외부 프로세스 실행(**`subprocess`**)을 담당하는 **파이썬 코어 시스템 표준 라이브러리**를 다룹니다.

---

## 1. 시스템 라이브러리 핵심 용어 사전 (Glossary)

- **os Module**: 운영체제 환경 변수(`os.environ`), 디렉토리 생성/삭제(`os.mkdir`, `os.walk`), 파일 경로 조작을 담당하는 모듈입니다.
- **sys Module**: 파이썬 인터프리터가 구동 중인 시스템 정보(`sys.version`), 명령줄 인자(`sys.argv`), 검색 경로(`sys.path`), 강제 종료(`sys.exit()`)를 제어하는 모듈입니다.
- **subprocess Module**: 외부 쉘 커맨드(bash, cmd)나 서드파티 실행 파일을 독립 프로세스로 새로 생성하여 결과를 읽거나 파이프(Pipe)로 통신하는 강력한 모듈입니다.
- **`subprocess.run()` / `Popen`**: 동기적 프로세스 완료를 기다리는 `run()`과 비동기 스트리밍 프로세스 입출력을 제어하는 `Popen` 객체입니다.

---

## 2. os, sys 및 subprocess 실전 제어 코드

```python
import os
import sys
import subprocess

# 1. sys 모듈: 명령줄 인자 확인 및 파이썬 경로
print(f"실행 파이썬 인터프리터 경로: {sys.executable}")
print(f"전달된 명령줄 인자(sys.argv): {sys.argv}")

# 2. os 모듈: 환경 변수 및 현재 작업 디렉토리
current_dir = os.getcwd()
user_home = os.environ.get("HOME", os.environ.get("USERPROFILE"))
print(f"현재 위치: {current_dir} | 사용자 홈: {user_home}")

# 3. subprocess 모듈: 외부 시스템 명령 실행 및 파이프 수집
try:
    # ''ls -la'' (Windows는 ''dir'') 실행하여 결과 capture
    cmd = ["dir"] if sys.platform.startswith("win") else ["ls", "-la"]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    print("=== [subprocess 쉘 명령 실행 결과 상위 3줄] ===")
    print("
".join(result.stdout.splitlines()[:3]))
except subprocess.CalledProcessError as e:
    print(f"명령 실행 실패: {e}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 과거의 `os.system()` 대신 `subprocess.run()`을 써야 하나요?**
A. `os.system()`은 쉘 인젝션(Shell Injection) 보안 취약점에 노출되고 표준 출력/에러를 캡처할 수 없습니다. 반면 `subprocess`는 안전하게 인자 리스트를 넘기고 리턴 코드와 출력을 정밀하게 제어할 수 있습니다.
',
  '<p>운영체제 파일 시스템 제어(<strong><code>os</code></strong>), 인터프리터 파라미터(<strong><code>sys</code></strong>), 외부 프로세스 실행(<strong><code>subprocess</code></strong>)을 담당하는 <strong>파이썬 코어 시스템 표준 라이브러리</strong>를 다룹니다.</p>
<hr>
<h2>1. 시스템 라이브러리 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>os Module</strong>: 운영체제 환경 변수(<code>os.environ</code>), 디렉토리 생성/삭제(<code>os.mkdir</code>, <code>os.walk</code>), 파일 경로 조작을 담당하는 모듈입니다.</li>
<li><strong>sys Module</strong>: 파이썬 인터프리터가 구동 중인 시스템 정보(<code>sys.version</code>), 명령줄 인자(<code>sys.argv</code>), 검색 경로(<code>sys.path</code>), 강제 종료(<code>sys.exit()</code>)를 제어하는 모듈입니다.</li>
<li><strong>subprocess Module</strong>: 외부 쉘 커맨드(bash, cmd)나 서드파티 실행 파일을 독립 프로세스로 새로 생성하여 결과를 읽거나 파이프(Pipe)로 통신하는 강력한 모듈입니다.</li>
<li><strong><code>subprocess.run()</code> / <code>Popen</code></strong>: 동기적 프로세스 완료를 기다리는 <code>run()</code>과 비동기 스트리밍 프로세스 입출력을 제어하는 <code>Popen</code> 객체입니다.</li>
</ul>
<hr>
<h2>2. os, sys 및 subprocess 실전 제어 코드</h2>
<pre><code class="language-python">import os
import sys
import subprocess

# 1. sys 모듈: 명령줄 인자 확인 및 파이썬 경로
print(f&quot;실행 파이썬 인터프리터 경로: {sys.executable}&quot;)
print(f&quot;전달된 명령줄 인자(sys.argv): {sys.argv}&quot;)

# 2. os 모듈: 환경 변수 및 현재 작업 디렉토리
current_dir = os.getcwd()
user_home = os.environ.get(&quot;HOME&quot;, os.environ.get(&quot;USERPROFILE&quot;))
print(f&quot;현재 위치: {current_dir} | 사용자 홈: {user_home}&quot;)

# 3. subprocess 모듈: 외부 시스템 명령 실행 및 파이프 수집
try:
    # &#39;ls -la&#39; (Windows는 &#39;dir&#39;) 실행하여 결과 capture
    cmd = [&quot;dir&quot;] if sys.platform.startswith(&quot;win&quot;) else [&quot;ls&quot;, &quot;-la&quot;]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    print(&quot;=== [subprocess 쉘 명령 실행 결과 상위 3줄] ===&quot;)
    print(&quot;
&quot;.join(result.stdout.splitlines()[:3]))
except subprocess.CalledProcessError as e:
    print(f&quot;명령 실행 실패: {e}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 왜 과거의 <code>os.system()</code> 대신 <code>subprocess.run()</code>을 써야 하나요?</strong>
A. <code>os.system()</code>은 쉘 인젝션(Shell Injection) 보안 취약점에 노출되고 표준 출력/에러를 캡처할 수 없습니다. 반면 <code>subprocess</code>는 안전하게 인자 리스트를 넘기고 리턴 코드와 출력을 정밀하게 제어할 수 있습니다.</p>
',
  'published',
  '파이썬 표준 라이브러리 - os, sys, subprocess 프로세스 실행 & Pipe',
  '파이썬 표준 라이브러리 os(파일 시스템 제어), sys(인터프리터 변수, sys.argv), subprocess(외부 커맨드 프로세스 실행, Popen, Pipe 통신)를 심도 있게 학습합니다.',
  29,
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
  'ch30-python-stdlib-collections-itertools-dataclasses',
  '파이썬 데이터 구조 및 함수형 유틸리티: collections, itertools 및 dataclasses',
  '파이썬 특수 자료구조(Counter, defaultdict, deque)와 효율적 순회 도구 itertools, 보일러플레이트 코드를 줄여주는 dataclasses를 배웁니다.',
  '특수 자료구조를 제공하는 **`collections`**, 무한 시퀀스 및 순열/조합의 **`itertools`**, 데이터 객체 생성 코드를 획기적으로 줄여주는 **`dataclasses`** 모듈을 다룹니다.

---

## 1. 고급 자료구조 유틸리티 용어 사전 (Glossary)

- **Counter**: 요소의 개수를 자동으로 세어서 딕셔너리 형태로 반환해 주는 빈도 계산 클래스입니다. (`collections.Counter`)
- **defaultdict**: 존재하지 않는 Key에 접근했을 때 KeyError 대신 설정한 기본값(default)을 자동 생성해 주는 딕셔너리입니다.
- **deque (Double-ended Queue)**: 양쪽 끝에서 추가/삭제가 모두 $O(1)$ 초고속으로 일어나는 큐/스택 자료구조입니다.
- **itertools**: 순열(`permutations`), 조합(`combinations`), 카테시안 곱(`product`), 반복(`cycle`) 등 최적화된 이터레이터 생성기 모듈입니다.
- **`@dataclass`**: 파이썬 3.7+에 도입되어 `__init__()`, `__repr__()`, `__eq__()` 메소드를 자동으로 생성해 주는 데이터 클래스 데코레이터입니다.

---

## 2. collections, itertools 및 dataclass 활용 실습

```python
from collections import Counter, defaultdict, deque
from itertools import combinations
from dataclasses import dataclass

# 1. Counter 및 defaultdict
words = ["apple", "banana", "apple", "orange", "banana", "apple"]
word_counts = Counter(words)
print(f"가장 흔한 단어 1위: {word_counts.most_common(1)}")

# 2. itertools 조합 (combinations)
items = ["A", "B", "C", "D"]
combos = list(combinations(items, 2))
print(f"4개 중 2개 선택 조합: {combos}")

# 3. @dataclass 선언
@dataclass
class Product:
    id: int
    name: str
    price: float
    stock: int = 0

p1 = Product(101, "파이썬 교재", 25000.0, 50)
print(f"dataclass 자동 생성 객체: {p1}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 일반 리스트와 `deque`의 성능 차이는 어느 정도인가요?**
A. 리스트의 맨 앞 요소 삭제/삽입(`list.pop(0)`)은 $O(N)$ 시간이 걸리지만, `deque.popleft()`는 $O(1)$ 시간에 수행되므로 **큐(Queue) 알고리즘 구현 시 deque 사용이 필수적**입니다.
',
  '<p>특수 자료구조를 제공하는 <strong><code>collections</code></strong>, 무한 시퀀스 및 순열/조합의 <strong><code>itertools</code></strong>, 데이터 객체 생성 코드를 획기적으로 줄여주는 <strong><code>dataclasses</code></strong> 모듈을 다룹니다.</p>
<hr>
<h2>1. 고급 자료구조 유틸리티 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Counter</strong>: 요소의 개수를 자동으로 세어서 딕셔너리 형태로 반환해 주는 빈도 계산 클래스입니다. (<code>collections.Counter</code>)</li>
<li><strong>defaultdict</strong>: 존재하지 않는 Key에 접근했을 때 KeyError 대신 설정한 기본값(default)을 자동 생성해 주는 딕셔너리입니다.</li>
<li><strong>deque (Double-ended Queue)</strong>: 양쪽 끝에서 추가/삭제가 모두 $O(1)$ 초고속으로 일어나는 큐/스택 자료구조입니다.</li>
<li><strong>itertools</strong>: 순열(<code>permutations</code>), 조합(<code>combinations</code>), 카테시안 곱(<code>product</code>), 반복(<code>cycle</code>) 등 최적화된 이터레이터 생성기 모듈입니다.</li>
<li><strong><code>@dataclass</code></strong>: 파이썬 3.7+에 도입되어 <code>__init__()</code>, <code>__repr__()</code>, <code>__eq__()</code> 메소드를 자동으로 생성해 주는 데이터 클래스 데코레이터입니다.</li>
</ul>
<hr>
<h2>2. collections, itertools 및 dataclass 활용 실습</h2>
<pre><code class="language-python">from collections import Counter, defaultdict, deque
from itertools import combinations
from dataclasses import dataclass

# 1. Counter 및 defaultdict
words = [&quot;apple&quot;, &quot;banana&quot;, &quot;apple&quot;, &quot;orange&quot;, &quot;banana&quot;, &quot;apple&quot;]
word_counts = Counter(words)
print(f&quot;가장 흔한 단어 1위: {word_counts.most_common(1)}&quot;)

# 2. itertools 조합 (combinations)
items = [&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;]
combos = list(combinations(items, 2))
print(f&quot;4개 중 2개 선택 조합: {combos}&quot;)

# 3. @dataclass 선언
@dataclass
class Product:
    id: int
    name: str
    price: float
    stock: int = 0

p1 = Product(101, &quot;파이썬 교재&quot;, 25000.0, 50)
print(f&quot;dataclass 자동 생성 객체: {p1}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 일반 리스트와 <code>deque</code>의 성능 차이는 어느 정도인가요?</strong>
A. 리스트의 맨 앞 요소 삭제/삽입(<code>list.pop(0)</code>)은 $O(N)$ 시간이 걸리지만, <code>deque.popleft()</code>는 $O(1)$ 시간에 수행되므로 <strong>큐(Queue) 알고리즘 구현 시 deque 사용이 필수적</strong>입니다.</p>
',
  'published',
  '파이썬 고급 표준 모듈 - collections(Counter, defaultdict), itertools & dataclasses',
  '파이썬 표준 모듈 collections(Counter, defaultdict, deque, namedtuple), itertools(product, combinations, permutations), dataclasses(@dataclass)를 학습합니다.',
  30,
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
  'ch31-python-stdlib-sqlite3-and-pickle',
  '파이썬 표준 데이터베이스 및 객체 직렬화: sqlite3와 pickle 바이너리 보관',
  '별도 DB 서버 설치 없이 즉시 사용하는 경량 관계형 DB sqlite3 모듈과 파이썬 객체 상태를 파일로 직렬화하는 pickle 및 shelve를 다룹니다.',
  '별도의 데이터베이스 서버 설치 없이 파일이나 메모리 상에서 동작하는 **경량 관계형 DB `sqlite3`** 모듈과 파이썬 객체를 그대로 파일에 보관하는 **`pickle`**을 배웁니다.

---

## 1. 내장 데이터베이스 용어 사전 (Glossary)

- **sqlite3**: 파이썬 표준 라이브러리에 동봉된 경량 RDBMS 엔진으로, 복잡한 DB 세팅 없이 단일 파일(`.db`)로 SQL 데이터베이스를 운용합니다.
- **Connection / Cursor**: DB 세션 연결 자원인 `Connection`과 SQL 쿼리를 전송하고 결과 행(Row)을 조회하는 `Cursor` 객체입니다.
- **pickle**: 파이썬의 임의 객체(리스트, 딕셔너리, 커스텀 클래스 인스턴스 등)를 바이너리 스트림으로 직렬화(`dump`) 및 복원(`load`)하는 모듈입니다.
- **shelve**: `pickle`을 기반으로 딕셔너리처럼 Key-Value 형식으로 파일에 파이썬 객체를 영구 보관해 주는 표준 데이터 저장 모듈입니다.

---

## 2. sqlite3 DB CRUD 및 pickle 직렬화 실습

```python
import sqlite3
import pickle

# 1. sqlite3 메모리 DB 생성 및 테이블 선언
conn = sqlite3.connect(":memory:") # 메모리 DB
cursor = conn.cursor()

cursor.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)")

# 파라미터 바인딩 (? 매핑) 데이터 삽입
cursor.execute("INSERT INTO users (name, score) VALUES (?, ?)", ("홍길동", 95))
conn.commit()

# 데이터 조회
cursor.execute("SELECT * FROM users WHERE score >= ?", (90,))
row = cursor.fetchone()
print(f"sqlite3 조회 데이터: ID {row[0]} - 이름: {row[1]}, 점수: {row[2]}")
conn.close()

# 2. pickle 객체 직렬화
complex_data = {"user_id": 101, "matrix": [[1, 2], [3, 4]], "status": True}
serialized_bytes = pickle.dumps(complex_data) # 직렬화
deserialized_obj = pickle.loads(serialized_bytes) # 복원

print(f"pickle 복원 데이터 확인: {deserialized_obj[''matrix'']}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 보안상 `pickle.load()` 사용 시 주의할 점은?**
A. `pickle`은 역직렬화 과정에서 임의의 파이썬 코드를 실행시킬 수 있는 보안 위험이 있으므로, 신뢰할 수 없는 외부 네트워크나 사용자로부터 전달받은 pickle 바이너리는 절대로 복원하면 안 됩니다.
',
  '<p>별도의 데이터베이스 서버 설치 없이 파일이나 메모리 상에서 동작하는 <strong>경량 관계형 DB <code>sqlite3</code></strong> 모듈과 파이썬 객체를 그대로 파일에 보관하는 **<code>pickle</code>**을 배웁니다.</p>
<hr>
<h2>1. 내장 데이터베이스 용어 사전 (Glossary)</h2>
<ul>
<li><strong>sqlite3</strong>: 파이썬 표준 라이브러리에 동봉된 경량 RDBMS 엔진으로, 복잡한 DB 세팅 없이 단일 파일(<code>.db</code>)로 SQL 데이터베이스를 운용합니다.</li>
<li><strong>Connection / Cursor</strong>: DB 세션 연결 자원인 <code>Connection</code>과 SQL 쿼리를 전송하고 결과 행(Row)을 조회하는 <code>Cursor</code> 객체입니다.</li>
<li><strong>pickle</strong>: 파이썬의 임의 객체(리스트, 딕셔너리, 커스텀 클래스 인스턴스 등)를 바이너리 스트림으로 직렬화(<code>dump</code>) 및 복원(<code>load</code>)하는 모듈입니다.</li>
<li><strong>shelve</strong>: <code>pickle</code>을 기반으로 딕셔너리처럼 Key-Value 형식으로 파일에 파이썬 객체를 영구 보관해 주는 표준 데이터 저장 모듈입니다.</li>
</ul>
<hr>
<h2>2. sqlite3 DB CRUD 및 pickle 직렬화 실습</h2>
<pre><code class="language-python">import sqlite3
import pickle

# 1. sqlite3 메모리 DB 생성 및 테이블 선언
conn = sqlite3.connect(&quot;:memory:&quot;) # 메모리 DB
cursor = conn.cursor()

cursor.execute(&quot;CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)&quot;)

# 파라미터 바인딩 (? 매핑) 데이터 삽입
cursor.execute(&quot;INSERT INTO users (name, score) VALUES (?, ?)&quot;, (&quot;홍길동&quot;, 95))
conn.commit()

# 데이터 조회
cursor.execute(&quot;SELECT * FROM users WHERE score &gt;= ?&quot;, (90,))
row = cursor.fetchone()
print(f&quot;sqlite3 조회 데이터: ID {row[0]} - 이름: {row[1]}, 점수: {row[2]}&quot;)
conn.close()

# 2. pickle 객체 직렬화
complex_data = {&quot;user_id&quot;: 101, &quot;matrix&quot;: [[1, 2], [3, 4]], &quot;status&quot;: True}
serialized_bytes = pickle.dumps(complex_data) # 직렬화
deserialized_obj = pickle.loads(serialized_bytes) # 복원

print(f&quot;pickle 복원 데이터 확인: {deserialized_obj[&#39;matrix&#39;]}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 보안상 <code>pickle.load()</code> 사용 시 주의할 점은?</strong>
A. <code>pickle</code>은 역직렬화 과정에서 임의의 파이썬 코드를 실행시킬 수 있는 보안 위험이 있으므로, 신뢰할 수 없는 외부 네트워크나 사용자로부터 전달받은 pickle 바이너리는 절대로 복원하면 안 됩니다.</p>
',
  'published',
  '파이썬 내장 DB - sqlite3 사용법, Connection, Cursor, pickle & shelve 객체 저장',
  '파이썬 표준 내장 DB sqlite3(Connection, Cursor, commit, SQL CRUD), pickle(객체 바이너리 직렬화/복원), shelve(키-값 파일 영속성)를 배웁니다.',
  31,
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
  'ch32-python-stdlib-logging-and-argparse',
  '파이썬 로깅 및 CLI 인자 파서: logging 모듈과 argparse 터미널 도구',
  '애플리케이션 구동 상태를 기록하는 5단계 logging 모듈과 터미널 명령줄 매개변수를 전문적으로 파싱하는 argparse CLI 도구를 학습합니다.',
  '프로그램의 구동 상태와 에러 기록을 보관하는 **`logging` 모듈**과 리눅스 CLI 터미널 도구처럼 명령줄 인자를 처리하는 **`argparse` 모듈**을 학습합니다.

---

## 1. 로깅 및 CLI 파서 용어 사전 (Glossary)

- **logging Level**: 로그의 중요도를 나타내는 5가지 표준 단계입니다. (`DEBUG` $ightarrow$ `INFO` $ightarrow$ `WARNING` $ightarrow$ `ERROR` $ightarrow$ `CRITICAL`)
- **Logger / Handler / Formatter**:
  - `Logger`: 로그 메시지를 수집하는 주체.
  - `Handler`: 로그를 콘솔이나 파일(`FileHandler`)로 내보내는 출력 창구.
  - `Formatter`: 로그 출력 시간, 파일명, 로그 레벨 형태를 지정하는 서식.
- **argparse**: Terminal 상에서 `python app.py --port 8080 --verbose` 처럼 플래그 옵션과 옵션 파라미터를 전문 파싱하는 표준 모듈입니다.

---

## 2. logging 파일 저장 및 argparse CLI 파서 코드

```python
import logging
import argparse

# 1. logging 설정 (콘솔 및 파일 출력)
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("app_system.log", encoding="utf-8"),
        logging.StreamHandler()
    ]
)

logging.info("시스템 가동 준비 완료")
logging.warning("메모리 사용량이 80%를 초과했습니다.")

# 2. argparse CLI 인자 파서 구현
def run_cli():
    parser = argparse.ArgumentParser(description="DAVHAVE CLI 전용 커맨드라인 도구")
    parser.add_argument("--name", type=str, required=True, help="사용자 이름")
    parser.add_argument("--count", type=int, default=1, help="반복 횟수")
    
    # 예시 인자 파싱 (실제 실행 시 sys.argv 분석)
    args = parser.parse_args(["--name", "홍길동", "--count", "3"])
    print(f"CLI 입력 파싱 성공: {args.name}님 {args.count}회 실행")

run_cli()
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 단순 `print()` 대신 `logging` 모듈을 사용해야 하나요?**
A. `print()`는 타임스탬프가 없고 로그 레벨 구분이 불가능하며 파일 자동 저장 기능을 지원하지 않습니다. 반면 `logging`은 환경에 따라 콘솔과 파일 저장을 자유롭게 조율할 수 있습니다.
',
  '<p>프로그램의 구동 상태와 에러 기록을 보관하는 <strong><code>logging</code> 모듈</strong>과 리눅스 CLI 터미널 도구처럼 명령줄 인자를 처리하는 <strong><code>argparse</code> 모듈</strong>을 학습합니다.</p>
<hr>
<h2>1. 로깅 및 CLI 파서 용어 사전 (Glossary)</h2>
<ul>
<li><strong>logging Level</strong>: 로그의 중요도를 나타내는 5가지 표준 단계입니다. (<code>DEBUG</code> $
ightarrow$ <code>INFO</code> $
ightarrow$ <code>WARNING</code> $
ightarrow$ <code>ERROR</code> $
ightarrow$ <code>CRITICAL</code>)</li>
<li><strong>Logger / Handler / Formatter</strong>:<ul>
<li><code>Logger</code>: 로그 메시지를 수집하는 주체.</li>
<li><code>Handler</code>: 로그를 콘솔이나 파일(<code>FileHandler</code>)로 내보내는 출력 창구.</li>
<li><code>Formatter</code>: 로그 출력 시간, 파일명, 로그 레벨 형태를 지정하는 서식.</li>
</ul>
</li>
<li><strong>argparse</strong>: Terminal 상에서 <code>python app.py --port 8080 --verbose</code> 처럼 플래그 옵션과 옵션 파라미터를 전문 파싱하는 표준 모듈입니다.</li>
</ul>
<hr>
<h2>2. logging 파일 저장 및 argparse CLI 파서 코드</h2>
<pre><code class="language-python">import logging
import argparse

# 1. logging 설정 (콘솔 및 파일 출력)
logging.basicConfig(
    level=logging.INFO,
    format=&quot;%(asctime)s [%(levelname)s] %(message)s&quot;,
    handlers=[
        logging.FileHandler(&quot;app_system.log&quot;, encoding=&quot;utf-8&quot;),
        logging.StreamHandler()
    ]
)

logging.info(&quot;시스템 가동 준비 완료&quot;)
logging.warning(&quot;메모리 사용량이 80%를 초과했습니다.&quot;)

# 2. argparse CLI 인자 파서 구현
def run_cli():
    parser = argparse.ArgumentParser(description=&quot;DAVHAVE CLI 전용 커맨드라인 도구&quot;)
    parser.add_argument(&quot;--name&quot;, type=str, required=True, help=&quot;사용자 이름&quot;)
    parser.add_argument(&quot;--count&quot;, type=int, default=1, help=&quot;반복 횟수&quot;)
    
    # 예시 인자 파싱 (실제 실행 시 sys.argv 분석)
    args = parser.parse_args([&quot;--name&quot;, &quot;홍길동&quot;, &quot;--count&quot;, &quot;3&quot;])
    print(f&quot;CLI 입력 파싱 성공: {args.name}님 {args.count}회 실행&quot;)

run_cli()
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 왜 단순 <code>print()</code> 대신 <code>logging</code> 모듈을 사용해야 하나요?</strong>
A. <code>print()</code>는 타임스탬프가 없고 로그 레벨 구분이 불가능하며 파일 자동 저장 기능을 지원하지 않습니다. 반면 <code>logging</code>은 환경에 따라 콘솔과 파일 저장을 자유롭게 조율할 수 있습니다.</p>
',
  'published',
  '파이썬 로깅과 CLI - logging 레벨, Logger, FileHandler & argparse 옵션 파서',
  '파이썬 표준 로깅 모듈 logging(DEBUG, INFO, WARNING, ERROR, CRITICAL), FileHandler 로그 저장 및 argparse 기반 터미널 커맨드라인 옵션 파서를 배웁니다.',
  32,
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
