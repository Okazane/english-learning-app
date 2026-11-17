// Complete curriculum lessons for Stage 4: B1 Mastery (Days 24-30)
module.exports = [
  // ==================== DAY 24 ====================
  {
    day: 24,
    id: "day-24",
    cefr: "B1",
    stage: 4,
    stageName: "B1 Mastery",
    isExam: false,
    estimatedMinutes: 25,
    title: "Cụm động từ thông dụng (Common Phrasal Verbs)",
    titleEn: "Essential Phrasal Verbs for B1 Communication",
    dailyGoal: "Làm chủ 14 cụm động từ (Phrasal Verbs) tần suất cao nhất trong giao tiếp và bài thi chuẩn B1 (look after, turn down, give up, run out of, look forward to...).",
    vocab: [
      { en: "look after", pos: "phr v", ipa: "/lʊk ˈæftər/", vi: "chăm sóc (= take care of)", example: "Could you look after my cat while I am away?" },
      { en: "look for", pos: "phr v", ipa: "/lʊk fɔːr/", vi: "tìm kiếm", example: "He is looking for his lost student card." },
      { en: "look up", pos: "phr v", ipa: "/lʊk ʌp/", vi: "tra cứu (từ điển, thông tin)", example: "If you don't know a word, look it up in the dictionary." },
      { en: "look forward to", pos: "phr v", ipa: "/lʊk ˈfɔːrwərd tuː/", vi: "mong đợi, háo hức (+ V-ing)", example: "We are looking forward to visiting Ha Long Bay." },
      { en: "give up", pos: "phr v", ipa: "/ɡɪv ʌp/", vi: "từ bỏ (+ V-ing)", example: "Never give up trying even when the test is hard." },
      { en: "turn on / turn off", pos: "phr v", ipa: "/tɜːrn ɑːn/", vi: "bật / tắt (thiết bị điện, vòi nước)", example: "Please turn off the lights before leaving the room." },
      { en: "turn up / turn down", pos: "phr v", ipa: "/tɜːrn ʌp/", vi: "vặn to / vặn nhỏ; xuất hiện / từ chối", example: "He turned down the job offer because the salary was low." },
      { en: "put off", pos: "phr v", ipa: "/pʊt ɔːf/", vi: "trì hoãn (= postpone)", example: "They had to put off the camping trip because of the storm." },
      { en: "put on", pos: "phr v", ipa: "/pʊt ɑːn/", vi: "mặc vào, đội vào (quần áo, giày dép)", example: "Put on your warm coat before going outside." },
      { en: "take off", pos: "phr v", ipa: "/teɪk ɔːf/", vi: "cởi ra (giày/áo); cất cánh (máy bay)", example: "The plane took offtwenty minutes late due to fog." },
      { en: "run out of", pos: "phr v", ipa: "/rʌn aʊt əv/", vi: "hết sạch, cạn kiệt cái gì", example: "Our car ran out of petrol on the highway." },
      { en: "get on with", pos: "phr v", ipa: "/ɡet ɑːn wɪð/", vi: "hòa thuận, có quan hệ tốt với ai", example: "She gets on well with all her new classmates." },
      { en: "find out", pos: "phr v", ipa: "/faɪnd aʊt/", vi: "tìm ra sự thật, khám phá ra thông tin", example: "Have you found out what time the train leaves?" },
      { en: "set up", pos: "phr v", ipa: "/set ʌp/", vi: "thành lập, thiết lập", example: "They set up an English club at their school last year." }
    ],
    grammar: {
      point: "CỤM ĐỘNG TỪ THÔNG DỤNG (COMMON PHRASAL VERBS)",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Cấu tạo & Phân nhóm Phrasal Verbs cốt lõi</div>
          <b>• Cấu tạo:</b> <code>Động từ (Verb) + Tiểu từ ( giới từ / trạng từ: up, off, on, out, after, for...)</code> làm thay đổi hoàn toàn nghĩa gốc.<br/>
          <b>• Nhóm LOOK:</b> <code>look after</code> (chăm sóc) | <code>look for</code> (tìm kiếm) | <code>look up</code> (tra từ) | <code>look forward to + V-ing</code> (mong đợi).<br/>
          <b>• Nhóm TURN:</b> <code>turn on/off</code> (bật/tắt) | <code>turn up</code> (vặn to / đến, xuất hiện) | <code>turn down</code> (vặn nhỏ / từ chối).<br/>
          <b>• Nhóm PUT / TAKE:</b> <code>put on</code> (mặc vào) ↔ <code>take off</code> (cởi ra / máy bay cất cánh) | <code>put off</code> (hoãn lại = postpone).
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Vị trí của Tân ngữ Đại từ (it, them, me, him, her)</div>
          • Với cụm động từ tách được (<i>turn on, turn off, look up, put on, take off, give up</i>), nếu tân ngữ là ĐẠI TỪ (<code>it, them</code>), BẮT BUỘC đặt đại từ ở GIỮA:<br/>
          <code>Turn IT off!</code> / <code>Look IT up!</code> (KHÔNG viết <i>Turn off it</i> hay <i>Look up it</i>!)
        </div>
      `,
      examples: [
        "I am really <b>looking forward to meeting</b> you this weekend.",
        "We have <b>run out of</b> milk, so I need to go to the supermarket.",
        "If you don't know this word, <b>look it up</b> in your dictionary."
      ],
      commonMistake: {
        wrong: "I look forward to hear from you soon.",
        right: "I look forward to **hearing** from you soon.",
        note: "Trong cụm 'look forward to', chữ 'to' là GIỚI TỪ nên theo sau bắt buộc phải là V-ing hoặc Danh từ!"
      },
      memoryTip: "Ghép cặp đối nghĩa cực dễ nhớ: Turn on ↔ Turn off | Put on ↔ Take off | Turn up (đến/vặn to) ↔ Turn down (từ chối/vặn nhỏ)."
    },
    dialogue: {
      titleVi: "Tình huống: Chuẩn bị khởi hành chuyến dã ngoại cuối tuần của lớp",
      lines: [
        { speaker: "Minh", en: "Hurry up, Hoa! Everyone has turned up at the school gate except you!", vi: "Nhanh lên Hoa ơi! Mọi người đều đã có mặt ở cổng trường trừ cậu đấy!" },
        { speaker: "Hoa", en: "I'm sorry! I was looking for my sunglasses everywhere.", vi: "Mình xin lỗi! Mình mải tìm chiếc kính râm khắp nơi." },
        { speaker: "Minh", en: "Did you remember to turn off the air conditioner before leaving?", vi: "Cậu có nhớ tắt điều hòa trước khi ra khỏi nhà không đấy?" },
        { speaker: "Hoa", en: "Yes, I turned it off. Have we run out of bottled water for the trip?", vi: "Có, mình tắt rồi. Tụi mình có bị hết nước đóng chai cho chuyến đi không?" },
        { speaker: "Minh", en: "No, Nam already bought two more boxes. We are all looking forward to camping by the lake!", vi: "Không, Nam đã mua thêm hai thùng rồi. Tất cả tụi mình đều đang rất háo hức được cắm trại bên hồ!" },
        { speaker: "Hoa", en: "Awesome! Let's get on the bus before the teacher tells us off!", vi: "Tuyệt quá! Hãy lên xe buýt trước khi thầy giáo nhắc nhở tụi mình nào!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "Please ___ your shoes before entering the traditional stilt house.", options: ["take off", "put off", "turn off"], answer: "take off" },
        { q: "My neighbor asked me to ___ her garden while she was on holiday.", options: ["look after", "look up", "look for"], answer: "look after" },
        { q: "We had to ___ the outdoor concert because of the heavy rain.", options: ["put off", "put on", "take off"], answer: "put off" },
        { q: "I am really looking forward to ___ my grandparents this summer.", options: ["visit", "visiting", "visited"], answer: "visiting" },
        { q: "Could you ___ the music a bit? I'm trying to study for my exam.", options: ["turn down", "turn up", "look up"], answer: "turn down" },
        { q: "If you come across a new word, ___ in the Oxford dictionary.", options: ["look it up", "look up it", "look after it"], answer: "look it up" },
        { q: "We have ___ sugar. Could you buy a packet on your way home?", options: ["run out of", "given up", "taken off"], answer: "run out of" },
        { q: "My uncle decided to ___ smoking to improve his health.", options: ["give up", "turn up", "set up"], answer: "give up" },
        { q: "What time did the plane ___ from Noi Bai Airport?", options: ["take off", "put on", "turn on"], answer: "take off" },
        { q: "She is very friendly, so she ___ well with all her colleagues.", options: ["gets on", "runs out", "looks up"], answer: "gets on" }
      ],
      fillBlank: [
        { sentence: "Don't forget to ___ (turn off) the lights when you leave the classroom.", answer: "turn off", hint: "tắt thiết bị điện" },
        { sentence: "She is looking forward to ___ (hear) from the scholarship committee.", answer: "hearing", hint: "look forward to + V-ing" },
        { sentence: "I can't find my keys. Can you help me ___ (look for) them?", answer: "look for", hint: "tìm kiếm" },
        { sentence: "They had to ___ (put off) the football match until next Sunday.", answer: "put off", hint: "trì hoãn (= postpone)" },
        { sentence: "It's very cold outside. You should ___ (put on) a warm jacket.", answer: "put on", hint: "mặc áo vào" },
        { sentence: "We invited twenty people, but only fifteen ___ (turn up) at the party.", answer: "turned up", hint: "xuất hiện, đến (quá khứ)" },
        { sentence: "The printer has ___ (run out) of paper again.", answer: "run out", hint: "hết sạch, cạn kiệt (has + V3)" },
        { sentence: "Who will ___ (look after) the baby while you are at work?", answer: "look after", hint: "chăm sóc" }
      ],
      sentenceBuild: [
        { words: ["Please", "turn", "off", "the", "lights", "before", "leaving", "."], answer: "Please turn off the lights before leaving ." },
        { words: ["I", "am", "looking", "forward", "to", "our", "summer", "holiday", "."], answer: "I am looking forward to our summer holiday ." },
        { words: ["She", "looks", "after", "her", "little", "brother", "every", "evening", "."], answer: "She looks after her little brother every evening ." },
        { words: ["We", "have", "run", "out", "of", "milk", "and", "bread", "."], answer: "We have run out of milk and bread ." },
        { words: ["The", "plane", "took", "off", "on", "time", "this", "morning", "."], answer: "The plane took off on time this morning ." },
        { words: ["He", "never", "gives", "up", "when", "facing", "difficulties", "."], answer: "He never gives up when facing difficulties ." },
        { words: ["You", "can", "look", "up", "new", "words", "in", "a", "dictionary", "."], answer: "You can look up new words in a dictionary ." }
      ],
      transformation: [
        {
          sentence: "They postponed the meeting because the director was ill. (put)",
          hint: "Thay postponed bằng cụm động từ put off",
          answer: "They put off the meeting because the director was ill."
        },
        {
          sentence: "My sister takes care of our dog every day. (looks)",
          hint: "Thay takes care of bằng looks after",
          answer: "My sister looks after our dog every day."
        },
        {
          sentence: "He stopped eating fast food two months ago. (gave)",
          hint: "Thay stopped bằng gave up + V-ing",
          answer: "He gave up eating fast food two months ago."
        },
        {
          sentence: "I am excited about meeting my pen pal next week. (forward)",
          hint: "Sử dụng look forward to + V-ing: I am looking forward to meeting...",
          answer: "I am looking forward to meeting my pen pal next week."
        },
        {
          sentence: "There is no more coffee left in the jar. (run)",
          hint: "Sử dụng We have run out of coffee.",
          answer: "We have run out of coffee."
        }
      ],
      review: [
        { sentence: "My father used to ___ (walk) four kilometers to school.", answer: "walk", hint: "Ôn tập used to + V nguyên thể" },
        { sentence: "She is used to ___ (speak) English at work every day.", answer: "speaking", hint: "Ôn tập be used to + V-ing" },
        { sentence: "The lights are out. They ___ (must / can't) be at home right now.", answer: "can't", hint: "Ôn tập Suy luận phủ định chắc chắn" },
        { sentence: "At 9 AM tomorrow, we ___ (sit) in the exam room.", answer: "will be sitting", hint: "Ôn tập Tương lai tiếp diễn" },
        { sentence: "He asked me if I ___ (finish) the report the previous day.", answer: "had finished", hint: "Ôn tập Câu hỏi tường thuật" }
      ]
    }
  },

  // ==================== DAY 25 (STAGE 4 EXAM) ====================
  {
    day: 25,
    id: "day-25",
    cefr: "B1",
    stage: 4,
    stageName: "B1 Mastery",
    isExam: true,
    estimatedMinutes: 30,
    title: "Bài thi Cột mốc 5: Tương lai Tiếp diễn, Suy đoán, Used to & Phrasal Verbs",
    titleEn: "Stage 4 Milestone Exam (Days 21–24)",
    dailyGoal: "Tổng kiểm tra kiến thức về Thì tương lai tiếp diễn, Động từ khuyết thiếu chỉ sự suy đoán, cấu trúc Used to / Be used to và các Cụm động từ trọng tâm.",
    vocab: [
      { en: "phrasal verb", pos: "n phr", ipa: "/ˈfreɪzl vɜːrb/", vi: "cụm động từ", example: "Phrasal verbs are essential for natural B1 English." },
      { en: "particle", pos: "n", ipa: "/ˈpɑːrtɪkl/", vi: "tiểu từ (up, off, out, on...)", example: "Changing the particle changes the meaning of the verb." },
      { en: "carry on", pos: "phr v", ipa: "/ˈkæri ɑːn/", vi: "tiếp tục (= continue)", example: "Carry on working while I answer this phone call." },
      { en: "break down", pos: "phr v", ipa: "/breɪk daʊn/", vi: "bị hỏng máy (xe cộ, máy móc)", example: "Our bus broke down on the way to the museum." },
      { en: "bring up", pos: "phr v", ipa: "/brɪŋ ʌp/", vi: "nuôi nấng (con cái); nêu ra vấn đề", example: "She was brought up by her grandparents in the countryside." },
      { en: "call off", pos: "phr v", ipa: "/kɔːl ɔːf/", vi: "hủy bỏ (= cancel)", example: "They called off the picnic because of the thunderstorm." },
      { en: "grow up", pos: "phr v", ipa: "/ɡroʊ ʌp/", vi: "lớn lên, trưởng thành", example: "Where did you grow up?" },
      { en: "keep up with", pos: "phr v", ipa: "/kiːp ʌp wɪð/", vi: "bắt kịp, theo kịp", example: "Walk slowly so the children can keep up with us." },
      { en: "habit", pos: "n", ipa: "/ˈhæbɪt/", vi: "thói quen", example: "'Used to' describes a past habit that has stopped." },
      { en: "routine", pos: "n", ipa: "/ruːˈtiːn/", vi: "nếp sinh hoạt hàng ngày", example: "Waking up early has become part of my daily routine." },
      { en: "evidence", pos: "n", ipa: "/ˈevɪdəns/", vi: "bằng chứng", example: "Use 'must' when you have strong evidence for a deduction." },
      { en: "forecast", pos: "n", ipa: "/ˈfɔːrkæst/", vi: "dự báo thời tiết", example: "According to the forecast, it might snow tonight." },
      { en: "appointment", pos: "n", ipa: "/əˈpɔɪntmənt/", vi: "cuộc hẹn", example: "At 4 PM tomorrow, I will be having a dentist appointment." },
      { en: "perseverance", pos: "n", ipa: "/ˌpɜːrsəˈvɪrəns/", vi: "sự kiên trì, bền bỉ", example: "Perseverance means you never give up." }
    ],
    grammar: {
      point: "TỔNG ÔN CỘT MỐC 5: FUTURE CONTINUOUS, MODALS OF PROBABILITY, USED TO & PHRASAL VERBS",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Tương lai tiếp diễn & Động từ khuyết thiếu suy đoán</div>
          • <b>Future Continuous:</b> <code>S + will be + V-ing</code> — Đang diễn ra tại thời điểm cụ thể trong tương lai (<i>at 8 PM tomorrow, at this time next week</i>).<br/>
          • <b>Modals of Probability:</b> <code>may / might / could + V</code> (có lẽ, 30–50%) | <code>must + V</code> (ắt hẳn là, 95% đúng) | <code>can't + V</code> (không thể nào là, 95% sai).
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Used to vs. Be/Get used to & Cụm động từ (Phrasal Verbs)</div>
          • <b>Đã từng (quá khứ):</b> <code>S + used to + V(bare)</code> | <code>S + didn't use to + V(bare)</code> | <code>Did + S + use to + V(bare)?</code><br/>
          • <b>Quen với (hiện tại):</b> <code>S + be / get used to + V-ing / Noun</code>.<br/>
          • <b>Phrasal Verbs cốt lõi:</b> <code>look after</code> (chăm sóc), <code>look for</code> (tìm), <code>look up</code> (tra cứu), <code>look forward to + V-ing</code> (mong đợi), <code>put off</code> (hoãn), <code>give up</code> (từ bỏ), <code>run out of</code> (hết sạch), <code>turn down</code> (từ chối/vặn nhỏ).
        </div>
      `,
      examples: [
        "At this time tomorrow, we <b>will be flying</b> over the Pacific Ocean.",
        "He <b>used to live</b> in a small village, so he isn't <b>used to driving</b> in heavy traffic.",
        "We are <b>looking forward to</b> the trip, so I hope they won't <b>put it off</b>."
      ],
      commonMistake: {
        wrong: "Did you used to playing football when you were ten?",
        right: "**Did you use to play** football when you were ten?",
        note: "Khi đã mượn trợ động từ 'Did', động từ trở về 'use to' (không có -d) và theo sau là động từ nguyên thể 'play'!"
      },
      memoryTip: "4 điểm chốt bài thi số 5: (1) Giờ cụ thể tương lai -> will be V-ing, (2) Chắc chắn sai -> can't be, (3) Có be/get trước used to -> V-ing, (4) look forward to -> V-ing!"
    },
    dialogue: null,
    exercises: {
      multipleChoice: [
        { q: "At 10 AM tomorrow, the candidates ___ their English speaking test.", options: ["will take", "will be taking", "took"], answer: "will be taking" },
        { q: "Don't phone me between 7 and 8 PM tonight; I ___ dinner with my grandparents.", options: ["will be having", "have", "had"], answer: "will be having" },
        { q: "This time next month, we ___ along the coast of central Vietnam.", options: ["will travel", "will be traveling", "traveled"], answer: "will be traveling" },
        { q: "Take a warm jacket with you. It ___ get chilly in the mountains tonight.", options: ["might", "mustn't", "can't"], answer: "might" },
        { q: "She has just run a 42-kilometer marathon. She ___ be completely exhausted!", options: ["must", "can't", "may not"], answer: "must" },
        { q: "That man ___ be Mr. Brown because Mr. Brown moved to Canada last year.", options: ["must", "can't", "might"], answer: "can't" },
        { q: "A: Where is Mai? B: I'm not sure. She ___ be practicing in the music room.", options: ["may", "must", "can't"], answer: "may" },
        { q: "My father ___ play the guitar in a band when he was at university.", options: ["used to", "is used to", "gets used to"], answer: "used to" },
        { q: "I didn't ___ like durian, but now it is my favorite fruit.", options: ["use to", "used to", "using to"], answer: "use to" },
        { q: "She has lived in London for three years, so she is used to ___ on the left.", options: ["drive", "driving", "drove"], answer: "driving" },
        { q: "It took the new students a month to get used to ___ in the school dormitory.", options: ["live", "living", "lived"], answer: "living" },
        { q: "___ there use to be an old ferry station near this bridge?", options: ["Did", "Was", "Were"], answer: "Did" },
        { q: "We had to ___ the picnic until next weekend because of the typhoon.", options: ["put off", "put on", "turn off"], answer: "put off" },
        { q: "Could you ___ my dog while I am away on a business trip?", options: ["look after", "look up", "look for"], answer: "look after" },
        { q: "I am really looking forward to ___ from you soon.", options: ["hear", "hearing", "heard"], answer: "hearing" },
        { q: "Our printer has ___ ink, so we need to buy a new cartridge.", options: ["run out of", "given up", "taken off"], answer: "run out of" },
        { q: "Please ___ the television if nobody is watching it.", options: ["turn off", "take off", "put off"], answer: "turn off" },
        { q: "He ___ the job offer because the office was too far from his house.", options: ["turned down", "turned up", "looked up"], answer: "turned down" },
        { q: "If you don't know the meaning of this word, ___ in the dictionary.", options: ["look it up", "look up it", "look for it"], answer: "look it up" },
        { q: "Our car ___ on the highway, so we had to call a mechanic.", options: ["broke down", "gave up", "set up"], answer: "broke down" }
      ],
      fillBlank: [
        { sentence: "At 8 o'clock tomorrow evening, I ___ (watch) the final match.", answer: "will be watching", hint: "tương lai tiếp diễn" },
        { sentence: "What ___ you ___ (do) at this time next Sunday?", answer: "will be doing", alternatives: ["will you be doing"], hint: "câu hỏi tương lai tiếp diễn" },
        { sentence: "When you arrive tomorrow, we ___ (wait) for you at the airport.", answer: "will be waiting", hint: "tương lai tiếp diễn" },
        { sentence: "I'm not certain, but he ___ (might / must) arrive a bit late.", answer: "might", alternatives: ["may"], hint: "dự đoán không chắc chắn" },
        { sentence: "Look at all those trophies in her room! She ___ (must / can't) be a great athlete.", answer: "must", hint: "suy luận chắc chắn đúng" },
        { sentence: "He just had dinner ten minutes ago, so he ___ (must / can't) be hungry now.", answer: "can't", hint: "suy luận chắc chắn không đúng" },
        { sentence: "People ___ (use to) write letters by hand before email was invented.", answer: "used to", hint: "thói quen trong quá khứ" },
        { sentence: "He is a baker, so he is used to ___ (wake) up at 4 AM.", answer: "waking", hint: "be used to + V-ing" },
        { sentence: "I didn't ___ (use to) drink green tea when I was younger.", answer: "use to", hint: "didn't + use to" },
        { sentence: "You will soon get used to ___ (speak) English in class.", answer: "speaking", hint: "get used to + V-ing" },
        { sentence: "We are looking forward to ___ (join) the summer camp.", answer: "joining", hint: "look forward to + V-ing" },
        { sentence: "Don't ___ (give up) your dream just because it is difficult.", answer: "give up", hint: "từ bỏ" },
        { sentence: "Please ___ (take off) your wet raincoat before coming inside.", answer: "take off", hint: "cởi áo ra" },
        { sentence: "We have ___ (run out) of milk, so I'll buy some more.", answer: "run out", hint: "hết sạch (have + V3)" },
        { sentence: "They had to ___ (put off) the meeting until Friday.", answer: "put off", hint: "trì hoãn" },
        { sentence: "She ___ (look after) her younger sister every afternoon.", answer: "looks after", hint: "chăm sóc (chủ ngữ She hiện tại đơn)" },
        { sentence: "What time did your flight ___ (take off) yesterday?", answer: "take off", hint: "cất cánh (sau did)" },
        { sentence: "He ___ (set up) his own tech company three years ago.", answer: "set up", hint: "thành lập (quá khứ của set là set)" }
      ],
      sentenceBuild: [
        { words: ["At", "this", "time", "tomorrow", ",", "we", "will", "be", "flying", "."], answer: "At this time tomorrow , we will be flying ." },
        { words: ["What", "will", "you", "be", "doing", "at", "9", "PM", "tonight", "?"], answer: "What will you be doing at 9 PM tonight ?" },
        { words: ["She", "must", "be", "very", "happy", "with", "her", "exam", "results", "."], answer: "She must be very happy with her exam results ." },
        { words: ["That", "boy", "can't", "be", "Nam", "because", "Nam", "is", "taller", "."], answer: "That boy can't be Nam because Nam is taller ." },
        { words: ["It", "might", "rain", "this", "evening", ",", "so", "take", "an", "umbrella", "."], answer: "It might rain this evening , so take an umbrella ." },
        { words: ["My", "grandfather", "used", "to", "live", "in", "a", "small", "village", "."], answer: "My grandfather used to live in a small village ." },
        { words: ["I", "am", "used", "to", "studying", "in", "the", "library", "."], answer: "I am used to studying in the library ." },
        { words: ["He", "didn't", "use", "to", "eat", "spicy", "food", "."], answer: "He didn't use to eat spicy food ." },
        { words: ["We", "are", "looking", "forward", "to", "meeting", "you", "soon", "."], answer: "We are looking forward to meeting you soon ." },
        { words: ["Please", "turn", "down", "the", "radio", "a", "little", "bit", "."], answer: "Please turn down the radio a little bit ." },
        { words: ["They", "put", "off", "the", "trip", "because", "of", "the", "storm", "."], answer: "They put off the trip because of the storm ." },
        { words: ["We", "have", "run", "out", "of", "coffee", "this", "morning", "."], answer: "We have run out of coffee this morning ." }
      ],
      transformation: [
        {
          sentence: "Perhaps they are waiting for us at the coffee shop. (might)",
          hint: "Sử dụng might be waiting",
          answer: "They might be waiting for us at the coffee shop."
        },
        {
          sentence: "I am sure that this isn't the right address. (can't)",
          hint: "Sử dụng can't be",
          answer: "This can't be the right address."
        },
        {
          sentence: "She lived in Hue when she was a child, but now she lives in Hanoi. (used)",
          hint: "Sử dụng used to live",
          answer: "She used to live in Hue when she was a child.",
          alternatives: ["She used to live in Hue."]
        },
        {
          sentence: "Waking up early is familiar to me now. (am used)",
          hint: "Sử dụng I am used to waking up early now.",
          answer: "I am used to waking up early now.",
          alternatives: ["I am used to waking up early."]
        },
        {
          sentence: "They postponed the sports day because of heavy rain. (put)",
          hint: "Sử dụng put off the sports day",
          answer: "They put off the sports day because of heavy rain."
        }
      ],
      review: [
        { sentence: "The new library ___ (open) by the mayor next Monday.", answer: "will be opened", hint: "Ôn tập Bị động tương lai đơn" },
        { sentence: "She asked me ___ (if / that) I had ever been to Da Lat.", answer: "if", alternatives: ["whether"], hint: "Ôn tập Câu hỏi tường thuật Yes/No" },
        { sentence: "If I ___ (have) wings, I would fly around the world.", answer: "had", hint: "Ôn tập Câu điều kiện Loại 2" },
        { sentence: "He told me that he ___ (must) finish his work that night.", answer: "had to", hint: "Ôn tập lùi must ➔ had to trong câu tường thuật" },
        { sentence: "This is the ___ (good) documentary I have ever watched.", answer: "best", hint: "Ôn tập So sánh nhất" }
      ]
    }
  },

  // ==================== DAY 26 ====================
  {
    day: 26,
    id: "day-26",
    cefr: "B1",
    stage: 4,
    stageName: "B1 Mastery",
    isExam: false,
    estimatedMinutes: 25,
    title: "Danh động từ (V-ing) & Động từ nguyên thể (to V) Nâng cao",
    titleEn: "Gerunds & Infinitives (Advanced B1 Patterns)",
    dailyGoal: "Phân biệt các nhóm động từ đi với V-ing (avoid, suggest, mind, admit), đi với to V (decide, promise, refuse, manage) và nhóm đổi nghĩa (remember, forget, stop, try).",
    vocab: [
      { en: "gerund", pos: "n", ipa: "/ˈdʒerənd/", vi: "danh động từ (V-ing)", example: "A gerund functions as a noun in a sentence." },
      { en: "infinitive", pos: "n", ipa: "/ɪnˈfɪnətɪv/", vi: "động từ nguyên thể (to V)", example: "After 'decide' and 'promise', we use a to-infinitive." },
      { en: "avoid", pos: "v", ipa: "/əˈvɔɪd/", vi: "tránh (+ V-ing)", example: "You should avoid eating junk food late at night." },
      { en: "suggest", pos: "v", ipa: "/səˈdʒest/", vi: "gợi ý, đề xuất (+ V-ing)", example: "Minh suggested going to the museum by bus." },
      { en: "consider", pos: "v", ipa: "/kənˈsɪdər/", vi: "cân nhắc, xem xét (+ V-ing)", example: "Have you considered joining the debate club?" },
      { en: "admit", pos: "v", ipa: "/ədˈmɪt/", vi: "thừa nhận (+ V-ing)", example: "He admitted breaking the classroom window." },
      { en: "postpone", pos: "v", ipa: "/poʊˈspoʊn/", vi: "trì hoãn (+ V-ing)", example: "They postponed building the new stadium." },
      { en: "decide", pos: "v", ipa: "/dɪˈsaɪd/", vi: "quyết định (+ to V)", example: "She decided to apply for the scholarship." },
      { en: "refuse", pos: "v", ipa: "/rɪˈfjuːz/", vi: "từ chối (+ to V)", example: "He refused to tell us his secret." },
      { en: "manage", pos: "v", ipa: "/ˈmænɪdʒ/", vi: "xoay xở, cố gắng làm được (+ to V)", example: "We managed to reach the summit before sunset." },
      { en: "afford", pos: "v", ipa: "/əˈfɔːrd/", vi: "đủ khả năng chi trả (+ to V)", example: "They can't afford to buy a luxury apartment." },
      { en: "pretend", pos: "v", ipa: "/prɪˈtend/", vi: "giả vờ (+ to V)", example: "The boy pretended to be asleep when his mom entered." },
      { en: "hesitate", pos: "v", ipa: "/ˈhezɪteɪt/", vi: "do dự, ngần ngại (+ to V)", example: "Don't hesitate to ask me if you need help." },
      { en: "regret", pos: "v", ipa: "/rɪˈɡret/", vi: "hối tiếc (+ V-ing); lấy làm tiếc khi báo tin (+ to V)", example: "I regret wasting so much time playing games." }
    ],
    grammar: {
      point: "DANH ĐỘNG TỪ (GERUNDS: V-ING) & ĐỘNG TỪ NGUYÊN THỂ (TO-INFINITIVES)",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Nhóm BẮT BUỘC + V-ING vs. Nhóm BẮT BUỘC + TO V</div>
          <b>• Động từ + V-ING:</b> <code>enjoy, avoid, suggest, mind, finish, practice, consider, admit, deny, postpone, keep, spend (time)</code><br/>
          <b>• Sau mọi Giới từ (in, on, at, of, for, about, without, instead of, look forward to):</b> luôn dùng <code>V-ING</code>!<br/>
          <b>• Động từ + TO V:</b> <code>want, decide, promise, agree, refuse, hope, plan, manage, afford, offer, learn, expect, seem</code><br/>
          <b>• Tính từ + TO V:</b> <code>It is + Adj (easy, hard, important, exciting) + to V</code>
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Nhóm Động từ ĐỔI NGHĨA khi đi với V-ING và TO V</div>
          • <b>remember / forget + TO V:</b> nhớ / quên <i>phải làm nhiệm vụ gì</i> (chưa làm).<br/>
          • <b>remember / forget + V-ING:</b> nhớ / quên <i>là đã từng làm gì trong quá khứ</i> (đã làm rồi).<br/>
          • <b>stop + V-ING:</b> dừng hẳn việc đang làm | <b>stop + TO V:</b> dừng lại <i>để chuyển sang làm việc khác</i>.<br/>
          • <b>try + TO V:</b> cố gắng, nỗ lực làm gì | <b>try + V-ING:</b> thử làm gì xem kết quả ra sao.
        </div>
      `,
      examples: [
        "My doctor advised me to <b>avoid eating</b> late at night, and I <b>decided to follow</b> his advice.",
        "Please <b>remember to lock</b> the door before you leave! (Nhớ nhiệm vụ phải khóa cửa)",
        "I clearly <b>remember locking</b> the door this morning. (Nhớ là sáng nay đã khóa rồi)"
      ],
      commonMistake: {
        wrong: "Nam suggested to go to the cinema this evening.",
        right: "Nam suggested **going** to the cinema this evening.",
        note: "Động từ 'suggest' tuyệt đối KHÔNG bao giờ đi với 'to V'! Chỉ dùng 'suggest + V-ing' hoặc 'suggest + (that) + S + (should) + V(bare)'."
      },
      memoryTip: "Nhớ mẹo: Việc CHƯA LÀM (nhiệm vụ hướng tới tương lai) ➔ TO V (remember/forget/stop to V). Việc ĐÃ/ĐANG LÀM ➔ V-ING (remember/forget/stop V-ing)!"
    },
    dialogue: {
      titleVi: "Tình huống: Thảo luận kế hoạch cải thiện kỹ năng giao tiếp tiếng Anh",
      lines: [
        { speaker: "An", en: "You speak English so fluently now, Linh! How did you manage to improve so fast?", vi: "Giờ cậu nói tiếng Anh trôi chảy quá Linh ơi! Làm sao cậu xoay xở tiến bộ nhanh vậy?" },
        { speaker: "Linh", en: "At first, I used to avoid speaking in class because I was afraid of making mistakes.", vi: "Ban đầu, mình từng né tránh nói trên lớp vì sợ mắc lỗi." },
        { speaker: "An", en: "What made you change your habit?", vi: "Điều gì đã khiến cậu thay đổi thói quen vậy?" },
        { speaker: "Linh", en: "My teacher suggested practicing in front of a mirror for ten minutes every day.", vi: "Cô giáo mình gợi ý luyện nói trước gương mười phút mỗi ngày." },
        { speaker: "An", en: "Did you also join any speaking clubs?", vi: "Cậu có tham gia câu lạc bộ nói nào nữa không?" },
        { speaker: "Linh", en: "Yes! I decided to join the school Debate Club, and I never forget to review new phrases before sleeping.", vi: "Có chứ! Mình đã quyết định tham gia CLB Tranh biện của trường, và mình không bao giờ quên ôn lại các cụm từ mới trước khi đi ngủ." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "My brother suggested ___ a picnic by the lake this Sunday.", options: ["having", "to have", "have"], answer: "having" },
        { q: "After two hours of discussion, they finally decided ___ the contract.", options: ["signing", "to sign", "sign"], answer: "to sign" },
        { q: "You should avoid ___ your smartphone in a dark room.", options: ["using", "to use", "use"], answer: "using" },
        { q: "Please remember ___ the lights before you leave the office.", options: ["turning off", "to turn off", "turn off"], answer: "to turn off" },
        { q: "Despite the heavy traffic, we managed ___ at the airport on time.", options: ["arriving", "to arrive", "arrive"], answer: "to arrive" },
        { q: "He admitted ___ the vase while he was cleaning the living room.", options: ["breaking", "to break", "break"], answer: "breaking" },
        { q: "I will never forget ___ Ha Long Bay for the first time in 2019.", options: ["visiting", "to visit", "visit"], answer: "visiting" },
        { q: "She refused ___ any questions about the accident.", options: ["answering", "to answer", "answer"], answer: "to answer" },
        { q: "Thank you for ___ me with my science presentation yesterday.", options: ["helping", "to help", "help"], answer: "helping" },
        { q: "He stopped ___ a bottle of water because he was very thirsty.", options: ["buying", "to buy", "buy"], answer: "to buy" }
      ],
      fillBlank: [
        { sentence: "Have you finished ___ (write) your English essay yet?", answer: "writing", hint: "sau finish + V-ing" },
        { sentence: "She promised ___ (help) me prepare for the interview.", answer: "to help", hint: "sau promise + to V" },
        { sentence: "Would you mind ___ (close) the window? It's getting cold.", answer: "closing", hint: "sau mind + V-ing" },
        { sentence: "They can't afford ___ (buy) a house in the city center.", answer: "to buy", hint: "sau afford + to V" },
        { sentence: "He kept ___ (talk) although the movie had already started.", answer: "talking", hint: "sau keep + V-ing" },
        { sentence: "Don't forget ___ (bring) your umbrella tomorrow morning.", answer: "to bring", hint: "nhắc nhở nhiệm vụ chưa làm: forget + to V" },
        { sentence: "She is interested in ___ (learn) traditional pottery.", answer: "learning", hint: "sau giới từ in + V-ing" },
        { sentence: "It is very important ___ (protect) our environment.", answer: "to protect", hint: "It is + adj + to V" }
      ],
      sentenceBuild: [
        { words: ["He", "suggested", "going", "to", "the", "museum", "by", "bus", "."], answer: "He suggested going to the museum by bus ." },
        { words: ["She", "decided", "to", "study", "abroad", "next", "year", "."], answer: "She decided to study abroad next year ." },
        { words: ["You", "should", "avoid", "eating", "too", "much", "fast", "food", "."], answer: "You should avoid eating too much fast food ." },
        { words: ["Please", "remember", "to", "lock", "the", "door", "carefully", "."], answer: "Please remember to lock the door carefully ." },
        { words: ["We", "managed", "to", "finish", "the", "project", "on", "time", "."], answer: "We managed to finish the project on time ." },
        { words: ["Would", "you", "mind", "opening", "the", "window", "for", "me", "?"], answer: "Would you mind opening the window for me ?" },
        { words: ["I", "will", "never", "forget", "meeting", "her", "in", "Hue", "."], answer: "I will never forget meeting her in Hue ." }
      ],
      transformation: [
        {
          sentence: "\"Why don't we visit the national park this weekend?\" said Nam. (suggested)",
          hint: "Sử dụng cấu trúc Nam suggested + V-ing",
          answer: "Nam suggested visiting the national park this weekend."
        },
        {
          sentence: "Could you please turn down the music? (mind)",
          hint: "Sử dụng Would you mind + V-ing",
          answer: "Would you mind turning down the music?"
        },
        {
          sentence: "Learning foreign languages is very exciting. (It)",
          hint: "Sử dụng cấu trúc giả chủ ngữ It is exciting to...",
          answer: "It is very exciting to learn foreign languages.",
          alternatives: ["It is exciting to learn foreign languages."]
        },
        {
          sentence: "He succeeded in fixing the broken computer by himself. (managed)",
          hint: "Thay succeeded in V-ing bằng managed to V",
          answer: "He managed to fix the broken computer by himself."
        },
        {
          sentence: "She said, \"I won't tell anyone your secret.\" (promised)",
          hint: "Sử dụng She promised not to tell...",
          answer: "She promised not to tell anyone my secret.",
          alternatives: ["She promised not to tell anyone your secret."]
        }
      ],
      review: [
        { sentence: "We have ___ (run out) of printer paper in the office.", answer: "run out", hint: "Ôn tập Phrasal Verbs" },
        { sentence: "My sister is used to ___ (ride) her bike to school.", answer: "riding", hint: "Ôn tập be used to + V-ing" },
        { sentence: "He ___ (must / can't) be at home because his car is parked outside.", answer: "must", hint: "Ôn tập Động từ khuyết thiếu suy đoán" },
        { sentence: "At 3 PM tomorrow, I ___ (have) a meeting with the manager.", answer: "will be having", hint: "Ôn tập Tương lai tiếp diễn" },
        { sentence: "The ancient bridge ___ (restore) by local experts last year.", answer: "was restored", hint: "Ôn tập Bị động quá khứ đơn" }
      ]
    }
  },

  // ==================== DAY 27 ====================
  {
    day: 27,
    id: "day-27",
    cefr: "B1",
    stage: 4,
    stageName: "B1 Mastery",
    isExam: false,
    estimatedMinutes: 25,
    title: "Lượng từ (Quantifiers): Much, Many, A few, A little, Some & Any",
    titleEn: "Quantifiers with Countable & Uncountable Nouns",
    dailyGoal: "Sử dụng chính xác các lượng từ đi với danh từ đếm được số nhiều (many, a few, few) và danh từ không đếm được (much, a little, little), kể cả danh từ trừu tượng dễ nhầm (advice, information, furniture, luggage).",
    vocab: [
      { en: "quantifier", pos: "n", ipa: "/ˈkwɑːntɪfaɪər/", vi: "lượng từ (từ chỉ số lượng)", example: "Choose the right quantifier based on whether the noun is countable." },
      { en: "countable", pos: "adj", ipa: "/ˈkaʊntəbl/", vi: "đếm được", example: "'Book' and 'apple' are countable nouns." },
      { en: "uncountable", pos: "adj", ipa: "/ʌnˈkaʊntəbl/", vi: "không đếm được", example: "'Water', 'advice', and 'information' are uncountable nouns." },
      { en: "a few", pos: "det", ipa: "/ə fjuː/", vi: "một vài (đủ dùng, + danh từ đếm được số nhiều)", example: "I have a few close friends in this city." },
      { en: "few", pos: "det", ipa: "/fjuː/", vi: "rất ít, hầu như không có (+ N số nhiều)", example: "Very few people knew the answer to that riddle." },
      { en: "a little", pos: "det", ipa: "/ə ˈlɪtl/", vi: "một chút (đủ dùng, + danh từ không đếm được)", example: "Would you like a little milk in your coffee?" },
      { en: "little", pos: "det", ipa: "/ˈlɪtl/", vi: "rất ít, hầu như không còn (+ N không đếm được)", example: "Hurry up! We have very little time left." },
      { en: "plenty of", pos: "det phr", ipa: "/ˈplenti əv/", vi: "nhiều, dồi dào (+ cả đếm được & không đếm được)", example: "Don't rush; we have plenty of time." },
      { en: "luggage", pos: "n", ipa: "/ˈlʌɡɪdʒ/", vi: "hành lý (danh từ không đếm được)", example: "How much luggage are you taking on the flight?" },
      { en: "furniture", pos: "n", ipa: "/ˈfɜːrnɪtʃər/", vi: "đồ nội thất (danh từ không đếm được)", example: "There isn't much furniture in the new apartment." },
      { en: "information", pos: "n", ipa: "/ˌɪnfərˈmeɪʃn/", vi: "thông tin (danh từ không đếm được)", example: "Could you give me some information about the course?" },
      { en: "equipment", pos: "n", ipa: "/ɪˈkwɪpmənt/", vi: "trang thiết bị (danh từ không đếm được)", example: "The lab has a lot of modern equipment." },
      { en: "traffic", pos: "n", ipa: "/ˈtræfɪk/", vi: "giao thông, xe cộ (danh từ không đếm được)", example: "There was too much traffic on the bridge this morning." },
      { en: "ingredient", pos: "n", ipa: "/ɪnˈɡriːdiənt/", vi: "nguyên liệu nấu ăn (đếm được)", example: "We only need a few fresh ingredients for this salad." }
    ],
    grammar: {
      point: "LƯỢNG TỪ (QUANTIFIERS): MUCH, MANY, A LOT OF, A FEW, A LITTLE, SOME, ANY",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Phân chia theo Danh từ Đếm được số nhiều vs. Không đếm được</div>
          <b>• Đi với Danh từ ĐẾM ĐƯỢC SỐ NHIỀU (books, students, apples, people, children):</b><br/>
          &nbsp;&nbsp;- <code>many</code> (nhiều) | <code>a few</code> (một vài — mang nghĩa tích cực, đủ dùng) | <code>few</code> (rất ít, hầu như không đủ).<br/>
          <b>• Đi với Danh từ KHÔNG ĐẾM ĐƯỢC (water, time, money, traffic, advice, information, furniture, luggage, news):</b><br/>
          &nbsp;&nbsp;- <code>much</code> (nhiều) | <code>a little</code> (một chút — đủ dùng) | <code>little</code> (rất ít, gần như cạn kiệt).<br/>
          <b>• Đi được với CẢ HAI:</b> <code>a lot of / lots of / plenty of</code> (khẳng định), <code>some</code> (khẳng định & lời mời/đề nghị <i>Would you like some...?</i>), <code>any</code> (phủ định & nghi vấn).
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Nhóm Danh từ KHÔNG ĐẾM ĐƯỢC đặc biệt hay gặp trong đề thi</div>
          • Tuyệt đối KHÔNG thêm "-s" và KHÔNG dùng "many / a few" với: <code>advice</code> (lời khuyên), <code>information</code> (thông tin), <code>furniture</code> (nội thất), <code>luggage / baggage</code> (hành lý), <code>equipment</code> (thiết bị), <code>homework / housework</code>, <code>news</code> (tin tức), <code>knowledge</code> (kiến thức).<br/>
          • Muốn đếm 1 đơn vị của chúng, dùng: <code>a piece of advice / information / furniture / news</code>.
        </div>
      `,
      examples: [
        "She gave me <b>a little</b> useful <b>advice</b> and <b>a few</b> good <b>books</b>.",
        "There isn't <b>much furniture</b> in the room, just <b>a few chairs</b>.",
        "Hurry up! We have <b>little time</b> left before the train departs."
      ],
      commonMistake: {
        wrong: "Can you give me a few informations about the hotel?",
        right: "Can you give me **a little information** (OR **some information**) about the hotel?",
        note: "'Information' là danh từ KHÔNG đếm được nên không bao giờ có 's' ở cuối và không đi với 'a few'!"
      },
      memoryTip: "Cặp đôi vàng: MANY - A FEW đi với Số nhiều đếm được (có s). MUCH - A LITTLE đi với Không đếm được (không s)!"
    },
    dialogue: {
      titleVi: "Tình huống: Kiểm tra nguyên liệu trong bếp để chuẩn bị làm bánh cuối tuần",
      lines: [
        { speaker: "Mai", en: "Let's make an apple pie this afternoon, Nam! Do we have all the ingredients?", vi: "Chiều nay tụi mình làm bánh táo đi Nam! Tụi mình có đủ nguyên liệu không?" },
        { speaker: "Nam", en: "Let me check the fridge. We have a lot of apples, at least ten of them.", vi: "Để mình kiểm tra tủ lạnh xem. Tụi mình có rất nhiều táo, ít nhất là mười quả." },
        { speaker: "Mai", en: "Great! How much flour and sugar do we have left?", vi: "Tuyệt! Thế tụi mình còn bao nhiêu bột mì và đường?" },
        { speaker: "Nam", en: "We have plenty of flour, but there is only a little sugar in the jar.", vi: "Tụi mình có nhiều bột mì, nhưng chỉ còn một chút đường trong lọ thôi." },
        { speaker: "Mai", en: "Are there any eggs or butter?", vi: "Có quả trứng hay chút bơ nào không?" },
        { speaker: "Nam", en: "There are a few eggs—four, to be exact—and a little butter. That's just enough for one pie!", vi: "Có một vài quả trứng—chính xác là bốn quả—và một chút bơ. Thế là vừa đủ cho một chiếc bánh rồi!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "How ___ luggage are you allowed to bring onto the airplane?", options: ["much", "many", "few"], answer: "much" },
        { q: "We only have ___ minutes left before the exam ends, so check your answers quickly!", options: ["a few", "a little", "much"], answer: "a few" },
        { q: "Could you give me ___ information about the summer exchange program?", options: ["some", "many", "a few"], answer: "some" },
        { q: "There isn't ___ traffic on the streets early on Sunday morning.", options: ["much", "many", "a few"], answer: "much" },
        { q: "She speaks ___ French, so she can ask for basic directions in Paris.", options: ["a little", "a few", "many"], answer: "a little" },
        { q: "How ___ students participated in the English eloquence contest?", options: ["many", "much", "little"], answer: "many" },
        { q: "I don't have ___ cash with me. Can I pay by credit card?", options: ["any", "some", "many"], answer: "any" },
        { q: "The teacher gave us ___ helpful advice before the final test.", options: ["a lot of", "many", "a few"], answer: "a lot of" },
        { q: "Would you like ___ more orange juice?", options: ["some", "any", "a few"], answer: "some" },
        { q: "Only ___ tourists visit this remote island during the rainy season.", options: ["a few", "a little", "much"], answer: "a few" }
      ],
      fillBlank: [
        { sentence: "There are ___ (a few / a little) mistakes in your essay that you should fix.", answer: "a few", hint: "mistakes là danh từ đếm được số nhiều" },
        { sentence: "Please add ___ (a few / a little) honey to my warm lemon tea.", answer: "a little", hint: "honey là danh từ không đếm được" },
        { sentence: "How ___ (much / many) money did you spend on those books?", answer: "much", hint: "money là danh từ không đếm được" },
        { sentence: "How ___ (much / many) chairs do we need for the meeting room?", answer: "many", hint: "chairs là danh từ đếm được số nhiều" },
        { sentence: "We didn't buy ___ (some / any) souvenirs because the shop was closed.", answer: "any", hint: "câu phủ định dùng any" },
        { sentence: "There is very ___ (little / few) water left in the bottle; we need to refill it.", answer: "little", hint: "water không đếm được" },
        { sentence: "She has ___ (a lot of / many) furniture in her living room.", answer: "a lot of", hint: "furniture không đếm được nên không dùng many" },
        { sentence: "Would you like ___ (some / any) biscuits with your tea?", answer: "some", hint: "câu mời lịch sự dùng some" }
      ],
      sentenceBuild: [
        { words: ["She", "gave", "me", "some", "useful", "advice", "."], answer: "She gave me some useful advice ." },
        { words: ["We", "only", "have", "a", "little", "time", "left", "."], answer: "We only have a little time left ." },
        { words: ["There", "are", "a", "few", "apples", "on", "the", "table", "."], answer: "There are a few apples on the table ." },
        { words: ["How", "much", "information", "did", "you", "find", "online", "?"], answer: "How much information did you find online ?" },
        { words: ["How", "many", "languages", "can", "your", "sister", "speak", "?"], answer: "How many languages can your sister speak ?" },
        { words: ["There", "isn't", "much", "furniture", "in", "this", "room", "."], answer: "There isn't much furniture in this room ." },
        { words: ["Would", "you", "like", "a", "little", "milk", "in", "your", "coffee", "?"], answer: "Would you like a little milk in your coffee ?" }
      ],
      transformation: [
        {
          sentence: "There is only a small amount of milk in the fridge. (little)",
          hint: "Thay a small amount of bằng a little",
          answer: "There is only a little milk in the fridge."
        },
        {
          sentence: "She invited several close friends to her birthday dinner. (a few)",
          hint: "Thay several bằng a few",
          answer: "She invited a few close friends to her birthday dinner."
        },
        {
          sentence: "There aren't many kursi/seats left in the theater. ➔ There are only ___ seats left in the theater. (few)",
          hint: "Viết cả câu dùng only a few seats left in the theater",
          answer: "There are only a few seats left in the theater.",
          alternatives: ["There are only a few seats left in the theatre."]
        },
        {
          sentence: "We have a large amount of homework to do tonight. (lot)",
          hint: "Sử dụng a lot of homework",
          answer: "We have a lot of homework to do tonight."
        },
        {
          sentence: "There is no coffee left in the pot. (any)",
          hint: "Chuyển no thành isn't any",
          answer: "There isn't any coffee left in the pot.",
          alternatives: ["There is not any coffee left in the pot."]
        }
      ],
      review: [
        { sentence: "He avoided ___ (answer) my question directly.", answer: "answering", hint: "Ôn tập avoid + V-ing" },
        { sentence: "She promised ___ (send) me the document before noon.", answer: "to send", hint: "Ôn tập promise + to V" },
        { sentence: "We had to ___ (put off) the match because of the rain.", answer: "put off", hint: "Ôn tập Phrasal Verbs" },
        { sentence: "Are you used to ___ (eat) with chopsticks?", answer: "eating", hint: "Ôn tập be used to + V-ing" },
        { sentence: "This poem ___ (translate) into English fifty years ago.", answer: "was translated", hint: "Ôn tập Bị động quá khứ đơn" }
      ]
    }
  },

  // ==================== DAY 28 ====================
  {
    day: 28,
    id: "day-28",
    cefr: "B1",
    stage: 4,
    stageName: "B1 Mastery",
    isExam: false,
    estimatedMinutes: 25,
    title: "Giới từ Thời gian, Nơi chốn & Câu cảm thán (What / How)",
    titleEn: "Prepositions of Time/Place & Exclamatory Sentences",
    dailyGoal: "Phân biệt chuẩn xác các giới từ in, on, at cho thời gian và địa điểm, đồng thời viết thành thạo hai cấu trúc câu cảm thán bắt đầu bằng What và How.",
    vocab: [
      { en: "preposition", pos: "n", ipa: "/ˌprepəˈzɪʃn/", vi: "giới từ (in, on, at...)", example: "Use the preposition 'on' before days of the week." },
      { en: "exclamation", pos: "n", ipa: "/ˌekskləˈmeɪʃn/", vi: "câu cảm thán, lời cảm thán", example: "An exclamation ends with an exclamation mark (!)." },
      { en: "magnificent", pos: "adj", ipa: "/mæɡˈnɪfɪsnt/", vi: "tráng lệ, nguy nga", example: "What a magnificent palace this is!" },
      { en: "breathtaking", pos: "adj", ipa: "/ˈbreθteɪkɪŋ/", vi: "đẹp ngoạn mục, hấp dẫn", example: "What breathtaking scenery Ha Giang has!" },
      { en: "delicious", pos: "adj", ipa: "/dɪˈlɪʃəs/", vi: "ngon miệng", example: "What delicious pho you cooked!" },
      { en: "awful", pos: "adj", ipa: "/ˈɔːfl/", vi: "tồi tệ, kinh khủng", example: "What awful weather we are having today!" },
      { en: "gracefully", pos: "adv", ipa: "/ˈɡreɪsfəli/", vi: "một cách duyên dáng, uyển chuyển", example: "How gracefully the dancers performed!" },
      { en: "midnight", pos: "n", ipa: "/ˈmɪdnaɪt/", vi: "nửa đêm (12 giờ đêm — dùng at midnight)", example: "The fireworks started right at midnight." },
      { en: "dawn", pos: "n", ipa: "/dɔːn/", vi: "bình minh, rạng đông (at dawn)", example: "Fishermen set sail at dawn every day." },
      { en: "century", pos: "n", ipa: "/ˈsentʃəri/", vi: "thế kỷ (in the 21st century)", example: "Technology has grown rapidly in the 21st century." },
      { en: "anniversary", pos: "n", ipa: "/ˌænɪˈvɜːrsəri/", vi: "ngày kỷ niệm (on their anniversary)", example: "They went out for dinner on their wedding anniversary." },
      { en: "intersection", pos: "n", ipa: "/ˌɪntərˈsekʃn/", vi: "ngã tư, giao lộ (at the intersection)", example: "Turn left at the next intersection." },
      { en: "floor", pos: "n", ipa: "/flɔːr/", vi: "tầng nhà (on the second floor)", example: "Our classroom is on the third floor." },
      { en: "neighborhood", pos: "n", ipa: "/ˈneɪbərhʊd/", vi: "khu phố, vùng lân cận (in the neighborhood)", example: "There is a quiet park in my neighborhood." }
    ],
    grammar: {
      point: "GIỚI TỪ (IN / ON / AT) & CÂU CẢM THÁN (EXCLAMATORY SENTENCES: WHAT / HOW)",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Tam giác Giới từ IN — ON — AT (Thời gian & Nơi chốn)</div>
          <b>• IN (Rộng lớn — Tháng, Năm, Mùa, Thế kỷ, Buổi / Quốc gia, Thành phố, Không gian kín):</b><br/>
          &nbsp;&nbsp;<i>in May, in 2026, in summer, in the morning | in Vietnam, in Hanoi, in a room/box/park.</i><br/>
          <b>• ON (Trung bình — Thứ, Ngày cụ thể, Ngày lễ có chữ 'Day' / Bề mặt, Tầng nhà, Đường phố):</b><br/>
          &nbsp;&nbsp;<i>on Monday, on May 15th, on New Year's Day, on my birthday | on the table, on the 2nd floor, on Le Loi Street.</i><br/>
          <b>• AT (Điểm nhỏ cụ thể — Giờ giấc, Khoảnh khắc, Lễ hội không có 'Day' / Địa chỉ có số nhà, Điểm hẹn):</b><br/>
          &nbsp;&nbsp;<i>at 7 AM, at noon, at night, at midnight, at Tet, at Christmas | at 25 Tran Phu Street, at the bus stop, at home/school/work.</i>
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Cấu trúc Câu cảm thán (Exclamations với WHAT và HOW)</div>
          <b>• Dùng WHAT (+ Cụm danh từ):</b><br/>
          &nbsp;&nbsp;- Số ít đếm được: <code>What + a / an + Adj + N(số ít) (+ S + V)!</code> (<i>What a smart boy! / What an interesting movie it is!</i>)<br/>
          &nbsp;&nbsp;- Số nhiều / Không đếm được (BỎ a/an!): <code>What + Adj + N(số nhiều / không đếm được) (+ S + V)!</code> (<i>What beautiful flowers! / What nice weather!</i>)<br/>
          <b>• Dùng HOW (+ Tính từ / Trạng từ đứng liền sau How):</b><br/>
          &nbsp;&nbsp;- <code>How + Adj / Adv + S + V!</code> (<i>How smart the boy is! / How fast he runs!</i>)
        </div>
      `,
      examples: [
        "The meeting starts <b>at</b> 9 AM <b>on</b> Monday, May 10th <b>in</b> the main hall.",
        "<b>What an</b> interesting book! = <b>How</b> interesting the book is!",
        "<b>What</b> awful weather! (Không dùng 'a' vì weather không đếm được!)"
      ],
      commonMistake: {
        wrong: "What a beautiful weather we have on May!",
        right: "**What beautiful weather** we have **in** May!",
        note: "1. 'Weather' là danh từ không đếm được nên tuyệt đối KHÔNG dùng 'a/an' trong câu cảm thán What! 2. Trước tên tháng (May) dùng 'in', chỉ khi có thêm ngày (May 5th) mới dùng 'on'."
      },
      memoryTip: "Mẹo câu cảm thán: Có Danh từ đứng ngay sau tính từ ➔ dùng WHAT (nhớ xét a/an). Chỉ có Tính từ/Trạng từ rồi đến S + V ➔ dùng HOW!"
    },
    dialogue: {
      titleVi: "Tình huống: Khen ngợi triển lãm ảnh nghệ thuật tại Trung tâm Văn hóa",
      lines: [
        { speaker: "Lan", en: "Look at this photograph of Ha Giang in autumn, Minh!", vi: "Nhìn bức ảnh chụp Hà Giang vào mùa thu này đi Minh!" },
        { speaker: "Minh", en: "Wow, what breathtaking scenery! How Golden the terraced fields look!", vi: "Chà, phong cảnh ngoạn mục biết bao! Những thửa ruộng bậc thang trông vàng óng làm sao!" },
        { speaker: "Lan", en: "The photographer took this picture at dawn on October 12th.", vi: "Nhiếp ảnh gia đã chụp bức ảnh này vào lúc bình minh ngày 12 tháng Mười đấy." },
        { speaker: "Minh", en: "What a talented artist he is! Where is the next photo gallery?", vi: "Ông ấy quả là một nghệ sĩ tài năng! Phòng trưng bày ảnh tiếp theo ở đâu thế?" },
        { speaker: "Lan", en: "It's on the second floor, right at the end of the corridor.", vi: "Nó ở trên tầng hai, ngay tại cuối hành lang." },
        { speaker: "Minh", en: "Great! Let's go upstairs before the center closes at 6 PM.", vi: "Tuyệt! Hãy lên lầu trước khi trung tâm đóng cửa vào lúc 6 giờ chiều nhé." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "President Ho Chi Minh read the Declaration of Independence ___ September 2nd, 1945.", options: ["on", "in", "at"], answer: "on" },
        { q: "The stars shine brightly in the sky ___ night.", options: ["at", "in", "on"], answer: "at" },
        { q: "___ a wonderful performance they gave last night!", options: ["What", "How", "So"], answer: "What" },
        { q: "___ fluently she speaks both English and Japanese!", options: ["How", "What", "What a"], answer: "How" },
        { q: "___ delicious food your mother cooked for the party!", options: ["What", "What a", "How"], answer: "What" },
        { q: "My grandparents' apartment is ___ the fifth floor of that building.", options: ["on", "in", "at"], answer: "on" },
        { q: "We always gather for a big family dinner ___ Tet.", options: ["at", "on", "in"], answer: "at" },
        { q: "Cherry blossoms bloom beautifully in Japan ___ spring.", options: ["in", "on", "at"], answer: "in" },
        { q: "___ an intelligent girl your sister is!", options: ["What", "How", "What a"], answer: "What" },
        { q: "Let's meet ___ the bus stop in front of the school ___ 6:45 AM.", options: ["at / at", "on / at", "in / on"], answer: "at / at" }
      ],
      fillBlank: [
        { sentence: "Our summer holiday usually begins ___ (in / on / at) June.", answer: "in", hint: "trước tên tháng dùng in" },
        { sentence: "My birthday is ___ (in / on / at) November 20th.", answer: "on", hint: "trước ngày tháng cụ thể dùng on" },
        { sentence: "The train to Hue leaves ___ (in / on / at) 7:30 PM tonight.", answer: "at", hint: "trước giờ cụ thể dùng at" },
        { sentence: "___ (What / How) cold the water in this swimming pool is!", answer: "How", hint: "How + adj + S + V!" },
        { sentence: "___ (What / How) a lovely puppy you have!", answer: "What", hint: "What + a + adj + N!" },
        { sentence: "What ___ (a / an / x) expensive watch he is wearing!", answer: "an", hint: "expensive bắt đầu bằng nguyên âm, watch đếm được số ít" },
        { sentence: "What ___ (a / an / x) terrible weather we are having today!", answer: "x", alternatives: ["no article", "rỗng"], hint: "weather không đếm được nên không dùng a/an" },
        { sentence: "His office is located ___ (in / on / at) 45 Nguyen Hue Street.", answer: "at", hint: "địa chỉ có số nhà cụ thể dùng at" }
      ],
      sentenceBuild: [
        { words: ["What", "a", "beautiful", "day", "it", "is", "!"], answer: "What a beautiful day it is !" },
        { words: ["How", "fast", "that", "electric", "car", "runs", "!"], answer: "How fast that electric car runs !" },
        { words: ["What", "delicious", "cakes", "she", "has", "baked", "!"], answer: "What delicious cakes she has baked !" },
        { words: ["The", "meeting", "is", "at", "9", "AM", "on", "Monday", "."], answer: "The meeting is at 9 AM on Monday ." },
        { words: ["We", "live", "on", "the", "third", "floor", "."], answer: "We live on the third floor ." },
        { words: ["How", "kind", "you", "are", "to", "help", "me", "!"], answer: "How kind you are to help me !" },
        { words: ["What", "an", "interesting", "story", "he", "told", "us", "!"], answer: "What an interesting story he told us !" }
      ],
      transformation: [
        {
          sentence: "The movie is very exciting. (What)",
          hint: "Sử dụng What an exciting movie! (hoặc What an exciting movie it is!)",
          answer: "What an exciting movie!",
          alternatives: ["What an exciting movie it is!"]
        },
        {
          sentence: "What a tall building that is! (How)",
          hint: "Chuyển từ What sang How: How tall that building is!",
          answer: "How tall that building is!"
        },
        {
          sentence: "She sings very beautifully. (How)",
          hint: "Sử dụng How + adv + S + V: How beautifully she sings!",
          answer: "How beautifully she sings!"
        },
        {
          sentence: "The weather is so awful today. (What)",
          hint: "Weather không đếm được, không dùng a: What awful weather!",
          answer: "What awful weather!",
          alternatives: ["What awful weather it is today!", "What awful weather it is!"]
        },
        {
          sentence: "These flowers are very lovely. (What)",
          hint: "Flowers số nhiều, không dùng a: What lovely flowers!",
          answer: "What lovely flowers!",
          alternatives: ["What lovely flowers these are!", "What lovely flowers they are!"]
        }
      ],
      review: [
        { sentence: "Could you give me ___ (a little / a few) advice on my presentation?", answer: "a little", hint: "Ôn tập Lượng từ với advice" },
        { sentence: "He suggested ___ (take) the train instead of the bus.", answer: "taking", hint: "Ôn tập suggest + V-ing" },
        { sentence: "Please ___ (turn down) the volume; the baby is sleeping.", answer: "turn down", hint: "Ôn tập Phrasal Verbs" },
        { sentence: "She ___ (use to) be very shy when she was in primary school.", answer: "used to", hint: "Ôn tập used to" },
        { sentence: "All passengers must ___ (show) their boarding passes at the gate.", answer: "show", hint: "Chủ động: sau must + V nguyên thể" }
      ]
    }
  },

  // ==================== DAY 29 ====================
  {
    day: 29,
    id: "day-29",
    cefr: "B1",
    stage: 4,
    stageName: "B1 Mastery",
    isExam: false,
    estimatedMinutes: 25,
    title: "Cấu trúc Cầu khiến / Sai khiến (Make, Let, Have, Get)",
    titleEn: "Causative Structures: Make, Let, Have & Get",
    dailyGoal: "Làm chủ cấu trúc sai khiến chủ động (make/let/have sb do sth vs. get sb to do sth) và cấu trúc cầu khiến bị động cực kỳ quan trọng (have/get sth + V3/ed).",
    vocab: [
      { en: "causative", pos: "n", ipa: "/ˈkɔːzətɪv/", vi: "thể cầu khiến, sai khiến", example: "We use the causative when someone else does a service for us." },
      { en: "mechanic", pos: "n", ipa: "/məˈkænɪk/", vi: "thợ sửa xe, thợ máy", example: "I had the mechanic check the brakes of my car." },
      { en: "plumber", pos: "n", ipa: "/ˈplʌmər/", vi: "thợ sửa ống nước", example: "We got a plumber to fix the leaking pipe." },
      { en: "electrician", pos: "n", ipa: "/ɪˌlekˈtrɪʃn/", vi: "thợ điện", example: "They had the air conditioner installed by an electrician." },
      { en: "optician", pos: "n", ipa: "/ɑːpˈtɪʃn/", vi: "bác sĩ khúc xạ / kỹ thuật viên kính mắt", example: "She had her eyes tested at the optician's." },
      { en: "tailor", pos: "n", ipa: "/ˈteɪlər/", vi: "thợ may", example: "He had a new suit made by a famous tailor." },
      { en: "hairdresser", pos: "n", ipa: "/ˈherdresər/", vi: "thợ làm tóc", example: "Mai is going to have her hair cut this afternoon." },
      { en: "persuade", pos: "v", ipa: "/pərˈsweɪd/", vi: "thuyết phục (= get sb to do sth)", example: "I finally got my brother to lend me his bicycle." },
      { en: "force", pos: "v", ipa: "/fɔːrs/", vi: "ép buộc (= make sb do sth)", example: "The heavy rain made us stay indoors all day." },
      { en: "allow", pos: "v", ipa: "/əˈlaʊ/", vi: "cho phép (+ O + to V = let + O + V)", example: "My parents don't allow me to stay out after 10 PM." },
      { en: "service", pos: "v", ipa: "/ˈsɜːrvɪs/", vi: "bảo dưỡng định kỳ (xe, máy móc)", example: "My dad has his motorbike serviced every six months." },
      { en: "redecorate", pos: "v", ipa: "/ˌriːˈdekəreɪt/", vi: "trang trí lại, sơn sửa lại", example: "They are having their living room redecorated." },
      { en: "deliver", pos: "v", ipa: "/dɪˈlɪvər/", vi: "giao tận nơi", example: "We had the pizza delivered to our house." },
      { en: "dry-clean", pos: "v", ipa: "/ˈdraɪ kliːn/", vi: "giặt khô", example: "She got her winter coat dry-cleaned yesterday." }
    ],
    grammar: {
      point: "CẤU TRÚC SAI KHIẾN & CẦU KHIẾN (MAKE, LET, HAVE, GET)",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Sai khiến Chủ động (Nhờ / Bắt / Cho phép AI làm gì)</div>
          <b>• MAKE + O(người) + V(nguyên thể):</b> Bắt buộc, khiến ai làm gì (<i>The movie made me cry.</i>)<br/>
          &nbsp;&nbsp;<i>*Lưu ý Bị động của Make:</i> <code>S + be + MADE + TO V</code> (Khi chuyển sang bị động phải thêm <b>to</b>: <i>He was made to clean the room</i>).<br/>
          <b>• LET + O(người) + V(nguyên thể):</b> Cho phép ai làm gì (<code>= allow/permit + O + to V</code>).<br/>
          <b>• HAVE + O(người) + V(nguyên thể):</b> Nhờ/giao ai làm gì (<i>I had the mechanic fix my bike.</i>)<br/>
          <b>• GET + O(người) + TO V:</b> Nhờ/thuyết phục ai làm gì (<i>I got my friend <b>to help</b> me.</i> — Có <b>TO</b>!)
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Cầu khiến Bị động (Nhờ/Thuê người khác làm CÁI GÌ cho mình)</div>
          <b>• Công thức Vàng:</b> <code>S + HAVE / GET + O(vật) + V3 / V-ed</code><br/>
          <i>(Mình không tự làm mà thuê thợ/dịch vụ làm giúp: cắt tóc, sửa xe, khám mắt, sơn nhà...)</i><br/>
          <i>Ví dụ: I <b>had my hair cut</b> yesterday. (= I <b>got my hair cut</b> yesterday.)</i><br/>
          <i>Ví dụ: She <b>is having her laptop repaired</b> at the shop right now.</i>
        </div>
      `,
      examples: [
        "My parents <b>let me go</b> camping, and they <b>made me promise</b> to call home.",
        "<b>Chủ động (Người):</b> I <b>had the electrician repair</b> the fan. = I <b>got the electrician to repair</b> the fan.",
        "<b>Bị động (Vật):</b> I <b>had / got the fan repaired</b> (by the electrician)."
      ],
      commonMistake: {
        wrong: "I had the mechanic to fix my car, and I got my car fix.",
        right: "I **had the mechanic fix** my car, and I **got my car fixed**.",
        note: "Nhớ kỹ: have + NGƯỜI + V(bare), get + NGƯỜI + to V; nhưng khi tân ngữ là VẬT (my car) thì cả have và get đều cộng V3/ed (fixed)!"
      },
      memoryTip: "Khẩu quyết 4 dòng: Make/Let/Have + Người + V nguyên | Get + Người + TO V | Be made + TO V | Have/Get + VẬT + V3/ed!"
    },
    dialogue: {
      titleVi: "Tình huống: Chuẩn bị nhà cửa và trang phục trước dịp Tết Nguyên Đán",
      lines: [
        { speaker: "Nam", en: "Your house looks so bright and new, Mai! Did your family paint it yourselves?", vi: "Nhà cậu trông sáng sủa và mới quá Mai ơi! Gia đình cậu tự sơn đấy à?" },
        { speaker: "Mai", en: "No, it was too much work, so my parents had the house repainted by professional painters last week.", vi: "Không, nhiều việc quá nên bố mẹ mình đã thuê thợ sơn chuyên nghiệp sơn lại nhà vào tuần trước." },
        { speaker: "Nam", en: "What about the garden? The bonsai trees look amazing!", vi: "Thế còn khu vườn thì sao? Mấy cây bonsai trông đẹp tuyệt!" },
        { speaker: "Mai", en: "My dad got a gardener to trim the trees yesterday, and he made me sweep all the fallen leaves!", vi: "Hôm qua bố mình đã nhờ một bác làm vườn tỉa cây, và bố bắt mình quét hết lá rụng đấy!" },
        { speaker: "Nam", en: "Haha! By the way, I like your new hairstyle!", vi: "Haha! Nhân tiện, mình rất thích kiểu tóc mới của cậu!" },
        { speaker: "Mai", en: "Thanks! I just had my hair cut this morning to welcome Tet!", vi: "Cảm ơn cậu! Sáng nay mình vừa mới đi cắt tóc để đón Tết đấy!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "The sad ending of the novel made everyone ___.", options: ["cry", "to cry", "crying"], answer: "cry" },
        { q: "My parents never let me ___ video games on school nights.", options: ["play", "to play", "playing"], answer: "play" },
        { q: "I am going to have my eyes ___ at the optician's tomorrow.", options: ["tested", "test", "to test"], answer: "tested" },
        { q: "She finally got her younger brother ___ his messy bedroom.", options: ["to tidy", "tidy", "tidied"], answer: "to tidy" },
        { q: "We had a technician ___ the new Wi-Fi router this morning.", options: ["install", "to install", "installed"], answer: "install" },
        { q: "He was made ___ the whole report again by his manager.", options: ["to write", "write", "writing"], answer: "to write" },
        { q: "Where did you get your winter coat ___?", options: ["dry-cleaned", "dry-clean", "to dry-clean"], answer: "dry-cleaned" },
        { q: "My father is having his car ___ at the garage right now.", options: ["serviced", "service", "to service"], answer: "serviced" },
        { q: "The teacher let the students ___ the dictionary during the practice session.", options: ["use", "to use", "using"], answer: "use" },
        { q: "I'll get the courier ___ the package to your office before 5 PM.", options: ["to deliver", "deliver", "delivered"], answer: "to deliver" }
      ],
      fillBlank: [
        { sentence: "The funny comedy show made the audience ___ (laugh) out loud.", answer: "laugh", hint: "make + O + V nguyên thể" },
        { sentence: "Will your parents let you ___ (join) the overnight camping trip?", answer: "join", hint: "let + O + V nguyên thể" },
        { sentence: "I had my watch ___ (repair) at that shop yesterday.", answer: "repaired", hint: "have + VẬT + V3/ed" },
        { sentence: "She got her friend ___ (translate) the letter into English.", answer: "to translate", hint: "get + NGƯỜI + to V" },
        { sentence: "My mom had the plumber ___ (fix) the kitchen sink.", answer: "fix", hint: "have + NGƯỜI + V nguyên thể" },
        { sentence: "He needs to get his hair ___ (cut) before the job interview.", answer: "cut", hint: "get + VẬT + V3 (V3 của cut là cut)" },
        { sentence: "The children were made ___ (apologize) for making so much noise.", answer: "to apologize", alternatives: ["to apologise"], hint: "bị động be made + to V" },
        { sentence: "We are having our living room ___ (redecorate) for Tet.", answer: "redecorated", hint: "have + VẬT + V3/ed" }
      ],
      sentenceBuild: [
        { words: ["I", "had", "my", "hair", "cut", "yesterday", "."], answer: "I had my hair cut yesterday ." },
        { words: ["The", "sad", "movie", "made", "her", "cry", "."], answer: "The sad movie made her cry ." },
        { words: ["My", "parents", "let", "me", "go", "to", "the", "concert", "."], answer: "My parents let me go to the concert ." },
        { words: ["She", "got", "her", "brother", "to", "fix", "her", "bike", "."], answer: "She got her brother to fix her bike ." },
        { words: ["We", "had", "the", "roof", "repaired", "after", "the", "storm", "."], answer: "We had the roof repaired after the storm ." },
        { words: ["He", "had", "the", "mechanic", "check", "the", "engine", "."], answer: "He had the mechanic check the engine ." },
        { words: ["They", "were", "made", "to", "clean", "the", "classroom", "."], answer: "They were made to clean the classroom ." }
      ],
      transformation: [
        {
          sentence: "My parents allow me to use my laptop for two hours a day. (let)",
          hint: "Thay allow me to use bằng let me use",
          answer: "My parents let me use my laptop for two hours a day."
        },
        {
          sentence: "A technician repaired my laptop yesterday. (had)",
          hint: "Sử dụng cầu khiến bị động: I had my laptop repaired yesterday.",
          answer: "I had my laptop repaired yesterday.",
          alternatives: ["I had my laptop repaired by a technician yesterday.", "I had a technician repair my laptop yesterday."]
        },
        {
          sentence: "She persuaded her brother to drive her to the station. (got)",
          hint: "Sử dụng get + người + to V: She got her brother to drive...",
          answer: "She got her brother to drive her to the station."
        },
        {
          sentence: "The heavy fog forced the pilot to land at another airport. (made)",
          hint: "Thay forced ... to land bằng made the pilot land",
          answer: "The heavy fog made the pilot land at another airport."
        },
        {
          sentence: "An optician is testing my grandmother's eyes right now. (having)",
          hint: "Sử dụng cầu khiến bị động: My grandmother is having her eyes tested right now.",
          answer: "My grandmother is having her eyes tested right now."
        }
      ],
      review: [
        { sentence: "___ (What / How) a breathtaking view from the top of the mountain!", answer: "What", hint: "Ôn tập Câu cảm thán" },
        { sentence: "The train arrives ___ (in / on / at) 6:15 AM.", answer: "at", hint: "Ôn tập Giới từ thời gian" },
        { sentence: "There is only ___ (a little / a few) ink left in this pen.", answer: "a little", hint: "Ôn tập Lượng từ" },
        { sentence: "He avoided ___ (look) at me because he felt guilty.", answer: "looking", hint: "Ôn tập avoid + V-ing" },
        { sentence: "We are looking forward to ___ (see) your new house.", answer: "seeing", hint: "Ôn tập look forward to + V-ing" }
      ]
    }
  },

  // ==================== DAY 30 (FINAL B1 GRADUATION EXAM) ====================
  {
    day: 30,
    id: "day-30",
    cefr: "B1",
    stage: 4,
    stageName: "B1 Mastery",
    isExam: true,
    estimatedMinutes: 35,
    title: "Bài thi Tốt nghiệp Chuẩn B1 Toàn khóa (Days 1–30)",
    titleEn: "Final B1 Graduation Exam — Complete A1 to B1 Mastery",
    dailyGoal: "Chinh phục bài thi tổng hợp 60 câu hỏi bao quát toàn bộ lộ trình 30 ngày từ Nền tảng A1 đến Trung cấp B1 để hoàn thành khóa học.",
    vocab: [
      { en: "graduation", pos: "n", ipa: "/ˌɡrædʒuˈeɪʃn/", vi: "lễ tốt nghiệp, sự hoàn thành khóa học", example: "Congratulations on reaching your B1 graduation exam!" },
      { en: "proficiency", pos: "n", ipa: "/prəˈfɪʃnsi/", vi: "sự thành thạo, năng lực sử dụng ngôn ngữ", example: "Daily practice builds strong English proficiency." },
      { en: "comprehensive", pos: "adj", ipa: "/ˌkɑːmprɪˈhensɪv/", vi: "toàn diện, bao quát", example: "This final test is a comprehensive review of all 30 days." },
      { en: "fluency", pos: "n", ipa: "/ˈfluːənsi/", vi: "độ trôi chảy", example: "Reading dialogues aloud improves your speaking fluency." },
      { en: "structure", pos: "n", ipa: "/ˈstrʌktʃər/", vi: "cấu trúc ngữ pháp", example: "Use a variety of sentence structures in your writing." },
      { en: "context", pos: "n", ipa: "/ˈkɑːntekst/", vi: "ngữ cảnh", example: "Always pay attention to the context of the sentence." },
      { en: "dedication", pos: "n", ipa: "/ˌdedɪˈkeɪʃn/", vi: "sự tận tâm, chuyên cần", example: "Your 30-day dedication has paid off!" },
      { en: "accomplish", pos: "v", ipa: "/əˈkɑːmplɪʃ/", vi: "hoàn thành xuất sắc, đạt được", example: "You have accomplished your 30-day English roadmap." },
      { en: "bilingual", pos: "adj", ipa: "/ˌbaɪˈlɪŋɡwəl/", vi: "song ngữ", example: "Bilingual flashcards help you remember meanings faster." },
      { en: "milestone", pos: "n", ipa: "/ˈmaɪlstoʊn/", vi: "cột mốc", example: "Reaching CEFR B1 is an important milestone." },
      { en: "overcome", pos: "v", ipa: "/ˌoʊvərˈkʌm/", vi: "vượt qua (khó khăn, thử thách)", example: "She overcame her fear of speaking English in public." },
      { en: "competent", pos: "adj", ipa: "/ˈkɑːmpɪtənt/", vi: "có năng lực, giỏi", example: "You are now a competent independent language learner." },
      { en: "enrich", pos: "v", ipa: "/ɪnˈrɪtʃ/", vi: "làm giàu thêm, làm phong phú", example: "Learning new words every day enriches your vocabulary." },
      { en: "transform", pos: "v", ipa: "/trænsˈfɔːrm/", vi: "chuyển đổi, biến đổi", example: "You can transform active sentences into passive ones easily." },
      { en: "persistent", pos: "adj", ipa: "/pərˈsɪstənt/", vi: "kiên trì, bền bỉ", example: "Persistent learners always achieve their goals." },
      { en: "journey", pos: "n", ipa: "/ˈdʒɜːrni/", vi: "hành trình", example: "Language learning is an exciting lifelong journey." }
    ],
    grammar: {
      point: "TỔNG HỢP TOÀN KHÓA A1 ➔ B1 (30-DAY GRAMMAR MASTER SHEET)",
      explanation: `
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">1. Hệ thống Thì, Câu Điều kiện, Bị động & Tường thuật (Stages 1–3)</div>
          • <b>7 Thì trọng tâm:</b> Hiện tại đơn, Hiện tại tiếp diễn, Quá khứ đơn, Quá khứ tiếp diễn (<i>when/while</i>), Tương lai (<i>will vs. be going to</i>), Hiện tại hoàn thành (<i>since/for/yet</i>), Tương lai tiếp diễn (<i>will be V-ing</i>).<br/>
          • <b>Câu điều kiện:</b> Loại 1 (<code>If + V(s/es), will + V</code> | <code>Unless</code>) vs. Loại 2 (<code>If + V2/ed [were], would + V</code>).<br/>
          • <b>Thể bị động:</b> <code>S + BE (chia theo thì/modal) + V3/ed (+ by O)</code>.<br/>
          • <b>Câu tường thuật:</b> Lùi 1 thì + đổi ngôi + đổi trạng từ; Câu hỏi bỏ <i>do/does/did</i> và giữ trật tự xuôi <code>S + V</code>.
        </div>
        <div class="eng-formula-box formula">
          <div class="eng-formula-title">2. Cấu trúc Chuẩn B1 Nâng cao (Stage 4)</div>
          • <b>Used to vs. Be/Get used to:</b> <code>used to + V(bare)</code> (đã từng) vs. <code>be/get used to + V-ing</code> (quen với).<br/>
          • <b>Gerunds & Infinitives:</b> <code>avoid, suggest, mind, look forward to + V-ing</code> | <code>decide, promise, manage, refuse, afford + to V</code>.<br/>
          • <b>Quantifiers & Prepositions:</b> <code>many / a few + N(số nhiều)</code> vs. <code>much / a little + N(không đếm được: advice, information, furniture, luggage)</code> | <code>What + (a/an) + adj + N!</code> vs. <code>How + adj/adv + S + V!</code><br/>
          • <b>Causative (Cầu khiến):</b> <code>make/let/have + sb + V(bare)</code> | <code>get + sb + to V</code> | <code>have/get + sth + V3/ed</code>.
        </div>
      `,
      examples: [
        "<b>Tenses & Passive:</b> This bridge <b>was built</b> in 2018, and three more bridges <b>have been constructed</b> since then.",
        "<b>Conditionals & Reported Speech:</b> If I <b>were</b> you, I <b>would ask</b> her where she <b>had bought</b> that book.",
        "<b>B1 Structures:</b> I am <b>looking forward to having</b> my new apartment <b>redecorated</b> next month."
      ],
      commonMistake: {
        wrong: "She suggested to have the mechanic to repair our car.",
        right: "She **suggested having** the mechanic **repair** our car. (OR: **having our car repaired**).",
        note: "Sau 'suggest' là V-ing (having), và sau 'have + người' là V nguyên thể (repair) hoặc 'have + vật + V3/ed' (repaired)!"
      },
      memoryTip: "Chúc mừng bạn đã đi tới Ngày 30! Hãy đọc kỹ ngữ cảnh, xác định từ khóa cấu trúc trong từng câu và tự tin hoàn thành bài thi tốt nghiệp B1!"
    },
    dialogue: null,
    exercises: {
      multipleChoice: [
        { q: "Look! The artisans ___ traditional patterns on the ceramic vases.", options: ["paint", "are painting", "painted"], answer: "are painting" },
        { q: "While we ___ down the mountain, a thick fog suddenly appeared.", options: ["walked", "were walking", "are walking"], answer: "were walking" },
        { q: "My family ___ in this peaceful town since 2015.", options: ["lives", "lived", "has lived"], answer: "has lived" },
        { q: "Look at those dark clouds! It ___ heavily in a few minutes.", options: ["will rain", "is going to rain", "rains"], answer: "is going to rain" },
        { q: "My sister adores ___ origami animals in her leisure time.", options: ["folding", "to fold", "fold"], answer: "folding" },
        { q: "Living in a big city is much ___ than living in a small village.", options: ["busier", "more busy", "the busiest"], answer: "busier" },
        { q: "She plays ___ violin beautifully, doesn't she?", options: ["the", "a", "rỗng (no article)"], answer: "the" },
        { q: "Let's organize a book exchange event this Sunday, ___?", options: ["shall we", "will you", "don't we"], answer: "shall we" },
        { q: "___ the exam was quite challenging, she achieved the highest score.", options: ["Although", "Because", "However"], answer: "Although" },
        { q: "You ___ wear a helmet when riding a motorbike. It's mandatory by law.", options: ["must", "don't have to", "might"], answer: "must" },
        { q: "Unless you ___ harder, you won't pass the final B1 test.", options: ["study", "don't study", "studied"], answer: "study" },
        { q: "If I ___ you, I would apply for that international scholarship.", options: ["were", "am", "will be"], answer: "were" },
        { q: "Thousands of electric buses ___ in our country since last year.", options: ["have been produced", "were produced", "produced"], answer: "have been produced" },
        { q: "He asked me where I ___ my summer holiday the previous year.", options: ["had spent", "spent", "did spend"], answer: "had spent" },
        { q: "At 9 AM tomorrow, we ___ our graduation exam in the main hall.", options: ["will be taking", "take", "took"], answer: "will be taking" },
        { q: "She has lived in Hanoi for ten years, so she is used to ___ in rush-hour traffic.", options: ["driving", "drive", "drove"], answer: "driving" },
        { q: "We had to ___ the outdoor concert because of the storm.", options: ["put off", "put on", "look up"], answer: "put off" },
        { q: "Nam suggested ___ trash along the beach this Saturday morning.", options: ["collecting", "to collect", "collect"], answer: "collecting" },
        { q: "Could you give me ___ advice on how to prepare for the interview?", options: ["a little", "a few", "many"], answer: "a little" },
        { q: "I am going to have my laptop ___ at the service center this afternoon.", options: ["repaired", "repair", "to repair"], answer: "repaired" }
      ],
      fillBlank: [
        { sentence: "She ___ (not / want) to watch TV right now; she prefers reading.", answer: "does not want", hint: "hiện tại đơn phủ định với động từ trạng thái want" },
        { sentence: "When the teacher entered the room, the students ___ (discuss) the project.", answer: "were discussing", hint: "quá khứ tiếp diễn" },
        { sentence: "We ___ (not / see) each other for three months.", answer: "have not seen", hint: "hiện tại hoàn thành phủ định" },
        { sentence: "This is the ___ (interesting) documentary I have ever watched.", answer: "most interesting", hint: "so sánh nhất của tính từ dài" },
        { sentence: "I am on the team list today, ___ I?", answer: "aren't", hint: "câu hỏi đuôi đặc biệt của I am" },
        { sentence: "If it ___ (rain) tomorrow morning, we will practice indoors.", answer: "rains", hint: "câu điều kiện Loại 1" },
        { sentence: "If he ___ (know) her phone number, he would call her immediately.", answer: "knew", hint: "câu điều kiện Loại 2" },
        { sentence: "The One Pillar Pagoda ___ (build) in 1049.", answer: "was built", hint: "bị động quá khứ đơn" },
        { sentence: "All application forms must ___ (submit) before Friday.", answer: "be submitted", hint: "bị động với must" },
        { sentence: "She told me that she ___ (will) send me the notes the next day.", answer: "would", hint: "lùi will ➔ would trong câu tường thuật" },
        { sentence: "He asked me ___ (if / that) I spoke any foreign languages.", answer: "if", alternatives: ["whether"], hint: "tường thuật câu hỏi Yes/No" },
        { sentence: "At this time next week, I ___ (fly) to Singapore.", answer: "will be flying", hint: "tương lai tiếp diễn" },
        { sentence: "He just ate a huge meal, so he ___ (must / can't) be hungry now.", answer: "can't", hint: "suy luận phủ định chắc chắn" },
        { sentence: "My grandfather ___ (use to) work as a railway engineer.", answer: "used to", hint: "thói quen/công việc trong quá khứ" },
        { sentence: "We are really looking forward to ___ (attend) the graduation ceremony.", answer: "attending", hint: "look forward to + V-ing" },
        { sentence: "Please remember ___ (lock) the door before you go to bed.", answer: "to lock", hint: "nhớ thực hiện nhiệm vụ: remember + to V" },
        { sentence: "___ (What / How) delicious pho your mother makes!", answer: "What", hint: "What + adj + danh từ không đếm được!" },
        { sentence: "The funny story made everyone in the room ___ (laugh).", answer: "laugh", hint: "make + O + V nguyên thể" }
      ],
      sentenceBuild: [
        { words: ["We", "have", "learned", "English", "for", "five", "years", "."], answer: "We have learned English for five years ." },
        { words: ["While", "I", "was", "walking", "home", ",", "it", "started", "to", "rain", "."], answer: "While I was walking home , it started to rain ." },
        { words: ["If", "I", "were", "you", ",", "I", "would", "study", "harder", "."], answer: "If I were you , I would study harder ." },
        { words: ["Vietnamese", "coffee", "is", "exported", "all", "over", "the", "world", "."], answer: "Vietnamese coffee is exported all over the world ." },
        { words: ["She", "asked", "me", "where", "I", "lived", "."], answer: "She asked me where I lived ." },
        { words: ["At", "8", "PM", "tomorrow", ",", "I", "will", "be", "studying", "."], answer: "At 8 PM tomorrow , I will be studying ." },
        { words: ["She", "is", "used", "to", "getting", "up", "early", "every", "day", "."], answer: "She is used to getting up early every day ." },
        { words: ["We", "are", "looking", "forward", "to", "our", "summer", "vacation", "."], answer: "We are looking forward to our summer vacation ." },
        { words: ["He", "suggested", "going", "to", "the", "park", "by", "bicycle", "."], answer: "He suggested going to the park by bicycle ." },
        { words: ["She", "gave", "me", "a", "little", "useful", "advice", "."], answer: "She gave me a little useful advice ." },
        { words: ["What", "an", "interesting", "book", "you", "are", "reading", "!"], answer: "What an interesting book you are reading !" },
        { words: ["I", "had", "my", "laptop", "repaired", "yesterday", "afternoon", "."], answer: "I had my laptop repaired yesterday afternoon ." }
      ],
      transformation: [
        {
          sentence: "The last time I saw my cousin was three years ago. (for)",
          hint: "Chuyển từ Quá khứ đơn sang Hiện tại hoàn thành phủ định + for",
          answer: "I have not seen my cousin for three years."
        },
        {
          sentence: "If you don't hurry up, you will miss the last bus. (Unless)",
          hint: "Sử dụng Unless + khẳng định",
          answer: "Unless you hurry up, you will miss the last bus."
        },
        {
          sentence: "They have built a new library in our neighborhood. (been)",
          hint: "Chuyển sang bị động Hiện tại hoàn thành: A new library has been built...",
          answer: "A new library has been built in our neighborhood."
        },
        {
          sentence: "\"Why don't we organize a charity book fair?\" said Lan. (suggested)",
          hint: "Sử dụng Lan suggested + V-ing",
          answer: "Lan suggested organizing a charity book fair.",
          alternatives: ["Lan suggested organising a charity book fair."]
        },
        {
          sentence: "A professional technician serviced my father's car yesterday. (had)",
          hint: "Sử dụng cấu trúc cầu khiến bị động: My father had his car serviced yesterday.",
          answer: "My father had his car serviced yesterday."
        }
      ],
      review: [
        { sentence: "He ___ (not / use to) like vegetables when he was a child.", answer: "did not use to", hint: "Ôn tập phủ định của used to" },
        { sentence: "She got her brother ___ (help) her move the bookshelf.", answer: "to help", hint: "Ôn tập get + người + to V" },
        { sentence: "How ___ (much / many) luggage did you bring on the trip?", answer: "much", hint: "Ôn tập Lượng từ với luggage" },
        { sentence: "The conference starts ___ (in / on / at) 8:30 AM on Friday.", answer: "at", hint: "Ôn tập Giới từ chỉ giờ" },
        { sentence: "Never ___ (give up) learning English—you have reached B1!", answer: "give up", hint: "Ôn tập Phrasal Verbs" }
      ]
    }
  }
];
