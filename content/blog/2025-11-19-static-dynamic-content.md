---
title: 정적 콘텐츠와 동적 콘텐츠를 나누는 기준
slug: static-dynamic-content
excerpt: 웹 개발에서 정적 파일 vs 데이터베이스 선택의 기준과 실제 사례.
seo_title: 정적 콘텐츠 vs 동적 콘텐츠 전략
seo_description: 홈페이지, 블로그, 포트폴리오를 파일 vs DB로 나누는 기준, 캐싱 전략.
---

## 혼란스러운 초기 상태

davhave.com을 만들 때, 가장 먼저 마주친 질문:

> "블로그를 정적 파일로 관리할까, 데이터베이스로 할까?"

당시 나는:
- **정적 (파일) 선택지**: Jekyll 같은 정적 사이트 생성기
- **동적 (DB) 선택지**: Traditional CMS (WordPress, Ghost)

각각의 장단점이 명확하지 않았다. 많은 사람들이 "정적 사이트는 빠르다"고 했지만, 그게 정말 사실일까?

## 정의: 정적 vs 동적이란?

### 정적 콘텐츠

```
파일 시스템 (git, 로컬 폴더)
  ├─ index.html
  ├─ blog/
  │  ├─ post-1.html
  │  ├─ post-2.html
  │  └─ post-3.html
  ├─ style.css
  └─ main.js

배포 시: 이 폴더를 통째로 업로드
조회 시: 파일을 그냥 반환 (DB 쿼리 없음)
```

### 동적 콘텐츠

```
데이터베이스
  ├─ posts 테이블 (id, title, slug, content)
  ├─ tags 테이블
  └─ comments 테이블

배포 시: 코드만 업로드 (데이터는 DB에 있음)
조회 시: SQL 쿼리 → 데이터 가져오기 → HTML 생성
```

## 선택 기준: 6가지 질문

### 1. 얼마나 자주 변한다?

| 변경 빈도 | 추천 | 이유 |
|---------|------|------|
| 월 1회 이하 | 정적 | 수정 후 빌드 배포 면역 |
| 주 1회 | 정적/동적 선택 | 둘 다 가능 |
| 일 1회 이상 | 동적 | 재배포 오버헤드 |
| 실시간 | 동적 | 동적만 가능 |

davhave의 경우:
- 블로그: 월 2~3회 → 정적도 동적도 가능
- 포트폴리오: 월 1회 → 정적이 낫다
- 교육 콘텐츠: 주 1회 → 동적이 낫다

### 2. 사용자 상호작용이 있는가?

```
정적: 댓글, 좋아요, 실시간 업데이트 불가능
      (추가 JS 라이브러리 필요)

동적: 댓글 저장, 추천 수 계산, 실시간 알림 가능
     (DB와 상호작용)
```

davhave에서는:
- 현재 댓글 없음 → 정적으로도 충분
- 향후 댓글 추가 예정 → 동적으로 전환 필요

### 3. 검색 및 필터링이 필요한가?

```
정적: 블로그 목록 페이지를 미리 생성해야 함
     예: /blog.html, /blog/tag/javascript.html
     
     문제: 태그가 100개면 100개 페이지 생성?

동적: 쿼리 시점에 필터링
     예: /blog?tag=javascript (1개 API)
```

davhave의 선택:
- 태그별 페이지 필요 → 동적으로 생성

### 4. 버전 관리와 협업이 필요한가?

```
정적: git으로 모든 변경 추적
     장점: 완벽한 히스토리, 코드 리뷰 가능
     단점: 포스트 수 많아지면 repo 무거워짐

동적: DB에 저장, 필요시 별도 버전 관리
     장점: 데이터와 코드 분리
     단점: DB 마이그레이션 복잡
```

### 5. SEO가 중요한가?

```
정적: 이미 HTML로 완성 → 크롤러가 읽기 쉬움

동적: SSR (Server-Side Rendering) 필수
     예: Cloudflare Workers에서 HTML 생성
```

davhave는 블로그/교육이 주요 SEO 대상이므로 동적 SSR 필수.

### 6. 성능과 비용

```
정적:
- 서버 리소스 거의 안 씀 (저가 호스팅 가능)
- 빌드 시간 필요 (포스트 100개 = 몇십 초)
- 캐싱 쉬움 (모든 게 이미 최종 파일)

동적:
- 요청마다 DB 쿼리 (레이턴시 증가 가능)
- 캐싱 필수 (캐시 무효화 복잡)
- 서버 비용 증가 (계산이 필요하므로)
```

## davhave의 최종 선택: 하이브리드

결론: **"콘텐츠 타입별로 다르게"**

### 정적 콘텐츠

```
홈페이지 (/)
├─ index.html (정적)
├─ style.css (정적)
├─ script.js (정적)

포트폴리오 정보
├─ src/lib/projects.js (코드에 하드코딩)
└─ /portfolio → 정적 페이지로 렌더링
```

**이유**:
- 월 1회 이하 수정
- 사용자 상호작용 없음
- 배포 최소화

### 동적 콘텐츠

```
블로그
├─ D1에서 데이터 조회
├─ Workers에서 SSR로 페이지 생성
└─ 엣지에서 1시간 캐싱

교육 콘텐츠
├─ D1에서 데이터 조회
├─ 카테고리/레슨 동적 생성
└─ 댓글/퀴즈 지원 (향후)
```

**이유**:
- 주 단위로 업데이트
- 검색/필터링 필요
- 향후 상호작용 추가 예정
- 성능은 캐싱으로 해결

## 구현 패턴

### 정적 콘텐츠: 직접 파일 서빙

```javascript
// src/worker.js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 홈페이지는 정적 파일에서
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return env.ASSETS.fetch(request);
    }

    // 포트폴리오도 정적
    if (url.pathname.startsWith('/portfolio')) {
      return env.ASSETS.fetch(request);
    }

    // ... 동적 라우트는 별도 처리
  }
};
```

### 동적 콘텐츠: DB + 캐싱

```javascript
export async function renderBlogPage(slug, env) {
  // 1. 캐시 확인
  const cacheUrl = new Request(`https://blog-cache/${slug}`, {
    method: 'GET'
  });
  let response = await caches.default.match(cacheUrl);

  if (!response) {
    // 2. DB 쿼리
    const post = await env.DB.prepare(`
      SELECT * FROM posts WHERE slug = ?
    `).bind(slug).first();

    // 3. 페이지 렌더링
    const html = renderPostHTML(post);

    // 4. 캐싱
    response = new Response(html, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600'
      }
    });

    await caches.default.put(cacheUrl, response.clone());
  }

  return response;
}
```

## 마이그레이션: 정적 → 동적

포트폴리오가 관리하기 힘들어지면?

```javascript
// 현재 (정적)
export const PROJECTS = [
  {
    id: 1,
    title: 'kconstrade',
    slug: 'kconstrade',
    // ...
  }
];

// ↓ 마이그레이션

// 미래 (동적)
async function getProjects() {
  return await env.DB.prepare(`
    SELECT * FROM projects WHERE published = true
  `).all();
}
```

코드 변경은 최소다.

## 성능 비교: 실제 측정

davhave.com의 실제 응답 시간:

| 콘텐츠 | 타입 | 응답 시간 | 캐시 적중 시 |
|--------|------|---------|-----------|
| 홈페이지 | 정적 | 5ms | 1ms |
| 블로그 | 동적 (캐시) | 50ms | 2ms |
| 교육 | 동적 (캐시) | 50ms | 2ms |
| 포트폴리오 | 정적 | 5ms | 1ms |

**차이 없다.** 왜? 캐싱이 있으니까.

## 결론: 맥락이 전부

정적/동적은 **절대적인 판단이 아니라 상황 기반**이다:

```
정적: "이 콘텐츠가 거의 안 바뀌고, 
       미리 만들 수 있고,
       DB 쿼리가 필요 없으면" 정적.

동적: "이 콘텐츠가 자주 바뀌거나,
       사용자 데이터와 상호작용하거나,
       실시간 검색이 필요하면" 동적.
```

davhave는 이 둘을 섞어서 **최고의 성능과 유지보수성**을 달성했다.
