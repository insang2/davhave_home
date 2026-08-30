import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  {
    order_index: 1,
    slug: 'ch01-python-introduction-and-interpreter',
    title: '파이썬(Python) 소개와 CPython 인터프리터 및 IDLE/VS Code 환경 구축',
    seo_title: '파이썬 입문 가이드 - CPython 인터프리터, Zen of Python, IDLE & VS Code',
    seo_description: '파이썬의 탄생 배경, 철학(Zen of Python), 동적 타이핑, CPython 인터프리터 작동 원리, REPL 대화형 모드 및 VS Code 파이썬 개발 환경 구축을 학습합니다.',
    excerpt: '가독성과 간결성을 최우선으로 하는 파이썬 프로그래밍 언어의 특징, CPython 인터프리터 작동 원리 및 IDLE/VS Code 개발 환경을 배웁니다.',
    content_md: `**파이썬(Python)**은 1991년 귀도 반 로섬(Guido van Rossum)이 발표한 **고수준 인터프리터 언어**입니다. "인간의 생각 방식을 그대로 코드로 표현한다"는 간결한 문법과 강력한 표준 라이브러리로 데이터 과학, 웹 개발, 인공지능 분야의 전 세계 1위 언어로 자리매김했습니다.

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
    title: '변수, 기본 자료형(Numbers, Strings, Booleans) 및 산술/논리 연산자',
    seo_title: '파이썬 변수와 자료형 - int, float, str, bool, f-string 포맷팅 & 연산자',
    seo_description: '파이썬의 동적 타입 변수, 기본 자료형(숫자형, 문자열, 불리언), f-string 포맷팅, type() 및 id() 검사, 산술/비교/논리 연산자를 배웁니다.',
    excerpt: '파이썬의 동적 바인딩 변수 개념, 기본 수치 및 문자열 자료형, f-string 포맷팅과 산술, 비교, 논리 연산자 활용법을 학습합니다.',
    content_md: `프로그램에서 데이터를 기억하는 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**, 그리고 데이터를 가공하는 **연산자(Operator)**를 학습합니다.

---

## 1. 변수 & 자료형 용어 사전 (Glossary)

- **Variable (변수)**: 값이 저장된 객체를 가리키는 메모리 참조 이름(Reference Label)입니다.
- **f-string**: 파이썬 3.6+에 도입된 가장 빠르고 직관적인 문자열 포맷팅 문법입니다. (예: \`f"이름: {name}, 나이: {age}"\`)
- **Immutable Object**: 한 번 생성되면 내부 데이터 값을 변경할 수 없는 불변 객체입니다. (\`int\`, \`float\`, \`str\`, \`tuple\`, \`bool\`)
- **Mutable Object**: 생성 후에도 내부 데이터 수정 및 추가가 가능한 가변 객체입니다. (\`list\`, \`dict\`, \`set\`)

---

## 2. 파이썬 기본 자료형 정리표

| 자료형 분류 | 타입 키워드 | 가변성 (Mutability) | 예시 표현 |
| :--- | :--- | :---: | :--- |
| **정수형** | \`int\` | Immutable | \`100\`, \`-42\`, \`10_000_000\` |
| **실수형** | \`float\` | Immutable | \`3.14159\`, \`-0.001\` |
| **문자열** | \`str\` | Immutable | \`'Hello'\`, \`"파이썬"\`, \`"""다중줄"""\` |
| **불리언** | \`bool\` | Immutable | \`True\`, \`False\` |
| **None 타입** | \`NoneType\` | Immutable | \`None\` (값이 없음을 명시) |

---

## 3. f-string 및 연산자 활용 실습

\`\`\`python
# 1. 변수 선언 및 동적 타입 확인
item_name = "맥북 프로"
price = 2_500_000
discount_rate = 0.1

# 2. 산술 연산
final_price = int(price * (1 - discount_rate))

# 3. f-string 문자열 포맷팅
print(f"상품명: {item_name}")
print(f"원가: {price:,}원")
print(f"할인가: {final_price:,}원 (할인율: {discount_rate * 100:.0f}%)")

# 4. id() 메모리 주소 및 type() 검사
print(f"item_name 객체 타입: {type(item_name)}, 메모리 주소: {id(item_name)}")
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파이썬의 정수형(\`int\`)은 왜 메모리 오버플로우가 발생하지 않나요?**
A. 파이썬 3의 \`int\`는 임의 정밀도 정수(Arbitrary-precision integer) 시스템을 채택하고 있어, 시스템 메모리가 허용하는 한 몇 백 자리가 넘는 거대한 수치도 오버플로우 없이 정확하게 계산합니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-control-flow-conditionals-and-loops',
    title: '제어 구조: 조건문(if-elif-else)과 반복문(for, while, break/continue)',
    seo_title: '파이썬 제어문 - if-elif-else, for, while, range, enumerate, zip',
    seo_description: '조건문(if-elif-else), 삼항 연산자, 반복문(for, while), 내장 루프 함수(range, enumerate, zip), break 및 continue 흐름 제어를 학습합니다.',
    excerpt: '프로그램 실행 흐름을 제어하는 조건문과 반복문, range(), enumerate(), zip() 함수를 활용한 고급 루프 순회 기법을 배웁니다.',
    content_md: `프로그램의 논리적 실행 제어를 담당하는 **조건문(if)**과 반복 수행을 처리하는 **반복문(for, while)**의 사용법을 학습합니다.

---

## 1. 제어문 용어 사전 (Glossary)

- **Indentation (들여쓰기)**: 파이썬에서 코드 블록(Block) 구역을 구분하는 4칸 공백 스페이스 규칙입니다.
- **range()**: 숫자 시퀀스를 효율적으로 생성하는 이터러블 객체입니다. (\`range(start, stop, step)\`)
- **enumerate()**: 반복문 순회 시 요소의 인덱스 번호와 실제 값을 튜플 형태로 동시에 반환해 주는 내장 함수입니다.
- **zip()**: 여러 개의 컬렉션 요소를 같은 인덱스끼리 묶어서 병렬 순회할 수 있도록 짝지어 주는 내장 함수입니다.

---

## 2. \`enumerate()\`와 \`zip()\` 고급 루프 실습

\`\`\`python
# 1. 학생 목록과 성적 병렬 순회 (zip)
students = ["홍길동", "이순신", "강감찬"]
scores = [95, 88, 100]

print("=== [학생 성적 현황] ===")
for idx, (name, score) in enumerate(zip(students, scores), start=1):
    grade = "A" if score >= 90 else "B"
    print(f"{idx}번 학생 {name}: {score}점 ({grade} 학점)")

# 2. while 루프와 break/continue
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue # 3회차 건너뛰기
    print(f"카운터: {count}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬에는 왜 switch-case 문이 없나요?**
A. 파이썬 3.10 이전에는 \`if-elif-else\` 문으로 대체하였으나, 파이썬 3.10부터는 **\`match-case\` (구조적 패턴 매칭 Structural Pattern Matching)** 문법이 새로 도입되어 훨씬 매끄러운 패턴 매칭을 지원합니다.
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
- **List Comprehension**: 루프문과 조건문을 한 줄로 조합하여 간결하게 새 리스트를 생성하는 파이썬 고유 문법입니다. (\`[x**2 for x in range(10) if x % 2 == 0]\`)
- **Dictionary View**: \`dict.keys()\`, \`dict.values()\`, \`dict.items()\` 처럼 딕셔너리의 내부 상태를 실시간 반영하는 동적 뷰 객체입니다.

---

## 2. 파이썬 4대 자료구조 비교표

| 자료구조 | 기호 | 순서 보장 | 중복 허용 | 가변성 | 주요 용도 및 특징 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **List (리스트)** | \`[]\` | ⭕ | ⭕ | **Mutable** | 가장 보편적인 동적 배열 데이터 관리 |
| **Tuple (튜플)** | \`()\n\` | ⭕ | ⭕ | **Immutable** | 수정 불가능한 읽기 전용 정적 데이터 |
| **Set (집합)** | \`{}\` | ❌ | **❌ (불가)** | **Mutable** | 중복 요소 즉시 제거 및 집합 연산(합/교/차) |
| **Dictionary** | \`{k:v}\` | ⭕ (3.7+) | Key 불가 | **Mutable** | Key-Value 쌍 초고속 조회 ($O(1)$) |

---

## 3. List Comprehension 및 딕셔너리 실습

\`\`\`python
# 1. List Comprehension: 짝수의 제곱수 리스트 생성
evens_squared = [x**2 for x in range(1, 11) if x % 2 == 0]
print(f"짝수 제곱 리스트: {evens_squared}")

# 2. Dictionary 연산 및 get() 메소드
user_profile = {"name": "홍길동", "email": "hong@davhave.com", "role": "admin"}

# 안전한 Key 접근 (KeyError 방지)
phone = user_profile.get("phone", "미등록 번호")
print(f"전화번호: {phone}")

# Dictionary 컴프리헨션
char_count = {char: len(char) for char in ["apple", "banana", "cherry"]}
print(f"단어 길이 딕셔너리: {char_count}")
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 리스트 복사 시 \`b = a\` 와 \`b = a.copy()\` 의 차이는?**
A. \`b = a\`는 동일한 메모리 주소를 가리키는 얕은 참조(Reference Copy)이므로 b를 고치면 a도 수정됩니다. 독립적인 복사본을 만들려면 \`b = a.copy()\` 또는 \`copy.deepcopy()\`를 사용해야 합니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-functions-lambda-and-scope',
    title: '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 스코프(LEGB)',
    seo_title: '파이썬 함수와 람다 - def, *args, **kwargs, lambda, LEGB 스코프 룰',
    seo_description: 'def 함수 정의, 가변 인자(*args, **kwargs), 익명 람다(lambda) 함수, 일급 객체(First-class Citizen), LEGB 스코프 변수 참조 규칙을 해설합니다.',
    excerpt: '코드의 재사용성을 극대화하는 함수(Function) 정의, 가변 인자(*args, **kwargs), 익명 함수 람다(lambda) 및 변수 검색 범위인 LEGB 규칙을 학습합니다.',
    content_md: `특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 **함수(Function)** 선언과 파이썬 변수 검색 범위인 **LEGB 규칙**을 다룹니다.

---

## 1. 함수 핵심 용어 사전 (Glossary)

- **First-class Citizen (일급 객체)**: 파이썬의 함수는 변수에 할당할 수 있고, 다른 함수의 인자로 전달되거나 리턴값으로 반환될 수 있는 일급 객체입니다.
- **\*args / \*\*kwargs**: 정해지지 않은 개수의 가변 인자들을 각각 튜플(\`*args\`)과 딕셔너리(\`**kwargs\`) 형태로 받는 매개변수 표현법입니다.
- **Lambda Function**: 이름 없이 한 줄로 간결하게 정의하는 익명 함수입니다. (\`lambda x, y: x + y\`)
- **LEGB Rule**: 파이썬이 변수를 찾을 때 **L**ocal $\rightarrow$ **E**nclosing $\rightarrow$ **G**lobal $\rightarrow$ **B**uilt-in 순서로 검색하는 스코프 영역 규칙입니다.

---

## 2. 가변 인자 및 람다 함수 실습 예제

\`\`\`python
# 1. *args와 **kwargs 가변 인자 함수
def build_user_report(main_role, *hobbies, **details):
    print(f"주 역할: {main_role}")
    print(f"취미 목록: {hobbies}")
    print("상세 프로필 데이터:")
    for key, val in details.items():
        print(f" - {key}: {val}")

build_user_report("개발자", "독서", "코딩", "수영", age=28, city="서울")

# 2. Higher-Order Function과 lambda 활용
numbers = [5, 2, 8, 1, 9]
sorted_numbers = sorted(numbers, key=lambda x: -x) # 내림차순 정렬
print(f"람다 내림차순 정렬: {sorted_numbers}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 함수 내부에서 외부 전역 변수를 수정하려면?**
A. 함수 내부에서 전역 변수를 수정하려면 \`global 변수명\` 키워드를 선언해야 합니다. 중첩 함수에서 상위 함수의 변수를 수정하려면 \`nonlocal 변수명\`을 선언합니다.
`
  },
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

- **Module (모듈)**: 파이썬 함수, 클래스, 변수들이 작성된 하나의 \`.py\` 소스 파일입니다.
- **Package (패키지)**: 여러 모듈 파일들을 폴더 구역 단위로 그룹화한 디렉토리입니다.
- **\`__name__ == '__main__'\`**: 현재 파일이 직접 실행(Main Entry Point)된 것인지, 다른 파일에 \`import\` 되어 불러와진 것인지 식별하는 조건 구문입니다.
- **venv (Virtual Environment)**: 프로젝트마다 각기 다른 라이브러리와 파이썬 버전을 독립적으로 유지할 수 있도록 격리해 주는 가상환경 도구입니다.

---

## 2. 가상환경(venv) 생성 및 사용 가이드

\`\`\`bash
# 1. myenv 이름의 가상환경 생성
python -m venv myenv

# 2. 가상환경 활성화 (macOS / Linux)
source myenv/bin/activate

# 2-1. 가상환경 활성화 (Windows cmd)
myenv\Scripts\activate.bat

# 3. 외부 패키지 설치 및 의존성 리스트 내보내기
pip install requests pandas
pip freeze > requirements.txt
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`import\` 시 \`ModuleNotFoundError\`가 발생하는 원인은?**
A. 파이썬이 모듈을 검색하는 경로 리스트인 \`sys.path\` 상에 해당 모듈이 위치한 디렉토리가 포함되어 있지 않거나 패키지가 설치되지 않았을 때 발생합니다.
`
  },
  {
    order_index: 7,
    slug: 'ch07-file-io-and-context-managers',
    title: '파일 입출력(File I/O)과 컨텍스트 매니저(with 문)',
    seo_title: '파이썬 파일 입출력 - open(), read, write, with 문 & pathlib 모듈',
    seo_description: '파일 읽기/쓰기 모드(r, w, a), 컨텍스트 매니저(with 문)를 통한 리소스 자동 해제, readlines(), csv/json 파일 처리 및 pathlib 객체지향 경로 조작을 다룹니다.',
    excerpt: '텍스트 및 바이너리 파일을 읽고 쓰는 open() 함수, 리소스 자동 마감을 보장하는 with 컨텍스트 매니저 및 현대적인 pathlib 모듈을 배웁니다.',
    content_md: `디스크 상의 텍스트 및 바이너리 파일을 읽고 쓰는 **파일 입출력(File I/O)**과 리소스를 안전하게 관리하는 **with 컨텍스트 매니저**를 다룹니다.

---

## 1. 파일 입출력 용어 사전 (Glossary)

- **Context Manager**: \`with\` 구문과 함께 사용되어 작업 시작 시 \`__enter__()\`, 작업 종료 시 \`__exit__()\`를 자동 실행해 리소스를 마감해 주는 객체입니다.
- **File Modes**: \`'r'\`(읽기 전용), \`'w'\`(덮어쓰기 생성), \`'a'\`(끝에 덧붙이기), \`'b'\`(바이너리 모드).
- **pathlib**: 파이썬 3.4+에 도입된 파일 경로를 문자열이 아닌 객체(Object)로 다루는 객체지향 경로 조작 표준 모듈입니다.

---

## 2. 안전한 파일 입출력 및 pathlib 코드 예제

\`\`\`python
from pathlib import Path

# 1. pathlib을 이용한 파일 및 디렉토리 관리
base_dir = Path("./data_logs")
base_dir.mkdir(exist_ok=True) # 폴더 생성

log_file = base_dir / "system.log"

# 2. with 컨텍스트 매니저 파일 쓰기
with open(log_file, "w", encoding="utf-8") as f:
    f.write("2026-08-02 INFO: 시스템 가동 시작\n")
    f.write("2026-08-02 SUCCESS: 데이터베이스 연결 완료\n")

# 3. 파일 한 줄씩 읽기
with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        print(f"[읽은 로그]: {line.strip()}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파일을 다룬 후 왜 반드시 \`close()\`를 해주어야 하나요?**
A. \`close()\`를 하지 않으면 메모리 버퍼에 남아있는 데이터가 디스크에 즉시 기록되지 않거나, 파일 락(Lock) 자원이 유지되어 다른 프로세스가 파일에 접근할 수 없게 됩니다. \`with\` 문을 쓰면 자동으로 \`close()\` 됩니다.
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

- **Exception (예외)**: 프로그램 실행 중(Runtime) 발생하는 오류 상태로, 적절히 처리하지 않으면 프로그램이 비정상 종료됩니다.
- **try-except-else-finally**:
  - \`try\`: 예외가 발생할 가능성이 있는 코드 구역.
  - \`except\`: 예외가 발생했을 때 실행되는 대응 구역.
  - \`else\`: 예외가 발생하지 **않았을 때만** 실행되는 구역.
  - \`finally\`: 예외 발생 여부와 상관없이 **항상 실행**되는 마감 구역.
- **Traceback**: 예외가 발생한 파일, 줄 번호, 호출 스택 경로 정보를 상세히 보여주는 추적 메시지입니다.

---

## 2. 사용자 정의 예외 및 try-except 실습

\`\`\`python
# 1. Exception 상속 사용자 정의 예외 클래스
class InvalidAgeError(Exception):
    def __init__(self, age, message="나이는 0세 이상이어야 합니다."):
        self.age = age
        self.message = message
        super().__init__(self.message)

# 2. 예외 발생(raise) 및 검증 함수
def register_user(name, age):
    if age < 0:
        raise InvalidAgeError(age, f"잘못된 나이 입력: {age}세")
    print(f"회원 가입 완료: {name} ({age}세)")

# 3. try-except-else-finally 구문 실행
try:
    register_user("홍길동", -5)
except InvalidAgeError as e:
    print(f"[검증 실패]: {e}")
except Exception as e:
    print(f"[기타 예외 발생]: {e}")
else:
    print("성공적으로 회원 가입이 처리되었습니다.")
finally:
    print("회원 가입 프로세스가 마감되었습니다.")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`except Exception:\` 과 \`except:\` 의 차이는 무엇인가요?**
A. 아무 타입도 안 적은 \`except:\`는 \`SystemExit\`나 \`KeyboardInterrupt\`(Ctrl+C) 같은 파이썬 인터프리터 종료 신호까지 포획해 버리므로 프로그램 강제 종료가 안 될 수 있습니다. 일반 에러 포획 시에는 반드시 \`except Exception:\`을 쓰는 것이 권장됩니다.
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

## 1. OOP 기초 용어 사전 (Glossary)

- **Class (클래스)**: 객체를 생성하기 위한 설계도(Blueprint)입니다.
- **Instance (인스턴스)**: 클래스 설계도를 바탕으로 메모리에 할당된 객체 실체입니다.
- **\`self\`**: 생성된 자기 자신 객체 인스턴스를 가리키는 첫 번째 매개변수 관례입니다.
- **\`__init__()\`**: 객체 인스턴스가 생성되는 순간 자동 호출되는 초기화 생성자(Constructor) 메소드입니다.
- **Private Attribute (비공개 속성)**: 변수명 앞에 언더스코어 2개(\`__name\`)를 붙여 외부 직접 접근을 막는 캡슐화(Name Mangling) 기술입니다.

---

## 2. 캡슐화가 적용된 클래스 설계 예제

\`\`\`python
class BankAccount:
    # 클래스 변수 (모든 객체 공유)
    bank_name = "DAVHAVE BANK"

    def __init__(self, owner, balance=0):
        self.owner = owner          # 공개 인스턴스 변수
        self.__balance = balance    # 비공개 인스턴스 변수 (캡슐화)

    # 입금 메소드
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"{self.owner}님 {amount:,}원 입금 완료. 현재 잔액: {self.__balance:,}원")

    # Getter 메소드
    def get_balance(self):
        return self.__balance

# 객체 생성 및 실행
account = BankAccount("홍길동", 10000)
account.deposit(5000)
print(f"조회된 잔액: {account.get_balance():,}원")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬에서 \`__balance\` 같은 비공개 변수에 정말 외부 접근이 불가능한가요?**
A. 파이썬은 네임 맹글링(Name Mangling) 기법에 의해 내부적으로 \`_BankAccount__balance\` 라는 이름으로 바뀝니다. 해당 이름으로 접근은 가능하지만, 관례상 비공개 멤버로 규정하고 접근하지 않는 것이 원칙입니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-advanced-oop-inheritance-magic-methods',
    title: '상속(Inheritance), 다형성 및 매직 메소드(Dunder Methods)',
    seo_title: '파이썬 고급 OOP - 상속, super(), 매직 메소드(__str__, __len__), ABC 추상 클래스',
    seo_description: '부모 클래스 상속, super() 호출, 오버라이딩, 던더 매직 메소드(__str__, __repr__, __eq__, __len__), ABC(Abstract Base Class) 추상 클래스를 배웁니다.',
    excerpt: '클래스를 재사용 확장하는 상속(Inheritance), super() 연동, 객체의 동작을 파이썬답게 정의하는 매직 메소드(Dunder Methods)와 추상 클래스를 학습합니다.',
    content_md: `부모 클래스의 속성과 메소드를 물려받아 확장하는 **상속(Inheritance)**과 파이썬 연산자 동작을 직접 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.

---

## 1. 고급 OOP 용어 사전 (Glossary)

- **Inheritance (상속)**: 부모 클래스(Parent Class)의 기능을 자식 클래스(Child Class)가 물려받아 재사용 및 확장하는 개념입니다.
- **\`super()\`**: 자식 클래스에서 부모 클래스의 메소드나 생성자를 안전하게 호출하는 내장 함수입니다.
- **Magic / Dunder Method**: 밑줄 2개로 시작하고 끝나는 언더스코어 메소드(\`__str__\`, \`__repr__\`, \`__len__\`, \`__add__\` 등)로, 파이썬 내장 연산자 동작을 오버로딩합니다.
- **ABC (Abstract Base Class)**: \`abc\` 모듈의 \`@abstractmethod\`를 활용하여 자식 클래스가 특정 메소드를 반드시 구현하도록 강제하는 추상 클래스입니다.

---

## 2. 상속과 매직 메소드 오버로딩 실습

\`\`\`python
from abc import ABC, abstractmethod

# 1. 추상 클래스 정의
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# 2. 자식 클래스 상속 구현
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # 추상 메소드 구현
    def area(self):
        return self.width * self.height

    # __str__ 매직 메소드 (print() 출력 문자열 정의)
    def __str__(self):
        return f"Rectangle(가로: {self.width}, 세로: {self.height}, 넓이: {self.area()})"

    # __eq__ 매직 메소드 (== 비교 연산 정의)
    def __eq__(self, other):
        return self.area() == other.area()

# 객체 활용
r1 = Rectangle(10, 20)
r2 = Rectangle(5, 40)
print(r1) # __str__ 자동 호출
print(f"두 사각형 넓이 동일 여부 (==): {r1 == r2}") # __eq__ 자동 호출
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`__str__\`과 \`__repr__\`의 차이는 무엇인가요?**
A. \`__str__\`은 일반 사용자가 보기 편한 가독성 높은 문자열 표현을 목표로 하고, \`__repr__\`은 개발자가 파이썬 코드로 다시 객체를 재현할 수 있는 상세한 디버깅용 표현을 목표로 합니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-iterators-generators-and-decorators',
    title: '이터레이터(Iterator), 제너레이터(Generator)와 데코레이터(Decorator)',
    seo_title: '파이썬 고급 문법 - Iterator, yield 제너레이터, 클로저 & @decorator',
    seo_description: '메모리 효율적 데이터 순회 이터레이터(__next__), yield 키워드 기반 제너레이터, 클로저(Closure) 및 함수 기능을 확장하는 @decorator 패턴을 학습합니다.',
    excerpt: '대용량 데이터를 지연 평가(Lazy Evaluation)로 다루는 제너레이터(yield)와 함수에 보일러플레이트 기능을 덧붙이는 데코레이터(@decorator)를 배웁니다.',
    content_md: `메모리를 극도로 아끼면서 순회 데이터를 만드는 **제너레이터(Generator)**와 기존 함수의 코드를 고치지 않고 기능을 확장하는 **데코레이터(Decorator)** 패턴을 학습합니다.

---

## 1. 파이썬 고급 프로그래밍 용어 사전 (Glossary)

- **Iterator**: \`__next__()\` 메소드를 호출할 때마다 다음 요소를 하나씩 꺼내주는 순회 객체입니다. (끝나면 \`StopIteration\` 예외 발생)
- **Generator**: \`yield\` 키워드를 사용해 실행 상태를 일시 중지하고 값을 하나씩 반환하는 지연 평가(Lazy Evaluation) 미니 이터레이터 함수입니다.
- **Closure (클로저)**: 자신을 둘러싼 외부 함수의 범위(Scope) 변수를 기억하고 유지하는 중첩 함수입니다.
- **Decorator**: 다른 함수를 인자로 받아 새로운 기능을 추가하여 반환하는 \`@decorator\` 형태의 고차 함수 패턴입니다.

---

## 2. 실행 시간 측정 데코레이터 & 제너레이터 실습

\`\`\`python
import time

# 1. 실행 시간 측정 데코레이터 정의
def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"[{func.__name__}] 실행 소요 시간: {end - start:.4f}초")
        return result
    return wrapper

# 2. 대용량 수열 제너레이터 (yield 지연 평가)
def infinite_number_generator(n):
    for i in range(n):
        yield i ** 2

# 데코레이터 적용
@timer_decorator
def process_data():
    # 메모리에 수백만 개를 올리지 않고 제너레이터로 처리
    gen = infinite_number_generator(1_000_000)
    total_sum = sum(gen)
    return total_sum

print(f"계산 결과: {process_data()}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 리스너나 큰 리스트 대신 제너레이터를 써야 하나요?**
A. 1,000만 개의 요소를 담는 리스트는 수백 MB의 RAM 메모리를 차지하지만, 제너레이터는 한 번에 1개 요소만 계산하여 반환하므로 메모리 사용량이 **수십 바이트(O(1))**에 불과하기 때문입니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-standard-libraries-math-random-datetime-json',
    title: '파이썬 핵심 표준 라이브러리 (math, random, datetime, json, re)',
    seo_title: '파이썬 표준 라이브러리 - math, random, datetime, json 직렬화 & re 정규식',
    seo_description: '파이썬에 내장된 필수 표준 라이브러리 math(수학), random(난수), datetime(날짜/시간 포맷팅), json(JSON 직렬화/파싱) 및 re(정규 표현식)를 배웁니다.',
    excerpt: '별도 설치 없이 파이썬 설치 시 함께 제공되는 강력한 내장 라이브러리(math, random, datetime, json, re 정규 표현식)의 실전 활용법을 배웁니다.',
    content_md: `"Batteries Included(모든 부품이 이미 탑재되어 있다)"라는 파이썬의 명성답게 파이썬 기본 설치 시 동봉되는 **필수 표준 라이브러리 모듈들**을 학습합니다.

---

## 1. 표준 라이브러리 용어 사전 (Glossary)

- **datetime / timedelta**: 날짜와 시간을 생성하고 날짜 간의 덧셈/뺄셈 차이를 계산하는 시간 처리 모듈입니다.
- **json (JSON Serialization)**: 파이썬 객체(\`dict\`, \`list\`)를 JSON 텍스트로 변환(\`dumps()\`)하거나 반대로 파싱(\`loads()\`)하는 직렬화 모듈입니다.
- **re (Regular Expression)**: 텍스트 내에서 특정 규칙을 가진 문자열 패턴(이메일, 전화번호 등)을 검색/추출/치환하는 정규 표현식 모듈입니다.

---

## 2. json 및 re 정규 표현식 활용 실습

\`\`\`python
import json
import re
from datetime import datetime

# 1. 정규 표현식 (이메일 유효성 검사)
email_pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
sample_email = "user@davhave.com"

is_valid = bool(re.match(email_pattern, sample_email))
print(f"이메일 '{sample_email}' 유효성 검사: {is_valid}")

# 2. JSON 직렬화 & 파싱
user_data = {
    "name": "홍길동",
    "joined_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    "skills": ["Python", "Django", "SQL"]
}

# 파이썬 dict -> JSON 문자열 변환 (json.dumps)
json_str = json.dumps(user_data, ensure_ascii=False, indent=2)
print("=== [JSON 변환 결과] ===")
print(json_str)
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`json.dumps()\`와 \`json.dump()\`의 차이는?**
A. \`dumps()\` (Dump String)는 파이썬 객체를 **JSON 형식의 문자열(String)**로 반환하고, \`dump()\`는 바로 **파일 객체(File Stream)**에 JSON 데이터를 직접 씁니다.
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

## 1. tkinter GUI 용어 사전 (Glossary)

- **tkinter**: Tcl/Tk GUI 툴킷을 파이썬에서 사용할 수 있도록 래핑한 파이썬 표준 GUI 모듈입니다.
- **Widget (위젯)**: 화면에 표시되는 개별 GUI 구성 부품입니다. (\`Label\`, \`Button\`, \`Entry\`, \`Text\`, \`Checkbutton\`)
- **Geometry Manager**: 위젯을 창에 배치하는 레이아웃 매니저입니다. (\`pack()\`: 상하좌우 순차배치, \`grid()\`: 격자 행렬 배치, \`place()\`: 절대좌표 배치)

---

## 2. tkinter 간단한 GUI 계산기 화면 예제

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`root.mainloop()\` 구문은 무슨 역할을 하나요?**
A. 사용자의 마우스 클릭, 키보드 입력 등 창에서 일어나는 모든 이벤트(Event)를 감지하기 위해 무한 루프를 돌며 GUI 창이 닫히지 않고 계속 유지되도록 하는 엔진 구문입니다.
`
  },
  {
    order_index: 14,
    slug: 'ch14-concurrency-multiprocessing-and-asyncio',
    title: '파이썬 동시성 프로그래밍: threading, multiprocessing 및 asyncio',
    seo_title: '파이썬 동시성 - threading, multiprocessing, GIL 한계 & asyncio async/await',
    seo_description: 'GIL을 우회하는 multiprocessing, I/O 바운드 작업에 적합한 threading, 파이썬 3.7+ async/await 기반 asyncio 비동기 이벤트 루프 프로그래밍을 배웁니다.',
    excerpt: 'GIL(Global Interpreter Lock)의 특성을 이해하고, I/O 대기 시간을 극복하는 threading과 CPU 코어를 100% 활용하는 multiprocessing 및 asyncio 비동기 코딩을 학습합니다.',
    content_md: `여러 작업을 동시에 동시 실행(Concurrency)하거나 병렬 처리(Parallelism)하여 성능을 극대화하는 **threading, multiprocessing, asyncio** 모듈을 다룹니다.

---

## 1. 동시성 프로그래밍 용어 사전 (Glossary)

- **I/O Bound vs CPU Bound**: 웹 요청/파일 읽기처럼 입출력 대기가 많은 작업(I/O Bound) vs 연산량이 엄청난 수치 계산 작업(CPU Bound).
- **threading**: 단일 프로세스 내에서 여러 제어 흐름을 가져가며, I/O Bound 작업의 대기 시간을 줄이기에 최적화된 모듈입니다.
- **multiprocessing**: GIL 제약을 완전히 극복하기 위해 별도의 파이썬 프로세스(Process)들을 새로 띄워 멀티코어 CPU 병렬 계산을 수행하는 모듈입니다.
- **asyncio (async/await)**: 단일 스레드 상에서 이벤트 루프(Event Loop)를 이용해 비동기(Asynchronous) I/O 작업을 처리하는 파이썬 표준 프레임워크입니다.

---

## 2. asyncio 비동기 웹 작업 요청 예제

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. CPU 연산이 많은 작업에 왜 \`threading\`을 쓰면 성능이 안 나오나요?**
A. CPython의 **GIL(Global Interpreter Lock)** 제약 때문에 스레드가 아무리 많아도 CPU 연산 코드는 한 순간에 오직 1개 스레드만 실행할 수 있기 때문입니다. CPU 연산 작업에는 반드시 \`multiprocessing\`을 써야 합니다.
`
  },
  {
    order_index: 15,
    slug: 'ch15-web-scraping-and-http-requests',
    title: '웹 스크래핑과 파이썬 HTTP 통신 (requests, BeautifulSoup4)',
    seo_title: '파이썬 웹 크롤링 - requests HTTP GET/POST, BeautifulSoup4 파싱 & CSS 셀렉터',
    seo_description: 'HTTP 통신 라이브러리 requests, 응답 상태 코드(200, 404), BeautifulSoup4 HTML DOM 파싱 및 CSS 셀렉터(select)를 활용한 실전 웹 크롤링을 학습합니다.',
    excerpt: '인터넷 웹사이트의 데이터를 자동으로 수집하는 requests 모듈과 HTML 문서를 파싱하여 필요한 정보를 추출하는 BeautifulSoup4 스크래핑 기법을 배웁니다.',
    content_md: `웹 서버와 HTTP 통신을 주고받는 **\`requests\`** 모듈과 웹 페이지의 HTML 구조를 분석하여 필요한 정보를 크롤링하는 **\`BeautifulSoup4\`**를 학습합니다.

---

## 1. 웹 스크래핑 용어 사전 (Glossary)

- **HTTP Status Code**: 서번 응답 상태 코드입니다. (\`200 OK\`: 성공, \`404 Not Found\`: 페이지 없음, \`500 Internal Error\`: 서버 에러)
- **User-Agent**: 웹 요청을 보내는 주체가 브라우저인지 크롤링 스크립트인지 식별하는 HTTP 요청 헤더 정보입니다.
- **BeautifulSoup4 (bs4)**: HTML/XML 문서 텍스트를 파싱하여 DOM 트리 구조로 탐색하고 추출할 수 있게 돕는 파이썬 크롤링 대표 패키지입니다.

---

## 2. requests & BeautifulSoup4 크롤링 예제

\`\`\`python
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
        print(f"{idx}. {title.text} ({title['href']})")

except requests.exceptions.RequestException as e:
    print(f"웹 요청 오류 발생: {e}")
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 크롤링 시 차단당하지 않으려면 어떤 점에 유의해야 하나요?**
A. 서버에 무리를 주지 않도록 \`time.sleep(1)\` 같은 요청 간격을 두고, 올바른 \`User-Agent\` 헤더를 전달하며, 웹사이트의 \`robots.txt\` 수집 규약을 준수해야 합니다.
`
  },
  {
    order_index: 16,
    slug: 'ch16-python-final-project-mini-game-and-apps',
    title: '파이썬 실전 종합 프로젝트: 터틀 그래픽 미니 게임 & 유틸리티 앱',
    seo_title: '파이썬 실전 프로젝트 - Turtle 터틀 그래픽 미니 게임 & GUI 관리 앱',
    seo_description: '배운 파이썬 기술(자료구조, OOP, 파일 I/O, tkinter, Turtle)을 총동원하여 터틀 그래픽 피하기 미니 게임과 실전 GUI 도서/회원 관리 애플리케이션을 구현합니다.',
    excerpt: '파이썬의 기초 문법, 객체지향, 파일 처리, tkinter GUI 기술을 종합하여 터틀 그래픽 미니 게임과 실전 데이터 관리 애플리케이션을 완성합니다.',
    content_md: `배운 파이썬의 모든 핵심 기초 문법, 자료구조, 객체지향 설계, 파일 처리 및 tkinter GUI 기술을 통합하여 **실전 파이썬 종합 프로젝트**를 완성합니다.

---

## 1. 프로젝트 아키텍처 용어 사전 (Glossary)

- **Turtle Graphics**: 파이썬 기본 모듈로 제공되는 직관적인 교육용 2D 그래픽 & 미니 게임 구현 라이브러리입니다.
- **Persistence (지속성)**: 프로그램이 종료되어도 데이터를 잃지 않고 JSON이나 파일로 영구 보관하는 성질입니다.

---

## 2. 터틀 그래픽 미니 슈팅 게임 코드

\`\`\`python
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 완벽하게 만든 파이썬 프로그램을 실행 파일(\`.exe\` 또는 \`.app\`)로 상용 포장하려면?**
A. **\`PyInstaller\`** 라이브러리를 활용하여 \`pyinstaller --onefile --noconsole main.py\` 명령을 실행하면, 파이썬이 설치되지 않은 다른 PC에서도 더블 클릭으로 바로 구동되는 단일 실행 파일이 자동 생성됩니다.
`
  }
];

// Split into 4 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 16)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full Python Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_python_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 4 full SQL chunk files for Python!');
