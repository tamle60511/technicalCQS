import { ArrowRight, FileText } from 'lucide-react';
import React from 'react';
import CaseStudyCard from './shared/CaseStudyCard';

interface KeyResult {
    value: string;
    label: string;
}

interface ImplementationStep {
    text: string;
}

interface CaseStudy {
    id: string;
    industry: string;
    title: string;
    tag: string;
    description: string;
    image: string;
    solution: string;
    keyResults: KeyResult[];
    implementationSteps: ImplementationStep[];
}

const CaseStudies: React.FC = () => {
    const caseStudies: CaseStudy[] = [
        {
            id: 'vinfast-project',
            industry: 'Automotive Industry',
            title: 'VinFast Performance Enhancement Project',
            tag: 'Lightweight Wheels',
            description:
                'VinFast sought to enhance the performance and efficiency of their premium electric vehicle lineup. They needed lightweight aluminum components that could reduce overall vehicle weight while maintaining structural integrity and safety standards.',
            image: 'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            solution:
                'We developed custom aluminum alloy wheel rims and structural components that reduced weight by 22% compared to conventional materials. Our proprietary casting and machining processes ensured precise tolerances and exceptional quality.',
            keyResults: [
                { value: '22%', label: 'Weight Reduction' },
                { value: '18%', label: 'Efficiency Gain' },
                { value: '35%', label: 'Improved Cooling' },
                { value: '$2.1M', label: 'Annual Savings' },
            ],
            implementationSteps: [
                { text: 'Co-development with VinFast engineering team' },
                { text: 'Rapid prototyping and iterative testing' },
                { text: 'Scaled production with rigorous quality control' },
            ],
        },
        {
            id: 'mercedes-project',
            industry: 'Luxury Automotive',
            title: 'Mercedes Performance Braking System',
            tag: 'Brake Components',
            description:
                'Mercedes needed advanced brake components for their high-performance vehicle line that could provide superior heat dissipation, reduced weight, and consistent performance under extreme conditions.',
            image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            solution:
                'We engineered aluminum brake calipers with advanced cooling channels and proprietary alloy composition. The components underwent rigorous testing to ensure they could withstand extreme temperatures and repeated stress cycles.',
            keyResults: [
                { value: '40%', label: 'Heat Reduction' },
                { value: '15%', label: 'Performance Gain' },
                { value: '28%', label: 'Weight Savings' },
                { value: '2.8x', label: 'Lifespan Increase' },
            ],
            implementationSteps: [
                { text: 'Computational fluid dynamics to optimize cooling' },
                { text: 'Track testing on the Nürburgring circuit' },
                { text: 'Specialized anodizing for corrosion resistance' },
            ],
        },
    ];

    return (
        <section className="relative bg-white py-16">
            {/* Radial Background */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>

            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    {/* Section Header */}
                    <div className="mb-12 flex flex-col items-center">
                        <div className="bg-primary-800/90 border-secondary-600 relative mb-6 inline-flex items-center border-l-2 px-4 py-2 text-white">
                            <div className="border-secondary-500 absolute -top-1 -left-1 h-2 w-2 border-t border-l"></div>
                            <div className="border-secondary-500 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b"></div>
                            <FileText className="mr-2 h-4 w-4" />
                            <span className="text-sm font-medium tracking-wider uppercase">Success Stories</span>
                        </div>

                        <h2 className="text-primary-900 mb-4 text-center text-3xl font-bold tracking-tight">
                            Client <span className="text-secondary-600">Case Studies</span>
                        </h2>

                        <div className="relative mb-6 h-0.5 w-20 bg-gray-300">
                            <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 transform border border-gray-300"></div>
                        </div>

                        <p className="mb-10 max-w-3xl text-center text-gray-600">
                            Discover how our precision aluminum components have helped our clients achieve significant improvements in performance,
                            efficiency, and innovation.
                        </p>
                    </div>

                    {/* Case Studies */}
                    <div className="space-y-8">
                        {caseStudies.map((study) => (
                            <CaseStudyCard key={study.id} {...study} />
                        ))}
                    </div>

                    {/* More Case Studies Button */}
                    <div className="mt-8 flex justify-center">
                        <a
                            href="#"
                            className="bg-primary-800 hover:bg-primary-700 border-primary-700 group relative inline-flex items-center border px-6 py-3 font-medium text-white transition-colors"
                        >
                            <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-white/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            View All Case Studies
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
