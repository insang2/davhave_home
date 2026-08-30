-- Full Java Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch05-inheritance-polymorphism-interfaces',
  '상속(Inheritance), 다형성과 추상 클래스/인터페이스',
  '코드의 재사용성과 확장성을 극대화하는 상속(Inheritance)과 오버라이딩, 객체지향 설계의 핵심 다형성(Polymorphism) 및 인터페이스 다중 구현을 학습합니다.',
  '기존 클래스의 속성과 기능을 물려받아 재사용하는 **상속(Inheritance)**과 하나의 객체가 다양한 타입을 가질 수 있는 **다형성(Polymorphism)**, **인터페이스(Interface)**를 배웁니다.

---

## 1. OOP 핵심 심화 용어 사전 (Glossary)

- **Inheritance (상속)**: 부모 클래스(Super Class)의 멤버들을 자식 클래스(Sub Class)가 물려받아 확장(`extends`)하는 개념입니다.
- **Overriding (메소드 오버라이딩)**: 부모 클래스로부터 물려받은 메소드의 동작을 자식 클래스에서 목적에 맞게 재정의하는 기술입니다. (`@Override` 어노테이션)
- **Polymorphism (다형성)**: 부모 클래스 타입의 참조 변수로 여러 자식 객체들을 가리키고 통합 제어할 수 있는 객체지향적 성질입니다.
- **Abstract Class (추상 클래스)**: 하나 이상의 추상 메소드(`abstract method`)를 포함하는 미완성 설계도 클래스로, 직접 객체 생성이 불가능합니다.
- **Interface (인터페이스)**: 클래스가 반드시 구현해야 하는 표준 명세서로, 자바에서 다중 구현(`implements`)을 지원합니다.

---

## 2. 인터페이스와 다형성 구현 예제

```java
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
```

---

## 3. 추상 클래스 vs 인터페이스 비교표

| 비교 항목 | 추상 클래스 (Abstract Class) | 인터페이스 (Interface) |
| :--- | :--- | :--- |
| **선언 키워드** | `abstract class` | `interface` |
| **상속/구현 키워드** | `extends` (단일 상속만 가능) | `implements` (다중 구현 가능) |
| **필드 변수** | 일반 멤버 변수 선언 가능 | 상수만 가능 (`public static final`) |
| **목적** | 연관성이 높은 클래스 간의 코드 재사용 | 연관성이 다른 클래스 간의 기능 표준 명세 규격 |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 자바에서 클래스는 왜 다중 상속(`extends ClassA, ClassB`)을 지원하지 않나요?**
A. 두 부모 클래스에 동일한 이름의 메소드가 존재할 경우 어느 메소드를 호출해야 할지 모호해지는 **다이아몬드 상속 문제(Diamond Problem)**를 예방하기 위해 다중 상속을 금지하고 인터페이스 다중 구현을 지원합니다.
',
  '<p>기존 클래스의 속성과 기능을 물려받아 재사용하는 **상속(Inheritance)**과 하나의 객체가 다양한 타입을 가질 수 있는 <strong>다형성(Polymorphism)</strong>, **인터페이스(Interface)**를 배웁니다.</p>
<hr>
<h2>1. OOP 핵심 심화 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Inheritance (상속)</strong>: 부모 클래스(Super Class)의 멤버들을 자식 클래스(Sub Class)가 물려받아 확장(<code>extends</code>)하는 개념입니다.</li>
<li><strong>Overriding (메소드 오버라이딩)</strong>: 부모 클래스로부터 물려받은 메소드의 동작을 자식 클래스에서 목적에 맞게 재정의하는 기술입니다. (<code>@Override</code> 어노테이션)</li>
<li><strong>Polymorphism (다형성)</strong>: 부모 클래스 타입의 참조 변수로 여러 자식 객체들을 가리키고 통합 제어할 수 있는 객체지향적 성질입니다.</li>
<li><strong>Abstract Class (추상 클래스)</strong>: 하나 이상의 추상 메소드(<code>abstract method</code>)를 포함하는 미완성 설계도 클래스로, 직접 객체 생성이 불가능합니다.</li>
<li><strong>Interface (인터페이스)</strong>: 클래스가 반드시 구현해야 하는 표준 명세서로, 자바에서 다중 구현(<code>implements</code>)을 지원합니다.</li>
</ul>
<hr>
<h2>2. 인터페이스와 다형성 구현 예제</h2>
<pre><code class="language-java">// 1. 공통 인터페이스 표준 정의
interface Printable {
    void print(String doc); // 추상 메소드
}

// 2. 구현 클래스 A (HP 프린터)
class HpPrinter implements Printable {
    @Override
    public void print(String doc) {
        System.out.println(&quot;[HP 잉크젯 인쇄]: &quot; + doc);
    }
}

// 3. 구현 클래스 B (삼성 레이저 프린터)
class SamsungPrinter implements Printable {
    @Override
    public void print(String doc) {
        System.out.println(&quot;[삼성 레이저 인쇄]: &quot; + doc);
    }
}

// 4. 다형성 활용 테스트
public class PolymorphismMain {
    public static void main(String[] args) {
        // 부모 인터페이스 타입으로 서로 다른 자식 객체 가리키기 (다형성)
        Printable p1 = new HpPrinter();
        Printable p2 = new SamsungPrinter();

        p1.print(&quot;보고서.pdf&quot;);
        p2.print(&quot;계약서.docx&quot;);
    }
}
</code></pre>
<hr>
<h2>3. 추상 클래스 vs 인터페이스 비교표</h2>
<table>
<thead>
<tr>
<th align="left">비교 항목</th>
<th align="left">추상 클래스 (Abstract Class)</th>
<th align="left">인터페이스 (Interface)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>선언 키워드</strong></td>
<td align="left"><code>abstract class</code></td>
<td align="left"><code>interface</code></td>
</tr>
<tr>
<td align="left"><strong>상속/구현 키워드</strong></td>
<td align="left"><code>extends</code> (단일 상속만 가능)</td>
<td align="left"><code>implements</code> (다중 구현 가능)</td>
</tr>
<tr>
<td align="left"><strong>필드 변수</strong></td>
<td align="left">일반 멤버 변수 선언 가능</td>
<td align="left">상수만 가능 (<code>public static final</code>)</td>
</tr>
<tr>
<td align="left"><strong>목적</strong></td>
<td align="left">연관성이 높은 클래스 간의 코드 재사용</td>
<td align="left">연관성이 다른 클래스 간의 기능 표준 명세 규격</td>
</tr>
</tbody></table>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 자바에서 클래스는 왜 다중 상속(<code>extends ClassA, ClassB</code>)을 지원하지 않나요?</strong>
A. 두 부모 클래스에 동일한 이름의 메소드가 존재할 경우 어느 메소드를 호출해야 할지 모호해지는 **다이아몬드 상속 문제(Diamond Problem)**를 예방하기 위해 다중 상속을 금지하고 인터페이스 다중 구현을 지원합니다.</p>
',
  'published',
  '자바 상속과 다형성 - extends, super, 메소드 오버라이딩, abstract 및 interface',
  '클래스 재사용을 돕는 상속(extends), 부모 메소드 재정의(Overriding), 다형성(Polymorphism), 추상 클래스(abstract)와 인터페이스(interface)의 차이를 해설합니다.',
  5,
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
  'ch06-packages-modules-java-lang',
  '패키지, 모듈 시스템과 자바 기본 패키지 (java.lang)',
  '클래스 네임스페이스를 관리하는 패키지와 자바의 최상위 조상 클래스 Object, 문자열 불변성(Immutable)과 StringBuilder, 기본 패키지 유틸리티를 학습합니다.',
  '클래스들의 충돌을 방지하고 그룹화하는 **패키지(Package)**와 자바 프로그램의 근간을 이루는 최상위 **`java.lang` 패키지의 핵심 클래스들**을 학습합니다.

---

## 1. 기본 패키지 핵심 용어 사전 (Glossary)

- **Package (패키지)**: 관련 있는 클래스와 인터페이스들을 폴더 구역 단위로 그룹화하여 이름 충돌을 방지하는 네임스페이스입니다.
- **java.lang**: 자바 프로그램 실행 시 `import` 구문 없이도 자동으로 불러와지는 가장 기본적이고 필수적인 표준 패키지입니다.
- **Object Class**: 자바의 모든 클래스가 직간접적으로 상속받는 최상위 으뜸 부모 클래스입니다.
- **String Immutability (문자열 불변성)**: 자바의 `String` 객체는 생성 후 내부 문자열 값을 수정할 수 없으며, 변경 시 새로운 객체가 생성되는 성질입니다.
- **StringBuilder / StringBuffer**: 문자열을 빈번하게 결합/수정할 때 메모리 낭비를 줄여주는 가변(Mutable) 문자열 버퍼 클래스입니다.
- **Wrapper Class**: 기본 자료형(`int`, `double` 등)을 객체 형태로 포장해 주는 클래스입니다. (`Integer`, `Double` 등 - Auto-Boxing / Unboxing 지원)

---

## 2. `String` 불변성과 `StringBuilder` 성능 비교

```java
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
```

---

## 3. `Object` 클래스의 3대 필수 오버라이딩 메소드

1. **`equals(Object obj)`**: 두 객체의 참조 주소가 아닌 **실제 데이터 내용이 같은지 비교**하도록 오버라이딩.
2. **`hashCode()`**: 객체의 고유한 해시코드 정수값을 반환. (`HashMap`, `HashSet` 사용 시 `equals`와 함께 오버라이딩 필수!)
3. **`toString()`**: 객체의 상태 정보를 읽기 쉬운 문자열 텍스트로 반환.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `String a = "hi";` 와 `String b = new String("hi");` 의 차이는?**
A. 리터럴 방식(`"hi"`)은 Heap 영역의 **String Constant Pool**에 생성되어 동일 문자열을 공유하지만, `new String()`은 무조건 독립된 새로운 Heap 객체 메모리를 할당합니다.
',
  '<p>클래스들의 충돌을 방지하고 그룹화하는 **패키지(Package)**와 자바 프로그램의 근간을 이루는 최상위 <strong><code>java.lang</code> 패키지의 핵심 클래스들</strong>을 학습합니다.</p>
<hr>
<h2>1. 기본 패키지 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Package (패키지)</strong>: 관련 있는 클래스와 인터페이스들을 폴더 구역 단위로 그룹화하여 이름 충돌을 방지하는 네임스페이스입니다.</li>
<li><strong>java.lang</strong>: 자바 프로그램 실행 시 <code>import</code> 구문 없이도 자동으로 불러와지는 가장 기본적이고 필수적인 표준 패키지입니다.</li>
<li><strong>Object Class</strong>: 자바의 모든 클래스가 직간접적으로 상속받는 최상위 으뜸 부모 클래스입니다.</li>
<li><strong>String Immutability (문자열 불변성)</strong>: 자바의 <code>String</code> 객체는 생성 후 내부 문자열 값을 수정할 수 없으며, 변경 시 새로운 객체가 생성되는 성질입니다.</li>
<li><strong>StringBuilder / StringBuffer</strong>: 문자열을 빈번하게 결합/수정할 때 메모리 낭비를 줄여주는 가변(Mutable) 문자열 버퍼 클래스입니다.</li>
<li><strong>Wrapper Class</strong>: 기본 자료형(<code>int</code>, <code>double</code> 등)을 객체 형태로 포장해 주는 클래스입니다. (<code>Integer</code>, <code>Double</code> 등 - Auto-Boxing / Unboxing 지원)</li>
</ul>
<hr>
<h2>2. <code>String</code> 불변성과 <code>StringBuilder</code> 성능 비교</h2>
<pre><code class="language-java">public class StringPerformance {
    public static void main(String[] args) {
        // 1. String 덧셈 연산 (매번 새 객체 생성으로 메모리 비효율)
        String str = &quot;Hello&quot;;
        str += &quot; World&quot;; // 새로운 객체 가리킴
        System.out.println(&quot;String 결과: &quot; + str);

        // 2. StringBuilder 활용 (동일 버퍼 내 텍스트 갱신 - 속도 100배 가량 빠름)
        StringBuilder sb = new StringBuilder();
        sb.append(&quot;Hello&quot;);
        sb.append(&quot; World&quot;);
        sb.append(&quot;!&quot;);
        System.out.println(&quot;StringBuilder 결과: &quot; + sb.toString());
    }
}
</code></pre>
<hr>
<h2>3. <code>Object</code> 클래스의 3대 필수 오버라이딩 메소드</h2>
<ol>
<li><strong><code>equals(Object obj)</code></strong>: 두 객체의 참조 주소가 아닌 <strong>실제 데이터 내용이 같은지 비교</strong>하도록 오버라이딩.</li>
<li><strong><code>hashCode()</code></strong>: 객체의 고유한 해시코드 정수값을 반환. (<code>HashMap</code>, <code>HashSet</code> 사용 시 <code>equals</code>와 함께 오버라이딩 필수!)</li>
<li><strong><code>toString()</code></strong>: 객체의 상태 정보를 읽기 쉬운 문자열 텍스트로 반환.</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>String a = &quot;hi&quot;;</code> 와 <code>String b = new String(&quot;hi&quot;);</code> 의 차이는?</strong>
A. 리터럴 방식(<code>&quot;hi&quot;</code>)은 Heap 영역의 <strong>String Constant Pool</strong>에 생성되어 동일 문자열을 공유하지만, <code>new String()</code>은 무조건 독립된 새로운 Heap 객체 메모리를 할당합니다.</p>
',
  'published',
  '자바 패키지와 java.lang - Object, String, StringBuilder, Math, Wrapper',
  '클래스 관리 도구 패키지(Package)와 모듈(Module), 최상위 조상 Object 클래스(equals, hashCode, toString), String 연산 성능과 StringBuilder, Wrapper 클래스를 해설합니다.',
  6,
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
  'ch07-generics-and-collection-framework',
  '제네릭(Generics)과 컬렉션 프레임워크',
  '컴파일 시점에 타입을 강제하는 제네릭(Generics)과 대표적 자료구조인 List(ArrayList), Set(HashSet), Map(HashMap)의 사용법 및 성능 특성을 학습합니다.',
  '자바에서 대용량 데이터를 효율적으로 저장, 삭제, 검색, 정렬하기 위해 제공하는 표준 자료구조 패키지인 **컬렉션 프레임워크(Collection Framework)**를 배웁니다.

---

## 1. 컬렉션 & 제네릭 용어 사전 (Glossary)

- **Generics (제네릭)**: 클래스나 메소드에서 사용할 데이터 타입을 컴파일 시점에 지정하여 형변환(Casting) 오류를 예방하는 타입 안정성 기술입니다. (예: `ArrayList<String>`)
- **List Interface**: 순서가 존재하며, 동일한 중복 데이터를 허용하는 선형 자료구조입니다. (예: `ArrayList`, `LinkedList`)
- **Set Interface**: 순서를 보장하지 않으며, **중복 데이터를 허용하지 않는** 집합 자료구조입니다. (예: `HashSet`, `TreeSet`)
- **Map Interface**: 순서 대신 **Key-Value(키-값) 쌍**으로 데이터를 저장하며, Key의 중복은 허용하지 않는 사전형 자료구조입니다. (예: `HashMap`, `TreeMap`)

---

## 2. 자바 3대 컬렉션 특성 비교표

| 컬렉션 구분 | 구현 클래스 | 순서 보장 여부 | 중복 허용 여부 | 주요 사용 목적 및 특성 |
| :--- | :--- | :---: | :---: | :--- |
| **List 계열** | `ArrayList` | ⭕ | ⭕ | 인덱스 기반 고속 조회($O(1)$)에 최적화 |
| | `LinkedList` | ⭕ | ⭕ | 중간 요소의 빈번한 삽입/삭제($O(1)$)에 최적화 |
| **Set 계열** | `HashSet` | ❌ | **❌ (불가)** | 데이터의 중복을 제거하고 유일성 보장 |
| **Map 계열** | `HashMap` | ❌ | Key 불가 / Value 허용 | Key를 이용한 초고속 데이터 검색($O(1)$) |

---

## 3. `HashMap` 및 `ArrayList` 제네릭 활용 실습

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `ArrayList`와 `Vector`의 차이는 무엇인가요?**
A. 두 클래스는 내부 구조가 동일하지만, `Vector`는 모든 메소드가 동기화(`synchronized`) 처리되어 멀티스레드환경에서 안전한 대신 성능이 느립니다. 단일 스레드에서는 `ArrayList` 사용이 표준입니다.
',
  '<p>자바에서 대용량 데이터를 효율적으로 저장, 삭제, 검색, 정렬하기 위해 제공하는 표준 자료구조 패키지인 **컬렉션 프레임워크(Collection Framework)**를 배웁니다.</p>
<hr>
<h2>1. 컬렉션 &amp; 제네릭 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Generics (제네릭)</strong>: 클래스나 메소드에서 사용할 데이터 타입을 컴파일 시점에 지정하여 형변환(Casting) 오류를 예방하는 타입 안정성 기술입니다. (예: <code>ArrayList&lt;String&gt;</code>)</li>
<li><strong>List Interface</strong>: 순서가 존재하며, 동일한 중복 데이터를 허용하는 선형 자료구조입니다. (예: <code>ArrayList</code>, <code>LinkedList</code>)</li>
<li><strong>Set Interface</strong>: 순서를 보장하지 않으며, <strong>중복 데이터를 허용하지 않는</strong> 집합 자료구조입니다. (예: <code>HashSet</code>, <code>TreeSet</code>)</li>
<li><strong>Map Interface</strong>: 순서 대신 <strong>Key-Value(키-값) 쌍</strong>으로 데이터를 저장하며, Key의 중복은 허용하지 않는 사전형 자료구조입니다. (예: <code>HashMap</code>, <code>TreeMap</code>)</li>
</ul>
<hr>
<h2>2. 자바 3대 컬렉션 특성 비교표</h2>
<table>
<thead>
<tr>
<th align="left">컬렉션 구분</th>
<th align="left">구현 클래스</th>
<th align="center">순서 보장 여부</th>
<th align="center">중복 허용 여부</th>
<th align="left">주요 사용 목적 및 특성</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>List 계열</strong></td>
<td align="left"><code>ArrayList</code></td>
<td align="center">⭕</td>
<td align="center">⭕</td>
<td align="left">인덱스 기반 고속 조회($O(1)$)에 최적화</td>
</tr>
<tr>
<td align="left"></td>
<td align="left"><code>LinkedList</code></td>
<td align="center">⭕</td>
<td align="center">⭕</td>
<td align="left">중간 요소의 빈번한 삽입/삭제($O(1)$)에 최적화</td>
</tr>
<tr>
<td align="left"><strong>Set 계열</strong></td>
<td align="left"><code>HashSet</code></td>
<td align="center">❌</td>
<td align="center"><strong>❌ (불가)</strong></td>
<td align="left">데이터의 중복을 제거하고 유일성 보장</td>
</tr>
<tr>
<td align="left"><strong>Map 계열</strong></td>
<td align="left"><code>HashMap</code></td>
<td align="center">❌</td>
<td align="center">Key 불가 / Value 허용</td>
<td align="left">Key를 이용한 초고속 데이터 검색($O(1)$)</td>
</tr>
</tbody></table>
<hr>
<h2>3. <code>HashMap</code> 및 <code>ArrayList</code> 제네릭 활용 실습</h2>
<pre><code class="language-java">import java.util.*;

public class CollectionExample {
    public static void main(String[] args) {
        // 1. ArrayList 활용 (학생 이름 목록)
        List&lt;String&gt; studentList = new ArrayList&lt;&gt;();
        studentList.add(&quot;홍길동&quot;);
        studentList.add(&quot;이순신&quot;);
        studentList.add(&quot;강감찬&quot;);

        System.out.println(&quot;1번 학생: &quot; + studentList.get(0));

        // 2. HashMap 활용 (학생 성적 저장)
        Map&lt;String, Integer&gt; scoreMap = new HashMap&lt;&gt;();
        scoreMap.put(&quot;홍길동&quot;, 95);
        scoreMap.put(&quot;이순신&quot;, 88);
        scoreMap.put(&quot;강감찬&quot;, 100);

        // Key 존재 여부 확인 및 조회
        if (scoreMap.containsKey(&quot;홍길동&quot;)) {
            System.out.println(&quot;홍길동의 성적: &quot; + scoreMap.get(&quot;홍길동&quot;) + &quot;점&quot;);
        }
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>ArrayList</code>와 <code>Vector</code>의 차이는 무엇인가요?</strong>
A. 두 클래스는 내부 구조가 동일하지만, <code>Vector</code>는 모든 메소드가 동기화(<code>synchronized</code>) 처리되어 멀티스레드환경에서 안전한 대신 성능이 느립니다. 단일 스레드에서는 <code>ArrayList</code> 사용이 표준입니다.</p>
',
  'published',
  '자바 컬렉션 프레임워크 - ArrayList, LinkedList, HashSet, HashMap, 제네릭',
  '타입 안정성을 높이는 제네릭(Generics), 자바 3대 컬렉션 List(ArrayList), Set(HashSet), Map(HashMap) 자료구조의 원리와 사용법을 완전 해설합니다.',
  7,
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
  'ch08-java-io-and-file-streams',
  '자바 입출력(I/O) 스트림과 파일 처리',
  '키보드, 파일, 네트워크로부터 데이터를 주고받는 자바 I/O 스트림의 원리, 바이트/문자 스트림의 차이 및 보조 스트림을 통한 고속 파일 입출력을 학습합니다.',
  '파일을 읽고 쓰거나 키보드, 네트워크 등 외부 입력/출력 장치와 데이터를 주고받는 **자바 I/O(Input/Output) 스트림** 구조를 다룹니다.

---

## 1. 입출력(I/O) 스트림 용어 사전 (Glossary)

- **Stream (스트림)**: 단방향으로 데이터가 연속적으로 이동하는 가상의 통로입니다. (FIFO 구조)
- **Byte Stream (바이트 스트림)**: 1byte 단위로 바이너리 데이터(이미지, 동영상, 음악 파일 등)를 입출력하는 스트림입니다. (`InputStream`, `OutputStream`)
- **Character Stream (문자 스트림)**: 2byte(유니코드) 단위로 텍스트 문서 데이터만 전용으로 다루는 스트림입니다. (`Reader`, `Writer`)
- **Buffered Stream (버퍼 스트림)**: 입출력 횟수를 줄이기 위해 메모리 버퍼(Buffer)를 경유시켜 입출력 성능을 10배 이상 향상시키는 보조 스트림입니다. (`BufferedReader`, `BufferedWriter`)

---

## 2. `BufferedReader`를 활용한 텍스트 파일 읽기 실습

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `Scanner`와 `BufferedReader` 중 어느 것이 입력 속도가 빠른가요?**
A. `BufferedReader`가 훨씬 빠릅니다. `Scanner`는 정규식을 이용해 형변환 파싱을 수행하므로 느리지만, `BufferedReader`는 8KB 가량의 대용량 버퍼로 한 번에 읽어오므로 대용량 파일 입출력 시 압도적으로 유리합니다.
',
  '<p>파일을 읽고 쓰거나 키보드, 네트워크 등 외부 입력/출력 장치와 데이터를 주고받는 <strong>자바 I/O(Input/Output) 스트림</strong> 구조를 다룹니다.</p>
<hr>
<h2>1. 입출력(I/O) 스트림 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Stream (스트림)</strong>: 단방향으로 데이터가 연속적으로 이동하는 가상의 통로입니다. (FIFO 구조)</li>
<li><strong>Byte Stream (바이트 스트림)</strong>: 1byte 단위로 바이너리 데이터(이미지, 동영상, 음악 파일 등)를 입출력하는 스트림입니다. (<code>InputStream</code>, <code>OutputStream</code>)</li>
<li><strong>Character Stream (문자 스트림)</strong>: 2byte(유니코드) 단위로 텍스트 문서 데이터만 전용으로 다루는 스트림입니다. (<code>Reader</code>, <code>Writer</code>)</li>
<li><strong>Buffered Stream (버퍼 스트림)</strong>: 입출력 횟수를 줄이기 위해 메모리 버퍼(Buffer)를 경유시켜 입출력 성능을 10배 이상 향상시키는 보조 스트림입니다. (<code>BufferedReader</code>, <code>BufferedWriter</code>)</li>
</ul>
<hr>
<h2>2. <code>BufferedReader</code>를 활용한 텍스트 파일 읽기 실습</h2>
<pre><code class="language-java">import java.io.*;

public class FileReadExample {
    public static void main(String[] args) {
        File file = new File(&quot;sample.txt&quot;);

        // try-with-resources 구문을 활용하여 자동으로 스트림 close() 수행
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            System.out.println(&quot;--- [파일 내용 출력] ---&quot;);
            while ((line = br.readLine()) != null) { // 한 줄씩 읽기
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            System.err.println(&quot;에러: 읽고자 하는 파일이 존재하지 않습니다.&quot;);
        } catch (IOException e) {
            System.err.println(&quot;파일 읽기 중 입출력 오류가 발생했습니다: &quot; + e.getMessage());
        }
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>Scanner</code>와 <code>BufferedReader</code> 중 어느 것이 입력 속도가 빠른가요?</strong>
A. <code>BufferedReader</code>가 훨씬 빠릅니다. <code>Scanner</code>는 정규식을 이용해 형변환 파싱을 수행하므로 느리지만, <code>BufferedReader</code>는 8KB 가량의 대용량 버퍼로 한 번에 읽어오므로 대용량 파일 입출력 시 압도적으로 유리합니다.</p>
',
  'published',
  '자바 I/O 스트림 - InputStream, OutputStream, Reader, Writer, BufferedReader',
  '바이트 스트림(InputStream/OutputStream), 문자 스트림(Reader/Writer), 입출력 성능을 극대화하는 버퍼 스트림(BufferedReader)과 파일 조작을 해설합니다.',
  8,
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
