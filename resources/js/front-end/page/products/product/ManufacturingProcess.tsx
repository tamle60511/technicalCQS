
import React from 'react';
import { Factory, BadgeCheck } from 'lucide-react';

// Types and Interfaces
interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  technicalSpec: string;
}

interface QualityCertification {
  id: string;
  title: string;
  description: string;
}

interface ManufacturingProcessProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  steps?: ProcessStep[];
  certifications?: QualityCertification[];
}

// Section Title Component
const SectionTitle: React.FC<{
  icon?: React.ReactNode;
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

// Process Step Component
const ProcessStep: React.FC<{
  step: ProcessStep;
  index: number;
}> = ({ step, index }) => {
  const isEven = index % 2 === 1;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      {isEven && <div className="hidden md:block md:w-[calc(50%-64px)] order-1"></div>}

      <div className="w-20 h-20 flex-shrink-0 bg-primary-50 border border-primary-300 rounded-full flex items-center justify-center z-10 order-1 md:order-2">
        <div className="text-2xl font-bold text-primary-600">{step.number}</div>
      </div>

      <div className={`bg-white border border-neutral-200 shadow-sm p-6 md:w-[calc(50%-64px)] order-2 ${isEven ? 'order-3' : 'md:text-right order-2'} md:self-center relative`}>
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/30"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/30"></div>

        <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
        <p className="text-neutral-600 mb-4">
          {step.description}
        </p>
        <div className="text-xs text-neutral-500 font-mono">{step.technicalSpec}</div>
      </div>

      {!isEven && <div className="hidden md:block md:w-[calc(50%-64px)] order-3"></div>}
    </div>
  );
};

// Certification Grid Item Component
const CertificationItem: React.FC<{
  certification: QualityCertification;
}> = ({ certification }) => {
  return (
    <div className="bg-white border border-primary-200 p-3 text-center">
      <div className="font-bold text-primary-600">{certification.title}</div>
      <div className="text-xs text-neutral-600">{certification.description}</div>
    </div>
  );
};

// Quality Assurance Component
const QualityAssurance: React.FC<{
  certifications: QualityCertification[];
}> = ({ certifications }) => {
  return (
    <div className="mt-16 bg-primary-50 border border-primary-200 p-6 relative">
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-400"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-400"></div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/4 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full border border-primary-300 flex items-center justify-center">
            <BadgeCheck className="w-12 h-12 text-primary-600" />
          </div>
        </div>

        <div className="md:w-3/4">
          <h3 className="text-xl font-bold text-neutral-900 mb-3">Quality Assurance & Certification</h3>
          <p className="text-neutral-600 mb-4">
            Our aluminum wheel systems exceed industry standards for quality and safety. Each wheel is rigorously tested and certified according to international regulations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertificationItem key={cert.id} certification={cert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Default data
const defaultSteps: ProcessStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Material Selection & Testing',
    description: 'We source premium-grade aluminum alloys (6061-T6, 7075-T6) and test them for purity, strength, and metallurgical properties before production.',
    technicalSpec: 'MATERIAL SPEC: ASTM B247, AMS-QQ-A-200/16'
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Advanced Forging & Casting',
    description: 'We employ low-pressure casting or forging techniques to create strong, lightweight wheel structures with optimized grain structure and mechanical properties.',
    technicalSpec: 'PROCESS: 10,000 PSI FORGING PRESSURE'
  },
  {
    id: 'step-3',
    number: '03',
    title: 'CNC Precision Machining',
    description: 'Computer-controlled 5-axis CNC machines precisely shape and finish each wheel to exact specifications, creating complex designs with tight tolerances.',
    technicalSpec: 'TOLERANCE: ±0.05mm PRECISION'
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Surface Treatment & Finishing',
    description: 'Multi-stage surface treatments, including anodizing, powder coating, or ceramic clear coating, enhance corrosion resistance and aesthetic appeal.',
    technicalSpec: 'COATING: 75-micron THICKNESS'
  },
  {
    id: 'step-5',
    number: '05',
    title: 'Rigorous Quality Testing',
    description: 'Each wheel undergoes impact testing, fatigue cycling, and dimensional verification to ensure it meets or exceeds industry standards for safety and performance.',
    technicalSpec: 'STANDARDS: JWL, VIA, TÜV, SAE J2530'
  }
];

const defaultCertifications: QualityCertification[] = [
  {
    id: 'cert-1',
    title: 'ISO 9001',
    description: 'Quality Management'
  },
  {
    id: 'cert-2',
    title: 'TÜV Certified',
    description: 'Safety Standards'
  },
  {
    id: 'cert-3',
    title: 'JWL/VIA',
    description: 'Japanese Specifications'
  },
  {
    id: 'cert-4',
    title: 'SAE J2530',
    description: 'Aftermarket Standards'
  }
];

// Main Component
const ManufacturingProcess: React.FC<ManufacturingProcessProps> = ({
  title = <>Advanced <span className="text-primary-600">Manufacturing Technology</span></>,
  subtitle = "Production Process",
  description = "Our precision manufacturing processes combine advanced engineering, quality materials, and rigorous testing to create industry-leading aluminum wheel systems.",
  steps = defaultSteps,
  certifications = defaultCertifications
}) => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<Factory className="w-4 h-4 mr-2" />}
            subtitle={subtitle}
            title={title}
            description={description}
          />

          {/* Manufacturing Process Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-300 -ml-[0.5px] hidden md:block"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <ProcessStep key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* Quality Assurance */}
          <QualityAssurance certifications={certifications} />
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
