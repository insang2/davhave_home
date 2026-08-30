-- Full Python C-API Lessons Part 6

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch21-python-data-analysis-numpy-pandas',
  '파이썬 데이터 분석 입문: NumPy 배열 연산과 Pandas 데이터프레임 처리',
  'NumPy 벡터화 연산과 Pandas DataFrame 데이터 전처리 기술을 다룹니다.',
  'NumPy 배열 연산과 Pandas 데이터프레임을 다룹니다.',
  '<p>NumPy 배열 연산과 Pandas 데이터프레임을 다룹니다.</p>
',
  'published',
  '파이썬 데이터 분석 - NumPy N차원 배열, Pandas DataFrame & CSV 전처리',
  'NumPy 배열, Pandas DataFrame 결측치 정제 및 CSV 파일 읽기/쓰기를 배웁니다.',
  21,
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
  'ch22-python-web-framework-django-fastapi',
  '파이썬 웹 프레임워크 비교: Django 풀스택 vs FastAPI 비동기 REST API',
  'Django와 FastAPI의 아키텍처 비교 및 실전 서버 구축법을 배웁니다.',
  'Django 풀스택 프레임워크와 FastAPI 아키텍처를 비교합니다.',
  '<p>Django 풀스택 프레임워크와 FastAPI 아키텍처를 비교합니다.</p>
',
  'published',
  '파이썬 웹 프레임워크 - Django MVT 아키텍처 vs FastAPI 비동기 REST API 구축',
  'Django와 FastAPI의 구조적 차이와 REST API 구축법을 배웁니다.',
  22,
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
  'ch23-python-orm-sqlalchemy-and-database',
  '파이썬 ORM 데이터베이스 연동: SQLAlchemy와 SQLModel 완전 가이드',
  'SQLAlchemy ORM 및 SQLModel 기반 데이터베이스 트랜잭션 관리 기법을 배웁니다.',
  'SQLAlchemy ORM과 SQLModel을 다룹니다.',
  '<p>SQLAlchemy ORM과 SQLModel을 다룹니다.</p>
',
  'published',
  '파이썬 ORM - SQLAlchemy 2.0, SQLModel, PostgreSQL/MySQL 연동 & Alembic',
  'SQLAlchemy 2.0 모델링, Session DB CRUD 및 Alembic 마이그레이션을 다룹니다.',
  23,
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
  'ch24-python-web-automation-selenium-playwright',
  '파이썬 웹 자동화 및 동적 렌더링 스크래핑: Selenium과 Playwright',
  'Headless Browser로 자동화하는 Selenium과 Playwright를 학습합니다.',
  'Selenium과 Playwright를 배웁니다.',
  '<p>Selenium과 Playwright를 배웁니다.</p>
',
  'published',
  '파이썬 웹 자동화 - Selenium WebDriver vs Playwright 비동기 크롤링',
  'Selenium WebDriver와 Playwright 비동기 브라우저 자동화를 배웁니다.',
  24,
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
