import React, { ReactElement } from 'react';
import { Activity, Radio, Target, BarChart2, ChevronRight, Zap, Search, Shield, Recycle, Globe, Terminal, CheckCircle, TrendingUp } from 'lucide-react';

interface MissionVisionProps {
  className?: string;
  sectionTitle?: string;
  heading?: string;
  highlightedText?: string;
  missionTitle?: string;
  missionDescription?: string;
  missionPoints?: string[];
  visionTitle?: string;
  visionDescription?: string;
  visionPoints?: string[];
  companyName?: string;
}

const MissionVision: React.FC<MissionVisionProps> = ({
  className = '',
  sectionTitle = 'Corporate Philosophy',
  heading = 'Creativity, Quality & ',
  highlightedText = 'Sustainability',
  missionTitle = 'Our Mission',
  missionDescription = 'To deliver exceptional die-cast aluminum components through creative engineering solutions, uncompromising quality standards, and environmentally responsible manufacturing processes that exceed our customers expectations and drive innovation in the automotive industry.',
  missionPoints = [
    'Engineer innovative lightweight solutions that enhance vehicle performance and efficiency',
    'Maintain industry-leading quality standards with precision tolerances of ±0.01mm',
    'Implement sustainable manufacturing practices that minimize environmental impact'
  ],
  visionTitle = 'Our Vision',
  visionDescription = 'To be recognized globally as the industry leader in high-precision die casting technology, setting new standards for aluminum component manufacturing through our commitment to creativity, quality, and sustainability.',
  visionPoints = [
    'Pioneer advanced lightweight solutions for the next generation of vehicles',
    'Achieve a 100% aluminum recycling rate and carbon-neutral manufacturing',
    'Expand our global presence while maintaining exceptional quality and customer service'
  ],
  companyName = 'CQS'
}) => {
  // Technical patterns
  const diagonalPatternClass = "bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px]";
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";

  // Current year for reference codes
  const currentYear = new Date().getFullYear();

  // Icons for mission points with more variety
  const missionIcons: ReactElement[] = [
    <TrendingUp key="mission-icon-1" size={16} className="text-primary-400" />,
    <CheckCircle key="mission-icon-2" size={16} className="text-primary-400" />,
    <Recycle key="mission-icon-3" size={16} className="text-primary-400" />
  ];

  // Progress percentages for mission points (example values)
  const progressValues = [78, 92, 65];

  return (
    <section className={`py-16 md:py-24 bg-neutral-900 text-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${gridPatternClass}`}></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#222_50px,#222_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#222_50px,#222_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

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

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30">
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary-600/40"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary-600/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            {/* Technical label */}
            <div className="inline-flex items-center bg-primary-800/40 px-4 py-2 mb-6 border-l-2 border-primary-600 relative group">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
            </div>

            <h2 className="text-3xl font-bold mb-4 tracking-tight text-center relative">
              {heading}<span className="text-primary-500 relative">
                {highlightedText}
                <div className="absolute -top-1 -right-3 text-xs text-primary-400 font-mono">[v.2]</div>
              </span>
            </h2>

            <div className="w-20 h-0.5 bg-neutral-700 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
            </div>

            {/* Technical reference number */}
            <div className="text-xs text-neutral-500 font-mono flex items-center">
              <span className="mr-2">DOC</span>
              <span className="text-primary-500 mr-2">{companyName}-PHI-{currentYear}</span>
              <div className="w-6 h-px bg-neutral-700"></div>
            </div>
          </div>

          {/* NEW MISSION DESIGN - Technical Dashboard Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
            {/* Left Column - Title and Description */}
            <div className="md:col-span-1">
              {/* Terminal-style title header */}
              <div className="bg-neutral-800 border border-neutral-700 rounded-sm overflow-hidden">
                <div className="bg-neutral-900 px-4 py-2 flex items-center border-b border-neutral-700">
                  <div className="flex space-x-2 mr-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-mono text-neutral-400">mission_statement.sys</div>
                  <div className="ml-auto">
                    <Terminal size={14} className="text-neutral-400" />
                  </div>
                </div>

                <div className="p-4 relative">
                  {/* Terminal cursor animation */}
                  <div className="absolute bottom-4 right-4 h-4 w-2 bg-primary-500 animate-pulse"></div>

                  {/* Title with system prompt style */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-sm flex items-center justify-center mr-3">
                      <Activity size={18} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{missionTitle}</h3>
                  </div>

                  {/* Command line style description */}
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex">
                      <span className="text-primary-500 mr-2">$</span>
                      <span className="text-neutral-300">init_mission</span>
                    </div>
                    <div className="text-neutral-400 pl-4 border-l border-neutral-700 py-1">
                      {missionDescription}
                    </div>
                    <div className="flex">
                      <span className="text-primary-500 mr-2">$</span>
                      <span className="text-neutral-300">status</span>
                    </div>
                    <div className="text-green-500 pl-4">
                      mission_active: true
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800 border-t border-neutral-700 px-4 py-2 flex items-center justify-between">
                  <div className="text-xs font-mono text-neutral-500">
                    SYS.{companyName}.MISSION.{currentYear}
                  </div>
                  <div className="text-xs font-mono text-green-500">ONLINE</div>
                </div>
              </div>
            </div>

            {/* Right Column - Mission Points with Technical Dashboard */}
            <div className="md:col-span-2">
              <div className="bg-neutral-800/80 border border-neutral-700 relative backdrop-blur-sm">
                {/* Header with technical styling */}
                <div className="border-b border-neutral-700 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                    <h3 className="font-medium text-white">Mission Objectives</h3>
                  </div>
                  <div className="text-xs font-mono text-neutral-500">REF: MSN-OBJ-{currentYear.toString().substring(2)}</div>
                </div>

                {/* Meter bars and code references on the left edge */}
                <div className="absolute left-0 top-14 bottom-4 w-1 flex flex-col justify-between px-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-px w-2 bg-primary-600/40"></div>
                  ))}
                </div>

                {/* Blueprint-style corner markers */}
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-primary-500/50"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-primary-500/50"></div>

                {/* Mission points with progress indicators */}
                <div className="p-5 space-y-6">
                  {missionPoints.map((point, index) => (
                    <div key={`mission-point-${index}`} className="relative">
                      {/* Technical reference code */}
                      <div className="absolute -left-4 top-0 text-[10px] font-mono text-neutral-500 transform -rotate-90 origin-top-right">
                        M{index + 1}.{currentYear.toString().substring(2)}
                      </div>

                      {/* Header with icon and title */}
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-neutral-900 border border-neutral-700 rounded-sm flex items-center justify-center mr-3">
                          {missionIcons[index % missionIcons.length]}
                        </div>
                        <div className="font-medium text-white tracking-wide">Objective {index + 1}</div>
                        <div className="ml-auto text-xs font-mono text-neutral-500">
                          VAL:{progressValues[index]}%
                        </div>
                      </div>

                      {/* Mission point text */}
                      <div className="pl-11 text-neutral-300 mb-3">
                        {point}
                      </div>

                      {/* Progress bar with technical styling */}
                      <div className="ml-11 h-2 bg-neutral-900/80 border border-neutral-700 relative">
                        <div
                          className="absolute left-0 top-0 bottom-0 bg-primary-600"
                          style={{width: `${progressValues[index]}%`}}
                        >
                          {/* Technical measuring marks */}
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute top-0 bottom-0 w-px bg-primary-400/30"
                              style={{left: `${i * 10}%`}}
                            ></div>
                          ))}
                        </div>
                        <div className="absolute -right-1 -top-1 w-2 h-2 border-t border-r border-neutral-700"></div>
                        <div className="absolute -left-1 -bottom-1 w-2 h-2 border-b border-l border-neutral-700"></div>
                      </div>

                      {/* Technical data row */}
                      <div className="mt-1 ml-11 flex text-xs text-neutral-500 font-mono">
                        <div className="flex-1 flex space-x-3 overflow-x-auto no-scrollbar">
                          <span>EFF:{(Math.random() * 5 + 95).toFixed(1)}%</span>
                          <span>IMP:HIGH</span>
                          <span>PRC:{(progressValues[index] / 10).toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technical footer */}
                <div className="border-t border-neutral-700 px-5 py-2 flex items-center justify-between text-xs">
                  <div className="font-mono text-neutral-500">
                    UPDATE: {new Date().toISOString().split('T')[0]}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span className="text-green-500 font-mono">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Keep the Vision component as is */}
          <div className="relative group">
            {/* Blueprint-style corner markers */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary-600">
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary-500"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary-600">
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary-500"></div>
            </div>

            {/* Technical code label */}
            <div className="absolute -top-3 right-8 bg-neutral-800 text-xs font-mono text-primary-400 px-2 py-0.5 border-t border-b border-primary-700/50 z-10">
              VS-{currentYear.toString().substring(2)}
            </div>

            <div className="p-8 border border-neutral-700 bg-neutral-800/50 relative backdrop-blur-sm transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
              {/* Subtle background pattern */}
              <div className={`absolute inset-0 ${diagonalPatternClass} opacity-[0.03]`}></div>

              {/* Technical measurement marks */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-700/20 hidden md:block">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="absolute left-0 h-px w-1 bg-primary-700/30" style={{ top: `${(i+1) * 20}%` }}></div>
                ))}
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600/20 border border-primary-700 flex items-center justify-center mr-4 relative">
                  <Radio size={24} className="text-primary-400" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary-500"></div>
                </div>
                <h3 className="text-2xl font-bold">{visionTitle}</h3>
              </div>

              {/* Vision border with technical styling */}
              <div className="pl-4 border-l border-primary-700 mb-6">
                <p className="text-neutral-300 leading-relaxed">
                  {visionDescription}
                </p>
              </div>

              <ul className="space-y-4 text-neutral-300">
                {visionPoints.map((point, index) => (
                  <li key={`vision-point-${index}`} className="flex items-start group/item relative overflow-hidden">
                    <div className="w-6 h-6 rounded-sm bg-primary-900/80 border border-primary-700 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-primary-800">
                      <Target size={14} className="text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <div className="absolute left-0 -bottom-px w-0 h-px bg-primary-500 group-hover/item:w-full transition-all duration-500"></div>
                      {point}
                    </div>
                    <div className="absolute right-0 top-0 text-[10px] font-mono text-neutral-500 opacity-0 group-hover/item:opacity-100 transition-opacity">[V{index+1}]</div>
                  </li>
                ))}
              </ul>

              {/* Technical documentation label */}
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-neutral-500">
                {companyName}-VS-{currentYear}
              </div>
            </div>
          </div>

          {/* Technical footer */}
          <div className="mt-16 border-t border-neutral-800 pt-4 text-xs text-neutral-600 font-mono flex items-center justify-between">
            <div>REV: 2.{currentYear.toString().substring(2)}</div>
            <div className="flex items-center">
              <span className="mr-2">CORPORATE DOCUMENT</span>
              <span className="text-primary-600">{companyName}/PHI/{currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
