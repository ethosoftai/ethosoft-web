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

// The archive cards stay concise; these sections carry the longer project briefs into
// each crawlable detail page. They are deliberately written as evidence-aware summaries
// of the materials in /home/rifat/Masaüstü/Projeler.
const extendedDetails = {
  "epilepsy-early-warning": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">Wearable sensing, edge inference, and an emergency workflow.</h2><p>The supplied brief describes a four-state EEG classification problem: ictal (during a seizure), preictal (before a seizure), postictal (after a seizure), and normal activity. Eight electrodes collect the signal, an OpenBCI Cyton path digitizes it, and a Raspberry Pi is intended to run the inference close to the user rather than sending every signal segment to a remote service.</p><p>The proposed processing cadence uses five-second EEG sequences evaluated at regular intervals. A multi-scale temporal module is meant to capture short and long frequency changes, channel attention and fusion model relationships between electrodes, and a temporal-context module tracks longer changes around a possible event. A Flutter companion app is designed to show risk, medication information, and emergency actions including location-aware SMS notifications.</p><div class="expanded-callout"><strong>What the project still needs:</strong> patient-level and subject-independent splits, prospective false-alarm measurement, latency and battery profiling, and clinical validation before a two-to-five-minute warning can be treated as a demonstrated capability.</div></section>`,
  "cardiomegaly-screening": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">Anatomy-first chest X-ray reasoning.</h2><p>The cardiomegaly system is organized as a chain rather than a single classifier. Heart and lung regions are segmented first, the cardiothoracic ratio and area relationships are calculated, and a classifier combines those measurements with image-model evidence. The local competition materials describe U-Net++ for the heart, DeepLabV3+ with a ResNet101 backbone for lungs, and LightGBM for the final tabular decision.</p><p>This structure is intended to make an output inspectable: a reviewer can see the predicted anatomy, the cardiothoracic measurements, Grad-CAM-style image evidence, and SHAP-style feature contributions. The archive also records experiments with StyleGAN2-ADA synthetic images and multiple public chest X-ray sources, which makes dataset provenance and leakage controls central to any reproduction.</p><div class="expanded-callout"><strong>Evidence boundary:</strong> reported IoU, F1, and ratio-error figures come from the project materials. They are competition-study results, not a clinical validation or a substitute for radiologist review.</div></section>`,
  "polyp-segmentation": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">Segmentation under dataset shift.</h2><p>The polyp work compares several segmentation families—Attention U-Net, U-Net++, DeepLabV3+, PVT-Cascade, and SSFormer-S with progressive refinement—on colonoscopy imagery. Its practical emphasis is the experiment loop: resizing and mask preparation, augmentation, learning-rate studies, bilateral filtering, elastic deformation, and cosine-annealing warm restarts are treated as variables rather than hidden implementation details.</p><p>The documented validation results are paired with external-dataset behavior instead of being presented as one universal score. That matters for colonoscopy because camera systems, bowel preparation, lighting, lesion size, and annotation conventions can change the visual distribution. The project record therefore keeps both the stronger U-Net++ validation result and the less uniform cross-dataset results visible.</p><div class="expanded-callout"><strong>Next evidence:</strong> a fixed patient-level protocol, external prospective data, calibration, and lesion-size-stratified error analysis would be needed before deployment claims.</div></section>`,
  "ultrasound-heart-failure": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">Turning echocardiography motion into decision support.</h2><p>The ultrasound concept treats an echocardiogram as a sequence, not an isolated image. A multi-scale visual feature module is intended to capture chamber geometry at different resolutions; spatial attention and feature fusion emphasize the left ventricle and surrounding tissue; and temporal-motion analysis follows contraction and relaxation across the cardiac cycle.</p><p>From the predicted end-diastolic and end-systolic boundaries, the system would estimate volumes and derive ejection fraction, then separate low-EF and preserved-EF cases as a decision-support output. The design naturally requires consistent view selection, frame timing, segmentation quality checks, and a transparent way to surface uncertainty when the acoustic window is poor.</p><div class="expanded-callout"><strong>Evidence boundary:</strong> the supplied material specifies architecture and intended outputs but does not include a completed cohort evaluation, so no EF accuracy or clinical performance is claimed.</div></section>`,
  "protein-mutation-screening": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">Sequence, structure, and virtual screening in one workflow.</h2><p>The protein project combines two related analyses. First, human cDNA and protein sequences sourced from NCBI are represented through sequence models, AlphaFold-derived structures, and graph neural networks; XGBoost and ensemble baselines are compared with a multimodal model that joins sequence and structural evidence. The project notes report F1 values of 72% for the conventional machine-learning path, 84% for the GNN path, and 94% for the combined model.</p><p>The second analysis focuses on the R166H G6PD mutation. Wild-type and mutant structures are compared, compounds are filtered with RDKit, and GNINA is used to compare docking poses and binding-energy patterns. This is useful as a hypothesis-generation workflow: ranking molecules computationally can prioritize experiments, but docking scores do not establish binding, efficacy, or restoration of enzyme function.</p><div class="expanded-callout"><strong>Reproducibility priorities:</strong> report sequence and structure versions, train/test separation by protein family or variant lineage, docking protocol, protonation assumptions, and laboratory follow-up.</div></section>`,
  "mody2-variant-classification": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">A small-data GCK variant baseline.</h2><p>The MODY2 study assembles 317 pathogenic and 39 benign GCK variants from ClinVar and LOVD. After cleaning and label review, each sequence is represented with overlapping 3-mer frequencies. The benign class is substantially smaller, so SMOTE is applied inside the training workflow; a held test set is described as 20 pathogenic and 20 benign variants.</p><p>A voting ensemble combines XGBoost, LightGBM, Random Forest, KNN, logistic regression, Gradient Boosting, CatBoost, and SVM signals. The project compares 3-mer behavior with larger k-mer representations and reports accuracy, precision, sensitivity, specificity, F1, ROC AUC, and PR AUC, with the documented headline values at 78.35% accuracy, 0.7987 ROC AUC, and 0.8313 PR AUC.</p><div class="expanded-callout"><strong>Clinical caution:</strong> the sample is small and database labels are not equivalent to a prospective diagnostic cohort. Population-aware validation, family-level leakage checks, calibration, and SHAP or equivalent explanations are required next.</div></section>`,
  "eye-disease-imaging": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">Two imaging modalities, one localization layer.</h2><p>The eye-analysis concept combines fundus photographs, which expose retinal vessels and the posterior eye, with OCT scans, which resolve layered retinal structure. The supplied brief targets more than 25 conditions and proposes contrast enhancement, Gaussian denoising, and histogram equalization before model inference.</p><p>A CNN and transfer-learning backbone are paired with attention so that the system can focus on clinically relevant regions. A Gemini-connected prototype is described as an interpretation and localization layer: rather than returning only a disease label, it should indicate where the finding appears and produce an explanation that a clinician can inspect alongside the original image.</p><div class="expanded-callout"><strong>Evidence boundary:</strong> the folder describes a prototype direction and candidate metrics such as F1 and IoU; it does not provide a completed multi-disease, multi-device clinical validation.</div></section>`,
  "digital-stethoscope": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">From auscultation recording to interpretable alerts.</h2><p>The digital-stethoscope concept starts with a Bluetooth-capable or high-resolution electronic stethoscope that converts heart sounds into a digital waveform. Preprocessing removes noise and normalizes recording conditions, after which MFCCs, RMS energy, zero-crossing rate, and time-frequency characteristics describe the signal.</p><p>The model layer can support a temporal CNN or recurrent network, with SVM and Random Forest as feature-based baselines. The intended product surface includes a mobile or web upload flow, a normal/murmur/other-abnormal result, and a feedback path that tells the user an alert is a screening signal rather than a diagnosis.</p><div class="expanded-callout"><strong>Required validation:</strong> recordings from multiple devices, patient-level splits, cardiologist adjudication, ambient-noise stress tests, sensitivity at a fixed false-alarm rate, and calibration across age groups.</div></section>`,
  "neuropathy-myopathy-emg": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">An EMG direction awaiting its evidence layer.</h2><p>The source folder contains a concise problem statement: distinguish neuropathic and myopathic patterns from electromyography signals. A credible implementation would need to define whether the input is raw waveform, motor-unit potential features, or a clinical report; specify electrode placement and acquisition hardware; and establish a patient-level split so multiple segments from one person cannot leak across train and test.</p><p>Potential baselines include frequency and amplitude statistics, wavelet features, and temporal convolution or recurrent models. The record intentionally stops before claiming a model, dataset, or result because none is documented in the supplied folder.</p><div class="expanded-callout"><strong>Status:</strong> this is an early research direction, not a completed diagnostic system.</div></section>`,
  "eco-routing": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">Routing for fuel, time, and traffic—not distance alone.</h2><p>The eco-routing design combines road-network geometry from OpenStreetMap or map APIs with speed limits, road type, slope, closures, weather, and live traffic. Vehicle parameters are stored separately so the same route graph can be evaluated for different fuel-consumption profiles. A route cost can then trade off travel time against estimated fuel use instead of treating the shortest path as automatically optimal.</p><p>A* and Dijkstra are proposed for graph search, while Gaussian Mixture Regression models the relationship between traffic, road conditions, vehicle behavior, and consumption. The Flutter application is intended for Android and iOS, with map and traffic-provider integrations and visual comparisons of route time versus estimated fuel.</p><div class="expanded-callout"><strong>Evidence boundary:</strong> the brief reports encouraging simulation observations, but a production claim needs instrumented fuel measurements, traffic-API drift monitoring, route-choice baselines, and uncertainty intervals.</div></section>`,
  "english-exam-evaluation": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">One rubric across four language skills.</h2><p>The English-assessment system is designed for writing, listening, reading, and speaking rather than only text classification. Writing answers can be typed or captured from photographed paper; reading and listening tasks can be generated at a target level; and speaking responses are collected as audio. Gemini 2.5 Flash is proposed as the evaluation and content-generation layer, constrained by teacher-defined criteria.</p><p>The flow is intentionally teacher-configurable: a teacher sets the rubric, a student submits a response through mobile or web, the service evaluates grammar, vocabulary, coherence, pronunciation, fluency, comprehension, and answer correctness, and the result returns with feedback. A useful deployment would preserve the original response, rubric, model version, and explanation so a teacher can audit or override the score.</p><div class="expanded-callout"><strong>Assessment boundary:</strong> automated scores should be calibrated against human raters, tested for accent and dialect bias, and presented as feedback rather than an unreviewable final grade.</div></section>`,
  "studium-coach": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">A study companion that closes the planning loop.</h2><p>Studium targets the practical gaps around YKS, with a roadmap extending to KPSS and LGS: students often have resources but lack a coherent plan, regular analysis, motivation, and preference guidance. The platform brings those pieces into one learner profile instead of treating a calendar, a practice test, and a recommendation as separate products.</p><p>The documented feature set includes AI-generated study programs, motivation notifications, mock-exam and session analysis, Pomodoro support, study-video and book recommendations, a score-calculation engine, and AI-assisted university preference guidance. The planned Flutter client spans Android, web, and Windows, with Gemini 2.5 Pro as the stated integration and a free-software direction for the application.</p><div class="expanded-callout"><strong>Product evidence:</strong> the roadmap records prototype, completion, and release milestones; it does not establish learning gains. Future evaluation should track retention, plan adherence, recommendation quality, and student wellbeing with consent.</div></section>`,
  "cyberbullying-protection": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">Moderation with intervention, appeal, and care.</h2><p>The cyberbullying concept goes beyond keyword blocking. It proposes contextual analysis for trolling, humiliation, harassment, and identity-targeted discrimination, combined with sentiment signals for aggressive or harmful tone. A message can be held before delivery, the sender can receive a behavioral explanation, and repeated violations can trigger graduated actions rather than an unexplained permanent ban.</p><p>The product brief also includes parent or guardian alerts, a limited recent-message view for safeguarding, multilingual support, reporting, and user feedback when a message is incorrectly flagged. Those features make governance part of the system: moderation thresholds, appeal records, retention periods, and access controls are as important as classifier quality.</p><div class="expanded-callout"><strong>Safety boundary:</strong> automated moderation should not be the sole decision-maker in high-impact cases. Human review, privacy-preserving logs, bias tests across languages and dialects, and clear escalation rules are required.</div></section>`,
  "particle-physics": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">A collider pipeline from event generation to statistical evidence.</h2><p>The particle-physics project combines CERN/LHC collision records with Monte Carlo event generation, detector simulation, and reconstruction. The target questions span QCD backgrounds, Higgs production and decay, and beyond-Standard-Model signatures in which invisible particles appear indirectly as missing transverse momentum (MET).</p><p>Candidate features include jets, leptons, boson decays, angular distributions, multiplicities, momentum and energy, and MET. A signal-versus-background model can be trained on simulated samples, but the scientific endpoint is not classifier accuracy alone: simulation-to-data agreement, systematic uncertainties, control regions, p-values or limits, and robustness to pile-up must be part of the analysis. Proposed channels include mono-jet plus MET, mono-X plus MET, and Higgs-related final states.</p><div class="expanded-callout"><strong>Evidence boundary:</strong> the local project documents the analysis design and risk factors; it does not claim a new particle, a dark-matter observation, or a completed exclusion limit.</div></section>`,
  "music-scoring": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">A score that listens to both sound and language.</h2><p>The music-scoring project addresses a gap in standardized music evaluation by treating a track as two linked information streams. The Python pipeline separates vocals with Demucs, transcribes them with Whisper, and then analyzes the lyrics for rhyme, redif, semantic depth, and potentially harmful content. This keeps formal lyric structure and meaning in the same record instead of reducing a song to an audio embedding.</p><p>On the acoustic side, MFCCs and spectral descriptors are used to estimate acousticness, energy, and danceability with Gradient Boosting. Genre-specific coefficients then combine the lyric and audio features into a 0–100 score. The project document names MAE and F1 as evaluation metrics and frames the output as a repeatable measurement that can support comparison, discovery, and further human study.</p><div class="expanded-callout"><strong>Interpretation boundary:</strong> a composite score is a model-defined instrument, not an objective property of a song. Human-rater agreement, genre-balanced validation, lyric-language coverage, copyright-safe evaluation data, and calibration should accompany any public ranking.</div></section>`,
  "dart-rift": `<section class="work-detail-expanded" aria-labelledby="expanded-methods"><p class="research-kicker">Expanded project brief</p><h2 id="expanded-methods">A falsifiable inverse problem for Dimorphos.</h2><p>DART-RIFT works backward from the NASA DART impact: instead of choosing one asteroid interior and reporting one answer, it samples uncertain interior parameters such as bulk density, porosity, cohesion, and coarse-block fraction, runs a forward impact simulation, and learns how those parameters map to observables. Bayesian inference over that surrogate then returns a posterior distribution showing which interiors the data support.</p><p>The repository's foundation is a deterministic, GPU-accelerated SPH engine with a Tillotson equation of state, pressure-dependent strength, P-α porosity, Barnes–Hut self-gravity, a resolved projectile, and a PDS-derived Dimorphos shape. Its engineering record emphasizes gates and negative evidence: analytic and experimental tests, bit-level CPU/GPU comparisons, clean-tree runs, and explicit statements that passing validation gates does not yet constitute a scientific result about Dimorphos.</p><div class="expanded-callout"><strong>Scientific boundary:</strong> the project is designed to lock its prior prediction before Hera observations and make it falsifiable. Forward-model error must remain part of the posterior; a fast but miscalibrated simulator would produce overconfident conclusions.</div></section>`,
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
            ${extendedDetails[id] ?? ""}
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
