-- Full Python pjt24 Lessons Part 8

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch29-python-stdlib-os-sys-subprocess',
  '파이썬 시스템 제어 표준 라이브러리: os, sys 및 subprocess 프로세스 관리',
  'os, sys 및 subprocess 라이브러리를 다룹니다.',
  'os, sys, subprocess 모듈을 다룹니다.',
  '<p>os, sys, subprocess 모듈을 다룹니다.</p>
',
  'published',
  '파이썬 표준 라이브러리 - os, sys, subprocess 프로세스 실행 & Pipe',
  'os, sys, subprocess 프로세스 실행 및 파이프 통신을 배웁니다.',
  29,
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
  'ch30-python-stdlib-collections-itertools-dataclasses',
  '파이썬 데이터 구조 및 함수형 유틸리티: collections, itertools 및 dataclasses',
  'collections, itertools, dataclasses를 배웁니다.',
  'collections, itertools, dataclasses를 다룹니다.',
  '<p>collections, itertools, dataclasses를 다룹니다.</p>
',
  'published',
  '파이썬 고급 표준 모듈 - collections(Counter, defaultdict), itertools & dataclasses',
  'collections, itertools, dataclasses를 배웁니다.',
  30,
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
  'ch31-python-stdlib-sqlite3-and-pickle',
  '파이썬 표준 데이터베이스 및 객체 직렬화: sqlite3와 pickle 바이너리 보관',
  'sqlite3와 pickle, shelve를 다룹니다.',
  'sqlite3와 pickle을 배웁니다.',
  '<p>sqlite3와 pickle을 배웁니다.</p>
',
  'published',
  '파이썬 내장 DB - sqlite3 사용법, Connection, Cursor, pickle & shelve 객체 저장',
  'sqlite3, pickle, shelve 모듈을 배웁니다.',
  31,
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
  'ch32-python-stdlib-logging-and-argparse',
  '파이썬 로깅 및 CLI 인자 파서: logging 모듈과 argparse 터미널 도구',
  'logging 모듈과 argparse CLI 도구를 학습합니다.',
  'logging과 argparse를 학습합니다.',
  '<p>logging과 argparse를 학습합니다.</p>
',
  'published',
  '파이썬 로깅과 CLI - logging 레벨, Logger, FileHandler & argparse 옵션 파서',
  'logging 레벨, FileHandler, argparse CLI 파서를 배웁니다.',
  32,
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
