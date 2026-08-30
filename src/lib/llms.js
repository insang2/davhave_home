import { CATEGORIES } from "./education-render.js";
import { STACK_DATA } from "./stack-data.js";
import { PHILOSOPHY_DATA } from "./philosophy-data.js";
import { SERVICES_DATA } from "./services-data.js";

function section(title, lines) {
  if (!lines || !lines.length) return "";
  return `\n## ${title}\n\n${lines.join("\n")}\n`;
}

export function renderLlms({ blogPosts = [], educationPosts = [], projects = [] }) {
  const blogLines = blogPosts
    .slice(0, 30)
    .map((p) => `- [${p.title}](https://davhave.com/blog/${p.slug}) — ${p.excerpt || ""}`.trim());

  const eduByCategory = {};
  for (const p of educationPosts) {
    if (!eduByCategory[p.category]) eduByCategory[p.category] = [];
    eduByCategory[p.category].push(p);
  }
  const eduLines = Object.entries(CATEGORIES).flatMap(([key, cat]) => {
    const lessons = (eduByCategory[key] || []).sort((a, b) => a.order_index - b.order_index);
    if (!lessons.length) return [];
    return [
      `- **${cat.label}** (${lessons.length}개 레슨): https://davhave.com/education/${key}`,
      ...lessons.map((l) => `  - [${l.title}](https://davhave.com/education/${key}/${l.slug})`),
    ];
  });

  const portfolioLines = [
    `- **KCT 한국건설트레이딩 실리콘 B2B 플랫폼** (https://davhave.com/projects/kct) — Dow Chemical 기준 6대 실리콘 공학 계산기(소요량·프라이머·풍하중 구조바이트·자중지지·글루라인표·ASTM 열팽창변위), 17대 산업군 52종 스펙 DB, 색상칩 시편관, TDS/MSDS 기술자료 센터 통합 구축`,
    `- **DAVHAVE Projects 허브** (https://davhave.com/projects) — B2B 솔루션, 모바일 앱, AI 플랫폼, 에듀테크 통합 포트폴리오 쇼케이스`,
    ...projects.map(
      (p) => `- **${p.clientName}** (${p.siteUrl}) — ${p.summary} 상세: https://davhave.com/portfolio/${p.slug}`
    )
  ];

  const stackLines = Object.entries(STACK_DATA).map(([slug, s]) => 
    `- **${s.name}** (${s.category}): ${s.summary} — https://davhave.com/stack/${slug}`
  );

  return `# DAVHAVE (davhave.com) — Oscar Lee

> 모바일 앱·모바일 웹·AI 프로그래밍 & B2B 엔지니어링 플랫폼 개발 스튜디오

DAVHAVE는 풀스택 엔지니어 Oscar Lee가 운영하는 소프트웨어 개발 스튜디오입니다.
실제 사용자의 문제를 해결하고, 비즈니스 가치를 극대화하는 고성능 모바일 앱(iOS/Android), 클라우드 엣지 기반 웹 플랫폼, LLM·AI 연동 인텔리전트 소프트웨어를 전문으로 설계 및 개발합니다.

- **대표 엔지니어**: Oscar Lee (useapp.davhave@gmail.com)
- **공식 웹사이트**: https://davhave.com/
- **프로젝트 허브**: https://davhave.com/projects (숏링크: /pjt)
- **전체 문서 마크다운 덤프 (Full RAG Feed)**: https://davhave.com/llms-full.txt

---

## 핵심 서비스 분야 (Core Services)

### 1. 모바일 앱 개발 (Mobile App Development)
- iOS 및 Android 동시 지원 크로스플랫폼 앱 설계 및 구현
- Flutter, React Native 기반 60fps 네이티브 퍼포먼스 및 오프라인 퍼스트 아키텍처
- 인앱결제(IAP), 소셜로그인, 푸시알림, 실시간 데이터 동기화
- 상세: https://davhave.com/services/mobile-app

### 2. 고성능 모바일 웹 & 플랫폼 개발 (Web Platform Development)
- Cloudflare Workers 엣지 서버리스 기반 초저지연(TTFB < 50ms) 웹 애플리케이션
- 반응형 Bento Grid UI, PWA(프로그레시브 웹앱), SEO/AEO 시맨틱 최적화
- 상세: https://davhave.com/services/mobile-web

### 3. AI 프로그래밍 & LLM 솔루션 (AI Engineering)
- Claude API, OpenAI GPT, Google Gemini 기반 맞춤형 AI 에이전트 및 RAG 시스템 구축
- 도메인 특화 지능형 챗봇, 자동화 워크플로우, 프롬프트 엔지니어링
- 상세: https://davhave.com/services/ai-programming

### 4. B2B 엔지니어링 플랫폼 & 계산기 솔루션
- 산업용 규격 데이터베이스, 실시간 공학 계산기 엔진(풍하중 구조해석, 소요량 산출 등) 개발
- 대표 구축 사례: 한국건설트레이딩(KCT) 6대 실리콘 공학 계산기 허브

---

## 대표 프로젝트 및 구축 사례 (Projects)

${portfolioLines.join("\n")}

---

## 기술 스택 (Technology Stack)

${stackLines.join("\n")}
${section("교육 콘텐츠 (Education Hub)", eduLines.length ? eduLines : ["https://davhave.com/education"])}
${section("기술 블로그 (Blog Posts)", blogLines.length ? blogLines : ["https://davhave.com/blog"])}
## 자주 묻는 질문 (FAQ)

- **Q: 프로젝트 의뢰 및 개발 기간은 어떻게 되나요?**
  - A: 요구사항 분석 후 24시간 내 기술 명세 및 견적서를 회신하며, MVP 기준 통상 2~4주 내 엣지 서버리스 또는 앱스토어 배포가 완료됩니다.
- **Q: Cloudflare 엣지 아키텍처의 장점은 무엇인가요?**
  - A: 글로벌 300+개 도시 엣지 네트워크를 통해 서버 비용을 90% 이상 절감하면서도 50ms 미만의 글로벌 초저지연 응답을 제공합니다.
- **Q: 문의 및 기술 상담 채널은 어디인가요?**
  - A: 이메일 \`useapp.davhave@gmail.com\` 또는 웹사이트 견적 폼을 통해 연중무휴 24시간 접수 가능합니다.
`;
}

export function renderLlmsFull({ blogPosts = [], educationPosts = [], projects = [] }) {
  const llmsBase = renderLlms({ blogPosts, educationPosts, projects });

  const philosophyLines = Object.entries(PHILOSOPHY_DATA).map(([slug, p]) => `
### ${p.title} (${slug})
- **슬로건**: ${p.tagline}
- **철학 내용**: ${p.description}
- 상세 URL: https://davhave.com/philosophy/${slug}
`).join("\n");

  const serviceDetails = Object.entries(SERVICES_DATA).map(([slug, s]) => `
### ${s.title} (${slug})
- **요약**: ${s.summary}
- **주요 특징**: ${s.features ? s.features.join(", ") : ""}
- **타겟 고객**: ${s.target || "스타트업, 중견기업, 크리에이터"}
- 상세 URL: https://davhave.com/services/${slug}
`).join("\n");

  return `${llmsBase}

---

# 📚 DAVHAVE 전체 기술 및 엔지니어링 상세 가이드 (Full Knowledge Dump)

## 1. 개발 철학 (Engineering Philosophy)
${philosophyLines}

## 2. 서비스 상세 명세 (Service Specifications)
${serviceDetails}

## 3. 대표 구축 사례: KCT 실리콘 공학 계산기 6대 핵심 모듈 명세
1. **실란트 소요량 계산기 (Sealant Usage)**: 조인트 폭(W, mm) × 깊이(D, mm) × 시공길이(L, m) × 손실률(5~20%) 기반 총 소요 체적(L), 300ml 카트리지/500ml 소시지 필요 수량 및 권장 백업재 직경(폭 +25%) 산출.
2. **프라이머 도포량 계산기 (Primer Usage)**: 다공성(5m²/L) vs 비다공성(10m²/L) 바탕면 및 도포 폭/길이 기준 필요 프라이머 부피(L)와 500ml 캔 수량 산출.
3. **풍하중 구조 바이트 계산기 (Structural Bite - ASTM C1401)**: 설계 풍하중(kPa) 및 패널 단변 길이(Short Span, mm)에 대해 Dow 표준 허용 동적 인장응력 140 kPa(20 psi)를 적용한 최소 구조 접착 폭(Bite, mm, 최소 6.4mm 이상) 산출 공식: Bite = (ShortSpan * Windload) / (2 * 140 kPa).
4. **패널 자중 지지 계산기 (Deadload Calculator)**: 유리 밀도(2500kg/m³)와 지속하중 허용 전단응력 7.0 kPa(1.0 psi)를 적용하여 자중 지지를 위한 최소 수직 접착 연장(Contact Length, m) 계산.
5. **글루라인 두께 규격표 (Glueline Table - ASTM C1401)**: 구조 바이트 6.4mm~31.8mm에 대한 최소/최대 Glueline 두께 매핑표(6.4mm~12.7mm).
6. **ASTM C1472 열팽창 변위 및 조인트폭 계산기 (Thermal Movement)**: 이종 자재(알루미늄 23×10⁻⁶, 유리 9×10⁻⁶, 콘크리트 12×10⁻⁶ 등) 간 극한 온도차(ΔT)에 따른 상대 열팽창량(ΔL) 및 실란트 신축능력(±50%, ±25%) 기반 필수 최소 조인트 폭 산출.

## 4. 라이선스 및 정책
- 사이트 내 모든 콘텐츠는 DAVHAVE에 저작권이 있으며, AI 검색 엔진 및 LLM 인덱싱을 전면 허용합니다.
- 문의처: useapp.davhave@gmail.com
`;
}
