-- Full Data Structure Master Lessons Part 6

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'data-structure',
  'ch21-all-pairs-shortest-path-floyd-warshall',
  '모든 쌍 최단 경로: 플로이드-워셜(Floyd-Warshall) 알고리즘과 3중 동적 계획법',
  '모든 출발지와 모든 도착지 사이의 최단 거리를 거치는 경유지 노드를 기준으로 갱신하는 플로이드-워셜 3중 DP 알고리즘을 학습합니다.',
  '그래프의 모든 정점 쌍 사이의 최단 거리를 구하는 **플로이드-워셜(Floyd-Warshall)** 동적 계획법 알고리즘을 배웁니다.',
  '<p>그래프의 모든 정점 쌍 사이의 최단 거리를 구하는 <strong>플로이드-워셜(Floyd-Warshall)</strong> 동적 계획법 알고리즘을 배웁니다.</p>
',
  'published',
  '자료구조 - 모든 쌍 최단 경로 플로이드-워셜(Floyd-Warshall) $O(V^3)$ DP',
  '그래프 내 모든 정점 쌍 간의 최단 거리를 구하는 플로이드-워셜(Floyd-Warshall) 알고리즘, $O(V^3)$ 3중 루프 동적 계획법 점화식을 배웁니다.',
  21,
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
  'ch22-topological-sorting-and-dag',
  '위상 정렬(Topological Sort)과 비순환 방향 그래프(DAG)',
  '작업의 선후 관계가 명시된 그래프에서 의존성 순서대로 정점들을 배열하는 위상 정렬 알고리즘과 커맨드 빌드 시스템 응용을 다룹니다.',
  '방향성 사이클이 없는 그래프(DAG)에서 정점들의 선후 순서를 위배하지 않도록 나열하는 **위상 정렬(Topological Sort)**을 다룹니다.',
  '<p>방향성 사이클이 없는 그래프(DAG)에서 정점들의 선후 순서를 위배하지 않도록 나열하는 **위상 정렬(Topological Sort)**을 다룹니다.</p>
',
  'published',
  '자료구조 - 위상 정렬(Topological Sort), DAG & Kahn 알고리즘(진입차수)',
  '선후 관계가 정의된 비순환 방향 그래프(DAG)의 정점들을 순서대로 나열하는 위상 정렬(Topological Sort), 진입차수(Indegree) 큐 기반 Kahn 알고리즘과 수강 신청/빌드 순서 적용을 배웁니다.',
  22,
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
  'ch23-segment-tree-and-fenwick-tree',
  '구간 쿼리 자료구조: 세그먼트 트리(Segment Tree)와 펜윅 트리(Fenwick Tree / Binary Indexed Tree)',
  '빈번한 값 변경이 일어나는 동적 배열에서 구간의 합이나 최댓값 쿼리를 $O(log N)$ 시간 만에 처리하는 세그먼트 트리와 펜윅 트리를 학습합니다.',
  '배열 데이터의 특정 범위(Range Query) 연산과 데이터 수정을 $O(log N)$에 고속 처리하는 **세그먼트 트리**와 **펜윅 트리**를 다룹니다.',
  '<p>배열 데이터의 특정 범위(Range Query) 연산과 데이터 수정을 $O(log N)$에 고속 처리하는 <strong>세그먼트 트리</strong>와 <strong>펜윅 트리</strong>를 다룹니다.</p>
',
  'published',
  '자료구조 - 구간 합 쿼리 세그먼트 트리 & 펜윅 트리(BIT) $O(log N)$',
  '배열의 특정 구간 합/최댓값을 $O(log N)$에 구하고 데이터를 업데이트하는 세그먼트 트리(Segment Tree)와 비트 연산 기반 펜윅 트리(Fenwick Tree)를 배웁니다.',
  23,
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
  'ch24-spatial-data-structures-k-d-tree',
  '공간 자료구조: K-D 트리(K-Dimensional Tree)와 최근접 이웃(KNN) 공간 탐색',
  '2차원/3차원 위치 좌표 데이터를 효율적으로 분할하여 가까운 위치의 점을 고속 검색하는 K-D 트리(K-Dimensional Tree)를 다룹니다.',
  '다차원 공간의 좌표 점 데이터를 분할 관리하여 최근접 이웃(Nearest Neighbor)을 고속 탐색하는 **K-D 트리(K-Dimensional Tree)**를 다룹니다.',
  '<p>다차원 공간의 좌표 점 데이터를 분할 관리하여 최근접 이웃(Nearest Neighbor)을 고속 탐색하는 **K-D 트리(K-Dimensional Tree)**를 다룹니다.</p>
',
  'published',
  '자료구조 - 공간 자료구조 K-D Tree & 공간 최근접 이웃(KNN) 탐색',
  '다차원 좌표 공간 상의 점들을 분할 관리하는 K-D 트리(K-Dimensional Tree)의 공간 분할 구조 및 최근접 이웃(KNN) 탐색 알고리즘을 배웁니다.',
  24,
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
