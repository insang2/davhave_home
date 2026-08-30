-- Full Data Structure Master Lessons Part 5

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'data-structure',
  'ch17-graph-representation-adjacency-matrix-and-list',
  '그래프(Graph) 자료구조 표현법: 인접 행렬(Adjacency Matrix) vs 인접 리스트(Adjacency List)',
  '객체 간의 복잡한 네트워크 관계를 표현하는 그래프(Graph)의 기본 용어와 메모리 상의 두 가지 핵심 표현법(인접 행렬, 인접 리스트)을 비교 분석합니다.',
  '현실 세계의 연결망(네트워크, 도로망, 친구 관계)을 표현하는 비선형 자료구조인 **그래프(Graph)**의 두 가지 표기법을 학습합니다.',
  '<p>현실 세계의 연결망(네트워크, 도로망, 친구 관계)을 표현하는 비선형 자료구조인 **그래프(Graph)**의 두 가지 표기법을 학습합니다.</p>
',
  'published',
  '자료구조 - 그래프(Graph) 표현법, 인접 행렬 vs 인접 리스트 공간/시간 복잡도',
  '정점(Vertex)과 간선(Edge)의 복잡한 망 관계인 그래프 자료구조, 2차원 배열 인접 행렬($O(V^2)$)과 연결 리스트 기반 인접 리스트($O(V+E)$) 장단점 비교를 배웁니다.',
  17,
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
  'ch18-graph-traversals-dfs-and-bfs',
  '그래프 탐색 알고리즘: 깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS) 구현',
  '스택/재귀를 활용하여 한 방향으로 깊게 탐색하는 DFS와 큐를 활용하여 인접 정점부터 점진적으로 탐색하는 BFS 알고리즘을 학습합니다.',
  '그래프의 모든 정점(Vertex)을 한 번씩 방문하는 두 가지 기본 축인 **깊이 우선 탐색(DFS)**과 **너비 우선 탐색(BFS)**을 다룹니다.',
  '<p>그래프의 모든 정점(Vertex)을 한 번씩 방문하는 두 가지 기본 축인 **깊이 우선 탐색(DFS)**과 **너비 우선 탐색(BFS)**을 다룹니다.</p>
',
  'published',
  '자료구조 - 그래프 탐색, DFS(깊이 우선 탐색) vs BFS(너비 우선 탐색)',
  '그래프의 모든 정점을 탐색하는 두 핵심 알고리즘 DFS(재귀/스택 활용 깊이 우선 탐색)와 BFS(큐 활용 최단 경로 너비 우선 탐색)의 구현 및 특징을 배웁니다.',
  18,
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
  'ch19-minimum-spanning-tree-mst',
  '최소 신장 트리(MST): 크루스칼(Kruskal)과 프림(Prim) 알고리즘',
  '모든 도시를 최소 비용의 도로망으로 연결하는 최소 신장 트리(MST) 문제와 탐욕법 기반의 Kruskal 및 Prim 알고리즘을 학습합니다.',
  '그래프 내의 모든 정점을 사이클 없이 최소 가중치 합으로 연결하는 **최소 신장 트리(Minimum Spanning Tree, MST)**를 다룹니다.',
  '<p>그래프 내의 모든 정점을 사이클 없이 최소 가중치 합으로 연결하는 **최소 신장 트리(Minimum Spanning Tree, MST)**를 다룹니다.</p>
',
  'published',
  '자료구조 - 최소 신장 트리(MST), Kruskal 알고리즘 & Prim 알고리즘',
  '가중치 무방향 그래프에서 모든 정점을 가중치 합이 최소가 되도록 연결하는 최소 신장 트리(MST), 간선 중심 크루스칼(Kruskal)과 정점 중심 프림(Prim) 알고리즘을 배웁니다.',
  19,
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
  'ch20-shortest-path-dijkstra-and-bellman-ford',
  '최단 경로 알고리즘: 다익스트라(Dijkstra)와 벨만-포드(Bellman-Ford)',
  '내비게이션의 출발지-목적지 최단 경로 탐색에 사용되는 다익스트라(Dijkstra) 알고리즘과 음수 간선을 처리하는 벨만-포드(Bellman-Ford) 알고리즘을 학습합니다.',
  '가중치 그래프에서 시작점에서 다른 정점들까지의 최단 거리를 구하는 **다익스트라**와 **벨만-포드** 알고리즘을 다룹니다.',
  '<p>가중치 그래프에서 시작점에서 다른 정점들까지의 최단 거리를 구하는 <strong>다익스트라</strong>와 <strong>벨만-포드</strong> 알고리즘을 다룹니다.</p>
',
  'published',
  '자료구조 - 최단 경로 알고리즘, 다익스트라(Dijkstra) & 벨만-포드(Bellman-Ford)',
  '한 시작 정점에서 다른 정점까지의 최단 경로를 구하는 다익스트라(우선순위 큐 $O((V+E)log V)$) 및 음수 가중치/음수 사이클을 판별하는 벨만-포드 알고리즘을 배웁니다.',
  20,
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
