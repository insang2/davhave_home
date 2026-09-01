import os, sys, re

print("=== Moving FAQ Section back to Bottom (Before Order Form) ===")

with open("scratch/specimens_template.html", "r", encoding="utf-8") as f:
    html = f.read()

# Extract FAQ Section
faq_pattern = re.compile(r'(<!-- SECTION: ASTM D638 Comprehensive 12 FAQs -->.*?)(?=\n  <!-- SECTION 1: ASTM D638 Key Measurements -->)', re.DOTALL)
faq_match = faq_pattern.search(html)

if not faq_match:
    faq_pattern = re.compile(r'(<!-- SECTION: ASTM D638 Comprehensive 12 FAQs -->.*?)(?=\n  <!-- SECTION: Order Form -->|\n  <!-- SECTION 8: Order Form -->|<section id="order-form"|<section id="key-measurements")', re.DOTALL)
    faq_match = faq_pattern.search(html)

if faq_match:
    faq_code = faq_match.group(1).strip()
    # Remove FAQ from top
    html = html.replace(faq_match.group(0), '')
    
    # Insert FAQ right before Order Form
    order_marker = '<!-- SECTION 8: Order Form -->'
    if order_marker not in html:
        order_marker = '<!-- Section: Order Form -->'
    if order_marker not in html:
        order_marker = '<section id="order-form"'
    
    if order_marker in html:
        pos = html.find(order_marker)
        html = html[:pos] + "\n  <!-- SECTION 7: ASTM D638 Comprehensive 12 FAQs -->\n  " + faq_code.replace("<!-- SECTION: ASTM D638 Comprehensive 12 FAQs -->", "") + "\n\n  " + html[pos:]
        print("Successfully moved FAQ Section to BOTTOM before Order Form!")
    else:
        print("Order form marker not found")
else:
    print("FAQ code not matched by regex")

with open("scratch/specimens_template.html", "w", encoding="utf-8") as f:
    f.write(html)

