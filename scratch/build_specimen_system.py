import os, sys, json

with open("scratch/build_kct_full_platform.py", "r", encoding="utf-8") as f:
    orig_code = f.read()

# Load specimens_template from our template file or generate cleanly
from specimens_template_data import SPECIMENS_HTML_TEMPLATE

# Remove any old broken specimens definitions
if "specimens_html_template = " in orig_code:
    # already partially there
    pass

hook_marker = 'main_html_template = f"""<!DOCTYPE html>'
specimens_def = f'specimens_html_template = """{SPECIMENS_HTML_TEMPLATE}"""\n\n'

if "specimens_html_template = " not in orig_code:
    orig_code = orig_code.replace(hook_marker, specimens_def + hook_marker)

with open("scratch/build_kct_full_platform.py", "w", encoding="utf-8") as f:
    f.write(orig_code)

print("Injected specimens_html_template into scratch/build_kct_full_platform.py successfully!")
