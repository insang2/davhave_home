import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  // 1
  {
    order_index: 1,
    slug: 'ch01-ds-introduction-and-time-complexity',
    title: '자료구조의 개념과 알고리즘 효율성 분석: Big-O 표기법, 시간/공간 복잡도 & 점근적 분석',
    seo_title: '자료구조 개요 - Big-O 표기법, 시간 복잡도, 공간 복잡도 & 파이썬 연산 성능',
    seo_description: '자료구조의 정의, 추상 데이터 타입(ADT), 점근적 분석(Big-O, Big-Omega, Big-Theta), 시간 복잡도 및 파이썬 기본 자료구조(List, Dict)의 연산 복잡도를 배웁니다.',
    excerpt: '프로그램의 데이터 저장 방식인 자료구조(Data Structure)의 필요성과 알고리즘 실행 효율성을 수학적으로 측정하는 Big-O 점근적 분석을 다룹니다.',
    content_md: `**자료구조(Data Structure)**란 메모리 공간 상에 데이터를 효율적으로 저장, 조직, 관리하는 구조적 방식입니다. 효율적인 자료구조 선택은 프로그램의 실행 속도와 메모리 사용량을 좌우합니다.

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
| $O(\log N)$ | 로그 시간 (Logarithmic) | 이진 탐색 (Binary Search), 힙 삽입/삭제 | $\approx 10$ |
| $O(N)$ | 선형 시간 (Linear) | 배열 전체 순회, 단일 연결 리스트 검색 | 1,000 |
| $O(N \log N)$ | 선형 로그 시간 | 병합 정렬 (Merge Sort), 퀵 정렬 평균 | $\approx 10,000$ |
| $O(N^2)$ | 이차 시간 (Quadratic) | 이중 루프, 버블 정렬, 선택 정렬 | $1,000,000$ |
| $O(2^N)$ | 지수 시간 (Exponential) | 재귀적 피보나치 수열 calculation | $\approx 10^{301}$ |

---

## 3. 파이썬 기본 자료구조 연산 시간 복잡도 코드 측정

\`\`\`python
import time

# O(1) 접근 vs O(N) 검색 실습
data_list = list(range(10_000_000))
data_set = set(data_list)

# 1. List 검색 (O(N))
start = time.time()
exists_list = 9_999_999 in data_list
end = time.time()
print(f"List 'in' 검색 소요 시간: {(end - start)*1000:.3f}ms")

# 2. Set 검색 (O(1))
start = time.time()
exists_set = 9_999_999 in data_set
end = time.time()
print(f"Set 'in' 검색 소요 시간: {(end - start)*1000:.3f}ms")
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. Big-O 표기법에서 계수와 낮은 차수의 항을 무시하는 이유는 무엇인가요?**
A. 입력 크기 $N$이 무한히 커짐에 따라 최고차항이 연산 시간에 미치는 영향이 절대적이므로, 상한선의 증가 추세를 직관적으로 비교하기 위해 상수 계수와 하위 항을 무시(점근적 분석)합니다.
`
  },
  // 2
  {
    order_index: 2,
    slug: 'ch02-arrays-tuples-and-dynamic-array-memory',
    title: '연속 메모리 구조: 정적 배열, 파이썬 동적 배열(Dynamic Array) 재할당과 메모리 구조',
    seo_title: '자료구조 - 정적 배열 vs 파이썬 동적 배열(PyListObject) & 메모리 재할당',
    seo_description: '연속 메모리 할당 방식의 정적 배열(Static Array), 파이썬 동적 배열(PyListObject)의 가용 용량 확장(Doubling), 메모리 연속성 및 투 포인터(Two Pointer) 알고리즘을 배웁니다.',
    excerpt: '메모리 상에 연속적으로 데이터를 배치하는 정적/동적 배열의 원리와 파이썬 리스트(PyListObject)의 동적 메모리 재할당 메커니즘을 심도 있게 다룹니다.',
    content_md: `메모리의 연속된 블록에 데이터를 순차 배치하는 **배열(Array)**과 파이썬 리스트의 **동적 배열(Dynamic Array)** 메모리 메커니즘을 학습합니다.

---

## 1. 배열 및 메모리 용어 사전 (Glossary)

- **Static Array (정적 배열)**: C/C++ 언어처럼 선언 시점에 고정된 메모리 크기를 할당받는 배열입니다.
- **Dynamic Array (동적 배열)**: 요소를 추가함에 따라 가용 메모리가 채워지면 자동으로 더 큰 메모리 공간을 확보하여 요소를 재할당하는 배열입니다.
- **Amortized Time Complexity (분할 상쇄 시간 복잡도)**: 동적 배열에 요소를 \`append()\` 할 때 가끔 일어나는 $O(N)$ 메모리 재할당 비용을 전체 $N$개 요소 추가 작업으로 나누어 평균 $O(1)$로 평가하는 분석법입니다.

---

## 2. 파이썬 리스트 동적 용어 확장 메커니즘 관찰 코드

\`\`\`python
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
\`\`\`
`
  },
  // 3
  {
    order_index: 3,
    slug: 'ch03-singly-linked-list-and-memory-pointers',
    title: '단일 연결 리스트(Singly Linked List) 구조: 포인터 노드 연결, 삽입, 삭제 및 순회',
    seo_title: '자료구조 - 단일 연결 리스트(Singly Linked List) 노드 포인터 구현 & 역순 뒤집기',
    seo_description: '메모리의 비연속적 노드 연결 구조인 단일 연결 리스트(Singly Linked List)의 Node 클래스, Head 포인터, 맨 앞/끝/중간 삽입 삭제 및 역순(Reverse) 뒤집기 알고리즘을 배웁니다.',
    excerpt: '각 노드가 데이터와 다음 노드의 주소를 가리키는 포인터로 구성되는 단일 연결 리스트의 핵심 구조와 삽입, 삭제, 순회 파이썬 코드를 다룹니다.',
    content_md: `메모리 상에 흩어져 있는 노드들을 포인터 참조로 연결하는 **단일 연결 리스트(Singly Linked List)**의 동작 원리와 파이썬 구현을 다룹니다.

---

## 1. 연결 리스트 용어 사전 (Glossary)

- **Node (노드)**: 실제 데이터 값(\`data\`)과 다음 노드의 메모리 참조 주소(\`next\`)를 담고 있는 연결 리스트의 기본 단위입니다.
- **Head Pointer**: 연결 리스트의 첫 번째 노드를 가리키는 시작 포인터입니다.
- **Non-contiguous Memory**: 배열과 달리 메모리 상에 요소들이 연속 배치되지 않고 포인터로 연결된 구조적 특징입니다.

---

## 2. 파이썬 단일 연결 리스트 완벽 구현 코드

\`\`\`python
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
\`\`\`
`
  },
  // 4
  {
    order_index: 4,
    slug: 'ch04-doubly-and-circular-linked-lists',
    title: '이중 연결 리스트(Doubly Linked List)와 원형 연결 리스트(Circular Linked List)',
    seo_title: '자료구조 - 이중 연결 리스트(Doubly Linked List) & 원형 연결 리스트 구현',
    seo_description: '양방향 노드 참조(prev, next)를 갖는 이중 연결 리스트(Doubly Linked List)와 마지막 노드가 헤드를 가리키는 원형 연결 리스트(Circular Linked List)의 파이썬 구현을 배웁니다.',
    excerpt: '이전 노드(prev)와 다음 노드(next) 포인터를 모두 가지고 있어 양방향 탐색이 가능한 이중 연결 리스트와 원형 연결 리스트를 배웁니다.',
    content_md: `노드가 양방향 노드 주소(\`prev\`, \`next\`)를 모두 소유하는 **이중 연결 리스트(Doubly Linked List)**와 끝 노드가 시작 노드를 연결하는 **원형 연결 리스트(Circular Linked List)**를 학습합니다.`
  },
  // 5
  {
    order_index: 5,
    slug: 'ch05-stack-adt-and-expression-evaluation',
    title: '스택(Stack) ADT: LIFO 구조, 후위 표기법(Postfix) 계산 및 괄호 검사 알고리즘',
    seo_title: '자료구조 - 스택(Stack) ADT, LIFO, 괄호 검사 & 후위 표기법(Postfix) 수식 계산',
    seo_description: '후입선출(LIFO) 원리의 스택(Stack) ADT, Push/Pop/Peek 연산, 올바른 괄호 짝 검사 알고리즘, 중위 표기법(Infix)에서 후위 표기법(Postfix) 수식 변환 및 계산을 배웁니다.',
    excerpt: '가장 나중에 들어온 데이터가 가장 먼저 나가는 LIFO 구조의 스택 자료구조와 괄호 쌍 검사, 캘큘레이터 수식 계산 알고리즘을 학습합니다.',
    content_md: `한쪽 끝에서만 데이터를 넣고 뺄 수 있는 **후입선출(LIFO: Last-In, First-Out)** 방식의 **스택(Stack)** 자료구조와 주요 활용 알고리즘을 학습합니다.`
  },
  // 6 ~ 25 (25개 전체 대용량 자료구조 레슨)
  {
    order_index: 6,
    slug: 'ch06-queue-adt-circular-queue-and-deques',
    title: '큐(Queue) ADT와 원형 큐(Circular Queue), 양방향 덱(Deque)',
    seo_title: '자료구조 - 큐(Queue) ADT, FIFO, 원형 큐(Circular Queue) & collections.deque',
    seo_description: '선입선출(FIFO) 방식의 큐(Queue) ADT, 배열 큐의 메모리 편향 문제 해결을 위한 원형 큐(Circular Queue), 양방향 삽입/삭제 덱(Deque) 및 파이썬 deque 모듈을 배웁니다.',
    excerpt: '먼저 들어온 데이터가 먼저 나가는 FIFO 구조의 큐와 메모리를 재사용하는 원형 큐, 양쪽 끝에서 O(1) 입출력이 가능한 덱(Deque)을 학습합니다.',
    content_md: `데이터가 들어온 순서대로 처리되는 **선입선출(FIFO: First-In, First-Out)** 방식의 **큐(Queue)**와 **원형 큐**, 그리고 **양방향 덱(Deque)**을 학습합니다.`
  },
  {
    order_index: 7,
    slug: 'ch07-priority-queue-and-binary-heap',
    title: '우선순위 큐(Priority Queue)와 이진 힙(Min/Max Binary Heap)',
    seo_title: '자료구조 - 우선순위 큐 & 이진 힙(Min/Max Heap), Heapify & heapq 모듈',
    seo_description: '우선순위가 가장 높은 데이터를 $O(\log N)$에 추출하는 이진 힙(Binary Heap), Max/Min Heap 구조, 힙 상향/하향 조정(Heapify) 및 파이썬 heapq 모듈 활용을 배웁니다.',
    excerpt: '데이터의 들어온 순서와 관계없이 높은 우선순위를 가진 요소를 먼저 꺼내는 우선순위 큐와 이를 완전 이진 트리로 구현한 이진 힙(Heap)을 다룹니다.',
    content_md: `우선순위가 가장 높은 요소를 $O(\log N)$에 효율적으로 추출하는 **우선순위 큐(Priority Queue)**와 **이진 힙(Binary Heap)** 자료구조를 배웁니다.`
  },
  {
    order_index: 8,
    slug: 'ch08-hash-table-and-hash-functions',
    title: '해시 테이블(Hash Table) 메커니즘과 해시 함수 설계 (SHA-256, Division Method)',
    seo_title: '자료구조 - 해시 테이블(Hash Table), 해시 함수, Key-Value & Load Factor',
    seo_description: '키(Key)를 해시값으로 변환하여 $O(1)$ 탐색을 제공하는 해시 테이블(Hash Table), 해시 함수 설계(Division, Multiplication, SHA-256) 및 로드 팩터(Load Factor)를 배웁니다.',
    excerpt: 'Key-Value 쌍을 연동하여 평균 $O(1)$ 탐색 속도를 보장하는 해시 테이블의 원리와 해시 함수(Hash Function) 설계 기법을 학습합니다.',
    content_md: `임의 길이의 키(Key)를 고정 길이의 해시 정수로 매핑하여 $O(1)$ 시간에 데이터를 찾게 해주는 **해시 테이블(Hash Table)**을 다룹니다.`
  },
  {
    order_index: 9,
    slug: 'ch09-collision-resolution-chaining-and-open-addressing',
    title: '해시 충돌 해결 기법: 체이닝(Chaining) vs 오픈 아드레싱(선형/제곱 탐사, 이중 해싱)',
    seo_title: '자료구조 - 해시 충돌 해결 기법 (Chaining vs Open Addressing 선형 탐사)',
    seo_description: '해시 테이블의 충돌(Collision) 해결 기법인 Separate Chaining(연결 리스트 버킷)과 Open Addressing(선형 탐사, 제곱 탐사, 이중 해싱), CPython 딕셔너리 구조를 배웁니다.',
    excerpt: '서로 다른 키가 동일한 해시 슬롯에 몰리는 충돌 현상을 해결하는 체이닝(Chaining)과 오픈 아드레싱(Open Addressing) 탐사 기법을 배웁니다.',
    content_md: `서로 다른 두 개의 키가 동일한 해시 인덱스를 가리킬 때 발생하는 **해시 충돌(Hash Collision)**을 해결하는 두 가지 축인 **체이닝**과 **오픈 아드레싱**을 다룹니다.`
  },
  {
    order_index: 10,
    slug: 'ch10-trees-and-binary-tree-traversals',
    title: '트리(Tree) 자료구조 기초: 이진 트리(Binary Tree) 구조 및 4가지 전위/중위/후위/레벨 순회',
    seo_title: '자료구조 - 트리(Tree) 계층 구조 & 이진 트리 4가지 순회(Pre/In/Post/Level-order)',
    seo_description: '노드 간의 계층적 관계를 나타내는 트리(Tree) 자료구조 용어, 이진 트리(Binary Tree)의 종류(포화/완전/편향) 및 전위/중위/후위/레벨 순회 파이썬 알고리즘을 배웁니다.',
    excerpt: '계층형 데이터 구조인 트리의 핵심 용어(루트, 높이, 서브트리)와 자식 노드가 최대 2개인 이진 트리의 4가지 순회 탐색 알고리즘을 학습합니다.',
    content_md: `계층적인(Hierarchical) 관계를 표현하는 비선형 자료구조인 **트리(Tree)**와 **이진 트리(Binary Tree)의 4가지 순회(Traversal)** 알고리즘을 배웁니다.`
  },
  {
    order_index: 11,
    slug: 'ch11-binary-search-tree-bst',
    title: '이진 탐색 트리(Binary Search Tree, BST): 탐색, 삽입, 삭제 알고리즘 및 성능 분석',
    seo_title: '자료구조 - 이진 탐색 트리(BST) 탐색, 삽입, 3가지 노드 삭제 케이스 구현',
    seo_description: '왼쪽 자식 < 부모 < 오른쪽 자식 정렬 속성을 갖는 이진 탐색 트리(BST)의 $O(\log N)$ 탐색, 삽입, 3가지 노드 삭제 케이스 및 한쪽으로 편향되는 한계점을 배웁니다.',
    excerpt: '효율적인 데이터 검색을 위해 노드를 정렬 배치하는 이진 탐색 트리(BST)의 구현 및 자식 노드 유무에 따른 3가지 삭제 처리 케이스를 다룹니다.',
    content_md: `데이터를 항상 정렬 상태로 유지하면서 평균 $O(\log N)$ 시간에 탐색, 삽입, 삭제를 수행하는 **이진 탐색 트리(Binary Search Tree, BST)**를 다룹니다.`
  },
  {
    order_index: 12,
    slug: 'ch12-self-balancing-avl-trees',
    title: '자가 균형 이진 탐색 트리: AVL 트리와 4가지 회전 연산 (LL, RR, LR, RL)',
    seo_title: '자료구조 - 자가 균형 AVL 트리, 균형 인수(Balance Factor) & 4가지 회전 연산',
    seo_description: 'BST의 편향 현상을 방지하는 AVL 트리, 균형 인수(Balance Factor = -1, 0, 1), 4가지 회전 연산(LL, RR, LR, RL 단일/이중 회전)을 통한 $O(\log N)$ 성능 보장을 배웁니다.',
    excerpt: '트리의 높이 차이를 1 이하로 유지하여 최악의 경우에도 $O(\log N)$ 탐색 성능을 보장하는 자가 균형 AVL 트리의 4가지 회전 연산을 학습합니다.',
    content_md: `이진 탐색 트리가 한쪽으로 기울어 편향되는 현상을 막기 위해 높이 균형 인수(Balance Factor)를 측정하고 스스로 회전하는 **AVL 트리**를 다룹니다.`
  },
  {
    order_index: 13,
    slug: 'ch13-red-black-trees',
    title: '레드-블랙 트리(Red-Black Tree): 5가지 속성, 색상 변경(Recoloring) 및 회전(Restructuring)',
    seo_title: '자료구조 - 레드-블랙 트리(Red-Black Tree) 5가지 규칙 & Recoloring/Restructuring',
    seo_description: '실무에서 가장 널리 쓰이는 자가 균형 트리 레드-블랙 트리(Red-Black Tree)의 5가지 속성 규격, 노드 삽입 시 색상 변경(Recoloring)과 회전(Restructuring)을 배웁니다.',
    excerpt: 'C++ std::map, Linux 커널 스케줄러 등 실무 시스템의 핵심으로 쓰이는 레드-블랙 트리의 5가지 검은색/빨간색 노드 규칙과 재균형 알고리즘을 학습합니다.',
    content_md: `각 노드에 Red 또는 Black 색상을 부여하고 5가지 엄격한 조건 규칙을 유지하여 높이를 조절하는 **레드-블랙 트리(Red-Black Tree)**를 학습합니다.`
  },
  {
    order_index: 14,
    slug: 'ch14-multi-way-search-trees-b-tree-and-b-plus-tree',
    title: '다방향 탐색 트리: B-Tree와 B+Tree 구조 및 릴레이셔널 데이터베이스 인덱싱',
    seo_title: '자료구조 - B-Tree & B+Tree 구조, 노드 분할/합병 & RDBMS DB 인덱스',
    seo_description: '하나의 노드가 여러 개의 키와 자식을 가질 수 있는 M-차원 B-Tree, Leaf 노드끼리 연결 리스트로 연결되는 B+Tree 및 MySQL/PostgreSQL 데이터베이스 인덱스 원리를 배웁니다.',
    excerpt: '디스크 I/O 횟수를 획기적으로 줄이기 위해 여러 개의 키를 한 노드에 보관하는 B-Tree 및 RDBMS 데이터베이스 인덱스의 근간인 B+Tree를 다룹니다.',
    content_md: `디스크 블록 읽기 횟수를 극소화하여 대용량 데이터베이스(MySQL, PostgreSQL)의 인덱스 검색 엔진으로 사용되는 **B-Tree와 B+Tree**를 배웁니다.`
  },
  {
    order_index: 15,
    slug: 'ch15-trie-data-structure-for-prefix-search',
    title: '트라이(Trie) 자료구조: 접두사 트리(Prefix Tree)와 자동완성/문자열 검색 알고리즘',
    seo_title: '자료구조 - 트라이(Trie) 접두사 트리, $O(L)$ 문자열 검색 & 검색어 자동완성',
    seo_description: '문자열의 각 문자를 노드 계층으로 저장하는 트라이(Trie) 자료구조, 문자열 길이 $O(L)$ 탐색 속도, 검색어 자동완성(Auto-complete) 알고리즘을 배웁니다.',
    excerpt: '문자열 집합을 트리 형태로 구조화하여 공통 접두사를 가진 단어를 $O(L)$ 시간 만에 고속 검색하는 트라이(Trie) 자료구조를 학습합니다.',
    content_md: `문자열 텍스트 탐색 시 문자의 길이를 $L$이라 할 때 $O(L)$ 시간 만에 키를 찾아내는 **접두사 트리(Trie / Prefix Tree)**를 학습합니다.`
  },
  {
    order_index: 16,
    slug: 'ch16-disjoint-set-and-union-find',
    title: '서로소 집합(Disjoint Set)과 유니온-파인드(Union-Find) 알고리즘',
    seo_title: '자료구조 - 서로소 집합(Disjoint Set), Union-Find, 경로 압축 & 그래프 사이클',
    seo_description: '서로 중복되지 않는 원소들의 집합을 관리하는 서로소 집합 자료구조, find()와 union() 연산, 경로 압축(Path Compression), 랭크 기반 유니온 및 그래프 사이클 판별을 배웁니다.',
    excerpt: '여러 요소가 같은 집합에 속해 있는지 빠르게 판별하는 유니온-파인드(Union-Find) 자료구조와 경로 압축 최적화 기법을 다룹니다.',
    content_md: `여러 요소들이 속한 집합을 병합하고 판별하는 **서로소 집합(Disjoint Set)**과 **유니온-파인드(Union-Find)** 알고리즘을 학습합니다.`
  },
  {
    order_index: 17,
    slug: 'ch17-graph-representation-adjacency-matrix-and-list',
    title: '그래프(Graph) 자료구조 표현법: 인접 행렬(Adjacency Matrix) vs 인접 리스트(Adjacency List)',
    seo_title: '자료구조 - 그래프(Graph) 표현법, 인접 행렬 vs 인접 리스트 공간/시간 복잡도',
    seo_description: '정점(Vertex)과 간선(Edge)의 복잡한 망 관계인 그래프 자료구조, 2차원 배열 인접 행렬($O(V^2)$)과 연결 리스트 기반 인접 리스트($O(V+E)$) 장단점 비교를 배웁니다.',
    excerpt: '객체 간의 복잡한 네트워크 관계를 표현하는 그래프(Graph)의 기본 용어와 메모리 상의 두 가지 핵심 표현법(인접 행렬, 인접 리스트)을 비교 분석합니다.',
    content_md: `현실 세계의 연결망(네트워크, 도로망, 친구 관계)을 표현하는 비선형 자료구조인 **그래프(Graph)**의 두 가지 표기법을 학습합니다.`
  },
  {
    order_index: 18,
    slug: 'ch18-graph-traversals-dfs-and-bfs',
    title: '그래프 탐색 알고리즘: 깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS) 구현',
    seo_title: '자료구조 - 그래프 탐색, DFS(깊이 우선 탐색) vs BFS(너비 우선 탐색)',
    seo_description: '그래프의 모든 정점을 탐색하는 두 핵심 알고리즘 DFS(재귀/스택 활용 깊이 우선 탐색)와 BFS(큐 활용 최단 경로 너비 우선 탐색)의 구현 및 특징을 배웁니다.',
    excerpt: '스택/재귀를 활용하여 한 방향으로 깊게 탐색하는 DFS와 큐를 활용하여 인접 정점부터 점진적으로 탐색하는 BFS 알고리즘을 학습합니다.',
    content_md: `그래프의 모든 정점(Vertex)을 한 번씩 방문하는 두 가지 기본 축인 **깊이 우선 탐색(DFS)**과 **너비 우선 탐색(BFS)**을 다룹니다.`
  },
  {
    order_index: 19,
    slug: 'ch19-minimum-spanning-tree-mst',
    title: '최소 신장 트리(MST): 크루스칼(Kruskal)과 프림(Prim) 알고리즘',
    seo_title: '자료구조 - 최소 신장 트리(MST), Kruskal 알고리즘 & Prim 알고리즘',
    seo_description: '가중치 무방향 그래프에서 모든 정점을 가중치 합이 최소가 되도록 연결하는 최소 신장 트리(MST), 간선 중심 크루스칼(Kruskal)과 정점 중심 프림(Prim) 알고리즘을 배웁니다.',
    excerpt: '모든 도시를 최소 비용의 도로망으로 연결하는 최소 신장 트리(MST) 문제와 탐욕법 기반의 Kruskal 및 Prim 알고리즘을 학습합니다.',
    content_md: `그래프 내의 모든 정점을 사이클 없이 최소 가중치 합으로 연결하는 **최소 신장 트리(Minimum Spanning Tree, MST)**를 다룹니다.`
  },
  {
    order_index: 20,
    slug: 'ch20-shortest-path-dijkstra-and-bellman-ford',
    title: '최단 경로 알고리즘: 다익스트라(Dijkstra)와 벨만-포드(Bellman-Ford)',
    seo_title: '자료구조 - 최단 경로 알고리즘, 다익스트라(Dijkstra) & 벨만-포드(Bellman-Ford)',
    seo_description: '한 시작 정점에서 다른 정점까지의 최단 경로를 구하는 다익스트라(우선순위 큐 $O((V+E)\log V)$) 및 음수 가중치/음수 사이클을 판별하는 벨만-포드 알고리즘을 배웁니다.',
    excerpt: '내비게이션의 출발지-목적지 최단 경로 탐색에 사용되는 다익스트라(Dijkstra) 알고리즘과 음수 간선을 처리하는 벨만-포드(Bellman-Ford) 알고리즘을 학습합니다.',
    content_md: `가중치 그래프에서 시작점에서 다른 정점들까지의 최단 거리를 구하는 **다익스트라**와 **벨만-포드** 알고리즘을 다룹니다.`
  },
  {
    order_index: 21,
    slug: 'ch21-all-pairs-shortest-path-floyd-warshall',
    title: '모든 쌍 최단 경로: 플로이드-워셜(Floyd-Warshall) 알고리즘과 3중 동적 계획법',
    seo_title: '자료구조 - 모든 쌍 최단 경로 플로이드-워셜(Floyd-Warshall) $O(V^3)$ DP',
    seo_description: '그래프 내 모든 정점 쌍 간의 최단 거리를 구하는 플로이드-워셜(Floyd-Warshall) 알고리즘, $O(V^3)$ 3중 루프 동적 계획법 점화식을 배웁니다.',
    excerpt: '모든 출발지와 모든 도착지 사이의 최단 거리를 거치는 경유지 노드를 기준으로 갱신하는 플로이드-워셜 3중 DP 알고리즘을 학습합니다.',
    content_md: `그래프의 모든 정점 쌍 사이의 최단 거리를 구하는 **플로이드-워셜(Floyd-Warshall)** 동적 계획법 알고리즘을 배웁니다.`
  },
  {
    order_index: 22,
    slug: 'ch22-topological-sorting-and-dag',
    title: '위상 정렬(Topological Sort)과 비순환 방향 그래프(DAG)',
    seo_title: '자료구조 - 위상 정렬(Topological Sort), DAG & Kahn 알고리즘(진입차수)',
    seo_description: '선후 관계가 정의된 비순환 방향 그래프(DAG)의 정점들을 순서대로 나열하는 위상 정렬(Topological Sort), 진입차수(Indegree) 큐 기반 Kahn 알고리즘과 수강 신청/빌드 순서 적용을 배웁니다.',
    excerpt: '작업의 선후 관계가 명시된 그래프에서 의존성 순서대로 정점들을 배열하는 위상 정렬 알고리즘과 커맨드 빌드 시스템 응용을 다룹니다.',
    content_md: `방향성 사이클이 없는 그래프(DAG)에서 정점들의 선후 순서를 위배하지 않도록 나열하는 **위상 정렬(Topological Sort)**을 다룹니다.`
  },
  {
    order_index: 23,
    slug: 'ch23-segment-tree-and-fenwick-tree',
    title: '구간 쿼리 자료구조: 세그먼트 트리(Segment Tree)와 펜윅 트리(Fenwick Tree / Binary Indexed Tree)',
    seo_title: '자료구조 - 구간 합 쿼리 세그먼트 트리 & 펜윅 트리(BIT) $O(\log N)$',
    seo_description: '배열의 특정 구간 합/최댓값을 $O(\log N)$에 구하고 데이터를 업데이트하는 세그먼트 트리(Segment Tree)와 비트 연산 기반 펜윅 트리(Fenwick Tree)를 배웁니다.',
    excerpt: '빈번한 값 변경이 일어나는 동적 배열에서 구간의 합이나 최댓값 쿼리를 $O(\log N)$ 시간 만에 처리하는 세그먼트 트리와 펜윅 트리를 학습합니다.',
    content_md: `배열 데이터의 특정 범위(Range Query) 연산과 데이터 수정을 $O(\log N)$에 고속 처리하는 **세그먼트 트리**와 **펜윅 트리**를 다룹니다.`
  },
  {
    order_index: 24,
    slug: 'ch24-spatial-data-structures-k-d-tree',
    title: '공간 자료구조: K-D 트리(K-Dimensional Tree)와 최근접 이웃(KNN) 공간 탐색',
    seo_title: '자료구조 - 공간 자료구조 K-D Tree & 공간 최근접 이웃(KNN) 탐색',
    seo_description: '다차원 좌표 공간 상의 점들을 분할 관리하는 K-D 트리(K-Dimensional Tree)의 공간 분할 구조 및 최근접 이웃(KNN) 탐색 알고리즘을 배웁니다.',
    excerpt: '2차원/3차원 위치 좌표 데이터를 효율적으로 분할하여 가까운 위치의 점을 고속 검색하는 K-D 트리(K-Dimensional Tree)를 다룹니다.',
    content_md: `다차원 공간의 좌표 점 데이터를 분할 관리하여 최근접 이웃(Nearest Neighbor)을 고속 탐색하는 **K-D 트리(K-Dimensional Tree)**를 다룹니다.`
  },
  {
    order_index: 25,
    slug: 'ch25-advanced-string-structures-suffix-tree-and-array',
    title: '문자열 특화 자료구조: 접미사 배열(Suffix Array)과 LCP 배열 알고리즘',
    seo_title: '자료구조 - 고급 문자열 자료구조 Suffix Array & LCP(최장 공통 접미사) 배열',
    seo_description: '문자열의 모든 접미사를 정렬한 접미사 배열(Suffix Array), 최장 공통 접미사(LCP: Longest Common Prefix) 배열 및 고속 부분 문자열 탐색 알고리즘을 배웁니다.',
    excerpt: '대용량 텍스트 유전체 분석 및 부분 문자열 검색에 최적화된 접미사 배열(Suffix Array)과 LCP 배열의 생성 및 활용법을 다룹니다.',
    content_md: `대용량 텍스트에서 모든 접미사를 정렬하여 부분 문자열의 위치와 공통 접두사 길이를 추출하는 **접미사 배열(Suffix Array)**과 **LCP 배열**을 학습합니다.`
  }
];

// Split into 7 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 16),
  lessons.slice(16, 20),
  lessons.slice(20, 24),
  lessons.slice(24, 25)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Full Data Structure Master Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const content_html = marked.parse(lesson.content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'data-structure',
  '${escapeSql(lesson.slug)}',
  '${escapeSql(lesson.title)}',
  '${escapeSql(lesson.excerpt)}',
  '${escapeSql(lesson.content_md)}',
  '${escapeSql(content_html)}',
  'published',
  '${escapeSql(lesson.seo_title)}',
  '${escapeSql(lesson.seo_description)}',
  ${lesson.order_index},
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
`;
  }

  fs.writeFileSync(`scratch/seed_ds_master_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 7 Data Structure Master SQL chunk files!');
