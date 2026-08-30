import os

html_path = "/Users/islee/Desktop/devhave/davhave_home/projects/kct/public/index.html"
with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Escape backticks and template strings for JS module
escaped_content = html_content.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

js_code = f"""// KCT Web Platform HTML Renderer
export function renderKctPage() {{
  return `{escaped_content}`;
}}
"""

out_path = "/Users/islee/Desktop/devhave/davhave_home/src/lib/kct-render.js"
with open(out_path, "w", encoding="utf-8") as f:
    f.write(js_code)

print(f"Generated {out_path} ({len(js_code)} bytes)")
