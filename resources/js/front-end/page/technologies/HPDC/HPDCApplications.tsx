
import React from 'react';
import { Target, Plus, ArrowRight } from 'lucide-react';

interface ApplicationItem {
  name: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  referenceCode: string;
}

interface HPDCApplicationsProps {
  className?: string;
  sectionId?: string;
  sectionTitle?: string;
  title?: React.ReactNode;
  applications?: ApplicationItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

const HPDCApplications: React.FC<HPDCApplicationsProps> = ({
  className = '',
  sectionId = 'applications',
  sectionTitle = 'Applications',
  title = <>Common <span className="text-primary-600">HPDC Applications</span></>,
  applications = [
    {
      name: 'Automotive Components',
      features: [
        'Engine blocks and cylinder heads',
        'Transmission cases and clutch housings',
        'Structural components like shock towers and brackets',
        'Intake manifolds and fuel system components'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1569586046774-70d9a3d7222e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Automotive Components',
      referenceCode: 'HPDC-AUTO-APPS'
    },
    {
      name: 'Motorcycle Components',
      features: [
        'Engine cases and cylinder heads',
        'Wheel hubs and brake calipers',
        'Structural framework and swing arms',
        'Decorative elements and covers'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Motorcycle Components',
      referenceCode: 'HPDC-MOTO-APPS'
    }
  ],
  ctaTitle = 'Ready to Implement HPDC Technology?',
  ctaDescription = 'Our engineers can help you determine if HPDC is the right process for your component needs.',
  ctaButtonText = 'Request a Technical Consultation',
  ctaButtonHref = '#contact'
}) => {
  return (
    <section id={sectionId} className={`py-16 bg-neutral-50 relative ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#ddd_50px,#ddd_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#ddd_50px,#ddd_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.3]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <Target className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              {title}
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={`app-${index}`} className="bg-white p-6 border border-neutral-200 shadow-sm relative group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>

                <h3 className="text-xl font-bold text-neutral-900 mb-4">{app.name}</h3>

                <div className="space-y-3 mb-4">
                  {app.features.map((feature, featureIndex) => (
                    <div key={`feature-${index}-${featureIndex}`} className="flex items-start">
                      <div className="w-5 h-5 bg-primary-50 border border-primary-200 flex items-center justify-center rounded-sm mr-2 flex-shrink-0 mt-0.5">
                        <Plus className="w-3 h-3 text-primary-500" />
                      </div>
                      <div className="text-sm text-neutral-600">{feature}</div>
                    </div>
                  ))}
                </div>

                <img src={app.imageSrc} alt={app.imageAlt} className="w-full h-48 object-cover mb-2" />

                <div className="text-xs font-mono text-neutral-500 mt-4">
                  REF: {app.referenceCode}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Area */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 border border-neutral-300 bg-white relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary-500"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary-500"></div>

              <h3 className="text-xl font-bold text-neutral-900 mb-3">{ctaTitle}</h3>
              <p className="text-neutral-600 mb-6">{ctaDescription}</p>

              <a href={ctaButtonHref} className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 inline-flex items-center group relative">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {ctaButtonText}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HPDCApplications;
