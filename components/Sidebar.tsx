'use client'

import { Home, User, Briefcase, GraduationCap, Code, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
  isCollapsed: boolean
  onToggleCollapse: () => void
}

export default function Sidebar({ activeSection, onSectionChange, isCollapsed, onToggleCollapse }: SidebarProps) {
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

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/contact', label: 'Contact', icon: Mail }
  ]

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={`fixed left-0 top-0 h-full bg-gradient-to-b from-dark-900 to-dark-950 border-r border-gray-800 z-40 pt-16 hidden lg:block transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-72'}`}>
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <button
          onClick={onToggleCollapse}
          className="absolute top-20 -right-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-1.5 shadow-lg transition-all duration-300 z-50"
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
        
        <nav className="flex-1 px-4 py-8 overflow-y-auto">
          {/* Navigation Section */}
          {!isCollapsed && (
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                Navigation
              </h3>
            </div>
          )}
          
          <ul className="space-y-2 mb-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-dark-800 transition-all duration-200 group"
                  title={isCollapsed ? item.label : ''}
                >
                  <item.icon className="flex-shrink-0 group-hover:text-primary-400 transition-colors" size={20} />
                  {!isCollapsed && (
                    <span className="ml-3 font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="border-t border-gray-800 my-6"></div>

          {/* Sections */}
          {!isCollapsed && (
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                Sections
              </h3>
            </div>
          )}
          
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
                    title={isCollapsed ? item.label : ''}
                  >
                    <Icon 
                      className={`flex-shrink-0 transition-colors ${
                        isActive ? 'text-white' : 'group-hover:text-primary-400'
                      }`} 
                      size={20} 
                    />
                    {!isCollapsed && (
                      <span className="ml-3 font-medium text-sm">{item.label}</span>
                    )}
                    {isActive && !isCollapsed && (
                      <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              © 2025 Fatine B.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}