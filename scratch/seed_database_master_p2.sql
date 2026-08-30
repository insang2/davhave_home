-- Full Database Master Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch05-relational-algebra-advanced-join-and-division',
  '고급 관계대수 연산자: 카티션 곱(×), 조인(⋈), 세타 조인 및 디비전(÷)',
  '여러 릴레이션의 데이터를 결합하는 핵심 연산인 카티션 곱, 자연 조인, 세타 조인과 모든 조건을 만족하는 상대를 찾는 디비전(Division) 연산을 학습합니다.',
  '두 개 이상의 릴레이션을 합성하여 데이터를 조율하는 **고급 관계대수 연산자(조인, 디비전, 카티션 곱)**를 심도 있게 학습합니다.',
  '<p>두 개 이상의 릴레이션을 합성하여 데이터를 조율하는 **고급 관계대수 연산자(조인, 디비전, 카티션 곱)**를 심도 있게 학습합니다.</p>
',
  'published',
  '고급 관계대수 - 카티션 곱(×), 동등 조인(⋈), 자연 조인, 세타 조인 & 디비전(÷)',
  '두 릴레이션을 연결하는 고급 관계대수 연산자 카티션 곱, 동등 조인, 자연 조인(⋈), 세타 조인 및 디비전(÷) 연산식을 다룹니다.',
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
- **`DEFAULT`**: 데이터를 삽입할 때 값이 명시되지 않은 경우 지정된 고정 기본값을 자동으로 채워주는 제약 구문입니다.

---

## 2. pjt/26 실전 오라클 EMP / DEPT 테이블 생성 DDL 스크립트 (create_emppdb_oracle.sql)

```sql
-- 1. 기존 테이블 및 제약조건 삭제
DROP TABLE emp CASCADE CONSTRAINTS;
DROP TABLE dept CASCADE CONSTRAINTS;
DROP TABLE salgrade CASCADE CONSTRAINTS;

-- 2. 부서 테이블 (DEPT) 생성
CREATE TABLE dept (
    deptno NUMBER(2) CONSTRAINT pk_dept PRIMARY KEY,
    dname  VARCHAR2(14),
    loc    VARCHAR2(13)
);

-- 3. 사원 테이블 (EMP) 생성 (외래키 제약조건 포함)
CREATE TABLE emp (
    empno    NUMBER(4) CONSTRAINT pk_emp PRIMARY KEY,
    ename    VARCHAR2(10),
    job      VARCHAR2(9),
    mgr      NUMBER(4),
    hiredate DATE,
    sal      NUMBER(7,2),
    comm     NUMBER(7,2),
    deptno   NUMBER(2) CONSTRAINT fk_deptno REFERENCES dept(deptno) ON DELETE CASCADE
);

-- 4. 급여 등급 테이블 (SALGRADE) 생성
CREATE TABLE salgrade (
    grade NUMBER,
    losal NUMBER,
    hisal NUMBER
);

-- 5. 샘플 더미 데이터 데이터 삽입
INSERT INTO dept VALUES (10, ''ACCOUNTING'', ''NEW YORK'');
INSERT INTO dept VALUES (20, ''RESEARCH'', ''DALLAS'');
INSERT INTO dept VALUES (30, ''SALES'', ''CHICAGO'');
INSERT INTO dept VALUES (40, ''OPERATIONS'', ''BOSTON'');

INSERT INTO emp VALUES (7839, ''KING'', ''PRESIDENT'', NULL, TO_DATE(''17-11-1981'',''DD-MM-YYYY''), 5000, NULL, 10);
INSERT INTO emp VALUES (7698, ''BLAKE'', ''MANAGER'', 7839, TO_DATE(''01-05-1981'',''DD-MM-YYYY''), 2850, NULL, 30);
INSERT INTO emp VALUES (7782, ''CLARK'', ''MANAGER'', 7839, TO_DATE(''09-06-1981'',''DD-MM-YYYY''), 2450, NULL, 10);
INSERT INTO emp VALUES (7788, ''SCOTT'', ''ANALYST'', 7566, TO_DATE(''13-07-1987'',''DD-MM-YYYY''), 3000, NULL, 20);

COMMIT;
```
',
  '<p>데이터베이스의 구조(Schema)를 생성, 수정, 삭제하는 **데이터 정의어(DDL: Data Definition Language)**의 모든 구문과 실전 오라클 <strong>EMP / DEPT / SALGRADE</strong> 샘플 릴레이션 구축 코드를 배웁니다.</p>
<hr>
<h2>1. DDL 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>DDL (Data Definition Language)</strong>: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code> 등 데이터베이스 객체 구조를 생성하고 정의하는 언어입니다.</li>
<li><strong>CASCADE CONSTRAINTS</strong>: 오라클 등에서 부모 테이블 삭제 시 연결된 자식 테이블의 외래키 제약조건까지 한 번에 제거해 주는 명령어 옵션입니다.</li>
<li><strong><code>DEFAULT</code></strong>: 데이터를 삽입할 때 값이 명시되지 않은 경우 지정된 고정 기본값을 자동으로 채워주는 제약 구문입니다.</li>
</ul>
<hr>
<h2>2. pjt/26 실전 오라클 EMP / DEPT 테이블 생성 DDL 스크립트 (create_emppdb_oracle.sql)</h2>
<pre><code class="language-sql">-- 1. 기존 테이블 및 제약조건 삭제
DROP TABLE emp CASCADE CONSTRAINTS;
DROP TABLE dept CASCADE CONSTRAINTS;
DROP TABLE salgrade CASCADE CONSTRAINTS;

-- 2. 부서 테이블 (DEPT) 생성
CREATE TABLE dept (
    deptno NUMBER(2) CONSTRAINT pk_dept PRIMARY KEY,
    dname  VARCHAR2(14),
    loc    VARCHAR2(13)
);

-- 3. 사원 테이블 (EMP) 생성 (외래키 제약조건 포함)
CREATE TABLE emp (
    empno    NUMBER(4) CONSTRAINT pk_emp PRIMARY KEY,
    ename    VARCHAR2(10),
    job      VARCHAR2(9),
    mgr      NUMBER(4),
    hiredate DATE,
    sal      NUMBER(7,2),
    comm     NUMBER(7,2),
    deptno   NUMBER(2) CONSTRAINT fk_deptno REFERENCES dept(deptno) ON DELETE CASCADE
);

-- 4. 급여 등급 테이블 (SALGRADE) 생성
CREATE TABLE salgrade (
    grade NUMBER,
    losal NUMBER,
    hisal NUMBER
);

-- 5. 샘플 더미 데이터 데이터 삽입
INSERT INTO dept VALUES (10, &#39;ACCOUNTING&#39;, &#39;NEW YORK&#39;);
INSERT INTO dept VALUES (20, &#39;RESEARCH&#39;, &#39;DALLAS&#39;);
INSERT INTO dept VALUES (30, &#39;SALES&#39;, &#39;CHICAGO&#39;);
INSERT INTO dept VALUES (40, &#39;OPERATIONS&#39;, &#39;BOSTON&#39;);

INSERT INTO emp VALUES (7839, &#39;KING&#39;, &#39;PRESIDENT&#39;, NULL, TO_DATE(&#39;17-11-1981&#39;,&#39;DD-MM-YYYY&#39;), 5000, NULL, 10);
INSERT INTO emp VALUES (7698, &#39;BLAKE&#39;, &#39;MANAGER&#39;, 7839, TO_DATE(&#39;01-05-1981&#39;,&#39;DD-MM-YYYY&#39;), 2850, NULL, 30);
INSERT INTO emp VALUES (7782, &#39;CLARK&#39;, &#39;MANAGER&#39;, 7839, TO_DATE(&#39;09-06-1981&#39;,&#39;DD-MM-YYYY&#39;), 2450, NULL, 10);
INSERT INTO emp VALUES (7788, &#39;SCOTT&#39;, &#39;ANALYST&#39;, 7566, TO_DATE(&#39;13-07-1987&#39;,&#39;DD-MM-YYYY&#39;), 3000, NULL, 20);

COMMIT;
</code></pre>
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
  '데이터베이스에 저장된 튜플 데이터를 검색하는 **SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬** 문법을 배웁니다.',
  '<p>데이터베이스에 저장된 튜플 데이터를 검색하는 <strong>SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬</strong> 문법을 배웁니다.</p>
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
  '데이터셋을 그룹 단위로 묶어 통계 수치를 구하는 **집계 함수(Aggregate Functions)**와 **GROUP BY, HAVING** 구문의 실행 파이프라인을 다룹니다.',
  '<p>데이터셋을 그룹 단위로 묶어 통계 수치를 구하는 **집계 함수(Aggregate Functions)**와 <strong>GROUP BY, HAVING</strong> 구문의 실행 파이프라인을 다룹니다.</p>
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
