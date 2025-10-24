'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MobileSidebar from '@/components/MobileSidebar'
import AboutContent from '@/components/AboutContent'

export default function About() {
  const [activeSection, setActiveSection] = useState('about-me')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <MobileSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className={`ml-0 pt-16 px-4 sm:px-6 lg:px-8 py-12 transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-72'}`}>
        <AboutContent />
      </div>
    </main>
  )
}
