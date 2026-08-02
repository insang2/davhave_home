---
title: Cloudflare Worker 배포 자동화와 로컬 테스트
slug: worker-deployment
excerpt: Worker를 안전하게 배포하고, 로컬에서 완벽히 테스트하는 워크플로우 구축 방법.
seo_title: Cloudflare Worker 배포 및 테스트 가이드
seo_description: Wrangler를 활용한 로컬 개발, 자동 배포, 환경 분리, 모니터링.
---

## 처음 만난 문제

davhave.com의 첫 배포는 이랬다:

```bash
# 로컬에서 잘 작동하니까...
npx wrangler publish

# 프로덕션에서 에러!
# "DB.prepare is not defined"
```

로컬에는 `.dev.vars` 파일이 있었는데, 프로덕션 환경 변수가 빠져있었다. 그 순간부터 **"로컬과 프로덕션의 동기화"가 얼마나 중요한지** 배웠다.

## 로컬 개발 환경 설정

### 1. `.dev.vars` 파일

프로덕션 시크릿을 로컬에서 테스트하기 위한 파일:

```bash
# .dev.vars (git ignore에 포함!)
ADMIN_PASSWORD=test-password-local
SESSION_SECRET=test-session-secret-local
```

`.gitignore`에 추가:

```
.dev.vars
.wrangler/
node_modules/
dist/
```

### 2. wrangler.toml 구조

```toml
# wrangler.toml
name = "davhave-site"
main = "src/worker.js"
compatibility_date = "2025-11-01"

# 환경별 바인딩
[env.development]
vars = { ENVIRONMENT = "development" }

[env.production]
vars = { ENVIRONMENT = "production" }

# D1 바인딩
[[d1_databases]]
binding = "DB"
database_name = "davhave-content"
database_id = "12345678-1234-1234-1234-123456789012"

# R2 바인딩
[[r2_buckets]]
binding = "MEDIA"
bucket_name = "davhave-media"

# KV 바인딩 (캐싱)
[[kv_namespaces]]
binding = "CACHE"
id = "abcdef1234567890"
preview_id = "abcdef1234567890-preview"
```

### 3. 로컬 테스트 실행

```bash
# 로컬 D1 스키마 초기화
npx wrangler d1 execute davhave-content --local --file=./src/schema.sql

# 개발 서버 실행
npx wrangler dev
```

이제 `http://localhost:8787`에서 테스트 가능하다.

## 환경 분리: 개발 vs 프로덕션

### 코드에서 환경 감지

```javascript
// src/worker.js
export default {
  async fetch(request, env) {
    const isDev = env.ENVIRONMENT === 'development';

    if (isDev) {
      console.log(`[DEV] ${request.method} ${new URL(request.url).pathname}`);
    }

    // ... 요청 처리
  }
};
```

### 환경별 배포

```bash
# 개발 환경으로 배포
npx wrangler publish --env development

# 프로덕션으로 배포
npx wrangler publish --env production
```

## 자동화: GitHub Actions

매번 수동으로 배포하는 건 비효율적이고 위험하다. 자동화 파이프라인을 만들었다:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm run test

      - name: Lint code
        run: npm run lint

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Deploy to Cloudflare Workers
        run: npx wrangler publish --env production
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

### GitHub Secrets 설정

```bash
# Cloudflare API 토큰 생성
# https://dash.cloudflare.com/profile/api-tokens

# 리포지토리 Settings > Secrets and variables > Actions에서 추가:
- CLOUDFLARE_API_TOKEN: (생성한 토큰)
- CLOUDFLARE_ACCOUNT_ID: (계정 ID)
```

이제 main에 push하면:

1. 테스트 실행
2. 린트 체크
3. 자동 배포

## 테스트 전략

### 단위 테스트

```javascript
// test/db.test.js
import { describe, it, expect, beforeAll } from '@jest/globals';
import { getBlogPosts } from '../src/lib/posts';

describe('getBlogPosts', () => {
  it('should return published posts only', async () => {
    const mockDB = {
      prepare: (sql) => ({
        all: async () => ({
          results: [
            {
              id: 1,
              title: 'Published Post',
              slug: 'published-post',
              published_at: '2025-11-01T00:00:00Z'
            }
          ]
        })
      })
    };

    const posts = await getBlogPosts(mockDB);
    expect(posts).toHaveLength(1);
    expect(posts[0].title).toBe('Published Post');
  });
});
```

### 통합 테스트

```javascript
// test/integration.test.js
describe('API Integration', () => {
  it('should create a blog post', async () => {
    const response = await fetch('http://localhost:8787/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Test Post',
        slug: 'test-post',
        content: 'Test content'
      })
    });

    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data.id).toBeDefined();
  });
});
```

### E2E 테스트 (Playwright 사용)

```javascript
// test/e2e.test.js
import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test('should load and display posts', async ({ page }) => {
    await page.goto('http://localhost:8787/blog');

    // 포스트 목록이 보이는가?
    const postTitle = await page.locator('h2 >> first');
    expect(postTitle).toBeTruthy();

    // 클릭 가능한가?
    await postTitle.click();

    // 상세 페이지로 이동되었는가?
    expect(page.url()).toContain('/blog/');
  });
});
```

## 배포 전 체크리스트

자동화되지 않은 수동 확인:

```bash
#!/bin/bash
# scripts/pre-deploy.sh

echo "🔍 Pre-deployment checklist..."

# 1. 모든 테스트 통과?
npm run test || exit 1
echo "✓ Tests passed"

# 2. D1 마이그레이션 적용됨?
npx wrangler d1 list | grep davhave-content || exit 1
echo "✓ Database exists"

# 3. 환경 변수 설정됨?
npx wrangler secret list --env production | grep ADMIN_PASSWORD || exit 1
echo "✓ Secrets configured"

# 4. 로컬에서 작동?
timeout 10 npm run dev &
sleep 5
curl -f http://localhost:8787/sitemap.xml > /dev/null || exit 1
kill %1
echo "✓ Local dev works"

# 5. git 상태 정리됨?
[ -z "$(git status --porcelain)" ] || { echo "❌ Uncommitted changes"; exit 1; }
echo "✓ Git clean"

echo "✅ All checks passed! Ready to deploy."
```

## 배포 후 모니터링

### Cloudflare Workers Analytics

Workers 대시보드에서 실시간 메트릭 확인:

```
- 요청 수
- 에러율
- 응답 시간 (P50, P99)
```

### 커스텀 로깅

```javascript
export default {
  async fetch(request, env) {
    const start = Date.now();
    const pathname = new URL(request.url).pathname;

    try {
      const response = await handleRequest(request, env);
      
      // 성공 로그
      const duration = Date.now() - start;
      console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        path: pathname,
        status: response.status,
        duration_ms: duration,
        user_agent: request.headers.get('user-agent')
      }));

      return response;
    } catch (error) {
      // 에러 로그
      console.error(JSON.stringify({
        timestamp: new Date().toISOString(),
        path: pathname,
        error: error.message,
        stack: error.stack
      }));

      return new Response('Internal Server Error', { status: 500 });
    }
  }
};
```

Cloudflare 로그는 **Logpush** 또는 **Tail**로 확인:

```bash
# 실시간 로그 보기
npx wrangler tail --env production

# 특정 경로만 필터
npx wrangler tail --env production --format pretty | grep "/blog"
```

## 롤백 전략

배포 후 문제 발생 시:

```bash
# 이전 버전으로 롤백
git revert HEAD
git push origin main

# GitHub Actions가 자동으로 이전 버전 배포
```

또는 손동 롤백:

```bash
# 커밋 해시로 배포
git checkout <previous-commit-hash>
npx wrangler publish --env production
```

## 성능 최적화: 배포 시간 단축

초기: 배포에 3분 걸림 (느림)

```yaml
# 최적화 전
- name: Deploy
  run: npm install && npx wrangler publish

# 최적화 후: 캐싱 추가
- uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-npm-
```

현재: 배포에 45초 (10배 빠름)

## 결론: 자동화가 신뢰를 만든다

처음엔 배포가 무서웠다. ("정말 프로덕션에 영향을 안 줄까?") 하지만 **자동 테스트 + 자동 배포**를 구축한 후:

- 배포가 일상적인 작업이 됨
- 에러 발생 시 빠른 롤백 가능
- 새로운 기능을 확신 있게 배포

가장 좋은 배포 전략은 **자주, 작게, 자동으로 배포하는 것**이다.
