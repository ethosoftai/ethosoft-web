export type ProjectCategory = "Tümü" | "Temel YZ" | "Sağlık" | "Eğitim";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "Tümü">;
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
  { label: "Projeler", href: "#projects" },
  { label: "Yaklaşım", href: "#approach" },
  { label: "Ekip", href: "#team" },
  { label: "Başarılar", href: "#achievements" },
  { label: "Partnerler", href: "#partners" },
  { label: "İletişim", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "eeg2video",
    title: "EEG2Video",
    description:
      "EEG sinyalleri aracılığıyla insanın hayal ettiği sekansları yapay zeka ile videoya dönüştüren araştırma projesi.",
    category: "Temel YZ",
    focus: ["EEG", "Üretken yapay zeka", "Multimodal öğrenme"],
  },
  {
    id: "epilepsi",
    title: "Epilepsi Erken Teşhis",
    description:
      "EEG sinyallerini analiz ederek nöbet öncesi örüntüleri belirleyen erken teşhis ve uyarı sistemi.",
    category: "Sağlık",
    focus: ["Biyosinyal", "Erken uyarı", "Karar destek"],
  },
  {
    id: "protein",
    title: "Protein Mutasyon Analizi",
    description:
      "Proteinlerde meydana gelen mutasyonların hastalıklara etkisini analiz eden multimodal yapay zeka sistemi.",
    category: "Sağlık",
    focus: ["Biyoinformatik", "Multimodal YZ", "Risk analizi"],
  },
  {
    id: "kalp",
    title: "Kalp Hastalıkları Tanısı",
    description:
      "Klinik veriler ve EKG sinyalleriyle 10’dan fazla kalp hastalığını otomatik tespit eden karar destek sistemi.",
    category: "Sağlık",
    focus: ["EKG", "Klinik veri", "Sınıflandırma"],
  },
  {
    id: "goz",
    title: "Göz Hastalıkları Tespiti",
    description:
      "Fundus ve OCT görüntülerinden 20 farklı göz hastalığını sınıflandıran ve lezyonları tespit eden sistem.",
    category: "Sağlık",
    focus: ["Medikal görüntüleme", "OCT", "Lezyon tespiti"],
  },
  {
    id: "gogus",
    title: "Göğüs X-Ray Analizi",
    description:
      "Göğüs X-ray görüntülerinden hastalık tespiti, lokalizasyon ve otomatik radyoloji raporu üretimi.",
    category: "Sağlık",
    focus: ["Radyoloji", "Lokalizasyon", "Raporlama"],
  },
  {
    id: "beyin",
    title: "Multimodal Beyin Analizi",
    description:
      "MR, BT ve EEG modalitelerini birlikte değerlendirerek beyin hastalıklarının güvenilir tespitini hedefleyen sistem.",
    category: "Sağlık",
    focus: ["MR", "BT", "EEG"],
  },
  {
    id: "solvio",
    title: "Solvio",
    description:
      "İngilizce sınavlarını otomatik değerlendiren ve öğrencilere kişiselleştirilmiş geri bildirim sunan eğitim platformu.",
    category: "Eğitim",
    focus: ["NLP", "Ölçme ve değerlendirme", "Kişiselleştirme"],
  },
];

export const team: TeamMember[] = [
  {
    id: "remzi",
    name: "Remzi Öz",
    role: "Takım Danışmanı",
    email: "remzioz@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/remzi-%C3%B6z-29687b1b3/",
    image: "remzi.png",
    group: "advisor",
  },
  {
    id: "omer",
    name: "Ömer Faruk Aksoy",
    role: "Takım Kaptanı, YZ & Veri Mühendisi",
    email: "omer@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/%C3%B6merfarukaksoy/",
    image: "omer.png",
    group: "advisor",
  },
  {
    id: "nedim",
    name: "Nedim Mutlu Sezer",
    role: "Teknoloji Kaptanı, YZ & Veri Mühendisi",
    email: "nedim@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/nmsofficial/",
    image: "nedim.jpeg",
    group: "leadership",
  },
  {
    id: "yagiz",
    name: "Yağız Ekrem Dalar",
    role: "PR Kaptanı, YZ & Veri Mühendisi",
    email: "ekrem@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/yagizekremdalar/",
    image: "yagiz.png",
    group: "leadership",
  },
  {
    id: "rifat",
    name: "Ahmet Rıfat Öztürk",
    role: "Strateji Kaptanı, YZ & Veri Mühendisi",
    email: "ahmetrifat@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/ahmet-r%C4%B1fat-%C3%B6zt%C3%BCrk-161896293/",
    image: "rifat.png",
    group: "leadership",
  },
  {
    id: "arda",
    name: "Feyzi Arda Salihoğlu",
    role: "Strateji Kaptanı, YZ & Veri Mühendisi",
    email: "feyziarda.salihoglu@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/feyzi-arda-saliho%C4%9Flu-579057386/",
    image: "arda.png",
    group: "leadership",
  },
  {
    id: "yusuf",
    name: "Yusuf Cidik",
    role: "Altyapı",
    email: "cidik@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/yusuf-cidik-41471a31a/",
    group: "team",
  },
  {
    id: "alper",
    name: "Alper Safa Dede",
    role: "Altyapı",
    email: "alpersafadede@ethosoft.org",
    linkedin: "https://www.linkedin.com/in/alper-safa-dede-40a702315/",
    group: "team",
  },
  {
    id: "ugur",
    name: "Uğur Ali Şahinoğlu",
    role: "Altyapı",
    email: "ugrli@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/u%C4%9Fur-ali-%C5%9Fahino%C4%9Flu-823707387",
    group: "team",
  },
  {
    id: "alaattin",
    name: "Alaattin Ömer Çavuş",
    role: "Altyapı",
    email: "omercavus@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/%C3%B6mer-%C3%A7avu%C5%9F-a80b95389/",
    group: "team",
  },
  {
    id: "seza",
    name: "Yusuf Seza Kılınç",
    role: "Altyapı",
    email: "yusufsezakilinc@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/yusuf-seza-kilin%C3%A7-1b3b02389/",
    group: "team",
  },
  {
    id: "hamza",
    name: "Hamza Yakup Yılmaz",
    role: "Altyapı",
    email: "hamzayakupyilmaz@ethosoft.org",
    linkedin:
      "https://www.linkedin.com/in/hamza-yakup-y%C4%B1lmaz-a958a2384/",
    group: "team",
  },
];

export const achievements = [
  {
    id: "datamedx",
    title: "DataMedX Hackathon Şampiyonluğu",
    organization: "İstinye Üniversitesi",
    image: "datamedx.jpeg",
    rank: "Şampiyon",
  },
  {
    id: "mostra",
    title: "Mostra Hackathon Jüri Özel Ödülü",
    organization: "İTÜ & Uyumsoft",
    image: "mostra.jpeg",
    rank: "Jüri Özel Ödülü",
  },
  {
    id: "teknofest",
    title: "Sağlıkta Yapay Zeka Yarışması",
    organization: "TEKNOFEST",
    image: "teknofest.jpeg",
    rank: "Türkiye 3.'sü",
  },
  {
    id: "basaksehir",
    title: "Living Lab İnovasyon Yarışması",
    organization: "Başakşehir Living Lab",
    image: "basaksehir.jpeg",
    rank: "Türkiye 2.'si",
  },
  {
    id: "eucodeweek",
    title: "EU Code Week Hackathon",
    organization: "European Commission",
    image: "eucodeweek.jpeg",
    rank: "Türkiye 1.'si",
  },
];

export const partners = [
  { id: "bilisimvadisi", name: "Bilişim Vadisi", logo: "bilisimvadisi.png" },
  { id: "gsb", name: "Gençlik ve Spor Bakanlığı", logo: "gsb.png" },
  { id: "ag", name: "Asrın Global", logo: "ag.png" },
  { id: "mems", name: "ODTÜ MEMS Merkezi", logo: "mems.png" },
  { id: "pertev", name: "Pertevniyal Lisesi", logo: "pertev.png" },
];
