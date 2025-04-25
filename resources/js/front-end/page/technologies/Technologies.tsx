import React from 'react';
import { Layers, CheckCircle, ArrowRight } from 'lucide-react';

// Interface for technology feature
interface TechnologyFeature {
  id: string;
  text: string;
}

// Interface for technology data
interface Technology {
  id: string;
  title: string;
  features: TechnologyFeature[];
  imageSrc: string;
  imageAlt: string;
  referenceCode: string;
}

// Component props interface
interface TechnologiesProps {
  id?: string;
  className?: string;
}

// Feature item component
const FeatureItem: React.FC<{ feature: TechnologyFeature }> = ({ feature }) => (
  <div className="flex items-start">
    <div className="w-5 h-5 bg-primary-50 border border-primary-200 flex items-center justify-center rounded-sm mr-2 flex-shrink-0 mt-0.5">
      <CheckCircle className="w-3 h-3 text-primary-500" />
    </div>
    <div className="text-sm text-neutral-600">{feature.text}</div>
  </div>
);

// Technology card component
const TechnologyCard: React.FC<{ technology: Technology }> = ({ technology }) => (
  <div className="bg-white p-6 border border-neutral-200 shadow-sm relative group hover:shadow-md transition-all duration-300">
    <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>
    <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>

    <h3 className="text-xl font-bold text-neutral-900 mb-4">{technology.title}</h3>

    <div className="space-y-3 mb-4">
      {technology.features.map(feature => (
        <FeatureItem key={feature.id} feature={feature} />
      ))}
    </div>

    <img
      src={technology.imageSrc}
      alt={technology.imageAlt}
      className="w-full h-48 object-cover mb-2"
    />

    <div className="text-xs font-mono text-neutral-500 mt-4">
      REF: {technology.referenceCode}
    </div>
  </div>
);

// Technologies data
const technologiesData: Technology[] = [
  {
    id: "conventional-hpdc",
    title: "Conventional HPDC",
    features: [
      { id: "conv-1", text: "Injection pressures up to 120 MPa" },
      { id: "conv-2", text: "Dimensional accuracy of ±0.05mm" },
      { id: "conv-3", text: "High production rates (45-60 sec cycles)" },
      { id: "conv-4", text: "Wall thickness down to 0.8mm" }
    ],
    imageSrc: "https://images.unsplash.com/photo-1579781353979-874318e5f5f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "Conventional HPDC Process",
    referenceCode: "CQS-HPDC-STD-2023"
  },
  {
    id: "vacuum-hpdc",
    title: "Vacuum-Assisted HPDC",
    features: [
      { id: "vac-1", text: "Reduced porosity (<1% gas content)" },
      { id: "vac-2", text: "Enhanced mechanical properties" },
      { id: "vac-3", text: "Heat-treatable components" },
      { id: "vac-4", text: "Structural automotive applications" }
    ],
    imageSrc: "https://images.unsplash.com/photo-1562259929-b4e1fd0aae57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "Vacuum-Assisted HPDC Process",
    referenceCode: "CQS-HPDC-VAC-2023"
  }
];

const Technologies: React.FC<TechnologiesProps> = ({
  id = "technologies",
  className = ""
}) => {
  return (
    <section id={id} className={`py-16 bg-neutral-50 relative ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#ddd_50px,#ddd_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#ddd_50px,#ddd_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.3]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <Layers className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">Technologies</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              Our <span className="text-primary-600">Die Casting Technologies</span>
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologiesData.map(technology => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>

          {/* CTA Area */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 border border-neutral-300 bg-white relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary-500"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary-500"></div>

              <h3 className="text-xl font-bold text-neutral-900 mb-3">Optimize Your Components with HPDC Technology</h3>
              <p className="text-neutral-600 mb-6">Our engineering team can help you select the optimal die casting process for your automotive components, balancing performance requirements, design complexity, and production volumes.</p>

              <a href="#contact" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 inline-flex items-center group relative">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Request Technical Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
