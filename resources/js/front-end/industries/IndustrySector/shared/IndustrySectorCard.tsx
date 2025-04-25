import { ArrowRight, CheckCircle } from 'lucide-react'
import React from 'react'

interface IndustryFeature {
    title: string
    description: string
  }

interface IndustrySector {
  id: string
  icon: React.ElementType
  title: string
  subtitle: string
  image: string
  features: IndustryFeature[]
  productCount: number
  partnerCount: number
  link: string
}


const IndustrySectorCard: React.FC<IndustrySector> = ({
    id,
    icon: Icon,
    title,
    subtitle,
    image,
    features,
    productCount,
    partnerCount,
    link
  }) => {
    return (
      <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
        {/* Corner decorative borders */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-secondary-500/30"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-secondary-500/30"></div>

        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-secondary-600/0 group-hover:bg-secondary-600/10 transition-colors duration-300"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Icon className="w-5 h-5 mr-2 text-secondary-400" />
              {title}
            </h3>
            <div className="w-12 h-0.5 bg-secondary-500 my-2"></div>
            <p className="text-white/80 text-sm">{subtitle}</p>
          </div>

          {/* Sector Code */}
          <div className="absolute top-4 right-4 text-xs font-mono text-white/80 bg-primary-900/50 px-2 py-1 backdrop-blur-sm">
            {id}
          </div>
        </div>

        {/* Features Section */}
        <div className="p-6">
          <div className="space-y-3 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary-800">{feature.title}</div>
                  <div className="text-sm text-gray-600">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-secondary-600 font-medium flex items-center">
              <div>{productCount}+ Products</div>
              <div className="w-1 h-1 bg-gray-300 rounded-full mx-2"></div>
              <div>{partnerCount} Major Partners</div>
            </div>

            <a
              href={link}
              className="inline-flex items-center text-primary-700 hover:text-secondary-700 transition-colors font-medium"
            >
              Explore
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    )
  }

export default IndustrySectorCard
