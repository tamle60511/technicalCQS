import React from 'react'
import KeyResultCard from './KeyResultCard'
import { ArrowRight, Check } from 'lucide-react'
interface KeyResult {
  value: string
  label: string
}

interface ImplementationStep {
  text: string
}

interface CaseStudy {
  id: string
  industry: string
  title: string
  tag: string
  description: string
  image: string
  solution: string
  keyResults: KeyResult[]
  implementationSteps: ImplementationStep[]
}

const CaseStudyCard: React.FC<CaseStudy> = ({
    industry,
    title,
    tag,
    description,
    image,
    solution,
    keyResults,
    implementationSteps
  }) => {
    return (
      <div className="bg-gray-50 border border-gray-200 shadow-sm p-6 relative group hover:shadow-md transition-shadow">
        {/* Corner decorative borders */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-secondary-500/30"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-secondary-500/30"></div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Image and Results Column */}
          <div className="md:w-1/3">
            <div className="relative h-52 overflow-hidden border border-gray-200">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-100 border border-gray-200 p-4 mt-4">
              <div className="text-sm font-medium text-gray-700">Key Results</div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {keyResults.map((result, index) => (
                  <KeyResultCard key={index} {...result} />
                ))}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:w-2/3">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-xs text-gray-500 font-mono uppercase mb-1">
                  {industry}
                </div>
                <h3 className="text-xl font-bold text-primary-900">
                  {title}
                </h3>
              </div>
              <div className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-sm">
                {tag}
              </div>
            </div>

            <p className="text-gray-600 mb-4">{description}</p>

            <div className="mb-4">
              <div className="font-medium text-primary-900 mb-2">
                Solution Implemented
              </div>
              <p className="text-gray-600 text-sm">{solution}</p>
            </div>

            <div className="mb-4">
              <div className="font-medium text-primary-900 mb-2">
                Implementation Approach
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                {implementationSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-4 h-4 text-secondary-600 mt-0.5 mr-2" />
                    <span>{step.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className="inline-flex items-center text-secondary-600 hover:text-secondary-700 transition-colors text-sm font-medium"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    )
  }

export default CaseStudyCard
