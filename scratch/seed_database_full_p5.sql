-- Full Database Mega Lessons Part 5

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch17-transactions-acid-properties',
  '트랜잭션(Transaction) 기초: ACID 성질(원자성, 일관성, 격리성, 지속성)과 COMMIT/ROLLBACK',
  '데이터베이스의 일관성과 작업 완결성을 보장하는 핵심 단위인 트랜잭션(Transaction)의 ACID 4대 속성과 COMMIT/ROLLBACK의 구동 원리를 다룹니다.',
  '데이터베이스의 상태를 변화시키는 하나의 논리적인 작업 단위인 **트랜잭션(Transaction)**과 **ACID 4대 성질**을 학습합니다.',
  '<p>데이터베이스의 상태를 변화시키는 하나의 논리적인 작업 단위인 **트랜잭션(Transaction)**과 <strong>ACID 4대 성질</strong>을 학습합니다.</p>
',
  'published',
  '트랜잭션(Transaction) - ACID 성질 (Atomicity, Consistency, Isolation, Durability)',
  '트랜잭션(Transaction), ACID 4대 성질(원자성, 일관성, 격리성, 지속성), 성공 확정 COMMIT, 작업 취소 ROLLBACK을 배웁니다.',
  17,
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
  'database',
  'ch18-concurrency-control-locking-and-isolation-levels',
  '동시성 제어(Concurrency Control): 로킹(Locking), 교착상태(Deadlock) 및 ANSI 격리 수준(Isolation Levels)',
  '여러 트랜잭션이 동시 접근할 때 데이터 부정합을 방지하는 동시성 제어(Locking, 2PL)와 교착상태, 그리고 4단계 트랜잭션 격리 수준을 학습합니다.',
  '여러 트랜잭션이 동시에 데이터베이스에 접근할 때 상호 간섭으로 인한 문제점을 방지하는 **동시성 제어(Concurrency Control)**와 **트랜잭션 격리 수준**을 배웁니다.',
  '<p>여러 트랜잭션이 동시에 데이터베이스에 접근할 때 상호 간섭으로 인한 문제점을 방지하는 **동시성 제어(Concurrency Control)**와 <strong>트랜잭션 격리 수준</strong>을 배웁니다.</p>
',
  'published',
  '동시성 제어 - 로킹(Locking), Deadlock, 타임스탬프 & ANSI 트랜잭션 격리 수준',
  '동시성 제어, 공유/배타 잠금(Shared/Exclusive Lock), 2단계 로킹(2PL), 교착상태(Deadlock) 및 4가지 트랜잭션 격리 수준을 배웁니다.',
  18,
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
  'database',
  'ch19-database-application-development-and-security',
  'DB 기반 애플리케이션 개발: 파이썬 DB 바인딩(oracledb/sqlite3), PyQt5 GUI 연동 및 SQL Injection 방어',
  '파이썬(oracledb, sqlite3)과 데이터베이스 바인딩, 커서 버퍼 순회, 위치/이름 기반 바인드 변수 적용, PyQt5 GUI 데이터베이스 검색 앱 개발과 SQL Injection 방어법을 학습합니다.',
  '애플리케이션 프로그램과 데이터베이스를 직접 연결하는 **파이썬 DB 바인딩(oracledb, sqlite3)** 기술과 **PyQt5 기반 데스크톱 GUI 연동 앱**, 그리고 **SQL Injection 보안 방어**를 다룹니다.

---

## 1. DB 연동 핵심 전문 용어 사전 (Glossary)

- **DB Driver / Binding**: 파이썬 코드에서 데이터베이스 엔진과 TCP/IP 또는 소켓 통신을 주고받아 SQL을 전달하고 결과를 반환받는 클라이언트 모듈입니다.
- **Cursor (커서)**: SQL 실행 결과 생성된 튜플 결과셋(ResultSet)을 가리키는 버퍼 포인터 객체입니다. (`curs.fetchone()`, `curs.fetchall()`)
- **Bind Variables (바인드 변수)**: SQL 쿼리문에 변수값을 동적으로 대입할 때 위치 기반(`:1, :2`) 또는 이름 기반(`:var1, :var2`)으로 지정하여 하드 파싱을 막고 **SQL Injection을 근본 차단**하는 안전한 기법입니다.

---

## 2. pjt/26 실전 파이썬 데이터베이스 연동 소스 코드 (chap13_2.py & chap13_4.py)

```python
import oracledb

dsn = "localhost/emppdb"
user = "scott"
pw = "tiger"

conn = oracledb.connect(user=user, password=pw, dsn=dsn)
curs = conn.cursor()

sql_select = "SELECT empno, ename, job, sal FROM emp WHERE deptno = :1"
curs.execute(sql_select, (20,))

rows = curs.fetchall()
print("=== [부서 20 사원 목록] ===")
for r in rows:
    print(f"사번: {r[0]}, 이름: {r[1]}, 직급: {r[2]}, 급여: {r[3]:,}원")

sql_insert = "INSERT INTO dept VALUES (:var1, :var2, :var3)"
curs.execute(sql_insert, var1=50, var2="AI_RESEARCH", var3="SEOUL")
conn.commit()

curs.close()
conn.close()
```
',
  '<p>애플리케이션 프로그램과 데이터베이스를 직접 연결하는 <strong>파이썬 DB 바인딩(oracledb, sqlite3)</strong> 기술과 <strong>PyQt5 기반 데스크톱 GUI 연동 앱</strong>, 그리고 <strong>SQL Injection 보안 방어</strong>를 다룹니다.</p>
<hr>
<h2>1. DB 연동 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>DB Driver / Binding</strong>: 파이썬 코드에서 데이터베이스 엔진과 TCP/IP 또는 소켓 통신을 주고받아 SQL을 전달하고 결과를 반환받는 클라이언트 모듈입니다.</li>
<li><strong>Cursor (커서)</strong>: SQL 실행 결과 생성된 튜플 결과셋(ResultSet)을 가리키는 버퍼 포인터 객체입니다. (<code>curs.fetchone()</code>, <code>curs.fetchall()</code>)</li>
<li><strong>Bind Variables (바인드 변수)</strong>: SQL 쿼리문에 변수값을 동적으로 대입할 때 위치 기반(<code>:1, :2</code>) 또는 이름 기반(<code>:var1, :var2</code>)으로 지정하여 하드 파싱을 막고 <strong>SQL Injection을 근본 차단</strong>하는 안전한 기법입니다.</li>
</ul>
<hr>
<h2>2. pjt/26 실전 파이썬 데이터베이스 연동 소스 코드 (chap13_2.py &amp; chap13_4.py)</h2>
<pre><code class="language-python">import oracledb

dsn = &quot;localhost/emppdb&quot;
user = &quot;scott&quot;
pw = &quot;tiger&quot;

conn = oracledb.connect(user=user, password=pw, dsn=dsn)
curs = conn.cursor()

sql_select = &quot;SELECT empno, ename, job, sal FROM emp WHERE deptno = :1&quot;
curs.execute(sql_select, (20,))

rows = curs.fetchall()
print(&quot;=== [부서 20 사원 목록] ===&quot;)
for r in rows:
    print(f&quot;사번: {r[0]}, 이름: {r[1]}, 직급: {r[2]}, 급여: {r[3]:,}원&quot;)

sql_insert = &quot;INSERT INTO dept VALUES (:var1, :var2, :var3)&quot;
curs.execute(sql_insert, var1=50, var2=&quot;AI_RESEARCH&quot;, var3=&quot;SEOUL&quot;)
conn.commit()

curs.close()
conn.close()
</code></pre>
',
  'published',
  'DB 앱 개발 - 파이썬 oracledb/sqlite3 연동, PyQt5 GUI & SQL Injection 방어',
  'pjt/26 실전 파이썬 DB 드라이버 바인딩(oracledb, sqlite3), fetchone()/fetchall() 버퍼 처리, 바인드 변수(:1, :var1), PyQt5 데스크톱 GUI DB 연동(ch13_workshop.py) 및 SQL Injection 보안 방어법을 배웁니다.',
  19,
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
  'database',
  'ch20-modern-database-trends-nosql-and-newsql',
  '현대 데이터베이스 트렌드: NoSQL(Key-Value, Document MongoDB, Graph) & Cloud NewSQL 분산 데이터베이스',
  '관계형 데이터베이스(RDB)의 한계를 극복하고 대용량 수평 확장(Scale-out)을 제공하는 NoSQL의 종류와 CAP 정리, 그리고 NewSQL 분산 데이터베이스의 최신 트렌드를 학습합니다.',
  '비정형 대용량 빅데이터 처리와 클라우드 수평 확장성(Scale-out)을 보장하는 **NoSQL 데이터베이스(MongoDB, Redis, Neo4j)**와 **NewSQL 분산 DB 트렌드**를 다룹니다.',
  '<p>비정형 대용량 빅데이터 처리와 클라우드 수평 확장성(Scale-out)을 보장하는 **NoSQL 데이터베이스(MongoDB, Redis, Neo4j)**와 <strong>NewSQL 분산 DB 트렌드</strong>를 다룹니다.</p>
',
  'published',
  '현대 DB 트렌드 - NoSQL(MongoDB, Redis, Neo4j), CAP 정리 & NewSQL 분산 DB',
  'NoSQL(Key-Value Redis, Document MongoDB, Columnar Cassandra, Graph Neo4j), CAP 정리(Consistency, Availability, Partition Tolerance) 및 NewSQL 분산 DB 트렌드를 배웁니다.',
  20,
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
