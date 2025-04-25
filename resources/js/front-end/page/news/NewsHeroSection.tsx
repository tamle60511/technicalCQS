
import React from 'react';
import { Newspaper, Calendar, User, ArrowRight, Mail } from 'lucide-react';

// Interface for featured story
interface FeaturedStory {
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

// Interface for the hero image
interface HeroImage {
  src: string;
  alt: string;
  caption: string;
  referenceCode: string;
}

// Component props interface
interface NewsHeroSectionProps {
  className?: string;
  featuredStory?: FeaturedStory;
  heroImage?: HeroImage;
}

// Measurement mark component for reusability
const TechnicalMeasurementMarks: React.FC = () => (
  <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30">
    {[...Array(10)].map((_, index) => (
      <div key={`mark-${index}`} className="flex-1 border-r border-primary-500/20 relative">
        {(index === 4 || index === 0 || index === 9) && (
          <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-500/50"></div>
        )}
      </div>
    ))}
  </div>
);

// Technical corner accent component
interface TechnicalCornerAccentProps {
  position: 'top-left' | 'bottom-right';
}

const TechnicalCornerAccent: React.FC<TechnicalCornerAccentProps> = ({ position }) => {
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

// Button component for consistent styling
interface ActionButtonProps {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ href, primary = false, children }) => (
  <a
    href={href}
    className={`px-6 py-3 ${primary
      ? 'bg-primary-600 hover:bg-primary-700 border-primary-700'
      : 'bg-neutral-800 hover:bg-neutral-700 border-neutral-600 hover:border-neutral-500'
    } text-white font-medium transition-colors border inline-flex items-center group relative`}
  >
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    {children}
  </a>
);

const NewsHeroSection: React.FC<NewsHeroSectionProps> = ({
  className = "",
  featuredStory = {
    title: "New Manufacturing Facility Expansion Completed",
    excerpt: "Our state-of-the-art manufacturing facility expansion has been completed, increasing production capacity by 40% and creating 150 new jobs.",
    date: "October 15, 2023",
    author: "Communications Team"
  },
  heroImage = {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Manufacturing Facility",
    caption: "Expanded manufacturing facility with advanced assembly and robotics technology",
    referenceCode: "NEWS-REF-01"
  }
}) => {
  return (
    <section className={`relative overflow-hidden bg-neutral-900 text-white ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical measurement marks */}
      <TechnicalMeasurementMarks />

      {/* Technical corner accents */}
      <TechnicalCornerAccent position="top-left" />
      <TechnicalCornerAccent position="bottom-right" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Text content */}
          <div className="md:w-1/2 lg:pr-12">
            {/* Technical label */}
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <span className="text-sm font-medium tracking-wider uppercase">Company Updates</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
              News & <span className="text-primary-500 relative">Insights
                <div className="absolute -top-2 -right-3 text-xs text-primary-400 font-mono">[NEWS]</div>
              </span>
            </h1>

            <div className="w-20 h-0.5 bg-neutral-700 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <p className="text-neutral-300 mb-8 leading-relaxed pl-4 border-l border-primary-600/50">
              Stay updated with the latest news, industry insights, technological advancements, and company announcements. Our news section provides in-depth coverage of trends, developments, and innovations that are shaping the future of manufacturing and engineering.
            </p>

            {/* Featured News Tag */}
            <div className="bg-neutral-800/50 border border-neutral-700 p-4 mb-8">
              <div className="text-xs font-mono text-neutral-400 mb-3 flex items-center">
                <Newspaper className="w-4 h-4 mr-2 text-primary-500" />
                FEATURED STORY
              </div>
              <h2 className="text-lg font-bold text-white mb-2">{featuredStory.title}</h2>
              <p className="text-neutral-400 text-sm mb-3">
                {featuredStory.excerpt}
              </p>
              <div className="flex items-center text-xs text-neutral-500">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                <span>{featuredStory.date}</span>
                <span className="mx-2">|</span>
                <User className="w-3.5 h-3.5 mr-1.5" />
                <span>{featuredStory.author}</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <ActionButton href="#latest-news" primary>
                Latest News
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </ActionButton>
              <ActionButton href="#newsletter">
                Subscribe to Updates
                <Mail className="w-5 h-5 ml-2" />
              </ActionButton>
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
              {['100%', '50%', '0%'].map((label, index) => (
                <div key={`measure-${index}`} className={`flex-1 ${index !== 2 ? 'border-b border-white/30' : ''} relative`}>
                  <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-white/50"></div>
                  <div className="absolute bottom-0 left-3 text-xs font-mono text-white/60">{label}</div>
                </div>
              ))}
            </div>

            {/* Image with overlay */}
            <div className="relative overflow-hidden h-[400px] border border-neutral-700">
              <img src={heroImage.src} alt={heroImage.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#333_25%,transparent_25%,transparent_50%,#333_50%,#333_75%,transparent_75%,transparent)] bg-[length:8px_8px] opacity-10"></div>

              {/* Technical labels */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-neutral-900/80 backdrop-blur-sm border-l border-primary-500 px-3 py-2">
                  <div className="text-xs font-mono text-neutral-400 mb-1">NEWS.HIGHLIGHT</div>
                  <div className="text-sm text-white">{heroImage.caption}</div>
                </div>
              </div>

              {/* Technical reference */}
              <div className="absolute top-4 right-4 text-xs font-mono text-white/70 bg-neutral-900/50 px-2 py-1 backdrop-blur-sm">
                {heroImage.referenceCode}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHeroSection;
