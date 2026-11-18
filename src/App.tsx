import { LanguageProvider } from './context/LanguageContext';
import { Ticker } from './components/Ticker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackgroundEmojis } from './components/BackgroundEmojis';

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-[#2E2833] flex flex-col font-sans selection:bg-[#FFD6DF] selection:text-[#2E2833] relative">
      {/* Top Announcement Running Marquee Ticker */}
      <Ticker variant="violet" />

      {/* Main Sticky Pill Navigation */}
      <Navbar />

      <main className="flex-1 relative z-0">
        {/* Floating Apple iPhone 3D Background Emojis */}
        <BackgroundEmojis />

        {/* Hero Section */}
        <Hero />

        {/* Key Statistics Strip */}
        <StatsBanner />

        {/* Middle Running Accent Divider */}
        <div className="my-8 relative z-10">
          <Ticker variant="pink" />
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
