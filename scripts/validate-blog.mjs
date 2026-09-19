#!/usr/bin/env node
/**
 * scripts/validate-blog.mjs
 * 
 * SEO Metadata Linter & Build-Time Validator for Blog Posts
 * 
 * Rules:
 *  - Title (seo_title or title): 30 <= length <= 60
 *  - Description (seo_description or excerpt): 100 <= length <= 160
 */

import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, "..", "content", "blog");

const TITLE_MIN = 30;
const TITLE_MAX = 60;
const DESC_MIN = 100;
const DESC_MAX = 160;

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  const [, fmBlock] = match;
  const fm = {};
  for (const line of fmBlock.split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (/^".*"$/.test(value) || /^'.*'$/.test(value)) value = value.slice(1, -1);
    fm[key] = value;
  }
  return fm;
}

export function validatePostMetadata({ title, seo_title, excerpt, seo_description, slug, file }) {
  const effectiveTitle = (seo_title || title || "").trim();
  const effectiveDesc = (seo_description || excerpt || "").trim();

  const titleErrors = [];
  const descErrors = [];

  if (!effectiveTitle) {
    titleErrors.push("제목(title/seo_title)이 누락되었습니다.");
  } else {
    if (effectiveTitle.length < TITLE_MIN) {
      titleErrors.push(`제목 길이 미달 (${effectiveTitle.length}자 < 권장 ${TITLE_MIN}자)`);
    } else if (effectiveTitle.length > TITLE_MAX) {
      titleErrors.push(`제목 길이 초과 (${effectiveTitle.length}자 > 권장 ${TITLE_MAX}자)`);
    }
  }

  if (!effectiveDesc) {
    descErrors.push("설명(seo_description/excerpt)이 누락되었습니다.");
  } else {
    if (effectiveDesc.length < DESC_MIN) {
      descErrors.push(`설명 길이 미달 (${effectiveDesc.length}자 < 권장 ${DESC_MIN}자)`);
    } else if (effectiveDesc.length > DESC_MAX) {
      descErrors.push(`설명 길이 초과 (${effectiveDesc.length}자 > 권장 ${DESC_MAX}자)`);
    }
  }

  return {
    valid: titleErrors.length === 0 && descErrors.length === 0,
    file,
    slug: slug || file,
    title: effectiveTitle,
    titleLength: effectiveTitle.length,
    titleErrors,
    desc: effectiveDesc,
    descLength: effectiveDesc.length,
    descErrors,
  };
}

export function runValidation({ strict = false } = {}) {
  const files = readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort();

  const results = [];
  for (const file of files) {
    const raw = readFileSync(join(CONTENT_DIR, file), "utf8");
    const fm = parseFrontmatter(raw);
    if (!fm) {
      results.push({
        valid: false,
        file,
        slug: file,
        titleErrors: ["유효한 프론트매터를 찾을 수 없습니다."],
        descErrors: [],
      });
      continue;
    }
    results.push(validatePostMetadata({ ...fm, file }));
  }

  const passed = results.filter((r) => r.valid);
  const failed = results.filter((r) => !r.valid);

  console.log("\n=======================================================");
  console.log(` 🔍 DAVHAVE Blog SEO Metadata Validation Report`);
  console.log(`    검사 대상: ${files.length}개 마크다운 파일`);
  console.log(`    기준: 제목 ${TITLE_MIN}~${TITLE_MAX}자, 설명 ${DESC_MIN}~${DESC_MAX}자`);
  console.log("=======================================================\n");

  if (failed.length > 0) {
    console.log(`⚠️  기준 미달 / 권장 범위 외 포스트: ${failed.length}건\n`);
    for (const f of failed) {
      console.log(`📄 [${f.file}] (slug: ${f.slug})`);
      if (f.titleErrors.length > 0) {
        console.log(`   ❌ Title [${f.titleLength}자]: "${f.title}"`);
        f.titleErrors.forEach((e) => console.log(`      └─ ${e}`));
      } else {
        console.log(`   ✅ Title [${f.titleLength}자]: "${f.title}"`);
      }
      if (f.descErrors.length > 0) {
        console.log(`   ❌ Description [${f.descLength}자]: "${f.desc}"`);
        f.descErrors.forEach((e) => console.log(`      └─ ${e}`));
      } else {
        console.log(`   ✅ Description [${f.descLength}자]: "${f.desc}"`);
      }
      console.log("");
    }
  }

  console.log(`-------------------------------------------------------`);
  console.log(`결과 요약: 총 ${results.length}개 중 통과 ${passed.length}개 / 보완 권장 ${failed.length}개`);
  console.log(`-------------------------------------------------------\n`);

  if (strict && failed.length > 0) {
    console.error(`[SEO LINT ERROR] ${failed.length}개의 블로그 포스트가 SEO 메타데이터 권장 기준을 만족하지 않습니다.`);
    process.exit(1);
  }

  return { passed, failed };
}

// Run directly from CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const isStrict = process.argv.includes("--strict");
  runValidation({ strict: isStrict });
}
