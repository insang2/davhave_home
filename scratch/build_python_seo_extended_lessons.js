import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  // 1 ~ 20 기존 보강 레슨 유지
  {
    order_index: 1,
    slug: 'ch01-python-introduction-and-interpreter',
    title: '파이썬(Python) 소개와 CPython 인터프리터 작동 원리, REPL & IDLE/VS Code 환경 구축',
    seo_title: '파이썬 입문 가이드 - CPython 인터프리터, Zen of Python, IDLE & VS Code',
    seo_description: '파이썬의 역사, 설계 철학(Zen of Python), CPython 바이트코드 컴파일 메커니즘, GIL(Global Interpreter Lock), REPL 대화형 모드 및 VS Code 설치를 배웁니다.',
    excerpt: '가독성과 간결성을 최우선으로 하는 파이썬 프로그래밍 언어의 특징, CPython 인터프리터 작동 원리 및 IDLE/VS Code 개발 환경을 배웁니다.',
    content_md: `**파이썬(Python)**은 1991년 귀도 반 로섬(Guido van Rossum)이 발표한 **고수준 인터프리터 언어**입니다. 파이썬은 "인간의 생각을 코드로 자연스럽게 표현한다"는 가치 아래 CPython 표준 인터프리터 엔진을 기반으로 작동합니다.

---

## 1. 파이썬 핵심 전문 용어 사전 (Glossary)

- **CPython**: C 언어로 구현된 파이썬 공식 표준 인터프리터 엔진입니다.
- **REPL (Read-Eval-Print Loop)**: 사용자가 입력한 파이썬 코드를 즉시 읽고 실행하여 결과를 콘솔에 출력하는 대화형 프롬프트 인터페이스입니다.
- **Zen of Python**: \`import this\` 명령으로 확인할 수 있는 파이썬의 19가지 설계 철학입니다. ("Beautiful is better than ugly", "Simple is better than complex")
- **GIL (Global Interpreter Lock)**: CPython에서 C 언어 쓰레드 안전성을 위해 한 번에 하나의 스레드만 파이썬 바이트코드를 실행하도록 제어하는 메커니즘입니다.
- **Dynamic Typing (동적 타이핑)**: 변수 선언 시 타입을 명시하지 않고, 런타임에 값이 할당될 때 자동으로 데이터 타입이 결정되는 성질입니다.

---

## 2. 파이썬 Hello World 첫 스케치 프로그램

\`\`\`python
# 파일명: hello.py
# 설명: 첫 번째 파이썬 출력 프로그램

import sys

def main():
    print("Hello, DAVHAVE Python World!")
    print(f"현재 파이썬 엔진 버전: {sys.version}")

if __name__ == "__main__":
    main()
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬 2와 파이썬 3의 차이는 무엇인가요?**
A. 파이썬 2는 2020년부로 공식 지원이 전면 종료(EOL)되었습니다. 파이썬 3는 모든 문자열의 기본 유니코드(UTF-8) 처리, \`print()\`의 함수화, 나누기 연산자(\`/\`)의 실수 반환 등 현대적 기능으로 완벽히 대체되었습니다.
`
  },
  {
    order_index: 2,
    slug: 'ch02-variables-data-types-and-operators',
    title: '변수, 기본 자료형(Numbers, Strings, Booleans) 및 수치 연산',
    seo_title: '파이썬 변수와 자료형 - int, float, str, bool, f-string 포맷팅 & 연산자',
    seo_description: '파이썬의 동적 타입 변수, 기본 자료형(숫자형, 문자열, 불리언), f-string 포맷팅, type() 및 id() 검사, 산술/비교/논리 연산자를 배웁니다.',
    excerpt: '파이썬의 동적 바인딩 변수 개념, 기본 수치 및 문자열 자료형, f-string 포맷팅과 산술, 비교, 논리 연산자 활용법을 학습합니다.',
    content_md: `프로그램에서 데이터를 기억하는 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**, 그리고 데이터를 가공하는 **연산자(Operator)**를 학습합니다.

---

## 1. 변수 & 자료형 용어 사전 (Glossary)

- **Variable (변수)**: 값이 저장된 객체를 가리키는 메모리 참조 이름(Reference Label)입니다.
- **f-string**: 파이썬 3.6+에 도입된 가장 빠르고 직관적인 문자열 포맷팅 문법입니다.
- **Immutable Object**: 한 번 생성되면 내부 데이터 값을 변경할 수 없는 불변 객체입니다. (\`int\`, \`float\`, \`str\`, \`tuple\`, \`bool\`)
- **Mutable Object**: 생성 후에도 내부 데이터 수정 및 추가가 가능한 가변 객체입니다. (\`list\`, \`dict\`, \`set\`)

---

## 2. 파이썬 기본 자료형 정리표

| 자료형 분류 | 타입 키워드 | 가변성 (Mutability) | 예시 표현 |
| :--- | :--- | :---: | :--- |
| **정수형** | \`int\` | Immutable | \`100\`, \`-42\`, \`10_000_000\` |
| **실수형** | \`float\` | Immutable | \`3.14159\`, \`-0.001\` |
| **문자열** | \`str\` | Immutable | \`'Hello'\`, \`"파이썬"\` |
| **불리언** | \`bool\` | Immutable | \`True\`, \`False\` |
| **None 타입** | \`NoneType\` | Immutable | \`None\` (값이 없음을 명시) |

---

## 3. f-string 및 연산자 활용 실습

\`\`\`python
item_name = "맥북 프로"
price = 2_500_000
discount_rate = 0.1

final_price = int(price * (1 - discount_rate))

print(f"상품명: {item_name}")
print(f"원가: {price:,}원")
print(f"할인가: {final_price:,}원 (할인율: {discount_rate * 100:.0f}%)")
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파이썬의 정수형(\`int\`)은 왜 메모리 오버플로우가 발생하지 않나요?**
A. 파이썬 3의 \`int\`는 임의 정밀도 정수(Arbitrary-precision integer) 시스템을 채택하고 있어, 메모리가 허용하는 한 오버플로우 없이 정확하게 계산합니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-control-flow-conditionals-and-loops',
    title: '제어 구조: 조건문(if-elif-else, match-case)과 루프(for, while, range, enumerate, zip)',
    seo_title: '파이썬 제어문 - if-elif-else, match-case, for, while, range, enumerate, zip',
    seo_description: '조건문(if-elif-else), 파이썬 3.10+ match-case 패턴 매칭, 반복문(for, while), 내장 루프 함수(range, enumerate, zip), break 및 continue 흐름 제어를 학습합니다.',
    excerpt: '프로그램 실행 흐름을 제어하는 조건문과 파이썬 3.10+ match-case 패턴 매칭, range(), enumerate(), zip() 함수를 활용한 고급 루프 순회 기법을 배웁니다.',
    content_md: `프로그램의 논리적 실행 제어를 담당하는 **조건문(if)**과 **패턴 매칭(match-case)**, 반복 수행을 처리하는 **반복문(for, while)**의 사용법을 학습합니다.

---

## 1. 제어문 용어 사전 (Glossary)

- **Structural Pattern Matching**: 파이썬 3.10에 도입된 \`match-case\` 문법으로, 복잡한 데이터 구조 패턴을 가독성 높게 조건 처리하는 구문입니다.
- **range()**: 숫자 시퀀스를 효율적으로 생성하는 이터러블 객체입니다.
- **enumerate()**: 반복문 순회 시 인덱스 번호와 실제 값을 튜플 형태로 동시에 반환해 주는 내장 함수입니다.
- **zip()**: 여러 개의 컬렉션 요소를 같은 인덱스끼리 묶어서 병렬 순회할 수 있도록 짝지어 주는 내장 함수입니다.

---

## 2. match-case 패턴 매칭 실습

\`\`\`python
def process_command(command):
    match command.split():
        case ["quit"]:
            print("프로그램을 종료합니다.")
        case ["load", filename]:
            print(f"파일 '{filename}'을 읽어옵니다.")
        case _:
            print("알 수 없는 명령입니다.")

process_command("load data.csv")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. for-else 문에서 \`else\` 블록은 언제 실행되나요?**
A. for 루프가 \`break\` 문을 만나 중단되지 않고 정상적으로 끝까지 완주했을 때 실행됩니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-data-structures-list-tuple-set-dict',
    title: '파이썬 핵심 자료구조: 리스트, 튜플, 집합(Set) 및 딕셔너리',
    seo_title: '파이썬 자료구조 - List, Tuple, Set, Dictionary & List Comprehension',
    seo_description: '파이썬의 4대 기본 자료구조(리스트, 튜플, 집합, 딕셔너리)의 특징, 슬라이싱([:]), List Comprehension, Dict View 메소드를 다룹니다.',
    excerpt: '파이썬 4대 핵심 컬렉션인 리스트, 튜플, 집합, 딕셔너리의 가변성(Mutability)과 파이썬 특유의 한 줄 생성식 컴프리헨션(Comprehension)을 배웁니다.',
    content_md: `여러 개의 관련 데이터를 묶어서 관리하는 파이썬 4대 데이터 구조인 **리스트(List), 튜플(Tuple), 집합(Set), 딕셔너리(Dictionary)**를 학습합니다.

---

## 1. 자료구조 용어 사전 (Glossary)

- **Slicing (슬라이싱)**: 시퀀스 자료형에서 \`[start:stop:step]\` 형식으로 원하는 일부분을 추출해 내는 기법입니다.
- **List Comprehension**: 루프문과 조건문을 한 줄로 조합하여 간결하게 새 리스트를 생성하는 파이썬 고유 문법입니다.
- **Dictionary View**: \`dict.keys()\`, \`dict.values()\`, \`dict.items()\` 처럼 딕셔너리의 내부 상태를 실시간 반영하는 동적 뷰 객체입니다.

---

## 2. List Comprehension 및 딕셔너리 실습

\`\`\`python
evens_squared = [x**2 for x in range(1, 11) if x % 2 == 0]
print(f"짝수 제곱 리스트: {evens_squared}")

user_profile = {"name": "홍길동", "email": "hong@davhave.com", "role": "admin"}
phone = user_profile.get("phone", "미등록 번호")
print(f"전화번호: {phone}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 리스트 복사 시 \`b = a\` 와 \`b = a.copy()\` 의 차이는?**
A. \`b = a\`는 얕은 참조(Reference Copy)이므로 b를 고치면 a도 수정됩니다. 독립된 복사본을 만들려면 \`copy()\`를 써야 합니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-functions-lambda-and-scope',
    title: '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 LEGB 스코프 룰',
    seo_title: '파이썬 함수와 람다 - def, *args, **kwargs, lambda, LEGB 스코프 룰',
    seo_description: 'def 함수 정의, 가변 인자(*args, **kwargs), 익명 람다(lambda) 함수, 일급 객체(First-class Citizen), LEGB 스코프 변수 참조 규칙을 해설합니다.',
    excerpt: '코드의 재사용성을 극대화하는 함수(Function) 정의, 가변 인자(*args, **kwargs), 익명 함수 람다(lambda) 및 변수 검색 범위인 LEGB 규칙을 학습합니다.',
    content_md: `특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 **함수(Function)** 선언과 파이썬 변수 검색 범위인 **LEGB 규칙**을 다룹니다.`
  },
  {
    order_index: 6,
    slug: 'ch06-modules-packages-and-venv',
    title: '모듈(Module), 패키지(Package)와 가상환경(venv) 및 pip',
    seo_title: '파이썬 모듈과 패키지 - import, __name__, sys.path, venv 가상환경 & pip',
    seo_description: '파이썬 파일 모듈(Module)과 디렉토리 패키지(Package), __name__ == "__main__" 구문, sys.path 탐색 경로, pip 패키지 관리 및 venv 가상환경 구축법을 배웁니다.',
    excerpt: '독립된 코드 파일인 모듈과 패키지 구조, __name__ 엔트리 포인트 제어, 의존성 충돌을 막아주는 venv 가상환경과 pip 패키지 관리자를 학습합니다.',
    content_md: `코드의 모듈화와 재사용을 돕는 **모듈(Module)**과 **패키지(Package)**, 그리고 프로젝트별 독립된 개발 환경을 보장하는 **가상환경(venv)**을 다룹니다.`
  },
  {
    order_index: 7,
    slug: 'ch07-file-io-and-context-managers',
    title: '파일 입출력(File I/O)과 컨텍스트 매니저(with 문) 및 pathlib',
    seo_title: '파이썬 파일 입출력 - open(), read, write, with 문 & pathlib 모듈',
    seo_description: '파일 읽기/쓰기 모드(r, w, a), 컨텍스트 매니저(with 문)를 통한 리소스 자동 해제, readlines(), csv/json 파일 처리 및 pathlib 객체지향 경로 조작을 다룹니다.',
    excerpt: '텍스트 및 바이너리 파일을 읽고 쓰는 open() 함수, 리소스 자동 마감을 보장하는 with 컨텍스트 매니저 및 현대적인 pathlib 모듈을 배웁니다.',
    content_md: `디스크 상의 텍스트 및 바이너리 파일을 읽고 쓰는 **파일 입출력(File I/O)**과 리소스를 안전하게 관리하는 **with 컨텍스트 매니저**를 다룹니다.`
  },
  {
    order_index: 8,
    slug: 'ch08-exception-handling-and-custom-exceptions',
    title: '예외 처리(try-except-else-finally) 및 사용자 정의 예외',
    seo_title: '파이썬 예외 처리 - try, except, else, finally, raise & 사용자 정의 Exception',
    seo_description: '런타임 에러 방지를 위한 try-except-else-finally 블록 구문, built-in 예외 종류, raise 예외 발생 및 Exception 클래스 상속 기반 사용자 정의 예외를 배웁니다.',
    excerpt: '프로그램 런타임 오류 시 강제 종료를 방지하는 try-except-else-finally 구문, raise 키워드 및 Exception 상속 기반 커스텀 예외 클래스 생성을 학습합니다.',
    content_md: `프로그램 실행 중 예기치 못한 에러가 발생해도 프로그램이 멈추지 않도록 안전하게 포획하는 **예외 처리(Exception Handling)**를 학습합니다.`
  },
  {
    order_index: 9,
    slug: 'ch09-object-oriented-programming-classes',
    title: '객체지향 프로그래밍(OOP): 클래스, 인스턴스, 생성자(__init__) 및 캡슐화',
    seo_title: '파이썬 OOP 기초 - class, __init__, self, 인스턴스 변수, 캡슐화(__private)',
    seo_description: '객체지향 설계, 클래스와 인스턴스, 생성자 메소드(__init__), self의 의미, 클래스 변수 vs 인스턴스 변수, 비공개 속성(__속성)을 통한 캡슐화를 학습합니다.',
    excerpt: '현실 세계의 사물을 객체로 모델링하는 파이썬 클래스(Class) 작성법, 생성자 __init__(), self 인자 및 비공개 속성(__private)을 통한 캡슐화를 다룹니다.',
    content_md: `데이터와 관련 기능을 하나로 묶어 프로그램의 재사용성과 유지보수성을 극대화하는 **객체지향 프로그래밍(OOP)** 기초를 학습합니다.`
  },
  {
    order_index: 10,
    slug: 'ch10-advanced-oop-inheritance-magic-methods',
    title: '상속(Inheritance), 다형성 및 던더 매직 메소드(Dunder Methods)',
    seo_title: '파이썬 고급 OOP - 상속, super(), 매직 메소드(__str__, __len__), ABC 추상 클래스',
    seo_description: '부모 클래스 상속, super() 호출, 오버라이딩, 던더 매직 메소드(__str__, __repr__, __eq__, __len__), ABC(Abstract Base Class) 추상 클래스를 배웁니다.',
    excerpt: '클래스를 재사용 확장하는 상속(Inheritance), super() 연동, 객체의 동작을 파이썬답게 정의하는 매직 메소드(Dunder Methods)와 추상 클래스를 학습합니다.',
    content_md: `부모 클래스의 속성과 메소드를 물려받아 확장하는 **상속(Inheritance)**과 파이썬 연산자 동작을 직접 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.`
  },
  {
    order_index: 11,
    slug: 'ch11-iterators-generators-and-decorators',
    title: '이터레이터(Iterator), yield 제너레이터(Generator)와 데코레이터(Decorator)',
    seo_title: '파이썬 고급 문법 - Iterator, yield 제너레이터, 클로저 & @decorator',
    seo_description: '메모리 효율적 데이터 순회 이터레이터(__next__), yield 키워드 기반 제너레이터, 클로저(Closure) 및 함수 기능을 확장하는 @decorator 패턴을 학습합니다.',
    excerpt: '대용량 데이터를 지연 평가(Lazy Evaluation)로 다루는 제너레이터(yield)와 함수에 보일러플레이트 기능을 덧붙이는 데코레이터(@decorator)를 배웁니다.',
    content_md: `메모리를 극도로 아끼면서 순회 데이터를 만드는 **제너레이터(Generator)**와 기존 함수의 코드를 고치지 않고 기능을 확장하는 **데코레이터(Decorator)** 패턴을 학습합니다.`
  },
  {
    order_index: 12,
    slug: 'ch12-standard-libraries-math-random-datetime-json',
    title: '파이썬 핵심 표준 라이브러리 (math, random, datetime, json, re)',
    seo_title: '파이썬 표준 라이브러리 - math, random, datetime, json 직렬화 & re 정규식',
    seo_description: '파이썬에 내장된 필수 표준 라이브러리 math(수학), random(난수), datetime(날짜/시간 포맷팅), json(JSON 직렬화/파싱) 및 re(정규 표현식)를 배웁니다.',
    excerpt: '별도 설치 없이 파이썬 설치 시 함께 제공되는 강력한 내장 라이브러리(math, random, datetime, json, re 정규 표현식)의 실전 활용법을 배웁니다.',
    content_md: `"Batteries Included(모든 부품이 이미 탑재되어 있다)"라는 파이썬의 명성답게 파이썬 기본 설치 시 동봉되는 **필수 표준 라이브러리 모듈들**을 학습합니다.`
  },
  {
    order_index: 13,
    slug: 'ch13-gui-programming-with-tkinter',
    title: 'tkinter를 활용한 파이썬 데스크톱 GUI 프로그래밍',
    seo_title: '파이썬 GUI 프로그래밍 - tkinter, Tk, Label, Button, Entry, pack/grid',
    seo_description: '파이썬 표준 GUI 라이브러리 tkinter, 기본 창 생성(Tk), 컴포넌트(Label, Button, Entry, Text), 레이아웃 매니저(pack, grid) 및 버튼 클릭 이벤트를 학습합니다.',
    excerpt: '파이썬에 내장된 표준 GUI 엔진 tkinter를 이용하여 윈도우 그래픽 데스크톱 앱을 만들고 위젯과 레이아웃 매니저(pack, grid)를 배치하는 기법을 배웁니다.',
    content_md: `파이썬 표준 라이브러리로 기본 탑재되어 있는 그래픽 유저 인터페이스 모듈인 **tkinter**를 이용하여 데스크톱 GUI 프로그램 개발을 학습합니다.`
  },
  {
    order_index: 14,
    slug: 'ch14-concurrency-multiprocessing-and-asyncio',
    title: '파이썬 동시성 프로그래밍: threading, multiprocessing 및 asyncio',
    seo_title: '파이썬 동시성 - threading, multiprocessing, GIL 한계 & asyncio async/await',
    seo_description: 'GIL을 우회하는 multiprocessing, I/O 바운드 작업에 적합한 threading, 파이썬 3.7+ async/await 기반 asyncio 비동기 이벤트 루프 프로그래밍을 배웁니다.',
    excerpt: 'GIL(Global Interpreter Lock)의 특성을 이해하고, I/O 대기 시간을 극복하는 threading과 CPU 코어를 100% 활용하는 multiprocessing 및 asyncio 비동기 코딩을 학습합니다.',
    content_md: `여러 작업을 동시에 동시 실행(Concurrency)하거나 병렬 처리(Parallelism)하여 성능을 극대화하는 **threading, multiprocessing, asyncio** 모듈을 다룹니다.`
  },
  {
    order_index: 15,
    slug: 'ch15-web-scraping-and-http-requests',
    title: '웹 스크래핑과 파이썬 HTTP 통신 (requests, BeautifulSoup4)',
    seo_title: '파이썬 웹 크롤링 - requests HTTP GET/POST, BeautifulSoup4 파싱 & CSS 셀렉터',
    seo_description: 'HTTP 통신 라이브러리 requests, 응답 상태 코드(200, 404), BeautifulSoup4 HTML DOM 파싱 및 CSS 셀렉터(select)를 활용한 실전 웹 크롤링을 학습합니다.',
    excerpt: '인터넷 웹사이트의 데이터를 자동으로 수집하는 requests 모듈과 HTML 문서를 파싱하여 필요한 정보를 추출하는 BeautifulSoup4 스크래핑 기법을 배웁니다.',
    content_md: `웹 서버와 HTTP 통신을 주고받는 **\`requests\`** 모듈과 웹 페이지의 HTML 구조를 분석하여 필요한 정보를 크롤링하는 **\`BeautifulSoup4\`**를 학습합니다.`
  },
  {
    order_index: 16,
    slug: 'ch16-python-type-hinting-and-annotations',
    title: '파이썬 타입 힌팅(Type Hinting)과 typing 모듈',
    seo_title: '파이썬 타입 힌팅 - type annotations, typing 모듈, mypy 정적 분석',
    seo_description: '파이썬 3.5+ 타입 어노테이션(Type Annotations), typing 모듈(List, Dict, Optional, Union, Callable)과 mypy 정적 타입 검사기 활용법을 학습합니다.',
    excerpt: '파이썬 코드 가독성과 IDE 자동 완성을 획기적으로 올리는 타입 힌팅(Type Hinting)과 typing 모듈, mypy 정적 분석기를 다룹니다.',
    content_md: `동적 타이핑 언어인 파이썬에서 컴파일 타임 및 개발 시점에 변수와 함수 매개변수의 데이터 타입을 명시해 주는 **타입 힌팅(Type Hinting)** 기술을 다룹니다.`
  },
  {
    order_index: 17,
    slug: 'ch17-functional-programming-map-filter-reduce',
    title: '파이썬 함수형 프로그래밍 기법 (map, filter, reduce, functools)',
    seo_title: '파이썬 함수형 프로그래밍 - map, filter, reduce, functools & lru_cache',
    seo_description: '고차 함수 map(), filter(), functools.reduce(), partial(), 그리고 메모이제이션 성능을 극대화하는 lru_cache 데코레이터를 배웁니다.',
    excerpt: '부작용(Side Effect)이 없는 순수 함수 기반의 파이썬 함수형 프로그래밍(map, filter, reduce, functools.lru_cache) 기법을 학습합니다.',
    content_md: `부작용(Side Effect)을 줄이고 불변성 데이터를 가공하는 **파이썬 함수형 프로그래밍(Functional Programming)** 기법을 다룹니다.`
  },
  {
    order_index: 18,
    slug: 'ch18-python-c-extension-and-ctypes',
    title: '파이썬 C 연동 및 ctypes, cffi 확장 모듈',
    seo_title: '파이썬 C 연동 - ctypes, C-API, Shared Library .so/.dll 호출 & 바인딩',
    seo_description: 'C 언어로 작성된 고속 공유 라이브러리(.so/.dll)를 파이썬에서 호출하는 ctypes 모듈, CPython C-API 바인딩 및 연동 기법을 배웁니다.',
    excerpt: '파이썬의 실행 속도 한계를 극복하기 위해 C 언어로 작성된 콤파일 라이브러리(.so/.dll)를 ctypes 모듈로 직접 불러와 호출하는 기법을 배웁니다.',
    content_md: `파이썬의 편리함과 C 언어의 연산 속도를 결합하여 **C 언어 라이브러리(\`.so\`, \`.dll\`)를 파이썬에서 바인딩 호출하는 \`ctypes\` 모듈**을 다룹니다.`
  },
  {
    order_index: 19,
    slug: 'ch19-python-packaging-distribution-wheel',
    title: '파이썬 패키징과 PyPI 배포 (pyproject.toml, setuptools, wheel)',
    seo_title: '파이썬 패키징 - pyproject.toml, setuptools, wheel & PyPI twine 배포',
    seo_description: '내가 만든 파이썬 패키지를 pyproject.toml 스펙으로 패키징하고 wheel 빌드 후 PyPI 전 세계 패키지 저장소에 twine으로 오픈소스 배포하는 법을 배웁니다.',
    excerpt: '직접 작성한 파이썬 모듈을 전 세계 개발자들이 pip install로 사용할 수 있도록 pyproject.toml과 build, twine을 이용해 PyPI에 배포하는 과정을 학습합니다.',
    content_md: `개발한 파이썬 오픈소스 패키지를 표준 규격(**\`pyproject.toml\`**)으로 패키징하여 **PyPI(Python Package Index)**에 등록 배포하는 과정을 다룹니다.`
  },
  {
    order_index: 20,
    slug: 'ch20-python-final-project-mini-game-and-apps',
    title: '파이썬 실전 종합 프로젝트: 터틀 그래픽 미니 게임 & GUI 관리 앱',
    seo_title: '파이썬 실전 프로젝트 - Turtle 터틀 그래픽 미니 게임 & GUI 관리 앱',
    seo_description: '배운 파이썬 기술(자료구조, OOP, 파일 I/O, tkinter, Turtle)을 총동원하여 터틀 그래픽 피하기 미니 게임과 실전 GUI 도서/회원 관리 애플리케이션을 구현합니다.',
    excerpt: '파이썬의 기초 문법, 객체지향, 파일 처리, tkinter GUI 기술을 종합하여 터틀 그래픽 미니 게임과 실전 데이터 관리 애플리케이션을 완성합니다.',
    content_md: `배운 파이썬의 모든 핵심 기초 문법, 자료구조, 객체지향 설계, 파일 처리 및 tkinter GUI 기술을 통합하여 **실전 파이썬 종합 프로젝트**를 완성합니다.`
  },
  // 21 ~ 28 검색 최적화(SEO) 신규 독립 레슨 추가!
  {
    order_index: 21,
    slug: 'ch21-python-data-analysis-numpy-pandas',
    title: '파이썬 데이터 분석 입문: NumPy 배열 연산과 Pandas 데이터프레임 처리',
    seo_title: '파이썬 데이터 분석 - NumPy N차원 배열, Pandas DataFrame & CSV 전처리',
    seo_description: '파이썬 데이터 분석 핵심 패키지 NumPy의 N차원 배열(ndarray) 고속 벡터 연산, Pandas DataFrame 결측치 정제, 그룹화(groupby) 및 CSV 파일 읽기/쓰기를 배웁니다.',
    excerpt: '파이썬 데이터 과학의 기반이 되는 NumPy의 벡터화 연산과 Pandas DataFrame을 활용한 대용량 데이터 전처리 및 통계 분석 기술을 다룹니다.',
    content_md: `파이썬 데이터 과학(Data Science) 및 머신러닝의 핵심 기반이 되는 **NumPy 배열 연산**과 **Pandas 데이터프레임(DataFrame)** 전처리 기술을 다룹니다.

---

## 1. 데이터 분석 핵심 전문 용어 사전 (Glossary)

- **NumPy (Numerical Python)**: C 언어로 구현되어 다차원 배열(\`ndarray\`)의 고속 수치 벡터 연산을 지원하는 파이썬 핵심 패키지입니다.
- **Pandas**: 행(Row)과 열(Column)을 가진 2차원 표 형태의 \`DataFrame\` 자료구조를 바탕으로 데이터 정제, 필터링, 결합을 담당하는 데이터 분석 모듈입니다.
- **Vectorization (벡터화 연산)**: 파이썬 파이썬 루프문 없이 C 언어 레벨에서 배열 전체 요소를 한 번에 고속 연산 처리하는 기술입니다.
- **NaN (Not a Number)**: 데이터셋 내에 비어있는 결측치(Missing Value)를 의미합니다. (\`pandas.dropna()\`, \`pandas.fillna()\`로 정제)

---

## 2. NumPy & Pandas 실전 데이터 분석 코드

\`\`\`python
import numpy as np
import pandas as pd

# 1. NumPy N차원 배열 생성 및 벡터화 연산
arr = np.array([10, 20, 30, 40, 50])
print(f"NumPy 배열 평균: {arr.mean()}, 표준편차: {arr.std():.2f}")

# 2. Pandas DataFrame 데이터셋 구축 및 결측치 채우기
data = {
    "name": ["홍길동", "이순신", "강감찬", "유관순"],
    "department": ["IT", "Sales", "IT", "HR"],
    "salary": [5500, 6200, None, 4800] # 결측치 포함
}

df = pd.DataFrame(data)

# 결측치를 평균 급여로 채우기 (fillna)
avg_salary = df["salary"].mean()
df["salary"] = df["salary"].fillna(avg_salary)

# 부서별 평균 급여 그룹화 집계 (groupby)
dept_summary = df.groupby("department")["salary"].mean()
print("=== [부서별 평균 급여] ===")
print(dept_summary)
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬 기본 리스트 대신 왜 NumPy 배열을 사용해야 하나요?**
A. 파이썬 리스트는 객체 참조 주소를 연속으로 연결한 형태라 메모리가 분산되고 파이썬 인터프리터 오버헤드가 크지만, NumPy \`ndarray\`는 C 언어의 연속된 단일 메모리 블록에 데이터를 배치하여 처리 속도가 **10~100배 가량 빠르기** 때문입니다.
`
  },
  {
    order_index: 22,
    slug: 'ch22-python-web-framework-django-fastapi',
    title: '파이썬 웹 프레임워크 비교: Django 풀스택 vs FastAPI 비동기 REST API',
    seo_title: '파이썬 웹 프레임워크 - Django MVT 아키텍처 vs FastAPI 비동기 REST API 구축',
    seo_description: '파이썬 대표 웹 프레임워크 Django(MVT, ORM, Admin)와 현대적 FastAPI(async/await, Pydantic, OpenAPI Swagger)의 구조적 차이와 REST API 구축법을 배웁니다.',
    excerpt: '모든 부품이 탑재된 Django 프레임워크와 고성능 비동기 REST API를 구축하는 FastAPI의 아키텍처 비교 및 실전 서버 구축법을 배웁니다.',
    content_md: `파이썬 생태계를 대표하는 두 프레임워크인 **Django 풀스택 웹 프레임워크**와 고성능 비동기 **FastAPI**의 아키텍처를 비교하고 서버 구축을 다룹니다.

---

## 1. 파이썬 웹 프레임워크 용어 사전 (Glossary)

- **Django**: ORM, 인증 시스템, 관리자 페이지(Admin), 데이터베이스 마이그레이션이 포함된 "Batteries-Included" 파이썬 대표 풀스택 웹 프레임워크입니다. (MVT: Model-View-Template 패턴)
- **FastAPI**: 파이썬 3.8+ 타입 힌팅과 \`asyncio\`를 기반으로 Uvicorn/ASGI 기술을 써서 Node.js/Go 언어 수준의 초고속 속도를 내는 현대적 REST API 프레임워크입니다.
- **ASGI (Asynchronous Server Gateway Interface)**: 비동기 웹 애플리케이션과 웹 서버 간의 소통을 돕는 현대적 서버 인터페이스 규격입니다. (Uvicorn 등)
- **OpenAPI (Swagger)**: FastAPI에서 파이썬 코드 실행 시 엔드포인트 테스트 문서(\`/docs\`)를 자동 생성해 주는 인터페이스 명세 기술입니다.

---

## 2. FastAPI 비동기 REST API 서버 연동 예제

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

# 1. FastAPI 앱 객체 생성
app = FastAPI(title="DAVHAVE FastAPI Server")

# 2. Pydantic 요청 데이터 스키마 정의
class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

# 3. 비동기 엔드포인트 라우팅 (GET)
@app.get("/")
async def read_root():
    return {"message": "Welcome to DAVHAVE FastAPI Service"}

# 4. POST 요청 및 자동 검증
@app.post("/items/")
async def create_item(item: Item):
    discount_price = item.price * 0.9
    return {"item_name": item.name, "discounted_price": discount_price}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Django와 FastAPI 중 어떤 것을 선택해야 하나요?**
A. 관리자 웹 화면, 복잡한 사용자 로그인 인증, 템플릿 렌더링이 필요한 전통적 풀스택 웹 사이트는 **Django**를 선호하고, 마이크로서비스(MSA), 인공지능 API 서버, 모바일 앱 백엔드 REST API는 **FastAPI**를 선택하는 것이 실무 표준입니다.
`
  },
  {
    order_index: 23,
    slug: 'ch23-python-orm-sqlalchemy-and-database',
    title: '파이썬 ORM 데이터베이스 연동: SQLAlchemy와 SQLModel 완전 가이드',
    seo_title: '파이썬 ORM - SQLAlchemy 2.0, SQLModel, PostgreSQL/MySQL 연동 & Alembic',
    seo_description: '파이썬 ORM(Object-Relational Mapping) 대표 도구 SQLAlchemy 2.0 모델링, Session 데이터베이스 CRUD 및 Alembic 데이터베이스 마이그레이션을 다룹니다.',
    excerpt: '파이썬 객체와 관계형 데이터베이스(RDBMS)를 직접 매핑해 주는 SQLAlchemy ORM 및 SQLModel 기반 데이터베이스 트랜잭션 관리 기법을 배웁니다.',
    content_md: `SQL 쿼리문 작성 없이 파이썬 객체만으로 데이터베이스 데이터를 다루는 **ORM(Object-Relational Mapping) 기술인 SQLAlchemy**와 **SQLModel**을 다룹니다.

---

## 1. 파이썬 ORM 용어 사전 (Glossary)

- **ORM (Object-Relational Mapping)**: 파이썬의 클래스/객체와 RDBMS(MySQL, PostgreSQL, SQLite)의 데이터 테이블을 자동으로 1:1 연결해 주는 매핑 기술입니다.
- **SQLAlchemy**: 파이썬 최고 수준의 유연성과 안정성을 자랑하는 대표적 엔터프라이즈 ORM 라이브러리입니다.
- **Engine / Session**: 데이터베이스 연결 커넥션 풀을 관리하는 \`Engine\`과 DB 트랜잭션 작업을 단위별로 관리하는 \`Session\` 객체입니다.
- **Alembic**: SQLAlchemy DB 모델의 구조 변경 이력을 데이터베이스에 안전하게 반영하고 되돌리는 마이그레이션(Migration) 도구입니다.

---

## 2. SQLAlchemy 2.0 기반 DB CRUD 코드

\`\`\`python
from sqlalchemy import create_engine, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, Session

# 1. Base 클래스 정의
class Base(DeclarativeBase):
    pass

# 2. User DB 테이블 모델 정의
class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(50), unique=True)
    email: Mapped[str] = mapped_column(String(100))

# 3. DB 엔진 및 세션 생성
engine = create_engine("sqlite:///app.db", echo=False)
Base.metadata.create_all(engine) # 테이블 생성

# 4. Session 데이터 추가 및 조회 (CRUD)
with Session(engine) as session:
    new_user = User(username="hong", email="hong@davhave.com")
    session.add(new_user)
    session.commit() # 트랜잭션 반영

    # 데이터 조회
    user = session.query(User).filter_by(username="hong").first()
    print(f"조회된 유저: {user.username} ({user.email})")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 생 SQL(Raw SQL)보다 ORM을 사용하면 어떤 이점이 있나요?**
A. 데이터베이스 종류(MySQL $\rightarrow$ PostgreSQL)가 변경되어도 SQL 문법을 고칠 필요가 없으며, SQL Injection 해킹 공격을 방지하고 객체지향적인 깔끔한 코드를 유지할 수 있습니다.
`
  },
  {
    order_index: 24,
    slug: 'ch24-python-web-automation-selenium-playwright',
    title: '파이썬 웹 자동화 및 동적 렌더링 스크래핑: Selenium과 Playwright',
    seo_title: '파이썬 웹 자동화 - Selenium WebDriver vs Playwright 비동기 크롤링',
    seo_description: '자바스크립트 싱글 페이지 앱(SPA) 동적 크롤링을 위한 Selenium WebDriver와 차세대 고속 비동기 브라우저 자동화 Playwright 활용법을 배웁니다.',
    excerpt: '자바스크립트로 동작하는 동적 웹 사이트를 실제 브라우저 엔진(Headless Browser)으로 자동화하고 데이터를 크롤링하는 Selenium과 Playwright를 학습합니다.',
    content_md: `자바스크립트(React, Vue)로 렌더링되는 동적 웹 페이지를 실제 웹 브라우저 엔진으로 제어하는 **웹 자동화 도구인 Selenium과 Playwright**를 배웁니다.

---

## 1. 웹 자동화 용어 사전 (Glossary)

- **Headless Browser**: 디스플레이 모니터 화면(GUI)을 띄우지 않고 메모리 상에서 백그라운드로 고속 구동되는 브라우저 엔진입니다.
- **Selenium**: 가장 오랜 역사를 지닌 웹 브라우저 자동화 및 테스트 표준 툴킷입니다.
- **Playwright**: Microsoft에서 개발한 차세대 비동기 웹 자동화 도구로, 기존 Selenium 대비 5배 이상 빠르고 브라우저 컨텍스트 격리를 지원합니다.
- **WebDriver**: 자동화 스크립트가 크롬/파이어폭스 브라우저에 이벤트를 전달할 수 있게 돕는 드라이버 매니저입니다.

---

## 2. Playwright 비동기 브라우저 자동화 코드

\`\`\`python
import asyncio
from playwright.async_api import async_playwright

async def run_web_automation():
    async with async_playwright() as p:
        # 헤드리스 크롬 브라우저 구동
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # 페이지 이동 및 타이틀 확인
        await page.goto("https://davhave.com")
        print(f"웹사이트 타이틀: {await page.title()}")

        # 스크린샷 자동 저장
        await page.screenshot(path="davhave_screenshot.png")
        await browser.close()

asyncio.run(run_web_automation())
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`requests\`로 크롤링할 때와 \`Selenium/Playwright\`를 쓸 때의 차이는?**
A. \`requests\`는 순수 HTML 텍스트만 긁어오므로 자바스크립트가 나중에 데이터를 렌더링하는 SPA(Single Page Application) 페이지는 데이터를 가져올 수 없습니다. 반면 \`Playwright\`는 실제 브라우저가 자바스크립트를 완전히 실행한 후의 최종 화면 데이터를 가져옵니다.
`
  },
  {
    order_index: 25,
    slug: 'ch25-python-unit-testing-pytest-and-mock',
    title: '파이썬 단위 테스트와 TDD: unittest, pytest 및 mock 객체 활용',
    seo_title: '파이썬 테스트 코드 - pytest 사용법, unittest, fixture, mock 가짜 객체',
    seo_description: '소프트웨어 품질을 보장하는 단위 테스트(Unit Test), pytest 프레임워크, test fixture 생성, mock 객체(unittest.mock)를 활용한 외부 연동 테스트를 배웁니다.',
    excerpt: '프로그램 결함을 예방하는 단위 테스트(Unit Testing) 작성법과 파이썬 대표 테스트 프레임워크 pytest, 가짜 객체를 만드는 mock 기법을 학습합니다.',
    content_md: `소프트웨어의 버그를 미리 방지하고 안전한 리팩토링을 보장하는 **단위 테스트(Unit Testing)** 및 **\`pytest\` 프레임워크**를 학습합니다.

---

## 1. 테스트 핵심 용어 사전 (Glossary)

- **Unit Test (단위 테스트)**: 애플리케이션의 최소 단위(함수, 메소드)가 의도한 대로 정확히 동작하는지 검증하는 테스트 코드입니다.
- **pytest**: 파이썬에서 가장 간결한 \`assert\` 구문과 강력한 \`fixture\` 기능을 제공하는 대표적 테스트 프레임워크입니다.
- **Test Fixture**: 테스트를 실행하기 전 필요한 데이터베이스 세션이나 객체 상태를 미리 준비해 주는 세팅 도구입니다. (\`@pytest.fixture\`)
- **Mocking (가짜 객체)**: 외부 API 호출이나 DB 접속처럼 실제 테스트 실행이 어려운 외부 자원을 가짜 반응(Mock Object)으로 대체하는 기법입니다.

---

## 2. pytest 및 Mocking 실전 테스트 코드

\`\`\`python
import pytest
from unittest.mock import Mock

# 검증 대상 함수
def calculate_discount(price: float, rate: float) -> float:
    if price < 0 or rate < 0:
        raise ValueError("가격과 할인율은 음수가 될 수 없습니다.")
    return price * (1 - rate)

# 1. pytest 기본 테스트 케이스
def test_calculate_discount_success():
    assert calculate_discount(10000, 0.2) == 8000.0

def test_calculate_discount_invalid_value():
    with pytest.raises(ValueError):
        calculate_discount(-5000, 0.1)

# 2. Mock 객체를 이용한 외부 API 호출 테스트
def test_external_api_with_mock():
    mock_api = Mock()
    mock_api.get_user_name.return_value = "홍길동"

    # 가짜 객체 동작 검증
    assert mock_api.get_user_name(101) == "홍길동"
    mock_api.get_user_name.assert_called_once_with(101)
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. TDD(Test-Driven Development) 개발 방법론이란?**
A. 실제 구현 코드를 작성하기 전에 **실패하는 테스트 코드를 먼저 작성**하고, 이를 통과시키는 최소한의 코드를 구현한 뒤 리팩토링을 진행하는 고품질 소프트웨어 개발 절차입니다.
`
  },
  {
    order_index: 26,
    slug: 'ch26-python-ai-machine-learning-scikit-learn',
    title: '파이썬 머신러닝 기초: Scikit-learn 지도학습과 분류/회귀 모델',
    seo_title: '파이썬 머신러닝 - Scikit-learn, 선형 회귀, 결정 트리, Dataset 분할 & 평가',
    seo_description: '파이썬 머신러닝 핵심 패키지 Scikit-learn, 지도학습(Supervised Learning), train_test_split 데이터 분할, 선형 회귀(Linear Regression) 및 결정 트리 분류를 배웁니다.',
    excerpt: '파이썬 인공지능 머신러닝의 표준 프레임워크인 Scikit-learn을 이용하여 데이터를 학습시키고 예측하는 회귀 및 분류 모델링 기법을 배웁니다.',
    content_md: `데이터로부터 패턴을 스스로 학습하여 미래 결과를 예측하는 **인공지능 머신러닝(Machine Learning)**과 대표 프레임워크 **Scikit-learn**을 다룹니다.

---

## 1. 머신러닝 핵심 용어 사전 (Glossary)

- **Supervised Learning (지도학습)**: 정답(Label)이 포함된 데이터셋을 통해 입력값과 정답 간의 관계를 학습하는 알고리즘입니다. (회귀 Regression, 분류 Classification)
- **Scikit-learn**: 파이썬의 대표적인 머신러닝 오픈소스 라이브러리로, 분류, 회귀, 클러스터링, 데이터 전처리 알고리즘을 체계적으로 제공합니다.
- **train_test_split**: 모델의 성능을 공정하게 평가하기 위해 전체 데이터를 학습용(Train Set)과 평가용(Test Set)으로 분할하는 함수입니다.
- **Overfitting (과적합)**: 모델이 학습 데이터에만 너무 과하게 적응되어, 새로운 실제 데이터가 들어왔을 때 예측 성능이 떨어지는 현상입니다.

---

## 2. Scikit-learn 머신러닝 분류 모델 구축 코드

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# 1. 붓꽃(Iris) 데이터셋 로드
iris = load_iris()
X, y = iris.data, iris.target

# 2. 학습용/테스트용 데이터 분할 (8:2)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. 결정 트리(Decision Tree) 머신러닝 모델 생성 및 학습
model = DecisionTreeClassifier(max_depth=3)
model.fit(X_train, y_train)

# 4. 테스트 데이터 예측 및 정확도 평가
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f"=== [Scikit-learn 머신러닝 모델 평가] ===")
print(f"붓꽃 품종 예측 정확도(Accuracy): {accuracy * 100:.2f}%")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 회귀(Regression)와 분류(Classification)의 차이는?**
A. **회귀**는 집값, 주가, 온도처럼 연속적인 숫자 수치를 예측하는 것이고, **분류**는 이메일 스팸 여부(Yes/No), 품종 종류(A/B/C)처럼 명확히 구분되는 범주형 클래스를 예측하는 것입니다.
`
  },
  {
    order_index: 27,
    slug: 'ch27-python-deep-learning-pytorch-basics',
    title: '파이썬 딥러닝 입문: PyTorch 텐서(Tensor)와 신경망(Neural Network) 구현',
    seo_title: '파이썬 딥러닝 - PyTorch 텐서, Autograd 자동 미분, Linear 신경망 & Loss',
    seo_description: '글로벌 1위 딥러닝 프레임워크 PyTorch(파이토치), Tensor 자료구조, Autograd 자동 미분 역전파(Backpropagation), nn.Module 신경망 구축 및 GPU 가속을 다웁니다.',
    excerpt: '현대 인공지능 AI의 핵심인 인공신경망 딥러닝을 구축하는 PyTorch 프레임워크, Tensor 자료구조 및 역전파(Backpropagation) 메커니즘을 배웁니다.',
    content_md: `인간 뇌의 신경망 구조를 본뜬 인공신경망(ANN)으로 대용량 복잡 데이터(이미지, 음성, 자연어)를 학습하는 **PyTorch 기반 딥러닝(Deep Learning)**을 배웁니다.

---

## 1. 딥러닝 핵심 용어 사전 (Glossary)

- **PyTorch (파이토치)**: Facebook(Meta) AI 연구소가 개발한 동적 계산 그래프(Dynamic Computational Graph) 기반의 전 세계 1위 파이썬 딥러닝 프레임워크입니다.
- **Tensor (텐서)**: 딥러닝 연산의 기본 단위로, GPU 메모리에 올려 초고속 매트릭스 연산이 가능한 다차원 배열 객체입니다.
- **Autograd**: 신경망 학습 과정에서 오차 역전파(Backpropagation)에 필요한 그래디언트(Gradient, 경사도)를 자동으로 미분 계산해 주는 엔진입니다.
- **Loss Function (손실 함수)**: 신경망의 예측값과 실제 정답 간의 오차 크기를 측정하는 함수입니다. (예: MSE, CrossEntropyLoss)

---

## 2. PyTorch 신경망(Neural Network) 모델 구현

\`\`\`python
import torch
import torch.nn as nn
import torch.optim as optim

# 1. PyTorch 딥러닝 신경망 모델 클래스 정의
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(10, 5) # 입력 10개 -> 은닉층 5개
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(5, 1)  # 은닉층 5개 -> 출력 1개

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

# 2. 모델 및 옵티마이저 생성
model = SimpleNN()
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

# 3. 임의 입력 텐서 및 역전파 단계를 통한 1회 학습
dummy_input = torch.randn(2, 10) # 배치 크기 2
target = torch.randn(2, 1)

optimizer.zero_grad() # 그래디언트 초기화
output = model(dummy_input)
loss = criterion(output, target)
loss.backward() # 역전파 경사도 계산
optimizer.step() # 가중치 갱신

print(f"PyTorch 1회 학습 손실값(Loss): {loss.item():.4f}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. PyTorch 텐서를 CPU에서 NVIDIA GPU(CUDA)로 옮기는 방법은?**
A. \`device = torch.device("cuda" if torch.cuda.is_available() else "cpu")\` 로 디바이스를 설정한 후, \`tensor = tensor.to(device)\` 및 \`model = model.to(device)\` 형태로 전달하면 GPU 파워를 활용할 수 있습니다.
`
  },
  {
    order_index: 28,
    slug: 'ch28-python-big-data-pyspark-and-parallel',
    title: '파이썬 분산 빅데이터 처리: PySpark와 RDD/DataFrame 대용량 분산 연산',
    seo_title: '파이썬 빅데이터 - PySpark, Apache Spark 클러스터, RDD vs Spark DataFrame',
    seo_description: '대용량 빅데이터 분산 처리 엔진 Apache Spark의 파이썬 API인 PySpark, RDD, Spark DataFrame 메모리 인메모리 연산 및 빅데이터 ETL 파이프라인 구축을 다룹니다.',
    excerpt: '수백 GB~수 TB 단위의 대용량 빅데이터를 클러스터 상에서 병렬 분할 처리하는 Apache Spark의 파이썬 엔진 PySpark와 Spark DataFrame을 익힙니다.',
    content_md: `단일 컴퓨터의 메모리 한계를 넘어서는 수백 GB~수 TB 대용량 빅데이터를 분산 서버 클러스터에서 초고속으로 처리하는 **PySpark 빅데이터 파이프라인**을 다룹니다.

---

## 1. 빅데이터 처리 용어 사전 (Glossary)

- **Apache Spark**: 인메모리(In-Memory) 기반 분산 데이터 처리 엔진으로, 기존 MapReduce 대비 100배 이상 빠른 빅데이터 표준 시스템입니다.
- **PySpark**: Apache Spark를 파이썬 언어로 제어할 수 있도록 제공되는 공식 파이썬 API 모듈입니다.
- **RDD (Resilient Distributed Dataset)**: 클러스터의 여러 노드에 분산되어 병렬로 처리되는 장애 복구 가능한 불변 컬렉션 자료구조입니다.
- **Spark DataFrame**: RDD 상위에 구축된 최적화 구조로, SQL 쿼리 및 Pandas와 유사한 데이터프레임 파이프라인 연산을 지원합니다.

---

## 2. PySpark 세션 가동 및 분산 쿼리 실습

\`\`\`python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg

# 1. PySpark SparkSession 생성
spark = SparkSession.builder \
    .appName("DAVHAVE BigData Processing") \
    .getOrCreate()

# 2. 대용량 분산 DataFrame 데이터 생성
data = [
    ("HR", 4500), ("IT", 6000), ("IT", 7500),
    ("Sales", 5000), ("HR", 4800), ("Sales", 5200)
]
columns = ["Department", "Salary"]

df = spark.createDataFrame(data, schema=columns)

# 3. 분산 쿼리 및 그룹화 연산 (IT 부서 필터링 및 평균 급여)
result_df = df.filter(col("Department") != "HR") \
              .groupBy("Department") \
              .agg(avg("Salary").alias("Avg_Salary"))

print("=== [PySpark 분산 빅데이터 결과] ===")
result_df.show()

spark.stop() # SparkSession 종료
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Pandas DataFrame과 PySpark DataFrame의 결정적 차이는?**
A. Pandas는 단일 컴퓨터의 RAM 메모리에 전체 데이터를 모두 올려서 단일 스레드로 연산하는 반면, PySpark는 수십~수백 대의 서버 클러스터 노드들에 **데이터를 조각내어 분산 병렬 연산**하므로 테라바이트급 빅데이터 처리가 가능합니다.
`
  }
];

// Split into 7 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 16),
  lessons.slice(16, 20),
  lessons.slice(20, 24),
  lessons.slice(24, 28)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full Python SEO Extended Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_python_seo_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 7 SEO extended SQL chunk files for Python!');
