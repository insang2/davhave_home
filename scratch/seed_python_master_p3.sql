-- Full Python Master Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch09-object-oriented-programming-classes',
  '객체지향 프로그래밍(OOP): 클래스, 인스턴스, 생성자(__init__) 및 캡슐화',
  '현실 세계의 사물을 객체로 모델링하는 파이썬 클래스(Class) 작성법, 생성자 __init__(), self 인자 및 비공개 속성(__private)을 통한 캡슐화를 다룹니다.',
  '데이터와 관련 기능을 하나로 묶어 프로그램의 재사용성과 유지보수성을 극대화하는 **객체지향 프로그래밍(OOP)** 기초를 학습합니다.

---

## 1. OOP 클래스 용어 사전 (Glossary)

- **Class (클래스)**: 객체를 찍어내기 위한 설계도(Blueprint)입니다.
- **Instance (인스턴스)**: 클래스 설계도를 바탕으로 실제 메모리에 할당된 객체 구체물입니다.
- **`__init__()` (생성자)**: 인스턴스가 최초 만들어질 때 자동으로 호출되어 속성 초기화를 담당하는 스페셜 메소드입니다.
- **`self`**: 인스턴스 자기 자신을 가리키는 첫 번째 매개변수로, 메소드 선언 시 반드시 명시해야 합니다.
- **Encapsulation (캡슐화)**: 변수명 앞에 두 개의 언더스코어(`__private`)를 붙여 외부의 직접적인 수정을 막고 네임 맹글링(Name Mangling) 처리하는 보안 기술입니다.

---

## 2. 파이썬 클래스 선언 및 캡슐화 코드

```python
class BankAccount:
    def __init__(self, owner: str, balance: float):
        self.owner = owner
        self.__balance = balance # 비공개 속성 (Encapsulation)

    def deposit(self, amount: float):
        if amount > 0:
            self.__balance += amount
            print(f"{amount:,}원 입금 완료 (잔액: {self.__balance:,}원)")

    def get_balance(self):
        return self.__balance

account = BankAccount("홍길동", 100000)
account.deposit(50000)
print(f"현재 잔액: {account.get_balance():,}원")
```
',
  '<p>데이터와 관련 기능을 하나로 묶어 프로그램의 재사용성과 유지보수성을 극대화하는 <strong>객체지향 프로그래밍(OOP)</strong> 기초를 학습합니다.</p>
<hr>
<h2>1. OOP 클래스 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Class (클래스)</strong>: 객체를 찍어내기 위한 설계도(Blueprint)입니다.</li>
<li><strong>Instance (인스턴스)</strong>: 클래스 설계도를 바탕으로 실제 메모리에 할당된 객체 구체물입니다.</li>
<li><strong><code>__init__()</code> (생성자)</strong>: 인스턴스가 최초 만들어질 때 자동으로 호출되어 속성 초기화를 담당하는 스페셜 메소드입니다.</li>
<li><strong><code>self</code></strong>: 인스턴스 자기 자신을 가리키는 첫 번째 매개변수로, 메소드 선언 시 반드시 명시해야 합니다.</li>
<li><strong>Encapsulation (캡슐화)</strong>: 변수명 앞에 두 개의 언더스코어(<code>__private</code>)를 붙여 외부의 직접적인 수정을 막고 네임 맹글링(Name Mangling) 처리하는 보안 기술입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 클래스 선언 및 캡슐화 코드</h2>
<pre><code class="language-python">class BankAccount:
    def __init__(self, owner: str, balance: float):
        self.owner = owner
        self.__balance = balance # 비공개 속성 (Encapsulation)

    def deposit(self, amount: float):
        if amount &gt; 0:
            self.__balance += amount
            print(f&quot;{amount:,}원 입금 완료 (잔액: {self.__balance:,}원)&quot;)

    def get_balance(self):
        return self.__balance

account = BankAccount(&quot;홍길동&quot;, 100000)
account.deposit(50000)
print(f&quot;현재 잔액: {account.get_balance():,}원&quot;)
</code></pre>
',
  'published',
  '파이썬 OOP 기초 - class, __init__, self, 인스턴스 변수, 캡슐화(__private)',
  '객체지향 설계, 클래스와 인스턴스, 생성자 메소드(__init__), self의 의미, 클래스 변수 vs 인스턴스 변수, 비공개 속성(__속성)을 통한 캡슐화를 학습합니다.',
  9,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch10-advanced-oop-inheritance-magic-methods',
  '상속(Inheritance), 다형성 및 던더 매직 메소드(Dunder Methods)',
  '클래스를 재사용 확장하는 상속(Inheritance), super() 연동, 객체의 동작을 파이썬답게 정의하는 매직 메소드(Dunder Methods)와 추상 클래스를 학습합니다.',
  '부모 클래스의 속성과 메소드를 물려받아 확장하는 **상속(Inheritance)**과 파이썬 연산자 동작을 직접 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.

---

## 1. 고급 OOP 용어 사전 (Glossary)

- **Inheritance (상속)**: 부모 클래스의 모든 기능을 자식 클래스가 그대로 받아 재사용하고 필요에 따라 재정의(Method Overriding)하는 OOP 핵심 기능입니다.
- **`super()`**: 부모 클래스의 생성자나 메소드를 자식 클래스 내부에서 명시적으로 호출해 주는 내장 함수입니다.
- **Dunder Methods (던더 매직 메소드)**: `__str__`, `__repr__`, `__len__`, `__eq__` 처럼 연산자나 내장 함수 호출 시 객체가 어떻게 반응할지 정의하는 메소드입니다.
- **ABC (Abstract Base Class)**: `abc` 모듈의 `@abstractmethod`를 써서 자식 클래스가 특정 메소드를 반드시 구현하도록 강제하는 추상 클래스 표준입니다.

---

## 2. 상속 및 매직 메소드 활용 실습

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "멍멍!"

    def __str__(self):
        return f"강아지 이름: {self.name}"

dog = Dog("바둑이")
print(dog)
print(f"울음소리: {dog.make_sound()}")
```
',
  '<p>부모 클래스의 속성과 메소드를 물려받아 확장하는 **상속(Inheritance)**과 파이썬 연산자 동작을 직접 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.</p>
<hr>
<h2>1. 고급 OOP 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Inheritance (상속)</strong>: 부모 클래스의 모든 기능을 자식 클래스가 그대로 받아 재사용하고 필요에 따라 재정의(Method Overriding)하는 OOP 핵심 기능입니다.</li>
<li><strong><code>super()</code></strong>: 부모 클래스의 생성자나 메소드를 자식 클래스 내부에서 명시적으로 호출해 주는 내장 함수입니다.</li>
<li><strong>Dunder Methods (던더 매직 메소드)</strong>: <code>__str__</code>, <code>__repr__</code>, <code>__len__</code>, <code>__eq__</code> 처럼 연산자나 내장 함수 호출 시 객체가 어떻게 반응할지 정의하는 메소드입니다.</li>
<li><strong>ABC (Abstract Base Class)</strong>: <code>abc</code> 모듈의 <code>@abstractmethod</code>를 써서 자식 클래스가 특정 메소드를 반드시 구현하도록 강제하는 추상 클래스 표준입니다.</li>
</ul>
<hr>
<h2>2. 상속 및 매직 메소드 활용 실습</h2>
<pre><code class="language-python">from abc import ABC, abstractmethod

class Animal(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return &quot;멍멍!&quot;

    def __str__(self):
        return f&quot;강아지 이름: {self.name}&quot;

dog = Dog(&quot;바둑이&quot;)
print(dog)
print(f&quot;울음소리: {dog.make_sound()}&quot;)
</code></pre>
',
  'published',
  '파이썬 고급 OOP - 상속, super(), 매직 메소드(__str__, __len__), ABC 추상 클래스',
  '부모 클래스 상속, super() 호출, 오버라이딩, 던더 매직 메소드(__str__, __repr__, __eq__, __len__), ABC(Abstract Base Class) 추상 클래스를 배웁니다.',
  10,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch11-iterators-generators-and-decorators',
  '이터레이터(Iterator), yield 제너레이터(Generator)와 데코레이터(Decorator)',
  '대용량 데이터를 지연 평가(Lazy Evaluation)로 다루는 제너레이터(yield)와 함수에 보일러플레이트 기능을 덧붙이는 데코레이터(@decorator)를 배웁니다.',
  '메모리를 극도로 아끼면서 순회 데이터를 만드는 **제너레이터(Generator)**와 기존 함수의 코드를 고치지 않고 기능을 확장하는 **데코레이터(Decorator)** 패턴을 학습합니다.

---

## 1. 고급 문법 용어 사전 (Glossary)

- **Lazy Evaluation (지연 평가)**: 모든 데이터를 메모리에 한 번에 올리지 않고, 요청이 들어올 때마다 하나씩 계산하여 생성해 내는 성능 최적화 기법입니다.
- **`yield` Keyword**: 함수 실행을 일시 중단하고 호출자에게 값을 반환한 뒤, 다음 요청 시 중단점부터 다시 실행을 이어나가게 해주는 제너레이터 키워드입니다.
- **Closure (클로저)**: 자신을 둘러싼 외부 함수의 스코프 환경을 기억하고 있는 내부 함수 객체입니다.
- **Decorator (`@decorator`)**: 다른 함수를 인자로 받아 새로운 기능을 덧붙인 함수로 감싸서 반환하는 디자인 패턴입니다.

---

## 2. yield 제너레이터 및 데코레이터 코드

```python
import time

# 1. 실행 시간 측정 데코레이터
def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"[{func.__name__}] 실행 시간: {(end - start)*1000:.2f}ms")
        return result
    return wrapper

# 2. yield 제너레이터
def count_down(n):
    while n > 0:
        yield n
        n -= 1

@timer_decorator
def run_generator():
    for number in count_down(3):
        print(f"카운트: {number}")

run_generator()
```
',
  '<p>메모리를 극도로 아끼면서 순회 데이터를 만드는 **제너레이터(Generator)**와 기존 함수의 코드를 고치지 않고 기능을 확장하는 <strong>데코레이터(Decorator)</strong> 패턴을 학습합니다.</p>
<hr>
<h2>1. 고급 문법 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Lazy Evaluation (지연 평가)</strong>: 모든 데이터를 메모리에 한 번에 올리지 않고, 요청이 들어올 때마다 하나씩 계산하여 생성해 내는 성능 최적화 기법입니다.</li>
<li><strong><code>yield</code> Keyword</strong>: 함수 실행을 일시 중단하고 호출자에게 값을 반환한 뒤, 다음 요청 시 중단점부터 다시 실행을 이어나가게 해주는 제너레이터 키워드입니다.</li>
<li><strong>Closure (클로저)</strong>: 자신을 둘러싼 외부 함수의 스코프 환경을 기억하고 있는 내부 함수 객체입니다.</li>
<li><strong>Decorator (<code>@decorator</code>)</strong>: 다른 함수를 인자로 받아 새로운 기능을 덧붙인 함수로 감싸서 반환하는 디자인 패턴입니다.</li>
</ul>
<hr>
<h2>2. yield 제너레이터 및 데코레이터 코드</h2>
<pre><code class="language-python">import time

# 1. 실행 시간 측정 데코레이터
def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f&quot;[{func.__name__}] 실행 시간: {(end - start)*1000:.2f}ms&quot;)
        return result
    return wrapper

# 2. yield 제너레이터
def count_down(n):
    while n &gt; 0:
        yield n
        n -= 1

@timer_decorator
def run_generator():
    for number in count_down(3):
        print(f&quot;카운트: {number}&quot;)

run_generator()
</code></pre>
',
  'published',
  '파이썬 고급 문법 - Iterator, yield 제너레이터, 클로저 & @decorator',
  '메모리 효율적 데이터 순회 이터레이터(__next__), yield 키워드 기반 제너레이터, 클로저(Closure) 및 함수 기능을 확장하는 @decorator 패턴을 학습합니다.',
  11,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch12-standard-libraries-math-random-datetime-json',
  '파이썬 핵심 표준 라이브러리 (math, random, datetime, json, re)',
  '별도 설치 없이 파이썬 설치 시 함께 제공되는 강력한 내장 라이브러리(math, random, datetime, json, re 정규 표현식)의 실전 활용법을 배웁니다.',
  '"Batteries Included"라는 파이썬의 명성답게 파이썬 기본 설치 시 동봉되는 **필수 표준 라이브러리 모듈들**을 학습합니다.

---

## 1. 표준 라이브러리 용어 사전 (Glossary)

- **`datetime`**: 날짜와 시간을 연산하고 포맷팅(`strftime`, `strptime`)해 주는 모듈입니다.
- **`json`**: JSON 규격의 문자열과 파이썬 딕셔너리를 무결하게 상호 변환해 주는 모듈입니다. (`json.dumps()`, `json.loads()`)
- **`re` (Regular Expression)**: 텍스트 내에서 특정 규칙 패턴(이메일, 전화번호 등)을 정규 표현식으로 찾아내고 추출하는 검색 엔진 모듈입니다.

---

## 2. json 및 re 정규표현식 실습

```python
import json
import re

# JSON 직렬화 & 파싱
data = {"title": "DAVHAVE 파이썬", "lessons": 46, "is_active": True}
json_str = json.dumps(data, ensure_ascii=False, indent=2)
parsed_dict = json.loads(json_str)

print(f"JSON 직렬화 텍스트:
{json_str}")

# 정규 표현식 이메일 추출
text = "문의 사항은 support@davhave.com 또는 admin@test.co.kr 로 보내주세요."
email_pattern = r''[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}''
emails = re.findall(email_pattern, text)
print(f"추출된 이메일 목록: {emails}")
```
',
  '<p>&quot;Batteries Included&quot;라는 파이썬의 명성답게 파이썬 기본 설치 시 동봉되는 <strong>필수 표준 라이브러리 모듈들</strong>을 학습합니다.</p>
<hr>
<h2>1. 표준 라이브러리 용어 사전 (Glossary)</h2>
<ul>
<li><strong><code>datetime</code></strong>: 날짜와 시간을 연산하고 포맷팅(<code>strftime</code>, <code>strptime</code>)해 주는 모듈입니다.</li>
<li><strong><code>json</code></strong>: JSON 규격의 문자열과 파이썬 딕셔너리를 무결하게 상호 변환해 주는 모듈입니다. (<code>json.dumps()</code>, <code>json.loads()</code>)</li>
<li><strong><code>re</code> (Regular Expression)</strong>: 텍스트 내에서 특정 규칙 패턴(이메일, 전화번호 등)을 정규 표현식으로 찾아내고 추출하는 검색 엔진 모듈입니다.</li>
</ul>
<hr>
<h2>2. json 및 re 정규표현식 실습</h2>
<pre><code class="language-python">import json
import re

# JSON 직렬화 &amp; 파싱
data = {&quot;title&quot;: &quot;DAVHAVE 파이썬&quot;, &quot;lessons&quot;: 46, &quot;is_active&quot;: True}
json_str = json.dumps(data, ensure_ascii=False, indent=2)
parsed_dict = json.loads(json_str)

print(f&quot;JSON 직렬화 텍스트:
{json_str}&quot;)

# 정규 표현식 이메일 추출
text = &quot;문의 사항은 support@davhave.com 또는 admin@test.co.kr 로 보내주세요.&quot;
email_pattern = r&#39;[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}&#39;
emails = re.findall(email_pattern, text)
print(f&quot;추출된 이메일 목록: {emails}&quot;)
</code></pre>
',
  'published',
  '파이썬 표준 라이브러리 - math, random, datetime, json 직렬화 & re 정규식',
  '파이썬에 내장된 필수 표준 라이브러리 math(수학), random(난수), datetime(날짜/시간 포맷팅), json(JSON 직렬화/파싱) 및 re(정규 표현식)를 배웁니다.',
  12,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;
