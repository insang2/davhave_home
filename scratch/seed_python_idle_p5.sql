-- Full Python IDLE PDF Lessons Part 5

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch17-functional-programming-map-filter-reduce',
  '파이썬 함수형 프로그래밍 기법 (map, filter, reduce, functools)',
  '함수형 프로그래밍 기법을 학습합니다.',
  '함수형 프로그래밍을 다룹니다.',
  '<p>함수형 프로그래밍을 다룹니다.</p>
',
  'published',
  '파이썬 함수형 프로그래밍 - map, filter, reduce, functools & lru_cache',
  'map(), filter(), reduce(), functools.lru_cache를 배웁니다.',
  17,
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
  'ch18-python-c-extension-and-ctypes',
  '파이썬 C 연동 및 ctypes, cffi 확장 모듈',
  'C 라이브러리를 ctypes 모듈로 직접 불러와 호출하는 기법을 배웁니다.',
  'ctypes 모듈을 다룹니다.',
  '<p>ctypes 모듈을 다룹니다.</p>
',
  'published',
  '파이썬 C 연동 - ctypes, C-API, Shared Library .so/.dll 호출 & 바인딩',
  'C 공유 라이브러리를 파이썬에서 호출하는 ctypes 모듈을 배웁니다.',
  18,
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
  'ch19-python-packaging-distribution-wheel',
  '파이썬 패키징과 PyPI 배포 (pyproject.toml, setuptools, wheel)',
  'pyproject.toml과 build, twine을 이용해 PyPI에 배포하는 과정을 학습합니다.',
  'PyPI 패키징 및 배포를 다룹니다.',
  '<p>PyPI 패키징 및 배포를 다룹니다.</p>
',
  'published',
  '파이썬 패키징 - pyproject.toml, setuptools, wheel & PyPI twine 배포',
  'pyproject.toml 규격 패키징 및 PyPI 배포 과정을 배웁니다.',
  19,
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
  'ch20-python-final-project-mini-game-and-apps',
  '파이썬 실전 종합 프로젝트: 터틀 그래픽 미니 게임 & GUI 관리 앱',
  'Turtle 미니 게임과 GUI 데이터 관리 애플리케이션을 완성합니다.',
  '실전 파이썬 종합 프로젝트를 완성합니다.',
  '<p>실전 파이썬 종합 프로젝트를 완성합니다.</p>
',
  'published',
  '파이썬 실전 프로젝트 - Turtle 터틀 그래픽 미니 게임 & GUI 관리 앱',
  'Turtle 그래픽 미니 게임과 tkinter GUI 데이터 관리 앱을 구현합니다.',
  20,
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
