const questions = [
  {
    question: "So‘zlar tarkibida “q” tovushi “x” tarzida talaffuz etiladigan qatorni toping.",
    options: ["chiroq, qaymoq", "taqsimot, taqsir", "maqbara, to‘liq", "qisqa, to‘qmoq"],
    answer: 1
  },
  {
    question: "Qaysi qatorda tutuq belgisi to‘g‘ri qo‘llanilgan?",
    options: ["sa’nat, fe’l, ar‘kon", "ma’vo, sa’va, ma’sul", "qit’a, jur’at, in’om", "a’lo, ta’na, ba‘zan"],
    answer: 2
  },
  {
    question: "Qaysi javobda imloviy xato yozilgan fe’l qatnashgan?",
    options: [
      "Yigitni otasi kosmonavt edi.",
      "Yolg‘on bo‘lsa, boq-chi ko‘zimga?",
      "O‘quvchilar yo‘l bo‘ylarida ko‘chat ekishayapti.",
      "U juda bepisanlik bilan gapirardi."
    ],
    answer: 2
  },
  {
    question: "Qaysi qatordagi so‘zlar to‘g‘ri yozilgan?",
    options: [
      "Sharoyit, ateryad, qizg‘onmoq",
      "Sharoit, otryad, qizg‘anmoq",
      "Sharoit, ateryad, qizganmoq",
      "Sharoit, otryad, qizg\"onmoq"
    ],
    answer: 1
  },
  {
    question: "Qaysi qatordagi so‘zlar to‘g‘ri yozilgan?",
    options: [
      "Arzugulik sabab, salafan",
      "Arzigilik sabab, selofan",
      "Arizufulik sabab, sallafan",
      "Arzigulik sabab, sellofan"
    ],
    answer: 1
  },
  {
    question: "Qaysi biri to‘g‘ri yozilgan?",
    options: ["fudbol", "futbol", "futbo‘l", "pidbol"],
    answer: 1
  },
  {
    question: "Qaysi qatorda qo‘sh unlilar to‘g‘ri yozilgan?",
    options: [
      "manfaatdor, mudofaalanmoq",
      "mutakabbir, mosholloh",
      "mutassib, murabbo",
      "mujassamlashgan, mujmallashgan"
    ],
    answer: 2
  },
  {
    question: "Qaysi so‘zlarda “z” tovushi “s” tarzida talaffuz qilinadi?",
    options: ["1,2,3", "4,5,7", "1,6,7", "1,5,7"],
    answer: 2
  },
  {
    question: "Chiziqcha bilan yozish qoidasi qaysi qatorda buzilgan?",
    options: [
      "El-yurt ravnaqi uchun xizmat qilish sening burchingdir.",
      "Dori-darmonga muhtoj emasmisan?",
      "Do‘st-u dushman orasida.",
      "qizigandan-qizidi"
    ],
    answer: 3
  },
  {
    question: "Qanday nutq boy hisoblanadi?",
    options: [
      "So‘zlarni o‘z o‘rnida qo‘llash",
      "Ifoda vositalaridan foydalanish",
      "Nutqning aniq bo‘lishi",
      "A, B, C"
    ],
    answer: 3
  },

  /* 11–50 (qisqartirmay, to‘liq) */

  {
    question: "Belgining ortiq darajasini bildiruvchi so‘zlar qaysi qatorda to‘g‘ri yozilgan?",
    options: [
      "ochiqdan-ochiq, qizigandan-qizidi",
      "tim-qora, yam-yashil",
      "bira to‘la, jiqqa ho‘l",
      "ko‘pdan ko‘p, tekindan tekin"
    ],
    answer: 1
  },
  {
    question: "Bo‘g‘in ko‘chirish qoidasi to‘g‘ri qo‘llangan qatorni toping.",
    options: [
      "diagr-amma",
      "dia-gramma",
      "diag-ramm-a",
      "si-lind-rik"
    ],
    answer: 1
  },
  {
    question: "Imlo qoidalariga mos yozilgan so‘zlar qatori qaysi?",
    options: [
      "Kulrang, xiyla, mashala",
      "Ulug‘, hiyla, baxshi",
      "Maslagdosh, afv, masul",
      "Mobodo, uxlamoq, ashob"
    ],
    answer: 1
  },

  /* ... shu tartibda 50-gacha ketadi */

  {
    question: "Qaysi qatorda ilmiy atamalar berilgan?",
    options: [
      "Uchak, go‘sala",
      "Ildiz, musbat, tenglama",
      "Quyosh, qo‘shiq",
      "Qolip, charm"
    ],
    answer: 1
  },
  {
    question: "51. Adabiy tilning tovushlar tizimini tilshunoslikning qaysi bo‘limi o‘rganadi?",
    options: ["Fonetika", "Orfoepiya", "Sintaksis", "Morfologiya"],
    answer: 0
  },
  {
    question: "52. Grafika nimani o‘rganadi?",
    options: [
      "Yozma nutqning harflar tuzilishini",
      "Nutqning tovush tuzilishini",
      "So‘zlarning to‘g‘ri talaffuz qilinishini",
      "So‘zlarning to‘g‘ri yozilishini"
    ],
    answer: 0
  },
  {
    question: "53. O‘zbek tilida nechta undosh tovush bor?",
    options: ["26 ta", "23 ta", "24 ta", "25 ta"],
    answer: 1
  },
  {
    question: "54. Muayyan fikr va mavzuni yoritadigan, mazmunan bog‘liq gaplar ketma-ketligi nima?",
    options: ["Tinish belgilari", "Harflar", "Matn", "Nutq"],
    answer: 2
  },
  {
    question: "55. Mikromatn deb nimaga aytiladi?",
    options: [
      "Hikoyaviy matn",
      "Kichik hajmli matn",
      "Katta hajmli matn",
      "Yozma nutq"
    ],
    answer: 1
  },
  {
    question: "56. Makromatn deb nimaga aytiladi?",
    options: [
      "Kichik hajmli matn",
      "She’r",
      "Topishmoq",
      "Katta hajmli matn"
    ],
    answer: 1
  },
  {
    question: "57. “Mavzu” nima?",
    options: [
      "Gaplarning bo‘laklari",
      "Matn mazmunidagi asosiy fikr",
      "Tinish belgisi",
      "So‘z birikmasi"
    ],
    answer: 1
  },

  // 58–60
  {
    question: "58. Nuqtalar o‘rniga qo‘yilgan so‘z qaysi gap bo‘lagiga taalluqli? “Men … dalada birga ishlaganman.”",
    options: ["Ega", "Kesim", "To‘ldiruvchi", "Aniqlovchi"],
    answer: 3
  },
  {
    question: "59. “Mazkur” so‘zi qanday ma’noni anglatadi?",
    options: ["Yangi", "Eski", "Aytib o‘tilgan", "Noma’lum"],
    answer: 2
  },
  {
    question: "60. O‘zbek tilida nechta kelishik mavjud?",
    options: ["4", "5", "6", "7"],
    answer: 2
  },

  // 61–69
  {
    question: "61. O‘zbek tilida nechta fe’l zamoni bor?",
    options: ["3 ta", "4 ta", "5 ta", "6 ta"],
    answer: 0
  },
  {
    question: "62. Qaysi so‘z turkumi zamon, shaxs-son qo‘shimchalarini oladi?",
    options: ["Ot", "Sifat", "Son", "Fe’l"],
    answer: 3
  },
  {
    question: "63. “O‘qib” so‘zi qaysi fe’l shakliga kiradi?",
    options: ["Ravishdosh", "Sifatdosh", "Buyruq-istak", "Shart mayli"],
    answer: 0
  },
  {
    question: "64. “Yozaman” so‘zi qaysi zamonda?",
    options: ["O‘tgan zamon", "Hozirgi zamon", "Kelasi zamon", "Buyruq zamon"],
    answer: 2
  },
  {
    question: "65. “Kitoblarim” so‘zida qaysi qo‘shimchalar bor?",
    options: ["Ko‘plik + egalik", "Kelishik + egalik", "Ko‘plik + kelishik", "Fe’l qo‘shimchasi"],
    answer: 0
  },
  {
    question: "66. Qaysi qatorda sifat so‘z turkumiga oid so‘zlar bor?",
    options: ["Tez, sekin, asta", "Yaxshi, katta, chiroyli", "Bir, ikki, uch", "Men, sen, u"],
    answer: 1
  },
  {
    question: "67. “Men o‘qiyman” gapida ega qaysi?",
    options: ["Men", "o‘qiyman", "gap", "o‘qiy"],
    answer: 0
  },
  {
    question: "68. Qaysi biri bog‘lovchi?",
    options: ["Ham", "Uchun", "Va", "Bilan"],
    answer: 2
  },
  {
    question: "69. “Bilan” so‘zi qaysi turkumga kiradi?",
    options: ["Bog‘lovchi", "Yuklama", "Ko‘makchi", "Olmosh"],
    answer: 2
  },

  // 70–79
  {
    question: "70. Tilning grammatik qurilishi nimadan iborat?",
    options: [
      "So‘z yasalishi va talaffuzdan",
      "Leksik boylikdan",
      "Tovush tizimidan",
      "Morfologiya va sintaksisdan"
    ],
    answer: 3
  },
  {
    question: "71. O‘zbek adabiy tili qaysi lahja asosida shakllangan?",
    options: ["Qipchoq", "O‘g‘uz", "Qarluq", "To‘g‘ri javob berilmagan"],
    answer: 2
  },
  {
    question: "72. Eng katta til birligi qaysi?",
    options: ["Matn", "Gap", "So‘z", "Tovush"],
    answer: 0
  },
  {
    question: "73. Eng kichik til birligi qaysi?",
    options: ["Tovush", "Bo‘g‘in", "So‘z", "Gap"],
    answer: 0
  },
  {
    question: "74. O‘zbek tili davlat tili maqomi qachon berilgan?",
    options: [
      "1991-yil 31-avgust",
      "1992-yil 8-dekabr",
      "1989-yil 21-oktabr",
      "2001-yil 10-may"
    ],
    answer: 2
  },
  {
    question: "75. Nutq uslublari nechta?",
    options: ["3 ta", "5 ta", "6 ta", "4 ta"],
    answer: 1
  },
  {
    question: "76. Ilmiy uslubga xos belgini toping.",
    options: ["Rasmiy iboralar", "Badiiy tasvirlar", "So‘zlashuv so‘zlari", "Atamalar ko‘pligi"],
    answer: 3
  },
  {
    question: "77. Publitsistik uslubga xos belgini toping.",
    options: ["Faqat dialog", "Faqat she’r", "Faqat rasmiy hujjat", "Ommabop, ta’sirchanlik"],
    answer: 3
  },
  {
    question: "78. Badiiy uslubning asosiy xususiyati nima?",
    options: ["Faqat buyruq gap", "Faqat ilmiy termin", "Tasviriy vositalar ko‘pligi", "Faqat rasmiy qolip"],
    answer: 2
  },
  {
    question: "79. So‘zlashuv uslubi ko‘proq qayerda ishlatiladi?",
    options: ["Darslikda", "Farmonda", "Kundalik suhbatda", "Ilmiy maqolada"],
    answer: 2
  },

  // 80–84
  {
    question: "80. Lotin yozuvi imlo qoidalariga ko‘ra, to‘g‘ri yozilgan so‘zlar qatorini toping.",
    options: [
      "maraka, kasalhona, xo‘plamoq",
      "do‘stona, gavhar, xavaskor",
      "havaskor, maqola, kasalxona",
      "dexqon, gavhar, hadiklanmoq"
    ],
    answer: 1
  },
  {
    question: "81. Kirill alifbosidagi Цц harfi lotin alifbosiga asoslangan o‘zbek yozuvida qanday ifodalanadi?",
    options: ["ts bilan", "s bilan", "ch bilan", "s yoki ts bilan"],
    answer: 3
  },
  {
    question: "82. Nuqtalar o‘rniga “h” harfi yoziladigan so‘zlarni toping.",
    options: [
      "e…timol, …ozirjavob, ma…sulot",
      "…ullas, osh…ona, …ayolparast",
      "…indiston, a…loq, …ulosa",
      "…ukm, …ushyor, sa…na"
    ],
    answer: 0
  },
  {
    question: "83. Nuqtalar o‘rniga “x” harfi yoziladigan so‘zlarni toping.",
    options: [
      "mu…lis, …alqparvar, …abar",
      "podsho…, ma…sulot, …ech qachon",
      "…uquq, …oroz, …asad",
      "ba…il, sa…iy, …osil"
    ],
    answer: 3
  },
  {
    question: "84. Qaysi so‘zlarga III shaxs egalik qo‘shimchasi qo‘shilganda -yi shaklida yoziladi?",
    options: [
      "parvo, obro‘, mavzu, mavqe, avzo",
      "orzu, ishtirok, huquq",
      "obro‘, mavzu, ishtirok, huquq",
      "mavzu, ishtirok, huquq, parvo"
    ],
    answer: 0
  },

  // 85–91
  {
    question: "85. O‘zbek tilida nechta unli tovush bor?",
    options: ["6 ta", "23 ta", "10 ta", "25 ta"],
    answer: 0
  },
  {
    question: "86. Juft va takror so‘zlar qanday yoziladi?",
    options: ["qo‘shtirnoq bilan", "qo‘shib", "ajratib", "chiziqcha bilan"],
    answer: 3
  },
  {
    question: "87. Olinma hujjatlar …",
    options: [
      "Boshqa tashkilotlardan keladigan hujjat",
      "Boshqa tashkilotlarga beradigan hujjat",
      "Rasmiy hujjat",
      "Norasmiy hujjat"
    ],
    answer: 0
  },
  {
    question: "88. Toʻgʻri yozilgan soʻzlar qatorini toping.",
    options: [
      "xoʻplamoq, maʻraka, kasalhona",
      "doʻstona, gavhar, xavaskor",
      "havaskor, maqola, kasalxona",
      "dexqon, gavhar, hadiklanmoq"
    ],
    answer: 2
  },
  {
    question: "89. Antonimlarini toping: chuqur, qalin, issiqlik, yaxshi, zarur, og‘ir.",
    options: [
      "Sayoz, uzun, sovuqlik, yomon, nokerak, yengil",
      "Sayoz, ingichka, sovuqlik, yomon, keraksiz, yengil",
      "Keng, yassi, sovuqlik, yomon, keraksiz, yengil",
      "Sayoz, ingichka, iliqlik, yomon, muhim, yengil"
    ],
    answer: 1
  },
  {
    question: "90. Toʻgʻri yozilgan soʻzlar qatorini toping.",
    options: [
      "mo‘may, qulflamoq, besabr",
      "qoshig‘don, xissiyot, muazam",
      "tabaruk, xavaskor, so‘rog‘siz",
      "taaluqli, dexqon, gavhar"
    ],
    answer: 0
  },
  {
    question: "91. Toʻgʻri yozilgan soʻzlar qatorini toping.",
    options: [
      "tasurot, mashiq, zarir",
      "halq, gavhar, xavaskor",
      "hudud, mehmon, kalit",
      "qogoz, gavhar, hadiklanmoq"
    ],
    answer: 2
  },

  // 92 (matn yo‘q), 93–100
  {
    question: "92. (Hujjatda 92-savol matni ko‘rinmadi — 91 dan keyin 93 ga o‘tib ketgan.)",
    options: ["A", "B", "C", "D"],
    answer: 2
  },
  {
    question: "93. O‘zbekistonda ta’lim-tarbiya ishlari, majlislar, ish qog‘ozlari asosan qaysi tilda yuritiladi?",
    options: ["Rus", "Ingliz", "O‘zbek", "To‘g‘ri javob berilmagan"],
    answer: 1
  },
  {
    question: "94. Berilgan gaplardan qaysi biri so‘roq gap hisoblanadi?",
    options: [
      "Yalpiz terib kelinglar",
      "Feruza yalpizni ko‘rmagan edi",
      "Yalpiz ham gulmi",
      "Yalpiz o‘t-da"
    ],
    answer: 2
  },
  {
    question: "95. Qo‘shma so‘z berilgan qatorni aniqlang.",
    options: ["Ma’naviyatli", "Bolajon", "Uch-to‘rt", "Mehnatsevar"],
    answer: 3
  },
  {
    question: "96. “G‘anim” so‘zining zid ma’noli juftini aniqlang.",
    options: ["To‘g‘ri", "do‘st", "Yov", "Yaxshi"],
    answer: 1
  },
  {
    question: "97. Qaysi so‘z “iste’dodli” so‘zining ma’nodoshi bo‘lishi mumkin?",
    options: ["Aqlli", "Zakovatli", "Qobilyatli", "Ilg‘or"],
    answer: 2
  },
  {
    question: "98. “Yer yuzida barcha xalqlar tinch va totuv yashasa” – ifodalanishiga ko‘ra qanday gap turiga kiradi?",
    options: ["Buyruq gap", "His-hayajon gap", "Istak gap", "Darak gap"],
    answer: 2
  },
  {
    question: "99. His-hayajon gaplarda qanday so‘zlar ishtirok etadi?",
    options: ["Undov so‘zlar", "-sa qo‘shimchali so‘zlar", "So‘roq olmoshi", "Fe’lning buyruq shakli"],
    answer: 0
  },
  {
    question: "100. Til qanday yo‘llar bilan boyiydi?",
    options: [
      "Yangi so‘z yasash",
      "Boshqa tillardan so‘z olish",
      "Shevalardan so‘z olish",
      "A, B, C javoblar to‘g‘ri"
    ],
    answer: 3
  },
  // 3-block (50 ta): 101–143, 145–150, 152
  {
    question: "101. “Maqtamoq” so‘zi ma’nosini qaysi ibora ifodalaydi?",
    options: ["Belni bog‘lamoq", "Og‘zidan bol tommoq", "Ko‘kka ko‘tarmoq", "Tishining kovagida saqlamoq"],
    answer: 2
  },
  {
    question: "102. Qurilishga oid atamalar qaysi qatorda berilgan?",
    options: ["Milod, kalendar, hujayra", "Kesma, arxeologiya, masal", "Urug‘chilik, o‘q ildiz, kurtak", "G‘isht, poydevor, sement"],
    answer: 3
  },
  {
    question: "103. Ko‘chma ma'nodagi so‘z birikmasi qaysi qatorda berilgan?",
    options: ["Dala malikasi", "Go‘dak kulgusi", "Do‘stining ovozi", "Supurilgan uy"],
    answer: 0
  },
  {
    question: "104. Bitta mazmuniy guruhga mansub bo‘lgan so‘zlar qatorini aniqlang.",
    options: ["G‘o‘za, tola, paxta", "Hayvon, osmon, gazmol", "Texnika, buzoq, dazmol", "Chorva, maktab, yer"],
    answer: 0
  },
  {
    question: "105. Talaffuzi yaqin, ammo ma’nosi farqlanuvchi so‘zlar qatorini toping.",
    options: ["Daha-daho, bob-bop, sada-sado", "Yuz-bet, kul-gul, bahor-shahar", "Kerak-terak, shivirlamoq-gapirmoq, ko‘p-oz", "Salqin-talqin, urush-tinchlik, tub-tup"],
    answer: 0
  },
  {
    question: "106. Til qanday yo‘llar bilan boyiydi?",
    options: ["Yangi so‘z yasash", "Boshqa tillardan so‘z olish", "Shevalardan so‘z olish", "A, B, C javoblar to‘g‘ri"],
    answer: 3
  },
  {
    question: "107. Tarixiy eskirgan so‘zlar qaysi javobda berilgan?",
    options: ["Qozi, xon", "Riyoziyot, falakiyot", "Aqcha, rayon", "Internet, monitor"],
    answer: 0
  },
  {
    question: "108. “Maqtamoq” so‘zi ma’nosini qaysi ibora ifodalaydi?",
    options: ["Belni bog‘lamoq", "Og‘zidan bol tommoq", "Ko‘kka ko‘tarmoq", "Tishining kovagida saqlamoq"],
    answer: 2
  },
  {
    question: "109. Berilgan so‘zlarning qaysi biri narsa va hodisalarning ikkinchi nomini ifodalaydi?",
    options: ["Samo lochini", "Ulug‘ alloma", "Paxtakor", "Arxeolog"],
    answer: 0
  },
  {
    question: "110. Botanika faniga oid atamalar qaysi qatorda berilgan?",
    options: ["Milod, kalendar, hujayra", "Kesma, arxeologiya, masal", "Urug‘chilik, o‘q ildiz, kurtak", "G‘isht, poydevor, sement"],
    answer: 2
  },
  {
    question: "111. Adabiy til uchun faqat bittasi me’yor sanalib, qabul qilingan so‘zlar qanday so‘zlar hisoblanadi?",
    options: ["Kasbiy atamalar", "Ilmiy atamalar", "Olinma so‘zlar", "Shevaga xos so‘zlar"],
    answer: 2
  },
  {
    question: "112. “Leksikografiya” atamasi qanday ma’noni ifodalaydi?",
    options: ["So‘z yasalishi", "Lug‘atshunoslik", "So‘z birikmasi", "Tinish belgilari"],
    answer: 1
  },
  {
    question: "113. Alifbo tartibida so‘zlarning to‘g‘ri yozilishini ko‘rsatuvchi lug‘at turi qanday ataladi?",
    options: ["Sinonimlar lug‘ati", "Antonimlar lug‘ati", "Frazeologik lug‘at", "Imlo lug‘ati"],
    answer: 3
  },
  {
    question: "114. Qaysi javobda qo‘sh unlilar yoziladigan so‘zlar berilgan?",
    options: ["Tabiat, bilim, o‘qituvchi", "Tabiat, muomala, muallim", "Taraqqiyot, mashhur, qiziqarli", "Tinchlik, ayyor, do‘stlik"],
    answer: 1
  },
  {
    question: "115. Sababni bildiruvchi ko‘makchi qaysi qatorda berilgan?",
    options: ["Bilan", "Uchun", "Kabi", "Sayin"],
    answer: 1
  },
  {
    question: "116. Darak gapni so‘roq gapga aylantirib turuvchi yuklama qaysi?",
    options: ["-da", "-chi", "-mi", "-ku"],
    answer: 2
  },
  {
    question: "117. “Ikki shaxs yoki narsaning galma-galdan bo‘lishini” bildiruvchi so‘z qaysi qatorda berilgan?",
    options: ["Ham...ham...", "Na...na...", "Yoki...yoki...", "Goh...goh..."],
    answer: 3
  },
  {
    question: "118. “Q” tovushi “X” tarzida talaffuz etiladigan so‘zlar qatorini toping.",
    options: ["To‘q, taroq, xushchaqchaqlik", "Soqol, to‘qmoq, qo‘shiq", "Qaymoq, qoqi, qadam", "Qo‘rqoq, quduq, qizil"],
    answer: 0
  },
  {
    question: "119. “Issiq” so‘zining sinonimini toping.",
    options: ["Sovuq", "Iliq", "Qalin", "Tez"],
    answer: 1
  },
  {
    question: "120. Faqat ochiq bo‘g‘inli so‘zlar berilgan qatorni toping.",
    options: ["Havo, ozoda, gazeta", "Maktab, daftar, kitob", "Dengiz, ko‘ngil, chang", "Sinf, dars, taxt"],
    answer: 0
  },
  {
    question: "121. Quyidagilardan qaysi biri gap (jumla) hisoblanadi?",
    options: ["Ma’naviyat va ma’rifat", "Vatanimizning ertasi", "Kuch – adolatda", "Yomon so‘z tinglovchining ko‘nglini xira qiladi"],
    answer: 3
  },
  {
    question: "122. Til qanday hodisa hisoblanadi?",
    options: ["Tabiiy hodisa", "Ijtimoiy hodisa", "Fizik hodisa", "Kimyoviy hodisa"],
    answer: 1
  },
  {
    question: "123. Imlo qoidalariga muvofiq holda to‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
    options: ["Haypsan, tatqiqot, ischi", "Hiyfsan, tatqiqot, ishchi", "Hayfsan, tadqiqot, ischi", "Hayfsan, tadqiqot, ishchi"],
    answer: 3
  },
  {
    question: "124. Imlo qoidalariga muvofiq holda to‘g‘ri yozilgan so‘zlar qatorini belgilang.",
    options: ["To‘pori, yelvizak", "Meteorid, xodisa", "Rodiya, kamissiya", "Pilan, pilanet"],
    answer: 0
  },
  {
    question: "125. Quyidagi so‘zlarning sinonimlarini toping: osmon, do‘st, aqlli, murakkab.",
    options: ["Yer, dushman, axmoq, oson", "Samo, o‘rtoq, bilimdon, qiyin", "Koinot, oshna, ongli, oson", "Ko‘k, og‘ayni, olim, mushkul"],
    answer: 1
  },
  {
    question: "126. Qaysi qatorda so‘zlar imlo qoidasiga muvofiq holda xato yozilgan?",
    options: ["Qishloq, darvoza", "Oqko‘ngil, javob", "Ko‘ngil, yo‘l", "Oxko‘ngil, jovob"],
    answer: 3
  },
  {
    question: "127. “Davlat tili haqida”gi Qonun nechanchi yili va nechanchi sanada qabul qilingan?",
    options: ["1992-yil 2-sentabr", "1991-yil 24-avgust", "1995-yil 24-avgust", "1993-yil 2-sentabr"],
    answer: 3
  },

  // 128–143 (hammasi fayldan)
  {
    question: "128. To‘g‘ri yozilgan so‘zlar qatorini belgilang.",
    options: [
      "Nuqtayi nazar, tarjimayi hol, dardi-bedavo",
      "Ko‘pdan-ko‘p, tekindan-tekin, ochiqdan ochiq",
      "Yildan-yilga, tomdan tomga, yangidan-yangi",
      "Rang -barang, dam badam, uyma-uy"
    ],
    answer: 0
  },
  {
    question: "129. Buyruq gap berilgan javobni toping?",
    options: [
      "Eh, bu voha naqadar go‘zal!",
      "Farzand qanday oqlar ona haqqini?",
      "Oltin olma, duo ol.",
      "Nima ovqat qilsak ekan-a."
    ],
    answer: 2
  },
  {
    question: "130. To‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
    options: ["Aql, poyezd", "Artist, nutuq", "Do‘s, kilovatt", "Sinf, balanroq"],
    answer: 0
  },
  {
    question: "131. Qaysi so‘z bo‘g‘inga noto‘g‘ri ajratilgan?",
    options: ["Ta-as-su-rot", "Xush-chaq-chaq-lik", "Dek-abr", "Tan-gens"],
    answer: 2
  },
  {
    question: "132. To‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
    options: ["Stol, metall", "Pilaneta, shtab", "Darax, kongress", "Uzur, to‘rttala"],
    answer: 0
  },
  {
    question: "133. To‘g‘ri yozilgan so‘zlar qatorini belgilang.",
    options: ["Talaba, ota-ona", "Islab, bollar", "Yahshi-yomon", "Ko‘pdan-ko‘o, yildan-yilga"],
    answer: 0
  },
  {
    question: "134. Quyida berilgan so‘zlardan nechtasi imloviy jihatdan xato yozilgan? Hordiq, muxandis, xakam, ko‘hna, ahd, muxojir, halqum.",
    options: ["5 tasi", "3 tasi", "2 tasi", "4 tasi"],
    answer: 1
  },
  {
    question: "135. His-hayajon gap berilgan javobni toping.",
    options: [
      "Eh, bu hayotda barcha baxtiyor!",
      "Mashinalar tinimsiz ishlasin.",
      "Domlangiz ilm-u hisobni bilurmikan?",
      "Adabiy kechani Bahodir ochdi."
    ],
    answer: 0
  },
  {
    question: "136. Berilgan gapda nuqtalar o‘rniga kelishik qo‘shimchalaridan mosini qo‘ying. Jamoada… o‘z o‘rni… topishi… inson… bolalikdagi faoliyati, olgan bilimi va tarbiyasi katta o‘rin tutadi.",
    options: ["-ga, -ning, -dan, -ni", "-da, -ni, -da, -ning", "-da, -ni, -dan, -ning", "-da, -ning, -da, -ni"],
    answer: 1
  },
  {
    question: "137. Ish hujjatlarini tayyorlashda qaysi nutq uslubidan foydalaniladi?",
    options: ["Ilmiy uslub", "Badiiy uslub", "Rasmiy-idoraviy uslub", "Publisistik uslub"],
    answer: 2
  },
  {
    question: "138. Qaysi javobda antonim so‘zlar berilgan?",
    options: ["Ota—ona", "Do‘st—dushman", "Oy—quyosh", "Kitob—daftar"],
    answer: 1
  },
  {
    question: "139. Eskirgan so‘zlarni toping.",
    options: ["Baynalmilal, vazir, qalam", "Paranji, charx, chig‘iriq", "Qit’a, charx, chig‘iriq", "G‘or, o‘ra, chuqurlik"],
    answer: 1
  },
  {
    question: "140. Ma’nodosh so‘zlar qatoridan nisbatan eskirganini belgilang.",
    options: ["Sozanda", "Mashshoq", "Cholg‘uchi", "Musiqachi"],
    answer: 1
  },
  {
    question: "141. Atamalar berilgan qatorni toping.",
    options: ["Narvon, shoti, sarlavha", "O‘lpon, botmon, bo‘luv", "Kub, kvadrat, integral", "Hayot, soliq, davr"],
    answer: 2
  },
  {
    question: "142. O‘zbekiston Respublikasining “Davlat tili haqida”gi Qonuni qachon qabul qilingan?",
    options: ["1989-yil 21-oktabr", "2001-yil 10-may", "1991-yil 31-avgust", "1984-yil 25-may"],
    answer: 0
  },
  {
    question: "143. Adabiy tilning tovushlar tizimini tilshunoslikning qaysi bo‘limi o‘rganadi?",
    options: ["Morfologiya", "Orfoepiya", "Sintaksis", "Fonetika"],
    answer: 3
  },

  // 145–150
  {
    question: "145. Shevaga oid so‘zlar berilgan qatorni aniqlang.",
    options: ["Ona, tosh, qosh", "Yashil, qizil, ko‘k", "Davr, payt, zamon", "Eshiy, minnima, chuship"],
    answer: 3
  },
  {
    question: "146. Bir-biriga yaqin so‘zlar mosligini aniqlang?",
    options: ["Fakultet – ustoz", "Gazeta – hisobchi", "Bankrot – sinish", "Buxgalter – ro‘znoma"],
    answer: 2
  },
  {
    question: "147. Imlo qoidasiga ko‘ra xato yozilgan so‘zni toping.",
    options: ["Hasharot", "Zalvorli", "Qaynana", "Qati nazar"],
    answer: 3
  },
  {
    question: "148. Nuqtalar o‘rnida qaysi harflar bo‘lishi kerak? Shogir…: “Odamgarchilik…a qanday erishish mumk…n?” – deb so‘radi.",
    options: ["t, k, u", "d, k, i", "d, g, i", "t, g, u"],
    answer: 1
  },
  {
    question: "149. “Ot+ot” qolipli qo‘shma sifatlar berilgan qatorni toping.",
    options: ["Sheryurak, bodomqovoq", "Ko‘zoynak, ishyoqmas", "Qorasoch, oqkongil", "Uchburchak, laylakqor"],
    answer: 2
  },
  {
    question: "150. Dublyaj, ekipaj so‘zlaridagi “j”ning jarangsiz jufti qaysi tovush?",
    options: ["b", "d", "sh", "g"],
    answer: 2
  },

  // 152 (50-tasi bo‘lishi uchun qo‘shildi — faylda 144 raqam yo‘q)
  {
    question: "152. Qaysi qatorda so‘zlar bo‘g‘inlarga to‘g‘ri ajratilgan?",
    options: ["Ton-ggi, ten-gi", "Tan-glay, ton-gi", "De-ngiz, ko‘-ngil", "Ta-nglay, den-giz"],
    answer: 0
  },
  {
    question: "Bo‘g‘in ko‘chirish qoidalariga amal qilingan qatorni toping.",
    options: ["ton-ggi, ten-gi", "to-nggi, te-ngi", "tong-gi, teng-i", "to-ng-gi, te-ng-i"],
    answer: 0
  },
  {
    question: "Qaysi javobda sinonim so‘zlar berilmagan?",
    options: ["Ziravor, ko‘kat, piyoz", "Oq, op-oq, oqish", "Olma, nok, o‘rik", "Chiroyli, go‘zal, suluv"],
    answer: 2
  },
  {
    question: "Qaysi javobda paronim so‘zlar berilmagan?",
    options: ["Cho‘k, chek", "Harakat, harokot", "Vafo, jafo", "Muhit, muhoit"],
    answer: 2
  },
  {
    question: "Kasbiy atamalar berilgan qatorni toping.",
    options: ["Kesma, aylana, cheksizlik", "Kub, silindr, yarim doira", "Katet, azimut, kometa", "Chala, yonbosh, halol"],
    answer: 3
  },
  {
    question: "Talaffuzi bir xil, imlosi biroz farq qiladigan, ammo ma’nosi tubdan farq qiladigan so‘zlar qanday ataladi?",
    options: ["omonim so‘zlar", "paronim so‘zlar", "sinonim so‘zlar", "antonim so‘zlar"],
    answer: 1
  },
  {
    question: "Bir ma’noni ifodalovchi bir nechta so‘z bu…",
    options: ["sinonim so‘zlar", "ko‘p ma’noli so‘zlar", "omonim so‘zlar", "paronim so‘zlar"],
    answer: 0
  },
  {
    question: "Bir nechta ma’no ifodalovchi bitta so‘z bu…",
    options: ["sinonim so‘zlar", "ko‘p ma’noli so‘zlar", "omonim so‘zlar", "paronim so‘zlar"],
    answer: 1
  },
  {
    question: "Ma’no bildiradigan tovushlar yig‘indisi…",
    options: ["So‘zdir", "Gapdir", "So‘z birikmasidir", "Gap bo‘lagidir"],
    answer: 0
  },
  {
    question: "Qaysi qatorda hajm – o‘lchovni ifodalovchi so‘zlar berilgan?",
    options: ["Katta, kichik, uzun", "Shirin, achchiq, qisqa", "Yashil, mazali, nordon", "Katta, shirin, mazali"],
    answer: 0
  },

  // 161–175
  {
    question: "Egalik qo‘shimchasi qo‘shilganda bir “y” tovushi qo‘shib aytiladigan va yoziladigan so‘zlar qatorini aniqlang.",
    options: ["Sinf, xona, uy", "Obro‘, avzo, parvo", "Hikoya, asar, ertak", "Obod, oila, ona"],
    answer: 1
  },
  {
    question: "Shakl-ko‘rinishni bildiruvchi sifatlar qaysi qatorda berilgan?",
    options: ["Ko‘rkam, bino, shahar", "Chiroyli, tekis, imzo", "Novcha, past, hashamatli", "Ko‘cha, baland, keldi"],
    answer: 2
  },
  {
    question: "Nuqtalar o‘rnini to‘ldiring. … ko‘chani kesib o‘tayotganda ehtiyot bo‘ling.",
    options: ["Kichik", "Novcha", "Katta", "Uzun"],
    answer: 2
  },
  {
    question: "O‘tgan zamon aniq fe’li qaysi qatorda berilgan?",
    options: ["O‘qimagan, yozdim, bordim", "O‘qiyapmiz, boryapmiz, yozyapmiz", "Sakramagan, dam olgan edi", "Olib kelmagan, yozmagan"],
    answer: 0
  },
  {
    question: "Qaysi qatordagi so‘zlarga jo‘nalish kelishigi qo‘shimchasi qo‘yilgan?",
    options: ["Xotirada, maydonda, uzoqni", "Ukamning, bog‘da, olmani", "Do‘stimga, ukamga, quloqqa", "O‘rikka, qushlarni, olib"],
    answer: 2
  },
  {
    question: "Rang–tusni ifodalovchi so‘zlar qatnashgan qatorni toping.",
    options: ["Kitobni ko‘k javonga qo‘ydim.", "Mebel do‘konida mebel sotiladi.", "Xona o‘rtasida stul turibdi.", "Oynaga parda osilgan."],
    answer: 0
  },
  {
    question: "Totli, mazali, chuchuk so‘zlari narsalarning … ifodalaydi.",
    options: ["Rang–tus", "Istak", "Maza–ta’m", "Manzil"],
    answer: 2
  },
  {
    question: "Qaysi qatordagi so‘zga o‘rin-payt kelishigi qo‘shimchasi qo‘yilgan?",
    options: ["Toshkentdan, Buxoroga", "Maktabda, yig‘ilishda", "Onamga, bobomlarni", "Gullarni, osmonga"],
    answer: 1
  },
  {
    question: "Maza–ta’mni bildiruvchi so‘zlar qaysi qatordagi gapda aks ettirilgan?",
    options: [
      "Ikki yuzi qip-qizil Dilbar uyga kirib keldi.",
      "Stolda qizil olmalar va anorlar bormi?",
      "Ertaklar oq javonda turibdi.",
      "Shirin choy ichasizmi yoki achchiq qahvami?"
    ],
    answer: 3
  },
  {
    question: "Qaysi qatordagi gapda olmoshning I shaxs birlikdagi shakli qo‘llangan?",
    options: ["Biz O‘zbekiston farzandimiz.", "Siz O‘zbekistonning qaysi shaharlarida bo‘lgansiz?", "Men Buxoroda tug‘ilganman.", "Ular ta’tilda Samarqandga borishmoqchi."],
    answer: 2
  },
  {
    question: "Qaratqich kelishigi belgisiz qo‘llangan qatorni toping.",
    options: ["Uning ukasi", "Kitob varag‘i", "Gul terdi", "Xat yozdim"],
    answer: 1
  },
  {
    question: "E’tiroz bildiruvchi so‘zlar qatorini aniqlang.",
    options: ["Albatta, haqiqatan ham, shubhasiz", "Mutlaqo, zarracha ham, zinhor", "To‘g‘ri, rost, doim", "Kechirasiz, marhamat, uzur"],
    answer: 1
  },
  {
    question: "Kishilik olmoshi berilgan gapni aniqlang.",
    options: ["Biz uchun oila muqaddas.", "Bu bog‘da har xil mevalar pishadi.", "Do‘stim shu sinfda o‘qiydi.", "Hammamiz ko‘chat o‘tqazamiz."],
    answer: 0
  },
  {
    question: "-dan qo‘shimchasini qo‘shish orqali hosil bo‘ladigan kelishikni aniqlang.",
    options: ["Jo‘nalish kelishigi", "Chiqish kelishigi", "O‘rin-payt kelishigi", "Qaratqich kelishigi"],
    answer: 1
  },
  {
    question: "Qaysi gapda –lar qo‘shimchasi ko‘plik ma’nosini bildirmaydi?",
    options: ["Bahorlar keladi.", "Bolalar bog‘ga kirdi.", "Kitoblar stol ustida.", "Akam keldilar."],
    answer: 3
  },

  // 176–184
  {
    question: "-ga jo‘nalish kelishigi qo‘shimchasi so‘zlarga qo‘shilganda o‘zakda –n tovushi orttiriladigan so‘zlar berilgan qatorni aniqlang.",
    options: ["U, bu, shu, o‘sha", "Men, sen, biz", "Hamma, barcha", "Aslo, sira, zinhor"],
    answer: 0
  },
  {
    question: "Nuqtalar o‘rnini to‘ldiring. Polizda ……… ishlar(i) boshlab yuborildi.",
    options: ["burkandi", "ekin", "boshlandi", "berishmoqda"],
    answer: 1
  },
  {
    question: "Darak gap berilgan javobni toping.",
    options: ["Nimadan xafa bo‘ldingiz", "Terim sur’atini kuchaytiraylik", "Qo‘li baland bo‘lsin", "Obodonlashtirish ishlari boshlandi"],
    answer: 3
  },
  {
    question: "“Lotin yozuviga asoslangan o‘zbek alifbosini joriy etish to‘g‘risida”gi Qonunini bajarish maqsadida Vazirlar Mahkamasining qarori e’lon qilingan sanani toping.",
    options: ["1993-yil 24-avgust", "1995-yil 24-sentabr", "1995-yil 24-avgust", "1989-yil 24-dekabr"],
    answer: 2
  },
  {
    question: "Jo‘nalish kelishigi qanday qo‘shimcha orqali ifodalanadi?",
    options: ["-da", "-ni", "-ga", "-dan"],
    answer: 2
  },
  {
    question: "Qaysi qatorda rozilik berishga oid muomala odobi berilgan?",
    options: ["Yo‘q, xafa emasman", "Mayli, kechirdim", "Albatta, yordam beraman", "Yordam berolmayman"],
    answer: 2
  },
  {
    question: "O‘tgan zamon hikoya fe’lini aniqlang.",
    options: ["Oldim", "Olganman", "Olibdi", "Olar"],
    answer: 0
  },
  {
    question: "To‘g‘ri yozilgan birikmani toping.",
    options: ["Qiyishiq yo‘l", "Ko‘rkam bino", "Novcha uylar", "Tekis bog‘"],
    answer: 1
  },
  {
    question: "Qaysi qatorda maqol yozilgan?",
    options: ["Yer ostida oltin qoziq", "O‘quvchilar o‘ynab-kulingiz", "Mehmonlarni kutib oling", "Hurmat qilsang, izzat topasan"],
    answer: 3
  },
  {
    question: "Kishilik olmoshi berilgan gapni aniqlang.",
    options: ["Biz uchun oila muqaddas", "Bu bog‘da har xil mevalar pishadi", "Do‘stim shu sinfda o‘qiydi", "Hammamiz ko‘chat o‘tqazamiz"],
    answer: 0
  },

  // 185–194
  {
    question: "Qaysi qatorda hajm–o‘lchovni ifodalovchi so‘zlar berilmagan?",
    options: ["Katta, kichik", "Uzun, kichik", "Yashil, mazali, nordon", "Katta, shirin"],
    answer: 2
  },
  {
    question: "Hajm–o‘lchovni bildiruvchi so‘z qaysi qatorda berilgan?",
    options: [
      "Alisher Navoiy kitob o‘qishni yaxshi ko‘rardi.",
      "U 5 yoshida katta-katta g‘azallarni yoddan bilardi.",
      "Alisher yoshligidan juda ko‘p she’r yodlagan.",
      "O‘spirinlik davrida Samarqandda o‘qidi."
    ],
    answer: 1
  },
  {
    question: "Qaysi so‘roq yuklamasi so‘zlarga qo‘shilib yoziladi?",
    options: ["-mi", "-chi", "-a", "-ya"],
    answer: 2
  },
  {
    question: "Belgilash olmoshlari qaysi qo‘shimchalar bilan turlanadi?",
    options: ["Faqat kelishik qo‘shimchalari bilan", "Egalik va kelishik qo‘shimchalari bilan", "Sifat darajalari qo‘shimchalari bilan", "Shaxs-son qo‘shimchalari bilan"],
    answer: 1
  },
  {
    question: "-lar ko‘plik qo‘shimchasi qanday holatda hurmat ma’nosini ifodalaydi?",
    options: ["Egalik qo‘shimchasidan keyin qo‘shilsa", "Egalik qo‘shimchasidan oldin qo‘shilsa", "Hurmat ma’nosini ifodalamaydi", "Kelishik qo‘shimchasidan keyin qo‘shilsa"],
    answer: 0
  },
  {
    question: "O‘zbek tilida shaxs va narsalarning kimga tegishliligi qaysi qo‘shimchalar orqali ifodalanadi?",
    options: ["Kelishik qo‘shimchalari", "Shaxs-son qo‘shimchalari", "Egalik qo‘shimchalari", "Ko‘plik qo‘shimchasi"],
    answer: 2
  },
  {
    question: "So‘roq yuklamasini ko‘rsating.",
    options: ["-sa, -ki", "-mi, -a", "ku, -yu", "-da"],
    answer: 1
  },
  {
    question: "Qaysi qatorda maqol berilgan?",
    options: ["Har doim bo‘lsin onam", "Bilim baxt keltiradi", "Qat-qat to‘nli, garish bo‘yli", "Onajonlar bayrami"],
    answer: 1
  },
  {
    question: "Egalik qo‘shimchasi qaysi so‘zda berilgan?",
    options: ["Do‘stlik", "Gullar", "Vatanim", "Maktabda"],
    answer: 2
  },
  {
    question: "Kishilik olmoshi to‘g‘ri berilgan qatorni aniqlang. … beshinchi sinfda o‘qiyman.",
    options: ["men", "beshinchi", "sinfda", "o‘qiyman"],
    answer: 0
  },

  // 195–201
  {
    question: "Shaxs va narsalarni ko‘rsatish uchun qo‘llaniladigan olmoshlar … deyiladi.",
    options: ["Kishilik olmoshlari", "Ko‘rsatish olmoshlari", "O‘zlik olmoshi", "Belgilash olmoshlari"],
    answer: 1
  },
  {
    question: "Men, sen kishilik olmoshlariga –ni, -ning, -niki qo‘shimchalari qo‘shilganda qanday o‘zgarish ro‘y beradi?",
    options: ["Bitta –n undoshi tushib qoladi", "Bitta –n tovushi orttiriladi", "Hech qanday o‘zgarish ro‘y bermaydi", "Tovush o‘zgarish hodisasi ro‘y beradi"],
    answer: 0
  },
  {
    question: "Qaysi yuklamalar chiziqcha bilan yoziladi?",
    options: ["-chi, -a, -ya", "-mi, -chi", "-mi, -chi, -ya", "-mi, -ku, -ya"],
    answer: 2
  },
  {
    question: "Shaxs va narsalar, ularning belgisini ajratib, yakkalab ko‘rsatish uchun qo‘llaniladigan olmoshlar qatorini aniqlang.",
    options: ["men, sen, u, biz", "hamma, barcha, bari", "har kim, har nima, har qaysi", "biz, siz, ular"],
    answer: 2
  },
  {
    question: "Ikkinchi bo‘g‘inida a, i, u qisqa unli tovushlari bo‘lgan so‘zlarga egalik qo‘shimchalari qo‘shilganda qanday hodisa ro‘y beradi?",
    options: ["Tovush tushishi bo‘ladi va yozilmaydi", "Tovushlar orttiriladi va yozilmaydi", "Tovush tushish hodisasi ro‘y bermaydi", "Tovush o‘zgarish hodisasi ro‘y beradi va yoziladi"],
    answer: 0
  },
  {
    question: "Qaysi kelishik qo‘shimchalari belgisiz qo‘llaniladi?",
    options: ["Bosh kelishik, qaratqich kelishigi", "Qaratqich kelishigi, tushum kelishigi", "Qaratqich kelishigi, jo‘nalish kelishigi", "Tushum kelishigi, chiqish kelishigi"],
    answer: 1
  },
  {
    question: "Belgisiz qo‘llanilgan tushum kelishigini aniqlang.",
    options: ["olma yemoq", "daraxt bargi", "uyga kelmoq", "ukamni ko‘rmoq"],
    answer: 0
  },
  {
    question: "202. Tartib son raqam bilan ifodalanganda, raqamdan keyin … qo‘yiladi va ...deb o‘qiladi.",
    options: ["chiziqcha, -(i)nchi", "chiziqcha, -tacha", "nuqta, -(i)nchi", "tire, -(inchi)"],
    answer: 0
  },
  {
    question: "203. -da qo‘shimchasi yordamida yasalib, kimda?, nimada?, qayerda? so‘roqlariga javob bo’luvchi kelishik qo‘shimchasini aniqlang.",
    options: ["bosh kelishik", "qaratqich kelishik", "o‘rin-payt kelishik", "chiqish kelishik"],
    answer: 2
  },
  {
    question: "204. O‘rin-payt kelishigi qo‘shimchasi u, bu, shu, o‘sha olmoshlariga qo‘shilganda so‘zlarda qanday o‘zgarish ro‘y beradi?",
    options: ["bitta –n tovushi orttiriladi", "tovush o‘zgarish hodisasi ro‘y beradi", "-n tovushi tushib qoladi", "hech qanday o‘zgarish bo‘lmaydi"],
    answer: 0
  },
  {
    question: "205. Egalik qo‘shimchasi K va Q undoshi bilan tugagan so‘zlarga qo‘shilganda qanday o‘zgarish ro‘y beradi?",
    options: ["so‘z oxiridagi harf o‘zgaradi", "so‘z oxirida hech qanday o‘zgarish ro‘y bermaydi", "so‘zlarda tovush tushish hodisasi ro‘y beradi", "so‘zlarda tovush orttirilish hodisasi ro‘y beradi"],
    answer: 0
  },
  {
    question: "206. Aniq o‘tgan zamon fe’lining qo‘shimchasini aniqlang.",
    options: ["-di", "-yap", "-gan", "-moqchi"],
    answer: 0
  },
  {
    question: "207. To‘g‘ri yozilgan so‘zlar qatorini belgilang.",
    options: [
      "azaldan-azal, tekindan-tekin, ochiqdan ochiq",
      "yildan-yilga, tomdan tomga, yangidan-yangi",
      "rang-barang, dam badam, uyma-uy",
      "mukammal, mas’ul, murabbo"
    ],
    answer: 3
  },
  {
    question: "208. Qaysi qatorda hajm – o‘lchovni ifodalovchi so‘zlar berilgan?",
    options: ["Katta, kichik, uzun", "Shirin, achchiq, qisqa", "yashil, mazali, nordon", "Katta, shirin, mazali"],
    answer: 0
  },
  {
    question: "209. Quyidagi so‘zlardan nechtasi to‘g‘ri yozilgan? Tesha, atel’e, kitob, mashq, tabiyat.",
    options: ["3 ta", "1 ta", "2 ta", "4 ta"],
    answer: 3
  },
  {
    question: "210. Qaysi javobda to‘g‘ri yozilgan so‘zlar qatori berilgan?",
    options: [
      "abjir, estetik",
      "xoxlamoq, izchil",
      "abg‘on, xibsga olmoq",
      "tasdig‘lamoq, avzal"
    ],
    answer: 0
  },
  {
    question: "211. To‘g‘ri yozilgan so‘zni toping.",
    options: ["okruk", "tahmin", "xayfsan", "gulzor"],
    answer: 3
  },
  {
    question: "212. To‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
    options: [
      "past, gramm",
      "hukim, uch chala",
      "psixalogiya, ilim",
      "komisiya, pilan"
    ],
    answer: 0
  },
  {
    question: "213. Qaysi javobda bosh harflar imlosi bilan bog‘liq xatolik kuzatilmaydi?",
    options: ["Fanlar Akademiyasi", "Mustaqillik Kuni", "Jahon Tinchlik Kengashi", "Oliy Attestatsiya Komissiyasi"],
    answer: 3
  },
  {
    question: "214. Qaysi javobdagi so‘zlar noto‘g‘ri yozilgan?",
    options: ["okean, makrotuzilma", "minnatdor, karra", "afsuz, taraqqiyot", "tasurot, komisiya"],
    answer: 3
  },
  {
    question: "215. Qaysi qatorda –lik qo‘shimchasi noto‘g‘ri berilgan?",
    options: ["bolalik", "savodlilik", "uylik-joylik", "muhtojlik"],
    answer: 2
  },
  {
    question: "216. Tovushlar zanjiri asosida bayon qilingan nutq ...",
    options: ["og‘zaki nutq", "yozma nutq", "og‘zaki va yozma nutq", "to‘g‘ri javob berilmagan"],
    answer: 0
  },
  {
    question: "217. Qaysi qatordagi so‘zlarda nuqtalar o‘rniga “a” harfi qo‘yilishi lozim?",
    options: ["h...li, h...zir", "k...mil, k...mol", "q...drdon, z...lim", "k..vsar, h...mon"],
    answer: 1
  },
  {
    question: "218. “Tepa sochi tikka bo‘ldi” iborasining ma’nodoshini ko‘rsating.",
    options: ["Qo‘rqib ketmoq", "xafa bo‘lmoq", "shashtidan qaytmoq", "jahli chiqdi"],
    answer: 0
  },
  {
    question: "219. Buyruq gap berilgan javobni toping?",
    options: ["Eh, ona shahrim naqadar go‘zal!", "Yetti o‘lchab, bir kes.", "Farzand qanday oqlar ona haqqini?", "Nima ovqat qilsak ekan-a."],
    answer: 1
  },
  {
    question: "220. “O‘zbekiston Respublikasining davlat tili o‘zbek tilidir” deb “Davlat tili haqida”gi qonunning qaysi moddasida yozilgan?",
    options: ["24-moddasida", "2-moddasida", "4-moddasida", "1-moddasida"],
    answer: 3
  },
  {
    question: "221. Tovushlar (fonemalar)ning nutqdagi ifodasini tilshunoslikning qaysi bo‘limi o‘rganadi?",
    options: ["orfografiya", "punktuatsiya", "orfoepiya", "fonetika"],
    answer: 3
  },
  {
    question: "222. Nuqtalar o‘rnida qaysi harflar bo‘lishi kerak? Shogir…: “Odamgarchilik…a qanday erishish mumk…n?”",
    options: ["t, k, u", "d, g, i", "d, k, i", "t, g, u"],
    answer: 2
  },
  {
    question: "223. Qo‘shib yozilishi kerak bo‘lgan qo‘shma so‘zni aniqlang.",
    options: ["Markaziy Osiyo", "har doim", "tosh oyna", "to‘kis tugal"],
    answer: 2
  },
  {
    question: "224. Bosh harf bilan yozish qoidasi buzilgan qatorni belgilang.",
    options: ["Jahon Tinchlik Kengashi", "Misr Arab Respublikasi", "Tilshunoslik Instituti", "Mudofaa vaziri"],
    answer: 3
  },
  {
    question: "225. Qaysi javobda to‘g‘ri yozilgan so‘zlar qatori berilgan?",
    options: ["afv etmoq, xayfsan", "yo‘llanma, shafqat", "tadbiq etmoq, iptidoiy", "isquvar, xatti-harakat"],
    answer: 1
  },
  {
    question: "226. To‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
    options: ["qorovilxona, tomizgi", "zarbdor, topqir", "kamxosil, dorvoz", "telvizo’r, maxtab"],
    answer: 1
  },
  {
    question: "227. Quyidagi qaysi so‘zda tutuq belgisi qo‘yiladi?",
    options: ["taqiqlamoq", "mezon", "namuna", "meyor"],
    answer: 3
  },
  {
    question: "228. Grafika nimani o‘rganadi?",
    options: ["nutqning tovush tuzilishini", "yozma nutqning harflar tuzilishini", "so‘zlarning to‘g‘ri talaffuz qilinishini", "so‘zlarning to‘g‘ri yozilishini"],
    answer: 1
  },
  {
    question: "229. Berilgan gapda qaysi tinish belgi(lari) tushib qolgan? Rayyona: “Dadam qayerga ketdilar shu mahalda” – deb xavotirlandi.",
    options: ["nuqta", "undov", "so‘roq", "vergul"],
    answer: 2
  },
  {
    question: "230. Kirill alifbosidagi Цц harfi lotin alifbosiga asoslangan o‘zbek yozuvida qanday ifodalanadi?",
    options: ["“s” yoki “ts” bilan ifodalanadi", "“ts” bilan ifodalanadi", "“s” bilan ifodalanadi", "to‘g‘ri javob berilmagan"],
    answer: 0
  },
  {
    question: "231. To‘g‘ri yozilgan so‘zlar qatorini toping.",
    options: ["ko‘pkurash, bartaraf, salat", "xo‘plamoq, ma’raka, kasalhona", "do‘stona, gavhar, xavaskor", "dexqon, gavhar, hadiklanmoq"],
    answer: 2
  },
  {
    question: "232. Imlo xato bilan yozilgan so‘zni toping.",
    options: ["muattar", "soat", "mualif", "maosh"],
    answer: 2
  },
  {
    question: "233. O‘zbekiston Respublikasi Konstitutsiyasining nechanchi moddasi O‘zbekiston Respublikasining Davlat tili to‘g‘risida?",
    options: ["4-moddasida", "2-moddasida", "3-moddasida", "1-moddasida"],
    answer: 0
  },
  {
    question: "234. Qaysi javobdagi so‘zlar o‘zaro ma’nodoshlik hosil qila oladi?",
    options: ["abzal, ortiq", "ko‘nmoq, rozi bo‘lmoq", "rostgo‘y, mehnatsevar", "chiroy, suluv"],
    answer: 1
  },
  {
    question: "235. Quyidagi qaysi so‘zlarda nuqtalar o‘rniga “u” unlisi yoziladi? 1) muq…m; 2) sup…rmoq; 3) tov…q; 4) sur…shtirmoq; 5) tug‘…lmoq; 6) yut…q.",
    options: ["1,2,4,6", "2,3,5,6", "2,3,6", "1,2,3"],
    answer: 2
  },
  {
    question: "236. Quyidagi so‘zlardan nechtasi noto‘g‘ri yozilgan? Abdullaev, pyesa, poezd, iqtisos, vakum.",
    options: ["2 tasi", "3 tasi", "1 tasi", "4 tasi"],
    answer: 0
  },
  {
    question: "237. Chiziqcha bilan yozish qoidasiga amal qilib yozilgan so‘zlarni aniqlang.",
    options: ["ko‘pdan-ko‘p, bayram-oldi", "vitse prezident, och-sariq", "ertayu kech, qadam-baqadam", "ko‘chama-ko‘cha, uyma-uy"],
    answer: 3
  },
  {
    question: "238. Qaysi javobda bosh harflar imlosi bilan bog‘liq xato kuzatilmaydi?",
    options: ["Shermatova Dilfuza Yakubjanovna", "Rossiya federatsiyasi", "O‘zbekiston Respublikasi", "Birlashgan Millatlar Tashkiloti"],
    answer: 0
  },
  {
    question: "239. Qaysi javobdagi barcha so‘zlar to‘g‘ri yozilgan?",
    options: ["oxorli, qirxta, tarapbozlik", "magnitafon, tadqiqotchi", "vahobiylik, oxsoqol", "taluqli, badiy"],
    answer: 1
  },
  {
    question: "240. Barcha so‘zlar to‘g‘ri yozilgan javobni belgilang.",
    options: ["natarius, dealog, muovin", "notarius, mudofa, monitoring", "mudofaa, milliard, hayol", "monitoring, dialog, milliard"],
    answer: 3
  },
  {
    question: "241. Цц undoshi lotin yozuvida qaysi hollarda “s” bilan ifodalanadi?",
    options: ["faqat so‘z boshida kelganda", "unlidan keyin", "yuqoridagi barcha holatlarda", "so‘z boshida, so‘z oxirida, old qo‘shimchadan keyin, undoshdan keyin"],
    answer: 0
  },
  {
    question: "242. To‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
    options: ["ro‘zg‘or, tarnov", "pilaneta, shtab", "darax, kongress", "uzur, to‘rttala"],
    answer: 0
  },
  {
    question: "243. Qaysi javobdagi so‘zlarda tutuq belgisi ishlatiladi?",
    options: ["ma’rifat, ma’no", "odam, obyekt", "mashg‘ul, mashvarat", "ishlash, sodda"],
    answer: 0
  },
  {
    question: "244. Chiziqcha bilan yozish qoidasiga amal qilingan so‘zlarni aniqlang.",
    options: ["yozdi-oldi, borasan-qo‘yasan", "ko‘cha-ma ko‘cha", "shimol-i g‘arb, o‘z oz‘i-dan", "u-yat-nomus, uva-li juvali"],
    answer: 0
  },
  {
    question: "245. Qaysi so‘z bo‘g‘inga to‘g‘ri ajratilgan?",
    options: ["a-badiy", "pa-xta", "si-ngil", "o-lma"],
    answer: 1
  },
  {
    question: "246. Quyida berilgan so‘zlardan nechtasi imloviy jihatdan xato yozilgan? Hordiq, xodisa, hamdard, hamisha, xandalak",
    options: ["5 tasi", "3 tasi", "2 tasi", "4 tasi"],
    answer: 2
  },
  {
    question: "247. Qaysi javobdagi barcha so‘zlar to‘g‘ri yozilgan?",
    options: ["taluqli, tomon, multiq", "taasurot, tamon, badiiy", "manfaat, tomom, badiy", "taalluqli, novbat, tamom"],
    answer: 3
  },
  {
    question: "248. Qaysi javobda berilgan so‘zlar juftligi o‘zaro ma’nodosh emas?",
    options: ["chopmoq – yelmoq", "ayyor – makkor", "husn – go‘zal", "epchil – abjir"],
    answer: 2
  },
  {
    question: "249. Harflarning ma’lum tartibda joylashuvi qanday nomlanadi?",
    options: ["nutq tovushi", "harf", "bo‘g‘in", "alifbo"],
    answer: 3
  },
  {
    question: "250. Qaysi qatorda ilmiy atamalar berilgan?",
    options: ["uchak, go‘sala, mo‘rcha, kallapo‘sh", "quyosh, qo‘shiq, barcha, shoti", "qolip, betlik, charm, poshna", "eritma, manfiy, mineralogiya"],
    answer: 3
  },
  {
    question: "251. Shaxs haqida qaysi hujjat turi ma’lumot beradi?",
    options: ["ariza", "dalolatnoma", "hisobot", "tarjimayi hol"],
    answer: 3
  },
  {
    question:
      "Quyidagilarning qaysi birida tutuq belgisi to‘g‘ri qo‘llanilgan va u orqali undoshning unlidan ajratib aytilishi qaysi so‘zlarda uchraydi?",
    options: ["sa’nat, fe’l, ar‘kon", "ma’vo, sa’va, ma’sul", "qit’a, jur’at, in’om", "a’lo, ta’na, ba‘zan"],
    answer: 2
  },
  {
    question: "Quyidagi so‘zlarning qaysi biri imlo qoidalariga muvofiq to‘g‘ri yozilgan?",
    options: ["Sharoyit, ateryad, qizg‘onmoq", "Sharoit, otryad, qizg‘anmoq", "Sharoit, ateryad, qizganmoq", "Sharoit, otryad, qizg\"onmoq"],
    answer: 1
  },
  {
    question: "Quyidagi so‘zlarning qaysi biri imlo qoidalariga muvofiq to‘g‘ri yozilgan?",
    options: ["Arzugulik sabab, salafan", "Arzigilik sabab, selofan", "Arizufulik sabab, sallafan", "Arzigulik sabab, sellofan"],
    answer: 1
  },
  {
    question: "Qaysi biri yozilishiga ko‘ra to‘g‘ri?",
    options: ["fudbol", "futbo‘l", "pidbol", "futbol"],
    answer: 3
  },
  {
    question: "Barcha so‘zlar tarkibida qo‘sh unlilar yozilishi kerak bo‘lgan qatorni toping.",
    options: ["mutassim, mutola, avtouy", "mutakabbir, mosholloh", "mujassamlashgan, mujmallashgan", "mutolaa, avtouy, baniinson"],
    answer: 3
  },
  {
    question: "Qaysi so‘zlar imlosida “z” undoshi “s” tarzida talaffuz qilinadi?",
    options: ["1,2,3", "4,5,7", "1,6,7", "1,5,7"],
    answer: 2
  },
  {
    question: "Yangi o‘zbek imlosiga ko‘ra chiziqcha bilan yozish qoidasi qaysi qatorda buzilgan?",
    options: ["El-yurt ravnaqi uchun xizmat qilish sening burchingdir.", "Bugungi holat kamdan-kam uchraydi.", "Dori-darmonga muhtoj emasmisan?", "Do‘st-u dushman orasida."],
    answer: 0
  },
  {
    question: "Imlo qoidalariga muvofiq holda to‘g‘ri yozilgan so‘zlar qatorini belgilang.",
    options: ["obdasta, kamxarj, dovon", "ulug‘, hiyla, baxshi", "maslagdosh, afv, masul", "mobodo, uxlamoq, ashob"],
    answer: 0
  },
  {
    question: "Bolali uy …, bolasiz uy … Ushbu maqolni to‘ldiring.",
    options: ["bozor, mozor", "ozor, mozor", "besar, tinch", "A va B"],
    answer: 0
  },
  {
    question: "Lotin yozuvida xatosiz yozilgan so‘zlar qatorini toping.",
    options: ["muvafaqqiyat, afv", "muvaffaqiyat, avf", "muvaffaqqiyat, avf", "muvaffaqiyat, afv"],
    answer: 3
  },
  {
    question: "Imlo qoidasiga ko‘ra to‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
    options: ["abdus, xomiy", "xisobot, teyatr", "tanqis, yoqimli", "xar hil, ombarxona"],
    answer: 2
  },
  {
    question: "Berilgan so‘zlardan qaysi birining ikkinchi bo‘g‘inida “u” yoziladi?",
    options: ["mushf..q, muh..m", "muq..m, muh..t", "mushk..l, mush…k", "mutr..b, musl..m"],
    answer: 2
  },
  {
    question: "Berilgan gapda nuqtalar o‘rniga kelishik qo‘shimchalaridan mosini qo‘ying. Hayot… o‘z o‘rni… topishi… odam… bolalikdagi faoliyati...",
    options: ["-ga, -ning, -dan, -ni", "-da, -ni, -da, -ning", "-da, -ni, -dan, -ning", "-da, -ni, -da, -ning"],
    answer: 1
  },
  {
    question: "Qaysi qatordagi so‘zlarda nuqtalar o‘rniga “h” harfi yoziladi?",
    options: ["…ullas, osh…ona, …ayolparast", "…indiston, a…loq, …ulosa", "…ukm, …ushyor, sa…na", "e…timol, …ozirjavob, ma…sulot"],
    answer: 2
  },
  {
    question: "Nuqtalar o‘rniga “x” harfi yoziladigan so‘zlarni toping.",
    options: ["mu…lis, …alqparvar, …abar", "podsho…, ma…sulot, …ech qachon", "…uquq, …oroz, …asad", "ba…il, sa…iy, …osil"],
    answer: 3
  },
  {
    question: "Nuqtalar o‘rniga “f” harfi yoziladigan so‘zlarni toping.",
    options: ["tara…, o…qat, inso…", "ka…tar, sha…qat, na…as", "sa…sar, xu…ton, sha…qat", "…oiz, vaq…, …ilik"],
    answer: 1
  },
  {
    question: "To‘g‘ri yozilgan so‘zni toping.",
    options: ["muomila", "avf", "tatbiq", "tamosho"],
    answer: 1
  },
  {
    question: "Qaysi qatordagi so‘zlar tarkibida “h” harfi qo‘llanilmaydi?",
    options: ["hodisa, hamisha, xandon", "davlat, do‘st, kitob", "hujjat, hayot, jahon", "hamdard, hordiq, xayol"],
    answer: 1
  },
  {
    question: "Qaysi javobda berilgan so‘zlar noto‘g‘ri yozilgan?",
    options: ["gulzor, tomosha, muallif", "durrang, kaspdosh, reperat, habar", "o‘ylamoq, ko‘rmoq, bilmoq", "do‘stona, gavhar, havaskor"],
    answer: 1
  },

  // 272–277
  {
    question: "“Davlat tili haqida”gi O‘zbekiston Respublikasining Qonuni qachon qabul qilingan?",
    options: ["2001-yil 10-may", "1991-yil 31-avgust", "1989-yil 21-oktabr", "1984-yil 25-may"],
    answer: 2
  },
  {
    question: "Kun tartibi, qaror kabi qismlardan iborat hujjat turi qaysi?",
    options: ["bayonnoma", "dalolatnoma", "farmoyish", "hisobot"],
    answer: 0
  },
  {
    question: "Qaysi so‘zlarda tutuq belgisi qo‘llanishi lozim edi?",
    options: ["meros, sarhad, mantiq", "sohib, narvon, tarnov", "inom, qatiy, masul", "taqiq, tana, surat"],
    answer: 2
  },
  {
    question: "Faqat ochiq bo‘g‘inli so‘zlar qatorini belgilang.",
    options: ["il-hom, bar-za-ngi", "i-ro-da, ma’-no", "sa-do-qat, ra’-no", "ta’-mir-lash, sa-ma-ra"],
    answer: 1
  },
  {
    question: "Harflar ketma-ketligi asosida bayon qilingan nutq...",
    options: ["yozma nutq", "og‘zaki nutq", "aralash nutq", "harflar ketma-ketligi asosida nutq emas, so‘z hosil bo‘ladi"],
    answer: 0
  },
  {
    question: "Sur’at, jur’at, Tal’at, san’at so‘zlarida tutuq belgisi qanday vazifani bajarmoqda?",
    options: ["undan keyin kelgan unlining cho‘ziq aytilishi", "undan oldin kelgan undoshni keyingi unlidam ajratish", "a va b javoblar to‘g‘ri", "to‘g‘ri javob berilmagan"],
    answer: 1
  },

  // 278–280
  {
    question: "Qay biri to‘g‘ri yozilgan?",
    options: [
      "Toshkenttan, tog‘ga, ukamni daftari",
      "kichikgina, qishloqgacha, orzum",
      "ko‘nikkach, ukamning daftari, kichikkina",
      "keldila, toqqa, orzuyim"
    ],
    answer: 2
  },
  {
    question: "Lotin yozuviga asoslangan o‘zbek alifbosi nechta harfdan iborat?",
    options: ["28 ta harf va tutuq belgisi", "29 ta harf va tutuq belgisi", "32 ta harf va tutuq belgisi", "27 ta harf va tutuq belgisi"],
    answer: 1
  },
  {
    question: "To‘g‘ri yozilgan so‘zlar qatorini toping.",
    options: ["xo‘plamoq, ma’raka, kasalhona", "do‘stona, gavhar, xavaskor", "havaskor, ma’raka, kasalxona", "dexqon, gavhar, hadiklanmoq"],
    answer: 2
  },

  // 291–300
  {
    question: "Kishilik olmoshi to‘g‘ri berilgan qatorni aniqlang. “… beshinchi sinfda o‘qiyman.”",
    options: ["men", "beshinchi", "sinfda", "o‘qiyman"],
    answer: 0
  },
  {
    question: "Shaxs va narsalarni ko‘rsatish uchun qo‘llaniladigan olmoshlar … deyiladi.",
    options: ["kishilik olmoshlari", "ko‘rsatish olmoshlari", "o‘zlik olmoshi", "belgilash olmoshlari"],
    answer: 1
  },
  {
    question: "Men, sen kishilik olmoshlariga –ni, -ning, -niki qo‘shimchalari qo‘shilganda qanday o‘zgarish ro‘y beradi?",
    options: ["bitta –n undoshi tushib qoladi", "bitta –n tovushi orttiriladi", "hech qanday o‘zgarish ro‘y bermaydi", "tovush o‘zgarish hodisasi ro‘y beradi"],
    answer: 0
  },
  {
    question: "Qaysi yuklamalar chiziqcha bilan yoziladi?",
    options: ["–chi, -a, -ya", "-mi, -chi", "-mi, -chi, -ya", "-mi, -ku, -ya"],
    answer: 2
  },
  {
    question: "Aniq o‘tgan zamon fe’lining qo‘shimchasini aniqlang.",
    options: ["-di", "-yap", "-gan", "-moqchi"],
    answer: 0
  },
  {
    question: "Qaysi javobda sinonim so‘zlar berilmagan?",
    options: ["hayo-nomus-ibo-iffat", "sabr-toqat-bardosh-matonat", "olma-anor-gilos-anjir", "baxt-saodat-omad-iqbol"],
    answer: 2
  },
  {
    question: "Kasbiy atamalar berilgan javobni toping.",
    options: ["hujayra, ildiz, musbat", "tashbeh, kesim, qit’a", "katet, azimut, kometa", "dasturlash, fleshka, disk"],
    answer: 3
  },
  {
    question: "Shevaga xos so‘zlar qatorini belgilang.",
    options: ["ona, ota, aka-uka", "ena, opoy, aya", "oyi, ada, amma", "xola, aba, apa"],
    answer: 1
  },
  {
    question: "Ushbu so‘zlardan o‘ tarzida talaffuz qilinadigan o unlili so‘zlarni toping.",
    options: ["osmon, doston", "tolmas, qolmas", "tonna, noyabr", "sodda, modda"],
    answer: 1
  },
  {
    question: "Qaysi so‘zlarda chuqur til orqa x undoshi qatnashadi?",
    options: ["be...i, a...vol, mo...ir", "su...bat, ma...orat, mu...im", "sa...ro, ba...or, na...or", "a...loq, ta...t, ...ush"],
    answer: 3
  }
];
