-- Full Python IDLE PDF Lessons Part 10

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch37-cpython-reference-counting-and-memory',
  'CPython 참조 카운팅(Reference Counting)과 C 메모리 관리 (Py_INCREF, Py_DECREF, PyMem_Malloc)',
  '참조 카운팅 규칙과 Py_INCREF/Py_DECREF를 학습합니다.',
  '참조 카운팅(Reference Counting)을 학습합니다.',
  '<p>참조 카운팅(Reference Counting)을 학습합니다.</p>
',
  'published',
  'CPython 메모리 관리 - 참조 카운팅, Py_INCREF, Py_DECREF, PyMem_Malloc & GC',
  '참조 카운팅, Owned vs Borrowed Reference, Py_INCREF/Py_DECREF를 배웁니다.',
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
  'PyArg_ParseTuple()과 PyErr_SetString()을 학습합니다.',
  'PyArg_ParseTuple과 PyErr_SetString을 다룹니다.',
  '<p>PyArg_ParseTuple과 PyErr_SetString을 다룹니다.</p>
',
  'published',
  'CPython C 예외 및 인자 파싱 - PyErr_SetString, PyArg_ParseTuple, Py_BuildValue',
  'PyErr_SetString(), PyArg_ParseTuple() 및 Py_BuildValue() C-API를 배웁니다.',
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
  'CPython C 레벨 구체적 객체 조작법을 배웁니다.',
  'C-API 구체적 객체를 다룹니다.',
  '<p>C-API 구체적 객체를 다룹니다.</p>
',
  'published',
  'CPython C 구체적 타입 - PyLong, PyUnicode, PyDict, PyList C-API 조작',
  'PyLong, PyUnicode, PyDict, PyList C-API 조작을 배웁니다.',
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
  'C 확장 모듈 빌드 및 GIL 해제 기법을 배웁니다.',
  'C 확장 모듈 제작 및 GIL 제어를 다룹니다.',
  '<p>C 확장 모듈 제작 및 GIL 제어를 다룹니다.</p>
',
  'published',
  'CPython C 확장 모듈 - PyModuleDef, PyMethodDef, PyMODINIT_FUNC & GIL 제어',
  'C 확장 모듈, PyMethodDef, PyModuleDef, GIL 해제를 배웁니다.',
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
