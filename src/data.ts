export type ProjectCategory = "All" | "Core AI" | "Healthcare" | "Education";

export type Project = {
  id: string;
  href: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "All">;
  focus: string[];
};

export type TeamMember = {
  id: string;
  profile?: string;
  name: string;
  role: string;
  email: string;
  linkedin: string;
  image?: string;
  group: "advisor" | "leadership" | "team";
};

export type Paper = {
  slug: string;
  title: string;
  short: string;
  date?: string;
  status: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  status: string;
  href: string;
  category: Exclude<ProjectCategory, "All">;
};

export const navigation = [
  { label: "Research", href: "#research" },
  { label: "Products", href: "#products" },
  { label: "Works", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// Mirrors the cards in papers/index.html; newest first.
export const papers: Paper[] = [
  {
    slug: "Ethgent",
    title: "Ethgent: Fitting an Agent to a System by Separating Agent, Connection and Workflow Factory",
    short: "Ethgent",
    date: "2026-10-11",
    status: "Preprint",
  },
  {
    slug: "surprise",
    title: "Testing Surprisal as a Compute-Allocation Signal: A Preregistered Long-Horizon Study of Causal Token Routing",
    short: "Surprisal routing",
    date: "2026-07-31",
    status: "Zenodo preprint",
  },
  {
    slug: "epilang",
    title: "When Training Order Becomes the Algorithm: Endpoint-Induced Collapse and Memorization Without Rule Generalization",
    short: "EpiLang",
    date: "2026-07-31",
    status: "Zenodo preprint",
  },
  {
    slug: "nedoqwen",
    title: "NEDOQwen: An Auditable Low-Cost Diagnosis-and-Repair Study for a Turkish-Centric 0.824B Language Model",
    short: "NEDOQwen",
    date: "2026-07-16",
    status: "Preprint",
  },
  {
    slug: "foresight-is-not-enough",
    title: "Foresight Is Not Enough: Sentence-Level Future Signals, Self-Loop Hard Negatives, and the Calibration Gap in Small Language Models",
    short: "Foresight",
    date: "2026-07-14",
    status: "Preprint",
  },
  {
    slug: "mycelium",
    title: "When Safety Is Not Load-Bearing: Counterfactual Dependability Evaluation of Mandatory-Path Safety Mechanisms in Language Models",
    short: "MYCELIUM",
    date: "2026-07-09",
    status: "COLM 2026 workshop",
  },
  {
    slug: "tr-docvqa-synth",
    title: "TR-DocVQA-Synth: A Large-Scale Synthetic Visual Question Answering Dataset for Turkish Business Documents",
    short: "TR-DocVQA-Synth",
    date: "2026-06-05",
    status: "Anonymized manuscript",
  },
  {
    slug: "goal-drift",
    title: "Goal Drift",
    short: "Goal Drift",
    status: "OpenReview preprint",
  },
];

export const products: Product[] = [
  {
    id: "mercan",
    name: "Mercan",
    tagline: "A Turkish language model trained end to end on our own data, tokenizer and runtime.",
    status: "Live",
    href: "https://mercan.ethosoft.org/",
    category: "Core AI",
  },
  {
    id: "zero2hero",
    name: "Zero2Hero",
    tagline: "A 37-week technology programme taking students from computer basics to generative AI.",
    status: "2026–27 cohort",
    href: "https://zero2hero.ethosoft.org/",
    category: "Education",
  },
  {
    id: "karatahta",
    name: "Karatahta",
    tagline: "Write a topic or photograph a question and get a narrated maths or science lesson video.",
    status: "Open source · AGPL-3.0",
    href: "https://github.com/ethosoftai/karatahta-oss",
    category: "Education",
  },
  {
    id: "pasific",
    name: "Pasific",
    tagline: "An Ethosoft product under active development.",
    status: "In development",
    href: "https://pasific.ethosoft.org/",
    category: "Core AI",
  },
];

export const projects: Project[] = [
  {
    id: "qwen3-research-reasoning-json-rl",
    href: "/models/qwen3-research-reasoning-json-rl/",
    title: "Qwen3 ResearchReasoning JSON RL",
    description:
      "An open LoRA/PEFT adapter for evidence-grounded research QA, source selection, claim verification, uncertainty reporting, and strict JSON generation.",
    category: "Core AI",
    focus: ["Research QA", "Structured JSON", "Open model"],
  },
  {
    id: "risk-routed-kv-memory",
    href: "/experiments/risk-routed-heterogeneous-kv-memory/",
    title: "Risk-Routed Heterogeneous KV Memory",
    description:
      "An open experiment routing exact-critical context to full-precision KV memory while lower-risk context uses quantized representations.",
    category: "Core AI",
    focus: ["KV cache", "Exact recall", "LLM systems"],
  },
  {
    id: "ai-music-scoring",
    href: "/works/ai-music-scoring/",
    title: "AI Music Scoring",
    description:
      "An integrated audio-and-lyrics pipeline combining source separation, transcription, NLP, acoustic features, and genre-aware scoring.",
    category: "Core AI",
    focus: ["Audio AI", "Lyrics NLP", "Scoring"],
  },
  {
    id: "dart-rift",
    href: "/works/dart-rift/",
    title: "DART-RIFT",
    description:
      "A GPU-accelerated SPH shock-physics and Bayesian-inference project for probabilistic Dimorphos interior-structure estimation.",
    category: "Core AI",
    focus: ["Astrophysics", "SPH simulation", "Bayesian inference"],
  },
  {
    id: "epilepsy-early-warning",
    href: "/works/epilepsy-early-warning-system/",
    title: "Epilepsy Early-Warning System",
    description:
      "A wearable-to-edge prototype for classifying four EEG states and exploring pre-seizure alerts with an eight-channel signal pipeline.",
    category: "Healthcare",
    focus: ["TUH EEG", "Edge AI", "Wearable sensing"],
  },
  {
    id: "cardiomegaly-screening",
    href: "/works/explainable-cardiomegaly-screening/",
    title: "Explainable Cardiomegaly Screening",
    description:
      "A chest X-ray pipeline combining heart and lung segmentation, cardiothoracic measurements, CNN evidence, and a LightGBM classifier.",
    category: "Healthcare",
    focus: ["Chest X-ray", "Segmentation", "Explainable AI"],
  },
  {
    id: "polyp-segmentation",
    href: "/works/colonoscopy-polyp-segmentation/",
    title: "Colonoscopy Polyp Segmentation",
    description:
      "A multi-dataset segmentation study evaluating U-Net-family architectures, augmentation choices, and cross-dataset behavior on colonoscopy images.",
    category: "Healthcare",
    focus: ["Colonoscopy", "U-Net++", "Dataset shift"],
  },
  {
    id: "protein-mutation-screening",
    href: "/works/protein-mutation-and-drug-screening/",
    title: "Protein Mutation and Drug Screening",
    description:
      "Linked protein-mutation modeling and virtual-screening studies, including a focused R166H G6PD analysis across 3,799 filtered molecules.",
    category: "Healthcare",
    focus: ["AlphaFold", "Graph neural networks", "GNINA"],
  },
  {
    id: "mody2-variant-classification",
    href: "/works/mody2-variant-classification/",
    title: "MODY2 Variant Classification",
    description:
      "An exploratory GCK-variant classification study using 3-mer sequence encoding, class balancing, and a voting ensemble.",
    category: "Healthcare",
    focus: ["GCK variants", "3-mer encoding", "Ensemble learning"],
  },
  {
    id: "eye-disease-imaging",
    href: "/works/fundus-and-oct-eye-analysis/",
    title: "Fundus and OCT Eye Analysis",
    description:
      "A medical-imaging concept for classifying and localizing findings across fundus photography and OCT scans.",
    category: "Healthcare",
    focus: ["Fundus", "OCT", "Lesion localization"],
  },
  {
    id: "english-exam-evaluation",
    href: "/works/ai-english-exam-evaluation/",
    title: "AI English Exam Evaluation",
    description:
      "A teacher-configurable assessment prototype for writing, listening, reading, and speaking feedback with photographed-paper input.",
    category: "Education",
    focus: ["Rubric scoring", "Multimodal input", "Feedback"],
  },
  {
    id: "studium-coach",
    href: "/works/studium-ai-study-coach/",
    title: "Studium AI Study Coach",
    description:
      "A cross-platform YKS study companion combining planning, practice analysis, motivation, Pomodoro sessions, and guidance tools.",
    category: "Education",
    focus: ["Flutter", "Gemini", "Personalized planning"],
  },
];

export const team: TeamMember[] = [
  {
    id: "remzi",
    name: "Remzi Öz",
    role: "Team Advisor",
    email: "remzioz@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/remzi-%C3%B6z-29687b1b3/",
    image: "remzi.png",
    group: "advisor",
  },
  {
    id: "omer",
    profile: "/person/omer-faruk-aksoy/",
    name: "Ömer Faruk Aksoy",
    role: "Team Lead, AI & Data Engineer",
    email: "omer@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/%C3%B6merfarukaksoy/",
    image: "omer.png",
    group: "advisor",
  },
  {
    id: "nedim",
    profile: "/person/nedim-mutlu-sezer/",
    name: "Nedim Mutlu Sezer",
    role: "Technology Lead, AI & Data Engineer",
    email: "nedim@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/nmsofficial/",
    image: "nedim.png",
    group: "leadership",
  },
  {
    id: "yagiz",
    profile: "/person/yagiz-ekrem-dalar/",
    name: "Yağız Ekrem Dalar",
    role: "Communications Lead, AI & Data Engineer",
    email: "ekrem@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/yagizekremdalar/",
    image: "yagiz.png",
    group: "leadership",
  },
  {
    id: "rifat",
    profile: "/person/ahmet-rifat-ozturk/",
    name: "Ahmet Rıfat Öztürk",
    role: "Lead of Product, AI & Data Engineer",
    email: "ahmetrifat@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/ahmet-r%C4%B1fat-%C3%B6zt%C3%BCrk-161896293/",
    image: "rifat.png",
    group: "leadership",
  },
  {
    id: "arda",
    profile: "/person/feyzi-arda-salihoglu/",
    name: "Feyzi Arda Salihoğlu",
    role: "Strategy Lead, AI & Data Engineer",
    email: "feyziarda.salihoglu@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/feyzi-arda-saliho%C4%9Flu-579057386/",
    image: "arda.png",
    group: "leadership",
  },
  {
    id: "yusuf",
    name: "Yusuf Cidik",
    role: "Infrastructure Team",
    email: "cidik@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/yusuf-cidik-41471a31a/",
    group: "team",
  },
  {
    id: "alper",
    name: "Alper Safa Dede",
    role: "Infrastructure Team",
    email: "alpersafadede@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/alper-safa-dede-40a702315/",
    group: "team",
  },
  {
    id: "ugur",
    name: "Uğur Ali Şahinoğlu",
    role: "Infrastructure Team",
    email: "ugrli@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/u%C4%9Fur-ali-%C5%9Fahino%C4%9Flu-823707387",
    group: "team",
  },
  {
    id: "alaattin",
    name: "Alaattin Ömer Çavuş",
    role: "Infrastructure Team",
    email: "omercavus@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/%C3%B6mer-%C3%A7avu%C5%9F-a80b95389/",
    group: "team",
  },
  {
    id: "seza",
    name: "Yusuf Seza Kılınç",
    role: "Infrastructure Team",
    email: "yusufsezakilinc@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/yusuf-seza-kilin%C3%A7-1b3b02389/",
    group: "team",
  },
  {
    id: "hamza",
    name: "Hamza Yakup Yılmaz",
    role: "Infrastructure Team",
    email: "hamzayakupyilmaz@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/hamza-yakup-y%C4%B1lmaz-a958a2384/",
    group: "team",
  },
];

export const achievements = [
  {
    id: "datamedx",
    title: "DataMedX Hackathon Championship",
    organization: "İstinye University",
    image: "datamedx.jpeg",
    rank: "Champion",
  },
  {
    id: "mostra",
    title: "Mostra Hackathon Jury's Special Award",
    organization: "Istanbul Technical University & Uyumsoft",
    image: "mostra.jpeg",
    rank: "Jury's Special Award",
  },
  {
    id: "teknofest",
    title: "AI in Healthcare Competition",
    organization: "TEKNOFEST",
    image: "teknofest.jpeg",
    rank: "3rd Place in Türkiye",
  },
  {
    id: "basaksehir",
    title: "Living Lab Innovation Competition",
    organization: "Başakşehir Living Lab",
    image: "basaksehir.jpeg",
    rank: "2nd Place in Türkiye",
  },
  {
    id: "eucodeweek",
    title: "EU Code Week Hackathon",
    organization: "European Commission",
    image: "eucodeweek.jpeg",
    rank: "1st Place in Türkiye",
  },
  {
    id: "mindbricks",
    title: "MindBricks Hackathon",
    organization: "MindBricks",
    image: "mindbricks.png",
    rank: "1st Place",
  },
  {
    id: "datamedx2",
    title: "DataMedX Hackathon 2",
    organization: "İstinye University",
    image: "datamedx2.png",
    rank: "2nd Place · ₺70,000 Award",
  },
  {
    id: "tua-astro",
    title: "TUA Astro Hackathon",
    organization: "TUA, TÜMMİAD & Valentura",
    image: "TUA.png",
    rank: "1st Place",
  },
];

export const partners = [
  { id: "bilisimvadisi", name: "Informatics Valley", logo: "bilisimvadisi.png" },
  { id: "gsb", name: "Ministry of Youth and Sports", logo: "gsb.png" },
  { id: "ag", name: "Asrın Global", logo: "ag.png" },
  { id: "mems", name: "METU MEMS Center", logo: "mems.png" },
  { id: "pertev", name: "Pertevniyal High School", logo: "pertev.png" },
];
