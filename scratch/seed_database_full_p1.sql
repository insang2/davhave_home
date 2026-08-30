-- Full Database Mega Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch01-database-concepts-and-architecture',
  '데이터와 정보, DBMS의 필연성과 ANSI-SPARC 3단계 데이터베이스 아키텍처',
  '방대한 데이터를 체계적으로 관리하기 위한 데이터베이스의 기본 개념과 기존 파일 시스템의 한계, 그리고 ANSI-SPARC 3단계 구조와 데이터 독립성을 배웁니다.',
  '현대 정보 사회의 핵심 자산인 **데이터(Data)**와 이를 가공한 **정보(Information)**의 차이를 이해하고, 데이터를 안전하고 효율적으로 보관·조회하기 위한 **데이터베이스 관리 시스템(DBMS: Database Management System)**의 아키텍처를 다룹니다.

---

## 1. 데이터베이스 핵심 전문 용어 사전 (Glossary)

- **Data (데이터)**: 관찰이나 측정을 통해 수집된 가공되지 않은 순수한 사실(Raw Fact)이나 값입니다.
- **Information (정보)**: 데이터를 특정 목적에 맞게 수집, 정제, 가공하여 의사결정에 유의미하게 활용할 수 있도록 만든 결과물입니다.
- **File System (파일 시스템)**: 데이터를 별도의 관리 엔진 없이 OS 파일 단위로 관리하는 방식으로, 데이터 중복성(Redundancy)과 불일치성(Inconsistency)의 치명적 한계가 존재합니다.
- **DBMS (Database Management System)**: 대용량 데이터를 공유 저장하고 사용자 및 애플리케이션의 요청에 따라 검색, 수정, 관리를 안전하게 수행하는 전용 소프트웨어입니다. (예: Oracle, MySQL, PostgreSQL)
- **ANSI-SPARC 3-Schema Architecture**: 데이터베이스 시스템의 복잡성을 숨기고 데이터 독립성을 보증하기 위해 데이터베이스 구조를 3단계(외부, 개념, 내부)로 추상화한 표준 모델입니다.
- **Data Independence (데이터 독립성)**: 하위 단계의 데이터 구조가 변경되더라도 상위 단계의 응용 프로그램이나 뷰에 영향을 주지 않는 성질입니다. (논리적 데이터 독립성 & 물리적 데이터 독립성)

---

## 2. 데이터와 정보의 변환 연산 파이프라인

데이터가 의미 있는 정보로 변환되는 프로세스는 다음과 같은 정보 처리 시스템(Information Processing System) 파이프라인을 거칩니다.

```
+------------------+        +--------------------------+        +------------------+
|   Raw Data       |  --->  | Processing & Analytics   |  --->  |   Information    |
| (원천 데이터)    |        | (데이터 정제 / DBMS 연산)|        | (유의미한 정보)  |
+------------------+        +--------------------------+        +------------------+
```

1. **원천 데이터 수집**: 센서, 사용자 결제 내역, 로그 등 관측된 텍스트/숫자 데이터 수집
2. **DBMS 가공 연산**: SQL 쿼리를 활용한 집계, 필터링, 그룹화 연산 수행
3. **정보 창출 및 의사결정**: "지난달 매출 1위 상품"과 같은 직관적 인사이트 도출

---

## 3. 파일 시스템 vs DBMS 비교 분석

| 비교 항목 | 파일 시스템 (File System) | 데이터베이스 관리 시스템 (DBMS) |
| :--- | :--- | :--- |
| **데이터 저장 방식** | 애플리케이션마다 개별 텍스트/바이너리 파일로 독립 저장 | 중앙 집중식 공유 데이터베이스에 통합 저장 |
| **데이터 중복성** | 동일한 데이터가 여러 파일에 중복 존재 (메모리 낭비) | 중복을 최소화하여 정규화(Normalization) 관리 |
| **데이터 무결성** | 파일 수정 시 데이터 간 불일치(Inconsistency) 발생 위험 | 무결성 제약조건(Integrity Constraints)으로 엄격 보장 |
| **동시 접근 제어** | 여러 사용자/앱 동시 접근 시 파일 락(Lock) 충돌 발생 | 트랜잭션 동시성 제어(Concurrency Control) 지원 |
| **보안 및 권한** | 파일 단위의 단순 OS 권한 관리만 가능 | 사용자 및 테이블/컬럼 단위 세부 DCL 권한 제어 |
| **장애 복구** | 파일 훼손 시 복구가 어렵거나 수동 복구 필요 | 트랜잭션 로그 기반 자동 회복(Recovery) 메커니즘 제공 |

---

## 4. ANSI-SPARC 3단계 데이터베이스 아키텍처

ANSI-SPARC 표준 구조는 데이터베이스의 내부 표현 방식을 3개 레벨로 나눕니다.

```
                     +---------------------------------------+
                     |    External Level (외부 단계)         |
                     |  (User View 1)  (User View 2) ...     |
                     +---------------------------------------+
                                         |
                       [ Logical Data Independence ]
                                         |
                     +---------------------------------------+
                     |    Conceptual Level (개념 단계)       |
                     |  (Global Schema: 전체 논리 구조)      |
                     +---------------------------------------+
                                         |
                       [ Physical Data Independence ]
                                         |
                     +---------------------------------------+
                     |    Internal Level (내부 단계)         |
                     |  (Internal Schema: 디스크 저장 구조)  |
                     +---------------------------------------+
```

1. **External Level (외부 단계 / 사용자 뷰)**:
   - 각 사용자나 응용 프로그램의 입장에서 필요한 데이터만 보여주는 개별 사용자 뷰(User View)입니다.
2. **Conceptual Level (개념 단계 / 개념 스키마)**:
   - 데이터베이스 전체의 논리적 구조를 정의하는 전체 스키마(Global Schema)입니다.
3. **Internal Level (내부 단계 / 내부 스키마)**:
   - 실제 물리적 저장 장치(SSD/HDD)에 데이터가 어떻게 저장되는지 나타내는 물리적 저장 구조(Physical Schema)입니다.

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 스키마(Schema)와 인스턴스(Instance)의 차이는 무엇인가요?**
A. 스키마는 데이터베이스의 구조와 제약조건을 정의한 정적인 틀(Blueprint)이며, 인스턴스는 특정 시점에 데이터베이스에 실제로 저장되어 있는 동적인 데이터 값들의 집합입니다.
',
  '<p>현대 정보 사회의 핵심 자산인 **데이터(Data)**와 이를 가공한 **정보(Information)**의 차이를 이해하고, 데이터를 안전하고 효율적으로 보관·조회하기 위한 **데이터베이스 관리 시스템(DBMS: Database Management System)**의 아키텍처를 다룹니다.</p>
<hr>
<h2>1. 데이터베이스 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Data (데이터)</strong>: 관찰이나 측정을 통해 수집된 가공되지 않은 순수한 사실(Raw Fact)이나 값입니다.</li>
<li><strong>Information (정보)</strong>: 데이터를 특정 목적에 맞게 수집, 정제, 가공하여 의사결정에 유의미하게 활용할 수 있도록 만든 결과물입니다.</li>
<li><strong>File System (파일 시스템)</strong>: 데이터를 별도의 관리 엔진 없이 OS 파일 단위로 관리하는 방식으로, 데이터 중복성(Redundancy)과 불일치성(Inconsistency)의 치명적 한계가 존재합니다.</li>
<li><strong>DBMS (Database Management System)</strong>: 대용량 데이터를 공유 저장하고 사용자 및 애플리케이션의 요청에 따라 검색, 수정, 관리를 안전하게 수행하는 전용 소프트웨어입니다. (예: Oracle, MySQL, PostgreSQL)</li>
<li><strong>ANSI-SPARC 3-Schema Architecture</strong>: 데이터베이스 시스템의 복잡성을 숨기고 데이터 독립성을 보증하기 위해 데이터베이스 구조를 3단계(외부, 개념, 내부)로 추상화한 표준 모델입니다.</li>
<li><strong>Data Independence (데이터 독립성)</strong>: 하위 단계의 데이터 구조가 변경되더라도 상위 단계의 응용 프로그램이나 뷰에 영향을 주지 않는 성질입니다. (논리적 데이터 독립성 &amp; 물리적 데이터 독립성)</li>
</ul>
<hr>
<h2>2. 데이터와 정보의 변환 연산 파이프라인</h2>
<p>데이터가 의미 있는 정보로 변환되는 프로세스는 다음과 같은 정보 처리 시스템(Information Processing System) 파이프라인을 거칩니다.</p>
<pre><code>+------------------+        +--------------------------+        +------------------+
|   Raw Data       |  ---&gt;  | Processing &amp; Analytics   |  ---&gt;  |   Information    |
| (원천 데이터)    |        | (데이터 정제 / DBMS 연산)|        | (유의미한 정보)  |
+------------------+        +--------------------------+        +------------------+
</code></pre>
<ol>
<li><strong>원천 데이터 수집</strong>: 센서, 사용자 결제 내역, 로그 등 관측된 텍스트/숫자 데이터 수집</li>
<li><strong>DBMS 가공 연산</strong>: SQL 쿼리를 활용한 집계, 필터링, 그룹화 연산 수행</li>
<li><strong>정보 창출 및 의사결정</strong>: &quot;지난달 매출 1위 상품&quot;과 같은 직관적 인사이트 도출</li>
</ol>
<hr>
<h2>3. 파일 시스템 vs DBMS 비교 분석</h2>
<table>
<thead>
<tr>
<th align="left">비교 항목</th>
<th align="left">파일 시스템 (File System)</th>
<th align="left">데이터베이스 관리 시스템 (DBMS)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>데이터 저장 방식</strong></td>
<td align="left">애플리케이션마다 개별 텍스트/바이너리 파일로 독립 저장</td>
<td align="left">중앙 집중식 공유 데이터베이스에 통합 저장</td>
</tr>
<tr>
<td align="left"><strong>데이터 중복성</strong></td>
<td align="left">동일한 데이터가 여러 파일에 중복 존재 (메모리 낭비)</td>
<td align="left">중복을 최소화하여 정규화(Normalization) 관리</td>
</tr>
<tr>
<td align="left"><strong>데이터 무결성</strong></td>
<td align="left">파일 수정 시 데이터 간 불일치(Inconsistency) 발생 위험</td>
<td align="left">무결성 제약조건(Integrity Constraints)으로 엄격 보장</td>
</tr>
<tr>
<td align="left"><strong>동시 접근 제어</strong></td>
<td align="left">여러 사용자/앱 동시 접근 시 파일 락(Lock) 충돌 발생</td>
<td align="left">트랜잭션 동시성 제어(Concurrency Control) 지원</td>
</tr>
<tr>
<td align="left"><strong>보안 및 권한</strong></td>
<td align="left">파일 단위의 단순 OS 권한 관리만 가능</td>
<td align="left">사용자 및 테이블/컬럼 단위 세부 DCL 권한 제어</td>
</tr>
<tr>
<td align="left"><strong>장애 복구</strong></td>
<td align="left">파일 훼손 시 복구가 어렵거나 수동 복구 필요</td>
<td align="left">트랜잭션 로그 기반 자동 회복(Recovery) 메커니즘 제공</td>
</tr>
</tbody></table>
<hr>
<h2>4. ANSI-SPARC 3단계 데이터베이스 아키텍처</h2>
<p>ANSI-SPARC 표준 구조는 데이터베이스의 내부 표현 방식을 3개 레벨로 나눕니다.</p>
<pre><code>                     +---------------------------------------+
                     |    External Level (외부 단계)         |
                     |  (User View 1)  (User View 2) ...     |
                     +---------------------------------------+
                                         |
                       [ Logical Data Independence ]
                                         |
                     +---------------------------------------+
                     |    Conceptual Level (개념 단계)       |
                     |  (Global Schema: 전체 논리 구조)      |
                     +---------------------------------------+
                                         |
                       [ Physical Data Independence ]
                                         |
                     +---------------------------------------+
                     |    Internal Level (내부 단계)         |
                     |  (Internal Schema: 디스크 저장 구조)  |
                     +---------------------------------------+
</code></pre>
<ol>
<li><strong>External Level (외부 단계 / 사용자 뷰)</strong>:<ul>
<li>각 사용자나 응용 프로그램의 입장에서 필요한 데이터만 보여주는 개별 사용자 뷰(User View)입니다.</li>
</ul>
</li>
<li><strong>Conceptual Level (개념 단계 / 개념 스키마)</strong>:<ul>
<li>데이터베이스 전체의 논리적 구조를 정의하는 전체 스키마(Global Schema)입니다.</li>
</ul>
</li>
<li><strong>Internal Level (내부 단계 / 내부 스키마)</strong>:<ul>
<li>실제 물리적 저장 장치(SSD/HDD)에 데이터가 어떻게 저장되는지 나타내는 물리적 저장 구조(Physical Schema)입니다.</li>
</ul>
</li>
</ol>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 스키마(Schema)와 인스턴스(Instance)의 차이는 무엇인가요?</strong>
A. 스키마는 데이터베이스의 구조와 제약조건을 정의한 정적인 틀(Blueprint)이며, 인스턴스는 특정 시점에 데이터베이스에 실제로 저장되어 있는 동적인 데이터 값들의 집합입니다.</p>
',
  'published',
  '데이터베이스 개요 - 데이터 vs 정보, DBMS 필요성 & ANSI-SPARC 3단계 아키텍처',
  '데이터와 정보의 차이점, 파일 시스템의 한계(데이터 중복성, 불일치성), DBMS 도입 필요성, ANSI-SPARC 3단계 데이터베이스 아키텍처(외부, 개념, 내부 단계) 및 데이터 독립성을 배웁니다.',
  1,
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
  'ch02-relational-data-model-and-keys',
  '관계형 데이터 모델: 릴레이션(Relation), 차수와 카디널리티, 후보키/기본키/외래키 구조',
  '관계형 데이터베이스(RDB)의 수학적 기초인 릴레이션 구조와 튜플, 속성, 그리고 데이터의 식별과 참조를 담당하는 다양한 키(Key)의 개념과 특징을 배웁니다.',
  '1970년 에드가 F. 코드(E.F. Codd) 박사가 수학의 집합론(Set Theory)을 기반으로 제안한 **관계형 데이터 모델(Relational Data Model)**과 릴레이션 구조 및 **키(Key)**의 종류를 학습합니다.

---

## 1. 관계형 모델 핵심 전문 용어 사전 (Glossary)

- **Relation (릴레이션)**: 행(Row)과 열(Column)로 구성된 2차원 테이블 데이터 구조입니다.
- **Tuple (튜플)**: 릴레이션의 각 행(Row)을 의미하며, 하나의 실체(Entity)에 대한 속성 값들의 집합입니다.
- **Attribute (속성)**: 릴레이션의 각 열(Column)을 의미하며, 데이터의 특성 및 개별 세부 항목을 나타냅니다.
- **Domain (도메인)**: 릴레이션의 특정 속성(Attribute)이 가질 수 있는 원자값(Atomic Value)들의 합법적인 범위 및 타입입니다.
- **Degree (차수)**: 한 릴레이션에 존재하는 속성(Attribute)의 총 개수입니다.
- **Cardinality (카디널리티)**: 한 릴레이션에 존재하는 튜플(Tuple)의 총 개수입니다.
- **Super Key (슈퍼키)**: 릴레이션 내의 튜플을 유일하게 식별할 수 있는 하나 이상의 속성 집합입니다. (유일성 만족)
- **Candidate Key (후보키)**: 튜플을 유일하게 식별할 수 있는 최소한의 속성 집합입니다. (유일성 + 최소성 만족)
- **Primary Key (기본키 / PK)**: 후보키 중 선택된 대표 키로, `NULL` 값을 가질 수 없으며 중복될 수 없습니다.
- **Foreign Key (외래키 / FK)**: 다른 릴레이션의 기본키를 참조하는 속성으로, 릴레이션 간의 관계를 형성합니다.

---

## 2. 릴레이션 구조 상세 명세도

```
릴레이션 이름: 학생 (Student)
+--------------+---------------+------------------+--------------+  <-- 속성 (Attribute)
| 학번 (std_id)| 이름 (name)   | 학과 (department)| 학년 (grade) |  (차수 Degree = 4)
+--------------+---------------+------------------+--------------+
| 2026001      | 홍길동        | 컴퓨터공학과     | 3            |  <-- 튜플 (Tuple 1)
| 2026002      | 이순신        | 소프트웨어학과   | 2            |  <-- 튜플 (Tuple 2)
| 2026003      | 강감찬        | 인공지능학과     | 4            |  <-- 튜플 (Tuple 3)
+--------------+---------------+------------------+--------------+
                                                                     (카디널리티 Cardinality = 3)
```

---

## 3. 다양한 키(Key)의 계층 관계 및 분류

| 키 종류 | 유일성 (Uniqueness) | 최소성 (Minimality) | NULL 허용 여부 | 핵심 기능 및 설명 |
| :--- | :---: | :---: | :---: | :--- |
| **슈퍼키 (Super Key)** | O | X | X | 튜플을 유일하게 구별할 수만 있으면 되는 속성 집합 |
| **후보키 (Candidate Key)** | O | O | X | 튜플을 유일하게 구별하며 최소성을 만족하는 속성 집합 |
| **기본키 (Primary Key)** | O | O | **불가 (NOT NULL)** | 후보키 중 DB 설계자가 선택한 대표 식별자 키 |
| **대체키 (Alternate Key)** | O | O | X | 후보키 중 기본키로 선택되지 못한 남은 후보키들 |
| **외래키 (Foreign Key)** | X | X | **허용 (NULL 가능)** | 다른 참조 릴레이션의 기본키(PK)를 가리켜 테이블 간 연결 구축 |
',
  '<p>1970년 에드가 F. 코드(E.F. Codd) 박사가 수학의 집합론(Set Theory)을 기반으로 제안한 **관계형 데이터 모델(Relational Data Model)**과 릴레이션 구조 및 **키(Key)**의 종류를 학습합니다.</p>
<hr>
<h2>1. 관계형 모델 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Relation (릴레이션)</strong>: 행(Row)과 열(Column)로 구성된 2차원 테이블 데이터 구조입니다.</li>
<li><strong>Tuple (튜플)</strong>: 릴레이션의 각 행(Row)을 의미하며, 하나의 실체(Entity)에 대한 속성 값들의 집합입니다.</li>
<li><strong>Attribute (속성)</strong>: 릴레이션의 각 열(Column)을 의미하며, 데이터의 특성 및 개별 세부 항목을 나타냅니다.</li>
<li><strong>Domain (도메인)</strong>: 릴레이션의 특정 속성(Attribute)이 가질 수 있는 원자값(Atomic Value)들의 합법적인 범위 및 타입입니다.</li>
<li><strong>Degree (차수)</strong>: 한 릴레이션에 존재하는 속성(Attribute)의 총 개수입니다.</li>
<li><strong>Cardinality (카디널리티)</strong>: 한 릴레이션에 존재하는 튜플(Tuple)의 총 개수입니다.</li>
<li><strong>Super Key (슈퍼키)</strong>: 릴레이션 내의 튜플을 유일하게 식별할 수 있는 하나 이상의 속성 집합입니다. (유일성 만족)</li>
<li><strong>Candidate Key (후보키)</strong>: 튜플을 유일하게 식별할 수 있는 최소한의 속성 집합입니다. (유일성 + 최소성 만족)</li>
<li><strong>Primary Key (기본키 / PK)</strong>: 후보키 중 선택된 대표 키로, <code>NULL</code> 값을 가질 수 없으며 중복될 수 없습니다.</li>
<li><strong>Foreign Key (외래키 / FK)</strong>: 다른 릴레이션의 기본키를 참조하는 속성으로, 릴레이션 간의 관계를 형성합니다.</li>
</ul>
<hr>
<h2>2. 릴레이션 구조 상세 명세도</h2>
<pre><code>릴레이션 이름: 학생 (Student)
+--------------+---------------+------------------+--------------+  &lt;-- 속성 (Attribute)
| 학번 (std_id)| 이름 (name)   | 학과 (department)| 학년 (grade) |  (차수 Degree = 4)
+--------------+---------------+------------------+--------------+
| 2026001      | 홍길동        | 컴퓨터공학과     | 3            |  &lt;-- 튜플 (Tuple 1)
| 2026002      | 이순신        | 소프트웨어학과   | 2            |  &lt;-- 튜플 (Tuple 2)
| 2026003      | 강감찬        | 인공지능학과     | 4            |  &lt;-- 튜플 (Tuple 3)
+--------------+---------------+------------------+--------------+
                                                                     (카디널리티 Cardinality = 3)
</code></pre>
<hr>
<h2>3. 다양한 키(Key)의 계층 관계 및 분류</h2>
<table>
<thead>
<tr>
<th align="left">키 종류</th>
<th align="center">유일성 (Uniqueness)</th>
<th align="center">최소성 (Minimality)</th>
<th align="center">NULL 허용 여부</th>
<th align="left">핵심 기능 및 설명</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>슈퍼키 (Super Key)</strong></td>
<td align="center">O</td>
<td align="center">X</td>
<td align="center">X</td>
<td align="left">튜플을 유일하게 구별할 수만 있으면 되는 속성 집합</td>
</tr>
<tr>
<td align="left"><strong>후보키 (Candidate Key)</strong></td>
<td align="center">O</td>
<td align="center">O</td>
<td align="center">X</td>
<td align="left">튜플을 유일하게 구별하며 최소성을 만족하는 속성 집합</td>
</tr>
<tr>
<td align="left"><strong>기본키 (Primary Key)</strong></td>
<td align="center">O</td>
<td align="center">O</td>
<td align="center"><strong>불가 (NOT NULL)</strong></td>
<td align="left">후보키 중 DB 설계자가 선택한 대표 식별자 키</td>
</tr>
<tr>
<td align="left"><strong>대체키 (Alternate Key)</strong></td>
<td align="center">O</td>
<td align="center">O</td>
<td align="center">X</td>
<td align="left">후보키 중 기본키로 선택되지 못한 남은 후보키들</td>
</tr>
<tr>
<td align="left"><strong>외래키 (Foreign Key)</strong></td>
<td align="center">X</td>
<td align="center">X</td>
<td align="center"><strong>허용 (NULL 가능)</strong></td>
<td align="left">다른 참조 릴레이션의 기본키(PK)를 가리켜 테이블 간 연결 구축</td>
</tr>
</tbody></table>
',
  'published',
  '관계형 데이터 모델 - 릴레이션, 속성, 튜플, 차수, 카디널리티 & 키(Key) 종류',
  'E.F. Codd 박사가 제안한 관계형 데이터 모델(Relational Model), 릴레이션(Relation), 튜플(Tuple), 속성(Attribute), 차수(Degree), 카디널리티(Cardinality) 및 후보키, 기본키, 외래키, 대체키 개념을 완벽 해설합니다.',
  2,
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
  'ch03-integrity-constraints-and-rules',
  '무결성 제약조건(Integrity Constraints): 개체 무결성, 참조 무결성 및 도메인 제약조건',
  '데이터베이스에 저장된 데이터의 무결성과 정확성을 보장하기 위한 3대 무결성 제약조건과 외래키 연쇄 삭제/수정 옵션을 다룹니다.',
  '데이터베이스 내 데이터의 정확성, 일관성, 유효성을 유지하기 위한 **무결성 제약조건(Integrity Constraints)**의 원리와 참조 무결성 처리 행동 옵션을 다룹니다.

---

## 1. 무결성 핵심 전문 용어 사전 (Glossary)

- **Data Integrity (데이터 무결성)**: 데이터베이스에 저장된 데이터 값이 현실 세계의 실제 값과 일치하는 정확성 및 신뢰성을 의미합니다.
- **Entity Integrity (개체 무결성)**: 기본키(Primary Key)로 지정된 모든 속성은 튜플을 유일하게 식별해야 하므로, 절대로 `NULL` 값이나 중복값을 가질 수 없다는 규칙입니다.
- **Referential Integrity (참조 무결성)**: 외래키(Foreign Key) 값은 참조하는 부모 릴레이션의 기본키 값과 반드시 일치하거나, 아예 `NULL`이어야 한다는 규칙입니다.
- **Domain Integrity (도메인 무결성)**: 특정 속성의 값은 지정된 도메인에 속한 원자값이어야 한다는 규칙입니다.

---

## 2. 참조 무결성 연동 행동 옵션 정리표

| 옵션 키워드 | 부모 튜플 삭제 시 (ON DELETE) | 부모 튜플 수정 시 (ON UPDATE) |
| :--- | :--- | :--- |
| **RESTRICT / NO ACTION** | 자식 튜플이 참조 중이면 부모 삭제를 거부 | 자식 튜플이 참조 중이면 부모 수정 거부 |
| **CASCADE** | 부모 튜플 삭제 시 참조하는 자식 튜플도 연동 삭제 | 부모 기본키 수정 시 자식 외래키도 자동으로 수정 |
| **SET NULL** | 부모 튜플 삭제 시 자식 외래키 값을 `NULL`로 변경 | 부모 기본키 수정 시 자식 외래키 값을 `NULL`로 변경 |
',
  '<p>데이터베이스 내 데이터의 정확성, 일관성, 유효성을 유지하기 위한 **무결성 제약조건(Integrity Constraints)**의 원리와 참조 무결성 처리 행동 옵션을 다룹니다.</p>
<hr>
<h2>1. 무결성 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Data Integrity (데이터 무결성)</strong>: 데이터베이스에 저장된 데이터 값이 현실 세계의 실제 값과 일치하는 정확성 및 신뢰성을 의미합니다.</li>
<li><strong>Entity Integrity (개체 무결성)</strong>: 기본키(Primary Key)로 지정된 모든 속성은 튜플을 유일하게 식별해야 하므로, 절대로 <code>NULL</code> 값이나 중복값을 가질 수 없다는 규칙입니다.</li>
<li><strong>Referential Integrity (참조 무결성)</strong>: 외래키(Foreign Key) 값은 참조하는 부모 릴레이션의 기본키 값과 반드시 일치하거나, 아예 <code>NULL</code>이어야 한다는 규칙입니다.</li>
<li><strong>Domain Integrity (도메인 무결성)</strong>: 특정 속성의 값은 지정된 도메인에 속한 원자값이어야 한다는 규칙입니다.</li>
</ul>
<hr>
<h2>2. 참조 무결성 연동 행동 옵션 정리표</h2>
<table>
<thead>
<tr>
<th align="left">옵션 키워드</th>
<th align="left">부모 튜플 삭제 시 (ON DELETE)</th>
<th align="left">부모 튜플 수정 시 (ON UPDATE)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>RESTRICT / NO ACTION</strong></td>
<td align="left">자식 튜플이 참조 중이면 부모 삭제를 거부</td>
<td align="left">자식 튜플이 참조 중이면 부모 수정 거부</td>
</tr>
<tr>
<td align="left"><strong>CASCADE</strong></td>
<td align="left">부모 튜플 삭제 시 참조하는 자식 튜플도 연동 삭제</td>
<td align="left">부모 기본키 수정 시 자식 외래키도 자동으로 수정</td>
</tr>
<tr>
<td align="left"><strong>SET NULL</strong></td>
<td align="left">부모 튜플 삭제 시 자식 외래키 값을 <code>NULL</code>로 변경</td>
<td align="left">부모 기본키 수정 시 자식 외래키 값을 <code>NULL</code>로 변경</td>
</tr>
</tbody></table>
',
  'published',
  '데이터베이스 무결성 - 개체 무결성, 참조 무결성, 도메인 무결성 & 참조 행동',
  '데이터베이스의 정확성과 신뢰성을 지키는 무결성 제약조건, 개체 무결성, 참조 무결성, 도메인 무결성, ON DELETE / ON UPDATE 옵션을 배웁니다.',
  3,
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
  'ch04-relational-algebra-fundamental-operators',
  '관계대수(Relational Algebra) 기초 연산자: 셀렉트(σ), 프로젝트(π), 집합 연산(∪, ∩, -)',
  'SQL의 작동 원리를 수학적/절차적으로 표현하는 관계대수의 기본 연산자인 셀렉트, 프로젝트, 그리고 차수와 도메인이 동일할 때 수행되는 집합 연산자를 배웁니다.',
  '관계형 데이터베이스에서 원하는 데이터를 검색하기 위해 연산의 순서와 절차를 명시하는 **절차적 관계 언어인 관계대수(Relational Algebra)** 기초를 다룹니다.

---

## 1. 관계대수 기초 용어 사전 (Glossary)

- **Relational Algebra (관계대수)**: 릴레이션을 입력으로 받아 새로운 릴레이션을 생성해 내는 연산자들의 집합으로, 절차적 쿼리의 기준이 됩니다.
- **Select Operator ($sigma$)**: 릴레이션에서 특정 조건(Condition)을 만족하는 행(튜플)의 부분집합을 선택하는 단항 연산자입니다.
- **Project Operator ($pi$)**: 릴레이션에서 지정된 열(속성)의 부분집합만을 추출하는 단항 연산자입니다.
- **Union Compatible (합집합 호환성)**: 두 릴레이션 간에 집합 연산을 수행하기 위해 차수가 같고 대응하는 속성의 도메인이 동일해야 하는 전제 조건입니다.

---

## 2. 기초 관계대수 기호 및 수학적 표현 정리표

| 연산자 이름 | 대수 기호 | 의미 및 기능 | 예시 연산식 | SQL 대응 구문 |
| :--- | :---: | :--- | :--- | :--- |
| **셀렉트 (Select)** | $sigma$ | 조건식을 만족하는 행(튜플) 필터링 | $sigma_{grade=3}(Student)$ | `WHERE grade = 3` |
| **프로젝트 (Project)** | $pi$ | 지정한 열(속성)만 추출 | $pi_{name, dept}(Student)$ | `SELECT DISTINCT name, dept` |
| **합집합 (Union)** | $cup$ | 두 릴레이션의 튜플 합병 | $R cup S$ | `UNION` |
| **차집합 (Difference)** | $-$ | R에는 존재하고 S에는 없는 튜플 | $R - S$ | `EXCEPT / MINUS` |
',
  '<p>관계형 데이터베이스에서 원하는 데이터를 검색하기 위해 연산의 순서와 절차를 명시하는 <strong>절차적 관계 언어인 관계대수(Relational Algebra)</strong> 기초를 다룹니다.</p>
<hr>
<h2>1. 관계대수 기초 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Relational Algebra (관계대수)</strong>: 릴레이션을 입력으로 받아 새로운 릴레이션을 생성해 내는 연산자들의 집합으로, 절차적 쿼리의 기준이 됩니다.</li>
<li><strong>Select Operator ($sigma$)</strong>: 릴레이션에서 특정 조건(Condition)을 만족하는 행(튜플)의 부분집합을 선택하는 단항 연산자입니다.</li>
<li><strong>Project Operator ($pi$)</strong>: 릴레이션에서 지정된 열(속성)의 부분집합만을 추출하는 단항 연산자입니다.</li>
<li><strong>Union Compatible (합집합 호환성)</strong>: 두 릴레이션 간에 집합 연산을 수행하기 위해 차수가 같고 대응하는 속성의 도메인이 동일해야 하는 전제 조건입니다.</li>
</ul>
<hr>
<h2>2. 기초 관계대수 기호 및 수학적 표현 정리표</h2>
<table>
<thead>
<tr>
<th align="left">연산자 이름</th>
<th align="center">대수 기호</th>
<th align="left">의미 및 기능</th>
<th align="left">예시 연산식</th>
<th align="left">SQL 대응 구문</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>셀렉트 (Select)</strong></td>
<td align="center">$sigma$</td>
<td align="left">조건식을 만족하는 행(튜플) 필터링</td>
<td align="left">$sigma_{grade=3}(Student)$</td>
<td align="left"><code>WHERE grade = 3</code></td>
</tr>
<tr>
<td align="left"><strong>프로젝트 (Project)</strong></td>
<td align="center">$pi$</td>
<td align="left">지정한 열(속성)만 추출</td>
<td align="left">$pi_{name, dept}(Student)$</td>
<td align="left"><code>SELECT DISTINCT name, dept</code></td>
</tr>
<tr>
<td align="left"><strong>합집합 (Union)</strong></td>
<td align="center">$cup$</td>
<td align="left">두 릴레이션의 튜플 합병</td>
<td align="left">$R cup S$</td>
<td align="left"><code>UNION</code></td>
</tr>
<tr>
<td align="left"><strong>차집합 (Difference)</strong></td>
<td align="center">$-$</td>
<td align="left">R에는 존재하고 S에는 없는 튜플</td>
<td align="left">$R - S$</td>
<td align="left"><code>EXCEPT / MINUS</code></td>
</tr>
</tbody></table>
',
  'published',
  '관계대수 기초 - 셀렉트(σ), 프로젝트(π), 합집합(∪), 교집합(∩), 차집합(-)',
  '관계대수(Relational Algebra), 단항 연산자 셀렉트(σ), 프로젝트(π), 이항 집합 연산자(Union ∪, Intersection ∩, Difference -)의 연산 원리를 배웁니다.',
  4,
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
