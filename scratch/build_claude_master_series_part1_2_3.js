import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Claude 마스터 가이드 [1편, 2편, 3편] 대용량 보강 3차 스크립트 작성 ===');

// ==========================================
// 1편 (Part 1: Claude 생태계, Software 3.0 & LLM OS 패러다임)
// ==========================================
const part1Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 1편**에서는 단순한 대화창(Chat Window)에서 실제 작업 시스템(Workspace System)으로의 거대한 패러다임 전환과 **Software 3.0 / LLM OS**의 핵심 원리를 깊이 있게 다룹니다.

---

## 1. 왜 지금 "질문창"에서 "작업장"으로 이동해야 하는가

AI를 단순히 "무엇을 물어볼까"의 관점으로만 바라보던 바이브 코딩(Vibe Coding)의 시대가 지나갔습니다. 이제 실무자의 핵심 질문은 **"어느 모델이 더 똑똑한가"**에서 **"어느 도구가 내 실제 작업을 끊김 없이 끝까지 감당해내는가"**로 이동하고 있습니다.

### Andrej Karpathy의 Software 3.0과 LLM OS
- **Software 1.0**: 사람이 직접 C/C++, Java 등 소스 코드를 규칙으로 명시 작성
- **Software 2.0**: 신경망(Neural Networks) 가중치를 데이터로 학습시키는 딥러닝 방식
- **Software 3.0 / LLM OS**: 거대언어모델(LLM)이 작업 운영체제(OS)의 중앙 CPU/커널이 되어 파일, 도구, 자동화 파이프라인, 네트워크를 오케스트레이션하는 시대

\`\`\`
   ┌────────────────────────────────────────────────────────┐
   │                  LLM OS Architecture                   │
   └───────────────────────────┬────────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
   1. Context Window    2. Tools & MCP         3. Harness & Verification
  - 작업 메모리 (RAM)   - 외부 연동 (IO)        - 실행 및 검증 (CPU Loop)
\`\`\`

---

## 2. 왜 Claude Code와 Cowork가 실무 중심축인가

Anthropic이 가리키는 미래의 이정표는 **Claude Code**와 **Claude Cowork**에 선명히 집약되어 있습니다.

### Claude Code vs Claude Cowork
- **Claude Code**: 터미널/CLI 환경에서 개발 저장소, Git, 파일 시스템, 로컬 검증 명령을 직접 실행하는 에이전트 표면
- **Claude Cowork**: Claude Code의 검증 및 에이전틱 작업 능력을 지식 노동, 기획, 문서화, 마케팅, 비개발 실무 영역으로 확장한 비주얼 작업 표면

---

## 3. 실무 작업장 구축 3대 원칙

1. **작은 단위부터 닫기**: 처음부터 거대한 파이프라인을 구축하려 하지 말고, 회의록 요약, 브리프 작성, 단일 함수 버그 수정 등 되돌리기 쉬운 단위부터 닫기
2. **읽을 자료와 템플릿의 고정**: 작업 대상 원본 파일과 결과물 출력 템플릿 양식을 사전에 고정하기
3. **인간 승인선(Approval Line) 확보**: 파일 수정 및 외부 발송/배포 단계에 명시적 확인 구체화

---

## 4. 실무 장면 3가지 예시

- **장면 A (주간 브리프)**: 경쟁사 정보, 기사 링크, 전주 액션 아이템 폴더 ➔ 핵심 변화 및 금주 액션 3가지 압축
- **장면 B (회의 문서화)**: 녹취록 및 메모 ➔ '무슨 말이 오갔는가'가 아닌 '이번 주 결정 필요 사항' 재정리
- **장면 C (버그 수정)**: 재현 경로, 원인 가설, 검증 계획 ➔ 테스트 패스 및 인수 메모 작성

---

## 5. 월요일 아침 9시의 워크플로우 비교

| 기존 방식 (Question Window) | 새로운 방식 (LLM OS Workspace) |
| :--- | :--- |
| 질문창에 일회성 질문 입력 | 프로젝트 폴더에 원본 파일과 템플릿 배치 |
| 답변 복사해서 이메일/Slack에 수동 붙여넣기 | 에이전트가 완성된 Markdown 문서 렌더링 |
| 히스토리가 파편화되어 재사용 불가능 | \`CLAUDE.md\`와 \`skills/\`로 자산화되어 팀이 재사용 |
`;

// ==========================================
// 2편 (Part 2: Claude 작업 구조, Agentic Workflow & Workspace)
// ==========================================
const part2Md = `
Claude 마스터 가이드 2편에서는 **Claude의 4대 작업 아키텍처**, **에이전틱 워크플로우 (Agentic Workflow)**, 그리고 **컨텍스트 윈도우의 효율적 관리**를 다룹니다.

---

## 1. Claude 작업 구조 4대 아키텍처

에이전트가 단발성 답변을 넘어 완성도 높은 작업을 수행하기 위해서는 아래 4개 레이어가 긴밀히 연결되어야 합니다.

\`\`\`
  Input Context ──> Agentic Reasoning ──> Tool Execution ──> Verification Loop
\`\`\`

1. **Input Context (입력 맥락)**: 프로젝트 파일, \`CLAUDE.md\` 지침, 관련 레퍼런스 문서
2. **Agentic Reasoning (추론 및 계획)**: 요구사항 분해, 작업 순서 수립, 예외 상황 감지
3. **Tool Execution (도구 실행)**: 파일 읽기/쓰기, terminal 명령어 구동, MCP API 호출
4. **Verification Loop (검증 루프)**: 빌드 체크, 단위 테스트 패스, 출력 양식 오차 점검

---

## 2. Agentic Workflow vs Traditional Chatbot

| 구분 | 대화형 챗봇 (Traditional Chat) | 에이전틱 워크플로우 (Agentic Workflow) |
| :--- | :--- | :--- |
| **작업 단위** | 단발성 질문-답변 메세지 | 앤드투앤드 실행 완료 조건 |
| **도구 사용** | 텍스트 생성 위주 | 파일 생성/수정, 터미널 실행, 외부 API 연동 |
| **피드백 루프** | 사람의 재질문에 의존 | 에이전트 자가 디버깅 및 테스트 자동 검증 |
| **자산화** | 대화 이력 휘발 | \`CLAUDE.md\` 및 \`skills/\`로 프로젝트 자산화 |

---

## 3. 컨텍스트 윈도우(Context Window)를 낭비하지 않는 3대 습관

1. **상태 분리 (State Separation)**: 원본 참고 자료와 작업 진행 상황(\`Task.md\`)을 완전히 분리하여 주입
2. **트림 및 프루닝 (Trimming)**: 10,000줄 넘는 전체 로그나 대용량 코드베이스 중 핵심 인터페이스 영역만 핀포인팅 주입
3. **컴팩트 메모리 갱신**: 긴 작업 시 매 단계가 끝나면 지금까지 한 일과 남은 과제를 한 문장으로 압축 갱신

---

## 4. \`CLAUDE.md\` 파일 구조 명세

프로젝트 루트 디렉토리에 배치되는 \`CLAUDE.md\`는 에이전트의 행동 강령이자 지침서입니다.
- **Commands**: 테스트, 빌드, 린트 구동 명령어 정의
- **Code Style**: 탭/스페이스, 폰트, 타입 명시 규칙
- **Workflow**: PR 병합 전 반드시 거쳐야 할 검증 단계

\`\`\`markdown
# CLAUDE.md Guidelines for StudyFlow

## Commands
- Build: \`npx wrangler deploy\`
- Local Dev: \`npm run dev\`
- Test: \`npm test\`

## Rules
- Always use ES Modules syntax (\`import/export\`)
- Do not edit notebook extensions (\`.ipynb\`)
- Ensure all HTML has proper ARIA labels for accessibility
\`\`\`
`;

// ==========================================
// 3편 (Part 3: Cowork와 Claude Code 실전 플레이북)
// ==========================================
const part3Md = `
Claude 마스터 가이드 3편에서는 비개발자를 위한 **Claude Cowork 플레이북**과 엔지니어를 위한 **Claude Code CLI 실전 가이드**를 현장 중심 사례와 함께 상세히 분석합니다.

---

## 1. Claude Cowork 실전 활용 4단계 파이프라인

Cowork는 지식 노동자(기획자, 마케터, 운영자)가 복잡한 프로그래밍 없이도 폴더와 문서 기반으로 AI 에이전트를 조율하는 비주얼 가공 표면입니다.

### Cowork 주간 리포트 자동화 예시
\`\`\`
  Source Documents Folder ──> Cowork Workspace ──> Output Template ──> Final Brief.md
\`\`\`

1. **폴더 바인딩 (Folder Binding)**: 분석할 주간 회의록 메모, 데이터 CSV, 경쟁사 동향 링크를 단일 폴더에 통합
2. **출력 템플릿 지정**: 서론-본론-결론 및 핵심 액션 아이템 3가지 양식이 담긴 마크다운 템플릿 연결
3. **에이전트 가공 명령**: 단순 요약이 아닌 "우리 사업에 미치는 영향 3가지" 중심의 해석 가공 지시
4. **인간 리뷰 & 승인**: 렌더링된 결과물 검토 및 텍스트 최종 가듬기

---

## 2. Claude Code CLI 터미널 실전 플레이북

Claude Code CLI는 개발자가 IDE를 벗어나 터미널 환경에서 파워풀하게 코드를 수정하고 자가 치유(Self-Healing)를 수행하는 도구입니다.

### 주요 CLI 명령어 패턴
\`\`\`bash
# 1. 터미널 인터랙티브 모드 구동
claude

# 2. 단발성 검증 및 실행 명령 지시
claude -p "src/lib/auth.js 파일의 토큰 만료 에러를 수정하고 npm test를 돌려 승인 결과를 보고해줘"

# 3. 프로젝트 컨텍스트 인덱싱 확인
claude status
\`\`\`

- **Context Indexing**: 저장소 내 파일 간 연관 관계 자동 인덱싱
- **Permission Checkpoint**: 파일 삭제, 외부 커밋, 위험 권한 명령 시 개발자 승인 팝업 구동
- **Self-Healing Loop**: 테스트 실패 시 에러 로그를 직접 읽고 코드를 스스로 재수정하는 루프 실행

---

## 3. 실전 문제 해결: 무한 루프 예방과 안전 롤백

에이전트가 단일 버그 수정 시 무한 루프에 빠지거나 코드를 파괴하지 않도록 **Max 3-Step Iteration Cap** 및 \`git diff\` 샌드박싱 구동 방식을 적용합니다.
`;

// ==========================================
// JSON / SQL Generation for Part 1, 2 & 3
// ==========================================
const lesson35 = {
  order_index: 35,
  slug: 'ch35-claude-master-guide-part1-ecosystem-and-software3',
  title: 'Claude 마스터 가이드 [1편: 생태계와 Software 3.0]',
  seo_title: 'Claude 마스터 가이드 1편 - 질문창에서 작업장으로, Software 3.0과 LLM OS',
  seo_description: 'Claude 생태계의 거대한 패러다임 전환, Andrej Karpathy의 Software 3.0 및 LLM OS 아키텍처 원리를 배웁니다.',
  excerpt: 'Claude 생태계의 거대한 패러다임 전환, Software 3.0 및 LLM OS 작업장 구축 3대 원칙 가이드입니다.',
  body_md: part1Md
};

const lesson36 = {
  order_index: 36,
  slug: 'ch36-claude-master-guide-part2-core-concepts-and-workspace',
  title: 'Claude 마스터 가이드 [2편: 작업 구조와 에이전틱 워크플로우]',
  seo_title: 'Claude 마스터 가이드 2편 - 4대 작업 아키텍처와 Agentic Workflow',
  seo_description: 'Claude 4대 작업 아키텍처, Agentic Workflow 대화형 챗봇 비교, 컨텍스트 윈도우 낭비 방지 3대 습관을 배웁니다.',
  excerpt: 'Claude 4대 작업 아키텍처, Agentic Workflow 설계 및 컨텍스트 윈도우 컴팩트 관리 가이드입니다.',
  body_md: part2Md
};

const lesson37 = {
  order_index: 37,
  slug: 'ch37-claude-master-guide-part3-cowork-and-claude-code-playbook',
  title: 'Claude 마스터 가이드 [3편: Cowork와 Claude Code 실전 플레이북]',
  seo_title: 'Claude 마스터 가이드 3편 - 비개발자 Cowork & 개발자 CLI 터미널 플레이북',
  seo_description: '비개발자를 위한 Claude Cowork 4단계 파이프라인과 개발자를 위한 Claude Code CLI 터미널 실전 플레이북을 배웁니다.',
  excerpt: 'Cowork 비주얼 4단계 가공 파이프라인과 Claude Code CLI 자가 치유 터미널 구동 실전 가이드입니다.',
  body_md: part3Md
};

const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

const sqlContent = `
-- Lesson 35 (Part 1)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson35.slug)}', '${escapeSql(lesson35.title)}', '${escapeSql(lesson35.excerpt)}', '${escapeSql(part1Md)}', '${escapeSql(marked.parse(part1Md))}', 'published', '${escapeSql(lesson35.seo_title)}', '${escapeSql(lesson35.seo_description)}', ${lesson35.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 36 (Part 2)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson36.slug)}', '${escapeSql(lesson36.title)}', '${escapeSql(lesson36.excerpt)}', '${escapeSql(part2Md)}', '${escapeSql(marked.parse(part2Md))}', 'published', '${escapeSql(lesson36.seo_title)}', '${escapeSql(lesson36.seo_description)}', ${lesson36.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 37 (Part 3)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson37.slug)}', '${escapeSql(lesson37.title)}', '${escapeSql(lesson37.excerpt)}', '${escapeSql(part3Md)}', '${escapeSql(marked.parse(part3Md))}', 'published', '${escapeSql(lesson37.seo_title)}', '${escapeSql(lesson37.seo_description)}', ${lesson37.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;
`;

fs.writeFileSync('scratch/seed_claude_master_part1_2_3.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_claude_master_part1_2_3.sql with 3rd ENHANCED LENGTH!');
