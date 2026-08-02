import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  {
    order_index: 1,
    slug: 'ch01-c-intro',
    title: 'C 언어 개요와 컴퓨팅 사고의 시작',
    seo_title: 'C 언어 입문 가이드 - C 언어의 역사, 특징 및 하드웨어와의 관계',
    seo_description: '프로그래밍의 시작인 C 언어의 개발 배경, 왜 50년 넘게 사용되는지, 시스템 하드웨어와 프로그래밍의 연관성을 초보자 눈높이에서 설명합니다.',
    excerpt: '컴퓨터 프로그래밍의 대명사이자 현대 프로그래밍 언어의 뿌리가 된 C 언어의 탄생 배경, 주요 특징 및 컴퓨팅 사고의 기초를 학습합니다.',
    content_md: `**C 언어**는 1972년 벨 연구소의 데니스 리치(Dennis Ritchie)가 유닉스(UNIX) 운영체제를 작성하기 위해 개발한 프로그래밍 언어입니다. 오늘날 사용되는 C++, Java, Python, C#, JavaScript 등 수많은 현대 언어의 직계 조상이자 뿌리가 됩니다.

---

## 1. C 언어를 배워야 하는 3가지 이유

1. **하드웨어와 메모리의 직관적 이해**: C 언어는 컴퓨터의 CPU, RAM 메모리 공간을 직접 제어할 수 있는 기능을 제공하여 컴퓨터가 작동하는 근본 원리를 깨닫게 해줍니다.
2. **높은 실행 속도와 효율성**: 컴파일러를 통해 기계어로 직접 변환되므로, 가상 머신이나 인터프리터를 거치는 다른 언어에 비해 훨씬 빠릅니다.
3. **탄탄한 기본기 구축**: C 언어의 기본 문법(변수, 제어문, 함수 등)을 익혀두면 파이썬이나 자바 등 다른 어떤 언어도 빠르게 배울 수 있습니다.

---

## 2. 하드웨어와 C 프로그래밍의 관계

컴퓨터는 크게 **CPU(중앙처리장치)**, **RAM(주기억장치)**, **보조기억장치(SSD/HDD)**로 구성됩니다.

- **프로그램**: 보조기억장치에 저장된 실행 파일.
- **프로세스**: 프로그램을 실행하면 메모리(RAM)로 로드되어 CPU가 명령을 처리하는 상태.
- C 언어는 RAM 메모리의 번지(주소)를 다루는 포인터(Pointer) 기능을 지원하여 최고 수준의 메모리 제어력을 제공합니다.

---

## 3. 대표적인 C 언어 활용 분야

- **운영체제 (OS)**: Windows, Linux, macOS, Android 커널 개발.
- **임베디드 시스템**: 가전제품, 자동차 ECU, IoT 기기의 펌웨어 제어.
- **게임 엔진 & 3D 그래픽스**: 초고속 데이터 처리가 필요한 게임 엔진 코어.
- **데이터베이스 엔진**: MySQL, SQLite 등 대용량 데이터베이스 엔진.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 요새 파이썬(Python)이 인기인데 왜 초보자가 C 언어를 배워야 하나요?**
A. 파이썬은 내부 메커니즘을 숨겨두어 쉽지만, 컴퓨터의 실제 동작 원리를 이해하긴 어렵습니다. C 언어를 먼저 경험하면 메모리 구조와 실행 과정을 명확히 알 수 있어 훨씬 유능한 개발자로 성장할 수 있습니다.
`
  },
  {
    order_index: 2,
    slug: 'ch02-program-development',
    title: 'C 프로그램 개발 과정과 빌드 메커니즘',
    seo_title: 'C 프로그램 작성부터 실행까지 - 소스 코드, 컴파일러, 링커의 이해',
    seo_description: '내가 작성한 텍스트 코드가 컴퓨터가 이해하는 기계어로 변환되는 4단계 빌드 과정(전처리, 컴파일, 어셈블, 링크)과 통합 개발 환경(IDE) 설정을 설명합니다.',
    excerpt: '소스 코드 작성부터 컴파일, 링크, 실행 파일(.exe) 생성까지 프로그래밍의 전 과정을 초보자도 이해하기 쉽게 단계별로 살펴봅니다.',
    content_md: `우리가 인간의 언어로 작성한 **소스 코드(\`.c\`)**가 컴퓨터(CPU)가 실행할 수 있는 **실행 파일(\`.exe\`)**로 변환되기까지는 여러 단계의 변환 과정을 거칩니다.

---

## 1. 프로그램 개발 4단계 과정

1. **소스 코드 작성 (Source Code)**: 에디터에서 C 언어 문법에 맞춰 코드 작성 (\`main.c\`).
2. **컴파일 (Compilation)**: C 소스 코드를 기계어로 번역하여 **목적 파일(\`.obj\` / \`.o\`)** 생성.
3. **링크 (Linking)**: 여러 목적 파일과 C 표준 라이브러리를 하나로 연결하여 **실행 파일(\`.exe\`)** 생성.
4. **디버깅 및 실행 (Execution & Debugging)**: 빌드된 프로그램을 실행하고 오류(Bug)를 수정.

---

## 2. 빌드(Build) 메커니즘 상세 보기

| 단계 (Phase) | 역할 및 결과물 | 관련 도구 |
| :--- | :--- | :--- |
| **전처리기 (Preprocessor)** | \`#include\`, \`#define\` 등 주석 제거 및 헤더 삽입 | 전처리기 |
| **컴파일러 (Compiler)** | C 코드를 어셈블리 및 기계어 코드 변환 | GCC, MSVC, Clang |
| **링커 (Linker)** | 목적 파일들과 라이브러리를 묶어 하나로 결합 | 링커 |
| **로더 (Loader)** | 실행 파일을 메모리(RAM)에 로드하여 실행 | 운영체제 (OS) |

---

## 3. 초보자를 위한 통합 개발 환경 (IDE)

프로그래밍을 시작할 때는 코드 작성, 컴파일, 디버깅을 한 번에 해주는 **IDE(Integrated Development Environment)**를 사용하는 것이 편리합니다.

- **Visual Studio 2022**: Windows 환경에서 가장 강력한 표준 C/C++ 개발 환경.
- **VS Code (Visual Studio Code)**: 가볍고 인기 많은 코드 에디터 (C/C++ 확장팩 설치 필요).
- **GCC / Clang**: Linux / macOS 터미널에서 직접 컴파일할 수 있는 기본 도구.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 컴파일 오류(Compile Error)와 런타임 오류(Runtime Error)의 차이는 무엇인가요?**
A. 컴파일 오류는 문법이 틀려 번역 자체가 실패한 것이며, 런타임 오류는 번역은 성공했으나 실행 도중 0으로 나누기, 잘못된 메모리 접근 등으로 프로그램이 튕기는 오류입니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-c-elements',
    title: 'C 프로그램의 기본 구성 요소와 main() 함수',
    seo_title: 'C 프로그램 기본 구조 - main 함수, printf 출력, 이스케이프 문자와 주석',
    seo_description: 'C 프로그램의 시작점인 main() 함수, 헤더 파일 포함(#include), 화면 출력 함수 printf(), 줄바꿈 이스케이프 문자 \\n, 코드 주석 작성법을 학습합니다.',
    excerpt: 'C 언어 프로그램의 가장 표준적인 뼈대 구조를 분석하고, 화면에 글자를 출력하는 printf() 함수와 줄바꿈 이스케이프 문자의 활용을 다룹니다.',
    content_md: `모든 C 프로그램은 일정한 기본 뼈대 구격을 갖추고 있습니다. C 언어 프로그램의 시작점은 **\`main()\` 함수**입니다.

---

## 1. C 프로그램의 표준 뼈대 코드

\`\`\`c
#include <stdio.h>  // 표준 입출력 라이브러리 헤더 파일 포함

int main(void) {
    printf("Hello, World!\\n");  // 화면에 문자열 출력
    return 0;  // 프로그램이 정상 종료되었음을 운영체제에 알림
}
\`\`\`

- **\`#include <stdio.h>\`**: Standard Input/Output(표준 입출력)을 다루는 함수들의 정보가 적힌 헤더 파일을 불러옵니다.
- **\`int main(void)\`**: 프로그램이 시작될 때 가장 먼저 실행되는 메인 함수입니다.
- **\`return 0;\`**: 0을 반환하며 프로그램이 에러 없이 무사히 끝났음을 알립니다.

---

## 2. 화면 출력을 담당하는 printf() 함수

\`printf\`는 **Print Formatted(서식화된 출력)**의 약자로, 화면에 글자나 변수의 값을 출력할 때 사용합니다.

### 자주 사용하는 이스케이프 시퀀스 (Escape Sequence)

| 이스케이프 문자 | 역할 (설명) |
| :--- | :--- |
| **\`\\n\`** | 줄 바꿈 (New Line) |
| **\`\\t\`** | 탭(Tab) 간격 만큼 띄우기 |
| **\`\\\\ \`** | 백슬래시(\\) 문자를 직접 출력 |
| **\`\\"\`** | 큰따옴표(") 문자를 직접 출력 |

---

## 3. 주석 (Comment) 작성법

주석은 컴퓨터가 해석하지 않고 건너뛰는 설명글로, 코드의 이해를 돕기 위해 작성합니다.

\`\`\`c
// 한 줄 주석: 이 줄 전체가 설명입니다.

/* 
   여러 줄 주석:
   줄바꿈을 하여 긴 설명글을
   작성할 때 사용합니다.
*/
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 문장 끝에 붙는 세미콜론(\`;\`)은 왜 써야 하나요?**
A. C 언어에서 세미콜론(\`;\`)은 하나의 명령(문장, Statement)이 끝났음을 나타내는 구분 기호입니다. 세미콜론을 빠뜨리면 컴파일러가 문장의 끝을 알 수 없어 컴파일 오류가 생깁니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-variables-and-data-types',
    title: '변수와 데이터 타입 (정수형, 실수형, 문자형)',
    seo_title: 'C 언어 변수와 자료형 총정리 - int, float, double, char 및 sizeof 연산자',
    seo_description: '데이터를 담는 메모리 상자 변수의 개념, 정수형(int), 실수형(float, double), 문자형(char)의 크기 및 %d, %f, %c 서식 지정자를 초보자용으로 풀어냅니다.',
    excerpt: '값을 저장하기 위해 메모리 공간에 이름을 붙이는 변수(Variable)의 개념과 정수, 실수, 문자를 담는 C 언어의 다양한 자료형(Data Type)을 다룹니다.',
    content_md: `**변수(Variable)**는 프로그램이 실행되는 동안 데이터를 보관하기 위해 메모리(RAM)에 이름을 붙여 할당받은 **"데이터 저장 상자"**입니다.

---

## 1. 변수의 선언과 초기화

변수를 사용하려면 먼저 어떤 종류의 데이터를 담을지 **자료형(Data Type)**과 **변수 이름**을 지정해 주어야 합니다.

\`\`\`c
int age;       // 정수형 변수 age 선언 (상자 만들기)
age = 25;      // 변수 age에 25 대입 (값 넣기)

int score = 100; // 변수의 선언과 동시에 초기화
\`\`\`

---

## 2. C 언어의 핵심 기본 자료형 (Data Types)

| 자료형 (Type) | 크기 (Bytes) | 서식 지정자 | 값의 범위 / 용도 |
| :--- | :--- | :--- | :--- |
| **\`char\`** | 1 Byte | \`%c\` | 단일 문자 (ASCII 코드 정수) |
| **\`int\`** | 4 Bytes | \`%d\` | 정수 (약 -21억 ~ +21억) |
| **\`float\`** | 4 Bytes | \`%f\` | 소수점 6자리 실수 |
| **\`double\`** | 8 Bytes | \`%lf\` | 소수점 15자리 정밀한 실수 |

---

## 3. 출력과 입력을 위한 서식 지정자 및 scanf()

변수의 값을 화면에 출력하거나 키보드로 값을 입력받을 때 **서식 지정자(Format Specifier)**를 사용합니다.

\`\`\`c
#include <stdio.h>

int main(void) {
    int age = 0;
    printf("나이를 입력하세요: ");
    scanf("%d", &age); // 키보드 입력을 age 변수에 저장 (& 주소 연산자 필수)

    printf("당신의 나이는 %d세 입니다.\\n", age);
    return 0;
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 실수형에서 \`float\`보다 \`double\`을 주로 쓰는 이유는 무엇인가요?**
A. 컴퓨터는 실수를 이진수로 표현할 때 오차(부동소수점 오차)가 발생합니다. \`double\`은 8바이트 메모리를 사용해 \`float\`보다 훨씬 정밀하게 실수를 표현하므로 C 언어 표준 실수형으로 권장됩니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-operators-and-expressions',
    title: '수식과 연산자 (산술, 관계, 논리, 대입, 증감 연산자)',
    seo_title: 'C 언어 연산자 완벽 가이드 - 산술, 대입, 증감(++, --), 관계, 논리 연산자',
    seo_description: '더하기, 뺄셈, 나눗셈 나눗값(%) 산술 연산자부터 크기 비교 관계 연산자, && || ! 논리 연산자, 전위/후위 증감 연산자, 형 변환의 원리를 익힙니다.',
    excerpt: '값이나 변수에 대해 연산을 수행하는 산술, 관계, 논리, 증감, 대입 연산자의 종류와 연산자 우선순위의 개념을 쉬운 코드 예제와 함께 배웁니다.',
    content_md: `**연산자(Operator)**는 변수나 값에 대해 덧셈, 비교, 논리 판단 등의 계산을 수행하도록 지시하는 기호입니다.

---

## 1. 주요 연산자의 종류

### 1) 산술 연산자
- \`+\` (덧셈), \`-\` (뺄셈), \`*\` (곱셈), \`/\` (나눗셈 몫), **\`%\` (나머지 연산자)**

### 2) 증감 연산자 (\`++\`, \`--\`)
- **전위 연산 (\`++a\`)**: 값을 먼저 1 증가시킨 후 문장 실행.
- **후위 연산 (\`a++\`)**: 문장을 먼저 실행한 후 값을 1 증가.

### 3) 관계(비교) 연산자
- \`==\` (같다), \`!=\` (다르다), \`>\` (크다), \`<\` (작다), \`>=\`, \`<=\`
- 결과값으로 참은 **1**, 거짓은 **0**을 반환합니다.

### 4) 논리 연산자
- **\`&&\` (AND)**: 두 조건이 모두 참일 때만 참.
- **\`||\` (OR)**: 두 조건 중 하나라도 참이면 참.
- **\`!\` (NOT)**: 참을 거짓으로, 거짓을 참으로 뒤집음.

---

## 2. 증감 연산자 전위/후위 차이 예시 코드

\`\`\`c
#include <stdio.h>

int main(void) {
    int x = 10, y = 10;
    int a = ++x; // x가 11이 된 후 a에 대입 -> a는 11
    int b = y++; // b에 10이 먼저 대입된 후 y가 11이 됨 -> b는 10

    printf("a = %d, b = %d\\n", a, b);
    return 0;
}
\`\`\`

---

## 3. 형 변환 (Type Casting)

서로 다른 자료형 간 계산이 일어날 때 형 변환이 발생합니다.

- **자동 형 변환**: 정수와 실수를 더하면 데이터 손실을 막기 위해 표현 범위가 넓은 실수형으로 자동 변환.
- **명시적 형 변환**: \`(int)3.14\` 처럼 괄호를 써서 강제로 타입을 변환.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. C 언어에서 \`5 / 2\`를 계산하면 왜 \`2.5\`가 아니라 \`2\`가 나오나요?**
A. 정수와 정수의 나눗셈 결과는 항상 정수(소수점 버림)가 됩니다. \`2.5\`라는 소수점 결과를 얻으려면 두 수 중 적어도 하나를 실수로 변환(\`5.0 / 2\` 또는 \`(double)5 / 2\`)해야 합니다.
`
  },
  {
    order_index: 6,
    slug: 'ch06-conditional-statements',
    title: '조건문 (의사결정 if, if-else, switch-case)',
    seo_title: 'C 언어 조건문 완벽 정리 - if, else if, else 조건 분기와 switch문',
    seo_description: '조건에 따라 프로그램의 실행 흐름을 다르게 제어하는 if문, if-else문, 다중 조건문 및 switch-case문의 구조와 break의 역할을 쉬운 예제로 익힙니다.',
    excerpt: '프로그램이 조건에 따라 선택을 내리고 서로 다른 명령을 실행하게 만드는 조건문(if, else, switch-case)의 개념과 실전 활용법을 공부합니다.',
    content_md: `**조건문**은 주어진 조건의 참(True)과 거짓(False) 여부에 따라 프로그램의 실행 길을 갈라지게 만드는 제어문입니다.

---

## 1. if ~ else if ~ else 다중 조건문

여러 개의 조건을 순차적으로 검사하여 해당되는 조건 블록만 실행합니다.

\`\`\`c
#include <stdio.h>

int main(void) {
    int score = 85;

    if (score >= 90) {
        printf("A 학점입니다.\\n");
    } else if (score >= 80) {
        printf("B 학점입니다.\\n");
    } else if (score >= 70) {
        printf("C 학점입니다.\\n");
    } else {
        printf("F 학점입니다.\\n");
    }
    return 0;
}
\`\`\`

---

## 2. switch ~ case 분기문

하나의 정수형 변수 또는 문자 변수의 정밀한 정수 값에 따라 여러 길 중 하나로 바로 빠져나가는 구문입니다.

\`\`\`c
#include <stdio.h>

int main(void) {
    int ranking = 2;

    switch (ranking) {
        case 1:
            printf("금메달입니다!\\n");
            break; // switch문을 탈출
        case 2:
            printf("은메달입니다!\\n");
            break;
        case 3:
            printf("동메달입니다!\\n");
            break;
        default:
            printf("수고하셨습니다.\\n");
            break;
    }
    return 0;
}
\`\`\`

---

## 3. 조건문 선택 가이드

| 구 분 | \`if ~ else\` 문 | \`switch ~ case\` 문 |
| :--- | :--- | :--- |
| **조건식 형태** | 대소 비교(\`>\`, \`<\`), 범위 조건, 논리 연산자 사용 가능 | **정수/문자 형태의 일치 여부만 비교** |
| **가독성** | 조건이 많고 복잡하면 복잡해짐 | 일치하는 특정 값에 따른 분기 시 깔끔함 |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`switch-case\` 문에서 \`break;\`를 빠뜨리면 어떻게 되나요?**
A. \`break;\`가 없으면 아래 쪽의 다른 \`case\` 블록까지 조건을 무시하고 계속 실행(Fall-through 현상)되는 심각한 오류가 발생합니다.
`
  },
  {
    order_index: 7,
    slug: 'ch07-loops-and-iterations',
    title: '반복문 (for, while, do-while 구문)',
    seo_title: 'C 언어 반복문 총정리 - for문, while문, do-while문 및 break, continue',
    seo_description: '동일한 작업을 정해진 횟수나 조건 동안 반복하는 for문, while문, do-while문의 차이점과 중첩 반복문(구구단), break와 continue의 제어를 습득합니다.',
    excerpt: '반복되는 수많은 작업을 컴퓨터에게 효율적으로 시키는 for, while, do-while 반복문의 기본과 중첩 반복문, 흐름 제어어(break, continue)를 다룹니다.',
    content_md: `**반복문(Loop)**은 특정 조건이 만족하는 동안 동일한 코드 블록을 여러 번 반복해서 실행하는 구문입니다.

---

## 1. 반복문 3총사 비교

### 1) for 문: 반복 횟수가 명확할 때
\`\`\`c
// 1부터 5까지 출력
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
\`\`\`

### 2) while 문: 조건에 따라 반복할 때
\`\`\`c
int count = 1;
while (count <= 5) {
    printf("%d ", count);
    count++;
}
\`\`\`

### 3) do-while 문: 조건 검사 전에 무조건 1회는 실행할 때
\`\`\`c
int num = 0;
do {
    printf("최소 한 번은 실행됩니다.\\n");
} while (num > 0);
\`\`\`

---

## 2. 중첩 반복문 (Nested Loop) 예시: 구구단

반복문 안에 또 다른 반복문을 넣을 수 있습니다.

\`\`\`c
#include <stdio.h>

int main(void) {
    for (int dan = 2; dan <= 9; dan++) {
        for (int i = 1; i <= 9; i++) {
            printf("%d x %d = %2d  ", dan, i, dan * i);
        }
        printf("\\n");
    }
    return 0;
}
\`\`\`

---

## 3. 루프 흐름 제어: break vs continue

- **\`break;\`**: 현재 반복문을 즉시 중단하고 완전히 빠져나옵니다.
- **\`continue;\`**: 아래 남은 코드를 건너뛰고 바로 다음 반복 순서로 넘어갑니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 무한 루프(Infinite Loop)란 무엇이고 어떻게 만드나요?**
A. 종결 조건이 늘 참이거나 탈출 조건이 없어 영원히 끝나지 않는 반복문입니다. \`while(1) { ... }\` 형태로 작성하며, 보통 내부에 특정 조건 시 \`break;\` 구문을 함께 배치하여 제어합니다.
`
  },
  {
    order_index: 8,
    slug: 'ch08-functions-basics',
    title: '함수 기초와 모듈화 프로그래밍',
    seo_title: 'C 언어 함수(Function) 작성법 - 정의, 매개변수, 반환값과 함수 원형',
    seo_description: '반복되는 코드를 하나로 묶어 재사용하는 함수(Function)의 개념, 반환형(Return Type), 매개변수(Parameter), 함수 호출과 함수 선언(Prototype)을 배웁니다.',
    excerpt: '코드를 단위별로 쪼개어 모듈화하는 함수의 개념, 매개변수 전달과 반환값, 그리고 함수 선언(Prototype)의 필요성을 쉬운 코드 예제로 다룹니다.',
    content_md: `**함수(Function)**란 특정 작업이나 계산을 수행하는 독립적인 코드 조각으로, 필요할 때마다 이름을 불러(호출) 재사용할 수 있는 기능 모듈입니다.

---

## 1. 함수의 기본 구조

\`\`\`c
// 반환타입  함수이름  (매개변수목록)
int add(int a, int b) {
    int result = a + b;
    return result; // 결과값 반환
}
\`\`\`

- **반환 타입 (Return Type)**: 함수가 모든 계산을 마친 후 돌려줄 결과값의 자료형 (반환할 값이 없다면 \`void\` 사용).
- **매개변수 (Parameter)**: 함수를 호출할 때 외부에서 전달받는 입력값.
- **\`return\`**: 계산 결과를 호출한 곳으로 전달하고 함수를 종료.

---

## 2. 함수 선언 (Prototype)과 정의의 분리

C 언어 컴파일러는 위에서 아래로 코드를 읽으므로, \`main()\` 함수보다 아래에 구현된 함수를 호출하려면 상단에 **함수 원형(Prototype)**을 선언해야 합니다.

\`\`\`c
#include <stdio.h>

// 1. 함수 원형 선언
int multiply(int x, int y);

int main(void) {
    int res = multiply(4, 5); // 함수 호출
    printf("결과: %d\\n", res);
    return 0;
}

// 2. 함수 실제 정의
int multiply(int x, int y) {
    return x * y;
}
\`\`\`

---

## 3. 함수를 사용할 때의 장점

1. **코드 중복 제거**: 똑같은 코드를 여러 번 반복해서 적을 필요가 없음.
2. **모듈화 및 가독성**: 전체 프로그램을 작은 기능 단위로 나누어 유지보수가 쉬워짐.
3. **디버깅 용이성**: 특정 기능에 오류가 생기면 해당 함수만 수정하면 됨.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 함수 반환형에 쓰이는 \`void\`의 뜻은 무엇인가요?**
A. "빈 공간", "없음"을 의미합니다. \`void print_hello(void)\` 처럼 쓰이면 "입력 매개변수도 없고, 반환하는 결과값도 없는 함수"라는 의미입니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-scope-and-storage-classes',
    title: '변수의 범주와 기억 부류 (지역, 전역, 정적 변수)',
    seo_title: 'C 언어 변수의 유효 범위(Scope) - 지역 변수, 전역 변수, static 정적 변수',
    seo_description: '중괄호 {} 안에서만 살아있는 지역 변수(Local Variable), 프로그램 전체에서 공유하는 전역 변수(Global Variable), 값을 유지하는 static 정적 변수를 구분합니다.',
    excerpt: '변수가 어디서 태어나고 어디서 소멸하는지 결정하는 유효 범위(Scope)와 생난 주기(Lifetime), 지역 변수, 전역 변수, static 변수의 차이를 학습합니다.',
    content_md: `변수는 선언되는 위치에 따라 **사용할 수 있는 범위(Scope)**와 **메모리에 살아있는 기간(Lifetime)**이 결정됩니다.

---

## 1. 지역 변수 vs 전역 변수 vs 정적 변수

| 변수 종류 | 선언 위치 | 유효 범위 (Scope) | 생성 및 소멸 시점 (Lifetime) |
| :--- | :--- | :--- | :--- |
| **지역 변수 (Local)** | 함수 또는 \`{}\` 중괄호 내부 | 선언된 \`{}\` 블록 내부 | 블록 시작 시 생성, **블록 끝날 때 소멸** |
| **전역 변수 (Global)** | 모든 함수 외부 | 프로그램 코드 전체 | **프로그램 시작 시 생성, 종료 시 소멸** |
| **정적 변수 (\`static\`)**| 함수 내부 (\`static\` 키워드) | 선언된 \`{}\` 블록 내부 | **프로그램 시작 시 생성, 종료 시 소멸 (값 유지)** |

---

## 2. 정적 변수 (static) 의 동작 코드

지역 변수처럼 블록 안에서만 접근 가능하지만, 함수가 끝나도 메모리에서 사라지지 않고 값이 계속 유지됩니다.

\`\`\`c
#include <stdio.h>

void count_up(void) {
    static int count = 0; // 최초 1회만 초기화됨
    count++;
    printf("방문 횟수: %d\\n", count);
}

int main(void) {
    count_up(); // 1
    count_up(); // 2
    count_up(); // 3
    return 0;
}
\`\`\`

---

## 3. 메모리 영역 구증 (Memory Stack / Heap / Data / Code)

- **코드 영역 (Code/Text)**: 실행할 C 언어 명령어 기계어가 저장되는 영역.
- **데이터 영역 (Data/BSS)**: **전역 변수**와 **static 변수**가 저장되는 영역.
- **스택 영역 (Stack)**: **지역 변수**와 **매개변수**가 함수 호출 시 생성되었다 사라지는 공간.
- **힙 영역 (Heap)**: 동적 메모리 할당으로 사용자가 직접 제어하는 공간.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 편하다고 전역 변수를 막 많이 써도 되나요?**
A. 전역 변수는 어디서나 접근하여 수정할 수 있어 어디서 값이 바뀌었는지 추적하기 힘든 side-effect 오류를 유발합니다. 따라서 꼭 필요한 경우가 아니면 지역 변수를 사용하는 것이 바람직합니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-arrays',
    title: '1차원 및 다차원 배열 (Array)',
    seo_title: 'C 언어 배열(Array) 완전 기초 - 1차원 배열, 인덱스 메모리 구조, 2차원 배열',
    seo_description: '동일한 타입의 연속된 상자 연속체인 배열의 선언, 인덱스 0 기반 접근, 배열 크기 요소 수 계산, 2차원 배열과 행렬 데이터 다루기를 다룹니다.',
    excerpt: '동일한 자료형의 변수 여러 개를 연속된 메모리 공간에 묶어서 관리하는 1차원 및 2차원 배열(Array)의 구조와 인덱스 연산을 다룹니다.',
    content_md: `**배열(Array)**은 **동일한 자료형의 변수 여러 개를 연속된 메모리 공간에 순서대로 나열**하여 관리하는 집합 자료구조입니다.

---

## 1. 1차원 배열의 선언과 인덱스(Index)

\`\`\`c
int scores[5] = {90, 85, 100, 95, 80};
\`\`\`

- 배열의 방 번호(인덱스)는 **0번부터 시작**합니다.
- \`scores[0]\` 은 90, \`scores[4]\` 는 80이 됩니다.
- 배열의 크기는 \`sizeof(scores) / sizeof(scores[0])\` 공식을 통해 구할 수 있습니다.

---

## 2. 배열 순회 예시 코드

\`\`\`c
#include <stdio.h>

int main(void) {
    int num[5] = {10, 20, 30, 40, 50};
    int sum = 0;

    for (int i = 0; i < 5; i++) {
        sum += num[i];
    }

    printf("총합: %d, 평균: %.1f\\n", sum, (double)sum / 5);
    return 0;
}
\`\`\`

---

## 3. 2차원 배열 (Multidimensional Array)

바둑판이나 표(Table)처럼 행과 열 형태로 데이터를 관리할 때 사용합니다.

\`\`\`c
// 3행 4열 2차원 배열
int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 배열의 인덱스 범위를 벗어나 접근하면(\`scores[10]\`) 어떻게 되나요?**
A. C 언어는 배열의 경계 검사(Boundary Check)를 하지 않습니다. 인덱스 범위를 넘어선 메모리 영역을 건드리면 알 수 없는 쓰레기 값이 나오거나 프로그램이 비정상 종료(Segmentation Fault)될 수 있습니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-pointers-fundamentals',
    title: '포인터(Pointer)의 개념과 메모리 주소',
    seo_title: 'C 언어 포인터(Pointer) 쉬운 이해 - 주소 연산자(&), 역참조(*), 포인터 변수',
    seo_description: 'C 언어의 꽃 포인터(Pointer)의 핵심! 메모리 주소값을 담는 변수, 주소 추출 연산자 &, 그 주소로 찾아가는 간접 참조 * 연산자의 원리를 그림과 함께 해설합니다.',
    excerpt: 'C 언어 입문자가 가장 어려워하지만 가장 강력한 도구인 포인터(Pointer)의 정의, 메모리 주소값, 주소 연산자(&)와 역참조 연산자(*)를 확실하게 정리합니다.',
    content_md: `**포인터(Pointer)**는 일반적인 값(숫자, 문자)이 아니라, 다른 변수가 위치한 **"메모리의 주소(Memory Address)"를 값으로 저장하는 변수**입니다.

---

## 1. 포인터 관련 핵심 연산자 2가지

1. **주소 연산자 (\`&\`)**: 변수 이름 앞에 붙여 해당 변수의 메모리 시작 주소를 알아냅니다.
2. **역참조(간접 참조) 연산자 (\`*\`)**: 포인터 변수 앞에 붙여 그 주소가 가리키는 곳에 직접 찾아가 실제 값을 읽거나 수정합니다.

---

## 2. 포인터 선언과 동작 예시

\`\`\`c
#include <stdio.h>

int main(void) {
    int num = 10;
    int *p = &num; // p는 num의 메모리 주소를 가리키는 포인터 변수

    printf("num의 값: %d\\n", num);      // 10
    printf("num의 주소: %p\\n", &num);   // 메모리 주소 (예: 0x7ffd...)
    printf("p가 가진 주소: %p\\n", p);   // &num과 동일한 주소
    printf("p가 가리키는 값: %d\\n", *p); // 10 (역참조)

    *p = 50; // p가 가리키는 공간(num)의 값을 50으로 직접 변경!
    printf("수정 후 num: %d\\n", num);   // 50으로 변경됨
    return 0;
}
\`\`\`

---

## 3. Call by Value vs Call by Reference (값 전달 vs 주소 전달)

함수에 변수 값을 그냥 넘겨주면 복사본이 전달되지만, **포인터(주소)를 넘겨주면 함수 안에서 원본 변수의 값을 직접 바꿀 수 있습니다.**

\`\`\`c
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 포인터 변수의 크기는 무조건 4바이트인가요 8바이트인가요?**
A. 포인터 변수의 크기는 가리키는 자료형(\`int*\`, \`char*\` 등)과 상관없이 **운영체제 시스템 비트수**에 따라 결정됩니다. 32-bit 시스템에서는 4 Bytes, 64-bit 시스템에서는 8 Bytes가 됩니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-strings',
    title: '문자열 다루기 (문자 배열과 string.h 함수)',
    seo_title: 'C 언어 문자열 완전 가이드 - char 배열, Null 문자, string.h 라이브러리',
    seo_description: '문자열의 본질인 char 배열과 끝을 알려주는 Null 문자(\\0), strlen, strcpy, strcat, strcmp 문자열 처리 라이브러리 함수의 동작을 학습합니다.',
    excerpt: 'C 언어에서 문자열이 구현되는 메커니즘인 Null 문자 포함 char 배열과, string.h 라이브러리의 주요 문자열 조작 함수를 배웁니다.',
    content_md: `C 언어에는 독립된 문자열(String) 타입이 존재하지 않습니다. 대신 **문자의 배열(\`char[]\`)** 마지막에 문자열의 끝을 알려주는 **널 문자(Null Character, \\0)**를 넣어 문자열을 표현합니다.

---

## 1. C 문자열과 널 문자 (\\0)

\`\`\`c
char str[6] = "Hello"; // 실제로는 H, e, l, l, o, \\0 총 6개 바이트
\`\`\`

- 문자열의 끝에는 항상 컴파일러가 자동으로 **\`\\0\` (ASCII 값 0)**을 덧붙입니다.
- 따라서 문자열을 담을 배열 크기는 **실제 글자 수 + 1** 이상으로 넉넉히 선언해야 합니다.

---

## 2. 주요 문자열 처리 함수 (\`<string.h>\`)

| 함수 | 역할 | 사용 예시 |
| :--- | :--- | :--- |
| **\`strlen(str)\`** | 널 문자를 제외한 순수 문자열 길이를 반환 | \`strlen("Hello")\` $\rightarrow$ 5 |
| **\`strcpy(dest, src)\`** | 문자열을 복사하여 붙여넣음 | \`strcpy(target, "ABC");\` |
| **\`strcat(dest, src)\`** | 원본 뒤에 다른 문자열을 이어 붙임 | \`strcat(str, " World");\` |
| **\`strcmp(s1, s2)\`** | 두 문자열을 사전순 비교 (같으면 0 반환) | \`if(strcmp(a, b) == 0)\` |

---

## 3. 문자열 입출력 시 주의점: \`scanf\` vs \`fgets\`

- \`scanf("%s", str)\`: 띄어쓰기(공백)나 줄바꿈을 만나면 입력을 멈춥니다.
- **\`fgets(str, sizeof(str), stdin)\`**: 공백을 포함해 한 줄 전체를 안전하게 입력받습니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 왜 \`str1 = str2;\` 처럼 대입 연산자로 문자열을 한번에 바꿀 수 없나요?**
A. 배열 이름은 그 자체로 메모리의 첫 주소(상수 포인터)이기 때문에 대입 연산자(\`=\`)로 통째로 변경할 수 없습니다. 반드시 \`strcpy()\` 함수를 사용하여 내부 문자를 하나씩 복사해야 합니다.
`
  },
  {
    order_index: 13,
    slug: 'ch13-structures',
    title: '구조체(Structure)와 사용자 정의 타입',
    seo_title: 'C 언어 구조체(struct) 사용법 - 다양한 자료형 묶기, typedef, 구조체 배열',
    seo_description: '서로 다른 타입의 변수들을 하나로 묶어 사용자 정의 타입을 만드는 구조체(struct)의 선언, 점 연산자(.), typedef 닉네임 지정, 구조체 배열을 알아봅니다.',
    excerpt: '학생 정보(이름, 학번, 성적)처럼 관련 있는 여러 자료형의 데이터를 하나의 커스텀 타입으로 묶어서 다루는 구조체(Structure)의 개념을 다룹니다.',
    content_md: `**구조체(Structure)**는 **서로 다른 자료형의 변수들을 하나로 묶어서** 개발자가 새로 만드는 **사용자 정의 자료형**입니다.

---

## 1. 구조체 정의 및 변수 사용법

\`\`\`c
#include <stdio.h>
#include <string.h>

// 1. 구조체 틀 정의
struct Student {
    char name[20];
    int age;
    double gpa;
};

int main(void) {
    // 2. 구조체 변수 선언
    struct Student s1;

    // 3. 멤버 접근 (점 연산자 . 사용)
    strcpy(s1.name, "홍길동");
    s1.age = 20;
    s1.gpa = 4.2;

    printf("학생 이름: %s, 나이: %d, 평점: %.1f\\n", s1.name, s1.age, s1.gpa);
    return 0;
}
\`\`\`

---

## 2. \`typedef\` 키워드로 더 간결하게 사용하기

\`typedef\`를 활용하면 매번 \`struct Student\`라고 적지 않고 간결한 별칭(Alias)으로 사용 가능합니다.

\`\`\`c
typedef struct {
    int x;
    int y;
} Point; // 이제 'Point' 자체가 타입 이름이 됩니다.

Point p1 = {10, 20};
\`\`\`

---

## 3. 구조체 포인터와 화살표 연산자 (\`->\`)

구조체 변수의 주소를 포인터로 가리킬 때는 **화살표 연산자(\`->\`)**를 사용해 멤버에 간편하게 접근할 수 있습니다.

\`\`\`c
Point p = {30, 40};
Point *ptr = &p;

printf("X 좌표: %d\\n", ptr->x); // (*ptr).x 와 동일한 표현
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 구조체 메모리 크기가 각 멤버 크기의 합보다 더 크게 나오는 이유는 무엇인가요?**
A. CPU가 메모리를 읽을 때 4byte 또는 8byte 단위로 접근하기 용이하도록 컴파일러가 빈 공간(Padding Byte)을 채워 정렬하는 **구조체 패딩(Structure Padding)** 현상 때문입니다.
`
  },
  {
    order_index: 14,
    slug: 'ch14-advanced-pointers',
    title: '포인터 심화와 활용 (이중 포인터, 함수 포인터)',
    seo_title: 'C 언어 심화 포인터 - 이중 포인터(**), 배열 포인터, 함수 포인터(Function Pointer)',
    seo_description: '포인터의 포인터인 이중 포인터(**), 2차원 배열과 포인터의 관계, 그리고 함수의 메모리 주소를 가리켜 동적 호출을 돕는 함수 포인터를 쉽게 다룹니다.',
    excerpt: '포인터의 주소를 저장하는 이중 포인터(**), 2차원 배열과 배열 포인터의 관계, 함수를 변수처럼 전달하는 함수 포인터의 핵심을 정리합니다.',
    content_md: `포인터를 제대로 활용하면 **이중 포인터**, **배열 포인터**, **함수 포인터** 등 메모리를 아주 유연하게 제어하는 심화 기법을 사용할 수 있습니다.

---

## 1. 이중 포인터 (Pointer to Pointer)

이중 포인터(\`**\`)는 **"포인터 변수의 주소"**를 저장하는 변수입니다.

\`\`\`c
#include <stdio.h>

int main(void) {
    int num = 100;
    int *p = &num;   // 1차 포인터
    int **pp = &p;   // 2차 이중 포인터

    printf("num = %d\\n", num);   // 100
    printf("*p  = %d\\n", *p);    // 100
    printf("**pp = %d\\n", **pp);  // 100
    return 0;
}
\`\`\`

---

## 2. 포인터 배열 vs 배열 포인터

- **포인터 배열 (\`int *arr[3]\`)**: 포인터 3개를 묶은 배열 (포인터들의 모음).
- **배열 포인터 (\`int (*arr)[3]\`)**: 3개짜리 배열 전체를 가리키는 단일 포인터.

---

## 3. 함수 포인터 (Function Pointer)

함수도 실행 코드가 메모리에 탑재되므로 주소가 존재합니다. **함수의 주소를 저장하여 함수를 변수처럼 호출하거나 매개변수로 전달**할 수 있습니다.

\`\`\`c
#include <stdio.h>

int add(int a, int b) { return a + b; }

int main(void) {
    // 반환타입 (*함수포인터이름)(매개변수타입)
    int (*func_ptr)(int, int) = add;

    int result = func_ptr(10, 20); // 함수 포인터로 add 호출
    printf("결과: %d\\n", result); // 30
    return 0;
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 이중 포인터는 실무에서 주로 언제 쓰이나요?**
A. 함수 내부에서 외부의 포인터 변수 값(가리키는 주소 자체)을 직접 변경하고 싶을 때(예: 동적 메모리 재할당 함수, 연결 리스트 Head 노드 변경) 사용합니다.
`
  },
  {
    order_index: 15,
    slug: 'ch15-file-io-and-streams',
    title: '스트림과 파일 입출력 (fopen, fclose, fread, fwrite)',
    seo_title: 'C 언어 파일 입출력 총정리 - FILE 포인터, fopen, fclose, fprintf, 바이너리 입출력',
    seo_description: '프로그램이 꺼져도 데이터를 보존하는 파일 입출력! FILE 포인터, fopen 모드(r, w, a), fprintf, fscanf 및 바이너리 fread, fwrite 사용법을 다룹니다.',
    excerpt: '프로그램 실행이 끝나도 데이터를 영구히 보관하기 위한 하드디스크 파일 입출력(File I/O)과 스트림(Stream)의 개념을 학습합니다.',
    content_md: `프로그램이 종료되어도 데이터를 영구히 저장하려면 보조기억장치의 **파일(File)**에 기록해야 합니다. C 언어는 **스트림(Stream)**이라는 데이터 통로를 통해 파일 입출력을 처리합니다.

---

## 1. 파일 입출력 3단계 필수 순서

1. **파일 열기 (\`fopen\`)**: 파일과 프로그램 사이에 통로(스트림) 연결 및 \`FILE*\` 포인터 반환.
2. **읽기/쓰기 작업**: \`fprintf\`, \`fscanf\`, \`fputs\`, \`fgets\` 등 수행.
3. **파일 닫기 (\`fclose\`)**: 사용이 끝난 스트림 자원을 해제.

---

## 2. 파일 텍스트 쓰기 / 읽기 예시

\`\`\`c
#include <stdio.h>

int main(void) {
    // 1. 파일 열기 (쓰기 모드 'w')
    FILE *fp = fopen("data.txt", "w");
    if (fp == NULL) {
        printf("파일 열기 실패!\\n");
        return 1;
    }

    // 2. 파일에 기록
    fprintf(fp, "이름: %s, 점수: %d\\n", "이인상", 100);

    // 3. 파일 닫기
    fclose(fp);
    printf("data.txt에 데이터가 저장되었습니다.\\n");
    return 0;
}
\`\`\`

---

## 3. 대표적인 파일 오픈 모드 (Mode)

| 모드 | 의미 | 파일이 없을 때 | 파일이 이미 있을 때 |
| :--- | :--- | :--- | :--- |
| **\`"r"\`** | 읽기 전용 (Read) | 에러 (\`NULL\` 반환) | 정상 열림 |
| **\`"w"\`** | 쓰기 전용 (Write) | 새 파일 생성 | **기존 내용을 싹 덮어씀(삭제)** |
| **\`"a"\`** | 추가 쓰기 (Append) | 새 파일 생성 | 기존 내용 뒤에 덧붙임 |
| **\`"rb" / "wb"\`** | 바이너리 입출력 모드 | 이진 파일 전용 | 이진 파일 전용 |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파일 작업이 끝나고 \`fclose()\`를 안 부르면 어떻게 되나요?**
A. 버퍼에 남아있는 데이터가 파일에 완전히 반영되지 못해 짤리거나, 시스템 자원(파일 핸들)이 낭비되는 메모리/스트림 누수가 발생할 수 있습니다.
`
  },
  {
    order_index: 16,
    slug: 'ch16-preprocessor-and-multi-files',
    title: '전처리기 매크로와 다중 소스 파일',
    seo_title: 'C 언어 전처리기와 다중 파일 분할 - #include, #define 매크로, 조건부 컴파일',
    seo_description: '컴파일 전 코드를 다듬는 전처리기 지시자(#include, #define, #ifdef), 매크로 함수, 프로젝트 소스 파일 분할과 헤더 중복 방지 지시자를 익힙니다.',
    excerpt: '컴파일 전에 소스 코드를 사전 가공하는 전처리 지시자(#include, #define)와 프로젝트 코드를 여러 파일로 모듈화 분할하는 기법을 배웁니다.',
    content_md: `**전처리기(Preprocessor)**는 실제 컴파일러가 C 코드를 기계어로 번역하기 직전에, 소스 코드를 미리 재구성하고 정돈하는 사전 처리 도구입니다.

---

## 1. 대표적인 전처리기 지시자

- **\`#include <header.h>\`**: 표준 라이브러리 헤더 파일을 가져옵니다.
- **\`#include "myheader.h"\`**: 사용자가 직접 작성한 헤더 파일을 가져옵니다.
- **\`#define 상수이름 값\`**: 매크로 상수를 정의합니다.
- **\`#define SQUARE(x) ((x)*(x))\`**: 매크로 함수를 정의합니다.

---

## 2. 매크로 상수의 활용

\`\`\`c
#include <stdio.h>
#define PI 3.141592
#define MAX_SIZE 100

int main(void) {
    double radius = 5.0;
    double area = PI * radius * radius;
    printf("원 넓이: %.2f\\n", area);
    return 0;
}
\`\`\`

---

## 3. 헤더 파일 중복 포함 방지 (Include Guard)

다중 파일 프로젝트에서 동일한 헤더 파일이 여러 번 선언되어 발생하는 중복 정의 오류를 막기 위해 Include Guard 구문을 사용합니다.

\`\`\`c
#ifndef MY_HEADER_H
#define MY_HEADER_H

// 구조체 선언 및 함수 원형 선언들
void myFunction(void);

#endif
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 매크로 함수와 일반 함수의 차이는 무엇인가요?**
A. 일반 함수는 호출 시 스택 메모리를 사용해 오버헤드가 발생하지만, 매크로 함수는 컴파일 전에 코드 자체가 그 자리에 그대로 치환(확장)되므로 속도가 매우 빠릅니다. 단, 복잡한 인자 전달 시 괄호 미사용으로 인한 계산 오류가 발생하기 쉽습니다.
`
  },
  {
    order_index: 17,
    slug: 'ch17-dynamic-memory-and-linked-list',
    title: '동적 메모리 할당과 기초 자료구조',
    seo_title: 'C 언어 동적 메모리 할당 - malloc, free, free 누수 방지 및 단일 연결 리스트',
    seo_description: '실행 중 메모리 크기를 자유롭게 할당받는 malloc, calloc, realloc과 사용 후 해제하는 free의 중요성, 그리고 단일 연결 리스트 구현을 체계적으로 다룹니다.',
    excerpt: '프로그램 실행 중에 힙(Heap) 메모리 공간을 원하는 크기만큼 할당받는 malloc()과 free()의 사용법, 메모리 누수 방지 및 기초 연결 리스트 구현을 다룹니다.',
    content_md: `정적 배열은 프로그램 실행 전에 크기가 고정되지만, **동적 메모리 할당(Dynamic Memory Allocation)**을 이용하면 프로그램 실행 중에 필요한 만큼 **힙(Heap)** 메모리 공간을 원하는 크기로 할당받을 수 있습니다.

---

## 1. 동적 메모리 할당 4대 함수 (\`<stdlib.h>\`)

- **\`malloc(byte_size)\`**: 지정한 바이트 수만큼 힙 메모리를 할당 (초기화 안 됨).
- **\`calloc(num, size)\`**: 지정한 크기의 메모리를 할당하고 **모든 비트를 0으로 자동 초기화**.
- **\`realloc(ptr, new_size)\`**: 이미 할당된 메모리의 크기를 확장하거나 축소.
- **\`free(ptr)\`**: 할당받아 사용이 끝난 메모리를 **힙 공간에 반납해 해제**.

---

## 2. \`malloc\` 과 \`free\` 사용 표준 코드

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int size = 5;
    // 1. int 5개 크기(20 Bytes) 동적 할당
    int *arr = (int *)malloc(sizeof(int) * size);

    if (arr == NULL) { // 메모리 할당 실패 검사
        printf("메모리 할당 실패!\\n");
        return 1;
    }

    // 2. 메모리 사용
    for (int i = 0; i < size; i++) {
        arr[i] = (i + 1) * 10;
        printf("%d ", arr[i]);
    }
    printf("\\n");

    // 3. 반드시 메모리 해제!
    free(arr);
    arr = NULL; // 가리키던 포인터 초기화 (Dangling Pointer 방지)
    return 0;
}
\`\`\`

---

## 3. 메모리 누수 (Memory Leak) 주의사항

\`malloc()\`으로 할당받은 주소를 \`free()\`로 해제하지 않고 프로그램을 계속 돌리면, 사용하지 않는 힙 메모리가 계속 쌓여 컴퓨터 메모리가 부족해지는 **메모리 누수(Memory Leak)** 현상이 발생합니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 허공을 가리키는 포인터(Dangling Pointer)란 무엇인가요?**
A. \`free(ptr)\`로 메모리를 해제한 후에도 \`ptr\` 변수에는 이전 메모리 주소가 그대로 남아있습니다. 이 해제된 주소를 다시 참조하려고 접근하면 튕김 사고가 나므로, \`free()\` 실행 즉시 \`ptr = NULL;\` 로 비워두는 습관이 매우 중요합니다.
`
  }
];

// Split into 3 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 6),
  lessons.slice(6, 12),
  lessons.slice(12, 17)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Seed C-Basics Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const content_html = marked.parse(lesson.content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'c-basics',
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

  fs.writeFileSync(`scratch/seed_c_basics_part${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 3 SQL chunk files for C-Basics!');
