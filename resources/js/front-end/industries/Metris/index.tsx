
import React from 'react'
import MetricCard from './shared/MetricCard'


const Metrics: React.FC = () => {
  const metricsData = [
    {
      value: '15+',
      label: 'Years Experience',
      description: 'in aluminum manufacturing'
    },
    {
      value: '500k+',
      label: 'Components',
      description: 'manufactured annually'
    },
    {
      value: '99.8%',
      label: 'Quality Rate',
      description: 'exceeding industry standards'
    },
    {
      value: '12',
      label: 'Global Partners',
      description: 'across automotive industries'
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metricsData.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metrics
