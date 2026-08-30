import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  // 1 ~ 41 기존 레슨 유지 (생략 없이 1~41 전체 포함)
  { order_index: 1, slug: 'ch01-python-introduction-and-interpreter', title: '파이썬(Python) 소개와 CPython 인터프리터 작동 원리, REPL & IDLE/VS Code 환경 구축', seo_title: '파이썬 입문 가이드 - CPython 인터프리터, Zen of Python, IDLE & VS Code', seo_description: '파이썬의 역사, 설계 철학, CPython 인터프리터, REPL, VS Code 설치를 배웁니다.', excerpt: '파이썬의 특징, CPython 인터프리터 작동 원리 및 개발 환경 구축을 배웁니다.', content_md: `파이썬 소개 및 CPython 인터프리터를 다룹니다.` },
  { order_index: 2, slug: 'ch02-variables-data-types-and-operators', title: '변수, 기본 자료형(Numbers, Strings, Booleans) 및 수치 연산', seo_title: '파이썬 변수와 자료형 - int, float, str, bool, f-string 포맷팅 & 연산자', seo_description: '동적 타입 변수, 기본 자료형, f-string 포맷팅, type() 및 id() 검사를 배웁니다.', excerpt: '변수 개념, 기본 수치 및 문자열 자료형, f-string 포맷팅을 학습합니다.', content_md: `변수와 자료형을 학습합니다.` },
  { order_index: 3, slug: 'ch03-control-flow-conditionals-and-loops', title: '제어 구조: 조건문(if-elif-else, match-case)과 루프(for, while, range, enumerate, zip)', seo_title: '파이썬 제어문 - if-elif-else, match-case, for, while, range, enumerate, zip', seo_description: '조건문, match-case 패턴 매칭, 반복문, range, enumerate, zip을 학습합니다.', excerpt: '조건문과 match-case 패턴 매칭, range(), enumerate(), zip()을 배웁니다.', content_md: `조건문과 반복문을 학습합니다.` },
  { order_index: 4, slug: 'ch04-data-structures-list-tuple-set-dict', title: '파이썬 핵심 자료구조: 리스트, 튜플, 집합(Set) 및 딕셔너리', seo_title: '파이썬 자료구조 - List, Tuple, Set, Dictionary & List Comprehension', seo_description: '4대 기본 자료구조의 특징, 슬라이싱, List Comprehension을 다룹니다.', excerpt: '리스트, 튜플, 집합, 딕셔너리와 컴프리헨션을 배웁니다.', content_md: `파이썬 4대 데이터 구조를 학습합니다.` },
  { order_index: 5, slug: 'ch05-functions-lambda-and-scope', title: '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 LEGB 스코프 룰', seo_title: '파이썬 함수와 람다 - def, *args, **kwargs, lambda, LEGB 스코프 룰', seo_description: 'def 함수 정의, 가변 인자(*args, **kwargs), 람다 함수를 해설합니다.', excerpt: '함수 정의, 가변 인자, 람다 및 LEGB 규칙을 학습합니다.', content_md: `함수 선언과 LEGB 규칙을 다룹니다.` },
  { order_index: 6, slug: 'ch06-modules-packages-and-venv', title: '모듈(Module), 패키지(Package)와 가상환경(venv) 및 pip', seo_title: '파이썬 모듈과 패키지 - import, __name__, sys.path, venv 가상환경 & pip', seo_description: '모듈, 패키지, __name__ == "__main__", venv 가상환경을 배웁니다.', excerpt: '모듈과 패키지 구조, venv 가상환경과 pip 패키지 관리자를 학습합니다.', content_md: `모듈과 가상환경을 다룹니다.` },
  { order_index: 7, slug: 'ch07-file-io-and-context-managers', title: '파일 입출력(File I/O)과 컨텍스트 매니저(with 문) 및 pathlib', seo_title: '파이썬 파일 입출력 - open(), read, write, with 문 & pathlib 모듈', seo_description: '파일 읽기/쓰기 모드, with 컨텍스트 매니저, pathlib을 다룹니다.', excerpt: '파일 입출력 open() 및 with 컨텍스트 매니저, pathlib을 배웁니다.', content_md: `파일 입출력과 with 컨텍스트 매니저를 다룹니다.` },
  { order_index: 8, slug: 'ch08-exception-handling-and-custom-exceptions', title: '예외 처리(try-except-else-finally) 및 사용자 정의 예외', seo_title: '파이썬 예외 처리 - try, except, else, finally, raise & 사용자 정의 Exception', seo_description: 'try-except-else-finally 구문, raise, Exception 예외를 배웁니다.', excerpt: 'try-except-else-finally 구문 및 사용자 정의 예외를 학습합니다.', content_md: `예외 처리를 학습합니다.` },
  { order_index: 9, slug: 'ch09-object-oriented-programming-classes', title: '객체지향 프로그래밍(OOP): 클래스, 인스턴스, 생성자(__init__) 및 캡슐화', seo_title: '파이썬 OOP 기초 - class, __init__, self, 인스턴스 변수, 캡슐화(__private)', seo_description: '클래스와 인스턴스, 생성자 메소드(__init__), 캡슐화를 학습합니다.', excerpt: '클래스 작성법, 생성자 __init__(), self 인자를 다룹니다.', content_md: `객체지향 프로그래밍 기초를 학습합니다.` },
  { order_index: 10, slug: 'ch10-advanced-oop-inheritance-magic-methods', title: '상속(Inheritance), 다형성 및 던더 매직 메소드(Dunder Methods)', seo_title: '파이썬 고급 OOP - 상속, super(), 매직 메소드(__str__, __len__), ABC 추상 클래스', seo_description: '부모 클래스 상속, super() 호출, 던더 매직 메소드를 배웁니다.', excerpt: '상속(Inheritance), super(), 매직 메소드를 학습합니다.', content_md: `상속과 매직 메소드를 익힙니다.` },
  { order_index: 11, slug: 'ch11-iterators-generators-and-decorators', title: '이터레이터(Iterator), yield 제너레이터(Generator)와 데코레이터(Decorator)', seo_title: '파이썬 고급 문법 - Iterator, yield 제너레이터, 클로저 & @decorator', seo_description: '이터레이터, yield 제너레이터, @decorator 패턴을 학습합니다.', excerpt: '제너레이터(yield)와 데코레이터(@decorator) 패턴을 배웁니다.', content_md: `제너레이터와 데코레이터를 배웁니다.` },
  { order_index: 12, slug: 'ch12-standard-libraries-math-random-datetime-json', title: '파이썬 핵심 표준 라이브러리 (math, random, datetime, json, re)', seo_title: '파이썬 표준 라이브러리 - math, random, datetime, json 직렬화 & re 정규식', seo_description: '내장 표준 라이브러리 math, random, datetime, json, re를 배웁니다.', excerpt: '필수 표준 라이브러리 활용법을 배웁니다.', content_md: `필수 표준 라이브러리 모듈들을 학습합니다.` },
  { order_index: 13, slug: 'ch13-gui-programming-with-tkinter', title: 'tkinter를 활용한 파이썬 데스크톱 GUI 프로그래밍', seo_title: '파이썬 GUI 프로그래밍 - tkinter, Tk, Label, Button, Entry, pack/grid', seo_description: '표준 GUI 라이브러리 tkinter, 컴포넌트, 레이아웃 매니저를 학습합니다.', excerpt: 'tkinter를 이용하여 데스크톱 GUI 프로그램을 개발하는 기법을 배웁니다.', content_md: `데스크톱 GUI 모듈인 tkinter를 학습합니다.` },
  { order_index: 14, slug: 'ch14-concurrency-multiprocessing-and-asyncio', title: '파이썬 동시성 프로그래밍: threading, multiprocessing 및 asyncio', seo_title: '파이썬 동시성 - threading, multiprocessing, GIL 한계 & asyncio async/await', seo_description: 'multiprocessing, threading, asyncio 비동기 프로그래밍을 배웁니다.', excerpt: 'threading, multiprocessing 및 asyncio 코딩을 학습합니다.', content_md: `threading, multiprocessing, asyncio를 다룹니다.` },
  { order_index: 15, slug: 'ch15-web-scraping-and-http-requests', title: '웹 스크래핑과 파이썬 HTTP 통신 (requests, BeautifulSoup4)', seo_title: '파이썬 웹 크롤링 - requests HTTP GET/POST, BeautifulSoup4 파싱 & CSS 셀렉터', seo_description: 'requests, BeautifulSoup4 DOM 파싱 및 CSS 셀렉터를 배웁니다.', excerpt: 'requests 모듈과 BeautifulSoup4 크롤링 기법을 배웁니다.', content_md: `requests와 BeautifulSoup4를 학습합니다.` },
  { order_index: 16, slug: 'ch16-python-type-hinting-and-annotations', title: '파이썬 타입 힌팅(Type Hinting)과 typing 모듈', seo_title: '파이썬 타입 힌팅 - type annotations, typing 모듈, mypy 정적 분석', seo_description: '타입 어노테이션, typing 모듈과 mypy 정적 분석기를 학습합니다.', excerpt: '타입 힌팅과 typing 모듈, mypy 정적 분석기를 다룹니다.', content_md: `타입 힌팅을 다룹니다.` },
  { order_index: 17, slug: 'ch17-functional-programming-map-filter-reduce', title: '파이썬 함수형 프로그래밍 기법 (map, filter, reduce, functools)', seo_title: '파이썬 함수형 프로그래밍 - map, filter, reduce, functools & lru_cache', seo_description: 'map(), filter(), reduce(), functools.lru_cache를 배웁니다.', excerpt: '함수형 프로그래밍 기법을 학습합니다.', content_md: `함수형 프로그래밍을 다룹니다.` },
  { order_index: 18, slug: 'ch18-python-c-extension-and-ctypes', title: '파이썬 C 연동 및 ctypes, cffi 확장 모듈', seo_title: '파이썬 C 연동 - ctypes, C-API, Shared Library .so/.dll 호출 & 바인딩', seo_description: 'C 공유 라이브러리를 파이썬에서 호출하는 ctypes 모듈을 배웁니다.', excerpt: 'C 라이브러리를 ctypes 모듈로 직접 불러와 호출하는 기법을 배웁니다.', content_md: `ctypes 모듈을 다룹니다.` },
  { order_index: 19, slug: 'ch19-python-packaging-distribution-wheel', title: '파이썬 패키징과 PyPI 배포 (pyproject.toml, setuptools, wheel)', seo_title: '파이썬 패키징 - pyproject.toml, setuptools, wheel & PyPI twine 배포', seo_description: 'pyproject.toml 규격 패키징 및 PyPI 배포 과정을 배웁니다.', excerpt: 'pyproject.toml과 build, twine을 이용해 PyPI에 배포하는 과정을 학습합니다.', content_md: `PyPI 패키징 및 배포를 다룹니다.` },
  { order_index: 20, slug: 'ch20-python-final-project-mini-game-and-apps', title: '파이썬 실전 종합 프로젝트: 터틀 그래픽 미니 게임 & GUI 관리 앱', seo_title: '파이썬 실전 프로젝트 - Turtle 터틀 그래픽 미니 게임 & GUI 관리 앱', seo_description: 'Turtle 그래픽 미니 게임과 tkinter GUI 데이터 관리 앱을 구현합니다.', excerpt: 'Turtle 미니 게임과 GUI 데이터 관리 애플리케이션을 완성합니다.', content_md: `실전 파이썬 종합 프로젝트를 완성합니다.` },
  { order_index: 21, slug: 'ch21-python-data-analysis-numpy-pandas', title: '파이썬 데이터 분석 입문: NumPy 배열 연산과 Pandas 데이터프레임 처리', seo_title: '파이썬 데이터 분석 - NumPy N차원 배열, Pandas DataFrame & CSV 전처리', seo_description: 'NumPy 배열, Pandas DataFrame 결측치 정제를 배웁니다.', excerpt: 'NumPy 벡터화 연산과 Pandas DataFrame 데이터 전처리를 다룹니다.', content_md: `NumPy 배열 연산과 Pandas 데이터프레임을 다룹니다.` },
  { order_index: 22, slug: 'ch22-python-web-framework-django-fastapi', title: '파이썬 웹 프레임워크 비교: Django 풀스택 vs FastAPI 비동기 REST API', seo_title: '파이썬 웹 프레임워크 - Django MVT 아키텍처 vs FastAPI 비동기 REST API 구축', seo_description: 'Django와 FastAPI의 구조적 차이와 REST API 구축법을 배웁니다.', excerpt: 'Django와 FastAPI의 아키텍처 비교 및 실전 서버 구축법을 배웁니다.', content_md: `Django와 FastAPI 아키텍처를 비교합니다.` },
  { order_index: 23, slug: 'ch23-python-orm-sqlalchemy-and-database', title: '파이썬 ORM 데이터베이스 연동: SQLAlchemy와 SQLModel 완전 가이드', seo_title: '파이썬 ORM - SQLAlchemy 2.0, SQLModel, PostgreSQL/MySQL 연동 & Alembic', seo_description: 'SQLAlchemy 2.0 모델링, Session DB CRUD를 다룹니다.', excerpt: 'SQLAlchemy ORM 및 SQLModel 기반 데이터베이스 관리를 배웁니다.', content_md: `SQLAlchemy ORM과 SQLModel을 다룹니다.` },
  { order_index: 24, slug: 'ch24-python-web-automation-selenium-playwright', title: '파이썬 웹 자동화 및 동적 렌더링 스크래핑: Selenium과 Playwright', seo_title: '파이썬 웹 자동화 - Selenium WebDriver vs Playwright 비동기 크롤링', seo_description: 'Selenium WebDriver와 Playwright 브라우저 자동화를 배웁니다.', excerpt: 'Headless Browser로 자동화하는 Selenium과 Playwright를 학습합니다.', content_md: `Selenium과 Playwright를 배웁니다.` },
  { order_index: 25, slug: 'ch25-python-unit-testing-pytest-and-mock', title: '파이썬 단위 테스트와 TDD: unittest, pytest 및 mock 객체 활용', seo_title: '파이썬 테스트 코드 - pytest 사용법, unittest, fixture, mock 가짜 객체', seo_description: '단위 테스트, pytest 프레임워크, mock 객체 활용법을 배웁니다.', excerpt: 'pytest와 가짜 객체를 만드는 mock 기법을 학습합니다.', content_md: `단위 테스트와 pytest를 학습합니다.` },
  { order_index: 26, slug: 'ch26-python-ai-machine-learning-scikit-learn', title: '파이썬 머신러닝 기초: Scikit-learn 지도학습과 분류/회귀 모델', seo_title: '파이썬 머신러닝 - Scikit-learn, 선형 회귀, 결정 트리, Dataset 분할 & 평가', seo_description: 'Scikit-learn, 지도학습, train_test_split을 배웁니다.', excerpt: 'Scikit-learn을 이용하여 회귀 및 분류 모델링 기법을 배웁니다.', content_md: `머신러닝과 Scikit-learn을 다룹니다.` },
  { order_index: 27, slug: 'ch27-python-deep-learning-pytorch-basics', title: '파이썬 딥러닝 입문: PyTorch 텐서(Tensor)와 신경망(Neural Network) 구현', seo_title: '파이썬 딥러닝 - PyTorch 텐서, Autograd 자동 미분, Linear 신경망 & Loss', seo_description: 'PyTorch, Tensor 자료구조, Autograd 자동 미분 역전파를 다룹니다.', excerpt: 'PyTorch 프레임워크, Tensor 및 역전파 메커니즘을 배웁니다.', content_md: `PyTorch 기반 딥러닝을 배웁니다.` },
  { order_index: 28, slug: 'ch28-python-big-data-pyspark-and-parallel', title: '파이썬 분산 빅데이터 처리: PySpark와 RDD/DataFrame 대용량 분산 연산', seo_title: '파이썬 빅데이터 - PySpark, Apache Spark 클러스터, RDD vs Spark DataFrame', seo_description: 'PySpark, RDD, Spark DataFrame 분산 연산을 다룹니다.', excerpt: 'PySpark와 Spark DataFrame을 익힙니다.', content_md: `PySpark 빅데이터 파이프라인을 다룹니다.` },
  { order_index: 29, slug: 'ch29-python-stdlib-os-sys-subprocess', title: '파이썬 시스템 제어 표준 라이브러리: os, sys 및 subprocess 프로세스 관리', seo_title: '파이썬 표준 라이브러리 - os, sys, subprocess 프로세스 실행 & Pipe', seo_description: 'os, sys, subprocess 프로세스 실행 및 파이프 통신을 배웁니다.', excerpt: 'os, sys 및 subprocess 라이브러리를 다룹니다.', content_md: `os, sys, subprocess 모듈을 다룹니다.` },
  { order_index: 30, slug: 'ch30-python-stdlib-collections-itertools-dataclasses', title: '파이썬 데이터 구조 및 함수형 유틸리티: collections, itertools 및 dataclasses', seo_title: '파이썬 고급 표준 모듈 - collections(Counter, defaultdict), itertools & dataclasses', seo_description: 'collections, itertools, dataclasses를 배웁니다.', excerpt: 'collections, itertools, dataclasses를 배웁니다.', content_md: `collections, itertools, dataclasses를 다룹니다.` },
  { order_index: 31, slug: 'ch31-python-stdlib-sqlite3-and-pickle', title: '파이썬 표준 데이터베이스 및 객체 직렬화: sqlite3와 pickle 바이너리 보관', seo_title: '파이썬 내장 DB - sqlite3 사용법, Connection, Cursor, pickle & shelve 객체 저장', seo_description: 'sqlite3, pickle, shelve 모듈을 배웁니다.', excerpt: 'sqlite3와 pickle, shelve를 다룹니다.', content_md: `sqlite3와 pickle을 배웁니다.` },
  { order_index: 32, slug: 'ch32-python-stdlib-logging-and-argparse', title: '파이썬 로깅 및 CLI 인자 파서: logging 모듈과 argparse 터미널 도구', seo_title: '파이썬 로깅과 CLI - logging 레벨, Logger, FileHandler & argparse 옵션 파서', seo_description: 'logging 레벨, FileHandler, argparse CLI 파서를 배웁니다.', excerpt: 'logging 모듈과 argparse CLI 도구를 학습합니다.', content_md: `logging과 argparse를 학습합니다.` },
  { order_index: 33, slug: 'ch33-python-stdlib-hashlib-secrets-ssl', title: '파이썬 암호화 및 보안 표준 라이브러리: hashlib, secrets 및 ssl 통신', seo_title: '파이썬 보안 라이브러리 - hashlib(SHA256), secrets(안전한 난수) & ssl 암호화 소켓', seo_description: 'hashlib, secrets, ssl 표준 모듈을 배웁니다.', excerpt: 'hashlib, secrets, ssl 라이브러리를 배웁니다.', content_md: `hashlib, secrets, ssl을 다룹니다.` },
  { order_index: 34, slug: 'ch34-python-stdlib-urllib-and-http-server', title: '파이썬 표준 네트워킹 및 임베디드 웹 서버: urllib와 http.server', seo_title: '파이썬 표준 웹 모듈 - urllib.request, urllib.parse URL 파싱 & http.server', seo_description: 'urllib.request, urllib.parse, http.server를 배웁니다.', excerpt: 'urllib 모듈과 http.server를 학습합니다.', content_md: `urllib과 http.server를 다룹니다.` },
  { order_index: 35, slug: 'ch35-python-stdlib-zipfile-tarfile-zlib', title: '파이썬 압축 파일 포맷 및 아카이브: zipfile, tarfile 및 zlib 스트림 압축', seo_title: '파이썬 압축 라이브러리 - zipfile(.zip), tarfile(.tar.gz) & zlib 데이터 압축', seo_description: 'zipfile, tarfile, zlib 압축을 배웁니다.', excerpt: 'zipfile, tarfile, zlib 모듈을 다룹니다.', content_md: `zipfile, tarfile, zlib을 배웁니다.` },
  { order_index: 36, slug: 'ch36-cpython-c-api-architecture-and-objects', title: 'CPython C-API 아키텍처: PyObject 헤더 구조와 PyTypeObject 타입 객체', seo_title: 'CPython C-API 아키텍처 - PyObject, ob_refcnt, ob_type, PyTypeObject 슬롯', seo_description: 'PyObject, PyTypeObject 메타 타입 슬롯을 다룹니다.', excerpt: 'PyObject와 PyTypeObject 아키텍처를 학습합니다.', content_md: `PyObject와 PyTypeObject를 배웁니다.` },
  { order_index: 37, slug: 'ch37-cpython-reference-counting-and-memory', title: 'CPython 참조 카운팅(Reference Counting)과 C 메모리 관리 (Py_INCREF, Py_DECREF, PyMem_Malloc)', seo_title: 'CPython 메모리 관리 - 참조 카운팅, Py_INCREF, Py_DECREF, PyMem_Malloc & GC', seo_description: '참조 카운팅, Owned vs Borrowed Reference, Py_INCREF/Py_DECREF를 배웁니다.', excerpt: '참조 카운팅 규칙과 Py_INCREF/Py_DECREF를 학습합니다.', content_md: `참조 카운팅(Reference Counting)을 학습합니다.` },
  { order_index: 38, slug: 'ch38-cpython-c-exception-handling-and-args', title: 'CPython C-API 예외 처리 및 C 함수 인자 파싱 (PyErr_SetString, PyArg_ParseTuple)', seo_title: 'CPython C 예외 및 인자 파싱 - PyErr_SetString, PyArg_ParseTuple, Py_BuildValue', seo_description: 'PyErr_SetString(), PyArg_ParseTuple() 및 Py_BuildValue() C-API를 배웁니다.', excerpt: 'PyArg_ParseTuple()과 PyErr_SetString()을 학습합니다.', content_md: `PyArg_ParseTuple과 PyErr_SetString을 다룹니다.` },
  { order_index: 39, slug: 'ch39-cpython-c-concrete-objects-long-unicode-dict', title: 'CPython 구체적 C 데이터 타입 조작: PyLongObject, PyUnicodeObject 및 PyDictObject', seo_title: 'CPython C 구체적 타입 - PyLong, PyUnicode, PyDict, PyList C-API 조작', seo_description: 'PyLong, PyUnicode, PyDict, PyList C-API 조작을 배웁니다.', excerpt: 'CPython C 레벨 구체적 객체 조작법을 배웁니다.', content_md: `C-API 구체적 객체를 다룹니다.` },
  { order_index: 40, slug: 'ch40-cpython-c-extension-module-creation', title: 'CPython C 확장 모듈 제작: PyModuleDef, PyMethodDef 및 GIL/멀티스레드 C-API', seo_title: 'CPython C 확장 모듈 - PyModuleDef, PyMethodDef, PyMODINIT_FUNC & GIL 제어', seo_description: 'C 확장 모듈, PyMethodDef, PyModuleDef, GIL 해제를 배웁니다.', excerpt: 'C 확장 모듈 빌드 및 GIL 해제 기법을 배웁니다.', content_md: `C 확장 모듈 제작 및 GIL 제어를 다룹니다.` },
  { order_index: 41, slug: 'ch41-python-idle-editors-pycharm-vscode-wing', title: '다양한 파이썬 IDLE 개발 환경 설치와 사용법 가이드: PyCharm, VS Code, Wing IDE', seo_title: '파이썬 IDE 설치 가이드 - PyCharm Community, VS Code Python Extension & Wing 101', seo_description: 'PyCharm, VS Code, Wing IDE 설치, 인터프리터 바인딩 및 실행법을 배웁니다.', excerpt: '파이참(PyCharm), VS Code, Wing 101 3대 IDE의 설치 및 실행법을 학습합니다.', content_md: `파이참, VS Code, Wing IDE 설치와 사용법을 다룹니다.` },

  // 42 ~ 46 pjt/24 CodeStudent 실습 교안 기반 신규 독립 레슨 5개 대거 추가!
  {
    order_index: 42,
    slug: 'ch42-python-practical-lists-matrices-and-aliasing',
    title: '파이썬 실전 리스트 다루기: 슬라이싱, 2D/3D 다차원 테이블 및 얕은/깊은 복사(Alias vs Copy)',
    seo_title: '파이썬 실전 리스트 - 슬라이싱, sort, 2D 테이블 생성, Alias vs deepcopy',
    seo_description: '리스트 슬라이싱(L[1:4]), sort(), insert(), count(), List Comprehension, N차원 테이블 생성([[None]*w for i in range(h)]), 별명 지정(Alias)과 copy.deepcopy()의 차이를 배웁니다.',
    excerpt: '파이썬 리스트의 고차 슬라이싱, 2D/3D 다차원 매트릭스 테이블 동적 생성 및 객체 메모리 별명(Alias) 참조와 깊은 복사(deepcopy)의 동작 원리를 다룹니다.',
    content_md: `파이썬 리스트의 고급 슬라이싱 연산과 **N차원 다차원 테이블 생성**, 그리고 객체 참조 시 발생하는 **별명(Alias)** 참조와 **깊은 복사(Deep Copy)**를 다룹니다.

---

## 1. 리스트 및 매트릭스 핵심 용어 사전 (Glossary)

- **Aliasing (별명 참조)**: \`b = a\` 처럼 기존 리스트 객체의 메모리 주소를 그대로 가리켜, 한쪽을 수정하면 다른 쪽도 동시 수정되는 현상입니다.
- **Shallow Copy (얕은 복사)**: \`c = a[:]\` 또는 \`a.copy()\` 처럼 최상위 리스트 객체만 새로 복사하고 내부 요소 포인터는 공유하는 방식입니다.
- **Deep Copy (깊은 복사)**: \`import copy; c = copy.deepcopy(a)\` 로 중첩된 N차원 리스트 내부의 모든 요소까지 완전히 새로운 독립 객체로 재귀 복사하는 기술입니다.
- **2D/3D Grid Table**: \`table = [[None] * width for _ in range(height)]\` 와 같이 안전한 리스트 컴프리헨션으로 다차원 행렬 데이터를 초기화하는 방식입니다.

---

## 2. 실전 코드: 리스트 정렬, 컴프리헨션 및 2D/3D 매트릭스 생성

\`\`\`python
import copy

# 1. 리스트 메소드 (sort, insert, count) 및 컴프리헨션
L = [2, 3, 1, 5, 4, 5]
L.sort() # 제자리 정렬
L.insert(0, 99) # 0번 인덱스에 99 삽입
print(f"정렬 및 삽입 결과: {L} (값 5의 개수: {L.count(5)})")

# 2. 2D 다차원 테이블 생성 (Height 2, Width 3)
height, width = 2, 3
table_2d = [[None] * width for i in range(height)]
table_2d[0][1] = "Data_0_1"
print("=== [2D 매트릭스] ===")
print(table_2d)

# 3. Aliasing (별명 지정) vs Deepcopy
orig = [[1, 2], [3, 4]]
alias = orig               # Alias (동일 메모리 참조)
shallow = orig[:]          # Shallow Copy
deep = copy.deepcopy(orig) # Deep Copy

orig[0][0] = 999
print(f"원본 수정 후 -> Alias: {alias[0][0]}, Shallow: {shallow[0][0]}, Deep: {deep[0][0]}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 2D 리스트 생성 시 \`[[0] * width] * height\` 처럼 작성하면 안 되나요?**
A. \`* height\` 연산자는 최상위 리스트에 동일한 하위 리스트 객체 참조를 반복 복사(Aliasing)하므로, \`table[0][0] = 1\`을 변경하면 모든 행의 0번 칼럼이 일제히 변경되는 심각한 버그가 발생합니다. 반드시 컴프리헨션 생성식을 써야 합니다.
`
  },
  {
    order_index: 43,
    slug: 'ch43-python-practical-string-processing-and-file-analysis',
    title: '파이썬 실전 문자열 조작 및 텍스트 파일 분석 알고리즘',
    seo_title: '파이썬 문자열 및 파일 분석 - String Slicing, 문자열 뒤집기, maxWord 알고리즘',
    seo_description: '문자열 인덱싱, 슬라이싱, in 검색, 문자열 뒤집기(Reverse String), 텍스트 파일 읽기(open/read/split), maxWord(가장 긴 단어 추출) 및 onlyLowerAlpha(알파벳 검사) 알고리즘을 배웁니다.',
    excerpt: '파이썬의 불변 문자열(String) 조작 테크닉, 파일 입출력을 활용한 단어 분석 알고리즘(maxWord, onlyLowerAlpha)을 학습합니다.',
    content_md: `파이썬의 **문자열(String)** 처리 메소드들과 디스크 상의 텍스트 파일 데이터를 읽어 들여 텍스트를 분석하는 **실전 단어 분석 알고리즘**을 학습합니다.

---

## 1. 텍스트 분석 핵심 용어 사전 (Glossary)

- **String Slicing**: \`s[1:4]\`, \`s[::-1]\` 처럼 문자열의 지정된 인덱스 범위를 추출하거나 뒤집는 연산입니다.
- **\`str.isalpha()\`**: 읽어 들인 문자가 순수 알파벳 문자인지 검사하여 불리언(\`True/False\`)을 반환하는 메커니즘입니다.
- **Text File Tokenization**: \`open(filename).read().split()\` 구문을 통해 파일 전체 텍스트를 단어(Word) 단위의 리스트로 분할하는 과정입니다.

---

## 2. 실전 코드: 파일 단어 분석 알고리즘 (maxWord & onlyLowerAlpha)

\`\`\`python
# 1. 문자열 뒤집기 (Reverse String)
s = "Computer"
reversed_s = ""
for i in range(len(s)):
    reversed_s += s[len(s) - 1 - i]
print(f"원문: {s} -> 뒤집은 문자열: {reversed_s}")

# 2. 알파벳 문자만 추출하는 전처리 함수
def onlyLowerAlpha(text):
    clean_word = ""
    for char in text:
        if char.isalpha(): # 알파벳인 경우만 수집
            clean_word += char.lower()
    return clean_word

# 3. 텍스트 파일에서 가장 긴 단어를 찾는 maxWord 알고리즘
def maxWordFromContent(content):
    words = content.split()
    maxword = ""
    maxlen = 0
    for word in words:
        cleaned = onlyLowerAlpha(word)
        if len(cleaned) > maxlen:
            maxlen = len(cleaned)
            maxword = cleaned
    return maxword, maxlen

sample_text = "Love is real, real is love. Learning Python programming is fantastic!"
best_word, length = maxWordFromContent(sample_text)
print(f"가장 긴 단어: '{best_word}' (길이: {length})")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬 문자열 검색 시 \`s.find()\`와 \`in\` 키워드의 차이는?**
A. \`"com" in s\`는 해당 서브스트링 존재 여부를 불리언(\`True/False\`)으로 즉시 판단하며, \`s.find("com")\`은 단어가 시작하는 **인덱스 위치 번호**를 반환합니다. (없을 경우 -1)
`
  },
  {
    order_index: 44,
    slug: 'ch44-python-practical-tuples-dictionaries-and-sets',
    title: '파이썬 고급 컬렉션 심화: 튜플 언팩킹, 딕셔너리 중첩 및 집합 연산',
    seo_title: '파이썬 컬렉션 심화 - 튜플 Unpacking, list(tuple).sort(), 중첩 Dict & Set 집합',
    seo_description: '튜플 언팩킹(for (x,y,z) in a), 튜플 정렬(list(tuple).sort()), 중첩 딕셔너리 구조, items()/keys()/values() 순회, Set 교집합/합집합 및 중복 제거 알고리즘을 배웁니다.',
    excerpt: '튜플(Tuple), 딕셔너리(Dictionary), 집합(Set)의 실전 데이터 구조 조합과 중첩 딕셔너리 조회 및 Set 집합 연산을 심도 있게 다룹니다.',
    content_md: `수정이 불가능한 **튜플(Tuple)**, 키-값 쌍의 **딕셔너리(Dictionary)**, 중복을 허용하지 않는 **집합(Set)**의 고급 조합 연산을 학습합니다.

---

## 1. 고급 컬렉션 용어 사전 (Glossary)

- **Tuple Unpacking**: \`(x, y, z) = (1, 2, 3)\` 처럼 튜플의 구성 요소를 개별 변수에 한 번에 할당 해제하는 기술입니다.
- **Nested Dictionary**: \`d = {"xy": {4: 2.5, "a": 3}}\` 처럼 딕셔너리 내부의 Value로 또 다른 딕셔너리나 리스트가 중첩된 고차 데이터 구조입니다.
- **Set Mathematical Operations**: \`s1.union(s2)\`(합집합), \`s1.intersection(s2)\`(교집합), \`s1 - s2\`(차집합) 연산입니다.

---

## 2. 튜플 언팩킹, 중첩 딕셔너리 & Set 연산 예제

\`\`\`python
# 1. 리스트 내 튜플 언팩킹 순회
tuple_list = [(1, 2, "Python"), (3, 4, "Java"), (5, 6, "C++")]
for (x, y, lang) in tuple_list:
    print(f"좌표 ({x}, {y}) -> 언어: {lang}")

# 2. 튜플 정렬 기법 (list 변환 후 sort)
tup_data = (6, 1, 4, 3)
temp_list = list(tup_data)
temp_list.sort()
sorted_tup = tuple(temp_list)
print(f"원본 튜플: {tup_data} -> 정렬된 튜플: {sorted_tup}")

# 3. 중첩 딕셔너리 조작
nested_dict = {
    "user_101": {"name": "홍길동", "role": "admin"},
    "user_102": {"name": "이순신", "role": "manager"}
}
for uid, info in nested_dict.items():
    print(f"ID: {uid} | 이름: {info['name']}, 권한: {info['role']}")

# 4. Set을 통한 리스트 중복 제거
raw_numbers = [1, 2, 3, 4, 1, 2, 3, 5]
unique_set = set(raw_numbers)
print(f"중복 제거 전: {raw_numbers} -> 중복 제거 후: {unique_set}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 딕셔너리의 Key로 리스트를 사용할 수 없는 이유는 무엇인가요?**
A. 딕셔너리의 Key는 **해시 가능(Hashable)**해야 하므로 값이 변하지 않는 불변 객체만 사용할 수 있습니다. 리스트는 가변(Mutable) 객체이므로 Key가 될 수 없지만, 불변 객체인 **튜플(Tuple)**은 Key로 사용할 수 있습니다.
`
  },
  {
    order_index: 45,
    slug: 'ch45-python-practical-turtle-graphics-drawing',
    title: '파이썬 터틀(Turtle) 그래픽스 실전 2D 도형 및 랜덤 기하학 패턴 드로잉',
    seo_title: '파이썬 터틀 그래픽스 - Screen, Turtle, forward, left, colormode(255) & 다각형',
    seo_description: '파이썬 내장 그래픽 모듈 turtle, Screen 객체 생성, Turtle 인스턴스, forward/left 이동, 반복문 기반 정삼각형/다각형 드로잉, colormode(255) RGB 난수 기하학 문양을 배웁니다.',
    excerpt: '파이썬 표준 그래픽 모듈 turtle을 활용하여 스크린 상에 2D 다각형과 무작위 RGB 기하학 패턴 문양을 그리는 실전 2D 그래픽 프로그래밍을 다룹니다.',
    content_md: `파이썬 표준 그래픽스 모듈인 **터틀(Turtle)**을 활용하여 2D 캔버스 상에 정삼각형, 다각형 및 무작위 RGB 컬러 기하학 문양을 그리는 그래픽 연산을 학습합니다.

---

## 1. 터틀 그래픽스 용어 사전 (Glossary)

- **Screen()**: 거북이가 그림을 그리는 캔버스 윈도우 스크린 창을 생성하고 관리하는 객체입니다. (\`scr.setup(width, height)\`)
- **Turtle("turtle")**: 2D 좌표계 상에서 이동하며 선을 그리는 거북이 커서 객체입니다.
- **\`forward(distance)\` / \`left(angle)\`**: 현재 거북이가 바라보는 방향으로 지정 거리만큼 전진하거나, 각도만큼 좌회전하는 이동 메소드입니다.
- **\`colormode(255)\`**: R, G, B 색상 값을 0~255 범위의 정수로 표현하여 다채로운 컬러를 조합하는 그래픽 모드입니다.

---

## 2. 터틀 2D 다각형 및 RGB 무작위 패턴 드로잉 코드

\`\`\`python
# 주: 터틀 모듈은 GUI 환경에서 실행해야 창이 띄워집니다.
from turtle import Screen, Turtle
import random

def draw_geometry_art():
    # 1. 스크린 및 거북이 설정
    scr = Screen()
    scr.setup(600, 600)
    scr.colormode(255) # 255 RGB 모드
    
    t = Turtle("turtle")
    t.speed(0) # 가장 빠른 속도
    
    colors = ["brown", "orange", "red", "blue", "pink", "yellow", "purple"]
    
    # 2. 루프를 통한 360도 회전 다각형 아트 드로잉
    for i in range(36):
        # 무작위 RGB 색상 지정
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        t.pencolor((r, g, b))
        
        # 사각형 그리기
        for _ in range(4):
            t.forward(100)
            t.left(90)
        
        t.left(10) # 10도 회전
        
    print("터틀 기하학 문양 완성")

# draw_geometry_art()
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. n각형(정n각형)을 그리기 위한 회전 각도 공식은 무엇인가요?**
A. 한 바퀴의 총 회전 각도는 $360^\circ$이므로, 정n각형을 그릴 때는 변을 하나 그릴 때마다 **\`360 / n\` 도만큼 좌회전(\`t.left(360/n)\`)**하도록 반복문을 구성하면 됩니다.
`
  },
  {
    order_index: 46,
    slug: 'ch46-python-practical-3d-matrix-cube-view-algorithm',
    title: '파이썬 3D 입체 매트릭스 뷰 알고리즘: Top/Front/Right 조망 기반 큐브 카운팅',
    seo_title: '파이썬 3D 매트릭스 알고리즘 - topView, assert 단언문, 3차원 투영 뷰 & 큐브 카운팅',
    seo_description: '3차원 공간 그리드 매트릭스 알고리즘, assert 조건 단언문, 윗면(Top), 정면(Front), 우측면(Right) 2D 투영 뷰 조망 함수 및 3D 큐브 개수(countCubes) 카운팅 알고리즘을 배웁니다.',
    excerpt: '3차원 입체 공간 상의 큐브 배치를 윗면, 정면, 우측면 2D 투영 뷰로 상호 변환하고, 조건 단언문(assert)을 적용하여 큐브 개수를 도출하는 고급 알고리즘을 다룹니다.',
    content_md: `3차원 입체 공간 상의 큐브 배치를 윗면(Top), 정면(Front), 우측면(Right) 2차원 평면 뷰로 투영 변환하고 **큐브 개수를 정확하게 산출하는 3D 매트릭스 알고리즘**을 학습합니다.

---

## 1. 3D 매트릭스 알고리즘 용어 사전 (Glossary)

- **3D Spatial Matrix**: \`P[depth][height][width]\` 형태의 3차원 공간 배열로, 큐브의 존재 여부(\`1\` 또는 \`0\`)를 표현하는 데이터 구조입니다.
- **Top View Projection**: 3차원 입체 공간을 위에서 내려다보았을 때 각 $(j, k)$ 위치에서 관측되는 큐브의 존재 여부를 2D 평면 배열로 추출하는 연산입니다.
- **\`assert\` (단언문)**: 프로그램 실행 전제 조건(예: \`len(P) == len(P[0]) == len(P[0][0])\`)이 정방형 3D 구조를 만족하는지 검증하고, 참이 아니면 에러를 일으키는 디버깅 구문입니다.

---

## 2. Top View 추출 및 큐브 카운팅 실전 알고리즘 소스

\`\`\`python
# 1. 3차원 입체 공간 P로부터 윗면 조망(Top View)을 추출하는 함수
def topView(P):
    # 정방형 3D 매트릭스 차원 검증
    assert len(P) == len(P[0]) == len(P[0][0]), "3차원 정방형 매트릭스여야 합니다."
    n = len(P)
    
    # n x n 크기의 2D 뷰 배열 초기화
    V = [[0] * n for _ in range(n)]
    
    # 공간 순회: 높이(z) 축을 따라 큐브가 하나라도 있으면 Top View에 1 표시
    for j in range(n):
        for k in range(n):
            for i in range(n):
                if P[i][j][k] == 1:
                    V[j][k] = 1
                    break
    return V

# 2. 3D 공간 큐브 샘플 테스트
P_3d = [
    [[1, 0], [0, 1]], # layer 0
    [[0, 0], [1, 0]]  # layer 1
]

v_top = topView(P_3d)
print("=== [3D 매트릭스 Top View 투영 결과] ===")
for row in v_top:
    print(row)
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬에서 \`assert\` 단언문은 언제 활용하면 좋은가요?**
A. 알고리즘 함수 진입 시 입력 데이터가 반드시 갖추어야 하는 **사전 조건(Pre-condition)**이나 데이터 차원의 크기가 올바른지 검증하여, 잘못된 데이터 입력으로 발생하는 연쇄 버그를 사전에 방지할 때 사용합니다.
`
  }
];

// Split into 12 chunks for safe remote execution
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
  lessons.slice(36, 40),
  lessons.slice(40, 44),
  lessons.slice(44, 46)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full Python pjt24 Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_python_pjt24_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 12 pjt24 SQL chunk files for Python!');
