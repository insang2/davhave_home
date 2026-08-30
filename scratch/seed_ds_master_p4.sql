-- Full Data Structure Master Lessons Part 4

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'data-structure',
  'ch13-red-black-trees',
  '레드-블랙 트리(Red-Black Tree): 5가지 속성, 색상 변경(Recoloring) 및 회전(Restructuring)',
  'C++ std::map, Linux 커널 스케줄러 등 실무 시스템의 핵심으로 쓰이는 레드-블랙 트리의 5가지 검은색/빨간색 노드 규칙과 재균형 알고리즘을 학습합니다.',
  '각 노드에 Red 또는 Black 색상을 부여하고 5가지 엄격한 조건 규칙을 유지하여 높이를 조절하는 **레드-블랙 트리(Red-Black Tree)**를 학습합니다.',
  '<p>각 노드에 Red 또는 Black 색상을 부여하고 5가지 엄격한 조건 규칙을 유지하여 높이를 조절하는 **레드-블랙 트리(Red-Black Tree)**를 학습합니다.</p>
',
  'published',
  '자료구조 - 레드-블랙 트리(Red-Black Tree) 5가지 규칙 & Recoloring/Restructuring',
  '실무에서 가장 널리 쓰이는 자가 균형 트리 레드-블랙 트리(Red-Black Tree)의 5가지 속성 규격, 노드 삽입 시 색상 변경(Recoloring)과 회전(Restructuring)을 배웁니다.',
  13,
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
  'ch14-multi-way-search-trees-b-tree-and-b-plus-tree',
  '다방향 탐색 트리: B-Tree와 B+Tree 구조 및 릴레이셔널 데이터베이스 인덱싱',
  '디스크 I/O 횟수를 획기적으로 줄이기 위해 여러 개의 키를 한 노드에 보관하는 B-Tree 및 RDBMS 데이터베이스 인덱스의 근간인 B+Tree를 다룹니다.',
  '디스크 블록 읽기 횟수를 극소화하여 대용량 데이터베이스(MySQL, PostgreSQL)의 인덱스 검색 엔진으로 사용되는 **B-Tree와 B+Tree**를 배웁니다.',
  '<p>디스크 블록 읽기 횟수를 극소화하여 대용량 데이터베이스(MySQL, PostgreSQL)의 인덱스 검색 엔진으로 사용되는 <strong>B-Tree와 B+Tree</strong>를 배웁니다.</p>
',
  'published',
  '자료구조 - B-Tree & B+Tree 구조, 노드 분할/합병 & RDBMS DB 인덱스',
  '하나의 노드가 여러 개의 키와 자식을 가질 수 있는 M-차원 B-Tree, Leaf 노드끼리 연결 리스트로 연결되는 B+Tree 및 MySQL/PostgreSQL 데이터베이스 인덱스 원리를 배웁니다.',
  14,
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
  'ch15-trie-data-structure-for-prefix-search',
  '트라이(Trie) 자료구조: 접두사 트리(Prefix Tree)와 자동완성/문자열 검색 알고리즘',
  '문자열 집합을 트리 형태로 구조화하여 공통 접두사를 가진 단어를 $O(L)$ 시간 만에 고속 검색하는 트라이(Trie) 자료구조를 학습합니다.',
  '문자열 텍스트 탐색 시 문자의 길이를 $L$이라 할 때 $O(L)$ 시간 만에 키를 찾아내는 **접두사 트리(Trie / Prefix Tree)**를 학습합니다.',
  '<p>문자열 텍스트 탐색 시 문자의 길이를 $L$이라 할 때 $O(L)$ 시간 만에 키를 찾아내는 **접두사 트리(Trie / Prefix Tree)**를 학습합니다.</p>
',
  'published',
  '자료구조 - 트라이(Trie) 접두사 트리, $O(L)$ 문자열 검색 & 검색어 자동완성',
  '문자열의 각 문자를 노드 계층으로 저장하는 트라이(Trie) 자료구조, 문자열 길이 $O(L)$ 탐색 속도, 검색어 자동완성(Auto-complete) 알고리즘을 배웁니다.',
  15,
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
  'ch16-disjoint-set-and-union-find',
  '서로소 집합(Disjoint Set)과 유니온-파인드(Union-Find) 알고리즘',
  '여러 요소가 같은 집합에 속해 있는지 빠르게 판별하는 유니온-파인드(Union-Find) 자료구조와 경로 압축 최적화 기법을 다룹니다.',
  '여러 요소들이 속한 집합을 병합하고 판별하는 **서로소 집합(Disjoint Set)**과 **유니온-파인드(Union-Find)** 알고리즘을 학습합니다.',
  '<p>여러 요소들이 속한 집합을 병합하고 판별하는 **서로소 집합(Disjoint Set)**과 <strong>유니온-파인드(Union-Find)</strong> 알고리즘을 학습합니다.</p>
',
  'published',
  '자료구조 - 서로소 집합(Disjoint Set), Union-Find, 경로 압축 & 그래프 사이클',
  '서로 중복되지 않는 원소들의 집합을 관리하는 서로소 집합 자료구조, find()와 union() 연산, 경로 압축(Path Compression), 랭크 기반 유니온 및 그래프 사이클 판별을 배웁니다.',
  16,
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
