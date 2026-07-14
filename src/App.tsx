import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Dna,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Mail,
  Menu,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";
import {
  achievements,
  navigation,
  partners,
  projects,
  team,
  type Project,
  type ProjectCategory,
  type TeamMember,
} from "./data";

const categoryIcons = {
  "Core AI": BrainCircuit,
  Healthcare: HeartPulse,
  Education: GraduationCap,
};

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="brand" href="#hero" aria-label="Ethosoft home">
          <img src="/logolar/ethos-02.png" alt="" width="44" height="44" />
          <span>Ethosoft</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navigation.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <Sparkles size={16} />
            Human-centered artificial intelligence
          </div>
          <h1 id="hero-title">
            We turn ideas into research,
            <span>and research into impact.</span>
          </h1>
          <p>
            Across healthcare, education, and core AI, we bring scientific curiosity,
            engineering rigor, and human values to the same table.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore our projects <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Work with us
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-core">
            <img src="/logolar/ethos-03.png" alt="" width="340" height="172" />
            <p>Science · Technology · Impact</p>
          </div>
          <div className="signal-card signal-card-top">
            <span className="signal-dot" />
            Multimodal AI
          </div>
          <div className="signal-card signal-card-bottom">
            <ScanLine size={17} />
            Health technologies
          </div>
        </div>
      </div>

      <div className="stats" aria-label="Ethosoft at a glance">
        <div>
          <strong>8</strong>
          <span>Active research areas</span>
        </div>
        <div>
          <strong>12</strong>
          <span>Interdisciplinary team members</span>
        </div>
        <div>
          <strong>5</strong>
          <span>National achievements</span>
        </div>
        <div>
          <strong>5</strong>
          <span>Strategic partners</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  id,
  index,
  kicker,
  title,
  description,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-index">{index}</div>
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 id={id}>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = categoryIcons[project.category];
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <X />
        </button>
        <div className="modal-icon">
          <Icon />
        </div>
        <p className="project-category">{project.category}</p>
        <h3 id="project-dialog-title">{project.title}</h3>
        <p className="modal-description">{project.description}</p>
        <div className="focus-list">
          {project.focus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a className="button button-primary" href="mailto:merhaba@ethosoft.org">
          Discuss this project <Mail size={17} />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const categories: ProjectCategory[] = ["All", "Core AI", "Healthcare", "Education"];
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        index="01"
        kicker="Focus areas"
        title="AI built for real-world problems."
        description="Our research and product areas span biosignals, medical imaging, generative AI, and personalized education."
      />

      <div className="filter-bar" role="group" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "is-active" : ""}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => {
          const Icon = categoryIcons[project.category];
          return (
            <article className="project-card" key={project.id}>
              <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="project-icon">
                <Icon />
              </div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button type="button" onClick={() => setSelectedProject(project)}>
                View details <ArrowUpRight size={18} />
              </button>
            </article>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function ResearchSpotlight() {
  return (
    <section id="research" className="section research-spotlight" aria-labelledby="research-title">
      <SectionHeading
        id="research-title"
        index="02"
        kicker="Research papers"
        title="Open research, built to be examined."
        description="Read our preprints, technical reports, controlled experiments, and the evidence behind the systems we build."
      />

      <article className="featured-paper-card">
        <div className="featured-paper-mark" aria-hidden="true">
          <BookOpen />
          <span>01</span>
        </div>
        <div className="featured-paper-content">
          <div className="featured-paper-meta">
            <span>Preprint</span>
            <time dateTime="2026-07-14">July 14, 2026</time>
            <span>Small language models</span>
          </div>
          <h3>
            Foresight Is Not Enough: Sentence-Level Future Signals, Self-Loop Hard
            Negatives, and the Calibration Gap in Small Language Models
          </h3>
          <p>
            A controlled study of why a learned future-oriented representation may
            remain too weakly calibrated to control language-model generation behavior.
          </p>
          <div className="featured-paper-footer">
            <span>Öztürk, Dalar, Aksoy, Sezer &amp; Salihoğlu</span>
            <a href="/papers/foresight-is-not-enough/">
              Read the paper <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </article>

      <a className="research-archive-link" href="/papers/">
        Browse the research archive <ArrowRight size={18} />
      </a>
    </section>
  );
}

function Approach() {
  const principles = [
    {
      icon: Microscope,
      title: "Research discipline",
      text: "We define problems with data, challenge assumptions through the literature, and develop through reproducible experiments.",
    },
    {
      icon: ShieldCheck,
      title: "Trustworthy technology",
      text: "We treat explainability, privacy, and human oversight as essential design requirements alongside accuracy.",
    },
    {
      icon: Users,
      title: "Interdisciplinary team",
      text: "We connect engineering with perspectives from healthcare, education, and communication.",
    },
  ];

  return (
    <section id="approach" className="section approach-section" aria-labelledby="approach-title">
      <SectionHeading
        id="approach-title"
        index="03"
        kicker="How we work"
        title="We build technology not simply because it is possible, but because it is meaningful."
      />
      <div className="principle-grid">
        {principles.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MemberCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <article className={`member-card ${featured ? "is-featured" : ""}`}>
      <div className="member-photo">
        {member.image ? (
          <img
            src={`/kisiler/${member.image}`}
            alt={`Portrait of ${member.name}`}
            loading="lazy"
            width="320"
            height="320"
          />
        ) : (
          <span aria-hidden="true">{initials}</span>
        )}
      </div>
      <div className="member-copy">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <div className="member-links">
          <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`}>
            <LinkedInIcon size={17} />
          </a>
          <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
            <Mail size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}

function Team() {
  const coreTeam = team.filter((member) => member.group !== "team");
  const infrastructure = team.filter((member) => member.group === "team");

  return (
    <section id="team" className="section team-section" aria-labelledby="team-title">
      <SectionHeading
        id="team-title"
        index="04"
        kicker="Our team"
        title="Different disciplines, shared curiosity."
        description="A young, dynamic team working together to turn research into products and ideas into measurable impact."
      />

      <div className="team-grid team-grid-featured">
        {coreTeam.map((member) => (
          <MemberCard key={member.id} member={member} featured />
        ))}
      </div>

      <div className="team-subheading">
        <span>Infrastructure team</span>
        <div />
      </div>
      <div className="team-grid team-grid-compact">
        {infrastructure.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  const [selected, setSelected] = useState<(typeof achievements)[number] | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selected) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [selected]);

  return (
    <section
      id="achievements"
      className="section achievements-section"
      aria-labelledby="achievements-title"
    >
      <SectionHeading
        id="achievements-title"
        index="05"
        kicker="Our achievements"
        title="Where our work proves its value."
        description="We have tested our research and products across different platforms—learning, improving, and succeeding together."
      />

      <div className="achievement-grid">
        {achievements.map((achievement, index) => (
          <button
            key={achievement.id}
            className={`achievement-card achievement-${index + 1}`}
            type="button"
            onClick={() => setSelected(achievement)}
            aria-label={`Enlarge image for ${achievement.title}`}
          >
            <img
              src={`/basarilarimiz/${achievement.image}`}
              alt=""
              loading="lazy"
              width="720"
              height="480"
            />
            <span className="achievement-overlay" />
            <span className="achievement-copy">
              <span>{achievement.rank}</span>
              <strong>{achievement.title}</strong>
              <small>{achievement.organization}</small>
            </span>
            <ExternalLink className="achievement-open" size={20} />
          </button>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop image-modal" role="presentation" onMouseDown={() => setSelected(null)}>
          <div
            className="image-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="modal-close"
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X />
            </button>
            <img src={`/basarilarimiz/${selected.image}`} alt={selected.title} />
            <div>
              <p>{selected.rank}</p>
              <h3 id="achievement-dialog-title">{selected.title}</h3>
              <span>{selected.organization}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="section partners-section" aria-labelledby="partners-title">
      <SectionHeading
        id="partners-title"
        index="06"
        kicker="Ecosystem"
        title="Organizations we create value with."
      />
      <div className="partner-grid">
        {partners.map((partner) => (
          <div className="partner-card" key={partner.id}>
            <img
              src={`/partnerlerimiz/${partner.logo}`}
              alt={`${partner.name} logo`}
              loading="lazy"
              width="180"
              height="90"
            />
            <span>{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-orb" aria-hidden="true" />
      <div className="contact-inner">
        <div>
          <p className="section-kicker">Have an idea?</p>
          <h2>Let's shape the future together.</h2>
          <p>
            Reach out to explore research partnerships, product development, mentorship,
            or opportunities to join our team.
          </p>
        </div>
        <div className="contact-actions">
          <a href="mailto:merhaba@ethosoft.org">
            <span>
              <Mail />
            </span>
            <div>
              <small>Email</small>
              <strong>merhaba@ethosoft.org</strong>
            </div>
            <ArrowUpRight />
          </a>
          <a href="https://www.linkedin.com/company/ethos-ai-team/" target="_blank" rel="noreferrer">
            <span>
              <LinkedInIcon />
            </span>
            <div>
              <small>LinkedIn</small>
              <strong>Ethos AI Team</strong>
            </div>
            <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <a className="brand brand-inverse" href="#hero">
          <img src="/logolar/ethos-05.png" alt="" width="40" height="40" />
          <span>Ethosoft</span>
        </a>
        <p>© {new Date().getFullYear()} Ethosoft AI Team</p>
        <a href="#hero">Back to top <ArrowUp size={16} /></a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Projects />
        <ResearchSpotlight />
        <Approach />
        <Team />
        <Achievements />
        <Partners />
      </main>
      <Contact />
    </>
  );
}
