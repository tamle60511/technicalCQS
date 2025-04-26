import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  isAnimating: boolean;
  activeSlide: number;
  totalProducts: number;
  nextSlide: () => void;
  prevSlide: () => void;
  setActiveSlide: (index: number) => void;
}

const ProductsSliderControls: React.FC<SliderControlsProps> = ({
  isAnimating,
  activeSlide,
  totalProducts,
  nextSlide,
  prevSlide,
  setActiveSlide
}) => (
  <>
    {/* Slider Controls */}
    <div className="mb-3 flex space-x-2 sm:mb-0">
      <button
        onClick={prevSlide}
        className="hover:border-primary-500 flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-700 bg-neutral-900 transition-colors hover:bg-neutral-700 disabled:opacity-50"
        disabled={isAnimating}
        aria-label="Previous product"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={nextSlide}
        className="hover:border-primary-500 flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-700 bg-neutral-900 transition-colors hover:bg-neutral-700 disabled:opacity-50"
        disabled={isAnimating}
        aria-label="Next product"
      >
        <ChevronRight size={18} />
      </button>
    </div>

    {/* Technical Dots Indicator */}
    {/* <div className="flex items-center space-x-1">
      <div className="mr-2 font-mono text-xs text-neutral-500">INDEX:</div>
      {Array.from({ length: totalProducts }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => {
            if (!isAnimating) {
              setActiveSlide(idx);
            }
          }}
          className={`h-2 rounded-sm transition-all ${
            idx === activeSlide ? 'bg-primary-500 w-8' : 'w-2 bg-neutral-700 hover:bg-neutral-600'
          }`}
          aria-label={`Go to product ${idx + 1}`}
        />
      ))}
      <div className="ml-2 font-mono text-xs text-neutral-500">
        {activeSlide + 1}/{totalProducts}
      </div>
    </div> */}
  </>
);

export default ProductsSliderControls;
