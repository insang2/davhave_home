-- Full Data Structure Master Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'data-structure',
  'ch05-stack-adt-and-expression-evaluation',
  '스택(Stack) ADT: LIFO 구조, 후위 표기법(Postfix) 계산 및 괄호 검사 알고리즘',
  '가장 나중에 들어온 데이터가 가장 먼저 나가는 LIFO 구조의 스택 자료구조와 괄호 쌍 검사, 캘큘레이터 수식 계산 알고리즘을 학습합니다.',
  '한쪽 끝에서만 데이터를 넣고 뺄 수 있는 **후입선출(LIFO: Last-In, First-Out)** 방식의 **스택(Stack)** 자료구조와 주요 활용 알고리즘을 학습합니다.',
  '<p>한쪽 끝에서만 데이터를 넣고 뺄 수 있는 <strong>후입선출(LIFO: Last-In, First-Out)</strong> 방식의 <strong>스택(Stack)</strong> 자료구조와 주요 활용 알고리즘을 학습합니다.</p>
',
  'published',
  '자료구조 - 스택(Stack) ADT, LIFO, 괄호 검사 & 후위 표기법(Postfix) 수식 계산',
  '후입선출(LIFO) 원리의 스택(Stack) ADT, Push/Pop/Peek 연산, 올바른 괄호 짝 검사 알고리즘, 중위 표기법(Infix)에서 후위 표기법(Postfix) 수식 변환 및 계산을 배웁니다.',
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
  'ch06-queue-adt-circular-queue-and-deques',
  '큐(Queue) ADT와 원형 큐(Circular Queue), 양방향 덱(Deque)',
  '먼저 들어온 데이터가 먼저 나가는 FIFO 구조의 큐와 메모리를 재사용하는 원형 큐, 양쪽 끝에서 O(1) 입출력이 가능한 덱(Deque)을 학습합니다.',
  '데이터가 들어온 순서대로 처리되는 **선입선출(FIFO: First-In, First-Out)** 방식의 **큐(Queue)**와 **원형 큐**, 그리고 **양방향 덱(Deque)**을 학습합니다.',
  '<p>데이터가 들어온 순서대로 처리되는 <strong>선입선출(FIFO: First-In, First-Out)</strong> 방식의 **큐(Queue)**와 <strong>원형 큐</strong>, 그리고 **양방향 덱(Deque)**을 학습합니다.</p>
',
  'published',
  '자료구조 - 큐(Queue) ADT, FIFO, 원형 큐(Circular Queue) & collections.deque',
  '선입선출(FIFO) 방식의 큐(Queue) ADT, 배열 큐의 메모리 편향 문제 해결을 위한 원형 큐(Circular Queue), 양방향 삽입/삭제 덱(Deque) 및 파이썬 deque 모듈을 배웁니다.',
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
  'ch07-priority-queue-and-binary-heap',
  '우선순위 큐(Priority Queue)와 이진 힙(Min/Max Binary Heap)',
  '데이터의 들어온 순서와 관계없이 높은 우선순위를 가진 요소를 먼저 꺼내는 우선순위 큐와 이를 완전 이진 트리로 구현한 이진 힙(Heap)을 다룹니다.',
  '우선순위가 가장 높은 요소를 $O(log N)$에 효율적으로 추출하는 **우선순위 큐(Priority Queue)**와 **이진 힙(Binary Heap)** 자료구조를 배웁니다.',
  '<p>우선순위가 가장 높은 요소를 $O(log N)$에 효율적으로 추출하는 **우선순위 큐(Priority Queue)**와 <strong>이진 힙(Binary Heap)</strong> 자료구조를 배웁니다.</p>
',
  'published',
  '자료구조 - 우선순위 큐 & 이진 힙(Min/Max Heap), Heapify & heapq 모듈',
  '우선순위가 가장 높은 데이터를 $O(log N)$에 추출하는 이진 힙(Binary Heap), Max/Min Heap 구조, 힙 상향/하향 조정(Heapify) 및 파이썬 heapq 모듈 활용을 배웁니다.',
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
  'ch08-hash-table-and-hash-functions',
  '해시 테이블(Hash Table) 메커니즘과 해시 함수 설계 (SHA-256, Division Method)',
  'Key-Value 쌍을 연동하여 평균 $O(1)$ 탐색 속도를 보장하는 해시 테이블의 원리와 해시 함수(Hash Function) 설계 기법을 학습합니다.',
  '임의 길이의 키(Key)를 고정 길이의 해시 정수로 매핑하여 $O(1)$ 시간에 데이터를 찾게 해주는 **해시 테이블(Hash Table)**을 다룹니다.',
  '<p>임의 길이의 키(Key)를 고정 길이의 해시 정수로 매핑하여 $O(1)$ 시간에 데이터를 찾게 해주는 **해시 테이블(Hash Table)**을 다룹니다.</p>
',
  'published',
  '자료구조 - 해시 테이블(Hash Table), 해시 함수, Key-Value & Load Factor',
  '키(Key)를 해시값으로 변환하여 $O(1)$ 탐색을 제공하는 해시 테이블(Hash Table), 해시 함수 설계(Division, Multiplication, SHA-256) 및 로드 팩터(Load Factor)를 배웁니다.',
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
