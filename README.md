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
- **Featured Project Deep-Dive (SpendWise):** Detailed case study card showcasing SpendWise (AI-powered personal finance manager) with architecture layers, interactive UI simulation, and repositories.
- **Transparent Skill Categorization:** Logical grouping (Programming, Frontend, Backend, Mobile, Databases, AI/Data, Tools) with honest distinction between technologies used in production/real projects vs. foundational familiarity.
- **Academic Timeline:** Clean card-based timeline highlighting dual qualifications:
  - **BSc in Physical Science** — University of Ruhuna (Mathematical & Analytical Modeling)
  - **Bachelor of Information Technology (BIT)** — University of Colombo School of Computing (UCSC)
- **Competitive Hackathon Achievement:** Professional showcase of **2nd Place at CodeRally Hackathon** (Team ByteBuilders - Intermediate Level).
- **Verifiable GitHub Integration:** Direct repository links and dynamic public metrics retrieval without fabricated contribution data.
- **Direct Contact Channel:** Functional contact modal with client-side validation, one-click email copy, and direct `mailto:` fallback.
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
│   └── resume.pdf           # Curriculum Vitae file (replace with your official PDF)
├── src/
│   ├── assets/              # Static media assets
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.jsx # Pixel-perfect SVG brand icons (GitHub, LinkedIn, YouTube)
│   │   ├── About.jsx        # Dual-grounding narrative & 4 core pillars
│   │   ├── Achievements.jsx # CodeRally Hackathon 2nd Place showcase
│   │   ├── Contact.jsx      # Contact cards, one-click copy, and message form
│   │   ├── Education.jsx    # Ruhuna & UCSC timeline cards
│   │   ├── FeaturedProject.jsx # SpendWise comprehensive case study card
│   │   ├── Footer.jsx       # Navigation, copyright, and back-to-top action
│   │   ├── GitHub.jsx       # GitHub repositories & profile metrics
│   │   ├── Hero.jsx         # Status beacon, positioning, and action buttons
│   │   ├── Navbar.jsx       # Fixed glassmorphism navbar & mobile drawer
│   │   ├── Projects.jsx     # VoyaGo and Logistics Inventory Platform
│   │   └── Skills.jsx       # Categorized skills grid with transparency badges
│   ├── data/
│   │   ├── achievements.js  # Hackathon & award details
│   │   ├── education.js     # University degrees & core competencies
│   │   ├── github.js        # Repositories & profile configuration
│   │   ├── profile.js       # Personal info, contact details, target roles
│   │   ├── projects.js      # SpendWise, VoyaGo, & Logistics Platform data
│   │   └── skills.js        # Categorized skills & project experience tags
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
| `npm run lint` | Runs oxlint / ESLint static analysis to catch syntax & unused imports |

---

## 📄 Updating Your Curriculum Vitae (CV)

The portfolio's **"Download CV"** buttons are configured to download `/resume.pdf`.

To update your resume:
1. Export your finalized resume as a PDF file named `resume.pdf`.
2. Place it into the `public/` directory:
   ```text
   public/resume.pdf
   ```
3. When deployed, Vite automatically serves this file at `https://your-domain/resume.pdf`.

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages

1. In `vite.config.js`, set `base`:
   ```javascript
   export default defineConfig({
     base: '/hashan-portfolio/', // or '/' for custom domain / user page
     plugins: [react()],
   })
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy using GitHub Actions or `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```
   Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
   Run:
   ```bash
   npm run deploy
   ```

### Deploy to Vercel / Netlify

1. Push your repository to GitHub (`https://github.com/hashan-g/hashan-portfolio`).
2. Log in to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
3. Import the repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 🔒 Security & Privacy

- No private API keys or personal credentials are committed to this repository.
- Environment variables (`.env`) and build artifacts (`dist/`, `node_modules/`) are strictly ignored via `.gitignore`.

---

## 👤 Author

**Hashan Ganegoda**
- **GitHub:** [@hashan-g](https://github.com/hashan-g)
- **LinkedIn:** [Hashan Ganegoda](https://www.linkedin.com/in/hashan-ganegoda/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
