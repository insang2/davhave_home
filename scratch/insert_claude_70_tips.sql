-- Insert 4 Claude 70 Tips Master Lessons into D1 database

DELETE FROM posts WHERE slug = 'claude-code-70-tips-part1-agentic-mindset-and-basics';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Claude Code 70가지 파워 팁: 에이전틱 사고방식과 환경 설정 가이드',
  'claude-code-70-tips-part1-agentic-mindset-and-basics',
  'ai',
  'published',
  60,
  'Anthropic 해커톤 우승자 ykdojo와 DevRel Ado Kukic이 정리한 Claude Code 70가지 실전 팁 중 에이전틱 사고방식, 계획 모드 vs 욜로 모드, CLAUDE.md 및 커스텀 상태 라인 설정법을 배웁니다.',
  '## Claude Code 완전 가이드: 해커톤 우승자의 70가지 파워 팁

2025년 software 3.0 시대, Claude Code는 단순한 AI 코딩 보조 도구를 넘어 개발자의 동료로서 전체 소프트웨어 개발 라이프사이클을 주도하는 최고의 에이전트(Agent)로 자리잡았습니다.

본 시리즈는 Anthropic 해커톤 우승자 **ykdojo**의 10억 토큰 실전 노하우와 Anthropic DevRel **Ado Kukic**의 "Advent of Claude" 챌린지에서 검증된 **70가지 파워 팁과 실전 가이드**를 집대성한 정밀 튜토리얼입니다.

---

## 1. 에이전틱 개발자의 사고방식 (Part 1)

### 팁 1: 큰 문제 정복 - 분해하고 정복하라 (ykdojo #3)
AI에게 한 번에 "거대한 SNS 애플리케이션을 완성해줘"라고 요청하면 환각과 문맥 초과로 실패합니다.
- **실전 팁**: 문제를 3~5개의 독립적인 소기능(DB 모델 ➔ REST API ➔ UI 렌더링 ➔ 에러 처리) 단위로 분해한 후 단계별로 에이전트에게 지시하세요.

### 팁 2: 계획 모드 vs 욜로 모드 (Ado #18, #19)
- **계획 모드 (Plan Mode - Shift+Enter 또는 `/plan`)**: 복잡한 아키텍처나 리팩터링 시 AI가 코드를 직접 수정하기 전 작성할 작업 계획서(Markdown Plan)를 먼저 검토합니다.
- **욜로 모드 (YOLO Mode - `claude --dangerously-skip-permissions`)**: 안전한 격리 컨테이너나 신규 프로토타입 작성 시, 권한 승인 창 없이 초고속으로 작업을 수행시킵니다.

### 팁 3: 올바른 추상화 수준 선택 (ykdojo #32)
프롬프트 지시 시 너무 추상적인 문구("코드 예쁘게 다듬어줘")나 너무 지나치게 세세한 미시 지시("21번 줄에 semicolon 추가해줘")를 피하고, **목적 중심의 가이드라인**을 제공하세요.

---

## 2. 기초부터 탄탄하게 - 환경 설정과 필수 명령어 (Part 2)

### 팁 4: CLAUDE.md — AI를 위한 프로젝트 헌법 (Ado #1, #2, ykdojo #30)
프로젝트 루트에 `CLAUDE.md` 파일을 배치하여 빌드 명령어, 테스트 규칙, 코딩 컨벤션을 서술하면 Claude Code가 세션을 시작할 때마다 이 지침을 가장 먼저 숙지합니다.

```markdown
# CLAUDE.md - 프로젝트 가이드라인

## 빌드 & 테스트 명령어
- 테스트 실행: `npm test`
- 린트 체크: `npm run lint`

## 코딩 컨벤션
- Vanilla CSS 모듈 사용
- TypeScript 사용 시 any 타입 엄격 금지
```

### 팁 5: 커스텀 상태 라인 (ykdojo #0)
터미널 하단 상태 라인에 현재 사용 중인 토큰 양, Git 브랜치, 선택된 Claude 모델(Sonnet/Haiku)을 한눈에 표시하도록 설정하여 컨텍스트 초과를 사전에 예방합니다.

### 팁 6: 필수 슬래시 명령어 마스터 (Ado #4, #16, ykdojo #1)
- `/compact`: 컨텍스트 대화록 요약 압축 (토큰 소모 50% 절감)
- `/clear`: 세션 대화 완전 초기화
- `/cost`: 현재 세션에서 소비된 Anthropic API 비용 실시간 조회

---

## 💡 핵심 Claude Code 용어 사전 (Glossary)

- **Claude Code**: Anthropic이 개발한 개발자 터미널 기반의 CLI 자율형 AI 코딩 에이전트 도구.
- **CLAUDE.md**: 프로젝트의 빌드, 테스트, 아키텍처 규칙을 작성해 두는 최상위 AI 가이드 문서.
- **Plan Mode (계획 모드)**: 코드를 수정하기 전에 작업 단계 및 의존성을 사전에 청사진으로 수립받는 모드.
- **YOLO Mode**: 파일 변경 및 명령어 실행 승인 절차를 생략하고 즉시 코딩을 집행시키는 고속 모드.

---

## 핵심 체크리스트 (Summary Checklist)

- [ ] 프로젝트 루트에 `CLAUDE.md` 가이드라인 문서가 존재하는가?
- [ ] 큰 작업 전 `/plan` 명령어로 계획을 사전에 검토했는가?
- [ ] `/cost` 및 상태 라인으로 토큰 소비를 주기적으로 관찰하고 있는가?
',
  '<h2>Claude Code 완전 가이드: 해커톤 우승자의 70가지 파워 팁</h2>
<p>2025년 software 3.0 시대, Claude Code는 단순한 AI 코딩 보조 도구를 넘어 개발자의 동료로서 전체 소프트웨어 개발 라이프사이클을 주도하는 최고의 에이전트(Agent)로 자리잡았습니다.</p>
<p>본 시리즈는 Anthropic 해커톤 우승자 <strong>ykdojo</strong>의 10억 토큰 실전 노하우와 Anthropic DevRel <strong>Ado Kukic</strong>의 "Advent of Claude" 챌린지에서 검증된 <strong>70가지 파워 팁과 실전 가이드</strong>를 집대성한 정밀 튜토리얼입니다.</p>
<hr />
<h2>1. 에이전틱 개발자의 사고방식 (Part 1)</h2>
<h3>팁 1: 큰 문제 정복 - 분해하고 정복하라 (ykdojo #3)</h3>
<p>AI에게 한 번에 "거대한 SNS 애플리케이션을 완성해줘"라고 요청하면 환각과 문맥 초과로 실패합니다.</p>
<ul>
<li><strong>실전 팁</strong>: 문제를 3~5개의 독립적인 소기능(DB 모델 ➔ REST API ➔ UI 렌더링 ➔ 에러 처리) 단위로 분해한 후 단계별로 에이전트에게 지시하세요.</li>
</ul>
<h3>팁 2: 계획 모드 vs 욜로 모드 (Ado #18, #19)</h3>
<ul>
<li><strong>계획 모드 (Plan Mode - Shift+Enter 또는 <code>/plan</code>)</strong>: 복잡한 아키텍처나 리팩터링 시 AI가 코드를 직접 수정하기 전 작성할 작업 계획서(Markdown Plan)를 먼저 검토합니다.</li>
<li><strong>욜로 모드 (YOLO Mode - <code>claude --dangerously-skip-permissions</code>)</strong>: 안전한 격리 컨테이너나 신규 프로토타입 작성 시, 권한 승인 창 없이 초고속으로 작업을 수행시킵니다.</li>
</ul>
<h3>팁 3: 올바른 추상화 수준 선택 (ykdojo #32)</h3>
<p>프롬프트 지시 시 너무 추상적인 문구("코드 예쁘게 다듬어줘")나 너무 지나치게 세세한 미시 지시("21번 줄에 semicolon 추가해줘")를 피하고, <strong>목적 중심의 가이드라인</strong>을 제공하세요.</p>
<hr />
<h2>2. 기초부터 탄탄하게 - 환경 설정과 필수 명령어 (Part 2)</h2>
<h3>팁 4: CLAUDE.md — AI를 위한 프로젝트 헌법 (Ado #1, #2, ykdojo #30)</h3>
<p>프로젝트 루트에 <code>CLAUDE.md</code> 파일을 배치하여 빌드 명령어, 테스트 규칙, 코딩 컨벤션을 서술하면 Claude Code가 세션을 시작할 때마다 이 지침을 가장 먼저 숙지합니다.</p>
<pre><code class="language-markdown"># CLAUDE.md - 프로젝트 가이드라인

## 빌드 &amp; 테스트 명령어
- 테스트 실행: `npm test`
- 린트 체크: `npm run lint`

## 코딩 컨벤션
- Vanilla CSS 모듈 사용
- TypeScript 사용 시 any 타입 엄격 금지</code></pre>
<h3>팁 5: 커스텀 상태 라인 (ykdojo #0)</h3>
<p>터미널 하단 상태 라인에 현재 사용 중인 토큰 양, Git 브랜치, 선택된 Claude 모델(Sonnet/Haiku)을 한눈에 표시하도록 설정하여 컨텍스트 초과를 사전에 예방합니다.</p>
<h3>팁 6: 필수 슬래시 명령어 마스터 (Ado #4, #16, ykdojo #1)</h3>
<ul>
<li><code>/compact</code>: 컨텍스트 대화록 요약 압축 (토큰 소모 50% 절감)</li>
<li><code>/clear</code>: 세션 대화 완전 초기화</li>
<li><code>/cost</code>: 현재 세션에서 소비된 Anthropic API 비용 실시간 조회</li>
</ul>
<hr />
<h2>💡 핵심 Claude Code 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Claude Code</strong>: Anthropic이 개발한 개발자 터미널 기반의 CLI 자율형 AI 코딩 에이전트 도구.</li>
<li><strong>CLAUDE.md</strong>: 프로젝트의 빌드, 테스트, 아키텍처 규칙을 작성해 두는 최상위 AI 가이드 문서.</li>
<li><strong>Plan Mode (계획 모드)</strong>: 코드를 수정하기 전에 작업 단계 및 의존성을 사전에 청사진으로 수립받는 모드.</li>
<li><strong>YOLO Mode</strong>: 파일 변경 및 명령어 실행 승인 절차를 생략하고 즉시 코딩을 집행시키는 고속 모드.</li>
</ul>
<hr />
<h2>핵심 체크리스트 (Summary Checklist)</h2>
<ul>
<li>[ ] 프로젝트 루트에 <code>CLAUDE.md</code> 가이드라인 문서가 존재하는가?</li>
<li>[ ] 큰 작업 전 <code>/plan</code> 명령어로 계획을 사전에 검토했는가?</li>
<li>[ ] <code>/cost</code> 및 상태 라인으로 토큰 소비를 주기적으로 관찰하고 있는가?</li>
</ul>',
  'Claude Code 70가지 파워 팁 1부: 에이전틱 사고방식 & 환경 설정',
  'Anthropic 해커톤 우승자 ykdojo와 DevRel Ado Kukic이 정리한 Claude Code 70가지 실전 팁 중 에이전틱 사고방식, 계획 모드 vs 욜로 모드, CLAUDE.md 및 커스텀 상태 라인 설정법을 배웁니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'claude-code-70-tips-part2-productivity-and-context-mastery';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Claude Code 70가지 파워 팁: 생산성 극대화와 컨텍스트 지배 기술',
  'claude-code-70-tips-part2-productivity-and-context-mastery',
  'ai',
  'published',
  61,
  'Claude Code 실전 팁중 음성 코딩, 터미널 출력 추출, 선제적 컨텍스트 압축, `/context` X-Ray 기능 및 대화 복제 기술을 배웁니다.',
  '## 1. 생산성을 극대화하는 핵심 기술 (Part 3)

### 팁 7: 음성으로 코딩하기 (ykdojo #2)
키보드 타자보다 사람이 말을 하는 속도가 3배 빠릅니다. macOS 내장 음성 입력(Fn 2회)이나 Whisper 기반 음성 도구를 연동해 긴 프롬프트와 지시 사항을 음성으로 전달하세요.

### 팁 8: 터미널 출력 추출의 기술 (ykdojo #6)
빌드 에러나 테스트 실패 시 로그 전체를 복사해서 붙여넣지 말고, 터미널 리다이렉션을 활용하거나 Claude Code가 에러 로그 파일을 직접 읽게 지시하세요.

```bash
# 터미널 실행 에러 로그를 log 파일로 저장 후 Claude에게 분석 요청
npm test > test_error.log 2>&1
# Claude 프롬프트: "test_error.log 파일을 읽고 실패한 원인을 수정해줘"
```

### 팁 9: 마크다운과 Notion 활용 (ykdojo #19, #20)
노션(Notion)에 작성된 요구사항 명세서나 마크다운 문서를 Claude Code 세션에 직접 입력하여 기획서로부터 코드가 즉시 생성되도록 파이프라인을 구축하세요.

---

## 2. 컨텍스트(Context) 관리의 예술 (Part 4)

### 팁 10: 선제적 컨텍스트 압축 (ykdojo #8)
대화가 길어지면 컨텍스트 윈도우가 가득 차 추론 속도가 느려지고 비용이 증가합니다. 주요 작업 단계가 완료될 때마다 **`/compact`** 명령어로 핵심 요약만 남기세요.

### 팁 11: `/context`로 X-Ray 비전 (Ado #15)
현재 Claude Code의 기억 장치(Context)에 어떤 파일과 대화 기록이 들어있는지 확인하려면 **`/context`** 슬래시 명령어를 실행합니다. 불필요하게 포함된 거대한 파일은 제외시킬 수 있습니다.

### 팁 12: 대화 복제 및 분기 실행 (ykdojo #23)
어떤 리팩터링 방식이 최선인지 불확실할 때, 현재 세션 대화를 복제하여 A방식과 B방식을 각기 다른 터미널 탭에서 독립적으로 실험해볼 수 있습니다.

---

## 💡 핵심 Claude Code 용어 사전 (Glossary)

- **Context Compression (컨텍스트 압축)**: `/compact` 명령어를 통해 이전의 긴 대화록을 핵심 요약본으로 압축하여 토큰 공간을 확보하는 기술.
- **X-Ray / /context**: 현재 AI 에이전트의 메모리에 어떤 파일과 프롬프트가 주입되어 있는지 실시간 검사하는 명령어.
- **Session Cloning (세션 복제)**: 현재 대화 상태를 복사하여 새로운 터미널 탭에서 독립적인 분기 실험을 진행하는 워크플로우.

---

## 핵심 체크리스트 (Summary Checklist)

- [ ] 작업 완료 단락마다 `/compact`로 선제적 컨텍스트 압축을 실행했는가?
- [ ] `/context` 명령어로 메모리에 불필요한 대용량 파일이 들어있지 않은지 점검했는가?
',
  '<h2>1. 생산성을 극대화하는 핵심 기술 (Part 3)</h2>
<h3>팁 7: 음성으로 코딩하기 (ykdojo #2)</h3>
<p>키보드 타자보다 사람이 말을 하는 속도가 3배 빠릅니다. macOS 내장 음성 입력(Fn 2회)이나 Whisper 기반 음성 도구를 연동해 긴 프롬프트와 지시 사항을 음성으로 전달하세요.</p>
<h3>팁 8: 터미널 출력 추출의 기술 (ykdojo #6)</h3>
<p>빌드 에러나 테스트 실패 시 로그 전체를 복사해서 붙여넣지 말고, 터미널 리다이렉션을 활용하거나 Claude Code가 에러 로그 파일을 직접 읽게 지시하세요.</p>
<pre><code class="language-bash"># 터미널 실행 에러 로그를 log 파일로 저장 후 Claude에게 분석 요청
npm test &gt; test_error.log 2&gt;&amp;1
# Claude 프롬프트: "test_error.log 파일을 읽고 실패한 원인을 수정해줘"</code></pre>
<h3>팁 9: 마크다운과 Notion 활용 (ykdojo #19, #20)</h3>
<p>노션(Notion)에 작성된 요구사항 명세서나 마크다운 문서를 Claude Code 세션에 직접 입력하여 기획서로부터 코드가 즉시 생성되도록 파이프라인을 구축하세요.</p>
<hr />
<h2>2. 컨텍스트(Context) 관리의 예술 (Part 4)</h2>
<h3>팁 10: 선제적 컨텍스트 압축 (ykdojo #8)</h3>
<p>대화가 길어지면 컨텍스트 윈도우가 가득 차 추론 속도가 느려지고 비용이 증가합니다. 주요 작업 단계가 완료될 때마다 <strong><code>/compact</code></strong> 명령어로 핵심 요약만 남기세요.</p>
<h3>팁 11: `/context`로 X-Ray 비전 (Ado #15)</h3>
<p>현재 Claude Code의 기억 장치(Context)에 어떤 파일과 대화 기록이 들어있는지 확인하려면 <strong><code>/context</code></strong> 슬래시 명령어를 실행합니다. 불필요하게 포함된 거대한 파일은 제외시킬 수 있습니다.</p>
<h3>팁 12: 대화 복제 및 분기 실행 (ykdojo #23)</h3>
<p>어떤 리팩터링 방식이 최선인지 불확실할 때, 현재 세션 대화를 복제하여 A방식과 B방식을 각기 다른 터미널 탭에서 독립적으로 실험해볼 수 있습니다.</p>
<hr />
<h2>💡 핵심 Claude Code 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Context Compression (컨텍스트 압축)</strong>: <code>/compact</code> 명령어를 통해 이전의 긴 대화록을 핵심 요약본으로 압축하여 토큰 공간을 확보하는 기술.</li>
<li><strong>X-Ray / /context</strong>: 현재 AI 에이전트의 메모리에 어떤 파일과 프롬프트가 주입되어 있는지 실시간 검사하는 명령어.</li>
<li><strong>Session Cloning (세션 복제)</strong>: 현재 대화 상태를 복사하여 새로운 터미널 탭에서 독립적인 분기 실험을 진행하는 워크플로우.</li>
</ul>
<hr />
<h2>핵심 체크리스트 (Summary Checklist)</h2>
<ul>
<li>[ ] 작업 완료 단락마다 <code>/compact</code>로 선제적 컨텍스트 압축을 실행했는가?</li>
<li>[ ] <code>/context</code> 명령어로 메모리에 불필요한 대용량 파일이 들어있지 않은지 점검했는가?</li>
</ul>',
  'Claude Code 70가지 파워 팁 2부: 생산성 극대화 & 컨텍스트 지배',
  'Claude Code 실전 팁중 음성 코딩, 터미널 출력 추출, 선제적 컨텍스트 압축, `/context` X-Ray 기능 및 대화 복제 기술을 배웁니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'claude-code-70-tips-part3-git-workflow-mcp-hooks-agents';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Claude Code 70가지 파워 팁: Git Worktrees와 MCP·Hooks·Subagent 완전 정복',
  'claude-code-70-tips-part3-git-workflow-mcp-hooks-agents',
  'ai',
  'published',
  62,
  'Git Worktrees 병렬 브랜치 작업, 대화형 PR 리뷰, MCP 외부 도구 연동, Hooks 검증 규칙, 전문 서브에이전트 활용법을 정밀 수록합니다.',
  '## 1. Git과 GitHub 워크플로우 완전 정복 (Part 5)

### 팁 13: Git Worktrees로 병렬 브랜치 작업 (ykdojo #16)
`git checkout`으로 브랜치를 변경하지 않고, `git worktree`를 사용해 여러 디렉토리에 각기 다른 브랜치를 격리 생성한 뒤, 각 터미널에서 Claude Code를 동시에 독립 구동시킵니다.

```bash
# 독립된 작업 디렉토리에 feat/login 브랜치 생성
git worktree add ../project-feat-login feat/login
cd ../project-feat-login
# 이 공간에서 Claude Code 전용 독립 작업을 수행
```

### 팁 14: 대화형 PR 리뷰 (ykdojo #26)
GitHub CLI(`gh`)와 Claude Code를 결합하여 작성된 Pull Request의 변경사항(Diff)을 AI가 검토하고 코멘트를 자동으로 작성하게 만듭니다.

```bash
gh pr diff 105 | claude "이 PR의 잠재적 버그와 성능 저하 요인을 리뷰해줘"
```

---

## 2. 고급 기능 — MCP, Hooks, Agents (Part 6)

### 팁 15: MCP (Model Context Protocol) 외부 세계 연결 (Ado #22~#25)
MCP(Model Context Protocol)를 등록하면 Claude Code가 외부 PostgreSQL 데이터베이스, GitHub API, Figma 디자인 파일, Playwright 브라우저를 직접 조작할 수 있습니다.

### 팁 16: Hooks — 규칙의 강제 자동화 (Ado #26)
Claude Code가 파일이나 코드를 변경한 직후, 자동으로 린터(Linter)나 포맷터(Prettier)를 집행시키는 Hook 스크립트를 지정하여 정갈한 코드 품질을 강제합니다.

### 팁 17: Agents — 전문화된 서브에이전트 (Ado #28)
메인 에이전트 외에 `research`, `database-tester` 등 특화된 역량을 지닌 서브에이전트를 생성하여 복잡한 병렬 분석을 위임시킵니다.

---

## 💡 핵심 Claude Code 용어 사전 (Glossary)

- **Git Worktree**: 단일 Git 저장소에서 소스코드 충돌 없이 여러 브랜치를 서로 다른 디렉토리에 동시에 펼쳐놓고 작업할 수 있는 Git 기능.
- **MCP (Model Context Protocol)**: Anthropic이 제안한 AI 모델과 외부 데이터베이스, API, 툴을 연결하는 오픈 프로토콜 표준.
- **Hooks**: 특정 이벤트(파일 수정 전후, 커밋 전) 발생 시 미리 지정한 스크립트를 자동으로 실행하는 파이프라인 트리거.
- **Subagent (서브에이전트)**: 특정 전문 분야(DB, 테스트, 웹검색)만을 전담하도록 독립된 맥락을 부여받아 구동되는 보조 AI 에이전트.

---

## 핵심 체크리스트 (Summary Checklist)

- [ ] 병렬 작업을 위해 Git Worktree 환경을 구축했는가?
- [ ] 코드 수정 후 자동 포맷팅을 위한 Hooks가 설정되어 있는가?
- [ ] MCP 서버를 연동하여 데이터베이스나 외부 API 조작이 가능한가?
',
  '<h2>1. Git과 GitHub 워크플로우 완전 정복 (Part 5)</h2>
<h3>팁 13: Git Worktrees로 병렬 브랜치 작업 (ykdojo #16)</h3>
<p><code>git checkout</code>으로 브랜치를 변경하지 않고, <code>git worktree</code>를 사용해 여러 디렉토리에 각기 다른 브랜치를 격리 생성한 뒤, 각 터미널에서 Claude Code를 동시에 독립 구동시킵니다.</p>
<pre><code class="language-bash"># 독립된 작업 디렉토리에 feat/login 브랜치 생성
git worktree add ../project-feat-login feat/login
cd ../project-feat-login
# 이 공간에서 Claude Code 전용 독립 작업을 수행</code></pre>
<h3>팁 14: 대화형 PR 리뷰 (ykdojo #26)</h3>
<p>GitHub CLI(<code>gh</code>)와 Claude Code를 결합하여 작성된 Pull Request의 변경사항(Diff)을 AI가 검토하고 코멘트를 자동으로 작성하게 만듭니다.</p>
<pre><code class="language-bash">gh pr diff 105 | claude "이 PR의 잠재적 버그와 성능 저하 요인을 리뷰해줘"</code></pre>
<hr />
<h2>2. 고급 기능 — MCP, Hooks, Agents (Part 6)</h2>
<h3>팁 15: MCP (Model Context Protocol) 외부 세계 연결 (Ado #22~#25)</h3>
<p>MCP(Model Context Protocol)를 등록하면 Claude Code가 외부 PostgreSQL 데이터베이스, GitHub API, Figma 디자인 파일, Playwright 브라우저를 직접 조작할 수 있습니다.</p>
<h3>팁 16: Hooks — 규칙의 강제 자동화 (Ado #26)</h3>
<p>Claude Code가 파일이나 코드를 변경한 직후, 자동으로 린터(Linter)나 포맷터(Prettier)를 집행시키는 Hook 스크립트를 지정하여 정갈한 코드 품질을 강제합니다.</p>
<h3>팁 17: Agents — 전문화된 서브에이전트 (Ado #28)</h3>
<p>메인 에이전트 외에 <code>research</code>, <code>database-tester</code> 등 특화된 역량을 지닌 서브에이전트를 생성하여 복잡한 병렬 분석을 위임시킵니다.</p>
<hr />
<h2>💡 핵심 Claude Code 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Git Worktree</strong>: 단일 Git 저장소에서 소스코드 충돌 없이 여러 브랜치를 서로 다른 디렉토리에 동시에 펼쳐놓고 작업할 수 있는 Git 기능.</li>
<li><strong>MCP (Model Context Protocol)</strong>: Anthropic이 제안한 AI 모델과 외부 데이터베이스, API, 툴을 연결하는 오픈 프로토콜 표준.</li>
<li><strong>Hooks</strong>: 특정 이벤트(파일 수정 전후, 커밋 전) 발생 시 미리 지정한 스크립트를 자동으로 실행하는 파이프라인 트리거.</li>
<li><strong>Subagent (서브에이전트)</strong>: 특정 전문 분야(DB, 테스트, 웹검색)만을 전담하도록 독립된 맥락을 부여받아 구동되는 보조 AI 에이전트.</li>
</ul>
<hr />
<h2>핵심 체크리스트 (Summary Checklist)</h2>
<ul>
<li>[ ] 병렬 작업을 위해 Git Worktree 환경을 구축했는가?</li>
<li>[ ] 코드 수정 후 자동 포맷팅을 위한 Hooks가 설정되어 있는가?</li>
<li>[ ] MCP 서버를 연동하여 데이터베이스나 외부 API 조작이 가능한가?</li>
</ul>',
  'Claude Code 70가지 파워 팁 3부: Git Worktrees & MCP, Hooks, Subagent',
  'Git Worktrees 병렬 브랜치 작업, 대화형 PR 리뷰, MCP 외부 도구 연동, Hooks 검증 규칙, 전문 서브에이전트 활용법을 정밀 수록합니다.',
  DATETIME('now'),
  DATETIME('now')
);

DELETE FROM posts WHERE slug = 'claude-code-70-tips-part4-automation-container-and-70-tips-cheatsheet';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, content_html, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  'Claude Code 70가지 파워 팁: 자동화, CI/CD 통합 및 70가지 팁 완벽 치트시트',
  'claude-code-70-tips-part4-automation-container-and-70-tips-cheatsheet',
  'ai',
  'published',
  63,
  'Headless 모드 CI/CD 통합, Docker 컨테이너 샌드박스 격리, 브라우저 자동화 및 ykdojo/Ado의 70가지 팁 전체 마스터 치트시트 완결판입니다.',
  '## 1. 시스템 최적화와 자동화 (Part 7~9)

### 팁 18: Headless 모드로 CI/CD 통합 (Ado #30)
상호작용 터미널 없이 GitHub Actions나 CI/CD 파이프라인 내에서 `claude -p "코드 자동 검수 및 문서화"` 명령어를 무인 자동 실행(Headless Mode)시킵니다.

### 팁 19: Docker 컨테이너로 위험 작업 샌드박스 격리 (ykdojo #21)
네트워크 통신이나 시스템 파일 수정이 수반되는 파괴적인 실험은 Docker 컨테이너 내부로 작업 공간을 격리하여 안전하게 실행합니다.

```bash
# Docker 샌드박스 내부에서 안전하게 Claude Code 실행
docker run -it -v $(pwd):/app -w /app node:20-alpine claude
```

### 팁 20: Playwright MCP 기반 브라우저 웹 자동화 (Ado #22)
Playwright MCP를 연동하면 Claude Code가 실제 크롬 브라우저를 열고 클릭, 폼 입력, 스크린샷 캡처를 수행하며 E2E 웹 테스트를 자동으로 진행합니다.

---

## 2. 해커톤 우승자의 70가지 파워 팁 완벽 치트시트 (Part 11)

| 팁 번호 | 카테고리 | 핵심 팁 명칭 | 실행 스크립트 및 핵심 사용법 |
| :---: | :--- | :--- | :--- |
| **01** | 사고방식 | 큰 문제 정복 | 3~5개 소기능 단위 분해 후 단계별 집행 |
| **02** | 환경설정 | CLAUDE.md 배치 | 프로젝트 루트에 빌드/테스트 규칙 기술 |
| **03** | 명령어 | `/compact` 가동 | 작업 단락마다 대화록 요약 압축 수행 |
| **04** | 컨텍스트 | `/context` X-Ray | 메모리 탑재 파일 및 토큰 양 실시간 검사 |
| **05** | Git | Git Worktree | 병렬 브랜치 작업을 독립 디렉토리에 분리 |
| **06** | 확장 | MCP 서버 연동 | DB, GitHub, Figma 외부 툴 직접 조작 |
| **07** | 안전성 | Docker 샌드박스 | 파괴적 명령어를 컨테이너 내부로 완전 격리 |
| **08** | 자동화 | Headless CI/CD | `claude -p` 무인 배치 자동화 파이프라인 |

---

## 💡 핵심 Claude Code 용어 사전 (Glossary)

- **Headless Mode (무인 모드)**: 대화형 터미널 입력 없이 프롬프트를 인자로 전달해 CI/CD 파이프라인에서 무인으로 자동 실행하는 방식.
- **Sandbox (샌드박스)**: 외부 시스템에 영향을 주지 않도록 안전하게 격리된 실행 환경 (예: Docker 컨테이너).
- **Playwright**: 웹 브라우저 조작 및 E2E UI 테스트를 자동화해 주는 프레임워크.

---

## 70가지 팁 최종 마스터 체크리스트

- [ ] CI/CD 환경에 Headless 모드 무인 코드 검수가 도입되었는가?
- [ ] 위험 작업 시 Docker 샌드박스 격리가 이루어지고 있는가?
- [ ] 70가지 파워 팁을 바탕으로 나만의 개발 워크플로우가 완성되었는가?
',
  '<h2>1. 시스템 최적화와 자동화 (Part 7~9)</h2>
<h3>팁 18: Headless 모드로 CI/CD 통합 (Ado #30)</h3>
<p>상호작용 터미널 없이 GitHub Actions나 CI/CD 파이프라인 내에서 <code>claude -p "코드 자동 검수 및 문서화"</code> 명령어를 무인 자동 실행(Headless Mode)시킵니다.</p>
<h3>팁 19: Docker 컨테이너로 위험 작업 샌드박스 격리 (ykdojo #21)</h3>
<p>네트워크 통신이나 시스템 파일 수정이 수반되는 파괴적인 실험은 Docker 컨테이너 내부로 작업 공간을 격리하여 안전하게 실행합니다.</p>
<pre><code class="language-bash"># Docker 샌드박스 내부에서 안전하게 Claude Code 실행
docker run -it -v $(pwd):/app -w /app node:20-alpine claude</code></pre>
<h3>팁 20: Playwright MCP 기반 브라우저 웹 자동화 (Ado #22)</h3>
<p>Playwright MCP를 연동하면 Claude Code가 실제 크롬 브라우저를 열고 클릭, 폼 입력, 스크린샷 캡처를 수행하며 E2E 웹 테스트를 자동으로 진행합니다.</p>
<hr />
<h2>2. 해커톤 우승자의 70가지 파워 팁 완벽 치트시트 (Part 11)</h2>
<p>| 팁 번호 | 카테고리 | 핵심 팁 명칭 | 실행 스크립트 및 핵심 사용법 |</p>
<p>| :---: | :--- | :--- | :--- |</p>
<p>| <strong>01</strong> | 사고방식 | 큰 문제 정복 | 3~5개 소기능 단위 분해 후 단계별 집행 |</p>
<p>| <strong>02</strong> | 환경설정 | CLAUDE.md 배치 | 프로젝트 루트에 빌드/테스트 규칙 기술 |</p>
<p>| <strong>03</strong> | 명령어 | <code>/compact</code> 가동 | 작업 단락마다 대화록 요약 압축 수행 |</p>
<p>| <strong>04</strong> | 컨텍스트 | <code>/context</code> X-Ray | 메모리 탑재 파일 및 토큰 양 실시간 검사 |</p>
<p>| <strong>05</strong> | Git | Git Worktree | 병렬 브랜치 작업을 독립 디렉토리에 분리 |</p>
<p>| <strong>06</strong> | 확장 | MCP 서버 연동 | DB, GitHub, Figma 외부 툴 직접 조작 |</p>
<p>| <strong>07</strong> | 안전성 | Docker 샌드박스 | 파괴적 명령어를 컨테이너 내부로 완전 격리 |</p>
<p>| <strong>08</strong> | 자동화 | Headless CI/CD | <code>claude -p</code> 무인 배치 자동화 파이프라인 |</p>
<hr />
<h2>💡 핵심 Claude Code 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Headless Mode (무인 모드)</strong>: 대화형 터미널 입력 없이 프롬프트를 인자로 전달해 CI/CD 파이프라인에서 무인으로 자동 실행하는 방식.</li>
<li><strong>Sandbox (샌드박스)</strong>: 외부 시스템에 영향을 주지 않도록 안전하게 격리된 실행 환경 (예: Docker 컨테이너).</li>
<li><strong>Playwright</strong>: 웹 브라우저 조작 및 E2E UI 테스트를 자동화해 주는 프레임워크.</li>
</ul>
<hr />
<h2>70가지 팁 최종 마스터 체크리스트</h2>
<ul>
<li>[ ] CI/CD 환경에 Headless 모드 무인 코드 검수가 도입되었는가?</li>
<li>[ ] 위험 작업 시 Docker 샌드박스 격리가 이루어지고 있는가?</li>
<li>[ ] 70가지 파워 팁을 바탕으로 나만의 개발 워크플로우가 완성되었는가?</li>
</ul>',
  'Claude Code 70가지 파워 팁 4부: CI/CD 자동화 & 70가지 팁 총정리 치트시트',
  'Headless 모드 CI/CD 통합, Docker 컨테이너 샌드박스 격리, 브라우저 자동화 및 ykdojo/Ado의 70가지 팁 전체 마스터 치트시트 완결판입니다.',
  DATETIME('now'),
  DATETIME('now')
);
