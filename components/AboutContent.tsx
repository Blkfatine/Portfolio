'use client'

import { Code, Layers, FileText, Database, Cpu, Globe, Mic, Activity } from 'lucide-react'
import StatsCard from './StatsCard'
import ServiceCard from './ServiceCard'
import { useLang } from '@/context/LanguageContext'

export default function AboutContent() {
  const { lang } = useLang()

  const content = {
    en: {
      aboutTitle: 'About Me',
      aboutSubtitle: "I'm Fatine Belkhammar, a software engineer passionate about",
      aboutHighlight: 'AI, VoIP & Full-Stack Development',
      aboutBody: "I enjoy building systems that actually solve problems — from intelligent voice agents and VoIP infrastructures to full-stack web applications and automated workflows. I like seeing a project through from the first idea to something stable and shipped. Recently graduated from the engineering program at EMSI Casablanca, I'm open to exciting opportunities where technology meets real-world impact.",
      stats: ['Bac+5 Engineering Degree', '3 Professional internships', '6+ Programming languages'],
      experienceTitle: 'Professional Experience',
      projectsTitle: 'Academic Projects',
      skillsTitle: 'Technical Skills',
      experiences: [
        {
          icon: Mic,
          title: 'AI Voice Agent Development',
          company: 'Ennova Group • Casablanca',
          duration: 'Feb. 2026 – Present',
          description: [
            'Designed and deployed an AI voice agent for commercial call automation, built on 5 Python microservices orchestrated via LiveKit.',
            'Administered 2 VoIP platforms (3CX and Yeastar): configured SIP trunks, agent extensions and call routing rules.',
            'Implemented a real-time monitoring dashboard (Grafana) tracking 4 key call performance metrics.',
            'Developed an automated reporting module generating call transcriptions delivered by email after each session.',
            'Independently mastered 6 professional tools: Vicidial, Odoo (ERP), n8n, WordPress, 3CX and Yeastar.',
          ],
          technologies: ['Python', 'LiveKit', '3CX', 'Yeastar', 'Grafana', 'n8n', 'Odoo', 'Docker'],
        },
        {
          icon: Cpu,
          title: 'Oracle GoldenGate Data Integration',
          company: 'Expertise Data • Casablanca',
          duration: 'Jul. 2025 – Sep. 2025',
          description: [
            'Deployed a full Oracle environment (Linux 8, Oracle DB 19c, GoldenGate microservices) for real-time data replication.',
            'Configured the 3 GoldenGate replication processes: Extract, Pump and Replicat.',
            'Performed real-time data propagation and synchronization tests.',
            'Monitored and troubleshot data integration workflows.',
          ],
          technologies: ['Oracle Database 19c', 'GoldenGate Microservices', 'SQLPlus', 'Oracle Linux 8'],
        },
        {
          icon: Globe,
          title: 'Customer Support CRM Platform',
          company: 'WebRasma • Casablanca',
          duration: 'Jul. 2024 – Sep. 2024',
          description: [
            'Built a full-stack CRM application for centralizing and tracking customer interactions.',
            'Reduced request handling time through data flow optimization and UI improvements.',
            'Designed and integrated user authentication and authorization.',
            'Created interactive dashboards for data visualization.',
          ],
          technologies: ['Django', 'Python', 'WebSockets', 'PostgreSQL'],
        },
      ],
      projects: [
        {
          icon: Activity,
          title: 'SmartMove – Transport Delay Prediction System',
          description: [
            '• Built a real-time delay prediction engine aggregating 3 data sources: traffic, weather and incidents.',
            '• Set up a microservices architecture with API Gateway and service discovery for inter-service communication.',
            '• Designed predictive models to estimate delays based on historical and live data.',
            '• Developed a dashboard for real-time visualization of transport status.',
          ],
          technologies: ['Python', 'Microservices', 'API Gateway', 'React', 'REST API'],
        },
        {
          icon: Code,
          title: 'JobMatch – Intelligent Recruitment Platform',
          description: [
            '• Developed a web platform connecting recruiters and candidates with a skills-based matching system.',
            '• Implemented job posting, application tracking and review management modules.',
            '• Integrated a JobMatch assistant chatbot reducing navigation time and improving candidate experience.',
            '• Designed a recruiter dashboard for job management and profile browsing.',
          ],
          technologies: ['Node.js', 'React', 'Express.js', 'SQL Server', 'JavaScript', 'REST API'],
        },
      ],
      skillCategories: [
        {
          title: 'Programming Languages',
          skills: ['Java', 'Python', 'JavaScript', 'C++', 'C#', 'PHP'],
        },
        {
          title: 'Web & Frameworks',
          skills: ['React', 'Next.js', 'Django', 'Spring Boot', 'Node.js', 'Express.js'],
        },
        {
          title: 'VoIP & AI',
          skills: ['3CX', 'Yeastar', 'LiveKit', 'Vicidial'],
        },
        {
          title: 'DevOps & Tools',
          skills: ['Docker', 'Git', 'GitHub', 'Grafana', 'Jira', 'WordPress', 'n8n', 'Odoo'],
        },
        {
          title: 'Databases',
          skills: ['MySQL', 'Oracle 19c', 'SQL Server', 'PostgreSQL'],
        },
        {
          title: 'Design & Others',
          skills: ['Figma', 'Draw.io', 'StarUML', 'REST API', 'WebSockets'],
        },
      ],
    },
    fr: {
      aboutTitle: 'À propos',
      aboutSubtitle: 'Je suis Fatine Belkhammar, ingénieure logiciel passionnée par',
      aboutHighlight: "l'IA, la VoIP & le développement Full-Stack",
      aboutBody: "J'aime construire des systèmes qui résolvent de vrais problèmes — des agents vocaux intelligents aux infrastructures VoIP, en passant par les applications web full-stack et les workflows automatisés. Diplômée du cycle d'ingénierie à l'EMSI Casablanca, je suis ouverte à toute opportunité stimulante où la technologie répond à des enjeux concrets.",
      stats: ["Bac+5 Diplôme Ingénieur", '3 stages professionnels', '6+ langages de programmation'],
      experienceTitle: 'Expérience Professionnelle',
      projectsTitle: 'Projets Universitaires',
      skillsTitle: 'Compétences Techniques',
      experiences: [
        {
          icon: Mic,
          title: "Développement d'un Agent Vocal Intelligent",
          company: 'Ennova Group • Casablanca',
          duration: 'Fév. 2026 – Présent',
          description: [
            "Conception et déploiement d'un agent vocal IA pour l'automatisation des appels commerciaux, basé sur 5 microservices Python orchestrés via LiveKit.",
            "Administration de 2 plateformes VoIP (3CX et Yeastar) : configuration de trunks SIP, extensions d'agents et règles de routage.",
            "Implémentation d'un tableau de bord de monitoring en temps réel (Grafana) couvrant 4 métriques clés.",
            "Développement d'un module de rapports automatisés avec transcription envoyée par e-mail après chaque appel.",
            "Maîtrise autonome de 6 outils professionnels : Vicidial, Odoo, n8n, WordPress, 3CX et Yeastar.",
          ],
          technologies: ['Python', 'LiveKit', '3CX', 'Yeastar', 'Grafana', 'n8n', 'Odoo', 'Docker'],
        },
        {
          icon: Cpu,
          title: 'Intégration de Données Oracle GoldenGate',
          company: 'Expertise Data • Casablanca',
          duration: 'Juil. 2025 – Sep. 2025',
          description: [
            "Déploiement d'un environnement Oracle complet (Linux 8, Oracle DB 19c, microservices GoldenGate) pour la réplication de données en temps réel.",
            'Configuration des 3 processus de réplication GoldenGate : Extract, Pump et Replicat.',
            'Tests de propagation et de synchronisation des données en temps réel.',
            "Surveillance et dépannage des flux d'intégration de données.",
          ],
          technologies: ['Oracle Database 19c', 'GoldenGate Microservices', 'SQLPlus', 'Oracle Linux 8'],
        },
        {
          icon: Globe,
          title: 'Plateforme CRM de Support Client',
          company: 'WebRasma • Casablanca',
          duration: 'Juil. 2024 – Sep. 2024',
          description: [
            "Développement d'une application CRM full-stack pour la centralisation et le suivi des interactions clients.",
            "Réduction du temps de traitement des requêtes grâce à l'optimisation des flux de données et à l'amélioration de l'interface utilisateur.",
            "Conception et intégration de l'authentification et des autorisations utilisateurs.",
            'Création de tableaux de bord interactifs pour la visualisation des données.',
          ],
          technologies: ['Django', 'Python', 'WebSockets', 'PostgreSQL'],
        },
      ],
      projects: [
        {
          icon: Activity,
          title: 'SmartMove – Système de Prédiction de Retards de Transport',
          description: [
            '• Conception d\'un moteur de prédiction de retards en temps réel agrégeant 3 sources de données : trafic, météo et incidents.',
            '• Mise en place d\'une architecture microservices avec API Gateway et service de découverte.',
            '• Conception de modèles prédictifs basés sur des données historiques et en temps réel.',
            '• Développement d\'un tableau de bord de visualisation du statut des transports.',
          ],
          technologies: ['Python', 'Microservices', 'API Gateway', 'React', 'REST API'],
        },
        {
          icon: Code,
          title: 'JobMatch – Plateforme de Recrutement Intelligente',
          description: [
            '• Développement d\'une plateforme web connectant recruteurs et candidats via un système de matching par compétences.',
            '• Implémentation des modules de publication d\'offres, suivi des candidatures et gestion des évaluations.',
            '• Intégration d\'un chatbot assistant (JobMatch) améliorant l\'expérience candidat.',
            '• Conception d\'un tableau de bord recruteur pour la gestion des offres et la navigation des profils.',
          ],
          technologies: ['Node.js', 'React', 'Express.js', 'SQL Server', 'JavaScript', 'REST API'],
        },
      ],
      skillCategories: [
        {
          title: 'Langages de Programmation',
          skills: ['Java', 'Python', 'JavaScript', 'C++', 'C#', 'PHP'],
        },
        {
          title: 'Web & Frameworks',
          skills: ['React', 'Next.js', 'Django', 'Spring Boot', 'Node.js', 'Express.js'],
        },
        {
          title: 'VoIP & IA',
          skills: ['3CX', 'Yeastar', 'LiveKit', 'Vicidial', 'n8n', 'Odoo'],
        },
        {
          title: 'DevOps & Outils',
          skills: ['Docker', 'Git', 'GitHub', 'Grafana', 'Jira', 'WordPress'],
        },
        {
          title: 'Bases de données',
          skills: ['MySQL', 'Oracle 19c', 'SQL Server', 'PostgreSQL'],
        },
        {
          title: 'Design & Autres',
          skills: ['Figma', 'Draw.io', 'StarUML', 'REST API', 'WebSockets'],
        },
      ],
    },
  }

  const tr = content[lang]

  return (
    <div className="space-y-16">
      {/* About Me */}
      <section id="about-me" className="mt-8">
        <h1 className="text-5xl font-bold text-white mb-4">{tr.aboutTitle}</h1>
        <h2 className="text-2xl text-white mb-6">
          {tr.aboutSubtitle} <span className="gradient-text">{tr.aboutHighlight}</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mb-8">{tr.aboutBody}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tr.stats.map((stat, i) => {
            const [number, ...labelParts] = stat.split(' ')
            return <StatsCard key={i} number={number} label={labelParts.join(' ')} />
          })}
        </div>
      </section>

      {/* Professional Experience — now BEFORE projects */}
      <section id="experience">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-white mr-4">{tr.experienceTitle}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tr.experiences.map((experience, index) => (
            <ServiceCard
              key={index}
              icon={experience.icon}
              title={
                <div>
                  <div className="font-bold">{experience.title}</div>
                  <div className="text-sm text-gray-400">{experience.company}</div>
                  <div className="text-xs text-primary-400">{experience.duration}</div>
                </div>
              }
              description={
                <ul className="list-none space-y-2">
                  {experience.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-300">{point.replace('•', '').trim()}</span>
                    </li>
                  ))}
                </ul>
              }
              technologies={experience.technologies}
            />
          ))}
        </div>
      </section>

      {/* Academic Projects */}
      <section id="academic-projects">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-white mr-4">{tr.projectsTitle}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tr.projects.map((project, index) => (
            <ServiceCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-white mr-4">{tr.skillsTitle}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tr.skillCategories.map((category, index) => (
            <div key={index} className="bg-dark-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
