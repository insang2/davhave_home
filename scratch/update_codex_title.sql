UPDATE posts
SET 
  title = REPLACE(title, 'Codex로 일하는 법', 'Codex 사용법'),
  seo_title = REPLACE(seo_title, 'Codex로 일하는 법', 'Codex 사용법'),
  excerpt = REPLACE(excerpt, 'Codex로 일하는 법', 'Codex 사용법'),
  content_md = REPLACE(content_md, 'Codex로 일하는 법', 'Codex 사용법')
WHERE category = 'ai' AND order_index >= 25 AND order_index <= 34;
