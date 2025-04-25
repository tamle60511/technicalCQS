
import React from 'react';
import { MoveRight, FlaskConical, LayoutGrid } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface HPDCOverviewProps {
  className?: string;
  sectionId?: string;
  sectionTitle?: string;
  title?: React.ReactNode;
  introTitle?: string;
  introDescription?: string[];
  processTitle?: string;
  processSteps?: ProcessStep[];
  referenceCode?: string;
}

const HPDCOverview: React.FC<HPDCOverviewProps> = ({
  className = '',
  sectionId = 'learn-more',
  sectionTitle = 'Process Overview',
  title = <>HPDC <span className="text-primary-600">Technology Process</span></>,
  introTitle = 'What is High Pressure Die Casting?',
  introDescription = [
    'High Pressure Die Casting (HPDC) is an efficient manufacturing process for producing complex, dimensionally accurate metal components. It involves injecting molten metal under high pressure into a steel mold cavity. The pressure is maintained until the casting solidifies, creating strong parts with excellent surface finish and dimensional accuracy.',
    'This process is ideal for high-volume production of complex aluminum components that require tight tolerances, thin walls, and excellent mechanical properties.'
  ],
  processTitle = 'HPDC Process Flow',
  processSteps = [
    {
      number: 1,
      title: 'Mold Preparation',
      description: 'The steel mold (die) is prepared by applying lubricant coating, ensuring proper die temperature (150-200°C), and closing the die halves.'
    },
    {
      number: 2,
      title: 'Metal Melting',
      description: 'Aluminum alloy is melted in a furnace to the required temperature (typically 650-700°C) and treated to remove impurities.'
    },
    {
      number: 3,
      title: 'Injection',
      description: 'Molten metal is injected into the die cavity at high speed (30-100 m/s) and pressure (70-140 MPa), filling even the smallest details of the mold.'
    },
    {
      number: 4,
      title: 'Cooling',
      description: 'The metal solidifies under pressure, maintaining dimensional accuracy and ensuring excellent surface finish.'
    },
    {
      number: 5,
      title: 'Ejection',
      description: 'Once solidified, the die opens and ejector pins push the casting out of the die cavity.'
    },
    {
      number: 6,
      title: 'Finishing',
      description: 'Excess material (runners, overflows, and flash) is removed, and the part undergoes finishing operations as required.'
    }
  ],
  referenceCode = 'HPDC-TECH-2023'
}) => {
  return (
    <section id={sectionId} className={`py-16 relative ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-12 right-12 w-24 h-24 border-t border-r border-neutral-300 hidden lg:block"></div>
      <div className="absolute bottom-12 left-12 w-24 h-24 border-b border-l border-neutral-300 hidden lg:block"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <MoveRight className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              {title}
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>

          <div className="space-y-10">
            {/* Introduction */}
            <div className="bg-white border border-neutral-200 p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-500/30"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-500/30"></div>

              <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary-100 border border-primary-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <FlaskConical className="w-4.5 h-4.5 text-primary-600" />
                </div>
                {introTitle}
              </h3>

              {introDescription.map((paragraph, index) => (
                <p key={`intro-paragraph-${index}`} className="text-neutral-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              <div className="text-xs text-neutral-500 font-mono flex items-center mt-6">
                <MoveRight className="w-3.5 h-3.5 mr-2 text-primary-500" />
                <span>REF: {referenceCode}</span>
              </div>
            </div>

            {/* HPDC Process Flow */}
            <div className="bg-white border border-neutral-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary-100 border border-primary-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <LayoutGrid className="w-4.5 h-4.5 text-primary-600" />
                </div>
                {processTitle}
              </h3>

              <div className="relative py-8">
                {/* Process flow arrow */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-100 hidden md:block"></div>

                {/* Process steps */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-0">
                  {processSteps.map((step) => (
                    <div key={`process-step-${step.number}`} className="flex flex-col items-center relative">
                      <div className="w-10 h-10 rounded-full bg-white z-10 border-2 border-primary-200 flex items-center justify-center text-primary-600 mb-2">
                        {step.number}
                      </div>
                      <div className="text-sm font-medium text-neutral-800">{step.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h4 className="text-lg font-bold text-neutral-900 mb-4">Process Details</h4>

                <div className="space-y-4">
                  {processSteps.map((step) => (
                    <div key={`process-detail-${step.number}`} className="bg-neutral-50 p-4 border-l-2 border-primary-500">
                      <div className="font-medium text-neutral-900">{step.number}. {step.title}</div>
                      <p className="text-sm text-neutral-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HPDCOverview;
