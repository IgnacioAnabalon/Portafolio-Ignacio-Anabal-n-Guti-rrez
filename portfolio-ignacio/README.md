# Portafolio — Ignacio Anabalón Gutiérrez

Portafolio web personal construido con **Astro** y **Tailwind CSS**.  
Arquitectura modular y escalable, fácil de modificar y extender.

---

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (http://localhost:4321)
npm run dev

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

---

## 📁 Estructura del proyecto

```
portfolio-ignacio/
├── public/                   # Archivos estáticos (favicon, imágenes, CV, etc.)
│   └── favicon.svg
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Layout principal: HTML base, fuentes, navbar, scripts globales
│   │
│   ├── components/           # Componentes reutilizables (una sección = un archivo)
│   │   ├── Hero.astro        # Sección Hero / Inicio
│   │   ├── Education.astro   # Sección Sobre mí + Educación
│   │   ├── Experience.astro  # Sección Experiencia laboral
│   │   ├── Skills.astro      # Sección Habilidades / Tech Stack
│   │   └── Contact.astro     # Sección Contacto + Footer
│   │
│   └── pages/
│       └── index.astro       # Página principal (ensambla los componentes)
│
├── astro.config.mjs          # Configuración de Astro
├── tailwind.config.mjs       # Configuración de Tailwind CSS
└── package.json
```

---

## ➕ Cómo añadir una nueva SECCIÓN a la One-Page

1. Crea un nuevo componente en `src/components/`:

```astro
---
// src/components/Certifications.astro
---
<section id="certificaciones" class="py-24 px-6 border-t border-zinc-800/50">
  <div class="max-w-6xl mx-auto">
    <!-- Tu contenido aquí -->
  </div>
</section>
```

2. Importa y úsalo en `src/pages/index.astro`:

```astro
---
import Certifications from '../components/Certifications.astro';
---
<!-- Dentro del <Layout>: -->
<Certifications />
```

3. Añade el link en la navbar dentro de `src/layouts/Layout.astro`.

---

## 🗂️ Cómo crear una nueva PÁGINA independiente

Astro usa **file-based routing**: cada archivo `.astro` en `src/pages/` es una ruta automática.

### Ejemplo: Página de proyectos en `/proyectos`

1. Crea `src/pages/proyectos.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Proyectos — Ignacio Anabalón">
  <section class="min-h-screen py-32 px-6">
    <div class="max-w-6xl mx-auto">
      <h1 class="font-syne font-bold text-5xl text-slate-100">Proyectos</h1>
      <!-- Contenido de la página -->
    </div>
  </section>
</Layout>
```

2. Accede automáticamente en: `http://localhost:4321/proyectos`

3. Enlaza desde la navbar u otro componente:
```html
<a href="/proyectos">Proyectos</a>
```

### Ejemplo: Página de blog con rutas dinámicas en `/blog/[slug]`

1. Crea `src/pages/blog/[slug].astro` para rutas dinámicas.
2. Astro generará una página por cada post en build time (con `getStaticPaths()`).

---

## 🎨 Sistema de animaciones de scroll

Las animaciones de entrada se activan automáticamente con `IntersectionObserver`.

**Para animar cualquier elemento:**
```html
<!-- Animación básica (desde abajo) -->
<div class="animate-on-scroll">...</div>

<!-- Con delay (en milisegundos) -->
<div class="animate-on-scroll" data-delay="200">...</div>

<!-- Animación desde la izquierda -->
<div class="animate-from-left">...</div>

<!-- Animación desde la derecha -->
<div class="animate-from-right">...</div>
```

El script en `Layout.astro` observa automáticamente todos los elementos con estas clases.

---

## 🌐 Deployment

### Vercel (recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta `dist/` a Netlify
```

### GitHub Pages
Instala la integración: `npm install @astrojs/github-pages`  
Consulta: https://docs.astro.build/en/guides/deploy/github/

---

## 📝 To-Do / Próximos pasos

- [ ] Reemplazar URLs de LinkedIn, GitHub y email
- [ ] Agregar foto de perfil en la sección Hero (opcional)
- [ ] Añadir proyectos personales en `Experience.astro`
- [ ] Subir CV en `public/cv-ignacio-anabalon.pdf`
- [ ] Configurar el sitio en `astro.config.mjs` con tu dominio
- [ ] Agregar favicon personalizado en `public/favicon.svg`
