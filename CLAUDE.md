# davhave.com

Oscar Lee(DAVHAVE)의 개발 스튜디오 사이트. Cloudflare Workers 위에서 정적 홈페이지 + 블로그/교육/포트폴리오 콘텐츠 엔진으로 운영된다.

## 중요 지침

- **SEO가 걸린 페이지·기능은 항상 별도의 전용 URL(라우트)로 만든다.** 해시 앵커(`/#section`)나 클라이언트 렌더링 전용 섹션으로 만들지 않는다. 기존 `sitemap.xml`이 `/#about`, `/#portfolio` 같은 해시 앵커를 색인 가능한 페이지처럼 등록해 두었던 것이 원인이 되어 이 규칙이 생겼다 — 검색엔진은 해시 프래그먼트를 별도 페이지로 인식하지 않는다. 작은 추가 콘텐츠라도 먼저 "이게 `/about`이 되어야 하는가, `/#about`으로 충분한가"를 판단하고, SEO 가치가 있으면 무조건 전자를 선택한다.
- 새 콘텐츠 라우트를 추가하면 `src/lib/sitemap.js`의 `renderSitemap()`에도 반드시 반영한다 (동적 생성이라 자동 포함되지만, 새 콘텐츠 종류를 추가할 땐 로직을 확인할 것).

## 아키텍처

- **배포**: Cloudflare Workers (`wrangler.toml`), 정적 자산은 `./public`에서 서빙 (`env.ASSETS`)
- **DB**: Cloudflare D1 (`davhave-content`, binding `DB`) — `posts` / `tags` / `post_tags` 테이블. 블로그와 교육 콘텐츠가 `kind` 필드(`blog` | `education`)로 같은 테이블을 공유한다. CRUD 스택을 두 벌 만들지 않기 위한 의도적 선택.
- **이미지 저장소**: Cloudflare R2 (`davhave-media`, binding `MEDIA`), `/media/:key`로 서빙
- **관리자 인증**: 단일 비밀번호(시크릿 `ADMIN_PASSWORD`) → HMAC 서명 쿠키(시크릿 `SESSION_SECRET`) 발급. 별도 회원 시스템 없음 (운영자 1인이므로).
- **라우팅** (`src/worker.js`, `[assets] run_worker_first = true`로 정적 자산보다 Worker가 항상 먼저 실행됨):
  - `/api/*` — 블로그·교육 CRUD, 업로드, 관리자 로그인/체크 API
  - `/media/*` — R2 이미지 서빙
  - `/blog`, `/blog/:slug`, `/blog/tag/:tag` — 블로그 SSR 페이지
  - `/education`, `/education/:category`, `/education/:category/:slug` — 교육 허브/카테고리/레슨 (블로그와 같은 `posts` 테이블 재사용, `kind=education`)
  - `/portfolio`, `/portfolio/:slug` — 포트폴리오 사례 (정적 데이터, `src/lib/projects.js`)
  - `/admin` — 관리자 CRUD UI (noindex)
  - `/sitemap.xml` — 동적 생성 (블로그·교육·포트폴리오 발행 콘텐츠 자동 반영, `src/lib/sitemap.js`)
  - `/rss.xml` — 발행된 블로그 글 RSS 2.0 피드 (`src/lib/rss.js`)
  - `/llms.txt` — 동적 생성 (`src/lib/llms.js`), 블로그/교육/포트폴리오 최신 목록을 실시간 반영. `public/llms.txt`와 `public/sitemap.xml` 정적 파일은 이제 이 Worker 라우트에 가려져 실제로는 도달하지 않는 죽은 파일 — 삭제하진 않았지만 참고할 필요 없음
  - 그 외 전부 `env.ASSETS.fetch()`로 기존 정적 파일(홈페이지, robots.txt, site.webmanifest 등) 패스스루

## 로컬 개발

```
npx wrangler dev
```
`.dev.vars`에 로컬용 `ADMIN_PASSWORD`/`SESSION_SECRET`이 있음 (git에 커밋 금지, `.gitignore`에 포함됨). 로컬 D1 스키마 적용:
```
npx wrangler d1 execute davhave-content --local --file=./src/schema.sql
```
프로덕션 스키마 적용은 `--remote` 플래그 사용.

## 확장 로드맵 (설계 문서 기준)

Phase 1~5 모두 완료 (인프라, 블로그 CRUD, 포트폴리오 허브, 교육 섹션, SEO/크롤링 — 동적 sitemap·RSS·llms.txt). 상세 설계는 세션 내 게시된 Artifact("DAVHAVE 확장 설계") 참고. 앞으로 이어질 만한 작업: 실제 블로그 글/레슨 콘텐츠 작성, kconstrade.com 로그인 영역 기능 확인 후 포트폴리오 문구 보강.
