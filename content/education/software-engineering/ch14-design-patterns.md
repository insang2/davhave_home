---
title: 디자인 패턴
slug: ch14-design-patterns
excerpt: 반복되는 설계 문제에 대한 정형화된 해법인 GoF 디자인 패턴을, 책마루의 결제 수단 확장과 택배사 연동 문제에 적용해 Singleton·Facade·Strategy·Factory Method·Adapter 다섯 가지로 정리한다.
seo_title: 디자인 패턴 입문 — Singleton, Facade, Strategy, Factory Method, Adapter
seo_description: 다형성과 동적바인딩이라는 기반 위에서 GoF 디자인 패턴이 어떻게 반복되는 설계 문제를 해결하는지, 다섯 가지 대표 패턴을 예제 코드와 함께 설명한다.
order_index: 14
---

## 매번 새로 고민하지 않아도 되는 것들

13장에서 책마루 시스템의 모듈 구조를 만드는 방법을 다뤘다면, 이번 장은 그 모듈들을 실제로 구현할 때 반복적으로 마주치는 문제들을 다룬다. "결제 수단을 나중에 추가하기 쉽게 만들려면 어떻게 설계해야 하나", "서로 인터페이스가 다른 택배사 API 세 개를 하나의 배송 모듈에서 다루려면 어떻게 해야 하나" — 이런 문제는 책마루뿐 아니라 거의 모든 소프트웨어 프로젝트에서 형태만 바뀐 채 반복해서 등장한다.

**디자인 패턴(design pattern)**은 이렇게 자주 반복되는 설계 문제에 대해, 앞선 개발자들의 경험이 쌓여 만들어진 정형화된 해법이다. 건축가 크리스토퍼 알렉산더가 "건물 설계에는 반복적으로 나타나는 좋은 해법들이 있고, 이를 패턴으로 정리해두면 매번 처음부터 고민하지 않고 재사용할 수 있다"고 제안한 아이디어에서 출발했다. 이 아이디어는 소프트웨어 분야로 옮겨져, 1994년 Gamma·Helm·Johnson·Vlissides 네 저자(흔히 GoF, Gang of Four라 불린다)가 23가지 패턴을 정리해 소개하면서 널리 퍼졌다.

GoF는 디자인 패턴을 "특정한 상황에서 일반적인 설계 문제를 해결하기 위해 서로 교류하는, 수정 가능한 객체와 클래스들에 대한 기술"이라 정의한다. 조금 풀어 말하면, 패턴은 최적화된 알고리즘 코드 한 조각이 아니라 **클래스나 객체들이 어떤 역할을 나눠 맡고 어떻게 협력할지에 대한 구조적인 템플릿**이다. 패턴을 알고 있는 설계자들끼리는 "여기는 Strategy 패턴으로 가죠"라는 한마디로 복잡한 구조에 대한 합의를 빠르게 끌어낼 수 있다는 것도 패턴의 실용적인 가치다.

## 패턴을 이해하기 위한 전제: 다형성과 동적 바인딩

디자인 패턴 대부분은 객체지향 언어의 **다형성(polymorphism)**을 활용한다. 다형성은 같은 이름의 오퍼레이션이 클래스마다 다르게 동작하는 것을 말한다. 상위 클래스에 하나의 오퍼레이션을 정의해두고, 각 하위 클래스가 자신의 방식대로 그 오퍼레이션을 재정의(override)하면, 호출하는 쪽은 상위 클래스의 오퍼레이션만 알면 될 뿐 실제로 어떤 하위 클래스의 코드가 실행될지는 신경 쓸 필요가 없다.

이때 실제로 어떤 하위 클래스의 코드가 실행될지는 컴파일 시점이 아니라 **실행 시점(run time)**에 결정된다. 이를 **동적 바인딩(dynamic binding)**이라 한다. 다형성과 동적 바인딩이 결합하면, 새로운 하위 클래스를 추가하더라도 그 하위 클래스를 호출하는 기존 코드는 한 줄도 고칠 필요가 없다는 강력한 성질이 생긴다. 이 장에서 다루는 다섯 패턴 모두 이 성질을 서로 다른 방식으로 활용한다.

## GoF 패턴의 분류

GoF의 23개 패턴은 두 기준으로 분류된다. 하나는 **목적**(생성, 구조, 행위 중 무엇을 다루는가), 다른 하나는 **범위**(클래스 사이의 관계인가, 객체 사이의 관계인가)다.

| 목적 \\ 범위 | 클래스 | 객체 |
|---|---|---|
| 생성 | Factory Method | Singleton, Builder, Prototype 등 |
| 구조 | Adapter(클래스 버전) | Adapter(객체 버전), Facade 등 |
| 행위 | Template Method, Interpreter | Strategy, Observer 등 |

이 장에서는 이 표에서도 자주 쓰이는 다섯 가지 — Singleton, Facade, Strategy, Factory Method, Adapter — 를 책마루 예제로 살펴본다.

## Singleton 패턴 — 인스턴스를 하나만 허용한다

**의도**: 클래스의 인스턴스가 오직 하나만 만들어지도록 보장하고, 그 인스턴스에 접근할 수 있는 전역 접근점을 제공한다.

책마루 시스템은 매장 POS와 온라인 주문이 같은 재고 데이터를 실시간으로 공유해야 한다(1장에서 언급한 그 동시성 문제다). 만약 여러 모듈이 각자 재고 데이터베이스 커넥션을 따로따로 만든다면, 커넥션 관리가 흩어져 재고 동기화 시점을 예측하기 어려워진다. `StockManager`라는 클래스 하나만 재고 데이터에 접근하도록 강제하면, 재고 관련 로직이 한 곳으로 모여 일관성을 지키기 쉬워진다.

```java
public class StockManager {
    private static StockManager instance;

    private StockManager() {
        // private 생성자 — 외부에서 new StockManager()로 만들 수 없다.
    }

    public static StockManager getInstance() {
        if (instance == null) {
            instance = new StockManager();
        }
        return instance;
    }

    public int checkStock(String productCode) {
        // 실제 재고 조회 로직
        return 0;
    }
}
```

생성자를 `private`으로 막아 외부에서 직접 `new`로 만들 수 없게 하고, `getInstance()`라는 정적(static) 메서드로만 인스턴스에 접근하도록 하는 것이 Singleton 패턴의 기본 구조다. 다만 이 패턴은 남용하면 전역 변수와 비슷한 부작용 — 여러 모듈이 몰래 상태를 공유하게 되는 문제 — 을 낳을 수 있어, 정말로 "인스턴스가 하나여야만 하는" 자원(연결 관리자, 설정 관리자 등)에만 제한적으로 쓰는 것이 안전하다.

## Facade 패턴 — 복잡한 내부를 정문 하나로 감춘다

**의도**: 여러 하위 시스템으로 이루어진 복잡한 서브시스템에, 단순화된 인터페이스 하나를 제공한다.

책마루의 "주문 확정" 처리는 재고 차감, 결제 승인, 배송 예약(동네 배달 또는 택배사 연동), 알림 발송이라는 네 개의 하위 시스템을 순서대로 호출해야 한다. 만약 주문 화면 코드가 이 네 시스템을 직접 하나씩 호출한다면, 주문 화면은 재고·결제·배송·알림 모듈 모두와 결합되어 결합도가 높아진다(12장에서 다룬 스탬프 결합·데이터 결합이 사방으로 뻗는 셈이다).

```java
public class OrderFacade {
    public void completeOrder(Order order) {
        StockManager.getInstance().deduct(order);
        PaymentGateway.approve(order);
        DeliveryScheduler.schedule(order);
        NotificationService.notify(order);
    }
}
```

주문 화면은 이제 `OrderFacade.completeOrder(order)` 한 줄만 호출하면 된다. 내부적으로 결제대행사 API가 바뀌거나 배송 예약 순서가 조정되어도, 그 변경은 `OrderFacade` 안에서만 처리되고 주문 화면 코드는 전혀 영향받지 않는다. Facade는 새로운 기능을 추가하는 패턴이 아니라, 이미 존재하는 하위 시스템들 앞에 창구 하나를 세워 결합도를 낮추는 패턴이라는 점이 특징이다.

## Strategy 패턴 — 알고리즘을 갈아 끼운다

**의도**: 여러 알고리즘을 각각 별도의 클래스로 캡슐화하고, 서로 바꿔 끼울 수 있게 한다.

책마루 프로젝트 브리핑에서 언급했던 "결제수단 확장" 문제가 바로 Strategy 패턴이 다루는 전형적인 상황이다. 신용카드 결제, 간편결제, 매장 방문 결제(대면 결제) 각각은 승인 처리 방식이 다르다. 만약 결제 모듈 하나에 `if (결제수단 == "카드") {...} else if (결제수단 == "간편결제") {...}` 식으로 조건문을 쌓아간다면, 결제 수단이 늘어날 때마다 이 모듈을 계속 열어 고쳐야 하고 조건문은 점점 비대해진다.

```java
public interface PaymentStrategy {
    void approve(int amount);
}

public class CardPayment implements PaymentStrategy {
    public void approve(int amount) {
        System.out.println("카드사 승인 요청: " + amount + "원");
    }
}

public class SimplePayPayment implements PaymentStrategy {
    public void approve(int amount) {
        System.out.println("간편결제 승인 요청: " + amount + "원");
    }
}

public class Checkout {
    private PaymentStrategy strategy;

    public void setStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void pay(int amount) {
        strategy.approve(amount);
    }
}
```

새로운 결제 수단(예: 계좌이체)이 추가되어도 `PaymentStrategy`를 구현하는 클래스 하나만 새로 만들면 되고, `Checkout` 클래스는 손댈 필요가 없다. 알고리즘(여기서는 승인 방식)을 사용하는 쪽(`Checkout`)과 실제 알고리즘을 구현하는 쪽(`CardPayment`, `SimplePayPayment`)이 분리되어, 조건문 대신 실행 시점에 전략 객체를 갈아 끼우는 방식으로 확장성이 확보된다.

## Factory Method 패턴 — 객체를 만드는 결정을 미룬다

**의도**: 객체를 생성하는 인터페이스는 정의하되, 어떤 클래스의 인스턴스를 생성할지는 하위 클래스가 결정하도록 미룬다.

책마루의 "배송 방법 결정" 로직(13장 트랜잭션흐름 설계에서 다뤘던 그 지점)을 떠올려보자. 배달 주소를 보고 동네 배달을 쓸지 택배 연동을 쓸지 정한 뒤, 그에 맞는 배송 처리 객체를 만들어야 한다. 이 "어떤 배송 객체를 만들지 결정하는" 책임을 배송 처리 로직 안에 캡슐화하는 것이 Factory Method 패턴이다.

```java
public abstract class DeliveryFactory {
    public abstract Delivery createDelivery();

    public void process(Order order) {
        Delivery delivery = createDelivery();
        delivery.schedule(order);
    }
}

public class LocalDeliveryFactory extends DeliveryFactory {
    public Delivery createDelivery() {
        return new LocalDelivery();
    }
}

public class CourierDeliveryFactory extends DeliveryFactory {
    public Delivery createDelivery() {
        return new CourierDelivery();
    }
}
```

`process()` 메서드는 `Delivery`라는 인터페이스만 알 뿐, 실제로 `LocalDelivery`가 만들어질지 `CourierDelivery`가 만들어질지는 하위 클래스인 `LocalDeliveryFactory` 또는 `CourierDeliveryFactory`가 결정한다. 나중에 "편의점 픽업"이라는 세 번째 배송 방식이 추가되어도, `DeliveryFactory`를 상속하는 새 클래스 하나를 추가하면 되고 `process()`의 흐름은 그대로 유지된다. Strategy 패턴과 얼핏 비슷해 보이지만, Strategy가 "알고리즘 자체를 바꿔 끼우는 것"에 초점이 있다면 Factory Method는 "객체를 만드는 책임을 하위 클래스로 미루는 것"에 초점이 있다는 차이가 있다.

## Adapter 패턴 — 서로 다른 인터페이스를 이어 붙인다

**의도**: 호환되지 않는 인터페이스를 가진 클래스를, 클라이언트가 기대하는 인터페이스로 변환해 함께 동작하도록 한다.

책마루가 배송을 위해 여러 택배사와 연동한다고 하자. A택배사 API는 `A택배사API.보내기(주소, 물품정보)`라는 메서드를, B택배사 API는 `BCourierApi.requestShipment(destInfo)`라는 전혀 다른 이름과 매개변수 구조를 갖고 있을 수 있다. 배송 모듈이 이 두 API를 직접 각각 호출하도록 짜면, 택배사가 추가될 때마다 배송 모듈 내부를 계속 고쳐야 한다.

```java
public interface CourierAdapter {
    void requestPickup(String address, String itemInfo);
}

public class CourierAAdapter implements CourierAdapter {
    private final CourierAApi api = new CourierAApi();

    public void requestPickup(String address, String itemInfo) {
        api.보내기(address, itemInfo); // 기존 API 호출 방식을 그대로 감싼다
    }
}

public class CourierBAdapter implements CourierAdapter {
    private final CourierBApi api = new CourierBApi();

    public void requestPickup(String address, String itemInfo) {
        api.requestShipment(address + "|" + itemInfo); // 다른 형식의 API를 감싼다
    }
}
```

배송 모듈은 이제 `CourierAdapter`라는 통일된 인터페이스만 알면 되고, 실제로 어느 택배사의 API가 호출되는지는 어댑터 뒤에 숨겨진다. Adapter 패턴은 새 기능을 만드는 것이 아니라 **이미 존재하지만 인터페이스가 맞지 않는 것들을 재사용 가능하게 만드는** 패턴이라는 점에서, "라이브러리 제공자에게 API를 바꿔달라고 요청할 수 없는" 현실적인 상황에서 특히 유용하다.

## 패턴은 만능이 아니다 — 과유불급

다섯 패턴을 살펴보고 나면 "책마루 시스템 구석구석에 패턴을 적용하고 싶다"는 유혹이 생길 수 있다. 하지만 패턴을 배웠다고 해서 쓰지 않아도 될 곳까지 적용하면 오히려 설계가 필요 이상으로 복잡해진다. 결제 수단이 카드 하나뿐이고 앞으로도 늘어날 계획이 없다면 Strategy 패턴 없이 `if`문 하나로 충분하다. 패턴은 "이런 종류의 변화가 반복적으로 예상될 때" 그 변화를 감당하기 위해 들이는 구조적 비용이지, 무조건 적용해야 할 규칙이 아니다. 논어의 표현을 빌리면 과유불급(過猶不及) — 지나침은 미치지 못함과 같다는 것을 패턴 적용에도 그대로 적용해야 한다.

## 핵심 정리

- 디자인 패턴은 반복되는 설계 문제에 대한 정형화된 해법이며, 다형성과 동적 바인딩이라는 객체지향의 성질을 기반으로 한다.
- Singleton은 인스턴스를 하나로 제한해 전역 접근점을 제공하고, Facade는 복잡한 하위 시스템 앞에 단순한 창구를 세운다.
- Strategy는 알고리즘을 갈아 끼울 수 있게 캡슐화하고, Factory Method는 객체 생성 결정을 하위 클래스로 미룬다.
- Adapter는 인터페이스가 맞지 않는 기존 코드를 재사용 가능하게 감싼다.
- 패턴은 예상되는 변화의 종류에 맞춰 선택적으로 적용해야 하며, 남용하면 오히려 설계와 유지보수를 복잡하게 만든다.

다음 장(15장)에서는 지금까지 다룬 내부 구조 설계에서 시선을 옮겨, 손님과 직원이 직접 마주하는 사용자 인터페이스를 어떻게 설계할지, 그리고 모듈 내부의 절차를 실제 코드로 옮기기 직전 단계인 상세설계를 어떤 도구로 문서화하는지를 다룬다.
