-- Full Python Master Lessons Part 8

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

---

## 2. os, sys 및 subprocess 실전 제어 코드

```python
import os
import sys
import subprocess

print(f"실행 파이썬 인터프리터 경로: {sys.executable}")
print(f"현재 위치: {os.getcwd()}")

try:
    cmd = ["dir"] if sys.platform.startswith("win") else ["ls", "-la"]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    print("=== [subprocess 쉘 명령 실행 결과 상위 3줄] ===")
    print("
".join(result.stdout.splitlines()[:3]))
except subprocess.CalledProcessError as e:
    print(f"명령 실행 실패: {e}")
```
',
  '<p>운영체제 파일 시스템 제어(<strong><code>os</code></strong>), 인터프리터 파라미터(<strong><code>sys</code></strong>), 외부 프로세스 실행(<strong><code>subprocess</code></strong>)을 담당하는 <strong>파이썬 코어 시스템 표준 라이브러리</strong>를 다룹니다.</p>
<hr>
<h2>1. 시스템 라이브러리 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>os Module</strong>: 운영체제 환경 변수(<code>os.environ</code>), 디렉토리 생성/삭제(<code>os.mkdir</code>, <code>os.walk</code>), 파일 경로 조작을 담당하는 모듈입니다.</li>
<li><strong>sys Module</strong>: 파이썬 인터프리터가 구동 중인 시스템 정보(<code>sys.version</code>), 명령줄 인자(<code>sys.argv</code>), 검색 경로(<code>sys.path</code>), 강제 종료(<code>sys.exit()</code>)를 제어하는 모듈입니다.</li>
<li><strong>subprocess Module</strong>: 외부 쉘 커맨드(bash, cmd)나 서드파티 실행 파일을 독립 프로세스로 새로 생성하여 결과를 읽거나 파이프(Pipe)로 통신하는 강력한 모듈입니다.</li>
</ul>
<hr>
<h2>2. os, sys 및 subprocess 실전 제어 코드</h2>
<pre><code class="language-python">import os
import sys
import subprocess

print(f&quot;실행 파이썬 인터프리터 경로: {sys.executable}&quot;)
print(f&quot;현재 위치: {os.getcwd()}&quot;)

try:
    cmd = [&quot;dir&quot;] if sys.platform.startswith(&quot;win&quot;) else [&quot;ls&quot;, &quot;-la&quot;]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    print(&quot;=== [subprocess 쉘 명령 실행 결과 상위 3줄] ===&quot;)
    print(&quot;
&quot;.join(result.stdout.splitlines()[:3]))
except subprocess.CalledProcessError as e:
    print(f&quot;명령 실행 실패: {e}&quot;)
</code></pre>
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
  '특수 자료구조를 제공하는 **`collections`**, 무한 시퀀스 및 순열/조합의 **`itertools`**, 데이터 객체 생성 코드를 획기적으로 줄여주는 **`dataclasses`** 모듈을 다룹니다.',
  '<p>특수 자료구조를 제공하는 <strong><code>collections</code></strong>, 무한 시퀀스 및 순열/조합의 <strong><code>itertools</code></strong>, 데이터 객체 생성 코드를 획기적으로 줄여주는 <strong><code>dataclasses</code></strong> 모듈을 다룹니다.</p>
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
  '별도의 데이터베이스 서버 설치 없이 파일이나 메모리 상에서 동작하는 **경량 관계형 DB `sqlite3`** 모듈과 파이썬 객체를 그대로 파일에 보관하는 **`pickle`**을 배웁니다.',
  '<p>별도의 데이터베이스 서버 설치 없이 파일이나 메모리 상에서 동작하는 <strong>경량 관계형 DB <code>sqlite3</code></strong> 모듈과 파이썬 객체를 그대로 파일에 보관하는 **<code>pickle</code>**을 배웁니다.</p>
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
  '프로그램의 구동 상태와 에러 기록을 보관하는 **`logging` 모듈**과 리눅스 CLI 터미널 도구처럼 명령줄 인자를 처리하는 **`argparse` 모듈**을 학습합니다.',
  '<p>프로그램의 구동 상태와 에러 기록을 보관하는 <strong><code>logging</code> 모듈</strong>과 리눅스 CLI 터미널 도구처럼 명령줄 인자를 처리하는 <strong><code>argparse</code> 모듈</strong>을 학습합니다.</p>
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
