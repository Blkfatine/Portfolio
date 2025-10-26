'use client'

import { Github, Linkedin } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <h1 className="text-xl font-bold text-white hover:text-primary-400 transition-colors">Fatine B.</h1>
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com/in/fatine-belkhammar-791aa1239" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-primary-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Blkfatine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-primary-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <span>Contact</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
