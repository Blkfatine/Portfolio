import { LucideIcon } from 'lucide-react'

import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: LucideIcon
  title: string | ReactNode
  description: string | string[] | ReactNode
  technologies?: string[]
}

export default function ServiceCard({ icon: Icon, title, description, technologies }: ServiceCardProps) {
  return (
    <div className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-colors duration-300 h-full flex flex-col">
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-3 w-fit mb-4 shadow-lg">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {typeof title === 'string' ? title : title}
      </h3>
      <div className="text-gray-400 leading-relaxed mb-4">
        {Array.isArray(description) ? (
          <ul className="space-y-2">
            {description.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>{typeof point === 'string' ? point.replace('•', '').trim() : point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <>{typeof description === 'string' ? <p>{description}</p> : description}</>
        )}
      </div>
      
      {technologies && technologies.length > 0 && (
        <div className="mt-auto pt-4 border-t border-gray-700">
          <p className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-primary-600/20 to-primary-700/20 border border-primary-600/30 text-primary-300 px-3 py-1 rounded-full text-xs font-medium hover:from-primary-600/30 hover:to-primary-700/30 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

