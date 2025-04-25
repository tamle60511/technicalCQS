import { AlertCircle, ArrowRight, Cog, Cpu, Ruler, Shield, Target, Wrench, Zap, Truck, BarChart2, Clock, Terminal, Check, Gauge, Maximize2, Search, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

interface Capability {
    id: string;
    title: string;
    image: string;
    features: string[];
    precision?: string;
    capacity?: string;
    efficiency?: string; // Thêm hiệu suất
    tolerance?: string; // Thêm dung sai
}

interface ManufacturingProps {
    className?: string;
    title?: React.ReactNode;
    subtitle?: string;
    description?: string;
    capabilities?: Capability[];
    buttonText?: string;
    buttonLink?: string;
    companyName?: string;
}

const Manufacturing: React.FC<ManufacturingProps> = ({
    className = '',
    title = (
        <>
            Die Casting <span className="text-primary-600">Excellence</span>
        </>
    ),
    subtitle = 'Manufacturing Capabilities',
    description = 'Our integrated manufacturing facility combines advanced die casting technology, precision CNC machining, and comprehensive surface treatments to provide a complete solution from raw material to finished components.',
    capabilities = [
        {
            id: 'HPDC',
            title: 'High Pressure Die Casting',
            image: '/images/Aluminum.jpg',
            features: [
                'Die casting machines from 250 to 1,650 tons',
                'Aluminum alloys: ADC12, A383, A360, A380',
                'Wall thickness capability down to 0.8mm',
                'Multi-cavity tooling for high-volume production',
            ],
            precision: '±0.05mm',
            capacity: '2M+ units/year',
            efficiency: '95.7%',
            tolerance: '±0.05mm',
        },
        {
            id: 'CNC',
            title: 'CNC Precision Machining',
            image: '/images/cnc.jpg',
            features: [
                '40+ CNC machining centers (3, 4 & 5-axis)',
                'High-precision tolerance capability to ±0.01mm',
                'In-house fixture design and fabrication',
                'Advanced CMM inspection systems',
            ],
            precision: '±0.01mm',
            capacity: '3M+ units/year',
            efficiency: '98.2%',
            tolerance: '±0.01mm',
        },
        {
            id: 'FIN',
            title: 'Surface Treatment & Assembly',
            image: '/images/cnc.jpg',
            features: [
                'Anodizing (Type II and III) with multiple color options',
                'Powder coating & wet painting with robotic application',
                'Shot blasting and mechanical finishing',
                'Semi-automated and manual assembly lines',
            ],
            precision: 'Class A surface',
            capacity: '2.5M+ units/year',
            efficiency: '96.5%',
            tolerance: 'Ra 0.8 μm',
        },
    ],
    buttonText = 'Contact Our Engineers',
    buttonLink = '/contact',
    companyName = 'CQS',
}) => {
    // Technical patterns
    const gridPatternClass = 'bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]';
    const gridLinesClass = "bg-[linear-gradient(to_right,transparent_49px,#eee_50px,#eee_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#eee_50px,#eee_51px,transparent_51px)] [background-size:50px_50px]";

    // Current year for reference codes
    const currentYear = new Date().getFullYear();

    // Icons for capabilities
    const capabilityIcons = {
        'HPDC': <Zap size={18} className="text-primary-500" />,
        'CNC': <Wrench size={18} className="text-primary-500" />,
        'FIN': <Shield size={18} className="text-primary-500" />,
    };

    // Active capability state for interactivity
    const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);

    // Function to calculate progress bar width from string values
    const calculateProgressWidth = (value: string) => {
        if (value.includes('M+')) {
            // Extract number from strings like "2M+"
            const num = parseFloat(value.replace('M+', ''));
            return `${Math.min(num * 25, 100)}%`; // Scale for visualization
        } else if (value.includes('%')) {
            // Extract percentage
            return value;
        } else if (value.includes('±')) {
            // For precision values, smaller is better (±0.01mm is better than ±0.05mm)
            const num = parseFloat(value.replace('±', '').replace('mm', ''));
            return `${Math.min(100 - (num * 1000), 100)}%`; // Inverse scale
        }
        return '70%'; // Default fallback
    };

    return (
        <section className={`relative overflow-hidden bg-white py-16 md:py-24 ${className}`}>
            {/* Technical background patterns */}
            <div className={`pointer-events-none absolute inset-0 opacity-[0.03] ${gridPatternClass}`}></div>
            <div className={`pointer-events-none absolute inset-0 opacity-[0.03] ${gridLinesClass}`}></div>

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

            <div className="relative z-10 container mx-auto px-4">
                <div className="mb-16 flex flex-col items-center">
                    {/* Technical section label */}
                    <div className="border-primary-600 relative mb-6 inline-flex items-center border-l-2 bg-neutral-800/90 px-4 py-2 text-white rounded-sm group">
                        <div className="border-primary-400 absolute -top-1 -left-1 h-2 w-2 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="border-primary-400 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Gauge className="mr-2" size={14} />
                        <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
                    </div>
                    <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-neutral-900">{title}</h2>
                    <div className="relative mb-8 h-0.5 w-20 bg-neutral-300">
                        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 transform border border-neutral-300"></div>
                    </div>
                    <div className="relative">
                        <p className="mb-12 max-w-2xl text-center text-neutral-600 leading-relaxed">{description}</p>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform font-mono text-xs text-neutral-500 flex items-center">
                            <span className="mr-2">
                                <Clock size={12} className="inline mr-1 opacity-70" />
                                UPDATED: {new Date().toISOString().split('T')[0]}
                            </span>
                            <span className="mx-2 inline-block h-px w-12 bg-neutral-300 align-middle"></span>
                            <span className="text-primary-600">{companyName}</span>
                        </div>
                    </div>
                </div>

                {/* New Technical Process Overview */}
                <div className="mb-16 bg-white border border-neutral-200 rounded-sm shadow-sm relative group hover:border-primary-300 transition-all duration-300">
                    {/* Technical corner elements */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                        <div className="flex items-center">
                            <Terminal size={18} className="text-primary-500 mr-2" />
                            <h3 className="font-medium text-neutral-800">Manufacturing Process Overview</h3>
                        </div>
                        <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                            {companyName}.MFG.FLOW
                        </div>
                    </div>

                    {/* Process Flow - Blueprint Style */}
                    <div className="p-8 relative">
                        {/* Blueprint grid background */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-4">
                            {['Raw Material', 'Die Casting', 'CNC Machining', 'Surface Treatment', 'Quality Control', 'Assembly'].map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center relative">
                                    {/* Connection line */}
                                    {index < 5 && (
                                        <div className="absolute left-full top-1/2 w-full h-px bg-neutral-300 hidden md:block">
                                            <div className="absolute top-0 h-px w-full bg-primary-200" style={{ backgroundImage: 'linear-gradient(to right, transparent 0%, transparent 50%, #6366f1 50%, #6366f1 100%)', backgroundSize: '12px 1px' }}></div>
                                        </div>
                                    )}

                                    {/* Process Node */}
                                    <div className="w-16 h-16 bg-white border border-neutral-300 rounded-sm flex items-center justify-center mb-3 group/node hover:border-primary-400 transition-all shadow-sm relative">
                                        <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t border-l border-neutral-400 opacity-0 group-hover/node:opacity-100 transition-opacity"></div>
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b border-r border-neutral-400 opacity-0 group-hover/node:opacity-100 transition-opacity"></div>

                                        {/* Step number */}
                                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-white text-xs border border-neutral-300 rounded-full flex items-center justify-center shadow-sm">
                                            {index + 1}
                                        </div>

                                        {/* Icon based on process step */}
                                        {index === 1 && <Zap size={24} className="text-primary-500" />}
                                        {index === 2 && <Wrench size={24} className="text-primary-500" />}
                                        {index === 3 && <Shield size={24} className="text-primary-500" />}
                                        {index === 4 && <Target size={24} className="text-primary-500" />}
                                        {index === 0 && <Truck size={24} className="text-primary-500" />}
                                        {index === 5 && <Check size={24} className="text-primary-500" />}
                                    </div>

                                    <div className="text-sm font-medium text-neutral-700">
                                        {step}
                                    </div>

                                    {/* Technical ID */}
                                    <div className="text-[10px] font-mono text-neutral-500 mt-1">
                                        STP.{index + 1}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Technical note */}
                        <div className="mt-8 text-sm text-neutral-600 border-t border-dashed border-neutral-200 pt-4">
                            <div className="flex items-start">
                                <AlertCircle size={16} className="text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                <p>
                                    Our integrated manufacturing approach ensures complete quality control throughout the production process,
                                    with real-time monitoring and quality verification at each stage to maintain precision standards of
                                    <span className="font-medium text-primary-600"> ±0.01mm</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical footer */}
                    <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
                        <span>REF: {companyName}.PROCESS.{currentYear}</span>
                        <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                            <span>IATF 16949 CERTIFIED</span>
                        </div>
                    </div>
                </div>

                {/* Manufacturing capabilities selector - Technical Dashboard Style */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left column - Capability selector dashboard */}
                    <div className="lg:col-span-4">
                        <div className="bg-white border border-neutral-200 rounded-sm shadow-sm h-full relative group hover:border-primary-300 transition-all duration-300">
                            {/* Technical corner elements */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                                <div className="flex items-center">
                                    <BarChart2 size={18} className="text-primary-500 mr-2" />
                                    <h3 className="font-medium text-neutral-800">Manufacturing Capabilities</h3>
                                </div>
                                <div className="text-xs font-mono text-neutral-500">
                                    TOTAL: {capabilities.length}
                                </div>
                            </div>

                            <div className="p-4">
                                {capabilities.map((capability, index) => (
                                    <button
                                        key={index}
                                        className={`w-full text-left mb-3 p-4 border rounded-sm transition-all ${
                                            index === activeCapabilityIndex
                                                ? 'bg-primary-50 border-primary-200'
                                                : 'bg-white border-neutral-200 hover:bg-neutral-50'
                                        }`}
                                        onClick={() => setActiveCapabilityIndex(index)}
                                    >
                                        <div className="flex items-center">
                                            <div className={`w-10 h-10 ${
                                                index === activeCapabilityIndex
                                                    ? 'bg-primary-100 border-primary-200'
                                                    : 'bg-neutral-100 border-neutral-200'
                                                } border rounded-sm flex items-center justify-center mr-3`}
                                            >
                                                {capabilityIcons[capability.id as keyof typeof capabilityIcons]}
                                            </div>
                                            <div>
                                                <div className="font-medium text-neutral-800 group-hover:text-neutral-900 flex items-center">
                                                    {capability.title}
                                                    {index === activeCapabilityIndex && (
                                                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full ml-2"></div>
                                                    )}
                                                </div>
                                                <div className="text-xs text-neutral-500 mt-0.5 font-mono">
                                                    {capability.id}.{currentYear}
                                                </div>
                                            </div>
                                            <div className="ml-auto">
                                                <ChevronRight size={16} className={`${
                                                    index === activeCapabilityIndex
                                                        ? 'text-primary-500'
                                                        : 'text-neutral-400'
                                                }`} />
                                            </div>
                                        </div>

                                        {/* Key specs summary */}
                                        <div className="mt-3 grid grid-cols-2 gap-2">
                                            <div className="text-xs bg-white border border-neutral-100 px-2 py-1 rounded-sm">
                                                <div className="text-neutral-500">Precision</div>
                                                <div className="font-medium text-neutral-700">{capability.precision}</div>
                                            </div>
                                            <div className="text-xs bg-white border border-neutral-100 px-2 py-1 rounded-sm">
                                                <div className="text-neutral-500">Capacity</div>
                                                <div className="font-medium text-neutral-700">{capability.capacity}</div>
                                            </div>
                                        </div>
                                    </button>
                                ))}

                                {/* Technical footer */}
                                <div className="border-t border-dashed border-neutral-200 mt-4 pt-4 text-xs font-mono text-neutral-500">
                                    <div className="flex items-center justify-between">
                                        <span>SELECTED: {capabilities[activeCapabilityIndex].id}</span>
                                        <span>REV: 3.{currentYear.toString().substring(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Active capability details dashboard */}
                    <div className="lg:col-span-8">
                        <div className="bg-white border border-neutral-200 rounded-sm shadow-sm relative group hover:border-primary-300 transition-all duration-300">
                            {/* Technical corner elements */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                                <div className="flex items-center">
                                    {capabilityIcons[capabilities[activeCapabilityIndex].id as keyof typeof capabilityIcons]}
                                    <h3 className="font-medium text-neutral-800 ml-2">{capabilities[activeCapabilityIndex].title}</h3>
                                </div>
                                <div className="text-xs font-mono bg-neutral-100 border border-neutral-200 px-2 py-1 rounded-sm">
                                    {capabilities[activeCapabilityIndex].id}.SPECS
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                                {/* Left side - Image and basic info */}
                                <div className="md:col-span-2">
                                    <div className="relative overflow-hidden border border-neutral-200 rounded-sm h-48 mb-4 group/img">
                                        {/* Technical overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent z-10"></div>

                                        {/* Grid scanning lines effect */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-20 opacity-40"></div>

                                        {/* Scanning line animation */}
                                        <div className="absolute top-0 left-0 right-0 h-px bg-primary-400/50 z-30 animate-scan"></div>

                                        <img
                                            src={capabilities[activeCapabilityIndex].image}
                                            alt={capabilities[activeCapabilityIndex].title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                        />

                                        {/* Technical overlay markers */}
                                        <div className="absolute top-3 left-3 bg-black/60 text-white px-2 py-1 text-xs font-mono border-l border-primary-500 z-20">
                                            {capabilities[activeCapabilityIndex].id}
                                        </div>

                                        <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-2 z-20 border-l border-primary-500">
                                            <div className="text-white text-sm font-medium">{capabilities[activeCapabilityIndex].title}</div>
                                            <div className="text-primary-300 text-xs">{companyName} Manufacturing Division</div>
                                        </div>

                                        <div className="absolute top-3 right-3 z-20">
                                            <div className="bg-black/60 rounded-full w-6 h-6 flex items-center justify-center">
                                                <Maximize2 size={14} className="text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technical specifications dashboard */}
                                    <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4">
                                        <div className="text-xs font-medium text-neutral-500 mb-3 uppercase tracking-wide flex items-center">
                                            <Target size={12} className="mr-1.5" />
                                            Technical Specifications
                                        </div>

                                        <div className="space-y-4">
                                            {/* Precision */}
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <div className="text-sm text-neutral-600">Precision</div>
                                                    <div className="text-sm font-medium text-primary-600">{capabilities[activeCapabilityIndex].precision}</div>
                                                </div>
                                                <div className="h-2 bg-neutral-200 rounded-sm overflow-hidden">
                                                    <div
                                                        className="h-full bg-primary-500"
                                                        style={{ width: calculateProgressWidth(capabilities[activeCapabilityIndex].precision || '') }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* Efficiency */}
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <div className="text-sm text-neutral-600">Efficiency</div>
                                                    <div className="text-sm font-medium text-emerald-600">{capabilities[activeCapabilityIndex].efficiency}</div>
                                                </div>
                                                <div className="h-2 bg-neutral-200 rounded-sm overflow-hidden">
                                                    <div
                                                        className="h-full bg-emerald-500"
                                                        style={{ width: capabilities[activeCapabilityIndex].efficiency }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* Tolerance */}
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <div className="text-sm text-neutral-600">Tolerance</div>
                                                    <div className="text-sm font-medium text-amber-600">{capabilities[activeCapabilityIndex].tolerance}</div>
                                                </div>
                                                <div className="h-2 bg-neutral-200 rounded-sm overflow-hidden">
                                                    <div
                                                        className="h-full bg-amber-500"
                                                        style={{ width: calculateProgressWidth(capabilities[activeCapabilityIndex].tolerance || '') }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* Capacity */}
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <div className="text-sm text-neutral-600">Capacity</div>
                                                    <div className="text-sm font-medium text-indigo-600">{capabilities[activeCapabilityIndex].capacity}</div>
                                                </div>
                                                <div className="h-2 bg-neutral-200 rounded-sm overflow-hidden">
                                                    <div
                                                        className="h-full bg-indigo-500"
                                                        style={{ width: calculateProgressWidth(capabilities[activeCapabilityIndex].capacity || '') }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side - Features and details */}
                                <div className="md:col-span-3">
                                    {/* Features section */}
                                    <div className="border border-neutral-200 rounded-sm mb-4 relative">
                                        <div className="absolute -top-3 left-4 bg-white px-2 text-xs font-mono text-primary-600 uppercase">
                                            Core Capabilities
                                        </div>

                                        <div className="p-5 pt-4">
                                            <ul className="space-y-4">
                                                {capabilities[activeCapabilityIndex].features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start group/feature">
                                                        <div className="flex-shrink-0 w-8 h-8 bg-neutral-50 border border-neutral-200 rounded-sm flex items-center justify-center mr-3 group-hover/feature:bg-primary-50 group-hover/feature:border-primary-200 transition-colors">
                                                            {featureIndex === 0 && <Target size={16} className="text-primary-500" />}
                                                            {featureIndex === 1 && <Gauge size={16} className="text-primary-500" />}
                                                            {featureIndex === 2 && <Cpu size={16} className="text-primary-500" />}
                                                            {featureIndex === 3 && <Cog size={16} className="text-primary-500" />}
                                                        </div>
                                                        <div>
                                                            <div className="text-neutral-800">{feature}</div>
                                                            <div className="text-[10px] font-mono text-neutral-500 mt-0.5 opacity-0 group-hover/feature:opacity-100 transition-opacity">
                                                                {capabilities[activeCapabilityIndex].id}.FEAT.{featureIndex+1}
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Technical insights panel */}
                                    <div className="border border-neutral-200 rounded-sm p-5 bg-neutral-50">
                                        <div className="flex items-center mb-3">
                                            <Search size={16} className="text-primary-500 mr-2" />
                                            <div className="text-sm font-medium text-neutral-800">Process Insights</div>
                                        </div>

                                        <div className="prose prose-sm max-w-none text-neutral-600">
                                            {capabilities[activeCapabilityIndex].id === 'HPDC' && (
                                                <p>
                                                    Our High Pressure Die Casting process utilizes advanced simulation software to optimize flow patterns and solidification,
                                                    resulting in minimal porosity and exceptional structural integrity for critical automotive components.
                                                    With precise control of injection parameters, we maintain industry-leading consistency across high-volume production runs.
                                                </p>
                                            )}

                                            {capabilities[activeCapabilityIndex].id === 'CNC' && (
                                                <p>
                                                    Our CNC machining operations employ the latest 5-axis technology with advanced tool monitoring systems
                                                    to achieve precision tolerances as tight as ±0.01mm. Integrated measurement and inspection at key process points
                                                    ensures dimensional accuracy throughout the machining cycle, essential for critical automotive applications.
                                                </p>
                                            )}

                                            {capabilities[activeCapabilityIndex].id === 'FIN' && (
                                                <p>
                                                    Our surface treatment processes include Type II and Type III anodizing, delivering precise coating thickness
                                                    control within ±0.5μm. Our advanced robotic painting systems ensure consistent application and superior adhesion,
                                                    while automated assembly stations with vision systems verify correct component placement and orientation.
                                                </p>
                                            )}
                                        </div>

                                        <div className="mt-3 text-xs font-mono text-neutral-500 flex items-center">
                                            <Clock size={12} className="mr-1" />
                                            CYCLE TIME: {capabilities[activeCapabilityIndex].id === 'HPDC' ? '30-120 sec' : capabilities[activeCapabilityIndex].id === 'CNC' ? '1-8 min' : '5-30 min'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technical documentation footer */}
                            <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
                                <span>REF: {companyName}.{capabilities[activeCapabilityIndex].id}.{currentYear}</span>
                                <div className="flex space-x-4">
                                    <span>PROCESS.VER: 2.{currentYear.toString().substring(2)}</span>
                                    <div className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                                        <span>VALIDATED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to action section */}
                <div className="mt-12 text-center relative">
                    <div className="absolute -top-px left-0 right-0 h-px bg-neutral-200" style={{ backgroundImage: 'linear-gradient(to right, transparent 0%, transparent 40%, #e5e5e5 40%, #e5e5e5 60%, transparent 60%, transparent 100%)', backgroundSize: '8px 1px' }}></div>

                    <div className="py-8">
                        <h3 className="text-xl font-bold text-neutral-800 mb-3">Ready to Discuss Your Die Casting Project?</h3>
                        <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
                            Our engineering team is available to analyze your requirements and provide technical solutions
                            that optimize performance, weight, and manufacturability.
                        </p>

                        <a
                            href={buttonLink}
                            className="group relative inline-flex items-center bg-primary-600 text-white px-6 py-3 font-medium rounded-sm hover:bg-primary-700 transition-colors duration-300 shadow-lg shadow-primary-900/10"
                        >
                            {/* Technical corner elements */}
                            <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-white/30 opacity-0 transition-opacity group-hover:opacity-100"></div>

                            {buttonText}
                            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                        </a>
                    </div>

                    {/* Technical reference number */}
                    <div className="text-xs font-mono text-neutral-500 mt-4">
                        DOC.REF: {companyName}.MFG.CAPABILITIES.{currentYear} | VER 2.{currentYear.toString().substring(2)}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Manufacturing;
