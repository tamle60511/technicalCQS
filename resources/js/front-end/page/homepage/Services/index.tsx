import Background from '@/front-end/components/ui/Background';
import SectionHeader from '@/front-end/components/ui/Section/SectionHeader';
import { Service } from '@/front-end/types/services';
import { useServiceSection } from '@/hooks/useServiceSection';
import { Database, Radio, Shield } from 'lucide-react';
import Facility from './shared/Facility';
import ServiceHeader from './shared/ServiceHeader';
import ServiceMainPanel from './shared/ServiceMainPanel';

// Define TypeScript interfaces

interface ServicesProps {
    services?: Service[];
}

export default function Services({ services }: ServicesProps) {
    const { activeServiceIndex, setActiveServiceIndex, serviceItems, currentYear, isLoaded, isScanning } = useServiceSection(services);
    return (
        <section className="relative overflow-hidden bg-neutral-100 py-16 md:py-20">
            {/* Technical background patterns */}
            <Background isScanning={isScanning} />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Technical title header */}
                <ServiceHeader currentYear={currentYear} />
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    {/* Left Column - Services Dashboard (7 columns) */}
                    <div className="lg:col-span-7">
                        <ServiceMainPanel
                            serviceItems={serviceItems}
                            activeServiceIndex={activeServiceIndex}
                            isLoaded={isLoaded}
                            setActiveServiceIndex={setActiveServiceIndex}
                        />
                    </div>
                    {/* Right Column - Technical Image (5 columns) */}
                    <div className="relative lg:col-span-5">
                        {/* Technical image dashboard */}
                        <div
                            className={`hover:border-primary-200 rounded-sm border border-neutral-200 bg-white shadow-md transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <SectionHeader icon={Database} title="Manufacturing Services Database" code="LIVE" additionalIcon={Radio} />
                            <div className="p-4">
                                <div className="relative h-[410px] overflow-hidden rounded-sm border border-neutral-200">
                                    {/* Technical corner elements */}
                                    <div className="border-primary-600 absolute top-0 left-0 z-10 h-12 w-12 border-t-2 border-l-2"></div>
                                    <div className="border-primary-600 absolute right-0 bottom-0 z-10 h-12 w-12 border-r-2 border-b-2"></div>

                                    {/* Technical reference badge */}
                                    <div className="border-primary-600 absolute top-3 right-3 z-10 border-r bg-neutral-900/80 px-2 py-1 font-mono text-xs text-white backdrop-blur-sm">
                                        CQS-FACILITY-{currentYear}
                                    </div>
                                    <img src="images/onetop.png" alt="CQS Manufacturing Facility" className="h-full w-full object-cover" />
                                    {/* Technical overlay patterns */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-neutral-900/30 mix-blend-multiply"></div>
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>
                                    {/* Technical measurement grid */}
                                    <div className="pointer-events-none absolute inset-0 grid grid-cols-4 grid-rows-4">
                                        {[...Array(16)].map((_, i) => (
                                            <div key={i} className="border-primary-500/10 border"></div>
                                        ))}
                                    </div>
                                    {/* Caption bar */}
                                    <div className="absolute right-0 bottom-0 left-0 border-t border-neutral-700 bg-neutral-900/80 px-4 py-3 backdrop-blur-sm">
                                        <div className="flex items-center">
                                            <div className="bg-primary-600 mr-3 h-6 w-2"></div>
                                            <div>
                                                <div className="font-medium text-white">Advanced Die Casting Facility</div>
                                                <div className="flex items-center text-sm text-neutral-400">
                                                    <Shield size={12} className="text-primary-400 mr-1.5" />
                                                    <span>IATF16949 & ISO9001 Certified | Global Distribution</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Technical facility stats */}
                            <Facility />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
