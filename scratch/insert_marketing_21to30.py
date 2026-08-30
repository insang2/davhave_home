import sys, os, subprocess

sys.path.append(os.path.dirname(__file__))

from build_marketing_21to30 import lessons_21to30

sql_file_path = os.path.join(os.path.dirname(__file__), "marketing_lessons_21to30.sql")

with open(sql_file_path, "w", encoding="utf-8") as f:
    f.write("-- Insert 10 additional SEO/Backlink/Performance marketing lessons into D1 Database\n")
    for item in lessons_21to30:
        # SQL Escape string
        title = item["title"].replace("'", "''")
        seo_title = item["seo_title"].replace("'", "''")
        excerpt = item["excerpt"].replace("'", "''")
        content_md = item["content_md"].replace("'", "''")
        slug = item["slug"]
        order_index = item["order_index"]

        sql = f"""
DELETE FROM posts WHERE slug = '{slug}';
INSERT INTO posts (kind, title, slug, category, status, order_index, excerpt, content_md, seo_title, seo_description, created_at, updated_at)
VALUES (
  'education',
  '{title}',
  '{slug}',
  'marketing',
  'published',
  {order_index},
  '{excerpt}',
  '{content_md}',
  '{seo_title}',
  '{excerpt}',
  DATETIME('now'),
  DATETIME('now')
);
"""
        f.write(sql)

print(f"SQL file generated at {sql_file_path} with {len(lessons_21to30)} lessons.")

# Execute SQL via wrangler d1
cmd = f"npx wrangler d1 execute davhave-content --remote --file={sql_file_path}"
print(f"Executing: {cmd}")
res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
print("STDOUT:", res.stdout)
print("STDERR:", res.stderr)
