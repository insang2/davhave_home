-- Full Java Professor Lessons Part 4

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch13-threads-and-multitasking',
  '스레드와 멀티태스킹 (Thread, Runnable 및 동기화)',
  '프로세스 내에서 병렬 작업을 수행하는 스레드의 생성, 스레드 상태 제어 및 공유 자원 경합을 막는 synchronized 동기화 기법을 다룹니다.',
  '하나의 애플리케이션 안에서 두 개 이상의 작업을 동시에 병렬 처리하는 **스레드(Thread)와 멀티태스킹** 및 동기화 기술을 배웁니다.

---

## 1. 스레드 핵심 용어 사전 (Glossary)

- **Thread (스레드)**: 프로세스 내부에서 독립적으로 실행되는 제어 흐름의 최단 단위입니다.
- **Runnable Interface**: 스레드가 실행할 작업 내용(`run()` 메소드)만 분리하여 선언하는 함수형 인터페이스입니다.
- **Thread State (스레드 상태)**: `NEW`(생성) $ightarrow$ `RUNNABLE`(실행가능) $ightarrow$ `WAITING/TIMED_WAITING`(대기) $ightarrow$ `TERMINATED`(종료)
- **Critical Section (임계 영역)**: 둘 이상의 스레드가 동시 접근할 때 데이터 꼬임이 발생하는 공유 자원 영역입니다.
- **synchronized**: 한 스레드가 임계 영역을 실행하는 동안 다른 스레드의 접근을 차단하는 모니터 락 키워드입니다.

---

## 2. `synchronized` 동기화 처리 실습

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `thread.start()` 대신 `thread.run()`을 호출하면 어떻게 되나요?**
A. `start()`는 새로운 독립 스레드를 생성하여 병렬로 `run()`을 실행하지만, `run()`을 직접 부르면 새 스레드가 생성되지 않고 현재 호출한 메인 스레드 상에서 단순 메소드로만 실행됩니다.
',
  '<p>하나의 애플리케이션 안에서 두 개 이상의 작업을 동시에 병렬 처리하는 <strong>스레드(Thread)와 멀티태스킹</strong> 및 동기화 기술을 배웁니다.</p>
<hr>
<h2>1. 스레드 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Thread (스레드)</strong>: 프로세스 내부에서 독립적으로 실행되는 제어 흐름의 최단 단위입니다.</li>
<li><strong>Runnable Interface</strong>: 스레드가 실행할 작업 내용(<code>run()</code> 메소드)만 분리하여 선언하는 함수형 인터페이스입니다.</li>
<li><strong>Thread State (스레드 상태)</strong>: <code>NEW</code>(생성) $
ightarrow$ <code>RUNNABLE</code>(실행가능) $
ightarrow$ <code>WAITING/TIMED_WAITING</code>(대기) $
ightarrow$ <code>TERMINATED</code>(종료)</li>
<li><strong>Critical Section (임계 영역)</strong>: 둘 이상의 스레드가 동시 접근할 때 데이터 꼬임이 발생하는 공유 자원 영역입니다.</li>
<li><strong>synchronized</strong>: 한 스레드가 임계 영역을 실행하는 동안 다른 스레드의 접근을 차단하는 모니터 락 키워드입니다.</li>
</ul>
<hr>
<h2>2. <code>synchronized</code> 동기화 처리 실습</h2>
<pre><code class="language-java">class SharedPrinter {
    // 동기화 메소드로 1번에 1개 스레드만 텍스트 출력 허용
    public synchronized void printNotice(String user, String text) {
        System.out.print(&quot;[&quot; + user + &quot;]: &quot;);
        for (int i = 0; i &lt; text.length(); i++) {
            System.out.print(text.charAt(i));
            try { Thread.sleep(50); } catch (InterruptedException e) {}
        }
        System.out.println();
    }
}

public class MultiThreadSyncMain {
    public static void main(String[] args) {
        SharedPrinter printer = new SharedPrinter();

        Thread t1 = new Thread(() -&gt; printer.printNotice(&quot;사용자 A&quot;, &quot;안녕하세요! 동기화 테스트입니다.&quot;));
        Thread t2 = new Thread(() -&gt; printer.printNotice(&quot;사용자 B&quot;, &quot;반갑습니다! 멀티스레드입니다.&quot;));

        t1.start();
        t2.start();
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>thread.start()</code> 대신 <code>thread.run()</code>을 호출하면 어떻게 되나요?</strong>
A. <code>start()</code>는 새로운 독립 스레드를 생성하여 병렬로 <code>run()</code>을 실행하지만, <code>run()</code>을 직접 부르면 새 스레드가 생성되지 않고 현재 호출한 메인 스레드 상에서 단순 메소드로만 실행됩니다.</p>
',
  'published',
  '자바 멀티스레딩 - Thread 상속, Runnable 구현, 스레드 동기화 synchronized & wait/notify',
  '스레드 생성을 위한 Thread 상속 및 Runnable 구현, 스레드 생명주기 상태, synchronized 임계영역 동기화, wait()/notify() 통신을 학습합니다.',
  13,
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
  'ch14-lambda-expressions-and-stream-api',
  '람다식(Lambda Expression)과 스트림 API 데이터 가공',
  '코드를 간결히 만들어 주는 람다식(Lambda) 표현식과 컬렉션 요소를 선언형으로 필터링하고 변환하는 스트림 API 데이터 가공 파이프라인을 배웁니다.',
  '자바 8부터 도입된 **람다식(Lambda Expression)**과 컬렉션 데이터를 선언형으로 가공하는 **스트림 API(Stream API)**를 학습합니다.

---

## 1. 람다 & 스트림 용어 사전 (Glossary)

- **Lambda Expression**: 메소드를 식(Expression) 형태로 간결하게 표현한 익명 함수 문법입니다. (`(a, b) -> a + b`)
- **Functional Interface**: 단 1개의 추상 메소드만 존재하는 인터페이스입니다. (`@FunctionalInterface` 어노테이션 사용)
- **Stream API**: 컬렉션이나 배열의 요소를 원본 변경 없이 가공, 필터링, 매핑, 집계하는 함수형 파이프라인 연산입니다.

---

## 2. 스트림 API 파이프라인 가공 예제

```java
import java.util.*;
import java.util.stream.Collectors;

public class StreamApiExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Kim", "Park", "Lee", "Choi", "Kang");

        // [요구사항] 이름이 ''K''로 시작하는 사람들만 골라 대문자로 바꾸고 정렬하여 리스트로 수집
        List<String> result = names.stream()
            .filter(name -> name.startsWith("K")) // 중간 연산: ''K''로 시작 필터링
            .map(String::toUpperCase)              // 중간 연산: 대문자 매핑
            .sorted()                              // 중간 연산: 정렬
            .collect(Collectors.toList());         // 최종 연산: 결과 수집

        System.out.println("가공 결과: " + result);
    }
}
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 스트림에서 `map()`과 `flatMap()`의 차이는?**
A. `map()`은 요소 1개를 다른 형태 1개로 변환하지만, `flatMap()`은 요소 1개가 여러 개로 분할되는 구조(예: 리스트의 리스트)를 하나의 단일 평탄화 스트림으로 쫙 펼쳐서 변환합니다.
',
  '<p>자바 8부터 도입된 **람다식(Lambda Expression)**과 컬렉션 데이터를 선언형으로 가공하는 **스트림 API(Stream API)**를 학습합니다.</p>
<hr>
<h2>1. 람다 &amp; 스트림 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Lambda Expression</strong>: 메소드를 식(Expression) 형태로 간결하게 표현한 익명 함수 문법입니다. (<code>(a, b) -&gt; a + b</code>)</li>
<li><strong>Functional Interface</strong>: 단 1개의 추상 메소드만 존재하는 인터페이스입니다. (<code>@FunctionalInterface</code> 어노테이션 사용)</li>
<li><strong>Stream API</strong>: 컬렉션이나 배열의 요소를 원본 변경 없이 가공, 필터링, 매핑, 집계하는 함수형 파이프라인 연산입니다.</li>
</ul>
<hr>
<h2>2. 스트림 API 파이프라인 가공 예제</h2>
<pre><code class="language-java">import java.util.*;
import java.util.stream.Collectors;

public class StreamApiExample {
    public static void main(String[] args) {
        List&lt;String&gt; names = Arrays.asList(&quot;Kim&quot;, &quot;Park&quot;, &quot;Lee&quot;, &quot;Choi&quot;, &quot;Kang&quot;);

        // [요구사항] 이름이 &#39;K&#39;로 시작하는 사람들만 골라 대문자로 바꾸고 정렬하여 리스트로 수집
        List&lt;String&gt; result = names.stream()
            .filter(name -&gt; name.startsWith(&quot;K&quot;)) // 중간 연산: &#39;K&#39;로 시작 필터링
            .map(String::toUpperCase)              // 중간 연산: 대문자 매핑
            .sorted()                              // 중간 연산: 정렬
            .collect(Collectors.toList());         // 최종 연산: 결과 수집

        System.out.println(&quot;가공 결과: &quot; + result);
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 스트림에서 <code>map()</code>과 <code>flatMap()</code>의 차이는?</strong>
A. <code>map()</code>은 요소 1개를 다른 형태 1개로 변환하지만, <code>flatMap()</code>은 요소 1개가 여러 개로 분할되는 구조(예: 리스트의 리스트)를 하나의 단일 평탄화 스트림으로 쫙 펼쳐서 변환합니다.</p>
',
  'published',
  '자바 람다와 스트림 API - @FunctionalInterface, filter, map, collect, reduce',
  '람다식(Lambda Expression) 문법, 함수형 인터페이스(@FunctionalInterface), 스트림 API의 중간 연산(filter, map)과 최종 연산(collect, reduce)을 학습합니다.',
  14,
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
  'ch15-network-programming-socket',
  '네트워크 프로그래밍과 TCP/UDP 소켓 통신',
  '컴퓨터 간 네트워크 데이터를 주고받는 TCP/IP 기반 ServerSocket 과 Socket 통신 및 UDP 데이터그램 프로그래밍을 배웁니다.',
  '네트워크 망을 통해 서로 다른 컴퓨터 간에 데이터를 송수신하는 **TCP/IP 소켓 네트워크 프로그래밍**을 배웁니다.

---

## 1. 네트워크 용어 사전 (Glossary)

- **IP Address**: 네트워크 상에서 컴퓨터 장치를 식별하는 고유한 통신 주소입니다. (예: 192.168.0.1)
- **Port Number**: 한 컴퓨터 내부에서 구동 중인 수많은 네트워크 프로그램 중 특정 서비스를 구분하는 16-bit 번호입니다. (0~65535)
- **TCP (Transmission Control Protocol)**: 연결 수립 과정을 거쳐 데이터 손실 없이 정확히 전달함을 보장하는 신뢰성 프로토콜입니다.
- **ServerSocket**: 클라이언트의 접속 요청을 특정 포트에서 대기(`accept()`)하는 서버 전용 소켓입니다.

---

## 2. TCP 멀티스레드 에코 서버 구현 예제

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. TCP 통신에서 `accept()` 메소드는 왜 블로킹(Blocking)되나요?**
A. 클라이언트가 `new Socket(ip, port)`로 실제 접속을 시도할 때까지 스레드가 대기 상태에 들어가기 때문입니다. 클라이언트가 연결되면 통신용 `Socket` 객체를 리턴하며 블로킹이 해제됩니다.
',
  '<p>네트워크 망을 통해 서로 다른 컴퓨터 간에 데이터를 송수신하는 <strong>TCP/IP 소켓 네트워크 프로그래밍</strong>을 배웁니다.</p>
<hr>
<h2>1. 네트워크 용어 사전 (Glossary)</h2>
<ul>
<li><strong>IP Address</strong>: 네트워크 상에서 컴퓨터 장치를 식별하는 고유한 통신 주소입니다. (예: 192.168.0.1)</li>
<li><strong>Port Number</strong>: 한 컴퓨터 내부에서 구동 중인 수많은 네트워크 프로그램 중 특정 서비스를 구분하는 16-bit 번호입니다. (0~65535)</li>
<li><strong>TCP (Transmission Control Protocol)</strong>: 연결 수립 과정을 거쳐 데이터 손실 없이 정확히 전달함을 보장하는 신뢰성 프로토콜입니다.</li>
<li><strong>ServerSocket</strong>: 클라이언트의 접속 요청을 특정 포트에서 대기(<code>accept()</code>)하는 서버 전용 소켓입니다.</li>
</ul>
<hr>
<h2>2. TCP 멀티스레드 에코 서버 구현 예제</h2>
<pre><code class="language-java">import java.io.*;
import java.net.*;

public class TcpEchoServer {
    public static void main(String[] args) {
        int port = 8888;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println(&quot;서버가 &quot; + port + &quot; 포트에서 클라이언트 접속을 대기합니다...&quot;);

            while (true) {
                Socket socket = serverSocket.accept(); // 접속 승인
                System.out.println(&quot;클라이언트 연결됨: &quot; + socket.getInetAddress());

                // 입출력 스트림 획득
                BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);

                String clientMsg;
                while ((clientMsg = reader.readLine()) != null) {
                    System.out.println(&quot;수신 메세지: &quot; + clientMsg);
                    writer.println(&quot;Echo: &quot; + clientMsg); // 에코 응답
                }
                socket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. TCP 통신에서 <code>accept()</code> 메소드는 왜 블로킹(Blocking)되나요?</strong>
A. 클라이언트가 <code>new Socket(ip, port)</code>로 실제 접속을 시도할 때까지 스레드가 대기 상태에 들어가기 때문입니다. 클라이언트가 연결되면 통신용 <code>Socket</code> 객체를 리턴하며 블로킹이 해제됩니다.</p>
',
  'published',
  '자바 네트워크 - TCP ServerSocket, Socket, UDP Datagram & 멀티스레드 서버',
  '네트워크 IP 주소와 포트, TCP 기반 연결 소켓(ServerSocket/Socket), UDP 비연결 Datagram 통신 및 멀티스레드 1:N 채팅 서버 구축을 해설합니다.',
  15,
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
  'ch16-jdbc-database-programming-and-crud',
  'JDBC 데이터베이스 연동 및 SQL CRUD 실행',
  '자바 애플리케이션과 관계형 DB(RDBMS)를 연결하는 JDBC 기술 및 PreparedStatement 기반 안전한 SQL CRUD 쿼리 실행을 배웁니다.',
  '자바 애플리케이션과 **관계형 데이터베이스(MySQL, Oracle, SQLite)**를 연동하여 데이터를 영구 저장하고 조작하는 **JDBC(Java Database Connectivity)** 기술을 다룹니다.

---

## 1. JDBC 연동 용어 사전 (Glossary)

- **JDBC (Java Database Connectivity)**: 자바 언어로 RDBMS 데이터베이스에 접속하여 SQL 문을 실행하도록 돕는 표준 API 인터페이스입니다.
- **DriverManager**: 데이터베이스 드라이버를 관리하고 DB와의 세션 연결 자원인 `Connection` 객체를 생성해 주는 클래스입니다.
- **PreparedStatement**: SQL 쿼리 뼈대를 미리 컴파일하고 파라미터만 바인딩하여 실행하는 객체로, **SQL Injection 공격을 완벽 차단**합니다.
- **ResultSet**: `SELECT` 쿼리 실행 결과로 반환된 테이블 형태의 데이터 행(Row)들을 조회하는 커서 객체입니다.

---

## 2. JDBC DB 연결 및 SQL CRUD 실행 예제

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `executeUpdate()`와 `executeQuery()` 메소드의 차이는?**
A. `executeUpdate()`는 `INSERT`, `UPDATE`, `DELETE` 처럼 DB 내용을 변경하는 쿼리에 쓰이며 영향받은 행(Row)의 개수를 반환합니다. 반면 `executeQuery()`는 `SELECT` 쿼리에 쓰이며 `ResultSet` 결과 객체를 반환합니다.
',
  '<p>자바 애플리케이션과 **관계형 데이터베이스(MySQL, Oracle, SQLite)**를 연동하여 데이터를 영구 저장하고 조작하는 <strong>JDBC(Java Database Connectivity)</strong> 기술을 다룹니다.</p>
<hr>
<h2>1. JDBC 연동 용어 사전 (Glossary)</h2>
<ul>
<li><strong>JDBC (Java Database Connectivity)</strong>: 자바 언어로 RDBMS 데이터베이스에 접속하여 SQL 문을 실행하도록 돕는 표준 API 인터페이스입니다.</li>
<li><strong>DriverManager</strong>: 데이터베이스 드라이버를 관리하고 DB와의 세션 연결 자원인 <code>Connection</code> 객체를 생성해 주는 클래스입니다.</li>
<li><strong>PreparedStatement</strong>: SQL 쿼리 뼈대를 미리 컴파일하고 파라미터만 바인딩하여 실행하는 객체로, <strong>SQL Injection 공격을 완벽 차단</strong>합니다.</li>
<li><strong>ResultSet</strong>: <code>SELECT</code> 쿼리 실행 결과로 반환된 테이블 형태의 데이터 행(Row)들을 조회하는 커서 객체입니다.</li>
</ul>
<hr>
<h2>2. JDBC DB 연결 및 SQL CRUD 실행 예제</h2>
<pre><code class="language-java">import java.sql.*;

public class JdbcCrudMain {
    private static final String URL = &quot;jdbc:sqlite:student.db&quot;; // DB URL

    public static void main(String[] args) {
        String insertSql = &quot;INSERT INTO students (name, score) VALUES (?, ?)&quot;;
        String selectSql = &quot;SELECT * FROM students&quot;;

        try (Connection conn = DriverManager.getConnection(URL)) {
            System.out.println(&quot;데이터베이스 연결 성공!&quot;);

            // 1. 데이터 추가 (Create)
            try (PreparedStatement pstmt = conn.prepareStatement(insertSql)) {
                pstmt.setString(1, &quot;홍길동&quot;);
                pstmt.setInt(2, 95);
                pstmt.executeUpdate();
                System.out.println(&quot;학생 데이터 등록 성공.&quot;);
            }

            // 2. 데이터 조회 (Read)
            try (PreparedStatement pstmt = conn.prepareStatement(selectSql);
                 ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    System.out.println(&quot;ID: &quot; + rs.getInt(&quot;id&quot;) + 
                                       &quot; | 이름: &quot; + rs.getString(&quot;name&quot;) + 
                                       &quot; | 점수: &quot; + rs.getInt(&quot;score&quot;));
                }
            }
        } catch (SQLException e) {
            System.err.println(&quot;DB 작업 에러: &quot; + e.getMessage());
        }
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>executeUpdate()</code>와 <code>executeQuery()</code> 메소드의 차이는?</strong>
A. <code>executeUpdate()</code>는 <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code> 처럼 DB 내용을 변경하는 쿼리에 쓰이며 영향받은 행(Row)의 개수를 반환합니다. 반면 <code>executeQuery()</code>는 <code>SELECT</code> 쿼리에 쓰이며 <code>ResultSet</code> 결과 객체를 반환합니다.</p>
',
  'published',
  '자바 JDBC 프로그래밍 - Connection, PreparedStatement, ResultSet 및 CRUD',
  '관계형 데이터베이스(MySQL, Oracle, SQLite) 연동 JDBC API, PreparedStatement 기반 안전한 SQL CRUD 명령 실행과 SQL Injection 해킹 방지를 배웁니다.',
  16,
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
