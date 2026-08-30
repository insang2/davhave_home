UPDATE posts
SET 
  title = REPLACE(title, 'Claude 마스터 가이드', 'Claude 사용법'),
  seo_title = REPLACE(seo_title, 'Claude 마스터 가이드', 'Claude 사용법'),
  excerpt = REPLACE(excerpt, 'Claude 마스터 가이드', 'Claude 사용법'),
  content_md = REPLACE(content_md, 'Claude 마스터 가이드', 'Claude 사용법')
WHERE category = 'ai' AND order_index >= 35 AND order_index <= 49;
