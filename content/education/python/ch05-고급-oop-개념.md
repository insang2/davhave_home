---
title: 고급 OOP 개념
slug: ch05-고급-oop-개념
excerpt: Python의 ch5에서 다루는 고급 OOP 개념
seo_title: 고급 OOP 개념 — Python 레슨
seo_description: 고급 OOP 개념를 배우는 Python 레슨 (중급)
order_index: 5
---

## 들어가며

고급 OOP 개념들을 통해 더 유연하고 확장성 있는 클래스 설계를 할 수 있습니다. 추상 클래스, 다중 상속, 프로퍼티 등의 개념을 학습합니다.

## 추상 클래스

### 예제 1: ABC를 사용한 추상 클래스

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    """도형의 추상 클래스"""
    
    @abstractmethod
    def area(self):
        """넓이를 계산합니다"""
        pass
    
    @abstractmethod
    def perimeter(self):
        """둘레를 계산합니다"""
        pass
    
    def description(self):
        """구체적인 메서드"""
        return f"이것은 {self.__class__.__name__}입니다"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

# 사용
circle = Circle(5)
rect = Rectangle(10, 20)

for shape in [circle, rect]:
    print(f"{shape.description()}")
    print(f"넓이: {shape.area():.2f}, 둘레: {shape.perimeter():.2f}\n")
```

출력:
```
이것은 Circle입니다
넓이: 78.54, 둘레: 31.42

이것은 Rectangle입니다
넓이: 200.00, 둘레: 60.00
```

## 프로퍼티 (Property)

### 예제 2: @property 데코레이터

```python
class Temperature:
    """온도를 관리하는 클래스"""
    
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def celsius(self):
        """섭씨 온도 (읽기)"""
        return self._celsius
    
    @property
    def fahrenheit(self):
        """화씨 온도 (계산)"""
        return self._celsius * 9/5 + 32
    
    @celsius.setter
    def celsius(self, value):
        """섭씨 온도 (쓰기)"""
        if value < -273.15:
            raise ValueError("절대영도보다 낮을 수 없습니다")
        self._celsius = value

temp = Temperature(25)
print(f"섭씨: {temp.celsius}°C")
print(f"화씨: {temp.fahrenheit}°F")

temp.celsius = 30
print(f"\n변경 후:")
print(f"섭씨: {temp.celsius}°C")
print(f"화씨: {temp.fahrenheit}°F")

# 잘못된 값 설정 시도
# temp.celsius = -300  # ValueError!
```

출력:
```
섭씨: 25°C
화씨: 77.0°F

변경 후:
섭씨: 30°C
화씨: 86.0°F
```

## 다중 상속

### 예제 3: 다중 상속과 MRO

```python
class Swimmer:
    def swim(self):
        return "수영을 합니다"

class Flyer:
    def fly(self):
        return "날아갑니다"

class Duck(Swimmer, Flyer):
    """오리: 헤엄도 치고 날아갑니다"""
    pass

class Penguin(Swimmer):
    """펭귄: 헤엄만 칩니다"""
    pass

# 사용
duck = Duck()
print(f"오리: {duck.swim()}, {duck.fly()}")

penguin = Penguin()
print(f"펭귄: {penguin.swim()}")

# MRO 확인
print(f"\nDuck의 MRO: {Duck.__mro__}")
```

출력:
```
오리: 수영을 합니다, 날아갑니다
펭귄: 수영을 합니다

Duck의 MRO: (<class 'Duck'>, <class 'Swimmer'>, <class 'Flyer'>, <class 'object'>)
```

## 매직 메서드 심화

### 예제 4: 컨테이너 매직 메서드

```python
class Inventory:
    """재고 관리 클래스"""
    
    def __init__(self, items=None):
        self.items = items if items else {}
    
    def __len__(self):
        """재고 종류 수"""
        return len(self.items)
    
    def __getitem__(self, key):
        """items['product'] 형식으로 접근"""
        return self.items.get(key, 0)
    
    def __setitem__(self, key, value):
        """items['product'] = 10 형식으로 설정"""
        self.items[key] = value
    
    def __contains__(self, key):
        """'product' in items 형식으로 확인"""
        return key in self.items
    
    def __iter__(self):
        """for item in inventory 형식으로 순회"""
        return iter(self.items)

# 사용
inv = Inventory()
inv["apple"] = 10
inv["banana"] = 5
inv["orange"] = 8

print(f"재고 종류: {len(inv)}")
print(f"사과 재고: {inv['apple']}")
print(f"'apple' in inv: {'apple' in inv}")
print(f"모든 상품: {list(inv)}")
```

출력:
```
재고 종류: 3
사과 재고: 10
'apple' in inv: True
모든 상품: ['apple', 'banana', 'orange']
```

## 클래스 메서드와 데코레이터

### 예제 5: 싱글톤 패턴

```python
class Database:
    """싱글톤 패턴 - 인스턴스가 하나만 존재"""
    
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        self.connection = "Database Connection"
    
    def query(self, sql):
        return f"실행: {sql}"

# 사용
db1 = Database()
db2 = Database()

print(f"db1 == db2: {db1 is db2}")
print(f"db1의 connection: {db1.connection}")
print(f"db2의 connection: {db2.connection}")
```

출력:
```
db1 == db2: True
db1의 connection: Database Connection
db2의 connection: Database Connection
```

## 메타클래스 기초

### 예제 6: 간단한 메타클래스

```python
class SingletonMeta(type):
    """싱글톤 메타클래스"""
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Logger(metaclass=SingletonMeta):
    def __init__(self):
        self.logs = []
    
    def log(self, message):
        self.logs.append(message)
        return f"로그: {message}"

# 사용
logger1 = Logger()
logger1.log("첫 번째 메시지")

logger2 = Logger()
logger2.log("두 번째 메시지")

print(f"logger1 == logger2: {logger1 is logger2}")
print(f"모든 로그: {logger1.logs}")
```

출력:
```
logger1 == logger2: True
모든 로그: ['첫 번째 메시지', '두 번째 메시지']
```

## 흔한 실수와 해결책

### 실수 1: 다중 상속에서 충돌

**틀린 예제:**
```python
class A:
    def method(self):
        return "A"

class B:
    def method(self):
        return "B"

class C(A, B):
    pass

c = C()
print(c.method())  # "A" - 의도와 다를 수 있음
```

**올바른 예제:**
```python
class A:
    def method(self):
        return "A"

class B:
    def method(self):
        return "B"

class C(A, B):
    def method(self):
        # 명시적으로 어느 부모를 사용할지 지정
        return f"{super().method()}, C"

c = C()
print(c.method())  # "A, C"
```

### 실수 2: 프로퍼티와 일반 속성 혼동

**틀린 예제:**
```python
class Person:
    @property
    def age(self):
        return self._age
    
    def __init__(self, age):
        self.age = age  # age 프로퍼티에 직접 쓰려고 함

p = Person(25)  # AttributeError!
```

**올바른 예제:**
```python
class Person:
    def __init__(self, age):
        self._age = age  # 내부 속성에 저장
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        self._age = value

p = Person(25)
print(p.age)  # 25
p.age = 26
print(p.age)  # 26
```

### 실수 3: 추상 메서드 구현하지 않음

**틀린 예제:**
```python
from abc import ABC, abstractmethod

class Base(ABC):
    @abstractmethod
    def method(self):
        pass

# class Child(Base):  # 에러: 추상 메서드 미구현
#     pass
```

**올바른 예제:**
```python
from abc import ABC, abstractmethod

class Base(ABC):
    @abstractmethod
    def method(self):
        pass

class Child(Base):
    def method(self):
        return "구현됨"

c = Child()
print(c.method())
```

## 연습 문제

### 문제 1: 학생 성적 관리
Student 클래스를 만들어 성적을 프로퍼티로 관리하세요.

### 문제 2: 플러그인 시스템
추상 클래스를 사용하여 확장 가능한 플러그인 시스템을 설계하세요.

### 문제 3: 설정 관리자
싱글톤 패턴을 사용한 설정 관리 클래스를 만드세요.

## 풀이

### 문제 1 풀이
```python
class Student:
    def __init__(self, name):
        self.name = name
        self._scores = []
    
    @property
    def scores(self):
        return self._scores
    
    @property
    def average(self):
        if not self._scores:
            return 0
        return sum(self._scores) / len(self._scores)
    
    def add_score(self, score):
        if 0 <= score <= 100:
            self._scores.append(score)
        else:
            raise ValueError("점수는 0~100 사이여야 합니다")

student = Student("Alice")
student.add_score(85)
student.add_score(90)
student.add_score(78)

print(f"학생: {student.name}")
print(f"평균 점수: {student.average:.1f}")
```

### 문제 2 풀이
```python
from abc import ABC, abstractmethod

class Plugin(ABC):
    @abstractmethod
    def execute(self):
        pass

class HelloPlugin(Plugin):
    def execute(self):
        return "Hello Plugin"

class WorldPlugin(Plugin):
    def execute(self):
        return "World Plugin"

class PluginManager:
    def __init__(self):
        self.plugins = []
    
    def register(self, plugin):
        self.plugins.append(plugin)
    
    def run_all(self):
        for plugin in self.plugins:
            print(plugin.execute())

manager = PluginManager()
manager.register(HelloPlugin())
manager.register(WorldPlugin())
manager.run_all()
```

### 문제 3 풀이
```python
class Config(type):
    _instance = None
    
    def __call__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__call__(*args, **kwargs)
        return cls._instance

class Settings(metaclass=Config):
    def __init__(self):
        self.settings = {}
    
    def set(self, key, value):
        self.settings[key] = value
    
    def get(self, key):
        return self.settings.get(key)

s1 = Settings()
s1.set("debug", True)

s2 = Settings()
print(f"debug: {s2.get('debug')}")
print(f"s1 is s2: {s1 is s2}")
```

## 마무리

고급 OOP 개념을 이해하면 더 우아하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.
