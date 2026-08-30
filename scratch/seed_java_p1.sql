-- Full Java Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch01-java-jvm-and-environment',
  '자바(Java) 언어의 특징과 JVM, OpenJDK 및 개발 환경 구축',
  'WORA(Write Once, Run Anywhere) 특징을 갖춘 자바 프로그래밍 언어의 기본 구조, JVM 가상 머신 작동 원리 및 이클립스 개발 환경 구축을 학습합니다.',
  '**자바(Java)**는 1995년 선 마이클로시스템즈(Sun Microsystems, 현 오라클)의 제임스 고슬링(James Gosling)에 의해 개발된 **객체지향 프로그래밍 언어(OOP)**입니다. "WORA (Write Once, Run Anywhere - 한 번 작성하면 어디서나 실행된다)"라는 슬로건처럼 플랫폼 독립적인 운영체제 이식성을 자랑합니다.

---

## 1. 자바 핵심 전문 용어 사전 (Glossary)

- **JVM (Java Virtual Machine)**: 자바 바이트코드를 읽어 해당 운영체제(Windows, macOS, Linux)에 맞는 기계어로 번역하여 실행하는 가상 머신입니다.
- **JDK (Java Development Kit)**: 자바 개발을 위한 컴파일러(`javac`), 디버거, 표준 라이브러리 패키지가 포함된 개발 키트입니다.
- **JRE (Java Runtime Environment)**: 자바 프로그램을 실행하기만 할 때 필요한 환경으로, JVM과 자바 클래스 라이브러리가 포함되어 있습니다. (JDK 설치 시 포함)
- **Bytecode (바이트코드)**: 자바 컴파일러(`javac`)가 소스코드(`.java`)를 컴파일하여 생성한 반제품 명령어 파일(`.class`)입니다.
- **Garbage Collector (GC, 가비지 컬렉터)**: 메모리의 Heap 영역에서 더 이상 참조되지 않는 불필요한 객체들을 자동으로 탐지하여 해제하는 메모리 관리 스레드입니다.

---

## 2. JVM 메모리 구조 3대 영역 (Memory Architecture)

1. **메소드 영역 (Method Area / Metaspace)**: 클래스 정보, static 변수, 메소드 바이트코드, 상수가 상주하는 공유 메모리 구역입니다.
2. **힙 영역 (Heap Area)**: `new` 연산자에 의해 동적으로 생성된 모든 객체(Object)와 배열이 저장되는 구역으로, 가비지 컬렉션(GC)의 주요 대상입니다.
3. **스택 영역 (Stack Area)**: 메소드 호출 시 생성되는 프레임(Stack Frame) 공간으로, 지역 변수, 매개변수, 메소드 리턴 값이 저장되며 메소드가 종료되면 즉시 소멸합니다.

---

## 3. 자바 Hello World 첫 스케치 프로그램

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파일 이름과 클래스 이름이 다르면 왜 컴파일 에러가 나나요?**
A. 자바 파일 내에 `public` 접근 제어자로 선언된 클래스가 있다면, 파일 이름은 반드시 그 `public` 클래스 이름과 소문자/대문자까지 정확히 일치해야 하는 언어 규약이 있습니다.
',
  '<p>**자바(Java)**는 1995년 선 마이클로시스템즈(Sun Microsystems, 현 오라클)의 제임스 고슬링(James Gosling)에 의해 개발된 **객체지향 프로그래밍 언어(OOP)**입니다. &quot;WORA (Write Once, Run Anywhere - 한 번 작성하면 어디서나 실행된다)&quot;라는 슬로건처럼 플랫폼 독립적인 운영체제 이식성을 자랑합니다.</p>
<hr>
<h2>1. 자바 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>JVM (Java Virtual Machine)</strong>: 자바 바이트코드를 읽어 해당 운영체제(Windows, macOS, Linux)에 맞는 기계어로 번역하여 실행하는 가상 머신입니다.</li>
<li><strong>JDK (Java Development Kit)</strong>: 자바 개발을 위한 컴파일러(<code>javac</code>), 디버거, 표준 라이브러리 패키지가 포함된 개발 키트입니다.</li>
<li><strong>JRE (Java Runtime Environment)</strong>: 자바 프로그램을 실행하기만 할 때 필요한 환경으로, JVM과 자바 클래스 라이브러리가 포함되어 있습니다. (JDK 설치 시 포함)</li>
<li><strong>Bytecode (바이트코드)</strong>: 자바 컴파일러(<code>javac</code>)가 소스코드(<code>.java</code>)를 컴파일하여 생성한 반제품 명령어 파일(<code>.class</code>)입니다.</li>
<li><strong>Garbage Collector (GC, 가비지 컬렉터)</strong>: 메모리의 Heap 영역에서 더 이상 참조되지 않는 불필요한 객체들을 자동으로 탐지하여 해제하는 메모리 관리 스레드입니다.</li>
</ul>
<hr>
<h2>2. JVM 메모리 구조 3대 영역 (Memory Architecture)</h2>
<ol>
<li><strong>메소드 영역 (Method Area / Metaspace)</strong>: 클래스 정보, static 변수, 메소드 바이트코드, 상수가 상주하는 공유 메모리 구역입니다.</li>
<li><strong>힙 영역 (Heap Area)</strong>: <code>new</code> 연산자에 의해 동적으로 생성된 모든 객체(Object)와 배열이 저장되는 구역으로, 가비지 컬렉션(GC)의 주요 대상입니다.</li>
<li><strong>스택 영역 (Stack Area)</strong>: 메소드 호출 시 생성되는 프레임(Stack Frame) 공간으로, 지역 변수, 매개변수, 메소드 리턴 값이 저장되며 메소드가 종료되면 즉시 소멸합니다.</li>
</ol>
<hr>
<h2>3. 자바 Hello World 첫 스케치 프로그램</h2>
<pre><code class="language-java">/*
  파일명: HelloJava.java
  설명: 첫 번째 자바 클래스 선언 및 콘솔 출력
*/

public class HelloJava {
    // 자바 애플리케이션의 시작점(Entry Point) 메인 메소드
    public static void main(String[] args) {
        System.out.println(&quot;Hello, DAVHAVE Java World!&quot;);
        System.out.println(&quot;자바 프로그래밍의 세계에 오신 것을 환영합니다.&quot;);
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파일 이름과 클래스 이름이 다르면 왜 컴파일 에러가 나나요?</strong>
A. 자바 파일 내에 <code>public</code> 접근 제어자로 선언된 클래스가 있다면, 파일 이름은 반드시 그 <code>public</code> 클래스 이름과 소문자/대문자까지 정확히 일치해야 하는 언어 규약이 있습니다.</p>
',
  'published',
  '자바 입문 가이드 - JVM 메모리 구조, OpenJDK 설치 및 이클립스 개발 환경',
  '자바 언어의 4대 특징, 가상 머신 JVM(Heap, Stack, Method Area) 작동 원리, OpenJDK 설치 및 이클립스(Eclipse) 통합 개발 환경 구축을 해설합니다.',
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
  'ch02-variables-data-types-operators',
  '변수, 기본 자료형 및 연산자 완벽 해설',
  '자바의 8가지 기본 자료형(int, double, char, boolean 등)과 참조 자료형의 차이, 자동/강제 형변환 및 연산자 활용법을 다룹니다.',
  '프로그램에서 데이터를 저장하는 메모리 공간인 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**의 개념을 학습합니다.

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
| **논리형** | `boolean` | 1 byte | `true` 또는 `false` |
| **문자형** | `char` | 2 bytes | 유니코드(Unicode) 1문자 (예: `''A''`, `''가''`) |
| **정수형** | `byte` | 1 byte | $-128 \sim 127$ |
| | `short` | 2 bytes | $-32,768 \sim 32,767$ |
| | `int` | 4 bytes | $-21\text{억} \sim 21\text{억}$ (기본 정수형) |
| | `long` | 8 bytes | $-9 \times 10^{18} \sim 9 \times 10^{18}$ (리터럴 뒤 `L` 붙임) |
| **실수형** | `float` | 4 bytes | 소수점 약 7자리 정밀도 (리터럴 뒤 `F` 붙임) |
| | `double` | 8 bytes | 소수점 약 15자리 정밀도 (기본 실수형) |

---

## 3. 형변환과 연산자 실전 예제

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `float f = 3.14;` 라고 적으면 왜 컴파일 에러가 나나요?**
A. 자바는 실수를 적으면 기본적으로 `double`(8바이트) 타입으로 인지합니다. 4바이트 `float` 변수에 넣으려면 뒤에 접미사 `F`를 붙여 `float f = 3.14F;` 로 작성해야 합니다.
',
  '<p>프로그램에서 데이터를 저장하는 메모리 공간인 **변수(Variable)**와 데이터의 종류를 규정하는 **자료형(Data Type)**의 개념을 학습합니다.</p>
<hr>
<h2>1. 변수 &amp; 자료형 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Primitive Type (기본 자료형)</strong>: 실제 산술/논리 데이터 값을 메모리 스택 영역에 직접 보관하는 8가지 기본 데이터 타입입니다.</li>
<li><strong>Reference Type (참조 자료형)</strong>: 데이터 객체의 실제 내용은 Heap 메모리에 두고, 그 주소(Address) 값만을 스택 변수에 보관하는 데이터 타입입니다. (String, Array, Class 등)</li>
<li><strong>Casting (형변환)</strong>: 하나의 자료형을 다른 자료형으로 바꾸는 연산입니다. (자동 형변환 vs 강제 형변환)</li>
<li><strong>Overflow / Underflow</strong>: 표현할 수 있는 최대/최소 한계 범위를 넘어서 반대쪽 최댓값/최솟값으로 순환해버리는 오류 현상입니다.</li>
</ul>
<hr>
<h2>2. 자바 8대 기본 자료형 (Primitive Data Types)</h2>
<table>
<thead>
<tr>
<th align="left">종류</th>
<th align="left">타입 키워드</th>
<th align="left">메모리 크기</th>
<th align="left">데이터 표현 범위 및 예시</th>
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
<td align="left">$-9 \times 10^{18} \sim 9 \times 10^{18}$ (리터럴 뒤 <code>L</code> 붙임)</td>
</tr>
<tr>
<td align="left"><strong>실수형</strong></td>
<td align="left"><code>float</code></td>
<td align="left">4 bytes</td>
<td align="left">소수점 약 7자리 정밀도 (리터럴 뒤 <code>F</code> 붙임)</td>
</tr>
<tr>
<td align="left"></td>
<td align="left"><code>double</code></td>
<td align="left">8 bytes</td>
<td align="left">소수점 약 15자리 정밀도 (기본 실수형)</td>
</tr>
</tbody></table>
<hr>
<h2>3. 형변환과 연산자 실전 예제</h2>
<pre><code class="language-java">public class DataTypeExample {
    public static void main(String[] args) {
        int a = 10;
        double b = 3.14;
        
        // 1. 자동 형변환 (Promotion): 작은 타입 -&gt; 큰 타입
        double result1 = a + b; // int가 double로 자동 변환 (10.0 + 3.14)
        System.out.println(&quot;자동 형변환 결과: &quot; + result1);

        // 2. 강제 형변환 (Casting): 큰 타입 -&gt; 작은 타입
        int result2 = (int) b; // double 소수점이 손실되고 3만 남아 저장됨
        System.out.println(&quot;강제 형변환 결과: &quot; + result2);

        // 3. 삼항 연산자 (Ternary Operator)
        int score = 85;
        String passStatus = (score &gt;= 80) ? &quot;합격&quot; : &quot;불합격&quot;;
        System.out.println(&quot;시험 결과: &quot; + passStatus);
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>float f = 3.14;</code> 라고 적으면 왜 컴파일 에러가 나나요?</strong>
A. 자바는 실수를 적으면 기본적으로 <code>double</code>(8바이트) 타입으로 인지합니다. 4바이트 <code>float</code> 변수에 넣으려면 뒤에 접미사 <code>F</code>를 붙여 <code>float f = 3.14F;</code> 로 작성해야 합니다.</p>
',
  'published',
  '자바 변수와 기본 자료형 - Primitive Type vs Reference Type 및 연산자',
  '8가지 기본 자료형(Primitive Types), 참조 자료형(Reference Type)의 차이, 형변환(Casting), 연산자 우선순위와 실전 활용법을 배웁니다.',
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
  'ch03-control-flow-and-arrays',
  '제어문과 반복문 및 배열(Array)과 예외 처리',
  '프로그램 실행 흐름을 제어하는 조건문과 반복문, 연속된 데이터를 다루는 배열(Array)과 안전한 프로그램 구동을 위한 예외 처리(Exception)를 배웁니다.',
  '프로그램의 논리 실행 흐름을 통제하는 **조건문/반복문**과 여러 데이터를 묶어 관리하는 **배열(Array)**, 런타임 오류에 대비하는 **예외 처리(Exception Handling)**를 익힙니다.

---

## 1. 제어문 & 예외 처리 용어 사전 (Glossary)

- **Enhanced for (향상된 for문)**: 배열이나 컬렉션의 요소들을 인덱스 없이 처음부터 끝까지 순회하는 직관적인 반복문 구문입니다. (`for(Type item : array)`)
- **Array (배열)**: 동일한 자료형의 변수 여러 개를 연속된 메모리 공간에 묶어놓은 고정 길이 객체입니다.
- **NullPointerException (NPE)**: 객체 참조 변수가 아무것도 가리키지 않는 `null` 상태일 때 메소드나 멤버에 접근하려 하면 발생하는 代表 런타임 예외입니다.
- **try-catch-finally**: 런타임 예외가 발생하더라도 프로그램이 비정상 종료되지 않도록 예외를 포획하고 마무리 리소스 자원을 해제하는 블록 구문입니다.

---

## 2. 배열과 향상된 for문 활용 예제

```java
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
        System.out.printf("성적 평균: %.2f점
", average);
    }
}
```

---

## 3. try-catch-finally 예외 처리 실전 가이드

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Checked Exception과 Unchecked Exception의 차이는 무엇인가요?**
A. `Checked Exception`(예: `IOException`, `SQLException`)은 반드시 코드상에서 try-catch나 `throws`로 예외 처리를 해야만 컴파일이 되며, `Unchecked Exception`(`RuntimeException` 상속 클래스들)은 개발자의 주의로 회피 가능한 예외로 컴파일러가 강제하지 않습니다.
',
  '<p>프로그램의 논리 실행 흐름을 통제하는 <strong>조건문/반복문</strong>과 여러 데이터를 묶어 관리하는 <strong>배열(Array)</strong>, 런타임 오류에 대비하는 **예외 처리(Exception Handling)**를 익힙니다.</p>
<hr>
<h2>1. 제어문 &amp; 예외 처리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Enhanced for (향상된 for문)</strong>: 배열이나 컬렉션의 요소들을 인덱스 없이 처음부터 끝까지 순회하는 직관적인 반복문 구문입니다. (<code>for(Type item : array)</code>)</li>
<li><strong>Array (배열)</strong>: 동일한 자료형의 변수 여러 개를 연속된 메모리 공간에 묶어놓은 고정 길이 객체입니다.</li>
<li><strong>NullPointerException (NPE)</strong>: 객체 참조 변수가 아무것도 가리키지 않는 <code>null</code> 상태일 때 메소드나 멤버에 접근하려 하면 발생하는 代表 런타임 예외입니다.</li>
<li><strong>try-catch-finally</strong>: 런타임 예외가 발생하더라도 프로그램이 비정상 종료되지 않도록 예외를 포획하고 마무리 리소스 자원을 해제하는 블록 구문입니다.</li>
</ul>
<hr>
<h2>2. 배열과 향상된 for문 활용 예제</h2>
<pre><code class="language-java">public class ArrayExample {
    public static void main(String[] args) {
        // 정수형 배열 선언 및 초기화
        int[] scores = {90, 85, 95, 100, 78};
        int sum = 0;

        // 향상된 for문 (Enhanced for-loop) 순회
        for (int score : scores) {
            sum += score;
        }

        double average = (double) sum / scores.length;
        System.out.println(&quot;성적 합계: &quot; + sum + &quot;점&quot;);
        System.out.printf(&quot;성적 평균: %.2f점
&quot;, average);
    }
}
</code></pre>
<hr>
<h2>3. try-catch-finally 예외 처리 실전 가이드</h2>
<pre><code class="language-java">public class ExceptionExample {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30};

        try {
            System.out.println(&quot;배열 요소 읽기: &quot; + numbers[5]); // IndexOutOfBoundsException 발생!
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println(&quot;경고: 존재하지 않는 배열 인덱스에 접근했습니다!&quot;);
            System.err.println(&quot;에러 메시지: &quot; + e.getMessage());
        } finally {
            // 예외 발생 여부와 상관없이 항상 마무리를 위해 실행되는 구역
            System.out.println(&quot;안전하게 예외 처리 구문이 종료되었습니다.&quot;);
        }
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Checked Exception과 Unchecked Exception의 차이는 무엇인가요?</strong>
A. <code>Checked Exception</code>(예: <code>IOException</code>, <code>SQLException</code>)은 반드시 코드상에서 try-catch나 <code>throws</code>로 예외 처리를 해야만 컴파일이 되며, <code>Unchecked Exception</code>(<code>RuntimeException</code> 상속 클래스들)은 개발자의 주의로 회피 가능한 예외로 컴파일러가 강제하지 않습니다.</p>
',
  'published',
  '자바 제어문과 배열 - if, switch, for, while, 배열 및 try-catch 예외 처리',
  '조건 제어문(if, switch-case), 반복 제어문(for, enhanced-for, while), 1차원/2차원 배열 구조 및 try-catch-finally 예외 처리 기법을 학습합니다.',
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
  'ch04-object-oriented-classes-methods',
  '객체지향 프로그래밍 기초: 클래스, 객체, 메소드',
  '객체지향 프로그래밍(OOP)의 핵심인 클래스(Class)와 인스턴스 객체의 차이, 생성자, 메소드 오버로딩 및 접근 제어자를 활용한 정보 은닉(Encapsulation)을 학습합니다.',
  '객체지향 프로그래밍(Object-Oriented Programming)은 현실 세계의 사물과 행동을 **객체(Object)**라는 단위로 모델링하여 프로그램을 만드는 소프트웨어 패러다임입니다.

---

## 1. 객체지향 기초 용어 사전 (Glossary)

- **Class (클래스)**: 객체를 만들어내기 위한 설계도(Blueprint) 또는 붕어빵 틀입니다.
- **Object / Instance (객체/인스턴스)**: 클래스 설계도를 바탕으로 메모리의 Heap 영역에 `new` 키워드로 생성된 실체입니다.
- **Encapsulation (캡슐화)**: 데이터(필드)와 기능(메소드)을 하나로 묶고, 외부에서 함부로 접근하지 못하도록 보호하는 정보 은닉(Data Hiding) 기술입니다.
- **Constructor (생성자)**: 객체가 생성되는 순간 단 한 번 호출되어 필드 변수들을 초기화하는 특별한 메소드입니다.
- **Access Modifier (접근 제어자)**: 클래스, 필드, 메소드의 접근 허용 범위를 통제하는 키워드입니다. (`private`, `default`, `protected`, `public`)

---

## 2. 접근 제어자(Access Modifier) 허용 범위 비교

| 접근 제어자 | 같은 클래스 | 같은 패키지 | 자식 클래스 (다른 패키지) | 전체 공개 |
| :--- | :---: | :---: | :---: | :---: |
| **`private`** | ⭕ | ❌ | ❌ | ❌ |
| **`(default)`** | ⭕ | ⭕ | ❌ | ❌ |
| **`protected`** | ⭕ | ⭕ | ⭕ | ❌ |
| **`public`** | ⭕ | ⭕ | ⭕ | ⭕ |

---

## 3. 캡슐화가 적용된 자바 클래스 설계 예제

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `this` 키워드는 언제 사용하나요?**
A. 메소드나 생성자의 매개변수 이름과 클래스의 필드(멤버 변수) 이름이 동일할 때, 자기 자신 객체의 인스턴스 필드임을 명확히 구별 지어 지정하기 위해 사용합니다. (`this.name = name;`)
',
  '<p>객체지향 프로그래밍(Object-Oriented Programming)은 현실 세계의 사물과 행동을 **객체(Object)**라는 단위로 모델링하여 프로그램을 만드는 소프트웨어 패러다임입니다.</p>
<hr>
<h2>1. 객체지향 기초 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Class (클래스)</strong>: 객체를 만들어내기 위한 설계도(Blueprint) 또는 붕어빵 틀입니다.</li>
<li><strong>Object / Instance (객체/인스턴스)</strong>: 클래스 설계도를 바탕으로 메모리의 Heap 영역에 <code>new</code> 키워드로 생성된 실체입니다.</li>
<li><strong>Encapsulation (캡슐화)</strong>: 데이터(필드)와 기능(메소드)을 하나로 묶고, 외부에서 함부로 접근하지 못하도록 보호하는 정보 은닉(Data Hiding) 기술입니다.</li>
<li><strong>Constructor (생성자)</strong>: 객체가 생성되는 순간 단 한 번 호출되어 필드 변수들을 초기화하는 특별한 메소드입니다.</li>
<li><strong>Access Modifier (접근 제어자)</strong>: 클래스, 필드, 메소드의 접근 허용 범위를 통제하는 키워드입니다. (<code>private</code>, <code>default</code>, <code>protected</code>, <code>public</code>)</li>
</ul>
<hr>
<h2>2. 접근 제어자(Access Modifier) 허용 범위 비교</h2>
<table>
<thead>
<tr>
<th align="left">접근 제어자</th>
<th align="center">같은 클래스</th>
<th align="center">같은 패키지</th>
<th align="center">자식 클래스 (다른 패키지)</th>
<th align="center">전체 공개</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong><code>private</code></strong></td>
<td align="center">⭕</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
</tr>
<tr>
<td align="left"><strong><code>(default)</code></strong></td>
<td align="center">⭕</td>
<td align="center">⭕</td>
<td align="center">❌</td>
<td align="center">❌</td>
</tr>
<tr>
<td align="left"><strong><code>protected</code></strong></td>
<td align="center">⭕</td>
<td align="center">⭕</td>
<td align="center">⭕</td>
<td align="center">❌</td>
</tr>
<tr>
<td align="left"><strong><code>public</code></strong></td>
<td align="center">⭕</td>
<td align="center">⭕</td>
<td align="center">⭕</td>
<td align="center">⭕</td>
</tr>
</tbody></table>
<hr>
<h2>3. 캡슐화가 적용된 자바 클래스 설계 예제</h2>
<pre><code class="language-java">public class Student {
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
        if (score &lt; 0 || score &gt; 100) {
            System.out.println(&quot;잘못된 점수 범위입니다. 0점으로 설정합니다.&quot;);
            this.score = 0;
        } else {
            this.score = score;
        }
    }

    public void printInfo() {
        System.out.println(&quot;학번: &quot; + studentId + &quot; | 이름: &quot; + name + &quot; | 성적: &quot; + score + &quot;점&quot;);
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>this</code> 키워드는 언제 사용하나요?</strong>
A. 메소드나 생성자의 매개변수 이름과 클래스의 필드(멤버 변수) 이름이 동일할 때, 자기 자신 객체의 인스턴스 필드임을 명확히 구별 지어 지정하기 위해 사용합니다. (<code>this.name = name;</code>)</p>
',
  'published',
  '자바 OOP 기초 - 클래스(Class), 객체(Object), 생성자(Constructor), 접근제어자',
  '객체지향 4대 요소, 클래스와 인스턴스의 개념, 생성자 오버로딩, 정보 은닉을 위한 접근 제어자(private, public) 및 Getter/Setter 작성을 해설합니다.',
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
