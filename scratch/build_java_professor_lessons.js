import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  {
    order_index: 1,
    slug: 'ch01-java-introduction-and-jvm',
    title: '자바(Java)의 시작: 플랫폼 독립성과 JVM, OpenJDK & 개발 환경 구축',
    seo_title: '자바 입문 가이드 - WORA, JVM 메모리 구조, OpenJDK & 이클립스 환경설정',
    seo_description: '자바의 역사와 4대 특징, 가상 머신 JVM(Heap, Stack, Method Area) 작동 메커니즘, 가비지 컬렉터(GC), OpenJDK 및 이클립스(Eclipse) 설치 가이드를 다룹니다.',
    excerpt: '플랫폼 독립성(WORA)을 갖춘 자바 언어의 탄생 배경, JVM의 메모리 3대 영역 구조 및 OpenJDK, 이클립스 통합 개발 환경(IDE) 구축을 배웁니다.',
    content_md: `**자바(Java)**는 1995년 선 마이클로시스템즈(Sun Microsystems)의 제임스 고슬링(James Gosling) 연구팀에 의해 발표된 대표적인 **객체지향 프로그래밍 언어(OOP)**입니다. "WORA (Write Once, Run Anywhere - 한 번 작성하면 어느 운영체제에서나 실행된다)"라는 플랫폼 독립적 이식성을 자랑합니다.

---

## 1. 자바 교수용 핵심 전문 용어 사전 (Glossary)

- **JVM (Java Virtual Machine)**: 자바 바이트코드를 해당 OS(Windows, macOS, Linux)의 네이티브 기계어로 실시간 해석(JIT 컴파일러)하여 실행하는 가상 머신입니다.
- **JDK (Java Development Kit)**: 자바 개발을 위한 컴파일러(\`javac\`), 디버거, 표준 API 라이브러리가 포함된 개발 키트입니다. (OpenJDK 등 사용)
- **JRE (Java Runtime Environment)**: 자바 프로그램을 실행하기만 할 때 필요한 동작 환경으로 JVM과 클래스 라이브러리가 탑재되어 있습니다.
- **Bytecode (바이트코드)**: 소스코드(\`.java\`)를 \`javac\` 컴파일러로 빌드하면 생성되는 반제품 명령어 형태의 \`.class\` 파일입니다.
- **JIT Compiler (Just-In-Time)**: 바이트코드를 인터프리터 방식으로 해석하다가 자주 실행되는 루프 코드를 발견하면 기계어로 직접 번역하여 대폭 속도를 올리는 하이브리드 엔진입니다.
- **Garbage Collector (GC)**: 힙(Heap) 메모리에서 참조가 끊긴 쓰레기 객체(Dead Object)들을 자동으로 추적하여 회수하는 동적 메모리 관리 스레드입니다.

---

## 2. JVM 내부 메모리 3대 구조 (Memory Architecture)

1. **메소드 영역 (Method Area / Metaspace)**: 바이트코드의 클래스 구동 정보, static 변수, 메소드 코드, 상수 풀(Constant Pool)이 상주하는 메모리입니다.
2. **힙 영역 (Heap Area)**: \`new\` 연산자로 동적 할당되는 모든 인스턴스 객체와 배열이 저장되며, 가비지 컬렉션(GC)의 관리 대상이 됩니다.
3. **스택 영역 (Stack Area)**: 메소드 호출 시 생성되는 프레임(Stack Frame) 공간으로, 지역 변수, 매개변수, 연산 결과가 임시 저장되며 메소드 종료 시 자동 소멸합니다.

---

## 3. 첫 번째 자바 프로그램: HelloJava.java

\`\`\`java
/*
  파일명: HelloJava.java
  설명: 첫 자바 클래스 선언 및 메인 메소드 출력 실습
*/

public class HelloJava {
    // 자바 애플리케이션 시작점(Main Method)
    public static void main(String[] args) {
        System.out.println("Hello, DAVHAVE Java World!");
        System.out.println("자바 프로그래밍 강좌에 오신 것을 환영합니다.");
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Java SE, Java EE, Java ME의 차이는 무엇인가요?**
A. Java SE(Standard Edition)는 데스크톱 및 표준 기본 자바 플랫폼이고, Java EE(Enterprise Edition - 현 Jakarta EE)는 웹 서버 및 대규모 기업용 확장 플랫폼이며, Java ME(Micro Edition)는 임베디드 및 가전제품용 축소 플랫폼입니다.
`
  },
  {
    order_index: 2,
    slug: 'ch02-java-basics-data-types-operators',
    title: '자바 기본 프로그래밍: 식별자, 변수, 8대 기본 자료형, Scanner 및 연산자',
    seo_title: '자바 기본 문법 - 8대 기본 자료형, 변수, Scanner 입력, 형변환 및 연산자',
    seo_description: '식별자 규칙, 8가지 기본 자료형(Primitive Types), 참조 자료형의 차이, Scanner 키보드 입력, 자동/강제 형변환(Casting) 및 연산자 활용법을 해설합니다.',
    excerpt: '자바의 식별자 명명 규칙, 8가지 기본 자료형(int, double, boolean 등)의 메모리 크기, Scanner 키보드 데이터 입력 및 연산자 활용법을 배웁니다.',
    content_md: `프로그램에서 데이터를 보관하는 메모리 공간인 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**, 그리고 키보드 입력을 처리하는 **Scanner**를 배웁니다.

---

## 1. 기본 프로그래밍 용어 사전 (Glossary)

- **Primitive Type (기본 자료형)**: 실제 산술/논리 데이터 값을 메모리 스택 영역에 직접 저장하는 8가지 기본 타입입니다.
- **Reference Type (참조 자료형)**: 데이터 객체의 실제 본체는 Heap 영역에 저장하고, 변수 스택에는 메모리 주소(Address)만을 보관하는 타입입니다. (String, Array 등)
- **Scanner**: \`java.util\` 패키지에 포함되어 키보드로 입력한 문자열, 정수, 실수 데이터를 편리하게 읽어들이는 입출력 클래스입니다.
- **Casting (형변환)**: 변수나 리터럴의 데이터 타입을 다른 타입으로 변환하는 연산입니다. (자동 형변환 vs 강제 형변환)

---

## 2. 자바 8대 기본 자료형 (Primitive Types) 스펙표

| 데이터 종류 | 자료형 키워드 | 메모리 크기 | 데이터 표현 범위 및 리터럴 예시 |
| :--- | :--- | :--- | :--- |
| **논리형** | \`boolean\` | 1 byte | \`true\` 또는 \`false\` |
| **문자형** | \`char\` | 2 bytes | 유니코드(Unicode) 1문자 (예: \`'A'\`, \`'가'\`) |
| **정수형** | \`byte\` | 1 byte | $-128 \\sim 127$ |
| | \`short\` | 2 bytes | $-32,768 \\sim 32,767$ |
| | \`int\` | 4 bytes | $-21\\text{억} \\sim 21\\text{억}$ (기본 정수형) |
| | \`long\` | 8 bytes | $-9 \\times 10^{18} \\sim 9 \\times 10^{18}$ (예: \`100L\`) |
| **실수형** | \`float\` | 4 bytes | 소수점 약 7자리 정밀도 (예: \`3.14F\`) |
| | \`double\` | 8 bytes | 소수점 약 15자리 정밀도 (기본 실수형) |

---

## 3. Scanner 키보드 입력 및 연산자 실습

\`\`\`java
import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("이름을 입력하세요: ");
        String name = scanner.next(); // 문자열 입력

        System.out.print("나이를 입력하세요: ");
        int age = scanner.nextInt(); // 정수 입력

        System.out.print("키(cm)를 입력하세요: ");
        double height = scanner.nextDouble(); // 실수 입력

        System.out.println("\n=== [사용자 프로필] ===");
        System.out.println("이름: " + name);
        System.out.println("나이: " + age + "세 (" + ((age >= 19) ? "성인" : "미성년자") + ")");
        System.out.println("키: " + height + "cm");

        scanner.close(); // Scanner 리소스 닫기
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`scanner.nextLine()\`과 \`scanner.next()\`의 차이는 무엇인가요?**
A. \`next()\`는 공백(스페이스/탭)을 기준으로 단어 하나만 읽어들이고, \`nextLine()\`은 엔터(\`\n\`)를 칠 때까지 공백을 포함한 한 줄 전체 문장을 읽어옵니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-control-flow-arrays-exceptions',
    title: '제어문(if, switch), 반복문(for, while), 배열(1D/2D) 및 예외 처리',
    seo_title: '자바 제어문과 예외 처리 - if, switch, for, while, 2차원 배열 & try-catch',
    seo_description: '조건 제어문(if, switch), 반복문(for, enhanced-for, while), 1차원 및 2차원 배열 메모리 구조, try-catch-finally 예외 처리 기법을 학습합니다.',
    excerpt: '실행 흐름을 제어하는 조건문과 반복문, 다차원 배열(2D Array) 및 런타임 오류 시 비정상 종료를 막아주는 try-catch-finally 예외 처리를 익힙니다.',
    content_md: `프로그램의 논리적 실행 제어를 담당하는 **조건문/반복문**과 연속된 데이터를 묶는 **배열(Array)**, 런타임 예외 대처 기법인 **try-catch 예외 처리**를 배웁니다.

---

## 1. 제어문 & 예외 처리 용어 사전 (Glossary)

- **Enhanced for (향상된 for문)**: 인덱스를 사용하지 않고 배열이나 컬렉션의 처음부터 끝까지 순차 방문하는 안전한 루프 문법입니다. (\`for(Type val : array)\`)
- **2D Array (2차원 배열)**: 행(Row)과 열(Column)의 바둑판 형태 구조를 갖는 배열입니다. (\`int[][] matrix = new int[3][4];\`)
- **NullPointerException (NPE)**: 참조 변수가 \`null\` 상태인 상황에서 객체의 필드나 메소드를 호출하려 할 때 발생하는 대표적 예외입니다.
- **try-catch-finally**: 런타임 오류가 발생하더라도 프로그램이 강제 종료되지 않고 예외 상황을 포획 및 안전하게 마감 처리하도록 돕는 블록입니다.

---

## 2. 2차원 배열과 향상된 for문 실습

\`\`\`java
public class MatrixArrayExample {
    public static void main(String[] args) {
        // 3행 2열의 2차원 배열 선언 및 초기화
        int[][] scoreMatrix = {
            {90, 85}, // 1행 (학생 1의 국어/영어)
            {78, 92}, // 2행 (학생 2의 국어/영어)
            {95, 100} // 3행 (학생 3의 국어/영어)
        };

        System.out.println("=== [학생별 성적 출력] ===");
        for (int i = 0; i < scoreMatrix.length; i++) {
            int sum = 0;
            for (int j = 0; j < scoreMatrix[i].length; j++) {
                sum += scoreMatrix[i][j];
            }
            double avg = (double) sum / scoreMatrix[i].length;
            System.out.println((i + 1) + "번 학생 - 총점: " + sum + "점 | 평균: " + avg + "점");
        }
    }
}
\`\`\`

---

## 3. try-catch-finally 예외 처리 실전 패턴

\`\`\`java
public class TryCatchExample {
    public static void main(String[] args) {
        String[] colors = {"Red", "Green", "Blue"};

        try {
            System.out.println("색상 접근: " + colors[5]); // ArrayIndexOutOfBoundsException 발생!
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("에러: 존재하지 않는 인덱스 접근 경고!");
            System.err.println("상세 예외 메시지: " + e.getMessage());
        } finally {
            System.out.println("finally 블록: 예외 발생 여부와 무관하게 무조건 실행됩니다.");
        }
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. switch-case 문에서 \`break\` 문을 빼먹으면 어떻게 되나요?**
A. 조건이 일치하는 case 이하의 다른 case 문들이 \`break\`를 만날 때까지 연속 실행되어 버리는 **Fall-Through** 현상이 발생합니다. 자바 14부터는 \`yield\` 문법이 포함된 가독성 높은 Switch Expression을 지원합니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-object-oriented-programming-classes',
    title: '객체지향 프로그래밍: 클래스, 객체, 생성자 및 static/final',
    seo_title: '자바 OOP 클래스와 객체 - 생성자, static 공유 멤버, final 및 캡슐화',
    seo_description: '객체지향 개념, 클래스(Class)와 인스턴스, 생성자 오버로딩, static 공유 멤버, final 변수 및 정보 은닉을 위한 Getter/Setter 작성을 학습합니다.',
    excerpt: '현실 세계의 사물을 객체로 설계하는 클래스(Class), 생성자 오버로딩, 클래스 공통 변수인 static 멤버 및 final 정수와 정보 은닉 캡슐화를 다룹니다.',
    content_md: `객체지향 프로그래밍(OOP)은 프로그램의 요소들을 **객체(Object)** 단위로 모델링하여 유지보수성과 재사용성을 높이는 소프트웨어 설계 기술입니다.

---

## 1. 객체지향 기초 용어 사전 (Glossary)

- **Class (클래스)**: 객체를 생성하기 위한 틀(Template)이자 설계도입니다.
- **Instance (인스턴스)**: 클래스 설계도를 바탕으로 메모리 Heap 공간에 \`new\` 연산자로 생성된 객체 실체입니다.
- **Constructor (생성자)**: 객체 인스턴스가 동적으로 생성될 때 자동 호출되어 필드 변수들을 초기화하는 특별한 메소드입니다.
- **static Member**: 객체마다 따로 생기지 않고, 클래스 로딩 시점에 메소드 메모리 영역에 단 하나만 생성되어 모든 인스턴스가 공유하는 멤버입니다.
- **final**: 변수에 붙으면 값 변경 불가(상수), 메소드에 붙으면 오버라이딩 불가, 클래스에 붙으면 상속 불가로 만드는 제약 키워드입니다.

---

## 2. 캡슐화 및 static/final 필드가 적용된 클래스 설계 예제

\`\`\`java
public class BankAccount {
    // 1. static 상수 (은행 이름 공통 공유)
    public static final String BANK_NAME = "DAVHAVE BANK";
    
    // 2. private 필드 캡슐화 (정보 은닉)
    private String accountNumber;
    private String owner;
    private int balance;

    // 3. 생성자 오버로딩 (Constructor Overloading)
    public BankAccount(String accountNumber, String owner) {
        this(accountNumber, owner, 0); // 다른 생성자 호출
    }

    public BankAccount(String accountNumber, String owner, int balance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    // 4. 입금/출금 메소드
    public void deposit(int amount) {
        this.balance += amount;
        System.out.println(owner + "님 계좌에 " + amount + "원 입금 완료.");
    }

    public int getBalance() {
        return balance;
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`static\` 메소드 안에서 일반 인스턴스 변수(\`this.name\`)를 직접 부를 수 없나요?**
A. 부를 수 없습니다! \`static\` 메소드는 객체가 \`new\` 생성되기 전 클래스 로딩 시점에 먼저 메모리에 올라가기 때문에, 아직 객체가 생기지 않았을 수도 있는 인스턴스 멤버에 직접 접근하는 것이 불가능합니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-inheritance-polymorphism-interfaces',
    title: '상속(Inheritance), 다형성, 추상 클래스 및 인터페이스',
    seo_title: '자바 상속과 다형성 - extends, super, 메소드 오버라이딩, abstract & interface',
    seo_description: '클래스를 확장하는 상속(extends), 부모 메소드 재정의(Overriding), 객체지향의 꽃 다형성(Polymorphism), 추상 클래스(abstract)와 인터페이스(interface) 다중 구현을 다룹니다.',
    excerpt: '부모 클래스를 확장하는 상속(extends)과 오버라이딩, 부모 타입으로 다양한 자식 객체를 제어하는 다형성(Polymorphism) 및 인터페이스 기반의 다중 구현을 학습합니다.',
    content_md: `부모 클래스의 속성과 메소드를 재사용 확장하는 **상속(Inheritance)**과 상위 타입 변수로 여러 하위 객체를 다루는 **다형성(Polymorphism)**, **인터페이스(Interface)**를 학습합니다.

---

## 1. OOP 심화 용어 사전 (Glossary)

- **Inheritance (상속)**: 부모 클래스(Super Class)의 속성과 기능을 자식 클래스(Sub Class)가 물려받아 확장(\`extends\`)하는 객체지향의 핵심 특징입니다.
- **Overriding (오버라이딩)**: 부모 클래스의 메소드를 자식 클래스에서 목적에 맞게 재정의하여 커스터마이징하는 기법입니다. (\`@Override\` 어노테이션)
- **Polymorphism (다형성)**: 부모 클래스/인터페이스 타입의 참조 변수 하나로 여러 다양한 자식 클래스 인스턴스들을 가리키고 통합 제어하는 성질입니다.
- **Abstract Class (추상 클래스)**: 미완성 추상 메소드(\`abstract method\`)를 포함하여 자식 클래스에서 반드시 오버라이딩을 강제하는 설계용 클래스입니다.
- **Interface (인터페이스)**: 모든 메소드가 기본적으로 추상 메소드로 이루어진 표준 명세서로, 자바에서 다중 구현(\`implements\`)을 지원합니다.

---

## 2. 인터페이스와 다형성 통합 예제

\`\`\`java
// 1. 결제 표준 인터페이스
interface Payment {
    void processPay(int amount);
}

// 2. 신용카드 결제 구현체
class CreditCardPay implements Payment {
    @Override
    public void processPay(int amount) {
        System.out.println("[신용카드 결제 완료]: " + amount + "원 승인");
    }
}

// 3. 카카오페이 결제 구현체
class KakaoPay implements Payment {
    @Override
    public void processPay(int amount) {
        System.out.println("[카카오페이 결제 완료]: " + amount + "원 간편 결제");
    }
}

// 4. 다형성 연동 실행 클래스
public class PaymentSystem {
    public static void main(String[] args) {
        // 다형성을 활용하여 인터페이스 타입 변수로 서로 다른 결제 수단 호출
        Payment pay1 = new CreditCardPay();
        Payment pay2 = new KakaoPay();

        pay1.processPay(50000);
        pay2.processPay(15000);
    }
}
\`\`\`

---

## 3. 추상 클래스 vs 인터페이스 비교표

| 비교 항목 | 추상 클래스 (Abstract Class) | 인터페이스 (Interface) |
| :--- | :--- | :--- |
| **선언 키워드** | \`abstract class\` | \`interface\` |
| **상속 및 구현** | \`extends\` (단일 상속만 허용) | \`implements\` (다중 구현 허용) |
| **변수 선언** | 일반 멤버 변수 선언 가능 | 상수만 가능 (\`public static final\`) |
| **설계 목적** | 연관된 클래스들의 공통 코드 상속/재사용 | 서로 다른 클래스 간의 기능 통일 표준 규격 |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 자바 8 이후 인터페이스에 추가된 default 메소드란?**
A. 기존 인터페이스에 새 메소드를 추가하면 이미 구현된 모든 클래스를 수정해야 하는 불편을 막기 위해, 인터페이스 내부에서도 몸체(\`{ ... }\`)를 가지는 기본 메소드를 선언할 수 있게 만든 기능입니다.
`
  },
  {
    order_index: 6,
    slug: 'ch06-packages-modules-java-lang-util',
    title: '모듈과 패키지 개념 및 자바 기본 패키지 (java.lang, java.util)',
    seo_title: '자바 패키지와 java.lang - Object, String, StringBuffer, Wrapper, Math',
    seo_description: '패키지(Package)와 모듈(Module) 개념, 최상위 조상 Object 클래스, String 불변성과 StringBuffer/StringBuilder, StringTokenizer 및 Wrapper 클래스를 다룹니다.',
    excerpt: '클래스를 계층화하여 관리하는 패키지와 모듈, 자바 최상위 클래스 Object, 문자열 불변성(String Immutability) 및 java.lang/java.util 유틸리티를 배웁니다.',
    content_md: `클래스들의 충돌을 피하고 그룹화하는 **패키지(Package)**와 자바 표준 라이브러리의 핵심인 **\`java.lang\`** 및 **\`java.util\`** 패키지의 유틸리티 클래스들을 다룹니다.

---

## 1. 기본 패키지 핵심 용어 사전 (Glossary)

- **Package (패키지)**: 관련 있는 클래스와 인터페이스들을 폴더 체계 형태로 묶어 관리하는 네임스페이스입니다.
- **Object Class**: 자바에서 작성하는 모든 클래스가 직간접적으로 상속받는 최상위 으뜸 클래스입니다. (\`equals()\`, \`hashCode()\`, \`toString()\` 보유)
- **String Immutability (문자열 불변성)**: 자바의 \`String\` 객체는 한 번 생성되면 메모리 내 문자열을 변경할 수 없고, 연산 시 항상 새 객체를 생성하는 성질입니다.
- **StringBuffer / StringBuilder**: 문자열 덧셈/수정 시 메모리 생성 낭비를 막고 가변(Mutable) 버퍼 공간에서 고속으로 텍스트를 처리해 주는 클래스입니다.
- **Wrapper Class**: 기본 자료형(\`int\`, \`double\` 등)을 객체 상태로 감싸서 사용할 수 있게 해주는 포장 클래스입니다. (\`Integer\`, \`Double\` 등 - Auto-Boxing지원)

---

## 2. \`String\` vs \`StringBuilder\` 성능 실습

\`\`\`java
public class StringCompareExample {
    public static void main(String[] args) {
        // 1. String 연결 연산 (새 객체가 매번 생성되어 메모리 낭비)
        String s = "Hello";
        s += " World";
        System.out.println("String 결과: " + s);

        // 2. StringBuilder 활용 (가변 버퍼 사용으로 100배 이상 고속 처리)
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        sb.append(" ");
        sb.append("World");
        sb.append("!");
        System.out.println("StringBuilder 결과: " + sb.toString());
    }
}
\`\`\`

---

## 3. \`Object\` 클래스의 3대 필수 오버라이딩 메소드

1. **\`equals(Object obj)\`**: 단순 주소 비교가 아닌 **객체의 내부 실제 값이 같은지 판단**하도록 오버라이딩.
2. **\`hashCode()\`**: 객체의 고유 정수 해시코드를 반환. (\`HashSet\`, \`HashMap\` 사용 시 필수!)
3. **\`toString()\`**: 객체의 현재 상태를 가독성 있는 텍스트 문자열로 반환.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`StringTokenizer\`와 \`String.split()\`의 차이는 무엇인가요?**
A. \`split()\`은 정규 표현식을 사용하여 복잡한 구분자로 잘라내어 배열로 반환하며, \`StringTokenizer\`는 단순 문자 구분자로 메모리 효율적으로 토큰을 하나씩 꺼내옵니다.
`
  },
  {
    order_index: 7,
    slug: 'ch07-generics-and-collection-framework',
    title: '제네릭(Generics)과 컬렉션 프레임워크 (List, Set, Map)',
    seo_title: '자바 컬렉션 프레임워크 - ArrayList, LinkedList, HashSet, HashMap & 제네릭',
    seo_description: '타입 안정성을 높이는 제네릭(Generics), 자바 3대 자료구조 List(ArrayList), Set(HashSet), Map(HashMap)의 특성, Iterator 순회 및 실전 활용법을 배웁니다.',
    excerpt: '컴파일 시점에 타입을 강제하는 제네릭(Generics)과 자바 3대 핵심 자료구조인 List(ArrayList), Set(HashSet), Map(HashMap)의 특징과 사용법을 학습합니다.',
    content_md: `자바 프로그램에서 대용량 데이터를 동적으로 추가, 삭제, 검색, 정렬하기 위한 표준 자료구조 인터페이스 집합인 **컬렉션 프레임워크(Collection Framework)**를 익힙니다.

---

## 1. 컬렉션 & 제네릭 용어 사전 (Glossary)

- **Generics (제네릭)**: 클래스나 컬렉션에서 사용할 데이터 타입을 컴파일 시점에 지정하여 불필요한 형변환(Casting) 오류를 예방하는 기술입니다. (예: \`ArrayList<String>\`)
- **List Interface**: 데이터의 순서가 유지되며, **중복 데이터를 허용하는** 동적 배열 형태의 자료구조입니다. (\`ArrayList\`, \`LinkedList\`)
- **Set Interface**: 데이터의 순서를 보장하지 않으며, **중복 데이터를 절대로 허용하지 않는** 집합 형태의 자료구조입니다. (\`HashSet\`, \`TreeSet\`)
- **Map Interface**: 순서 대신 **Key-Value(키-값) 쌍**으로 저장하며, Key의 중복은 허용하지 않는 사전형 자료구조입니다. (\`HashMap\`, \`TreeMap\`)

---

## 2. 컬렉션 3대 인터페이스 비교표

| 컬렉션 구분 | 대표 클래스 | 순서 유지 | 중복 허용 | 주요 사용 목적 및 성능 특성 |
| :--- | :--- | :---: | :---: | :--- |
| **List 계열** | \`ArrayList\` | ⭕ | ⭕ | 인덱스를 통한 고속 검색($O(1)$) |
| | \`LinkedList\` | ⭕ | ⭕ | 중간 요소의 빈번한 추가/삭제($O(1)$) |
| **Set 계열** | \`HashSet\` | ❌ | **❌ (불가)** | 데이터의 고유 중복 제거 |
| **Map 계열** | \`HashMap\` | ❌ | Key 불가 / Value 허용 | Key를 이용한 초고속 데이터 조회($O(1)$) |

---

## 3. \`HashMap\` 및 \`ArrayList\` 실전 프로그래밍 예제

\`\`\`java
import java.util.*;

public class CollectionFrameworkMain {
    public static void main(String[] args) {
        // 1. ArrayList 동적 배열 활용
        List<String> fruits = new ArrayList<>();
        fruits.add("사과");
        fruits.add("바나나");
        fruits.add("사과"); // 중복 허용됨

        System.out.println("과일 리스트: " + fruits);

        // 2. HashMap (주민번호 - 이름) 매핑 활용
        Map<String, String> userMap = new HashMap<>();
        userMap.put("900101-1000000", "홍길동");
        userMap.put("950505-2000000", "김영희");

        System.out.println("조회 결과: " + userMap.get("900101-1000000"));
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`ArrayList\`와 \`LinkedList\`는 언제 구분해서 써야 하나요?**
A. 데이터의 검색이나 순회가 주를 이룰 때는 인덱스 접근이 빠른 \`ArrayList\`를 쓰고, 중간에 위치한 데이터의 삽입과 삭제가 자주 발생하는 경우에는 \`LinkedList\`를 사용하는 것이 효율적입니다.
`
  },
  {
    order_index: 8,
    slug: 'ch08-io-streams-and-file-processing',
    title: '자바 입출력(I/O) 스트림과 파일 조작',
    seo_title: '자바 I/O 스트림 - InputStream, OutputStream, Reader, Writer, File & Buffer',
    seo_description: '바이트 스트림(InputStream/OutputStream), 문자 스트림(Reader/Writer), File 클래스 및 입출력 속도를 대폭 높여주는 BufferedReader/BufferedWriter 사용법을 해설합니다.',
    excerpt: '키보드, 파일, 네트워크 등 외부 입력/출력 장치와 데이터를 주고받는 자바 I/O 스트림의 동작 원리, 바이트/문자 스트림 및 고속 버퍼 스트림을 배웁니다.',
    content_md: `파일을 생성, 읽기, 쓰거나 외부 장치와 통신하는 **자바 입출력(I/O: Input/Output) 스트림** 구조와 파일 관리 기술을 다룹니다.

---

## 1. 입출력 스트림 용어 사전 (Glossary)

- **Stream (스트림)**: 데이터가 단방향(FIFO)으로 연속적으로 이동하는 가상의 통로입니다.
- **Byte Stream**: 1byte 단위로 바이너리 데이터(이미지, 동영상, 엑셀 파일 등)를 입출력하는 스트림입니다. (\`InputStream\`, \`OutputStream\`)
- **Character Stream**: 2byte(유니코드) 단위로 텍스트 문서 파일만 전용으로 처리하는 스트림입니다. (\`Reader\`, \`Writer\`)
- **Buffered Stream**: 입출력 횟수를 줄이기 위해 메모리에 8KB 가량의 버퍼(Buffer)를 형성하여 입출력 성능을 10배 이상 높이는 보조 스트림입니다. (\`BufferedReader\`, \`BufferedWriter\`)

---

## 2. \`BufferedReader\` 기반 고속 텍스트 파일 읽기 코드

\`\`\`java
import java.io.*;

public class FastFileReader {
    public static void main(String[] args) {
        File targetFile = new File("data.txt");

        // try-with-resources 구문으로 자동으로 close() 처리
        try (BufferedReader br = new BufferedReader(new FileReader(targetFile))) {
            String line;
            System.out.println("=== [파일 텍스트 출력] ===");
            while ((line = br.readLine()) != null) { // 한 줄씩 텍스트 읽기
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            System.err.println("오류: 지정한 파일이 존재하지 않습니다.");
        } catch (IOException e) {
            System.err.println("파일 입출력 예외 발생: " + e.getMessage());
        }
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`FileWriter\`로 파일에 텍스트를 쓸 때 기존 내용을 덮어쓰지 않고 뒤에 덧붙이려면(Append)?**
A. 생성자의 두 번째 파라미터로 \`true\`를 전달하면 됩니다. (\`new FileWriter("file.txt", true);\` 사용)
`
  },
  {
    order_index: 9,
    slug: 'ch09-gui-basics-and-swing-components',
    title: '자바 GUI 기초: Swing 컴포넌트와 컨테이너 및 레이아웃',
    seo_title: '자바 GUI 프로그래밍 - Swing, JFrame, JPanel, Component 및 Layout Manager',
    seo_description: '윈도우 그래픽 창을 띄우는 Swing 프로그래밍, JFrame, JPanel 컨테이너, 레이아웃 매니저(Flow, Border, Grid) 및 기본 GUI 컴포넌트 배치를 학습합니다.',
    excerpt: '윈도우 그래픽 데스크톱 창(Window)을 띄우고 버튼, 라벨, 텍스트 입력 칸을 배치하는 Swing 컴포넌트와 레이아웃 매니저(Layout Manager)를 익힙니다.',
    content_md: `사용자가 마우스와 키보드로 상호작용하는 윈도우 그래픽 화면을 만드는 **자바 GUI(Graphical User Interface) 스윙(Swing)** 프로그래밍을 배웁니다.

---

## 1. GUI Swing 용어 사전 (Glossary)

- **Container (컨테이너)**: 다른 GUI 컴포넌트 부품들을 화면 내에 탑재할 수 있는 창 그릇입니다. (예: \`JFrame\`, \`JPanel\`, \`JDialog\`)
- **Component (컴포넌트)**: 화면에 독립적으로 표시되는 시각적 부품 요소입니다. (예: \`JButton\`, \`JLabel\`, \`JTextField\`)
- **Layout Manager (레이아웃 매니저)**: 컨테이너 내부에서 컴포넌트들의 위치와 크기를 자동으로 배치해 주는 객체입니다. (\`FlowLayout\`, \`BorderLayout\`, \`GridLayout\`)

---

## 2. 주요 레이아웃 매니저 3종 비교

- **FlowLayout**: 컴포넌트를 왼쪽에서 오른쪽으로, 공간이 없으면 다음 줄로 배치하는 기본 레이아웃.
- **BorderLayout**: 컨테이너를 **동(East), 서(West), 남(South), 북(North), 중앙(Center)** 5개 구역으로 분할 배치.
- **GridLayout**: 컨테이너를 $N \\times M$ 형태의 바둑판 모양 격자 구조로 균등 분할 배치.

---

## 3. Swing 윈도우 창 띄우기 실습 예제

\`\`\`java
import javax.swing.*;
import java.awt.*;

public class MyFirstSwingFrame extends JFrame {
    public MyFirstSwingFrame() {
        setTitle("DAVHAVE GUI Swing 창");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // 창 닫기 시 프로세스 종료
        setLayout(new BorderLayout()); // 레이아웃 지정

        // 컴포넌트 생성 및 배치
        JLabel label = new JLabel("자바 Swing GUI 상단 제목", SwingConstants.CENTER);
        JButton btn = new JButton("클릭하세요");

        add(label, BorderLayout.NORTH);
        add(btn, BorderLayout.CENTER);

        setVisible(true); // 윈도우 창 화면 표시
    }

    public static void main(String[] args) {
        new MyFirstSwingFrame();
    }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 컴포넌트를 원하는 절대 좌표(x, y) 위치에 직접 배치하려면?**
A. \`setLayout(null);\` 로 레이아웃 매니저를 제거한 뒤, 각 컴포넌트의 \`setBounds(x, y, width, height);\` 메소드를 직접 호출하면 됩니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-gui-event-handling-model',
    title: '자바 GUI 이벤트 처리 모델 (Event Source, Listener, Object)',
    seo_title: '자바 GUI 이벤트 처리 - ActionListener, MouseListener, KeyListener & Adapter',
    seo_description: '이벤트 기반 프로그래밍(Event-Driven), Event Source, Event Listener, 마우스/키보드 이벤트 처리 및 어댑터(Adapter) 클래스 활용법을 학습합니다.',
    excerpt: '버튼 클릭, 마우스 이동, 키보드 입력 등 사용자의 동작을 감지하여 실행되는 자바 GUI 이벤트 처리(Event Handling) 모델과 리스너 클래스를 익힙니다.',
    content_md: `사용자가 버튼을 누르거나 마우스를 움직이고 키보드를 칠 때 발생하는 동작을 감지하여 코드를 실행시키는 **이벤트 기반 프로그래밍(Event-Driven Programming)**을 학습합니다.

---

## 1. 이벤트 처리 모델 3대 요소 (Glossary)

- **Event Source (이벤트 소스)**: 사용자 동작으로 이벤트가 발생한 대상 컴포넌트 객체입니다. (예: 클릭된 \`JButton\`)
- **Event Object (이벤트 객체)**: 발생한 이벤트의 종류, 발생 시각, 마우스 좌표 등의 정보를 담고 있는 객체입니다. (예: \`ActionEvent\`, \`MouseEvent\`, \`KeyEvent\`)
- **Event Listener (이벤트 리스너)**: 이벤트를 수신하여 처리하는 인터페이스로, 개발자가 내부 메소드를 구현해야 합니다. (예: \`ActionListener\`)

---

## 2. 버튼 클릭 이벤트 연동 실습

\`\`\`java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EventHandlingFrame extends JFrame {
    private JLabel statusLabel;
    private int clickCount = 0;

    public EventHandlingFrame() {
        setTitle("이벤트 처리 실습");
        setSize(350, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        JButton actionBtn = new JButton("카운트 증가 버튼");
        statusLabel = new JLabel("클릭 횟수: 0회");

        // 이벤트 소스에 리스너 등록 (익명 클래스 방식)
        actionBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                clickCount++;
                statusLabel.setText("클릭 횟수: " + clickCount + "회");
            }
        });

        add(actionBtn);
        add(statusLabel);
        setVisible(true);
    }

    public static void main(String[] args) {
        new EventHandlingFrame();
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 리스너(Listener)와 어댑터(Adapter) 클래스의 차이는 무엇인가요?**
A. 리스너는 인터페이스이므로 포함된 모든 메소드를 의무 구현해야 하지만, 어댑터 클래스는 리스너를 미리 빈 몸체로 구현해둔 추상 클래스이므로 **필요한 메소드만 선택 오버라이딩**할 수 있어 편합니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-swing-advanced-components-use',
    title: '고급 Swing 컴포넌트 활용 (JCheckBox, JRadioButton, JList, JComboBox)',
    seo_title: '자바 Swing 컴포넌트 - JTextField, JTextArea, JCheckBox, JComboBox & JDialog',
    seo_description: '다양한 Swing 컴포넌트(JTextField, JTextArea, JCheckBox, JRadioButton, ButtonGroup, JComboBox, JList)의 활용 및 대화상자(JDialog) 구축을 배웁니다.',
    excerpt: '체크박스, 라디오 버튼, 드롭다운 콤보박스, 리스트 박스 및 여러 줄 입력 텍스트 영역 등 풍부한 GUI 컴포넌트와 팝업 대화상자를 다룹니다.',
    content_md: `실무 데스크톱 프로그램에서 널리 쓰이는 **다양한 고급 스윙(Swing) 컴포넌트**와 팝업 대화상자(**\`JDialog\`**)를 다룹니다.

---

## 1. 고급 컴포넌트 용어 사전 (Glossary)

- **JCheckBox**: 다중 선택(Multiple Choice)이 가능한 체크박스 컴포넌트입니다.
- **JRadioButton**: 여러 선택지 중 오직 **단 1개만 선택** 가능한 원형 라디오 버튼입니다. (\`ButtonGroup\`으로 묶음 필수)
- **JComboBox**: 클릭하면 아래로 선택 목록이 드롭다운(Drop-down)되는 컴포넌트입니다.
- **JTextArea**: 여러 줄의 텍스트를 입력 및 표시할 수 있는 대용량 입력 영역입니다. (\`JScrollPane\`으로 감싸기 필수)
- **JDialog**: 메인 윈도우 창 외에 알림이나 추가 입력을 받기 위해 떠오르는 팝업 창입니다.

---

## 2. 라디오 버튼과 콤보박스 활용 예제

\`\`\`java
import javax.swing.*;
import java.awt.*;

public class AdvancedComponentsFrame extends JFrame {
    public AdvancedComponentsFrame() {
        setTitle("고급 Swing 컴포넌트");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        // 1. 라디오 버튼 그룹화
        JRadioButton r1 = new JRadioButton("남자");
        JRadioButton r2 = new JRadioButton("여자", true); // 기본 선택
        ButtonGroup group = new ButtonGroup();
        group.add(r1); group.add(r2);

        // 2. 드롭다운 콤보박스
        String[] cities = {"서울", "부산", "대구", "인천", "광주"};
        JComboBox<String> cityCombo = new JComboBox<>(cities);

        add(new JLabel("성별:")); add(r1); add(r2);
        add(new JLabel("거주지:")); add(cityCombo);

        setVisible(true);
    }

    public static void main(String[] args) {
        new AdvancedComponentsFrame();
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`JTextArea\`에 텍스트가 넘칠 때 스크롤바가 안 생기나요?**
A. \`JTextArea\` 자체에는 스크롤바가 없으므로 \`JScrollPane scrollPane = new JScrollPane(textArea);\` 형태로 스크롤 팬으로 감싸서 컨테이너에 배치해야 스크롤바가 생깁니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-graphics-paint-and-drawing',
    title: '그래픽과 칠하기 (Graphics, Color, Font 및 이미지)',
    seo_title: '자바 Swing 그래픽 - Graphics, paintComponent(), Color, Font & drawImage',
    seo_description: '화면에 직접 도형, 선, 텍스트 및 이미지를 그리는 paintComponent() 메소드 오버라이딩, Graphics 객체, Color, Font 및 이미지 출력을 다룹니다.',
    excerpt: '패널에 선, 원, 사각형 도형을 그리거나 이미지를 렌더링하는 \`paintComponent()\`, Graphics 객체 및 그래픽 처리 기법을 배웁니다.',
    content_md: `컴포넌트 표면에 선, 원, 사각형, 텍스트, 이미지를 커스텀으로 직접 그려 넣는 **자바 2D 그래픽(Graphics)** 처리 기법을 다룹니다.

---

## 1. 그래픽 처리 용어 사전 (Glossary)

- **Graphics Class**: 선, 도형, 텍스트, 이미지를 그리는 그리기 도구 패키지 클래스입니다.
- **\`paintComponent(Graphics g)\`**: Swing 컴포넌트가 화면에 다시 그려져야 할 때 JVM이 자동 호출해 주는 커스텀 그래픽 메소드입니다.
- **repaint()**: 화면 변경이 일어났을 때 컴포넌트의 \`paintComponent()\`를 강제로 다시 호출하도록 요청하는 메소드입니다.

---

## 2. 커스텀 그래픽 패널 구현 예제

\`\`\`java
import javax.swing.*;
import java.awt.*;

class CustomPaintPanel extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g); // 기존 배경 칠하기

        // 1. 빨간색 직선 그리기
        g.setColor(Color.RED);
        g.drawLine(20, 20, 200, 20);

        // 2. 파란색 채워진 사각형 그리기
        g.setColor(Color.BLUE);
        g.fillRect(20, 50, 100, 60);

        // 3. 초록색 원(타원) 그리기
        g.setColor(Color.GREEN);
        g.fillOval(150, 50, 80, 80);

        // 4. 커스텀 폰트 텍스트 출력
        g.setColor(Color.BLACK);
        g.setFont(new Font("Pretendard", Font.BOLD, 18));
        g.drawString("DAVHAVE Java 2D Graphics", 20, 180);
    }
}

public class GraphicFrame extends JFrame {
    public GraphicFrame() {
        setTitle("자바 2D 그래픽 실습");
        setSize(320, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        add(new CustomPaintPanel());
        setVisible(true);
    }
    public static void main(String[] args) { new GraphicFrame(); }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`paintComponent()\` 메소드를 개발자가 코드에서 직접 \`panel.paintComponent(g)\` 로 부르면 안 되나요?**
A. 안 됩니다! 그래픽 렌더링 스레드의 제어권은 JVM에 있으므로, 화면을 다시 그리려면 개발자는 반드시 \`panel.repaint()\` 메소드를 호출해야 안전하게 갱신됩니다.
`
  },
  {
    order_index: 13,
    slug: 'ch13-threads-and-multitasking',
    title: '스레드와 멀티태스킹 (Thread, Runnable 및 동기화)',
    seo_title: '자바 멀티스레딩 - Thread 상속, Runnable 구현, 스레드 동기화 synchronized & wait/notify',
    seo_description: '스레드 생성을 위한 Thread 상속 및 Runnable 구현, 스레드 생명주기 상태, synchronized 임계영역 동기화, wait()/notify() 통신을 학습합니다.',
    excerpt: '프로세스 내에서 병렬 작업을 수행하는 스레드의 생성, 스레드 상태 제어 및 공유 자원 경합을 막는 synchronized 동기화 기법을 다룹니다.',
    content_md: `하나의 애플리케이션 안에서 두 개 이상의 작업을 동시에 병렬 처리하는 **스레드(Thread)와 멀티태스킹** 및 동기화 기술을 배웁니다.

---

## 1. 스레드 핵심 용어 사전 (Glossary)

- **Thread (스레드)**: 프로세스 내부에서 독립적으로 실행되는 제어 흐름의 최단 단위입니다.
- **Runnable Interface**: 스레드가 실행할 작업 내용(\`run()\` 메소드)만 분리하여 선언하는 함수형 인터페이스입니다.
- **Thread State (스레드 상태)**: \`NEW\`(생성) $\rightarrow$ \`RUNNABLE\`(실행가능) $\rightarrow$ \`WAITING/TIMED_WAITING\`(대기) $\rightarrow$ \`TERMINATED\`(종료)
- **Critical Section (임계 영역)**: 둘 이상의 스레드가 동시 접근할 때 데이터 꼬임이 발생하는 공유 자원 영역입니다.
- **synchronized**: 한 스레드가 임계 영역을 실행하는 동안 다른 스레드의 접근을 차단하는 모니터 락 키워드입니다.

---

## 2. \`synchronized\` 동기화 처리 실습

\`\`\`java
class SharedPrinter {
    // 동기화 메소드로 1번에 1개 스레드만 텍스트 출력 허용
    public synchronized void printNotice(String user, String text) {
        System.out.print("[" + user + "]: ");
        for (int i = 0; i < text.length(); i++) {
            System.out.print(text.charAt(i));
            try { Thread.sleep(50); } catch (InterruptedException e) {}
        }
        System.out.println();
    }
}

public class MultiThreadSyncMain {
    public static void main(String[] args) {
        SharedPrinter printer = new SharedPrinter();

        Thread t1 = new Thread(() -> printer.printNotice("사용자 A", "안녕하세요! 동기화 테스트입니다."));
        Thread t2 = new Thread(() -> printer.printNotice("사용자 B", "반갑습니다! 멀티스레드입니다."));

        t1.start();
        t2.start();
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`thread.start()\` 대신 \`thread.run()\`을 호출하면 어떻게 되나요?**
A. \`start()\`는 새로운 독립 스레드를 생성하여 병렬로 \`run()\`을 실행하지만, \`run()\`을 직접 부르면 새 스레드가 생성되지 않고 현재 호출한 메인 스레드 상에서 단순 메소드로만 실행됩니다.
`
  },
  {
    order_index: 14,
    slug: 'ch14-lambda-expressions-and-stream-api',
    title: '람다식(Lambda Expression)과 스트림 API 데이터 가공',
    seo_title: '자바 람다와 스트림 API - @FunctionalInterface, filter, map, collect, reduce',
    seo_description: '람다식(Lambda Expression) 문법, 함수형 인터페이스(@FunctionalInterface), 스트림 API의 중간 연산(filter, map)과 최종 연산(collect, reduce)을 학습합니다.',
    excerpt: '코드를 간결히 만들어 주는 람다식(Lambda) 표현식과 컬렉션 요소를 선언형으로 필터링하고 변환하는 스트림 API 데이터 가공 파이프라인을 배웁니다.',
    content_md: `자바 8부터 도입된 **람다식(Lambda Expression)**과 컬렉션 데이터를 선언형으로 가공하는 **스트림 API(Stream API)**를 학습합니다.

---

## 1. 람다 & 스트림 용어 사전 (Glossary)

- **Lambda Expression**: 메소드를 식(Expression) 형태로 간결하게 표현한 익명 함수 문법입니다. (\`(a, b) -> a + b\`)
- **Functional Interface**: 단 1개의 추상 메소드만 존재하는 인터페이스입니다. (\`@FunctionalInterface\` 어노테이션 사용)
- **Stream API**: 컬렉션이나 배열의 요소를 원본 변경 없이 가공, 필터링, 매핑, 집계하는 함수형 파이프라인 연산입니다.

---

## 2. 스트림 API 파이프라인 가공 예제

\`\`\`java
import java.util.*;
import java.util.stream.Collectors;

public class StreamApiExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Kim", "Park", "Lee", "Choi", "Kang");

        // [요구사항] 이름이 'K'로 시작하는 사람들만 골라 대문자로 바꾸고 정렬하여 리스트로 수집
        List<String> result = names.stream()
            .filter(name -> name.startsWith("K")) // 중간 연산: 'K'로 시작 필터링
            .map(String::toUpperCase)              // 중간 연산: 대문자 매핑
            .sorted()                              // 중간 연산: 정렬
            .collect(Collectors.toList());         // 최종 연산: 결과 수집

        System.out.println("가공 결과: " + result);
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 스트림에서 \`map()\`과 \`flatMap()\`의 차이는?**
A. \`map()\`은 요소 1개를 다른 형태 1개로 변환하지만, \`flatMap()\`은 요소 1개가 여러 개로 분할되는 구조(예: 리스트의 리스트)를 하나의 단일 평탄화 스트림으로 쫙 펼쳐서 변환합니다.
`
  },
  {
    order_index: 15,
    slug: 'ch15-network-programming-socket',
    title: '네트워크 프로그래밍과 TCP/UDP 소켓 통신',
    seo_title: '자바 네트워크 - TCP ServerSocket, Socket, UDP Datagram & 멀티스레드 서버',
    seo_description: '네트워크 IP 주소와 포트, TCP 기반 연결 소켓(ServerSocket/Socket), UDP 비연결 Datagram 통신 및 멀티스레드 1:N 채팅 서버 구축을 해설합니다.',
    excerpt: '컴퓨터 간 네트워크 데이터를 주고받는 TCP/IP 기반 ServerSocket 과 Socket 통신 및 UDP 데이터그램 프로그래밍을 배웁니다.',
    content_md: `네트워크 망을 통해 서로 다른 컴퓨터 간에 데이터를 송수신하는 **TCP/IP 소켓 네트워크 프로그래밍**을 배웁니다.

---

## 1. 네트워크 용어 사전 (Glossary)

- **IP Address**: 네트워크 상에서 컴퓨터 장치를 식별하는 고유한 통신 주소입니다. (예: 192.168.0.1)
- **Port Number**: 한 컴퓨터 내부에서 구동 중인 수많은 네트워크 프로그램 중 특정 서비스를 구분하는 16-bit 번호입니다. (0~65535)
- **TCP (Transmission Control Protocol)**: 연결 수립 과정을 거쳐 데이터 손실 없이 정확히 전달함을 보장하는 신뢰성 프로토콜입니다.
- **ServerSocket**: 클라이언트의 접속 요청을 특정 포트에서 대기(\`accept()\`)하는 서버 전용 소켓입니다.

---

## 2. TCP 멀티스레드 에코 서버 구현 예제

\`\`\`java
import java.io.*;
import java.net.*;

public class TcpEchoServer {
    public static void main(String[] args) {
        int port = 8888;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("서버가 " + port + " 포트에서 클라이언트 접속을 대기합니다...");

            while (true) {
                Socket socket = serverSocket.accept(); // 접속 승인
                System.out.println("클라이언트 연결됨: " + socket.getInetAddress());

                // 입출력 스트림 획득
                BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);

                String clientMsg;
                while ((clientMsg = reader.readLine()) != null) {
                    System.out.println("수신 메세지: " + clientMsg);
                    writer.println("Echo: " + clientMsg); // 에코 응답
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

## 3. 자주 묻는 질문 (Q&A)

**Q. TCP 통신에서 \`accept()\` 메소드는 왜 블로킹(Blocking)되나요?**
A. 클라이언트가 \`new Socket(ip, port)\`로 실제 접속을 시도할 때까지 스레드가 대기 상태에 들어가기 때문입니다. 클라이언트가 연결되면 통신용 \`Socket\` 객체를 리턴하며 블로킹이 해제됩니다.
`
  },
  {
    order_index: 16,
    slug: 'ch16-jdbc-database-programming-and-crud',
    title: 'JDBC 데이터베이스 연동 및 SQL CRUD 실행',
    seo_title: '자바 JDBC 프로그래밍 - Connection, PreparedStatement, ResultSet 및 CRUD',
    seo_description: '관계형 데이터베이스(MySQL, Oracle, SQLite) 연동 JDBC API, PreparedStatement 기반 안전한 SQL CRUD 명령 실행과 SQL Injection 해킹 방지를 배웁니다.',
    excerpt: '자바 애플리케이션과 관계형 DB(RDBMS)를 연결하는 JDBC 기술 및 PreparedStatement 기반 안전한 SQL CRUD 쿼리 실행을 배웁니다.',
    content_md: `자바 애플리케이션과 **관계형 데이터베이스(MySQL, Oracle, SQLite)**를 연동하여 데이터를 영구 저장하고 조작하는 **JDBC(Java Database Connectivity)** 기술을 다룹니다.

---

## 1. JDBC 연동 용어 사전 (Glossary)

- **JDBC (Java Database Connectivity)**: 자바 언어로 RDBMS 데이터베이스에 접속하여 SQL 문을 실행하도록 돕는 표준 API 인터페이스입니다.
- **DriverManager**: 데이터베이스 드라이버를 관리하고 DB와의 세션 연결 자원인 \`Connection\` 객체를 생성해 주는 클래스입니다.
- **PreparedStatement**: SQL 쿼리 뼈대를 미리 컴파일하고 파라미터만 바인딩하여 실행하는 객체로, **SQL Injection 공격을 완벽 차단**합니다.
- **ResultSet**: \`SELECT\` 쿼리 실행 결과로 반환된 테이블 형태의 데이터 행(Row)들을 조회하는 커서 객체입니다.

---

## 2. JDBC DB 연결 및 SQL CRUD 실행 예제

\`\`\`java
import java.sql.*;

public class JdbcCrudMain {
    private static final String URL = "jdbc:sqlite:student.db"; // DB URL

    public static void main(String[] args) {
        String insertSql = "INSERT INTO students (name, score) VALUES (?, ?)";
        String selectSql = "SELECT * FROM students";

        try (Connection conn = DriverManager.getConnection(URL)) {
            System.out.println("데이터베이스 연결 성공!");

            // 1. 데이터 추가 (Create)
            try (PreparedStatement pstmt = conn.prepareStatement(insertSql)) {
                pstmt.setString(1, "홍길동");
                pstmt.setInt(2, 95);
                pstmt.executeUpdate();
                System.out.println("학생 데이터 등록 성공.");
            }

            // 2. 데이터 조회 (Read)
            try (PreparedStatement pstmt = conn.prepareStatement(selectSql);
                 ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    System.out.println("ID: " + rs.getInt("id") + 
                                       " | 이름: " + rs.getString("name") + 
                                       " | 점수: " + rs.getInt("score"));
                }
            }
        } catch (SQLException e) {
            System.err.println("DB 작업 에러: " + e.getMessage());
        }
    }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. \`executeUpdate()\`와 \`executeQuery()\` 메소드의 차이는?**
A. \`executeUpdate()\`는 \`INSERT\`, \`UPDATE\`, \`DELETE\` 처럼 DB 내용을 변경하는 쿼리에 쓰이며 영향받은 행(Row)의 개수를 반환합니다. 반면 \`executeQuery()\`는 \`SELECT\` 쿼리에 쓰이며 \`ResultSet\` 결과 객체를 반환합니다.
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
  let sqlContent = `-- Full Java Professor Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_java_prof_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 4 full SQL chunk files for Java Professor!');
