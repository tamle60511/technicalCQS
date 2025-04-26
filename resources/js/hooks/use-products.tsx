import { useState, useEffect } from 'react';

export const useResponsiveCards = () => {
  const [visibleCardCount, setVisibleCardCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setVisibleCardCount(
        width < 768 ? 1 :
        width < 1024 ? 2 : 3
      );
    };

    // Set initial value and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return visibleCardCount;
};

// hooks/useProductSlider.ts
