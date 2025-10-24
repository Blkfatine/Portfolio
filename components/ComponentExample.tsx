import CodeBlock from './CodeBlock'

interface ComponentExampleProps {
  title: string
  subtitle?: string
  description: string
  code: string
  children?: React.ReactNode
}

export default function ComponentExample({ 
  title, 
  subtitle, 
  description, 
  code, 
  children 
}: ComponentExampleProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        {subtitle && <h4 className="text-gray-400 text-sm mb-4">{subtitle}</h4>}
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
      
      {children && (
        <div className="bg-dark-800 rounded-lg border border-gray-700 p-6">
          {children}
        </div>
      )}
      
      <CodeBlock code={code} />
    </div>
  )
}

