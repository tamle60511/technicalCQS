import SectionFooter from '@/front-end/components/ui/Section/SectionFooter';
import SectionHeader from '@/front-end/components/ui/Section/SectionHeader';
import Title from '@/front-end/components/ui/Title/Title';
import { Link } from '@inertiajs/react';
import { ExternalLink, Factory, Layers, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import IndustryCard from './shared/IndustryCard';
import Button, { ButtonVariant } from '@/front-end/components/ui/Button';

// Define TypeScript interfaces
interface Industry {
    name: string;
    description: string;
    image: string;
    url: string;
    techCode?: string;
    applications?: number;
    materialTypes?: string[];
    compatibility?: number;
}

interface IndustriesSectionProps {
    industries?: Industry[];
}
const BUTTON_VARIANT: { SECONDARY: ButtonVariant } = {
    SECONDARY: 'secondary',
};

export default function IndustriesSection({ industries }: IndustriesSectionProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    // Current year for technical reference codes
    const currentYear = new Date().getFullYear();
    // Default industries data if not provided via props
    const defaultIndustries: Industry[] = [
        {
            name: 'AUTOMOTIVE',
            description:
                'High-quality aluminum components for automotive systems including brake components, suspension parts, and structural elements.',
            image: '/images/Advanced.jpg',
            url: '/industries/automotive',
            techCode: 'AUTO-AL-21',
            applications: 48,
            materialTypes: ['A380', 'ADC12', 'A383'],
            compatibility: 92,
        },
        {
            name: 'MOTORCYCLE',
            description: 'Precision die-cast components for motorcycle manufacturers, delivering lightweight and high-performance parts.',
            image: '/images/Aluminum.jpg',
            url: '/industries/motorcycle',
            techCode: 'MOTO-AL-15',
            applications: 36,
            materialTypes: ['A380', 'ADC12'],
            compatibility: 88,
        },
        {
            name: 'GREEN ENERGY',
            description:
                'Sustainable aluminum products designed for green energy applications, reducing environmental impact while maintaining performance.',
            image: '/images/cnc.jpg',
            url: '/industries/green-energy',
            techCode: 'GREEN-AL-09',
            applications: 22,
            materialTypes: ['ADC12', 'A383', 'A356'],
            compatibility: 95,
        },
        {
            name: 'AGRICULTURAL',
            description: 'Durable aluminum components for agricultural equipment and machinery, designed to withstand demanding environments.',
            image: '/images/Material-1.jpg',
            url: '/industries/agricultural',
            techCode: 'AGRI-AL-17',
            applications: 32,
            materialTypes: ['A380', 'A356'],
            compatibility: 86,
        },
        {
            name: 'LIGHTWEIGHT PRODUCTS',
            description:
                'Innovative lightweight aluminum solutions that reduce weight, increase efficiency, and improve performance across multiple applications.',
            image: '/images/Material-2.jpg',
            url: '/industries/lightweight-products',
            techCode: 'LITE-AL-28',
            applications: 40,
            materialTypes: ['A380', 'ADC12', 'A383', 'A356'],
            compatibility: 94,
        },
    ];

    // Use provided industries or default if not available
    const industryItems: Industry[] = industries || defaultIndustries;

    useEffect(() => {
        setIsLoaded(true);

        // Auto-rotate active industry
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % industryItems.length);
        }, 8000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="relative overflow-hidden bg-neutral-100 py-16 md:py-20">
            {/* Technical background patterns */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#222_50px,#222_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#222_50px,#222_51px,transparent_51px)] [background-size:50px_50px] opacity-5"></div>

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

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Technical title header */}

                <Title
                    className="flex flex-col items-center"
                    metadata={{
                        icon: Terminal,
                        text: 'SYS: CQS.INDUSTRY_APPLICATIONS.{currentYear}',
                        variant: 'system',
                    }}
                    title={{
                        main: 'Comprehensive',
                        highlight: 'Aluminum',
                        suffix: 'Solutions',
                    }}
                    description="CQS delivers high-quality aluminum die-cast components across multiple industries, with products distributed to Taiwan, the
                            United States, Canada, Mexico, Japan, Italy, China, and Southeast Asia."
                    showDivider
                />
                {/* Industry Dashboard */}
                <div
                    className={`mb-10 rounded-sm border border-neutral-200 bg-white shadow-md transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <SectionHeader icon={Factory} title="Industry Application Database" code={`SECTORS: ${industryItems.length}`} />
                    <div className="flex flex-col items-start justify-between border-b border-neutral-200 p-4 sm:flex-row sm:items-center">
                        <div className="mb-3 sm:mb-0">
                            <div className="mb-1 font-mono text-xs text-neutral-500">ACTIVE INDUSTRY</div>
                            <div className="flex items-center">
                                <div className="bg-primary-500 mr-2 h-2 w-2 rounded-full"></div>
                                <h4 className="font-bold text-neutral-800">{industryItems[activeIndex].name}</h4>
                                <div className="ml-3 rounded-sm border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-xs text-neutral-500">
                                    {industryItems[activeIndex].techCode}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex flex-col items-center rounded-sm border border-neutral-200 bg-neutral-50 px-3 py-1">
                                <div className="font-mono text-xs text-neutral-500">APPLICATIONS</div>
                                <div className="text-primary-600 font-bold">{industryItems[activeIndex].applications}</div>
                            </div>

                            <div className="flex flex-col items-center rounded-sm border border-neutral-200 bg-neutral-50 px-3 py-1">
                                <div className="font-mono text-xs text-neutral-500">COMPATIBILITY</div>
                                <div className="text-primary-600 font-bold">{industryItems[activeIndex].compatibility}%</div>
                            </div>
                        </div>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-1 gap-0.5 p-0.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {industryItems.map((industry, index) => (
                            <IndustryCard
                                key={index}
                                name={industry.name}
                                description={industry.description}
                                image={industry.image}
                                url={industry.url}
                                index={index}
                                techCode={industry.techCode}
                                applications={industry.applications}
                                materialTypes={industry.materialTypes}
                                compatibility={industry.compatibility}
                                isLoaded={isLoaded}
                            />
                        ))}
                    </div>

                    {/* Technical dashboard footer */}

                    <SectionFooter
                        reference="CQS.INDUSTRY.MATRIX.2025"
                        status={{
                            text: 'MATERIAL COMPATIBILITY CHART AVAILABLE',
                            color: 'emerald',
                        }}
                    />
                </div>

                {/* Technical style CTA */}
                <div className="text-center">

                    <Button variant={BUTTON_VARIANT.SECONDARY} leftIcon={ExternalLink}>
                    View All Industry Applications
                    </Button>
                </div>
            </div>
        </section>
    );
}
