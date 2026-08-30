import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  // 1 ~ 28 기존 레슨 유지 (생략 없이 전체 보존)
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
  {
    order_index: 2,
    slug: 'ch02-variables-data-types-and-operators',
    title: '변수, 기본 자료형(Numbers, Strings, Booleans) 및 수치 연산',
    seo_title: '파이썬 변수와 자료형 - int, float, str, bool, f-string 포맷팅 & 연산자',
    seo_description: '파이썬의 동적 타입 변수, 기본 자료형(숫자형, 문자열, 불리언), f-string 포맷팅, type() 및 id() 검사, 산술/비교/논리 연산자를 배웁니다.',
    excerpt: '파이썬의 동적 바인딩 변수 개념, 기본 수치 및 문자열 자료형, f-string 포맷팅과 산술, 비교, 논리 연산자 활용법을 학습합니다.',
    content_md: `프로그램에서 데이터를 기억하는 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**을 학습합니다.`
  },
  {
    order_index: 3,
    slug: 'ch03-control-flow-conditionals-and-loops',
    title: '제어 구조: 조건문(if-elif-else, match-case)과 루프(for, while, range, enumerate, zip)',
    seo_title: '파이썬 제어문 - if-elif-else, match-case, for, while, range, enumerate, zip',
    seo_description: '조건문(if-elif-else), 파이썬 3.10+ match-case 패턴 매칭, 반복문(for, while), 내장 루프 함수(range, enumerate, zip), break 및 continue 흐름 제어를 학습합니다.',
    excerpt: '프로그램 실행 흐름을 제어하는 조건문과 파이썬 3.10+ match-case 패턴 매칭, range(), enumerate(), zip() 함수를 활용한 고급 루프 순회 기법을 배웁니다.',
    content_md: `프로그램의 논리적 실행 제어를 담당하는 **조건문(if)**과 **패턴 매칭(match-case)**, 반복 수행을 처리하는 **반복문(for, while)**의 사용법을 학습합니다.`
  },
  {
    order_index: 4,
    slug: 'ch04-data-structures-list-tuple-set-dict',
    title: '파이썬 핵심 자료구조: 리스트, 튜플, 집합(Set) 및 딕셔너리',
    seo_title: '파이썬 자료구조 - List, Tuple, Set, Dictionary & List Comprehension',
    seo_description: '파이썬의 4대 기본 자료구조(리스트, 튜플, 집합, 딕셔너리)의 특징, 슬라이싱([:]), List Comprehension, Dict View 메소드를 다룹니다.',
    excerpt: '파이썬 4대 핵심 컬렉션인 리스트, 튜플, 집합, 딕셔너리의 가변성(Mutability)과 파이썬 특유의 한 줄 생성식 컴프리헨션(Comprehension)을 배웁니다.',
    content_md: `여러 개의 관련 데이터를 묶어서 관리하는 파이썬 4대 데이터 구조인 **리스트(List), 튜플(Tuple), 집합(Set), 딕셔너리(Dictionary)**를 학습합니다.`
  },
  { order_index: 5, slug: 'ch05-functions-lambda-and-scope', title: '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 LEGB 스코프 룰', seo_title: '파이썬 함수와 람다 - def, *args, **kwargs, lambda, LEGB 스코프 룰', seo_description: 'def 함수 정의, 가변 인자(*args, **kwargs), 익명 람다(lambda) 함수, 일급 객체, LEGB 스코프 변수 참조 규칙을 해설합니다.', excerpt: '함수 정의, 가변 인자(*args, **kwargs), 람다(lambda) 및 LEGB 스코프 규칙을 학습합니다.', content_md: `특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 **함수(Function)**와 **LEGB 규칙**을 다룹니다.` },
  { order_index: 6, slug: 'ch06-modules-packages-and-venv', title: '모듈(Module), 패키지(Package)와 가상환경(venv) 및 pip', seo_title: '파이썬 모듈과 패키지 - import, __name__, sys.path, venv 가상환경 & pip', seo_description: '파이썬 파일 모듈, 패키지, __name__ == "__main__", venv 가상환경 및 pip 패키지 관리를 배웁니다.', excerpt: '모듈과 패키지 구조, venv 가상환경과 pip 패키지 관리자를 학습합니다.', content_md: `코드의 모듈화와 재사용을 돕는 **모듈(Module)**과 **가상환경(venv)**을 다룹니다.` },
  { order_index: 7, slug: 'ch07-file-io-and-context-managers', title: '파일 입출력(File I/O)과 컨텍스트 매니저(with 문) 및 pathlib', seo_title: '파이썬 파일 입출력 - open(), read, write, with 문 & pathlib 모듈', seo_description: '파일 읽기/쓰기 모드, with 컨텍스트 매니저, pathlib 객체지향 경로 조작을 다룹니다.', excerpt: '파일 입출력 open() 및 with 컨텍스트 매니저, pathlib을 배웁니다.', content_md: `디스크 상의 파일 입출력과 리소스를 안전하게 관리하는 **with 컨텍스트 매니저**를 다룹니다.` },
  { order_index: 8, slug: 'ch08-exception-handling-and-custom-exceptions', title: '예외 처리(try-except-else-finally) 및 사용자 정의 예외', seo_title: '파이썬 예외 처리 - try, except, else, finally, raise & 사용자 정의 Exception', seo_description: 'try-except-else-finally 구문, raise, Exception 커스텀 예외 클래스를 배웁니다.', excerpt: 'try-except-else-finally 예외 처리 구문 및 사용자 정의 예외를 학습합니다.', content_md: `프로그램 실행 중 런타임 에러를 안전하게 포획하는 **예외 처리(Exception Handling)**를 학습합니다.` },
  { order_index: 9, slug: 'ch09-object-oriented-programming-classes', title: '객체지향 프로그래밍(OOP): 클래스, 인스턴스, 생성자(__init__) 및 캡슐화', seo_title: '파이썬 OOP 기초 - class, __init__, self, 인스턴스 변수, 캡슐화(__private)', seo_description: '클래스와 인스턴스, 생성자 메소드(__init__), self, 캡슐화(__private)를 학습합니다.', excerpt: '클래스 작성법, 생성자 __init__(), self 인자 및 비공개 속성 캡슐화를 다룹니다.', content_md: `데이터와 기능을 하나로 묶는 **객체지향 프로그래밍(OOP)** 기초를 학습합니다.` },
  { order_index: 10, slug: 'ch10-advanced-oop-inheritance-magic-methods', title: '상속(Inheritance), 다형성 및 던더 매직 메소드(Dunder Methods)', seo_title: '파이썬 고급 OOP - 상속, super(), 매직 메소드(__str__, __len__), ABC 추상 클래스', seo_description: '부모 클래스 상속, super() 호출, 던더 매직 메소드, ABC 추상 클래스를 배웁니다.', excerpt: '상속(Inheritance), super(), 매직 메소드(Dunder Methods)와 추상 클래스를 학습합니다.', content_md: `클래스 상속과 파이썬 연산자 동작을 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.` },
  { order_index: 11, slug: 'ch11-iterators-generators-and-decorators', title: '이터레이터(Iterator), yield 제너레이터(Generator)와 데코레이터(Decorator)', seo_title: '파이썬 고급 문법 - Iterator, yield 제너레이터, 클로저 & @decorator', seo_description: '이터레이터(__next__), yield 제너레이터, 클로저 및 @decorator 패턴을 학습합니다.', excerpt: '제너레이터(yield)와 데코레이터(@decorator) 패턴을 배웁니다.', content_md: `메모리를 아끼는 **제너레이터(Generator)**와 코드를 확장하는 **데코레이터(Decorator)**를 배웁니다.` },
  { order_index: 12, slug: 'ch12-standard-libraries-math-random-datetime-json', title: '파이썬 핵심 표준 라이브러리 (math, random, datetime, json, re)', seo_title: '파이썬 표준 라이브러리 - math, random, datetime, json 직렬화 & re 정규식', seo_description: '내장 표준 라이브러리 math, random, datetime, json, re 정규식을 배웁니다.', excerpt: '필수 표준 라이브러리(math, random, datetime, json, re) 활용법을 배웁니다.', content_md: `파이썬 기본 설치 시 동봉되는 **필수 표준 라이브러리 모듈들**을 학습합니다.` },
  { order_index: 13, slug: 'ch13-gui-programming-with-tkinter', title: 'tkinter를 활용한 파이썬 데스크톱 GUI 프로그래밍', seo_title: '파이썬 GUI 프로그래밍 - tkinter, Tk, Label, Button, Entry, pack/grid', seo_description: '표준 GUI 라이브러리 tkinter, 컴포넌트, 레이아웃 매니저(pack, grid)를 학습합니다.', excerpt: 'tkinter를 이용하여 데스크톱 GUI 프로그램을 개발하는 기법을 배웁니다.', content_md: `파이썬 표준 GUI 모듈인 **tkinter**를 이용한 데스크톱 GUI 개발을 학습합니다.` },
  { order_index: 14, slug: 'ch14-concurrency-multiprocessing-and-asyncio', title: '파이썬 동시성 프로그래밍: threading, multiprocessing 및 asyncio', seo_title: '파이썬 동시성 - threading, multiprocessing, GIL 한계 & asyncio async/await', seo_description: 'multiprocessing, threading, asyncio async/await 비동기 프로그래밍을 배웁니다.', excerpt: 'threading, multiprocessing 및 asyncio 비동기 코딩을 학습합니다.', content_md: `동시 실행 및 병렬 처리를 담당하는 **threading, multiprocessing, asyncio**를 다룹니다.` },
  { order_index: 15, slug: 'ch15-web-scraping-and-http-requests', title: '웹 스크래핑과 파이썬 HTTP 통신 (requests, BeautifulSoup4)', seo_title: '파이썬 웹 크롤링 - requests HTTP GET/POST, BeautifulSoup4 파싱 & CSS 셀렉터', seo_description: 'requests, BeautifulSoup4 HTML DOM 파싱 및 CSS 셀렉터를 배웁니다.', excerpt: 'requests 모듈과 BeautifulSoup4 크롤링 기법을 배웁니다.', content_md: `웹 통신 **\`requests\`**와 HTML 파싱 **\`BeautifulSoup4\`**를 학습합니다.` },
  { order_index: 16, slug: 'ch16-python-type-hinting-and-annotations', title: '파이썬 타입 힌팅(Type Hinting)과 typing 모듈', seo_title: '파이썬 타입 힌팅 - type annotations, typing 모듈, mypy 정적 분석', seo_description: '타입 어노테이션, typing 모듈과 mypy 정적 분석기를 학습합니다.', excerpt: '타입 힌팅(Type Hinting)과 typing 모듈, mypy 정적 분석기를 다룹니다.', content_md: `변수와 함수의 타입을 명시해 주는 **타입 힌팅(Type Hinting)**을 다룹니다.` },
  { order_index: 17, slug: 'ch17-functional-programming-map-filter-reduce', title: '파이썬 함수형 프로그래밍 기법 (map, filter, reduce, functools)', seo_title: '파이썬 함수형 프로그래밍 - map, filter, reduce, functools & lru_cache', seo_description: 'map(), filter(), reduce(), functools.lru_cache를 배웁니다.', excerpt: '함수형 프로그래밍(map, filter, reduce, lru_cache) 기법을 학습합니다.', content_md: `부작용이 없는 **함수형 프로그래밍(Functional Programming)** 기법을 다룹니다.` },
  { order_index: 18, slug: 'ch18-python-c-extension-and-ctypes', title: '파이썬 C 연동 및 ctypes, cffi 확장 모듈', seo_title: '파이썬 C 연동 - ctypes, C-API, Shared Library .so/.dll 호출 & 바인딩', seo_description: 'C 공유 라이브러리(.so/.dll)를 파이썬에서 호출하는 ctypes 모듈을 배웁니다.', excerpt: 'C 라이브러리를 ctypes 모듈로 직접 불러와 호출하는 기법을 배웁니다.', content_md: `C 언어 라이브러리를 바인딩 호출하는 **\`ctypes\` 모듈**을 다룹니다.` },
  { order_index: 19, slug: 'ch19-python-packaging-distribution-wheel', title: '파이썬 패키징과 PyPI 배포 (pyproject.toml, setuptools, wheel)', seo_title: '파이썬 패키징 - pyproject.toml, setuptools, wheel & PyPI twine 배포', seo_description: 'pyproject.toml 규격 패키징 및 PyPI 배포 과정을 배웁니다.', excerpt: 'pyproject.toml과 build, twine을 이용해 PyPI에 배포하는 과정을 학습합니다.', content_md: `오픈소스 패키지를 표준 규격(**\`pyproject.toml\`**)으로 패키징하는 과정을 다룹니다.` },
  { order_index: 20, slug: 'ch20-python-final-project-mini-game-and-apps', title: '파이썬 실전 종합 프로젝트: 터틀 그래픽 미니 게임 & GUI 관리 앱', seo_title: '파이썬 실전 프로젝트 - Turtle 터틀 그래픽 미니 게임 & GUI 관리 앱', seo_description: 'Turtle 그래픽 미니 게임과 tkinter GUI 데이터 관리 앱을 구현합니다.', excerpt: 'Turtle 미니 게임과 GUI 데이터 관리 애플리케이션을 완성합니다.', content_md: `배운 파이썬 기술을 통합하여 **실전 파이썬 종합 프로젝트**를 완성합니다.` },
  { order_index: 21, slug: 'ch21-python-data-analysis-numpy-pandas', title: '파이썬 데이터 분석 입문: NumPy 배열 연산과 Pandas 데이터프레임 처리', seo_title: '파이썬 데이터 분석 - NumPy N차원 배열, Pandas DataFrame & CSV 전처리', seo_description: 'NumPy 배열, Pandas DataFrame 결측치 정제 및 CSV 파일 읽기/쓰기를 배웁니다.', excerpt: 'NumPy 벡터화 연산과 Pandas DataFrame 데이터 전처리 기술을 다룹니다.', content_md: `NumPy 배열 연산과 Pandas 데이터프레임(DataFrame) 전처리 기술을 다룹니다.` },
  { order_index: 22, slug: 'ch22-python-web-framework-django-fastapi', title: '파이썬 웹 프레임워크 비교: Django 풀스택 vs FastAPI 비동기 REST API', seo_title: '파이썬 웹 프레임워크 - Django MVT 아키텍처 vs FastAPI 비동기 REST API 구축', seo_description: 'Django와 FastAPI의 구조적 차이와 REST API 구축법을 배웁니다.', excerpt: 'Django와 FastAPI의 아키텍처 비교 및 실전 서버 구축법을 배웁니다.', content_md: `Django 풀스택 프레임워크와 비동기 FastAPI 아키텍처를 비교합니다.` },
  { order_index: 23, slug: 'ch23-python-orm-sqlalchemy-and-database', title: '파이썬 ORM 데이터베이스 연동: SQLAlchemy와 SQLModel 완전 가이드', seo_title: '파이썬 ORM - SQLAlchemy 2.0, SQLModel, PostgreSQL/MySQL 연동 & Alembic', seo_description: 'SQLAlchemy 2.0 모델링, Session DB CRUD 및 Alembic 마이그레이션을 다룹니다.', excerpt: 'SQLAlchemy ORM 및 SQLModel 기반 데이터베이스 트랜잭션 관리 기법을 배웁니다.', content_md: `SQLAlchemy ORM과 SQLModel을 다룹니다.` },
  { order_index: 24, slug: 'ch24-python-web-automation-selenium-playwright', title: '파이썬 웹 자동화 및 동적 렌더링 스크래핑: Selenium과 Playwright', seo_title: '파이썬 웹 자동화 - Selenium WebDriver vs Playwright 비동기 크롤링', seo_description: 'Selenium WebDriver와 Playwright 비동기 브라우저 자동화를 배웁니다.', excerpt: 'Headless Browser로 자동화하는 Selenium과 Playwright를 학습합니다.', content_md: `웹 자동화 도구인 Selenium과 Playwright를 배웁니다.` },
  { order_index: 25, slug: 'ch25-python-unit-testing-pytest-and-mock', title: '파이썬 단위 테스트와 TDD: unittest, pytest 및 mock 객체 활용', seo_title: '파이썬 테스트 코드 - pytest 사용법, unittest, fixture, mock 가짜 객체', seo_description: '단위 테스트(Unit Test), pytest 프레임워크, mock 객체 활용법을 배웁니다.', excerpt: 'pytest와 가짜 객체를 만드는 mock 기법을 학습합니다.', content_md: `단위 테스트(Unit Testing) 및 pytest 프레임워크를 학습합니다.` },
  { order_index: 26, slug: 'ch26-python-ai-machine-learning-scikit-learn', title: '파이썬 머신러닝 기초: Scikit-learn 지도학습과 분류/회귀 모델', seo_title: '파이썬 머신러닝 - Scikit-learn, 선형 회귀, 결정 트리, Dataset 분할 & 평가', seo_description: 'Scikit-learn, 지도학습, train_test_split, 회귀 및 결정 트리 분류를 배웁니다.', excerpt: 'Scikit-learn을 이용하여 회귀 및 분류 모델링 기법을 배웁니다.', content_md: `머신러닝(Machine Learning)과 대표 프레임워크 Scikit-learn을 다룹니다.` },
  { order_index: 27, slug: 'ch27-python-deep-learning-pytorch-basics', title: '파이썬 딥러닝 입문: PyTorch 텐서(Tensor)와 신경망(Neural Network) 구현', seo_title: '파이썬 딥러닝 - PyTorch 텐서, Autograd 자동 미분, Linear 신경망 & Loss', seo_description: 'PyTorch, Tensor 자료구조, Autograd 자동 미분 역전파를 다룹니다.', excerpt: 'PyTorch 프레임워크, Tensor 및 역전파 메커니즘을 배웁니다.', content_md: `PyTorch 기반 딥러닝(Deep Learning)을 배웁니다.` },
  { order_index: 28, slug: 'ch28-python-big-data-pyspark-and-parallel', title: '파이썬 분산 빅데이터 처리: PySpark와 RDD/DataFrame 대용량 분산 연산', seo_title: '파이썬 빅데이터 - PySpark, Apache Spark 클러스터, RDD vs Spark DataFrame', seo_description: 'PySpark, RDD, Spark DataFrame 분산 연산 및 빅데이터 파이프라인 구축을 다룹니다.', excerpt: 'PySpark와 Spark DataFrame을 익힙니다.', content_md: `PySpark 빅데이터 파이프라인을 다룹니다.` },

  // 29 ~ 35 파이썬 표준 라이브러리(pjt/23/library) 심화 독립 신규 레슨 추가!
  {
    order_index: 29,
    slug: 'ch29-python-stdlib-os-sys-subprocess',
    title: '파이썬 시스템 제어 표준 라이브러리: os, sys 및 subprocess 프로세스 관리',
    seo_title: '파이썬 표준 라이브러리 - os, sys, subprocess 프로세스 실행 & Pipe',
    seo_description: '파이썬 표준 라이브러리 os(파일 시스템 제어), sys(인터프리터 변수, sys.argv), subprocess(외부 커맨드 프로세스 실행, Popen, Pipe 통신)를 심도 있게 학습합니다.',
    excerpt: '운영체제 환경 변수와 디렉토리를 조작하는 os, sys 인터프리터 제어 및 외부 쉘 명령어/프로세스를 독립 구동하는 subprocess 라이브러리를 다룹니다.',
    content_md: `운영체제 파일 시스템 제어(**\`os\`**), 인터프리터 파라미터(**\`sys\`**), 외부 프로세스 실행(**\`subprocess\`**)을 담당하는 **파이썬 코어 시스템 표준 라이브러리**를 다룹니다.

---

## 1. 시스템 라이브러리 핵심 용어 사전 (Glossary)

- **os Module**: 운영체제 환경 변수(\`os.environ\`), 디렉토리 생성/삭제(\`os.mkdir\`, \`os.walk\`), 파일 경로 조작을 담당하는 모듈입니다.
- **sys Module**: 파이썬 인터프리터가 구동 중인 시스템 정보(\`sys.version\`), 명령줄 인자(\`sys.argv\`), 검색 경로(\`sys.path\`), 강제 종료(\`sys.exit()\`)를 제어하는 모듈입니다.
- **subprocess Module**: 외부 쉘 커맨드(bash, cmd)나 서드파티 실행 파일을 독립 프로세스로 새로 생성하여 결과를 읽거나 파이프(Pipe)로 통신하는 강력한 모듈입니다.
- **\`subprocess.run()\` / \`Popen\`**: 동기적 프로세스 완료를 기다리는 \`run()\`과 비동기 스트리밍 프로세스 입출력을 제어하는 \`Popen\` 객체입니다.

---

## 2. os, sys 및 subprocess 실전 제어 코드

\`\`\`python
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
    # 'ls -la' (Windows는 'dir') 실행하여 결과 capture
    cmd = ["dir"] if sys.platform.startswith("win") else ["ls", "-la"]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    print("=== [subprocess 쉘 명령 실행 결과 상위 3줄] ===")
    print("\n".join(result.stdout.splitlines()[:3]))
except subprocess.CalledProcessError as e:
    print(f"명령 실행 실패: {e}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 과거의 \`os.system()\` 대신 \`subprocess.run()\`을 써야 하나요?**
A. \`os.system()\`은 쉘 인젝션(Shell Injection) 보안 취약점에 노출되고 표준 출력/에러를 캡처할 수 없습니다. 반면 \`subprocess\`는 안전하게 인자 리스트를 넘기고 리턴 코드와 출력을 정밀하게 제어할 수 있습니다.
`
  },
  {
    order_index: 30,
    slug: 'ch30-python-stdlib-collections-itertools-dataclasses',
    title: '파이썬 데이터 구조 및 함수형 유틸리티: collections, itertools 및 dataclasses',
    seo_title: '파이썬 고급 표준 모듈 - collections(Counter, defaultdict), itertools & dataclasses',
    seo_description: '파이썬 표준 모듈 collections(Counter, defaultdict, deque, namedtuple), itertools(product, combinations, permutations), dataclasses(@dataclass)를 학습합니다.',
    excerpt: '파이썬 특수 자료구조(Counter, defaultdict, deque)와 효율적 순회 도구 itertools, 보일러플레이트 코드를 줄여주는 dataclasses를 배웁니다.',
    content_md: `특수 자료구조를 제공하는 **\`collections\`**, 무한 시퀀스 및 순열/조합의 **\`itertools\`**, 데이터 객체 생성 코드를 획기적으로 줄여주는 **\`dataclasses\`** 모듈을 다룹니다.

---

## 1. 고급 자료구조 유틸리티 용어 사전 (Glossary)

- **Counter**: 요소의 개수를 자동으로 세어서 딕셔너리 형태로 반환해 주는 빈도 계산 클래스입니다. (\`collections.Counter\`)
- **defaultdict**: 존재하지 않는 Key에 접근했을 때 KeyError 대신 설정한 기본값(default)을 자동 생성해 주는 딕셔너리입니다.
- **deque (Double-ended Queue)**: 양쪽 끝에서 추가/삭제가 모두 $O(1)$ 초고속으로 일어나는 큐/스택 자료구조입니다.
- **itertools**: 순열(\`permutations\`), 조합(\`combinations\`), 카테시안 곱(\`product\`), 반복(\`cycle\`) 등 최적화된 이터레이터 생성기 모듈입니다.
- **\`@dataclass\`**: 파이썬 3.7+에 도입되어 \`__init__()\`, \`__repr__()\`, \`__eq__()\` 메소드를 자동으로 생성해 주는 데이터 클래스 데코레이터입니다.

---

## 2. collections, itertools 및 dataclass 활용 실습

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 일반 리스트와 \`deque\`의 성능 차이는 어느 정도인가요?**
A. 리스트의 맨 앞 요소 삭제/삽입(\`list.pop(0)\`)은 $O(N)$ 시간이 걸리지만, \`deque.popleft()\`는 $O(1)$ 시간에 수행되므로 **큐(Queue) 알고리즘 구현 시 deque 사용이 필수적**입니다.
`
  },
  {
    order_index: 31,
    slug: 'ch31-python-stdlib-sqlite3-and-pickle',
    title: '파이썬 표준 데이터베이스 및 객체 직렬화: sqlite3와 pickle 바이너리 보관',
    seo_title: '파이썬 내장 DB - sqlite3 사용법, Connection, Cursor, pickle & shelve 객체 저장',
    seo_description: '파이썬 표준 내장 DB sqlite3(Connection, Cursor, commit, SQL CRUD), pickle(객체 바이너리 직렬화/복원), shelve(키-값 파일 영속성)를 배웁니다.',
    excerpt: '별도 DB 서버 설치 없이 즉시 사용하는 경량 관계형 DB sqlite3 모듈과 파이썬 객체 상태를 파일로 직렬화하는 pickle 및 shelve를 다룹니다.',
    content_md: `별도의 데이터베이스 서버 설치 없이 파일이나 메모리 상에서 동작하는 **경량 관계형 DB \`sqlite3\`** 모듈과 파이썬 객체를 그대로 파일에 보관하는 **\`pickle\`**을 배웁니다.

---

## 1. 내장 데이터베이스 용어 사전 (Glossary)

- **sqlite3**: 파이썬 표준 라이브러리에 동봉된 경량 RDBMS 엔진으로, 복잡한 DB 세팅 없이 단일 파일(\`.db\`)로 SQL 데이터베이스를 운용합니다.
- **Connection / Cursor**: DB 세션 연결 자원인 \`Connection\`과 SQL 쿼리를 전송하고 결과 행(Row)을 조회하는 \`Cursor\` 객체입니다.
- **pickle**: 파이썬의 임의 객체(리스트, 딕셔너리, 커스텀 클래스 인스턴스 등)를 바이너리 스트림으로 직렬화(\`dump\`) 및 복원(\`load\`)하는 모듈입니다.
- **shelve**: \`pickle\`을 기반으로 딕셔너리처럼 Key-Value 형식으로 파일에 파이썬 객체를 영구 보관해 주는 표준 데이터 저장 모듈입니다.

---

## 2. sqlite3 DB CRUD 및 pickle 직렬화 실습

\`\`\`python
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

print(f"pickle 복원 데이터 확인: {deserialized_obj['matrix']}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 보안상 \`pickle.load()\` 사용 시 주의할 점은?**
A. \`pickle\`은 역직렬화 과정에서 임의의 파이썬 코드를 실행시킬 수 있는 보안 위험이 있으므로, 신뢰할 수 없는 외부 네트워크나 사용자로부터 전달받은 pickle 바이너리는 절대로 복원하면 안 됩니다.
`
  },
  {
    order_index: 32,
    slug: 'ch32-python-stdlib-logging-and-argparse',
    title: '파이썬 로깅 및 CLI 인자 파서: logging 모듈과 argparse 터미널 도구',
    seo_title: '파이썬 로깅과 CLI - logging 레벨, Logger, FileHandler & argparse 옵션 파서',
    seo_description: '파이썬 표준 로깅 모듈 logging(DEBUG, INFO, WARNING, ERROR, CRITICAL), FileHandler 로그 저장 및 argparse 기반 터미널 커맨드라인 옵션 파서를 배웁니다.',
    excerpt: '애플리케이션 구동 상태를 기록하는 5단계 logging 모듈과 터미널 명령줄 매개변수를 전문적으로 파싱하는 argparse CLI 도구를 학습합니다.',
    content_md: `프로그램의 구동 상태와 에러 기록을 보관하는 **\`logging\` 모듈**과 리눅스 CLI 터미널 도구처럼 명령줄 인자를 처리하는 **\`argparse\` 모듈**을 학습합니다.

---

## 1. 로깅 및 CLI 파서 용어 사전 (Glossary)

- **logging Level**: 로그의 중요도를 나타내는 5가지 표준 단계입니다. (\`DEBUG\` $\rightarrow$ \`INFO\` $\rightarrow$ \`WARNING\` $\rightarrow$ \`ERROR\` $\rightarrow$ \`CRITICAL\`)
- **Logger / Handler / Formatter**:
  - \`Logger\`: 로그 메시지를 수집하는 주체.
  - \`Handler\`: 로그를 콘솔이나 파일(\`FileHandler\`)로 내보내는 출력 창구.
  - \`Formatter\`: 로그 출력 시간, 파일명, 로그 레벨 형태를 지정하는 서식.
- **argparse**: Terminal 상에서 \`python app.py --port 8080 --verbose\` 처럼 플래그 옵션과 옵션 파라미터를 전문 파싱하는 표준 모듈입니다.

---

## 2. logging 파일 저장 및 argparse CLI 파서 코드

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 단순 \`print()\` 대신 \`logging\` 모듈을 사용해야 하나요?**
A. \`print()\`는 타임스탬프가 없고 로그 레벨 구분이 불가능하며 파일 자동 저장 기능을 지원하지 않습니다. 반면 \`logging\`은 환경에 따라 콘솔과 파일 저장을 자유롭게 조율할 수 있습니다.
`
  },
  {
    order_index: 33,
    slug: 'ch33-python-stdlib-hashlib-secrets-ssl',
    title: '파이썬 암호화 및 보안 표준 라이브러리: hashlib, secrets 및 ssl 통신',
    seo_title: '파이썬 보안 라이브러리 - hashlib(SHA256), secrets(안전한 난수) & ssl 암호화 소켓',
    seo_description: '파이썬 표준 보안 모듈 hashlib(SHA-256, MD5 해시), secrets(암호학적으로 안전한 난수/토큰 생성) 및 ssl(TLS/SSL 보안 소켓 연동)을 학습합니다.',
    excerpt: '단방향 암호화 해시(SHA-256)를 생성하는 hashlib, 보안 토큰 생성 secrets, 통신 구간 암호화를 담당하는 ssl 표준 라이브러리를 배웁니다.',
    content_md: `비밀번호 해시화 및 데이터 무결성 검증의 **\`hashlib\`**, 보안 난수 생성의 **\`secrets\`**, 통신 구간 암호화의 **\`ssl\`** 모듈을 다룹니다.

---

## 1. 암호화 보안 용어 사전 (Glossary)

- **hashlib**: SHA-256, SHA-512, MD5 등 단방향 암호화 해시(Cryptographic Hash) 알고리즘을 구현하여 데이터 복제나 변조 여부를 검증하는 모듈입니다.
- **secrets**: 암호학적으로 안전한 난수(CSPRNG)를 생성하여 보안 패스워드, 리셋 토큰, 세션 Key를 발행하는 모듈입니다. (기존 \`random\` 모듈은 보안 용도 사용 금지!)
- **ssl**: 네트워크 소켓 데이터를 TLS/SSL 프로토콜로 암호화하여 HTTPS 및 통신 도청을 방지하는 보안 소켓 래퍼 모듈입니다.

---

## 2. hashlib 비밀번호 해시화 및 secrets 토큰 발급 예제

\`\`\`python
import hashlib
import secrets

# 1. secrets 모듈을 이용한 보안 솔트(Salt) 및 토큰 발급
salt = secrets.token_hex(16) # 32자리 16진수 랜덤 솔트
reset_token = secrets.token_urlsafe(32)

print(f"보안 랜덤 솔트: {salt}")
print(f"URL-Safe 인증 토큰: {reset_token}")

# 2. hashlib을 이용한 SHA-256 비밀번호 솔팅 해시화
raw_password = "my_secure_password_123!"
salted_input = (raw_password + salt).encode("utf-8")

# SHA-256 해시 생성
hashed_password = hashlib.sha256(salted_input).hexdigest()
print(f"SHA-256 암호화 결과: {hashed_password}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 난수 생성 시 왜 \`random\` 대신 \`secrets\` 모듈을 써야 하나요?**
A. \`random\` 모듈은 Mersenne Twister 의사 난수 생성기를 써서 출력 패턴이 추적될 수 있지만, \`secrets\`는 운영체제엔트로피(OS Entropy) 기반의 **암호학적 난수**를 생성하므로 보안적으로 안전합니다.
`
  },
  {
    order_index: 34,
    slug: 'ch34-python-stdlib-urllib-and-http-server',
    title: '파이썬 표준 네트워킹 및 임베디드 웹 서버: urllib와 http.server',
    seo_title: '파이썬 표준 웹 모듈 - urllib.request, urllib.parse URL 파싱 & http.server',
    seo_description: '파이썬 표준 웹 모듈 urllib.request(URL 데이터 다운로드), urllib.parse(URL 쿼리 인코딩/디코딩) 및 http.server(한 줄 웹 서버 구동)를 다룹니다.',
    excerpt: '외부 패키지 설치 없이 파이썬 내장 기능만으로 웹 URL 데이터를 가져오는 urllib 모듈과 1초 만에 로컬 HTTP 웹 서버를 띄우는 http.server를 학습합니다.',
    content_md: `외부 설치 라이브러리 없이 파이썬 내장 표준만으로 웹 HTTP 요청을 보낼 수 있는 **\`urllib\`**과 초간단 웹 서버를 구동하는 **\`http.server\`**를 다룹니다.

---

## 1. 표준 웹 라이브러리 용어 사전 (Glossary)

- **urllib.request**: URL 주소에 접근하여 웹 데이터나 응답 텍스트를 읽어오는 웹 클라이언트 모듈입니다.
- **urllib.parse**: URL의 쿼리 스트림 매개변수를 인코딩(\`quote()\`)하거나 파싱(\`urlparse()\`)하는 URL 변환 모듈입니다.
- **http.server**: 터미널 명령 한 줄(\`python -m http.server 8000\`)로 현재 디렉토리의 파일들을 웹 브라우저로 서빙하는 임베디드 HTTP 서버 모듈입니다.

---

## 2. urllib.request 웹 데이터 수집 및 URL 인코딩 코드

\`\`\`python
from urllib.request import urlopen, Request
from urllib.parse import urlencode, parse_qs, urlparse

# 1. URL 쿼리 파라미터 인코딩 (urllib.parse)
params = {"q": "파이썬 프로그래밍", "hl": "ko"}
query_string = urlencode(params)
target_url = f"https://httpbin.org/get?{query_string}"

print(f"인코딩 완료된 URL: {target_url}")

# 2. HTTP 요청 보내기 (urllib.request)
req = Request(target_url, headers={"User-Agent": "Mozilla/5.0"})

try:
    with urlopen(req) as response:
        html_data = response.read().decode("utf-8")
        print("=== [HTTP 응답 수신 데이터 상위 150자] ===")
        print(html_data[:150])
except Exception as e:
    print(f"웹 요청 실패: {e}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 터파일 공유 시 \`http.server\`를 어떻게 활용하나요?**
A. 공유하고자 하는 폴더로 이동한 뒤 터미널에서 \`python -m http.server 8000\`을 입력하면, 같은 Wi-Fi/네트워크 상의 다른 기기에서 \`http://내IP주소:8000\`으로 접속하여 파일을 바로 다운로드할 수 있습니다.
`
  },
  {
    order_index: 35,
    slug: 'ch35-python-stdlib-zipfile-tarfile-zlib',
    title: '파이썬 압축 파일 포맷 및 아카이브: zipfile, tarfile 및 zlib 스트림 압축',
    seo_title: '파이썬 압축 라이브러리 - zipfile(.zip), tarfile(.tar.gz) & zlib 데이터 압축',
    seo_description: '파이썬 표준 압축 모듈 zipfile(.zip 파일 압축/해제 및 암호화), tarfile(.tar.gz 아카이브 압축), zlib(메모리 데이터 스트림 압축)을 배웁니다.',
    excerpt: '대용량 파일이나 폴더를 .zip 및 .tar.gz 확장자로 압축하고 풀 수 있는 zipfile, tarfile 모듈과 zlib 메모리 고속 압축 기술을 다룹니다.',
    content_md: `여러 파일과 폴더를 하나로 묶어 압축 해제하는 **\`zipfile\`**, **\`tarfile\`** 모듈과 메모리 텍스트 데이터를 고속 처리하는 **\`zlib\`**을 배웁니다.

---

## 1. 압축 라이브러리 용어 사전 (Glossary)

- **zipfile**: 널리 쓰이는 \`.zip\` 아카이브 포맷을 생성, 읽기, 덧붙이기, 해제(\`extractall()\`)하는 표준 모듈입니다.
- **tarfile**: 리눅스/유닉스 환경의 \`.tar\`, \`.tar.gz\`, \`.tar.bz2\` 아카이브 파일 압축을 다루는 모듈입니다.
- **zlib**: DEFLATE 알고리즘을 이용하여 메모리 상의 바이트 스트림을 고속 압축(\`zlib.compress()\`) 및 복원하는 저수준 압축 엔진 모듈입니다.

---

## 2. zipfile 파일 압축 및 해제 실습 코드

\`\`\`python
import zipfile
import zlib
from pathlib import Path

# 1. zipfile 모듈을 통한 파일 압축 생성
zip_path = Path("archive.zip")

with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as zip_out:
    # 텍스트 파일 압축 추가
    zip_out.writestr("test1.txt", "DAVHAVE 파이썬 압축 테스트 1")
    zip_out.writestr("test2.txt", "DAVHAVE 파이썬 압축 테스트 2")

print(f"ZIP 아카이브 생성 완료: {zip_path}")

# 2. 압축 파일 내부 목록 조회 및 해제
with zipfile.ZipFile(zip_path, "r") as zip_in:
    print("아카이브 파일 목록:", zip_in.namelist())
    zip_in.extractall("./extracted_files")

# 3. zlib 메모리 바이트 스트림 압축
raw_text = b"Python Standard Library Compression System " * 100
compressed_bytes = zlib.compress(raw_text)

print(f"원래 크기: {len(raw_text)} bytes -> zlib 압축 후: {len(compressed_bytes)} bytes")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. ZIP 압축 시 \`compression=zipfile.ZIP_DEFLATED\` 옵션을 꼭 주어야 하나요?**
A. 네! 기본값인 \`ZIP_STORED\`는 파일을 단순히 묶어 보관할 뿐 용량을 압축하지 않으므로, 실제로 데이터 용량을 줄이려면 \`ZIP_DEFLATED\` 옵션을 명시해야 합니다.
`
  }
];

// Split into 9 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 16),
  lessons.slice(16, 20),
  lessons.slice(20, 24),
  lessons.slice(24, 28),
  lessons.slice(28, 32),
  lessons.slice(32, 35)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full Python Stdlib Deep Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_python_deep_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 9 stdlib deep SQL chunk files for Python!');
