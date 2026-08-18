import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const archive = readFileSync(resolve(root, "conferences-workshops/index.html"), "utf8");

const eventPages = ["south-korea"];

const extendedDetails = {
  "south-korea": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded account</p><h2 id="expanded-methods">The first step outside Türkiye.</h2><p>RoboCup Incheon was one of the most significant milestones in Ethosoft's journey: the point where the team's work moved outside Türkiye for the first time. This wasn't just attending an event—it meant presenting academic work in an international setting and sharing an ecosystem with researchers and technology teams from other countries. For Ethosoft, the value of that experience went well beyond any placement.</p><p>Developing a project inside your own team is one thing; presenting it, explaining its technical approach, answering questions, and encountering different perspectives in front of people from many countries is a different experience entirely. RoboCup showed the team how its work could position itself not only in local competition settings but within the international technology and research ecosystem.</p><p>Three things stood out from the experience:</p><ul class="paper-list"><li><strong>Technical communication.</strong> Building research is one skill; explaining it simply and accurately is another, and RoboCup pushed the team to develop the second.</li><li><strong>International perspective.</strong> Seeing how teams from different countries approached the same problems led the team to question its own working methods.</li><li><strong>Research culture.</strong> The team started asking more than “does it work?”—how a project is evaluated, what assumptions it rests on, what limitations it has, and how it should be documented became part of how the team thinks about a project.</li></ul><p>Ethosoft frames this as a turning point: from its early period shaped by competitions and hackathons, toward a period where the underlying question shifted from “can we build a good project?” to “how do we make this project scientifically stronger, measurable, and open to scrutiny?”</p><div class="expanded-callout"><strong>Why it matters:</strong> a small team that started in Türkiye presenting its work internationally in South Korea remains a milestone. There is a longer road ahead, but the goal is unchanged: research, build, and bring the technologies developed to a level that creates value at an international scale.</div></section>`,
};

const text = (value) =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

const escapeAttribute = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

for (const slug of eventPages) {
  const match = archive.match(
    new RegExp(`<article id="${slug}"[\\s\\S]*?<\\/article>`),
  );
  if (!match) throw new Error(`Could not find Conferences record: ${slug}`);

  const record = match[0];
  const title = text(record.match(/<h3>([\s\S]*?)<\/h3>/)?.[1] ?? "");
  const description = text(
    record.match(/<p class="work-summary">([\s\S]*?)<\/p>/)?.[1] ?? "",
  );
  const status = text(
    record.match(/<span class="paper-status">([\s\S]*?)<\/span>/)?.[1] ?? "Competition",
  );
  const area = text(
    record.match(/<div class="work-meta">[\s\S]*?<\/span><span>([\s\S]*?)<\/span>/)?.[1] ?? "Ethosoft Competitions",
  );
  const url = `https://ethosoft.org/conferences-workshops/${slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        name: title,
        description,
        url,
        mainEntityOfPage: url,
        organizer: {
          "@type": "Organization",
          name: "Ethosoft",
          url: "https://ethosoft.org/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ethosoft", item: "https://ethosoft.org/" },
          { "@type": "ListItem", position: 2, name: "Conferences & Workshops", item: "https://ethosoft.org/conferences-workshops/" },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#fbf7f1" />
    <meta name="description" content="${escapeAttribute(description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" type="image/png" href="/logolar/ethos-02.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&amp;family=Ubuntu:wght@300;400;500;700&amp;display=swap" rel="stylesheet" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Ethosoft" />
    <meta property="og:title" content="${escapeAttribute(title)} | Ethosoft Competitions" />
    <meta property="og:description" content="${escapeAttribute(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="https://ethosoft.org/logolar/ethos-03.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>${title} | Ethosoft Competitions</title>
    <link rel="stylesheet" href="/src/styles.css" />
    <link rel="stylesheet" href="/src/papers.css" />
    <link rel="stylesheet" href="/src/works.css" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body class="research-body works-body">
    <a class="skip-link" href="#event-content">Skip to event details</a>
    <header class="research-header">
      <div class="research-header-inner"><a class="brand" href="/" aria-label="Ethosoft home"><img src="/logolar/ethos-02.png" alt="" width="44" height="44" /><span>Ethosoft</span></a><nav aria-label="Research navigation"><a href="/papers/">Papers</a><a href="/works/">Works</a><a href="/apps/">Apps</a><a aria-current="page" href="/conferences-workshops/">Conferences</a><a href="/#team">Team</a><a href="/">Main site</a></nav></div>
    </header>
    <main id="event-content">
      <article>
        <header class="paper-hero work-detail-hero">
          <div class="research-shell paper-hero-inner">
            <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Ethosoft</a><span aria-hidden="true">/</span><a href="/conferences-workshops/">Conferences</a><span aria-hidden="true">/</span><span>${title}</span></nav>
            <div class="paper-labels"><span class="paper-status">${status}</span><span>${area}</span></div>
            <h1>${title}</h1>
            <p class="paper-deck">${description}</p>
          </div>
        </header>
        <div class="research-shell work-detail-layout">
          <div>
            <p class="research-kicker">Record</p>
            ${record}
            ${extendedDetails[slug] ?? ""}
          </div>
          <aside class="work-detail-aside">
            <p class="research-kicker">Explore</p>
            <a href="/conferences-workshops/">All conferences &amp; competitions <span aria-hidden="true">→</span></a>
            <a href="https://ethosoft.org/#achievements">Achievements &amp; photos <span aria-hidden="true">→</span></a>
            <a href="/works/">Research works <span aria-hidden="true">→</span></a>
            <a href="mailto:merhaba@ethosoft.org">Contact Ethosoft <span aria-hidden="true">→</span></a>
          </aside>
        </div>
      </article>
    </main>
    <footer class="research-footer"><div class="research-shell research-footer-inner"><a class="brand" href="/"><img src="/logolar/ethos-02.png" alt="" width="40" height="40" /><span>Ethosoft</span></a><p>Human-centered artificial intelligence research.</p><a href="/conferences-workshops/">Browse all conferences &amp; competitions</a></div></footer>
  </body>
</html>
`;

  const destination = resolve(root, "conferences-workshops", slug, "index.html");
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, html);
}

console.log(`Generated ${eventPages.length} conference detail pages.`);
