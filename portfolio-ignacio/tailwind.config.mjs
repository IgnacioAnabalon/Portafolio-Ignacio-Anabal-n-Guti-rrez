/** @type {import('tailwindcss').Config} */
// tailwind.config.mjs — Configuración extendida de Tailwind CSS
// Docs: https://tailwindcss.com/docs/configuration

export default {
  // Archivos donde Tailwind buscará clases para incluirlas en el build
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],

  theme: {
    extend: {
      // ── Fuentes personalizadas ──────────────────────────────
      // Las fuentes se cargan desde Google Fonts en Layout.astro.
      // Aquí sólo registramos los nombres para usarlos como clases.
      fontFamily: {
        syne:  ['Syne', 'sans-serif'],
        mono:  ['DM Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        sans:  ['Inter', 'sans-serif'], // override del sans por defecto
      },

      // ── Colores personalizados del tema ─────────────────────
      // Agrega aquí tokens de color específicos del portafolio
      colors: {
        brand: {
          teal:   '#14b8a6', // color de acento principal
          indigo: '#6366f1', // color de acento secundario
        },
      },

      // ── Animaciones y keyframes ─────────────────────────────
      // Las animaciones de scroll se manejan con JS (IntersectionObserver)
      // y clases CSS custom en Layout.astro.
      // Aquí puedes agregar keyframes de Tailwind si los necesitas.
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
      },
      animation: {
        'fade-in':    'fade-in 0.5s ease-out forwards',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },

      // ── Espaciado extra ─────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },

  plugins: [],
};
