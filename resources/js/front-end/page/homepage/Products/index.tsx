import { DEFAULT_PRODUCTS } from '@/front-end/constants/default-products';
import { useResponsiveCards } from '@/hooks/use-products';
import { useProductSlider } from '@/hooks/use-productslider';
import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import LeftProduct from './shared/LeftProduct';
import ProductCard from './shared/ProductCard';
import ProductHeader from './shared/ProductsHeader';
import ProductsSliderControls from './shared/ProductsSliderControls';

interface ProductsProps {
    products?: Product[];
}

export default function Products({ products }: ProductsProps) {
    const defaultProducts: Product[] = products?.length ? products : DEFAULT_PRODUCTS;
    const visibleCardCount = useResponsiveCards();
    const { activeSlide, isAnimating, isScanning, nextSlide, prevSlide, visibleProducts, setActiveSlide } = useProductSlider(
        products || defaultProducts,
        visibleCardCount,
    );

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative overflow-hidden bg-neutral-900 py-16 text-white md:py-20">
            {/* Technical background elements */}

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    <LeftProduct />

                    <div className="lg:col-span-8">
                        {/* Header */}
                        <ProductHeader
                            isLoaded={isLoaded}
                            visibleCardCount={visibleCardCount}
                            totalProducts={products?.length || defaultProducts.length}
                        />
                        {/* Slider Content */}
                        <div
                            className={`border-r border-l border-neutral-700 bg-neutral-800/90 p-4 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
                        >
                            <div className="relative overflow-hidden">
                                <div
                                    className={`grid grid-cols-1 md:grid-cols-${Math.min(visibleCardCount, 2)} lg:grid-cols-${visibleCardCount} gap-4 transition-transform duration-500 ease-in-out`}
                                >
                                    {visibleProducts().map((product, idx) => (
                                        <ProductCard key={`${product.name}-${idx}`} {...product} isLoaded={isLoaded} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Slider Controls */}
                        <div
                            className={`flex flex-col items-center justify-between rounded-b-sm border-t border-r border-b border-l border-neutral-700 bg-neutral-800 p-4 transition-all duration-1000 sm:flex-row ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
                        >
                            <ProductsSliderControls
                                isAnimating={isAnimating}
                                activeSlide={activeSlide}
                                totalProducts={products?.length || defaultProducts.length}
                                nextSlide={nextSlide}
                                prevSlide={prevSlide}
                                setActiveSlide={setActiveSlide}
                            />

                            {/* Technical status */}
                            <div className="hidden items-center font-mono text-xs text-neutral-400 sm:flex">
                                <div className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></div>
                                <span>DATABASE ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
