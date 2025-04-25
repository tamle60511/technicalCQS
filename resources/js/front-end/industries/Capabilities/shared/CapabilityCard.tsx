import { ArrowRight } from 'lucide-react'
import React from 'react'

interface CapabilityDetail {
    icon: React.ElementType
    title: string
    description: string
    features: string[]
  }



  const CapabilityCard: React.FC<CapabilityDetail> = ({
    icon: Icon,
    title,
    description,
    features
  }) => {
    return (
      <div className="bg-white border border-gray-200 shadow-sm p-6 relative group hover:shadow-md transition-shadow">
        {/* Corner decorative borders */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-secondary-500/30"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-secondary-500/30"></div>

        {/* Icon */}
        <div className="w-12 h-12 bg-secondary-50 border border-secondary-200 rounded-md flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-secondary-600 group-hover:text-secondary-700 transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-secondary-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">{description}</p>

        {/* Features List */}
        <div className="text-sm text-gray-600">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start mb-2 last:mb-0">
              <ArrowRight className="w-4 h-4 text-secondary-500 mt-0.5 mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

export default CapabilityCard
