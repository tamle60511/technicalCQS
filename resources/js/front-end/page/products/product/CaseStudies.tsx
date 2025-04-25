
import React from 'react';
import { Folder, Check, ArrowRight } from 'lucide-react';

// Types and Interfaces
interface KeyResult {
  id: string;
  value: string;
  label: string;
}

interface ImplementationStep {
  id: string;
  text: string;
}

interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  imageSrc: string;
  solutionTag: string;
  description: string;
  solution: string;
  implementationSteps: ImplementationStep[];
  keyResults: KeyResult[];
  readMoreLink: string;
}

interface CaseStudiesProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  caseStudies?: CaseStudy[];
  viewAllLink?: string;
}

// Reusable Components
const SectionTitle: React.FC<{
  icon: React.ReactNode;
  subtitle: string;
  title: React.ReactNode;
  description?: string;
}> = ({ icon, subtitle, title, description }) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
        {icon}
        <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
      </div>

      <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
        {title}
      </h2>

      <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
        <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
      </div>

      {description && (
        <p className="text-neutral-600 max-w-3xl text-center mb-10">
          {description}
        </p>
      )}
    </div>
  );
};

const KeyResultsGrid: React.FC<{ results: KeyResult[] }> = ({ results }) => {
  return (
    <div className="bg-neutral-100 border border-neutral-200 p-4 mt-4">
      <div className="text-sm font-medium text-neutral-700">Key Results</div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {results.map(result => (
          <div key={result.id} className="text-center p-2 bg-white shadow-sm">
            <div className="text-primary-600 font-bold text-lg">{result.value}</div>
            <div className="text-neutral-600 text-xs">{result.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImplementationApproach: React.FC<{
  steps: ImplementationStep[]
}> = ({ steps }) => {
  return (
    <div className="mb-4">
      <div className="font-medium text-neutral-900 mb-2">Implementation Approach</div>
      <ul className="text-sm text-neutral-600 space-y-1">
        {steps.map(step => (
          <li key={step.id} className="flex items-start">
            <Check className="w-4 h-4 text-primary-600 mt-0.5 mr-2" />
            <span>{step.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  return (
    <div className="bg-white border border-neutral-200 shadow-sm p-6 relative">
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-500/30"></div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="relative h-52 overflow-hidden border border-neutral-200">
            <img
              src={study.imageSrc}
              alt={`${study.title} Case Study`}
              className="w-full h-full object-cover"
            />
          </div>

          <KeyResultsGrid results={study.keyResults} />
        </div>

        <div className="md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs text-neutral-500 font-mono uppercase mb-1">{study.industry}</div>
              <h3 className="text-xl font-bold text-neutral-900">{study.title}</h3>
            </div>
            <div className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-sm">
              {study.solutionTag}
            </div>
          </div>

          <p className="text-neutral-600 mb-4">
            {study.description}
          </p>

          <div className="mb-4">
            <div className="font-medium text-neutral-900 mb-2">Solution Implemented</div>
            <p className="text-neutral-600 text-sm">
              {study.solution}
            </p>
          </div>

          <ImplementationApproach steps={study.implementationSteps} />

          <a href={study.readMoreLink} className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium">
            Read Full Case Study
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ViewAllButton: React.FC<{ link: string }> = ({ link }) => {
  return (
    <div className="flex justify-center mt-8">
      <a href={link} className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors border border-neutral-700 inline-flex items-center group relative">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        View All Case Studies
        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

// Default data
const defaultCaseStudies: CaseStudy[] = [
  {
    id: 'case-study-1',
    industry: 'Aerospace Industry',
    title: 'AeroTech Regional Jet Weight Reduction Program',
    imageSrc: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    solutionTag: 'Carbon Fiber Solution',
    description: 'AeroTech\'s regional jet program faced significant challenges in meeting new fuel efficiency standards while maintaining passenger capacity and range requirements. The engineering team needed to achieve substantial weight reduction without compromising structural integrity or safety margins.',
    solution: 'Our team developed a custom carbon fiber composite system for secondary structures and interior components, replacing traditional aluminum and metal parts. The program focused on high-impact areas where weight savings would deliver the greatest performance benefits.',
    implementationSteps: [
      {
        id: 'step1-1',
        text: 'Complete material engineering and testing program to meet aviation certification requirements'
      },
      {
        id: 'step1-2',
        text: 'Phased implementation starting with non-critical components to validate performance'
      },
      {
        id: 'step1-3',
        text: 'Collaborative design optimization to maximize weight savings while ensuring manufacturability'
      }
    ],
    keyResults: [
      { id: 'result1-1', value: '24%', label: 'Weight Reduction' },
      { id: 'result1-2', value: '15%', label: 'Fuel Savings' },
      { id: 'result1-3', value: '8.5%', label: 'Range Increase' },
      { id: 'result1-4', value: '3yr', label: 'ROI Timeline' }
    ],
    readMoreLink: '#'
  },
  {
    id: 'case-study-2',
    industry: 'Manufacturing Industry',
    title: 'NexusManufacturing Robotic Arm Optimization',
    imageSrc: 'https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    solutionTag: 'Aluminum Alloy Solution',
    description: 'NexusManufacturing\'s high-speed packaging line required increased throughput while maintaining precision. The existing steel robotic arm components created limitations in acceleration and deceleration rates, restricting overall system performance.',
    solution: 'We developed custom aluminum alloy components with optimized internal geometries that reduced weight while maintaining the required structural rigidity. The redesigned arm assembly incorporated special vibration damping features to enhance precision.',
    implementationSteps: [
      {
        id: 'step2-1',
        text: 'Comprehensive dynamic load analysis to identify optimization opportunities'
      },
      {
        id: 'step2-2',
        text: 'Custom alloy formulation to meet specific strength and vibration requirements'
      },
      {
        id: 'step2-3',
        text: 'Integrated implementation with minimal production line disruption'
      }
    ],
    keyResults: [
      { id: 'result2-1', value: '35%', label: 'Energy Savings' },
      { id: 'result2-2', value: '42%', label: 'Weight Reduction' },
      { id: 'result2-3', value: '27%', label: 'Productivity Gain' },
      { id: 'result2-4', value: '18mo', label: 'ROI Timeline' }
    ],
    readMoreLink: '#'
  }
];

// Main Component
const CaseStudies: React.FC<CaseStudiesProps> = ({
  title = <>Client <span className="text-primary-600">Case Studies</span></>,
  subtitle = "Success Stories",
  description = "Discover how our lightweight material solutions have delivered measurable benefits across diverse applications.",
  caseStudies = defaultCaseStudies,
  viewAllLink = "#"
}) => {
  return (
    <section className="py-16 bg-neutral-50 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<Folder className="w-4 h-4 mr-2" />}
            subtitle={subtitle}
            title={title}
            description={description}
          />

          {/* Case Studies */}
          <div className="space-y-8">
            {caseStudies.map(study => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>

          {/* More Case Studies Button */}
          <ViewAllButton link={viewAllLink} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
