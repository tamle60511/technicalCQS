
import React from 'react';
import { Boxes, ArrowRight, Image as ImageIcon, Gauge, CheckCircle, Settings, Network } from 'lucide-react';

// Define types for the spec objects
type SpecIconType = 'gauge' | 'checkCircle' | 'settings' | 'network';

interface Specification {
  icon: SpecIconType;
  label: string;
  value: string;
}

// Props interface
interface TechnologyHeroProps {
  labelText?: string;
  title?: string;
  titleHighlight?: string;
  acronym?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageRefCode?: string;
  specs?: Specification[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

// Simple icon mapping
const icons: Record<SpecIconType, React.ReactElement> = {
  gauge: <Gauge className="w-3.5 h-3.5 text-primary-400" />,
  checkCircle: <CheckCircle className="w-3.5 h-3.5 text-primary-400" />,
  settings: <Settings className="w-3.5 h-3.5 text-primary-400" />,
  network: <Network className="w-3.5 h-3.5 text-primary-400" />
};

const AppHero: React.FC<TechnologyHeroProps> = (props) => {
  const {
    labelText = 'Manufacturing Technology',
    title = 'Technology',
    titleHighlight = '',
    acronym = '',
    description = '',
    imageSrc = '',
    imageAlt = 'Technology image',
    imageCaption = '',
    imageRefCode = '',
    specs = [],
    primaryButtonText = 'Learn More',
    primaryButtonHref = '#learn-more',
    secondaryButtonText = 'View Process Gallery',
    secondaryButtonHref = '#process-gallery',
    className = ''
  } = props;

  return (
    <section className={`relative overflow-hidden bg-neutral-900 text-white ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30">
        {[...Array(10)].map((_, index) => (
          <div key={`mark-${index}`} className="flex-1 border-r border-primary-500/20 relative">
            {(index === 0 || index === 4 || index === 9) && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-500/50"></div>
            )}
          </div>
        ))}
      </div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30">
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary-600/40"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary-600/40"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Text content */}
          <div className="md:w-1/2 lg:pr-12">
            {/* Technical label */}
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <span className="text-sm font-medium tracking-wider uppercase">{labelText}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
              {title}{' '}
              {titleHighlight && (
                <span className="text-primary-500 relative">
                  {titleHighlight}
                  {acronym && (
                    <div className="absolute -top-2 -right-3 text-xs text-primary-400 font-mono">
                      [{acronym}]
                    </div>
                  )}
                </span>
              )}
            </h1>

            <div className="w-20 h-0.5 bg-neutral-700 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <p className="text-neutral-300 mb-8 leading-relaxed pl-4 border-l border-primary-600/50">
              {description}
            </p>

            {/* Technical specifications */}
            <div className="bg-neutral-800/50 border border-neutral-700 p-4 mb-8">
              <div className="text-xs font-mono text-neutral-400 mb-3 flex items-center">
                <Boxes className="w-4 h-4 mr-2 text-primary-500" />
                TECHNOLOGY SPECIFICATIONS
              </div>
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => (
                  <div key={`spec-${index}`} className="flex items-start">
                    <div className="w-6 h-6 bg-primary-900/80 border border-primary-700 flex items-center justify-center mr-3 flex-shrink-0 rounded-sm">
                      {icons[spec.icon]}
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 uppercase">{spec.label}</div>
                      <div className="text-sm text-white">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={primaryButtonHref}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 inline-flex items-center group relative"
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={secondaryButtonHref}
                className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors border border-neutral-600 hover:border-neutral-500 inline-flex items-center group relative"
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {secondaryButtonText}
                <ImageIcon className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Image container */}
          <div className="md:w-1/2 relative">
            {/* Technical frame */}
            <div className="absolute inset-0 border-2 border-neutral-700/30 -m-3"></div>
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-500 -m-4"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-500 -m-4"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-500 -m-4"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-500 -m-4"></div>

            {/* Technical measurements */}
            <div className="absolute left-0 top-0 bottom-0 w-1 flex flex-col">
              <div className="flex-1 border-b border-white/30 relative">
                <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-white/50"></div>
                <div className="absolute bottom-0 left-3 text-xs font-mono text-white/60">100%</div>
              </div>
              <div className="flex-1 border-b border-white/30 relative">
                <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-white/50"></div>
                <div className="absolute bottom-0 left-3 text-xs font-mono text-white/60">50%</div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-white/50"></div>
                <div className="absolute bottom-0 left-3 text-xs font-mono text-white/60">0%</div>
              </div>
            </div>

            {/* Image with overlay */}
            <div className="relative overflow-hidden h-[400px] border border-neutral-700">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#333_25%,transparent_25%,transparent_50%,#333_50%,#333_75%,transparent_75%,transparent)] bg-[length:8px_8px] opacity-10"></div>

              {/* Technical labels */}
              {imageCaption && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-neutral-900/80 backdrop-blur-sm border-l border-primary-500 px-3 py-2">
                    <div className="text-xs font-mono text-neutral-400 mb-1">PROCESS.VIEW</div>
                    <div className="text-sm text-white">{imageCaption}</div>
                  </div>
                </div>
              )}

              {/* Technical reference */}
              {imageRefCode && (
                <div className="absolute top-4 right-4 text-xs font-mono text-white/70 bg-neutral-900/50 px-2 py-1 backdrop-blur-sm">
                  {imageRefCode}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHero;
