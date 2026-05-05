export const RESEARCH = [
  {
    id: "co2",
    short: "CO₂ / Molten Salt",
    title: "CO₂ Reduction\nin Molten Salt",
    tag: "High-Temp Electrocatalysis",
    num: "01",
    body: "Electrochemical CO₂ conversion at high temperatures in molten salt electrolyte systems — bypassing hydrogen evolution competition and opening new pathways unavailable at ambient conditions.",
    bullets: ["Avoids HER competition", "New reaction pathways", "High-temperature advantages"],
  },
  {
    id: "micro",
    short: "Microenvironment",
    title: "Microenvironment\nEngineering",
    tag: "Catalyst Design",
    num: "02",
    body: "Designing the catalyst microenvironment — controlling species transport, local CO₂/CO availability, and local pH — to unlock new design rules for electrochemical CO₂ conversion.",
    bullets: ["Species transport control", "Local pH engineering", "Selectivity by design"],
  },
  {
    id: "bio",
    short: "Bio-Hybrid",
    title: "Hybrid\nBiotic–Abiotic",
    tag: "Bioelectrocatalysis",
    num: "03",
    body: "Pairing biological selectivity with electrochemical current density to tackle challenging reactions like N₂ reduction — best-of-both-worlds systems for sustainable chemistry.",
    bullets: ["N₂ reduction selectivity", "Biotic–abiotic interface", "Beyond pure electrochemistry"],
  },
  {
    id: "pero",
    short: "Perovskites",
    title: "Perovskite-Inspired\nMaterials",
    tag: "Materials Discovery",
    num: "04",
    body: "Developing new lead-free ionic semiconductors with defect-tolerant characteristics, inspired by the transformative decade of halide perovskite research.",
    bullets: ["Lead-free formulations", "Defect tolerance", "Next-gen semiconductors"],
  },
];

export const PUBS = [
  { y: 2024, title: "Electrochemical CO₂ Reduction in Molten Carbonate Electrolytes", journal: "J. Am. Chem. Soc.", authors: "Wong A.B. et al." },
  { y: 2023, title: "Microenvironment Control for Enhanced Selectivity in CO₂ Electroreduction", journal: "Adv. Funct. Mater.", authors: "Li X., Wong A.B. et al." },
  { y: 2023, title: "Lead-Free Halide Perovskite Analogs with Defect Tolerance", journal: "Nature Materials", authors: "Chen Y., Wong A.B. et al." },
  { y: 2022, title: "Hybrid Biotic–Abiotic Systems for Nitrogen Reduction", journal: "ACS Energy Lett.", authors: "Park J., Wong A.B. et al." },
  { y: 2022, title: "High-Temperature Electrochemistry of CO₂ in Molten Salts", journal: "Angew. Chem.", authors: "Wong A.B., Kim S. et al." },
  { y: 2021, title: "Defect Engineering in Halide Perovskite Analogs", journal: "Chem. Mater.", authors: "Wong A.B. et al." },
];

export const NEWS = [
  { date: "Mar 2025", title: "NRF Investigatorship Awarded", body: "Prof. Wong receives the prestigious NRF Investigatorship for electrochemical CO₂ reduction research." },
  { date: "Jan 2025", title: "New Paper Accepted in JACS", body: "Our latest work on molten salt electrocatalysis accepted in the Journal of the American Chemical Society." },
  { date: "Nov 2024", title: "ECS Meeting 2024", body: "Group members presented cutting-edge results at the Electrochemical Society Meeting in Chicago." },
  { date: "Aug 2024", title: "New PhD Students Joined", body: "Three new PhD students join the group to work on CO₂ conversion and perovskite materials." },
];

export const POSTDOCS = [
  { name: "Shaohai LI",  init: "SL", since: "Oct 2023", phd: "Fuzhou University",                       focus: "CO₂ reduction" },
  { name: "Jie CHENG",   init: "JC", since: "Jan 2024", phd: "Zhejiang University",                     focus: "Bioelectrochemistry CO₂ reduction" },
  { name: "Tian WANG",   init: "TW", since: "Apr 2024", phd: "National University of Singapore",        focus: "CO₂ reduction" },
  { name: "Shuyi KONG",  init: "SK", since: "Nov 2024", phd: "University of Chinese Academy of Sciences", focus: "CO₂ reduction" },
];

export const PHD_STUDENTS = [
  { name: "Yukun HU",     init: "YH", since: "Aug 2021", prev: "M.S. Beihang University, China",        focus: "CO₂ reduction" },
  { name: "Panpan ZHANG", init: "PZ", since: "Aug 2021", prev: "M.S. Fudan University, China",          focus: "Bioelectrochemical N₂ and CO₂ fixation" },
  { name: "Caiwei ZHANG", init: "CZ", since: "Aug 2021", prev: "B.S. Southeast University, China",      focus: "CO₂ reduction" },
  { name: "Cheng FANG",   init: "CF", since: "Aug 2022", prev: "M.S. UC Berkeley, USA",                 focus: "CO₂ reduction in molten salt electrolytes" },
];

export const COADV_STUDENTS = [
  { name: "Guangxin SUN",  init: "GS", since: "Aug 2020", prev: "M.S. Beihang University, China",    focus: "CO₂ reduction" },
  { name: "Chaolong WEI",  init: "CW", since: "Aug 2021", prev: "M.S. Nanchang University, China",   focus: "CO₂ reduction" },
  { name: "Tao LIU",       init: "TL", since: "Aug 2021", prev: "M.S. Tianjin University, China",    focus: "CO₂ reduction" },
];

export const ALUMNI = [
  {
    group: "PhD & Postdoc",
    members: [
      { name: "Chunyang CHI",  role: "PhD student & Research Engineer", tenure: "2020.8 – 2024.11" },
      { name: "Fei YU",        role: "PhD student & Postdoc",           tenure: "2020.1 – 2024.9"  },
      { name: "Yaqi CHENG",    role: "Postdoc",                         tenure: "2021.8 – 2023.12" },
      { name: "Gamze YILMAZ",  role: "Postdoc",                         tenure: "2020.1 – 2021.5"  },
    ],
  },
  {
    group: "Masters",
    members: [
      { name: "Xinyi LYU",       role: "Masters", tenure: "2023.9 – 2024.5" },
      { name: "Hanyu DENG",      role: "Masters", tenure: "2023.9 – 2024.5" },
      { name: "Chunyang SONG",   role: "Masters", tenure: "2022.8 – 2023.5" },
      { name: "Zhihao ZHANG",    role: "Masters", tenure: "2022.8 – 2023.5" },
      { name: "Manxi ZHOU",      role: "Masters", tenure: "2022.8 – 2023.5" },
      { name: "Yuxin LIU",       role: "Masters", tenure: "2022.8 – 2023.5" },
      { name: "Tianyu LI",       role: "Masters & Research Engineer",    tenure: "2021.1 – 2023.1" },
      { name: "Chao YAN",        role: "Masters", tenure: "2021.1 – 2022.1" },
    ],
  },
  {
    group: "Undergraduate",
    members: [
      { name: "Phein Shein SIM",              role: "Undergraduate", tenure: "2023.1 – 2023.12" },
      { name: "Yuming SUN",                   role: "Undergraduate", tenure: "2022.8 – 2023.5"  },
      { name: "Muhammad Iskandar B Salaman",  role: "Undergraduate", tenure: "2021.8 – 2022.11" },
      { name: "Ee Jet TAN",                   role: "Undergraduate", tenure: "2021.8 – 2022.11" },
      { name: "Changxing WANG",               role: "Undergraduate", tenure: "2021.8 – 2021.11" },
      { name: "Navneeth RAJIV",               role: "Undergraduate", tenure: "2020.4 – 2021.4"  },
      { name: "Yuejuan YU",                   role: "Undergraduate", tenure: "2020.8 – 2021.5"  },
      { name: "Fong CHENG HUNG",              role: "Undergraduate", tenure: "2021.1 – 2021.11" },
      { name: "Ting XUAN",                    role: "Undergraduate", tenure: "2020.8 – 2021.5"  },
      { name: "Jin Yuan Joshua QUEK",         role: "Undergraduate", tenure: "2020.8 – 2021.1"  },
      { name: "Jordan LOW HANLIN",            role: "Undergraduate", tenure: "2020.8 – 2021.1"  },
      { name: "Jing Wen Valerie NAM",         role: "Undergraduate", tenure: "2020.8 – 2021.1"  },
    ],
  },
];

export const POSITIONS = [
  {
    type: "PhD",
    title: "PhD Student — CO₂ Electroreduction",
    desc: "Push the frontiers of CO₂ conversion in molten salt and ambient-condition systems. Strong background in electrochemistry or materials science preferred.",
  },
  {
    type: "Postdoc",
    title: "Postdoctoral Researcher — Materials Synthesis",
    desc: "Lead synthesis of novel perovskite-inspired ionic semiconductors. PhD in chemistry, materials, or related field required.",
  },
  {
    type: "RA",
    title: "Research Assistant — Electrochemistry Lab",
    desc: "Support experimental work across multiple projects in our electrochemistry laboratory.",
  },
];

export const NAV_ITEMS = ["Home", "Research", "People", "Publications", "News", "Open Positions", "Contact"];
