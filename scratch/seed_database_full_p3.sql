-- Full Database Mega Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch09-sql-multi-table-joins',
  'SQL 테이블 조인(JOIN) 총정리: INNER JOIN, LEFT/RIGHT OUTER JOIN, FULL OUTER JOIN 및 SELF JOIN',
  '관계형 데이터베이스의 꽃인 테이블 조인(JOIN)의 다양한 종류(내부 조인, 외부 조인, 교차 조인, 자체 조인)와 ON 구문의 결합 조건을 시각적으로 학습합니다.',
  '분산된 여러 테이블을 릴레이션 관계 키로 결합하여 하나의 통합된 결과셋을 만들어 내는 **SQL 조인(JOIN)**의 모든 형태를 총정리합니다.

---

## 1. 조인(JOIN)의 시각적 형태 및 분류

```
[INNER JOIN]         [LEFT OUTER JOIN]       [FULL OUTER JOIN]
  +---+---+             +---+---+               +---+---+
  | A | B |             | A | B |               | A | B |
  +---+---+             +---+---+               +---+---+
    (교집합)           (A전체 + B교집합)        (A와 B 전체)
```

---

## 2. 4가지 핵심 조인 쿼리 실습

```sql
-- 1. INNER JOIN (사원과 부서 정보 결합)
SELECT e.empno, e.ename, d.dname, d.loc
FROM emp e
INNER JOIN dept d ON e.deptno = d.deptno;

-- 2. LEFT OUTER JOIN (부서에 사원이 없어도 부서 정보 유지)
SELECT d.deptno, d.dname, e.ename
FROM dept d
LEFT OUTER JOIN emp e ON d.deptno = e.deptno;

-- 3. SELF JOIN (사원과 매니저 이름 연동 조회)
SELECT e.ename AS 사원이름, m.ename AS 매니저이름
FROM emp e
LEFT OUTER JOIN emp m ON e.mgr = m.empno;
```
',
  '<p>분산된 여러 테이블을 릴레이션 관계 키로 결합하여 하나의 통합된 결과셋을 만들어 내는 **SQL 조인(JOIN)**의 모든 형태를 총정리합니다.</p>
<hr>
<h2>1. 조인(JOIN)의 시각적 형태 및 분류</h2>
<pre><code>[INNER JOIN]         [LEFT OUTER JOIN]       [FULL OUTER JOIN]
  +---+---+             +---+---+               +---+---+
  | A | B |             | A | B |               | A | B |
  +---+---+             +---+---+               +---+---+
    (교집합)           (A전체 + B교집합)        (A와 B 전체)
</code></pre>
<hr>
<h2>2. 4가지 핵심 조인 쿼리 실습</h2>
<pre><code class="language-sql">-- 1. INNER JOIN (사원과 부서 정보 결합)
SELECT e.empno, e.ename, d.dname, d.loc
FROM emp e
INNER JOIN dept d ON e.deptno = d.deptno;

-- 2. LEFT OUTER JOIN (부서에 사원이 없어도 부서 정보 유지)
SELECT d.deptno, d.dname, e.ename
FROM dept d
LEFT OUTER JOIN emp e ON d.deptno = e.deptno;

-- 3. SELF JOIN (사원과 매니저 이름 연동 조회)
SELECT e.ename AS 사원이름, m.ename AS 매니저이름
FROM emp e
LEFT OUTER JOIN emp m ON e.mgr = m.empno;
</code></pre>
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
  '메인 쿼리(Main Query) 내부에 포함되는 하위 쿼리인 **서브쿼리(Subquery)**의 종류와 **상관 서브쿼리(Correlated Subquery)** 및 **EXISTS** 연산자를 배웁니다.

---

## 1. 상관 서브쿼리 vs 비상관 서브쿼리 비교

- **비상관 서브쿼리 (Uncorrelated Subquery)**: 메인 쿼리와 독립적으로 먼저 단 1회 실행되어 결과값을 메인 쿼리에 전달하는 방식입니다.
- **상관 서브쿼리 (Correlated Subquery)**: 메인 쿼리의 각 행(Row)을 하나씩 읽을 때마다 메인 쿼리의 값을 서브쿼리 내부 조건식에 전달하여 반 복적으로 실행되는 방식입니다.

---

## 2. EXISTS 및 상관 서브쿼리 예제

```sql
-- 자신이 속한 부서의 평균 급여보다 많은 급여를 받는 사원 조회 (상관 서브쿼리)
SELECT e.empno, e.ename, e.sal, e.deptno
FROM emp e
WHERE e.sal > (
    SELECT AVG(sub.sal)
    FROM emp sub
    WHERE sub.deptno = e.deptno
);

-- 소속 사원이 최소 1명 이상 존재하는 부서 정보 조회 (EXISTS)
SELECT d.deptno, d.dname
FROM dept d
WHERE EXISTS (
    SELECT 1 
    FROM emp e 
    WHERE e.deptno = d.deptno
);
```
',
  '<p>메인 쿼리(Main Query) 내부에 포함되는 하위 쿼리인 **서브쿼리(Subquery)**의 종류와 <strong>상관 서브쿼리(Correlated Subquery)</strong> 및 <strong>EXISTS</strong> 연산자를 배웁니다.</p>
<hr>
<h2>1. 상관 서브쿼리 vs 비상관 서브쿼리 비교</h2>
<ul>
<li><strong>비상관 서브쿼리 (Uncorrelated Subquery)</strong>: 메인 쿼리와 독립적으로 먼저 단 1회 실행되어 결과값을 메인 쿼리에 전달하는 방식입니다.</li>
<li><strong>상관 서브쿼리 (Correlated Subquery)</strong>: 메인 쿼리의 각 행(Row)을 하나씩 읽을 때마다 메인 쿼리의 값을 서브쿼리 내부 조건식에 전달하여 반 복적으로 실행되는 방식입니다.</li>
</ul>
<hr>
<h2>2. EXISTS 및 상관 서브쿼리 예제</h2>
<pre><code class="language-sql">-- 자신이 속한 부서의 평균 급여보다 많은 급여를 받는 사원 조회 (상관 서브쿼리)
SELECT e.empno, e.ename, e.sal, e.deptno
FROM emp e
WHERE e.sal &gt; (
    SELECT AVG(sub.sal)
    FROM emp sub
    WHERE sub.deptno = e.deptno
);

-- 소속 사원이 최소 1명 이상 존재하는 부서 정보 조회 (EXISTS)
SELECT d.deptno, d.dname
FROM dept d
WHERE EXISTS (
    SELECT 1 
    FROM emp e 
    WHERE e.deptno = d.deptno
);
</code></pre>
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
  '데이터베이스 테이블의 데이터를 직접 변경하는 **DML(Data Manipulation Language)**인 **INSERT, UPDATE, DELETE** 및 **MERGE (UPSERT)** 문법을 학습합니다.',
  '<p>데이터베이스 테이블의 데이터를 직접 변경하는 **DML(Data Manipulation Language)**인 <strong>INSERT, UPDATE, DELETE</strong> 및 <strong>MERGE (UPSERT)</strong> 문법을 학습합니다.</p>
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
  '행의 집합(Window)을 대상으로 각 행마다 분석 집계 결과를 계산해 내는 고급 분석 도구인 **SQL 윈도우 함수(Window Functions)**를 학습합니다.',
  '<p>행의 집합(Window)을 대상으로 각 행마다 분석 집계 결과를 계산해 내는 고급 분석 도구인 **SQL 윈도우 함수(Window Functions)**를 학습합니다.</p>
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
