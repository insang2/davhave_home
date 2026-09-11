import { eduLessonPath } from "./education-render.js";

// IndexNow: 콘텐츠가 바뀌면 Bing·Yandex·Naver·Seznam에 즉시 알린다.
// 키는 비밀이 아니다 — /<KEY>.txt 로 공개 서빙되어야 프로토콜이 검증한다.
export const INDEXNOW_KEY = "154ee607da020ae53f3ac9dba178ebb8";
const HOST = "davhave.com";
const ORIGIN = `https://${HOST}`;

export function postUrl(post) {
  if (!post || !post.slug) return null;
  if (post.kind === "education") return `${ORIGIN}${eduLessonPath(post)}`;
  return `${ORIGIN}/blog/${post.slug}`;
}

// 발행/수정/삭제된 글 URL + 관련 목록 + sitemap 을 함께 제출한다.
export async function submitUrls(urls) {
  const urlList = [...new Set(urls.filter(Boolean))];
  if (!urlList.length) return;
  try {
    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${ORIGIN}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });
  } catch {
    // best-effort — IndexNow 실패가 CRUD 응답을 막지 않는다
  }
}

// 글 하나 변경 시 제출할 URL 묶음
export function urlsForPost(post) {
  const u = postUrl(post);
  if (!u) return [];
  const listing = post.kind === "education"
    ? `${ORIGIN}/education/${post.category}`
    : `${ORIGIN}/blog`;
  return [u, listing, `${ORIGIN}/sitemap.xml`];
}
