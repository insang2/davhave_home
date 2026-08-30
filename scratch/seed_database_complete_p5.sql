-- Complete Database Master Lessons Part 5

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch17-transactions-acid-properties',
  '트랜잭션(Transaction) 기초: ACID 성질(원자성, 일관성, 격리성, 지속성)과 COMMIT/ROLLBACK',
  '데이터베이스의 일관성과 작업 완결성을 보장하는 핵심 단위인 트랜잭션(Transaction)의 ACID 4대 속성과 COMMIT/ROLLBACK의 구동 원리를 다룹니다.',
  '데이터베이스의 상태를 변화시키는 하나의 논리적인 작업 단위인 **트랜잭션(Transaction)**과 **ACID 4대 성질**을 학습합니다.

---

## 1. 트랜잭션 ACID 4대 성질

1. **Atomicity (원자성)**: "All or Nothing"으로 완벽히 전부 수행되거나 아예 실행되지 않아야 합니다.
2. **Consistency (일관성)**: 실행 전후의 데이터베이스는 항상 정해진 무결성 제약조건을 만족해야 합니다.
3. **Isolation (격리성)**: 실행 중인 트랜잭션에 다른 동시 트랜잭션이 끼어들어 중간 상태를 참조할 수 없습니다.
4. **Durability (지속성)**: 성공적으로 완료(COMMIT)된 트랜잭션의 결과는 영구 보존되어야 합니다.
',
  '<p>데이터베이스의 상태를 변화시키는 하나의 논리적인 작업 단위인 **트랜잭션(Transaction)**과 <strong>ACID 4대 성질</strong>을 학습합니다.</p>
<hr>
<h2>1. 트랜잭션 ACID 4대 성질</h2>
<ol>
<li><strong>Atomicity (원자성)</strong>: &quot;All or Nothing&quot;으로 완벽히 전부 수행되거나 아예 실행되지 않아야 합니다.</li>
<li><strong>Consistency (일관성)</strong>: 실행 전후의 데이터베이스는 항상 정해진 무결성 제약조건을 만족해야 합니다.</li>
<li><strong>Isolation (격리성)</strong>: 실행 중인 트랜잭션에 다른 동시 트랜잭션이 끼어들어 중간 상태를 참조할 수 없습니다.</li>
<li><strong>Durability (지속성)</strong>: 성공적으로 완료(COMMIT)된 트랜잭션의 결과는 영구 보존되어야 합니다.</li>
</ol>
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
  '여러 트랜잭션이 동시에 데이터베이스에 접근할 때 상호 간섭으로 인한 문제점을 방지하는 **동시성 제어(Concurrency Control)**와 **트랜잭션 격리 수준**을 배웁니다.

---

## 1. 동시성 미제어 시 발생하는 3대 현상

- **Dirty Read**: 아직 커밋되지 않은 다른 트랜잭션의 변경 데이터를 읽는 현상입니다.
- **Non-Repeatable Read**: 동일한 데이터를 두 번 읽을 때 중간에 타 트랜잭션이 UPDATE하여 값이 달라지는 현상입니다.
- **Phantom Read**: 범위 쿼리를 두 번 실행할 때 중간에 타 트랜잭션이 INSERT하여 새로운 유령 행이 나타나는 현상입니다.

---

## 2. ANSI 4단계 트랜잭션 격리 수준 (Isolation Levels)

| 격리 수준 | Dirty Read | Non-Repeatable Read | Phantom Read |
| :--- | :---: | :---: | :---: |
| **READ UNCOMMITTED** | **발생** | **발생** | **발생** |
| **READ COMMITTED** | 방지 | **발생** | **발생** |
| **REPEATABLE READ** | 방지 | 방지 | **발생** |
| **SERIALIZABLE** | 방지 | 방지 | 방지 |
',
  '<p>여러 트랜잭션이 동시에 데이터베이스에 접근할 때 상호 간섭으로 인한 문제점을 방지하는 **동시성 제어(Concurrency Control)**와 <strong>트랜잭션 격리 수준</strong>을 배웁니다.</p>
<hr>
<h2>1. 동시성 미제어 시 발생하는 3대 현상</h2>
<ul>
<li><strong>Dirty Read</strong>: 아직 커밋되지 않은 다른 트랜잭션의 변경 데이터를 읽는 현상입니다.</li>
<li><strong>Non-Repeatable Read</strong>: 동일한 데이터를 두 번 읽을 때 중간에 타 트랜잭션이 UPDATE하여 값이 달라지는 현상입니다.</li>
<li><strong>Phantom Read</strong>: 범위 쿼리를 두 번 실행할 때 중간에 타 트랜잭션이 INSERT하여 새로운 유령 행이 나타나는 현상입니다.</li>
</ul>
<hr>
<h2>2. ANSI 4단계 트랜잭션 격리 수준 (Isolation Levels)</h2>
<table>
<thead>
<tr>
<th align="left">격리 수준</th>
<th align="center">Dirty Read</th>
<th align="center">Non-Repeatable Read</th>
<th align="center">Phantom Read</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>READ UNCOMMITTED</strong></td>
<td align="center"><strong>발생</strong></td>
<td align="center"><strong>발생</strong></td>
<td align="center"><strong>발생</strong></td>
</tr>
<tr>
<td align="left"><strong>READ COMMITTED</strong></td>
<td align="center">방지</td>
<td align="center"><strong>발생</strong></td>
<td align="center"><strong>발생</strong></td>
</tr>
<tr>
<td align="left"><strong>REPEATABLE READ</strong></td>
<td align="center">방지</td>
<td align="center">방지</td>
<td align="center"><strong>발생</strong></td>
</tr>
<tr>
<td align="left"><strong>SERIALIZABLE</strong></td>
<td align="center">방지</td>
<td align="center">방지</td>
<td align="center">방지</td>
</tr>
</tbody></table>
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

- **DB Driver / Binding**: 파이썬 코드에서 데이터베이스 엔진과 TCP/IP 통신을 주고받는 모듈입니다.
- **Cursor (커서)**: SQL 실행 결과 튜플 결과셋을 가리키는 버퍼 포인터 객체입니다. (`curs.fetchone()`, `curs.fetchall()`)
- **Bind Variables (바인드 변수)**: SQL 쿼리문에 변수값을 동적으로 대입하여 **SQL Injection을 근본 차단**하는 안전한 기법입니다.

---

## 2. pjt/26 실전 파이썬 DB 연동 코드

```python
import oracledb

conn = oracledb.connect(user="scott", password="tiger", dsn="localhost/emppdb")
curs = conn.cursor()

sql_select = "SELECT empno, ename, job, sal FROM emp WHERE deptno = :1"
curs.execute(sql_select, (20,))

rows = curs.fetchall()
for r in rows:
    print(f"사번: {r[0]}, 이름: {r[1]}, 직급: {r[2]}, 급여: {r[3]:,}원")

curs.close()
conn.close()
```
',
  '<p>애플리케이션 프로그램과 데이터베이스를 직접 연결하는 <strong>파이썬 DB 바인딩(oracledb, sqlite3)</strong> 기술과 <strong>PyQt5 기반 데스크톱 GUI 연동 앱</strong>, 그리고 <strong>SQL Injection 보안 방어</strong>를 다룹니다.</p>
<hr>
<h2>1. DB 연동 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>DB Driver / Binding</strong>: 파이썬 코드에서 데이터베이스 엔진과 TCP/IP 통신을 주고받는 모듈입니다.</li>
<li><strong>Cursor (커서)</strong>: SQL 실행 결과 튜플 결과셋을 가리키는 버퍼 포인터 객체입니다. (<code>curs.fetchone()</code>, <code>curs.fetchall()</code>)</li>
<li><strong>Bind Variables (바인드 변수)</strong>: SQL 쿼리문에 변수값을 동적으로 대입하여 <strong>SQL Injection을 근본 차단</strong>하는 안전한 기법입니다.</li>
</ul>
<hr>
<h2>2. pjt/26 실전 파이썬 DB 연동 코드</h2>
<pre><code class="language-python">import oracledb

conn = oracledb.connect(user=&quot;scott&quot;, password=&quot;tiger&quot;, dsn=&quot;localhost/emppdb&quot;)
curs = conn.cursor()

sql_select = &quot;SELECT empno, ename, job, sal FROM emp WHERE deptno = :1&quot;
curs.execute(sql_select, (20,))

rows = curs.fetchall()
for r in rows:
    print(f&quot;사번: {r[0]}, 이름: {r[1]}, 직급: {r[2]}, 급여: {r[3]:,}원&quot;)

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
  '비정형 대용량 빅데이터 처리와 클라우드 수평 확장성(Scale-out)을 보장하는 **NoSQL 데이터베이스(MongoDB, Redis, Neo4j)**와 **NewSQL 분산 DB 트렌드**를 다룹니다.

---

## 1. NoSQL 및 CAP 정리 핵심 용어 사전 (Glossary)

- **NoSQL (Not Only SQL)**: 가변적인 스키마와 뛰어난 수평 확장성(Scale-out)을 제공하여 빅데이터 및 비정형 데이터를 처리하는 비관계형 데이터베이스입니다.
- **CAP Theorem (CAP 정리)**: 분산 데이터베이스 시스템은 **Consistency(일관성)**, **Availability(가용성)**, **Partition Tolerance(분할 용인성)** 3가지 속성을 동시에 모두 만족할 수 없다는 이론입니다.
- **BASE**: NoSQL이 일관성을 조금 희생하고 가용성과 확장성을 얻기 위해 따르는 원칙입니다.
- **NewSQL**: ACID 트랜잭션 속성을 완벽히 보장하면서도 NoSQL의 초고속 수평 분산 확장 능력을 결합한 차세대 DB입니다.

---

## 2. NoSQL 4대 데이터 모델 분류 및 특징 비교표

| NoSQL 데이터 모델 | 대표 제품 | 핵심 특징 및 적합한 사용 사례 |
| :--- | :--- | :--- |
| **Key-Value Store** | **Redis**, Memcached | 단순 키-값 매핑, 인메모리 처리로 초고속 조회 (캐싱, 세션 보관) |
| **Document Store** | **MongoDB**, CouchDB | JSON / BSON 형태의 유연한 문서 구조 저장 (비정형 데이터, CMS) |
| **Wide-Column Store** | **Cassandra**, HBase | 행마다 다른 컬럼을 가질 수 있는 열 중심 분산 저장 |
| **Graph Store** | **Neo4j**, Amazon Neptune | 노드(Node)와 간선(Edge)의 관계망 저장 (소셜 네트워크, 추천 시스템) |
',
  '<p>비정형 대용량 빅데이터 처리와 클라우드 수평 확장성(Scale-out)을 보장하는 **NoSQL 데이터베이스(MongoDB, Redis, Neo4j)**와 <strong>NewSQL 분산 DB 트렌드</strong>를 다룹니다.</p>
<hr>
<h2>1. NoSQL 및 CAP 정리 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>NoSQL (Not Only SQL)</strong>: 가변적인 스키마와 뛰어난 수평 확장성(Scale-out)을 제공하여 빅데이터 및 비정형 데이터를 처리하는 비관계형 데이터베이스입니다.</li>
<li><strong>CAP Theorem (CAP 정리)</strong>: 분산 데이터베이스 시스템은 <strong>Consistency(일관성)</strong>, <strong>Availability(가용성)</strong>, <strong>Partition Tolerance(분할 용인성)</strong> 3가지 속성을 동시에 모두 만족할 수 없다는 이론입니다.</li>
<li><strong>BASE</strong>: NoSQL이 일관성을 조금 희생하고 가용성과 확장성을 얻기 위해 따르는 원칙입니다.</li>
<li><strong>NewSQL</strong>: ACID 트랜잭션 속성을 완벽히 보장하면서도 NoSQL의 초고속 수평 분산 확장 능력을 결합한 차세대 DB입니다.</li>
</ul>
<hr>
<h2>2. NoSQL 4대 데이터 모델 분류 및 특징 비교표</h2>
<table>
<thead>
<tr>
<th align="left">NoSQL 데이터 모델</th>
<th align="left">대표 제품</th>
<th align="left">핵심 특징 및 적합한 사용 사례</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>Key-Value Store</strong></td>
<td align="left"><strong>Redis</strong>, Memcached</td>
<td align="left">단순 키-값 매핑, 인메모리 처리로 초고속 조회 (캐싱, 세션 보관)</td>
</tr>
<tr>
<td align="left"><strong>Document Store</strong></td>
<td align="left"><strong>MongoDB</strong>, CouchDB</td>
<td align="left">JSON / BSON 형태의 유연한 문서 구조 저장 (비정형 데이터, CMS)</td>
</tr>
<tr>
<td align="left"><strong>Wide-Column Store</strong></td>
<td align="left"><strong>Cassandra</strong>, HBase</td>
<td align="left">행마다 다른 컬럼을 가질 수 있는 열 중심 분산 저장</td>
</tr>
<tr>
<td align="left"><strong>Graph Store</strong></td>
<td align="left"><strong>Neo4j</strong>, Amazon Neptune</td>
<td align="left">노드(Node)와 간선(Edge)의 관계망 저장 (소셜 네트워크, 추천 시스템)</td>
</tr>
</tbody></table>
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
