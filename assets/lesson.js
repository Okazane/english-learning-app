/* English Learning App: 4-step study workbench and practice engine (lesson.html)
 * Step 1 Vocabulary, Step 2 Grammar, Step 3 Dialogue, Step 4 Practice (5 parts).
 */
(function () {
  'use strict';

  var CUR = window.ENGLISH_CURRICULUM || { days: [], meta: {} };
  var DAYS = CUR.days || [];
  var TOTAL_DAYS = DAYS.length || 180;
  var PASS_RATIO = 0.7;

  /* ---------- helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function pad2(n) { return n < 10 ? '0' + n : String(n); }
  function stripHtml(s) { return String(s == null ? '' : s).replace(/<[^>]*>/g, '').replace(/\*\*/g, ''); }
  // **bold** (used by the data) becomes <b>; everything else is escaped
  function mdInline(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
  function setText(id, v) { var el = $(id); if (el) el.textContent = v; }
  function setLabel(el, txt) {
    if (!el) return;
    var l = el.querySelector('.btn-label');
    if (l) l.textContent = txt; else el.textContent = txt;
  }
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }
  function closest(el, sel) { return el && el.closest ? el.closest(sel) : null; }
  function icon(name) { return '<svg class="icon" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }

  /* ---------- storage ---------- */
  var KEYS = {
    streak: 'eng:streak', completed: 'eng:completed-days', scores: 'eng:day-scores',
    mastered: 'eng:mastered-vocab', lastDay: 'eng:last-day', name: 'eng:student-name',
    theme: 'eng:theme', syncUrl: 'eng:sync-url'
  };
  function load(key, fallback) {
    try { var raw = localStorage.getItem(key); return raw == null ? fallback : JSON.parse(raw); }
    catch (e) { return fallback; }
  }
  function save(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { } }
  function loadStr(key, fb) { try { var v = localStorage.getItem(key); return v == null ? fb : v; } catch (e) { return fb; } }
  function saveStr(key, v) { try { localStorage.setItem(key, v); } catch (e) { } }

  function dateKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }
  function readStreak() {
    var s = load(KEYS.streak, null);
    if (typeof s === 'number') s = { count: s, last: null };
    if (!s || typeof s !== 'object') s = { count: 0, last: null };
    return s;
  }
  function currentStreak() {
    var s = readStreak();
    if (!s.last) return s.count || 0;
    var y = new Date(); y.setDate(y.getDate() - 1);
    return (s.last === dateKey() || s.last === dateKey(y)) ? (s.count || 0) : 0;
  }
  function bumpStreak() {
    var s = readStreak();
    var today = dateKey();
    if (s.last === today) return;
    var y = new Date(); y.setDate(y.getDate() - 1);
    s.count = (s.last === dateKey(y)) ? (s.count || 0) + 1 : 1;
    s.last = today;
    save(KEYS.streak, s);
  }
  function getCompleted() { var c = load(KEYS.completed, []); return Array.isArray(c) ? c.map(Number) : []; }
  function getScores() { var s = load(KEYS.scores, {}); return s && typeof s === 'object' ? s : {}; }
  function getMastered() { var m = load(KEYS.mastered, []); return Array.isArray(m) ? m : []; }
  function vocabKey(en) { return String(en).trim().toLowerCase(); }

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
  var HAS_TTS = 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance !== 'undefined';
  var enVoice = null, speakTimer = null;
  function pickVoice() {
    if (!HAS_TTS) return null;
    try {
      var vs = window.speechSynthesis.getVoices() || [];
      var pick = null;
      for (var k = 0; k < vs.length && !pick; k++) if (/^en[-_]US$/i.test(vs[k].lang || '')) pick = vs[k];
      for (var j = 0; j < vs.length && !pick; j++) if (/^en/i.test(vs[j].lang || '')) pick = vs[j];
      return pick;
    } catch (e) { return null; }
  }
  if (HAS_TTS) {
    enVoice = pickVoice();
    try {
      if (window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener('voiceschanged', function () { enVoice = pickVoice(); });
      else window.speechSynthesis.onvoiceschanged = function () { enVoice = pickVoice(); };
    } catch (e) { }
  }
  function makeUtterance(text, pitch) {
    var u = new SpeechSynthesisUtterance(String(text));
    u.lang = 'en-US';
    u.rate = 0.9;
    if (enVoice) { try { u.voice = enVoice; } catch (e) { } }   // no voices installed: the browser default is used
    if (pitch) u.pitch = pitch;
    return u;
  }
  // cancel() directly followed by speak() is dropped by some browsers, and rapid clicks can queue
  // a pile of utterances, so only the latest request is spoken, after a short delay.
  function safeSpeak(u, delay) {
    if (!HAS_TTS || !u) return;
    clearTimeout(speakTimer);
    try { window.speechSynthesis.cancel(); } catch (e) { }
    speakTimer = setTimeout(function () {
      try {
        if (window.speechSynthesis.paused && window.speechSynthesis.resume) window.speechSynthesis.resume();
        window.speechSynthesis.speak(u);
      } catch (e) { }
    }, delay == null ? 60 : delay);
  }
  function speak(text) {
    if (!HAS_TTS || !text) return;
    stopDialogue();
    try { safeSpeak(makeUtterance(stripHtml(text))); } catch (e) { }
  }

  /* ---------- sync (Google Sheets) ---------- */
  function syncUrl() {
    // Only the URL the learner saved on this device counts. An empty value means "keep progress local only".
    return String(loadStr(KEYS.syncUrl, '') || '').trim();
  }
  function syncNow() {
    var url = syncUrl();
    if (!url) return;
    var payload = {
      source: 'english-learning-app',
      name: loadStr(KEYS.name, ''),
      streak: currentStreak(),
      completedDays: getCompleted(),
      dayScores: getScores(),
      masteredVocab: getMastered(),
      lastDay: parseInt(loadStr(KEYS.lastDay, '0'), 10) || 0,
      totalDays: TOTAL_DAYS,
      updatedAt: new Date().toISOString()
    };
    try { fetch(url, { method: 'POST', body: JSON.stringify(payload), mode: 'no-cors' }).catch(function () { }); } catch (e) { }
  }
  var syncT = null;
  function syncSoon() { clearTimeout(syncT); syncT = setTimeout(syncNow, 1500); }

  /* ---------- answer normalisation (contraction aware) ---------- */
  var IRREGULAR = [
    [/\bwon['’]t\b/g, 'will not'],
    [/\bcan['’]t\b/g, 'can not'],
    [/\bcannot\b/g, 'can not'],
    [/\bshan['’]t\b/g, 'shall not'],
    [/\bain['’]t\b/g, 'is not'],
    [/\blet['’]s\b/g, 'let us']
  ];
  // Past participles that follow "'s" (= has) / "'d" (= had), e.g. "he's gone", "she's never seen".
  var V3 = /^(been|got|gotten|gone|done|seen|taken|given|eaten|made|known|written|spoken|broken|chosen|driven|begun|come|become|run|met|heard|read|said|told|found|lost|left|lived|bought|brought|thought|taught|caught|built|sent|spent|paid|won|had|put|set|let|cut|hit|worn|drunk|sung|swum|flown|grown|shown|thrown|drawn|ridden|forgotten|fallen|hidden|stolen|woken|sold|kept|felt|held|stood|slept|sat|lent|meant|led|fed|dug)$/;
  var HAS_ADV = /^(never|already|just|ever|always|recently|lately|yet|still|not|really|finally)$/;
  function nextWord(str, from) {
    var m = /^\s*([a-z]+)/.exec(str.slice(from));
    return m ? m[1] : '';
  }
  function looksPerfect(w) {
    return V3.test(w) || HAS_ADV.test(w) || /ed$/.test(w);
  }
  // mode 0: guess is/has and would/had from context; 1: always is / would; 2: always has / had.
  // "he's tired" can be read both ways, so textMatches() compares all three readings.
  function normalizeMode(s, mode) {
    var t = String(s == null ? '' : s).replace(/\*\*/g, '').replace(/<[^>]*>/g, ' ');
    t = t.toLowerCase().replace(/[\u2018\u2019\u02bc`\u00b4]/g, "'");
    IRREGULAR.forEach(function (r) { t = t.replace(r[0], r[1]); });
    t = t.replace(/\b([a-z]+)n't\b/g, '$1 not');            // don't, doesn't, didn't, isn't, aren't, wasn't, mustn't ...
    t = t.replace(/\bi'm\b/g, 'i am');
    t = t.replace(/\b([a-z]+)'re\b/g, '$1 are');            // you're, we're, they're
    t = t.replace(/\b([a-z]+)'ve\b/g, '$1 have');           // I've, we've, they've
    t = t.replace(/\b([a-z]+)'ll\b/g, '$1 will');           // I'll, she'll
    t = t.replace(/\b(he|she|it|that|there|here|what|who|where|how|when|why)'s\b/g, function (m, w, off, str) {
      var has = mode === 2 || (mode === 0 && looksPerfect(nextWord(str, off + m.length)));
      return w + (has ? ' has' : ' is');                    // he's been = he has been, he's happy = he is happy
    });
    t = t.replace(/\b([a-z]+)'d\b/g, function (m, w, off, str) {
      var nx = nextWord(str, off + m.length);
      var had = mode === 2 || (mode === 0 && (nx === 'better' || looksPerfect(nx)));
      return w + (had ? ' had' : ' would');                 // I'd better = I had better, I'd like = I would like
    });
    t = t.replace(/[^a-z0-9'\s\-\u00c0-\u1ef9]/g, ' ');     // punctuation becomes a space (possessive apostrophes stay)
    t = t.replace(/(^|\s)'+|'+(\s|$)/g, ' ');               // stray quote marks
    return t.replace(/\s+/g, ' ').trim();
  }
  function normalizeAnswer(s) { return normalizeMode(s, 0); }
  function normalizeVariants(s) {
    var out = [];
    [0, 1, 2].forEach(function (m) { var v = normalizeMode(s, m); if (out.indexOf(v) === -1) out.push(v); });
    return out;
  }  function splitAlternatives(a) {
    if (a == null) return [];
    if (Array.isArray(a)) return a.reduce(function (acc, x) { return acc.concat(splitAlternatives(x)); }, []);
    return String(a).split(/\s+\|\s+|\s+\/\s+/).filter(function (x) { return x.trim(); });
  }
  function answerList(q) {
    var out = splitAlternatives(q.answer);
    ['answers', 'alt', 'alternatives', 'acceptable'].forEach(function (k) {
      if (q[k] != null) out = out.concat(splitAlternatives(q[k]));
    });
    return out;
  }
  var BLANK_G = /_{2,}/g;
  function countBlanks(s) { var m = String(s == null ? '' : s).match(BLANK_G); return m ? m.length : 0; }
  // "___ you ___ (look)": the learner may type only the verb ("are looking") or the whole phrase
  // including the words between the blanks ("are you looking"), so both are accepted.
  function middleWords(q) {
    var s = String(promptOf(q));
    var parts = s.split(BLANK_G);
    if (parts.length !== 3) return '';                     // exactly two blanks
    var mid = parts[1].replace(/\s+/g, ' ').trim();
    if (!/^[A-Za-z' ]{1,40}$/.test(mid) || mid.split(' ').length > 3) return '';
    return mid;
  }
  function withMiddle(ans, mid) {
    var w = String(ans).trim().split(/\s+/);
    if (w.length < 2) return null;
    return [w[0], mid].concat(w.slice(1)).join(' ');
  }
  function acceptedAnswers(q) {
    var list = answerList(q);
    var mid = middleWords(q);
    if (mid) list.slice().forEach(function (a) { var f = withMiddle(a, mid); if (f) list.push(f); });
    return list;
  }
  function textMatches(user, q) {
    var uv = normalizeVariants(user);
    if (!uv[0]) return false;
    return acceptedAnswers(q).some(function (a) {
      var av = normalizeVariants(a);
      return av.some(function (x) { return uv.indexOf(x) !== -1; });
    });
  }
  function displayAnswer(q) {
    var l = splitAlternatives(q.answer);
    return l.length ? l[0].replace(/\*\*/g, '') : '';
  }
  function promptOf(q) { return q.sentence || q.q || q.question || q.prompt || q.text || ''; }

  /* ---------- state ---------- */
  var D = null;
  var EX = { mc: [], fill: [], build: [], trans: [], review: [] };
  var buildState = [];
  var locked = {};            // 'mc-0' is true once that question has been graded
  var submitted = false;
  var hasDialogue = false;

  function parseDay() {
    var m = /[?&]day=(\d+)/.exec(location.search);
    var n = m ? parseInt(m[1], 10) : 1;
    if (!(n >= 1 && n <= TOTAL_DAYS)) n = 1;
    return n;
  }

  /* ---------- header ---------- */
  function renderHeader() {
    var metaBadge = 'Day ' + pad2(D.day) + ' ' + D.cefr;
    if (D.isExam) metaBadge += ' Bài thi';
    else if (D.isPractice) metaBadge += ' · Bài tập Ôn Ngày ' + pad2(D.reviewOfDay || (D.day - 1));
    setText('lesson-meta-badge', metaBadge);
    var badge = $('lesson-meta-badge'); if (badge) badge.setAttribute('data-cefr', D.cefr);
    setText('lesson-title', D.title || '');
    setText('lesson-sub', (D.titleEn ? D.titleEn + '. ' : '') + (D.dailyGoal || ''));
    document.title = 'Day ' + pad2(D.day) + ', ' + (D.title || '') + ' | English Learning App';
    renderScoreBadge();
  }
  function renderScoreBadge() {
    var sc = getScores()[D.day];
    var txt = 'Chưa làm bài';
    if (sc) txt = 'Cao nhất ' + (sc.score != null ? sc.score : sc.correct) + '/' + sc.total;
    var streak = currentStreak();
    if (streak > 0) txt += ', chuỗi ' + streak + ' ngày';
    setText('lesson-score-badge', txt);
  }

  /* ---------- tabs ---------- */
  var TAB_ORDER = ['vocab', 'grammar', 'dialogue', 'practice'];
  var TAB_LABEL = { vocab: 'Từ vựng', grammar: 'Ngữ pháp', dialogue: 'Hội thoại', practice: 'Bài tập' };

  function availableTabs() {
    return TAB_ORDER.filter(function (t) { return t !== 'dialogue' || hasDialogue; });
  }
  function showTab(name, scroll) {
    if (availableTabs().indexOf(name) === -1) name = availableTabs()[0];
    var tabs = $('lesson-tabs');
    if (tabs) each(tabs.querySelectorAll('[data-tab]'), function (b) {
      var on = b.getAttribute('data-tab') === name;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.setAttribute('tabindex', on ? '0' : '-1');
    });
    TAB_ORDER.forEach(function (t) {
      var p = $('tab-' + t);
      if (p) p.hidden = t !== name;
    });
    if (name !== 'dialogue') stopDialogue();
    if (scroll && tabs && tabs.scrollIntoView) tabs.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function initTabs() {
    var tabs = $('lesson-tabs');
    if (!hasDialogue) {
      // Milestone exam days have no dialogue: hide step 3 and skip it in the step buttons.
      var dlgBtn = tabs && tabs.querySelector('[data-tab="dialogue"]');
      if (dlgBtn) { dlgBtn.hidden = true; dlgBtn.disabled = true; dlgBtn.setAttribute('aria-hidden', 'true'); }
      var empty = $('dialogue-empty'); if (empty) empty.hidden = false;
      var pa = $('dialogue-play-all'), tv = $('dialogue-toggle-vi');
      if (pa) pa.hidden = true;
      if (tv) tv.hidden = true;
      var g = $('tab-grammar');
      if (g) {
        var nb = g.querySelector('[data-next-tab="dialogue"]');
        if (nb) { nb.setAttribute('data-next-tab', 'practice'); setLabel(nb, 'Sang bước 4: Bài tập'); }
      }
    }
    if (tabs) {
      tabs.addEventListener('click', function (ev) {
        var b = closest(ev.target, '[data-tab]');
        if (b && tabs.contains(b) && !b.disabled) showTab(b.getAttribute('data-tab'), false);
      });
      tabs.addEventListener('keydown', function (ev) {
        if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return;
        var list = availableTabs();
        var cur = tabs.querySelector('[data-tab].is-active');
        var i = Math.max(0, list.indexOf(cur ? cur.getAttribute('data-tab') : 'vocab'));
        i = ev.key === 'ArrowRight' ? Math.min(list.length - 1, i + 1) : Math.max(0, i - 1);
        showTab(list[i], false);
        var nb = tabs.querySelector('[data-tab="' + list[i] + '"]'); if (nb) nb.focus();
      });
    }
    document.addEventListener('click', function (ev) {
      var b = closest(ev.target, '[data-next-tab], [data-goto-tab]');
      if (b) showTab(b.getAttribute('data-next-tab') || b.getAttribute('data-goto-tab'), true);
    });
    var hash = (location.hash || '').replace('#', '');
    showTab(TAB_ORDER.indexOf(hash) !== -1 ? hash : 'vocab', false);
  }

  /* ---------- Step 1: vocabulary ---------- */
  var deckIndex = 0;

  function updateMasteredCounter() {
    var vocab = D.vocab || [];
    var m = getMastered();
    var n = vocab.filter(function (v) { return m.indexOf(vocabKey(v.en)) !== -1; }).length;
    setText('vocab-mastered-count', n + '/' + vocab.length);
  }
  function isMastered(en) { return getMastered().indexOf(vocabKey(en)) !== -1; }
  function toggleMastered(en) {
    var list = getMastered(), k = vocabKey(en), i = list.indexOf(k);
    if (i === -1) list.push(k); else list.splice(i, 1);
    save(KEYS.mastered, list);
    updateMasteredCounter();
    syncSoon();
    return i === -1;
  }
  function masterBtn(v, cls) {
    var on = isMastered(v.en);
    return '<button type="button" class="vcard-master' + (cls ? ' ' + cls : '') + (on ? ' is-on' : '') + '" data-master="' + esc(v.en) + '" aria-pressed="' + (on ? 'true' : 'false') + '">' +
      (on ? 'Đã thuộc' : 'Đánh dấu đã thuộc') + '</button>';
  }
  function speakBtn(text, label, extraCls) {
    return '<button type="button" class="icon-btn' + (extraCls ? ' ' + extraCls : '') + '" data-speak="' + esc(text) + '" aria-label="' + esc(label) + '">' + icon('speaker') + '</button>';
  }
  function cardInner(v, withMaster) {
    return '<div class="vcard-inner">' +
        '<div class="vcard-face vcard-front">' +
          '<span class="vcard-pos">' + esc(v.pos || '') + '</span>' +
          '<strong class="vcard-en">' + esc(v.en) + '</strong>' +
          '<span class="vcard-ipa">' + esc(v.ipa || '') + '</span>' +
          speakBtn(v.en, 'Phát âm ' + v.en) +
        '</div>' +
        '<div class="vcard-face vcard-back">' +
          '<span class="vcard-vi">' + esc(v.vi || '') + '</span>' +
          (v.example ? '<span class="vcard-ex">' + esc(v.example) + '</span>' : '') +
          speakBtn(v.example || v.en, 'Nghe câu ví dụ') +
          (withMaster ? masterBtn(v) : '') +
        '</div>' +
      '</div>';
  }

  function renderVocabGrid() {
    var grid = $('vocab-grid');
    if (!grid) return;
    grid.innerHTML = (D.vocab || []).map(function (v) {
      var on = isMastered(v.en);
      return '<article class="vcard vcard-open' + (on ? ' is-mastered' : '') + '" data-en="' + esc(v.en) + '">' +
        '<div class="vcard-top">' +
          '<div class="vcard-head">' +
            '<strong class="vcard-en">' + esc(v.en) + '</strong>' +
            '<span class="vcard-pos">' + esc(v.pos || '') + '</span>' +
          '</div>' +
          '<div class="vcard-tools">' +
            '<span class="vcard-ipa">' + esc(v.ipa || '') + '</span>' +
            speakBtn(v.en, 'Phát âm ' + v.en) +
          '</div>' +
        '</div>' +
        '<p class="vcard-vi">' + esc(v.vi || '') + '</p>' +
        (v.example ? (
          '<div class="vcard-ex-row">' +
            '<p class="vcard-ex">"' + esc(v.example) + '"</p>' +
            speakBtn(v.example, 'Nghe câu ví dụ', 'icon-btn-sm') +
          '</div>'
        ) : '') +
        '<div class="vcard-foot">' +
          masterBtn(v) +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderDeck(keepFlip) {
    var deck = $('vocab-deck');
    if (!deck) return;
    var vocab = D.vocab || [];
    if (!vocab.length) { deck.innerHTML = ''; return; }
    deckIndex = Math.max(0, Math.min(vocab.length - 1, deckIndex));
    var v = vocab[deckIndex];
    deck.innerHTML =
      '<div class="deck-count" aria-live="polite">' + (deckIndex + 1) + ' / ' + vocab.length + '</div>' +
      '<div class="vcard vcard-deck' + (keepFlip ? ' is-flipped' : '') + (isMastered(v.en) ? ' is-mastered' : '') + '" tabindex="0" role="button" aria-pressed="' + (keepFlip ? 'true' : 'false') + '" aria-label="Thẻ từ ' + esc(v.en) + ', bấm để lật">' +
        cardInner(v, false) +
      '</div>' +
      '<div class="deck-controls">' +
        '<button type="button" class="btn btn-ghost" data-deck="prev"' + (deckIndex === 0 ? ' disabled' : '') + '>' + icon('arrow-left') + '<span class="btn-label">Trước</span></button>' +
        '<button type="button" class="btn btn-ghost" data-deck="flip">' + icon('flip') + '<span class="btn-label">Lật thẻ</span></button>' +
        masterBtn(v, 'deck-master') +
        '<button type="button" class="btn btn-primary" data-deck="next"' + (deckIndex === vocab.length - 1 ? ' disabled' : '') + '><span class="btn-label">Sau</span>' + icon('arrow-right') + '</button>' +
      '</div>';
  }

  function setVocabMode(mode) {
    var grid = $('vocab-grid'), deck = $('vocab-deck');
    var gb = $('vocab-mode-grid'), db = $('vocab-mode-deck');
    var isDeck = mode === 'deck';
    if (grid) grid.hidden = isDeck;
    if (deck) deck.hidden = !isDeck;
    if (gb) { gb.classList.toggle('is-active', !isDeck); gb.setAttribute('aria-pressed', !isDeck ? 'true' : 'false'); }
    if (db) { db.classList.toggle('is-active', isDeck); db.setAttribute('aria-pressed', isDeck ? 'true' : 'false'); }
    var hint = document.querySelector('#tab-vocab .panel-hint');
    if (hint) hint.textContent = isDeck
      ? 'Học từng thẻ một: lật thẻ, nghe phát âm, rồi đánh dấu những từ đã thuộc.'
      : 'Danh sách từ vựng trọng tâm trong bài — bấm biểu tượng loa để nghe phát âm chuẩn Mỹ, hoặc chuyển sang chế độ Từng thẻ để tự kiểm tra trí nhớ.';
    if (isDeck) renderDeck(false);
  }

  function flip(card) {
    if (!card || card.classList.contains('vcard-open')) return;
    var on = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function initVocab() {
    renderVocabGrid();
    updateMasteredCounter();
    var gb = $('vocab-mode-grid'), db = $('vocab-mode-deck');
    if (gb) gb.addEventListener('click', function () { setVocabMode('grid'); });
    if (db) db.addEventListener('click', function () { setVocabMode('deck'); });
    setVocabMode('grid');

    var tab = $('tab-vocab');
    if (!tab) return;
    tab.addEventListener('click', function (ev) {
      var sp = closest(ev.target, '[data-speak]');
      if (sp) { speak(sp.getAttribute('data-speak')); return; }
      var mb = closest(ev.target, '[data-master]');
      if (mb) {
        var en = mb.getAttribute('data-master');
        var on = toggleMastered(en);
        // keep the grid card and the deck card in step with each other
        each(tab.querySelectorAll('[data-master]'), function (b) {
          if (b.getAttribute('data-master') === en) {
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
            b.classList.toggle('is-on', on);
            b.textContent = on ? 'Đã thuộc' : 'Đánh dấu đã thuộc';
          }
        });
        each(tab.querySelectorAll('.vcard'), function (c) {
          var m = c.querySelector('.vcard-en');
          if (m && vocabKey(m.textContent) === vocabKey(en)) c.classList.toggle('is-mastered', on);
        });
        if (mb.classList.contains('deck-master') === false && closest(mb, '.vcard-deck')) mb.focus();
        return;
      }
      var dk = closest(ev.target, '[data-deck]');
      if (dk) {
        var a = dk.getAttribute('data-deck');
        if (a === 'prev') { deckIndex--; renderDeck(false); }
        else if (a === 'next') { deckIndex++; renderDeck(false); }
        else if (a === 'flip') flip(tab.querySelector('.vcard-deck'));
        var nf = tab.querySelector('[data-deck="' + a + '"]'); if (nf && !nf.disabled) nf.focus();
        return;
      }
      var c = closest(ev.target, '.vcard');
      if (c && tab.contains(c)) flip(c);
    });
    tab.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      var c = closest(ev.target, '.vcard');
      if (c && ev.target === c) { ev.preventDefault(); flip(c); }
    });

    // Deck shortcuts: Left = previous card, Right = next card, Space = flip.
    document.addEventListener('keydown', function (ev) {
      if (ev.defaultPrevented || ev.altKey || ev.ctrlKey || ev.metaKey) return;
      var k = ev.key;
      if (k !== 'ArrowLeft' && k !== 'ArrowRight' && k !== ' ' && k !== 'Spacebar') return;
      var deck = $('vocab-deck');
      if (tab.hidden || !deck || deck.hidden) return;
      var t = ev.target;
      var tag = t && t.tagName ? t.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || (t && t.isContentEditable)) return;
      if (closest(t, '#lesson-tabs')) return;            // the step bar has its own arrow-key handling
      var vocab = D.vocab || [];
      if (k === ' ' || k === 'Spacebar') {
        // buttons and the focused card already react to Space themselves
        if (tag === 'button' || tag === 'a' || closest(t, '.vcard')) return;
        ev.preventDefault();
        flip(deck.querySelector('.vcard-deck'));
        return;
      }
      ev.preventDefault();
      var next = deckIndex + (k === 'ArrowRight' ? 1 : -1);
      if (next < 0 || next > vocab.length - 1) return;
      var hadFocus = !!closest(t, '#vocab-deck');
      deckIndex = next;
      renderDeck(false);
      if (hadFocus) { var c = deck.querySelector('.vcard-deck'); if (c && c.focus) c.focus({ preventScroll: true }); }
    });
  }

  /* ---------- Step 2: grammar ---------- */
  function renderGrammar() {
    var g = D.grammar || {};
    var pt = $('grammar-point'); if (pt) pt.textContent = stripHtml(g.point || 'Điểm ngữ pháp');
    var ex = $('grammar-explanation'); if (ex) ex.innerHTML = g.explanation || '';
    var exs = $('grammar-examples');
    if (exs) {
      exs.innerHTML = (g.examples || []).map(function (e) {
        var en = typeof e === 'string' ? e : (e.en || '');
        var vi = typeof e === 'object' && e.vi ? '<span class="ex-vi">' + esc(e.vi) + '</span>' : '';
        var html = en.indexOf('<') !== -1 ? en : mdInline(en);
        return '<li class="ex-item">' + speakBtn(stripHtml(en), 'Nghe câu ví dụ') +
          '<span class="ex-text"><span>' + html + '</span>' + vi + '</span></li>';
      }).join('');
    }
    var mk = $('grammar-mistake');
    if (mk) {
      var c = g.commonMistake;
      mk.innerHTML = c ? (
        '<p class="mistake-row mistake-wrong"><span class="mistake-text">' + mdInline(c.wrong || '') + '</span></p>' +
        '<p class="mistake-row mistake-right"><span class="mistake-text">' + mdInline(c.right || '') + '</span></p>' +
        (c.note ? '<p class="mistake-note">' + mdInline(c.note) + '</p>' : '')
      ) : '';
    }
    var tip = $('grammar-tip');
    if (tip) tip.innerHTML = g.memoryTip ? '<p>' + mdInline(g.memoryTip) + '</p>' : '';
    var tab = $('tab-grammar');
    if (tab) tab.addEventListener('click', function (ev) {
      var sp = closest(ev.target, '[data-speak]');
      if (sp) speak(sp.getAttribute('data-speak'));
    });
  }

  /* ---------- Step 3: dialogue ---------- */
  var dlgPlaying = false;
  var dlgToken = 0;

  function speakerPitch(name, speakers) {
    var i = speakers.indexOf(name);
    return i <= 0 ? 1 : (i % 2 ? 1.25 : 0.85);
  }
  function highlightLine(i) {
    var box = $('dialogue-lines');
    if (!box) return;
    var lines = box.querySelectorAll('.dlg-line');
    each(lines, function (el, idx) { el.classList.toggle('is-speaking', idx === i); });
    if (i >= 0 && lines[i] && lines[i].scrollIntoView) lines[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function setPlayLabel() {
    var b = $('dialogue-play-all');
    if (!b) return;
    setLabel(b, dlgPlaying ? 'Dừng nghe' : 'Nghe toàn hội thoại');
    b.setAttribute('aria-pressed', dlgPlaying ? 'true' : 'false');
  }
  function stopDialogue() {
    dlgToken++;
    if (dlgPlaying) {
      dlgPlaying = false;
      clearTimeout(speakTimer);
      if (HAS_TTS) try { window.speechSynthesis.cancel(); } catch (e) { }
      highlightLine(-1);
      setPlayLabel();
    }
  }
  function playDialogue() {
    var lines = (D.dialogue && D.dialogue.lines) || [];
    if (!HAS_TTS || !lines.length) return;
    if (dlgPlaying) { stopDialogue(); return; }
    var speakers = [];
    lines.forEach(function (l) { if (speakers.indexOf(l.speaker) === -1) speakers.push(l.speaker); });
    var token = ++dlgToken;
    dlgPlaying = true;
    setPlayLabel();
    clearTimeout(speakTimer);
    try { window.speechSynthesis.cancel(); } catch (e) { }
    var i = 0;
    (function next() {
      if (token !== dlgToken) return;
      if (i >= lines.length) { dlgPlaying = false; highlightLine(-1); setPlayLabel(); return; }
      var idx = i++;
      highlightLine(idx);
      var u = makeUtterance(lines[idx].en, speakerPitch(lines[idx].speaker, speakers));
      u.onend = function () { setTimeout(next, 250); };
      u.onerror = function () { setTimeout(next, 0); };
      try { window.speechSynthesis.speak(u); } catch (e) { dlgPlaying = false; highlightLine(-1); setPlayLabel(); }
    })();
  }

  function renderDialogue() {
    if (!hasDialogue) return;
    var dlg = D.dialogue;
    setText('dialogue-title', dlg.titleVi || dlg.title || 'Hội thoại');
    var speakers = [];
    dlg.lines.forEach(function (l) { if (speakers.indexOf(l.speaker) === -1) speakers.push(l.speaker); });
    var box = $('dialogue-lines');
    if (box) {
      box.innerHTML = dlg.lines.map(function (l, i) {
        var right = speakers.indexOf(l.speaker) % 2 === 1;
        return '<div class="dlg-line' + (right ? ' is-right' : '') + '" data-i="' + i + '">' +
          '<span class="dlg-speaker" title="' + esc(l.speaker) + '">' + esc(String(l.speaker).charAt(0).toUpperCase()) + '</span>' +
          '<div class="dlg-bubble">' +
            '<p class="dlg-en">' + esc(l.en) + '</p>' +
            '<p class="dlg-vi" hidden>' + esc(l.vi || '') + '</p>' +
          '</div>' +
          '<button type="button" class="icon-btn" data-speak-line="' + i + '" aria-label="Nghe câu của ' + esc(l.speaker) + '">' + icon('speaker') + '</button>' +
        '</div>';
      }).join('');
      box.addEventListener('click', function (ev) {
        var b = closest(ev.target, '[data-speak-line]');
        if (!b) return;
        stopDialogue();
        var i = parseInt(b.getAttribute('data-speak-line'), 10);
        highlightLine(i);
        if (!HAS_TTS) return;
        try {
          var u = makeUtterance(dlg.lines[i].en, speakerPitch(dlg.lines[i].speaker, speakers));
          u.onend = function () { highlightLine(-1); };
          u.onerror = function () { highlightLine(-1); };
          safeSpeak(u);
        } catch (e) { }
      });
    }
    var play = $('dialogue-play-all');
    if (play) {
      play.addEventListener('click', playDialogue);
      if (!HAS_TTS) { play.disabled = true; play.title = 'Trình duyệt này không hỗ trợ phát âm'; }
    }
    var tg = $('dialogue-toggle-vi');
    if (tg) {
      tg.addEventListener('click', function () {
        var on = tg.getAttribute('aria-pressed') !== 'true';
        if (box) each(box.querySelectorAll('.dlg-vi'), function (p) { p.hidden = !on; });
        setLabel(tg, on ? 'Ẩn dịch tiếng Việt' : 'Hiện dịch tiếng Việt');
        tg.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
  }

  /* ---------- Step 4: practice ---------- */
  var TYPES = [
    { key: 'mc', field: 'multipleChoice', block: 'ex-block-mc' },
    { key: 'fill', field: 'fillBlank', block: 'ex-block-fill' },
    { key: 'build', field: 'sentenceBuild', block: 'ex-block-build' },
    { key: 'trans', field: 'transformation', block: 'ex-block-transform' },
    { key: 'review', field: 'review', block: 'ex-block-review' }
  ];

  function totalQuestions() {
    return TYPES.reduce(function (n, t) { return n + EX[t.key].length; }, 0);
  }
  function qid(type, i) { return type + '-' + i; }
  function qEl(type, i) { return $('q-' + type + '-' + i); }

  var BLANK_RE = /_{2,}/;
  // Put an input where each "___" is; fall back to appending one input after the sentence.
  // makeInput is either a function (partIndex, totalParts) => html, or a ready-made html string
  // (only sensible for a single blank).
  function sentenceWithInput(sentence, makeInput) {
    var s = String(sentence);
    var segs = s.split(BLANK_G);
    var n = segs.length - 1;
    function inp(k, total) { return typeof makeInput === 'function' ? makeInput(k, total) : String(makeInput); }
    if (n < 1) return '<span class="q-seg">' + esc(s) + '</span> ' + inp(0, 1);
    var out = '';
    for (var k = 0; k < segs.length; k++) {
      out += '<span class="q-seg">' + esc(segs[k]) + '</span>';
      if (k < n) out += inp(k, n);
    }
    return out;
  }
  function qPrompt(n, innerHtml) {
    return '<p class="q-text"><span class="q-num">' + n + '.</span>' + innerHtml + '</p>';
  }
  function hintHtml(q) {
    return q.hint ? '<p class="q-hint"><span class="q-hint-label">Gợi ý:</span> ' + esc(q.hint) + '</p>' : '';
  }
  function inputHtml(cls, type, i, part, total) {
    part = part || 0; total = total || 1;
    var multi = total > 1;
    return '<input type="text" class="' + cls + (multi ? ' fill-input-part' : '') + '" data-type="' + type + '" data-i="' + i + '" data-part="' + part + '" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Đáp án câu ' + (i + 1) + (multi ? ', ô ' + (part + 1) + ' trên ' + total : '') + '">';
  }
  function inputMaker(cls, type, i) {
    return function (part, total) { return inputHtml(cls, type, i, part, total); };
  }

  function resolveMcAnswerIndex(q) {
    var opts = q.options || q.choices || [];
    var a = q.answer != null ? q.answer : (q.correct != null ? q.correct : q.correctIndex);
    if (typeof a === 'number') return a;
    var s = String(a).trim();
    var idx = -1;
    opts.forEach(function (o, k) { if (idx === -1 && String(o).trim() === s) idx = k; });
    if (idx === -1) opts.forEach(function (o, k) { if (idx === -1 && normalizeAnswer(o) === normalizeAnswer(s)) idx = k; });
    if (idx === -1 && /^[A-Da-d]$/.test(s)) idx = s.toUpperCase().charCodeAt(0) - 65;
    return idx;
  }

  function renderMC() {
    var box = $('eng-mc'); if (!box) return;
    box.innerHTML = EX.mc.map(function (q, i) {
      var opts = q.options || q.choices || [];
      return '<div class="q-item" data-type="mc" data-i="' + i + '" id="q-mc-' + i + '">' +
        qPrompt(i + 1, ' ' + esc(promptOf(q))) +
        '<div class="q-options" role="radiogroup" aria-label="Câu ' + (i + 1) + '">' + opts.map(function (o, j) {
          return '<label class="opt"><input type="radio" name="mc-' + i + '" value="' + j + '"><span>' + esc(o) + '</span></label>';
        }).join('') + '</div>' +
        '<p class="q-feedback" aria-live="polite"></p>' +
      '</div>';
    }).join('');
  }
  function renderFill() {
    var box = $('eng-fill'); if (!box) return;
    box.innerHTML = EX.fill.map(function (q, i) {
      return '<div class="q-item" data-type="fill" data-i="' + i + '" id="q-fill-' + i + '">' +
        qPrompt(i + 1, sentenceWithInput(promptOf(q), inputMaker('fill-input', 'fill', i))) +
        hintHtml(q) +
        '<p class="q-feedback" aria-live="polite"></p>' +
      '</div>';
    }).join('');
  }

  function shuffled(arr, seed) {
    var a = arr.slice();
    var s = seed * 9301 + 49297;
    function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    if (a.length > 1 && a.every(function (x, k) { return x.w === arr[k].w; })) a.push(a.shift());
    return a;
  }
  function initBuildState() {
    buildState = EX.build.map(function (q, i) {
      var words = Array.isArray(q.words) && q.words.length ? q.words : String(displayAnswer(q)).split(/\s+/).filter(Boolean);
      var objs = words.map(function (w, k) { return { id: k, w: String(w) }; });
      return { words: shuffled(objs, D.day * 31 + i + 1), chosen: [] };
    });
  }
  function renderBuildQuestion(i) {
    var st = buildState[i];
    var isLocked = !!locked[qid('build', i)];
    var byId = {};
    st.words.forEach(function (o) { byId[o.id] = o; });
    var el = qEl('build', i);
    var slots = el.querySelector('.build-answer'), pool = el.querySelector('.build-pool');
    slots.innerHTML = st.chosen.length ? st.chosen.map(function (id) {
      return '<button type="button" class="word-chip" data-build-remove="' + id + '"' + (isLocked ? ' disabled' : '') +
        ' aria-label="Bỏ từ ' + esc(byId[id].w) + ' ra khỏi câu">' + esc(byId[id].w) + '</button>';
    }).join('') : '<span class="build-placeholder">Bấm các từ bên dưới để ghép câu</span>';
    pool.innerHTML = st.words.filter(function (o) { return st.chosen.indexOf(o.id) === -1; }).map(function (o) {
      return '<button type="button" class="word-chip" data-build-add="' + o.id + '"' + (isLocked ? ' disabled' : '') + '>' + esc(o.w) + '</button>';
    }).join('');
  }
  function renderBuild() {
    var box = $('eng-build'); if (!box) return;
    box.innerHTML = EX.build.map(function (q, i) {
      var vi = q.vi || q.translation || q.hint;
      return '<div class="q-item" data-type="build" data-i="' + i + '" id="q-build-' + i + '">' +
        qPrompt(i + 1, ' ' + (vi ? esc(vi) : 'Ghép các từ thành câu hoàn chỉnh. Bấm một từ trong câu để bỏ từ đó ra.')) +
        '<div class="build-answer" aria-label="Câu đang ghép" aria-live="polite"></div>' +
        '<div class="build-pool" aria-label="Kho từ"></div>' +
        '<p class="q-feedback" aria-live="polite"></p>' +
      '</div>';
    }).join('');
    EX.build.forEach(function (q, i) { renderBuildQuestion(i); });
  }
  function renderTextType(key, boxId, cls) {
    var box = $(boxId); if (!box) return;
    box.innerHTML = EX[key].map(function (q, i) {
      var p = promptOf(q);
      var inline = BLANK_RE.test(p);
      return '<div class="q-item" data-type="' + key + '" data-i="' + i + '" id="q-' + key + '-' + i + '">' +
        qPrompt(i + 1, inline ? sentenceWithInput(p, inputMaker(cls, key, i)) : ' ' + esc(p)) +
        hintHtml(q) +
        (inline ? '' : '<div class="q-answer-row">' + inputHtml(cls, key, i, 0, 1) + '</div>') +
        '<p class="q-feedback" aria-live="polite"></p>' +
      '</div>';
    }).join('');
  }

  /* progress */
  function isAnswered(type, i) {
    var el = qEl(type, i);
    if (!el) return false;
    if (type === 'mc') return !!el.querySelector('input[type=radio]:checked');
    if (type === 'build') {
      var st = buildState[i];
      return st.chosen.length > 0 && st.chosen.length === st.words.length;
    }
    var inps = el.querySelectorAll('input[type=text]');
    if (!inps.length) return false;
    if (inps.length === 1) return !!inps[0].value.trim();
    // several blanks: answered when every box has text, or when the first box already holds a
    // multi-word answer (e.g. "are you looking" typed into box 1)
    var all = true;
    each(inps, function (x) { if (!x.value.trim()) all = false; });
    return all || inps[0].value.trim().split(/\s+/).length > 1;
  }
  function countAnswered() {
    var n = 0;
    TYPES.forEach(function (t) { EX[t.key].forEach(function (q, i) { if (isAnswered(t.key, i)) n++; }); });
    return n;
  }
  function updateProgress() {
    var total = totalQuestions(), answered = countAnswered();
    var pct = total ? Math.round(answered / total * 100) : 0;
    setText('practice-progress-text', 'Đã trả lời ' + answered + ' trên ' + total + ' câu');
    var bar = $('practice-progress-bar');
    if (bar) {
      bar.style.width = pct + '%';
      bar.setAttribute('data-progress', String(pct));
    }
  }

  /* grading */
  function gradeOne(type, i) {
    var q = EX[type][i];
    var el = qEl(type, i);
    var ok = false, expected = '', given = '', selected = -1, correctIdx = -1;
    if (type === 'mc') {
      var opts = q.options || q.choices || [];
      var chk = el.querySelector('input[type=radio]:checked');
      correctIdx = resolveMcAnswerIndex(q);
      selected = chk ? parseInt(chk.value, 10) : -1;
      given = chk ? opts[selected] : '';
      ok = selected !== -1 && selected === correctIdx;
      expected = opts[correctIdx] != null ? opts[correctIdx] : displayAnswer(q);
    } else if (type === 'build') {
      var st = buildState[i], byId = {};
      st.words.forEach(function (o) { byId[o.id] = o; });
      given = st.chosen.map(function (id) { return byId[id].w; }).join(' ');
      ok = st.chosen.length > 0 && textMatches(given, q);
      expected = displayAnswer(q);
    } else {
      var inputs = Array.prototype.slice.call(el.querySelectorAll('input[type=text]'));
      // "are" + "looking" and "are you looking" in box 1 both grade as the same answer
      given = inputs.map(function (x) { return x.value.trim(); }).filter(Boolean).join(' ');
      ok = textMatches(given, q);
      expected = displayAnswer(q);
    }
    return { ok: ok, expected: String(expected), given: String(given), selected: selected, correctIdx: correctIdx };
  }

  function lockQuestion(type, i, on) {
    var el = qEl(type, i);
    if (on) locked[qid(type, i)] = true; else delete locked[qid(type, i)];
    each(el.querySelectorAll('input'), function (inp) { inp.disabled = !!on; });   // every box of a multi-blank question
    if (type === 'build') renderBuildQuestion(i);
  }

  function showFeedback(type, i, res) {
    var el = qEl(type, i);
    var q = EX[type][i];
    el.classList.remove('is-correct', 'is-wrong');
    el.classList.add(res.ok ? 'is-correct' : 'is-wrong');
    var note = q.explanation || q.note || q.why || '';
    var fb = el.querySelector('.q-feedback');
    fb.classList.remove('fb-ok', 'fb-bad');
    fb.classList.add(res.ok ? 'fb-ok' : 'fb-bad');
    if (res.ok) {
      fb.innerHTML = '<span class="fb-mark">Chính xác.</span>' + (note ? ' <span class="fb-note">' + esc(note) + '</span>' : '');
    } else {
      fb.innerHTML = '<span class="fb-mark">Chưa đúng.</span> ' +
        (res.given ? '<span class="fb-given">Bạn trả lời: <s>' + esc(res.given) + '</s>.</span> ' : '<span class="fb-given">Bạn chưa trả lời.</span> ') +
        '<span class="fb-correct">Đáp án đúng: <b>' + esc(res.expected) + '</b>.</span>' +
        (note ? ' <span class="fb-note">' + esc(note) + '</span>' : '');
    }
  }
  function clearFeedback(type, i) {
    var el = qEl(type, i);
    el.classList.remove('is-correct', 'is-wrong');
    var fb = el.querySelector('.q-feedback');
    fb.innerHTML = ''; fb.classList.remove('fb-ok', 'fb-bad');
  }

  var lastWrong = [];

  function submitPractice() {
    var total = totalQuestions();
    if (!total) return;
    var correct = 0;
    lastWrong = [];
    TYPES.forEach(function (t) {
      EX[t.key].forEach(function (q, i) {
        // retryWrong() unlocks only wrong questions, so a locked one is a correct answer kept from an earlier round
        if (locked[qid(t.key, i)]) { correct++; return; }
        var res = gradeOne(t.key, i);
        if (res.ok) correct++; else lastWrong.push({ type: t.key, i: i });
        showFeedback(t.key, i, res);
        lockQuestion(t.key, i, true);
      });
    });
    submitted = true;
    var pct = Math.round(correct / total * 100);
    var passed = correct / total >= PASS_RATIO;
    recordScore(correct, total, passed);

    var out = $('eng-result');
    if (out) {
      out.classList.toggle('is-pass', passed);
      out.classList.toggle('is-fail', !passed);
      var best = getScores()[D.day];
      out.innerHTML = '<strong class="result-score">' + correct + '/' + total + '</strong> <span class="result-pct">(' + pct + '%)</span>. ' +
        (passed
          ? 'Đạt. Day ' + pad2(D.day) + ' đã được đánh dấu hoàn thành.'
          : 'Cần ít nhất ' + Math.ceil(total * PASS_RATIO) + '/' + total + ' để hoàn thành bài. Hãy sửa các câu sai và nộp lại.') +
        (best ? ' Điểm cao nhất: ' + best.score + '/' + best.total + '.' : '');
    }
    var submit = $('eng-submit'); if (submit) submit.disabled = true;
    var retry = $('eng-retry-wrong');
    if (retry) {
      retry.hidden = lastWrong.length === 0;
      retry.textContent = 'Làm lại ' + lastWrong.length + ' câu sai';
    }
    renderScoreBadge();
    updateProgress();
    if (out && out.scrollIntoView) out.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function recordScore(correct, total, passed) {
    var scores = getScores();
    var prev = scores[D.day];
    var prevRatio = prev && prev.total ? (prev.score != null ? prev.score : prev.correct) / prev.total : -1;
    if (correct / total > prevRatio) {
      scores[D.day] = { score: correct, total: total, pct: Math.round(correct / total * 100), at: new Date().toISOString() };
      save(KEYS.scores, scores);
    }
    if (passed) {
      var done = getCompleted();
      if (done.indexOf(D.day) === -1) { done.push(D.day); done.sort(function (a, b) { return a - b; }); save(KEYS.completed, done); }
      bumpStreak();
    }
    syncNow();
  }

  function retryWrong() {
    if (!lastWrong.length) return;
    lastWrong.forEach(function (w) {
      var el = qEl(w.type, w.i);
      clearFeedback(w.type, w.i);
      if (w.type === 'build') buildState[w.i].chosen = [];
      else each(el.querySelectorAll('input'), function (inp) { if (inp.type === 'radio') inp.checked = false; else inp.value = ''; });
      lockQuestion(w.type, w.i, false);
    });
    var first = qEl(lastWrong[0].type, lastWrong[0].i);
    lastWrong = [];
    submitted = false;
    var submit = $('eng-submit'); if (submit) submit.disabled = false;
    var retry = $('eng-retry-wrong'); if (retry) retry.hidden = true;
    var out = $('eng-result');
    if (out) { out.classList.remove('is-pass', 'is-fail'); out.textContent = 'Hãy làm lại các câu sai rồi bấm nộp bài lần nữa. Các câu đúng được giữ nguyên.'; }
    updateProgress();
    if (first) {
      if (first.scrollIntoView) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      var f = first.querySelector('input:not([disabled]), button:not([disabled])');
      if (f && f.focus) f.focus({ preventScroll: true });
    }
  }

  function initPractice() {
    TYPES.forEach(function (t) {
      var list = D.exercises && D.exercises[t.field];
      EX[t.key] = Array.isArray(list) ? list : [];
      var blk = $(t.block);
      if (blk) blk.hidden = EX[t.key].length === 0;
    });
    initBuildState();
    renderMC(); renderFill(); renderBuild();
    renderTextType('trans', 'eng-transform', 'trans-input');
    renderTextType('review', 'eng-review', 'review-input');
    updateProgress();

    var tab = $('tab-practice');
    if (tab) {
      tab.addEventListener('input', updateProgress);
      tab.addEventListener('change', function (ev) {
        updateProgress();
      });
      tab.addEventListener('keydown', function (ev) {
        // Enter in a text box jumps to the next open text box
        if (ev.key !== 'Enter' || !ev.target || ev.target.type !== 'text') return;
        ev.preventDefault();
        var inputs = Array.prototype.filter.call(tab.querySelectorAll('input[type=text]'), function (x) { return !x.disabled; });
        var k = inputs.indexOf(ev.target);
        if (k !== -1 && inputs[k + 1]) inputs[k + 1].focus();
      });
      tab.addEventListener('click', function (ev) {
        var add = closest(ev.target, '[data-build-add]');
        var rem = closest(ev.target, '[data-build-remove]');
        var btn = add || rem;
        if (!btn) return;
        var q = closest(btn, '.q-item');
        var i = parseInt(q.getAttribute('data-i'), 10);
        if (locked[qid('build', i)]) return;
        var st = buildState[i];
        if (add) st.chosen.push(parseInt(add.getAttribute('data-build-add'), 10));
        else {
          var id = parseInt(rem.getAttribute('data-build-remove'), 10);
          var pos = st.chosen.indexOf(id);
          if (pos !== -1) st.chosen.splice(pos, 1);   // remove exactly that word, the others keep their order
        }
        renderBuildQuestion(i);
        updateProgress();
        var again = q.querySelector(add ? '[data-build-add]' : '[data-build-remove]');
        if (again) again.focus({ preventScroll: true });
      });
    }
    var submit = $('eng-submit');
    if (submit) submit.addEventListener('click', function () {
      if (submitted) return;
      var total = totalQuestions(), answered = countAnswered();
      if (answered < total && !window.confirm('Bạn mới trả lời ' + answered + ' trên ' + total + ' câu. Câu bỏ trống sẽ tính là sai. Nộp bài ngay?')) return;
      submitPractice();
    });
    var retry = $('eng-retry-wrong');
    if (retry) { retry.hidden = true; retry.addEventListener('click', retryWrong); }
    if (!totalQuestions() && submit) submit.disabled = true;
  }

  /* ---------- bottom navigation ---------- */
  function navLink(cls, href, dayLabel, title) {
    return '<a class="nav-link ' + cls + '" href="' + href + '">' +
      '<span class="nav-day">' + esc(dayLabel) + '</span>' +
      '<span class="nav-title">' + esc(title) + '</span></a>';
  }
  function renderNav() {
    var nav = $('lesson-nav');
    if (!nav) return;
    var prevD = DAYS[D.day - 2], nextD = DAYS[D.day];
    var prev = D.day > 1 && prevD
      ? navLink('nav-prev', 'lesson.html?day=' + (D.day - 1), 'Day ' + pad2(D.day - 1), prevD.title)
      : navLink('nav-prev', 'index.html', 'Lộ trình', 'Về trang chủ');
    var next = D.day < TOTAL_DAYS && nextD
      ? navLink('nav-next', 'lesson.html?day=' + (D.day + 1), 'Day ' + pad2(D.day + 1), nextD.title)
      : navLink('nav-next', 'index.html', 'Hoàn thành', 'Về lộ trình 180 ngày');
    var home = navLink('nav-home', 'index.html', 'Lộ trình', '180 ngày từ A1 đến B2');
    nav.innerHTML = prev + home + next;
  }

  /* ---------- init ---------- */
  function init() {
    initTheme();
    var day = parseDay();
    D = DAYS.filter(function (d) { return d.day === day; })[0] || DAYS[day - 1];
    if (!D) { setText('lesson-title', 'Không tìm thấy dữ liệu bài học.'); return; }
    saveStr(KEYS.lastDay, String(D.day));
    hasDialogue = !!(D.dialogue && D.dialogue.lines && D.dialogue.lines.length);

    renderHeader();
    initTabs();
    initVocab();
    renderGrammar();
    renderDialogue();
    initPractice();
    renderNav();

    window.addEventListener('pagehide', stopDialogue);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') { stopDialogue(); syncNow(); }
    });
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register('sw.js').then(function (r) { if (r && r.update) r.update(); }).catch(function () { });
      if (navigator.serviceWorker.getRegistrations) {
        navigator.serviceWorker.getRegistrations().then(function (regs) {
          regs.forEach(function (r) { if (r && r.update) r.update(); });
        }).catch(function () { });
      }
    }
  }

  window.EngLesson = { normalizeAnswer: normalizeAnswer, textMatches: textMatches, sentenceWithInput: sentenceWithInput, countBlanks: countBlanks };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
