-- Full Python Master Lessons Part 5

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch17-functional-programming-map-filter-reduce',
  '파이썬 함수형 프로그래밍 기법 (map, filter, reduce, functools)',
  '부작용(Side Effect)이 없는 순수 함수 기반의 파이썬 함수형 프로그래밍(map, filter, reduce, functools.lru_cache) 기법을 학습합니다.',
  '부작용(Side Effect)을 줄이고 불변성 데이터를 가공하는 **파이썬 함수형 프로그래밍(Functional Programming)** 기법을 다룹니다.',
  '<p>부작용(Side Effect)을 줄이고 불변성 데이터를 가공하는 <strong>파이썬 함수형 프로그래밍(Functional Programming)</strong> 기법을 다룹니다.</p>
',
  'published',
  '파이썬 함수형 프로그래밍 - map, filter, reduce, functools & lru_cache',
  '고차 함수 map(), filter(), functools.reduce(), partial(), 그리고 메모이제이션 성능을 극대화하는 lru_cache 데코레이터를 배웁니다.',
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
  '파이썬의 실행 속도 한계를 극복하기 위해 C 언어로 작성된 콤파일 라이브러리(.so/.dll)를 ctypes 모듈로 직접 불러와 호출하는 기법을 배웁니다.',
  '파이썬의 편리함과 C 언어의 연산 속도를 결합하여 **C 언어 라이브러리(`.so`, `.dll`)를 파이썬에서 바인딩 호출하는 `ctypes` 모듈**을 다룹니다.',
  '<p>파이썬의 편리함과 C 언어의 연산 속도를 결합하여 <strong>C 언어 라이브러리(<code>.so</code>, <code>.dll</code>)를 파이썬에서 바인딩 호출하는 <code>ctypes</code> 모듈</strong>을 다룹니다.</p>
',
  'published',
  '파이썬 C 연동 - ctypes, C-API, Shared Library .so/.dll 호출 & 바인딩',
  'C 언어로 작성된 고속 공유 라이브러리(.so/.dll)를 파이썬에서 호출하는 ctypes 모듈, CPython C-API 바인딩 및 연동 기법을 배웁니다.',
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
  '직접 작성한 파이썬 모듈을 전 세계 개발자들이 pip install로 사용할 수 있도록 pyproject.toml과 build, twine을 이용해 PyPI에 배포하는 과정을 학습합니다.',
  '개발한 파이썬 오픈소스 패키지를 표준 규격(**`pyproject.toml`**)으로 패키징하여 **PyPI(Python Package Index)**에 등록 배포하는 과정을 다룹니다.',
  '<p>개발한 파이썬 오픈소스 패키지를 표준 규격(<strong><code>pyproject.toml</code></strong>)으로 패키징하여 **PyPI(Python Package Index)**에 등록 배포하는 과정을 다룹니다.</p>
',
  'published',
  '파이썬 패키징 - pyproject.toml, setuptools, wheel & PyPI twine 배포',
  '내가 만든 파이썬 패키지를 pyproject.toml 스펙으로 패키징하고 wheel 빌드 후 PyPI 전 세계 패키지 저장소에 twine으로 오픈소스 배포하는 법을 배웁니다.',
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
  '파이썬의 기초 문법, 객체지향, 파일 처리, tkinter GUI 기술을 종합하여 터틀 그래픽 미니 게임과 실전 데이터 관리 애플리케이션을 완성합니다.',
  '배운 파이썬의 모든 핵심 기초 문법, 자료구조, 객체지향 설계, 파일 처리 및 tkinter GUI 기술을 통합하여 **실전 파이썬 종합 프로젝트**를 완성합니다.',
  '<p>배운 파이썬의 모든 핵심 기초 문법, 자료구조, 객체지향 설계, 파일 처리 및 tkinter GUI 기술을 통합하여 <strong>실전 파이썬 종합 프로젝트</strong>를 완성합니다.</p>
',
  'published',
  '파이썬 실전 프로젝트 - Turtle 터틀 그래픽 미니 게임 & GUI 관리 앱',
  '배운 파이썬 기술(자료구조, OOP, 파일 I/O, tkinter, Turtle)을 총동원하여 터틀 그래픽 피하기 미니 게임과 실전 GUI 도서/회원 관리 애플리케이션을 구현합니다.',
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
