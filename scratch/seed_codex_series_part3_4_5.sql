
-- Lesson 27 (Part 3)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', 'ch27-working-with-codex-part3-context-engineering-and-tdd', '27. Codex로 일하는 법 [3편: 문맥 엔지니어링, 자가 디버깅 & TDD]', '문맥 절삭 및 프루닝 기술, 최소 타격 버그 수정, AI 주도 TDD 릴레이, 안전한 리팩터링 및 마이그레이션 가이드입니다.', '
OpenAI Codex 실전 가이드 3편에서는 **문맥 엔지니어링 (Context Engineering)**, **최소 타격 버그 수정**, **테스트 주도 개발 (TDD)**, **안전한 리팩터링 & 마이그레이션**, **거대 코드베이스 길찾기**, 그리고 **반복 자가 치유 디버깅 루프**를 다룹니다.

---

## 1. 많이 붙이는 문맥과 줄여야 할 문맥 (Context Pruning & Trimming)

에이전트에게 관련 없는 커다란 파일이나 로그 10,000줄을 통째로 넘기면 토큰 소비가 폭발할 뿐만 아니라 모델의 추론 지능이 급격히 저하됩니다.

### 문맥 조절 3대 수칙
1. **필요 문맥 (Must Context)**: 현재 변경하려는 함수가 포함된 파일, 해당 함수의 타입 정의, 연관된 테스트 파일 1개
2. **절삭 대상 (Trim Targets)**: 바이너리 파일, 대용량 build/dist 출력물, 무관한 서브모듈의 구현체
3. **컨텍스트 프루닝 (Pruning)**: 에이전트 요청 시 `AGENTS.md`의 관련 가이드라인과 핑거프린팅된 관련 라우트 파일 2~3개만 제한적 핀포인팅 주입

### 문맥 프루닝 실전 팁
- 대용량 로그는 전체를 붙여넣지 말고 핵심 `Error Traceback` 상위 15줄만 추출하여 주입합니다.
- 복잡한 모듈 관계는 파일 전체 대신 `interface`나 `type` 선언부만 주입하는 것이 80% 이상의 토큰을 절약합니다.

---

## 2. 버그를 크게 건드리지 않고 바로잡는 법 (Minimal Impact Bug Fixing)

버그 하나를 고치려다 프로젝트 전체를 건드려 다른 10개의 새로운 버그를 만들어내는 현상(Regression Crash)을 예방하는 3단계 규칙입니다.

```
   ┌────────────────────────────────────────────────────────┐
   │             Minimal Impact Bug Fix Loop                │
   └───────────────────────────┬────────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
   1. Reproduce Test     2. Localized Fix      3. Regression Verification
  - 버그 재현 테스트 작성 - 최소 범위 라인 수정   - 전체 테스트 패스 검증
```

### 최소 타격 버그 수정 3단계
1. **버그 재현 테스트(Failing Test) 선제 작성**: 수정하기 전 버그가 발생하는 입력값을 넣어 반드시 실패하는 테스트 코드를 먼저 만듭니다.
2. **최소 범위 국소 수정 (Localized Fix)**: 에이전트의 수정 범위를 단 하나의 함수나 지정된 파일 영역으로 엄격히 제한합니다.
3. **기존 테스트 검증 (Regression Suite)**: 수정 후 전체 테스트 스위트를 돌려 기존 정상 기능들의 깨짐이 0건임을 확인합니다.

---

## 3. 테스트가 먼저 서야 수정이 흔들리지 않는다 (AI-Driven TDD)

AI 에이전트는 명확한 테스트 코드가 존재할 때 코드 작성 및 디버깅 정확도가 10배 이상 급상승합니다.

### TDD 릴레이 루프 (Red-Green-Refactor)
- **Red (실패하는 테스트)**: 에이전트에게 원하는 성공/실패 조건이 적힌 테스트 코드 작성을 먼저 지시합니다.
- **Green (최소 구현)**: 해당 테스트를 통과시키는 가장 단순하고 명확한 구현 코드 작성을 지시합니다.
- **Refactor (구조 개선)**: 테스트 통과 상태를 유지하며 코드의 가독성과 성능을 다듬습니다.

---

## 4. 리팩터링과 마이그레이션을 안전하게 여는 법

대규모 리팩터링 및 마이그레이션(예: JavaScript ➔ TypeScript, Express ➔ Cloudflare Workers)을 수행할 때는 **안전한 격리 지대**를 만들어야 합니다.

- **인터페이스 마스킹 (Interface Masking)**: 외부 API 계약을 유지한 상태에서 내부 구현만 단계적 교체
- **Git Worktree 활용**: 현재 작업 브랜치와 독립된 별도의 Git Worktree에서 마이그레이션 진행 후 검증 통과 시 PR 병합
- **점진적 마이그레이션 (Strangler Fig Pattern)**: 거대한 레거시를 한 번에 바꾸지 않고 라우트 단위로 하나씩 신규 시스템으로 이관

---

## 5. 거대 코드베이스에서 길을 잃지 않는 질문 기법

수만 줄에 달하는 프로젝트에서 에이전트에게 엉뚱한 수정을 방지하는 정밀 질문 패턴입니다.
- **"이 수정이 영향을 미치는 상위 호출자(Caller) 목록 3개만 나열해 줘."**
- **"현재 데이터베이스 스키마와 이 라우트의 DTO 정의 사이의 불일치가 있는지 파악해 줘."**

---

## 6. 어려운 문제를 반복 루프로 푸는 법 (Iterative Loop)

단번에 풀리지 않는 복잡한 결제 및 동시성 문제는 한 번의 대화로 해결하려 하지 말고, **Max 3-Step Iterative Loop**를 돌려 단계별로 좁혀나가는 것이 성공 열쇠입니다.
', '<p>OpenAI Codex 실전 가이드 3편에서는 <strong>문맥 엔지니어링 (Context Engineering)</strong>, <strong>최소 타격 버그 수정</strong>, <strong>테스트 주도 개발 (TDD)</strong>, <strong>안전한 리팩터링 &amp; 마이그레이션</strong>, <strong>거대 코드베이스 길찾기</strong>, 그리고 <strong>반복 자가 치유 디버깅 루프</strong>를 다룹니다.</p>
<hr>
<h2>1. 많이 붙이는 문맥과 줄여야 할 문맥 (Context Pruning &amp; Trimming)</h2>
<p>에이전트에게 관련 없는 커다란 파일이나 로그 10,000줄을 통째로 넘기면 토큰 소비가 폭발할 뿐만 아니라 모델의 추론 지능이 급격히 저하됩니다.</p>
<h3>문맥 조절 3대 수칙</h3>
<ol>
<li><strong>필요 문맥 (Must Context)</strong>: 현재 변경하려는 함수가 포함된 파일, 해당 함수의 타입 정의, 연관된 테스트 파일 1개</li>
<li><strong>절삭 대상 (Trim Targets)</strong>: 바이너리 파일, 대용량 build/dist 출력물, 무관한 서브모듈의 구현체</li>
<li><strong>컨텍스트 프루닝 (Pruning)</strong>: 에이전트 요청 시 <code>AGENTS.md</code>의 관련 가이드라인과 핑거프린팅된 관련 라우트 파일 2~3개만 제한적 핀포인팅 주입</li>
</ol>
<h3>문맥 프루닝 실전 팁</h3>
<ul>
<li>대용량 로그는 전체를 붙여넣지 말고 핵심 <code>Error Traceback</code> 상위 15줄만 추출하여 주입합니다.</li>
<li>복잡한 모듈 관계는 파일 전체 대신 <code>interface</code>나 <code>type</code> 선언부만 주입하는 것이 80% 이상의 토큰을 절약합니다.</li>
</ul>
<hr>
<h2>2. 버그를 크게 건드리지 않고 바로잡는 법 (Minimal Impact Bug Fixing)</h2>
<p>버그 하나를 고치려다 프로젝트 전체를 건드려 다른 10개의 새로운 버그를 만들어내는 현상(Regression Crash)을 예방하는 3단계 규칙입니다.</p>
<pre><code>   ┌────────────────────────────────────────────────────────┐
   │             Minimal Impact Bug Fix Loop                │
   └───────────────────────────┬────────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
   1. Reproduce Test     2. Localized Fix      3. Regression Verification
  - 버그 재현 테스트 작성 - 최소 범위 라인 수정   - 전체 테스트 패스 검증
</code></pre>
<h3>최소 타격 버그 수정 3단계</h3>
<ol>
<li><strong>버그 재현 테스트(Failing Test) 선제 작성</strong>: 수정하기 전 버그가 발생하는 입력값을 넣어 반드시 실패하는 테스트 코드를 먼저 만듭니다.</li>
<li><strong>최소 범위 국소 수정 (Localized Fix)</strong>: 에이전트의 수정 범위를 단 하나의 함수나 지정된 파일 영역으로 엄격히 제한합니다.</li>
<li><strong>기존 테스트 검증 (Regression Suite)</strong>: 수정 후 전체 테스트 스위트를 돌려 기존 정상 기능들의 깨짐이 0건임을 확인합니다.</li>
</ol>
<hr>
<h2>3. 테스트가 먼저 서야 수정이 흔들리지 않는다 (AI-Driven TDD)</h2>
<p>AI 에이전트는 명확한 테스트 코드가 존재할 때 코드 작성 및 디버깅 정확도가 10배 이상 급상승합니다.</p>
<h3>TDD 릴레이 루프 (Red-Green-Refactor)</h3>
<ul>
<li><strong>Red (실패하는 테스트)</strong>: 에이전트에게 원하는 성공/실패 조건이 적힌 테스트 코드 작성을 먼저 지시합니다.</li>
<li><strong>Green (최소 구현)</strong>: 해당 테스트를 통과시키는 가장 단순하고 명확한 구현 코드 작성을 지시합니다.</li>
<li><strong>Refactor (구조 개선)</strong>: 테스트 통과 상태를 유지하며 코드의 가독성과 성능을 다듬습니다.</li>
</ul>
<hr>
<h2>4. 리팩터링과 마이그레이션을 안전하게 여는 법</h2>
<p>대규모 리팩터링 및 마이그레이션(예: JavaScript ➔ TypeScript, Express ➔ Cloudflare Workers)을 수행할 때는 <strong>안전한 격리 지대</strong>를 만들어야 합니다.</p>
<ul>
<li><strong>인터페이스 마스킹 (Interface Masking)</strong>: 외부 API 계약을 유지한 상태에서 내부 구현만 단계적 교체</li>
<li><strong>Git Worktree 활용</strong>: 현재 작업 브랜치와 독립된 별도의 Git Worktree에서 마이그레이션 진행 후 검증 통과 시 PR 병합</li>
<li><strong>점진적 마이그레이션 (Strangler Fig Pattern)</strong>: 거대한 레거시를 한 번에 바꾸지 않고 라우트 단위로 하나씩 신규 시스템으로 이관</li>
</ul>
<hr>
<h2>5. 거대 코드베이스에서 길을 잃지 않는 질문 기법</h2>
<p>수만 줄에 달하는 프로젝트에서 에이전트에게 엉뚱한 수정을 방지하는 정밀 질문 패턴입니다.</p>
<ul>
<li><strong>&quot;이 수정이 영향을 미치는 상위 호출자(Caller) 목록 3개만 나열해 줘.&quot;</strong></li>
<li><strong>&quot;현재 데이터베이스 스키마와 이 라우트의 DTO 정의 사이의 불일치가 있는지 파악해 줘.&quot;</strong></li>
</ul>
<hr>
<h2>6. 어려운 문제를 반복 루프로 푸는 법 (Iterative Loop)</h2>
<p>단번에 풀리지 않는 복잡한 결제 및 동시성 문제는 한 번의 대화로 해결하려 하지 말고, <strong>Max 3-Step Iterative Loop</strong>를 돌려 단계별로 좁혀나가는 것이 성공 열쇠입니다.</p>
', 'published', 'Codex로 일하는 법 3편 - 문맥 엔지니어링, 최소 타격 버그 수정 및 TDD', '문맥 절삭 및 프루닝 기술, 최소 타격 버그 수정, AI 주도 TDD 릴레이, 안전한 리팩터링 및 대형 저장소 탐색을 배웁니다.', 27, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 28 (Part 4)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', 'ch28-working-with-codex-part4-multimodal-ui-and-figma', '28. Codex로 일하는 법 [4편: 멀티모달 UI, Figma 연동 & Visual Verification]', '스크린샷을 코드 변환하는 Image-to-Code, Visual Verification 루프, Figma 디자인 토큰 동기화 및 StudyFlow E2E 사례 가이드입니다.', '
Codex 실전 가이드 4편에서는 **스크린샷 변환 멀티모달**, **시각적 검증 (Visual Verification)**, **Figma 토큰 동기화**, **웹 접근성 수칙**, 그리고 **StudyFlow E2E 구현 사례**를 다룹니다.

---

## 1. 스크린샷 한 장을 화면 설계로 바꾸는 법 (Image-to-Code)

모바일 앱 mock-up 이미지나 손으로 그린 와이어프레임 스크린샷을 Codex 멀티모달 프롬프트에 주입하여 즉시 HTML/CSS 및 컴포넌트로 변환하는 기법입니다.

### Image-to-Code 프롬프트 구조 템플릿
```markdown
[Image Analysis & Code Generation Request]
1. Layout Structure:
   - Header: 로고, 네비게이션 메인 탭 4개, 프로필 아바타
   - Hero Section: 좌측 카피 문구, 우측 터미널 카드 뷰
   - Bento Grid: 3열 카드 반응형 Grid 레이아웃
2. Style Specification:
   - Dark theme using HSL color tokens (bg: #0a0908, accent: #ff6b35)
   - Typography: Bricolage Grotesque display font
3. Interactive Micro-animations:
   - Card hover: -5px translateY with 0 20px 40px rgba(0,0,0,0.4) box-shadow
```

---

## 2. 만든 화면을 눈으로 다시 검증하는 법 (Visual Verification)

AI가 코드를 작성했더라도 렌더링된 실제 화면이 폰트 깨짐이나 반응형 찌그러짐을 겪지 않는지 **Visual Verification Loop**를 구동해야 합니다.

### Playwright 기반 시각적 렌더링 캡처 스크립트 예시
```javascript
// scripts/visual-verify.js
import { chromium } from ''playwright'';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(''http://localhost:8787'');
  
  // Desktop view screenshot
  await page.screenshot({ path: ''artifacts/screenshot-desktop.png'', fullPage: true });
  
  // Mobile view screenshot
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: ''artifacts/screenshot-mobile.png'', fullPage: true });
  
  await browser.close();
  console.log(''Visual screenshots captured in artifacts/ directory!'');
})();
```

- **Headless Browser Screenshot**: Playwright / Puppeteer를 통해 1920x1080 데스크톱 뷰와 375x812 모바일 뷰 스크린샷 자동 캡처
- **Diff Image Audit**: 디자인 원본 이미지와 캡처된 스크린샷을 시각적으로 비교 분석하여 픽셀 오차 및 여백 바로잡기

---

## 3. Figma와 코드를 왕복하며 맞추는 법 (Figma Design Sync)

Figma의 디자인 토큰(Color, Typography, Spacing)과 코드베이스의 CSS 변수를 MCP(Model Context Protocol) 또는 API로 동기화합니다.

### Figma Tokens ➔ Vanilla CSS 변수 동기화 예시
```css
:root {
  /* Figma Color Tokens */
  --brand-primary: #ff6b35;
  --brand-secondary: #f2c879;
  --brand-bg: #0a0908;
  --brand-surface: #16130f;
  
  /* Figma Spacing & Radius Tokens */
  --radius-lg: 1.5rem;
  --radius-pill: 100px;
  --spacing-container: 5vw;
}
```

- **Design System Tokens**: Figma Variables ➔ CSS Variables (`--accent: #ff6b35`, `--radius: 18px`) 자동 매핑
- **Component Parity**: Figma 컴포넌트 이름과 React/HTML 클래스명을 1:1 매칭하여 디자인 불일치 예방

---

## 4. 웹 접근성(a11y)과 디자인 시스템 준수 수칙

- **Semantic HTML**: `<div>` 남발을 지양하고 `<main>`, `<section>`, `<article>`, `<nav>` 정통 태그 사용
- **Keyboard Navigation**: 모든 버튼 및 링크에 명확한 `:focus-visible` 아웃라인 표시
- **Color Contrast**: 텍스트와 배경 색상 대비 비율 최소 4.5:1 이상 유지
- **Screen Reader Support**: 모든 아이콘 버튼에 `aria-label` 명시 지정

---

## 5. StudyFlow E2E 구축 실전 사례

학습 관리 플랫폼 **StudyFlow**의 대시보드, 강좌 목록, 실시간 출석 현황 컴포넌트를 앤드투앤드(E2E)로 완결짓는 실전 워크플로우입니다.
- **Data Layer**: Cloudflare D1 수강생 테이블 생성
- **API Layer**: Workers JSON API 엔드포인트 구현
- **UI Layer**: Vanilla CSS 글래스모피즘 인터페이스 결합
', '<p>Codex 실전 가이드 4편에서는 <strong>스크린샷 변환 멀티모달</strong>, <strong>시각적 검증 (Visual Verification)</strong>, <strong>Figma 토큰 동기화</strong>, <strong>웹 접근성 수칙</strong>, 그리고 <strong>StudyFlow E2E 구현 사례</strong>를 다룹니다.</p>
<hr>
<h2>1. 스크린샷 한 장을 화면 설계로 바꾸는 법 (Image-to-Code)</h2>
<p>모바일 앱 mock-up 이미지나 손으로 그린 와이어프레임 스크린샷을 Codex 멀티모달 프롬프트에 주입하여 즉시 HTML/CSS 및 컴포넌트로 변환하는 기법입니다.</p>
<h3>Image-to-Code 프롬프트 구조 템플릿</h3>
<pre><code class="language-markdown">[Image Analysis &amp; Code Generation Request]
1. Layout Structure:
   - Header: 로고, 네비게이션 메인 탭 4개, 프로필 아바타
   - Hero Section: 좌측 카피 문구, 우측 터미널 카드 뷰
   - Bento Grid: 3열 카드 반응형 Grid 레이아웃
2. Style Specification:
   - Dark theme using HSL color tokens (bg: #0a0908, accent: #ff6b35)
   - Typography: Bricolage Grotesque display font
3. Interactive Micro-animations:
   - Card hover: -5px translateY with 0 20px 40px rgba(0,0,0,0.4) box-shadow
</code></pre>
<hr>
<h2>2. 만든 화면을 눈으로 다시 검증하는 법 (Visual Verification)</h2>
<p>AI가 코드를 작성했더라도 렌더링된 실제 화면이 폰트 깨짐이나 반응형 찌그러짐을 겪지 않는지 <strong>Visual Verification Loop</strong>를 구동해야 합니다.</p>
<h3>Playwright 기반 시각적 렌더링 캡처 스크립트 예시</h3>
<pre><code class="language-javascript">// scripts/visual-verify.js
import { chromium } from &#39;playwright&#39;;

(async () =&gt; {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(&#39;http://localhost:8787&#39;);
  
  // Desktop view screenshot
  await page.screenshot({ path: &#39;artifacts/screenshot-desktop.png&#39;, fullPage: true });
  
  // Mobile view screenshot
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: &#39;artifacts/screenshot-mobile.png&#39;, fullPage: true });
  
  await browser.close();
  console.log(&#39;Visual screenshots captured in artifacts/ directory!&#39;);
})();
</code></pre>
<ul>
<li><strong>Headless Browser Screenshot</strong>: Playwright / Puppeteer를 통해 1920x1080 데스크톱 뷰와 375x812 모바일 뷰 스크린샷 자동 캡처</li>
<li><strong>Diff Image Audit</strong>: 디자인 원본 이미지와 캡처된 스크린샷을 시각적으로 비교 분석하여 픽셀 오차 및 여백 바로잡기</li>
</ul>
<hr>
<h2>3. Figma와 코드를 왕복하며 맞추는 법 (Figma Design Sync)</h2>
<p>Figma의 디자인 토큰(Color, Typography, Spacing)과 코드베이스의 CSS 변수를 MCP(Model Context Protocol) 또는 API로 동기화합니다.</p>
<h3>Figma Tokens ➔ Vanilla CSS 변수 동기화 예시</h3>
<pre><code class="language-css">:root {
  /* Figma Color Tokens */
  --brand-primary: #ff6b35;
  --brand-secondary: #f2c879;
  --brand-bg: #0a0908;
  --brand-surface: #16130f;
  
  /* Figma Spacing &amp; Radius Tokens */
  --radius-lg: 1.5rem;
  --radius-pill: 100px;
  --spacing-container: 5vw;
}
</code></pre>
<ul>
<li><strong>Design System Tokens</strong>: Figma Variables ➔ CSS Variables (<code>--accent: #ff6b35</code>, <code>--radius: 18px</code>) 자동 매핑</li>
<li><strong>Component Parity</strong>: Figma 컴포넌트 이름과 React/HTML 클래스명을 1:1 매칭하여 디자인 불일치 예방</li>
</ul>
<hr>
<h2>4. 웹 접근성(a11y)과 디자인 시스템 준수 수칙</h2>
<ul>
<li><strong>Semantic HTML</strong>: <code>&lt;div&gt;</code> 남발을 지양하고 <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code> 정통 태그 사용</li>
<li><strong>Keyboard Navigation</strong>: 모든 버튼 및 링크에 명확한 <code>:focus-visible</code> 아웃라인 표시</li>
<li><strong>Color Contrast</strong>: 텍스트와 배경 색상 대비 비율 최소 4.5:1 이상 유지</li>
<li><strong>Screen Reader Support</strong>: 모든 아이콘 버튼에 <code>aria-label</code> 명시 지정</li>
</ul>
<hr>
<h2>5. StudyFlow E2E 구축 실전 사례</h2>
<p>학습 관리 플랫폼 <strong>StudyFlow</strong>의 대시보드, 강좌 목록, 실시간 출석 현황 컴포넌트를 앤드투앤드(E2E)로 완결짓는 실전 워크플로우입니다.</p>
<ul>
<li><strong>Data Layer</strong>: Cloudflare D1 수강생 테이블 생성</li>
<li><strong>API Layer</strong>: Workers JSON API 엔드포인트 구현</li>
<li><strong>UI Layer</strong>: Vanilla CSS 글래스모피즘 인터페이스 결합</li>
</ul>
', 'published', 'Codex로 일하는 법 4편 - 스크린샷 변환, Visual Verification & Figma 동기화', '스크린샷을 코드 변환하는 Image-to-Code 프롬프트, 시각적 검증(Visual Verification), Figma 토큰 MCP 동기화 및 StudyFlow E2E 구축을 배웁니다.', 28, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;

-- Lesson 29 (Part 5)
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education', 'ai', 'ch29-working-with-codex-part5-chatgpt-app-swiftui-and-games', '29. Codex로 일하는 법 [5편: ChatGPT App, SwiftUI & 브라우저 게임]', 'ChatGPT Canvas App 도구 메타데이터, 30분 SwiftUI iOS 앱 구축 루프, HTML5 Canvas/WebGL 미니게임 멀티모달 제작 가이드입니다.', '
Codex 실전 가이드 5편에서는 **ChatGPT 대화형 앱 개발**, **30분 SwiftUI iOS 앱 구축**, 그리고 **브라우저 Canvas/WebGL 멀티모달 게임 제작**을 다룹니다.

---

## 1. ChatGPT 안에서 앱을 만드는 실제 순서 (ChatGPT Canvas App)

ChatGPT 앱은 웹 화면의 단순 축소가 아니라 **"도구를 안전하게 대화형으로 호출하는 인터랙티브 제품"**입니다.

### ChatGPT 앱 4대 핵심 아키텍처
```
  User Chat Request ──> ChatGPT App ──> Tool Metadata ──> Custom MCP API
```

### OpenAPI / MCP 도구 스키마 명세 예시
```json
{
  "name": "get_user_schedule",
  "description": "사용자의 이번 주 스터디 및 수업 일정을 조회합니다.",
  "parameters": {
    "type": "object",
    "properties": {
      "user_id": { "type": "string", "description": "사용자 식별 ID" },
      "start_date": { "type": "string", "format": "date", "description": "조회 시작일" }
    },
    "required": ["user_id"]
  }
}
```

1. **도구 계약 (Tool Contract)**: 대화 중 언제 어떤 도구(Tool)를 호출할지 메타데이터 명세
2. **발견 가능성 (Discovery)**: 사용자의 자연어 의도에서 도구가 명확히 선택되도록 이름과 설명 정의
3. **권한 경계 (Auth Boundary)**: 데이터 읽기(Read)는 즉시 허용, 쓰기/상태 변경(Write)은 사용자 명시 승인 강제
4. **거절 케이스 설계 (Graceful Decline)**: 처리할 수 없는 요청에 대해 억지로 환각 답변을 내지 않고 명확히 거절 처리

---

## 2. SwiftUI로 애플 앱을 세우는 가장 짧은 루프 (30-Min iOS Loop)

macOS/iOS SwiftUI 애플리케이션의 빠른 스캐폴딩과 뷰 컴포넌트 결합 루프입니다.

### 30분 SwiftUI 메인 대시보드 뷰 코드 구조 예시
```swift
import SwiftUI

struct StudyFlowDashboardView: View {
    @State private var lessons: [Lesson] = []
    
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    Text("StudyFlow Dashboard")
                        .font(.largeTitle)
                        .bold()
                    
                    ForEach(lessons) { lesson in
                        LessonCardView(lesson: lesson)
                    }
                }
                .padding()
            }
            .navigationTitle("내 강좌 목록")
        }
    }
}
```

- **Preview State First**: `#Preview` 마크로 컴포넌트를 즉시 시각적으로 확인하며 뷰 작성
- **State & Binding Architecture**: `@State`, `@Binding`, `@Observable` 데이터 흐름 구축
- **Navigation Stack**: iOS 16+ `NavigationStack` 및 `navigationDestination` 매핑

---

## 3. 브라우저 게임을 멀티모달로 만드는 과정 (WebGL / Canvas Game)

HTML5 Canvas 및 WebGL 기반의 브라우저 미니 게임(예: 벽돌깨기, 슈팅 게임, 퍼즐)을 멀티모달 프롬프트로 시각화하며 구축하는 단계별 방법론입니다.

### Canvas 벽돌깨기 게임 루프 예시
```javascript
const canvas = document.getElementById(''gameCanvas'');
const ctx = canvas.getContext(''2d'');

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = ''#ff6b35'';
    ctx.fill();
    ctx.closePath();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    requestAnimationFrame(gameLoop);
}
gameLoop();
```

### 멀티모달 게임 개발 3단계
1. **Game Loop & Canvas Context**: `requestAnimationFrame` 기반 프레임 루프 및 2D Canvas 컨텍스트 초기화
2. **Physics & Collision Detection**: AABB 박스 충돌 판정 및 속도 벡터 연산 구현
3. **Asset & UI Overlay**: 점수판, 게임오버 모달 및 사운드 효과 결합
', '<p>Codex 실전 가이드 5편에서는 <strong>ChatGPT 대화형 앱 개발</strong>, <strong>30분 SwiftUI iOS 앱 구축</strong>, 그리고 <strong>브라우저 Canvas/WebGL 멀티모달 게임 제작</strong>을 다룹니다.</p>
<hr>
<h2>1. ChatGPT 안에서 앱을 만드는 실제 순서 (ChatGPT Canvas App)</h2>
<p>ChatGPT 앱은 웹 화면의 단순 축소가 아니라 **&quot;도구를 안전하게 대화형으로 호출하는 인터랙티브 제품&quot;**입니다.</p>
<h3>ChatGPT 앱 4대 핵심 아키텍처</h3>
<pre><code>  User Chat Request ──&gt; ChatGPT App ──&gt; Tool Metadata ──&gt; Custom MCP API
</code></pre>
<h3>OpenAPI / MCP 도구 스키마 명세 예시</h3>
<pre><code class="language-json">{
  &quot;name&quot;: &quot;get_user_schedule&quot;,
  &quot;description&quot;: &quot;사용자의 이번 주 스터디 및 수업 일정을 조회합니다.&quot;,
  &quot;parameters&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;properties&quot;: {
      &quot;user_id&quot;: { &quot;type&quot;: &quot;string&quot;, &quot;description&quot;: &quot;사용자 식별 ID&quot; },
      &quot;start_date&quot;: { &quot;type&quot;: &quot;string&quot;, &quot;format&quot;: &quot;date&quot;, &quot;description&quot;: &quot;조회 시작일&quot; }
    },
    &quot;required&quot;: [&quot;user_id&quot;]
  }
}
</code></pre>
<ol>
<li><strong>도구 계약 (Tool Contract)</strong>: 대화 중 언제 어떤 도구(Tool)를 호출할지 메타데이터 명세</li>
<li><strong>발견 가능성 (Discovery)</strong>: 사용자의 자연어 의도에서 도구가 명확히 선택되도록 이름과 설명 정의</li>
<li><strong>권한 경계 (Auth Boundary)</strong>: 데이터 읽기(Read)는 즉시 허용, 쓰기/상태 변경(Write)은 사용자 명시 승인 강제</li>
<li><strong>거절 케이스 설계 (Graceful Decline)</strong>: 처리할 수 없는 요청에 대해 억지로 환각 답변을 내지 않고 명확히 거절 처리</li>
</ol>
<hr>
<h2>2. SwiftUI로 애플 앱을 세우는 가장 짧은 루프 (30-Min iOS Loop)</h2>
<p>macOS/iOS SwiftUI 애플리케이션의 빠른 스캐폴딩과 뷰 컴포넌트 결합 루프입니다.</p>
<h3>30분 SwiftUI 메인 대시보드 뷰 코드 구조 예시</h3>
<pre><code class="language-swift">import SwiftUI

struct StudyFlowDashboardView: View {
    @State private var lessons: [Lesson] = []
    
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    Text(&quot;StudyFlow Dashboard&quot;)
                        .font(.largeTitle)
                        .bold()
                    
                    ForEach(lessons) { lesson in
                        LessonCardView(lesson: lesson)
                    }
                }
                .padding()
            }
            .navigationTitle(&quot;내 강좌 목록&quot;)
        }
    }
}
</code></pre>
<ul>
<li><strong>Preview State First</strong>: <code>#Preview</code> 마크로 컴포넌트를 즉시 시각적으로 확인하며 뷰 작성</li>
<li><strong>State &amp; Binding Architecture</strong>: <code>@State</code>, <code>@Binding</code>, <code>@Observable</code> 데이터 흐름 구축</li>
<li><strong>Navigation Stack</strong>: iOS 16+ <code>NavigationStack</code> 및 <code>navigationDestination</code> 매핑</li>
</ul>
<hr>
<h2>3. 브라우저 게임을 멀티모달로 만드는 과정 (WebGL / Canvas Game)</h2>
<p>HTML5 Canvas 및 WebGL 기반의 브라우저 미니 게임(예: 벽돌깨기, 슈팅 게임, 퍼즐)을 멀티모달 프롬프트로 시각화하며 구축하는 단계별 방법론입니다.</p>
<h3>Canvas 벽돌깨기 게임 루프 예시</h3>
<pre><code class="language-javascript">const canvas = document.getElementById(&#39;gameCanvas&#39;);
const ctx = canvas.getContext(&#39;2d&#39;);

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = &#39;#ff6b35&#39;;
    ctx.fill();
    ctx.closePath();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    requestAnimationFrame(gameLoop);
}
gameLoop();
</code></pre>
<h3>멀티모달 게임 개발 3단계</h3>
<ol>
<li><strong>Game Loop &amp; Canvas Context</strong>: <code>requestAnimationFrame</code> 기반 프레임 루프 및 2D Canvas 컨텍스트 초기화</li>
<li><strong>Physics &amp; Collision Detection</strong>: AABB 박스 충돌 판정 및 속도 벡터 연산 구현</li>
<li><strong>Asset &amp; UI Overlay</strong>: 점수판, 게임오버 모달 및 사운드 효과 결합</li>
</ol>
', 'published', 'Codex로 일하는 법 5편 - ChatGPT 대화형 앱, SwiftUI iOS 앱 & 멀티모달 게임', 'ChatGPT App 도구 계약과 발견 가능성, 30분 SwiftUI iOS 앱 뼈대 구축, 브라우저 Canvas/WebGL 멀티모달 게임 제작법을 배웁니다.', 29, '2026-08-03 00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content_md = EXCLUDED.content_md, content_html = EXCLUDED.content_html, status = EXCLUDED.status, seo_title = EXCLUDED.seo_title, seo_description = EXCLUDED.seo_description, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP;
