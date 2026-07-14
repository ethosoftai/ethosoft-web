# Ethosoft web sitesi

Ethosoft'un kurumsal web sitesi. React, TypeScript ve Vite ile geliştirilir; derlenmiş `dist/` çıktısı cPanel Git deployment ile `public_html` dizinine kopyalanır.

## Yerel geliştirme

```bash
npm install
npm run dev
```

## Kontroller ve production build

```bash
npm run typecheck
npm run build
npm run preview
```

İçerikler `src/data.ts`, arayüz `src/App.tsx`, stiller `src/styles.css` içindedir. Görseller `public/` altında tutulur.

## Hazalhost / cPanel dağıtımı

Değişiklikleri göndermeden önce `npm run build` çalıştırılmalıdır. `dist/` repoda tutulur; `.cpanel.yml` bu çıktıyı `public_html` içine kopyalar ve LiteSpeed'in okuyabilmesi için dosya/klasör izinlerini düzenler.
