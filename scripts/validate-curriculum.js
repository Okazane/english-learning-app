// Validation: node scripts/validate-curriculum.js
const c = require('../data/curriculum.js');
let errors = 0;
const err = m => { errors++; console.log('ERROR', m); };

if (c.days.length !== 180) err(`Expected 180 days, got ${c.days.length}`);
if (!Array.isArray(c.stages) || c.stages.length !== 6) err(`Expected 6 stages, got ${c.stages ? c.stages.length : 0}`);

const seen = {};
let nv = 0, nq = 0, nPractice = 0, nExam = 0;

c.days.forEach((d, idx) => {
  const expectedDay = idx + 1;
  if (d.day !== expectedDay) err(`Day order mismatch at idx ${idx}: got ${d.day}`);
  if (d.day % 2 === 0) {
    if (!d.isPractice) err(`Even Day ${d.day} should have isPractice: true`);
    if (d.reviewOfDay !== d.day - 1) err(`Even Day ${d.day} reviewOfDay=${d.reviewOfDay}, expected ${d.day - 1}`);
  } else {
    if (d.isPractice) err(`Odd Day ${d.day} should have isPractice: false`);
  }
  if (d.isPractice) nPractice++;
  if (d.isExam) nExam++;

  d.vocab.forEach(v => {
    nv++;
    const k = v.en.trim().toLowerCase();
    (seen[k] = seen[k] || []).push(d.day);
    if (!v.en || !v.pos || !v.ipa || !v.vi || !v.example) err(`D${d.day} vocab incomplete: ${v.en}`);
  });

  const e = d.exercises;
  e.multipleChoice.forEach((q, i) => {
    nq++;
    if (!q.options.includes(q.answer)) err(`D${d.day} MC${i}`);
    if (new Set(q.options).size !== q.options.length) err(`D${d.day} MC${i} dup options`);
  });

  [...e.fillBlank.map((q, i) => ['fillBlank', i, q]), ...e.review.map((q, i) => ['review', i, q])].forEach(([t, i, q]) => {
    nq++;
    const b = (q.sentence.match(/___/g) || []).length;
    if (b < 1) err(`D${d.day} ${t}${i} no blank`);
    if (!q.answer || !q.hint) err(`D${d.day} ${t}${i} missing answer/hint`);
    if (b > 1) {
      if (b !== 2) err(`D${d.day} ${t}${i} ${b} blanks`);
      if (!q.alternatives || !q.alternatives.length) err(`D${d.day} ${t}${i} multi-blank w/o alternatives`);
    }
  });

  e.sentenceBuild.forEach((q, i) => {
    nq++;
    if (q.words.slice().sort().join('|') !== q.answer.split(/\s+/).filter(Boolean).sort().join('|')) err(`D${d.day} build${i}`);
  });

  e.transformation.forEach((q, i) => {
    nq++;
    if (!q.hint || !q.answer || !q.sentence) err(`D${d.day} trans${i}`);
  });
});

if (nPractice !== 90) err(`Expected 90 practice days, got ${nPractice}`);
if (nExam !== 18) err(`Expected 18 milestone exam days, got ${nExam}`);

Object.keys(seen).filter(k => seen[k].length > 1).forEach(k => err(`duplicate vocab "${k}" on days ${seen[k]}`));
if (c.meta.syncUrl !== '') err('syncUrl not empty');

console.log(`days=${c.days.length} (lessons=${c.days.length - nPractice - nExam}, exams=${nExam}, practice=${nPractice}) stages=${c.stages.length} vocab=${nv} unique=${Object.keys(seen).length} exercises=${nq} syncUrl=${JSON.stringify(c.meta.syncUrl)}`);
console.log(errors ? `FAILED: ${errors} errors` : 'OK: 180 days, 6 stages, 0 duplicate vocab, 0 broken questions, 0 multi-blank w/o alternatives');
process.exit(errors ? 1 : 0);
