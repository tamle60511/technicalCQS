import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Zap, CheckCircle2, Target, Recycle, Award, Globe, BarChart2, Users, Gauge, ArrowUpRight, Code, AlertCircle, ArrowRight } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  milestone?: string; // Optional milestone text
  icon?: React.ReactNode; // Optional custom icon
  stats?: { label: string; value: string; icon?: React.ReactNode; trend?: 'up' | 'down' | 'neutral' }[];
}

interface CompanyTimelineProps {
  className?: string;
  companyName?: string;
  title?: string;
  subtitle?: string;
  timelineItems?: TimelineItem[];
}

const Timeline: React.FC<CompanyTimelineProps> = ({
  className = '',
  companyName = 'CQS',
  title = 'Our Journey to Excellence',
  subtitle = 'Company History',
  timelineItems = [
    {
      year: '2002',
      title: 'Company Foundation',
      description: `${companyName} was established in Vietnam with a focus on aluminum die casting for the motorcycle
        industry. Starting with a 3,000 sq.m facility and 50 employees, the company
        began producing precision aluminum components using two 250-ton die casting machines.`,
      milestone: 'Vietnam Manufacturing Center Established',
      icon: <Target size={16} className="text-primary-600" />,
      stats: [
        { label: 'Employees', value: '50', icon: <Users size={14} />, trend: 'up' },
        { label: 'Facility', value: '3,000 sq.m', icon: <Globe size={14} />, trend: 'up' },
        { label: 'Machine Capacity', value: '250 ton', icon: <Gauge size={14} />, trend: 'neutral' }
      ]
    },
    {
      year: '2008',
      title: 'Expansion & Quality Certification',
      description: `Following steady growth, ${companyName} expanded operations to a 7,000 sq.m facility and obtained
        ISO 9001:2008 certification. This period marked our first exports to Taiwan and Japan,
        establishing our international market presence in the automotive components sector.`,
      milestone: 'ISO 9001:2008 Certification',
      icon: <Award size={16} className="text-primary-600" />,
      stats: [
        { label: 'Employees', value: '220', icon: <Users size={14} />, trend: 'up' },
        { label: 'Facility', value: '7,000 sq.m', icon: <Globe size={14} />, trend: 'up' },
        { label: 'Export Markets', value: '2', icon: <ArrowUpRight size={14} />, trend: 'up' }
      ]
    },
    {
      year: '2013',
      title: 'Advanced Technology Implementation',
      description: `${companyName} made significant investments in advanced manufacturing technologies, including
        high-pressure die casting (HPDC) and gravity die casting (GDC) processes. We added six
        state-of-the-art CNC machining centers to enhance our precision capabilities to ±0.01mm tolerances.`,
      milestone: 'HPDC & GDC Technology Integration',
      icon: <Zap size={16} className="text-primary-600" />,
      stats: [
        { label: 'Employees', value: '450', icon: <Users size={14} />, trend: 'up' },
        { label: 'Precision', value: '±0.01mm', icon: <Target size={14} />, trend: 'up' },
        { label: 'Production', value: '1.2M parts', icon: <BarChart2 size={14} />, trend: 'up' }
      ]
    },
    {
      year: '2017',
      title: 'Automotive Quality Excellence',
      description: `${companyName} achieved IATF 16949 certification, the international standard for automotive quality
        management systems. Our 15,000 sq.m state-of-the-art facility integrated die-casting,
        CNC machining, surface treatment, and assembly processes to provide a "one-stop" manufacturing solution.`,
      milestone: 'IATF 16949 Certification',
      icon: <CheckCircle2 size={16} className="text-primary-600" />,
      stats: [
        { label: 'Employees', value: '750', icon: <Users size={14} />, trend: 'up' },
        { label: 'Facility', value: '15,000 sq.m', icon: <Globe size={14} />, trend: 'up' },
        { label: 'Quality Rate', value: '99.5%', icon: <CheckCircle2 size={14} />, trend: 'up' }
      ]
    },
    {
      year: '2021',
      title: 'Sustainability & Global Expansion',
      description: `${companyName} implemented an advanced aluminum recycling system, achieving a 93% recycling rate.
        We expanded our global distribution network to eight countries including the United States, Canada,
        Mexico, Japan, Italy, Taiwan, China, and Southeast Asia with a focus on lightweight automotive components.`,
      milestone: '93% Aluminum Recycling Achievement',
      icon: <Recycle size={16} className="text-primary-600" />,
      stats: [
        { label: 'Employees', value: '900', icon: <Users size={14} />, trend: 'up' },
        { label: 'Recycling', value: '93%', icon: <Recycle size={14} />, trend: 'up' },
        { label: 'Export Markets', value: '8', icon: <Globe size={14} />, trend: 'up' }
      ]
    },
    {
      year: 'Today',
      title: 'Industry Leadership',
      description: `Today, ${companyName} stands as a leading die casting specialist with over 1,000 employees
        and production capacity exceeding 3 million components annually. Our die casting machines range from
        250 to 1,650 tons, enabling us to produce complex automotive components that meet the highest international standards.`,
      milestone: 'Operating in 8+ Global Markets',
      icon: <Globe size={16} className="text-primary-600" />,
      stats: [
        { label: 'Employees', value: '1,000+', icon: <Users size={14} />, trend: 'up' },
        { label: 'Production', value: '3M+ parts', icon: <BarChart2 size={14} />, trend: 'up' },
        { label: 'Machine Capacity', value: '1,650 ton', icon: <Gauge size={14} />, trend: 'up' }
      ]
    }
  ]
}) => {
  // Grid pattern CSS
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";
  const gridLinesClass = "bg-[linear-gradient(to_right,transparent_49px,#333_50px,#333_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#333_50px,#333_51px,transparent_51px)] [background-size:50px_50px]";

  // Get current year for reference calculations
  const currentYear = new Date().getFullYear();

  // Timeline animation
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animate the timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTimelineIndex((prev) => (prev + 1) % timelineItems.length);
        setIsAnimating(false);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [timelineItems.length]);

  // Calculate progress percentages for visualization
  const calculateProgress = (index: number) => {
    return `${((index + 1) / timelineItems.length) * 100}%`;
  };

  // Parse year to number for calculations
  const parseYear = (year: string) => {
    return year === 'Today' ? currentYear : parseInt(year);
  };

  return (
    <section className={`py-16 md:py-24 bg-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${gridPatternClass}`}></div>
      <div className={`absolute inset-0 opacity-[0.01] pointer-events-none ${gridLinesClass}`}></div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/20 hidden lg:block">
        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-primary-500/30"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/20 hidden lg:block">
        <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-primary-500/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            {/* Technical section label */}
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600 relative group">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Clock className="mr-2" size={14} />
              <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center relative">
              Our <span className="text-primary-600">Journey</span> to Excellence
              <div className="text-xs text-neutral-500 font-mono absolute -top-4 -right-4 opacity-50">v2.1</div>
            </h2>

            {/* Technical decoration */}
            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>

            {/* Technical timeline legend */}
            <div className="flex items-center text-xs text-neutral-500 font-mono">
              <span className="mr-2">TIMELINE</span>
              <div className="w-12 h-px bg-neutral-300 mr-2"></div>
              <span className="mr-1">REF:</span>
              <span className="text-primary-500">{companyName}-HIST-{currentYear}</span>
            </div>
          </div>

          {/* New Dashboard Timeline Design */}
          <div className="flex flex-col space-y-8">
            {/* Technical timeline header with company growth visualization */}
            <div className="bg-white border border-neutral-200 rounded-sm shadow-sm p-4 relative group hover:border-primary-300 transition-all duration-300">
              {/* Technical corner elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <BarChart2 size={18} className="text-primary-500 mr-2" />
                  <h3 className="font-medium text-neutral-800">Company Growth Timeline</h3>
                </div>
                <div className="text-xs font-mono text-neutral-500 flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>SPAN: {timelineItems[0].year} - {currentYear}</span>
                </div>
              </div>

              {/* Interactive timeline navigation */}
              <div className="relative h-10 mb-6">
                {/* Timeline track */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 transform -translate-y-1/2">
                  {/* Timeline progress */}
                  <div
                    className="absolute top-0 left-0 h-full bg-primary-500 transition-all duration-1000 ease-out"
                    style={{ width: calculateProgress(activeTimelineIndex) }}
                  ></div>
                </div>

                {/* Timeline nodes */}
                {timelineItems.map((item, index) => (
                  <button
                    key={index}
                    className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 focus:outline-none group/node
                      ${index <= activeTimelineIndex ? 'z-20' : 'z-10'}`}
                    style={{ left: `${(index / (timelineItems.length - 1)) * 100}%` }}
                    onClick={() => setActiveTimelineIndex(index)}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300
                      ${index < activeTimelineIndex ? 'bg-primary-500 border-primary-500' :
                       index === activeTimelineIndex ? 'bg-white border-primary-500 ring-4 ring-primary-100' :
                       'bg-white border-neutral-400'}
                      ${index === activeTimelineIndex ? 'scale-125' : 'hover:scale-110'}`}
                    >
                    </div>
                    <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap
                      font-medium text-sm transition-all duration-300
                      ${index === activeTimelineIndex ? 'text-primary-600' : 'text-neutral-500'}
                      ${index === activeTimelineIndex ? 'opacity-100 scale-110' : 'opacity-70 group-hover/node:opacity-100'}`}
                    >
                      {item.year}
                    </div>
                  </button>
                ))}
              </div>

              {/* Technical data measurements */}
              <div className="flex justify-between text-xs font-mono text-neutral-400 px-4 mb-2">
                <div>ORIGIN</div>
                <div>YEAR.INCREMENT: ~{Math.ceil((parseYear(timelineItems[timelineItems.length-1].year) - parseYear(timelineItems[0].year)) / (timelineItems.length - 1))}</div>
                <div>CURRENT</div>
              </div>
            </div>

            {/* Main timeline content display */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left column - Timeline event details */}
              <div className="md:col-span-8">
                <div className="bg-white border border-neutral-200 rounded-sm shadow-sm h-full relative">
                  {/* Active year badge */}
                  <div className="absolute -top-3 left-6 bg-primary-600 text-white px-3 py-1 text-sm font-bold rounded-sm">
                    {timelineItems[activeTimelineIndex].year}
                  </div>

                  <div className="p-6 pt-8">
                    {/* Title with technical code */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-neutral-900">
                        {timelineItems[activeTimelineIndex].title}
                      </h3>
                      <div className="text-xs font-mono bg-neutral-100 border border-neutral-200 px-2 py-0.5 text-neutral-500">
                        REF:{activeTimelineIndex + 1}.{timelineItems[activeTimelineIndex].year}
                      </div>
                    </div>

                    {/* Description with technical styling */}
                    <div className={`prose prose-neutral max-w-none mb-6 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                      <p className="text-neutral-600 leading-relaxed text-base border-l-2 border-neutral-200 pl-4 py-1">
                        {timelineItems[activeTimelineIndex].description.replace(/{companyName}/g, companyName)}
                      </p>
                    </div>

                    {/* Milestone badge with enhanced styling */}
                    {timelineItems[activeTimelineIndex].milestone && (
                      <div className="bg-primary-50 border border-primary-100 p-4 rounded-sm relative">
                        <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t border-l border-primary-300"></div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b border-r border-primary-300"></div>

                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-white border border-primary-200 rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                            {timelineItems[activeTimelineIndex].icon || <AlertCircle size={20} className="text-primary-500" />}
                          </div>
                          <div>
                            <div className="text-xs text-primary-800 font-medium uppercase tracking-wide mb-1 flex items-center">
                              <Code size={12} className="mr-1" />
                              Milestone Achievement
                            </div>
                            <div className="font-medium text-neutral-800 text-lg">
                              {timelineItems[activeTimelineIndex].milestone}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation controls */}
                    <div className="flex justify-between mt-6 pt-4 border-t border-neutral-200">
                      <button
                        className={`flex items-center text-sm px-3 py-1.5 rounded-sm ${activeTimelineIndex > 0 ? 'text-primary-600 hover:bg-primary-50' : 'text-neutral-400 cursor-not-allowed'}`}
                        onClick={() => activeTimelineIndex > 0 && setActiveTimelineIndex(activeTimelineIndex - 1)}
                        disabled={activeTimelineIndex === 0}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Previous
                      </button>

                      <div className="text-xs font-mono text-neutral-500 flex items-center">
                        {activeTimelineIndex + 1}/{timelineItems.length}
                      </div>

                      <button
                        className={`flex items-center text-sm px-3 py-1.5 rounded-sm ${activeTimelineIndex < timelineItems.length - 1 ? 'text-primary-600 hover:bg-primary-50' : 'text-neutral-400 cursor-not-allowed'}`}
                        onClick={() => activeTimelineIndex < timelineItems.length - 1 && setActiveTimelineIndex(activeTimelineIndex + 1)}
                        disabled={activeTimelineIndex === timelineItems.length - 1}
                      >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Stats dashboard */}
              <div className="md:col-span-4">
                <div className="bg-white border border-neutral-200 rounded-sm shadow-sm h-full relative overflow-hidden">
                  {/* Technical background grid */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                  <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart2 size={16} className="text-primary-500 mr-2" />
                      <h3 className="font-medium text-neutral-800">Key Metrics</h3>
                    </div>
                    <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 text-neutral-600 border border-neutral-200 rounded-sm">
                      {timelineItems[activeTimelineIndex].year}
                    </div>
                  </div>

                  <div className="p-5 space-y-5">
                    {timelineItems[activeTimelineIndex].stats?.map((stat, idx) => (
                      <div key={idx} className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center text-sm text-neutral-700">
                            <div className="w-6 h-6 rounded-sm bg-primary-50 border border-primary-100 flex items-center justify-center mr-2">
                              {stat.icon || <BarChart2 size={14} className="text-primary-500" />}
                            </div>
                            {stat.label}
                          </div>
                          <div className="flex items-center font-medium">
                            {stat.value}
                            {stat.trend === 'up' && (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 text-emerald-500">
                                <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
                              </svg>
                            )}
                            {stat.trend === 'down' && (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 text-red-500">
                                <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="h-2 bg-neutral-100 rounded-sm overflow-hidden relative">
                          {/* Visualizing growth across timeline - this is a simplified visualization */}
                          <div
                            className="absolute top-0 left-0 h-full bg-primary-500 transition-all duration-1000"
                            style={{ width: `${(idx + 1 + activeTimelineIndex) * 15}%` }}
                          >
                            {/* Technical measuring marks */}
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute top-0 bottom-0 w-px bg-white opacity-40"
                                style={{left: `${i * 20}%`}}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technical stat comparison */}
                  <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50">
                    <div className="text-xs text-neutral-500 font-mono flex items-center justify-between">
                      <span>GROWTH FROM {timelineItems[0].year}:</span>
                      {activeTimelineIndex > 0 && (
                        <span className="text-primary-600">
                          +{parseYear(timelineItems[activeTimelineIndex].year) - parseYear(timelineItems[0].year)} YEARS
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline progress overview */}
            <div className="bg-white border border-neutral-200 rounded-sm shadow-sm p-5 relative">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {timelineItems.map((item, index) => (
                  <button
                    key={index}
                    className={`flex flex-col items-center p-3 rounded-sm transition-all cursor-pointer
                      ${index === activeTimelineIndex ? 'bg-primary-50 border border-primary-200' : 'hover:bg-neutral-50'}`}
                    onClick={() => setActiveTimelineIndex(index)}
                  >
                    <div className={`text-lg font-bold ${index === activeTimelineIndex ? 'text-primary-600' : 'text-neutral-700'}`}>
                      {item.year}
                    </div>
                    <div className="text-xs text-neutral-500 text-center mt-1 truncate w-full">
                      {item.title.length > 20 ? item.title.substring(0, 18) + '...' : item.title}
                    </div>
                    <div className={`w-2 h-2 mt-2 rounded-full ${index === activeTimelineIndex ? 'bg-primary-500' : 'bg-neutral-300'}`}></div>
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-dashed border-neutral-200 flex justify-between items-center text-xs text-neutral-500 font-mono">
                <div>
                  <Clock size={12} className="inline-block mr-1" />
                  TIMELINE SPAN: {parseYear(timelineItems[timelineItems.length - 1].year) - parseYear(timelineItems[0].year)} YEARS
                </div>
                <div className="flex items-center">
                  DOC.REF: {companyName}.TIMELINE.{currentYear}
                  <span className="mx-2">|</span>
                  <span>v2.1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
