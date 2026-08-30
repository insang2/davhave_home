-- Ultimate Database Mega Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch09-sql-multi-table-joins',
  'SQL 테이블 조인(JOIN) 총정리: INNER JOIN, LEFT/RIGHT OUTER JOIN, FULL OUTER JOIN 및 SELF JOIN',
  '관계형 데이터베이스의 꽃인 테이블 조인(JOIN)의 다양한 종류(내부 조인, 외부 조인, 교차 조인, 자체 조인)와 ON 구문의 결합 조건을 시각적으로 학습합니다.',
  '분산된 여러 테이블을 릴레이션 관계 키로 결합하여 하나의 통합된 결과셋을 만들어 내는 **SQL 조인(JOIN)**의 모든 형태를 총정리합니다.',
  '<p>분산된 여러 테이블을 릴레이션 관계 키로 결합하여 하나의 통합된 결과셋을 만들어 내는 **SQL 조인(JOIN)**의 모든 형태를 총정리합니다.</p>
',
  'published',
  'SQL 조인(JOIN) 총정리 - INNER JOIN, LEFT OUTER JOIN, FULL OUTER JOIN & SELF JOIN',
  '여러 테이블의 데이터를 관계 키로 결합하는 SQL JOIN, INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN 및 자기 자신과 조인하는 SELF JOIN 작동 원리를 배웁니다.',
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
  'database',
  'ch10-sql-subqueries-nested-and-correlated',
  'SQL 서브쿼리(Subquery) 심화: 중첩 서브쿼리, 상관 서브쿼리(Correlated), EXISTS 및 IN/ANY/ALL',
  '메인 쿼리에 필요한 조건이나 결과 데이터를 동적으로 제공하는 서브쿼리의 종류(중첩, 상관, 스칼라, 인라인 뷰)와 성능 최적화 관점을 학습합니다.',
  '메인 쿼리(Main Query) 내부에 포함되는 하위 쿼리인 **서브쿼리(Subquery)**의 종류와 **상관 서브쿼리(Correlated Subquery)** 및 **EXISTS** 연산자를 배웁니다.',
  '<p>메인 쿼리(Main Query) 내부에 포함되는 하위 쿼리인 **서브쿼리(Subquery)**의 종류와 <strong>상관 서브쿼리(Correlated Subquery)</strong> 및 <strong>EXISTS</strong> 연산자를 배웁니다.</p>
',
  'published',
  'SQL 서브쿼리 심화 - 중첩 서브쿼리, 상관 서브쿼리(Correlated), EXISTS & IN/ANY/ALL',
  '서브쿼리(Subquery), 중첩 서브쿼리, 상관 서브쿼리(Correlated Subquery), EXISTS/NOT EXISTS 및 다중 행 연산자(IN, ANY, ALL)를 배웁니다.',
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
  'database',
  'ch11-sql-dml-data-mutation-insert-update-delete',
  'SQL 데이터 조작: INSERT INTO, UPDATE, DELETE 및 MERGE(UPSERT) 패턴',
  '테이블 내 데이터를 신규 추가(INSERT), 기존 데이터 수정(UPDATE), 데이터 삭제(DELETE)하는 구문과 데이터 병합(MERGE) 패턴을 학습합니다.',
  '데이터베이스 테이블의 데이터를 직접 변경하는 **DML(Data Manipulation Language)**인 **INSERT, UPDATE, DELETE** 및 **MERGE (UPSERT)** 문법을 학습합니다.

---

## 1. DML 데이터 변동 핵심 전문 용어 사전 (Glossary)

- **`INSERT INTO`**: 테이블에 새로운 행(Tuple) 데이터를 추가 삽입하는 DML 구문입니다.
- **`UPDATE SET`**: 조건을 만족하는 기존 튜플의 특정 컬럼 값들을 새 값으로 변경하는 구문입니다. (WHERE 절 생략 시 테이블 전체 행 변경 위험)
- **`DELETE FROM`**: 조건을 만족하는 튜플 행들을 삭제하는 구문입니다. (행 단위 삭제, 트랜잭션 롤백 가능)
- **`TRUNCATE TABLE`**: DDL 구문으로, 테이블의 모든 데이터를 순식간에 비우는 고속 초기화 명령어입니다. (롤백 불가, AUTO_INCREMENT 리셋)
- **`MERGE` (UPSERT)**: 타겟 테이블에 특정 키의 데이터가 존재하면 UPDATE를 수행하고, 존재하지 않으면 INSERT를 수행하는 조건부 병합 구문입니다.

---

## 2. DELETE vs TRUNCATE vs DROP 비교 분석

| 비교 항목 | DELETE | TRUNCATE | DROP |
| :--- | :--- | :--- | :--- |
| **명령어 분류** | DML (Data Manipulation) | DDL (Data Definition) | DDL (Data Definition) |
| **삭제 대상** | 조건에 맞는 튜플(행) 삭제 | 테이블 전체 튜플(행) 삭제 | 테이블 전체 구조 및 데이터 삭제 |
| **트랜잭션 롤백** | **가능** (ROLLBACK 시 복구) | **불가** (즉시 커밋) | **불가** (즉시 커밋) |
| **실행 속도** | 행마다 로그 기록으로 상대적 느림 | 공간 즉시 비움으로 매우 빠름 | 매우 빠름 |

---

## 3. 실전 DML 문법 및 MERGE 패턴 SQL 예제

```sql
-- 1. INSERT INTO (단일 행 및 Subquery 기반 다중 행 삽입)
INSERT INTO dept (deptno, dname, loc) VALUES (50, ''PLANNING'', ''SEOUL'');

-- 2. UPDATE (부서 20 소속 사원들의 급여 10% 인상)
UPDATE emp
SET sal = sal * 1.10
WHERE deptno = 20;

-- 3. DELETE (입사일이 1981년 이전인 사원 데이터 정제)
DELETE FROM emp
WHERE hiredate < TO_DATE(''1981-01-01'', ''YYYY-MM-DD'');

-- 4. MERGE (UPSERT) 실전 구문
MERGE INTO emp_target t
USING emp_stage s ON (t.empno = s.empno)
WHEN MATCHED THEN
    UPDATE SET t.sal = s.sal, t.job = s.job
WHEN NOT MATCHED THEN
    INSERT (empno, ename, sal, deptno) VALUES (s.empno, s.ename, s.sal, s.deptno);
```
',
  '<p>데이터베이스 테이블의 데이터를 직접 변경하는 **DML(Data Manipulation Language)**인 <strong>INSERT, UPDATE, DELETE</strong> 및 <strong>MERGE (UPSERT)</strong> 문법을 학습합니다.</p>
<hr>
<h2>1. DML 데이터 변동 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong><code>INSERT INTO</code></strong>: 테이블에 새로운 행(Tuple) 데이터를 추가 삽입하는 DML 구문입니다.</li>
<li><strong><code>UPDATE SET</code></strong>: 조건을 만족하는 기존 튜플의 특정 컬럼 값들을 새 값으로 변경하는 구문입니다. (WHERE 절 생략 시 테이블 전체 행 변경 위험)</li>
<li><strong><code>DELETE FROM</code></strong>: 조건을 만족하는 튜플 행들을 삭제하는 구문입니다. (행 단위 삭제, 트랜잭션 롤백 가능)</li>
<li><strong><code>TRUNCATE TABLE</code></strong>: DDL 구문으로, 테이블의 모든 데이터를 순식간에 비우는 고속 초기화 명령어입니다. (롤백 불가, AUTO_INCREMENT 리셋)</li>
<li><strong><code>MERGE</code> (UPSERT)</strong>: 타겟 테이블에 특정 키의 데이터가 존재하면 UPDATE를 수행하고, 존재하지 않으면 INSERT를 수행하는 조건부 병합 구문입니다.</li>
</ul>
<hr>
<h2>2. DELETE vs TRUNCATE vs DROP 비교 분석</h2>
<table>
<thead>
<tr>
<th align="left">비교 항목</th>
<th align="left">DELETE</th>
<th align="left">TRUNCATE</th>
<th align="left">DROP</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>명령어 분류</strong></td>
<td align="left">DML (Data Manipulation)</td>
<td align="left">DDL (Data Definition)</td>
<td align="left">DDL (Data Definition)</td>
</tr>
<tr>
<td align="left"><strong>삭제 대상</strong></td>
<td align="left">조건에 맞는 튜플(행) 삭제</td>
<td align="left">테이블 전체 튜플(행) 삭제</td>
<td align="left">테이블 전체 구조 및 데이터 삭제</td>
</tr>
<tr>
<td align="left"><strong>트랜잭션 롤백</strong></td>
<td align="left"><strong>가능</strong> (ROLLBACK 시 복구)</td>
<td align="left"><strong>불가</strong> (즉시 커밋)</td>
<td align="left"><strong>불가</strong> (즉시 커밋)</td>
</tr>
<tr>
<td align="left"><strong>실행 속도</strong></td>
<td align="left">행마다 로그 기록으로 상대적 느림</td>
<td align="left">공간 즉시 비움으로 매우 빠름</td>
<td align="left">매우 빠름</td>
</tr>
</tbody></table>
<hr>
<h2>3. 실전 DML 문법 및 MERGE 패턴 SQL 예제</h2>
<pre><code class="language-sql">-- 1. INSERT INTO (단일 행 및 Subquery 기반 다중 행 삽입)
INSERT INTO dept (deptno, dname, loc) VALUES (50, &#39;PLANNING&#39;, &#39;SEOUL&#39;);

-- 2. UPDATE (부서 20 소속 사원들의 급여 10% 인상)
UPDATE emp
SET sal = sal * 1.10
WHERE deptno = 20;

-- 3. DELETE (입사일이 1981년 이전인 사원 데이터 정제)
DELETE FROM emp
WHERE hiredate &lt; TO_DATE(&#39;1981-01-01&#39;, &#39;YYYY-MM-DD&#39;);

-- 4. MERGE (UPSERT) 실전 구문
MERGE INTO emp_target t
USING emp_stage s ON (t.empno = s.empno)
WHEN MATCHED THEN
    UPDATE SET t.sal = s.sal, t.job = s.job
WHEN NOT MATCHED THEN
    INSERT (empno, ename, sal, deptno) VALUES (s.empno, s.ename, s.sal, s.deptno);
</code></pre>
',
  'published',
  'SQL 데이터 조작 DML - INSERT INTO, UPDATE, DELETE & MERGE(UPSERT)',
  '테이블의 튜플 데이터를 삽입, 수정, 삭제하는 DML 명령어 INSERT INTO, UPDATE SET, DELETE FROM 및 MERGE(UPSERT) 패턴을 배웁니다.',
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
  'database',
  'ch12-sql-advanced-analytic-window-functions',
  'SQL 고급 분석 및 윈도우 함수: OVER(PARTITION BY ORDER BY), RANK, DENSE_RANK, ROW_NUMBER',
  '기존 GROUP BY와 달리 행의 개수를 유지하면서 그룹별 순위, 누적합, 이동 평균을 계산하는 SQL 윈도우 분석 함수(OVER 절)의 활용법을 다룹니다.',
  '행의 집합(Window)을 대상으로 각 행마다 분석 집계 결과를 계산해 내는 고급 분석 도구인 **SQL 윈도우 함수(Window Functions)**를 학습합니다.

---

## 1. 윈도우 함수 핵심 전문 용어 사전 (Glossary)

- **Window Function**: 행과 행 간의 관계를 정의하여 집계, 순위, 비율, 순서 등을 원본 행 수 보존 상태에서 연산해 내는 고급 SQL 구문입니다.
- **`OVER()` 절**: 윈도우 함수의 연산 대상을 지정하는 필수 절로, 내부에서 `PARTITION BY`와 `ORDER BY`를 조합합니다.
- **`PARTITION BY`**: 윈도우 연산을 적용할 전체 행을 소그룹으로 분할하는 그룹핑 절입니다. (GROUP BY와 달리 결과 행을 하나로 축약하지 않음)
- **`ROW_NUMBER()`**: 동일한 값이 존재해도 무조건 유일한 연번(1, 2, 3, 4)을 순차적으로 부여하는 순위 함수입니다.
- **`RANK()`**: 동률 값이 존재할 경우 동일한 순위를 부여하고, 그 다음 순위를 동률 수만큼 건너뛰는 함수입니다. (예: 1, 2, 2, 4)
- **`DENSE_RANK()`**: 동률 값이 존재해도 다음 순위를 건너뛰지 않고 빽빽하게 이어 붙이는 함수입니다. (예: 1, 2, 2, 3)

---

## 2. 3대 순위 함수 차이점 비교표

| 입력 급여 데이터 | ROW_NUMBER() | RANK() | DENSE_RANK() |
| :---: | :---: | :---: | :---: |
| 5000 | 1 | 1 | 1 |
| 3000 | 2 | 2 | 2 |
| 3000 | 3 | 2 | 2 |
| 2850 | 4 | 4 | 3 |

---

## 3. 부서별 급여 순위 및 이전/다음 값 분석 실전 SQL

```sql
-- 부서별로 급여가 높은 순서대로 순위를 매기고, 바로 앞 사원과의 급여 차이 계산
SELECT 
    deptno, 
    ename, 
    sal,
    ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC) AS row_num,
    RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk,
    LAG(sal, 1) OVER (PARTITION BY deptno ORDER BY sal DESC) AS prev_sal
FROM emp;
```
',
  '<p>행의 집합(Window)을 대상으로 각 행마다 분석 집계 결과를 계산해 내는 고급 분석 도구인 **SQL 윈도우 함수(Window Functions)**를 학습합니다.</p>
<hr>
<h2>1. 윈도우 함수 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Window Function</strong>: 행과 행 간의 관계를 정의하여 집계, 순위, 비율, 순서 등을 원본 행 수 보존 상태에서 연산해 내는 고급 SQL 구문입니다.</li>
<li><strong><code>OVER()</code> 절</strong>: 윈도우 함수의 연산 대상을 지정하는 필수 절로, 내부에서 <code>PARTITION BY</code>와 <code>ORDER BY</code>를 조합합니다.</li>
<li><strong><code>PARTITION BY</code></strong>: 윈도우 연산을 적용할 전체 행을 소그룹으로 분할하는 그룹핑 절입니다. (GROUP BY와 달리 결과 행을 하나로 축약하지 않음)</li>
<li><strong><code>ROW_NUMBER()</code></strong>: 동일한 값이 존재해도 무조건 유일한 연번(1, 2, 3, 4)을 순차적으로 부여하는 순위 함수입니다.</li>
<li><strong><code>RANK()</code></strong>: 동률 값이 존재할 경우 동일한 순위를 부여하고, 그 다음 순위를 동률 수만큼 건너뛰는 함수입니다. (예: 1, 2, 2, 4)</li>
<li><strong><code>DENSE_RANK()</code></strong>: 동률 값이 존재해도 다음 순위를 건너뛰지 않고 빽빽하게 이어 붙이는 함수입니다. (예: 1, 2, 2, 3)</li>
</ul>
<hr>
<h2>2. 3대 순위 함수 차이점 비교표</h2>
<table>
<thead>
<tr>
<th align="center">입력 급여 데이터</th>
<th align="center">ROW_NUMBER()</th>
<th align="center">RANK()</th>
<th align="center">DENSE_RANK()</th>
</tr>
</thead>
<tbody><tr>
<td align="center">5000</td>
<td align="center">1</td>
<td align="center">1</td>
<td align="center">1</td>
</tr>
<tr>
<td align="center">3000</td>
<td align="center">2</td>
<td align="center">2</td>
<td align="center">2</td>
</tr>
<tr>
<td align="center">3000</td>
<td align="center">3</td>
<td align="center">2</td>
<td align="center">2</td>
</tr>
<tr>
<td align="center">2850</td>
<td align="center">4</td>
<td align="center">4</td>
<td align="center">3</td>
</tr>
</tbody></table>
<hr>
<h2>3. 부서별 급여 순위 및 이전/다음 값 분석 실전 SQL</h2>
<pre><code class="language-sql">-- 부서별로 급여가 높은 순서대로 순위를 매기고, 바로 앞 사원과의 급여 차이 계산
SELECT 
    deptno, 
    ename, 
    sal,
    ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC) AS row_num,
    RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk,
    LAG(sal, 1) OVER (PARTITION BY deptno ORDER BY sal DESC) AS prev_sal
FROM emp;
</code></pre>
',
  'published',
  'SQL 윈도우 함수 - OVER(PARTITION BY ORDER BY), ROW_NUMBER, RANK, DENSE_RANK',
  '행과 행 간의 관계를 분석하는 SQL 윈도우 함수, OVER 절, PARTITION BY, ORDER BY, 순위 함수(ROW_NUMBER, RANK, DENSE_RANK) 및 이동 집계를 배웁니다.',
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
