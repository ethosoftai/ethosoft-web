export type ProjectCategory = "All" | "Core AI" | "Healthcare" | "Education";

export type Project = {
  id: string;
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
  { label: "Papers", href: "/papers/" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Team", href: "#team" },
  { label: "Achievements", href: "#achievements" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "eeg2video",
    title: "EEG2Video",
    description:
      "A research project that uses artificial intelligence to transform imagined sequences captured through EEG signals into video.",
    category: "Core AI",
    focus: ["EEG", "Generative AI", "Multimodal learning"],
  },
  {
    id: "epilepsi",
    title: "Early Epilepsy Detection",
    description:
      "An early detection and warning system that analyzes EEG signals to identify patterns preceding epileptic seizures.",
    category: "Healthcare",
    focus: ["Biosignals", "Early warning", "Decision support"],
  },
  {
    id: "protein",
    title: "Protein Mutation Analysis",
    description:
      "A multimodal AI system that analyzes how protein mutations contribute to disease.",
    category: "Healthcare",
    focus: ["Bioinformatics", "Multimodal AI", "Risk analysis"],
  },
  {
    id: "kalp",
    title: "Heart Disease Diagnosis",
    description:
      "A decision-support system that automatically detects more than ten heart conditions using clinical data and ECG signals.",
    category: "Healthcare",
    focus: ["ECG", "Clinical data", "Classification"],
  },
  {
    id: "goz",
    title: "Eye Disease Detection",
    description:
      "A system that classifies twenty eye conditions and detects lesions from fundus and OCT images.",
    category: "Healthcare",
    focus: ["Medical imaging", "OCT", "Lesion detection"],
  },
  {
    id: "gogus",
    title: "Chest X-Ray Analysis",
    description:
      "Disease detection, localization, and automated radiology report generation from chest X-ray images.",
    category: "Healthcare",
    focus: ["Radiology", "Localization", "Reporting"],
  },
  {
    id: "beyin",
    title: "Multimodal Brain Analysis",
    description:
      "A system designed to reliably detect neurological conditions by jointly evaluating MRI, CT, and EEG modalities.",
    category: "Healthcare",
    focus: ["MRI", "CT", "EEG"],
  },
  {
    id: "solvio",
    title: "Solvio",
    description:
      "An education platform that automatically evaluates English exams and provides students with personalized feedback.",
    category: "Education",
    focus: ["NLP", "Assessment", "Personalization"],
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
