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
  name: string;
  role: string;
  email: string;
  linkedin: string;
  image?: string;
  group: "advisor" | "leadership" | "team";
};

export const navigation = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "/works/" },
  { label: "Approach", href: "#approach" },
  { label: "Team", href: "#team" },
  { label: "Achievements", href: "#achievements" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
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
    name: "Ömer Faruk Aksoy",
    role: "Team Lead, AI & Data Engineer",
    email: "omer@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/%C3%B6merfarukaksoy/",
    image: "omer.png",
    group: "advisor",
  },
  {
    id: "nedim",
    name: "Nedim Mutlu Sezer",
    role: "Technology Lead, AI & Data Engineer",
    email: "nedim@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/nmsofficial/",
    image: "nedim.jpeg",
    group: "leadership",
  },
  {
    id: "yagiz",
    name: "Yağız Ekrem Dalar",
    role: "Communications Lead, AI & Data Engineer",
    email: "ekrem@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/yagizekremdalar/",
    image: "yagiz.png",
    group: "leadership",
  },
  {
    id: "rifat",
    name: "Ahmet Rıfat Öztürk",
    role: "Strategy Lead, AI & Data Engineer",
    email: "ahmetrifat@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/ahmet-r%C4%B1fat-%C3%B6zt%C3%BCrk-161896293/",
    image: "rifat.png",
    group: "leadership",
  },
  {
    id: "arda",
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
];

export const partners = [
  { id: "bilisimvadisi", name: "Informatics Valley", logo: "bilisimvadisi.png" },
  { id: "gsb", name: "Ministry of Youth and Sports", logo: "gsb.png" },
  { id: "ag", name: "Asrın Global", logo: "ag.png" },
  { id: "mems", name: "METU MEMS Center", logo: "mems.png" },
  { id: "pertev", name: "Pertevniyal High School", logo: "pertev.png" },
];
