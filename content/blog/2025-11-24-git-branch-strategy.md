---
title: Git 브랜치 전략: 소규모 팀의 현실적인 선택지
slug: git-branch-strategy
excerpt: Git Flow vs Trunk-Based: 각각의 장단점과 소규모 팀에 맞는 방식 선택.
seo_title: Git 브랜칭 전략 가이드
seo_description: 팀 규모별 Git 브랜칭 전략, 코드 리뷰, 배포 자동화 방법.
---

## 현실: 복잡한 전략은 오버킬이다

처음 kconstrade를 시작할 때, 나는 완벽한 Git Flow를 꿈꿨다:

```
main (프로덕션)
  ↑
release/1.0.0 (QA 버전)
  ↑
develop (개발 메인)
  ↑
feature/*, bugfix/*, hotfix/* (각 개발자의 브랜치)
```

멋있어 보였다. 하지만 3개월 뒤, 현실은 이랬다:

```
main
  ↑
feature/* ← 3개월 동안 안 머지된 브랜치
feature/another ← 충돌로 머지 불가
feature/old-idea ← 누가 만든 브랜치? 삭제해도 되나?
```

**팀이 작을 땐 복잡한 전략이 역효과다.**

## 선택지 1: Git Flow (큰 팀용)

### 구조

```
main ← 프로덕션 배포만 여기서
release ← 배포 준비
develop ← 개발 메인
feature/* ← 기능별 브랜치
```

### 언제 좋은가?

- **팀 규모**: 5명 이상
- **배포 주기**: 월 1회 이상 정식 릴리즈
- **QA**: 별도 QA 팀이 있음
- **동시 개발**: 여러 기능을 병렬 개발

### kconstrade가 처음 시도했던 방식

```bash
# 기능 개발
git checkout -b feature/payment-integration develop
# ... 코드 작성 ...
git push origin feature/payment-integration

# PR 생성 및 코드 리뷰
# 승인되면 develop에 머지

# release 준비
git checkout -b release/1.5.0 develop
# 테스트, 버전 업데이트
# QA 통과 후 main에 머지

# hotfix (긴급 버그)
git checkout -b hotfix/payment-bug main
# 패치
# main과 develop 모두에 머지
```

### 문제점

1. **브랜치 수명이 길다**: feature/payment-integration이 1달 동안 열려있으면?
2. **충돌 지옥**: develop에 여러 변경사항이 쌓이고, feature 브랜치와 충돌
3. **배포 복잡성**: release 브랜치와 main 동기화 관리

## 선택지 2: Trunk-Based Development (작은 팀용)

### 구조

```
main (항상 배포 가능한 상태)
  ← short-lived branches (1~3일 수명)
```

### 원칙

1. **작은 단위의 커밋**: 기능 전체가 아니라, "일부 동작"만 먼저 머지
2. **매일 main에 머지**: 최대 1~3일 정도만 따로 브랜치 유지
3. **Feature flags 사용**: 미완성 기능은 플래그로 숨김

### davhave.com이 채택한 방식

```bash
# 새 기능 시작
git checkout -b add-blog-comments

# 1시간 개발 후 커밋
git commit -m "WIP: 댓글 API 기초"
git push origin add-blog-comments

# PR 생성 (코드 리뷰)
# 다른 개발자 1명이 15분 내에 검토

# 승인되면 즉시 머지
git merge add-blog-comments --squash
git push origin main

# 브랜치 삭제
git branch -d add-blog-comments
```

### Feature Flags 예제

```javascript
export async function handleComments(req, env) {
  const COMMENTS_ENABLED = env.ENABLE_COMMENTS === 'true';

  if (COMMENTS_ENABLED) {
    return handleCommentsFeature(req, env);
  } else {
    // 댓글 기능이 숨겨져 있음
    return new Response('Comments not available yet', { status: 404 });
  }
}
```

배포 후, 환경 변수를 변경하면 기능이 활성화된다:

```bash
# 로컬
ENABLE_COMMENTS=false npx wrangler dev

# 프로덕션 (Cloudflare)
npx wrangler secret put ENABLE_COMMENTS
# 값: true
```

## 실제 비교: 우리의 선택

### kconstrade (처음: Git Flow)

```
장점:
- 명확한 배포 프로세스
- QA와 개발 분리

단점:
- 5개월 후, release 브랜치와 main이 동기화 안 됨
- feature 브랜치가 2주 이상 열려있음
- 충돌 해결에 시간 낭비
```

### davhave.com (Trunk-Based)

```
장점:
- 매일 배포 가능
- 충돌 최소화
- 빠른 피드백

단점:
- main이 항상 완벽해야 함 (테스트 필수)
- Feature flags 관리 필요
```

## 변경: kconstrade가 Trunk-Based로 전환한 이유

2024년 중반, 팀 구성이:

```
이전: 기획 1명 + 개발 2명 + QA 1명
현재: 개발 2명 (내 + 한 명), 자동화된 테스트
```

Git Flow는 "QA 팀이 있을 때" 이점이 있는데, 우리는 **자동화 테스트로 QA를 대체**했다. 따라서:

```bash
# 변경 전 (Git Flow)
feature 작성 (5일)
  ↓
코드 리뷰 (2일)
  ↓
develop 머지 (1일)
  ↓
release 브랜치에서 테스트 (3일)
  ↓
main 배포 (1일)
총 12일

# 변경 후 (Trunk-Based)
feature 작성 (1-2시간)
  ↓
자동 테스트 (5분)
  ↓
코드 리뷰 (30분)
  ↓
main 머지 (자동)
  ↓
배포 (자동)
총 1시간
```

## 구현: Trunk-Based 체크리스트

### 1단계: 자동 테스트 필수

```javascript
// package.json
{
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "precommit": "npm run test"
  }
}
```

Pre-commit 훅으로 테스트를 강제:

```bash
# .git/hooks/pre-commit
npm run test || exit 1
```

### 2단계: 짧은 리뷰 사이클

PR 템플릿 설정:

```markdown
## 변경사항
- [ ] 버그 수정
- [ ] 기능 추가
- [ ] 문서 업데이트

## 어떻게 테스트했나요?
1. ...
2. ...

## 스크린샷 (있으면)
...

## 머지 전 체크리스트
- [ ] 테스트 통과
- [ ] 코드 리뷰 승인 1명
- [ ] Feature flag 설정 (필요시)
```

### 3단계: CI/CD 자동화

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npx wrangler publish
```

main에 머지되면 자동으로:
1. 테스트 실행
2. 빌드
3. 배포

## 팀 규모별 추천

| 팀 규모 | 추천 전략 | 이유 |
|--------|---------|------|
| 1명 (나) | Trunk-Based | 의사결정 빠름, 테스트가 전부 |
| 2~3명 | Trunk-Based + Feature Flags | 작은 PR, 빠른 리뷰 |
| 4~6명 | Trunk-Based 또는 Git Flow 하이브리드 | 팀 문화에 따라 |
| 7명 이상 | Git Flow | 명확한 역할 분리 필요 |

## 실제 사용 중인 커맨드

```bash
# 새 기능 시작
git checkout -b feature/payment-method

# 한두 시간 개발
git add .
git commit -m "Add payment method selection"

# 푸시
git push origin feature/payment-method

# GitHub PR 생성
# (또는 gh pr create)

# 리뷰 받고 머지
gh pr merge --squash

# 로컬 정리
git checkout main
git pull origin main
git branch -d feature/payment-method
```

## 결론: 현명한 선택

Git Flow는 훌륭한 전략이지만, **전체 팀이 따르지 않으면 오버헤드만 커진다.** 

우리의 결론: 

> "팀 규모와 배포 주기에 맞는 전략을 택하고, 정기적으로 평가한다."

현재 davhave + kconstrade 모두 Trunk-Based를 사용 중이고, 매우 만족한다. 팀이 5명 이상으로 커지면, 그때 다시 평가할 것이다.
