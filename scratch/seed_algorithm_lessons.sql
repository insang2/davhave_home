-- Seed Algorithm Lessons in D1 DB

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'algorithm',
  'ch01-stack',
  '스택(Stack)의 개념과 구현: LIFO 원리와 활용',
  '후입선출(LIFO) 방식을 따르는 선형 자료구조인 스택의 핵심 개념, 주요 연산(push, pop, peek), 함수 호출 스택 및 수식 괄호 검사 알고리즘을 학습합니다.',
  '# 스택(Stack)의 개념과 구현: LIFO 원리와 활용

**스택(Stack)**은 한쪽 끝에서만 데이터의 삽입과 삭제가 일어나는 선형 자료구조입니다. 가장 나중에 들어간 데이터가 가장 먼저 나오는 **후입선출(LIFO, Last-In First-Out)** 메커니즘을 따릅니다.

---

## 1. 스택의 핵심 개념과 LIFO 메커니즘

스택은 접시를 차곡차곡 쌓아 올린 형태와 같습니다. 새로운 접시는 맨 위에 쌓이고, 사용할 때도 맨 위의 접시부터 꺼내게 됩니다.

- **상단(Top)**: 데이터의 삽입과 삭제가 이루어지는 스택의 끝 위치.
- **하단(Bottom)**: 가장 먼저 들어간 데이터가 위치하는 스택의 바닥.
- **LIFO (Last-In First-Out)**: 마지막에 들어온(Last-In) 데이터가 가장 먼저 나가는(First-Out) 구조.

---

## 2. 스택의 주요 연산

스택이 제공하는 기본 연산은 다음과 같습니다.

| 연산 (Operation) | 설명 | 시간 복잡도 |
| :--- | :--- | :--- |
| `push(item)` | 스택의 가장 위에 새로운 항목을 추가 | $O(1)$ |
| `pop()` | 스택의 가장 위에 있는 항목을 제거하고 반환 | $O(1)$ |
| `peek()` / `top()` | 스택의 가장 위에 있는 항목을 제거하지 않고 조회 | $O(1)$ |
| `isEmpty()` | 스택이 비어있는지 여부 확인 | $O(1)$ |
| `isFull()` | 고정 크기 스택의 경우 스택이 가득 찼는지 확인 | $O(1)$ |

---

## 3. 파이썬 기반 스택 구현

파이썬에서는 리스트(List)의 `append()`와 `pop()` 메서드를 사용하거나, `collections.deque`를 활용하여 스택을 효율적으로 구현할 수 있습니다.

```python
class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._items[-1]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)

# 사용 예시
s = Stack()
s.push(10)
s.push(20)
print(s.peek())  # 20
print(s.pop())   # 20
print(s.pop())   # 10
```

---

## 4. 대표적인 스택 활용 사례

1. **함수 호출 스택 (Call Stack)**: 프로그램 실행 중 함수가 호출될 때 복귀 주소와 지역 변수를 스택에 저장합니다.
2. **웹 브라우저 뒤로 가기 / 앞으로 가기**: 방문한 페이지 이력을 두 개의 스택으로 관리합니다.
3. **수식의 괄호 쌍 검사**: 열린 괄호 `(`, `{`, `[`를 만날 때 스택에 `push`하고, 닫힌 괄호를 만날 때 `pop`하여 짝이 맞는지 검사합니다.
4. **텍스트 에디터 Undo(실행 취소)**: 작업 이력을 스택에 기록하여 최신 작업부터 취소합니다.

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 스택 오버플로(Stack Overflow)란 무엇인가요?**
A. 고정된 크기의 스택 메모리 공간이 가득 찬 상태에서 추가로 데이터를 `push`하려고 할 때 발생하는 오류입니다. 재귀 함수가 무한 호출될 때 흔히 발생합니다.

**Q. 배열 기반 스택과 연결 리스트 기반 스택의 차이는 무엇인가요?**
A. 배열 기반은 메모리가 연속적이고 접근이 빠르지만 크기가 고정될 수 있습니다. 연결 리스트 기반은 동적으로 크기를 늘릴 수 있으나 포인터 저장 메모리가 추가로 소요됩니다.
',
  '<h1>스택(Stack)의 개념과 구현: LIFO 원리와 활용</h1>
<p>**스택(Stack)**은 한쪽 끝에서만 데이터의 삽입과 삭제가 일어나는 선형 자료구조입니다. 가장 나중에 들어간 데이터가 가장 먼저 나오는 <strong>후입선출(LIFO, Last-In First-Out)</strong> 메커니즘을 따릅니다.</p>
<hr>
<h2>1. 스택의 핵심 개념과 LIFO 메커니즘</h2>
<p>스택은 접시를 차곡차곡 쌓아 올린 형태와 같습니다. 새로운 접시는 맨 위에 쌓이고, 사용할 때도 맨 위의 접시부터 꺼내게 됩니다.</p>
<ul>
<li><strong>상단(Top)</strong>: 데이터의 삽입과 삭제가 이루어지는 스택의 끝 위치.</li>
<li><strong>하단(Bottom)</strong>: 가장 먼저 들어간 데이터가 위치하는 스택의 바닥.</li>
<li><strong>LIFO (Last-In First-Out)</strong>: 마지막에 들어온(Last-In) 데이터가 가장 먼저 나가는(First-Out) 구조.</li>
</ul>
<hr>
<h2>2. 스택의 주요 연산</h2>
<p>스택이 제공하는 기본 연산은 다음과 같습니다.</p>
<table>
<thead>
<tr>
<th align="left">연산 (Operation)</th>
<th align="left">설명</th>
<th align="left">시간 복잡도</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><code>push(item)</code></td>
<td align="left">스택의 가장 위에 새로운 항목을 추가</td>
<td align="left">$O(1)$</td>
</tr>
<tr>
<td align="left"><code>pop()</code></td>
<td align="left">스택의 가장 위에 있는 항목을 제거하고 반환</td>
<td align="left">$O(1)$</td>
</tr>
<tr>
<td align="left"><code>peek()</code> / <code>top()</code></td>
<td align="left">스택의 가장 위에 있는 항목을 제거하지 않고 조회</td>
<td align="left">$O(1)$</td>
</tr>
<tr>
<td align="left"><code>isEmpty()</code></td>
<td align="left">스택이 비어있는지 여부 확인</td>
<td align="left">$O(1)$</td>
</tr>
<tr>
<td align="left"><code>isFull()</code></td>
<td align="left">고정 크기 스택의 경우 스택이 가득 찼는지 확인</td>
<td align="left">$O(1)$</td>
</tr>
</tbody></table>
<hr>
<h2>3. 파이썬 기반 스택 구현</h2>
<p>파이썬에서는 리스트(List)의 <code>append()</code>와 <code>pop()</code> 메서드를 사용하거나, <code>collections.deque</code>를 활용하여 스택을 효율적으로 구현할 수 있습니다.</p>
<pre><code class="language-python">class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError(&quot;Stack is empty&quot;)
        return self._items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError(&quot;Stack is empty&quot;)
        return self._items[-1]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)

# 사용 예시
s = Stack()
s.push(10)
s.push(20)
print(s.peek())  # 20
print(s.pop())   # 20
print(s.pop())   # 10
</code></pre>
<hr>
<h2>4. 대표적인 스택 활용 사례</h2>
<ol>
<li><strong>함수 호출 스택 (Call Stack)</strong>: 프로그램 실행 중 함수가 호출될 때 복귀 주소와 지역 변수를 스택에 저장합니다.</li>
<li><strong>웹 브라우저 뒤로 가기 / 앞으로 가기</strong>: 방문한 페이지 이력을 두 개의 스택으로 관리합니다.</li>
<li><strong>수식의 괄호 쌍 검사</strong>: 열린 괄호 <code>(</code>, <code>{</code>, <code>[</code>를 만날 때 스택에 <code>push</code>하고, 닫힌 괄호를 만날 때 <code>pop</code>하여 짝이 맞는지 검사합니다.</li>
<li><strong>텍스트 에디터 Undo(실행 취소)</strong>: 작업 이력을 스택에 기록하여 최신 작업부터 취소합니다.</li>
</ol>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 스택 오버플로(Stack Overflow)란 무엇인가요?</strong>
A. 고정된 크기의 스택 메모리 공간이 가득 찬 상태에서 추가로 데이터를 <code>push</code>하려고 할 때 발생하는 오류입니다. 재귀 함수가 무한 호출될 때 흔히 발생합니다.</p>
<p><strong>Q. 배열 기반 스택과 연결 리스트 기반 스택의 차이는 무엇인가요?</strong>
A. 배열 기반은 메모리가 연속적이고 접근이 빠르지만 크기가 고정될 수 있습니다. 연결 리스트 기반은 동적으로 크기를 늘릴 수 있으나 포인터 저장 메모리가 추가로 소요됩니다.</p>
',
  'published',
  '스택(Stack) 자료구조 완벽 정리 - LIFO 원리, 연산 및 파이썬 구현',
  '스택(Stack) 자료구조의 후입선출(LIFO) 원리, push/pop/peek 연산, 함수 호출 스택, 괄호 검사 알고리즘과 코드 구현법을 상세히 다룹니다.',
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
  'algorithm',
  'ch02-queue',
  '큐(Queue) 자료구조: FIFO 원리, 원형 큐, 우선순위 큐',
  '가장 먼저 들어온 데이터가 먼저 나가는 FIFO 구조인 큐(Queue)의 기초, 선형 큐의 한계를 극복하는 원형 큐, Deque 및 우선순위 큐의 구조를 상세히 다룹니다.',
  '# 큐(Queue) 자료구조: FIFO 원리, 원형 큐, 우선순위 큐

**큐(Queue)**는 데이터의 삽입과 삭제가 서로 다른 끝에서 일어나는 선형 자료구조입니다. 먼저 들어온 데이터가 먼저 나가는 **선입선출(FIFO, First-In First-Out)** 구조를 가집니다.

---

## 1. 큐의 핵심 용어와 FIFO 원리

줄 서기(Waiting line)처럼 먼저 들어온 요청이나 데이터가 먼저 처리되는 구조입니다.

- **전단(Front)**: 데이터가 삭제(출력)되는 위치.
- **후단(Rear)**: 데이터가 삽입(입력)되는 위치.
- **FIFO (First-In First-Out)**: 먼저 들어간 데이터가 먼저 나오는 방식.

---

## 2. 큐의 기본 연산 및 변종 구조

| 구 분 | 핵심 특징 및 연산 |
| :--- | :--- |
| **기본 연산** | `enqueue(item)`(후단 삽입), `dequeue()`(전단 삭제), `peek()`, `isEmpty()` |
| **선형 큐 (Linear Queue)** | 배열로 구현 시 삭제 연산 후 앞쪽 공간이 낭비되는 이동 오버헤드 발생 |
| **원형 큐 (Circular Queue)** | 배열의 처음과 끝을 연결하여 메모리를 효율적으로 재사용하는 큐 (`rear = (rear + 1) % capacity`) |
| **덱 (Deque, Double-Ended Queue)** | 양쪽 끝(Front, Rear) 모두에서 삽입과 삭제가 가능한 확장 큐 |
| **우선순위 큐 (Priority Queue)** | 들어온 순서와 상관없이 데이터의 우선순위에 따라 먼저 출력되는 큐 (보통 힙(Heap)으로 구현) |

---

## 3. 원형 큐(Circular Queue)의 구현 원리

선형 큐의 공간 재사용 문제를 극복하기 위해 모듈로 연산(`%`)을 활용합니다.

```python
class CircularQueue:
    def __init__(self, capacity=5):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = 0
        self.rear = 0

    def is_empty(self):
        return self.front == self.rear

    def is_full(self):
        return (self.rear + 1) % self.capacity == self.front

    def enqueue(self, item):
        if self.is_full():
            raise OverflowError("Queue is full")
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = item

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        self.front = (self.front + 1) % self.capacity
        item = self.queue[self.front]
        self.queue[self.front] = None
        return item
```

---

## 4. 실무에서의 큐 활용 분야

1. **프로세스 및 스케줄링**: 운영체제의 CPU 작업 스케줄링(RR 스케줄링), 프린터 인쇄 대기열.
2. **네트워크 버퍼**: 패킷 수신 대기 버퍼, 비디오 스트리밍 데이터 버퍼링.
3. **너비 우선 탐색 (BFS)**: 그래프 및 트리 탐색 알고리즘에서 방문 예정 노드 관리.

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 파이썬 리스트로 큐를 사용할 때의 성능상 문제는 무엇인가요?**
A. 리스트의 `pop(0)` 연산은 첫 항목 삭제 후 나머지 $N-1$개 요소를 모두 앞으로 당겨야 하므로 $O(N)$의 시간 복잡도가 소요됩니다. 따라서 $O(1)$ 연산을 보장하는 `collections.deque`를 사용해야 합니다.
',
  '<h1>큐(Queue) 자료구조: FIFO 원리, 원형 큐, 우선순위 큐</h1>
<p>**큐(Queue)**는 데이터의 삽입과 삭제가 서로 다른 끝에서 일어나는 선형 자료구조입니다. 먼저 들어온 데이터가 먼저 나가는 <strong>선입선출(FIFO, First-In First-Out)</strong> 구조를 가집니다.</p>
<hr>
<h2>1. 큐의 핵심 용어와 FIFO 원리</h2>
<p>줄 서기(Waiting line)처럼 먼저 들어온 요청이나 데이터가 먼저 처리되는 구조입니다.</p>
<ul>
<li><strong>전단(Front)</strong>: 데이터가 삭제(출력)되는 위치.</li>
<li><strong>후단(Rear)</strong>: 데이터가 삽입(입력)되는 위치.</li>
<li><strong>FIFO (First-In First-Out)</strong>: 먼저 들어간 데이터가 먼저 나오는 방식.</li>
</ul>
<hr>
<h2>2. 큐의 기본 연산 및 변종 구조</h2>
<table>
<thead>
<tr>
<th align="left">구 분</th>
<th align="left">핵심 특징 및 연산</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>기본 연산</strong></td>
<td align="left"><code>enqueue(item)</code>(후단 삽입), <code>dequeue()</code>(전단 삭제), <code>peek()</code>, <code>isEmpty()</code></td>
</tr>
<tr>
<td align="left"><strong>선형 큐 (Linear Queue)</strong></td>
<td align="left">배열로 구현 시 삭제 연산 후 앞쪽 공간이 낭비되는 이동 오버헤드 발생</td>
</tr>
<tr>
<td align="left"><strong>원형 큐 (Circular Queue)</strong></td>
<td align="left">배열의 처음과 끝을 연결하여 메모리를 효율적으로 재사용하는 큐 (<code>rear = (rear + 1) % capacity</code>)</td>
</tr>
<tr>
<td align="left"><strong>덱 (Deque, Double-Ended Queue)</strong></td>
<td align="left">양쪽 끝(Front, Rear) 모두에서 삽입과 삭제가 가능한 확장 큐</td>
</tr>
<tr>
<td align="left"><strong>우선순위 큐 (Priority Queue)</strong></td>
<td align="left">들어온 순서와 상관없이 데이터의 우선순위에 따라 먼저 출력되는 큐 (보통 힙(Heap)으로 구현)</td>
</tr>
</tbody></table>
<hr>
<h2>3. 원형 큐(Circular Queue)의 구현 원리</h2>
<p>선형 큐의 공간 재사용 문제를 극복하기 위해 모듈로 연산(<code>%</code>)을 활용합니다.</p>
<pre><code class="language-python">class CircularQueue:
    def __init__(self, capacity=5):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = 0
        self.rear = 0

    def is_empty(self):
        return self.front == self.rear

    def is_full(self):
        return (self.rear + 1) % self.capacity == self.front

    def enqueue(self, item):
        if self.is_full():
            raise OverflowError(&quot;Queue is full&quot;)
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = item

    def dequeue(self):
        if self.is_empty():
            raise IndexError(&quot;Queue is empty&quot;)
        self.front = (self.front + 1) % self.capacity
        item = self.queue[self.front]
        self.queue[self.front] = None
        return item
</code></pre>
<hr>
<h2>4. 실무에서의 큐 활용 분야</h2>
<ol>
<li><strong>프로세스 및 스케줄링</strong>: 운영체제의 CPU 작업 스케줄링(RR 스케줄링), 프린터 인쇄 대기열.</li>
<li><strong>네트워크 버퍼</strong>: 패킷 수신 대기 버퍼, 비디오 스트리밍 데이터 버퍼링.</li>
<li><strong>너비 우선 탐색 (BFS)</strong>: 그래프 및 트리 탐색 알고리즘에서 방문 예정 노드 관리.</li>
</ol>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬 리스트로 큐를 사용할 때의 성능상 문제는 무엇인가요?</strong>
A. 리스트의 <code>pop(0)</code> 연산은 첫 항목 삭제 후 나머지 $N-1$개 요소를 모두 앞으로 당겨야 하므로 $O(N)$의 시간 복잡도가 소요됩니다. 따라서 $O(1)$ 연산을 보장하는 <code>collections.deque</code>를 사용해야 합니다.</p>
',
  'published',
  '큐(Queue) 자료구조 총정리 - FIFO 원리, 원형 큐, Deque, 우선순위 큐',
  '선입선출(FIFO) 기반 큐의 동작 메커니즘, 선형 큐의 오버플로 문제 극복을 위한 원형 큐(Circular Queue), Deque, 우선순위 큐(Priority Queue) 개념을 정리합니다.',
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
  'algorithm',
  'ch03-linked-list',
  '연결 리스트(Linked List): 단일, 이중, 원형 연결 리스트',
  '노드(Node)와 포인터(Pointer)의 연결로 구성되는 동적 자료구조인 연결 리스트의 원리, 배열과의 차이점, 단일/이중/원형 연결 리스트의 특징을 학습합니다.',
  '# 연결 리스트(Linked List): 단일, 이중, 원형 연결 리스트

**연결 리스트(Linked List)**는 각 원소가 데이터와 다음 원소를 가리키는 주소(포인터)를 포함하는 **노드(Node)**들로 구성된 동적 선형 자료구조입니다.

---

## 1. 배열(Array) vs 연결 리스트(Linked List) 비교

| 특징 | 배열 (Array) | 연결 리스트 (Linked List) |
| :--- | :--- | :--- |
| **메모리 할당** | 정적/연속된 메모리 공간 | 동적/비연속적 메모리 공간 |
| **인덱스 접근 (Access)** | $O(1)$ (임의 접근 가능) | $O(N)$ (순차 탐색 필요) |
| **삽입 / 삭제 (Insertion/Deletion)** | $O(N)$ (요소 Shift 비용 발생) | $O(1)$ (포인터 재연결, 위치 탐색 후) |
| **크기 변경** | 크기 변경 불가능/재할당 오버헤드 | 동적으로 자유롭게 확장 가능 |

---

## 2. 연결 리스트의 종류

1. **단일 연결 리스트 (Singly Linked List)**: 각 노드가 다음 노드의 포인터(`next`)만 갖는 구조.
2. **이중 연결 리스트 (Doubly Linked List)**: 각 노드가 이전 노드(`prev`)와 다음 노드(`next`) 포인터를 모두 갖는 구조. 양방향 탐색 가능.
3. **원형 연결 리스트 (Circular Linked List)**: 마지막 노드의 `next` 포인터가 다시 첫 번째 노드(Head)를 가리키는 구조.

---

## 3. 단일 연결 리스트 파이썬 구현

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

    def display(self):
        elements = []
        curr = self.head
        while curr:
            elements.append(str(curr.data))
            curr = curr.next
        print(" -> ".join(elements))

# 실행
ll = SinglyLinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.display()  # 10 -> 20 -> 30
```

---

## 4. 주요 활용 및 장단점

- **장점**: 사전 메모리 크기 할당 불필요, 데이터 삽입 및 삭제 시 타 요소 이동 없음.
- **단점**: 포인터를 저장을 위한 추가 메모리 필요, 인덱스를 통한 직접 접근 불가.
- **활용 사례**: 스택/큐/그래프 등의 자료구조 구현 기반, 이미지 슬라이드쇼, 메모리 관리 파티션 목록.

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 이중 연결 리스트가 단일 연결 리스트보다 유리한 경우는 언제인가요?**
A. 특정 노드의 이전 노드로 되돌아가거나 양방향으로 순회해야 할 때 효율적입니다. 단, 포인터 저장 공간이 노드당 2개씩 필요합니다.
',
  '<h1>연결 리스트(Linked List): 단일, 이중, 원형 연결 리스트</h1>
<p>**연결 리스트(Linked List)**는 각 원소가 데이터와 다음 원소를 가리키는 주소(포인터)를 포함하는 **노드(Node)**들로 구성된 동적 선형 자료구조입니다.</p>
<hr>
<h2>1. 배열(Array) vs 연결 리스트(Linked List) 비교</h2>
<table>
<thead>
<tr>
<th align="left">특징</th>
<th align="left">배열 (Array)</th>
<th align="left">연결 리스트 (Linked List)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>메모리 할당</strong></td>
<td align="left">정적/연속된 메모리 공간</td>
<td align="left">동적/비연속적 메모리 공간</td>
</tr>
<tr>
<td align="left"><strong>인덱스 접근 (Access)</strong></td>
<td align="left">$O(1)$ (임의 접근 가능)</td>
<td align="left">$O(N)$ (순차 탐색 필요)</td>
</tr>
<tr>
<td align="left"><strong>삽입 / 삭제 (Insertion/Deletion)</strong></td>
<td align="left">$O(N)$ (요소 Shift 비용 발생)</td>
<td align="left">$O(1)$ (포인터 재연결, 위치 탐색 후)</td>
</tr>
<tr>
<td align="left"><strong>크기 변경</strong></td>
<td align="left">크기 변경 불가능/재할당 오버헤드</td>
<td align="left">동적으로 자유롭게 확장 가능</td>
</tr>
</tbody></table>
<hr>
<h2>2. 연결 리스트의 종류</h2>
<ol>
<li><strong>단일 연결 리스트 (Singly Linked List)</strong>: 각 노드가 다음 노드의 포인터(<code>next</code>)만 갖는 구조.</li>
<li><strong>이중 연결 리스트 (Doubly Linked List)</strong>: 각 노드가 이전 노드(<code>prev</code>)와 다음 노드(<code>next</code>) 포인터를 모두 갖는 구조. 양방향 탐색 가능.</li>
<li><strong>원형 연결 리스트 (Circular Linked List)</strong>: 마지막 노드의 <code>next</code> 포인터가 다시 첫 번째 노드(Head)를 가리키는 구조.</li>
</ol>
<hr>
<h2>3. 단일 연결 리스트 파이썬 구현</h2>
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

    def display(self):
        elements = []
        curr = self.head
        while curr:
            elements.append(str(curr.data))
            curr = curr.next
        print(&quot; -&gt; &quot;.join(elements))

# 실행
ll = SinglyLinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.display()  # 10 -&gt; 20 -&gt; 30
</code></pre>
<hr>
<h2>4. 주요 활용 및 장단점</h2>
<ul>
<li><strong>장점</strong>: 사전 메모리 크기 할당 불필요, 데이터 삽입 및 삭제 시 타 요소 이동 없음.</li>
<li><strong>단점</strong>: 포인터를 저장을 위한 추가 메모리 필요, 인덱스를 통한 직접 접근 불가.</li>
<li><strong>활용 사례</strong>: 스택/큐/그래프 등의 자료구조 구현 기반, 이미지 슬라이드쇼, 메모리 관리 파티션 목록.</li>
</ul>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 이중 연결 리스트가 단일 연결 리스트보다 유리한 경우는 언제인가요?</strong>
A. 특정 노드의 이전 노드로 되돌아가거나 양방향으로 순회해야 할 때 효율적입니다. 단, 포인터 저장 공간이 노드당 2개씩 필요합니다.</p>
',
  'published',
  '연결 리스트(Linked List) 개념과 구현 - 단일·이중·원형 연결 리스트 비교',
  '동적 메모리 할당 기반의 연결 리스트 구조, 배열(Array)과의 성능 비교, 단일/이중/원형 연결 리스트의 노드 관리 및 파이썬 구현법을 설명합니다.',
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
  'algorithm',
  'ch04-tree',
  '트리(Tree) 자료구조: 이진 트리와 순회 알고리즘',
  '계층적 데이터 표현을 위한 비선형 자료구조인 트리의 기본 개념, 이진 트리(Binary Tree), 전위/중위/후위 순회 및 수식 트리 응용법을 다룹니다.',
  '# 트리(Tree) 자료구조: 이진 트리와 순회 알고리즘

**트리(Tree)**는 계층적인 관계를 나타내는 대표적인 비선형(Non-linear) 자료구조입니다. 하나의 뿌리(Root) 노드에서 시작하여 나뭇가지처럼 늘어나는 형태를 취합니다.

---

## 1. 트리의 용어 및 구조

- **노드 (Node)**: 트리를 구성하는 데이터 요소.
- **간선 (Edge)**: 노드와 노드를 연결하는 선.
- **루트 노드 (Root Node)**: 부모가 없는 최상위 노드.
- **단말 노드 (Leaf Node)**: 자식이 없는 최하위 노드.
- **서브트리 (Subtree)**: 하나의 노드와 그 하위 노드들로 구성된 부분 트리.
- **차수 (Degree)**: 각 노드가 가진 자식 노드의 수.
- **높이 (Height) / 깊이 (Depth)**: 루트에서 특정 노드까지의 경로 길이 및 최대 레벨.

---

## 2. 이진 트리(Binary Tree)의 유형

모든 노드의 차수(자식 노드 수)가 2 이하인 트리를 **이진 트리**라고 합니다.

| 이진 트리 종류 | 구조적 특징 |
| :--- | :--- |
| **정 이진 트리 (Full Binary Tree)** | 모든 노드가 0개 또는 2개의 자식 노드를 가짐 |
| **완전 이진 트리 (Complete Binary Tree)** | 마지막 레벨을 제외하고 모든 레벨이 채워져 있으며, 마지막 레벨은 왼쪽부터 채워짐 |
| **포화 이진 트리 (Perfect Binary Tree)** | 모든 단말 노드의 깊이가 같고, 모든 내부 노드가 2개의 자식을 가짐 |

---

## 3. 이진 트리 순회(Traversal) 알고리즘

순회란 트리의 모든 노드를 중복 없이 방문하는 방법입니다.

```python
class Node:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

# 1. 전위 순회 (Preorder: V -> L -> R)
def preorder(node):
    if node:
        print(node.val, end='' '')
        preorder(node.left)
        preorder(node.right)

# 2. 중위 순회 (Inorder: L -> V -> R)
def inorder(node):
    if node:
        inorder(node.left)
        print(node.val, end='' '')
        inorder(node.right)

# 3. 후위 순회 (Postorder: L -> R -> V)
def postorder(node):
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.val, end='' '')
```

---

## 4. 트리의 실무 활용

1. **파일 시스템**: 디렉터리와 파일의 계층적 구조 표현.
2. **이진 탐색 트리 (BST)**: 빠르고 효율적인 데이터 검색 및 관리.
3. **수식 트리 (Expression Tree)**: 연산자와 피연산자를 트리로 구성하여 후위 표기법 계산에 사용.
4. **우선순위 큐 (Heap)**: Complete Binary Tree 구조 기반의 힙 연산.

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 이진 탐색 트리(BST)에서 중위 순회를 수행하면 어떤 결과가 나오나요?**
A. 이진 탐색 트리는 왼쪽 자식 < 부모 < 오른쪽 자식 관계를 가지므로, 중위 순회(Inorder Traversal)를 하면 오름차순으로 정렬된 데이터를 얻을 수 있습니다.
',
  '<h1>트리(Tree) 자료구조: 이진 트리와 순회 알고리즘</h1>
<p>**트리(Tree)**는 계층적인 관계를 나타내는 대표적인 비선형(Non-linear) 자료구조입니다. 하나의 뿌리(Root) 노드에서 시작하여 나뭇가지처럼 늘어나는 형태를 취합니다.</p>
<hr>
<h2>1. 트리의 용어 및 구조</h2>
<ul>
<li><strong>노드 (Node)</strong>: 트리를 구성하는 데이터 요소.</li>
<li><strong>간선 (Edge)</strong>: 노드와 노드를 연결하는 선.</li>
<li><strong>루트 노드 (Root Node)</strong>: 부모가 없는 최상위 노드.</li>
<li><strong>단말 노드 (Leaf Node)</strong>: 자식이 없는 최하위 노드.</li>
<li><strong>서브트리 (Subtree)</strong>: 하나의 노드와 그 하위 노드들로 구성된 부분 트리.</li>
<li><strong>차수 (Degree)</strong>: 각 노드가 가진 자식 노드의 수.</li>
<li><strong>높이 (Height) / 깊이 (Depth)</strong>: 루트에서 특정 노드까지의 경로 길이 및 최대 레벨.</li>
</ul>
<hr>
<h2>2. 이진 트리(Binary Tree)의 유형</h2>
<p>모든 노드의 차수(자식 노드 수)가 2 이하인 트리를 <strong>이진 트리</strong>라고 합니다.</p>
<table>
<thead>
<tr>
<th align="left">이진 트리 종류</th>
<th align="left">구조적 특징</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>정 이진 트리 (Full Binary Tree)</strong></td>
<td align="left">모든 노드가 0개 또는 2개의 자식 노드를 가짐</td>
</tr>
<tr>
<td align="left"><strong>완전 이진 트리 (Complete Binary Tree)</strong></td>
<td align="left">마지막 레벨을 제외하고 모든 레벨이 채워져 있으며, 마지막 레벨은 왼쪽부터 채워짐</td>
</tr>
<tr>
<td align="left"><strong>포화 이진 트리 (Perfect Binary Tree)</strong></td>
<td align="left">모든 단말 노드의 깊이가 같고, 모든 내부 노드가 2개의 자식을 가짐</td>
</tr>
</tbody></table>
<hr>
<h2>3. 이진 트리 순회(Traversal) 알고리즘</h2>
<p>순회란 트리의 모든 노드를 중복 없이 방문하는 방법입니다.</p>
<pre><code class="language-python">class Node:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

# 1. 전위 순회 (Preorder: V -&gt; L -&gt; R)
def preorder(node):
    if node:
        print(node.val, end=&#39; &#39;)
        preorder(node.left)
        preorder(node.right)

# 2. 중위 순회 (Inorder: L -&gt; V -&gt; R)
def inorder(node):
    if node:
        inorder(node.left)
        print(node.val, end=&#39; &#39;)
        inorder(node.right)

# 3. 후위 순회 (Postorder: L -&gt; R -&gt; V)
def postorder(node):
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.val, end=&#39; &#39;)
</code></pre>
<hr>
<h2>4. 트리의 실무 활용</h2>
<ol>
<li><strong>파일 시스템</strong>: 디렉터리와 파일의 계층적 구조 표현.</li>
<li><strong>이진 탐색 트리 (BST)</strong>: 빠르고 효율적인 데이터 검색 및 관리.</li>
<li><strong>수식 트리 (Expression Tree)</strong>: 연산자와 피연산자를 트리로 구성하여 후위 표기법 계산에 사용.</li>
<li><strong>우선순위 큐 (Heap)</strong>: Complete Binary Tree 구조 기반의 힙 연산.</li>
</ol>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 이진 탐색 트리(BST)에서 중위 순회를 수행하면 어떤 결과가 나오나요?</strong>
A. 이진 탐색 트리는 왼쪽 자식 &lt; 부모 &lt; 오른쪽 자식 관계를 가지므로, 중위 순회(Inorder Traversal)를 하면 오름차순으로 정렬된 데이터를 얻을 수 있습니다.</p>
',
  'published',
  '트리(Tree) 자료구조 완전 분석 - 이진 트리, 전위/중위/후위 순회, 수식 트리',
  '계층적 비선형 구조인 트리의 용어(노드, 간선, 차수, 높이), 이진 트리(Binary Tree) 종류와 전위·중위·후위 순회 알고리즘, 수식 트리 응용을 다룹니다.',
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
  'algorithm',
  'ch05-algorithm-analysis',
  '알고리즘 개요와 복잡도 분석: Big-O 표기법',
  '주어진 문제를 해결하기 위한 단계적 절차인 알고리즘의 정의, 5대 조건, Big-O 표기법을 통한 시간 및 공간 복잡도 분석 기법을 상세히 다룹니다.',
  '# 알고리즘 개요와 복잡도 분석: Big-O 표기법

**알고리즘(Algorithm)**이란 명확히 정의된 문제를 해결하거나 특정 입력을 출력으로 변환하기 위한 단계적인 계산 절차를 의미합니다.

---

## 1. 알고리즘의 5가지 필수 조건

1. **입력 (Input)**: 외부에서 제공되는 데이터가 0개 이상 존재해야 함.
2. **출력 (Output)**: 최소 1개 이상의 결과가 명확히 발생해야 함.
3. **명확성 (Definiteness)**: 각 단계는 모호하지 않고 명확해야 함.
4. **유한성 (Finiteness)**: 한정된 수의 단계를 거친 후 반드시 종료되어야 함.
5. **유효성 (Effectiveness)**: 모든 명령은 실행 가능하고 현실적이어야 함.

---

## 2. 점근적 분석과 Big-O 표기법

입력 크기 $N$이 증가함에 따라 실행 시간이나 메모리 사용량이 어떻게 변화하는지를 나타내는 분석 방법입니다.

- **Big-O ($O$)**: 최악의 경우 (Upper Bound) - 알고리즘 상한 성능 표기.
- **Big-Omega ($Omega$)**: 최선의 경우 (Lower Bound) - 알고리즘 하한 성능 표기.
- **Big-Theta ($Theta$)**: 평균적/정확한 한계 (Tight Bound) - 상한과 하한이 일치할 때.

---

## 3. 대표적인 시간 복잡도 등급 비교

| 표기법 | 명칭 | 설명 및 예시 알고리즘 |
| :--- | :--- | :--- |
| $O(1)$ | Constant | 입력 크기와 무관하게 일정 (배열 인덱스 접근, 스택 push/pop) |
| $O(log N)$ | Logarithmic | 연산마다 탐색 범위가 절반으로 줄어듦 (이진 탐색) |
| $O(N)$ | Linear | 입력 크기에 비례 (선형 탐색, 단일 for문) |
| $O(N log N)$ | Linearithmic | 효율적인 정렬 알고리즘 (퀵 정렬, 병합 정렬, 힙 정렬) |
| $O(N^2)$ | Quadratic | 이중 반복문 (선택 정렬, 삽입 정렬, 버블 정렬) |
| $O(2^N)$ | Exponential | 재귀적 피보나치 수열 (효율적인 기법 미적용 시) |

---

## 4. 시간 복잡도 vs 공간 복잡도

- **시간 복잡도 (Time Complexity)**: 알고리즘을 수행하는 데 걸리는 연산 횟수의 측량.
- **공간 복잡도 (Space Complexity)**: 알고리즘 실행에 필요한 메모리 공간의 양 (보조 공간 포함).

최근 컴퓨팅 환경에서는 메모리 용량이 대폭 증가했기 때문에 **시간 복잡도 최적화**를 1순위 목표로 삼는 경우가 많습니다.

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 왜 알고리즘 분석 시 최악의 경우(Big-O)를 주로 사용하나요?**
A. 최악의 경우를 파악하면 어떠한 입력 데이터가 들어오더라도 해당 시간 이내에 완료됨을 보장(Guarantee)할 수 있어 시스템 예측 가능성이 높아지기 때문입니다.
',
  '<h1>알고리즘 개요와 복잡도 분석: Big-O 표기법</h1>
<p>**알고리즘(Algorithm)**이란 명확히 정의된 문제를 해결하거나 특정 입력을 출력으로 변환하기 위한 단계적인 계산 절차를 의미합니다.</p>
<hr>
<h2>1. 알고리즘의 5가지 필수 조건</h2>
<ol>
<li><strong>입력 (Input)</strong>: 외부에서 제공되는 데이터가 0개 이상 존재해야 함.</li>
<li><strong>출력 (Output)</strong>: 최소 1개 이상의 결과가 명확히 발생해야 함.</li>
<li><strong>명확성 (Definiteness)</strong>: 각 단계는 모호하지 않고 명확해야 함.</li>
<li><strong>유한성 (Finiteness)</strong>: 한정된 수의 단계를 거친 후 반드시 종료되어야 함.</li>
<li><strong>유효성 (Effectiveness)</strong>: 모든 명령은 실행 가능하고 현실적이어야 함.</li>
</ol>
<hr>
<h2>2. 점근적 분석과 Big-O 표기법</h2>
<p>입력 크기 $N$이 증가함에 따라 실행 시간이나 메모리 사용량이 어떻게 변화하는지를 나타내는 분석 방법입니다.</p>
<ul>
<li><strong>Big-O ($O$)</strong>: 최악의 경우 (Upper Bound) - 알고리즘 상한 성능 표기.</li>
<li><strong>Big-Omega ($Omega$)</strong>: 최선의 경우 (Lower Bound) - 알고리즘 하한 성능 표기.</li>
<li><strong>Big-Theta ($Theta$)</strong>: 평균적/정확한 한계 (Tight Bound) - 상한과 하한이 일치할 때.</li>
</ul>
<hr>
<h2>3. 대표적인 시간 복잡도 등급 비교</h2>
<table>
<thead>
<tr>
<th align="left">표기법</th>
<th align="left">명칭</th>
<th align="left">설명 및 예시 알고리즘</th>
</tr>
</thead>
<tbody><tr>
<td align="left">$O(1)$</td>
<td align="left">Constant</td>
<td align="left">입력 크기와 무관하게 일정 (배열 인덱스 접근, 스택 push/pop)</td>
</tr>
<tr>
<td align="left">$O(log N)$</td>
<td align="left">Logarithmic</td>
<td align="left">연산마다 탐색 범위가 절반으로 줄어듦 (이진 탐색)</td>
</tr>
<tr>
<td align="left">$O(N)$</td>
<td align="left">Linear</td>
<td align="left">입력 크기에 비례 (선형 탐색, 단일 for문)</td>
</tr>
<tr>
<td align="left">$O(N log N)$</td>
<td align="left">Linearithmic</td>
<td align="left">효율적인 정렬 알고리즘 (퀵 정렬, 병합 정렬, 힙 정렬)</td>
</tr>
<tr>
<td align="left">$O(N^2)$</td>
<td align="left">Quadratic</td>
<td align="left">이중 반복문 (선택 정렬, 삽입 정렬, 버블 정렬)</td>
</tr>
<tr>
<td align="left">$O(2^N)$</td>
<td align="left">Exponential</td>
<td align="left">재귀적 피보나치 수열 (효율적인 기법 미적용 시)</td>
</tr>
</tbody></table>
<hr>
<h2>4. 시간 복잡도 vs 공간 복잡도</h2>
<ul>
<li><strong>시간 복잡도 (Time Complexity)</strong>: 알고리즘을 수행하는 데 걸리는 연산 횟수의 측량.</li>
<li><strong>공간 복잡도 (Space Complexity)</strong>: 알고리즘 실행에 필요한 메모리 공간의 양 (보조 공간 포함).</li>
</ul>
<p>최근 컴퓨팅 환경에서는 메모리 용량이 대폭 증가했기 때문에 <strong>시간 복잡도 최적화</strong>를 1순위 목표로 삼는 경우가 많습니다.</p>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 왜 알고리즘 분석 시 최악의 경우(Big-O)를 주로 사용하나요?</strong>
A. 최악의 경우를 파악하면 어떠한 입력 데이터가 들어오더라도 해당 시간 이내에 완료됨을 보장(Guarantee)할 수 있어 시스템 예측 가능성이 높아지기 때문입니다.</p>
',
  'published',
  '알고리즘 복잡도 분석 guide - Big-O 표기법, 시간 복잡도, 공간 복잡도',
  '알고리즘의 성립 조건, 점근적 분석법(Big-O, Big-Omega, Big-Theta), 최악/평균/최선 시간복잡도와 공간복잡도 계산법을 체계적으로 안내합니다.',
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
  'algorithm',
  'ch06-sorting-algorithms',
  '정렬 알고리즘(Sorting): 선택, 삽입, 퀵, 병합, 기수 정렬',
  '데이터를 일정한 순서(오름차순/내림차순)로 재배열하는 주요 정렬 알고리즘의 동작 원리, 시간복잡도 비교 및 정렬 안정성을 체계적으로 살펴봅니다.',
  '# 정렬 알고리즘(Sorting): 선택, 삽입, 퀵, 병합, 기수 정렬

**정렬(Sorting)**은 순서가 없는 데이터 집합을 특정 키(Key) 값의 순서대로 재배열하는 작업입니다.

---

## 1. 정렬 알고리즘 성능 비교표

| 알고리즘 | 평균 시간복잡도 | 최악 시간복잡도 | 공간복잡도 | 제자리 정렬(In-Place) | 안정성(Stable) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **선택 정렬 (Selection)** | $O(N^2)$ | $O(N^2)$ | $O(1)$ | O | X |
| **삽입 정렬 (Insertion)** | $O(N^2)$ | $O(N^2)$ | $O(1)$ | O | O |
| **버블 정렬 (Bubble)** | $O(N^2)$ | $O(N^2)$ | $O(1)$ | O | O |
| **퀵 정렬 (Quick)** | $O(N log N)$ | $O(N^2)$ | $O(log N)$ | O | X |
| **병합 정렬 (Merge)** | $O(N log N)$ | $O(N log N)$ | $O(N)$ | X | O |
| **기수 정렬 (Radix)** | $O(dN)$ | $O(dN)$ | $O(N+k)$ | X | O |

---

## 2. 주요 알고리즘 핵심 메커니즘

1. **선택 정렬**: 전체 데이터 중 최소값을 찾아 맨 앞 요소와 교환하는 과정을 반복.
2. **삽입 정렬**: 정렬된 앞부분 서브 리스트에 새로운 요소를 적절한 위치에 삽입.
3. **퀵 정렬 (Quick Sort)**: **피봇(Pivot)**을 기준으로 작은 값과 큰 값으로 나누어 재귀적으로 정렬하는 분할 정복 방식.
4. **병합 정렬 (Merge Sort)**: 전체 배열을 반으로 나눈 후 각각을 정렬하고 합치는 안정적 정렬 방식.

---

## 3. 파이썬 기반 퀵 정렬 예시

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))
# 출력: [1, 1, 2, 3, 6, 8, 10]
```

---

## 4. 정렬의 안정성 (Stability) 개념

**안정 정렬(Stable Sort)**이란 값이 같은 레코드가 여러 개 있을 때, 정렬 전의 상대적인 순서가 정렬 후에도 그대로 유지되는 정렬 알고리즘을 말합니다. (예: 병합 정렬, 삽입 정렬)

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 퀵 정렬의 최악 시간 복잡도는 언제 $O(N^2)$이 되나요?**
A. 피봇(Pivot)이 최댓값이나 최솟값으로 계속 선택되는 경우(이미 정렬된 배열에서 첫 번째 요소를 피봇으로 잡을 때 등)에 발생합니다. 이를 방지하기 위해 랜덤 피봇이나 미디언 피봇 기법을 사용합니다.
',
  '<h1>정렬 알고리즘(Sorting): 선택, 삽입, 퀵, 병합, 기수 정렬</h1>
<p>**정렬(Sorting)**은 순서가 없는 데이터 집합을 특정 키(Key) 값의 순서대로 재배열하는 작업입니다.</p>
<hr>
<h2>1. 정렬 알고리즘 성능 비교표</h2>
<table>
<thead>
<tr>
<th align="left">알고리즘</th>
<th align="left">평균 시간복잡도</th>
<th align="left">최악 시간복잡도</th>
<th align="left">공간복잡도</th>
<th align="left">제자리 정렬(In-Place)</th>
<th align="left">안정성(Stable)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>선택 정렬 (Selection)</strong></td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(1)$</td>
<td align="left">O</td>
<td align="left">X</td>
</tr>
<tr>
<td align="left"><strong>삽입 정렬 (Insertion)</strong></td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(1)$</td>
<td align="left">O</td>
<td align="left">O</td>
</tr>
<tr>
<td align="left"><strong>버블 정렬 (Bubble)</strong></td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(1)$</td>
<td align="left">O</td>
<td align="left">O</td>
</tr>
<tr>
<td align="left"><strong>퀵 정렬 (Quick)</strong></td>
<td align="left">$O(N log N)$</td>
<td align="left">$O(N^2)$</td>
<td align="left">$O(log N)$</td>
<td align="left">O</td>
<td align="left">X</td>
</tr>
<tr>
<td align="left"><strong>병합 정렬 (Merge)</strong></td>
<td align="left">$O(N log N)$</td>
<td align="left">$O(N log N)$</td>
<td align="left">$O(N)$</td>
<td align="left">X</td>
<td align="left">O</td>
</tr>
<tr>
<td align="left"><strong>기수 정렬 (Radix)</strong></td>
<td align="left">$O(dN)$</td>
<td align="left">$O(dN)$</td>
<td align="left">$O(N+k)$</td>
<td align="left">X</td>
<td align="left">O</td>
</tr>
</tbody></table>
<hr>
<h2>2. 주요 알고리즘 핵심 메커니즘</h2>
<ol>
<li><strong>선택 정렬</strong>: 전체 데이터 중 최소값을 찾아 맨 앞 요소와 교환하는 과정을 반복.</li>
<li><strong>삽입 정렬</strong>: 정렬된 앞부분 서브 리스트에 새로운 요소를 적절한 위치에 삽입.</li>
<li><strong>퀵 정렬 (Quick Sort)</strong>: **피봇(Pivot)**을 기준으로 작은 값과 큰 값으로 나누어 재귀적으로 정렬하는 분할 정복 방식.</li>
<li><strong>병합 정렬 (Merge Sort)</strong>: 전체 배열을 반으로 나눈 후 각각을 정렬하고 합치는 안정적 정렬 방식.</li>
</ol>
<hr>
<h2>3. 파이썬 기반 퀵 정렬 예시</h2>
<pre><code class="language-python">def quick_sort(arr):
    if len(arr) &lt;= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x &lt; pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x &gt; pivot]
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))
# 출력: [1, 1, 2, 3, 6, 8, 10]
</code></pre>
<hr>
<h2>4. 정렬의 안정성 (Stability) 개념</h2>
<p>**안정 정렬(Stable Sort)**이란 값이 같은 레코드가 여러 개 있을 때, 정렬 전의 상대적인 순서가 정렬 후에도 그대로 유지되는 정렬 알고리즘을 말합니다. (예: 병합 정렬, 삽입 정렬)</p>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 퀵 정렬의 최악 시간 복잡도는 언제 $O(N^2)$이 되나요?</strong>
A. 피봇(Pivot)이 최댓값이나 최솟값으로 계속 선택되는 경우(이미 정렬된 배열에서 첫 번째 요소를 피봇으로 잡을 때 등)에 발생합니다. 이를 방지하기 위해 랜덤 피봇이나 미디언 피봇 기법을 사용합니다.</p>
',
  'published',
  '대표 정렬 알고리즘 비교 분석 - O(N^2) vs O(N log N), 정렬 안정성',
  '선택·삽입·버블 정렬부터 퀵 정렬, 병합 정렬, 기수 정렬까지 각 정렬 알고리즘의 원리, 시간복잡도, 정렬 안정성(Stability)을 비교합니다.',
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
  'algorithm',
  'ch07-searching-algorithms',
  '탐색 알고리즘(Searching): 순차 탐색, 이진 탐색, BST',
  '대량의 데이터 집합에서 원하는 조건의 키(Key) 값을 찾는 순차 탐색, 이진 탐색 및 이진 탐색 트리(BST) 알고리즘을 체계적으로 다룹니다.',
  '# 탐색 알고리즘(Searching): 순차 탐색, 이진 탐색, BST

**탐색(Searching)**은 데이터 구조에 저장된 수많은 값 중에서 원하는 키(Key)를 가진 항목을 찾아내는 프로세스입니다.

---

## 1. 탐색 알고리즘 비교

| 알고리즘 | 전제 조건 | 시간 복잡도 (최악) | 특징 |
| :--- | :--- | :--- | :--- |
| **순차 탐색 (Sequential)** | 없음 (정렬 불필요) | $O(N)$ | 첫 번째 원소부터 하나씩 순차적으로 비교 |
| **이진 탐색 (Binary Search)** | **데이터 정렬 필수** | $O(log N)$ | 중앙값 비교 후 탐색 범위를 1/2씩 줄여나감 |
| **이진 탐색 트리 (BST)** | BST 구조 조건 만족 | $O(N)$ (편향 트리)<br>$O(log N)$ (평균) | 동적 데이터의 빠른 탐색, 삽입, 삭제 지원 |

---

## 2. 이진 탐색(Binary Search) 원리와 구현

정렬된 배열에서 중앙값(Mid)과 목표값(Target)을 비교하여 탐색 범위를 반으로 축소합니다.

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# 실행
data = [1, 3, 5, 7, 9, 11, 13, 15]
print(binary_search(data, 7))  # 인덱스 3 반환
```

---

## 3. 이진 탐색 트리 (Binary Search Tree)

이진 탐색 트리는 다음 조건을 만족해야 합니다:
1. 모든 노드의 키는 유일함.
2. **왼쪽 서브트리 키 < 부모 노드 키 < 오른쪽 서브트리 키**

- **삭제 연산 3가지 케이스**:
  1. 단말 노드 삭제: 노드 제거.
  2. 자식이 1개인 노드 삭제: 자식을 부모 노드에 연결.
  3. 자식이 2개인 노드 삭제: 오른쪽 서브트리의 최솟값(후계 노드)을 복사해오고 해당 후계 노드를 삭제.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. BST의 편향(Skewed) 문제를 해결하는 방법은 무엇인가요?**
A. 사전에 오름차순으로 정렬된 데이터가 들어오면 BST가 사슬 형태의 $O(N)$ 편향 트리가 될 수 있습니다. 이를 막기 위해 스스로 높이 균형을 맞추는 **AVL 트리**나 **레드-블랙 트리(Red-Black Tree)**를 사용합니다.
',
  '<h1>탐색 알고리즘(Searching): 순차 탐색, 이진 탐색, BST</h1>
<p>**탐색(Searching)**은 데이터 구조에 저장된 수많은 값 중에서 원하는 키(Key)를 가진 항목을 찾아내는 프로세스입니다.</p>
<hr>
<h2>1. 탐색 알고리즘 비교</h2>
<table>
<thead>
<tr>
<th align="left">알고리즘</th>
<th align="left">전제 조건</th>
<th align="left">시간 복잡도 (최악)</th>
<th align="left">특징</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>순차 탐색 (Sequential)</strong></td>
<td align="left">없음 (정렬 불필요)</td>
<td align="left">$O(N)$</td>
<td align="left">첫 번째 원소부터 하나씩 순차적으로 비교</td>
</tr>
<tr>
<td align="left"><strong>이진 탐색 (Binary Search)</strong></td>
<td align="left"><strong>데이터 정렬 필수</strong></td>
<td align="left">$O(log N)$</td>
<td align="left">중앙값 비교 후 탐색 범위를 1/2씩 줄여나감</td>
</tr>
<tr>
<td align="left"><strong>이진 탐색 트리 (BST)</strong></td>
<td align="left">BST 구조 조건 만족</td>
<td align="left">$O(N)$ (편향 트리)<br>$O(log N)$ (평균)</td>
<td align="left">동적 데이터의 빠른 탐색, 삽입, 삭제 지원</td>
</tr>
</tbody></table>
<hr>
<h2>2. 이진 탐색(Binary Search) 원리와 구현</h2>
<p>정렬된 배열에서 중앙값(Mid)과 목표값(Target)을 비교하여 탐색 범위를 반으로 축소합니다.</p>
<pre><code class="language-python">def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left &lt;= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] &lt; target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# 실행
data = [1, 3, 5, 7, 9, 11, 13, 15]
print(binary_search(data, 7))  # 인덱스 3 반환
</code></pre>
<hr>
<h2>3. 이진 탐색 트리 (Binary Search Tree)</h2>
<p>이진 탐색 트리는 다음 조건을 만족해야 합니다:</p>
<ol>
<li>모든 노드의 키는 유일함.</li>
<li><strong>왼쪽 서브트리 키 &lt; 부모 노드 키 &lt; 오른쪽 서브트리 키</strong></li>
</ol>
<ul>
<li><strong>삭제 연산 3가지 케이스</strong>:<ol>
<li>단말 노드 삭제: 노드 제거.</li>
<li>자식이 1개인 노드 삭제: 자식을 부모 노드에 연결.</li>
<li>자식이 2개인 노드 삭제: 오른쪽 서브트리의 최솟값(후계 노드)을 복사해오고 해당 후계 노드를 삭제.</li>
</ol>
</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. BST의 편향(Skewed) 문제를 해결하는 방법은 무엇인가요?</strong>
A. 사전에 오름차순으로 정렬된 데이터가 들어오면 BST가 사슬 형태의 $O(N)$ 편향 트리가 될 수 있습니다. 이를 막기 위해 스스로 높이 균형을 맞추는 <strong>AVL 트리</strong>나 **레드-블랙 트리(Red-Black Tree)**를 사용합니다.</p>
',
  'published',
  '탐색 알고리즘 총정리 - 순차 탐색, 이진 탐색, 이진 탐색 트리(BST) 연산',
  '선형 탐색과 이진 탐색의 비교, 정렬된 배열에서의 O(log N) 이진 탐색 원리, 이진 탐색 트리(BST)의 탐색·삽입·삭제 동작을 해설합니다.',
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
  'algorithm',
  'ch08-graph-algorithms',
  '그래프(Graph) 알고리즘: DFS, BFS, MST, 최단 경로',
  '정점(Vertex)과 간선(Edge)으로 구성된 복잡한 객체 간의 관계를 다루는 그래프 구조, DFS/BFS 순회, 최소 신장 트리(MST) 및 다익스트라 알고리즘을 학습합니다.',
  '# 그래프(Graph) 알고리즘: DFS, BFS, MST, 최단 경로

**그래프(Graph)**는 정점(Vertex)들과 이들을 연결하는 간선(Edge)들의 집합 $G = (V, E)$로 표현되는 비선형 자료구조입니다.

---

## 1. 그래프 표현 방식

1. **인접 행렬 (Adjacency Matrix)**: $V 	imes V$ 2차원 배열 사용. 간선 조회 $O(1)$, 메모리 $O(V^2)$.
2. **인접 리스트 (Adjacency List)**: 각 정점에 연결된 정점 목록을 리스트로 유지. 메모리 $O(V+E)$, 희소 그래프에 효율적.

---

## 2. 그래프 순회: DFS vs BFS

| 특징 | 깊이 우선 탐색 (DFS) | 너비 우선 탐색 (BFS) |
| :--- | :--- | :--- |
| **탐색 방식** | 한 노선으로 갈 수 있는 데까지 깊게 탐색 | 시작점에서 가까운 정점부터 넓게 탐색 |
| **구현 도구** | **스택(Stack)** 또는 재귀 함수 | **큐(Queue)** |
| **시간 복잡도** | $O(V+E)$ (인접 리스트 기준) | $O(V+E)$ (인접 리스트 기준) |
| **주요 활용** | 사이클 검출, 백트래킹, 위상 정렬 | **가중치 없는 최단 경로 탐색** |

---

## 3. 최소 신장 트리 (MST, Minimum Spanning Tree)

그래프의 모든 정점을 연결하면서 사이클이 없는 간선 가중치 합의 최솟값을 찾는 문제.

- **프림(Prim) 알고리즘**: 하나의 정점에서 시작하여 연결된 최소 가중치 간선 정점을 확장 ($O(E log V)$).
- **크루스칼(Kruskal) 알고리즘**: 모든 간선을 가중치 순 정렬 후, **Union-Find** 알고리즘으로 사이클 발생 여부를 확인하며 연결 ($O(E log E)$).

---

## 4. 최단 경로: 다익스트라 (Dijkstra) 알고리즘

가중치가 양수인 그래프에서 특정 출발 정점으로부터 다른 모든 정점까지의 최단 거리를 구하는 알고리즘입니다.

- **우선순위 큐(Heap)** 활용 시 시간 복잡도: **$O((V+E) log V)$**

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 다익스트라 알고리즘에서 음수 가중치 간선이 존재하면 어떤 문제가 발생하나요?**
A. 최단 거리를 구했더라도 음수 가중치 간선을 지나면서 거리가 더 짧아질 수 있어 최적성이 깨집니다. 음수 가중치가 존재할 때는 **벨만-포드(Bellman-Ford)** 알고리즘을 사용해야 합니다.
',
  '<h1>그래프(Graph) 알고리즘: DFS, BFS, MST, 최단 경로</h1>
<p>**그래프(Graph)**는 정점(Vertex)들과 이들을 연결하는 간선(Edge)들의 집합 $G = (V, E)$로 표현되는 비선형 자료구조입니다.</p>
<hr>
<h2>1. 그래프 표현 방식</h2>
<ol>
<li><strong>인접 행렬 (Adjacency Matrix)</strong>: $V     imes V$ 2차원 배열 사용. 간선 조회 $O(1)$, 메모리 $O(V^2)$.</li>
<li><strong>인접 리스트 (Adjacency List)</strong>: 각 정점에 연결된 정점 목록을 리스트로 유지. 메모리 $O(V+E)$, 희소 그래프에 효율적.</li>
</ol>
<hr>
<h2>2. 그래프 순회: DFS vs BFS</h2>
<table>
<thead>
<tr>
<th align="left">특징</th>
<th align="left">깊이 우선 탐색 (DFS)</th>
<th align="left">너비 우선 탐색 (BFS)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>탐색 방식</strong></td>
<td align="left">한 노선으로 갈 수 있는 데까지 깊게 탐색</td>
<td align="left">시작점에서 가까운 정점부터 넓게 탐색</td>
</tr>
<tr>
<td align="left"><strong>구현 도구</strong></td>
<td align="left"><strong>스택(Stack)</strong> 또는 재귀 함수</td>
<td align="left"><strong>큐(Queue)</strong></td>
</tr>
<tr>
<td align="left"><strong>시간 복잡도</strong></td>
<td align="left">$O(V+E)$ (인접 리스트 기준)</td>
<td align="left">$O(V+E)$ (인접 리스트 기준)</td>
</tr>
<tr>
<td align="left"><strong>주요 활용</strong></td>
<td align="left">사이클 검출, 백트래킹, 위상 정렬</td>
<td align="left"><strong>가중치 없는 최단 경로 탐색</strong></td>
</tr>
</tbody></table>
<hr>
<h2>3. 최소 신장 트리 (MST, Minimum Spanning Tree)</h2>
<p>그래프의 모든 정점을 연결하면서 사이클이 없는 간선 가중치 합의 최솟값을 찾는 문제.</p>
<ul>
<li><strong>프림(Prim) 알고리즘</strong>: 하나의 정점에서 시작하여 연결된 최소 가중치 간선 정점을 확장 ($O(E log V)$).</li>
<li><strong>크루스칼(Kruskal) 알고리즘</strong>: 모든 간선을 가중치 순 정렬 후, <strong>Union-Find</strong> 알고리즘으로 사이클 발생 여부를 확인하며 연결 ($O(E log E)$).</li>
</ul>
<hr>
<h2>4. 최단 경로: 다익스트라 (Dijkstra) 알고리즘</h2>
<p>가중치가 양수인 그래프에서 특정 출발 정점으로부터 다른 모든 정점까지의 최단 거리를 구하는 알고리즘입니다.</p>
<ul>
<li><strong>우선순위 큐(Heap)</strong> 활용 시 시간 복잡도: <strong>$O((V+E) log V)$</strong></li>
</ul>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 다익스트라 알고리즘에서 음수 가중치 간선이 존재하면 어떤 문제가 발생하나요?</strong>
A. 최단 거리를 구했더라도 음수 가중치 간선을 지나면서 거리가 더 짧아질 수 있어 최적성이 깨집니다. 음수 가중치가 존재할 때는 <strong>벨만-포드(Bellman-Ford)</strong> 알고리즘을 사용해야 합니다.</p>
',
  'published',
  '그래프(Graph) 알고리즘 핵심 가이드 - DFS, BFS, Prim, Kruskal, Dijkstra',
  '그래프의 표현(인접 행렬 vs 인접 리스트), 깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS), 최소 신장 트리(MST), 다익스트라(Dijkstra) 최단 경로 알고리즘을 다룹니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'algorithm',
  'ch09-brute-force-and-greedy',
  '완전 탐색(Brute-Force)과 탐욕 알고리즘(Greedy Strategy)',
  '가능한 모든 해를 다 검증하는 완전 탐색(Brute-Force) 기법과 매 순간 최적인 선택을 내리는 탐욕 알고리즘(Greedy Strategy)의 설계 원리를 다룹니다.',
  '# 완전 탐색(Brute-Force)과 탐욕 알고리즘(Greedy Strategy)

문제 해결 전략 중 **완전 탐색(Brute-Force)**과 **탐욕 알고리즘(Greedy Algorithm)**은 가장 대표적이고 기본적인 설계 패러다임입니다.

---

## 1. 억지 기법 / 완전 탐색 (Brute-Force)

가능한 모든 입력 경우의 수를 무식하고 직접적으로 계산하여 정답을 찾는 방법입니다.

- **장점**: 단순하고 항상 정확한 최적해를 보장함.
- **단점**: 문제의 크기 $N$이 커질 경우 실행 시간이 폭발적으로 증가 ($O(2^N)$ 또는 $O(N!)$).
- **예시**: 순차 탐색, 모든 조합/순열 생성, 비밀번호 대입.

---

## 2. 탐욕 알고리즘 (Greedy Strategy)

전체적인 상황을 고려하지 않고 **매 순간 최적이라고 판단되는 선택(Local Optimum)**을 내려 최종 해답에 도달하는 기법입니다.

### 탐욕 알고리즘의 성립 조건 2가지
1. **탐욕적 선택 속성 (Greedy Choice Property)**: 현재의 최적 선택이 이후의 선택에 악영향을 주지 않음.
2. **최적 부분 구조 (Optimal Substructure)**: 부분 문제의 최적해들로 전체 문제의 최적해를 구성할 수 있음.

---

## 3. 대표적인 탐욕 알고리즘 예시: 동전 거스름돈

```python
def min_coins(amount, coins=[500, 100, 50, 10]):
    count = 0
    for coin in coins:
        count += amount // coin
        amount %= coin
    return count

print(min_coins(1260))  # 500원 2개, 100원 2개, 50원 1개, 10원 1개 -> 총 6개
```
*주의: 동전 단위가 서로 배수 관계가 아닐 경우 탐욕법은 최적해를 보장하지 못하며, 이 경우 동적 계획법(DP)을 사용해야 합니다.*

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 탐욕 알고리즘이 항시 최적해를 보장하지 못하는데도 사용하는 이유는 무엇인가요?**
A. 완전 탐색이나 DP로 풀기에는 시간 복잡도가 너무 높은 NP-난제 문제 등에서 빠르게 만족할 만한 근사해(Approximation Solution)를 얻을 수 있기 때문입니다.
',
  '<h1>완전 탐색(Brute-Force)과 탐욕 알고리즘(Greedy Strategy)</h1>
<p>문제 해결 전략 중 **완전 탐색(Brute-Force)**과 **탐욕 알고리즘(Greedy Algorithm)**은 가장 대표적이고 기본적인 설계 패러다임입니다.</p>
<hr>
<h2>1. 억지 기법 / 완전 탐색 (Brute-Force)</h2>
<p>가능한 모든 입력 경우의 수를 무식하고 직접적으로 계산하여 정답을 찾는 방법입니다.</p>
<ul>
<li><strong>장점</strong>: 단순하고 항상 정확한 최적해를 보장함.</li>
<li><strong>단점</strong>: 문제의 크기 $N$이 커질 경우 실행 시간이 폭발적으로 증가 ($O(2^N)$ 또는 $O(N!)$).</li>
<li><strong>예시</strong>: 순차 탐색, 모든 조합/순열 생성, 비밀번호 대입.</li>
</ul>
<hr>
<h2>2. 탐욕 알고리즘 (Greedy Strategy)</h2>
<p>전체적인 상황을 고려하지 않고 **매 순간 최적이라고 판단되는 선택(Local Optimum)**을 내려 최종 해답에 도달하는 기법입니다.</p>
<h3>탐욕 알고리즘의 성립 조건 2가지</h3>
<ol>
<li><strong>탐욕적 선택 속성 (Greedy Choice Property)</strong>: 현재의 최적 선택이 이후의 선택에 악영향을 주지 않음.</li>
<li><strong>최적 부분 구조 (Optimal Substructure)</strong>: 부분 문제의 최적해들로 전체 문제의 최적해를 구성할 수 있음.</li>
</ol>
<hr>
<h2>3. 대표적인 탐욕 알고리즘 예시: 동전 거스름돈</h2>
<pre><code class="language-python">def min_coins(amount, coins=[500, 100, 50, 10]):
    count = 0
    for coin in coins:
        count += amount // coin
        amount %= coin
    return count

print(min_coins(1260))  # 500원 2개, 100원 2개, 50원 1개, 10원 1개 -&gt; 총 6개
</code></pre>
<p><em>주의: 동전 단위가 서로 배수 관계가 아닐 경우 탐욕법은 최적해를 보장하지 못하며, 이 경우 동적 계획법(DP)을 사용해야 합니다.</em></p>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 탐욕 알고리즘이 항시 최적해를 보장하지 못하는데도 사용하는 이유는 무엇인가요?</strong>
A. 완전 탐색이나 DP로 풀기에는 시간 복잡도가 너무 높은 NP-난제 문제 등에서 빠르게 만족할 만한 근사해(Approximation Solution)를 얻을 수 있기 때문입니다.</p>
',
  'published',
  '알고리즘 설계 전략 - 완전 탐색(Brute-force) 및 탐욕 알고리즘(Greedy)',
  '모든 경우의 수를 검증하는 완전 탐색 기법과 매 순간 최적의 선택을 하는 탐욕 알고리즘의 성립 조건(탐욕적 선택 속성, 최적 부분 구조)을 분석합니다.',
  9,
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
  'algorithm',
  'ch10-divide-and-conquer',
  '분할 정복(Divide and Conquer) 전략과 응용',
  '큰 문제를 작은 독립적인 부분 문제로 나누어 각각 해결한 후 결과를 합성하는 분할 정복(Divide and Conquer) 전략의 원리와 응용 사례를 학습합니다.',
  '# 분할 정복(Divide and Conquer) 전략과 응용

**분할 정복(Divide and Conquer)**은 복잡하고 큰 문제를 해결 가능한 작은 문제들로 분할하여 각각 해결(정복)한 후, 그 결과들을 결합하는 알고리즘 설계 패러다임입니다.

---

## 1. 분할 정복의 3단계 문제 해결 과정

1. **분할 (Divide)**: 입력 문제를 동일한 유형의 더 작은 부분 문제들로 나눈다.
2. **정복 (Conquer)**: 부분 문제들을 재귀적으로 해결한다. (부분 문제 크기가 충분히 작다면 직접 해를 구함)
3. **결합 (Combine)**: 구해진 부분 문제의 해들을 합쳐 원래 문제의 해를 만든다.

---

## 2. 대표적 응용 예시: 거듭제곱 $a^n$ 구하기

일반 반복문으로 $a^n$을 구하면 $O(N)$시간이 걸리지만, 분할 정복을 적용하면 **$O(log N)$** 만에 계산 가능합니다.

$$a^n = egin{cases} (a^{n/2})^2 & 	ext{if } n 	ext{ is even} \ a 	imes (a^{(n-1)/2})^2 & 	ext{if } n 	ext{ is odd} end{cases}$$

```python
def power(a, n):
    if n == 0:
        return 1
    half = power(a, n // 2)
    if n % 2 == 0:
        return half * half
    else:
        return a * half * half

print(power(2, 10))  # 1024
```

---

## 3. 분할 정복 대 대표적 알고리즘

- **병합 정렬 (Merge Sort)**: 배열을 정확히 2등분으로 분할 ($O(N log N)$).
- **퀵 정렬 (Quick Sort)**: 피봇을 기반으로 비대칭 분할 후 정렬.
- **k-번째 작은 수 찾기 (Quick Select)**: 축소 정복(Decrease-and-Conquer) 형태로 한쪽 서브 배열만 탐색하여 평균 $O(N)$ 시간에 $k$번째 요소를 탐색.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 분할 정복과 동적 계획법(DP)의 결정적 차이는 무엇인가요?**
A. 분할 정복은 나뉘어진 부분 문제들이 서로 독립적(Disjoint)일 때 사용합니다. 반면, 부분 문제들이 서로 중복(Overlapping)될 때는 동적 계획법(DP)을 사용하여 계산 결과를 재사용해야 합니다.
',
  '<h1>분할 정복(Divide and Conquer) 전략과 응용</h1>
<p>**분할 정복(Divide and Conquer)**은 복잡하고 큰 문제를 해결 가능한 작은 문제들로 분할하여 각각 해결(정복)한 후, 그 결과들을 결합하는 알고리즘 설계 패러다임입니다.</p>
<hr>
<h2>1. 분할 정복의 3단계 문제 해결 과정</h2>
<ol>
<li><strong>분할 (Divide)</strong>: 입력 문제를 동일한 유형의 더 작은 부분 문제들로 나눈다.</li>
<li><strong>정복 (Conquer)</strong>: 부분 문제들을 재귀적으로 해결한다. (부분 문제 크기가 충분히 작다면 직접 해를 구함)</li>
<li><strong>결합 (Combine)</strong>: 구해진 부분 문제의 해들을 합쳐 원래 문제의 해를 만든다.</li>
</ol>
<hr>
<h2>2. 대표적 응용 예시: 거듭제곱 $a^n$ 구하기</h2>
<p>일반 반복문으로 $a^n$을 구하면 $O(N)$시간이 걸리지만, 분할 정복을 적용하면 <strong>$O(log N)$</strong> 만에 계산 가능합니다.</p>
<p>$$a^n = egin{cases} (a^{n/2})^2 &amp; 	ext{if } n 	ext{ is even} \ a 	imes (a^{(n-1)/2})^2 &amp; 	ext{if } n 	ext{ is odd} end{cases}$$</p>
<pre><code class="language-python">def power(a, n):
    if n == 0:
        return 1
    half = power(a, n // 2)
    if n % 2 == 0:
        return half * half
    else:
        return a * half * half

print(power(2, 10))  # 1024
</code></pre>
<hr>
<h2>3. 분할 정복 대 대표적 알고리즘</h2>
<ul>
<li><strong>병합 정렬 (Merge Sort)</strong>: 배열을 정확히 2등분으로 분할 ($O(N log N)$).</li>
<li><strong>퀵 정렬 (Quick Sort)</strong>: 피봇을 기반으로 비대칭 분할 후 정렬.</li>
<li><strong>k-번째 작은 수 찾기 (Quick Select)</strong>: 축소 정복(Decrease-and-Conquer) 형태로 한쪽 서브 배열만 탐색하여 평균 $O(N)$ 시간에 $k$번째 요소를 탐색.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 분할 정복과 동적 계획법(DP)의 결정적 차이는 무엇인가요?</strong>
A. 분할 정복은 나뉘어진 부분 문제들이 서로 독립적(Disjoint)일 때 사용합니다. 반면, 부분 문제들이 서로 중복(Overlapping)될 때는 동적 계획법(DP)을 사용하여 계산 결과를 재사용해야 합니다.</p>
',
  'published',
  '분할 정복(Divide and Conquer) 알고리즘 - 원리, 병합 정렬, Quick Select',
  '문제 해결의 3단계(Divide, Conquer, Combine), 거듭제곱 계산, k-번째 작은 수 찾기(Quick Select), 병합 정렬에서의 재귀적 분할 기법을 학습합니다.',
  10,
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
  'algorithm',
  'ch11-dynamic-programming',
  '동적 계획법(Dynamic Programming, DP) 개념과 패러다임',
  '중복되는 부분 문제의 답을 저장하고 재활용하여 계산 효율을 획기적으로 높이는 동적 계획법(Dynamic Programming)의 핵심 패러다임과 실전 문제를 다룹니다.',
  '# 동적 계획법(Dynamic Programming, DP) 개념과 패러다임

**동적 계획법(Dynamic Programming, DP)**은 복잡한 문제를 작은 부분 문제들로 나눈 후, 그 부분 문제의 해를 메모리에 저장하여 동일한 계산의 중복을 방지하는 최적화 기법입니다.

---

## 1. DP 적용을 위한 2가지 핵심 조건

1. **중복되는 부분 문제 (Overlapping Subproblems)**: 동일한 작은 문제들이 반복해서 나타남.
2. **최적 부분 구조 (Optimal Substructure)**: 부분 문제의 최적해를 조합하여 전체 문제의 최적해를 도출할 수 있음.

---

## 2. Top-Down(하향식) vs Bottom-Up(상향식)

| 방식 | 설명 | 주요 기술 |
| :--- | :--- | :--- |
| **Top-Down (하향식)** | 큰 문제를 해결하기 위해 재귀적으로 작은 문제를 호출 | **메모이제이션 (Memoization)** |
| **Bottom-Up (상향식)** | 가장 작은 부분 문제부터 차례대로 반복문으로 계산하여 테이블에 채워나감 | **타뷸레이션 (Tabulation)** |

---

## 3. 피보나치 수열 비교 예시

```python
# Bottom-Up (Tabulation) DP 방식 - O(N) 시간, O(N) 공간
def fibo_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

print(fibo_dp(10))  # 55
```

---

## 4. DP의 대표 문제

1. **최장 공통 부분 순서 (LCS, Longest Common Subsequence)**: 두 문자열 간 가장 긴 공통 부분 수열 길이 구하기.
2. **0/1 배낭 문제 (Knapsack Problem)**: 담을 수 있는 최대 무게 한도 내에서 가치의 합이 최대가 되도록 물건을 선택하는 문제 ($O(N 	imes W)$).

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 메모이제이션(Memoization)과 타뷸레이션(Tabulation) 중 무엇이 더 유리한가요?**
A. 메모이제이션은 필요한 부분 문제만 계산하므로 가끔 효율적일 수 있으나 재귀 오버헤드(스택 오버플로 위험)가 존재합니다. 타뷸레이션은 반복문을 사용하므로 오버헤드가 적고 공간 복잡도를 최적화하기에 용이합니다.
',
  '<h1>동적 계획법(Dynamic Programming, DP) 개념과 패러다임</h1>
<p>**동적 계획법(Dynamic Programming, DP)**은 복잡한 문제를 작은 부분 문제들로 나눈 후, 그 부분 문제의 해를 메모리에 저장하여 동일한 계산의 중복을 방지하는 최적화 기법입니다.</p>
<hr>
<h2>1. DP 적용을 위한 2가지 핵심 조건</h2>
<ol>
<li><strong>중복되는 부분 문제 (Overlapping Subproblems)</strong>: 동일한 작은 문제들이 반복해서 나타남.</li>
<li><strong>최적 부분 구조 (Optimal Substructure)</strong>: 부분 문제의 최적해를 조합하여 전체 문제의 최적해를 도출할 수 있음.</li>
</ol>
<hr>
<h2>2. Top-Down(하향식) vs Bottom-Up(상향식)</h2>
<table>
<thead>
<tr>
<th align="left">방식</th>
<th align="left">설명</th>
<th align="left">주요 기술</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>Top-Down (하향식)</strong></td>
<td align="left">큰 문제를 해결하기 위해 재귀적으로 작은 문제를 호출</td>
<td align="left"><strong>메모이제이션 (Memoization)</strong></td>
</tr>
<tr>
<td align="left"><strong>Bottom-Up (상향식)</strong></td>
<td align="left">가장 작은 부분 문제부터 차례대로 반복문으로 계산하여 테이블에 채워나감</td>
<td align="left"><strong>타뷸레이션 (Tabulation)</strong></td>
</tr>
</tbody></table>
<hr>
<h2>3. 피보나치 수열 비교 예시</h2>
<pre><code class="language-python"># Bottom-Up (Tabulation) DP 방식 - O(N) 시간, O(N) 공간
def fibo_dp(n):
    if n &lt;= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

print(fibo_dp(10))  # 55
</code></pre>
<hr>
<h2>4. DP의 대표 문제</h2>
<ol>
<li><strong>최장 공통 부분 순서 (LCS, Longest Common Subsequence)</strong>: 두 문자열 간 가장 긴 공통 부분 수열 길이 구하기.</li>
<li><strong>0/1 배낭 문제 (Knapsack Problem)</strong>: 담을 수 있는 최대 무게 한도 내에서 가치의 합이 최대가 되도록 물건을 선택하는 문제 ($O(N  imes W)$).</li>
</ol>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 메모이제이션(Memoization)과 타뷸레이션(Tabulation) 중 무엇이 더 유리한가요?</strong>
A. 메모이제이션은 필요한 부분 문제만 계산하므로 가끔 효율적일 수 있으나 재귀 오버헤드(스택 오버플로 위험)가 존재합니다. 타뷸레이션은 반복문을 사용하므로 오버헤드가 적고 공간 복잡도를 최적화하기에 용이합니다.</p>
',
  'published',
  '동적 계획법(Dynamic Programming) 완벽 이해 - Memoization vs Tabulation, LCS, 배낭 문제',
  '중복 부분 문제와 최적 부분 구조 특성을 활용하는 동적 계획법, 하향식(Memoization)과 상향식(Tabulation) 접근법, LCS 및 배낭 문제(Knapsack) 구현을 다룹니다.',
  11,
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
  'algorithm',
  'ch12-space-time-tradeoff-and-backtracking',
  '공간-시간 트레이드오프와 백트래킹(Backtracking)',
  '추가 메모리 공간을 투자하여 연산 속도를 얻는 공간-시간 트레이드오프 개념 및 상태 공간 트리를 효율적으로 탐색하는 백트래킹(Backtracking) 기법을 학습합니다.',
  '# 공간-시간 트레이드오프와 백트래킹(Backtracking)

알고리즘 디자인에서는 **메모리(공간)를 더 써서 시간(속도)을 버는 트레이드오프 기법**과, 가능성 없는 경로를 빠르게 포기하는 **백트래킹(Backtracking)** 기법이 매우 중요하게 다루어집니다.

---

## 1. 공간으로 시간을 버는 공간-시간 트레이드오프

- **개념**: 보조 메모리 공간을 미리 할당하거나 데이터를 특수한 구조로 정렬해 두어 연산 속도를 극적으로 단축시킴.
- **대표 기법**:
  1. **해싱 (Hashing)**: 키(Key)를 해시 함수에 입력하여 인덱스로 직접 접근함으로써 평균 $O(1)$ 탐색 달성.
  2. **루트업 테이블 / 사전 계산**: 미리 계산된 값을 배열에 보관 (예: 삼각함수 테이블, 동적 계획법).
  3. **보이어-무어 문자열 매칭**: 이동 테이블을 미리 생성하여 불필요한 문자열 비교 건너뛰기.

---

## 2. 백트래킹(Backtracking) 알고리즘

모든 가능한 해를 찾는 **상태 공간 트리(State Space Tree)** 탐색 도중, 어떤 노드가 유망하지 않다(Non-promising)고 판단되면 부모 노드로 되돌아가(Backtrack) 다른 자식 노드를 탐색하는 조건부 완전 탐색 기법입니다.

- **가지치기 (Pruning)**: 유망하지 않은 노드의 서브트리 방문을 즉시 중단하여 탐색 시간을 대폭 절감함.

---

## 3. 백트래킹의 대명사: N-Queen 문제

$N 	imes N$ 체스판 위에 $N$개의 퀸을 서로 공격할 수 없도록 배치하는 대표적인 백트래킹 문제입니다.

```python
def solve_n_queens(n):
    col = set()
    pos_diag = set()  # (r + c)
    neg_diag = set()  # (r - c)
    res = 0

    def backtrack(r):
        nonlocal res
        if r == n:
            res += 1
            return
        for c in range(n):
            if c in col or (r + c) in pos_diag or (r - c) in neg_diag:
                continue
            col.add(c)
            pos_diag.add(r + c)
            neg_diag.add(r - c)

            backtrack(r + 1)

            col.remove(c)
            pos_diag.remove(r + c)
            neg_diag.remove(r - c)

    backtrack(0)
    return res

print(solve_n_queens(4))  # 4-Queen 해의 개수: 2
```

---

## 4. 백트래킹 vs 단순 완전 탐색(DFS)

| 구 분 | 단순 DFS (Brute-Force) | 백트래킹 (Backtracking) |
| :--- | :--- | :--- |
| **탐색 대상** | 상태 공간 트리의 **모든 노드**를 바닥까지 탐색 | 유망한(Promising) 노드만 선택적 탐색 |
| **비용 절감** | 없음 | **가지치기(Pruning)**를 통해 불필요한 경로 차단 |

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 해싱에서 해시 충돌(Hash Collision)이 발생하면 어떻게 해결하나요?**
A. 체이닝(Chaining, 동일 버킷을 연결 리스트로 연결) 방식이나 개방 주소법(Open Addressing, 선형 탐사/이차 탐사/이중 해싱)을 통해 빈 슬롯을 찾아 저장합니다.
',
  '<h1>공간-시간 트레이드오프와 백트래킹(Backtracking)</h1>
<p>알고리즘 디자인에서는 <strong>메모리(공간)를 더 써서 시간(속도)을 버는 트레이드오프 기법</strong>과, 가능성 없는 경로를 빠르게 포기하는 <strong>백트래킹(Backtracking)</strong> 기법이 매우 중요하게 다루어집니다.</p>
<hr>
<h2>1. 공간으로 시간을 버는 공간-시간 트레이드오프</h2>
<ul>
<li><strong>개념</strong>: 보조 메모리 공간을 미리 할당하거나 데이터를 특수한 구조로 정렬해 두어 연산 속도를 극적으로 단축시킴.</li>
<li><strong>대표 기법</strong>:<ol>
<li><strong>해싱 (Hashing)</strong>: 키(Key)를 해시 함수에 입력하여 인덱스로 직접 접근함으로써 평균 $O(1)$ 탐색 달성.</li>
<li><strong>루트업 테이블 / 사전 계산</strong>: 미리 계산된 값을 배열에 보관 (예: 삼각함수 테이블, 동적 계획법).</li>
<li><strong>보이어-무어 문자열 매칭</strong>: 이동 테이블을 미리 생성하여 불필요한 문자열 비교 건너뛰기.</li>
</ol>
</li>
</ul>
<hr>
<h2>2. 백트래킹(Backtracking) 알고리즘</h2>
<p>모든 가능한 해를 찾는 <strong>상태 공간 트리(State Space Tree)</strong> 탐색 도중, 어떤 노드가 유망하지 않다(Non-promising)고 판단되면 부모 노드로 되돌아가(Backtrack) 다른 자식 노드를 탐색하는 조건부 완전 탐색 기법입니다.</p>
<ul>
<li><strong>가지치기 (Pruning)</strong>: 유망하지 않은 노드의 서브트리 방문을 즉시 중단하여 탐색 시간을 대폭 절감함.</li>
</ul>
<hr>
<h2>3. 백트래킹의 대명사: N-Queen 문제</h2>
<p>$N 	imes N$ 체스판 위에 $N$개의 퀸을 서로 공격할 수 없도록 배치하는 대표적인 백트래킹 문제입니다.</p>
<pre><code class="language-python">def solve_n_queens(n):
    col = set()
    pos_diag = set()  # (r + c)
    neg_diag = set()  # (r - c)
    res = 0

    def backtrack(r):
        nonlocal res
        if r == n:
            res += 1
            return
        for c in range(n):
            if c in col or (r + c) in pos_diag or (r - c) in neg_diag:
                continue
            col.add(c)
            pos_diag.add(r + c)
            neg_diag.add(r - c)

            backtrack(r + 1)

            col.remove(c)
            pos_diag.remove(r + c)
            neg_diag.remove(r - c)

    backtrack(0)
    return res

print(solve_n_queens(4))  # 4-Queen 해의 개수: 2
</code></pre>
<hr>
<h2>4. 백트래킹 vs 단순 완전 탐색(DFS)</h2>
<table>
<thead>
<tr>
<th align="left">구 분</th>
<th align="left">단순 DFS (Brute-Force)</th>
<th align="left">백트래킹 (Backtracking)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>탐색 대상</strong></td>
<td align="left">상태 공간 트리의 <strong>모든 노드</strong>를 바닥까지 탐색</td>
<td align="left">유망한(Promising) 노드만 선택적 탐색</td>
</tr>
<tr>
<td align="left"><strong>비용 절감</strong></td>
<td align="left">없음</td>
<td align="left">**가지치기(Pruning)**를 통해 불필요한 경로 차단</td>
</tr>
</tbody></table>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 해싱에서 해시 충돌(Hash Collision)이 발생하면 어떻게 해결하나요?</strong>
A. 체이닝(Chaining, 동일 버킷을 연결 리스트로 연결) 방식이나 개방 주소법(Open Addressing, 선형 탐사/이차 탐사/이중 해싱)을 통해 빈 슬롯을 찾아 저장합니다.</p>
',
  'published',
  '공간-시간 트레이드오프(Space-Time Tradeoff) & 백트래킹 알고리즘 - 해싱, N-Queen',
  '메모리를 활용해 계산 속도를 높이는 기법(해싱, 사전 계산), 상태 공간 트리를 탐색하며 불필요한 경로를 가지치기(Pruning)하는 백트래킹 알고리즘과 N-Queen 문제를 다룹니다.',
  12,
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
