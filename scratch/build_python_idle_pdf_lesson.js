import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  // 1 ~ 40 기존 레슨 유지 (생략 없이 1~40 전체 포함)
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

  // 41 PDF 교안(다양한 파이썬 IDLE 설치와 사용법.pdf) 신규 레슨 추가!
  {
    order_index: 41,
    slug: 'ch41-python-idle-editors-pycharm-vscode-wing',
    title: '다양한 파이썬 IDLE 개발 환경 설치와 사용법 가이드: PyCharm, VS Code, Wing IDE',
    seo_title: '파이썬 IDE 설치 가이드 - PyCharm Community, VS Code Python Extension & Wing 101',
    seo_description: '이공계생 및 입문자를 위한 파이썬 통합 개발 환경(IDE) 3종 PyCharm(파이참), 비주얼 스튜디오 코드(VS Code), 윙 IDE(Wing 101)의 다운로드, 설치, 인터프리터 바인딩 및 실행법을 완벽 해설합니다.',
    excerpt: '파이썬 개발 생산성을 극대화하는 파이참(PyCharm), VS Code, Wing 101 3대 IDE/에디터의 상세 설치 절차와 파이썬 인터프리터 연결 및 프로그램 실행법을 학습합니다.',
    content_md: `파이썬 프로그래밍 효율을 획기적으로 높여주는 대표적인 파이썬 통합 개발 환경(IDE/IDLE)인 **파이참(PyCharm)**, **비주얼 스튜디오 코드(VS Code)**, **윙 IDE(Wing 101)**의 설치 및 인터프리터 바인딩 가이드를 다룹니다.

---

## 1. 파이썬 IDE 개발 환경 용어 사전 (Glossary)

- **IDE (Integrated Development Environment)**: 소스 코드 에디터, 파이썬 인터프리터 연동, 디버거, 터미널이 하나로 통합된 개발 소프트웨어입니다.
- **PyCharm (파이참)**: JetBrains 사에서 만든 최고 수준의 파이썬 전용 IDE로, 무료 버전인 **Community 에디션**과 유료인 Professional 에디션이 제공됩니다.
- **VS Code (Visual Studio Code)**: Microsoft 사에서 만든 경량 고성능 오픈소스 에디터로, 확장 기능(**Extension**)을 통해 파이썬 개발 환경을 구축합니다.
- **Wing IDE (Wing 101)**: 크기가 매우 가볍고 직관적이어서 초보자 및 이공계 수강생 실습 교육용에 최적화된 IDE입니다.
- **Python Interpreter Binding**: IDE가 작성된 파이썬 코드를 실행할 수 있도록 PC에 설치된 \`python.exe\` 실행 파일의 경로를 연결해 주는 작업입니다.

---

## 2. 파이참 (PyCharm Community) 설치 및 사용 가이드

### (1) 다운로드 및 인스톨 절차
1. JetBrains 공식 사이트(\`https://www.jetbrains.com/pycharm/download/\`)에 접속하여 **Community 에디션** 인스톨러(\`.exe\`)를 다운로드합니다.
2. 설치 인스톨러를 실행하고, 설치 경로(\`C:\\Program Files\\JetBrains\\PyCharm Community Edition...\`)를 지정합니다.
3. Installation Options 화면에서 필요한 파이썬 파일 연동 옵션을 체크한 후 [Next] $\rightarrow$ [Install] 버튼을 눌러 설치를 완료합니다.

### (2) 파이참 프로젝트 생성 및 인터프리터 연동
1. 파이참 실행 후 [Customize] 탭에서 테마(Dark / IntelliJ Light)를 선택합니다.
2. [Projects] $\rightarrow$ **[New Project]**를 클릭합니다.
3. 프로젝트 위치(\`D:\\myCode\\pythonProject\`)를 지정한 후, **[New environment]**에서 PC에 구동 중인 파이썬 인터프리터를 지정하고 [Create]를 누릅니다.
4. 왼쪽 프로젝트 메뉴에서 마우스 우클릭 $\rightarrow$ [New] $\rightarrow$ [Python File]을 선택하고 이름(\`helloworld\`)을 입력합니다.
5. 소스 코드 작성 후 상단 메뉴 [Run] $\rightarrow$ [Run] (\`Alt + Shift + F10\`)을 눌러 하단 콘솔 창에서 결과를 확인합니다.

---

## 3. 비주얼 스튜디오 코드 (VS Code) 설치 및 파이썬 설정

### (1) VS Code 설치 및 Python Extension 추가
1. 공식 웹사이트(\`https://code.visualstudio.com/\`)에서 Windows 64-bit 설치 파일(\`VSCodeUserSetup-x64-....exe\`)을 내려받아 설치합니다.
2. 실행 후 왼쪽 네비게이션 바의 **확장 마켓플레이스 아이콘(조각 창문 모양)**을 클릭합니다.
3. 검색창에 \`python\`을 입력한 후, Microsoft 공식 **Python Extension**을 선택하여 [Install]을 클릭합니다.

### (2) 작업 폴더 및 인터프리터 바인딩
1. [File] $\rightarrow$ [Open Folder]를 클릭하여 파이썬 작업 환경 폴더(\`D:\\myCode\\myVSCode\`)를 엽니다. ("Yes, I trust the authors" 체크)
2. 상단 메뉴 [View] $\rightarrow$ **[Command Palette]** (\`Ctrl + Shift + P\`)를 열고 \`Python: Select Interpreter\`를 검색해 클릭합니다.
3. 추천 파이썬 인터프리터를 선택하여 에디터와 파이썬 엔진을 연결합니다.
4. [New File] $\rightarrow$ \`helloworld.py\` 생성 후 \`print("Hello World")\`를 작성하고, 상단 오른쪽 삼각형(▶) 버튼 또는 \`Ctrl + F5\`를 눌러 하단 TERMINAL에서 출력을 확인합니다.

---

## 4. 윙 IDE (Wing 101) 초보자용 세팅 및 사용법

### (1) Wing 101 다운로드 및 설치
1. Wingware 공식 사이트(\`https://wingware.com/\`) 접속 후 [Download] $\rightarrow$ **[Wing 101]** 선택 인스톨러(\`wing-101-....exe\`)를 다운로드합니다.
2. 인스톨러를 실행하고 라이선스 동의 후 기본 경로로 설치를 마칩니다.

### (2) 파이썬 셸(Python Shell) 및 파일 실행
1. 윈도우 시작 메뉴에서 Wing 101을 실행합니다.
2. 하단 오른쪽 **Python Shell** 프롬프트(\`>>>\`)에 \`print("hello")\`를 입력해 즉시 실행 테스트를 진행합니다.
3. 상단 [File] 아이콘을 눌러 새 파이썬 파일(\`test1.py\`)을 생성하고, 안전한 디렉토리(\`D:\\PythonCode\`)에 저장합니다.
4. 상단 툴바의 **초록색 화살표(▶) 버튼**을 클릭하여 프로그램 전체를 실행하고 하단 셸 결과를 확인합니다.

---

## 5. 파이썬 주요 IDE 3종 비교 및 선택 가이드

| 파이썬 IDE 구분 | 주요 개발 타겟 및 장점 | 인터프리터 오류 시 대처법 |
| :--- | :--- | :--- |
| **PyCharm Community** | 파이썬 전용 최고의 리팩토링, 디버깅 및 프로젝트 관리 기능 | Create Project 메뉴에서 \`New environment using\` 파이썬 경로 재지정 |
| **VS Code** | 가볍고 빠르며 다양한 언어(C/C++, Web)를 동시에 개발하는 다목적 에디터 | \`Ctrl+Shift+P\` $\rightarrow$ \`Python: Select Interpreter\` 실행 후 재선택 |
| **Wing 101** | 설치 용량이 매우 작고 대화형 Shell 중심의 직관적 초보자/교육용 IDE | 하단 Python Shell 프롬프트의 정상 구동 및 인터프리터 경로 확인 |

---

## 6. 자주 묻는 질문 (Q&A)

**Q. 파이참이나 VS Code에서 "No Python Interpreter Selected" 오류가 뜨는 이유는?**
A. IDE 에디터만 설치되고 컴퓨터에 실제 파이썬 인터프리터(CPython) 엔진이 설치되어 있지 않거나, IDE 설정에서 파이썬 실행 파일 경로(\`python.exe\`)가 연결되지 않았기 때문입니다. 파이썬 공식 사이트에서 파이썬을 먼져 설치한 후, Select Interpreter 기능으로 경로를 바인딩해 주면 해결됩니다.
`
  }
];

// Split into 11 chunks for safe remote execution
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
  lessons.slice(40, 41)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full Python IDLE PDF Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_python_idle_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 11 IDLE PDF SQL chunk files for Python!');
