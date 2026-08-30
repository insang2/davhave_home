-- Full Python C-API Lessons Part 9

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
  'CPython 인터프리터 내부에서 파이썬의 모든 객체를 C 언어로 표현하는 핵심 구조체인 PyObject와 타입 메타데이터 슬롯을 결정짓는 PyTypeObject 아키텍처를 심도 있게 학습합니다.',
  'CPython 인터프리터 내부에서 파이썬의 모든 동적 객체를 C 언어로 표현하는 근간 구조체인 **`PyObject`**와 객체의 행동 양식을 규정하는 **`PyTypeObject`**를 배웁니다.

---

## 1. CPython C-API 아키텍처 용어 사전 (Glossary)

- **PyObject**: CPython 내부에서 모든 파이썬 객체의 최상위 공통 C 구조체로, 참조 카운터(`ob_refcnt`)와 타입 객체 포인터(`ob_type`)를 선두에 갖습니다.
- **PyVarObject**: 파이썬 리스트, 튜플, 문자열처럼 길이가 변하는 시퀀스 객체를 위한 구조체로, `ob_size` 필드가 추가로 존재합니다.
- **PyTypeObject**: 파이썬 타입(Class) 자체를 정의하는 C 메타 구조체로, 메모리 크기(`tp_basicsize`), 할당 해제 함수(`tp_dealloc`), 슬롯 매핑 테이블을 갖습니다.
- **`Py_TYPE(op)`**: 파이썬 객체 포인터로부터 해당 객체의 `PyTypeObject` 타입 포인터를 추출해 내는 C 마크로 함수입니다.

---

## 2. CPython C 구조체 핵심 정의 (C-API Source)

```c
/* CPython Internal Header (object.h) */
typedef struct _object {
    _PyObject_HEAD_EXTRA // 이중 연결 리스트 디버깅용 해더
    Py_ssize_t ob_refcnt; // 참조 카운터 (Reference Count)
    struct _typeobject *ob_type; // 타입 객체 포인터 (Type Pointer)
} PyObject;

/* 시퀀스 변길이 객체 구조체 */
typedef struct {
    PyObject ob_base;
    Py_ssize_t ob_size; /* 동적 요소 개수 */
} PyVarObject;
```

---

## 3. C 예제: C 레벨에서 PyObject 타입 검사 및 속성 읽기

```c
#include <Python.h>

void inspect_pyobject(PyObject* obj) {
    if (obj == NULL) return;

    // 1. 참조 카운트 및 타입 이름 읽기
    Py_ssize_t ref_count = Py_REFCNT(obj);
    const char* type_name = Py_TYPE(obj)->tp_name;

    printf("CPython 객체 검사 -> 타입: %s | 참조 카운트: %ld\n", type_name, ref_count);

    // 2. 정수(Long) 타입 여부 검사
    if (PyLong_Check(obj)) {
        long value = PyLong_AsLong(obj);
        printf(" -> C 정수 변환 값: %ld\n", value);
    }
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파이썬에서 `type(x)`를 호출하면 CPython 내부에서 어떤 일이 일어나나요?**
A. CPython C 레벨에서 객체 포인터의 `Py_TYPE(x)` 마크로를 실행하여 연결된 `PyTypeObject`의 `tp_name` 스트링 및 타입 객체를 즉시 반환합니다.
',
  '<p>CPython 인터프리터 내부에서 파이썬의 모든 동적 객체를 C 언어로 표현하는 근간 구조체인 **<code>PyObject</code>**와 객체의 행동 양식을 규정하는 **<code>PyTypeObject</code>**를 배웁니다.</p>
<hr>
<h2>1. CPython C-API 아키텍처 용어 사전 (Glossary)</h2>
<ul>
<li><strong>PyObject</strong>: CPython 내부에서 모든 파이썬 객체의 최상위 공통 C 구조체로, 참조 카운터(<code>ob_refcnt</code>)와 타입 객체 포인터(<code>ob_type</code>)를 선두에 갖습니다.</li>
<li><strong>PyVarObject</strong>: 파이썬 리스트, 튜플, 문자열처럼 길이가 변하는 시퀀스 객체를 위한 구조체로, <code>ob_size</code> 필드가 추가로 존재합니다.</li>
<li><strong>PyTypeObject</strong>: 파이썬 타입(Class) 자체를 정의하는 C 메타 구조체로, 메모리 크기(<code>tp_basicsize</code>), 할당 해제 함수(<code>tp_dealloc</code>), 슬롯 매핑 테이블을 갖습니다.</li>
<li><strong><code>Py_TYPE(op)</code></strong>: 파이썬 객체 포인터로부터 해당 객체의 <code>PyTypeObject</code> 타입 포인터를 추출해 내는 C 마크로 함수입니다.</li>
</ul>
<hr>
<h2>2. CPython C 구조체 핵심 정의 (C-API Source)</h2>
<pre><code class="language-c">/* CPython Internal Header (object.h) */
typedef struct _object {
    _PyObject_HEAD_EXTRA // 이중 연결 리스트 디버깅용 해더
    Py_ssize_t ob_refcnt; // 참조 카운터 (Reference Count)
    struct _typeobject *ob_type; // 타입 객체 포인터 (Type Pointer)
} PyObject;

/* 시퀀스 변길이 객체 구조체 */
typedef struct {
    PyObject ob_base;
    Py_ssize_t ob_size; /* 동적 요소 개수 */
} PyVarObject;
</code></pre>
<hr>
<h2>3. C 예제: C 레벨에서 PyObject 타입 검사 및 속성 읽기</h2>
<pre><code class="language-c">#include &lt;Python.h&gt;

void inspect_pyobject(PyObject* obj) {
    if (obj == NULL) return;

    // 1. 참조 카운트 및 타입 이름 읽기
    Py_ssize_t ref_count = Py_REFCNT(obj);
    const char* type_name = Py_TYPE(obj)-&gt;tp_name;

    printf(&quot;CPython 객체 검사 -&gt; 타입: %s | 참조 카운트: %ld\n&quot;, type_name, ref_count);

    // 2. 정수(Long) 타입 여부 검사
    if (PyLong_Check(obj)) {
        long value = PyLong_AsLong(obj);
        printf(&quot; -&gt; C 정수 변환 값: %ld\n&quot;, value);
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬에서 <code>type(x)</code>를 호출하면 CPython 내부에서 어떤 일이 일어나나요?</strong>
A. CPython C 레벨에서 객체 포인터의 <code>Py_TYPE(x)</code> 마크로를 실행하여 연결된 <code>PyTypeObject</code>의 <code>tp_name</code> 스트링 및 타입 객체를 즉시 반환합니다.</p>
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
