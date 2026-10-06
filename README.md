<div align="center">

  <img src="public/apple-touch-icon.png" alt="Abu Sahid Logo" width="100" height="100" style="border-radius: 50%;" />

  # Abu Sahid — Portfolio & Digital Showcase

  **Vibe Coder • Android & Web Developer • Digital Creator**

  [![Website](https://img.shields.io/badge/Website-abusahid.me-0ea5e9?style=for-the-badge&logo=google-chrome&logoColor=white)](https://abusahid.me)
  [![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

  <p align="center">
    The official personal portfolio website of <b>Abu Sahid</b>, built with Next.js 16 (App Router), React 19, and Tailwind CSS. Showcasing software engineering projects, Android applications, creative designs, and background timeline.
  </p>

  [Live Demo](https://abusahid.me) • [Explore Projects](#-featured-projects) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Contact](#-connect)

</div>

---

## 🌟 Overview

This repository powers **[abusahid.me](https://abusahid.me)** — an ultra-modern, high-performance portfolio crafted with modern design principles:
- **Dark Aesthetic & Glassmorphism**: Tailored dark-mode UI with sleek gradients and neon accent styling.
- **Micro-Interactions & Motion**: Smooth scroll animations, interactive project modal views, and dynamic marquees.
- **SEO & Social Sharing Ready**: Rich Open Graph images, JSON-LD schema markup, robots.txt, dynamic sitemap, and Google AdMob app-ads.txt validation.
- **Blazing Fast**: Static generation using Next.js Turbopack with responsive images and optimized fonts.

---

## 🚀 Featured Projects

| Project | Description | Platform | Tech Stack | Status |
| :--- | :--- | :--- | :--- | :--- |
| **[TrendCuts](https://play.google.com/store/apps/details?id=com.devsahid.capcuttemplates)** | CapCut templates discovery app helping short-form video editors find trending transitions and effects. | Android | Java, XML, Android Studio | **Published** |
| **[BornToShine](https://www.borntoshine.online)** | Sleek music production and publishing website for showcasing releases and creative artistry. | Web | Next.js, React, CSS Modules | **Live** |
| **Age Calculator** | Exact age calculation app tracking down to minutes and seconds. | Android | Java, XML, Android SDK | Prototype |
| **Password Saver** | Secure local password management vault with encryption. | Android | Java, SQLite | Prototype |
| **Kids Drawing Zone** | Interactive drawing canvas application tailored for young creators. | Android | Java, Canvas API | Prototype |
| **Tutor App** | UI/UX prototype connecting students with local tutors. | Mobile (Design) | Figma, UI/UX | Prototype |

---

## 🛠️ Tech Stack

### Core Framework & Architecture
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)

### Styling & UI
- **CSS Engine:** [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Modules
- **Design Pattern:** Glassmorphism, CSS Custom Properties, Responsive Flexbox & Grid
- **Icons & Assets:** Optimized WebP & SVG vector graphics

### SEO & Web Standards
- **Metadata:** Open Graph Protocol, Twitter Cards, Schema.org `Person` JSON-LD
- **App Monitization:** Verified Google AdMob `app-ads.txt`
- **Routing & Deployment:** Custom `vercel.json` rewrites and `_redirects` SPA fallback

---

## 📂 Project Structure

```text
abusahid.me/
├── public/                     # Static assets and SEO files
│   ├── app-ads.txt             # Google AdMob verification
│   ├── apple-touch-icon.png    # High-res iOS icon
│   ├── favicon.ico             # Multi-size browser icon
│   ├── og-image.png            # 1200x630 social preview card
│   ├── robots.txt              # Web crawler instructions
│   ├── site.webmanifest        # PWA manifest
│   └── sitemap.xml             # XML sitemap
├── src/
│   ├── app/
│   │   ├── data.ts             # Centralized projects, stats & profile data
│   │   ├── globals.css         # Theme tokens & animations
│   │   ├── layout.tsx          # Root layout, meta tags & JSON-LD
│   │   ├── page.tsx            # Main portfolio landing page
│   │   └── portfolio.module.css# Component-level styles
│   ├── assets/                 # Profile avatars & project logos
│   └── components/             # Reusable modular UI components
│       ├── ContactSection.tsx  # Interactive contact form/cards
│       ├── Footer.tsx          # Site footer & social links
│       ├── Navbar.tsx          # Responsive navigation bar
│       └── ProjectModal.tsx    # Detailed modal viewer for projects
├── next.config.ts              # Next.js build configuration
├── vercel.json                 # Vercel deployment rewrites
└── package.json                # Project dependencies and scripts
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js** `v18.17.0` or higher
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abusahid04/abusahid.me.git
   cd abusahid.me
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application live.

### Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Turbopack local development server |
| `npm run build` | Compiles optimized production build |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint analysis for code quality |

---

## 🚢 Deployment

The portfolio is configured for zero-config continuous deployment on **Vercel**:

1. Fork or push to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js settings and runs `npm run build`.
4. Custom domain `abusahid.me` is pre-configured via `CNAME` and `vercel.json`.

---

## 📬 Connect

- **Portfolio:** [abusahid.me](https://abusahid.me)
- **GitHub:** [@abusahid04](https://github.com/abusahid04)
- **Instagram:** [@sahid.io](https://instagram.com/sahid.io)
- **Email:** [contact@abusahid.com](mailto:contact@abusahid.com)

---

<div align="center">
  <sub>Built with ❤️ by <b>Abu Sahid</b>. Designed for creators & developers.</sub>
</div>
