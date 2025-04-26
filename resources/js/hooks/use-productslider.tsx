import { useState, useEffect, useCallback } from 'react';
import { Product } from '../front-end/types/product'; // Tách interface ra file riêng

export const useProductSlider = (products: Product[], visibleCardCount: number) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  // Tính toán max slide index
  const maxSlideIndex = Math.max(0, products.length - visibleCardCount);

  // Memoized slide navigation functions
  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
    }
  }, [isAnimating, maxSlideIndex]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
    }
  }, [isAnimating, maxSlideIndex]);

  // Xử lý animation và scanning
  useEffect(() => {
    const animationTimer = setTimeout(() => setIsAnimating(false), 500);
    const scanInterval = setInterval(() => setIsScanning((prev) => !prev), 5000);

    return () => {
      clearTimeout(animationTimer);
      clearInterval(scanInterval);
    };
  }, [activeSlide]);

  // Tạo mảng sản phẩm hiển thị
  const visibleProducts = useCallback(() => {
    return Array.from({ length: visibleCardCount }, (_, i) => {
      const index = (activeSlide + i) % products.length;
      return { ...products[index], index };
    });
  }, [activeSlide, products, visibleCardCount]);

  return {
    activeSlide,
    isAnimating,
    isScanning,
    nextSlide,
    prevSlide,
    visibleProducts,
    setActiveSlide
  };
};
