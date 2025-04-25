import React, { useState, useEffect } from 'react';
import { Play, ChevronRight, Shield, BarChart2, Award, Clock, MapPin, Users, Globe, Factory, Zap, Terminal } from 'lucide-react';

interface CompanyHeroProps {
  className?: string;
  companyName?: string;
  yearsInBusiness?: number;
  employeeCount?: number;
  globalMarkets?: number;
  facilityImageUrl?: string;
  cncImageUrl?: string;
  industry?: string;
  location?: string;
  facilitySize?: string;
}

const CompanyHero: React.FC<CompanyHeroProps> = ({
  className = '',
  companyName = 'CQS',
  yearsInBusiness = 22,
  employeeCount = 1000,
  globalMarkets = 8,
  facilityImageUrl = '/images/aboutcnc.jpg',
  cncImageUrl = '/images/cnc.jpg',
  location = 'Vietnam',
}) => {
  // Technical diagonal pattern CSS class
  const diagonalPatternClass = "bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px]";

  // Grid pattern CSS class
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";

  // Blueprint grid lines CSS class
  const gridLinesClass = "bg-[linear-gradient(to_right,transparent_49px,#333_50px,#333_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#333_50px,#333_51px,transparent_51px)] [background-size:50px_50px]";

  // Stats with custom styles
  const stats = [
    { label: 'Years Experience', value: yearsInBusiness, icon: <Clock size={16} />, color: 'primary' },
    { label: 'Skilled Experts', value: employeeCount, icon: <Users size={16} />, color: 'emerald' },
    { label: 'Global Markets', value: globalMarkets, icon: <Globe size={16} />, color: 'amber' },
  ];

  // Animated counter effect
  const [counters, setCounters] = useState(stats.map(stat => 0));

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const frameRate = 1000 / 60; // 60fps
    const steps = duration / frameRate;

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / steps;
      let count = 0;

      return setInterval(() => {
        count += increment;
        if (count >= stat.value) {
          count = stat.value;
          clearInterval(intervals[index]);
        }

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(count);
          return newCounters;
        });
      }, frameRate);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  // Technical console type animation
  const [loadingText, setLoadingText] = useState('');
  const consoleText = 'Initializing CQS Manufacturing Interface...';

  useEffect(() => {
    if (loadingText.length < consoleText.length) {
      const timeout = setTimeout(() => {
        setLoadingText(consoleText.substring(0, loadingText.length + 1));
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [loadingText]);

  return (
    <section className={`relative py-16 md:py-24 bg-neutral-900 text-white overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${gridPatternClass}`}></div>
      <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${gridLinesClass}`}></div>

      {/* Measurement marks */}
      <div className="absolute top-0 left-0 w-full h-2 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-primary-600/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-600/30"></div>
            )}
          </div>
        ))}
      </div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30">
        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-primary-500/50"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30">
        <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-primary-500/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Side: Company Info - 5 cols on desktop */}
          <div className="md:col-span-5 space-y-8">
            {/* Terminal-style header with typing animation */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-sm overflow-hidden">
              <div className="bg-neutral-900 px-3 py-2 flex items-center border-b border-neutral-700">
                <div className="flex space-x-1.5 mr-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-neutral-400">terminal@{companyName.toLowerCase()}.sys</div>
                <div className="ml-auto">
                  <Terminal size={12} className="text-neutral-400" />
                </div>
              </div>

              <div className="p-3 font-mono text-xs">
                <div className="flex">
                  <span className="text-green-400 mr-1.5">$</span>
                  <span className="text-neutral-100">{loadingText}</span>
                  <span className={`h-4 w-2 bg-neutral-100 ${loadingText.length < consoleText.length ? 'animate-pulse' : ''}`}></span>
                </div>
                <div className={`text-green-400 mt-1 ${loadingText.length === consoleText.length ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                  System ready. Welcome to {companyName}.
                </div>
              </div>
            </div>

            {/* Main company title */}
            <div>
              <div className="inline-flex items-center bg-primary-800/40 px-4 py-2 mb-6 border-l-2 border-primary-600 relative group">
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-sm font-medium tracking-wider uppercase">Aluminum Die Casting</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="text-primary-500">Creativity</span>, Quality<br/>
                & <span className="text-primary-500">Sustainability</span>
                <div className="text-xs font-mono text-neutral-500 mt-2">EST. 2002 | HEADQUARTERS: {location}</div>
              </h1>

              <div className="w-20 h-0.5 bg-primary-600 mb-8 relative">
                <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-primary-500 transform -translate-x-1/2 rotate-45"></div>
              </div>

              <p className="text-neutral-300 text-base mb-8 leading-relaxed border-l-2 border-neutral-700 pl-4 py-1">
                Founded in 2002, {companyName} has established itself as a premier die casting specialist, delivering
                high-precision aluminum components through our advanced HPDC and GDC technologies, complemented by
                state-of-the-art CNC machining capabilities.
              </p>
            </div>

            {/* Technical metrics display */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-sm p-5 relative">
              <div className="absolute -top-3 left-4 bg-neutral-800 px-2 text-xs font-mono text-primary-400 border-t border-l border-r border-neutral-700">
                COMPANY METRICS
              </div>

              <div className="absolute top-0 left-0 right-0 flex justify-between px-5 -mt-0.5">
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} className="w-px h-1 bg-primary-500"></div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-5">
                {stats.map((stat, index) => (
                  <div key={index} className={`relative group flex flex-col`}>
                    <div className={`flex items-center mb-2`}>
                      <div className={`w-7 h-7 bg-${stat.color}-900/60 border border-${stat.color}-600/30 flex items-center justify-center rounded-sm mr-2`}>
                        {stat.icon}
                      </div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">{stat.label}</div>
                    </div>

                    <div className={`text-2xl font-bold text-${stat.color}-500 mb-1 group-hover:text-${stat.color}-400 transition-colors`}>
                      {counters[index]}
                      <span className="text-xs font-mono ml-1">+</span>
                    </div>

                    <div className="mt-1 h-1 bg-neutral-700 rounded-sm overflow-hidden">
                      <div
                        className={`h-full bg-${stat.color}-500 transition-all duration-1000 ease-out`}
                        style={{ width: `${(counters[index] / stat.value) * 100}%` }}
                      ></div>
                    </div>

                    <div className="mt-1 flex justify-between text-[10px] font-mono text-neutral-500">
                      <span>0</span>
                      <span>{Math.round(stat.value * 1.2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-3 right-4 bg-neutral-800 px-2 text-xs font-mono text-neutral-500 border-b border-l border-r border-neutral-700">
                <Clock className="inline w-3 h-3 mr-1" />
                UPDATED: {new Date().toISOString().split('T')[0]}
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {['IATF 16949', 'ISO 9001:2015', 'ISO 14001:2015'].map((cert, i) => (
                <div key={i} className="text-xs px-3 py-1.5 bg-neutral-800 border border-neutral-700 flex items-center rounded-sm">
                  <Shield size={14} className="text-primary-500 mr-1.5" />
                  <span className="text-neutral-300">{cert}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex space-x-4 items-center">
              <a href="#capabilities" className="px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-sm flex items-center transition-colors shadow-lg shadow-primary-900/20">
                Our Capabilities
                <ChevronRight size={16} className="ml-1" />
              </a>

              <a href="#video" className="flex items-center text-primary-400 hover:text-primary-300 group transition-colors">
                <div className="w-10 h-10 rounded-full border border-primary-600/50 flex items-center justify-center bg-primary-900/30 mr-2 group-hover:bg-primary-800/50 transition-colors">
                  <Play size={14} fill="currentColor" />
                </div>
                <span>Watch Factory Tour</span>
              </a>
            </div>
          </div>

          {/* Right Side: Visual Display - 7 cols on desktop */}
          <div className="md:col-span-7 relative">
            <div className="relative overflow-hidden border border-neutral-700 rounded-sm shadow-2xl h-[480px] group">
              {/* Technical overlay framework */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Grid divisions - horizontal */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute w-full h-px bg-white/10"
                    style={{ top: `${(i + 1) * (100 / 6)}%` }}
                  >
                    <div className="absolute left-0 top-0 w-1 h-1 border-t border-l border-white/20 -translate-x-[1px] -translate-y-[1px]"></div>
                    <div className="absolute right-0 top-0 w-1 h-1 border-t border-r border-white/20 translate-x-[1px] -translate-y-[1px]"></div>
                  </div>
                ))}

                {/* Grid divisions - vertical */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute h-full w-px bg-white/10"
                    style={{ left: `${(i + 1) * (100 / 6)}%` }}
                  >
                    <div className="absolute left-0 top-0 w-1 h-1 border-t border-l border-white/20 -translate-x-[1px] -translate-y-[1px]"></div>
                    <div className="absolute left-0 bottom-0 w-1 h-1 border-b border-l border-white/20 -translate-x-[1px] translate-y-[1px]"></div>
                  </div>
                ))}

                {/* Crosshair markers */}
                <div className="absolute top-[30%] left-[40%] w-12 h-12 border border-primary-500/30 flex items-center justify-center rounded-full group-hover:border-primary-500/60 transition-colors">
                  <div className="w-1 h-8 bg-primary-500/30 group-hover:bg-primary-500/60 transition-colors"></div>
                  <div className="w-8 h-1 bg-primary-500/30 absolute group-hover:bg-primary-500/60 transition-colors"></div>
                </div>

                <div className="absolute bottom-[25%] right-[35%] w-8 h-8 border border-primary-500/30 flex items-center justify-center rounded-full group-hover:border-primary-500/60 transition-colors">
                  <div className="w-1 h-6 bg-primary-500/30 group-hover:bg-primary-500/60 transition-colors"></div>
                  <div className="w-6 h-1 bg-primary-500/30 absolute group-hover:bg-primary-500/60 transition-colors"></div>
                </div>

                {/* Technical labels */}
                <div className="absolute top-4 left-4 flex items-center text-xs font-mono">
                  <div className="w-2 h-2 bg-primary-500 animate-pulse mr-1.5"></div>
                  <span className="text-primary-400">SCANNING ACTIVE</span>
                </div>

                <div className="absolute top-4 right-4 bg-neutral-900/80 backdrop-blur-sm px-3 py-1 flex items-center text-xs font-mono border border-neutral-700">
                  <span className="text-neutral-400 mr-1.5">CAM:</span>
                  <span className="text-primary-400">FACILITY.MAIN</span>
                </div>

                <div className="absolute bottom-16 left-4 text-xs font-mono text-white/70 backdrop-blur-sm bg-neutral-900/40 px-2 py-1 border-l border-primary-600/50">
                  <div className="text-primary-500 mb-0.5">SPECIFICATION:</div>
                  <div>Die-Casting: 250-1,650 Ton</div>
                  <div>CNC Machining: 3-5 Axis</div>
                  <div>Tolerance: ±0.01mm</div>
                </div>
              </div>

              {/* Main Facility Image with enhancement effects */}
              <img
                src={facilityImageUrl || "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80"}
                alt={`${companyName} Manufacturing Facility`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Technical overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 to-neutral-900/70 mix-blend-multiply"></div>
              <div className={`absolute inset-0 ${diagonalPatternClass} opacity-5`}></div>

              {/* Scanning effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent h-1/3 animate-scan"></div>

              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-sm py-3 px-4 border-t border-neutral-700 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-1 h-6 bg-primary-500 mr-3"></div>
                  <div>
                    <div className="text-white font-medium">Advanced Die Casting Manufacturing Center</div>
                    <div className="text-neutral-400 text-sm">
                      <MapPin size={12} className="inline mb-0.5 mr-1" />
                      {location} | 15,000 sq.m Integrated Facility
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <button className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white text-sm rounded-sm flex items-center transition-colors border border-neutral-700">
                    <Factory size={14} className="mr-1.5" />
                    Virtual Tour
                  </button>
                </div>
              </div>
            </div>

            {/* Additional information cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-neutral-800 border border-neutral-700 p-4 rounded-sm flex items-start group hover:border-primary-500/50 transition-colors">
                <div className="w-10 h-10 bg-primary-900/60 border border-primary-700 rounded-sm flex items-center justify-center mr-3 flex-shrink-0">
                  <Zap size={18} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">High-Pressure Die Casting</h3>
                  <p className="text-neutral-400 text-sm">Precision components with wall thickness as low as 0.8mm and tolerances of ±0.01mm</p>
                </div>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 p-4 rounded-sm flex items-start group hover:border-primary-500/50 transition-colors">
                <div className="w-10 h-10 bg-primary-900/60 border border-primary-700 rounded-sm flex items-center justify-center mr-3 flex-shrink-0">
                  <BarChart2 size={18} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">3M+ Components Annually</h3>
                  <p className="text-neutral-400 text-sm">Supplying leading automotive manufacturers across {globalMarkets}+ global markets</p>
                </div>
              </div>
            </div>

            {/* Technical measurement numbers */}
            <div className="absolute -bottom-2 right-0 text-xs font-mono text-neutral-500 hidden md:block">
              <div className="flex items-center">
                <div className="w-3 h-0.5 bg-neutral-500 mr-1"></div>
                <span className="mr-8">93% Recycling Rate</span>
                <div className="w-3 h-0.5 bg-neutral-500 mr-1"></div>
                <span>99.8% Quality Acceptance</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default CompanyHero;
