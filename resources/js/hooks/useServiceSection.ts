import { useState, useMemo } from 'react';
import { Service } from '@/front-end/types/services';
import { defaultServices } from '@/front-end/constants/services';
import { usePromo } from '@/hooks/use-promo';

export const useServiceSection = (services?: Service[]) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const { currentYear, isLoaded, isScanning } = usePromo();

  // Memoized services with fallback
  const serviceItems = useMemo(() =>
    services?.length ? services : defaultServices,
    [services]
  );

  // Memoized active icon to prevent unnecessary re-renders
  const ActiveIcon = useMemo(() =>
    serviceItems[activeServiceIndex].icon,
    [serviceItems, activeServiceIndex]
  );

  return {
    activeServiceIndex,
    setActiveServiceIndex,
    serviceItems,
    ActiveIcon,
    currentYear,
    isLoaded,
    isScanning
  };
};
