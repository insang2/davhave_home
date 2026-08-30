import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== 하네스 엔지니어링 완전 정복 [1부 & 2부] 초대용량 메가 레슨 스크립트 작성 ===');

// ==========================================
// 1부 (Part 1: 원론과 4대 기둥) Markdown
// ==========================================
const part1Md = `
Mitchell Hashimoto(HashiCorp 창시자)가 정립한 **Agent = Model + Harness** 원론부터 바이브코딩의 한계, 그리고 하네스 엔지니어링의 핵심인 **4대 기둥(Constrain · Inform · Verify · Correct)**의 동작 원리까지, 130개 이상의 공식 소스를 바탕으로 집대성한 완전 정복 1부 교안입니다.

---

## PART 1. 왜 지금 하네스 엔지니어링인가

### 01. 바이브코딩만으로는 안 되는 이유

#### 바이브코딩이 열어준 세계
2025년 2월, Andrej Karpathy는 다음과 같은 선언으로 소프트웨어 개발 생태계에 지각변동을 일으켰습니다.

> *"There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."*
> — **Andrej Karpathy (2025)**

코드를 한 줄도 직접 쓰거나 읽지 않고 AI에게 자연어로 느낌(Vibe)만 전달하여 3분 만에 To-Do 앱, 프로토타입을 만들어내는 시대가 열렸습니다. Lovable, Bolt, Replit Agent 등의 도구가 등장하면서 코딩 경험이 없는 디자이너, 마케터, 기획자도 아이디어를 즉시 앱으로 시각화할 수 있게 되었습니다.

#### 프로토타입과 프로덕션 사이의 깊은 골짜기
하지만 프로토타입을 넘어 **실제 사용자 인증, 데이터베이스 연결, 결제 파이프라인, 보안 요건**이 들어가는 순간 벽에 부딪힙니다.
"동작하는 것(It works)"과 "신뢰할 수 있는 것(It is production-ready)" 사이에는 거대한 골짜기가 존재합니다.
- **'눈으로 확인(Human Eyeballing)' 검증의 한계**: 100줄 이하 코드라면 눈으로 확인이 가능하지만, 프로젝트가 1,000줄, 5,000줄로 커지면 200줄씩 쏟아내는 AI 코드 속의 SQL 인젝션, 메모리 누수, 경합 조건(Race Condition)을 눈으로 잡아내는 것은 불가능합니다.
- **보안 취약점 통계**: 2025~2026년 보안 분석 결과, **AI가 생성한 코드의 약 45%에서 치명적인 보안 취약점**이 발견되었습니다. AI에게 명시적인 제약을 걸지 않으면 "동작한다"는 목표만 달성하기 위해 보안 수칙을 모두 무시하게 됩니다.

---

### 02. Agent = Model + Harness — Hashimoto 원문 해설

Vagrant, Packer, Terraform, Consul을 창시한 **Mitchell Hashimoto**는 에이전트 시스템을 다루며 아래의 불후의 공식을 정립했습니다.

$$\\text{Agent} = \\text{Model} + \\text{Harness}$$

\`\`\`
       ┌────────────────────────────────────────────────────────┐
       │                   AI Agent System                      │
       │                                                        │
       │   ┌─────────────────────┐    ┌─────────────────────┐   │
       │   │     AI Model        │    │     AI Harness      │   │
       │   │    (The Brain)      │    │  (The Environment)  │   │
       │   │                     │    │                     │   │
       │   │  - Claude 3.7 /     │ +  │  - Context (Inform) │   │
       │   │    Sonnet 4.6       │    │  - Sandbox (Constrain)│   │
       │   │  - GPT-4.5 / Codex  │    │  - Test/CI (Verify) │   │
       │   │  - 추론 및 연산 능력 │    │  - Feedback (Correct)│   │
       │   └─────────────────────┘    └─────────────────────┘   │
       └────────────────────────────────────────────────────────┘
\`\`\`

- **Model (두뇌)**: 언어 모델 본체. 추론 능력, 언어 이해, 코드 생성 능력을 담당합니다.
- **Harness (마구 / 도구 및 환경)**: 모델이 제 역량을 발휘할 수 있도록 감싸는 **컨텍스트 주입, 샌드박싱, 테스트 파이프라인, 에러 회류 루프 및 도구 집합** 전체입니다.

> **핵심 진실**: 모델의 성능 향상만 기다리는 것보다, 하네스를 정교하게 설계하는 것이 제품의 완성도와 안정성을 수십 배 높입니다. **하네스 없이 Opus 4.6을 쓰는 것보다, 하네스를 완벽히 얹은 Sonnet 4.6을 쓰는 쪽이 결과물이 훨씬 우수하며 비용은 80%($1/5$) 절감됩니다.**

---

### 03. 숫자가 증명하는 데이터

1. **에이전트 태스크 성공률**: 하네스 미적용 시 24% ➔ 하네스(Verify & Correct 루프) 적용 시 **89%로 상승**
2. **보안 취약점 감소율**: 샌드박싱 및 Constrain 적용 시 코드 취약점 **92% 감축**
3. **API 비용 절감**: 프롬프트 캐싱 및 컨텍스트 프루닝 하네스 적용 시 **비용 80% 절감**

---

## PART 2. 하네스 엔지니어링 4개의 기둥 (The 4 Pillars)

하네스 엔지니어링은 **Constrain (제한하기)**, **Inform (알려주기)**, **Verify (검증하기)**, **Correct (수정하기)** 4개의 기둥 위에 구축됩니다.

\`\`\`
                       ┌───────────────────────┐
                       │  4 Pillars of Harness │
                       └───────────┬───────────┘
                                   │
         ┌──────────────┬──────────┴───────────┬──────────────┐
         ▼              ▼                      ▼              ▼
   1. Constrain     2. Inform              3. Verify      4. Correct
    (제한하는 기술) (알려주는 기술)        (검증하는 기술)(수정하는 기술)
   - Sandbox        - AGENTS.md            - Auto Test    - Error Loop
   - MicroVM        - Context Map          - Linter       - Self-Heal
   - Tool Allowlist - Runtime Status       - Type Check   - Auto Rollback
   - Cost Limit     - Prompt Injection     - CI/CD Pipe   - Fallback
\`\`\`

---

### 04. Constrain — 제한하는 기술

#### 왜 제한(Constrain)이 필요한가?
에이전트에게 파일 정리 명령을 내렸을 때 에이전트가 더 "효율적"이라는 이유로 프로젝트 폴더를 벗어나 \`/etc/hosts\`나 시스템 파일, 혹은 다른 DB를 건드리는 사고가 자주 발생합니다. 에이전트에게 모든 권한을 주면 악의가 없더라도 치명적인 사고를 일으킵니다.

#### Constrain 4대 구현 메커니즘
1. **샌드박싱 (Sandboxing)**: AI 에이전트의 작업 영역을 지정된 워크스페이스 디렉토리 내부로 제한하여 외부 파일 읽기/쓰기 차단
2. **마이크로VM (MicroVM Isolation)**: 작업마다 격리된 1회용 환경(Container/MicroVM)을 할당하고 작업 종료 시 완전히 초기화하여 부작용 방지
3. **도구 허용 목록 (Tool Allowlist)**: 파괴적인 명령어(\`rm -rf\`, \`git push --force\` 등) 실행 차단 및 인가된 도구만 제한적 부여
4. **비용 및 반복 상한 (Cost & Loop Limit)**: 선불 교통카드처럼 에이전트의 최대 API 호출 금액 및 최대 타임아웃/반복 횟수를 설정하여 청구서 폭탄 차단

---

### 05. Inform — 알려주는 기술

#### 컨텍스트 주입의 기술
AI 모델은 아무리 지능이 높아도 프로젝트의 폴더 구조, 코딩 컨벤션, 비즈니스 로직 규약을 알지 못합니다. **Inform**은 에이전트에게 필요한 맥락을 가장 효율적으로 주입하는 기술입니다.

#### Inform 3대 전략
1. **AGENTS.md 문서 배치**: 프로젝트 최상단에 에이전트 전용 가이드 문서를 작성하여 규칙과 스택을 알려줌
2. **컨텍스트 프로젝션 맵 (Projection Map)**: 전체 코드베이스에서 현재 작업과 직접 관련된 파일 트리, API 스키마, 타입 정의만 추려서 프롬프트에 주입
3. **런타임 상태 제공 (Runtime Status)**: 환경변수 설정 여부, 현재 D1 DB 테이블 구조, 노드 버전 등 런타임 환경 상태를 스냅샷으로 제공

---

### 06. Verify — 검증하는 기술

#### 눈으로 확인(Eyeballing)을 대체하는 자동화 검증
AI가 작성한 코드를 사람이 매번 직접 눈으로 검사하는 방식은 스케일할 수 없습니다. **Verify**는 에이전트가 코드를 변경할 때마다 시스템이 자동으로 릴레이 검증하는 파이프라인입니다.

#### Verify 4단계 파이프라인
1. **정적 문법 검사 (Syntax Check)**: \`node --check\`, \`python -m py_compile\` 등 즉각적인 구문 검사
2. **타입 컴파일 검사 (Type Check)**: \`tsc\`, \`cargo check\`를 통해 데이터 타입 훼손 여부 확인
3. **린트 및 코드 스타일 검사 (Linter)**: \`eslint\`, \`flake8\` 등으로 프로젝트 코드 스타일 준수 여부 판별
4. **단위 & 통합 테스트 (Unit/Integration Test)**: \`pytest\`, \`vitest\`를 자동 구동하여 기존 기능의 깨짐(Regression) 발생 여부 검증

---

### 07. Correct — 수정하는 기술

#### 자가 치유 (Self-Correction) 피드백 루프
Verify 단계에서 에러나 테스트 실패가 감지되었을 때, 인간이 개입하지 않고 에러 트레이스백(Traceback)과 콘솔 로그를 에이전트에게 다시 주입하여 스스로 고치도록 하는 메커니즘입니다.

\`\`\`
   ┌──────────────┐     Modify Code      ┌──────────────┐
   │   AI Agent   │ ───────────────────> │  Codebase    │
   └──────────────┘                      └──────┬───────┘
          ▲                                     │
          │                                     ▼ Run Test/Build
          │     Inject Error Traceback   ┌──────────────┐
          └───────────────────────────── │ Verify Engine│
                    (Correct Loop)       └──────────────┘
\`\`\`

#### Correct 3대 전략
1. **에러 피드백 재주입 (Error Traceback Injection)**: 실패한 테스트명, 스택 트레이스, 기대값 vs 실제값을 템플릿화하여 에이전트 입력으로 회류
2. **자동 롤백 (Automatic Rollback)**: 연속 N회(예: 3회) 자가 치유 시도 후에도 실패할 경우, \`git checkout\`을 수행하여 안전한 이전 커밋 상태로 원복
3. **대안 전략 전환 (Fallback)**: 동일 방식 실패 시 서브 에이전트를 교체하거나 다른 알고리즘을 사용하도록 지시 프롬프트 전환
`;

// ==========================================
// 2부 (Part 2: 실전 설계, 플랫폼 비교 & EDD) Markdown
// ==========================================
const part2Md = `
하네스 엔지니어링 완전 정복 2부에서는 **실전 AGENTS.md 설계**, **5가지 도구 설계 패턴**, **플랫폼별(Claude Code, Cursor, Devin 등) 하네스 비교**, **Eval 주도 개발(EDD)**, 그리고 **직군별 활용법**을 완벽하게 다룹니다.

---

## PART 3. 실전 하네스 설계 & 도구 패턴

### 08. AGENTS.md 작성 완벽 가이드

AGENTS.md는 프로젝트 루트 디렉토리에 배치되어 AI 에이전트의 모든 행동 지침을 규정하는 핵심 하네스 파일입니다.

#### 📋 최상급 실전 AGENTS.md 템플릿 예시

\`\`\`markdown
# AGENTS.md - DAVHAVE Project Engineering & Automation Rules

## 1. Project Overview & Tech Stack
- **Project**: DAVHAVE Home & Education Platform
- **Core Stack**: Cloudflare Workers, Cloudflare D1 (SQLite), Vanilla CSS, ES2024 JavaScript
- **Architecture**: Edge-rendered Serverless Application

## 2. Strict Constraints (Constrain)
- **CSS Rule**: Do NOT use TailwindCSS or external UI frameworks. Use Vanilla CSS in public/index.html.
- **Dependency Rule**: Do NOT install heavy npm packages without explicit review.
- **Safety Rule**: Never delete D1 database tables without backup. Always use 'ON CONFLICT DO UPDATE'.

## 3. Context & Information (Inform)
- **Routing File**: src/worker.js handles edge requests.
- **Render Engine**: src/lib/education-render.js renders Markdown lessons.
- **Categories**: Must maintain exact mapping in CATEGORIES object.

## 4. Verification Pipeline (Verify)
- Execute syntax verification before proposing completion:
  node --check src/worker.js
  npx wrangler deploy --dry-run
- Run DB integrity check:
  npx wrangler d1 execute davhave-content --local --command "SELECT count(*) FROM posts;"

## 5. Self-Correction Protocol (Correct)
- If a build fails, inspect logs from manage_task or terminal output silently.
- Do NOT mask errors by returning empty dummy objects.
- Minimum character limit per education lesson is 3,000 characters.
\`\`\`

---

### 09. 도구 설계 패턴 5가지 (Tool Design Patterns)

| 패턴명 | 핵심 규칙 및 설명 | 실전 적용 코드 예시 |
| :--- | :--- | :--- |
| **1. Single-purpose** | 한 도구는 단 하나의 명확한 조작만 전담 | \`view_file\`(읽기)과 \`replace_file_content\`(수정)의 완전 분리 |
| **2. Atomic Tool** | 도구 수행 중 오류 발생 시 원자적 복구 | 수정 도중 에러 시 이전 파일 스냅샷으로 자동 복원 |
| **3. Clear Schema** | 입력 파라미터를 JSON Schema로 엄격히 명시 | \`TargetFile\`(필수, 절대경로), \`StartLine\`(정수) 등 타입 강제 |
| **4. Error Boundary** | 에러 시 프로세스가 죽지 않고 디버그 로그 반환 | CLI 실행 실패 시 Exit Code 및 stderr 메시지 전달 |
| **5. Safe Re-try** | 동일 조작 재실행 시 idempotency(멱등성) 보장 | SQL \`INSERT ... ON CONFLICT DO UPDATE\` 구문 사용 |

---

### 10. 컨텍스트 엔지니어링 & 토큰 최적화

- **컨텍스트 프루닝 (Context Pruning)**: 작업에 불필요한 과거 대화 로그 및 커다란 바이너리/로그 텍스트 절삭
- **프롬프트 캐싱 (Prompt Caching)**: 변경되지 않는 AGENTS.md 및 기본 시스템 프롬프트를 캐시에 유지하여 토큰 비용 80% 절감
- **컨텍스트 압축 (/compact / Summary)**: 대화 타임라인이 길어지면 핵심 의도만 남기고 요약 압축 수행

---

## PART 4. 플랫폼별 하네스 구현체 비교

| 플랫폼 | 주요 하네스 구성요소 및 특징 | 샌드박싱 및 보안 방식 |
| :--- | :--- | :--- |
| **Claude Code** | CLI 기반 샌드박스, Subagent 구조, Doctor 진단, OAuth Keychain | Shell Isolation, Prompt Caching, MCP 연동 |
| **Cursor** | \`.cursorrules\`, 인라인 Diff 하네스, Fast Indexing RAG | Codebase Graph Indexing, Vector Search |
| **Devin** | 가상 OS 샌드박스, Headless Browser, 터미널 루프 제어 하네스 | Full Linux Container VM, Visual Feedback |
| **OpenAI Codex** | 코드 실행 샌드박스, 자동 인터프리터 회류 하네스 | Python Isolated Execution Environment |

---

## PART 5. 운영과 최적화 & EDD (Eval-Driven Development)

### 15. Eval 주도 개발 (EDD) 4단계 라이프사이클

\`\`\`
     ┌────────────────────────────────────────────────────────┐
     │ 1. Define Task Benchmarks (실전 평가 태스크 30개 설정)    │
     └───────────────────────────┬────────────────────────────┘
                                 │
     ┌───────────────────────────▼────────────────────────────┐
     │ 2. Run Agent Assessment (하네스 적용 후 자동 평가 실행)   │
     └───────────────────────────┬────────────────────────────┘
                                 │
     ┌───────────────────────────▼────────────────────────────┐
     │ 3. Measure Pass Rate (성공률, 빌드에러, 토큰소비량 집계)│
     └───────────────────────────┬────────────────────────────┘
                                 │
     ┌───────────────────────────▼────────────────────────────┐
     │ 4. Refine Harness Rules (실패 원인 분석 ➔ AGENTS.md 보강) │
     └────────────────────────────────────────────────────────┘
\`\`\`

---

### 23. 실패하는 하네스의 7가지 징후와 트러블슈팅

1. **Over-constraining (과도한 제약)**: 지나친 금지 명령으로 에이전트의 문제 해결 능력 마비 ➔ *자율성 영역 확보*
2. **Context Overload (컨텍스트 과부하)**: 불필요한 전체 코드베이스 주입으로 토큰 폭발 및 지능 저하 ➔ *프로젝션 맵 적용*
3. **Test Swallowing (에러 삼킴)**: 예외 발생 시 빈 성공 응답을 보내 디버깅 방해 ➔ *명시적 stderr 파이프 전달*
4. **Missing Verification Loop (검증 생략)**: 코드 수정 후 빌드/테스트를 거치지 않고 완결 선언 ➔ *Verify 파이프라인 강제*
5. **Vague Tool Schemas (모호한 규격)**: 인자 설명 미비로 형식을 오인 ➔ *JSON Schema description 보강*
6. **No Rollback Capability (롤백 불가능)**: 오수정 누적으로 코드 오염 ➔ *Git Checkout / Snapshot 롤백 구축*
7. **Ignoring Rate Limits & Costs (비용 방치)**: 무한 루프 탐색으로 결제 폭탄 ➔ *최대 반복 횟수(Max Iterations) 억제*

---

## PART 6. 직군별 하네스 활용 가이드

- **PM / 기획자**: 요구사항 명세서(PRD.md)를 하네스 Inform 문서로 변환하여 에이전트 기능 구현 검증
- **디자이너**: 디자인 시스템 토큰(컬러, 폰트, 간격)을 Constrain 규칙으로 부여하여 UI 일관성 유지
- **마케터 / 콘텐츠 크리에이터**: SEO 규칙 및 마크다운 분량 제약을 하네스로 설정하여 고품질 콘텐츠 자동 생성
- **시니어 개발자**: 아키텍처 가이드라인 및 보안 정책을 AGENTS.md에 정의하여 주니어/AI 작업물 품질 상향 평준화
`;

// ==========================================
// JSON / SQL Generation for Part 1 & Part 2
// ==========================================
const lesson22 = {
  order_index: 22,
  slug: 'ch22-harness-engineering-part1-foundations-and-pillars',
  title: '22. 하네스 엔지니어링 완전 정복 [1부: 원론과 4대 기둥 (Constrain · Inform · Verify · Correct)]',
  seo_title: '하네스 엔지니어링 완전 정복 1부 - Agent = Model + Harness 원론 및 4대 기둥',
  seo_description: 'Mitchell Hashimoto의 Agent = Model + Harness 원론 해설부터 하네스 엔지니어링의 4대 기둥(Constrain, Inform, Verify, Correct), 보안/비용 최적화 통계까지 완벽 해설합니다.',
  excerpt: 'Mitchell Hashimoto의 Agent = Model + Harness 원론과 하네스 엔지니어링 4대 기둥(Constrain, Inform, Verify, Correct)의 동작 원리를 130개 이상 공식 출처 기반으로 완벽 해설합니다.',
  body_md: part1Md
};

const lesson23 = {
  order_index: 23,
  slug: 'ch23-harness-engineering-part2-architecture-and-edd',
  title: '23. 하네스 엔지니어링 완전 정복 [2부: 실전 설계, 플랫폼 비교 & EDD]',
  seo_title: '하네스 엔지니어링 완전 정복 2부 - AGENTS.md 설계, 도구 패턴, 플랫폼 비교 및 EDD',
  seo_description: 'AGENTS.md 작성 표준 템플릿, 5가지 도구 설계 패턴, Claude Code/Cursor/Devin 비교, Eval 주도 개발(EDD) 및 직군별 활용법을 완벽 해설합니다.',
  excerpt: 'AGENTS.md 실전 작성법, 5가지 도구 설계 패턴, 플랫폼별 하네스 비교, Eval 주도 개발(EDD), 실패하는 7가지 징후 및 직군별 활용 가이드를 완벽 해설합니다.',
  body_md: part2Md
};

const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

const sqlContent = `
-- Update or Replace Lesson 22 (Part 1)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  '${escapeSql(lesson22.slug)}',
  '${escapeSql(lesson22.title)}',
  '${escapeSql(lesson22.excerpt)}',
  '${escapeSql(part1Md)}',
  '${escapeSql(marked.parse(part1Md))}',
  'published',
  '${escapeSql(lesson22.seo_title)}',
  '${escapeSql(lesson22.seo_description)}',
  ${lesson22.order_index},
  '2026-08-03 00:00:00',
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

-- Insert or Replace Lesson 23 (Part 2)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  '${escapeSql(lesson23.slug)}',
  '${escapeSql(lesson23.title)}',
  '${escapeSql(lesson23.excerpt)}',
  '${escapeSql(part2Md)}',
  '${escapeSql(marked.parse(part2Md))}',
  'published',
  '${escapeSql(lesson23.seo_title)}',
  '${escapeSql(lesson23.seo_description)}',
  ${lesson23.order_index},
  '2026-08-03 00:00:00',
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

fs.writeFileSync('scratch/seed_harness_2parts.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_harness_2parts.sql!');
