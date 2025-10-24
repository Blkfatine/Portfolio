import { Linkedin, MessageCircle, Github } from 'lucide-react'
import ProfileImage from './ProfileImage'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      {/* Background dots */}
      <div className="absolute top-20 right-20 w-24 h-16 opacity-20">
        <div className="grid grid-cols-5 grid-rows-3 gap-1">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full" />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-20 left-20 w-32 h-20 opacity-20">
        <div className="grid grid-cols-6 grid-rows-4 gap-1">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full" />
          ))}
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto my-8">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <ProfileImage size="large" />
        </div>
        {/* Greeting */}
        <p className="text-lg text-gray-300 mb-4">Hi, I'm Fatine Belkhammar!</p>
        
        {/* Separator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 max-w-16">
            <div className="border-t-2 border-dashed border-gray-400"></div>
          </div>
          <div className="flex-1 max-w-32">
            <div className="border-t-2 border-white"></div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Computer Engineering Student Seeking{' '}
          <span className="gradient-text">{'{Internship}'}</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Final-year computer engineering student at EMSI Casablanca, passionate about web application 
          development and database management. Looking for a 4–6 month internship to apply my skills 
          and gain professional experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/about"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            View Portfolio
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-dark-950 px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <span>Get in touch</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-white text-sm font-medium transform -rotate-90 whitespace-nowrap">
            Follow me
          </div>
          <div className="w-px h-8 bg-white"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="flex flex-col space-y-4">
            <a href="https://linkedin.com/in/fatine-belkhammar-791aa1239" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Blkfatine" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
