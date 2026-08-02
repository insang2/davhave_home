---
title: 왜 AWS 대신 Cloudflare Workers를 택했는가
slug: cloudflare-vs-aws
excerpt: 개인 프로젝트와 소규모 팀에게 Cloudflare가 더 나은 이유와 각각의 트레이드오프.
seo_title: Cloudflare vs AWS 비교 분석
seo_description: Workers, Lambda, EC2 비용/성능/운영 복잡도 비교, 언제 어디를 써야 하는가.
---

## 결정의 순간

davhave.com을 시작할 때, 클라우드 제공자를 선택해야 했다:

- **AWS**: 업계 표준, 많은 선택지, 복잡함
- **GCP**: Google의 인프라, 비용 경쟁력
- **Azure**: Microsoft, 엔터프라이즈 포커스
- **Cloudflare**: 작지만 강력한 엣지 네트워크

당시 나는 AWS의 복잡성에 질려있었다. 그리고 Cloudflare라는 이름은 알고 있었다 — DNS와 CDN을 통해. 그런데 Workers는?

## AWS Lambda: 강력하지만 복잡

AWS의 강점:

```
1. 거의 모든 것을 할 수 있다
2. 엔터프라이즈 규모까지 확장 가능
3. 풍부한 문서와 커뮤니티
```

하지만 davhave 규모에선:

```bash
# 1. 서버리스 함수 설정
# - 실행 역할(IAM Role) 작성
# - 트리거 설정 (API Gateway)
# - 환경 변수 관리 (Systems Manager Parameter Store)
# - 로깅 (CloudWatch)
# - 모니터링 (X-Ray)
# - 보안 (VPC, 보안 그룹)

# 설정할 것이 너무 많다!

# 2. 비용 계산
# - Lambda: 요청당 $0.0000002
# - API Gateway: 백만 요청당 $3.50
# - CloudWatch Logs: GB당 $0.50
# - 네트워크 아웃바운드: GB당 $0.09
# 
# 월 1000만 요청 기준 약 $35~$50
```

## Cloudflare Workers: 단순함이 힘이다

Workers의 구조:

```javascript
export default {
  async fetch(request) {
    return new Response('Hello, world!');
  }
};
```

무려 3줄이면 서버가 돈다. 배포는:

```bash
npx wrangler publish
```

1초면 끝난다. 비용은:

```
무료 티어: 월 10만 요청
유료: 월 $20 (무제한 요청)

davhave 수준 트래픽: $0 (무료 티어로 충분)
```

## 성능 비교: 엣지 vs 중앙 집중식

### AWS Lambda

```
사용자 (일본)
  ↓ (네트워크 지연 100ms)
API Gateway (미국 버지니아)
  ↓
Lambda 함수 (미국 버지니아)
  ↓ (다시 100ms)
사용자에게 응답

총 지연: 200ms + 실행 시간
```

### Cloudflare Workers

```
사용자 (일본)
  ↓
Cloudflare Edge (도쿄 센터 - 1ms)
  ↓ (필요시 DB/API에 접근)
응답

총 지연: 1ms + 실행 시간
```

davhave.com의 실제 측정:

| 위치 | AWS Lambda | Cloudflare | 개선도 |
|------|-----------|-----------|--------|
| 미국 | 50ms | 15ms | 3배 |
| 유럽 | 150ms | 30ms | 5배 |
| 아시아 | 200ms | 10ms | 20배! |

지리적으로 먼 곳의 성능 차이가 극적이다.

## 운영 복잡도

### AWS: 학습 곡선

```
DAY 1: "IAM이 뭐예요?"
DAY 7: CloudFormation 문법 배우기
DAY 14: VPC와 서브넷 이해하기
DAY 30: 여전히 배우고 있음
```

역할과 권한이 많아서, 실수하기 쉽다:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "lambda:InvokeFunction",
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:*"
    },
    {
      "Effect": "Allow",
      "Action": "rds-db:connect",
      "Resource": "arn:aws:rds-db:*:123456789012:dbuser:*/iamuser"
    }
    // ... 더 많은 권한들
  ]
}
```

### Cloudflare: 간단함

```
DAY 1: wrangler 설치
DAY 2: 첫 배포
DAY 3: D1, R2 바인딩 추가
완료!
```

## 비용 상세 비교

월 100만 요청, 데이터베이스 접근 1만 회 기준:

### AWS 구성
- Lambda: $2
- API Gateway: $3.50
- RDS (db.t3.micro): $15
- CloudWatch: $2
- 네트워크 이그레스: $0.50
- **총계: ~$23**

### Cloudflare 구성
- Workers: $0 (무료 티어)
- D1: $0.75
- R2: $1.50
- **총계: ~$2.25**

**10배 저렴하다.**

## AWS가 필요한 경우

Cloudflare가 모든 상황에 좋은 건 아니다:

```
1. 매우 복잡한 비즈니스 로직
   → Lambda + Step Functions 조합 필요

2. 머신러닝 모델 실행
   → SageMaker나 EC2 필요

3. 오래된 자산 통합 (VPN, on-prem 서버)
   → AWS와의 연결이 기본

4. 마이크로서비스 조율
   → ECS, EKS 필요

5. 규제 준수 (HIPAA, PCI)
   → AWS 컴플라이언스 인증 있음
```

## Cloudflare의 한계

솔직하게 인정해야 할 부분:

```
1. 최대 실행 시간: 30초 (CPU 바운드 작업 불가)
   예: 큰 파일 처리, 복잡한 계산

2. 런타임 선택 제한
   → JavaScript/Python/TypeScript 주로 사용
   → Rust는 WASM으로만

3. 상태 저장 불가
   → 모든 요청이 독립적
   → 세션은 반드시 D1/Redis에 저장

4. 로컬 파일 시스템 불가
   → 임시 파일 저장 못 함

5. 디버깅이 프로덕션 중심
   → wrangler dev가 모든 것을 시뮬레이션하진 못함
```

## 마이그레이션 경로

만약 Cloudflare에서 AWS로 마이그레이션하게 되면:

```javascript
// Workers 함수
export default {
  async fetch(request, env) {
    // 이 부분은 Lambda 함수가 된다
    return handleRequest(request, env);
  }
};

// ↓ 그대로 Lambda로 포팅 가능
export const handler = async (event, context) => {
  // event = HTTP 요청 정보
  // context = 실행 환경 정보
  
  // 기존 handleRequest 함수 재사용 가능
  return await handleRequest(event, env);
};
```

실제로 kconstrade를 만들 때, 초기에 Workers로 시작했다가 복잡도 증가로 AWS Lambda로 전환했다. 이식이 90% 이상 코드를 재사용할 수 있을 정도로 깔끔했다.

## 의사결정: 팀과 스케일

| 상황 | 추천 | 이유 |
|------|------|------|
| 개인 프로젝트 | Cloudflare | 비용, 관리 부담 최소 |
| 스타트업 (5명) | Cloudflare | 민첩성, 비용 절감 |
| 중견 팀 (20명) | AWS | 복잡도 증가, 컴플라이언스 |
| 대규모 엔터프라이즈 | AWS/Azure/GCP | 통합, 보안 |

## davhave의 선택: 현명한 범위

davhave.com은:

```
- 개인 블로그 + 교육 플랫폼
- 월 10만 미만의 사용자
- 복잡한 계산 불필요
- 글로벌 성능 중요
```

**Cloudflare Workers 최적의 사용 사례다.**

## 결론: 올바른 도구 선택

AWS는 "모든 것을 할 수 있는" 플랫폼이다. 하지만 우리가 필요한 건 "우리가 할 것을 빠르게 하는" 플랫폼이었다.

Cloudflare는 자신의 한계를 알고 있고, 그 범위 내에서 완벽하다. 그것만으로 충분했다.

가장 좋은 기술 선택은 **"우리가 정말 필요한 것이 뭔가"를 먼저 명확히 한 후, 정확히 그만큼을 충족하는 도구를 고르는 것**이다.
