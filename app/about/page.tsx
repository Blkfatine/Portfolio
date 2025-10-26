'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import AboutContent from '@/components/AboutContent'

// Dynamically import MobileSidebar with no SSR
const MobileSidebar = dynamic(() => import('@/components/MobileSidebar'), {
  ssr: false
})

export default function About() {
  const [activeSection, setActiveSection] = useState('about-me')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <main className="min-h-screen bg-dark-950">
      {/* Only show Header on desktop */}
      <div className="hidden lg:block">
        <Header />
      </div>
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
      </div>
      
      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <MobileSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      </div>
      <div className={`ml-0 pt-16 px-4 sm:px-6 lg:px-8 py-12 transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-72'}`}>
        <AboutContent />
      </div>
    </main>
  )
}
