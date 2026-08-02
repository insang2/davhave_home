---
title: 마크다운 기반 콘텐츠 관리 시스템 설계기
slug: markdown-cms
excerpt: 블로그와 교육 콘텐츠를 DB에 저장하되, 마크다운으로 작성하고 관리하는 워크플로우.
seo_title: 마크다운 기반 CMS 설계 및 구현
seo_description: Frontmatter 파싱, 마크다운 렌더링, 메타데이터 관리, 관리자 인터페이스.
---

## 선택의 갈림길

컨텐츠 관리 방식을 정하면서 마주친 질문:

1. **파일 기반**: 마크다운 파일을 git에 커밋, 정적 사이트 제너레이터처럼 빌드
2. **DB 기반**: 모든 콘텐츠를 D1에 저장, 관리자 UI에서 편집
3. **하이브리드**: 마크다운으로 작성하되, 처리 시 DB에 저장

처음엔 1번 (파일 기반)으로 시작했는데, 관리자가 브라우저에서 글을 쓰고 싶다고 할 때 막히더라. 그래서 3번 (하이브리드)을 선택했다.

## 아키텍처: Frontmatter + 마크다운 + DB

콘텐츠 파일의 구조:

```markdown
---
title: 포스트 제목
slug: post-slug
excerpt: 150자 정도의 요약
seo_title: SEO용 제목 (옵션)
seo_description: SEO용 설명 (옵션)
tags: javascript,cloudflare,d1
---

# 본문이 여기서 시작

포스트의 내용을 마크다운으로 작성합니다...
```

**Frontmatter는 YAML 형식**이고, `---` 구분자로 본문과 분리된다.

이 파일을 처리하는 로직:

```javascript
import { parse } from marked';

export function parseMarkdownPost(content) {
  // Frontmatter와 본문 분리
  const [, frontmatter, body] = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  // YAML 파싱 (간단한 버전)
  const metadata = {};
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(': ');
    if (key && valueParts.length > 0) {
      metadata[key.trim()] = valueParts.join(': ').trim();
    }
  });

  // 마크다운을 HTML로 변환
  const htmlContent = marked(body);

  return {
    title: metadata.title,
    slug: metadata.slug,
    excerpt: metadata.excerpt,
    seo_title: metadata.seo_title || metadata.title,
    seo_description: metadata.seo_description || metadata.excerpt,
    tags: metadata.tags ? metadata.tags.split(',').map(t => t.trim()) : [],
    content: htmlContent,
    rawMarkdown: body
  };
}
```

## DB 스토리지: 마크다운은 보존

마크다운을 HTML로만 변환해서 저장하면, 나중에 편집할 때 문제가 된다. 그래서 **원본 마크다운은 별도 컬럼에 보관**한다:

```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  kind TEXT CHECK (kind IN ('blog', 'education')),
  excerpt TEXT,
  content_html TEXT,       -- 렌더링된 HTML
  content_markdown TEXT,   -- 원본 마크다운
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

이제 관리자가 글을 편집할 때, 마크다운 에디터에 원본을 불러올 수 있다:

```javascript
export async function fetchPostForEdit(slug, env) {
  const post = await env.DB.prepare(`
    SELECT * FROM posts WHERE slug = ?
  `).bind(slug).first();

  return {
    ...post,
    // 관리자가 보는 에디터용 Frontmatter 재구성
    editorContent: reconstructMarkdown(post)
  };
}

function reconstructMarkdown(post) {
  return `---
title: ${post.title}
slug: ${post.slug}
excerpt: ${post.excerpt}
---

${post.content_markdown}`;
}
```

## 태그 관리: 정규화의 힘

초기엔 태그를 그냥 문자열로 저장하려고 했다: `"javascript, cloudflare, d1"`. 하지만 이렇게 하면:

- 중복 제거가 어렵다 ("JavaScript" vs "javascript")
- 특정 태그의 포스트를 빠르게 찾을 수 없다

그래서 별도 `tags` 테이블을 만들었다:

```sql
CREATE TABLE tags (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE post_tags (
  post_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  PRIMARY KEY (post_id, tag_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id)
);
```

포스트 저장 시:

```javascript
export async function savePost(post, env) {
  // 1. 포스트 저장 (또는 업데이트)
  const parsed = parseMarkdownPost(post.fullContent);
  
  const result = await env.DB.prepare(`
    INSERT INTO posts (title, slug, kind, excerpt, content_html, content_markdown, published_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET
      title = excluded.title,
      content_html = excluded.content_html,
      content_markdown = excluded.content_markdown,
      updated_at = CURRENT_TIMESTAMP
  `).bind(
    parsed.title,
    parsed.slug,
    'blog',
    parsed.excerpt,
    parsed.content,
    parsed.rawMarkdown,
    new Date().toISOString()
  ).run();

  const postId = result.meta.last_row_id;

  // 2. 기존 태그 연결 제거
  await env.DB.prepare(`DELETE FROM post_tags WHERE post_id = ?`).bind(postId).run();

  // 3. 태그 저장 및 연결
  for (const tagName of parsed.tags) {
    // 태그 생성 (없으면) 또는 기존 가져오기
    const tag = await env.DB.prepare(`
      INSERT INTO tags (name) VALUES (?)
      ON CONFLICT(name) DO UPDATE SET name = name
      RETURNING id
    `).bind(tagName.toLowerCase()).first();

    // 포스트-태그 연결
    await env.DB.prepare(`
      INSERT INTO post_tags (post_id, tag_id) VALUES (?, ?)
    `).bind(postId, tag.id).run();
  }

  return { id: postId, ...parsed };
}
```

## 관리자 UI: 간단하게

처음엔 복잡한 리치 텍스트 에디터를 생각했는데, 마크다운으로 작성하는 게 훨씬 빠르다는 걸 깨달았다.

관리자 페이지는 단순하다:

```html
<form id="edit-form">
  <input type="text" name="title" placeholder="제목" />
  <input type="text" name="slug" placeholder="슬러그" />
  <textarea name="content" placeholder="마크다운으로 작성..."></textarea>
  <button type="submit">저장</button>
</form>

<script>
document.getElementById('edit-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: formData.get('title'),
      slug: formData.get('slug'),
      fullContent: formData.get('content')
    })
  });

  if (response.ok) {
    alert('저장되었습니다!');
  }
});
</script>
```

## 이미지 삽입: R2 연동

마크다운에서 이미지를 넣을 때:

```markdown
![설명](https://media.davhave.com/2025-12-01-example.webp)
```

이미지는 R2에 저장되고, 퍼블릭 URL로 접근 가능하다. 관리자가 이미지를 업로드하면:

```javascript
export async function handleImageUpload(req, env) {
  const file = await req.formData().then(fd => fd.get('file'));
  
  // 파일명 생성 (날짜 + 원본명)
  const today = new Date().toISOString().split('T')[0];
  const filename = `${today}-${file.name}`;

  // R2에 저장
  await env.MEDIA.put(filename, file.stream(), {
    httpMetadata: {
      contentType: file.type,
      cacheControl: 'public, max-age=31536000' // 1년 캐시
    }
  });

  return new Response(JSON.stringify({
    url: `https://media.davhave.com/${filename}`
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

## 버전 관리: Git이 역할을 한다

D1은 테이블에 저장되지만, 중요한 글은 git에도 커밋한다:

```bash
# 새 글을 content/blog/에 마크다운으로 저장
echo "---
title: 새로운 글
slug: new-post
excerpt: ...
---

본문..." > content/blog/2025-11-28-new-post.md

git add content/blog/2025-11-28-new-post.md
git commit -m "Add blog post: 새로운 글"
```

이렇게 하면:

- **히스토리 추적**: git log로 글의 변경사항을 볼 수 있다
- **백업**: github에 자동으로 백업된다
- **협업**: 여러 사람이 콘텐츠를 작업할 수 있다

## 성능: 캐싱이 핵심

마크다운 렌더링은 매번 하지 않는다:

```javascript
export async function getBlogPost(slug, env) {
  const cacheKey = `blog:${slug}`;
  
  // 메모리 캐시 확인
  const cached = postCache.get(cacheKey);
  if (cached) return cached;

  // DB에서 가져오기 (이미 HTML로 렌더링됨)
  const post = await env.DB.prepare(`
    SELECT id, title, slug, excerpt, content_html, published_at
    FROM posts WHERE slug = ?
  `).bind(slug).first();

  postCache.set(cacheKey, post);
  return post;
}
```

포스트를 저장할 때만 렌더링하고, 조회할 때는 이미 렌더링된 HTML을 반환한다.

## 결론

마크다운 기반 CMS는 **개발자 중심의 콘텐츠 관리 방식**이다. git 친화적이고, 버전 관리가 자연스럽고, 마크다운 자체가 간단하다. 대신 일반인을 위한 WYSIWYG 에디터는 아니다. 하지만 블로그나 교육 콘텐츠 같이 전문성이 필요한 경우엔 **이 방식이 가장 효율적**이다.
