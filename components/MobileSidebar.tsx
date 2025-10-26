'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, GraduationCap, Code, Mail, Linkedin, ChevronRight, ChevronLeft, Github } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function MobileSidebar({ activeSection, onSectionChange }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { 
      id: 'about-me', 
      label: 'About Me',
      icon: User,
      isSection: true
    },
    { 
      id: 'academic-projects', 
      label: 'Academic Projects',
      icon: GraduationCap,
      isSection: true
    },
    { 
      id: 'experience', 
      label: 'Professional Experience',
      icon: Briefcase,
      isSection: true
    },
    { 
      id: 'skills', 
      label: 'Technical Skills',
      icon: Code,
      isSection: true
    }
  ]

  const socialItems = [
    { 
      href: 'https://linkedin.com/in/fatine-belkhammar-791aa1239', 
      label: 'LinkedIn', 
      icon: Linkedin,
      external: true
    },
    { 
      href: 'https://github.com/yourusername', 
      label: 'GitHub', 
      icon: Github,
      external: true
    }
  ]

  const navigationItems = [
    { 
      href: '/', 
      label: 'Home', 
      icon: Home 
    },
    { 
      href: '/contact', 
      label: 'Contact', 
      icon: Mail,
      external: true
    }
  ]

  const pathname = usePathname()
  const isContactPage = pathname === '/contact'

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsOpen(false)
    setIsCollapsed(!isCollapsed)
    
    // If we're on the contact page and clicking email, scroll to form
    if (isContactPage && sectionId === 'email') {
      const form = document.getElementById('contact-form')
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    
    // Otherwise, handle as normal section click
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between">
        {/* Mobile menu button - Left side */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setIsCollapsed(!isOpen);
          }}
          className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg shadow-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
        
        {/* Social Icons - Right side */}
        <div className="flex items-center space-x-2 bg-dark-800/80 backdrop-blur-sm px-3 py-2 rounded-lg">
          {socialItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-400 transition-colors"
              aria-label={item.label}
            >
              <item.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile sidebar overlay with animations */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div 
              className="absolute left-0 top-0 h-full w-80 bg-gradient-to-b from-dark-900 to-dark-950 shadow-2xl"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ 
                type: 'spring',
                damping: 25,
                stiffness: 300
              }}
            >
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-white font-bold text-lg">Menu</h2>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsCollapsed(true);
                }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <nav className="p-6 overflow-y-auto h-[calc(100%-80px)]">
              {/* Navigation Section */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                  Navigation
                </h3>
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-dark-800 transition-all duration-200 group"
                        >
                          <item.icon className="flex-shrink-0 group-hover:text-primary-400 transition-colors" size={20} />
                          <span className="ml-3 font-medium">{item.label}</span>
                          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-dark-800 transition-all duration-200 group"
                        >
                          <item.icon className="flex-shrink-0 group-hover:text-primary-400 transition-colors" size={20} />
                          <span className="ml-3 font-medium">{item.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-800 my-6"></div>

              {/* Sections */}
              <div className="mb-4">

                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                  Sections
                </h3>
                <ul className="space-y-1">
                  {menuItems.map((item) => {
                    const isActive = activeSection === item.id
                    const Icon = item.icon
                    
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleSectionClick(item.id)}
                          className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 group ${
                            isActive
                              ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                              : 'text-gray-300 hover:text-white hover:bg-dark-800'
                          }`}
                        >
                          <Icon 
                            className={`flex-shrink-0 transition-colors ${
                              isActive ? 'text-white' : 'group-hover:text-primary-400'
                            }`} 
                            size={20} 
                          />
                          <span className="ml-3 font-medium text-sm">{item.label}</span>
                          {isActive && (
                            <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
