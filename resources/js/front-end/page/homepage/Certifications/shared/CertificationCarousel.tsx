import { Certification } from '@/front-end/types/certifications';
import { Award, ChevronLeft, ChevronRight, Clock, Database } from 'lucide-react';
import React, { useCallback } from 'react';

interface CertificationCarouselProps {
    certifications: Certification[];
    activePage: number;
    itemsPerPage: number;
    isLoaded: boolean;
    isAnimating: boolean;
    activeDetailIndex: number;
    totalPages: number;
    handlePrevious: () => void;
    handleNext: () => void;
    setActiveDetailIndex: (index: number) => void;
}

// Helper function to get status styles
const getStatusStyles = (status: Certification['status']) => {
    switch (status) {
        case 'valid':
            return {
                dotColor: 'bg-emerald-500',
                bgColor: 'bg-emerald-500/20 text-emerald-100',
                text: 'Active',
            };
        case 'pending-renewal':
            return {
                dotColor: 'bg-amber-500',
                bgColor: 'bg-amber-500/20 text-amber-100',
                text: 'Pending',
            };
        default:
            return {
                dotColor: 'bg-red-500',
                bgColor: 'bg-red-500/20 text-red-100',
                text: 'Expired',
            };
    }
};

const CertificationCarousel: React.FC<CertificationCarouselProps> = ({
    certifications,
    activePage,
    itemsPerPage,
    isLoaded,
    isAnimating,
    activeDetailIndex,
    totalPages,
    handlePrevious,
    handleNext,
    setActiveDetailIndex,
}) => {
    // Memoized render of certification card
    const renderCertificationCard = useCallback(
        (cert: Certification, absoluteIndex: number) => {
            const statusStyles = getStatusStyles(cert.status);

            return (
                <div
                    key={absoluteIndex}
                    className={`overflow-hidden border bg-white shadow-sm ${
                        absoluteIndex === activeDetailIndex
                            ? 'border-primary-300 ring-primary-200 ring-1'
                            : 'hover:border-primary-200 border-neutral-200'
                    } cursor-pointer transition-all duration-300`}
                    onClick={() => setActiveDetailIndex(absoluteIndex)}
                >
                    <div className="relative h-56 overflow-hidden">
                        {/* Technical reference and issuer info */}
                        <div className="border-primary-600 absolute top-3 left-3 z-10 border-l bg-neutral-900/80 px-2 py-1 font-mono text-xs text-white">
                            {cert.code}
                        </div>
                        <div className="absolute top-3 right-3 z-10 bg-neutral-900/80 px-2 py-1 font-mono text-xs text-white">{cert.issuer}</div>

                        <img
                            src={cert.image}
                            alt={cert.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay and technical design elements */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>

                        {/* Bottom status section */}
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
                            <span className="flex items-center text-xs text-white">
                                <Award size={12} className="mr-1" />
                                Valid: {cert.validUntil}
                            </span>

                            <div className={`flex items-center px-2 py-0.5 text-xs ${statusStyles.bgColor}`}>
                                <div className={`mr-1.5 h-1.5 w-1.5 rounded-full ${statusStyles.dotColor}`}></div>
                                {statusStyles.text}
                            </div>
                        </div>
                    </div>

                    {/* Card footer */}
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-neutral-900">{cert.name}</h3>
                            {absoluteIndex === activeDetailIndex && <div className="bg-primary-600 h-2 w-2"></div>}
                        </div>
                        <div className="mt-2 h-0.5 w-1/3 bg-neutral-200"></div>
                    </div>
                </div>
            );
        },
        [activeDetailIndex, setActiveDetailIndex],
    );

    return (
        <div className="lg:col-span-8">
            {/* Carousel Header */}
            <div
                className={`flex items-center justify-between rounded-t-sm border-t border-r border-l border-neutral-200 bg-white p-4 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
            >
                <div className="flex items-center">
                    <Database size={18} className="text-primary-600 mr-2" />
                    <h3 className="font-medium text-neutral-800">Certification Registry</h3>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-600">
                        <Clock size={12} className="mr-1 inline" />
                        UPDATED: {new Date().toISOString().split('T')[0]}
                    </div>
                    <div className="rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-600">
                        TOTAL: {certifications.length}
                    </div>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                className={`relative border-r border-l border-neutral-200 bg-white transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
            >
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-2 z-20 -translate-y-1/2 transform">
                    <button
                        onClick={handlePrevious}
                        disabled={isAnimating}
                        className="hover:bg-primary-600 flex h-10 w-10 items-center justify-center border border-neutral-700 bg-neutral-800 text-white transition-colors focus:outline-none disabled:opacity-50"
                        aria-label="Previous certifications"
                    >
                        <ChevronLeft size={20} />
                    </button>
                </div>

                <div className="absolute top-1/2 right-2 z-20 -translate-y-1/2 transform">
                    <button
                        onClick={handleNext}
                        disabled={isAnimating}
                        className="hover:bg-primary-600 flex h-10 w-10 items-center justify-center border border-neutral-700 bg-neutral-800 text-white transition-colors focus:outline-none disabled:opacity-50"
                        aria-label="Next certifications"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Carousel Content */}
                <div className="overflow-hidden p-4">
                    <div
                        className="flex gap-4 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activePage * 100}%)` }}
                    >
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <div key={pageIndex} className="grid min-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {certifications
                                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                                    .map((cert, certIndex) => renderCertificationCard(cert, pageIndex * itemsPerPage + certIndex))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Carousel Footer */}
            <div
                className={`flex items-center justify-between rounded-b-sm border-r border-b border-l border-neutral-200 bg-white p-4 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
            >
                {/* Pagination info */}
                <div className="font-mono text-xs text-neutral-500">
                    PAGE {activePage + 1} OF {totalPages}
                </div>

                {/* Page indicators */}
                <div className="flex items-center space-x-1">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveDetailIndex(index * itemsPerPage)}
                            disabled={isAnimating}
                            className={`h-1.5 rounded-sm transition-all ${
                                index === activePage ? 'bg-primary-600 w-8' : 'hover:bg-primary-400 w-4 bg-neutral-300'
                            } `}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Status indicator */}
                <div className="flex items-center font-mono text-xs text-neutral-500">
                    <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                    <span>REGISTRY ACTIVE</span>
                </div>
            </div>
        </div>
    );
};

export default CertificationCarousel;
