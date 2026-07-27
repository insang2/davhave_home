export function renderAdminPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>관리자 | DAVHAVE</title>
  <meta name="robots" content="noindex, nofollow" />
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    :root{--bg:#050811;--surface:#0b1120;--border:rgba(99,179,237,.15);--accent:#4fd1c5;--accent2:#7c6cf8;
      --text:#e2e8f0;--muted:#718096;--danger:#f56565;--radius:12px;--font:system-ui,-apple-system,sans-serif;
      --mono:ui-monospace,monospace;}
    body{background:var(--bg);color:var(--text);font-family:var(--font);line-height:1.6;padding:2rem 1.5rem 6rem;}
    .wrap{max-width:880px;margin:0 auto;}
    h1{font-size:1.4rem;margin-bottom:1.5rem;}
    .card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.5rem;margin-bottom:1.5rem;}
    label{display:block;font-size:.82rem;color:var(--muted);margin:1rem 0 .4rem;}
    input,textarea,select{width:100%;background:#050811;border:1px solid var(--border);border-radius:8px;
      color:var(--text);padding:.6rem .8rem;font-family:inherit;font-size:.92rem;}
    textarea{min-height:220px;font-family:var(--mono);resize:vertical;}
    .row{display:flex;gap:1rem;flex-wrap:wrap;}
    .row > *{flex:1;min-width:160px;}
    button{cursor:pointer;font-family:inherit;font-weight:600;border:none;border-radius:8px;padding:.65rem 1.2rem;font-size:.88rem;}
    .btn-primary{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#000;}
    .btn-ghost{background:transparent;border:1px solid var(--border);color:var(--text);}
    .btn-danger{background:transparent;border:1px solid var(--danger);color:var(--danger);}
    .post-row{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.9rem 0;border-bottom:1px solid var(--border);}
    .post-row:last-child{border-bottom:none;}
    .post-title{font-weight:600;font-size:.95rem;}
    .post-meta{font-family:var(--mono);font-size:.75rem;color:var(--muted);margin-top:.2rem;}
    .status-badge{font-family:var(--mono);font-size:.68rem;padding:.15rem .55rem;border-radius:100px;border:1px solid var(--border);}
    .status-badge.published{color:var(--accent);border-color:var(--accent);}
    .actions{display:flex;gap:.5rem;}
    .hidden{display:none !important;}
    #toast{position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);background:var(--surface);
      border:1px solid var(--accent);color:var(--text);padding:.7rem 1.2rem;border-radius:8px;font-size:.85rem;
      opacity:0;transition:opacity .25s;pointer-events:none;}
    #toast.show{opacity:1;}
    .tabs{display:flex;gap:.5rem;margin-bottom:1rem;}
    .tabs button{background:transparent;border:1px solid var(--border);color:var(--muted);}
    .tabs button.active{color:var(--accent);border-color:var(--accent);}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>DAVHAVE 관리자</h1>

    <div id="login-card" class="card">
      <label for="pw">관리자 비밀번호</label>
      <input id="pw" type="password" autocomplete="current-password" />
      <div style="margin-top:1rem;"><button class="btn-primary" id="login-btn">로그인</button></div>
    </div>

    <div id="admin-area" class="hidden">
      <div class="card">
        <div class="tabs">
          <button data-kind="blog" class="kind-tab active">블로그</button>
          <button data-kind="education" class="kind-tab">교육</button>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="color:var(--muted);font-size:.85rem;">발행글 + 초안 전체 표시</span>
          <button class="btn-primary" id="new-btn">+ 새 글 작성</button>
        </div>
      </div>
      <div class="card" id="list-card"><div id="list"></div></div>

      <div class="card hidden" id="editor-card">
        <div class="row">
          <div><label>종류</label>
            <select id="f-kind"><option value="blog">블로그</option><option value="education">교육</option></select>
          </div>
          <div><label>카테고리 (교육용)</label>
            <select id="f-category"><option value="">—</option><option value="ai">AI</option>
              <option value="python">Python</option><option value="java">Java</option><option value="mobile">모바일 개발</option></select>
          </div>
          <div><label>상태</label>
            <select id="f-status"><option value="draft">임시저장</option><option value="published">발행</option></select>
          </div>
        </div>
        <label>제목</label><input id="f-title" />
        <label>슬러그 (URL, 비워두면 제목에서 자동 생성)</label><input id="f-slug" placeholder="예: my-first-post" />
        <label>요약</label><textarea id="f-excerpt" style="min-height:70px;font-family:inherit;"></textarea>
        <label>커버 이미지</label>
        <div class="row">
          <input id="f-cover" placeholder="이미지 URL 또는 아래에서 업로드" />
          <input id="f-cover-file" type="file" accept="image/*" />
        </div>
        <label>본문 (마크다운)</label><textarea id="f-content"></textarea>
        <label>태그 (쉼표로 구분)</label><input id="f-tags" placeholder="예: 개발, AI, 회고" />
        <div class="row">
          <div><label>SEO 제목 (비우면 제목 사용)</label><input id="f-seo-title" /></div>
          <div><label>SEO 설명 (비우면 요약 사용)</label><input id="f-seo-desc" /></div>
        </div>
        <label>정렬 순서 (교육 레슨용, 숫자가 작을수록 먼저)</label><input id="f-order" type="number" value="0" />
        <div style="margin-top:1.5rem;display:flex;gap:.7rem;">
          <button class="btn-primary" id="save-btn">저장</button>
          <button class="btn-ghost" id="cancel-btn">취소</button>
          <button class="btn-danger hidden" id="delete-btn">삭제</button>
        </div>
      </div>
    </div>
  </div>
  <div id="toast"></div>

  <script>
    let currentKind = 'blog';
    let editingId = null;

    function toast(msg) {
      const el = document.getElementById('toast');
      el.textContent = msg;
      el.classList.add('show');
      setTimeout(() => el.classList.remove('show'), 2200);
    }

    async function checkAuth() {
      const res = await fetch('/api/admin/check');
      const data = await res.json();
      if (data.authenticated) showAdmin();
    }

    function showAdmin() {
      document.getElementById('login-card').classList.add('hidden');
      document.getElementById('admin-area').classList.remove('hidden');
      loadList();
    }

    document.getElementById('login-btn').addEventListener('click', async () => {
      const password = document.getElementById('pw').value;
      const res = await fetch('/api/admin/login', {
        method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ password })
      });
      if (res.ok) { showAdmin(); } else { toast('비밀번호가 올바르지 않습니다.'); }
    });

    document.querySelectorAll('.kind-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.kind-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentKind = btn.dataset.kind;
        loadList();
      });
    });

    async function loadList() {
      const res = await fetch('/api/posts?kind=' + currentKind + '&status=all&pageSize=100');
      const data = await res.json();
      const list = document.getElementById('list');
      if (!data.posts.length) { list.innerHTML = '<p style="color:var(--muted);">아직 글이 없습니다.</p>'; return; }
      list.innerHTML = data.posts.map(p => \`
        <div class="post-row">
          <div>
            <div class="post-title">\${p.title}</div>
            <div class="post-meta">/\${p.kind}/\${p.slug} · \${(p.tags||[]).map(t=>'#'+t.name).join(' ')}</div>
          </div>
          <div class="actions">
            <span class="status-badge \${p.status}">\${p.status === 'published' ? '발행' : '초안'}</span>
            <button class="btn-ghost" onclick="editPost(\${p.id})">편집</button>
          </div>
        </div>\`).join('');
    }

    function resetForm() {
      editingId = null;
      ['f-title','f-slug','f-excerpt','f-cover','f-content','f-tags','f-seo-title','f-seo-desc'].forEach(id => document.getElementById(id).value = '');
      document.getElementById('f-kind').value = currentKind;
      document.getElementById('f-category').value = '';
      document.getElementById('f-status').value = 'draft';
      document.getElementById('f-order').value = 0;
      document.getElementById('delete-btn').classList.add('hidden');
    }

    document.getElementById('new-btn').addEventListener('click', () => {
      resetForm();
      document.getElementById('editor-card').classList.remove('hidden');
    });

    document.getElementById('cancel-btn').addEventListener('click', () => {
      document.getElementById('editor-card').classList.add('hidden');
    });

    window.editPost = async function (id) {
      const res = await fetch('/api/posts/' + id);
      const p = await res.json();
      editingId = id;
      document.getElementById('f-kind').value = p.kind;
      document.getElementById('f-category').value = p.category || '';
      document.getElementById('f-status').value = p.status;
      document.getElementById('f-title').value = p.title;
      document.getElementById('f-slug').value = p.slug;
      document.getElementById('f-excerpt').value = p.excerpt || '';
      document.getElementById('f-cover').value = p.cover_image_url || '';
      document.getElementById('f-content').value = p.content_md || '';
      document.getElementById('f-tags').value = (p.tags||[]).map(t=>t.name).join(', ');
      document.getElementById('f-seo-title').value = p.seo_title || '';
      document.getElementById('f-seo-desc').value = p.seo_description || '';
      document.getElementById('f-order').value = p.order_index || 0;
      document.getElementById('delete-btn').classList.remove('hidden');
      document.getElementById('editor-card').classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.getElementById('f-cover-file').addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const fd = new FormData();
      fd.append('file', file);
      toast('업로드 중...');
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      if (!res.ok) { toast('업로드 실패'); return; }
      const data = await res.json();
      document.getElementById('f-cover').value = data.url;
      toast('업로드 완료');
    });

    document.getElementById('save-btn').addEventListener('click', async () => {
      const payload = {
        kind: document.getElementById('f-kind').value,
        category: document.getElementById('f-category').value || null,
        status: document.getElementById('f-status').value,
        title: document.getElementById('f-title').value,
        slug: document.getElementById('f-slug').value,
        excerpt: document.getElementById('f-excerpt').value,
        cover_image_url: document.getElementById('f-cover').value,
        content_md: document.getElementById('f-content').value,
        tags: document.getElementById('f-tags').value.split(',').map(s=>s.trim()).filter(Boolean),
        seo_title: document.getElementById('f-seo-title').value,
        seo_description: document.getElementById('f-seo-desc').value,
        order_index: Number(document.getElementById('f-order').value) || 0,
      };
      if (!payload.title) { toast('제목을 입력하세요.'); return; }
      const url = editingId ? '/api/posts/' + editingId : '/api/posts';
      const method = editingId ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) { toast('저장 실패'); return; }
      toast('저장되었습니다.');
      document.getElementById('editor-card').classList.add('hidden');
      currentKind = payload.kind;
      loadList();
    });

    document.getElementById('delete-btn').addEventListener('click', async () => {
      if (!editingId) return;
      if (!confirm('이 글을 삭제할까요? 되돌릴 수 없습니다.')) return;
      await fetch('/api/posts/' + editingId, { method: 'DELETE' });
      toast('삭제되었습니다.');
      document.getElementById('editor-card').classList.add('hidden');
      loadList();
    });

    checkAuth();
  </script>
</body>
</html>`;
}
