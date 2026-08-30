-- Full Database Mega Lessons Part 2

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

---

## 2. pjt/26 실전 오라클 EMP / DEPT 테이블 생성 DDL 스크립트 (create_emppdb_oracle.sql)

```sql
DROP TABLE emp CASCADE CONSTRAINTS;
DROP TABLE dept CASCADE CONSTRAINTS;
DROP TABLE salgrade CASCADE CONSTRAINTS;

CREATE TABLE dept (
    deptno NUMBER(2) CONSTRAINT pk_dept PRIMARY KEY,
    dname  VARCHAR2(14),
    loc    VARCHAR2(13)
);

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

INSERT INTO dept VALUES (10, ''ACCOUNTING'', ''NEW YORK'');
INSERT INTO dept VALUES (20, ''RESEARCH'', ''DALLAS'');
INSERT INTO emp VALUES (7839, ''KING'', ''PRESIDENT'', NULL, TO_DATE(''17-11-1981'',''DD-MM-YYYY''), 5000, NULL, 10);
COMMIT;
```
',
  '<p>데이터베이스의 구조(Schema)를 생성, 수정, 삭제하는 **데이터 정의어(DDL: Data Definition Language)**의 모든 구문과 실전 오라클 <strong>EMP / DEPT / SALGRADE</strong> 샘플 릴레이션 구축 코드를 배웁니다.</p>
<hr>
<h2>1. DDL 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>DDL (Data Definition Language)</strong>: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code> 등 데이터베이스 객체 구조를 생성하고 정의하는 언어입니다.</li>
<li><strong>CASCADE CONSTRAINTS</strong>: 오라클 등에서 부모 테이블 삭제 시 연결된 자식 테이블의 외래키 제약조건까지 한 번에 제거해 주는 명령어 옵션입니다.</li>
</ul>
<hr>
<h2>2. pjt/26 실전 오라클 EMP / DEPT 테이블 생성 DDL 스크립트 (create_emppdb_oracle.sql)</h2>
<pre><code class="language-sql">DROP TABLE emp CASCADE CONSTRAINTS;
DROP TABLE dept CASCADE CONSTRAINTS;
DROP TABLE salgrade CASCADE CONSTRAINTS;

CREATE TABLE dept (
    deptno NUMBER(2) CONSTRAINT pk_dept PRIMARY KEY,
    dname  VARCHAR2(14),
    loc    VARCHAR2(13)
);

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

INSERT INTO dept VALUES (10, &#39;ACCOUNTING&#39;, &#39;NEW YORK&#39;);
INSERT INTO dept VALUES (20, &#39;RESEARCH&#39;, &#39;DALLAS&#39;);
INSERT INTO emp VALUES (7839, &#39;KING&#39;, &#39;PRESIDENT&#39;, NULL, TO_DATE(&#39;17-11-1981&#39;,&#39;DD-MM-YYYY&#39;), 5000, NULL, 10);
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
  '데이터베이스에 저장된 튜플 데이터를 검색하는 **SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬** 문법을 배웁니다.

---

## 1. SELECT 문법 구성과 논리적 실행 순서 (Logical Query Processing)

SQL 쿼리는 작성 순서와 실제 DBMS 내부 엔진의 **논리적 실행 순서(Execution Order)**가 다릅니다.

```
[작성 순서]                   [DBMS 논리적 실행 순서]
1. SELECT 컬럼명              1. FROM      (대상 테이블 참조)
2. FROM 테이블명              2. WHERE     (개별 행 필터링)
3. WHERE 조건식               3. GROUP BY  (그룹화)
4. GROUP BY 컬럼명            4. HAVING    (그룹 필터링)
5. HAVING 그룹조건            5. SELECT    (컬럼 투영 및 계산)
6. ORDER BY 정렬컬럼          6. ORDER BY  (결과 정렬)
```

---

## 2. WHERE 조건식 연산자 완벽 정해

- **비교 연산자**: `=`, `!=`, `<>`, `>`, `<`, `>=`, `<=`
- **범위 연산자 (BETWEEN)**: `sal BETWEEN 2000 AND 4000` (이상/이하 포함)
- **목록 연산자 (IN)**: `job IN (''MANAGER'', ''ANALYST'', ''CLERK'')`
- **패턴 연산자 (LIKE)**:
  - `%`: 0개 이상의 모든 문자열 매칭 (`ename LIKE ''A%''` -> A로 시작하는 이름)
  - `_`: 정확히 1개의 개별 문자 매칭 (`ename LIKE ''_A%''` -> 두 번째 글자가 A인 이름)
- **NULL 검사 연산자**: `comm IS NULL` / `comm IS NOT NULL` (자바/파이썬의 `!= null` 표기 사용 불가)

---

## 3. 실전 EMP 사원 테이블 조회 SQL 예제

```sql
-- 1. 급여가 2,000 이상 4,000 이하이고, 커미션이 존재하지 않는 사원 조회
SELECT empno, ename, job, sal
FROM emp
WHERE sal BETWEEN 2000 AND 4000
  AND comm IS NULL
ORDER BY sal DESC, ename ASC;

-- 2. 직급이 MANAGER이거나 ANALYST인 사원 중 이름에 ''A''가 들어가는 사원
SELECT ename, job, deptno
FROM emp
WHERE job IN (''MANAGER'', ''ANALYST'')
  AND ename LIKE ''%A%''
ORDER BY deptno ASC;
```
',
  '<p>데이터베이스에 저장된 튜플 데이터를 검색하는 <strong>SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬</strong> 문법을 배웁니다.</p>
<hr>
<h2>1. SELECT 문법 구성과 논리적 실행 순서 (Logical Query Processing)</h2>
<p>SQL 쿼리는 작성 순서와 실제 DBMS 내부 엔진의 **논리적 실행 순서(Execution Order)**가 다릅니다.</p>
<pre><code>[작성 순서]                   [DBMS 논리적 실행 순서]
1. SELECT 컬럼명              1. FROM      (대상 테이블 참조)
2. FROM 테이블명              2. WHERE     (개별 행 필터링)
3. WHERE 조건식               3. GROUP BY  (그룹화)
4. GROUP BY 컬럼명            4. HAVING    (그룹 필터링)
5. HAVING 그룹조건            5. SELECT    (컬럼 투영 및 계산)
6. ORDER BY 정렬컬럼          6. ORDER BY  (결과 정렬)
</code></pre>
<hr>
<h2>2. WHERE 조건식 연산자 완벽 정해</h2>
<ul>
<li><strong>비교 연산자</strong>: <code>=</code>, <code>!=</code>, <code>&lt;&gt;</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></li>
<li><strong>범위 연산자 (BETWEEN)</strong>: <code>sal BETWEEN 2000 AND 4000</code> (이상/이하 포함)</li>
<li><strong>목록 연산자 (IN)</strong>: <code>job IN (&#39;MANAGER&#39;, &#39;ANALYST&#39;, &#39;CLERK&#39;)</code></li>
<li><strong>패턴 연산자 (LIKE)</strong>:<ul>
<li><code>%</code>: 0개 이상의 모든 문자열 매칭 (<code>ename LIKE &#39;A%&#39;</code> -&gt; A로 시작하는 이름)</li>
<li><code>_</code>: 정확히 1개의 개별 문자 매칭 (<code>ename LIKE &#39;_A%&#39;</code> -&gt; 두 번째 글자가 A인 이름)</li>
</ul>
</li>
<li><strong>NULL 검사 연산자</strong>: <code>comm IS NULL</code> / <code>comm IS NOT NULL</code> (자바/파이썬의 <code>!= null</code> 표기 사용 불가)</li>
</ul>
<hr>
<h2>3. 실전 EMP 사원 테이블 조회 SQL 예제</h2>
<pre><code class="language-sql">-- 1. 급여가 2,000 이상 4,000 이하이고, 커미션이 존재하지 않는 사원 조회
SELECT empno, ename, job, sal
FROM emp
WHERE sal BETWEEN 2000 AND 4000
  AND comm IS NULL
ORDER BY sal DESC, ename ASC;

-- 2. 직급이 MANAGER이거나 ANALYST인 사원 중 이름에 &#39;A&#39;가 들어가는 사원
SELECT ename, job, deptno
FROM emp
WHERE job IN (&#39;MANAGER&#39;, &#39;ANALYST&#39;)
  AND ename LIKE &#39;%A%&#39;
ORDER BY deptno ASC;
</code></pre>
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

## 1. 5대 핵심 집계 함수 (Aggregate Functions)

- **`COUNT(*)`**: NULL 포함 전체 행의 개수를 반환합니다.
- **`COUNT(컬럼)`**: 해당 컬럼에서 `NULL`을 제외한 유효 행의 개수를 반환합니다.
- **`SUM(컬럼)`**: NULL을 제외한 수치 데이터의 합계를 계산합니다.
- **`AVG(컬럼)`**: NULL을 제외한 평균을 계산합니다. (NULL을 0으로 처리하려면 `NVL/COALESCE` 활용)
- **`MAX(컬럼)` / `MIN(컬럼)`**: 최댓값과 최솟값을 구합니다. (숫자, 날짜, 문자열 모두 적용 가능)

---

## 2. WHERE 절 vs HAVING 절 차이점 분석

| 구분 | WHERE 절 | HAVING 절 |
| :--- | :--- | :--- |
| **적용 대상** | 개별 행(Row) 데이터 | 그룹화된 요약 행(Group Row) |
| **실행 시점** | GROUP BY 가 수행되기 **전** | GROUP BY 그룹화가 완료된 **후** |
| **집계 함수 사용** | **사용 불가** (`WHERE SUM(sal) > 1000` 에러) | **사용 가능** (`HAVING AVG(sal) >= 2500`) |

---

## 3. 부서별 평균 급여 및 인원수 집계 실전 SQL

```sql
-- 부서별 사원 수, 평균 급여, 최고 급여를 구하되,
-- 평균 급여가 2,000 이상인 부서만 출력하고 평균 급여 내림차순 정렬
SELECT 
    deptno, 
    COUNT(*) AS total_emps,
    ROUND(AVG(sal), 2) AS avg_salary,
    MAX(sal) AS max_salary
FROM emp
WHERE deptno IS NOT NULL
GROUP BY deptno
HAVING AVG(sal) >= 2000
ORDER BY avg_salary DESC;
```
',
  '<p>데이터셋을 그룹 단위로 묶어 통계 수치를 구하는 **집계 함수(Aggregate Functions)**와 <strong>GROUP BY, HAVING</strong> 구문의 실행 파이프라인을 다룹니다.</p>
<hr>
<h2>1. 5대 핵심 집계 함수 (Aggregate Functions)</h2>
<ul>
<li><strong><code>COUNT(*)</code></strong>: NULL 포함 전체 행의 개수를 반환합니다.</li>
<li><strong><code>COUNT(컬럼)</code></strong>: 해당 컬럼에서 <code>NULL</code>을 제외한 유효 행의 개수를 반환합니다.</li>
<li><strong><code>SUM(컬럼)</code></strong>: NULL을 제외한 수치 데이터의 합계를 계산합니다.</li>
<li><strong><code>AVG(컬럼)</code></strong>: NULL을 제외한 평균을 계산합니다. (NULL을 0으로 처리하려면 <code>NVL/COALESCE</code> 활용)</li>
<li><strong><code>MAX(컬럼)</code> / <code>MIN(컬럼)</code></strong>: 최댓값과 최솟값을 구합니다. (숫자, 날짜, 문자열 모두 적용 가능)</li>
</ul>
<hr>
<h2>2. WHERE 절 vs HAVING 절 차이점 분석</h2>
<table>
<thead>
<tr>
<th align="left">구분</th>
<th align="left">WHERE 절</th>
<th align="left">HAVING 절</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>적용 대상</strong></td>
<td align="left">개별 행(Row) 데이터</td>
<td align="left">그룹화된 요약 행(Group Row)</td>
</tr>
<tr>
<td align="left"><strong>실행 시점</strong></td>
<td align="left">GROUP BY 가 수행되기 <strong>전</strong></td>
<td align="left">GROUP BY 그룹화가 완료된 <strong>후</strong></td>
</tr>
<tr>
<td align="left"><strong>집계 함수 사용</strong></td>
<td align="left"><strong>사용 불가</strong> (<code>WHERE SUM(sal) &gt; 1000</code> 에러)</td>
<td align="left"><strong>사용 가능</strong> (<code>HAVING AVG(sal) &gt;= 2500</code>)</td>
</tr>
</tbody></table>
<hr>
<h2>3. 부서별 평균 급여 및 인원수 집계 실전 SQL</h2>
<pre><code class="language-sql">-- 부서별 사원 수, 평균 급여, 최고 급여를 구하되,
-- 평균 급여가 2,000 이상인 부서만 출력하고 평균 급여 내림차순 정렬
SELECT 
    deptno, 
    COUNT(*) AS total_emps,
    ROUND(AVG(sal), 2) AS avg_salary,
    MAX(sal) AS max_salary
FROM emp
WHERE deptno IS NOT NULL
GROUP BY deptno
HAVING AVG(sal) &gt;= 2000
ORDER BY avg_salary DESC;
</code></pre>
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
