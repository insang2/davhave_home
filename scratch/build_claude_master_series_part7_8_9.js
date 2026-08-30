import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Claude 마스터 가이드 [7편, 8편, 9편] 초대용량 보강 2차 스크립트 작성 ===');

// ==========================================
// 7편 (Part 7: 직무별 플레이북 - 기획자, 개발자, PM)
// ==========================================
const part7Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 7편**에서는 **기획자**, **소프트웨어 개발자**, 그리고 **프로젝트 매니저(PM)**를 위한 직무별 실전 에이전트 구동 플레이북을 초대용량 분량으로 다룹니다.

---

## 1. 기획자(Planner)를 위한 PRD 작성 파이프라인

기획자가 아이디어 단계에서 완벽한 제품 요구사항 정의서(PRD: Product Requirement Document)를 작성하도록 조율하는 워크플로우입니다.

### 기획자용 PRD 생성 프롬프트 스키마
\`\`\`markdown
[Planner Execution Card: PRD Generation]
- Business Goal: StudyFlow 학습 플랫폼 실시간 질문/답변 커뮤니티 신규 구축
- Target Persona: AI 및 소프트웨어 개발 기술을 배우는 대학생 및 현직 엔지니어
- Required Sections:
  1. Problem Statement & User Journey Map
  2. Functional Requirements (Must / Should / Could / Won't - MoSCoW)
  3. Non-Functional Requirements (Latency < 200ms, Security Checkpoint)
  4. Core Success Metrics (DAU, Answer Resolution Rate)
\`\`\`

---

## 2. 개발자(Developer)를 위한 TDD & 인프라 플레이북

- **TDD Relay**: 실패하는 테스트 코드 작성 ➔ 구현 ➔ 리팩터링 3단계 릴레이
- **Refactoring Guardrails**: 기존 API 응답 구조 파괴 없이 내부 알고리즘만 $O(N^2)$에서 $O(N \log N)$으로 개선
- **API Mock Server Generation**: 프론트엔드 개발 속도를 올리기 위해 OpenAPI 스펙 기반 Mock API 데이터 서버 자동 구축

---

## 3. 프로젝트 매니저(PM)를 위한 리스크 & 일감 분류

- **Issue Triage**: 수집된 사용자 버그 제보 100건을 영향도와 긴급도 기준 4분면 분류
- **Weekly Progress Report**: Git 커밋 로그 및 이슈 상태 자동 추적하여 주간 진척도 리포트 생성
- **Sprint Retrospective Automation**: 지난 스프린트 완료 과제와 이월 과제 자동 집계 및 피드백 도출
`;

// ==========================================
// 8편 (Part 8: 직무별 플레이북 - 디자이너, 마케터, CS/운영)
// ==========================================
const part8Md = `
Claude 마스터 가이드 8편에서는 **디자이너**, **콘텐츠 마케터**, 그리고 **CS/운영 실무자**를 위한 직무별 에이전트 구축 가이드를 초대용량 분량으로 다룹니다.

---

## 1. 디자이너(Designer)를 위한 Figma 토큰 & Design System

- **Figma Design Sync**: Figma 디자인 토큰(Color, Spacing, Typography) 변수를 CSS 변수로 자동 매핑
- **Accessibility Audit**: 디자인 컴포넌트의 대비 비율 및 키보드 접근성 자동 검증
- **Micro-animation Specs**: UI 호버 및 클릭 인터랙션 CSS 트랜지션 명세 자동 추출

---

## 2. 마케터(Marketer)를 위한 콘텐츠 캘린더 & 카피라이팅

- **Content Calendar Generation**: 타겟 고객군에 맞춘 4주 단위 블로그 및 소셜 미디어 콘텐츠 캘린더 생성
- **A/B Testing Copy**: 동일 제품에 대해 3가지 어조(Professional, Casual, Urgent) 카피라이팅 렌더링
- **SEO Optimization**: 메타 타이틀, 메타 디스크립션, OpenGraph 태그 자동 추출

---

## 3. CS / 운영팀(Operations)을 위한 인시던트 분류 자동화

- **Customer Feedback Classifier**: 고객 문의 텍스트를 환불, 기술 지원, 단순 문의로 자동 태깅 및 담당 부서 할당
- **FAQ Knowledge Base Sync**: 자주 묻는 질문 50종을 마크다운 FAQ 문서로 자동 갱신
- **Incident Escalation Matrix**: 장애 레벨 1~3 단계별 담당 엔지니어 및 알림 채널 정의
`;

// ==========================================
// 9편 (Part 9: 한국 실무자를 위한 상황별 실전 활용)
// ==========================================
const part9Md = `
Claude 마스터 가이드 9편에서는 **한국 실무 환경 특화 가이드 (Korean Business Context)**로, HWP/PDF 문서 파싱, 한국어 비즈니스 어조 조정, 공공 및 대기업 보안 규정 대처법을 다룹니다.

---

## 1. HWP 및 PDF 문서 파싱과 한국어 마크다운 변환

한국 기업 실무에서 자주 접하는 HWP, HWPX 및 스캔 PDF 문서의 텍스트와 표(Table) 데이터를 유실 없이 마크다운 구조화 데이터로 이관하는 기법입니다.

- **Table Extraction**: 병합된 셀(Cell) 구조를 HTML/Markdown 표 포맷으로 복원
- **OCR Text Cleaning**: OCR 인식 오차로 발생한 띄어쓰기 및 특수문자 정제

---

## 2. 한국어 비즈니스 어조 (Tone & Style) 튜닝

- **공식 보고서 어조**: "~함", "~임", "~으로 판단됨" 형태의 격식체 요약
- **고객 대면 메시지 어조**: 칭찬과 공감이 담긴 친절한 비즈니스 경어체 ("~해 드리겠습니다")
- **사내 Slack 알림 어조**: 간결하고 명확한 서술형 체 ("~가 완료되었습니다")

---

## 3. 대기업 및 공공기관 보안 가드레일 대처법

- **Data Privacy Protection**: 개인정보(주민등록번호, 전화번호, 이메일) Masking 샌드박싱
- **On-Premise / Hybrid LLM OS**: 사내망 API Gateway 연동 체계 구축
`;

// ==========================================
// JSON / SQL Generation for Part 7, 8 & 9
// ==========================================
const lesson41 = {
  order_index: 41,
  slug: 'ch41-claude-master-guide-part7-job-specific-playbook-dev-pm',
  title: 'Claude 마스터 가이드 [7편: 직무별 플레이북 - 기획자, 개발자, PM]',
  seo_title: 'Claude 마스터 가이드 7편 - 기획자 PRD, 개발자 TDD & PM 리스크 트래킹',
  seo_description: '기획자 PRD 명세 작성, 개발자 TDD/리팩터링 및 PM 일감 이슈 분류 플레이북을 배웁니다.',
  excerpt: '기획자 PRD 명세, 개발자 TDD/리팩터링 및 PM 리스크 트래킹 가이드입니다.',
  body_md: part7Md
};

const lesson42 = {
  order_index: 42,
  slug: 'ch42-claude-master-guide-part8-job-specific-playbook-design-ops',
  title: 'Claude 마스터 가이드 [8편: 직무별 플레이북 - 디자이너, 마케터, CS/운영]',
  seo_title: 'Claude 마스터 가이드 8편 - 디자이너 Figma 토큰, 마케터 카피라이팅 & CS 자동화',
  seo_description: '디자이너 Figma 토큰 동기화, 마케터 콘텐츠 캘린더 및 CS/운영 인시던트 분류 자동화를 배웁니다.',
  excerpt: '디자이너 Figma 토큰 동기화, 마케터 콘텐츠 캘린더 및 CS 인시던트 분류 가이드입니다.',
  body_md: part8Md
};

const lesson43 = {
  order_index: 43,
  slug: 'ch43-claude-master-guide-part9-korean-practical-usecases',
  title: 'Claude 마스터 가이드 [9편: 한국 실무자를 위한 상황별 실전 활용]',
  seo_title: 'Claude 마스터 가이드 9편 - HWP/PDF 파싱, 한국어 비즈니스 어조 & 보안 가드레일',
  seo_description: 'HWP/PDF 파싱 마크다운 변환, 한국어 비즈니스 어조 조정 및 대기업/공공 보안 규정 대처법을 배웁니다.',
  excerpt: 'HWP/PDF 파싱, 한국어 비즈니스 어조 튜닝 및 보안 규정 대처 가이드입니다.',
  body_md: part9Md
};

const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

const sqlContent = `
-- Lesson 41 (Part 7)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson41.slug)}', '${escapeSql(lesson41.title)}', '${escapeSql(lesson41.excerpt)}', '${escapeSql(part7Md)}', '${escapeSql(marked.parse(part7Md))}', 'published', '${escapeSql(lesson41.seo_title)}', '${escapeSql(lesson41.seo_description)}', ${lesson41.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 42 (Part 8)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson42.slug)}', '${escapeSql(lesson42.title)}', '${escapeSql(lesson42.excerpt)}', '${escapeSql(part8Md)}', '${escapeSql(marked.parse(part8Md))}', 'published', '${escapeSql(lesson42.seo_title)}', '${escapeSql(lesson42.seo_description)}', ${lesson42.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 43 (Part 9)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', '${escapeSql(lesson43.slug)}', '${escapeSql(lesson43.title)}', '${escapeSql(lesson43.excerpt)}', '${escapeSql(part9Md)}', '${escapeSql(marked.parse(part9Md))}', 'published', '${escapeSql(lesson43.seo_title)}', '${escapeSql(lesson43.seo_description)}', ${lesson43.order_index}, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;
`;

fs.writeFileSync('scratch/seed_claude_master_part7_8_9.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_claude_master_part7_8_9.sql with ENHANCED LENGTH!');
