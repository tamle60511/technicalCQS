import Button, { BUTTON_VARIANT } from '@/front-end/components/ui/Button';
import { AlertCircle, CheckCircle, Clock, Database, FileText, Globe, PhoneCall, Shield, Terminal, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';

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
            setIsScanning((prev) => !prev);
        }, 5000);

        // Simulate connection status changes
        const statusInterval = setInterval(() => {
            setConnectionStatus((prev) => (prev === 'ACTIVE' ? 'CONNECTING' : 'ACTIVE'));
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
            icon: <Globe size={16} className="text-primary-500" />,
        },
        {
            value: '93%',
            label: 'Aluminum Recycling',
            icon: <Zap size={16} className="text-primary-500" />,
        },
        {
            value: 'IATF16949',
            label: 'Certified',
            icon: <Shield size={16} className="text-primary-500" />,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-neutral-900 py-16 md:py-20">
            {/* Technical background patterns */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_9px,#333_10px),linear-gradient(to_bottom,transparent_9px,#333_10px)] [background-size:10px_10px] opacity-10"></div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

            {/* Horizontal scanning line */}
            <div
                className={`bg-primary-400/40 pointer-events-none absolute right-0 left-0 h-px transition-all duration-1000 ease-in-out ${isScanning ? 'top-0' : 'top-full'}`}
            ></div>

            {/* Technical corner accents */}
            <div className="border-primary-600/20 absolute top-0 left-0 h-40 w-40 border-t border-l opacity-60"></div>
            <div className="border-primary-600/20 absolute right-0 bottom-0 h-40 w-40 border-r border-b opacity-60"></div>

            {/* Technical measurement lines */}
            <div className="pointer-events-none absolute top-0 right-10 bottom-0 flex w-0.5 flex-col opacity-30">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="border-primary-600/30 relative flex-1 border-b">
                        {i % 2 === 0 && <div className="bg-primary-600/50 absolute right-0 bottom-0 h-0.5 w-2"></div>}
                    </div>
                ))}
            </div>

            {/* Technical measurement marks - top */}
            <div className="absolute top-0 left-0 flex h-4 w-full">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="border-primary-600/30 relative flex-1 border-r">
                        {i % 5 === 0 && <div className="bg-primary-600/40 absolute top-0 right-0 h-4 w-0.5"></div>}
                    </div>
                ))}
            </div>

            {/* Main content container */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Technical dashboard header */}
                <div
                    className={`mb-8 text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <div className="relative mb-4 inline-flex items-center rounded-sm border border-neutral-700/50 bg-neutral-800/80 px-4 py-2 backdrop-blur-sm">
                        <div className="border-primary-500/50 absolute -top-1 -left-1 h-2 w-2 border-t border-l"></div>
                        <div className="border-primary-500/50 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b"></div>
                        <Terminal className="text-primary-500 mr-2" size={16} />
                        <p className="font-mono text-sm tracking-wider text-white">
                            <span className="text-primary-500">SYS:</span> CQS.CONNECTION.REQUEST.{currentYear}
                        </p>
                    </div>
                </div>

                {/* Main dashboard panel */}
                <div
                    className={`relative mx-auto max-w-4xl rounded-sm border border-neutral-700 bg-neutral-800/90 shadow-xl backdrop-blur-sm transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    {/* Technical corner elements */}
                    <div className="border-primary-500 absolute top-0 left-0 -mt-1 -ml-1 h-16 w-16 border-t-2 border-l-2"></div>
                    <div className="border-primary-500 absolute right-0 bottom-0 -mr-1 -mb-1 h-16 w-16 border-r-2 border-b-2"></div>

                    {/* Technical header */}
                    <div className="flex items-center justify-between border-b border-neutral-700 p-4">
                        <div className="flex items-center">
                            <Database size={18} className="text-primary-500 mr-2" />
                            <h3 className="font-medium text-white">CQS Partner Connection Portal</h3>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center rounded-sm border border-neutral-700 bg-neutral-900/60 px-2 py-0.5 font-mono text-xs text-neutral-300">
                                <Clock size={10} className="text-primary-400 mr-1.5" />
                                {new Date().toISOString().split('T')[0]}
                            </div>
                            <div className="flex items-center rounded-sm border border-neutral-700 bg-neutral-900/60 px-2 py-0.5 font-mono text-xs text-neutral-300">
                                <div
                                    className={`mr-1.5 h-1.5 w-1.5 rounded-full ${connectionStatus === 'ACTIVE' ? 'animate-pulse bg-emerald-500' : 'bg-amber-500'}`}
                                ></div>
                                <span>{connectionStatus}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="p-8 text-center lg:p-12">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                            Your{' '}
                            <span className="text-primary-500 relative">
                                One-Stop
                                <span className="bg-primary-600/30 absolute bottom-1 left-0 -z-10 h-1 w-full"></span>
                            </span>{' '}
                            Aluminum Die Casting Partner
                        </h2>

                        <div className="bg-primary-600 mx-auto mb-8 h-0.5 w-20"></div>

                        <div className="relative mx-auto mb-10 max-w-2xl rounded-sm border border-neutral-700 bg-neutral-900/50 p-4 backdrop-blur-sm">
                            <div className="border-primary-500/30 absolute -top-1 -left-1 h-2 w-2 border-t border-l"></div>
                            <div className="border-primary-500/30 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b"></div>
                            <p className="leading-relaxed text-neutral-300">
                                From die-casting to assembly, CQS delivers high-quality aluminum components for automotive and motorcycle industries.
                                Experience the perfect balance of Creativity, Quality, and Sustainability in every product.
                            </p>
                        </div>

                        {/* Technical call to action buttons */}
                        <div className="flex flex-col justify-center gap-6 sm:flex-row">
                            <Button leftIcon={PhoneCall} variant={BUTTON_VARIANT.PRIMARY}>
                                Contact Our Team
                            </Button>
                            <Button leftIcon={FileText} variant={BUTTON_VARIANT.OUTLINE}>
                                Request a Quote
                            </Button>
                        </div>

                        {/* Technical datapoints with dashboard styling */}
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-dashed border-neutral-700 pt-8">
                            {technicalMetrics.map((metric, index) => (
                                <div key={index} className="rounded-sm border border-neutral-700 bg-neutral-900/60 p-4">
                                    <div className="mb-2 flex justify-center">{metric.icon}</div>
                                    <div className="text-primary-500 mb-1 text-xl font-bold">{metric.value}</div>
                                    <div className="font-mono text-xs tracking-wider text-neutral-400 uppercase">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical dashboard footer */}
                    <div className="flex items-center justify-between border-t border-neutral-700 bg-neutral-900/50 px-5 py-3 font-mono text-xs text-neutral-500">
                        <span>REF: CQS.PARTNER.CONNECT.{currentYear}</span>
                        <div className="flex items-center">
                            <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                            <span>SYSTEM ONLINE: CQS.MFG.NETWORK</span>
                        </div>
                    </div>
                </div>

                {/* Technical status badges */}
                <div className="mt-6 flex justify-center">
                    <div className="flex items-center rounded-sm border border-neutral-700 bg-neutral-800/70 px-3 py-1.5 font-mono text-xs text-neutral-500">
                        <CheckCircle size={12} className="mr-1.5 text-emerald-500" />
                        <span>IATF 16949 CERTIFIED</span>
                        <span className="mx-2 h-3 border-r border-neutral-700"></span>
                        <AlertCircle size={12} className="text-primary-500 mr-1.5" />
                        <span>SECURE CONNECTION</span>
                    </div>
                </div>

                {/* Technical measurement marks - bottom */}
                <div className="absolute bottom-0 left-0 flex h-4 w-full rotate-180 transform">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="border-primary-600/30 relative flex-1 border-r">
                            {i % 5 === 0 && <div className="bg-primary-600/40 absolute top-0 right-0 h-4 w-0.5"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
