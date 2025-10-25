'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, MapPin, Phone, ArrowLeft, Home, Linkedin, Github, Check, X } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'' | 'success' | 'error'>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (formData.email) {
      setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    } else {
      setIsValidEmail(true)
    }
  }, [formData.email])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting || !isValidEmail) return
    
    setStatus('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Auto-hide success message after 5 seconds
        const timer = setTimeout(() => {
          if (mounted) setStatus('')
        }, 5000)
        return () => clearTimeout(timer)
      } else {
        const error = await response.json()
        console.error('Failed to send message:', error)
        setStatus('error')
        const timer = setTimeout(() => {
          if (mounted) setStatus('')
        }, 5000)
        return () => clearTimeout(timer)
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setStatus('error')
      const timer = setTimeout(() => {
        if (mounted) setStatus('')
      }, 5000)
      return () => clearTimeout(timer)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.main 
      className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900 pt-4 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-96 -left-96 w-[800px] h-[800px] bg-primary-500/10 rounded-full mix-blend-soft-light blur-3xl"></div>
        <div className="absolute -bottom-96 -right-96 w-[800px] h-[800px] bg-blue-500/10 rounded-full mix-blend-soft-light blur-3xl"></div>
      </div>
      {/* Navigation Bar */}
      <motion.div 
        className="max-w-6xl mx-auto py-4 relative z-10"
        variants={fadeInUp}
      >
        <div className="flex items-center justify-between">
          <Link 
            href="/about" 
            className="flex items-center text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
          <Link 
            href="/" 
            className="flex items-center text-gray-400 hover:text-white transition-colors group"
          >
            <Home size={20} className="mr-2" />
            <span>Home</span>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        className="max-w-6xl mx-auto py-12 relative z-10"
        variants={staggerContainer}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg">
  As a computer engineering student passionate about web and mobile development, I’m always open to new opportunities and collaborations!
</p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div 
            className="h-full flex flex-col"
            variants={fadeInUp}
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-white/10">
                Contact Information
              </h2>
              <div className="space-y-6 pt-8">
                <div 
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  onMouseEnter={() => document.getElementById('message-section')?.classList.add('ring-2', 'ring-primary-500/50')}
                  onMouseLeave={() => document.getElementById('message-section')?.classList.remove('ring-2', 'ring-primary-500/50')}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors">blkfatine2@gmail.com</p>
                  </div>
                </div>

                <a 
                  href="tel:+212635291627"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300 group-hover:text-green-400 transition-colors">+212 6 35 29 16 27</p>
                  </div>
                </a>

                <div 
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  onMouseEnter={() => document.getElementById('message-section')?.classList.add('ring-2', 'ring-primary-500/50')}
                  onMouseLeave={() => document.getElementById('message-section')?.classList.remove('ring-2', 'ring-primary-500/50')}
                >
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300 group-hover:text-purple-400 transition-colors">Casablanca, Morocco</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-auto pt-10 border-t border-white/10">
                <h3 className="text-white font-medium mb-4 text-center">Find Me On</h3>
                <div className="flex space-x-4 justify-center">
                  <a 
                    href="https://linkedin.com/in/fatine-belkhammar-791aa1239" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://github.com/Blkfatine" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="relative"
            variants={fadeInUp}
          >
            <div id="message-section" className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-white/10">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-white font-medium">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all"
                      placeholder="What's your name?"
                      required
                      disabled={isSubmitting}
                    />
                    {formData.name && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400">
                        <Check size={18} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-white font-medium">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${isValidEmail || !formData.email ? 'border-white/10' : 'border-red-500/50'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all`}
                      placeholder="You@example.com"
                      required
                      disabled={isSubmitting}
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      title="Please enter a valid email address"
                    />
                    {formData.email && (
                      <div className={`absolute right-3 top-1/2 -translate-y-1/2 ${isValidEmail ? 'text-green-400' : 'text-red-400'}`}>
                        {isValidEmail ? <Check size={18} /> : <X size={18} />}
                      </div>
                    )}
                  </div>
                  {!isValidEmail && formData.email && (
                    <p className="text-red-400 text-sm mt-1">Please enter a valid email address</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-white font-medium">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all resize-none"
                      placeholder="Hi Fatine, I'd like to discuss..."
                      required
                      disabled={isSubmitting}
                      maxLength={1000}
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                      {formData.message.length}/1000
                    </div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || !isValidEmail}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -2 }}
                  className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting || !isValidEmail
                      ? 'bg-gray-700 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary-500 to-blue-600 hover:shadow-lg hover:shadow-primary-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="flex-shrink-0" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
              
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start space-x-3"
                  >
                    <div className="bg-green-500/20 p-1.5 rounded-full flex-shrink-0">
                      <Check className="text-green-400" size={18} />
                    </div>
                    <div>
                      <p className="text-green-100 font-medium">Message Sent Successfully!</p>
                      <p className="text-green-300/80 text-sm mt-0.5">
                        I'll get back to you as soon as possible. Thank you!
                      </p>
                    </div>
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start space-x-3"
                  >
                    <div className="bg-red-500/20 p-1.5 rounded-full flex-shrink-0">
                      <X className="text-red-400" size={18} />
                    </div>
                    <div>
                      <p className="text-red-100 font-medium">Something went wrong</p>
                      <p className="text-red-300/80 text-sm mt-0.5">
                        Please try again or contact me directly via email/phone.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </motion.div>
      
      {/* Footer */}
      <motion.footer 
        className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-16 relative z-10"
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Fatine Belkhammar. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-600">
            Designed & Built with Next.js and Tailwind CSS
          </p>
        </div>
      </motion.footer>
    </motion.main>
  )
}
