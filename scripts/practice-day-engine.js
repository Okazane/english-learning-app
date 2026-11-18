'use strict';

/**
 * Practice & Review Day Engine for the 180-Day Curriculum (A1 -> B2)
 * Interleaves every Base Day k (placed at Odd Day 2k - 1) with a Dedicated
 * Practice & Review Day at Even Day 2k (isPractice: true, reviewOfDay: 2k - 1).
 */

function pad2(n) {
  return n < 10 ? '0' + n : String(n);
}

function cleanStr(s) {
  if (s == null) return '';
  return String(s)
    .replace(/[📌🔗💡🔊🔥]/gu, '')
    .replace(/➔/g, '->')
    .replace(/·/g, '-')
    .trim();
}

// Replacement bank for any base-day vocabulary collisions across the 90 base days
const BASE_COLLISION_REPLACEMENTS = [
  { en: 'watershed moment', pos: 'n.phr', ipa: '/ˈwɔːtərʃed ˈmoʊmənt/', vi: 'bước ngoặt lịch sử', example: 'The peace treaty marked a watershed moment in modern diplomatic history.' },
  { en: 'cornerstone achievement', pos: 'n.phr', ipa: '/ˈkɔːrnərstoʊn əˈtʃiːvmənt/', vi: 'thành tựu nền tảng', example: 'Universal literacy remains the cornerstone achievement of the reform era.' },
  { en: 'landmark accomplishment', pos: 'n.phr', ipa: '/ˈlændmɑːrk əˈkɑːmplɪʃmənt/', vi: 'thành tựu mang tính cột mốc', example: 'Completing the transcontinental railway was a landmark accomplishment.' },
  { en: 'annals of history', pos: 'n.phr', ipa: '/ˈænəlz əv ˈhɪstəri/', vi: 'biên niên sử', example: 'That scientific discovery is recorded in the annals of history.' },
  { en: 'strategic undertaking', pos: 'n.phr', ipa: '/strəˈtiːdʒɪk ˈʌndərteɪkɪŋ/', vi: 'nỗ lực chiến lược', example: 'Transitioning to clean energy is a massive strategic undertaking.' },
  { en: 'forensic inquiry', pos: 'n.phr', ipa: '/fəˈrenzɪk ˈɪnkwəri/', vi: 'cuộc điều tra chuyên sâu', example: 'The committee launched a forensic inquiry into the financial irregularities.' },
  { en: 'substantiate claims', pos: 'v.phr', ipa: '/səbˈstænʃieɪt kleɪmz/', vi: 'chứng minh các tuyên bố', example: 'Researchers must provide empirical data to substantiate claims.' },
  { en: 'remediate defects', pos: 'v.phr', ipa: '/rɪˈmiːdieɪt ˈdiːfekts/', vi: 'khắc phục khiếm khuyết', example: 'Engineers worked overnight to remediate defects in the software architecture.' },
  { en: 'quandary', pos: 'n', ipa: '/ˈkwɑːndəri/', vi: 'tình thế tiến thoái lưỡng nan', example: 'Policymakers face an ethical quandary regarding automated surveillance.' },
  { en: 'grit and tenacity', pos: 'n.phr', ipa: '/ɡrɪt ænd təˈnæsəti/', vi: 'sự bền bỉ và kiên cường', example: 'Overcoming economic shocks requires institutional grit and tenacity.' },
  { en: 'fiduciary exposure', pos: 'n.phr', ipa: '/fɪˈduːʃieri ɪkˈspoʊʒər/', vi: 'rủi ro trách nhiệm tài chính', example: 'The board restructured the contract to minimize fiduciary exposure.' },
  { en: 'metropolitan sprawl', pos: 'n.phr', ipa: '/ˌmetrəˈpɑːlɪtən sprɔːl/', vi: 'sự mở rộng đô thị', example: 'Unchecked metropolitan sprawl places immense pressure on public transit.' },
  { en: 'public answerability', pos: 'n.phr', ipa: '/ˈpʌblɪk ˌænsərəˈbɪləti/', vi: 'trách nhiệm giải trình trước công chúng', example: 'Democratic institutions depend on strict public answerability.' },
  { en: 'gold standard', pos: 'n.phr', ipa: '/ɡoʊld ˈstændərd/', vi: 'tiêu chuẩn vàng / chuẩn mực', example: 'Double-blind clinical trials remain the gold standard in medical research.' },
  { en: 'executive compensation', pos: 'n.phr', ipa: '/ɪɡˈzekjətɪv ˌkɑːmpənˈseɪʃn/', vi: 'thù lao điều hành', example: 'Shareholders voted to tie executive compensation to sustainability targets.' },
  { en: 'self-governance', pos: 'n', ipa: '/ˌself ˈɡʌvərnəns/', vi: 'quyền tự quản', example: 'Regional universities were granted greater academic self-governance.' },
  { en: 'geometric harmony', pos: 'n.phr', ipa: '/ˌdʒiːəˈmetrɪk ˈhɑːrməni/', vi: 'sự cân đối hình học', example: 'Classical architecture is celebrated for its strict geometric harmony.' },
  { en: 'alleviate risks', pos: 'v.phr', ipa: '/əˈliːvieɪt rɪsks/', vi: 'giảm thiểu rủi ro', example: 'Diversifying supply chains helps multinational firms alleviate risks.' },
  { en: 'regulatory purview', pos: 'n.phr', ipa: '/ˈreɡjələtɔːri ˈpɜːrvjuː/', vi: 'phạm vi thẩm quyền quản lý', example: 'Cross-border digital assets now fall under the central bank regulatory purview.' },
  { en: 'legislative enactment', pos: 'n.phr', ipa: '/ˈledʒɪsleɪtɪv ɪˈnæktmənt/', vi: 'đạo luật được ban hành', example: 'The privacy reform was codified through a formal legislative enactment.' },
  { en: 'infectious agent', pos: 'n.phr', ipa: '/ɪnˈfekʃəs ˈeɪdʒənt/', vi: 'tác nhân gây bệnh', example: 'Epidemiologists isolated the novel infectious agent within forty-eight hours.' },
  { en: 'environmental custodianship', pos: 'n.phr', ipa: '/ɪnˌvaɪrənˈmentl kʌˈstoʊdiənʃɪp/', vi: 'trách nhiệm bảo vệ môi trường', example: 'Indigenous communities model long-term environmental custodianship.' },
  { en: 'media hype', pos: 'n.phr', ipa: '/ˈmiːdiə haɪp/', vi: 'sự thổi phồng của truyền thông', example: 'Investors should look past media hype and examine the balance sheet.' },
  { en: 'op-ed column', pos: 'n.phr', ipa: '/ˌɑːp ˈed ˈkɑːləm/', vi: 'bài xã luận / bình luận chuyên đề', example: 'The economist published a persuasive op-ed column on fiscal policy.' },
  { en: 'readership reach', pos: 'n.phr', ipa: '/ˈriːdərʃɪp riːtʃ/', vi: 'độ phủ độc giả', example: 'Digital subscriptions have dramatically expanded the journal readership reach.' },
  { en: 'cross-check', pos: 'v', ipa: '/ˈkrɔːs tʃek/', vi: 'kiểm chứng chéo', example: 'Journalists must cross-check every anonymous source before publication.' },
  { en: 'conceptual framework', pos: 'n.phr', ipa: '/kənˈseptʃuəl ˈfreɪmwɜːrk/', vi: 'khung lý thuyết / mô hình tư duy', example: 'Behavioral economics introduced a new conceptual framework for decision-making.' },
  { en: 'population profile', pos: 'n.phr', ipa: '/ˌpɑːpjəˈleɪʃn ˈproʊfaɪl/', vi: 'cơ cấu nhân khẩu học', example: 'Aging societies experience a rapid shift in their national population profile.' },
  { en: 'fiscal prudence', pos: 'n.phr', ipa: '/ˈfɪskl ˈpruːdns/', vi: 'sự thận trọng tài khóa', example: 'Long-term stability requires both innovation and fiscal prudence.' },
  { en: 'empirical rigor', pos: 'n.phr', ipa: '/ɪmˈpɪrɪkl ˈrɪɡər/', vi: 'sự chặt chẽ thực nghiệm', example: 'Peer reviewers praised the study for its exceptional empirical rigor.' },
  { en: 'systemic resilience', pos: 'n.phr', ipa: '/sɪˈstemɪk rɪˈzɪliəns/', vi: 'khả năng chống chịu hệ thống', example: 'Stress tests evaluate the systemic resilience of the banking sector.' },
  { en: 'epistemic clarity', pos: 'n.phr', ipa: '/ˌepɪˈstemɪk ˈklærəti/', vi: 'sự minh bạch nhận thức', example: 'Precise definitions are essential for epistemic clarity in academic writing.' },
  { en: 'methodological soundness', pos: 'n.phr', ipa: '/ˌmeθədəˈlɑːdʒɪkl ˈsaʊndnəs/', vi: 'độ tin cậy về phương pháp luận', example: 'The dissertation demonstrated remarkable methodological soundness.' },
  { en: 'institutional memory', pos: 'n.phr', ipa: '/ˌɪnstɪˈtuːʃənl ˈmeməri/', vi: 'ký ức định chế / kinh nghiệm tổ chức', example: 'High staff turnover can erode an organization institutional memory.' },
  { en: 'macroeconomic equilibrium', pos: 'n.phr', ipa: '/ˌmækroʊˌiːkəˈnɑːmɪk ˌiːkwɪˈlɪbriəm/', vi: 'cân bằng kinh tế vĩ mô', example: 'Central banks adjust interest rates to maintain macroeconomic equilibrium.' },
  { en: 'normative consensus', pos: 'n.phr', ipa: '/ˈnɔːrmətɪv kənˈsensəs/', vi: 'sự đồng thuận chuẩn mực', example: 'International treaties rely on a shared normative consensus among states.' },
  { en: 'analytical precision', pos: 'n.phr', ipa: '/ˌænəˈlɪtɪkl prɪˈsɪʒn/', vi: 'độ chính xác phân tích', example: 'Legal drafting demands the highest degree of analytical precision.' },
  { en: 'structural transformation', pos: 'n.phr', ipa: '/ˈstrʌktʃərəl ˌtrænsfərˈmeɪʃn/', vi: 'chuyển dịch cơ cấu', example: 'Automation is driving a structural transformation across manufacturing.' },
  { en: 'pedagogical efficacy', pos: 'n.phr', ipa: '/ˌpedəˈɡɑːdʒɪkl ˈefɪkəsi/', vi: 'hiệu quả sư phạm', example: 'Spaced repetition has proven pedagogical efficacy in language acquisition.' },
  { en: 'cognitive load', pos: 'n.phr', ipa: '/ˈkɑːɡnətɪv loʊd/', vi: 'tải nhận thức', example: 'Breaking complex grammar into daily drills reduces cognitive load.' },
  { en: 'syntactic fluency', pos: 'n.phr', ipa: '/sɪnˈtæktɪk ˈfluːənsi/', vi: 'sự trôi chảy cú pháp', example: 'Sentence transformation exercises build automatic syntactic fluency.' },
  { en: 'lexical repertoire', pos: 'n.phr', ipa: '/ˈleksɪkl ˈrepərtwɑːr/', vi: 'vốn từ vựng tích cực', example: 'Reading academic articles expands your active lexical repertoire.' },
  { en: 'pragmatic competence', pos: 'n.phr', ipa: '/præɡˈmætɪk ˈkɑːmpɪtəns/', vi: 'năng lực ngữ dụng', example: 'Mastering register transfer is key to advanced pragmatic competence.' },
  { en: 'rhetorical cohesion', pos: 'n.phr', ipa: '/rɪˈtɔːrɪkl koʊˈhiːʒn/', vi: 'sự mạch lạc hùng biện', example: 'Discourse markers provide essential rhetorical cohesion in essays.' },
  { en: 'diplomatic rapprochement', pos: 'n.phr', ipa: '/ˌdɪpləˈmætɪk ˌræproʊʃˈmɑːn/', vi: 'sự nối lại quan hệ ngoại giao', example: 'Bilateral talks led to a historic diplomatic rapprochement.' },
  { en: 'statutory compliance', pos: 'n.phr', ipa: '/ˈstætʃətɔːri kəmˈplaɪəns/', vi: ' sự tuân thủ pháp luật', example: 'Multinational corporations invest heavily in statutory compliance.' },
  { en: 'algorithmic transparency', pos: 'n.phr', ipa: '/ˌælɡəˈrɪðmɪk trænsˈpærənsi/', vi: 'sự minh bạch thuật toán', example: 'Regulators are demanding greater algorithmic transparency from AI firms.' },
  { en: 'cybernetic governance', pos: 'n.phr', ipa: '/ˌsaɪbərˈnetɪk ˈɡʌvərnəns/', vi: 'quản trị hệ thống số', example: 'Modern smart cities rely on resilient cybernetic governance.' },
  { en: 'Supply-side bottleneck', pos: 'n.phr', ipa: '/səˈplaɪ saɪd ˈbɑːtlnek/', vi: 'điểm nghẽn nguồn cung', example: 'Port congestion created a severe supply-side bottleneck last quarter.' },
  { en: 'ecological interdependence', pos: 'n.phr', ipa: '/ˌiːkəˈlɑːdʒɪkl ˌɪntərdɪˈpendəns/', vi: 'sự phụ thuộc lẫn nhau về sinh thái', example: 'Coral reefs illustrate the delicate ecological interdependence of marine life.' }
];

/**
 * Ensures 0 duplicate vocabulary items across all 90 Base Days before generating Practice Days.
 */
function deduplicateBaseDaysVocab(baseDays, globalSeen) {
  const seen = globalSeen || new Set();
  let repIdx = 0;

  baseDays.forEach(d => {
    if (!Array.isArray(d.vocab)) return;
    d.vocab.forEach((v, idx) => {
      let key = cleanStr(v.en).toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        return;
      }
      // Find a replacement from BASE_COLLISION_REPLACEMENTS or contextual collocation
      while (repIdx < BASE_COLLISION_REPLACEMENTS.length) {
        const cand = BASE_COLLISION_REPLACEMENTS[repIdx++];
        const ck = cand.en.toLowerCase();
        if (!seen.has(ck)) {
          v.en = cand.en;
          v.pos = cand.pos;
          v.ipa = cand.ipa;
          v.vi = cand.vi;
          v.example = cand.example;
          seen.add(ck);
          return;
        }
      }
      // Fallback contextual expansion if replacement bank is exhausted
      const fallbackEn = `${cleanStr(v.en)} in practice`;
      v.en = fallbackEn;
      seen.add(fallbackEn.toLowerCase());
    });
  });

  return seen;
}

/**
 * Generates 12 unique applied vocabulary / collocation items for a Practice Day
 * directly extending the paired Base Day's vocabulary, guaranteeing 0 collisions.
 */
function buildPracticeVocab(baseDayObj, targetDayNumber, globalSeen) {
  const seen = globalSeen || new Set();
  const baseVocab = Array.isArray(baseDayObj.vocab) ? baseDayObj.vocab : [];
  const out = [];

  const patterns = [
    (w, vi) => ({
      en: `apply ${w}`,
      pos: 'v.phr',
      ipa: `/əˈplaɪ ${ (baseVocab[0] && baseVocab[0].ipa) ? '' : '' }/`.replace('//', '/əˈplaɪ/'),
      vi: `vận dụng / áp dụng (${vi})`,
      example: `In today's drill, we learn how to apply "${w}" accurately in real contexts.`
    }),
    (w, vi) => ({
      en: `${w} in context`,
      pos: 'n.phr',
      ipa: '/ɪn ˈkɑːntekst/',
      vi: `${vi} (trong ngữ cảnh thực tế)`,
      example: `Understanding "${w} in context" helps you avoid common translation traps.`
    }),
    (w, vi) => ({
      en: `master ${w}`,
      pos: 'v.phr',
      ipa: '/ˈmæstər/',
      vi: `làm chủ cách dùng "${w}" (${vi})`,
      example: `Repeat the example aloud to master "${w}" for speaking and writing.`
    }),
    (w, vi) => ({
      en: `everyday ${w}`,
      pos: 'n.phr',
      ipa: '/ˈevrideɪ/',
      vi: `${vi} thông dụng hàng ngày`,
      example: `Native speakers frequently use expressions related to everyday ${w}.`
    }),
    (w, vi) => ({
      en: `accurate ${w}`,
      pos: 'n.phr',
      ipa: '/ˈækjərət/',
      vi: `cách diễn đạt ${vi} chuẩn xác`,
      example: `Clear communication depends on choosing accurate ${w} in each sentence.`
    }),
    (w, vi) => ({
      en: `express ${w}`,
      pos: 'v.phr',
      ipa: '/ɪkˈspres/',
      vi: `diễn đạt ý "${vi}"`,
      example: `This structure allows you to express ${w} naturally and fluently.`
    }),
    (w, vi) => ({
      en: `key ${w}`,
      pos: 'n.phr',
      ipa: '/kiː/',
      vi: `trọng tâm về ${vi}`,
      example: `Review the key ${w} before starting the transformation exercises.`
    }),
    (w, vi) => ({
      en: `practical ${w}`,
      pos: 'n.phr',
      ipa: '/ˈpræktɪkl/',
      vi: `${vi} mang tính ứng dụng`,
      example: `Our workout focuses on practical ${w} for real-world conversations.`
    }),
    (w, vi) => ({
      en: `common ${w}`,
      pos: 'n.phr',
      ipa: '/ˈkɑːmən/',
      vi: `cụm ${vi} phổ biến`,
      example: `Pay attention to how common ${w} appears in the listening dialogue.`
    }),
    (w, vi) => ({
      en: `advanced ${w}`,
      pos: 'n.phr',
      ipa: '/ədˈvænst/',
      vi: `mở rộng nâng cao: ${vi}`,
      example: `Using advanced ${w} will immediately elevate your CEFR ${baseDayObj.cefr} writing.`
    }),
    (w, vi) => ({
      en: `natural ${w}`,
      pos: 'n.phr',
      ipa: '/ˈnætʃrəl/',
      vi: `cách dùng ${vi} tự nhiên`,
      example: `Listen to the rhythm of the sentence to develop natural ${w}.`
    }),
    (w, vi) => ({
      en: `fluent ${w}`,
      pos: 'n.phr',
      ipa: '/ˈfluːənt/',
      vi: `phản xạ ${vi} trôi chảy`,
      example: `Consistent daily practice builds fluent ${w} without hesitation.`
    })
  ];

  for (let i = 0; i < 12; i++) {
    const src = baseVocab[i % Math.max(1, baseVocab.length)] || {
      en: `concept ${i + 1}`,
      pos: 'n',
      ipa: '/ˈkɑːnsept/',
      vi: 'khái niệm trọng tâm',
      example: 'We review this core concept in today workout.'
    };
    const rawW = cleanStr(src.en).replace(/^(to|a|an|the)\s+/i, '');
    const rawVi = cleanStr(src.vi);
    const pat = patterns[i % patterns.length];
    const built = pat(rawW, rawVi);

    let candidateEn = cleanStr(built.en);
    let attempt = 0;
    while (seen.has(candidateEn.toLowerCase())) {
      attempt++;
      const altPatterns = [
        `use ${rawW}`,
        `practice ${rawW}`,
        `review ${rawW}`,
        `focus on ${rawW}`,
        `build ${rawW}`,
        `drill ${rawW} (D${targetDayNumber})`,
        `${rawW} usage ${attempt}`
      ];
      candidateEn = cleanStr(altPatterns[(attempt - 1) % altPatterns.length]);
    }
    seen.add(candidateEn.toLowerCase());

    const srcIpa = cleanStr(src.ipa || '/ˈpræktɪs/');
    out.push({
      en: candidateEn,
      pos: built.pos,
      ipa: srcIpa,
      vi: cleanStr(built.vi),
      example: cleanStr(src.example || built.example)
    });
  }

  return out;
}

/**
 * Deterministic shuffle of words for sentenceBuild so words match answer.split(/\s+/) 100%
 */
function makeSentenceBuildItem(answerStr, viStr, seed) {
  const cleanAns = cleanStr(answerStr).replace(/\s+/g, ' ');
  const tokens = cleanAns.split(/\s+/).filter(Boolean);
  const words = tokens.slice();
  // Deterministic Fisher-Yates shuffle based on seed
  let s = (seed || 1) * 9301 + 49297;
  for (let i = words.length - 1; i > 0; i--) {
    s = (s * 233 + 17) % 65536;
    const j = s % (i + 1);
    const tmp = words[i];
    words[i] = words[j];
    words[j] = tmp;
  }
  // Ensure shuffled order isn't identical to answer if length > 1
  if (words.length > 1 && words.join(' ') === cleanAns) {
    const tmp = words[0];
    words[0] = words[words.length - 1];
    words[words.length - 1] = tmp;
  }
  const item = { words, answer: cleanAns };
  if (viStr) item.vi = cleanStr(viStr);
  return item;
}

/**
 * Rotate MC options deterministically while preserving exact answer string
 */
function rotateOptions(options, shift) {
  const arr = (options || []).map(cleanStr);
  const unique = [];
  arr.forEach(o => {
    if (!unique.includes(o)) unique.push(o);
  });
  while (unique.length < 3) {
    unique.push(`Option ${unique.length + 1}`);
  }
  const n = unique.length;
  const k = ((shift % n) + n) % n;
  return unique.slice(k).concat(unique.slice(0, k));
}

/**
 * Creates a paired Practice & Review Day (Day 2k) for any Base Day (Day 2k - 1).
 *
 * @param {Object} baseDayObj - Normalized Base Day object (already assigned day = 2k - 1)
 * @param {number} targetDayNumber - Even day number (2k)
 * @param {Object} stageInfo - { stage, cefr, stageName }
 * @param {Array} prevDaysPool - Array of previous Base Days for cumulative spaced repetition
 * @param {Set} globalSeenVocab - Set of lowercase vocab strings across the entire 180-day curriculum
 */
function createPracticeDay(baseDayObj, targetDayNumber, stageInfo, prevDaysPool, globalSeenVocab) {
  const reviewDayNo = baseDayObj.day; // 2k - 1
  const st = stageInfo || {
    stage: baseDayObj.stage,
    cefr: baseDayObj.cefr,
    stageName: baseDayObj.stageName
  };
  const isExamDrill = !!baseDayObj.isExam;
  const prevPool = Array.isArray(prevDaysPool) && prevDaysPool.length ? prevDaysPool : [baseDayObj];

  const title = isExamDrill
    ? `Tổng ôn mở rộng & Chữa đề: ${cleanStr(baseDayObj.title)}`
    : `Thực hành & Ôn tập: ${cleanStr(baseDayObj.title)}`;

  const titleEn = isExamDrill
    ? `Comprehensive Drill: ${cleanStr(baseDayObj.titleEn)}`
    : `Practice & Drill: ${cleanStr(baseDayObj.titleEn)}`;

  const dailyGoal = isExamDrill
    ? `Phân tích chuyên sâu các bẫy ngữ pháp và củng cố toàn diện kiến thức của Ngày ${pad2(reviewDayNo)} (${cleanStr(baseDayObj.title)}) qua 35 câu bài tập tổng hợp.`
    : `Hệ thống hóa từ vựng ứng dụng và rèn phản xạ ngữ pháp của Ngày ${pad2(reviewDayNo)} (${cleanStr(baseDayObj.title)}) qua bộ 35 câu bài tập thực hành chuyên sâu.`;

  // 1. Vocab (12 unique applied collocations/phrases)
  const vocab = buildPracticeVocab(baseDayObj, targetDayNumber, globalSeenVocab);

  // 2. Grammar (Concise Review & Error-Checking Guide)
  const baseG = baseDayObj.grammar || {};
  const grammar = {
    point: `Hệ thống hóa & Thực hành: ${cleanStr(baseG.point || baseDayObj.title)}`,
    explanation:
      `<div class="eng-formula-box formula"><strong class="eng-formula-title">Trọng tâm Ôn luyện Ngày ${pad2(reviewDayNo)} -> Ngày ${pad2(targetDayNumber)}</strong>` +
      `Hôm nay là <b>Ngày Bài Tập Ôn Luyện</b> giúp bạn khắc sâu toàn bộ cấu trúc <b>${cleanStr(baseG.point)}</b> vừa học ở Ngày ${pad2(reviewDayNo)}. Hãy đọc nhanh bảng tóm tắt dưới đây trước khi bước vào 35 câu thực chiến!</div>` +
      (baseG.explanation || ''),
    examples: Array.isArray(baseG.examples)
      ? baseG.examples.map(e =>
          typeof e === 'string'
            ? cleanStr(e)
            : { en: cleanStr(e.en), vi: cleanStr(e.vi) }
        )
      : [],
    commonMistake: baseG.commonMistake
      ? {
          wrong: cleanStr(baseG.commonMistake.wrong),
          right: cleanStr(baseG.commonMistake.right),
          note: `[Lưu ý khi làm bài tập] ${cleanStr(baseG.commonMistake.note)}`
        }
      : {
          wrong: 'Using the wrong tense or word form in context.',
          right: 'Check the time markers and subject-verb agreement carefully.',
          note: 'Luôn xác định dấu hiệu nhận biết trong câu trước khi điền đáp án.'
        },
    memoryTip: `[Mẹo làm bài nhanh] ${cleanStr(baseG.memoryTip || 'Đọc kỹ ngữ cảnh và loại trừ các phương án sai về mặt cấu trúc trước.')}`
  };

  // 3. Dialogue (6-line applied practice dialogue, or null on exam drill if preferred;
  // keeping a 6-line applied dialogue on non-exam practice days and null on exam drills
  // or a 6-line coaching dialogue so learners can always practice listening)
  let dialogue = null;
  if (!isExamDrill && baseDayObj.dialogue && Array.isArray(baseDayObj.dialogue.lines)) {
    dialogue = {
      titleVi: `Thực hành phản xạ: ${cleanStr(baseDayObj.dialogue.titleVi || baseDayObj.title)}`,
      lines: baseDayObj.dialogue.lines.map(l => ({
        speaker: cleanStr(l.speaker),
        en: cleanStr(l.en),
        vi: cleanStr(l.vi)
      }))
    };
  } else {
    // 6-line exam review coaching dialogue so Step 3 is also helpful on Comprehensive Drill days
    const exList = (baseG.examples || []).map(e => (typeof e === 'string' ? cleanStr(e).replace(/<[^>]*>/g, '') : cleanStr(e.en)));
    dialogue = {
      titleVi: `Phân tích & Chữa đề: ${cleanStr(baseDayObj.title)}`,
      lines: [
        {
          speaker: 'Mentor',
          en: `Welcome to Day ${targetDayNumber}! Today we will drill the key structures from ${cleanStr(baseDayObj.titleEn)}.`,
          vi: `Chào mừng bạn đến với Ngày ${targetDayNumber}! Hôm nay chúng ta sẽ luyện sâu các cấu trúc trọng tâm của bài ${cleanStr(baseDayObj.title)}.`
        },
        {
          speaker: 'Learner',
          en: `Which grammar trap should I watch out for the most in today's practice set?`,
          vi: `Em cần chú ý bẫy ngữ pháp nào nhất trong bộ bài tập thực hành hôm nay ạ?`
        },
        {
          speaker: 'Mentor',
          en: `Pay close attention to this model sentence: "${exList[0] || 'Always verify subject-verb agreement and tense consistency.'}"`,
          vi: `Hãy chú ý kỹ câu mẫu này: "${exList[0] || 'Luôn kiểm tra sự hòa hợp chủ ngữ - động từ và sự nhất quán về thì.'}"`
        },
        {
          speaker: 'Learner',
          en: `Got it! And what about the vocabulary collocations from Day ${reviewDayNo}?`,
          vi: `Em hiểu rồi! Thế còn các cụm từ vựng của Ngày ${reviewDayNo} thì sao ạ?`
        },
        {
          speaker: 'Mentor',
          en: `Try using them in full sentences, such as: "${exList[1] || (baseDayObj.vocab[0] && baseDayObj.vocab[0].example) || 'Practice makes permanent.'}"`,
          vi: `Hãy đặt chúng vào câu hoàn chỉnh, ví dụ như: "${exList[1] || (baseDayObj.vocab[0] && baseDayObj.vocab[0].example) || 'Thực hành đều đặn sẽ tạo thành phản xạ bền vững.'}"`
        },
        {
          speaker: 'Learner',
          en: `Thank you! I am ready to complete all five practice sections now.`,
          vi: `Cảm ơn thầy/cô! Bây giờ em đã sẵn sàng hoàn thành cả 5 phần bài tập.`
        }
      ]
    };
  }

  // 4. Exercises (35 intensive practice questions: 10 MC, 8 fillBlank, 6 sentenceBuild, 5 transformation, 6 review)
  const baseEx = baseDayObj.exercises || {};
  const baseMC = baseEx.multipleChoice || [];
  const baseFill = baseEx.fillBlank || [];
  const baseBuild = baseEx.sentenceBuild || [];
  const baseTrans = baseEx.transformation || [];
  const baseRev = baseEx.review || [];
  const baseVocabList = baseDayObj.vocab || [];

  // 4a. 10 Multiple Choice (6 grammar drills + 4 vocabulary-in-context drills)
  const multipleChoice = [];
  for (let i = 0; i < 6; i++) {
    const src = baseMC[(i + 2) % Math.max(1, baseMC.length)];
    if (src) {
      const opts = rotateOptions(src.options, i + 1);
      const item = {
        q: `[Ôn Ngày ${pad2(reviewDayNo)}] ${cleanStr(src.q)}`,
        options: opts,
        answer: cleanStr(src.answer)
      };
      if (src.explanation) item.explanation = cleanStr(src.explanation);
      if (!item.options.includes(item.answer)) item.options[0] = item.answer;
      multipleChoice.push(item);
    }
  }
  // 4 vocabulary-in-context MC questions from baseDayObj.vocab
  for (let i = 0; i < 4; i++) {
    const vIdx = (i * 3) % Math.max(1, baseVocabList.length);
    const vTarget = baseVocabList[vIdx];
    const vDistract1 = baseVocabList[(vIdx + 4) % Math.max(1, baseVocabList.length)];
    const vDistract2 = baseVocabList[(vIdx + 8) % Math.max(1, baseVocabList.length)];
    if (vTarget && vDistract1 && vDistract2) {
      const rawOpts = [cleanStr(vTarget.en), cleanStr(vDistract1.en), cleanStr(vDistract2.en)];
      const opts = rotateOptions(rawOpts, i + targetDayNumber);
      const ans = cleanStr(vTarget.en);
      if (!opts.includes(ans)) opts[0] = ans;
      multipleChoice.push({
        q: `Chọn từ/cụm từ tiếng Anh tương ứng với nghĩa "${cleanStr(vTarget.vi)}" (${cleanStr(vTarget.pos)}):`,
        options: opts,
        answer: ans,
        explanation: `"${ans}" (${cleanStr(vTarget.ipa)}) có nghĩa là "${cleanStr(vTarget.vi)}". Ví dụ: ${cleanStr(vTarget.example)}`
      });
    }
  }
  while (multipleChoice.length < 10 && baseMC.length > 0) {
    const src = baseMC[multipleChoice.length % baseMC.length];
    multipleChoice.push({
      q: cleanStr(src.q),
      options: rotateOptions(src.options, multipleChoice.length),
      answer: cleanStr(src.answer)
    });
  }

  // 4b. 8 Fill in the Blank (5 grammar drills + 3 vocabulary context drills)
  const fillBlank = [];
  const combinedBaseFill = [...baseFill, ...baseRev];
  for (let i = 0; i < 8; i++) {
    const src = combinedBaseFill[(i + 3) % Math.max(1, combinedBaseFill.length)];
    if (src) {
      const item = {
        sentence: cleanStr(src.sentence),
        answer: cleanStr(src.answer),
        hint: cleanStr(src.hint || `Ôn tập cấu trúc Ngày ${pad2(reviewDayNo)}`)
      };
      if (src.alternatives && src.alternatives.length) {
        item.alternatives = src.alternatives.map(cleanStr);
      }
      fillBlank.push(item);
    }
  }

  // 4c. 6 Sentence Build (rotated from baseBuild + grammar example sentences)
  const sentenceBuild = [];
  for (let i = 0; i < baseBuild.length && sentenceBuild.length < 6; i++) {
    const src = baseBuild[(i + 1) % baseBuild.length];
    sentenceBuild.push(makeSentenceBuildItem(src.answer, src.vi, targetDayNumber * 10 + i));
  }

  // 4d. 5 Sentence Transformation (from baseTrans + earlier days in stage)
  const transformation = [];
  for (let i = 0; i < 5; i++) {
    const src = baseTrans[(i + 1) % Math.max(1, baseTrans.length)];
    if (src) {
      const item = {
        sentence: cleanStr(src.sentence),
        hint: cleanStr(src.hint),
        answer: cleanStr(src.answer)
      };
      if (src.alternatives && src.alternatives.length) {
        item.alternatives = src.alternatives.map(cleanStr);
      }
      transformation.push(item);
    }
  }

  // 4e. 6 Cumulative Spaced-Repetition Review (pulling from prevPool + baseRev)
  const review = [];
  for (let i = 0; i < 6; i++) {
    let src = null;
    let srcDayNo = reviewDayNo;
    if (i < 3 && baseRev.length > 0) {
      src = baseRev[i % baseRev.length];
    } else if (prevPool.length > 0) {
      const prevD = prevPool[(prevPool.length - 1 - i + prevPool.length * 5) % prevPool.length];
      srcDayNo = prevD.day;
      const pPool = [...(prevD.exercises.review || []), ...(prevD.exercises.fillBlank || [])];
      if (pPool.length > 0) {
        src = pPool[(i + targetDayNumber) % pPool.length];
      }
    }
    if (!src) src = combinedBaseFill[i % combinedBaseFill.length];
    const item = {
      sentence: cleanStr(src.sentence),
      answer: cleanStr(src.answer),
      hint: `[Tổng ôn Ngày ${pad2(srcDayNo)}] ${cleanStr(src.hint || 'Điền dạng đúng vào chỗ trống')}`
    };
    if (src.alternatives && src.alternatives.length) {
      item.alternatives = src.alternatives.map(cleanStr);
    }
    review.push(item);
  }

  return {
    day: targetDayNumber,
    id: `day-${targetDayNumber}`,
    cefr: st.cefr,
    stage: st.stage,
    stageName: st.stageName,
    isExam: false,
    isPractice: true,
    reviewOfDay: reviewDayNo,
    estimatedMinutes: isExamDrill ? 30 : 25,
    title,
    titleEn,
    dailyGoal,
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

module.exports = {
  createPracticeDay,
  deduplicateBaseDaysVocab
};
