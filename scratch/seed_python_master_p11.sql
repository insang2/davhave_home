-- Full Python Master Lessons Part 11

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch41-python-idle-editors-pycharm-vscode-wing',
  '다양한 파이썬 IDLE 개발 환경 설치와 사용법 가이드: PyCharm, VS Code, Wing IDE',
  '파이썬 개발 생산성을 극대화하는 파이참(PyCharm), VS Code, Wing 101 3대 IDE/에디터의 상세 설치 절차와 파이썬 인터프리터 연결 및 프로그램 실행법을 학습합니다.',
  '파이썬 프로그래밍 효율을 획기적으로 높여주는 대표적인 파이썬 통합 개발 환경(IDE/IDLE)인 **파이참(PyCharm)**, **비주얼 스튜디오 코드(VS Code)**, **윙 IDE(Wing 101)**의 설치 및 인터프리터 바인딩 가이드를 다룹니다.

---

## 1. 파이썬 IDE 개발 환경 용어 사전 (Glossary)

- **IDE (Integrated Development Environment)**: 소스 코드 에디터, 파이썬 인터프리터 연동, 디버거, 터미널이 하나로 통합된 개발 소프트웨어입니다.
- **PyCharm (파이참)**: JetBrains 사에서 만든 최고 수준의 파이썬 전용 IDE로, 무료 버전인 **Community 에디션**과 유료인 Professional 에디션이 제공됩니다.
- **VS Code (Visual Studio Code)**: Microsoft 사에서 만든 경량 고성능 오픈소스 에디터로, 확장 기능(**Extension**)을 통해 파이썬 개발 환경을 구축합니다.
- **Wing IDE (Wing 101)**: 크기가 매우 가볍고 직관적이어서 초보자 및 이공계 수강생 실습 교육용에 최적화된 IDE입니다.

---

## 2. 파이참 (PyCharm Community) 설치 및 사용 가이드

1. JetBrains 공식 사이트에서 Community 에디션을 내려받아 설치합니다.
2. [New Project]를 생성하고 [New environment]에서 PC에 설치된 파이썬 인터프리터(`python.exe`)를 지정합니다.
3. 파이썬 파일(`helloworld.py`) 생성 후 `Run` (`Alt + Shift + F10`)으로 실행합니다.

---

## 3. 비주얼 스튜디오 코드 (VS Code) 파이썬 설정

1. VS Code 설치 후 확장 마켓플레이스에서 **Python Extension**을 설치합니다.
2. `Ctrl + Shift + P` $ightarrow$ `Python: Select Interpreter`로 추천 파이썬 엔진을 선택합니다.
3. `helloworld.py` 작성 후 `Ctrl + F5` 또는 ▶ 버튼으로 실행합니다.
',
  '<p>파이썬 프로그래밍 효율을 획기적으로 높여주는 대표적인 파이썬 통합 개발 환경(IDE/IDLE)인 <strong>파이참(PyCharm)</strong>, <strong>비주얼 스튜디오 코드(VS Code)</strong>, **윙 IDE(Wing 101)**의 설치 및 인터프리터 바인딩 가이드를 다룹니다.</p>
<hr>
<h2>1. 파이썬 IDE 개발 환경 용어 사전 (Glossary)</h2>
<ul>
<li><strong>IDE (Integrated Development Environment)</strong>: 소스 코드 에디터, 파이썬 인터프리터 연동, 디버거, 터미널이 하나로 통합된 개발 소프트웨어입니다.</li>
<li><strong>PyCharm (파이참)</strong>: JetBrains 사에서 만든 최고 수준의 파이썬 전용 IDE로, 무료 버전인 <strong>Community 에디션</strong>과 유료인 Professional 에디션이 제공됩니다.</li>
<li><strong>VS Code (Visual Studio Code)</strong>: Microsoft 사에서 만든 경량 고성능 오픈소스 에디터로, 확장 기능(<strong>Extension</strong>)을 통해 파이썬 개발 환경을 구축합니다.</li>
<li><strong>Wing IDE (Wing 101)</strong>: 크기가 매우 가볍고 직관적이어서 초보자 및 이공계 수강생 실습 교육용에 최적화된 IDE입니다.</li>
</ul>
<hr>
<h2>2. 파이참 (PyCharm Community) 설치 및 사용 가이드</h2>
<ol>
<li>JetBrains 공식 사이트에서 Community 에디션을 내려받아 설치합니다.</li>
<li>[New Project]를 생성하고 [New environment]에서 PC에 설치된 파이썬 인터프리터(<code>python.exe</code>)를 지정합니다.</li>
<li>파이썬 파일(<code>helloworld.py</code>) 생성 후 <code>Run</code> (<code>Alt + Shift + F10</code>)으로 실행합니다.</li>
</ol>
<hr>
<h2>3. 비주얼 스튜디오 코드 (VS Code) 파이썬 설정</h2>
<ol>
<li>VS Code 설치 후 확장 마켓플레이스에서 <strong>Python Extension</strong>을 설치합니다.</li>
<li><code>Ctrl + Shift + P</code> $
ightarrow$ <code>Python: Select Interpreter</code>로 추천 파이썬 엔진을 선택합니다.</li>
<li><code>helloworld.py</code> 작성 후 <code>Ctrl + F5</code> 또는 ▶ 버튼으로 실행합니다.</li>
</ol>
',
  'published',
  '파이썬 IDE 설치 가이드 - PyCharm Community, VS Code Python Extension & Wing 101',
  '이공계생 및 입문자를 위한 파이썬 통합 개발 환경(IDE) 3종 PyCharm(파이참), 비주얼 스튜디오 코드(VS Code), 윙 IDE(Wing 101)의 다운로드, 설치, 인터프리터 바인딩 및 실행법을 완벽 해설합니다.',
  41,
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
  'ch42-python-practical-lists-matrices-and-aliasing',
  '파이썬 실전 리스트 다루기: 슬라이싱, 2D/3D 다차원 테이블 및 얕은/깊은 복사(Alias vs Copy)',
  '파이썬 리스트의 고차 슬라이싱, 2D/3D 다차원 매트릭스 테이블 동적 생성 및 객체 메모리 별명(Alias) 참조와 깊은 복사(deepcopy)의 동작 원리를 다룹니다.',
  '파이썬 리스트의 고급 슬라이싱 연산과 **N차원 다차원 테이블 생성**, 그리고 객체 참조 시 발생하는 **별명(Alias)** 참조와 **깊은 복사(Deep Copy)**를 다룹니다.

---

## 1. 리스트 및 매트릭스 핵심 용어 사전 (Glossary)

- **Aliasing (별명 참조)**: `b = a` 처럼 기존 리스트 객체의 메모리 주소를 그대로 가리켜, 한쪽을 수정하면 다른 쪽도 동시 수정되는 현상입니다.
- **Shallow Copy (얕은 복사)**: `c = a[:]` 또는 `a.copy()` 처럼 최상위 리스트 객체만 새로 복사하고 내부 요소 포인터는 공유하는 방식입니다.
- **Deep Copy (깊은 복사)**: `import copy; c = copy.deepcopy(a)` 로 중첩된 N차원 리스트 내부의 모든 요소까지 완전히 새로운 독립 객체로 재귀 복사하는 기술입니다.

---

## 2. 실전 코드: 리스트 정렬, 컴프리헨션 및 2D/3D 매트릭스 생성

```python
import copy

# 1. 리스트 메소드 (sort, insert, count) 및 컴프리헨션
L = [2, 3, 1, 5, 4, 5]
L.sort() # 제자리 정렬
L.insert(0, 99) # 0번 인덱스에 99 삽입
print(f"정렬 및 삽입 결과: {L} (값 5의 개수: {L.count(5)})")

# 2. 2D 다차원 테이블 생성 (Height 2, Width 3)
height, width = 2, 3
table_2d = [[None] * width for i in range(height)]
table_2d[0][1] = "Data_0_1"
print("=== [2D 매트릭스] ===")
print(table_2d)

# 3. Aliasing (별명 지정) vs Deepcopy
orig = [[1, 2], [3, 4]]
alias = orig               # Alias (동일 메모리 참조)
shallow = orig[:]          # Shallow Copy
deep = copy.deepcopy(orig) # Deep Copy

orig[0][0] = 999
print(f"원본 수정 후 -> Alias: {alias[0][0]}, Shallow: {shallow[0][0]}, Deep: {deep[0][0]}")
```
',
  '<p>파이썬 리스트의 고급 슬라이싱 연산과 <strong>N차원 다차원 테이블 생성</strong>, 그리고 객체 참조 시 발생하는 <strong>별명(Alias)</strong> 참조와 **깊은 복사(Deep Copy)**를 다룹니다.</p>
<hr>
<h2>1. 리스트 및 매트릭스 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Aliasing (별명 참조)</strong>: <code>b = a</code> 처럼 기존 리스트 객체의 메모리 주소를 그대로 가리켜, 한쪽을 수정하면 다른 쪽도 동시 수정되는 현상입니다.</li>
<li><strong>Shallow Copy (얕은 복사)</strong>: <code>c = a[:]</code> 또는 <code>a.copy()</code> 처럼 최상위 리스트 객체만 새로 복사하고 내부 요소 포인터는 공유하는 방식입니다.</li>
<li><strong>Deep Copy (깊은 복사)</strong>: <code>import copy; c = copy.deepcopy(a)</code> 로 중첩된 N차원 리스트 내부의 모든 요소까지 완전히 새로운 독립 객체로 재귀 복사하는 기술입니다.</li>
</ul>
<hr>
<h2>2. 실전 코드: 리스트 정렬, 컴프리헨션 및 2D/3D 매트릭스 생성</h2>
<pre><code class="language-python">import copy

# 1. 리스트 메소드 (sort, insert, count) 및 컴프리헨션
L = [2, 3, 1, 5, 4, 5]
L.sort() # 제자리 정렬
L.insert(0, 99) # 0번 인덱스에 99 삽입
print(f&quot;정렬 및 삽입 결과: {L} (값 5의 개수: {L.count(5)})&quot;)

# 2. 2D 다차원 테이블 생성 (Height 2, Width 3)
height, width = 2, 3
table_2d = [[None] * width for i in range(height)]
table_2d[0][1] = &quot;Data_0_1&quot;
print(&quot;=== [2D 매트릭스] ===&quot;)
print(table_2d)

# 3. Aliasing (별명 지정) vs Deepcopy
orig = [[1, 2], [3, 4]]
alias = orig               # Alias (동일 메모리 참조)
shallow = orig[:]          # Shallow Copy
deep = copy.deepcopy(orig) # Deep Copy

orig[0][0] = 999
print(f&quot;원본 수정 후 -&gt; Alias: {alias[0][0]}, Shallow: {shallow[0][0]}, Deep: {deep[0][0]}&quot;)
</code></pre>
',
  'published',
  '파이썬 실전 리스트 - 슬라이싱, sort, 2D 테이블 생성, Alias vs deepcopy',
  '리스트 슬라이싱(L[1:4]), sort(), insert(), count(), List Comprehension, N차원 테이블 생성([[None]*w for i in range(h)]), 별명 지정(Alias)과 copy.deepcopy()의 차이를 배웁니다.',
  42,
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
  'ch43-python-practical-string-processing-and-file-analysis',
  '파이썬 실전 문자열 조작 및 텍스트 파일 분석 알고리즘',
  '파이썬의 불변 문자열(String) 조작 테크닉, 파일 입출력을 활용한 단어 분석 알고리즘(maxWord, onlyLowerAlpha)을 학습합니다.',
  '파이썬의 **문자열(String)** 처리 메소드들과 디스크 상의 텍스트 파일 데이터를 읽어 들여 텍스트를 분석하는 **실전 단어 분석 알고리즘**을 학습합니다.

---

## 1. 텍스트 분석 핵심 용어 사전 (Glossary)

- **String Slicing**: `s[1:4]`, `s[::-1]` 처럼 문자열의 지정된 인덱스 범위를 추출하거나 뒤집는 연산입니다.
- **`str.isalpha()`**: 읽어 들인 문자가 순수 알파벳 문자인지 검사하여 불리언(`True/False`)을 반환하는 메커니즘입니다.

---

## 2. 실전 코드: 파일 단어 분석 알고리즘 (maxWord & onlyLowerAlpha)

```python
s = "Computer"
reversed_s = ""
for i in range(len(s)):
    reversed_s += s[len(s) - 1 - i]
print(f"원문: {s} -> 뒤집은 문자열: {reversed_s}")

def onlyLowerAlpha(text):
    clean_word = ""
    for char in text:
        if char.isalpha():
            clean_word += char.lower()
    return clean_word

def maxWordFromContent(content):
    words = content.split()
    maxword = ""
    maxlen = 0
    for word in words:
        cleaned = onlyLowerAlpha(word)
        if len(cleaned) > maxlen:
            maxlen = len(cleaned)
            maxword = cleaned
    return maxword, maxlen

sample_text = "Love is real, real is love. Learning Python programming is fantastic!"
best_word, length = maxWordFromContent(sample_text)
print(f"가장 긴 단어: ''{best_word}'' (길이: {length})")
```
',
  '<p>파이썬의 <strong>문자열(String)</strong> 처리 메소드들과 디스크 상의 텍스트 파일 데이터를 읽어 들여 텍스트를 분석하는 <strong>실전 단어 분석 알고리즘</strong>을 학습합니다.</p>
<hr>
<h2>1. 텍스트 분석 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>String Slicing</strong>: <code>s[1:4]</code>, <code>s[::-1]</code> 처럼 문자열의 지정된 인덱스 범위를 추출하거나 뒤집는 연산입니다.</li>
<li><strong><code>str.isalpha()</code></strong>: 읽어 들인 문자가 순수 알파벳 문자인지 검사하여 불리언(<code>True/False</code>)을 반환하는 메커니즘입니다.</li>
</ul>
<hr>
<h2>2. 실전 코드: 파일 단어 분석 알고리즘 (maxWord &amp; onlyLowerAlpha)</h2>
<pre><code class="language-python">s = &quot;Computer&quot;
reversed_s = &quot;&quot;
for i in range(len(s)):
    reversed_s += s[len(s) - 1 - i]
print(f&quot;원문: {s} -&gt; 뒤집은 문자열: {reversed_s}&quot;)

def onlyLowerAlpha(text):
    clean_word = &quot;&quot;
    for char in text:
        if char.isalpha():
            clean_word += char.lower()
    return clean_word

def maxWordFromContent(content):
    words = content.split()
    maxword = &quot;&quot;
    maxlen = 0
    for word in words:
        cleaned = onlyLowerAlpha(word)
        if len(cleaned) &gt; maxlen:
            maxlen = len(cleaned)
            maxword = cleaned
    return maxword, maxlen

sample_text = &quot;Love is real, real is love. Learning Python programming is fantastic!&quot;
best_word, length = maxWordFromContent(sample_text)
print(f&quot;가장 긴 단어: &#39;{best_word}&#39; (길이: {length})&quot;)
</code></pre>
',
  'published',
  '파이썬 문자열 및 파일 분석 - String Slicing, 문자열 뒤집기, maxWord 알고리즘',
  '문자열 인덱싱, 슬라이싱, in 검색, 문자열 뒤집기(Reverse String), 텍스트 파일 읽기(open/read/split), maxWord(가장 긴 단어 추출) 및 onlyLowerAlpha(알파벳 검사) 알고리즘을 배웁니다.',
  43,
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
  'ch44-python-practical-tuples-dictionaries-and-sets',
  '파이썬 고급 컬렉션 심화: 튜플 언팩킹, 딕셔너리 중첩 및 집합 연산',
  '튜플(Tuple), 딕셔너리(Dictionary), 집합(Set)의 실전 데이터 구조 조합과 중첩 딕셔너리 조회 및 Set 집합 연산을 심도 있게 다룹니다.',
  '수정이 불가능한 **튜플(Tuple)**, 키-값 쌍의 **딕셔너리(Dictionary)**, 중복을 허용하지 않는 **집합(Set)**의 고급 조합 연산을 학습합니다.

---

## 1. 고급 컬렉션 용어 사전 (Glossary)

- **Tuple Unpacking**: `(x, y, z) = (1, 2, 3)` 처럼 튜플의 구성 요소를 개별 변수에 한 번에 할당 해제하는 기술입니다.
- **Nested Dictionary**: `d = {"xy": {4: 2.5, "a": 3}}` 처럼 딕셔너리 내부의 Value로 또 다른 딕셔너리나 리스트가 중첩된 데이터 구조입니다.

---

## 2. 튜플 언팩킹, 중첩 딕셔너리 & Set 연산 예제

```python
tuple_list = [(1, 2, "Python"), (3, 4, "Java"), (5, 6, "C++")]
for (x, y, lang) in tuple_list:
    print(f"좌표 ({x}, {y}) -> 언어: {lang}")

tup_data = (6, 1, 4, 3)
temp_list = list(tup_data)
temp_list.sort()
sorted_tup = tuple(temp_list)
print(f"원본 튜플: {tup_data} -> 정렬된 튜플: {sorted_tup}")

raw_numbers = [1, 2, 3, 4, 1, 2, 3, 5]
unique_set = set(raw_numbers)
print(f"중복 제거 후: {unique_set}")
```
',
  '<p>수정이 불가능한 <strong>튜플(Tuple)</strong>, 키-값 쌍의 <strong>딕셔너리(Dictionary)</strong>, 중복을 허용하지 않는 **집합(Set)**의 고급 조합 연산을 학습합니다.</p>
<hr>
<h2>1. 고급 컬렉션 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Tuple Unpacking</strong>: <code>(x, y, z) = (1, 2, 3)</code> 처럼 튜플의 구성 요소를 개별 변수에 한 번에 할당 해제하는 기술입니다.</li>
<li><strong>Nested Dictionary</strong>: <code>d = {&quot;xy&quot;: {4: 2.5, &quot;a&quot;: 3}}</code> 처럼 딕셔너리 내부의 Value로 또 다른 딕셔너리나 리스트가 중첩된 데이터 구조입니다.</li>
</ul>
<hr>
<h2>2. 튜플 언팩킹, 중첩 딕셔너리 &amp; Set 연산 예제</h2>
<pre><code class="language-python">tuple_list = [(1, 2, &quot;Python&quot;), (3, 4, &quot;Java&quot;), (5, 6, &quot;C++&quot;)]
for (x, y, lang) in tuple_list:
    print(f&quot;좌표 ({x}, {y}) -&gt; 언어: {lang}&quot;)

tup_data = (6, 1, 4, 3)
temp_list = list(tup_data)
temp_list.sort()
sorted_tup = tuple(temp_list)
print(f&quot;원본 튜플: {tup_data} -&gt; 정렬된 튜플: {sorted_tup}&quot;)

raw_numbers = [1, 2, 3, 4, 1, 2, 3, 5]
unique_set = set(raw_numbers)
print(f&quot;중복 제거 후: {unique_set}&quot;)
</code></pre>
',
  'published',
  '파이썬 컬렉션 심화 - 튜플 Unpacking, list(tuple).sort(), 중첩 Dict & Set 집합',
  '튜플 언팩킹(for (x,y,z) in a), 튜플 정렬(list(tuple).sort()), 중첩 딕셔너리 구조, items()/keys()/values() 순회, Set 교집합/합집합 및 중복 제거 알고리즘을 배웁니다.',
  44,
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
