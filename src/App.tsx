import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
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
  researchReleases,
  team,
  type Project,
  type ProjectCategory,
  type ResearchRelease,
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

function ResearchReleaseCard({
  release,
  index,
  cardHref,
  cardLabel,
}: {
  release: ResearchRelease;
  index: number;
  cardHref: string;
  cardLabel: string;
}) {
  const MarkIcon = release.category === "model" ? BrainCircuit : Database;
  const linkIcons = {
    code: Code2,
    dataset: Database,
    model: BrainCircuit,
  };

  return (
    <article className={`research-project-card clickable-research-card is-${release.category}`}>
      <div className="research-project-mark" aria-hidden="true">
        <MarkIcon />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="research-project-content">
        <div className="research-project-meta">
          <span>{release.status}</span>
          {release.areas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
        <h3>{release.title}</h3>
        <p>{release.description}</p>
        <blockquote>
          <span>{release.highlightLabel}</span>
          {release.highlight}
        </blockquote>
        <p className="research-project-caveat">{release.note}</p>
        <div className="research-project-links">
          {release.links.map((link) => {
            const LinkIcon = linkIcons[link.kind];
            return (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                <LinkIcon size={18} />
                {link.label}
                <ArrowUpRight size={17} />
              </a>
            );
          })}
        </div>
      </div>
      <a className="research-card-hitarea" href={cardHref} aria-label={cardLabel} />
    </article>
  );
}

function ResearchSpotlight() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeResearchCard, setActiveResearchCard] = useState(0);
  const model = researchReleases.find((release) => release.category === "model");
  const experiment = researchReleases.find(
    (release) => release.category === "experiment",
  );
  const researchCardLabels = [
    "Publications",
    ...(model ? ["Models and adapters"] : []),
    ...(experiment ? ["Experiments and benchmarks"] : []),
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame = 0;
    const updateActiveCard = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const cards = Array.from(
          slider.querySelectorAll<HTMLElement>(".research-card-column"),
        );
        const activeIndex = cards.reduce((nearestIndex, card, index) => {
          const currentDistance = Math.abs(
            card.offsetLeft - slider.offsetLeft - slider.scrollLeft,
          );
          const nearestCard = cards[nearestIndex];
          const nearestDistance = Math.abs(
            nearestCard.offsetLeft - slider.offsetLeft - slider.scrollLeft,
          );
          return currentDistance < nearestDistance ? index : nearestIndex;
        }, 0);

        setActiveResearchCard(activeIndex);
      });
    };

    slider.addEventListener("scroll", updateActiveCard, { passive: true });
    window.addEventListener("resize", updateActiveCard);
    updateActiveCard();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      slider.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  const showResearchCard = (index: number) => {
    const slider = sliderRef.current;
    const card = slider?.querySelectorAll<HTMLElement>(".research-card-column")[index];
    if (!slider || !card) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    slider.scrollTo({
      left: card.offsetLeft - slider.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActiveResearchCard(index);
  };

  return (
    <section id="research" className="section research-spotlight" aria-labelledby="research-title">
      <SectionHeading
        id="research-title"
        index="02"
        kicker="Open research"
        title="Open research, built to be examined."
        description="Explore our papers, open-source prototypes, benchmark datasets, controlled experiments, and the evidence behind the systems we build."
      />

      <nav className="research-section-cards" aria-label="Open research sections">
        <a className="research-section-card" href="/papers/">
          <span className="research-section-card-icon" aria-hidden="true">
            <BookOpen />
          </span>
          <span className="research-section-card-copy">
            <small>01</small>
            <strong>Publications</strong>
            <span>Papers, preprints &amp; reports</span>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a className="research-section-card" href="/models/">
          <span className="research-section-card-icon" aria-hidden="true">
            <BrainCircuit />
          </span>
          <span className="research-section-card-copy">
            <small>02</small>
            <strong>Models &amp; adapters</strong>
            <span>Weights, adapters &amp; local formats</span>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a className="research-section-card" href="/experiments/">
          <span className="research-section-card-icon" aria-hidden="true">
            <Database />
          </span>
          <span className="research-section-card-copy">
            <small>03</small>
            <strong>Experiments</strong>
            <span>Benchmarks, datasets &amp; prototypes</span>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>

      <div
        ref={sliderRef}
        className="research-cards-slider"
        aria-label="Featured open research"
      >
        <section className="research-card-column" aria-labelledby="publications-card-title">
          <a id="publications-card-title" className="research-card-category" href="/papers/">
            <span>
              <strong>Publications</strong>
              <small>Papers, preprints &amp; reports</small>
            </span>
            <ArrowRight aria-hidden="true" />
          </a>
          <article className="featured-paper-card clickable-research-card">
            <div className="featured-paper-mark" aria-hidden="true">
              <BookOpen />
              <span>02</span>
            </div>
            <div className="featured-paper-content">
              <div className="featured-paper-meta">
                <span>Preprint</span>
                <time dateTime="2026-07-16">July 16, 2026</time>
                <span>Turkish NLP</span>
              </div>
              <h3>
                NEDOQwen: An Auditable Low-Cost Diagnosis-and-Repair Study for a
                Turkish-Centric 0.824B Language Model
              </h3>
              <p>
                A version-aware case study in exposing evaluation mismatch, auditing
                answer-label bias, and partially repairing a Turkish-centric small language model.
              </p>
              <div className="featured-paper-footer">
                <span>Öztürk, Dalar, Aksoy, Sezer &amp; Salihoğlu</span>
                <a href="/papers/nedoqwen/">
                  Read the report <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <a
              className="research-card-hitarea"
              href="/papers/"
              aria-label="Browse publications"
            />
          </article>
        </section>

        {model && (
          <section className="research-card-column" aria-labelledby="models-card-title">
            <a id="models-card-title" className="research-card-category" href="/models/">
              <span>
                <strong>Models &amp; adapters</strong>
                <small>Weights, adapters &amp; local formats</small>
              </span>
              <ArrowRight aria-hidden="true" />
            </a>
            <ResearchReleaseCard
              release={model}
              index={0}
              cardHref="/models/"
              cardLabel="Browse models and adapters"
            />
          </section>
        )}

        {experiment && (
          <section className="research-card-column" aria-labelledby="experiments-card-title">
            <a
              id="experiments-card-title"
              className="research-card-category"
              href="/experiments/"
            >
              <span>
                <strong>Experiments &amp; benchmarks</strong>
                <small>Code, datasets &amp; prototypes</small>
              </span>
              <ArrowRight aria-hidden="true" />
            </a>
            <ResearchReleaseCard
              release={experiment}
              index={0}
              cardHref="/experiments/"
              cardLabel="Browse experiments and benchmarks"
            />
          </section>
        )}
      </div>

      <nav className="research-slider-navigation" aria-label="Choose a research feature">
        {researchCardLabels.map((label, index) => (
          <button
            key={label}
            type="button"
            className={`research-slider-number ${
              activeResearchCard === index ? "is-active" : ""
            }`}
            aria-label={`Show ${label}`}
            aria-current={activeResearchCard === index ? "true" : undefined}
            onClick={() => showResearchCard(index)}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </nav>
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
