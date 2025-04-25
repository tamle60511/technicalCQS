import React, { ReactNode } from 'react';
import { MoveRight, Zap, LayoutGrid, Droplet, Thermometer, Gauge, Cylinder, Ruler, Shield } from 'lucide-react';

// Define interfaces for structured data
interface ProcessStep {
  number: number;
  title: string;
}

interface ProcessDetail {
  number: number;
  title: string;
  description: string;
}

// Create a component for process steps with proper typing
const ProcessStepItem: React.FC<ProcessStep> = ({ number, title }) => (
  <div className="flex flex-col items-center relative">
    <div className="w-10 h-10 rounded-full bg-white z-10 border-2 border-primary-200 flex items-center justify-center text-primary-600 mb-2">
      {number}
    </div>
    <div className="text-sm font-medium text-neutral-800">{title}</div>
  </div>
);

// Create a component for process details with proper typing
const ProcessDetailItem: React.FC<ProcessDetail> = ({ number, title, description }) => (
  <div className="bg-neutral-50 p-4 border-l-2 border-primary-500">
    <div className="font-medium text-neutral-900">{number}. {title}</div>
    <p className="text-sm text-neutral-600">{description}</p>
  </div>
);

// Data for process steps
const processSteps: string[] = [
  "Mold Preparation",
  "Metal Melting",
  "Injection",
  "Solidification",
  "Ejection",
  "Post-Processing"
];

// Data for process details
const processDetails: { title: string; description: string }[] = [
  {
    title: "Mold Preparation",
    description: "Our steel dies are precision-engineered with complex cooling channels and coated with specialized die lubricants. Temperature pre-conditioning at 180-200°C ensures optimal filling dynamics and surface finish quality."
  },
  {
    title: "Metal Melting",
    description: "Premium aluminum alloys (ADC12, A380, A383, A356) are melted in energy-efficient furnaces at 660-720°C. The molten metal undergoes degassing treatment to remove hydrogen and non-metallic inclusions, ensuring casting integrity."
  },
  {
    title: "Injection",
    description: "Utilizing our 250-1,650 ton machines, molten aluminum is injected into the die cavity at velocities up to 80 m/s and pressures between 70-120 MPa. This high-speed, high-pressure injection enables the production of complex, thin-walled components."
  },
  {
    title: "Solidification",
    description: "Controlled cooling through our advanced thermal management system with pressurization at 90-100 MPa during solidification. This pressure minimizes porosity and ensures excellent mechanical properties with density up to 99.8% of theoretical."
  },
  {
    title: "Ejection",
    description: "Precision ejection system removes solidified components from the die with synchronized pin movement to prevent distortion. Our robotic extraction systems maintain part integrity while optimizing cycle times."
  },
  {
    title: "Post-Processing",
    description: "Components undergo trimming, shot blasting, and precision CNC machining. Quality verification includes 3D dimensional scanning, X-ray inspection for internal integrity, and mechanical property testing to meet automotive industry requirements."
  }
];

// Introduction paragraphs
const introText: string[] = [
  "High Pressure Die Casting (HPDC) is an advanced manufacturing process for producing complex aluminum components with excellent dimensional accuracy and surface quality. It involves injecting molten aluminum into steel dies under extreme pressure, making it ideal for high-volume production of lightweight, thin-walled components with tight tolerances.",
  "At CQS, our HPDC technology employs cutting-edge automation, precise thermal management, and industry-leading pressurization techniques. Our process delivers components with superior mechanical properties, minimal porosity, and exceptional surface finish—critical requirements for automotive structural and powertrain applications, including emerging EV battery housings and motor components."
];

interface HPDCOverviewProps {
  id?: string;
  className?: string;
}

const TechnologyOverview: React.FC<HPDCOverviewProps> = ({
  id = "learn-more",
  className = ""
}) => {
  return (
    <section id={id} className={`py-16 relative ${className}`}>
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
              <span className="text-sm font-medium tracking-wider uppercase">Process Overview</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              High Pressure <span className="text-primary-600">Die Casting Technology</span>
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
                  <Zap className="w-4.5 h-4.5 text-primary-600" />
                </div>
                What is High Pressure Die Casting?
              </h3>

              {introText.map((paragraph, index) => (
                <p key={`intro-${index}`} className="text-neutral-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              <div className="text-xs text-neutral-500 font-mono flex items-center mt-6">
                <Gauge className="w-3.5 h-3.5 mr-2 text-primary-500" />
                <span>REF: CQS-HPDC-2023</span>
              </div>
            </div>

            {/* HPDC Process Flow */}
            <div className="bg-white border border-neutral-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary-100 border border-primary-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <LayoutGrid className="w-4.5 h-4.5 text-primary-600" />
                </div>
                HPDC Process Flow
              </h3>

              <div className="relative py-8">
                {/* Process flow arrow */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-100 hidden md:block"></div>

                {/* Process steps */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-0">
                  {processSteps.map((step, index) => (
                    <ProcessStepItem
                      key={`step-${index}`}
                      number={index + 1}
                      title={step}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h4 className="text-lg font-bold text-neutral-900 mb-4">Process Details</h4>

                <div className="space-y-4">
                  {processDetails.map((detail, index) => (
                    <ProcessDetailItem
                      key={`detail-${index}`}
                      number={index + 1}
                      title={detail.title}
                      description={detail.description}
                    />
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

export default TechnologyOverview;
