# Ethosoft website

Ethosoft's corporate website. It is built with React, TypeScript, and Vite; the compiled `dist/` output is copied to `public_html` through cPanel Git deployment.

## Local development

```bash
npm install
npm run dev
```

## Checks and production build

```bash
npm run typecheck
npm run build
npm run preview
```

Content lives in `src/data.ts`, the interface in `src/App.tsx`, and styles in `src/styles.css`. Images are stored under `public/`.

## Hazalhost / cPanel deployment

Run `npm run build` before pushing changes. The repository tracks `dist/`; `.cpanel.yml` copies that output into `public_html` and applies file and directory permissions that LiteSpeed can read.
