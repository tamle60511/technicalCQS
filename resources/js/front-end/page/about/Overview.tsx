import React from 'react';
import { Globe, Wrench, Building, Users, MapPin, Award, HelpCircle, Zap, Clock, Ruler, ChevronRight, Recycle, BarChart2, Workflow, CheckCircle2, Factory, Shield, Maximize2, Target } from 'lucide-react';

interface CompanyOverviewProps {
  className?: string;
  companyName?: string;
  establishedYear?: number;
  employeeCount?: string;
  facilitySize?: string;
  certifications?: string;
  coreProducts?: string;
  productionCapacity?: string;
  location?: string;
}

const Overview: React.FC<CompanyOverviewProps> = ({
  className = '',
  companyName = 'CQS',
  establishedYear = 2002,
  employeeCount = '1000+ skilled professionals',
  facilitySize = '15,000 sq.m integrated factory',
  certifications = 'IATF 16949, ISO 9001:2015, ISO 14001:2015',
  coreProducts = 'Die-cast aluminum automotive & motorcycle components',
  productionCapacity = '3M+ components annually',
  location = 'Vietnam',
}) => {
  // Grid pattern CSS
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";
  const gridLinesClass = "bg-[linear-gradient(to_right,transparent_49px,#eee_50px,#eee_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#eee_50px,#eee_51px,transparent_51px)] [background-size:50px_50px]";

  // Years of operation calculation
  const yearsOfOperation = new Date().getFullYear() - establishedYear;

  // Company metrics with indicators
  const metrics = [
    {
      label: 'Manufacturing Efficiency',
      value: '95.7%',
      icon: <Factory size={18} />,
      trend: 'up',
      color: 'primary'
    },
    {
      label: 'Quality Acceptance Rate',
      value: '99.8%',
      icon: <CheckCircle2 size={18} />,
      trend: 'up',
      color: 'primary'
    },
    {
      label: 'On-Time Delivery',
      value: '98.2%',
      icon: <Clock size={18} />,
      trend: 'up',
      color: 'primary'
    },
    {
      label: 'Aluminum Recycling',
      value: '93%',
      icon: <Recycle size={18} />,
      trend: 'up',
      color: 'primary'
    },
  ];

  // Manufacturing capabilities
  const capabilities = [
    { label: 'Die Casting', range: '250-1,650 tons' },
    { label: 'CNC Machining', range: '3-5 axis' },
    { label: 'Wall Thickness', range: '0.8-8.0 mm' },
    { label: 'Tolerance', range: '±0.01 mm' },
    { label: 'Surface Finish', range: 'Up to Ra 0.8 μm' },
    { label: 'Annual Capacity', range: productionCapacity },
  ];

  return (
    <section className={`py-16 md:py-24 bg-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${gridPatternClass}`}></div>
      <div className={`absolute inset-0 opacity-[0.04] pointer-events-none ${gridLinesClass}`}></div>

      {/* Technical corner accents with enhanced styling */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30 hidden lg:block">
        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-primary-500/50"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30 hidden lg:block">
        <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-primary-500/50"></div>
      </div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-primary-600/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-600/50"></div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            {/* Section label with enhanced technical styling */}
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600 relative group">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-sm font-medium tracking-wider uppercase">Company Specifications</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              <span className="relative inline-block">
                Aluminum <span className="text-primary-600">Die Casting Specialists</span>
              </span>
            </h2>

            <div className="flex items-center space-x-3 text-neutral-500 text-sm">
              <div className="px-3 py-1 border border-neutral-300 font-mono bg-neutral-50 flex items-center rounded-sm">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-primary-500" />
                EST. {establishedYear}
              </div>
              <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div>
              <div className="px-3 py-1 border border-neutral-300 font-mono bg-neutral-50 flex items-center rounded-sm">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary-500" />
                {location}
              </div>
              <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div>
              <div className="px-3 py-1 border border-neutral-300 font-mono bg-neutral-50 flex items-center rounded-sm">
                <Award className="w-3.5 h-3.5 mr-1.5 text-primary-500" />
                {yearsOfOperation} YRS EXPERIENCE
              </div>
            </div>
          </div>

          {/* New company dashboard overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left column - Company profile */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-neutral-200 rounded-sm shadow-sm h-full relative group hover:border-primary-300 transition-all duration-300">
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Header with logo/icon */}
                <div className="p-6 flex items-center border-b border-neutral-200">
                  <div className="w-12 h-12 bg-primary-50 border border-primary-100 flex items-center justify-center rounded-sm">
                    <div className="text-2xl font-bold text-primary-600">{companyName.charAt(0)}</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-neutral-900">{companyName}</h3>
                    <div className="text-sm text-neutral-500">Company Profile</div>
                  </div>
                  <div className="ml-auto text-xs font-mono text-neutral-400 flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5"></div>
                    ACTIVE
                  </div>
                </div>

                {/* Company specs layout */}
                <div className="p-6 space-y-5">
                  <div className="text-xs font-mono text-neutral-400 mb-2">ORGANIZATION SPECIFICATIONS</div>

                  {/* Core business */}
                  <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-sm">
                    <div className="flex mb-3">
                      <HelpCircle size={16} className="text-primary-500 mr-2" />
                      <div className="text-sm font-medium text-neutral-700">Core Business</div>
                    </div>
                    <div className="text-neutral-800">{coreProducts}</div>
                  </div>

                  {/* Team and Facility */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-sm">
                      <div className="flex mb-2">
                        <Users size={16} className="text-primary-500 mr-2" />
                        <div className="text-sm font-medium text-neutral-700">Team</div>
                      </div>
                      <div className="text-neutral-800 text-sm">{employeeCount}</div>
                    </div>
                    <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-sm">
                      <div className="flex mb-2">
                        <Factory size={16} className="text-primary-500 mr-2" />
                        <div className="text-sm font-medium text-neutral-700">Facility</div>
                      </div>
                      <div className="text-neutral-800 text-sm">{facilitySize}</div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <div className="flex mb-2">
                      <Shield size={16} className="text-primary-500 mr-2" />
                      <div className="text-sm font-medium text-neutral-700">Certifications</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {certifications.split(', ').map((cert, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-neutral-100 border border-neutral-200 rounded-sm text-neutral-700">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical documentation footer */}
                <div className="px-6 py-3 border-t border-neutral-200 text-xs font-mono text-neutral-500 flex justify-between items-center">
                  <span>REF: {companyName}.PROFILE.{new Date().getFullYear()}</span>
                  <span>v1.{new Date().getFullYear().toString().slice(2)}</span>
                </div>
              </div>
            </div>

            {/* Middle and Right columns - Metrics and Capabilities Dashboard */}
            <div className="lg:col-span-2">
              {/* Top section - KPI metrics in technical dashboard style */}
              <div className="bg-white border border-neutral-200 rounded-sm shadow-sm mb-8 relative group hover:border-primary-300 transition-all duration-300">
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <BarChart2 size={18} className="text-primary-500 mr-2" />
                    <h3 className="font-medium text-neutral-800">Performance Metrics</h3>
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    <Clock className="inline-block mr-1 h-3 w-3" /> UPDATED: {new Date().toISOString().split('T')[0]}
                  </div>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {metrics.map((metric, index) => (
                      <div key={index} className="group/metric">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center text-sm">
                            <div className={`w-7 h-7 rounded-sm bg-${metric.color}-50 flex items-center justify-center mr-2 border border-${metric.color}-100`}>
                              {metric.icon}
                            </div>
                            <span className="text-neutral-700">{metric.label}</span>
                          </div>
                          <div className={`text-${metric.color}-600 font-medium flex items-center`}>
                            {metric.value}
                            {metric.trend === 'up' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                                <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                                <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="h-2 bg-neutral-100 rounded-sm overflow-hidden relative">
                          <div
                            className={`absolute top-0 left-0 h-full bg-${metric.color}-500 transition-all duration-1000 group-hover/metric:opacity-80`}
                            style={{ width: metric.value }}
                          ></div>
                          {/* Technical measuring marks */}
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute top-0 bottom-0 w-px bg-white opacity-60"
                              style={{left: `${i * 10}%`}}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-500 font-mono">
                  Metrics based on previous 12-month manufacturing data
                </div>
              </div>

              {/* Bottom section - Manufacturing capabilities */}
              <div className="bg-white border border-neutral-200 rounded-sm shadow-sm relative group hover:border-primary-300 transition-all duration-300">
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <Wrench size={18} className="text-primary-500 mr-2" />
                    <h3 className="font-medium text-neutral-800">Manufacturing Capabilities</h3>
                  </div>
                  <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                    SPEC.V1
                  </div>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {capabilities.map((cap, index) => (
                      <div key={index} className="bg-neutral-50 p-4 border border-neutral-200 rounded-sm hover:border-primary-300 transition-all group/cap">
                        <div className="font-medium text-neutral-800 mb-1 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 mr-2"></div>
                          {cap.label}
                          <div className="ml-auto text-[10px] font-mono text-neutral-400 opacity-0 group-hover/cap:opacity-100 transition-opacity">
                            #{index+1}
                          </div>
                        </div>
                        <div className="text-primary-600 font-mono text-sm">
                          {cap.range}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical documentation footer */}
                <div className="px-5 py-3 border-t border-neutral-200 text-xs font-mono text-neutral-500 flex justify-between items-center">
                  <span>REF: {companyName}.CAPABILITIES.{new Date().getFullYear()}</span>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-1"></div>
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services section with process flow - Enhanced technical blueprint style */}
          <div className="bg-white border border-neutral-200 rounded-sm shadow-sm relative mb-12 group hover:border-primary-300 transition-all duration-300">
            {/* Technical corner elements */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center">
                <Workflow size={18} className="text-primary-500 mr-2" />
                <h3 className="font-medium text-neutral-800">One-Stop Manufacturing Process</h3>
              </div>
              <div className="text-xs font-mono text-neutral-500">
                WORKFLOW.V2
              </div>
            </div>

            <div className="p-8 relative">
              {/* Blueprint grid background for the process flow */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px]"></div>

              <div className="relative">
                {/* Process flow arrow for desktop - Blueprint style */}
                <div className="absolute top-12 left-4 right-4 h-1 bg-primary-100 hidden md:block"></div>
                <div className="absolute top-12 left-4 right-4 h-0.5 bg-primary-400 hidden md:block" style={{ backgroundImage: 'linear-gradient(to right, transparent 0%, transparent 50%, #6366f1 50%, #6366f1 100%)', backgroundSize: '12px 1px' }}></div>

                {/* Process steps with enhanced blueprint styling */}
                <div className="flex flex-wrap md:flex-nowrap justify-between">
                  {[
                    { name: 'Die-Casting', icon: <Factory size={20} className="text-primary-500" /> },
                    { name: 'CNC Machining', icon: <Ruler size={20} className="text-primary-500" /> },
                    { name: 'Surface Treatment', icon: <Shield size={20} className="text-primary-500" /> },
                    { name: 'Painting', icon: <Target size={20} className="text-primary-500" /> },
                    { name: 'Assembly', icon: <Maximize2 size={20} className="text-primary-500" /> },
                    { name: 'Quality Control', icon: <CheckCircle2 size={20} className="text-primary-500" /> },
                  ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center relative mb-8 md:mb-0 w-1/2 md:w-auto group/step">
                      {/* Blueprint-style circle node */}
                      <div className="w-12 h-12 rounded-full bg-white z-10 border-2 border-primary-200 flex items-center justify-center mb-3 relative group-hover/step:border-primary-500 transition-all">
                        <div className="absolute inset-1 rounded-full border border-dashed border-primary-300 group-hover/step:border-primary-500 transition-all"></div>
                        {step.icon}
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-primary-200 text-xs font-medium flex items-center justify-center text-primary-600 rounded-full shadow-sm group-hover/step:bg-primary-500 group-hover/step:text-white transition-all">
                          {index + 1}
                        </div>
                      </div>

                      <div className="text-sm font-medium text-neutral-800 text-center">
                        {step.name}
                      </div>

                      {/* Technical specs visible on hover */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-white px-2 py-1 border border-primary-200 text-primary-600 whitespace-nowrap opacity-0 group-hover/step:opacity-100 transition-all shadow-sm">
                        STEP.{index + 1}.{index === 0 ? 'INIT' : index === 5 ? 'FINAL' : 'PROC'}
                      </div>

                      {/* Arrow between steps for desktop */}
                      {index < 5 && (
                        <div className="absolute -right-4 top-6 hidden md:block">
                          <ChevronRight size={18} className="text-primary-500" />
                        </div>
                      )}

                      {/* Arrow between steps for mobile */}
                      {index < 5 && index % 2 === 0 && (
                        <div className="absolute -right-4 top-6 transform rotate-90 md:hidden">
                          <ChevronRight size={16} className="text-primary-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical note - Blueprint style */}
              <div className="mt-6 text-sm text-neutral-600 border-t border-neutral-200 pt-4 font-light">
                <div className="flex">
                  <span className="text-primary-500 font-mono text-xs mr-2 mt-0.5">[NOTE]</span>
                  <span>
                    Our vertically integrated approach ensures seamless production flow with real-time quality monitoring
                    at each stage, resulting in <span className="text-primary-600 font-medium">98.2% on-time delivery</span> and
                    <span className="text-primary-600 font-medium"> 99.8% quality acceptance rate</span>.
                  </span>
                </div>
              </div>
            </div>

            {/* Technical documentation footer */}
            <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
              <span>REF: {companyName}.PROCESS.{new Date().getFullYear()}</span>
              <div className="flex space-x-4">
                <span>CYCLE TIME: 3-14 DAYS</span>
                <span>BATCH SIZE: 500-10,000 PCS</span>
              </div>
            </div>
          </div>

          {/* Global presence section */}
          <div className="bg-white border border-neutral-200 rounded-sm shadow-sm relative group hover:border-primary-300 transition-all duration-300">
            {/* Technical corner elements */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center">
                <Globe size={18} className="text-primary-500 mr-2" />
                <h3 className="font-medium text-neutral-800">Global Distribution Network</h3>
              </div>
              <div className="text-xs font-mono text-neutral-500">GLOBAL.MAP</div>
            </div>

            <div className="p-6 relative">
              <div className="text-neutral-700 leading-relaxed mb-4">
                Our high-quality precision components are distributed to automotive and motorcycle
                manufacturers across global markets, establishing {companyName} as a trusted partner
                in the automotive supply chain.
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-6 relative">
                {/* Technical blueprint overlay - world regions */}
                <div className="absolute top-0 left-0 right-0 h-px bg-primary-100"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-100"></div>
                <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-100"></div>
                <div className="absolute right-0 top-0 bottom-0 w-px bg-primary-100"></div>

                {['Taiwan', 'United States', 'Canada', 'Mexico', 'Japan', 'Italy', 'China', 'Thailand', 'Malaysia', 'Indonesia'].map((region, index) => (
                  <div key={index} className="py-2 px-3 text-center border border-neutral-200 bg-neutral-50 text-neutral-700 font-mono text-sm hover:border-primary-400 hover:bg-primary-50 transition-all">
                    {region}
                  </div>
                ))}
              </div>

              <div className="text-xs font-medium text-neutral-500 text-center mt-6 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                Manufacturing HQ: {location}
                <div className="w-2 h-2 bg-secondary-600 rounded-full ml-4 mr-2"></div>
                Distribution Centers: 3
                <div className="w-2 h-2 bg-industrial-600 rounded-full ml-4 mr-2"></div>
                Partner Facilities: 7
              </div>
            </div>

            {/* Technical documentation footer */}
            <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
              <span>REF: {companyName}.GLOBAL.{new Date().getFullYear()}</span>
              <span>EXPORT MARKETS: 12+</span>
            </div>
          </div>

          {/* Technical footer */}
          <div className="mt-12 flex items-center justify-between text-xs font-mono text-neutral-500">
            <div>DOC.REF: {companyName}.OVERVIEW.{new Date().getFullYear()}</div>
            <div>REVISION: 2.{new Date().getFullYear().toString().substring(2)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
