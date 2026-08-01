import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const records = {
  "ahmet-rifat-ozturk": ["Ahmet_Rifat_Ozturk_Comprehensive_CV.pdf"],
  "yagiz-ekrem-dalar": ["yagiz_ekrem_dalar_detailed_cv_v2.pdf"],
  "nedim-mutlu-sezer": ["nedim_mutlu_sezer_cv.tex"],
};

const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const [slug, files] of Object.entries(records)) {
  const pagePath = resolve(root, "person", slug, "index.html");
  let html = readFileSync(pagePath, "utf8");
  if (html.includes("person-original-source")) continue;
  const cards = files.map((file) => {
    const publicPath = `/kisiler/cv/${encodeURIComponent(file)}`;
    const isText = file.endsWith(".tex");
    const source = isText ? `<pre class="person-source-text">${escapeHtml(readFileSync(resolve(root, "public", "kisiler", "cv", file), "utf8"))}</pre>` : `<iframe class="person-source-pdf" src="${publicPath}" title="Original ${file}"></iframe>`;
    return `<details class="person-source-file"><summary>${file}</summary><div class="person-source-actions"><a href="${publicPath}" download>Download original file <span aria-hidden="true">↗</span></a></div>${source}</details>`;
  }).join("");
  const section = `<section class="person-section person-original-source" id="original-source"><p class="eyebrow">Original source</p><h2>Source file content</h2><p>The original source file is included below without rewriting. Use the download link for the exact file.</p>${cards}</section>`;
  html = html.replace(/\s*<section class="person-section" id="contact">/, `${section}\n        <section class="person-section" id="contact">`);
  html = html.replace('<a href="#contact">Contact &amp; CV <span>↗</span></a>', '<a href="#original-source">Original source <span>↗</span></a><a href="#contact">Contact &amp; CV <span>↗</span></a>');
  writeFileSync(pagePath, html);
}
