import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  // 1
  {
    order_index: 1,
    slug: 'ch01-database-concepts-and-architecture',
    title: '데이터와 정보, DBMS의 필연성과 ANSI-SPARC 3단계 데이터베이스 아키텍처',
    seo_title: '데이터베이스 개요 - 데이터 vs 정보, DBMS 필요성 & ANSI-SPARC 3단계 아키텍처',
    seo_description: '데이터와 정보의 차이점, 파일 시스템의 한계(데이터 중복성, 불일치성), DBMS 도입 필요성, ANSI-SPARC 3단계 데이터베이스 아키텍처(외부, 개념, 내부 단계) 및 데이터 독립성을 배웁니다.',
    excerpt: '방대한 데이터를 체계적으로 관리하기 위한 데이터베이스의 기본 개념과 기존 파일 시스템의 한계, 그리고 ANSI-SPARC 3단계 구조와 데이터 독립성을 배웁니다.',
    content_md: `현대 정보 사회의 핵심 자산인 **데이터(Data)**와 이를 가공한 **정보(Information)**의 차이를 이해하고, 데이터를 안전하고 효율적으로 보관·조회하기 위한 **데이터베이스 관리 시스템(DBMS: Database Management System)**의 아키텍처를 다룹니다.

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

\`\`\`
+------------------+        +--------------------------+        +------------------+
|   Raw Data       |  --->  | Processing & Analytics   |  --->  |   Information    |
| (원천 데이터)    |        | (데이터 정제 / DBMS 연산)|        | (유의미한 정보)  |
+------------------+        +--------------------------+        +------------------+
\`\`\`

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

\`\`\`
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
\`\`\`

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
`
  },
  // 2
  {
    order_index: 2,
    slug: 'ch02-relational-data-model-and-keys',
    title: '관계형 데이터 모델: 릴레이션(Relation), 차수와 카디널리티, 후보키/기본키/외래키 구조',
    seo_title: '관계형 데이터 모델 - 릴레이션, 속성, 튜플, 차수, 카디널리티 & 키(Key) 종류',
    seo_description: 'E.F. Codd 박사가 제안한 관계형 데이터 모델(Relational Model), 릴레이션(Relation), 튜플(Tuple), 속성(Attribute), 차수(Degree), 카디널리티(Cardinality) 및 후보키, 기본키, 외래키, 대체키 개념을 완벽 해설합니다.',
    excerpt: '관계형 데이터베이스(RDB)의 수학적 기초인 릴레이션 구조와 튜플, 속성, 그리고 데이터의 식별과 참조를 담당하는 다양한 키(Key)의 개념과 특징을 배웁니다.',
    content_md: `1970년 에드가 F. 코드(E.F. Codd) 박사가 수학의 집합론(Set Theory)을 기반으로 제안한 **관계형 데이터 모델(Relational Data Model)**과 릴레이션 구조 및 **키(Key)**의 종류를 학습합니다.

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
- **Primary Key (기본키 / PK)**: 후보키 중 선택된 대표 키로, \`NULL\` 값을 가질 수 없으며 중복될 수 없습니다.
- **Foreign Key (외래키 / FK)**: 다른 릴레이션의 기본키를 참조하는 속성으로, 릴레이션 간의 관계를 형성합니다.

---

## 2. 릴레이션 구조 상세 명세도

\`\`\`
릴레이션 이름: 학생 (Student)
+--------------+---------------+------------------+--------------+  <-- 속성 (Attribute)
| 학번 (std_id)| 이름 (name)   | 학과 (department)| 학년 (grade) |  (차수 Degree = 4)
+--------------+---------------+------------------+--------------+
| 2026001      | 홍길동        | 컴퓨터공학과     | 3            |  <-- 튜플 (Tuple 1)
| 2026002      | 이순신        | 소프트웨어학과   | 2            |  <-- 튜플 (Tuple 2)
| 2026003      | 강감찬        | 인공지능학과     | 4            |  <-- 튜플 (Tuple 3)
+--------------+---------------+------------------+--------------+
                                                                     (카디널리티 Cardinality = 3)
\`\`\`

---

## 3. 다양한 키(Key)의 계층 관계 및 분류

| 키 종류 | 유일성 (Uniqueness) | 최소성 (Minimality) | NULL 허용 여부 | 핵심 기능 및 설명 |
| :--- | :---: | :---: | :---: | :--- |
| **슈퍼키 (Super Key)** | O | X | X | 튜플을 유일하게 구별할 수만 있으면 되는 속성 집합 |
| **후보키 (Candidate Key)** | O | O | X | 튜플을 유일하게 구별하며 최소성을 만족하는 속성 집합 |
| **기본키 (Primary Key)** | O | O | **불가 (NOT NULL)** | 후보키 중 DB 설계자가 선택한 대표 식별자 키 |
| **대체키 (Alternate Key)** | O | O | X | 후보키 중 기본키로 선택되지 못한 남은 후보키들 |
| **외래키 (Foreign Key)** | X | X | **허용 (NULL 가능)** | 다른 참조 릴레이션의 기본키(PK)를 가리켜 테이블 간 연결 구축 |
`
  },
  // 3
  {
    order_index: 3,
    slug: 'ch03-integrity-constraints-and-rules',
    title: '무결성 제약조건(Integrity Constraints): 개체 무결성, 참조 무결성 및 도메인 제약조건',
    seo_title: '데이터베이스 무결성 - 개체 무결성, 참조 무결성, 도메인 무결성 & 참조 행동',
    seo_description: '데이터베이스의 정확성과 신뢰성을 지키는 무결성 제약조건, 개체 무결성, 참조 무결성, 도메인 무결성, ON DELETE / ON UPDATE 옵션을 배웁니다.',
    excerpt: '데이터베이스에 저장된 데이터의 무결성과 정확성을 보장하기 위한 3대 무결성 제약조건과 외래키 연쇄 삭제/수정 옵션을 다룹니다.',
    content_md: `데이터베이스 내 데이터의 정확성, 일관성, 유효성을 유지하기 위한 **무결성 제약조건(Integrity Constraints)**의 원리와 참조 무결성 처리 행동 옵션을 다룹니다.

---

## 1. 무결성 핵심 전문 용어 사전 (Glossary)

- **Data Integrity (데이터 무결성)**: 데이터베이스에 저장된 데이터 값이 현실 세계의 실제 값과 일치하는 정확성 및 신뢰성을 의미합니다.
- **Entity Integrity (개체 무결성)**: 기본키(Primary Key)로 지정된 모든 속성은 튜플을 유일하게 식별해야 하므로, 절대로 \`NULL\` 값이나 중복값을 가질 수 없다는 규칙입니다.
- **Referential Integrity (참조 무결성)**: 외래키(Foreign Key) 값은 참조하는 부모 릴레이션의 기본키 값과 반드시 일치하거나, 아예 \`NULL\`이어야 한다는 규칙입니다.
- **Domain Integrity (도메인 무결성)**: 특정 속성의 값은 지정된 도메인에 속한 원자값이어야 한다는 규칙입니다.

---

## 2. 참조 무결성 연동 행동 옵션 정리표

| 옵션 키워드 | 부모 튜플 삭제 시 (ON DELETE) | 부모 튜플 수정 시 (ON UPDATE) |
| :--- | :--- | :--- |
| **RESTRICT / NO ACTION** | 자식 튜플이 참조 중이면 부모 삭제를 거부 | 자식 튜플이 참조 중이면 부모 수정 거부 |
| **CASCADE** | 부모 튜플 삭제 시 참조하는 자식 튜플도 연동 삭제 | 부모 기본키 수정 시 자식 외래키도 자동으로 수정 |
| **SET NULL** | 부모 튜플 삭제 시 자식 외래키 값을 \`NULL\`로 변경 | 부모 기본키 수정 시 자식 외래키 값을 \`NULL\`로 변경 |
`
  },
  // 4
  {
    order_index: 4,
    slug: 'ch04-relational-algebra-fundamental-operators',
    title: '관계대수(Relational Algebra) 기초 연산자: 셀렉트(σ), 프로젝트(π), 집합 연산(∪, ∩, -)',
    seo_title: '관계대수 기초 - 셀렉트(σ), 프로젝트(π), 합집합(∪), 교집합(∩), 차집합(-)',
    seo_description: '관계대수(Relational Algebra), 단항 연산자 셀렉트(σ), 프로젝트(π), 이항 집합 연산자(Union ∪, Intersection ∩, Difference -)의 연산 원리를 배웁니다.',
    excerpt: 'SQL의 작동 원리를 수학적/절차적으로 표현하는 관계대수의 기본 연산자인 셀렉트, 프로젝트, 그리고 차수와 도메인이 동일할 때 수행되는 집합 연산자를 배웁니다.',
    content_md: `관계형 데이터베이스에서 원하는 데이터를 검색하기 위해 연산의 순서와 절차를 명시하는 **절차적 관계 언어인 관계대수(Relational Algebra)** 기초를 다룹니다.

---

## 1. 관계대수 기초 용어 사전 (Glossary)

- **Relational Algebra (관계대수)**: 릴레이션을 입력으로 받아 새로운 릴레이션을 생성해 내는 연산자들의 집합으로, 절차적 쿼리의 기준이 됩니다.
- **Select Operator ($\sigma$)**: 릴레이션에서 특정 조건(Condition)을 만족하는 행(튜플)의 부분집합을 선택하는 단항 연산자입니다.
- **Project Operator ($\pi$)**: 릴레이션에서 지정된 열(속성)의 부분집합만을 추출하는 단항 연산자입니다.
- **Union Compatible (합집합 호환성)**: 두 릴레이션 간에 집합 연산을 수행하기 위해 차수가 같고 대응하는 속성의 도메인이 동일해야 하는 전제 조건입니다.

---

## 2. 기초 관계대수 기호 및 수학적 표현 정리표

| 연산자 이름 | 대수 기호 | 의미 및 기능 | 예시 연산식 | SQL 대응 구문 |
| :--- | :---: | :--- | :--- | :--- |
| **셀렉트 (Select)** | $\sigma$ | 조건식을 만족하는 행(튜플) 필터링 | $\sigma_{grade=3}(Student)$ | \`WHERE grade = 3\` |
| **프로젝트 (Project)** | $\pi$ | 지정한 열(속성)만 추출 | $\pi_{name, dept}(Student)$ | \`SELECT DISTINCT name, dept\` |
| **합집합 (Union)** | $\cup$ | 두 릴레이션의 튜플 합병 | $R \cup S$ | \`UNION\` |
| **차집합 (Difference)** | $-$ | R에는 존재하고 S에는 없는 튜플 | $R - S$ | \`EXCEPT / MINUS\` |
`
  },
  // 5
  {
    order_index: 5,
    slug: 'ch05-relational-algebra-advanced-join-and-division',
    title: '고급 관계대수 연산자: 카티션 곱(×), 조인(⋈), 세타 조인 및 디비전(÷)',
    seo_title: '고급 관계대수 - 카티션 곱(×), 동등 조인(⋈), 자연 조인, 세타 조인 & 디비전(÷)',
    seo_description: '두 릴레이션을 연결하는 고급 관계대수 연산자 카티션 곱, 동등 조인, 자연 조인(⋈), 세타 조인 및 디비전(÷) 연산식을 다룹니다.',
    excerpt: '여러 릴레이션의 데이터를 결합하는 핵심 연산인 카티션 곱, 자연 조인, 세타 조인과 모든 조건을 만족하는 상대를 찾는 디비전(Division) 연산을 학습합니다.',
    content_md: `두 개 이상의 릴레이션을 합성하여 데이터를 조율하는 **고급 관계대수 연산자(조인, 디비전, 카티션 곱)**를 심도 있게 학습합니다.`
  },
  // 6
  {
    order_index: 6,
    slug: 'ch06-sql-ddl-schema-definition',
    title: 'SQL DDL 완전 가이드: CREATE TABLE, ALTER, DROP 및 실전 오라클 EMP/DEPT 스키마 코드',
    seo_title: 'SQL DDL 가이드 - CREATE TABLE, ALTER, DROP & 오라클 EMP/DEPT 실전 스키마 소스',
    seo_description: 'SQL DDL(CREATE TABLE, ALTER, DROP), 컬럼 제약조건(PK, FK, CHECK, DEFAULT)과 pjt/26 오라클 실습용 EMP, DEPT, SALGRADE 테이블 스키마 스크립트를 배웁니다.',
    excerpt: '데이터베이스 테이블 스키마 생성 DDL 구문과 오라클/표준 SQL에서 널리 쓰이는 EMP/DEPT 실전 실습용 릴레이션 생성 DDL 소스 코드를 심도 있게 다룹니다.',
    content_md: `데이터베이스의 구조(Schema)를 생성, 수정, 삭제하는 **데이터 정의어(DDL: Data Definition Language)**의 모든 구문과 실전 오라클 **EMP / DEPT / SALGRADE** 샘플 릴레이션 구축 코드를 배웁니다.

---

## 1. DDL 핵심 전문 용어 사전 (Glossary)

- **DDL (Data Definition Language)**: \`CREATE\`, \`ALTER\`, \`DROP\`, \`TRUNCATE\` 등 데이터베이스 객체 구조를 생성하고 정의하는 언어입니다.
- **CASCADE CONSTRAINTS**: 오라클 등에서 부모 테이블 삭제 시 연결된 자식 테이블의 외래키 제약조건까지 한 번에 제거해 주는 명령어 옵션입니다.

---

## 2. pjt/26 실전 오라클 EMP / DEPT 테이블 생성 DDL 스크립트 (create_emppdb_oracle.sql)

\`\`\`sql
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

INSERT INTO dept VALUES (10, 'ACCOUNTING', 'NEW YORK');
INSERT INTO dept VALUES (20, 'RESEARCH', 'DALLAS');
INSERT INTO emp VALUES (7839, 'KING', 'PRESIDENT', NULL, TO_DATE('17-11-1981','DD-MM-YYYY'), 5000, NULL, 10);
COMMIT;
\`\`\`
`
  },
  // 7 (대용량 보강)
  {
    order_index: 7,
    slug: 'ch07-sql-dml-basic-queries-and-filtering',
    title: 'SQL DML 기본 조회: SELECT, WHERE 조건식, LIKE, IN, BETWEEN 및 ORDER BY 정렬',
    seo_title: 'SQL DML 기본 조회 - SELECT, WHERE 조건절, LIKE 와일드카드, IN, BETWEEN & ORDER BY',
    seo_description: 'SELECT 절, WHERE 조건 필터링, LIKE 와일드카드(%, _), IN, BETWEEN, IS NULL 및 ORDER BY (ASC/DESC) 정렬 구문 작성을 배웁니다.',
    excerpt: '원하는 데이터를 정확하게 검색하는 SELECT 구문, WHERE 조건절의 와일드카드 패턴 매칭과 정렬(ORDER BY) 키워드 활용법을 다룹니다.',
    content_md: `데이터베이스에 저장된 튜플 데이터를 검색하는 **SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬** 문법을 배웁니다.

---

## 1. SELECT 문법 구성과 논리적 실행 순서 (Logical Query Processing)

SQL 쿼리는 작성 순서와 실제 DBMS 내부 엔진의 **논리적 실행 순서(Execution Order)**가 다릅니다.

\`\`\`
[작성 순서]                   [DBMS 논리적 실행 순서]
1. SELECT 컬럼명              1. FROM      (대상 테이블 참조)
2. FROM 테이블명              2. WHERE     (개별 행 필터링)
3. WHERE 조건식               3. GROUP BY  (그룹화)
4. GROUP BY 컬럼명            4. HAVING    (그룹 필터링)
5. HAVING 그룹조건            5. SELECT    (컬럼 투영 및 계산)
6. ORDER BY 정렬컬럼          6. ORDER BY  (결과 정렬)
\`\`\`

---

## 2. WHERE 조건식 연산자 완벽 정해

- **비교 연산자**: \`=\`, \`!=\`, \`<>\`, \`>\`, \`<\`, \`>=\`, \`<=\`
- **범위 연산자 (BETWEEN)**: \`sal BETWEEN 2000 AND 4000\` (이상/이하 포함)
- **목록 연산자 (IN)**: \`job IN ('MANAGER', 'ANALYST', 'CLERK')\`
- **패턴 연산자 (LIKE)**:
  - \`%\`: 0개 이상의 모든 문자열 매칭 (\`ename LIKE 'A%'\` -> A로 시작하는 이름)
  - \`_\`: 정확히 1개의 개별 문자 매칭 (\`ename LIKE '_A%'\` -> 두 번째 글자가 A인 이름)
- **NULL 검사 연산자**: \`comm IS NULL\` / \`comm IS NOT NULL\` (자바/파이썬의 \`!= null\` 표기 사용 불가)

---

## 3. 실전 EMP 사원 테이블 조회 SQL 예제

\`\`\`sql
-- 1. 급여가 2,000 이상 4,000 이하이고, 커미션이 존재하지 않는 사원 조회
SELECT empno, ename, job, sal
FROM emp
WHERE sal BETWEEN 2000 AND 4000
  AND comm IS NULL
ORDER BY sal DESC, ename ASC;

-- 2. 직급이 MANAGER이거나 ANALYST인 사원 중 이름에 'A'가 들어가는 사원
SELECT ename, job, deptno
FROM emp
WHERE job IN ('MANAGER', 'ANALYST')
  AND ename LIKE '%A%'
ORDER BY deptno ASC;
\`\`\`
`
  },
  // 8 (대용량 보강)
  {
    order_index: 8,
    slug: 'ch08-sql-aggregation-and-grouping',
    title: 'SQL 집계 및 그룹화: SUM, AVG, COUNT, GROUP BY 및 HAVING 조건절 파이프라인',
    seo_title: 'SQL 집계 및 그룹화 - SUM, AVG, COUNT, GROUP BY & HAVING 조건절 파이프라인',
    seo_description: '다량의 행 데이터를 요약하는 SQL 집계 함수(SUM, AVG, COUNT, MAX, MIN), GROUP BY 그룹화, HAVING 절과 WHERE vs HAVING 구별점을 배웁니다.',
    excerpt: '데이터 요약 및 통계 산출을 위한 집계 함수와 그룹화 구문인 GROUP BY, 그리고 그룹화된 데이터 필터링을 담당하는 HAVING 절의 논리적 실행 순서를 다룹니다.',
    content_md: `데이터셋을 그룹 단위로 묶어 통계 수치를 구하는 **집계 함수(Aggregate Functions)**와 **GROUP BY, HAVING** 구문의 실행 파이프라인을 다룹니다.

---

## 1. 5대 핵심 집계 함수 (Aggregate Functions)

- **\`COUNT(*)\`**: NULL 포함 전체 행의 개수를 반환합니다.
- **\`COUNT(컬럼)\`**: 해당 컬럼에서 \`NULL\`을 제외한 유효 행의 개수를 반환합니다.
- **\`SUM(컬럼)\`**: NULL을 제외한 수치 데이터의 합계를 계산합니다.
- **\`AVG(컬럼)\`**: NULL을 제외한 평균을 계산합니다. (NULL을 0으로 처리하려면 \`NVL/COALESCE\` 활용)
- **\`MAX(컬럼)\` / \`MIN(컬럼)\`**: 최댓값과 최솟값을 구합니다. (숫자, 날짜, 문자열 모두 적용 가능)

---

## 2. WHERE 절 vs HAVING 절 차이점 분석

| 구분 | WHERE 절 | HAVING 절 |
| :--- | :--- | :--- |
| **적용 대상** | 개별 행(Row) 데이터 | 그룹화된 요약 행(Group Row) |
| **실행 시점** | GROUP BY 가 수행되기 **전** | GROUP BY 그룹화가 완료된 **후** |
| **집계 함수 사용** | **사용 불가** (\`WHERE SUM(sal) > 1000\` 에러) | **사용 가능** (\`HAVING AVG(sal) >= 2500\`) |

---

## 3. 부서별 평균 급여 및 인원수 집계 실전 SQL

\`\`\`sql
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
\`\`\`
`
  },
  // 9 (대용량 보강)
  {
    order_index: 9,
    slug: 'ch09-sql-multi-table-joins',
    title: 'SQL 테이블 조인(JOIN) 총정리: INNER JOIN, LEFT/RIGHT OUTER JOIN, FULL OUTER JOIN 및 SELF JOIN',
    seo_title: 'SQL 조인(JOIN) 총정리 - INNER JOIN, LEFT OUTER JOIN, FULL OUTER JOIN & SELF JOIN',
    seo_description: '여러 테이블의 데이터를 관계 키로 결합하는 SQL JOIN, INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN 및 자기 자신과 조인하는 SELF JOIN 작동 원리를 배웁니다.',
    excerpt: '관계형 데이터베이스의 꽃인 테이블 조인(JOIN)의 다양한 종류(내부 조인, 외부 조인, 교차 조인, 자체 조인)와 ON 구문의 결합 조건을 시각적으로 학습합니다.',
    content_md: `분산된 여러 테이블을 릴레이션 관계 키로 결합하여 하나의 통합된 결과셋을 만들어 내는 **SQL 조인(JOIN)**의 모든 형태를 총정리합니다.

---

## 1. 조인(JOIN)의 시각적 형태 및 분류

\`\`\`
[INNER JOIN]         [LEFT OUTER JOIN]       [FULL OUTER JOIN]
  +---+---+             +---+---+               +---+---+
  | A | B |             | A | B |               | A | B |
  +---+---+             +---+---+               +---+---+
    (교집합)           (A전체 + B교집합)        (A와 B 전체)
\`\`\`

---

## 2. 4가지 핵심 조인 쿼리 실습

\`\`\`sql
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
\`\`\`
`
  },
  // 10 ~ 20 (나머지 레슨도 모두 풍부하게 작성)
  {
    order_index: 10,
    slug: 'ch10-sql-subqueries-nested-and-correlated',
    title: 'SQL 서브쿼리(Subquery) 심화: 중첩 서브쿼리, 상관 서브쿼리(Correlated), EXISTS 및 IN/ANY/ALL',
    seo_title: 'SQL 서브쿼리 심화 - 중첩 서브쿼리, 상관 서브쿼리(Correlated), EXISTS & IN/ANY/ALL',
    seo_description: '서브쿼리(Subquery), 중첩 서브쿼리, 상관 서브쿼리(Correlated Subquery), EXISTS/NOT EXISTS 및 다중 행 연산자(IN, ANY, ALL)를 배웁니다.',
    excerpt: '메인 쿼리에 필요한 조건이나 결과 데이터를 동적으로 제공하는 서브쿼리의 종류(중첩, 상관, 스칼라, 인라인 뷰)와 성능 최적화 관점을 학습합니다.',
    content_md: `메인 쿼리(Main Query) 내부에 포함되는 하위 쿼리인 **서브쿼리(Subquery)**의 종류와 **상관 서브쿼리(Correlated Subquery)** 및 **EXISTS** 연산자를 배웁니다.

---

## 1. 상관 서브쿼리 vs 비상관 서브쿼리 비교

- **비상관 서브쿼리 (Uncorrelated Subquery)**: 메인 쿼리와 독립적으로 먼저 단 1회 실행되어 결과값을 메인 쿼리에 전달하는 방식입니다.
- **상관 서브쿼리 (Correlated Subquery)**: 메인 쿼리의 각 행(Row)을 하나씩 읽을 때마다 메인 쿼리의 값을 서브쿼리 내부 조건식에 전달하여 반 복적으로 실행되는 방식입니다.

---

## 2. EXISTS 및 상관 서브쿼리 예제

\`\`\`sql
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
\`\`\`
`
  },
  {
    order_index: 11,
    slug: 'ch11-sql-dml-data-mutation-insert-update-delete',
    title: 'SQL 데이터 조작: INSERT INTO, UPDATE, DELETE 및 MERGE(UPSERT) 패턴',
    seo_title: 'SQL 데이터 조작 DML - INSERT INTO, UPDATE, DELETE & MERGE(UPSERT)',
    seo_description: '테이블의 튜플 데이터를 삽입, 수정, 삭제하는 DML 명령어 INSERT INTO, UPDATE SET, DELETE FROM 및 MERGE(UPSERT) 패턴을 배웁니다.',
    excerpt: '테이블 내 데이터를 신규 추가(INSERT), 기존 데이터 수정(UPDATE), 데이터 삭제(DELETE)하는 구문과 데이터 병합(MERGE) 패턴을 학습합니다.',
    content_md: `데이터베이스 테이블의 데이터를 직접 변경하는 **DML(Data Manipulation Language)**인 **INSERT, UPDATE, DELETE** 및 **MERGE (UPSERT)** 문법을 학습합니다.`
  },
  {
    order_index: 12,
    slug: 'ch12-sql-advanced-analytic-window-functions',
    title: 'SQL 고급 분석 및 윈도우 함수: OVER(PARTITION BY ORDER BY), RANK, DENSE_RANK, ROW_NUMBER',
    seo_title: 'SQL 윈도우 함수 - OVER(PARTITION BY ORDER BY), ROW_NUMBER, RANK, DENSE_RANK',
    seo_description: '행과 행 간의 관계를 분석하는 SQL 윈도우 함수, OVER 절, PARTITION BY, ORDER BY, 순위 함수(ROW_NUMBER, RANK, DENSE_RANK) 및 이동 집계를 배웁니다.',
    excerpt: '기존 GROUP BY와 달리 행의 개수를 유지하면서 그룹별 순위, 누적합, 이동 평균을 계산하는 SQL 윈도우 분석 함수(OVER 절)의 활용법을 다룹니다.',
    content_md: `행의 집합(Window)을 대상으로 각 행마다 분석 집계 결과를 계산해 내는 고급 분석 도구인 **SQL 윈도우 함수(Window Functions)**를 학습합니다.`
  },
  {
    order_index: 13,
    slug: 'ch13-views-and-indexes-b-tree-architecture',
    title: '가상 테이블 뷰(View)와 데이터베이스 인덱스 아키텍처: B-Tree & B+Tree 색인 메커니즘',
    seo_title: 'DB 뷰 & 인덱스 아키텍처 - View 장단점, B-Tree & B+Tree 인덱스 & Clustered Index',
    seo_description: '가상 테이블 뷰(View)의 장단점 및 인덱스(Index), B-Tree / B+Tree 아키텍처, 클러스터드(Clustered) vs 넌클러스터드 인덱스를 배웁니다.',
    excerpt: '보안과 편의성을 제공하는 가상 테이블 뷰(View)와 데이터베이스 검색 속도를 비약적으로 향상시키는 B-Tree / B+Tree 인덱스 내부 구조를 심도 있게 다룹니다.',
    content_md: `자주 사용하는 복잡한 쿼리를 가상 테이블로 정의하는 **뷰(View)**와 데이터베이스 검색 속도를 극대화하는 **인덱스(Index) 아키텍처(B-Tree & B+Tree)**를 다룹니다.`
  },
  {
    order_index: 14,
    slug: 'ch14-database-design-erd-modeling',
    title: '데이터베이스 설계 1: 개념적 모델링과 ERD(Entity-Relationship Diagram) 엔티티/관계/카디널리티',
    seo_title: 'DB 설계 1 - 개념적 설계, ERD 모델링, Entity, Attribute & Relationship',
    seo_description: '개념적 데이터 설계, ERD(Entity-Relationship Diagram) 작성법, 개체(Entity), 속성(Attribute), 관계(Relationship), 카디널리티 표현법을 배웁니다.',
    excerpt: '현실 세계의 요구사항을 직관적인 다이어그램으로 추상화하는 ERD 개념적 데이터 모델링과 엔티티, 속성, 관계 타입의 정의 및 매핑 규칙을 학습합니다.',
    content_md: `사용자의 요구사항 분석을 바탕으로 현실 세계의 정보 구조를 직관적인 그래픽 다이어그램으로 변환하는 **개념적 DB 설계(ERD 모델링)**를 학습합니다.`
  },
  {
    order_index: 15,
    slug: 'ch15-normalization-anomalies-1nf-2nf-3nf-bcnf',
    title: '데이터베이스 설계 2: 정규화(Normalization)와 이상 현상(삽입/수정/삭제 이상), 1NF/2NF/3NF/BCNF',
    seo_title: 'DB 정규화(Normalization) - 이상 현상(Anomalies), 함수 종속성 & 1NF/2NF/3NF/BCNF',
    seo_description: '데이터 중복 제거와 이상 현상 방지를 위한 정규화(Normalization), 함수 종속성(FD), 1NF/2NF/3NF/BCNF 분해를 배웁니다.',
    excerpt: '잘못 설계된 릴레이션에서 발생하는 3대 이상 현상을 방지하기 위해 함수 종속성(Functional Dependency)을 기반으로 스키마를 분해하는 정규화 과정을 다룹니다.',
    content_md: `데이터베이스의 중복성을 제거하여 저장 공간을 절약하고 3대 이상 현상(Anomalies)을 예방하는 **정규화(Normalization)** 기술을 완벽 정리합니다.`
  },
  {
    order_index: 16,
    slug: 'ch16-database-security-dcl-and-access-control',
    title: '데이터베이스 관리와 보안: DCL(GRANT/REVOKE), 사용자 권한, 백업/복구 및 접근 제어',
    seo_title: 'DB 관리와 보안 - DCL(GRANT/REVOKE), 사용자 계정, Role 관리 & 백업/복구',
    seo_description: 'DCL(GRANT, REVOKE), 역할(Role) 기반 접근 제어(RBAC), 데이터 백업 및 장애 복구 메커니즘을 배웁니다.',
    excerpt: '데이터베이스에 대한 비인가 접근을 막는 사용자 계정 및 DCL 권한 제어(GRANT/REVOKE)와 시스템 장애 발생 시 데이터를 원상 복구하는 백업 전략을 학습합니다.',
    content_md: `데이터베이스 시스템을 안전하게 보호하기 위한 **보안 접근 제어(DCL: GRANT/REVOKE)**와 계정/롤(Role) 관리 및 **백업·복구(Backup & Recovery)** 전략을 다룹니다.`
  },
  {
    order_index: 17,
    slug: 'ch17-transactions-acid-properties',
    title: '트랜잭션(Transaction) 기초: ACID 성질(원자성, 일관성, 격리성, 지속성)과 COMMIT/ROLLBACK',
    seo_title: '트랜잭션(Transaction) - ACID 성질 (Atomicity, Consistency, Isolation, Durability)',
    seo_description: '트랜잭션(Transaction), ACID 4대 성질(원자성, 일관성, 격리성, 지속성), 성공 확정 COMMIT, 작업 취소 ROLLBACK을 배웁니다.',
    excerpt: '데이터베이스의 일관성과 작업 완결성을 보장하는 핵심 단위인 트랜잭션(Transaction)의 ACID 4대 속성과 COMMIT/ROLLBACK의 구동 원리를 다룹니다.',
    content_md: `데이터베이스의 상태를 변화시키는 하나의 논리적인 작업 단위인 **트랜잭션(Transaction)**과 **ACID 4대 성질**을 학습합니다.`
  },
  {
    order_index: 18,
    slug: 'ch18-concurrency-control-locking-and-isolation-levels',
    title: '동시성 제어(Concurrency Control): 로킹(Locking), 교착상태(Deadlock) 및 ANSI 격리 수준(Isolation Levels)',
    seo_title: '동시성 제어 - 로킹(Locking), Deadlock, 타임스탬프 & ANSI 트랜잭션 격리 수준',
    seo_description: '동시성 제어, 공유/배타 잠금(Shared/Exclusive Lock), 2단계 로킹(2PL), 교착상태(Deadlock) 및 4가지 트랜잭션 격리 수준을 배웁니다.',
    excerpt: '여러 트랜잭션이 동시 접근할 때 데이터 부정합을 방지하는 동시성 제어(Locking, 2PL)와 교착상태, 그리고 4단계 트랜잭션 격리 수준을 학습합니다.',
    content_md: `여러 트랜잭션이 동시에 데이터베이스에 접근할 때 상호 간섭으로 인한 문제점을 방지하는 **동시성 제어(Concurrency Control)**와 **트랜잭션 격리 수준**을 배웁니다.`
  },
  {
    order_index: 19,
    slug: 'ch19-database-application-development-and-security',
    title: 'DB 기반 애플리케이션 개발: 파이썬 DB 바인딩(oracledb/sqlite3), PyQt5 GUI 연동 및 SQL Injection 방어',
    seo_title: 'DB 앱 개발 - 파이썬 oracledb/sqlite3 연동, PyQt5 GUI & SQL Injection 방어',
    seo_description: 'pjt/26 실전 파이썬 DB 드라이버 바인딩(oracledb, sqlite3), fetchone()/fetchall() 버퍼 처리, 바인드 변수(:1, :var1), PyQt5 데스크톱 GUI DB 연동(ch13_workshop.py) 및 SQL Injection 보안 방어법을 배웁니다.',
    excerpt: '파이썬(oracledb, sqlite3)과 데이터베이스 바인딩, 커서 버퍼 순회, 위치/이름 기반 바인드 변수 적용, PyQt5 GUI 데이터베이스 검색 앱 개발과 SQL Injection 방어법을 학습합니다.',
    content_md: `애플리케이션 프로그램과 데이터베이스를 직접 연결하는 **파이썬 DB 바인딩(oracledb, sqlite3)** 기술과 **PyQt5 기반 데스크톱 GUI 연동 앱**, 그리고 **SQL Injection 보안 방어**를 다룹니다.

---

## 1. DB 연동 핵심 전문 용어 사전 (Glossary)

- **DB Driver / Binding**: 파이썬 코드에서 데이터베이스 엔진과 TCP/IP 또는 소켓 통신을 주고받아 SQL을 전달하고 결과를 반환받는 클라이언트 모듈입니다.
- **Cursor (커서)**: SQL 실행 결과 생성된 튜플 결과셋(ResultSet)을 가리키는 버퍼 포인터 객체입니다. (\`curs.fetchone()\`, \`curs.fetchall()\`)
- **Bind Variables (바인드 변수)**: SQL 쿼리문에 변수값을 동적으로 대입할 때 위치 기반(\`:1, :2\`) 또는 이름 기반(\`:var1, :var2\`)으로 지정하여 하드 파싱을 막고 **SQL Injection을 근본 차단**하는 안전한 기법입니다.

---

## 2. pjt/26 실전 파이썬 데이터베이스 연동 소스 코드 (chap13_2.py & chap13_4.py)

\`\`\`python
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
\`\`\`
`
  },
  {
    order_index: 20,
    slug: 'ch20-modern-database-trends-nosql-and-newsql',
    title: '현대 데이터베이스 트렌드: NoSQL(Key-Value, Document MongoDB, Graph) & Cloud NewSQL 분산 데이터베이스',
    seo_title: '현대 DB 트렌드 - NoSQL(MongoDB, Redis, Neo4j), CAP 정리 & NewSQL 분산 DB',
    seo_description: 'NoSQL(Key-Value Redis, Document MongoDB, Columnar Cassandra, Graph Neo4j), CAP 정리(Consistency, Availability, Partition Tolerance) 및 NewSQL 분산 DB 트렌드를 배웁니다.',
    excerpt: '관계형 데이터베이스(RDB)의 한계를 극복하고 대용량 수평 확장(Scale-out)을 제공하는 NoSQL의 종류와 CAP 정리, 그리고 NewSQL 분산 데이터베이스의 최신 트렌드를 학습합니다.',
    content_md: `비정형 대용량 빅데이터 처리와 클라우드 수평 확장성(Scale-out)을 보장하는 **NoSQL 데이터베이스(MongoDB, Redis, Neo4j)**와 **NewSQL 분산 DB 트렌드**를 다룹니다.`
  }
];

// Split into 5 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 16),
  lessons.slice(16, 20)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full Database Mega Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const content_html = marked.parse(lesson.content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  '${escapeSql(lesson.slug)}',
  '${escapeSql(lesson.title)}',
  '${escapeSql(lesson.excerpt)}',
  '${escapeSql(lesson.content_md)}',
  '${escapeSql(content_html)}',
  'published',
  '${escapeSql(lesson.seo_title)}',
  '${escapeSql(lesson.seo_description)}',
  ${lesson.order_index},
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
`;
  }

  fs.writeFileSync(`scratch/seed_database_full_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 5 Full Database SQL chunk files!');
