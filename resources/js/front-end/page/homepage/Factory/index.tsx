import Button, { ButtonVariant } from '@/front-end/components/ui/Button';
import SectionFooter from '@/front-end/components/ui/Section/SectionFooter';
import SectionHeader from '@/front-end/components/ui/Section/SectionHeader';
import Title from '@/front-end/components/ui/Title/Title';
import VideoModal from '@/front-end/components/ui/Video/VideoModal';
import { Database, FileText, Phone, Play, Server, Terminal } from 'lucide-react';
import React from 'react';
import MetricCarousel from './shared/MetricCarousel';
import Specifications from './shared/Specifications';
import { usePromo } from '@/hooks/use-promo';

const BUTTON_VARIANT: { PRIMARY: ButtonVariant; SECONDARY: ButtonVariant; OUTLINE: ButtonVariant } = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    OUTLINE: 'outline',
};

const Factory = () => {
    const{ setPlayPromoVideo, playPromoVideo,  isLoaded, isScanning, currentYear} = usePromo();
    return (
        <section id="about" className="relative overflow-hidden bg-neutral-100 py-16 md:py-20">
            {/* Technical background patterns */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#222_50px,#222_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#222_50px,#222_51px,transparent_51px)] [background-size:50px_50px] opacity-5"></div>

            {/* Horizontal scanning line */}
            <div
                className={`bg-primary-400/30 pointer-events-none absolute right-0 left-0 h-px transition-all duration-1000 ease-in-out ${isScanning ? 'top-0' : 'top-full'}`}
            ></div>

            {/* Technical corner accents */}
            <div className="border-primary-600/20 absolute top-0 left-0 h-40 w-40 border-t border-l opacity-60"></div>
            <div className="border-primary-600/20 absolute right-0 bottom-0 h-40 w-40 border-r border-b opacity-60"></div>

            {/* Technical measurement lines */}
            <div className="pointer-events-none absolute top-0 right-20 bottom-0 flex w-0.5 flex-col opacity-30">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="border-primary-600/30 relative flex-1 border-b">
                        {i % 2 === 0 && <div className="bg-primary-600/50 absolute right-0 bottom-0 h-0.5 w-2"></div>}
                        {i % 5 === 0 && <div className="text-primary-600/50 absolute right-3 bottom-0 font-mono text-xs">{100 - i * 10}%</div>}
                    </div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                {/* Technical title header */}
                <Title
                    metadata={{
                        icon: Terminal,
                        text: 'SYS: CQS.MANUFACTURING.CAPABILITIES.{currentYear}',
                        variant: 'default',
                    }}
                    title={{
                        span: true,
                        main: 'Company',
                        highlight: 'Overview',
                    }}
                />

                <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-12">
                    {/* Left column - Main factory dashboard */}
                    <div className="lg:col-span-6">
                        {/* Main dashboard panel */}
                        <div
                            className={`hover:border-primary-200 relative rounded-sm border border-neutral-200 bg-white shadow-md transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            {/* Technical corner elements */}
                            <div className="border-primary-500 absolute top-0 left-0 h-3 w-3 border-t border-l opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="border-primary-500 absolute right-0 bottom-0 h-3 w-3 border-r border-b opacity-0 transition-opacity group-hover:opacity-100"></div>

                            <SectionHeader icon={Database} title="Manufacturing Overview" code="CQS.MFG.2025" />

                            {/* Main company description with technical styling */}
                            <MetricCarousel />

                            {/* Capability stats - technical style bars */}
                            <div className="p-5">
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <Button leftIcon={Terminal} variant={BUTTON_VARIANT.PRIMARY}>
                                        Our Technologies
                                    </Button>
                                    <Button leftIcon={Phone} variant={BUTTON_VARIANT.OUTLINE}>
                                        Contact Us
                                    </Button>
                                </div>
                            </div>

                            {/* Technical dashboard footer */}

                            <SectionFooter
                                reference="CQS.COMPANY.PROFILE.2025"
                                status={{
                                    text: 'ACTIVE FACILITIES: 3/3',
                                    color: 'emerald',
                                }}
                            />
                        </div>
                    </div>

                    {/* Right column - Visual content & tech specs */}
                    <div className="lg:col-span-6">
                        {/* Video showcase with technical styling */}
                        <div
                            className={`hover:border-primary-200 rounded-sm border border-neutral-200 bg-white shadow-md transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            {/* Header */}
                            <SectionHeader icon={Server} title="Manufacturing Services" code="CQS.MFG.SERVICES.2025" additionalIcon={FileText} />
                            {/* Video thumbnail with technical overlay */}
                            <div className="p-4">
                                <div
                                    className="group relative cursor-pointer overflow-hidden rounded-sm border border-neutral-200"
                                    onClick={() => setPlayPromoVideo(true)}
                                >
                                    <img src="images/banner-esg.jpg" alt="CQS Manufacturing Facility" className="h-auto w-full object-cover" />

                                    {/* Technical overlay elements */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                    {/* Technical corner elements */}
                                    <div className="absolute top-0 left-0 h-10 w-10 border-t border-l border-white/50 opacity-70"></div>
                                    <div className="absolute right-0 bottom-0 h-10 w-10 border-r border-b border-white/50 opacity-70"></div>

                                    {/* Play button with technical styling */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="group-hover:bg-primary-600/80 flex h-16 w-16 items-center justify-center rounded-sm border border-white/30 bg-black/40 backdrop-blur-sm transition-colors">
                                            <Play className="ml-1 text-white" size={26} />
                                        </button>
                                    </div>

                                    {/* Technical metrics readout */}
                                    <div className="absolute right-0 bottom-0 left-0 p-4">
                                        <h3 className="mb-1 flex items-center text-lg font-bold text-white">
                                            <div className="bg-primary-500 mr-2 h-4 w-1"></div>
                                            One-Stop Manufacturing Services
                                        </h3>
                                        <p className="mb-2 ml-3 text-sm text-white/80">
                                            From die-casting to assembly, discover our comprehensive production capabilities
                                        </p>
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
                    <div className="inline-flex items-center rounded-sm border border-neutral-200 bg-white px-3 py-1.5 font-mono text-xs text-neutral-500">
                        <Terminal size={12} className="text-primary-500 mr-1.5" />
                        <span>
                            DOC.CQS.COMPANY_PROFILE.{currentYear} | REV {currentYear.toString().substring(2)}.2
                        </span>
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

export default React.memo(Factory);
