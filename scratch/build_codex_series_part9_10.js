import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Codex로 일하는 법 [9편 & 10편 완결편] 대용량 보강 2차 스크립트 작성 ===');

// ==========================================
// 9편 (Part 9: 보안, 권한, 인시던트 & 거버넌스)
// ==========================================
const part9Md = `
OpenAI Codex 실전 가이드 9편에서는 **보안 권한 경계선**, **외부 문맥 위협 제어**, **인시던트 관제**, **감사 가능성 (Auditability)**, 그리고 **개인 ➔ 팀 생산성 이관**을 다룹니다.

---

## 1. 권한, 승인, 네트워크를 어디서 묶을 것인가 (Security Boundaries)

AI 에이전트가 로컬 환경이나 클라우드 인프라에 접근할 때 샌드박싱과 권한 분리를 적용하는 엔터프라이즈 보안 수칙입니다.

### 샌드박스 3대 가드레일 (Three Guardrails)
1. **Network Egress Control**: 외부 미승인 IP/도메인으로의 데이터 유출 차단 및 허용 IP allowlist 관리
2. **Credential Isolation**: 프롬프트 및 컨텍스트 상에 평문 API 키나 DB 비밀번호 노출 차단, 환경변수 인젝션 사용
3. **Execution Elevation Restriction**: Root/Admin 권한 승격 차단 및 1회용 서비스 계정 부여

\`\`\`json
{
  "sandbox": {
    "allow_network": ["api.openai.com", "api.cloudflare.com"],
    "blocked_commands": ["rm -rf", "git push --force", "sudo"],
    "max_execution_time_seconds": 300
  }
}
\`\`\`

---

## 2. 외부 문맥이 위험해지는 순간을 다루는 법 (Prompt Injection Protection)

외부 RAG 데이터베이스나 웹 검색 결과를 에이전트가 파싱할 때 발생할 수 있는 **Prompt Injection Attack (간접 프롬프트 주입 공격)** 방지책입니다.

- **Data-Prompt Separation**: 외부 데이터와 시스템 프롬프트를 엄격히 격리하여 파싱
- **Input Sanitization**: 외부 텍스트의 특수 명령 구문 필터링 및 실행 불가 플래그 설정
- **Human-in-the-Loop Approval**: 외부 데이터를 기반으로 코드를 수정하거나 실행할 때는 명시적 인간 승인 강제

---

## 3. 감사 가능성과 승인선을 함께 설계하는 기준 (Auditability & Approval)

누가, 언제, 어떤 Codex 프롬프트를 통해 코드를 수정하고 배포했는지 **감사 로그 (Audit Trail)**를 남기는 시스템 설계입니다.

\`\`\`
  Codex Action Request ──> Approval Boundary Gate ──> Human Sign-off ──> Execution & Audit Log
\`\`\`

- **Audit Log Schema**: timestamp, user_id, prompt_sha256, files_modified, test_status 수록
- **PR Sign-off Gate**: 시니어 엔지니어 최소 1인 이상의 승인 없는 AI PR 병합 금지

---

## 4. 개인 생산성을 팀 시스템으로 옮기는 과정

한 명의 스타 개발자 개인의 요령에 의존하는 상태에서 벗어나, 팀 전체가 **공용 AGENTS.md**와 **표준 PR 리뷰 규칙**을 공유하여 품질을 상향 평준화하는 방법입니다.
- **Shared Skills Directory**: \`skills/\` 디렉토리에 팀 공용 배포/검증 스크립트 공유
- **Standardized AGENTS.md**: 레포지토리 루트에 모든 팀원이 동의한 규칙 명시
`;

// ==========================================
// 10편 (Part 10: 엔터프라이즈 모노레포, 레거시 현대화 & 온보딩) [완결편]
// ==========================================
const part10Md = `
OpenAI Codex 실전 가이드 대망의 10편 완결편에서는 **역할별 온보딩 설계**, **AI 도입 지표 (Metrics & ROI)**, **사내 교육 시스템화**, **모노레포 하네스 운영**, **레거시 현대화**, **엔터프라이즈 거버넌스**, 그리고 **장기 운영 자산화**를 완벽하게 다룹니다.

---

## 1. 역할마다 다른 온보딩을 설계하는 법 (Role-Based Onboarding)

직군에 따라 Codex의 시작점과 사용 창구(Surface)를 다르게 설계해야 조직 전체의 도입 마찰을 줄일 수 있습니다.

| 직군 | 추천 시작 창구 | 주요 다루는 하네스 및 문서 |
| :--- | :--- | :--- |
| **주니어 개발자** | VS Code Extension + TDD | 코딩 컨벤션, 자동화 테스트 패스 검증 |
| **시니어 개발자 / 리드** | CLI (\`codex exec\`) + Worktree | 아키텍처 가이드라인, \`AGENTS.md\` 설계, PR 리뷰 |
| **PM / 기획자** | ChatGPT App / Web Canvas | 요구사항 명세(\`PRD.md\`), 기능 검증 계약 수립 |
| **운영 / CS 팀** | Custom MCP Integration | 인시던트 응답 자동화, FAQ 분석 스크립트 |

---

## 2. 무엇을 측정해야 도입이 계속될까 (AI Adoption Metrics & ROI)

단순히 "AI를 몇 명이나 쓰는가"가 아닌, 실제 비즈니스 ROI를 증명하는 4대 측정 지표입니다.

1. **Test Pass Rate (테스트 통과율)**: AI 생성 코드의 빌드 및 단위 테스트 통과 비율
2. **Time to First Scaffold (초기 뼈대 구축 시간)**: 아이디어부터 첫 구동 앱까지 걸리는 시간 (평균 80% 감축)
3. **PR Cycle Time (PR 소요 시간)**: PR 작성부터 자동 리뷰 및 최종 병합까지의 소요 시간
4. **Security Defect Rate (보안 결함 비율)**: 샌드박싱 도입 후 보안 취약점 발생 비율

---

## 3. 사내 교육을 일회성 행사가 아닌 시스템으로 만드는 법

단발성 세미나나 보여주기식 이벤트에 그치지 않고, 프로젝트 루트의 **\`AGENTS.md\`**와 **\`skills/\` 모듈**을 사내 표준 자산으로 가꾸는 시스템 구축 워크플로우입니다.
- **Bi-weekly Skill Retrospective**: 격주 단위로 유용한 AI 스킬을 \`skills/\`에 릴레이 등록
- **Automated Verification Pipeline**: 모든 팀원이 동일한 자동화 검증 명령어를 구동하도록 설정

---

## 4. 거대한 모노레포(Monorepo)와 레거시 현대화 (Legacy Modernization)

- **Sub-directory AGENTS.md**: 모노레포 내 각 서비스 패키지마다 개별 \`AGENTS.md\`를 두어 맥락 오염 방지
- **Strangler Fig Pattern**: 레거시 코드를 멈추지 않고 신규 서비스 인터페이스로 단계적 릴레이 이관

\`\`\`
  Legacy System ──> Facade Layer (API Gateway) ──> New Microservice (Migrated)
\`\`\`

---

## 5. 대단원: 장기 운영에서 끝까지 남겨야 할 것 (Long-Term Systemic Assets)

> *"도구의 이름과 모델 버전은 계속 바뀝니다. 하지만 작업의 범위를 자르고, 검증 파이프라인을 구축하며, 명확한 승인선을 그리는 엔지니어링 원리는 영원히 남습니다."*

10편 연재를 마치며, 코드 그 자체보다 더 귀한 자산은 **에이전트와 완벽히 협업할 수 있도록 설계된 팀의 하네스 인프라와 문화**입니다.
`;

// ==========================================
// JSON / SQL Generation for Part 9 & 10
// ==========================================
const lesson33 = {
  order_index: 33,
  slug: 'ch33-working-with-codex-part9-security-permissions-and-governance',
  title: '33. Codex로 일하는 법 [9편: 보안, 권한, 인시던트 & 거버넌스]',
  seo_title: 'Codex로 일하는 법 9편 - 샌드박스 보안, 외부 문맥 위협 및 감사 승인선',
  seo_description: '샌드박스 3대 가드레일, 간접 프롬프트 주입 공격 방지, 감사 가능성(Auditability) 및 팀 단위 공용 AGENTS.md 확장을 배웁니다.',
  excerpt: '샌드박스 보안 가드레일, 외부 프롬프트 주입 위협 제어, 감사 로그 및 팀 공용 AGENTS.md 이관 가이드입니다.',
  body_md: part9Md
};

const lesson34 = {
  order_index: 34,
  slug: 'ch34-working-with-codex-part10-enterprise-monorepo-and-modernization',
  title: '34. Codex로 일하는 법 [10편: 엔터프라이즈 모노레포, 레거시 현대화 & 온보딩]',
  seo_title: 'Codex로 일하는 법 10편 완결 - 역할별 온보딩, 모노레포 하네스 & 레거시 현대화',
  seo_description: '역할별 온보딩 설계, AI 도입 ROI 지표, 모노레포 하네스 운영, 레거시 현대화 및 장기 자산화 완결편입니다.',
  excerpt: '역할별 온보딩 설계, AI 도입 ROI 4대 지표, 모노레포 하네스, 레거시 무중단 현대화 완결편 가이드입니다.',
  body_md: part10Md
};

const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

const sqlContent = `
-- Lesson 33 (Part 9)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson33.slug)}', '${escapeSql(lesson33.title)}', '${escapeSql(lesson33.excerpt)}', '${escapeSql(part9Md)}', '${escapeSql(marked.parse(part9Md))}', 'published', '${escapeSql(lesson33.seo_title)}', '${escapeSql(lesson33.seo_description)}', ${lesson33.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 34 (Part 10)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson34.slug)}', '${escapeSql(lesson34.title)}', '${escapeSql(lesson34.excerpt)}', '${escapeSql(part10Md)}', '${escapeSql(marked.parse(part10Md))}', 'published', '${escapeSql(lesson34.seo_title)}', '${escapeSql(lesson34.seo_description)}', ${lesson34.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;
`;

fs.writeFileSync('scratch/seed_codex_series_part9_10.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_codex_series_part9_10.sql with ENHANCED LENGTH!');
