-- Complete Database Master Lessons Part 2

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
- **Theta Join (세타 조인, $owtie_{	heta}$)**: 카티션 곱을 수행한 후 조건식 $	heta$ (비교 연산자 $=, 
eq, <, >$)를 만족하는 튜플만 필터링하는 연산입니다.
- **Equi Join (동등 조인)**: 세타 조인 조건식 중 동등 비교 연산자($=$)만을 사용하는 조인입니다.
- **Natural Join (자연 조인, $owtie$)**: 두 릴레이션의 공통 속성을 기준으로 동등 조인을 수행한 후, 중복되는 공통 속성을 하나만 남기고 프로젝트 제거하는 연산입니다.
- **Division Operator (디비전, $div$)**: 릴레이션 R(X, Y)와 S(Y)가 있을 때, S의 모든 Y 값들을 만족하는 R의 X 속성 값들을 추출하는 디비전 연산입니다.

---

## 2. 조인 연산자 종류 및 수학적 수식 비교표

| 조인 종류 | 기호 표현식 | 특징 및 작동 원리 |
| :--- | :--- | :--- |
| **카티션 곱** | $R 	imes S$ | 조건 없이 모든 튜플을 1:1로 교차 조합 (차수: $deg(R)+deg(S)$, 카디널리티: $card(R) 	imes card(S)$) |
| **세타 조인** | $R owtie_{	heta} S = sigma_{	heta}(R 	imes S)$ | 조건식 $	heta$를 만족하는 조합만 추출 |
| **자연 조인** | $R owtie S$ | 공통 속성 이름 기준 자동 동등 조인 및 중복 컬럼 제거 |
| **디비전** | $R div S$ | S의 모든 튜플 값을 포함하고 있는 R의 특정 속성 그룹 추출 |

---

## 3. 디비전(Division) 연산의 실전 알고리즘 예시

"모든 필수 과목(S)을 수강 신청한 학생 목록(R)"을 구하는 연산:

```
릴레이션 R (수강신청)              릴레이션 S (필수과목)        R ÷ S (결과 릴레이션)
+--------+----------+             +----------+                 +--------+
| 학번   | 과목코드 |             | 과목코드 |                 | 학번   |
+--------+----------+             +----------+                 +--------+
| 202601 | CS101    |             | CS101    |                 | 202601 |
| 202601 | CS102    |             | CS102    |                 +--------+
| 202602 | CS101    |             +----------+
+--------+----------+
```
',
  '<p>두 개 이상의 릴레이션을 합성하여 데이터를 조율하는 **고급 관계대수 연산자(조인, 디비전, 카티션 곱)**를 심도 있게 학습합니다.</p>
<hr>
<h2>1. 고급 관계대수 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Cartesian Product (카티션 곱, $ imes$)</strong>: R의 $N$개 튜플과 S의 $M$개 튜플을 모든 가능한 조합으로 묶어 총 $N   imes M$개의 튜플을 생성하는 이항 연산입니다.</li>
<li><strong>Theta Join (세타 조인, $owtie_{    heta}$)</strong>: 카티션 곱을 수행한 후 조건식 $   heta$ (비교 연산자 $=, 
eq, &lt;, &gt;$)를 만족하는 튜플만 필터링하는 연산입니다.</li>
<li><strong>Equi Join (동등 조인)</strong>: 세타 조인 조건식 중 동등 비교 연산자($=$)만을 사용하는 조인입니다.</li>
<li><strong>Natural Join (자연 조인, $owtie$)</strong>: 두 릴레이션의 공통 속성을 기준으로 동등 조인을 수행한 후, 중복되는 공통 속성을 하나만 남기고 프로젝트 제거하는 연산입니다.</li>
<li><strong>Division Operator (디비전, $div$)</strong>: 릴레이션 R(X, Y)와 S(Y)가 있을 때, S의 모든 Y 값들을 만족하는 R의 X 속성 값들을 추출하는 디비전 연산입니다.</li>
</ul>
<hr>
<h2>2. 조인 연산자 종류 및 수학적 수식 비교표</h2>
<table>
<thead>
<tr>
<th align="left">조인 종류</th>
<th align="left">기호 표현식</th>
<th align="left">특징 및 작동 원리</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>카티션 곱</strong></td>
<td align="left">$R 	imes S$</td>
<td align="left">조건 없이 모든 튜플을 1:1로 교차 조합 (차수: $deg(R)+deg(S)$, 카디널리티: $card(R) 	imes card(S)$)</td>
</tr>
<tr>
<td align="left"><strong>세타 조인</strong></td>
<td align="left">$R owtie_{	heta} S = sigma_{	heta}(R 	imes S)$</td>
<td align="left">조건식 $	heta$를 만족하는 조합만 추출</td>
</tr>
<tr>
<td align="left"><strong>자연 조인</strong></td>
<td align="left">$R owtie S$</td>
<td align="left">공통 속성 이름 기준 자동 동등 조인 및 중복 컬럼 제거</td>
</tr>
<tr>
<td align="left"><strong>디비전</strong></td>
<td align="left">$R div S$</td>
<td align="left">S의 모든 튜플 값을 포함하고 있는 R의 특정 속성 그룹 추출</td>
</tr>
</tbody></table>
<hr>
<h2>3. 디비전(Division) 연산의 실전 알고리즘 예시</h2>
<p>&quot;모든 필수 과목(S)을 수강 신청한 학생 목록(R)&quot;을 구하는 연산:</p>
<pre><code>릴레이션 R (수강신청)              릴레이션 S (필수과목)        R ÷ S (결과 릴레이션)
+--------+----------+             +----------+                 +--------+
| 학번   | 과목코드 |             | 과목코드 |                 | 학번   |
+--------+----------+             +----------+                 +--------+
| 202601 | CS101    |             | CS101    |                 | 202601 |
| 202601 | CS102    |             | CS102    |                 +--------+
| 202602 | CS101    |             +----------+
+--------+----------+
</code></pre>
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

## 2. pjt/26 실전 오라클 EMP / DEPT 테이블 생성 DDL 스크립트 (create_emppdb_oracle.sql)

```sql
DROP TABLE emp CASCADE CONSTRAINTS;
DROP TABLE dept CASCADE CONSTRAINTS;

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

## 1. SELECT 문법 구성과 논리적 실행 순서

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

## 2. 실전 EMP 사원 테이블 조회 SQL 예제

```sql
SELECT empno, ename, job, sal
FROM emp
WHERE sal BETWEEN 2000 AND 4000
  AND comm IS NULL
ORDER BY sal DESC, ename ASC;
```
',
  '<p>데이터베이스에 저장된 튜플 데이터를 검색하는 <strong>SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬</strong> 문법을 배웁니다.</p>
<hr>
<h2>1. SELECT 문법 구성과 논리적 실행 순서</h2>
<pre><code>[작성 순서]                   [DBMS 논리적 실행 순서]
1. SELECT 컬럼명              1. FROM      (대상 테이블 참조)
2. FROM 테이블명              2. WHERE     (개별 행 필터링)
3. WHERE 조건식               3. GROUP BY  (그룹화)
4. GROUP BY 컬럼명            4. HAVING    (그룹 필터링)
5. HAVING 그룹조건            5. SELECT    (컬럼 투영 및 계산)
6. ORDER BY 정렬컬럼          6. ORDER BY  (결과 정렬)
</code></pre>
<hr>
<h2>2. 실전 EMP 사원 테이블 조회 SQL 예제</h2>
<pre><code class="language-sql">SELECT empno, ename, job, sal
FROM emp
WHERE sal BETWEEN 2000 AND 4000
  AND comm IS NULL
ORDER BY sal DESC, ename ASC;
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

- **`COUNT(*)`**: NULL을 포함한 전체 행의 개수를 반환합니다.
- **`COUNT(컬럼)`**: 해당 컬럼에서 `NULL`을 제외한 유효 행의 개수를 반환합니다.
- **`SUM(컬럼)`**: NULL을 제외한 수치 데이터의 합계를 계산합니다.
- **`AVG(컬럼)`**: NULL을 제외한 평균을 계산합니다.
- **`MAX(컬럼)` / `MIN(컬럼)`**: 최댓값과 최솟값을 구합니다.

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
<li><strong><code>COUNT(*)</code></strong>: NULL을 포함한 전체 행의 개수를 반환합니다.</li>
<li><strong><code>COUNT(컬럼)</code></strong>: 해당 컬럼에서 <code>NULL</code>을 제외한 유효 행의 개수를 반환합니다.</li>
<li><strong><code>SUM(컬럼)</code></strong>: NULL을 제외한 수치 데이터의 합계를 계산합니다.</li>
<li><strong><code>AVG(컬럼)</code></strong>: NULL을 제외한 평균을 계산합니다.</li>
<li><strong><code>MAX(컬럼)</code> / <code>MIN(컬럼)</code></strong>: 최댓값과 최솟값을 구합니다.</li>
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
<pre><code class="language-sql">SELECT 
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
