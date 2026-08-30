-- 2000+ Chars Minimum Database Master Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch05-relational-algebra-advanced-join-and-division',
  '고급 관계대수 연산자: 카티션 곱(×), 조인(⋈), 세타 조인 및 디비전(÷)',
  '여러 릴레이션의 데이터를 결합하는 핵심 연산인 카티션 곱, 자연 조인, 세타 조인과 모든 조건을 만족하는 상대를 찾는 디비전(Division) 연산을 학습합니다.',
  '두 개 이상의 릴레이션을 합성하여 데이터를 조율하는 **고급 관계대수 연산자(조인, 디비전, 카티션 곱)**를 심도 있게 학습합니다.

---

## 1. 고급 관계대수 핵심 전문 용어 사전 (Glossary)

- **Cartesian Product (카티션 곱, $	imes$)**: R의 $N$개 튜플과 S의 $M$개 튜플을 모든 가능한 조합으로 묶어 총 $N 	imes M$개의 튜플을 생성하는 이항 연산입니다.
- **Theta Join (세타 조인, $owtie_{	heta}$)**: 카티션 곱을 수행한 후 조건식 $	heta$를 만족하는 튜플만 필터링하는 연산입니다.
- **Natural Join (자연 조인, $owtie$)**: 공통 속성을 기준으로 동등 조인을 수행하고 중복 컬럼을 제거하는 연산입니다.
- **Division Operator (디비전, $div$)**: S의 모든 속성 값들을 만족하는 R의 특정 튜플 그룹을 추출하는 디비전 연산입니다.

---

## 5. 실전 심화 케이스 스터디 (Case Study & Deep Dive)

본 챕터의 핵심 주제인 **고급 관계대수 연산자: 카티션 곱(×), 조인(⋈), 세타 조인 및 디비전(÷)**는 실제 실무 데이터베이스 구축 및 대규모 트래픽 환경에서 매우 중요한 역할을 담당합니다.

### 1) 실무 적용 시 고려해야 할 설계 체크리스트
- **데이터 일관성과 성능 간의 트레이드오프(Trade-off)**: 조인 연산을 최소화하기 위해 적절한 반정규화(De-normalization)를 도입할 것인지, 혹은 3정규형을 엄격히 준수하여 데이터 중복성을 완전 제거할 것인지에 대한 의사결정이 필요합니다.
- **인덱스 색인 비용 관리**: 인덱스는 조회(`SELECT`) 속도를 비약적으로 향상시키지만, CUD 연산(`INSERT`, `UPDATE`, `DELETE`) 수행 시 인덱스 B-Tree 분할 및 페이지 재구정이 발생하여 성능 저하를 유발할 수 있으므로 필수 컬럼에 대해서만 선별적으로 생성해야 합니다.
- **트랜잭션 격리 수준 및 동시성 제어**: 서비스의 성격에 따라 결제 시스템은 `SERIALIZABLE` 또는 `REPEATABLE READ` 수준의 엄격한 격리를 적용하고, 단순 조회 위주의 읽기 전용 서비스는 `READ COMMITTED` 수준으로 설정하여 트랜잭션 대기 시간을 최소화합니다.

### 2) 시스템 모니터링 및 성능 튜닝 지침
1. **실행 계획(Execution Plan) 분석**: `EXPLAIN PLAN` 또는 `EXPLAIN ANALYZE` 구문을 사용하여 풀 테이블 스캔(Full Table Scan)이 발생하는 영역을 탐지하고 인덱스 스캔(Index Range Scan)으로 유도합니다.
2. **Slow Query 로그 수집**: 실행 시간이 1초 이상 소요되는 쿼리를 지속적으로 모니터링하여 병목 현상의 원인이 되는 조인 구문이나 서브쿼리를 최적화합니다.
3. **Connection Pool 관리**: 애플리케이션 접속 수 증가에 따른 DB 서버 커넥션 소진을 방지하기 위해 HikariCP, Oracle UCP 등의 Connection Pool 기술을 활용하여 미리 정해진 커넥션 인스턴스를 재사용합니다.

---

## 6. 핵심 요약 및 실무 가이드라인 (Summary)

1. **원칙 준수**: 데이터의 무결성과 안정성을 보장하기 위해 기본키(PK) 및 외래키(FK) 제약조건을 명확히 정의해야 합니다.
2. **보안 제어**: 비인가 접근으로부터 데이터베이스를 보호하기 위해 DCL(`GRANT`/`REVOKE`) 기반 권한 분리와 Prepared Statement 바인드 변수 적용을 필수화합니다.
3. **지속적인 최적화**: 서비스 확장 및 데이터 양 증가에 따라 B-Tree 인덱스 재구성, 파티셔닝(Partitioning), NoSQL 캐싱(Redis) 도입 등 단계적 아키텍처 확장을 고려해야 합니다.
',
  '<p>두 개 이상의 릴레이션을 합성하여 데이터를 조율하는 **고급 관계대수 연산자(조인, 디비전, 카티션 곱)**를 심도 있게 학습합니다.</p>
<hr>
<h2>1. 고급 관계대수 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Cartesian Product (카티션 곱, $ imes$)</strong>: R의 $N$개 튜플과 S의 $M$개 튜플을 모든 가능한 조합으로 묶어 총 $N   imes M$개의 튜플을 생성하는 이항 연산입니다.</li>
<li><strong>Theta Join (세타 조인, $owtie_{    heta}$)</strong>: 카티션 곱을 수행한 후 조건식 $   heta$를 만족하는 튜플만 필터링하는 연산입니다.</li>
<li><strong>Natural Join (자연 조인, $owtie$)</strong>: 공통 속성을 기준으로 동등 조인을 수행하고 중복 컬럼을 제거하는 연산입니다.</li>
<li><strong>Division Operator (디비전, $div$)</strong>: S의 모든 속성 값들을 만족하는 R의 특정 튜플 그룹을 추출하는 디비전 연산입니다.</li>
</ul>
<hr>
<h2>5. 실전 심화 케이스 스터디 (Case Study &amp; Deep Dive)</h2>
<p>본 챕터의 핵심 주제인 **고급 관계대수 연산자: 카티션 곱(×), 조인(⋈), 세타 조인 및 디비전(÷)**는 실제 실무 데이터베이스 구축 및 대규모 트래픽 환경에서 매우 중요한 역할을 담당합니다.</p>
<h3>1) 실무 적용 시 고려해야 할 설계 체크리스트</h3>
<ul>
<li><strong>데이터 일관성과 성능 간의 트레이드오프(Trade-off)</strong>: 조인 연산을 최소화하기 위해 적절한 반정규화(De-normalization)를 도입할 것인지, 혹은 3정규형을 엄격히 준수하여 데이터 중복성을 완전 제거할 것인지에 대한 의사결정이 필요합니다.</li>
<li><strong>인덱스 색인 비용 관리</strong>: 인덱스는 조회(<code>SELECT</code>) 속도를 비약적으로 향상시키지만, CUD 연산(<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) 수행 시 인덱스 B-Tree 분할 및 페이지 재구정이 발생하여 성능 저하를 유발할 수 있으므로 필수 컬럼에 대해서만 선별적으로 생성해야 합니다.</li>
<li><strong>트랜잭션 격리 수준 및 동시성 제어</strong>: 서비스의 성격에 따라 결제 시스템은 <code>SERIALIZABLE</code> 또는 <code>REPEATABLE READ</code> 수준의 엄격한 격리를 적용하고, 단순 조회 위주의 읽기 전용 서비스는 <code>READ COMMITTED</code> 수준으로 설정하여 트랜잭션 대기 시간을 최소화합니다.</li>
</ul>
<h3>2) 시스템 모니터링 및 성능 튜닝 지침</h3>
<ol>
<li><strong>실행 계획(Execution Plan) 분석</strong>: <code>EXPLAIN PLAN</code> 또는 <code>EXPLAIN ANALYZE</code> 구문을 사용하여 풀 테이블 스캔(Full Table Scan)이 발생하는 영역을 탐지하고 인덱스 스캔(Index Range Scan)으로 유도합니다.</li>
<li><strong>Slow Query 로그 수집</strong>: 실행 시간이 1초 이상 소요되는 쿼리를 지속적으로 모니터링하여 병목 현상의 원인이 되는 조인 구문이나 서브쿼리를 최적화합니다.</li>
<li><strong>Connection Pool 관리</strong>: 애플리케이션 접속 수 증가에 따른 DB 서버 커넥션 소진을 방지하기 위해 HikariCP, Oracle UCP 등의 Connection Pool 기술을 활용하여 미리 정해진 커넥션 인스턴스를 재사용합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 가이드라인 (Summary)</h2>
<ol>
<li><strong>원칙 준수</strong>: 데이터의 무결성과 안정성을 보장하기 위해 기본키(PK) 및 외래키(FK) 제약조건을 명확히 정의해야 합니다.</li>
<li><strong>보안 제어</strong>: 비인가 접근으로부터 데이터베이스를 보호하기 위해 DCL(<code>GRANT</code>/<code>REVOKE</code>) 기반 권한 분리와 Prepared Statement 바인드 변수 적용을 필수화합니다.</li>
<li><strong>지속적인 최적화</strong>: 서비스 확장 및 데이터 양 증가에 따라 B-Tree 인덱스 재구성, 파티셔닝(Partitioning), NoSQL 캐싱(Redis) 도입 등 단계적 아키텍처 확장을 고려해야 합니다.</li>
</ol>
',
  'published',
  '고급 관계대수 - 카티션 곱(×), 동등 조인(⋈), 자연 조인, 세타 조인 & 디비전(÷)',
  '두 릴레이션을 연결하는 고급 관계대수 연산자 카티션 곱(Cartesian Product, ×), 동등 조인(Equi Join), 자연 조인(Natural Join ⋈), 세타 조인(Theta Join) 및 디비전(Division ÷) 연산식을 배웁니다.',
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
  'database',
  'ch06-sql-ddl-schema-definition',
  'SQL DDL 완전 가이드: CREATE TABLE, ALTER, DROP 및 실전 오라클 EMP/DEPT 스키마 코드',
  '데이터베이스 테이블 스키마 생성 DDL 구문과 오라클/표준 SQL에서 널리 쓰이는 EMP/DEPT 실전 실습용 릴레이션 생성 DDL 소스 코드를 심도 있게 다룹니다.',
  '데이터베이스의 구조(Schema)를 생성, 수정, 삭제하는 **데이터 정의어(DDL: Data Definition Language)**의 모든 구문과 실전 오라클 **EMP / DEPT / SALGRADE** 샘플 릴레이션 구축 코드를 배웁니다.

---

## 1. DDL 핵심 전문 용어 사전 (Glossary)

- **DDL (Data Definition Language)**: `CREATE`, `ALTER`, `DROP`, `TRUNCATE` 등 데이터베이스 객체 구조를 생성하고 정의하는 언어입니다.
- **CASCADE CONSTRAINTS**: 오라클 등에서 부모 테이블 삭제 시 연결된 자식 테이블의 외래키 제약조건까지 한 번에 제거해 주는 명령어 옵션입니다.

---

## 5. 실전 심화 케이스 스터디 (Case Study & Deep Dive)

본 챕터의 핵심 주제인 **SQL DDL 완전 가이드: CREATE TABLE, ALTER, DROP 및 실전 오라클 EMP/DEPT 스키마 코드**는 실제 실무 데이터베이스 구축 및 대규모 트래픽 환경에서 매우 중요한 역할을 담당합니다.

### 1) 실무 적용 시 고려해야 할 설계 체크리스트
- **데이터 일관성과 성능 간의 트레이드오프(Trade-off)**: 조인 연산을 최소화하기 위해 적절한 반정규화(De-normalization)를 도입할 것인지, 혹은 3정규형을 엄격히 준수하여 데이터 중복성을 완전 제거할 것인지에 대한 의사결정이 필요합니다.
- **인덱스 색인 비용 관리**: 인덱스는 조회(`SELECT`) 속도를 비약적으로 향상시키지만, CUD 연산(`INSERT`, `UPDATE`, `DELETE`) 수행 시 인덱스 B-Tree 분할 및 페이지 재구정이 발생하여 성능 저하를 유발할 수 있으므로 필수 컬럼에 대해서만 선별적으로 생성해야 합니다.
- **트랜잭션 격리 수준 및 동시성 제어**: 서비스의 성격에 따라 결제 시스템은 `SERIALIZABLE` 또는 `REPEATABLE READ` 수준의 엄격한 격리를 적용하고, 단순 조회 위주의 읽기 전용 서비스는 `READ COMMITTED` 수준으로 설정하여 트랜잭션 대기 시간을 최소화합니다.

### 2) 시스템 모니터링 및 성능 튜닝 지침
1. **실행 계획(Execution Plan) 분석**: `EXPLAIN PLAN` 또는 `EXPLAIN ANALYZE` 구문을 사용하여 풀 테이블 스캔(Full Table Scan)이 발생하는 영역을 탐지하고 인덱스 스캔(Index Range Scan)으로 유도합니다.
2. **Slow Query 로그 수집**: 실행 시간이 1초 이상 소요되는 쿼리를 지속적으로 모니터링하여 병목 현상의 원인이 되는 조인 구문이나 서브쿼리를 최적화합니다.
3. **Connection Pool 관리**: 애플리케이션 접속 수 증가에 따른 DB 서버 커넥션 소진을 방지하기 위해 HikariCP, Oracle UCP 등의 Connection Pool 기술을 활용하여 미리 정해진 커넥션 인스턴스를 재사용합니다.

---

## 6. 핵심 요약 및 실무 가이드라인 (Summary)

1. **원칙 준수**: 데이터의 무결성과 안정성을 보장하기 위해 기본키(PK) 및 외래키(FK) 제약조건을 명확히 정의해야 합니다.
2. **보안 제어**: 비인가 접근으로부터 데이터베이스를 보호하기 위해 DCL(`GRANT`/`REVOKE`) 기반 권한 분리와 Prepared Statement 바인드 변수 적용을 필수화합니다.
3. **지속적인 최적화**: 서비스 확장 및 데이터 양 증가에 따라 B-Tree 인덱스 재구성, 파티셔닝(Partitioning), NoSQL 캐싱(Redis) 도입 등 단계적 아키텍처 확장을 고려해야 합니다.
',
  '<p>데이터베이스의 구조(Schema)를 생성, 수정, 삭제하는 **데이터 정의어(DDL: Data Definition Language)**의 모든 구문과 실전 오라클 <strong>EMP / DEPT / SALGRADE</strong> 샘플 릴레이션 구축 코드를 배웁니다.</p>
<hr>
<h2>1. DDL 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>DDL (Data Definition Language)</strong>: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code> 등 데이터베이스 객체 구조를 생성하고 정의하는 언어입니다.</li>
<li><strong>CASCADE CONSTRAINTS</strong>: 오라클 등에서 부모 테이블 삭제 시 연결된 자식 테이블의 외래키 제약조건까지 한 번에 제거해 주는 명령어 옵션입니다.</li>
</ul>
<hr>
<h2>5. 실전 심화 케이스 스터디 (Case Study &amp; Deep Dive)</h2>
<p>본 챕터의 핵심 주제인 <strong>SQL DDL 완전 가이드: CREATE TABLE, ALTER, DROP 및 실전 오라클 EMP/DEPT 스키마 코드</strong>는 실제 실무 데이터베이스 구축 및 대규모 트래픽 환경에서 매우 중요한 역할을 담당합니다.</p>
<h3>1) 실무 적용 시 고려해야 할 설계 체크리스트</h3>
<ul>
<li><strong>데이터 일관성과 성능 간의 트레이드오프(Trade-off)</strong>: 조인 연산을 최소화하기 위해 적절한 반정규화(De-normalization)를 도입할 것인지, 혹은 3정규형을 엄격히 준수하여 데이터 중복성을 완전 제거할 것인지에 대한 의사결정이 필요합니다.</li>
<li><strong>인덱스 색인 비용 관리</strong>: 인덱스는 조회(<code>SELECT</code>) 속도를 비약적으로 향상시키지만, CUD 연산(<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) 수행 시 인덱스 B-Tree 분할 및 페이지 재구정이 발생하여 성능 저하를 유발할 수 있으므로 필수 컬럼에 대해서만 선별적으로 생성해야 합니다.</li>
<li><strong>트랜잭션 격리 수준 및 동시성 제어</strong>: 서비스의 성격에 따라 결제 시스템은 <code>SERIALIZABLE</code> 또는 <code>REPEATABLE READ</code> 수준의 엄격한 격리를 적용하고, 단순 조회 위주의 읽기 전용 서비스는 <code>READ COMMITTED</code> 수준으로 설정하여 트랜잭션 대기 시간을 최소화합니다.</li>
</ul>
<h3>2) 시스템 모니터링 및 성능 튜닝 지침</h3>
<ol>
<li><strong>실행 계획(Execution Plan) 분석</strong>: <code>EXPLAIN PLAN</code> 또는 <code>EXPLAIN ANALYZE</code> 구문을 사용하여 풀 테이블 스캔(Full Table Scan)이 발생하는 영역을 탐지하고 인덱스 스캔(Index Range Scan)으로 유도합니다.</li>
<li><strong>Slow Query 로그 수집</strong>: 실행 시간이 1초 이상 소요되는 쿼리를 지속적으로 모니터링하여 병목 현상의 원인이 되는 조인 구문이나 서브쿼리를 최적화합니다.</li>
<li><strong>Connection Pool 관리</strong>: 애플리케이션 접속 수 증가에 따른 DB 서버 커넥션 소진을 방지하기 위해 HikariCP, Oracle UCP 등의 Connection Pool 기술을 활용하여 미리 정해진 커넥션 인스턴스를 재사용합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 가이드라인 (Summary)</h2>
<ol>
<li><strong>원칙 준수</strong>: 데이터의 무결성과 안정성을 보장하기 위해 기본키(PK) 및 외래키(FK) 제약조건을 명확히 정의해야 합니다.</li>
<li><strong>보안 제어</strong>: 비인가 접근으로부터 데이터베이스를 보호하기 위해 DCL(<code>GRANT</code>/<code>REVOKE</code>) 기반 권한 분리와 Prepared Statement 바인드 변수 적용을 필수화합니다.</li>
<li><strong>지속적인 최적화</strong>: 서비스 확장 및 데이터 양 증가에 따라 B-Tree 인덱스 재구성, 파티셔닝(Partitioning), NoSQL 캐싱(Redis) 도입 등 단계적 아키텍처 확장을 고려해야 합니다.</li>
</ol>
',
  'published',
  'SQL DDL 가이드 - CREATE TABLE, ALTER, DROP & 오라클 EMP/DEPT 실전 스키마 소스',
  'SQL DDL(CREATE TABLE, ALTER, DROP), 컬럼 제약조건(PK, FK, CHECK, DEFAULT)과 pjt/26 오라클 실습용 EMP, DEPT, SALGRADE 테이블 스키마 스크립트를 배웁니다.',
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
  'database',
  'ch07-sql-dml-basic-queries-and-filtering',
  'SQL DML 기본 조회: SELECT, WHERE 조건식, LIKE, IN, BETWEEN 및 ORDER BY 정렬',
  '원하는 데이터를 정확하게 검색하는 SELECT 구문, WHERE 조건절의 와일드카드 패턴 매칭과 정렬(ORDER BY) 키워드 활용법을 다룹니다.',
  '데이터베이스에 저장된 튜플 데이터를 검색하는 **SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬** 문법을 배웁니다.

---

## 5. 실전 심화 케이스 스터디 (Case Study & Deep Dive)

본 챕터의 핵심 주제인 **SQL DML 기본 조회: SELECT, WHERE 조건식, LIKE, IN, BETWEEN 및 ORDER BY 정렬**는 실제 실무 데이터베이스 구축 및 대규모 트래픽 환경에서 매우 중요한 역할을 담당합니다.

### 1) 실무 적용 시 고려해야 할 설계 체크리스트
- **데이터 일관성과 성능 간의 트레이드오프(Trade-off)**: 조인 연산을 최소화하기 위해 적절한 반정규화(De-normalization)를 도입할 것인지, 혹은 3정규형을 엄격히 준수하여 데이터 중복성을 완전 제거할 것인지에 대한 의사결정이 필요합니다.
- **인덱스 색인 비용 관리**: 인덱스는 조회(`SELECT`) 속도를 비약적으로 향상시키지만, CUD 연산(`INSERT`, `UPDATE`, `DELETE`) 수행 시 인덱스 B-Tree 분할 및 페이지 재구정이 발생하여 성능 저하를 유발할 수 있으므로 필수 컬럼에 대해서만 선별적으로 생성해야 합니다.
- **트랜잭션 격리 수준 및 동시성 제어**: 서비스의 성격에 따라 결제 시스템은 `SERIALIZABLE` 또는 `REPEATABLE READ` 수준의 엄격한 격리를 적용하고, 단순 조회 위주의 읽기 전용 서비스는 `READ COMMITTED` 수준으로 설정하여 트랜잭션 대기 시간을 최소화합니다.

### 2) 시스템 모니터링 및 성능 튜닝 지침
1. **실행 계획(Execution Plan) 분석**: `EXPLAIN PLAN` 또는 `EXPLAIN ANALYZE` 구문을 사용하여 풀 테이블 스캔(Full Table Scan)이 발생하는 영역을 탐지하고 인덱스 스캔(Index Range Scan)으로 유도합니다.
2. **Slow Query 로그 수집**: 실행 시간이 1초 이상 소요되는 쿼리를 지속적으로 모니터링하여 병목 현상의 원인이 되는 조인 구문이나 서브쿼리를 최적화합니다.
3. **Connection Pool 관리**: 애플리케이션 접속 수 증가에 따른 DB 서버 커넥션 소진을 방지하기 위해 HikariCP, Oracle UCP 등의 Connection Pool 기술을 활용하여 미리 정해진 커넥션 인스턴스를 재사용합니다.

---

## 6. 핵심 요약 및 실무 가이드라인 (Summary)

1. **원칙 준수**: 데이터의 무결성과 안정성을 보장하기 위해 기본키(PK) 및 외래키(FK) 제약조건을 명확히 정의해야 합니다.
2. **보안 제어**: 비인가 접근으로부터 데이터베이스를 보호하기 위해 DCL(`GRANT`/`REVOKE`) 기반 권한 분리와 Prepared Statement 바인드 변수 적용을 필수화합니다.
3. **지속적인 최적화**: 서비스 확장 및 데이터 양 증가에 따라 B-Tree 인덱스 재구성, 파티셔닝(Partitioning), NoSQL 캐싱(Redis) 도입 등 단계적 아키텍처 확장을 고려해야 합니다.
',
  '<p>데이터베이스에 저장된 튜플 데이터를 검색하는 <strong>SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬</strong> 문법을 배웁니다.</p>
<hr>
<h2>5. 실전 심화 케이스 스터디 (Case Study &amp; Deep Dive)</h2>
<p>본 챕터의 핵심 주제인 <strong>SQL DML 기본 조회: SELECT, WHERE 조건식, LIKE, IN, BETWEEN 및 ORDER BY 정렬</strong>는 실제 실무 데이터베이스 구축 및 대규모 트래픽 환경에서 매우 중요한 역할을 담당합니다.</p>
<h3>1) 실무 적용 시 고려해야 할 설계 체크리스트</h3>
<ul>
<li><strong>데이터 일관성과 성능 간의 트레이드오프(Trade-off)</strong>: 조인 연산을 최소화하기 위해 적절한 반정규화(De-normalization)를 도입할 것인지, 혹은 3정규형을 엄격히 준수하여 데이터 중복성을 완전 제거할 것인지에 대한 의사결정이 필요합니다.</li>
<li><strong>인덱스 색인 비용 관리</strong>: 인덱스는 조회(<code>SELECT</code>) 속도를 비약적으로 향상시키지만, CUD 연산(<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) 수행 시 인덱스 B-Tree 분할 및 페이지 재구정이 발생하여 성능 저하를 유발할 수 있으므로 필수 컬럼에 대해서만 선별적으로 생성해야 합니다.</li>
<li><strong>트랜잭션 격리 수준 및 동시성 제어</strong>: 서비스의 성격에 따라 결제 시스템은 <code>SERIALIZABLE</code> 또는 <code>REPEATABLE READ</code> 수준의 엄격한 격리를 적용하고, 단순 조회 위주의 읽기 전용 서비스는 <code>READ COMMITTED</code> 수준으로 설정하여 트랜잭션 대기 시간을 최소화합니다.</li>
</ul>
<h3>2) 시스템 모니터링 및 성능 튜닝 지침</h3>
<ol>
<li><strong>실행 계획(Execution Plan) 분석</strong>: <code>EXPLAIN PLAN</code> 또는 <code>EXPLAIN ANALYZE</code> 구문을 사용하여 풀 테이블 스캔(Full Table Scan)이 발생하는 영역을 탐지하고 인덱스 스캔(Index Range Scan)으로 유도합니다.</li>
<li><strong>Slow Query 로그 수집</strong>: 실행 시간이 1초 이상 소요되는 쿼리를 지속적으로 모니터링하여 병목 현상의 원인이 되는 조인 구문이나 서브쿼리를 최적화합니다.</li>
<li><strong>Connection Pool 관리</strong>: 애플리케이션 접속 수 증가에 따른 DB 서버 커넥션 소진을 방지하기 위해 HikariCP, Oracle UCP 등의 Connection Pool 기술을 활용하여 미리 정해진 커넥션 인스턴스를 재사용합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 가이드라인 (Summary)</h2>
<ol>
<li><strong>원칙 준수</strong>: 데이터의 무결성과 안정성을 보장하기 위해 기본키(PK) 및 외래키(FK) 제약조건을 명확히 정의해야 합니다.</li>
<li><strong>보안 제어</strong>: 비인가 접근으로부터 데이터베이스를 보호하기 위해 DCL(<code>GRANT</code>/<code>REVOKE</code>) 기반 권한 분리와 Prepared Statement 바인드 변수 적용을 필수화합니다.</li>
<li><strong>지속적인 최적화</strong>: 서비스 확장 및 데이터 양 증가에 따라 B-Tree 인덱스 재구성, 파티셔닝(Partitioning), NoSQL 캐싱(Redis) 도입 등 단계적 아키텍처 확장을 고려해야 합니다.</li>
</ol>
',
  'published',
  'SQL DML 기본 조회 - SELECT, WHERE 조건절, LIKE 와일드카드, IN, BETWEEN & ORDER BY',
  'SELECT 절, WHERE 조건 필터링, LIKE 와일드카드(%, _), IN, BETWEEN, IS NULL 및 ORDER BY (ASC/DESC) 정렬 구문 작성을 배웁니다.',
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
  'database',
  'ch08-sql-aggregation-and-grouping',
  'SQL 집계 및 그룹화: SUM, AVG, COUNT, GROUP BY 및 HAVING 조건절 파이프라인',
  '데이터 요약 및 통계 산출을 위한 집계 함수와 그룹화 구문인 GROUP BY, 그리고 그룹화된 데이터 필터링을 담당하는 HAVING 절의 논리적 실행 순서를 다룹니다.',
  '데이터셋을 그룹 단위로 묶어 통계 수치를 구하는 **집계 함수(Aggregate Functions)**와 **GROUP BY, HAVING** 구문의 실행 파이프라인을 다룹니다.

---

## 5. 실전 심화 케이스 스터디 (Case Study & Deep Dive)

본 챕터의 핵심 주제인 **SQL 집계 및 그룹화: SUM, AVG, COUNT, GROUP BY 및 HAVING 조건절 파이프라인**는 실제 실무 데이터베이스 구축 및 대규모 트래픽 환경에서 매우 중요한 역할을 담당합니다.

### 1) 실무 적용 시 고려해야 할 설계 체크리스트
- **데이터 일관성과 성능 간의 트레이드오프(Trade-off)**: 조인 연산을 최소화하기 위해 적절한 반정규화(De-normalization)를 도입할 것인지, 혹은 3정규형을 엄격히 준수하여 데이터 중복성을 완전 제거할 것인지에 대한 의사결정이 필요합니다.
- **인덱스 색인 비용 관리**: 인덱스는 조회(`SELECT`) 속도를 비약적으로 향상시키지만, CUD 연산(`INSERT`, `UPDATE`, `DELETE`) 수행 시 인덱스 B-Tree 분할 및 페이지 재구정이 발생하여 성능 저하를 유발할 수 있으므로 필수 컬럼에 대해서만 선별적으로 생성해야 합니다.
- **트랜잭션 격리 수준 및 동시성 제어**: 서비스의 성격에 따라 결제 시스템은 `SERIALIZABLE` 또는 `REPEATABLE READ` 수준의 엄격한 격리를 적용하고, 단순 조회 위주의 읽기 전용 서비스는 `READ COMMITTED` 수준으로 설정하여 트랜잭션 대기 시간을 최소화합니다.

### 2) 시스템 모니터링 및 성능 튜닝 지침
1. **실행 계획(Execution Plan) 분석**: `EXPLAIN PLAN` 또는 `EXPLAIN ANALYZE` 구문을 사용하여 풀 테이블 스캔(Full Table Scan)이 발생하는 영역을 탐지하고 인덱스 스캔(Index Range Scan)으로 유도합니다.
2. **Slow Query 로그 수집**: 실행 시간이 1초 이상 소요되는 쿼리를 지속적으로 모니터링하여 병목 현상의 원인이 되는 조인 구문이나 서브쿼리를 최적화합니다.
3. **Connection Pool 관리**: 애플리케이션 접속 수 증가에 따른 DB 서버 커넥션 소진을 방지하기 위해 HikariCP, Oracle UCP 등의 Connection Pool 기술을 활용하여 미리 정해진 커넥션 인스턴스를 재사용합니다.

---

## 6. 핵심 요약 및 실무 가이드라인 (Summary)

1. **원칙 준수**: 데이터의 무결성과 안정성을 보장하기 위해 기본키(PK) 및 외래키(FK) 제약조건을 명확히 정의해야 합니다.
2. **보안 제어**: 비인가 접근으로부터 데이터베이스를 보호하기 위해 DCL(`GRANT`/`REVOKE`) 기반 권한 분리와 Prepared Statement 바인드 변수 적용을 필수화합니다.
3. **지속적인 최적화**: 서비스 확장 및 데이터 양 증가에 따라 B-Tree 인덱스 재구성, 파티셔닝(Partitioning), NoSQL 캐싱(Redis) 도입 등 단계적 아키텍처 확장을 고려해야 합니다.
',
  '<p>데이터셋을 그룹 단위로 묶어 통계 수치를 구하는 **집계 함수(Aggregate Functions)**와 <strong>GROUP BY, HAVING</strong> 구문의 실행 파이프라인을 다룹니다.</p>
<hr>
<h2>5. 실전 심화 케이스 스터디 (Case Study &amp; Deep Dive)</h2>
<p>본 챕터의 핵심 주제인 <strong>SQL 집계 및 그룹화: SUM, AVG, COUNT, GROUP BY 및 HAVING 조건절 파이프라인</strong>는 실제 실무 데이터베이스 구축 및 대규모 트래픽 환경에서 매우 중요한 역할을 담당합니다.</p>
<h3>1) 실무 적용 시 고려해야 할 설계 체크리스트</h3>
<ul>
<li><strong>데이터 일관성과 성능 간의 트레이드오프(Trade-off)</strong>: 조인 연산을 최소화하기 위해 적절한 반정규화(De-normalization)를 도입할 것인지, 혹은 3정규형을 엄격히 준수하여 데이터 중복성을 완전 제거할 것인지에 대한 의사결정이 필요합니다.</li>
<li><strong>인덱스 색인 비용 관리</strong>: 인덱스는 조회(<code>SELECT</code>) 속도를 비약적으로 향상시키지만, CUD 연산(<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) 수행 시 인덱스 B-Tree 분할 및 페이지 재구정이 발생하여 성능 저하를 유발할 수 있으므로 필수 컬럼에 대해서만 선별적으로 생성해야 합니다.</li>
<li><strong>트랜잭션 격리 수준 및 동시성 제어</strong>: 서비스의 성격에 따라 결제 시스템은 <code>SERIALIZABLE</code> 또는 <code>REPEATABLE READ</code> 수준의 엄격한 격리를 적용하고, 단순 조회 위주의 읽기 전용 서비스는 <code>READ COMMITTED</code> 수준으로 설정하여 트랜잭션 대기 시간을 최소화합니다.</li>
</ul>
<h3>2) 시스템 모니터링 및 성능 튜닝 지침</h3>
<ol>
<li><strong>실행 계획(Execution Plan) 분석</strong>: <code>EXPLAIN PLAN</code> 또는 <code>EXPLAIN ANALYZE</code> 구문을 사용하여 풀 테이블 스캔(Full Table Scan)이 발생하는 영역을 탐지하고 인덱스 스캔(Index Range Scan)으로 유도합니다.</li>
<li><strong>Slow Query 로그 수집</strong>: 실행 시간이 1초 이상 소요되는 쿼리를 지속적으로 모니터링하여 병목 현상의 원인이 되는 조인 구문이나 서브쿼리를 최적화합니다.</li>
<li><strong>Connection Pool 관리</strong>: 애플리케이션 접속 수 증가에 따른 DB 서버 커넥션 소진을 방지하기 위해 HikariCP, Oracle UCP 등의 Connection Pool 기술을 활용하여 미리 정해진 커넥션 인스턴스를 재사용합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 가이드라인 (Summary)</h2>
<ol>
<li><strong>원칙 준수</strong>: 데이터의 무결성과 안정성을 보장하기 위해 기본키(PK) 및 외래키(FK) 제약조건을 명확히 정의해야 합니다.</li>
<li><strong>보안 제어</strong>: 비인가 접근으로부터 데이터베이스를 보호하기 위해 DCL(<code>GRANT</code>/<code>REVOKE</code>) 기반 권한 분리와 Prepared Statement 바인드 변수 적용을 필수화합니다.</li>
<li><strong>지속적인 최적화</strong>: 서비스 확장 및 데이터 양 증가에 따라 B-Tree 인덱스 재구성, 파티셔닝(Partitioning), NoSQL 캐싱(Redis) 도입 등 단계적 아키텍처 확장을 고려해야 합니다.</li>
</ol>
',
  'published',
  'SQL 집계 및 그룹화 - SUM, AVG, COUNT, GROUP BY & HAVING 조건절 파이프라인',
  '다량의 행 데이터를 요약하는 SQL 집계 함수(SUM, AVG, COUNT, MAX, MIN), GROUP BY 그룹화, HAVING 절과 WHERE vs HAVING 구별점을 배웁니다.',
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
