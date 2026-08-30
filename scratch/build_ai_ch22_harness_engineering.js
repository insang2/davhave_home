import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Harness Engineering 완전 정복 PDF 교안 반영 AI 22번째 메가 레슨 스크립트 작성 ===');

const harnessMd = `
Mitchell Hashimoto(HashiCorp 창시자)가 정립한 **\`Agent = Model + Harness\`** 원론부터 하네스 엔지니어링의 **4대 기둥(Constrain, Inform, Verify, Correct)**, \`AGENTS.md\` 실전 설계 패턴, Eval 주도 개발(EDD), 그리고 비용을 1/5로 줄이면서 에이전트 성공률을 10배 높이는 실전 방법론에 이르기까지 전 과정을 커버하는 최고급 바이블 교안입니다.

---

## 1. 프롤로그: 왜 하네스 엔지니어링(Harness Engineering)인가?

2026년 AI 소프트웨어 개발 트렌드는 단순 프롬프트 입력이나 바이브 코딩(Vibe Coding)을 넘어 **하네스 엔지니어링 (Harness Engineering)**으로 완전히 전환되었습니다.

기존 프롬프트 엔지니어링이 "LLM에게 말을 잘하는 법"에 집중했다면, 하네스 엔지니어링은 **"AI 에이전트가 완벽하게 일할 수 있는 오케스트레이션 환경 전체를 설계하는 기술"**을 의미합니다.

### 💡 핵심 공식: \`Agent = Model + Harness\`
- **Model (두뇌)**: Claude 3.7 / Sonnet 4.6, GPT-4.5 등의 언어 모델
- **Harness (마구 / 장구)**: 모델이 안전하고 정확하게 작업하도록 돕는 모든 도구, 규약, 검증 파이프라인, 컨텍스트 및 샌드박스 환경

> **비용 80% 절감 효과**: 하네스 없이 Opus 4.6을 사용하는 것보다, 하네스를 완벽하게 얹은 Sonnet 4.6을 사용하는 쪽이 작업 결과물의 정확도가 훨씬 높으며 비용은 1/5 수준으로 줄어듭니다.

---

## 2. 하네스 엔지니어링의 4대 기둥 (The 4 Pillars)

하네스 엔지니어링은 **Constrain**, **Inform**, **Verify**, **Correct**의 4가지 축으로 구성됩니다.

\`\`\`
       ┌─────────────────────────────────────────┐
       │      Agent = Model + Harness            │
       └────────────────────┬────────────────────┘
                            │
         ┌──────────┬───────┴───────┬──────────┐
         ▼          ▼               ▼          ▼
    Constrain     Inform          Verify     Correct
    (제한하기)   (알려주기)      (검증하기)  (수정하기)
\`\`\`

### 1) Constrain (제한하는 기술)
AI 에이전트의 탈옥, 엉뚱한 디렉토리 수정, 루프 폭주를 방지하는 억제 메커니즘입니다.
- **도구 권한 격리**: 파괴적인 셸 명령어(\`rm -rf\`, \`git push --force\`) 실행 제한
- **샌드박싱 (Sandboxing)**: 허용된 워크스페이스 외부 경로에 대한 읽기/쓰기 차단
- **수정 범위 제한**: 변경 가능한 파일 최대 개수 및 코드 서브셋 제한

### 2) Inform (알려주는 기술)
AI에게 프로젝트의 아키텍처, 컨벤션, 의존성 관계를 낭비 없이 정확히 주입하는 기술입니다.
- **\`AGENTS.md\` 작성**: 에이전트 전용 가이드 문서 배치 (인간용 README와 구분)
- **컨텍스트 프로젝션 맵 (Projection Map)**: 관련 파일 트리 및 최신 API 스키마 요약 주입
- **상태 및 인스펙션 제공**: 현재 런타임 환경, DB 상태, 환경변수 전달

### 3) Verify (검증하는 기술)
AI가 수정한 코드가 실제로 동작하는지 릴레이 방식으로 판별하는 자동화 검증 체계입니다.
- **자동화 빌드 & 타입 체크**: \`tsc\`, \`cargo check\` 등 빌드 에러 즉시 감지
- **단위/통합 테스트 구동**: \`pytest\`, \`npm test\` 실행 후 결과 스냅샷 수집
- **런타임 린트 & 포맷 검사**: 스타일 가이드 위반 여부 자동 스캐닝

### 4) Correct (수정하는 기술)
검증 실패 시 에러 트레이스백을 AI에게 재입력하여 스스로 버그를 바로잡게 하는 자가 치유(Self-Correction) 메커니즘입니다.
- **에러 피드백 루프 (Feedback Loop)**: 콘솔 에러 로그 및 스택 트레이스 자동 재주입
- **자동 롤백 (Rollback)**: 연속 N회 검증 실패 시 \`git checkout\`으로 원복
- **대안 전략 전환 (Fallback)**: 동일 접근법 실패 시 다른 알고리즘이나 서브 에이전트로 전환

---

## 3. 실전 하네스 설계: AGENTS.md 작성 표준

루트 디렉토리에 위치하는 \`AGENTS.md\`는 AI 에이전트가 프로젝트에 진입할 때 가장 먼저 읽는 최우선 가이드 문서입니다.

### 📋 완벽한 \`AGENTS.md\` 템플릿 구조

\`\`\`markdown
# AGENTS.md - Project Automation & Engineering Rules

## 1. Project Context & Stack
- **Project**: DAVHAVE Education Platform
- **Stack**: Cloudflare Workers, D1 Database, HTML/Vanilla CSS, JavaScript (ES2024)
- **Architecture**: Edge-rendered serverless SPA / MPA hybrid

## 2. Mandatory Rules & Boundaries (Constrain)
- DO NOT use external CSS frameworks like TailwindCSS unless specified.
- DO NOT introduce heavy dependencies without checking package.json first.
- DO NOT modify core routing logic in src/worker.js without reading API specs.

## 3. Verification Commands (Verify)
- **Build Check**: \`npm run build\` or \`npx wrangler deploy --dry-run\`
- **Syntax Check**: \`node --check src/worker.js\`
- **Database Audit**: \`npx wrangler d1 execute davhave-content --local --command "SELECT count(*) FROM posts;"\`

## 4. Coding Standards & Conventions (Inform)
- Use standard GitHub markdown links with file:// scheme for file citations.
- Prepend Korean comments for algorithm logic.
- Enforce strict quantitative criteria (e.g. minimum 3,000 characters per lesson).

## 5. Self-Correction Protocol (Correct)
- If a build error occurs, read the log first using command outputs.
- DO NOT swallow exceptions or wrap broken calls in empty try/catch.
\`\`\`

---

## 4. 5가지 에이전트 도구 설계 패턴 (Tool Design Patterns)

| 패턴명 | 핵심 설명 | 실전 적용 예시 |
| :--- | :--- | :--- |
| **1. Single-purpose Tool** | 하나의 도구는 단 하나의 명확한 책무만 수행 | \`view_file\`과 \`replace_file_content\` 분리 |
| **2. Atomic Tool** | 도구 실행의 결과가 원자적(Atomic)으로 반영됨 | 중간 실패 시 파일 상태를 자동 복원 |
| **3. Clear Schema Tool** | API 인자 및 반환값이 JSON Schema로 엄격히 규정됨 | 파라미터 타입 mismatch 사전 예방 |
| **4. Error Boundary Tool** | 에러 발생 시 부모 가상환경을 죽이지 않고 디버그 로그 반환 | 명령어 실패 시 Error Code와 stderr 캡처 |
| **5. Safe Re-try Tool** | 동일 도구 재시도 시 충돌 방지 및 멱등성(Idempotency) 보장 | SQL \`ON CONFLICT DO UPDATE\` 구문 |

---

## 5. 주요 플랫폼별 하네스 구현체 비교

| 플랫폼 | 주요 하네스 특징 및 구성요소 | 주요 적용 기술 |
| :--- | :--- | :--- |
| **Claude Code** | CLI 샌드박싱, Subagent 분라, OAuth Keychain 보안, Doctor 진단 | Shell Isolation, Prompt Caching, MCP |
| **Cursor** | \`.cursorrules\`, 인라인 Diff 하네스, Fast Indexing RAG | Code Graph, Vector Search |
| **Devin** | 가상 OS 샌드박스, 브라우저/셸 자동화 통합 제어 하네스 | Headless Browser, Linux Container |
| **OpenAI Codex** | 코드 샌드박스, 에이전틱 리프레이징 및 실행 인터프리터 | Python Execution Environment |

---

## 6. Eval 주도 개발 (EDD: Eval-Driven Development)

하네스의 성능을 객관적으로 측정하기 위해 **Eval (Evaluation)** 벤치마크 파이프라인을 구축해야 합니다.

### EDD 4단계 주기
1. **Define Task Benchmarks**: 에이전트가 해결해야 할 20~50개의 실전 태스크 정의
2. **Run Harness Assessment**: 작성한 하네스 환경에서 에이전트 자동 수행
3. **Measure Pass Rate**: 빌드 성공률, 테스트 통과율, 토큰 소비량 집계
4. **Refine Harness Rules**: 에러율이 높은 항목의 \`AGENTS.md\` 지침 및 도구 스키마 보강

---

## 7. 실패하는 하네스의 7가지 징후와 해결책

1. **Over-constraining (과도한 제약)**: 너무 빽빽한 금지 규정으로 에이전트가 자율적으로 문제를 풀지 못함 ➔ *자율성 부여 범위 재설정*
2. **Context Overload (컨텍스트 과부하)**: 불필요한 전체 코드베이스를 프롬프트에 주입하여 토큰 낭비 및 성능 저하 ➔ *프로젝션 맵 & 핑거프린트 도입*
3. **Test Swallowing (에러 삼킴)**: 예외 발생 시 빈 배열이나 OK 결과를 반환하여 디버깅 불가 ➔ *명시적 stderr 파이프 전달*
4. **Missing Verification Loop (검증 없는 작성)**: 코드 수정 후 빌드/테스트를 실행하지 않음 ➔ *강제 Verify 라운드 추가*
5. **Vague Tool Schemas (모호한 도구 규격)**: 인자 설명이 부실하여 에이전트가 인자 형식을 오해 ➔ *JSON Schema description 보강*
6. **No Rollback Capability (롤백 불가)**: 잘못된 수정이 계속 누적되어 코드베이스 오염 ➔ *Git Stash/Reset 하네스 릴레이*
7. **Ignoring Rate Limits & Costs (비용 방치)**: 무한 루프 탐색으로 API 비용 폭발 ➔ *최대 반복 횟수(Max Iterations) 제약 설정*
`;

const lesson22 = {
  order_index: 22,
  slug: 'ch22-harness-engineering-complete-guide',
  title: '22. AI 에이전트 성능을 10배 올리는 하네스 엔지니어링(Harness Engineering) 완벽 가이드',
  seo_title: '하네스 엔지니어링 완벽 가이드 - Agent = Model + Harness, AGENTS.md 및 4대 기둥',
  seo_description: 'Mitchell Hashimoto의 Agent = Model + Harness 원론과 하네스 엔지니어링 4대 기둥(Constrain, Inform, Verify, Correct), AGENTS.md 작성법, 비용 80% 절감 실전 워크플로우를 배웁니다.',
  excerpt: 'Mitchell Hashimoto의 Agent = Model + Harness 원론부터 4대 기둥(Constrain, Inform, Verify, Correct), AGENTS.md 설계법, Eval 주도 개발까지 AI 에이전트 하네스 엔지니어링의 모든 것을 다룹니다.',
  body_md: harnessMd
};

// Generate SQL script to append lesson 22 into posts
const content_html = marked.parse(harnessMd);
const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

const sqlContent = `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  '${escapeSql(lesson22.slug)}',
  '${escapeSql(lesson22.title)}',
  '${escapeSql(lesson22.excerpt)}',
  '${escapeSql(harnessMd)}',
  '${escapeSql(content_html)}',
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
`;

fs.writeFileSync('scratch/seed_ai_ch22_harness_engineering.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_ai_ch22_harness_engineering.sql!');
