'use client'

import { useState } from 'react'
import { Send, Mail, MapPin, Phone, ArrowLeft, Home, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('') // For success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert(data.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error(err)
      alert('Failed to send message. Please check your internet connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-dark-950 pt-20 px-4 sm:px-6 lg:px-8">
      {/* Navigation Bar */}
      <div className="max-w-4xl mx-auto pt-6 pb-4">
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
      </div>

      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-lg">
            Looking for a final-year internship opportunity? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">blkfatine2@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+212 6 35 29 16 27</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Casablanca, Morocco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-primary-600/50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
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

        {/* Success Message at the bottom of the page */}
        {status === 'success' && (
          <div className="mt-8 bg-green-900/20 border border-green-600/30 rounded-lg p-6 text-center backdrop-blur-sm">
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-green-400 text-lg font-semibold mb-1">
              Message sent successfully!
            </p>
            <p className="text-green-300/70 text-sm">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
