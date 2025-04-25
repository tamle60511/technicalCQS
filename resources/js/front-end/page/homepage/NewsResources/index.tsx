import Button, { ButtonVariant } from '@/front-end/components/ui/Button';
import Title from '@/front-end/components/ui/Title/Title';
import { Code, Cpu, Database, Factory, FileText, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import ResourceCard from './shared/ResourceCard';
import SectionFooter from '@/front-end/components/ui/Section/SectionFooter';
import SectionHeader from '@/front-end/components/ui/Section/SectionHeader';

// Define interfaces for type safety
interface NewsItem {
    type: string;
    title: string;
    image: string;
    url: string;
    icon: any;
    description?: string;
    date?: string;
    docId?: string;
}

interface NewsResourcesProps {
    news?: NewsItem[];
}

const BUTTON_VARIANT: { SECONDARY: ButtonVariant } = {
    SECONDARY: 'secondary',
};

export default function NewsResources({ news }: NewsResourcesProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isScanning, setIsScanning] = useState(true);

    // Current year for technical reference codes
    const currentYear = new Date().getFullYear();

    // Default news data if not provided via props
    const defaultNews: NewsItem[] = [
        {
            type: 'HPDC TECH',
            title: 'Vacuum-Assisted HPDC Technology for Structural Automotive Components',
            image: '/images/Aluminum.jpg',
            url: '/resources/technology/vacuum-hpdc-process',
            icon: Cpu,
            description: 'Advanced vacuum-assisted die casting process that eliminates porosity for high-integrity structural parts',
            date: '2023-09-15',
            docId: 'TECH-HPDC-221',
        },
        {
            type: 'APPLICATIONS',
            title: 'Lightweight A380 & A383 Aluminum Solutions for EV & ICE Applications',
            image: '/images/Advanced.jpg',
            url: '/resources/case-study/lightweight-solutions',
            icon: FileText,
            description: 'Aluminum alloy selection and optimization for weight reduction in automotive applications',
            date: '2023-11-03',
            docId: 'APP-AL-383',
        },
        {
            type: 'CASE STUDY',
            title: 'CQS Integrated Solutions: Die Casting, Machining & Assembly Excellence',
            image: '/images/cnc.jpg',
            url: '/resources/video/manufacturing-process',
            icon: Factory,
            description: 'End-to-end manufacturing capabilities from design to finished components with quality verification',
            date: '2023-12-20',
            docId: 'CS-INT-104',
        },
    ];

    // Use provided news or default if not available
    const newsItems: NewsItem[] = news || defaultNews;

    useEffect(() => {
        setIsLoaded(true);

        // Scanning animation timing
        const scanInterval = setInterval(() => {
            setIsScanning((prev) => !prev);
        }, 5000);

        return () => {
            clearInterval(scanInterval);
        };
    }, []);

    return (
        <section className="relative overflow-hidden bg-neutral-100 py-16 md:py-20">
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
            <div className="pointer-events-none absolute top-0 bottom-0 left-10 flex w-0.5 flex-col opacity-30">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="border-primary-600/30 relative flex-1 border-b">
                        {i % 2 === 0 && <div className="bg-primary-600/50 absolute bottom-0 left-0 h-0.5 w-2"></div>}
                    </div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Technical title header */}

                <Title
                    className="flex flex-col items-center"
                    metadata={{
                        icon: Terminal,
                        text: 'DB: CQS.TECHNICAL_RESOURCES.{currentYear}',
                        variant: 'system',
                    }}
                    title={{
                        prefix: 'Aluminum',
                        main: 'Excellence',
                        highlight: 'Center',
                        suffix: 'Solutions',
                    }}
                    description=" Discover our advanced manufacturing capabilities in high-pressure die casting with tolerances of ±0.05mm, 5-axis CNC
                            precision machining, and integrated assembly services. As an IATF 16949 certified supplier, we deliver complete solutions
                            for critical automotive structural components and EV battery housings."
                    showDivider
                />
                {/* Technical resources dashboard */}
                <div
                    className={`mb-10 rounded-sm border border-neutral-200 bg-white shadow-md transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >

                    <SectionHeader icon={Database} title="Technical Knowledge Base" code="RESOURCES.2025" additionalIcon={Code} />
                    <div className="grid grid-cols-1 gap-0.5 p-0.5 md:grid-cols-3">
                        {newsItems.map((item, index) => (
                            <ResourceCard
                                key={index}
                                type={item.type}
                                title={item.title}
                                image={item.image}
                                url={item.url}
                                icon={item.icon}
                                description={item.description}
                                date={item.date}
                                docId={item.docId}
                                index={index}
                                isLoaded={isLoaded}
                            />
                        ))}
                    </div>

                    {/* Technical dashboard footer */}
                    <SectionFooter
                        reference="CQS.RESOURCES.DB.2025"
                        status={{
                            text: 'DOCUMENTS AVAILABLE: 3',
                            color: 'emerald',
                        }}
                    />
                </div>

                {/* Technical style CTA */}
                <div className="text-center">
                    <Button variant={BUTTON_VARIANT.SECONDARY} leftIcon={Terminal}>
                        Explore Technical Resources
                    </Button>
                </div>
            </div>
        </section>
    );
}
