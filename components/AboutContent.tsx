import { Code, Layers, FileText, Database, Cpu, Globe } from 'lucide-react'
import StatsCard from './StatsCard'
import ServiceCard from './ServiceCard'

export default function AboutContent() {
  const academicProjects = [
    {
      icon: Code,
      title: "JobMatch – Recruitment Platform",
      description: [
        "• Developed a web platform connecting recruiters and candidates with a skills-based matching system",
        "• Implemented job posting, application tracking, and feedback features",
        "• Integrated a chatbot assistant (JobMatch) for user guidance",
        "• Designed and developed a recruiter dashboard for job management and profile browsing"
      ],
      technologies: ["Node.js", "React", "Express.js", "SQL Server", "JavaScript", "REST API"]
    },
    {
      icon: Database,
      title: "Medical Quiz App",
      description: [
        "• Designed and built an interactive Android quiz app for medical knowledge testing",
        "• Implemented a user-friendly interface with score tracking",
        "• Integrated Firebase for secure data storage and user authentication",
        "• Added result tracking to monitor user progress and performance"
      ],
      technologies: ["Java", "Firebase", "Android SDK"]
    }
  ]

  const professionalExperiences = [
    {
      icon: Cpu,
      title: "Oracle GoldenGate Data Integration",
      company: "Expertise Data, Casablanca",
      duration: "July 2025 – September 2025 (3 months)",
      description: [
        "• Set up and configured Oracle Database 19c environment",
        "• Implemented and optimized GoldenGate replication processes",
        "• Performed real-time data propagation and synchronization tests",
        "• Monitored and troubleshooted data integration workflows"
      ],
      technologies: ["Oracle Database 19c", "GoldenGate Microservices", "SQLPlus", "Oracle Linux 8"]
    },
    {
      icon: Globe,
      title: "Client Support Platform Development",
      company: "WebRasma, Casablanca",
      duration: "15 July 2024 – 15 September 2024 (2 months)",
      description: [
        "• Developed a comprehensive CRM application for client management",
        "• Implemented real-time communication using WebSockets",
        "• Designed and integrated user authentication and authorization",
        "• Created interactive dashboards for data visualization"
      ],
      technologies: ["Django", "Python", "WebSockets", "PostgreSQL"]
    }
  ]

  return (
    <div className="space-y-16">
      {/* About Me Section */}
      <section id="about-me" className="mt-8">
        <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
        <h2 className="text-2xl text-white mb-6">
          I'm Fatine Belkhammar, a computer engineering <span className="gradient-text">student</span> at École Marocaine des Sciences de l'Ingénieur (EMSI) Casablanca
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mb-8">
          Passionate about crafting modern web and mobile applications with clean architecture and efficient database management.
          I enjoy transforming complex ideas into intuitive, high-performance solutions and continuously exploring new technologies to enhance user experiences.
          My work reflects a balance between strong backend logic and elegant frontend design, bringing both reliability and creativity to every project.
          Recently, I've been expanding my interests toward <span className="gradient-text">Machine Learning and Artificial Intelligence</span>, exploring how intelligent systems can enhance the way we build and interact with software.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard number="4+" label="Years of study" />
          <StatsCard number="2" label="Professional internships" />
          <StatsCard number="6+" label="Programming languages" />
        </div>
      </section>

      {/* Academic Projects Section */}
      <section id="academic-projects">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-white mr-4">Academic Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academicProjects.map((project, index) => (
            <ServiceCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-white mr-4">Professional Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {professionalExperiences.map((experience, index) => (
            <ServiceCard
              key={index}
              icon={experience.icon}
              title={
                <div>
                  <div className="font-bold">{experience.title as string}</div>
                  <div className="text-sm text-gray-400">{experience.company}</div>
                  <div className="text-xs text-primary-400">{experience.duration}</div>
                </div>
              }
              description={
                <ul className="list-none space-y-2">
                  {(experience.description as string[]).map((point, i) => (
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

      {/* Technical Skills Section */}
      <section id="skills">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-white mr-4">Technical Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-dark-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Python', 'JavaScript', 'C++', 'C#', 'PHP'].map((lang) => (
                <span key={lang} className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-dark-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Web Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'HTML', 'CSS', 'Django', 'Spring Boot'].map((tech) => (
                <span key={tech} className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-dark-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Tools & Others</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'GitHub', 'Docker', 'MySQL', 'Oracle', 'Node.js'].map((tool) => (
                <span key={tool} className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
