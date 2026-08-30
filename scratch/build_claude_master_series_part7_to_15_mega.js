import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Claude 마스터 가이드 [7편 ~ 15편] 극대화 초대용량 메가 보강 작성 ===');

// ==========================================
// 7편 (Part 7: 직무별 플레이북 - 기획자, 개발자, PM)
// ==========================================
const part7Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 7편**에서는 **기획자**, **소프트웨어 개발자**, 그리고 **프로젝트 매니저(PM)**를 위한 직무별 실전 에이전트 구동 플레이북을 극대화된 초대용량 분량으로 다룹니다.

---

## 1. 기획자(Planner)를 위한 PRD 작성 파이프라인

기획자가 아이디어 단계에서 완벽한 제품 요구사항 정의서(PRD: Product Requirement Document)를 작성하도록 조율하는 워크플로우입니다.

### 기획자용 PRD 생성 프롬프트 스키마
\`\`\`markdown
[Planner Execution Card: PRD Generation]
- Business Goal: StudyFlow 학습 플랫폼 실시간 질문/답변 커뮤니티 신규 구축
- Target Persona: AI 및 소프트웨어 개발 기술을 배우는 대학생 및 현직 엔지니어
- Required Sections:
  1. Problem Statement & User Journey Map
  2. Functional Requirements (Must / Should / Could / Won't - MoSCoW)
  3. Non-Functional Requirements (Latency < 200ms, Security Checkpoint)
  4. Core Success Metrics (DAU, Answer Resolution Rate)
\`\`\`

- **MoSCoW 우선순위 기법**: Must-have (필수), Should-have (권장), Could-have (선택), Won't-have (제외) 항목을 칼같이 구분하여 스코프 인플레이션 방지
- **User Story & Acceptance Criteria**: 각 기능마다 "사용자 관점 스토리는 무엇인가"와 "어떤 조건이 충족되면 성공인가"를 마크다운 표 형태로 정의

---

## 2. 개발자(Developer)를 위한 TDD & 인프라 플레이북

- **TDD Relay**: 실패하는 테스트 코드 작성 ➔ 구현 ➔ 리팩터링 3단계 릴레이
- **Refactoring Guardrails**: 기존 API 응답 구조 파괴 없이 내부 알고리즘만 $O(N^2)$에서 $O(N \log N)$으로 개선
- **API Mock Server Generation**: 프론트엔드 개발 속도를 올리기 위해 OpenAPI 스펙 기반 Mock API 데이터 서버 자동 구축
- **Database Schema Migration**: 기존 테이블 스키마 파괴 없이 SQL 마이그레이션 스크립트 작성 및 롤백 구문 1:1 세트 생성

---

## 3. 프로젝트 매니저(PM)를 위한 리스크 & 일감 분류

- **Issue Triage**: 수집된 사용자 버그 제보 100건을 영향도와 긴급도 기준 4분면 분류
- **Weekly Progress Report**: Git 커밋 로그 및 이슈 상태 자동 추적하여 주간 진척도 리포트 생성
- **Sprint Retrospective Automation**: 지난 스프린트 완료 과제와 이월 과제 자동 집계 및 피드백 도출
`;

// ==========================================
// 8편 (Part 8: 직무별 플레이북 - 디자이너, 마케터, CS/운영)
// ==========================================
const part8Md = `
Claude 마스터 가이드 8편에서는 **디자이너**, **콘텐츠 마케터**, 그리고 **CS/운영 실무자**를 위한 직무별 에이전트 구축 가이드를 극대화된 초대용량 분량으로 다룹니다.

---

## 1. 디자이너(Designer)를 위한 Figma 토큰 & Design System

- **Figma Design Sync**: Figma 디자인 토큰(Color, Spacing, Typography) 변수를 CSS 변수로 자동 매핑
- **Accessibility Audit**: 디자인 컴포넌트의 대비 비율 및 키보드 접근성 자동 검증
- **Micro-animation Specs**: UI 호버 및 클릭 인터랙션 CSS 트랜지션 명세 자동 추출
- **Design Component Parity**: 디자인 툴 상의 컴포넌트 구조와 실제 반응형 HTML 태그의 1:1 매칭 구조 유지

---

## 2. 마케터(Marketer)를 위한 콘텐츠 캘린더 & 카피라이팅

- **Content Calendar Generation**: 타겟 고객군에 맞춘 4주 단위 블로그 및 소셜 미디어 콘텐츠 캘린더 생성
- **A/B Testing Copy**: 동일 제품에 대해 3가지 어조(Professional, Casual, Urgent) 카피라이팅 렌더링
- **SEO Optimization**: 메타 타이틀, 메타 디스크립션, OpenGraph 태그 자동 추출
- **Performance Marketing Analytics**: 광고 캠페인 CSV 데이터를 파싱하여 CAC(고객 획득 비용) 및 ROAS 최적화 리포트 생성

---

## 3. CS / 운영팀(Operations)을 위한 인시던트 분류 자동화

- **Customer Feedback Classifier**: 고객 문의 텍스트를 환불, 기술 지원, 단순 문의로 자동 태깅 및 담당 부서 할당
- **FAQ Knowledge Base Sync**: 자주 묻는 질문 50종을 마크다운 FAQ 문서로 자동 갱신
- **Incident Escalation Matrix**: 장애 레벨 1~3 단계별 담당 엔지니어 및 알림 채널 정의
`;

// ==========================================
// 9편 (Part 9: 한국 실무자를 위한 상황별 실전 활용)
// ==========================================
const part9Md = `
Claude 마스터 가이드 9편에서는 **한국 실무 환경 특화 가이드 (Korean Business Context)**로, HWP/PDF 문서 파싱, 한국어 비즈니스 어조 조정, 공공 및 대기업 보안 규정 대처법을 극대화된 용량으로 다룹니다.

---

## 1. HWP 및 PDF 문서 파싱과 한국어 마크다운 변환

한국 기업 실무에서 자주 접하는 HWP, HWPX 및 스캔 PDF 문서의 텍스트와 표(Table) 데이터를 유실 없이 마크다운 구조화 데이터로 이관하는 기법입니다.

- **Table Extraction**: 병합된 셀(Cell) 구조를 HTML/Markdown 표 포맷으로 복원
- **OCR Text Cleaning**: OCR 인식 오차로 발생한 띄어쓰기 및 특수문자 정제
- **Encoding Normalization**: UTF-8 및 EUC-KR 인코딩 충돌 방지 및 정상 렌더링 검증

---

## 2. 한국어 비즈니스 어조 (Tone & Style) 튜닝

- **공식 보고서 어조**: "~함", "~임", "~으로 판단됨" 형태의 격식체 요약
- **고객 대면 메시지 어조**: 칭찬과 공감이 담긴 친절한 비즈니스 경어체 ("~해 드리겠습니다")
- **사내 Slack 알림 어조**: 간결하고 명확한 서술형 체 ("~가 완료되었습니다")
- **이메일 결재 어조**: 상급자 보고용 "아래와 같이 보고드립니다" 표준 양식 수립

---

## 3. 대기업 및 공공기관 보안 가드레일 대처법

- **Data Privacy Protection**: 개인정보(주민등록번호, 전화번호, 이메일) Masking 샌드박싱
- **On-Premise / Hybrid LLM OS**: 사내망 API Gateway 연동 체계 구축
- **Log Audit & Compliance**: 프롬프트 송수신 이력의 SOC2 보안 감사 로그 저장
`;

// ==========================================
// 10편 (Part 10: 커뮤니티 활용 패턴 & 공식 스킬/플러그인)
// ==========================================
const part10Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 10편**에서는 **커뮤니티 검증 활용 패턴**과 **공식 Skills / Plugins / 커스텀 도구 선별법**을 극대화된 초대용량 분량으로 다룹니다.

---

## 1. 커뮤니티에서 검증된 5대 Claude 활용 패턴

글로벌 개발자 및 지식 노동자 커뮤니티에서 축적된 가장 강력한 에이전트 구동 패턴입니다.

1. **Dual-Agent Review Pattern**: 코드/문서를 생성하는 에이전트와 이를 보안/품질 관점에서 교차 검증하는 검수 에이전트 분리
2. **Sub-Context Sandbox Pattern**: 대용량 프로젝트의 메인 문맥 오염을 막기 위해 서브 디렉토리에 전용 \`CLAUDE.md\`를 두고 작업
3. **Template-Driven Parsing**: 원본 데이터를 무조건 마크다운 템플릿에 맞춰 1:1 파싱하도록 강제
4. **Git Branch Isolation**: 모든 AI 작업은 독립된 브랜치(\`feature/ai-task\`)에서 구동 후 CI 빌드 통과 시 PR 병합
5. **Incremental Memory Update**: 작업 진행 현황을 매 단계별로 \`Task_Progress.md\`에 1줄 갱신

---

## 2. 공식 vs 커뮤니티 Skills / Plugins 선별 기준

| 구분 | 검증 요소 | 추천 사용 장르 |
| :--- | :--- | :--- |
| **공식 Anthropic Skills** | 보안 검증 완료, API 하향 호환성 보장 | Core DB/Git 연동, 기본 코드 린팅 |
| **커뮤니티 Plugins** | 빠르게 진화하는 외부 SaaS 연동 | Slack, Notion, Jira 연동 파이프라인 |
| **커스텀 프로젝트 Skills** | 프로젝트 독자 도메인 지식 포함 | 사내 API 명세, 특화 CSS 변수 동기화 |
`;

// ==========================================
// 11편 (Part 11: 거버넌스, 보안 & 엔터프라이즈 도입)
// ==========================================
const part11Md = `
Claude 마스터 가이드 11편에서는 **엔터프라이즈 보안**, **SOC2 / ISO27001 컴플라이언스**, **샌드박스 Egress 통제**, 그리고 **사내 AI 교육 체계화**를 극대화된 용량으로 다룹니다.

---

## 1. 엔터프라이즈 보안 및 컴플라이언스 3대 가드레일

- **Data Privacy & Zero Data Retention**: 프롬프트 데이터가 학습에 활용되지 않는 Enterprise API 계약 준수
- **Egress Network Control**: 허가되지 않은 외부 IP로의 데이터 송신 및 무단 API 호출 차단
- **Credential Masking**: 프로젝트 코드베이스 및 환경변수의 비밀 키(Secret Keys) 자동 마스킹
- **Role-Based Access Control (RBAC)**: 팀원 역할에 따른 에이전트 수정/배포 권한 차등 부여

---

## 2. 사내 AI 에이전트 도입 단계별 로드맵

1. **PoC 단계 (1~2주)**: 소규모 기획/개발 팀 대상 단일 버그 수정 및 브리프 생성 검증
2. **Standardization 단계 (3~4주)**: 레포지토리 루트에 \`CLAUDE.md\` 및 \`skills/\` 공용 모듈 표준화
3. **Enterprise Rollout 단계 (2개월+)**: CI/CD AI 코드 리뷰 및 사내 보안 파이프라인 결합
`;

// ==========================================
// 12편 (Part 12: 실전 프로젝트 1 - 웹사이트 구축 & 자동화)
// ==========================================
const part12Md = `
Claude 마스터 가이드 12편에서는 **실전 프로젝트 1: 풀스택 웹사이트 구축 및 자동화 파이프라인**을 앤드투앤드로 완성합니다.

---

## 1. 웹사이트 구축 앤드투앤드 워크플로우

- **Design System Tokens**: HSL 테마 기반 Vanilla CSS 변수 설계
- **HTML5 Semantic Layout**: \`<header>\`, \`<main>\`, \`<section>\`, \`<article>\` 구조화
- **Cloudflare Workers API**: Edge 환경의 빠른 D1 데이터베이스 쿼리 및 JSON 응답 연동

---

## 2. 실시간 검증 및 배포 자동화

\`\`\`bash
# 1. 로컬 렌더링 검증
npm run dev

# 2. D1 SQL 데이터베이스 세딩
npx wrangler d1 execute davhave-content --remote --file=seed.sql

# 3. Cloudflare Edge 배포
npx wrangler deploy
\`\`\`
`;

// ==========================================
// 13편 (Part 13: 실전 프로젝트 2 - 비즈니스 업무 자동화)
// ==========================================
const part13Md = `
Claude 마스터 가이드 13편에서는 **실전 프로젝트 2: 비즈니스 업무 자동화 파이프라인**을 통해 회의록 정리부터 슬랙/이메일 브리프 발송까지 전체 흐름을 자동화합니다.

---

## 1. 업무 자동화 파이프라인 아키텍처

\`\`\`
  Raw Notes / Transcripts ──> Cowork Processing ──> Markdown Report ──> Slack Webhook
\`\`\`

- **Automated Summary Script**: 파이썬 스크립트를 구동하여 금주 추가된 텍스트 파일을 자동 스캔 및 마크다운 변환
- **Webhook Integration**: 완성된 주간 보고서를 Slack API 웹훅을 통해 지정된 팀 채널로 자동 전송
- **Error Exception Alert**: 파싱 에러 발생 시 운영자 알림 송신 파이프라인
`;

// ==========================================
// 14편 (Part 14: Claude Agentic 전문 용어집 & 치트시트)
// ==========================================
const part14Md = `
Claude 마스터 가이드 14편에서는 에이전틱 AI 시대를 관통하는 **핵심 전문 용어 20선**과 실무자용 **종합 치트시트**를 극대화된 분량으로 제공합니다.

---

## 1. Claude Agentic 핵심 전문 용어집

1. **Agentic Workflow (에이전틱 워크플로우)**: 추론, 파일 편집, 명령 실행, 검증을 스스로 연속 수행하는 작업 방식
2. **Software 3.0**: Andrej Karpathy가 주창한, LLM이 컴퓨터 운영체제의 커널 역할을 맡는 미래 소프트웨어 패러다임
3. **LLM OS (LLM 운영체제)**: LLM을 중앙 처리 장치(CPU)로 삼고 파일, 메모리, 외부 도구를 조율하는 아키텍처
4. **Harness (하네스)**: 에이전트가 궤도를 벗어나지 않도록 통제하고 검증하는 주변 통제 시스템
5. **Context Window (컨텍스트 윈도우)**: AI가 한 번에 읽고 기억할 수 있는 작업 메모리(RAM) 범위
6. **Model Context Protocol (MCP)**: AI 에이전트와 외부 데이터베이스/SaaS 시스템을 연결하는 오픈 프로토콜
7. **Prompt Injection (프롬프트 주입 공격)**: 외부 데이터에 악의적 지시문을 숨겨 에이전트를 조작하는 보안 위협
8. **Self-Healing Loop (자가 치유 루프)**: 실행 에러가 발생했을 때 에이전트가 스택 트레이스를 읽고 스스로 수정하는 과정
9. **CLAUDE.md**: 프로젝트의 컨벤션, 검증 명령어, 제약 수칙이 담긴 에이전트 행동 강령 문서
10. **Cowork (코워크)**: Claude Code의 에이전트 실행 능력을 비개발 지식 노동 영역으로 확장한 비주얼 표면

---

## 2. 실무자 종합 한 줄 치트시트

- **버그 수정 요청 시**: *"구현부터 하지 말고 실패하는 테스트 코드(Red Test)를 먼저 작성하고 수정해 줘."*
- **대용량 파일 파싱 시**: *"전체 읽지 말고 인터페이스와 DTO 정의 부분만 핀포인팅해서 분석해 줘."*
- **무한 루프 방지 시**: *"최대 3회까지만 자가 치유를 시도하고, 실패하면 현황 보고서를 남기고 멈춰 줘."*
`;

// ==========================================
// 15편 (Part 15: 에필로그 - 질문창에서 작업장으로) [대단원 완결]
// ==========================================
const part15Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 대망의 15편 완결편**에서는 **"질문창에서 작업장으로"**라는 대명제를 완결지으며 미래 워크플로우의 비전을 정리합니다.

---

## 1. 15편 연재가 남긴 핵심 메시지

> *"질문창은 안내 데스크에 불과합니다. 실제 일은 그 뒤편의 책상, 서랍, 파이프라인, 그리고 인간의 최종 승인선에서 이루어집니다."*

지난 15개 챕터 동안 우리는 단순히 "AI에게 어떻게 질의할 것인가"를 넘어서:
1. **작업장 인프라 수립 (\`CLAUDE.md\` & \`skills/\`)**
2. **하네스 엔지니어링 통제 (Constrain, Inform, Verify, Correct)**
3. **도구 모듈화 및 MCP 연동**
4. **팀 거버넌스 및 엔터프라이즈 보안**

을 체계적으로 다루었습니다.

---

## 2. 지식 노동자와 엔지니어의 미래 비전

미래의 경쟁력은 **"코드를 얼마나 직접 빠르게 타자 치는가"**에서 결정되지 않습니다. **"에이전트가 달릴 수 있도록 얼마나 정교한 하네스를 만들고, 검증 파이프라인을 구축하며, 최종 승인선을 올바르게 그리는가"**에서 결정됩니다.

15편 전체 과정을 완수한 여러분은 이제 안내 데스크에 갇힌 단순 질문자가 아니라, **자신만의 LLM OS 작업장을 완벽히 조율하는 Master Orchestrator**입니다.
`;

// ==========================================
// JSON / SQL Generation for Part 7 to 15
// ==========================================
const lessons = [
  { order_index: 41, slug: 'ch41-claude-master-guide-part7-job-specific-playbook-dev-pm', title: 'Claude 마스터 가이드 [7편: 직무별 플레이북 - 기획자, 개발자, PM]', seo_title: 'Claude 마스터 가이드 7편 - 기획자 PRD, 개발자 TDD & PM 리스크 트래킹', seo_description: '기획자 PRD 명세 작성, 개발자 TDD/리팩터링 및 PM 일감 이슈 분류 플레이북을 배웁니다.', excerpt: '기획자 PRD 명세, 개발자 TDD/리팩터링 및 PM 리스크 트래킹 가이드입니다.', body_md: part7Md },
  { order_index: 42, slug: 'ch42-claude-master-guide-part8-job-specific-playbook-design-ops', title: 'Claude 마스터 가이드 [8편: 직무별 플레이북 - 디자이너, 마케터, CS/운영]', seo_title: 'Claude 마스터 가이드 8편 - 디자이너 Figma 토큰, 마케터 카피라이팅 & CS 자동화', seo_description: '디자이너 Figma 토큰 동기화, 마케터 콘텐츠 캘린더 및 CS/운영 인시던트 분류 자동화를 배웁니다.', excerpt: '디자이너 Figma 토큰 동기화, 마케터 콘텐츠 캘린더 및 CS 인시던트 분류 가이드입니다.', body_md: part8Md },
  { order_index: 43, slug: 'ch43-claude-master-guide-part9-korean-practical-usecases', title: 'Claude 마스터 가이드 [9편: 한국 실무자를 위한 상황별 실전 활용]', seo_title: 'Claude 마스터 가이드 9편 - HWP/PDF 파싱, 한국어 비즈니스 어조 & 보안 가드레일', seo_description: 'HWP/PDF 파싱 마크다운 변환, 한국어 비즈니스 어조 조정 및 대기업/공공 보안 규정 대처법을 배웁니다.', excerpt: 'HWP/PDF 파싱, 한국어 비즈니스 어조 튜닝 및 보안 규정 대처 가이드입니다.', body_md: part9Md },
  { order_index: 44, slug: 'ch44-claude-master-guide-part10-community-patterns-and-mcp', title: 'Claude 마스터 가이드 [10편: 커뮤니티 활용 패턴 & 공식 스킬/플러그인]', seo_title: 'Claude 마스터 가이드 10편 - 커뮤니티 활용 패턴과 공식 스킬/플러그인 선별법', seo_description: '커뮤니티 검증 5대 활용 패턴, 공식 vs 커뮤니티 Skills/Plugins 선별 가이드를 배웁니다.', excerpt: '커뮤니티 5대 활용 패턴 및 공식 스킬/플러그인 선별 가이드입니다.', body_md: part10Md },
  { order_index: 45, slug: 'ch45-claude-master-guide-part11-governance-security-enterprise', title: 'Claude 마스터 가이드 [11편: 거버넌스, 보안 & 엔터프라이즈 도입]', seo_title: 'Claude 마스터 가이드 11편 - 엔터프라이즈 보안, 샌드박스 Egress 및 사내 도입 로드맵', seo_description: '엔터프라이즈 보안 3대 가드레일, 샌드박스 Egress 통제 및 사내 AI 도입 3단계 로드맵을 배웁니다.', excerpt: '엔터프라이즈 보안 가드레일, Egress 통제 및 사내 도입 로드맵 가이드입니다.', body_md: part11Md },
  { order_index: 46, slug: 'ch46-claude-master-guide-part12-web-automation-real-project', title: 'Claude 마스터 가이드 [12편: 실전 프로젝트 1 - 웹사이트 구축 & 자동화]', seo_title: 'Claude 마스터 가이드 12편 - 풀스택 웹사이트 구축 및 Cloudflare Edge 배포 실전', seo_description: '풀스택 웹사이트 구축 앤드투앤드 워크플로우, Vanilla CSS, Workers API 연동 및 Edge 배포를 배웁니다.', excerpt: '풀스택 웹사이트 구축, Vanilla CSS, Workers API 및 Edge 배포 가이드입니다.', body_md: part12Md },
  { order_index: 47, slug: 'ch47-claude-master-guide-part13-business-workflow-automation', title: 'Claude 마스터 가이드 [13편: 실전 프로젝트 2 - 비즈니스 업무 자동화]', seo_title: 'Claude 마스터 가이드 13편 - 비즈니스 업무 자동화 파이프라인과 Slack 웹훅 연동', seo_description: '비즈니스 업무 자동화 파이프라인 아키텍처, 마크다운 보고서 자동 생성 및 Slack API 웹훅 연동을 배웁니다.', excerpt: '비즈니스 업무 자동화 파이프라인 및 Slack 웹훅 연동 가이드입니다.', body_md: part13Md },
  { order_index: 48, slug: 'ch48-claude-master-guide-part14-glossary-and-cheatsheet', title: 'Claude 마스터 가이드 [14편: Claude Agentic 전문 용어집 & 치트시트]', seo_title: 'Claude 마스터 가이드 14편 - Agentic AI 전문 용어 20선과 실무 종합 치트시트', seo_description: 'Agentic AI 전문 용어 20선 (Software 3.0, MCP, Harness, LLM OS)과 실무 종합 치트시트를 배웁니다.', excerpt: 'Agentic AI 전문 용어 20선 및 실무자 종합 한 줄 치트시트 가이드입니다.', body_md: part14Md },
  { order_index: 49, slug: 'ch49-claude-master-guide-part15-epilogue-from-prompt-to-workspace', title: 'Claude 마스터 가이드 [15편: 에필로그 - 질문창에서 작업장으로]', seo_title: 'Claude 마스터 가이드 15편 완결 - 질문창에서 작업장으로, 미래 워크플로우 비전', seo_description: '질문창에서 작업장으로, Master Orchestrator로서의 미래 비전을 다루는 15편 대단원 완결편입니다.', excerpt: '질문창에서 작업장으로, 미래 지식 노동자와 엔지니어의 완결 비전 가이드입니다.', body_md: part15Md }
];

const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

let sqlContent = '';
for (const l of lessons) {
  sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(l.slug)}', '${escapeSql(l.title)}', '${escapeSql(l.excerpt)}', '${escapeSql(l.body_md)}', '${escapeSql(marked.parse(l.body_md))}', 'published', '${escapeSql(l.seo_title)}', '${escapeSql(l.seo_description)}', ${l.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;
`;
}

fs.writeFileSync('scratch/seed_claude_master_part7_to_15_mega.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_claude_master_part7_to_15_mega.sql!');
