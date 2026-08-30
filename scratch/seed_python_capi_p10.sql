-- Full Python C-API Lessons Part 10

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch37-cpython-reference-counting-and-memory',
  'CPython 참조 카운팅(Reference Counting)과 C 메모리 관리 (Py_INCREF, Py_DECREF, PyMem_Malloc)',
  'CPython 가비지 컬렉터의 근간이 되는 참조 카운팅 규칙과 C 확장 모듈 제작 시 필수적인 Py_INCREF(), Py_DECREF() 및 PyMem_Malloc 메모리 할당 관리법을 학습합니다.',
  'CPython의 메모리 관리 및 가비지 컬렉션의 핵심 원리인 **참조 카운팅(Reference Counting)** 메커니즘과 C 레벨 메모리 할당자(**`PyMem_Malloc`**)를 학습합니다.

---

## 1. CPython 참조 카운팅 용어 사전 (Glossary)

- **Reference Counting (참조 카운팅)**: 모든 `PyObject`의 `ob_refcnt`를 추적하여, 카운트가 0에 도달하는 즉시 `tp_dealloc` 함수를 호출하여 힙 메모리를 해제하는 CPython 메모리 관리 방식입니다.
- **Owned Reference (소유 참조)**: 코드 구역이 해당 객체의 참조 소유권을 직접 가집니다. 사용 후 불필요해지면 반드시 `Py_DECREF()`를 호출해야 메모리 누수(Memory Leak)가 발생하지 않습니다.
- **Borrowed Reference (빌린 참조)**: 객체의 포인터만 일시적으로 빌려 쓰는 상태로, `Py_DECREF()`를 호출하면 안 됩니다.
- **`Py_INCREF(op)` / `Py_DECREF(op)`**: 객체의 참조 카운트를 1 증가시키거나 1 감소시키는 C-API 마크로 함수입니다. (`Py_XINCREF`, `Py_XDECREF`는 NULL 체크 포함)

---

## 2. 소유 참조 vs 빌린 참조 규칙 정리표

| 참조 규칙 구분 | C-API 대표 함수 예시 | Py_DECREF 호출 여부 | 메모리 누수 위험성 |
| :--- | :--- | :---: | :--- |
| **Owned Reference (소유)** | `PyLong_FromLong()`, `PyTuple_New()` | **필수 (호출 필요)** | 미호출 시 메모리 누수 발생 |
| **Borrowed Reference (빌린)** | `PyTuple_GetItem()`, `PyList_GetItem()` | **금지 (호출 불가)** | 호출 시 세그멘테이션 폴트(Crash) |

---

## 3. 참조 카운팅 C 연동 안전성 예제

```c
#include <Python.h>

PyObject* create_and_process_list(void) {
    // 1. 새로운 파이썬 리스트 객체 생성 (소유 참조 refcnt = 1)
    PyObject* list_obj = PyList_New(0);

    // 2. 파이썬 정수 객체 생성 (소유 참조 refcnt = 1)
    PyObject* num_obj = PyLong_FromLong(2026);

    // 3. 리스트에 요소 추가 (PyList_Append는 num_obj의 refcnt를 1 증가시킴)
    PyList_Append(list_obj, num_obj);

    // 4. num_obj는 이제 리스트가 소유권을 공유하므로, 함수 내 지역 소유권 반납
    Py_DECREF(num_obj);

    // 5. 생성된 리스트 반환 (호출자에게 소유권 이전)
    return list_obj;
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 순환 참조(Circular Reference)가 발생하면 참조 카운팅만으로 메모리가 해제되나요?**
A. 안 됩니다! 두 객체가 서로를 가리키면 참조 카운트가 1 밑으로 떨어지지 않는 순환 참조 무한 대기 현상이 발생합니다. 이를 위해 CPython에는 순환 참조 감지용 **세대별 가비지 컬렉터(Cyclic Garbage Collector)**가 보조엔진으로 탑재되어 있습니다.
',
  '<p>CPython의 메모리 관리 및 가비지 컬렉션의 핵심 원리인 <strong>참조 카운팅(Reference Counting)</strong> 메커니즘과 C 레벨 메모리 할당자(<strong><code>PyMem_Malloc</code></strong>)를 학습합니다.</p>
<hr>
<h2>1. CPython 참조 카운팅 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Reference Counting (참조 카운팅)</strong>: 모든 <code>PyObject</code>의 <code>ob_refcnt</code>를 추적하여, 카운트가 0에 도달하는 즉시 <code>tp_dealloc</code> 함수를 호출하여 힙 메모리를 해제하는 CPython 메모리 관리 방식입니다.</li>
<li><strong>Owned Reference (소유 참조)</strong>: 코드 구역이 해당 객체의 참조 소유권을 직접 가집니다. 사용 후 불필요해지면 반드시 <code>Py_DECREF()</code>를 호출해야 메모리 누수(Memory Leak)가 발생하지 않습니다.</li>
<li><strong>Borrowed Reference (빌린 참조)</strong>: 객체의 포인터만 일시적으로 빌려 쓰는 상태로, <code>Py_DECREF()</code>를 호출하면 안 됩니다.</li>
<li><strong><code>Py_INCREF(op)</code> / <code>Py_DECREF(op)</code></strong>: 객체의 참조 카운트를 1 증가시키거나 1 감소시키는 C-API 마크로 함수입니다. (<code>Py_XINCREF</code>, <code>Py_XDECREF</code>는 NULL 체크 포함)</li>
</ul>
<hr>
<h2>2. 소유 참조 vs 빌린 참조 규칙 정리표</h2>
<table>
<thead>
<tr>
<th align="left">참조 규칙 구분</th>
<th align="left">C-API 대표 함수 예시</th>
<th align="center">Py_DECREF 호출 여부</th>
<th align="left">메모리 누수 위험성</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>Owned Reference (소유)</strong></td>
<td align="left"><code>PyLong_FromLong()</code>, <code>PyTuple_New()</code></td>
<td align="center"><strong>필수 (호출 필요)</strong></td>
<td align="left">미호출 시 메모리 누수 발생</td>
</tr>
<tr>
<td align="left"><strong>Borrowed Reference (빌린)</strong></td>
<td align="left"><code>PyTuple_GetItem()</code>, <code>PyList_GetItem()</code></td>
<td align="center"><strong>금지 (호출 불가)</strong></td>
<td align="left">호출 시 세그멘테이션 폴트(Crash)</td>
</tr>
</tbody></table>
<hr>
<h2>3. 참조 카운팅 C 연동 안전성 예제</h2>
<pre><code class="language-c">#include &lt;Python.h&gt;

PyObject* create_and_process_list(void) {
    // 1. 새로운 파이썬 리스트 객체 생성 (소유 참조 refcnt = 1)
    PyObject* list_obj = PyList_New(0);

    // 2. 파이썬 정수 객체 생성 (소유 참조 refcnt = 1)
    PyObject* num_obj = PyLong_FromLong(2026);

    // 3. 리스트에 요소 추가 (PyList_Append는 num_obj의 refcnt를 1 증가시킴)
    PyList_Append(list_obj, num_obj);

    // 4. num_obj는 이제 리스트가 소유권을 공유하므로, 함수 내 지역 소유권 반납
    Py_DECREF(num_obj);

    // 5. 생성된 리스트 반환 (호출자에게 소유권 이전)
    return list_obj;
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 순환 참조(Circular Reference)가 발생하면 참조 카운팅만으로 메모리가 해제되나요?</strong>
A. 안 됩니다! 두 객체가 서로를 가리키면 참조 카운트가 1 밑으로 떨어지지 않는 순환 참조 무한 대기 현상이 발생합니다. 이를 위해 CPython에는 순환 참조 감지용 **세대별 가비지 컬렉터(Cyclic Garbage Collector)**가 보조엔진으로 탑재되어 있습니다.</p>
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
  'C 언어로 파이썬 확장 모듈을 개발할 때 파이썬 인자를 C 데이터 타입으로 변환하는 **`PyArg_ParseTuple`**과 C 영역에서 파이썬 예외를 발생하는 **`PyErr_SetString`**을 다룹니다.

---

## 1. 인자 파싱 및 예외 처리 용어 사전 (Glossary)

- **`PyArg_ParseTuple(args, format, ...)`**: 파이썬에서 넘어온 위치 인자 튜플(`args`)을 C 언어 포맷 문자열(`"i"`, `"s"`, `"d"` 등)에 맞춰 C 변수에 저장하는 인자 파서 C-API입니다.
- **`Py_BuildValue(format, ...)`**: C 언어의 기본 데이터 타입들(`int`, `double`, `char*`)을 파이썬 객체(`PyObject*`)로 포장 변환해 주는 반환 생성 C-API입니다.
- **`PyErr_SetString(type, msg)`**: C 함수 내부에서 파이썬 예외(예: `PyExc_ValueError`, `PyExc_TypeError`)를 런타임 스택에 띄우고 `NULL`을 리턴하도록 세팅하는 예외 C-API입니다.

---

## 2. 주요 C-API Format Specifier 포맷 문자 정리표

| 포맷 문자 | 파이썬 데이터 타입 | 대응되는 C 데이터 타입 |
| :---: | :--- | :--- |
| **`i`** | 정수형 (`int`) | `int` |
| **`s`** | 문자열 (`str`) | `const char*` (UTF-8 텍스트) |
| **`d`** | 실수형 (`float`) | `double` |
| **`O`** | 임의 파이썬 객체 | `PyObject*` |

---

## 3. C-API 인자 파싱 및 예외 처리 함수 구현 코드

```c
#include <Python.h>

// 파이썬에서 두 숫자를 받아 나누기를 수행하는 C 함수
static PyObject* py_custom_divide(PyObject* self, PyObject* args) {
    double a, b;

    // 1. 파이썬 인자 파싱 ("dd" -> double 2개 요구)
    if (!PyArg_ParseTuple(args, "dd", &a, &b)) {
        return NULL; // 파싱 실패 시 TypeError 예외 자동 발생됨
    }

    // 2. 0으로 나누기 예외 처리 (PyErr_SetString)
    if (b == 0.0) {
        PyErr_SetString(PyExc_ZeroDivisionError, "C-API 경고: 0으로 나눌 수 없습니다.");
        return NULL; // 예외 발생 알림용 NULL 반환
    }

    // 3. 연산 수행 및 파이썬 실수 객체 반환 (Py_BuildValue)
    double result = a / b;
    return Py_BuildValue("d", result);
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. C-API 함수가 에러로 실패했을 때 왜 반드시 `NULL`을 반환해야 하나요?**
A. CPython 인터프리터는 C 확장 함수의 반환값이 `NULL`임을 확인하는 순간 예외 스택(`PyErr_Occurred()`)을 조사하여 파이썬 런타임 영역으로 `Traceback` 예외를 전파시키기 때문입니다.
',
  '<p>C 언어로 파이썬 확장 모듈을 개발할 때 파이썬 인자를 C 데이터 타입으로 변환하는 **<code>PyArg_ParseTuple</code>**과 C 영역에서 파이썬 예외를 발생하는 **<code>PyErr_SetString</code>**을 다룹니다.</p>
<hr>
<h2>1. 인자 파싱 및 예외 처리 용어 사전 (Glossary)</h2>
<ul>
<li><strong><code>PyArg_ParseTuple(args, format, ...)</code></strong>: 파이썬에서 넘어온 위치 인자 튜플(<code>args</code>)을 C 언어 포맷 문자열(<code>&quot;i&quot;</code>, <code>&quot;s&quot;</code>, <code>&quot;d&quot;</code> 등)에 맞춰 C 변수에 저장하는 인자 파서 C-API입니다.</li>
<li><strong><code>Py_BuildValue(format, ...)</code></strong>: C 언어의 기본 데이터 타입들(<code>int</code>, <code>double</code>, <code>char*</code>)을 파이썬 객체(<code>PyObject*</code>)로 포장 변환해 주는 반환 생성 C-API입니다.</li>
<li><strong><code>PyErr_SetString(type, msg)</code></strong>: C 함수 내부에서 파이썬 예외(예: <code>PyExc_ValueError</code>, <code>PyExc_TypeError</code>)를 런타임 스택에 띄우고 <code>NULL</code>을 리턴하도록 세팅하는 예외 C-API입니다.</li>
</ul>
<hr>
<h2>2. 주요 C-API Format Specifier 포맷 문자 정리표</h2>
<table>
<thead>
<tr>
<th align="center">포맷 문자</th>
<th align="left">파이썬 데이터 타입</th>
<th align="left">대응되는 C 데이터 타입</th>
</tr>
</thead>
<tbody><tr>
<td align="center"><strong><code>i</code></strong></td>
<td align="left">정수형 (<code>int</code>)</td>
<td align="left"><code>int</code></td>
</tr>
<tr>
<td align="center"><strong><code>s</code></strong></td>
<td align="left">문자열 (<code>str</code>)</td>
<td align="left"><code>const char*</code> (UTF-8 텍스트)</td>
</tr>
<tr>
<td align="center"><strong><code>d</code></strong></td>
<td align="left">실수형 (<code>float</code>)</td>
<td align="left"><code>double</code></td>
</tr>
<tr>
<td align="center"><strong><code>O</code></strong></td>
<td align="left">임의 파이썬 객체</td>
<td align="left"><code>PyObject*</code></td>
</tr>
</tbody></table>
<hr>
<h2>3. C-API 인자 파싱 및 예외 처리 함수 구현 코드</h2>
<pre><code class="language-c">#include &lt;Python.h&gt;

// 파이썬에서 두 숫자를 받아 나누기를 수행하는 C 함수
static PyObject* py_custom_divide(PyObject* self, PyObject* args) {
    double a, b;

    // 1. 파이썬 인자 파싱 (&quot;dd&quot; -&gt; double 2개 요구)
    if (!PyArg_ParseTuple(args, &quot;dd&quot;, &amp;a, &amp;b)) {
        return NULL; // 파싱 실패 시 TypeError 예외 자동 발생됨
    }

    // 2. 0으로 나누기 예외 처리 (PyErr_SetString)
    if (b == 0.0) {
        PyErr_SetString(PyExc_ZeroDivisionError, &quot;C-API 경고: 0으로 나눌 수 없습니다.&quot;);
        return NULL; // 예외 발생 알림용 NULL 반환
    }

    // 3. 연산 수행 및 파이썬 실수 객체 반환 (Py_BuildValue)
    double result = a / b;
    return Py_BuildValue(&quot;d&quot;, result);
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. C-API 함수가 에러로 실패했을 때 왜 반드시 <code>NULL</code>을 반환해야 하나요?</strong>
A. CPython 인터프리터는 C 확장 함수의 반환값이 <code>NULL</code>임을 확인하는 순간 예외 스택(<code>PyErr_Occurred()</code>)을 조사하여 파이썬 런타임 영역으로 <code>Traceback</code> 예외를 전파시키기 때문입니다.</p>
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
  'CPython C 레벨에서 파이썬 정수, 문자열, 딕셔너리, 리스트 구체적 객체(**Concrete Objects**)를 직접 다루는 **C-API 함수 집합**을 다룹니다.

---

## 1. C 구체적 객체 타입 C-API 용어 사전 (Glossary)

- **PyLong C-API**: 파이썬 정수 객체를 생성(`PyLong_FromLong()`)하거나 C 정수로 변환(`PyLong_AsLong()`)하는 API입니다.
- **PyUnicode C-API**: 유니코드 문자열 객체를 C 문자열로 조작하는 API입니다. (`PyUnicode_FromString()`, `PyUnicode_AsUTF8()`)
- **PyDict C-API**: 파이썬 딕셔너리를 C 레벨에서 빠르게 다루는 API입니다. (`PyDict_New()`, `PyDict_SetItemString()`, `PyDict_GetItemString()`)
- **PyList C-API**: 파이썬 리스트를 C 레벨에서 생성 및 수정하는 API입니다. (`PyList_New()`, `PyList_Append()`, `PyList_Size()`)

---

## 2. C 레벨 파이썬 딕셔너리 구성 예제

```c
#include <Python.h>

PyObject* build_c_python_dictionary(void) {
    // 1. 새 딕셔너리 객체 생성 (PyDict_New)
    PyObject* dict_obj = PyDict_New();

    // 2. C 문자열 Key, 파이썬 객체 Value 삽입
    PyObject* name_val = PyUnicode_FromString("홍길동");
    PyObject* age_val = PyLong_FromLong(30);

    PyDict_SetItemString(dict_obj, "name", name_val);
    PyDict_SetItemString(dict_obj, "age", age_val);

    // 3. 소유권 반납 (PyDict_SetItemString이 내부에서 refcnt를 올림)
    Py_DECREF(name_val);
    Py_DECREF(age_val);

    return dict_obj; // 완성된 딕셔너리 반환
}
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. C-API에서 `PyDict_SetItem()`과 `PyDict_SetItemString()`의 차이는?**
A. `PyDict_SetItem()`은 Key 매개변수로 파이썬 `PyObject*` 객체를 요구하며, `PyDict_SetItemString()`은 편의성을 위해 일반 C 문자열(`const char*`)을 직접 Key로 넘길 수 있습니다.
',
  '<p>CPython C 레벨에서 파이썬 정수, 문자열, 딕셔너리, 리스트 구체적 객체(<strong>Concrete Objects</strong>)를 직접 다루는 <strong>C-API 함수 집합</strong>을 다룹니다.</p>
<hr>
<h2>1. C 구체적 객체 타입 C-API 용어 사전 (Glossary)</h2>
<ul>
<li><strong>PyLong C-API</strong>: 파이썬 정수 객체를 생성(<code>PyLong_FromLong()</code>)하거나 C 정수로 변환(<code>PyLong_AsLong()</code>)하는 API입니다.</li>
<li><strong>PyUnicode C-API</strong>: 유니코드 문자열 객체를 C 문자열로 조작하는 API입니다. (<code>PyUnicode_FromString()</code>, <code>PyUnicode_AsUTF8()</code>)</li>
<li><strong>PyDict C-API</strong>: 파이썬 딕셔너리를 C 레벨에서 빠르게 다루는 API입니다. (<code>PyDict_New()</code>, <code>PyDict_SetItemString()</code>, <code>PyDict_GetItemString()</code>)</li>
<li><strong>PyList C-API</strong>: 파이썬 리스트를 C 레벨에서 생성 및 수정하는 API입니다. (<code>PyList_New()</code>, <code>PyList_Append()</code>, <code>PyList_Size()</code>)</li>
</ul>
<hr>
<h2>2. C 레벨 파이썬 딕셔너리 구성 예제</h2>
<pre><code class="language-c">#include &lt;Python.h&gt;

PyObject* build_c_python_dictionary(void) {
    // 1. 새 딕셔너리 객체 생성 (PyDict_New)
    PyObject* dict_obj = PyDict_New();

    // 2. C 문자열 Key, 파이썬 객체 Value 삽입
    PyObject* name_val = PyUnicode_FromString(&quot;홍길동&quot;);
    PyObject* age_val = PyLong_FromLong(30);

    PyDict_SetItemString(dict_obj, &quot;name&quot;, name_val);
    PyDict_SetItemString(dict_obj, &quot;age&quot;, age_val);

    // 3. 소유권 반납 (PyDict_SetItemString이 내부에서 refcnt를 올림)
    Py_DECREF(name_val);
    Py_DECREF(age_val);

    return dict_obj; // 완성된 딕셔너리 반환
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. C-API에서 <code>PyDict_SetItem()</code>과 <code>PyDict_SetItemString()</code>의 차이는?</strong>
A. <code>PyDict_SetItem()</code>은 Key 매개변수로 파이썬 <code>PyObject*</code> 객체를 요구하며, <code>PyDict_SetItemString()</code>은 편의성을 위해 일반 C 문자열(<code>const char*</code>)을 직접 Key로 넘길 수 있습니다.</p>
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
  'C 언어로 작성된 연산 코드를 파이썬에서 **`import` 모듈 형태로 불러와 고속 구동하는 C 확장 모듈(C Extension Module)** 제작 및 GIL 제어를 다룹니다.

---

## 1. C 확장 모듈 핵심 용어 사전 (Glossary)

- **`PyMethodDef`**: C 확장 모듈이 파이썬에 제공하는 메소드 이름, C 함수 포인터, 인자 전달 플래그(`METH_VARARGS`), Docstring을 정의하는 메타 테이블 배열입니다.
- **`PyModuleDef`**: C 확장 모듈의 전체 이름, 설명문, 모듈 크기, 메소드 테이블을 포함하는 모듈 정의 구조체입니다.
- **`PyMODINIT_FUNC`**: 파이썬이 모듈을 `import mymodule` 할 때 최초 호출되는 C 모듈 초기화 에폭 엔트리 함수 키워드입니다.
- **`Py_BEGIN_ALLOW_THREADS` / `Py_END_ALLOW_THREADS`**: 연산량이 많은 C 영역 코드 실행 동안 CPython의 GIL(Global Interpreter Lock)을 해제하여 다른 파이썬 스레드가 병렬 구동되도록 돕는 C-API 마크로입니다.

---

## 2. 완성된 C 확장 모듈 전체 C 소스 코드 (mymath.c)

```c
#include <Python.h>

// 1. C 구현 함수 (두 수의 곱셈)
static PyObject* mymath_multiply(PyObject* self, PyObject* args) {
    long a, b;
    if (!PyArg_ParseTuple(args, "ll", &a, &b)) {
        return NULL;
    }
    
    // 복잡 수치 연산 시 GIL 해제 가동
    Py_BEGIN_ALLOW_THREADS
    long result = a * b; // C 레벨 고속 연산
    Py_END_ALLOW_THREADS

    return PyLong_FromLong(result);
}

// 2. 메소드 테이블 정의 (PyMethodDef)
static PyMethodDef MyMathMethods[] = {
    {"multiply", mymath_multiply, METH_VARARGS, "C 언어로 연산하는 고속 곱셈 함수"},
    {NULL, NULL, 0, NULL} // 테이블 끝 알림
};

// 3. 모듈 정의 구조체 (PyModuleDef)
static struct PyModuleDef mymathmodule = {
    PyModuleDef_HEAD_INIT,
    "mymath", // 모듈 import 이름
    "CPython C-API 기반 고속 연산 모듈", // 모듈 설명
    -1,
    MyMathMethods
};

// 4. 모듈 초기화 엔트리 함수 (PyMODINIT_FUNC)
PyMODINIT_FUNC PyInit_mymath(void) {
    return PyModule_Create(&mymathmodule);
}
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 이 C 파일(`mymath.c`)을 빌드하여 파이썬에서 `import mymath` 하려면 어떻게 하나요?**
A. `setuptools`를 이용한 `setup.py` 파일에 `Extension(''mymath'', sources=[''mymath.c''])`을 작성한 후 `python setup.py build_ext --inplace` 명령을 실행하면 현재 폴더에 파이썬용 공유 라이브러리가 빌드되어 즉시 `import` 가능해집니다.
',
  '<p>C 언어로 작성된 연산 코드를 파이썬에서 <strong><code>import</code> 모듈 형태로 불러와 고속 구동하는 C 확장 모듈(C Extension Module)</strong> 제작 및 GIL 제어를 다룹니다.</p>
<hr>
<h2>1. C 확장 모듈 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong><code>PyMethodDef</code></strong>: C 확장 모듈이 파이썬에 제공하는 메소드 이름, C 함수 포인터, 인자 전달 플래그(<code>METH_VARARGS</code>), Docstring을 정의하는 메타 테이블 배열입니다.</li>
<li><strong><code>PyModuleDef</code></strong>: C 확장 모듈의 전체 이름, 설명문, 모듈 크기, 메소드 테이블을 포함하는 모듈 정의 구조체입니다.</li>
<li><strong><code>PyMODINIT_FUNC</code></strong>: 파이썬이 모듈을 <code>import mymodule</code> 할 때 최초 호출되는 C 모듈 초기화 에폭 엔트리 함수 키워드입니다.</li>
<li><strong><code>Py_BEGIN_ALLOW_THREADS</code> / <code>Py_END_ALLOW_THREADS</code></strong>: 연산량이 많은 C 영역 코드 실행 동안 CPython의 GIL(Global Interpreter Lock)을 해제하여 다른 파이썬 스레드가 병렬 구동되도록 돕는 C-API 마크로입니다.</li>
</ul>
<hr>
<h2>2. 완성된 C 확장 모듈 전체 C 소스 코드 (mymath.c)</h2>
<pre><code class="language-c">#include &lt;Python.h&gt;

// 1. C 구현 함수 (두 수의 곱셈)
static PyObject* mymath_multiply(PyObject* self, PyObject* args) {
    long a, b;
    if (!PyArg_ParseTuple(args, &quot;ll&quot;, &amp;a, &amp;b)) {
        return NULL;
    }
    
    // 복잡 수치 연산 시 GIL 해제 가동
    Py_BEGIN_ALLOW_THREADS
    long result = a * b; // C 레벨 고속 연산
    Py_END_ALLOW_THREADS

    return PyLong_FromLong(result);
}

// 2. 메소드 테이블 정의 (PyMethodDef)
static PyMethodDef MyMathMethods[] = {
    {&quot;multiply&quot;, mymath_multiply, METH_VARARGS, &quot;C 언어로 연산하는 고속 곱셈 함수&quot;},
    {NULL, NULL, 0, NULL} // 테이블 끝 알림
};

// 3. 모듈 정의 구조체 (PyModuleDef)
static struct PyModuleDef mymathmodule = {
    PyModuleDef_HEAD_INIT,
    &quot;mymath&quot;, // 모듈 import 이름
    &quot;CPython C-API 기반 고속 연산 모듈&quot;, // 모듈 설명
    -1,
    MyMathMethods
};

// 4. 모듈 초기화 엔트리 함수 (PyMODINIT_FUNC)
PyMODINIT_FUNC PyInit_mymath(void) {
    return PyModule_Create(&amp;mymathmodule);
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 이 C 파일(<code>mymath.c</code>)을 빌드하여 파이썬에서 <code>import mymath</code> 하려면 어떻게 하나요?</strong>
A. <code>setuptools</code>를 이용한 <code>setup.py</code> 파일에 <code>Extension(&#39;mymath&#39;, sources=[&#39;mymath.c&#39;])</code>을 작성한 후 <code>python setup.py build_ext --inplace</code> 명령을 실행하면 현재 폴더에 파이썬용 공유 라이브러리가 빌드되어 즉시 <code>import</code> 가능해집니다.</p>
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
