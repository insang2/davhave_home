import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Codex로 일하는 법 [6편, 7편, 8편] 대용량 보강 스크립트 작성 ===');

// ==========================================
// 6편 (Part 6: API 마이그레이션, 데이터 분석 & 릴리즈)
// ==========================================
const part6Md = `
OpenAI Codex 실전 가이드 6편에서는 **API 무중단 마이그레이션**, **데이터 리포트 자동화**, **재현 가능한 데이터 스크립트**, **문서/다이어그램/릴리즈 노트 수립**, **슬라이드 덱 제작**, 그리고 **비개발자 안전 협업**을 다룹니다.

---

## 1. API 업그레이드를 덜 아프게 넘기는 법 (Zero-Downtime API Migration)

기존 v1 REST API를 v2 또는 GraphQL/Edge API로 변경할 때 발생할 수 있는 장애를 방지하는 3단계 마이그레이션 워크플로우입니다.

### Zero-Downtime API 마이그레이션 파이프라인
\`\`\`
  Legacy API v1 ──> Dual Run Adapter (Shadow Call) ──> New API v2
\`\`\`

1. **섀도 캘(Shadow Call) 어댑터 구축**: 신규 API 호출 시 v1과 v2를 백그라운드에서 동시 구동하여 결과값 비교
2. **호환성 레이어(Compatibility Layer) 유지**: 외부 클라이언트 파괴 없이 응답 DTO 필드 매핑 보장
3. **카나리(Canary) 트래픽 이관**: 5% ➔ 20% ➔ 100% 비율로 안전한 트래픽 순차 이관

---

## 2. 데이터에서 바로 리포트까지 닫는 법 (Data-to-Report Automation)

Cloudflare D1 또는 PostgreSQL의 원시(Raw) SQL 데이터를 파싱하여 경영진이나 팀에 즉시 공유할 수 있는 마크다운 보고서로 변환하는 자동화 스크립트입니다.

### 데이터 ➔ 리포트 자동화 파이프라인 스크립트 예시
\`\`\`python
# scripts/generate_report.py
import sqlite3, json, datetime

def build_weekly_report():
    # SQLite / D1 local connection
    conn = sqlite3.connect('.wrangler/state/v3/d1/miniflare-D1DatabaseObject/db.sqlite')
    cursor = conn.cursor()
    cursor.execute("SELECT category, count(*), sum(length(content_md)) FROM posts GROUP BY category;")
    rows = cursor.fetchall()
    
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    report_md = f"# Weekly Content & Education Analytics Report\\n*Generated At: {now}*\\n\\n"
    report_md += "| Category | Total Lessons | Total Characters |\n| :--- | :--- | :--- |\n"
    
    total_posts = 0
    total_chars = 0
    for cat, count, char_len in rows:
        total_posts += count
        total_chars += (char_len or 0)
        report_md += f"| **{cat}** | {count}개 | {char_len:,}자 |\n"
    
    report_md += f"\\n---\\n**Summary**: Total {total_posts} lessons, {total_chars:,} total characters generated.\\n"
    
    with open('reports/weekly_report.md', 'w', encoding='utf-8') as f:
        f.write(report_md)
    print("Report successfully generated in reports/weekly_report.md!")

if __name__ == '__main__':
    build_weekly_report()
\`\`\`

---

## 3. 다시 돌릴 수 있는 분석 스크립트 만들기 (Reproducible Data Scripts)

한 번 돌리고 버리는 스크립트가 아니라, 매주/매월 누구나 동일한 조건으로 구동할 수 있도록 **재현 가능성(Reproducibility)**을 확보해야 합니다.
- **CLI Arguments**: \`python analyse.py --start-date 2026-08-01 --env prod\` 형태의 인자화
- **Idempotent Output**: 동일 조건 재실행 시 기존 결과를 덮어쓰거나 유일 키를 보장하도록 작성

---

## 4. 문서와 다이어그램, 릴리즈 노트를 함께 정리하는 법

코드가 변경될 때 **System Architecture Diagram (Mermaid)**과 **Release Notes**가 자동으로 동기화되도록 Codex에 릴레이 지시를 수행합니다.

### Mermaid 시스템 다이어그램 릴레이 예시
\`\`\`mermaid
graph TD
    Client[Browser / Client] --> Worker[Cloudflare Worker Gate]
    Worker --> Auth[JWT Auth Middleware]
    Auth --> D1[(D1 Database)]
    Worker --> R2[(R2 Storage Bucket)]
\`\`\`

---

## 5. 슬라이드 덱을 설득력 있게 만드는 흐름 (Markdown Slide Decks)

Marp 또는 Slidev 포맷을 활용하여 마크다운 파일 작성만으로 훌륭한 경영진 프레젠테이션 슬라이드를 생성하는 기법입니다.

---

## 6. 비개발자도 안전하게 함께 쓰는 협업 방식

기획자, 마케터, 운영자가 Codex를 사용할 때 코드를 파괴하지 않도록 **Strict Sandboxed Interface**와 프롬프트 템플릿을 제공합니다.
`;

// ==========================================
// 7편 (Part 7: AI 코드 리뷰, CI/CD & 배포 파이프라인)
// ==========================================
const part7Md = `
Codex 실전 가이드 7편에서는 **자동화 AI 코드 리뷰**, **Git Diff & 롤백 안전성**, **GitHub Actions \`codex exec\` 고정**, **자동화 PR Description**, 그리고 **배포 후 검증 루프**를 다룹니다.

---

## 1. AI 코드 리뷰를 팀 흐름에 붙이는 법 (Automated PR Review)

GitHub Actions 또는 CI 파이프라인에서 PR(Pull Request)이 생성될 때 Codex가 변경사항을 자동으로 스캔하고 리뷰 댓글을 다는 체계입니다.

### GitHub Actions CI \`codex exec\` 리뷰 워크플로우 예시
\`\`\`yaml
name: AI Code Review Pipeline
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Run Codex Auto Review
        env:
          CODEX_API_KEY: \${{ secrets.CODEX_API_KEY }}
        run: |
          git diff origin/main...HEAD > pr_diff.txt
          codex exec -p "Review pr_diff.txt for security vulnerabilities and style violations. Output comments in Markdown." > review_comment.md
      - name: Post PR Comment
        uses: mshick/fast-pr-comment@v1
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
          issue-number: \${{ github.event.number }}
          file: review_comment.md
\`\`\`

---

## 2. 코드 차이를 읽고 되돌릴 길까지 남기는 법 (Git Diff & Rollback Safety)

AI가 코드를 생성하고 커밋하기 전 **\`git diff\` 샌드박싱**을 거치고, 항상 비상 상황에 되돌릴 수 있는 **Safety Checkout Point**를 남깁니다.

- **Safe Branching**: \`feature/codex-refactor\` 전용 브랜치에서만 작업 수행
- **Atomic Commits**: 한 커밋당 하나의 논리적 단위만 커밋하여 개별 롤백 용이성 확보
- **Safety Tagging**: 대규모 작업 전 \`git tag pre-codex-backup\` 태그 지정

---

## 3. PR 설명부터 릴리즈 준비까지 놓치지 않는 법

PR 작성 시 변경사항 요약, 테스트 통과 결과, 영향받는 엔드포인트를 Codex가 자동으로 요약하여 작성하도록 스크립팅합니다.

---

## 4. 배포 뒤에 반드시 닫아야 할 확인 루프 (Post-Deployment Verification)

배포(Deployment) 완료 후 시스템이 정상 작동하는지 런타임 헬스 체크를 수행하는 **Post-Deploy Verification Loop**입니다.

- **HTTP 200 OK Check**: 핵심 엔드포인트 헬스 체크
- **Error Log Monitoring**: Cloudflare Tail Logs 또는 Datadog 에러율 감시
- **Sanity E2E Test**: 핵심 유저 플로우(로그인, 조회) 자동 구동
`;

// ==========================================
// 8편 (Part 8: MCP 확장, 스킬 굳히기 & Worktree 서브에이전트)
// ==========================================
const part8Md = `
Codex 실전 가이드 8편에서는 **반복 작업 스킬화 (\`skills/\`)**, **MCP 3대 통합**, **플러그인 vs 저장소 도구**, **Git Worktree & 서브에이전트 오케스트레이션**, 그리고 **주간 루틴 자동화**를 다룹니다.

---

## 1. 반복 작업을 스킬로 굳히는 기준 (\`skills/\` Creation)

팀에서 매주 반복되는 복잡한 작업(예: DB 마이그레이션, 오디트 리포트 작성)을 프로젝트 내부의 **스킬 (Skill)**로 모듈화합니다.

### \`skills/db-audit/SKILL.md\` 스킬 구조 예시
\`\`\`markdown
---
name: db-audit
description: D1 데이터베이스 포스트 무결성 및 누락 카테고리 검증 스크립트
---

# DB Audit Skill Instructions
1. Run local D1 query:
   \`\`\`bash
   npx wrangler d1 execute davhave-content --local --command "SELECT category, count(*) FROM posts GROUP BY category;"
   \`\`\`
2. Check for missing CATEGORIES mapping in \`src/lib/education-render.js\`.
3. Verify all routes return HTTP 200 OK with non-zero content length.
4. Report any 404 risks in \`artifacts/audit_report.md\`.
\`\`\`

---

## 2. MCP로 문서, 디자인, 로그를 한 흐름으로 잇는 법 (Model Context Protocol)

MCP (Model Context Protocol)를 통해 GitHub, Figma, Datadog/Cloudflare Logs를 하나로 통합합니다.

\`\`\`
   ┌────────────────────────────────────────────────────────┐
   │             MCP 3-Way Unified Architecture             │
   └───────────────────────────┬────────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
   1. Figma MCP          2. GitHub MCP         3. Cloudflare MCP
  - 디자인 토큰 동기화  - PR & Issue 자동화   - D1 / R2 / Logs 조율
\`\`\`

---

## 3. 플러그인과 저장소 전용 도구를 나누는 기준

- **Global Plugins**: 브라우저 연동, OS 파일 변환 등 어떤 프로젝트에서나 쓰이는 범용 도구
- **Repo-specific Tools**: \`skills/\` 디렉토리에 수록되어 해당 프로젝트의 스택과 DB 스키마에 고유한 특화 도구

---

## 4. 워크트리와 서브에이전트로 긴 작업을 운영하는 법 (Git Worktree)

독립된 작업 공간인 **Git Worktree**를 생성하여 메인 코드베이스에 영향을 주지 않고 서브에이전트들이 병렬로 작업을 수행하도록 조율합니다.

\`\`\`bash
# Git Worktree 생성 및 서브에이전트 작업 할당
git worktree add -b feature/async-refactor ../worktree-refactor main
\`\`\`

---

## 5. 주간 루틴을 자동화로 굳히는 순서

1. 주간 데이터 리포트 ➔ 2. 이슈 자동 스캐닝 ➔ 3. 릴리즈 노트 발행의 자동화 루프 구축
`;

// ==========================================
// JSON / SQL Generation for Part 6, 7 & 8
// ==========================================
const lesson30 = {
  order_index: 30,
  slug: 'ch30-working-with-codex-part6-api-migration-data-analysis-and-releases',
  title: '30. Codex로 일하는 법 [6편: API 마이그레이션, 데이터 분석 & 릴리즈]',
  seo_title: 'Codex로 일하는 법 6편 - Zero-Downtime API 마이그레이션, 데이터 리포트 & 릴리즈',
  seo_description: 'Zero-Downtime API 마이그레이션, 데이터 ➔ 리포트 자동화, 재현 가능한 데이터 스크립트, Mermaid 다이어그램 및 비개발자 협업을 배웁니다.',
  excerpt: 'Zero-Downtime API 마이그레이션, 데이터 리포트 자동화 파이프라인, Mermaid 시스템 다이어그램 및 비개발자 안전 협업 가이드입니다.',
  body_md: part6Md
};

const lesson31 = {
  order_index: 31,
  slug: 'ch31-working-with-codex-part7-ai-code-review-cicd-and-deployment',
  title: '31. Codex로 일하는 법 [7편: AI 코드 리뷰, CI/CD & 배포 파이프라인]',
  seo_title: 'Codex로 일하는 법 7편 - GitHub Actions AI 코드 리뷰, codex exec & 배포 검증',
  seo_description: 'GitHub Actions codex exec 코드 리뷰 파이프라인, git diff 롤백 안전성, PR Description 자동화 및 배포 후 런타임 검증 루프를 배웁니다.',
  excerpt: 'GitHub Actions AI 코드 리뷰 CI/CD, git diff 롤백 안전성, PR Description 자동 생성 및 배포 후 런타임 검증 루프 가이드입니다.',
  body_md: part7Md
};

const lesson32 = {
  order_index: 32,
  slug: 'ch32-working-with-codex-part8-mcp-extensions-skills-and-worktrees',
  title: '32. Codex로 일하는 법 [8편: MCP 확장, 스킬 굳히기 & Worktree 서브에이전트]',
  seo_title: 'Codex로 일하는 법 8편 - skills/ 모듈화, MCP 3대 통합 & Git Worktree 서브에이전트',
  seo_description: '반복 작업의 skills/ 모듈화, MCP 3-Way (Figma/GitHub/Cloudflare) 통합, Git Worktree 서브에이전트 오케스트레이션을 배웁니다.',
  excerpt: '반복 작업의 skills/ 모듈화, MCP 3대 시스템 통합, Git Worktree 독립 병렬 작업 및 주간 루틴 자동화 가이드입니다.',
  body_md: part8Md
};

const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

const sqlContent = `
-- Lesson 30 (Part 6)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson30.slug)}', '${escapeSql(lesson30.title)}', '${escapeSql(lesson30.excerpt)}', '${escapeSql(part6Md)}', '${escapeSql(marked.parse(part6Md))}', 'published', '${escapeSql(lesson30.seo_title)}', '${escapeSql(lesson30.seo_description)}', ${lesson30.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 31 (Part 7)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson31.slug)}', '${escapeSql(lesson31.title)}', '${escapeSql(lesson31.excerpt)}', '${escapeSql(part7Md)}', '${escapeSql(marked.parse(part7Md))}', 'published', '${escapeSql(lesson31.seo_title)}', '${escapeSql(lesson31.seo_description)}', ${lesson31.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 32 (Part 8)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson32.slug)}', '${escapeSql(lesson32.title)}', '${escapeSql(lesson32.excerpt)}', '${escapeSql(part8Md)}', '${escapeSql(marked.parse(part8Md))}', 'published', '${escapeSql(lesson32.seo_title)}', '${escapeSql(lesson32.seo_description)}', ${lesson32.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;
`;

fs.writeFileSync('scratch/seed_codex_series_part6_7_8.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_codex_series_part6_7_8.sql with ENHANCED LENGTH!');
