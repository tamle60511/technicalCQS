import React from 'react';
import { ArrowRight, FileDown, Mail, ExternalLink, Clock, Terminal, Target, Zap, Car } from 'lucide-react';

interface CTAButton {
  text: string;
  url: string;
  isPrimary: boolean;
  icon?: React.ReactNode;
  reference?: string; // Technical reference code
}

interface CTASectionProps {
  className?: string;
  title?: React.ReactNode;
  description?: string;
  buttons?: CTAButton[];
  companyName?: string;
  bgPattern?: 'grid' | 'diagonal' | 'none';
  referenceCode?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  className = '',
  title = <>Aluminum Die Casting <span className="text-primary-500">Excellence</span></>,
  description = 'From design engineering to high-volume production, partner with CQS for die cast aluminum components that meet the most demanding automotive industry standards with ±0.01mm precision, superior surface quality, and accelerated time-to-market.',
  buttons = [
    {
      text: 'Request Engineering Consultation',
      url: '/contact',
      isPrimary: true,
      icon: <Zap size={16} />,
      reference: 'ENG-CONSULT'
    },
    {
      text: 'Download Technical Capabilities',
      url: '/downloads/technical-catalog.pdf',
      isPrimary: false,
      icon: <FileDown size={16} />,
      reference: 'TECH-SPEC'
    }
  ],
  companyName = 'CQS',
  bgPattern = 'grid',
  referenceCode = ''
}) => {
  // Replace instances of the company name in the description
  const formattedDescription = description.replace(/CQS/g, companyName);

  // Generate reference code if not provided
  const generatedRefCode = referenceCode || `${companyName}-MFG-${new Date().getFullYear()}`;

  // Technical patterns
  const gridPatternClass = "bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]";
  const diagonalPatternClass = "bg-[linear-gradient(45deg,#333_25%,transparent_25%,transparent_50%,#333_50%,#333_75%,transparent_75%,transparent)] bg-[length:8px_8px]";

  // Select pattern based on prop
  let patternClass = '';
  if (bgPattern === 'grid') patternClass = gridPatternClass;
  if (bgPattern === 'diagonal') patternClass = diagonalPatternClass;

  return (
    <section className={`py-20 bg-neutral-900 text-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      {bgPattern !== 'none' && (
        <div className={`absolute inset-0 opacity-10 pointer-events-none ${patternClass}`}></div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-primary-500/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-500/50"></div>
            )}
          </div>
        ))}
      </div>

      {/* Technical corner accents - enhanced */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30">
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary-600/40"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary-600/40"></div>
      </div>

      {/* Technical detail element */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <div className="text-xs font-mono text-neutral-500 flex items-center">
          <Target size={12} className="text-primary-500 mr-1" />
          <span className="opacity-60">{generatedRefCode}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Technical document code */}
          <div className="inline-flex items-center bg-neutral-800/80 text-white px-3 py-1 mb-8 border-l-2 border-primary-600 text-xs font-mono">
            <Terminal size={12} className="mr-2 text-primary-500" />
            <span>PRECISION.MANUFACTURING.{new Date().getFullYear()}</span>
          </div>

          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            {title}
            {/* Technical decoration */}
            <div className="absolute -top-3 -right-8 text-xs text-primary-400 font-mono opacity-60 hidden md:block">[v.03]</div>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-neutral-700"></div>
          </h2>

          <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto relative pl-4 border-l border-primary-600/50">
            {formattedDescription}
          </p>

          {/* Technical timeline indicator for buttons */}
          <div className="w-px h-8 bg-neutral-700 mx-auto mb-8 relative">
            <div className="absolute top-0 -left-1.5 w-3 h-3 border-2 border-primary-500 rounded-full"></div>
            <div className="absolute bottom-0 -left-1.5 w-3 h-3 bg-primary-500 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            {buttons.map((button, index) => (
              <a
                key={`cta-button-${index}`}
                href={button.url}
                className={`px-8 py-3 group relative overflow-hidden ${
                  button.isPrimary
                    ? 'bg-primary-600 hover:bg-primary-700 text-white border border-primary-700'
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-600 hover:border-neutral-500'
                } font-medium transition-colors flex items-center justify-center`}
              >
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Button reference code */}
                {button.reference && (
                  <div className="absolute -top-0.5 -right-0.5 text-[8px] font-mono text-white/50 px-1">
                    {button.reference}
                  </div>
                )}

                {/* Button content with icon */}
                <div className="mr-2">{button.icon || (button.isPrimary ? <ExternalLink size={16} /> : <FileDown size={16} />)}</div>
                {button.text}

                {/* Technical active indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/0 group-hover:bg-white/20 transition-colors"></div>
              </a>
            ))}
          </div>

          {/* Technical footer */}
          <div className="mt-12 text-xs font-mono text-neutral-600 flex items-center justify-center">
            <Clock size={12} className="mr-1 text-primary-500/50" />
            <span>RESPONSE TIME: WITHIN 24 HRS</span>
            <span className="mx-2">|</span>
            <span>IATF 16949 CERTIFIED</span>
          </div>
        </div>
      </div>

      {/* Blueprint-style decoration */}
      <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-600 hidden md:block">
        <div className="flex items-center">
          <div className="w-4 h-4 border border-neutral-600 rounded-full flex items-center justify-center mr-2">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
          </div>
          <span>{companyName}.EST.2002</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
