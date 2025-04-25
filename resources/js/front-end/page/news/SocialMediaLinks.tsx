
import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

// Interface for social media platform
interface SocialMediaPlatform {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
}

// Interface for component props
interface SocialMediaLinksProps {
  className?: string;
  title?: string;
  description?: string;
  platforms?: SocialMediaPlatform[];
}

// Social Media Button component
const SocialMediaButton: React.FC<{ platform: SocialMediaPlatform }> = ({ platform }) => {
  return (
    <a
      href={platform.url}
      className="w-12 h-12 bg-white border border-neutral-300 hover:border-primary-500 rounded-sm flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors"
      aria-label={platform.name}
    >
      {platform.icon}
    </a>
  );
};

// Default social media platforms
const defaultPlatforms: SocialMediaPlatform[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: '#'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    url: '#'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    url: '#'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    url: '#'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: <Youtube className="w-5 h-5" />,
    url: '#'
  }
];

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  className = "",
  title = "Follow Our News on Social Media",
  description = "Join our online community for real-time updates, behind-the-scenes content, and exclusive news.",
  platforms = defaultPlatforms
}) => {
  return (
    <section className={`py-12 bg-neutral-50 border-t border-neutral-200 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-neutral-900 mb-6">{title}</h3>

          <div className="flex justify-center gap-4">
            {platforms.map((platform) => (
              <SocialMediaButton key={platform.id} platform={platform} />
            ))}
          </div>

          <p className="text-neutral-600 text-sm mt-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
