-- Full Python Master Lessons Part 10

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch37-cpython-reference-counting-and-memory',
  'CPython 참조 카운팅(Reference Counting)과 C 메모리 관리 (Py_INCREF, Py_DECREF, PyMem_Malloc)',
  'CPython 가비지 컬렉터의 근간이 되는 참조 카운팅 규칙과 C 확장 모듈 제작 시 필수적인 Py_INCREF(), Py_DECREF() 및 PyMem_Malloc 메모리 할당 관리법을 학습합니다.',
  'CPython의 메모리 관리 및 가비지 컬렉션의 핵심 원리인 **참조 카운팅(Reference Counting)** 메커니즘과 C 레벨 메모리 할당자(**`PyMem_Malloc`**)를 학습합니다.',
  '<p>CPython의 메모리 관리 및 가비지 컬렉션의 핵심 원리인 <strong>참조 카운팅(Reference Counting)</strong> 메커니즘과 C 레벨 메모리 할당자(<strong><code>PyMem_Malloc</code></strong>)를 학습합니다.</p>
',
  'published',
  'CPython 메모리 관리 - 참조 카운팅, Py_INCREF, Py_DECREF, PyMem_Malloc & GC',
  'CPython의 자동 메모리 관리 핵심인 참조 카운팅(Reference Counting) 메커니즘, 참조 소유권 규칙(Owned vs Borrowed Reference), Py_INCREF/Py_DECREF 및 PyMem_Malloc 할당자를 배웁니다.',
  37,
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
  'ch38-cpython-c-exception-handling-and-args',
  'CPython C-API 예외 처리 및 C 함수 인자 파싱 (PyErr_SetString, PyArg_ParseTuple)',
  'C 확장 모듈 개발 시 파이썬 튜플 인자를 C 언어 변수로 추출하는 PyArg_ParseTuple()과 C 영역에서 파이썬 예외를 띄우는 PyErr_SetString()을 학습합니다.',
  'C 언어로 파이썬 확장 모듈을 개발할 때 파이썬 인자를 C 데이터 타입으로 변환하는 **`PyArg_ParseTuple`**과 C 영역에서 파이썬 예외를 발생하는 **`PyErr_SetString`**을 다룹니다.',
  '<p>C 언어로 파이썬 확장 모듈을 개발할 때 파이썬 인자를 C 데이터 타입으로 변환하는 **<code>PyArg_ParseTuple</code>**과 C 영역에서 파이썬 예외를 발생하는 **<code>PyErr_SetString</code>**을 다룹니다.</p>
',
  'published',
  'CPython C 예외 및 인자 파싱 - PyErr_SetString, PyArg_ParseTuple, Py_BuildValue',
  'C 영역에서 파이썬 예외 발생 PyErr_SetString(), PyErr_Occurred(), 파이썬 인자를 C 변수로 파싱하는 PyArg_ParseTuple() 및 Py_BuildValue() C-API를 배웁니다.',
  38,
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
  'ch39-cpython-c-concrete-objects-long-unicode-dict',
  'CPython 구체적 C 데이터 타입 조작: PyLongObject, PyUnicodeObject 및 PyDictObject',
  'CPython 인터프리터 C 레벨에서 파이썬 정수, 유니코드 문자열, 딕셔너리, 리스트 구체적 객체(Concrete Objects)를 C 코드로 직접 다루는 방식을 배웁니다.',
  'CPython C 레벨에서 파이썬 정수, 문자열, 딕셔너리, 리스트 구체적 객체(**Concrete Objects**)를 직접 다루는 **C-API 함수 집합**을 다룹니다.',
  '<p>CPython C 레벨에서 파이썬 정수, 문자열, 딕셔너리, 리스트 구체적 객체(<strong>Concrete Objects</strong>)를 직접 다루는 <strong>C-API 함수 집합</strong>을 다룹니다.</p>
',
  'published',
  'CPython C 구체적 타입 - PyLong, PyUnicode, PyDict, PyList C-API 조작',
  'CPython 구체적 C-API: PyLong_FromLong, PyUnicode_FromString, PyDict_SetItemString, PyList_Append를 통한 C 레벨 파이썬 자료구조 고속 생성 및 검색을 배웁니다.',
  39,
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
  'ch40-cpython-c-extension-module-creation',
  'CPython C 확장 모듈 제작: PyModuleDef, PyMethodDef 및 GIL/멀티스레드 C-API',
  'C 언어로 파이썬에서 직접 import하여 사용하는 고속 C 확장 모듈(C Extension Module)을 처음부터 끝까지 빌드하고 GIL을 해제하여 멀티스레딩 성능을 올리는 기법을 배웁니다.',
  'C 언어로 작성된 연산 코드를 파이썬에서 **`import` 모듈 형태로 불러와 고속 구동하는 C 확장 모듈(C Extension Module)** 제작 및 GIL 제어를 다룹니다.',
  '<p>C 언어로 작성된 연산 코드를 파이썬에서 <strong><code>import</code> 모듈 형태로 불러와 고속 구동하는 C 확장 모듈(C Extension Module)</strong> 제작 및 GIL 제어를 다룹니다.</p>
',
  'published',
  'CPython C 확장 모듈 - PyModuleDef, PyMethodDef, PyMODINIT_FUNC & GIL 제어',
  'C 언어로 작성하는 파이썬 확장 모듈(C Extension), PyMethodDef 메소드 테이블, PyModuleDef 모듈 정의, PyMODINIT_FUNC, C에서의 GIL 해제(Py_BEGIN_ALLOW_THREADS)를 배웁니다.',
  40,
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
