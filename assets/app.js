/* English Learning App: Roadmap and Study Desk controller (index.html)
 * Reads window.ENGLISH_CURRICULUM, keeps progress in localStorage (eng:* keys),
 * renders the 30-day roadmap, the vocabulary bank and the Google Sheets sync.
 */
(function () {
  'use strict';

  var CUR = window.ENGLISH_CURRICULUM || { days: [], stages: [], meta: {} };
  var DAYS = CUR.days || [];
  var TOTAL_DAYS = DAYS.length || 30;

  var STAGE_NAMES = {
    1: 'A1 Foundation',
    2: 'A2 Building Blocks',
    3: 'A2+ Intermediate Bridge',
    4: 'B1 Mastery'
  };

  /* ---------- tiny helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function pad2(n) { return n < 10 ? '0' + n : String(n); }
  function norm(s) {
    return String(s == null ? '' : s).toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u0111/g, 'd');
  }
  function stripHtml(s) { return String(s == null ? '' : s).replace(/<[^>]*>/g, ' '); }
  function setText(id, v) { var el = $(id); if (el) el.textContent = v; }
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }
  function closest(el, sel) { return el && el.closest ? el.closest(sel) : null; }
  function icon(name) { return '<svg class="icon" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }

  /* ---------- storage ---------- */
  var KEYS = {
    streak: 'eng:streak',
    completed: 'eng:completed-days',
    scores: 'eng:day-scores',
    mastered: 'eng:mastered-vocab',
    lastDay: 'eng:last-day',
    name: 'eng:student-name',
    theme: 'eng:theme',
    syncUrl: 'eng:sync-url'
  };

  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw == null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage blocked or full */ }
  }
  function loadStr(key, fallback) {
    try { var v = localStorage.getItem(key); return v == null ? fallback : v; } catch (e) { return fallback; }
  }
  function saveStr(key, v) { try { localStorage.setItem(key, v); } catch (e) { } }

  function dateKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }
  function getStreak() {
    var s = load(KEYS.streak, null);
    if (typeof s === 'number') s = { count: s, last: null };
    if (!s || typeof s !== 'object') return 0;
    if (!s.last) return s.count || 0;
    var y = new Date(); y.setDate(y.getDate() - 1);
    if (s.last === dateKey() || s.last === dateKey(y)) return s.count || 0;
    return 0; // streak lapsed
  }
  function getCompleted() {
    var c = load(KEYS.completed, []);
    return Array.isArray(c) ? c.map(Number) : [];
  }
  function getScores() {
    var s = load(KEYS.scores, {});
    return s && typeof s === 'object' ? s : {};
  }
  function getMastered() {
    var m = load(KEYS.mastered, []);
    return Array.isArray(m) ? m : [];
  }
  function getLastDay() {
    var n = parseInt(loadStr(KEYS.lastDay, ''), 10);
    return n >= 1 && n <= TOTAL_DAYS ? n : 0;
  }
  function getSyncUrl() {
    // Only the URL saved on this device counts. Empty means "keep progress local only",
    // so never fall back to a URL baked into the curriculum data.
    return String(loadStr(KEYS.syncUrl, '') || '').trim();
  }
  function vocabKey(en) { return String(en).trim().toLowerCase(); }

  /* ---------- derived data ---------- */
  var EX_FIELDS = ['multipleChoice', 'fillBlank', 'sentenceBuild', 'transformation', 'review'];
  function dayVocabCount(d) { return (d.vocab || []).length; }
  function dayQuestionCount(d) {
    var e = d.exercises || {};
    return EX_FIELDS.reduce(function (n, k) { return n + ((e[k] || []).length); }, 0);
  }
  function hasDialogue(d) { return !!(d.dialogue && d.dialogue.lines && d.dialogue.lines.length); }
  function scoreText(day) {
    var sc = getScores()[day];
    if (!sc) return '';
    if (typeof sc === 'number') return String(sc);
    return (sc.score != null ? sc.score : sc.correct) + '/' + sc.total;
  }
  function dayHaystack(d) {
    var parts = [d.title, d.titleEn, d.dailyGoal, d.cefr, 'day ' + d.day, 'ngay ' + d.day];
    if (d.grammar) parts.push(d.grammar.point);
    (d.vocab || []).forEach(function (v) { parts.push(v.en, v.vi); });
    return norm(stripHtml(parts.join(' | ')));
  }
  var HAY = {};
  DAYS.forEach(function (d) { HAY[d.day] = dayHaystack(d); });

  /* ---------- theme ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    var btn = $('theme-toggle');
    if (btn) btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
  }
  function initTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t !== 'dark' && t !== 'light') {
      t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    applyTheme(t);
    var btn = $('theme-toggle');
    if (btn) btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      saveStr(KEYS.theme, next);
      applyTheme(next);
    });
  }

  /* ---------- speech ---------- */
  var speakTimer = null;
  function pickVoice() {
    try {
      var vs = window.speechSynthesis.getVoices() || [], pick = null, k;
      for (k = 0; k < vs.length && !pick; k++) if (/^en[-_]US$/i.test(vs[k].lang || '')) pick = vs[k];
      for (k = 0; k < vs.length && !pick; k++) if (/^en/i.test(vs[k].lang || '')) pick = vs[k];
      return pick;
    } catch (e) { return null; }
  }
  function speak(text) {
    if (!('speechSynthesis' in window) || typeof window.SpeechSynthesisUtterance === 'undefined' || !text) return;
    clearTimeout(speakTimer);
    try { window.speechSynthesis.cancel(); } catch (e) { }
    // only the latest click is spoken; a short delay after cancel() keeps browsers from dropping it
    speakTimer = setTimeout(function () {
      try {
        var u = new SpeechSynthesisUtterance(String(text));
        u.lang = 'en-US';
        u.rate = 0.9;
        var v = pickVoice();                       // no voices installed: browser default
        if (v) u.voice = v;
        if (window.speechSynthesis.paused && window.speechSynthesis.resume) window.speechSynthesis.resume();
        window.speechSynthesis.speak(u);
      } catch (e) { }
    }, 60);
  }

  /* ---------- modals (the `hidden` attribute toggles them) ---------- */
  var lastOpener = null;
  function openModal(el, opener) {
    if (!el) return;
    lastOpener = opener || document.activeElement;
    el.hidden = false;
    document.body.classList.add('modal-open');
    var first = el.querySelector('input, select, button:not([data-close-modal])');
    if (first && first.focus) setTimeout(function () { first.focus(); }, 0);
  }
  function closeModal(el) {
    if (!el || el.hidden) return;
    el.hidden = true;
    if (!document.querySelector('.modal:not([hidden])')) document.body.classList.remove('modal-open');
    if (lastOpener && lastOpener.focus) { try { lastOpener.focus(); } catch (e) { } }
  }
  function wireModal(el, openBtnId, closeIds, onOpen) {
    if (!el) return;
    var openBtn = $(openBtnId);
    if (openBtn) openBtn.addEventListener('click', function () {
      if (onOpen) onOpen();
      openModal(el, openBtn);
    });
    closeIds.forEach(function (id) {
      var b = $(id);
      if (b) b.addEventListener('click', function () { closeModal(el); });
    });
    each(el.querySelectorAll('[data-close-modal]'), function (b) {
      b.addEventListener('click', function () { closeModal(el); });
    });
  }
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    each(document.querySelectorAll('.modal:not([hidden])'), closeModal);
  });

  /* ---------- header stats ---------- */
  function renderStats() {
    setText('streak-count', String(getStreak()));
    setText('completed-count', getCompleted().length + '/' + TOTAL_DAYS);
  }

  /* ---------- today card ---------- */
  function pickToday() {
    var done = getCompleted();
    var last = getLastDay();
    if (last && done.indexOf(last) === -1) return last;          // unfinished day in progress
    for (var i = (last || 0) + 1; i <= TOTAL_DAYS; i++) if (done.indexOf(i) === -1) return i;
    for (var j = 1; j <= TOTAL_DAYS; j++) if (done.indexOf(j) === -1) return j;
    return last || 1;                                            // everything done: review last studied day
  }

  function renderToday() {
    var n = pickToday();
    var d = DAYS[n - 1];
    if (!d) return;
    var done = getCompleted().indexOf(d.day) !== -1;
    setText('today-day-badge', pad2(d.day));
    setText('today-label-text', done ? 'Ôn lại bài đã xong' : (getLastDay() === d.day ? 'Tiếp tục bài đang học' : 'Bài học hôm nay'));
    var cefr = $('today-cefr');
    if (cefr) { cefr.textContent = d.cefr; cefr.setAttribute('data-cefr', d.cefr); }
    setText('today-title', d.title + (d.titleEn ? ' / ' + d.titleEn : ''));
    setText('today-goal', d.dailyGoal || '');
    setText('today-vocab-count', dayVocabCount(d) + ' từ mới');
    setText('today-grammar-note', d.grammar && d.grammar.point ? stripHtml(d.grammar.point) : 'công thức và ví dụ');
    setText('today-dialogue-note', hasDialogue(d) ? (d.dialogue.lines.length + ' câu hội thoại') : 'bài thi, không có hội thoại');
    setText('today-practice-count', dayQuestionCount(d) + ' câu hỏi');
    setText('today-minutes', 'Khoảng ' + (d.estimatedMinutes || 20) + ' phút');
    var btn = $('today-start-btn');
    if (btn) {
      btn.setAttribute('href', 'lesson.html?day=' + d.day);
      var label = btn.querySelector('.btn-label');
      var txt = done ? 'Ôn lại Day ' + pad2(d.day) : (getLastDay() === d.day ? 'Tiếp tục Day ' + pad2(d.day) : 'Bắt đầu Day ' + pad2(d.day));
      if (label) label.textContent = txt; else btn.textContent = txt;
    }
    var card = $('today-card');
    if (card) card.setAttribute('data-day', String(d.day));
    return n;
  }

  /* ---------- roadmap ---------- */
  var filterState = { stage: 'all', q: '' };

  function dayVisible(d) {
    var done = getCompleted().indexOf(d.day) !== -1;
    var st = filterState.stage;
    if (st === 'exam' && !d.isExam) return false;
    if (st === 'completed' && !done) return false;
    if (/^[1-4]$/.test(st) && String(d.stage) !== st) return false;
    if (filterState.q) {
      var q = norm(filterState.q).trim();
      if (q && HAY[d.day].indexOf(q) === -1) return false;
    }
    return true;
  }

  function dayCardHtml(d, todayNo) {
    var done = getCompleted().indexOf(d.day) !== -1;
    var sc = scoreText(d.day);
    var status = '';
    if (done) status = '<span class="day-status">' + icon('check') + 'Hoàn thành</span>';
    else if (d.isExam) status = '<span class="day-status">Bài thi Cột mốc</span>';
    var cls = 'day-card' + (done ? ' is-done' : '') + (d.isExam ? ' is-exam' : '') + (d.day === todayNo ? ' is-today' : '');
    return '<li><a class="' + cls + '" href="lesson.html?day=' + d.day + '" data-day="' + d.day + '"' + (d.day === todayNo ? ' aria-current="step"' : '') + '>' +
      '<span class="day-num">Day ' + pad2(d.day) + '</span>' +
      '<span class="cefr-tag">' + esc(d.cefr) + '</span>' +
      '<span class="day-title">' + esc(d.title) + '</span>' +
      '<span class="day-title-en">' + esc(d.titleEn || '') + '</span>' +
      '<span class="day-goal">' + esc(d.dailyGoal || '') + '</span>' +
      '<span class="day-meta">' + status + (d.isExam && done ? '<span class="day-status">Bài thi Cột mốc</span>' : '') +
        (sc ? '<span class="day-score" title="Điểm cao nhất">' + esc(sc) + '</span>' : '') + '</span>' +
    '</a></li>';
  }

  function renderRoadmap() {
    var box = $('roadmap-container');
    if (!box) return;
    var todayNo = pickToday();
    var html = '';
    var shown = 0;
    var doneList = getCompleted();
    [1, 2, 3, 4].forEach(function (stageNo) {
      var all = DAYS.filter(function (d) { return d.stage === stageNo; });
      var days = all.filter(dayVisible);
      if (!days.length) return;
      shown += days.length;
      var doneCount = all.filter(function (d) { return doneList.indexOf(d.day) !== -1; }).length;
      var first = all[0], last = all[all.length - 1];
      var cefr = first ? first.cefr : '';
      html += '<section class="stage" data-stage="' + stageNo + '" aria-labelledby="stage-h-' + stageNo + '">' +
        '<header class="stage-head">' +
          '<h3 class="stage-title" id="stage-h-' + stageNo + '">' + esc(STAGE_NAMES[stageNo] || ('Stage ' + stageNo)) + '</h3>' +
          '<p class="stage-range">Ngày ' + (first ? first.day : '') + ' đến ' + (last ? last.day : '') + ', xong ' + doneCount + ' trên ' + all.length + '</p>' +
        '</header>' +
        '<ol class="day-list">' + days.map(function (d) { return dayCardHtml(d, todayNo); }).join('') + '</ol>' +
      '</section>';
    });
    box.innerHTML = html;
    var empty = $('roadmap-empty');
    if (empty) empty.hidden = shown > 0;

    var n = doneList.length;
    setText('roadmap-progress-text', n + ' trên ' + TOTAL_DAYS + ' ngày');
    var bar = $('roadmap-progress-bar');
    if (bar) bar.style.width = Math.round(n / TOTAL_DAYS * 100) + '%';
  }

  function initFilters() {
    var bar = $('stage-filters');
    if (bar) {
      bar.addEventListener('click', function (ev) {
        var btn = closest(ev.target, '[data-stage]');
        if (!btn || !bar.contains(btn)) return;
        filterState.stage = btn.getAttribute('data-stage');
        each(bar.querySelectorAll('[data-stage]'), function (b) {
          var on = b === btn;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        renderRoadmap();
      });
    }
    var search = $('lesson-search');
    if (search) search.addEventListener('input', function () {
      filterState.q = search.value || '';
      renderRoadmap();
    });
  }

  /* ---------- vocabulary bank ---------- */
  var ALL_VOCAB = [];
  var SEEN_VOCAB = {};
  DAYS.forEach(function (d) {
    (d.vocab || []).forEach(function (v) {
      if (!v || !v.en) return;
      var key = vocabKey(v.en);
      if (SEEN_VOCAB[key]) return;                  // defensive: a word is listed once, under the first day that teaches it
      SEEN_VOCAB[key] = true;
      ALL_VOCAB.push({ day: d.day, cefr: d.cefr, en: v.en, pos: v.pos, ipa: v.ipa, vi: v.vi, example: v.example });
    });
  });
  var vocabState = { q: '', cefr: 'all' };

  function renderVocab() {
    var list = $('vocab-list');
    if (!list) return;
    var mastered = getMastered();
    var q = norm(vocabState.q).trim();
    var items = ALL_VOCAB.filter(function (v) {
      var f = vocabState.cefr;
      if (f === 'mastered') { if (mastered.indexOf(vocabKey(v.en)) === -1) return false; }
      else if (f === 'unmastered') { if (mastered.indexOf(vocabKey(v.en)) !== -1) return false; }
      else if (f !== 'all' && v.cefr !== f) return false;
      if (q && norm([v.en, v.vi, v.example, v.pos].join(' ')).indexOf(q) === -1) return false;
      return true;
    });
    setText('vocab-count', items.length + ' trên ' + ALL_VOCAB.length + ' từ, đã thuộc ' + mastered.length);
    if (!items.length) {
      list.innerHTML = '<li class="empty">Không có từ vựng nào khớp.</li>';
      return;
    }
    list.innerHTML = items.map(function (v) {
      var isM = mastered.indexOf(vocabKey(v.en)) !== -1;
      return '<li class="vocab-item' + (isM ? ' is-mastered' : '') + '">' +
        '<div class="vocab-main">' +
          '<span class="vocab-word">' + esc(v.en) + '</span>' +
          '<span class="vocab-pos">' + esc(v.pos || '') + '</span>' +
          '<span class="vocab-ipa">' + esc(v.ipa || '') + '</span>' +
          '<span class="cefr-tag">' + esc(v.cefr) + '</span>' +
          '<span class="cefr-tag vocab-day" title="Từ này thuộc bài Day ' + pad2(v.day) + '">Day ' + pad2(v.day) + '</span>' +
        '</div>' +
        '<p class="vocab-vi">' + esc(v.vi || '') + '</p>' +
        (v.example ? '<p class="vocab-example">' + esc(v.example) + '</p>' : '') +
        '<div class="vocab-actions">' +
          '<button type="button" class="btn btn-icon btn-sm" data-speak="' + esc(v.en) + '" aria-label="Phát âm ' + esc(v.en) + '">' + icon('speaker') + '</button>' +
          '<button type="button" class="btn btn-ghost btn-sm" data-master="' + esc(v.en) + '" aria-pressed="' + (isM ? 'true' : 'false') + '">Đã thuộc</button>' +
        '</div>' +
      '</li>';
    }).join('');
  }

  function initVocab() {
    var modal = $('vocab-modal');
    wireModal(modal, 'open-vocab-bank', ['close-vocab-btn'], renderVocab);

    var search = $('vocab-search');
    if (search) search.addEventListener('input', function () { vocabState.q = search.value; renderVocab(); });
    var sel = $('vocab-cefr-filter');
    if (sel) sel.addEventListener('change', function () { vocabState.cefr = sel.value || 'all'; renderVocab(); });

    var list = $('vocab-list');
    if (list) list.addEventListener('click', function (ev) {
      var sp = closest(ev.target, '[data-speak]');
      if (sp) { speak(sp.getAttribute('data-speak')); return; }
      var mb = closest(ev.target, '[data-master]');
      if (mb) {
        var arr = getMastered(), k = vocabKey(mb.getAttribute('data-master')), idx = arr.indexOf(k);
        if (idx === -1) arr.push(k); else arr.splice(idx, 1);
        save(KEYS.mastered, arr);
        var on = idx === -1;
        mb.setAttribute('aria-pressed', on ? 'true' : 'false');
        var row = closest(mb, '.vocab-item'); if (row) row.classList.toggle('is-mastered', on);
        setText('vocab-count', document.querySelectorAll('#vocab-list .vocab-item').length + ' trên ' + ALL_VOCAB.length + ' từ, đã thuộc ' + arr.length);
        scheduleSync();
      }
    });
  }

  /* ---------- Google Sheets sync ---------- */
  var syncTimer = null;
  function buildPayload() {
    return {
      source: 'english-learning-app',
      name: loadStr(KEYS.name, ''),
      streak: getStreak(),
      completedDays: getCompleted(),
      dayScores: getScores(),
      masteredVocab: getMastered(),
      lastDay: getLastDay(),
      totalDays: TOTAL_DAYS,
      updatedAt: new Date().toISOString()
    };
  }
  function setSyncStatus(msg) { setText('sync-status', msg); }
  function syncNow() {
    var syncUrl = getSyncUrl();
    if (!syncUrl) { setSyncStatus('Chưa có địa chỉ Google Sheets, tiến độ chỉ lưu trên máy này.'); return Promise.resolve(false); }
    setSyncStatus('Đang đồng bộ...');
    return fetch(syncUrl, { method: 'POST', body: JSON.stringify(buildPayload()), mode: 'no-cors' })
      .then(function () { setSyncStatus('Đã gửi lúc ' + new Date().toLocaleTimeString('vi-VN') + '.'); return true; })
      .catch(function () { setSyncStatus('Đồng bộ thất bại, hãy kiểm tra kết nối mạng.'); return false; });
  }
  function scheduleSync() {
    if (!getSyncUrl()) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(syncNow, 1500);
  }

  function updateNameLabel() {
    var nm = loadStr(KEYS.name, '').trim();
    setText('student-name-label', nm || 'Học viên');
  }

  function initAccount() {
    var modal = $('account-modal');
    var nameInput = $('acc-name-input');
    var urlInput = $('acc-sync-url-input');
    function fill() {
      if (nameInput) nameInput.value = loadStr(KEYS.name, '');
      if (urlInput) urlInput.value = getSyncUrl();
      setSyncStatus('');
    }
    function persistInputs() {
      if (nameInput) saveStr(KEYS.name, nameInput.value.trim());
      if (urlInput) saveStr(KEYS.syncUrl, urlInput.value.trim());
      updateNameLabel();
    }
    wireModal(modal, 'open-account-modal', ['close-account-btn'], fill);
    updateNameLabel();

    var saveBtn = $('save-account-btn');
    if (saveBtn) saveBtn.addEventListener('click', function () {
      persistInputs();
      if (getSyncUrl()) syncNow().then(function () { closeModal(modal); });
      else closeModal(modal);
    });
    var manual = $('manual-sync-btn');
    if (manual) manual.addEventListener('click', function () { persistInputs(); syncNow(); });

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') syncNow();
    });
  }

  /* ---------- init ---------- */
  function refreshAll() {
    renderStats();
    renderToday();
    renderRoadmap();
  }

  function init() {
    initTheme();
    initFilters();
    initVocab();
    initAccount();
    refreshAll();
    // progress may change in another tab, or when coming back from the lesson page via bfcache
    window.addEventListener('storage', function (e) { if (!e.key || e.key.indexOf('eng:') === 0) refreshAll(); });
    window.addEventListener('pageshow', function (e) { if (e.persisted) refreshAll(); });
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register('sw.js').catch(function () { });
    }
  }

  window.EngApp = { buildPayload: buildPayload, syncNow: syncNow };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

