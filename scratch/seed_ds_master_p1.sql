-- Full Data Structure Master Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'data-structure',
  'ch01-ds-introduction-and-time-complexity',
  '자료구조의 개념과 알고리즘 효율성 분석: Big-O 표기법, 시간/공간 복잡도 & 점근적 분석',
  '프로그램의 데이터 저장 방식인 자료구조(Data Structure)의 필요성과 알고리즘 실행 효율성을 수학적으로 측정하는 Big-O 점근적 분석을 다룹니다.',
  '**자료구조(Data Structure)**란 메모리 공간 상에 데이터를 효율적으로 저장, 조직, 관리하는 구조적 방식입니다. 효율적인 자료구조 선택은 프로그램의 실행 속도와 메모리 사용량을 좌우합니다.

---

## 1. 자료구조 및 복잡도 용어 사전 (Glossary)

- **ADT (Abstract Data Type, 추상 데이터 타입)**: 데이터의 구체적인 메모리 구현 방식을 숨기고, 데이터 구조가 지원하는 연산(Operation)의 인터페이스만을 정의한 개념입니다.
- **Big-O Notation (빅오 표기법)**: 알고리즘의 최악의 경우(Worst-Case) 입력 크기 $N$에 따른 연산 횟수의 증가율을 상한선 점근 기호로 표현한 척도입니다.
- **Time Complexity (시간 복잡도)**: 입력값의 크기 $N$에 따라 알고리즘이 완료되는 데 걸리는 총 연산 수행 횟수입니다.
- **Space Complexity (공간 복잡도)**: 알고리즘을 실행할 때 추가로 요구되는 메모리 공간의 양입니다.

---

## 2. 주요 시간 복잡도 계층 비교표

| 복잡도 표기 | 명칭 (Name) | 대표적인 알고리즘 / 연산 | $N=1,000$ 시 연산 횟수 |
| :--- | :--- | :--- | :---: |
| $O(1)$ | 상수 시간 (Constant) | 배열 인덱스 접근, 파이썬 딕셔너리 키 조회 | 1 |
| $O(log N)$ | 로그 시간 (Logarithmic) | 이진 탐색 (Binary Search), 힙 삽입/삭제 | $approx 10$ |
| $O(N)$ | 선형 시간 (Linear) | 배열 전체 순회, 단일 연결 리스트 검색 | 1,000 |
| $O(N log N)$ | 선형 로그 시간 | 병합 정렬 (Merge Sort), 퀵 정렬 평균 | $approx 10,000$ |
| $O(N^2)$ | 이차 시간 (Quadratic) | 이중 루프, 버블 정렬, 선택 정렬 | $1,000,000$ |
| $O(2^N)$ | 지수 시간 (Exponential) | 재귀적 피보나치 수열 calculation | $approx 10^{301}$ |

---

## 3. 파이썬 기본 자료구조 연산 시간 복잡도 코드 측정

```python
import time

# O(1) 접근 vs O(N) 검색 실습
data_list = list(range(10_000_000))
data_set = set(data_list)

# 1. List 검색 (O(N))
start = time.time()
exists_list = 9_999_999 in data_list
end = time.time()
print(f"List ''in'' 검색 소요 시간: {(end - start)*1000:.3f}ms")

# 2. Set 검색 (O(1))
start = time.time()
exists_set = 9_999_999 in data_set
end = time.time()
print(f"Set ''in'' 검색 소요 시간: {(end - start)*1000:.3f}ms")
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Big-O 표기법에서 계수와 낮은 차수의 항을 무시하는 이유는 무엇인가요?**
A. 입력 크기 $N$이 무한히 커짐에 따라 최고차항이 연산 시간에 미치는 영향이 절대적이므로, 상한선의 증가 추세를 직관적으로 비교하기 위해 상수 계수와 하위 항을 무시(점근적 분석)합니다.
',
  '<p>**자료구조(Data Structure)**란 메모리 공간 상에 데이터를 효율적으로 저장, 조직, 관리하는 구조적 방식입니다. 효율적인 자료구조 선택은 프로그램의 실행 속도와 메모리 사용량을 좌우합니다.</p>
<hr>
<h2>1. 자료구조 및 복잡도 용어 사전 (Glossary)</h2>
<ul>
<li><strong>ADT (Abstract Data Type, 추상 데이터 타입)</strong>: 데이터의 구체적인 메모리 구현 방식을 숨기고, 데이터 구조가 지원하는 연산(Operation)의 인터페이스만을 정의한 개념입니다.</li>
<li><strong>Big-O Notation (빅오 표기법)</strong>: 알고리즘의 최악의 경우(Worst-Case) 입력 크기 $N$에 따른 연산 횟수의 증가율을 상한선 점근 기호로 표현한 척도입니다.</li>
<li><strong>Time Complexity (시간 복잡도)</strong>: 입력값의 크기 $N$에 따라 알고리즘이 완료되는 데 걸리는 총 연산 수행 횟수입니다.</li>
<li><strong>Space Complexity (공간 복잡도)</strong>: 알고리즘을 실행할 때 추가로 요구되는 메모리 공간의 양입니다.</li>
</ul>
<hr>
<h2>2. 주요 시간 복잡도 계층 비교표</h2>
<table>
<thead>
<tr>
<th align="left">복잡도 표기</th>
<th align="left">명칭 (Name)</th>
<th align="left">대표적인 알고리즘 / 연산</th>
<th align="center">$N=1,000$ 시 연산 횟수</th>
</tr>
</thead>
<tbody><tr>
<td align="left">$O(1)$</td>
<td align="left">상수 시간 (Constant)</td>
<td align="left">배열 인덱스 접근, 파이썬 딕셔너리 키 조회</td>
<td align="center">1</td>
</tr>
<tr>
<td align="left">$O(log N)$</td>
<td align="left">로그 시간 (Logarithmic)</td>
<td align="left">이진 탐색 (Binary Search), 힙 삽입/삭제</td>
<td align="center">$approx 10$</td>
</tr>
<tr>
<td align="left">$O(N)$</td>
<td align="left">선형 시간 (Linear)</td>
<td align="left">배열 전체 순회, 단일 연결 리스트 검색</td>
<td align="center">1,000</td>
</tr>
<tr>
<td align="left">$O(N log N)$</td>
<td align="left">선형 로그 시간</td>
<td align="left">병합 정렬 (Merge Sort), 퀵 정렬 평균</td>
<td align="center">$approx 10,000$</td>
</tr>
<tr>
<td align="left">$O(N^2)$</td>
<td align="left">이차 시간 (Quadratic)</td>
<td align="left">이중 루프, 버블 정렬, 선택 정렬</td>
<td align="center">$1,000,000$</td>
</tr>
<tr>
<td align="left">$O(2^N)$</td>
<td align="left">지수 시간 (Exponential)</td>
<td align="left">재귀적 피보나치 수열 calculation</td>
<td align="center">$approx 10^{301}$</td>
</tr>
</tbody></table>
<hr>
<h2>3. 파이썬 기본 자료구조 연산 시간 복잡도 코드 측정</h2>
<pre><code class="language-python">import time

# O(1) 접근 vs O(N) 검색 실습
data_list = list(range(10_000_000))
data_set = set(data_list)

# 1. List 검색 (O(N))
start = time.time()
exists_list = 9_999_999 in data_list
end = time.time()
print(f&quot;List &#39;in&#39; 검색 소요 시간: {(end - start)*1000:.3f}ms&quot;)

# 2. Set 검색 (O(1))
start = time.time()
exists_set = 9_999_999 in data_set
end = time.time()
print(f&quot;Set &#39;in&#39; 검색 소요 시간: {(end - start)*1000:.3f}ms&quot;)
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Big-O 표기법에서 계수와 낮은 차수의 항을 무시하는 이유는 무엇인가요?</strong>
A. 입력 크기 $N$이 무한히 커짐에 따라 최고차항이 연산 시간에 미치는 영향이 절대적이므로, 상한선의 증가 추세를 직관적으로 비교하기 위해 상수 계수와 하위 항을 무시(점근적 분석)합니다.</p>
',
  'published',
  '자료구조 개요 - Big-O 표기법, 시간 복잡도, 공간 복잡도 & 파이썬 연산 성능',
  '자료구조의 정의, 추상 데이터 타입(ADT), 점근적 분석(Big-O, Big-Omega, Big-Theta), 시간 복잡도 및 파이썬 기본 자료구조(List, Dict)의 연산 복잡도를 배웁니다.',
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
  'ch02-arrays-tuples-and-dynamic-array-memory',
  '연속 메모리 구조: 정적 배열, 파이썬 동적 배열(Dynamic Array) 재할당과 메모리 구조',
  '메모리 상에 연속적으로 데이터를 배치하는 정적/동적 배열의 원리와 파이썬 리스트(PyListObject)의 동적 메모리 재할당 메커니즘을 심도 있게 다룹니다.',
  '메모리의 연속된 블록에 데이터를 순차 배치하는 **배열(Array)**과 파이썬 리스트의 **동적 배열(Dynamic Array)** 메모리 메커니즘을 학습합니다.

---

## 1. 배열 및 메모리 용어 사전 (Glossary)

- **Static Array (정적 배열)**: C/C++ 언어처럼 선언 시점에 고정된 메모리 크기를 할당받는 배열입니다.
- **Dynamic Array (동적 배열)**: 요소를 추가함에 따라 가용 메모리가 채워지면 자동으로 더 큰 메모리 공간을 확보하여 요소를 재할당하는 배열입니다.
- **Amortized Time Complexity (분할 상쇄 시간 복잡도)**: 동적 배열에 요소를 `append()` 할 때 가끔 일어나는 $O(N)$ 메모리 재할당 비용을 전체 $N$개 요소 추가 작업으로 나누어 평균 $O(1)$로 평가하는 분석법입니다.

---

## 2. 파이썬 리스트 동적 용어 확장 메커니즘 관찰 코드

```python
import sys

# 파이썬 리스트의 가용 메모리 바이트 증가 관찰
dynamic_list = []
prev_size = sys.getsizeof(dynamic_list)

print(f"초기 빈 리스트 바이트 크기: {prev_size}")

for i in range(20):
    dynamic_list.append(i)
    current_size = sys.getsizeof(dynamic_list)
    if current_size != prev_size:
        print(f"요소 개수: {i+1:2d}개 -> 메모리 크기 재할당: {current_size} bytes")
        prev_size = current_size
```
',
  '<p>메모리의 연속된 블록에 데이터를 순차 배치하는 **배열(Array)**과 파이썬 리스트의 <strong>동적 배열(Dynamic Array)</strong> 메모리 메커니즘을 학습합니다.</p>
<hr>
<h2>1. 배열 및 메모리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Static Array (정적 배열)</strong>: C/C++ 언어처럼 선언 시점에 고정된 메모리 크기를 할당받는 배열입니다.</li>
<li><strong>Dynamic Array (동적 배열)</strong>: 요소를 추가함에 따라 가용 메모리가 채워지면 자동으로 더 큰 메모리 공간을 확보하여 요소를 재할당하는 배열입니다.</li>
<li><strong>Amortized Time Complexity (분할 상쇄 시간 복잡도)</strong>: 동적 배열에 요소를 <code>append()</code> 할 때 가끔 일어나는 $O(N)$ 메모리 재할당 비용을 전체 $N$개 요소 추가 작업으로 나누어 평균 $O(1)$로 평가하는 분석법입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 리스트 동적 용어 확장 메커니즘 관찰 코드</h2>
<pre><code class="language-python">import sys

# 파이썬 리스트의 가용 메모리 바이트 증가 관찰
dynamic_list = []
prev_size = sys.getsizeof(dynamic_list)

print(f&quot;초기 빈 리스트 바이트 크기: {prev_size}&quot;)

for i in range(20):
    dynamic_list.append(i)
    current_size = sys.getsizeof(dynamic_list)
    if current_size != prev_size:
        print(f&quot;요소 개수: {i+1:2d}개 -&gt; 메모리 크기 재할당: {current_size} bytes&quot;)
        prev_size = current_size
</code></pre>
',
  'published',
  '자료구조 - 정적 배열 vs 파이썬 동적 배열(PyListObject) & 메모리 재할당',
  '연속 메모리 할당 방식의 정적 배열(Static Array), 파이썬 동적 배열(PyListObject)의 가용 용량 확장(Doubling), 메모리 연속성 및 투 포인터(Two Pointer) 알고리즘을 배웁니다.',
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
  'ch03-singly-linked-list-and-memory-pointers',
  '단일 연결 리스트(Singly Linked List) 구조: 포인터 노드 연결, 삽입, 삭제 및 순회',
  '각 노드가 데이터와 다음 노드의 주소를 가리키는 포인터로 구성되는 단일 연결 리스트의 핵심 구조와 삽입, 삭제, 순회 파이썬 코드를 다룹니다.',
  '메모리 상에 흩어져 있는 노드들을 포인터 참조로 연결하는 **단일 연결 리스트(Singly Linked List)**의 동작 원리와 파이썬 구현을 다룹니다.

---

## 1. 연결 리스트 용어 사전 (Glossary)

- **Node (노드)**: 실제 데이터 값(`data`)과 다음 노드의 메모리 참조 주소(`next`)를 담고 있는 연결 리스트의 기본 단위입니다.
- **Head Pointer**: 연결 리스트의 첫 번째 노드를 가리키는 시작 포인터입니다.
- **Non-contiguous Memory**: 배열과 달리 메모리 상에 요소들이 연속 배치되지 않고 포인터로 연결된 구조적 특징입니다.

---

## 2. 파이썬 단일 연결 리스트 완벽 구현 코드

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = new_node

    def reverse(self):
        prev = None
        curr = self.head
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        self.head = prev

    def display(self):
        elems = []
        curr = self.head
        while curr:
            elems.append(str(curr.data))
            curr = curr.next
        print(" -> ".join(elems) + " -> None")

sll = SinglyLinkedList()
sll.append(10)
sll.append(20)
sll.append(30)
print("원래 연결 리스트:")
sll.display()
sll.reverse()
print("역순 뒤집기 후 연결 리스트:")
sll.display()
```
',
  '<p>메모리 상에 흩어져 있는 노드들을 포인터 참조로 연결하는 **단일 연결 리스트(Singly Linked List)**의 동작 원리와 파이썬 구현을 다룹니다.</p>
<hr>
<h2>1. 연결 리스트 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Node (노드)</strong>: 실제 데이터 값(<code>data</code>)과 다음 노드의 메모리 참조 주소(<code>next</code>)를 담고 있는 연결 리스트의 기본 단위입니다.</li>
<li><strong>Head Pointer</strong>: 연결 리스트의 첫 번째 노드를 가리키는 시작 포인터입니다.</li>
<li><strong>Non-contiguous Memory</strong>: 배열과 달리 메모리 상에 요소들이 연속 배치되지 않고 포인터로 연결된 구조적 특징입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 단일 연결 리스트 완벽 구현 코드</h2>
<pre><code class="language-python">class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = new_node

    def reverse(self):
        prev = None
        curr = self.head
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        self.head = prev

    def display(self):
        elems = []
        curr = self.head
        while curr:
            elems.append(str(curr.data))
            curr = curr.next
        print(&quot; -&gt; &quot;.join(elems) + &quot; -&gt; None&quot;)

sll = SinglyLinkedList()
sll.append(10)
sll.append(20)
sll.append(30)
print(&quot;원래 연결 리스트:&quot;)
sll.display()
sll.reverse()
print(&quot;역순 뒤집기 후 연결 리스트:&quot;)
sll.display()
</code></pre>
',
  'published',
  '자료구조 - 단일 연결 리스트(Singly Linked List) 노드 포인터 구현 & 역순 뒤집기',
  '메모리의 비연속적 노드 연결 구조인 단일 연결 리스트(Singly Linked List)의 Node 클래스, Head 포인터, 맨 앞/끝/중간 삽입 삭제 및 역순(Reverse) 뒤집기 알고리즘을 배웁니다.',
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
  'ch04-doubly-and-circular-linked-lists',
  '이중 연결 리스트(Doubly Linked List)와 원형 연결 리스트(Circular Linked List)',
  '이전 노드(prev)와 다음 노드(next) 포인터를 모두 가지고 있어 양방향 탐색이 가능한 이중 연결 리스트와 원형 연결 리스트를 배웁니다.',
  '노드가 양방향 노드 주소(`prev`, `next`)를 모두 소유하는 **이중 연결 리스트(Doubly Linked List)**와 끝 노드가 시작 노드를 연결하는 **원형 연결 리스트(Circular Linked List)**를 학습합니다.',
  '<p>노드가 양방향 노드 주소(<code>prev</code>, <code>next</code>)를 모두 소유하는 **이중 연결 리스트(Doubly Linked List)**와 끝 노드가 시작 노드를 연결하는 **원형 연결 리스트(Circular Linked List)**를 학습합니다.</p>
',
  'published',
  '자료구조 - 이중 연결 리스트(Doubly Linked List) & 원형 연결 리스트 구현',
  '양방향 노드 참조(prev, next)를 갖는 이중 연결 리스트(Doubly Linked List)와 마지막 노드가 헤드를 가리키는 원형 연결 리스트(Circular Linked List)의 파이썬 구현을 배웁니다.',
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
