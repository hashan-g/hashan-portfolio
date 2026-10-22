export const featuredProject = {
  id: "spendwise",
  title: "SpendWise",
  subtitle: "AI-Powered Personal Finance Manager",
  projectType: "Final-Year Team Project",
  attribution: "Contributed to the development of SpendWise, an AI-powered personal finance management application.",
  overview:
    "SpendWise is a collaborative final-year group project engineered to help users track expenses, manage budgets, monitor savings goals, and understand their financial health through automated ingestion and AI assistance.",
  problem:
    "Manual personal finance tracking suffers from high data-entry friction, delayed recording, and an absence of actionable financial health metrics. Users frequently abandon expense trackers because typing every receipt is tedious, while static applications fail to provide intelligent context or work reliably without an active internet connection.",
  solution:
    "The team addressed these challenges by automating transaction capture via SMS parsing and OCR receipt scanning, paired with an offline-first Flutter mobile client using Hive local storage. Cloud services in Node.js and Python interface with Groq and open LLaMA models to deliver fast financial insights, an algorithmic Financial Health Score, and an AI conversational assistant.",
  technologies: [
    "Flutter",
    "Firebase",
    "Node.js",
    "Python",
    "React",
    "Groq",
    "LLaMA",
    "Cloud Firestore",
    "Hive",
  ],
  // Core selected features highlighted prominently
  keyFeatures: [
    {
      title: "Automated SMS & OCR Capture",
      desc: "Captures transactions automatically from bank SMS notifications and extracts receipt data using optical character recognition.",
      icon: "ScanLine",
      isPrimary: true,
    },
    {
      title: "AI Financial Assistant & Health Score",
      desc: "Evaluates financial habits on a 0–100 score and delivers conversational guidance powered by Groq-accelerated LLaMA models.",
      icon: "Bot",
      isPrimary: true,
    },
    {
      title: "Budget & Savings Goal Tracking",
      desc: "Category-specific budget limits with real-time pace indicators and targeted milestone savings calculations.",
      icon: "PieChart",
      isPrimary: true,
    },
    {
      title: "Offline-First Caching with Hive",
      desc: "Fast local key-value persistence allowing uninterrupted expense logging when offline, with automatic Cloud Firestore sync.",
      icon: "Database",
      isPrimary: true,
    },
    {
      title: "Biometric & Two-Factor Authentication",
      desc: "Enhanced security incorporating mobile biometric authentication (fingerprint/face) and TOTP-based 2FA.",
      icon: "ShieldCheck",
      isPrimary: true,
    },
    {
      title: "Administrative Dashboard",
      desc: "Dedicated administrative portal built with React for platform monitoring, aggregate insights, and user management.",
      icon: "LayoutDashboard",
      isPrimary: true,
    },
  ],
  // Dedicated section specifically identifying Hashan's contributions
  myContributions: [
    {
      area: "AI/LLM Integration & Financial Assistant",
      details:
        "Contributed to integrating fast LLM inference pipelines utilizing Groq hardware acceleration and open LLaMA models to power the conversational financial assistant and context-aware spending feedback.",
    },
    {
      area: "Backend Microservices & API Endpoints",
      details:
        "Contributed to developing backend RESTful services using Node.js and Python, handling secure transaction routing, data transformations, and synchronization with Cloud Firestore.",
    },
    {
      area: "Data Persistence & Offline Caching",
      details:
        "Participated in implementing client-side local caching structures using Hive in Flutter, ensuring zero-latency reads/writes and offline resilience before network syncing.",
    },
    {
      area: "Security & Authentication Workflows",
      details:
        "Worked on authentication flows combining Firebase Authentication services, TOTP two-factor security, and device-level biometric integration.",
    },
  ],
  // Clear attribution note for transparency
  attributionNote:
    "Note: SpendWise was developed collaboratively as a university final-year team project. The features above represent the team's combined software deliverables, with my primary technical focus centered on backend API services, AI/LLM integration, and data workflows.",
  repositories: [
    {
      name: "Frontend (Mobile App)",
      tech: "Flutter / Dart / Hive",
      url: "https://github.com/Jayo013/spendwise-app-front-end",
      type: "Team Repository (Hosted by @Jayo013)",
    },
    {
      name: "Backend Microservices",
      tech: "Node.js / Express / Python / Groq",
      url: "https://github.com/Jayo013/spendwise-app-backend",
      type: "Team Repository (Hosted by @Jayo013)",
    },
    {
      name: "Admin Dashboard",
      tech: "React / Vite / Tailwind",
      url: "https://github.com/Jayo013/spendwise-app-admin",
      type: "Team Repository (Hosted by @Jayo013)",
    },
  ],
  channelUrl: "https://youtube.com/@spendwise-k1x",
};

export const secondaryProjects = [
  {
    id: "voyago",
    title: "VoyaGo — Hotel Booking Website",
    category: "Full-Stack Web Development",
    technologies: ["PHP", "MySQL", "Bootstrap 5", "JavaScript"],
    role: "Full-Stack Developer (Web Project)",
    description:
      "A dynamic hotel booking web platform developed as a comprehensive web project. Engineered with PHP and MySQL to manage accommodation listings, room availability, customer reservations, and session states.",
    highlights: [
      "Relational database design in MySQL for room inventories, reservations, and customer records",
      "Dynamic server-side rendering, session authentication, and booking endpoints in PHP",
      "Responsive user interface styled with Bootstrap 5 and client-side form validation in JavaScript",
    ],
    github: null,
    githubNote: "Academic project codebase",
    status: "Completed Project",
  },
  {
    id: "logistics-inventory",
    title: "Logistics Inventory Platform",
    category: "Software Platform",
    technologies: ["Software Architecture", "Inventory Systems", "Logistics Workflows", "Data Management"],
    role: "Developer",
    description:
      "A software platform focused on logistics coordination, warehouse stock tracking, and inventory movement auditing. Designed to streamline supply chain records and reduce balance discrepancies.",
    highlights: [
      "Structured inventory data schemas for stock balancing and asset auditing",
      "Logistics dispatch and movement tracking workflows",
      "Clean software architecture designed for data consistency and reliable records",
    ],
    github: "https://github.com/hashan-g/logistics-inventory-platform",
    githubNote: "Personal Repository",
    status: "In Development",
  },
];
