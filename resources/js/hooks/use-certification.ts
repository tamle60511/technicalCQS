
import { defaultCertification } from '@/front-end/constants/certifications';
import { useCallback, useEffect, useState } from 'react';

export const useCertificationCarousel = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isScanning, setIsScanning] = useState(true);
    const [activePage, setActivePage] = useState(0);
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Responsive items per page
    const getVisibleItems = useCallback(() => {
        if (typeof window === 'undefined') return 3;
        return window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }, []);

    // Resize handler
    useEffect(() => {
        const handleResize = () => setItemsPerPage(getVisibleItems());

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getVisibleItems]);

    // Animation and scanning effects
    useEffect(() => {
        setIsLoaded(true);
        const scanInterval = setInterval(() => setIsScanning((prev) => !prev), 5000);
        return () => clearInterval(scanInterval);
    }, []);

    // Navigation handlers with animation
    const handlePageChange = useCallback(
        (newPage: number) => {
            if (isAnimating) return;

            setIsAnimating(true);
            setActivePage(newPage);

            // Reset active detail to first item on new page
            const startIndex = newPage * itemsPerPage;
            setActiveDetailIndex(startIndex);

            setTimeout(() => setIsAnimating(false), 500);
        },
        [isAnimating, itemsPerPage],
    );

    const handlePrevious = useCallback(() => {
        const totalPages = Math.ceil(defaultCertification.length / itemsPerPage);
        const prevPage = activePage === 0 ? totalPages - 1 : activePage - 1;
        handlePageChange(prevPage);
    }, [activePage, handlePageChange, itemsPerPage]);

    const handleNext = useCallback(() => {
        const totalPages = Math.ceil(defaultCertification.length / itemsPerPage);
        const nextPage = activePage === totalPages - 1 ? 0 : activePage + 1;
        handlePageChange(nextPage);
    }, [activePage, handlePageChange, itemsPerPage]);

    return {
        isLoaded,
        isScanning,
        activePage,
        activeDetailIndex,
        isAnimating,
        itemsPerPage,
        setActiveDetailIndex,
        handlePrevious,
        handleNext,
        totalPages: Math.ceil(defaultCertification.length / itemsPerPage),
    };
};
