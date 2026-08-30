-- Full Python SEO Extended Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch09-object-oriented-programming-classes',
  '객체지향 프로그래밍(OOP): 클래스, 인스턴스, 생성자(__init__) 및 캡슐화',
  '현실 세계의 사물을 객체로 모델링하는 파이썬 클래스(Class) 작성법, 생성자 __init__(), self 인자 및 비공개 속성(__private)을 통한 캡슐화를 다룹니다.',
  '데이터와 관련 기능을 하나로 묶어 프로그램의 재사용성과 유지보수성을 극대화하는 **객체지향 프로그래밍(OOP)** 기초를 학습합니다.',
  '<p>데이터와 관련 기능을 하나로 묶어 프로그램의 재사용성과 유지보수성을 극대화하는 <strong>객체지향 프로그래밍(OOP)</strong> 기초를 학습합니다.</p>
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
  '부모 클래스의 속성과 메소드를 물려받아 확장하는 **상속(Inheritance)**과 파이썬 연산자 동작을 직접 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.',
  '<p>부모 클래스의 속성과 메소드를 물려받아 확장하는 **상속(Inheritance)**과 파이썬 연산자 동작을 직접 정의하는 **매직 메소드(Dunder Methods)**를 익힙니다.</p>
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
  '메모리를 극도로 아끼면서 순회 데이터를 만드는 **제너레이터(Generator)**와 기존 함수의 코드를 고치지 않고 기능을 확장하는 **데코레이터(Decorator)** 패턴을 학습합니다.',
  '<p>메모리를 극도로 아끼면서 순회 데이터를 만드는 **제너레이터(Generator)**와 기존 함수의 코드를 고치지 않고 기능을 확장하는 <strong>데코레이터(Decorator)</strong> 패턴을 학습합니다.</p>
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
  '"Batteries Included(모든 부품이 이미 탑재되어 있다)"라는 파이썬의 명성답게 파이썬 기본 설치 시 동봉되는 **필수 표준 라이브러리 모듈들**을 학습합니다.',
  '<p>&quot;Batteries Included(모든 부품이 이미 탑재되어 있다)&quot;라는 파이썬의 명성답게 파이썬 기본 설치 시 동봉되는 <strong>필수 표준 라이브러리 모듈들</strong>을 학습합니다.</p>
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
