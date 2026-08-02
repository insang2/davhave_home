-- Seed Data Structure Lessons in D1 DB

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'data-structure',
  'ch01-data-structures-and-python-basics',
  '자료구조 개요와 파이썬 프로그래밍 기초',
  '자료구조(Data Structure)의 필요성과 추상 자료형(ADT), 파이썬의 클래스 및 객체 모델, 리스트 연산의 성능 분석과 함수형 연산(filter, map) 기초를 다룹니다.',
  '**자료구조(Data Structure)**란 대용량의 데이터를 효율적으로 저장, 조직, 관리하기 위한 컴퓨터 과학의 핵심 기법입니다. 적절한 자료구조 선택은 알고리즘의 실행 속도와 메모리 사용량을 획기적으로 개선합니다.

---

## 1. 추상 자료형 (ADT, Abstract Data Type)

추상 자료형(ADT)은 자료구조의 **구현 세부사항을 숨기고, 어떠한 데이터와 연산을 제공하는지 명세(Specification)**만 정의한 수학적 모델입니다.

- **데이터 명세**: 자료구조가 다루는 대상 데이터 집합.
- **연산 명세**: 데이터에 대해 수행할 수 있는 동작(입력, 반환값, 효과).
- **캡슐화 및 정보 은닉**: 사용자는 ADT 인터페이스만 이용하며, 내부 구현(배열, 연결 리스트 등)이 변경되어도 외부 코드에 영향을 주지 않습니다.

---

## 2. 파이썬 클래스와 객체지향 자료구조 설계

파이썬은 모든 것이 객체(Object)인 다중 패러다임 언어입니다. `class` 키워드를 통해 수식어와 연산을 묶는 사용자 정의 자료구조를 만들 수 있습니다.

```python
class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id

    def get_info(self):
        return f"[{self.student_id}] {self.name}"

# 객체 생성 및 활용
s = Student("이인상", 20260001)
print(s.get_info())
```

---

## 3. 파이썬 리스트의 연산과 시간 복잡도

파이썬의 `list`는 **동적 배열(Dynamic Array)**로 구현되어 있어, 인덱스 접근은 매우 빠르지만 요소 삽입/삭제 위치에 따라 시간 복잡도가 크게 달라집니다.

| 연산 | 파이썬 코드 | 시간 복잡도 | 설명 |
| :--- | :--- | :--- | :--- |
| **인덱싱 / 슬라이싱** | `arr[i]` | $O(1)$ | 메모리 주소 즉시 계산 |
| **맨 뒤 추가** | `arr.append(x)` | $O(1)$ (Amortized) | 여유 공간 있을 때 오버헤드 없음 |
| **맨 뒤 삭제** | `arr.pop()` | $O(1)$ | 맨 끝 요소 제거 |
| **중간/맨 앞 삽입** | `arr.insert(0, x)` | $O(N)$ | 뒤쪽의 모든 원소를 1칸씩 이동(Shift) |
| **중간/맨 앞 삭제** | `arr.pop(0)` | $O(N)$ | 앞쪽 원소 제거 후 전체 Shift |

---

## 4. 파이썬 고차 함수 (Filter, Map, Lambda)

자료구조 내의 데이터를 일괄 가공하거나 조건 탐색 시, 함수형 프로그래밍 스타일 기법을 적용할 수 있습니다.

```python
# 짝수 제곱 구하기 예시
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# filter: 짝수만 추출
evens = list(filter(lambda x: x % 2 == 0, numbers))

# map: 각 요소를 제곱
squared_evens = list(map(lambda x: x ** 2, evens))

print(squared_evens)  # [4, 16, 36, 64, 100]
```

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 파이썬 리스트의 append() 연산이 분할 상쇄 $O(1)$ (Amortized O(1))인 이유는 무엇인가요?**
A. 리스트 용량이 꽉 차면 기존 용량의 약 1.125배~1.5배로 더 큰 새 메모리를 할당받아 기존 원소를 복사합니다. 이 재할당 $O(N)$ 연산은 가끔 일어나므로, N번의 append 연산 전체 비용을 평균 내면 1회당 $O(1)$이 됩니다.
',
  '<p>**자료구조(Data Structure)**란 대용량의 데이터를 효율적으로 저장, 조직, 관리하기 위한 컴퓨터 과학의 핵심 기법입니다. 적절한 자료구조 선택은 알고리즘의 실행 속도와 메모리 사용량을 획기적으로 개선합니다.</p>
<hr>
<h2>1. 추상 자료형 (ADT, Abstract Data Type)</h2>
<p>추상 자료형(ADT)은 자료구조의 **구현 세부사항을 숨기고, 어떠한 데이터와 연산을 제공하는지 명세(Specification)**만 정의한 수학적 모델입니다.</p>
<ul>
<li><strong>데이터 명세</strong>: 자료구조가 다루는 대상 데이터 집합.</li>
<li><strong>연산 명세</strong>: 데이터에 대해 수행할 수 있는 동작(입력, 반환값, 효과).</li>
<li><strong>캡슐화 및 정보 은닉</strong>: 사용자는 ADT 인터페이스만 이용하며, 내부 구현(배열, 연결 리스트 등)이 변경되어도 외부 코드에 영향을 주지 않습니다.</li>
</ul>
<hr>
<h2>2. 파이썬 클래스와 객체지향 자료구조 설계</h2>
<p>파이썬은 모든 것이 객체(Object)인 다중 패러다임 언어입니다. <code>class</code> 키워드를 통해 수식어와 연산을 묶는 사용자 정의 자료구조를 만들 수 있습니다.</p>
<pre><code class="language-python">class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id

    def get_info(self):
        return f&quot;[{self.student_id}] {self.name}&quot;

# 객체 생성 및 활용
s = Student(&quot;이인상&quot;, 20260001)
print(s.get_info())
</code></pre>
<hr>
<h2>3. 파이썬 리스트의 연산과 시간 복잡도</h2>
<p>파이썬의 <code>list</code>는 **동적 배열(Dynamic Array)**로 구현되어 있어, 인덱스 접근은 매우 빠르지만 요소 삽입/삭제 위치에 따라 시간 복잡도가 크게 달라집니다.</p>
<table>
<thead>
<tr>
<th align="left">연산</th>
<th align="left">파이썬 코드</th>
<th align="left">시간 복잡도</th>
<th align="left">설명</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>인덱싱 / 슬라이싱</strong></td>
<td align="left"><code>arr[i]</code></td>
<td align="left">$O(1)$</td>
<td align="left">메모리 주소 즉시 계산</td>
</tr>
<tr>
<td align="left"><strong>맨 뒤 추가</strong></td>
<td align="left"><code>arr.append(x)</code></td>
<td align="left">$O(1)$ (Amortized)</td>
<td align="left">여유 공간 있을 때 오버헤드 없음</td>
</tr>
<tr>
<td align="left"><strong>맨 뒤 삭제</strong></td>
<td align="left"><code>arr.pop()</code></td>
<td align="left">$O(1)$</td>
<td align="left">맨 끝 요소 제거</td>
</tr>
<tr>
<td align="left"><strong>중간/맨 앞 삽입</strong></td>
<td align="left"><code>arr.insert(0, x)</code></td>
<td align="left">$O(N)$</td>
<td align="left">뒤쪽의 모든 원소를 1칸씩 이동(Shift)</td>
</tr>
<tr>
<td align="left"><strong>중간/맨 앞 삭제</strong></td>
<td align="left"><code>arr.pop(0)</code></td>
<td align="left">$O(N)$</td>
<td align="left">앞쪽 원소 제거 후 전체 Shift</td>
</tr>
</tbody></table>
<hr>
<h2>4. 파이썬 고차 함수 (Filter, Map, Lambda)</h2>
<p>자료구조 내의 데이터를 일괄 가공하거나 조건 탐색 시, 함수형 프로그래밍 스타일 기법을 적용할 수 있습니다.</p>
<pre><code class="language-python"># 짝수 제곱 구하기 예시
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# filter: 짝수만 추출
evens = list(filter(lambda x: x % 2 == 0, numbers))

# map: 각 요소를 제곱
squared_evens = list(map(lambda x: x ** 2, evens))

print(squared_evens)  # [4, 16, 36, 64, 100]
</code></pre>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬 리스트의 append() 연산이 분할 상쇄 $O(1)$ (Amortized O(1))인 이유는 무엇인가요?</strong>
A. 리스트 용량이 꽉 차면 기존 용량의 약 1.125배~1.5배로 더 큰 새 메모리를 할당받아 기존 원소를 복사합니다. 이 재할당 $O(N)$ 연산은 가끔 일어나므로, N번의 append 연산 전체 비용을 평균 내면 1회당 $O(1)$이 됩니다.</p>
',
  'published',
  '자료구조 개요 및 파이썬 기초 - ADT, 객체지향, 시간복잡도 분석',
  '자료구조의 개념(추상 자료형 ADT), 파이썬 클래스 기반 객체지향 설계, 리스트 연산과 시간복잡도, 고차함수(filter, map, lambda) 연산을 상세히 설명합니다.',
  1,
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
  'data-structure',
  'ch02-linear-linked-lists',
  '선형 자료구조 - 단일·이중·원형 연결 리스트의 구조와 파이썬 구현',
  '메모리의 비연속적 공간을 포인터로 엮어 관리하는 연결 리스트(Linked List)의 3가지 유형(단일, 이중, 원형)과 완벽한 파이썬 연산 코드를 배웁니다.',
  '**연결 리스트(Linked List)**는 데이터 필드와 포인터(Link) 필드를 가진 **노드(Node)**들이 동적으로 연결된 선형 자료구조입니다.

---

## 1. 단일 연결 리스트 (Singly Linked List)

각 노드가 다음 노드(`next`)의 참조 주소만을 가지는 형태입니다.

```python
class SList:
    class Node:
        def __init__(self, item, link):
            self.item = item
            self.next = link

    def __init__(self):
        self.head = None
        self.size = 0

    def insert_front(self, item):
        self.head = self.Node(item, self.head)
        self.size += 1

    def insert_after(self, item, p):
        p.next = self.Node(item, p.next)
        self.size += 1

    def delete_front(self):
        if self.size == 0:
            raise IndexError("Underflow")
        target = self.head
        self.head = self.head.next
        self.size -= 1
        return target.item
```

---

## 2. 이중 연결 리스트 (Doubly Linked List)

각 노드가 이전 노드(`prev`)와 다음 노드(`next`) 두 개의 포인터를 가져 양방향 이동이 가능합니다.

```python
class DList:
    class Node:
        def __init__(self, item, prev, link):
            self.item = item
            self.prev = prev
            self.next = link

    def __init__(self):
        self.head = self.Node(None, None, None)
        self.tail = self.Node(None, self.head, None)
        self.head.next = self.tail
        self.size = 0

    def insert_before(self, p, item):
        t = p.prev
        n = self.Node(item, t, p)
        p.prev = n
        t.next = n
        self.size += 1

    def delete(self, x):
        f = x.prev
        r = x.next
        f.next = r
        r.prev = f
        self.size -= 1
        return x.item
```

---

## 3. 원형 연결 리스트 (Circular Linked List)

마지막 노드의 `next`가 리스트의 첫 번째 노드를 가리켜 고리 모양을 형성합니다.

```python
class CList:
    class Node:
        def __init__(self, item, link):
            self.item = item
            self.next = link

    def __init__(self):
        self.last = None
        self.size = 0

    def insert(self, item):
        n = self.Node(item, None)
        if self.size == 0:
            n.next = n
            self.last = n
        else:
            n.next = self.last.next
            self.last.next = n
        self.size += 1
```

---

## 4. 연결 리스트 종류별 비교표

| 구분 | 단일 연결 리스트 | 이중 연결 리스트 | 원형 연결 리스트 |
| :--- | :--- | :--- | :--- |
| **포인터 수** | 노드당 1개 (`next`) | 노드당 2개 (`prev`, `next`) | 노드당 1개 (끝과 시작 연결) |
| **탐색 방향** | 단방향 (앞 $ightarrow$ 뒤) | **양방향** | 순환 지속 탐색 가능 |
| **메모리 오버헤드** | 적음 | 포인터 2개로 약간 증가 | 적음 |
| **주 활용처** | 단순 스택/큐 구현 | **Deque**, LRU 캐시, 에디터 | 라운드 로빈 스케줄링 |

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 이중 연결 리스트에서 더미 헤드/타일(Sentinel Node)을 두는 이유는 무엇인가요?**
A. 리스트가 비어있거나, 맨 앞/맨 뒤 노드를 삽입·삭제할 때 발생하는 예외 처리 조건문(`if self.head is None` 등)을 제거하여 코드를 간결하고 오류 없게 만듭니다.
',
  '<p>**연결 리스트(Linked List)**는 데이터 필드와 포인터(Link) 필드를 가진 **노드(Node)**들이 동적으로 연결된 선형 자료구조입니다.</p>
<hr>
<h2>1. 단일 연결 리스트 (Singly Linked List)</h2>
<p>각 노드가 다음 노드(<code>next</code>)의 참조 주소만을 가지는 형태입니다.</p>
<pre><code class="language-python">class SList:
    class Node:
        def __init__(self, item, link):
            self.item = item
            self.next = link

    def __init__(self):
        self.head = None
        self.size = 0

    def insert_front(self, item):
        self.head = self.Node(item, self.head)
        self.size += 1

    def insert_after(self, item, p):
        p.next = self.Node(item, p.next)
        self.size += 1

    def delete_front(self):
        if self.size == 0:
            raise IndexError(&quot;Underflow&quot;)
        target = self.head
        self.head = self.head.next
        self.size -= 1
        return target.item
</code></pre>
<hr>
<h2>2. 이중 연결 리스트 (Doubly Linked List)</h2>
<p>각 노드가 이전 노드(<code>prev</code>)와 다음 노드(<code>next</code>) 두 개의 포인터를 가져 양방향 이동이 가능합니다.</p>
<pre><code class="language-python">class DList:
    class Node:
        def __init__(self, item, prev, link):
            self.item = item
            self.prev = prev
            self.next = link

    def __init__(self):
        self.head = self.Node(None, None, None)
        self.tail = self.Node(None, self.head, None)
        self.head.next = self.tail
        self.size = 0

    def insert_before(self, p, item):
        t = p.prev
        n = self.Node(item, t, p)
        p.prev = n
        t.next = n
        self.size += 1

    def delete(self, x):
        f = x.prev
        r = x.next
        f.next = r
        r.prev = f
        self.size -= 1
        return x.item
</code></pre>
<hr>
<h2>3. 원형 연결 리스트 (Circular Linked List)</h2>
<p>마지막 노드의 <code>next</code>가 리스트의 첫 번째 노드를 가리켜 고리 모양을 형성합니다.</p>
<pre><code class="language-python">class CList:
    class Node:
        def __init__(self, item, link):
            self.item = item
            self.next = link

    def __init__(self):
        self.last = None
        self.size = 0

    def insert(self, item):
        n = self.Node(item, None)
        if self.size == 0:
            n.next = n
            self.last = n
        else:
            n.next = self.last.next
            self.last.next = n
        self.size += 1
</code></pre>
<hr>
<h2>4. 연결 리스트 종류별 비교표</h2>
<table>
<thead>
<tr>
<th align="left">구분</th>
<th align="left">단일 연결 리스트</th>
<th align="left">이중 연결 리스트</th>
<th align="left">원형 연결 리스트</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>포인터 수</strong></td>
<td align="left">노드당 1개 (<code>next</code>)</td>
<td align="left">노드당 2개 (<code>prev</code>, <code>next</code>)</td>
<td align="left">노드당 1개 (끝과 시작 연결)</td>
</tr>
<tr>
<td align="left"><strong>탐색 방향</strong></td>
<td align="left">단방향 (앞 $</td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left">ightarrow$ 뒤)</td>
<td align="left"><strong>양방향</strong></td>
<td align="left">순환 지속 탐색 가능</td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>메모리 오버헤드</strong></td>
<td align="left">적음</td>
<td align="left">포인터 2개로 약간 증가</td>
<td align="left">적음</td>
</tr>
<tr>
<td align="left"><strong>주 활용처</strong></td>
<td align="left">단순 스택/큐 구현</td>
<td align="left"><strong>Deque</strong>, LRU 캐시, 에디터</td>
<td align="left">라운드 로빈 스케줄링</td>
</tr>
</tbody></table>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 이중 연결 리스트에서 더미 헤드/타일(Sentinel Node)을 두는 이유는 무엇인가요?</strong>
A. 리스트가 비어있거나, 맨 앞/맨 뒤 노드를 삽입·삭제할 때 발생하는 예외 처리 조건문(<code>if self.head is None</code> 등)을 제거하여 코드를 간결하고 오류 없게 만듭니다.</p>
',
  'published',
  '연결 리스트(Linked List) 완전 가이드 - 단일·이중·원형 연결 리스트 파이썬 구현',
  '배열 대 연결 리스트 비교, 단일 연결 리스트(Singly), 이중 연결 리스트(Doubly), 원형 연결 리스트(Circular)의 노드 구조, 삽입, 삭제 및 순회 구현 코드를 제공합니다.',
  2,
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
  'data-structure',
  'ch03-stacks-queues-and-deques',
  '스택(Stack), 큐(Queue), 덱(Deque)의 파이썬 구현 및 응용',
  '선형 자료구조의 3대장인 스택, 큐, 덱의 차이점, 파이썬 리스트 대 연결 리스트 구현 성능 비교, 실전 활용 사례를 심도있게 파악합니다.',
  '**스택(Stack)**, **큐(Queue)**, **덱(Deque)**은 데이터 입출력 방향에 제약을 부여하여 특정 문제 상황을 효율적으로 해결하게 돕는 선형 자료구조입니다.

---

## 1. 연결 리스트 기반 스택 (Linked Stack)

배열 기반 스택과 달리 동적으로 크기가 확장되며, 항상 $O(1)$의 연산을 보장합니다.

```python
class LinkedStack:
    class Node:
        def __init__(self, item, link):
            self.item = item
            self.next = link

    def __init__(self):
        self.top = None
        self.size = 0

    def push(self, item):
        self.top = self.Node(item, self.top)
        self.size += 1

    def pop(self):
        if self.size == 0:
            raise IndexError("Stack Underflow")
        item = self.top.item
        self.top = self.top.next
        self.size -= 1
        return item
```

---

## 2. 연결 리스트 기반 큐 (Linked Queue)

전단(`front`)과 후단(`rear`) 두 개의 포인터로 입출력을 관리합니다.

```python
class LinkedQueue:
    class Node:
        def __init__(self, item, link):
            self.item = item
            self.next = link

    def __init__(self):
        self.front = None
        self.rear = None
        self.size = 0

    def add(self, item):
        new_node = self.Node(item, None)
        if self.size == 0:
            self.front = new_node
        else:
            self.rear.next = new_node
        self.rear = new_node
        self.size += 1

    def remove(self):
        if self.size == 0:
            raise IndexError("Queue Underflow")
        item = self.front.item
        self.front = self.front.next
        if self.size == 1:
            self.rear = None
        self.size -= 1
        return item
```

---

## 3. 파이썬 `collections.deque`와 양방향 덱

파이썬의 `deque`는 이중 연결 리스트(Doubly-Linked List)의 블록 형태로 내부 구현되어 양쪽 끝에서의 추가/삭제가 모두 $O(1)$ 입니다.

```python
from collections import deque

dq = deque([10, 20, 30])
dq.appendleft(5)   # 맨 앞에 추가 O(1)
dq.append(40)      # 맨 뒤에 추가 O(1)
print(dq.popleft())# 맨 앞 삭제 O(1) -> 5
print(dq.pop())    # 맨 뒤 삭제 O(1) -> 40
```

---

## 4. 자료구조 3종비교표

| 자료구조 | 입출력 메커니즘 | 시간 복잡도 (삽입/삭제) | 주 사용처 |
| :--- | :--- | :--- | :--- |
| **스택 (Stack)** | LIFO (후입선출) | $O(1)$ | 함수 호출 스택, Undo, 괄호 검사, DFS |
| **큐 (Queue)** | FIFO (선입선출) | $O(1)$ | 작업 대기열, BFS, 버퍼링 |
| **덱 (Deque)** | 양쪽 입출력 가능 | $O(1)$ | 슬라이딩 윈도우 최댓값, 양방향 큐 |

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 파이썬에서 `list` 대신 `collections.deque`를 큐로 써야 하는 구체적 이유는?**
A. 리스트의 `pop(0)`은 첫 요소를 뺀 후 뒤의 모든 요소를 앞으로 이동시키므로 $O(N)$의 시간이 걸립니다. 반면 `deque.popleft()`는 내부 두 이중 포인터 조정만으로 $O(1)$ 시간에 수행됩니다.
',
  '<p><strong>스택(Stack)</strong>, <strong>큐(Queue)</strong>, **덱(Deque)**은 데이터 입출력 방향에 제약을 부여하여 특정 문제 상황을 효율적으로 해결하게 돕는 선형 자료구조입니다.</p>
<hr>
<h2>1. 연결 리스트 기반 스택 (Linked Stack)</h2>
<p>배열 기반 스택과 달리 동적으로 크기가 확장되며, 항상 $O(1)$의 연산을 보장합니다.</p>
<pre><code class="language-python">class LinkedStack:
    class Node:
        def __init__(self, item, link):
            self.item = item
            self.next = link

    def __init__(self):
        self.top = None
        self.size = 0

    def push(self, item):
        self.top = self.Node(item, self.top)
        self.size += 1

    def pop(self):
        if self.size == 0:
            raise IndexError(&quot;Stack Underflow&quot;)
        item = self.top.item
        self.top = self.top.next
        self.size -= 1
        return item
</code></pre>
<hr>
<h2>2. 연결 리스트 기반 큐 (Linked Queue)</h2>
<p>전단(<code>front</code>)과 후단(<code>rear</code>) 두 개의 포인터로 입출력을 관리합니다.</p>
<pre><code class="language-python">class LinkedQueue:
    class Node:
        def __init__(self, item, link):
            self.item = item
            self.next = link

    def __init__(self):
        self.front = None
        self.rear = None
        self.size = 0

    def add(self, item):
        new_node = self.Node(item, None)
        if self.size == 0:
            self.front = new_node
        else:
            self.rear.next = new_node
        self.rear = new_node
        self.size += 1

    def remove(self):
        if self.size == 0:
            raise IndexError(&quot;Queue Underflow&quot;)
        item = self.front.item
        self.front = self.front.next
        if self.size == 1:
            self.rear = None
        self.size -= 1
        return item
</code></pre>
<hr>
<h2>3. 파이썬 <code>collections.deque</code>와 양방향 덱</h2>
<p>파이썬의 <code>deque</code>는 이중 연결 리스트(Doubly-Linked List)의 블록 형태로 내부 구현되어 양쪽 끝에서의 추가/삭제가 모두 $O(1)$ 입니다.</p>
<pre><code class="language-python">from collections import deque

dq = deque([10, 20, 30])
dq.appendleft(5)   # 맨 앞에 추가 O(1)
dq.append(40)      # 맨 뒤에 추가 O(1)
print(dq.popleft())# 맨 앞 삭제 O(1) -&gt; 5
print(dq.pop())    # 맨 뒤 삭제 O(1) -&gt; 40
</code></pre>
<hr>
<h2>4. 자료구조 3종비교표</h2>
<table>
<thead>
<tr>
<th align="left">자료구조</th>
<th align="left">입출력 메커니즘</th>
<th align="left">시간 복잡도 (삽입/삭제)</th>
<th align="left">주 사용처</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>스택 (Stack)</strong></td>
<td align="left">LIFO (후입선출)</td>
<td align="left">$O(1)$</td>
<td align="left">함수 호출 스택, Undo, 괄호 검사, DFS</td>
</tr>
<tr>
<td align="left"><strong>큐 (Queue)</strong></td>
<td align="left">FIFO (선입선출)</td>
<td align="left">$O(1)$</td>
<td align="left">작업 대기열, BFS, 버퍼링</td>
</tr>
<tr>
<td align="left"><strong>덱 (Deque)</strong></td>
<td align="left">양쪽 입출력 가능</td>
<td align="left">$O(1)$</td>
<td align="left">슬라이딩 윈도우 최댓값, 양방향 큐</td>
</tr>
</tbody></table>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬에서 <code>list</code> 대신 <code>collections.deque</code>를 큐로 써야 하는 구체적 이유는?</strong>
A. 리스트의 <code>pop(0)</code>은 첫 요소를 뺀 후 뒤의 모든 요소를 앞으로 이동시키므로 $O(N)$의 시간이 걸립니다. 반면 <code>deque.popleft()</code>는 내부 두 이중 포인터 조정만으로 $O(1)$ 시간에 수행됩니다.</p>
',
  'published',
  '스택, 큐, 덱(Deque) 자료구조 - 배열 vs 연결 리스트 구현 및 파이썬 활용',
  'LIFO 스택과 FIFO 큐, 양방향 덱(Deque)의 개념과 파이썬 구현(리스트 기반 vs 연결 리스트 기반), 괄호 쌍 검사, 원형 큐 동작 메커니즘을 학습합니다.',
  3,
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
  'data-structure',
  'ch04-binary-trees-and-heaps',
  '이진 트리(Binary Tree) 순회와 이진 힙(Binary Heap) 메커니즘',
  '비선형 트리의 대표격인 이진 트리 순회 4가지 방식과, 우선순위 큐 구현의 핵심인 이진 힙(Heap)의 상향/하향 이동 메커니즘을 파이썬 코드와 분석합니다.',
  '**이진 트리(Binary Tree)**는 각 노드가 최대 2개의 자식 노드를 가지는 계층적 비선형 자료구조입니다. **이진 힙(Binary Heap)**은 완전 이진 트리 구조를 활용해 최댓값이나 최솟값을 $O(log N)$에 찾는 최적 자료구조입니다.

---

## 1. 이진 트리 노드 및 순회 (Preorder, Inorder, Postorder, Levelorder)

```python
class Node:
    def __init__(self, item, left=None, right=None):
        self.item = item
        self.left = left
        self.right = right

# 전위 순회 (V -> L -> R)
def preorder(n):
    if n:
        print(n.item, end='' '')
        preorder(n.left)
        preorder(n.right)

# 레벨 순회 (Queue 활용)
from collections import deque
def levelorder(root):
    q = deque([root])
    while q:
        n = q.popleft()
        if n:
            print(n.item, end='' '')
            q.append(n.left)
            q.append(n.right)
```

---

## 2. 이진 힙 (Binary Heap) 메커니즘

이진 힙은 배열(List)로 효율적으로 표현됩니다.
- 부모 노드 인덱스: `i // 2`
- 왼쪽 자식 인덱스: `2 * i`
- 오른쪽 자식 인덱스: `2 * i + 1`

```python
class BHeap:
    def __init__(self, a):
        self.a = a  # [None] + 데이터
        self.N = len(a) - 1

    def create_heap(self):
        for i in range(self.N // 2, 0, -1):
            self.downheap(i)

    def insert(self, key):
        self.a.append(key)
        self.N += 1
        self.upheap(self.N)

    def upheap(self, j):
        while j > 1 and self.a[j // 2] > self.a[j]: # 최소 힙 조건
            self.a[j // 2], self.a[j] = self.a[j], self.a[j // 2]
            j = j // 2

    def delete_min(self):
        if self.N == 0:
            return None
        minimum = self.a[1]
        self.a[1] = self.a[self.N]
        self.a.pop()
        self.N -= 1
        self.downheap(1)
        return minimum

    def downheap(self, i):
        while 2 * i <= self.N:
            k = 2 * i
            if k < self.N and self.a[k] > self.a[k + 1]:
                k += 1
            if self.a[i] <= self.a[k]:
                break
            self.a[i], self.a[k] = self.a[k], self.a[i]
            i = k
```

---

## 3. 이진 힙 연산 복잡도 정리

| 연산 | 시간 복잡도 | 설명 |
| :--- | :--- | :--- |
| **최솟값/최댓값 조회** | $O(1)$ | 루트 노드(`a[1]`) 반환 |
| **새 요소 삽입 (Insert)** | $O(log N)$ | 맨 뒤 삽입 후 `upheap` 실행 |
| **최댓값/최솟값 삭제** | $O(log N)$ | 루트 제거 후 맨 뒤 요소 이동 및 `downheap` |
| **힙 생성 (Build Heap)** | $O(N)$ | 배열 전체를 힙으로 만듦 (Linear Time) |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 힙 생성(Build Heap)이 $O(N log N)$이 아니라 $O(N)$인 이유는?**
A. 아래쪽 레벨의 노드 수(전체의 절반)는 높이가 0이어서 이동하지 않고, 위로 올라갈수록 노드 수($N/2^h$)는 절반으로 줄어듭니다. 이를 급수 계산하면 $sum (h / 2^h) = 2$가 되어 전체 연산량이 $O(N)$으로 수렴합니다.
',
  '<p>**이진 트리(Binary Tree)**는 각 노드가 최대 2개의 자식 노드를 가지는 계층적 비선형 자료구조입니다. **이진 힙(Binary Heap)**은 완전 이진 트리 구조를 활용해 최댓값이나 최솟값을 $O(log N)$에 찾는 최적 자료구조입니다.</p>
<hr>
<h2>1. 이진 트리 노드 및 순회 (Preorder, Inorder, Postorder, Levelorder)</h2>
<pre><code class="language-python">class Node:
    def __init__(self, item, left=None, right=None):
        self.item = item
        self.left = left
        self.right = right

# 전위 순회 (V -&gt; L -&gt; R)
def preorder(n):
    if n:
        print(n.item, end=&#39; &#39;)
        preorder(n.left)
        preorder(n.right)

# 레벨 순회 (Queue 활용)
from collections import deque
def levelorder(root):
    q = deque([root])
    while q:
        n = q.popleft()
        if n:
            print(n.item, end=&#39; &#39;)
            q.append(n.left)
            q.append(n.right)
</code></pre>
<hr>
<h2>2. 이진 힙 (Binary Heap) 메커니즘</h2>
<p>이진 힙은 배열(List)로 효율적으로 표현됩니다.</p>
<ul>
<li>부모 노드 인덱스: <code>i // 2</code></li>
<li>왼쪽 자식 인덱스: <code>2 * i</code></li>
<li>오른쪽 자식 인덱스: <code>2 * i + 1</code></li>
</ul>
<pre><code class="language-python">class BHeap:
    def __init__(self, a):
        self.a = a  # [None] + 데이터
        self.N = len(a) - 1

    def create_heap(self):
        for i in range(self.N // 2, 0, -1):
            self.downheap(i)

    def insert(self, key):
        self.a.append(key)
        self.N += 1
        self.upheap(self.N)

    def upheap(self, j):
        while j &gt; 1 and self.a[j // 2] &gt; self.a[j]: # 최소 힙 조건
            self.a[j // 2], self.a[j] = self.a[j], self.a[j // 2]
            j = j // 2

    def delete_min(self):
        if self.N == 0:
            return None
        minimum = self.a[1]
        self.a[1] = self.a[self.N]
        self.a.pop()
        self.N -= 1
        self.downheap(1)
        return minimum

    def downheap(self, i):
        while 2 * i &lt;= self.N:
            k = 2 * i
            if k &lt; self.N and self.a[k] &gt; self.a[k + 1]:
                k += 1
            if self.a[i] &lt;= self.a[k]:
                break
            self.a[i], self.a[k] = self.a[k], self.a[i]
            i = k
</code></pre>
<hr>
<h2>3. 이진 힙 연산 복잡도 정리</h2>
<table>
<thead>
<tr>
<th align="left">연산</th>
<th align="left">시간 복잡도</th>
<th align="left">설명</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>최솟값/최댓값 조회</strong></td>
<td align="left">$O(1)$</td>
<td align="left">루트 노드(<code>a[1]</code>) 반환</td>
</tr>
<tr>
<td align="left"><strong>새 요소 삽입 (Insert)</strong></td>
<td align="left">$O(log N)$</td>
<td align="left">맨 뒤 삽입 후 <code>upheap</code> 실행</td>
</tr>
<tr>
<td align="left"><strong>최댓값/최솟값 삭제</strong></td>
<td align="left">$O(log N)$</td>
<td align="left">루트 제거 후 맨 뒤 요소 이동 및 <code>downheap</code></td>
</tr>
<tr>
<td align="left"><strong>힙 생성 (Build Heap)</strong></td>
<td align="left">$O(N)$</td>
<td align="left">배열 전체를 힙으로 만듦 (Linear Time)</td>
</tr>
</tbody></table>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 힙 생성(Build Heap)이 $O(N log N)$이 아니라 $O(N)$인 이유는?</strong>
A. 아래쪽 레벨의 노드 수(전체의 절반)는 높이가 0이어서 이동하지 않고, 위로 올라갈수록 노드 수($N/2^h$)는 절반으로 줄어듭니다. 이를 급수 계산하면 $sum (h / 2^h) = 2$가 되어 전체 연산량이 $O(N)$으로 수렴합니다.</p>
',
  'published',
  '이진 트리와 이진 힙(Heap) 총정리 - 트리의 순회 및 힙 연산 파이썬 코드',
  '이진 트리의 계층 구조, 전위/중위/후위/레벨 순회, 우선순위 큐를 위한 이진 힙(최소 힙, 최대 힙)의 배열 저장 방식과 삽입/삭제(Up-heap, Down-heap)를 살펴봅니다.',
  4,
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
  'data-structure',
  'ch05-search-trees-bst-and-avl',
  '탐색 트리 - 이진 탐색 트리(BST)와 자가 균형 AVL 트리 회전 연산',
  '이진 탐색 트리(BST)의 핵심 탐색·삭제 연산 및 트리가 한쪽으로 쏠리는 편향 문제를 자가 균형 회전 연산(LL, RR, LR, RL)으로 해결하는 AVL 트리를 다룹니다.',
  '**이진 탐색 트리(BST)**는 탐색 연산을 $O(log N)$에 수행하도록 돕는 대표적 트리 구조이지만, 데이터 삽입 순서에 따라 $O(N)$ 편향 트리가 될 수 있습니다. 이를 방지하는 대표적 자가 균형 트리가 **AVL 트리**입니다.

---

## 1. 이진 탐색 트리 (BST) 파이썬 연산

```python
class BST:
    class Node:
        def __init__(self, key, val, left=None, right=None):
            self.key = key
            self.val = val
            self.left = left
            self.right = right

    def __init__(self):
        self.root = None

    def get(self, k):
        return self._get(self.root, k)

    def _get(self, n, k):
        if n is None:
            return None
        if k < n.key:
            return self._get(n.left, k)
        elif k > n.key:
            return self._get(n.right, k)
        else:
            return n.val

    def delete(self, k):
        self.root = self._delete(self.root, k)

    def _delete(self, n, k):
        if n is None:
            return None
        if k < n.key:
            n.left = self._delete(n.left, k)
        elif k > n.key:
            n.right = self._delete(n.right, k)
        else:
            if n.right is None: return n.left
            if n.left is None: return n.right
            target = n
            n = self._min(target.right) # 후계자 노드 복사
            n.right = self._delete_min(target.right)
            n.left = target.left
        return n
```

---

## 2. AVL 트리의 균형 인수(Balance Factor)와 회전

AVL 트리는 모든 노드의 **균형 인수 (BF = 왼쪽 서브트리 높이 - 오른쪽 서브트리 높이)** 가 $-1, 0, 1$ 범위를 유지하도록 규제합니다.

### 4가지 불균형 회전 연산

| 유형 | 발생 원인 | 해결 회전 연산 |
| :--- | :--- | :--- |
| **LL 유형** | 왼쪽 자식의 왼쪽에 삽입되어 불균형 | **우회전 (Right Rotate)** 1회 |
| **RR 유형** | 오른쪽 자식의 오른쪽에 삽입되어 불균형 | **좌회전 (Left Rotate)** 1회 |
| **LR 유형** | 왼쪽 자식의 오른쪽에 삽입되어 불균형 | **좌회전 후 우회전** (Double Rotate) |
| **RL 유형** | 오른쪽 자식의 왼쪽에 삽입되어 불균형 | **우회전 후 좌회전** (Double Rotate) |

---

## 3. AVL 트리 우회전 (Rotate Right) 코드

```python
def rotate_right(n):
    x = n.left
    n.left = x.right
    x.right = n
    # 높이 갱신
    n.height = max(height(n.left), height(n.right)) + 1
    x.height = max(height(x.left), height(x.right)) + 1
    return x
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Red-Black 트리와 AVL 트리의 차이점은 무엇인가요?**
A. AVL 트리는 높이 불균형을 더 엄격히 제어해 탐색이 더 빠르지만, 삽입/삭제 시 회전 연산이 더 자주 일어납니다. Red-Black 트리는 높이 차이를 최대 2배까지 허용하여 삽입/삭제 오버헤드가 적어 C++ `std::map`이나 Java `TreeMap`에 흔히 채택됩니다.
',
  '<p>**이진 탐색 트리(BST)**는 탐색 연산을 $O(log N)$에 수행하도록 돕는 대표적 트리 구조이지만, 데이터 삽입 순서에 따라 $O(N)$ 편향 트리가 될 수 있습니다. 이를 방지하는 대표적 자가 균형 트리가 <strong>AVL 트리</strong>입니다.</p>
<hr>
<h2>1. 이진 탐색 트리 (BST) 파이썬 연산</h2>
<pre><code class="language-python">class BST:
    class Node:
        def __init__(self, key, val, left=None, right=None):
            self.key = key
            self.val = val
            self.left = left
            self.right = right

    def __init__(self):
        self.root = None

    def get(self, k):
        return self._get(self.root, k)

    def _get(self, n, k):
        if n is None:
            return None
        if k &lt; n.key:
            return self._get(n.left, k)
        elif k &gt; n.key:
            return self._get(n.right, k)
        else:
            return n.val

    def delete(self, k):
        self.root = self._delete(self.root, k)

    def _delete(self, n, k):
        if n is None:
            return None
        if k &lt; n.key:
            n.left = self._delete(n.left, k)
        elif k &gt; n.key:
            n.right = self._delete(n.right, k)
        else:
            if n.right is None: return n.left
            if n.left is None: return n.right
            target = n
            n = self._min(target.right) # 후계자 노드 복사
            n.right = self._delete_min(target.right)
            n.left = target.left
        return n
</code></pre>
<hr>
<h2>2. AVL 트리의 균형 인수(Balance Factor)와 회전</h2>
<p>AVL 트리는 모든 노드의 <strong>균형 인수 (BF = 왼쪽 서브트리 높이 - 오른쪽 서브트리 높이)</strong> 가 $-1, 0, 1$ 범위를 유지하도록 규제합니다.</p>
<h3>4가지 불균형 회전 연산</h3>
<table>
<thead>
<tr>
<th align="left">유형</th>
<th align="left">발생 원인</th>
<th align="left">해결 회전 연산</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>LL 유형</strong></td>
<td align="left">왼쪽 자식의 왼쪽에 삽입되어 불균형</td>
<td align="left"><strong>우회전 (Right Rotate)</strong> 1회</td>
</tr>
<tr>
<td align="left"><strong>RR 유형</strong></td>
<td align="left">오른쪽 자식의 오른쪽에 삽입되어 불균형</td>
<td align="left"><strong>좌회전 (Left Rotate)</strong> 1회</td>
</tr>
<tr>
<td align="left"><strong>LR 유형</strong></td>
<td align="left">왼쪽 자식의 오른쪽에 삽입되어 불균형</td>
<td align="left"><strong>좌회전 후 우회전</strong> (Double Rotate)</td>
</tr>
<tr>
<td align="left"><strong>RL 유형</strong></td>
<td align="left">오른쪽 자식의 왼쪽에 삽입되어 불균형</td>
<td align="left"><strong>우회전 후 좌회전</strong> (Double Rotate)</td>
</tr>
</tbody></table>
<hr>
<h2>3. AVL 트리 우회전 (Rotate Right) 코드</h2>
<pre><code class="language-python">def rotate_right(n):
    x = n.left
    n.left = x.right
    x.right = n
    # 높이 갱신
    n.height = max(height(n.left), height(n.right)) + 1
    x.height = max(height(x.left), height(x.right)) + 1
    return x
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Red-Black 트리와 AVL 트리의 차이점은 무엇인가요?</strong>
A. AVL 트리는 높이 불균형을 더 엄격히 제어해 탐색이 더 빠르지만, 삽입/삭제 시 회전 연산이 더 자주 일어납니다. Red-Black 트리는 높이 차이를 최대 2배까지 허용하여 삽입/삭제 오버헤드가 적어 C++ <code>std::map</code>이나 Java <code>TreeMap</code>에 흔히 채택됩니다.</p>
',
  'published',
  '탐색 트리 완벽 이해 - 이진 탐색 트리(BST) 연산과 자가 균형 AVL 트리 회전',
  'BST의 탐색·삽입·삭제 동작과 편향 트리 문제, 높이 균형 조건(|BF| <= 1)을 유지하기 위한 AVL 트리의 4가지 회전(LL, RR, LR, RL) 연산을 코드와 함께 다룹니다.',
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
  'data-structure',
  'ch06-hash-tables-and-collisions',
  '해시 테이블(Hash Table) 메커니즘과 충돌 해결 기법',
  '키(Key)를 주소로 직접 변환하여 평균 O(1) 탐색을 보장하는 해시 테이블과, 충돌 발생 시 개방 주소법과 체이닝 방식으로 해결하는 파이썬 코드를 살펴봅니다.',
  '**해시 테이블(Hash Table)**은 임의의 길이인 키(Key)를 **해시 함수(Hash Function)**를 거쳐 고정 크기의 테이블 인덱스로 변환해 데이터를 저장하는 $O(1)$ 자료구조입니다.

---

## 1. 해시 충돌 해결 1: 개방 주소법 (Open Addressing)

충돌이 발생하면 테이블 내의 다른 비어있는 슬롯(Bucket)을 찾아 저장하는 방식입니다.

- **선형 조사법 (Linear Probing)**: 충돌 시 다음 슬롯(`i + 1, i + 2, ...`)을 순차적으로 탐사. (1차 군집화 문제 발생)
- **이차 조사법 (Quadratic Probing)**: $i^2$ ($1, 4, 9, 16...$) 단위로 스킵 탐사하여 1차 군집화 완화.
- **이중 해싱 (Double Hashing / Random Probing)**: 제2의 해시 함수를 이용해 이동 간격을 결정.

```python
# 선형 조사법 (Linear Probing) 구현 예시
class LinearProbing:
    def __init__(self, size=13):
        self.M = size
        self.a = [None] * self.M
        self.d = [None] * self.M

    def hash(self, key):
        return key % self.M

    def put(self, key, data):
        initial_i = self.hash(key)
        i = initial_i
        while True:
            if self.a[i] is None or self.a[i] == key:
                self.a[i] = key
                self.d[i] = data
                return
            i = (i + 1) % self.M
            if i == initial_i:
                raise OverflowError("Hash Table Full")
```

---

## 2. 해시 충돌 해결 2: 체이닝 (Chaining)

동일한 해시 버킷 인덱스를 갖는 데이터를 **연결 리스트(Linked List)**로 매달아 관리하는 방식입니다.

```python
class Chaining:
    class Node:
        def __init__(self, key, data, link):
            self.key = key
            self.data = data
            self.next = link

    def __init__(self, size=13):
        self.M = size
        self.a = [None] * self.M

    def hash(self, key):
        return key % self.M

    def put(self, key, data):
        i = self.hash(key)
        p = self.a[i]
        while p is not None:
            if key == p.key:
                p.data = data
                return
            p = p.next
        self.a[i] = self.Node(key, data, self.a[i])
```

---

## 3. 개방 주소법 vs 체이닝 성능 비교표

| 특성 | 개방 주소법 (Open Addressing) | 체이닝 (Chaining) |
| :--- | :--- | :--- |
| **추가 메모리** | 없음 (테이블 내에서 처리) | 노드 링크 포인터 메모리 필요 |
| **적재율 ($alpha = N/M$)** | $alpha < 1.0$ (테이블 가득 차면 불가능) | $alpha > 1.0$ 가용 가능 |
| **성능 저하 원인** | 군집화(Clustering) 문제 | 한 버킷의 리스트가 길어지는 문제 |
| **파이썬 내장** | 파이썬 `dict` (선형/이차 조사 기반 개방주소법) | C++ `unordered_map`, Java `HashMap` |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 적재율(Load Factor, $alpha$)이란 무엇이며 왜 관리해야 하나요?**
A. 적재율 $alpha = N / M$ (저장된 데이터 수 / 테이블 크기) 입니다. 적재율이 높아지면 충돌 빈도가 늘어 연산 시간이 $O(1)$에서 $O(N)$으로 저하되므로, 보통 $alpha ge 0.75$ 일 때 테이블 크기를 2배로 재해싱(Rehashing)합니다.
',
  '<p>**해시 테이블(Hash Table)**은 임의의 길이인 키(Key)를 **해시 함수(Hash Function)**를 거쳐 고정 크기의 테이블 인덱스로 변환해 데이터를 저장하는 $O(1)$ 자료구조입니다.</p>
<hr>
<h2>1. 해시 충돌 해결 1: 개방 주소법 (Open Addressing)</h2>
<p>충돌이 발생하면 테이블 내의 다른 비어있는 슬롯(Bucket)을 찾아 저장하는 방식입니다.</p>
<ul>
<li><strong>선형 조사법 (Linear Probing)</strong>: 충돌 시 다음 슬롯(<code>i + 1, i + 2, ...</code>)을 순차적으로 탐사. (1차 군집화 문제 발생)</li>
<li><strong>이차 조사법 (Quadratic Probing)</strong>: $i^2$ ($1, 4, 9, 16...$) 단위로 스킵 탐사하여 1차 군집화 완화.</li>
<li><strong>이중 해싱 (Double Hashing / Random Probing)</strong>: 제2의 해시 함수를 이용해 이동 간격을 결정.</li>
</ul>
<pre><code class="language-python"># 선형 조사법 (Linear Probing) 구현 예시
class LinearProbing:
    def __init__(self, size=13):
        self.M = size
        self.a = [None] * self.M
        self.d = [None] * self.M

    def hash(self, key):
        return key % self.M

    def put(self, key, data):
        initial_i = self.hash(key)
        i = initial_i
        while True:
            if self.a[i] is None or self.a[i] == key:
                self.a[i] = key
                self.d[i] = data
                return
            i = (i + 1) % self.M
            if i == initial_i:
                raise OverflowError(&quot;Hash Table Full&quot;)
</code></pre>
<hr>
<h2>2. 해시 충돌 해결 2: 체이닝 (Chaining)</h2>
<p>동일한 해시 버킷 인덱스를 갖는 데이터를 **연결 리스트(Linked List)**로 매달아 관리하는 방식입니다.</p>
<pre><code class="language-python">class Chaining:
    class Node:
        def __init__(self, key, data, link):
            self.key = key
            self.data = data
            self.next = link

    def __init__(self, size=13):
        self.M = size
        self.a = [None] * self.M

    def hash(self, key):
        return key % self.M

    def put(self, key, data):
        i = self.hash(key)
        p = self.a[i]
        while p is not None:
            if key == p.key:
                p.data = data
                return
            p = p.next
        self.a[i] = self.Node(key, data, self.a[i])
</code></pre>
<hr>
<h2>3. 개방 주소법 vs 체이닝 성능 비교표</h2>
<table>
<thead>
<tr>
<th align="left">특성</th>
<th align="left">개방 주소법 (Open Addressing)</th>
<th align="left">체이닝 (Chaining)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>추가 메모리</strong></td>
<td align="left">없음 (테이블 내에서 처리)</td>
<td align="left">노드 링크 포인터 메모리 필요</td>
</tr>
<tr>
<td align="left"><strong>적재율 ($alpha = N/M$)</strong></td>
<td align="left">$alpha &lt; 1.0$ (테이블 가득 차면 불가능)</td>
<td align="left">$alpha &gt; 1.0$ 가용 가능</td>
</tr>
<tr>
<td align="left"><strong>성능 저하 원인</strong></td>
<td align="left">군집화(Clustering) 문제</td>
<td align="left">한 버킷의 리스트가 길어지는 문제</td>
</tr>
<tr>
<td align="left"><strong>파이썬 내장</strong></td>
<td align="left">파이썬 <code>dict</code> (선형/이차 조사 기반 개방주소법)</td>
<td align="left">C++ <code>unordered_map</code>, Java <code>HashMap</code></td>
</tr>
</tbody></table>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 적재율(Load Factor, $alpha$)이란 무엇이며 왜 관리해야 하나요?</strong>
A. 적재율 $alpha = N / M$ (저장된 데이터 수 / 테이블 크기) 입니다. 적재율이 높아지면 충돌 빈도가 늘어 연산 시간이 $O(1)$에서 $O(N)$으로 저하되므로, 보통 $alpha ge 0.75$ 일 때 테이블 크기를 2배로 재해싱(Rehashing)합니다.</p>
',
  'published',
  '해시 테이블과 충돌 해결 기법 - 선형/이차/재해싱 조사법 및 체이닝',
  '키-값 매핑 해시 함수, 해시 충돌(Collision) 해결을 위한 개방 주소법(선형 조사, 이차 조사, 랜덤 조사/재해싱)과 체이닝(Chaining) 방식의 원리 및 구현을 설명합니다.',
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
  'data-structure',
  'ch07-sorting-algorithms-in-python',
  '주요 정렬 알고리즘 (선택, 삽입, 쉘, 힙, 병합, 퀵, 기수 정렬) 분석',
  '8가지 주요 정렬 알고리즘의 동작 메커니즘과 파이썬 구현 코드, 시간/공간 복잡도, 그리고 파이썬 Timsort의 기초 이론까지 정밀하게 다룹니다.',
  '**정렬(Sorting)** 알고리즘은 데이터를 정해진 기준(오름차순/내림차순)으로 재배열하는 알고리즘으로, 탐색 연산 성능 최적화의 필수 전제조건입니다.

---

## 1. 주요 8대 정렬 알고리즘 비교표

| 알고리즘 | 평균 시간복잡도 | 최악 시간복잡도 | 공간복잡도 | 안정성(Stable) | 핵심 구현 특징 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **선택 정렬** | $O(N^2)$ | $O(N^2)$ | $O(1)$ | X | 최솟값 찾아 맨 앞과 교환 |
| **삽입 정렬** | $O(N^2)$ | $O(N^2)$ | $O(1)$ | O | 정렬된 구간에 요소 삽입 |
| **쉘 정렬** | $O(N^{1.3})$ | $O(N^2)$ | $O(1)$ | X | 간격(Gap)을 줄여가며 삽입 정렬 |
| **힙 정렬** | $O(N log N)$ | $O(N log N)$ | $O(1)$ | X | 이진 힙 구조 활용 |
| **병합 정렬** | $O(N log N)$ | $O(N log N)$ | $O(N)$ | O | 분할 정복 + 추가 배열 병합 |
| **퀵 정렬** | $O(N log N)$ | $O(N^2)$ | $O(log N)$ | X | 피봇 기반 2분할 재귀 정렬 |
| **기수 정렬 (LSD)**| $O(dN)$ | $O(dN)$ | $O(N+k)$ | O | 자릿수 비교 (비비교 정렬) |

---

## 2. 쉘 정렬(Shell Sort)과 병합 정렬(Merge Sort) 코드

```python
# 1. 쉘 정렬 (Shell Sort)
def shell_sort(a):
    h = len(a) // 2
    while h >= 1:
        for i in range(h, len(a)):
            j = i
            while j >= h and a[j - h] > a[j]:
                a[j], a[j - h] = a[j - h], a[j]
                j -= h
        h //= 2

# 2. 병합 정렬 (Merge Sort)
def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
```

---

## 3. 파이썬 기본 정렬: Timsort

파이썬의 `list.sort()`와 `sorted()`는 **Timsort** 알고리즘을 사용합니다.
- **Timsort**: **삽입 정렬**과 **병합 정렬**을 결합한 하이브리드 정렬 알고리즘입니다.
- 작은 덩어리(Run, 32~64 크기)에는 삽입 정렬을 적용하고, 이들을 병합 정렬 방식으로 합칩니다.
- 최선의 경우 $O(N)$, 최악의 경우 $O(N log N)$을 보장하며 정렬 안정성(Stable)을 유지합니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 퀵 정렬이 병합 정렬보다 평균적으로 빠른 이유는 무엇인가요?**
A. 퀵 정렬은 추가 배열을 할당하지 않는 제자리 정렬(In-place)이며, 참조 지역성(Locality of Reference)이 뛰어나 CPU 캐시 히트율이 높기 때문입니다.
',
  '<p><strong>정렬(Sorting)</strong> 알고리즘은 데이터를 정해진 기준(오름차순/내림차순)으로 재배열하는 알고리즘으로, 탐색 연산 성능 최적화의 필수 전제조건입니다.</p>
<hr>
<h2>1. 주요 8대 정렬 알고리즘 비교표</h2>
<table>
<thead>
<tr>
<th align="left">알고리즘</th>
<th align="left">평균 시간복잡도</th>
<th align="left">최악 시간복잡도</th>
<th align="left">공간복잡도</th>
<th align="left">안정성(Stable)</th>
<th align="left">핵심 구현 특징</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>선택 정렬</strong></td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(1)$</td>
<td align="left">X</td>
<td align="left">최솟값 찾아 맨 앞과 교환</td>
</tr>
<tr>
<td align="left"><strong>삽입 정렬</strong></td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(1)$</td>
<td align="left">O</td>
<td align="left">정렬된 구간에 요소 삽입</td>
</tr>
<tr>
<td align="left"><strong>쉘 정렬</strong></td>
<td align="left">$O(N^{1.3})$</td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(1)$</td>
<td align="left">X</td>
<td align="left">간격(Gap)을 줄여가며 삽입 정렬</td>
</tr>
<tr>
<td align="left"><strong>힙 정렬</strong></td>
<td align="left">$O(N log N)$</td>
<td align="left">$O(N log N)$</td>
<td align="left">$O(1)$</td>
<td align="left">X</td>
<td align="left">이진 힙 구조 활용</td>
</tr>
<tr>
<td align="left"><strong>병합 정렬</strong></td>
<td align="left">$O(N log N)$</td>
<td align="left">$O(N log N)$</td>
<td align="left">$O(N)$</td>
<td align="left">O</td>
<td align="left">분할 정복 + 추가 배열 병합</td>
</tr>
<tr>
<td align="left"><strong>퀵 정렬</strong></td>
<td align="left">$O(N log N)$</td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(log N)$</td>
<td align="left">X</td>
<td align="left">피봇 기반 2분할 재귀 정렬</td>
</tr>
<tr>
<td align="left"><strong>기수 정렬 (LSD)</strong></td>
<td align="left">$O(dN)$</td>
<td align="left">$O(dN)$</td>
<td align="left">$O(N+k)$</td>
<td align="left">O</td>
<td align="left">자릿수 비교 (비비교 정렬)</td>
</tr>
</tbody></table>
<hr>
<h2>2. 쉘 정렬(Shell Sort)과 병합 정렬(Merge Sort) 코드</h2>
<pre><code class="language-python"># 1. 쉘 정렬 (Shell Sort)
def shell_sort(a):
    h = len(a) // 2
    while h &gt;= 1:
        for i in range(h, len(a)):
            j = i
            while j &gt;= h and a[j - h] &gt; a[j]:
                a[j], a[j - h] = a[j - h], a[j]
                j -= h
        h //= 2

# 2. 병합 정렬 (Merge Sort)
def merge_sort(a):
    if len(a) &lt;= 1:
        return a
    mid = len(a) // 2
    left = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i &lt; len(left) and j &lt; len(right):
        if left[i] &lt;= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
</code></pre>
<hr>
<h2>3. 파이썬 기본 정렬: Timsort</h2>
<p>파이썬의 <code>list.sort()</code>와 <code>sorted()</code>는 <strong>Timsort</strong> 알고리즘을 사용합니다.</p>
<ul>
<li><strong>Timsort</strong>: <strong>삽입 정렬</strong>과 <strong>병합 정렬</strong>을 결합한 하이브리드 정렬 알고리즘입니다.</li>
<li>작은 덩어리(Run, 32~64 크기)에는 삽입 정렬을 적용하고, 이들을 병합 정렬 방식으로 합칩니다.</li>
<li>최선의 경우 $O(N)$, 최악의 경우 $O(N log N)$을 보장하며 정렬 안정성(Stable)을 유지합니다.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 퀵 정렬이 병합 정렬보다 평균적으로 빠른 이유는 무엇인가요?</strong>
A. 퀵 정렬은 추가 배열을 할당하지 않는 제자리 정렬(In-place)이며, 참조 지역성(Locality of Reference)이 뛰어나 CPU 캐시 히트율이 높기 때문입니다.</p>
',
  'published',
  '8대 정렬 알고리즘 파이썬 구현과 성능 비교 - 선택, 삽입, 쉘, 힙, 병합, 퀵, 기수 정렬',
  '기본 정렬(선택, 삽입), 개선된 정렬(쉘, 힙, 병합, 퀵), 비비교 정렬(LSD 기수 정렬)의 동작 과정, 시간 및 공간 복잡도, 정렬 안정성을 파이썬 실습 코드와 비교 분석합니다.',
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
  'data-structure',
  'ch08-graph-structures-and-algorithms',
  '그래프 표현, DFS/BFS, 위상 정렬, MST, 최단경로 알고리즘',
  '정점과 간선으로 이루어진 그래프의 기초부터 탐색(DFS/BFS), 위상 정렬, 최소 신장 트리(MST), 그리고 최단 경로 알고리즘까지 핵심 그래프 이론을 망라합니다.',
  '**그래프(Graph)**는 현실 세계의 도로망, 사회관계망(SNS), 인터넷 네트워크 등 객체 간의 유기적 관계를 정점(Vertex)과 간선(Edge)으로 모형화한 자료구조입니다.

---

## 1. 그래프 탐색: DFS (깊이 우선) & BFS (너비 우선)

```python
# 인접 리스트 그래프
adj = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1], 4: [1], 5: [2]
}

# 1. DFS (재귀)
visited = [False] * 6
def dfs(v):
    visited[v] = True
    print(v, end='' '')
    for w in adj[v]:
        if not visited[w]:
            dfs(w)

# 2. BFS (Queue)
from collections import deque
def bfs(start):
    visited_b = [False] * 6
    q = deque([start])
    visited_b[start] = True
    while q:
        v = q.popleft()
        print(v, end='' '')
        for w in adj[v]:
            if not visited_b[w]:
                visited_b[w] = True
                q.append(w)
```

---

## 2. 위상 정렬 (Topological Sort)

방향 그래프(DAG, Directed Acyclic Graph)에서 선후 관계를 위배하지 않도록 정점들을 일렬로 나열하는 알고리즘입니다. (진입 차수 `indegree` 기반)

```python
def topological_sort(graph, n):
    indegree = [0] * n
    for u in graph:
        for v in graph[u]:
            indegree[v] += 1

    q = deque([i for i in range(n) if indegree[i] == 0])
    result = []
    while q:
        u = q.popleft()
        result.append(u)
        for v in graph[u]:
            indegree[v] -= 1
            if indegree[v] == 0:
                q.append(v)
    return result
```

---

## 3. 최단 경로: 다익스트라 vs 플로이드-워셜

| 구분 | 다익스트라 (Dijkstra) | 플로이드-워셜 (Floyd-Warshall) |
| :--- | :--- | :--- |
| **목적** | 단일 출발점 $ightarrow$ 모든 정점 최단 거리 | **모든 정점 쌍 간의 최단 거리** |
| **동작 방식** | 탐욕법(Greedy) + 우선순위 큐 | 동적 계획법(DP, 3중 반복문) |
| **시간 복잡도** | $O((V+E) log V)$ | $O(V^3)$ |
| **음수 가중치** | 불가능 | 음수 가중치 가능 (음수 사이클은 불가) |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 크루스칼(Kruskal) 알고리즘에서 사이클 형성 여부를 판별하는 방법은?**
A. **Union-Find (서로소 집합, Disjoint-Set)** 자료구조를 활용합니다. 두 정점의 루트 노드가 같으면(`find(u) == find(v)`) 해당 간선 추가 시 사이클이 발생하므로 채택하지 않고 건너뜁니다.
',
  '<p>**그래프(Graph)**는 현실 세계의 도로망, 사회관계망(SNS), 인터넷 네트워크 등 객체 간의 유기적 관계를 정점(Vertex)과 간선(Edge)으로 모형화한 자료구조입니다.</p>
<hr>
<h2>1. 그래프 탐색: DFS (깊이 우선) &amp; BFS (너비 우선)</h2>
<pre><code class="language-python"># 인접 리스트 그래프
adj = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1], 4: [1], 5: [2]
}

# 1. DFS (재귀)
visited = [False] * 6
def dfs(v):
    visited[v] = True
    print(v, end=&#39; &#39;)
    for w in adj[v]:
        if not visited[w]:
            dfs(w)

# 2. BFS (Queue)
from collections import deque
def bfs(start):
    visited_b = [False] * 6
    q = deque([start])
    visited_b[start] = True
    while q:
        v = q.popleft()
        print(v, end=&#39; &#39;)
        for w in adj[v]:
            if not visited_b[w]:
                visited_b[w] = True
                q.append(w)
</code></pre>
<hr>
<h2>2. 위상 정렬 (Topological Sort)</h2>
<p>방향 그래프(DAG, Directed Acyclic Graph)에서 선후 관계를 위배하지 않도록 정점들을 일렬로 나열하는 알고리즘입니다. (진입 차수 <code>indegree</code> 기반)</p>
<pre><code class="language-python">def topological_sort(graph, n):
    indegree = [0] * n
    for u in graph:
        for v in graph[u]:
            indegree[v] += 1

    q = deque([i for i in range(n) if indegree[i] == 0])
    result = []
    while q:
        u = q.popleft()
        result.append(u)
        for v in graph[u]:
            indegree[v] -= 1
            if indegree[v] == 0:
                q.append(v)
    return result
</code></pre>
<hr>
<h2>3. 최단 경로: 다익스트라 vs 플로이드-워셜</h2>
<table>
<thead>
<tr>
<th align="left">구분</th>
<th align="left">다익스트라 (Dijkstra)</th>
<th align="left">플로이드-워셜 (Floyd-Warshall)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>목적</strong></td>
<td align="left">단일 출발점 $</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">ightarrow$ 모든 정점 최단 거리</td>
<td align="left"><strong>모든 정점 쌍 간의 최단 거리</strong></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>동작 방식</strong></td>
<td align="left">탐욕법(Greedy) + 우선순위 큐</td>
<td align="left">동적 계획법(DP, 3중 반복문)</td>
</tr>
<tr>
<td align="left"><strong>시간 복잡도</strong></td>
<td align="left">$O((V+E) log V)$</td>
<td align="left">$O(V^3)$</td>
</tr>
<tr>
<td align="left"><strong>음수 가중치</strong></td>
<td align="left">불가능</td>
<td align="left">음수 가중치 가능 (음수 사이클은 불가)</td>
</tr>
</tbody></table>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 크루스칼(Kruskal) 알고리즘에서 사이클 형성 여부를 판별하는 방법은?</strong>
A. <strong>Union-Find (서로소 집합, Disjoint-Set)</strong> 자료구조를 활용합니다. 두 정점의 루트 노드가 같으면(<code>find(u) == find(v)</code>) 해당 간선 추가 시 사이클이 발생하므로 채택하지 않고 건너뜁니다.</p>
',
  'published',
  '그래프 자료구조와 알고리즘 총정리 - DFS, BFS, 위상 정렬, Kruskal, Prim, Dijkstra, Floyd',
  '인접 리스트/행렬 표현, 깊이/너비 우선 탐색(DFS/BFS), 연결 성분, DAG 위상 정렬, 최소 신장 트리(크루스칼, 프림), 최단 경로(다익스트라, 플로이드-워셜)를 완성형 코드와 분석합니다.',
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
