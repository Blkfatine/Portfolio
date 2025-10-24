'use client'

import { Copy } from 'lucide-react'
import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = 'jsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code: ', err)
    }
  }

  return (
    <div className="relative bg-dark-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-dark-900 border-b border-gray-700">
        <span className="text-gray-400 text-sm">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <Copy size={16} />
          <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-gray-300 text-sm leading-relaxed">{code}</code>
      </pre>
    </div>
  )
}

