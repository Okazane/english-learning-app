const fs = require('fs');
const path = require('path');
const dir = 'C:/Users/Danh/.gemini/antigravity/scratch/truongnat-english';

for (let i = 1; i <= 30; i++) {
  const html = fs.readFileSync(path.join(dir, `english-g8-s${i}.html`), 'utf8');
  const start = html.indexOf('const lessonData = {');
  const end = html.indexOf('const KEY_STREAK');
  const block = html.substring(start, end);
  const fn = new Function(block + '\nreturn lessonData;');
  const d = fn();
  const ex = d.exercises || {};
  console.log(
    `S${String(i).padStart(2, '0')}: title="${d.title}" | vocab=${(d.vocab || []).length} | grammar=${!!d.grammar} | dialogue=${!!d.dialogue} | mc=${(ex.multipleChoice || []).length} fill=${(ex.fillBlank || []).length} build=${(ex.sentenceBuild || []).length} trans=${(ex.transformation || []).length} rev=${(ex.review || []).length}`
  );
}
