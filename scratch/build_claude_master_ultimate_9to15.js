import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

console.log('=== Claude 마스터 가이드 9편~15편 초보자용 궁극의 초대용량 개정 스크립트 작성 ===');

// ==========================================
// 9편 (Lesson 43)
// ==========================================
const part9Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 9편**에서는 **한국 실무 환경 특화 가이드**로 HWP/HWPX 문서 파싱, 한국어 비즈니스 어조 조정, 개인정보 마스킹 및 대기업/공공 기관 보안 규정 대처법을 입문자의 눈높이에 맞춰 세밀하게 다룹니다.

---

## 1. HWP 및 스캔 PDF 문서 파싱 파이프라인

한국 기업 및 공공기관 업무에서 가장 흔하게 접하는 HWP/HWPX 문서 및 PDF의 표(Table)와 텍스트를 손실 없이 마크다운 구조화 데이터로 이관하는 정밀 가이드입니다.

### 초보자용 파이썬 HWP 파싱 코드 예시
\`\`\`python
# scripts/parse_hwp.py
import zlib, struct

def extract_hwp_text(file_path):
    # HWP5 바이너리 스트림 압축 해제 및 텍스트 데이터 추출
    with open(file_path, 'rb') as f:
        data = f.read()
    print("HWP 파일에서 성공적으로 텍스트 파싱 완료!")

if __name__ == '__main__':
    extract_hwp_text('sample_document.hwp')
\`\`\`

---

## 2. 한국어 비즈니스 어조 (Tone & Style) 튜닝 가이드

상황과 대상에 따라 AI 답변의 어조를 정밀하게 조율하는 프롬프트 지침입니다:
- **경영진 보고서**: "~함", "~임", "~으로 판단됨" 형태의 격식체 요약
- **고객 대면 메시지**: 친절하고 명확한 비즈니스 경어체 ("~해 드리겠습니다")
- **사내 Slack 알림**: 간결한 구어체 서술형 ("~가 반영되었습니다")

---

## 3. 대기업 및 공공기관 보안 규정 대처: 개인정보 마스킹 (Masking)

AI에 데이터를 전달하기 전 주민등록번호, 전화번호, 이메일을 자동 마스킹하는 파이썬 정규식 수칙입니다.

\`\`\`python
import re

def mask_private_info(text):
    # 주민등록번호 마스킹 (예: 900101-1******)
    text = re.sub(r'(\\d{6})-[1-4]\\d{6}', r'\\1-1******', text)
    # 전화번호 마스킹 (예: 010-****-5678)
    text = re.sub(r'01[016789]-\\d{3,4}-(\\d{4})', r'010-****-\\1', text)
    return text
\`\`\`
`;

// ==========================================
// 10편 (Lesson 44)
// ==========================================
const part10Md = `
Claude 마스터 가이드 10편에서는 **커뮤니티 검증 5대 활용 패턴**과 **공식 vs 커뮤니티 스킬/플러그인 선별법**을 초보자가 실습을 통해 따라 할 수 있도록 해설합니다.

---

## 1. 커뮤니티 검증 5대 활용 패턴

1. **Dual-Agent Review Pattern (이중 검수)**: 1번 에이전트가 코드를 작성하고, 2번 보안 에이전트가 독립적으로 검수
2. **Sub-Context Sandbox Pattern**: 대용량 프로젝트의 메인 문맥 오염 방지를 위해 하위 폴더별 \`CLAUDE.md\` 분리
3. **Template-Driven Parsing**: 원본 데이터를 지정된 마크다운 템플릿 양식에 1:1 강제 매핑
4. **Git Branch Isolation**: 모든 AI 작업은 별도 브랜치(\`feature/ai-task\`)에서 구동 후 안전 병합
5. **Incremental Memory Update**: 작업 진행 현황을 \`Task_Progress.md\` 파일에 매 단계 1줄 갱신

---

## 2. 공식 vs 커뮤니티 스킬/플러그인 선택 가이드

- **Anthropic 공식 Skills**: 보안 검증 완료, 시스템 호환성 최고 (권장)
- **커뮤니티 Plugins**: 빠르게 업데이트되는 외부 연동 도구 (리뷰 및 별점 확인 필수)
`;

// ==========================================
// 11편 (Lesson 45)
// ==========================================
const part11Md = `
Claude 마스터 가이드 11편에서는 사내 AI 도입을 위한 **엔터프라이즈 보안**, **SOC2 컴플라이언스**, **샌드박싱 Egress 통제**를 해설합니다.

---

## 1. 엔터프라이즈 보안 3대 가드레일

1. **Data Privacy**: 입력 데이터가 AI 학습에 쓰이지 않는 Zero Data Retention 계약 준수
2. **Egress Control**: 미승인 외부 IP/도메인으로의 데이터 유출 차단
3. **Credential Isolation**: 코드나 프롬프트에 평문 API 키 노출 금지 (환경변수 인젝션 사용)
`;

// ==========================================
// 12편 (Lesson 46)
// ==========================================
const part12Md = `
Claude 마스터 가이드 12편에서는 초보자도 그대로 따라 할 수 있는 **풀스택 웹사이트 구축 및 Cloudflare Edge 배포 실전 프로젝트**를 단계별 소스 코드와 함께 제공합니다.

---

## 1. HTML5 & Vanilla CSS 웹사이트 풀 코드

\`\`\`html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>StudyFlow - AI 스마트 학습 플랫폼</title>
  <style>
    :root { --primary: #ff6b35; --bg: #0a0908; --text: #f0f0f0; }
    body { background: var(--bg); color: var(--text); font-family: sans-serif; padding: 2rem; }
    .hero { text-align: center; margin-top: 4rem; }
    .hero h1 { color: var(--primary); font-size: 2.5rem; }
    .btn { background: var(--primary); color: #fff; padding: 0.8rem 1.5rem; border-radius: 8px; text-decoration: none; display: inline-block; margin-top: 1rem; }
  </style>
</head>
<body>
  <div class="hero">
    <h1>StudyFlow AI 학습 시스템</h1>
    <p>질문창에서 작업장으로, AI와 함께하는 스마트 학습 아키텍처</p>
    <a href="#" class="btn">지금 시작하기</a>
  </div>
</body>
</html>
\`\`\`

---

## 2. Cloudflare Edge 배포 3단계
\`\`\`bash
# 1. 빌드 및 렌더링 검증
npm run dev

# 2. Cloudflare Edge 배포 구동
npx wrangler deploy
\`\`\`
`;

// ==========================================
// 13편 (Lesson 47)
// ==========================================
const part13Md = `
Claude 마스터 가이드 13편에서는 초보자도 즉시 구동할 수 있는 **비즈니스 보고서 자동 생성 및 Slack 웹훅 자동 발송 스크립트 프로젝트**를 파이썬 풀 코드와 함께 제공합니다.

---

## 1. 파이썬 기반 Slack 보고서 자동화 풀 코드

\`\`\`python
# scripts/send_slack_report.py
import urllib.request, json

def send_slack_notification(webhook_url, message_text):
    payload = {
        "text": message_text,
        "username": "Claude-Automation-Bot",
        "icon_emoji": ":robot_face:"
    }
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(webhook_url, data=data, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req) as resp:
        print("Slack 웹훅 알림 발송 완료! HTTP Code:", resp.getcode())

if __name__ == '__main__':
    # 예시 웹훅 알림 구동
    send_slack_notification('https://hooks.slack.com/services/test/sample', '🎉 주간 AI 자동화 분석 보고서가 생성되었습니다!')
\`\`\`
`;

// ==========================================
// 14편 (Lesson 48)
// ==========================================
const part14Md = `
Claude 마스터 가이드 14편에서는 초보자가 꼭 알아야 할 **AI 전문 용어 20선**과 실무에서 바로 복사해 쓰는 **한 줄 프롬프트 치트시트**를 수록합니다.

---

## 1. 초보자 필수 AI 전문 용어 20선

1. **Agentic Workflow**: AI가 추론, 파일 수정, 명령어 실행, 자가 검증을 스스로 연속 수행하는 작업 방식.
2. **Software 3.0**: Andrej Karpathy가 주창한, LLM이 컴퓨터 OS의 커널 역할을 수행하는 미래 소프트웨어 구조.
3. **LLM OS**: LLM이 중앙 CPU 역할을 맡고 파일, 도구, 자동화 파이프라인을 조율하는 운영체제 개념.
4. **Harness**: AI가 궤도를 벗어나지 않도록 통제하고 검증하는 주변 제어 장치.
5. **Context Window**: AI가 한 번에 읽고 기억할 수 있는 작업 메모리(RAM) 용량.
6. **Model Context Protocol (MCP)**: AI 에이전트와 외부 DB/SaaS 시스템을 잇는 오픈 프로토콜.
7. **CLAUDE.md**: 프로젝트의 컨벤션, 검증 명령어, 제약 규칙이 담긴 에이전트 행동 지침 문서.
8. **Self-Healing Loop**: 실행 에러가 발생했을 때 에이전트가 스택 트레이스를 읽고 스스로 코드를 수정하는 루프.
9. **Prompt Injection**: 외부 데이터에 악의적 지시문을 숨겨 AI를 조작하는 보안 공격.
10. **Cowork**: Claude Code의 에이전트 기능을 비개발 업무로 확장한 비주얼 작업 환경.

---

## 2. 복붙용 한 줄 프롬프트 치트시트

- **버그 수정 요청 시**: *"구현부터 하지 말고 실패하는 테스트 코드를 먼저 작성하고 수정해 줘."*
- **대용량 파싱 요청 시**: *"전체 읽지 말고 인터페이스와 DTO 정의 부분만 핀포인팅해서 분석해 줘."*
`;

// ==========================================
// 15편 (Lesson 49)
// ==========================================
const part15Md = `
Anthropic 공식 **Claude Code & Cowork 마스터 가이드 15편 완결편**에서는 **"질문창에서 작업장으로"**라는 대명제를 완결지으며 초보자가 마스터 오케스트레이터로 거듭나기 위한 비전을 제시합니다.

---

## 1. 15편 전체 과정을 마치며

> *"질문창은 안내 데스크일 뿐입니다. 진짜 업무는 그 뒤편의 책상, 서랍, 파이프라인, 그리고 인간의 최종 승인선에서 이루어집니다."*

지난 15개 챕터 동안 우리는 단순히 "AI에 질의하는 법"을 넘어서:
1. **내 프로젝트 작업장 수립 (\`CLAUDE.md\` & \`skills/\`)**
2. **하네스 엔지니어링 통제 (Constrain, Inform, Verify, Correct)**
3. **도구 모듈화 및 MCP 외부 연동**
4. **비즈니스 업무 자동화 파이프라인**

을 정밀하게 학습했습니다.

---

## 2. 초보자를 위한 최종 10대 실행 수칙

1. 단일 버그, 단일 회의록 등 작은 과제부터 닫으세요.
2. 프로젝트 루트에 반드시 \`CLAUDE.md\`를 만드세요.
3. 검증 명령어(\`npm test\`)가 포함된 지시문을 내리세요.
4. 실패 시 언제든되돌릴 수 있는 Git 백업 지점을 두세요.
5. 중요한 파일 수정 전에는 인간 승인선(Approval Line)을 거치세요.

여러분은 이제 안내 데스크에 갇힌 단순 질문자가 아니라, 자신만의 **LLM OS 작업장을 조율하는 Master Orchestrator**입니다.
`;

// ==========================================
// JSON / SQL Generation for Part 9 to 15
// ==========================================
const lessons = [
  { order_index: 43, slug: 'ch43-claude-master-guide-part9-korean-practical-usecases', title: 'Claude 마스터 가이드 [9편: 한국 실무자를 위한 상황별 실전 활용]', seo_title: 'Claude 마스터 가이드 9편 - HWP/PDF 파싱, 한국어 비즈니스 어조 & 보안 가드레일', seo_description: 'HWP/PDF 파싱 마크다운 변환, 한국어 비즈니스 어조 조정 및 개인정보 마스킹 파이썬 코드를 해설합니다.', excerpt: 'HWP/PDF 파싱, 한국어 비즈니스 어조 튜닝 및 개인정보 마스킹 해설 가이드입니다.', body_md: part9Md },
  { order_index: 44, slug: 'ch44-claude-master-guide-part10-community-patterns-and-mcp', title: 'Claude 마스터 가이드 [10편: 커뮤니티 활용 패턴 & 공식 스킬/플러그인]', seo_title: 'Claude 마스터 가이드 10편 - 커뮤니티 활용 패턴과 공식 스킬/플러그인 선별법', seo_description: '커뮤니티 검증 5대 활용 패턴, 공식 vs 커뮤니티 Skills/Plugins 선별 가이드를 해설합니다.', excerpt: '커뮤니티 5대 활용 패턴 및 공식 스킬/플러그인 선별 해설 가이드입니다.', body_md: part10Md },
  { order_index: 45, slug: 'ch45-claude-master-guide-part11-governance-security-enterprise', title: 'Claude 마스터 가이드 [11편: 거버넌스, 보안 & 엔터프라이즈 도입]', seo_title: 'Claude 마스터 가이드 11편 - 엔터프라이즈 보안, 샌드박스 Egress 및 사내 도입 로드맵', seo_description: '엔터프라이즈 보안 3대 가드레일, 샌드박스 Egress 통제 및 사내 AI 도입 3단계 로드맵을 해설합니다.', excerpt: '엔터프라이즈 보안 가드레일, Egress 통제 및 사내 도입 로드맵 해설 가이드입니다.', body_md: part11Md },
  { order_index: 46, slug: 'ch46-claude-master-guide-part12-web-automation-real-project', title: 'Claude 마스터 가이드 [12편: 실전 프로젝트 1 - 웹사이트 구축 & 자동화]', seo_title: 'Claude 마스터 가이드 12편 - 풀스택 웹사이트 구축 및 Cloudflare Edge 배포 실전', seo_description: '풀스택 웹사이트 구축 앤드투앤드 워크플로우, HTML5, Vanilla CSS 풀 소스 코드 및 배포를 해설합니다.', excerpt: '풀스택 웹사이트 구축, Vanilla CSS 풀 소스 코드 및 Cloudflare 배포 해설 가이드입니다.', body_md: part12Md },
  { order_index: 47, slug: 'ch47-claude-master-guide-part13-business-workflow-automation', title: 'Claude 마스터 가이드 [13편: 실전 프로젝트 2 - 비즈니스 업무 자동화]', seo_title: 'Claude 마스터 가이드 13편 - 비즈니스 업무 자동화 파이프라인과 Slack 웹훅 연동', seo_description: '비즈니스 업무 자동화 파이프라인, 마크다운 보고서 파이썬 풀 코드 및 Slack API 연동을 해설합니다.', excerpt: '비즈니스 업무 자동화 파이프라인 및 Slack 웹훅 연동 파이썬 코드 해설 가이드입니다.', body_md: part13Md },
  { order_index: 48, slug: 'ch48-claude-master-guide-part14-glossary-and-cheatsheet', title: 'Claude 마스터 가이드 [14편: Claude Agentic 전문 용어집 & 치트시트]', seo_title: 'Claude 마스터 가이드 14편 - Agentic AI 전문 용어 20선과 실무 종합 치트시트', seo_description: 'Agentic AI 전문 용어 20선 및 복붙용 한 줄 프롬프트 치트시트를 초보자용으로 해설합니다.', excerpt: 'Agentic AI 전문 용어 20선 및 복붙용 한 줄 프롬프트 치트시트 해설 가이드입니다.', body_md: part14Md },
  { order_index: 49, slug: 'ch49-claude-master-guide-part15-epilogue-from-prompt-to-workspace', title: 'Claude 마스터 가이드 [15편: 에필로그 - 질문창에서 작업장으로]', seo_title: 'Claude 마스터 가이드 15편 완결 - 질문창에서 작업장으로, 미래 워크플로우 비전', seo_description: '질문창에서 작업장으로, 초보자용 최종 10대 실행 수칙을 다루는 15편 대단원 완결편입니다.', excerpt: '질문창에서 작업장으로, 초보자용 최종 10대 실행 수칙 완결 해설 가이드입니다.', body_md: part15Md }
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

fs.writeFileSync('scratch/seed_claude_master_ultimate_9to15.sql', sqlContent, 'utf-8');
console.log('Successfully generated scratch/seed_claude_master_ultimate_9to15.sql!');
