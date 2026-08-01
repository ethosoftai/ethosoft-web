import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const archive = readFileSync(resolve(root, "works/index.html"), "utf8");

const workPages = [
  ["epilepsy-early-warning", "epilepsy-early-warning-system"],
  ["cardiomegaly-screening", "explainable-cardiomegaly-screening"],
  ["polyp-segmentation", "colonoscopy-polyp-segmentation"],
  ["ultrasound-heart-failure", "ultrasound-heart-failure-assessment"],
  ["protein-mutation-screening", "protein-mutation-and-drug-screening"],
  ["mody2-variant-classification", "mody2-variant-classification"],
  ["eye-disease-imaging", "fundus-and-oct-eye-analysis"],
  ["digital-stethoscope", "ai-digital-stethoscope"],
  ["neuropathy-myopathy-emg", "neuropathy-and-myopathy-emg-analysis"],
  ["eco-routing", "traffic-aware-eco-routing"],
  ["english-exam-evaluation", "ai-english-exam-evaluation"],
  ["studium-coach", "studium-ai-study-coach"],
  ["cyberbullying-protection", "context-aware-cyberbullying-protection"],
  ["particle-physics", "machine-learning-for-collider-events"],
  ["music-scoring", "ai-music-scoring"],
  ["dart-rift", "dart-rift"],
];

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

for (const [id, slug] of workPages) {
  const match = archive.match(
    new RegExp(`<article id="${id}"[\\s\\S]*?<\\/article>`),
  );
  if (!match) throw new Error(`Could not find Works record: ${id}`);

  const record = match[0];
  const title = text(record.match(/<h3>([\s\S]*?)<\/h3>/)?.[1] ?? "");
  const description = text(
    record.match(/<p class="work-summary">([\s\S]*?)<\/p>/)?.[1] ?? "",
  );
  const status = text(
    record.match(/<span class="paper-status">([\s\S]*?)<\/span>/)?.[1] ?? "Project",
  );
  const area = text(
    record.match(/<div class="work-meta">[\s\S]*?<\/span><span>([\s\S]*?)<\/span>/)?.[1] ?? "Artificial intelligence",
  );
  const url = `https://ethosoft.org/works/${slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: title,
        description,
        url,
        mainEntityOfPage: url,
        dateModified: "2026-08-01",
        inLanguage: "en",
        author: {
          "@type": "Organization",
          name: "Ethosoft",
          url: "https://ethosoft.org/",
        },
        keywords: area.split("·").map((item) => item.trim()),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ethosoft", item: "https://ethosoft.org/" },
          { "@type": "ListItem", position: 2, name: "Works", item: "https://ethosoft.org/works/" },
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
    <meta property="og:title" content="${escapeAttribute(title)} | Ethosoft Works" />
    <meta property="og:description" content="${escapeAttribute(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="https://ethosoft.org/logolar/ethos-03.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>${title} | Ethosoft Works</title>
    <link rel="stylesheet" href="/src/styles.css" />
    <link rel="stylesheet" href="/src/papers.css" />
    <link rel="stylesheet" href="/src/works.css" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body class="research-body works-body">
    <a class="skip-link" href="#work-content">Skip to project details</a>
    <header class="research-header">
      <div class="research-header-inner">
        <a class="brand" href="/" aria-label="Ethosoft home"><img src="/logolar/ethos-02.png" alt="" width="44" height="44" /><span>Ethosoft</span></a>
        <nav aria-label="Research navigation"><a href="/papers/">Papers</a><a aria-current="page" href="/works/">Works</a><a href="/#team">Team</a><a href="/">Main site</a></nav>
      </div>
    </header>
    <main id="work-content">
      <article>
        <header class="paper-hero work-detail-hero">
          <div class="research-shell paper-hero-inner">
            <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Ethosoft</a><span aria-hidden="true">/</span><a href="/works/">Works</a><span aria-hidden="true">/</span><span>${title}</span></nav>
            <div class="paper-labels"><span class="paper-status">${status}</span><span>${area}</span></div>
            <h1>${title}</h1>
            <p class="paper-deck">${description}</p>
            <div class="preprint-notice"><strong>Project record</strong><p>This page reports the maturity and evidence documented in Ethosoft's working archive. It does not imply peer review, regulatory clearance, or clinical validation.</p></div>
          </div>
        </header>
        <div class="research-shell work-detail-layout">
          <div>
            <p class="research-kicker">Methods and evidence</p>
            ${record}
          </div>
          <aside class="work-detail-aside">
            <p class="research-kicker">Explore</p>
            <a href="/works/">All project records <span aria-hidden="true">→</span></a>
            <a href="/papers/">Research papers <span aria-hidden="true">→</span></a>
            <a href="mailto:merhaba@ethosoft.org">Contact Ethosoft <span aria-hidden="true">→</span></a>
          </aside>
        </div>
      </article>
    </main>
    <footer class="research-footer"><div class="research-shell research-footer-inner"><a class="brand" href="/"><img src="/logolar/ethos-02.png" alt="" width="40" height="40" /><span>Ethosoft</span></a><p>Human-centered artificial intelligence research.</p><a href="/works/">Browse all works</a></div></footer>
  </body>
</html>
`;

  const destination = resolve(root, "works", slug, "index.html");
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, html);
}

console.log(`Generated ${workPages.length} work detail pages.`);
