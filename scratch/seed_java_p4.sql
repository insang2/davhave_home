-- Full Java Lessons Part 4

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch13-java-socket-network-programming',
  '자바 소켓(Socket) 네트워크 프로그래밍',
  '네트워크를 통해 두 컴퓨터 간 소켓 통신을 연결하는 TCP/IP 기반 ServerSocket과 Client Socket 프로그래밍 및 멀티스레드 채팅 서버 구축을 다룹니다.',
  '컴퓨터 네트워크를 망라하여 서로 다른 기기 간에 데이터를 송수신하는 **TCP/IP 소켓(Socket) 네트워크 프로그래밍**을 배웁니다.

---

## 1. 소켓 네트워크 용어 사전 (Glossary)

- **Socket (소켓)**: 네트워크 망을 통해 상대방 프로그램과 소통하는 소프트웨어 접점(통신 양 끝단)입니다.
- **TCP/IP**: 데이터 손실 없이 안전하고 정확하게 전달함을 보장하는 연결 지향적(Connection-oriented) 네트워크 표준 프로토콜입니다.
- **Port Number (포트 번호)**: 한 컴퓨터 내에서 실행 중인 수많은 네트워크 프로그램 중 특정 서비스를 식별하는 16-bit 식별 번호입니다. (0 ~ 65535)
- **ServerSocket**: 클라이언트의 소켓 연결 요청을 들어오는 포트에서 수신 대기(`accept()`)하는 서버 전용 소켓입니다.

---

## 2. TCP 소켓 서버 / 클라이언트 동작 4단계

```
[Server] ServerSocket(port) 생성 및 accept() 대기
[Client] Socket(ip, port) 생성으로 연결 요청
[Server] accept() 승인으로 클라이언트 통신용 Socket 생성
[Both]   InputStream / OutputStream으로 데이터 고속 송수신
```

---

## 3. TCP 멀티스레드 에코 서버 파이썬/자바 코드

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. TCP와 UDP 통신의 주요 차이는 무엇인가요?**
A. TCP는 연결 수립 과정(3-Way Handshake)을 거쳐 신뢰성 높은 데이터를 전송하며, UDP는 연결 수립 없이 빠른 속도로 조각을 던지는 비연결형(Connectionless) 프로토콜입니다. (실시간 스트리밍/게임에는 UDP 선호)
',
  '<p>컴퓨터 네트워크를 망라하여 서로 다른 기기 간에 데이터를 송수신하는 <strong>TCP/IP 소켓(Socket) 네트워크 프로그래밍</strong>을 배웁니다.</p>
<hr>
<h2>1. 소켓 네트워크 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Socket (소켓)</strong>: 네트워크 망을 통해 상대방 프로그램과 소통하는 소프트웨어 접점(통신 양 끝단)입니다.</li>
<li><strong>TCP/IP</strong>: 데이터 손실 없이 안전하고 정확하게 전달함을 보장하는 연결 지향적(Connection-oriented) 네트워크 표준 프로토콜입니다.</li>
<li><strong>Port Number (포트 번호)</strong>: 한 컴퓨터 내에서 실행 중인 수많은 네트워크 프로그램 중 특정 서비스를 식별하는 16-bit 식별 번호입니다. (0 ~ 65535)</li>
<li><strong>ServerSocket</strong>: 클라이언트의 소켓 연결 요청을 들어오는 포트에서 수신 대기(<code>accept()</code>)하는 서버 전용 소켓입니다.</li>
</ul>
<hr>
<h2>2. TCP 소켓 서버 / 클라이언트 동작 4단계</h2>
<pre><code>[Server] ServerSocket(port) 생성 및 accept() 대기
[Client] Socket(ip, port) 생성으로 연결 요청
[Server] accept() 승인으로 클라이언트 통신용 Socket 생성
[Both]   InputStream / OutputStream으로 데이터 고속 송수신
</code></pre>
<hr>
<h2>3. TCP 멀티스레드 에코 서버 파이썬/자바 코드</h2>
<pre><code class="language-java">// 서버 단 코드 (EchoServer.java)
import java.io.*;
import java.net.*;

public class EchoServer {
    public static void main(String[] args) {
        int port = 9999;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println(&quot;에코 서버가 &quot; + port + &quot; 포트에서 수신 대기 중...&quot;);

            while (true) {
                Socket socket = serverSocket.accept(); // 클라이언트 접속 승인
                System.out.println(&quot;클라이언트 접속 완료: &quot; + socket.getInetAddress());

                // 입출력 스트림 연결
                BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

                String msg;
                while ((msg = in.readLine()) != null) {
                    System.out.println(&quot;수신 메세지: &quot; + msg);
                    out.println(&quot;Echo: &quot; + msg); // 메세지 되돌려주기
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
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. TCP와 UDP 통신의 주요 차이는 무엇인가요?</strong>
A. TCP는 연결 수립 과정(3-Way Handshake)을 거쳐 신뢰성 높은 데이터를 전송하며, UDP는 연결 수립 없이 빠른 속도로 조각을 던지는 비연결형(Connectionless) 프로토콜입니다. (실시간 스트리밍/게임에는 UDP 선호)</p>
',
  'published',
  '자바 소켓 통신 - ServerSocket, Socket, TCP/IP 통신 및 멀티스레드 에코 서버',
  '네트워크 연결을 담당하는 소켓(Socket), TCP/IP 통신 기반 ServerSocket 과 Client Socket 구현, 1:N 멀티스레드 채팅 서버 구축을 해설합니다.',
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
  'ch14-jdbc-database-programming',
  'JDBC 데이터베이스 연동과 SQL CRUD 실행',
  '자바 애플리케이션과 관계형 데이터베이스(RDBMS)를 연결해 주는 JDBC 기술 및 PreparedStatement 기반 안전한 SQL CRUD 명령 실행을 습득합니다.',
  '자바 애플리케이션과 **관계형 데이터베이스(MySQL, PostgreSQL, Oracle, SQLite)**를 연결하여 데이터를 영구 보관하고 관리하는 **JDBC(Java Database Connectivity)** 기술을 다룹니다.

---

## 1. JDBC 연동 용어 사전 (Glossary)

- **JDBC (Java Database Connectivity)**: 자바 언어로 데이터베이스에 접속하여 SQL 쿼리를 실행할 수 있도록 지원하는 표준 API 인터페이스 집합입니다.
- **DriverManager**: 데이터베이스 드라이버를 로드하고 DB 연결 자원인 `Connection` 객체를 생성해 주는 매니저 클래스입니다.
- **PreparedStatement**: SQL 쿼리를 미리 컴파일하여 파라미터만 교체 실행하는 객체로, **SQL Injection 보안 공격을 차단**합니다.
- **ResultSet**: `SELECT` 쿼리 실행 결과로 반환된 데이터 테이블 행(Row)들을 가리키는 커서 객체입니다.

---

## 2. JDBC DB 연결 및 회원 등록/조회 실습

```java
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
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Statement 대신 왜 PreparedStatement를 사용해야 하나요?**
A. `Statement`는 SQL 문에 변수를 합칠 때 문자열 연결(`+`)을 사용하므로 **SQL Injection 보안 해킹** 위험에 노출되고 매번 쿼리를 재컴파일합니다. 반면 `PreparedStatement`는 미리 컴파일된 바인딩 변수(`?`)를 써서 안전하고 실행 속도도 훨씬 빠릅니다.
',
  '<p>자바 애플리케이션과 **관계형 데이터베이스(MySQL, PostgreSQL, Oracle, SQLite)**를 연결하여 데이터를 영구 보관하고 관리하는 <strong>JDBC(Java Database Connectivity)</strong> 기술을 다룹니다.</p>
<hr>
<h2>1. JDBC 연동 용어 사전 (Glossary)</h2>
<ul>
<li><strong>JDBC (Java Database Connectivity)</strong>: 자바 언어로 데이터베이스에 접속하여 SQL 쿼리를 실행할 수 있도록 지원하는 표준 API 인터페이스 집합입니다.</li>
<li><strong>DriverManager</strong>: 데이터베이스 드라이버를 로드하고 DB 연결 자원인 <code>Connection</code> 객체를 생성해 주는 매니저 클래스입니다.</li>
<li><strong>PreparedStatement</strong>: SQL 쿼리를 미리 컴파일하여 파라미터만 교체 실행하는 객체로, <strong>SQL Injection 보안 공격을 차단</strong>합니다.</li>
<li><strong>ResultSet</strong>: <code>SELECT</code> 쿼리 실행 결과로 반환된 데이터 테이블 행(Row)들을 가리키는 커서 객체입니다.</li>
</ul>
<hr>
<h2>2. JDBC DB 연결 및 회원 등록/조회 실습</h2>
<pre><code class="language-java">import java.sql.*;

public class JDBCExample {
    // DB 접속 정보
    private static final String URL = &quot;jdbc:sqlite:davhave.db&quot;; // SQLite 예시

    public static void main(String[] args) {
        String insertSQL = &quot;INSERT INTO users (name, email) VALUES (?, ?)&quot;;
        String selectSQL = &quot;SELECT * FROM users&quot;;

        try (Connection conn = DriverManager.getConnection(URL)) {
            System.out.println(&quot;데이터베이스 연결 성공!&quot;);

            // 1. PreparedStatement 데이터 삽입 (CRUD - Create)
            try (PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
                pstmt.setString(1, &quot;홍길동&quot;);
                pstmt.setString(2, &quot;hong@davhave.com&quot;);
                int rows = pstmt.executeUpdate();
                System.out.println(rows + &quot;개 회원 데이터 추가 완료.&quot;);
            }

            // 2. ResultSet 데이터 조회 (CRUD - Read)
            try (PreparedStatement pstmt = conn.prepareStatement(selectSQL);
                 ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    int id = rs.getInt(&quot;id&quot;);
                    String name = rs.getString(&quot;name&quot;);
                    String email = rs.getString(&quot;email&quot;);
                    System.out.println(&quot;ID: &quot; + id + &quot; | 이름: &quot; + name + &quot; | 이메일: &quot; + email);
                }
            }

        } catch (SQLException e) {
            System.err.println(&quot;DB 작업 오류: &quot; + e.getMessage());
        }
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Statement 대신 왜 PreparedStatement를 사용해야 하나요?</strong>
A. <code>Statement</code>는 SQL 문에 변수를 합칠 때 문자열 연결(<code>+</code>)을 사용하므로 <strong>SQL Injection 보안 해킹</strong> 위험에 노출되고 매번 쿼리를 재컴파일합니다. 반면 <code>PreparedStatement</code>는 미리 컴파일된 바인딩 변수(<code>?</code>)를 써서 안전하고 실행 속도도 훨씬 빠릅니다.</p>
',
  'published',
  '자바 JDBC 프로그래밍 - Connection, PreparedStatement, ResultSet 및 SQL CRUD',
  '자바 애플리케이션과 관계형 DB(MySQL, Oracle, SQLite)를 연동하는 JDBC API, PreparedStatement를 활용한 SQL CRUD 명령 및 SQL Injection 방지를 배웁니다.',
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
  'ch15-java-design-patterns-and-final-project',
  '자바 디자인 패턴(Singleton, Factory, DAO)과 실전 종합 프로젝트',
  '객체지향 설계의 핵심 디자인 패턴(싱글톤, DAO)을 배우고, 배운 자바 기술(OOP, 컬렉션, I/O, JDBC)을 종합하여 실전 회원 관리 시스템을 구축합니다.',
  '배운 객체지향 기초, 컬렉션, 예외 처리, 입출력 및 JDBC 기술을 총동원하고 실무 **디자인 패턴(Design Pattern)**을 도입하여 완성도 높은 **실전 자바 종합 프로젝트**를 구축합니다.

---

## 1. 디자인 패턴 핵심 용어 사전 (Glossary)

- **Singleton Pattern (싱글톤 패턴)**: 애플리케이션 실행 동안 인스턴스가 단 하나만 생성되도록 강제하는 대표적 생성 디자인 패턴입니다.
- **DAO Pattern (Data Access Object)**: 데이터베이스 접근 및 CRUD 로직을 비즈니스 로직과 분리하여 관리하는 데이터 접근 객체 패턴입니다.
- **DTO Pattern (Data Transfer Object)**: 계층 간(Controller, Service, DAO) 데이터 교환을 위해 순수 데이터 필드만 갖는 객체 패턴입니다.

---

## 2. 싱글톤 패턴 (Singleton) 구현 코드

```java
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
```

---

## 3. 실전 회원 관리 시스템 종합 프로젝트 아키텍처

```java
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
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 프로젝트 개발을 확장할 때 다음 단계로 학습해야 할 프레임워크는?**
A. 실무 자바 웹 애플리케이션 개발에서는 **스프링 프레임워크(Spring Framework / Spring Boot)**와 객체-DB 매핑 기술인 **JPA / Hibernate**를 학습하는 것이 전 세계 기업들의 표준 커리어 트랙입니다.
',
  '<p>배운 객체지향 기초, 컬렉션, 예외 처리, 입출력 및 JDBC 기술을 총동원하고 실무 **디자인 패턴(Design Pattern)**을 도입하여 완성도 높은 <strong>실전 자바 종합 프로젝트</strong>를 구축합니다.</p>
<hr>
<h2>1. 디자인 패턴 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Singleton Pattern (싱글톤 패턴)</strong>: 애플리케이션 실행 동안 인스턴스가 단 하나만 생성되도록 강제하는 대표적 생성 디자인 패턴입니다.</li>
<li><strong>DAO Pattern (Data Access Object)</strong>: 데이터베이스 접근 및 CRUD 로직을 비즈니스 로직과 분리하여 관리하는 데이터 접근 객체 패턴입니다.</li>
<li><strong>DTO Pattern (Data Transfer Object)</strong>: 계층 간(Controller, Service, DAO) 데이터 교환을 위해 순수 데이터 필드만 갖는 객체 패턴입니다.</li>
</ul>
<hr>
<h2>2. 싱글톤 패턴 (Singleton) 구현 코드</h2>
<pre><code class="language-java">public class DatabaseConnectionPool {
    // 1. 단 하나의 인스턴스를 static 영역에 선언
    private static DatabaseConnectionPool instance = new DatabaseConnectionPool();

    // 2. private 생성자로 외부 new 생성 막기
    private DatabaseConnectionPool() {
        System.out.println(&quot;DB 커넥션 풀 객체가 최초 1회 생성되었습니다.&quot;);
    }

    // 3. 글로벌 접근 메소드 제공
    public static DatabaseConnectionPool getInstance() {
        return instance;
    }
}
</code></pre>
<hr>
<h2>3. 실전 회원 관리 시스템 종합 프로젝트 아키텍처</h2>
<pre><code class="language-java">// DTO 클래스
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
        System.out.println(&quot;=== DAVHAVE 자바 실전 시스템 가동 ===&quot;);
        MemberDTO m1 = new MemberDTO(101, &quot;홍길동&quot;);
        System.out.println(&quot;등록 회원: &quot; + m1.getName() + &quot; (ID: &quot; + m1.getId() + &quot;)&quot;);
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 프로젝트 개발을 확장할 때 다음 단계로 학습해야 할 프레임워크는?</strong>
A. 실무 자바 웹 애플리케이션 개발에서는 **스프링 프레임워크(Spring Framework / Spring Boot)**와 객체-DB 매핑 기술인 <strong>JPA / Hibernate</strong>를 학습하는 것이 전 세계 기업들의 표준 커리어 트랙입니다.</p>
',
  'published',
  '자바 실전 프로젝트 - 디자인 패턴(Singleton, DAO) 및 회원 관리 종합 프로그래밍',
  '실무 소프트웨어 아키텍처 핵심 디자인 패턴(Singleton, Factory, DAO 패턴)의 개념과 배운 자바 기술을 총동원한 실전 시스템 구축 프로젝트를 완성합니다.',
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
