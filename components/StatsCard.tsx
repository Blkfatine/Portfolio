interface StatsCardProps {
  number: string
  label: string
}

export default function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="bg-dark-800 rounded-lg p-6 text-center">
      <div className="text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )
}

