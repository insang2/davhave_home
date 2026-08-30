-- Full Python Stdlib Deep Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch05-functions-lambda-and-scope',
  '함수 선언, 매개변수(*args, **kwargs), 람다 표현식 및 LEGB 스코프 룰',
  '함수 정의, 가변 인자(*args, **kwargs), 람다(lambda) 및 LEGB 스코프 규칙을 학습합니다.',
  '특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 **함수(Function)**와 **LEGB 규칙**을 다룹니다.',
  '<p>특정 작업을 수행하는 코드 블록을 재사용 가능하게 묶어주는 **함수(Function)**와 <strong>LEGB 규칙</strong>을 다룹니다.</p>
',
  'published',
  '파이썬 함수와 람다 - def, *args, **kwargs, lambda, LEGB 스코프 룰',
  'def 함수 정의, 가변 인자(*args, **kwargs), 익명 람다(lambda) 함수, 일급 객체, LEGB 스코프 변수 참조 규칙을 해설합니다.',
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
  '코드의 모듈화와 재사용을 돕는 **모듈(Module)**과 **가상환경(venv)**을 다룹니다.',
  '<p>코드의 모듈화와 재사용을 돕는 **모듈(Module)**과 **가상환경(venv)**을 다룹니다.</p>
',
  'published',
  '파이썬 모듈과 패키지 - import, __name__, sys.path, venv 가상환경 & pip',
  '파이썬 파일 모듈, 패키지, __name__ == "__main__", venv 가상환경 및 pip 패키지 관리를 배웁니다.',
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
  '디스크 상의 파일 입출력과 리소스를 안전하게 관리하는 **with 컨텍스트 매니저**를 다룹니다.',
  '<p>디스크 상의 파일 입출력과 리소스를 안전하게 관리하는 <strong>with 컨텍스트 매니저</strong>를 다룹니다.</p>
',
  'published',
  '파이썬 파일 입출력 - open(), read, write, with 문 & pathlib 모듈',
  '파일 읽기/쓰기 모드, with 컨텍스트 매니저, pathlib 객체지향 경로 조작을 다룹니다.',
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
  'try-except-else-finally 예외 처리 구문 및 사용자 정의 예외를 학습합니다.',
  '프로그램 실행 중 런타임 에러를 안전하게 포획하는 **예외 처리(Exception Handling)**를 학습합니다.',
  '<p>프로그램 실행 중 런타임 에러를 안전하게 포획하는 **예외 처리(Exception Handling)**를 학습합니다.</p>
',
  'published',
  '파이썬 예외 처리 - try, except, else, finally, raise & 사용자 정의 Exception',
  'try-except-else-finally 구문, raise, Exception 커스텀 예외 클래스를 배웁니다.',
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
