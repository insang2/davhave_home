-- Full Data Structure Master Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'data-structure',
  'ch09-collision-resolution-chaining-and-open-addressing',
  '해시 충돌 해결 기법: 체이닝(Chaining) vs 오픈 아드레싱(선형/제곱 탐사, 이중 해싱)',
  '서로 다른 키가 동일한 해시 슬롯에 몰리는 충돌 현상을 해결하는 체이닝(Chaining)과 오픈 아드레싱(Open Addressing) 탐사 기법을 배웁니다.',
  '서로 다른 두 개의 키가 동일한 해시 인덱스를 가리킬 때 발생하는 **해시 충돌(Hash Collision)**을 해결하는 두 가지 축인 **체이닝**과 **오픈 아드레싱**을 다룹니다.',
  '<p>서로 다른 두 개의 키가 동일한 해시 인덱스를 가리킬 때 발생하는 **해시 충돌(Hash Collision)**을 해결하는 두 가지 축인 <strong>체이닝</strong>과 <strong>오픈 아드레싱</strong>을 다룹니다.</p>
',
  'published',
  '자료구조 - 해시 충돌 해결 기법 (Chaining vs Open Addressing 선형 탐사)',
  '해시 테이블의 충돌(Collision) 해결 기법인 Separate Chaining(연결 리스트 버킷)과 Open Addressing(선형 탐사, 제곱 탐사, 이중 해싱), CPython 딕셔너리 구조를 배웁니다.',
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
  'data-structure',
  'ch10-trees-and-binary-tree-traversals',
  '트리(Tree) 자료구조 기초: 이진 트리(Binary Tree) 구조 및 4가지 전위/중위/후위/레벨 순회',
  '계층형 데이터 구조인 트리의 핵심 용어(루트, 높이, 서브트리)와 자식 노드가 최대 2개인 이진 트리의 4가지 순회 탐색 알고리즘을 학습합니다.',
  '계층적인(Hierarchical) 관계를 표현하는 비선형 자료구조인 **트리(Tree)**와 **이진 트리(Binary Tree)의 4가지 순회(Traversal)** 알고리즘을 배웁니다.',
  '<p>계층적인(Hierarchical) 관계를 표현하는 비선형 자료구조인 **트리(Tree)**와 <strong>이진 트리(Binary Tree)의 4가지 순회(Traversal)</strong> 알고리즘을 배웁니다.</p>
',
  'published',
  '자료구조 - 트리(Tree) 계층 구조 & 이진 트리 4가지 순회(Pre/In/Post/Level-order)',
  '노드 간의 계층적 관계를 나타내는 트리(Tree) 자료구조 용어, 이진 트리(Binary Tree)의 종류(포화/완전/편향) 및 전위/중위/후위/레벨 순회 파이썬 알고리즘을 배웁니다.',
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
  'data-structure',
  'ch11-binary-search-tree-bst',
  '이진 탐색 트리(Binary Search Tree, BST): 탐색, 삽입, 삭제 알고리즘 및 성능 분석',
  '효율적인 데이터 검색을 위해 노드를 정렬 배치하는 이진 탐색 트리(BST)의 구현 및 자식 노드 유무에 따른 3가지 삭제 처리 케이스를 다룹니다.',
  '데이터를 항상 정렬 상태로 유지하면서 평균 $O(log N)$ 시간에 탐색, 삽입, 삭제를 수행하는 **이진 탐색 트리(Binary Search Tree, BST)**를 다룹니다.',
  '<p>데이터를 항상 정렬 상태로 유지하면서 평균 $O(log N)$ 시간에 탐색, 삽입, 삭제를 수행하는 **이진 탐색 트리(Binary Search Tree, BST)**를 다룹니다.</p>
',
  'published',
  '자료구조 - 이진 탐색 트리(BST) 탐색, 삽입, 3가지 노드 삭제 케이스 구현',
  '왼쪽 자식 < 부모 < 오른쪽 자식 정렬 속성을 갖는 이진 탐색 트리(BST)의 $O(log N)$ 탐색, 삽입, 3가지 노드 삭제 케이스 및 한쪽으로 편향되는 한계점을 배웁니다.',
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
  'data-structure',
  'ch12-self-balancing-avl-trees',
  '자가 균형 이진 탐색 트리: AVL 트리와 4가지 회전 연산 (LL, RR, LR, RL)',
  '트리의 높이 차이를 1 이하로 유지하여 최악의 경우에도 $O(log N)$ 탐색 성능을 보장하는 자가 균형 AVL 트리의 4가지 회전 연산을 학습합니다.',
  '이진 탐색 트리가 한쪽으로 기울어 편향되는 현상을 막기 위해 높이 균형 인수(Balance Factor)를 측정하고 스스로 회전하는 **AVL 트리**를 다룹니다.',
  '<p>이진 탐색 트리가 한쪽으로 기울어 편향되는 현상을 막기 위해 높이 균형 인수(Balance Factor)를 측정하고 스스로 회전하는 <strong>AVL 트리</strong>를 다룹니다.</p>
',
  'published',
  '자료구조 - 자가 균형 AVL 트리, 균형 인수(Balance Factor) & 4가지 회전 연산',
  'BST의 편향 현상을 방지하는 AVL 트리, 균형 인수(Balance Factor = -1, 0, 1), 4가지 회전 연산(LL, RR, LR, RL 단일/이중 회전)을 통한 $O(log N)$ 성능 보장을 배웁니다.',
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
