-- Full Java Professor Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch05-inheritance-polymorphism-interfaces',
  '상속(Inheritance), 다형성, 추상 클래스 및 인터페이스',
  '부모 클래스를 확장하는 상속(extends)과 오버라이딩, 부모 타입으로 다양한 자식 객체를 제어하는 다형성(Polymorphism) 및 인터페이스 기반의 다중 구현을 학습합니다.',
  '부모 클래스의 속성과 메소드를 재사용 확장하는 **상속(Inheritance)**과 상위 타입 변수로 여러 하위 객체를 다루는 **다형성(Polymorphism)**, **인터페이스(Interface)**를 학습합니다.

---

## 1. OOP 심화 용어 사전 (Glossary)

- **Inheritance (상속)**: 부모 클래스(Super Class)의 속성과 기능을 자식 클래스(Sub Class)가 물려받아 확장(`extends`)하는 객체지향의 핵심 특징입니다.
- **Overriding (오버라이딩)**: 부모 클래스의 메소드를 자식 클래스에서 목적에 맞게 재정의하여 커스터마이징하는 기법입니다. (`@Override` 어노테이션)
- **Polymorphism (다형성)**: 부모 클래스/인터페이스 타입의 참조 변수 하나로 여러 다양한 자식 클래스 인스턴스들을 가리키고 통합 제어하는 성질입니다.
- **Abstract Class (추상 클래스)**: 미완성 추상 메소드(`abstract method`)를 포함하여 자식 클래스에서 반드시 오버라이딩을 강제하는 설계용 클래스입니다.
- **Interface (인터페이스)**: 모든 메소드가 기본적으로 추상 메소드로 이루어진 표준 명세서로, 자바에서 다중 구현(`implements`)을 지원합니다.

---

## 2. 인터페이스와 다형성 통합 예제

```java
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
```

---

## 3. 추상 클래스 vs 인터페이스 비교표

| 비교 항목 | 추상 클래스 (Abstract Class) | 인터페이스 (Interface) |
| :--- | :--- | :--- |
| **선언 키워드** | `abstract class` | `interface` |
| **상속 및 구현** | `extends` (단일 상속만 허용) | `implements` (다중 구현 허용) |
| **변수 선언** | 일반 멤버 변수 선언 가능 | 상수만 가능 (`public static final`) |
| **설계 목적** | 연관된 클래스들의 공통 코드 상속/재사용 | 서로 다른 클래스 간의 기능 통일 표준 규격 |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 자바 8 이후 인터페이스에 추가된 default 메소드란?**
A. 기존 인터페이스에 새 메소드를 추가하면 이미 구현된 모든 클래스를 수정해야 하는 불편을 막기 위해, 인터페이스 내부에서도 몸체(`{ ... }`)를 가지는 기본 메소드를 선언할 수 있게 만든 기능입니다.
',
  '<p>부모 클래스의 속성과 메소드를 재사용 확장하는 **상속(Inheritance)**과 상위 타입 변수로 여러 하위 객체를 다루는 <strong>다형성(Polymorphism)</strong>, **인터페이스(Interface)**를 학습합니다.</p>
<hr>
<h2>1. OOP 심화 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Inheritance (상속)</strong>: 부모 클래스(Super Class)의 속성과 기능을 자식 클래스(Sub Class)가 물려받아 확장(<code>extends</code>)하는 객체지향의 핵심 특징입니다.</li>
<li><strong>Overriding (오버라이딩)</strong>: 부모 클래스의 메소드를 자식 클래스에서 목적에 맞게 재정의하여 커스터마이징하는 기법입니다. (<code>@Override</code> 어노테이션)</li>
<li><strong>Polymorphism (다형성)</strong>: 부모 클래스/인터페이스 타입의 참조 변수 하나로 여러 다양한 자식 클래스 인스턴스들을 가리키고 통합 제어하는 성질입니다.</li>
<li><strong>Abstract Class (추상 클래스)</strong>: 미완성 추상 메소드(<code>abstract method</code>)를 포함하여 자식 클래스에서 반드시 오버라이딩을 강제하는 설계용 클래스입니다.</li>
<li><strong>Interface (인터페이스)</strong>: 모든 메소드가 기본적으로 추상 메소드로 이루어진 표준 명세서로, 자바에서 다중 구현(<code>implements</code>)을 지원합니다.</li>
</ul>
<hr>
<h2>2. 인터페이스와 다형성 통합 예제</h2>
<pre><code class="language-java">// 1. 결제 표준 인터페이스
interface Payment {
    void processPay(int amount);
}

// 2. 신용카드 결제 구현체
class CreditCardPay implements Payment {
    @Override
    public void processPay(int amount) {
        System.out.println(&quot;[신용카드 결제 완료]: &quot; + amount + &quot;원 승인&quot;);
    }
}

// 3. 카카오페이 결제 구현체
class KakaoPay implements Payment {
    @Override
    public void processPay(int amount) {
        System.out.println(&quot;[카카오페이 결제 완료]: &quot; + amount + &quot;원 간편 결제&quot;);
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
<td align="left"><strong>상속 및 구현</strong></td>
<td align="left"><code>extends</code> (단일 상속만 허용)</td>
<td align="left"><code>implements</code> (다중 구현 허용)</td>
</tr>
<tr>
<td align="left"><strong>변수 선언</strong></td>
<td align="left">일반 멤버 변수 선언 가능</td>
<td align="left">상수만 가능 (<code>public static final</code>)</td>
</tr>
<tr>
<td align="left"><strong>설계 목적</strong></td>
<td align="left">연관된 클래스들의 공통 코드 상속/재사용</td>
<td align="left">서로 다른 클래스 간의 기능 통일 표준 규격</td>
</tr>
</tbody></table>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 자바 8 이후 인터페이스에 추가된 default 메소드란?</strong>
A. 기존 인터페이스에 새 메소드를 추가하면 이미 구현된 모든 클래스를 수정해야 하는 불편을 막기 위해, 인터페이스 내부에서도 몸체(<code>{ ... }</code>)를 가지는 기본 메소드를 선언할 수 있게 만든 기능입니다.</p>
',
  'published',
  '자바 상속과 다형성 - extends, super, 메소드 오버라이딩, abstract & interface',
  '클래스를 확장하는 상속(extends), 부모 메소드 재정의(Overriding), 객체지향의 꽃 다형성(Polymorphism), 추상 클래스(abstract)와 인터페이스(interface) 다중 구현을 다룹니다.',
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
  'ch06-packages-modules-java-lang-util',
  '모듈과 패키지 개념 및 자바 기본 패키지 (java.lang, java.util)',
  '클래스를 계층화하여 관리하는 패키지와 모듈, 자바 최상위 클래스 Object, 문자열 불변성(String Immutability) 및 java.lang/java.util 유틸리티를 배웁니다.',
  '클래스들의 충돌을 피하고 그룹화하는 **패키지(Package)**와 자바 표준 라이브러리의 핵심인 **`java.lang`** 및 **`java.util`** 패키지의 유틸리티 클래스들을 다룹니다.

---

## 1. 기본 패키지 핵심 용어 사전 (Glossary)

- **Package (패키지)**: 관련 있는 클래스와 인터페이스들을 폴더 체계 형태로 묶어 관리하는 네임스페이스입니다.
- **Object Class**: 자바에서 작성하는 모든 클래스가 직간접적으로 상속받는 최상위 으뜸 클래스입니다. (`equals()`, `hashCode()`, `toString()` 보유)
- **String Immutability (문자열 불변성)**: 자바의 `String` 객체는 한 번 생성되면 메모리 내 문자열을 변경할 수 없고, 연산 시 항상 새 객체를 생성하는 성질입니다.
- **StringBuffer / StringBuilder**: 문자열 덧셈/수정 시 메모리 생성 낭비를 막고 가변(Mutable) 버퍼 공간에서 고속으로 텍스트를 처리해 주는 클래스입니다.
- **Wrapper Class**: 기본 자료형(`int`, `double` 등)을 객체 상태로 감싸서 사용할 수 있게 해주는 포장 클래스입니다. (`Integer`, `Double` 등 - Auto-Boxing지원)

---

## 2. `String` vs `StringBuilder` 성능 실습

```java
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
```

---

## 3. `Object` 클래스의 3대 필수 오버라이딩 메소드

1. **`equals(Object obj)`**: 단순 주소 비교가 아닌 **객체의 내부 실제 값이 같은지 판단**하도록 오버라이딩.
2. **`hashCode()`**: 객체의 고유 정수 해시코드를 반환. (`HashSet`, `HashMap` 사용 시 필수!)
3. **`toString()`**: 객체의 현재 상태를 가독성 있는 텍스트 문자열로 반환.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `StringTokenizer`와 `String.split()`의 차이는 무엇인가요?**
A. `split()`은 정규 표현식을 사용하여 복잡한 구분자로 잘라내어 배열로 반환하며, `StringTokenizer`는 단순 문자 구분자로 메모리 효율적으로 토큰을 하나씩 꺼내옵니다.
',
  '<p>클래스들의 충돌을 피하고 그룹화하는 **패키지(Package)**와 자바 표준 라이브러리의 핵심인 <strong><code>java.lang</code></strong> 및 <strong><code>java.util</code></strong> 패키지의 유틸리티 클래스들을 다룹니다.</p>
<hr>
<h2>1. 기본 패키지 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Package (패키지)</strong>: 관련 있는 클래스와 인터페이스들을 폴더 체계 형태로 묶어 관리하는 네임스페이스입니다.</li>
<li><strong>Object Class</strong>: 자바에서 작성하는 모든 클래스가 직간접적으로 상속받는 최상위 으뜸 클래스입니다. (<code>equals()</code>, <code>hashCode()</code>, <code>toString()</code> 보유)</li>
<li><strong>String Immutability (문자열 불변성)</strong>: 자바의 <code>String</code> 객체는 한 번 생성되면 메모리 내 문자열을 변경할 수 없고, 연산 시 항상 새 객체를 생성하는 성질입니다.</li>
<li><strong>StringBuffer / StringBuilder</strong>: 문자열 덧셈/수정 시 메모리 생성 낭비를 막고 가변(Mutable) 버퍼 공간에서 고속으로 텍스트를 처리해 주는 클래스입니다.</li>
<li><strong>Wrapper Class</strong>: 기본 자료형(<code>int</code>, <code>double</code> 등)을 객체 상태로 감싸서 사용할 수 있게 해주는 포장 클래스입니다. (<code>Integer</code>, <code>Double</code> 등 - Auto-Boxing지원)</li>
</ul>
<hr>
<h2>2. <code>String</code> vs <code>StringBuilder</code> 성능 실습</h2>
<pre><code class="language-java">public class StringCompareExample {
    public static void main(String[] args) {
        // 1. String 연결 연산 (새 객체가 매번 생성되어 메모리 낭비)
        String s = &quot;Hello&quot;;
        s += &quot; World&quot;;
        System.out.println(&quot;String 결과: &quot; + s);

        // 2. StringBuilder 활용 (가변 버퍼 사용으로 100배 이상 고속 처리)
        StringBuilder sb = new StringBuilder();
        sb.append(&quot;Hello&quot;);
        sb.append(&quot; &quot;);
        sb.append(&quot;World&quot;);
        sb.append(&quot;!&quot;);
        System.out.println(&quot;StringBuilder 결과: &quot; + sb.toString());
    }
}
</code></pre>
<hr>
<h2>3. <code>Object</code> 클래스의 3대 필수 오버라이딩 메소드</h2>
<ol>
<li><strong><code>equals(Object obj)</code></strong>: 단순 주소 비교가 아닌 <strong>객체의 내부 실제 값이 같은지 판단</strong>하도록 오버라이딩.</li>
<li><strong><code>hashCode()</code></strong>: 객체의 고유 정수 해시코드를 반환. (<code>HashSet</code>, <code>HashMap</code> 사용 시 필수!)</li>
<li><strong><code>toString()</code></strong>: 객체의 현재 상태를 가독성 있는 텍스트 문자열로 반환.</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>StringTokenizer</code>와 <code>String.split()</code>의 차이는 무엇인가요?</strong>
A. <code>split()</code>은 정규 표현식을 사용하여 복잡한 구분자로 잘라내어 배열로 반환하며, <code>StringTokenizer</code>는 단순 문자 구분자로 메모리 효율적으로 토큰을 하나씩 꺼내옵니다.</p>
',
  'published',
  '자바 패키지와 java.lang - Object, String, StringBuffer, Wrapper, Math',
  '패키지(Package)와 모듈(Module) 개념, 최상위 조상 Object 클래스, String 불변성과 StringBuffer/StringBuilder, StringTokenizer 및 Wrapper 클래스를 다룹니다.',
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
  '제네릭(Generics)과 컬렉션 프레임워크 (List, Set, Map)',
  '컴파일 시점에 타입을 강제하는 제네릭(Generics)과 자바 3대 핵심 자료구조인 List(ArrayList), Set(HashSet), Map(HashMap)의 특징과 사용법을 학습합니다.',
  '자바 프로그램에서 대용량 데이터를 동적으로 추가, 삭제, 검색, 정렬하기 위한 표준 자료구조 인터페이스 집합인 **컬렉션 프레임워크(Collection Framework)**를 익힙니다.

---

## 1. 컬렉션 & 제네릭 용어 사전 (Glossary)

- **Generics (제네릭)**: 클래스나 컬렉션에서 사용할 데이터 타입을 컴파일 시점에 지정하여 불필요한 형변환(Casting) 오류를 예방하는 기술입니다. (예: `ArrayList<String>`)
- **List Interface**: 데이터의 순서가 유지되며, **중복 데이터를 허용하는** 동적 배열 형태의 자료구조입니다. (`ArrayList`, `LinkedList`)
- **Set Interface**: 데이터의 순서를 보장하지 않으며, **중복 데이터를 절대로 허용하지 않는** 집합 형태의 자료구조입니다. (`HashSet`, `TreeSet`)
- **Map Interface**: 순서 대신 **Key-Value(키-값) 쌍**으로 저장하며, Key의 중복은 허용하지 않는 사전형 자료구조입니다. (`HashMap`, `TreeMap`)

---

## 2. 컬렉션 3대 인터페이스 비교표

| 컬렉션 구분 | 대표 클래스 | 순서 유지 | 중복 허용 | 주요 사용 목적 및 성능 특성 |
| :--- | :--- | :---: | :---: | :--- |
| **List 계열** | `ArrayList` | ⭕ | ⭕ | 인덱스를 통한 고속 검색($O(1)$) |
| | `LinkedList` | ⭕ | ⭕ | 중간 요소의 빈번한 추가/삭제($O(1)$) |
| **Set 계열** | `HashSet` | ❌ | **❌ (불가)** | 데이터의 고유 중복 제거 |
| **Map 계열** | `HashMap` | ❌ | Key 불가 / Value 허용 | Key를 이용한 초고속 데이터 조회($O(1)$) |

---

## 3. `HashMap` 및 `ArrayList` 실전 프로그래밍 예제

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `ArrayList`와 `LinkedList`는 언제 구분해서 써야 하나요?**
A. 데이터의 검색이나 순회가 주를 이룰 때는 인덱스 접근이 빠른 `ArrayList`를 쓰고, 중간에 위치한 데이터의 삽입과 삭제가 자주 발생하는 경우에는 `LinkedList`를 사용하는 것이 효율적입니다.
',
  '<p>자바 프로그램에서 대용량 데이터를 동적으로 추가, 삭제, 검색, 정렬하기 위한 표준 자료구조 인터페이스 집합인 **컬렉션 프레임워크(Collection Framework)**를 익힙니다.</p>
<hr>
<h2>1. 컬렉션 &amp; 제네릭 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Generics (제네릭)</strong>: 클래스나 컬렉션에서 사용할 데이터 타입을 컴파일 시점에 지정하여 불필요한 형변환(Casting) 오류를 예방하는 기술입니다. (예: <code>ArrayList&lt;String&gt;</code>)</li>
<li><strong>List Interface</strong>: 데이터의 순서가 유지되며, <strong>중복 데이터를 허용하는</strong> 동적 배열 형태의 자료구조입니다. (<code>ArrayList</code>, <code>LinkedList</code>)</li>
<li><strong>Set Interface</strong>: 데이터의 순서를 보장하지 않으며, <strong>중복 데이터를 절대로 허용하지 않는</strong> 집합 형태의 자료구조입니다. (<code>HashSet</code>, <code>TreeSet</code>)</li>
<li><strong>Map Interface</strong>: 순서 대신 <strong>Key-Value(키-값) 쌍</strong>으로 저장하며, Key의 중복은 허용하지 않는 사전형 자료구조입니다. (<code>HashMap</code>, <code>TreeMap</code>)</li>
</ul>
<hr>
<h2>2. 컬렉션 3대 인터페이스 비교표</h2>
<table>
<thead>
<tr>
<th align="left">컬렉션 구분</th>
<th align="left">대표 클래스</th>
<th align="center">순서 유지</th>
<th align="center">중복 허용</th>
<th align="left">주요 사용 목적 및 성능 특성</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>List 계열</strong></td>
<td align="left"><code>ArrayList</code></td>
<td align="center">⭕</td>
<td align="center">⭕</td>
<td align="left">인덱스를 통한 고속 검색($O(1)$)</td>
</tr>
<tr>
<td align="left"></td>
<td align="left"><code>LinkedList</code></td>
<td align="center">⭕</td>
<td align="center">⭕</td>
<td align="left">중간 요소의 빈번한 추가/삭제($O(1)$)</td>
</tr>
<tr>
<td align="left"><strong>Set 계열</strong></td>
<td align="left"><code>HashSet</code></td>
<td align="center">❌</td>
<td align="center"><strong>❌ (불가)</strong></td>
<td align="left">데이터의 고유 중복 제거</td>
</tr>
<tr>
<td align="left"><strong>Map 계열</strong></td>
<td align="left"><code>HashMap</code></td>
<td align="center">❌</td>
<td align="center">Key 불가 / Value 허용</td>
<td align="left">Key를 이용한 초고속 데이터 조회($O(1)$)</td>
</tr>
</tbody></table>
<hr>
<h2>3. <code>HashMap</code> 및 <code>ArrayList</code> 실전 프로그래밍 예제</h2>
<pre><code class="language-java">import java.util.*;

public class CollectionFrameworkMain {
    public static void main(String[] args) {
        // 1. ArrayList 동적 배열 활용
        List&lt;String&gt; fruits = new ArrayList&lt;&gt;();
        fruits.add(&quot;사과&quot;);
        fruits.add(&quot;바나나&quot;);
        fruits.add(&quot;사과&quot;); // 중복 허용됨

        System.out.println(&quot;과일 리스트: &quot; + fruits);

        // 2. HashMap (주민번호 - 이름) 매핑 활용
        Map&lt;String, String&gt; userMap = new HashMap&lt;&gt;();
        userMap.put(&quot;900101-1000000&quot;, &quot;홍길동&quot;);
        userMap.put(&quot;950505-2000000&quot;, &quot;김영희&quot;);

        System.out.println(&quot;조회 결과: &quot; + userMap.get(&quot;900101-1000000&quot;));
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>ArrayList</code>와 <code>LinkedList</code>는 언제 구분해서 써야 하나요?</strong>
A. 데이터의 검색이나 순회가 주를 이룰 때는 인덱스 접근이 빠른 <code>ArrayList</code>를 쓰고, 중간에 위치한 데이터의 삽입과 삭제가 자주 발생하는 경우에는 <code>LinkedList</code>를 사용하는 것이 효율적입니다.</p>
',
  'published',
  '자바 컬렉션 프레임워크 - ArrayList, LinkedList, HashSet, HashMap & 제네릭',
  '타입 안정성을 높이는 제네릭(Generics), 자바 3대 자료구조 List(ArrayList), Set(HashSet), Map(HashMap)의 특성, Iterator 순회 및 실전 활용법을 배웁니다.',
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
  'ch08-io-streams-and-file-processing',
  '자바 입출력(I/O) 스트림과 파일 조작',
  '키보드, 파일, 네트워크 등 외부 입력/출력 장치와 데이터를 주고받는 자바 I/O 스트림의 동작 원리, 바이트/문자 스트림 및 고속 버퍼 스트림을 배웁니다.',
  '파일을 생성, 읽기, 쓰거나 외부 장치와 통신하는 **자바 입출력(I/O: Input/Output) 스트림** 구조와 파일 관리 기술을 다룹니다.

---

## 1. 입출력 스트림 용어 사전 (Glossary)

- **Stream (스트림)**: 데이터가 단방향(FIFO)으로 연속적으로 이동하는 가상의 통로입니다.
- **Byte Stream**: 1byte 단위로 바이너리 데이터(이미지, 동영상, 엑셀 파일 등)를 입출력하는 스트림입니다. (`InputStream`, `OutputStream`)
- **Character Stream**: 2byte(유니코드) 단위로 텍스트 문서 파일만 전용으로 처리하는 스트림입니다. (`Reader`, `Writer`)
- **Buffered Stream**: 입출력 횟수를 줄이기 위해 메모리에 8KB 가량의 버퍼(Buffer)를 형성하여 입출력 성능을 10배 이상 높이는 보조 스트림입니다. (`BufferedReader`, `BufferedWriter`)

---

## 2. `BufferedReader` 기반 고속 텍스트 파일 읽기 코드

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `FileWriter`로 파일에 텍스트를 쓸 때 기존 내용을 덮어쓰지 않고 뒤에 덧붙이려면(Append)?**
A. 생성자의 두 번째 파라미터로 `true`를 전달하면 됩니다. (`new FileWriter("file.txt", true);` 사용)
',
  '<p>파일을 생성, 읽기, 쓰거나 외부 장치와 통신하는 <strong>자바 입출력(I/O: Input/Output) 스트림</strong> 구조와 파일 관리 기술을 다룹니다.</p>
<hr>
<h2>1. 입출력 스트림 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Stream (스트림)</strong>: 데이터가 단방향(FIFO)으로 연속적으로 이동하는 가상의 통로입니다.</li>
<li><strong>Byte Stream</strong>: 1byte 단위로 바이너리 데이터(이미지, 동영상, 엑셀 파일 등)를 입출력하는 스트림입니다. (<code>InputStream</code>, <code>OutputStream</code>)</li>
<li><strong>Character Stream</strong>: 2byte(유니코드) 단위로 텍스트 문서 파일만 전용으로 처리하는 스트림입니다. (<code>Reader</code>, <code>Writer</code>)</li>
<li><strong>Buffered Stream</strong>: 입출력 횟수를 줄이기 위해 메모리에 8KB 가량의 버퍼(Buffer)를 형성하여 입출력 성능을 10배 이상 높이는 보조 스트림입니다. (<code>BufferedReader</code>, <code>BufferedWriter</code>)</li>
</ul>
<hr>
<h2>2. <code>BufferedReader</code> 기반 고속 텍스트 파일 읽기 코드</h2>
<pre><code class="language-java">import java.io.*;

public class FastFileReader {
    public static void main(String[] args) {
        File targetFile = new File(&quot;data.txt&quot;);

        // try-with-resources 구문으로 자동으로 close() 처리
        try (BufferedReader br = new BufferedReader(new FileReader(targetFile))) {
            String line;
            System.out.println(&quot;=== [파일 텍스트 출력] ===&quot;);
            while ((line = br.readLine()) != null) { // 한 줄씩 텍스트 읽기
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            System.err.println(&quot;오류: 지정한 파일이 존재하지 않습니다.&quot;);
        } catch (IOException e) {
            System.err.println(&quot;파일 입출력 예외 발생: &quot; + e.getMessage());
        }
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>FileWriter</code>로 파일에 텍스트를 쓸 때 기존 내용을 덮어쓰지 않고 뒤에 덧붙이려면(Append)?</strong>
A. 생성자의 두 번째 파라미터로 <code>true</code>를 전달하면 됩니다. (<code>new FileWriter(&quot;file.txt&quot;, true);</code> 사용)</p>
',
  'published',
  '자바 I/O 스트림 - InputStream, OutputStream, Reader, Writer, File & Buffer',
  '바이트 스트림(InputStream/OutputStream), 문자 스트림(Reader/Writer), File 클래스 및 입출력 속도를 대폭 높여주는 BufferedReader/BufferedWriter 사용법을 해설합니다.',
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
