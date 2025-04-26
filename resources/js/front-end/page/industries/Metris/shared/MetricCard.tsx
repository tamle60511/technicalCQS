interface MetricCardProps {
  value: string
  label: string
  description: string
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, description }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 p-6 relative group">
      {/* Corner decorative borders */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-secondary-500/40
        group-hover:border-secondary-500/60 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-secondary-500/40
        group-hover:border-secondary-500/60 transition-all duration-300"></div>

      {/* Metric content */}
      <div className="text-3xl font-bold text-primary-600 mb-2
        group-hover:text-secondary-500 transition-colors">{value}</div>
      <div className="text-neutral-800 font-medium">{label}</div>
      <div className="text-xs text-gray-500 mt-1">{description}</div>
    </div>
  )
}

export default  MetricCard;
