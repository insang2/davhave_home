import os, sys

with open("scratch/specimens_template.html", "r", encoding="utf-8") as f:
    specimens_html = f.read()

# Load and update build_kct_full_platform.py
with open("scratch/build_kct_full_platform.py", "r", encoding="utf-8") as f:
    code = f.read()

# Fix the template definition in build_kct_full_platform.py
specimens_block = """with open("scratch/specimens_template.html", "r", encoding="utf-8") as _sf:
    specimens_html_template = _sf.read()
"""

if "specimens_html_template =" not in code:
    code = specimens_block + "\n" + code

# Ensure write blocks at bottom
output_code = """
# 4. Specimen Fabrication Center Page
os.makedirs("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/specimens", exist_ok=True)
os.makedirs("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/specimen", exist_ok=True)

with open("/Users/islee/Desktop/devhave/davhave_home/projects/kct/public/specimens.html", "w", encoding="utf-8") as f:
    f.write(specimens_html_template)

with open("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/specimens/index.html", "w", encoding="utf-8") as f:
    f.write(specimens_html_template)

with open("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/specimen/index.html", "w", encoding="utf-8") as f:
    f.write(specimens_html_template)

escaped_specimens = specimens_html_template.replace("\\\\", "\\\\\\\\").replace("`", "\\\\`").replace("${", "\\\\${")
with open("/Users/islee/Desktop/devhave/davhave_home/src/lib/kct-specimen-render.js", "w", encoding="utf-8") as f:
    f.write(f"// KCT Specimen Fabrication Center Renderer\\nexport function renderKctSpecimenPage() {{\\n  return `{escaped_specimens}`;\\n}}\\n")
"""

with open("scratch/build_kct_full_platform.py", "w", encoding="utf-8") as f:
    f.write(code)

print("Synchronized build_kct_full_platform.py successfully!")
