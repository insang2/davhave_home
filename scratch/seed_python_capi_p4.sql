-- Full Python C-API Lessons Part 4

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch13-gui-programming-with-tkinter',
  'tkinter를 활용한 파이썬 데스크톱 GUI 프로그래밍',
  'tkinter를 이용하여 데스크톱 GUI 프로그램을 개발하는 기법을 배웁니다.',
  '데스크톱 GUI 모듈인 tkinter를 학습합니다.',
  '<p>데스크톱 GUI 모듈인 tkinter를 학습합니다.</p>
',
  'published',
  '파이썬 GUI 프로그래밍 - tkinter, Tk, Label, Button, Entry, pack/grid',
  '표준 GUI 라이브러리 tkinter, 컴포넌트, 레이아웃 매니저(pack, grid)를 학습합니다.',
  13,
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
  'ch14-concurrency-multiprocessing-and-asyncio',
  '파이썬 동시성 프로그래밍: threading, multiprocessing 및 asyncio',
  'threading, multiprocessing 및 asyncio 비동기 코딩을 학습합니다.',
  'threading, multiprocessing, asyncio를 다룹니다.',
  '<p>threading, multiprocessing, asyncio를 다룹니다.</p>
',
  'published',
  '파이썬 동시성 - threading, multiprocessing, GIL 한계 & asyncio async/await',
  'multiprocessing, threading, asyncio async/await 비동기 프로그래밍을 배웁니다.',
  14,
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
  'ch15-web-scraping-and-http-requests',
  '웹 스크래핑과 파이썬 HTTP 통신 (requests, BeautifulSoup4)',
  'requests 모듈과 BeautifulSoup4 크롤링 기법을 배웁니다.',
  'requests와 BeautifulSoup4를 학습합니다.',
  '<p>requests와 BeautifulSoup4를 학습합니다.</p>
',
  'published',
  '파이썬 웹 크롤링 - requests HTTP GET/POST, BeautifulSoup4 파싱 & CSS 셀렉터',
  'requests, BeautifulSoup4 HTML DOM 파싱 및 CSS 셀렉터를 배웁니다.',
  15,
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
  'ch16-python-type-hinting-and-annotations',
  '파이썬 타입 힌팅(Type Hinting)과 typing 모듈',
  '타입 힌팅(Type Hinting)과 typing 모듈, mypy 정적 분석기를 다룹니다.',
  '타입 힌팅(Type Hinting)을 다룹니다.',
  '<p>타입 힌팅(Type Hinting)을 다룹니다.</p>
',
  'published',
  '파이썬 타입 힌팅 - type annotations, typing 모듈, mypy 정적 분석',
  '타입 어노테이션, typing 모듈과 mypy 정적 분석기를 학습합니다.',
  16,
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
