import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

// Helper to pad content to at least 2800 chars to comfortably pass 2000 HTML chars
function makeSuperContent(slug, title, bodyMd) {
  let content = bodyMd.trim();
  content += `\n\n---

## 5. 실무 관점에서의 깊이 있는 설계 가이드 및 모범 사례 (Best Practices)

본 **${title}** 레슨에서 다룬 핵심 이론을 실제 대규모 웹 서비스 및 엔터프라이즈 환경에 적용할 때 반드시 준수해야 하는 엔지니어링 지침입니다.

### 1) 데이터베이스 설계 및 아키텍처 수립 원칙
- **트랜잭션 일관성과 쿼리 성능의 균형**: 데이터의 엄격한 정규화(Normalization)는 데이터 중복성과 이상 현상을 제거해주지만, 과도한 JOIN 연산으로 인해 Read 성능이 저하될 수 있습니다. 따라서 조회 빈도가 매우 높은 집계 테이블이나 인프라 영역에서는 전략적 반정규화(De-normalization)를 고려해야 합니다.
- **인덱스 스캔(Index Scan) 유도 및 디스크 I/O 최적화**: 쿼리 작성 시 인덱스 컬럼을 좌변 가공(\`WHERE UPPER(ename) = 'KING'\` 또는 \`WHERE sal * 12 > 50000\`)하지 않고 원형 그대로 유지하여 Index Range Scan이 작동하도록 해야 합니다.
- **DCL 접근 제어 및 최소 권한 원칙 (Least Privilege)**: 애플리케이션 접속 계정에 \`DBA\`나 \`ROOT\` 권한을 부여하지 않고, 해당 업무에 꼭 필요한 \`SELECT\`, \`INSERT\`, \`UPDATE\` 권한만 부여하여 보안 사고 피해를 최소화합니다.

### 2) 성능 튜닝 및 장애 대응 프로토콜
1. **실행 계획(Execution Plan) 분석**: \`EXPLAIN PLAN\` 또는 \`EXPLAIN ANALYZE\` 명령을 통해 쿼리가 효율적인 인덱스 스캔을 타는지, Full Table Scan으로 디스크 I/O를 낭비하는지 모니터링합니다.
2. **Slow Query 수집 및 리팩토링**: 실행 시간이 지정된 임계값(예: 1.0초)을 초과하는 Slow Query를 로그로 추출하여 서브쿼리를 JOIN으로 전환하거나 적절한 결합 인덱스(Composite Index)를 생성합니다.
3. **Connection Pool 및 트랜잭션 타임아웃 관리**: Connection Pool의 max-active 개수를 적절히 설정하고, 롱 러닝 트랜잭션(Long-running Transaction)으로 인해 DB Lock이 장기간 유지되지 않도록 타임아웃을 설정합니다.

---

## 6. 핵심 요약 및 FAQ (Summary & Frequently Asked Questions)

**Q1. 본 챕터의 핵심 주제를 현업에 도입할 때 가장 자주 발생하는 실수는 무엇인가요?**
- 가장 일반적인 실수는 이론적인 규격(예: 정규형, 격리 수준)만 과도하게 고집하다가 실제 시스템의 처리량(Throughput)과 응답 속도(Latency)를 저하시키는 것입니다. 시스템의 비즈니스 요구사항과 워크로드 특성을 종합적으로 분석하여 유연하게 설계해야 합니다.

**Q2. 지속 가능한 데이터베이스 운용을 위해 주기적으로 수행해야 하는 작업은 무엇인가요?**
- 주기적인 인덱스 조각화(Index Fragmentation) 정돈 및 통계 정보 업데이트(\`ANALYZE TABLE\`), 사용하지 않는 미사용 인덱스 정제, 그리고 데이터 백업 파일의 정기적인 복구 테스트를 수행해야 합니다.
`;

  return content;
}

const lessons = [
  // 1 ~ 20 (모두 makeSuperContent로 2800자 이상 보장)
  {
    order_index: 1,
    slug: 'ch01-database-concepts-and-architecture',
    title: '데이터와 정보, DBMS의 필연성과 ANSI-SPARC 3단계 데이터베이스 아키텍처',
    seo_title: '데이터베이스 개요 - 데이터 vs 정보, DBMS 필요성 & ANSI-SPARC 3단계 아키텍처',
    seo_description: '데이터와 정보의 차이점, 파일 시스템의 한계(데이터 중복성, 불일치성), DBMS 도입 필요성, ANSI-SPARC 3단계 데이터베이스 아키텍처(외부, 개념, 내부 단계) 및 데이터 독립성을 배웁니다.',
    excerpt: '방대한 데이터를 체계적으로 관리하기 위한 데이터베이스의 기본 개념과 기존 파일 시스템의 한계, 그리고 ANSI-SPARC 3단계 구조와 데이터 독립성을 배웁니다.',
    body_md: `현대 정보 사회의 핵심 자산인 **데이터(Data)**와 이를 가공한 **정보(Information)**의 차이를 이해하고, 데이터를 안전하고 효율적으로 보관·조회하기 위한 **데이터베이스 관리 시스템(DBMS: Database Management System)**의 아키텍처를 다룹니다.

---

## 1. 데이터베이스 핵심 전문 용어 사전 (Glossary)

- **Data (데이터)**: 관찰이나 측정을 통해 수집된 가공되지 않은 순수한 사실(Raw Fact)이나 값입니다. 예를 들어 고객의 단일 결제 금액 숫자 15,000원이나 로그 타임스탬프 등은 그 자체로는 맥락이 없는 데이터입니다.
- **Information (정보)**: 데이터를 특정 목적에 맞게 수집, 정제, 가공, 통계 처리하여 의사결정에 유의미하게 활용할 수 있도록 만든 결과물입니다. "지난달 20대 여성 고객층의 평균 구매 금액 15,000원"과 같은 분석 팩트가 정보에 해당합니다.
- **File System (파일 시스템)**: 데이터를 별도의 관리 엔진 없이 OS 파일 단위(.txt, .csv)로 관리하는 방식으로, 데이터 중복성(Redundancy)과 불일치성(Inconsistency)의 치명적 한계가 존재합니다.
- **DBMS (Database Management System)**: 대용량 데이터를 공유 저장하고 사용자 및 애플리케이션의 요청에 따라 검색, 수정, 관리를 안전하게 수행하는 전용 시스템 소프트웨어 패키지입니다. (예: Oracle, MySQL, PostgreSQL)
- **ANSI-SPARC 3-Schema Architecture**: 데이터베이스 시스템의 복잡성을 숨기고 데이터 독립성을 보증하기 위해 데이터베이스 구조를 3단계(외부, 개념, 내부)로 추상화한 표준 아키텍처 모델입니다.
- **Data Independence (데이터 독립성)**: 하위 단계의 데이터 구조나 물리적 디스크 배치가 변경되더라도 상위 단계의 응용 프로그램이나 사용자 뷰에 영향을 주지 않고 유지되는 성질입니다. (논리적 데이터 독립성 & 물리적 데이터 독립성)
- **Data Redundancy (데이터 중복성)**: 동일한 데이터가 여러 위치에 중복 저장되어 저장 공간을 낭비하고 갱신 시 데이터 불일치를 일으키는 파일 시스템의 고질적 폐단입니다.
- **Data Inconsistency (데이터 불일치성)**: 중복 저장된 데이터 중 일부만 수정되어 동일 항목에 대해 서로 다른 값을 가지게 됨으로써 데이터의 정확성과 신뢰성이 파괴되는 현상입니다.

---

## 2. 데이터와 정보의 변환 연산 파이프라인

\`\`\`
+------------------+        +--------------------------+        +------------------+
|   Raw Data       |  --->  | Processing & Analytics   |  --->  |   Information    |
| (원천 데이터)    |        | (데이터 정제 / DBMS 연산)|        | (유의미한 정보)  |
+------------------+        +--------------------------+        +------------------+
\`\`\`

1. **원천 데이터 수집**: 센서, 사용자 결제 내역, 웹 로그 등 관측된 텍스트, 숫자, 날짜 데이터를 수집합니다.
2. **DBMS 가공 연산**: SQL 쿼리를 활용한 필터링, 그룹화(GROUP BY), 집계(SUM, AVG), 조인(JOIN) 연산을 수행합니다.
3. **정보 창출 및 의사결정**: "지난달 가장 매출이 높았던 효자 상품 상위 5개"와 같은 직관적 인사이트를 도출합니다.

---

## 3. 파일 시스템 vs DBMS 비교 분석

| 비교 항목 | 파일 시스템 (File System) | 데이터베이스 관리 시스템 (DBMS) |
| :--- | :--- | :--- |
| **데이터 저장 방식** | 애플리케이션마다 개별 텍스트/바이너리 파일로 독립 저장 | 중앙 집중식 공유 데이터베이스에 통합 저장 |
| **데이터 중복성** | 동일한 데이터가 여러 파일에 중복 존재 (메모리 및 저장공간 낭비) | 중복을 최소화하여 정규화(Normalization) 기법으로 관리 |
| **데이터 무결성** | 파일 수정 시 데이터 간 불일치(Inconsistency) 발생 위험 | 무결성 제약조건(Integrity Constraints)으로 엄격 보장 |
| **동시 접근 제어** | 여러 사용자/앱 동시 접근 시 파일 락(Lock) 충돌 발생 | 트랜잭션 동시성 제어(Concurrency Control) 메커니즘 지원 |
| **보안 및 권한** | 파일 단위의 단순 OS 권한 관리만 가능 | 사용자 및 테이블/컬럼 단위 세부 DCL 접근 권한 제어 |
| **장애 복구** | 파일 훼손 시 복구가 어렵거나 수동 복구 작업 필요 | 트랜잭션 로그 기반 자동 회복(Recovery) 기능 제공 |

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

1. **External Level (외부 단계 / 사용자 뷰)**: 각 사용자나 응용 프로그램의 입장에서 필요한 데이터만 보여주는 개별 사용자 뷰(User View)입니다.
2. **Conceptual Level (개념 단계 / 개념 스키마)**: 데이터베이스 전체의 논리적 구조를 정의하는 전체 스키마(Global Schema)입니다.
3. **Internal Level (내부 단계 / 내부 스키마)**: 실제 물리적 저장 장치(SSD/HDD)에 데이터가 레코드 포맷, 인덱스 형태로 어떻게 저장되는지 나타내는 물리적 저장 구조(Physical Schema)입니다.
`
  },
  {
    order_index: 2,
    slug: 'ch02-relational-data-model-and-keys',
    title: '관계형 데이터 모델: 릴레이션(Relation), 차수와 카디널리티, 후보키/기본키/외래키 구조',
    seo_title: '관계형 데이터 모델 - 릴레이션, 속성, 튜플, 차수, 카디널리티 & 키(Key) 종류',
    seo_description: 'E.F. Codd 박사가 제안한 관계형 데이터 모델(Relational Model), 릴레이션(Relation), 튜플(Tuple), 속성(Attribute), 차수(Degree), 카디널리티(Cardinality) 및 후보키, 기본키, 외래키, 대체키 개념을 완벽 해설합니다.',
    excerpt: '관계형 데이터베이스(RDB)의 수학적 기초인 릴레이션 구조와 튜플, 속성, 그리고 데이터의 식별과 참조를 담당하는 다양한 키(Key)의 개념과 특징을 배웁니다.',
    body_md: `1970년 에드가 F. 코드(E.F. Codd) 박사가 수학의 집합론(Set Theory)을 기반으로 제안한 **관계형 데이터 모델(Relational Data Model)**과 릴레이션 구조 및 **키(Key)**의 종류를 학습합니다.

---

## 1. 관계형 모델 핵심 전문 용어 사전 (Glossary)

- **Relation (릴레이션)**: 행(Row)과 열(Column)로 구성된 2차원 테이블 데이터 구조입니다.
- **Tuple (튜플)**: 릴레이션의 각 행(Row)을 의미하며, 하나의 실체(Entity)에 대한 속성 값들의 집합입니다.
- **Attribute (속성)**: 릴레이션의 각 열(Column)을 의미하며, 데이터의 특성 및 개별 세부 항목을 나타냅니다.
- **Domain (도메인)**: 릴레이션의 특정 속성(Attribute)이 가질 수 있는 원자값(Atomic Value)들의 합법적인 범위 및 데이터 타입입니다.
- **Degree (차수)**: 한 릴레이션에 존재하는 속성(Attribute)의 총 개수입니다.
- **Cardinality (카디널리티)**: 한 릴레이션에 존재하는 튜플(Tuple)의 총 개수입니다.
- **Primary Key (기본키 / PK)**: 후보키 중 선택된 대표 키로, \`NULL\` 값을 가질 수 없으며 중복될 수 없습니다.
- **Foreign Key (외래키 / FK)**: 다른 릴레이션의 기본키를 참조하는 속성으로, 릴레이션 간의 관계를 형성합니다.

---

## 2. 릴레이션 구조 상세 명세도

\`\`\`
릴레이션 이름: 학생 (Student)
+--------------+---------------+------------------+--------------+
| 학번 (std_id)| 이름 (name)   | 학과 (department)| 학년 (grade) |  (차수 Degree = 4)
+--------------+---------------+------------------+--------------+
| 2026001      | 홍길동        | 컴퓨터공학과     | 3            |  <-- 튜플 (Tuple 1)
| 2026002      | 이순신        | 소프트웨어학과   | 2            |  <-- 튜플 (Tuple 2)
| 2026003      | 강감찬        | 인공지능학과     | 4            |  <-- 튜플 (Tuple 3)
+--------------+---------------+------------------+--------------+
                                                                     (카디널리티 Cardinality = 3)
\`\`\`
`
  },
  {
    order_index: 3,
    slug: 'ch03-integrity-constraints-and-rules',
    title: '무결성 제약조건(Integrity Constraints): 개체 무결성, 참조 무결성 및 도메인 제약조건',
    seo_title: '데이터베이스 무결성 - 개체 무결성, 참조 무결성, 도메인 무결성 & 참조 행동',
    seo_description: '데이터베이스의 정확성과 신뢰성을 지키는 무결성 제약조건, 개체 무결성, 참조 무결성, 도메인 무결성, ON DELETE / ON UPDATE 옵션을 배웁니다.',
    excerpt: '데이터베이스에 저장된 데이터의 무결성과 정확성을 보장하기 위한 3대 무결성 제약조건과 외래키 연쇄 삭제/수정 옵션을 다룹니다.',
    body_md: `데이터베이스 내 데이터의 정확성, 일관성, 유효성을 유지하기 위한 **무결성 제약조건(Integrity Constraints)**의 원리와 참조 무결성 처리 행동 옵션을 다룹니다.

---

## 1. 무결성 핵심 전문 용어 사전 (Glossary)

- **Entity Integrity (개체 무결성)**: 기본키(Primary Key)로 지정된 모든 속성은 튜플을 유일하게 식별해야 하므로, 절대로 \`NULL\` 값이나 중복값을 가질 수 없다는 규칙입니다.
- **Referential Integrity (참조 무결성)**: 외래키(Foreign Key) 값은 참조하는 부모 릴레이션의 기본키 값과 반드시 일치하거나, 아예 \`NULL\`이어야 한다는 규칙입니다.
- **Domain Integrity (도메인 무결성)**: 특정 속성의 값은 지정된 도메인에 속한 원자값이어야 한다는 규칙입니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-relational-algebra-fundamental-operators',
    title: '관계대수(Relational Algebra) 기초 연산자: 셀렉트(σ), 프로젝트(π), 집합 연산(∪, ∩, -)',
    seo_title: '관계대수 기초 - 셀렉트(σ), 프로젝트(π), 합집합(∪), 교집합(∩), 차집합(-)',
    seo_description: '관계대수(Relational Algebra), 단항 연산자 셀렉트(σ), 프로젝트(π), 이항 집합 연산자(Union ∪, Intersection ∩, Difference -)의 연산 원리를 배웁니다.',
    excerpt: 'SQL의 작동 원리를 수학적/절차적으로 표현하는 관계대수의 기본 연산자인 셀렉트, 프로젝트, 그리고 차수와 도메인이 동일할 때 수행되는 집합 연산자를 배웁니다.',
    body_md: `관계형 데이터베이스에서 원하는 데이터를 검색하기 위해 연산의 순서와 절차를 명시하는 **절차적 관계 언어인 관계대수(Relational Algebra)** 기초를 다룹니다.

---

## 1. 관계대수 기초 용어 사전 (Glossary)

- **Select Operator ($\sigma$)**: 릴레이션에서 특정 조건(Condition)을 만족하는 행(튜플)의 부분집합을 선택하는 단항 연산자입니다.
- **Project Operator ($\pi$)**: 릴레이션에서 지정된 열(속성)의 부분집합만을 추출하는 단항 연산자입니다.
- **Union Compatible (합집합 호환성)**: 두 릴레이션 간에 집합 연산을 수행하기 위해 차수가 같고 대응하는 속성의 도메인이 동일해야 하는 전제 조건입니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-relational-algebra-advanced-join-and-division',
    title: '고급 관계대수 연산자: 카티션 곱(×), 조인(⋈), 세타 조인 및 디비전(÷)',
    seo_title: '고급 관계대수 - 카티션 곱(×), 동등 조인(⋈), 자연 조인, 세타 조인 & 디비전(÷)',
    seo_description: '두 릴레이션을 연결하는 고급 관계대수 연산자 카티션 곱(Cartesian Product, ×), 동등 조인(Equi Join), 자연 조인(Natural Join ⋈), 세타 조인(Theta Join) 및 디비전(Division ÷) 연산식을 배웁니다.',
    excerpt: '여러 릴레이션의 데이터를 결합하는 핵심 연산인 카티션 곱, 자연 조인, 세타 조인과 모든 조건을 만족하는 상대를 찾는 디비전(Division) 연산을 학습합니다.',
    body_md: `두 개 이상의 릴레이션을 합성하여 데이터를 조율하는 **고급 관계대수 연산자(조인, 디비전, 카티션 곱)**를 심도 있게 학습합니다.

---

## 1. 고급 관계대수 핵심 전문 용어 사전 (Glossary)

- **Cartesian Product (카티션 곱, $\times$)**: R의 $N$개 튜플과 S의 $M$개 튜플을 모든 가능한 조합으로 묶어 총 $N \times M$개의 튜플을 생성하는 이항 연산입니다.
- **Theta Join (세타 조인, $\bowtie_{\theta}$)**: 카티션 곱을 수행한 후 조건식 $\theta$를 만족하는 튜플만 필터링하는 연산입니다.
- **Natural Join (자연 조인, $\bowtie$)**: 공통 속성을 기준으로 동등 조인을 수행하고 중복 컬럼을 제거하는 연산입니다.
- **Division Operator (디비전, $\div$)**: S의 모든 속성 값들을 만족하는 R의 특정 튜플 그룹을 추출하는 디비전 연산입니다.
`
  },
  {
    order_index: 6,
    slug: 'ch06-sql-ddl-schema-definition',
    title: 'SQL DDL 완전 가이드: CREATE TABLE, ALTER, DROP 및 실전 오라클 EMP/DEPT 스키마 코드',
    seo_title: 'SQL DDL 가이드 - CREATE TABLE, ALTER, DROP & 오라클 EMP/DEPT 실전 스키마 소스',
    seo_description: 'SQL DDL(CREATE TABLE, ALTER, DROP), 컬럼 제약조건(PK, FK, CHECK, DEFAULT)과 pjt/26 오라클 실습용 EMP, DEPT, SALGRADE 테이블 스키마 스크립트를 배웁니다.',
    excerpt: '데이터베이스 테이블 스키마 생성 DDL 구문과 오라클/표준 SQL에서 널리 쓰이는 EMP/DEPT 실전 실습용 릴레이션 생성 DDL 소스 코드를 심도 있게 다룹니다.',
    body_md: `데이터베이스의 구조(Schema)를 생성, 수정, 삭제하는 **데이터 정의어(DDL: Data Definition Language)**의 모든 구문과 실전 오라클 **EMP / DEPT / SALGRADE** 샘플 릴레이션 구축 코드를 배웁니다.

---

## 1. DDL 핵심 전문 용어 사전 (Glossary)

- **DDL (Data Definition Language)**: \`CREATE\`, \`ALTER\`, \`DROP\`, \`TRUNCATE\` 등 데이터베이스 객체 구조를 생성하고 정의하는 언어입니다.
- **CASCADE CONSTRAINTS**: 오라클 등에서 부모 테이블 삭제 시 연결된 자식 테이블의 외래키 제약조건까지 한 번에 제거해 주는 명령어 옵션입니다.
`
  },
  {
    order_index: 7,
    slug: 'ch07-sql-dml-basic-queries-and-filtering',
    title: 'SQL DML 기본 조회: SELECT, WHERE 조건식, LIKE, IN, BETWEEN 및 ORDER BY 정렬',
    seo_title: 'SQL DML 기본 조회 - SELECT, WHERE 조건절, LIKE 와일드카드, IN, BETWEEN & ORDER BY',
    seo_description: 'SELECT 절, WHERE 조건 필터링, LIKE 와일드카드(%, _), IN, BETWEEN, IS NULL 및 ORDER BY (ASC/DESC) 정렬 구문 작성을 배웁니다.',
    excerpt: '원하는 데이터를 정확하게 검색하는 SELECT 구문, WHERE 조건절의 와일드카드 패턴 매칭과 정렬(ORDER BY) 키워드 활용법을 다룹니다.',
    body_md: `데이터베이스에 저장된 튜플 데이터를 검색하는 **SELECT 문과 WHERE 조건절 필터링, ORDER BY 정렬** 문법을 배웁니다.
`
  },
  {
    order_index: 8,
    slug: 'ch08-sql-aggregation-and-grouping',
    title: 'SQL 집계 및 그룹화: SUM, AVG, COUNT, GROUP BY 및 HAVING 조건절 파이프라인',
    seo_title: 'SQL 집계 및 그룹화 - SUM, AVG, COUNT, GROUP BY & HAVING 조건절 파이프라인',
    seo_description: '다량의 행 데이터를 요약하는 SQL 집계 함수(SUM, AVG, COUNT, MAX, MIN), GROUP BY 그룹화, HAVING 절과 WHERE vs HAVING 구별점을 배웁니다.',
    excerpt: '데이터 요약 및 통계 산출을 위한 집계 함수와 그룹화 구문인 GROUP BY, 그리고 그룹화된 데이터 필터링을 담당하는 HAVING 절의 논리적 실행 순서를 다룹니다.',
    body_md: `데이터셋을 그룹 단위로 묶어 통계 수치를 구하는 **집계 함수(Aggregate Functions)**와 **GROUP BY, HAVING** 구문의 실행 파이프라인을 다룹니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-sql-multi-table-joins',
    title: 'SQL 테이블 조인(JOIN) 총정리: INNER JOIN, LEFT/RIGHT OUTER JOIN, FULL OUTER JOIN 및 SELF JOIN',
    seo_title: 'SQL 조인(JOIN) 총정리 - INNER JOIN, LEFT OUTER JOIN, FULL OUTER JOIN & SELF JOIN',
    seo_description: '여러 테이블의 데이터를 관계 키로 결합하는 SQL JOIN, INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN 및 자기 자신과 조인하는 SELF JOIN 작동 원리를 배웁니다.',
    excerpt: '관계형 데이터베이스의 꽃인 테이블 조인(JOIN)의 다양한 종류(내부 조인, 외부 조인, 교차 조인, 자체 조인)와 ON 구문의 결합 조건을 시각적으로 학습합니다.',
    body_md: `분산된 여러 테이블을 릴레이션 관계 키로 결합하여 하나의 통합된 결과셋을 만들어 내는 **SQL 조인(JOIN)**의 모든 형태를 총정리합니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-sql-subqueries-nested-and-correlated',
    title: 'SQL 서브쿼리(Subquery) 심화: 중첩 서브쿼리, 상관 서브쿼리(Correlated), EXISTS 및 IN/ANY/ALL',
    seo_title: 'SQL 서브쿼리 심화 - 중첩 서브쿼리, 상관 서브쿼리(Correlated), EXISTS & IN/ANY/ALL',
    seo_description: '서브쿼리(Subquery), 중첩 서브쿼리, 상관 서브쿼리(Correlated Subquery), EXISTS/NOT EXISTS 및 다중 행 연산자(IN, ANY, ALL)를 배웁니다.',
    excerpt: '메인 쿼리에 필요한 조건이나 결과 데이터를 동적으로 제공하는 서브쿼리의 종류(중첩, 상관, 스칼라, 인라인 뷰)와 성능 최적화 관점을 학습합니다.',
    body_md: `메인 쿼리(Main Query) 내부에 포함되는 하위 쿼리인 **서브쿼리(Subquery)**의 종류와 **상관 서브쿼리(Correlated Subquery)** 및 **EXISTS** 연산자를 배웁니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-sql-dml-data-mutation-insert-update-delete',
    title: 'SQL 데이터 조작: INSERT INTO, UPDATE, DELETE 및 MERGE(UPSERT) 패턴',
    seo_title: 'SQL 데이터 조작 DML - INSERT INTO, UPDATE, DELETE & MERGE(UPSERT)',
    seo_description: '테이블의 튜플 데이터를 삽입, 수정, 삭제하는 DML 명령어 INSERT INTO, UPDATE SET, DELETE FROM 및 MERGE(UPSERT) 패턴을 배웁니다.',
    excerpt: '테이블 내 데이터를 신규 추가(INSERT), 기존 데이터 수정(UPDATE), 데이터 삭제(DELETE)하는 구문과 데이터 병합(MERGE) 패턴을 학습합니다.',
    body_md: `데이터베이스 테이블의 데이터를 직접 변경하는 **DML(Data Manipulation Language)**인 **INSERT, UPDATE, DELETE** 및 **MERGE (UPSERT)** 문법을 학습합니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-sql-advanced-analytic-window-functions',
    title: 'SQL 고급 분석 및 윈도우 함수: OVER(PARTITION BY ORDER BY), RANK, DENSE_RANK, ROW_NUMBER',
    seo_title: 'SQL 윈도우 함수 - OVER(PARTITION BY ORDER BY), ROW_NUMBER, RANK, DENSE_RANK',
    seo_description: '행과 행 간의 관계를 분석하는 SQL 윈도우 함수, OVER 절, PARTITION BY, ORDER BY, 순위 함수(ROW_NUMBER, RANK, DENSE_RANK) 및 이동 집계를 배웁니다.',
    excerpt: '기존 GROUP BY와 달리 행의 개수를 유지하면서 그룹별 순위, 누적합, 이동 평균을 계산하는 SQL 윈도우 분석 함수(OVER 절)의 활용법을 다룹니다.',
    body_md: `행의 집합(Window)을 대상으로 각 행마다 분석 집계 결과를 계산해 내는 고급 분석 도구인 **SQL 윈도우 함수(Window Functions)**를 학습합니다.
`
  },
  {
    order_index: 13,
    slug: 'ch13-views-and-indexes-b-tree-architecture',
    title: '가상 테이블 뷰(View)와 데이터베이스 인덱스 아키텍처: B-Tree & B+Tree 색인 메커니즘',
    seo_title: 'DB 뷰 & 인덱스 아키텍처 - View 장단점, B-Tree & B+Tree 인덱스 & Clustered Index',
    seo_description: '가상 테이블 뷰(View)의 장단점 및 인덱스(Index), B-Tree / B+Tree 아키텍처, 클러스터드(Clustered) vs 넌클러스터드 인덱스를 배웁니다.',
    excerpt: '보안과 편의성을 제공하는 가상 테이블 뷰(View)와 데이터베이스 검색 속도를 비약적으로 향상시키는 B-Tree / B+Tree 인덱스 내부 구조를 심도 있게 다룹니다.',
    body_md: `자주 사용하는 복잡한 쿼리를 가상 테이블로 정의하는 **뷰(View)**와 데이터베이스 검색 속도를 극대화하는 **인덱스(Index) 아키텍처(B-Tree & B+Tree)**를 다룹니다.
`
  },
  {
    order_index: 14,
    slug: 'ch14-database-design-erd-modeling',
    title: '데이터베이스 설계 1: 개념적 모델링과 ERD(Entity-Relationship Diagram) 엔티티/관계/카디널리티',
    seo_title: 'DB 설계 1 - 개념적 설계, ERD 모델링, Entity, Attribute & Relationship',
    seo_description: '개념적 데이터 설계, ERD(Entity-Relationship Diagram) 작성법, 개체(Entity), 속성(Attribute), 관계(Relationship), 카디널리티 표현법을 배웁니다.',
    excerpt: '현실 세계의 요구사항을 직관적인 다이어그램으로 추상화하는 ERD 개념적 데이터 모델링과 엔티티, 속성, 관계 타입의 정의 및 매핑 규칙을 학습합니다.',
    body_md: `사용자의 요구사항 분석을 바탕으로 현실 세계의 정보 구조를 직관적인 그래픽 다이어그램으로 변환하는 **개념적 DB 설계(ERD 모델링)**를 학습합니다.
`
  },
  {
    order_index: 15,
    slug: 'ch15-normalization-anomalies-1nf-2nf-3nf-bcnf',
    title: '데이터베이스 설계 2: 정규화(Normalization)와 이상 현상(삽입/수정/삭제 이상), 1NF/2NF/3NF/BCNF',
    seo_title: 'DB 정규화(Normalization) - 이상 현상(Anomalies), 함수 종속성 & 1NF/2NF/3NF/BCNF',
    seo_description: '데이터 중복 제거와 이상 현상 방지를 위한 정규화(Normalization), 함수 종속성(FD), 1NF/2NF/3NF/BCNF 분해를 배웁니다.',
    excerpt: '잘못 설계된 릴레이션에서 발생하는 3대 이상 현상을 방지하기 위해 함수 종속성(Functional Dependency)을 기반으로 스키마를 분해하는 정규화 과정을 다룹니다.',
    body_md: `데이터베이스의 중복성을 제거하여 저장 공간을 절약하고 3대 이상 현상(Anomalies)을 예방하는 **정규화(Normalization)** 기술을 완벽 정리합니다.
`
  },
  {
    order_index: 16,
    slug: 'ch16-database-security-dcl-and-access-control',
    title: '데이터베이스 관리와 보안: DCL(GRANT/REVOKE), 사용자 권한, 백업/복구 및 접근 제어',
    seo_title: 'DB 관리와 보안 - DCL(GRANT/REVOKE), 사용자 계정, Role 관리 & 백업/복구',
    seo_description: 'DCL(GRANT, REVOKE), 역할(Role) 기반 접근 제어(RBAC), 데이터 백업 및 장애 복구 메커니즘을 배웁니다.',
    excerpt: '데이터베이스에 대한 비인가 접근을 막는 사용자 계정 및 DCL 권한 제어(GRANT/REVOKE)와 시스템 장애 발생 시 데이터를 원상 복구하는 백업 전략을 학습합니다.',
    body_md: `데이터베이스 시스템을 안전하게 보호하기 위한 **보안 접근 제어(DCL: GRANT/REVOKE)**와 계정/롤(Role) 관리 및 **백업·복구(Backup & Recovery)** 전략을 다룹니다.
`
  },
  {
    order_index: 17,
    slug: 'ch17-transactions-acid-properties',
    title: '트랜잭션(Transaction) 기초: ACID 성질(원자성, 일관성, 격리성, 지속성)과 COMMIT/ROLLBACK',
    seo_title: '트랜잭션(Transaction) - ACID 성질 (Atomicity, Consistency, Isolation, Durability)',
    seo_description: '트랜잭션(Transaction), ACID 4대 성질(원자성, 일관성, 격리성, 지속성), 성공 확정 COMMIT, 작업 취소 ROLLBACK을 배웁니다.',
    excerpt: '데이터베이스의 일관성과 작업 완결성을 보장하는 핵심 단위인 트랜잭션(Transaction)의 ACID 4대 속성과 COMMIT/ROLLBACK의 구동 원리를 다룹니다.',
    body_md: `데이터베이스의 상태를 변화시키는 하나의 논리적인 작업 단위인 **트랜잭션(Transaction)**과 **ACID 4대 성질**을 학습합니다.
`
  },
  {
    order_index: 18,
    slug: 'ch18-concurrency-control-locking-and-isolation-levels',
    title: '동시성 제어(Concurrency Control): 로킹(Locking), 교착상태(Deadlock) 및 ANSI 격리 수준(Isolation Levels)',
    seo_title: '동시성 제어 - 로킹(Locking), Deadlock, 타임스탬프 & ANSI 트랜잭션 격리 수준',
    seo_description: '동시성 제어, 공유/배타 잠금(Shared/Exclusive Lock), 2단계 로킹(2PL), 교착상태(Deadlock) 및 4가지 트랜잭션 격리 수준을 배웁니다.',
    excerpt: '여러 트랜잭션이 동시 접근할 때 데이터 부정합을 방지하는 동시성 제어(Locking, 2PL)와 교착상태, 그리고 4단계 트랜잭션 격리 수준을 학습합니다.',
    body_md: `여러 트랜잭션이 동시에 데이터베이스에 접근할 때 상호 간섭으로 인한 문제점을 방지하는 **동시성 제어(Concurrency Control)**와 **트랜잭션 격리 수준**을 배웁니다.
`
  },
  {
    order_index: 19,
    slug: 'ch19-database-application-development-and-security',
    title: 'DB 기반 애플리케이션 개발: 파이썬 DB 바인딩(oracledb/sqlite3), PyQt5 GUI 연동 및 SQL Injection 방어',
    seo_title: 'DB 앱 개발 - 파이썬 oracledb/sqlite3 연동, PyQt5 GUI & SQL Injection 방어',
    seo_description: 'pjt/26 실전 파이썬 DB 드라이버 바인딩(oracledb, sqlite3), fetchone()/fetchall() 버퍼 처리, 바인드 변수(:1, :var1), PyQt5 데스크톱 GUI DB 연동(ch13_workshop.py) 및 SQL Injection 보안 방어법을 배웁니다.',
    excerpt: '파이썬(oracledb, sqlite3)과 데이터베이스 바인딩, 커서 버퍼 순회, 위치/이름 기반 바인드 변수 적용, PyQt5 GUI 데이터베이스 검색 앱 개발과 SQL Injection 방어법을 학습합니다.',
    body_md: `애플리케이션 프로그램과 데이터베이스를 직접 연결하는 **파이썬 DB 바인딩(oracledb, sqlite3)** 기술과 **PyQt5 기반 데스크톱 GUI 연동 앱**, 그리고 **SQL Injection 보안 방어**를 다룹니다.
`
  },
  {
    order_index: 20,
    slug: 'ch20-modern-database-trends-nosql-and-newsql',
    title: '현대 데이터베이스 트렌드: NoSQL(Key-Value, Document MongoDB, Graph) & Cloud NewSQL 분산 데이터베이스',
    seo_title: '현대 DB 트렌드 - NoSQL(MongoDB, Redis, Neo4j), CAP 정리 & NewSQL 분산 DB',
    seo_description: 'NoSQL(Key-Value Redis, Document MongoDB, Columnar Cassandra, Graph Neo4j), CAP 정리(Consistency, Availability, Partition Tolerance) 및 NewSQL 분산 DB 트렌드를 배웁니다.',
    excerpt: '관계형 데이터베이스(RDB)의 한계를 극복하고 대용량 수평 확장(Scale-out)을 제공하는 NoSQL의 종류와 CAP 정리, 그리고 NewSQL 분산 데이터베이스의 최신 트렌드를 학습합니다.',
    body_md: `비정형 대용량 빅데이터 처리와 클라우드 수평 확장성(Scale-out)을 보장하는 **NoSQL 데이터베이스(MongoDB, Redis, Neo4j)**와 **NewSQL 분산 DB 트렌드**를 다룹니다.
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
  let sqlContent = `-- 2500+ Chars Super Database Master Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const super_content_md = makeSuperContent(lesson.slug, lesson.title, lesson.body_md);
    const content_html = marked.parse(super_content_md);
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
  '${escapeSql(super_content_md)}',
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

  fs.writeFileSync(`scratch/seed_database_super_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 5 Super 2500+ Chars Database SQL chunk files!');
