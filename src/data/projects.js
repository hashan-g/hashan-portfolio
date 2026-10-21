export const featuredProject = {
  id: "spendwise",
  title: "SpendWise",
  subtitle: "AI-Powered Personal Finance Manager",
  tagline: "Automated transaction capture, real-time financial health scoring, and offline-first intelligence powered by Groq and LLaMA.",
  overview:
    "SpendWise is an AI-powered personal finance management application designed to help users track expenses, manage budgets, monitor savings goals, and understand their financial health.",
  problem:
    "Traditional personal finance tracking demands repetitive manual data entry after every purchase, causing user fatigue and incomplete records. Furthermore, static expense trackers fail to provide actionable financial health metrics, lack intelligent contextual advice, and frequently fail when internet connectivity is spotty.",
  solution:
    "SpendWise solves these challenges by automating transaction intake through SMS notification capture and OCR receipt extraction. Combined with an offline-first Flutter architecture utilizing Hive, it provides instant local responsiveness. The system connects to Node.js and Python microservices executing low-latency Groq and LLaMA models to compute a Financial Health Score (0-100) and power an interactive AI financial assistant.",
  technologies: [
    "Flutter",
    "Firebase",
    "Node.js",
    "Python",
    "Groq",
    "LLaMA",
    "Cloud Firestore",
    "Hive",
    "React",
  ],
  keyFeatures: [
    {
      title: "Automatic transaction capture through SMS",
      desc: "Automatically extracts transaction details from bank SMS notifications without requiring manual user input.",
      icon: "MessageSquareText",
    },
    {
      title: "OCR-based transaction extraction",
      desc: "Scans receipts and payment slips using optical character recognition to extract merchants, totals, and dates.",
      icon: "ScanLine",
    },
    {
      title: "Budget tracking",
      desc: "Granular budget allocation across categories with real-time spending pace warnings.",
      icon: "PieChart",
    },
    {
      title: "Savings goals",
      desc: "Targeted savings milestone monitoring with automated progress calculations.",
      icon: "Target",
    },
    {
      title: "Financial Health Score (0–100)",
      desc: "Algorithmic evaluation scoring overall financial discipline, savings ratio, and spending trends.",
      icon: "Activity",
    },
    {
      title: "AI Financial Assistant",
      desc: "Interactive conversational assistant answering finance queries and offering spending guidance.",
      icon: "Bot",
    },
    {
      title: "AI/LLM integration using Groq and LLaMA",
      desc: "High-throughput, low-latency reasoning leveraging Groq hardware acceleration and open LLaMA weights.",
      icon: "Cpu",
    },
    {
      title: "Admin dashboard",
      desc: "Dedicated administrative portal built with React for platform oversight and user management.",
      icon: "LayoutDashboard",
    },
    {
      title: "TOTP-based two-factor authentication",
      desc: "Time-based One-Time Password verification for enhanced account protection.",
      icon: "ShieldCheck",
    },
    {
      title: "Biometric authentication",
      desc: "Fingerprint and facial recognition login support on compatible mobile devices.",
      icon: "Fingerprint",
    },
    {
      title: "Offline caching using Hive",
      desc: "Fast, lightweight local key-value database ensuring seamless app performance without network access.",
      icon: "Database",
    },
    {
      title: "Firebase/Firestore backend services",
      desc: "Cloud Firestore collections and Firebase infrastructure for synchronized user data and authentication.",
      icon: "Cloud",
    },
  ],
  architectureHighlights: [
    {
      title: "Client Layer (Mobile & Web)",
      tech: "Flutter (Dart) & React.js",
      desc: "Cross-platform mobile client built with Flutter with native Android SMS/biometric access, complemented by a dedicated React administrative dashboard.",
    },
    {
      title: "Local Persistence Layer",
      tech: "Hive Local DB",
      desc: "Ultra-fast NoSQL key-value storage enabling zero-latency reads/writes and reliable offline capabilities before cloud synchronization.",
    },
    {
      title: "Backend & Orchestration",
      tech: "Node.js & Express.js",
      desc: "REST microservices managing authenticated transactions, administrative operations, and security coordination.",
    },
    {
      title: "AI & Intelligence Engine",
      tech: "Python, Groq & LLaMA",
      desc: "Specialized service orchestrating prompt pipelines and high-speed LLM inference via Groq to generate Financial Health Scores and conversational guidance.",
    },
    {
      title: "Cloud & Security Services",
      tech: "Firebase Auth, Cloud Firestore & TOTP",
      desc: "Secure multi-factor authentication, biometric bridging, and scalable document-based real-time database syncing.",
    },
  ],
  links: {
    frontend: "https://github.com/Jayo013/spendwise-app-front-end.git",
    admin: "https://github.com/Jayo013/spendwise-app-admin.git",
    backend: "https://github.com/Jayo013/spendwise-app-backend.git",
    youtube: "https://youtube.com/@spendwise-k1x",
  },
};

export const secondaryProjects = [
  {
    id: "voyago",
    title: "VoyaGo — Hotel Booking Website",
    category: "Full-Stack Web Development",
    technologies: ["PHP", "MySQL", "Bootstrap 5", "JavaScript"],
    description: "A hotel booking website developed as a web development project.",
    details:
      "VoyaGo provides a structured web platform for browsing accommodations, viewing room availability, and completing reservation requests. It implements relational database management with MySQL for hotel inventory, customer records, and booking states, styled with a clean Bootstrap 5 user interface.",
    features: [
      "Hotel & room availability browsing",
      "Reservation and booking management",
      "Relational database modeling with MySQL",
      "Dynamic PHP server-side handling and sessions",
      "Responsive UI built with Bootstrap 5 and JavaScript",
    ],
    github: null, // Private/academic project; clean badge displayed
    status: "Completed Project",
  },
  {
    id: "logistics-inventory",
    title: "Logistics Inventory Platform",
    category: "Enterprise Software Platform",
    technologies: ["Software Architecture", "Inventory Systems", "Logistics Workflows", "Data Management"],
    description: "A software project focused on logistics and inventory management.",
    details:
      "Designed to address supply chain asset tracking, inventory stock reconciliation, and warehouse dispatch workflows. Architected with structured data models to improve inventory visibility and reduce tracking discrepancies.",
    features: [
      "Inventory tracking and stock balance management",
      "Logistics dispatch and movement records",
      "Structured data schemas for inventory auditing",
      "Operational workflow management",
    ],
    github: null,
    status: "Project in Progress / Documentation Available",
    isPlaceholder: true,
  },
];
