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
- **DBMS (Database Management System)**: 대용량 데이터를 공유 저장하고 사용자 및 애플리케이션의 요청에 따라 검색, 수정, 관리를 안전하게 수행하는 전용 소프트웨어입니다.
- **ANSI-SPARC 3-Schema Architecture**: 데이터베이스 시스템의 복잡성을 숨기고 데이터 독립성을 보증하기 위해 데이터베이스 구조를 3단계(외부, 개념, 내부)로 추상화한 표준 모델입니다.
- **Data Independence (데이터 독립성)**: 하위 단계의 데이터 구조가 변경되더라도 상위 단계의 응용 프로그램이나 뷰에 영향을 주지 않는 성질입니다.

---

## 2. 데이터와 정보의 변환 연산 파이프라인

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

## 3. ANSI-SPARC 3단계 데이터베이스 아키텍처

1. **External Level (외부 단계 / 사용자 뷰)**: 각 사용자나 응용 프로그램의 입장에서 필요한 데이터만 보여주는 개별 사용자 뷰(User View)입니다.
2. **Conceptual Level (개념 단계 / 개념 스키마)**: 데이터베이스 전체의 논리적 구조를 정의하는 전체 스키마(Global Schema)입니다.
3. **Internal Level (내부 단계 / 내부 스키마)**: 실제 물리적 저장 장치(SSD/HDD)에 데이터가 어떻게 저장되는지 나타내는 물리적 저장 구조(Physical Schema)입니다.
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
- **Degree (차수)**: 한 릴레이션에 존재하는 속성(Attribute)의 총 개수입니다.
- **Cardinality (카디널리티)**: 한 릴레이션에 존재하는 튜플(Tuple)의 총 개수입니다.
- **Primary Key (기본키 / PK)**: 후보키 중 선택된 대표 키로, \`NULL\` 값을 가질 수 없으며 중복될 수 없습니다.
- **Foreign Key (외래키 / FK)**: 다른 릴레이션의 기본키를 참조하는 속성으로, 릴레이션 간의 관계를 형성합니다.

---

## 2. 다양한 키(Key)의 분류 정리표

| 키 종류 | 유일성 | 최소성 | NULL 허용 여부 | 핵심 기능 및 설명 |
| :--- | :---: | :---: | :---: | :--- |
| **슈퍼키 (Super Key)** | O | X | X | 튜플을 유일하게 구별할 수만 있으면 되는 속성 집합 |
| **후보키 (Candidate Key)** | O | O | X | 튜플을 유일하게 구별하며 최소성을 만족하는 속성 집합 |
| **기본키 (Primary Key)** | O | O | **불가 (NOT NULL)** | 후보키 중 DB 설계자가 선택한 대표 식별자 키 |
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

- **Select Operator ($\sigma$)**: 릴레이션에서 특정 조건(Condition)을 만족하는 행(튜플)의 부분집합을 선택하는 단항 연산자입니다.
- **Project Operator ($\pi$)**: 릴레이션에서 지정된 열(속성)의 부분집합만을 추출하는 단항 연산자입니다.
- **Union Compatible (합집합 호환성)**: 두 릴레이션 간에 집합 연산을 수행하기 위해 차수가 같고 대응하는 속성의 도메인이 동일해야 하는 전제 조건입니다.
`
  },
  // 5
  {
    order_index: 5,
    slug: 'ch05-relational-algebra-advanced-join-and-division',
    title: '고급 관계대수 연산자: 카티션 곱(×), 조인(⋈), 세타 조인 및 디비전(÷)',
    seo_title: '고급 관계대수 - 카티션 곱(×), 동등 조인(⋈), 자연 조인, 세타 조인 & 디비전(÷)',
    seo_description: '두 릴레이션을 연결하는 고급 관계대수 연산자 카티션 곱(Cartesian Product, ×), 동등 조인(Equi Join), 자연 조인(Natural Join ⋈), 세타 조인(Theta Join) 및 디비전(Division ÷) 연산식을 배웁니다.',
    excerpt: '여러 릴레이션의 데이터를 결합하는 핵심 연산인 카티션 곱, 자연 조인, 세타 조인과 모든 조건을 만족하는 상대를 찾는 디비전(Division) 연산을 학습합니다.',
    content_md: `두 개 이상의 릴레이션을 합성하여 데이터를 조율하는 **고급 관계대수 연산자(조인, 디비전, 카티션 곱)**를 심도 있게 학습합니다.

---

## 1. 고급 관계대수 핵심 전문 용어 사전 (Glossary)

- **Cartesian Product (카티션 곱, $\times$)**: R의 $N$개 튜플과 S의 $M$개 튜플을 모든 가능한 조합으로 묶어 총 $N \times M$개의 튜플을 생성하는 이항 연산입니다.
- **Theta Join (세타 조인, $\bowtie_{\theta}$)**: 카티션 곱을 수행한 후 조건식 $\theta$ (비교 연산자 $=, \neq, <, >$)를 만족하는 튜플만 필터링하는 연산입니다.
- **Equi Join (동등 조인)**: 세타 조인 조건식 중 동등 비교 연산자($=$)만을 사용하는 조인입니다.
- **Natural Join (자연 조인, $\bowtie$)**: 두 릴레이션의 공통 속성을 기준으로 동등 조인을 수행한 후, 중복되는 공통 속성을 하나만 남기고 프로젝트 제거하는 연산입니다.
- **Division Operator (디비전, $\div$)**: 릴레이션 R(X, Y)와 S(Y)가 있을 때, S의 모든 Y 값들을 만족하는 R의 X 속성 값들을 추출하는 디비전 연산입니다.

---

## 2. 조인 연산자 종류 및 수학적 수식 비교표

| 조인 종류 | 기호 표현식 | 특징 및 작동 원리 |
| :--- | :--- | :--- |
| **카티션 곱** | $R \times S$ | 조건 없이 모든 튜플을 1:1로 교차 조합 (차수: $deg(R)+deg(S)$, 카디널리티: $card(R) \times card(S)$) |
| **세타 조인** | $R \bowtie_{\theta} S = \sigma_{\theta}(R \times S)$ | 조건식 $\theta$를 만족하는 조합만 추출 |
| **자연 조인** | $R \bowtie S$ | 공통 속성 이름 기준 자동 동등 조인 및 중복 컬럼 제거 |
| **디비전** | $R \div S$ | S의 모든 튜플 값을 포함하고 있는 R의 특정 속성 그룹 추출 |

---

## 3. 디비전(Division) 연산의 실전 알고리즘 예시

"모든 필수 과목(S)을 수강 신청한 학생 목록(R)"을 구하는 연산:

\`\`\`
릴레이션 R (수강신청)              릴레이션 S (필수과목)        R ÷ S (결과 릴레이션)
+--------+----------+             +----------+                 +--------+
| 학번   | 과목코드 |             | 과목코드 |                 | 학번   |
+--------+----------+             +----------+                 +--------+
| 202601 | CS101    |             | CS101    |                 | 202601 |
| 202601 | CS102    |             | CS102    |                 +--------+
| 202602 | CS101    |             +----------+
+--------+----------+
\`\`\`
`
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
INSERT INTO emp VALUES (7839, 'KING', 'PRESIDENT', NULL, TO_DATE('17-11-1981','DD-MM-YYYY'), 5000, NULL, 10);
COMMIT;
\`\`\`
`
  },
  // 7
  {
    order_index: 7,
    slug: 'ch07-sql-dml-basic-queries-and-filtering',
    title: 'SQL DML 기본 조회: SELECT, WHERE 조건식, LIKE, IN, BETWEEN 및 ORDER BY 정렬',
    seo_title: 'SQL DML 기본 조회 - SELECT, WHERE 조건절, LIKE 와일드카드, IN, BETWEEN & ORDER BY',
    seo_description: 'SELECT 절, WHERE 조건 필터링, LIKE 와일드카드(%, _), IN, BETWEEN, IS NULL 및 ORDER BY (ASC/DESC) 정렬 구문 작성을 배웁니다.',
    excerpt: '원하는 데이터를 정확하게 검색하는 SELECT 구문, WHERE 조건절의 와일드카드 패턴 매칭과 정렬(ORDER BY) 키워드 활용법을 다룹니다.',
    content_md: `데이터베이스에 저장된 튜플 데이터를 검색하는 **SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬** 문법을 배웁니다.

---

## 1. SELECT 문법 구성과 논리적 실행 순서

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

## 2. 실전 EMP 사원 테이블 조회 SQL 예제

\`\`\`sql
SELECT empno, ename, job, sal
FROM emp
WHERE sal BETWEEN 2000 AND 4000
  AND comm IS NULL
ORDER BY sal DESC, ename ASC;
\`\`\`
`
  },
  // 8 (대용량 보강 확정)
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

- **\`COUNT(*)\`**: NULL을 포함한 전체 행의 개수를 반환합니다.
- **\`COUNT(컬럼)\`**: 해당 컬럼에서 \`NULL\`을 제외한 유효 행의 개수를 반환합니다.
- **\`SUM(컬럼)\`**: NULL을 제외한 수치 데이터의 합계를 계산합니다.
- **\`AVG(컬럼)\`**: NULL을 제외한 평균을 계산합니다.
- **\`MAX(컬럼)\` / \`MIN(컬럼)\`**: 최댓값과 최솟값을 구합니다.

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
  // 9 (대용량 보강 확정)
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
  // 10 (대용량 보강 확정)
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
- **상관 서브쿼리 (Correlated Subquery)**: 메인 쿼리의 각 행(Row)을 하나씩 읽을 때마다 메인 쿼리의 값을 서브쿼리 내부 조건식에 전달하여 반복적으로 실행되는 방식입니다.

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
  // 11
  {
    order_index: 11,
    slug: 'ch11-sql-dml-data-mutation-insert-update-delete',
    title: 'SQL 데이터 조작: INSERT INTO, UPDATE, DELETE 및 MERGE(UPSERT) 패턴',
    seo_title: 'SQL 데이터 조작 DML - INSERT INTO, UPDATE, DELETE & MERGE(UPSERT)',
    seo_description: '테이블의 튜플 데이터를 삽입, 수정, 삭제하는 DML 명령어 INSERT INTO, UPDATE SET, DELETE FROM 및 MERGE(UPSERT) 패턴을 배웁니다.',
    excerpt: '테이블 내 데이터를 신규 추가(INSERT), 기존 데이터 수정(UPDATE), 데이터 삭제(DELETE)하는 구문과 데이터 병합(MERGE) 패턴을 학습합니다.',
    content_md: `데이터베이스 테이블의 데이터를 직접 변경하는 **DML(Data Manipulation Language)**인 **INSERT, UPDATE, DELETE** 및 **MERGE (UPSERT)** 문법을 학습합니다.

---

## 1. DML 데이터 변동 핵심 전문 용어 사전 (Glossary)

- **\`INSERT INTO\`**: 테이블에 새로운 행(Tuple) 데이터를 추가 삽입하는 DML 구문입니다.
- **\`UPDATE SET\`**: 조건을 만족하는 기존 튜플의 특정 컬럼 값들을 새 값으로 변경하는 구문입니다.
- **\`DELETE FROM\`**: 조건을 만족하는 튜플 행들을 삭제하는 구문입니다.
- **\`MERGE\` (UPSERT)**: 타겟 테이블에 특정 키의 데이터가 존재하면 UPDATE를 수행하고, 존재하지 않으면 INSERT를 수행하는 조건부 병합 구문입니다.

---

## 2. 실전 DML 문법 및 MERGE 패턴 SQL 예제

\`\`\`sql
-- 1. INSERT INTO (단일 행 및 Subquery 기반 다중 행 삽입)
INSERT INTO dept (deptno, dname, loc) VALUES (50, 'PLANNING', 'SEOUL');

-- 2. UPDATE (부서 20 소속 사원들의 급여 10% 인상)
UPDATE emp
SET sal = sal * 1.10
WHERE deptno = 20;

-- 3. DELETE (입사일이 1981년 이전인 사원 데이터 정제)
DELETE FROM emp
WHERE hiredate < TO_DATE('1981-01-01', 'YYYY-MM-DD');
\`\`\`
`
  },
  // 12
  {
    order_index: 12,
    slug: 'ch12-sql-advanced-analytic-window-functions',
    title: 'SQL 고급 분석 및 윈도우 함수: OVER(PARTITION BY ORDER BY), RANK, DENSE_RANK, ROW_NUMBER',
    seo_title: 'SQL 윈도우 함수 - OVER(PARTITION BY ORDER BY), ROW_NUMBER, RANK, DENSE_RANK',
    seo_description: '행과 행 간의 관계를 분석하는 SQL 윈도우 함수, OVER 절, PARTITION BY, ORDER BY, 순위 함수(ROW_NUMBER, RANK, DENSE_RANK) 및 이동 집계를 배웁니다.',
    excerpt: '기존 GROUP BY와 달리 행의 개수를 유지하면서 그룹별 순위, 누적합, 이동 평균을 계산하는 SQL 윈도우 분석 함수(OVER 절)의 활용법을 다룹니다.',
    content_md: `행의 집합(Window)을 대상으로 각 행마다 분석 집계 결과를 계산해 내는 고급 분석 도구인 **SQL 윈도우 함수(Window Functions)**를 학습합니다.

---

## 1. 윈도우 함수 핵심 전문 용어 사전 (Glossary)

- **Window Function**: 행과 행 간의 관계를 정의하여 집계, 순위, 비율, 순서 등을 원본 행 수 보존 상태에서 연산해 내는 고급 SQL 구문입니다.
- **\`ROW_NUMBER()\`**: 동일한 값이 존재해도 무조건 유일한 연번(1, 2, 3, 4)을 순차적으로 부여하는 순위 함수입니다.
- **\`RANK()\`**: 동률 값이 존재할 경우 동일한 순위를 부여하고, 그 다음 순위를 동률 수만큼 건너뛰는 함수입니다. (예: 1, 2, 2, 4)
- **\`DENSE_RANK()\`**: 동률 값이 존재해도 다음 순위를 건너뛰지 않고 빽빽하게 이어 붙이는 함수입니다. (예: 1, 2, 2, 3)

---

## 2. 부서별 급여 순위 및 이전/다음 값 분석 실전 SQL

\`\`\`sql
SELECT 
    deptno, 
    ename, 
    sal,
    ROW_NUMBER() OVER (PARTITION BY deptno ORDER BY sal DESC) AS row_num,
    RANK() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rnk,
    LAG(sal, 1) OVER (PARTITION BY deptno ORDER BY sal DESC) AS prev_sal
FROM emp;
\`\`\`
`
  },
  // 13
  {
    order_index: 13,
    slug: 'ch13-views-and-indexes-b-tree-architecture',
    title: '가상 테이블 뷰(View)와 데이터베이스 인덱스 아키텍처: B-Tree & B+Tree 색인 메커니즘',
    seo_title: 'DB 뷰 & 인덱스 아키텍처 - View 장단점, B-Tree & B+Tree 인덱스 & Clustered Index',
    seo_description: '가상 테이블 뷰(View)의 장단점 및 인덱스(Index), B-Tree / B+Tree 아키텍처, 클러스터드(Clustered) vs 넌클러스터드 인덱스를 배웁니다.',
    excerpt: '보안과 편의성을 제공하는 가상 테이블 뷰(View)와 데이터베이스 검색 속도를 비약적으로 향상시키는 B-Tree / B+Tree 인덱스 내부 구조를 심도 있게 다룹니다.',
    content_md: `자주 사용하는 복잡한 쿼리를 가상 테이블로 정의하는 **뷰(View)**와 데이터베이스 검색 속도를 극대화하는 **인덱스(Index) 아키텍처(B-Tree & B+Tree)**를 다룹니다.

---

## 1. 뷰와 인덱스 핵심 전문 용어 사전 (Glossary)

- **View (뷰)**: 하나 이상의 테이블을 기반으로 만들어진 물리적 데이터가 없는 **가상 테이블(Virtual Table)**입니다.
- **Index (인덱스)**: 테이블의 열(Column) 데이터에 대한 색인 위치 포인터를 B-Tree 구조로 구축하여 검색 속도를 $O(\log N)$으로 높여주는 색인 구조입니다.
- **Clustered Index (클러스터드 인덱스)**: 테이블 당 단 1개만 존재하며, 인덱스의 리프 노드가 실제 테이블 데이터 페이지 자체를 물리적으로 정렬하여 관리하는 인덱스입니다.
- **Non-Clustered Index (넌클러스터드 인덱스)**: 테이블 당 여러 개 생성이 가능하며, 인덱스 리프 노드가 실제 데이터의 물리적 주소를 가리키는 인덱스 페이지입니다.

---

## 2. 인덱스 생성 및 뷰 정의 SQL 실전 예제

\`\`\`sql
-- 뷰 생성
CREATE VIEW v_emp_dept20 AS
SELECT empno, ename, job, hiredate
FROM emp
WHERE deptno = 20;

-- 인덱스 생성
CREATE INDEX idx_emp_ename ON emp(ename);
\`\`\`
`
  },
  // 14
  {
    order_index: 14,
    slug: 'ch14-database-design-erd-modeling',
    title: '데이터베이스 설계 1: 개념적 모델링과 ERD(Entity-Relationship Diagram) 엔티티/관계/카디널리티',
    seo_title: 'DB 설계 1 - 개념적 설계, ERD 모델링, Entity, Attribute & Relationship',
    seo_description: '개념적 데이터 설계, ERD(Entity-Relationship Diagram) 작성법, 개체(Entity), 속성(Attribute), 관계(Relationship), 카디널리티 표현법을 배웁니다.',
    excerpt: '현실 세계의 요구사항을 직관적인 다이어그램으로 추상화하는 ERD 개념적 데이터 모델링과 엔티티, 속성, 관계 타입의 정의 및 매핑 규칙을 학습합니다.',
    content_md: `사용자의 요구사항 분석을 바탕으로 현실 세계의 정보 구조를 직관적인 그래픽 다이어그램으로 변환하는 **개념적 DB 설계(ERD 모델링)**를 학습합니다.

---

## 1. ERD 개념적 모델링 용어 사전 (Glossary)

- **Entity (엔티티 / 개체)**: 현실 세계에 독립적으로 존재하는 사물, 사람, 개념으로, 테이블(Table)로 변환되는 데이터 대상입니다.
- **Attribute (속성)**: 엔티티가 가진 고유한 특성이나 정보 항목으로, 컬럼(Column)으로 변환됩니다.
- **Relationship (관계)**: 엔티티 간의 논리적인 연관성으로, 외래키(FK) 제약조건으로 변환됩니다.
`
  },
  // 15
  {
    order_index: 15,
    slug: 'ch15-normalization-anomalies-1nf-2nf-3nf-bcnf',
    title: '데이터베이스 설계 2: 정규화(Normalization)와 이상 현상(삽입/수정/삭제 이상), 1NF/2NF/3NF/BCNF',
    seo_title: 'DB 정규화(Normalization) - 이상 현상(Anomalies), 함수 종속성 & 1NF/2NF/3NF/BCNF',
    seo_description: '데이터 중복 제거와 이상 현상 방지를 위한 정규화(Normalization), 함수 종속성(FD), 1NF/2NF/3NF/BCNF 분해를 배웁니다.',
    excerpt: '잘못 설계된 릴레이션에서 발생하는 3대 이상 현상을 방지하기 위해 함수 종속성(Functional Dependency)을 기반으로 스키마를 분해하는 정규화 과정을 다룹니다.',
    content_md: `데이터베이스의 중복성을 제거하여 저장 공간을 절약하고 3대 이상 현상(Anomalies)을 예방하는 **정규화(Normalization)** 기술을 완벽 정리합니다.

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
`
  },
  // 16
  {
    order_index: 16,
    slug: 'ch16-database-security-dcl-and-access-control',
    title: '데이터베이스 관리와 보안: DCL(GRANT/REVOKE), 사용자 권한, 백업/복구 및 접근 제어',
    seo_title: 'DB 관리와 보안 - DCL(GRANT/REVOKE), 사용자 계정, Role 관리 & 백업/복구',
    seo_description: 'DCL(GRANT, REVOKE), 역할(Role) 기반 접근 제어(RBAC), 데이터 백업 및 장애 복구 메커니즘을 배웁니다.',
    excerpt: '데이터베이스에 대한 비인가 접근을 막는 사용자 계정 및 DCL 권한 제어(GRANT/REVOKE)와 시스템 장애 발생 시 데이터를 원상 복구하는 백업 전략을 학습합니다.',
    content_md: `데이터베이스 시스템을 안전하게 보호하기 위한 **보안 접근 제어(DCL: GRANT/REVOKE)**와 계정/롤(Role) 관리 및 **백업·복구(Backup & Recovery)** 전략을 다룹니다.

---

## 1. DCL 보안 핵심 전문 용어 사전 (Glossary)

- **DCL (Data Control Language)**: 데이터베이스 보안, 권한 부여, 객체 접근 제어를 담당하는 쿼리 언어입니다. (\`GRANT\`, \`REVOKE\`)
- **Role (롤)**: 다수의 사용자에게 공통 권한 묶음을 효율적으로 할당하기 위해 만든 권한 그룹 집합체입니다.

---

## 2. DCL 사용자 생성 및 권한 부여/회수 SQL

\`\`\`sql
CREATE USER 'dev_user'@'%' IDENTIFIED BY 'secure_password';
GRANT SELECT, INSERT ON emp TO 'dev_user'@'%';
REVOKE INSERT ON emp FROM 'dev_user'@'%';
\`\`\`
`
  },
  // 17
  {
    order_index: 17,
    slug: 'ch17-transactions-acid-properties',
    title: '트랜잭션(Transaction) 기초: ACID 성질(원자성, 일관성, 격리성, 지속성)과 COMMIT/ROLLBACK',
    seo_title: '트랜잭션(Transaction) - ACID 성질 (Atomicity, Consistency, Isolation, Durability)',
    seo_description: '트랜잭션(Transaction), ACID 4대 성질(원자성, 일관성, 격리성, 지속성), 성공 확정 COMMIT, 작업 취소 ROLLBACK을 배웁니다.',
    excerpt: '데이터베이스의 일관성과 작업 완결성을 보장하는 핵심 단위인 트랜잭션(Transaction)의 ACID 4대 속성과 COMMIT/ROLLBACK의 구동 원리를 다룹니다.',
    content_md: `데이터베이스의 상태를 변화시키는 하나의 논리적인 작업 단위인 **트랜잭션(Transaction)**과 **ACID 4대 성질**을 학습합니다.

---

## 1. 트랜잭션 ACID 4대 성질

1. **Atomicity (원자성)**: "All or Nothing"으로 완벽히 전부 수행되거나 아예 실행되지 않아야 합니다.
2. **Consistency (일관성)**: 실행 전후의 데이터베이스는 항상 정해진 무결성 제약조건을 만족해야 합니다.
3. **Isolation (격리성)**: 실행 중인 트랜잭션에 다른 동시 트랜잭션이 끼어들어 중간 상태를 참조할 수 없습니다.
4. **Durability (지속성)**: 성공적으로 완료(COMMIT)된 트랜잭션의 결과는 영구 보존되어야 합니다.
`
  },
  // 18
  {
    order_index: 18,
    slug: 'ch18-concurrency-control-locking-and-isolation-levels',
    title: '동시성 제어(Concurrency Control): 로킹(Locking), 교착상태(Deadlock) 및 ANSI 격리 수준(Isolation Levels)',
    seo_title: '동시성 제어 - 로킹(Locking), Deadlock, 타임스탬프 & ANSI 트랜잭션 격리 수준',
    seo_description: '동시성 제어, 공유/배타 잠금(Shared/Exclusive Lock), 2단계 로킹(2PL), 교착상태(Deadlock) 및 4가지 트랜잭션 격리 수준을 배웁니다.',
    excerpt: '여러 트랜잭션이 동시 접근할 때 데이터 부정합을 방지하는 동시성 제어(Locking, 2PL)와 교착상태, 그리고 4단계 트랜잭션 격리 수준을 학습합니다.',
    content_md: `여러 트랜잭션이 동시에 데이터베이스에 접근할 때 상호 간섭으로 인한 문제점을 방지하는 **동시성 제어(Concurrency Control)**와 **트랜잭션 격리 수준**을 배웁니다.

---

## 1. 동시성 미제어 시 발생하는 3대 현상

- **Dirty Read**: 아직 커밋되지 않은 다른 트랜잭션의 변경 데이터를 읽는 현상입니다.
- **Non-Repeatable Read**: 동일한 데이터를 두 번 읽을 때 중간에 타 트랜잭션이 UPDATE하여 값이 달라지는 현상입니다.
- **Phantom Read**: 범위 쿼리를 두 번 실행할 때 중간에 타 트랜잭션이 INSERT하여 새로운 유령 행이 나타나는 현상입니다.

---

## 2. ANSI 4단계 트랜잭션 격리 수준 (Isolation Levels)

| 격리 수준 | Dirty Read | Non-Repeatable Read | Phantom Read |
| :--- | :---: | :---: | :---: |
| **READ UNCOMMITTED** | **발생** | **발생** | **발생** |
| **READ COMMITTED** | 방지 | **발생** | **발생** |
| **REPEATABLE READ** | 방지 | 방지 | **발생** |
| **SERIALIZABLE** | 방지 | 방지 | 방지 |
`
  },
  // 19
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

- **DB Driver / Binding**: 파이썬 코드에서 데이터베이스 엔진과 TCP/IP 통신을 주고받는 모듈입니다.
- **Cursor (커서)**: SQL 실행 결과 튜플 결과셋을 가리키는 버퍼 포인터 객체입니다. (\`curs.fetchone()\`, \`curs.fetchall()\`)
- **Bind Variables (바인드 변수)**: SQL 쿼리문에 변수값을 동적으로 대입하여 **SQL Injection을 근본 차단**하는 안전한 기법입니다.

---

## 2. pjt/26 실전 파이썬 DB 연동 코드

\`\`\`python
import oracledb

conn = oracledb.connect(user="scott", password="tiger", dsn="localhost/emppdb")
curs = conn.cursor()

sql_select = "SELECT empno, ename, job, sal FROM emp WHERE deptno = :1"
curs.execute(sql_select, (20,))

rows = curs.fetchall()
for r in rows:
    print(f"사번: {r[0]}, 이름: {r[1]}, 직급: {r[2]}, 급여: {r[3]:,}원")

curs.close()
conn.close()
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
    content_md: `비정형 대용량 빅데이터 처리와 클라우드 수평 확장성(Scale-out)을 보장하는 **NoSQL 데이터베이스(MongoDB, Redis, Neo4j)**와 **NewSQL 분산 DB 트렌드**를 다룹니다.

---

## 1. NoSQL 및 CAP 정리 핵심 용어 사전 (Glossary)

- **NoSQL (Not Only SQL)**: 가변적인 스키마와 뛰어난 수평 확장성(Scale-out)을 제공하여 빅데이터 및 비정형 데이터를 처리하는 비관계형 데이터베이스입니다.
- **CAP Theorem (CAP 정리)**: 분산 데이터베이스 시스템은 **Consistency(일관성)**, **Availability(가용성)**, **Partition Tolerance(분할 용인성)** 3가지 속성을 동시에 모두 만족할 수 없다는 이론입니다.
- **BASE**: NoSQL이 일관성을 조금 희생하고 가용성과 확장성을 얻기 위해 따르는 원칙입니다.
- **NewSQL**: ACID 트랜잭션 속성을 완벽히 보장하면서도 NoSQL의 초고속 수평 분산 확장 능력을 결합한 차세대 DB입니다.

---

## 2. NoSQL 4대 데이터 모델 분류 및 특징 비교표

| NoSQL 데이터 모델 | 대표 제품 | 핵심 특징 및 적합한 사용 사례 |
| :--- | :--- | :--- |
| **Key-Value Store** | **Redis**, Memcached | 단순 키-값 매핑, 인메모리 처리로 초고속 조회 (캐싱, 세션 보관) |
| **Document Store** | **MongoDB**, CouchDB | JSON / BSON 형태의 유연한 문서 구조 저장 (비정형 데이터, CMS) |
| **Wide-Column Store** | **Cassandra**, HBase | 행마다 다른 컬럼을 가질 수 있는 열 중심 분산 저장 |
| **Graph Store** | **Neo4j**, Amazon Neptune | 노드(Node)와 간선(Edge)의 관계망 저장 (소셜 네트워크, 추천 시스템) |
`
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
  let sqlContent = `-- Complete Database Master Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_database_complete_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 5 Complete Database SQL chunk files!');
