'use client'

import { useState } from 'react'
import { Menu, X, Github, Instagram, MessageCircle } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">Fatine B.</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/Blkfatine" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/fatine-belkhammar-791aa1239" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <MessageCircle size={20} />
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="https://github.com/Blkfatine" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/fatine-belkhammar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <MessageCircle size={20} />
                </a>
              </div>
              <a
                href="/contact"
                className="block bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
