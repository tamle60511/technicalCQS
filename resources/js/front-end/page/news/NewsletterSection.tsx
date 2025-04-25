
import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

// Interface for component props
interface NewsletterSectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  disclaimer?: string;
  onSubscribe?: (email: string) => void;
}

// Technical corner accent component (reused from previous components)
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

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  id = "newsletter",
  className = "",
  title = "Subscribe to Our Newsletter",
  subtitle = "Stay up-to-date with the latest news, technological advancements, and industry insights. Our newsletter delivers valuable content directly to your inbox.",
  disclaimer = "By subscribing, you agree to our Privacy Policy and consent to receive relevant updates. You can unsubscribe at any time.",
  onSubscribe
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    if (onSubscribe) {
      onSubscribe(email);
    }

    // Simulate API call
    setTimeout(() => {
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id={id} className={`py-16 bg-neutral-900 text-white relative ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical corner accents */}
      <TechnicalCornerAccent position="top-left" />
      <TechnicalCornerAccent position="bottom-right" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-800/50 border border-neutral-700 p-8 relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-500 -m-2"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-500 -m-2"></div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-neutral-900/80 text-white px-4 py-2 mb-4 border-l-2 border-primary-600 relative">
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium tracking-wider uppercase">Stay Informed</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                {subtitle}
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-sm transition-colors placeholder-neutral-500 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 inline-flex items-center justify-center group relative whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <div className="mt-4 text-xs text-neutral-500 text-center">
                {disclaimer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
