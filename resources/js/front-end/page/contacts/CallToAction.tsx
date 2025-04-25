
import React from 'react';
import {
  Calendar, ArrowRight, Linkedin, Twitter,
  Facebook, Instagram, Youtube
} from 'lucide-react';

// Types and Interfaces
interface CTAButton {
  id: string;
  text: string;
  icon: React.ReactNode;
  link: string;
  isPrimary?: boolean;
}

interface SocialLink {
  id: string;
  icon: React.ReactNode;
  link: string;
}

interface CallToActionSectionProps {
  title?: React.ReactNode;
  description?: string;
  buttons?: CTAButton[];
  socialLinks?: SocialLink[];
}

// Reusable Components
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

const CTAButton: React.FC<{ button: CTAButton }> = ({ button }) => {
  const baseClasses = "px-6 py-3 text-white font-medium transition-colors border inline-flex items-center group relative";
  const primaryClasses = "bg-primary-600 hover:bg-primary-700 border-primary-700";
  const secondaryClasses = "bg-neutral-700 hover:bg-neutral-600 border-neutral-600";

  return (
    <a
      href={button.link}
      className={`${baseClasses} ${button.isPrimary ? primaryClasses : secondaryClasses}`}
    >
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      {button.text}
      {button.icon}
    </a>
  );
};

const SocialLinks: React.FC<{ links: SocialLink[] }> = ({ links }) => {
  return (
    <div className="flex justify-center gap-4">
      {links.map(link => (
        <a
          key={link.id}
          href={link.link}
          className="w-10 h-10 bg-neutral-700 hover:bg-primary-600 text-white rounded-sm flex items-center justify-center transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

// Default data
const defaultButtons: CTAButton[] = [
  {
    id: 'cta-button-1',
    text: 'Schedule a Consultation',
    icon: <Calendar className="w-5 h-5 ml-2" />,
    link: '#',
    isPrimary: true
  },
  {
    id: 'cta-button-2',
    text: 'Explore Our Products',
    icon: <ArrowRight className="w-5 h-5 ml-2" />,
    link: '#',
    isPrimary: false
  }
];

const defaultSocialLinks: SocialLink[] = [
  {
    id: 'social-1',
    icon: <Linkedin className="w-5 h-5" />,
    link: '#'
  },
  {
    id: 'social-2',
    icon: <Twitter className="w-5 h-5" />,
    link: '#'
  },
  {
    id: 'social-3',
    icon: <Facebook className="w-5 h-5" />,
    link: '#'
  },
  {
    id: 'social-4',
    icon: <Instagram className="w-5 h-5" />,
    link: '#'
  },
  {
    id: 'social-5',
    icon: <Youtube className="w-5 h-5" />,
    link: '#'
  }
];

// Main Component
const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title = <>Ready to Partner With <span className="text-primary-400">CQS</span>?</>,
  description = "Whether you're looking for innovative products, technical solutions, or strategic partnership opportunities, our team is ready to help you achieve your goals.",
  buttons = defaultButtons,
  socialLinks = defaultSocialLinks
}) => {
  return (
    <section className="py-16 bg-neutral-900 text-white relative">
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical corner accents */}
      <TechnicalCornerAccent position="top-left" />
      <TechnicalCornerAccent position="bottom-right" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-neutral-800/50 border border-neutral-700 p-8 md:p-12 relative text-center">
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary-500/40"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary-500/40"></div>

            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-neutral-300 mb-8 max-w-3xl mx-auto">
              {description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {buttons.map(button => (
                <CTAButton key={button.id} button={button} />
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-700">
              <div className="text-sm text-neutral-400 mb-4">Connect with us on social media</div>
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
