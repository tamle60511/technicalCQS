import React, { useState, useEffect } from 'react';
import { Lightbulb, BadgeCheck, Recycle, Shield, Target, Ruler, ChevronRight, BarChart2, Clock, Terminal, ArrowRight, AlertCircle, Gauge, Info, CheckSquare, Award, HexagonAlert } from 'lucide-react';

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
  id?: string; // Optional technical ID
  priority?: number; // Optional priority value
  indicators?: { label: string; value: number }[]; // Performance indicators
  metrics?: string[]; // Associated metrics
  color?: string; // Primary color theme for the value
}

interface CoreValuesProps {
  className?: string;
  sectionTitle?: string;
  heading?: React.ReactNode;
  values?: CoreValue[];
  companyName?: string;
}

const CoreValues: React.FC<CoreValuesProps> = ({
  className = '',
  sectionTitle = 'Company Values',
  heading = <>The <span className="text-primary-600">CQS</span> Foundation</>,
  values = [
    {
      title: 'Creativity',
      description: 'We embrace innovative thinking in every aspect of our operation, from engineering solutions to manufacturing processes. Our creative approach enables us to design lightweight aluminum components that solve complex challenges and drive advancement in the automotive industry.',
      icon: <Lightbulb className="text-amber-500" size={20} />,
      id: 'CRE',
      priority: 95,
      color: 'amber',
      indicators: [
        { label: 'Innovation Rate', value: 92 },
        { label: 'Design Efficiency', value: 88 },
        { label: 'R&D Investment', value: 95 }
      ],
      metrics: ['18 Patents Filed', '12 New Processes Developed', '35% Weight Reduction Achieved']
    },
    {
      title: 'Quality',
      description: 'We maintain unwavering commitment to precision and excellence, with tolerances as precise as ±0.01mm. Our IATF 16949 and ISO 9001:2015 certified processes ensure consistent quality control across our integrated manufacturing operation, from die casting to final assembly.',
      icon: <BadgeCheck className="text-primary-500" size={20} />,
      id: 'QUA',
      priority: 98,
      color: 'primary',
      indicators: [
        { label: 'Defect Rate', value: 99.8 },
        { label: 'On-Time Delivery', value: 97 },
        { label: 'First Pass Yield', value: 96 }
      ],
      metrics: ['±0.01mm Precision', '99.8% Quality Acceptance', '3 Global Quality Awards']
    },
    {
      title: 'Sustainability',
      description: 'We prioritize environmental responsibility through our 93% aluminum recycling program and energy-efficient manufacturing processes. Our ISO 14001:2015 certified environmental management system guides our commitment to producing lightweight components that contribute to fuel efficiency and emissions reduction.',
      icon: <Recycle className="text-emerald-500" size={20} />,
      id: 'SUS',
      priority: 90,
      color: 'emerald',
      indicators: [
        { label: 'Recycling Rate', value: 93 },
        { label: 'Energy Efficiency', value: 85 },
        { label: 'Carbon Reduction', value: 82 }
      ],
      metrics: ['93% Aluminum Recycled', '28% Energy Reduction', 'ISO 14001:2015 Certified']
    }
  ],
  companyName = 'CQS'
}) => {
  // Technical patterns
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";
  const gridLinesClass = "bg-[linear-gradient(to_right,transparent_49px,#ddd_50px,#ddd_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#ddd_50px,#ddd_51px,transparent_51px)] [background-size:50px_50px]";

  // Current year for reference codes
  const currentYear = new Date().getFullYear();

  // Active value for detailed view
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate overall score based on priorities
  const overallScore = Math.round(values.reduce((sum, value) => sum + (value.priority || 0), 0) / values.length);

  // Animation for metrics counter
  const [counters, setCounters] = useState(values.map(value =>
    value.indicators ? value.indicators.map(() => 0) : []
  ));

  useEffect(() => {
    // Reset animation state when active value changes
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    // Animate counters for the active value
    const activeValue = values[activeValueIndex];
    if (activeValue.indicators) {
      const intervals = activeValue.indicators.map((indicator, index) => {
        let count = 0;
        const step = indicator.value / 50; // Divide animation into 50 steps

        return setInterval(() => {
          count += step;
          if (count >= indicator.value) {
            count = indicator.value;
            clearInterval(intervals[index]);
          }

          setCounters(prev => {
            const newCounters = [...prev];
            if (!newCounters[activeValueIndex]) newCounters[activeValueIndex] = [];
            newCounters[activeValueIndex][index] = Math.round(count * 10) / 10;
            return newCounters;
          });
        }, 20);
      });

      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [activeValueIndex]);

  return (
    <section className={`py-16 md:py-24 bg-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${gridPatternClass}`}></div>
      <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${gridLinesClass}`}></div>

      {/* Technical corner accents with enhanced styling */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/20 hidden lg:block">
        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-primary-500/30"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/20 hidden lg:block">
        <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-primary-500/30"></div>
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
        <div className="max-w-6xl mx-auto">
          {/* Technical section header */}
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600 relative group">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Shield className="mr-2" size={14} />
              <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              {heading}
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <div className="text-neutral-600 text-center max-w-2xl mb-10">
              Our core values define how we operate, innovate, and deliver excellence to our customers.
              They are the foundation of our culture and guide every decision we make.
            </div>
          </div>

          {/* Technical metrics dashboard header */}
          <div className="bg-white border border-neutral-200 rounded-sm shadow-sm mb-8 relative group hover:border-primary-300 transition-all duration-300">
            {/* Technical corner elements */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center">
                <BarChart2 size={18} className="text-primary-500 mr-2" />
                <h3 className="font-medium text-neutral-800">Corporate Values Dashboard</h3>
              </div>
              <div className="text-xs font-mono text-neutral-500 flex items-center">
                <Clock size={12} className="mr-1" />
                <span>UPDATED: {new Date().toISOString().split('T')[0]}</span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Overall score */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 relative">
                  <div className="absolute -top-3 left-4 bg-white px-2 text-xs font-mono text-primary-600">
                    OVERALL SCORE
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold text-neutral-800">
                      {overallScore}<span className="text-base font-normal text-neutral-500">/100</span>
                    </div>

                    <div className="w-16 h-16 relative">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#eee"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="3"
                          strokeDasharray={`${overallScore}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-primary-600">
                        {overallScore}%
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-neutral-500">
                    Corporate values alignment score based on implementation metrics
                  </div>
                </div>

                {/* Value priority comparison */}
                <div className="md:col-span-3 bg-neutral-50 border border-neutral-200 rounded-sm p-4 relative">
                  <div className="absolute -top-3 left-4 bg-white px-2 text-xs font-mono text-primary-600">
                    VALUE PRIORITIZATION
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {values.map((value, index) => (
                      <div
                        key={index}
                        className={`flex flex-col cursor-pointer ${index === activeValueIndex ? 'opacity-100' : 'opacity-70'}`}
                        onClick={() => setActiveValueIndex(index)}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center">
                            <div className={`w-6 h-6 rounded-sm bg-${value.color || 'primary'}-50 flex items-center justify-center mr-2 border border-${value.color || 'primary'}-200`}>
                              {value.icon}
                            </div>
                            <span className="text-sm font-medium text-neutral-800">{value.title}</span>
                          </div>
                          <div className={`text-${value.color || 'primary'}-600 font-medium text-sm`}>
                            {value.priority}%
                          </div>
                        </div>

                        <div className="h-2 bg-neutral-200 rounded-sm overflow-hidden">
                          <div
                            className={`h-full bg-${value.color || 'primary'}-500 transition-all duration-1000`}
                            style={{ width: `${value.priority}%` }}
                          >
                            {/* Technical measuring marks */}
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute top-0 bottom-0 w-px bg-white opacity-30"
                                style={{left: `${i * 20}%`}}
                              ></div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-1 flex justify-between text-[10px] text-neutral-500 font-mono">
                          <span>0</span>
                          <span>50</span>
                          <span>100</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Technical documentation footer */}
            <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
              <span>REF: {companyName}.VALUES.{currentYear}</span>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                <span>VALUES METRICS UPDATED QUARTERLY</span>
              </div>
            </div>
          </div>

          {/* Main content - Value details dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left column - Values selector */}
            <div className="md:col-span-4">
              <div className="bg-white border border-neutral-200 rounded-sm shadow-sm h-full relative group hover:border-primary-300 transition-all duration-300">
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <Shield size={18} className="text-primary-500 mr-2" />
                    <h3 className="font-medium text-neutral-800">Core Values</h3>
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    TOTAL: {values.length}
                  </div>
                </div>

                <div className="p-4">
                  {values.map((value, index) => (
                    <button
                      key={index}
                      className={`w-full text-left mb-3 p-4 border rounded-sm transition-all ${
                        index === activeValueIndex
                            ? `bg-${value.color || 'primary'}-50 border-${value.color || 'primary'}-200`
                            : 'bg-white border-neutral-200 hover:bg-neutral-50'
                      }`}
                      onClick={() => setActiveValueIndex(index)}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-${value.color || 'primary'}-100/50 border border-${value.color || 'primary'}-200 rounded-sm flex items-center justify-center mr-3`}>
                          {value.icon}
                        </div>
                        <div>
                          <div className="font-medium text-neutral-800 flex items-center">
                            {value.title}
                            {index === activeValueIndex && (
                              <div className={`w-1.5 h-1.5 bg-${value.color || 'primary'}-500 rounded-full ml-2`}></div>
                            )}
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5 font-mono flex items-center">
                            <div className={`w-1 h-1 bg-${value.color || 'primary'}-500 rounded-full mr-1`}></div>
                            {value.id} | PRIORITY: {value.priority}%
                          </div>
                        </div>
                        <div className="ml-auto">
                          <ChevronRight size={16} className={`${
                            index === activeValueIndex
                                ? `text-${value.color || 'primary'}-500`
                                : 'text-neutral-400'
                          }`} />
                        </div>
                      </div>

                      <div className="mt-2">
                        <div className="h-1 bg-neutral-200 rounded-sm overflow-hidden">
                          <div
                            className={`h-full bg-${value.color || 'primary'}-500`}
                            style={{ width: `${value.priority}%` }}
                          ></div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Technical footer */}
                <div className="m-4 p-4 bg-neutral-50 border border-neutral-100 rounded-sm mt-auto">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-50 border border-amber-100 rounded-sm flex items-center justify-center mr-3 flex-shrink-0">
                      <AlertCircle size={16} className="text-amber-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-800 mb-1">Value-Driven Organization</div>
                      <div className="text-sm text-neutral-600">
                        Our core values are measurable and actionable principles that guide our operations,
                        decisions, and organizational culture.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Value details */}
            <div className="md:col-span-8">
              <div className="bg-white border border-neutral-200 rounded-sm shadow-sm h-full relative group hover:border-primary-300 transition-all duration-300">
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className={`p-5 border-b border-neutral-200 flex items-center justify-between bg-${values[activeValueIndex].color || 'primary'}-50/50`}>
                  <div className="flex items-center">
                    {values[activeValueIndex].icon}
                    <h3 className="font-medium text-neutral-800 ml-2">{values[activeValueIndex].title}</h3>
                  </div>
                  <div className="flex items-center">
                    <div className={`px-2 py-1 bg-${values[activeValueIndex].color || 'primary'}-100 text-${values[activeValueIndex].color || 'primary'}-800 text-xs rounded-sm font-medium`}>
                      Priority: {values[activeValueIndex].priority}%
                    </div>
                    <div className="ml-2 text-xs font-mono bg-white border border-neutral-200 px-2 py-1 rounded-sm">
                      {values[activeValueIndex].id}.DETAIL
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Value description */}
                    <div className="border border-neutral-200 rounded-sm p-4 mb-6 bg-neutral-50 relative">
                      <div className="absolute -top-3 left-4 bg-white px-2 text-xs font-mono text-neutral-500">
                        VALUE DEFINITION
                      </div>
                      <p className="text-neutral-700 leading-relaxed">
                        {values[activeValueIndex].description}
                      </p>
                    </div>

                    {/* Value performance indicators */}
                    <div className="mb-6">
                      <div className="text-sm font-medium text-neutral-800 mb-3 flex items-center">
                        <Gauge size={16} className={`text-${values[activeValueIndex].color || 'primary'}-500 mr-2`} />
                        Performance Indicators
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {values[activeValueIndex].indicators?.map((indicator, idx) => (
                          <div key={idx} className="border border-neutral-200 rounded-sm p-4 bg-white transition-all duration-300 hover:border-neutral-300 group/indicator">
                            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2 flex items-center">
                              <div className={`w-1 h-1 bg-${values[activeValueIndex].color || 'primary'}-500 rounded-full mr-1`}></div>
                              {indicator.label}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className={`text-2xl font-bold text-${values[activeValueIndex].color || 'primary'}-600`}>
                                {counters[activeValueIndex]?.[idx] || 0}%
                              </div>

                              <div className={`text-[10px] font-mono text-neutral-500 opacity-0 group-hover/indicator:opacity-100 transition-opacity`}>
                                REF.{values[activeValueIndex].id}.{idx+1}
                              </div>
                            </div>

                            <div className="mt-2 h-1.5 bg-neutral-200 rounded-sm overflow-hidden">
                              <div
                                className={`h-full bg-${values[activeValueIndex].color || 'primary'}-500 transition-all duration-1000 ease-out`}
                                style={{ width: `${counters[activeValueIndex]?.[idx] || 0}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Value key metrics */}
                    <div>
                      <div className="text-sm font-medium text-neutral-800 mb-3 flex items-center">
                        <CheckSquare size={16} className={`text-${values[activeValueIndex].color || 'primary'}-500 mr-2`} />
                        Key Implementation Metrics
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {values[activeValueIndex].metrics?.map((metric, idx) => (
                          <div key={idx} className={`py-2 px-3 bg-${values[activeValueIndex].color || 'primary'}-50 border border-${values[activeValueIndex].color || 'primary'}-100 rounded-sm text-${values[activeValueIndex].color || 'primary'}-800 text-sm flex items-center`}>
                            <div className={`w-1.5 h-1.5 bg-${values[activeValueIndex].color || 'primary'}-500 rounded-full mr-2`}></div>
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical documentation footer */}
                <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
                  <span>REF: {companyName}.{values[activeValueIndex].id}.{currentYear}</span>
                  <div className="flex space-x-4">
                    <span>VALUE.VERSION: 2.{currentYear.toString().substring(2)}</span>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                      <span>ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical value linkage visualization */}
          <div className="mt-8 bg-white border border-neutral-200 rounded-sm shadow-sm relative group hover:border-primary-300 transition-all duration-300">
            {/* Technical corner elements */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center">
                <Award size={18} className="text-primary-500 mr-2" />
                <h3 className="font-medium text-neutral-800">Value Integration Framework</h3>
              </div>
              <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                {companyName}.VALUES.FRAMEWORK
              </div>
            </div>

            <div className="p-6 relative">
              {/* Blueprint grid background */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px]"></div>

              <div className="relative py-6">
                {/* Center connection line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-neutral-200"></div>

                <div className="flex flex-col items-center mb-8">
                  <div className="w-24 h-24 rounded-full border-2 border-neutral-300 bg-white flex items-center justify-center z-10 mb-3">
                    <div className="text-lg font-bold text-neutral-800">{companyName}</div>
                  </div>
                  <div className="text-sm font-medium text-neutral-800">Corporate Values</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 relative">
                  {values.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {/* Connector line to center */}
                      <div className="absolute left-1/2 right-1/2 top-0 h-0.5 bg-neutral-200"
                        style={{
                          left: index === 0 ? '50%' : index === 1 ? '50%' : 'auto',
                          right: index === 2 ? '50%' : 'auto',
                          width: index === 1 ? '0.5px' : '33%'
                        }}></div>

                      <div className={`w-16 h-16 rounded-full border-2 border-${value.color || 'primary'}-300 bg-${value.color || 'primary'}-50 flex items-center justify-center z-10 mb-3`}>
                        {value.icon}
                      </div>

                      <div className="text-sm font-medium text-neutral-800 mb-1">{value.title}</div>
                      <div className="text-xs font-mono text-neutral-500">{value.id}</div>

                      <div className="mt-3 flex space-x-2">
                        {value.indicators?.map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full bg-${value.color || 'primary'}-400`}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical documentation footer */}
            <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
              <span>REF: {companyName}.VALUES.FRAMEWORK.{currentYear}</span>
              <div className="flex items-center">
                <span>EST. 2002</span>
              </div>
            </div>
          </div>

          {/* Technical footer */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center text-xs font-mono text-neutral-500 bg-white px-4 py-2 border border-neutral-200 rounded-sm">
              <Shield size={12} className="mr-1.5 text-primary-500" />
              <span>DOC.{companyName}.VALUES.{currentYear} | REV 2.{currentYear.toString().substring(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
