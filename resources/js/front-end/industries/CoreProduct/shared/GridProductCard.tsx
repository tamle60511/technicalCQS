import { ChevronRight } from 'lucide-react'
import React from 'react'
interface ProductFeature {
    text: string
  }

  interface ProductTag {
    name: string
  }
interface GridProductCardProps extends Product {
    onDetailsClick?: () => void
  }
interface Product {
  id: string
  title: string
  description: string
  image: string
  category: string
  features?: ProductFeature[]
  tags?: ProductTag[]
}
const GridProductCard: React.FC<GridProductCardProps> = ({
    title,
    description,
    image,
    category,
    id,
    onDetailsClick
  }) => {
    return (
      <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow group relative">
        {/* Corner decorative borders */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-secondary-500/30"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-secondary-500/30"></div>

        {/* Product Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-primary-800/80 text-white text-xs font-medium py-1 px-2">
            {category}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6">
          <h4 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-secondary-700 transition-colors">
            {title}
          </h4>
          <p className="text-gray-600 text-sm mb-4">{description}</p>

          <div className="flex justify-between items-center pt-3 border-t border-gray-200">
            <div className="text-xs text-gray-500 font-mono">{id}</div>
            <button
              onClick={onDetailsClick}
              className="text-secondary-600 hover:text-secondary-700 inline-flex items-center text-sm"
            >
              Details
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    )
  }

export default GridProductCard
