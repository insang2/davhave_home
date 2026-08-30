-- Full Python IDLE PDF Lessons Part 9

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch33-python-stdlib-hashlib-secrets-ssl',
  '파이썬 암호화 및 보안 표준 라이브러리: hashlib, secrets 및 ssl 통신',
  'hashlib, secrets, ssl 라이브러리를 배웁니다.',
  'hashlib, secrets, ssl을 다룹니다.',
  '<p>hashlib, secrets, ssl을 다룹니다.</p>
',
  'published',
  '파이썬 보안 라이브러리 - hashlib(SHA256), secrets(안전한 난수) & ssl 암호화 소켓',
  'hashlib, secrets, ssl 표준 모듈을 배웁니다.',
  33,
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
  'ch34-python-stdlib-urllib-and-http-server',
  '파이썬 표준 네트워킹 및 임베디드 웹 서버: urllib와 http.server',
  'urllib 모듈과 http.server를 학습합니다.',
  'urllib과 http.server를 다룹니다.',
  '<p>urllib과 http.server를 다룹니다.</p>
',
  'published',
  '파이썬 표준 웹 모듈 - urllib.request, urllib.parse URL 파싱 & http.server',
  'urllib.request, urllib.parse, http.server를 배웁니다.',
  34,
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
  'ch35-python-stdlib-zipfile-tarfile-zlib',
  '파이썬 압축 파일 포맷 및 아카이브: zipfile, tarfile 및 zlib 스트림 압축',
  'zipfile, tarfile, zlib 모듈을 다룹니다.',
  'zipfile, tarfile, zlib을 배웁니다.',
  '<p>zipfile, tarfile, zlib을 배웁니다.</p>
',
  'published',
  '파이썬 압축 라이브러리 - zipfile(.zip), tarfile(.tar.gz) & zlib 데이터 압축',
  'zipfile, tarfile, zlib 압축을 배웁니다.',
  35,
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
  'ch36-cpython-c-api-architecture-and-objects',
  'CPython C-API 아키텍처: PyObject 헤더 구조와 PyTypeObject 타입 객체',
  'PyObject와 PyTypeObject 아키텍처를 학습합니다.',
  'PyObject와 PyTypeObject를 배웁니다.',
  '<p>PyObject와 PyTypeObject를 배웁니다.</p>
',
  'published',
  'CPython C-API 아키텍처 - PyObject, ob_refcnt, ob_type, PyTypeObject 슬롯',
  'PyObject, PyTypeObject 메타 타입 슬롯을 다룹니다.',
  36,
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
