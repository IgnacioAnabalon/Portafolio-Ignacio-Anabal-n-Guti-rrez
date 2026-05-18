// astro.config.mjs
// Configuración principal de Astro
// Docs: https://docs.astro.build/en/reference/configuration-reference/

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Integraciones de Astro
  integrations: [
    tailwind({
      // Permite usar clases de Tailwind directamente en los archivos .astro
      applyBaseStyles: true,
    }),
  ],

  // Configuración de sitio (importante para SEO y sitemap)
  // site: 'https://tu-dominio.com', // ← Descomenta y reemplaza con tu URL

  // Modo de salida:
  // 'static' = genera HTML estático (ideal para Netlify, Vercel, GitHub Pages)
  // 'server' = SSR con Node.js
  output: 'static',
});
