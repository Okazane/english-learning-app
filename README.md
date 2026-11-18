# English Learning App: A1 to B2 180-Day Workbook

A static, offline-capable 180-day English course (90 base lessons & milestone exams interleaved with 90 dedicated practice/review days). Each day is a four-step workbook (vocabulary, grammar, dialogue, five-part practice) and the roadmap climbs from CEFR A1 to B2 across 6 structured stages. No build step and no dependencies: open it from any static host.

## Run it

```powershell
cd english-learning-app
npx serve .          # or: python -m http.server 8080
```

Open `http://localhost:3000` (or `:8080`). Opening `index.html` straight from disk also works, except that the service worker and PWA install only register over `http(s)`.

## Files

| File | Role |
| --- | --- |
| `index.html` | Study desk: today's lesson, 180-day roadmap, vocabulary bank, student profile and sync |
| `lesson.html` | The four-step workbench for one day (`lesson.html?day=1` to `?day=180`) |
| `assets/style.css` | Design system (editorial workbook look, light and dark theme, subpixel/optical font smoothness) |
| `assets/app.js` | Roadmap and study desk controller |
| `assets/lesson.js` | Workbench and practice engine |
| `data/curriculum.js` | `window.ENGLISH_CURRICULUM`: `meta`, `stages`, `days` (180 lessons) |
| `sw.js`, `manifest.json` | Offline cache and installable web app manifest |

## The course

| Stage | CEFR | Days | Base Days | Name |
| --- | --- | --- | --- | --- |
| 1 | A1 | 1 to 14 | 1 to 7 | Chặng 1 · Nền tảng A1 (A1 Foundation) |
| 2 | A2 | 15 to 30 | 8 to 15 | Chặng 2 · Xây dựng câu A2 (A2 Building Blocks) |
| 3 | A2+ | 31 to 46 | 16 to 23 | Chặng 3 · Cầu nối Trung cấp A2+ (A2+ Bridge) |
| 4 | B1 | 47 to 60 | 24 to 30 | Chặng 4 · Làm chủ B1 (B1 Mastery) |
| 5 | B1+ | 61 to 120 | 31 to 60 | Chặng 5 · Bứt phá Trung cấp B1+ (B1+ Upper-Intermediate) |
| 6 | B2 | 121 to 180 | 61 to 90 | Chặng 6 · Tinh thông Học thuật B2 (B2 Academic Mastery) |

Every odd day (`Day 2k - 1`) is a Base Lesson or Milestone Exam (`isExam: true` on Days 9, 19, 29, ..., 179), and every even day (`Day 2k`) is a Dedicated Practice & Review Day (`isPractice: true`, `reviewOfDay: 2k - 1`) reinforcing the exact lesson or exam from the day before. Milestone exam days have no dialogue, so step 3 is hidden and the step buttons jump from Grammar straight to Practice.

### One day, four steps

1. **Vocabulary.** Grid mode: tap a card to flip it, tap the speaker to hear it. Focus deck mode: one card at a time with Previous, Flip, Next and "Đánh dấu đã thuộc".
2. **Grammar.** Formula sheet, examples with audio, a common-mistake box (wrong vs right) and a memory tip.
3. **Dialogue.** Per-line audio, "Nghe toàn hội thoại" plays the whole conversation line by line with the active line highlighted, and a toggle for the Vietnamese translation.
4. **Practice.** Five parts: multiple choice, fill in the blank, sentence builder, sentence transformation, spaced-repetition review. A live progress bar counts answered questions.

### Grading

* Pass mark is 70%. Reaching it marks the day complete and extends the streak. The best score per day is kept (`33/35`).
* Answers are normalised before comparison: case, punctuation and extra spaces are ignored, and contractions are treated as equal to their long forms (`don't` and `do not`, `I'm` and `I am`, `won't` and `will not`, `can't` and `cannot`, `he's` and `he is`, `I'll` and `I will`, `I've` and `I have`, and so on).
* Sentence builder: click a word in the pool to add it; click a word in your sentence to remove just that word.
* After submitting, every question shows the correct answer. "Làm lại các câu sai" clears only the wrong answers, keeps the right ones locked, and lets you submit again.

## Data schema

Each entry of `ENGLISH_CURRICULUM.days`:

```js
{
  day, id, cefr, stage, stageName, isExam, estimatedMinutes,
  title, titleEn, dailyGoal,
  vocab:    [{ en, pos, ipa, vi, example }],
  grammar:  { point, explanation /* HTML */, examples, commonMistake: { wrong, right, note }, memoryTip },
  dialogue: { titleVi, lines: [{ speaker, en, vi }] } /* or null on exam days */,
  exercises: {
    multipleChoice: [{ q, options, answer }],
    fillBlank:      [{ sentence /* with ___ */, answer }],
    sentenceBuild:  [{ words, answer }],
    transformation: [{ sentence, answer, hint? }],
    review:         [{ sentence /* with ___ */, answer }]
  }
}
```

An `answer` may also be an array, or a string with alternatives separated by ` / ` or ` | `; any of them is accepted.

## Saved data (`localStorage`)

| Key | Content |
| --- | --- |
| `eng:streak` | `{ count, last }`: consecutive days with a passed practice |
| `eng:completed-days` | array of day numbers |
| `eng:day-scores` | `{ "<day>": { score, total, pct, at } }`, best attempt only |
| `eng:mastered-vocab` | array of lower-case words marked as learned |
| `eng:last-day` | last lesson opened (drives the "today" card) |
| `eng:student-name` | profile name |
| `eng:theme` | `light` or `dark` |
| `eng:sync-url` | Google Sheets Apps Script URL (optional) |

## Google Sheets sync

Open **Học viên** on the study desk, enter a name and the URL of an Apps Script Web App, then press **Lưu** or **Đồng bộ ngay**. The app sends

```js
fetch(syncUrl, { method: 'POST', body: JSON.stringify(payload), mode: 'no-cors' })
```

on save, on manual sync, after each graded practice, and when the tab becomes hidden (`visibilitychange`). With `no-cors` the browser cannot read the reply, so "Đã gửi" means the request left the browser. `payload` contains `name`, `streak`, `completedDays`, `dayScores`, `masteredVocab`, `lastDay`, `totalDays`, `updatedAt`.

Minimal Apps Script receiver:

```js
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress') ||
              SpreadsheetApp.getActiveSpreadsheet().insertSheet('Progress');
  sheet.appendRow([new Date(), data.name, data.streak, data.completedDays.length,
                   JSON.stringify(data.dayScores), data.masteredVocab.length, data.lastDay]);
  return ContentService.createTextOutput('ok');
}
```

Deploy it as a Web App with access "Anyone".

## Offline

`sw.js` caches the app shell and `data/curriculum.js` (cache `english-learning-app-v6`). It is network-first, so edits show up when online and the cached copy is used offline. Bump the cache name in `sw.js` when you ship a breaking change. Speech uses the browser's Web Speech API (`speechSynthesis`, `en-US`); without it the audio buttons do nothing and the rest still works.

## Adding or editing lessons

Edit `data/curriculum.js` only; the UI reads everything from it. Keep `day` values 1 to 180 in order, because the roadmap, "today" card and previous/next navigation index by day number.
