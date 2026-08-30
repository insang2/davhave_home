-- Full Python IDLE PDF Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch01-python-introduction-and-interpreter',
  '파이썬(Python) 소개와 CPython 인터프리터 작동 원리, REPL & IDLE/VS Code 환경 구축',
  '파이썬의 특징, CPython 인터프리터 작동 원리 및 개발 환경 구축을 배웁니다.',
  '파이썬 소개 및 CPython 인터프리터를 다룹니다.',
  '<p>파이썬 소개 및 CPython 인터프리터를 다룹니다.</p>
',
  'published',
  '파이썬 입문 가이드 - CPython 인터프리터, Zen of Python, IDLE & VS Code',
  '파이썬의 역사, 설계 철학, CPython 인터프리터, REPL, VS Code 설치를 배웁니다.',
  1,
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
  'ch02-variables-data-types-and-operators',
  '변수, 기본 자료형(Numbers, Strings, Booleans) 및 수치 연산',
  '변수 개념, 기본 수치 및 문자열 자료형, f-string 포맷팅을 학습합니다.',
  '변수와 자료형을 학습합니다.',
  '<p>변수와 자료형을 학습합니다.</p>
',
  'published',
  '파이썬 변수와 자료형 - int, float, str, bool, f-string 포맷팅 & 연산자',
  '동적 타입 변수, 기본 자료형, f-string 포맷팅, type() 및 id() 검사를 배웁니다.',
  2,
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
  'ch03-control-flow-conditionals-and-loops',
  '제어 구조: 조건문(if-elif-else, match-case)과 루프(for, while, range, enumerate, zip)',
  '조건문과 match-case 패턴 매칭, range(), enumerate(), zip()을 배웁니다.',
  '조건문과 반복문을 학습합니다.',
  '<p>조건문과 반복문을 학습합니다.</p>
',
  'published',
  '파이썬 제어문 - if-elif-else, match-case, for, while, range, enumerate, zip',
  '조건문, match-case 패턴 매칭, 반복문, range, enumerate, zip을 학습합니다.',
  3,
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
  'ch04-data-structures-list-tuple-set-dict',
  '파이썬 핵심 자료구조: 리스트, 튜플, 집합(Set) 및 딕셔너리',
  '리스트, 튜플, 집합, 딕셔너리와 컴프리헨션을 배웁니다.',
  '파이썬 4대 데이터 구조를 학습합니다.',
  '<p>파이썬 4대 데이터 구조를 학습합니다.</p>
',
  'published',
  '파이썬 자료구조 - List, Tuple, Set, Dictionary & List Comprehension',
  '4대 기본 자료구조의 특징, 슬라이싱, List Comprehension을 다룹니다.',
  4,
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
