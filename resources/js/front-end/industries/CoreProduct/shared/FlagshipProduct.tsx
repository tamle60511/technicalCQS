import { ArrowRight, CheckCircle } from 'lucide-react'
import React from 'react'

interface ProductFeature {
    text: string
  }

  interface ProductTag {
    name: string
  }

const FlagshipProduct: React.FC = () => {
    const flagshipProductFeatures: ProductFeature[] = [
      { text: '30% lighter than standard wheels' },
      { text: 'Superior heat dissipation' },
      { text: 'Enhanced impact resistance' },
      { text: 'Corrosion-resistant coating' }
    ]

    const flagshipProductTags: ProductTag[] = [
      { name: 'Honda' },
      { name: 'Mercedes' },
      { name: 'VinFast' }
    ]

    return (
      <div className="mb-12 bg-gray-50 border border-gray-200 p-6 relative">
        {/* Corner decorative borders */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-secondary-500"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-secondary-500"></div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-2/5">
            <div className="relative h-80 overflow-hidden border border-gray-300">
              <img
                src="https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Premium Alloy Wheel Rims"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-secondary-600 text-white text-xs font-medium py-1 px-2">
                Flagship Product
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-3/5">
            <div className="bg-white p-4 border-l-2 border-secondary-500 inline-block mb-3">
              <div className="text-xs text-gray-500 font-mono">MODEL: PRO-WHEEL-X8</div>
            </div>

            <h3 className="text-2xl font-bold text-primary-900 mb-3">Premium Alloy Wheel Rims</h3>
            <p className="text-gray-600 mb-4">
              Our flagship premium alloy wheel rims combine cutting-edge design with advanced manufacturing technology. These lightweight yet incredibly durable wheels enhance vehicle performance through reduced unsprung weight while providing superior aesthetics and heat dissipation for brake systems.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6">
              {flagshipProductFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 mr-2 text-secondary-600" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {flagshipProductTags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-100 px-3 py-1 text-xs text-gray-600 rounded"
                >
                  {tag.name}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="#"
                className="px-5 py-2 bg-secondary-600 hover:bg-secondary-700 text-white font-medium transition-colors inline-flex items-center"
              >
                Product Specifications
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default FlagshipProduct
