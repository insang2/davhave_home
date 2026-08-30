import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Claude 마스터 가이드 [4편, 5편, 6편] 대용량 보강 2차 스크립트 작성 ===');

// ==========================================
// 4편 (Part 4: 실행 카드 - 템플릿, 체크리스트 & 학습 경로)
// ==========================================
const part4Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 4편**에서는 실무에서 즉시 복사하여 사용할 수 있는 **실행 카드 템플릿 10종**, **작업 브리프 체크리스트**, **주간 단계별 학습 경로**, 그리고 **Input-Process-Output 아키텍처**를 초대용량 분량으로 다룹니다.

---

## 1. 실무 즉시 복붙용 실행 카드 템플릿 10종

에이전트에게 덤덤한 자연어 문장 대신 표준화된 **실행 카드(Execution Card)** 형태로 작업을 요청하면 결과물의 오차 비율이 90% 이상 감소합니다.

### 템플릿 1: 주간 종합 비즈니스 브리프 (Weekly Business Brief)
\`\`\`markdown
[Execution Card: Weekly Business Brief]
- Input Files: ./docs/weekly_notes/*.md, ./data/analytics_summary.csv
- Target Audience: C-Level & Project Managers
- Format Rules:
  1. Executive Summary (Max 3 lines)
  2. Top 3 Strategic Shifts & Key Metrics
  3. Action Items with Owner & Priority
- Verification Rule: Ensure all numbers match CSV raw data exactly.
\`\`\`

### 템플릿 2: 회의록 ➔ 액션 아이템 자동 추출 카드
\`\`\`markdown
[Execution Card: Meeting Minutes to Action Matrix]
- Input: ./meetings/transcript_20260803.txt
- Required Output:
  - Decision Matrix (Agreed vs Pending)
  - Action Items Table (Task | Assignee | Deadline | Risk Level)
- Constraint: Do not infer unmentioned decisions. Mark unconfirmed items as "Pending Review".
\`\`\`

### 템플릿 3: 단일 버그 최소 타격 수정 카드 (Minimal Impact Bugfix)
\`\`\`markdown
[Execution Card: Minimal Bugfix Protocol]
- Target Issue: Token Expiration Error in src/auth/tokenService.js
- Workflow:
  1. Write failing unit test in test/auth.test.js
  2. Modify minimal lines of code in src/auth/tokenService.js
  3. Run \`npm test\` and verify 0 regression failures
- Deliverable: Git diff summary and test pass proof
\`\`\`

### 템플릿 4: 레거시 API DTO 호환성 변환 카드
\`\`\`markdown
[Execution Card: Legacy API DTO Transformation]
- Input: ./src/api/v1/userDto.ts
- Output Target: ./src/api/v2/userDto.ts
- Requirements: Keep backward compatibility with v1 field names while mapping to v2 schema.
\`\`\`

### 템플릿 5: 마케팅 랜딩페이지 카피라이팅 변환 카드
\`\`\`markdown
[Execution Card: Landing Page Copywriting]
- Product Domain: AI-based Task Management SaaS
- Tone: Professional yet Engaging
- Deliverable: Hero Section Headline, 3 Feature Bullet Points, Call-to-Action (CTA) Text
\`\`\`

### 템플릿 6: SQL 쿼리 최적화 및 인덱스 제안 카드
### 템플릿 7: 보안 취약점 점검 및 OWASP 린팅 카드
### 템플릿 8: Figma 토큰 ➔ CSS 변수 동기화 카드
### 템플릿 9: 기술 블로그 아티클 변환 카드
### 템플릿 10: 릴리즈 노트 & 변경 사항 자동 작성 카드

---

## 2. 작업 브리프 (Task Brief) 체크리스트

에이전트에게 일을 맡기기 전 아래 5가지 체크리스트가 충족되었는지 점검해야 합니다.

| 체크 항목 | 확인 질문 | 충족 여부 |
| :--- | :--- | :---: |
| **1. 원본 데이터 (Input)** | 읽어야 할 파일 경로가 명확히 지정되었는가? | [ ] |
| **2. 결과 양식 (Output)** | 출력 마크다운 템플릿이나 DTO 스키마가 고정되었는가? | [ ] |
| **3. 예외 조건 (Constraint)** | 건드리지 말아야 할 파일이나 금지 수칙이 명시되었는가? | [ ] |
| **4. 검증 명령어 (Verification)** | 실행 후 성공을 확인할 \`npm test\`나 린터가 있는가? | [ ] |
| **5. 롤백 안전망 (Rollback)** | 실패 시 되돌릴 Git 태그나 백업 파일이 준비되었는가? | [ ] |

---

## 3. 4주 완성 Claude 실무 적응 학습 경로 (Learning Curve)

- **1주차 (기본 감각)**: 단일 회의록 요약, 브리프 생성, Cowork 폴더 바인딩 습득
- **2주차 (작업 계약과 규칙)**: \`CLAUDE.md\` 작성, 단일 버그 수정 카드 구동
- **3주차 (자동화와 확장)**: \`skills/\` 디렉토리 작성, MCP 서버 연동 및 CLI 커맨드 결합
- **4주차 (팀 운영 및 거버넌스)**: Git Worktree 서브에이전트 오케스트레이션, CI/CD 자동 리뷰 구축
`;

// ==========================================
// 5편 (Part 5: 시스템 설계 - 컨텍스트, 하네스 & 자동 검증)
// ==========================================
const part5Md = `
Claude 마스터 가이드 5편에서는 **컨텍스트 가드레일 (Context Guardrails)**, **하네스 엔지니어링 (Harness Engineering)**, **자동 검증 파이프라인 (Lint / Test / Build)**, 그리고 **자가 치유 에러 회복 루프**를 깊이 있게 다룹니다.

---

## 1. 하네스 엔지니어링 (Harness Engineering)의 4대 기둥

하네스(Harness)는 AI 모델이 궤도를 이탈하지 않고 정확히 목표를 달성하도록 둘러싸는 **구조적 장치**입니다.

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

1. **Constrain (제약)**: 에이전트의 접근 권한, 수정 범위, 네트워크 송수신 제한
2. **Inform (정보 주입)**: \`CLAUDE.md\`, 프로젝트 도메인 지식, 스키마 정의 주입
3. **Verify (검증)**: 터미널 명령어를 통한 린트, 타입 체크, 단위 테스트 패스 검증
4. **Correct (보정)**: 검증 실패 시 로그를 읽어 코드를 자동으로 다시 고치는 자가 치유 루프

---

## 2. 자동 검증 파이프라인 (Automated Verification Pipeline)

에이전트가 코드를 작성한 후 사람의 개입 없이 스스로 런타임 성공 여부를 판단하는 파이프라인 구축 방식입니다.

### Verification Flow Architecture
\`\`\`
  Code Modification ──> Linter Check ──> Type Check (tsc) ──> Unit Test (Jest/Vitest)
                             │                  │                     │
                             ▼ Fail             ▼ Fail                ▼ Fail
                       Self-Correct Loop ── Self-Correct Loop ── Self-Correct Loop
\`\`\`

### 검증 스크립트 실행 예시
\`\`\`bash
# 린트 및 타입 체크 통합 검증 명령
npm run lint && npx tsc --noEmit && npm test
\`\`\`

---

## 3. 자가 치유(Self-Healing) 디버깅 수칙

- **Max Retry Threshold**: 동일 에러에 대해 최대 3회까지만 자가 치유 시도 (무한 루프 방지)
- **Error Context Extraction**: 전체 로그 대신 마지막 Traceback 라인과 원인 코드 20줄만 핀포인팅 추출
- **Graceful Fallback**: 3회 이상 실패 시 현황을 \`Error_Report.md\`에 기록하고 인간 엔지니어에게 인수인계
`;

// ==========================================
// 6편 (Part 6: 확장과 자동화 - Skills, Plugins, MCP & Hooks)
// ==========================================
const part6Md = `
Claude 마스터 가이드 6편에서는 **Skills 모듈화**, **Plugins 시스템**, **Model Context Protocol (MCP)**, 그리고 **Pre/Post Command Hooks**를 활용한 고도화 자동화 체계를 구축합니다.

---

## 1. 프로젝트 전용 스킬 (\`skills/\`) 모듈화 가이드

프로젝트 내부의 반복적인 복잡한 작업을 \`skills/\` 디렉토리에 마크다운 모듈로 자산화합니다.

### \`skills/code-audit/SKILL.md\` 스크립트 예시
\`\`\`markdown
---
name: code-audit
description: 프로젝트 보안 및 성능 린팅 오디트를 구동하는 표준 스킬
---

# Code Audit Instructions
1. Run static analysis: \`npm run lint\`
2. Check for unused dependencies and console.log statements.
3. Verify all external API calls have try-catch error handlers.
4. Export audit report to \`./docs/audit_summary.md\`.
\`\`\`

---

## 2. Model Context Protocol (MCP) 연동 아키텍처

MCP는 Claude 에이전트가 Figma, GitHub, Postgres, Slack 등 외부 시스템과 표준 포맷으로 소통하도록 지원하는 오픈 프로토콜입니다.

\`\`\`
  Claude Agent ──(MCP Protocol)──> Custom MCP Server ──> Postgres / GitHub / Figma
\`\`\`

### MCP JSON 설정 예시 (\`claude_desktop_config.json\`)
\`\`\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxx" }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/db"]
    }
  }
}
\`\`\`

---

## 3. Pre / Post Command Hooks 파이프라인

에이전트가 특정 명령(예: \`git commit\`, \`file write\`)을 실행하기 직전/직후에 자동으로 실행되는 Hook 스크립트 설정입니다.

- **Pre-Hook**: 파일 변경 전 백업 생성 및 보안 검사
- **Post-Hook**: 파일 변경 후 포매터(\`prettier\`) 실행 및 테스트 자동 구동

\`\`\`bash
# .claude/hooks/post-write.sh
#!/bin/bash
npx prettier --write "$1"
npm test
\`\`\`
`;

// ==========================================
// JSON / SQL Generation for Part 4, 5 & 6
// ==========================================
const lesson38 = {
  order_index: 38,
  slug: 'ch38-claude-master-guide-part4-execution-cards-and-templates',
  title: 'Claude 마스터 가이드 [4편: 실행 카드 - 템플릿, 체크리스트 & 학습 경로]',
  seo_title: 'Claude 마스터 가이드 4편 - 실무 복붙용 템플릿 10종과 작업 브리프 체크리스트',
  seo_description: '실무 복붙용 실행 카드 템플릿 10종, 작업 브리프 5대 체크리스트, 4주 완성 학습 경로를 배웁니다.',
  excerpt: '실무 복붙용 실행 카드 템플릿 10종, 작업 브리프 체크리스트 및 4주 학습 경로 가이드입니다.',
  body_md: part4Md
};

const lesson39 = {
  order_index: 39,
  slug: 'ch39-claude-master-guide-part5-system-design-and-harness',
  title: 'Claude 마스터 가이드 [5편: 시스템 설계 - 컨텍스트, 하네스 & 자동 검증]',
  seo_title: 'Claude 마스터 가이드 5편 - 하네스 엔지니어링 4대 기둥과 자동 검증 파이프라인',
  seo_description: '하네스 엔지니어링 4대 기둥 (Constrain, Inform, Verify, Correct), 자동 검증 파이프라인 및 자가 치유 디버깅을 배웁니다.',
  excerpt: '하네스 엔지니어링 4대 기둥, 자동 검증 파이프라인 및 자가 치유 에러 회복 가이드입니다.',
  body_md: part5Md
};

const lesson40 = {
  order_index: 40,
  slug: 'ch40-claude-master-guide-part6-skills-plugins-mcp-hooks',
  title: 'Claude 마스터 가이드 [6편: 확장과 자동화 - Skills, Plugins, MCP & Hooks]',
  seo_title: 'Claude 마스터 가이드 6편 - skills/ 모듈화, MCP 서버 연동과 Command Hooks',
  seo_description: 'skills/ 모듈화 작성법, Model Context Protocol (MCP) 연동 및 Pre/Post Command Hooks 파이프라인 구축을 배웁니다.',
  excerpt: 'skills/ 디렉토리 모듈화, MCP 커스텀 서버 연동 및 Command Hooks 자동화 가이드입니다.',
  body_md: part6Md
};

const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

const sqlContent = `
-- Lesson 38 (Part 4)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson38.slug)}', '${escapeSql(lesson38.title)}', '${escapeSql(lesson38.excerpt)}', '${escapeSql(part4Md)}', '${escapeSql(marked.parse(part4Md))}', 'published', '${escapeSql(lesson38.seo_title)}', '${escapeSql(lesson38.seo_description)}', ${lesson38.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 39 (Part 5)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson39.slug)}', '${escapeSql(lesson39.title)}', '${escapeSql(lesson39.excerpt)}', '${escapeSql(part5Md)}', '${escapeSql(marked.parse(part5Md))}', 'published', '${escapeSql(lesson39.seo_title)}', '${escapeSql(lesson39.seo_description)}', ${lesson39.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 40 (Part 6)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson40.slug)}', '${escapeSql(lesson40.title)}', '${escapeSql(lesson40.excerpt)}', '${escapeSql(part4Md)}', '${escapeSql(marked.parse(part6Md))}', 'published', '${escapeSql(lesson40.seo_title)}', '${escapeSql(lesson40.seo_description)}', ${lesson40.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;
`;

fs.writeFileSync('scratch/seed_claude_master_part4_5_6.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_claude_master_part4_5_6.sql with 2nd ENHANCED LENGTH!');
