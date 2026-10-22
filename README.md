# Hashan Ganegoda — Personal Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A modern, fast, responsive personal developer portfolio website designed for **Hashan Ganegoda**, highlighting a physical science foundation, formal computing degree candidate background, and practical experience across **software development, data analytics, and artificial intelligence**.

---

## 🌟 Live Demo & Profiles

- **Developer:** Hashan Ganegoda
- **Positioning:** Software Developer | Data & AI Enthusiast
- **LinkedIn:** [linkedin.com/in/hashan-ganegoda](https://www.linkedin.com/in/hashan-ganegoda/)
- **GitHub:** [github.com/hashan-g](https://github.com/hashan-g)
- **CV / Resume:** Downloadable directly from `/resume.pdf`

---

## 🚀 Key Features

- **Modern Dark Developer Aesthetic:** Deep dark slate palette with cyan/indigo accent gradients, sleek glassmorphism, and high-contrast typography.
- **Balanced Hero Section:** Professional profile photograph, concise headline, short introduction, and immediate action buttons (`View Projects`, `Download CV`, `LinkedIn`, `GitHub`).
- **Streamlined About Section:** Clear professional narrative highlighting physical science analytical discipline, formal IT engineering principles, and career direction as an early-career developer.
- **Compact & Categorized Technical Skills:** 7 logical categories (Programming Languages, Frontend, Backend, Mobile, Databases, Data & AI, Developer Tools) with visual emphasis on technologies used in actual projects.
- **Featured Project Case Study (SpendWise):** Accurately attributed as a **Final-Year Team Project** with problem/solution breakdown, selected key deliverables, and a dedicated **"My Contributions"** subsection.
- **Additional Software Projects:**
  - **VoyaGo:** Hotel booking website built with PHP, MySQL, Bootstrap 5, and JavaScript.
  - **Logistics Inventory Platform:** Software platform with repository at [github.com/hashan-g/logistics-inventory-platform](https://github.com/hashan-g/logistics-inventory-platform).
- **Academic Timeline & Achievement:**
  - **BSc in Physical Science** — University of Ruhuna
  - **Bachelor of Information Technology (BIT)** — University of Colombo School of Computing (UCSC)
  - **CodeRally Hackathon — 2nd Place** (Team ByteBuilders - Intermediate Level).
- **Verifiable GitHub Showcase:** Distinguishes Personal Repositories from Team/Collaborative Repositories with real metrics and zero fake activity charts.
- **Transparent Direct Contact Channel:** Direct email composer, one-click email copy, LinkedIn, and CV download.
- **Fully Accessible & Responsive:** Mobile navigation drawer, semantic HTML5, keyboard navigation, and `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Vector SVGs
- **Typography:** Plus Jakarta Sans & JetBrains Mono (via Google Fonts)
- **Code Quality:** Oxlint / ESLint rules

---

## 📂 Project Structure

```text
hashan-portfolio/
├── public/
│   ├── favicon.svg          # Custom developer monogram favicon (HG)
│   ├── hashan-profile.jpg   # Real professional profile photograph
│   └── resume.pdf           # Curriculum Vitae file (official PDF)
├── src/
│   ├── assets/              # Static media assets
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.jsx # Pixel-perfect SVG brand icons (GitHub, LinkedIn, YouTube)
│   │   ├── About.jsx        # Dual-grounding narrative & 3 core highlights
│   │   ├── Achievements.jsx # CodeRally Hackathon 2nd Place showcase
│   │   ├── Contact.jsx      # Transparent contact cards & direct email composer
│   │   ├── Education.jsx    # Ruhuna & UCSC timeline cards
│   │   ├── FeaturedProject.jsx # SpendWise case study & My Contributions
│   │   ├── Footer.jsx       # Navigation, copyright, and back-to-top action
│   │   ├── GitHub.jsx       # Personal & Team GitHub repositories
│   │   ├── Hero.jsx         # Compact, laptop-friendly hero with profile photo
│   │   ├── Navbar.jsx       # Fixed glassmorphism navbar & mobile drawer
│   │   ├── Projects.jsx     # VoyaGo and Logistics Inventory Platform
│   │   └── Skills.jsx       # Compact 7-category technology chips
│   ├── data/
│   │   ├── achievements.js  # Hackathon & award details
│   │   ├── education.js     # University degrees & core competencies
│   │   ├── github.js        # Personal and team repositories configuration
│   │   ├── profile.js       # Personal info, contact details, target roles
│   │   ├── projects.js      # SpendWise, VoyaGo, & Logistics Platform data
│   │   └── skills.js        # 7 categorized skills & project experience tags
│   ├── App.jsx              # Main page orchestration
│   ├── index.css            # Tailwind directives, theme variables & animations
│   └── main.jsx             # React entry point
├── index.html               # Semantic HTML5, SEO metadata & OpenGraph tags
├── package.json             # NPM package scripts & dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Custom dark theme & color palette
├── vite.config.js           # Vite build configuration
└── README.md                # Project documentation
```

---

## 📥 Getting Started

### Prerequisites

Ensure you have Node.js (v18+ or v20+) installed on your machine.

- Node.js: `v18.0.0` or higher
- NPM: `9.0.0` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hashan-g/hashan-portfolio.git
   cd hashan-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Development Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles production-ready bundle into `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs oxlint static analysis to catch syntax & unused imports |

---

## 🚀 Deployment Guide

This portfolio compiles to a clean, fast static bundle in `dist/`. It can be hosted on any static hosting provider:

### Option A: Vercel (Recommended)
1. Import your GitHub repository (`Portfolio-web` or `hashan-portfolio`) on [Vercel](https://vercel.com).
2. Framework Preset will be automatically detected as **Vite**.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. (Optional) In **Settings > Environment Variables**, add:
   - Name: `VITE_FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/your_form_id`
6. Click **Deploy**.

### Option B: Netlify
1. Connect your GitHub repository on [Netlify](https://app.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. (Optional) In **Site configuration > Environment variables**, add `VITE_FORMSPREE_ENDPOINT`.
5. Deploy site.

### Option C: GitHub Pages
1. If hosting on a subpath (e.g., `https://hashan-g.github.io/hashan-portfolio/`), set `base` in `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/hashan-portfolio/', // or './' for relative paths
     plugins: [react()],
   });
   ```
2. Enable GitHub Pages in repository **Settings > Pages** using GitHub Actions or the `gh-pages` branch.

---

## 🔒 Security & Privacy

- No private API keys or personal credentials are committed to this repository.
- Environment variables (`.env`) and build artifacts (`dist/`, `node_modules/`) are strictly ignored via `.gitignore`.
- Repositories and contributions are transparently attributed between individual and team work.

---

## 👤 Author

**Hashan Ganegoda**
- **GitHub:** [@hashan-g](https://github.com/hashan-g)
- **LinkedIn:** [Hashan Ganegoda](https://www.linkedin.com/in/hashan-ganegoda/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
