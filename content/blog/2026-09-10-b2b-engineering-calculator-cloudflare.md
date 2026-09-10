---
title: Cloudflare Workers로 B2B 산업용 공학 계산기 만들기 — 실리콘 실란트 견적 시스템 사례
slug: b2b-engineering-calculator-cloudflare
excerpt: 한국건설트레이딩(KCT)의 실리콘 실란트 B2B 플랫폼에 6대 공학 계산기를 붙인 과정. 도메인 공식을 코드로 옮기고, 엣지에서 서버 없이 서빙한 방법을 정리했다.
seo_title: B2B 산업용 공학 계산기 개발 사례 (Cloudflare Workers)
seo_description: 산업용 웹 계산기·B2B 견적 시스템을 Cloudflare Workers 엣지에서 서버 없이 구축한 실제 사례. 실리콘 실란트 소요량·구조 바이트·열팽창 계산 엔진 설계.
---

## 문제: "엑셀로 계산해 드릴게요"를 없애고 싶다

한국건설트레이딩(KCT)은 커튼월·유리 파사드에 들어가는 구조용 실리콘 실란트를 유통한다. 현장 담당자나 시공사에서 견적 문의가 오면 매번 비슷한 계산이 반복됐다.

- 이 조인트 규격이면 실란트가 몇 리터 필요한가
- 이 풍하중이면 구조 접착 폭(structural bite)을 얼마로 잡아야 하는가
- 알루미늄과 유리가 만나는 조인트에서 여름·겨울 온도차를 견디려면 조인트 폭이 얼마여야 하는가

전부 Dow 기술자료와 ASTM 규격에 공식이 있다. 하지만 그 공식을 매번 사람이 엑셀에 넣어 돌리고 있었다. **답이 정해진 계산을 사람이 반복하는 건 자동화 대상이다.**

목표는 명확했다. 문의자가 직접 숫자를 넣으면 그 자리에서 결과가 나오는 계산기를, 회사 사이트에 붙인다.

## 왜 Cloudflare Workers인가

계산기는 트래픽이 튀지 않고, DB도 거의 필요 없고, 응답은 가벼운 HTML 하나다. 이런 워크로드에 상시 켜진 서버(EC2, Node 인스턴스)를 두는 건 과하다.

- **비용**: 월 요청이 수만 건 수준이면 Workers 무료 한도 안이다. 서버 유지비 0.
- **지연**: 계산 로직은 순수 함수다. 엣지에서 바로 렌더링하면 TTFB가 수십 ms.
- **운영**: 배포는 `wrangler deploy` 한 줄. 패치·보안 업데이트를 신경 쓸 서버가 없다.

스펙 DB(17개 산업군 52종 제품)는 Cloudflare D1에 넣고, 색상칩·TDS/MSDS 같은 정적 자료는 R2에서 서빙했다. 계산기 자체는 상태가 없어서 그냥 Worker 라우트다.

```javascript
// 계산기 페이지는 상태 없는 순수 렌더 — DB도 안 탄다
if (pathname === "/projects/kct" || pathname === "/projects/kct/") {
  return withSecurityHeaders(
    new Response(renderKctPage(), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }),
    { "Cache-Control": "public, max-age=3600, s-maxage=86400" }
  );
}
```

`s-maxage=86400`으로 Cloudflare 엣지 캐시에 하루 얹어두면, 대부분의 요청은 Worker 실행 없이 캐시에서 나간다.

## 핵심은 프레임워크가 아니라 도메인 공식

이 프로젝트에서 코드보다 오래 걸린 건 **공식을 정확히 옮기는 일**이었다. 산업용 계산기는 틀리면 안 된다. 계산 결과로 실제 자재를 발주하고 시공한다.

6대 모듈 중 3개만 예로 든다.

### 1. 실란트 소요량

조인트 단면적 × 시공 길이 + 손실률. 그리고 실무에서 진짜 필요한 건 "그래서 카트리지 몇 개 사야 하냐"다.

```javascript
function sealantUsage({ widthMm, depthMm, lengthM, lossRate = 0.1 }) {
  const volumeL = (widthMm * depthMm * lengthM) / 1000 * (1 + lossRate);
  return {
    volumeL: round(volumeL, 2),
    cartridge300: Math.ceil(volumeL * 1000 / 300), // 300ml 카트리지
    sausage500: Math.ceil(volumeL * 1000 / 500),   // 500ml 소시지팩
    backerRodDiaMm: round(widthMm * 1.25, 1),       // 백업재 직경 = 조인트 폭 +25%
  };
}
```

### 2. 풍하중 구조 바이트 (ASTM C1401)

패널에 걸리는 풍하중을 실란트 접착부가 인장으로 버텨야 한다. Dow 표준은 허용 동적 인장응력을 140 kPa(20 psi)로 잡는다.

```
Bite = (단변 길이 × 설계 풍하중) / (2 × 140 kPa)
```

```javascript
function structuralBite({ shortSpanMm, windLoadKpa }) {
  const ALLOWABLE_TENSILE_KPA = 140; // Dow 표준 허용 동적 인장응력
  const biteMm = (shortSpanMm * windLoadKpa) / (2 * ALLOWABLE_TENSILE_KPA);
  return Math.max(biteMm, 6.4); // 최소 구조 바이트 6.4mm
}
```

`Math.max(..., 6.4)` 한 줄이 중요하다. 공식상 값이 6.4mm 미만으로 나와도 최소 시공 규격은 지켜야 한다. 이런 "규격 하한/상한" 클램프가 모듈마다 들어간다.

### 3. 열팽창 조인트 폭 (ASTM C1472)

이종 자재가 만나는 조인트는 온도차로 서로 다르게 늘어난다. 그 상대 변위를 실란트의 신축 능력(±25%, ±50%)으로 흡수할 수 있어야 한다.

```javascript
const CTE = { aluminum: 23e-6, glass: 9e-6, concrete: 12e-6, steel: 12e-6 };

function thermalJointWidth({ materialA, materialB, spanMm, deltaT, movementCapability = 0.25 }) {
  const movementMm = Math.abs(CTE[materialA] - CTE[materialB]) * spanMm * deltaT;
  return round(movementMm / movementCapability, 1); // 필요한 최소 조인트 폭
}
```

## UI: 계산기는 "입력 즉시 결과"여야 한다

폼 제출 → 페이지 리로드는 계산기에서 최악이다. 숫자를 바꿔가며 감을 잡는 도구인데 매번 왕복이 생긴다.

계산 로직이 순수 함수라서 그대로 클라이언트에도 인라인했다. 서버 렌더로 초기 결과를 채우고(크롤러·공유용), 이후 입력 변화는 브라우저에서 즉시 반영한다.

```javascript
// 같은 함수를 SSR HTML에 <script>로 인라인 — 번들러도 API도 필요 없다
input.addEventListener("input", () => {
  const r = structuralBite({
    shortSpanMm: +form.shortSpan.value,
    windLoadKpa: +form.windLoad.value,
  });
  output.textContent = `${r.toFixed(1)} mm`;
});
```

## SEO 관점에서 배운 것

계산기 페이지는 의외로 검색 유입이 좋다. "구조 실란트 바이트 계산", "실리콘 소요량" 같은 쿼리는 검색량은 작아도 **의도가 매우 명확하다**. 그 페이지에 도달한 사람은 실제로 자재를 사려는 사람이다.

효과를 본 것들:

- **각 계산기를 독립 URL로**: `/projects/kct/technical`, `/projects/kct/specimens`처럼 기능별 전용 라우트. 해시 앵커(`/#calc`)로 만들면 검색엔진이 한 페이지로만 본다.
- **공식과 규격 근거를 본문에 노출**: "ASTM C1401", "140 kPa" 같은 용어가 페이지에 실제 텍스트로 있어야 그 쿼리에 잡힌다. 계산기 위젯만 있고 설명이 없으면 색인될 내용이 없다.
- **동적 sitemap에 자동 반영**: 계산기 라우트를 추가하면 `sitemap.xml` 생성 로직이 자동으로 포함하도록 해뒀다.

## 정리

B2B 산업용 계산기의 난이도는 프레임워크가 아니라 **도메인 공식을 규격에 맞게, 하한·상한까지 정확히 옮기는 것**에 있다. 인프라는 오히려 단순하게 갈수록 좋다. 상태 없는 계산기에는 엣지 서버리스(Cloudflare Workers)가 비용·지연·운영 모든 면에서 맞았다.

비슷한 계산기·견적 시스템을 웹에 붙이고 싶다면 [반응형 웹 & SaaS 개발](/services/responsive-web) 또는 [엣지 인프라 구축](/services/edge-infra)을, 실제 구축 사례는 [KCT 프로젝트 페이지](/projects/kct)를 참고하면 된다. 데이터 모델링·계산 로직의 기초가 필요하면 [데이터베이스](/education/database)와 [알고리즘](/education/algorithm) 교육 섹션에 정리해뒀다.
