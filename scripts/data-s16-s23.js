// Complete curriculum lessons for Stage 3: A2+ Intermediate Bridge (Days 16-23)
module.exports = [
  // ==================== DAY 16 ====================
  {
    day: 16,
    id: "day-16",
    cefr: "A2+",
    stage: 3,
    stageName: "A2+ Intermediate Bridge",
    isExam: false,
    estimatedMinutes: 25,
    title: "Thể bị động: Thì Hiện tại & Quá khứ",
    titleEn: "Passive Voice in Present & Past Tenses",
    dailyGoal: "Chuyển đổi câu chủ động sang câu bị động ở các thì Hiện tại đơn, Hiện tại tiếp diễn, Quá khứ đơn và Quá khứ tiếp diễn.",
    vocab: [
      { en: "manufacture", pos: "v", ipa: "/ˌmænjuˈfæktʃər/", vi: "sản xuất công nghiệp", example: "Thousands of electric cars are manufactured in Hai Phong." },
      { en: "export", pos: "v", ipa: "/ɪkˈspɔːrt/", vi: "xuất khẩu", example: "Vietnamese coffee is exported to over eighty countries." },
      { en: "import", pos: "v", ipa: "/ɪmˈpɔːrt/", vi: "nhập khẩu", example: "High-tech components are imported from Japan." },
      { en: "construct", pos: "v", ipa: "/kənˈstrʌkt/", vi: "xây dựng", example: "This ancient bridge was constructed four hundred years ago." },
      { en: "preserve", pos: "v", ipa: "/prɪˈzɜːrv/", vi: "bảo tồn, giữ gìn", example: "Traditional folk songs are carefully preserved by local artists." },
      { en: "restore", pos: "v", ipa: "/rɪˈstɔːr/", vi: "trùng tu, khôi phục", example: "The old temple was being restored when we visited." },
      { en: "invent", pos: "v", ipa: "/ɪnˈvent/", vi: "phát minh", example: "The telephone was invented by Alexander Graham Bell in 1876." },
      { en: "discover", pos: "v", ipa: "/dɪˈskʌvər/", vi: "khám phá, tìm ra", example: "Son Doong Cave was discovered by a local man in 1991." },
      { en: "celebrate", pos: "v", ipa: "/ˈselɪbreɪt/", vi: "tổ chức kỷ niệm, ăn mừng", example: "The Mid-Autumn Festival is celebrated every autumn." },
      { en: "decorate", pos: "v", ipa: "/ˈdekəreɪt/", vi: "trang trí", example: "The streets are being decorated with colorful lanterns." },
      { en: "cultivate", pos: "v", ipa: "/ˈkʌltɪveɪt/", vi: "canh tác, trồng trọt", example: "Wet rice is cultivated across the Mekong Delta." },
      { en: "award", pos: "v", ipa: "/əˈwɔːrd/", vi: "trao thưởng", example: "She was awarded the first prize in the science contest." },
      { en: "heritage", pos: "n", ipa: "/ˈherɪtɪdʒ/", vi: "di sản", example: "Ha Long Bay was recognized as a World Heritage Site." },
      { en: "monument", pos: "n", ipa: "/ˈmɑːnjumənt/", vi: "đài tưởng niệm, công trình lịch sử", example: "The historic monument is visited by thousands of tourists daily." }
    ],
    grammar: {
      point: "THỂ BỊ ĐỘNG (PASSIVE VOICE): HIỆN TẠI & QUÁ KHỨ",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Quy tắc chung chuyển Chủ động sang Bị động</div>
          <b>• Công thức cốt lõi:</b> <code>S(mới) + BE (chia theo thì) + V3/V-ed + (by O)</code><br/>
          <b>• Thứ tự đặt trạng từ cuối câu:</b> <code>Nơi chốn + BY O + Thời gian</code><br/>
          <b>• Bỏ "by O" khi:</b> Chủ ngữ câu chủ động không xác định (<i>they, people, someone, somebody, anyone</i>).
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Bảng công thức Bị động Hiện tại & Quá khứ</div>
          <b>• Hiện tại đơn:</b> <code>S + am / is / are + V3/ed</code> (<i>Coffee is grown in Dak Lak.</i>)<br/>
          <b>• Hiện tại tiếp diễn:</b> <code>S + am / is / are + being + V3/ed</code> (<i>Dinner is being cooked now.</i>)<br/>
          <b>• Quá khứ đơn:</b> <code>S + was / were + V3/ed</code> (<i>The bridge was built in 1995.</i>)<br/>
          <b>• Quá khứ tiếp diễn:</b> <code>S + was / were + being + V3/ed</code> (<i>The road was being repaired yesterday.</i>)
        </div>
      `,
      examples: [
        "<b>Hiện tại đơn:</b> Vietnamese rice <b>is exported</b> all over the world.",
        "<b>Quá khứ đơn:</b> The Temple of Literature <b>was constructed</b> in 1070.",
        "<b>Tiếp diễn:</b> The old pagoda <b>is being restored</b> by skilled craftsmen right now."
      ],
      commonMistake: {
        wrong: "This stilt house built by my grandfather in 1990.",
        right: "This stilt house **was built** by my grandfather in 1990.",
        note: "Câu bị động BẮT BUỘC phải có động từ TO BE (was/were/am/is/are) đứng trước V3/ed. Thiếu TO BE câu sẽ thành chủ động sai nghĩa!"
      },
      memoryTip: "Công thức vàng của Bị động: Luôn có 'BE + V3/ed'. Thì tiếp diễn có thêm chữ 'BEING' ở giữa!"
    },
    dialogue: {
      titleVi: "Tình huống: Tham quan Bảo tàng Lịch sử và Làng nghề truyền thống",
      lines: [
        { speaker: "Guide", en: "Welcome to Bat Trang Village! Pottery has a long history here.", vi: "Chào mừng các bạn đến làng gốm Bát Tràng! Nghề gốm có lịch sử lâu đời tại đây." },
        { speaker: "Lan", en: "When was this traditional craft village founded?", vi: "Ngôi làng nghề truyền thống này được thành lập từ khi nào vậy ạ?" },
        { speaker: "Guide", en: "It was established in the 14th century, and the techniques are still preserved today.", vi: "Làng được lập từ thế kỷ 14, và các kỹ thuật vẫn được bảo tồn cho đến ngày nay." },
        { speaker: "Minh", en: "Look over there! Those ceramic vases are being painted by hand.", vi: "Nhìn đằng kia kìa! Những chiếc bình gốm đó đang được vẽ hoàn toàn bằng tay." },
        { speaker: "Guide", en: "Yes, every vase is carefully shaped and glazed before it is baked in the kiln.", vi: "Đúng vậy, mỗi chiếc bình đều được tạo hình và tráng men tỉ mỉ trước khi được nung trong lò." },
        { speaker: "Lan", en: "Are these ceramic products exported to foreign countries?", vi: "Những sản phẩm gốm này có được xuất khẩu sang nước ngoài không ạ?" },
        { speaker: "Guide", en: "Certainly! Thousands of items are shipped to Japan and Europe every month.", vi: "Chắc chắn rồi! Hàng ngàn sản phẩm được vận chuyển sang Nhật Bản và châu Âu mỗi tháng." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "English ___ as an official language in more than fifty countries.", options: ["is spoken", "speaks", "was spoken"], answer: "is spoken" },
        { q: "The telephone ___ by Alexander Graham Bell in 1876.", options: ["invented", "was invented", "is invented"], answer: "was invented" },
        { q: "Look! The main hall ___ for the school anniversary right now.", options: ["is decorated", "is being decorated", "was decorated"], answer: "is being decorated" },
        { q: "Hundreds of stilt houses ___ in this highland province every year.", options: ["are built", "were built", "build"], answer: "are built" },
        { q: "When we arrived at the garage, our car ___ by the mechanic.", options: ["was repairing", "was being repaired", "is being repaired"], answer: "was being repaired" },
        { q: "These conical hats ___ by skillful artisans in Hue last month.", options: ["are made", "were made", "made"], answer: "were made" },
        { q: "Rice ___ in flooded paddy fields across Southeast Asia.", options: ["is cultivated", "cultivates", "was cultivating"], answer: "is cultivated" },
        { q: "Why ___ the match ___ yesterday afternoon?", options: ["did / cancel", "was / cancelled", "is / cancelled"], answer: "was / cancelled" },
        { q: "The classrooms ___ by the students every Friday afternoon.", options: ["are cleaned", "were cleaned", "clean"], answer: "are cleaned" },
        { q: "America ___ by Christopher Columbus in 1492.", options: ["is discovered", "was discovered", "discovered"], answer: "was discovered" }
      ],
      fillBlank: [
        { sentence: "Coffee ___ (grow) in the Central Highlands of Vietnam.", answer: "is grown", hint: "bị động hiện tại đơn số ít" },
        { sentence: "This ancient pagoda ___ (build) more than three hundred years ago.", answer: "was built", hint: "bị động quá khứ đơn (ago)" },
        { sentence: "Please wait outside! The room ___ (clean) at the moment.", answer: "is being cleaned", hint: "bị động hiện tại tiếp diễn" },
        { sentence: "Two hundred trees ___ (plant) in our schoolyard last Sunday.", answer: "were planted", hint: "bị động quá khứ đơn số nhiều" },
        { sentence: "Traditional silk scarves ___ (sell) at the local night market every weekend.", answer: "are sold", hint: "bị động hiện tại đơn số nhiều" },
        { sentence: "While the highway ___ (repair), drivers had to take another route.", answer: "was being repaired", hint: "bị động quá khứ tiếp diễn" },
        { sentence: "___ these smartphones ___ (manufacture) in Vietnam?", answer: "Are manufactured", alternatives: ["Are these smartphones manufactured"], hint: "câu hỏi bị động hiện tại đơn" },
        { sentence: "The injured climber ___ (rescue) by the helicopter yesterday.", answer: "was rescued", hint: "bị động quá khứ đơn" }
      ],
      sentenceBuild: [
        { words: ["This", "bridge", "was", "built", "ten", "years", "ago", "."], answer: "This bridge was built ten years ago ." },
        { words: ["English", "is", "spoken", "all", "over", "the", "world", "."], answer: "English is spoken all over the world ." },
        { words: ["The", "classroom", "is", "being", "cleaned", "right", "now", "."], answer: "The classroom is being cleaned right now ." },
        { words: ["These", "vases", "were", "made", "by", "skilled", "artisans", "."], answer: "These vases were made by skilled artisans ." },
        { words: ["Vietnamese", "coffee", "is", "exported", "to", "many", "countries", "."], answer: "Vietnamese coffee is exported to many countries ." },
        { words: ["When", "was", "this", "historic", "monument", "constructed", "?"], answer: "When was this historic monument constructed ?" },
        { words: ["Our", "car", "was", "being", "washed", "when", "it", "rained", "."], answer: "Our car was being washed when it rained ." }
      ],
      transformation: [
        {
          sentence: "People speak English all over the world. (is)",
          hint: "Chuyển sang bị động Hiện tại đơn, bỏ by people",
          answer: "English is spoken all over the world."
        },
        {
          sentence: "My grandfather planted this mango tree in 2010. (was)",
          hint: "Đưa this mango tree lên làm chủ ngữ, by my grandfather đứng trước in 2010",
          answer: "This mango tree was planted by my grandfather in 2010.",
          alternatives: ["This mango tree was planted in 2010 by my grandfather."]
        },
        {
          sentence: "The workers are repairing the main road right now. (being)",
          hint: "Bị động Hiện tại tiếp diễn: is being repaired",
          answer: "The main road is being repaired by the workers right now.",
          alternatives: ["The main road is being repaired right now."]
        },
        {
          sentence: "Somebody stole his bicycle yesterday afternoon. (stolen)",
          hint: "Bị động Quá khứ đơn, bỏ by somebody",
          answer: "His bicycle was stolen yesterday afternoon."
        },
        {
          sentence: "Chef Nam was preparing dinner when the guests arrived. (being)",
          hint: "Bị động Quá khứ tiếp diễn: Dinner was being prepared...",
          answer: "Dinner was being prepared by Chef Nam when the guests arrived."
        }
      ],
      review: [
        { sentence: "If I ___ (be) you, I would take that course immediately.", answer: "were", hint: "Ôn tập Câu điều kiện Loại 2" },
        { sentence: "Unless it ___ (stop) raining, the match will be postponed.", answer: "stops", hint: "Ôn tập Câu điều kiện Loại 1 với Unless" },
        { sentence: "You ___ (mustn't / don't have to) touch those bare wires. It's dangerous!", answer: "mustn't", hint: "Ôn tập Động từ khuyết thiếu chỉ sự cấm đoán" },
        { sentence: "___ he had a bad cold, he still finished his presentation.", answer: "Although", hint: "Ôn tập Liên từ chỉ sự nhượng bộ" },
        { sentence: "We ___ (know) each other for more than seven years.", answer: "have known", hint: "Ôn tập Hiện tại hoàn thành với for" }
      ]
    }
  },

  // ==================== DAY 17 ====================
  {
    day: 17,
    id: "day-17",
    cefr: "A2+",
    stage: 3,
    stageName: "A2+ Intermediate Bridge",
    isExam: false,
    estimatedMinutes: 25,
    title: "Thể bị động: Hiện tại hoàn thành, Tương lai & Modal Verbs",
    titleEn: "Passive Voice with Present Perfect, Future & Modals",
    dailyGoal: "Vận dụng thành thạo cấu trúc bị động với Hiện tại hoàn thành (have/has been V3), Tương lai đơn (will be V3) và Động từ khuyết thiếu (modal + be + V3).",
    vocab: [
      { en: "announce", pos: "v", ipa: "/əˈnaʊns/", vi: "công bố, thông báo", example: "The exam results will be announced next Monday." },
      { en: "postpone", pos: "v", ipa: "/poʊˈspoʊn/", vi: "hoãn lại", example: "The outdoor concert has been postponed due to the storm." },
      { en: "deliver", pos: "v", ipa: "/dɪˈlɪvər/", vi: "giao phát, chuyển đến", example: "Your package will be delivered tomorrow morning." },
      { en: "install", pos: "v", ipa: "/ɪnˈstɔːl/", vi: "lắp đặt, cài đặt", example: "Solar panels have been installed on the school roof." },
      { en: "approve", pos: "v", ipa: "/əˈpruːv/", vi: "phê duyệt, chấp thuận", example: "The new green project has just been approved." },
      { en: "organize", pos: "v", ipa: "/ˈɔːrɡənaɪz/", vi: "tổ chức", example: "A charity run is going to be organized next Sunday." },
      { en: "publish", pos: "v", ipa: "/ˈpʌblɪʃ/", vi: "xuất bản", example: "Her new novel will be published in December." },
      { en: "submit", pos: "v", ipa: "/səbˈmɪt/", vi: "nộp (bài, hồ sơ)", example: "All assignments must be submitted before Friday." },
      { en: "fine", pos: "v", ipa: "/faɪn/", vi: "phạt tiền", example: "Drivers without helmets can be fined heavily." },
      { en: "upgrade", pos: "v", ipa: "/ˌʌpˈɡreɪd/", vi: "nâng cấp", example: "The computer lab has been upgraded recently." },
      { en: "complete", pos: "v", ipa: "/kəmˈpliːt/", vi: "hoàn thành", example: "The metro line will be completed next year." },
      { en: "store", pos: "v", ipa: "/stɔːr/", vi: "bảo quản, lưu trữ", example: "Medicine should be stored in a cool, dry place." },
      { en: "replace", pos: "v", ipa: "/rɪˈpleɪs/", vi: "thay thế", example: "Old streetlights have been replaced with LED bulbs." },
      { en: "ban", pos: "v", ipa: "/bæn/", vi: "cấm", example: "Single-use plastic bags should be banned in supermarkets." }
    ],
    grammar: {
      point: "THỂ BỊ ĐỘNG: HIỆN TẠI HOÀN THÀNH, TƯƠNG LAI & MODAL VERBS",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Bị động Thì Hiện tại hoàn thành (Present Perfect Passive)</div>
          <b>• Khẳng định (+):</b> <code>S + have / has + BEEN + V3/ed</code><br/>
          <b>• Phủ định (-):</b> <code>S + haven't / hasn't + BEEN + V3/ed</code><br/>
          <b>• Nghi vấn (?):</b> <code>Have / Has + S + BEEN + V3/ed?</code><br/>
          <i>Ví dụ: Three new schools <b>have been built</b> in this district since 2022.</i>
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Bị động Tương lai & Động từ khuyết thiếu (Future & Modals)</div>
          <b>• Tương lai đơn (Will):</b> <code>S + will + BE + V3/ed</code> (Phủ định: <code>won't be + V3/ed</code>)<br/>
          <b>• Tương lai gần (Be going to):</b> <code>S + am/is/are + going to + BE + V3/ed</code><br/>
          <b>• Modal Verbs (can, could, should, must, have to, may, might):</b><br/>
          <code>S + Modal Verb + BE + V3/ed</code><br/>
          <i>Ví dụ: Traffic rules <b>must be obeyed</b> by everyone. / The report <b>will be sent</b> tomorrow.</i>
        </div>
      `,
      examples: [
        "<b>Hiện tại hoàn thành:</b> My bike <b>has just been repaired</b> by my father.",
        "<b>Tương lai đơn:</b> The winners <b>will be announced</b> at the closing ceremony.",
        "<b>Modal Verbs:</b> Smartphones <b>must not be used</b> in the examination room."
      ],
      commonMistake: {
        wrong: "The assignment must finished before 5 PM.",
        right: "The assignment **must be finished** before 5 PM.",
        note: "Sau Động từ khuyết thiếu (must, should, can, will) ở thể bị động BẮT BUỘC phải có 'be' nguyên thể + V3/ed!"
      },
      memoryTip: "Nhớ quy tắc 3 chữ: Hoàn thành thêm 'BEEN' (have been V3), Tương lai & Khuyết thiếu thêm 'BE' (will/must be V3)!"
    },
    dialogue: {
      titleVi: "Tình huống: Họp bàn chuẩn bị Ngày hội Khoa học & Môi trường tại trường",
      lines: [
        { speaker: "Teacher", en: "Good morning class! Let's check the preparations for our Green Science Fair.", vi: "Chào cả lớp! Hãy cùng kiểm tra công tác chuẩn bị cho Ngày hội Khoa học Xanh nhé." },
        { speaker: "An", en: "Have the invitations been sent to the parents yet?", vi: "Thiệp mời đã được gửi tới các bậc phụ huynh chưa ạ?" },
        { speaker: "Teacher", en: "Yes, all invitations have already been emailed this morning.", vi: "Rồi em, toàn bộ thiệp mời đã được gửi qua email sáng nay." },
        { speaker: "Mai", en: "Where will the robotics models be displayed tomorrow?", vi: "Các mô hình robot sẽ được trưng bày ở đâu vào ngày mai ạ?" },
        { speaker: "Teacher", en: "They will be placed in the main hall. The stage is going to be set up this afternoon.", vi: "Chúng sẽ được đặt ở hội trường chính. Sân khấu dự kiến sẽ được dựng vào chiều nay." },
        { speaker: "An", en: "Should recyclable bins be put at every corner of the schoolyard?", vi: "Các thùng rác tái chế có nên được đặt ở mọi góc sân trường không ạ?" },
        { speaker: "Teacher", en: "Definitely! And remember, all posters must be completed before 4 PM today.", vi: "Chắc chắn rồi! Và nhớ rằng tất cả áp phích phải được hoàn thành trước 4 giờ chiều nay nhé." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "The final exam results ___ on the school website tomorrow morning.", options: ["will announce", "will be announced", "have announced"], answer: "will be announced" },
        { q: "All library books must ___ before the end of the semester.", options: ["return", "be returned", "been returned"], answer: "be returned" },
        { q: "Three new solar stations ___ in our province since last year.", options: ["have been built", "have built", "will be built"], answer: "have been built" },
        { q: "This medicine should ___ in a cool place away from children.", options: ["keep", "be kept", "have kept"], answer: "be kept" },
        { q: "The football match ___ because of the heavy thunderstorm.", options: ["has been postponed", "has postponed", "postponed"], answer: "has been postponed" },
        { q: "A new hospital is going to ___ in this town next year.", options: ["construct", "be constructed", "constructed"], answer: "be constructed" },
        { q: "Can this broken laptop ___ by the technician today?", options: ["fix", "be fixed", "been fixed"], answer: "be fixed" },
        { q: "___ the parcels ___ to the customers yet?", options: ["Have / been delivered", "Have / delivered", "Will / delivered"], answer: "Have / been delivered" },
        { q: "Single-use plastics should ___ to protect marine life.", options: ["reduce", "be reduced", "been reduced"], answer: "be reduced" },
        { q: "A welcome party ___ for the exchange students next Friday.", options: ["will hold", "will be held", "has held"], answer: "will be held" }
      ],
      fillBlank: [
        { sentence: "The new metro line ___ (complete) next December.", answer: "will be completed", hint: "bị động tương lai đơn (will be + V3)" },
        { sentence: "All application forms must ___ (submit) before Friday.", answer: "be submitted", hint: "bị động với must (be + V3)" },
        { sentence: "Hundreds of trees ___ already ___ (plant) along the river.", answer: "have been planted", hint: "bị động hiện tại hoàn thành số nhiều" },
        { sentence: "This problem can ___ (solve) easily if we work together.", answer: "be solved", hint: "bị động với can (be + V3)" },
        { sentence: "My smartphone ___ (not / repair) yet.", answer: "has not been repaired", hint: "bị động hiện tại hoàn thành phủ định" },
        { sentence: "Helmets have to ___ (wear) by all motorbike riders.", answer: "be worn", hint: "bị động với have to (be + V3 của wear)" },
        { sentence: "A charity concert is going to ___ (organize) next month.", answer: "be organized", alternatives: ["be organised"], hint: "bị động tương lai gần (be + V3)" },
        { sentence: "Fresh water should ___ (save) every single day.", answer: "be saved", hint: "bị động với should (be + V3)" }
      ],
      sentenceBuild: [
        { words: ["The", "report", "will", "be", "finished", "tomorrow", "."], answer: "The report will be finished tomorrow ." },
        { words: ["Traffic", "rules", "must", "be", "obeyed", "strictly", "."], answer: "Traffic rules must be obeyed strictly ." },
        { words: ["My", "bike", "has", "just", "been", "repaired", "."], answer: "My bike has just been repaired ." },
        { words: ["This", "medicine", "should", "be", "kept", "in", "a", "cool", "place", "."], answer: "This medicine should be kept in a cool place ." },
        { words: ["Have", "the", "invitations", "been", "sent", "yet", "?"], answer: "Have the invitations been sent yet ?" },
        { words: ["A", "new", "bridge", "is", "going", "to", "be", "built", "here", "."], answer: "A new bridge is going to be built here ." },
        { words: ["Plastic", "bags", "should", "be", "banned", "in", "supermarkets", "."], answer: "Plastic bags should be banned in supermarkets ." }
      ],
      transformation: [
        {
          sentence: "They will announce the exam results tomorrow. (be)",
          hint: "Chuyển sang bị động Tương lai đơn: The exam results will be announced...",
          answer: "The exam results will be announced tomorrow."
        },
        {
          sentence: "Students must wear uniforms at school. (worn)",
          hint: "Chuyển sang bị động với must: Uniforms must be worn...",
          answer: "Uniforms must be worn by students at school.",
          alternatives: ["Uniforms must be worn at school.", "Uniforms must be worn at school by students."]
        },
        {
          sentence: "Somebody has cleaned the kitchen already. (been)",
          hint: "Chuyển sang bị động Hiện tại hoàn thành: The kitchen has already been cleaned",
          answer: "The kitchen has been cleaned already.",
          alternatives: ["The kitchen has already been cleaned."]
        },
        {
          sentence: "We should protect endangered animals. (protected)",
          hint: "Chuyển sang bị động với should: Endangered animals should be protected",
          answer: "Endangered animals should be protected."
        },
        {
          sentence: "They are going to build a new library next year. (built)",
          hint: "Chuyển sang bị động với be going to: A new library is going to be built...",
          answer: "A new library is going to be built next year."
        }
      ],
      review: [
        { sentence: "This ancient temple ___ (build) in the 15th century.", answer: "was built", hint: "Ôn tập Bị động quá khứ đơn" },
        { sentence: "Look! The street ___ (decorate) with colorful flags right now.", answer: "is being decorated", hint: "Ôn tập Bị động hiện tại tiếp diễn" },
        { sentence: "If I had more free time, I ___ (learn) to play the cello.", answer: "would learn", hint: "Ôn tập Câu điều kiện Loại 2" },
        { sentence: "She is ___ (good) at English than her brother.", answer: "better", hint: "Ôn tập So sánh hơn bất quy tắc" },
        { sentence: "You like watching documentaries, ___ you?", answer: "don't", hint: "Ôn tập Câu hỏi đuôi" }
      ]
    }
  },

  // ==================== DAY 18 ====================
  {
    day: 18,
    id: "day-18",
    cefr: "A2+",
    stage: 3,
    stageName: "A2+ Intermediate Bridge",
    isExam: false,
    estimatedMinutes: 25,
    title: "Câu tường thuật (Reported Speech): Dạng Câu kể",
    titleEn: "Reported Speech: Statements & Tense Backshift",
    dailyGoal: "Nắm vững 3 quy tắc vàng khi chuyển câu trực tiếp sang câu gián tiếp dạng câu kể: đổi ngôi đại từ, lùi thì động từ và đổi trạng từ chỉ thời gian/nơi chốn.",
    vocab: [
      { en: "report", pos: "v", ipa: "/rɪˈpɔːrt/", vi: "tường thuật, báo cáo lại", example: "The journalist reported what the scientist had said." },
      { en: "statement", pos: "n", ipa: "/ˈsteɪtmənt/", vi: "câu kể, lời phát biểu", example: "In reported statements, we shift the verb tense back." },
      { en: "mention", pos: "v", ipa: "/ˈmenʃn/", vi: "đề cập, nhắc đến", example: "She mentioned that she was moving to Da Nang." },
      { en: "explain", pos: "v", ipa: "/ɪkˈspleɪn/", vi: "giải thích", example: "The teacher explained that the Earth orbits the sun." },
      { en: "inform", pos: "v", ipa: "/ɪnˈfɔːrm/", vi: "thông báo cho ai", example: "He informed us that the meeting had been delayed." },
      { en: "reply", pos: "v", ipa: "/rɪˈplaɪ/", vi: "trả lời, đáp lại", example: "Mary replied that she would help us the following day." },
      { en: "complain", pos: "v", ipa: "/kəmˈpleɪn/", vi: "phàn nàn", example: "He complained that the soup was too salty." },
      { en: "admit", pos: "v", ipa: "/ədˈmɪt/", vi: "thừa nhận", example: "Tom admitted that he had broken the vase." },
      { en: "backshift", pos: "n", ipa: "/ˈbækʃɪft/", vi: "sự lùi thì", example: "Tense backshift happens when the reporting verb is in the past." },
      { en: "quotation marks", pos: "n phr", ipa: "/kwoʊˈteɪʃn mɑːrks/", vi: "dấu ngoặc kép", example: "Remove the quotation marks in indirect speech." },
      { en: "previous", pos: "adj", ipa: "/ˈpriːviəs/", vi: "trước đó", example: "'Yesterday' changes to 'the previous day'." },
      { en: "following", pos: "adj", ipa: "/ˈfɑːloʊɪŋ/", vi: "tiếp theo, kế tiếp", example: "'Tomorrow' changes to 'the following day'." },
      { en: "scholarship", pos: "n", ipa: "/ˈskɑːlərʃɪp/", vi: "học bổng", example: "Lan said that she had won a full scholarship." },
      { en: "conference", pos: "n", ipa: "/ˈkɑːnfərəns/", vi: "hội nghị, hội thảo", example: "Dr. Minh said he was attending a science conference." }
    ],
    grammar: {
      point: "CÂU TƯỜNG THUẬT DẠNG CÂU KỂ (REPORTED STATEMENTS)",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Công thức chung & Phân biệt SAY / TELL</div>
          <b>• Dùng SAID:</b> <code>S + said + (that) + S + V(lùi thì)</code> (hoặc <code>said to sb</code>)<br/>
          <b>• Dùng TOLD (bắt buộc có tân ngữ chỉ người):</b> <code>S + told + O + (that) + S + V(lùi thì)</code><br/>
          <b>• Quy tắc LÙI THÌ (Tense Backshift):</b><br/>
          &nbsp;&nbsp;- Hiện tại đơn (V/Vs) ➔ <b>Quá khứ đơn (V2/ed)</b><br/>
          &nbsp;&nbsp;- Hiện tại tiếp diễn (am/is/are V-ing) ➔ <b>Quá khứ tiếp diễn (was/were V-ing)</b><br/>
          &nbsp;&nbsp;- Quá khứ đơn / Hiện tại hoàn thành ➔ <b>Quá khứ hoàn thành (had + V3/ed)</b><br/>
          &nbsp;&nbsp;- will / can / may ➔ <b>would / could / might</b> | must / have to ➔ <b>had to</b>
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Bảng đổi Trạng từ Thời gian & Nơi chốn</div>
          • <code>now</code> ➔ <b>then</b> | <code>today / tonight</code> ➔ <b>that day / that night</b><br/>
          • <code>tomorrow</code> ➔ <b>the next day / the following day</b><br/>
          • <code>yesterday</code> ➔ <b>the day before / the previous day</b><br/>
          • <code>next week</code> ➔ <b>the following week</b> | <code>last week</code> ➔ <b>the previous week</b><br/>
          • <code>here</code> ➔ <b>there</b> | <code>this / these</code> ➔ <b>that / those</b>
        </div>
      `,
      examples: [
        "Direct: Nam said, \"I <b>am learning</b> coding <b>now</b>.\" ➔ Nam said (that) he <b>was learning</b> coding <b>then</b>.",
        "Direct: She said to me, \"I <b>will call</b> you <b>tomorrow</b>.\" ➔ She <b>told me</b> (that) she <b>would call</b> me <b>the next day</b>.",
        "Direct: \"We <b>visited</b> Hue <b>last summer</b>,\" they said. ➔ They said they <b>had visited</b> Hue <b>the previous summer</b>."
      ],
      commonMistake: {
        wrong: "She told that she was very busy that day.",
        right: "She **said** that she was very busy that day. (OR: She **told me** that...)",
        note: "Sau 'told' BẮT BUỘC phải có tân ngữ chỉ người (told me, told him, told us). Nếu không có tân ngữ, phải dùng 'said'!"
      },
      memoryTip: "Quy tắc 3 ĐỔI khi tường thuật: (1) Đổi NGÔI theo người nói/nghe, (2) LÙI 1 THÌ về quá khứ, (3) Đổi TRẠNG TỪ thời gian/nơi chốn."
    },
    dialogue: {
      titleVi: "Tình huống: Kể lại thông báo của giáo viên chủ nhiệm cho bạn nghỉ ốm",
      lines: [
        { speaker: "Hoa", en: "Hi Minh! You were absent this morning. Are you feeling better now?", vi: "Chào Minh! Sáng nay cậu nghỉ học. Giờ cậu đã thấy đỡ hơn chưa?" },
        { speaker: "Minh", en: "Yes, thank you. What did Mrs. Lan say in class today?", vi: "Mình đỡ rồi, cảm ơn cậu. Hôm nay cô Lan đã nói gì trên lớp thế?" },
        { speaker: "Hoa", en: "She told us that our class would visit the National Museum the following week.", vi: "Cô bảo tụi mình rằng lớp sẽ đi tham quan Bảo tàng Quốc gia vào tuần tới." },
        { speaker: "Minh", en: "That's exciting! Did she mention anything about the science project?", vi: "Thú vị quá! Cô có nhắc gì đến dự án khoa học không?" },
        { speaker: "Hoa", en: "Yes. She said that we had to submit our group reports by Friday.", vi: "Có đấy. Cô nói rằng tụi mình phải nộp báo cáo nhóm trước thứ Sáu." },
        { speaker: "Minh", en: "And what about Nam? Did he give you my notebook?", vi: "Thế còn Nam thì sao? Cậu ấy có đưa vở cho mình không?" },
        { speaker: "Hoa", en: "Nam said that he was copying the math notes for you and would bring them to your house tonight.", vi: "Nam nói rằng cậu ấy đang chép bài Toán giúp cậu và sẽ mang qua nhà cậu tối nay." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "She said that she ___ very fond of traditional music.", options: ["is", "was", "will be"], answer: "was" },
        { q: "Tom told me that he ___ his grandparents the following weekend.", options: ["will visit", "would visit", "visited"], answer: "would visit" },
        { q: "Mai said, \"I am doing my homework now.\" ➔ Mai said she ___ her homework ___.", options: ["was doing / then", "is doing / now", "did / then"], answer: "was doing / then" },
        { q: "He ___ me that he couldn't attend the meeting that night.", options: ["said", "told", "spoke"], answer: "told" },
        { q: "They said that they ___ in that neighborhood for ten years.", options: ["live", "had lived", "have lived"], answer: "had lived" },
        { q: "Lan said she had bought a new dictionary ___.", options: ["yesterday", "the day before", "tomorrow"], answer: "the day before" },
        { q: "My brother said that he ___ swim across the river.", options: ["can", "could", "may"], answer: "could" },
        { q: "The doctor told him that he ___ take the medicine twice a day.", options: ["must", "had to", "has to"], answer: "had to" },
        { q: "Peter said, \"I don't like horror movies.\" ➔ Peter said he ___ horror movies.", options: ["doesn't like", "didn't like", "hadn't liked"], answer: "didn't like" },
        { q: "She told us she was leaving for London ___.", options: ["next week", "the following week", "last week"], answer: "the following week" }
      ],
      fillBlank: [
        { sentence: "He said that he ___ (want) to become a software engineer.", answer: "wanted", hint: "lùi thì hiện tại đơn ➔ quá khứ đơn" },
        { sentence: "Mary told me that she ___ (study) for her exam then.", answer: "was studying", hint: "lùi thì hiện tại tiếp diễn ➔ quá khứ tiếp diễn" },
        { sentence: "They said they ___ (will) help us clean the beach the next day.", answer: "would", hint: "lùi will ➔ would" },
        { sentence: "Nam said that he ___ (cannot) find his student card.", answer: "could not", hint: "lùi can not ➔ could not" },
        { sentence: "She said to me, \"I must go now.\" ➔ She told me she ___ (have to) go then.", answer: "had to", hint: "lùi must/have to ➔ had to" },
        { sentence: "He told us that he ___ (finish) the project the day before.", answer: "had finished", alternatives: ["finished"], hint: "lùi quá khứ đơn ➔ quá khứ hoàn thành" },
        { sentence: "My mom said she was busy ___ (today).", answer: "that day", hint: "đổi trạng từ today ➔ that day" },
        { sentence: "She ___ (tell / say) her parents that she had passed the test.", answer: "told", hint: "có tân ngữ her parents nên dùng told" }
      ],
      sentenceBuild: [
        { words: ["She", "said", "that", "she", "liked", "learning", "English", "."], answer: "She said that she liked learning English ." },
        { words: ["He", "told", "me", "that", "he", "was", "busy", "then", "."], answer: "He told me that he was busy then ." },
        { words: ["They", "said", "they", "would", "arrive", "the", "next", "day", "."], answer: "They said they would arrive the next day ." },
        { words: ["Lan", "said", "that", "she", "could", "play", "the", "piano", "."], answer: "Lan said that she could play the piano ." },
        { words: ["He", "told", "us", "that", "he", "had", "to", "leave", "early", "."], answer: "He told us that he had to leave early ." },
        { words: ["She", "said", "she", "was", "reading", "that", "book", "then", "."], answer: "She said she was reading that book then ." },
        { words: ["My", "dad", "said", "he", "had", "visited", "Hue", "before", "."], answer: "My dad said he had visited Hue before ." }
      ],
      transformation: [
        {
          sentence: "Nam said, \"I am very busy today.\" (that)",
          hint: "Đổi I ➔ he, am ➔ was, today ➔ that day",
          answer: "Nam said that he was very busy that day.",
          alternatives: ["Nam said he was very busy that day."]
        },
        {
          sentence: "She said to me, \"I will call you tomorrow.\" (told)",
          hint: "Đổi said to me ➔ told me, will ➔ would, you ➔ me, tomorrow ➔ the next day",
          answer: "She told me that she would call me the next day.",
          alternatives: [
            "She told me she would call me the next day.",
            "She told me that she would call me the following day.",
            "She told me she would call me the following day."
          ]
        },
        {
          sentence: "Mary said, \"I am learning to play the guitar now.\" (then)",
          hint: "Lùi am learning ➔ was learning, now ➔ then",
          answer: "Mary said that she was learning to play the guitar then.",
          alternatives: ["Mary said she was learning to play the guitar then."]
        },
        {
          sentence: "He said, \"I can't swim very well.\" (could)",
          hint: "Lùi can't ➔ couldn't / could not",
          answer: "He said that he couldn't swim very well.",
          alternatives: ["He said he couldn't swim very well.", "He said that he could not swim very well."]
        },
        {
          sentence: "They said, \"We must finish this report today.\" (had)",
          hint: "Đổi We ➔ they, must ➔ had to, this ➔ that, today ➔ that day",
          answer: "They said that they had to finish that report that day.",
          alternatives: ["They said they had to finish that report that day."]
        }
      ],
      review: [
        { sentence: "The winners ___ (announce) at the ceremony tomorrow.", answer: "will be announced", hint: "Ôn tập Bị động tương lai đơn" },
        { sentence: "All phones must ___ (turn) off during the flight.", answer: "be turned", hint: "Ôn tập Bị động với động từ khuyết thiếu" },
        { sentence: "This bridge ___ (construct) by French engineers in 1902.", answer: "was constructed", hint: "Ôn tập Bị động quá khứ đơn" },
        { sentence: "If I ___ (know) her phone number, I would text her right now.", answer: "knew", hint: "Ôn tập Câu điều kiện Loại 2" },
        { sentence: "Do you fancy ___ (watch) a documentary tonight?", answer: "watching", hint: "Ôn tập Động từ chỉ sở thích" }
      ]
    }
  },

  // ==================== DAY 19 ====================
  {
    day: 19,
    id: "day-19",
    cefr: "A2+",
    stage: 3,
    stageName: "A2+ Intermediate Bridge",
    isExam: false,
    estimatedMinutes: 25,
    title: "Câu tường thuật (Reported Speech): Câu hỏi Yes/No & Wh-",
    titleEn: "Reported Speech: Yes/No & Wh- Questions",
    dailyGoal: "Tường thuật chính xác câu hỏi Yes/No (dùng if/whether) và câu hỏi Wh- bằng cách đưa trật tự câu về dạng khẳng định (S + V lùi thì) và bỏ trợ động từ do/does/did.",
    vocab: [
      { en: "inquire", pos: "v", ipa: "/ɪnˈkwaɪər/", vi: "hỏi thăm, tìm hiểu thông tin", example: "The tourist inquired where the nearest metro station was." },
      { en: "wonder", pos: "v", ipa: "/ˈwʌndər/", vi: "tự hỏi, băn khoăn", example: "She wondered whether she had locked the front door." },
      { en: "whether", pos: "conj", ipa: "/ˈweðər/", vi: "liệu rằng (dùng trong câu hỏi gián tiếp)", example: "He asked me whether I liked spicy food." },
      { en: "interview", pos: "v", ipa: "/ˈɪntərvjuː/", vi: "phỏng vấn", example: "The manager interviewed her and asked about her experience." },
      { en: "candidate", pos: "n", ipa: "/ˈkændɪdət/", vi: "ứng viên", example: "They asked the candidate why he wanted the job." },
      { en: "curious", pos: "adj", ipa: "/ˈkjʊriəs/", vi: "tò mò, hiếu kỳ", example: "The children were curious about how planes fly." },
      { en: "questionnaire", pos: "n", ipa: "/ˌkwestʃəˈner/", vi: "bảng câu hỏi khảo sát", example: "Students filled out a questionnaire about study habits." },
      { en: "survey", pos: "n", ipa: "/ˈsɜːrveɪ/", vi: "cuộc khảo sát", example: "The survey asked how many hours we slept each night." },
      { en: "word order", pos: "n phr", ipa: "/wɜːrd ˈɔːrdər/", vi: "trật tự từ", example: "Reported questions use statement word order (S + V)." },
      { en: "auxiliary verb", pos: "n phr", ipa: "/ɔːɡˈzɪliəri vɜːrb/", vi: "trợ động từ (do, does, did)", example: "Drop the auxiliary verb 'do/does/did' in reported questions." },
      { en: "abroad", pos: "adv", ipa: "/əˈbrɔːd/", vi: "ở nước ngoài", example: "She asked me if I planned to study abroad." },
      { en: "tuition fee", pos: "n phr", ipa: "/tuˈɪʃn fiː/", vi: "học phí", example: "My parents asked how much the tuition fee was." },
      { en: "accommodation", pos: "n", ipa: "/əˌkɑːməˈdeɪʃn/", vi: "chỗ ăn ở", example: "He asked where he could find cheap accommodation." },
      { en: "deadline", pos: "n", ipa: "/ˈdedlaɪn/", vi: "hạn chót", example: "Minh asked the teacher when the project deadline was." }
    ],
    grammar: {
      point: "CÂU TƯỜNG THUẬT DẠNG CÂU HỎI (REPORTED QUESTIONS)",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Câu hỏi Yes/No (Dùng IF hoặc WHETHER)</div>
          <b>• Công thức:</b> <code>S + asked (+ O) / wondered / wanted to know + IF / WHETHER + S + V(lùi thì)</code><br/>
          <b>• Lưu ý cực kỳ quan trọng:</b><br/>
          &nbsp;&nbsp;1. BỎ trợ động từ <code>do / does / did</code> và BỎ dấu hỏi chấm <code>?</code>.<br/>
          &nbsp;&nbsp;2. Đưa động từ về sau chủ ngữ như câu kể bình thường (<code>S + V</code>, KHÔNG đảo ngữ!).<br/>
          <i>Ví dụ: "Do you like coffee?" ➔ She asked me <b>if I liked</b> coffee.</i>
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Câu hỏi có từ để hỏi Wh- (What, Where, When, Why, How...)</div>
          <b>• Công thức:</b> <code>S + asked (+ O) / wanted to know + Wh-word + S + V(lùi thì)</code><br/>
          <b>• Lưu ý:</b> Giữ nguyên từ để hỏi <code>Wh-</code>, sau đó đến <code>S + V(lùi thì)</code> (tuyệt đối KHÔNG đảo to be hay trợ động từ lên trước chủ ngữ!).<br/>
          <i>Ví dụ: "Where are you going?" ➔ He asked me <b>where I was going</b>. (KHÔNG viết where was I going)</i>
        </div>
      `,
      examples: [
        "<b>Yes/No Question:</b> \"Are you ready for the trip?\" ➔ Nam asked me <b>if I was</b> ready for the trip.",
        "<b>Wh- Question với do/did:</b> \"Where do you live?\" ➔ She asked me <b>where I lived</b>.",
        "<b>Wh- Question với to be/modal:</b> \"What time will the train leave?\" ➔ He asked <b>what time the train would leave</b>."
      ],
      commonMistake: {
        wrong: "She asked me where did I live and what was my name.",
        right: "She asked me **where I lived** and **what my name was**.",
        note: "Câu hỏi tường thuật KHÔNG còn là câu hỏi trực tiếp nên tuyệt đối KHÔNG dùng trợ động từ 'did' và KHÔNG đảo 'was' lên trước chủ ngữ!"
      },
      memoryTip: "Tường thuật câu hỏi = Giữ IF/WH- + Xuôi dòng (S trước, V lùi thì sau) + Bỏ dấu hỏi chấm!"
    },
    dialogue: {
      titleVi: "Tình huống: Kể lại buổi phỏng vấn vào Câu lạc bộ Tiếng Anh của trường",
      lines: [
        { speaker: "Linh", en: "How was your interview for the English Speaking Club, Phong?", vi: "Buổi phỏng vấn vào CLB Nói tiếng Anh của cậu thế nào rồi Phong?" },
        { speaker: "Phong", en: "It went well, though I was a bit nervous at first!", vi: "Khá suôn sẻ, dù lúc đầu mình hơi hồi hộp một chút!" },
        { speaker: "Linh", en: "What did the club president ask you?", vi: "Chủ nhiệm câu lạc bộ đã hỏi cậu những gì thế?" },
        { speaker: "Phong", en: "First, she asked me why I wanted to join the club.", vi: "Đầu tiên, chị ấy hỏi mình tại sao mình lại muốn tham gia câu lạc bộ." },
        { speaker: "Linh", en: "Did she ask if you had any experience in public speaking?", vi: "Chị ấy có hỏi liệu cậu đã có kinh nghiệm thuyết trình trước đám đông chưa không?" },
        { speaker: "Phong", en: "Yes! She asked whether I had ever taken part in an English debate.", vi: "Có chứ! Chị ấy hỏi liệu mình đã từng tham gia một cuộc tranh biện tiếng Anh nào chưa." },
        { speaker: "Linh", en: "And what was the last question?", vi: "Thế còn câu hỏi cuối cùng là gì?" },
        { speaker: "Phong", en: "She asked me how many hours a week I could spend on club activities.", vi: "Chị ấy hỏi mình có thể dành bao nhiêu giờ mỗi tuần cho các hoạt động của CLB." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "She asked me ___ I liked watching science fiction movies.", options: ["if", "that", "what"], answer: "if" },
        { q: "He asked me where I ___ the previous summer.", options: ["went", "had gone", "did go"], answer: "had gone" },
        { q: "The teacher asked Nam why he ___ late for class that morning.", options: ["was", "is", "were"], answer: "was" },
        { q: "Mary asked me, \"Do you speak French?\" ➔ Mary asked me if I ___ French.", options: ["speak", "spoke", "did speak"], answer: "spoke" },
        { q: "They wanted to know what time the museum ___.", options: ["opened", "did open", "opens"], answer: "opened" },
        { q: "My mom asked me ___ I had finished my homework yet.", options: ["whether", "that", "which"], answer: "whether" },
        { q: "He asked her, \"Where are you going?\" ➔ He asked her where ___.", options: ["was she going", "she was going", "she is going"], answer: "she was going" },
        { q: "The tourist asked how far ___ from the hotel to the beach.", options: ["it was", "was it", "it is"], answer: "it was" },
        { q: "She asked me if I ___ help her with the presentation the next day.", options: ["can", "will", "could"], answer: "could" },
        { q: "Tom asked his friend, \"How much did you pay for this jacket?\" ➔ Tom asked how much ___ for that jacket.", options: ["he had paid", "did he pay", "had he paid"], answer: "he had paid" }
      ],
      fillBlank: [
        { sentence: "She asked me ___ (if / that) I knew the way to the post office.", answer: "if", alternatives: ["whether"], hint: "tường thuật câu hỏi Yes/No dùng if hoặc whether" },
        { sentence: "He asked me where I ___ (live).", answer: "lived", hint: "bỏ do, lùi live ➔ lived" },
        { sentence: "The interviewer asked her why she ___ (want) that job.", answer: "wanted", hint: "lùi hiện tại đơn ➔ quá khứ đơn" },
        { sentence: "My father asked me if I ___ (be) ready for the exam.", answer: "was", hint: "lùi to be theo chủ ngữ I ➔ was" },
        { sentence: "They asked us what time the train ___ (will) arrive.", answer: "would", hint: "lùi will ➔ would" },
        { sentence: "Lan asked me how long I ___ (learn) English.", answer: "had learned", alternatives: ["had learnt", "had been learning"], hint: "lùi hiện tại hoàn thành ➔ quá khứ hoàn thành" },
        { sentence: "He asked me whether I ___ (can) swim.", answer: "could", hint: "lùi can ➔ could" },
        { sentence: "She asked me what ___ (be) my favorite subject. ➔ She asked me what my favorite subject ___.", answer: "was", hint: "đưa động từ to be (was) ra cuối sau chủ ngữ" }
      ],
      sentenceBuild: [
        { words: ["She", "asked", "me", "if", "I", "liked", "coffee", "."], answer: "She asked me if I liked coffee ." },
        { words: ["He", "asked", "me", "where", "I", "lived", "."], answer: "He asked me where I lived ." },
        { words: ["They", "asked", "what", "time", "the", "film", "started", "."], answer: "They asked what time the film started ." },
        { words: ["Mom", "asked", "if", "I", "had", "finished", "my", "homework", "."], answer: "Mom asked if I had finished my homework ." },
        { words: ["She", "wanted", "to", "know", "why", "he", "was", "late", "."], answer: "She wanted to know why he was late ." },
        { words: ["He", "asked", "whether", "I", "could", "help", "him", "."], answer: "He asked whether I could help him ." },
        { words: ["The", "teacher", "asked", "how", "old", "I", "was", "."], answer: "The teacher asked how old I was ." }
      ],
      transformation: [
        {
          sentence: "She asked me, \"Do you like pop music?\" (if)",
          hint: "Dùng if + S + V2/ed (bỏ trợ động từ Do)",
          answer: "She asked me if I liked pop music.",
          alternatives: ["She asked me whether I liked pop music."]
        },
        {
          sentence: "He asked her, \"Where do you live?\" (where)",
          hint: "Giữ where + she + lived (không dùng did)",
          answer: "He asked her where she lived."
        },
        {
          sentence: "The teacher asked us, \"Are you ready for the test?\" (whether)",
          hint: "Dùng whether + we + were ready...",
          answer: "The teacher asked us whether we were ready for the test.",
          alternatives: ["The teacher asked us if we were ready for the test."]
        },
        {
          sentence: "Nam asked Mai, \"What time will the concert start?\" (what)",
          hint: "Giữ what time + the concert + would start",
          answer: "Nam asked Mai what time the concert would start."
        },
        {
          sentence: "My mom asked me, \"Did you lock the front door?\" (if)",
          hint: "Lùi Quá khứ đơn (Did...lock) về Quá khứ hoàn thành (had locked)",
          answer: "My mom asked me if I had locked the front door.",
          alternatives: ["My mom asked me whether I had locked the front door."]
        }
      ],
      review: [
        { sentence: "He told me that he ___ (visit) his uncle the next day.", answer: "would visit", hint: "Ôn tập Câu tường thuật dạng câu kể" },
        { sentence: "These solar panels ___ (install) by the technicians last week.", answer: "were installed", hint: "Ôn tập Bị động quá khứ đơn" },
        { sentence: "All tickets ___ already ___ (sell) out.", answer: "have been sold", hint: "Ôn tập Bị động hiện tại hoàn thành" },
        { sentence: "Unless you ___ (wear) a warm coat, you will catch a cold.", answer: "wear", hint: "Ôn tập Câu điều kiện Loại 1" },
        { sentence: "Mount Everest is the ___ (high) mountain in the world.", answer: "highest", hint: "Ôn tập So sánh nhất" }
      ]
    }
  },

  // ==================== DAY 20 (STAGE 3 EXAM) ====================
  {
    day: 20,
    id: "day-20",
    cefr: "A2+",
    stage: 3,
    stageName: "A2+ Intermediate Bridge",
    isExam: true,
    estimatedMinutes: 30,
    title: "Bài thi Cột mốc 4: Thể Bị động & Câu Tường thuật",
    titleEn: "Stage 3 Milestone Exam: Passive Voice & Reported Speech",
    dailyGoal: "Kiểm tra toàn diện kỹ năng chuyển đổi Câu bị động ở mọi thì/modal verbs và Câu tường thuật (câu kể, câu hỏi Yes/No, câu hỏi Wh-).",
    vocab: [
      { en: "passive voice", pos: "n phr", ipa: "/ˈpæsɪv vɔɪs/", vi: "thể bị động", example: "Use the passive voice when the action is more important than the doer." },
      { en: "active voice", pos: "n phr", ipa: "/ˈæktɪv vɔɪs/", vi: "thể chủ động", example: "In the active voice, the subject performs the action." },
      { en: "reported speech", pos: "n phr", ipa: "/rɪˈpɔːrtɪd spiːtʃ/", vi: "lời nói gián tiếp (câu tường thuật)", example: "Pronouns and tenses often change in reported speech." },
      { en: "direct speech", pos: "n phr", ipa: "/daɪˈrekt spiːtʃ/", vi: "lời nói trực tiếp", example: "Direct speech is placed inside quotation marks." },
      { en: "agent", pos: "n", ipa: "/ˈeɪdʒənt/", vi: "tác nhân thực hiện hành động (sau by)", example: "Use 'by' to introduce the agent in a passive sentence." },
      { en: "broadcast", pos: "v", ipa: "/ˈbrɔːdkæst/", vi: "phát sóng", example: "The final match will be broadcast live tonight." },
      { en: "translate", pos: "v", ipa: "/trænzˈleɪt/", vi: "dịch thuật", example: "This poem has been translated into twenty languages." },
      { en: "renovate", pos: "v", ipa: "/ˈrenəveɪt/", vi: "cải tạo, nâng cấp", example: "The city library is being renovated this month." },
      { en: "confirm", pos: "v", ipa: "/kənˈfɜːrm/", vi: "xác nhận", example: "The airline confirmed that the flight was on time." },
      { en: "remind", pos: "v", ipa: "/rɪˈmaɪnd/", vi: "nhắc nhở", example: "She reminded me to bring my passport." },
      { en: "anniversary", pos: "n", ipa: "/ˌænɪˈvɜːrsəri/", vi: "lễ kỷ niệm", example: "A concert will be held on the school's anniversary." },
      { en: "exhibition", pos: "n", ipa: "/ˌeksɪˈbɪʃn/", vi: "cuộc triển lãm", example: "The robotics exhibition was opened yesterday." },
      { en: "sanctuary", pos: "n", ipa: "/ˈsæŋktʃueri/", vi: "khu bảo tồn, thánh địa", example: "My Son Sanctuary is preserved as a cultural heritage." },
      { en: "archaeologist", pos: "n", ipa: "/ˌɑːrkiˈɑːlədʒɪst/", vi: "nhà khảo cổ học", example: "Ancient coins were found by archaeologists." }
    ],
    grammar: {
      point: "TỔNG ÔN CỘT MỐC 4: MA TRẬN BỊ ĐỘNG & CÂU TƯỜNG THUẬT",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Tóm tắt Ma trận Thể Bị Động (Passive Voice: BE + V3/ed)</div>
          • <b>Hiện tại đơn:</b> <code>am/is/are + V3/ed</code> | <b>Quá khứ đơn:</b> <code>was/were + V3/ed</code><br/>
          • <b>Hiện tại / Quá khứ tiếp diễn:</b> <code>am/is/are / was/were + BEING + V3/ed</code><br/>
          • <b>Hiện tại hoàn thành:</b> <code>have/has + BEEN + V3/ed</code><br/>
          • <b>Tương lai & Modal Verbs:</b> <code>will / can / should / must / have to + BE + V3/ed</code>
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Tóm tắt Câu Tường Thuật (Reported Speech)</div>
          • <b>Câu kể (Statements):</b> <code>S + said / told O + (that) + S + V(lùi thì)</code><br/>
          • <b>Câu hỏi Yes/No:</b> <code>S + asked (+ O) + if / whether + S + V(lùi thì)</code> (Bỏ <i>do/does/did</i>, không đảo ngữ!)<br/>
          • <b>Câu hỏi Wh-:</b> <code>S + asked (+ O) + Wh-word + S + V(lùi thì)</code> (Không đảo ngữ!)
        </div>
      `,
      examples: [
        "<b>Passive:</b> Thousands of trees <b>have been planted</b> since the campaign <b>was launched</b>.",
        "<b>Reported Statement:</b> Lan <b>told me</b> that she <b>would submit</b> her essay <b>the next day</b>.",
        "<b>Reported Question:</b> He <b>asked me where I had bought</b> that dictionary."
      ],
      commonMistake: {
        wrong: "He asked me when will the package delivered.",
        right: "He asked me **when the package would be delivered**.",
        note: "Kết hợp cả Câu hỏi tường thuật và Bị động: không đảo 'would' lên trước chủ ngữ, và phải có 'be + delivered'!"
      },
      memoryTip: "Kiểm tra nhanh: Câu bị động luôn có BE + V3/ed. Câu hỏi tường thuật luôn theo trật tự xuôi (Từ nối + Chủ ngữ + Động từ lùi thì)."
    },
    dialogue: null,
    exercises: {
      multipleChoice: [
        { q: "The Temple of Literature ___ in 1070 under Emperor Ly Thanh Tong.", options: ["built", "was built", "has been built"], answer: "was built" },
        { q: "Look! The stage ___ for the music festival right now.", options: ["is setting up", "is being set up", "was set up"], answer: "is being set up" },
        { q: "Over five hundred books ___ into Braille for blind students since 2021.", options: ["have been translated", "were translated", "translated"], answer: "have been translated" },
        { q: "All passengers ___ to fasten their seatbelts before takeoff.", options: ["are required", "require", "were requiring"], answer: "are required" },
        { q: "The winners of the competition ___ next Monday morning.", options: ["will announce", "will be announced", "are announcing"], answer: "will be announced" },
        { q: "Mobile phones must ___ off in the examination room.", options: ["switch", "be switched", "been switched"], answer: "be switched" },
        { q: "While the roof ___, water leaked into the living room.", options: ["was being repaired", "was repairing", "repaired"], answer: "was being repaired" },
        { q: "Vietnamese pho ___ by food lovers all over the world.", options: ["enjoys", "is enjoyed", "was enjoying"], answer: "is enjoyed" },
        { q: "She ___ me that she was going to take an IELTS course.", options: ["said", "told", "asked"], answer: "told" },
        { q: "Nam said that he ___ his project the previous night.", options: ["finished", "had finished", "has finished"], answer: "had finished" },
        { q: "They told us they would visit Ha Long Bay ___.", options: ["tomorrow", "the following week", "next week"], answer: "the following week" },
        { q: "He asked me ___ I had ever tried rock climbing.", options: ["whether", "that", "what"], answer: "whether" },
        { q: "The teacher asked Lan why she ___ absent the day before.", options: ["had been", "has been", "is"], answer: "had been" },
        { q: "She asked me where ___ my summer vacation.", options: ["did I spend", "I spent", "spent I"], answer: "I spent" },
        { q: "Tom said, \"I must leave now.\" ➔ Tom said that he ___ leave then.", options: ["must", "had to", "has to"], answer: "had to" },
        { q: "My friend asked me how much ___.", options: ["did the ticket cost", "the ticket cost", "cost the ticket"], answer: "the ticket cost" },
        { q: "Can this form ___ online instead of on paper?", options: ["fill out", "be filled out", "filled out"], answer: "be filled out" },
        { q: "She asked me if I ___ speak Japanese.", options: ["can", "could", "will"], answer: "could" },
        { q: "A new sports center is going to ___ in our neighborhood.", options: ["open", "be opened", "opened"], answer: "be opened" },
        { q: "He wanted to know what time the library ___ on Sundays.", options: ["closed", "did close", "closes"], answer: "closed" }
      ],
      fillBlank: [
        { sentence: "Paper ___ (invent) in China around 105 AD.", answer: "was invented", hint: "bị động quá khứ đơn" },
        { sentence: "Thousands of bicycles ___ (produce) in this factory every month.", answer: "are produced", hint: "bị động hiện tại đơn số nhiều" },
        { sentence: "The main hall ___ (clean) at the moment, so we can't enter.", answer: "is being cleaned", hint: "bị động hiện tại tiếp diễn" },
        { sentence: "Three new bridges ___ (build) in our city since 2020.", answer: "have been built", hint: "bị động hiện tại hoàn thành" },
        { sentence: "The package ___ (deliver) to your house tomorrow afternoon.", answer: "will be delivered", hint: "bị động tương lai đơn" },
        { sentence: "Helmets must ___ (wear) when riding an electric bike.", answer: "be worn", hint: "bị động với must" },
        { sentence: "While the dinner ___ (prepare), the guests arrived.", answer: "was being prepared", hint: "bị động quá khứ tiếp diễn" },
        { sentence: "This song can ___ (sing) in both English and Vietnamese.", answer: "be sung", hint: "bị động với can (V3 của sing)" },
        { sentence: "She said that she ___ (be) very fond of gardening.", answer: "was", hint: "lùi thì to be trong câu tường thuật" },
        { sentence: "He told me that he ___ (will) call me the next day.", answer: "would", hint: "lùi will ➔ would" },
        { sentence: "They said they ___ (buy) a new apartment the previous month.", answer: "had bought", alternatives: ["bought"], hint: "lùi quá khứ đơn ➔ quá khứ hoàn thành" },
        { sentence: "Mai said she was reading an interesting novel ___ (now).", answer: "then", hint: "đổi now ➔ then" },
        { sentence: "He asked me ___ (if / that) I wanted to join the chess club.", answer: "if", alternatives: ["whether"], hint: "tường thuật câu hỏi Yes/No" },
        { sentence: "She asked me where I ___ (work).", answer: "worked", hint: "tường thuật câu hỏi Wh- (lùi thì)" },
        { sentence: "The tourist asked how far it ___ (be) to the train station.", answer: "was", hint: "lùi is ➔ was sau chủ ngữ it" },
        { sentence: "Nam told us that he ___ (cannot) attend the party that night.", answer: "could not", hint: "lùi can not ➔ could not" },
        { sentence: "She asked me what time the flight ___ (leave).", answer: "left", alternatives: ["would leave"], hint: "lùi leave ➔ left" },
        { sentence: "He ___ (tell) his mother that he had won the first prize.", answer: "told", hint: "quá khứ của tell trước tân ngữ his mother" }
      ],
      sentenceBuild: [
        { words: ["This", "pagoda", "was", "built", "two", "centuries", "ago", "."], answer: "This pagoda was built two centuries ago ." },
        { words: ["The", "room", "is", "being", "painted", "at", "the", "moment", "."], answer: "The room is being painted at the moment ." },
        { words: ["All", "assignments", "must", "be", "submitted", "on", "time", "."], answer: "All assignments must be submitted on time ." },
        { words: ["The", "results", "will", "be", "announced", "next", "week", "."], answer: "The results will be announced next week ." },
        { words: ["Two", "new", "hospitals", "have", "been", "built", "here", "."], answer: "Two new hospitals have been built here ." },
        { words: ["She", "told", "me", "that", "she", "was", "learning", "French", "."], answer: "She told me that she was learning French ." },
        { words: ["He", "said", "he", "would", "visit", "us", "the", "next", "day", "."], answer: "He said he would visit us the next day ." },
        { words: ["They", "asked", "me", "if", "I", "liked", "spicy", "food", "."], answer: "They asked me if I liked spicy food ." },
        { words: ["She", "asked", "me", "where", "I", "had", "bought", "that", "bag", "."], answer: "She asked me where I had bought that bag ." },
        { words: ["He", "wanted", "to", "know", "what", "time", "it", "was", "."], answer: "He wanted to know what time it was ." },
        { words: ["Coffee", "is", "grown", "in", "the", "Central", "Highlands", "."], answer: "Coffee is grown in the Central Highlands ." },
        { words: ["She", "asked", "whether", "I", "could", "speak", "English", "."], answer: "She asked whether I could speak English ." }
      ],
      transformation: [
        {
          sentence: "Alexander Fleming discovered penicillin in 1928. (by)",
          hint: "Chuyển sang bị động Quá khứ đơn: Penicillin was discovered...",
          answer: "Penicillin was discovered by Alexander Fleming in 1928."
        },
        {
          sentence: "They have built a new pedestrian bridge across the river. (been)",
          hint: "Chuyển sang bị động Hiện tại hoàn thành: A new pedestrian bridge has been built...",
          answer: "A new pedestrian bridge has been built across the river."
        },
        {
          sentence: "Lan said to me, \"I will send you the slides tomorrow.\" (told)",
          hint: "Đổi sang câu tường thuật dùng told me, will ➔ would, tomorrow ➔ the next day",
          answer: "Lan told me that she would send me the slides the next day.",
          alternatives: [
            "Lan told me she would send me the slides the next day.",
            "Lan told me that she would send me the slides the following day."
          ]
        },
        {
          sentence: "He asked her, \"Do you enjoy working in a team?\" (if)",
          hint: "Tường thuật câu hỏi Yes/No: He asked her if she enjoyed...",
          answer: "He asked her if she enjoyed working in a team.",
          alternatives: ["He asked her whether she enjoyed working in a team."]
        },
        {
          sentence: "The teacher asked Nam, \"Where did you put the dictionary?\" (where)",
          hint: "Tường thuật câu hỏi Wh- ở quá khứ đơn ➔ quá khứ hoàn thành (had put)",
          answer: "The teacher asked Nam where he had put the dictionary."
        }
      ],
      review: [
        { sentence: "If I ___ (have) a camera now, I would take a photo of that rainbow.", answer: "had", hint: "Ôn tập Câu điều kiện Loại 2" },
        { sentence: "Unless you ___ (book) the ticket early, there won't be any seats left.", answer: "book", hint: "Ôn tập Câu điều kiện Loại 1 với Unless" },
        { sentence: "You don't mind ___ (open) the window, do you?", answer: "opening", hint: "Ôn tập don't mind + V-ing" },
        { sentence: "While we ___ (wait) for the bus yesterday, it started to snow.", answer: "were waiting", hint: "Ôn tập Quá khứ tiếp diễn" },
        { sentence: "Let's review the passive voice formulas together, ___ we?", answer: "shall", hint: "Ôn tập Câu hỏi đuôi với Let's" }
      ]
    }
  },

  // ==================== DAY 21 ====================
  {
    day: 21,
    id: "day-21",
    cefr: "A2+",
    stage: 3,
    stageName: "A2+ Intermediate Bridge",
    isExam: false,
    estimatedMinutes: 25,
    title: "Thì Tương lai tiếp diễn (Future Continuous)",
    titleEn: "Future Continuous Tense (will be + V-ing)",
    dailyGoal: "Diễn tả hành động sẽ đang diễn ra tại một thời điểm hoặc khoảng thời gian xác định cụ thể trong tương lai (at 8 PM tomorrow, at this time next week).",
    vocab: [
      { en: "at this time tomorrow", pos: "adv phr", ipa: "/æt ðɪs taɪm təˈmɑːroʊ/", vi: "vào giờ này ngày mai", example: "At this time tomorrow, I will be flying to Tokyo." },
      { en: "meanwhile", pos: "adv", ipa: "/ˈmiːnwaɪl/", vi: "trong lúc đó", example: "I'll be cooking dinner; meanwhile, my sister will be setting the table." },
      { en: "in progress", pos: "adj phr", ipa: "/ɪn ˈprɑːɡres/", vi: "đang trong quá trình diễn ra", example: "The future continuous describes an action in progress at a future time." },
      { en: "attend", pos: "v", ipa: "/əˈtend/", vi: "tham dự", example: "She will be attending a workshop at 10 AM tomorrow." },
      { en: "sunbathe", pos: "v", ipa: "/ˈsʌnbeɪð/", vi: "tắm nắng", example: "This time next Sunday, we will be sunbathing on Phu Quoc beach." },
      { en: "commute", pos: "v", ipa: "/kəˈmjuːt/", vi: "đi lại giữa nhà và nơi làm việc/học tập", example: "In 2035, people will be commuting by autonomous sky-trains." },
      { en: "autonomous", pos: "adj", ipa: "/ɔːˈtɑːnəməs/", vi: "tự hành, tự lái", example: "Autonomous vehicles will be running on smart highways." },
      { en: "high-speed", pos: "adj", ipa: "/ˌhaɪ ˈspiːd/", vi: "tốc độ cao, cao tốc", example: "We will be traveling on a high-speed train at 9 AM tomorrow." },
      { en: "present", pos: "v", ipa: "/prɪˈzent/", vi: "thuyết trình, trình bày", example: "Don't call me at 3 PM; I will be presenting my project." },
      { en: "rehearse", pos: "v", ipa: "/rɪˈhɜːrs/", vi: "diễn tập, tập dượt", example: "The band will be rehearsing for the concert all afternoon tomorrow." },
      { en: "broadcast", pos: "v", ipa: "/ˈbrɔːdkæst/", vi: "truyền hình, phát sóng", example: "The channel will be broadcasting the game at 8 PM tonight." },
      { en: "relocate", pos: "v", ipa: "/ˌriːloʊˈkeɪt/", vi: "chuyển chỗ ở / văn phòng", example: "Next month, our company will be relocating to a greener building." },
      { en: "celebrate", pos: "v", ipa: "/ˈselɪbreɪt/", vi: "đón mừng, kỷ niệm", example: "At midnight on New Year's Eve, everyone will be celebrating." },
      { en: "itinerary", pos: "n", ipa: "/aɪˈtɪnəreri/", vi: "lịch trình chuyến đi", example: "According to our itinerary, we will be visiting Hue on Tuesday." }
    ],
    grammar: {
      point: "THÌ TƯƠNG LAI TIẾP DIỄN (FUTURE CONTINUOUS TENSE)",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Công thức Thì Tương Lai Tiếp Diễn</div>
          <b>• Khẳng định (+):</b> <code>S + WILL + BE + V-ing</code> (Dùng chung cho mọi chủ ngữ)<br/>
          <b>• Phủ định (-):</b> <code>S + WILL NOT (WON'T) + BE + V-ing</code><br/>
          <b>• Nghi vấn (?):</b> <code>(Wh-) + WILL + S + BE + V-ing?</code><br/>
          <i>Ví dụ: What <b>will</b> you <b>be doing</b> at 8 PM tomorrow? — I <b>will be studying</b> English.</i>
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Cách dùng & Dấu hiệu nhận biết đặc trưng</div>
          <b>• Hành động đang diễn ra tại một thời điểm cụ thể trong tương lai:</b><br/>
          &nbsp;&nbsp;- <code>at + giờ + tomorrow / tonight / next Sunday</code> (<i>at 9 AM tomorrow</i>)<br/>
          &nbsp;&nbsp;- <code>at this time + tomorrow / next week / next month / next year</code><br/>
          &nbsp;&nbsp;- <code>when + S + V(hiện tại đơn)</code>: <i>When you arrive tomorrow, we <b>will be waiting</b> for you at the gate.</i>
        </div>
      `,
      examples: [
        "<b>At this time next week</b>, we <b>will be lying</b> on a sunny beach in Nha Trang.",
        "Don't phone me between 7 and 8 tonight. I <b>will be having</b> dinner with my family.",
        "What <b>will</b> people <b>be using</b> for transport in the year 2050?"
      ],
      commonMistake: {
        wrong: "At 9 AM tomorrow, I will taking my English exam.",
        right: "At 9 AM tomorrow, I **will be taking** my English exam.",
        note: "Sau 'will' luôn phải có động từ nguyên thể 'be' rồi mới đến 'V-ing' (will + be + V-ing). Đừng bao giờ quên chữ 'be'!"
      },
      memoryTip: "Quá khứ có giờ cụ thể (at 8 PM yesterday) ➔ was/were V-ing. Tương lai có giờ cụ thể (at 8 PM tomorrow) ➔ will be V-ing!"
    },
    dialogue: {
      titleVi: "Tình huống: Hỏi lịch trình chuyến du lịch hè tuần tới của bạn",
      lines: [
        { speaker: "Mai", en: "Are you excited about your family trip to Da Nang next week, Nam?", vi: "Cậu có hào hứng về chuyến du lịch Đà Nẵng cùng gia đình vào tuần tới không Nam?" },
        { speaker: "Nam", en: "Yes, I can't wait! At this time next Monday, we will be flying over the clouds.", vi: "Có chứ, mình mong lắm rồi! Vào giờ này thứ Hai tuần tới, tụi mình sẽ đang bay trên những tầng mây." },
        { speaker: "Mai", en: "What will you be doing on Tuesday afternoon?", vi: "Chiều thứ Ba cậu sẽ đang làm gì?" },
        { speaker: "Nam", en: "Between 2 PM and 5 PM, we will be exploring the ancient streets of Hoi An.", vi: "Từ 2 giờ đến 5 giờ chiều, tụi mình sẽ đang khám phá phố cổ Hội An." },
        { speaker: "Mai", en: "Can I call you at 7 PM on Tuesday to see some photos?", vi: "7 giờ tối thứ Ba mình gọi cho cậu xem ảnh được không?" },
        { speaker: "Nam", en: "At 7 PM we will be having seafood dinner by the beach, so I'll text you right after that!", vi: "Lúc 7 giờ tối tụi mình sẽ đang ăn tối hải sản bên bờ biển, nên ngay sau đó mình sẽ nhắn cho cậu nhé!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "At this time tomorrow, my sister ___ her final math exam.", options: ["will take", "will be taking", "is taking"], answer: "will be taking" },
        { q: "Don't call me at 8 PM tonight because I ___ a live football match.", options: ["will be watching", "watched", "have watched"], answer: "will be watching" },
        { q: "What ___ you ___ at 10 AM next Sunday?", options: ["will / do", "will / be doing", "are / do"], answer: "will / be doing" },
        { q: "This time next month, we ___ on a white sandy beach in Phu Quoc.", options: ["will sunbathe", "will be sunbathing", "sunbathed"], answer: "will be sunbathing" },
        { q: "When you arrive at the station tomorrow, I ___ for you near the ticket booth.", options: ["will wait", "will be waiting", "waited"], answer: "will be waiting" },
        { q: "In fifty years' time, millions of people ___ in smart eco-cities.", options: ["will be living", "lived", "have lived"], answer: "will be living" },
        { q: "She can't come to the party at 6 PM tomorrow; she ___ her piano lesson then.", options: ["will have", "will be having", "has"], answer: "will be having" },
        { q: "___ they ___ the new software all morning tomorrow?", options: ["Will / be testing", "Do / test", "Are / test"], answer: "Will / be testing" },
        { q: "Tomorrow afternoon at 3 o'clock, I ___ my science project to the class.", options: ["will be presenting", "present", "have presented"], answer: "will be presenting" },
        { q: "We ___ electric buses to school at this time next year.", options: ["will be taking", "took", "have taken"], answer: "will be taking" }
      ],
      fillBlank: [
        { sentence: "At 9 o'clock tomorrow morning, I ___ (sit) in the lecture hall.", answer: "will be sitting", hint: "tương lai tiếp diễn (will be + V-ing)" },
        { sentence: "At this time next Friday, they ___ (travel) to Sapa by train.", answer: "will be traveling", alternatives: ["will be travelling"], hint: "tương lai tiếp diễn" },
        { sentence: "Don't knock on his door at 2 PM; he ___ (sleep).", answer: "will be sleeping", hint: "hành động đang diễn ra tại mốc giờ tương lai" },
        { sentence: "We ___ (not / work) at 7 PM tomorrow; we'll be at the cinema.", answer: "will not be working", hint: "phủ định tương lai tiếp diễn" },
        { sentence: "What ___ you ___ (do) at this time next year?", answer: "will be doing", alternatives: ["will you be doing"], hint: "câu hỏi tương lai tiếp diễn" },
        { sentence: "When the boss comes back tomorrow, the team ___ (discuss) the new plan.", answer: "will be discussing", hint: "tương lai tiếp diễn" },
        { sentence: "All day tomorrow, the students ___ (rehearse) for the school play.", answer: "will be rehearsing", hint: "tương lai tiếp diễn" },
        { sentence: "At midnight tonight, people ___ (watch) the New Year fireworks.", answer: "will be watching", hint: "tương lai tiếp diễn" }
      ],
      sentenceBuild: [
        { words: ["At", "8", "PM", "tonight", ",", "I", "will", "be", "studying", "."], answer: "At 8 PM tonight , I will be studying ." },
        { words: ["What", "will", "you", "be", "doing", "at", "this", "time", "tomorrow", "?"], answer: "What will you be doing at this time tomorrow ?" },
        { words: ["We", "will", "be", "flying", "to", "Tokyo", "this", "time", "next", "week", "."], answer: "We will be flying to Tokyo this time next week ." },
        { words: ["She", "will", "not", "be", "working", "at", "noon", "tomorrow", "."], answer: "She will not be working at noon tomorrow ." },
        { words: ["They", "will", "be", "having", "dinner", "when", "we", "arrive", "."], answer: "They will be having dinner when we arrive ." },
        { words: ["He", "will", "be", "waiting", "for", "you", "at", "the", "gate", "."], answer: "He will be waiting for you at the gate ." },
        { words: ["Will", "you", "be", "using", "your", "laptop", "tonight", "?"], answer: "Will you be using your laptop tonight ?" }
      ],
      transformation: [
        {
          sentence: "My flight to Da Nang is from 9 AM to 10:30 AM tomorrow. (At 10 AM tomorrow)",
          hint: "Sử dụng Tương lai tiếp diễn: At 10 AM tomorrow, I will be flying to Da Nang.",
          answer: "At 10 AM tomorrow, I will be flying to Da Nang.",
          alternatives: ["I will be flying to Da Nang at 10 AM tomorrow."]
        },
        {
          sentence: "Our team has a rehearsal from 2 PM to 4 PM tomorrow. (At 3 PM tomorrow)",
          hint: "Sử dụng will be rehearsing",
          answer: "At 3 PM tomorrow, our team will be rehearsing.",
          alternatives: ["Our team will be rehearsing at 3 PM tomorrow."]
        },
        {
          sentence: "They will start having dinner at 7 PM and finish at 8 PM tonight. (At 7:30 PM tonight)",
          hint: "Sử dụng they will be having dinner",
          answer: "At 7:30 PM tonight, they will be having dinner.",
          alternatives: ["They will be having dinner at 7:30 PM tonight."]
        },
        {
          sentence: "At 8 PM yesterday, she was practicing the violin. (At 8 PM tomorrow)",
          hint: "Đổi từ Quá khứ tiếp diễn sang Tương lai tiếp diễn",
          answer: "At 8 PM tomorrow, she will be practicing the violin.",
          alternatives: ["At 8 PM tomorrow, she will be practising the violin."]
        },
        {
          sentence: "What were you doing at this time last Sunday? (next Sunday)",
          hint: "Đổi sang câu hỏi Tương lai tiếp diễn: What will you be doing...",
          answer: "What will you be doing at this time next Sunday?"
        }
      ],
      review: [
        { sentence: "She asked me whether I ___ (can) speak German.", answer: "could", hint: "Ôn tập Câu hỏi tường thuật" },
        { sentence: "He told us that he ___ (leave) for Hue the following day.", answer: "would leave", alternatives: ["was leaving"], hint: "Ôn tập Câu kể tường thuật" },
        { sentence: "This novel ___ (write) by a famous Vietnamese author in 1960.", answer: "was written", hint: "Ôn tập Bị động quá khứ đơn" },
        { sentence: "All safety helmets must ___ (check) before entering the site.", answer: "be checked", hint: "Ôn tập Bị động với must" },
        { sentence: "If I ___ (be) in your position, I would accept that scholarship.", answer: "were", hint: "Ôn tập Câu điều kiện Loại 2" }
      ]
    }
  },

  // ==================== DAY 22 ====================
  {
    day: 22,
    id: "day-22",
    cefr: "A2+",
    stage: 3,
    stageName: "A2+ Intermediate Bridge",
    isExam: false,
    estimatedMinutes: 25,
    title: "Động từ khuyết thiếu chỉ sự suy đoán (May, Might, Could, Must, Can't)",
    titleEn: "Modals of Probability & Deduction",
    dailyGoal: "Sử dụng may, might, could để đưa ra dự đoán/khả năng không chắc chắn (30–50%) và must / can't cho suy luận có căn cứ chắc chắn (95%).",
    vocab: [
      { en: "probability", pos: "n", ipa: "/ˌprɑːbəˈbɪləti/", vi: "xác suất, khả năng xảy ra", example: "Modals of probability show how certain we are." },
      { en: "deduction", pos: "n", ipa: "/dɪˈdʌkʃn/", vi: "sự suy luận có căn cứ", example: "We use 'must' for a logical deduction." },
      { en: "certain", pos: "adj", ipa: "/ˈsɜːrtn/", vi: "chắc chắn", example: "I am not certain, so I use 'might'." },
      { en: "uncertain", pos: "adj", ipa: "/ʌnˈsɜːrtn/", vi: "không chắc chắn", example: "The weather in the mountains is very uncertain." },
      { en: "possibility", pos: "n", ipa: "/ˌpɑːsəˈbɪləti/", vi: "khả năng có thể xảy ra", example: "There is a strong possibility that it will rain." },
      { en: "alien", pos: "n", ipa: "/ˈeɪliən/", vi: "người ngoài hành tinh", example: "Scientists wonder if aliens might exist on other planets." },
      { en: "habitable", pos: "adj", ipa: "/ˈhæbɪtəbl/", vi: "có thể sinh sống được", example: "Mars might become habitable in the distant future." },
      { en: "mars", pos: "n", ipa: "/mɑːrz/", vi: "Sao Hỏa", example: "Spacecraft may land humans on Mars one day." },
      { en: "gravity", pos: "n", ipa: "/ˈɡrævəti/", vi: "trọng lực", example: "Without gravity, objects float in space." },
      { en: "clue", pos: "n", ipa: "/kluː/", vi: "manh mối, dấu hiệu", example: "The detective looked for clues to make a deduction." },
      { en: "exhausted", pos: "adj", ipa: "/ɪɡˈzɔːstɪd/", vi: "kiệt sức", example: "You have worked for ten hours; you must be exhausted." },
      { en: "joking", pos: "adj", ipa: "/ˈdʒoʊkɪŋ/", vi: "đang nói đùa", example: "You can't be serious! You must be joking!" },
      { en: "delay", pos: "v", ipa: "/dɪˈleɪ/", vi: "làm chậm trễ", example: "Heavy traffic might delay our bus this morning." },
      { en: "doubt", pos: "n", ipa: "/daʊt/", vi: "sự nghi ngờ", example: "When in doubt, use 'may' or 'might' instead of 'will'." }
    ],
    grammar: {
      point: "ĐỘNG TỪ KHUYẾT THIẾU CHỈ SỰ SUY ĐOÁN (MAY, MIGHT, COULD, MUST, CAN'T)",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Dự đoán không chắc chắn ở Hiện tại / Tương lai (30% – 50%)</div>
          <b>• Khẳng định (+):</b> <code>S + may / might / could + V(nguyên thể)</code> (Có lẽ, có thể sẽ...)<br/>
          <b>• Phủ định (-):</b> <code>S + may not / might not + V(nguyên thể)</code><br/>
          &nbsp;&nbsp;<i>Lưu ý: KHÔNG viết tắt "mayn't", và "couldn't" mang nghĩa "chắc chắn không thể" chứ không phải "có lẽ không"!</i><br/>
          <i>Ví dụ: Take a raincoat. It <b>may / might rain</b> this afternoon.</i>
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Suy luận logic rất chắc chắn ở Hiện tại (95%)</div>
          <b>• Chắc chắn ĐÚNG (Khẳng định):</b> <code>S + MUST + V(nguyên thể)</code> (Ắt hẳn là...)<br/>
          &nbsp;&nbsp;<i>Ví dụ: The lights are on. She <b>must be</b> at home.</i><br/>
          <b>• Chắc chắn KHÔNG ĐÚNG (Phủ định):</b> <code>S + CAN'T + V(nguyên thể)</code> (Không thể nào là...)<br/>
          &nbsp;&nbsp;<i>Ví dụ: He just ate two big bowls of pho. He <b>can't be</b> hungry now!</i>
        </div>
      `,
      examples: [
        "<b>Có lẽ (50%):</b> I'm not sure where Minh is. He <b>might be</b> in the school library.",
        "<b>Ắt hẳn là (95% +):</b> She won the first prize in the national contest. She <b>must be</b> very proud!",
        "<b>Không thể nào (95% -):</b> That man <b>can't be</b> Mr. Nam because Mr. Nam is in Hanoi today."
      ],
      commonMistake: {
        wrong: "He just had a big lunch, so he mustn't be hungry now.",
        right: "He just had a big lunch, so he **can't** be hungry now.",
        note: "Khi suy luận phủ định 'chắc chắn không thể là...', ta dùng 'can't + V', tuyệt đối KHÔNG dùng 'mustn't' (vì mustn't chỉ mang nghĩa cấm đoán!)."
      },
      memoryTip: "Không chắc chắn (Perhaps / Maybe / I'm not sure) ➔ dùng MAY / MIGHT. Có bằng chứng chắc chắn 100% ➔ Khẳng định dùng MUST, Phủ định dùng CAN'T!"
    },
    dialogue: {
      titleVi: "Tình huống: Đoán xem chiếc cặp sách bị bỏ quên trong lớp là của ai",
      lines: [
        { speaker: "Lan", en: "Look, Khoa! Someone left this blue backpack under the desk.", vi: "Nhìn này Khoa! Ai đó đã để quên chiếc ba lô màu xanh này dưới ngăn bàn." },
        { speaker: "Khoa", en: "Let's see whose it is. Could it belong to Minh?", vi: "Để xem nó là của ai nào. Liệu nó có thể là của Minh không?" },
        { speaker: "Lan", en: "No, it can't be Minh's. His backpack is black, and he already took it home.", vi: "Không, không thể nào là của Minh được. Ba lô của cậu ấy màu đen, và cậu ấy đã mang về rồi." },
        { speaker: "Khoa", en: "Look! There is a music club badge and a French dictionary inside.", vi: "Nhìn kìa! Bên trong có một huy hiệu CLB Âm nhạc và một cuốn từ điển tiếng Pháp." },
        { speaker: "Lan", en: "Aha! Then it must be Mai's backpack! She is the only student learning French in our class.", vi: "A ha! Vậy thì ắt hẳn là ba lô của Mai rồi! Cậu ấy là học sinh duy nhất học tiếng Pháp trong lớp mình." },
        { speaker: "Khoa", en: "You're right! She might still be at the school gate. Let's run and give it to her!", vi: "Cậu nói đúng đấy! Có lẽ cậu ấy vẫn còn ở cổng trường. Tụi mình chạy ra đưa cho cậu ấy đi!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "Take an umbrella with you. It ___ rain later this afternoon.", options: ["might", "mustn't", "can't"], answer: "might" },
        { q: "She has studied continuously for six hours. She ___ be very tired now.", options: ["must", "can't", "might not"], answer: "must" },
        { q: "That ___ be Nam at the door. He is on a flight to Singapore right now!", options: ["must", "can't", "may"], answer: "can't" },
        { q: "I'm not sure where my keys are. I ___ leave them on the kitchen table.", options: ["might", "must", "can't"], answer: "might" },
        { q: "Don't touch that mushroom! It ___ be poisonous.", options: ["could", "can't", "mustn't"], answer: "could" },
        { q: "A: Where is Anna? B: I don't know. She ___ be in the cafeteria.", options: ["may", "must", "can't"], answer: "may" },
        { q: "He drives a Ferrari and lives in a huge villa. He ___ be very wealthy.", options: ["must", "might not", "can't"], answer: "must" },
        { q: "We haven't decided on our holiday yet. We ___ go to Da Lat or Nha Trang.", options: ["might", "must", "can't"], answer: "might" },
        { q: "You just slept for ten hours! You ___ be sleepy already.", options: ["must", "can't", "may"], answer: "can't" },
        { q: "She didn't reply to my message. She ___ not have her phone with her.", options: ["might", "can", "could"], answer: "might" }
      ],
      fillBlank: [
        { sentence: "I am not sure, but we ___ (may / must) visit our cousins this Sunday.", answer: "may", alternatives: ["might"], hint: "không chắc chắn (I am not sure)" },
        { sentence: "Look at her gold medal! She ___ (must / can't) be the champion.", answer: "must", hint: "suy luận chắc chắn đúng (95%)" },
        { sentence: "That story ___ (must / can't) be true! It sounds completely impossible.", answer: "can't", hint: "suy luận chắc chắn không đúng" },
        { sentence: "Take a sweater because it ___ (might / can't) get cold in the evening.", answer: "might", alternatives: ["may", "could"], hint: "dự đoán khả năng có thể xảy ra" },
        { sentence: "Nobody is answering the doorbell. They ___ (must / can't) be out.", answer: "must", hint: "suy luận logic khẳng định" },
        { sentence: "He doesn't speak a word of French, so he ___ (must / can't) be from Paris.", answer: "can't", hint: "suy luận phủ định chắc chắn" },
        { sentence: "Perhaps there is life on other planets. ➔ There ___ (might / must) be life on other planets.", answer: "might", alternatives: ["may", "could"], hint: "Perhaps = may/might" },
        { sentence: "She ___ (may not / can't) come to the party tonight because she feels a bit unwell.", answer: "may not", alternatives: ["might not"], hint: "có lẽ sẽ không đến" }
      ],
      sentenceBuild: [
        { words: ["It", "might", "rain", "heavily", "this", "afternoon", "."], answer: "It might rain heavily this afternoon ." },
        { words: ["She", "must", "be", "tired", "after", "the", "long", "flight", "."], answer: "She must be tired after the long flight ." },
        { words: ["That", "can't", "be", "true", "!", "You", "are", "joking", "."], answer: "That can't be true ! You are joking ." },
        { words: ["He", "may", "be", "waiting", "in", "the", "school", "library", "."], answer: "He may be waiting in the school library ." },
        { words: ["Humans", "might", "live", "on", "Mars", "in", "the", "future", "."], answer: "Humans might live on Mars in the future ." },
        { words: ["They", "may", "not", "agree", "with", "our", "new", "plan", "."], answer: "They may not agree with our new plan ." },
        { words: ["This", "jacket", "must", "belong", "to", "your", "brother", "."], answer: "This jacket must belong to your brother ." }
      ],
      transformation: [
        {
          sentence: "Perhaps she is in the computer lab right now. (might)",
          hint: "Thay Perhaps bằng might be",
          answer: "She might be in the computer lab right now."
        },
        {
          sentence: "Maybe they will not attend the workshop tomorrow. (may)",
          hint: "Thay Maybe ... will not bằng may not attend",
          answer: "They may not attend the workshop tomorrow."
        },
        {
          sentence: "I am sure that he is our new English teacher. (must)",
          hint: "Suy luận chắc chắn khẳng định dùng must be",
          answer: "He must be our new English teacher."
        },
        {
          sentence: "I am certain that she isn't at home right now. (can't)",
          hint: "Suy luận chắc chắn phủ định dùng can't be",
          answer: "She can't be at home right now."
        },
        {
          sentence: "It is possible that we will move to a bigger house next year. (could)",
          hint: "Sử dụng could move",
          answer: "We could move to a bigger house next year."
        }
      ],
      review: [
        { sentence: "At 10 AM tomorrow, we ___ (take) our speaking test.", answer: "will be taking", hint: "Ôn tập Tương lai tiếp diễn" },
        { sentence: "She asked me where I ___ (buy) my backpack.", answer: "had bought", alternatives: ["bought"], hint: "Ôn tập Câu hỏi tường thuật" },
        { sentence: "The injured whale ___ (rescue) by local fishermen yesterday.", answer: "was rescued", hint: "Ôn tập Bị động quá khứ đơn" },
        { sentence: "If I ___ (win) the scholarship, my parents will be very proud.", answer: "win", hint: "Ôn tập Câu điều kiện Loại 1" },
        { sentence: "He detests ___ (eat) cold food.", answer: "eating", hint: "Ôn tập Động từ chỉ sở thích" }
      ]
    }
  },

  // ==================== DAY 23 ====================
  {
    day: 23,
    id: "day-23",
    cefr: "A2+",
    stage: 3,
    stageName: "A2+ Intermediate Bridge",
    isExam: false,
    estimatedMinutes: 25,
    title: "Cấu trúc Used to + V & Be/Get used to + V-ing",
    titleEn: "Past Habits (Used to) vs. Familiarity (Be/Get used to)",
    dailyGoal: "Phân biệt tuyệt đối thói quen trong quá khứ đã chấm dứt (used to + V nguyên thể) với việc đã quen hoặc đang dần quen với điều gì ở hiện tại (be/get used to + V-ing/N).",
    vocab: [
      { en: "used to", pos: "modal phr", ipa: "/ˈjuːst tuː/", vi: "đã từng (thói quen quá khứ nay không còn)", example: "My grandfather used to walk five kilometers to school." },
      { en: "be used to", pos: "adj phr", ipa: "/bi ˈjuːst tuː/", vi: "đã quen với việc gì", example: "She is used to waking up at 5:30 AM every day." },
      { en: "get used to", pos: "v phr", ipa: "/ɡet ˈjuːst tuː/", vi: "trở nên quen dần với việc gì", example: "It took me a month to get used to the cold weather." },
      { en: "accustomed", pos: "adj", ipa: "/əˈkʌstəmd/", vi: "quen với (accustomed to = used to)", example: "He quickly became accustomed to the new work environment." },
      { en: "adapt", pos: "v", ipa: "/əˈdæpt/", vi: "thích nghi", example: "Exchange students have to adapt to a new culture." },
      { en: "childhood", pos: "n", ipa: "/ˈtʃaɪldhʊd/", vi: "thời thơ ấu", example: "In my childhood, we used to play hide-and-seek." },
      { en: "barefoot", pos: "adv", ipa: "/ˈberfʊt/", vi: "đi chân trần", example: "Village children used to run barefoot on the grass." },
      { en: "oil lamp", pos: "n phr", ipa: "/ɔɪl læmp/", vi: "đèn dầu", example: "People used to study by oil lamps before electricity." },
      { en: "spicy", pos: "adj", ipa: "/ˈspaɪsi/", vi: "cay", example: "Foreigners often need time to get used to spicy food." },
      { en: "left-hand drive", pos: "n phr", ipa: "/ˌleft hænd ˈdraɪv/", vi: "lái xe bên trái đường", example: "In the UK, you must get used to driving on the left." },
      { en: "rush hour", pos: "n phr", ipa: "/ˈrʌʃ aʊər/", vi: "giờ cao điểm", example: "City residents are used to heavy traffic during rush hour." },
      { en: "independent", pos: "adj", ipa: "/ˌɪndɪˈpendənt/", vi: "tự lập", example: "University students get used to living an independent life." },
      { en: "transform", pos: "v", ipa: "/trænsˈfɔːrm/", vi: "thay đổi hoàn toàn, biến đổi", example: "Our small town has transformed into a modern city." },
      { en: "nostalgia", pos: "n", ipa: "/nəˈstældʒə/", vi: "nỗi hoài niệm quá khứ", example: "Old photos bring back warm nostalgia." }
    ],
    grammar: {
      point: "PHÂN BIỆT USED TO + V(BARE) VÀ BE / GET USED TO + V-ING",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Thói quen / Trạng thái trong Quá khứ (USED TO + V nguyên thể)</div>
          <b>• Khẳng định (+):</b> <code>S + USED TO + V(bare)</code> (Đã từng làm gì trong quá khứ, nay KHÔNG còn nữa)<br/>
          <b>• Phủ định (-):</b> <code>S + DIDN'T USE TO + V(bare)</code> (bỏ -d ở chữ <i>use</i>!)<br/>
          <b>• Nghi vấn (?):</b> <code>DID + S + USE TO + V(bare)?</code><br/>
          <i>Ví dụ: There <b>used to be</b> a small pond here. / I <b>didn't use to like</b> broccoli when I was small.</i>
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Quen với / Dần quen với việc gì (BE / GET USED TO + V-ING / N)</div>
          <b>• Đã quen với:</b> <code>S + am / is / are / was / were + USED TO + V-ING / Noun</code><br/>
          <b>• Đang dần quen với:</b> <code>S + GET / GOT / WILL GET + USED TO + V-ING / Noun</code><br/>
          <i>Lưu ý: Ở đây "to" là GIỚI TỪ, nên động từ theo sau BẮT BUỘC phải thêm <b>-ING</b>!</i><br/>
          <i>Ví dụ: She <b>is used to speaking</b> in public. / You will soon <b>get used to living</b> in Hanoi.</i>
        </div>
      `,
      examples: [
        "<b>Quá khứ đã chấm dứt:</b> My father <b>used to smoke</b>, but he gave it up five years ago.",
        "<b>Phủ định & Nghi vấn quá khứ:</b> <b>Did</b> you <b>use to play</b> marbles when you were a child?",
        "<b>Quen với (V-ing):</b> I <b>am used to getting</b> up at 5:30 AM every morning."
      ],
      commonMistake: {
        wrong: "She is used to wake up early every day.",
        right: "She **is used to waking** up early every day.",
        note: "Có 'be' (am/is/are) hoặc 'get' đứng trước 'used to' thì mang nghĩa 'quen với' ➔ Sau 'to' bắt buộc phải là V-ing hoặc Danh từ!"
      },
      memoryTip: "Không có BE/GET (S + used to) ➔ cộng V nguyên thể (Đã từng). Có BE/GET (S + be/get used to) ➔ cộng V-ING (Quen với)!"
    },
    dialogue: {
      titleVi: "Tình huống: Du học sinh Việt Nam chia sẻ về việc thích nghi cuộc sống ở Anh",
      lines: [
        { speaker: "Minh", en: "Hi Lan! How is your first semester in London going?", vi: "Chào Lan! Học kỳ đầu tiên ở Luân Đôn của cậu thế nào rồi?" },
        { speaker: "Lan", en: "It's great now, Minh! At first, everything felt so unfamiliar.", vi: "Giờ thì tuyệt lắm rồi Minh ơi! Ban đầu mọi thứ đều khá lạ lẫm." },
        { speaker: "Minh", en: "Was it hard to adapt to the British weather and traffic?", vi: "Có khó thích nghi với thời tiết và giao thông ở Anh không?" },
        { speaker: "Lan", en: "Yes! In Vietnam, I used to enjoy warm sunshine all year round.", vi: "Có chứ! Ở Việt Nam, mình từng tận hưởng nắng ấm quanh năm." },
        { speaker: "Minh", en: "Have you gotten used to the cold and foggy mornings yet?", vi: "Cậu đã quen với những buổi sáng lạnh và nhiều sương mù chưa?" },
        { speaker: "Lan", en: "Yes, I am used to wearing a thick coat and carrying an umbrella every day now.", vi: "Rồi, giờ mình đã quen với việc mặc áo khoác dày và mang ô mỗi ngày." },
        { speaker: "Minh", en: "And what about cooking for yourself?", vi: "Thế còn chuyện tự nấu ăn thì sao?" },
        { speaker: "Lan", en: "I didn't use to cook at home, but now I'm used to making my own meals!", vi: "Trước đây ở nhà mình không từng nấu ăn, nhưng giờ mình đã quen tự nấu bữa ăn cho mình rồi!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "My grandmother ___ dye cloth with natural leaves when she was young.", options: ["used to", "is used to", "gets used to"], answer: "used to" },
        { q: "He has lived in Tokyo for five years, so he is used to ___ the subway.", options: ["take", "taking", "took"], answer: "taking" },
        { q: "I didn't ___ like coffee, but now I drink a cup every morning.", options: ["used to", "use to", "using to"], answer: "use to" },
        { q: "It took her a few weeks to get used to ___ on the left in England.", options: ["drive", "driving", "drove"], answer: "driving" },
        { q: "There ___ be an old cinema on this street, but it was knocked down.", options: ["used to", "was used to", "use to"], answer: "used to" },
        { q: "___ you use to play hide-and-seek when you were in primary school?", options: ["Did", "Were", "Do"], answer: "Did" },
        { q: "Nurses are used to ___ night shifts at the hospital.", options: ["work", "working", "worked"], answer: "working" },
        { q: "When we lived in the countryside, we used to ___ swimming in the river.", options: ["go", "going", "went"], answer: "go" },
        { q: "Don't worry! You will soon get used to ___ in front of an audience.", options: ["speak", "speaking", "spoke"], answer: "speaking" },
        { q: "She isn't used to ___ spicy food, so she coughed a lot.", options: ["eat", "eating", "ate"], answer: "eating" }
      ],
      fillBlank: [
        { sentence: "People ___ (use to) travel on horseback before cars were invented.", answer: "used to", hint: "thói quen trong quá khứ" },
        { sentence: "I am used to ___ (get) up at 6 AM every morning.", answer: "getting", hint: "be used to + V-ing" },
        { sentence: "He didn't ___ (use to) wear glasses when he was a student.", answer: "use to", hint: "sau didn't là use to nguyên mẫu" },
        { sentence: "Have you gotten used to ___ (live) in the dormitory yet?", answer: "living", hint: "get used to + V-ing" },
        { sentence: "My uncle used to ___ (work) as a pilot for Vietnam Airlines.", answer: "work", hint: "used to + V nguyên thể" },
        { sentence: "___ she ___ (use to) have long hair when she was a child?", answer: "Did use to", alternatives: ["Did she use to"], hint: "câu hỏi quá khứ với Did ... use to" },
        { sentence: "Farmers in this region are used to ___ (work) under the hot sun.", answer: "working", hint: "are used to + V-ing" },
        { sentence: "It was noisy at first, but we soon got used to ___ (sleep) near the train station.", answer: "sleeping", hint: "got used to + V-ing" }
      ],
      sentenceBuild: [
        { words: ["I", "used", "to", "play", "kites", "in", "the", "field", "."], answer: "I used to play kites in the field ." },
        { words: ["She", "is", "used", "to", "getting", "up", "early", "."], answer: "She is used to getting up early ." },
        { words: ["He", "didn't", "use", "to", "like", "vegetables", "."], answer: "He didn't use to like vegetables ." },
        { words: ["Did", "you", "use", "to", "live", "in", "Hue", "?"], answer: "Did you use to live in Hue ?" },
        { words: ["We", "got", "used", "to", "the", "cold", "weather", "quickly", "."], answer: "We got used to the cold weather quickly ." },
        { words: ["There", "used", "to", "be", "a", "banyan", "tree", "here", "."], answer: "There used to be a banyan tree here ." },
        { words: ["Are", "you", "used", "to", "speaking", "English", "every", "day", "?"], answer: "Are you used to speaking English every day ?" }
      ],
      transformation: [
        {
          sentence: "My father smoked twenty cigarettes a day in the past, but now he doesn't. (used)",
          hint: "Sử dụng cấu trúc thói quen quá khứ used to smoke",
          answer: "My father used to smoke twenty cigarettes a day."
        },
        {
          sentence: "Working late at night is not a problem for her anymore; it is familiar to her. (is used)",
          hint: "Sử dụng cấu trúc be used to + V-ing: She is used to working...",
          answer: "She is used to working late at night."
        },
        {
          sentence: "When I was a child, I didn't eat fish, but now I love it. (use)",
          hint: "Sử dụng phủ định didn't use to eat",
          answer: "When I was a child, I didn't use to eat fish.",
          alternatives: ["I didn't use to eat fish when I was a child."]
        },
        {
          sentence: "There was a traditional market on this corner ten years ago, but now it's a mall. (used)",
          hint: "Sử dụng There used to be...",
          answer: "There used to be a traditional market on this corner."
        },
        {
          sentence: "Living in a big city felt strange at first, but now I find it normal. (gotten)",
          hint: "Sử dụng I have gotten used to living in a big city.",
          answer: "I have gotten used to living in a big city.",
          alternatives: ["I have got used to living in a big city."]
        }
      ],
      review: [
        { sentence: "The lights are off. Everyone ___ (must / can't) be asleep now.", answer: "must", hint: "Ôn tập Động từ khuyết thiếu suy đoán" },
        { sentence: "At 8 PM tomorrow, we ___ (watch) the comedy show together.", answer: "will be watching", hint: "Ôn tập Tương lai tiếp diễn" },
        { sentence: "He asked me if I ___ (visit) Da Lat the previous summer.", answer: "had visited", hint: "Ôn tập Câu hỏi tường thuật" },
        { sentence: "This bridge ___ (repair) by the workers right now.", answer: "is being repaired", hint: "Ôn tập Bị động hiện tại tiếp diễn" },
        { sentence: "Although it rained heavily, they ___ (continue) the match.", answer: "continued", hint: "Ôn tập Câu phức với Although" }
      ]
    }
  }
];
