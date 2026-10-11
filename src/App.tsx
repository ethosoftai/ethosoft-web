import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUp, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import {
  achievements,
  navigation,
  papers,
  partners,
  products,
  projects,
  team,
  type ProjectCategory,
  type TeamMember,
} from "./data";
import ResearchMap from "./ResearchMap";

const domains: Exclude<ProjectCategory, "All">[] = ["Core AI", "Healthcare", "Education"];

const formatDate = (iso?: string) =>
  iso
    ? new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Submitted";

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <img src="/logolar/ethos-wordmark.png" alt="Ethosoft" width="148" height="26" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Work with us <ArrowUpRight size={16} />
        </a>
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
      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const stats = [
    { value: papers.length, label: "Publications" },
    { value: projects.length, label: "Research projects" },
    { value: achievements.length, label: "Awards & placements" },
    { value: team.length, label: "Team members" },
  ];

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="kicker">
            <span className="kicker-dot" /> Ethosoft · Human-centered AI research
          </p>
          <h1 id="hero-title">
            We turn ideas into research, <em>and research into impact.</em>
          </h1>
          <p className="hero-lede">
            Across healthcare, education, and core AI, we bring scientific curiosity,
            engineering rigor, and human values to the same table.
          </p>
          <div className="hero-actions">
            <a className="btn btn-ink" href="/papers/">
              Read our research <ArrowRight size={18} />
            </a>
            <a className="btn btn-line" href="/works/">
              Explore all works
            </a>
          </div>
        </div>
        <div className="hero-map">
          <ResearchMap />
        </div>
      </div>
      <dl className="shell stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{String(stat.value).padStart(2, "0")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function SectionHead({
  id,
  index,
  kicker,
  title,
  children,
}: {
  id: string;
  index: string;
  kicker: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="section-head" data-reveal>
      <p className="kicker">
        <span className="section-index">{index}</span> {kicker}
      </p>
      <h2 id={id}>{title}</h2>
      {children && <div className="section-intro">{children}</div>}
    </header>
  );
}

function Research() {
  return (
    <section id="research" className="section" aria-labelledby="research-title">
      <div className="shell">
        <SectionHead id="research-title" index="01" kicker="Publications" title={<>Open research, <em>built to be examined.</em></>}>
          <p>
            Every paper has its own record with a full abstract, authors and citation
            metadata. Preprints say so; negative results are reported as results.
          </p>
          <a className="text-link" href="/papers/">
            All publications <ArrowRight size={16} />
          </a>
        </SectionHead>

        <ol className="paper-index">
          {papers.map((paper, index) => (
            <li key={paper.slug} data-reveal>
              <a href={`/papers/${paper.slug}/`}>
                <span className="paper-no">{String(papers.length - index).padStart(2, "0")}</span>
                <time dateTime={paper.date}>{formatDate(paper.date)}</time>
                <span className="paper-title">{paper.title}</span>
                <span className="paper-status">{paper.status}</span>
                <ArrowUpRight className="paper-arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>

        <nav className="shelf-links" aria-label="More from the research archive" data-reveal>
          <a href="/works/">
            <small>Archive</small>Works <ArrowUpRight size={18} />
          </a>
          <a href="/apps/">
            <small>Products</small>Apps <ArrowUpRight size={18} />
          </a>
          <a href="/conferences-workshops/">
            <small>Events</small>Conferences &amp; workshops <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </section>
  );
}

function ProductArt({ id }: { id: string }) {
  if (id === "mercan") {
    return <img className="product-art product-art-coral" src="/logolar/mercan-coral.svg" alt="" loading="lazy" />;
  }
  if (id === "zero2hero") {
    const tones = ["a", "a", "b", "b", "b", "b", "b", "b", "c", "b", "b", "b", "b", "b", "b", "d", "c", "e", "f", "f", "f", "f", "c", "f", "f", "f", "g", "g", "g", "g", "g", "g", "g", "g", "c", "c", "c"];
    return (
      <div className="product-art week-bars" aria-hidden="true">
        {tones.map((tone, index) => (
          <i key={index} className={`tone-${tone}`} style={{ animationDelay: `${index * 35}ms` }} />
        ))}
      </div>
    );
  }
  if (id === "karatahta") {
    return (
      <svg className="product-art chalk" viewBox="0 0 320 120" aria-hidden="true">
        <path d="M10 100 C 70 100, 90 20, 160 20 S 250 100, 310 100" />
        <path d="M10 108 H 310 M 160 8 V 112" className="axis" />
        <text x="14" y="34">y = sin x</text>
      </svg>
    );
  }
  return (
    <div className="product-art wave" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <i key={index} style={{ animationDelay: `${index * 0.6}s` }} />
      ))}
    </div>
  );
}

function Products() {
  return (
    <section id="products" className="section section-tint" aria-labelledby="products-title">
      <div className="shell">
        <SectionHead id="products-title" index="02" kicker="Products" title={<>Research that <em>people use.</em></>}>
          <p>
            Methods from our papers are tested in products, and running them in front of
            real users turns into new research questions.
          </p>
          <a className="text-link" href="/apps/">
            About our apps <ArrowRight size={16} />
          </a>
        </SectionHead>

        <div className="product-grid">
          {products.map((product) => (
            <a
              key={product.id}
              className={`product-card product-${product.id}`}
              href={product.href}
              target="_blank"
              rel="noopener"
              data-reveal
            >
              <ProductArt id={product.id} />
              <span className="product-status">{product.status}</span>
              <span className="product-name">{product.name}</span>
              <span className="product-tagline">{product.tagline}</span>
              <span className="product-go">
                Visit <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="shell">
        <SectionHead id="projects-title" index="03" kicker="Works" title={<>AI built for <em>real-world problems.</em></>}>
          <p>
            Projects, prototypes and open releases, each described at the maturity level its
            record supports.
          </p>
          <a className="text-link" href="/works/">
            The full archive <ArrowRight size={16} />
          </a>
        </SectionHead>

        <div className="works-columns">
          {domains.map((domain) => {
            const items = projects.filter((project) => project.category === domain);
            return (
              <div className="works-column" key={domain} data-reveal>
                <h3>
                  {domain}
                  <span>{String(items.length).padStart(2, "0")}</span>
                </h3>
                <ul>
                  {items.map((project) => (
                    <li key={project.id}>
                      <a href={project.href}>
                        <strong>{project.title}</strong>
                        <span className="work-desc">{project.description}</span>
                        <span className="work-tags">{project.focus.join(" · ")}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const principles = [
    {
      title: "Research discipline",
      text: "We define problems with data, challenge assumptions through the literature, and develop through reproducible experiments.",
    },
    {
      title: "Trustworthy technology",
      text: "We treat explainability, privacy, and human oversight as essential design requirements alongside accuracy.",
    },
    {
      title: "Interdisciplinary team",
      text: "We connect engineering with perspectives from healthcare, education, and communication.",
    },
  ];

  return (
    <section id="approach" className="approach" aria-labelledby="approach-title">
      <div className="shell">
        <p className="kicker">
          <span className="section-index">04</span> How we work
        </p>
        <h2 id="approach-title" data-reveal>
          We build technology not simply because it is possible, but because it is <em>meaningful.</em>
        </h2>
        <div className="principles">
          {principles.map((principle, index) => (
            <article key={principle.title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="member" data-reveal>
      <div className="member-photo">
        {member.image && (
          <img src={`/kisiler/${member.image}`} alt={`Portrait of ${member.name}`} loading="lazy" width="320" height="400" />
        )}
      </div>
      <h3>{member.profile ? <a href={member.profile}>{member.name}</a> : member.name}</h3>
      <p>{member.role}</p>
      <div className="member-links">
        <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}>
          <LinkedInIcon size={16} />
        </a>
        <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
          <Mail size={16} />
        </a>
      </div>
    </article>
  );
}

function Team() {
  const core = team.filter((member) => member.group !== "team");
  const infrastructure = team.filter((member) => member.group === "team");

  return (
    <section id="team" className="section" aria-labelledby="team-title">
      <div className="shell">
        <SectionHead id="team-title" index="05" kicker="Team" title={<>Different disciplines, <em>shared curiosity.</em></>}>
          <p>A young team working together to turn research into products and ideas into measurable impact.</p>
        </SectionHead>
        <div className="team-grid">
          {core.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
        <div className="roster" data-reveal>
          <span className="kicker">Infrastructure team</span>
          <ul>
            {infrastructure.map((member) => (
              <li key={member.id}>
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const [selected, setSelected] = useState<(typeof achievements)[number] | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selected) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [selected]);

  return (
    <section id="achievements" className="section section-tint" aria-labelledby="achievements-title">
      <div className="shell">
        <SectionHead id="achievements-title" index="06" kicker="Achievements" title={<>Where our work <em>proves its value.</em></>}>
          <p>We test our research and products in competitions across Türkiye and abroad.</p>
        </SectionHead>
        <ol className="award-list">
          {achievements.map((achievement) => (
            <li key={achievement.id} data-reveal>
              <button type="button" onClick={() => setSelected(achievement)} aria-label={`View photo: ${achievement.title}`}>
                <span className="award-rank">{achievement.rank}</span>
                <span className="award-title">{achievement.title}</span>
                <span className="award-org">{achievement.organization}</span>
                <img src={`/basarilarimiz/${achievement.image}`} alt="" loading="lazy" width="120" height="80" />
              </button>
            </li>
          ))}
        </ol>
      </div>

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="award-dialog-title" onMouseDown={(event) => event.stopPropagation()}>
            <button ref={closeRef} className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Close">
              <X />
            </button>
            <img src={`/basarilarimiz/${selected.image}`} alt={selected.title} />
            <div>
              <p className="kicker">{selected.rank}</p>
              <h3 id="award-dialog-title">{selected.title}</h3>
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
    <section id="partners" className="section partners" aria-labelledby="partners-title">
      <div className="shell partners-inner">
        <h2 id="partners-title" className="kicker">
          <span className="section-index">07</span> Organizations we create value with
        </h2>
        <ul className="partner-row">
          {partners.map((partner) => (
            <li key={partner.id}>
              <img src={`/partnerlerimiz/${partner.logo}`} alt={partner.name} loading="lazy" width="160" height="80" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="shell">
        <p className="kicker">
          <span className="kicker-dot" /> Have an idea?
        </p>
        <h2>
          Let's shape the future <em>together.</em>
        </h2>
        <p className="contact-lede">
          Research partnerships, product development, mentorship, or joining the team.
        </p>
        <a className="contact-mail" href="mailto:merhaba@ethosoft.org">
          merhaba@ethosoft.org <ArrowUpRight />
        </a>
        <div className="contact-links">
          <a href="https://www.linkedin.com/company/ethos-ai-team/" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={15} />
          </a>
          <a href="https://github.com/ethosoftai" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={15} />
          </a>
          <a href="https://huggingface.co/Ethosoft" target="_blank" rel="noreferrer">
            Hugging Face <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="footer-bottom">
          <img src="/logolar/ethos-wordmark.png" alt="Ethosoft" width="120" height="21" />
          <p>© {new Date().getFullYear()} Ethosoft AI Team</p>
          <a href="#hero">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Research />
        <Products />
        <Works />
        <Approach />
        <Team />
        <Achievements />
        <Partners />
      </main>
      <Contact />
    </>
  );
}
