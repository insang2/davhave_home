-- Full Python IDLE PDF Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch05-functions-lambda-and-scope',
  '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 LEGB 스코프 룰',
  '함수 정의, 가변 인자, 람다 및 LEGB 규칙을 학습합니다.',
  '함수 선언과 LEGB 규칙을 다룹니다.',
  '<p>함수 선언과 LEGB 규칙을 다룹니다.</p>
',
  'published',
  '파이썬 함수와 람다 - def, *args, **kwargs, lambda, LEGB 스코프 룰',
  'def 함수 정의, 가변 인자(*args, **kwargs), 람다 함수를 해설합니다.',
  5,
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
  'ch06-modules-packages-and-venv',
  '모듈(Module), 패키지(Package)와 가상환경(venv) 및 pip',
  '모듈과 패키지 구조, venv 가상환경과 pip 패키지 관리자를 학습합니다.',
  '모듈과 가상환경을 다룹니다.',
  '<p>모듈과 가상환경을 다룹니다.</p>
',
  'published',
  '파이썬 모듈과 패키지 - import, __name__, sys.path, venv 가상환경 & pip',
  '모듈, 패키지, __name__ == "__main__", venv 가상환경을 배웁니다.',
  6,
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
  'ch07-file-io-and-context-managers',
  '파일 입출력(File I/O)과 컨텍스트 매니저(with 문) 및 pathlib',
  '파일 입출력 open() 및 with 컨텍스트 매니저, pathlib을 배웁니다.',
  '파일 입출력과 with 컨텍스트 매니저를 다룹니다.',
  '<p>파일 입출력과 with 컨텍스트 매니저를 다룹니다.</p>
',
  'published',
  '파이썬 파일 입출력 - open(), read, write, with 문 & pathlib 모듈',
  '파일 읽기/쓰기 모드, with 컨텍스트 매니저, pathlib을 다룹니다.',
  7,
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
  'ch08-exception-handling-and-custom-exceptions',
  '예외 처리(try-except-else-finally) 및 사용자 정의 예외',
  'try-except-else-finally 구문 및 사용자 정의 예외를 학습합니다.',
  '예외 처리를 학습합니다.',
  '<p>예외 처리를 학습합니다.</p>
',
  'published',
  '파이썬 예외 처리 - try, except, else, finally, raise & 사용자 정의 Exception',
  'try-except-else-finally 구문, raise, Exception 예외를 배웁니다.',
  8,
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
