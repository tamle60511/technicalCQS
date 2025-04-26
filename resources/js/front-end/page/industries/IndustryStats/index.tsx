import { BarChart, BatteryCharging, Download, Leaf, TrendingUp } from 'lucide-react';
import React from 'react';
import InsightListItem from './shared/InsightListItem';
import MarketGrowthBar from './shared/MarketGrowthBar';
import MarketHighlightItem from './shared/MarketHighlightItem';

interface MarketHighlight {
    value: string;
    description: string;
}

interface MarketGrowthItem {
    industry: string;
    growthRate: number;
}

interface InsightItem {
    icon: React.ElementType;
    title: string;
    description: string;
}

const IndustryStats: React.FC = () => {
    const marketGrowthData: MarketGrowthItem[] = [
        { industry: 'Automotive', growthRate: 8.7 },
        { industry: 'Energy', growthRate: 7.2 },
        { industry: 'Aerospace', growthRate: 6.5 },
        { industry: 'Industrial Machinery', growthRate: 5.9 },
        { industry: 'Consumer Electronics', growthRate: 5.3 },
    ];

    const insightData: InsightItem[] = [
        {
            icon: TrendingUp,
            title: 'Growing at CAGR of 8.7%',
            description: 'The automotive aluminum market is projected to reach $54.2 billion by 2026',
        },
        {
            icon: BatteryCharging,
            title: 'EV Market Expansion',
            description: 'Electric vehicles use 40% more aluminum than conventional vehicles',
        },
        {
            icon: Leaf,
            title: 'Sustainability Focus',
            description: 'Aluminums recyclability makes it a preferred material for green manufacturing initiatives',
        },
    ];

    const marketHighlights: MarketHighlight[] = [
        {
            value: '68%',
            description: 'of automotive OEMs<br>increasing aluminum usage',
        },
        {
            value: '250kg',
            description: 'average aluminum<br>per vehicle by 2025',
        },
        {
            value: '12%',
            description: 'fuel efficiency gain<br>per 100kg reduction',
        },
    ];

    return (
        <section className="relative bg-gray-50 py-16">
            {/* Radial Background */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>

            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col items-center gap-10 md:flex-row">
                        {/* Insights Column */}
                        <div className="md:w-1/2">
                            <div className="bg-primary-800/90 border-secondary-600 relative mb-6 inline-flex items-center border-l-2 px-4 py-2 text-white">
                                <div className="border-secondary-500 absolute -top-1 -left-1 h-2 w-2 border-t border-l"></div>
                                <div className="border-secondary-500 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b"></div>
                                <BarChart className="mr-2 h-4 w-4" />
                                <span className="text-sm font-medium tracking-wider uppercase">Industry Insights</span>
                            </div>

                            <h2 className="text-primary-900 mb-4 text-3xl font-bold">
                                Aluminum Components Market <span className="text-secondary-600">Growth Trajectory</span>
                            </h2>

                            <div className="relative mb-6 h-0.5 w-20 bg-gray-300">
                                <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 transform border border-gray-300"></div>
                            </div>

                            <p className="mb-6 text-gray-600">
                                The global automotive aluminum market is experiencing robust growth, driven by increasing demand for lightweight
                                materials to improve fuel efficiency and reduce emissions. Electric vehicles are further accelerating this trend as
                                manufacturers seek to extend range through weight reduction.
                            </p>

                            <div className="mb-6 space-y-3">
                                {insightData.map((insight, index) => (
                                    <InsightListItem key={index} {...insight} />
                                ))}
                            </div>

                            <a
                                href="#"
                                className="text-secondary-600 hover:text-secondary-700 inline-flex items-center font-medium transition-colors"
                            >
                                Download Market Report
                                <Download className="ml-2 h-4 w-4" />
                            </a>
                        </div>

                        {/* Market Growth Column */}
                        <div className="md:w-1/2">
                            <div className="relative border border-gray-200 bg-white p-6">
                                <div className="border-secondary-500/30 absolute top-0 left-0 h-5 w-5 border-t border-l"></div>
                                <div className="border-secondary-500/30 absolute right-0 bottom-0 h-5 w-5 border-r border-b"></div>

                                <div className="mb-4 text-sm font-medium text-gray-500">Market Growth By Industry (2023-2026)</div>

                                {/* Market Growth Bars */}
                                <div className="space-y-4">
                                    {marketGrowthData.map((item, index) => (
                                        <MarketGrowthBar key={index} {...item} />
                                    ))}
                                </div>

                                {/* Market Highlights */}
                                <div className="mt-6 flex gap-6 border-t border-gray-200 pt-6">
                                    {marketHighlights.map((highlight, index) => (
                                        <MarketHighlightItem key={index} {...highlight} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryStats;
