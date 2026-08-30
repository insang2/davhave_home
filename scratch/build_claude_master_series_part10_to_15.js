import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Claude 마스터 가이드 [10편 ~ 15편 대단원 완결] 초대용량 보강 2차 스크립트 작성 ===');

// ==========================================
// 10편 (Part 10: 커뮤니티 활용 패턴 & 공식 스킬/플러그인)
// ==========================================
const part10Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 10편**에서는 **커뮤니티 검증 활용 패턴**과 **공식 Skills / Plugins / 커스텀 도구 선별법**을 초대용량 분량으로 다룹니다.

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
Claude 마스터 가이드 11편에서는 **엔터프라이즈 보안**, **SOC2 / ISO27001 컴플라이언스**, **샌드박스 Egress 통제**, 그리고 **사내 AI 교육 체계화**를 다룹니다.

---

## 1. 엔터프라이즈 보안 및 컴플라이언스 3대 가드레일

- **Data Privacy & Zero Data Retention**: 프롬프트 데이터가 학습에 활용되지 않는 Enterprise API 계약 준수
- **Egress Network Control**: 허가되지 않은 외부 IP로의 데이터 송신 및 무단 API 호출 차단
- **Credential Masking**: 프로젝트 코드베이스 및 환경변수의 비밀 키(Secret Keys) 자동 마스킹

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
`;

// ==========================================
// 14편 (Part 14: Claude Agentic 전문 용어집 & 치트시트)
// ==========================================
const part14Md = `
Claude 마스터 가이드 14편에서는 에이전틱 AI 시대를 관통하는 **핵심 전문 용어 20선**과 실무자용 **종합 치트시트**를 제공합니다.

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
// JSON / SQL Generation for Part 10 to 15
// ==========================================
const lessons = [
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

fs.writeFileSync('scratch/seed_claude_master_part10_to_15.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_claude_master_part10_to_15.sql with 2nd ENHANCED LENGTH!');
