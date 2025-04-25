
import React from 'react'
import {
  Settings,
  Shapes,
  Axe,
  Thermometer,
  Microscope,
  ArrowRight
} from 'lucide-react'
import CapabilityCard from './shared/CapabilityCard'
import CertificationCard from './shared/CertificationCard'



interface CapabilityDetail {
    icon: React.ElementType
    title: string
    description: string
    features: string[]
  }
  interface CertificationInfo {
    code: string
    title: string
  }

const Capabilities: React.FC = () => {
  const capabilities: CapabilityDetail[] = [
    {
      icon: Shapes,
      title: 'Precision Die Casting',
      description: 'Our advanced die casting processes enable the production of complex aluminum components with tight tolerances and excellent surface finishes.',
      features: [
        'High-pressure aluminum die casting up to 4,000 tons',
        'Vacuum-assisted casting for reduced porosity',
        'Multi-cavity tooling for efficient production'
      ]
    },
    {
      icon: Axe,
      title: 'CNC Machining',
      description: 'Our state-of-the-art 5-axis CNC machines deliver exceptional precision and surface finish for complex aluminum components.',
      features: [
        '5-axis simultaneous machining capabilities',
        'Tolerances as tight as ±0.01mm',
        'High-speed machining for efficient production'
      ]
    },
    {
      icon: Thermometer,
      title: 'Heat Treatment & Surface Finishing',
      description: 'Our specialized heat treatment and finishing processes enhance the performance and aesthetics of our aluminum components.',
      features: [
        'T5, T6, and T7 heat treatment capabilities',
        'Anodizing, powder coating, and custom finishes',
        'Automated polishing for premium aesthetics'
      ]
    },
    {
      icon: Microscope,
      title: 'Quality Assurance',
      description: 'Our comprehensive quality control systems ensure every component meets or exceeds industry standards and customer specifications.',
      features: [
        'Coordinate measuring machines (CMM) for dimensional verification',
        'X-ray and CT scanning for internal structure inspection',
        'Material composition analysis and certification'
      ]
    }
  ]

  const certifications: CertificationInfo[] = [
    { code: 'ISO 9001', title: 'Quality Management' },
    { code: 'IATF 16949', title: 'Automotive Quality' },
    { code: 'ISO 14001', title: 'Environmental Management' },
    { code: 'AS9100', title: 'Aerospace Standard' }
  ]

  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Radial Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-primary-800/90 text-white px-4 py-2 mb-6 border-l-2 border-secondary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-secondary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-secondary-500"></div>
              <Settings className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">Manufacturing Capabilities</span>
            </div>

            <h2 className="text-3xl font-bold text-primary-900 mb-4 tracking-tight text-center">
              Advanced <span className="text-secondary-600">Production Technologies</span>
            </h2>

            <div className="w-20 h-0.5 bg-gray-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-gray-300 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <p className="text-gray-600 max-w-3xl text-center mb-10">
              Our state-of-the-art manufacturing facilities employ cutting-edge technologies to deliver precision aluminum components that meet the highest industry standards.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={index} {...capability} />
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 bg-white border border-gray-200 p-6 text-center relative">
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-secondary-500/40"></div>
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-secondary-500/40"></div>

            <h3 className="text-xl font-bold text-primary-900 mb-4">
              Industry Certifications & Standards
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Our manufacturing processes and products meet or exceed the most stringent industry standards and certifications.
            </p>

            <div className="flex flex-wrap justify-center gap-6 items-center">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities
