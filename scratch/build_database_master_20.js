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
   - 각 사용자나 응용 프로그램의 입장에서 필요한 데이터만 보여주는 **개별 사용자 뷰(User View)**입니다.
2. **Conceptual Level (개념 단계 / 개념 스키마)**:
   - 데이터베이스 전체의 논리적 구조를 정의하는 **전체 스키마(Global Schema)**입니다.
3. **Internal Level (내부 단계 / 내부 스키마)**:
   - 실제 물리적 저장 장치(SSD/HDD)에 데이터가 어떻게 저장되는지 나타내는 **물리적 저장 구조(Physical Schema)**입니다.

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 스키마(Schema)와 인스턴스(Instance)의 차이는 무엇인가요?**
A. **스키마(Schema)**는 데이터베이스의 구조와 제약조건을 정의한 정적인 틀(Blueprint)이며, **인스턴스(Instance)**는 특정 시점에 데이터베이스에 실제로 저장되어 있는 동적인 데이터 값들의 집합입니다.
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
    content_md: `1970년 에드가 F. 코드(E.F. Codd) 박사가 수학의 집합론(Set Theory)을 기반으로 제안한 **관계형 데이터 모델(Relational Data Model)**과 릴레이션 구조 및 **키(Key)**의 종류를 학습합니다.`
  },
  // 3 ~ 5
  {
    order_index: 3,
    slug: 'ch03-integrity-constraints-and-rules',
    title: '무결성 제약조건(Integrity Constraints): 개체 무결성, 참조 무결성 및 도메인 제약조건',
    seo_title: '데이터베이스 무결성 - 개체 무결성, 참조 무결성, 도메인 무결성 & 참조 행동',
    seo_description: '데이터베이스의 정확성과 신뢰성을 지키는 무결성 제약조건, 개체 무결성, 참조 무결성, 도메인 무결성, ON DELETE / ON UPDATE 옵션을 배웁니다.',
    excerpt: '데이터베이스에 저장된 데이터의 무결성과 정확성을 보장하기 위한 3대 무결성 제약조건과 외래키 연쇄 삭제/수정 옵션을 다룹니다.',
    content_md: `데이터베이스 내 데이터의 정확성, 일관성, 유효성을 유지하기 위한 **무결성 제약조건(Integrity Constraints)**의 원리와 참조 무결성 처리 행동 옵션을 다룹니다.`
  },
  {
    order_index: 4,
    slug: 'ch04-relational-algebra-fundamental-operators',
    title: '관계대수(Relational Algebra) 기초 연산자: 셀렉트(σ), 프로젝트(π), 집합 연산(∪, ∩, -)',
    seo_title: '관계대수 기초 - 셀렉트(σ), 프로젝트(π), 합집합(∪), 교집합(∩), 차집합(-)',
    seo_description: '관계대수(Relational Algebra), 단항 연산자 셀렉트(σ), 프로젝트(π), 이항 집합 연산자(Union ∪, Intersection ∩, Difference -)의 연산 원리를 배웁니다.',
    excerpt: 'SQL의 작동 원리를 수학적/절차적으로 표현하는 관계대수의 기본 연산자인 셀렉트, 프로젝트, 그리고 차수와 도메인이 동일할 때 수행되는 집합 연산자를 배웁니다.',
    content_md: `관계형 데이터베이스에서 원하는 데이터를 검색하기 위해 연산의 순서와 절차를 명시하는 **절차적 관계 언어인 관계대수(Relational Algebra)** 기초를 다룹니다.`
  },
  {
    order_index: 5,
    slug: 'ch05-relational-algebra-advanced-join-and-division',
    title: '고급 관계대수 연산자: 카티션 곱(×), 조인(⋈), 세타 조인 및 디비전(÷)',
    seo_title: '고급 관계대수 - 카티션 곱(×), 동등 조인(⋈), 자연 조인, 세타 조인 & 디비전(÷)',
    seo_description: '두 릴레이션을 연결하는 고급 관계대수 연산자 카티션 곱, 동등 조인, 자연 조인(⋈), 세타 조인 및 디비전(÷) 연산식을 다룹니다.',
    excerpt: '여러 릴레이션의 데이터를 결합하는 핵심 연산인 카티션 곱, 자연 조인, 세타 조인과 모든 조건을 만족하는 상대를 찾는 디비전(Division) 연산을 학습합니다.',
    content_md: `두 개 이상의 릴레이션을 합성하여 데이터를 조율하는 **고급 관계대수 연산자(조인, 디비전, 카티션 곱)**를 심도 있게 학습합니다.`
  },
  // 6 (pjt/26 실전 오라클 EMP/DEPT 샘플 코드 추가)
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
- **\`DEFAULT\`**: 데이터를 삽입할 때 값이 명시되지 않은 경우 지정된 고정 기본값을 자동으로 채워주는 제약 구문입니다.

---

## 2. pjt/26 실전 오라클 EMP / DEPT 테이블 생성 DDL 스크립트 (create_emppdb_oracle.sql)

\`\`\`sql
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
INSERT INTO dept VALUES (10, 'ACCOUNTING', 'NEW YORK');
INSERT INTO dept VALUES (20, 'RESEARCH', 'DALLAS');
INSERT INTO dept VALUES (30, 'SALES', 'CHICAGO');
INSERT INTO dept VALUES (40, 'OPERATIONS', 'BOSTON');

INSERT INTO emp VALUES (7839, 'KING', 'PRESIDENT', NULL, TO_DATE('17-11-1981','DD-MM-YYYY'), 5000, NULL, 10);
INSERT INTO emp VALUES (7698, 'BLAKE', 'MANAGER', 7839, TO_DATE('01-05-1981','DD-MM-YYYY'), 2850, NULL, 30);
INSERT INTO emp VALUES (7782, 'CLARK', 'MANAGER', 7839, TO_DATE('09-06-1981','DD-MM-YYYY'), 2450, NULL, 10);
INSERT INTO emp VALUES (7788, 'SCOTT', 'ANALYST', 7566, TO_DATE('13-07-1987','DD-MM-YYYY'), 3000, NULL, 20);

COMMIT;
\`\`\`
`
  },
  {
    order_index: 7,
    slug: 'ch07-sql-dml-basic-queries-and-filtering',
    title: 'SQL DML 기본 조회: SELECT, WHERE 조건식, LIKE, IN, BETWEEN 및 ORDER BY 정렬',
    seo_title: 'SQL DML 기본 조회 - SELECT, WHERE 조건절, LIKE 와일드카드, IN, BETWEEN & ORDER BY',
    seo_description: 'SELECT 절, WHERE 조건 필터링, LIKE 와일드카드(%, _), IN, BETWEEN, IS NULL 및 ORDER BY (ASC/DESC) 정렬 구문 작성을 배웁니다.',
    excerpt: '원하는 데이터를 정확하게 검색하는 SELECT 구문, WHERE 조건절의 와일드카드 패턴 매칭과 정렬(ORDER BY) 키워드 활용법을 다룹니다.',
    content_md: `데이터베이스에 저장된 튜플 데이터를 검색하는 **SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬** 문법을 배웁니다.`
  },
  {
    order_index: 8,
    slug: 'ch08-sql-aggregation-and-grouping',
    title: 'SQL 집계 및 그룹화: SUM, AVG, COUNT, GROUP BY 및 HAVING 조건절 파이프라인',
    seo_title: 'SQL 집계 및 그룹화 - SUM, AVG, COUNT, GROUP BY & HAVING 조건절 파이프라인',
    seo_description: '다량의 행 데이터를 요약하는 SQL 집계 함수(SUM, AVG, COUNT, MAX, MIN), GROUP BY 그룹화, HAVING 절과 WHERE vs HAVING 구별점을 배웁니다.',
    excerpt: '데이터 요약 및 통계 산출을 위한 집계 함수와 그룹화 구문인 GROUP BY, 그리고 그룹화된 데이터 필터링을 담당하는 HAVING 절의 논리적 실행 순서를 다룹니다.',
    content_md: `데이터셋을 그룹 단위로 묶어 통계 수치를 구하는 **집계 함수(Aggregate Functions)**와 **GROUP BY, HAVING** 구문의 실행 파이프라인을 다룹니다.`
  },
  {
    order_index: 9,
    slug: 'ch09-sql-multi-table-joins',
    title: 'SQL 테이블 조인(JOIN) 총정리: INNER JOIN, LEFT/RIGHT OUTER JOIN, FULL OUTER JOIN 및 SELF JOIN',
    seo_title: 'SQL 조인(JOIN) 총정리 - INNER JOIN, LEFT OUTER JOIN, FULL OUTER JOIN & SELF JOIN',
    seo_description: '여러 테이블의 데이터를 관계 키로 결합하는 SQL JOIN, INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN 및 자기 자신과 조인하는 SELF JOIN 작동 원리를 배웁니다.',
    excerpt: '관계형 데이터베이스의 꽃인 테이블 조인(JOIN)의 다양한 종류(내부 조인, 외부 조인, 교차 조인, 자체 조인)와 ON 구문의 결합 조건을 시각적으로 학습합니다.',
    content_md: `분산된 여러 테이블을 릴레이션 관계 키로 결합하여 하나의 통합된 결과셋을 만들어 내는 **SQL 조인(JOIN)**의 모든 형태를 총정리합니다.`
  },
  {
    order_index: 10,
    slug: 'ch10-sql-subqueries-nested-and-correlated',
    title: 'SQL 서브쿼리(Subquery) 심화: 중첩 서브쿼리, 상관 서브쿼리(Correlated), EXISTS 및 IN/ANY/ALL',
    seo_title: 'SQL 서브쿼리 심화 - 중첩 서브쿼리, 상관 서브쿼리(Correlated), EXISTS & IN/ANY/ALL',
    seo_description: '서브쿼리(Subquery), 중첩 서브쿼리, 상관 서브쿼리(Correlated Subquery), EXISTS/NOT EXISTS 및 다중 행 연산자(IN, ANY, ALL)를 배웁니다.',
    excerpt: '메인 쿼리에 필요한 조건이나 결과 데이터를 동적으로 제공하는 서브쿼리의 종류(중첩, 상관, 스칼라, 인라인 뷰)와 성능 최적화 관점을 학습합니다.',
    content_md: `메인 쿼리(Main Query) 내부에 포함되는 하위 쿼리인 **서브쿼리(Subquery)**의 종류와 **상관 서브쿼리(Correlated Subquery)** 및 **EXISTS** 연산자를 배웁니다.`
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
  // 19 (pjt/26 13장 실전 파이썬 DB 연동 & PyQt5 GUI 소스코드 대거 추가)
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

- **DB Driver / Binding**: 파이썬 코드에서 데이터베이스 엔진과 TCP/IP 또는 소켓 통신을 주고받아 SQL을 전달하고 결과를 반환받는 클라이언트 모듈입니다. (\`oracledb\`, \`sqlite3\`, \`psycopg2\` 등)
- **Cursor (커서)**: SQL 실행 결과 생성된 튜플 결과셋(ResultSet)을 가리키는 버퍼 포인터 객체입니다. (\`curs.fetchone()\`, \`curs.fetchall()\`)
- **Bind Variables (바인드 변수)**: SQL 쿼리문에 변수값을 동적으로 대입할 때 위치 기반(\`:1, :2\`) 또는 이름 기반(\`:var1, :var2\`)으로 지정하여 하드 파싱을 막고 **SQL Injection을 근본 차단**하는 안전한 기법입니다.
- **PyQt5 GUI Integration**: 파이썬 데스크톱 윈도우 애플리케이션 프레임워크인 PyQt5 위젯(\`QTableWidgetItem\`, \`QTextEdit\`)과 데이터베이스 커서를 실시간 연동하는 모듈입니다.

---

## 2. pjt/26 실전 파이썬 데이터베이스 연동 소스 코드 (chap13_2.py & chap13_4.py)

\`\`\`python
import oracledb

# 1. DB 접속 정보 설정
dsn = "localhost/emppdb"
user = "scott"
pw = "tiger"

# 2. 커넥션 및 커서 생성
conn = oracledb.connect(user=user, password=pw, dsn=dsn)
curs = conn.cursor()

# 3. SELECT 쿼리 실행 및 fetchall / fetchone 버퍼 탐색
sql_select = "SELECT empno, ename, job, sal FROM emp WHERE deptno = :1"
curs.execute(sql_select, (20,)) # 위치 기반 바인드 변수 대입

rows = curs.fetchall()
print("=== [부서 20 사원 목록] ===")
for r in rows:
    print(f"사번: {r[0]}, 이름: {r[1]}, 직급: {r[2]}, 급여: {r[3]:,}원")

# 4. INSERT 쿼리 및 이름 기반 바인드 변수 실행
sql_insert = "INSERT INTO dept VALUES (:var1, :var2, :var3)"
curs.execute(sql_insert, var1=50, var2="AI_RESEARCH", var3="SEOUL")
conn.commit() # 트랜잭션 명시적 수동 확정 (Commit)

curs.close()
conn.close()
\`\`\`

---

## 3. pjt/26 실전 PyQt5 GUI 데이터베이스 검색 워크숍 애플리케이션 (ch13_workshop.py)

\`\`\`python
import sys
import oracledb
from PyQt5.QtWidgets import *
from PyQt5.QtCore import Qt, QCoreApplication

# DB 커넥션 헬퍼 함수
def connectDB():
    return oracledb.connect(user="scott", password="tiger", dsn="localhost/emppdb")

def disconnectDB(conn):
    conn.close()

# PyQt5 GUI 윈도우 클래스
class CityInfoApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        label1 = QLabel('국가 선택:')
        self.contry = QComboBox()
        self.contry.addItems(['South Korea', 'United States', 'Japan', 'China'])

        btn_search = QPushButton('조회')
        btn_search.clicked.connect(self.btn_search_clicked)
        btn_exit = QPushButton('종료')
        btn_exit.clicked.connect(self.close)

        self.city_info = QTableWidget()

        gbox = QGridLayout()
        gbox.addWidget(label1, 0, 0)
        gbox.addWidget(self.contry, 0, 1)
        gbox.addWidget(btn_search, 0, 2)
        gbox.addWidget(btn_exit, 1, 2)
        gbox.addWidget(self.city_info, 1, 0, 1, 2)

        self.setLayout(gbox)
        self.setWindowTitle('pjt/26 DB 연동 City Info App')
        self.setGeometry(300, 300, 550, 300)
        self.show()

    def btn_search_clicked(self):
        country_name = self.contry.currentText()
        sql = """
            SELECT city.name, city.population 
            FROM city, country 
            WHERE city.countrycode = country.code 
            AND country.name = :var1
        """
        conn = connectDB()
        curs = conn.cursor()
        curs.execute(sql, var1=country_name)

        self.city_info.setRowCount(0)
        self.city_info.setColumnCount(2)
        self.city_info.setHorizontalHeaderLabels(["도시명", "인구수"])

        row = curs.fetchone()
        i = 0
        while row:
            self.city_info.insertRow(i)
            self.city_info.setItem(i, 0, QTableWidgetItem(str(row[0])))
            pop_item = QTableWidgetItem(f"{row[1]:,}")
            pop_item.setTextAlignment(Qt.AlignRight | Qt.AlignVCenter)
            self.city_info.setItem(i, 1, pop_item)
            row = curs.fetchone()
            i += 1

        curs.close()
        disconnectDB(conn)

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = CityInfoApp()
    sys.exit(app.exec_())
\`\`\`

---

## 4. SQL Injection 공격 메커니즘과 Prepared Statement 방어

### SQL Injection 취약 코드 (문자열 단순 결합)

\`\`\`python
# [위험!] 문자열 포맷팅을 사용한 취약 코드
user_input = "admin' OR '1'='1"
sql = f"SELECT * FROM users WHERE username = '{user_input}' AND password = '{pw_input}'"
# 실행 쿼리: SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = '...'
# 인증 조작으로 비밀번호 없이 로그인 성공!
\`\`\`

### 안전한 방어 코드 (Prepared Statement & Bind Variables)

\`\`\`python
# [안전!] 바인드 변수를 적용한 시큐어 코딩
sql = "SELECT * FROM users WHERE username = :1 AND password = :2"
curs.execute(sql, (user_input, pw_input)) # 입력값이 안전하게 데이터 파라미터로 상쇄됨
\`\`\`
`
  },
  // 20
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
  let sqlContent = `-- Full Database Master Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_database_master_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully updated 5 Database Master SQL chunk files with pjt/26 source code!');
