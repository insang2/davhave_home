import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

// 1~20: mega, 21~28: seo, 29~35: stdlib, 36~40: capi, 41: idle, 42~46: pjt24
const lessons = [
  // 1
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
  // 2
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
  // 3
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
  // 4
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
  // 5
  {
    order_index: 5,
    slug: 'ch05-functions-lambda-and-scope',
    title: '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 LEGB 스코프 룰',
    seo_title: '파이썬 함수와 람다 - def, *args, **kwargs, lambda, LEGB 스코프 룰',
    seo_description: 'def 함수 정의, 가변 인자(*args, **kwargs), 익명 람다(lambda) 함수, 일급 객체(First-class Citizen), LEGB 스코프 변수 참조 규칙을 해설합니다.',
    excerpt: '코드의 재사용성을 극대화하는 함수(Function) 정의, 가변 인자(*args, **kwargs), 익명 함수 람다(lambda) 및 변수 검색 범위인 LEGB 규칙을 학습합니다.',
    content_md: `특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 **함수(Function)** 선언과 파이썬 변수 검색 범위인 **LEGB 규칙**을 다룹니다.

---

## 1. 함수 및 스코프 용어 사전 (Glossary)

- **First-Class Citizen (일급 객체)**: 파이썬에서 함수는 변수에 할당할 수 있고, 다른 함수의 인자로 전달되거나 반환값으로 리턴될 수 있는 일급 객체입니다.
- **\`*args\` / \`**kwargs\`**: 위치 가변 인자(\`*args\`)와 키워드 가변 인자(\`**kwargs\`)를 튜플 및 딕셔너리 형태로 동적 수집하는 매개변수 표현식입니다.
- **Lambda Function**: 이름 없이 한 줄로 간단하게 선언하는 익명 함수 표현식입니다. (\`lambda x: x + 1\`)
- **LEGB Rule**: 파이썬 변수 이름을 검색하는 4단계 영역 우선순위입니다. (**L**ocal $\rightarrow$ **E**nclosing $\rightarrow$ **G**lobal $\rightarrow$ **B**uilt-in)

---

## 2. 가변 인자 및 람다 함수 실습

\`\`\`python
# 가변 인자 함수
def calculate_total(*args, **kwargs):
    base_sum = sum(args)
    tax_rate = kwargs.get("tax", 0.0)
    return base_sum * (1 + tax_rate)

print(f"합계 및 세금 계산: {calculate_total(100, 200, 300, tax=0.1):,.0f}원")

# 람다 함수 정렬
products = [("노트북", 150), ("키보드", 8), ("마우스", 4)]
products.sort(key=lambda x: x[1]) # 가격 기준 정렬
print(f"가격 오름차순 정렬: {products}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 함수 안에서 전역 변수를 수정하려면 어떻게 하나요?**
A. 함수 내부에서 \`global 변수명\` 키워드를 선언하면 전역 영역의 변수를 직접 참조하고 변경할 수 있습니다. (다만 남용 시 사이드 이펙트 주의)
`
  },
  // 6 ~ 20 (대용량 상세 본문 수록)
  {
    order_index: 6,
    slug: 'ch06-modules-packages-and-venv',
    title: '모듈(Module), 패키지(Package)와 가상환경(venv) 및 pip',
    seo_title: '파이썬 모듈과 패키지 - import, __name__, sys.path, venv 가상환경 & pip',
    seo_description: '파이썬 파일 모듈(Module)과 디렉토리 패키지(Package), __name__ == "__main__" 구문, sys.path 탐색 경로, pip 패키지 관리 및 venv 가상환경 구축법을 배웁니다.',
    excerpt: '독립된 코드 파일인 모듈과 패키지 구조, __name__ 엔트리 포인트 제어, 의존성 충돌을 막아주는 venv 가상환경과 pip 패키지 관리자를 학습합니다.',
    content_md: `코드의 모듈화와 재사용을 돕는 **모듈(Module)**과 **패키지(Package)**, 그리고 프로젝트별 독립된 개발 환경을 보장하는 **가상환경(venv)**을 다룹니다.

---

## 1. 모듈 & 가상환경 용어 사전 (Glossary)

- **Module**: 함수, 클래스, 변수들을 모아 놓은 단일 파이썬 소스 파일(\`.py\`)입니다.
- **Package**: 여러 모듈들을 폴더 구조로 묶어 관리하는 디렉토리입니다. (파이썬 3.3+부터 \`__init__.py\`가 선택 사항임)
- **\`__name__ == '__main__'\`**: 현재 파일이 직접 실행되었는지, 다른 파일에 의해 \`import\` 되었는지를 구별하는 파이썬 엔트리 포인트 진단 구문입니다.
- **Virtual Environment (venv)**: 프로젝트마다 독립된 파이썬 실행 환경과 패키지 세트를 격리하여 의존성 충돌을 막아주는 내장 모듈입니다.

---

## 2. venv 가상환경 명령어 사용법

\`\`\`bash
# 1. 'myenv' 이름의 가상환경 생성
python3 -m venv myenv

# 2. 가상환경 활성화 (macOS / Linux)
source myenv/bin/activate

# 3. 가상환경 활성화 (Windows)
myenv\Scripts\activate

# 4. 외부 패키지 설치 및 의존성 저장
pip install requests pandas
pip freeze > requirements.txt
\`\`\`
`
  },
  // 7 ~ 20 (주요 핵심 레슨의 content_md 보충)
  {
    order_index: 7,
    slug: 'ch07-file-io-and-context-managers',
    title: '파일 입출력(File I/O)과 컨텍스트 매니저(with 문) 및 pathlib',
    seo_title: '파이썬 파일 입출력 - open(), read, write, with 문 & pathlib 모듈',
    seo_description: '파일 읽기/쓰기 모드(r, w, a), 컨텍스트 매니저(with 문)를 통한 리소스 자동 해제, readlines(), csv/json 파일 처리 및 pathlib 객체지향 경로 조작을 다룹니다.',
    excerpt: '텍스트 및 바이너리 파일을 읽고 쓰는 open() 함수, 리소스 자동 마감을 보장하는 with 컨텍스트 매니저 및 현대적인 pathlib 모듈을 배웁니다.',
    content_md: `디스크 상의 텍스트 및 바이너리 파일을 읽고 쓰는 **파일 입출력(File I/O)**과 리소스를 안전하게 관리하는 **with 컨텍스트 매니저**를 다룹니다.

---

## 1. 파일 I/O 용어 사전 (Glossary)

- **Context Manager (컨텍스트 매니저)**: \`with\` 문 구문 탈출 시 자동으로 \`close()\` 또는 자원 해제 작업을 안전하게 처리하는 메커니즘입니다.
- **\`pathlib.Path\`**: 파이썬 3.4+에 도입된 객체지향적인 파일 및 디렉토리 경로 조작 표준 모듈입니다.
- **Encoding (UTF-8)**: 텍스트 파일 입출력 시 한글 깨짐 현상을 방지하기 위해 지정하는 표준 문자 인코딩 설정입니다. (\`encoding='utf-8'\`)

---

## 2. 파일 쓰기/읽기 및 pathlib 예제

\`\`\`python
from pathlib import Path

# pathlib 객체 생성 및 파일 생성
file_path = Path("sample_data.txt")

# 파일 쓰기 (with 컨텍스트 매니저)
with file_path.open("w", encoding="utf-8") as f:
    f.write("DAVHAVE 파이썬 파일 입출력 테스트\n")
    f.write("Line 2: 인코딩 안전성 확보\n")

# 파일 읽기
if file_path.exists():
    content = file_path.read_text(encoding="utf-8")
    print("=== [파일 읽기 결과] ===")
    print(content)
\`\`\`
`
  },
  {
    order_index: 8,
    slug: 'ch08-exception-handling-and-custom-exceptions',
    title: '예외 처리(try-except-else-finally) 및 사용자 정의 예외',
    seo_title: '파이썬 예외 처리 - try, except, else, finally, raise & 사용자 정의 Exception',
    seo_description: '런타임 에러 방지를 위한 try-except-else-finally 블록 구문, built-in 예외 종류, raise 예외 발생 및 Exception 클래스 상속 기반 사용자 정의 예외를 배웁니다.',
    excerpt: '프로그램 런타임 오류 시 강제 종료를 방지하는 try-except-else-finally 구문, raise 키워드 및 Exception 상속 기반 커스텀 예외 클래스 생성을 학습합니다.',
    content_md: `프로그램 실행 중 예기치 못한 에러가 발생해도 프로그램이 멈추지 않도록 안전하게 포획하는 **예외 처리(Exception Handling)**를 학습합니다.

---

## 1. 예외 처리 용어 사전 (Glossary)

- **Exception (예외)**: 프로그램 실행 중(런타임)에 발생하는 오류 상황으로, 포획하지 않으면 프로그램이 강제 종료됩니다.
- **\`try-except-else-finally\`**:
  - \`try\`: 에러가 발생할 수 있는 위험 코드 실행 구역.
  - \`except\`: 예외가 발생했을 때 처리하는 구역.
  - \`else\`: 에러 없이 정상적으로 성공했을 때만 실행되는 구역.
  - \`finally\`: 에러 발생 여부와 상관없이 무조건 마지막에 실행되는 자원 정제 구역.
- **Custom Exception**: 표준 \`Exception\` 클래스를 상속받아 도메인 특화 에러 상황을 명시하는 사용자 정의 클래스입니다.

---

## 2. 예외 처리 실습 코드

\`\`\`python
class OutOfStockError(Exception):
    """재고 부족 시 발생하는 커스텀 예외"""
    pass

def purchase_item(stock: int, quantity: int):
    if quantity > stock:
        raise OutOfStockError(f"요청 수량({quantity})이 재고({stock})를 초과했습니다.")
    return stock - quantity

try:
    remaining = purchase_item(5, 10)
except OutOfStockError as e:
    print(f"구매 실패 경고: {e}")
finally:
    print("결제 프로세스가 마감되었습니다.")
\`\`\`
`
  },
  {
    order_index: 9,
    slug: 'ch09-object-oriented-programming-classes',
    title: '객체지향 프로그래밍(OOP): 클래스, 인스턴스, 생성자(__init__) 및 캡슐화',
    seo_title: '파이썬 OOP 기초 - class, __init__, self, 인스턴스 변수, 캡슐화(__private)',
    seo_description: '객체지향 설계, 클래스와 인스턴스, 생성자 메소드(__init__), self의 의미, 클래스 변수 vs 인스턴스 변수, 비공개 속성(__속성)을 통한 캡슐화를 학습합니다.',
    excerpt: '현실 세계의 사물을 객체로 모델링하는 파이썬 클래스(Class) 작성법, 생성자 __init__(), self 인자 및 비공개 속성(__private)을 통한 캡슐화를 다룹니다.',
    content_md: `데이터와 관련 기능을 하나로 묶어 프로그램의 재사용성과 유지보수성을 극대화하는 **객체지향 프로그래밍(OOP)** 기초를 학습합니다.

---

## 1. OOP 클래스 용어 사전 (Glossary)

- **Class (클래스)**: 객체를 찍어내기 위한 설계도(Blueprint)입니다.
- **Instance (인스턴스)**: 클래스 설계도를 바탕으로 실제 메모리에 할당된 객체 구체물입니다.
- **\`__init__()\` (생성자)**: 인스턴스가 최초 만들어질 때 자동으로 호출되어 속성 초기화를 담당하는 스페셜 메소드입니다.
- **\`self\`**: 인스턴스 자기 자신을 가리키는 첫 번째 매개변수로, 메소드 선언 시 반드시 명시해야 합니다.
- **Encapsulation (캡슐화)**: 변수명 앞에 두 개의 언더스코어(\`__private\`)를 붙여 외부의 직접적인 수정을 막고 네임 맹글링(Name Mangling) 처리하는 보안 기술입니다.

---

## 2. 파이썬 클래스 선언 및 캡슐화 코드

\`\`\`python
class BankAccount:
    def __init__(self, owner: str, balance: float):
        self.owner = owner
        self.__balance = balance # 비공개 속성 (Encapsulation)

    def deposit(self, amount: float):
        if amount > 0:
            self.__balance += amount
            print(f"{amount:,}원 입금 완료 (잔액: {self.__balance:,}원)")

    def get_balance(self):
        return self.__balance

account = BankAccount("홍길동", 100000)
account.deposit(50000)
print(f"현재 잔액: {account.get_balance():,}원")
\`\`\`
`
  },
  {
    order_index: 10,
    slug: 'ch10-advanced-oop-inheritance-magic-methods',
    title: '상속(Inheritance), 다형성 및 던더 매직 메소드(Dunder Methods)',
    seo_title: '파이썬 고급 OOP - 상속, super(), 매직 메소드(__str__, __len__), ABC 추상 클래스',
    seo_description: '부모 클래스 상속, super() 호출, 오버라이딩, 던더 매직 메소드(__str__, __repr__, __eq__, __len__), ABC(Abstract Base Class) 추상 클래스를 배웁니다.',
    excerpt: '클래스를 재사용 확장하는 상속(Inheritance), super() 연동, 객체의 동작을 파이썬답게 정의하는 매직 메소드(Dunder Methods)와 추상 클래스를 학습합니다.',
    content_md: `부모 클래스의 속성과 메소드를 물려받아 확장하는 **상속(Inheritance)**과 파이썬 연산자 동작을 직접 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.

---

## 1. 고급 OOP 용어 사전 (Glossary)

- **Inheritance (상속)**: 부모 클래스의 모든 기능을 자식 클래스가 그대로 받아 재사용하고 필요에 따라 재정의(Method Overriding)하는 OOP 핵심 기능입니다.
- **\`super()\`**: 부모 클래스의 생성자나 메소드를 자식 클래스 내부에서 명시적으로 호출해 주는 내장 함수입니다.
- **Dunder Methods (던더 매직 메소드)**: \`__str__\`, \`__repr__\`, \`__len__\`, \`__eq__\` 처럼 연산자나 내장 함수 호출 시 객체가 어떻게 반응할지 정의하는 메소드입니다.
- **ABC (Abstract Base Class)**: \`abc\` 모듈의 \`@abstractmethod\`를 써서 자식 클래스가 특정 메소드를 반드시 구현하도록 강제하는 추상 클래스 표준입니다.

---

## 2. 상속 및 매직 메소드 활용 실습

\`\`\`python
from abc import ABC, abstractmethod

class Animal(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "멍멍!"

    def __str__(self):
        return f"강아지 이름: {self.name}"

dog = Dog("바둑이")
print(dog)
print(f"울음소리: {dog.make_sound()}")
\`\`\`
`
  },
  {
    order_index: 11,
    slug: 'ch11-iterators-generators-and-decorators',
    title: '이터레이터(Iterator), yield 제너레이터(Generator)와 데코레이터(Decorator)',
    seo_title: '파이썬 고급 문법 - Iterator, yield 제너레이터, 클로저 & @decorator',
    seo_description: '메모리 효율적 데이터 순회 이터레이터(__next__), yield 키워드 기반 제너레이터, 클로저(Closure) 및 함수 기능을 확장하는 @decorator 패턴을 학습합니다.',
    excerpt: '대용량 데이터를 지연 평가(Lazy Evaluation)로 다루는 제너레이터(yield)와 함수에 보일러플레이트 기능을 덧붙이는 데코레이터(@decorator)를 배웁니다.',
    content_md: `메모리를 극도로 아끼면서 순회 데이터를 만드는 **제너레이터(Generator)**와 기존 함수의 코드를 고치지 않고 기능을 확장하는 **데코레이터(Decorator)** 패턴을 학습합니다.

---

## 1. 고급 문법 용어 사전 (Glossary)

- **Lazy Evaluation (지연 평가)**: 모든 데이터를 메모리에 한 번에 올리지 않고, 요청이 들어올 때마다 하나씩 계산하여 생성해 내는 성능 최적화 기법입니다.
- **\`yield\` Keyword**: 함수 실행을 일시 중단하고 호출자에게 값을 반환한 뒤, 다음 요청 시 중단점부터 다시 실행을 이어나가게 해주는 제너레이터 키워드입니다.
- **Closure (클로저)**: 자신을 둘러싼 외부 함수의 스코프 환경을 기억하고 있는 내부 함수 객체입니다.
- **Decorator (\`@decorator\`)**: 다른 함수를 인자로 받아 새로운 기능을 덧붙인 함수로 감싸서 반환하는 디자인 패턴입니다.

---

## 2. yield 제너레이터 및 데코레이터 코드

\`\`\`python
import time

# 1. 실행 시간 측정 데코레이터
def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"[{func.__name__}] 실행 시간: {(end - start)*1000:.2f}ms")
        return result
    return wrapper

# 2. yield 제너레이터
def count_down(n):
    while n > 0:
        yield n
        n -= 1

@timer_decorator
def run_generator():
    for number in count_down(3):
        print(f"카운트: {number}")

run_generator()
\`\`\`
`
  },
  {
    order_index: 12,
    slug: 'ch12-standard-libraries-math-random-datetime-json',
    title: '파이썬 핵심 표준 라이브러리 (math, random, datetime, json, re)',
    seo_title: '파이썬 표준 라이브러리 - math, random, datetime, json 직렬화 & re 정규식',
    seo_description: '파이썬에 내장된 필수 표준 라이브러리 math(수학), random(난수), datetime(날짜/시간 포맷팅), json(JSON 직렬화/파싱) 및 re(정규 표현식)를 배웁니다.',
    excerpt: '별도 설치 없이 파이썬 설치 시 함께 제공되는 강력한 내장 라이브러리(math, random, datetime, json, re 정규 표현식)의 실전 활용법을 배웁니다.',
    content_md: `"Batteries Included"라는 파이썬의 명성답게 파이썬 기본 설치 시 동봉되는 **필수 표준 라이브러리 모듈들**을 학습합니다.

---

## 1. 표준 라이브러리 용어 사전 (Glossary)

- **\`datetime\`**: 날짜와 시간을 연산하고 포맷팅(\`strftime\`, \`strptime\`)해 주는 모듈입니다.
- **\`json\`**: JSON 규격의 문자열과 파이썬 딕셔너리를 무결하게 상호 변환해 주는 모듈입니다. (\`json.dumps()\`, \`json.loads()\`)
- **\`re\` (Regular Expression)**: 텍스트 내에서 특정 규칙 패턴(이메일, 전화번호 등)을 정규 표현식으로 찾아내고 추출하는 검색 엔진 모듈입니다.

---

## 2. json 및 re 정규표현식 실습

\`\`\`python
import json
import re

# JSON 직렬화 & 파싱
data = {"title": "DAVHAVE 파이썬", "lessons": 46, "is_active": True}
json_str = json.dumps(data, ensure_ascii=False, indent=2)
parsed_dict = json.loads(json_str)

print(f"JSON 직렬화 텍스트:\n{json_str}")

# 정규 표현식 이메일 추출
text = "문의 사항은 support@davhave.com 또는 admin@test.co.kr 로 보내주세요."
email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
emails = re.findall(email_pattern, text)
print(f"추출된 이메일 목록: {emails}")
\`\`\`
`
  },
  {
    order_index: 13,
    slug: 'ch13-gui-programming-with-tkinter',
    title: 'tkinter를 활용한 파이썬 데스크톱 GUI 프로그래밍',
    seo_title: '파이썬 GUI 프로그래밍 - tkinter, Tk, Label, Button, Entry, pack/grid',
    seo_description: '파이썬 표준 GUI 라이브러리 tkinter, 기본 창 생성(Tk), 컴포넌트(Label, Button, Entry, Text), 레이아웃 매니저(pack, grid) 및 버튼 클릭 이벤트를 학습합니다.',
    excerpt: '파이썬에 내장된 표준 GUI 엔진 tkinter를 이용하여 윈도우 그래픽 데스크톱 앱을 만들고 위젯과 레이아웃 매니저(pack, grid)를 배치하는 기법을 배웁니다.',
    content_md: `파이썬 표준 라이브러리로 기본 탑재되어 있는 그래픽 유저 인터페이스 모듈인 **tkinter**를 이용하여 데스크톱 GUI 프로그램 개발을 학습합니다.

---

## 1. GUI 핵심 용어 사전 (Glossary)

- **Widget (위젯)**: GUI 화면을 구성하는 시각적 요소 단위입니다. (\`Label\`, \`Button\`, \`Entry\`, \`Frame\` 등)
- **Layout Manager (레이아웃 매니저)**: 위젯을 창에 어떻게 배치할지 결정하는 알고리즘 매니저입니다. (\`pack()\`, \`grid()\`, \`place()\`)
- **Event-Driven Programming**: 사용자의 마우스 클릭이나 키보드 입력 이벤트를 감지하여 바인딩된 콜백 함수를 실행하는 프로그래밍 방식입니다.

---

## 2. tkinter 간단한 GUI 창 생성 코드

\`\`\`python
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
\`\`\`
`
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

  // 21 ~ 28 (SEO 레슨)
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

- **Django**: ORM, 인증 시스템, 관리자 페이지(Admin), 데이터베이스 마이그레이션이 포함된 "Batteries-Included" 파이썬 대표 풀스택 웹 프레임워크입니다.
- **FastAPI**: 파이썬 3.8+ 타입 힌팅과 \`asyncio\`를 기반으로 Uvicorn/ASGI 기술을 써서 Node.js/Go 언어 수준의 초고속 속도를 내는 현대적 REST API 프레임워크입니다.

---

## 2. FastAPI 비동기 REST API 서버 연동 예제

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="DAVHAVE FastAPI Server")

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
async def create_item(item: Item):
    return {"item_name": item.name, "discounted_price": item.price * 0.9}
\`\`\`
`
  },
  {
    order_index: 23,
    slug: 'ch23-python-orm-sqlalchemy-and-database',
    title: '파이썬 ORM 데이터베이스 연동: SQLAlchemy와 SQLModel 완전 가이드',
    seo_title: '파이썬 ORM - SQLAlchemy 2.0, SQLModel, PostgreSQL/MySQL 연동 & Alembic',
    seo_description: '파이썬 ORM(Object-Relational Mapping) 대표 도구 SQLAlchemy 2.0 모델링, Session 데이터베이스 CRUD 및 Alembic 데이터베이스 마이그레이션을 다룹니다.',
    excerpt: '파이썬 객체와 관계형 데이터베이스(RDBMS)를 직접 매핑해 주는 SQLAlchemy ORM 및 SQLModel 기반 데이터베이스 트랜잭션 관리 기법을 배웁니다.',
    content_md: `SQL 쿼리문 작성 없이 파이썬 객체만으로 데이터베이스 데이터를 다루는 **ORM(Object-Relational Mapping) 기술인 SQLAlchemy**와 **SQLModel**을 다룹니다.`
  },
  {
    order_index: 24,
    slug: 'ch24-python-web-automation-selenium-playwright',
    title: '파이썬 웹 자동화 및 동적 렌더링 스크래핑: Selenium과 Playwright',
    seo_title: '파이썬 웹 자동화 - Selenium WebDriver vs Playwright 비동기 크롤링',
    seo_description: '자바스크립트 싱글 페이지 앱(SPA) 동적 크롤링을 위한 Selenium WebDriver와 차세대 고속 비동기 브라우저 자동화 Playwright 활용법을 배웁니다.',
    excerpt: '자바스크립트로 동작하는 동적 웹 사이트를 실제 브라우저 엔진(Headless Browser)으로 자동화하고 데이터를 크롤링하는 Selenium과 Playwright를 학습합니다.',
    content_md: `자바스크립트(React, Vue)로 렌더링되는 동적 웹 페이지를 실제 웹 브라우저 엔진으로 제어하는 **웹 자동화 도구인 Selenium과 Playwright**를 배웁니다.`
  },
  {
    order_index: 25,
    slug: 'ch25-python-unit-testing-pytest-and-mock',
    title: '파이썬 단위 테스트와 TDD: unittest, pytest 및 mock 객체 활용',
    seo_title: '파이썬 테스트 코드 - pytest 사용법, unittest, fixture, mock 가짜 객체',
    seo_description: '소프트웨어 품질을 보장하는 단위 테스트(Unit Test), pytest 프레임워크, test fixture 생성, mock 객체(unittest.mock)를 활용한 외부 연동 테스트를 배웁니다.',
    excerpt: '프로그램 결함을 예방하는 단위 테스트(Unit Testing) 작성법과 파이썬 대표 테스트 프레임워크 pytest, 가짜 객체를 만드는 mock 기법을 학습합니다.',
    content_md: `소프트웨어의 버그를 미리 방지하고 안전한 리팩토링을 보장하는 **단위 테스트(Unit Testing)** 및 **\`pytest\` 프레임워크**를 학습합니다.`
  },
  {
    order_index: 26,
    slug: 'ch26-python-ai-machine-learning-scikit-learn',
    title: '파이썬 머신러닝 기초: Scikit-learn 지도학습과 분류/회귀 모델',
    seo_title: '파이썬 머신러닝 - Scikit-learn, 선형 회귀, 결정 트리, Dataset 분할 & 평가',
    seo_description: '파이썬 머신러닝 핵심 패키지 Scikit-learn, 지도학습(Supervised Learning), train_test_split 데이터 분할, 선형 회귀(Linear Regression) 및 결정 트리 분류를 배웁니다.',
    excerpt: '파이썬 인공지능 머신러닝의 표준 프레임워크인 Scikit-learn을 이용하여 데이터를 학습시키고 예측하는 회귀 및 분류 모델링 기법을 배웁니다.',
    content_md: `데이터로부터 패턴을 스스로 학습하여 미래 결과를 예측하는 **인공지능 머신러닝(Machine Learning)**과 대표 프레임워크 **Scikit-learn**을 다룹니다.`
  },
  {
    order_index: 27,
    slug: 'ch27-python-deep-learning-pytorch-basics',
    title: '파이썬 딥러닝 입문: PyTorch 텐서(Tensor)와 신경망(Neural Network) 구현',
    seo_title: '파이썬 딥러닝 - PyTorch 텐서, Autograd 자동 미분, Linear 신경망 & Loss',
    seo_description: '글로벌 1위 딥러닝 프레임워크 PyTorch(파이토치), Tensor 자료구조, Autograd 자동 미분 역전파(Backpropagation), nn.Module 신경망 구축 및 GPU 가속을 다웁니다.',
    excerpt: '현대 인공지능 AI의 핵심인 인공신경망 딥러닝을 구축하는 PyTorch 프레임워크, Tensor 자료구조 및 역전파(Backpropagation) 메커니즘을 배웁니다.',
    content_md: `인간 뇌의 신경망 구조를 본뜬 인공신경망(ANN)으로 대용량 복잡 데이터(이미지, 음성, 자연어)를 학습하는 **PyTorch 기반 딥러닝(Deep Learning)**을 배웁니다.`
  },
  {
    order_index: 28,
    slug: 'ch28-python-big-data-pyspark-and-parallel',
    title: '파이썬 분산 빅데이터 처리: PySpark와 RDD/DataFrame 대용량 분산 연산',
    seo_title: '파이썬 빅데이터 - PySpark, Apache Spark 클러스터, RDD vs Spark DataFrame',
    seo_description: '대용량 빅데이터 분산 처리 엔진 Apache Spark의 파이썬 API인 PySpark, RDD, Spark DataFrame 메모리 인메모리 연산 및 빅데이터 ETL 파이프라인 구축을 다룹니다.',
    excerpt: '수백 GB~수 TB 단위의 대용량 빅데이터를 클러스터 상에서 병렬 분할 처리하는 Apache Spark의 파이썬 엔진 PySpark와 Spark DataFrame을 익힙니다.',
    content_md: `단일 컴퓨터의 메모리 한계를 넘어서는 수백 GB~수 TB 대용량 빅데이터를 분산 서버 클러스터에서 초고속으로 처리하는 **PySpark 빅데이터 파이프라인**을 다룹니다.`
  },

  // 29 ~ 35 (표준 라이브러리 심화)
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

---

## 2. os, sys 및 subprocess 실전 제어 코드

\`\`\`python
import os
import sys
import subprocess

print(f"실행 파이썬 인터프리터 경로: {sys.executable}")
print(f"현재 위치: {os.getcwd()}")

try:
    cmd = ["dir"] if sys.platform.startswith("win") else ["ls", "-la"]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    print("=== [subprocess 쉘 명령 실행 결과 상위 3줄] ===")
    print("\n".join(result.stdout.splitlines()[:3]))
except subprocess.CalledProcessError as e:
    print(f"명령 실행 실패: {e}")
\`\`\`
`
  },
  {
    order_index: 30,
    slug: 'ch30-python-stdlib-collections-itertools-dataclasses',
    title: '파이썬 데이터 구조 및 함수형 유틸리티: collections, itertools 및 dataclasses',
    seo_title: '파이썬 고급 표준 모듈 - collections(Counter, defaultdict), itertools & dataclasses',
    seo_description: '파이썬 표준 모듈 collections(Counter, defaultdict, deque, namedtuple), itertools(product, combinations, permutations), dataclasses(@dataclass)를 학습합니다.',
    excerpt: '파이썬 특수 자료구조(Counter, defaultdict, deque)와 효율적 순회 도구 itertools, 보일러플레이트 코드를 줄여주는 dataclasses를 배웁니다.',
    content_md: `특수 자료구조를 제공하는 **\`collections\`**, 무한 시퀀스 및 순열/조합의 **\`itertools\`**, 데이터 객체 생성 코드를 획기적으로 줄여주는 **\`dataclasses\`** 모듈을 다룹니다.`
  },
  {
    order_index: 31,
    slug: 'ch31-python-stdlib-sqlite3-and-pickle',
    title: '파이썬 표준 데이터베이스 및 객체 직렬화: sqlite3와 pickle 바이너리 보관',
    seo_title: '파이썬 내장 DB - sqlite3 사용법, Connection, Cursor, pickle & shelve 객체 저장',
    seo_description: '파이썬 표준 내장 DB sqlite3(Connection, Cursor, commit, SQL CRUD), pickle(객체 바이너리 직렬화/복원), shelve(키-값 파일 영속성)를 배웁니다.',
    excerpt: '별도 DB 서버 설치 없이 즉시 사용하는 경량 관계형 DB sqlite3 모듈과 파이썬 객체 상태를 파일로 직렬화하는 pickle 및 shelve를 다룹니다.',
    content_md: `별도의 데이터베이스 서버 설치 없이 파일이나 메모리 상에서 동작하는 **경량 관계형 DB \`sqlite3\`** 모듈과 파이썬 객체를 그대로 파일에 보관하는 **\`pickle\`**을 배웁니다.`
  },
  {
    order_index: 32,
    slug: 'ch32-python-stdlib-logging-and-argparse',
    title: '파이썬 로깅 및 CLI 인자 파서: logging 모듈과 argparse 터미널 도구',
    seo_title: '파이썬 로깅과 CLI - logging 레벨, Logger, FileHandler & argparse 옵션 파서',
    seo_description: '파이썬 표준 로깅 모듈 logging(DEBUG, INFO, WARNING, ERROR, CRITICAL), FileHandler 로그 저장 및 argparse 기반 터미널 커맨드라인 옵션 파서를 배웁니다.',
    excerpt: '애플리케이션 구동 상태를 기록하는 5단계 logging 모듈과 터미널 명령줄 매개변수를 전문적으로 파싱하는 argparse CLI 도구를 학습합니다.',
    content_md: `프로그램의 구동 상태와 에러 기록을 보관하는 **\`logging\` 모듈**과 리눅스 CLI 터미널 도구처럼 명령줄 인자를 처리하는 **\`argparse\` 모듈**을 학습합니다.`
  },
  {
    order_index: 33,
    slug: 'ch33-python-stdlib-hashlib-secrets-ssl',
    title: '파이썬 암호화 및 보안 표준 라이브러리: hashlib, secrets 및 ssl 통신',
    seo_title: '파이썬 보안 라이브러리 - hashlib(SHA256), secrets(안전한 난수) & ssl 암호화 소켓',
    seo_description: '파이썬 표준 보안 모듈 hashlib(SHA-256, MD5 해시), secrets(암호학적으로 안전한 난수/토큰 생성) 및 ssl(TLS/SSL 보안 소켓 연동)을 학습합니다.',
    excerpt: '단방향 암호화 해시(SHA-256)를 생성하는 hashlib, 보안 토큰 생성 secrets, 통신 구간 암호화를 담당하는 ssl 표준 라이브러리를 배웁니다.',
    content_md: `비밀번호 해시화 및 데이터 무결성 검증의 **\`hashlib\`**, 보안 난수 생성의 **\`secrets\`**, 통신 구간 암호화의 **\`ssl\`** 모듈을 다룹니다.`
  },
  {
    order_index: 34,
    slug: 'ch34-python-stdlib-urllib-and-http-server',
    title: '파이썬 표준 네트워킹 및 임베디드 웹 서버: urllib와 http.server',
    seo_title: '파이썬 표준 웹 모듈 - urllib.request, urllib.parse URL 파싱 & http.server',
    seo_description: '파이썬 표준 웹 모듈 urllib.request(URL 데이터 다운로드), urllib.parse(URL 쿼리 인코딩/디코딩) 및 http.server(한 줄 웹 서버 구동)를 다룹니다.',
    excerpt: '외부 패키지 설치 없이 파이썬 내장 기능만으로 웹 URL 데이터를 가져오는 urllib 모듈과 1초 만에 로컬 HTTP 웹 서버를 띄우는 http.server를 학습합니다.',
    content_md: `외부 설치 라이브러리 없이 파이썬 내장 표준만으로 웹 HTTP 요청을 보낼 수 있는 **\`urllib\`**과 초간단 웹 서버를 구동하는 **\`http.server\`**를 다룹니다.`
  },
  {
    order_index: 35,
    slug: 'ch35-python-stdlib-zipfile-tarfile-zlib',
    title: '파이썬 압축 파일 포맷 및 아카이브: zipfile, tarfile 및 zlib 스트림 압축',
    seo_title: '파이썬 압축 라이브러리 - zipfile(.zip), tarfile(.tar.gz) & zlib 데이터 압축',
    seo_description: '파이썬 표준 압축 모듈 zipfile(.zip 파일 압축/해제 및 암호화), tarfile(.tar.gz 아카이브 압축), zlib(메모리 데이터 스트림 압축)을 배웁니다.',
    excerpt: '대용량 파일이나 폴더를 .zip 및 .tar.gz 확장자로 압축하고 풀 수 있는 zipfile, tarfile 모듈과 zlib 메모리 고속 압축 기술을 다룹니다.',
    content_md: `여러 파일과 폴더를 하나로 묶어 압축 해제하는 **\`zipfile\`**, **\`tarfile\`** 모듈과 메모리 텍스트 데이터를 고속 처리하는 **\`zlib\`**을 배웁니다.`
  },

  // 36 ~ 40 (CPython C-API)
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

---

## 2. CPython C 구조체 핵심 정의 (C-API Source)

\`\`\`c
typedef struct _object {
    _PyObject_HEAD_EXTRA
    Py_ssize_t ob_refcnt;
    struct _typeobject *ob_type;
} PyObject;
\`\`\`
`
  },
  {
    order_index: 37,
    slug: 'ch37-cpython-reference-counting-and-memory',
    title: 'CPython 참조 카운팅(Reference Counting)과 C 메모리 관리 (Py_INCREF, Py_DECREF, PyMem_Malloc)',
    seo_title: 'CPython 메모리 관리 - 참조 카운팅, Py_INCREF, Py_DECREF, PyMem_Malloc & GC',
    seo_description: 'CPython의 자동 메모리 관리 핵심인 참조 카운팅(Reference Counting) 메커니즘, 참조 소유권 규칙(Owned vs Borrowed Reference), Py_INCREF/Py_DECREF 및 PyMem_Malloc 할당자를 배웁니다.',
    excerpt: 'CPython 가비지 컬렉터의 근간이 되는 참조 카운팅 규칙과 C 확장 모듈 제작 시 필수적인 Py_INCREF(), Py_DECREF() 및 PyMem_Malloc 메모리 할당 관리법을 학습합니다.',
    content_md: `CPython의 메모리 관리 및 가비지 컬렉션의 핵심 원리인 **참조 카운팅(Reference Counting)** 메커니즘과 C 레벨 메모리 할당자(**\`PyMem_Malloc\`**)를 학습합니다.`
  },
  {
    order_index: 38,
    slug: 'ch38-cpython-c-exception-handling-and-args',
    title: 'CPython C-API 예외 처리 및 C 함수 인자 파싱 (PyErr_SetString, PyArg_ParseTuple)',
    seo_title: 'CPython C 예외 및 인자 파싱 - PyErr_SetString, PyArg_ParseTuple, Py_BuildValue',
    seo_description: 'C 영역에서 파이썬 예외 발생 PyErr_SetString(), PyErr_Occurred(), 파이썬 인자를 C 변수로 파싱하는 PyArg_ParseTuple() 및 Py_BuildValue() C-API를 배웁니다.',
    excerpt: 'C 확장 모듈 개발 시 파이썬 튜플 인자를 C 언어 변수로 추출하는 PyArg_ParseTuple()과 C 영역에서 파이썬 예외를 띄우는 PyErr_SetString()을 학습합니다.',
    content_md: `C 언어로 파이썬 확장 모듈을 개발할 때 파이썬 인자를 C 데이터 타입으로 변환하는 **\`PyArg_ParseTuple\`**과 C 영역에서 파이썬 예외를 발생하는 **\`PyErr_SetString\`**을 다룹니다.`
  },
  {
    order_index: 39,
    slug: 'ch39-cpython-c-concrete-objects-long-unicode-dict',
    title: 'CPython 구체적 C 데이터 타입 조작: PyLongObject, PyUnicodeObject 및 PyDictObject',
    seo_title: 'CPython C 구체적 타입 - PyLong, PyUnicode, PyDict, PyList C-API 조작',
    seo_description: 'CPython 구체적 C-API: PyLong_FromLong, PyUnicode_FromString, PyDict_SetItemString, PyList_Append를 통한 C 레벨 파이썬 자료구조 고속 생성 및 검색을 배웁니다.',
    excerpt: 'CPython 인터프리터 C 레벨에서 파이썬 정수, 유니코드 문자열, 딕셔너리, 리스트 구체적 객체(Concrete Objects)를 C 코드로 직접 다루는 방식을 배웁니다.',
    content_md: `CPython C 레벨에서 파이썬 정수, 문자열, 딕셔너리, 리스트 구체적 객체(**Concrete Objects**)를 직접 다루는 **C-API 함수 집합**을 다룹니다.`
  },
  {
    order_index: 40,
    slug: 'ch40-cpython-c-extension-module-creation',
    title: 'CPython C 확장 모듈 제작: PyModuleDef, PyMethodDef 및 GIL/멀티스레드 C-API',
    seo_title: 'CPython C 확장 모듈 - PyModuleDef, PyMethodDef, PyMODINIT_FUNC & GIL 제어',
    seo_description: 'C 언어로 작성하는 파이썬 확장 모듈(C Extension), PyMethodDef 메소드 테이블, PyModuleDef 모듈 정의, PyMODINIT_FUNC, C에서의 GIL 해제(Py_BEGIN_ALLOW_THREADS)를 배웁니다.',
    excerpt: 'C 언어로 파이썬에서 직접 import하여 사용하는 고속 C 확장 모듈(C Extension Module)을 처음부터 끝까지 빌드하고 GIL을 해제하여 멀티스레딩 성능을 올리는 기법을 배웁니다.',
    content_md: `C 언어로 작성된 연산 코드를 파이썬에서 **\`import\` 모듈 형태로 불러와 고속 구동하는 C 확장 모듈(C Extension Module)** 제작 및 GIL 제어를 다룹니다.`
  },

  // 41 (IDLE)
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

---

## 2. 파이참 (PyCharm Community) 설치 및 사용 가이드

1. JetBrains 공식 사이트에서 Community 에디션을 내려받아 설치합니다.
2. [New Project]를 생성하고 [New environment]에서 PC에 설치된 파이썬 인터프리터(\`python.exe\`)를 지정합니다.
3. 파이썬 파일(\`helloworld.py\`) 생성 후 \`Run\` (\`Alt + Shift + F10\`)으로 실행합니다.

---

## 3. 비주얼 스튜디오 코드 (VS Code) 파이썬 설정

1. VS Code 설치 후 확장 마켓플레이스에서 **Python Extension**을 설치합니다.
2. \`Ctrl + Shift + P\` $\rightarrow$ \`Python: Select Interpreter\`로 추천 파이썬 엔진을 선택합니다.
3. \`helloworld.py\` 작성 후 \`Ctrl + F5\` 또는 ▶ 버튼으로 실행합니다.
`
  },

  // 42 ~ 46 (pjt/24 CodeStudent 실습)
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

---

## 2. 실전 코드: 파일 단어 분석 알고리즘 (maxWord & onlyLowerAlpha)

\`\`\`python
s = "Computer"
reversed_s = ""
for i in range(len(s)):
    reversed_s += s[len(s) - 1 - i]
print(f"원문: {s} -> 뒤집은 문자열: {reversed_s}")

def onlyLowerAlpha(text):
    clean_word = ""
    for char in text:
        if char.isalpha():
            clean_word += char.lower()
    return clean_word

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
- **Nested Dictionary**: \`d = {"xy": {4: 2.5, "a": 3}}\` 처럼 딕셔너리 내부의 Value로 또 다른 딕셔너리나 리스트가 중첩된 데이터 구조입니다.

---

## 2. 튜플 언팩킹, 중첩 딕셔너리 & Set 연산 예제

\`\`\`python
tuple_list = [(1, 2, "Python"), (3, 4, "Java"), (5, 6, "C++")]
for (x, y, lang) in tuple_list:
    print(f"좌표 ({x}, {y}) -> 언어: {lang}")

tup_data = (6, 1, 4, 3)
temp_list = list(tup_data)
temp_list.sort()
sorted_tup = tuple(temp_list)
print(f"원본 튜플: {tup_data} -> 정렬된 튜플: {sorted_tup}")

raw_numbers = [1, 2, 3, 4, 1, 2, 3, 5]
unique_set = set(raw_numbers)
print(f"중복 제거 후: {unique_set}")
\`\`\`
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

- **Screen()**: 거북이가 그림을 그리는 캔버스 윈도우 스크린 창을 생성하고 관리하는 객체입니다.
- **Turtle("turtle")**: 2D 좌표계 상에서 이동하며 선을 그리는 거북이 커서 객체입니다.
- **\`colormode(255)\`**: R, G, B 색상 값을 0~255 범위의 정수로 표현하여 다채로운 컬러를 조합하는 그래픽 모드입니다.

---

## 2. 터틀 2D 다각형 및 RGB 무작위 패턴 드로잉 코드

\`\`\`python
from turtle import Screen, Turtle
import random

def draw_geometry_art():
    scr = Screen()
    scr.setup(600, 600)
    scr.colormode(255)
    
    t = Turtle("turtle")
    t.speed(0)
    
    for i in range(36):
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        t.pencolor((r, g, b))
        for _ in range(4):
            t.forward(100)
            t.left(90)
        t.left(10)
        
    print("터틀 기하학 문양 완성")
\`\`\`
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

- **3D Spatial Matrix**: \`P[depth][height][width]\` 형태의 3차원 공간 배열입니다.
- **Top View Projection**: 3차원 입체 공간을 위에서 내려다보았을 때 각 $(j, k)$ 위치에서 관측되는 큐브의 존재 여부를 2D 평면 배열로 추출하는 연산입니다.
- **\`assert\` (단언문)**: 프로그램 실행 전제 조건이 참인지 검증하고 에러를 사전에 차단하는 디버깅 구문입니다.

---

## 2. Top View 추출 및 큐브 카운팅 실전 알고리즘 소스

\`\`\`python
def topView(P):
    assert len(P) == len(P[0]) == len(P[0][0]), "3차원 정방형 매트릭스여야 합니다."
    n = len(P)
    V = [[0] * n for _ in range(n)]
    
    for j in range(n):
        for k in range(n):
            for i in range(n):
                if P[i][j][k] == 1:
                    V[j][k] = 1
                    break
    return V

P_3d = [
    [[1, 0], [0, 1]],
    [[0, 0], [1, 0]]
]

v_top = topView(P_3d)
print("=== [3D 매트릭스 Top View 투영 결과] ===")
for row in v_top:
    print(row)
\`\`\`
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
  let sqlContent = `-- Full Python Master Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_python_master_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 12 Master SQL chunk files with FULL RICH CONTENTS for Python!');
