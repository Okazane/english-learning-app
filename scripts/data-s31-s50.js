// Complete curriculum lessons for Stage 5: B1+ Upper-Intermediate (Days 31-50)
module.exports = [
  // ==================== DAY 31 ====================
  {
    day: 31,
    id: "day-31",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Thì Quá khứ hoàn thành (Past Perfect) — Sự kiện lịch sử & Khám phá",
    titleEn: "Past Perfect Tense — Historical Events & Discoveries",
    dailyGoal: "Làm chủ cấu trúc và cách dùng thì Quá khứ hoàn thành (had + V3/ed) để diễn tả hành động xảy ra trước một thời điểm hoặc một hành động khác trong quá khứ.",
    vocab: [
      { en: "expedition", pos: "n", ipa: "/ˌekspəˈdɪʃn/", vi: "cuộc thám hiểm, chuyến viễn chinh", example: "The polar expedition had prepared for two years before setting sail." },
      { en: "civilization", pos: "n", ipa: "/ˌsɪvələˈzeɪʃn/", vi: "nền văn minh", example: "The Maya civilization had flourished for centuries before the Spanish arrived." },
      { en: "manuscript", pos: "n", ipa: "/ˈmænjuskrɪpt/", vi: "bản thảo viết tay cổ", example: "Scholars found an ancient manuscript that monks had hidden in a cave." },
      { en: "excavate", pos: "v", ipa: "/ˈekskəveɪt/", vi: "khai quật", example: "By 1925, the team had excavated over three hundred bronze artifacts." },
      { en: "dynasty", pos: "n", ipa: "/ˈdaɪnəsti/", vi: "triều đại", example: "The Ly dynasty had established Thang Long as the capital long before that treaty." },
      { en: "chronicle", pos: "n", ipa: "/ˈkrɑːnɪkl/", vi: "biên niên sử, ký sự lịch sử", example: "Royal historians had recorded the battle in an official chronicle." },
      { en: "pioneer", pos: "n", ipa: "/ˌpaɪəˈnɪr/", vi: "người tiên phong, người mở đường", example: "Marie Curie was a scientific pioneer who had overcome countless obstacles." },
      { en: "voyage", pos: "n", ipa: "/ˈvɔɪɪdʒ/", vi: "chuyến hải trình dài", example: "Many sailors fell ill because the ocean voyage had lasted four months." },
      { en: "colonize", pos: "v", ipa: "/ˈkɑːlənaɪz/", vi: "thuộc địa hóa, khai phá vùng đất mới", example: "Vikings had colonized parts of Greenland long before Columbus crossed the Atlantic." },
      { en: "navigator", pos: "n", ipa: "/ˈnævɪɡeɪtər/", vi: "nhà hàng hải, hoa tiêu", example: "The Portuguese navigator had studied star charts before leading the fleet." },
      { en: "treaty", pos: "n", ipa: "/ˈtriːti/", vi: "hiệp ước", example: "Both nations had negotiated in secret before signing the peace treaty." },
      { en: "era", pos: "n", ipa: "/ˈɪrə/", vi: "kỷ nguyên, thời đại", example: "By the end of the Victorian era, steam engines had transformed global trade." }
    ],
    grammar: {
      point: "THÌ QUÁ KHỨ HOÀN THÀNH (PAST PERFECT: HAD + V3/ED)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Công thức Thì Quá khứ hoàn thành (Past Perfect)</strong>
          <ul>
            <li><b>Khẳng định (+):</b> <code>S + had + V3/ed</code> (Tất cả các ngôi chủ ngữ đều dùng <code>had</code>; viết tắt là <code>'d</code>).</li>
            <li><b>Phủ định (-):</b> <code>S + had not (hadn't) + V3/ed</code>.</li>
            <li><b>Nghi vấn (?):</b> <code>Had + S + V3/ed?</code> ➔ <i>Yes, S + had. / No, S + hadn't.</i></li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Cách dùng & Dấu hiệu nhận biết trọng tâm</strong>
          <p>Thì Quá khứ hoàn thành (<b>"tiền quá khứ"</b>) dùng để diễn tả một hành động <b>đã hoàn tất TRƯỚC một thời điểm</b> hoặc <b>TRƯỚC một hành động khác trong quá khứ</b> (hành động xảy ra sau chia Quá khứ đơn).</p>
          <ul>
            <li><b>Before / By the time + S + V2/ed, S + had + V3/ed:</b> Trước khi hành động B xảy ra, hành động A đã xong.</li>
            <li><b>After + S + had + V3/ed, S + V2/ed:</b> Sau khi hành động A đã xong, hành động B mới xảy ra.</li>
            <li><b>By + mốc thời gian quá khứ (By 1945, By the 18th century):</b> Tính đến mốc quá khứ đó, việc gì đã hoàn tất.</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "By the time Columbus reached America, indigenous peoples <b>had lived</b> there for millennia.", vi: "Tính đến lúc Columbus đặt chân tới châu Mỹ, người bản địa đã sinh sống ở đó hàng thiên niên kỷ rồi." },
        { en: "After the researchers <b>had decoded</b> the ancient manuscript, they published their findings.", vi: "Sau khi các nhà nghiên cứu đã giải mã xong bản thảo cổ, họ công bố phát hiện của mình." },
        { en: "Fleming <b>had not cleaned</b> the petri dishes before he went on holiday in 1928.", vi: "Fleming đã không rửa các đĩa nuôi cấy trước khi ông đi nghỉ vào năm 1928." },
        { en: "<b>Had</b> the dynasty <b>unified</b> the country before the 15th century?", vi: "Triều đại đó đã thống nhất đất nước trước thế kỷ 15 phải không?" }
      ],
      commonMistake: {
        wrong: "Before the rescue ship arrived, the explorers survived on rainwater.",
        right: "Before the rescue ship arrived, the explorers **had survived** on rainwater.",
        note: "Khi có 'Before + Quá khứ đơn' nhấn mạnh hành động xảy ra trước đó trong quá khứ, mệnh đề chính phải lùi về Quá khứ hoàn thành (had + V3/ed)."
      },
      memoryTip: "Mẹo trục thời gian: Hành động nào XẢY RA TRƯỚC trong quá khứ ➔ đeo 'vương miện' HAD + V3/ed; hành động XẢY RA SAU ➔ chia Quá khứ đơn (V2/ed)!"
    },
    dialogue: {
      titleVi: "Tình huống: Hai sinh viên lịch sử thảo luận tại Bảo tàng Lịch sử Quốc gia",
      lines: [
        { speaker: "Lan", en: "Look at this bronze drum! Archaeologists excavated it near the Red River, didn't they?", vi: "Nhìn chiếc trống đồng này kìa! Các nhà khảo cổ đã khai quật nó gần sông Hồng phải không?" },
        { speaker: "Minh", en: "Yes, and local villagers had actually found fragments of it years before the official expedition arrived.", vi: "Đúng vậy, và người dân địa phương thực ra đã tìm thấy các mảnh vỡ của nó nhiều năm trước khi đoàn thám hiểm chính thức tới." },
        { speaker: "Lan", en: "Amazing! By the first century BC, ancient artisans had already mastered complex bronze-casting techniques.", vi: "Kinh ngạc thật! Tính đến thế kỷ thứ nhất trước Công nguyên, các nghệ nhân cổ đại đã làm chủ kỹ thuật đúc đồng phức tạp rồi." },
        { speaker: "Minh", en: "Had you read the historical chronicle about this dynasty before we visited the museum today?", vi: "Cậu đã đọc biên niên sử về triều đại này trước khi tụi mình ghé bảo tàng hôm nay chưa?" },
        { speaker: "Lan", en: "I had read a short summary, but I hadn't seen the real manuscripts until now.", vi: "Mình đã đọc một bản tóm tắt ngắn, nhưng mình chưa từng nhìn thấy các bản thảo thật cho đến tận bây giờ." },
        { speaker: "Minh", en: "Let's take notes carefully. Our professor said nobody had researched this treaty in detail yet.", vi: "Hãy ghi chép cẩn thận nhé. Giáo sư của tụi mình nói rằng chưa ai nghiên cứu chi tiết hiệp ước này đâu." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "By the time the rescue expedition arrived, the sailors ___ on the island for three weeks.", options: ["survived", "had survived", "have survived"], answer: "had survived", explanation: "Cấu trúc 'By the time + S + V2/ed, S + had + V3/ed' diễn tả hành động xảy ra trước một mốc quá khứ." },
        { q: "After the historians ___ the ancient chronicle, they confirmed the date of the treaty.", options: ["had verified", "verified", "have verified"], answer: "had verified", explanation: "Sau liên từ 'After', hành động xảy ra trước trong quá khứ chia ở thì Quá khứ hoàn thành (had verified)." },
        { q: "By 1912, Roald Amundsen ___ the first pioneer to reach the South Pole.", options: ["became", "had become", "has become"], answer: "had become", explanation: "'By + năm trong quá khứ (By 1912)' là dấu hiệu điển hình của thì Quá khứ hoàn thành." },
        { q: "The navigator got lost because a storm ___ his compass the night before.", options: ["damaged", "had damaged", "was damaging"], answer: "had damaged", explanation: "Việc bão làm hỏng la bàn xảy ra đêm hôm trước (trước khi bị lạc) nên dùng had damaged." },
        { q: "We could not enter the ancient tomb because the authorities ___ it for restoration.", options: ["closed", "had closed", "have closed"], answer: "had closed", explanation: "Hành động đóng cửa lăng mộ xảy ra trước thời điểm chúng tôi không thể vào trong quá khứ." },
        { q: "___ the researchers ___ any manuscripts before the funding ran out?", options: ["Had / discovered", "Did / discovered", "Have / discovered"], answer: "Had / discovered", explanation: "Câu hỏi Quá khứ hoàn thành trước một mốc quá khứ (before the funding ran out): Had + S + V3/ed?" },
        { q: "When the Spanish conquistadors arrived, the Inca civilization ___ an extensive road network.", options: ["already built", "had already built", "has already built"], answer: "had already built", explanation: "Hành động xây dựng mạng lưới đường sá đã hoàn tất trước khi người Tây Ban Nha đến." },
        { q: "She realized that she ___ her museum ticket at the hotel reception.", options: ["left", "had left", "was leaving"], answer: "had left", explanation: "Việc để quên vé xảy ra trước hành động nhận ra (realized) trong quá khứ." },
        { q: "Before printing presses appeared in Europe, Chinese inventors ___ movable type centuries earlier.", options: ["had developed", "developed", "have developed"], answer: "had developed", explanation: "Trước khi máy in xuất hiện ở châu Âu, các nhà phát minh Trung Hoa đã phát triển chữ rời hàng thế kỷ trước đó." },
        { q: "The kingdom collapsed because a severe drought ___ its agricultural system.", options: ["destroyed", "had destroyed", "destroys"], answer: "had destroyed", explanation: "Mệnh đề nguyên nhân xảy ra trước kết quả sụp đổ trong quá khứ chia Quá khứ hoàn thành." }
      ],
      fillBlank: [
        { sentence: "By the time the museum opened at 8 AM, a long queue ___ (form) outside.", answer: "had formed", hint: "Quá khứ hoàn thành sau By the time + V2/ed" },
        { sentence: "After the team ___ (excavate) the site, they sent the artifacts to the laboratory.", answer: "had excavated", hint: "Hành động xảy ra trước sau After" },
        { sentence: "The navigator ___ (not / see) such a violent storm before that voyage.", answer: "had not seen", hint: "Quá khứ hoàn thành phủ định (had not + V3)" },
        { sentence: "By the end of the 19th century, scientists ___ (identify) dozens of chemical elements.", answer: "had identified", hint: "By + mốc thời gian quá khứ" },
        { sentence: "___ they ___ (sign) the peace treaty before the winter began?", answer: "Had signed", hint: "Câu hỏi Quá khứ hoàn thành: Had ... V3" },
        { sentence: "The village was empty because all residents ___ (flee) before the volcano erupted.", answer: "had fled", hint: "V3 của flee là fled" },
        { sentence: "Before she wrote her thesis, she ___ (consult) three ancient chronicles.", answer: "had consulted", hint: "Hành động xảy ra trước Before + V2/ed" },
        { sentence: "I did not recognize the old citadel because the city ___ (restore) its outer walls.", answer: "had restored", hint: "Nguyên nhân xảy ra trước trong quá khứ" }
      ],
      sentenceBuild: [
        { words: ["By", "1922,", "archaeologists", "had", "discovered", "the", "pharaoh's", "tomb", "."], answer: "By 1922, archaeologists had discovered the pharaoh's tomb .", vi: "Tính đến năm 1922, các nhà khảo cổ đã khám phá ra lăng mộ của vị pharaoh." },
        { words: ["After", "they", "had", "signed", "the", "treaty,", "peace", "returned", "."], answer: "After they had signed the treaty, peace returned .", vi: "Sau khi họ đã ký hiệp ước, hòa bình đã trở lại." },
        { words: ["The", "expedition", "had", "prepared", "carefully", "before", "winter", "arrived", "."], answer: "The expedition had prepared carefully before winter arrived .", vi: "Đoàn thám hiểm đã chuẩn bị kỹ lưỡng trước khi mùa đông tới." },
        { words: ["She", "had", "never", "seen", "an", "ancient", "manuscript", "before", "."], answer: "She had never seen an ancient manuscript before .", vi: "Trước đó cô ấy chưa từng nhìn thấy một bản thảo cổ nào." },
        { words: ["By", "the", "time", "we", "arrived,", "the", "lecture", "had", "started", "."], answer: "By the time we arrived, the lecture had started .", vi: "Vào lúc chúng tôi đến nơi, bài giảng đã bắt đầu rồi." },
        { words: ["The", "dynasty", "had", "ruled", "for", "two", "centuries", "before", "collapsing", "."], answer: "The dynasty had ruled for two centuries before collapsing .", vi: "Triều đại đó đã trị vì suốt hai thế kỷ trước khi sụp đổ." }
      ],
      transformation: [
        { sentence: "First the navigator studied the star map, and then he started the voyage. (After)", answer: "After the navigator had studied the star map, he started the voyage.", hint: "Dùng After + S + had + V3/ed, S + V2/ed" },
        { sentence: "The rain stopped before the archaeological expedition reached the valley. (By the time)", answer: "By the time the archaeological expedition reached the valley, the rain had stopped.", hint: "Dùng By the time + S + V2/ed, S + had + V3/ed" },
        { sentence: "The scholars translated the manuscript and then published the book. (Before)", answer: "Before the scholars published the book, they had translated the manuscript.", hint: "Dùng Before + S + V2/ed, S + had + V3/ed" },
        { sentence: "It was my first time visiting an imperial citadel. (never)", answer: "I had never visited an imperial citadel before.", hint: "Chuyển sang I had never + V3/ed ... before" },
        { sentence: "The empire collapsed after a long period of economic decline. (because)", answer: "The empire collapsed because its economy had declined for a long period.", hint: "Mệnh đề sau because chia had declined" }
      ],
      review: [
        { sentence: "We ___ (have) our roof repaired by a professional contractor last week.", answer: "had", hint: "Ôn tập Câu cầu khiến bị động ở quá khứ (have sth done)" },
        { sentence: "She avoids ___ (eat) processed food to stay healthy.", answer: "eating", hint: "Ôn tập avoid + V-ing" },
        { sentence: "How ___ (much / many) historical information did you collect?", answer: "much", hint: "Ôn tập Lượng từ với danh từ không đếm được information" },
        { sentence: "The museum is accustomed to ___ (welcome) thousands of visitors on Sundays.", answer: "welcoming", hint: "Ôn tập be accustomed to + V-ing" },
        { sentence: "They had to ___ (put off) the field trip due to heavy rain.", answer: "put off", hint: "Ôn tập Phrasal Verb mang nghĩa trì hoãn" }
      ]
    }
  },

  // ==================== DAY 32 ====================
  {
    day: 32,
    id: "day-32",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Phân biệt Quá khứ hoàn thành & Quá khứ đơn — Tiểu sử & Hồi ký",
    titleEn: "Past Perfect vs. Past Simple — Biographical Milestones & Memoirs",
    dailyGoal: "Phân biệt chính xác chuỗi sự kiện nối tiếp (Quá khứ đơn) và sự kiện hồi tưởng ngược dòng thời gian (Quá khứ hoàn thành) khi viết tiểu sử và hồi ký.",
    vocab: [
      { en: "memoir", pos: "n", ipa: "/ˈmemwɑːr/", vi: "hồi ký", example: "In her memoir, the diplomat reflected on the years she had spent in Geneva." },
      { en: "biography", pos: "n", ipa: "/baɪˈɑːɡrəfi/", vi: "tiểu sử", example: "The author interviewed thirty colleagues before writing the scientist's biography." },
      { en: "upbringing", pos: "n", ipa: "/ˈʌpbrɪŋɪŋ/", vi: "sự nuôi dạy thời thơ ấu", example: "His humble upbringing had shaped his empathy for underprivileged children." },
      { en: "Turning point", pos: "n", ipa: "/ˈtɜːrnɪŋ pɔɪnt/", vi: "bước ngoặt cuộc đời", example: "Winning the national debate contest was a major turning point in her youth." },
      { en: "mentor", pos: "n", ipa: "/ˈmentɔːr/", vi: "người thầy dẫn dắt, cố vấn", example: "He thanked the mentor who had guided him through his toughest research years." },
      { en: "persecution", pos: "n", ipa: "/ˌpɜːrsɪˈkjuːʃn/", vi: "sự bức hại, đàn áp", example: "Many intellectuals fled the country after they had suffered political persecution." },
      { en: "legacy", pos: "n", ipa: "/ˈleɡəsi/", vi: "di sản để lại", example: "The surgeon left behind a medical legacy that saved thousands of lives." },
      { en: "adversity", pos: "n", ipa: "/ədˈvɜːrsəti/", vi: "nghịch cảnh, khó khăn", example: "Despite facing severe adversity, she graduated at the top of her class." },
      { en: "autobiography", pos: "n", ipa: "/ˌɔːtəbaɪˈɑːɡrəfi/", vi: "tự truyện", example: "Mandela completed his autobiography after he had been released from prison." },
      { en: "laureate", pos: "n", ipa: "/ˈlɔːriət/", vi: "người đoạt giải thưởng cao quý (Nobel)", example: "Before becoming a Nobel laureate, he had worked in a modest basement lab." },
      { en: "prodigy", pos: "n", ipa: "/ˈprɑːdədʒi/", vi: "thần đồng", example: "Mozart was a musical prodigy who had composed symphonies before turning ten." },
      { en: "endeavor", pos: "n", ipa: "/ɪnˈdevər/", vi: "nỗ lực lớn, sự nghiệp theo đuổi", example: "Every scientific endeavor requires patience and rigorous experimentation." }
    ],
    grammar: {
      point: "QUÁ KHỨ HOÀN THÀNH VS. QUÁ KHỨ ĐƠN (PAST PERFECT VS. PAST SIMPLE)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Khi nào dùng Quá khứ đơn nối tiếp vs. Quá khứ hoàn thành?</strong>
          <ul>
            <li><b>Chuỗi hành động xảy ra NỐI TIẾP NHAU theo đúng thứ tự kể chuyện (1 ➔ 2 ➔ 3):</b> Dùng <b>Quá khứ đơn (V2/ed)</b> cho tất cả các mệnh đề.<br/>
            <i>Ví dụ:</i> When the speaker <b>stepped</b> onto the stage, the audience <b>stood</b> up and <b>applauded</b>. (Bước lên ➔ khán giả đứng dậy ➔ vỗ tay).</li>
            <li><b>Hành động NHẢY LÙI VỀ TRƯỚC thời điểm đang kể (Hồi tưởng):</b> Dùng <b>Quá khứ hoàn thành (had + V3/ed)</b>.<br/>
            <i>Ví dụ:</i> When we <b>arrived</b> at the hall, the speaker <b>had already left</b>. (Người diễn giả đã rời đi TRƯỚC lúc chúng tôi đến).</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Cấu trúc nâng cao B1+: No sooner ... than / Hardly ... when (Vừa mới ... thì...)</strong>
          <p>Để nhấn mạnh một việc vừa mới hoàn tất thì việc khác ập tới ngay lập tức trong quá khứ:</p>
          <ul>
            <li><code>S + had + no sooner + V3/ed + than + S + V2/ed</code></li>
            <li><code>S + had + hardly / scarcely + V3/ed + when + S + V2/ed</code></li>
          </ul>
        </div>
      `,
      examples: [
        { en: "When the young prodigy <b>finished</b> his piano solo, the judges <b>gave</b> him a standing ovation.", vi: "Khi thần đồng trẻ tuổi vừa kết thúc phần độc tấu dương cầm, ban giám khảo đã đứng dậy vỗ tay nồng nhiệt (hành động nối tiếp)." },
        { en: "When the journalist <b>arrived</b> for the interview, the Nobel laureate <b>had already departed</b>.", vi: "Khi nhà báo đến để phỏng vấn, chủ nhân giải Nobel đã rời đi trước đó rồi (xảy ra trước)." },
        { en: "She <b>had no sooner published</b> her memoir <b>than</b> it <b>became</b> an international bestseller.", vi: "Cô ấy vừa mới xuất bản cuốn hồi ký thì nó lập tức trở thành sách bán chạy toàn cầu." },
        { en: "He <b>realized</b> how much his mentor <b>had sacrificed</b> for his academic endeavor.", vi: "Anh ấy nhận ra người thầy cố vấn đã hy sinh nhiều biết bao cho sự nghiệp học thuật của mình." }
      ],
      commonMistake: {
        wrong: "When I opened the letter, I had burst into tears of joy.",
        right: "When I opened the letter, I **burst** into tears of joy.",
        note: "Mở thư ra rồi bật khóc ngay lập tức là 2 hành động nối tiếp nhau (nhân - quả tức thời), nên cả hai vế đều dùng Quá khứ đơn (opened ➔ burst)!"
      },
      memoryTip: "Quy tắc Vàng khi đọc câu có 'When': Nếu vế 2 là PHẢN ỨNG TỨC THỜI sau vế 1 ➔ dùng V2/ed. Nếu vế 2 ĐÃ XONG TRƯỚC KHI vế 1 diễn ra ➔ dùng HAD + V3/ed!"
    },
    dialogue: {
      titleVi: "Tình huống: Buổi trò chuyện trong câu lạc bộ sách về cuốn tự truyện của một nhà khoa học",
      lines: [
        { speaker: "Tuan", en: "Have you finished reading the autobiography of Professor Ton That Tung?", vi: "Cậu đã đọc xong cuốn tự truyện của Giáo sư Tôn Thất Tùng chưa?" },
        { speaker: "Mai", en: "Yes! I finished the final chapter last night. His medical legacy is truly inspiring.", vi: "Rồi! Tối qua mình vừa đọc xong chương cuối. Di sản y học của ông thực sự truyền cảm hứng." },
        { speaker: "Tuan", en: "What struck me most was how he overcame extreme adversity during the wartime evacuations.", vi: "Điều làm mình ấn tượng nhất là cách ông vượt qua nghịch cảnh khắc nghiệt trong những đợt sơ tán thời chiến." },
        { speaker: "Mai", en: "Right! Even before he gained international recognition in Paris, he had performed hundreds of liver surgeries in modest field hospitals.", vi: "Đúng thế! Ngay cả trước khi được quốc tế công nhận tại Paris, ông đã thực hiện hàng trăm ca phẫu thuật gan ở các bệnh viện dã chiến đơn sơ." },
        { speaker: "Tuan", en: "When foreign surgeons read his research papers, they were astonished by his anatomical precision.", vi: "Khi các bác sĩ phẫu thuật nước ngoài đọc công trình nghiên cứu của ông, họ đã kinh ngạc trước độ chính xác giải phẫu của ông." },
        { speaker: "Mai", en: "He also credited the dedicated mentors and assistants who had stood by him through every endeavor.", vi: "Ông cũng tri ân những người thầy và cộng sự tận tụy đã sát cánh bên ông trong suốt mọi nỗ lực." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "When the biographer ___ the old trunk, she found letters that the poet had written in 1940.", options: ["opened", "had opened", "opens"], answer: "opened", explanation: "Hành động mở chiếc rương và tìm thấy những bức thư xảy ra nối tiếp nhau ở mốc kể chuyện chính (Quá khứ đơn)." },
        { q: "The audience clapped loudly as soon as the prodigy ___ his violin concerto.", options: ["concluded", "had concluded", "concludes"], answer: "concluded", explanation: "Hai hành động xảy ra nối tiếp ngay lập tức với 'as soon as' dùng Quá khứ đơn (hoặc hoàn thành nhẹ, ở đây concluded là chuẩn chuỗi sự kiện)." },
        { q: "She had no sooner graduated from university ___ she received a research fellowship.", options: ["when", "than", "before"], answer: "than", explanation: "Cấu trúc cố định: 'no sooner ... than ...' (vừa mới ... thì ...)." },
        { q: "He ___ hardly unpacked his suitcase when the hospital called him for an emergency.", options: ["did", "was", "had"], answer: "had", explanation: "Cấu trúc 'S + had + hardly + V3/ed + when + S + V2/ed'." },
        { q: "When I got to the bookstore, they ___ the last copy of the laureate's memoir.", options: ["sold", "had already sold", "were selling"], answer: "had already sold", explanation: "Cuốn hồi ký cuối cùng đã được bán xong TRƯỚC khi tôi đến hiệu sách." },
        { q: "During his childhood upbringing, his grandmother ___ him folk tales every evening.", options: ["told", "had told", "has told"], answer: "told", explanation: "Thói quen lặp đi lặp lại trong một giai đoạn quá khứ (During his childhood) dùng Quá khứ đơn." },
        { q: "She felt deeply grateful to the mentor who ___ in her talent when nobody else did.", options: ["believed", "had believed", "believes"], answer: "had believed", explanation: "Việc người cố vấn tin tưởng vào tài năng của cô xảy ra trước thời điểm cô cảm thấy biết ơn." },
        { q: "When the alarm rang at midnight, the night guard ___ out of the booth and checked the gate.", options: ["jumped", "had jumped", "has jumped"], answer: "jumped", explanation: "Chuông reo ➔ người bảo vệ nhảy ra kiểm tra là chuỗi phản ứng tức thời trong quá khứ." },
        { q: "Until she read her grandfather's diary, she ___ about the persecution her family had endured.", options: ["never knew", "had never known", "has never known"], answer: "had never known", explanation: "Tính đến trước thời điểm đọc nhật ký (Until + V2/ed), cô ấy chưa từng biết (had never known)." },
        { q: "First he worked as a clerk, then he studied law, and finally he ___ a Supreme Court judge.", options: ["became", "had become", "was becoming"], answer: "became", explanation: "Chuỗi sự kiện tiểu sử theo trình tự thời gian (First... then... finally...) chia Quá khứ đơn." }
      ],
      fillBlank: [
        { sentence: "When the curtain fell, the spectators ___ (stand) up and cheered enthusiastically.", answer: "stood", hint: "Hành động nối tiếp nhau trong quá khứ (V2 của stand)" },
        { sentence: "When we reached the station, the night train ___ (already / depart).", answer: "had already departed", hint: "Tàu đã rời ga trước lúc chúng tôi tới" },
        { sentence: "He had no sooner finished his autobiography ___ (than / when) his health declined.", answer: "than", hint: "Cặp liên từ đi với no sooner" },
        { sentence: "She ___ (hardly / close) her eyes when the telephone rang.", answer: "had hardly closed", hint: "Cấu trúc had + hardly + V3/ed + when" },
        { sentence: "The young prodigy ___ (compose) three sonatas before his tenth birthday.", answer: "had composed", hint: "Hoàn tất trước mốc sinh nhật lần thứ 10 trong quá khứ" },
        { sentence: "After enduring years of adversity, the inventor finally ___ (patent) his machine in 1908.", answer: "patented", hint: "Mốc năm xác định trong quá khứ (in 1908) chia Quá khứ đơn" },
        { sentence: "I did not recognize my old mentor because he ___ (grow) a long white beard.", answer: "had grown", hint: "Việc để râu đã diễn ra trước lúc tôi gặp lại" },
        { sentence: "As soon as the laureate ___ (receive) the telegram, he informed his laboratory team.", answer: "received", hint: "Nhận điện tín rồi báo ngay cho nhóm (Quá khứ đơn)" }
      ],
      sentenceBuild: [
        { words: ["When", "the", "bell", "rang,", "the", "students", "submitted", "their", "papers", "."], answer: "When the bell rang, the students submitted their papers .", vi: "Khi chuông reo, các học sinh đã nộp bài thi của mình." },
        { words: ["When", "we", "arrived,", "the", "ceremony", "had", "already", "concluded", "."], answer: "When we arrived, the ceremony had already concluded .", vi: "Khi chúng tôi đến nơi, buổi lễ đã kết thúc rồi." },
        { words: ["She", "had", "no", "sooner", "published", "her", "memoir", "than", "it", "sold", "out", "."], answer: "She had no sooner published her memoir than it sold out .", vi: "Cô ấy vừa mới xuất bản hồi ký thì nó đã bán hết sạch." },
        { words: ["His", "mentor", "had", "guided", "him", "through", "years", "of", "adversity", "."], answer: "His mentor had guided him through years of adversity .", vi: "Người thầy cố vấn đã dẫn dắt anh ấy vượt qua nhiều năm nghịch cảnh." },
        { words: ["The", "biography", "revealed", "secrets", "that", "nobody", "had", "known", "before", "."], answer: "The biography revealed secrets that nobody had known before .", vi: "Cuốn tiểu sử đã tiết lộ những bí mật mà trước đó chưa ai từng biết." },
        { words: ["He", "donated", "his", "fortune", "after", "he", "had", "retired", "from", "medicine", "."], answer: "He donated his fortune after he had retired from medicine .", vi: "Ông đã hiến tặng gia tài sau khi nghỉ hưu khỏi ngành y." }
      ],
      transformation: [
        { sentence: "As soon as the author signed the contract, the publisher announced the biography. (no sooner)", answer: "The author had no sooner signed the contract than the publisher announced the biography.", hint: "Dùng S + had no sooner + V3/ed + than + S + V2/ed" },
        { sentence: "The laureate had just stepped onto the podium when the microphone failed. (hardly)", answer: "The laureate had hardly stepped onto the podium when the microphone failed.", hint: "Dùng S + had hardly + V3/ed + when + S + V2/ed" },
        { sentence: "First she experienced severe adversity, and later she wrote an inspiring memoir. (After)", answer: "After she had experienced severe adversity, she wrote an inspiring memoir.", hint: "Dùng After + S + had + V3/ed, S + V2/ed" },
        { sentence: "We arrived at the theater too late to see the opening scene. (already)", answer: "When we arrived at the theater, the opening scene had already finished.", hint: "Dùng When we arrived at the theater, the opening scene had already finished." },
        { sentence: "He never forgot the kindness of his childhood mentor. (always)", answer: "He always remembered how kindly his childhood mentor had treated him.", hint: "Dùng He always remembered how kindly his childhood mentor had treated him." }
      ],
      review: [
        { sentence: "By the time the firefighters arrived, the neighbors ___ (put out) the small fire.", answer: "had put out", hint: "Ôn tập Day 31: Quá khứ hoàn thành với By the time" },
        { sentence: "She promised ___ (send) me a copy of her grandfather's memoir.", answer: "to send", hint: "Ôn tập promise + to V" },
        { sentence: "If I ___ (be) in your position, I would consult a career mentor.", answer: "were", hint: "Ôn tập Câu điều kiện loại 2" },
        { sentence: "He used to ___ (live) in a small village before moving to the capital.", answer: "live", hint: "Ôn tập used to + V nguyên thể" },
        { sentence: "This biography ___ (translate) into twelve languages last year.", answer: "was translated", hint: "Ôn tập Bị động thì Quá khứ đơn" }
      ]
    }
  },

  // ==================== DAY 33 ====================
  {
    day: 33,
    id: "day-33",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Thì Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous) — Báo chí Điều tra",
    titleEn: "Past Perfect Continuous — Investigative Journalism & Mysteries",
    dailyGoal: "Sử dụng thành thạo thì Quá khứ hoàn thành tiếp diễn (had been + V-ing) để nhấn mạnh quá trình kéo dài liên tục của một hành động trước một mốc quá khứ.",
    vocab: [
      { en: "investigative", pos: "adj", ipa: "/ɪnˈvestɪɡeɪtɪv/", vi: "mang tính điều tra, phóng sự điều tra", example: "The investigative journalist had been tracking the money trail for eight months." },
      { en: "whistleblower", pos: "n", ipa: "/ˈwɪslbloʊər/", vi: "người tố giác sai phạm nội bộ", example: "A brave whistleblower revealed that the factory had been dumping toxic waste." },
      { en: "surveillance", pos: "n", ipa: "/sɜːrˈveɪləns/", vi: "sự giám sát, theo dõi", example: "Detectives had been conducting surveillance on the warehouse for weeks." },
      { en: "alibi", pos: "n", ipa: "/ˈæləbaɪ/", vi: "bằng chứng ngoại phạm", example: "The suspect claimed he had been working late, providing a solid alibi." },
      { en: "corroborate", pos: "v", ipa: "/kəˈrɑːbəreɪt/", vi: "chứng thực, củng cố bằng chứng", example: "Witnesses corroborated the story that the reporter had been investigating." },
      { en: "anonymous", pos: "adj", ipa: "/əˈnɑːnɪməs/", vi: "ẩn danh, nặc danh", example: "The newsroom had been receiving anonymous tips since January." },
      { en: "cover-up", pos: "n", ipa: "/ˈkʌvər ʌp/", vi: "vụ che đậy, bưng bít thông tin", example: "The inquiry exposed a massive cover-up that officials had been orchestrating." },
      { en: "forensic", pos: "adj", ipa: "/fəˈrenzɪk/", vi: "thuộc pháp y, giám định khoa học", example: "Forensic experts had been analyzing the digital files all night." },
      { en: "fraud", pos: "n", ipa: "/frɔːd/", vi: "sự gian lận, lừa đảo tài chính", example: "Auditors discovered that the shell company had been committing tax fraud." },
      { en: "interrogate", pos: "v", ipa: "/ɪnˈterəɡeɪt/", vi: "thẩm vấn, xét hỏi", example: "Officers had been interrogating the witness for three hours before he confessed." },
      { en: "manhunt", pos: "n", ipa: "/ˈmænhʌnt/", vi: "cuộc truy lùng tội phạm", example: "Police launched a nationwide manhunt after the fugitive escaped." },
      { en: "confidential", pos: "adj", ipa: "/ˌkɑːnfɪˈdenʃl/", vi: "tuyệt mật, bảo mật", example: "Someone had been leaking confidential memos to the press for months." }
    ],
    grammar: {
      point: "THÌ QUÁ KHỨ HOÀN THÀNH TIẾP DIỄN (PAST PERFECT CONTINUOUS: HAD BEEN + V-ING)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Công thức Quá khứ hoàn thành tiếp diễn</strong>
          <ul>
            <li><b>Khẳng định (+):</b> <code>S + had been + V-ing</code></li>
            <li><b>Phủ định (-):</b> <code>S + had not (hadn't) been + V-ing</code></li>
            <li><b>Nghi vấn (?):</b> <code>Had + S + been + V-ing?</code></li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Phân biệt Past Perfect (had V3) vs. Past Perfect Continuous (had been V-ing)</strong>
          <ul>
            <li><b>Past Perfect Continuous (<code>had been + V-ing</code>):</b> Nhấn mạnh <b>ĐỘ DÀI THỜI GIAN LIÊN TỤC</b> (thường đi kèm <code>for + khoảng thời gian</code>, <code>all day</code>, <code>for hours</code>) trước một hành động quá khứ, hoặc giải thích <b>nguyên nhân để lại dấu vết rõ rệt</b> trong quá khứ (mắt đỏ vì vừa khóc, đường ướt vì trời vừa mưa).</li>
            <li><b>Past Perfect Simple (<code>had + V3/ed</code>):</b> Nhấn mạnh <b>KẾT QUẢ HOÀN TẤT</b> hoặc <b>SỐ LƯỢNG</b> (<i>three reports, five witnesses</i>) và bắt buộc dùng với <b>Động từ trạng thái (Stative Verbs: know, believe, own, belong, understand)</b>.</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "The investigative team <b>had been tracking</b> the fraud network for two years before making arrests.", vi: "Nhóm điều tra đã theo dõi mạng lưới gian lận suốt hai năm trước khi thực hiện các vụ bắt giữ." },
        { en: "The forensic analyst looked exhausted because she <b>had been examining</b> confidential files all night.", vi: "Chuyên gia giám định pháp y trông kiệt sức vì cô ấy đã kiểm tra các hồ sơ mật suốt cả đêm." },
        { en: "How long <b>had</b> the whistleblower <b>been collecting</b> evidence before contacting the press?", vi: "Người tố giác đã thu thập bằng chứng trong bao lâu trước khi liên hệ với báo chí?" },
        { en: "By the time the trial began, the prosecutor <b>had interviewed</b> twelve witnesses. <i>(nhấn mạnh số lượng ➔ dùng had + V3)</i>", vi: "Tính đến lúc phiên tòa bắt đầu, công tố viên đã phỏng vấn 12 nhân chứng." }
      ],
      commonMistake: {
        wrong: "The detective had been knowing the suspect's alibi for a week before the trial.",
        right: "The detective **had known** the suspect's alibi for a week before the trial.",
        note: "Động từ trạng thái (know, believe, own, have = sở hữu) KHÔNG chia ở thể tiếp diễn (had been V-ing) mà phải dùng Quá khứ hoàn thành đơn (had + V3/ed)!"
      },
      memoryTip: "Hỏi 'BAO LÂU / QUÁ TRÌNH LIÊN TỤC' (How long / for hours / all night) ➔ HAD BEEN V-ING. Hỏi 'BAO NHIÊU LẦN / ĐÃ XONG CHƯA' hoặc Stative Verb ➔ HAD V3/ED!"
    },
    dialogue: {
      titleVi: "Tình huống: Hai phóng viên điều tra thảo luận trước giờ xuất bản loạt bài phóng sự",
      lines: [
        { speaker: "Khoa", en: "You look completely worn out, Linh! Have you slept at all?", vi: "Trông cậu phờ phạc hẳn đi đấy Linh! Cậu đã ngủ chút nào chưa?" },
        { speaker: "Linh", en: "Barely. Before you came in at 7 AM, I had been cross-checking these forensic accounting reports for six hours.", vi: "Hầu như chưa. Trước khi cậu vào lúc 7 giờ sáng, mình đã đối chiếu các báo cáo kế toán pháp y này suốt 6 tiếng đồng hồ." },
        { speaker: "Khoa", en: "Did the anonymous whistleblower send the documents that corroborate our fraud story?", vi: "Người tố giác ẩn danh đã gửi những tài liệu chứng thực cho bài viết về vụ gian lận của tụi mình chưa?" },
        { speaker: "Linh", en: "Yes! It turns out the executives had been orchestrating a financial cover-up for nearly three years.", vi: "Rồi! Hóa ra ban giám đốc đã dàn dựng một vụ che đậy tài chính suốt gần ba năm qua." },
        { speaker: "Khoa", en: "No wonder they tried to block our inquiry! Had the auditors been ignoring the warning signs all that time?", vi: "Thảo nào họ tìm cách chặn cuộc điều tra của tụi mình! Có phải bên kiểm toán đã phớt lờ các dấu hiệu cảnh báo trong suốt thời gian đó không?" },
        { speaker: "Linh", en: "Exactly. Now that our legal team has verified every confidential file, we are ready to publish.", vi: "Chính xác. Giờ đội ngũ pháp lý của chúng ta đã xác minh mọi hồ sơ mật, tụi mình sẵn sàng xuất bản rồi." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "The reporters ___ the corporate fraud for ten months before they published the front-page exposé.", options: ["investigated", "had been investigating", "have been investigating"], answer: "had been investigating", explanation: "Nhấn mạnh quá trình kéo dài 10 tháng liên tục (for ten months) trước một hành động quá khứ (before they published)." },
        { q: "The pavement outside the courtroom was wet because it ___ heavily all morning.", options: ["had been raining", "has been raining", "rained"], answer: "had been raining", explanation: "Giải thích nguyên nhân để lại dấu vết trong quá khứ (vỉa hè ướt vì trời đã mưa suốt buổi sáng)." },
        { q: "By the time the police launched the manhunt, the suspect ___ three different passports.", options: ["had been using", "had used", "was using"], answer: "had used", explanation: "Khi nêu số lượng cụ thể (three different passports), ta dùng Quá khứ hoàn thành đơn (had used) thay vì tiếp diễn." },
        { q: "How long ___ the detectives ___ surveillance before they obtained the search warrant?", options: ["had / been conducting", "did / conduct", "have / been conducting"], answer: "had / been conducting", explanation: "Câu hỏi 'How long' về một hành động kéo dài tới trước một mốc quá khứ (before they obtained) chia had + S + been + V-ing." },
        { q: "The chief editor ___ the whistleblower for five years before the scandal broke out.", options: ["had been knowing", "had known", "knew"], answer: "had known", explanation: "'Know' là động từ trạng thái (stative verb), không chia tiếp diễn nên phải dùng 'had known'." },
        { q: "His voice was hoarse because the officers ___ him for over four hours.", options: ["had been interrogating", "interrogated", "have interrogated"], answer: "had been interrogating", explanation: "Nhấn mạnh quá trình kéo dài suốt hơn 4 giờ dẫn đến kết quả trong quá khứ." },
        { q: "Someone ___ confidential emails to competitors for months before the IT department noticed.", options: ["leaked", "had been leaking", "has been leaking"], answer: "had been leaking", explanation: "Hành động lặp đi lặp lại/kéo dài trong nhiều tháng trước khi bộ phận IT phát hiện." },
        { q: "She was relieved because the witness finally ___ her client's alibi.", options: ["had been corroborating", "corroborated", "has corroborated"], answer: "corroborated", explanation: "Hành động xác nhận bằng chứng ngoại phạm hoàn tất tại thời điểm đó, không phải quá trình kéo dài." },
        { q: "The forensic team ___ for clues in the warehouse since dawn when the chief arrived.", options: ["searched", "had been searching", "has searched"], answer: "had been searching", explanation: "Kéo dài từ lúc bình minh cho tới khi sếp đến trong quá khứ ➔ had been searching." },
        { q: "They shut down the firm after auditors proved it ___ investors for years.", options: ["had been defrauding", "defrauded", "is defrauding"], answer: "had been defrauding", explanation: "Hành động lừa đảo kéo dài nhiều năm trước khi bị đóng cửa trong quá khứ." }
      ],
      fillBlank: [
        { sentence: "The journalist ___ (work) on the undercover report for six months before it aired.", answer: "had been working", hint: "Nhấn mạnh quá trình 6 tháng trước mốc quá khứ" },
        { sentence: "Her eyes were red because she ___ (read) old microfilms in the archive all afternoon.", answer: "had been reading", hint: "Nguyên nhân để lại dấu hiệu ở quá khứ (had been + V-ing)" },
        { sentence: "By the time the inquiry ended, the committee ___ (interview) forty witnesses.", answer: "had interviewed", hint: "Có số lượng cụ thể (forty witnesses) ➔ dùng Quá khứ hoàn thành đơn" },
        { sentence: "How long ___ they ___ (monitor) the suspect's phone before making the arrest?", answer: "had been monitoring", hint: "Câu hỏi How long ở Quá khứ hoàn thành tiếp diễn" },
        { sentence: "The lawyer ___ (know) about the cover-up for weeks before the document leaked.", answer: "had known", hint: "Chú ý động từ trạng thái know không chia V-ing!" },
        { sentence: "We ___ (not / wait) outside the press room for long when the spokesperson appeared.", answer: "had not been waiting", hint: "Quá khứ hoàn thành tiếp diễn phủ định" },
        { sentence: "The whistleblower revealed that the plant ___ (discharge) untreated chemicals since 2019.", answer: "had been discharging", hint: "Quá trình kéo dài trước thời điểm tiết lộ" },
        { sentence: "The detectives were exhausted because they ___ (lead) the manhunt for forty-eight hours.", answer: "had been leading", hint: "Hành động kéo dài 48 giờ gây ra sự mệt mỏi trong quá khứ" }
      ],
      sentenceBuild: [
        { words: ["The", "reporter", "had", "been", "investigating", "the", "fraud", "for", "months", "."], answer: "The reporter had been investigating the fraud for months .", vi: "Người phóng viên đã điều tra vụ gian lận suốt nhiều tháng." },
        { words: ["Detectives", "had", "been", "conducting", "surveillance", "before", "making", "the", "arrest", "."], answer: "Detectives had been conducting surveillance before making the arrest .", vi: "Các thám tử đã tiến hành giám sát trước khi thực hiện vụ bắt giữ." },
        { words: ["Someone", "had", "been", "leaking", "confidential", "reports", "to", "the", "press", "."], answer: "Someone had been leaking confidential reports to the press .", vi: "Ai đó đã rò rỉ các báo cáo mật cho báo chí." },
        { words: ["She", "was", "tired", "because", "she", "had", "been", "working", "all", "night", "."], answer: "She was tired because she had been working all night .", vi: "Cô ấy mệt vì đã làm việc suốt cả đêm." },
        { words: ["How", "long", "had", "they", "been", "interrogating", "the", "main", "suspect", "?"], answer: "How long had they been interrogating the main suspect ?", vi: "Họ đã thẩm vấn nghi phạm chính trong bao lâu?" },
        { words: ["The", "witness", "corroborated", "what", "the", "whistleblower", "had", "been", "saying", "."], answer: "The witness corroborated what the whistleblower had been saying .", vi: "Nhân chứng đã chứng thực những gì người tố giác vẫn đang nói." }
      ],
      transformation: [
        { sentence: "The forensic team started analyzing the evidence at 8 PM and was still analyzing it when the prosecutor arrived at midnight. (for four hours)", answer: "When the prosecutor arrived at midnight, the forensic team had been analyzing the evidence for four hours.", hint: "Dùng When the prosecutor arrived at midnight, the forensic team had been analyzing..." },
        { sentence: "The journalist tracked the cover-up for a year, and then he published the article. (Before)", answer: "Before the journalist published the article, he had been tracking the cover-up for a year.", hint: "Dùng Before + S + V2/ed, S + had been tracking..." },
        { sentence: "The suspect was out of breath because of his long run from the police. (running)", answer: "The suspect was out of breath because he had been running from the police.", hint: "Dùng because he had been running..." },
        { sentence: "Auditors checked the company accounts for three weeks before discovering the fraud. (After)", answer: "After auditors had been checking the company accounts for three weeks, they discovered the fraud.", hint: "Dùng After auditors had been checking..., they discovered..." },
        { sentence: "The road was slippery because of the morning snowstorm. (snowing)", answer: "The road was slippery because it had been snowing all morning.", hint: "Dùng because it had been snowing all morning." }
      ],
      review: [
        { sentence: "She had no sooner opened the confidential file ___ (than / when) her computer crashed.", answer: "than", hint: "Ôn tập Day 32: Cấu trúc no sooner ... than" },
        { sentence: "By 1950, the city ___ (expand) twice its original size.", answer: "had expanded", hint: "Ôn tập Day 31: By + mốc quá khứ dùng had + V3/ed" },
        { sentence: "The editor made the reporter ___ (verify) every single source.", answer: "verify", hint: "Ôn tập make + sb + V nguyên thể" },
        { sentence: "He denied ___ (leak) the anonymous letter to the newspaper.", answer: "leaking", hint: "Ôn tập deny + V-ing" },
        { sentence: "Neither the suspect's alibi nor his testimony ___ (be) convincing yesterday.", answer: "was", hint: "Chia động từ theo chủ ngữ gần nhất (testimony - số ít) ở quá khứ" }
      ]
    }
  },

  // ==================== DAY 34 ====================
  {
    day: 34,
    id: "day-34",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Câu điều kiện Loại 3 (Conditional Type 3) — Sự nuối tiếc & Bước ngoặt",
    titleEn: "Third Conditional — Regrets & Life Turning Points",
    dailyGoal: "Nắm vững cấu trúc Câu điều kiện Loại 3 (If + had + V3/ed, would/could/might have + V3/ed) để giả định điều trái ngược với quá khứ và bày tỏ sự nuối tiếc.",
    vocab: [
      { en: "hindsight", pos: "n", ipa: "/ˈhaɪndsaɪt/", vi: "sự nhìn lại sau khi việc đã xảy ra", example: "In hindsight, we would have avoided the crisis if we had acted sooner." },
      { en: "turning-point", pos: "n", ipa: "/ˈtɜːrnɪŋ pɔɪnt/", vi: "thời khắc quyết định, ngã rẽ", example: "That scholarship interview was the decisive turning-point of my twenties." },
      { en: "overlook", pos: "v", ipa: "/ˌoʊvərˈlʊk/", vi: "bỏ sót, xem nhẹ", example: "If the engineer had not overlooked the tiny crack, the bridge wouldn't have failed." },
      { en: "precaution", pos: "n", ipa: "/prɪˈkɔːʃn/", vi: "biện pháp phòng ngừa", example: "Had they taken proper safety precautions, no workers would have been injured." },
      { en: "miscalculation", pos: "n", ipa: "/ˌmɪskælkjuˈleɪʃn/", vi: "sự tính toán sai lầm", example: "One small miscalculation cost the startup its entire seed funding." },
      { en: "foresee", pos: "v", ipa: "/fɔːrˈsiː/", vi: "lường trước, nhìn thấy trước", example: "Nobody could have foreseen how rapidly the market would collapse." },
      { en: "decisive", pos: "adj", ipa: "/dɪˈsaɪsɪv/", vi: "quyết đoán; mang tính quyết định", example: "If the captain had been more decisive, the ship might have escaped the reef." },
      { en: "repercussion", pos: "n", ipa: "/ˌriːpərˈkʌʃn/", vi: "hậu quả, hệ lụy dây chuyền", example: "He hadn't considered the long-term repercussions of his hasty resignation." },
      { en: "pivotal", pos: "adj", ipa: "/ˈpɪvətl/", vi: "then chốt, mấu chốt", example: "Her mentor played a pivotal role in her decision to pursue astrophysics." },
      { en: "remorse", pos: "n", ipa: "/rɪˈmɔːrs/", vi: "sự ân hận, ăn năn sâu sắc", example: "Filled with remorse, he apologized for the harsh words he had spoken." },
      { en: "rectify", pos: "v", ipa: "/ˈrektɪfaɪ/", vi: "sửa chữa, khắc phục (sai sót)", example: "If we had detected the software bug earlier, we could have rectified it immediately." },
      { en: "dilemma", pos: "n", ipa: "/dɪˈlemə/", vi: "tình thế tiến thoái lưỡng nan", example: "Faced with an ethical dilemma, she chose transparency over personal gain." }
    ],
    grammar: {
      point: "CÂU ĐIỀU KIỆN LOẠI 3 (THIRD CONDITIONAL — UNREAL PAST)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Công thức Câu điều kiện Loại 3 (Giả định trái với Quá khứ)</strong>
          <ul>
            <li><b>Mệnh đề IF (Điều kiện):</b> <code>If + S + had (not) + V3/ed</code></li>
            <li><b>Mệnh đề Chính (Kết quả):</b> <code>S + would / could / might (not) + have + V3/ed</code></li>
            <li><b>Ý nghĩa:</b> Diễn tả một điều kiện <b>KHÔNG CÓ THẬT TRONG QUÁ KHỨ</b> (sự việc đã xảy ra xong xuôi theo hướng ngược lại), thường dùng để bày tỏ sự tiếc nuối, trách móc hoặc rút kinh nghiệm.</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Sắc thái Modal Verbs & Đảo ngữ Loại 3 (B1+/B2)</strong>
          <ul>
            <li><b>would have + V3:</b> Kết quả chắc chắn sẽ xảy ra | <b>could have + V3:</b> Khả năng/năng lực có thể đạt được | <b>might have + V3:</b> Xác suất có lẽ đã xảy ra.</li>
            <li><b>Đảo ngữ (Inversion — bỏ If, đưa Had lên đầu câu):</b><br/>
            <code>Had + S + (not) + V3/ed, S + would/could/might have + V3/ed.</code><br/>
            <i>Ví dụ:</i> <b>Had we taken</b> precautions, we <b>would have prevented</b> the accident.</li>
            <li><b>Cấu trúc But for / Without + Cụm danh từ:</b> <code>But for + N, S + would have + V3/ed</code> (Nếu không nhờ có / Nếu không vì...).</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "If we <b>had foreseen</b> the supply chain crisis, we <b>would have diversified</b> our suppliers.", vi: "Nếu chúng tôi lường trước được cuộc khủng hoảng chuỗi cung ứng, chúng tôi đã đa dạng hóa nhà cung cấp rồi." },
        { en: "She <b>could have won</b> the championship if she <b>had not injured</b> her ankle in the semifinal.", vi: "Cô ấy đã có thể giành chức vô địch nếu không bị chấn thương mắt cá chân ở trận bán kết." },
        { en: "<b>Had</b> the auditor <b>not overlooked</b> that invoice, the company <b>might have rectified</b> the error in time.", vi: "Giá như kiểm toán viên không bỏ sót hóa đơn đó, công ty có lẽ đã khắc phục lỗi kịp thời." },
        { en: "<b>But for</b> her mentor's pivotal advice, she <b>would have given up</b> her research.", vi: "Nếu không nhờ lời khuyên then chốt của người thầy cố vấn, cô ấy đã từ bỏ nghiên cứu của mình rồi." }
      ],
      commonMistake: {
        wrong: "If I would have known about the traffic jam, I would have taken the metro.",
        right: "If I **had known** about the traffic jam, I **would have taken** the metro.",
        note: "TUYỆT ĐỐI KHÔNG dùng 'would have' trong mệnh đề chứa 'If'! Mệnh đề If của câu điều kiện loại 3 luôn chia ở Quá khứ hoàn thành (had + V3/ed)."
      },
      memoryTip: "Khẩu quyết Loại 3: 'IF đi với HAD + V3, vế kia WOULD HAVE + V3 đi kèm!' — Tuyệt đối không đặt 'would' vào ngay sau 'If'!"
    },
    dialogue: {
      titleVi: "Tình huống: Hai nhà đồng sáng lập nhìn lại bài học sau đợt ra mắt sản phẩm đầu tiên",
      lines: [
        { speaker: "Nam", en: "In hindsight, launching our app in December was a costly miscalculation.", vi: "Nhìn lại thì việc ra mắt ứng dụng của tụi mình vào tháng 12 là một sự tính toán sai lầm đắt giá." },
        { speaker: "Ha", en: "I agree. If we had waited until after the New Year holidays, we would have attracted far more users.", vi: "Mình đồng ý. Giá như tụi mình đợi đến sau kỳ nghỉ Tết Dương lịch, chúng ta đã thu hút được nhiều người dùng hơn hẳn." },
        { speaker: "Nam", en: "Also, had we tested the payment server more thoroughly, it wouldn't have crashed on day one.", vi: "Hơn nữa, giá như chúng ta kiểm thử máy chủ thanh toán kỹ lưỡng hơn, nó đã không bị sập ngay ngày đầu tiên." },
        { speaker: "Ha", en: "True, nobody could have foreseen that ten thousand people would log in at the exact same minute!", vi: "Đúng vậy, chẳng ai có thể lường trước được rằng mười nghìn người lại đăng nhập vào cùng một phút như thế!" },
        { speaker: "Nam", en: "Still, if our technical lead hadn't acted so decisively that night, we might have lost all our early customers.", vi: "Dù sao thì, nếu trưởng nhóm kỹ thuật của chúng ta không hành động quyết đoán vào đêm đó, có lẽ tụi mình đã mất sạch những khách hàng đầu tiên." },
        { speaker: "Ha", en: "Exactly. Let's document these precautions so we can rectify every weakness before version 2.0.", vi: "Chính xác. Hãy ghi chép lại các biện pháp phòng ngừa này để khắc phục mọi điểm yếu trước phiên bản 2.0 nhé." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "If the driver ___ the warning sign, he would not have taken the wrong exit.", options: ["noticed", "had noticed", "would have noticed"], answer: "had noticed", explanation: "Mệnh đề If trong câu điều kiện loại 3 (vế chính có would not have taken) phải chia Quá khứ hoàn thành: had noticed." },
        { q: "We ___ the flight if the taxi hadn't taken a shortcut through the suburb.", options: ["would miss", "would have missed", "had missed"], answer: "would have missed", explanation: "Mệnh đề chính của câu điều kiện loại 3 có công thức: would/could/might + have + V3/ed." },
        { q: "___ you backed up your thesis files, you wouldn't have lost your data when the laptop broke.", options: ["If", "Had", "Were"], answer: "Had", explanation: "Đảo ngữ câu điều kiện loại 3: 'Had + S + V3/ed, S + would have + V3/ed'." },
        { q: "If the committee had foreseen the financial repercussions, they ___ that risky contract.", options: ["might not have approved", "will not approve", "did not approve"], answer: "might not have approved", explanation: "Giả định kết quả trái với quá khứ: might not have + V3/ed." },
        { q: "___ the rescue team's decisive action, the climbers would have perished in the blizzard.", options: ["Unless", "But for", "If not"], answer: "But for", explanation: "'But for + Cụm danh từ' = 'If it hadn't been for + Cụm danh từ' (Nếu không nhờ có...)." },
        { q: "She could have rectified the accounting error if someone ___ it out to her earlier.", options: ["pointed", "had pointed", "has pointed"], answer: "had pointed", explanation: "Mệnh đề If đi kèm 'could have rectified' chia ở Quá khứ hoàn thành (had pointed)." },
        { q: "If I ___ how pivotal that seminar was, I would definitely have attended it.", options: ["knew", "had known", "would know"], answer: "had known", explanation: "Sự việc đã qua trong quá khứ (would have attended) ➔ mệnh đề If dùng had known." },
        { q: "What ___ you ___ if you had faced the same ethical dilemma?", options: ["would / do", "would / have done", "did / do"], answer: "would / have done", explanation: "Câu hỏi ở mệnh đề chính của câu điều kiện loại 3: What + would + S + have + V3/ed?" },
        { q: "Had the inspectors ___ the safety flaw, the factory explosion could have been avoided.", options: ["not overlooked", "not overlook", "didn't overlook"], answer: "not overlooked", explanation: "Trong đảo ngữ loại 3 phủ định, 'not' đứng sau chủ ngữ: 'Had + S + not + V3/ed'." },
        { q: "He wouldn't have felt such deep remorse if he ___ the truth from the beginning.", options: ["spoke", "had spoken", "would speak"], answer: "had spoken", explanation: "Mệnh đề If loại 3 dùng had + V3 (spoken)." }
      ],
      fillBlank: [
        { sentence: "If they ___ (take) proper precautions, the laboratory fire would not have happened.", answer: "had taken", hint: "Mệnh đề If loại 3 (had + V3 của take)" },
        { sentence: "She ___ (could / pass) the audition if she hadn't been so nervous.", answer: "could have passed", hint: "Khả năng trong quá khứ: could have + V3" },
        { sentence: "___ (Have) I known about her adversity, I would have offered to help immediately.", answer: "Had", hint: "Đảo ngữ câu điều kiện loại 3 đứng đầu câu" },
        { sentence: "If the navigator hadn't made a miscalculation, the ship ___ (not / hit) the coral reef.", answer: "would not have hit", hint: "Mệnh đề chính phủ định loại 3 (V3 của hit là hit)" },
        { sentence: "Nobody could ___ (foresee) the global repercussions of that event.", answer: "have foreseen", hint: "could have + V3 của foresee (foreseen)" },
        { sentence: "If we ___ (not / overlook) that clause in the treaty, we would have saved millions.", answer: "had not overlooked", hint: "Mệnh đề If phủ định loại 3" },
        { sentence: "The project might ___ (succeed) if the manager had been more decisive.", answer: "have succeeded", hint: "might + have + V3" },
        { sentence: "What would have happened if the whistleblower ___ (remain) silent?", answer: "had remained", hint: "Mệnh đề If loại 3" }
      ],
      sentenceBuild: [
        { words: ["If", "I", "had", "known,", "I", "would", "have", "helped", "you", "."], answer: "If I had known, I would have helped you .", vi: "Giá như tôi biết chuyện, tôi đã giúp bạn rồi." },
        { words: ["Had", "we", "taken", "precautions,", "we", "would", "have", "avoided", "the", "loss", "."], answer: "Had we taken precautions, we would have avoided the loss .", vi: "Giá như chúng ta thực hiện các biện pháp phòng ngừa, chúng ta đã tránh được tổn thất." },
        { words: ["She", "could", "have", "rectified", "the", "error", "if", "she", "had", "noticed", "it", "."], answer: "She could have rectified the error if she had noticed it .", vi: "Cô ấy đã có thể khắc phục lỗi đó nếu cô ấy nhận ra nó." },
        { words: ["But", "for", "your", "pivotal", "support,", "our", "endeavor", "would", "have", "failed", "."], answer: "But for your pivotal support, our endeavor would have failed .", vi: "Nếu không nhờ sự hỗ trợ then chốt của bạn, nỗ lực của chúng tôi đã thất bại." },
        { words: ["If", "he", "had", "not", "overlooked", "the", "sign,", "he", "would", "have", "stopped", "."], answer: "If he had not overlooked the sign, he would have stopped .", vi: "Nếu anh ấy không bỏ sót biển báo đó, anh ấy đã dừng lại rồi." },
        { words: ["They", "might", "have", "foreseen", "the", "dilemma", "if", "they", "had", "planned", "ahead", "."], answer: "They might have foreseen the dilemma if they had planned ahead .", vi: "Họ có lẽ đã lường trước được tình thế tiến thoái lưỡng nan nếu lập kế hoạch từ trước." }
      ],
      transformation: [
        { sentence: "We didn't check the weather forecast, so we got caught in the typhoon. (If)", answer: "If we had checked the weather forecast, we would not have got caught in the typhoon.", hint: "Chuyển sang câu điều kiện loại 3 trái với quá khứ" },
        { sentence: "If the surgeon had not acted decisively, the patient would not have survived. (Had)", answer: "Had the surgeon not acted decisively, the patient would not have survived.", hint: "Đảo ngữ loại 3: Had + S + not + V3/ed..." },
        { sentence: "Thanks to the whistleblower's courage, the fraud was exposed. (But for)", answer: "But for the whistleblower's courage, the fraud would not have been exposed.", hint: "Dùng But for + N, S + would not have been + V3/ed" },
        { sentence: "I didn't apply for the fellowship because I missed the deadline. (could)", answer: "If I had not missed the deadline, I could have applied for the fellowship.", hint: "Dùng If I had not missed..., I could have applied..." },
        { sentence: "He regretted overlooking the warning signs in the contract. (wished)", answer: "He wished he had not overlooked the warning signs in the contract.", hint: "Dùng He wished he had not overlooked..." }
      ],
      review: [
        { sentence: "The detectives ___ (investigate) the case for two years before finding the key clue.", answer: "had been investigating", hint: "Ôn tập Day 33: Quá khứ hoàn thành tiếp diễn" },
        { sentence: "By the time the ambulance arrived, first responders ___ (stabilize) the injured hiker.", answer: "had stabilized", hint: "Ôn tập Day 31: Quá khứ hoàn thành với By the time" },
        { sentence: "If you ___ (heat) ice above zero degrees Celsius, it melts.", answer: "heat", hint: "Ôn tập Câu điều kiện chuẩn sự thật hiển nhiên" },
        { sentence: "She suggested ___ (consult) an independent legal expert.", answer: "consulting", hint: "Ôn tập suggest + V-ing" },
        { sentence: "How ___ (A breathtaking / What a breathtaking) view of the valley!", answer: "What a breathtaking", hint: "Ôn tập Câu cảm thán với cụm danh từ đếm được số ít" }
      ]
    }
  },

  // ==================== DAY 35 (MILESTONE EXAM 7) ====================
  {
    day: 35,
    id: "day-35",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: true,
    estimatedMinutes: 35,
    title: "Milestone Exam 7: Ôn tập & Kiểm tra Ngày 31–34 — Sự nghiệp & Quyết định",
    titleEn: "Milestone Exam 7 (Days 31–34) — Career & Life Decisions",
    dailyGoal: "Kiểm tra toàn diện kiến thức Ngữ pháp & Từ vựng Ngày 31–34: Quá khứ hoàn thành đơn, Quá khứ hoàn thành tiếp diễn và Câu điều kiện Loại 3.",
    vocab: [
      { en: "vocation", pos: "n", ipa: "/voʊˈkeɪʃn/", vi: "thiên hướng nghề nghiệp, sứ mệnh", example: "Teaching in remote highlands was not just a job for her; it was a true vocation." },
      { en: "crossroads", pos: "n", ipa: "/ˈkrɔːsroʊdz/", vi: "ngã rẽ cuộc đời, bước ngoặt lớn", example: "At twenty-eight, he stood at a career crossroads between law and journalism." },
      { en: "aspiration", pos: "n", ipa: "/ˌæspəˈreɪʃn/", vi: "khát vọng, hoài bão", example: "Never abandon your academic aspirations even when facing temporary setbacks." },
      { en: "persevere", pos: "v", ipa: "/ˌpɜːrsəˈvɪr/", vi: "kiên trì bền bỉ vượt khó", example: "Had she not persevered through three failed experiments, she wouldn't have succeeded." },
      { en: "foresight", pos: "n", ipa: "/ˈfɔːrsaɪt/", vi: "tầm nhìn xa trông rộng", example: "Thanks to the founder's foresight, the company had invested in cloud computing early." },
      { en: "commitment", pos: "n", ipa: "/kəˈmɪtmənt/", vi: "sự cam kết, tận tâm", example: "Achieving B1+ proficiency requires daily commitment and systematic review." },
      { en: "milestone", pos: "n", ipa: "/ˈmaɪlstoʊn/", vi: "cột mốc quan trọng", example: "Completing this exam marks a major milestone in your Upper-Intermediate journey." },
      { en: "setback", pos: "n", ipa: "/ˈsetbæk/", vi: "sự trắc trở, bước lùi tạm thời", example: "Every early setback had taught the entrepreneur a valuable lesson in resilience." },
      { en: "resilience", pos: "n", ipa: "/rɪˈzɪliəns/", vi: "sức bật tinh thần, khả năng phục hồi", example: "Her remarkable resilience helped her rebuild the business after the flood." },
      { en: "Breakthrough", pos: "n", ipa: "/ˈbreɪkθruː/", vi: "bước đột phá lớn", example: "The research team had been working for five years before achieving a clinical breakthrough." },
      { en: "transition", pos: "n", ipa: "/trænˈzɪʃn/", vi: "sự chuyển đổi, bước chuyển giao", example: "He had saved enough capital before making the transition to full-time consulting." },
      { en: "fulfillment", pos: "n", ipa: "/fʊlˈfɪlmənt/", vi: "sự viên mãn, thỏa nguyện", example: "Volunteering at the community clinic brought him deep personal fulfillment." }
    ],
    grammar: {
      point: "TỔNG ÔN CHẶNG 5 PHẦN 1 (NGÀY 31–34): HỆ THỐNG HOÀN THÀNH QUÁ KHỨ & ĐIỀU KIỆN LOẠI 3",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Bảng đối chiếu 3 Thì Quá khứ Trọng tâm (Days 31–33)</strong>
          <ul>
            <li><b>Past Simple (<code>V2/ed</code>):</b> Chuỗi sự kiện nối tiếp nhau trong quá khứ (<i>When A happened, B happened</i>).</li>
            <li><b>Past Perfect Simple (<code>had + V3/ed</code>):</b> Hành động hoàn tất TRƯỚC một mốc/hành động quá khứ khác (<i>by the time, before, after, no sooner... than, hardly... when</i>); nhấn mạnh <b>kết quả / số lượng</b> hoặc đi với <b>Stative Verbs</b>.</li>
            <li><b>Past Perfect Continuous (<code>had been + V-ing</code>):</b> Nhấn mạnh <b>quá trình kéo dài liên tục</b> (<i>for hours, all day, since</i>) trước một mốc quá khứ hoặc nguyên nhân để lại dấu vết.</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Câu điều kiện Loại 3 & Đảo ngữ (Day 34)</strong>
          <ul>
            <li><b>Cấu trúc chuẩn:</b> <code>If + S + had (not) + V3/ed, S + would/could/might (not) + have + V3/ed.</code></li>
            <li><b>Đảo ngữ trang trọng:</b> <code>Had + S + (not) + V3/ed, S + would/could/might + have + V3/ed.</code></li>
            <li><b>Cụm danh từ thay If:</b> <code>But for / Without + N, S + would/could/might + have + V3/ed.</code></li>
          </ul>
        </div>
      `,
      examples: [
        { en: "By the time she reached a career crossroads at thirty, she <b>had already published</b> two biographies.", vi: "Tính đến lúc đứng trước ngã rẽ sự nghiệp ở tuổi 30, cô ấy đã xuất bản hai cuốn tiểu sử rồi." },
        { en: "He <b>had been investigating</b> the financial fraud for nine months before the whistleblower came forward.", vi: "Anh ấy đã điều tra vụ gian lận tài chính suốt 9 tháng trước khi người tố giác bước ra ánh sáng." },
        { en: "If the expedition <b>had not overlooked</b> the weather warning, they <b>would have avoided</b> the storm.", vi: "Nếu đoàn thám hiểm không xem nhẹ cảnh báo thời tiết, họ đã tránh được cơn bão rồi." },
        { en: "<b>Had</b> her mentor <b>not encouraged</b> her to persevere, she <b>might have abandoned</b> her vocation.", vi: "Giá như người thầy cố vấn không khích lệ cô ấy kiên trì, có lẽ cô đã từ bỏ sứ mệnh nghề nghiệp của mình." }
      ],
      commonMistake: {
        wrong: "Had not she persevered through adversity, she wouldn't have achieved fulfillment.",
        right: "**Had she not persevered** through adversity, she wouldn't have achieved fulfillment.",
        note: "Trong đảo ngữ câu điều kiện loại 3 phủ định, tuyệt đối không viết 'Hadn't + S' hay 'Had not + S'; chữ 'not' luôn đứng SAU chủ ngữ: Had + S + not + V3/ed!"
      },
      memoryTip: "Chiến thuật làm bài thi Milestone 7: (1) Tìm mốc quá khứ làm chuẩn; (2) Phân biệt 'bao lâu' (had been V-ing) và 'bao nhiêu/stative verb' (had V3); (3) Kiểm tra cặp bài trùng If + had V3 ↔ would have V3!"
    },
    dialogue: null,
    exercises: {
      multipleChoice: [
        { q: "By the time the startup secured Series A funding, the founders ___ on the prototype for two years.", options: ["worked", "had been working", "have been working"], answer: "had been working", explanation: "Có 'By the time + V2/ed' kết hợp 'for two years' nhấn mạnh quá trình liên tục ➔ had been working." },
        { q: "She had no sooner signed the employment contract ___ another multinational corporation offered her a director role.", options: ["when", "than", "after"], answer: "than", explanation: "Cấu trúc 'no sooner ... than ...'." },
        { q: "If the auditor ___ the discrepancy in the ledger, the fraud would have continued for another year.", options: ["overlooked", "had overlooked", "would have overlooked"], answer: "had overlooked", explanation: "Mệnh đề If của câu điều kiện loại 3 chia ở Quá khứ hoàn thành (had overlooked)." },
        { q: "___ the navigator's extraordinary foresight, the fleet would have been trapped in the Arctic ice.", options: ["Unless", "But for", "If only"], answer: "But for", explanation: "'But for + Cụm danh từ' dùng trong câu điều kiện loại 3 mang nghĩa 'Nếu không nhờ có...'." },
        { q: "When the speaker finished her keynote speech on resilience, the entire hall ___ into applause.", options: ["erupted", "had erupted", "had been erupting"], answer: "erupted", explanation: "Hai hành động xảy ra nối tiếp nhau tức thời trong quá khứ đều chia Quá khứ đơn." },
        { q: "By the end of the 18th century, European cartographers ___ most of the Pacific coastline.", options: ["mapped", "had mapped", "had been mapping"], answer: "had mapped", explanation: "Nhấn mạnh kết quả hoàn tất trước một mốc quá khứ (By the end of the 18th century) ➔ had mapped." },
        { q: "___ the board of directors taken proper precautions, the data breach could have been prevented.", options: ["If", "Had", "Were"], answer: "Had", explanation: "Đảo ngữ câu điều kiện loại 3: 'Had + S + V3/ed'." },
        { q: "The historian ___ the family's private manuscripts for ten years before writing the biography.", options: ["had been owning", "had owned", "owned"], answer: "had owned", explanation: "'Own' (sở hữu) là động từ trạng thái, không chia tiếp diễn nên dùng 'had owned'." },
        { q: "The laboratory floor was covered in glass because an assistant ___ a tray of test tubes.", options: ["dropped", "had dropped", "has dropped"], answer: "had dropped", explanation: "Hành động làm rơi khay ống nghiệm xảy ra hoàn tất trước đó và để lại kết quả trong quá khứ." },
        { q: "What ___ you ___ if you had stood at the same career crossroads?", options: ["would / choose", "would / have chosen", "did / choose"], answer: "would / have chosen", explanation: "Mệnh đề chính nghi vấn của câu điều kiện loại 3: What + would + S + have + V3/ed?" }
      ],
      fillBlank: [
        { sentence: "After the archaeologists ___ (excavate) the citadel, they cataloged over five hundred relics.", answer: "had excavated", hint: "Hành động hoàn tất trước sau After" },
        { sentence: "The investigative reporter was exhausted because he ___ (follow) leads all week.", answer: "had been following", hint: "Nhấn mạnh quá trình kéo dài suốt cả tuần trước mốc quá khứ" },
        { sentence: "If she ___ (not / persevere) through early setbacks, she wouldn't have become a laureate.", answer: "had not persevered", hint: "Mệnh đề If phủ định câu điều kiện loại 3" },
        { sentence: "He had hardly started his presentation ___ (when / than) the projector bulb burned out.", answer: "when", hint: "Cặp liên từ đi với hardly / scarcely" },
        { sentence: "Had we ___ (foresee) the economic downturn, we would have delayed the expansion.", answer: "foreseen", hint: "Đảo ngữ loại 3: Had + S + V3 (của foresee)" },
        { sentence: "By the time I graduated, my mentor ___ (retire) from the university.", answer: "had retired", hint: "Hoàn tất trước một hành động quá khứ khác" },
        { sentence: "We ___ (could / rectify) the miscalculation if someone had checked the formula twice.", answer: "could have rectified", hint: "Mệnh đề chính câu điều kiện loại 3 với could" },
        { sentence: "She ___ (know) about the confidential treaty for months before it was announced.", answer: "had known", hint: "Động từ trạng thái know ở Quá khứ hoàn thành" }
      ],
      sentenceBuild: [
        { words: ["By", "the", "time", "reinforcements", "arrived,", "the", "fortress", "had", "fallen", "."], answer: "By the time reinforcements arrived, the fortress had fallen .", vi: "Vào lúc quân tiếp viện tới nơi, pháo đài đã thất thủ." },
        { words: ["She", "had", "been", "researching", "the", "dynasty", "for", "six", "years", "."], answer: "She had been researching the dynasty for six years .", vi: "Cô ấy đã nghiên cứu về triều đại đó suốt sáu năm." },
        { words: ["If", "he", "had", "listened", "to", "his", "mentor,", "he", "would", "have", "succeeded", "."], answer: "If he had listened to his mentor, he would have succeeded .", vi: "Giá như anh ấy nghe lời người thầy cố vấn, anh ấy đã thành công." },
        { words: ["Had", "they", "not", "overlooked", "the", "flaw,", "the", "bridge", "would", "have", "stood", "."], answer: "Had they not overlooked the flaw, the bridge would have stood .", vi: "Giá như họ không bỏ sót khiếm khuyết đó, cây cầu đã đứng vững." },
        { words: ["He", "had", "no", "sooner", "arrived", "than", "the", "interrogation", "began", "."], answer: "He had no sooner arrived than the interrogation began .", vi: "Anh ấy vừa mới đến nơi thì cuộc thẩm vấn bắt đầu." },
        { words: ["But", "for", "her", "resilience,", "the", "expedition", "might", "have", "failed", "."], answer: "But for her resilience, the expedition might have failed .", vi: "Nếu không nhờ nghị lực kiên cường của cô ấy, đoàn thám hiểm có lẽ đã thất bại." }
      ],
      transformation: [
        { sentence: "First the whistleblower backed up the confidential files, and then she contacted the press. (Before)", answer: "Before the whistleblower contacted the press, she had backed up the confidential files.", hint: "Dùng Before + S + V2/ed, S + had + V3/ed" },
        { sentence: "We didn't take safety precautions, so the experiment caused minor damage. (If)", answer: "If we had taken safety precautions, the experiment would not have caused minor damage.", hint: "Viết lại bằng câu điều kiện loại 3" },
        { sentence: "If you had not corroborated my alibi, the detective wouldn't have believed me. (Had)", answer: "Had you not corroborated my alibi, the detective wouldn't have believed me.", hint: "Đảo ngữ câu điều kiện loại 3" },
        { sentence: "The team worked on the manuscript for five hours, and then the director walked in. (been)", answer: "When the director walked in, the team had been working on the manuscript for five hours.", hint: "Dùng When the director walked in, the team had been working..." },
        { sentence: "Without her mentor's foresight, she would have signed an unfair contract. (But for)", answer: "But for her mentor's foresight, she would have signed an unfair contract.", hint: "Thay Without bằng But for" }
      ],
      review: [
        { sentence: "I am looking forward to ___ (read) the laureate's new autobiography.", answer: "reading", hint: "Ôn tập look forward to + V-ing" },
        { sentence: "We had our office security system ___ (upgrade) after the incident.", answer: "upgraded", hint: "Ôn tập have + sth + V3/ed" },
        { sentence: "Unless you ___ (review) your notes regularly, you will forget complex structures.", answer: "review", hint: "Ôn tập Câu điều kiện loại 1 với Unless" },
        { sentence: "She asked me where I ___ (buy) that historical atlas the week before.", answer: "had bought", hint: "Ôn tập Câu tường thuật lùi thì" },
        { sentence: "There is very ___ (little / few) time left before the exam concludes.", answer: "little", hint: "Ôn tập Lượng từ với danh từ không đếm được time" }
      ]
    }
  },

  // ==================== DAY 36 ====================
  {
    day: 36,
    id: "day-36",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Câu điều kiện Hỗn hợp (Mixed Conditionals) — Kinh tế & Tài chính cá nhân",
    titleEn: "Mixed Conditionals — Economics & Personal Finance",
    dailyGoal: "Làm chủ 2 dạng Câu điều kiện Hỗn hợp (Quá khứ ➔ Hiện tại và Hiện tại ➔ Quá khứ) để phân tích nguyên nhân - hệ quả xuyên thời gian trong tài chính và cuộc sống.",
    vocab: [
      { en: "inflation", pos: "n", ipa: "/ɪnˈfleɪʃn/", vi: "lạm phát", example: "High inflation erodes the purchasing power of household savings." },
      { en: "recession", pos: "n", ipa: "/rɪˈseʃn/", vi: "suy thoái kinh tế", example: "If the central bank had acted earlier, we might not be in a recession now." },
      { en: "portfolio", pos: "n", ipa: "/pɔːrtˈfoʊlioʊ/", vi: "danh mục đầu tư", example: "Diversifying your investment portfolio reduces long-term financial risk." },
      { en: "dividend", pos: "n", ipa: "/ˈdɪvɪdend/", vi: "cổ tức", example: "If she had bought those shares in 2018, she would earn steady dividends today." },
      { en: "mortgage", pos: "n", ipa: "/ˈmɔːrɡɪdʒ/", vi: "khoản vay thế chấp mua nhà", example: "They paid off their twenty-year mortgage five years ahead of schedule." },
      { en: "bankruptcy", pos: "n", ipa: "/ˈbæŋkrʌptsi/", vi: "sự phá sản", example: "Prudent cash management saved the retail chain from bankruptcy." },
      { en: "lucrative", pos: "adj", ipa: "/ˈluːkrətɪv/", vi: "sinh lời cao, béo bở", example: "He turned down a lucrative job offer to launch his own social enterprise." },
      { en: "expenditure", pos: "n", ipa: "/ɪkˈspendɪtʃər/", vi: "khoản chi tiêu, kinh phí", example: "Households must track monthly expenditure to build an emergency fund." },
      { en: "asset", pos: "n", ipa: "/ˈæset/", vi: "tài sản có giá trị", example: "Real estate and intellectual property are the company's most valuable assets." },
      { en: "liability", pos: "n", ipa: "/ˌlaɪəˈbɪləti/", vi: "khoản nợ, nghĩa vụ tài chính", example: "High-interest credit card debt is a dangerous financial liability." },
      { en: "frugal", pos: "adj", ipa: "/ˈfruːɡl/", vi: "tiết kiệm, chi tiêu chừng mực", example: "If he were more frugal, he wouldn't have run out of money last month." },
      { en: "compound interest", pos: "n", ipa: "/ˈkɑːmpaʊnd ˈɪntrəst/", vi: "lãi suất kép", example: "Starting early allows young investors to benefit from compound interest." }
    ],
    grammar: {
      point: "CÂU ĐIỀU KIỆN HỖN HỢP (MIXED CONDITIONALS: TYPE 3 ➔ 2 & TYPE 2 ➔ 3)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Dạng 1 (Phổ biến nhất): Điều kiện trái với QUÁ KHỨ (Loại 3) ➔ Kết quả trái với HIỆN TẠI (Loại 2)</strong>
          <ul>
            <li><b>Công thức:</b> <code>If + S + had (not) + V3/ed, S + would / could / might (not) + V(nguyên thể) + [now / today / right now]</code></li>
            <li><b>Ý nghĩa:</b> Giá như trong quá khứ đã làm/không làm điều gì, thì <b>HIỆN TẠI (now/today)</b> kết quả đã khác.</li>
            <li><i>Ví dụ:</i> If I <b>had invested</b> in that fund ten years ago, I <b>would be</b> financially independent <b>now</b>.</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Dạng 2: Điều kiện trái với HIỆN TẠI/BẢN CHẤT (Loại 2) ➔ Kết quả trái với QUÁ KHỨ (Loại 3)</strong>
          <ul>
            <li><b>Công thức:</b> <code>If + S + V2/ed (were), S + would / could / might (not) + have + V3/ed</code></li>
            <li><b>Ý nghĩa:</b> Nếu bản chất/tính cách/tình trạng chung ở hiện tại khác đi, thì trong quá khứ đã không hành động như vậy.</li>
            <li><i>Ví dụ:</i> If he <b>were</b> more frugal (bản chất hiện tại), he <b>wouldn't have spent</b> his entire bonus last weekend (hành động quá khứ).</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "If we <b>had locked in</b> a fixed mortgage rate in 2021, our monthly payments <b>would be</b> much lower <b>today</b>.", vi: "Nếu chúng ta chốt mức lãi suất thế chấp cố định vào năm 2021, thì khoản thanh toán hàng tháng hiện nay đã thấp hơn nhiều." },
        { en: "She <b>would not be</b> struggling with debt <b>now</b> if she <b>had controlled</b> her expenditure earlier.", vi: "Hiện giờ cô ấy sẽ không phải vật lộn với nợ nần nếu trước đây cô ấy kiểm soát chi tiêu của mình." },
        { en: "If I <b>weren't</b> afraid of market volatility, I <b>would have bought</b> tech stocks last year.", vi: "Nếu tôi không phải là người sợ biến động thị trường (bản tính), thì năm ngoái tôi đã mua cổ phiếu công nghệ rồi." },
        { en: "<b>Had</b> the firm <b>diversified</b> its portfolio, it <b>would not face</b> bankruptcy right now.", vi: "Giá như công ty đã đa dạng hóa danh mục đầu tư, thì ngay lúc này họ đã không phải đối mặt với nguy cơ phá sản." }
      ],
      commonMistake: {
        wrong: "If he had saved money in his twenties, he would have been rich now.",
        right: "If he had saved money in his twenties, he **would be** rich **now**.",
        note: "Hãy nhìn từ khóa thời gian ở mệnh đề chính! Khi có 'now / today / right now / at present', mệnh đề chính phản ánh HIỆN TẠI nên phải dùng Loại 2 (would + V nguyên thể), không dùng would have + V3!"
      },
      memoryTip: "Bí quyết giải nhanh Mixed Conditionals: Nhìn trạng từ thời gian của TỪNG VẾ! Vế nào có mốc Quá khứ (last year, in 2020) ➔ chia Loại 3 (had V3 / would have V3); vế nào có mốc Hiện tại (now, today) hoặc bản chất ➔ chia Loại 2 (V2-were / would V)!"
    },
    dialogue: {
      titleVi: "Tình huống: Buổi tư vấn quản lý tài chính cá nhân giữa chuyên gia và khách hàng trẻ",
      lines: [
        { speaker: "Advisor", en: "Let's review your balance sheet, Hoang. Your income is quite lucrative, yet your savings rate is low.", vi: "Hãy cùng xem lại bảng cân đối tài chính của bạn nhé Hoàng. Thu nhập của bạn khá cao, nhưng tỷ lệ tiết kiệm lại thấp." },
        { speaker: "Hoang", en: "I know. If I had learned about compound interest in college, I would have a solid investment portfolio today.", vi: "Tôi biết. Giá như hồi đại học tôi tìm hiểu về lãi suất kép, thì hôm nay tôi đã có một danh mục đầu tư vững chắc rồi." },
        { speaker: "Advisor", en: "Don't be too hard on yourself. Many young professionals overlook long-term assets in their early twenties.", vi: "Đừng quá khắt khe với bản thân. Nhiều người trẻ đi làm cũng hay bỏ qua các tài sản dài hạn ở đầu độ tuổi đôi mươi." },
        { speaker: "Hoang", en: "Also, if I were more frugal with my daily expenditure, I wouldn't have accumulated so much credit card liability last year.", vi: "Hơn nữa, nếu tôi là người tiết kiệm hơn trong chi tiêu hàng ngày, thì năm ngoái tôi đã không tích tụ nhiều nợ thẻ tín dụng đến vậy." },
        { speaker: "Advisor", en: "The good news is we can rectify that now. First, pay off high-interest debt to protect yourself against inflation.", vi: "Tin tốt là chúng ta có thể khắc phục điều đó ngay bây giờ. Trước hết, hãy trả hết nợ lãi suất cao để tự bảo vệ mình trước lạm phát." },
        { speaker: "Hoang", en: "That makes sense. Had I consulted you two years ago, I would feel much more secure right now!", vi: "Hợp lý quá. Giá như tôi tham vấn anh từ hai năm trước, thì ngay lúc này tôi đã cảm thấy an tâm hơn nhiều rồi!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "If she had paid off her mortgage before the interest hike, she ___ so stressed about money now.", options: ["wouldn't be", "wouldn't have been", "isn't"], answer: "wouldn't be", explanation: "Mệnh đề If ở quá khứ (had paid off), mệnh đề chính có 'now' (hiện tại) ➔ Mixed Conditional (wouldn't be)." },
        { q: "If I ___ more knowledgeable about macroeconomics, I would have predicted last year's recession.", options: ["had been", "were", "am"], answer: "were", explanation: "Bản chất/kiến thức chung ở hiện tại (If I were...) dẫn đến kết quả trong quá khứ (would have predicted last year's recession)." },
        { q: "Our startup ___ profitable today if we hadn't overspent on office furniture in our first year.", options: ["would be", "would have been", "will be"], answer: "would be", explanation: "Dấu hiệu 'today' ở mệnh đề chính cho biết kết quả ở hiện tại: would + V nguyên thể." },
        { q: "If they ___ their assets across different sectors in 2020, they wouldn't face bankruptcy right now.", options: ["diversified", "had diversified", "have diversified"], answer: "had diversified", explanation: "Mốc 'in 2020' ở mệnh đề If đòi hỏi Quá khứ hoàn thành (had diversified)." },
        { q: "He would have accepted that lucrative overseas contract if he ___ so attached to his hometown.", options: ["weren't", "hadn't been", "isn't"], answer: "weren't", explanation: "Tình trạng/tính cách gắn bó với quê hương ở cả hiện tại ➔ If he weren't..." },
        { q: "Had you started investing in dividend stocks ten years ago, you ___ a passive income stream today.", options: ["would enjoy", "would have enjoyed", "enjoyed"], answer: "would enjoy", explanation: "Đảo ngữ Mixed Conditional: 'Had + S + V3/ed (10 years ago), S + would + V (today)'." },
        { q: "If inflation weren't so high this year, the central bank ___ interest rates last month.", options: ["wouldn't raise", "wouldn't have raised", "hadn't raised"], answer: "wouldn't have raised", explanation: "Điều kiện hiện tại (this year ➔ weren't) + Kết quả quá khứ (last month ➔ wouldn't have raised)." },
        { q: "We wouldn't need an emergency loan now if our chief accountant ___ that tax liability earlier.", options: ["didn't overlook", "hadn't overlooked", "wouldn't overlook"], answer: "hadn't overlooked", explanation: "Nguyên nhân xảy ra trong quá khứ (earlier) dẫn đến kết quả hiện tại (now)." },
        { q: "If she ___ fluent in Japanese, the Tokyo branch would have promoted her at the last annual review.", options: ["were", "had been", "is"], answer: "were", explanation: "Năng lực ngôn ngữ nói chung ở hiện tại (If she were fluent) ảnh hưởng tới quyết định quá khứ (at the last annual review)." },
        { q: "If they had tracked their household expenditure carefully, they ___ enough for a down payment by now.", options: ["would have", "will have", "had"], answer: "would have", explanation: "Ở đây 'have' là động từ chính (sở hữu đủ tiền đặt cọc ở hiện tại 'by now'): would + have (nguyên thể)." }
      ],
      fillBlank: [
        { sentence: "If I ___ (buy) gold five years ago, my portfolio would be worth double today.", answer: "had bought", hint: "Điều kiện quá khứ (5 years ago) ➔ had + V3" },
        { sentence: "She ___ (be) the finance director now if she hadn't turned down the promotion last year.", answer: "would be", hint: "Kết quả ở hiện tại (now) ➔ would + V nguyên thể" },
        { sentence: "If he ___ (be) more frugal by nature, he wouldn't have wasted his bonus last month.", answer: "were", hint: "Tính cách/bản chất ở hiện tại trong mệnh đề If loại 2" },
        { sentence: "Had the company reduced its liabilities earlier, it ___ (not / face) bankruptcy right now.", answer: "would not face", hint: "Kết quả ngay lúc này (right now) ➔ would not + V" },
        { sentence: "If I didn't have a heavy mortgage to pay, I ___ (take) a sabbatical year in 2023.", answer: "would have taken", hint: "Kết quả trong quá khứ (in 2023) ➔ would have + V3" },
        { sentence: "You would understand compound interest now if you ___ (pay) attention during yesterday's seminar.", answer: "had paid", hint: "Điều kiện hôm qua (yesterday's seminar) ➔ had + V3" },
        { sentence: "If our currency ___ (be) stronger now, importing raw materials last quarter wouldn't have cost so much.", answer: "were", hint: "Điều kiện hiện tại (now) với động từ to be" },
        { sentence: "They ___ (own) their apartment today if they had saved 20% of their income every month.", answer: "would own", hint: "Kết quả ở hiện tại (today) ➔ would + V nguyên thể" }
      ],
      sentenceBuild: [
        { words: ["If", "I", "had", "saved", "money,", "I", "would", "be", "debt-free", "today", "."], answer: "If I had saved money, I would be debt-free today .", vi: "Nếu trước đây tôi tiết kiệm tiền, thì hôm nay tôi đã sạch nợ rồi." },
        { words: ["She", "would", "have", "applied", "yesterday", "if", "she", "were", "more", "confident", "."], answer: "She would have applied yesterday if she were more confident .", vi: "Hôm qua cô ấy đã nộp đơn rồi nếu cô ấy là người tự tin hơn." },
        { words: ["Had", "we", "diversified", "our", "portfolio,", "we", "would", "feel", "secure", "now", "."], answer: "Had we diversified our portfolio, we would feel secure now .", vi: "Giá như chúng ta đa dạng hóa danh mục đầu tư, thì giờ chúng ta đã thấy an tâm." },
        { words: ["If", "he", "were", "frugal,", "he", "would", "not", "have", "gone", "bankrupt", "."], answer: "If he were frugal, he would not have gone bankrupt .", vi: "Nếu anh ấy là người tiết kiệm, anh ấy đã không bị phá sản." },
        { words: ["They", "would", "own", "this", "asset", "now", "if", "they", "had", "acted", "decisively", "."], answer: "They would own this asset now if they had acted decisively .", vi: "Hiện giờ họ đã sở hữu tài sản này nếu trước đó họ hành động quyết đoán." },
        { words: ["If", "inflation", "had", "slowed", "down,", "prices", "would", "be", "stable", "today", "."], answer: "If inflation had slowed down, prices would be stable today .", vi: "Nếu lạm phát đã chững lại trước đó, thì giá cả hôm nay đã ổn định." }
      ],
      transformation: [
        { sentence: "I didn't study personal finance at university, so I don't know how to manage my portfolio now. (If)", answer: "If I had studied personal finance at university, I would know how to manage my portfolio now.", hint: "Dùng Mixed Conditional: If + had V3, S + would V + now" },
        { sentence: "He is not a cautious investor, so he lost his capital in last year's recession. (were)", answer: "If he were a cautious investor, he would not have lost his capital in last year's recession.", hint: "Dùng Mixed Conditional: If he were..., he would not have lost..." },
        { sentence: "We took out a huge mortgage in 2022, so our monthly expenditure is very high today. (Had)", answer: "Had we not taken out a huge mortgage in 2022, our monthly expenditure would not be so high today.", hint: "Đảo ngữ Mixed Conditional: Had we not taken out..., ... would not be..." },
        { sentence: "She doesn't trust online brokers, which is why she didn't buy those dividend shares yesterday. (trusted)", answer: "If she trusted online brokers, she would have bought those dividend shares yesterday.", hint: "Dùng If she trusted..., she would have bought..." },
        { sentence: "They ignored their growing liabilities, so the firm is in bankruptcy court right now. (ignored)", answer: "If they had not ignored their growing liabilities, the firm would not be in bankruptcy court right now.", hint: "Dùng If they had not ignored..., the firm would not be..." }
      ],
      review: [
        { sentence: "If you had reminded me yesterday, I ___ (bring) the financial report then.", answer: "would have brought", hint: "Ôn tập Day 34: Câu điều kiện thuần Loại 3 (cả 2 vế ở quá khứ)" },
        { sentence: "The economists ___ (debate) the inflation policy for three hours before reaching a consensus.", answer: "had been debating", hint: "Ôn tập Day 33: Quá khứ hoàn thành tiếp diễn" },
        { sentence: "By 2020, cashless payment apps ___ (become) popular across Vietnam.", answer: "had become", hint: "Ôn tập Day 31: Quá khứ hoàn thành với By + mốc quá khứ" },
        { sentence: "Many young families cannot afford ___ (buy) a house in the city center.", answer: "to buy", hint: "Ôn tập afford + to V" },
        { sentence: "Neither the assets nor the liability ___ (be) listed accurately on that old form.", answer: "was", hint: "Ôn tập sự hòa hợp chủ ngữ - động từ với Neither... nor..." }
      ]
    }
  },

  // ==================== DAY 37 ====================
  {
    day: 37,
    id: "day-37",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Cấu trúc Wish & If Only (Ước ở Hiện tại, Quá khứ & Tương lai) — Đô thị & Nhà ở",
    titleEn: "Wish & If Only (Present, Past & Future) — Urban Living & Housing",
    dailyGoal: "Phân biệt và sử dụng chính xác 3 cấp độ của Wish / If only (lùi thì cho Hiện tại, Quá khứ và dùng would cho sự phàn nàn/Tương lai) trong chủ đề đời sống đô thị.",
    vocab: [
      { en: "congestion", pos: "n", ipa: "/kənˈdʒestʃən/", vi: "sự ùn tắc (giao thông), tắc nghẽn", example: "I wish the municipal government would solve the severe traffic congestion." },
      { en: "tenant", pos: "n", ipa: "/ˈtenənt/", vi: "người thuê nhà", example: "The tenant wished he had read the lease agreement more carefully." },
      { en: "landlord", pos: "n", ipa: "/ˈlændlɔːrd/", vi: "chủ nhà cho thuê", example: "If only our landlord would repair the leaking roof before the rainy season!" },
      { en: "lease", pos: "n", ipa: "/liːs/", vi: "hợp đồng thuê bất động sản", example: "We signed a two-year lease for a bright studio near the metro line." },
      { en: "amenity", pos: "n", ipa: "/əˈmenəti/", vi: "tiện ích (công viên, bể bơi, siêu thị...)", example: "This residential complex offers modern amenities such as a gym and library." },
      { en: "urbanization", pos: "n", ipa: "/ˌɜːrbənəˈzeɪʃn/", vi: "quá trình đô thị hóa", example: "Rapid urbanization has put immense pressure on public infrastructure." },
      { en: "high-rise", pos: "n", ipa: "/ˈhaɪ raɪz/", vi: "tòa nhà cao tầng", example: "She lives on the twentieth floor of a newly built high-rise." },
      { en: "ventilate", pos: "v", ipa: "/ˈventɪleɪt/", vi: "thông gió, làm thoáng khí", example: "I wish my apartment were better ventilated during the humid summer months." },
      { en: "soundproof", pos: "adj", ipa: "/ˈsaʊndpruːf/", vi: "cách âm", example: "If only the bedroom walls were soundproof so we couldn't hear the highway!" },
      { en: "skyrocket", pos: "v", ipa: "/ˈskaɪrɑːkɪt/", vi: "tăng vọt (giá nhà, chi phí)", example: "Housing prices have skyrocketed, making homeownership difficult for youth." },
      { en: "outskirts", pos: "n", ipa: "/ˈaʊtskɜːrts/", vi: "vùng ven đô, ngoại ô", example: "They moved to the outskirts of the city to enjoy cleaner air and lower rent." },
      { en: "pedestrian", pos: "n", ipa: "/pəˈdestriən/", vi: "người đi bộ", example: "City planners created a pedestrian zone around the historic lake." }
    ],
    grammar: {
      point: "CẤU TRÚC WISH & IF ONLY (ƯỚC MUỐN Ở HIỆN TẠI, QUÁ KHỨ & TƯƠNG LAI/PHÀN NÀN)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Ba cấp độ Lùi thì của WISH / IF ONLY (= Giá như)</strong>
          <ul>
            <li><b>Ước trái với HIỆN TẠI:</b> <code>S + wish(es) / If only + S + V2/ed (were cho mọi ngôi) / could + V</code><br/>
            <i>Ví dụ:</i> I wish my apartment <b>were</b> closer to the metro station now.</li>
            <li><b>Ước trái với QUÁ KHỨ (Tiếc nuối):</b> <code>S + wish(es) / If only + S + had (not) + V3/ed</code><br/>
            <i>Ví dụ:</i> The tenant wishes he <b>had not signed</b> that expensive lease last year.</li>
            <li><b>Ước cho TƯƠNG LAI hoặc PHÀN NÀN muốn ai đó thay đổi thói quen gây khó chịu:</b> <code>S + wish(es) / If only + S + would (not) + V(nguyên thể)</code><br/>
            <i>Ví dụ:</i> I wish my neighbors <b>would stop</b> playing loud music after midnight!</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Lưu ý Sống còn khi thi B1+/B2</strong>
          <ul>
            <li><b>KHÔNG dùng <code>would</code> khi chủ ngữ vế ước trùng với chủ ngữ chính (<code>I, we</code>):</b> Không nói <i>I wish I would...</i> ➔ Phải dùng <code>I wish I could + V</code>!</li>
            <li><b>Cấu trúc tương đương:</b> <code>It's (high / about) time + S + V2/ed</code> (Đã đến lúc ai đó phải làm gì ở hiện tại — luôn lùi về V2/ed!).</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "I <b>wish</b> the windows in our studio <b>were</b> soundproof so I could work in peace.", vi: "Tôi ước gì cửa sổ căn hộ studio của chúng tôi cách âm để tôi có thể làm việc yên tĩnh (ước ở hiện tại)." },
        { en: "<b>If only</b> we <b>had bought</b> that townhouse on the outskirts before prices skyrocketed!", vi: "Giá như chúng ta đã mua căn nhà phố ở vùng ven đô đó trước khi giá tăng vọt (tiếc nuối quá khứ)!" },
        { en: "The residents <b>wish</b> the landlord <b>would upgrade</b> the building's ventilation system soon.", vi: "Cư dân mong sao chủ tòa nhà sẽ sớm nâng cấp hệ thống thông gió (mong muốn/phàn nàn hướng tới thay đổi)." },
        { en: "<b>It's high time</b> the municipality <b>expanded</b> the pedestrian walkways.", vi: "Đã đến lúc chính quyền thành phố phải mở rộng các lối đi dành cho người đi bộ." }
      ],
      commonMistake: {
        wrong: "I wish I would have enough money to rent an apartment with better amenities.",
        right: "I wish I **had** (OR: **could have**) enough money to rent an apartment with better amenities.",
        note: "Không bao giờ dùng 'would' cho bản thân mình (I wish I would...) và không dùng 'would' cho trạng thái tĩnh ở hiện tại. Hãy lùi về Quá khứ đơn (had) hoặc could!"
      },
      memoryTip: "Quy tắc LÙI 1 BẬC THÌ cho WISH / IF ONLY: Hiện tại ➔ lùi về V2/ed (were); Quá khứ ➔ lùi về HAD + V3/ed; Phàn nàn người khác / Thời tiết ➔ dùng WOULD + V!"
    },
    dialogue: {
      titleVi: "Tình huống: Hai người bạn trò chuyện khi đi xem căn hộ thuê mới ở khu đô thị",
      lines: [
        { speaker: "Phuong", en: "What do you think of this high-rise apartment, Duc? The public amenities downstairs look fantastic!", vi: "Cậu thấy căn hộ cao tầng này thế nào hả Đức? Các tiện ích công cộng ở tầng dưới trông tuyệt đấy chứ!" },
        { speaker: "Duc", en: "The gym and pedestrian park are great, but I wish the balcony didn't face the main highway.", vi: "Phòng tập và công viên đi bộ thì tuyệt, nhưng mình ước gì ban công không quay thẳng ra đường cao tốc chính." },
        { speaker: "Phuong", en: "True, the traffic congestion out there is noisy. If only the landlord had installed soundproof glass!", vi: "Đúng vậy, cảnh ùn tắc giao thông ngoài kia ồn thật. Giá như chủ nhà đã lắp kính cách âm thì tốt biết mấy!" },
        { speaker: "Duc", en: "And look at the kitchen—there's no window. I wish it were better ventilated.", vi: "Và nhìn phòng bếp xem—không có cửa sổ nào cả. Mình ước nó được thông gió tốt hơn." },
        { speaker: "Phuong", en: "Still, rents in the city center have skyrocketed this year. I wish we had renewed our old lease on the outskirts!", vi: "Dù sao thì giá thuê nhà ở trung tâm thành phố năm nay đã tăng vọt rồi. Mình ước gì tụi mình đã gia hạn hợp đồng thuê cũ ở vùng ven đô!" },
        { speaker: "Duc", en: "Let's ask the agent if the landlord would agree to lower the deposit. It's high time we made a final decision.", vi: "Hãy hỏi nhân viên môi giới xem chủ nhà có đồng ý giảm tiền cọc không. Đã đến lúc tụi mình phải đưa ra quyết định cuối cùng rồi." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "I wish my current apartment ___ closer to my office so I wouldn't spend two hours commuting.", options: ["is", "were", "had been"], answer: "were", explanation: "Câu ước trái với thực tế ở HIỆN TẠI (my current apartment) lùi về Quá khứ giả định (were)." },
        { q: "If only we ___ the lease carefully before paying the non-refundable deposit last week!", options: ["read", "had read", "would read"], answer: "had read", explanation: "Câu ước trái với QUÁ KHỨ (before paying... last week) dùng had + V3/ed (had read)." },
        { q: "The tenants wish the upstairs neighbor ___ dragging heavy furniture across the floor every night.", options: ["stopped", "would stop", "had stopped"], answer: "would stop", explanation: "Phàn nàn về thói quen gây khó chịu của người khác và mong họ thay đổi ➔ dùng wish + S + would + V." },
        { q: "It's high time the city council ___ stricter measures to reduce rush-hour congestion.", options: ["introduces", "introduced", "has introduced"], answer: "introduced", explanation: "Sau cấu trúc 'It's (high/about) time + S + V', động từ luôn chia ở thì Quá khứ đơn (V2/ed)." },
        { q: "She wishes she ___ afford a two-bedroom flat in this eco-friendly residential complex.", options: ["can", "could", "would"], answer: "could", explanation: "Chủ ngữ 'she' trùng với chủ ngữ chính và nói về khả năng ở hiện tại ➔ dùng could (không dùng would)." },
        { q: "If only housing prices ___ so rapidly over the past five years!", options: ["didn't skyrocket", "hadn't skyrocketed", "wouldn't skyrocket"], answer: "hadn't skyrocketed", explanation: "Ước trái với một việc đã diễn ra từ quá khứ kéo dài tới nay (over the past five years) ➔ dùng Quá khứ hoàn thành." },
        { q: "I love living on the outskirts, though I sometimes wish there ___ more cultural amenities nearby.", options: ["are", "were", "would be"], answer: "were", explanation: "Ước về một trạng thái ở hiện tại (there are ➔ lùi về there were)." },
        { q: "If only it ___ raining soon so the pedestrians could cross the square comfortably!", options: ["stops", "would stop", "had stopped"], answer: "would stop", explanation: "Mong ước thời tiết thay đổi trong tương lai gần (soon) ➔ dùng would + V." },
        { q: "He regrets moving to a noisy street; he wishes he ___ a quiet studio instead.", options: ["chose", "had chosen", "would choose"], answer: "had chosen", explanation: "Hối tiếc về một quyết định đã qua trong quá khứ ➔ had chosen." },
        { q: "It's about time our landlord ___ the broken elevator in this high-rise.", options: ["repairs", "repaired", "will repair"], answer: "repaired", explanation: "'It's about time + S + V2/ed' diễn tả việc đáng lẽ phải làm ngay lúc này." }
      ],
      fillBlank: [
        { sentence: "I wish my bedroom windows ___ (be) soundproof because the street is too noisy.", answer: "were", hint: "Ước trái với hiện tại (to be ➔ were)" },
        { sentence: "If only we ___ (not / move) into this unventilated basement flat last summer!", answer: "had not moved", hint: "Ước trái với quá khứ (last summer)" },
        { sentence: "The pedestrians wish motorists ___ (stop) parking on the sidewalk.", answer: "would stop", hint: "Phàn nàn muốn người khác chấm dứt hành vi gây phiền" },
        { sentence: "It's high time the authorities ___ (upgrade) the drainage system to prevent urban flooding.", answer: "upgraded", hint: "It's high time + S + V2/ed" },
        { sentence: "She wishes she ___ (can) work from home three days a week to avoid traffic congestion.", answer: "could", hint: "Ước về khả năng ở hiện tại (can ➔ could)" },
        { sentence: "If only the real estate agent ___ (inform) us about the construction site next door before we signed the lease!", answer: "had informed", hint: "Tiếc nuối việc đã xảy ra trước khi ký hợp đồng" },
        { sentence: "I wish I ___ (know) how to negotiate rent with a strict landlord.", answer: "knew", hint: "Ước trái với hiện tại (V2 của know)" },
        { sentence: "Rent has skyrocketed; it's about time we ___ (look) for an apartment on the outskirts.", answer: "looked", hint: "It's about time + S + V2/ed" }
      ],
      sentenceBuild: [
        { words: ["I", "wish", "our", "apartment", "were", "better", "ventilated", "."], answer: "I wish our apartment were better ventilated .", vi: "Tôi ước căn hộ của chúng ta được thông gió tốt hơn." },
        { words: ["If", "only", "we", "had", "signed", "that", "lease", "last", "month", "!"], answer: "If only we had signed that lease last month !", vi: "Giá như chúng ta đã ký hợp đồng thuê đó vào tháng trước!" },
        { words: ["The", "tenants", "wish", "the", "landlord", "would", "reduce", "the", "rent", "."], answer: "The tenants wish the landlord would reduce the rent .", vi: "Những người thuê nhà mong sao chủ nhà sẽ giảm tiền thuê." },
        { words: ["It", "is", "high", "time", "the", "city", "solved", "traffic", "congestion", "."], answer: "It is high time the city solved traffic congestion .", vi: "Đã đến lúc thành phố phải giải quyết nạn ùn tắc giao thông." },
        { words: ["She", "wishes", "she", "could", "afford", "a", "flat", "with", "modern", "amenities", "."], answer: "She wishes she could afford a flat with modern amenities .", vi: "Cô ấy ước mình có đủ khả năng mua một căn hộ có tiện ích hiện đại." },
        { words: ["If", "only", "housing", "prices", "had", "not", "skyrocketed", "so", "quickly", "!"], answer: "If only housing prices had not skyrocketed so quickly !", vi: "Giá như giá nhà đã không tăng vọt nhanh đến thế!" }
      ],
      transformation: [
        { sentence: "It is a pity that our high-rise doesn't have a rooftop garden. (wish)", answer: "I wish our high-rise had a rooftop garden.", hint: "Chuyển sang câu ước trái với hiện tại: I wish + S + V2/ed" },
        { sentence: "The tenant regrets not inspecting the plumbing before signing the lease. (wishes)", answer: "The tenant wishes he had inspected the plumbing before signing the lease.", hint: "Chuyển sang câu ước trái với quá khứ: wishes + S + had + V3/ed" },
        { sentence: "My neighbor plays the drums late at night, and it really annoys me. (would)", answer: "I wish my neighbor would not play the drums late at night.", hint: "Dùng I wish my neighbor would not play..." },
        { sentence: "Urban planners should create more pedestrian zones now. (high time)", answer: "It is high time urban planners created more pedestrian zones.", hint: "Dùng It is high time + S + V2/ed" },
        { sentence: "I didn't buy that house on the outskirts, so I am still paying high rent today. (If)", answer: "If I had bought that house on the outskirts, I would not be paying high rent today.", hint: "Ôn tập Mixed Conditional: If + had V3, S + would not be + V-ing + today" }
      ],
      review: [
        { sentence: "If she ___ (invest) in that fund five years ago, she would be wealthy now.", answer: "had invested", hint: "Ôn tập Day 36: Câu điều kiện hỗn hợp (Quá khứ ➔ Hiện tại)" },
        { sentence: "Had we ___ (know) about the congestion, we would have taken the metro.", answer: "known", hint: "Ôn tập Day 34: Đảo ngữ câu điều kiện loại 3" },
        { sentence: "The architect ___ (design) eco-friendly high-rises for ten years before winning the award.", answer: "had been designing", hint: "Ôn tập Day 33: Quá khứ hoàn thành tiếp diễn" },
        { sentence: "The landlord agreed ___ (repaint) the living room before we moved in.", answer: "to repaint", hint: "Ôn tập agree + to V" },
        { sentence: "This residential area is much ___ (quiet) than the downtown district.", answer: "quieter", hint: "Ôn tập So sánh hơn" }
      ]
    }
  },

  // ==================== DAY 38 ====================
  {
    day: 38,
    id: "day-38",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Động từ khuyết thiếu Suy luận Quá khứ (Past Modals of Deduction) — Khảo cổ học",
    titleEn: "Modals of Deduction in the Past — Archaeology & Ancient Civilizations",
    dailyGoal: "Sử dụng chính xác must have, can't/couldn't have và might/may/could have + V3/ed để suy luận logic về các sự kiện và bí ẩn trong quá khứ.",
    vocab: [
      { en: "artifact", pos: "n", ipa: "/ˈɑːrtɪfækt/", vi: "hiện vật cổ (do con người chế tác)", example: "These jade artifacts must have belonged to a member of the royal family." },
      { en: "inscription", pos: "n", ipa: "/ɪnˈskrɪpʃn/", vi: "dòng chữ khắc trên đá/đồng", example: "The stone inscription might have recorded an ancient military victory." },
      { en: "tomb", pos: "n", ipa: "/tuːm/", vi: "lăng mộ cổ", example: "Thieves can't have entered the inner tomb because the seal was unbroken." },
      { en: "pottery", pos: "n", ipa: "/ˈpɑːtəri/", vi: "đồ gốm cổ", example: "Shards of painted pottery revealed trade links with distant islands." },
      { en: "hieroglyph", pos: "n", ipa: "/ˈhaɪərəɡlɪf/", vi: "chữ tượng hình", example: "Scholars spent decades trying to decipher the temple hieroglyphs." },
      { en: "unearth", pos: "v", ipa: "/ʌnˈɜːrθ/", vi: "đào lên, khai quật phát lộ", example: "Workers unearthed a Roman mosaic while building a new subway line." },
      { en: "relic", pos: "n", ipa: "/ˈrelɪk/", vi: "di vật lịch sử", example: "Each relic was carefully brushed and photographed at the dig site." },
      { en: "prehistoric", pos: "adj", ipa: "/ˌpriːhɪˈstɔːrɪk/", vi: "thuộc thời tiền sử", example: "Prehistoric cave paintings show how early humans hunted mammoths." },
      { en: "radiocarbon dating", pos: "n", ipa: "/ˌreɪdioʊˈkɑːrbən ˈdeɪtɪŋ/", vi: "phương pháp định tuổi bằng đồng vị cacbon", example: "Radiocarbon dating proved the wooden boat was three thousand years old." },
      { en: "metallurgy", pos: "n", ipa: "/ˈmetlɜːrdʒi/", vi: "kỹ thuật luyện kim", example: "The Dong Son culture possessed advanced bronze metallurgy." },
      { en: "submerge", pos: "v", ipa: "/səbˈmɜːrdʒ/", vi: "nhấn chìm dưới nước", example: "A rising sea level must have submerged the ancient port city." },
      { en: "ritualistic", pos: "adj", ipa: "/ˌrɪtʃuəˈlɪstɪk/", vi: "mang tính nghi lễ", example: "The bronze vessels were used for ritualistic ceremonies rather than cooking." }
    ],
    grammar: {
      point: "SUY LUẬN LOGIC TRONG QUÁ KHỨ (MUST / CAN'T / MIGHT HAVE + V3/ED)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Thang đo Mức độ Chắc chắn khi Suy luận Quá khứ (Past Deduction)</strong>
          <ul>
            <li><b>Chắc chắn ĐÃ XẢY RA (95% – Khẳng định có căn cứ):</b><br/>
            <code>S + must have + V3/ed</code> (<i>Chắc hẳn đã... / Ắt hẳn đã...</i>)<br/>
            <i>Ví dụ:</i> The stone blocks weigh 50 tons; the builders <b>must have used</b> wooden rollers.</li>
            <li><b>Chắc chắn KHÔNG THỂ XẢY RA (95% – Phủ định có căn cứ):</b><br/>
            <code>S + can't / couldn't have + V3/ed</code> (<i>Chắc chắn không thể nào đã...</i> — <b>KHÔNG dùng mustn't have!</b>)<br/>
            <i>Ví dụ:</i> Radiocarbon dating shows 500 BC, so medieval monks <b>can't have made</b> this relic.</li>
            <li><b>Có khả năng / Phỏng đoán chưa chắc chắn (30–50%):</b><br/>
            <code>S + might / may / could (not) have + V3/ed</code> (<i>Có lẽ đã... / Biết đâu đã...</i>)</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Dạng Tiếp diễn: Modal + have been + V-ing</strong>
          <p>Nếu muốn suy luận một hành động <b>đang diễn ra tại một thời điểm quá khứ</b> hoặc kéo dài liên tục: <code>must / can't / might + have been + V-ing</code>.</p>
        </div>
      `,
      examples: [
        { en: "These jade artifacts are extraordinarily fine; they <b>must have belonged</b> to an emperor.", vi: "Những hiện vật bằng ngọc bích này tinh xảo lạ thường; chúng ắt hẳn đã thuộc về một vị hoàng đế." },
        { en: "The inner chamber was still sealed, so grave robbers <b>can't have entered</b> the tomb.", vi: "Căn phòng bên trong vẫn còn nguyên niêm phong, nên bọn trộm mộ chắc chắn không thể nào đã đột nhập vào lăng mộ." },
        { en: "Historians believe a volcanic eruption <b>might have submerged</b> the prehistoric settlement.", vi: "Các nhà sử học tin rằng một vụ phun trào núi lửa có lẽ đã nhấn chìm khu định cư thời tiền sử đó." },
        { en: "The inhabitants left hot food on the table; they <b>must have been fleeing</b> in a sudden panic.", vi: "Cư dân đã bỏ lại thức ăn còn nóng trên bàn; lúc đó hẳn họ đang tháo chạy trong cơn hoảng loạn bất ngờ." }
      ],
      commonMistake: {
        wrong: "The ancient builders mustn't have had iron tools because this site dates to the Stone Age.",
        right: "The ancient builders **can't have had** (OR: **couldn't have had**) iron tools because this site dates to the Stone Age.",
        note: "Đối lập với 'must have + V3' (chắc hẳn đã) trong suy luận phủ định là 'CAN'T HAVE + V3' hoặc 'COULDN'T HAVE + V3', tuyệt đối không dùng 'mustn't have'!"
      },
      memoryTip: "Bộ ba Thám tử Khảo cổ: Có bằng chứng khẳng định 100% ➔ MUST HAVE V3 | Bằng chứng bác bỏ 100% ➔ CAN'T HAVE V3 | Mới là giả thuyết 50/50 ➔ MIGHT / MAY / COULD HAVE V3!"
    },
    dialogue: {
      titleVi: "Tình huống: Hai nhà khảo cổ thảo luận tại hiện trường khai quật một di chỉ cổ",
      lines: [
        { speaker: "Dr. An", en: "Come look at what our team just unearthed beneath the temple courtyard, Binh!", vi: "Lại xem thứ mà đội của chúng ta vừa đào lên bên dưới sân đền này Bình ơi!" },
        { speaker: "Binh", en: "Incredible! It's a ceramic jar filled with copper coins and carved jade relics.", vi: "Không thể tin được! Đó là một chiếc bình gốm chứa đầy tiền đồng và các di vật ngọc bích chạm khắc." },
        { speaker: "Dr. An", en: "Look at the foreign inscriptions on these coins. This town must have been a bustling maritime trading port.", vi: "Nhìn những dòng chữ khắc nước ngoài trên các đồng xu này xem. Thị trấn này ắt hẳn từng là một thương cảng hàng hải sầm uất." },
        { speaker: "Binh", en: "Why was the jar buried so shallowly? The owner might have hidden it in a hurry during a coastal raid.", vi: "Sao chiếc bình lại được chôn nông thế nhỉ? Người chủ có lẽ đã giấu nó vội vàng trong một cuộc đột kích ven biển." },
        { speaker: "Dr. An", en: "And they can't have returned to dig it up, because the whole district was submerged by a flood in 1350.", vi: "Và chắc chắn họ đã không thể quay lại đào nó lên, bởi toàn bộ khu vực này đã bị nhấn chìm trong một trận lụt năm 1350." },
        { speaker: "Binh", en: "Let's send the wooden lid for radiocarbon dating to confirm our hypothesis!", vi: "Hãy gửi chiếc nắp gỗ đi định tuổi bằng đồng vị cacbon để xác nhận giả thuyết của chúng ta nào!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "The bronze drum has intricate patterns; the ancient artisans ___ advanced metallurgy skills.", options: ["must have possessed", "can't have possessed", "should have possessed"], answer: "must have possessed", explanation: "Có căn cứ rõ ràng (hoa văn tinh xảo) nên suy luận chắc chắn khẳng định trong quá khứ: must have + V3." },
        { q: "Radiocarbon dating shows this wooden relic is from 1890, so it ___ prehistoric!", options: ["mustn't have been", "can't have been", "might have been"], answer: "can't have been", explanation: "Suy luận phủ định chắc chắn có bằng chứng bác bỏ (năm 1890 thì không thể là thời tiền sử) ➔ can't have been." },
        { q: "Scientists are not completely sure why the city was abandoned; a prolonged drought ___ the population to migrate.", options: ["must have forced", "might have forced", "can't have forced"], answer: "might have forced", explanation: "Khi có dấu hiệu chưa chắc chắn (are not completely sure) ➔ dùng might/may/could have + V3." },
        { q: "The stone blocks came from a quarry 200 kilometers away. The workers ___ them by river barge.", options: ["must have transported", "can't have transported", "needn't have transported"], answer: "must have transported", explanation: "Suy luận hợp lý nhất dựa trên khoảng cách 200 km ➔ must have transported." },
        { q: "Nobody had deciphered these hieroglyphs before 1822, so the 17th-century traveler ___ the inscription.", options: ["must have read", "couldn't have read", "might have read"], answer: "couldn't have read", explanation: "Đến năm 1822 mới giải mã được, nên nhà du hành thế kỷ 17 chắc chắn không thể đọc được (couldn't have read)." },
        { q: "We found charred seeds inside the pottery jars; the villagers ___ grain for the winter.", options: ["must have been storing", "can't have stored", "would have stored"], answer: "must have been storing", explanation: "Tìm thấy hạt ngũ cốc trong bình gốm ➔ suy luận chắc chắn người dân lúc đó đang tích trữ lương thực." },
        { q: "Where is Professor Minh? He ___ to the laboratory to check the radiocarbon results.", options: ["may have gone", "can't go", "must go"], answer: "may have gone", explanation: "Phỏng đoán một hành động vừa xảy ra chưa chắc chắn: may have gone." },
        { q: "The protective seal on the pharaoh's tomb was completely intact, so looters ___ the gold.", options: ["must have stolen", "can't have stolen", "might have stolen"], answer: "can't have stolen", explanation: "Niêm phong còn nguyên vẹn (intact) ➔ kẻ trộm chắc chắn không thể lấy cắp (can't have stolen)." },
        { q: "This ritualistic mask is made of Tasmanian shells, which means prehistoric tribes ___ across the strait.", options: ["must have traded", "can't have traded", "shouldn't have traded"], answer: "must have traded", explanation: "'which means' cho thấy kết luận logic chắc chắn: must have traded." },
        { q: "I can't find my field notebook anywhere; I ___ it at the excavation trench this morning.", options: ["must have left", "can't have left", "would have left"], answer: "must have left", explanation: "Suy luận chắc chắn về việc để quên sổ ở hố khai quật sáng nay." }
      ],
      fillBlank: [
        { sentence: "The temple walls are two meters thick; it ___ (must / take) decades to construct them.", answer: "must have taken", hint: "Suy luận khẳng định chắc chắn trong quá khứ" },
        { sentence: "This pottery shard has a modern factory stamp, so it ___ (can't / belong) to the Ly dynasty.", answer: "can't have belonged", hint: "Suy luận phủ định chắc chắn trong quá khứ" },
        { sentence: "Archaeologists aren't certain, but a tsunami ___ (might / submerge) the coastal settlement.", answer: "might have submerged", hint: "Phỏng đoán có khả năng trong quá khứ" },
        { sentence: "The ancient scribe ___ (must / make) a mistake because two dates on the inscription contradict each other.", answer: "must have made", hint: "Chắc hẳn người chép sử đã mắc lỗi" },
        { sentence: "They ___ (could / not / build) this arch without advanced geometry.", answer: "could not have built", hint: "Chắc chắn không thể xây dựng được nếu thiếu hình học" },
        { sentence: "Perhaps the relic was a gift; foreign envoys ___ (may / bring) it to the royal court.", answer: "may have brought", hint: "Dấu hiệu Perhaps ➔ may have + V3" },
        { sentence: "The campfire was still warm when we arrived, so the explorers ___ (must / camp) there just hours earlier.", answer: "must have camped", hint: "Đống lửa còn ấm ➔ ắt hẳn vừa cắm trại" },
        { sentence: "You ___ (can't / see) Dr. Lan at the museum yesterday because she is in Cairo all week.", answer: "can't have seen", hint: "Bác bỏ điều không thể xảy ra hôm qua" }
      ],
      sentenceBuild: [
        { words: ["These", "jade", "artifacts", "must", "have", "belonged", "to", "a", "king", "."], answer: "These jade artifacts must have belonged to a king .", vi: "Những hiện vật ngọc bích này ắt hẳn đã thuộc về một vị vua." },
        { words: ["Thieves", "can't", "have", "entered", "the", "sealed", "underground", "tomb", "."], answer: "Thieves can't have entered the sealed underground tomb .", vi: "Kẻ trộm chắc chắn không thể đã đột nhập vào lăng mộ ngầm còn niêm phong." },
        { words: ["A", "severe", "drought", "might", "have", "destroyed", "the", "ancient", "civilization", "."], answer: "A severe drought might have destroyed the ancient civilization .", vi: "Một đợt hạn hán khốc liệt có lẽ đã hủy diệt nền văn minh cổ đại đó." },
        { words: ["Rising", "seas", "must", "have", "submerged", "the", "prehistoric", "harbor", "."], answer: "Rising seas must have submerged the prehistoric harbor .", vi: "Mực nước biển dâng cao ắt hẳn đã nhấn chìm bến cảng tiền sử." },
        { words: ["They", "could", "not", "have", "carved", "this", "inscription", "without", "iron", "tools", "."], answer: "They could not have carved this inscription without iron tools .", vi: "Họ không thể nào khắc dòng chữ này nếu không có công cụ bằng sắt." },
        { words: ["Workers", "may", "have", "unearthed", "more", "pottery", "near", "the", "river", "."], answer: "Workers may have unearthed more pottery near the river .", vi: "Các công nhân có lẽ đã đào thấy thêm đồ gốm gần bờ sông." }
      ],
      transformation: [
        { sentence: "I am certain that ancient navigators used the stars to cross the ocean. (must)", answer: "Ancient navigators must have used the stars to cross the ocean.", hint: "Chuyển I am certain + V2/ed sang must have + V3/ed" },
        { sentence: "It was impossible for prehistoric humans to smelt steel at such high temperatures. (can't)", answer: "Prehistoric humans can't have smelted steel at such high temperatures.", hint: "Chuyển It was impossible... sang can't have + V3/ed" },
        { sentence: "Perhaps the monks hid the ritualistic relics before the temple burned down. (might)", answer: "The monks might have hidden the ritualistic relics before the temple burned down.", hint: "Chuyển Perhaps + V2/ed sang might have + V3/ed" },
        { sentence: "I'm sure the archaeologist was thrilled when she deciphered the hieroglyphs. (been)", answer: "The archaeologist must have been thrilled when she deciphered the hieroglyphs.", hint: "Dùng must have been thrilled..." },
        { sentence: "It is possible that an earthquake damaged the stone monument centuries ago. (could)", answer: "An earthquake could have damaged the stone monument centuries ago.", hint: "Dùng could have damaged..." }
      ],
      review: [
        { sentence: "I wish I ___ (attend) the lecture on bronze metallurgy yesterday.", answer: "had attended", hint: "Ôn tập Day 37: Câu ước trái với quá khứ" },
        { sentence: "It's high time the museum ___ (update) its audio guide system.", answer: "updated", hint: "Ôn tập Day 37: It's high time + S + V2/ed" },
        { sentence: "If they had preserved the manuscript properly, it ___ (be) readable today.", answer: "would be", hint: "Ôn tập Day 36: Câu điều kiện hỗn hợp (Quá khứ ➔ Hiện tại)" },
        { sentence: "After the team ___ (unearth) the statue, they notified the Ministry of Culture.", answer: "had unearthed", hint: "Ôn tập Day 31: Quá khứ hoàn thành sau After" },
        { sentence: "The curator reminded the interns ___ (wear) cotton gloves when handling relics.", answer: "to wear", hint: "Ôn tập remind + sb + to V" }
      ]
    }
  },

  // ==================== DAY 39 ====================
  {
    day: 39,
    id: "day-39",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Lời khuyên & Khả năng trong Quá khứ (Should / Could / Needn't have + V3) — Quản lý Dự án",
    titleEn: "Past Advisability & Possibility — Project Management & Teamwork",
    dailyGoal: "Phân biệt sắc thái tinh tế giữa should(n't) have + V3, ought to have + V3, could have + V3 và needn't have + V3 vs. didn't need to V trong môi trường làm việc nhóm.",
    vocab: [
      { en: "delegate", pos: "v", ipa: "/ˈdelɪɡeɪt/", vi: "phân quyền, giao phó công việc", example: "The team leader should have delegated the design tasks earlier." },
      { en: "bottleneck", pos: "n", ipa: "/ˈbɑːtlnek/", vi: "điểm nghẽn (làm chậm tiến độ)", example: "We could have avoided the production bottleneck by hiring two temporary testers." },
      { en: "milestone", pos: "n", ipa: "/ˈmaɪlstoʊn/", vi: "cột mốc tiến độ dự án", example: "Every department met the quarterly milestone ahead of schedule." },
      { en: "contingency", pos: "n", ipa: "/kənˈtɪndʒənsi/", vi: "phương án dự phòng (rủi ro)", example: "You ought to have prepared a contingency plan for server downtime." },
      { en: "stakeholder", pos: "n", ipa: "/ˈsteɪkhoʊldər/", vi: "bên liên quan (trong dự án)", example: "All key stakeholders approved the revised budget yesterday." },
      { en: "streamline", pos: "v", ipa: "/ˈstriːmlaɪn/", vi: "tinh gọn, tối ưu hóa quy trình", example: "New automation software streamlined our weekly reporting workflow." },
      { en: "micromanage", pos: "v", ipa: "/ˈmaɪkroʊmænɪdʒ/", vi: "quản lý tiểu tiết, kiểm soát quá mức", example: "The director shouldn't have micromanaged experienced senior engineers." },
      { en: "allocate", pos: "v", ipa: "/ˈæləkeɪt/", vi: "phân bổ (nguồn lực, ngân sách)", example: "We should have allocated more funds to user testing in Phase 1." },
      { en: "synergy", pos: "n", ipa: "/ˈsɪnərdʒi/", vi: "sức mạnh cộng hưởng nhóm", example: "Cross-departmental synergy helped us deliver the campaign on time." },
      { en: "redundant", pos: "adj", ipa: "/rɪˈdʌndənt/", vi: "dư thừa, lặp lại không cần thiết", example: "You needn't have printed fifty copies; paper handouts were redundant." },
      { en: "escalate", pos: "v", ipa: "/ˈeskəleɪt/", vi: "leo thang (vấn đề); báo cáo lên cấp cao hơn", example: "The coordinator should have escalated the client's complaint immediately." },
      { en: "debrief", pos: "v", ipa: "/diːˈbriːf/", vi: "họp rút kinh nghiệm sau dự án", example: "Our manager debriefed the team after the product launch concluded." }
    ],
    grammar: {
      point: "ĐÁNH GIÁ HÀNH ĐỘNG QUÁ KHỨ (SHOULD / OUGHT TO / COULD / NEEDN'T HAVE + V3)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Lời khuyên / Sự trách móc muộn màng & Tiềm năng bỏ lỡ trong Quá khứ</strong>
          <ul>
            <li><b>Đáng lẽ NÊN làm (nhưng thực tế đã KHÔNG làm):</b><br/>
            <code>S + should / ought to + have + V3/ed</code><br/>
            <i>Ví dụ:</i> You <b>should have delegated</b> that task to your assistant.</li>
            <li><b>Đáng lẽ KHÔNG NÊN làm (nhưng thực tế ĐÃ trót làm):</b><br/>
            <code>S + shouldn't / ought not to + have + V3/ed</code></li>
            <li><b>Đáng lẽ ĐÃ CÓ THỂ làm được (nhưng đã không làm / bỏ lỡ cơ hội):</b><br/>
            <code>S + could have + V3/ed</code></li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Phân biệt Kinh điển: NEEDN'T HAVE + V3 vs. DIDN'T NEED TO + V</strong>
          <ul>
            <li><b><code>needn't have + V3/ed</code> (Đáng lẽ không cần làm, nhưng ĐÃ TRÓT LÀM RỒI — tốn công vô ích):</b><br/>
            <i>Ví dụ:</i> We <b>needn't have printed</b> these handouts because the meeting was moved online. (Thực tế là ĐÃ IN rồi mới biết!).</li>
            <li><b><code>didn't need to + V(bare)</code> (Không cần phải làm, và thường là ĐÃ KHÔNG LÀM vì biết trước):</b><br/>
            <i>Ví dụ:</i> We knew the meeting was online, so we <b>didn't need to print</b> any handouts.</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "We <b>should have prepared</b> a contingency plan before migrating the database.", vi: "Đáng lẽ chúng ta nên chuẩn bị một phương án dự phòng trước khi chuyển đổi cơ sở dữ liệu (nhưng đã không chuẩn bị)." },
        { en: "The manager <b>shouldn't have micromanaged</b> the designers; it slowed down the whole workflow.", vi: "Người quản lý đáng lẽ không nên kiểm soát tiểu tiết các nhà thiết kế; điều đó đã làm chậm cả quy trình." },
        { en: "You <b>could have asked</b> the IT team for help instead of struggling with the bottleneck alone.", vi: "Đáng lẽ bạn đã có thể nhờ đội IT giúp đỡ thay vì tự mình vật lộn với điểm nghẽn đó." },
        { en: "I <b>needn't have worked</b> until midnight on the slides because the stakeholder postponed the pitch.", vi: "Đáng lẽ tôi chẳng cần phải thức làm slide đến nửa đêm vì bên liên quan đã hoãn buổi thuyết trình (nhưng tôi đã trót thức làm rồi!)." }
      ],
      commonMistake: {
        wrong: "You must have told me about the schedule change earlier; why did you keep silent?",
        right: "You **should have told** (OR: **ought to have told**) me about the schedule change earlier; why did you keep silent?",
        note: "'must have + V3' chỉ dùng để SUY LUẬN ('ắt hẳn đã'). Khi muốn phê bình/khuyên bảo 'đáng lẽ bạn nên làm gì nhưng đã không làm', bắt buộc dùng 'SHOULD HAVE + V3' hoặc 'OUGHT TO HAVE + V3'!"
      },
      memoryTip: "Phân biệt siêu dễ: SHOULD HAVE V3 = Đáng lẽ nên làm (mà quên làm) | NEEDN'T HAVE V3 = Đáng lẽ khỏi cần làm (mà trót làm mất công)!"
    },
    dialogue: {
      titleVi: "Tình huống: Cuộc họp rút kinh nghiệm (Debriefing) sau khi hoàn thành dự án phần mềm",
      lines: [
        { speaker: "Hien", en: "Now that we've delivered Phase 1, let's debrief honestly. Where did we hit our biggest bottleneck?", vi: "Giờ chúng ta đã bàn giao xong Giai đoạn 1, hãy họp rút kinh nghiệm thẳng thắn nhé. Chúng ta đã gặp điểm nghẽn lớn nhất ở đâu?" },
        { speaker: "Quang", en: "In week three. I should have delegated the quality testing to two junior engineers instead of doing it all myself.", vi: "Ở tuần thứ ba. Đáng lẽ mình nên giao việc kiểm thử chất lượng cho hai kỹ sư trẻ thay vì tự ôm hết một mình." },
        { speaker: "Hien", en: "Yes, you could have saved at least three days. Also, we ought to have allocated a bigger contingency budget.", vi: "Đúng vậy, cậu đáng lẽ đã tiết kiệm được ít nhất ba ngày. Ngoài ra, chúng ta cũng đáng lẽ nên phân bổ ngân sách dự phòng lớn hơn." },
        { speaker: "Quang", en: "And remember the printed reports? We needn't have bound thirty hardcover copies because the stakeholders preferred digital dashboards!", vi: "Và cậu còn nhớ mấy cuốn báo cáo in không? Tụi mình đáng lẽ chẳng cần đóng 30 cuốn bìa cứng vì các bên liên quan thích bảng điều khiển kỹ thuật số hơn!" },
        { speaker: "Hien", en: "True, that was redundant expenditure. On the bright side, nobody micromanaged the creative team, so their synergy was fantastic.", vi: "Đúng thế, đó là khoản chi dư thừa. Về mặt tích cực, không ai kiểm soát tiểu tiết nhóm sáng tạo nên sự cộng hưởng của họ rất tuyệt vời." },
        { speaker: "Quang", en: "Agreed! Next quarter, we'll streamline our communication and escalate technical risks much earlier.", vi: "Đồng ý! Quý tới, chúng ta sẽ tinh gọn khâu giao tiếp và báo cáo sớm hơn nhiều các rủi ro kỹ thuật." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "The project missed its deadline because of a server crash. We ___ a contingency plan in place.", options: ["must have had", "should have had", "needn't have had"], answer: "should have had", explanation: "Lời khuyên/rút kinh nghiệm về việc đáng lẽ nên có phương án dự phòng nhưng thực tế đã không có: should have + V3." },
        { q: "I translated the entire 40-page manual into French, only to find out the client is from Geneva and speaks English! I ___ it.", options: ["needn't have translated", "didn't need to translate", "mustn't have translated"], answer: "needn't have translated", explanation: "Đã trót dịch xong cả cuốn 40 trang rồi mới phát hiện không cần ➔ needn't have + V3." },
        { q: "The director ___ the senior developers during the sprint; it hurt team morale.", options: ["shouldn't have micromanaged", "can't have micromanaged", "needn't micromanage"], answer: "shouldn't have micromanaged", explanation: "Phê bình một việc đáng lẽ không nên làm trong quá khứ: shouldn't have + V3." },
        { q: "Why didn't you tell me you were overloaded? I ___ half of those spreadsheets for you!", options: ["could have handled", "must have handled", "should handle"], answer: "could have handled", explanation: "Nói về khả năng/sự sẵn lòng trong quá khứ đã bị bỏ lỡ: could have + V3." },
        { q: "You ___ to have informed all stakeholders before changing the launch schedule.", options: ["should", "ought", "must"], answer: "ought", explanation: "Cấu trúc 'ought to have + V3/ed' = 'should have + V3/ed' (chú ý có giới từ 'to' sẵn sau chỗ trống)." },
        { q: "Because the conference was canceled two days in advance, we ___ book flight tickets.", options: ["needn't have booked", "didn't need to", "shouldn't have"], answer: "didn't need to", explanation: "Biết trước hội nghị bị hủy 2 ngày nên thực tế đã không cần đặt vé (và sau chỗ trống là V nguyên thể 'book') ➔ didn't need to." },
        { q: "When the supply bottleneck appeared, the coordinator ___ the issue to the operations director immediately.", options: ["should have escalated", "might escalate", "can't have escalated"], answer: "should have escalated", explanation: "Đáng lẽ nên báo cáo ngay lên cấp trên nhưng đã không làm ➔ should have escalated." },
        { q: "We wasted too much time on manual data entry; we ___ the workflow with a script from day one.", options: ["could have streamlined", "must have streamlined", "needn't have streamlined"], answer: "could have streamlined", explanation: "Tiềm năng tối ưu hóa quy trình ngay từ ngày đầu nhưng đã bỏ lỡ: could have streamlined." },
        { q: "You ___ so many snacks for the debriefing; half of the team is joining via video call!", options: ["needn't have bought", "didn't need to buy", "couldn't have bought"], answer: "needn't have bought", explanation: "Đã mua quá nhiều đồ ăn vặt rồi mới nhận ra một nửa nhóm họp online ➔ needn't have bought." },
        { q: "The finance committee ___ more resources to cybersecurity before the system was hacked.", options: ["ought to have allocated", "must have allocated", "can't have allocated"], answer: "ought to have allocated", explanation: "Đáng lẽ nên phân bổ nhiều nguồn lực hơn trước khi bị tấn công mạng: ought to have allocated." }
      ],
      fillBlank: [
        { sentence: "You ___ (should / delegate) some of the routine paperwork to the interns last week.", answer: "should have delegated", hint: "Đáng lẽ nên giao phó công việc (should have + V3)" },
        { sentence: "We ___ (need / not / reserve) the large auditorium because only twenty stakeholders attended.", answer: "needn't have reserved", hint: "Đã trót đặt hội trường lớn không cần thiết (needn't have + V3)" },
        { sentence: "He ___ (should / not / ignore) the early warning signs of a production bottleneck.", answer: "shouldn't have ignored", hint: "Đáng lẽ không nên phớt lờ" },
        { sentence: "They ___ (could / reach) the milestone on Friday if they had communicated better.", answer: "could have reached", hint: "Khả năng đã có thể đạt được trong quá khứ" },
        { sentence: "The team leader ought ___ (debrief) the staff right after the client presentation.", answer: "to have debriefed", hint: "ought + to have + V3/ed" },
        { sentence: "I knew the report was redundant, so I ___ (not / need) to write it.", answer: "did not need", hint: "Biết trước nên không cần làm (Quá khứ đơn phủ định trước 'to write')" },
        { sentence: "We ___ (should / allocate) a 15% contingency fund before signing the construction contract.", answer: "should have allocated", hint: "Đáng lẽ nên phân bổ quỹ dự phòng" },
        { sentence: "She ___ (could / ask) for an extension, but she chose to work overtime instead.", answer: "could have asked", hint: "Đáng lẽ đã có thể xin gia hạn nhưng không làm" }
      ],
      sentenceBuild: [
        { words: ["You", "should", "have", "delegated", "those", "tasks", "to", "your", "team", "."], answer: "You should have delegated those tasks to your team .", vi: "Đáng lẽ bạn nên giao phó những nhiệm vụ đó cho nhóm của mình." },
        { words: ["We", "needn't", "have", "printed", "all", "these", "redundant", "documents", "."], answer: "We needn't have printed all these redundant documents .", vi: "Đáng lẽ chúng ta chẳng cần in tất cả những tài liệu dư thừa này." },
        { words: ["He", "should", "not", "have", "micromanaged", "the", "experienced", "engineers", "."], answer: "He should not have micromanaged the experienced engineers .", vi: "Đáng lẽ anh ấy không nên quản lý tiểu tiết các kỹ sư giàu kinh nghiệm." },
        { words: ["They", "ought", "to", "have", "prepared", "a", "better", "contingency", "plan", "."], answer: "They ought to have prepared a better contingency plan .", vi: "Đáng lẽ họ nên chuẩn bị một phương án dự phòng tốt hơn." },
        { words: ["She", "could", "have", "escalated", "the", "bottleneck", "to", "the", "director", "."], answer: "She could have escalated the bottleneck to the director .", vi: "Đáng lẽ cô ấy đã có thể báo cáo điểm nghẽn đó lên giám đốc." },
        { words: ["We", "should", "have", "allocated", "more", "budget", "to", "quality", "testing", "."], answer: "We should have allocated more budget to quality testing .", vi: "Đáng lẽ chúng ta nên phân bổ thêm ngân sách cho khâu kiểm thử chất lượng." }
      ],
      transformation: [
        { sentence: "It was a mistake for the manager to criticize the intern in front of the stakeholders. (shouldn't)", answer: "The manager shouldn't have criticized the intern in front of the stakeholders.", hint: "Dùng shouldn't have + V3/ed" },
        { sentence: "It was unnecessary for us to book a courier because the client picked up the contract in person. (needn't)", answer: "We needn't have booked a courier because the client picked up the contract in person.", hint: "Dùng We needn't have booked..." },
        { sentence: "We had the ability to streamline the payment process last quarter, but we didn't do it. (could)", answer: "We could have streamlined the payment process last quarter.", hint: "Dùng We could have streamlined..." },
        { sentence: "The coordinator didn't double-check the schedule, which was the wrong thing to do. (ought)", answer: "The coordinator ought to have double-checked the schedule.", hint: "Dùng ought to have + V3/ed" },
        { sentence: "I am sure the technical lead was exhausted after fixing the server bottleneck all night. (must)", answer: "The technical lead must have been exhausted after fixing the server bottleneck all night.", hint: "Ôn tập Day 38: must have been exhausted..." }
      ],
      review: [
        { sentence: "The ancient bridge is still standing; the Romans ___ (must / build) it with extraordinary precision.", answer: "must have built", hint: "Ôn tập Day 38: Suy luận khẳng định chắc chắn trong quá khứ" },
        { sentence: "I wish our office ___ (have) a quiet lounge for brainstorming sessions.", answer: "had", hint: "Ôn tập Day 37: Câu ước trái với hiện tại" },
        { sentence: "If he ___ (not / be) so stubborn, he would have accepted his colleague's advice yesterday.", answer: "were not", hint: "Ôn tập Day 36: Mixed Conditional (Bản chất hiện tại ➔ Quá khứ)" },
        { sentence: "Had they ___ (streamline) the logistics earlier, they wouldn't have lost that client.", answer: "streamlined", hint: "Ôn tập Day 34: Đảo ngữ câu điều kiện loại 3" },
        { sentence: "We look forward to ___ (collaborate) with all stakeholders in Phase 2.", answer: "collaborating", hint: "Ôn tập look forward to + V-ing" }
      ]
    }
  },

  // ==================== DAY 40 (MILESTONE EXAM 8) ====================
  {
    day: 40,
    id: "day-40",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: true,
    estimatedMinutes: 35,
    title: "Milestone Exam 8: Ôn tập & Kiểm tra Ngày 36–39 — Thách thức Nơi làm việc",
    titleEn: "Milestone Exam 8 (Days 36–39) — Workplace Challenges & Decision Making",
    dailyGoal: "Chinh phục bài kiểm tra tổng hợp Chặng 5 Phần 2 (Ngày 36–39): Câu điều kiện Hỗn hợp, Wish / If only / It's high time, và toàn bộ hệ thống Modal + have + V3/ed.",
    vocab: [
      { en: "accountability", pos: "n", ipa: "/əˌkaʊntəˈbɪləti/", vi: "trách nhiệm giải trình", example: "Strong leadership requires transparency and personal accountability." },
      { en: "burnout", pos: "n", ipa: "/ˈbɜːrnaʊt/", vi: "sự kiệt sức nghề nghiệp", example: "If managers delegated fairly, employees wouldn't suffer from burnout." },
      { en: "restructure", pos: "v", ipa: "/ˌriːˈstrʌktʃər/", vi: "tái cơ cấu, tổ chức lại", example: "The corporation had to restructure its debt to avoid bankruptcy." },
      { en: "benchmark", pos: "n", ipa: "/ˈbentʃmɑːrk/", vi: "tiêu chuẩn đối sánh, chuẩn mực", example: "Our customer service response time set a new industry benchmark." },
      { en: "initiative", pos: "n", ipa: "/ɪˈnɪʃətɪv/", vi: "sáng kiến; tính chủ động", example: "She showed great initiative by proposing a cost-saving workflow." },
      { en: "incentive", pos: "n", ipa: "/ɪnˈsentɪv/", vi: "chính sách khuyến khích, động lực", example: "Performance bonuses provide a strong incentive for sales teams." },
      { en: "productivity", pos: "n", ipa: "/ˌproʊdʌkˈtɪvəti/", vi: "năng suất làm việc", example: "Flexible working hours have significantly boosted staff productivity." },
      { en: "turnover", pos: "n", ipa: "/ˈtɜːrnoʊvər/", vi: "tỷ lệ biến động nhân sự; doanh thu", example: "High staff turnover often indicates poor workplace culture." },
      { en: "consensus", pos: "n", ipa: "/kənˈsensəs/", vi: "sự đồng thuận chung", example: "The board reached a consensus after three hours of negotiation." },
      { en: "viable", pos: "adj", ipa: "/ˈvaɪəbl/", vi: "khả thi, có thể thực hiện bền vững", example: "We need a commercially viable alternative before phasing out the old product." },
      { en: "remuneration", pos: "n", ipa: "/rɪˌmjuːnəˈreɪʃn/", vi: "chế độ đãi ngộ, thù lao", example: "Competitive remuneration helps attract top engineering talent." },
      { en: "autonomy", pos: "n", ipa: "/ɔːˈtɑːnəmi/", vi: "quyền tự chủ trong công việc", example: "Creative professionals thrive when given sufficient autonomy." }
    ],
    grammar: {
      point: "TỔNG ÔN CHẶNG 5 PHẦN 2 (NGÀY 36–39): MIXED CONDITIONALS, WISH & PAST MODALS",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Câu điều kiện Hỗn hợp & Wish / If only (Days 36–37)</strong>
          <ul>
            <li><b>Mixed Type 3 ➔ 2 (Quá khứ ➔ Hiện tại):</b> <code>If + S + had + V3/ed, S + would/could + V(bare) + [now/today]</code></li>
            <li><b>Mixed Type 2 ➔ 3 (Hiện tại/Bản chất ➔ Quá khứ):</b> <code>If + S + V2/ed (were), S + would/could + have + V3/ed</code></li>
            <li><b>Wish / If only:</b> Ước Hiện tại ➔ <code>V2/ed (were)</code> | Ước Quá khứ ➔ <code>had + V3/ed</code> | Phàn nàn/Tương lai ➔ <code>would + V</code> | <code>It's high time + S + V2/ed</code>.</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Hệ thống Modal Verbs + have + V3/ed trong Quá khứ (Days 38–39)</strong>
          <ul>
            <li><b>Suy luận (Deduction):</b> <code>must have V3</code> (ắt hẳn đã) | <code>can't / couldn't have V3</code> (chắc chắn không thể đã) | <code>might / may / could have V3</code> (có lẽ đã).</li>
            <li><b>Đánh giá / Lời khuyên (Advisability):</b> <code>should(n't) / ought(n't) to have V3</code> (đáng lẽ nên/không nên làm) | <code>could have V3</code> (đáng lẽ đã có thể làm) | <code>needn't have V3</code> (đáng lẽ không cần làm mà đã trót làm).</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "If the firm <b>had restructured</b> its operations in 2022, it <b>would be</b> financially viable <b>today</b>.", vi: "Nếu công ty tái cơ cấu hoạt động vào năm 2022, thì hôm nay họ đã có khả năng tự chủ tài chính bền vững." },
        { en: "I <b>wish</b> top management <b>would give</b> project teams greater autonomy.", vi: "Tôi ước gì ban lãnh đạo cấp cao sẽ trao cho các nhóm dự án quyền tự chủ lớn hơn." },
        { en: "The HR director <b>must have noticed</b> the high turnover rate because she just announced new incentives.", vi: "Giám đốc nhân sự ắt hẳn đã nhận thấy tỷ lệ nghỉ việc cao vì bà ấy vừa công bố các chính sách khuyến khích mới." },
        { en: "You <b>should have escalated</b> the bottleneck earlier, and you <b>needn't have worked</b> alone all weekend!", vi: "Đáng lẽ bạn nên báo cáo điểm nghẽn sớm hơn, và đáng lẽ bạn chẳng cần phải làm việc một mình suốt cuối tuần!" }
      ],
      commonMistake: {
        wrong: "The courier delivered the parcel at 9 AM, so you mustn't have gone to the post office at noon!",
        right: "The courier delivered the parcel at 9 AM, so you **needn't have gone** to the post office at noon!",
        note: "Khi bạn đã trót đi ra bưu điện lúc trưa dù bưu kiện đã được giao từ 9 giờ sáng (tốn công vô ích), phải dùng 'needn't have gone'!"
      },
      memoryTip: "Mẹo phân biệt nhanh nhóm 'HAVE + V3': Đóng vai THÁM TỬ tìm sự thật ➔ must / can't / might have V3. Đóng vai SẾP đánh giá/rút kinh nghiệm ➔ should / ought to / could / needn't have V3!"
    },
    dialogue: null,
    exercises: {
      multipleChoice: [
        { q: "If our company had invested in automation three years ago, our productivity ___ much higher today.", options: ["would be", "would have been", "will be"], answer: "would be", explanation: "Mixed Conditional: Điều kiện ở quá khứ (three years ago ➔ had invested), kết quả ở hiện tại (today ➔ would be)." },
        { q: "It's high time the board of directors ___ the remuneration package to reduce staff turnover.", options: ["reviews", "reviewed", "had reviewed"], answer: "reviewed", explanation: "Cấu trúc 'It's high time + S + V2/ed' (reviewed)." },
        { q: "The office lights were completely off and her car was gone; she ___ home before 7 PM.", options: ["must have gone", "should have gone", "needn't have gone"], answer: "must have gone", explanation: "Suy luận logic chắc chắn dựa trên bằng chứng (đèn tắt, xe đã đi) ➔ must have gone." },
        { q: "You ___ a twenty-page printout for the client; he only asked for a three-minute verbal summary!", options: ["can't have prepared", "needn't have prepared", "mustn't have prepared"], answer: "needn't have prepared", explanation: "Đã trót chuẩn bị bản in 20 trang không cần thiết ➔ needn't have prepared." },
        { q: "If only I ___ that fixed-rate mortgage before housing prices skyrocketed last year!", options: ["took out", "had taken out", "would take out"], answer: "had taken out", explanation: "Ước trái với quá khứ (last year) sau If only ➔ had taken out." },
        { q: "If he ___ a better team player, the stakeholders would have chosen him to lead the initiative last month.", options: ["were", "had been", "is"], answer: "were", explanation: "Mixed Conditional: Bản chất/tính cách hiện tại (If he were...) dẫn đến kết quả quá khứ (last month ➔ would have chosen)." },
        { q: "This artifact is made of aluminum, which wasn't refined until the 19th century, so it ___ from the Roman era!", options: ["mustn't have come", "can't have come", "shouldn't have come"], answer: "can't have come", explanation: "Suy luận bác bỏ chắc chắn trong quá khứ ➔ can't have come." },
        { q: "We missed the project milestone because of poor communication. We ___ weekly debriefings.", options: ["ought to have held", "must have held", "can't have held"], answer: "ought to have held", explanation: "Đáng lẽ nên tổ chức họp rút kinh nghiệm hàng tuần nhưng đã không làm ➔ ought to have held." },
        { q: "Many employees wish their supervisor ___ micromanaging every single email they send.", options: ["stops", "would stop", "had stopped"], answer: "would stop", explanation: "Phàn nàn mong người khác thay đổi hành vi gây khó chịu ➔ wish + S + would + V." },
        { q: "Nobody is certain why the server crashed, but a sudden power surge ___ the hardware.", options: ["might have damaged", "should have damaged", "needn't have damaged"], answer: "might have damaged", explanation: "Phỏng đoán chưa chắc chắn (Nobody is certain) ➔ might have damaged." }
      ],
      fillBlank: [
        { sentence: "If they had diversified their assets earlier, they ___ (not / face) bankruptcy right now.", answer: "would not face", hint: "Mixed Conditional: kết quả ở hiện tại (right now)" },
        { sentence: "I wish my apartment on the outskirts ___ (be) closer to the metro line.", answer: "were", hint: "Ước trái với hiện tại (to be ➔ were)" },
        { sentence: "If only we ___ (allocate) a larger contingency fund before starting Phase 1!", answer: "had allocated", hint: "Tiếc nuối việc trong quá khứ sau If only" },
        { sentence: "The tomb seal was unbroken, so grave robbers ___ (can't / steal) the ceremonial relics.", answer: "can't have stolen", hint: "Suy luận phủ định chắc chắn trong quá khứ" },
        { sentence: "You ___ (should / escalate) that compliance issue to the legal department immediately.", answer: "should have escalated", hint: "Lời khuyên/trách móc về việc đáng lẽ nên làm" },
        { sentence: "We ___ (need / not / hire) an external translator because the stakeholder spoke fluent Vietnamese!", answer: "needn't have hired", hint: "Đã trót thuê phiên dịch viên không cần thiết" },
        { sentence: "It's about time our department ___ (streamline) its approval workflow to prevent burnout.", answer: "streamlined", hint: "It's about time + S + V2/ed" },
        { sentence: "The ancient builders ___ (must / use) bamboo rafts to float these stone blocks down the river.", answer: "must have used", hint: "Suy luận khẳng định chắc chắn trong quá khứ" }
      ],
      sentenceBuild: [
        { words: ["If", "we", "had", "restructured", "earlier,", "we", "would", "be", "profitable", "now", "."], answer: "If we had restructured earlier, we would be profitable now .", vi: "Nếu chúng ta tái cơ cấu sớm hơn, thì giờ chúng ta đã có lãi rồi." },
        { words: ["I", "wish", "the", "landlord", "would", "install", "soundproof", "windows", "."], answer: "I wish the landlord would install soundproof windows .", vi: "Tôi ước gì chủ nhà sẽ lắp cửa sổ cách âm." },
        { words: ["It", "is", "high", "time", "management", "addressed", "employee", "burnout", "."], answer: "It is high time management addressed employee burnout .", vi: "Đã đến lúc ban quản lý phải giải quyết tình trạng kiệt sức của nhân viên." },
        { words: ["These", "hieroglyphs", "must", "have", "recorded", "an", "ancient", "treaty", "."], answer: "These hieroglyphs must have recorded an ancient treaty .", vi: "Những chữ tượng hình này ắt hẳn đã ghi lại một hiệp ước cổ đại." },
        { words: ["You", "should", "have", "delegated", "that", "redundant", "task", "yesterday", "."], answer: "You should have delegated that redundant task yesterday .", vi: "Hôm qua đáng lẽ bạn nên giao phó công việc dư thừa đó." },
        { words: ["We", "needn't", "have", "booked", "such", "a", "large", "conference", "room", "."], answer: "We needn't have booked such a large conference room .", vi: "Đáng lẽ chúng ta chẳng cần đặt một phòng họp lớn đến vậy." }
      ],
      transformation: [
        { sentence: "She didn't take the leadership course last year, so she isn't eligible for promotion today. (If)", answer: "If she had taken the leadership course last year, she would be eligible for promotion today.", hint: "Viết câu điều kiện hỗn hợp (Quá khứ ➔ Hiện tại)" },
        { sentence: "I regret signing a three-year lease for this noisy studio. (wish)", answer: "I wish I had not signed a three-year lease for this noisy studio.", hint: "Dùng I wish I had not signed..." },
        { sentence: "I am certain that the whistleblower leaked those confidential spreadsheets. (must)", answer: "The whistleblower must have leaked those confidential spreadsheets.", hint: "Dùng must have + V3/ed" },
        { sentence: "It was wrong of the team leader to ignore the junior engineer's initiative. (shouldn't)", answer: "The team leader shouldn't have ignored the junior engineer's initiative.", hint: "Dùng shouldn't have + V3/ed" },
        { sentence: "We bought extra servers, but it turned out the existing cloud capacity was sufficient. (needn't)", answer: "We needn't have bought extra servers because the existing cloud capacity was sufficient.", hint: "Dùng We needn't have bought..." }
      ],
      review: [
        { sentence: "By the time the rescue ship arrived, the crew ___ (survive) on emergency rations for ten days.", answer: "had survived", hint: "Ôn tập Day 31: Quá khứ hoàn thành với By the time" },
        { sentence: "The auditors ___ (examine) the accounts for weeks before they uncovered the fraud.", answer: "had been examining", hint: "Ôn tập Day 33: Quá khứ hoàn thành tiếp diễn" },
        { sentence: "___ (Have) the board acted decisively, the company wouldn't have lost market share.", answer: "Had", hint: "Ôn tập Day 34: Đảo ngữ câu điều kiện loại 3" },
        { sentence: "She had no sooner submitted the proposal ___ (than / when) the client approved it.", answer: "than", hint: "Ôn tập Day 32: Cấu trúc no sooner ... than" },
        { sentence: "The CEO had the annual report ___ (audit) by an independent firm.", answer: "audited", hint: "Ôn tập Cấu trúc cầu khiến bị động have sth done" }
      ]
    }
  },

  // ==================== DAY 41 ====================
  {
    day: 41,
    id: "day-41",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Mệnh đề Quan hệ Xác định & Không xác định (Defining vs. Non-defining) — Kiến trúc & Di sản",
    titleEn: "Defining vs. Non-defining Relative Clauses — Architecture & World Heritage",
    dailyGoal: "Phân biệt rạch ròi mệnh đề quan hệ xác định và không xác định (dấu phẩy, đại từ who, whom, which, whose, where, when, và cách dùng which thay cho cả mệnh đề).",
    vocab: [
      { en: "facade", pos: "n", ipa: "/fəˈsɑːd/", vi: "mặt tiền (tòa nhà, công trình kiến trúc)", example: "The cathedral, whose stone facade was restored in 2019, attracts millions of tourists." },
      { en: "citadel", pos: "n", ipa: "/ˈsɪtədel/", vi: "thành nội, hoàng thành", example: "Hue Imperial Citadel, which was UNESCO-listed in 1993, showcases royal architecture." },
      { en: "edifice", pos: "n", ipa: "/ˈedɪfɪs/", vi: "công trình kiến trúc đồ sộ", example: "This marble edifice was designed by an architect whose vision was ahead of his time." },
      { en: "archway", pos: "n", ipa: "/ˈɑːrtʃweɪ/", vi: "cổng vòm, lối đi có mái vòm", example: "Visitors enter through a carved stone archway that dates back to the 12th century." },
      { en: "UNESCO-listed", pos: "adj", ipa: "/juːˈneskoʊ ˈlɪstɪd/", vi: "được UNESCO công nhận di sản", example: "Hoi An is a UNESCO-listed ancient town where timber-frame houses are preserved." },
      { en: "symmetry", pos: "n", ipa: "/ˈsɪmətri/", vi: "tính đối xứng hài hòa", example: "Classical palaces are admired for their geometric symmetry, which symbolizes harmony." },
      { en: "pillar", pos: "n", ipa: "/ˈpɪlər/", vi: "cột trụ lớn", example: "The temple rests on ironwood pillars that have withstood centuries of storms." },
      { en: "courtyard", pos: "n", ipa: "/ˈkɔːrtjɑːrd/", vi: "sân trong (của dinh thự, đền đài)", example: "We gathered in the shaded courtyard where royal scholars once composed poetry." },
      { en: "craftsmanship", pos: "n", ipa: "/ˈkræftsmənʃɪp/", vi: "tay nghề thủ công tinh xảo", example: "The wooden reliefs display exquisite craftsmanship that modern machines cannot replicate." },
      { en: "colonial", pos: "adj", ipa: "/kəˈloʊniəl/", vi: "thuộc thời kỳ thuộc địa (kiến trúc Pháp cổ)", example: "Hanoi's Opera House is a colonial landmark whose acoustics are world-class." },
      { en: "dome", pos: "n", ipa: "/doʊm/", vi: "mái vòm tròn", example: "Sunlight streams through the glass dome, which illuminates the central gallery." },
      { en: "conservationist", pos: "n", ipa: "/ˌkɑːnsərˈveɪʃənɪst/", vi: "chuyên gia bảo tồn di sản / thiên nhiên", example: "The conservationist whom we interviewed explained how lime mortar is mixed." }
    ],
    grammar: {
      point: "MỆNH ĐỀ QUAN HỆ XÁC ĐỊNH & KHÔNG XÁC ĐỊNH (DEFINING VS. NON-DEFINING RELATIVE CLAUSES)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Hệ thống Đại từ & Trạng từ Quan hệ Trọng tâm</strong>
          <ul>
            <li><b>Chỉ người:</b> <code>who</code> (chủ ngữ / tân ngữ) | <code>whom</code> (tân ngữ trang trọng)</li>
            <li><b>Chỉ vật / sự việc:</b> <code>which</code> | <b>Thay cho người hoặc vật (trong MĐ xác định):</b> <code>that</code></li>
            <li><b>Chỉ sở hữu (của ai / của cái gì):</b> <code>whose + Danh từ</code> (<i>the architect <b>whose designs</b> won the prize</i>)</li>
            <li><b>Chỉ nơi chốn / thời gian / lý do:</b> <code>where</code> (= in/at which) | <code>when</code> (= on/in which) | <code>why</code> (= for which)</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Phân biệt MĐ Xác định (Defining) vs. MĐ Không xác định (Non-defining)</strong>
          <ul>
            <li><b>Defining (Không có dấu phẩy):</b> Cần thiết để xác định danh từ đứng trước; có thể dùng <code>that</code>; có thể lược bỏ <code>who/which/that</code> khi làm tân ngữ.</li>
            <li><b>Non-defining (CÓ DẤU PHẨY ngăn cách — đứng sau Tên riêng, <i>this/that/my/his + N</i>):</b> Bổ sung thông tin phụ; <b>CẤM dùng <code>that</code> sau dấu phẩy</b> và <b>không được bỏ đại từ quan hệ</b>!</li>
            <li><b>Đặc biệt (Sentence Relative):</b> <code>, which + V(số ít)</code> dùng để bổ nghĩa cho <b>TOÀN BỘ MỆNH ĐỀ ĐỨNG TRƯỚC</b> (mang nghĩa <i>"điều này..."</i>).</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "Hue Imperial Citadel, <b>which was built</b> in the early 19th century, attracts historians worldwide.", vi: "Hoàng thành Huế, nơi được xây dựng vào đầu thế kỷ 19, thu hút các nhà sử học trên toàn thế giới (Non-defining, có dấu phẩy)." },
        { en: "We met an architectural conservationist <b>whose team</b> restored the ancient archway.", vi: "Chúng tôi đã gặp một chuyên gia bảo tồn kiến trúc mà nhóm của ông ấy đã trùng tu cổng vòm cổ (whose + N)." },
        { en: "That is the serene courtyard <b>where</b> royal ceremonies used to take place.", vi: "Đó là khoảng sân trong tĩnh lặng nơi các nghi lễ hoàng gia từng diễn ra (where + S + V)." },
        { en: "The city council banned heavy trucks from the old quarter, <b>which prevents</b> vibrations from damaging the facade.", vi: "Hội đồng thành phố đã cấm xe tải nặng vào phố cổ, điều này giúp ngăn rung chấn làm hỏng mặt tiền các tòa nhà (, which thay cả mệnh đề)." }
      ],
      commonMistake: {
        wrong: "My Son Sanctuary, that is located in Quang Nam Province, is a UNESCO-listed site.",
        right: "My Son Sanctuary, **which** is located in Quang Nam Province, is a UNESCO-listed site.",
        note: "Sau tên riêng (My Son Sanctuary) và dấu phẩy là Mệnh đề quan hệ KHÔNG xác định: TUYỆT ĐỐI KHÔNG dùng 'that' sau dấu phẩy!"
      },
      memoryTip: "Nhớ quy tắc 'DẤU PHẨY GHÉT THAT': Hễ thấy dấu phẩy (,) trước chỗ trống ➔ Gạch ngay phương án 'that'! Nếu thay cho cả câu phía trước ➔ Chọn ngay ', which'!"
    },
    dialogue: {
      titleVi: "Tình huống: Hướng dẫn viên giới thiệu kiến trúc một công trình di sản cho đoàn kiến trúc sư trẻ",
      lines: [
        { speaker: "Guide", en: "Welcome to this 19th-century pavilion, which combines traditional Vietnamese woodwork with French colonial arches.", vi: "Chào mừng các bạn đến với ngôi đình thế kỷ 19 này, công trình kết hợp nghệ thuật mộc truyền thống Việt Nam với những mái vòm kiến trúc Pháp cổ." },
        { speaker: "Thao", en: "Look at the central ironwood pillars, whose carvings of dragons and clouds are still remarkably sharp!", vi: "Nhìn những cột trụ gỗ lim trung tâm kìa, những nét chạm khắc rồng mây của chúng vẫn còn sắc nét đáng kinh ngạc!" },
        { speaker: "Guide", en: "Indeed. The master artisan who led the construction spent twelve years perfecting the roof's symmetry.", vi: "Đúng vậy. Nghệ nhân bậc thầy người chỉ huy việc xây dựng đã dành mười hai năm để hoàn thiện tính đối xứng của phần mái." },
        { speaker: "Thao", en: "Is the inner courtyard the place where the royal examinations were announced?", vi: "Khoảng sân trong có phải là nơi từng công bố kết quả các kỳ thi đình không ạ?" },
        { speaker: "Guide", en: "Yes! And in 2021, conservationists replaced the cracked tiles, which saved the edifice from water damage.", vi: "Đúng thế! Và vào năm 2021, các chuyên gia bảo tồn đã thay thế những viên ngói nứt, điều này đã cứu công trình khỏi bị ngấm nước hư hại." },
        { speaker: "Thao", en: "Such exquisite craftsmanship truly deserves to be protected for future generations.", vi: "Tay nghề thủ công tinh xảo như vậy thực sự xứng đáng được bảo vệ cho các thế hệ tương lai." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "The Temple of Literature, ___ was founded in 1070, is Vietnam's first national university.", options: ["that", "which", "where"], answer: "which", explanation: "Có dấu phẩy (mệnh đề không xác định) và theo sau là động từ 'was founded' (cần chủ ngữ chỉ vật) ➔ dùng which (không dùng that hay where)." },
        { q: "We interviewed the chief architect ___ restoration plan won the UNESCO heritage prize.", options: ["who", "whom", "whose"], answer: "whose", explanation: "Trước danh từ 'restoration plan' cần đại từ quan hệ chỉ sở hữu: whose + N." },
        { q: "Do you remember the summer ___ our class visited the ancient citadel in Hue?", options: ["which", "when", "where"], answer: "when", explanation: "Bổ nghĩa cho danh từ chỉ thời gian 'the summer' và theo sau là mệnh đề hoàn chỉnh S + V ➔ dùng when." },
        { q: "The municipality pedestrianized the streets around the cathedral, ___ significantly reduced air pollution on the stone facade.", options: ["that", "which", "what"], answer: "which", explanation: "', which' dùng để thay thế cho toàn bộ mệnh đề đứng trước dấu phẩy." },
        { q: "This is the colonial villa ___ the famous composer lived during the 1930s.", options: ["which", "where", "whose"], answer: "where", explanation: "Động từ 'lived' là nội động từ (lived in the villa), nên cần trạng từ quan hệ chỉ nơi chốn 'where' (= in which)." },
        { q: "The conservationist ___ you met at the symposium yesterday specializes in ancient timber structures.", options: ["whom", "whose", "which"], answer: "whom", explanation: "Làm tân ngữ chỉ người cho động từ 'you met' ➔ dùng whom (hoặc who/that)." },
        { q: "Any historic edifice ___ lacks proper drainage will suffer structural decay over time.", options: ["who", "that", "where"], answer: "that", explanation: "Mệnh đề quan hệ xác định làm chủ ngữ cho danh từ chỉ vật 'Any historic edifice' ➔ dùng that (hoặc which)." },
        { q: "Notre-Dame de Paris, ___ iconic spire collapsed in the 2019 fire, has been meticulously reconstructed.", options: ["which", "whose", "where"], answer: "whose", explanation: "Chỉ sự sở hữu cho danh từ chỉ vật ('iconic spire' của nhà thờ Notre-Dame) ➔ dùng whose." },
        { q: "Is that the courtyard ___ they filmed the historical documentary last month?", options: ["which", "where", "when"], answer: "where", explanation: "Chỉ nơi diễn ra hành động 'they filmed the documentary (in the courtyard)' ➔ dùng where." },
        { q: "The guided tour was canceled without prior notice, ___ annoyed all the international visitors.", options: ["which", "that", "who"], answer: "which", explanation: "', which' thay thế cho toàn bộ sự việc chuyến tham quan bị hủy không báo trước." }
      ],
      fillBlank: [
        { sentence: "Hoi An Ancient Town, ___ (which / that) lies on the banks of the Thu Bon River, is famous for its yellow facades.", answer: "which", hint: "Mệnh đề quan hệ không xác định sau dấu phẩy" },
        { sentence: "They honoured the master carpenter ___ (who / whose) craftsmanship saved the wooden pavilion.", answer: "whose", hint: "Đại từ sở hữu đứng trước danh từ craftsmanship" },
        { sentence: "The museum courtyard is a peaceful place ___ (where / which) visitors can admire stone sculptures.", answer: "where", hint: "Trạng từ quan hệ chỉ nơi chốn (+ S + V)" },
        { sentence: "1993 was the year ___ (when / where) the Complex of Hue Monuments became UNESCO-listed.", answer: "when", hint: "Trạng từ quan hệ chỉ thời gian bổ nghĩa cho the year" },
        { sentence: "The glass dome allowed natural light into the hall, ___ (which / that) cut electricity costs by half.", answer: "which", hint: "Sau dấu phẩy, thay cho cả mệnh đề phía trước" },
        { sentence: "The historian ___ (whom / whose) the university invited gave a lecture on colonial architecture.", answer: "whom", hint: "Tân ngữ chỉ người cho động từ invited" },
        { sentence: "The stone archway ___ (which / where) was built in the 15th century still stands intact.", answer: "which", hint: "Làm chủ ngữ cho động từ was built (không dùng where vì thiếu chủ ngữ)" },
        { sentence: "We visited a medieval fortress ___ (whose / which) walls were four meters thick.", answer: "whose", hint: "Chỉ sở hữu cho danh từ walls" }
      ],
      sentenceBuild: [
        { words: ["The", "citadel,", "which", "was", "built", "in", "1804,", "attracts", "many", "tourists", "."], answer: "The citadel, which was built in 1804, attracts many tourists .", vi: "Tòa thành nội, nơi được xây dựng năm 1804, thu hút nhiều du khách." },
        { words: ["We", "met", "an", "architect", "whose", "designs", "won", "international", "awards", "."], answer: "We met an architect whose designs won international awards .", vi: "Chúng tôi đã gặp một kiến trúc sư mà các thiết kế của ông đã giành giải thưởng quốc tế." },
        { words: ["This", "is", "the", "courtyard", "where", "royal", "scholars", "gathered", "."], answer: "This is the courtyard where royal scholars gathered .", vi: "Đây là sân trong nơi các học giả triều đình từng tụ họp." },
        { words: ["They", "restored", "the", "stone", "facade,", "which", "delighted", "local", "residents", "."], answer: "They restored the stone facade, which delighted local residents .", vi: "Họ đã trùng tu mặt tiền bằng đá, điều này làm cư dân địa phương rất vui mừng." },
        { words: ["The", "conservationist", "whom", "we", "consulted", "recommended", "traditional", "materials", "."], answer: "The conservationist whom we consulted recommended traditional materials .", vi: "Chuyên gia bảo tồn mà chúng tôi tham vấn đã khuyên dùng các vật liệu truyền thống." },
        { words: ["The", "pillars", "that", "support", "the", "dome", "are", "made", "of", "granite", "."], answer: "The pillars that support the dome are made of granite .", vi: "Những cột trụ nâng đỡ mái vòm được làm bằng đá hoa cương." }
      ],
      transformation: [
        { sentence: "The One Pillar Pagoda is an iconic cultural symbol. It was originally built in 1049. (which)", answer: "The One Pillar Pagoda, which was originally built in 1049, is an iconic cultural symbol.", hint: "Nối câu bằng mệnh đề quan hệ không xác định có dấu phẩy" },
        { sentence: "We interviewed a heritage conservationist. Her research focuses on ancient brickwork. (whose)", answer: "We interviewed a heritage conservationist whose research focuses on ancient brickwork.", hint: "Thay Her research bằng whose research" },
        { sentence: "This is the historic hall. The peace treaty was signed in this hall. (where)", answer: "This is the historic hall where the peace treaty was signed.", hint: "Thay in this hall bằng trạng từ quan hệ where" },
        { sentence: "The city restored the colonial archway, and this boosted cultural tourism. (which)", answer: "The city restored the colonial archway, which boosted cultural tourism.", hint: "Dùng , which để thay cho cả mệnh đề trước" },
        { sentence: "The master artisan was velmi respected. The king commissioned him to build the tomb. (whom)", answer: "The master artisan whom the king commissioned to build the tomb was very respected.", hint: "Dùng whom the king commissioned..." }
      ],
      review: [
        { sentence: "You ___ (should / back up) the blueprints before formatting the computer yesterday.", answer: "should have backed up", hint: "Ôn tập Day 39: Lời khuyên/trách móc trong quá khứ" },
        { sentence: "The ancient builders ___ (must / use) pulleys to lift these massive granite pillars.", answer: "must have used", hint: "Ôn tập Day 38: Suy luận chắc chắn trong quá khứ" },
        { sentence: "I wish the museum ___ (stay) open until 9 PM on weekends.", answer: "stayed", hint: "Ôn tập Day 37: Ước trái với hiện tại" },
        { sentence: "If they had maintained the roof, it ___ (not / leak) right now.", answer: "would not leak", hint: "Ôn tập Day 36: Câu điều kiện hỗn hợp (Quá khứ ➔ Hiện tại)" },
        { sentence: "By the time the storm hit, workers ___ (secure) the scaffolding.", answer: "had secured", hint: "Ôn tập Day 31: Quá khứ hoàn thành" }
      ]
    }
  },

  // ==================== DAY 42 ====================
  {
    day: 42,
    id: "day-42",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    dailyGoal: "Làm chủ kỹ thuật rút gọn mệnh đề quan hệ bằng Hiện tại phân từ (V-ing), Quá khứ phân từ (V3/ed) và Động từ nguyên mẫu (to-V) để viết câu học thuật cô đọng.",
    isExam: false,
    estimatedMinutes: 25,
    title: "Rút gọn Mệnh đề Quan hệ (Reduced Relative Clauses) — Năng lượng Tái tạo & Khí hậu",
    titleEn: "Reduced Relative Clauses (V-ing, V3/ed & to-V) — Renewable Energy & Climate",
    vocab: [
      { en: "turbine", pos: "n", ipa: "/ˈtɜːrbaɪn/", vi: "tua-bin (gió, nước, điện)", example: "Offshore wind turbines generating clean electricity can power thousands of homes." },
      { en: "photovoltaic", pos: "adj", ipa: "/ˌfoʊtoʊvɑːlˈteɪɪk/", vi: "quang điện (pin mặt trời)", example: "Photovoltaic cells installed on factory roofs reduce grid dependency." },
      { en: "geothermal", pos: "adj", ipa: "/ˌdʒiːoʊˈθɜːrməl/", vi: "địa nhiệt (năng lượng từ lòng đất)", example: "Iceland relies heavily on geothermal energy extracted from volcanic rocks." },
      { en: "emission", pos: "n", ipa: "/ɪˈmɪʃn/", vi: "khí thải, sự phát thải", example: "Countries signing the climate pact pledged to cut greenhouse gas emissions." },
      { en: "decarbonize", pos: "v", ipa: "/ˌdiːˈkɑːrbənaɪz/", vi: "khử cacbon, giảm phát thải cacbon", example: "Norway was the first nation to decarbonize its urban ferry fleet." },
      { en: "grid", pos: "n", ipa: "/ɡrɪd/", vi: "mạng lưới điện quốc gia", example: "Surplus electricity produced at noon is fed back into the national grid." },
      { en: "subsidy", pos: "n", ipa: "/ˈsʌbsədi/", vi: "khoản trợ cấp (của chính phủ)", example: "Homeowners receiving government subsidies switched to heat pumps." },
      { en: "fossil fuel", pos: "n", ipa: "/ˈfɑːsl ˈfjuːəl/", vi: "nhiên liệu hóa thạch (than, dầu, khí đốt)", example: "Power plants burning fossil fuels are gradually being phased out." },
      { en: "biodiversity", pos: "n", ipa: "/ˌbaɪoʊdaɪˈvɜːrsəti/", vi: "đa dạng sinh học", example: "Coastal mangroves protecting marine biodiversity also absorb carbon." },
      { en: "mitigate", pos: "v", ipa: "/ˈmɪtɪɡeɪt/", vi: "giảm nhẹ, làm dịu bớt (tác động xấu)", example: "Reforestation is a cost-effective strategy to mitigate global warming." },
      { en: "retrofitting", pos: "n", ipa: "/ˈretroʊfɪtɪŋ/", vi: "việc nâng cấp công trình cũ theo chuẩn tiết kiệm năng lượng", example: "Retrofitting old office buildings cuts heating demand by forty percent." },
      { en: "ecosystem", pos: "n", ipa: "/ˈiːkoʊsɪstəm/", vi: "hệ sinh thái", example: "Coral reefs damaged by ocean warming require urgent restoration." }
    ],
    grammar: {
      point: "RÚT GỌN MỆNH ĐỀ QUAN HỆ (REDUCED RELATIVE CLAUSES: V-ING, V3/ED & TO-V)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Rút gọn bằng V-ING (Chủ động) vs. V3/ED (Bị động)</strong>
          <ul>
            <li><b>Chủ động ➔ dùng <code>V-ing</code>:</b> Khi đại từ quan hệ làm chủ ngữ của động từ CHỦ ĐỘNG, ta bỏ <code>who/which/that (+ be)</code> và đưa động từ về <code>V-ing</code>.<br/>
            <i>Ví dụ:</i> Factories <s>which emit</s> <b>emitting</b> toxic fumes face heavy fines.</li>
            <li><b>Bị động ➔ dùng <code>V3/ed</code>:</b> Khi đại từ quan hệ làm chủ ngữ của động từ BỊ ĐỘNG, ta bỏ <code>who/which/that + be</code> và giữ lại <code>V3/ed</code>.<br/>
            <i>Ví dụ:</i> Electricity <s>which is generated</s> <b>generated</b> by wind turbines is clean.</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Rút gọn bằng TO-INFINITIVE (to V / to be V3/ed)</strong>
          <p>Khi danh từ đứng trước có các từ giới hạn: <b>Số thứ tự (<code>the first, the second, the last</code>), <code>the only</code>, hoặc So sánh nhất (<code>the best, the largest</code>)</b>, ta rút gọn mệnh đề quan hệ bằng:</p>
          <ul>
            <li><b>Chủ động:</b> <code>to + V(nguyên thể)</code> — <i>She was <b>the first scientist to warn</b> about the glacier melt.</i></li>
            <li><b>Bị động:</b> <code>to be + V3/ed</code> — <i>This is <b>the largest solar farm to be built</b> in Southeast Asia.</i></li>
          </ul>
        </div>
      `,
      examples: [
        { en: "Households <b>installing</b> rooftop photovoltaic panels receive a tax subsidy.", vi: "Các hộ gia đình lắp đặt tấm pin quang điện trên mái nhà được nhận trợ cấp thuế (= which install — chủ động)." },
        { en: "Geothermal heat <b>extracted</b> from underground reservoirs warms the entire district.", vi: "Nhiệt năng địa nhiệt được khai thác từ các túi chứa ngầm sưởi ấm cả khu vực (= which is extracted — bị động)." },
        { en: "Denmark was <b>the first country to build</b> a commercial offshore wind farm.", vi: "Đan Mạch là quốc gia đầu tiên xây dựng trang trại điện gió ngoài khơi thương mại (sau the first ➔ to V)." },
        { en: "Coal-fired boilers are <b>the next appliances to be replaced</b> under the green policy.", vi: "Các nồi hơi đốt than là những thiết bị tiếp theo được thay thế theo chính sách xanh (sau the next + bị động ➔ to be V3)." }
      ],
      commonMistake: {
        wrong: "Solar panels installing on the south roof generate the most electricity.",
        right: "Solar panels **installed** on the south roof generate the most electricity.",
        note: "Tấm pin mặt trời 'ĐƯỢC lắp đặt' (mang nghĩa bị động = which are installed), nên khi rút gọn phải dùng Quá khứ phân từ V3/ed (installed), không dùng V-ing!"
      },
      memoryTip: "3 giây chọn đáp án Rút gọn MĐQH: (1) Thấy the first / the last / the only / so sánh nhất ➔ chọn TO-V (hoặc TO BE V3); (2) Không có từ giới hạn: Tự làm (Chủ động) ➔ V-ING; Bị/được tác động (Bị động) ➔ V3/ED!"
    },
    dialogue: {
      titleVi: "Tình huống: Hai kỹ sư năng lượng trao đổi tại triển lãm công nghệ xanh",
      lines: [
        { speaker: "Kiet", en: "Look at this scale model showing the offshore wind turbines planned for Binh Thuan Province!", vi: "Nhìn mô hình thu nhỏ hiển thị các tua-bin gió ngoài khơi được quy hoạch cho tỉnh Bình Thuận này Kiệt ơi!" },
        { speaker: "Nga", en: "Impressive! Each turbine standing two hundred meters tall can supply power to three thousand households.", vi: "Ấn tượng thật! Mỗi tua-bin cao hai trăm mét có thể cung cấp điện cho ba nghìn hộ gia đình." },
        { speaker: "Kiet", en: "And the clean electricity generated at sea will be transmitted directly to the national grid.", vi: "Và nguồn điện sạch được tạo ra ngoài biển sẽ được truyền tải trực tiếp vào lưới điện quốc gia." },
        { speaker: "Nga", en: "Did you hear that our industrial park was the first zone in the region to decarbonize its logistics fleet?", vi: "Cậu có nghe tin khu công nghiệp của tụi mình là khu vực đầu tiên trong vùng khử cacbon đội xe vận tải không?" },
        { speaker: "Kiet", en: "Yes! Companies switching from fossil fuels to electric vans also receive a generous government subsidy.", vi: "Có! Các công ty chuyển đổi từ nhiên liệu hóa thạch sang xe tải điện cũng nhận được khoản trợ cấp hậu hĩnh từ chính phủ." },
        { speaker: "Nga", en: "It's a great step forward in mitigating climate change and protecting coastal ecosystems.", vi: "Đó là một bước tiến tuyệt vời trong việc giảm nhẹ biến đổi khí hậu và bảo vệ các hệ sinh thái ven biển." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "Power plants ___ fossil fuels account for a large share of global carbon emissions.", options: ["burning", "burned", "to burn"], answer: "burning", explanation: "Rút gọn mệnh đề quan hệ chủ động (Power plants which burn fossil fuels ➔ burning)." },
        { q: "The surplus energy ___ by rooftop photovoltaic panels is stored in lithium batteries.", options: ["producing", "produced", "to produce"], answer: "produced", explanation: "Rút gọn mệnh đề quan hệ bị động (energy which is produced ➔ produced)." },
        { q: "Costa Rica was one of the first developing nations ___ nearly 99% renewable electricity.", options: ["achieving", "achieved", "to achieve"], answer: "to achieve", explanation: "Sau cụm số thứ tự 'one of the first ... nations', rút gọn mệnh đề quan hệ chủ động bằng 'to + V' (to achieve)." },
        { q: "Any industrial facility ___ environmental emission standards will be fined heavily.", options: ["violating", "violated", "be violated"], answer: "violating", explanation: "Cơ sở công nghiệp vi phạm tiêu chuẩn (chủ động: which violates) ➔ rút gọn thành violating." },
        { q: "The climate report ___ by the UN panel yesterday warned of rising sea levels.", options: ["publishing", "published", "to publish"], answer: "published", explanation: "Báo cáo được công bố (bị động: which was published) ➔ rút gọn thành published." },
        { q: "This offshore wind farm is the largest clean-energy project ___ in our province this decade.", options: ["constructing", "to construct", "to be constructed"], answer: "to be constructed", explanation: "Có so sánh nhất 'the largest project' và mang nghĩa bị động (được xây dựng) ➔ to be constructed." },
        { q: "Homeowners ___ for the green retrofitting subsidy must submit their energy audit before June.", options: ["applying", "applied", "to apply"], answer: "applying", explanation: "Chủ nhà nộp đơn xin trợ cấp (chủ động: who apply) ➔ applying." },
        { q: "Mangrove forests ___ along the coastline act as a natural barrier against typhoons.", options: ["planting", "planted", "to plant"], answer: "planted", explanation: "Rừng ngập mặn được trồng dọc bờ biển (bị động: which are planted) ➔ planted." },
        { q: "Dr. Minh was the only Vietnamese delegate ___ a keynote speech at the geothermal summit.", options: ["delivering", "delivered", "to deliver"], answer: "to deliver", explanation: "Sau 'the only + N', rút gọn mệnh đề quan hệ bằng 'to + V' (to deliver)." },
        { q: "Electric buses ___ on the new metro feeder routes produce zero tailpipe emissions.", options: ["operating", "operated", "to operate"], answer: "operating", explanation: "Xe buýt điện hoạt động trên tuyến (nội động từ chủ động: which operate) ➔ operating." }
      ],
      fillBlank: [
        { sentence: "Wind turbines ___ (install) offshore capture stronger and more consistent breezes.", answer: "installed", hint: "Rút gọn bị động (which are installed)" },
        { sentence: "Citizens ___ (use) public transport help mitigate urban air pollution.", answer: "using", hint: "Rút gọn chủ động (who use)" },
        { sentence: "She was the youngest climate scientist ___ (appoint) to the national advisory board.", answer: "to be appointed", hint: "Sau so sánh nhất the youngest + bị động (to be V3)" },
        { sentence: "The geothermal steam ___ (extract) from deep wells drives the power generators.", answer: "extracted", hint: "Rút gọn bị động (which is extracted)" },
        { sentence: "Corporations ___ (pledge) to decarbonize by 2030 must publish annual emission reports.", answer: "pledging", hint: "Rút gọn chủ động (which pledge)" },
        { sentence: "Our university was the first campus in the city ___ (eliminate) single-use plastics.", answer: "to eliminate", hint: "Sau the first + chủ động (to V)" },
        { sentence: "Coral ecosystems ___ (threaten) by ocean acidification need urgent protection.", answer: "threatened", hint: "Rút gọn bị động (which are threatened)" },
        { sentence: "Engineers ___ (work) on smart grid technology met in Da Nang last week.", answer: "working", hint: "Rút gọn chủ động (who work)" }
      ],
      sentenceBuild: [
        { words: ["Electricity", "generated", "by", "solar", "panels", "is", "completely", "clean", "."], answer: "Electricity generated by solar panels is completely clean .", vi: "Điện năng được tạo ra bởi các tấm pin mặt trời là hoàn toàn sạch." },
        { words: ["Companies", "reducing", "carbon", "emissions", "receive", "government", "subsidies", "."], answer: "Companies reducing carbon emissions receive government subsidies .", vi: "Các công ty cắt giảm lượng khí thải cacbon nhận được trợ cấp của chính phủ." },
        { words: ["Norway", "was", "the", "first", "nation", "to", "decarbonize", "public", "ferries", "."], answer: "Norway was the first nation to decarbonize public ferries .", vi: "Na Uy là quốc gia đầu tiên khử cacbon các phà công cộng." },
        { words: ["Forests", "planted", "along", "the", "coast", "protect", "local", "biodiversity", "."], answer: "Forests planted along the coast protect local biodiversity .", vi: "Những cánh rừng được trồng dọc bờ biển bảo vệ đa dạng sinh học địa phương." },
        { words: ["This", "is", "the", "largest", "wind", "turbine", "to", "be", "built", "here", "."], answer: "This is the largest wind turbine to be built here .", vi: "Đây là tua-bin gió lớn nhất được xây dựng tại đây." },
        { words: ["Scientists", "studying", "geothermal", "energy", "discovered", "a", "new", "reservoir", "."], answer: "Scientists studying geothermal energy discovered a new reservoir .", vi: "Các nhà khoa học nghiên cứu năng lượng địa nhiệt đã phát hiện ra một túi chứa mới." }
      ],
      transformation: [
        { sentence: "Homeowners who install photovoltaic cells can sell excess power to the grid. (installing)", answer: "Homeowners installing photovoltaic cells can sell excess power to the grid.", hint: "Rút gọn who install thành installing" },
        { sentence: "The greenhouse gases which are emitted by fossil fuels trap heat in the atmosphere. (emitted)", answer: "The greenhouse gases emitted by fossil fuels trap heat in the atmosphere.", hint: "Bỏ which are, giữ lại V3/ed (emitted)" },
        { sentence: "Dr. Lan was the first researcher who proposed this coastal restoration model. (to)", answer: "Dr. Lan was the first researcher to propose this coastal restoration model.", hint: "Sau the first researcher dùng to propose" },
        { sentence: "This coal plant is the last facility that will be closed under the green transition plan. (to be)", answer: "This coal plant is the last facility to be closed under the green transition plan.", hint: "Sau the last facility dùng to be closed" },
        { sentence: "The subsidies which the government offered encouraged green retrofitting. (offered)", answer: "The subsidies offered by the government encouraged green retrofitting.", hint: "Dùng The subsidies offered by the government..." }
      ],
      review: [
        { sentence: "The national park, ___ (which / that) covers 200 square kilometers, is home to rare primates.", answer: "which", hint: "Ôn tập Day 41: Mệnh đề quan hệ không xác định sau dấu phẩy" },
        { sentence: "We met an ecologist ___ (whose / whom) research helped save the wetland ecosystem.", answer: "whose", hint: "Ôn tập Day 41: Đại từ quan hệ chỉ sở hữu" },
        { sentence: "You ___ (should / unplug) the appliances before leaving for vacation last week.", answer: "should have unplugged", hint: "Ôn tập Day 39: Lời khuyên trong quá khứ" },
        { sentence: "I wish more commuters ___ (use) electric buses every day.", answer: "used", hint: "Ôn tập Day 37: Ước trái với hiện tại" },
        { sentence: "If we had invested in solar power earlier, our electricity bill ___ (be) much lower now.", answer: "would be", hint: "Ôn tập Day 36: Câu điều kiện hỗn hợp" }
      ]
    }
  },

  // ==================== DAY 43 ====================
  {
    day: 43,
    id: "day-43",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Mệnh đề Quan hệ Trang trọng với Giới từ (Preposition + whom/which) — Pháp luật & Quyền công dân",
    titleEn: "Formal Relative Clauses with Prepositions — Law, Rights & Civic Duty",
    dailyGoal: "Sử dụng thuần thục cấu trúc Giới từ + whom/which/whose (in which, to whom, on which, many/most of whom/which) trong văn viết học thuật và pháp lý trang trọng.",
    vocab: [
      { en: "legislation", pos: "n", ipa: "/ˌledʒɪsˈleɪʃn/", vi: "pháp chế, đạo luật được ban hành", example: "The environmental legislation under which the company was prosecuted took effect in 2022." },
      { en: "constitution", pos: "n", ipa: "/ˌkɑːnstɪˈtuːʃn/", vi: "hiến pháp", example: "The constitution guarantees fundamental rights upon which all citizens rely." },
      { en: "clause", pos: "n", ipa: "/klɔːz/", vi: "điều khoản (trong hợp đồng, luật)", example: "Please review Clause 7, in which the tenant's maintenance duties are specified." },
      { en: "amendment", pos: "n", ipa: "/əˈmendmənt/", vi: "sự sửa đổi, bổ sung (luật, hiến pháp)", example: "Parliament passed three amendments, all of which strengthened consumer protection." },
      { en: "jurisdiction", pos: "n", ipa: "/ˌdʒʊrɪsˈdɪkʃn/", vi: "thẩm quyền pháp lý, quyền tài phán", example: "The commercial court has jurisdiction over disputes in which foreign investors are involved." },
      { en: "plaintiff", pos: "n", ipa: "/ˈpleɪntɪf/", vi: "nguyên đơn (người khởi kiện)", example: "The plaintiff to whom the court awarded damages thanked her legal team." },
      { en: "defendant", pos: "n", ipa: "/dɪˈfendənt/", vi: "bị đơn, bị cáo", example: "The defendant, against whom two witnesses testified, maintained his innocence." },
      { en: "verdict", pos: "n", ipa: "/ˈvɜːrdɪkt/", vi: "phán quyết của tòa án", example: "The jury reached a unanimous verdict, with which both legal analysts agreed." },
      { en: "testimony", pos: "n", ipa: "/ˈtestɪmoʊni/", vi: "lời khai nhân chứng trước tòa", example: "The forensic report provided solid evidence on which the witness's testimony was based." },
      { en: "compliance", pos: "n", ipa: "/kəmˈplaɪəns/", vi: "sự tuân thủ quy định/pháp luật", example: "Auditors inspected forty factories, most of which were in full compliance with safety laws." },
      { en: "statute", pos: "n", ipa: "/ˈstætʃuːt/", vi: "đạo luật thành văn, quy chế", example: "This statute sets the maximum penalty for corporate tax evasion." },
      { en: "civic", pos: "adj", ipa: "/ˈsɪvɪk/", vi: "thuộc về công dân, trách nhiệm công dân", example: "Voting in local elections is an essential civic duty." }
    ],
    grammar: {
      point: "MỆNH ĐỀ QUAN HỆ TRANG TRỌNG VỚI GIỚI TỪ (PREPOSITION + WHOM / WHICH / WHOSE)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Đưa Giới từ lên trước Đại từ Quan hệ (Formal Register)</strong>
          <p>Trong văn phong trang trọng (báo chí, học thuật, pháp lý), giới từ đi kèm động từ/tính từ được đảo lên đứng ngay trước đại từ quan hệ:</p>
          <ul>
            <li><b>Với NGƯỜI:</b> <code>Giới từ + WHOM</code> (<b>KHÔNG dùng <i>who</i> hay <i>that</i> ngay sau giới từ!</b>)<br/>
            <i>Ví dụ:</i> The lawyer <b>to whom</b> I spoke (<i>= who/whom I spoke to</i>).</li>
            <li><b>Với VẬT / SỰ VIỆC:</b> <code>Giới từ + WHICH</code> (<b>KHÔNG dùng <i>that</i> ngay sau giới từ!</b>)<br/>
            <i>Ví dụ:</i> The statute <b>under which</b> the case was tried (<i>= which the case was tried under</i>).</li>
            <li><b>Thay thế <code>where / when / why</code>:</b> <code>where = in/at/on which</code> | <code>when = on/in/during which</code> | <code>why = for which</code>.</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Cấu trúc Lượng từ + of whom / of which (Quantifier Relative Clauses)</strong>
          <ul>
            <li><code>all / most / many / some / both / neither / none / two / aRead % + OF WHOM (người) / OF WHICH (vật)</code></li>
            <li><i>Ví dụ:</i> The committee interviewed ten candidates, <b>most of whom</b> had legal degrees. (<i>Không dùng "most of them" nếu nối bằng dấu phẩy!</i>)</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "The judge <b>before whom</b> the defendant appeared is known for her strict impartiality.", vi: "Vị thẩm phán mà bị cáo hầu tòa trước mặt bà ấy nổi tiếng với sự công tâm nghiêm khắc." },
        { en: "This is the constitutional principle <b>upon which</b> our entire legal system is founded.", vi: "Đây là nguyên tắc hiến định mà toàn bộ hệ thống pháp luật của chúng ta được đặt nền tảng trên đó." },
        { en: "Parliament debated five tax amendments, <b>three of which</b> were approved unanimously.", vi: "Quốc hội đã thảo luận năm bản sửa đổi thuế, ba trong số đó đã được thông qua với sự nhất trí tuyệt đối." },
        { en: "The firm hired twelve compliance officers, <b>all of whom</b> speak at least two foreign languages.", vi: "Công ty đã tuyển mười hai chuyên viên tuân thủ, tất cả họ đều nói được ít nhất hai ngoại ngữ." }
      ],
      commonMistake: {
        wrong: "The panel reviewed thirty applications, most of them met the statutory requirements.",
        right: "The panel reviewed thirty applications, **most of which** met the statutory requirements.",
        note: "Khi hai mệnh đề được ngăn cách bằng DẤU PHẨY (không có liên từ 'and'), bắt buộc phải dùng đại từ quan hệ 'most of which' (vật) hoặc 'most of whom' (người), KHÔNG được dùng 'most of them' (lỗi Comma Splice)!"
      },
      memoryTip: "Quy tắc Thép sau Giới từ (in, on, at, to, for, with, of...): Người ➔ WHOM | Vật ➔ WHICH | Sở hữu (+ N) ➔ WHOSE. Tuyệt đối CẤM dùng 'who' và 'that' ngay sau giới từ!"
    },
    dialogue: {
      titleVi: "Tình huống: Hai luật sư trao đổi về hồ sơ một vụ tranh chấp thương mại và bảo vệ người tiêu dùng",
      lines: [
        { speaker: "Lawyer Minh", en: "Have you reviewed the consumer protection statute under which our client is filing the lawsuit?", vi: "Chị đã xem kỹ đạo luật bảo vệ người tiêu dùng mà theo đó thân chủ của chúng ta đang đệ đơn kiện chưa?" },
        { speaker: "Lawyer Trang", en: "Yes. I also examined the service contract, Clause 12 of which clearly states the warranty obligations.", vi: "Rồi. Tôi cũng đã kiểm tra hợp đồng dịch vụ, mà Điều khoản 12 của nó nêu rất rõ các nghĩa vụ bảo hành." },
        { speaker: "Lawyer Minh", en: "How many plaintiffs have joined the class-action suit so far?", vi: "Tính đến nay đã có bao nhiêu nguyên đơn tham gia vụ kiện tập thể này rồi?" },
        { speaker: "Lawyer Trang", en: "Forty-five homeowners, all of whom purchased faulty solar heaters from the defendant's company.", vi: "Bốn mươi lăm chủ nhà, tất cả họ đều đã mua máy nước nóng năng lượng mặt trời bị lỗi từ công ty của bị đơn." },
        { speaker: "Lawyer Minh", en: "And the technical inspector to whom we sent the damaged units has confirmed a manufacturing defect.", vi: "Và thanh tra kỹ thuật người mà chúng ta đã gửi các thiết bị hỏng tới cũng vừa xác nhận có lỗi sản xuất." },
        { speaker: "Lawyer Trang", en: "Excellent. That expert testimony provides a solid foundation on which the court can base its verdict.", vi: "Tuyệt vời. Lời khai chuyên gia đó cung cấp một nền tảng vững chắc mà tòa án có thể dựa vào để đưa ra phán quyết." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "The senior partner to ___ you addressed your inquiry is currently attending a hearing.", options: ["who", "whom", "that"], answer: "whom", explanation: "Đứng ngay sau giới từ 'to' và chỉ người ('The senior partner') bắt buộc dùng 'whom' (không dùng who hay that)." },
        { q: "The environmental statute under ___ the factory was fined was enacted three years ago.", options: ["which", "that", "where"], answer: "which", explanation: "Đứng ngay sau giới từ 'under' và chỉ vật ('The environmental statute') bắt buộc dùng 'which'." },
        { q: "The supreme court heard twelve appeals last month, eight of ___ involved intellectual property rights.", options: ["them", "which", "whom"], answer: "which", explanation: "Nối câu sau dấu phẩy không có 'and', thay cho 'twelve appeals' (vật) ➔ dùng 'eight of which'." },
        { q: "The legal aid clinic assisted fifty tenants, many of ___ had been unfairly evicted.", options: ["whom", "who", "them"], answer: "whom", explanation: "Sau cụm lượng từ + 'of' và chỉ người ('fifty tenants') ➔ dùng 'many of whom'." },
        { q: "Do you know the exact reason for ___ the defendant requested a postponement of the trial?", options: ["why", "which", "that"], answer: "which", explanation: "'the reason for which' = 'the reason why' (đã có giới từ 'for' nên phải đi với 'which')." },
        { q: "The trade agreement, the terms of ___ were negotiated over two years, takes effect in January.", options: ["which", "whose", "that"], answer: "which", explanation: "'the terms of which' (= whose terms) dùng để chỉ sở hữu trang trọng cho danh từ chỉ vật." },
        { q: "The witness on ___ testimony the prosecution relied corroborated the whistleblower's story.", options: ["whom", "which", "whose"], answer: "whose", explanation: "Giới từ 'on' + 'whose + danh từ (testimony)' (rely on someone's testimony)." },
        { q: "That was the historic session during ___ the national assembly ratified the new constitution.", options: ["when", "which", "where"], answer: "which", explanation: "Đã có giới từ 'during' đứng trước nên theo sau phải là đại từ quan hệ 'which' (during which = when)." },
        { q: "The arbitrator with ___ both parties consulted proposed a fair settlement.", options: ["whom", "who", "which"], answer: "whom", explanation: "Cụm động từ 'consult with somebody' ➔ đảo 'with' lên trước người dùng 'with whom'." },
        { q: "The auditor inspected two branches, neither of ___ complied fully with data privacy regulations.", options: ["them", "which", "whom"], answer: "which", explanation: "Thay cho 'two branches' (vật) sau dấu phẩy ➔ 'neither of which'." }
      ],
      fillBlank: [
        { sentence: "The legal advisor to ___ (who / whom) we submitted the contract suggested two amendments.", answer: "whom", hint: "Chỉ người đứng ngay sau giới từ to" },
        { sentence: "The principles upon ___ (which / that) the constitution is built protect every citizen.", answer: "which", hint: "Chỉ vật đứng ngay sau giới từ upon" },
        { sentence: "The panel interviewed six witnesses, all of ___ (whom / them) confirmed the plaintiff's alibi.", answer: "whom", hint: "Nối hai mệnh đề qua dấu phẩy, chỉ người sau of" },
        { sentence: "The company operates three plants, none of ___ (which / them) discharges untreated wastewater.", answer: "which", hint: "Chỉ vật sau none of trong mệnh đề quan hệ" },
        { sentence: "Please read Clause 4, in ___ (where / which) the jurisdiction of the court is defined.", answer: "which", hint: "Đã có giới từ in sẵn ở phía trước" },
        { sentence: "1946 was the year in ___ (which / when) Vietnam adopted its first Constitution.", answer: "which", hint: "in + which = when" },
        { sentence: "The plaintiff, ___ (whose / whom) property was damaged, demanded full compensation.", answer: "whose", hint: "Đại từ sở hữu trước danh từ property" },
        { sentence: "That is the compliance benchmark against ___ (which / that) all suppliers are evaluated.", answer: "which", hint: "evaluate against something ➔ against which" }
      ],
      sentenceBuild: [
        { words: ["The", "judge", "before", "whom", "he", "appeared", "was", "very", "fair", "."], answer: "The judge before whom he appeared was very fair .", vi: "Vị thẩm phán mà anh ấy hầu tòa trước mặt rất công tâm." },
        { words: ["This", "is", "the", "statute", "under", "which", "the", "firm", "was", "fined", "."], answer: "This is the statute under which the firm was fined .", vi: "Đây là đạo luật mà theo đó công ty đã bị phạt." },
        { words: ["We", "called", "ten", "witnesses,", "all", "of", "whom", "testified", "honestly", "."], answer: "We called ten witnesses, all of whom testified honestly .", vi: "Chúng tôi đã triệu tập mười nhân chứng, tất cả họ đều khai trung thực." },
        { words: ["They", "proposed", "four", "amendments,", "two", "of", "which", "were", "adopted", "."], answer: "They proposed four amendments, two of which were adopted .", vi: "Họ đã đề xuất bốn bản sửa đổi, hai trong số đó đã được thông qua." },
        { words: ["The", "evidence", "on", "which", "the", "verdict", "rested", "was", "indisputable", "."], answer: "The evidence on which the verdict rested was indisputable .", vi: "Bằng chứng mà phán quyết dựa vào là không thể chối cãi." },
        { words: ["The", "officer", "to", "whom", "you", "spoke", "handles", "compliance", "issues", "."], answer: "The officer to whom you spoke handles compliance issues .", vi: "Viên chức mà bạn vừa nói chuyện phụ trách các vấn đề tuân thủ." }
      ],
      transformation: [
        { sentence: "The attorney who we relied on won the constitutional case. (whom)", answer: "The attorney on whom we relied won the constitutional case.", hint: "Đưa giới từ on lên trước whom: on whom we relied" },
        { sentence: "The contract that both parties agreed to contains a strict confidentiality clause. (which)", answer: "The contract to which both parties agreed contains a strict confidentiality clause.", hint: "Đưa giới từ to lên trước which: to which both parties agreed" },
        { sentence: "The parliament passed five new laws, and most of them focus on green energy. (which)", answer: "The parliament passed five new laws, most of which focus on green energy.", hint: "Bỏ and, thay most of them bằng most of which" },
        { sentence: "The court summoned eight experts, and all of them corroborated the forensic report. (whom)", answer: "The court summoned eight experts, all of whom corroborated the forensic report.", hint: "Bỏ and, thay all of them bằng all of whom" },
        { sentence: "That was the day when the historic verdict was announced. (on which)", answer: "That was the day on which the historic verdict was announced.", hint: "Thay when bằng on which" }
      ],
      review: [
        { sentence: "Citizens ___ (participate) in public hearings help shape local legislation.", answer: "participating", hint: "Ôn tập Day 42: Rút gọn mệnh đề quan hệ chủ động (V-ing)" },
        { sentence: "Amendments ___ (ratify) by the assembly become law the following month.", answer: "ratified", hint: "Ôn tập Day 42: Rút gọn mệnh đề quan hệ bị động (V3/ed)" },
        { sentence: "She was the first female judge ___ (appoint) to the commercial court.", answer: "to be appointed", hint: "Ôn tập Day 42: Rút gọn sau the first + bị động" },
        { sentence: "The defendant ___ (can't / commit) the crime because he was abroad that week.", answer: "can't have committed", hint: "Ôn tập Day 38: Suy luận phủ định chắc chắn trong quá khứ" },
        { sentence: "You ___ (ought / consult) a legal specialist before signing that lease.", answer: "ought to have consulted", hint: "Ôn tập Day 39: ought to have + V3/ed" }
      ]
    }
  },

  // ==================== DAY 44 ====================
  {
    day: 44,
    id: "day-44",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Mệnh đề Phân từ (Participle Clauses: V-ing, V3/ed, Having + V3) — Y học & Dinh dưỡng",
    titleEn: "Participle Clauses — Medical Breakthroughs & Nutrition",
    dailyGoal: "Sử dụng thành thạo Mệnh đề phân từ (V-ing, V3/ed, Having + V3/ed, Having been + V3/ed) để rút gọn mệnh đề trạng ngữ chỉ thời gian, nguyên nhân và kết quả.",
    vocab: [
      { en: "clinical trial", pos: "n", ipa: "/ˈklɪnɪkl ˈtraɪəl/", vi: "thử nghiệm lâm sàng (y khoa)", example: "Having passed Phase 3 clinical trials, the vaccine was approved for use." },
      { en: "antibiotic", pos: "n", ipa: "/ˌæntibaɪˈɑːtɪk/", vi: "thuốc kháng sinh", example: "Prescribed too frequently, antibiotics can lose their effectiveness." },
      { en: "immune system", pos: "n", ipa: "/ɪˈmjuːn ˈsɪstəm/", vi: "hệ miễn dịch", example: "Eating a diet rich in vitamins strengthens the human immune system." },
      { en: "pathogen", pos: "n", ipa: "/ˈpæθədʒən/", vi: "tác nhân gây bệnh, mầm bệnh", example: "Having identified the viral pathogen, researchers developed a rapid test." },
      { en: "metabolism", pos: "n", ipa: "/məˈtæbəlɪzəm/", vi: "quá trình trao đổi chất", example: "Regular aerobic exercise boosts your metabolism and cardiovascular health." },
      { en: "chronic", pos: "adj", ipa: "/ˈkrɑːnɪk/", vi: "mãn tính (bệnh kéo dài)", example: "Left untreated, high blood pressure can lead to chronic heart disease." },
      { en: "deficiency", pos: "n", ipa: "/dɪˈfɪʃnsi/", vi: "sự thiếu hụt (vi chất, dinh dưỡng)", example: "Suffering from iron deficiency, the patient felt constantly fatigued." },
      { en: "symptom", pos: "n", ipa: "/ˈsɪmptəm/", vi: "triệu chứng bệnh", example: "Noticing mild flu symptoms, she wore a mask to protect her colleagues." },
      { en: "vaccine", pos: "n", ipa: "/vækˈsiːn/", vi: "vắc-xin", example: "Stored at sub-zero temperatures, the mRNA vaccine remains stable for months." },
      { en: "diagnostic", pos: "adj", ipa: "/ˌdaɪəɡˈnɑːstɪk/", vi: "thuộc về chẩn đoán bệnh", example: "Using advanced diagnostic imaging, doctors detected the tumor early." },
      { en: "sedentary", pos: "adj", ipa: "/ˈsednteri/", vi: "ít vận động, ngồi nhiều", example: "Leading a sedentary lifestyle increases the risk of metabolic disorders." },
      { en: "nutrient", pos: "n", ipa: "/ˈnuːtriənt/", vi: "chất dinh dưỡng", example: "Steamed gently, green vegetables retain most of their essential nutrients." }
    ],
    grammar: {
      point: "MỆNH ĐỀ PHÂN TỪ ĐỒNG CHỦ NGỮ (PARTICIPLE CLAUSES: V-ING, V3/ED, HAVING + V3)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Bốn Dạng Mệnh đề Phân từ Trọng tâm (Khi 2 mệnh đề CÙNG CHỦ NGỮ)</strong>
          <ul>
            <li><b>Hiện tại phân từ (<code>V-ing..., S + V</code> — Chủ động, xảy ra đồng thời hoặc là nguyên nhân):</b><br/>
            <i>Ví dụ:</i> <b>Feeling</b> dizzy (= <i>Because she felt dizzy</i>), the patient sat down.</li>
            <li><b>Quá khứ phân từ (<code>V3/ed..., S + V</code> — Bị động, thường mang nghĩa nguyên nhân/điều kiện):</b><br/>
            <i>Ví dụ:</i> <b>Stored</b> in a cool place (= <i>If it is stored...</i>), this medicine lasts two years.</li>
            <li><b>Phân từ hoàn thành Chủ động (<code>Having + V3/ed..., S + V</code> — Nhấn mạnh việc đã hoàn tất TRƯỚC vế sau):</b><br/>
            <i>Ví dụ:</i> <b>Having completed</b> the clinical trial (= <i>After they had completed...</i>), the team published the results.</li>
            <li><b>Phân từ hoàn thành Bị động (<code>Having been + V3/ed..., S + V</code>):</b><br/>
            <i>Ví dụ:</i> <b>Having been vaccinated</b> twice, he had strong immunity.</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Quy tắc Sống còn: Đồng Chủ ngữ (Avoiding Dangling Participles)</strong>
          <p>Chủ ngữ ẩn của cụm phân từ đầu câu <b>BẮT BUỘC phải chính là Chủ ngữ đứng ngay sau dấu phẩy</b>! Với dạng phủ định, đặt <code>Not</code> lên đầu cụm: <code>Not knowing... / Not having been tested...</code></p>
        </div>
      `,
      examples: [
        { en: "<b>Having isolated</b> the pathogen, the microbiologists began developing a targeted vaccine.", vi: "Sau khi đã phân lập được mầm bệnh, các nhà vi sinh vật học bắt đầu phát triển một loại vắc-xin nhắm trúng đích." },
        { en: "<b>Taken</b> daily with meals, this supplement prevents vitamin deficiency.", vi: "Được uống hàng ngày cùng bữa ăn, thực phẩm bổ sung này giúp ngăn ngừa sự thiếu hụt vitamin (Bị động = If it is taken)." },
        { en: "<b>Not wanting</b> to overuse antibiotics, the physician recommended rest and hydration.", vi: "Không muốn lạm dụng thuốc kháng sinh, vị bác sĩ đã khuyên bệnh nhân nghỉ ngơi và bù nước." },
        { en: "<b>Having been diagnosed</b> at an early stage, the chronic condition was successfully managed.", vi: "Do đã được chẩn đoán ở giai đoạn sớm, căn bệnh mãn tính đó đã được kiểm soát thành công." }
      ],
      commonMistake: {
        wrong: "Examining the X-ray carefully, a tiny fracture was found by the doctor.",
        right: "Examining the X-ray carefully, **the doctor** found a tiny fracture.",
        note: "Lỗi Dangling Participle (Phân từ lơ lửng): Người 'xem phim X-quang' phải là 'the doctor', không thể là 'a tiny fracture' (vết nứt xương không biết xem X-quang)! Do đó chủ ngữ ngay sau dấu phẩy phải là 'the doctor'."
      },
      memoryTip: "Nhìn ngay CHỦ NGỮ SAU DẤU PHẨY để chọn dạng Phân từ đầu câu: Chủ ngữ TỰ LÀM đồng thời ➔ V-ing | Chủ ngữ ĐÃ LÀM XONG TRƯỚC ➔ Having + V3 | Chủ ngữ BỊ/ĐƯỢC TÁC ĐỘNG ➔ V3/ed (hoặc Having been V3)!"
    },
    dialogue: {
      titleVi: "Tình huống: Bác sĩ dinh dưỡng tư vấn lối sống lành mạnh cho một nhân viên văn phòng",
      lines: [
        { speaker: "Dr. Thuy", en: "Having reviewed your blood test results, I have some good news and a few recommendations, Nam.", vi: "Sau khi đã xem kỹ kết quả xét nghiệm máu của anh, tôi có vài tin tốt và một số khuyến nghị đây Nam." },
        { speaker: "Nam", en: "Thank you, Doctor. Working twelve hours a day at my desk, I've been feeling exhausted lately.", vi: "Cảm ơn bác sĩ. Do làm việc mười hai tiếng mỗi ngày tại bàn giấy, dạo này tôi cứ thấy kiệt sức." },
        { speaker: "Dr. Thuy", en: "Leading such a sedentary lifestyle, many office workers experience a slower metabolism and vitamin D deficiency.", vi: "Vì có lối sống ít vận động như vậy, nhiều nhân viên văn phòng gặp phải tình trạng trao đổi chất chậm hơn và thiếu hụt vitamin D." },
        { speaker: "Nam", en: "Should I take high-dose supplements or antibiotics to boost my immune system?", vi: "Tôi có nên uống thực phẩm chức năng liều cao hay thuốc kháng sinh để tăng cường hệ miễn dịch không ạ?" },
        { speaker: "Dr. Thuy", en: "Definitely not antibiotics! Designed only for bacterial infections, antibiotics cannot treat fatigue or viral symptoms.", vi: "Tuyệt đối không dùng kháng sinh nhé! Vì chỉ được thiết kế cho nhiễm trùng vi khuẩn, kháng sinh không thể trị mệt mỏi hay triệu chứng do vi-rút." },
        { speaker: "Nam", en: "I understand. Having learned how vital whole nutrients and brisk walking are, I'll change my daily routine starting today.", vi: "Tôi hiểu rồi. Sau khi đã hiểu các dưỡng chất tự nhiên và việc đi bộ nhanh quan trọng thế nào, tôi sẽ thay đổi thói quen hàng ngày ngay từ hôm nay." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "___ the Phase 3 clinical trial successfully, the pharmaceutical team applied for regulatory approval.", options: ["Completing", "Having completed", "Completed"], answer: "Having completed", explanation: "Hành động hoàn thành thử nghiệm lâm sàng xảy ra TRƯỚC hành động nộp đơn xin cấp phép và mang nghĩa chủ động ➔ Having completed." },
        { q: "___ according to the doctor's instructions, this medication has very few side effects.", options: ["Taking", "Taken", "Having taken"], answer: "Taken", explanation: "Chủ ngữ sau dấu phẩy là 'this medication' (thuốc ĐƯỢC uống — bị động) ➔ dùng Quá khứ phân từ V3/ed (Taken)." },
        { q: "___ that the patient was allergic to penicillin, the nurse immediately alerted the surgeon.", options: ["Realizing", "Realized", "Been realized"], answer: "Realizing", explanation: "Chủ ngữ 'the nurse' chủ động nhận ra và báo ngay cho bác sĩ phẫu thuật ➔ Realizing." },
        { q: "___ for over six hours at room temperature, the vaccine doses had to be discarded.", options: ["Having left", "Having been left", "Leaving"], answer: "Having been left", explanation: "Chủ ngữ 'the vaccine doses' BỊ để ở nhiệt độ phòng suốt hơn 6 giờ trước khi bị hủy ➔ Phân từ hoàn thành bị động (Having been left)." },
        { q: "___ how to interpret the diagnostic scan, the intern asked the chief radiologist for guidance.", options: ["Not knowing", "Knowing not", "Not known"], answer: "Not knowing", explanation: "Phủ định của mệnh đề phân từ chủ động: 'Not + V-ing' (Not knowing)." },
        { q: "Cooked at excessively high heat, fresh vegetables lose many of their water-soluble ___.", options: ["nutrients", "pathogens", "symptoms"], answer: "nutrients", explanation: "Rau tươi nấu ở nhiệt độ quá cao sẽ mất nhiều dưỡng chất (nutrients) hòa tan trong nước." },
        { q: "___ a sedentary lifestyle for a decade, he decided to join a marathon training club.", options: ["Having led", "Led", "Being led"], answer: "Having led", explanation: "Chủ ngữ 'he' đã trải qua lối sống ít vận động suốt 1 thập kỷ trước khi quyết định thay đổi ➔ Having led." },
        { q: "Examining the blood sample under the microscope, ___.", options: ["the pathogen was identified by the lab technician", "the lab technician identified the pathogen", "a rare pathogen appeared on the slide"], answer: "the lab technician identified the pathogen", explanation: "Chủ ngữ ngay sau dấu phẩy phải là người thực hiện hành động 'Examining the blood sample' ➔ 'the lab technician'." },
        { q: "___ untreated for years, chronic stress can weaken the body's immune system.", options: ["Leaving", "Left", "Having left"], answer: "Left", explanation: "'chronic stress' bị bỏ mặc không điều trị (bị động: If it is left untreated) ➔ Left." },
        { q: "___ by the promising clinical data, investors funded the new diagnostic startup.", options: ["Convincing", "Convinced", "Having convinced"], answer: "Convinced", explanation: "Các nhà đầu tư BỊ thuyết phục bởi dữ liệu lâm sàng (Because they were convinced) ➔ Convinced." }
      ],
      fillBlank: [
        { sentence: "___ (Complete) her medical residency in Hanoi, Dr. Mai volunteered at a highland clinic.", answer: "Having completed", hint: "Phân từ hoàn thành chủ động (Having + V3)" },
        { sentence: "___ (Store) in a dark, dry cabinet, these herbal capsules remain effective for eighteen months.", answer: "Stored", hint: "Phân từ quá khứ bị động (V3/ed đứng đầu câu)" },
        { sentence: "___ (Not / want) to disturb the recovering patient, the nurse tiptoed out of the ward.", answer: "Not wanting", hint: "Phân từ hiện tại phủ định (Not + V-ing)" },
        { sentence: "___ (Have / test) on ten thousand volunteers, the new vaccine proved safe and effective.", answer: "Having been tested", hint: "Phân từ hoàn thành bị động (Having been + V3)" },
        { sentence: "___ (Notice) early symptoms of dehydration, the coach ordered the athletes to rest in the shade.", answer: "Noticing", hint: "Phân từ hiện tại chủ động đồng thời" },
        { sentence: "___ (Prescribe) unnecessarily for viral colds, antibiotics can trigger drug resistance.", answer: "Prescribed", hint: "Kháng sinh được kê đơn (bị động ➔ V3/ed)" },
        { sentence: "___ (Not / receive) the diagnostic report yet, the doctor postponed the surgery.", answer: "Not having received", hint: "Not + having + V3 (chưa nhận được trước đó)" },
        { sentence: "___ (Encourage) by her nutritionist, she replaced sugary drinks with herbal tea.", answer: "Encouraged", hint: "Được khích lệ bởi chuyên gia dinh dưỡng (V3/ed)" }
      ],
      sentenceBuild: [
        { words: ["Having", "completed", "the", "clinical", "trial,", "they", "published", "the", "results", "."], answer: "Having completed the clinical trial, they published the results .", vi: "Sau khi hoàn thành thử nghiệm lâm sàng, họ đã công bố kết quả." },
        { words: ["Taken", "regularly,", "this", "vitamin", "prevents", "nutritional", "deficiency", "."], answer: "Taken regularly, this vitamin prevents nutritional deficiency .", vi: "Được uống đều đặn, loại vitamin này ngăn ngừa sự thiếu hụt dinh dưỡng." },
        { words: ["Not", "knowing", "the", "cause", "of", "the", "symptoms,", "he", "consulted", "a", "specialist", "."], answer: "Not knowing the cause of the symptoms, he consulted a specialist .", vi: "Không biết nguyên nhân của các triệu chứng, anh ấy đã tham vấn bác sĩ chuyên khoa." },
        { words: ["Having", "been", "vaccinated,", "the", "children", "developed", "strong", "immunity", "."], answer: "Having been vaccinated, the children developed strong immunity .", vi: "Sau khi đã được tiêm vắc-xin, bọn trẻ đã phát triển khả năng miễn dịch mạnh mẽ." },
        { words: ["Leading", "a", "sedentary", "lifestyle", "slows", "down", "your", "metabolism", "."], answer: "Leading a sedentary lifestyle slows down your metabolism .", vi: "Có lối sống ít vận động làm chậm quá trình trao đổi chất của bạn." },
        { words: ["Using", "diagnostic", "imaging,", "the", "surgeon", "located", "the", "problem", "."], answer: "Using diagnostic imaging, the surgeon located the problem .", vi: "Sử dụng hình ảnh chẩn đoán, bác sĩ phẫu thuật đã xác định được vị trí vấn đề." }
      ],
      transformation: [
        { sentence: "After the researchers had identified the pathogen, they designed an antibody test. (Having)", answer: "Having identified the pathogen, the researchers designed an antibody test.", hint: "Rút gọn mệnh đề After + had V3 thành Having + V3" },
        { sentence: "If vegetables are steamed lightly, they retain their natural nutrients. (Steamed)", answer: "Steamed lightly, vegetables retain their natural nutrients.", hint: "Rút gọn mệnh đề bị động thành V3/ed đầu câu" },
        { sentence: "Because she didn't want to ignore the chronic pain, she booked a diagnostic scan. (Not)", answer: "Not wanting to ignore the chronic pain, she booked a diagnostic scan.", hint: "Dùng Not wanting to ignore..." },
        { sentence: "After the medical instruments had been sterilized, they were placed in sealed trays. (Having been)", answer: "Having been sterilized, the medical instruments were placed in sealed trays.", hint: "Dùng Having been sterilized, the medical instruments..." },
        { sentence: "Because the patient suffered from severe iron deficiency, he needed dietary supplements. (Suffering)", answer: "Suffering from severe iron deficiency, the patient needed dietary supplements.", hint: "Dùng Suffering from severe iron deficiency, the patient..." }
      ],
      review: [
        { sentence: "The hospital recruited twenty nurses, most of ___ (whom / who) had intensive-care experience.", answer: "whom", hint: "Ôn tập Day 43: Lượng từ + of whom" },
        { sentence: "That is the medical journal in ___ (which / where) her study was published.", answer: "which", hint: "Ôn tập Day 43: Giới từ + which" },
        { sentence: "Patients ___ (recover) from surgery require a high-protein diet.", answer: "recovering", hint: "Ôn tập Day 42: Rút gọn mệnh đề quan hệ chủ động" },
        { sentence: "Pasteur was one of the first scientists ___ (prove) the germ theory of disease.", answer: "to prove", hint: "Ôn tập Day 42: Rút gọn sau the first bằng to V" },
        { sentence: "Penicillin, ___ (which / that) was discovered in 1928, revolutionized modern medicine.", answer: "which", hint: "Ôn tập Day 41: Mệnh đề quan hệ không xác định sau dấu phẩy" }
      ]
    }
  },

  // ==================== DAY 45 (MILESTONE EXAM 9) ====================
  {
    day: 45,
    id: "day-45",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: true,
    estimatedMinutes: 35,
    title: "Milestone Exam 9: Ôn tập & Kiểm tra Ngày 41–44 — Phát triển Bền vững Toàn cầu",
    titleEn: "Milestone Exam 9 (Days 41–44) — Global Sustainability & Public Policy",
    dailyGoal: "Kiểm tra toàn diện hệ thống Mệnh đề Quan hệ Nâng cao & Mệnh đề Phân từ (Ngày 41–44): Defining/Non-defining, Reduced Relative Clauses, Preposition + whom/which, và Participle Clauses.",
    vocab: [
      { en: "sustainability", pos: "n", ipa: "/səˌsteɪnəˈbɪləti/", vi: "tính bền vững (môi trường, kinh tế)", example: "Environmental sustainability lies at the heart of our urban master plan." },
      { en: "circular economy", pos: "n", ipa: "/ˈsɜːrkjələr ɪˈkɑːnəmi/", vi: "kinh tế tuần hoàn (tái chế, tái sử dụng tối đa)", example: "In a circular economy, industrial waste is repurposed as raw material." },
      { en: "carbon-neutral", pos: "adj", ipa: "/ˌkɑːrbən ˈnuːtrəl/", vi: "trung hòa cacbon", example: "The airline pledged to become carbon-neutral by investing in sustainable aviation fuel." },
      { en: "stewardship", pos: "n", ipa: "/ˈstuːərdʃɪp/", vi: "trách nhiệm gìn giữ, quản lý bền vững", example: "Responsible forest stewardship protects both timber resources and wildlife." },
      { en: "afforestation", pos: "n", ipa: "/əˌfɔːrɪˈsteɪʃn/", vi: "việc trồng rừng mới trên đất trống", example: "Afforestation projects planted ten million native trees across the arid plateau." },
      { en: "biodegradable", pos: "adj", ipa: "/ˌbaɪoʊdɪˈɡreɪdəbl/", vi: "có thể phân hủy sinh học tự nhiên", example: "Supermarkets switched to biodegradable packaging made from cassava starch." },
      { en: "microplastics", pos: "n", ipa: "/ˈmaɪkroʊplæstɪks/", vi: "hạt vi nhựa", example: "Marine biologists found microplastics in deep-sea organisms." },
      { en: "desalination", pos: "n", ipa: "/ˌdiːsælɪˈneɪʃn/", vi: "quá trình khử mặn nước biển", example: "Solar-powered desalination plants supply fresh water to coastal towns." },
      { en: "agroecology", pos: "n", ipa: "/ˌæɡroʊiˈkɑːlədʒi/", vi: "nông nghiệp sinh thái", example: "Practicing agroecology, farmers restore soil fertility without chemical pesticides." },
      { en: "aquifer", pos: "n", ipa: "/ˈækwɪfər/", vi: "tầng ngậm nước ngầm", example: "Over-pumping has depleted the underground aquifer upon which local farms depend." },
      { en: "conservation", pos: "n", ipa: "/ˌkɑːnsərˈveɪʃn/", vi: "sự bảo tồn tài nguyên thiên nhiên", example: "Wetland conservation plays a vital role in flood control." },
      { en: "ecological", pos: "adj", ipa: "/ˌiːkəˈlɑːdʒɪkl/", vi: "thuộc về sinh thái học", example: "Restoring the coral reef re-established the bay's ecological balance." }
    ],
    grammar: {
      point: "TỔNG ÔN CHẶNG 5 PHẦN 3 (NGÀY 41–44): MỆNH ĐỀ QUAN HỆ NÂNG CAO & MỆNH ĐỀ PHÂN TỪ",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Hệ thống Mệnh đề Quan hệ Chuẩn Học thuật (Days 41–43)</strong>
          <ul>
            <li><b>Non-defining (Có dấu phẩy):</b> Không dùng <code>that</code>; dùng <code>, which</code> để thay thế cho cả mệnh đề phía trước; <code>whose + N</code> chỉ sở hữu cho cả người và vật.</li>
            <li><b>Rút gọn MĐQH (Reduced):</b> Chủ động ➔ <code>V-ing</code> | Bị động ➔ <code>V3/ed</code> | Sau <i>the first, the last, the only, so sánh nhất</i> ➔ <code>to V / to be V3/ed</code>.</li>
            <li><b>Giới từ + Đại từ quan hệ:</b> <code>Giới từ + whom</code> (người) / <code>which</code> (vật) / <code>whose + N</code> | Lượng từ: <code>all / most / many / none / two + of whom / of which</code>.</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Mệnh đề Phân từ Đồng Chủ ngữ (Participle Clauses — Day 44)</strong>
          <ul>
            <li><b>Đầu câu (cùng chủ ngữ với mệnh đề chính):</b> Chủ động đồng thời ➔ <code>V-ing</code> | Chủ động xảy ra trước ➔ <code>Having + V3/ed</code> | Bị động ➔ <code>V3/ed</code> hoặc <code>Having been + V3/ed</code>.</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "The desalination plant, <b>which is powered</b> by offshore wind turbines, supplies water to fifty villages.", vi: "Nhà máy khử mặn nước biển, nơi được vận hành bằng các tua-bin gió ngoài khơi, cung cấp nước cho 50 ngôi làng." },
        { en: "Supermarkets <b>switching</b> to biodegradable bags have reduced plastic waste by 60%, <b>which inspires</b> other retailers.", vi: "Các siêu thị chuyển sang túi phân hủy sinh học đã giảm 60% rác thải nhựa, điều này truyền cảm hứng cho các nhà bán lẻ khác." },
        { en: "The environmental summit was attended by forty ministers, <b>all of whom</b> signed the carbon-neutrality accord.", vi: "Hội nghị thượng đỉnh môi trường có 40 bộ trưởng tham dự, tất cả họ đều đã ký hiệp ước trung hòa cacbon." },
        { en: "<b>Having depleted</b> the underground aquifer, the region had to invest in rainwater harvesting.", vi: "Sau khi đã làm cạn kiệt tầng nước ngầm, khu vực này buộc phải đầu tư vào hệ thống thu gom nước mưa." }
      ],
      commonMistake: {
        wrong: "Having polluted by industrial waste, the river required a ten-year ecological restoration.",
        right: "**Having been polluted** (OR: **Polluted**) by industrial waste, the river required a ten-year ecological restoration.",
        note: "Chủ ngữ sau dấu phẩy là 'the river' (dòng sông BỊ ô nhiễm bởi chất thải công nghiệp — bị động), nên cụm phân từ đầu câu phải ở dạng bị động: 'Having been polluted' hoặc 'Polluted'!"
      },
      memoryTip: "Chiến thuật làm bài Milestone 9: (1) Kiểm tra dấu phẩy và giới từ trước đại từ quan hệ; (2) Xác định Chủ động (V-ing) hay Bị động (V3/ed); (3) Kiểm tra chủ ngữ ngay sau dấu phẩy của câu Participle Clause!"
    },
    dialogue: null,
    exercises: {
      multipleChoice: [
        { q: "Cuc Phuong National Park, ___ was established in 1962, is Vietnam's oldest nature reserve.", options: ["that", "which", "where"], answer: "which", explanation: "Mệnh đề quan hệ không xác định sau dấu phẩy làm chủ ngữ cho 'was established' ➔ dùng which." },
        { q: "Packaging ___ from biodegradable cassava starch decomposes naturally within months.", options: ["making", "made", "to make"], answer: "made", explanation: "Rút gọn mệnh đề quan hệ bị động (Packaging which is made from... ➔ made)." },
        { q: "The international treaty under ___ countries pledged to cut microplastics was ratified in Geneva.", options: ["which", "that", "where"], answer: "which", explanation: "Sau giới từ 'under' và chỉ vật ('The international treaty') bắt buộc dùng 'which'." },
        { q: "___ the Phase 3 clinical trial, the new malaria vaccine was approved by the WHO.", options: ["Having passed", "Passing", "Passed"], answer: "Having passed", explanation: "Chủ ngữ 'the new malaria vaccine' đã vượt qua (pass — chủ động) thử nghiệm lâm sàng TRƯỚC khi được phê duyệt ➔ Having passed." },
        { q: "The panel reviewed twelve afforestation proposals, eight of ___ met the sustainability criteria.", options: ["them", "which", "whom"], answer: "which", explanation: "Nối hai mệnh đề bằng dấu phẩy, thay cho 'twelve afforestation proposals' (vật) ➔ eight of which." },
        { q: "Copenhagen aims to become the first major capital ___ completely carbon-neutral.", options: ["becoming", "to become", "become"], answer: "to become", explanation: "Sau 'the first + N', rút gọn mệnh đề quan hệ bằng 'to + V' (to become)." },
        { q: "___ gently over boiling water, green vegetables retain their essential nutrients.", options: ["Steaming", "Steamed", "Having steamed"], answer: "Steamed", explanation: "Rau xanh ĐƯỢC hấp nhẹ (bị động: When they are steamed) ➔ Steamed." },
        { q: "We consulted an agroecology specialist ___ research helped restore the depleted soil.", options: ["whom", "whose", "which"], answer: "whose", explanation: "Đại từ quan hệ chỉ sở hữu trước danh từ 'research' ➔ whose." },
        { q: "The municipality banned single-use foam boxes, ___ drastically reduced litter along the coast.", options: ["that", "which", "what"], answer: "which", explanation: "', which' thay thế cho toàn bộ mệnh đề đứng trước dấu phẩy." },
        { q: "___ how harmful microplastics are to marine ecosystems, the students organized a beach cleanup.", options: ["Realizing", "Realized", "Been realized"], answer: "Realizing", explanation: "Chủ ngữ 'the students' chủ động nhận ra (Because they realized...) ➔ Realizing." }
      ],
      fillBlank: [
        { sentence: "The desalination facility ___ (construct) on the island last year supplies clean water to ten thousand residents.", answer: "constructed", hint: "Rút gọn mệnh đề quan hệ bị động (V3/ed)" },
        { sentence: "We interviewed thirty local farmers, most of ___ (whom / them) have adopted agroecology.", answer: "whom", hint: "Lượng từ + of whom trong mệnh đề quan hệ chỉ người" },
        { sentence: "___ (Have / deplete) their fossil fuel reserves, the island nation switched to geothermal and wind power.", answer: "Having depleted", hint: "Phân từ hoàn thành chủ động (Having + V3)" },
        { sentence: "The underground aquifer upon ___ (which / that) the valley depends is being recharged.", answer: "which", hint: "Sau giới từ upon chỉ vật" },
        { sentence: "She was the youngest conservationist ___ (receive) the global stewardship award.", answer: "to receive", hint: "Sau so sánh nhất the youngest dùng to V" },
        { sentence: "___ (Leave) untreated, chronic vitamin deficiency can weaken the immune system.", answer: "Left", hint: "Phân từ quá khứ bị động đầu câu (V3 của leave)" },
        { sentence: "Hoi An, ___ (where / which) visitors can admire centuries-old wooden houses, promotes sustainable tourism.", answer: "where", hint: "Trạng từ quan hệ chỉ nơi chốn (+ S + V)" },
        { sentence: "___ (Not / know) whether the tap water was filtered, the hikers boiled it first.", answer: "Not knowing", hint: "Phân từ hiện tại phủ định (Not + V-ing)" }
      ],
      sentenceBuild: [
        { words: ["Products", "made", "from", "biodegradable", "materials", "protect", "the", "ecosystem", "."], answer: "Products made from biodegradable materials protect the ecosystem .", vi: "Các sản phẩm được làm từ vật liệu phân hủy sinh học giúp bảo vệ hệ sinh thái." },
        { words: ["The", "summit", "at", "which", "they", "met", "focused", "on", "sustainability", "."], answer: "The summit at which they met focused on sustainability .", vi: "Hội nghị thượng đỉnh nơi họ gặp nhau tập trung vào tính bền vững." },
        { words: ["We", "tested", "ten", "water", "samples,", "none", "of", "which", "contained", "microplastics", "."], answer: "We tested ten water samples, none of which contained microplastics .", vi: "Chúng tôi đã kiểm tra mười mẫu nước, không mẫu nào trong đó chứa hạt vi nhựa." },
        { words: ["Having", "installed", "solar", "panels,", "the", "factory", "became", "carbon-neutral", "."], answer: "Having installed solar panels, the factory became carbon-neutral .", vi: "Sau khi lắp đặt các tấm pin mặt trời, nhà máy đã trở nên trung hòa cacbon." },
        { words: ["She", "was", "the", "first", "architect", "to", "design", "a", "zero-waste", "edifice", "."], answer: "She was the first architect to design a zero-waste edifice .", vi: "Cô ấy là kiến trúc sư đầu tiên thiết kế một công trình không rác thải." },
        { words: ["Stored", "properly,", "these", "seeds", "remain", "viable", "for", "decades", "."], answer: "Stored properly, these seeds remain viable for decades .", vi: "Được bảo quản đúng cách, những hạt giống này giữ được khả năng nảy mầm trong nhiều thập kỷ." }
      ],
      transformation: [
        { sentence: "Enterprises that adopt a circular economy model minimize industrial waste. (adopting)", answer: "Enterprises adopting a circular economy model minimize industrial waste.", hint: "Rút gọn mệnh đề quan hệ chủ động bằng V-ing" },
        { sentence: "The panel interviewed eight climate scientists, and all of them supported afforestation. (whom)", answer: "The panel interviewed eight climate scientists, all of whom supported afforestation.", hint: "Thay and all of them bằng all of whom" },
        { sentence: "After the city had upgraded its public transit grid, it reduced congestion significantly. (Having)", answer: "Having upgraded its public transit grid, the city reduced congestion significantly.", hint: "Rút gọn bằng Having + V3/ed đầu câu" },
        { sentence: "The statute that the prosecutor referred to regulates toxic emissions. (which)", answer: "The statute to which the prosecutor referred regulates toxic emissions.", hint: "Đưa giới từ to lên trước which" },
        { sentence: "Because the coral reef was damaged by rising temperatures, it required urgent conservation. (Damaged)", answer: "Damaged by rising temperatures, the coral reef required urgent conservation.", hint: "Rút gọn mệnh đề bị động thành Damaged by..." }
      ],
      review: [
        { sentence: "You ___ (need / not / print) the agenda yesterday because everyone had it on their tablets.", answer: "needn't have printed", hint: "Ôn tập Day 39: Đã trót làm việc không cần thiết trong quá khứ" },
        { sentence: "The ancient harbor ___ (must / submerge) after a powerful earthquake centuries ago.", answer: "must have been submerged", hint: "Ôn tập Day 38: Suy luận quá khứ (bến cảng bị nhấn chìm)" },
        { sentence: "It's high time we ___ (transition) toward a circular economy.", answer: "transitioned", hint: "Ôn tập Day 37: It's high time + S + V2/ed" },
        { sentence: "If they ___ (protect) the mangrove forest in the 1990s, coastal erosion wouldn't be so severe today.", answer: "had protected", hint: "Ôn tập Day 36: Câu điều kiện hỗn hợp (Quá khứ ➔ Hiện tại)" },
        { sentence: "Had we ___ (foresee) the drought, we would have conserved the aquifer.", answer: "foreseen", hint: "Ôn tập Day 34: Đảo ngữ câu điều kiện loại 3" }
      ]
    }
  },

  // ==================== DAY 46 ====================
  {
    day: 46,
    id: "day-46",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Thì Tương lai hoàn thành (Future Perfect: will have + V3) — Khám phá Vũ trụ",
    titleEn: "Future Perfect Tense — Space Exploration & Astronomy",
    dailyGoal: "Làm chủ cấu trúc và cách dùng thì Tương lai hoàn thành (will have + V3/ed) để dự đoán những mục tiêu, thành tựu sẽ hoàn tất trước một thời điểm hoặc hành động khác trong tương lai.",
    vocab: [
      { en: "orbit", pos: "n", ipa: "/ˈɔːrbɪt/", vi: "quỹ đạo (quay quanh hành tinh/ngôi sao)", example: "By tomorrow morning, the communications satellite will have entered geostationary orbit." },
      { en: "spacecraft", pos: "n", ipa: "/ˈspeɪskræft/", vi: "tàu vũ trụ", example: "By 2035, unmanned spacecraft will have collected rock samples from Jupiter's moons." },
      { en: "lunar", pos: "adj", ipa: "/ˈluːnər/", vi: "thuộc về Mặt Trăng", example: "Space agencies plan to build a permanent lunar base within the next decade." },
      { en: "rover", pos: "n", ipa: "/ˈroʊvər/", vi: "xe tự hành thám hiểm bề mặt hành tinh", example: "By December, the Mars rover will have traveled fifty kilometers across the crater." },
      { en: "observatory", pos: "n", ipa: "/əbˈzɜːrvətɔːri/", vi: "đài thiên văn", example: "Astronomers at the mountain observatory discovered three new exoplanets." },
      { en: "exoplanet", pos: "n", ipa: "/ˈeksoʊplænɪt/", vi: "ngoại hành tinh (hành tinh ngoài Hệ Mặt Trời)", example: "By 2030, space telescopes will have cataloged thousands of Earth-like exoplanets." },
      { en: "payload", pos: "n", ipa: "/ˈpeɪloʊd/", vi: "tải trọng mang theo (của tên lửa, tàu vũ trụ)", example: "The reusable rocket successfully deployed its scientific payload into low Earth orbit." },
      { en: "cosmos", pos: "n", ipa: "/ˈkɑːzmoʊs/", vi: "vũ trụ bao la", example: "Infrared telescopes allow humanity to peer deeper into the ancient cosmos." },
      { en: "propulsion", pos: "n", ipa: "/prəˈpʌlʃn/", vi: "hệ thống đẩy, động lực đẩy", example: "Engineers are testing ion propulsion systems that cut interplanetary travel time." },
      { en: "telemetry", pos: "n", ipa: "/təˈlemətri/", vi: "dữ liệu đo xa (truyền từ tàu vũ trụ về Trái Đất)", example: "Mission control analyzed the telemetry data sent back during atmospheric entry." },
      { en: "constellation", pos: "n", ipa: "/ˌkɑːnstəˈleɪʃn/", vi: "chòm sao; cụm vệ tinh", example: "By next year, the company will have launched a constellation of sixty weather satellites." },
      { en: "astrophysics", pos: "n", ipa: "/ˌæstroʊˈfɪzɪks/", vi: "vật lý thiên văn", example: "Her doctoral thesis in astrophysics models how black holes merge." }
    ],
    grammar: {
      point: "THÌ TƯƠNG LAI HOÀN THÀNH (FUTURE PERFECT: WILL HAVE + V3/ED)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Công thức Thì Tương lai hoàn thành (Future Perfect)</strong>
          <ul>
            <li><b>Khẳng định (+):</b> <code>S + will have + V3/ed</code></li>
            <li><b>Phủ định (-):</b> <code>S + will not (won't) have + V3/ed</code></li>
            <li><b>Nghi vấn (?):</b> <code>Will + S + have + V3/ed?</code></li>
            <li><b>Bị động (Passive):</b> <code>S + will have been + V3/ed</code></li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Cách dùng & Quy tắc Phối thì Mệnh đề Thời gian</strong>
          <p>Dùng để diễn tả một hành động <b>SẼ HOÀN TẤT TRƯỚC một thời điểm</b> hoặc <b>TRƯỚC một hành động khác trong tương lai</b>.</p>
          <ul>
            <li><b>Dấu hiệu nhận biết:</b> <code>By + mốc tương lai</code> (<i>by tomorrow, by 2035, by the end of this decade, by next червня</i>), <code>within / in + khoảng thời gian</code>.</li>
            <li><b>Cấu trúc <code>By the time / Before / When + S + V(hiện tại đơn)</code>:</b><br/>
            <code>By the time + S + V(s/es), S + will have + V3/ed.</code><br/>
            <i>Lưu ý:</i> Tuyệt đối <b>KHÔNG dùng <code>will</code></b> trong mệnh đề thời gian bắt đầu bằng <i>By the time, Before, When, As soon as</i>!</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "By 2035, space agencies <b>will have established</b> a research outpost on the lunar south pole.", vi: "Tính đến năm 2035, các cơ quan vũ trụ sẽ thiết lập xong một trạm nghiên cứu ở cực nam Mặt Trăng." },
        { en: "By the time the probe <b>reaches</b> Saturn, it <b>will have traveled</b> more than a billion kilometers.", vi: "Vào lúc tàu thăm dò chạm tới Sao Thổ, nó sẽ đi được hơn một tỷ ki-lô-mét (chú ý reaches ở Hiện tại đơn!)." },
        { en: "The new space observatory <b>will have been completed</b> before the end of next year.", vi: "Đài thiên văn vũ trụ mới sẽ được hoàn thiện trước cuối năm sau (Bị động: will have been + V3)." },
        { en: "<b>Will</b> the rover <b>have transmitted</b> all telemetry data before the Martian dust storm hits?", vi: "Liệu xe tự hành có truyền xong toàn bộ dữ liệu đo xa trước khi bão bụi Sao Hỏa ập đến không?" }
      ],
      commonMistake: {
        wrong: "By the time the astronauts will return to Earth, they will have orbited the moon fifty times.",
        right: "By the time the astronauts **return** to Earth, they will have orbited the moon fifty times.",
        note: "Trong mệnh đề trạng ngữ chỉ thời gian tương lai (sau By the time, before, when, until, after), động từ luôn chia ở HIỆN TẠI ĐƠN (return), không bao giờ dùng 'will return'!"
      },
      memoryTip: "Mẹo đối xứng: 'By + mốc Quá khứ' ➔ HAD + V3/ed (Quá khứ hoàn thành) | 'By + mốc Tương lai / By the time + V(s/es)' ➔ WILL HAVE + V3/ed (Tương lai hoàn thành)!"
    },
    dialogue: {
      titleVi: "Tình huống: Cuộc phỏng vấn ngắn với Giám đốc Trung tâm Vũ trụ về dự án vệ tinh quan sát Trái Đất",
      lines: [
        { speaker: "Reporter", en: "Dr. Hung, how is the assembly of our new Earth-observation satellite progressing?", vi: "Thưa Tiến sĩ Hùng, quá trình lắp ráp vệ tinh quan sát Trái Đất mới của chúng ta đang tiến triển thế nào rồi ạ?" },
        { speaker: "Dr. Hung", en: "Right on schedule! By the end of next month, our engineers will have completed all thermal and vibration tests.", vi: "Đúng tiến độ! Tính đến cuối tháng tới, các kỹ sư của chúng tôi sẽ hoàn thành xong toàn bộ các bài kiểm tra nhiệt và rung chấn." },
        { speaker: "Reporter", en: "When will the spacecraft be shipped to the launch site?", vi: "Khi nào tàu vũ trụ sẽ được vận chuyển tới bãi phóng ạ?" },
        { speaker: "Dr. Hung", en: "In October. By the time the monsoon season starts, the rocket will have deployed the payload into orbit.", vi: "Vào tháng Mười. Vào lúc mùa mưa bão bắt đầu, tên lửa sẽ đưa xong tải trọng vệ tinh vào quỹ đạo." },
        { speaker: "Reporter", en: "How will this constellation of satellites benefit farmers and disaster planners in Vietnam?", vi: "Chòm vệ tinh này sẽ mang lại lợi ích gì cho nông dân và các nhà hoạch định phòng chống thiên tai ở Việt Nam?" },
        { speaker: "Dr. Hung", en: "Within its first year in orbit, it will have mapped every river basin and coastline with millimeter precision!", vi: "Chỉ trong vòng năm đầu tiên trên quỹ đạo, nó sẽ lập bản đồ xong mọi lưu vực sông và đường bờ biển với độ chính xác tới từng mi-li-mét!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "By the end of this decade, astronomers ___ thousands of newly discovered exoplanets.", options: ["will classify", "will have classified", "had classified"], answer: "will have classified", explanation: "'By the end of this decade' (tính đến cuối thập kỷ này — mốc tương lai) là dấu hiệu của thì Tương lai hoàn thành: will have + V3." },
        { q: "By the time the lunar module ___ on the crater floor, mission control will have verified every telemetry signal.", options: ["lands", "will land", "landed"], answer: "lands", explanation: "Sau 'By the time' chỉ tương lai, động từ chia ở thì Hiện tại đơn (lands)." },
        { q: "The next-generation ion propulsion engine ___ tested thoroughly before the crewed mission departs in 2032.", options: ["will have", "will have been", "will be having"], answer: "will have been", explanation: "Chủ ngữ 'engine' mang nghĩa bị động (sẽ được thử nghiệm xong trước 2032) ➔ will have been + V3/ed." },
        { q: "We are too late to watch the rocket launch; by the time we reach the viewing deck, it ___ into orbit.", options: ["will soar", "will have soared", "soared"], answer: "will have soared", explanation: "Hành động phóng vào quỹ đạo sẽ hoàn tất trước lúc chúng ta tới đài quan sát." },
        { q: "___ the rover ___ collecting soil samples before the solar eclipse begins tomorrow?", options: ["Will / have finished", "Has / finished", "Will / finish"], answer: "Will / have finished", explanation: "Câu hỏi Tương lai hoàn thành trước một mốc tương lai (before the solar eclipse begins tomorrow)." },
        { q: "If the spacecraft maintains this velocity, it ___ Mars within seven months.", options: ["will have reached", "had reached", "reaches"], answer: "will have reached", explanation: "Hoàn tất hành trình tới Sao Hỏa trong vòng 7 tháng tới (within seven months) ➔ will have reached." },
        { q: "They ___ the giant mirror of the observatory by Friday, so the ceremony is postponed to next month.", options: ["won't have polished", "hadn't polished", "don't polish"], answer: "won't have polished", explanation: "Phủ định Tương lai hoàn thành với 'by Friday' (sẽ chưa đánh bóng xong trước thứ Sáu)." },
        { q: "By 2040, how many missions ___ humanity ___ to the outer planets of the solar system?", options: ["will / have sent", "did / send", "has / sent"], answer: "will / have sent", explanation: "Mốc tương lai 'By 2040' ➔ Will + S + have + V3?" },
        { q: "Before the astronaut retires next June, she ___ over four hundred days in low Earth orbit.", options: ["will spend", "will have spent", "spent"], answer: "will have spent", explanation: "Trước khi nghỉ hưu vào tháng Sáu tới (Before + Hiện tại đơn), cô ấy sẽ tích lũy xong hơn 400 ngày trên quỹ đạo." },
        { q: "All twelve satellites in the constellation ___ deployed by the time the third rocket launches.", options: ["will have been", "will be", "have been"], answer: "will have been", explanation: "Bị động Tương lai hoàn thành đi kèm 'by the time + launches'." }
      ],
      fillBlank: [
        { sentence: "By 2035, scientists ___ (establish) a permanent observatory on the moon.", answer: "will have established", hint: "Tương lai hoàn thành với By 2035" },
        { sentence: "By the time the telemetry signal ___ (reach) Earth, fourteen minutes will have elapsed.", answer: "reaches", hint: "Sau By the time chia Hiện tại đơn" },
        { sentence: "The spacecraft ___ (not / complete) its orbital maneuver before midnight tonight.", answer: "will not have completed", hint: "Tương lai hoàn thành phủ định" },
        { sentence: "By next autumn, my sister ___ (graduate) with a master's degree in astrophysics.", answer: "will have graduated", hint: "will have + V3" },
        { sentence: "The scientific payload ___ (install) inside the nose cone before tomorrow's rehearsal.", answer: "will have been installed", hint: "Bị động Tương lai hoàn thành (will have been + V3)" },
        { sentence: "How many exoplanets ___ the telescope ___ (discover) by the end of its five-year mission?", answer: "will have discovered", hint: "Câu hỏi Tương lai hoàn thành: will ... have V3" },
        { sentence: "Before the solar storm hits, engineers ___ (switch) the satellite to safe mode.", answer: "will have switched", hint: "Hoàn tất trước một hành động tương lai" },
        { sentence: "By the time you read this message, our crew ___ (dock) at the space station.", answer: "will have docked", hint: "will have + V3" }
      ],
      sentenceBuild: [
        { words: ["By", "2035,", "engineers", "will", "have", "built", "a", "lunar", "base", "."], answer: "By 2035, engineers will have built a lunar base .", vi: "Tính đến năm 2035, các kỹ sư sẽ xây dựng xong một căn cứ trên Mặt Trăng." },
        { words: ["By", "the", "time", "night", "falls,", "the", "rover", "will", "have", "stopped", "."], answer: "By the time night falls, the rover will have stopped .", vi: "Vào lúc màn đêm buông xuống, chiếc xe tự hành sẽ dừng lại xong." },
        { words: ["The", "spacecraft", "will", "have", "entered", "orbit", "before", "dawn", "tomorrow", "."], answer: "The spacecraft will have entered orbit before dawn tomorrow .", vi: "Tàu vũ trụ sẽ đi vào quỹ đạo trước bình minh ngày mai." },
        { words: ["Will", "they", "have", "analyzed", "the", "telemetry", "data", "by", "Friday", "?"], answer: "Will they have analyzed the telemetry data by Friday ?", vi: "Liệu họ sẽ phân tích xong dữ liệu đo xa trước thứ Sáu chứ?" },
        { words: ["The", "new", "observatory", "will", "have", "been", "completed", "by", "December", "."], answer: "The new observatory will have been completed by December .", vi: "Đài thiên văn mới sẽ được hoàn thiện trước tháng Mười Hai." },
        { words: ["She", "will", "have", "published", "three", "papers", "on", "astrophysics", "by", "June", "."], answer: "She will have published three papers on astrophysics by June .", vi: "Cô ấy sẽ xuất bản xong ba bài báo về vật lý thiên văn trước tháng Sáu." }
      ],
      transformation: [
        { sentence: "The engineers will finish testing the propulsion system before the launch window opens in May. (By the time)", answer: "By the time the launch window opens in May, the engineers will have finished testing the propulsion system.", hint: "Dùng By the time + Hiện tại đơn, S + will have finished..." },
        { sentence: "They will deploy all sixty satellites in the constellation before the end of 2028. (been)", answer: "All sixty satellites in the constellation will have been deployed before the end of 2028.", hint: "Chuyển sang Bị động Tương lai hoàn thành (will have been deployed)" },
        { sentence: "The rover's mission will reach the 100-kilometer mark next Tuesday. (By next Wednesday)", answer: "By next Wednesday, the rover's mission will have reached the 100-kilometer mark.", hint: "Dùng By next Wednesday, ... will have reached..." },
        { sentence: "We won't finish decoding the cosmic signal before the conference starts. (By the time)", answer: "By the time the conference starts, we will not have finished decoding the cosmic signal.", hint: "Dùng By the time the conference starts, we will not have finished..." },
        { sentence: "After the satellite has calibrated its sensors, it will begin transmitting images. (Having)", answer: "Having calibrated its sensors, the satellite will begin transmitting images.", hint: "Ôn tập Day 44: Rút gọn bằng Having + V3" }
      ],
      review: [
        { sentence: "___ (Complete) its orbital check, the spacecraft fired its main thrusters.", answer: "Having completed", hint: "Ôn tập Day 44: Phân từ hoàn thành chủ động" },
        { sentence: "The telescope ___ (install) on the mountain peak captures crystal-clear images of the cosmos.", answer: "installed", hint: "Ôn tập Day 42: Rút gọn mệnh đề quan hệ bị động" },
        { sentence: "The observatory to ___ (which / where) the university donated funds opened in 2023.", answer: "which", hint: "Ôn tập Day 43: Giới từ to + which" },
        { sentence: "Yuri Gagarin was the first human ___ (journey) into outer space.", answer: "to journey", hint: "Ôn tập Day 42: Rút gọn sau the first bằng to V" },
        { sentence: "By the time Apollo 11 landed in 1969, NASA ___ (send) several uncrewed probes to the moon.", answer: "had sent", hint: "Ôn tập Day 31: Quá khứ hoàn thành (đối chiếu với Tương lai hoàn thành)" }
      ]
    }
  },

  // ==================== DAY 47 ====================
  {
    day: 47,
    id: "day-47",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Thì Tương lai hoàn thành tiếp diễn (Future Perfect Continuous) — Trí tuệ Nhân tạo & Tự động hóa",
    titleEn: "Future Perfect Continuous — Artificial Intelligence & Automation",
    dailyGoal: "Phân biệt chính xác Future Perfect Continuous (will have been + V-ing — nhấn mạnh độ dài quá trình) và Future Perfect Simple (will have + V3 — nhấn mạnh kết quả/số lượng).",
    vocab: [
      { en: "algorithm", pos: "n", ipa: "/ˈælɡərɪðəm/", vi: "thuật toán", example: "By midnight, the machine-learning algorithm will have been training for forty-eight hours." },
      { en: "neural network", pos: "n", ipa: "/ˈnʊrəl ˈnetwɜːrk/", vi: "mạng nơ-ron nhân tạo", example: "Deep neural networks recognize speech patterns with remarkable accuracy." },
      { en: "automation", pos: "n", ipa: "/ˌɔːtəˈmeɪʃn/", vi: "sự tự động hóa", example: "Warehouse automation has accelerated parcel sorting across the country." },
      { en: "dataset", pos: "n", ipa: "/ˈdeɪtəset/", vi: "bộ dữ liệu", example: "Researchers curated a multilingual dataset to improve translation quality." },
      { en: "deploy", pos: "v", ipa: "/dɪˈplɔɪ/", vi: "triển khai, đưa vào vận hành", example: "By Q4, our hospital will have deployed AI diagnostic assistants in five wards." },
      { en: "calibrate", pos: "v", ipa: "/ˈkælɪbreɪt/", vi: "hiệu chỉnh, cân chỉnh chính xác", example: "Technicians will have been calibrating the robotic arms all morning." },
      { en: "compute", pos: "v", ipa: "/kəmˈpjuːt/", vi: "tính toán, xử lý dữ liệu bằng máy tính", example: "Supercomputers can compute climate models in a fraction of a second." },
      { en: "cognitive", pos: "adj", ipa: "/ˈkɑːɡnətɪv/", vi: "thuộc về nhận thức, tư duy", example: "AI tools now assist doctors with complex cognitive tasks." },
      { en: "autonomous vehicle", pos: "n", ipa: "/ɔːˈtɑːnəməs ˈviːəkl/", vi: "phương tiện tự hành (xe tự lái)", example: "By next June, these autonomous vehicles will have been operating on campus for two years." },
      { en: "simulation", pos: "n", ipa: "/ˌsɪmjuˈleɪʃn/", vi: "sự mô phỏng bằng máy tính", example: "The traffic simulation predicted how self-driving buses respond to heavy rain." },
      { en: "ethics", pos: "n", ipa: "/ˈeθɪks/", vi: "đạo đức học, nguyên tắc đạo đức (AI)", example: "Universities are introducing mandatory courses on data privacy and AI ethics." },
      { en: "synergize", pos: "v", ipa: "/ˈsɪnərdʒaɪz/", vi: "kết hợp cộng hưởng (giữa người và máy)", example: "When human creativity and machine speed synergize, productivity soars." }
    ],
    grammar: {
      point: "THÌ TƯƠNG LAI HOÀN THÀNH TIẾP DIỄN (FUTURE PERFECT CONTINUOUS: WILL HAVE BEEN + V-ING)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Công thức Thì Tương lai hoàn thành tiếp diễn</strong>
          <ul>
            <li><b>Khẳng định (+):</b> <code>S + will have been + V-ing</code></li>
            <li><b>Phủ định (-):</b> <code>S + will not (won't) have been + V-ing</code></li>
            <li><b>Nghi vấn (?):</b> <code>Will + S + have been + V-ing?</code></li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. So sánh Future Perfect Continuous vs. Future Perfect Simple</strong>
          <ul>
            <li><b>Future Perfect Continuous (<code>will have been + V-ing</code>):</b> Nhấn mạnh <b>KHOẢNG THỜI GIAN LIÊN TỤC</b> mà một hành động sẽ kéo dài tính đến một mốc trong tương lai. Luôn đi kèm: <code>By + mốc tương lai + FOR + khoảng thời gian</code>.<br/>
            <i>Ví dụ:</i> By next month, Dr. Lan <b>will have been leading</b> the AI lab <b>for ten years</b>.</li>
            <li><b>Future Perfect Simple (<code>will have + V3/ed</code>):</b> Nhấn mạnh <b>KẾT QUẢ ĐÃ XONG</b>, <b>SỐ LƯỢNG CỤ THỂ</b> (<i>three models, 500 terabytes</i>), hoặc đi với <b>Stative Verbs</b> (<i>know, be, own, belong</i> — cấm chia V-ing!).</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "By 6 PM tonight, the supercomputer <b>will have been training</b> the neural network <b>for thirty-six hours</b>.", vi: "Tính đến 6 giờ chiều tối nay, siêu máy tính sẽ huấn luyện mạng nơ-ron liên tục được 36 tiếng đồng hồ." },
        { en: "When our chief engineer retires in December, he <b>will have been developing</b> robotics <b>for three decades</b>.", vi: "Khi kỹ sư trưởng của chúng tôi nghỉ hưu vào tháng Mười Hai tới, ông ấy sẽ có tròn ba thập kỷ phát triển ngành robot." },
        { en: "By the end of the day, the algorithm <b>will have processed</b> ten million medical images. <i>(nhấn mạnh số lượng ➔ will have + V3)</i>", vi: "Tính đến cuối ngày, thuật toán sẽ xử lý xong mười triệu bức ảnh y khoa." },
        { en: "By next summer, we <b>will have known</b> each other for fifteen years. <i>(Stative Verb 'know' ➔ không dùng V-ing!)</i>", vi: "Tính đến mùa hè năm sau, chúng tôi sẽ quen biết nhau được 15 năm." }
      ],
      commonMistake: {
        wrong: "By 2028, this tech startup will have been deploying fifty autonomous buses.",
        right: "By 2028, this tech startup **will have deployed** fifty autonomous buses.",
        note: "Khi câu nêu SỐ LƯỢNG kết quả hoàn tất cụ thể ('fifty autonomous buses') mà không có 'for + khoảng thời gian kéo dài', bắt buộc dùng Tương lai hoàn thành đơn (will have deployed)!"
      },
      memoryTip: "Công thức nhận diện 100%: Thấy cặp đôi 'BY (mốc tương lai) + FOR (khoảng thời gian)' với động từ hành động ➔ Chọn ngay WILL HAVE BEEN + V-ING! Nếu thấy SỐ LƯỢNG hoặc STATIVE VERB ➔ Quay về WILL HAVE + V3!"
    },
    dialogue: {
      titleVi: "Tình huống: Hai kỹ sư AI trao đổi trong phòng điều khiển trung tâm dữ liệu",
      lines: [
        { speaker: "Son", en: "Is the server cluster still running the climate simulation, Thao?", vi: "Cụm máy chủ vẫn đang chạy mô phỏng khí hậu chứ Thảo?" },
        { speaker: "Thao", en: "Yes! By 8 PM tonight, the neural network will have been processing that global dataset for seventy-two hours straight.", vi: "Đúng vậy! Tính đến 8 giờ tối nay, mạng nơ-ron sẽ xử lý bộ dữ liệu toàn cầu đó liên tục được tròn 72 tiếng đồng hồ." },
        { speaker: "Son", en: "Incredible! And by tomorrow morning, it will have generated five high-resolution typhoon forecasts.", vi: "Đáng kinh ngạc thật! Và tính đến sáng mai, nó sẽ tạo ra xong năm bản dự báo bão độ phân giải cao." },
        { speaker: "Thao", en: "How is your robotics team doing on the factory automation floor?", vi: "Nhóm robot của cậu ở tầng tự động hóa nhà máy đang làm việc thế nào rồi?" },
        { speaker: "Son", en: "When the shift ends at 5 PM, our technicians will have been calibrating the optical sensors for nine hours.", vi: "Khi ca làm việc kết thúc lúc 5 giờ chiều, các kỹ thuật viên của tụi mình sẽ hiệu chỉnh các cảm biến quang học được 9 tiếng." },
        { speaker: "Thao", en: "Great! Once both systems pass the AI ethics and safety audit, we can deploy them nationwide.", vi: "Tuyệt quá! Ngay khi cả hai hệ thống vượt qua kỳ kiểm toán đạo đức và an toàn AI, chúng ta có thể triển khai chúng trên toàn quốc." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "By next November, Professor Minh ___ artificial intelligence at our university for twenty years.", options: ["will teach", "will have been teaching", "will have taught"], answer: "will have been teaching", explanation: "Có 'By next November' (mốc tương lai) + 'for twenty years' (khoảng thời gian liên tục) ➔ will have been teaching." },
        { q: "By the time the tech conference opens on Monday, the team ___ three different language models.", options: ["will have been testing", "will have tested", "is testing"], answer: "will have tested", explanation: "Có số lượng cụ thể 'three different language models' (nhấn mạnh kết quả hoàn tất) ➔ dùng Future Perfect Simple (will have tested)." },
        { q: "At 10 PM tonight, the servers ___ the traffic simulation for twelve hours non-stop.", options: ["will have been running", "will run", "have been running"], answer: "will have been running", explanation: "Mốc tương lai 'At 10 PM tonight' kết hợp 'for twelve hours non-stop' ➔ will have been running." },
        { q: "By the end of this year, I ___ my mentor in the robotics lab for a decade.", options: ["will have been knowing", "will have known", "will know"], answer: "will have known", explanation: "'Know' là động từ trạng thái (Stative Verb) nên dù có 'for a decade' vẫn phải chia ở Tương lai hoàn thành đơn (will have known)." },
        { q: "How long ___ the autonomous vehicles ___ on this test track by the time the inspector arrives?", options: ["will / have been operating", "will / operate", "have / been operating"], answer: "will / have been operating", explanation: "Câu hỏi 'How long' đi kèm 'by the time + Hiện tại đơn' ➔ Will + S + have been + V-ing?" },
        { q: "When she finishes her shift at dawn, she ___ the assembly robots for eight hours.", options: ["will calibrate", "will have been calibrating", "calibrated"], answer: "will have been calibrating", explanation: "'When + Hiện tại đơn (finishes)' + 'for eight hours' ➔ will have been calibrating." },
        { q: "By 2030, the hospital ___ AI diagnostic software across all twenty regional clinics.", options: ["will have deployed", "will have been deploying", "deploys"], answer: "will have deployed", explanation: "Nhấn mạnh kết quả triển khai xong trên toàn bộ 20 phòng khám trước năm 2030 ➔ will have deployed." },
        { q: "They will be exhausted when they land because they ___ for eighteen hours.", options: ["will have been flying", "will fly", "flew"], answer: "will have been flying", explanation: "Giải thích nguyên nhân gây mệt mỏi tại một thời điểm tương lai (when they land) bằng quá trình kéo dài 18 giờ ➔ will have been flying." },
        { q: "By next quarter, the committee ___ the new AI ethics guidelines for a full year.", options: ["will draft", "will have been drafting", "drafted"], answer: "will have been drafting", explanation: "'By next quarter' + 'for a full year' ➔ will have been drafting." },
        { q: "By the time the battery needs recharging, the drone ___ two hundred parcels.", options: ["will have delivered", "will have been delivering", "delivers"], answer: "will have delivered", explanation: "Có số lượng kết quả 'two hundred parcels' ➔ will have delivered." }
      ],
      fillBlank: [
        { sentence: "By midnight, the algorithm ___ (analyze) the medical dataset for ten hours straight.", answer: "will have been analyzing", hint: "By + mốc tương lai + for ten hours (will have been + V-ing)" },
        { sentence: "By the time the CEO arrives, we ___ (calibrate) all six industrial robots.", answer: "will have calibrated", hint: "Có số lượng cụ thể all six robots ➔ Tương lai hoàn thành đơn" },
        { sentence: "In July, Dr. Hoa ___ (research) neural networks for fifteen years.", answer: "will have been researching", hint: "Nhấn mạnh quá trình 15 năm tính đến tháng 7 tới" },
        { sentence: "By 2029, our institute ___ (own) this supercomputer for five years.", answer: "will have owned", hint: "Chú ý động từ trạng thái own không chia V-ing!" },
        { sentence: "How long ___ you ___ (work) on the automation project by the end of this semester?", answer: "will have been working", hint: "Câu hỏi How long ở Tương lai hoàn thành tiếp diễn" },
        { sentence: "When the clock strikes five, the trainees ___ (practice) on the flight simulator for four hours.", answer: "will have been practicing", hint: "will have been + V-ing" },
        { sentence: "By next Friday, the legal team ___ (finalize) the AI ethics compliance report.", answer: "will have finalized", hint: "Hoàn tất kết quả trước thứ Sáu tới" },
        { sentence: "The engineers ___ (not / sleep) for twenty-four hours by the time the system goes live.", answer: "will not have been sleeping", hint: "Tương lai hoàn thành tiếp diễn phủ định (hoặc will not have slept)" }
      ],
      sentenceBuild: [
        { words: ["By", "noon,", "the", "algorithm", "will", "have", "been", "running", "for", "six", "hours", "."], answer: "By noon, the algorithm will have been running for six hours .", vi: "Tính đến trưa, thuật toán sẽ chạy liên tục được sáu tiếng đồng hồ." },
        { words: ["By", "next", "year,", "she", "will", "have", "been", "studying", "robotics", "for", "four", "years", "."], answer: "By next year, she will have been studying robotics for four years .", vi: "Tính đến năm sau, cô ấy sẽ theo học ngành robot được bốn năm." },
        { words: ["By", "2030,", "we", "will", "have", "deployed", "fifty", "autonomous", "buses", "."], answer: "By 2030, we will have deployed fifty autonomous buses .", vi: "Tính đến năm 2030, chúng tôi sẽ triển khai xong năm mươi chiếc xe buýt tự hành." },
        { words: ["How", "long", "will", "they", "have", "been", "training", "the", "neural", "network", "?"], answer: "How long will they have been training the neural network ?", vi: "Họ sẽ huấn luyện mạng nơ-ron đó được bao lâu?" },
        { words: ["Technicians", "will", "have", "been", "calibrating", "the", "sensors", "all", "morning", "."], answer: "Technicians will have been calibrating the sensors all morning .", vi: "Các kỹ thuật viên sẽ hiệu chỉnh các cảm biến suốt cả buổi sáng." },
        { words: ["By", "May,", "I", "will", "have", "known", "my", "research", "partner", "for", "ten", "years", "."], answer: "By May, I will have known my research partner for ten years .", vi: "Tính đến tháng Năm, tôi sẽ quen biết người cộng sự nghiên cứu của mình được mười năm." }
      ],
      transformation: [
        { sentence: "Our team started training this neural network at 6 AM, and at 6 PM it will still be running. (for twelve hours)", answer: "By 6 PM, our team will have been training this neural network for twelve hours.", hint: "Dùng By 6 PM, our team will have been training..." },
        { sentence: "She joined the automation department nine years ago, so next March marks her tenth anniversary. (working)", answer: "By next March, she will have been working in the automation department for ten years.", hint: "Dùng By next March, she will have been working..." },
        { sentence: "The startup will finish deploying twenty medical chatbots before December. (By December)", answer: "By December, the startup will have deployed twenty medical chatbots.", hint: "Có số lượng twenty medical chatbots ➔ dùng will have deployed" },
        { sentence: "We met our AI ethics advisor five years ago next month. (known)", answer: "By next month, we will have known our AI ethics advisor for five years.", hint: "Dùng stative verb: will have known ... for five years" },
        { sentence: "The engineers will complete the simulation before the board meeting begins. (By the time)", answer: "By the time the board meeting begins, the engineers will have completed the simulation.", hint: "Ôn tập Day 46: By the time + Hiện tại đơn, S + will have completed..." }
      ],
      review: [
        { sentence: "By the time the probe lands on Mars, it ___ (travel) for seven months.", answer: "will have been traveling", hint: "Tương lai hoàn thành tiếp diễn có for seven months" },
        { sentence: "The satellite ___ (launch) before the monsoon season starts next month.", answer: "will have been launched", hint: "Ôn tập Day 46: Bị động Tương lai hoàn thành" },
        { sentence: "___ (Train) on a massive dataset, the translation model achieved 98% accuracy.", answer: "Trained", hint: "Ôn tập Day 44: Phân từ quá khứ bị động (hoặc Having been trained)" },
        { sentence: "The professor with ___ (whom / who) I wrote the paper specializes in cognitive science.", answer: "whom", hint: "Ôn tập Day 43: Giới từ with + whom" },
        { sentence: "Algorithms ___ (design) without ethical oversight can reinforce bias.", answer: "designed", hint: "Ôn tập Day 42: Rút gọn mệnh đề quan hệ bị động" }
      ]
    }
  },

  // ==================== DAY 48 ====================
  {
    day: 48,
    id: "day-48",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Cầu khiến & Bị động Nâng cao (Have/Get sth done, Need + V-ing) — Cải tạo Nhà & Hậu cần",
    titleEn: "Advanced Causative & Passive Structures — Home Renovation & Logistics",
    dailyGoal: "Làm chủ các cấu trúc cầu khiến và bị động nâng cao B1+ (have/get sth done ở mọi thì và mang nghĩa rủi ro, need/require/want + V-ing = to be V3/ed, get + V3/ed).",
    vocab: [
      { en: "insulation", pos: "n", ipa: "/ˌɪnsəˈleɪʃn/", vi: "vật liệu cách nhiệt / sự cách nhiệt", example: "We are having thermal insulation installed in the attic before winter." },
      { en: "rewire", pos: "v", ipa: "/ˌriːˈwaɪər/", vi: "đi lại toàn bộ đường dây điện", example: "The 1970s townhouse definitely needs rewiring to meet modern safety codes." },
      { en: "plumbing", pos: "n", ipa: "/ˈplʌmɪŋ/", vi: "hệ thống ống nước", example: "They got the old copper plumbing replaced during the kitchen remodel." },
      { en: "contractor", pos: "n", ipa: "/ˈkɑːntræktər/", vi: "nhà thầu xây dựng", example: "Our general contractor had the building permit approved last Tuesday." },
      { en: "blueprint", pos: "n", ipa: "/ˈbluːprɪnt/", vi: "bản thiết kế kỹ thuật, bản vẽ mặt bằng", example: "The structural engineer checked the blueprint before knocking down the wall." },
      { en: "carpentry", pos: "n", ipa: "/ˈkɑːrpəntri/", vi: "công việc mộc, nghề mộc", example: "Custom oak cabinetry requires skilled carpentry." },
      { en: "upholstery", pos: "n", ipa: "/ʌpˈhoʊlstəri/", vi: "vải/da bọc ghế sofa, nội thất", example: "This vintage armchair is sturdy, but the upholstery needs cleaning." },
      { en: "freight", pos: "n", ipa: "/freɪt/", vi: "hàng hóa vận tải lớn (đường biển/hàng không)", example: "The logistics firm had the marble tiles shipped by sea freight." },
      { en: "customs clearance", pos: "n", ipa: "/ˈkʌstəmz ˈklɪrəns/", vi: "thủ tục thông quan hải quan", example: "We got the imported kitchen appliances through customs clearance in two days." },
      { en: "dispatch", pos: "v", ipa: "/dɪˈspætʃ/", vi: "điều phối gửi đi (hàng hóa, đội kỹ thuật)", example: "The warehouse manager had the replacement parts dispatched immediately." },
      { en: "partition", pos: "n", ipa: "/pɑːrˈtɪʃn/", vi: "vách ngăn phòng", example: "They had a glass partition erected to separate the study from the living room." },
      { en: "glaze", pos: "v", ipa: "/ɡleɪz/", vi: "lắp kính (cửa sổ 2 lớp cách nhiệt/cách âm)", example: "Having the balcony windows double-glazed cut outside noise by 80%." }
    ],
    grammar: {
      point: "CẦU KHIẾN & BỊ ĐỘNG NÂNG CAO (HAVE/GET STH DONE & NEED/REQUIRE + V-ING)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Cấu trúc HAVE / GET + SOMETHING + V3/ED ở Đa Thì & Hai Sắc thái Nghĩa</strong>
          <ul>
            <li><b>Nghĩa 1 (Thuê/nhờ chuyên gia làm dịch vụ):</b> Chia <code>have / get</code> linh hoạt theo mọi thì và Modal Verbs:<br/>
            <code>will have sth done</code> | <code>have had sth done</code> | <code>be having sth done</code> | <code>should have sth done</code>.<br/>
            <i>Ví dụ:</i> By Friday, we <b>will have had</b> the entire house <b>rewired</b>.</li>
            <li><b>Nghĩa 2 (Gặp sự cố rủi ro ngoài ý muốn — Unpleasant Experience):</b><br/>
            <i>Ví dụ:</i> The courier <b>had his van broken into</b> while delivering freight. (Xe tải bị cạy cửa trộm).</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Cấu trúc Bị động Ngầm: NEED / WANT / REQUIRE + V-ING (= TO BE V3/ED)</strong>
          <ul>
            <li>Khi chủ ngữ là <b>VẬT</b> cần được sửa chữa/chăm sóc, động từ sau <code>need / require / want</code> có thể chia ở <b><code>V-ing</code></b> (mang nghĩa BỊ ĐỘNG tương đương <b><code>to be + V3/ed</code></b>!):<br/>
            <code>S(vật) + need / require / want + V-ing = S(vật) + need / require / want + to be + V3/ed</code></li>
            <li><i>Ví dụ:</i> The old plumbing <b>needs replacing</b> = The old plumbing <b>needs to be replaced</b>.</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "We <b>are having</b> the attic insulation <b>upgraded</b> by a certified contractor this week.", vi: "Tuần này chúng tôi đang thuê nhà thầu có chứng chỉ nâng cấp lớp cách nhiệt trên gác mái." },
        { en: "The wooden floor is scratched; it urgently <b>needs polishing</b> (<i>= needs <b>to be polished</b></i>).", vi: "Sàn gỗ bị trầy xước rồi; nó cần được đánh bóng gấp." },
        { en: "By the time we move in next month, we <b>will have got</b> all the windows <b>double-glazed</b>.", vi: "Vào lúc chúng tôi dọn vào ở tháng tới, chúng tôi sẽ cho lắp xong kính hai lớp cho toàn bộ cửa sổ." },
        { en: "The importer <b>had two containers delayed</b> at the port due to incomplete customs clearance.", vi: "Nhà nhập khẩu đã bị kẹt lại hai công-ten-nơ ở cảng do thủ tục thông quan chưa hoàn tất." }
      ],
      commonMistake: {
        wrong: "The sofa upholstery is stained; it needs to clean before the guests arrive.",
        right: "The sofa upholstery is stained; it **needs cleaning** (OR: **needs to be cleaned**) before the guests arrive.",
        note: "Chủ ngữ 'it' (lớp bọc ghế sofa) là vật chịu tác động (CẦN ĐƯỢC giặt sạch), nên sau 'needs' chỉ có 2 lựa chọn đúng: 'needs + V-ing' (needs cleaning) hoặc 'needs + to be + V3/ed' (needs to be cleaned)!"
      },
      memoryTip: "Công thức Vàng cho chủ ngữ là VẬT: 'Vật + NEED + V-ING = Vật + NEED + TO BE V3/ED' (V-ing ở đây mang hồn Bị động!). Còn Chủ ngữ là NGƯỜI thuê thợ ➔ 'Người + HAVE/GET + Vật + V3/ED'!"
    },
    dialogue: {
      titleVi: "Tình huống: Hai vợ chồng trao đổi với nhà thầu tại căn nhà đang cải tạo",
      lines: [
        { speaker: "Contractor", en: "Good morning! As you can see, we have already had the old partition wall demolished according to the blueprint.", vi: "Chào buổi sáng! Như anh chị thấy đấy, chúng tôi đã cho phá dỡ bức tường ngăn cũ theo đúng bản vẽ thiết kế." },
        { speaker: "Minh", en: "The open-plan living room looks much brighter! What about the electrical system?", vi: "Phòng khách không gian mở trông sáng sủa hơn hẳn! Thế còn hệ thống điện thì sao ạ?" },
        { speaker: "Contractor", en: "The Ground Floor circuitry definitely needs rewiring, and two bathroom pipes require replacing to prevent leaks.", vi: "Mạch điện tầng trệt chắc chắn cần được đi lại dây, và hai đường ống nước phòng tắm cần được thay thế để chống rò rỉ." },
        { speaker: "Lan", en: "Let's get those done right away. Will we have had the balcony windows double-glazed before the rainy season starts?", vi: "Hãy cho làm ngay những hạng mục đó nhé. Liệu chúng ta có lắp xong kính hai lớp cho cửa sổ ban công trước khi mùa mưa bắt đầu không anh?" },
        { speaker: "Contractor", en: "Yes! The glass panels cleared customs yesterday, and I'm having them dispatched from the freight warehouse this afternoon.", vi: "Kịp chứ ạ! Các tấm kính đã thông quan hôm qua rồi, và chiều nay tôi đang cho điều phối chuyển chúng từ kho vận tải tới đây." },
        { speaker: "Lan", en: "Wonderful! While the carpentry team builds the bookshelves, I'll also have our vintage sofa upholstery steam-cleaned.", vi: "Tuyệt quá! Trong lúc đội thợ mộc đóng kệ sách, tôi cũng sẽ thuê giặt hơi nước cho lớp bọc bộ ghế sofa cổ điển của gia đình." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "The electrical wiring in this colonial villa is fifty years old; it urgently needs ___.", options: ["rewire", "rewiring", "to rewire"], answer: "rewiring", explanation: "Chủ ngữ là vật ('The electrical wiring') + 'needs' ➔ dùng 'needs + V-ing' (rewiring = to be rewired) mang nghĩa bị động." },
        { q: "By the time our furniture arrives on Saturday, we will have had the hardwood floors ___.", options: ["varnish", "varnished", "varnishing"], answer: "varnished", explanation: "Cấu trúc cầu khiến bị động ở thì Tương lai hoàn thành: 'will have had + sth + V3/ed' (varnished)." },
        { q: "These imported marble slabs require ___ with extreme care during freight transport.", options: ["handling", "to handle", "handled"], answer: "handling", explanation: "Sau 'require' (tương tự 'need') khi chủ ngữ là vật: 'require + V-ing' (= require to be handled)." },
        { q: "We shouldn't try to install the roof insulation ourselves; we ought to get a licensed contractor ___ it.", options: ["do", "to do", "done"], answer: "to do", explanation: "Cấu trúc cầu khiến CHỦ ĐỘNG với 'get + NGƯỜI + to V': get a licensed contractor to do it." },
        { q: "While traveling abroad, the logistics director unfortunately had his briefcase ___ at the train station.", options: ["steal", "stolen", "to steal"], answer: "stolen", explanation: "'have + sth + V3/ed' diễn tả một sự cố rủi ro ngoài ý muốn (bị mất cắp cặp tài liệu)." },
        { q: "The vintage armchair frame is solid, but the fabric upholstery wants ___.", options: ["to replace", "replacing", "replaced"], answer: "replacing", explanation: "Trong tiếng Anh chuẩn B1+/B2, 'want + V-ing' (= need + V-ing / need to be V3/ed) nghĩa là 'cần được làm gì'." },
        { q: "Our warehouse manager had the urgent shipment ___ by air freight instead of sea freight.", options: ["dispatch", "dispatched", "dispatching"], answer: "dispatched", explanation: "Cầu khiến bị động: 'had + the urgent shipment (vật) + V3/ed (dispatched)'." },
        { q: "Before signing the handover form, make sure the plumbing system ___ thoroughly.", options: ["needs testing", "has been tested", "tests"], answer: "has been tested", explanation: "Đảm bảo hệ thống ống nước đã được kiểm tra kỹ lưỡng (bị động Hiện tại hoàn thành: has been tested)." },
        { q: "The blueprint shows a glass partition here, which needs ___ before the ceiling lights are fitted.", options: ["to erect", "to be erected", "erect"], answer: "to be erected", explanation: "Sau 'needs' với chủ ngữ là vật, ngoài 'erecting' ta dùng 'to be + V3/ed' (to be erected)." },
        { q: "How often do you have your central heating boiler ___ by a technician?", options: ["service", "serviced", "servicing"], answer: "serviced", explanation: "'have + sth + V3/ed' (have your boiler serviced)." }
      ],
      fillBlank: [
        { sentence: "The kitchen ceiling has water stains; the roof above it needs ___ (repair) immediately.", answer: "repairing", hint: "need + V-ing mang nghĩa bị động (hoặc to be repaired)" },
        { sentence: "We are going to have the balcony windows ___ (double-glaze) next Tuesday.", answer: "double-glazed", hint: "have + vật + V3/ed" },
        { sentence: "The homeowner got the carpenter ___ (build) a custom oak wardrobe.", answer: "to build", hint: "get + người + to V" },
        { sentence: "All international freight containers require ___ (inspect) before customs clearance.", answer: "inspecting", hint: "require + V-ing (= to be inspected)" },
        { sentence: "By the end of this month, they will have had the entire office ___ (rewire).", answer: "rewired", hint: "will have had + vật + V3/ed" },
        { sentence: "The architect made the contractor ___ (follow) the safety blueprint strictly.", answer: "follow", hint: "make + người + V nguyên thể" },
        { sentence: "My neighbor had two parcels ___ (damage) during the storm yesterday.", answer: "damaged", hint: "have + vật + V3/ed (sự cố ngoài ý muốn)" },
        { sentence: "This antique sofa upholstery needs to ___ (clean) by a specialist.", answer: "be cleaned", hint: "needs to + be + V3/ed" }
      ],
      sentenceBuild: [
        { words: ["The", "old", "electrical", "system", "urgently", "needs", "rewiring", "."], answer: "The old electrical system urgently needs rewiring .", vi: "Hệ thống điện cũ kỹ cần được đi lại dây gấp." },
        { words: ["We", "had", "thermal", "insulation", "installed", "in", "the", "attic", "."], answer: "We had thermal insulation installed in the attic .", vi: "Chúng tôi đã thuê lắp đặt lớp cách nhiệt trên gác mái." },
        { words: ["The", "sofa", "upholstery", "needs", "to", "be", "cleaned", "professionally", "."], answer: "The sofa upholstery needs to be cleaned professionally .", vi: "Lớp bọc ghế sofa cần được giặt sạch một cách chuyên nghiệp." },
        { words: ["They", "got", "the", "contractor", "to", "revise", "the", "blueprint", "."], answer: "They got the contractor to revise the blueprint .", vi: "Họ đã nhờ nhà thầu chỉnh sửa lại bản vẽ thiết kế." },
        { words: ["By", "Friday,", "we", "will", "have", "had", "the", "plumbing", "replaced", "."], answer: "By Friday, we will have had the plumbing replaced .", vi: "Tính đến thứ Sáu, chúng tôi sẽ cho thay xong hệ thống ống nước." },
        { words: ["Fragile", "freight", "requires", "handling", "with", "extreme", "care", "."], answer: "Fragile freight requires handling with extreme care .", vi: "Hàng hóa vận tải dễ vỡ đòi hỏi phải được bốc dỡ hết sức cẩn thận." }
      ],
      transformation: [
        { sentence: "The wooden partition needs to be repainted before we move the desks in. (repainting)", answer: "The wooden partition needs repainting before we move the desks in.", hint: "Chuyển needs to be repainted thành needs repainting" },
        { sentence: "A certified electrician is rewiring our basement right now. (having)", answer: "We are having our basement rewired by a certified electrician right now.", hint: "Dùng We are having our basement rewired..." },
        { sentence: "The logistics firm will arrange for a customs broker to clear the freight by tomorrow. (have)", answer: "The logistics firm will have the freight cleared by a customs broker by tomorrow.", hint: "Dùng will have the freight cleared..." },
        { sentence: "The leaky faucet in the laundry room requires replacement. (replacing)", answer: "The leaky faucet in the laundry room requires replacing.", hint: "Dùng requires + V-ing" },
        { sentence: "Someone broke the side mirror of my car while it was parked outside the depot. (had)", answer: "I had the side mirror of my car broken while it was parked outside the depot.", hint: "Dùng I had the side mirror of my car broken..." }
      ],
      review: [
        { sentence: "By 5 PM, the carpenters ___ (install) the kitchen cabinets for eight hours.", answer: "will have been installing", hint: "Ôn tập Day 47: Tương lai hoàn thành tiếp diễn" },
        { sentence: "By the time the rainy season starts, we ___ (finish) the roof renovation.", answer: "will have finished", hint: "Ôn tập Day 46: Tương lai hoàn thành" },
        { sentence: "___ (Approve) by the city council, the blueprint was sent to the contractor.", answer: "Approved", hint: "Ôn tập Day 44: Phân từ quá khứ bị động" },
        { sentence: "We requested quotes from five suppliers, three of ___ (which / them) offered free freight delivery.", answer: "which", hint: "Ôn tập Day 43: Lượng từ + of which" },
        { sentence: "You ___ (should / check) the customs regulations before shipping those batteries.", answer: "should have checked", hint: "Ôn tập Day 39: Lời khuyên trong quá khứ" }
      ]
    }
  },

  // ==================== DAY 49 ====================
  {
    day: 49,
    id: "day-49",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: false,
    estimatedMinutes: 25,
    title: "Bị động Khách quan / Tường thuật (Impersonal Passive Reporting) — Truyền thông & Dư luận",
    titleEn: "Impersonal Passive Reporting — Media Literacy & Public Opinion",
    dailyGoal: "Làm chủ 2 cấu trúc Bị động tường thuật khách quan (It is said/believed that... và S + is said/thought + to V / to have V3) để viết văn báo chí và học thuật chuẩn B1+/B2.",
    vocab: [
      { en: "misinformation", pos: "n", ipa: "/ˌmɪsɪnfərˈmeɪʃn/", vi: "thông tin sai lệch (lan truyền trên mạng)", example: "Media literacy helps citizens distinguish verified facts from misinformation." },
      { en: "credibility", pos: "n", ipa: "/ˌkredəˈbɪləti/", vi: "độ tin cậy, uy tín", example: "A news outlet loses credibility when it fails to verify its sources." },
      { en: "unbiased", pos: "adj", ipa: "/ʌnˈbaɪəst/", vi: "khách quan, không thiên vị", example: "Impersonal passive structures are used to maintain an unbiased tone." },
      { en: "sensationalism", pos: "n", ipa: "/senˈseɪʃənəlɪzəm/", vi: "chủ nghĩa giật gân (câu view trên báo chí)", example: "Serious readers prefer in-depth analysis over tabloid sensationalism." },
      { en: "allege", pos: "v", ipa: "/əˈledʒ/", vi: "cáo buộc (khi chưa có phán quyết cuối cùng)", example: "The executive is alleged to have transferred funds to an offshore account." },
      { en: "fact-check", pos: "v", ipa: "/ˈfækt tʃek/", vi: "kiểm chứng thông tin, xác thực dữ kiện", example: "Always fact-check viral headlines before sharing them on social media." },
      { en: "editorial", pos: "n", ipa: "/ˌedɪˈtɔːriəl/", vi: "bài xã luận", example: "Today's editorial argues for stricter transparency in digital advertising." },
      { en: "public opinion", pos: "n", ipa: "/ˈpʌblɪk əˈpɪnjən/", vi: "dư luận xã hội", example: "Public opinion shifted dramatically after the documentary was broadcast." },
      { en: "retract", pos: "v", ipa: "/rɪˈtrækt/", vi: "rút lại, đính chính (bài báo, phát ngôn sai)", example: "The magazine had to retract the article after discovering the photo was doctored." },
      { en: "circulation", pos: "n", ipa: "/ˌsɜːrkjəˈleɪʃn/", vi: "số lượng phát hành (báo, tạp chí); sự lưu hành", example: "The print newspaper's circulation has declined, while its digital subscriptions grew." },
      { en: "disseminate", pos: "v", ipa: "/dɪˈsemɪneɪt/", vi: "phổ biến, truyền bá (thông tin, kiến thức)", example: "Public health agencies disseminate accurate guidelines during emergencies." },
      { en: "verify", pos: "v", ipa: "/ˈverɪfaɪ/", vi: "xác minh, kiểm chứng", example: "Journalists must verify eyewitness accounts with independent documents." }
    ],
    grammar: {
      point: "BỊ ĐỘNG KHÁCH QUAN / BỊ ĐỘNG TƯỜNG THUẬT (IMPERSONAL PASSIVE REPORTING)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Hai Công thức Bị động Khách quan (Với say, believe, think, report, rumor, allege, expect, estimate...)</strong>
          <ul>
            <li><b>Cách 1 (Chủ ngữ giả <code>It</code>):</b><br/>
            <code>It + is / was + V3/ed (said / believed / reported / thought) + that + S2 + V2...</code><br/>
            <i>Ví dụ:</i> <b>It is reported that</b> the merger talks are progressing well.</li>
            <li><b>Cách 2 (Đưa Chủ ngữ 2 lên đầu câu — Cực kỳ quan trọng trong bài viết lại câu!):</b><br/>
            <code>S2 + am/is/are (was/were) + V3/ed (said / believed / alleged) + TO-INFINITIVE</code></li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Quy tắc Chọn Dạng TO-INFINITIVE ở Cách 2 (Cùng thì vs. Khác thì)</strong>
          <ul>
            <li><b>CÙNG THỜI ĐIỂM (Hiện tại / Tương lai) ➔ dùng <code>to + V(nguyên thể)</code> (hoặc <code>to be + V-ing</code>):</b><br/>
            <i>People think that the newspaper <b>has</b> high credibility.</i> ➔ The newspaper <b>is thought to have</b> high credibility.</li>
            <li><b>XẢY RA TRƯỚC động từ tường thuật (Quá khứ / Hoàn thành) ➔ dùng <code>to have + V3/ed</code> (Bị động: <code>to have been + V3/ed</code>):</b><br/>
            <i>Journalists report that the official <b>leaked</b> the memo last month.</i> ➔ The official <b>is reported to have leaked</b> the memo last month.</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "<b>It is widely believed that</b> media literacy courses help teenagers spot online misinformation.", vi: "Người ta tin rộng rãi rằng các khóa học hiểu biết truyền thông giúp thanh thiếu niên nhận diện thông tin sai lệch trên mạng (Cách 1)." },
        { en: "The new digital platform <b>is expected to attract</b> over two million subscribers this year.", vi: "Nền tảng kỹ thuật số mới được kỳ vọng sẽ thu hút hơn hai triệu người đăng ký trong năm nay (Cùng thời điểm/Tương lai ➔ to V)." },
        { en: "The former director <b>is alleged to have falsified</b> circulation figures between 2020 and 2022.", vi: "Cựu giám đốc bị cáo buộc là đã làm giả số liệu phát hành trong giai đoạn 2020–2022 (Xảy ra trước ➔ to have + V3)." },
        { en: "The ancient manuscript <b>is thought to have been written</b> by a 14th-century scholar.", vi: "Bản thảo cổ được cho là đã được viết bởi một học giả thế kỷ 14 (Xảy ra trước + Bị động ➔ to have been + V3)." }
      ],
      commonMistake: {
        wrong: "The hacker is believed that he stole the confidential database last week.",
        right: "The hacker **is believed to have stolen** the confidential database last week.",
        note: "Không được trộn lẫn Cách 1 và Cách 2! Nếu đã đưa 'The hacker' (S2) lên làm chủ ngữ đầu câu, theo sau 'is believed' BẮT BUỘC phải là 'to V' hoặc 'to have V3' (không dùng 'that'!)."
      },
      memoryTip: "Mẹo 2 Bước chuyển S2 lên đầu câu: Bước 1: Chia 'S2 + be + V3 (said/believed)'; Bước 2: So sánh thì của V2 — Nếu V2 ở Hiện tại/Tương lai ➔ TO + V; Nếu V2 ở Quá khứ/Hoàn thành ➔ TO HAVE + V3!"
    },
    dialogue: {
      titleVi: "Tình huống: Buổi thảo luận trong lớp học Báo chí về kỹ năng kiểm chứng tin tức",
      lines: [
        { speaker: "Professor", en: "Why do news agencies write 'The suspect is alleged to have fled' instead of 'The suspect fled'?", vi: "Tại sao các hãng thông tấn lại viết 'Nghi phạm bị cáo buộc là đã bỏ trốn' thay vì 'Nghi phạm đã bỏ trốn'?" },
        { speaker: "Hanh", en: "Because before a court verdict is reached, journalists must remain unbiased and report only what is alleged or believed to have happened.", vi: "Thưa thầy, vì trước khi có phán quyết của tòa án, nhà báo phải giữ thái độ khách quan và chỉ tường thuật những gì được cáo buộc hoặc được cho là đã xảy ra." },
        { speaker: "Professor", en: "Spot on! What happens when a media outlet prioritizes sensationalism over fact-checking?", vi: "Chính xác! Điều gì sẽ xảy ra khi một cơ quan truyền thông ưu tiên sự giật gân hơn là việc kiểm chứng thông tin?" },
        { speaker: "Hanh", en: "It is widely known that spreading unverified rumors destroys a newspaper's credibility.", vi: "Ai cũng biết rõ rằng việc phát tán tin đồn chưa được xác minh sẽ hủy hoại uy tín của một tờ báo." },
        { speaker: "Professor", en: "True. In fact, a major tabloid was reported to have lost 30% of its circulation last year after retracting a fake story.", vi: "Đúng vậy. Thực tế, một tờ báo lá cải lớn được đưa tin là đã mất 30% lượng phát hành vào năm ngoái sau khi phải rút lại một bài viết bịa đặt." },
        { speaker: "Hanh", en: "That proves why we must verify every primary source before we disseminate information to the public.", vi: "Điều đó chứng minh tại sao chúng ta phải xác minh mọi nguồn tin gốc trước khi phổ biến thông tin tới công chúng." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "It ___ that over 60% of young adults now get their daily news from digital platforms.", options: ["estimates", "is estimated", "estimated"], answer: "is estimated", explanation: "Cấu trúc bị động khách quan Cách 1 với chủ ngữ giả It: 'It is estimated that...'." },
        { q: "The viral video is believed ___ generated by an artificial intelligence tool yesterday.", options: ["to be", "to have been", "having been"], answer: "to have been", explanation: "Hành động xảy ra hôm qua (trước thời điểm tin tưởng) và mang nghĩa bị động ('by an AI tool') ➔ to have been + V3." },
        { q: "The chief editor is expected ___ an official editorial on media ethics tomorrow morning.", options: ["to publish", "to have published", "publishing"], answer: "to publish", explanation: "Hành động sẽ diễn ra vào sáng mai (cùng/sau thời điểm được kỳ vọng) ➔ dùng 'to + V nguyên thể' (to publish)." },
        { q: "The shell company is alleged ___ millions of dollars in overseas accounts between 2019 and 2021.", options: ["to hide", "to have hidden", "that it hid"], answer: "to have hidden", explanation: "Hành động che giấu xảy ra trong quá khứ (between 2019 and 2021) ➔ is alleged + to have + V3 (to have hidden)." },
        { q: "___ is rumored that the two broadcasting corporations will merge next quarter.", options: ["There", "It", "What"], answer: "It", explanation: "Chủ ngữ giả trong cấu trúc 'It is rumored that...' luôn là 'It'." },
        { q: "Ancient carrier pigeons are known ___ used to disseminate urgent news over two thousand years ago.", options: ["to be", "to have been", "being"], answer: "to have been", explanation: "Sự việc trong quá khứ ('two thousand years ago') và bị động ('được sử dụng') ➔ to have been used." },
        { q: "The prime minister is reported ___ with economic advisors right now.", options: ["to be meeting", "to have met", "meeting"], answer: "to be meeting", explanation: "Hành động đang diễn ra ngay lúc này ('right now') ➔ dùng nguyên mẫu tiếp diễn: 'to be + V-ing' (to be meeting)." },
        { q: "Two fact-checkers were thought ___ the anonymous source before the article went to print.", options: ["to verify", "to have verified", "verifying"], answer: "to have verified", explanation: "Hành động xác minh xảy ra trước khi bài báo được in ➔ to have verified." },
        { q: "This independent journal is said ___ the highest credibility among academic readers.", options: ["to enjoy", "to have enjoyed", "that enjoys"], answer: "to enjoy", explanation: "Trạng thái ở hiện tại (báo hiện có uy tín cao nhất) ➔ is said + to V (to enjoy)." },
        { q: "The leaked documents are believed ___ stolen during last month's cyberattack.", options: ["to be", "to have been", "that were"], answer: "to have been", explanation: "Tài liệu bị đánh cắp trong cuộc tấn công mạng tháng trước (Quá khứ + Bị động) ➔ to have been stolen." }
      ],
      fillBlank: [
        { sentence: "It ___ (report) that the newspaper will launch a fact-checking app next month.", answer: "is reported", hint: "It + is + V3 + that" },
        { sentence: "The whistleblower is believed ___ (leave) the country three days ago.", answer: "to have left", hint: "Xảy ra trong quá khứ (three days ago) ➔ to have + V3" },
        { sentence: "Public opinion is thought ___ (be) strongly in favor of stricter privacy laws right now.", answer: "to be", hint: "Cùng thời điểm hiện tại ➔ to + V nguyên thể" },
        { sentence: "The celebrity was alleged ___ (accept) undisclosed payments for promoting the product last year.", answer: "to have accepted", hint: "Quá khứ hoàn thành nguyên mẫu: to have + V3" },
        { sentence: "The ancient printing press is estimated ___ (build) around 1450.", answer: "to have been built", hint: "Xảy ra trong quá khứ + Bị động (to have been + V3)" },
        { sentence: "The new media regulation is expected ___ (take) effect in January.", answer: "to take", hint: "Hướng tới tương lai sau is expected ➔ to V" },
        { sentence: "It is widely ___ (know) that sensationalism erodes journalistic credibility.", answer: "known", hint: "It is widely + V3 (known) + that" },
        { sentence: "Several accounts are rumored ___ (spread) misinformation during the election campaign.", answer: "to have spread", hint: "Đã phát tán trong chiến dịch (to have + V3 của spread)" }
      ],
      sentenceBuild: [
        { words: ["It", "is", "believed", "that", "media", "literacy", "prevents", "misinformation", "."], answer: "It is believed that media literacy prevents misinformation .", vi: "Người ta tin rằng kiến thức truyền thông giúp ngăn chặn thông tin sai lệch." },
        { words: ["The", "suspect", "is", "alleged", "to", "have", "fled", "the", "country", "."], answer: "The suspect is alleged to have fled the country .", vi: "Nghi phạm bị cáo buộc là đã trốn khỏi đất nước." },
        { words: ["The", "journal", "is", "thought", "to", "have", "high", "credibility", "."], answer: "The journal is thought to have high credibility .", vi: "Tạp chí đó được cho là có độ tin cậy cao." },
        { words: ["The", "manuscript", "is", "said", "to", "have", "been", "written", "in", "1350", "."], answer: "The manuscript is said to have been written in 1350 .", vi: "Bản thảo đó được cho là đã được viết vào năm 1350." },
        { words: ["The", "editor", "is", "expected", "to", "retract", "the", "inaccurate", "article", "."], answer: "The editor is expected to retract the inaccurate article .", vi: "Tổng biên tập được kỳ vọng sẽ rút lại bài báo không chính xác đó." },
        { words: ["It", "was", "reported", "that", "public", "opinion", "had", "shifted", "."], answer: "It was reported that public opinion had shifted .", vi: "Có tin đưa rằng dư luận xã hội đã thay đổi." }
      ],
      transformation: [
        { sentence: "People believe that the investigative reporter uncovered a major cover-up. (is)", answer: "The investigative reporter is believed to have uncovered a major cover-up.", hint: "Đưa The investigative reporter lên đầu câu + is believed to have V3" },
        { sentence: "Analysts expect that digital subscriptions will surpass print circulation next year. (are)", answer: "Digital subscriptions are expected to surpass print circulation next year.", hint: "Dùng Digital subscriptions are expected to surpass..." },
        { sentence: "Historians think that this stone inscription was carved in the 11th century. (thought)", answer: "This stone inscription is thought to have been carved in the 11th century.", hint: "Quá khứ + Bị động: is thought to have been carved..." },
        { sentence: "Journalists allege that the company disseminated false financial data. (It)", answer: "It is alleged that the company disseminated false financial data.", hint: "Chuyển sang Cách 1: It is alleged that..." },
        { sentence: "Everyone knows that unbiased reporting builds long-term reader trust. (known)", answer: "Unbiased reporting is known to build long-term reader trust.", hint: "Cùng thì hiện tại: is known to build..." }
      ],
      review: [
        { sentence: "The printing press in the basement urgently needs ___ (service).", answer: "servicing", hint: "Ôn tập Day 48: Vật + need + V-ing" },
        { sentence: "The publisher had the controversial chapter ___ (review) by a media lawyer.", answer: "reviewed", hint: "Ôn tập Day 48: have + sth + V3/ed" },
        { sentence: "By next month, she ___ (write) editorials for this newspaper for ten years.", answer: "will have been writing", hint: "Ôn tập Day 47: Tương lai hoàn thành tiếp diễn" },
        { sentence: "By the time the evening news airs, fact-checkers ___ (verify) every quote.", answer: "will have verified", hint: "Ôn tập Day 46: Tương lai hoàn thành" },
        { sentence: "Articles ___ (lack) credible sources are rejected by the chief editor.", answer: "lacking", hint: "Ôn tập Day 42: Rút gọn mệnh đề quan hệ chủ động" }
      ]
    }
  },

  // ==================== DAY 50 (MILESTONE EXAM 10 — STAGE 5 FINAL EXAM) ====================
  {
    day: 50,
    id: "day-50",
    cefr: "B1+",
    stage: 5,
    stageName: "B1+ Upper-Intermediate",
    isExam: true,
    estimatedMinutes: 40,
    title: "Milestone Exam 10: Bài thi Tổng kết Chặng 5 Chuẩn B1+ (Days 31–50) — Xã hội Tương lai",
    titleEn: "Stage 5 Final Exam (Days 31–50) — Future Society & Innovation",
    dailyGoal: "Chinh phục bài thi tổng kết Chặng 5 (B1+ Upper-Intermediate): Hệ thống التام Tương lai (Future Perfect & Continuous), Cầu khiến & Bị động Nâng cao, Bị động Khách quan và tổng ôn toàn chặng Ngày 31–50.",
    vocab: [
      { en: "paradigm", pos: "n", ipa: "/ˈpærədaɪm/", vi: "mô hình tư duy, hệ quy chiếu", example: "Renewable energy and AI have created a new technological paradigm." },
      { en: "ubiquitous", pos: "adj", ipa: "/juːˈbɪkwɪtəs/", vi: "phổ biến khắp mọi nơi", example: "By 2035, smart sensors will have become ubiquitous in urban infrastructure." },
      { en: "telemedicine", pos: "n", ipa: "/ˌtelɪˈmedɪsn/", vi: "y tế từ xa (khám chữa bệnh qua mạng)", example: "Telemedicine allows rural patients to consult specialists in major cities." },
      { en: "biotechnology", pos: "n", ipa: "/ˌbaɪoʊtekˈnɑːlədʒi/", vi: "công nghệ sinh học", example: "Breakthroughs in biotechnology are believed to have extended human life expectancy." },
      { en: "smart grid", pos: "n", ipa: "/smɑːrt ɡrɪd/", vi: "lưới điện thông minh", example: "The city is having a smart grid installed to balance solar and wind power." },
      { en: "hyperloop", pos: "n", ipa: "/ˈhaɪpərluːp/", vi: "tàu đệm từ siêu tốc trong ống chân không", example: "High-speed pods are expected to cut intercity travel time by seventy percent." },
      { en: "nanotechnology", pos: "n", ipa: "/ˌnænoʊtekˈnɑːlədʒi/", vi: "công nghệ nano", example: "Materials engineered with nanotechnology are both ultra-light and durable." },
      { en: "cybersecurity", pos: "n", ipa: "/ˌsaɪbərsɪˈkjʊrəti/", vi: "an ninh mạng", example: "Every digital banking network requires constant cybersecurity upgrading." },
      { en: "quantum computing", pos: "n", ipa: "/ˈkwɑːntəm kəmˈpjuːtɪŋ/", vi: "điện toán lượng tử", example: "Quantum computing is thought to solve complex encryption problems in seconds." },
      { en: "demographics", pos: "n", ipa: "/ˌdeməˈɡræfɪks/", vi: "nhân khẩu học, cơ cấu dân số", example: "Shifting demographics require governments to rethink healthcare and pensions." },
      { en: "smart city", pos: "n", ipa: "/smɑːrt ˈsɪti/", vi: "đô thị thông minh", example: "In a smart city, traffic lights adjust automatically to prevent congestion." },
      { en: "futurist", pos: "n", ipa: "/ˈfjuːtʃərɪst/", vi: "nhà nghiên cứu tương lai học", example: "Futurists predict that lifelong learning will be essential in the automated economy." }
    ],
    grammar: {
      point: "TỔNG HỢP CHẶNG 5 B1+ (NGÀY 46–49 & TOÀN KHÓA 31–50)",
      explanation: `
        <div class="eng-formula-box">
          <strong class="eng-formula-title">1. Trọng tâm Ngày 46–49: Future Perfect, Advanced Causative & Impersonal Passive</strong>
          <ul>
            <li><b>Future Perfect Simple vs. Continuous:</b> <code>will have + V3/ed</code> (hoàn tất trước mốc tương lai / số lượng / Stative Verb) vs. <code>will have been + V-ing</code> (nhấn mạnh quá trình liên tục <code>by... for...</code>).</li>
            <li><b>Advanced Causative & Passive:</b> <code>have/get + sth + V3/ed</code> (thuê dịch vụ hoặc gặp rủi ro) | <code>Vật + need / require / want + V-ing (= to be V3/ed)</code>.</li>
            <li><b>Impersonal Passive:</b> <code>It is said/believed that...</code> ↔ <code>S + is said/believed + to V</code> (hiện tại/tương lai) hoặc <code>to have + V3/ed</code> (quá khứ/hoàn thành).</li>
          </ul>
        </div>
        <div class="eng-formula-box">
          <strong class="eng-formula-title">2. Ôn tập Liên thông Toàn Chặng 5 (Days 31–45)</strong>
          <ul>
            <li><b>Days 31–35:</b> Past Perfect (<code>had V3</code>), Past Perfect Continuous (<code>had been V-ing</code>), Conditional Type 3 & Đảo ngữ (<code>Had + S + V3...</code>).</li>
            <li><b>Days 36–40:</b> Mixed Conditionals, <code>wish / if only / It's high time</code>, Past Modals (<code>must / can't / might / should / needn't have + V3</code>).</li>
            <li><b>Days 41–45:</b> Relative Clauses (<code>, which</code>, <code>whose</code>, <code>Prep + whom/which</code>, <code>all of whom/which</code>), Reduced Relative Clauses (<code>V-ing / V3 / to V</code>), Participle Clauses (<code>Having + V3</code>).</li>
          </ul>
        </div>
      `,
      examples: [
        { en: "By 2035, our metropolis <b>will have deployed</b> a smart grid, and engineers <b>will have been testing</b> quantum networks for a decade.", vi: "Tính đến năm 2035, siêu đô thị của chúng ta sẽ triển khai xong lưới điện thông minh, và các kỹ sư sẽ thử nghiệm mạng lượng tử được một thập kỷ." },
        { en: "The hospital's telemedicine server urgently <b>needs upgrading</b>, so we <b>are having it serviced</b> tonight.", vi: "Máy chủ y tế từ xa của bệnh viện cần được nâng cấp gấp, nên tối nay chúng tôi đang thuê kỹ thuật viên bảo trì nó." },
        { en: "Breakthroughs in biotechnology <b>are believed to have saved</b> millions of lives over the past decade.", vi: "Những đột phá trong công nghệ sinh học được tin là đã cứu sống hàng triệu người trong thập kỷ qua." },
        { en: "<b>Having mastered</b> all twenty lessons of Stage 5, you are now ready to advance to B2 Academic Mastery!", vi: "Sau khi đã làm chủ trọn vẹn 20 bài học của Chặng 5, giờ bạn đã sẵn sàng tiến lên Chặng 6 Tinh thông Học thuật B2!" }
      ],
      commonMistake: {
        wrong: "By the time the summit will end tomorrow, delegates will have been signing three cybersecurity treaties.",
        right: "By the time the summit **ends** tomorrow, delegates **will have signed** three cybersecurity treaties.",
        note: "Nhớ 2 quy tắc vàng: (1) Không dùng 'will' sau 'By the time' (dùng 'ends'); (2) Khi có số lượng cụ thể ('three cybersecurity treaties'), dùng Tương lai hoàn thành đơn ('will have signed'), không dùng tiếp diễn!"
      },
      memoryTip: "Chúc mừng bạn đã cán đích Ngày 50 (Hoàn thành Chặng 5 B1+)! Hãy vận dụng tư duy phân tích dấu hiệu thời gian, chủ động/bị động và cấu trúc học thuật để đạt điểm tuyệt đối!"
    },
    dialogue: null,
    exercises: {
      multipleChoice: [
        { q: "By the time the smart city project finishes in 2030, urban planners ___ on it for twelve years.", options: ["will work", "will have been working", "had been working"], answer: "will have been working", explanation: "'By the time + Hiện tại đơn (finishes)' kết hợp 'for twelve years' ➔ Tương lai hoàn thành tiếp diễn (will have been working)." },
        { q: "By next December, the national hospital ___ telemedicine stations in all sixty-three provinces.", options: ["will have installed", "will have been installing", "installed"], answer: "will have installed", explanation: "Nhấn mạnh kết quả hoàn tất với số lượng cụ thể ('all sixty-three provinces') trước mốc tương lai ➔ will have installed." },
        { q: "The cybersecurity firewall in our main server room urgently needs ___.", options: ["to update", "updating", "updated"], answer: "updating", explanation: "Chủ ngữ là vật ('firewall') + 'needs' ➔ dùng 'needs + V-ing' (updating = to be updated)." },
        { q: "The quantum computing prototype is reported ___ a complex logistics puzzle in three seconds yesterday.", options: ["to solve", "to have solved", "solving"], answer: "to have solved", explanation: "Bị động khách quan với hành động đã xảy ra hôm qua ('yesterday') ➔ is reported + to have + V3 (to have solved)." },
        { q: "We are having the laboratory ventilation system ___ before the biotechnology trial begins.", options: ["inspect", "inspected", "inspecting"], answer: "inspected", explanation: "Cầu khiến bị động: 'have + sth + V3/ed' (inspected)." },
        { q: "___ the safety audit, the autonomous shuttle was cleared for public operation.", options: ["Having passed", "Passed", "Be passing"], answer: "Having passed", explanation: "Mệnh đề phân từ hoàn thành chủ động (xe tự hành đã vượt qua kỳ kiểm tra an toàn trước đó) ➔ Having passed." },
        { q: "The futurist to ___ the journalist referred predicted the rise of ubiquitous computing in 1995.", options: ["who", "whom", "that"], answer: "whom", explanation: "Đứng ngay sau giới từ 'to' và chỉ người ('The futurist') ➔ dùng whom." },
        { q: "If our company had invested in cloud infrastructure five years ago, our productivity ___ much higher today.", options: ["would be", "would have been", "will be"], answer: "would be", explanation: "Mixed Conditional (Quá khứ ➔ Hiện tại 'today'): If + had V3, S + would + V." },
        { q: "The ancient artifacts were sealed in nitrogen-filled cases, so moisture ___ damaged them.", options: ["must have", "can't have", "should have"], answer: "can't have", explanation: "Suy luận phủ định chắc chắn trong quá khứ dựa trên bằng chứng ➔ can't have damaged." },
        { q: "You ___ printed forty copies of the blueprint; everyone is viewing the 3D model on their tablets!", options: ["needn't have", "didn't need", "mustn't have"], answer: "needn't have", explanation: "Đã trót in 40 bản không cần thiết ➔ needn't have + V3." }
      ],
      fillBlank: [
        { sentence: "By 2032, the transit authority ___ (complete) the coastal hyperloop line.", answer: "will have completed", hint: "Tương lai hoàn thành với By 2032" },
        { sentence: "By the end of this shift, the supercomputer ___ (run) the simulation for forty hours.", answer: "will have been running", hint: "Tương lai hoàn thành tiếp diễn (có for forty hours)" },
        { sentence: "The old copper wiring in the warehouse requires ___ (replace) to prevent fire hazards.", answer: "replacing", hint: "Vật + require + V-ing" },
        { sentence: "The ancient citadel is believed ___ (construct) during the 11th century.", answer: "to have been constructed", hint: "Bị động khách quan ở quá khứ + bị động (to have been + V3)" },
        { sentence: "We ___ (have) our smart grid meters calibrated by a technician tomorrow morning.", answer: "will have", hint: "Cầu khiến bị động tương lai: will have + sth + V3" },
        { sentence: "___ (Have / verify) all primary sources, the editor approved the investigative report.", answer: "Having verified", hint: "Phân từ hoàn thành chủ động (Having + V3)" },
        { sentence: "The symposium was attended by fifty biotechnologists, all of ___ (whom / them) presented new findings.", answer: "whom", hint: "Lượng từ + of whom" },
        { sentence: "Had the municipality ___ (act) earlier, traffic congestion wouldn't be so severe now.", answer: "acted", hint: "Đảo ngữ Mixed Conditional: Had + S + V3" }
      ],
      sentenceBuild: [
        { words: ["By", "2035,", "smart", "grids", "will", "have", "become", "ubiquitous", "."], answer: "By 2035, smart grids will have become ubiquitous .", vi: "Tính đến năm 2035, lưới điện thông minh sẽ trở nên phổ biến khắp mọi nơi." },
        { words: ["By", "noon,", "she", "will", "have", "been", "analyzing", "demographics", "for", "five", "hours", "."], answer: "By noon, she will have been analyzing demographics for five hours .", vi: "Tính đến trưa, cô ấy sẽ phân tích nhân khẩu học liên tục được năm tiếng." },
        { words: ["The", "telemedicine", "network", "urgently", "needs", "upgrading", "."], answer: "The telemedicine network urgently needs upgrading .", vi: "Mạng lưới y tế từ xa cần được nâng cấp gấp." },
        { words: ["Quantum", "computing", "is", "expected", "to", "transform", "cybersecurity", "."], answer: "Quantum computing is expected to transform cybersecurity .", vi: "Điện toán lượng tử được kỳ vọng sẽ làm thay đổi ngành an ninh mạng." },
        { words: ["The", "artifact", "is", "believed", "to", "have", "belonged", "to", "an", "emperor", "."], answer: "The artifact is believed to have belonged to an emperor .", vi: "Hiện vật đó được tin là đã thuộc về một vị hoàng đế." },
        { words: ["We", "had", "the", "entire", "laboratory", "rewired", "last", "month", "."], answer: "We had the entire laboratory rewired last month .", vi: "Tháng trước chúng tôi đã thuê đi lại dây điện cho toàn bộ phòng thí nghiệm." }
      ],
      transformation: [
        { sentence: "Experts expect that nanotechnology will revolutionize targeted medicine. (is)", answer: "Nanotechnology is expected to revolutionize targeted medicine.", hint: "Đưa Nanotechnology lên làm chủ ngữ + is expected to V" },
        { sentence: "Journalists report that the biotech startup raised fifty million dollars last quarter. (reported)", answer: "The biotech startup is reported to have raised fifty million dollars last quarter.", hint: "Quá khứ (last quarter) ➔ is reported to have raised..." },
        { sentence: "The cooling system in the data center needs to be serviced immediately. (servicing)", answer: "The cooling system in the data center needs servicing immediately.", hint: "Chuyển needs to be serviced thành needs servicing" },
        { sentence: "The astronauts will finish deploying the telescope before the spacewalk ends. (By the time)", answer: "By the time the spacewalk ends, the astronauts will have finished deploying the telescope.", hint: "Dùng By the time + Hiện tại đơn, S + will have finished..." },
        { sentence: "After the engineers had calibrated the smart grid, they ran a full simulation. (Having)", answer: "Having calibrated the smart grid, the engineers ran a full simulation.", hint: "Rút gọn bằng Having + V3 đầu câu" }
      ],
      review: [
        { sentence: "It's high time the company ___ (invest) in stronger cybersecurity protocols.", answer: "invested", hint: "Ôn tập Day 37: It's high time + S + V2/ed" },
        { sentence: "Dr. Minh was the first Vietnamese scientist ___ (win) that international biotechnology prize.", answer: "to win", hint: "Ôn tập Day 42: Rút gọn mệnh đề quan hệ sau the first" },
        { sentence: "If they ___ (not / overlook) the software bug last week, the server would be running smoothly now.", answer: "had not overlooked", hint: "Ôn tập Day 36: Câu điều kiện hỗn hợp" },
        { sentence: "The futurist ___ (whose / whom) book we read last month is speaking in Hanoi today.", answer: "whose", hint: "Ôn tập Day 41: Đại từ quan hệ chỉ sở hữu" },
        { sentence: "By the time the rescue team arrived, the villagers ___ (evacuate) to higher ground.", answer: "had evacuated", hint: "Ôn tập Day 31: Quá khứ hoàn thành" }
      ]
    }
  }
];
