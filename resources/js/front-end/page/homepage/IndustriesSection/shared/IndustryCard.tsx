import { Link } from '@inertiajs/react'
import { ArrowRight, Layers, Settings, Shield } from 'lucide-react'
import React from 'react'

interface IndustryCardProps {
    name: string;
    description: string;
    image: string;
    url: string;
    index: number;
    techCode?: string;
    applications?: number;
    materialTypes?: string[];
    compatibility?: number;
    isLoaded: boolean;
}

const IndustryCard = ({
    name,
    description,
    image,
    url,
    index,
    techCode = `IND-${index + 101}`,
    applications = 30 + index * 5,
    materialTypes = ['A380', 'ADC12'],
    compatibility = 85 + index * 2,
    isLoaded
}: IndustryCardProps) => {
  return (
    <div
    className={`relative overflow-hidden border border-neutral-200 bg-neutral-900 transition-all duration-500 hover:border-primary-400 group ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}
    style={{
        transitionDelay: `${index * 100}ms`,
        height: '360px'
    }}
>
    {/* Technical corner elements */}
    <div className="absolute top-0 left-0 z-20 h-8 w-8 border-t-2 border-l-2 border-white/20"></div>
    <div className="absolute right-0 bottom-0 z-20 h-8 w-8 border-r-2 border-b-2 border-white/20"></div>

    <img
        src={image}
        alt={name}
        className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
    />



    {/* Technical overlay patterns */}
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-neutral-900/40"></div>
    <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>

    {/* Technical reference code */}
    <div className="absolute top-3 right-3 z-20 font-mono text-xs bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-sm text-white/70 border-r border-primary-500/50">
        {techCode}
    </div>

    <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
        {/* Industry name with technical styling */}
        <div className="mb-3 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-1.5"></div>
            <h3 className="text-center text-lg font-bold tracking-wide text-white">{name}</h3>
        </div>

        {/* Technical specs that show on hover */}
        <div className="relative overflow-hidden opacity-0 transition-all duration-300 group-hover:opacity-100 h-0 group-hover:h-[200px]">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-3 rounded-sm mb-3">
                <p className="text-center text-sm text-neutral-300">{description}</p>
            </div>

            {/* Technical specifications */}
            <div className="space-y-2">
                {/* Applications */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-white/80">
                        <Settings size={10} className="mr-1 text-primary-400" />
                        <span>APPLICATIONS</span>
                    </div>
                    <div className="text-xs text-white font-mono">{applications}</div>
                </div>

                {/* Compatibility */}
                <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                        <div className="flex items-center text-white/80">
                            <Shield size={10} className="mr-1 text-primary-400" />
                            <span>COMPATIBILITY</span>
                        </div>
                        <span className="text-white font-mono">{compatibility}%</span>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary-500 rounded-full"
                            style={{ width: `${compatibility}%` }}
                        ></div>
                    </div>
                </div>

                {/* Material Types */}
                <div className="pt-2">
                    <div className="text-xs text-white/80 mb-1.5 flex items-center">
                        <Layers size={10} className="mr-1 text-primary-400" />
                        <span>MATERIAL TYPES</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {materialTypes.map((material, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 text-white/90 text-xs px-2 py-0.5 rounded-sm border border-white/10"
                            >
                                {material}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action button */}
            <div className="pt-4 text-center">
                <span className="text-primary-400 hover:text-primary-300 inline-flex items-center text-xs border-b border-primary-700/50 pb-0.5 tracking-wider font-mono">
                    ACCESS SPECS
                    <ArrowRight size={12} className="ml-1" />
                </span>
            </div>
        </div>
    </div>

    <Link href={url} className="absolute inset-0 z-30" aria-label={`Learn more about ${name}`}></Link>

    {/* Technical status indicator */}
    <div className="absolute bottom-3 left-3 z-20 flex items-center text-xs text-white/70 font-mono">
        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-1.5 animate-pulse"></div>
        <span>ACTIVE</span>
    </div>
</div>
  )
}

export default IndustryCard
