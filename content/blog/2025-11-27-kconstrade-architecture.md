---
title: kconstrade.com 시스템 아키텍처 정리
slug: kconstrade-architecture
excerpt: 건설 산업 플랫폼 kconstrade의 풀스택 아키텍처와 주요 설계 결정사항.
seo_title: kconstrade 플랫폼 아키텍처 분석
seo_description: 건설 거래 플랫폼의 시스템 설계, 사용자 인증, 결제 처리, 스케일링 전략.
---

## 프로젝트 배경

kconstrade.com은 건설 자재 및 서비스 거래 플랫폼이다. 공급자가 물품을 올리고, 구매자가 주문하고, 결제가 처리되는 전형적인 **마켓플레이스 시스템**이다. davhave.com의 단순한 블로그와는 다른 복잡성이 있다.

## 스택: 전통적인 선택지

davhave.com과 달리, kconstrade는 사용자 확대와 안정성이 중요했다. 그래서 선택한 스택:

- **프론트엔드**: React + TypeScript (Next.js 14)
- **백엔드**: Node.js + Express (AWS Lambda 고려)
- **데이터베이스**: PostgreSQL (AWS RDS)
- **캐시**: Redis (AWS ElastiCache)
- **인증**: JWT + OAuth2 (카카오, 네이버 소셜 로그인)
- **결제**: 토스 페이먼츠 API
- **배포**: Docker + ECS

## 핵심 구조

```
┌─────────────────────────────┐
│   사용자 (웹/모바일)          │
└────────────┬────────────────┘
             │
┌────────────┴────────────────┐
│  CDN (CloudFront)           │
│  ├─ 정적 자산 (Next.js)      │
│  └─ API 캐싱               │
└────────────┬────────────────┘
             │
┌────────────┴─────────────────────┐
│  API Gateway (AWS)               │
│  └─ 속도 제한, 인증 검증         │
└────────────┬─────────────────────┘
             │
┌────────────┴──────────────────────┐
│  ECS / Fargate                    │
│  ├─ 사용자 서비스                 │
│  ├─ 상품 서비스                   │
│  ├─ 주문 서비스                   │
│  ├─ 결제 서비스                   │
│  └─ 알림 서비스 (SQS)             │
└────────────┬──────────────────────┘
             │
      ┌──────┴──────┬─────────┐
      │             │         │
  PostgreSQL   Redis      S3
  (사용자/      (세션/  (이미지)
   거래)        캐시)
```

## 사용자 관리: 전자상거래의 핵심

건설 산업은 B2B 거래가 많아서, **사용자 검증이 중요하다.** 누구나 공급자가 될 수 없다.

### 사용자 타입

```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE,
  password_hash VARCHAR(255),
  user_type ENUM('individual', 'supplier', 'retailer', 'contractor'),
  
  -- 소셜 로그인
  kakao_id VARCHAR(50) UNIQUE,
  naver_id VARCHAR(50) UNIQUE,
  
  -- 인증 상태
  email_verified BOOLEAN DEFAULT FALSE,
  phone_verified BOOLEAN DEFAULT FALSE,
  business_verified BOOLEAN DEFAULT FALSE, -- 사업자 인증
  
  -- 프로필
  name VARCHAR(100),
  company_name VARCHAR(255),
  business_registration_number VARCHAR(20),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 인증 플로우

```javascript
// 로그인
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "..."
}

응답:
{
  "accessToken": "eyJhbGc...", // JWT, 15분 유효
  "refreshToken": "eyJhbGc...", // JWT, 7일 유효
  "user": { id, email, userType, ... }
}

// 토큰 새로고침
POST /api/auth/refresh
{
  "refreshToken": "..."
}
```

**JWT 대신 세션을 쓸 수도 있었지만**, 마이크로서비스 아키텍처에서는 토큰이 더 간단하다. 각 서비스가 독립적으로 토큰을 검증할 수 있기 때문이다.

## 상품 관리: 검색과 필터링

davhave의 블로그는 100개 포스트면 충분하지만, kconstrade는 수천 개의 상품을 빠르게 검색해야 한다.

### 데이터 구조

```sql
CREATE TABLE products (
  id BIGINT PRIMARY KEY,
  supplier_id BIGINT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category_id INT,
  price DECIMAL(12, 2),
  stock INT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  
  INDEX (supplier_id),
  INDEX (category_id),
  INDEX (created_at DESC)
);

CREATE TABLE product_categories (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  parent_id INT, -- 대분류/소분류 지원
  
  INDEX (parent_id)
);

CREATE TABLE product_attributes (
  id BIGINT PRIMARY KEY,
  product_id BIGINT,
  attribute_name VARCHAR(100), -- "사이즈", "색상", etc
  attribute_value VARCHAR(255),
  
  INDEX (product_id)
);
```

### 검색 최적화

데이터베이스만으로는 느리니 **Elasticsearch** 도입을 고려했다:

```javascript
// 제품 저장 시 Elasticsearch에도 동기화
async function saveProduct(product, env) {
  // 1. PostgreSQL에 저장
  const result = await db.query(
    'INSERT INTO products (...) VALUES (...)',
    [...]
  );

  // 2. Elasticsearch에 인덱싱
  await elasticsearch.index({
    index: 'products',
    id: result.id,
    body: {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.categoryId,
      supplier: product.supplierId,
      created_at: new Date()
    }
  });
}

// 검색
async function searchProducts(query, filters) {
  const esQuery = {
    query: {
      bool: {
        must: [
          { multi_match: { query, fields: ['name', 'description'] } }
        ],
        filter: [
          { range: { price: { gte: filters.minPrice, lte: filters.maxPrice } } },
          { term: { category: filters.category } }
        ]
      }
    },
    from: (filters.page - 1) * 20,
    size: 20
  };

  return await elasticsearch.search({ index: 'products', body: esQuery });
}
```

## 주문 처리: 상태 관리의 중요성

주문 흐름은 여러 단계를 거친다:

```
pending_payment
    ↓
paid
    ↓ (공급자가 준비)
preparing
    ↓
shipped
    ↓
delivered
    ↓
completed (또는 refunded)
```

각 상태 변화는 **데이터베이스 트랜잭션**이어야 한다. 부분 결제나 취소 같은 엣지 케이스를 처리해야 하기 때문이다.

```sql
CREATE TABLE orders (
  id BIGINT PRIMARY KEY,
  buyer_id BIGINT NOT NULL,
  supplier_id BIGINT NOT NULL,
  status ENUM('pending', 'paid', 'preparing', 'shipped', 'delivered', 'completed', 'refunded'),
  
  total_amount DECIMAL(12, 2),
  payment_method VARCHAR(50), -- 'toss_payments', 'card', etc
  payment_id VARCHAR(255), -- 결제 게이트웨이 ID
  
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  
  INDEX (buyer_id, created_at DESC),
  INDEX (supplier_id, status)
);

CREATE TABLE order_items (
  id BIGINT PRIMARY KEY,
  order_id BIGINT,
  product_id BIGINT,
  quantity INT,
  unit_price DECIMAL(12, 2),
  
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

CREATE TABLE order_status_history (
  id BIGINT PRIMARY KEY,
  order_id BIGINT,
  old_status VARCHAR(50),
  new_status VARCHAR(50),
  changed_at TIMESTAMP,
  changed_by BIGINT -- 누가 상태를 변경했나?
);
```

## 결제 통합: 토스 페이먼츠

결제는 가장 민감한 부분이다. **절대 자체 결제 시스템을 만들지 않는다.** 토스 페이먼츠 같은 검증된 서비스를 사용한다.

```javascript
// 주문 생성 → 결제 요청
async function initiatePayment(orderId, amount) {
  const response = await fetch('https://api.tosspayments.com/v1/payments/request', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(TOSS_API_KEY).toString('base64')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      orderId: orderId,
      amount: amount,
      currency: 'KRW',
      method: 'CARD',
      orderName: 'kconstrade 상품 주문'
    })
  });

  const payment = await response.json();

  // 결제 요청 정보 저장
  await db.query(
    'UPDATE orders SET payment_id = ? WHERE id = ?',
    [payment.paymentKey, orderId]
  );

  return payment;
}

// 결제 확인 (웹훅)
app.post('/webhooks/toss-payment', async (req, res) => {
  const { orderId, paymentKey, amount } = req.body;

  // 토스에서 실제 결제 여부 확인
  const payment = await verifyPaymentWithToss(paymentKey);

  if (payment.status === 'DONE' && payment.amount === amount) {
    // 주문 상태를 'paid'로 변경
    await db.query(
      'UPDATE orders SET status = ?, updated_at = NOW() WHERE id = ?',
      ['paid', orderId]
    );

    // 공급자에게 알림 (SQS)
    await sqs.sendMessage({
      QueueUrl: SUPPLIER_QUEUE,
      MessageBody: JSON.stringify({ orderId, supplierId: ... })
    });
  }

  res.json({ success: true });
});
```

## 알림 시스템: 비동기 처리

주문 상태 변화, 새 메시지, 상품 리뷰 같은 알림은 **즉시 처리될 필요가 없다.** AWS SQS를 사용해 비동기 처리:

```javascript
// 알림 큐에 추가
async function notifySupplier(orderId) {
  await sqs.sendMessage({
    QueueUrl: NOTIFICATION_QUEUE,
    MessageBody: JSON.stringify({
      event: 'order_created',
      orderId: orderId,
      timestamp: new Date().toISOString()
    })
  });
}

// 백그라운드 워커가 처리
async function processNotifications() {
  const messages = await sqs.receiveMessage({
    QueueUrl: NOTIFICATION_QUEUE,
    MaxNumberOfMessages: 10
  });

  for (const message of messages.Messages) {
    const { event, orderId } = JSON.parse(message.Body);

    if (event === 'order_created') {
      // 이메일 전송
      await sendEmail({
        to: supplier.email,
        subject: '새로운 주문',
        body: `주문 ${orderId}이 들어왔습니다.`
      });

      // 웹 푸시 알림
      await sendWebPush(supplier.pushToken, {
        title: '새로운 주문',
        body: `주문 ${orderId}이 들어왔습니다.`
      });
    }

    // 처리 완료 → 큐에서 제거
    await sqs.deleteMessage({
      QueueUrl: NOTIFICATION_QUEUE,
      ReceiptHandle: message.ReceiptHandle
    });
  }
}
```

## 스케일링 고려사항

kconstrade가 성장할 때 마주친 문제들:

1. **데이터베이스**: 동시성 증가 → Read Replica 추가
2. **캐시**: 자주 조회되는 카테고리/상품 → Redis에 캐싱
3. **검색**: 상품 수 증가 → Elasticsearch 필수
4. **이미지**: 용량 증가 → S3 + CloudFront CDN
5. **결제**: 동시 결제 → 토스의 동시성 제한 확인, 큐 추가

## 결론: 복잡한 만큼 신중하게

davhave.com은 개인 블로그라 단순함을 추구할 수 있었지만, kconstrade는 **사용자 데이터, 금전 거래, 다양한 워크플로우**가 얽혀있다. 각 선택이 신중해야 하고, 검증된 도구를 우선한다. 결과적으로 조금 더 "전통적인" 아키텍처가 **가장 안전하고 유지보수하기 쉬웠다.**
