import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Award,
  ExternalLink,
  Terminal,
  Database,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Info,
  Calendar,
  Search,
  ArrowRight,
  Layers
} from 'lucide-react';

// Define certification interface
interface Certification {
  name: string;
  image: string;
  url: string;
  code: string;
  issuer?: string;
  validUntil?: string;
  scope?: string;
  status?: 'valid' | 'pending-renewal' | 'expired';
  issueDate?: string;
  lastAudit?: string;
  requirements?: string[];
}

const Certifications: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(true);
  const [activePage, setActivePage] = useState<number>(0);
  const [activeDetailIndex, setActiveDetailIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Current year for technical reference codes
  const currentYear = new Date().getFullYear();

  // Enhanced certifications data with technical specifications
  const certifications: Certification[] = [
    {
      name: 'IATF 16949:2016',
      image: '/images/Advanced.jpg',
      url: '#',
      code: 'IATF-16949',
      issuer: 'TÜV Rheinland',
      validUntil: '2026-05',
      scope: 'Quality Management System for Automotive Production',
      status: 'valid',
      issueDate: '2021-05',
      lastAudit: '2023-06'
    },
    {
      name: 'ISO 9001:2015',
      image: '/images/Aluminum.jpg',
      url: '#',
      code: 'ISO-9001',
      issuer: 'TÜV Rheinland',
      validUntil: '2025-10',
      scope: 'Quality Management System for Manufacturing',
      status: 'valid',
      issueDate: '2020-10',
      lastAudit: '2023-04'

    },
    {
      name: 'ISO 14001:2015',
      image: '/images/cnc.jpg',
      url: '#',
      code: 'ISO-14001',
      issuer: 'TÜV Rheinland',
      validUntil: '2025-10',
      scope: 'Environmental Management System',
      status: 'valid',
      issueDate: '2020-10',
      lastAudit: '2023-04'
    },
    {
      name: 'PPAP Level 3 Approval',
      image: '/images/Material-3.jpg',
      url: '#',
      code: 'PPAP-L3',
      issuer: 'Global OEM',
      validUntil: 'Continuous',
      scope: 'Production Part Approval Process',
      status: 'valid',
      issueDate: '2022-03',
      lastAudit: '2023-08'
    },
    {
      name: 'Eco-friendly Manufacturing',
      image: '/images/Material-2.jpg',
      url: '#',
      code: 'GREEN-MFG',
      issuer: 'Industry Alliance',
      validUntil: '2024-12',
      scope: 'Environmental Standards for Aluminum Processing',
      status: 'pending-renewal',
      issueDate: '2021-12',
      lastAudit: '2023-01'
    }
  ];

  // Calculate visible items per page based on screen size
  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default for server-side rendering
  };

  const [itemsPerPage, setItemsPerPage] = useState(getVisibleItems());

  // Recalculate items per page on window resize
  useEffect(() => {
    function handleResize() {
      setItemsPerPage(getVisibleItems());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation setup
  useEffect(() => {
    setIsLoaded(true);

    // Scanning animation timing
    const scanInterval = setInterval(() => {
      setIsScanning(prev => !prev);
    }, 5000);

    return () => {
      clearInterval(scanInterval);
    };
  }, []);

  // Handlers for carousel navigation
  const handlePrevious = (): void => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActivePage(prev => (prev === 0 ? Math.ceil(certifications.length / itemsPerPage) - 1 : prev - 1));

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = (): void => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActivePage(prev => (prev === Math.ceil(certifications.length / itemsPerPage) - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // When page changes, update active detail to first item on the page
  useEffect(() => {
    const startIndex = activePage * itemsPerPage;
    setActiveDetailIndex(startIndex);
  }, [activePage, itemsPerPage]);

  return (
    <section id="certifications" className="py-16 md:py-20 bg-neutral-100 relative overflow-hidden">
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,transparent_49px,#222_50px,#222_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#222_50px,#222_51px,transparent_51px)] [background-size:50px_50px]"></div>

      {/* Horizontal scanning line */}
      <div className={`absolute left-0 right-0 h-px bg-primary-400/30 pointer-events-none transition-all duration-1000 ease-in-out ${isScanning ? 'top-0' : 'top-full'}`}></div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t border-l border-primary-600/20 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b border-r border-primary-600/20 opacity-60"></div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 w-full h-2 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-primary-600/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-600/30"></div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Technical title header */}
        <div className="mb-10 flex flex-col items-center">
          <div className="inline-flex items-center mb-3 bg-neutral-900/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-neutral-800/10 relative">
            <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary-500/50"></div>
            <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary-500/50"></div>
            <Terminal className="mr-2 text-primary-600" size={16} />
            <p className="text-neutral-700 font-mono text-sm tracking-wider">
              <span className="text-primary-600">SYS:</span> CQS.CERTIFICATION.DATABASE.{currentYear}
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
            Certifications & <span className="text-primary-600">Achievements</span>
          </h2>

          <div className="relative w-20 h-0.5 bg-neutral-300 mb-8">
            <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 transform border border-neutral-300"></div>
          </div>

          <div className="bg-white p-4 border border-neutral-200 rounded-sm max-w-3xl mb-6 relative">
            <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary-500/30"></div>
            <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary-500/30"></div>
            <p className="text-neutral-600 text-center leading-relaxed">
              CQS adheres to international standards for quality management, environmental responsibility,
              and automotive industry requirements to deliver consistent, high-quality aluminum components.
            </p>
          </div>

          {/* Technical metadata */}
          <div className="inline-flex items-center text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1 border border-neutral-200 rounded-sm mb-4">
            <Shield size={12} className="mr-1.5 text-primary-500" />
            <span>CERTIFICATION STATUS: {certifications.filter(c => c.status === 'valid').length}/{certifications.length} ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Certification Info (4 columns) */}
          <div className="lg:col-span-4">
            {/* Technical certification details panel */}
            <div className={`bg-white rounded-sm border border-neutral-200 shadow-md mb-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center">
                  <Shield size={18} className="text-primary-600 mr-2" />
                  <h3 className="font-medium text-neutral-800">Certification Details</h3>
                </div>
                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                  {certifications[activeDetailIndex].code}
                </div>
              </div>

              {/* Active certificate details */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-lg text-neutral-800">{certifications[activeDetailIndex].name}</h4>
                  <div className={`text-xs font-mono px-2 py-0.5 rounded-sm flex items-center ${
                    certifications[activeDetailIndex].status === 'valid'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : certifications[activeDetailIndex].status === 'pending-renewal'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      certifications[activeDetailIndex].status === 'valid'
                        ? 'bg-emerald-500'
                        : certifications[activeDetailIndex].status === 'pending-renewal'
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                    }`}></div>
                    {certifications[activeDetailIndex].status === 'valid'
                      ? 'VALID'
                      : certifications[activeDetailIndex].status === 'pending-renewal'
                        ? 'PENDING RENEWAL'
                        : 'EXPIRED'
                    }
                  </div>
                </div>

                <div className="space-y-4 mb-5">
                  <div className="bg-neutral-50 p-3 border border-neutral-200 rounded-sm">
                    <div className="text-xs text-neutral-500 uppercase mb-1 font-medium">SCOPE</div>
                    <div className="text-neutral-700">{certifications[activeDetailIndex].scope}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neutral-50 p-3 border border-neutral-200 rounded-sm">
                      <div className="text-xs text-neutral-500 uppercase mb-1 font-medium">ISSUER</div>
                      <div className="text-neutral-700 flex items-center">
                        <Award size={14} className="text-primary-600 mr-1.5" />
                        {certifications[activeDetailIndex].issuer}
                      </div>
                    </div>

                    <div className="bg-neutral-50 p-3 border border-neutral-200 rounded-sm">
                      <div className="text-xs text-neutral-500 uppercase mb-1 font-medium">VALID UNTIL</div>
                      <div className="text-neutral-700 flex items-center">
                        <Calendar size={14} className="text-primary-600 mr-1.5" />
                        {certifications[activeDetailIndex].validUntil}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neutral-50 p-3 border border-neutral-200 rounded-sm">
                      <div className="text-xs text-neutral-500 uppercase mb-1 font-medium">ISSUE DATE</div>
                      <div className="text-neutral-700 font-mono">{certifications[activeDetailIndex].issueDate}</div>
                    </div>

                    <div className="bg-neutral-50 p-3 border border-neutral-200 rounded-sm">
                      <div className="text-xs text-neutral-500 uppercase mb-1 font-medium">LAST AUDIT</div>
                      <div className="text-neutral-700 font-mono">{certifications[activeDetailIndex].lastAudit}</div>
                    </div>
                  </div>
                </div>

                {/* Requirements list */}
                <div className="border-t border-dashed border-neutral-200 pt-4 mt-4">

                  <ul className="space-y-1">
                    {certifications[activeDetailIndex].requirements?.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-primary-600 mt-1 mr-2">•</div>
                        <span className="text-sm text-neutral-600">{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex justify-center">
                    <a
                      href={certifications[activeDetailIndex].url}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      <FileText size={14} className="mr-1.5" />
                      View Certificate
                      <ArrowRight size={14} className="ml-1.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Technical dashboard footer */}
              <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
                <span>CERT: {certifications[activeDetailIndex].code}.{currentYear}</span>
                <div className="flex items-center">
                  <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                    certifications[activeDetailIndex].status === 'valid'
                      ? 'bg-emerald-500'
                      : certifications[activeDetailIndex].status === 'pending-renewal'
                        ? 'bg-amber-500'
                        : 'bg-red-500'
                  }`}></div>
                  <span>STATUS: {certifications[activeDetailIndex].status === 'valid'
                    ? 'CERTIFIED'
                    : certifications[activeDetailIndex].status === 'pending-renewal'
                      ? 'RENEWAL SCHEDULED'
                      : 'REQUIRES UPDATE'
                  }</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Certificates Carousel (8 columns) */}
          <div className="lg:col-span-8">
            {/* Technical carousel header */}
            <div className={`bg-white rounded-t-sm border-t border-l border-r border-neutral-200 p-4 flex items-center justify-between transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center">
                <Database size={18} className="text-primary-600 mr-2" />
                <h3 className="font-medium text-neutral-800">Certification Registry</h3>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                  <Clock size={12} className="inline mr-1" />
                  UPDATED: {new Date().toISOString().split('T')[0]}
                </div>
                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                  TOTAL: {certifications.length}
                </div>
              </div>
            </div>

            {/* Technical carousel container */}
            <div className={`relative bg-white border-l border-r border-neutral-200 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Navigation buttons */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20">
                <button
                  onClick={handlePrevious}
                  disabled={isAnimating}
                  className="w-10 h-10 bg-neutral-800 flex items-center justify-center text-white
                           hover:bg-primary-600 transition-colors border border-neutral-700
                           focus:outline-none disabled:opacity-50"
                  aria-label="Previous certifications"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20">
                <button
                  onClick={handleNext}
                  disabled={isAnimating}
                  className="w-10 h-10 bg-neutral-800 flex items-center justify-center text-white
                           hover:bg-primary-600 transition-colors border border-neutral-700
                           focus:outline-none disabled:opacity-50"
                  aria-label="Next certifications"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Carousel */}
              <div className="overflow-hidden p-4">
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-4"
                  style={{ transform: `translateX(-${activePage * 100}%)` }}
                >
                  {/* Map through certifications in groups based on itemsPerPage */}
                  {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }).map((_, pageIndex) => (
                    <div key={pageIndex} className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {certifications
                        .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                        .map((cert, certIndex) => {
                          const absoluteIndex = pageIndex * itemsPerPage + certIndex;
                          return (
                            <div
                              key={absoluteIndex}
                              className={`bg-white overflow-hidden shadow-sm border ${
                                absoluteIndex === activeDetailIndex
                                  ? 'border-primary-300 ring-1 ring-primary-200'
                                  : 'border-neutral-200 hover:border-primary-200'
                              } transition-all duration-300 cursor-pointer`}
                              onClick={() => setActiveDetailIndex(absoluteIndex)}
                            >
                              <div className="h-56 overflow-hidden relative">
                                {/* Technical reference number */}
                                <div className="absolute top-3 left-3 font-mono text-xs text-white bg-neutral-900/80
                                              px-2 py-1 z-10 border-l border-primary-600">
                                  {cert.code}
                                </div>

                                {/* Issuer info */}
                                <div className="absolute top-3 right-3 font-mono text-xs text-white bg-neutral-900/80
                                              px-2 py-1 z-10">
                                  {cert.issuer}
                                </div>

                                <img
                                  src={cert.image}
                                  alt={cert.name}
                                  className="w-full h-full object-cover transition-transform duration-700
                                           group-hover:scale-105"
                                />



                                {/* Technical overlay patterns */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>

                                {/* Technical corner elements */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20"></div>

                                <div className="absolute inset-x-0 bottom-0 p-3 flex justify-between items-center">
                                  <span className="text-white text-xs flex items-center">
                                    <Award size={12} className="mr-1" />
                                    Valid: {cert.validUntil}
                                  </span>

                                  <div className={`px-2 py-0.5 text-xs flex items-center ${
                                    cert.status === 'valid'
                                      ? 'bg-emerald-500/20 text-emerald-100'
                                      : cert.status === 'pending-renewal'
                                        ? 'bg-amber-500/20 text-amber-100'
                                        : 'bg-red-500/20 text-red-100'
                                  }`}>
                                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                      cert.status === 'valid'
                                        ? 'bg-emerald-500'
                                        : cert.status === 'pending-renewal'
                                          ? 'bg-amber-500'
                                          : 'bg-red-500'
                                    }`}></div>
                                    {cert.status === 'valid'
                                      ? 'Active'
                                      : cert.status === 'pending-renewal'
                                        ? 'Pending'
                                        : 'Expired'
                                    }
                                  </div>
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-medium text-neutral-900 text-sm">{cert.name}</h3>
                                  {absoluteIndex === activeDetailIndex && (
                                    <div className="w-2 h-2 bg-primary-600"></div>
                                  )}
                                </div>
                                <div className="h-0.5 w-1/3 bg-neutral-200 mt-2"></div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical carousel footer */}
            <div className={`bg-white rounded-b-sm border-b border-l border-r border-neutral-200 p-4 flex justify-between items-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-xs font-mono text-neutral-500">
                PAGE {activePage + 1} OF {Math.ceil(certifications.length / itemsPerPage)}
              </div>

              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setActivePage(index);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    disabled={isAnimating}
                    className={`h-1.5 transition-all rounded-sm ${
                      index === activePage
                        ? 'w-8 bg-primary-600'
                        : 'w-4 bg-neutral-300 hover:bg-primary-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <div className="flex items-center text-xs font-mono text-neutral-500">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                <span>REGISTRY ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Certifications;
