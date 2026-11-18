const fs = require('fs');
const path = require('path');

const extractedS1toS15 = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'extracted-s1-s15.json'), 'utf8')
);
const enrichments = require('./data-s1-s15-enrichments.js');
const days16to23 = require('./data-s16-s23.js');
const days24to30 = require('./data-s24-s30.js');

const STAGES = [
  {
    stage: 1,
    id: 1,
    number: 1,
    cefr: "A1",
    name: "Nền tảng A1 (Foundation)",
    nameEn: "A1 Foundation",
    dayRange: "Days 1–7",
    days: [1, 2, 3, 4, 5, 6, 7],
    description: "Làm chủ 6 thì cốt lõi trong tiếng Anh, động từ chỉ sở thích (V-ing / to V) và cấu trúc so sánh hơn, so sánh nhất."
  },
  {
    stage: 2,
    id: 2,
    number: 2,
    cefr: "A2",
    name: "Xây dựng câu A2 (Building Blocks)",
    nameEn: "A2 Building Blocks",
    dayRange: "Days 8–15",
    days: [8, 9, 10, 11, 12, 13, 14, 15],
    description: "Sử dụng chuẩn xác mạo từ (a/an/the), từ để hỏi, câu hỏi đuôi, câu đơn/ghép/phức, động từ khuyết thiếu và câu điều kiện loại 1 & 2."
  },
  {
    stage: 3,
    id: 3,
    number: 3,
    cefr: "A2+",
    name: "Cầu nối trung cấp A2+ (Intermediate Bridge)",
    nameEn: "A2+ Intermediate Bridge",
    dayRange: "Days 16–23",
    days: [16, 17, 18, 19, 20, 21, 22, 23],
    description: "Chuyển đổi linh hoạt thể bị động (Passive Voice), câu tường thuật (Reported Speech), thì tương lai tiếp diễn, suy đoán và cấu trúc Used to."
  },
  {
    stage: 4,
    id: 4,
    number: 4,
    cefr: "B1",
    name: "Làm chủ B1 (B1 Mastery)",
    nameEn: "B1 Mastery",
    dayRange: "Days 24–30",
    days: [24, 25, 26, 27, 28, 29, 30],
    description: "Vận dụng tự nhiên các cụm động từ (Phrasal Verbs), danh động từ nâng cao, lượng từ, giới từ, câu cảm thán và cấu trúc cầu khiến."
  }
];

function cleanExplanationHtml(html) {
  if (!html) return '';
  return String(html)
    .replace(/class="eng-formula-box"/g, 'class="eng-formula-box formula"')
    .replace(/[📌🔗💡🔊🔥]/gu, '')
    .replace(/➔/g, '->')
    .replace(/·/g, '-')
    .trim();
}

function cleanText(str) {
  if (str == null) return '';
  return String(str)
    .replace(/[📌🔗💡🔊🔥]/gu, '')
    .replace(/➔/g, '->')
    .replace(/·/g, '-')
    .trim();
}

function stageForDay(day) {
  if (day <= 7) return { stage: 1, cefr: "A1", stageName: "A1 Foundation" };
  if (day <= 15) return { stage: 2, cefr: "A2", stageName: "A2 Building Blocks" };
  if (day <= 23) return { stage: 3, cefr: "A2+", stageName: "A2+ Intermediate Bridge" };
  return { stage: 4, cefr: "B1", stageName: "B1 Mastery" };
}

function defaultHintForFill(sentence, answer) {
  const m = /\(([^)]+)\)/.exec(sentence);
  if (m) return `Chia hoặc chọn dạng đúng dựa theo gợi ý (${m[1]})`;
  return `Điền từ/cụm từ phù hợp vào chỗ trống`;
}

function defaultHintForTrans(sentence) {
  const m = /\(([^)]+)\)\s*$/.exec(sentence);
  if (m) return `Viết lại câu sao cho nghĩa không đổi, sử dụng từ gợi ý "${m[1]}"`;
  return `Viết lại câu sao cho nghĩa không đổi`;
}

function enrichFillItem(q, day) {
  const item = {
    sentence: cleanText(q.sentence),
    answer: cleanText(q.answer),
    hint: cleanText(q.hint || defaultHintForFill(q.sentence, q.answer))
  };
  if (q.alternatives) item.alternatives = q.alternatives.map(cleanText);
  // Add smart alternatives for two-part verb answers or zero article
  if (item.answer === 'x') {
    item.alternatives = Array.from(new Set([...(item.alternatives || []), 'no article', 'rỗng', 'none', 'Ø']));
  }
  if (item.answer === 'farther') {
    item.alternatives = Array.from(new Set([...(item.alternatives || []), 'further']));
  }
  if (item.sentence.includes('You ___ (should/mustn\'t) watch TV so close') && item.answer === 'shouldn\'t') {
    item.sentence = "You ___ (shouldn't/have to) watch TV so close to the screen.";
    item.hint = "Lời khuyên không nên làm gì (shouldn't)";
  }
  if (item.answer === 'Are watching') {
    item.alternatives = ['Are they watching'];
  }
  if (item.answer === 'Were studying') {
    item.alternatives = ['Were you studying'];
  }
  if (item.answer === 'Did visit') {
    item.alternatives = ['Did you visit'];
  }
  if (item.answer === 'Will do') {
    item.alternatives = ['Will robots do'];
  }
  if (item.answer === 'Have tried') {
    item.alternatives = ['Have you ever tried', 'Have you tried'];
  }
  if (item.answer === 'Have eaten') {
    item.alternatives = ['Have you ever eaten', 'Have you eaten'];
  }
  if (item.answer === 'Are going') {
    item.alternatives = ['Are you going'];
  }
  if (item.answer === 'are looking') {
    item.alternatives = ['are you looking'];
  }
  if (item.answer === 'were doing') {
    item.alternatives = ['were you doing'];
  }
  if (item.answer === 'have finished' && item.sentence.includes('just')) {
    item.alternatives = ['have just finished'];
  }
  addMultiBlankSupport(item);
  return item;
}

// Questions with 2 blanks ("___ you ___ (look)"): the learner may type just the
// verb words ("are looking") or the full phrase between the blanks ("are you looking").
function addMultiBlankSupport(item) {
  const parts = item.sentence.split('___');
  const blanks = parts.length - 1;
  if (blanks !== 2) return;
  const words = item.answer.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    const mid = parts[1].trim().replace(/\s+/g, ' ');
    const first = words[0];
    const rest = words.slice(1).join(' ');
    const full = [first, mid, rest].filter(Boolean).join(' ');
    const alts = new Set(item.alternatives || []);
    if (full !== item.answer) alts.add(full);
    alts.delete(item.answer);
    item.alternatives = Array.from(alts);
  }
  const note = 'Có 2 chỗ trống: gõ cả hai từ cách nhau bằng dấu cách (hoặc cả cụm từ chỗ trống thứ nhất đến chỗ trống thứ hai)';
  if (!item.hint.includes('Có 2 chỗ trống')) item.hint = `${item.hint}. ${note}`;
}

function enrichTransItem(q, day) {
  let sentence = cleanText(q.sentence);
  let answer = cleanText(q.answer);
  let hint = cleanText(q.hint || defaultHintForTrans(sentence));
  let alternatives = q.alternatives ? q.alternatives.map(cleanText) : [];

  // Fix Day 8 transformation #5 where prompt and answer were identical
  if (day === 8 && sentence === 'Water is essential for life. (x)') {
    sentence = 'The water is essential for all living things. (Water)';
    answer = 'Water is essential for all living things.';
    alternatives = ['Water is essential for life.'];
    hint = 'Bỏ mạo từ The trước danh từ không đếm được chỉ chung (Water)';
  }

  const out = { sentence, hint, answer };
  if (alternatives.length) out.alternatives = alternatives;
  return out;
}

function buildDay1to15(day) {
  const raw = extractedS1toS15['s' + day];
  const st = stageForDay(day);
  const isExam = day % 5 === 0;
  const meta = enrichments.metaByDay[day];

  // Combine original vocab (excluding single dummy "Test" / "Review" on s10/s15 if we have full vocab, or keeping & enriching)
  const baseVocab = (raw.vocab || []).filter(v => v.en !== 'Test' && v.en !== 'Review');
  const extraVocab = enrichments.extraVocabByDay[day] || [];
  const seenVocab = new Set();
  const vocab = [];
  [...baseVocab, ...extraVocab].forEach(v => {
    const key = v.en.trim().toLowerCase();
    if (!seenVocab.has(key)) {
      seenVocab.add(key);
      vocab.push({
        en: cleanText(v.en),
        pos: cleanText(v.pos || 'n'),
        ipa: cleanText(v.ipa || ''),
        vi: cleanText(v.vi),
        example: cleanText(v.example)
      });
    }
  });

  // Grammar
  const rawGrammar = raw.grammar || enrichments.examGrammarByDay[day];
  const grammar = {
    point: cleanText(rawGrammar.point),
    explanation: cleanExplanationHtml(rawGrammar.explanation),
    examples: (rawGrammar.examples || []).map(cleanText),
    commonMistake: {
      wrong: cleanText(rawGrammar.commonMistake.wrong),
      right: cleanText(rawGrammar.commonMistake.right),
      note: cleanText(rawGrammar.commonMistake.note)
    },
    memoryTip: cleanText(rawGrammar.memoryTip)
  };

  // Dialogue: null on exam days (Days 5, 10, 15) as specified in the brief
  const dialogue = isExam
    ? null
    : {
        titleVi: cleanText(raw.dialogue.titleVi),
        lines: (raw.dialogue.lines || []).map(l => ({
          speaker: cleanText(l.speaker),
          en: cleanText(l.en),
          vi: cleanText(l.vi)
        }))
      };

  const rawEx = raw.exercises || {};
  const extraEx = enrichments.examExtraExercisesByDay[day] || {};

  const multipleChoice = (rawEx.multipleChoice || []).map(q => ({
    q: cleanText(q.q),
    options: (q.options || []).map(cleanText),
    answer: cleanText(q.answer)
  }));

  const fillBlank = (rawEx.fillBlank || []).map(q => enrichFillItem(q, day));

  const sentenceBuild = (rawEx.sentenceBuild || []).map(q => ({
    words: (q.words || []).map(cleanText),
    answer: cleanText(q.answer)
  }));

  const rawTrans = (rawEx.transformation && rawEx.transformation.length)
    ? rawEx.transformation
    : (extraEx.transformation || []);
  const transformation = rawTrans.map(q => enrichTransItem(q, day));

  const rawRev = (rawEx.review && rawEx.review.length)
    ? rawEx.review
    : (extraEx.review || []);
  const review = rawRev.map(q => enrichFillItem(q, day));

  return {
    day,
    id: `day-${day}`,
    cefr: st.cefr,
    stage: st.stage,
    stageName: st.stageName,
    isExam,
    estimatedMinutes: isExam ? 30 : 20,
    title: meta.title,
    titleEn: meta.titleEn,
    dailyGoal: meta.dailyGoal,
    vocab,
    grammar,
    dialogue,
    exercises: {
      multipleChoice,
      fillBlank,
      sentenceBuild,
      transformation,
      review
    }
  };
}

function normalizeDay16to30(d) {
  return {
    day: d.day,
    id: d.id,
    cefr: d.cefr,
    stage: d.stage,
    stageName: d.stageName,
    isExam: !!d.isExam,
    estimatedMinutes: d.estimatedMinutes || (d.isExam ? 30 : 25),
    title: cleanText(d.title),
    titleEn: cleanText(d.titleEn),
    dailyGoal: cleanText(d.dailyGoal),
    vocab: d.vocab.map(v => ({
      en: cleanText(v.en),
      pos: cleanText(v.pos),
      ipa: cleanText(v.ipa),
      vi: cleanText(v.vi),
      example: cleanText(v.example)
    })),
    grammar: {
      point: cleanText(d.grammar.point),
      explanation: cleanExplanationHtml(d.grammar.explanation),
      examples: d.grammar.examples.map(cleanText),
      commonMistake: {
        wrong: cleanText(d.grammar.commonMistake.wrong),
        right: cleanText(d.grammar.commonMistake.right),
        note: cleanText(d.grammar.commonMistake.note)
      },
      memoryTip: cleanText(d.grammar.memoryTip)
    },
    dialogue: d.isExam || !d.dialogue
      ? null
      : {
          titleVi: cleanText(d.dialogue.titleVi),
          lines: d.dialogue.lines.map(l => ({
            speaker: cleanText(l.speaker),
            en: cleanText(l.en),
            vi: cleanText(l.vi)
          }))
        },
    exercises: {
      multipleChoice: d.exercises.multipleChoice.map(q => ({
        q: cleanText(q.q),
        options: q.options.map(cleanText),
        answer: cleanText(q.answer)
      })),
      fillBlank: d.exercises.fillBlank.map(q => enrichFillItem(q, d.day)),
      sentenceBuild: d.exercises.sentenceBuild.map(q => ({
        words: q.words.map(cleanText),
        answer: cleanText(q.answer)
      })),
      transformation: d.exercises.transformation.map(q => enrichTransItem(q, d.day)),
      review: d.exercises.review.map(q => enrichFillItem(q, d.day))
    }
  };
}

const days = [];
for (let i = 1; i <= 15; i++) {
  days.push(buildDay1to15(i));
}
days16to23.forEach(d => days.push(normalizeDay16to30(d)));
days24to30.forEach(d => days.push(normalizeDay16to30(d)));

// Fix any typo in Day 24 vocab example
days.forEach(d => {
  d.vocab.forEach(v => {
    v.example = v.example.replace('took offtwenty', 'took off twenty');
  });
});

// Validation
let totalVocab = 0;
let totalQuestions = 0;
days.forEach((d, idx) => {
  const expectedDay = idx + 1;
  if (d.day !== expectedDay) throw new Error(`Day mismatch: expected ${expectedDay}, got ${d.day}`);
  if (d.id !== `day-${expectedDay}`) throw new Error(`ID mismatch on day ${d.day}`);
  if (!d.vocab || d.vocab.length < 12) throw new Error(`Day ${d.day} has too few vocab items: ${d.vocab ? d.vocab.length : 0}`);
  if (!d.grammar || !d.grammar.point || !d.grammar.explanation || !d.grammar.commonMistake || !d.grammar.memoryTip) {
    throw new Error(`Day ${d.day} missing grammar fields`);
  }
  if (d.isExam && d.dialogue !== null) {
    throw new Error(`Exam Day ${d.day} should have dialogue: null`);
  }
  if (!d.isExam && (!d.dialogue || !d.dialogue.lines || d.dialogue.lines.length < 4)) {
    throw new Error(`Regular Day ${d.day} missing dialogue lines`);
  }
  const ex = d.exercises;
  ['multipleChoice', 'fillBlank', 'sentenceBuild', 'transformation', 'review'].forEach(k => {
    if (!Array.isArray(ex[k]) || ex[k].length === 0) {
      throw new Error(`Day ${d.day} missing exercises.${k}`);
    }
  });
  // Verify multipleChoice answers exist in options
  ex.multipleChoice.forEach((q, qi) => {
    if (!q.options.includes(q.answer)) {
      throw new Error(`Day ${d.day} MC #${qi + 1}: answer "${q.answer}" not in options ${JSON.stringify(q.options)}`);
    }
  });
  // Verify sentenceBuild words match answer tokens
  ex.sentenceBuild.forEach((q, qi) => {
    const wSorted = q.words.slice().sort().join('|');
    const aTokens = q.answer.split(/\s+/).filter(Boolean).sort().join('|');
    if (wSorted !== aTokens) {
      throw new Error(`Day ${d.day} Build #${qi + 1}: words [${q.words.join(' ')}] != answer "${q.answer}"`);
    }
  });

  totalVocab += d.vocab.length;
  const qCount =
    ex.multipleChoice.length +
    ex.fillBlank.length +
    ex.sentenceBuild.length +
    ex.transformation.length +
    ex.review.length;
  totalQuestions += qCount;
});

const curriculum = {
  meta: {
    title: "English Learning App — Lộ trình 30 Ngày A1 đến B1",
    subtitle: "30-Day Progressive English Workbook (CEFR A1 to B1)",
    version: "2.0.0",
    totalDays: 30,
    totalStages: 4,
    totalVocab,
    totalQuestions,
    cefrLevels: ["A1", "A2", "A2+", "B1"],
    syncUrl: ""
  },
  stages: STAGES,
  days
};

const outDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const jsOutput = `/* English Learning App — 30-Day A1 to B1 Curriculum Data
 * Generated by scripts/build-curriculum.js
 * Total Days: ${days.length} | Total Vocabulary: ${totalVocab} | Total Exercises: ${totalQuestions}
 */
(function (root) {
  'use strict';

  var ENGLISH_CURRICULUM = ${JSON.stringify(curriculum, null, 2)};

  if (typeof window !== 'undefined') {
    window.ENGLISH_CURRICULUM = ENGLISH_CURRICULUM;
  }
  if (root && typeof root === 'object') {
    root.ENGLISH_CURRICULUM = ENGLISH_CURRICULUM;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENGLISH_CURRICULUM;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
`;

const outFile = path.join(outDir, 'curriculum.js');
fs.writeFileSync(outFile, jsOutput, 'utf8');
console.log(`Successfully built ${outFile}`);
console.log(`Total Days: ${days.length} | Total Vocab: ${totalVocab} | Total Questions: ${totalQuestions}`);
