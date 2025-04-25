import { Award, CheckCircle, Cog, Globe, Wrench } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

interface FactoryMetric {
    label: string;
    value: string;
    icon: React.ReactNode;
    color: 'primary' | 'neutral';
    description: string;
}
const MetricCarousel: React.FC = () => {
    const [activeMetric, setActiveMetric] = useState(0);

    const factoryMetrics: FactoryMetric[] = useMemo(
        () => [
            {
                label: 'Machine Precision',
                value: '±0.01mm',
                icon: <Cog size={20} />,
                color: 'primary',
                description: 'High precision die casting and CNC machining',
            },
            {
                label: 'Production Capacity',
                value: '10M+',
                icon: <Cog size={20} />,
                color: 'neutral',
                description: 'Annual production capacity in units',
            },
            {
                label: 'Global Distribution',
                value: '8+',
                icon: <Globe size={20} />,
                color: 'primary',
                description: 'Countries with regular shipping',
            },
            {
                label: 'Quality Pass Rate',
                value: '99.97%',
                icon: <CheckCircle size={20} />,
                color: 'neutral',
                description: 'First-pass yield for production',
            },
        ],
        [],
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMetric((prev) => (prev + 1) % factoryMetrics.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [factoryMetrics.length]);

    return (
        <div className="border-b border-neutral-200 p-5">
            <div className="mb-5 rounded-sm border border-neutral-200 bg-neutral-50 p-4">
                <p className="leading-relaxed text-neutral-700">
                    CQS provides customers with comprehensive "one-stop" services, from die-casting production to CNC precision processing, stamping,
                    painting, assembly, and packaging.
                </p>
            </div>

            <div className="mb-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-sm border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-3 flex items-start">
                        <div className="bg-steel-50 border-steel-200 mr-4 flex h-12 w-12 items-center justify-center rounded-sm border">
                            <Award className="text-primary-600" size={22} />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold tracking-wide text-neutral-900 uppercase">Quality Excellence</h3>
                            <p className="mt-1 text-sm text-neutral-600">IATF16949 and ISO9001 certified manufacturing</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-sm border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-4 flex items-start">
                        <div className="bg-steel-50 border-steel-200 mr-4 flex h-12 w-12 items-center justify-center rounded-sm border">
                            <Wrench className="text-primary-600" size={22} />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold tracking-wide text-neutral-900 uppercase">Advanced Technologies</h3>
                            <p className="mt-1 text-sm text-neutral-600">HPDC, CNC, GDC, Painting</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-5 flex h-20 overflow-hidden">
                {factoryMetrics.map((metric, index) => (
                    <div
                        key={index}
                        className={`flex min-w-full items-center transition-transform duration-500 ease-in-out ${
                            index === activeMetric ? 'translate-x-0' : 'absolute translate-x-full'
                        }`}
                    >
                        <div className={`bg-${metric.color}-50 border p-3 border-${metric.color}-200 flex w-full items-center rounded-sm`}>
                            <div
                                className={`h-12 w-12 rounded-sm bg-${metric.color}-100 border border-${metric.color}-200 mr-4 flex items-center justify-center text-${metric.color}-600`}
                            >
                                {metric.icon}
                            </div>
                            <div>
                                <div className="mb-1 font-mono text-xs text-neutral-500">{metric.label}</div>
                                <div className="text-2xl font-bold text-neutral-900">{metric.value}</div>
                                <div className="text-xs text-neutral-500">{metric.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetricCarousel;
