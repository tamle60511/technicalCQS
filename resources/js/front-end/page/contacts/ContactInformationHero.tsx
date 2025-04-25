
import React from 'react';
import { MessageSquare, Clock, Globe, Headphones } from 'lucide-react';

// Types and Interfaces
interface ContactMetric {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ContactInformationHeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  contactMetrics?: ContactMetric[];
}

// Technical Corner Accent Component
const TechnicalCornerAccent: React.FC<{ position: 'top-left' | 'bottom-right' }> = ({ position }) => {
  const isTopLeft = position === 'top-left';

  return (
    <div
      className={`absolute ${isTopLeft ? 'top-0 left-0' : 'bottom-0 right-0'} w-32 h-32
      ${isTopLeft ? 'border-t-2 border-l-2' : 'border-b-2 border-r-2'} border-primary-600/30`}
    >
      <div
        className={`absolute ${isTopLeft ? 'top-4 left-4' : 'bottom-4 right-4'} w-8 h-8
        ${isTopLeft ? 'border-t border-l' : 'border-b border-r'} border-primary-600/40`}
      ></div>
    </div>
  );
};

// Technical Measurement Marks Component
const TechnicalMeasurementMarks: React.FC = () => {
  // Create an array of 10 items for the measurement marks
  const marks = Array.from({ length: 10 }, (_, i) => ({
    id: `mark-${i}`,
    hasTallMark: (i + 1) % 5 === 0 // Every 5th mark is taller
  }));

  return (
    <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30">
      {marks.map((mark, index) => (
        <div key={mark.id} className="flex-1 border-r border-primary-500/20 relative">
          {mark.hasTallMark && (
            <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-500/50"></div>
          )}
        </div>
      ))}
    </div>
  );
};

// Technical Label Component
const TechnicalLabel: React.FC<{ subtitle: string }> = ({ subtitle }) => {
  return (
    <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
      <MessageSquare className="w-4 h-4 mr-2" />
      <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
    </div>
  );
};

// Page Title Component
const PageTitle: React.FC<{ title: React.ReactNode }> = ({ title }) => {
  return (
    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
      {title}
    </h1>
  );
};

// Contact Metric Card Component
const ContactMetricCard: React.FC<{ metric: ContactMetric }> = ({ metric }) => {
  return (
    <div className="bg-neutral-800/50 border border-neutral-700 p-6 text-center relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/40"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/40"></div>

      <div className="w-14 h-14 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
        {metric.icon}
      </div>
      <div className="text-lg font-bold text-white mb-1">{metric.title}</div>
      <div className="text-neutral-400 text-sm">{metric.description}</div>
    </div>
  );
};

// Default contact metrics
const defaultContactMetrics: ContactMetric[] = [
  {
    id: 'response-time',
    icon: <Clock className="w-7 h-7 text-primary-500" />,
    title: 'Response Time',
    description: 'Within 24 hours'
  },
  {
    id: 'global-support',
    icon: <Globe className="w-7 h-7 text-primary-500" />,
    title: 'Global Support',
    description: '12 Countries worldwide'
  },
  {
    id: '24-7-support',
    icon: <Headphones className="w-7 h-7 text-primary-500" />,
    title: '24/7 Support',
    description: 'For priority customers'
  }
];

// Main Component
const ContactInformationHero: React.FC<ContactInformationHeroProps> = ({
  title = <>Get In <span className="text-primary-500 relative">Touch
          <div className="absolute -top-2 -right-3 text-xs text-primary-400 font-mono">[CONTACT]</div>
        </span></>,
  subtitle = "Contact Information",
  description = "We're here to assist you with any inquiries, requests, or technical support needs. Connect with our team through any of our communication channels or visit us at one of our locations.",
  contactMetrics = defaultContactMetrics
}) => {
  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical measurement marks */}
      <TechnicalMeasurementMarks />

      {/* Technical corner accents */}
      <TechnicalCornerAccent position="top-left" />
      <TechnicalCornerAccent position="bottom-right" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Technical label */}
            <TechnicalLabel subtitle={subtitle} />

            <PageTitle title={title} />

            <div className="w-20 h-0.5 bg-neutral-700 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <p className="text-neutral-300 mb-8 text-center max-w-3xl">
              {description}
            </p>

            {/* Contact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
              {contactMetrics.map(metric => (
                <ContactMetricCard key={metric.id} metric={metric} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformationHero;
