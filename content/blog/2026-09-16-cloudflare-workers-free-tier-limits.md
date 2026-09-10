---
title: Cloudflare Workers 무료 한도, 실제로 어디까지 되나
slug: cloudflare-workers-free-tier-limits
excerpt: Workers·D1·R2 무료 플랜의 실제 한도와, 개인 사이트·소규모 서비스가 이 안에서 돌아가는지 계산해봤다.
seo_title: Cloudflare Workers 무료 한도 정리 (Workers·D1·R2)
seo_description: Cloudflare Workers, D1, R2 무료 플랜의 요청·용량·읽기 한도와 유료 전환 시점. 개인 사이트·소규모 서비스 기준 실제 비용 계산.
---

## 결론부터: 개인 사이트는 대부분 무료 안이다

davhave.com은 Workers + D1 + R2로 돌아가고, 지금까지 요금이 나온 적이 없다. 블로그·교육 콘텐츠(수백 페이지), 이미지, 동적 sitemap·RSS까지 전부 무료 플랜 안이다.

무료 플랜이 어디서 끝나는지 정리해두면 "이 서비스, 무료로 되나?"를 계산할 수 있다. (한도는 바뀔 수 있으니 실제 수치는 Cloudflare 대시보드에서 확인할 것.)

## Workers — 요청 수가 기준

무료 플랜의 핵심 제한은 **하루 요청 수**와 **요청당 CPU 시간**이다.

- 하루 10만 요청
- 요청당 CPU 시간 10ms (I/O 대기 시간은 안 셈 — 순수 연산만)
- 분당 1,000 요청 버스트

여기서 중요한 건 **엣지 캐시가 요청 수에 안 잡힌다**는 점이다. `Cache-Control: s-maxage=86400`을 걸면 대부분의 방문은 Cloudflare 엣지 캐시에서 나가고, Worker는 실행되지 않는다. davhave.com의 SSR 페이지가 이 방식이다.

하루 10만 요청은 **캐시를 뺀 순수 동적 요청** 기준이다. 콘텐츠 사이트라면 월 수십만 방문도 이 안에 들어온다.

## D1 — 용량보다 읽기 수

D1(SQLite 기반 서버리스 DB) 무료 한도:

- 저장 용량 5GB
- 하루 500만 rows read
- 하루 10만 rows written

**"rows read"는 쿼리 수가 아니라 스캔한 행 수**다. 인덱스 없이 1만 행 테이블을 풀스캔하면 한 번에 1만 read가 깎인다. 인덱스를 제대로 걸면 같은 쿼리가 수십 read로 끝난다.

davhave.com 스키마도 자주 타는 쿼리에 인덱스를 걸어뒀다.

```sql
CREATE INDEX idx_posts_kind_status ON posts (kind, status, published_at DESC);
CREATE INDEX idx_posts_category ON posts (category);
```

블로그 목록, 카테고리별 레슨, 최신 글 — 이 인덱스 하나로 대부분 커버된다. 인덱스 설계가 곧 비용 설계다.

## R2 — egress가 0원

R2(오브젝트 스토리지)의 강점은 **데이터 전송(egress) 요금이 없다**는 것이다. S3는 나갈 때 GB당 돈을 받는다. 이미지 트래픽이 많은 사이트에서 이 차이가 크다.

무료 한도:

- 저장 10GB
- 월 100만 Class A 작업 (쓰기·리스트)
- 월 1,000만 Class B 작업 (읽기)

이미지를 R2에 넣고 `/media/:key`로 서빙하면서, 응답에 `Cache-Control: public, max-age=31536000, immutable`을 걸면 읽기 작업도 대부분 캐시가 흡수한다.

## 유료로 넘어가는 시점

무료를 벗어나는 건 보통 이럴 때다.

- **캐시가 안 먹는 동적 요청이 하루 10만을 넘는다** — 로그인 필수 서비스, 개인화 대시보드, API 백엔드
- **D1 읽기가 500만을 넘는다** — 인덱스 없는 쿼리이거나, 트래픽이 실제로 크거나
- **요청당 연산이 10ms CPU를 넘는다** — 무거운 이미지 처리, 큰 마크다운 실시간 렌더 (그래서 davhave.com은 마크다운을 저장 시점에 변환해둔다)

넘어가도 Workers 유료는 월 $5부터고, 그 안에 훨씬 큰 한도가 포함된다. 갑자기 수백 달러가 나오는 구조가 아니다.

## 정리

개인 사이트·소규모 서비스·콘텐츠 사이트는 Workers + D1 + R2 무료 플랜 안에서 충분히 돌아간다. 관건은 세 가지다. **(1) 엣지 캐시로 Worker 실행을 줄이고**, **(2) D1은 인덱스로 rows read를 줄이고**, **(3) 무거운 연산은 요청 시점이 아니라 저장 시점으로 옮긴다.**

엣지 서버리스로 사이트·백엔드를 옮기는 작업이 필요하면 [Edge & Serverless Infrastructure](/services/edge-infra)를 참고하면 된다. 관련해서 [CMS 없이 D1 + Workers로 콘텐츠 엔진 만들기](/blog/serverless-content-engine-d1-workers) 글도 있다.
