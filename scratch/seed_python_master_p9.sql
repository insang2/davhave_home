-- Full Python Master Lessons Part 9

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch33-python-stdlib-hashlib-secrets-ssl',
  '파이썬 암호화 및 보안 표준 라이브러리: hashlib, secrets 및 ssl 통신',
  '단방향 암호화 해시(SHA-256)를 생성하는 hashlib, 보안 토큰 생성 secrets, 통신 구간 암호화를 담당하는 ssl 표준 라이브러리를 배웁니다.',
  '비밀번호 해시화 및 데이터 무결성 검증의 **`hashlib`**, 보안 난수 생성의 **`secrets`**, 통신 구간 암호화의 **`ssl`** 모듈을 다룹니다.',
  '<p>비밀번호 해시화 및 데이터 무결성 검증의 <strong><code>hashlib</code></strong>, 보안 난수 생성의 <strong><code>secrets</code></strong>, 통신 구간 암호화의 <strong><code>ssl</code></strong> 모듈을 다룹니다.</p>
',
  'published',
  '파이썬 보안 라이브러리 - hashlib(SHA256), secrets(안전한 난수) & ssl 암호화 소켓',
  '파이썬 표준 보안 모듈 hashlib(SHA-256, MD5 해시), secrets(암호학적으로 안전한 난수/토큰 생성) 및 ssl(TLS/SSL 보안 소켓 연동)을 학습합니다.',
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
  '외부 패키지 설치 없이 파이썬 내장 기능만으로 웹 URL 데이터를 가져오는 urllib 모듈과 1초 만에 로컬 HTTP 웹 서버를 띄우는 http.server를 학습합니다.',
  '외부 설치 라이브러리 없이 파이썬 내장 표준만으로 웹 HTTP 요청을 보낼 수 있는 **`urllib`**과 초간단 웹 서버를 구동하는 **`http.server`**를 다룹니다.',
  '<p>외부 설치 라이브러리 없이 파이썬 내장 표준만으로 웹 HTTP 요청을 보낼 수 있는 **<code>urllib</code>**과 초간단 웹 서버를 구동하는 **<code>http.server</code>**를 다룹니다.</p>
',
  'published',
  '파이썬 표준 웹 모듈 - urllib.request, urllib.parse URL 파싱 & http.server',
  '파이썬 표준 웹 모듈 urllib.request(URL 데이터 다운로드), urllib.parse(URL 쿼리 인코딩/디코딩) 및 http.server(한 줄 웹 서버 구동)를 다룹니다.',
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
  '대용량 파일이나 폴더를 .zip 및 .tar.gz 확장자로 압축하고 풀 수 있는 zipfile, tarfile 모듈과 zlib 메모리 고속 압축 기술을 다룹니다.',
  '여러 파일과 폴더를 하나로 묶어 압축 해제하는 **`zipfile`**, **`tarfile`** 모듈과 메모리 텍스트 데이터를 고속 처리하는 **`zlib`**을 배웁니다.',
  '<p>여러 파일과 폴더를 하나로 묶어 압축 해제하는 <strong><code>zipfile</code></strong>, <strong><code>tarfile</code></strong> 모듈과 메모리 텍스트 데이터를 고속 처리하는 **<code>zlib</code>**을 배웁니다.</p>
',
  'published',
  '파이썬 압축 라이브러리 - zipfile(.zip), tarfile(.tar.gz) & zlib 데이터 압축',
  '파이썬 표준 압축 모듈 zipfile(.zip 파일 압축/해제 및 암호화), tarfile(.tar.gz 아카이브 압축), zlib(메모리 데이터 스트림 압축)을 배웁니다.',
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
  'CPython 인터프리터 내부에서 파이썬의 모든 객체를 C 언어로 표현하는 핵심 구조체인 PyObject와 타입 메타데이터 슬롯을 결정짓는 PyTypeObject 아키텍처를 심도 있게 학습합니다.',
  'CPython 인터프리터 내부에서 파이썬의 모든 동적 객체를 C 언어로 표현하는 근간 구조체인 **`PyObject`**와 객체의 행동 양식을 규정하는 **`PyTypeObject`**를 배웁니다.

---

## 1. CPython C-API 아키텍처 용어 사전 (Glossary)

- **PyObject**: CPython 내부에서 모든 파이썬 객체의 최상위 공통 C 구조체로, 참조 카운터(`ob_refcnt`)와 타입 객체 포인터(`ob_type`)를 선두에 갖습니다.
- **PyVarObject**: 파이썬 리스트, 튜플, 문자열처럼 길이가 변하는 시퀀스 객체를 위한 구조체로, `ob_size` 필드가 추가로 존재합니다.
- **PyTypeObject**: 파이썬 타입(Class) 자체를 정의하는 C 메타 구조체로, 메모리 크기(`tp_basicsize`), 할당 해제 함수(`tp_dealloc`), 슬롯 매핑 테이블을 갖습니다.

---

## 2. CPython C 구조체 핵심 정의 (C-API Source)

```c
typedef struct _object {
    _PyObject_HEAD_EXTRA
    Py_ssize_t ob_refcnt;
    struct _typeobject *ob_type;
} PyObject;
```
',
  '<p>CPython 인터프리터 내부에서 파이썬의 모든 동적 객체를 C 언어로 표현하는 근간 구조체인 **<code>PyObject</code>**와 객체의 행동 양식을 규정하는 **<code>PyTypeObject</code>**를 배웁니다.</p>
<hr>
<h2>1. CPython C-API 아키텍처 용어 사전 (Glossary)</h2>
<ul>
<li><strong>PyObject</strong>: CPython 내부에서 모든 파이썬 객체의 최상위 공통 C 구조체로, 참조 카운터(<code>ob_refcnt</code>)와 타입 객체 포인터(<code>ob_type</code>)를 선두에 갖습니다.</li>
<li><strong>PyVarObject</strong>: 파이썬 리스트, 튜플, 문자열처럼 길이가 변하는 시퀀스 객체를 위한 구조체로, <code>ob_size</code> 필드가 추가로 존재합니다.</li>
<li><strong>PyTypeObject</strong>: 파이썬 타입(Class) 자체를 정의하는 C 메타 구조체로, 메모리 크기(<code>tp_basicsize</code>), 할당 해제 함수(<code>tp_dealloc</code>), 슬롯 매핑 테이블을 갖습니다.</li>
</ul>
<hr>
<h2>2. CPython C 구조체 핵심 정의 (C-API Source)</h2>
<pre><code class="language-c">typedef struct _object {
    _PyObject_HEAD_EXTRA
    Py_ssize_t ob_refcnt;
    struct _typeobject *ob_type;
} PyObject;
</code></pre>
',
  'published',
  'CPython C-API 아키텍처 - PyObject, ob_refcnt, ob_type, PyTypeObject 슬롯',
  'CPython 인터프리터 내부 C 언어 객체 표현 구조 PyObject(ob_refcnt, ob_type), PyTypeObject 메타 타입 슬롯(tp_name, tp_basicsize, tp_dealloc) 및 C에서 파이썬 객체 생성 원리를 다룹니다.',
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
