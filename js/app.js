/**
 * app.js
 * Estado, renderização e lógica de interação do SecLearn.
 * Depende de: js/lessons.js (LESSONS) e Pyodide (global loadPyodide)
 */

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentLesson = 0;
let done = new Set();
let collapsedModules = new Set();
let pyodide = null;
let pyodideReady = false;

// ─── PYODIDE INIT ─────────────────────────────────────────────────────────────
async function initPyodide() {
  const dot   = document.getElementById('pyodideDot');
  const label = document.getElementById('pyodideLabel');
  const msg   = document.getElementById('loadingMsg');

  try {
    msg.textContent = 'Carregando Pyodide (Python no browser)…';
    pyodide = await loadPyodide();
    pyodideReady = true;
    dot.classList.add('ready');
    label.textContent = 'Python pronto';
    msg.textContent = 'Pronto!';
    setTimeout(() => {
      document.getElementById('loadingOverlay').classList.add('hidden');
    }, 500);
  } catch (e) {
    dot.classList.add('error');
    label.textContent = 'Erro ao carregar Python';
    msg.textContent = 'Falha ao carregar Pyodide. Verifique sua conexão.';
  }
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderSidebar() {
  const list = document.getElementById('lessonList');
  list.innerHTML = '';

  const moduleNames = {
    1: 'Módulo 1', 2: 'Módulo 2', 3: 'Módulo 3', 4: 'Módulo 4',
    5: 'Módulo 5', 6: 'Módulo 6', 7: 'Módulo 7', 8: 'Módulo 8',
    9: 'Módulo 9', 10: 'Módulo 10'
  };

  // Group lessons by module
  const groups = {};
  LESSONS.forEach((l, i) => {
    const m = l.module || 1;
    if (!groups[m]) groups[m] = [];
    groups[m].push([l, i]);
  });

  Object.keys(groups).sort((a, b) => a - b).forEach(mod => {
    const m = +mod;
    const isCollapsed = collapsedModules.has(m);

    const group = document.createElement('div');
    group.className = `module-group module-group-${m}`;

    // Module header (collapsible)
    const header = document.createElement('div');
    header.className = 'module-header';
    header.innerHTML = `
      <span class="module-name">${moduleNames[m] || 'Módulo ' + m}</span>
      <span class="module-chevron">${isCollapsed ? '›' : '‹'}</span>
    `;
    header.onclick = () => {
      if (collapsedModules.has(m)) collapsedModules.delete(m);
      else collapsedModules.add(m);
      renderSidebar();
    };
    group.appendChild(header);

    if (!isCollapsed) {
      groups[mod].forEach(([l, i], idx) => {
        const el = document.createElement('div');
        const isExercises = l.tag === 'exercícios';
        el.className = [
          'lesson-item',
          i === currentLesson ? 'active' : '',
          done.has(i) ? 'done' : '',
          isExercises ? 'lesson-item-exercises' : '',
        ].filter(Boolean).join(' ');

        const tagClass = l.tag === 'início' ? 'tag-inicio'
          : isExercises ? 'tag-exercicios'
          : `tag-${l.tag}`;
        const tagLabel = l.tag.charAt(0).toUpperCase() + l.tag.slice(1);
        const numLabel = done.has(i) ? '✓' : (isExercises ? '📓' : idx);

        el.innerHTML = `
          <div class="lesson-num">${numLabel}</div>
          <div class="lesson-label">${l.title}</div>
          <span class="lesson-tag ${tagClass}">${tagLabel}</span>
        `;
        el.onclick = () => goTo(i);
        group.appendChild(el);
      });
    }

    list.appendChild(group);
  });

  // Módulos em breve (3–10)
  for (let m = 3; m <= 10; m++) {
    if (groups[m]) continue;
    const group = document.createElement('div');
    group.className = 'module-group module-group-soon';
    group.innerHTML = `
      <div class="module-header module-header-soon">
        <span class="module-name">${moduleNames[m]}</span>
        <span class="module-soon-badge">Em Breve</span>
      </div>
    `;
    list.appendChild(group);
  }

  const pct = Math.round((done.size / LESSONS.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = `${done.size} / ${LESSONS.length}`;
}

function renderLesson() {
  const l = LESSONS[currentLesson];

  document.getElementById('lessonTitle').textContent = l.title;
  document.getElementById('lessonDesc').textContent  = l.desc;

  const badge = document.getElementById('lessonTagBadge');
  const tagClassHeader = l.tag === 'início' ? 'tag-inicio'
    : l.tag === 'exercícios' ? 'tag-exercicios'
    : `tag-${l.tag}`;
  badge.textContent = l.tag.charAt(0).toUpperCase() + l.tag.slice(1);
  badge.className   = `lesson-tag ${tagClassHeader}`;

  const area = document.getElementById('contentArea');
  area.innerHTML = '';

  function processImgBlocks(container) {
    container.querySelectorAll('.art-img-block').forEach(block => {
      const src   = block.dataset.src;
      const label = block.dataset.label;
      const img   = document.createElement('img');
      img.src = src;
      img.alt = label;
      img.style.cssText = 'display:none';

      const placeholder = document.createElement('div');
      placeholder.className = 'art-img-placeholder';
      placeholder.innerHTML = `<div class="art-img-icon">🖼️</div><div class="art-img-label">${label}</div>`;

      img.onload = () => {
        img.style.cssText = '';
        img.className = 'art-img-real';
        placeholder.remove();
        block.appendChild(img);
      };
      img.onerror = () => {
        block.appendChild(placeholder);
      };
      block.appendChild(img);
    });
  }

  // ── Artigo: renderiza HTML diretamente ───────────────────────────────────
  if (l.type === 'article') {
    const wrapper = document.createElement('div');
    wrapper.className = 'article-wrapper';
    wrapper.innerHTML = l.html;
    area.appendChild(wrapper);
    processImgBlocks(wrapper);


    area.scrollTop = 0;

    document.getElementById('btnPrev').disabled = currentLesson === 0;
    document.getElementById('btnNext').disabled = currentLesson === LESSONS.length - 1;
    const btnComplete = document.getElementById('btnComplete');
    if (done.has(currentLesson)) {
      btnComplete.classList.add('done');
      btnComplete.textContent = '✓ Concluída';
    } else {
      btnComplete.classList.remove('done');
      btnComplete.textContent = '✓ Marcar como concluída';
    }
    return;
  }

  // Eyebrow label
  if (l.eyebrow) {
    const ey = document.createElement('div');
    ey.className = 'art-eyebrow';
    ey.textContent = l.eyebrow;
    area.appendChild(ey);
  }

  // Theory blocks
  l.theory.forEach(t => {
    const div = document.createElement('div');
    div.className = 'theory-block';
    div.innerHTML = `<h3 class="${t.headingClass || ''}">${t.heading}</h3><div>${t.body}</div>`;
    processImgBlocks(div);
    area.appendChild(div);
  });

  // Tip block
  if (l.tip) {
    const tip = document.createElement('div');
    tip.className = 'tip-block';
    tip.innerHTML = `<div class="tip-label">💡 Dica Para Segurança</div><p>${l.tip}</p>`;
    area.appendChild(tip);
  }

  // Warning block
  if (l.warning) {
    const warn = document.createElement('div');
    warn.className = 'warning-block';
    warn.innerHTML = `<div class="tip-label">⚠️ Atenção</div><p>${l.warning}</p>`;
    area.appendChild(warn);
  }

  // Practice block
  if (l.practice) {
    const prac = document.createElement('div');
    prac.className = 'practice-block';
    prac.innerHTML = `<div class="tip-label">🖊️ Faça Você Mesmo</div><p>${l.practice}</p>`;
    area.appendChild(prac);
  }

  // Exercises block
  if (l.exercises) {
    const exBlock = document.createElement('div');
    exBlock.className = 'exercises-block';
    exBlock.innerHTML = `<div class="tip-label">📓 Exercícios</div><p>${l.exercises}</p>`;
    area.appendChild(exBlock);
  }

  // IDE block
  const ide = document.createElement('div');
  ide.className = 'ide-block';
  ide.innerHTML = `
    <div class="ide-toolbar">
      <div class="ide-toolbar-dots">
        <span class="dot-red"></span>
        <span class="dot-yellow"></span>
        <span class="dot-green"></span>
      </div>
      <span class="ide-filename">exercicio_${currentLesson + 1}.py</span>
      <div class="ide-actions">
        <button class="btn-clear" onclick="clearOutput(this)">⟳ Limpar</button>
        <button class="btn-run"   onclick="runCode(this)">▶ Executar</button>
      </div>
    </div>
    <div class="code-editor-wrap">
      <textarea class="code-editor" spellcheck="false">${l.code.trim()}</textarea>
    </div>
    <div class="output-section">
      <div class="output-header">
        <div class="output-status" id="outStatus"></div>
        Saída
      </div>
      <div class="output-body output-idle" id="outBody">Clique em ▶ Executar para rodar o código…</div>
    </div>
  `;
  area.appendChild(ide);

  // Tab → 4 spaces | Ctrl+Enter → run
  const ta = ide.querySelector('.code-editor');
  ta.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = ta.selectionStart, end = ta.selectionEnd;
      ta.value = ta.value.substring(0, s) + '    ' + ta.value.substring(end);
      ta.selectionStart = ta.selectionEnd = s + 4;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      ide.querySelector('.btn-run').click();
    }
  });

  // Nav buttons state
  document.getElementById('btnPrev').disabled = currentLesson === 0;
  document.getElementById('btnNext').disabled = currentLesson === LESSONS.length - 1;

  const btnComplete = document.getElementById('btnComplete');
  if (done.has(currentLesson)) {
    btnComplete.classList.add('done');
    btnComplete.textContent = '✓ Concluída';
  } else {
    btnComplete.classList.remove('done');
    btnComplete.textContent = '✓ Marcar como concluída';
  }

  area.scrollTop = 0;
}

// ─── ACTIONS ──────────────────────────────────────────────────────────────────
async function runCode(btn) {
  if (!pyodideReady) {
    alert('Python ainda está carregando. Aguarde alguns segundos.');
    return;
  }

  const ide       = btn.closest('.ide-block');
  const code      = ide.querySelector('.code-editor').value;
  const outBody   = ide.querySelector('.output-body');
  const outStatus = ide.querySelector('.output-status');

  btn.disabled    = true;
  btn.textContent = '⏳ Rodando…';
  outBody.className   = 'output-body';
  outBody.textContent = '';
  outStatus.className = 'output-status';

  try {
    // Redireciona stdout/stderr para StringIO antes de executar
    await pyodide.runPythonAsync(`
import sys, io as _io
_padilhasec_buf = _io.StringIO()
sys.stdout = _padilhasec_buf
sys.stderr = _padilhasec_buf
`);

    await pyodide.runPythonAsync(code);

    const output = pyodide.runPython('_padilhasec_buf.getvalue()');
    outBody.textContent = output.trim() || '(sem saída)';
    outStatus.className = 'output-status ok';
  } catch (err) {
    // Tenta recuperar qualquer output antes do erro
    let preOutput = '';
    try { preOutput = pyodide.runPython('_padilhasec_buf.getvalue()'); } catch {}
    outBody.textContent = (preOutput ? preOutput + '\n' : '') + String(err);
    outBody.className   = 'output-body error';
    outStatus.className = 'output-status err';
  } finally {
    // Restaura stdout/stderr
    try {
      pyodide.runPython(`
import sys
sys.stdout = sys.__stdout__ or _io.StringIO()
sys.stderr = sys.__stderr__ or _io.StringIO()
`);
    } catch {}
    btn.disabled    = false;
    btn.textContent = '▶ Executar';
  }
}

function clearOutput(btn) {
  const ide = btn.closest('.ide-block');
  ide.querySelector('#outBody').className   = 'output-body output-idle';
  ide.querySelector('#outBody').textContent = 'Clique em ▶ Executar para rodar o código…';
  ide.querySelector('#outStatus').className = 'output-status';
}

function goTo(i) {
  currentLesson = i;
  renderSidebar();
  renderLesson();
}

// ─── EVENT LISTENERS ──────────────────────────────────────────────────────────
document.getElementById('btnPrev').onclick = () => {
  if (currentLesson > 0) goTo(currentLesson - 1);
};

document.getElementById('btnNext').onclick = () => {
  if (currentLesson < LESSONS.length - 1) goTo(currentLesson + 1);
};

document.getElementById('btnComplete').onclick = () => {
  if (done.has(currentLesson)) {
    done.delete(currentLesson);
  } else {
    done.add(currentLesson);
  }
  renderSidebar();
  renderLesson();
};

// ─── BOOT ─────────────────────────────────────────────────────────────────────
renderSidebar();
renderLesson();
initPyodide();
