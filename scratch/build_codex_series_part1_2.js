import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Codex로 일하는 법 [1편 & 2편] 메가 레슨 작성 ===');

// ==========================================
// 1편 (Part 1: 에이전트 패러다임 전환과 작업 책임선) Markdown
// ==========================================
const part1Md = `
GPT-5 시대, OpenAI Codex를 단순한 코드 자동완성(Auto-completion Tab) 도구가 아니라 프로젝트의 실체적인 **실무형 AI 워커 (Production Worker)**로 다루기 위한 실전 가이드 1편입니다.

---

## 1. 서문: 월요일 오전 9시의 3가지 핵심 질문

전날 밤 Codex로 랜딩 페이지도 만들었고, 문구도 바꿨으며, 데모 화면도 팀 채널에 올려 칭찬을 받았습니다. 하지만 다음 날 월요일 아침이 되자 아래의 3가지 실무적 질문이 남습니다.

1. **이 결과를 어디까지 신뢰하고 배포할 수 있는가?**
2. **누가 무엇을 검토하고 어떤 승인선(Approval Line)을 거쳐야 하는가?**
3. **다음 담당자가 이 작업을 이어받으려면 프로젝트에 무엇이 문서와 코드로 남아있어야 하는가?**

Codex를 단순한 '코드 생성기'로 바라보면 이 질문들은 계속 뒤로 밀립니다. 데모가 예쁘게 잘 나왔는지만 확인하고 끝나기 때문입니다. 하지만 Codex를 **실무형 워커**로 정의하는 순간 작업의 단위와 책임의 위치가 통째로 바뀝니다.

---

## 2. 자동완성 다음에 온 변화 & 패러다임 전환

### 1) 바이브코딩(Vibe Coding)의 한계와 실무 문법
2025년 Andrej Karpathy가 주창한 바이브코딩은 0에서 1로 가는 프로토타입 단계에서는 압도적입니다. 코드를 읽지도 않고 느낌만 전달해 3분 만에 앱을 띄우는 경험은 코딩의 민주화를 가져왔습니다.

그러나 그 1을 10으로, 100으로 키워 프로덕션 서비스로 올리는 순간 '눈으로 확인(Human Eyeballing)' 방식은 무너집니다. 200줄씩 쏟아지는 코드 속의 보안 취약점, SQL 인젝션, 메모리 누수는 눈으로 잡아낼 수 없습니다.

### 2) 초안은 저렴해졌다. 그렇다면 무엇이 비싸졌는가?
AI 시대에 코드 초안 작성의 비용은 0원에 수렴하고 있습니다. 역설적으로 다음 4가지 엔지니어링 역량이 가장 귀하고 비싼 자산이 되었습니다.

\`\`\`
       ┌────────────────────────────────────────────────────────┐
       │             Core Engineering Capabilities              │
       └───────────────────────────┬────────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
  1. Scope Trimming        2. Verification First     3. Approval Lines
  - 작업 범위의 정밀 절삭  - 테스트/검증 선제 구축   - 명확한 인간 승인선
\`\`\`

1. **범위를 자르는 판단 (Scope Trimming)**: 에이전트에게 한 번에 너무 큰 짐을 지우지 않고 작업 단위를 정밀하게 자르는 능력
2. **검증을 먼저 세우는 습관 (Verification First)**: 생성보다 빠른 자동화 테스트 및 린트 파이프라인 구축
3. **승인선을 그리는 운영 감각 (Approval Lines)**: AI가 자동 실행할 수 있는 영역과 인간의 승인이 필요한 영역 구분
4. **개인 요령을 팀 시스템으로 바꾸는 능력**: \`AGENTS.md\`를 통해 요령을 공용 규칙으로 자산화

---

## 3. 에이전트 실무를 위한 4대 프로젝트 축 (Four Project Axes)

Codex의 원리를 다각도로 검증하기 위해 본 시리즈는 4개의 실전 프로젝트 축을 기반으로 진행됩니다.

| 프로젝트 축 | 대표 성격 및 분야 | 주요 다루는 엔지니어링 과제 |
| :--- | :--- | :--- |
| **1. StudyFlow** | 사용자 맞춤형 학습 플랫폼 (제품 축) | 풀스택 서비스 구축, DB 연동, 인증 및 UI 흐름 |
| **2. OpsDesk** | CS 및 운영팀 장애 공지 시스템 (운영 축) | 인시던트 대응, 웹훅 연동, 시스템 자동화 |
| **3. GrowthLoop** | 데이터 분석 및 A/B 테스트 리포트 (그로스 축) | 데이터 파이프라인, 재현 가능한 스크립트, 리포트 |
| **4. SoloLaunch** | 1인 개발자의 micro-SaaS (출시 축) | 빠른 랜딩 페이지, 결제 연동, Cloudflare Edge 배포 |

---

## 4. 감(Vibe)에서 엔지니어링으로의 승격 기준

감으로 시작한 작고 가벼운 작업이 신뢰할 수 있는 엔지니어링으로 승격되는 순간은 다음 3가지 조건이 갖춰졌을 때입니다.

### 1) 작업 계약 (Task Contract) 수립
멋지고 긴 프롬프트 문장이 아닌, **입력 조건, 변경 범위, 완료 조건(Definition of Done)**이 명확히 규정된 계약 형태로 지시하는 것입니다.

### 2) 빠른 생성보다 빠른 검증 (Fast Verification)
AI가 작성한 코드를 맹목적으로 믿는 대신, \`node --check\`, \`tsc\`, \`pytest\` 등의 자동 검증 명령어가 실행되어 즉각적인 통과 여부를 리포트해야 합니다.

### 3) 재현 가능한 흔적 (Reproducible Trace)
작업이 끝난 후 \`git diff\` 및 커밋 메시지, 그리고 변경 이유가 담긴 마크다운 문서가 남아 다음 동료나 미래의 내가 즉시 이어받을 수 있어야 합니다.
`;

// ==========================================
// 2편 (Part 2: 프롬프트 계약, AGENTS.md 팀 헌법과 컨텍스트) Markdown
// ==========================================
const part2Md = `
Codex 실전 활용 2편에서는 **30분 뼈대 수립**, **프롬프트 작업 계약**, **창구(Desktop/IDE/CLI/Cloud) 선택 기준**, **대형 저장소 길찾기**, 그리고 팀의 헌법이 되는 **AGENTS.md 실전 설계**를 다룹니다.

---

## 1. 30분 안에 첫 제품 뼈대(Scaffold)를 세우는 법

새로운 아이디어를 코드로 옮길 때 처음부터 모든 기능을 완성하려 하면 에이전트와 인간 모두 지치게 됩니다.

### 30분 뼈대 구축 4단계 순서
1. **최소 구동 환경 준비**: 빈 폴더 생성 및 기본 설정 파일(\`package.json\` 또는 \`wrangler.jsonc\`) 준비
2. **완료 조건 한 줄 정의**: "Express/Workers 서버가 \`/api/health\`에서 200 OK를 반환하고 기본 HTML을 렌더링한다."
3. **Codex 1차 스캐폴딩 지시**: 핵심 프레임워크 뼈대 코드만 요청하고 즉시 실행 검증
4. **기능 레이어 단계적 추가**: 뼈대가 통과한 후에만 데이터베이스 및 UI 컴포넌트 레이어를 순차적으로 얹기

---

## 2. 좋은 요청의 구조화: 프롬프트 작업 계약 (Task Contract)

나쁜 요청은 "예쁘고 빠른 로그인 페이지 만들어줘" 같은 모호한 자연어입니다. 좋은 요청은 아래 4개 요소를 포함한 **작업 계약서**입니다.

\`\`\`markdown
[Task Contract]
1. Goal: Express API에 JWT 기반 로그인/회원가입 라우터 추가
2. Scope & Files:
   - Modify: src/routes/auth.js, src/middleware/jwt.js
   - DO NOT Touch: src/routes/payment.js, public/index.html
3. Requirements:
   - bcrypt를 사용한 비밀번호 암호화
   - 토큰 만료 시간 24시간 설정
4. Verification:
   - npm test tests/auth.test.js 통과 필수
\`\`\`

---

## 3. 창구(Surface) 전환 마트릭스: 언제 바꿔 타야 할까?

Codex는 ChatGPT 웹, Codex Desktop App, IDE Extension (VS Code), CLI (\`codex exec\`), Cloud/GitHub 등 다양한 창구를 제공합니다.

| 작업 창구 | 주요 특징 및 추천 상황 | 권장 작업 종류 |
| :--- | :--- | :--- |
| **ChatGPT / Web** | 설치 없이 빠르게 아이디어 탐색 및 아키텍처 구상 | 초기 구상, 스키마 설계, 브레인스토밍 |
| **Codex Desktop App** | 독립된 멀티 윈도우 환경, 파일 트래킹 및 시각적 검증 | 단독 기능 구현, 스크린샷 렌더링 검증 |
| **VS Code / IDE** | 기존 개발 흐름과 통합, Inline Diff 검토 및 실시간 에디팅 | 코어 개발, 리팩터링, 대화형 디버깅 |
| **CLI (\`codex exec\`)** | 터미널 명령 줄 실행, 스크립트 연동 및 CI/CD 자동화 | 매일 실행되는 주간 루틴, CI 빌드 검증 |
| **Cloud / GitHub** | PR 기반 자동 코드 리뷰, 비동기 이슈 처리 | 팀 단위 코드 리뷰, 비동기 파이프라인 |

---

## 4. 처음 보는 저장소에서 길을 찾는 순서 (Repository Navigation)

수만 줄에 달하는 거대한 처음 보는 저장소에 투입되었을 때 Codex를 활용해 길을 찾는 3단계 탐색법입니다.

1. **Top-Down 탐색**: \`AGENTS.md\` 및 \`README.md\` 읽기 ➔ 의존성 파일(\`package.json\`, \`Cargo.toml\`) 분석으로 핵심 스택 파악
2. **Entry Point 추적**: 메인 엔트리 파일(\`src/index.js\`, \`src/worker.js\`)의 라우팅 매핑 테이블 추출 지시
3. **Execution Trace 핑거프린팅**: 특정 유저 요청이 유입되었을 때 데이터가 거치는 함수 호출 트레이스 역추적

---

## 5. AGENTS.md는 왜 팀의 헌법이 되는가?

\`AGENTS.md\`는 개발자 개인의 머릿속에만 있던 노하우와 프로젝트 제약 조건을 AI 에이전트가 이해할 수 있는 공용 규칙으로 자산화한 **팀의 헌법 문서**입니다.

### 📋 공용 AGENTS.md 5대 표준 섹션
- **1. System & Architecture**: 기술 스택 및 디렉토리 아키텍처 정의
- **2. Constrain Rules**: 절대 하지 말아야 할 파괴적 조작 및 스타일 금지 수칙
- **3. Inform & Context**: 핵심 라우터 및 데이터 모델의 위치 명세
- **4. Verification Commands**: 코드 완료 전 반드시 구동해야 할 빌드/테스트 명령어
- **5. Error Recovery**: 실패 시 로그 수집 및 롤백 절차 규정

---

## 6. 대형 작업(Long-running Task)의 계획 문서(Plan.md) 선행 패턴

작업 규모가 크고 1시간 이상 소요되는 대형 작업의 경우, 코드를 먼저 쓰지 않고 **\`Plan.md\` 계획 문서**부터 세우는 것이 실패를 예방하는 핵심입니다.

1. 에이전트에게 요구사항 분석 후 \`Plan.md\` 작성을 지시
2. 인간 엔지니어가 \`Plan.md\`의 단계별 체크리스트 검토 및 승인
3. 승인된 \`Plan.md\`의 체크리스트를 하나씩 체크하며 단계별 코드 생성 및 Verify 릴레이 수행
`;

// ==========================================
// JSON / SQL Generation for Part 1 & Part 2
// ==========================================
const lesson25 = {
  order_index: 25,
  slug: 'ch25-working-with-codex-part1-paradigm-and-responsibility',
  title: '25. Codex로 일하는 법 [1편: 에이전트 패러다임 전환과 작업 책임선]',
  seo_title: 'Codex로 일하는 법 1편 - GPT-5 시대 실무형 AI 워커 패러다임 및 책임선',
  seo_description: 'OpenAI Codex를 단순 자동완성을 넘어 실무형 AI 워커로 활용하는 엔지니어링 사고 전환, 4대 프로젝트 축, 감에서 엔지니어링으로의 승격 기준을 배웁니다.',
  excerpt: 'Codex를 단순 자동완성이 아닌 실무형 AI 워커로 활용하기 위한 엔지니어링 사고 전환, 4대 프로젝트 축, 검증과 책임선 그리기 가이드입니다.',
  body_md: part1Md
};

const lesson26 = {
  order_index: 26,
  slug: 'ch26-working-with-codex-part2-context-constitution-and-agents-md',
  title: '26. Codex로 일하는 법 [2편: 프롬프트 계약, AGENTS.md 팀 헌법과 컨텍스트]',
  seo_title: 'Codex로 일하는 법 2편 - 프롬프트 작업 계약, 창구 전환 및 AGENTS.md 팀 헌법',
  seo_description: '30분 제품 뼈대 수립, 프롬프트 작업 계약(Task Contract), Codex 창구(App/IDE/CLI/Cloud) 전환 기준, 대형 저장소 탐색 및 AGENTS.md 팀 헌법을 배웁니다.',
  excerpt: '30분 뼈대 수립, 프롬프트 작업 계약(Task Contract), Codex 창구 전환 기준, 저장소 길찾기 및 AGENTS.md 팀 헌법 작성 가이드입니다.',
  body_md: part2Md
};

const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

const sqlContent = `
-- Insert or Replace Lesson 25 (Part 1)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  '${escapeSql(lesson25.slug)}',
  '${escapeSql(lesson25.title)}',
  '${escapeSql(lesson25.excerpt)}',
  '${escapeSql(part1Md)}',
  '${escapeSql(marked.parse(part1Md))}',
  'published',
  '${escapeSql(lesson25.seo_title)}',
  '${escapeSql(lesson25.seo_description)}',
  ${lesson25.order_index},
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

-- Insert or Replace Lesson 26 (Part 2)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  '${escapeSql(lesson26.slug)}',
  '${escapeSql(lesson26.title)}',
  '${escapeSql(lesson26.excerpt)}',
  '${escapeSql(part2Md)}',
  '${escapeSql(marked.parse(part2Md))}',
  'published',
  '${escapeSql(lesson26.seo_title)}',
  '${escapeSql(lesson26.seo_description)}',
  ${lesson26.order_index},
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

fs.writeFileSync('scratch/seed_codex_series_part1_2.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_codex_series_part1_2.sql!');
