import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Claude 마스터 가이드 1편~15편 초보자용 궁극의 초대용량 개정 스크립트 작성 ===');

// ==========================================
// 1편 (Lesson 35)
// ==========================================
const part1Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 1편**에서는 입문자와 초보 실무자도 한 번에 이해하고 바로 따라 할 수 있도록 대화창(Chat Window)에서 실제 작업장(Workspace)으로의 패러다임 전환과 **Software 3.0 / LLM OS**의 핵심 원리를 기초부터 아주 정밀하게 해설합니다.

---

## 1. 입문자를 위한 안내: 왜 지금 "질문창"을 벗어나야 하는가?

대부분의 AI 초보 사용자들은 ChatGPT나 Claude 웹 사이트에 접속하여 아래처럼 일회성 질문을 던지곤 합니다:

\`\`\`text
"우리 회사 8월 신제품 출시를 위한 마케팅 기획서 초안을 작성해 줘."
\`\`\`

하지만 이 방식(Question Window)은 일상적인 질의응답에는 유용할지 몰라도, 실제 업무 현장에서는 다음과 같은 3가지 치명적인 한계에 부딪히게 됩니다:

1. **맥락(Context) 유실**: AI는 우리 회사의 기존 제품군, 브랜드 가이드라인, 고객 페르소나, 예산 제약을 알지 못하므로 원론적이고 영혼 없는 뻔한 답변만 내놓습니다.
2. **수동 붙여넣기의 피로감**: AI가 생성한 텍스트를 하나하나 복사해서 Word, Google Docs, Slack, 이메일로 수동으로 옮겨 담아야 하는 번거로움이 발생합니다.
3. **재사용 불가능**: 대화 창을 닫는 순간 적용했던 모든 규칙과 배경지식이 휘발되어 다음 주에 똑같은 지시문(Prompt)을 작성해야 합니다.

### 새로운 시대의 패러다임: LLM OS와 나만의 작업장 (Workspace)
컴퓨터 업계의 거장 안드레이 카파시(Andrej Karpathy)는 AI 시대의 새로운 컴퓨터 작동 방식을 **Software 3.0 / LLM OS (거대언어모델 운영체제)**라고 명명했습니다.

\`\`\`
   ┌────────────────────────────────────────────────────────┐
   │                  LLM OS Architecture                   │
   └───────────────────────────┬────────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
   1. Context Window    2. Tools & MCP         3. Harness & Verification
  - 작업 메모리 (RAM)   - 파일/외부 연동 (IO)   - 자동 구동/검증 (CPU Loop)
\`\`\`

- **LLM이 중앙 처리 장치(CPU) 역할**: 복잡한 비즈니스 상황을 분석하고 실행 순서를 판단합니다.
- **프로젝트 폴더가 메모리(RAM) 역할**: 데이터 파일, 보고서 양식, 프로젝트 지침 문서(\`CLAUDE.md\`)를 저장합니다.
- **도구 및 스크립트가 입출력(IO) 역할**: 파일 생성/수정, 터미널 명령어 구동, 외부 API 연동을 담당합니다.

---

## 2. Claude Cowork와 Claude Code의 차이점 한눈에 비교하기

초보 실무자가 자신의 직무에 맞게 어떤 도구를 선택해야 하는지 직관적으로 비교한 가이드입니다.

| 구분 | Claude Cowork (코워크) | Claude Code (클로드 코드) |
| :--- | :--- | :--- |
| **추천 대상** | 기획자, 마케터, PM, 디자이너, CS/운영 실무자 | 소프트웨어 개발자, 데이터 엔지니어, DevOps |
| **작업 화면** | 웹 / 데스크톱 비주얼 폴더 바인딩 인터페이스 | 터미널 / CLI (Command Line Interface) |
| **주요 입력물** | 문서 파일(.md, .txt, .csv), 디자인 와이어프레임 | 소스 코드 파일(.js, .py), Git 저장소, 테스트 스크립트 |
| **주요 출력물** | 주간 브리프, 기획서(PRD), 마케팅 카피, 분석 보고서 | 버그 수정 소스코드, API 엔드포인트, 단위 테스트 통과 |
| **초보자 난이도** | ⭐️ (클릭과 드래그 앤 드롭으로 사용 가능) | ⭐️⭐️⭐️ (터미널 기초 명령어 지식 필요) |

---

## 3. 초보자를 위한 성공적인 작업장 구축 3대 원칙

1. **작은 단위 과제부터 해결하기**: 처음부터 사내 전체 업무를 자동화하려 하지 마시고, '단일 회의록 요약', '1페이지 브리프 생성', '단일 오타/버그 수정'처럼 결과물이 명확하고 되돌리기 쉬운 단위부터 시작하세요.
2. **입력 자료와 출력 템플릿 고정하기**: 분석할 원본 데이터 파일과 결과물이 담길 마크다운(\`.md\`) 템플릿 양식을 폴더 안에 사전에 고정해 두세요.
3. **인간 승인선(Approval Line) 확보하기**: 에이전트가 파일 수정이나 외부 발송을 수행하기 전, 사람이 최종 눈으로 확인하고 승인하는 확인 절차를 거치도록 설계하세요.

---

## 4. 초보자 실습: 월요일 아침 9시 작업장 구동 4단계 튜토리얼

- **Step 1 (폴더 생성)**: 내 컴퓨터 바탕화면에 \`2026_Weekly_Workspace\` 폴더를 만듭니다.
- **Step 2 (자료 배치)**: 폴더 안에 참고할 주간 메모(\`raw_notes.txt\`)와 보고서 양식(\`template.md\`)을 넣습니다.
- **Step 3 (에이전트 지시)**: Claude에게 *"raw_notes.txt를 읽고 template.md 양식에 맞춰 weekly_report.md 파일로 저장해 줘"*라고 명령합니다.
- **Step 4 (최종 승인)**: 자동으로 생성된 \`weekly_report.md\` 파일의 텍스트를 검토하고 최종 승인합니다.
`;

// ==========================================
// 2편 (Lesson 36)
// ==========================================
const part2Md = `
Claude 마스터 가이드 2편에서는 에이전트가 작동하는 **4대 핵심 아키텍처**, **Traditional Chatbot과의 구체적 차이**, 그리고 에이전트의 헌법인 **\`CLAUDE.md\` 파일 작성법**을 초보자의 눈높이로 상세히 학습합니다.

---

## 1. 에이전트의 4대 작업 아키텍처 (Agent Architecture)

Claude 에이전트가 단발성 대화를 넘어서 스스로 완료 조건을 달성하는 4단계 내부 프로세스입니다.

\`\`\`
  Input Context ──> Agentic Reasoning ──> Tool Execution ──> Verification Loop
     (맥락 주입)           (추론 및 계획)          (도구 실행)            (자동 검증)
\`\`\`

1. **Input Context (입력 맥락 주입)**: 프로젝트 소스 코드, \`CLAUDE.md\` 행동 강령, 참고 레퍼런스 문서를 에이전트 메모리에 주입합니다.
2. **Agentic Reasoning (추론 및 단계별 계획)**: 거대한 요구사항을 여러 개의 작은 실행 과제로 분정하고 우선순위를 세웁니다.
3. **Tool Execution (실제 도구 구동)**: 파일 수정, 터미널 명령어 실행, 외부 API 연동 도구를 직접 구동합니다.
4. **Verification Loop (자가 검증 루프)**: 빌드, 린트, 단위 테스트 스크립트를 구동하여 자신이 작업한 결과가 정상인지 검증합니다.

---

## 2. 대화형 챗봇 vs 에이전틱 워크플로우 대조표

| 비교 항목 | 대화형 챗봇 (Traditional Chat) | 에이전틱 워크플로우 (Agentic Workflow) |
| :--- | :--- | :--- |
| **작업 목표** | 텍스트 대화 메세지 렌더링 | 앤드투앤드 과제 완수 (파일 저장 및 배포) |
| **작업 방식** | 사람의 질문 ➔ AI 답변 (1:1 단순 대화) | 목표 설정 ➔ AI 추론 ➔ 도구 실행 ➔ 자가 검증 |
| **오류 처리** | 사람이 오타나 에러를 찾아 다시 질의 | 에이전트가 테스트 에러 로그를 읽고 스스로 코드 수정 |
| **자산 보존** | 대화 창을 닫으면 사용한 내용이 상실됨 | \`CLAUDE.md\` 및 \`skills/\`로 프로젝트 자산에 완전 보존 |

---

## 3. 에이전트의 헌법: \`CLAUDE.md\` 정밀 작성 튜토리얼

프로젝트 루트 디렉토리에 \`CLAUDE.md\` 파일을 만들어 두면, Claude는 작업을 시작할 때마다 이 지침을 최우선으로 준수합니다.

### 초보자용 \`CLAUDE.md\` 소스 코드 풀 예시
\`\`\`markdown
# CLAUDE.md - StudyFlow 프로젝트 에이전트 행동 지침서

## 1. 프로젝트 기본 정보
- 이 프로젝트는 Vanilla CSS와 JavaScript 기반의 AI 학습 웹 플랫폼입니다.

## 2. 개발 및 검증 명령어 (Commands)
- 로컬 실행: \`npm run dev\`
- 단위 테스트: \`npm test\`
- 배포 명령어: \`npx wrangler deploy\`

## 3. 코드 작성 스타일 규정 (Code Style & Rules)
- 모든 변수와 함수명은 영문 캐멀케이스(camelCase)를 사용합니다.
- HTML 태그 작성 시 접근성을 위해 반드시 \`aria-label\` 속성을 지정합니다.
- 테스트를 통과하지 못한 코드는 절대로 커밋하거나 배포하지 않습니다.
- 파일 수정 전 영향을 받는 상위 모듈 3개를 먼저 파악하고 작업하세요.
\`\`\`
`;

// ==========================================
// 3편 (Lesson 37)
// ==========================================
const part3Md = `
Claude 마스터 가이드 3편에서는 비개발자를 위한 **Claude Cowork 실전 파이프라인**과 개발자를 위한 **Claude Code CLI 터미널 설치 및 가이드**를 단계별로 설명합니다.

---

## 1. 비개발자를 위한 Claude Cowork 4단계 실전 파이프라인

Cowork 환경에서 복잡한 프로그래밍 없이 폴더 기반으로 에이전트를 조율하는 비주얼 가공 스텝입니다.

### Cowork 실습 4단계
1. **Step 1: 폴더 바인딩 (Folder Binding)**: 내 컴퓨터의 작업 폴더(예: \`2026_주간업무\`)를 Cowork 화면으로 드래그 앤 드롭합니다.
2. **Step 2: 템플릿 지정**: 출력 결과물 양식이 담긴 마크다운 파일(\`template.md\`)을 연결합니다.
3. **Step 3: 에이전트 지시**: *"폴더 안의 주간 회의록 텍스트들을 읽고 template.md 양식에 맞춰 주간 보고서로 작성해 줘"*라고 명령합니다.
4. **Step 4: 검토 및 최종 승인 (Human Sign-off)**: 화면 우측에 완성된 마크다운 렌더링을 확인하고 최종 승인합니다.

---

## 2. 개발자를 위한 Claude Code CLI 터미널 설치 및 명령어 모음

터미널(Terminal / CMD) 환경에서 Claude Code를 설치하고 바로 사용할 수 있는 기초 명령어 세트입니다.

### CLI 설치 및 구동 3단계
\`\`\`bash
# 1. Claude Code CLI 글로벌 설치
npm install -g @anthropic-ai/claude-code

# 2. 프로젝트 폴더로 이동하여 CLI 인터랙티브 모드 구동
claude

# 3. 단발성 프로그래밍 지시 구동 (Single-run Mode)
claude -p "src/auth.js 파일의 토큰 만료 오타를 고치고 npm test를 구동해 줘"
\`\`\`

---

## 3. 에이전트 무한 루프 방지와 안전 롤백 수칙

- **Max 3-Step Iteration Cap**: 동일한 에러 수정 시 에이전트가 최대 3회까지만 자가 치유를 시도하도록 제약을 설정합니다.
- **Git Safety Tagging**: 대규모 코드 수정 전 터미널에 \`git tag pre-ai-backup\`을 입력하여 비상 시 원복할 수 있는 백업 지점을 남깁니다.
`;

// ==========================================
// 4편 (Lesson 38)
// ==========================================
const part4Md = `
Claude 마스터 가이드 4편에서는 실무 현장에서 바로 복사해서 사용할 수 있는 **실전 프롬프트 실행 카드 템플릿 4종**과 **Task Brief 체크리스트**를 제공합니다.

---

## 1. 초보자 즉시 복붙용 실행 카드 템플릿 4종

### 템플릿 1: 주간 비즈니스 종합 브리프 작성 카드
\`\`\`markdown
[Execution Card: Weekly Business Brief]
- 원본 파일: ./docs/weekly_notes/*.md, ./data/analytics.csv
- Target Audience: C-Level 경영진 및 프로젝트 매니저
- 작성 규칙:
  1. Executive Summary (최대 3줄 핵심 요약)
  2. 이번 주 주요 전략 변화 3가지 및 실적 지표
  3. 다음 주 실행 과제 (담당자 및 마감일 지정)
- 검증 규칙: 보고서의 수치 지표는 analytics.csv 원본과 100% 일치해야 함.
\`\`\`

### 템플릿 2: 회의록 ➔ 액션 아이템 자동 추출 카드
\`\`\`markdown
[Execution Card: Meeting Minutes Extractor]
- 원본 파일: ./meetings/transcript_20260803.txt
- 출력 양식:
  - 의결 사항 표 (확정 항목 vs 보류 항목 분리)
  - 액션 아이템 표 (과제명 | 담당자 | 마감일 | 리스크 수준)
- 제약 조건: 회의록에 언급되지 않은 내용을 임의로 추측하여 작성하지 말 것.
\`\`\`

### 템플릿 3: 단일 버그 최소 타격 수정 카드 (Minimal Impact Bugfix)
\`\`\`markdown
[Execution Card: Minimal Bugfix Protocol]
- 대상 버그: src/auth/tokenService.js 파일의 토큰 만료 예외 처리 에러
- 작업 절차:
  1. test/auth.test.js 파일에 실패하는 단위 테스트 작성
  2. src/auth/tokenService.js의 최소 범위 코드 수정
  3. \`npm test\` 구동하여 기존 기능의 깨짐(Regression) 0건 검증
\`\`\`

### 템플릿 4: 릴리즈 노트 & 변경 사항 자동 작성 카드
\`\`\`markdown
[Execution Card: Release Notes Generator]
- 원본 자료: Git 커밋 로그 (git log --oneline -n 20)
- 출력 양식:
  - New Features (신규 추가 기능)
  - Bug Fixes (버그 수정 내역)
  - Breaking Changes (주요 변경 및 유의사항)
\`\`\`

---

## 2. 작업 브리프 (Task Brief) 5대 체크리스트

에이전트에게 일을 맡기기 전 아래 5가지 항목을 점검하세요:
1. **[ ] 원본 데이터 (Input)**: 읽어야 할 파일의 위치와 경로가 지정되었는가?
2. **[ ] 결과 양식 (Output)**: 생성될 마크다운 양식이나 CSV 포맷이 고정되었는가?
3. **[ ] 예외 조건 (Constraint)**: 건드리면 안 되는 파일이나 규칙이 명시되었는가?
4. **[ ] 검증 명령어 (Verification)**: 결과를 확인할 \`npm test\`나 린터 명령이 포함되었는가?
5. **[ ] 백업 안전망 (Rollback)**: 실패 시 되돌릴 백업 파일이나 Git 커밋이 준비되었는가?
`;

// ==========================================
// 5편 (Lesson 39)
// ==========================================
const part5Md = `
Claude 마스터 가이드 5편에서는 에이전트가 궤도를 벗어나지 않고 안전하게 작업하도록 둘러싸는 **하네스 엔지니어링 (Harness Engineering)**의 4대 기둥과 **자동 검증 파이프라인**을 학습합니다.

---

## 1. 하네스 엔지니어링의 4대 기둥 (Four Pillars)

하네스(Harness)란 AI 에이전트가 안전한 울타리 안에서만 작동하도록 제어하는 주변 시스템입니다.

\`\`\`
   ┌────────────────────────────────────────────────────────┐
   │             Four Pillars of Agent Harness              │
   └───────────────────────────┬────────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
   1. Constrain          2. Inform             3. Verify             4. Correct
  - 접근 범위 제한      - 레퍼런스 정보 주입   - 런타임 결과 검증    - 에러 자가 치유
\`\`\`

1. **Constrain (접근 제약)**: 에이전트가 수정할 수 있는 파일 범위와 네트워크 접근 권한을 제한합니다.
2. **Inform (정보 주입)**: \`CLAUDE.md\` 파일과 프로젝트 스키마 가이드라인을 사전에 주입합니다.
3. **Verify (자동 검증)**: \`npm test\`, \`npm run lint\` 명령을 구동하여 정상 동작 여부를 판정합니다.
4. **Correct (자가 보정)**: 검증 실패 시 에러 로그를 직접 읽고 코드를 스스로 다시 고칩니다.

---

## 2. 통합 자동 검증 파이프라인 스크립트 작성 예시

\`\`\`bash
# 린팅, 타입 체크, 단위 테스트를 한 번에 구동하는 통합 검증 명령어
npx eslint src/ && npx tsc --noEmit && npm test
\`\`\`
`;

// ==========================================
// 6편 (Lesson 40)
// ==========================================
const part6Md = `
Claude 마스터 가이드 6편에서는 프로젝트 전용 기능 확장인 **\`skills/\` 작성법**, 외부 서비스 연동 프로토콜인 **MCP (Model Context Protocol)**, 그리고 **Hooks 파이프라인**을 해설합니다.

---

## 1. \`skills/\` 디렉토리 모듈화 작성법

자주 쓰는 복잡한 검증 지침을 \`skills/스킬명/SKILL.md\` 형태로 프로젝트 폴더 안에 보존합니다.

### \`skills/code-audit/SKILL.md\` 작성 예시
\`\`\`markdown
---
name: code-audit
description: 프로젝트 코드의 보안 및 스타일 오디트를 구동하는 표준 스킬
---

# Code Audit Instructions
1. Static Analysis: \`npm run lint\` 명령을 구동하여 스타일 위반 항목 점검.
2. Security Check: 소스 코드에 API 비밀키가 평문으로 들어있는지 스캔.
3. Error Handling: 비동기 API 호출부에 try-catch 예외 처리가 적용되었는지 확인.
4. Report Output: 검사 결과를 \`./docs/audit_report.md\` 파일로 출력.
\`\`\`

---

## 2. MCP (Model Context Protocol) 연동 기초

MCP는 Claude 에이전트가 외부 데이터베이스(Postgres), GitHub, Slack, Figma 등과 소통하도록 지원하는 오픈 프로토콜입니다.

### MCP JSON 설정 파일 예시 (\`claude_desktop_config.json\`)
\`\`\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxx" }
    }
  }
}
\`\`\`
`;

// ==========================================
// 7편 (Lesson 41)
// ==========================================
const part7Md = `
Claude 마스터 가이드 7편에서는 **기획자**, **개발자**, **프로젝트 매니저(PM)**를 위한 직무별 실전 구동 플레이북을 제시합니다.

---

## 1. 기획자(Planner): 완벽한 PRD 작성 파이프라인

기획자가 제품 요구사항 정의서(PRD)를 작성할 때 활용하는 모범 프롬프트 실행 카드입니다.

\`\`\`markdown
[Planner Execution Card: PRD Generation]
- 목표: StudyFlow 실시간 1:1 질의응답 커뮤니티 신규 기능 설계
- 수록 항목:
  1. 사용자 페르소나 및 핵심 문제 정의
  2. MoSCoW 기법 기반 기능 분류 (Must / Should / Could / Won't)
  3. 비기능 요구사항 (응답 속도 200ms 이하, 보안 인증)
  4. 핵심 성공 지표 (DAU, 질문 해결 비율)
\`\`\`

---

## 2. 개발자(Developer): TDD & 안전 리팩터링 플레이북

- **Red-Green-Refactor 릴레이**: 실패하는 테스트 코드 작성 ➔ 구현 ➔ 리팩터링 진행
- **Mock Server 생성**: 프론트엔드 팀을 위한 테스트용 OpenAPI Mock 서버 자동 렌더링

---

## 3. 프로젝트 매니저(PM): 이슈 분류 & 주간 보고서

- **Issue Triage**: 접수된 버그 제보 50건을 긴급도/영향도 기준 4분면 자동 태깅
- **Weekly Progress Report**: Git 커밋 내역을 분석하여 스프린트 진척률 보고서 생성
`;

// ==========================================
// 8편 (Lesson 42)
// ==========================================
const part8Md = `
Claude 마스터 가이드 8편에서는 **디자이너**, **마케터**, **CS/운영 실무자**를 위한 전용 에이전트 구동 가이드를 해설합니다.

---

## 1. 디자이너(Designer): Figma 디자인 토큰 동기화

- **Figma Tokens Sync**: Figma의 색상, 여백, 폰트 변수를 CSS 변수(\`--primary-color: #ff6b35\`)로 자동 변환
- **a11y Check**: 색상 대비 비율(4.5:1 이상) 및 키보드 웹 접근성 자동 검증

---

## 2. 마케터(Marketer): 콘텐츠 캘린더 & 카피라이팅

- **Content Calendar**: 4주치 블로그 및 소셜 미디어 포스팅 일정표 자동 설계
- **A/B Test Copy**: 동일 상품에 대해 격식체, 캐주얼체, 긴급체 3가지 카피 렌더링

---

## 3. CS/운영팀(Operations): 고객 문의 자동 태깅 & FAQ

- **Feedback Classifier**: 고객 문의 이메일을 환불, 장애, 단순 문의로 자동 분류
- **FAQ Sync**: 신규 문의 내역을 바탕으로 자주 묻는 질문(FAQ) 마크다운 문서 자동 갱신
`;

// ==========================================
// JSON / SQL Generation for Part 1 to 8
// ==========================================
const lessons = [
  { order_index: 35, slug: 'ch35-claude-master-guide-part1-ecosystem-and-software3', title: 'Claude 마스터 가이드 [1편: 생태계와 Software 3.0]', seo_title: 'Claude 마스터 가이드 1편 - 질문창에서 작업장으로, Software 3.0과 LLM OS', seo_description: 'Claude 생태계 패러다임 전환, Software 3.0 및 LLM OS 아키텍처 원리를 초보자 눈높이로 해설합니다.', excerpt: 'Claude 생태계 패러다임 전환, Software 3.0 및 LLM OS 아키텍처 초보자 가이드입니다.', body_md: part1Md },
  { order_index: 36, slug: 'ch36-claude-master-guide-part2-core-concepts-and-workspace', title: 'Claude 마스터 가이드 [2편: 작업 구조와 에이전틱 워크플로우]', seo_title: 'Claude 마스터 가이드 2편 - 4대 작업 아키텍처와 Agentic Workflow', seo_description: 'Claude 4대 작업 아키텍처, Agentic Workflow와 전통 챗봇 비교, CLAUDE.md 작성법을 해설합니다.', excerpt: 'Claude 4대 작업 아키텍처, Agentic Workflow 및 CLAUDE.md 작성법 가이드입니다.', body_md: part2Md },
  { order_index: 37, slug: 'ch37-claude-master-guide-part3-cowork-and-claude-code-playbook', title: 'Claude 마스터 가이드 [3편: Cowork와 Claude Code 실전 플레이북]', seo_title: 'Claude 마스터 가이드 3편 - 비개발자 Cowork & 개발자 CLI 터미널 플레이북', seo_description: 'Cowork 비주얼 4단계 파이프라인과 Claude Code CLI 터미널 기초 명령어를 입문자용으로 해설합니다.', excerpt: 'Cowork 비주얼 4단계 파이프라인과 CLI 터미널 기초 명령어 가이드입니다.', body_md: part3Md },
  { order_index: 38, slug: 'ch38-claude-master-guide-part4-execution-cards-and-templates', title: 'Claude 마스터 가이드 [4편: 실행 카드 - 템플릿, 체크리스트 & 학습 경로]', seo_title: 'Claude 마스터 가이드 4편 - 실무 복붙용 템플릿 4종과 작업 브리프 체크리스트', seo_description: '실무 복붙용 실행 카드 템플릿 4종, Task Brief 5대 체크리스트 및 실습 순서를 해설합니다.', excerpt: '실무 복붙용 실행 카드 템플릿 4종과 Task Brief 체크리스트 가이드입니다.', body_md: part4Md },
  { order_index: 39, slug: 'ch39-claude-master-guide-part5-system-design-and-harness', title: 'Claude 마스터 가이드 [5편: 시스템 설계 - 컨텍스트, 하네스 & 자동 검증]', seo_title: 'Claude 마스터 가이드 5편 - 하네스 엔지니어링 4대 기둥과 자동 검증 파이프라인', seo_description: '하네스 엔지니어링 4대 기둥 (Constrain, Inform, Verify, Correct) 및 자동 검증 스크립트를 해설합니다.', excerpt: '하네스 엔지니어링 4대 기둥과 자동 검증 파이프라인 해설 가이드입니다.', body_md: part5Md },
  { order_index: 40, slug: 'ch40-claude-master-guide-part6-skills-plugins-mcp-hooks', title: 'Claude 마스터 가이드 [6편: 확장과 자동화 - Skills, Plugins, MCP & Hooks]', seo_title: 'Claude 마스터 가이드 6편 - skills/ 모듈화, MCP 서버 연동과 Command Hooks', seo_description: 'skills/ 모듈화 작성법, Model Context Protocol (MCP) 연동 기초를 해설합니다.', excerpt: 'skills/ 모듈화 작성법 및 MCP 커스텀 서버 연동 해설 가이드입니다.', body_md: part6Md },
  { order_index: 41, slug: 'ch41-claude-master-guide-part7-job-specific-playbook-dev-pm', title: 'Claude 마스터 가이드 [7편: 직무별 플레이북 - 기획자, 개발자, PM]', seo_title: 'Claude 마스터 가이드 7편 - 기획자 PRD, 개발자 TDD & PM 리스크 트래킹', seo_description: '기획자 PRD 명세 작성, 개발자 TDD/리팩터링 및 PM 일감 이슈 분류 플레이북을 해설합니다.', excerpt: '기획자 PRD 명세, 개발자 TDD 및 PM 리스크 트래킹 가이드입니다.', body_md: part7Md },
  { order_index: 42, slug: 'ch42-claude-master-guide-part8-job-specific-playbook-design-ops', title: 'Claude 마스터 가이드 [8편: 직무별 플레이북 - 디자이너, 마케터, CS/운영]', seo_title: 'Claude 마스터 가이드 8편 - 디자이너 Figma 토큰, 마케터 카피라이팅 & CS 자동화', seo_description: '디자이너 Figma 토큰 동기화, 마케터 콘텐츠 캘린더 및 CS/운영 인시던트 분류를 해설합니다.', excerpt: '디자이너 Figma 토큰 동기화, 마케터 콘텐츠 캘린더 및 CS 분류 가이드입니다.', body_md: part8Md }
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

fs.writeFileSync('scratch/seed_claude_master_ultimate_1to8.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_claude_master_ultimate_1to8.sql!');
