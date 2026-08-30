-- Complete Database Master Lessons Part 4

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch13-views-and-indexes-b-tree-architecture',
  '가상 테이블 뷰(View)와 데이터베이스 인덱스 아키텍처: B-Tree & B+Tree 색인 메커니즘',
  '보안과 편의성을 제공하는 가상 테이블 뷰(View)와 데이터베이스 검색 속도를 비약적으로 향상시키는 B-Tree / B+Tree 인덱스 내부 구조를 심도 있게 다룹니다.',
  '자주 사용하는 복잡한 쿼리를 가상 테이블로 정의하는 **뷰(View)**와 데이터베이스 검색 속도를 극대화하는 **인덱스(Index) 아키텍처(B-Tree & B+Tree)**를 다룹니다.

---

## 1. 뷰와 인덱스 핵심 전문 용어 사전 (Glossary)

- **View (뷰)**: 하나 이상의 테이블을 기반으로 만들어진 물리적 데이터가 없는 **가상 테이블(Virtual Table)**입니다.
- **Index (인덱스)**: 테이블의 열(Column) 데이터에 대한 색인 위치 포인터를 B-Tree 구조로 구축하여 검색 속도를 $O(log N)$으로 높여주는 색인 구조입니다.
- **Clustered Index (클러스터드 인덱스)**: 테이블 당 단 1개만 존재하며, 인덱스의 리프 노드가 실제 테이블 데이터 페이지 자체를 물리적으로 정렬하여 관리하는 인덱스입니다.
- **Non-Clustered Index (넌클러스터드 인덱스)**: 테이블 당 여러 개 생성이 가능하며, 인덱스 리프 노드가 실제 데이터의 물리적 주소를 가리키는 인덱스 페이지입니다.

---

## 2. 인덱스 생성 및 뷰 정의 SQL 실전 예제

```sql
-- 뷰 생성
CREATE VIEW v_emp_dept20 AS
SELECT empno, ename, job, hiredate
FROM emp
WHERE deptno = 20;

-- 인덱스 생성
CREATE INDEX idx_emp_ename ON emp(ename);
```
',
  '<p>자주 사용하는 복잡한 쿼리를 가상 테이블로 정의하는 **뷰(View)**와 데이터베이스 검색 속도를 극대화하는 **인덱스(Index) 아키텍처(B-Tree &amp; B+Tree)**를 다룹니다.</p>
<hr>
<h2>1. 뷰와 인덱스 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>View (뷰)</strong>: 하나 이상의 테이블을 기반으로 만들어진 물리적 데이터가 없는 **가상 테이블(Virtual Table)**입니다.</li>
<li><strong>Index (인덱스)</strong>: 테이블의 열(Column) 데이터에 대한 색인 위치 포인터를 B-Tree 구조로 구축하여 검색 속도를 $O(log N)$으로 높여주는 색인 구조입니다.</li>
<li><strong>Clustered Index (클러스터드 인덱스)</strong>: 테이블 당 단 1개만 존재하며, 인덱스의 리프 노드가 실제 테이블 데이터 페이지 자체를 물리적으로 정렬하여 관리하는 인덱스입니다.</li>
<li><strong>Non-Clustered Index (넌클러스터드 인덱스)</strong>: 테이블 당 여러 개 생성이 가능하며, 인덱스 리프 노드가 실제 데이터의 물리적 주소를 가리키는 인덱스 페이지입니다.</li>
</ul>
<hr>
<h2>2. 인덱스 생성 및 뷰 정의 SQL 실전 예제</h2>
<pre><code class="language-sql">-- 뷰 생성
CREATE VIEW v_emp_dept20 AS
SELECT empno, ename, job, hiredate
FROM emp
WHERE deptno = 20;

-- 인덱스 생성
CREATE INDEX idx_emp_ename ON emp(ename);
</code></pre>
',
  'published',
  'DB 뷰 & 인덱스 아키텍처 - View 장단점, B-Tree & B+Tree 인덱스 & Clustered Index',
  '가상 테이블 뷰(View)의 장단점 및 인덱스(Index), B-Tree / B+Tree 아키텍처, 클러스터드(Clustered) vs 넌클러스터드 인덱스를 배웁니다.',
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
  'database',
  'ch14-database-design-erd-modeling',
  '데이터베이스 설계 1: 개념적 모델링과 ERD(Entity-Relationship Diagram) 엔티티/관계/카디널리티',
  '현실 세계의 요구사항을 직관적인 다이어그램으로 추상화하는 ERD 개념적 데이터 모델링과 엔티티, 속성, 관계 타입의 정의 및 매핑 규칙을 학습합니다.',
  '사용자의 요구사항 분석을 바탕으로 현실 세계의 정보 구조를 직관적인 그래픽 다이어그램으로 변환하는 **개념적 DB 설계(ERD 모델링)**를 학습합니다.

---

## 1. ERD 개념적 모델링 용어 사전 (Glossary)

- **Entity (엔티티 / 개체)**: 현실 세계에 독립적으로 존재하는 사물, 사람, 개념으로, 테이블(Table)로 변환되는 데이터 대상입니다.
- **Attribute (속성)**: 엔티티가 가진 고유한 특성이나 정보 항목으로, 컬럼(Column)으로 변환됩니다.
- **Relationship (관계)**: 엔티티 간의 논리적인 연관성으로, 외래키(FK) 제약조건으로 변환됩니다.
',
  '<p>사용자의 요구사항 분석을 바탕으로 현실 세계의 정보 구조를 직관적인 그래픽 다이어그램으로 변환하는 **개념적 DB 설계(ERD 모델링)**를 학습합니다.</p>
<hr>
<h2>1. ERD 개념적 모델링 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Entity (엔티티 / 개체)</strong>: 현실 세계에 독립적으로 존재하는 사물, 사람, 개념으로, 테이블(Table)로 변환되는 데이터 대상입니다.</li>
<li><strong>Attribute (속성)</strong>: 엔티티가 가진 고유한 특성이나 정보 항목으로, 컬럼(Column)으로 변환됩니다.</li>
<li><strong>Relationship (관계)</strong>: 엔티티 간의 논리적인 연관성으로, 외래키(FK) 제약조건으로 변환됩니다.</li>
</ul>
',
  'published',
  'DB 설계 1 - 개념적 설계, ERD 모델링, Entity, Attribute & Relationship',
  '개념적 데이터 설계, ERD(Entity-Relationship Diagram) 작성법, 개체(Entity), 속성(Attribute), 관계(Relationship), 카디널리티 표현법을 배웁니다.',
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
  'database',
  'ch15-normalization-anomalies-1nf-2nf-3nf-bcnf',
  '데이터베이스 설계 2: 정규화(Normalization)와 이상 현상(삽입/수정/삭제 이상), 1NF/2NF/3NF/BCNF',
  '잘못 설계된 릴레이션에서 발생하는 3대 이상 현상을 방지하기 위해 함수 종속성(Functional Dependency)을 기반으로 스키마를 분해하는 정규화 과정을 다룹니다.',
  '데이터베이스의 중복성을 제거하여 저장 공간을 절약하고 3대 이상 현상(Anomalies)을 예방하는 **정규화(Normalization)** 기술을 완벽 정리합니다.

---

## 1. 3대 이상 현상 (Anomalies)

- **Insertion Anomaly (삽입 이상)**: 원치 않는 불필요한 데이터를 함께 입력해야만 새 튜플을 추가할 수 있는 현상입니다.
- **Update Anomaly (수정 이상)**: 중복 저장된 데이터 중 일부 튜플만 수정하여 데이터 불일치가 발생하는 현상입니다.
- **Deletion Anomaly (삭제 이상)**: 특정 정보를 삭제할 때 연쇄 작용으로 유용한 다른 정보까지 함께 손실되는 현상입니다.

---

## 2. 정규화 단계별 규격 정리표

| 정규형 | 요건 및 달성 조건 | 제거하는 의존성 |
| :--- | :--- | :--- |
| **1NF** | 모든 속성의 값이 **원자값(Atomic Value)**이어야 함 | 다중값 속성 제거 |
| **2NF** | 1NF를 만족하고, **부분 함수 종속성** 제거 | 부분 기본키 종속 분리 |
| **3NF** | 2NF를 만족하고, **이행적 함수 종속성** 제거 | 간접 종속성 분리 |
| **BCNF** | 모든 결정자(Determinant)가 **후보키**여야 함 | 비후보키 결정자 분해 |
',
  '<p>데이터베이스의 중복성을 제거하여 저장 공간을 절약하고 3대 이상 현상(Anomalies)을 예방하는 <strong>정규화(Normalization)</strong> 기술을 완벽 정리합니다.</p>
<hr>
<h2>1. 3대 이상 현상 (Anomalies)</h2>
<ul>
<li><strong>Insertion Anomaly (삽입 이상)</strong>: 원치 않는 불필요한 데이터를 함께 입력해야만 새 튜플을 추가할 수 있는 현상입니다.</li>
<li><strong>Update Anomaly (수정 이상)</strong>: 중복 저장된 데이터 중 일부 튜플만 수정하여 데이터 불일치가 발생하는 현상입니다.</li>
<li><strong>Deletion Anomaly (삭제 이상)</strong>: 특정 정보를 삭제할 때 연쇄 작용으로 유용한 다른 정보까지 함께 손실되는 현상입니다.</li>
</ul>
<hr>
<h2>2. 정규화 단계별 규격 정리표</h2>
<table>
<thead>
<tr>
<th align="left">정규형</th>
<th align="left">요건 및 달성 조건</th>
<th align="left">제거하는 의존성</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>1NF</strong></td>
<td align="left">모든 속성의 값이 **원자값(Atomic Value)**이어야 함</td>
<td align="left">다중값 속성 제거</td>
</tr>
<tr>
<td align="left"><strong>2NF</strong></td>
<td align="left">1NF를 만족하고, <strong>부분 함수 종속성</strong> 제거</td>
<td align="left">부분 기본키 종속 분리</td>
</tr>
<tr>
<td align="left"><strong>3NF</strong></td>
<td align="left">2NF를 만족하고, <strong>이행적 함수 종속성</strong> 제거</td>
<td align="left">간접 종속성 분리</td>
</tr>
<tr>
<td align="left"><strong>BCNF</strong></td>
<td align="left">모든 결정자(Determinant)가 <strong>후보키</strong>여야 함</td>
<td align="left">비후보키 결정자 분해</td>
</tr>
</tbody></table>
',
  'published',
  'DB 정규화(Normalization) - 이상 현상(Anomalies), 함수 종속성 & 1NF/2NF/3NF/BCNF',
  '데이터 중복 제거와 이상 현상 방지를 위한 정규화(Normalization), 함수 종속성(FD), 1NF/2NF/3NF/BCNF 분해를 배웁니다.',
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
  'database',
  'ch16-database-security-dcl-and-access-control',
  '데이터베이스 관리와 보안: DCL(GRANT/REVOKE), 사용자 권한, 백업/복구 및 접근 제어',
  '데이터베이스에 대한 비인가 접근을 막는 사용자 계정 및 DCL 권한 제어(GRANT/REVOKE)와 시스템 장애 발생 시 데이터를 원상 복구하는 백업 전략을 학습합니다.',
  '데이터베이스 시스템을 안전하게 보호하기 위한 **보안 접근 제어(DCL: GRANT/REVOKE)**와 계정/롤(Role) 관리 및 **백업·복구(Backup & Recovery)** 전략을 다룹니다.

---

## 1. DCL 보안 핵심 전문 용어 사전 (Glossary)

- **DCL (Data Control Language)**: 데이터베이스 보안, 권한 부여, 객체 접근 제어를 담당하는 쿼리 언어입니다. (`GRANT`, `REVOKE`)
- **Role (롤)**: 다수의 사용자에게 공통 권한 묶음을 효율적으로 할당하기 위해 만든 권한 그룹 집합체입니다.

---

## 2. DCL 사용자 생성 및 권한 부여/회수 SQL

```sql
CREATE USER ''dev_user''@''%'' IDENTIFIED BY ''secure_password'';
GRANT SELECT, INSERT ON emp TO ''dev_user''@''%'';
REVOKE INSERT ON emp FROM ''dev_user''@''%'';
```
',
  '<p>데이터베이스 시스템을 안전하게 보호하기 위한 **보안 접근 제어(DCL: GRANT/REVOKE)**와 계정/롤(Role) 관리 및 <strong>백업·복구(Backup &amp; Recovery)</strong> 전략을 다룹니다.</p>
<hr>
<h2>1. DCL 보안 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>DCL (Data Control Language)</strong>: 데이터베이스 보안, 권한 부여, 객체 접근 제어를 담당하는 쿼리 언어입니다. (<code>GRANT</code>, <code>REVOKE</code>)</li>
<li><strong>Role (롤)</strong>: 다수의 사용자에게 공통 권한 묶음을 효율적으로 할당하기 위해 만든 권한 그룹 집합체입니다.</li>
</ul>
<hr>
<h2>2. DCL 사용자 생성 및 권한 부여/회수 SQL</h2>
<pre><code class="language-sql">CREATE USER &#39;dev_user&#39;@&#39;%&#39; IDENTIFIED BY &#39;secure_password&#39;;
GRANT SELECT, INSERT ON emp TO &#39;dev_user&#39;@&#39;%&#39;;
REVOKE INSERT ON emp FROM &#39;dev_user&#39;@&#39;%&#39;;
</code></pre>
',
  'published',
  'DB 관리와 보안 - DCL(GRANT/REVOKE), 사용자 계정, Role 관리 & 백업/복구',
  'DCL(GRANT, REVOKE), 역할(Role) 기반 접근 제어(RBAC), 데이터 백업 및 장애 복구 메커니즘을 배웁니다.',
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
