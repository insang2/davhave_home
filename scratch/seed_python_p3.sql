-- Full Python Lessons Part 3

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

## 1. OOP 기초 용어 사전 (Glossary)

- **Class (클래스)**: 객체를 생성하기 위한 설계도(Blueprint)입니다.
- **Instance (인스턴스)**: 클래스 설계도를 바탕으로 메모리에 할당된 객체 실체입니다.
- **`self`**: 생성된 자기 자신 객체 인스턴스를 가리키는 첫 번째 매개변수 관례입니다.
- **`__init__()`**: 객체 인스턴스가 생성되는 순간 자동 호출되는 초기화 생성자(Constructor) 메소드입니다.
- **Private Attribute (비공개 속성)**: 변수명 앞에 언더스코어 2개(`__name`)를 붙여 외부 직접 접근을 막는 캡슐화(Name Mangling) 기술입니다.

---

## 2. 캡슐화가 적용된 클래스 설계 예제

```python
class BankAccount:
    # 클래스 변수 (모든 객체 공유)
    bank_name = "DAVHAVE BANK"

    def __init__(self, owner, balance=0):
        self.owner = owner          # 공개 인스턴스 변수
        self.__balance = balance    # 비공개 인스턴스 변수 (캡슐화)

    # 입금 메소드
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"{self.owner}님 {amount:,}원 입금 완료. 현재 잔액: {self.__balance:,}원")

    # Getter 메소드
    def get_balance(self):
        return self.__balance

# 객체 생성 및 실행
account = BankAccount("홍길동", 10000)
account.deposit(5000)
print(f"조회된 잔액: {account.get_balance():,}원")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬에서 `__balance` 같은 비공개 변수에 정말 외부 접근이 불가능한가요?**
A. 파이썬은 네임 맹글링(Name Mangling) 기법에 의해 내부적으로 `_BankAccount__balance` 라는 이름으로 바뀝니다. 해당 이름으로 접근은 가능하지만, 관례상 비공개 멤버로 규정하고 접근하지 않는 것이 원칙입니다.
',
  '<p>데이터와 관련 기능을 하나로 묶어 프로그램의 재사용성과 유지보수성을 극대화하는 <strong>객체지향 프로그래밍(OOP)</strong> 기초를 학습합니다.</p>
<hr>
<h2>1. OOP 기초 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Class (클래스)</strong>: 객체를 생성하기 위한 설계도(Blueprint)입니다.</li>
<li><strong>Instance (인스턴스)</strong>: 클래스 설계도를 바탕으로 메모리에 할당된 객체 실체입니다.</li>
<li><strong><code>self</code></strong>: 생성된 자기 자신 객체 인스턴스를 가리키는 첫 번째 매개변수 관례입니다.</li>
<li><strong><code>__init__()</code></strong>: 객체 인스턴스가 생성되는 순간 자동 호출되는 초기화 생성자(Constructor) 메소드입니다.</li>
<li><strong>Private Attribute (비공개 속성)</strong>: 변수명 앞에 언더스코어 2개(<code>__name</code>)를 붙여 외부 직접 접근을 막는 캡슐화(Name Mangling) 기술입니다.</li>
</ul>
<hr>
<h2>2. 캡슐화가 적용된 클래스 설계 예제</h2>
<pre><code class="language-python">class BankAccount:
    # 클래스 변수 (모든 객체 공유)
    bank_name = &quot;DAVHAVE BANK&quot;

    def __init__(self, owner, balance=0):
        self.owner = owner          # 공개 인스턴스 변수
        self.__balance = balance    # 비공개 인스턴스 변수 (캡슐화)

    # 입금 메소드
    def deposit(self, amount):
        if amount &gt; 0:
            self.__balance += amount
            print(f&quot;{self.owner}님 {amount:,}원 입금 완료. 현재 잔액: {self.__balance:,}원&quot;)

    # Getter 메소드
    def get_balance(self):
        return self.__balance

# 객체 생성 및 실행
account = BankAccount(&quot;홍길동&quot;, 10000)
account.deposit(5000)
print(f&quot;조회된 잔액: {account.get_balance():,}원&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬에서 <code>__balance</code> 같은 비공개 변수에 정말 외부 접근이 불가능한가요?</strong>
A. 파이썬은 네임 맹글링(Name Mangling) 기법에 의해 내부적으로 <code>_BankAccount__balance</code> 라는 이름으로 바뀝니다. 해당 이름으로 접근은 가능하지만, 관례상 비공개 멤버로 규정하고 접근하지 않는 것이 원칙입니다.</p>
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
  '상속(Inheritance), 다형성 및 매직 메소드(Dunder Methods)',
  '클래스를 재사용 확장하는 상속(Inheritance), super() 연동, 객체의 동작을 파이썬답게 정의하는 매직 메소드(Dunder Methods)와 추상 클래스를 학습합니다.',
  '부모 클래스의 속성과 메소드를 물려받아 확장하는 **상속(Inheritance)**과 파이썬 연산자 동작을 직접 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.

---

## 1. 고급 OOP 용어 사전 (Glossary)

- **Inheritance (상속)**: 부모 클래스(Parent Class)의 기능을 자식 클래스(Child Class)가 물려받아 재사용 및 확장하는 개념입니다.
- **`super()`**: 자식 클래스에서 부모 클래스의 메소드나 생성자를 안전하게 호출하는 내장 함수입니다.
- **Magic / Dunder Method**: 밑줄 2개로 시작하고 끝나는 언더스코어 메소드(`__str__`, `__repr__`, `__len__`, `__add__` 등)로, 파이썬 내장 연산자 동작을 오버로딩합니다.
- **ABC (Abstract Base Class)**: `abc` 모듈의 `@abstractmethod`를 활용하여 자식 클래스가 특정 메소드를 반드시 구현하도록 강제하는 추상 클래스입니다.

---

## 2. 상속과 매직 메소드 오버로딩 실습

```python
from abc import ABC, abstractmethod

# 1. 추상 클래스 정의
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# 2. 자식 클래스 상속 구현
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # 추상 메소드 구현
    def area(self):
        return self.width * self.height

    # __str__ 매직 메소드 (print() 출력 문자열 정의)
    def __str__(self):
        return f"Rectangle(가로: {self.width}, 세로: {self.height}, 넓이: {self.area()})"

    # __eq__ 매직 메소드 (== 비교 연산 정의)
    def __eq__(self, other):
        return self.area() == other.area()

# 객체 활용
r1 = Rectangle(10, 20)
r2 = Rectangle(5, 40)
print(r1) # __str__ 자동 호출
print(f"두 사각형 넓이 동일 여부 (==): {r1 == r2}") # __eq__ 자동 호출
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `__str__`과 `__repr__`의 차이는 무엇인가요?**
A. `__str__`은 일반 사용자가 보기 편한 가독성 높은 문자열 표현을 목표로 하고, `__repr__`은 개발자가 파이썬 코드로 다시 객체를 재현할 수 있는 상세한 디버깅용 표현을 목표로 합니다.
',
  '<p>부모 클래스의 속성과 메소드를 물려받아 확장하는 **상속(Inheritance)**과 파이썬 연산자 동작을 직접 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.</p>
<hr>
<h2>1. 고급 OOP 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Inheritance (상속)</strong>: 부모 클래스(Parent Class)의 기능을 자식 클래스(Child Class)가 물려받아 재사용 및 확장하는 개념입니다.</li>
<li><strong><code>super()</code></strong>: 자식 클래스에서 부모 클래스의 메소드나 생성자를 안전하게 호출하는 내장 함수입니다.</li>
<li><strong>Magic / Dunder Method</strong>: 밑줄 2개로 시작하고 끝나는 언더스코어 메소드(<code>__str__</code>, <code>__repr__</code>, <code>__len__</code>, <code>__add__</code> 등)로, 파이썬 내장 연산자 동작을 오버로딩합니다.</li>
<li><strong>ABC (Abstract Base Class)</strong>: <code>abc</code> 모듈의 <code>@abstractmethod</code>를 활용하여 자식 클래스가 특정 메소드를 반드시 구현하도록 강제하는 추상 클래스입니다.</li>
</ul>
<hr>
<h2>2. 상속과 매직 메소드 오버로딩 실습</h2>
<pre><code class="language-python">from abc import ABC, abstractmethod

# 1. 추상 클래스 정의
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# 2. 자식 클래스 상속 구현
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # 추상 메소드 구현
    def area(self):
        return self.width * self.height

    # __str__ 매직 메소드 (print() 출력 문자열 정의)
    def __str__(self):
        return f&quot;Rectangle(가로: {self.width}, 세로: {self.height}, 넓이: {self.area()})&quot;

    # __eq__ 매직 메소드 (== 비교 연산 정의)
    def __eq__(self, other):
        return self.area() == other.area()

# 객체 활용
r1 = Rectangle(10, 20)
r2 = Rectangle(5, 40)
print(r1) # __str__ 자동 호출
print(f&quot;두 사각형 넓이 동일 여부 (==): {r1 == r2}&quot;) # __eq__ 자동 호출
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>__str__</code>과 <code>__repr__</code>의 차이는 무엇인가요?</strong>
A. <code>__str__</code>은 일반 사용자가 보기 편한 가독성 높은 문자열 표현을 목표로 하고, <code>__repr__</code>은 개발자가 파이썬 코드로 다시 객체를 재현할 수 있는 상세한 디버깅용 표현을 목표로 합니다.</p>
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
  '이터레이터(Iterator), 제너레이터(Generator)와 데코레이터(Decorator)',
  '대용량 데이터를 지연 평가(Lazy Evaluation)로 다루는 제너레이터(yield)와 함수에 보일러플레이트 기능을 덧붙이는 데코레이터(@decorator)를 배웁니다.',
  '메모리를 극도로 아끼면서 순회 데이터를 만드는 **제너레이터(Generator)**와 기존 함수의 코드를 고치지 않고 기능을 확장하는 **데코레이터(Decorator)** 패턴을 학습합니다.

---

## 1. 파이썬 고급 프로그래밍 용어 사전 (Glossary)

- **Iterator**: `__next__()` 메소드를 호출할 때마다 다음 요소를 하나씩 꺼내주는 순회 객체입니다. (끝나면 `StopIteration` 예외 발생)
- **Generator**: `yield` 키워드를 사용해 실행 상태를 일시 중지하고 값을 하나씩 반환하는 지연 평가(Lazy Evaluation) 미니 이터레이터 함수입니다.
- **Closure (클로저)**: 자신을 둘러싼 외부 함수의 범위(Scope) 변수를 기억하고 유지하는 중첩 함수입니다.
- **Decorator**: 다른 함수를 인자로 받아 새로운 기능을 추가하여 반환하는 `@decorator` 형태의 고차 함수 패턴입니다.

---

## 2. 실행 시간 측정 데코레이터 & 제너레이터 실습

```python
import time

# 1. 실행 시간 측정 데코레이터 정의
def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"[{func.__name__}] 실행 소요 시간: {end - start:.4f}초")
        return result
    return wrapper

# 2. 대용량 수열 제너레이터 (yield 지연 평가)
def infinite_number_generator(n):
    for i in range(n):
        yield i ** 2

# 데코레이터 적용
@timer_decorator
def process_data():
    # 메모리에 수백만 개를 올리지 않고 제너레이터로 처리
    gen = infinite_number_generator(1_000_000)
    total_sum = sum(gen)
    return total_sum

print(f"계산 결과: {process_data()}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 리스너나 큰 리스트 대신 제너레이터를 써야 하나요?**
A. 1,000만 개의 요소를 담는 리스트는 수백 MB의 RAM 메모리를 차지하지만, 제너레이터는 한 번에 1개 요소만 계산하여 반환하므로 메모리 사용량이 **수십 바이트(O(1))**에 불과하기 때문입니다.
',
  '<p>메모리를 극도로 아끼면서 순회 데이터를 만드는 **제너레이터(Generator)**와 기존 함수의 코드를 고치지 않고 기능을 확장하는 <strong>데코레이터(Decorator)</strong> 패턴을 학습합니다.</p>
<hr>
<h2>1. 파이썬 고급 프로그래밍 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Iterator</strong>: <code>__next__()</code> 메소드를 호출할 때마다 다음 요소를 하나씩 꺼내주는 순회 객체입니다. (끝나면 <code>StopIteration</code> 예외 발생)</li>
<li><strong>Generator</strong>: <code>yield</code> 키워드를 사용해 실행 상태를 일시 중지하고 값을 하나씩 반환하는 지연 평가(Lazy Evaluation) 미니 이터레이터 함수입니다.</li>
<li><strong>Closure (클로저)</strong>: 자신을 둘러싼 외부 함수의 범위(Scope) 변수를 기억하고 유지하는 중첩 함수입니다.</li>
<li><strong>Decorator</strong>: 다른 함수를 인자로 받아 새로운 기능을 추가하여 반환하는 <code>@decorator</code> 형태의 고차 함수 패턴입니다.</li>
</ul>
<hr>
<h2>2. 실행 시간 측정 데코레이터 &amp; 제너레이터 실습</h2>
<pre><code class="language-python">import time

# 1. 실행 시간 측정 데코레이터 정의
def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f&quot;[{func.__name__}] 실행 소요 시간: {end - start:.4f}초&quot;)
        return result
    return wrapper

# 2. 대용량 수열 제너레이터 (yield 지연 평가)
def infinite_number_generator(n):
    for i in range(n):
        yield i ** 2

# 데코레이터 적용
@timer_decorator
def process_data():
    # 메모리에 수백만 개를 올리지 않고 제너레이터로 처리
    gen = infinite_number_generator(1_000_000)
    total_sum = sum(gen)
    return total_sum

print(f&quot;계산 결과: {process_data()}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 왜 리스너나 큰 리스트 대신 제너레이터를 써야 하나요?</strong>
A. 1,000만 개의 요소를 담는 리스트는 수백 MB의 RAM 메모리를 차지하지만, 제너레이터는 한 번에 1개 요소만 계산하여 반환하므로 메모리 사용량이 **수십 바이트(O(1))**에 불과하기 때문입니다.</p>
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
  '"Batteries Included(모든 부품이 이미 탑재되어 있다)"라는 파이썬의 명성답게 파이썬 기본 설치 시 동봉되는 **필수 표준 라이브러리 모듈들**을 학습합니다.

---

## 1. 표준 라이브러리 용어 사전 (Glossary)

- **datetime / timedelta**: 날짜와 시간을 생성하고 날짜 간의 덧셈/뺄셈 차이를 계산하는 시간 처리 모듈입니다.
- **json (JSON Serialization)**: 파이썬 객체(`dict`, `list`)를 JSON 텍스트로 변환(`dumps()`)하거나 반대로 파싱(`loads()`)하는 직렬화 모듈입니다.
- **re (Regular Expression)**: 텍스트 내에서 특정 규칙을 가진 문자열 패턴(이메일, 전화번호 등)을 검색/추출/치환하는 정규 표현식 모듈입니다.

---

## 2. json 및 re 정규 표현식 활용 실습

```python
import json
import re
from datetime import datetime

# 1. 정규 표현식 (이메일 유효성 검사)
email_pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
sample_email = "user@davhave.com"

is_valid = bool(re.match(email_pattern, sample_email))
print(f"이메일 ''{sample_email}'' 유효성 검사: {is_valid}")

# 2. JSON 직렬화 & 파싱
user_data = {
    "name": "홍길동",
    "joined_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    "skills": ["Python", "Django", "SQL"]
}

# 파이썬 dict -> JSON 문자열 변환 (json.dumps)
json_str = json.dumps(user_data, ensure_ascii=False, indent=2)
print("=== [JSON 변환 결과] ===")
print(json_str)
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `json.dumps()`와 `json.dump()`의 차이는?**
A. `dumps()` (Dump String)는 파이썬 객체를 **JSON 형식의 문자열(String)**로 반환하고, `dump()`는 바로 **파일 객체(File Stream)**에 JSON 데이터를 직접 씁니다.
',
  '<p>&quot;Batteries Included(모든 부품이 이미 탑재되어 있다)&quot;라는 파이썬의 명성답게 파이썬 기본 설치 시 동봉되는 <strong>필수 표준 라이브러리 모듈들</strong>을 학습합니다.</p>
<hr>
<h2>1. 표준 라이브러리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>datetime / timedelta</strong>: 날짜와 시간을 생성하고 날짜 간의 덧셈/뺄셈 차이를 계산하는 시간 처리 모듈입니다.</li>
<li><strong>json (JSON Serialization)</strong>: 파이썬 객체(<code>dict</code>, <code>list</code>)를 JSON 텍스트로 변환(<code>dumps()</code>)하거나 반대로 파싱(<code>loads()</code>)하는 직렬화 모듈입니다.</li>
<li><strong>re (Regular Expression)</strong>: 텍스트 내에서 특정 규칙을 가진 문자열 패턴(이메일, 전화번호 등)을 검색/추출/치환하는 정규 표현식 모듈입니다.</li>
</ul>
<hr>
<h2>2. json 및 re 정규 표현식 활용 실습</h2>
<pre><code class="language-python">import json
import re
from datetime import datetime

# 1. 정규 표현식 (이메일 유효성 검사)
email_pattern = r&quot;^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$&quot;
sample_email = &quot;user@davhave.com&quot;

is_valid = bool(re.match(email_pattern, sample_email))
print(f&quot;이메일 &#39;{sample_email}&#39; 유효성 검사: {is_valid}&quot;)

# 2. JSON 직렬화 &amp; 파싱
user_data = {
    &quot;name&quot;: &quot;홍길동&quot;,
    &quot;joined_at&quot;: datetime.now().strftime(&quot;%Y-%m-%d %H:%M:%S&quot;),
    &quot;skills&quot;: [&quot;Python&quot;, &quot;Django&quot;, &quot;SQL&quot;]
}

# 파이썬 dict -&gt; JSON 문자열 변환 (json.dumps)
json_str = json.dumps(user_data, ensure_ascii=False, indent=2)
print(&quot;=== [JSON 변환 결과] ===&quot;)
print(json_str)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>json.dumps()</code>와 <code>json.dump()</code>의 차이는?</strong>
A. <code>dumps()</code> (Dump String)는 파이썬 객체를 **JSON 형식의 문자열(String)**로 반환하고, <code>dump()</code>는 바로 **파일 객체(File Stream)**에 JSON 데이터를 직접 씁니다.</p>
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
