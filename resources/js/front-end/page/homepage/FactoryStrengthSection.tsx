import React, { useState, useEffect, useMemo } from "react";
import { Play, Award, Wrench, ChevronRight, Phone, Cog, Users, Database, Terminal, Server, Cpu, Shield, CheckCircle, BarChart2, AlertCircle, Gauge, Zap, Globe, Clock, FileText } from 'lucide-react';
import TechnicalHeader from "@/front-end/components/ui/Utility/TechnicalHeader";
import MetricCarousel from "@/front-end/homepage/Manufacturing/shared/MetricCarousel";
import Specifications from "../products/Specifications";
import VideoModal from "@/front-end/components/ui/Video/VideoModal";



const FactoryStrengthSection = () => {
    const [playPromoVideo, setPlayPromoVideo] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeMetric, setActiveMetric] = useState(0);
    const [isScanning, setIsScanning] = useState(true);

    // Memoized current year to prevent unnecessary recalculations
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    // Memoized factory metrics to prevent re-creation on each render
    const factoryMetrics = useMemo(() => [
        {
            label: 'Machine Precision',
            value: '±0.01mm',
            icon: <Cog size={20} />,
            color: 'primary',
            description: 'High precision die casting and CNC machining'
        },
        {
            label: 'Production Capacity',
            value: '10M+',
            icon: <Cog size={20} />,
            color: 'neutral',
            description: 'Annual production capacity in units'
        },
        {
            label: 'Global Distribution',
            value: '8+',
            icon: <Globe size={20} />,
            color: 'primary',
            description: 'Countries with regular shipping'
        },
        {
            label: 'Quality Pass Rate',
            value: '99.97%',
            icon: <CheckCircle size={20} />,
            color: 'neutral',
            description: 'First-pass yield for production'
        }
    ], []);



    useEffect(() => {
        // Set loaded state on component mount
        setIsLoaded(true);

        // Auto-rotate metrics
        const metricInterval = setInterval(() => {
            setActiveMetric(prev => (prev + 1) % factoryMetrics.length);
        }, 3000);

        // Scanning animation
        const scanInterval = setInterval(() => {
            setIsScanning(prev => !prev);
        }, 5000);

        // Cleanup intervals
        return () => {
            clearInterval(metricInterval);
            clearInterval(scanInterval);
        };
    }, [factoryMetrics.length]);



    return (
        <section id="about" className="py-16 md:py-20 bg-neutral-100 relative overflow-hidden">
            {/* Technical background patterns */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,transparent_49px,#222_50px,#222_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#222_50px,#222_51px,transparent_51px)] [background-size:50px_50px]"></div>

            {/* Horizontal scanning line */}
            <div className={`absolute left-0 right-0 h-px bg-primary-400/30 pointer-events-none transition-all duration-1000 ease-in-out ${isScanning ? 'top-0' : 'top-full'}`}></div>

            {/* Technical corner accents */}
            <div className="absolute top-0 left-0 w-40 h-40 border-t border-l border-primary-600/20 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 border-b border-r border-primary-600/20 opacity-60"></div>

            {/* Technical measurement lines */}
            <div className="absolute top-0 right-20 bottom-0 w-0.5 flex flex-col opacity-30 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex-1 border-b border-primary-600/30 relative">
                        {i % 2 === 0 && (
                            <div className="absolute bottom-0 right-0 w-2 h-0.5 bg-primary-600/50"></div>
                        )}
                        {i % 5 === 0 && (
                            <div className="absolute bottom-0 right-3 text-primary-600/50 text-xs font-mono">
                                {100 - i * 10}%
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Technical title header */}
               <TechnicalHeader />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
                    {/* Left column - Main factory dashboard */}
                    <div className="lg:col-span-6">
                        {/* Main dashboard panel */}
                        <div className={`bg-white rounded-sm shadow-md border border-neutral-200 transition-all duration-1000 hover:border-primary-200 relative ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Technical corner elements */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* Dashboard header */}
                            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                                <div className="flex items-center">
                                    <Database size={18} className="text-primary-600 mr-2" />
                                    <h3 className="font-medium text-neutral-800">Manufacturing Overview</h3>
                                </div>
                                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                                    CQS.MFG.{currentYear}
                                </div>
                            </div>

                            {/* Main company description with technical styling */}
                            <div className="">
                                <MetricCarousel />


                            </div>

                            {/* Capability stats - technical style bars */}
                            <div className="p-5">


                                <div className="mt-6 flex flex-wrap gap-4">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center px-6 py-3
                                                bg-primary-600 text-white
                                                font-medium tracking-wide rounded-sm border border-primary-500
                                                hover:bg-primary-700 transition-all
                                                shadow-lg hover:shadow-primary-900/30 group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/0 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <Terminal className="mr-2 h-5 w-5" />
                                        <span>Our Technologies</span>
                                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </a>

                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center px-6 py-3
                                                bg-white text-neutral-700
                                                font-medium tracking-wide rounded-sm border border-neutral-300
                                                hover:border-primary-300 hover:text-primary-600 transition-all"
                                    >
                                        <Phone className="mr-2 h-5 w-5" />
                                        <span>Contact Us</span>
                                    </a>
                                </div>
                            </div>

                            {/* Technical dashboard footer */}
                            <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
                                <span>REF: CQS.COMPANY.PROFILE.{currentYear}</span>
                                <div className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                                    <span>ACTIVE FACILITIES: 3/3</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Visual content & tech specs */}
                    <div className="lg:col-span-6">
                        {/* Video showcase with technical styling */}
                        <div className={`bg-white rounded-sm shadow-md border border-neutral-200 transition-all duration-1000 hover:border-primary-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Header */}
                            <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
                                <div className="flex items-center">
                                    <Server size={16} className="text-primary-600 mr-2" />
                                    <h3 className="font-medium text-neutral-800">Manufacturing Process</h3>
                                </div>
                                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                                    <FileText size={10} className="inline mr-1" />
                                    VISUAL.DATA
                                </div>
                            </div>

                            {/* Video thumbnail with technical overlay */}
                            <div className="p-4">
                                <div className="relative group cursor-pointer rounded-sm overflow-hidden border border-neutral-200" onClick={() => setPlayPromoVideo(true)}>
                                    <img src='images/banner-esg.jpg' alt="CQS Manufacturing Facility" className="w-full h-auto object-cover" />

                                    {/* Technical overlay elements */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                    {/* Technical corner elements */}
                                    <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/50 opacity-70"></div>
                                    <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/50 opacity-70"></div>

                                    {/* Play button with technical styling */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="w-16 h-16 bg-black/40 backdrop-blur-sm border border-white/30 rounded-sm flex items-center justify-center group-hover:bg-primary-600/80 transition-colors">
                                            <Play className="text-white ml-1" size={26} />
                                        </button>
                                    </div>


                                    {/* Technical metrics readout */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-white text-lg font-bold flex items-center mb-1">
                                            <div className="w-1 h-4 bg-primary-500 mr-2"></div>
                                            One-Stop Manufacturing Services
                                        </h3>
                                        <p className="text-white/80 text-sm ml-3 mb-2">
                                            From die-casting to assembly, discover our comprehensive production capabilities
                                        </p>

                                        {/* Technical specs badges */}
                                        <div className="flex space-x-3 ml-3">
                                            <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/20 text-white text-xs font-mono">
                                                RES: 1920x1080
                                            </div>
                                            <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/20 text-white text-xs font-mono flex items-center">
                                                <Clock size={10} className="mr-1" />
                                                DURATION: 03:24
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technical specifications table */}
                            <Specifications />
                        </div>
                    </div>
                </div>

                {/* Technical document footer */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center text-xs font-mono text-neutral-500 bg-white px-3 py-1.5 border border-neutral-200 rounded-sm">
                        <Terminal size={12} className="mr-1.5 text-primary-500" />
                        <span>DOC.CQS.COMPANY_PROFILE.{currentYear} | REV {currentYear.toString().substring(2)}.2</span>
                    </div>
                </div>
            </div>

            {/* Promotional Video Modal with technical styling */}
            <VideoModal
                isOpen={playPromoVideo}
                onClose={() => setPlayPromoVideo(false)}
                videoSrc="/path/to/company-intro.mp4"
                title="CQS_MANUFACTURING_PROCESS.MP4"
                resolution="1920x1080"
            />


        </section>
    );
};


export default React.memo(FactoryStrengthSection);

