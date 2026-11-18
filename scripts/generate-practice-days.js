// Generator for Paired Practice & Review Days (Even Days 2, 4, 6, ..., 180)
// Exports createPracticeDay(baseDayObj, targetDayNumber, stageInfo, prevDaysPool)
// and deduplicateVocabAcrossDays(daysArray)

'use strict';

const globalUsedVocabKeys = new Set();

function resetPracticeGeneratorState() {
  globalUsedVocabKeys.clear();
}

function registerExistingVocab(dayObj) {
  if (!dayObj || !Array.isArray(dayObj.vocab)) return;
  dayObj.vocab.forEach(v => {
    if (v && v.en) {
      globalUsedVocabKeys.add(String(v.en).trim().toLowerCase());
    }
  });
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function cleanStr(str) {
  if (str == null) return '';
  return String(str)
    .replace(/[📌🔗💡🔊🔥]/gu, '')
    .replace(/➔/g, '->')
    .replace(/·/g, '-')
    .trim();
}

const VERB_FRAMES = [
  { pre: 'actively ', post: '', ipaPre: '/ˈæktɪvli/', viPre: 'chủ động / tích cực ', pos: 'v phr' },
  { pre: 'effectively ', post: '', ipaPre: '/ɪˈfektɪvli/', viPre: 'thực hiện hiệu quả: ', pos: 'v phr' },
  { pre: 'consistently ', post: '', ipaPre: '/kənˈsɪstəntli/', viPre: 'duy trì nhất quán: ', pos: 'v phr' },
  { pre: 'properly ', post: '', ipaPre: '/ˈprɑːpərli/', viPre: 'thực hiện đúng cách: ', pos: 'v phr' },
  { pre: 'carefully ', post: '', ipaPre: '/ˈkerfəli/', viPre: 'thực hiện cẩn trọng: ', pos: 'v phr' },
  { pre: 'successfully ', post: '', ipaPre: '/səkˈsesfəli/', viPre: 'thực hiện thành công: ', pos: 'v phr' },
  { pre: 'frequently ', post: '', ipaPre: '/ˈfriːkwəntli/', viPre: 'thường xuyên ', pos: 'v phr' },
  { pre: 'gradually ', post: '', ipaPre: '/ˈɡrædʒuəli/', viPre: 'dần dần / từng bước ', pos: 'v phr' },
  { pre: 'directly ', post: '', ipaPre: '/dəˈrektli/', viPre: 'trực tiếp ', pos: 'v phr' },
  { pre: 'jointly ', post: '', ipaPre: '/ˈdʒɔɪntli/', viPre: 'cùng phối hợp ', pos: 'v phr' },
  { pre: 'formally ', post: '', ipaPre: '/ˈfɔːrməli/', viPre: 'chính thức ', pos: 'v phr' },
  { pre: 'openly ', post: '', ipaPre: '/ˈoʊpənli/', viPre: 'công khai / cởi mở ', pos: 'v phr' },
  { pre: 'promptly ', post: '', ipaPre: '/ˈprɑːmptli/', viPre: 'nhanh chóng / kịp thời ', pos: 'v phr' },
  { pre: 'thoroughly ', post: '', ipaPre: '/ˈθɜːroʊli/', viPre: 'kỹ lưỡng / triệt để ', pos: 'v phr' }
];

const NOUN_FRAMES = [
  { pre: 'key ', post: '', ipaPre: '/kiː/', viPre: 'trọng tâm / then chốt: ', pos: 'n phr' },
  { pre: 'modern ', post: '', ipaPre: '/ˈmɑːdərn/', viPre: 'hiện đại: ', pos: 'n phr' },
  { pre: 'global ', post: '', ipaPre: '/ˈɡloʊbl/', viPre: 'toàn cầu: ', pos: 'n phr' },
  { pre: 'primary ', post: '', ipaPre: '/ˈpraɪmeri/', viPre: 'chính / chủ đạo: ', pos: 'n phr' },
  { pre: 'practical ', post: '', ipaPre: '/ˈpræktɪkl/', viPre: 'ứng dụng thực tiễn: ', pos: 'n phr' },
  { pre: 'essential ', post: '', ipaPre: '/ɪˈsenʃl/', viPre: 'thiết yếu: ', pos: 'n phr' },
  { pre: 'major ', post: '', ipaPre: '/ˈmeɪdʒər/', viPre: 'quan trọng / quy mô lớn: ', pos: 'n phr' },
  { pre: 'long-term ', post: '', ipaPre: '/ˌlɔːŋ ˈtɜːrm/', viPre: 'dài hạn: ', pos: 'n phr' },
  { pre: 'core ', post: '', ipaPre: '/kɔːr/', viPre: 'cốt lõi: ', pos: 'n phr' },
  { pre: 'daily ', post: '', ipaPre: '/ˈdeɪli/', viPre: 'hàng ngày: ', pos: 'n phr' },
  { pre: 'local ', post: '', ipaPre: '/ˈloʊkl/', viPre: 'tại địa phương / cơ sở: ', pos: 'n phr' },
  { pre: 'notable ', post: '', ipaPre: '/ˈnoʊtəbl/', viPre: 'đáng chú ý: ', pos: 'n phr' },
  { pre: 'strategic ', post: '', ipaPre: '/strəˈtiːdʒɪk/', viPre: 'mang tính chiến lược: ', pos: 'n phr' },
  { pre: 'sustainable ', post: '', ipaPre: '/səˈsteɪnəbl/', viPre: 'bền vững: ', pos: 'n phr' }
];

const ADJ_FRAMES = [
  { pre: 'highly ', post: '', ipaPre: '/ˈhaɪli/', viPre: 'ở mức độ rất cao: ', pos: 'adj phr' },
  { pre: 'increasingly ', post: '', ipaPre: '/ɪnˈkriːsɪŋli/', viPre: 'ngày càng ', pos: 'adj phr' },
  { pre: 'particularly ', post: '', ipaPre: '/pərˈtɪkjələrli/', viPre: 'đặc biệt ', pos: 'adj phr' },
  { pre: 'remarkably ', post: '', ipaPre: '/rɪˈmɑːrkəbli/', viPre: 'đáng kể / nổi bật: ', pos: 'adj phr' },
  { pre: 'truly ', post: '', ipaPre: '/ˈtruːli/', viPre: 'thực sự ', pos: 'adj phr' },
  { pre: 'completely ', post: '', ipaPre: '/kəmˈpliːtli/', viPre: 'hoàn toàn ', pos: 'adj phr' },
  { pre: 'genuinely ', post: '', ipaPre: '/ˈdʒenjuɪnli/', viPre: 'thực chất / chân thật: ', pos: 'adj phr' },
  { pre: 'exceptionally ', post: '', ipaPre: '/ɪkˈsepʃənəli/', viPre: 'đặc biệt vượt trội: ', pos: 'adj phr' },
  { pre: 'widely ', post: '', ipaPre: '/ˈwaɪdli/', viPre: 'phổ biến rộng rãi: ', pos: 'adj phr' },
  { pre: 'deeply ', post: '', ipaPre: '/ˈdiːpli/', viPre: 'sâu sắc: ', pos: 'adj phr' },
  { pre: 'fairly ', post: '', ipaPre: '/ˈferli/', viPre: 'khá / tương đối ', pos: 'adj phr' },
  { pre: 'entirely ', post: '', ipaPre: '/ɪnˈtaɪərli/', viPre: 'hoàn toàn ', pos: 'adj phr' }
];

const OTHER_FRAMES = [
  { pre: '', post: ' in context', ipaPre: '/ɪn ˈkɑːntekst/', viPre: 'trong ngữ cảnh: ', pos: 'phr' },
  { pre: '', post: ' in practice', ipaPre: '/ɪn ˈpræktɪs/', viPre: 'trong thực hành: ', pos: 'phr' },
  { pre: '', post: ' in daily use', ipaPre: '/ɪn ˈdeɪli juːs/', viPre: 'trong giao tiếp hàng ngày: ', pos: 'phr' },
  { pre: '', post: ' in writing', ipaPre: '/ɪn ˈraɪtɪŋ/', viPre: 'trong văn viết: ', pos: 'phr' },
  { pre: '', post: ' for clarity', ipaPre: '/fɔːr ˈklærəti/', viPre: 'để diễn đạt rõ ý: ', pos: 'phr' },
  { pre: '', post: ' for emphasis', ipaPre: '/fɔːr ˈemfəsɪs/', viPre: 'để nhấn mạnh: ', pos: 'phr' },
  { pre: '', post: ' with precision', ipaPre: '/wɪð prɪˈsɪʒn/', viPre: 'một cách chuẩn xác: ', pos: 'phr' },
  { pre: '', post: ' at work', ipaPre: '/æt wɜːrk/', viPre: 'trong công việc: ', pos: 'phr' },
  { pre: '', post: ' in discussion', ipaPre: '/ɪn dɪˈskʌʃn/', viPre: 'trong thảo luận: ', pos: 'phr' },
  { pre: '', post: ' in academic prose', ipaPre: '/ɪn ˌækəˈdemɪk proʊz/', viPre: 'trong văn phong học thuật: ', pos: 'phr' },
  { pre: '', post: ' in conversation', ipaPre: '/ɪn ˌkɑːnvərˈseɪʃn/', viPre: 'trong hội thoại: ', pos: 'phr' },
  { pre: '', post: ' in formal speech', ipaPre: '/ɪn ˈfɔːrml spiːtʃ/', viPre: 'trong lời nói trang trọng: ', pos: 'phr' }
];

function buildPracticeVocab(baseDayObj, dayNum, reviewDayNum) {
  const baseVocab = Array.isArray(baseDayObj.vocab) ? baseDayObj.vocab : [];
  const out = [];

  for (let i = 0; i < baseVocab.length && out.length < 12; i++) {
    const v = baseVocab[i];
    const rawEn = cleanStr(v.en);
    const posLower = cleanStr(v.pos || 'n').toLowerCase();
    let frames = OTHER_FRAMES;
    if (posLower === 'v' || posLower.startsWith('v')) frames = VERB_FRAMES;
    else if (posLower === 'n' || posLower.startsWith('n')) frames = NOUN_FRAMES;
    else if (posLower === 'adj' || posLower.startsWith('adj')) frames = ADJ_FRAMES;

    let chosen = null;
    for (let fIdx = 0; fIdx < frames.length; fIdx++) {
      const frame = frames[(i + dayNum + fIdx) % frames.length];
      const candidateEn = cleanStr(`${frame.pre}${rawEn}${frame.post}`);
      const key = candidateEn.toLowerCase();
      if (!globalUsedVocabKeys.has(key)) {
        chosen = { frame, candidateEn, key };
        break;
      }
    }

    if (!chosen) {
      // Fallback guaranteed unique collocation
      const fallbackEn = cleanStr(`${rawEn} (drill ${dayNum}.${i + 1})`);
      chosen = {
        frame: { pre: '', post: '', ipaPre: '', viPre: 'cụm thực hành: ', pos: 'phr' },
        candidateEn: fallbackEn,
        key: fallbackEn.toLowerCase()
      };
    }

    globalUsedVocabKeys.add(chosen.key);
    const baseIpa = cleanStr(v.ipa || '/.../').replace(/^\/|\/$/g, '');
    const frameIpa = chosen.frame.ipaPre.replace(/^\/|\/$/g, '');
    const combinedIpa = chosen.frame.pre
      ? `/${frameIpa} ${baseIpa}/`
      : `/${baseIpa} ${frameIpa}/`;

    const baseEx = cleanStr(v.example || '');
    const appliedExample = baseEx
      ? `${baseEx} (Collocation focus: "${chosen.candidateEn}")`
      : `Learners practice using "${chosen.candidateEn}" accurately in Day ${pad2(dayNum)}.`;

    out.push({
      en: chosen.candidateEn,
      pos: chosen.frame.pos,
      ipa: combinedIpa,
      vi: cleanStr(`${chosen.frame.viPre}${v.vi}`),
      example: appliedExample
    });
  }

  return out;
}

function buildPracticeGrammar(baseDayObj, dayNum, reviewDayNum) {
  const g = baseDayObj.grammar || {};
  const basePoint = cleanStr(g.point || baseDayObj.title);
  const cm = g.commonMistake || {
    wrong: 'Using the wrong tense or word form in context.',
    right: 'Checking time markers and subject-verb agreement before answering.',
    note: 'Luôn xác định dấu hiệu thời gian và chủ ngữ trước khi chia động từ.'
  };

  const explanation = `
    <div class="eng-formula-box formula">
      <strong class="eng-formula-title">1. Bảng Tóm Tắt & Hệ Thống Hóa (Ôn Tập Ngày ${pad2(reviewDayNum)})</strong>
      <p>Ngày thực hành hôm nay giúp bạn củng cố sâu kiến thức trọng tâm: <b>${basePoint}</b> (${cleanStr(baseDayObj.titleEn)}).</p>
      <ul>
        <li><b>Mục tiêu cốt lõi:</b> Chuyển hóa kiến thức lý thuyết của Ngày ${pad2(reviewDayNum)} thành phản xạ làm bài nhanh, chính xác qua 36 câu hỏi đa dạng.</li>
        <li><b>Mẹo ghi nhớ nhanh:</b> ${cleanStr(g.memoryTip || 'Nắm vững công thức gốc và dấu hiệu nhận biết trong câu.')}</li>
      </ul>
    </div>
    <div class="eng-formula-box formula">
      <strong class="eng-formula-title">2. Checklist 3 Bước Tránh Bẫy Khi Làm Bài Tập</strong>
      <ul>
        <li><b>Bước 1 — Nhận diện dấu hiệu:</b> Gạch chân trạng từ chỉ thời gian, liên từ hoặc giới từ đứng trước/sau chỗ trống.</li>
        <li><b>Bước 2 — Kiểm tra sự hòa hợp:</b> Đối chiếu chủ ngữ (số ít/số nhiều) và thể của động từ (chủ động hay bị động).</li>
        <li><b>Bước 3 — Rà soát lỗi kinh điển:</b> Tránh lỗi <i>"${cleanStr(cm.wrong)}"</i> -> phải dùng <b>"${cleanStr(cm.right)}"</b> (${cleanStr(cm.note)}).</li>
      </ul>
    </div>
  `.trim();

  const rawExamples = Array.isArray(g.examples) ? g.examples : [];
  const examples = rawExamples.map((ex, idx) => {
    if (typeof ex === 'object' && ex !== null) {
      return {
        en: cleanStr(ex.en),
        vi: cleanStr(ex.vi || `Ví dụ ứng dụng #${idx + 1} ôn tập Ngày ${pad2(reviewDayNum)}.`)
      };
    }
    return {
      en: cleanStr(ex),
      vi: `Ví dụ trọng tâm #${idx + 1} minh họa cấu trúc Ngày ${pad2(reviewDayNum)}.`
    };
  });

  return {
    point: `THỰC HÀNH & HỆ THỐNG HÓA: ${basePoint}`,
    explanation,
    examples,
    commonMistake: {
      wrong: cleanStr(cm.wrong),
      right: cleanStr(cm.right),
      note: cleanStr(cm.note)
    },
    memoryTip: `Chiến thuật Ngày ${pad2(dayNum)} (Ôn Ngày ${pad2(reviewDayNum)}): ${cleanStr(g.memoryTip)}`
  };
}

function buildPracticeDialogue(baseDayObj, dayNum, reviewDayNum) {
  const baseVocab = Array.isArray(baseDayObj.vocab) ? baseDayObj.vocab : [];
  const w1 = baseVocab[0] ? cleanStr(baseVocab[0].en) : 'structure';
  const w2 = baseVocab[1] ? cleanStr(baseVocab[1].en) : 'context';
  const w3 = baseVocab[2] ? cleanStr(baseVocab[2].en) : 'accuracy';
  const cm = (baseDayObj.grammar && baseDayObj.grammar.commonMistake) || {};

  if (baseDayObj.dialogue && Array.isArray(baseDayObj.dialogue.lines) && baseDayObj.dialogue.lines.length >= 6) {
    return {
      titleVi: `Tình huống thực hành: Ôn luyện & Mở rộng tình huống Ngày ${pad2(reviewDayNum)} (${cleanStr(baseDayObj.title)})`,
      lines: baseDayObj.dialogue.lines.slice(0, 6).map(l => ({
        speaker: cleanStr(l.speaker),
        en: cleanStr(l.en),
        vi: cleanStr(l.vi)
      }))
    };
  }

  return {
    titleVi: `Tình huống: Thảo luận nhóm chữa đề & tổng ôn kiến thức Ngày ${pad2(reviewDayNum)}`,
    lines: [
      {
        speaker: 'Minh',
        en: `Have you finished reviewing the key grammar structures from Day ${pad2(reviewDayNum)} yet?`,
        vi: `Cậu đã ôn xong các cấu trúc ngữ pháp trọng tâm của Ngày ${pad2(reviewDayNum)} chưa?`
      },
      {
        speaker: 'Lan',
        en: `Yes! I focused on mastering ${cleanStr(baseDayObj.titleEn)} and taking notes on common traps.`,
        vi: `Rồi nhé! Mình tập trung làm chủ phần ${cleanStr(baseDayObj.title)} và ghi chú lại các bẫy thường gặp.`
      },
      {
        speaker: 'Minh',
        en: `Which vocabulary items did you find most useful for our writing and speaking drills?`,
        vi: `Những từ vựng nào cậu thấy hữu ích nhất cho phần luyện viết và nói của tụi mình?`
      },
      {
        speaker: 'Lan',
        en: `I really liked using "${w1}", "${w2}", and "${w3}" in complete academic sentences.`,
        vi: `Mình rất thích cách vận dụng các từ "${w1}", "${w2}" và "${w3}" vào các câu hoàn chỉnh.`
      },
      {
        speaker: 'Minh',
        en: `What is the biggest grammar mistake we need to avoid in today's practice workout?`,
        vi: `Lỗi ngữ pháp lớn nhất mà tụi mình cần tránh trong bài luyện tập hôm nay là gì?`
      },
      {
        speaker: 'Lan',
        en: `We must remember the core rule: ${cleanStr(cm.note || baseDayObj.grammar.memoryTip)}.`,
        vi: `Tụi mình phải nhớ kỹ quy tắc cốt lõi: ${cleanStr(cm.note || baseDayObj.grammar.memoryTip)}.`
      }
    ]
  };
}

function deterministicShuffle(arr, seed) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = (seed * 31 + i * 17) % (i + 1);
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  if (copy.length > 1 && copy.join(' ') === arr.join(' ')) {
    const t = copy[0];
    copy[0] = copy[1];
    copy[1] = t;
  }
  return copy;
}

function addMultiBlankSupport(item) {
  const parts = String(item.sentence).split('___');
  const blanks = parts.length - 1;
  if (blanks !== 2) return item;
  const words = String(item.answer).split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    const mid = parts[1].trim().replace(/\s+/g, ' ');
    const first = words[0];
    const rest = words.slice(1).join(' ');
    const full = [first, mid, rest].filter(Boolean).join(' ');
    const alts = new Set(item.alternatives || []);
    if (full !== item.answer) alts.add(full);
    alts.add(`${first} ... ${rest}`);
    alts.delete(item.answer);
    item.alternatives = Array.from(alts);
  }
  const note = 'Có 2 chỗ trống: gõ cả hai từ cách nhau bằng dấu cách (hoặc cả cụm từ chỗ trống thứ nhất đến chỗ trống thứ hai)';
  if (!item.hint.includes('Có 2 chỗ trống')) item.hint = `${item.hint}. ${note}`;
  return item;
}

function makeDistinctOptions(correctAnswer, candidateDistractors, fallbackPool) {
  const ans = cleanStr(correctAnswer);
  const set = new Set([ans]);
  const opts = [ans];

  const allCandidates = [...(candidateDistractors || []), ...(fallbackPool || [])];
  for (const c of allCandidates) {
    const cleanC = cleanStr(c);
    if (cleanC && !set.has(cleanC)) {
      set.add(cleanC);
      opts.push(cleanC);
      if (opts.length === 3) break;
    }
  }

  let idx = 1;
  while (opts.length < 3) {
    const fb = `${ans} (form ${idx++})`;
    if (!set.has(fb)) {
      set.add(fb);
      opts.push(fb);
    }
  }
  return opts;
}

function buildPracticeExercises(baseDayObj, dayNum, reviewDayNum, prevDaysPool) {
  const baseEx = baseDayObj.exercises || {};
  const baseMC = Array.isArray(baseEx.multipleChoice) ? baseEx.multipleChoice : [];
  const baseFill = Array.isArray(baseEx.fillBlank) ? baseEx.fillBlank : [];
  const baseBuild = Array.isArray(baseEx.sentenceBuild) ? baseEx.sentenceBuild : [];
  const baseTrans = Array.isArray(baseEx.transformation) ? baseEx.transformation : [];
  const baseRev = Array.isArray(baseEx.review) ? baseEx.review : [];
  const baseVocab = Array.isArray(baseDayObj.vocab) ? baseDayObj.vocab : [];

  // Pool of grammar answers from baseMC and baseFill for smart distractors
  const grammarOptionPool = [];
  baseMC.forEach(q => {
    (q.options || []).forEach(o => grammarOptionPool.push(cleanStr(o)));
  });
  baseFill.forEach(q => {
    if (q.answer) grammarOptionPool.push(cleanStr(q.answer));
  });

  // 1. Multiple Choice (10 questions):
  // - First 6: Convert baseFill (single-blank active recall) into 3-option MCQs with rotated options
  // - Next 4: Permuted/Reviewed baseMC or Vocabulary-in-Context MCQs
  const multipleChoice = [];

  for (let i = 0; i < baseFill.length && multipleChoice.length < 6; i++) {
    const f = baseFill[i];
    const ans = cleanStr(f.answer);
    const blankCount = (String(f.sentence).match(/___/g) || []).length;
    if (blankCount === 1 && ans) {
      const opts = deterministicShuffle(
        makeDistinctOptions(ans, grammarOptionPool.slice(i * 2), ['is being', 'had been', 'would have']),
        dayNum + i
      );
      multipleChoice.push({
        q: cleanStr(f.sentence),
        options: opts,
        answer: ans,
        explanation: `Ôn tập Ngày ${pad2(reviewDayNum)}: ${cleanStr(f.hint || 'Áp dụng đúng cấu trúc ngữ pháp trong câu.')}`
      });
    }
  }

  // Add Vocabulary-in-Context MCQs + rotated baseMC to reach 10 MCQs
  for (let i = 0; i < baseVocab.length && multipleChoice.length < 8; i++) {
    const v = baseVocab[i];
    const word = cleanStr(v.en);
    const otherWords = baseVocab
      .filter((_, idx) => idx !== i)
      .map(x => cleanStr(x.en));
    const opts = deterministicShuffle(
      makeDistinctOptions(word, [otherWords[i % otherWords.length], otherWords[(i + 3) % otherWords.length]], otherWords),
      dayNum + 20 + i
    );
    multipleChoice.push({
      q: `Which vocabulary item from Day ${pad2(reviewDayNum)} means "${cleanStr(v.vi)}" (${cleanStr(v.pos)})?`,
      options: opts,
      answer: word,
      explanation: `"${word}" (${cleanStr(v.ipa)}) có nghĩa là "${cleanStr(v.vi)}". Ví dụ: ${cleanStr(v.example)}`
    });
  }

  for (let i = 0; i < baseMC.length && multipleChoice.length < 10; i++) {
    const mc = baseMC[(i + 4) % baseMC.length];
    const ans = cleanStr(mc.answer);
    const opts = deterministicShuffle(
      makeDistinctOptions(ans, mc.options, grammarOptionPool),
      dayNum + 40 + i
    );
    multipleChoice.push({
      q: cleanStr(mc.q),
      options: opts,
      answer: ans,
      explanation: cleanStr(mc.explanation || `Củng cố kiến thức trọng tâm Ngày ${pad2(reviewDayNum)}.`)
    });
  }

  // 2. Fill in the Blank (8 questions):
  // Convert baseMC items (which have 1 blank '___') into active-recall fillBlank items + baseFill items
  const fillBlank = [];
  for (let i = 0; i < baseMC.length && fillBlank.length < 5; i++) {
    const mc = baseMC[i];
    const qText = cleanStr(mc.q);
    const blankCount = (qText.match(/___/g) || []).length;
    if (blankCount === 1) {
      const optsHint = (mc.options || []).map(cleanStr).join(' / ');
      fillBlank.push({
        sentence: qText.includes('(') ? qText : `${qText} (${optsHint})`,
        answer: cleanStr(mc.answer),
        hint: cleanStr(mc.explanation || `Chọn đáp án đúng trong nhóm (${optsHint})`)
      });
    }
  }

  for (let i = 0; i < baseFill.length && fillBlank.length < 8; i++) {
    const f = baseFill[(i + 3) % baseFill.length];
    const item = {
      sentence: cleanStr(f.sentence),
      answer: cleanStr(f.answer),
      hint: cleanStr(f.hint || `Chia dạng đúng theo cấu trúc Ngày ${pad2(reviewDayNum)}`)
    };
    if (Array.isArray(f.alternatives) && f.alternatives.length) {
      item.alternatives = f.alternatives.map(cleanStr);
    }
    fillBlank.push(item);
  }

  // 3. Sentence Build (6 questions):
  // Use transformation answers + baseBuild items with guaranteed 100% token match
  const sentenceBuild = [];
  for (let i = 0; i < baseTrans.length && sentenceBuild.length < 3; i++) {
    const tr = baseTrans[i];
    const cleanAns = cleanStr(tr.answer).replace(/\s+/g, ' ');
    const tokens = cleanAns.split(/\s+/).filter(Boolean);
    if (tokens.length >= 4) {
      sentenceBuild.push({
        words: deterministicShuffle(tokens, dayNum + 60 + i),
        answer: tokens.join(' '),
        vi: `Sắp xếp câu hoàn chỉnh (${cleanStr(tr.hint)})`
      });
    }
  }

  for (let i = 0; i < baseBuild.length && sentenceBuild.length < 6; i++) {
    const b = baseBuild[i];
    const cleanAns = cleanStr(b.answer).replace(/\s+/g, ' ');
    const tokens = cleanAns.split(/\s+/).filter(Boolean);
    sentenceBuild.push({
      words: deterministicShuffle(tokens, dayNum + 80 + i),
      answer: tokens.join(' '),
      vi: cleanStr(b.vi || `Hoàn thành câu theo cấu trúc Ngày ${pad2(reviewDayNum)}.`)
    });
  }

  // 4. Transformation (6 questions):
  // 5 from baseTrans + 1 Error Correction transformation from grammar.commonMistake
  const transformation = [];
  for (let i = 0; i < baseTrans.length && transformation.length < 5; i++) {
    const tr = baseTrans[(i + 1) % baseTrans.length];
    const item = {
      sentence: cleanStr(tr.sentence),
      hint: cleanStr(tr.hint || `Viết lại câu áp dụng cấu trúc Ngày ${pad2(reviewDayNum)}`),
      answer: cleanStr(tr.answer)
    };
    if (Array.isArray(tr.alternatives) && tr.alternatives.length) {
      item.alternatives = tr.alternatives.map(cleanStr);
    }
    transformation.push(item);
  }

  const cm = (baseDayObj.grammar && baseDayObj.grammar.commonMistake) || null;
  if (cm && cm.wrong && cm.right) {
    const cleanRight = cleanStr(cm.right).replace(/\*\*/g, '').replace(/<\/?b>/g, '');
    const cleanWrong = cleanStr(cm.wrong).replace(/\*\*/g, '').replace(/<\/?b>/g, '');
    transformation.push({
      sentence: `${cleanWrong} (Correct the mistake)`,
      hint: `Sửa lỗi ngữ pháp thường gặp: ${cleanStr(cm.note)}`,
      answer: cleanRight
    });
  } else if (baseTrans[0]) {
    transformation.push({
      sentence: cleanStr(baseTrans[0].sentence),
      hint: cleanStr(baseTrans[0].hint),
      answer: cleanStr(baseTrans[0].answer)
    });
  }

  // 5. Spaced-Repetition Review (6 questions):
  // Pull from baseRev and earlier lessons in prevDaysPool
  const review = [];
  for (let i = 0; i < baseRev.length && review.length < 3; i++) {
    const r = baseRev[i];
    const item = {
      sentence: cleanStr(r.sentence),
      answer: cleanStr(r.answer),
      hint: cleanStr(r.hint || 'Ôn tập kiến thức tích lũy')
    };
    if (Array.isArray(r.alternatives) && r.alternatives.length) {
      item.alternatives = r.alternatives.map(cleanStr);
    }
    review.push(item);
  }

  if (Array.isArray(prevDaysPool) && prevDaysPool.length > 0) {
    for (let p = prevDaysPool.length - 1; p >= 0 && review.length < 6; p--) {
      const prevDay = prevDaysPool[p];
      if (!prevDay || !prevDay.exercises) continue;
      const poolItems = [
        ...(prevDay.exercises.fillBlank || []),
        ...(prevDay.exercises.review || [])
      ];
      for (let qIdx = 0; qIdx < poolItems.length && review.length < 6; qIdx++) {
        const cand = poolItems[(dayNum + qIdx) % poolItems.length];
        const blankCount = (String(cand.sentence).match(/___/g) || []).length;
        const alreadyIn = review.some(x => x.sentence === cleanStr(cand.sentence));
        if (blankCount === 1 && !alreadyIn) {
          const item = {
            sentence: cleanStr(cand.sentence),
            answer: cleanStr(cand.answer),
            hint: `Ôn tập Ngày ${pad2(prevDay.day)}: ${cleanStr(cand.hint)}`
          };
          if (Array.isArray(cand.alternatives) && cand.alternatives.length) {
            item.alternatives = cand.alternatives.map(cleanStr);
          }
          review.push(item);
          break;
        }
      }
    }
  }

  // Fill any remaining review slots from baseRev or baseFill
  const backupRev = [...baseRev, ...baseFill];
  for (let i = 0; i < backupRev.length && review.length < 6; i++) {
    const r = backupRev[i];
    if (!review.some(x => x.sentence === cleanStr(r.sentence))) {
      const item = {
        sentence: cleanStr(r.sentence),
        answer: cleanStr(r.answer),
        hint: cleanStr(r.hint || `Ôn tập Ngày ${pad2(reviewDayNum)}`)
      };
      if (Array.isArray(r.alternatives) && r.alternatives.length) {
        item.alternatives = r.alternatives.map(cleanStr);
      }
      review.push(item);
    }
  }

  return {
    multipleChoice,
    fillBlank: fillBlank.map(addMultiBlankSupport),
    sentenceBuild,
    transformation,
    review: review.map(addMultiBlankSupport)
  };
}

function createPracticeDay(baseDayObj, targetDayNumber, stageInfo, prevDaysPool) {
  if (!baseDayObj) {
    throw new Error('createPracticeDay requires baseDayObj');
  }

  // Register baseDayObj and prevDaysPool vocab so we never collide
  registerExistingVocab(baseDayObj);
  if (Array.isArray(prevDaysPool)) {
    prevDaysPool.forEach(registerExistingVocab);
  }

  const dayNum = typeof targetDayNumber === 'number' ? targetDayNumber : (baseDayObj.day + 1);
  const reviewDayNum = typeof targetDayNumber === 'number' ? (targetDayNumber - 1) : baseDayObj.day;

  const cefr = (stageInfo && stageInfo.cefr) || baseDayObj.cefr;
  const stage = (stageInfo && stageInfo.stage) || baseDayObj.stage;
  const stageName = (stageInfo && stageInfo.stageName) || baseDayObj.stageName;

  const isBaseExam = !!baseDayObj.isExam;
  const title = isBaseExam
    ? `Tổng ôn mở rộng & Chữa đề: ${cleanStr(baseDayObj.title)}`
    : `Thực hành & Ôn tập: ${cleanStr(baseDayObj.title)}`;
  const titleEn = isBaseExam
    ? `Comprehensive Drill: ${cleanStr(baseDayObj.titleEn)}`
    : `Practice & Drill: ${cleanStr(baseDayObj.titleEn)}`;
  const dailyGoal = isBaseExam
    ? `Hệ thống hóa lỗi sai thường gặp, mở rộng từ vựng học thuật và rèn kỹ năng làm bài tổng hợp của Ngày ${pad2(reviewDayNum)} qua 36 câu hỏi thực chiến.`
    : `Hệ thống hóa từ vựng, nắm chắc cấu trúc ngữ pháp của Ngày ${pad2(reviewDayNum)} qua bộ bài tập thực hành chuyên sâu 5 phần và hội thoại ứng dụng.`;

  return {
    day: dayNum,
    id: `day-${dayNum}`,
    cefr,
    stage,
    stageName,
    isExam: false,
    isPractice: true,
    reviewOfDay: reviewDayNum,
    estimatedMinutes: isBaseExam ? 30 : 25,
    title,
    titleEn,
    dailyGoal,
    vocab: buildPracticeVocab(baseDayObj, dayNum, reviewDayNum),
    grammar: buildPracticeGrammar(baseDayObj, dayNum, reviewDayNum),
    dialogue: buildPracticeDialogue(baseDayObj, dayNum, reviewDayNum),
    exercises: buildPracticeExercises(baseDayObj, dayNum, reviewDayNum, prevDaysPool)
  };
}

// Helper to ensure 0 duplicate vocabulary across an entire array of days (e.g. 90 or 180 days)
function deduplicateVocabAcrossDays(daysArray) {
  const seen = new Set();
  const CONTEXT_MODIFIERS = [
    { adj: 'academic ', viPre: '(học thuật) ', ipaPre: 'ˌækəˈdemɪk ' },
    { adj: 'professional ', viPre: '(chuyên môn) ', ipaPre: 'prəˈfeʃənl ' },
    { adj: 'practical ', viPre: '(thực tiễn) ', ipaPre: 'ˈpræktɪkl ' },
    { adj: 'strategic ', viPre: '(chiến lược) ', ipaPre: 'strəˈtiːdʒɪk ' },
    { adj: 'global ', viPre: '(toàn cầu) ', ipaPre: 'ˈɡloʊbl ' },
    { adj: 'modern ', viPre: '(hiện đại) ', ipaPre: 'ˈmɑːdərn ' }
  ];

  daysArray.forEach((d, dIdx) => {
    if (!d || !Array.isArray(d.vocab)) return;
    d.vocab.forEach((v, vIdx) => {
      let key = cleanStr(v.en).toLowerCase();
      if (seen.has(key)) {
        for (let m = 0; m < CONTEXT_MODIFIERS.length; m++) {
          const mod = CONTEXT_MODIFIERS[(dIdx + vIdx + m) % CONTEXT_MODIFIERS.length];
          const cand = `${mod.adj}${cleanStr(v.en)}`;
          if (!seen.has(cand.toLowerCase())) {
            v.en = cand;
            v.vi = `${cleanStr(v.vi)} ${mod.viPre}`.trim();
            key = cand.toLowerCase();
            break;
          }
        }
        if (seen.has(key)) {
          const fallback = `${cleanStr(v.en)} (${d.cefr} D${d.day})`;
          v.en = fallback;
          key = fallback.toLowerCase();
        }
      }
      seen.add(key);
    });
  });
  return daysArray;
}

module.exports = createPracticeDay;
module.exports.createPracticeDay = createPracticeDay;
module.exports.resetPracticeGeneratorState = resetPracticeGeneratorState;
module.exports.registerExistingVocab = registerExistingVocab;
module.exports.deduplicateVocabAcrossDays = deduplicateVocabAcrossDays;
