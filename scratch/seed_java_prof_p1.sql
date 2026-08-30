-- Full Java Professor Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch01-java-introduction-and-jvm',
  '자바(Java)의 시작: 플랫폼 독립성과 JVM, OpenJDK & 개발 환경 구축',
  '플랫폼 독립성(WORA)을 갖춘 자바 언어의 탄생 배경, JVM의 메모리 3대 영역 구조 및 OpenJDK, 이클립스 통합 개발 환경(IDE) 구축을 배웁니다.',
  '**자바(Java)**는 1995년 선 마이클로시스템즈(Sun Microsystems)의 제임스 고슬링(James Gosling) 연구팀에 의해 발표된 대표적인 **객체지향 프로그래밍 언어(OOP)**입니다. "WORA (Write Once, Run Anywhere - 한 번 작성하면 어느 운영체제에서나 실행된다)"라는 플랫폼 독립적 이식성을 자랑합니다.

---

## 1. 자바 교수용 핵심 전문 용어 사전 (Glossary)

- **JVM (Java Virtual Machine)**: 자바 바이트코드를 해당 OS(Windows, macOS, Linux)의 네이티브 기계어로 실시간 해석(JIT 컴파일러)하여 실행하는 가상 머신입니다.
- **JDK (Java Development Kit)**: 자바 개발을 위한 컴파일러(`javac`), 디버거, 표준 API 라이브러리가 포함된 개발 키트입니다. (OpenJDK 등 사용)
- **JRE (Java Runtime Environment)**: 자바 프로그램을 실행하기만 할 때 필요한 동작 환경으로 JVM과 클래스 라이브러리가 탑재되어 있습니다.
- **Bytecode (바이트코드)**: 소스코드(`.java`)를 `javac` 컴파일러로 빌드하면 생성되는 반제품 명령어 형태의 `.class` 파일입니다.
- **JIT Compiler (Just-In-Time)**: 바이트코드를 인터프리터 방식으로 해석하다가 자주 실행되는 루프 코드를 발견하면 기계어로 직접 번역하여 대폭 속도를 올리는 하이브리드 엔진입니다.
- **Garbage Collector (GC)**: 힙(Heap) 메모리에서 참조가 끊긴 쓰레기 객체(Dead Object)들을 자동으로 추적하여 회수하는 동적 메모리 관리 스레드입니다.

---

## 2. JVM 내부 메모리 3대 구조 (Memory Architecture)

1. **메소드 영역 (Method Area / Metaspace)**: 바이트코드의 클래스 구동 정보, static 변수, 메소드 코드, 상수 풀(Constant Pool)이 상주하는 메모리입니다.
2. **힙 영역 (Heap Area)**: `new` 연산자로 동적 할당되는 모든 인스턴스 객체와 배열이 저장되며, 가비지 컬렉션(GC)의 관리 대상이 됩니다.
3. **스택 영역 (Stack Area)**: 메소드 호출 시 생성되는 프레임(Stack Frame) 공간으로, 지역 변수, 매개변수, 연산 결과가 임시 저장되며 메소드 종료 시 자동 소멸합니다.

---

## 3. 첫 번째 자바 프로그램: HelloJava.java

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Java SE, Java EE, Java ME의 차이는 무엇인가요?**
A. Java SE(Standard Edition)는 데스크톱 및 표준 기본 자바 플랫폼이고, Java EE(Enterprise Edition - 현 Jakarta EE)는 웹 서버 및 대규모 기업용 확장 플랫폼이며, Java ME(Micro Edition)는 임베디드 및 가전제품용 축소 플랫폼입니다.
',
  '<p>**자바(Java)**는 1995년 선 마이클로시스템즈(Sun Microsystems)의 제임스 고슬링(James Gosling) 연구팀에 의해 발표된 대표적인 **객체지향 프로그래밍 언어(OOP)**입니다. &quot;WORA (Write Once, Run Anywhere - 한 번 작성하면 어느 운영체제에서나 실행된다)&quot;라는 플랫폼 독립적 이식성을 자랑합니다.</p>
<hr>
<h2>1. 자바 교수용 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>JVM (Java Virtual Machine)</strong>: 자바 바이트코드를 해당 OS(Windows, macOS, Linux)의 네이티브 기계어로 실시간 해석(JIT 컴파일러)하여 실행하는 가상 머신입니다.</li>
<li><strong>JDK (Java Development Kit)</strong>: 자바 개발을 위한 컴파일러(<code>javac</code>), 디버거, 표준 API 라이브러리가 포함된 개발 키트입니다. (OpenJDK 등 사용)</li>
<li><strong>JRE (Java Runtime Environment)</strong>: 자바 프로그램을 실행하기만 할 때 필요한 동작 환경으로 JVM과 클래스 라이브러리가 탑재되어 있습니다.</li>
<li><strong>Bytecode (바이트코드)</strong>: 소스코드(<code>.java</code>)를 <code>javac</code> 컴파일러로 빌드하면 생성되는 반제품 명령어 형태의 <code>.class</code> 파일입니다.</li>
<li><strong>JIT Compiler (Just-In-Time)</strong>: 바이트코드를 인터프리터 방식으로 해석하다가 자주 실행되는 루프 코드를 발견하면 기계어로 직접 번역하여 대폭 속도를 올리는 하이브리드 엔진입니다.</li>
<li><strong>Garbage Collector (GC)</strong>: 힙(Heap) 메모리에서 참조가 끊긴 쓰레기 객체(Dead Object)들을 자동으로 추적하여 회수하는 동적 메모리 관리 스레드입니다.</li>
</ul>
<hr>
<h2>2. JVM 내부 메모리 3대 구조 (Memory Architecture)</h2>
<ol>
<li><strong>메소드 영역 (Method Area / Metaspace)</strong>: 바이트코드의 클래스 구동 정보, static 변수, 메소드 코드, 상수 풀(Constant Pool)이 상주하는 메모리입니다.</li>
<li><strong>힙 영역 (Heap Area)</strong>: <code>new</code> 연산자로 동적 할당되는 모든 인스턴스 객체와 배열이 저장되며, 가비지 컬렉션(GC)의 관리 대상이 됩니다.</li>
<li><strong>스택 영역 (Stack Area)</strong>: 메소드 호출 시 생성되는 프레임(Stack Frame) 공간으로, 지역 변수, 매개변수, 연산 결과가 임시 저장되며 메소드 종료 시 자동 소멸합니다.</li>
</ol>
<hr>
<h2>3. 첫 번째 자바 프로그램: HelloJava.java</h2>
<pre><code class="language-java">/*
  파일명: HelloJava.java
  설명: 첫 자바 클래스 선언 및 메인 메소드 출력 실습
*/

public class HelloJava {
    // 자바 애플리케이션 시작점(Main Method)
    public static void main(String[] args) {
        System.out.println(&quot;Hello, DAVHAVE Java World!&quot;);
        System.out.println(&quot;자바 프로그래밍 강좌에 오신 것을 환영합니다.&quot;);
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Java SE, Java EE, Java ME의 차이는 무엇인가요?</strong>
A. Java SE(Standard Edition)는 데스크톱 및 표준 기본 자바 플랫폼이고, Java EE(Enterprise Edition - 현 Jakarta EE)는 웹 서버 및 대규모 기업용 확장 플랫폼이며, Java ME(Micro Edition)는 임베디드 및 가전제품용 축소 플랫폼입니다.</p>
',
  'published',
  '자바 입문 가이드 - WORA, JVM 메모리 구조, OpenJDK & 이클립스 환경설정',
  '자바의 역사와 4대 특징, 가상 머신 JVM(Heap, Stack, Method Area) 작동 메커니즘, 가비지 컬렉터(GC), OpenJDK 및 이클립스(Eclipse) 설치 가이드를 다룹니다.',
  1,
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch02-java-basics-data-types-operators',
  '자바 기본 프로그래밍: 식별자, 변수, 8대 기본 자료형, Scanner 및 연산자',
  '자바의 식별자 명명 규칙, 8가지 기본 자료형(int, double, boolean 등)의 메모리 크기, Scanner 키보드 데이터 입력 및 연산자 활용법을 배웁니다.',
  '프로그램에서 데이터를 보관하는 메모리 공간인 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**, 그리고 키보드 입력을 처리하는 **Scanner**를 배웁니다.

---

## 1. 기본 프로그래밍 용어 사전 (Glossary)

- **Primitive Type (기본 자료형)**: 실제 산술/논리 데이터 값을 메모리 스택 영역에 직접 저장하는 8가지 기본 타입입니다.
- **Reference Type (참조 자료형)**: 데이터 객체의 실제 본체는 Heap 영역에 저장하고, 변수 스택에는 메모리 주소(Address)만을 보관하는 타입입니다. (String, Array 등)
- **Scanner**: `java.util` 패키지에 포함되어 키보드로 입력한 문자열, 정수, 실수 데이터를 편리하게 읽어들이는 입출력 클래스입니다.
- **Casting (형변환)**: 변수나 리터럴의 데이터 타입을 다른 타입으로 변환하는 연산입니다. (자동 형변환 vs 강제 형변환)

---

## 2. 자바 8대 기본 자료형 (Primitive Types) 스펙표

| 데이터 종류 | 자료형 키워드 | 메모리 크기 | 데이터 표현 범위 및 리터럴 예시 |
| :--- | :--- | :--- | :--- |
| **논리형** | `boolean` | 1 byte | `true` 또는 `false` |
| **문자형** | `char` | 2 bytes | 유니코드(Unicode) 1문자 (예: `''A''`, `''가''`) |
| **정수형** | `byte` | 1 byte | $-128 \sim 127$ |
| | `short` | 2 bytes | $-32,768 \sim 32,767$ |
| | `int` | 4 bytes | $-21\text{억} \sim 21\text{억}$ (기본 정수형) |
| | `long` | 8 bytes | $-9 \times 10^{18} \sim 9 \times 10^{18}$ (예: `100L`) |
| **실수형** | `float` | 4 bytes | 소수점 약 7자리 정밀도 (예: `3.14F`) |
| | `double` | 8 bytes | 소수점 약 15자리 정밀도 (기본 실수형) |

---

## 3. Scanner 키보드 입력 및 연산자 실습

```java
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

        System.out.println("
=== [사용자 프로필] ===");
        System.out.println("이름: " + name);
        System.out.println("나이: " + age + "세 (" + ((age >= 19) ? "성인" : "미성년자") + ")");
        System.out.println("키: " + height + "cm");

        scanner.close(); // Scanner 리소스 닫기
    }
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `scanner.nextLine()`과 `scanner.next()`의 차이는 무엇인가요?**
A. `next()`는 공백(스페이스/탭)을 기준으로 단어 하나만 읽어들이고, `nextLine()`은 엔터(`
`)를 칠 때까지 공백을 포함한 한 줄 전체 문장을 읽어옵니다.
',
  '<p>프로그램에서 데이터를 보관하는 메모리 공간인 **변수(Variable)**와 데이터의 종류를 규정하는 <strong>자료형(Data Type)</strong>, 그리고 키보드 입력을 처리하는 <strong>Scanner</strong>를 배웁니다.</p>
<hr>
<h2>1. 기본 프로그래밍 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Primitive Type (기본 자료형)</strong>: 실제 산술/논리 데이터 값을 메모리 스택 영역에 직접 저장하는 8가지 기본 타입입니다.</li>
<li><strong>Reference Type (참조 자료형)</strong>: 데이터 객체의 실제 본체는 Heap 영역에 저장하고, 변수 스택에는 메모리 주소(Address)만을 보관하는 타입입니다. (String, Array 등)</li>
<li><strong>Scanner</strong>: <code>java.util</code> 패키지에 포함되어 키보드로 입력한 문자열, 정수, 실수 데이터를 편리하게 읽어들이는 입출력 클래스입니다.</li>
<li><strong>Casting (형변환)</strong>: 변수나 리터럴의 데이터 타입을 다른 타입으로 변환하는 연산입니다. (자동 형변환 vs 강제 형변환)</li>
</ul>
<hr>
<h2>2. 자바 8대 기본 자료형 (Primitive Types) 스펙표</h2>
<table>
<thead>
<tr>
<th align="left">데이터 종류</th>
<th align="left">자료형 키워드</th>
<th align="left">메모리 크기</th>
<th align="left">데이터 표현 범위 및 리터럴 예시</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>논리형</strong></td>
<td align="left"><code>boolean</code></td>
<td align="left">1 byte</td>
<td align="left"><code>true</code> 또는 <code>false</code></td>
</tr>
<tr>
<td align="left"><strong>문자형</strong></td>
<td align="left"><code>char</code></td>
<td align="left">2 bytes</td>
<td align="left">유니코드(Unicode) 1문자 (예: <code>&#39;A&#39;</code>, <code>&#39;가&#39;</code>)</td>
</tr>
<tr>
<td align="left"><strong>정수형</strong></td>
<td align="left"><code>byte</code></td>
<td align="left">1 byte</td>
<td align="left">$-128 \sim 127$</td>
</tr>
<tr>
<td align="left"></td>
<td align="left"><code>short</code></td>
<td align="left">2 bytes</td>
<td align="left">$-32,768 \sim 32,767$</td>
</tr>
<tr>
<td align="left"></td>
<td align="left"><code>int</code></td>
<td align="left">4 bytes</td>
<td align="left">$-21\text{억} \sim 21\text{억}$ (기본 정수형)</td>
</tr>
<tr>
<td align="left"></td>
<td align="left"><code>long</code></td>
<td align="left">8 bytes</td>
<td align="left">$-9 \times 10^{18} \sim 9 \times 10^{18}$ (예: <code>100L</code>)</td>
</tr>
<tr>
<td align="left"><strong>실수형</strong></td>
<td align="left"><code>float</code></td>
<td align="left">4 bytes</td>
<td align="left">소수점 약 7자리 정밀도 (예: <code>3.14F</code>)</td>
</tr>
<tr>
<td align="left"></td>
<td align="left"><code>double</code></td>
<td align="left">8 bytes</td>
<td align="left">소수점 약 15자리 정밀도 (기본 실수형)</td>
</tr>
</tbody></table>
<hr>
<h2>3. Scanner 키보드 입력 및 연산자 실습</h2>
<pre><code class="language-java">import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print(&quot;이름을 입력하세요: &quot;);
        String name = scanner.next(); // 문자열 입력

        System.out.print(&quot;나이를 입력하세요: &quot;);
        int age = scanner.nextInt(); // 정수 입력

        System.out.print(&quot;키(cm)를 입력하세요: &quot;);
        double height = scanner.nextDouble(); // 실수 입력

        System.out.println(&quot;
=== [사용자 프로필] ===&quot;);
        System.out.println(&quot;이름: &quot; + name);
        System.out.println(&quot;나이: &quot; + age + &quot;세 (&quot; + ((age &gt;= 19) ? &quot;성인&quot; : &quot;미성년자&quot;) + &quot;)&quot;);
        System.out.println(&quot;키: &quot; + height + &quot;cm&quot;);

        scanner.close(); // Scanner 리소스 닫기
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>scanner.nextLine()</code>과 <code>scanner.next()</code>의 차이는 무엇인가요?</strong>
A. <code>next()</code>는 공백(스페이스/탭)을 기준으로 단어 하나만 읽어들이고, <code>nextLine()</code>은 엔터(<code> </code>)를 칠 때까지 공백을 포함한 한 줄 전체 문장을 읽어옵니다.</p>
',
  'published',
  '자바 기본 문법 - 8대 기본 자료형, 변수, Scanner 입력, 형변환 및 연산자',
  '식별자 규칙, 8가지 기본 자료형(Primitive Types), 참조 자료형의 차이, Scanner 키보드 입력, 자동/강제 형변환(Casting) 및 연산자 활용법을 해설합니다.',
  2,
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch03-control-flow-arrays-exceptions',
  '제어문(if, switch), 반복문(for, while), 배열(1D/2D) 및 예외 처리',
  '실행 흐름을 제어하는 조건문과 반복문, 다차원 배열(2D Array) 및 런타임 오류 시 비정상 종료를 막아주는 try-catch-finally 예외 처리를 익힙니다.',
  '프로그램의 논리적 실행 제어를 담당하는 **조건문/반복문**과 연속된 데이터를 묶는 **배열(Array)**, 런타임 예외 대처 기법인 **try-catch 예외 처리**를 배웁니다.

---

## 1. 제어문 & 예외 처리 용어 사전 (Glossary)

- **Enhanced for (향상된 for문)**: 인덱스를 사용하지 않고 배열이나 컬렉션의 처음부터 끝까지 순차 방문하는 안전한 루프 문법입니다. (`for(Type val : array)`)
- **2D Array (2차원 배열)**: 행(Row)과 열(Column)의 바둑판 형태 구조를 갖는 배열입니다. (`int[][] matrix = new int[3][4];`)
- **NullPointerException (NPE)**: 참조 변수가 `null` 상태인 상황에서 객체의 필드나 메소드를 호출하려 할 때 발생하는 대표적 예외입니다.
- **try-catch-finally**: 런타임 오류가 발생하더라도 프로그램이 강제 종료되지 않고 예외 상황을 포획 및 안전하게 마감 처리하도록 돕는 블록입니다.

---

## 2. 2차원 배열과 향상된 for문 실습

```java
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
```

---

## 3. try-catch-finally 예외 처리 실전 패턴

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. switch-case 문에서 `break` 문을 빼먹으면 어떻게 되나요?**
A. 조건이 일치하는 case 이하의 다른 case 문들이 `break`를 만날 때까지 연속 실행되어 버리는 **Fall-Through** 현상이 발생합니다. 자바 14부터는 `yield` 문법이 포함된 가독성 높은 Switch Expression을 지원합니다.
',
  '<p>프로그램의 논리적 실행 제어를 담당하는 <strong>조건문/반복문</strong>과 연속된 데이터를 묶는 <strong>배열(Array)</strong>, 런타임 예외 대처 기법인 <strong>try-catch 예외 처리</strong>를 배웁니다.</p>
<hr>
<h2>1. 제어문 &amp; 예외 처리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Enhanced for (향상된 for문)</strong>: 인덱스를 사용하지 않고 배열이나 컬렉션의 처음부터 끝까지 순차 방문하는 안전한 루프 문법입니다. (<code>for(Type val : array)</code>)</li>
<li><strong>2D Array (2차원 배열)</strong>: 행(Row)과 열(Column)의 바둑판 형태 구조를 갖는 배열입니다. (<code>int[][] matrix = new int[3][4];</code>)</li>
<li><strong>NullPointerException (NPE)</strong>: 참조 변수가 <code>null</code> 상태인 상황에서 객체의 필드나 메소드를 호출하려 할 때 발생하는 대표적 예외입니다.</li>
<li><strong>try-catch-finally</strong>: 런타임 오류가 발생하더라도 프로그램이 강제 종료되지 않고 예외 상황을 포획 및 안전하게 마감 처리하도록 돕는 블록입니다.</li>
</ul>
<hr>
<h2>2. 2차원 배열과 향상된 for문 실습</h2>
<pre><code class="language-java">public class MatrixArrayExample {
    public static void main(String[] args) {
        // 3행 2열의 2차원 배열 선언 및 초기화
        int[][] scoreMatrix = {
            {90, 85}, // 1행 (학생 1의 국어/영어)
            {78, 92}, // 2행 (학생 2의 국어/영어)
            {95, 100} // 3행 (학생 3의 국어/영어)
        };

        System.out.println(&quot;=== [학생별 성적 출력] ===&quot;);
        for (int i = 0; i &lt; scoreMatrix.length; i++) {
            int sum = 0;
            for (int j = 0; j &lt; scoreMatrix[i].length; j++) {
                sum += scoreMatrix[i][j];
            }
            double avg = (double) sum / scoreMatrix[i].length;
            System.out.println((i + 1) + &quot;번 학생 - 총점: &quot; + sum + &quot;점 | 평균: &quot; + avg + &quot;점&quot;);
        }
    }
}
</code></pre>
<hr>
<h2>3. try-catch-finally 예외 처리 실전 패턴</h2>
<pre><code class="language-java">public class TryCatchExample {
    public static void main(String[] args) {
        String[] colors = {&quot;Red&quot;, &quot;Green&quot;, &quot;Blue&quot;};

        try {
            System.out.println(&quot;색상 접근: &quot; + colors[5]); // ArrayIndexOutOfBoundsException 발생!
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println(&quot;에러: 존재하지 않는 인덱스 접근 경고!&quot;);
            System.err.println(&quot;상세 예외 메시지: &quot; + e.getMessage());
        } finally {
            System.out.println(&quot;finally 블록: 예외 발생 여부와 무관하게 무조건 실행됩니다.&quot;);
        }
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. switch-case 문에서 <code>break</code> 문을 빼먹으면 어떻게 되나요?</strong>
A. 조건이 일치하는 case 이하의 다른 case 문들이 <code>break</code>를 만날 때까지 연속 실행되어 버리는 <strong>Fall-Through</strong> 현상이 발생합니다. 자바 14부터는 <code>yield</code> 문법이 포함된 가독성 높은 Switch Expression을 지원합니다.</p>
',
  'published',
  '자바 제어문과 예외 처리 - if, switch, for, while, 2차원 배열 & try-catch',
  '조건 제어문(if, switch), 반복문(for, enhanced-for, while), 1차원 및 2차원 배열 메모리 구조, try-catch-finally 예외 처리 기법을 학습합니다.',
  3,
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch04-object-oriented-programming-classes',
  '객체지향 프로그래밍: 클래스, 객체, 생성자 및 static/final',
  '현실 세계의 사물을 객체로 설계하는 클래스(Class), 생성자 오버로딩, 클래스 공통 변수인 static 멤버 및 final 정수와 정보 은닉 캡슐화를 다룹니다.',
  '객체지향 프로그래밍(OOP)은 프로그램의 요소들을 **객체(Object)** 단위로 모델링하여 유지보수성과 재사용성을 높이는 소프트웨어 설계 기술입니다.

---

## 1. 객체지향 기초 용어 사전 (Glossary)

- **Class (클래스)**: 객체를 생성하기 위한 틀(Template)이자 설계도입니다.
- **Instance (인스턴스)**: 클래스 설계도를 바탕으로 메모리 Heap 공간에 `new` 연산자로 생성된 객체 실체입니다.
- **Constructor (생성자)**: 객체 인스턴스가 동적으로 생성될 때 자동 호출되어 필드 변수들을 초기화하는 특별한 메소드입니다.
- **static Member**: 객체마다 따로 생기지 않고, 클래스 로딩 시점에 메소드 메모리 영역에 단 하나만 생성되어 모든 인스턴스가 공유하는 멤버입니다.
- **final**: 변수에 붙으면 값 변경 불가(상수), 메소드에 붙으면 오버라이딩 불가, 클래스에 붙으면 상속 불가로 만드는 제약 키워드입니다.

---

## 2. 캡슐화 및 static/final 필드가 적용된 클래스 설계 예제

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `static` 메소드 안에서 일반 인스턴스 변수(`this.name`)를 직접 부를 수 없나요?**
A. 부를 수 없습니다! `static` 메소드는 객체가 `new` 생성되기 전 클래스 로딩 시점에 먼저 메모리에 올라가기 때문에, 아직 객체가 생기지 않았을 수도 있는 인스턴스 멤버에 직접 접근하는 것이 불가능합니다.
',
  '<p>객체지향 프로그래밍(OOP)은 프로그램의 요소들을 <strong>객체(Object)</strong> 단위로 모델링하여 유지보수성과 재사용성을 높이는 소프트웨어 설계 기술입니다.</p>
<hr>
<h2>1. 객체지향 기초 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Class (클래스)</strong>: 객체를 생성하기 위한 틀(Template)이자 설계도입니다.</li>
<li><strong>Instance (인스턴스)</strong>: 클래스 설계도를 바탕으로 메모리 Heap 공간에 <code>new</code> 연산자로 생성된 객체 실체입니다.</li>
<li><strong>Constructor (생성자)</strong>: 객체 인스턴스가 동적으로 생성될 때 자동 호출되어 필드 변수들을 초기화하는 특별한 메소드입니다.</li>
<li><strong>static Member</strong>: 객체마다 따로 생기지 않고, 클래스 로딩 시점에 메소드 메모리 영역에 단 하나만 생성되어 모든 인스턴스가 공유하는 멤버입니다.</li>
<li><strong>final</strong>: 변수에 붙으면 값 변경 불가(상수), 메소드에 붙으면 오버라이딩 불가, 클래스에 붙으면 상속 불가로 만드는 제약 키워드입니다.</li>
</ul>
<hr>
<h2>2. 캡슐화 및 static/final 필드가 적용된 클래스 설계 예제</h2>
<pre><code class="language-java">public class BankAccount {
    // 1. static 상수 (은행 이름 공통 공유)
    public static final String BANK_NAME = &quot;DAVHAVE BANK&quot;;
    
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
        System.out.println(owner + &quot;님 계좌에 &quot; + amount + &quot;원 입금 완료.&quot;);
    }

    public int getBalance() {
        return balance;
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>static</code> 메소드 안에서 일반 인스턴스 변수(<code>this.name</code>)를 직접 부를 수 없나요?</strong>
A. 부를 수 없습니다! <code>static</code> 메소드는 객체가 <code>new</code> 생성되기 전 클래스 로딩 시점에 먼저 메모리에 올라가기 때문에, 아직 객체가 생기지 않았을 수도 있는 인스턴스 멤버에 직접 접근하는 것이 불가능합니다.</p>
',
  'published',
  '자바 OOP 클래스와 객체 - 생성자, static 공유 멤버, final 및 캡슐화',
  '객체지향 개념, 클래스(Class)와 인스턴스, 생성자 오버로딩, static 공유 멤버, final 변수 및 정보 은닉을 위한 Getter/Setter 작성을 학습합니다.',
  4,
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
