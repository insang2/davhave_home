-- Full Data Structure Master Lessons Part 7

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'data-structure',
  'ch25-advanced-string-structures-suffix-tree-and-array',
  '문자열 특화 자료구조: 접미사 배열(Suffix Array)과 LCP 배열 알고리즘',
  '대용량 텍스트 유전체 분석 및 부분 문자열 검색에 최적화된 접미사 배열(Suffix Array)과 LCP 배열의 생성 및 활용법을 다룹니다.',
  '대용량 텍스트에서 모든 접미사를 정렬하여 부분 문자열의 위치와 공통 접두사 길이를 추출하는 **접미사 배열(Suffix Array)**과 **LCP 배열**을 학습합니다.',
  '<p>대용량 텍스트에서 모든 접미사를 정렬하여 부분 문자열의 위치와 공통 접두사 길이를 추출하는 **접미사 배열(Suffix Array)**과 <strong>LCP 배열</strong>을 학습합니다.</p>
',
  'published',
  '자료구조 - 고급 문자열 자료구조 Suffix Array & LCP(최장 공통 접미사) 배열',
  '문자열의 모든 접미사를 정렬한 접미사 배열(Suffix Array), 최장 공통 접미사(LCP: Longest Common Prefix) 배열 및 고속 부분 문자열 탐색 알고리즘을 배웁니다.',
  25,
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
