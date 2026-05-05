'use client'

import { useLang } from '@/context/LanguageContext'
import { t } from '@/lib/translations'
import ProfileImage from './ProfileImage'

export default function Hero() {
  const { lang } = useLang()
  const tr = t[lang]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
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
        <div className="flex justify-center mb-6 animate-fade-in">
          <ProfileImage size="large" />
        </div>

        <p className="text-lg text-gray-300 mb-4">{tr.greeting}</p>

        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 max-w-16">
            <div className="border-t-2 border-dashed border-gray-400"></div>
          </div>
          <div className="flex-1 max-w-32">
            <div className="border-t-2 border-white"></div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {tr.headline1} <span className="gradient-text">{tr.headline2}</span>
        </h1>

        <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          {tr.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="/about" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            {tr.viewPortfolio}
          </a>
          <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-dark-950 px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center space-x-2">
            <span>{tr.getInTouch}</span>
            <span>→</span>
          </a>
        </div>

        <div className="flex justify-center">
          <a href={tr.cvFile} download={tr.cvFileName} className="inline-flex items-center text-white hover:text-primary-400 transition-colors group">
            <span>{tr.downloadCV}</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}