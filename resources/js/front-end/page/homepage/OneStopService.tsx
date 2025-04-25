import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

import {
  Factory,
  Settings,
  Hammer,
  Paintbrush,
  Wrench,
  Package,
  ChevronRight,
  ExternalLink,
  Terminal,
  Database,
  Shield,
  Gauge,
  Cpu,
  Globe,
  AlertCircle,
  Clock,
  BarChart2,
  Layers,
  FileText,
  Check,
  ArrowRight,
  Zap
} from 'lucide-react';

// Define TypeScript interfaces
interface Service {
  title: string;
  description: string;
  icon: React.FC<{ className?: string; size?: number }>;
  code?: string;
  capacityLevel?: number;
  precisionLevel?: number;
  compatibility?: string[];
  status?: 'active' | 'maintenance' | 'upgrading';
  techSpecs?: string;
}

interface OneStopServiceProps {
  services?: Service[];
}

interface ServiceCardProps extends Service {
  index: number;
  isLoaded: boolean;
  activeService: boolean;
  onSelect: () => void;
}

export default function OneStopService({ services }: OneStopServiceProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(true);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Current year for technical reference codes
  const currentYear = new Date().getFullYear();

  // Default services data if not provided via props
  const defaultServices: Service[] = [
    {
      title: 'High Pressure Die Casting',
      description: 'Advanced aluminum die casting with machines ranging from 250 to 1,650 tons',
      icon: Factory,
      code: 'HPDC',
      capacityLevel: 90,
      precisionLevel: 95,
      compatibility: ['A380', 'ADC12', 'A383', 'A356'],
      status: 'active',
      techSpecs: 'Machine Capacity: 250-1,650 tons | Precision: ±0.05mm'
    },
    {
      title: 'CNC Precision Processing',
      description: 'High-precision CNC machining for complex component manufacturing',
      icon: Settings,
      code: 'CNC',
      capacityLevel: 95,
      precisionLevel: 98,
      compatibility: ['All Aluminum Alloys', 'Steel Components'],
      status: 'active',
      techSpecs: 'Axis: 3-5 | Precision: ±0.02mm | CAM: Integrated'
    },
    {
      title: 'Gravity Die Casting',
      description: 'Specialized gravity casting for premium aluminum components',
      icon: Hammer,
      code: 'GDC',
      capacityLevel: 85,
      precisionLevel: 90,
      compatibility: ['A356', 'A357', 'ADC12'],
      status: 'active',
      techSpecs: 'Max Size: 800mm | Wall Thickness: 3mm+ | T6 Heat Treatment'
    },
    {
      title: 'Surface Treatment',
      description: 'Professional painting and surface finishing for enhanced aesthetics and protection',
      icon: Paintbrush,
      code: 'PNT',
      capacityLevel: 88,
      precisionLevel: 92,
      compatibility: ['Die Cast Parts', 'CNC Machined Components'],
      status: 'active',
      techSpecs: 'E-Coating | Powder Coating | Anodizing | Chromating'
    },
    {
      title: 'Assembly Services',
      description: 'Comprehensive assembly solutions with rigorous quality control',
      icon: Wrench,
      code: 'ASM',
      capacityLevel: 92,
      precisionLevel: 94,
      compatibility: ['All CQS Components', 'Client-Provided Parts'],
      status: 'active',
      techSpecs: 'Semi/Full Automation | Torque Verification | Vision Systems'
    },
    {
      title: 'Packaging & Logistics',
      description: 'Global distribution to Taiwan, the US, Canada, Mexico, Japan, Italy, China, and Southeast Asia',
      icon: Package,
      code: 'PKG',
      capacityLevel: 94,
      precisionLevel: 90,
      compatibility: ['All CQS Products', 'MRO Components'],
      status: 'active',
      techSpecs: 'Global Shipping | JIT Delivery | 8+ Countries Served'
    }
  ];

  // Use provided services or default if not available
  const serviceItems: Service[] = services || defaultServices;

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
  const ActiveIcon = serviceItems[activeServiceIndex].icon;

  return (
    <section className="py-16 md:py-20 bg-neutral-100 relative overflow-hidden">
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,transparent_49px,#222_50px,#222_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#222_50px,#222_51px,transparent_51px)] [background-size:50px_50px]"></div>

      {/* Horizontal scanning line */}
      <div className={`absolute left-0 right-0 h-px bg-primary-400/30 pointer-events-none transition-all duration-1000 ease-in-out ${isScanning ? 'top-0' : 'top-full'}`}></div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t border-l border-primary-600/20 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b border-r border-primary-600/20 opacity-60"></div>

      {/* Technical measurement lines */}
      <div className="absolute top-0 left-10 bottom-0 w-0.5 flex flex-col opacity-30 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex-1 border-b border-primary-600/30 relative">
            {i % 2 === 0 && (
              <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-primary-600/50"></div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Technical title header */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <div className="inline-flex items-center mb-3 bg-neutral-900/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-neutral-800/10 relative">
              <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary-500/50"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary-500/50"></div>
              <Terminal className="mr-2 text-primary-600" size={16} />
              <p className="text-neutral-700 font-mono text-sm tracking-wider">
                <span className="text-primary-600">SYS:</span> CQS.MANUFACTURING.SERVICES.{currentYear}
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight flex items-center">
              <div className="w-1.5 h-8 bg-primary-600 mr-3"></div>
              <span>Complete <span className="text-primary-600">One-Stop</span> Solutions</span>
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 text-xs text-neutral-500 font-mono flex items-center bg-white px-2 py-1 rounded-sm border border-neutral-200">
            <Clock size={12} className="mr-1 text-primary-500" />
            <span>SERVICE.MATRIX.{currentYear}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Services Dashboard (7 columns) */}
          <div className="lg:col-span-7">
            {/* Main dashboard panel */}
            <div className={`bg-white rounded-sm shadow-md border border-neutral-200 transition-all duration-1000 hover:border-primary-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Dashboard header */}
              <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center">
                  <Database size={18} className="text-primary-600 mr-2" />
                  <h3 className="font-medium text-neutral-800">Manufacturing Services Database</h3>
                </div>
                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                  SERVICES: {serviceItems.length}
                </div>
              </div>

              {/* Main company description with technical styling */}
              <div className="p-5 border-b border-neutral-200">
                <div className="bg-neutral-50 p-4 border border-neutral-200 mb-5 rounded-sm relative">
                  <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary-500/20"></div>
                  <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary-500/20"></div>
                  <p className="text-neutral-700 leading-relaxed">
                    CQS provides customers with comprehensive "one-stop" services, from die-casting production
                    to CNC precision processing, stamping, painting, assembly, and packaging. Our integrated
                    approach ensures consistent quality and streamlined production for automotive and motorcycle
                    components with global distribution.
                  </p>
                </div>

                {/* Active service details panel */}

              </div>

              {/* Service cards grid */}
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceItems.map((service, index) => (
                  <ServiceCard
                    key={index}
                    index={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    code={service.code}
                    capacityLevel={service.capacityLevel}
                    precisionLevel={service.precisionLevel}
                    compatibility={service.compatibility}
                    status={service.status}
                    techSpecs={service.techSpecs}
                    isLoaded={isLoaded}
                    activeService={index === activeServiceIndex}
                    onSelect={() => setActiveServiceIndex(index)}
                  />
                ))}
              </div>

              {/* Technical dashboard footer */}
              <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
                <span>REF: CQS.SERVICES.{currentYear}</span>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                  <span>ALL SERVICES OPERATIONAL</span>
                </div>
              </div>
            </div>
                 {/* Technical CTA button */}
            <div className="mt-6 text-center">
              <Link
                href="/technologies"
                className="inline-flex items-center justify-center px-6 py-3
                         bg-primary-600 text-white
                         font-medium tracking-wide rounded-sm border border-primary-500
                         hover:bg-primary-700 transition-all
                         shadow-lg hover:shadow-primary-900/30 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/0 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <FileText className="mr-2 h-5 w-5" />
                <span>Discover Our Technologies</span>
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Technical Image (5 columns) */}
          <div className="lg:col-span-5 relative">
            {/* Technical image dashboard */}
            <div className={`bg-white rounded-sm shadow-md border border-neutral-200 transition-all duration-1000 hover:border-primary-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center">
                  <Factory size={18} className="text-primary-600 mr-2" />
                  <h3 className="font-medium text-neutral-800">Facility Monitoring</h3>
                </div>
                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200 flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                  <span>LIVE</span>
                </div>
              </div>

              <div className="p-4">
                <div className="relative overflow-hidden h-[400px] border border-neutral-200 rounded-sm">
                  {/* Technical corner elements */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary-600 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary-600 z-10"></div>

                  {/* Technical reference badge */}
                  <div className="absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-sm text-xs font-mono text-white px-2 py-1 z-10 border-r border-primary-600">
                    CQS-FACILITY-{currentYear}
                  </div>

                  <img
                    src='images/onetop.png'
                    alt="CQS Manufacturing Facility"
                    className="w-full h-full object-cover"
                  />



                  {/* Technical overlay patterns */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-neutral-900/30 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>

                  {/* Technical measurement grid */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-primary-500/10"></div>
                    ))}
                  </div>

                  {/* Caption bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-sm py-3 px-4 border-t border-neutral-700">
                    <div className="flex items-center">
                      <div className="w-2 h-6 bg-primary-600 mr-3"></div>
                      <div>
                        <div className="text-white font-medium">Advanced Die Casting Facility</div>
                        <div className="text-neutral-400 text-sm flex items-center">
                          <Shield size={12} className="mr-1.5 text-primary-400" />
                          <span>IATF16949 & ISO9001 Certified | Global Distribution</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical facility stats */}
              <div className="p-4 border-t border-neutral-200 bg-neutral-50">
                <div className="flex items-center mb-3">
                  <BarChart2 size={16} className="text-primary-600 mr-2" />
                  <h4 className="font-medium text-neutral-700">Facility Metrics</h4>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-sm border border-neutral-200">
                    <div className="flex items-center">
                      <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                        <Gauge className="text-primary-600" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 uppercase">Capacity</div>
                        <div className="font-medium text-neutral-800">250-1,650 tons</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-sm border border-neutral-200">
                    <div className="flex items-center">
                      <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                        <Globe className="text-primary-600" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 uppercase">Distribution</div>
                        <div className="font-medium text-neutral-800">8+ Countries</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-sm border border-neutral-200">
                    <div className="flex items-center">
                      <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                        <Zap className="text-primary-600" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 uppercase">Precision</div>
                        <div className="font-medium text-neutral-800">±0.05mm</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical footer */}
                <div className="mt-4 pt-3 border-t border-dashed border-neutral-300 text-xs font-mono text-neutral-500 flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertCircle size={12} className="mr-1 text-primary-600" />
                    <span>Facility data updated quarterly</span>
                  </div>
                  <span>CQS.FACILITY.{currentYear.toString().substring(2)}</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>


    </section>
  );
}

// Sub-component for individual service cards
function ServiceCard({
  title,
  description,
  icon: Icon,
  code,
  index,
  capacityLevel,
  precisionLevel,
  compatibility,
  status,
  techSpecs,
  isLoaded,
  activeService,
  onSelect
}: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col p-4 bg-white border ${
        activeService
          ? 'border-primary-300 ring-1 ring-primary-200 shadow-md'
          : 'border-neutral-200 hover:border-primary-200 hover:shadow-sm'
      } transition-all cursor-pointer ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
      onClick={onSelect}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className={`w-12 h-12 ${
            activeService
              ? 'bg-primary-50 border-primary-200'
              : 'bg-neutral-100 border-neutral-300'
            } border flex items-center justify-center transition-colors`}>
            <Icon className="text-primary-600" size={20} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-neutral-900 truncate">{title}</h3>
            <div className="flex items-center">
              <div className={`w-1.5 h-1.5 ${status === 'active' ? 'bg-emerald-500' : 'bg-amber-500'} rounded-full mr-1.5`}></div>
              <span className="text-xs text-neutral-500 font-mono">{code}</span>
            </div>
          </div>
          <p className="text-sm text-neutral-600 line-clamp-2">{description}</p>
        </div>
      </div>

      {activeService && (
        <div className="mt-3 pt-3 border-t border-neutral-200">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-neutral-500">Tech Overview</span>
            <Link
              href={`/services/${code?.toLowerCase()}`}
              className="text-primary-600 hover:text-primary-700 flex items-center"
            >
              Details <ArrowRight size={12} className="ml-1" />
            </Link>
          </div>
          {/* <div className="text-xs font-mono text-neutral-600 bg-neutral-50 p-2 border border-neutral-200 rounded-sm">
            {techSpecs}
          </div> */}
        </div>
      )}
    </div>
  );
}
