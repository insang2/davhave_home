import os, sys, re

print("=== Moving 12 FAQ Section to TOP (Right below Hero) & Disabling Worker Cache ===")

with open("scratch/specimens_template.html", "r", encoding="utf-8") as f:
    html = f.read()

# Extract FAQ Section
faq_pattern = re.compile(r'(<!-- SECTION: ASTM D638 Comprehensive 12 FAQs -->.*?)(?=\n  <!-- SECTION 8: Order Form -->)', re.DOTALL)
faq_match = faq_pattern.search(html)

if faq_match:
    faq_code = faq_match.group(1)
    # Remove FAQ from bottom
    html = faq_pattern.sub('', html)
    # Insert FAQ right below Hero Section
    hero_end = '<!-- Hero Section -->\n  <div class="spec-hero">.*?</div>\n  </div>'
    match_hero = re.search(r'<!-- Hero Section -->.*?</div>\s*</div>', html, re.DOTALL)
    if match_hero:
        insert_pos = match_hero.end()
        html = html[:insert_pos] + "\n\n  " + faq_code + html[insert_pos:]
        print("Successfully relocated FAQ Section to TOP!")
    else:
        print("Hero section not found by regex")
else:
    print("FAQ match not found")

with open("scratch/specimens_template.html", "w", encoding="utf-8") as f:
    f.write(html)

# Also update src/worker.js cache header for /projects/kct/specimens
with open("src/worker.js", "r", encoding="utf-8") as f:
    wjs = f.read()

wjs = wjs.replace(
    'if (pathname === "/projects/kct/specimens" || pathname === "/projects/kct/specimens/" || pathname === "/projects/kct/specimen" || pathname === "/projects/kct/specimen/" || pathname === "/pjt/kct/specimens" || pathname === "/pjt/kct/specimens/" || pathname === "/pjt/kct/specimen" || pathname === "/pjt/kct/specimen/" || pathname === "/projects/kct/astm-d638" || pathname === "/projects/kct/astm-d638/") {\n      const raw = new Response(renderKctSpecimenPage(), {\n        headers: { "content-type": "text/html; charset=utf-8" },\n      });\n      return withSecurityHeaders(raw, { "Cache-Control": "public, max-age=3600, s-maxage=86400" });\n    }',
    'if (pathname === "/projects/kct/specimens" || pathname === "/projects/kct/specimens/" || pathname === "/projects/kct/specimen" || pathname === "/projects/kct/specimen/" || pathname === "/pjt/kct/specimens" || pathname === "/pjt/kct/specimens/" || pathname === "/pjt/kct/specimen" || pathname === "/pjt/kct/specimen/" || pathname === "/projects/kct/astm-d638" || pathname === "/projects/kct/astm-d638/") {\n      const raw = new Response(renderKctSpecimenPage(), {\n        headers: { "content-type": "text/html; charset=utf-8" },\n      });\n      return withSecurityHeaders(raw, { "Cache-Control": "no-cache, no-store, must-revalidate" });\n    }'
)

with open("src/worker.js", "w", encoding="utf-8") as f:
    f.write(wjs)

print("Updated worker.js to no-cache for instant live updates!")
