-- Full Java Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch09-lambda-expressions-and-functional-programming',
  '자바 람다식(Lambda Expression)과 함수형 인터페이스',
  '함수형 프로그래밍을 지원하는 자바 람다식(Lambda) 문법과 단 하나의 추상 메소드를 가지는 함수형 인터페이스의 개념 및 활용법을 배웁니다.',
  '자바 8부터 도입되어 익명 함수(Anonymous Function)를 작성하듯 코드를 간결하게 표현할 수 있는 **람다식(Lambda Expression)**과 **함수형 인터페이스**를 학습합니다.

---

## 1. 람다식 핵심 용어 사전 (Glossary)

- **Lambda Expression (람다식)**: 메소드를 하나의 간단한 식(Expression)으로 표현한 것으로, 익명 클래스의 객체를 생성하는 간결한 문법 표현입니다.
- **Functional Interface (함수형 인터페이스)**: 단 **하나의 추상 메소드만 선언되어 있는 인터페이스**로, `@FunctionalInterface` 어노테이션으로 검증합니다.
- **Method Reference (메소드 참조)**: 람다식이 단 하나의 기존 메소드만 단순 호출할 때 `Class::method` 형태로 극도로 축약하는 표현식입니다.

---

## 2. 자바 표준 함수형 인터페이스 4종 세트

| 인터페이스 구분 | 메소드 형상 | 매개변수 | 반환값 | 주요 역할 및 특징 |
| :--- | :--- | :---: | :---: | :--- |
| **`Consumer<T>`** | `void accept(T t)` | ⭕ (있음) | ❌ (없음) | 데이터를 소비하여 출력/처리만 수행 |
| **`Supplier<T>`** | `T get()` | ❌ (없음) | ⭕ (있음) | 데이터를 생성하여 공급 및 반환 |
| **`Function<T, R>`** | `R apply(T t)` | ⭕ (있음) | ⭕ (있음) | 매개변수 T를 받아 R 타입으로 변환 및 반환 |
| **`Predicate<T>`** | `boolean test(T t)` | ⭕ (있음) | ⭕ (boolean) | 조건식을 판별하여 `true/false` 반환 |

---

## 3. 람다식 문법 변천사 예제

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 람다식 내부에서 외부 지역 변수를 수정할 수 없나요?**
A. 람다식 내부에서 참조하는 외부 지역 변수는 람다 캡처링(Lambda Capturing) 메커니즘에 의해 **`final` 또는 사실상 final(Effectively final)**이어야 하므로 값을 직접 변경하면 컴파일 에러가 발생합니다.
',
  '<p>자바 8부터 도입되어 익명 함수(Anonymous Function)를 작성하듯 코드를 간결하게 표현할 수 있는 **람다식(Lambda Expression)**과 <strong>함수형 인터페이스</strong>를 학습합니다.</p>
<hr>
<h2>1. 람다식 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Lambda Expression (람다식)</strong>: 메소드를 하나의 간단한 식(Expression)으로 표현한 것으로, 익명 클래스의 객체를 생성하는 간결한 문법 표현입니다.</li>
<li><strong>Functional Interface (함수형 인터페이스)</strong>: 단 <strong>하나의 추상 메소드만 선언되어 있는 인터페이스</strong>로, <code>@FunctionalInterface</code> 어노테이션으로 검증합니다.</li>
<li><strong>Method Reference (메소드 참조)</strong>: 람다식이 단 하나의 기존 메소드만 단순 호출할 때 <code>Class::method</code> 형태로 극도로 축약하는 표현식입니다.</li>
</ul>
<hr>
<h2>2. 자바 표준 함수형 인터페이스 4종 세트</h2>
<table>
<thead>
<tr>
<th align="left">인터페이스 구분</th>
<th align="left">메소드 형상</th>
<th align="center">매개변수</th>
<th align="center">반환값</th>
<th align="left">주요 역할 및 특징</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong><code>Consumer&lt;T&gt;</code></strong></td>
<td align="left"><code>void accept(T t)</code></td>
<td align="center">⭕ (있음)</td>
<td align="center">❌ (없음)</td>
<td align="left">데이터를 소비하여 출력/처리만 수행</td>
</tr>
<tr>
<td align="left"><strong><code>Supplier&lt;T&gt;</code></strong></td>
<td align="left"><code>T get()</code></td>
<td align="center">❌ (없음)</td>
<td align="center">⭕ (있음)</td>
<td align="left">데이터를 생성하여 공급 및 반환</td>
</tr>
<tr>
<td align="left"><strong><code>Function&lt;T, R&gt;</code></strong></td>
<td align="left"><code>R apply(T t)</code></td>
<td align="center">⭕ (있음)</td>
<td align="center">⭕ (있음)</td>
<td align="left">매개변수 T를 받아 R 타입으로 변환 및 반환</td>
</tr>
<tr>
<td align="left"><strong><code>Predicate&lt;T&gt;</code></strong></td>
<td align="left"><code>boolean test(T t)</code></td>
<td align="center">⭕ (있음)</td>
<td align="center">⭕ (boolean)</td>
<td align="left">조건식을 판별하여 <code>true/false</code> 반환</td>
</tr>
</tbody></table>
<hr>
<h2>3. 람다식 문법 변천사 예제</h2>
<pre><code class="language-java">import java.util.Arrays;
import java.util.List;

public class LambdaExample {
    public static void main(String[] args) {
        List&lt;String&gt; names = Arrays.asList(&quot;홍길동&quot;, &quot;이순신&quot;, &quot;강감찬&quot;);

        // 1. 기존 익명 클래스 방식 (복잡함)
        names.forEach(new java.util.function.Consumer&lt;String&gt;() {
            @Override
            public void accept(String name) {
                System.out.println(&quot;익명클래스: &quot; + name);
            }
        });

        // 2. 람다식 표현 방식 (간결함)
        names.forEach(name -&gt; System.out.println(&quot;람다식: &quot; + name));

        // 3. 메소드 참조 방식 (최종 축약)
        names.forEach(System.out::println);
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 람다식 내부에서 외부 지역 변수를 수정할 수 없나요?</strong>
A. 람다식 내부에서 참조하는 외부 지역 변수는 람다 캡처링(Lambda Capturing) 메커니즘에 의해 **<code>final</code> 또는 사실상 final(Effectively final)**이어야 하므로 값을 직접 변경하면 컴파일 에러가 발생합니다.</p>
',
  'published',
  '자바 람다식 기초 - @FunctionalInterface, 익명 클래스, Consumer, Supplier, Function',
  '자바 8부터 도입된 람다식(Lambda Expression) 문법, 단 하나의 추상 메소드만 갖는 함수형 인터페이스(@FunctionalInterface) 및 표준 함수형 인터페이스를 해설합니다.',
  9,
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
  'ch10-stream-api-and-lambda-processing',
  '스트림 API(Stream API)를 활용한 데이터 파이프라인',
  '컬렉션 요소를 원본 변경 없이 가공하고 필터링하는 스트림(Stream) API의 중간 연산, 최종 연산 파이프라인 및 병렬 처리(Parallel Stream)를 배웁니다.',
  '컬렉션이나 배열의 데이터 요소들을 루프문 없이 선언형 방식으로 가공, 필터링, 변환, 집계할 수 있는 **스트림 API(Stream API)** 파이프라인을 학습합니다.

---

## 1. 스트림 API 용어 사전 (Glossary)

- **Stream Pipeline**: 데이터 소스 $ightarrow$ 중간 연산(Intermediate Operations) $ightarrow$ 최종 연산(Terminal Operation)으로 연결되는 데이터 처리 흐름입니다.
- **Intermediate Operation (중간 연산)**: `filter()`, `map()`, `sorted()` 처럼 스트림을 반환하며 연속 체이닝이 가능한 연산입니다. (지연 연산 Lazy Evaluation 수행)
- **Terminal Operation (최종 연산)**: `collect()`, `forEach()`, `reduce()` 처럼 스트림 파이프라인을 실행하고 결과를 도출해내는 마감 연산입니다.
- **Parallel Stream (병렬 스트림)**: ForkJoinPool 프레임워크를 이용해 대용량 컬렉션을 멀티코어 CPU에서 병렬 분할 처리하는 스트림입니다. (`parallelStream()`)

---

## 2. 스트림 파이프라인 실전 가공 예제

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 스트림을 한 번 최종 연산한 후 다시 재사용할 수 있나요?**
A. 안 됩니다! 스트림은 1회용(Single-use)이므로 최종 연산이 호출되어 닫힌 스트림은 재사용이 불가능하며, 필요하다면 새 스트림을 다시 생성해야 합니다.
',
  '<p>컬렉션이나 배열의 데이터 요소들을 루프문 없이 선언형 방식으로 가공, 필터링, 변환, 집계할 수 있는 <strong>스트림 API(Stream API)</strong> 파이프라인을 학습합니다.</p>
<hr>
<h2>1. 스트림 API 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Stream Pipeline</strong>: 데이터 소스 $
ightarrow$ 중간 연산(Intermediate Operations) $
ightarrow$ 최종 연산(Terminal Operation)으로 연결되는 데이터 처리 흐름입니다.</li>
<li><strong>Intermediate Operation (중간 연산)</strong>: <code>filter()</code>, <code>map()</code>, <code>sorted()</code> 처럼 스트림을 반환하며 연속 체이닝이 가능한 연산입니다. (지연 연산 Lazy Evaluation 수행)</li>
<li><strong>Terminal Operation (최종 연산)</strong>: <code>collect()</code>, <code>forEach()</code>, <code>reduce()</code> 처럼 스트림 파이프라인을 실행하고 결과를 도출해내는 마감 연산입니다.</li>
<li><strong>Parallel Stream (병렬 스트림)</strong>: ForkJoinPool 프레임워크를 이용해 대용량 컬렉션을 멀티코어 CPU에서 병렬 분할 처리하는 스트림입니다. (<code>parallelStream()</code>)</li>
</ul>
<hr>
<h2>2. 스트림 파이프라인 실전 가공 예제</h2>
<pre><code class="language-java">import java.util.*;
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
        List&lt;Person&gt; people = Arrays.asList(
            new Person(&quot;홍길동&quot;, 25),
            new Person(&quot;이순신&quot;, 45),
            new Person(&quot;강감찬&quot;, 30),
            new Person(&quot;유관순&quot;, 18)
        );

        // [요구사항] 나이가 20세 이상인 사람들의 이름을 추출하여 성인 목록 리스트로 만들기
        List&lt;String&gt; adultNames = people.stream()
            .filter(p -&gt; p.getAge() &gt;= 20)      // 중간 연산: 20세 이상 필터링
            .map(Person::getName)               // 중간 연산: 이름만 추출 (타입 변환)
            .sorted()                          // 중간 연산: 가나다순 정렬
            .collect(Collectors.toList());      // 최종 연산: List 컬렉션으로 수집

        System.out.println(&quot;성인 회원 명단: &quot; + adultNames);
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 스트림을 한 번 최종 연산한 후 다시 재사용할 수 있나요?</strong>
A. 안 됩니다! 스트림은 1회용(Single-use)이므로 최종 연산이 호출되어 닫힌 스트림은 재사용이 불가능하며, 필요하다면 새 스트림을 다시 생성해야 합니다.</p>
',
  'published',
  '자바 스트림 API - filter, map, reduce, collect 및 병렬 스트림 파이프라인',
  '컬렉션 데이터를 가공하는 스트림 API의 중간 연산(filter, map, sorted)과 최종 연산(collect, reduce), 병렬 스트림(Parallel Stream)을 다룹니다.',
  10,
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
  'ch11-multithreading-and-concurrency',
  '자바 멀티스레딩(Multithreading)과 동시성 제어',
  '동시에 여러 작업을 병렬 수행하는 멀티스레딩(Multithreading)과 자원 경합을 해결하는 임계 영역 동기화(synchronized) 기법을 학습합니다.',
  '하나의 프로세스 내에서 여러 작업을 동시에 병렬로 실행하는 **멀티스레딩(Multithreading)** 기술과 공유 자원 충돌을 방지하는 **동시성(Concurrency) 동기화**를 배웁니다.

---

## 1. 멀티스레딩 용어 사전 (Glossary)

- **Process (프로세스)**: 운영체제로부터 독립된 메모리를 할당받아 실행 중인 프로그램 단위입니다.
- **Thread (스레드)**: 프로세스 내부에서 실행되는 제어의 흐름 단위로, Stack 영역만 별도로 갖고 Heap 메모리는 공유합니다.
- **Critical Section (임계 영역)**: 둘 이상의 스레드가 동시에 접근하면 문제가 발생하는 공유 자원 코드 구역입니다.
- **Synchronized (동기화)**: 한 스레드가 임계 영역에 진입했을 때 모니터 락(Monitor Lock)을 획득하여 다른 스레드의 접근을 차단하는 키워드입니다.
- **Deadlock (교착 상태)**: 둘 이상의 스레드가 서로가 가진 락이 해제되기만을 무한히 기다리며 멈춰있는 방해 현상입니다.

---

## 2. 동기화(`synchronized`) 계좌 잔액 차감 실습

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `Thread` 클래스를 상속받는 것과 `Runnable` 인터페이스를 구현하는 것의 차이는?**
A. 자바는 단일 상속만 지원하므로 `Thread` 클래스를 상속받으면 다른 클래스를 상속받을 수 없게 됩니다. 따라서 코드의 유연성과 재사용성을 위해 `Runnable` 인터페이스 구현 방식이 권장됩니다.
',
  '<p>하나의 프로세스 내에서 여러 작업을 동시에 병렬로 실행하는 <strong>멀티스레딩(Multithreading)</strong> 기술과 공유 자원 충돌을 방지하는 <strong>동시성(Concurrency) 동기화</strong>를 배웁니다.</p>
<hr>
<h2>1. 멀티스레딩 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Process (프로세스)</strong>: 운영체제로부터 독립된 메모리를 할당받아 실행 중인 프로그램 단위입니다.</li>
<li><strong>Thread (스레드)</strong>: 프로세스 내부에서 실행되는 제어의 흐름 단위로, Stack 영역만 별도로 갖고 Heap 메모리는 공유합니다.</li>
<li><strong>Critical Section (임계 영역)</strong>: 둘 이상의 스레드가 동시에 접근하면 문제가 발생하는 공유 자원 코드 구역입니다.</li>
<li><strong>Synchronized (동기화)</strong>: 한 스레드가 임계 영역에 진입했을 때 모니터 락(Monitor Lock)을 획득하여 다른 스레드의 접근을 차단하는 키워드입니다.</li>
<li><strong>Deadlock (교착 상태)</strong>: 둘 이상의 스레드가 서로가 가진 락이 해제되기만을 무한히 기다리며 멈춰있는 방해 현상입니다.</li>
</ul>
<hr>
<h2>2. 동기화(<code>synchronized</code>) 계좌 잔액 차감 실습</h2>
<pre><code class="language-java">class BankAccount {
    private int balance = 1000;

    // synchronized 키워드로 동시 접근 차단
    public synchronized void withdraw(int amount) {
        if (balance &gt;= amount) {
            try { Thread.sleep(100); } catch (InterruptedException e) {}
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + &quot; 출금 완료. 남은 잔액: &quot; + balance + &quot;원&quot;);
        } else {
            System.out.println(Thread.currentThread().getName() + &quot; 출금 실패 (잔액 부족)&quot;);
        }
    }
}

public class ThreadSyncMain {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();

        // 2개의 스레드가 동일 계좌에서 동시에 출금 시도
        Runnable task = () -&gt; account.withdraw(700);

        Thread t1 = new Thread(task, &quot;사용자 A&quot;);
        Thread t2 = new Thread(task, &quot;사용자 B&quot;);

        t1.start();
        t2.start();
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>Thread</code> 클래스를 상속받는 것과 <code>Runnable</code> 인터페이스를 구현하는 것의 차이는?</strong>
A. 자바는 단일 상속만 지원하므로 <code>Thread</code> 클래스를 상속받으면 다른 클래스를 상속받을 수 없게 됩니다. 따라서 코드의 유연성과 재사용성을 위해 <code>Runnable</code> 인터페이스 구현 방식이 권장됩니다.</p>
',
  'published',
  '자바 멀티스레드 - Thread, Runnable, synchronized, 동기화 및 데드락 방지',
  '스레드 생성 기법(Thread 상속, Runnable 구현), 스레드 상태, 임계 영역 동기화(synchronized), ReentrantLock 및 교착 상태(Deadlock) 방지법을 학습합니다.',
  11,
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
  'ch12-gui-swing-components-and-events',
  '자바 GUI 스윙(Swing) 컴포넌트와 이벤트 처리',
  '윈도우 데스크톱 창(Window)을 띄우고 버튼, 텍스트 상자를 배치하는 Swing GUI 컴포넌트 사용법과 이벤트 처리(Event Handling) 모델을 배웁니다.',
  '사용자가 마우스와 키보드로 그래픽 창과 상호작용하는 **GUI(Graphical User Interface) 스윙(Swing)** 프로그래밍과 이벤트 처리 모델을 익힙니다.

---

## 1. Swing GUI 용어 사전 (Glossary)

- **Container (컨테이너)**: 다른 GUI 부품(컴포넌트)들을 담는 용기 창입니다. (예: `JFrame`, `JPanel`)
- **Component (컴포넌트)**: 버튼, 텍스트 상자, 체크박스 등 화면에 표시되는 개별 시각적 요소입니다. (예: `JButton`, `JTextField`, `JLabel`)
- **Layout Manager (레이아웃 매니저)**: 컨테이너 내부 컴포넌트들의 위치와 크기를 자동으로배치해 주는 객체입니다. (`FlowLayout`, `BorderLayout`, `GridLayout`)
- **ActionListener**: 버튼 클릭이나 텍스트 엔터 입력 이벤트를 감지하여 동작하는 이벤트 리스너 인터페이스입니다.

---

## 2. 윈도우 계산기 화면 GUI Swing 완성 예제

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Swing 구동 시 UI 스레드 안전성을 유지하려면?**
A. Swing 컴포넌트 생성 및 갱신은 반드시 `SwingUtilities.invokeLater(() -> { ... });` 메소드를 사용하여 **EDT(Event Dispatch Thread)** 상에서 실행시켜야 안전합니다.
',
  '<p>사용자가 마우스와 키보드로 그래픽 창과 상호작용하는 <strong>GUI(Graphical User Interface) 스윙(Swing)</strong> 프로그래밍과 이벤트 처리 모델을 익힙니다.</p>
<hr>
<h2>1. Swing GUI 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Container (컨테이너)</strong>: 다른 GUI 부품(컴포넌트)들을 담는 용기 창입니다. (예: <code>JFrame</code>, <code>JPanel</code>)</li>
<li><strong>Component (컴포넌트)</strong>: 버튼, 텍스트 상자, 체크박스 등 화면에 표시되는 개별 시각적 요소입니다. (예: <code>JButton</code>, <code>JTextField</code>, <code>JLabel</code>)</li>
<li><strong>Layout Manager (레이아웃 매니저)</strong>: 컨테이너 내부 컴포넌트들의 위치와 크기를 자동으로배치해 주는 객체입니다. (<code>FlowLayout</code>, <code>BorderLayout</code>, <code>GridLayout</code>)</li>
<li><strong>ActionListener</strong>: 버튼 클릭이나 텍스트 엔터 입력 이벤트를 감지하여 동작하는 이벤트 리스너 인터페이스입니다.</li>
</ul>
<hr>
<h2>2. 윈도우 계산기 화면 GUI Swing 완성 예제</h2>
<pre><code class="language-java">import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimpleCalculatorGUI extends JFrame {
    private JTextField num1Field, num2Field;
    private JLabel resultLabel;

    public SimpleCalculatorGUI() {
        setTitle(&quot;DAVHAVE 자바 GUI 계산기&quot;);
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout()); // 레이아웃 배치

        // 컴포넌트 생성 및 배치
        add(new JLabel(&quot;숫자 1:&quot;));
        num1Field = new JTextField(5);
        add(num1Field);

        add(new JLabel(&quot;숫자 2:&quot;));
        num2Field = new JTextField(5);
        add(num2Field);

        JButton addBtn = new JButton(&quot;더하기&quot;);
        add(addBtn);

        resultLabel = new JLabel(&quot;결과: &quot;);
        add(resultLabel);

        // 버튼 이벤트 처리 (ActionListener)
        addBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    int n1 = Integer.parseInt(num1Field.getText());
                    int n2 = Integer.parseInt(num2Field.getText());
                    int sum = n1 + n2;
                    resultLabel.setText(&quot;결과: &quot; + sum);
                } catch (NumberFormatException ex) {
                    resultLabel.setText(&quot;올바른 숫자를 입력하세요!&quot;);
                }
            }
        });

        setVisible(true); // 윈도우 창 표시
    }

    public static void main(String[] args) {
        new SimpleCalculatorGUI();
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Swing 구동 시 UI 스레드 안전성을 유지하려면?</strong>
A. Swing 컴포넌트 생성 및 갱신은 반드시 <code>SwingUtilities.invokeLater(() -&gt; { ... });</code> 메소드를 사용하여 <strong>EDT(Event Dispatch Thread)</strong> 상에서 실행시켜야 안전합니다.</p>
',
  'published',
  '자바 GUI 프로그래밍 - Swing, JFrame, JButton, 레이아웃 매니저 및 ActionListener',
  '윈도우 그래픽 화면을 만드는 GUI Swing 컴포넌트(JFrame, JPanel, JButton, JTextField), 레이아웃 매니저 및 버튼 클릭 이벤트(ActionListener) 처리를 해설합니다.',
  12,
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
