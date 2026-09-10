---
title: SEO를 위한 URL 설계 — 왜 /#about이 아니라 /about이어야 하나
slug: url-design-for-seo-no-hash-anchors
excerpt: 한 페이지 안에 섹션을 만들고 /#about, /#portfolio로 링크하면 검색엔진은 그걸 별도 페이지로 인식하지 않는다. davhave.com이 겪은 실수와 원칙.
seo_title: SEO URL 설계 — 해시 앵커·SPA 섹션이 색인 안 되는 이유
seo_description: 해시 프래그먼트(/#section)와 클라이언트 렌더링 전용 섹션이 검색엔진에 별도 페이지로 잡히지 않는 이유, 그리고 SEO 가치가 있는 콘텐츠에 전용 라우트를 주는 원칙.
---

## 실수: sitemap에 /#about을 넣었다

davhave.com 초기 버전은 원페이지였다. 소개, 포트폴리오, 철학이 한 HTML 안에 섹션으로 있었고, 내비게이션은 `/#about`, `/#portfolio`로 스크롤 이동했다. 그리고 `sitemap.xml`에 이렇게 등록했다.

```xml
<url><loc>https://davhave.com/#about</loc></url>
<url><loc>https://davhave.com/#portfolio</loc></url>
```

색인이 될 리 없었다. 검색엔진은 **해시 프래그먼트(`#` 뒤)를 URL의 일부로 취급하지 않는다.** `https://davhave.com/#about`과 `https://davhave.com/#portfolio`는 크롤러에게 **똑같은 한 페이지**(`https://davhave.com/`)다. sitemap에 뭘 적든 색인되는 건 홈페이지 하나뿐이다.

## 왜 그런가

`#` 뒤는 원래 **문서 내 앵커**를 가리키는 브라우저용 표시다. 서버로 전송되지도 않는다. `GET /#about` 같은 요청은 존재하지 않고, 서버는 항상 `/`를 받는다.

그래서:

- 해시로 나뉜 "페이지"는 각자의 `<title>`, `<meta description>`, canonical을 가질 수 없다
- 검색 결과에 `/#about`이 독립 항목으로 뜨지 않는다
- 그 섹션만 겨냥한 키워드로 순위를 잡을 수 없다

**클라이언트에서 자바스크립트로만 갈아끼우는 섹션**(SPA 라우팅이지만 실제 URL 경로가 안 바뀌거나, 서버가 그 경로에 다른 HTML을 안 주는 경우)도 사실상 같은 문제를 겪는다. 크롤러가 렌더링을 해줄 때도 있지만, 서버가 그 URL에 고유한 HTML을 주는 것만큼 확실하지 않다.

## 원칙: SEO 가치가 있으면 무조건 전용 라우트

이 경험 이후 davhave.com에 규칙이 생겼다.

> 콘텐츠를 추가할 때, 먼저 "이게 `/about`이 되어야 하는가, `/#about`으로 충분한가"를 판단한다. **검색 유입을 노린다면 무조건 전자.**

작은 추가 콘텐츠라도 그렇다. 지금은 소개·포트폴리오·철학·서비스·스택이 전부 서버가 고유 HTML을 주는 독립 경로다.

```
/about          → 고유 <title>, description, canonical
/portfolio      → 고유 메타 + BreadcrumbList
/portfolio/:slug → 사례별 페이지
/services/:slug  → 서비스별 페이지
```

각 경로가 sitemap에 실제로 색인 가능한 URL로 들어가고, 그 주제 키워드로 개별 순위를 노릴 수 있다.

## `/#about`을 언제 써도 되나

해시 앵커 자체가 나쁜 건 아니다. **한 페이지 안에서 스크롤 위치를 가리키는 용도**로는 정상이다.

- 긴 글의 목차 → `#heading-3` (문제 없음)
- FAQ 항목 딥링크 → `/faq#refund` (페이지는 `/faq`로 이미 독립, 해시는 그 안의 위치)

기준은 하나다. **해시 뒤 값이 바뀌어도 별도 페이지로 색인되길 기대하지 않으면** 괜찮다. 기대한다면 경로로 빼야 한다.

## 체크리스트

새 콘텐츠를 추가할 때:

1. 이 콘텐츠로 검색 유입을 원하는가? → 예면 전용 경로(`/foo`)
2. 서버가 그 경로에 **고유한 HTML**(제목·설명·canonical 포함)을 주는가?
3. sitemap에 그 경로가 들어갔는가?
4. 내부 링크가 `/#foo`가 아니라 `/foo`를 가리키는가?

## 정리

`#` 뒤는 검색엔진에게 페이지 구분자가 아니다. SEO가 걸린 콘텐츠는 해시 앵커나 클라이언트 전용 섹션이 아니라, **서버가 고유 HTML을 주는 전용 URL**로 만들어야 한다. 작은 섹션 하나라도 "이게 독립 페이지로 검색되길 원하는가"를 먼저 판단하는 습관이 중요하다.

검색엔진 최적화를 기본 적용한 웹 구축이 필요하면 [Responsive Web & SaaS](/services/responsive-web)를, URL·메타·구조화 데이터 종합 점검은 [기술 컨설팅](/services/tech-consulting)을 참고하면 된다. SEO 기초는 [디지털 마케팅 교육](/education/marketing)에 정리해뒀다.
