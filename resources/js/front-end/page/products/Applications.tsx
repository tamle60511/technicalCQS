
import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

// Types and Interfaces
interface ApplicationBenefit {
  id: string;
  title: string;
  description: string;
}

interface ApplicationCard {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  benefits: ApplicationBenefit[];
  compatibleSeries: string;
  badge: string;
}

interface ApplicationsSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  applications?: ApplicationCard[];
}

// Section Title Component (reused from previous component)
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

// Application Benefit Item Component
const BenefitItem: React.FC<{ benefit: ApplicationBenefit }> = ({ benefit }) => {
  return (
    <div className="flex items-start">
      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
      <div>
        <div className="font-medium text-neutral-900">{benefit.title}</div>
        <div className="text-sm text-neutral-600">{benefit.description}</div>
      </div>
    </div>
  );
};

// Application Card Component
const ApplicationCard: React.FC<{ application: ApplicationCard }> = ({ application }) => {
  return (
    <div className="bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/30"></div>

      <div className="relative h-60 overflow-hidden">
        <img
          src={application.imageSrc}
          alt={application.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{application.title}</h3>
          <div className="w-12 h-0.5 bg-primary-500 my-2"></div>
          <p className="text-white/80 text-sm">{application.subtitle}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-3 mb-4">
          {application.benefits.map((benefit) => (
            <BenefitItem key={benefit.id} benefit={benefit} />
          ))}
        </div>

        <div className="text-sm text-primary-600 font-medium flex items-center">
          <div className="mr-2">Compatible with {application.compatibleSeries}</div>
          <div className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded-sm text-xs">{application.badge}</div>
        </div>
      </div>
    </div>
  );
};

// Default applications data
const defaultApplications: ApplicationCard[] = [
  {
    id: "app-1",
    title: "Automotive Applications",
    subtitle: "Performance, luxury, and consumer vehicles",
    imageSrc: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      {
        id: "app1-benefit1",
        title: "Enhanced Performance",
        description: "Reduced unsprung weight improves handling, acceleration, and braking response."
      },
      {
        id: "app1-benefit2",
        title: "Improved Fuel Efficiency",
        description: "Lightweight design contributes to overall vehicle efficiency and range extension for EVs."
      },
      {
        id: "app1-benefit3",
        title: "Premium Aesthetics",
        description: "Enhanced vehicle appearance with precision-machined designs and premium finishes."
      }
    ],
    compatibleSeries: "AL-P Series",
    badge: "OEM APPROVED"
  },
  {
    id: "app-2",
    title: "Commercial Transport",
    subtitle: "Trucks, fleets, and delivery vehicles",
    imageSrc: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      {
        id: "app2-benefit1",
        title: "Payload Optimization",
        description: "Reduced wheel weight increases available payload capacity for improved efficiency."
      },
      {
        id: "app2-benefit2",
        title: "Fuel Cost Reduction",
        description: "Weight savings contribute to significant fuel economy improvements for fleet operations."
      },
      {
        id: "app2-benefit3",
        title: "Enhanced Durability",
        description: "Specialized alloys and coatings provide extended service life in demanding conditions."
      }
    ],
    compatibleSeries: "AL-C Series",
    badge: "FLEET TESTED"
  },
  {
    id: "app-3",
    title: "Off-Road & Adventure",
    subtitle: "SUVs, trucks, and specialized vehicles",
    imageSrc: "https://images.unsplash.com/photo-1626663003993-d9c21a5fa5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      {
        id: "app3-benefit1",
        title: "Impact Resistance",
        description: "Reinforced designs provide superior durability in harsh off-road environments."
      },
      {
        id: "app3-benefit2",
        title: "Terrain Adaptability",
        description: "Enhanced wheel strength without excessive weight for optimal off-road performance."
      },
      {
        id: "app3-benefit3",
        title: "Beadlock Compatibility",
        description: "Specialized designs for true and simulated beadlock configurations for extreme conditions."
      }
    ],
    compatibleSeries: "AL-X Series",
    badge: "TRAIL RATED"
  },
  {
    id: "app-4",
    title: "Performance Motorsports",
    subtitle: "Racing, track, and high-performance applications",
    imageSrc: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      {
        id: "app4-benefit1",
        title: "Ultra-Lightweight Design",
        description: "Competition-grade aluminum alloys with maximum weight reduction for racing applications."
      },
      {
        id: "app4-benefit2",
        title: "Superior Heat Management",
        description: "Advanced cooling designs for brake systems during intense track conditions."
      },
      {
        id: "app4-benefit3",
        title: "Racing Certification",
        description: "Meets or exceeds requirements for various motorsport sanctioning bodies."
      }
    ],
    compatibleSeries: "AL-P Series",
    badge: "COMPETITION GRADE"
  }
];

// Main Component
const Applications: React.FC<ApplicationsSectionProps> = ({
  title = <>Applications & <span className="text-primary-600">Use Cases</span></>,
  subtitle = "Industry Solutions",
  description = "Our aluminum wheel systems are engineered for diverse applications, providing industry-specific solutions across multiple sectors.",
  applications = defaultApplications
}) => {
  return (
    <section className="py-16 bg-white relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<Target className="w-4 h-4 mr-2" />}
            subtitle={subtitle}
            title={title}
            description={description}
          />

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map(application => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
