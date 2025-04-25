import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  FileText,
  ArrowRight,
  Terminal,
  Database,
  Shield,
  Cpu,
  Zap,
  Globe,
  AlertCircle,
  CheckCircle,
  Clock,
  Gauge
} from 'lucide-react';

// Since this component doesn't accept any props, we can simply add the return type
export default function CallToAction(): React.ReactElement {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState('ACTIVE');

  // Current year for technical reference codes
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsLoaded(true);

    // Scanning animation timing
    const scanInterval = setInterval(() => {
      setIsScanning(prev => !prev);
    }, 5000);

    // Simulate connection status changes
    const statusInterval = setInterval(() => {
      setConnectionStatus(prev => prev === 'ACTIVE' ? 'CONNECTING' : 'ACTIVE');
    }, 8000);

    return () => {
      clearInterval(scanInterval);
      clearInterval(statusInterval);
    };
  }, []);

  // Technical performance metrics
  const technicalMetrics = [
    {
      value: '8+',
      label: 'Global Markets',
      icon: <Globe size={16} className="text-primary-500" />
    },
    {
      value: '93%',
      label: 'Aluminum Recycling',
      icon: <Zap size={16} className="text-primary-500" />
    },
    {
      value: 'IATF16949',
      label: 'Certified',
      icon: <Shield size={16} className="text-primary-500" />
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-neutral-900 relative overflow-hidden">
      {/* Technical background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_9px,#333_10px),linear-gradient(to_bottom,transparent_9px,#333_10px)] [background-size:10px_10px] opacity-10"></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Horizontal scanning line */}
      <div className={`absolute left-0 right-0 h-px bg-primary-400/40 pointer-events-none transition-all duration-1000 ease-in-out ${isScanning ? 'top-0' : 'top-full'}`}></div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t border-l border-primary-600/20 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b border-r border-primary-600/20 opacity-60"></div>

      {/* Technical measurement lines */}
      <div className="absolute top-0 right-10 bottom-0 w-0.5 flex flex-col opacity-30 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex-1 border-b border-primary-600/30 relative">
            {i % 2 === 0 && (
              <div className="absolute bottom-0 right-0 w-2 h-0.5 bg-primary-600/50"></div>
            )}
          </div>
        ))}
      </div>

      {/* Technical measurement marks - top */}
      <div className="absolute top-0 left-0 w-full h-4 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-primary-600/30 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-4 bg-primary-600/40"></div>
            )}
          </div>
        ))}
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Technical dashboard header */}
        <div className={`mb-8 text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center mb-4 bg-neutral-800/80 backdrop-blur-sm px-4 py-2 rounded-sm border border-neutral-700/50 relative">
            <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary-500/50"></div>
            <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary-500/50"></div>
            <Terminal className="mr-2 text-primary-500" size={16} />
            <p className="text-white font-mono text-sm tracking-wider">
              <span className="text-primary-500">SYS:</span> CQS.CONNECTION.REQUEST.{currentYear}
            </p>
          </div>
        </div>

        {/* Main dashboard panel */}
        <div className={`max-w-4xl mx-auto bg-neutral-800/90 backdrop-blur-sm border border-neutral-700 rounded-sm shadow-xl relative transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Technical corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary-500 -mt-1 -ml-1"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary-500 -mb-1 -mr-1"></div>

          {/* Technical header */}
          <div className="p-4 border-b border-neutral-700 flex items-center justify-between">
            <div className="flex items-center">
              <Database size={18} className="text-primary-500 mr-2" />
              <h3 className="font-medium text-white">CQS Partner Connection Portal</h3>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-xs font-mono bg-neutral-900/60 px-2 py-0.5 rounded-sm text-neutral-300 border border-neutral-700 flex items-center">
                <Clock size={10} className="mr-1.5 text-primary-400" />
                {new Date().toISOString().split('T')[0]}
              </div>
              <div className="text-xs font-mono bg-neutral-900/60 px-2 py-0.5 rounded-sm text-neutral-300 border border-neutral-700 flex items-center">
                <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${connectionStatus === 'ACTIVE' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></div>
                <span>{connectionStatus}</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Your <span className="text-primary-500 relative">One-Stop
                <span className="absolute bottom-1 left-0 w-full h-1 bg-primary-600/30 -z-10"></span>
              </span> Aluminum Die Casting Partner
            </h2>

            <div className="w-20 h-0.5 bg-primary-600 mx-auto mb-8"></div>

            <div className="bg-neutral-900/50 backdrop-blur-sm p-4 border border-neutral-700 rounded-sm max-w-2xl mx-auto mb-10 relative">
              <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary-500/30"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary-500/30"></div>
              <p className="text-neutral-300 leading-relaxed">
                From die-casting to assembly, CQS delivers high-quality aluminum components
                for automotive and motorcycle industries. Experience the perfect balance of
                Creativity, Quality, and Sustainability in every product.
              </p>
            </div>

            {/* Technical call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5
                         bg-primary-600 text-white
                         font-medium tracking-wide rounded-sm border border-primary-500
                         hover:bg-primary-700 transition-all
                         shadow-lg hover:shadow-primary-900/30 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/0 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <PhoneCall className="mr-2 h-5 w-5" />
                <span>Contact Our Team</span>
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-3.5
                         bg-neutral-800 text-white
                         font-medium tracking-wide rounded-sm border border-neutral-700
                         hover:border-primary-500 hover:text-primary-500 transition-all"
              >
                <FileText className="mr-2 h-5 w-5" />
                <span>Request a Quote</span>
              </Link>
            </div>

            {/* Technical datapoints with dashboard styling */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-10 pt-8 border-t border-dashed border-neutral-700">
              {technicalMetrics.map((metric, index) => (
                <div key={index} className="bg-neutral-900/60 p-4 rounded-sm border border-neutral-700">
                  <div className="flex justify-center mb-2">{metric.icon}</div>
                  <div className="text-xl text-primary-500 font-bold mb-1">{metric.value}</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical dashboard footer */}
          <div className="px-5 py-3 border-t border-neutral-700 bg-neutral-900/50 text-xs font-mono text-neutral-500 flex justify-between items-center">
            <span>REF: CQS.PARTNER.CONNECT.{currentYear}</span>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
              <span>SYSTEM ONLINE: CQS.MFG.NETWORK</span>
            </div>
          </div>
        </div>

        {/* Technical status badges */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center text-xs font-mono text-neutral-500 bg-neutral-800/70 px-3 py-1.5 border border-neutral-700 rounded-sm">
            <CheckCircle size={12} className="mr-1.5 text-emerald-500" />
            <span>IATF 16949 CERTIFIED</span>
            <span className="mx-2 h-3 border-r border-neutral-700"></span>
            <AlertCircle size={12} className="mr-1.5 text-primary-500" />
            <span>SECURE CONNECTION</span>
          </div>
        </div>

        {/* Technical measurement marks - bottom */}
        <div className="absolute bottom-0 left-0 w-full h-4 flex transform rotate-180">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-primary-600/30 relative">
              {i % 5 === 0 && (
                <div className="absolute top-0 right-0 w-0.5 h-4 bg-primary-600/40"></div>
              )}
            </div>
          ))}
        </div>
      </div>



    </section>
  );
}
