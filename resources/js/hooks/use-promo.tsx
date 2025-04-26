
import { useState, useEffect, useMemo } from 'react';

interface PromoScannerLogic {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  playPromoVideo: boolean;
  setPlayPromoVideo: React.Dispatch<React.SetStateAction<boolean>>;
  isLoaded: boolean;
  isScanning: boolean;
  currentYear: number;
}

export const usePromo = (): PromoScannerLogic => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playPromoVideo, setPlayPromoVideo] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    setIsLoaded(true);

    const scanInterval = setInterval(() => {
      setIsScanning((prev) => !prev);
    }, 5000);

    return () => {
      clearInterval(scanInterval);
    };
  }, []);

  return {
    activeIndex,
    setActiveIndex,
    playPromoVideo,
    setPlayPromoVideo,
    isLoaded,
    isScanning,
    currentYear
  };
};
