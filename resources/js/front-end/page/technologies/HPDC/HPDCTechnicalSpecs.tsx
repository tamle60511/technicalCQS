
import React from 'react';
import { Boxes, Settings, ShieldCheck, Download, Clock } from 'lucide-react';

interface SpecificationItem {
  label: string;
  value: string;
}

interface SpecificationsGroup {
  title: string;
  icon: React.ReactNode;
  items: SpecificationItem[];
}

interface HPDCTechnicalSpecsProps {
  className?: string;
  sectionId?: string;
  documentCode?: string;
  version?: string;
  title?: React.ReactNode;
  specifications?: SpecificationsGroup[];
  downloadButtonText?: string;
  downloadButtonHref?: string;
  lastUpdated?: string;
  referenceCode?: string;
}

const HPDCTechnicalSpecs: React.FC<HPDCTechnicalSpecsProps> = ({
  className = '',
  sectionId = 'technical-specs',
  documentCode = 'TECHNICAL.SPECIFICATIONS.HPDC',
  version = '[v.2.1]',
  title = <>Detailed <span className="text-primary-500">Technical Specifications</span></>,
  specifications = [
    {
      title: 'Machine Specifications',
      icon: <Settings className="w-5 h-5 mr-2 text-primary-500" />,
      items: [
        { label: 'Machine Type', value: 'Cold Chamber HPDC' },
        { label: 'Locking Force Range', value: '400 - 1,600 Tons' },
        { label: 'Shot Capacity', value: '1.5 - 15 kg Al' },
        { label: 'Injection Pressure', value: '70 - 140 MPa' },
        { label: 'Injection Speed', value: '30 - 100 m/s' }
      ]
    },
    {
      title: 'Casting Specifications',
      icon: <ShieldCheck className="w-5 h-5 mr-2 text-primary-500" />,
      items: [
        { label: 'Material', value: 'Al Alloys (ADC12, A380, A356, A413)' },
        { label: 'Casting Weight', value: '50g - 10kg' },
        { label: 'Wall Thickness', value: '0.5 - 10 mm' },
        { label: 'Dimensional Tolerance', value: '±0.1mm' },
        { label: 'Surface Finish', value: 'Ra 0.8 - 3.2 μm' }
      ]
    }
  ],
  downloadButtonText = 'Download Full Specifications',
  downloadButtonHref = '#download',
  lastUpdated = '2023-08-15',
  referenceCode = 'HPDC-TECH-SPEC-2023'
}) => {
  return (
    <section id={sectionId} className={`py-16 md:py-20 bg-neutral-900 text-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30">
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary-600/40"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary-600/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Technical document code */}
          <div className="inline-flex items-center bg-neutral-800/80 text-white px-3 py-1 mb-8 border-l-2 border-primary-600 text-xs font-mono">
            <Boxes className="w-3 h-3 mr-2 text-primary-500" />
            <span>{documentCode}</span>
          </div>

          <h2 className="text-3xl font-bold mb-6 relative">
            {title}
            <div className="absolute -top-3 -right-3 text-xs text-primary-400 font-mono opacity-60 hidden md:block">{version}</div>
          </h2>

          <div className="w-20 h-0.5 bg-neutral-700 mx-auto mb-10 relative">
            <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
            {specifications.map((specGroup, groupIndex) => (
              <div key={`spec-group-${groupIndex}`} className="bg-neutral-800/50 border border-neutral-700 p-5 relative">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/40"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/40"></div>

                <h3 className="text-lg font-bold mb-4 flex items-center">
                  {specGroup.icon}
                  {specGroup.title}
                </h3>

                <div className="space-y-3">
                  {specGroup.items.map((item, itemIndex) => (
                    <div
                      key={`spec-item-${groupIndex}-${itemIndex}`}
                      className={`flex justify-between ${
                        itemIndex < specGroup.items.length - 1 ? 'border-b border-neutral-700 pb-2' : ''
                      }`}
                    >
                      <span className="text-neutral-400 text-sm">{item.label}</span>
                      <span className="text-white text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Download button */}
          <a href={downloadButtonHref} className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors border border-neutral-600 hover:border-neutral-500 group relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {downloadButtonText}
            <Download className="ml-2 w-5 h-5" />
          </a>

          {/* Technical footer */}
          <div className="mt-12 text-xs font-mono text-neutral-600 flex items-center justify-center">
            <Clock className="w-3 h-3 mr-1 text-primary-500/50" />
            <span>DOC UPDATED: {lastUpdated}</span>
            <span className="mx-2">|</span>
            <span>REF: {referenceCode}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HPDCTechnicalSpecs;
