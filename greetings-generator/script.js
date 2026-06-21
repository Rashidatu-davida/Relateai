/* ============================================================
   THEMES — 8 occasions, brand palette, light-mode visuals
   ============================================================ */
const THEMES = [
  {
    id: "birthday",
    className: "theme-birthday",
    emoji: "🎂",
    label: "Birthday",
    carouselLabel: " Birthday Generator",
    heading: "Create a Personalized\nBirthday Wish",
    subtitle: "Create a heartfelt message your birthday star will treasure.",
    namePlaceholder: "Who's the birthday star? 🎂",
    generateLabel: "Generate Wish",
    revealGreeting: (n) => `Happy Birthday, ${n}!`,
    tagBadge: "Birthday Message",
    cardEmoji: "🎂",
    glassCard: "#ffffff",
    primaryGlow: "rgba(123,31,162,0.15)",
    primaryColor: "#7B1FA2",
    secondaryColor: "#ff8c00",
    goldColor: "#dfb400",
    buttonGradient: "linear-gradient(135deg, #7B1FA2 0%, #6a1b9a 55%, #ff8c00 100%)",
    buttonShadow: "0 6px 20px rgba(123,31,162,0.35)",
    badgeBg: "rgba(123,31,162,0.08)",
    badgeColor: "#7B1FA2",
    headingGradient: "linear-gradient(135deg, #7B1FA2 0%, #6a1b9a 50%, #ff8c00 100%)",
    namePill: { bg: "rgba(123,31,162,0.07)", border: "rgba(123,31,162,0.25)", color: "#7B1FA2" },
    topAccentLine: "linear-gradient(90deg, transparent, #7B1FA2, #ff8c00, transparent)",
    confettiColors: ["#ff1502","#ff6d02","#ff4002","#ff0259","#dfb400","#00aeba"],
    sparkleColor: "rgba(223,180,0,0.75)",
    blobColors: ["rgba(255,21,2,0.09)","rgba(255,109,2,0.07)","rgba(0,174,186,0.06)","rgba(223,180,0,0.06)"],
    dotColors: ["#ff1502","#ff6d02","#ff4002","#ff0259","#dfb400","#00aeba","#ff1502","#ff4002"],
    messages: [
      "May your birthday be as luminous as your spirit — overflowing with laughter, love, and every beautiful thing you deserve. Here's to a year where all your boldest dreams become your reality. You are beyond cherished. 🎂✨",
      "Another year of being absolutely magnetic! Your light makes the whole world brighter. Wishing you a birthday filled with magic moments, genuine connections, and the kind of joy that makes time slow down. 💫🌸",
      "To the most iconic person in the room — happy birthday! May this year bring you clarity, confidence, and celebrations big and small. The world is richer simply because you're in it. Keep shining exactly as you are. 🎉",
      "On your special day, may every small thing feel extraordinary — your morning coffee, the songs on your playlist, the people who love you most. You radiate warmth wherever you go. Wishing you a year as wonderful as you are. 🌟🎈",
      "Happy birthday! Wishing you a year that feels like your favourite playlist on a golden afternoon — full of good vibes, the right people, and moments you'll want to replay forever. You are endlessly loved. 🎶💛",
      "Today the universe is celebrating YOU, and honestly, same. You deserve every gift, every laugh, every sweet moment this birthday brings. May this next chapter be your most beautiful one yet. 🦋✨",
      "Wishing you a birthday as radiant and extraordinary as you are. May this year open doors you didn't even know existed, bring you closer to your dreams, and surround you with all the love you deserve. 🌈🎂",
      "Here's to you — the one who makes ordinary days feel like adventures. May this year bring abundance, peace, unexpected joy, and all the things that make your soul feel alive. You are so very loved. 🌙⭐",
    ],
  },
  {
    id: "christmas",
    className: "theme-christmas",
    emoji: "🎄",
    label: "Christmas",
    carouselLabel: " Christmas Greeter",
    heading: "Send a Magical\nChristmas Greeting",
    subtitle: "Send warm seasonal wishes to someone on your nice list.",
    namePlaceholder: "Who's on the nice list? 🎅",
    generateLabel: "Generate Greeting",
    revealGreeting: (n) => `Merry Christmas, ${n}!`,
    tagBadge: "Christmas Message",
    cardEmoji: "🎄",
    glassCard: "#ffffff",
    primaryGlow: "rgba(200,16,46,0.15)",
    primaryColor: "#C8102E",
    secondaryColor: "#16a34a",
    goldColor: "#fbbf24",
    buttonGradient: "linear-gradient(135deg, #C8102E 0%, #a00d25 55%, #16a34a 100%)",
    buttonShadow: "0 6px 20px rgba(200,16,46,0.35)",
    badgeBg: "rgba(200,16,46,0.08)",
    badgeColor: "#C8102E",
    headingGradient: "linear-gradient(135deg, #C8102E 0%, #a00d25 50%, #16a34a 100%)",
    namePill: { bg: "rgba(200,16,46,0.07)", border: "rgba(200,16,46,0.25)", color: "#C8102E" },
    topAccentLine: "linear-gradient(90deg, transparent, #C8102E, #16a34a, transparent)",
    confettiColors: ["#e11d48","#16a34a","#fbbf24","#be123c","#4ade80","#fca5a5"],
    sparkleColor: "rgba(251,191,36,0.85)",
    blobColors: ["rgba(225,29,72,0.1)","rgba(22,163,74,0.08)","rgba(251,191,36,0.07)","rgba(225,29,72,0.06)"],
    dotColors: ["#e11d48","#16a34a","#fbbf24","#be123c","#4ade80","#fca5a5","#e11d48","#16a34a"],
    messages: [
      "May your Christmas be as warm and bright as the lights on the tree — filled with laughter around the table, cozy moments by the fire, and the joy of being loved. Wishing you magic in every corner of this season. 🎄✨",
      "Season's warmest greetings! May this Christmas wrap you in all the peace, joy, and love you deserve. Here's to twinkling lights, familiar songs, and moments that make your heart feel full. 🎅🌟",
      "Wishing you a Christmas that sparkles from morning to midnight — with festive surprises, cherished company, and memories that will last long after the decorations come down. You deserve every bit of this magic. 🎁❄️",
      "May the spirit of Christmas fill your home with warmth, your heart with gratitude, and your days with all the love and laughter the season brings. Sending you the cosiest of holiday wishes! ☃️🕯️",
      "Christmas is a little more special because of people like you. Wishing you a season full of wonder, rest, and togetherness — and a new year shining with everything you hope for. Merry Christmas! 🦌💛",
    ],
  },
  {
    id: "easter",
    className: "theme-easter",
    emoji: "🐣",
    label: "Easter",
    carouselLabel: " Easter Greeter",
    heading: "Share a Joyful\nEaster Greeting",
    subtitle: "Share joyful Easter blessings with someone you love.",
    namePlaceholder: "Who are you blessing? 🌸",
    generateLabel: "Generate Greeting",
    revealGreeting: (n) => `Happy Easter, ${n}!`,
    tagBadge: "Easter Message",
    cardEmoji: "🐣",
    glassCard: "#ffffff",
    primaryGlow: "rgba(0,137,123,0.15)",
    primaryColor: "#00897B",
    secondaryColor: "#dfb400",
    goldColor: "#dfb400",
    buttonGradient: "linear-gradient(135deg, #00897B 0%, #00695C 55%, #dfb400 100%)",
    buttonShadow: "0 6px 20px rgba(0,137,123,0.35)",
    badgeBg: "rgba(0,137,123,0.08)",
    badgeColor: "#00897B",
    headingGradient: "linear-gradient(135deg, #00897B 0%, #00695C 50%, #dfb400 100%)",
    namePill: { bg: "rgba(0,137,123,0.07)", border: "rgba(0,137,123,0.25)", color: "#00897B" },
    topAccentLine: "linear-gradient(90deg, transparent, #00897B, #dfb400, transparent)",
    confettiColors: ["#ff6d02","#00aeba","#dfb400","#ff0259","#ff1502","#0c8745"],
    sparkleColor: "rgba(223,180,0,0.8)",
    blobColors: ["rgba(255,109,2,0.09)","rgba(0,174,186,0.07)","rgba(223,180,0,0.06)","rgba(255,2,89,0.05)"],
    dotColors: ["#ff6d02","#00aeba","#dfb400","#ff0259","#ff1502","#0c8745","#ff6d02","#00aeba"],
    messages: [
      "Wishing you an Easter overflowing with colour, hope, and new beginnings. May this season remind you of all the beauty that surrounds you and the wonderful things still ahead. You are a true gift to this world. 🌸🐣",
      "Happy Easter! May every egg you find, every smile you share, and every moment of this beautiful season fill your heart with the purest joy. Here's to fresh starts, blooming friendships, and all things wonderful. 🌷✨",
      "Spring is here, and so is the perfect moment to celebrate YOU! Wishing you an Easter as vibrant and full of life as you are. May this season plant seeds of joy that bloom all year long. 🌼💛",
      "May this Easter bring you renewed energy, blossoming hopes, and the warmth of everyone who loves you. You deserve a season that feels as bright and full of promise as you make every room you enter. 🐰🌸",
    ],
  },
  {
    id: "mothers-day",
    className: "theme-mothers",
    emoji: "💐",
    label: "Mother's Day",
    carouselLabel: " Mother's Day Greeter",
    heading: "Celebrate the\nMost Amazing Mum",
    subtitle: "Tell Mum how much she means in a few beautiful words.",
    namePlaceholder: "Her beautiful name… 💐",
    generateLabel: "Generate Message",
    revealGreeting: (n) => `Happy Mother's Day, ${n}!`,
    tagBadge: "Mother's Day Message",
    cardEmoji: "💐",
    glassCard: "#ffffff",
    primaryGlow: "rgba(233,30,99,0.15)",
    primaryColor: "#E91E63",
    secondaryColor: "#ff6d02",
    goldColor: "#dfb400",
    buttonGradient: "linear-gradient(135deg, #E91E63 0%, #c2185b 55%, #ff6d02 100%)",
    buttonShadow: "0 6px 20px rgba(233,30,99,0.35)",
    badgeBg: "rgba(233,30,99,0.08)",
    badgeColor: "#E91E63",
    headingGradient: "linear-gradient(135deg, #E91E63 0%, #c2185b 50%, #ff6d02 100%)",
    namePill: { bg: "rgba(233,30,99,0.07)", border: "rgba(233,30,99,0.25)", color: "#E91E63" },
    topAccentLine: "linear-gradient(90deg, transparent, #E91E63, #ff6d02, transparent)",
    confettiColors: ["#ff0259","#ff6d02","#ff4002","#dfb400","#ff1502","#00aeba"],
    sparkleColor: "rgba(223,180,0,0.8)",
    blobColors: ["rgba(255,2,89,0.09)","rgba(255,109,2,0.07)","rgba(223,180,0,0.06)","rgba(0,174,186,0.05)"],
    dotColors: ["#ff0259","#ff6d02","#ff4002","#dfb400","#ff1502","#00aeba","#ff0259","#ff4002"],
    messages: [
      "To the woman who made everything possible — you are the definition of unconditional love, quiet strength, and boundless grace. Thank you for being our anchor, our cheerleader, and our greatest gift. Happy Mother's Day, with all the love in the world. 💐✨",
      "There are no words powerful enough to capture everything you mean to us — but on this special day, we want you to feel every ounce of the love you have always given so freely. You deserve the world, Mum. 🌸💛",
      "Happy Mother's Day to the most extraordinary woman we know. Your warmth, wisdom, and unwavering love are the foundation everything is built on. Today is yours — let yourself be celebrated the way you celebrate everyone else. 💐🌹",
      "You taught us what it means to love without limits, to laugh through the hard days, and to always show up for each other. Thank you for being exactly who you are. Today and every day, you are endlessly adored. 🌸💕",
      "Behind every beautiful thing in our lives is your love, care, and sacrifice. You make ordinary moments extraordinary just by being in them. Happy Mother's Day — you are our entire heart. 💐🌷",
    ],
  },
  {
    id: "fathers-day",
    className: "theme-fathers",
    emoji: "👔",
    label: "Father's Day",
    carouselLabel: " Father's Day Greeter",
    heading: "Honour the Most\nIncredible Dad",
    subtitle: "Honour Dad with words that truly capture how much he means.",
    namePlaceholder: "His great name… 👔",
    generateLabel: "Generate Message",
    revealGreeting: (n) => `Happy Father's Day, ${n}!`,
    tagBadge: "Father's Day Message",
    cardEmoji: "👔",
    glassCard: "#ffffff",
    primaryGlow: "rgba(0,61,165,0.15)",
    primaryColor: "#003DA5",
    secondaryColor: "#f97316",
    goldColor: "#fbbf24",
    buttonGradient: "linear-gradient(135deg, #003DA5 0%, #002d7a 55%, #f97316 100%)",
    buttonShadow: "0 6px 20px rgba(0,61,165,0.35)",
    badgeBg: "rgba(0,61,165,0.08)",
    badgeColor: "#003DA5",
    headingGradient: "linear-gradient(135deg, #003DA5 0%, #002d7a 50%, #f97316 100%)",
    namePill: { bg: "rgba(0,61,165,0.07)", border: "rgba(0,61,165,0.25)", color: "#003DA5" },
    topAccentLine: "linear-gradient(90deg, transparent, #003DA5, #f97316, transparent)",
    confettiColors: ["#2563eb","#f97316","#fbbf24","#1d4ed8","#fb923c","#93c5fd"],
    sparkleColor: "rgba(249,115,22,0.8)",
    blobColors: ["rgba(37,99,235,0.1)","rgba(249,115,22,0.09)","rgba(251,191,36,0.08)","rgba(37,99,235,0.06)"],
    dotColors: ["#2563eb","#f97316","#fbbf24","#1d4ed8","#fb923c","#93c5fd","#2563eb","#f97316"],
    messages: [
      "To the man who showed us what strength, patience, and love really look like — thank you for every sacrifice made quietly, every lesson taught by example, and every moment you showed up. Happy Father's Day. You are our hero, always. 👔✨",
      "Dad, your steady presence has been our greatest comfort. You lead with wisdom, love with courage, and always make us feel safe just by being there. Today we celebrate everything you are. We are beyond grateful for you. 🌟💛",
      "Happy Father's Day to a man who defines what it means to be dependable, kind, and quietly brilliant. You've given us more than you know — and today we want you to feel every bit of the admiration and love we carry for you. 👔🏅",
      "Some people make life better just by being in it — you are one of those rare people, Dad. Thank you for your patience, your guidance, and the moments that became the best memories of our lives. Happy Father's Day. 🌟",
      "Behind every great family is a dad who gave everything without counting the cost. That's you. Today is your day to rest, to be celebrated, and to know how deeply and profoundly loved you truly are. 👔✨",
    ],
  },
  {
    id: "eid",
    className: "theme-eid",
    emoji: "☪️",
    label: "Eid",
    carouselLabel: " Eid Greeter",
    heading: "Share the Joy of\nEid with Someone Special",
    subtitle: "Send warm Eid blessings to someone you care about.",
    namePlaceholder: "Their name… ☪️",
    generateLabel: "Send Eid Greetings",
    revealGreeting: (n) => `Eid Mubarak, ${n}!`,
    tagBadge: "Eid Mubarak Message",
    cardEmoji: "🌙",
    glassCard: "#ffffff",
    primaryGlow: "rgba(0,132,61,0.15)",
    primaryColor: "#00843D",
    secondaryColor: "#dfb400",
    goldColor: "#dfb400",
    buttonGradient: "linear-gradient(135deg, #00843D 0%, #006630 55%, #dfb400 100%)",
    buttonShadow: "0 6px 20px rgba(0,132,61,0.35)",
    badgeBg: "rgba(0,132,61,0.08)",
    badgeColor: "#00843D",
    headingGradient: "linear-gradient(135deg, #00843D 0%, #006630 50%, #dfb400 100%)",
    namePill: { bg: "rgba(0,132,61,0.07)", border: "rgba(0,132,61,0.25)", color: "#00843D" },
    topAccentLine: "linear-gradient(90deg, transparent, #00843D, #dfb400, transparent)",
    confettiColors: ["#0ea5e9","#d4a017","#fbbf24","#0284c7","#38bdf8","#fde68a"],
    sparkleColor: "rgba(212,160,23,0.85)",
    blobColors: ["rgba(14,165,233,0.1)","rgba(212,160,23,0.09)","rgba(251,191,36,0.07)","rgba(14,165,233,0.06)"],
    dotColors: ["#0ea5e9","#d4a017","#fbbf24","#0284c7","#38bdf8","#fde68a","#0ea5e9","#d4a017"],
    messages: [
      "Eid Mubarak! May this blessed occasion fill your heart with peace, your home with joy, and your life with the warmth of all those you love. Taqabbalallahu minna wa minkum — may Allah accept from us and from you. 🌙✨",
      "On this beautiful day of celebration and gratitude, I send you my warmest wishes. May your Eid be as radiant as the crescent moon, as sweet as the finest dates, and filled with all the blessings your heart can hold. ☪️🌟",
      "Wishing you an Eid filled with divine blessings, cherished family moments, and the deep contentment that comes from faith and gratitude. May Allah's mercy and grace surround you always. Eid Mubarak, dear friend! 🌙💛",
      "May the spirit of Eid bring you renewed hope, abundant joy, and togetherness with all who matter most. Sending you prayers of peace and happiness on this sacred and joyful occasion. Eid Mubarak! 🕌✨",
      "Eid Mubarak! May your prayers be answered, your heart be at peace, and this celebration remind you of all the beauty and blessings that surround you. You are thought of with the warmest of wishes today. 🌙🌟",
    ],
  },
  {
    id: "new-year",
    className: "theme-newyear",
    emoji: "🎆",
    label: "New Year",
    carouselLabel: " New Year Greeter",
    heading: "Ring in the New Year\nwith a Beautiful Wish",
    subtitle: "Start the new year right with a heartfelt wish for someone you love.",
    namePlaceholder: "Who's stepping into the new year? 🥂",
    generateLabel: "Generate Wish",
    revealGreeting: (n) => `Happy New Year, ${n}!`,
    tagBadge: "New Year Message",
    cardEmoji: "🥂",
    glassCard: "#ffffff",
    primaryGlow: "rgba(255,143,0,0.15)",
    primaryColor: "#FF8F00",
    secondaryColor: "#ff4500",
    goldColor: "#FF8F00",
    buttonGradient: "linear-gradient(135deg, #FF8F00 0%, #e65100 55%, #ff4500 100%)",
    buttonShadow: "0 6px 20px rgba(255,143,0,0.40)",
    badgeBg: "rgba(255,143,0,0.10)",
    badgeColor: "#b35f00",
    headingGradient: "linear-gradient(135deg, #b35f00 0%, #cc7000 50%, #e65100 100%)",
    namePill: { bg: "rgba(255,143,0,0.09)", border: "rgba(255,143,0,0.38)", color: "#b35f00" },
    topAccentLine: "linear-gradient(90deg, transparent, #FF8F00, #ff4500, transparent)",
    confettiColors: ["#9333ea","#f59e0b","#dc2626","#7e22ce","#fbbf24","#c084fc"],
    sparkleColor: "rgba(245,158,11,0.9)",
    blobColors: ["rgba(147,51,234,0.1)","rgba(245,158,11,0.09)","rgba(220,38,38,0.07)","rgba(147,51,234,0.06)"],
    dotColors: ["#9333ea","#f59e0b","#dc2626","#7e22ce","#fbbf24","#c084fc","#9333ea","#f59e0b"],
    messages: [
      "Happy New Year! As the clock strikes midnight and a new chapter begins, I wish you a year filled with bold adventures, meaningful connections, and all the abundance your heart desires. The best is truly yet to come. 🥂✨",
      "Here's to a brand new year — a blank canvas waiting for your most beautiful story. May this year bring you clarity, courage, and countless reasons to smile. Wishing you health, happiness, and everything wonderful. 🎆🌟",
      "As we step into the new year together, I'm grateful for everything you bring to this world. May this year exceed every expectation, surprise you in the most beautiful ways, and feel like the fresh start you've been waiting for. Happy New Year! 🥂💛",
      "New year, same extraordinary you — but with new opportunities, new possibilities, and a whole world of moments waiting to be lived. Wishing you a year as incredible as you are. Let's make it one for the books. 🎇🌙",
      "May the new year wrap you in hope, fill your path with light, and bring you closer to everything you've been working toward. You deserve a year that matches the size of your dreams. Happy New Year! 🎆✨",
    ],
  },
  {
    id: "happy-holidays",
    className: "theme-holidays",
    emoji: "🎁",
    label: "Happy Holidays",
    carouselLabel: " Holiday Greeter",
    heading: "Send Warm\nHoliday Greetings",
    subtitle: "Spread warmth and joy with a personalised holiday greeting.",
    namePlaceholder: "Someone special's name… 🎁",
    generateLabel: "Generate Greeting",
    revealGreeting: (n) => `Happy Holidays, ${n}!`,
    tagBadge: "Holiday Message",
    cardEmoji: "🎁",
    glassCard: "#ffffff",
    primaryGlow: "rgba(173,20,87,0.15)",
    primaryColor: "#AD1457",
    secondaryColor: "#dfb400",
    goldColor: "#dfb400",
    buttonGradient: "linear-gradient(135deg, #AD1457 0%, #880e4f 55%, #dfb400 100%)",
    buttonShadow: "0 6px 20px rgba(173,20,87,0.35)",
    badgeBg: "rgba(173,20,87,0.08)",
    badgeColor: "#AD1457",
    headingGradient: "linear-gradient(135deg, #AD1457 0%, #880e4f 50%, #dfb400 100%)",
    namePill: { bg: "rgba(173,20,87,0.07)", border: "rgba(173,20,87,0.25)", color: "#AD1457" },
    topAccentLine: "linear-gradient(90deg, transparent, #AD1457, #dfb400, transparent)",
    confettiColors: ["#ff6d02","#00aeba","#dfb400","#ff0259","#ff1502","#0c8745"],
    sparkleColor: "rgba(223,180,0,0.8)",
    blobColors: ["rgba(255,109,2,0.09)","rgba(0,174,186,0.07)","rgba(223,180,0,0.06)","rgba(255,2,89,0.05)"],
    dotColors: ["#ff6d02","#00aeba","#dfb400","#ff0259","#ff1502","#0c8745","#ff6d02","#00aeba"],
    messages: [
      "Wishing you a season filled with cosy moments, warm laughter, and the quiet magic that only this time of year brings. May your holidays be everything you hoped for and your heart feel full of gratitude and joy. Happy Holidays! 🎁✨",
      "As the year draws to a close, I want you to know how much joy you bring to everyone around you. Wishing you the most wonderful holiday season — filled with warmth, togetherness, and all the little things that matter most. 🌟🎁",
      "Happy Holidays! May your season be wrapped in warmth, your days be merry and bright, and your home filled with the sounds of laughter and love. Here's to celebrating the beauty of the season with everyone you hold dear. ❄️🕯️",
      "Sending you the warmest wishes this holiday season — for rest, for joy, for connection, and for all the magic that lives in this special time of year. You deserve every bit of light and happiness coming your way. 🎁💛",
      "Whatever this season means to you, may it bring you peace, joy, and the presence of the people who make life worth celebrating. Happy Holidays — you are so very loved and appreciated. 🌟🎁",
    ],
  },
  {
    id: "valentines",
    className: "theme-vday",
    emoji: "💘",
    label: "Valentine's Day",
    carouselLabel: " Valentine's Greeter",
    heading: "Send a Heartfelt\nValentine's Wish",
    subtitle: "Tell someone special just how much they mean to you.",
    namePlaceholder: "Who holds your heart? 💘",
    generateLabel: "Send My Love",
    revealGreeting: (n) => `Happy Valentine's Day, ${n}!`,
    tagBadge: "Valentine's Day Message",
    cardEmoji: "💘",
    glassCard: "#ffffff",
    primaryGlow: "rgba(194,24,91,0.15)",
    primaryColor: "#C2185B",
    secondaryColor: "#FF8F00",
    goldColor: "#FF8F00",
    buttonGradient: "linear-gradient(135deg, #C2185B 0%, #ad1457 55%, #FF8F00 100%)",
    buttonShadow: "0 6px 20px rgba(194,24,91,0.35)",
    badgeBg: "rgba(194,24,91,0.08)",
    badgeColor: "#C2185B",
    headingGradient: "linear-gradient(135deg, #C2185B 0%, #880e4f 50%, #FF8F00 100%)",
    namePill: { bg: "rgba(194,24,91,0.07)", border: "rgba(194,24,91,0.25)", color: "#C2185B" },
    topAccentLine: "linear-gradient(90deg, transparent, #C2185B, #FF8F00, transparent)",
    confettiColors: ["#C2185B","#FF8F00","#E91E63","#ff4081","#fce4ec","#ffccbc"],
    sparkleColor: "rgba(255,64,129,0.85)",
    blobColors: ["rgba(194,24,91,0.10)","rgba(255,143,0,0.09)","rgba(233,30,99,0.08)","rgba(194,24,91,0.06)"],
    dotColors: ["#C2185B","#FF8F00","#E91E63","#ff4081","#C2185B","#FF8F00","#880e4f","#E91E63"],
    messages: [
      "You make every day feel like Valentine's Day — but today is just an extra reminder of how completely you've stolen my heart. Thank you for being the person who makes this world a more beautiful place simply by being in it. I love you more than words will ever fully capture. 💘✨",
      "Happy Valentine's Day to the one who holds my whole heart. You are the kind of love I used to only read about — patient, warm, real, and absolutely extraordinary. Every single moment with you is my favourite. Here's to us and every beautiful day ahead. 💕🌹",
      "On this day filled with hearts and roses, I want you to know that you are the most wonderful surprise life ever gave me. You're my person — my calm, my joy, my greatest adventure. Happy Valentine's Day, with every bit of love I have. 🌹💘",
      "Some people are lucky to find a love that feels like home — and I found that in you. You are my safe place, my brightest light, and the reason my heart feels so full every single day. Happy Valentine's Day to the one who means everything to me. 💖",
      "Happy Valentine's Day to someone who deserves all the love in the world — today and every day. Whether we share a romantic love or the beautiful bond of a true friendship, know that you are deeply valued, genuinely cherished, and always in my heart. 💌✨",
    ],
  },
];

/* ============================================================
   FLOATING ELEMENT POSITIONS (from FloatingElements.tsx)
   ============================================================ */
const SPARKLE_POSITIONS = [
  { x: "8%",  y: "12%", size: 16, delay: 0,   dur: 3.2 },
  { x: "88%", y: "8%",  size: 12, delay: 0.8, dur: 2.8 },
  { x: "5%",  y: "55%", size: 20, delay: 1.4, dur: 3.6 },
  { x: "92%", y: "45%", size: 14, delay: 0.3, dur: 2.5 },
  { x: "15%", y: "85%", size: 10, delay: 1.8, dur: 3.0 },
  { x: "80%", y: "78%", size: 18, delay: 0.6, dur: 3.4 },
  { x: "45%", y: "4%",  size:  8, delay: 2.0, dur: 2.6 },
  { x: "72%", y: "22%", size: 22, delay: 1.1, dur: 3.8 },
];

const DOT_POSITIONS = [
  { x: "12%", y: "20%", size: 8,  delay: 0.2 },
  { x: "85%", y: "15%", size: 6,  delay: 1.0 },
  { x: "20%", y: "70%", size: 10, delay: 0.5 },
  { x: "75%", y: "65%", size: 7,  delay: 1.5 },
  { x: "60%", y: "88%", size: 9,  delay: 0.8 },
  { x: "35%", y: "92%", size: 6,  delay: 1.2 },
  { x: "90%", y: "55%", size: 11, delay: 0.4 },
  { x: "3%",  y: "38%", size: 8,  delay: 1.7 },
];

const BLOB_POSITIONS = [
  { cx: "15%", cy: "20%", r: "120px", idx: 0 },
  { cx: "85%", cy: "25%", r: "100px", idx: 1 },
  { cx: "10%", cy: "75%", r:  "90px", idx: 2 },
  { cx: "82%", cy: "72%", r: "130px", idx: 3 },
];

/* ============================================================
   SPOTIFY — extract track ID from a share URL or URI
   Handles:
   - https://open.spotify.com/track/ID
   - https://open.spotify.com/intl-XX/track/ID
   - spotify:track:ID  (Spotify URI format)
   ============================================================ */
function extractTrackId(url) {
  if (!url) return null;
  const trimmed = url.trim();
  // Spotify URI format: spotify:track:ID
  const uriMatch = trimmed.match(/^spotify:track:([a-zA-Z0-9]+)$/i);
  if (uriMatch) return uriMatch[1];
  // Standard and internationalised Spotify URLs
  const urlMatch = trimmed.match(/track\/([a-zA-Z0-9]+)/);
  return urlMatch ? urlMatch[1] : null;
}

/* ============================================================
   APP STATE
   ============================================================ */
const state = {
  themeIndex: 0,
  screen: "create",
  name: "",
  senderName: "",
  photo: null,
  firebasePhotoUrl: null,
  wish: "",
  wishIndex: 0,
  wishDocId: null,
  spotifyTrackId: null,
  transitioning: false,
};

/* ============================================================
   SPARKLE SVG (matches FloatingElements.tsx SparkleIcon)
   ============================================================ */
function sparkleSVG(size, color) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="${color}"/>
  </svg>`;
}

/* ============================================================
   RENDER FLOATING ELEMENTS
   ============================================================ */
function renderFloatingElements(containerId, theme, intense) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  // Glowing blobs
  BLOB_POSITIONS.forEach((b) => {
    const el = document.createElement("div");
    el.className = "float-blob";
    const color = theme.blobColors[b.idx] || theme.blobColors[0];
    el.style.left = b.cx;
    el.style.top = b.cy;
    el.style.width = b.r;
    el.style.height = b.r;
    el.style.background = `radial-gradient(circle, ${color}, transparent 70%)`;
    el.style.animationDuration = `${5 + b.idx * 0.7}s`;
    el.style.animationDelay = `${-(b.idx * 0.5)}s`;
    container.appendChild(el);
  });

  // Sparkle stars
  SPARKLE_POSITIONS.forEach((s) => {
    const el = document.createElement("div");
    el.className = "float-sparkle";
    el.style.left = s.x;
    el.style.top = s.y;
    el.style.animationDuration = `${s.dur}s`;
    el.style.animationDelay = `${-s.delay}s`;
    el.innerHTML = sparkleSVG(s.size, theme.sparkleColor);
    container.appendChild(el);
  });

  // Confetti dots
  DOT_POSITIONS.forEach((d, i) => {
    const color = theme.dotColors[i % theme.dotColors.length];
    const el = document.createElement("div");
    el.className = "float-dot" + (intense ? " intense" : "");
    el.style.left = d.x;
    el.style.top = d.y;
    el.style.width = `${d.size}px`;
    el.style.height = `${d.size}px`;
    el.style.background = color;
    el.style.animationDuration = `${3 + d.delay}s`;
    el.style.animationDelay = `${-d.delay}s`;
    container.appendChild(el);
  });

  // SVG ribbon strokes
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "float-ribbons");
  svg.setAttribute("viewBox", "0 0 390 844");
  svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
  svg.setAttribute("fill", "none");
  const uid = containerId.replace(/-/g, "_");
  svg.innerHTML = `
    <path d="M-20 200 Q100 120 200 180 Q300 240 410 160" stroke="url(#r1_${uid})" stroke-width="2"/>
    <path d="M-20 600 Q120 520 220 580 Q320 640 410 560" stroke="url(#r2_${uid})" stroke-width="1.5"/>
    <defs>
      <linearGradient id="r1_${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${theme.primaryColor}"/>
        <stop offset="100%" stop-color="${theme.secondaryColor}"/>
      </linearGradient>
      <linearGradient id="r2_${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${theme.secondaryColor}"/>
        <stop offset="100%" stop-color="${theme.goldColor}"/>
      </linearGradient>
    </defs>
  `;
  container.appendChild(svg);
}

/* ============================================================
   CAROUSEL DOTS
   ============================================================ */
function renderCarouselDots(activeIndex, theme) {
  const container = document.getElementById("carousel-dots");
  container.innerHTML = "";
  THEMES.forEach((t, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === activeIndex ? " active" : "");
    dot.setAttribute("aria-label", `${t.label} theme`);
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-selected", String(i === activeIndex));
    if (i === activeIndex) dot.style.background = theme.primaryColor;
    dot.addEventListener("click", () => setTheme(i));
    container.appendChild(dot);
  });
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let _toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("toast-visible");
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => {
    toast.classList.remove("toast-visible");
    _toastTimer = null;
  }, 2500);
}

/* ============================================================
   DROP ZONE ERROR
   ============================================================ */
function showDropZoneError(message) {
  const existing = document.getElementById("dz-error");
  if (existing) existing.remove();
  const err = document.createElement("p");
  err.id = "dz-error";
  err.className = "dz-error";
  err.textContent = message;
  document.getElementById("dz-empty").appendChild(err);
  setTimeout(() => { if (err.parentNode) err.remove(); }, 3500);
}

/* ============================================================
   SMALL CONFETTI — for wish regeneration
   ============================================================ */
function fireSmallConfetti(theme) {
  if (typeof confetti === 'undefined') return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = theme.confettiColors;
  confetti({ origin: { y: 0.55 }, particleCount: 40, spread: 70, startVelocity: 30, colors, decay: 0.9 });
}

/* ============================================================
   APPLY THEME — updates all dynamic styles
   ============================================================ */
function darkenHex(hex, amount) {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, (n >> 16)        - Math.round(255 * amount));
  const g = Math.max(0, ((n >> 8) & 0xff) - Math.round(255 * amount));
  const b = Math.max(0, (n & 0xff)        - Math.round(255 * amount));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

function applyTheme(theme) {
  // Page title + localStorage
  document.title = `${theme.label} Wish Generator`;
  try { localStorage.setItem("lastTheme", String(state.themeIndex)); } catch (_) {}

  // Carousel dots
  renderCarouselDots(state.themeIndex, theme);

  // Page background via body class
  document.body.className = theme.className;

  // Sync CSS variables so every var(--primary) consumer gets the right color
  // Must be set on body (not html) to win over the body class cascade
  document.body.style.setProperty('--primary',       theme.primaryColor);
  document.body.style.setProperty('--secondary',     theme.secondaryColor);
  document.body.style.setProperty('--primary-hover', darkenHex(theme.primaryColor, 0.14));

  // Carousel buttons
  ["prev-btn", "next-btn"].forEach((id) => {
    const btn = document.getElementById(id);
    btn.style.borderColor = `${theme.primaryColor}40`;
    btn.style.color = theme.primaryColor;
  });

  // Carousel label (fade swap)
  updateCarouselLabel(theme);

  // Heading lines
  updateHeading(theme);

  // Name input placeholder & styles
  const nameInput = document.getElementById("name-input");
  nameInput.placeholder = theme.namePlaceholder;
  refreshInputBorder(nameInput, theme);

  // Generate button label and state
  document.getElementById("generate-label").textContent = theme.generateLabel;
  refreshGenerateBtn(nameInput.value, theme);

  // Drop zone preview color
  document.getElementById("preview-uploaded").style.color = theme.primaryColor;
  document.getElementById("preview-img").style.borderColor = `${theme.primaryColor}80`;

  // Reveal screen elements
  applyRevealTheme(theme);

  // Floating elements (both screens)
  renderFloatingElements("create-floats", theme, false);
  renderFloatingElements("reveal-floats", theme, true);
}

function applyRevealTheme(theme) {
  // Greeting heading gradient
  document.getElementById("greeting-heading").style.backgroundImage = theme.headingGradient;

  // Avatar glow
  document.getElementById("avatar-glow").style.background =
    `radial-gradient(circle, ${theme.primaryGlow}, transparent 70%)`;

  // Avatar circle (fallback bg when no photo)
  if (!state.photo) {
    document.getElementById("avatar-circle").style.background = theme.buttonGradient;
  }

  // Emoji badge
  const badge = document.getElementById("emoji-badge");
  badge.style.background = `linear-gradient(135deg, ${theme.goldColor}, ${theme.primaryColor})`;
  badge.textContent = theme.cardEmoji;



  // Card emoji box
  const emojiBox = document.getElementById("card-emoji-box");
  emojiBox.style.background = `${theme.primaryColor}22`;
  emojiBox.style.borderColor = `${theme.primaryColor}44`;
  emojiBox.textContent = theme.cardEmoji;

  // Card badge text
  document.getElementById("card-badge-text").textContent = theme.tagBadge;

  // Share Your Wish (primary action)
  const shareBtn = document.getElementById("share-btn");
  if (shareBtn) {
    shareBtn.style.background = theme.primaryColor;
    shareBtn.style.boxShadow  = theme.buttonShadow;
  }

  // Try a Different Message (secondary) — border and text follow theme color
  const newWishBtn = document.getElementById("new-wish-btn");
  if (newWishBtn) {
    newWishBtn.style.borderColor = theme.primaryColor;
    newWishBtn.style.color       = theme.primaryColor;
  }

  // Start over (tertiary ghost) — color comes from var(--primary) in CSS, no inline override needed
}

/* ============================================================
   CAROUSEL LABEL — animated label swap
   ============================================================ */
function updateCarouselLabel(theme) {
  const label = document.getElementById("carousel-label");
  // Fade out
  label.classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("carousel-emoji").textContent = theme.emoji;
    document.getElementById("carousel-text").textContent = theme.carouselLabel;
    const byEl = document.getElementById("by-relateai");
    if (byEl) byEl.style.color = theme.primaryColor;
    document.getElementById("carousel-text").style.color = theme.primaryColor;
    label.style.background = `${theme.primaryColor}1a`;
    label.style.borderColor = `${theme.primaryColor}4d`;
    // Fade in
    label.classList.remove("fade-out");
    label.classList.add("fade-in");
    label.offsetHeight; // force reflow
    label.classList.remove("fade-in");
  }, 150);
}

/* ============================================================
   HEADING — animated update
   ============================================================ */
function updateHeading(theme) {
  const heading = document.getElementById("create-heading");
  heading.style.transition = "opacity 0.2s ease, transform 0.2s ease";
  heading.style.opacity = "0";
  heading.style.transform = "translateY(12px)";

  setTimeout(() => {
    const lines = theme.heading.split("\n");
    document.getElementById("heading-line1").textContent = lines[0] || "";
    document.getElementById("heading-line2").textContent = lines[1] || "";
    document.getElementById("heading-sub").textContent = theme.subtitle;
    heading.style.opacity = "1";
    heading.style.transform = "translateY(0)";
  }, 200);
}

/* ============================================================
   INPUT BORDER — dynamic color from theme
   ============================================================ */
function refreshInputBorder(input, theme) {
  const hasValue = input.value.length > 0;
  input.style.border = hasValue
    ? `1.5px solid ${theme.primaryColor}99`
    : "1.5px solid #dddddd";
  input.style.boxShadow = hasValue ? `0 0 0 4px ${theme.primaryColor}22` : "none";
}

/* ============================================================
   GENERATE BUTTON — enable / disable with visual state
   ============================================================ */
function refreshGenerateBtn(value, theme) {
  const btn = document.getElementById("generate-btn");
  const checkbox = document.getElementById("terms-checkbox");
  btn.disabled = !(value.trim().length > 0 && checkbox && checkbox.checked);
}

/* ============================================================
   PHOTO HANDLING
   ============================================================ */
function handleFile(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showDropZoneError("Please upload an image file (PNG, JPG, GIF…)");
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showDropZoneError("Image must be under 10 MB — please choose a smaller file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    state.photo = e.target.result;
    const theme = THEMES[state.themeIndex];
    const img = document.getElementById("preview-img");
    img.src = state.photo;
    img.style.borderColor = `${theme.primaryColor}80`;
    document.getElementById("dz-empty").style.display = "none";
    document.getElementById("dz-preview").style.display = "flex";
  };
  reader.readAsDataURL(file);
}

function clearPhoto() {
  state.photo = null;
  document.getElementById("preview-img").src = "";
  document.getElementById("dz-preview").style.display = "none";
  document.getElementById("dz-empty").style.display = "flex";
  document.getElementById("file-input").value = "";
}

/* ============================================================
   PICK WISH — random message from current theme
   ============================================================ */
function pickWish() {
  const pool = THEMES[state.themeIndex].messages;
  state.wishIndex = Math.floor(Math.random() * pool.length);
  return pool[state.wishIndex];
}

/* ============================================================
   CONFETTI — matches WishRevealScreen.tsx
   ============================================================ */
function fireConfetti(theme) {
  if (typeof confetti === 'undefined') return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = theme.confettiColors;
  function fire(ratio, opts) {
    confetti(Object.assign({ origin: { y: 0.6 }, particleCount: Math.floor(200 * ratio), colors }, opts));
  }
  fire(0.25, { spread: 26,  startVelocity: 55 });
  fire(0.2,  { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1,  { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1,  { spread: 120, startVelocity: 45 });
}

/* ============================================================
   SCREEN TRANSITIONS
   ============================================================ */
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const DUR = 380; // ms

function transitionTo(newScreenId, setupFn) {
  if (state.transitioning) return;
  state.transitioning = true;

  const currentId = state.screen === "create" ? "create-screen" : "reveal-screen";
  const currentEl = document.getElementById(currentId);
  const newEl = document.getElementById(newScreenId);
  const exitX = state.screen === "create" ? "-24px" : "24px";
  const enterX = newScreenId === "reveal-screen" ? "24px" : "-24px";

  // Animate current screen out
  currentEl.style.transition = `opacity ${DUR}ms ${EASE}, transform ${DUR}ms ${EASE}`;
  currentEl.style.opacity = "0";
  currentEl.style.transform = `translateX(${exitX})`;

  setTimeout(() => {
    // Hide old screen
    currentEl.style.display = "none";
    currentEl.style.transition = "none";
    currentEl.style.opacity = "1";
    currentEl.style.transform = "translateX(0)";

    // Run any setup before showing new screen
    if (setupFn) setupFn();

    // Prepare new screen (off-screen, invisible)
    newEl.style.display = "flex";
    newEl.style.transition = "none";
    newEl.style.opacity = "0";
    newEl.style.transform = `translateX(${enterX})`;
    newEl.offsetHeight; // force reflow so transition fires

    // Animate new screen in
    newEl.style.transition = `opacity ${DUR}ms ${EASE}, transform ${DUR}ms ${EASE}`;
    newEl.style.opacity = "1";
    newEl.style.transform = "translateX(0)";

    state.screen = newScreenId === "reveal-screen" ? "reveal" : "create";
    state.transitioning = false;
  }, DUR + 20);
}

/* ============================================================
   SHOW REVEAL SCREEN
   ============================================================ */
function showReveal(name, photo, wish) {
  const theme = THEMES[state.themeIndex];

  transitionTo("reveal-screen", () => {
    state.name = name;
    state.photo = photo;
    state.wish = wish;

    // Greeting text
    const greetingEl = document.getElementById("greeting-heading");
    greetingEl.textContent = theme.revealGreeting(name);
    greetingEl.style.backgroundImage = theme.headingGradient;

    // Wish text
    document.getElementById("wish-text").textContent = wish;

    // Avatar photo or heart icon
    const avatarImg = document.getElementById("avatar-img");
    const avatarHeart = document.getElementById("avatar-heart");
    const avatarCircle = document.getElementById("avatar-circle");

    if (photo) {
      avatarImg.src = photo;
      avatarImg.alt = `${name}'s photo`;
      avatarImg.style.display = "block";
      avatarHeart.style.display = "none";
      avatarCircle.style.background = "transparent";
    } else {
      avatarImg.style.display = "none";
      avatarHeart.style.display = "flex";
      avatarCircle.style.background = theme.buttonGradient;
    }

    // Spotify player
    const playerWrap = document.getElementById("spotify-player-wrap");
    const playerContainer = document.getElementById("spotify-player-container");
    if (state.spotifyTrackId) {
      playerContainer.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${state.spotifyTrackId}?utm_source=generator&autoplay=1" width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      playerWrap.style.display = "block";
    } else {
      playerContainer.innerHTML = "";
      playerWrap.style.display = "none";
    }

    // Reset reveal animations so they re-run
    resetRevealAnimations();

    // Confetti after short delay
    setTimeout(() => fireConfetti(theme), 350);

    // Ad adspace slides in after reveal settles
    setTimeout(() => showAdBanner(), 1200);
  });
}

/* ============================================================
   SHOW CREATE SCREEN
   ============================================================ */
function showCreate() {
  hideAdBanner();
  transitionTo("create-screen", () => {
    // Reset form state
    const theme = THEMES[state.themeIndex];
    const nameInput = document.getElementById("name-input");
    nameInput.value = "";
    const tc = document.getElementById("terms-checkbox");
    if (tc) tc.checked = false;
    document.getElementById("spotify-input").value = "";
    state.spotifyTrackId = null;
    const si = document.getElementById("sender-input");
    if (si) si.value = "";
    state.senderName = "";
    state.wishDocId = null;
    state.firebasePhotoUrl = null;
    clearPhoto();
    refreshGenerateBtn("", theme);
    refreshInputBorder(nameInput, theme);

    // Restore generate button icon + label in case loading state was applied
    const genBtn = document.getElementById("generate-btn");
    const genIcon = genBtn.querySelector("i");
    genIcon.className = "fa-solid fa-wand-magic-sparkles";
    document.getElementById("generate-label").textContent = theme.generateLabel;

    // Reset char counter
    const counter = document.getElementById("char-counter");
    counter.textContent = "";
    counter.style.opacity = "0";

    state.name = "";
    state.photo = null;
    state.wish = "";
  });
}

/* ============================================================
   RESET REVEAL ANIMATIONS — force CSS animations to replay
   when navigating create → reveal multiple times
   ============================================================ */
function resetRevealAnimations() {
  const ids = ["avatar-wrap", "greeting-section", "wish-card", "ad-placeholder", "reveal-actions"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.animation = "none";
    el.offsetHeight; // trigger reflow
    el.style.animation = "";
  });
}

/* ============================================================
   AD BANNER — slide in / out
   ============================================================ */
function showAdBanner() {
  const adspace = document.getElementById("sponsor-zone");
  if (!adspace) return;
  adspace.style.display = "flex";
  adspace.offsetHeight;
  adspace.classList.add("ad-visible");

  const closeBtn = document.getElementById("ad-close-btn");
  if (closeBtn) {
    closeBtn.onclick = () => {
      adspace.classList.remove("ad-visible");
      adspace.addEventListener("transitionend", () => {
        adspace.style.display = "none";
      }, { once: true });
    };
  }
}

function hideAdBanner() {
  const adspace = document.getElementById("sponsor-zone");
  if (!adspace) return;
  adspace.classList.remove("ad-visible");
  adspace.style.display = "none";
}

/* ============================================================
   SHARE FUNCTIONALITY — matches WishRevealScreen.tsx
   ============================================================ */
async function handleShare() {
  const theme = THEMES[state.themeIndex];

  const base = window.location.href.split("?")[0];
  const fromParam = state.senderName ? `&from=${encodeURIComponent(state.senderName)}` : "";
  const shareUrl = state.wishDocId
    ? `${base}?id=${state.wishDocId}${fromParam}`
    : base;

  const themeIntros = {
    "birthday":      `🎂 Someone has been thinking of you on your special day...`,
    "christmas":     `🎄 A little Christmas magic is waiting for you...`,
    "easter":        `🌸 A joyful Easter surprise has found its way to you...`,
    "mothers-day":   `💐 Someone wants to celebrate the incredible person you are...`,
    "fathers-day":   `👔 A heartfelt message is waiting for you today...`,
    "eid":           `🌙 Eid Mubarak — someone sent you warm blessings...`,
    "new-year":      `🥂 A new year wish has found its way to you...`,
    "happy-holidays":`❄️ A holiday surprise is waiting for you...`,
    "valentines":    `💘 Someone has sent you a heartfelt Valentine's message...`,
  };

  const intro = themeIntros[theme.id] || `${theme.cardEmoji} A special ${theme.label} greeting is waiting for you...`;

  const senderLine = state.senderName
    ? `*${state.senderName}* put together a personal ${theme.label} message just for you — filled with warmth and heartfelt wishes.`
    : `Someone special put together a personal ${theme.label} message just for you — filled with warmth and heartfelt wishes.`;

  const title = state.senderName
    ? `${state.senderName} sent you a ${theme.label} surprise!`
    : `A ${theme.label} surprise is waiting for you!`;

  const text = [
    intro,
    ``,
    senderLine,
    ``,
    `🎁 Tap below to reveal your personal message — made with love, just for this moment.`,
    ``,
    `👇 Open your ${theme.label} surprise here:`,
    shareUrl,
  ].join("\n");

  try {
    if (navigator.share) {
      await navigator.share({ title, text });
      return;
    }
  } catch (_) {
    // User cancelled or share not permitted — fall through to clipboard
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("✓ Link copied! Paste it anywhere to share.");
  } catch (_) {
    showToast("Couldn't copy — try selecting the text manually.");
  }
}

/* ============================================================
   THEME CHANGE
   ============================================================ */
function setTheme(index) {
  state.themeIndex = index;
  applyTheme(THEMES[index]);
}

/* ============================================================
   FIREBASE HELPERS — save & load wish
   ============================================================ */

// Compress photo client-side to a small JPEG (no Storage needed)
async function compressPhoto(base64DataUrl) {
  if (!base64DataUrl) return null;
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const MAX = 400;
      const scale = Math.min(1, MAX / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width  = Math.round(img.width  * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.72));
    };
    img.onerror = () => resolve(null);
    img.src = base64DataUrl;
  });
}

// Generate a short 8-character alphanumeric ID
function generateShortId() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

// Save the full wish to Firestore, return the document ID
async function saveWishToDb(data) {
  if (!window.db) return null;
  const TIMEOUT_MS = 7000;
  try {
    const id = generateShortId();
    await Promise.race([
      window.db.collection("wishes").doc(id).set({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Firestore save timeout")), TIMEOUT_MS)
      ),
    ]);
    return id;
  } catch (e) {
    console.warn("Firestore save skipped:", e.message);
    return null;
  }
}

// Update the wishIndex on an existing Firestore document
async function updateWishIndex(docId, wishIndex) {
  if (!window.db || !docId) return;
  try {
    await window.db.collection("wishes").doc(docId).update({ wishIndex });
  } catch (e) {
    console.error("Firestore update failed:", e);
  }
}

// Load a wish document by ID from Firestore (with 8s timeout for offline/slow networks)
async function loadWishFromDb(docId) {
  if (!window.db) return null;
  const TIMEOUT_MS = 8000;
  try {
    const result = await Promise.race([
      window.db.collection("wishes").doc(docId).get(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Firestore load timeout")), TIMEOUT_MS)
      ),
    ]);
    return result.exists ? result.data() : null;
  } catch (e) {
    console.warn("Firestore load failed:", e.message);
    return null;
  }
}

/* ============================================================
   LOAD FROM SHARED URL — auto-show wish when ?id= param exists
   ============================================================ */
const LOADER_MESSAGES = [
  "Hold on, magic incoming ✨",
  "Someone's thinking of you 👀",
  "Your surprise is almost ready 🎀",
  "Loading something beautiful 💌",
  "fr fr this one's special 🔥",
  "Almost there… don't peek 🙈",
];
let _loaderMsgTimer = null;

function startLoaderMessages() {
  const el = document.getElementById("loader-sub");
  if (!el) return;
  let i = 0;
  _loaderMsgTimer = setInterval(() => {
    i = (i + 1) % LOADER_MESSAGES.length;
    el.style.opacity = "0";
    setTimeout(() => { el.textContent = LOADER_MESSAGES[i]; el.style.opacity = "1"; }, 220);
  }, 1800);
}

function dismissLoader() {
  if (_loaderMsgTimer) { clearInterval(_loaderMsgTimer); _loaderMsgTimer = null; }
  const loader = document.getElementById("shared-loader");
  if (!loader) return;
  loader.classList.add("loader-out");
  loader.addEventListener("transitionend", () => { loader.style.display = "none"; }, { once: true });
  document.documentElement.classList.remove("is-shared");
}

function showExpiredLinkUI() {
  const loader = document.getElementById("shared-loader");
  const loaderBox = loader ? loader.querySelector(".loader-box") : null;
  if (!loaderBox) { dismissLoader(); return; }
  // Replace loader content with a friendly expired message
  loaderBox.innerHTML = `
    <span class="loader-icon" style="animation:none">💌</span>
    <h2 class="loader-heading" style="font-size:1.5rem">This link has expired</h2>
    <p class="loader-sub" style="font-size:.9rem;color:#888;max-width:260px;text-align:center;line-height:1.6;opacity:1">
      This greeting is no longer available.<br>Why not create your own?
    </p>
    <a href="${window.location.pathname}"
       style="margin-top:4px;display:inline-flex;align-items:center;gap:9px;background:#ff1502;color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:.92rem;padding:13px 26px;border-radius:12px;text-decoration:none;box-shadow:0 6px 18px rgba(255,21,2,.28)">
      <i class="fa-solid fa-wand-magic-sparkles"></i>
      Create Your Wish — Free
    </a>
  `;
  if (_loaderMsgTimer) { clearInterval(_loaderMsgTimer); _loaderMsgTimer = null; }
}

async function loadFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const docId  = params.get("id");
  if (!docId) return false;

  const data = await loadWishFromDb(docId);
  if (!data) {
    showExpiredLinkUI();
    return false;
  }

  const themeIndex = THEMES.findIndex((t) => t.id === data.themeId);
  if (themeIndex === -1) { dismissLoader(); return false; }

  const theme = THEMES[themeIndex];
  const wish  = theme.messages[data.wishIndex] || theme.messages[0];

  state.themeIndex     = themeIndex;
  state.wishIndex      = data.wishIndex || 0;
  state.senderName     = data.senderName || "";
  state.spotifyTrackId = data.spotifyTrackId || null;

  applyTheme(theme);
  document.getElementById("app").classList.add("app-ready");
  dismissLoader();
  showReveal(data.recipientName, data.photoUrl || null, wish);
  return true;
}

/* ============================================================
   EVENT LISTENERS & INIT
   ============================================================ */
async function init() {
  // Restore last-used theme from localStorage
  try {
    const saved = parseInt(localStorage.getItem("lastTheme") || "0", 10);
    if (!isNaN(saved) && saved >= 0 && saved < THEMES.length) {
      state.themeIndex = saved;
    }
  } catch (_) {}

  // If opened via a shared link, start loader messages then fetch data
  if (document.documentElement.classList.contains("is-shared")) startLoaderMessages();
  if (await loadFromUrl()) {
    // Recipient view — hide sender-only buttons
    document.getElementById("new-wish-btn").style.display = "none";
    document.getElementById("share-btn").style.display = "none";

    // Make reset button a primary CTA: "Generate Your Wish"
    const resetBtn = document.getElementById("reset-btn");
    resetBtn.className = "btn-primary-action";
    resetBtn.style.removeProperty('color');
    resetBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Generate Your Wish`;
    resetBtn.addEventListener("click", () => {
      window.location.href = window.location.pathname;
    });
    return;
  }

  // Apply theme first, then reveal app so styles are never seen unstyled
  applyTheme(THEMES[state.themeIndex]);
  document.getElementById("app").classList.add("app-ready");

  // ---- Carousel ----
  document.getElementById("prev-btn").addEventListener("click", () => {
    setTheme((state.themeIndex - 1 + THEMES.length) % THEMES.length);
  });
  document.getElementById("next-btn").addEventListener("click", () => {
    setTheme((state.themeIndex + 1) % THEMES.length);
  });

  // ---- Terms Checkbox ----
  const termsCheckbox = document.getElementById("terms-checkbox");
  termsCheckbox.addEventListener("change", () => {
    refreshGenerateBtn(document.getElementById("name-input").value, THEMES[state.themeIndex]);
  });

  // ---- Name Input ----
  const nameInput = document.getElementById("name-input");

  nameInput.addEventListener("input", () => {
    const theme = THEMES[state.themeIndex];
    refreshGenerateBtn(nameInput.value, theme);
    refreshInputBorder(nameInput, theme);
    // Live character counter — appears after 20 chars
    const len = nameInput.value.length;
    const counter = document.getElementById("char-counter");
    if (len >= 20) {
      counter.textContent = `${len} / 40`;
      counter.style.opacity = "1";
    } else {
      counter.style.opacity = "0";
    }
  });

  nameInput.addEventListener("focus", () => {
    const theme = THEMES[state.themeIndex];
    nameInput.style.border = `1.5px solid ${theme.primaryColor}cc`;
    nameInput.style.boxShadow = `0 0 0 4px ${theme.primaryColor}22`;
  });

  nameInput.addEventListener("blur", () => {
    refreshInputBorder(nameInput, THEMES[state.themeIndex]);
  });

  // Submit on Enter key (name field)
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("create-form").requestSubmit();
    }
  });

  // ---- Photo / Drop Zone ----
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("file-input");

  dropZone.addEventListener("click", () => fileInput.click());

  dropZone.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInput.click();
    }
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    const theme = THEMES[state.themeIndex];
    dropZone.style.borderColor = `${theme.primaryColor}cc`;
    dropZone.style.background = `${theme.primaryColor}14`;
    dropZone.classList.add("dragging");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.borderColor = "#cccccc";
    dropZone.style.background = "#fafafa";
    dropZone.classList.remove("dragging");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#cccccc";
    dropZone.style.background = "#fafafa";
    dropZone.classList.remove("dragging");
    handleFile(e.dataTransfer.files[0]);
  });

  fileInput.addEventListener("change", () => {
    handleFile(fileInput.files[0]);
    fileInput.value = ""; // allow re-uploading the same file
  });

  document.getElementById("preview-remove").addEventListener("click", (e) => {
    e.stopPropagation();
    clearPhoto();
  });

  // ---- Form Submit ----
  document.getElementById("create-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return;

    // Loading state on the button
    const genBtn = document.getElementById("generate-btn");
    const genIcon = genBtn.querySelector("i");
    const genLabel = document.getElementById("generate-label");
    genBtn.disabled = true;
    genIcon.className = "fa-solid fa-spinner fa-spin";
    genLabel.textContent = "Generating…";

    const spotifyInput = document.getElementById("spotify-input");
    state.spotifyTrackId = extractTrackId(spotifyInput.value.trim()) || null;

    const senderInput = document.getElementById("sender-input");
    state.senderName = senderInput ? senderInput.value.trim() : "";

    const wish = pickWish();

    // Compress photo + save wish to Firebase, then show reveal
    (async () => {
      const photoUrl = await compressPhoto(state.photo);

      await saveWishToDb({
        recipientName: name,
        themeId:       THEMES[state.themeIndex].id,
        wishIndex:     state.wishIndex,
        senderName:    state.senderName,
        photoUrl:      photoUrl || null,
        spotifyTrackId: state.spotifyTrackId || null,
      }).then((docId) => { state.wishDocId = docId || null; });

      showReveal(name, state.photo, wish);
    })();
  });

  // ---- Reveal Buttons ----
  document.getElementById("new-wish-btn").addEventListener("click", () => {
    const newWish = pickWish();
    state.wish = newWish;

    // Sync the new message to Firestore so the shared link shows it
    updateWishIndex(state.wishDocId, state.wishIndex);

    // Animate wish text swap
    const wishText = document.getElementById("wish-text");
    wishText.style.transition = "opacity 0.18s ease";
    wishText.style.opacity = "0";
    setTimeout(() => {
      wishText.textContent = newWish;
      wishText.style.opacity = "1";
    }, 180);

    // Card bounce + small confetti celebration
    const wishCard = document.getElementById("wish-card");
    wishCard.classList.remove("bouncing");
    wishCard.offsetHeight;
    wishCard.classList.add("bouncing");
    setTimeout(() => wishCard.classList.remove("bouncing"), 450);
    fireSmallConfetti(THEMES[state.themeIndex]);
  });

  document.getElementById("share-btn").addEventListener("click", handleShare);

  document.getElementById("reset-btn").addEventListener("click", showCreate);

  // ---- Keyboard: arrow keys cycle themes on create screen ----
  document.addEventListener("keydown", (e) => {
    if (state.screen !== "create") return;
    if (document.activeElement === nameInput) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setTheme((state.themeIndex - 1 + THEMES.length) % THEMES.length);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setTheme((state.themeIndex + 1) % THEMES.length);
    }
  });

  // ---- Touch swipe: cycle themes on create screen ----
  let _touchStartX = 0;
  document.addEventListener("touchstart", (e) => {
    if (state.screen !== "create") return;
    _touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (state.screen !== "create") return;
    if (e.target.closest("input, .drop-zone, button")) return;
    const dx = e.changedTouches[0].clientX - _touchStartX;
    if (Math.abs(dx) > 50) {
      setTheme((state.themeIndex + (dx < 0 ? 1 : -1) + THEMES.length) % THEMES.length);
    }
  }, { passive: true });
}

/* ============================================================
   BOOT
   ============================================================ */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
