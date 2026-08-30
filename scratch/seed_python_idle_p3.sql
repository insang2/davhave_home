-- Full Python IDLE PDF Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch09-object-oriented-programming-classes',
  '객체지향 프로그래밍(OOP): 클래스, 인스턴스, 생성자(__init__) 및 캡슐화',
  '클래스 작성법, 생성자 __init__(), self 인자를 다룹니다.',
  '객체지향 프로그래밍 기초를 학습합니다.',
  '<p>객체지향 프로그래밍 기초를 학습합니다.</p>
',
  'published',
  '파이썬 OOP 기초 - class, __init__, self, 인스턴스 변수, 캡슐화(__private)',
  '클래스와 인스턴스, 생성자 메소드(__init__), 캡슐화를 학습합니다.',
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
  '상속(Inheritance), super(), 매직 메소드를 학습합니다.',
  '상속과 매직 메소드를 익힙니다.',
  '<p>상속과 매직 메소드를 익힙니다.</p>
',
  'published',
  '파이썬 고급 OOP - 상속, super(), 매직 메소드(__str__, __len__), ABC 추상 클래스',
  '부모 클래스 상속, super() 호출, 던더 매직 메소드를 배웁니다.',
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
  '제너레이터(yield)와 데코레이터(@decorator) 패턴을 배웁니다.',
  '제너레이터와 데코레이터를 배웁니다.',
  '<p>제너레이터와 데코레이터를 배웁니다.</p>
',
  'published',
  '파이썬 고급 문법 - Iterator, yield 제너레이터, 클로저 & @decorator',
  '이터레이터, yield 제너레이터, @decorator 패턴을 학습합니다.',
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
  '필수 표준 라이브러리 활용법을 배웁니다.',
  '필수 표준 라이브러리 모듈들을 학습합니다.',
  '<p>필수 표준 라이브러리 모듈들을 학습합니다.</p>
',
  'published',
  '파이썬 표준 라이브러리 - math, random, datetime, json 직렬화 & re 정규식',
  '내장 표준 라이브러리 math, random, datetime, json, re를 배웁니다.',
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
