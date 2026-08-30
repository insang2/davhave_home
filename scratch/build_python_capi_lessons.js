import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  // 1 ~ 35 기존 레슨 유지 (생략 없이 1~35 전체 포함)
  {
    order_index: 1,
    slug: 'ch01-python-introduction-and-interpreter',
    title: '파이썬(Python) 소개와 CPython 인터프리터 작동 원리, REPL & IDLE/VS Code 환경 구축',
    seo_title: '파이썬 입문 가이드 - CPython 인터프리터, Zen of Python, IDLE & VS Code',
    seo_description: '파이썬의 역사, 설계 철학(Zen of Python), CPython 바이트코드 컴파일 메커니즘, GIL(Global Interpreter Lock), REPL 대화형 모드 및 VS Code 설치를 배웁니다.',
    excerpt: '가독성과 간결성을 최우선으로 하는 파이썬 프로그래밍 언어의 특징, CPython 인터프리터 작동 원리 및 IDLE/VS Code 개발 환경을 배웁니다.',
    content_md: `**파이썬(Python)**은 1991년 귀도 반 로섬(Guido van Rossum)이 발표한 **고수준 인터프리터 언어**입니다. CPython 표준 인터프리터 엔진을 기반으로 동작합니다.

---

## 1. 파이썬 핵심 전문 용어 사전 (Glossary)

- **CPython**: C 언어로 구현된 파이썬 공식 표준 인터프리터 엔진입니다.
- **REPL (Read-Eval-Print Loop)**: 입력한 파이썬 코드를 즉시 읽고 실행하여 결과를 콘솔에 출력하는 대화형 인터페이스입니다.
- **Zen of Python**: \`import this\` 명령으로 확인할 수 있는 파이썬의 19가지 설계 철학입니다.
- **GIL (Global Interpreter Lock)**: 한 번에 하나의 스레드만 파이썬 바이트코드를 실행하도록 제어하는 메커니즘입니다.

---

## 2. 파이썬 Hello World 예제

\`\`\`python
import sys
print("Hello, DAVHAVE Python World!")
print(f"현재 파이썬 버전: {sys.version}")
\`\`\`
`
  },
  { order_index: 2, slug: 'ch02-variables-data-types-and-operators', title: '변수, 기본 자료형(Numbers, Strings, Booleans) 및 수치 연산', seo_title: '파이썬 변수와 자료형 - int, float, str, bool, f-string 포맷팅 & 연산자', seo_description: '동적 타입 변수, 기본 자료형, f-string 포맷팅, type() 및 id() 검사, 산술/비교/논리 연산자를 배웁니다.', excerpt: '변수 개념, 기본 수치 및 문자열 자료형, f-string 포맷팅과 연산자 활용법을 학습합니다.', content_md: `변수(Variable)와 자료형(Data Type)을 학습합니다.` },
  { order_index: 3, slug: 'ch03-control-flow-conditionals-and-loops', title: '제어 구조: 조건문(if-elif-else, match-case)과 루프(for, while, range, enumerate, zip)', seo_title: '파이썬 제어문 - if-elif-else, match-case, for, while, range, enumerate, zip', seo_description: '조건문, match-case 패턴 매칭, 반복문, range, enumerate, zip, break/continue를 학습합니다.', excerpt: '조건문과 match-case 패턴 매칭, range(), enumerate(), zip() 함수를 배웁니다.', content_md: `조건문(if)과 반복문(for, while)의 사용법을 학습합니다.` },
  { order_index: 4, slug: 'ch04-data-structures-list-tuple-set-dict', title: '파이썬 핵심 자료구조: 리스트, 튜플, 집합(Set) 및 딕셔너리', seo_title: '파이썬 자료구조 - List, Tuple, Set, Dictionary & List Comprehension', seo_description: '4대 기본 자료구조의 특징, 슬라이싱, List Comprehension, Dict View 메소드를 다룹니다.', excerpt: '리스트, 튜플, 집합, 딕셔너리와 컴프리헨션을 배웁니다.', content_md: `파이썬 4대 데이터 구조인 리스트, 튜플, 집합, 딕셔너리를 학습합니다.` },
  { order_index: 5, slug: 'ch05-functions-lambda-and-scope', title: '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 LEGB 스코프 룰', seo_title: '파이썬 함수와 람다 - def, *args, **kwargs, lambda, LEGB 스코프 룰', seo_description: 'def 함수 정의, 가변 인자(*args, **kwargs), 람다 함수, LEGB 스코프 변수 참조 규칙을 해설합니다.', excerpt: '함수 정의, 가변 인자, 람다 및 LEGB 규칙을 학습합니다.', content_md: `함수(Function) 선언과 LEGB 규칙을 다룹니다.` },
  { order_index: 6, slug: 'ch06-modules-packages-and-venv', title: '모듈(Module), 패키지(Package)와 가상환경(venv) 및 pip', seo_title: '파이썬 모듈과 패키지 - import, __name__, sys.path, venv 가상환경 & pip', seo_description: '모듈, 패키지, __name__ == "__main__", sys.path, venv 가상환경 및 pip 패키지 관리를 배웁니다.', excerpt: '모듈과 패키지 구조, venv 가상환경과 pip 패키지 관리자를 학습합니다.', content_md: `모듈(Module)과 가상환경(venv)을 다룹니다.` },
  { order_index: 7, slug: 'ch07-file-io-and-context-managers', title: '파일 입출력(File I/O)과 컨텍스트 매니저(with 문) 및 pathlib', seo_title: '파이썬 파일 입출력 - open(), read, write, with 문 & pathlib 모듈', seo_description: '파일 읽기/쓰기 모드, with 컨텍스트 매니저, pathlib 객체지향 경로 조작을 다룹니다.', excerpt: '파일 입출력 open() 및 with 컨텍스트 매니저, pathlib을 배웁니다.', content_md: `파일 입출력(File I/O)과 with 컨텍스트 매니저를 다룹니다.` },
  { order_index: 8, slug: 'ch08-exception-handling-and-custom-exceptions', title: '예외 처리(try-except-else-finally) 및 사용자 정의 예외', seo_title: '파이썬 예외 처리 - try, except, else, finally, raise & 사용자 정의 Exception', seo_description: 'try-except-else-finally 구문, raise, Exception 커스텀 예외 클래스를 배웁니다.', excerpt: 'try-except-else-finally 구문 및 사용자 정의 예외를 학습합니다.', content_md: `예외 처리(Exception Handling)를 학습합니다.` },
  { order_index: 9, slug: 'ch09-object-oriented-programming-classes', title: '객체지향 프로그래밍(OOP): 클래스, 인스턴스, 생성자(__init__) 및 캡슐화', seo_title: '파이썬 OOP 기초 - class, __init__, self, 인스턴스 변수, 캡슐화(__private)', seo_description: '클래스와 인스턴스, 생성자 메소드(__init__), self, 캡슐화(__private)를 학습합니다.', excerpt: '클래스 작성법, 생성자 __init__(), self 인자 및 비공개 속성 캡슐화를 다룹니다.', content_md: `객체지향 프로그래밍(OOP) 기초를 학습합니다.` },
  { order_index: 10, slug: 'ch10-advanced-oop-inheritance-magic-methods', title: '상속(Inheritance), 다형성 및 던더 매직 메소드(Dunder Methods)', seo_title: '파이썬 고급 OOP - 상속, super(), 매직 메소드(__str__, __len__), ABC 추상 클래스', seo_description: '부모 클래스 상속, super() 호출, 던더 매직 메소드, ABC 추상 클래스를 배웁니다.', excerpt: '상속(Inheritance), super(), 매직 메소드(Dunder Methods)와 추상 클래스를 학습합니다.', content_md: `상속(Inheritance)과 매직 메소드(Dunder Methods)를 익힙니다.` },
  { order_index: 11, slug: 'ch11-iterators-generators-and-decorators', title: '이터레이터(Iterator), yield 제너레이터(Generator)와 데코레이터(Decorator)', seo_title: '파이썬 고급 문법 - Iterator, yield 제너레이터, 클로저 & @decorator', seo_description: '이터레이터(__next__), yield 제너레이터, 클로저 및 @decorator 패턴을 학습합니다.', excerpt: '제너레이터(yield)와 데코레이터(@decorator) 패턴을 배웁니다.', content_md: `제너레이터(Generator)와 데코레이터(Decorator)를 배웁니다.` },
  { order_index: 12, slug: 'ch12-standard-libraries-math-random-datetime-json', title: '파이썬 핵심 표준 라이브러리 (math, random, datetime, json, re)', seo_title: '파이썬 표준 라이브러리 - math, random, datetime, json 직렬화 & re 정규식', seo_description: '내장 표준 라이브러리 math, random, datetime, json, re 정규식을 배웁니다.', excerpt: '필수 표준 라이브러리(math, random, datetime, json, re) 활용법을 배웁니다.', content_md: `필수 표준 라이브러리 모듈들을 학습합니다.` },
  { order_index: 13, slug: 'ch13-gui-programming-with-tkinter', title: 'tkinter를 활용한 파이썬 데스크톱 GUI 프로그래밍', seo_title: '파이썬 GUI 프로그래밍 - tkinter, Tk, Label, Button, Entry, pack/grid', seo_description: '표준 GUI 라이브러리 tkinter, 컴포넌트, 레이아웃 매니저(pack, grid)를 학습합니다.', excerpt: 'tkinter를 이용하여 데스크톱 GUI 프로그램을 개발하는 기법을 배웁니다.', content_md: `데스크톱 GUI 모듈인 tkinter를 학습합니다.` },
  { order_index: 14, slug: 'ch14-concurrency-multiprocessing-and-asyncio', title: '파이썬 동시성 프로그래밍: threading, multiprocessing 및 asyncio', seo_title: '파이썬 동시성 - threading, multiprocessing, GIL 한계 & asyncio async/await', seo_description: 'multiprocessing, threading, asyncio async/await 비동기 프로그래밍을 배웁니다.', excerpt: 'threading, multiprocessing 및 asyncio 비동기 코딩을 학습합니다.', content_md: `threading, multiprocessing, asyncio를 다룹니다.` },
  { order_index: 15, slug: 'ch15-web-scraping-and-http-requests', title: '웹 스크래핑과 파이썬 HTTP 통신 (requests, BeautifulSoup4)', seo_title: '파이썬 웹 크롤링 - requests HTTP GET/POST, BeautifulSoup4 파싱 & CSS 셀렉터', seo_description: 'requests, BeautifulSoup4 HTML DOM 파싱 및 CSS 셀렉터를 배웁니다.', excerpt: 'requests 모듈과 BeautifulSoup4 크롤링 기법을 배웁니다.', content_md: `requests와 BeautifulSoup4를 학습합니다.` },
  { order_index: 16, slug: 'ch16-python-type-hinting-and-annotations', title: '파이썬 타입 힌팅(Type Hinting)과 typing 모듈', seo_title: '파이썬 타입 힌팅 - type annotations, typing 모듈, mypy 정적 분석', seo_description: '타입 어노테이션, typing 모듈과 mypy 정적 분석기를 학습합니다.', excerpt: '타입 힌팅(Type Hinting)과 typing 모듈, mypy 정적 분석기를 다룹니다.', content_md: `타입 힌팅(Type Hinting)을 다룹니다.` },
  { order_index: 17, slug: 'ch17-functional-programming-map-filter-reduce', title: '파이썬 함수형 프로그래밍 기법 (map, filter, reduce, functools)', seo_title: '파이썬 함수형 프로그래밍 - map, filter, reduce, functools & lru_cache', seo_description: 'map(), filter(), reduce(), functools.lru_cache를 배웁니다.', excerpt: '함수형 프로그래밍(map, filter, reduce, lru_cache) 기법을 학습합니다.', content_md: `함수형 프로그래밍(Functional Programming)을 다룹니다.` },
  { order_index: 18, slug: 'ch18-python-c-extension-and-ctypes', title: '파이썬 C 연동 및 ctypes, cffi 확장 모듈', seo_title: '파이썬 C 연동 - ctypes, C-API, Shared Library .so/.dll 호출 & 바인딩', seo_description: 'C 공유 라이브러리(.so/.dll)를 파이썬에서 호출하는 ctypes 모듈을 배웁니다.', excerpt: 'C 라이브러리를 ctypes 모듈로 직접 불러와 호출하는 기법을 배웁니다.', content_md: `ctypes 모듈을 다룹니다.` },
  { order_index: 19, slug: 'ch19-python-packaging-distribution-wheel', title: '파이썬 패키징과 PyPI 배포 (pyproject.toml, setuptools, wheel)', seo_title: '파이썬 패키징 - pyproject.toml, setuptools, wheel & PyPI twine 배포', seo_description: 'pyproject.toml 규격 패키징 및 PyPI 배포 과정을 배웁니다.', excerpt: 'pyproject.toml과 build, twine을 이용해 PyPI에 배포하는 과정을 학습합니다.', content_md: `PyPI 패키징 및 배포를 다룹니다.` },
  { order_index: 20, slug: 'ch20-python-final-project-mini-game-and-apps', title: '파이썬 실전 종합 프로젝트: 터틀 그래픽 미니 게임 & GUI 관리 앱', seo_title: '파이썬 실전 프로젝트 - Turtle 터틀 그래픽 미니 게임 & GUI 관리 앱', seo_description: 'Turtle 그래픽 미니 게임과 tkinter GUI 데이터 관리 앱을 구현합니다.', excerpt: 'Turtle 미니 게임과 GUI 데이터 관리 애플리케이션을 완성합니다.', content_md: `실전 파이썬 종합 프로젝트를 완성합니다.` },
  { order_index: 21, slug: 'ch21-python-data-analysis-numpy-pandas', title: '파이썬 데이터 분석 입문: NumPy 배열 연산과 Pandas 데이터프레임 처리', seo_title: '파이썬 데이터 분석 - NumPy N차원 배열, Pandas DataFrame & CSV 전처리', seo_description: 'NumPy 배열, Pandas DataFrame 결측치 정제 및 CSV 파일 읽기/쓰기를 배웁니다.', excerpt: 'NumPy 벡터화 연산과 Pandas DataFrame 데이터 전처리 기술을 다룹니다.', content_md: `NumPy 배열 연산과 Pandas 데이터프레임을 다룹니다.` },
  { order_index: 22, slug: 'ch22-python-web-framework-django-fastapi', title: '파이썬 웹 프레임워크 비교: Django 풀스택 vs FastAPI 비동기 REST API', seo_title: '파이썬 웹 프레임워크 - Django MVT 아키텍처 vs FastAPI 비동기 REST API 구축', seo_description: 'Django와 FastAPI의 구조적 차이와 REST API 구축법을 배웁니다.', excerpt: 'Django와 FastAPI의 아키텍처 비교 및 실전 서버 구축법을 배웁니다.', content_md: `Django 풀스택 프레임워크와 FastAPI 아키텍처를 비교합니다.` },
  { order_index: 23, slug: 'ch23-python-orm-sqlalchemy-and-database', title: '파이썬 ORM 데이터베이스 연동: SQLAlchemy와 SQLModel 완전 가이드', seo_title: '파이썬 ORM - SQLAlchemy 2.0, SQLModel, PostgreSQL/MySQL 연동 & Alembic', seo_description: 'SQLAlchemy 2.0 모델링, Session DB CRUD 및 Alembic 마이그레이션을 다룹니다.', excerpt: 'SQLAlchemy ORM 및 SQLModel 기반 데이터베이스 트랜잭션 관리 기법을 배웁니다.', content_md: `SQLAlchemy ORM과 SQLModel을 다룹니다.` },
  { order_index: 24, slug: 'ch24-python-web-automation-selenium-playwright', title: '파이썬 웹 자동화 및 동적 렌더링 스크래핑: Selenium과 Playwright', seo_title: '파이썬 웹 자동화 - Selenium WebDriver vs Playwright 비동기 크롤링', seo_description: 'Selenium WebDriver와 Playwright 비동기 브라우저 자동화를 배웁니다.', excerpt: 'Headless Browser로 자동화하는 Selenium과 Playwright를 학습합니다.', content_md: `Selenium과 Playwright를 배웁니다.` },
  { order_index: 25, slug: 'ch25-python-unit-testing-pytest-and-mock', title: '파이썬 단위 테스트와 TDD: unittest, pytest 및 mock 객체 활용', seo_title: '파이썬 테스트 코드 - pytest 사용법, unittest, fixture, mock 가짜 객체', seo_description: '단위 테스트(Unit Test), pytest 프레임워크, mock 객체 활용법을 배웁니다.', excerpt: 'pytest와 가짜 객체를 만드는 mock 기법을 학습합니다.', content_md: `단위 테스트와 pytest를 학습합니다.` },
  { order_index: 26, slug: 'ch26-python-ai-machine-learning-scikit-learn', title: '파이썬 머신러닝 기초: Scikit-learn 지도학습과 분류/회귀 모델', seo_title: '파이썬 머신러닝 - Scikit-learn, 선형 회귀, 결정 트리, Dataset 분할 & 평가', seo_description: 'Scikit-learn, 지도학습, train_test_split, 회귀 및 결정 트리 분류를 배웁니다.', excerpt: 'Scikit-learn을 이용하여 회귀 및 분류 모델링 기법을 배웁니다.', content_md: `머신러닝과 Scikit-learn을 다룹니다.` },
  { order_index: 27, slug: 'ch27-python-deep-learning-pytorch-basics', title: '파이썬 딥러닝 입문: PyTorch 텐서(Tensor)와 신경망(Neural Network) 구현', seo_title: '파이썬 딥러닝 - PyTorch 텐서, Autograd 자동 미분, Linear 신경망 & Loss', seo_description: 'PyTorch, Tensor 자료구조, Autograd 자동 미분 역전파를 다룹니다.', excerpt: 'PyTorch 프레임워크, Tensor 및 역전파 메커니즘을 배웁니다.', content_md: `PyTorch 기반 딥러닝을 배웁니다.` },
  { order_index: 28, slug: 'ch28-python-big-data-pyspark-and-parallel', title: '파이썬 분산 빅데이터 처리: PySpark와 RDD/DataFrame 대용량 분산 연산', seo_title: '파이썬 빅데이터 - PySpark, Apache Spark 클러스터, RDD vs Spark DataFrame', seo_description: 'PySpark, RDD, Spark DataFrame 분산 연산 및 빅데이터 파이프라인 구축을 다룹니다.', excerpt: 'PySpark와 Spark DataFrame을 익힙니다.', content_md: `PySpark 빅데이터 파이프라인을 다룹니다.` },
  { order_index: 29, slug: 'ch29-python-stdlib-os-sys-subprocess', title: '파이썬 시스템 제어 표준 라이브러리: os, sys 및 subprocess 프로세스 관리', seo_title: '파이썬 표준 라이브러리 - os, sys, subprocess 프로세스 실행 & Pipe', seo_description: 'os, sys, subprocess 프로세스 실행 및 파이프 통신을 배웁니다.', excerpt: 'os, sys 및 subprocess 라이브러리를 다룹니다.', content_md: `os, sys, subprocess 모듈을 다룹니다.` },
  { order_index: 30, slug: 'ch30-python-stdlib-collections-itertools-dataclasses', title: '파이썬 데이터 구조 및 함수형 유틸리티: collections, itertools 및 dataclasses', seo_title: '파이썬 고급 표준 모듈 - collections(Counter, defaultdict), itertools & dataclasses', seo_description: 'collections, itertools, dataclasses를 배웁니다.', excerpt: 'collections, itertools, dataclasses를 배웁니다.', content_md: `collections, itertools, dataclasses를 다룹니다.` },
  { order_index: 31, slug: 'ch31-python-stdlib-sqlite3-and-pickle', title: '파이썬 표준 데이터베이스 및 객체 직렬화: sqlite3와 pickle 바이너리 보관', seo_title: '파이썬 내장 DB - sqlite3 사용법, Connection, Cursor, pickle & shelve 객체 저장', seo_description: 'sqlite3, pickle, shelve 모듈을 배웁니다.', excerpt: 'sqlite3와 pickle, shelve를 다룹니다.', content_md: `sqlite3와 pickle을 배웁니다.` },
  { order_index: 32, slug: 'ch32-python-stdlib-logging-and-argparse', title: '파이썬 로깅 및 CLI 인자 파서: logging 모듈과 argparse 터미널 도구', seo_title: '파이썬 로깅과 CLI - logging 레벨, Logger, FileHandler & argparse 옵션 파서', seo_description: 'logging 레벨, FileHandler, argparse CLI 파서를 배웁니다.', excerpt: 'logging 모듈과 argparse CLI 도구를 학습합니다.', content_md: `logging과 argparse를 학습합니다.` },
  { order_index: 33, slug: 'ch33-python-stdlib-hashlib-secrets-ssl', title: '파이썬 암호화 및 보안 표준 라이브러리: hashlib, secrets 및 ssl 통신', seo_title: '파이썬 보안 라이브러리 - hashlib(SHA256), secrets(안전한 난수) & ssl 암호화 소켓', seo_description: 'hashlib, secrets, ssl 표준 모듈을 배웁니다.', excerpt: 'hashlib, secrets, ssl 라이브러리를 배웁니다.', content_md: `hashlib, secrets, ssl을 다룹니다.` },
  { order_index: 34, slug: 'ch34-python-stdlib-urllib-and-http-server', title: '파이썬 표준 네트워킹 및 임베디드 웹 서버: urllib와 http.server', seo_title: '파이썬 표준 웹 모듈 - urllib.request, urllib.parse URL 파싱 & http.server', seo_description: 'urllib.request, urllib.parse, http.server를 배웁니다.', excerpt: 'urllib 모듈과 http.server를 학습합니다.', content_md: `urllib과 http.server를 다룹니다.` },
  { order_index: 35, slug: 'ch35-python-stdlib-zipfile-tarfile-zlib', title: '파이썬 압축 파일 포맷 및 아카이브: zipfile, tarfile 및 zlib 스트림 압축', seo_title: '파이썬 압축 라이브러리 - zipfile(.zip), tarfile(.tar.gz) & zlib 데이터 압축', seo_description: 'zipfile, tarfile, zlib 압축을 배웁니다.', excerpt: 'zipfile, tarfile, zlib 모듈을 다룹니다.', content_md: `zipfile, tarfile, zlib을 배웁니다.` },

  // 36 ~ 40 CPython C-API (pjt/23/c-api) 신규 독립 레슨 5개 대거 추가!
  {
    order_index: 36,
    slug: 'ch36-cpython-c-api-architecture-and-objects',
    title: 'CPython C-API 아키텍처: PyObject 헤더 구조와 PyTypeObject 타입 객체',
    seo_title: 'CPython C-API 아키텍처 - PyObject, ob_refcnt, ob_type, PyTypeObject 슬롯',
    seo_description: 'CPython 인터프리터 내부 C 언어 객체 표현 구조 PyObject(ob_refcnt, ob_type), PyTypeObject 메타 타입 슬롯(tp_name, tp_basicsize, tp_dealloc) 및 C에서 파이썬 객체 생성 원리를 다룹니다.',
    excerpt: 'CPython 인터프리터 내부에서 파이썬의 모든 객체를 C 언어로 표현하는 핵심 구조체인 PyObject와 타입 메타데이터 슬롯을 결정짓는 PyTypeObject 아키텍처를 심도 있게 학습합니다.',
    content_md: `CPython 인터프리터 내부에서 파이썬의 모든 동적 객체를 C 언어로 표현하는 근간 구조체인 **\`PyObject\`**와 객체의 행동 양식을 규정하는 **\`PyTypeObject\`**를 배웁니다.

---

## 1. CPython C-API 아키텍처 용어 사전 (Glossary)

- **PyObject**: CPython 내부에서 모든 파이썬 객체의 최상위 공통 C 구조체로, 참조 카운터(\`ob_refcnt\`)와 타입 객체 포인터(\`ob_type\`)를 선두에 갖습니다.
- **PyVarObject**: 파이썬 리스트, 튜플, 문자열처럼 길이가 변하는 시퀀스 객체를 위한 구조체로, \`ob_size\` 필드가 추가로 존재합니다.
- **PyTypeObject**: 파이썬 타입(Class) 자체를 정의하는 C 메타 구조체로, 메모리 크기(\`tp_basicsize\`), 할당 해제 함수(\`tp_dealloc\`), 슬롯 매핑 테이블을 갖습니다.
- **\`Py_TYPE(op)\`**: 파이썬 객체 포인터로부터 해당 객체의 \`PyTypeObject\` 타입 포인터를 추출해 내는 C 마크로 함수입니다.

---

## 2. CPython C 구조체 핵심 정의 (C-API Source)

\`\`\`c
/* CPython Internal Header (object.h) */
typedef struct _object {
    _PyObject_HEAD_EXTRA // 이중 연결 리스트 디버깅용 해더
    Py_ssize_t ob_refcnt; // 참조 카운터 (Reference Count)
    struct _typeobject *ob_type; // 타입 객체 포인터 (Type Pointer)
} PyObject;

/* 시퀀스 변길이 객체 구조체 */
typedef struct {
    PyObject ob_base;
    Py_ssize_t ob_size; /* 동적 요소 개수 */
} PyVarObject;
\`\`\`

---

## 3. C 예제: C 레벨에서 PyObject 타입 검사 및 속성 읽기

\`\`\`c
#include <Python.h>

void inspect_pyobject(PyObject* obj) {
    if (obj == NULL) return;

    // 1. 참조 카운트 및 타입 이름 읽기
    Py_ssize_t ref_count = Py_REFCNT(obj);
    const char* type_name = Py_TYPE(obj)->tp_name;

    printf("CPython 객체 검사 -> 타입: %s | 참조 카운트: %ld\\n", type_name, ref_count);

    // 2. 정수(Long) 타입 여부 검사
    if (PyLong_Check(obj)) {
        long value = PyLong_AsLong(obj);
        printf(" -> C 정수 변환 값: %ld\\n", value);
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파이썬에서 \`type(x)\`를 호출하면 CPython 내부에서 어떤 일이 일어나나요?**
A. CPython C 레벨에서 객체 포인터의 \`Py_TYPE(x)\` 마크로를 실행하여 연결된 \`PyTypeObject\`의 \`tp_name\` 스트링 및 타입 객체를 즉시 반환합니다.
`
  },
  {
    order_index: 37,
    slug: 'ch37-cpython-reference-counting-and-memory',
    title: 'CPython 참조 카운팅(Reference Counting)과 C 메모리 관리 (Py_INCREF, Py_DECREF, PyMem_Malloc)',
    seo_title: 'CPython 메모리 관리 - 참조 카운팅, Py_INCREF, Py_DECREF, PyMem_Malloc & GC',
    seo_description: 'CPython의 자동 메모리 관리 핵심인 참조 카운팅(Reference Counting) 메커니즘, 참조 소유권 규칙(Owned vs Borrowed Reference), Py_INCREF/Py_DECREF 및 PyMem_Malloc 할당자를 배웁니다.',
    excerpt: 'CPython 가비지 컬렉터의 근간이 되는 참조 카운팅 규칙과 C 확장 모듈 제작 시 필수적인 Py_INCREF(), Py_DECREF() 및 PyMem_Malloc 메모리 할당 관리법을 학습합니다.',
    content_md: `CPython의 메모리 관리 및 가비지 컬렉션의 핵심 원리인 **참조 카운팅(Reference Counting)** 메커니즘과 C 레벨 메모리 할당자(**\`PyMem_Malloc\`**)를 학습합니다.

---

## 1. CPython 참조 카운팅 용어 사전 (Glossary)

- **Reference Counting (참조 카운팅)**: 모든 \`PyObject\`의 \`ob_refcnt\`를 추적하여, 카운트가 0에 도달하는 즉시 \`tp_dealloc\` 함수를 호출하여 힙 메모리를 해제하는 CPython 메모리 관리 방식입니다.
- **Owned Reference (소유 참조)**: 코드 구역이 해당 객체의 참조 소유권을 직접 가집니다. 사용 후 불필요해지면 반드시 \`Py_DECREF()\`를 호출해야 메모리 누수(Memory Leak)가 발생하지 않습니다.
- **Borrowed Reference (빌린 참조)**: 객체의 포인터만 일시적으로 빌려 쓰는 상태로, \`Py_DECREF()\`를 호출하면 안 됩니다.
- **\`Py_INCREF(op)\` / \`Py_DECREF(op)\`**: 객체의 참조 카운트를 1 증가시키거나 1 감소시키는 C-API 마크로 함수입니다. (\`Py_XINCREF\`, \`Py_XDECREF\`는 NULL 체크 포함)

---

## 2. 소유 참조 vs 빌린 참조 규칙 정리표

| 참조 규칙 구분 | C-API 대표 함수 예시 | Py_DECREF 호출 여부 | 메모리 누수 위험성 |
| :--- | :--- | :---: | :--- |
| **Owned Reference (소유)** | \`PyLong_FromLong()\`, \`PyTuple_New()\` | **필수 (호출 필요)** | 미호출 시 메모리 누수 발생 |
| **Borrowed Reference (빌린)** | \`PyTuple_GetItem()\`, \`PyList_GetItem()\` | **금지 (호출 불가)** | 호출 시 세그멘테이션 폴트(Crash) |

---

## 3. 참조 카운팅 C 연동 안전성 예제

\`\`\`c
#include <Python.h>

PyObject* create_and_process_list(void) {
    // 1. 새로운 파이썬 리스트 객체 생성 (소유 참조 refcnt = 1)
    PyObject* list_obj = PyList_New(0);

    // 2. 파이썬 정수 객체 생성 (소유 참조 refcnt = 1)
    PyObject* num_obj = PyLong_FromLong(2026);

    // 3. 리스트에 요소 추가 (PyList_Append는 num_obj의 refcnt를 1 증가시킴)
    PyList_Append(list_obj, num_obj);

    // 4. num_obj는 이제 리스트가 소유권을 공유하므로, 함수 내 지역 소유권 반납
    Py_DECREF(num_obj);

    // 5. 생성된 리스트 반환 (호출자에게 소유권 이전)
    return list_obj;
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 순환 참조(Circular Reference)가 발생하면 참조 카운팅만으로 메모리가 해제되나요?**
A. 안 됩니다! 두 객체가 서로를 가리키면 참조 카운트가 1 밑으로 떨어지지 않는 순환 참조 무한 대기 현상이 발생합니다. 이를 위해 CPython에는 순환 참조 감지용 **세대별 가비지 컬렉터(Cyclic Garbage Collector)**가 보조엔진으로 탑재되어 있습니다.
`
  },
  {
    order_index: 38,
    slug: 'ch38-cpython-c-exception-handling-and-args',
    title: 'CPython C-API 예외 처리 및 C 함수 인자 파싱 (PyErr_SetString, PyArg_ParseTuple)',
    seo_title: 'CPython C 예외 및 인자 파싱 - PyErr_SetString, PyArg_ParseTuple, Py_BuildValue',
    seo_description: 'C 영역에서 파이썬 예외 발생 PyErr_SetString(), PyErr_Occurred(), 파이썬 인자를 C 변수로 파싱하는 PyArg_ParseTuple() 및 Py_BuildValue() C-API를 배웁니다.',
    excerpt: 'C 확장 모듈 개발 시 파이썬 튜플 인자를 C 언어 변수로 추출하는 PyArg_ParseTuple()과 C 영역에서 파이썬 예외를 띄우는 PyErr_SetString()을 학습합니다.',
    content_md: `C 언어로 파이썬 확장 모듈을 개발할 때 파이썬 인자를 C 데이터 타입으로 변환하는 **\`PyArg_ParseTuple\`**과 C 영역에서 파이썬 예외를 발생하는 **\`PyErr_SetString\`**을 다룹니다.

---

## 1. 인자 파싱 및 예외 처리 용어 사전 (Glossary)

- **\`PyArg_ParseTuple(args, format, ...)\`**: 파이썬에서 넘어온 위치 인자 튜플(\`args\`)을 C 언어 포맷 문자열(\`"i"\`, \`"s"\`, \`"d"\` 등)에 맞춰 C 변수에 저장하는 인자 파서 C-API입니다.
- **\`Py_BuildValue(format, ...)\`**: C 언어의 기본 데이터 타입들(\`int\`, \`double\`, \`char*\`)을 파이썬 객체(\`PyObject*\`)로 포장 변환해 주는 반환 생성 C-API입니다.
- **\`PyErr_SetString(type, msg)\`**: C 함수 내부에서 파이썬 예외(예: \`PyExc_ValueError\`, \`PyExc_TypeError\`)를 런타임 스택에 띄우고 \`NULL\`을 리턴하도록 세팅하는 예외 C-API입니다.

---

## 2. 주요 C-API Format Specifier 포맷 문자 정리표

| 포맷 문자 | 파이썬 데이터 타입 | 대응되는 C 데이터 타입 |
| :---: | :--- | :--- |
| **\`i\`** | 정수형 (\`int\`) | \`int\` |
| **\`s\`** | 문자열 (\`str\`) | \`const char*\` (UTF-8 텍스트) |
| **\`d\`** | 실수형 (\`float\`) | \`double\` |
| **\`O\`** | 임의 파이썬 객체 | \`PyObject*\` |

---

## 3. C-API 인자 파싱 및 예외 처리 함수 구현 코드

\`\`\`c
#include <Python.h>

// 파이썬에서 두 숫자를 받아 나누기를 수행하는 C 함수
static PyObject* py_custom_divide(PyObject* self, PyObject* args) {
    double a, b;

    // 1. 파이썬 인자 파싱 ("dd" -> double 2개 요구)
    if (!PyArg_ParseTuple(args, "dd", &a, &b)) {
        return NULL; // 파싱 실패 시 TypeError 예외 자동 발생됨
    }

    // 2. 0으로 나누기 예외 처리 (PyErr_SetString)
    if (b == 0.0) {
        PyErr_SetString(PyExc_ZeroDivisionError, "C-API 경고: 0으로 나눌 수 없습니다.");
        return NULL; // 예외 발생 알림용 NULL 반환
    }

    // 3. 연산 수행 및 파이썬 실수 객체 반환 (Py_BuildValue)
    double result = a / b;
    return Py_BuildValue("d", result);
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. C-API 함수가 에러로 실패했을 때 왜 반드시 \`NULL\`을 반환해야 하나요?**
A. CPython 인터프리터는 C 확장 함수의 반환값이 \`NULL\`임을 확인하는 순간 예외 스택(\`PyErr_Occurred()\`)을 조사하여 파이썬 런타임 영역으로 \`Traceback\` 예외를 전파시키기 때문입니다.
`
  },
  {
    order_index: 39,
    slug: 'ch39-cpython-c-concrete-objects-long-unicode-dict',
    title: 'CPython 구체적 C 데이터 타입 조작: PyLongObject, PyUnicodeObject 및 PyDictObject',
    seo_title: 'CPython C 구체적 타입 - PyLong, PyUnicode, PyDict, PyList C-API 조작',
    seo_description: 'CPython 구체적 C-API: PyLong_FromLong, PyUnicode_FromString, PyDict_SetItemString, PyList_Append를 통한 C 레벨 파이썬 자료구조 고속 생성 및 검색을 배웁니다.',
    excerpt: 'CPython 인터프리터 C 레벨에서 파이썬 정수, 유니코드 문자열, 딕셔너리, 리스트 구체적 객체(Concrete Objects)를 C 코드로 직접 다루는 방식을 배웁니다.',
    content_md: `CPython C 레벨에서 파이썬 정수, 문자열, 딕셔너리, 리스트 구체적 객체(**Concrete Objects**)를 직접 다루는 **C-API 함수 집합**을 다룹니다.

---

## 1. C 구체적 객체 타입 C-API 용어 사전 (Glossary)

- **PyLong C-API**: 파이썬 정수 객체를 생성(\`PyLong_FromLong()\`)하거나 C 정수로 변환(\`PyLong_AsLong()\`)하는 API입니다.
- **PyUnicode C-API**: 유니코드 문자열 객체를 C 문자열로 조작하는 API입니다. (\`PyUnicode_FromString()\`, \`PyUnicode_AsUTF8()\`)
- **PyDict C-API**: 파이썬 딕셔너리를 C 레벨에서 빠르게 다루는 API입니다. (\`PyDict_New()\`, \`PyDict_SetItemString()\`, \`PyDict_GetItemString()\`)
- **PyList C-API**: 파이썬 리스트를 C 레벨에서 생성 및 수정하는 API입니다. (\`PyList_New()\`, \`PyList_Append()\`, \`PyList_Size()\`)

---

## 2. C 레벨 파이썬 딕셔너리 구성 예제

\`\`\`c
#include <Python.h>

PyObject* build_c_python_dictionary(void) {
    // 1. 새 딕셔너리 객체 생성 (PyDict_New)
    PyObject* dict_obj = PyDict_New();

    // 2. C 문자열 Key, 파이썬 객체 Value 삽입
    PyObject* name_val = PyUnicode_FromString("홍길동");
    PyObject* age_val = PyLong_FromLong(30);

    PyDict_SetItemString(dict_obj, "name", name_val);
    PyDict_SetItemString(dict_obj, "age", age_val);

    // 3. 소유권 반납 (PyDict_SetItemString이 내부에서 refcnt를 올림)
    Py_DECREF(name_val);
    Py_DECREF(age_val);

    return dict_obj; // 완성된 딕셔너리 반환
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. C-API에서 \`PyDict_SetItem()\`과 \`PyDict_SetItemString()\`의 차이는?**
A. \`PyDict_SetItem()\`은 Key 매개변수로 파이썬 \`PyObject*\` 객체를 요구하며, \`PyDict_SetItemString()\`은 편의성을 위해 일반 C 문자열(\`const char*\`)을 직접 Key로 넘길 수 있습니다.
`
  },
  {
    order_index: 40,
    slug: 'ch40-cpython-c-extension-module-creation',
    title: 'CPython C 확장 모듈 제작: PyModuleDef, PyMethodDef 및 GIL/멀티스레드 C-API',
    seo_title: 'CPython C 확장 모듈 - PyModuleDef, PyMethodDef, PyMODINIT_FUNC & GIL 제어',
    seo_description: 'C 언어로 작성하는 파이썬 확장 모듈(C Extension), PyMethodDef 메소드 테이블, PyModuleDef 모듈 정의, PyMODINIT_FUNC, C에서의 GIL 해제(Py_BEGIN_ALLOW_THREADS)를 배웁니다.',
    excerpt: 'C 언어로 파이썬에서 직접 import하여 사용하는 고속 C 확장 모듈(C Extension Module)을 처음부터 끝까지 빌드하고 GIL을 해제하여 멀티스레딩 성능을 올리는 기법을 배웁니다.',
    content_md: `C 언어로 작성된 연산 코드를 파이썬에서 **\`import\` 모듈 형태로 불러와 고속 구동하는 C 확장 모듈(C Extension Module)** 제작 및 GIL 제어를 다룹니다.

---

## 1. C 확장 모듈 핵심 용어 사전 (Glossary)

- **\`PyMethodDef\`**: C 확장 모듈이 파이썬에 제공하는 메소드 이름, C 함수 포인터, 인자 전달 플래그(\`METH_VARARGS\`), Docstring을 정의하는 메타 테이블 배열입니다.
- **\`PyModuleDef\`**: C 확장 모듈의 전체 이름, 설명문, 모듈 크기, 메소드 테이블을 포함하는 모듈 정의 구조체입니다.
- **\`PyMODINIT_FUNC\`**: 파이썬이 모듈을 \`import mymodule\` 할 때 최초 호출되는 C 모듈 초기화 에폭 엔트리 함수 키워드입니다.
- **\`Py_BEGIN_ALLOW_THREADS\` / \`Py_END_ALLOW_THREADS\`**: 연산량이 많은 C 영역 코드 실행 동안 CPython의 GIL(Global Interpreter Lock)을 해제하여 다른 파이썬 스레드가 병렬 구동되도록 돕는 C-API 마크로입니다.

---

## 2. 완성된 C 확장 모듈 전체 C 소스 코드 (mymath.c)

\`\`\`c
#include <Python.h>

// 1. C 구현 함수 (두 수의 곱셈)
static PyObject* mymath_multiply(PyObject* self, PyObject* args) {
    long a, b;
    if (!PyArg_ParseTuple(args, "ll", &a, &b)) {
        return NULL;
    }
    
    // 복잡 수치 연산 시 GIL 해제 가동
    Py_BEGIN_ALLOW_THREADS
    long result = a * b; // C 레벨 고속 연산
    Py_END_ALLOW_THREADS

    return PyLong_FromLong(result);
}

// 2. 메소드 테이블 정의 (PyMethodDef)
static PyMethodDef MyMathMethods[] = {
    {"multiply", mymath_multiply, METH_VARARGS, "C 언어로 연산하는 고속 곱셈 함수"},
    {NULL, NULL, 0, NULL} // 테이블 끝 알림
};

// 3. 모듈 정의 구조체 (PyModuleDef)
static struct PyModuleDef mymathmodule = {
    PyModuleDef_HEAD_INIT,
    "mymath", // 모듈 import 이름
    "CPython C-API 기반 고속 연산 모듈", // 모듈 설명
    -1,
    MyMathMethods
};

// 4. 모듈 초기화 엔트리 함수 (PyMODINIT_FUNC)
PyMODINIT_FUNC PyInit_mymath(void) {
    return PyModule_Create(&mymathmodule);
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 이 C 파일(\`mymath.c\`)을 빌드하여 파이썬에서 \`import mymath\` 하려면 어떻게 하나요?**
A. \`setuptools\`를 이용한 \`setup.py\` 파일에 \`Extension('mymath', sources=['mymath.c'])\`을 작성한 후 \`python setup.py build_ext --inplace\` 명령을 실행하면 현재 폴더에 파이썬용 공유 라이브러리가 빌드되어 즉시 \`import\` 가능해집니다.
`
  }
];

// Split into 10 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 16),
  lessons.slice(16, 20),
  lessons.slice(20, 24),
  lessons.slice(24, 28),
  lessons.slice(28, 32),
  lessons.slice(32, 36),
  lessons.slice(36, 40)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full Python C-API Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const content_html = marked.parse(lesson.content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  '${escapeSql(lesson.slug)}',
  '${escapeSql(lesson.title)}',
  '${escapeSql(lesson.excerpt)}',
  '${escapeSql(lesson.content_md)}',
  '${escapeSql(content_html)}',
  'published',
  '${escapeSql(lesson.seo_title)}',
  '${escapeSql(lesson.seo_description)}',
  ${lesson.order_index},
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
`;
  }

  fs.writeFileSync(`scratch/seed_python_capi_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 10 C-API SQL chunk files for Python!');
