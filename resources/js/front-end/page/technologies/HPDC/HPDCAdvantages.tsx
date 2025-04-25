
import React from 'react';
import { Activity, Check } from 'lucide-react';

interface Advantage {
  title: string;
  description: string;
}

interface HPDCAdvantagesProps {
  className?: string;
  sectionTitle?: string;
  title?: React.ReactNode;
  advantages?: Advantage[];
}

const HPDCAdvantages: React.FC<HPDCAdvantagesProps> = ({
  className = '',
  sectionTitle = 'Benefits',
  title = <>Key <span className="text-primary-600">Advantages</span> of HPDC</>,
  advantages = [
    {
      title: 'High Production Speed',
      description: 'Cycle times as low as 20-40 seconds per part, enabling high-volume production of complex components.'
    },
    {
      title: 'Excellent Dimensional Accuracy',
      description: 'Capable of achieving tight tolerances of ±0.1mm, ensuring consistent part quality.'
    },
    {
      title: 'Complex Geometries',
      description: 'Ability to produce intricate shapes and thin-walled sections (down to 0.5mm) not possible with other casting methods.'
    },
    {
      title: 'Superior Surface Finish',
      description: 'Produces smooth surfaces that often require minimal or no additional finishing.'
    },
    {
      title: 'Material Efficiency',
      description: 'Minimal material waste compared to machining processes, with recyclable runners and gates.'
    },
    {
      title: 'Cost-Effective at Scale',
      description: 'While initial tooling costs are high, the per-part cost becomes highly economical at volume production.'
    }
  ]
}) => {
  return (
    <section className={`py-16 bg-white relative ${className}`}>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <Activity className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              {title}
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={`advantage-${index}`} className="flex items-start">
                  <div className="w-6 h-6 rounded-sm bg-primary-50 border border-primary-200 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">{advantage.title}</div>
                    <p className="text-sm text-neutral-600 mt-1">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HPDCAdvantages;
