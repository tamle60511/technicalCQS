import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.png';
import {
  Terminal,
  Database,
  Globe,
  Shield,
  Cpu,
  Server,
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Send,
  AlertCircle,
  Hexagon,
  ArrowRight,
  Info,
  Users,
  FileText,
  Lock,
  RefreshCw,
  ExternalLink,
  Wifi,
  Zap,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

// Define the missing data structures
const socialLinks = [
  { platform: 'Facebook', url: '#', icon: Facebook },
  { platform: 'Twitter', url: '#', icon: Twitter },
  { platform: 'Instagram', url: '#', icon: Instagram },
  { platform: 'LinkedIn', url: '#', icon: Linkedin },
  { platform: 'YouTube', url: '#', icon: Youtube }
];

const productLinks = [
    { text: 'AL. Wheel', url: '/products/al-wheel', icon: Hexagon, code: 'PROD-01' },
    { text: 'Light-Weight Products', url: '/products/lightweight', icon: Zap, code: 'PROD-02', isNew: true },
    { text: 'Green Energy Products', url: '/products/green-energy', icon: Globe, code: 'PROD-03' },
    { text: 'Agricultural Products', url: '/products/agricultural', icon: Shield, code: 'PROD-04' },
];

const technologyLinks = [
    { text: 'HPDC', url: '/technologies/hpdc', icon: Cpu, code: 'TECH-01' },
    { text: 'CNC', url: '/technologies/cnc', icon: Server, code: 'TECH-02' },
    { text: 'GDC', url: '/technologies/gdc', icon: Database, code: 'TECH-03' },
    { text: 'Painting', url: '/technologies/painting', icon: Shield, code: 'TECH-04', isNew: true },
];

const companyLinks = [
  { text: 'About Us', url: '/about', icon: Info },
  { text: 'Our Team', url: '/team', icon: Users },
  { text: 'Careers', url: '/careers', icon: FileText },
  { text: 'Resources', url: '/resources', icon: Globe },
  { text: 'News & Events', url: '/news', icon: ExternalLink },
  { text: 'Sustainability', url: '/sustainability', icon: Wifi },
  { text: 'Compliance', url: '/compliance', icon: Lock },
  { text: 'Partners', url: '/partners', icon: Lock }
];

const contactInfo = [
  { label: 'Address', value: '123 Industry Drive, Dong Nai, Vietnam', icon: MapPin },
  { label: 'Email', value: 'daisy@cqs-tech.com.tw', icon: Mail, link: 'mailto:daisy@cqs-tech.com.tw' },
  { label: 'Phone', value: '+84 251 398168', icon: Phone, link: 'tel:+84 251 398168' },
  { label: 'Working Hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM', icon: Clock }
];

const Footer: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(true);
  const [systemStatus, setSystemStatus] = useState<'online' | 'maintenance' | 'updating'>('online');
  const [subscribing, setSubscribing] = useState(false);
  const [email, setEmail] = useState('');

  // Current year and timestamp for technical reference
  const currentYear = new Date().getFullYear();
  const lastUpdated = '2024-06-01T08:30:00';

  // Animation setup
  useEffect(() => {
    setIsLoaded(true);

    // Scanning animation timing
    const scanInterval = setInterval(() => {
      setIsScanning(prev => !prev);
    }, 5000);

    // Simulation of system status changes
    const statusCheck = setInterval(() => {
      const randomStatus = Math.random();
      if (randomStatus > 0.9) {
        setSystemStatus('updating');
      } else if (randomStatus > 0.8) {
        setSystemStatus('maintenance');
      } else {
        setSystemStatus('online');
      }
    }, 30000);

    return () => {
      clearInterval(scanInterval);
      clearInterval(statusCheck);
    };
  }, []);

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribing(true);

    // Simulate subscription process
    setTimeout(() => {
      setSubscribing(false);
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-neutral-900 relative">
      {/* Technical top border */}
      <div className="h-1 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.1)_100%)] w-[200%] animate-shimmer"></div>
      </div>

      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]"></div>

      {/* Scanning animation */}
      <div className={`absolute left-0 right-0 h-px bg-primary-400/30 pointer-events-none transition-all duration-1000 ease-in-out animate-scan`}></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Technical system status bar */}
        <div className={`mb-10 bg-neutral-800 border border-neutral-700 rounded-sm px-4 py-3 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <Terminal size={16} className="text-primary-500 mr-2" />
              <span className="text-sm font-mono text-neutral-300">
                CQS.SYSTEM.STATUS:
              </span>
              <div className="ml-2 flex items-center">
                <div className={`w-2 h-2 rounded-full ${
                  systemStatus === 'online' ? 'bg-emerald-500' :
                  systemStatus === 'maintenance' ? 'bg-amber-500' :
                  'bg-blue-500 animate-pulse'
                } mr-1.5`}></div>
                <span className={`text-xs font-medium ${
                  systemStatus === 'online' ? 'text-emerald-400' :
                  systemStatus === 'maintenance' ? 'text-amber-400' :
                  'text-blue-400'
                }`}>
                  {systemStatus === 'online' ? 'SYSTEMS ONLINE' :
                   systemStatus === 'maintenance' ? 'SCHEDULED MAINTENANCE' :
                   'UPDATING SYSTEMS'}
                </span>
              </div>
            </div>

            <div className="flex items-center text-xs text-neutral-400 font-mono">
              <span className="mr-4">BUILD: CQS.{currentYear}.06.1</span>
              <span className="flex items-center">
                <Clock size={12} className="mr-1" />
                LAST UPDATE: {new Date(lastUpdated).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* IMPROVED LAYOUT: More organized grid structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Company Info - 3 columns */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-sm overflow-hidden h-full">
              <div className="px-4 py-3 border-b border-neutral-700 flex items-center">
                <Server size={16} className="text-primary-500 mr-2" />
                <h3 className="text-sm font-medium text-white">Company Information</h3>
              </div>

              <div className="p-5">
                <Link href="/" className="mb-6 inline-block relative group">
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={Logo} alt="Logo" className="h-16" />
                </Link>

                <div className="h-0.5 w-16 bg-gradient-to-r from-primary-600 to-primary-400 mb-5"></div>

                <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                  World's Leading Industry Corporation specializing in advanced die casting solutions with a commitment to creativity,
                  quality, and sustainability.
                </p>

                {/* ISO Certification Badge with technical styling */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 border border-neutral-700 rounded-sm bg-neutral-800 relative">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary-500/50"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary-500/50"></div>
                    <Shield size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium mb-1">ISO 9001:2015</div>
                    <div className="text-neutral-400 text-xs">Certified Manufacturer</div>
                    <div className="text-neutral-500 text-[10px] font-mono mt-1">REF: ISO-9001-{currentYear}</div>
                  </div>
                </div>

                {/* Social Media with technical styling */}
                <div className="border-t border-neutral-700 pt-5">
                  <div className="flex items-center mb-3">
                    <Wifi size={14} className="text-primary-500 mr-2" />
                    <h4 className="text-xs font-medium text-neutral-300">SOCIAL NETWORKS</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((link, index) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        className="w-8 h-8 flex items-center justify-center bg-neutral-800 border border-neutral-700 hover:border-primary-500 hover:bg-neutral-700 text-neutral-400 hover:text-primary-400 transition-colors rounded-sm group relative"
                        aria-label={link.platform}
                      >
                        <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t border-l border-neutral-600 group-hover:border-primary-500 transition-colors"></div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b border-r border-neutral-600 group-hover:border-primary-500 transition-colors"></div>
                        <link.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main links section - 6 columns, containing Products & Technologies side by side */}
          <div className={`lg:col-span-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* Products Panel */}
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-sm overflow-hidden h-full flex flex-col">
                <div className="px-4 py-3 border-b border-neutral-700 flex items-center justify-between">
                  <div className="flex items-center">
                    <Database size={16} className="text-primary-500 mr-2" />
                    <h3 className="text-sm font-medium text-white">Products</h3>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500 px-1.5 py-0.5 bg-neutral-800 rounded-sm border border-neutral-700">
                    {productLinks.length}
                  </div>
                </div>

                <div className="p-4 flex-grow">
                  <ul className="space-y-3">
                    {productLinks.map((link) => (
                      <li key={link.text}>
                        <Link
                          href={link.url}
                          className="flex items-center justify-between px-3 py-2 text-gray-400 hover:text-primary-400 hover:bg-neutral-800 rounded-sm transition-colors group"
                        >
                          <div className="flex items-center">
                            <link.icon size={16} className="mr-2.5 text-neutral-500 group-hover:text-primary-500" />
                            <span>{link.text}</span>
                            {link.isNew && (
                              <span className="ml-2 text-[9px] bg-primary-900/60 text-primary-400 px-1 py-0.5 rounded-sm">NEW</span>
                            )}
                          </div>
                          <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-500" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Panel footer */}
                <div className="px-4 py-2 bg-neutral-800 border-t border-neutral-700 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-neutral-500">CQS.PRODUCTS</span>
                  <Link href="/products" className="text-[10px] text-primary-500 hover:text-primary-400 flex items-center">
                    VIEW ALL <ArrowRight size={10} className="ml-1" />
                  </Link>
                </div>
              </div>

              {/* Technologies Panel */}
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-sm overflow-hidden h-full flex flex-col">
                <div className="px-4 py-3 border-b border-neutral-700 flex items-center justify-between">
                  <div className="flex items-center">
                    <Cpu size={16} className="text-primary-500 mr-2" />
                    <h3 className="text-sm font-medium text-white">Technologies</h3>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500 px-1.5 py-0.5 bg-neutral-800 rounded-sm border border-neutral-700">
                    {technologyLinks.length}
                  </div>
                </div>

                <div className="p-4 flex-grow">
                  <ul className="space-y-3">
                    {technologyLinks.map((link) => (
                      <li key={link.text}>
                        <Link
                          href={link.url}
                          className="flex items-center justify-between px-3 py-2 text-gray-400 hover:text-primary-400 hover:bg-neutral-800 rounded-sm transition-colors group"
                        >
                          <div className="flex items-center">
                            <link.icon size={16} className="mr-2.5 text-neutral-500 group-hover:text-primary-500" />
                            <span>{link.text}</span>
                            {link.isNew && (
                              <span className="ml-2 text-[9px] bg-primary-900/60 text-primary-400 px-1 py-0.5 rounded-sm">NEW</span>
                            )}
                          </div>
                          <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-500" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Panel footer */}
                <div className="px-4 py-2 bg-neutral-800 border-t border-neutral-700 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-neutral-500">CQS.TECHNOLOGIES</span>
                  <Link href="/technologies" className="text-[10px] text-primary-500 hover:text-primary-400 flex items-center">
                    VIEW ALL <ArrowRight size={10} className="ml-1" />
                  </Link>
                </div>
              </div>

              {/* Company Links Panel - Full width in the bottom row */}
              <div className="md:col-span-2 bg-neutral-800/50 border border-neutral-700 rounded-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-neutral-700 flex items-center justify-between">
                  <div className="flex items-center">
                    <Info size={16} className="text-primary-500 mr-2" />
                    <h3 className="text-sm font-medium text-white">Company</h3>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500 px-1.5 py-0.5 bg-neutral-800 rounded-sm border border-neutral-700">
                    {companyLinks.length}
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.text}
                        href={link.url}
                        className="flex items-center px-3 py-2 text-gray-400 hover:text-primary-400 hover:bg-neutral-800 rounded-sm transition-colors group"
                      >
                        <link.icon size={16} className="mr-2 text-neutral-500 group-hover:text-primary-500" />
                        <span>{link.text}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Panel footer */}
                <div className="px-4 py-2 bg-neutral-800 border-t border-neutral-700 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-neutral-500">CQS.COMPANY</span>
                  <Link href="/about" className="text-[10px] text-primary-500 hover:text-primary-400 flex items-center">
                    ABOUT US <ArrowRight size={10} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Newsletter - 3 columns */}
          <div className={`lg:col-span-3 space-y-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            {/* Contact Information Panel */}
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-neutral-700 flex items-center">
                <Phone size={16} className="text-primary-500 mr-2" />
                <h3 className="text-sm font-medium text-white">Contact Information</h3>
              </div>

              <div className="p-4">
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-neutral-800 border border-neutral-700 rounded-sm mr-3">
                        <info.icon size={16} className="text-primary-500" />
                      </div>
                      <div>
                        <div className="text-neutral-400 text-xs mb-0.5">{info.label}</div>
                        {info.link ? (
                          <a href={info.link} className="text-neutral-300 hover:text-primary-400 text-sm transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-neutral-300 text-sm">{info.value}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Panel footer */}
              <div className="px-4 py-2 bg-neutral-800 border-t border-neutral-700 flex justify-between items-center">
                <span className="text-[10px] font-mono text-neutral-500">CQS.CONTACT</span>
                <Link href="/contact" className="text-[10px] text-primary-500 hover:text-primary-400 flex items-center">
                  CONTACT US <ArrowRight size={10} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Newsletter Panel */}
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-neutral-700 flex items-center justify-between">
                <div className="flex items-center">
                  <Mail size={16} className="text-primary-500 mr-2" />
                  <h3 className="text-sm font-medium text-white">Newsletter</h3>
                </div>
                <div className={`w-2 h-2 rounded-full ${subscribing ? 'bg-blue-500 animate-pulse' : 'bg-emerald-500'}`}></div>
              </div>

              <div className="p-4">
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full bg-neutral-900 border border-neutral-700 focus:border-primary-500 rounded-sm py-2 px-3 text-sm text-white placeholder-neutral-500 focus:outline-none"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-primary-500/40"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-primary-500/40"></div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full flex items-center justify-center px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-sm relative group transition-colors ${
                      subscribing ? 'opacity-80 cursor-wait' : ''
                    }`}
                    disabled={subscribing}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/0 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>

                    {subscribing ? (
                      <>
                        <RefreshCw size={16} className="mr-2 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-3 text-xs text-neutral-500 flex items-start">
                  <AlertCircle size={12} className="flex-shrink-0 mr-1.5 mt-0.5" />
                  <span>You can unsubscribe at any time. We respect your privacy.</span>
                </div>
              </div>

              {/* Panel footer */}
              <div className="px-4 py-2 bg-neutral-800 border-t border-neutral-700 flex justify-between items-center">
                <span className="text-[10px] font-mono text-neutral-500">CQS.NEWSLETTER</span>
                <span className="text-[10px] text-neutral-500">FREQUENCY: MONTHLY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Technical Footer */}
        <div className={`mt-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-neutral-800">
            <div className="text-neutral-500 text-sm mb-4 md:mb-0 flex items-center">
              <Terminal size={14} className="mr-2 text-primary-500" />
              <span>&copy; {currentYear} CQS Technology. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-neutral-500 text-xs">
              <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link href="/cookies" className="hover:text-primary-400 transition-colors">Cookie Policy</Link>
              <Link href="/sitemap" className="hover:text-primary-400 transition-colors">Sitemap</Link>
            </div>
          </div>



        </div>
      </div>
    </footer>
  );
};

export default Footer;
