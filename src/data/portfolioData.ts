export type Language = 'en' | 'fr';

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  badge: string;
  badgeColor: 'violet' | 'pink' | 'yellow' | 'blue';
  description: string[];
  technologies: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: 'violet' | 'pink' | 'yellow' | 'blue';
  description: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  icon: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  color: 'violet' | 'pink' | 'yellow' | 'blue' | 'cream';
  skills: { name: string; level?: string }[];
}

export interface ContentData {
  ticker: string[];
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    resume: string;
    contactCta: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    name: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    description: string;
    viewWork: string;
    getInTouch: string;
    downloadCV: string;
    cvFile: string;
    cvFileName: string;
    badgeAvailable: string;
    metaPills: string[];
    floatingStickers: { name: string; color: string; rotation: number; delay: number }[];
  };
  stats: {
    value: string;
    label: string;
    sublabel: string;
    color: string;
  }[];
  about: {
    sectionTitle: string;
    badge: string;
    heading: string;
    subheading: string;
    credentialsSubtitle: string;
    highlights: { label: string; icon: string; color: string }[];
    p1: string;
    p2: string;
    philosophyTitle: string;
    philosophies: {
      title: string;
      desc: string;
      emoji: string;
      bgColor: string;
    }[];
  };
  experience: {
    sectionTitle: string;
    badge: string;
    heading: string;
    subheading: string;
    items: ExperienceItem[];
  };
  projects: {
    sectionTitle: string;
    badge: string;
    heading: string;
    subheading: string;
    inspectCode: string;
    items: ProjectItem[];
  };
  skills: {
    sectionTitle: string;
    badge: string;
    heading: string;
    subheading: string;
    filterTabs: { id: string; label: string }[];
    categories: SkillCategory[];
  };
  contact: {
    sectionTitle: string;
    badge: string;
    heading: string;
    subheading: string;
    directInfoTitle: string;
    downloadResumeTitle: string;
    formTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    nameField: string;
    namePlaceholder: string;
    emailField: string;
    emailPlaceholder: string;
    messageField: string;
    messagePlaceholder: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    errorMessage: string;
    errorTitle: string;
    socialTitle: string;
  };
  footer: {
    tagline: string;
    madeWith: string;
    rights: string;
    backToTop: string;
  };
}

export const portfolioContent: Record<Language, ContentData> = {
  en: {
    ticker: [
      "SOFTWARE ENGINEER",
      "AI & FULL-STACK SPECIALIST",
      "CASABLANCA, MOROCCO",
      "BAC+5 EMSI GRADUATE",
      "REAL-TIME VOICE AGENTS",
      "EVENT-DRIVEN ARCHITECTURE",
      "OPEN TO NEW OPPORTUNITIES",
      "LET'S BUILD SOMETHING IMPACTFUL"
    ],
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      resume: "Resume",
      contactCta: "Say Hello ♡",
    },
    hero: {
      eyebrow: "SOFTWARE ENGINEER · AI & FULL-STACK",
      greeting: "Hello, world! I'm",
      name: "Fatine Belkhammar",
      headlinePart1: "Engineering Intelligent Systems &",
      headlineHighlight: "AI-Powered",
      headlinePart2: "Full-Stack Experiences.",
      description: "Software engineer passionate about artificial intelligence and modern web architectures. Hands-on experience building real-time AI voice agents, orchestrating decoupled event-driven services, and automating complex workflows with scalable backend foundations.",
      viewWork: "Explore My Work ✦",
      getInTouch: "Get In Touch ♡",
      downloadCV: "Download CV (EN)",
      cvFile: "/CV_Fatine_Belkhammar_EN.pdf",
      cvFileName: "Fatine_Belkhammar_CV_EN.pdf",
      badgeAvailable: "Open to exciting opportunities",
      metaPills: [
        "Casablanca, Morocco 🇲🇦",
        "Bac+5 Engineering Degree",
        "EMSI Graduate"
      ],
      floatingStickers: [
        { name: "Python", color: "#FFEAA0", rotation: -6, delay: 0 },
        { name: "LiveKit & AI", color: "#C3ACFF", rotation: 5, delay: 0.6 },
        { name: "React & Next.js", color: "#9FD7EF", rotation: -4, delay: 1.2 },
        { name: "Docker", color: "#FFD6DF", rotation: 7, delay: 1.8 },
        { name: "FastAPI", color: "#FFEAA0", rotation: -5, delay: 2.4 },
        { name: "PostgreSQL", color: "#C3ACFF", rotation: 6, delay: 3.0 },
      ]
    },
    stats: [
      {
        value: "Bac+5",
        label: "Engineering Degree",
        sublabel: "EMSI Casablanca Graduate",
        color: "#C3ACFF"
      },
      {
        value: "3",
        label: "Professional Internships",
        sublabel: "Production-grade delivery",
        color: "#FFD6DF"
      },
      {
        value: "6+",
        label: "Core Languages",
        sublabel: "Python, Java, JS, C++, C#, PHP",
        color: "#FFEAA0"
      },
      {
        value: "100%",
        label: "Commitment to Impact",
        sublabel: "From architecture to shipment",
        color: "#9FD7EF"
      }
    ],
    about: {
      sectionTitle: "About Me",
      badge: "THE JOURNEY",
      heading: "Crafting software where intelligence meets real-world utility.",
      subheading: "A passionate engineer turning complex business requirements into elegant, high-performance systems.",
      credentialsSubtitle: "EMSI Casablanca · Software & AI Engineering",
      highlights: [
        { label: "State Engineering Degree (Bac+5)", icon: "Award", color: "#C3ACFF" },
        { label: "Real-Time AI Voice Streaming", icon: "Terminal", color: "#FFD6DF" },
        { label: "Event-Driven & Microservices", icon: "BookOpen", color: "#FFEAA0" },
        { label: "Bilingual French & English", icon: "Sparkles", color: "#9FD7EF" }
      ],
      p1: "I'm Fatine Belkhammar, a software engineer with a strong focus on artificial intelligence, event-driven pipelines, and full-stack web applications. Recently graduated from the engineering program at EMSI Casablanca, I love taking ideas from concept to a production-ready, rock-solid product.",
      p2: "My journey spans developing cutting-edge AI voice agents powered by Gemini Live API & LiveKit, deploying enterprise-grade Oracle GoldenGate data synchronization engines, and architecting modern web platforms. I thrive in environments that challenge me to solve concrete problems with clean code and resilient architectures.",
      philosophyTitle: "My Core Engineering Values",
      philosophies: [
        {
          title: "Intelligent Autonomy",
          desc: "Harnessing real-time AI and LLMs to create proactive, context-aware user interfaces.",
          emoji: "🤖",
          bgColor: "#C3ACFF"
        },
        {
          title: "Decoupled & Resilient",
          desc: "Designing event-driven microservices that scale smoothly under load with Redis & Docker.",
          emoji: "⚡",
          bgColor: "#FFEAA0"
        },
        {
          title: "Clean End-to-End Delivery",
          desc: "From database schema design and API performance down to polished, responsive UI.",
          emoji: "🎯",
          bgColor: "#FFD6DF"
        }
      ]
    },
    experience: {
      sectionTitle: "Professional Experience",
      badge: "CAREER TIMELINE",
      heading: "Practical engineering experience across industry-leading teams.",
      subheading: "Key roles where I designed, engineered, and delivered scalable solutions.",
      items: [
        {
          id: "ennova",
          title: "AI Voice Agent Development",
          company: "Ennova Group",
          location: "Casablanca, Morocco",
          duration: "Feb. 2026 – Jun 2026",
          badge: "AI & Real-Time Media",
          badgeColor: "violet",
          icon: "Mic",
          description: [
            "Designed an event-driven architecture of 3 decoupled Python workers (Voice, CRM, Monitoring) communicating asynchronously via Redis Pub/Sub under Docker.",
            "Integrated LiveKit SIP/WebRTC media streams with Gemini Live API for real-time bidirectional voice interactions; resolved SDK incompatibilities through dynamic CRM context injection at session initialization.",
            "Built a post-call processing pipeline using GPT-4o-mini for automated lead extraction and CRM contact synchronization via custom GraphQL mutations.",
            "Developed a FastAPI backend and a live-polling React dashboard exposing real-time QA scoring metrics across a 5-table PostgreSQL schema.",
            "Administered 2 VoIP platforms (3CX and Yeastar): configured SIP trunks, agent extensions, and call routing rules."
          ],
          technologies: [
            "Python", "LiveKit", "Redis", "FastAPI", "React", "PostgreSQL",
            "GPT-4o-mini", "Gemini Live API", "Docker", "GraphQL", "3CX", "Yeastar"
          ]
        },
        {
          id: "expertise-data",
          title: "Oracle GoldenGate Data Integration",
          company: "Expertise Data",
          location: "Casablanca, Morocco",
          duration: "Jul. 2025 – Sep. 2025",
          badge: "Enterprise Data Replication",
          badgeColor: "yellow",
          icon: "Database",
          description: [
            "Deployed a full Oracle environment (Linux 8, Oracle DB 19c, GoldenGate microservices) for high-availability real-time data replication.",
            "Configured and verified the 3 GoldenGate replication processes: Extract, Pump, and Replicat.",
            "Performed comprehensive real-time data propagation and synchronization tests with zero latency drift.",
            "Monitored and troubleshot complex data integration workflows and network failover scenarios."
          ],
          technologies: [
            "Oracle Database 19c", "GoldenGate Microservices", "SQLPlus", "Oracle Linux 8", "Enterprise Replication"
          ]
        },
        {
          id: "web-rasma",
          title: "Customer Support CRM Platform",
          company: "WebRasma",
          location: "Casablanca, Morocco",
          duration: "Jul. 2024 – Sep. 2024",
          badge: "Full-Stack Web & Realtime",
          badgeColor: "pink",
          icon: "Layers",
          description: [
            "Built a complete full-stack CRM application for centralizing, tracking, and resolving customer support tickets and client interactions.",
            "Reduced client request handling turnaround time significantly through data flow optimization and intuitive UI redesign.",
            "Designed and integrated role-based authentication and authorization mechanisms with granular permissions.",
            "Created interactive real-time dashboards for management data visualization using WebSockets."
          ],
          technologies: [
            "Django", "Python", "WebSockets", "PostgreSQL", "Full-Stack CRM", "Tailwind CSS"
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Academic & Engineering Projects",
      badge: "FEATURED BUILDS",
      heading: "Production-ready architectures built to solve real challenges.",
      subheading: "Deep dives into microservices, predictive algorithms, and full-stack platforms.",
      inspectCode: "Inspect Code",
      items: [
        {
          id: "smartmove",
          title: "SmartMove – Transport Delay Prediction",
          subtitle: "Real-Time Predictive Engine & Microservices",
          badge: "AI & Distributed Systems",
          badgeColor: "blue",
          icon: "Activity",
          highlights: [
            "3 data sources aggregated in real time",
            "Spring / Python microservices with API Gateway",
            "Predictive ML delay models & live dashboard"
          ],
          description: [
            "Built a real-time delay prediction engine aggregating 3 continuous live data streams: vehicular traffic, meteorological forecasts, and road incidents.",
            "Architected a scalable microservices infrastructure featuring an API Gateway and dynamic service discovery for seamless inter-service resilience.",
            "Engineered predictive machine learning models to forecast public transport arrival variance based on historical trends and live telemetry.",
            "Crafted a high-fidelity React monitoring dashboard visualizing real-time fleet statuses and route performance."
          ],
          technologies: ["Python", "Microservices", "API Gateway", "React", "REST API", "Machine Learning", "Docker"]
        },
        {
          id: "jobmatch",
          title: "JobMatch – Intelligent Recruitment Platform",
          subtitle: "Smart Skill-Matching & Recruiter Ecosystem",
          badge: "Full-Stack Web App",
          badgeColor: "violet",
          icon: "Code",
          highlights: [
            "Skills-based algorithmic candidate matching",
            "AI Assistant chatbot for applicant guidance",
            "Full recruiter candidate tracking workflow"
          ],
          description: [
            "Developed an end-to-end recruitment platform connecting hiring managers and applicants through an intelligent, skills-based matching algorithm.",
            "Engineered comprehensive job posting, applicant lifecycle tracking, and collaborative candidate evaluation review pipelines.",
            "Integrated a JobMatch conversational assistant chatbot that reduced candidate drop-off and accelerated job application completion.",
            "Designed a rich recruiter dashboard for batch applicant filtering, resume inspection, and interview management."
          ],
          technologies: ["Node.js", "React", "Express.js", "SQL Server", "JavaScript", "REST API", "Chatbot UI"]
        }
      ]
    },
    skills: {
      sectionTitle: "Technical Skills Matrix",
      badge: "TECH STACK",
      heading: "A versatile toolkit built for modern engineering demands.",
      subheading: "From low-level algorithms to cloud deployment and generative AI integration.",
      filterTabs: [
        { id: "all", label: "All Disciplines" },
        { id: "ai", label: "AI & VoIP" },
        { id: "web", label: "Web & Frameworks" },
        { id: "devops", label: "DevOps & Tools" },
        { id: "data", label: "Databases" }
      ],
      categories: [
        {
          title: "Programming Languages",
          color: "violet",
          skills: [
            { name: "Python", level: "Advanced" },
            { name: "Java", level: "Advanced" },
            { name: "JavaScript / TypeScript", level: "Advanced" },
            { name: "C++", level: "Intermediate" },
            { name: "C#", level: "Intermediate" },
            { name: "PHP", level: "Proficient" }
          ]
        },
        {
          title: "Web & Frameworks",
          color: "pink",
          skills: [
            { name: "React", level: "Advanced" },
            { name: "Next.js", level: "Advanced" },
            { name: "FastAPI", level: "Advanced" },
            { name: "Django", level: "Advanced" },
            { name: "Spring Boot", level: "Proficient" },
            { name: "Node.js & Express", level: "Advanced" }
          ]
        },
        {
          title: "VoIP & Artificial Intelligence",
          color: "yellow",
          skills: [
            { name: "LiveKit SIP/WebRTC", level: "Expertise" },
            { name: "Gemini Live API", level: "Production" },
            { name: "GPT-4o-mini", level: "Production" },
            { name: "Redis Pub/Sub", level: "Advanced" },
            { name: "3CX VoIP", level: "Config" },
            { name: "Yeastar PBX", level: "Admin" }
          ]
        },
        {
          title: "DevOps & Cloud Tools",
          color: "blue",
          skills: [
            { name: "Docker & Compose", level: "Advanced" },
            { name: "Git & GitHub", level: "Advanced" },
            { name: "Grafana & Monitoring", level: "Proficient" },
            { name: "Jira & Agile", level: "Advanced" },
            { name: "n8n Automation", level: "Proficient" },
            { name: "WordPress & Odoo", level: "Proficient" }
          ]
        },
        {
          title: "Databases & Storage",
          color: "cream",
          skills: [
            { name: "PostgreSQL", level: "Advanced" },
            { name: "MySQL", level: "Advanced" },
            { name: "Oracle 19c & GoldenGate", level: "Enterprise" },
            { name: "SQL Server", level: "Proficient" }
          ]
        },
        {
          title: "Architecture & Design",
          color: "pink",
          skills: [
            { name: "Microservices", level: "Advanced" },
            { name: "REST API Design", level: "Advanced" },
            { name: "WebSockets", level: "Realtime" },
            { name: "GraphQL", level: "Integration" },
            { name: "Figma & UI Prototyping", level: "Proficient" },
            { name: "StarUML & Draw.io", level: "Advanced" }
          ]
        }
      ]
    },
    contact: {
      sectionTitle: "Get In Touch",
      badge: "LET'S TALK",
      heading: "Ready to build something extraordinary together?",
      subheading: "I'm open to full-time engineering roles, high-impact collaborations, and forward-thinking tech projects.",
      directInfoTitle: "Direct Contact Channels",
      downloadResumeTitle: "Download Official Resume",
      formTitle: "Send Me A Message",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      locationLabel: "Location",
      nameField: "Your Name",
      namePlaceholder: "Fatine's Next Collaborator",
      emailField: "Your Email",
      emailPlaceholder: "collaborator@company.com",
      messageField: "Your Message",
      messagePlaceholder: "Hi Fatine! We're building something exciting and would love to discuss...",
      submitBtn: "Send Message ✦",
      submitting: "Sending your message...",
      successTitle: "Message Delivered! ♡",
      successMessage: "Thank you for reaching out! I've received your note and will get back to you promptly.",
      errorMessage: "Oops! Something went wrong. Please try again in a moment.",
      errorTitle: "Something went wrong",
      socialTitle: "Find Me Across The Web"
    },
    footer: {
      tagline: "Software Engineer · AI & Full-Stack Development",
      madeWith: "Made with passion & puffy love in Casablanca ♡",
      rights: "All rights reserved.",
      backToTop: "Back to top ↑"
    }
  },
  fr: {
    ticker: [
      "INGÉNIEURE LOGICIEL",
      "SPÉCIALISTE IA & FULL-STACK",
      "CASABLANCA, MAROC",
      "DIPLÔMÉE BAC+5 EMSI",
      "AGENTS VOCAUX TEMPS RÉEL",
      "ARCHITECTURE ÉVÉNEMENTIELLE",
      "OUVERTE AUX OPPORTUNITÉS",
      "CRÉONS DES PROJETS À FORT IMPACT"
    ],
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      resume: "Mon CV",
      contactCta: "Me Contacter ♡",
    },
    hero: {
      eyebrow: "INGÉNIEURE LOGICIEL · IA & FULL-STACK",
      greeting: "Bonjour ! Je suis",
      name: "Fatine Belkhammar",
      headlinePart1: "Conception de Systèmes Intelligents &",
      headlineHighlight: "Propulsés par l'IA",
      headlinePart2: "Solutions Web Full-Stack.",
      description: "Ingénieure logiciel passionnée par l'intelligence artificielle et les architectures web évolutives. Expérience concrète dans le développement d'agents vocaux IA en temps réel, l'orchestration de microservices asynchrones sous Docker et l'automatisation de workflows complexes.",
      viewWork: "Découvrir mes projets ✦",
      getInTouch: "Me Contacter ♡",
      downloadCV: "Télécharger mon CV (FR)",
      cvFile: "/CV_Fatine_Belkhammar_FR.pdf",
      cvFileName: "Fatine_Belkhammar_CV_FR.pdf",
      badgeAvailable: "À l'écoute de nouvelles opportunités",
      metaPills: [
        "Casablanca, Maroc 🇲🇦",
        "Bac+5 Diplôme d'Ingénieur",
        "Diplômée EMSI"
      ],
      floatingStickers: [
        { name: "Python", color: "#FFEAA0", rotation: -6, delay: 0 },
        { name: "LiveKit & IA", color: "#C3ACFF", rotation: 5, delay: 0.6 },
        { name: "React & Next.js", color: "#9FD7EF", rotation: -4, delay: 1.2 },
        { name: "Docker", color: "#FFD6DF", rotation: 7, delay: 1.8 },
        { name: "FastAPI", color: "#FFEAA0", rotation: -5, delay: 2.4 },
        { name: "PostgreSQL", color: "#C3ACFF", rotation: 6, delay: 3.0 },
      ]
    },
    stats: [
      {
        value: "Bac+5",
        label: "Diplôme d'Ingénieur",
        sublabel: "Diplômée EMSI Casablanca",
        color: "#C3ACFF"
      },
      {
        value: "3",
        label: "Stages Professionnels",
        sublabel: "Livraison en production",
        color: "#FFD6DF"
      },
      {
        value: "6+",
        label: "Langages Maîtrisés",
        sublabel: "Python, Java, JS, C++, C#, PHP",
        color: "#FFEAA0"
      },
      {
        value: "100%",
        label: "Engagement & Rigueur",
        sublabel: "De l'architecture au déploiement",
        color: "#9FD7EF"
      }
    ],
    about: {
      sectionTitle: "À Propos",
      badge: "MON PARCOURS",
      heading: "Créer des logiciels où l'intelligence rencontre des usages concrets.",
      subheading: "Une ingénieure passionnée qui transforme des défis complexes en produits stables et performants.",
      credentialsSubtitle: "EMSI Casablanca · Ingénierie Logicielle & IA",
      highlights: [
        { label: "Diplôme d'Ingénieur d'État (Bac+5)", icon: "Award", color: "#C3ACFF" },
        { label: "Streaming Vocal IA Temps Réel", icon: "Terminal", color: "#FFD6DF" },
        { label: "Architectures Événementielles & Microservices", icon: "BookOpen", color: "#FFEAA0" },
        { label: "Bilingue Français & Anglais", icon: "Sparkles", color: "#9FD7EF" }
      ],
      p1: "Je suis Fatine Belkhammar, ingénieure logiciel passionnée par l'intelligence artificielle, les architectures orientées événements et le développement web full-stack. Récemment diplômée du cycle d'ingénieur à l'EMSI Casablanca, j'aime piloter des projets de la première idée jusqu'à un produit robuste en production.",
      p2: "Mon parcours m'a amenée à concevoir des agents vocaux IA de pointe avec LiveKit et Gemini Live API, à déployer des plateformes de réplication de données haute disponibilité avec Oracle GoldenGate et à concevoir des applications web interactives. Je m'épanouis dans les défis d'ingénierie qui demandent rigueur technique et créativité.",
      philosophyTitle: "Mes Piliers d'Ingénierie",
      philosophies: [
        {
          title: "Intelligence & Automatisation",
          desc: "Tirer parti des LLMs et du temps réel pour proposer des expériences réactives et contextuelles.",
          emoji: "🤖",
          bgColor: "#C3ACFF"
        },
        {
          title: "Systèmes Événementiels",
          desc: "Concevoir des architectures découplées, hautement disponibles et scalables avec Redis et Docker.",
          emoji: "⚡",
          bgColor: "#FFEAA0"
        },
        {
          title: "Finition & Excellence",
          desc: "Un soin méticuleux apporté à chaque couche, de la base de données jusqu'à l'expérience utilisateur.",
          emoji: "🎯",
          bgColor: "#FFD6DF"
        }
      ]
    },
    experience: {
      sectionTitle: "Expérience Professionnelle",
      badge: "PARCOURS PROFESSIONNEL",
      heading: "Des réalisations concrètes au sein d'équipes exigeantes.",
      subheading: "Découvrez mes missions d'ingénierie et leurs impacts mesurables.",
      items: [
        {
          id: "ennova",
          title: "Développement d'un Agent Vocal Intelligent",
          company: "Ennova Group",
          location: "Casablanca, Maroc",
          duration: "Fév. 2026 – Juin 2026",
          badge: "IA Vocale & Temps Réel",
          badgeColor: "violet",
          icon: "Mic",
          description: [
            "Conception d'une architecture événementielle composée de 3 workers Python découplés (Vocal, CRM, Monitoring) communiquant de manière asynchrone via Redis Pub/Sub sous Docker.",
            "Intégration des flux médias LiveKit SIP/WebRTC avec l'API Gemini Live pour des interactions vocales interactives ; résolution d'incompatibilités SDK via injection dynamique du contexte CRM dès l'initialisation de session.",
            "Développement d'un pipeline post-appel exploitant GPT-4o-mini pour l'extraction automatique de leads qualifiés et synchronisation CRM par mutations GraphQL sur-mesure.",
            "Conception d'une API FastAPI et d'un tableau de bord React en live-polling exposant les métriques de scoring QA sur un schéma PostgreSQL 5 tables.",
            "Administration de 2 plateformes VoIP d'entreprise (3CX et Yeastar) : configuration des trunks SIP, extensions d'agents et règles de routage."
          ],
          technologies: [
            "Python", "LiveKit", "Redis", "FastAPI", "React", "PostgreSQL",
            "GPT-4o-mini", "Gemini Live API", "Docker", "GraphQL", "3CX", "Yeastar"
          ]
        },
        {
          id: "expertise-data",
          title: "Intégration de Données Oracle GoldenGate",
          company: "Expertise Data",
          location: "Casablanca, Maroc",
          duration: "Juil. 2025 – Sep. 2025",
          badge: "Réplication de Données",
          badgeColor: "yellow",
          icon: "Database",
          description: [
            "Déploiement d'un environnement Oracle complet (Oracle Linux 8, Oracle DB 19c, microservices GoldenGate) pour la réplication de données haute disponibilité en temps réel.",
            "Configuration et audit des 3 processus de réplication GoldenGate fondamentaux : Extract, Pump et Replicat.",
            "Exécution de campagnes de tests de propagation et de synchronisation des données en temps réel sans dérive de latence.",
            "Supervision opérationnelle et dépannage des flux d'intégration de données critiques."
          ],
          technologies: [
            "Oracle Database 19c", "GoldenGate Microservices", "SQLPlus", "Oracle Linux 8", "Réplication Entreprise"
          ]
        },
        {
          id: "web-rasma",
          title: "Plateforme CRM de Support Client",
          company: "WebRasma",
          location: "Casablanca, Maroc",
          duration: "Juil. 2024 – Sep. 2024",
          badge: "Full-Stack Web & Temps Réel",
          badgeColor: "pink",
          icon: "Layers",
          description: [
            "Développement d'une application CRM full-stack centralisant le suivi et la résolution des interactions et tickets de support client.",
            "Réduction significative du délai de traitement des requêtes grâce à l'optimisation des flux de données et la refonte ergonomique de l'interface.",
            "Conception et intégration des mécanismes d'authentification et de gestion fine des droits d'accès utilisateurs.",
            "Mise en place de tableaux de bord interactifs pour la visualisation des indicateurs de performance en temps réel avec WebSockets."
          ],
          technologies: [
            "Django", "Python", "WebSockets", "PostgreSQL", "Full-Stack CRM", "Tailwind CSS"
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Projets d'Ingénierie & Universitaires",
      badge: "PROJETS PHARES",
      heading: "Des architectures modernes développées de bout en bout.",
      subheading: "Focus sur les microservices, les modèles prédictifs et les plateformes interactives.",
      inspectCode: "Explorer le code",
      items: [
        {
          id: "smartmove",
          title: "SmartMove – Prédiction de Retards de Transport",
          subtitle: "Moteur Prédictif & Architecture Microservices",
          badge: "IA & Systèmes Distribués",
          badgeColor: "blue",
          icon: "Activity",
          highlights: [
            "3 flux de données temps réel agrégés",
            "Microservices avec API Gateway et Service Discovery",
            "Modèles prédictifs ML & tableau de bord réactif"
          ],
          description: [
            "Conception d'un moteur de prédiction de retards en temps réel agrégeant 3 sources de données continues : trafic routier, météo et alertes incidents.",
            "Mise en œuvre d'une architecture microservices avec API Gateway et service de découverte pour une communication inter-services fluide.",
            "Développement de modèles prédictifs pour estimer les variations d'horaires à partir des historiques et des données télémétriques en direct.",
            "Développement d'un tableau de bord de supervision sous React visualisant l'état des lignes et la ponctualité de la flotte."
          ],
          technologies: ["Python", "Microservices", "API Gateway", "React", "REST API", "Machine Learning", "Docker"]
        },
        {
          id: "jobmatch",
          title: "JobMatch – Plateforme de Recrutement Intelligente",
          subtitle: "Matching Compétences & Assistant Conversationnel",
          badge: "Application Web Full-Stack",
          badgeColor: "violet",
          icon: "Code",
          highlights: [
            "Algorithme de matching recruteurs-candidats",
            "Chatbot assistant intégré pour les postulants",
            "Espace complet de gestion pour recruteurs"
          ],
          description: [
            "Développement d'une plateforme web connectant recruteurs et talents via un algorithme de matching multicritères par compétences.",
            "Mise en place des modules de publication d'annonces, de suivi des candidatures et d'évaluation collaborative des profils.",
            "Intégration d'un assistant conversationnel (chatbot JobMatch) guidant les candidats et simplifiant le dépôt de dossier.",
            "Conception d'une console d'administration pour la gestion des offres et l'exploration des viviers de candidats."
          ],
          technologies: ["Node.js", "React", "Express.js", "SQL Server", "JavaScript", "REST API", "Chatbot UI"]
        }
      ]
    },
    skills: {
      sectionTitle: "Matrice des Compétences",
      badge: "STACK TECHNIQUE",
      heading: "Une palette complète au service de l'ingénierie logicielle.",
      subheading: "Du code bas niveau aux architectures cloud et à l'intelligence artificielle générative.",
      filterTabs: [
        { id: "all", label: "Toutes les disciplines" },
        { id: "ai", label: "IA & VoIP" },
        { id: "web", label: "Web & Frameworks" },
        { id: "devops", label: "DevOps & Outils" },
        { id: "data", label: "Bases de données" }
      ],
      categories: [
        {
          title: "Langages de Programmation",
          color: "violet",
          skills: [
            { name: "Python", level: "Avancé" },
            { name: "Java", level: "Avancé" },
            { name: "JavaScript / TypeScript", level: "Avancé" },
            { name: "C++", level: "Intermédiaire" },
            { name: "C#", level: "Intermédiaire" },
            { name: "PHP", level: "Pratique" }
          ]
        },
        {
          title: "Web & Frameworks",
          color: "pink",
          skills: [
            { name: "React", level: "Avancé" },
            { name: "Next.js", level: "Avancé" },
            { name: "FastAPI", level: "Avancé" },
            { name: "Django", level: "Avancé" },
            { name: "Spring Boot", level: "Pratique" },
            { name: "Node.js & Express", level: "Avancé" }
          ]
        },
        {
          title: "VoIP & Intelligence Artificielle",
          color: "yellow",
          skills: [
            { name: "LiveKit SIP/WebRTC", level: "Expertise" },
            { name: "Gemini Live API", level: "Production" },
            { name: "GPT-4o-mini", level: "Production" },
            { name: "Redis Pub/Sub", level: "Avancé" },
            { name: "3CX VoIP", level: "Config" },
            { name: "Yeastar PBX", level: "Admin" }
          ]
        },
        {
          title: "DevOps & Outils Cloud",
          color: "blue",
          skills: [
            { name: "Docker & Compose", level: "Avancé" },
            { name: "Git & GitHub", level: "Avancé" },
            { name: "Grafana & Monitoring", level: "Pratique" },
            { name: "Jira & Méthodes Agiles", level: "Avancé" },
            { name: "Automatisation n8n", level: "Pratique" },
            { name: "WordPress & Odoo", level: "Pratique" }
          ]
        },
        {
          title: "Bases de Données",
          color: "cream",
          skills: [
            { name: "PostgreSQL", level: "Avancé" },
            { name: "MySQL", level: "Avancé" },
            { name: "Oracle 19c & GoldenGate", level: "Entreprise" },
            { name: "SQL Server", level: "Pratique" }
          ]
        },
        {
          title: "Architecture & Conception",
          color: "pink",
          skills: [
            { name: "Microservices", level: "Avancé" },
            { name: "Conception API REST", level: "Avancé" },
            { name: "WebSockets", level: "Temps Réel" },
            { name: "GraphQL", level: "Intégration" },
            { name: "Figma & Prototypage", level: "Pratique" },
            { name: "StarUML & Draw.io", level: "Avancé" }
          ]
        }
      ]
    },
    contact: {
      sectionTitle: "Me Contacter",
      badge: "DISCUTONS ENSEMBLE",
      heading: "Donnons vie à vos projets les plus ambitieux.",
      subheading: "Je suis disponible pour des opportunités professionnelles, des projets d'ingénierie et des collaborations innovantes.",
      directInfoTitle: "Coordonnées Directes",
      downloadResumeTitle: "Télécharger mon CV officiel",
      formTitle: "Envoyez-moi un Message",
      emailLabel: "Adresse E-mail",
      phoneLabel: "Numéro de Téléphone",
      locationLabel: "Localisation",
      nameField: "Votre Nom",
      namePlaceholder: "Fatine's Next Collaborator",
      emailField: "Votre E-mail",
      emailPlaceholder: "collaborateur@entreprise.com",
      messageField: "Votre Message",
      messagePlaceholder: "Bonjour Fatine ! Nous développons un projet stimulant et aimerions échanger...",
      submitBtn: "Envoyer le Message ✦",
      submitting: "Envoi en cours...",
      successTitle: "Message Transmis ! ♡",
      successMessage: "Merci pour votre message ! Je vous répondrai dans les plus brefs délais.",
      errorMessage: "Oups ! Une erreur s'est produite. Merci de réessayer dans un instant.",
      errorTitle: "Une erreur s'est produite",
      socialTitle: "Retrouvez-moi sur les réseaux"
    },
    footer: {
      tagline: "Ingénieure Logiciel · Spécialiste IA & Développement Full-Stack",
      madeWith: "Conçu avec passion & douceur à Casablanca ♡",
      rights: "Tous droits réservés.",
      backToTop: "Haut de page ↑"
    }
  }
};
