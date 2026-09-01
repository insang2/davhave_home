import os, sys

print("=== Patching build_kct_full_platform.py and Building Complete Platform ===")

with open("scratch/specimens_template.html", "r", encoding="utf-8") as f:
    specimens_html = f.read()

# 1. Output the static files directly
# projects/kct/public/specimens.html
os.makedirs("projects/kct/public", exist_ok=True)
with open("projects/kct/public/specimens.html", "w", encoding="utf-8") as f:
    f.write(specimens_html)

# public/projects/kct/specimens/index.html
os.makedirs("public/projects/kct/specimens", exist_ok=True)
with open("public/projects/kct/specimens/index.html", "w", encoding="utf-8") as f:
    f.write(specimens_html)

# public/projects/kct/specimen/index.html
os.makedirs("public/projects/kct/specimen", exist_ok=True)
with open("public/projects/kct/specimen/index.html", "w", encoding="utf-8") as f:
    f.write(specimens_html)

# 2. Generate Worker SSR module: src/lib/kct-specimen-render.js
escaped_specimens = specimens_html.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
with open("src/lib/kct-specimen-render.js", "w", encoding="utf-8") as f:
    f.write(f"// KCT Specimen Fabrication Center Renderer\nexport function renderKctSpecimenPage() {{\n  return `{escaped_specimens}`;\n}}\n")

print("Generated specimens HTML and SSR module successfully!")
