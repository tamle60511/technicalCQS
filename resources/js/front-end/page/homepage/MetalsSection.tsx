import { Link } from '@inertiajs/react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Terminal,
  Database,
  Filter,
  AlertCircle,
  Layers,
  Search,
  BarChart2,
  Shield,
  Zap,
  Clock,
  Cpu,
  ArrowRight,
  Gauge,
  Info,
  FileText
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Define TypeScript interfaces
interface Product {
    name: string;
    description: string;
    image: string;
    category?: string;
    applications?: string;
    material?: string;
    weight?: string;
    techCode?: string;
    precision?: string;
    compatibility?: number;
    strength?: number;
}

interface ProductsSectionProps {
    products?: Product[];
}

interface ProductCardProps extends Product {
    index: number;
    isLoaded: boolean;
}

export default function ProductsSection({ products }: ProductsSectionProps) {
    // Default products data if not provided via props
    const defaultProducts: Product[] = [
        {
            name: 'AL. Wheel',
            description: 'Precision-engineered aluminum wheels with superior strength-to-weight ratio',
            image: '/images/Material-1.jpg',
            category: 'Automotive',
            applications: 'Cars, SUVs, Motorcycles',
            material: 'A356/ADC12',
            weight: '30% Lighter',
            techCode: 'AW-356-11',
            precision: '±0.05mm',
            compatibility: 95,
            strength: 88
        },
        {
            name: 'Light-Weight Products',
            description: 'Ultra-lightweight aluminum components reducing vehicle weight and emissions',
            image: '/images/Material-2.jpg',
            category: 'Automotive',
            applications: 'EV Battery Housing, Structural Components',
            material: 'A380/ADC12',
            weight: '40% Lighter',
            techCode: 'LW-380-23',
            precision: '±0.02mm',
            compatibility: 92,
            strength: 85
        },
        {
            name: 'Green Energy Products',
            description: 'Sustainable aluminum solutions for renewable energy applications',
            image: '/images/Material-3.jpg',
            category: 'Energy',
            applications: 'Solar Mounting, Wind Turbine Components',
            material: 'A383/A380',
            weight: '25% Energy Efficient',
            techCode: 'GE-383-17',
            precision: '±0.08mm',
            compatibility: 90,
            strength: 92
        },
        {
            name: 'Agricultural Products',
            description: 'Durable aluminum components for agricultural machinery and equipment',
            image: '/images/Material-1.jpg',
            category: 'Agriculture',
            applications: 'Irrigation Systems, Equipment Parts',
            material: 'ADC12/A356',
            weight: '35% More Durable',
            techCode: 'AG-356-09',
            precision: '±0.1mm',
            compatibility: 88,
            strength: 94
        },
    ];

    // Use provided products or default if not available
    const productItems: Product[] = products || defaultProducts;

    // State management
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [visibleCardCount, setVisibleCardCount] = useState(3);
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeProductIndex, setActiveProductIndex] = useState(0);
    const [isScanning, setIsScanning] = useState(true);

    // Current year for technical reference codes
    const currentYear = new Date().getFullYear();

    // Handle responsive card count
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setVisibleCardCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCardCount(2);
            } else {
                setVisibleCardCount(3);
            }
        }

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsLoaded(true);

        // Animation timer
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 500);

        // Scanning animation timing
        const scanInterval = setInterval(() => {
            setIsScanning(prev => !prev);
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearInterval(scanInterval);
        };
    }, [activeSlide]);

    // Create visible items array based on current screen size
    const visibleProducts = () => {
        const result = [];
        for (let i = 0; i < visibleCardCount; i++) {
            const index = (activeSlide + i) % productItems.length;
            result.push({ ...productItems[index], index });
        }
        return result;
    };

    // Calculate maximum active slide index
    const maxSlideIndex = Math.max(0, productItems.length - visibleCardCount);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActiveSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActiveSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
        }
    };

    // Set active product when slide changes
    useEffect(() => {
        setActiveProductIndex(activeSlide);
    }, [activeSlide]);

    return (
        <section className="relative bg-neutral-900 py-16 md:py-20 text-white overflow-hidden">
            {/* Technical background patterns */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px]"></div>

            {/* Horizontal scanning line */}
            <div className={`absolute left-0 right-0 h-px bg-primary-400/40 pointer-events-none transition-all duration-1000 ease-in-out ${isScanning ? 'top-0' : 'top-full'}`}></div>

            {/* Technical corner accents */}
            <div className="absolute top-0 left-0 w-40 h-40 border-t border-l border-primary-600/20 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 border-b border-r border-primary-600/20 opacity-60"></div>

            {/* Technical measurement lines */}
            <div className="absolute top-0 left-10 bottom-0 w-0.5 flex flex-col opacity-30 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex-1 border-b border-primary-600/30 relative">
                        {i % 2 === 0 && (
                            <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-primary-600/50"></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column - Technical Dashboard */}
                    <div className="lg:col-span-4">
                        <div className="border-primary-600 mb-6 inline-flex items-center rounded-sm border-l-2 bg-neutral-800/90 px-4 py-2">
                            <span className="text-sm font-medium tracking-wider uppercase">Product Categories</span>
                        </div>

                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                            Precision <span className="text-primary-500">Die-Cast</span> Solutions for Every Industry
                        </h2>

                        <div className="mb-6 h-0.5 w-16 bg-neutral-700"></div>

                        <p className="mb-8 leading-relaxed text-neutral-300">
                            CQS specializes in premium aluminum die-casting solutions with applications across automotive, energy, and agricultural
                            sectors. Our IATF 16949 certified facilities deliver precision-engineered components that combine lightweight properties
                            with exceptional durability and dimensional accuracy of ±0.05mm.
                        </p>

                        <div className="mb-8 grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center">
                                <div className="bg-primary-500 mr-2 h-2 w-2"></div>
                                <span className="text-neutral-300">Automotive Components</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-primary-500 mr-2 h-2 w-2"></div>
                                <span className="text-neutral-300">EV Battery Housings</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-primary-500 mr-2 h-2 w-2"></div>
                                <span className="text-neutral-300">Green Energy Solutions</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-primary-500 mr-2 h-2 w-2"></div>
                                <span className="text-neutral-300">Agricultural Equipment</span>
                            </div>
                        </div>

                        <Link
                            href="/products"
                            className="from-primary-600 to-primary-700 border-primary-700 hover:from-primary-700 hover:to-primary-800 hover:shadow-primary-900/30 group inline-flex items-center justify-center rounded-sm border bg-gradient-to-r px-6 py-3 font-medium tracking-wide text-white shadow-lg transition-all"
                        >
                            Explore All Products
                            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Right Column - Technical Product Slider */}
                    <div className="lg:col-span-8">
                        {/* Technical dashboard header */}
                        <div className={`bg-neutral-800 border-b border-neutral-700 p-4 flex justify-between items-center rounded-t-sm transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="flex items-center">
                                <Layers size={16} className="text-primary-500 mr-2" />
                                <h3 className="font-medium text-white">Product Database</h3>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-xs font-mono flex items-center text-neutral-400">
                                    <Clock size={12} className="mr-1" />
                                    <span>UPD: {new Date().toISOString().split('T')[0]}</span>
                                </div>
                                <div className="text-xs font-mono bg-neutral-900 px-2 py-0.5 rounded-sm text-neutral-300 border border-neutral-700">
                                    VIEW: {visibleCardCount}/{productItems.length}
                                </div>
                            </div>
                        </div>

                        {/* Products Slider in technical dashboard */}
                        <div className={`bg-neutral-800/90 border-l border-r border-neutral-700 p-4 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="relative overflow-hidden">
                                <div
                                    className={`grid grid-cols-1 md:grid-cols-${Math.min(visibleCardCount, 2)} lg:grid-cols-${visibleCardCount} gap-4 transition-transform duration-500 ease-in-out`}
                                >
                                    {visibleProducts().map((product, idx) => (
                                        <ProductCard
                                            key={`${product.name}-${idx}`}
                                            {...product}
                                            isLoaded={isLoaded}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Technical dashboard footer with controls */}
                        <div className={`bg-neutral-800 border-t border-b border-l border-r border-neutral-700 p-4 rounded-b-sm flex flex-col sm:flex-row justify-between items-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Slider Controls */}
                            <div className="flex space-x-2 mb-3 sm:mb-0">
                                <button
                                    onClick={prevSlide}
                                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-700 bg-neutral-900 transition-colors hover:bg-neutral-700 hover:border-primary-500 disabled:opacity-50"
                                    disabled={isAnimating}
                                    aria-label="Previous product"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-700 bg-neutral-900 transition-colors hover:bg-neutral-700 hover:border-primary-500 disabled:opacity-50"
                                    disabled={isAnimating}
                                    aria-label="Next product"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>

                            {/* Technical Dots Indicator */}
                            <div className="flex items-center space-x-1">
                                <div className="text-xs font-mono text-neutral-500 mr-2">INDEX:</div>
                                {productItems.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            if (!isAnimating) {
                                                setIsAnimating(true);
                                                setActiveSlide(idx);
                                            }
                                        }}
                                        className={`h-2 rounded-sm transition-all ${
                                            idx === activeSlide
                                                ? 'bg-primary-500 w-8'
                                                : 'bg-neutral-700 hover:bg-neutral-600 w-2'
                                        }`}
                                        aria-label={`Go to product ${idx + 1}`}
                                    />
                                ))}
                                <div className="text-xs font-mono text-neutral-500 ml-2">{activeSlide + 1}/{productItems.length}</div>
                            </div>

                            {/* Technical status */}
                            <div className="hidden sm:flex items-center text-xs font-mono text-neutral-400">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></div>
                                <span>DATABASE ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

// Sub-component for individual product cards
function ProductCard({
    name,
    description,
    image,
    category,
    applications,
    material,
    weight,
    techCode,
    precision,
    compatibility = 85,
    strength = 80,
    index,
    isLoaded
}: ProductCardProps) {
    return (
        <div
            className={`border border-neutral-700 bg-neutral-900 transition-all duration-500 group hover:border-primary-500 relative overflow-hidden ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
                transitionDelay: `${index * 150}ms`
            }}
        >
            {/* Technical corner elements */}
            <div className="absolute top-0 left-0 z-20 h-3 w-3 border-t border-l border-white/30"></div>
            <div className="absolute right-0 bottom-0 z-20 h-3 w-3 border-r border-b border-white/30"></div>

            <div className="relative">
                {/* Technical status indicator */}
                <div className="absolute top-3 right-3 z-30 text-xs font-mono bg-black/60 backdrop-blur-sm px-2 py-0.5 text-white/80 border border-neutral-700 rounded-sm flex items-center">
                    <AlertCircle size={10} className="mr-1 text-primary-400" />
                    {category}
                </div>

                {/* Technical code */}
                <div className="absolute top-3 left-3 z-30 font-mono text-xs text-white/60">
                    CQS-{techCode || `${(index + 1).toString().padStart(2, '0')}`}
                </div>

                <div className="h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />



                    {/* Technical overlay patterns */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-neutral-900/40"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>

                    {/* Product name badge */}
                    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-3">
                        <div className="flex items-center">
                            <div className="bg-primary-500 mr-2 h-5 w-1"></div>
                            <h3 className="font-bold tracking-wide text-white">{name}</h3>
                        </div>
                        <div className="text-xs font-mono bg-black/60 backdrop-blur-sm px-1.5 py-0.5 text-white/70 border-r border-primary-500/50">
                            <Gauge size={10} className="inline mr-1 text-primary-400" />
                            {precision}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-neutral-800/90">
                <p className="text-sm text-neutral-300 mb-3 line-clamp-2">{description}</p>

                {/* Technical specifications */}
                <div className="border-t border-neutral-700/70 pt-3 mt-3 grid grid-cols-1 gap-2">
                    <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center text-neutral-400">
                            <Cpu size={12} className="mr-1 text-primary-400" />
                            <span>MATERIAL</span>
                        </div>
                        <span className="text-white font-mono">{material}</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center text-neutral-400">
                            <BarChart2 size={12} className="mr-1 text-amber-400" />
                            <span>APPLICATIONS</span>
                        </div>
                        <span className="text-white/90 italic truncate max-w-[60%] text-right">{applications}</span>
                    </div>

                    <div className="flex justify-between items-center text-xs pt-1">
                        <Link
                            href={`/products/${name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-primary-500 hover:text-primary-400 inline-flex items-center font-medium"
                        >
                            <FileText size={12} className="mr-1" />
                            Technical Specs
                            <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>

                        <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1"></div>
                            <span className="text-neutral-400">IN STOCK</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
