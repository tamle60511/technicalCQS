import { Link } from '@inertiajs/react';
import { ArrowRight, Clock, DownloadCloud, Shield } from 'lucide-react';
import React from 'react'

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

interface ResourceCardProps extends NewsItem {
    index: number;
    isLoaded: boolean;
}
const ResourceCard = ({ type, title, image, url, icon: Icon, description, date, docId, index, isLoaded }: ResourceCardProps) => {
    return (
        <div
            className={`hover:border-primary-300 relative flex h-full flex-col overflow-hidden border border-neutral-200 bg-white transition-all duration-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
                transitionDelay: `${index * 150}ms`,
            }}
        >
            {/* Technical corner elements */}
            <div className="border-primary-500 absolute top-0 left-0 h-3 w-3 border-t border-l opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="border-primary-500 absolute right-0 bottom-0 h-3 w-3 border-r border-b opacity-0 transition-opacity group-hover:opacity-100"></div>

            <div className="relative overflow-hidden">
                {/* Technical overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>

                <img src={image} alt={title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />

                {/* Document ID badge */}
                <div className="border-primary-500 absolute top-3 right-3 flex items-center rounded-sm border-r bg-black/70 px-2 py-1 font-mono text-xs text-white backdrop-blur-sm">
                    <Shield size={10} className="text-primary-500 mr-1" />
                    {docId || `DOC-${(index + 101).toString().padStart(3, '0')}`}
                </div>

                {/* Type badge with tech styling */}
                <div className="border-primary-500 absolute top-3 left-0 z-20 flex items-center border-l-2 bg-black/70 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-sm">
                    <Icon size={12} className="text-primary-500 mr-1.5" />
                    {type}
                </div>

                {/* Technical date badge */}
                <div className="absolute bottom-3 left-3 z-20 flex items-center font-mono text-xs text-white/80">
                    <Clock size={10} className="text-primary-400 mr-1" />
                    {date || new Date().toISOString().split('T')[0]}
                </div>
            </div>

            <div className="relative flex flex-grow flex-col border-t border-neutral-200 p-4">
                {/* Technical header line */}
                <div className="from-primary-500/30 via-primary-400/10 absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r to-transparent"></div>

                <h3 className="mb-3 font-medium text-neutral-800">{title}</h3>

                <p className="mb-4 flex-grow text-sm text-neutral-600">
                    {description || 'Technical resource document with manufacturing specifications and process parameters.'}
                </p>

                <div className="flex items-center justify-between border-t border-dashed border-neutral-200 pt-2">
                    <Link
                        href={url}
                        className="text-primary-600 hover:text-primary-700 inline-flex items-center text-xs font-medium tracking-wide uppercase"
                    >
                        View Document
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>

                    <div className="flex items-center text-xs text-neutral-500 cursor-pointer hover:text-primary-700">
                        <DownloadCloud size={12} className="mr-1" />
                        <span>PDF</span>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ResourceCard
