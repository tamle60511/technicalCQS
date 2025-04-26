
import React from 'react'
import {
  Car, Zap, Factory, CheckCircle, Network, ArrowRight
} from 'lucide-react'
import IndustrySectorCard from './shared/IndustrySectorCard'


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



const IndustrySectors: React.FC = () => {
  const sectors: IndustrySector[] = [
    {
      id: 'AUTO-MOTO',
      icon: Car,
      title: 'Automotive & Transportation',
      subtitle: 'Precision wheels, transmissions, and structural components',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        {
          title: 'High-Performance Wheel Rims',
          description: 'Lightweight aluminum alloy wheels engineered for performance and aesthetics'
        },
        {
          title: 'Transmission Components',
          description: 'Precision-engineered gearbox and transmission parts for durability'
        },
        {
          title: 'Structural Elements',
          description: 'Aluminum chassis and frame components balancing strength and weight'
        }
      ],
      productCount: 25,
      partnerCount: 4,
      link: 'automotive-transportation.html'
    },
    {
      id: 'ENERGY-SYS',
      icon: Zap,
      title: 'Energy & Utilities',
      subtitle: 'Components for power generation and distribution systems',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        {
          title: 'Turbine Components',
          description: 'Precision parts for wind and hydroelectric power generation'
        },
        {
          title: 'Transformer Housings',
          description: 'Durable aluminum casings for electrical components'
        },
        {
          title: 'Solar Panel Structures',
          description: 'Corrosion-resistant framing and mounting systems'
        }
      ],
      productCount: 18,
      partnerCount: 3,
      link: 'energy-utilities.html'
    },
    {
      id: 'IND-MACH',
      icon: Factory,
      title: 'Manufacturing & Industrial',
      subtitle: 'Specialized machinery and industrial equipment components',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        {
          title: 'Machine Components',
          description: 'Precision parts for manufacturing equipment and robotics'
        },
        {
          title: 'Automated Systems',
          description: 'Components for industrial automation and control systems'
        },
        {
          title: 'Specialized Tooling',
          description: 'Custom aluminum tools and fixtures for industrial applications'
        }
      ],
      productCount: 20,
      partnerCount: 5,
      link: 'manufacturing-industrial.html'
    }
  ]

  return (
    <section id="industry-sectors" className="py-16 bg-gray-50 relative">
      {/* Radial Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-primary-800/90 text-white px-4 py-2 mb-6 border-l-2 border-secondary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-secondary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-secondary-500"></div>
              <Network className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">Industry Sectors</span>
            </div>

            <h2 className="text-3xl font-bold text-primary-900 mb-4 tracking-tight text-center">
              Specialized <span className="text-secondary-600">Industry Solutions</span>
            </h2>

            <div className="w-20 h-0.5 bg-gray-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-gray-300 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <p className="text-gray-600 max-w-3xl text-center mb-10">
              Our precision aluminum components are engineered to meet the unique demands of various industries, with a focus on performance, durability, and innovation.
            </p>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <IndustrySectorCard key={sector.id} {...sector} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustrySectors
