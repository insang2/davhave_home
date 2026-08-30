import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  {
    order_index: 1,
    slug: 'ch01-java-jvm-and-environment',
    title: '자바(Java) 언어의 특징과 JVM, OpenJDK 및 개발 환경 구축',
    seo_title: '자바 입문 가이드 - JVM 메모리 구조, OpenJDK 설치 및 이클립스 개발 환경',
    seo_description: '자바 언어의 4대 특징, 가상 머신 JVM(Heap, Stack, Method Area) 작동 원리, OpenJDK 설치 및 이클립스(Eclipse) 통합 개발 환경 구축을 해설합니다.',
    excerpt: 'WORA(Write Once, Run Anywhere) 특징을 갖춘 자바 프로그래밍 언어의 기본 구조, JVM 가상 머신 작동 원리 및 이클립스 개발 환경 구축을 학습합니다.',
    content_md: `**자바(Java)**는 1995년 선 마이클로시스템즈(Sun Microsystems, 현 오라클)의 제임스 고슬링(James Gosling)에 의해 개발된 **객체지향 프로그래밍 언어(OOP)**입니다. "WORA (Write Once, Run Anywhere - 한 번 작성하면 어디서나 실행된다)"라는 슬로건처럼 플랫폼 독립적인 운영체제 이식성을 자랑합니다.

---

## 1. 자바 핵심 전문 용어 사전 (Glossary)

- **JVM (Java Virtual Machine)**: 자바 바이트코드를 읽어 해당 운영체제(Windows, macOS, Linux)에 맞는 기계어로 번역하여 실행하는 가상 머신입니다.
- **JDK (Java Development Kit)**: 자바 개발을 위한 컴파일러(\`javac\`), 디버거, 표준 라이브러리 패키지가 포함된 개발 키트입니다.
- **JRE (Java Runtime Environment)**: 자바 프로그램을 실행하기만 할 때 필요한 환경으로, JVM과 자바 클래스 라이브러리가 포함되어 있습니다. (JDK 설치 시 포함)
- **Bytecode (바이트코드)**: 자바 컴파일러(\`javac\`)가 소스코드(\`.java\`)를 컴파일하여 생성한 반제품 명령어 파일(\`.class\`)입니다.
- **Garbage Collector (GC, 가비지 컬렉터)**: 메모리의 Heap 영역에서 더 이상 참조되지 않는 불필요한 객체들을 자동으로 탐지하여 해제하는 메모리 관리 스레드입니다.

---

## 2. JVM 메모리 구조 3대 영역 (Memory Architecture)

1. **메소드 영역 (Method Area / Metaspace)**: 클래스 정보, static 변수, 메소드 바이트코드, 상수가 상주하는 공유 메모리 구역입니다.
2. **힙 영역 (Heap Area)**: \`new\` 연산자에 의해 동적으로 생성된 모든 객체(Object)와 배열이 저장되는 구역으로, 가비지 컬렉션(GC)의 주요 대상입니다.
3. **스택 영역 (Stack Area)**: 메소드 호출 시 생성되는 프레임(Stack Frame) 공간으로, 지역 변수, 매개변수, 메소드 리턴 값이 저장되며 메소드가 종료되면 즉시 소멸합니다.

---

## 3. 자바 Hello World 첫 스케치 프로그램

\`\`\`java
/*
  파일명: HelloJava.java
  설명: 첫 번째 자바 클래스 선언 및 콘솔 출력
*/

public class HelloJava {
    // 자바 애플리케이션의 시작점(Entry Point) 메인 메소드
    public static void main(String[] args) {
        System.out.println("Hello, DAVHAVE Java World!");
        System.out.println("자바 프로그래밍의 세계에 오신 것을 환영합니다.");
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파일 이름과 클래스 이름이 다르면 왜 컴파일 에러가 나나요?**
A. 자바 파일 내에 \`public\` 접근 제어자로 선언된 클래스가 있다면, 파일 이름은 반드시 그 \`public\` 클래스 이름과 소문자/대문자까지 정확히 일치해야 하는 언어 규약이 있습니다.
`
  },
  {
    order_index: 2,
    slug: 'ch02-variables-data-types-operators',
    title: '변수, 기본 자료형 및 연산자 완벽 해설',
    seo_title: '자바 변수와 기본 자료형 - Primitive Type vs Reference Type 및 연산자',
    seo_description: '8가지 기본 자료형(Primitive Types), 참조 자료형(Reference Type)의 차이, 형변환(Casting), 연산자 우선순위와 실전 활용법을 배웁니다.',
    excerpt: '자바의 8가지 기본 자료형(int, double, char, boolean 등)과 참조 자료형의 차이, 자동/강제 형변환 및 연산자 활용법을 다룹니다.',
    content_md: `프로그램에서 데이터를 저장하는 메모리 공간인 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**의 개념을 학습합니다.

---

## 1. 변수 & 자료형 용어 사전 (Glossary)

- **Primitive Type (기본 자료형)**: 실제 산술/논리 데이터 값을 메모리 스택 영역에 직접 보관하는 8가지 기본 데이터 타입입니다.
- **Reference Type (참조 자료형)**: 데이터 객체의 실제 내용은 Heap 메모리에 두고, 그 주소(Address) 값만을 스택 변수에 보관하는 데이터 타입입니다. (String, Array, Class 등)
- **Casting (형변환)**: 하나의 자료형을 다른 자료형으로 바꾸는 연산입니다. (자동 형변환 vs 강제 형변환)
- **Overflow / Underflow**: 표현할 수 있는 최대/최소 한계 범위를 넘어서 반대쪽 최댓값/최솟값으로 순환해버리는 오류 현상입니다.

---

## 2. 자바 8대 기본 자료형 (Primitive Data Types)

| 종류 | 타입 키워드 | 메모리 크기 | 데이터 표현 범위 및 예시 |
| :--- | :--- | :--- | :--- |
| **논리형** | \`boolean\` | 1 byte | \`true\` 또는 \`false\` |
| **문자형** | \`char\` | 2 bytes | 유니코드(Unicode) 1문자 (예: \`'A'\`, \`'가'\`) |
| **정수형** | \`byte\` | 1 byte | $-128 \\sim 127$ |
| | \`short\` | 2 bytes | $-32,768 \\sim 32,767$ |
| | \`int\` | 4 bytes | $-21\\text{억} \\sim 21\\text{억}$ (기본 정수형) |
| | \`long\` | 8 bytes | $-9 \\times 10^{18} \\sim 9 \\times 10^{18}$ (리터럴 뒤 \`L\` 붙임) |
| **실수형** | \`float\` | 4 bytes | 소수점 약 7자리 정밀도 (리터럴 뒤 \`F\` 붙임) |
| | \`double\` | 8 bytes | 소수점 약 15자리 정밀도 (기본 실수형) |

---

## 3. 형변환과 연산자 실전 예제

\`\`\`java
public class DataTypeExample {
    public static void main(String[] args) {
        int a = 10;
        double b = 3.14;
        
        // 1. 자동 형변환 (Promotion): 작은 타입 -> 큰 타입
        double result1 = a + b; // int가 double로 자동 변환 (10.0 + 3.14)
        System.out.println("자동 형변환 결과: " + result1);

        // 2. 강제 형변환 (Casting): 큰 타입 -> 작은 타입
        int result2 = (int) b; // double 소수점이 손실되고 3만 남아 저장됨
        System.out.println("강제 형변환 결과: " + result2);

        // 3. 삼항 연산자 (Ternary Operator)
        int score = 85;
        String passStatus = (score >= 80) ? "합격" : "불합격";
        System.out.println("시험 결과: " + passStatus);
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`float f = 3.14;\` 라고 적으면 왜 컴파일 에러가 나나요?**
A. 자바는 실수를 적으면 기본적으로 \`double\`(8바이트) 타입으로 인지합니다. 4바이트 \`float\` 변수에 넣으려면 뒤에 접미사 \`F\`를 붙여 \`float f = 3.14F;\` 로 작성해야 합니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-control-flow-and-arrays',
    title: '제어문과 반복문 및 배열(Array)과 예외 처리',
    seo_title: '자바 제어문과 배열 - if, switch, for, while, 배열 및 try-catch 예외 처리',
    seo_description: '조건 제어문(if, switch-case), 반복 제어문(for, enhanced-for, while), 1차원/2차원 배열 구조 및 try-catch-finally 예외 처리 기법을 학습합니다.',
    excerpt: '프로그램 실행 흐름을 제어하는 조건문과 반복문, 연속된 데이터를 다루는 배열(Array)과 안전한 프로그램 구동을 위한 예외 처리(Exception)를 배웁니다.',
    content_md: `프로그램의 논리 실행 흐름을 통제하는 **조건문/반복문**과 여러 데이터를 묶어 관리하는 **배열(Array)**, 런타임 오류에 대비하는 **예외 처리(Exception Handling)**를 익힙니다.

---

## 1. 제어문 & 예외 처리 용어 사전 (Glossary)

- **Enhanced for (향상된 for문)**: 배열이나 컬렉션의 요소들을 인덱스 없이 처음부터 끝까지 순회하는 직관적인 반복문 구문입니다. (\`for(Type item : array)\`)
- **Array (배열)**: 동일한 자료형의 변수 여러 개를 연속된 메모리 공간에 묶어놓은 고정 길이 객체입니다.
- **NullPointerException (NPE)**: 객체 참조 변수가 아무것도 가리키지 않는 \`null\` 상태일 때 메소드나 멤버에 접근하려 하면 발생하는 代表 런타임 예외입니다.
- **try-catch-finally**: 런타임 예외가 발생하더라도 프로그램이 비정상 종료되지 않도록 예외를 포획하고 마무리 리소스 자원을 해제하는 블록 구문입니다.

---

## 2. 배열과 향상된 for문 활용 예제

\`\`\`java
public class ArrayExample {
    public static void main(String[] args) {
        // 정수형 배열 선언 및 초기화
        int[] scores = {90, 85, 95, 100, 78};
        int sum = 0;

        // 향상된 for문 (Enhanced for-loop) 순회
        for (int score : scores) {
            sum += score;
        }

        double average = (double) sum / scores.length;
        System.out.println("성적 합계: " + sum + "점");
        System.out.printf("성적 평균: %.2f점\n", average);
    }
}
\`\`\`

---

## 3. try-catch-finally 예외 처리 실전 가이드

\`\`\`java
public class ExceptionExample {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30};

        try {
            System.out.println("배열 요소 읽기: " + numbers[5]); // IndexOutOfBoundsException 발생!
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("경고: 존재하지 않는 배열 인덱스에 접근했습니다!");
            System.err.println("에러 메시지: " + e.getMessage());
        } finally {
            // 예외 발생 여부와 상관없이 항상 마무리를 위해 실행되는 구역
            System.out.println("안전하게 예외 처리 구문이 종료되었습니다.");
        }
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Checked Exception과 Unchecked Exception의 차이는 무엇인가요?**
A. \`Checked Exception\`(예: \`IOException\`, \`SQLException\`)은 반드시 코드상에서 try-catch나 \`throws\`로 예외 처리를 해야만 컴파일이 되며, \`Unchecked Exception\`(\`RuntimeException\` 상속 클래스들)은 개발자의 주의로 회피 가능한 예외로 컴파일러가 강제하지 않습니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-object-oriented-classes-methods',
    title: '객체지향 프로그래밍 기초: 클래스, 객체, 메소드',
    seo_title: '자바 OOP 기초 - 클래스(Class), 객체(Object), 생성자(Constructor), 접근제어자',
    seo_description: '객체지향 4대 요소, 클래스와 인스턴스의 개념, 생성자 오버로딩, 정보 은닉을 위한 접근 제어자(private, public) 및 Getter/Setter 작성을 해설합니다.',
    excerpt: '객체지향 프로그래밍(OOP)의 핵심인 클래스(Class)와 인스턴스 객체의 차이, 생성자, 메소드 오버로딩 및 접근 제어자를 활용한 정보 은닉(Encapsulation)을 학습합니다.',
    content_md: `객체지향 프로그래밍(Object-Oriented Programming)은 현실 세계의 사물과 행동을 **객체(Object)**라는 단위로 모델링하여 프로그램을 만드는 소프트웨어 패러다임입니다.

---

## 1. 객체지향 기초 용어 사전 (Glossary)

- **Class (클래스)**: 객체를 만들어내기 위한 설계도(Blueprint) 또는 붕어빵 틀입니다.
- **Object / Instance (객체/인스턴스)**: 클래스 설계도를 바탕으로 메모리의 Heap 영역에 \`new\` 키워드로 생성된 실체입니다.
- **Encapsulation (캡슐화)**: 데이터(필드)와 기능(메소드)을 하나로 묶고, 외부에서 함부로 접근하지 못하도록 보호하는 정보 은닉(Data Hiding) 기술입니다.
- **Constructor (생성자)**: 객체가 생성되는 순간 단 한 번 호출되어 필드 변수들을 초기화하는 특별한 메소드입니다.
- **Access Modifier (접근 제어자)**: 클래스, 필드, 메소드의 접근 허용 범위를 통제하는 키워드입니다. (\`private\`, \`default\`, \`protected\`, \`public\`)

---

## 2. 접근 제어자(Access Modifier) 허용 범위 비교

| 접근 제어자 | 같은 클래스 | 같은 패키지 | 자식 클래스 (다른 패키지) | 전체 공개 |
| :--- | :---: | :---: | :---: | :---: |
| **\`private\`** | ⭕ | ❌ | ❌ | ❌ |
| **\`(default)\`** | ⭕ | ⭕ | ❌ | ❌ |
| **\`protected\`** | ⭕ | ⭕ | ⭕ | ❌ |
| **\`public\`** | ⭕ | ⭕ | ⭕ | ⭕ |

---

## 3. 캡슐화가 적용된 자바 클래스 설계 예제

\`\`\`java
public class Student {
    // 1. private 필드 정보 은닉
    private String name;
    private int studentId;
    private int score;

    // 2. 생성자 (Constructor)
    public Student(String name, int studentId, int score) {
        this.name = name;
        this.studentId = studentId;
        setScore(score); // 검증 로직이 포함된 Setter 호출
    }

    // 3. Getter / Setter 메소드
    public String getName() { return name; }
    public int getScore() { return score; }

    public void setScore(int score) {
        if (score < 0 || score > 100) {
            System.out.println("잘못된 점수 범위입니다. 0점으로 설정합니다.");
            this.score = 0;
        } else {
            this.score = score;
        }
    }

    public void printInfo() {
        System.out.println("학번: " + studentId + " | 이름: " + name + " | 성적: " + score + "점");
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`this\` 키워드는 언제 사용하나요?**
A. 메소드나 생성자의 매개변수 이름과 클래스의 필드(멤버 변수) 이름이 동일할 때, 자기 자신 객체의 인스턴스 필드임을 명확히 구별 지어 지정하기 위해 사용합니다. (\`this.name = name;\`)
`
  },
  {
    order_index: 5,
    slug: 'ch05-inheritance-polymorphism-interfaces',
    title: '상속(Inheritance), 다형성과 추상 클래스/인터페이스',
    seo_title: '자바 상속과 다형성 - extends, super, 메소드 오버라이딩, abstract 및 interface',
    seo_description: '클래스 재사용을 돕는 상속(extends), 부모 메소드 재정의(Overriding), 다형성(Polymorphism), 추상 클래스(abstract)와 인터페이스(interface)의 차이를 해설합니다.',
    excerpt: '코드의 재사용성과 확장성을 극대화하는 상속(Inheritance)과 오버라이딩, 객체지향 설계의 핵심 다형성(Polymorphism) 및 인터페이스 다중 구현을 학습합니다.',
    content_md: `기존 클래스의 속성과 기능을 물려받아 재사용하는 **상속(Inheritance)**과 하나의 객체가 다양한 타입을 가질 수 있는 **다형성(Polymorphism)**, **인터페이스(Interface)**를 배웁니다.

---

## 1. OOP 핵심 심화 용어 사전 (Glossary)

- **Inheritance (상속)**: 부모 클래스(Super Class)의 멤버들을 자식 클래스(Sub Class)가 물려받아 확장(\`extends\`)하는 개념입니다.
- **Overriding (메소드 오버라이딩)**: 부모 클래스로부터 물려받은 메소드의 동작을 자식 클래스에서 목적에 맞게 재정의하는 기술입니다. (\`@Override\` 어노테이션)
- **Polymorphism (다형성)**: 부모 클래스 타입의 참조 변수로 여러 자식 객체들을 가리키고 통합 제어할 수 있는 객체지향적 성질입니다.
- **Abstract Class (추상 클래스)**: 하나 이상의 추상 메소드(\`abstract method\`)를 포함하는 미완성 설계도 클래스로, 직접 객체 생성이 불가능합니다.
- **Interface (인터페이스)**: 클래스가 반드시 구현해야 하는 표준 명세서로, 자바에서 다중 구현(\`implements\`)을 지원합니다.

---

## 2. 인터페이스와 다형성 구현 예제

\`\`\`java
// 1. 공통 인터페이스 표준 정의
interface Printable {
    void print(String doc); // 추상 메소드
}

// 2. 구현 클래스 A (HP 프린터)
class HpPrinter implements Printable {
    @Override
    public void print(String doc) {
        System.out.println("[HP 잉크젯 인쇄]: " + doc);
    }
}

// 3. 구현 클래스 B (삼성 레이저 프린터)
class SamsungPrinter implements Printable {
    @Override
    public void print(String doc) {
        System.out.println("[삼성 레이저 인쇄]: " + doc);
    }
}

// 4. 다형성 활용 테스트
public class PolymorphismMain {
    public static void main(String[] args) {
        // 부모 인터페이스 타입으로 서로 다른 자식 객체 가리키기 (다형성)
        Printable p1 = new HpPrinter();
        Printable p2 = new SamsungPrinter();

        p1.print("보고서.pdf");
        p2.print("계약서.docx");
    }
}
\`\`\`

---

## 3. 추상 클래스 vs 인터페이스 비교표

| 비교 항목 | 추상 클래스 (Abstract Class) | 인터페이스 (Interface) |
| :--- | :--- | :--- |
| **선언 키워드** | \`abstract class\` | \`interface\` |
| **상속/구현 키워드** | \`extends\` (단일 상속만 가능) | \`implements\` (다중 구현 가능) |
| **필드 변수** | 일반 멤버 변수 선언 가능 | 상수만 가능 (\`public static final\`) |
| **목적** | 연관성이 높은 클래스 간의 코드 재사용 | 연관성이 다른 클래스 간의 기능 표준 명세 규격 |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 자바에서 클래스는 왜 다중 상속(\`extends ClassA, ClassB\`)을 지원하지 않나요?**
A. 두 부모 클래스에 동일한 이름의 메소드가 존재할 경우 어느 메소드를 호출해야 할지 모호해지는 **다이아몬드 상속 문제(Diamond Problem)**를 예방하기 위해 다중 상속을 금지하고 인터페이스 다중 구현을 지원합니다.
`
  },
  {
    order_index: 6,
    slug: 'ch06-packages-modules-java-lang',
    title: '패키지, 모듈 시스템과 자바 기본 패키지 (java.lang)',
    seo_title: '자바 패키지와 java.lang - Object, String, StringBuilder, Math, Wrapper',
    seo_description: '클래스 관리 도구 패키지(Package)와 모듈(Module), 최상위 조상 Object 클래스(equals, hashCode, toString), String 연산 성능과 StringBuilder, Wrapper 클래스를 해설합니다.',
    excerpt: '클래스 네임스페이스를 관리하는 패키지와 자바의 최상위 조상 클래스 Object, 문자열 불변성(Immutable)과 StringBuilder, 기본 패키지 유틸리티를 학습합니다.',
    content_md: `클래스들의 충돌을 방지하고 그룹화하는 **패키지(Package)**와 자바 프로그램의 근간을 이루는 최상위 **\`java.lang\` 패키지의 핵심 클래스들**을 학습합니다.

---

## 1. 기본 패키지 핵심 용어 사전 (Glossary)

- **Package (패키지)**: 관련 있는 클래스와 인터페이스들을 폴더 구역 단위로 그룹화하여 이름 충돌을 방지하는 네임스페이스입니다.
- **java.lang**: 자바 프로그램 실행 시 \`import\` 구문 없이도 자동으로 불러와지는 가장 기본적이고 필수적인 표준 패키지입니다.
- **Object Class**: 자바의 모든 클래스가 직간접적으로 상속받는 최상위 으뜸 부모 클래스입니다.
- **String Immutability (문자열 불변성)**: 자바의 \`String\` 객체는 생성 후 내부 문자열 값을 수정할 수 없으며, 변경 시 새로운 객체가 생성되는 성질입니다.
- **StringBuilder / StringBuffer**: 문자열을 빈번하게 결합/수정할 때 메모리 낭비를 줄여주는 가변(Mutable) 문자열 버퍼 클래스입니다.
- **Wrapper Class**: 기본 자료형(\`int\`, \`double\` 등)을 객체 형태로 포장해 주는 클래스입니다. (\`Integer\`, \`Double\` 등 - Auto-Boxing / Unboxing 지원)

---

## 2. \`String\` 불변성과 \`StringBuilder\` 성능 비교

\`\`\`java
public class StringPerformance {
    public static void main(String[] args) {
        // 1. String 덧셈 연산 (매번 새 객체 생성으로 메모리 비효율)
        String str = "Hello";
        str += " World"; // 새로운 객체 가리킴
        System.out.println("String 결과: " + str);

        // 2. StringBuilder 활용 (동일 버퍼 내 텍스트 갱신 - 속도 100배 가량 빠름)
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        sb.append(" World");
        sb.append("!");
        System.out.println("StringBuilder 결과: " + sb.toString());
    }
}
\`\`\`

---

## 3. \`Object\` 클래스의 3대 필수 오버라이딩 메소드

1. **\`equals(Object obj)\`**: 두 객체의 참조 주소가 아닌 **실제 데이터 내용이 같은지 비교**하도록 오버라이딩.
2. **\`hashCode()\`**: 객체의 고유한 해시코드 정수값을 반환. (\`HashMap\`, \`HashSet\` 사용 시 \`equals\`와 함께 오버라이딩 필수!)
3. **\`toString()\`**: 객체의 상태 정보를 읽기 쉬운 문자열 텍스트로 반환.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`String a = "hi";\` 와 \`String b = new String("hi");\` 의 차이는?**
A. 리터럴 방식(\`"hi"\`)은 Heap 영역의 **String Constant Pool**에 생성되어 동일 문자열을 공유하지만, \`new String()\`은 무조건 독립된 새로운 Heap 객체 메모리를 할당합니다.
`
  },
  {
    order_index: 7,
    slug: 'ch07-generics-and-collection-framework',
    title: '제네릭(Generics)과 컬렉션 프레임워크',
    seo_title: '자바 컬렉션 프레임워크 - ArrayList, LinkedList, HashSet, HashMap, 제네릭',
    seo_description: '타입 안정성을 높이는 제네릭(Generics), 자바 3대 컬렉션 List(ArrayList), Set(HashSet), Map(HashMap) 자료구조의 원리와 사용법을 완전 해설합니다.',
    excerpt: '컴파일 시점에 타입을 강제하는 제네릭(Generics)과 대표적 자료구조인 List(ArrayList), Set(HashSet), Map(HashMap)의 사용법 및 성능 특성을 학습합니다.',
    content_md: `자바에서 대용량 데이터를 효율적으로 저장, 삭제, 검색, 정렬하기 위해 제공하는 표준 자료구조 패키지인 **컬렉션 프레임워크(Collection Framework)**를 배웁니다.

---

## 1. 컬렉션 & 제네릭 용어 사전 (Glossary)

- **Generics (제네릭)**: 클래스나 메소드에서 사용할 데이터 타입을 컴파일 시점에 지정하여 형변환(Casting) 오류를 예방하는 타입 안정성 기술입니다. (예: \`ArrayList<String>\`)
- **List Interface**: 순서가 존재하며, 동일한 중복 데이터를 허용하는 선형 자료구조입니다. (예: \`ArrayList\`, \`LinkedList\`)
- **Set Interface**: 순서를 보장하지 않으며, **중복 데이터를 허용하지 않는** 집합 자료구조입니다. (예: \`HashSet\`, \`TreeSet\`)
- **Map Interface**: 순서 대신 **Key-Value(키-값) 쌍**으로 데이터를 저장하며, Key의 중복은 허용하지 않는 사전형 자료구조입니다. (예: \`HashMap\`, \`TreeMap\`)

---

## 2. 자바 3대 컬렉션 특성 비교표

| 컬렉션 구분 | 구현 클래스 | 순서 보장 여부 | 중복 허용 여부 | 주요 사용 목적 및 특성 |
| :--- | :--- | :---: | :---: | :--- |
| **List 계열** | \`ArrayList\` | ⭕ | ⭕ | 인덱스 기반 고속 조회($O(1)$)에 최적화 |
| | \`LinkedList\` | ⭕ | ⭕ | 중간 요소의 빈번한 삽입/삭제($O(1)$)에 최적화 |
| **Set 계열** | \`HashSet\` | ❌ | **❌ (불가)** | 데이터의 중복을 제거하고 유일성 보장 |
| **Map 계열** | \`HashMap\` | ❌ | Key 불가 / Value 허용 | Key를 이용한 초고속 데이터 검색($O(1)$) |

---

## 3. \`HashMap\` 및 \`ArrayList\` 제네릭 활용 실습

\`\`\`java
import java.util.*;

public class CollectionExample {
    public static void main(String[] args) {
        // 1. ArrayList 활용 (학생 이름 목록)
        List<String> studentList = new ArrayList<>();
        studentList.add("홍길동");
        studentList.add("이순신");
        studentList.add("강감찬");

        System.out.println("1번 학생: " + studentList.get(0));

        // 2. HashMap 활용 (학생 성적 저장)
        Map<String, Integer> scoreMap = new HashMap<>();
        scoreMap.put("홍길동", 95);
        scoreMap.put("이순신", 88);
        scoreMap.put("강감찬", 100);

        // Key 존재 여부 확인 및 조회
        if (scoreMap.containsKey("홍길동")) {
            System.out.println("홍길동의 성적: " + scoreMap.get("홍길동") + "점");
        }
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`ArrayList\`와 \`Vector\`의 차이는 무엇인가요?**
A. 두 클래스는 내부 구조가 동일하지만, \`Vector\`는 모든 메소드가 동기화(\`synchronized\`) 처리되어 멀티스레드환경에서 안전한 대신 성능이 느립니다. 단일 스레드에서는 \`ArrayList\` 사용이 표준입니다.
`
  },
  {
    order_index: 8,
    slug: 'ch08-java-io-and-file-streams',
    title: '자바 입출력(I/O) 스트림과 파일 처리',
    seo_title: '자바 I/O 스트림 - InputStream, OutputStream, Reader, Writer, BufferedReader',
    seo_description: '바이트 스트림(InputStream/OutputStream), 문자 스트림(Reader/Writer), 입출력 성능을 극대화하는 버퍼 스트림(BufferedReader)과 파일 조작을 해설합니다.',
    excerpt: '키보드, 파일, 네트워크로부터 데이터를 주고받는 자바 I/O 스트림의 원리, 바이트/문자 스트림의 차이 및 보조 스트림을 통한 고속 파일 입출력을 학습합니다.',
    content_md: `파일을 읽고 쓰거나 키보드, 네트워크 등 외부 입력/출력 장치와 데이터를 주고받는 **자바 I/O(Input/Output) 스트림** 구조를 다룹니다.

---

## 1. 입출력(I/O) 스트림 용어 사전 (Glossary)

- **Stream (스트림)**: 단방향으로 데이터가 연속적으로 이동하는 가상의 통로입니다. (FIFO 구조)
- **Byte Stream (바이트 스트림)**: 1byte 단위로 바이너리 데이터(이미지, 동영상, 음악 파일 등)를 입출력하는 스트림입니다. (\`InputStream\`, \`OutputStream\`)
- **Character Stream (문자 스트림)**: 2byte(유니코드) 단위로 텍스트 문서 데이터만 전용으로 다루는 스트림입니다. (\`Reader\`, \`Writer\`)
- **Buffered Stream (버퍼 스트림)**: 입출력 횟수를 줄이기 위해 메모리 버퍼(Buffer)를 경유시켜 입출력 성능을 10배 이상 향상시키는 보조 스트림입니다. (\`BufferedReader\`, \`BufferedWriter\`)

---

## 2. \`BufferedReader\`를 활용한 텍스트 파일 읽기 실습

\`\`\`java
import java.io.*;

public class FileReadExample {
    public static void main(String[] args) {
        File file = new File("sample.txt");

        // try-with-resources 구문을 활용하여 자동으로 스트림 close() 수행
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            System.out.println("--- [파일 내용 출력] ---");
            while ((line = br.readLine()) != null) { // 한 줄씩 읽기
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            System.err.println("에러: 읽고자 하는 파일이 존재하지 않습니다.");
        } catch (IOException e) {
            System.err.println("파일 읽기 중 입출력 오류가 발생했습니다: " + e.getMessage());
        }
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`Scanner\`와 \`BufferedReader\` 중 어느 것이 입력 속도가 빠른가요?**
A. \`BufferedReader\`가 훨씬 빠릅니다. \`Scanner\`는 정규식을 이용해 형변환 파싱을 수행하므로 느리지만, \`BufferedReader\`는 8KB 가량의 대용량 버퍼로 한 번에 읽어오므로 대용량 파일 입출력 시 압도적으로 유리합니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-lambda-expressions-and-functional-programming',
    title: '자바 람다식(Lambda Expression)과 함수형 인터페이스',
    seo_title: '자바 람다식 기초 - @FunctionalInterface, 익명 클래스, Consumer, Supplier, Function',
    seo_description: '자바 8부터 도입된 람다식(Lambda Expression) 문법, 단 하나의 추상 메소드만 갖는 함수형 인터페이스(@FunctionalInterface) 및 표준 함수형 인터페이스를 해설합니다.',
    excerpt: '함수형 프로그래밍을 지원하는 자바 람다식(Lambda) 문법과 단 하나의 추상 메소드를 가지는 함수형 인터페이스의 개념 및 활용법을 배웁니다.',
    content_md: `자바 8부터 도입되어 익명 함수(Anonymous Function)를 작성하듯 코드를 간결하게 표현할 수 있는 **람다식(Lambda Expression)**과 **함수형 인터페이스**를 학습합니다.

---

## 1. 람다식 핵심 용어 사전 (Glossary)

- **Lambda Expression (람다식)**: 메소드를 하나의 간단한 식(Expression)으로 표현한 것으로, 익명 클래스의 객체를 생성하는 간결한 문법 표현입니다.
- **Functional Interface (함수형 인터페이스)**: 단 **하나의 추상 메소드만 선언되어 있는 인터페이스**로, \`@FunctionalInterface\` 어노테이션으로 검증합니다.
- **Method Reference (메소드 참조)**: 람다식이 단 하나의 기존 메소드만 단순 호출할 때 \`Class::method\` 형태로 극도로 축약하는 표현식입니다.

---

## 2. 자바 표준 함수형 인터페이스 4종 세트

| 인터페이스 구분 | 메소드 형상 | 매개변수 | 반환값 | 주요 역할 및 특징 |
| :--- | :--- | :---: | :---: | :--- |
| **\`Consumer<T>\`** | \`void accept(T t)\` | ⭕ (있음) | ❌ (없음) | 데이터를 소비하여 출력/처리만 수행 |
| **\`Supplier<T>\`** | \`T get()\` | ❌ (없음) | ⭕ (있음) | 데이터를 생성하여 공급 및 반환 |
| **\`Function<T, R>\`** | \`R apply(T t)\` | ⭕ (있음) | ⭕ (있음) | 매개변수 T를 받아 R 타입으로 변환 및 반환 |
| **\`Predicate<T>\`** | \`boolean test(T t)\` | ⭕ (있음) | ⭕ (boolean) | 조건식을 판별하여 \`true/false\` 반환 |

---

## 3. 람다식 문법 변천사 예제

\`\`\`java
import java.util.Arrays;
import java.util.List;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("홍길동", "이순신", "강감찬");

        // 1. 기존 익명 클래스 방식 (복잡함)
        names.forEach(new java.util.function.Consumer<String>() {
            @Override
            public void accept(String name) {
                System.out.println("익명클래스: " + name);
            }
        });

        // 2. 람다식 표현 방식 (간결함)
        names.forEach(name -> System.out.println("람다식: " + name));

        // 3. 메소드 참조 방식 (최종 축약)
        names.forEach(System.out::println);
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 람다식 내부에서 외부 지역 변수를 수정할 수 없나요?**
A. 람다식 내부에서 참조하는 외부 지역 변수는 람다 캡처링(Lambda Capturing) 메커니즘에 의해 **\`final\` 또는 사실상 final(Effectively final)**이어야 하므로 값을 직접 변경하면 컴파일 에러가 발생합니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-stream-api-and-lambda-processing',
    title: '스트림 API(Stream API)를 활용한 데이터 파이프라인',
    seo_title: '자바 스트림 API - filter, map, reduce, collect 및 병렬 스트림 파이프라인',
    seo_description: '컬렉션 데이터를 가공하는 스트림 API의 중간 연산(filter, map, sorted)과 최종 연산(collect, reduce), 병렬 스트림(Parallel Stream)을 다룹니다.',
    excerpt: '컬렉션 요소를 원본 변경 없이 가공하고 필터링하는 스트림(Stream) API의 중간 연산, 최종 연산 파이프라인 및 병렬 처리(Parallel Stream)를 배웁니다.',
    content_md: `컬렉션이나 배열의 데이터 요소들을 루프문 없이 선언형 방식으로 가공, 필터링, 변환, 집계할 수 있는 **스트림 API(Stream API)** 파이프라인을 학습합니다.

---

## 1. 스트림 API 용어 사전 (Glossary)

- **Stream Pipeline**: 데이터 소스 $\rightarrow$ 중간 연산(Intermediate Operations) $\rightarrow$ 최종 연산(Terminal Operation)으로 연결되는 데이터 처리 흐름입니다.
- **Intermediate Operation (중간 연산)**: \`filter()\`, \`map()\`, \`sorted()\` 처럼 스트림을 반환하며 연속 체이닝이 가능한 연산입니다. (지연 연산 Lazy Evaluation 수행)
- **Terminal Operation (최종 연산)**: \`collect()\`, \`forEach()\`, \`reduce()\` 처럼 스트림 파이프라인을 실행하고 결과를 도출해내는 마감 연산입니다.
- **Parallel Stream (병렬 스트림)**: ForkJoinPool 프레임워크를 이용해 대용량 컬렉션을 멀티코어 CPU에서 병렬 분할 처리하는 스트림입니다. (\`parallelStream()\`)

---

## 2. 스트림 파이프라인 실전 가공 예제

\`\`\`java
import java.util.*;
import java.util.stream.Collectors;

class Person {
    String name;
    int age;
    public Person(String name, int age) { this.name = name; this.age = age; }
    public String getName() { return name; }
    public int getAge() { return age; }
}

public class StreamExample {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("홍길동", 25),
            new Person("이순신", 45),
            new Person("강감찬", 30),
            new Person("유관순", 18)
        );

        // [요구사항] 나이가 20세 이상인 사람들의 이름을 추출하여 성인 목록 리스트로 만들기
        List<String> adultNames = people.stream()
            .filter(p -> p.getAge() >= 20)      // 중간 연산: 20세 이상 필터링
            .map(Person::getName)               // 중간 연산: 이름만 추출 (타입 변환)
            .sorted()                          // 중간 연산: 가나다순 정렬
            .collect(Collectors.toList());      // 최종 연산: List 컬렉션으로 수집

        System.out.println("성인 회원 명단: " + adultNames);
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 스트림을 한 번 최종 연산한 후 다시 재사용할 수 있나요?**
A. 안 됩니다! 스트림은 1회용(Single-use)이므로 최종 연산이 호출되어 닫힌 스트림은 재사용이 불가능하며, 필요하다면 새 스트림을 다시 생성해야 합니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-multithreading-and-concurrency',
    title: '자바 멀티스레딩(Multithreading)과 동시성 제어',
    seo_title: '자바 멀티스레드 - Thread, Runnable, synchronized, 동기화 및 데드락 방지',
    seo_description: '스레드 생성 기법(Thread 상속, Runnable 구현), 스레드 상태, 임계 영역 동기화(synchronized), ReentrantLock 및 교착 상태(Deadlock) 방지법을 학습합니다.',
    excerpt: '동시에 여러 작업을 병렬 수행하는 멀티스레딩(Multithreading)과 자원 경합을 해결하는 임계 영역 동기화(synchronized) 기법을 학습합니다.',
    content_md: `하나의 프로세스 내에서 여러 작업을 동시에 병렬로 실행하는 **멀티스레딩(Multithreading)** 기술과 공유 자원 충돌을 방지하는 **동시성(Concurrency) 동기화**를 배웁니다.

---

## 1. 멀티스레딩 용어 사전 (Glossary)

- **Process (프로세스)**: 운영체제로부터 독립된 메모리를 할당받아 실행 중인 프로그램 단위입니다.
- **Thread (스레드)**: 프로세스 내부에서 실행되는 제어의 흐름 단위로, Stack 영역만 별도로 갖고 Heap 메모리는 공유합니다.
- **Critical Section (임계 영역)**: 둘 이상의 스레드가 동시에 접근하면 문제가 발생하는 공유 자원 코드 구역입니다.
- **Synchronized (동기화)**: 한 스레드가 임계 영역에 진입했을 때 모니터 락(Monitor Lock)을 획득하여 다른 스레드의 접근을 차단하는 키워드입니다.
- **Deadlock (교착 상태)**: 둘 이상의 스레드가 서로가 가진 락이 해제되기만을 무한히 기다리며 멈춰있는 방해 현상입니다.

---

## 2. 동기화(\`synchronized\`) 계좌 잔액 차감 실습

\`\`\`java
class BankAccount {
    private int balance = 1000;

    // synchronized 키워드로 동시 접근 차단
    public synchronized void withdraw(int amount) {
        if (balance >= amount) {
            try { Thread.sleep(100); } catch (InterruptedException e) {}
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + " 출금 완료. 남은 잔액: " + balance + "원");
        } else {
            System.out.println(Thread.currentThread().getName() + " 출금 실패 (잔액 부족)");
        }
    }
}

public class ThreadSyncMain {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();

        // 2개의 스레드가 동일 계좌에서 동시에 출금 시도
        Runnable task = () -> account.withdraw(700);

        Thread t1 = new Thread(task, "사용자 A");
        Thread t2 = new Thread(task, "사용자 B");

        t1.start();
        t2.start();
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`Thread\` 클래스를 상속받는 것과 \`Runnable\` 인터페이스를 구현하는 것의 차이는?**
A. 자바는 단일 상속만 지원하므로 \`Thread\` 클래스를 상속받으면 다른 클래스를 상속받을 수 없게 됩니다. 따라서 코드의 유연성과 재사용성을 위해 \`Runnable\` 인터페이스 구현 방식이 권장됩니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-gui-swing-components-and-events',
    title: '자바 GUI 스윙(Swing) 컴포넌트와 이벤트 처리',
    seo_title: '자바 GUI 프로그래밍 - Swing, JFrame, JButton, 레이아웃 매니저 및 ActionListener',
    seo_description: '윈도우 그래픽 화면을 만드는 GUI Swing 컴포넌트(JFrame, JPanel, JButton, JTextField), 레이아웃 매니저 및 버튼 클릭 이벤트(ActionListener) 처리를 해설합니다.',
    excerpt: '윈도우 데스크톱 창(Window)을 띄우고 버튼, 텍스트 상자를 배치하는 Swing GUI 컴포넌트 사용법과 이벤트 처리(Event Handling) 모델을 배웁니다.',
    content_md: `사용자가 마우스와 키보드로 그래픽 창과 상호작용하는 **GUI(Graphical User Interface) 스윙(Swing)** 프로그래밍과 이벤트 처리 모델을 익힙니다.

---

## 1. Swing GUI 용어 사전 (Glossary)

- **Container (컨테이너)**: 다른 GUI 부품(컴포넌트)들을 담는 용기 창입니다. (예: \`JFrame\`, \`JPanel\`)
- **Component (컴포넌트)**: 버튼, 텍스트 상자, 체크박스 등 화면에 표시되는 개별 시각적 요소입니다. (예: \`JButton\`, \`JTextField\`, \`JLabel\`)
- **Layout Manager (레이아웃 매니저)**: 컨테이너 내부 컴포넌트들의 위치와 크기를 자동으로배치해 주는 객체입니다. (\`FlowLayout\`, \`BorderLayout\`, \`GridLayout\`)
- **ActionListener**: 버튼 클릭이나 텍스트 엔터 입력 이벤트를 감지하여 동작하는 이벤트 리스너 인터페이스입니다.

---

## 2. 윈도우 계산기 화면 GUI Swing 완성 예제

\`\`\`java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimpleCalculatorGUI extends JFrame {
    private JTextField num1Field, num2Field;
    private JLabel resultLabel;

    public SimpleCalculatorGUI() {
        setTitle("DAVHAVE 자바 GUI 계산기");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout()); // 레이아웃 배치

        // 컴포넌트 생성 및 배치
        add(new JLabel("숫자 1:"));
        num1Field = new JTextField(5);
        add(num1Field);

        add(new JLabel("숫자 2:"));
        num2Field = new JTextField(5);
        add(num2Field);

        JButton addBtn = new JButton("더하기");
        add(addBtn);

        resultLabel = new JLabel("결과: ");
        add(resultLabel);

        // 버튼 이벤트 처리 (ActionListener)
        addBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    int n1 = Integer.parseInt(num1Field.getText());
                    int n2 = Integer.parseInt(num2Field.getText());
                    int sum = n1 + n2;
                    resultLabel.setText("결과: " + sum);
                } catch (NumberFormatException ex) {
                    resultLabel.setText("올바른 숫자를 입력하세요!");
                }
            }
        });

        setVisible(true); // 윈도우 창 표시
    }

    public static void main(String[] args) {
        new SimpleCalculatorGUI();
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Swing 구동 시 UI 스레드 안전성을 유지하려면?**
A. Swing 컴포넌트 생성 및 갱신은 반드시 \`SwingUtilities.invokeLater(() -> { ... });\` 메소드를 사용하여 **EDT(Event Dispatch Thread)** 상에서 실행시켜야 안전합니다.
`
  },
  {
    order_index: 13,
    slug: 'ch13-java-socket-network-programming',
    title: '자바 소켓(Socket) 네트워크 프로그래밍',
    seo_title: '자바 소켓 통신 - ServerSocket, Socket, TCP/IP 통신 및 멀티스레드 에코 서버',
    seo_description: '네트워크 연결을 담당하는 소켓(Socket), TCP/IP 통신 기반 ServerSocket 과 Client Socket 구현, 1:N 멀티스레드 채팅 서버 구축을 해설합니다.',
    excerpt: '네트워크를 통해 두 컴퓨터 간 소켓 통신을 연결하는 TCP/IP 기반 ServerSocket과 Client Socket 프로그래밍 및 멀티스레드 채팅 서버 구축을 다룹니다.',
    content_md: `컴퓨터 네트워크를 망라하여 서로 다른 기기 간에 데이터를 송수신하는 **TCP/IP 소켓(Socket) 네트워크 프로그래밍**을 배웁니다.

---

## 1. 소켓 네트워크 용어 사전 (Glossary)

- **Socket (소켓)**: 네트워크 망을 통해 상대방 프로그램과 소통하는 소프트웨어 접점(통신 양 끝단)입니다.
- **TCP/IP**: 데이터 손실 없이 안전하고 정확하게 전달함을 보장하는 연결 지향적(Connection-oriented) 네트워크 표준 프로토콜입니다.
- **Port Number (포트 번호)**: 한 컴퓨터 내에서 실행 중인 수많은 네트워크 프로그램 중 특정 서비스를 식별하는 16-bit 식별 번호입니다. (0 ~ 65535)
- **ServerSocket**: 클라이언트의 소켓 연결 요청을 들어오는 포트에서 수신 대기(\`accept()\`)하는 서버 전용 소켓입니다.

---

## 2. TCP 소켓 서버 / 클라이언트 동작 4단계

\`\`\`
[Server] ServerSocket(port) 생성 및 accept() 대기
[Client] Socket(ip, port) 생성으로 연결 요청
[Server] accept() 승인으로 클라이언트 통신용 Socket 생성
[Both]   InputStream / OutputStream으로 데이터 고속 송수신
\`\`\`

---

## 3. TCP 멀티스레드 에코 서버 파이썬/자바 코드

\`\`\`java
// 서버 단 코드 (EchoServer.java)
import java.io.*;
import java.net.*;

public class EchoServer {
    public static void main(String[] args) {
        int port = 9999;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("에코 서버가 " + port + " 포트에서 수신 대기 중...");

            while (true) {
                Socket socket = serverSocket.accept(); // 클라이언트 접속 승인
                System.out.println("클라이언트 접속 완료: " + socket.getInetAddress());

                // 입출력 스트림 연결
                BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

                String msg;
                while ((msg = in.readLine()) != null) {
                    System.out.println("수신 메세지: " + msg);
                    out.println("Echo: " + msg); // 메세지 되돌려주기
                }
                socket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. TCP와 UDP 통신의 주요 차이는 무엇인가요?**
A. TCP는 연결 수립 과정(3-Way Handshake)을 거쳐 신뢰성 높은 데이터를 전송하며, UDP는 연결 수립 없이 빠른 속도로 조각을 던지는 비연결형(Connectionless) 프로토콜입니다. (실시간 스트리밍/게임에는 UDP 선호)
`
  },
  {
    order_index: 14,
    slug: 'ch14-jdbc-database-programming',
    title: 'JDBC 데이터베이스 연동과 SQL CRUD 실행',
    seo_title: '자바 JDBC 프로그래밍 - Connection, PreparedStatement, ResultSet 및 SQL CRUD',
    seo_description: '자바 애플리케이션과 관계형 DB(MySQL, Oracle, SQLite)를 연동하는 JDBC API, PreparedStatement를 활용한 SQL CRUD 명령 및 SQL Injection 방지를 배웁니다.',
    excerpt: '자바 애플리케이션과 관계형 데이터베이스(RDBMS)를 연결해 주는 JDBC 기술 및 PreparedStatement 기반 안전한 SQL CRUD 명령 실행을 습득합니다.',
    content_md: `자바 애플리케이션과 **관계형 데이터베이스(MySQL, PostgreSQL, Oracle, SQLite)**를 연결하여 데이터를 영구 보관하고 관리하는 **JDBC(Java Database Connectivity)** 기술을 다룹니다.

---

## 1. JDBC 연동 용어 사전 (Glossary)

- **JDBC (Java Database Connectivity)**: 자바 언어로 데이터베이스에 접속하여 SQL 쿼리를 실행할 수 있도록 지원하는 표준 API 인터페이스 집합입니다.
- **DriverManager**: 데이터베이스 드라이버를 로드하고 DB 연결 자원인 \`Connection\` 객체를 생성해 주는 매니저 클래스입니다.
- **PreparedStatement**: SQL 쿼리를 미리 컴파일하여 파라미터만 교체 실행하는 객체로, **SQL Injection 보안 공격을 차단**합니다.
- **ResultSet**: \`SELECT\` 쿼리 실행 결과로 반환된 데이터 테이블 행(Row)들을 가리키는 커서 객체입니다.

---

## 2. JDBC DB 연결 및 회원 등록/조회 실습

\`\`\`java
import java.sql.*;

public class JDBCExample {
    // DB 접속 정보
    private static final String URL = "jdbc:sqlite:davhave.db"; // SQLite 예시

    public static void main(String[] args) {
        String insertSQL = "INSERT INTO users (name, email) VALUES (?, ?)";
        String selectSQL = "SELECT * FROM users";

        try (Connection conn = DriverManager.getConnection(URL)) {
            System.out.println("데이터베이스 연결 성공!");

            // 1. PreparedStatement 데이터 삽입 (CRUD - Create)
            try (PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
                pstmt.setString(1, "홍길동");
                pstmt.setString(2, "hong@davhave.com");
                int rows = pstmt.executeUpdate();
                System.out.println(rows + "개 회원 데이터 추가 완료.");
            }

            // 2. ResultSet 데이터 조회 (CRUD - Read)
            try (PreparedStatement pstmt = conn.prepareStatement(selectSQL);
                 ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    int id = rs.getInt("id");
                    String name = rs.getString("name");
                    String email = rs.getString("email");
                    System.out.println("ID: " + id + " | 이름: " + name + " | 이메일: " + email);
                }
            }

        } catch (SQLException e) {
            System.err.println("DB 작업 오류: " + e.getMessage());
        }
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Statement 대신 왜 PreparedStatement를 사용해야 하나요?**
A. \`Statement\`는 SQL 문에 변수를 합칠 때 문자열 연결(\`+\`)을 사용하므로 **SQL Injection 보안 해킹** 위험에 노출되고 매번 쿼리를 재컴파일합니다. 반면 \`PreparedStatement\`는 미리 컴파일된 바인딩 변수(\`?\`)를 써서 안전하고 실행 속도도 훨씬 빠릅니다.
`
  },
  {
    order_index: 15,
    slug: 'ch15-java-design-patterns-and-final-project',
    title: '자바 디자인 패턴(Singleton, Factory, DAO)과 실전 종합 프로젝트',
    seo_title: '자바 실전 프로젝트 - 디자인 패턴(Singleton, DAO) 및 회원 관리 종합 프로그래밍',
    seo_description: '실무 소프트웨어 아키텍처 핵심 디자인 패턴(Singleton, Factory, DAO 패턴)의 개념과 배운 자바 기술을 총동원한 실전 시스템 구축 프로젝트를 완성합니다.',
    excerpt: '객체지향 설계의 핵심 디자인 패턴(싱글톤, DAO)을 배우고, 배운 자바 기술(OOP, 컬렉션, I/O, JDBC)을 종합하여 실전 회원 관리 시스템을 구축합니다.',
    content_md: `배운 객체지향 기초, 컬렉션, 예외 처리, 입출력 및 JDBC 기술을 총동원하고 실무 **디자인 패턴(Design Pattern)**을 도입하여 완성도 높은 **실전 자바 종합 프로젝트**를 구축합니다.

---

## 1. 디자인 패턴 핵심 용어 사전 (Glossary)

- **Singleton Pattern (싱글톤 패턴)**: 애플리케이션 실행 동안 인스턴스가 단 하나만 생성되도록 강제하는 대표적 생성 디자인 패턴입니다.
- **DAO Pattern (Data Access Object)**: 데이터베이스 접근 및 CRUD 로직을 비즈니스 로직과 분리하여 관리하는 데이터 접근 객체 패턴입니다.
- **DTO Pattern (Data Transfer Object)**: 계층 간(Controller, Service, DAO) 데이터 교환을 위해 순수 데이터 필드만 갖는 객체 패턴입니다.

---

## 2. 싱글톤 패턴 (Singleton) 구현 코드

\`\`\`java
public class DatabaseConnectionPool {
    // 1. 단 하나의 인스턴스를 static 영역에 선언
    private static DatabaseConnectionPool instance = new DatabaseConnectionPool();

    // 2. private 생성자로 외부 new 생성 막기
    private DatabaseConnectionPool() {
        System.out.println("DB 커넥션 풀 객체가 최초 1회 생성되었습니다.");
    }

    // 3. 글로벌 접근 메소드 제공
    public static DatabaseConnectionPool getInstance() {
        return instance;
    }
}
\`\`\`

---

## 3. 실전 회원 관리 시스템 종합 프로젝트 아키텍처

\`\`\`java
// DTO 클래스
class MemberDTO {
    private int id;
    private String name;
    public MemberDTO(int id, String name) { this.id = id; this.name = name; }
    public int getId() { return id; }
    public String getName() { return name; }
}

// DAO 인터페이스
interface MemberDAO {
    void insert(MemberDTO member);
    MemberDTO findById(int id);
}

// 메인 실행 클래스
public class FinalJavaProject {
    public static void main(String[] args) {
        System.out.println("=== DAVHAVE 자바 실전 시스템 가동 ===");
        MemberDTO m1 = new MemberDTO(101, "홍길동");
        System.out.println("등록 회원: " + m1.getName() + " (ID: " + m1.getId() + ")");
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 프로젝트 개발을 확장할 때 다음 단계로 학습해야 할 프레임워크는?**
A. 실무 자바 웹 애플리케이션 개발에서는 **스프링 프레임워크(Spring Framework / Spring Boot)**와 객체-DB 매핑 기술인 **JPA / Hibernate**를 학습하는 것이 전 세계 기업들의 표준 커리어 트랙입니다.
`
  }
];

// Split into 4 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 15)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full Java Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const content_html = marked.parse(lesson.content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
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

  fs.writeFileSync(`scratch/seed_java_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 4 full SQL chunk files for Java!');
