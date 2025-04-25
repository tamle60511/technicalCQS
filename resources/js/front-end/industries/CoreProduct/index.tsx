
import React from 'react'
import {
  Package,
  ArrowRight,
} from 'lucide-react'
import FlagshipProduct from './shared/FlagshipProduct'
import GridProductCard from './shared/GridProductCard'


interface ProductFeature {
  text: string
}

interface ProductTag {
  name: string
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






const CoreProducts: React.FC = () => {
  const gridProducts: Product[] = [
    {
      id: 'TH-SERIES',
      title: 'Transmission Housing',
      description: 'Precision-engineered aluminum housing for automotive transmissions, balancing strength with thermal properties.',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Automotive'
    },
    {
      id: 'BC-SERIES',
      title: 'Performance Brake Calipers',
      description: 'Lightweight aluminum brake calipers offering superior heat dissipation and consistent braking performance.',
      image: 'https://images.unsplash.com/photo-1487491506942-373c8f7a6c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Automotive'
    },
    {
      id: 'EMH-SERIES',
      title: 'Electric Motor Housing',
      description: 'Advanced aluminum housings for electric motors, providing optimal cooling and electromagnetic shielding.',
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'Energy'
    }
  ]

  return (
    <section className="py-16 bg-white relative">
      {/* Radial Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-primary-800/90 text-white px-4 py-2 mb-6 border-l-2 border-secondary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-secondary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-secondary-500"></div>
              <Package className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">Core Products</span>
            </div>

            <h2 className="text-3xl font-bold text-primary-900 mb-4 tracking-tight text-center">
              Our Flagship <span className="text-secondary-600">Aluminum Solutions</span>
            </h2>

            <div className="w-20 h-0.5 bg-gray-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-gray-300 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <p className="text-gray-600 max-w-3xl text-center mb-10">
              Discover our leading aluminum components that have established new standards for performance, durability, and precision in their respective industries.
            </p>
          </div>

          {/* Flagship Product */}
          <FlagshipProduct />

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gridProducts.map((product) => (
              <GridProductCard
                key={product.id}
                {...product}
                onDetailsClick={() => {/* Add detail page navigation */}}
              />
            ))}
          </div>

          {/* View All Products Link */}
          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-flex items-center text-primary-800 hover:text-secondary-700 transition-colors font-medium"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreProducts
