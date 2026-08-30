import sys, os, subprocess, re

def md_to_html(md_text):
    if not md_text:
        return ""
    
    lines = md_text.split("\n")
    html_out = []
    in_code = False
    code_lang = ""
    code_lines = []
    in_list = False

    for line in lines:
        # Code block
        if line.startswith("```"):
            if in_code:
                # Close code block
                code_content = "\n".join(code_lines).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
                html_out.append(f'<pre><code class="language-{code_lang}">{code_content}</code></pre>')
                in_code = False
                code_lines = []
                code_lang = ""
            else:
                if in_list:
                    html_out.append("</ul>")
                    in_list = False
                in_code = True
                code_lang = line.replace("```", "").strip()
            continue

        if in_code:
            code_lines.append(line)
            continue

        # Unordered list
        if line.startswith("- ") or line.startswith("* "):
            if not in_list:
                html_out.append("<ul>")
                in_list = True
            item_text = line[2:].strip()
            item_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', item_text)
            item_text = re.sub(r'`(.*?)`', r'<code>\1</code>', item_text)
            html_out.append(f"<li>{item_text}</li>")
            continue
        else:
            if in_list:
                html_out.append("</ul>")
                in_list = False

        # Headings
        if line.startswith("### "):
            h_text = line[4:].strip()
            h_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', h_text)
            html_out.append(f"<h3>{h_text}</h3>")
            continue
        elif line.startswith("## "):
            h_text = line[3:].strip()
            h_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', h_text)
            html_out.append(f"<h2>{h_text}</h2>")
            continue
        elif line.startswith("# "):
            h_text = line[2:].strip()
            h_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', h_text)
            html_out.append(f"<h1>{h_text}</h1>")
            continue

        # Horizontal Rule
        if line.strip() in ["---", "***", "___"]:
            html_out.append("<hr />")
            continue

        # Blockquote
        if line.startswith("> "):
            bq_text = line[2:].strip()
            bq_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', bq_text)
            html_out.append(f"<blockquote><p>{bq_text}</p></blockquote>")
            continue

        # Paragraph
        if line.strip():
            p_text = line.strip()
            p_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', p_text)
            p_text = re.sub(r'`(.*?)`', r'<code>\1</code>', p_text)
            p_text = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2" target="_blank" rel="noopener">\1</a>', p_text)
            html_out.append(f"<p>{p_text}</p>")

    if in_list:
        html_out.append("</ul>")

    return "\n".join(html_out)

sys.path.append(os.path.dirname(__file__))
from build_marketing_1to10 import lessons_1to10
from build_marketing_11to20 import lessons_11to20
from build_marketing_21to30 import lessons_21to30

all_30_lessons = lessons_1to10 + lessons_11to20 + lessons_21to30

sql_file = os.path.join(os.path.dirname(__file__), "update_all_30_content_html.sql")

with open(sql_file, "w", encoding="utf-8") as f:
    f.write("-- Update content_html for all 30 marketing lessons\n")
    for item in all_30_lessons:
        slug = item["slug"]
        md_text = item["content_md"]
        html_text = md_to_html(md_text).replace("'", "''")
        
        sql = f"UPDATE posts SET content_html = '{html_text}' WHERE slug = '{slug}';\n"
        f.write(sql)

print(f"Generated HTML update SQL file at {sql_file} with {len(all_30_lessons)} items.")

# Execute SQL via wrangler d1
cmd = f"npx wrangler d1 execute davhave-content --remote --file={sql_file}"
print(f"Executing: {cmd}")
res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
print("STDOUT:", res.stdout)
print("STDERR:", res.stderr)
