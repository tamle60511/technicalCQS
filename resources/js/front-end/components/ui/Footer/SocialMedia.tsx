import { Facebook, Instagram, Linkedin, Twitter, Youtube, type LucideIcon } from 'lucide-react';

interface SocialLink {
    platform: string;
    icon: LucideIcon;
    url: string;
}
const socialLinks: SocialLink[] = [
    { platform: 'facebook', icon: Facebook, url: '#' },
    { platform: 'twitter', icon: Twitter, url: '#' },
    { platform: 'linkedin', icon: Linkedin, url: '#' },
    { platform: 'youtube', icon: Youtube, url: '#' },
    { platform: 'instagram', icon: Instagram, url: '#' },
];

const SocialMedia = () => {
    return (
        <div className="flex space-x-3">
            {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                    <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-primary-700 hover:border-primary-600 flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-700 bg-neutral-800 transition hover:-translate-y-1"
                        aria-label={`Follow us on ${link.platform}`}
                    >
                        <IconComponent size={18} className="text-gray-300" />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialMedia;
