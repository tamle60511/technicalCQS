import { usePage } from '@inertiajs/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { HeaderLogicHook, HeaderState } from '../types/types';

import { navItems } from '../constants/navigation';

export const useHeaderLogic = (): HeaderLogicHook => {
    const headerRef = useRef<HTMLDivElement>(null!);
    const searchInputRef = useRef<HTMLInputElement>(null!);
    const { url } = usePage();
    const currentPath = url;
    const currentYear = new Date().getFullYear();
    const [state, setState] = useState<HeaderState>({
        isSticky: false,
        mobileMenuOpen: false,
        activeDropdown: null,
        isLoaded: false,
        scrollPercent: 0,
        isSearchActive: false,
    });

    // Toggle Functions
    const toggleMobileMenu = useCallback(() => {
        setState((prev) => ({
            ...prev,
            mobileMenuOpen: !prev.mobileMenuOpen,
            isSearchActive: prev.mobileMenuOpen ? prev.isSearchActive : false,
        }));
    }, []);

    const toggleDropdown = useCallback((href: string) => {
        setState((prev) => ({
            ...prev,
            activeDropdown: prev.activeDropdown === href ? null : href,
        }));
    }, []);

    const toggleSearch = useCallback(() => {
        setState((prev) => ({
            ...prev,
            isSearchActive: !prev.isSearchActive,
            mobileMenuOpen: prev.isSearchActive ? prev.mobileMenuOpen : false,
        }));
    }, []);

    const closeAllDropdowns = useCallback(() => {
        setState((prev) => ({
            ...prev,
            activeDropdown: null,
        }));
    }, []);

    useEffect(() => {
        setState((prev) => ({ ...prev, isLoaded: true }));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const isSticky = window.scrollY > 50;
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / docHeight) * 100;
            setState((prev) => ({
                ...prev,
                isSticky,
                scrollPercent: scrollPercentage,
            }));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setState((prev) => ({
            ...prev,
            mobileMenuOpen: false,
            activeDropdown: null,
            isSearchActive: false,
        }));
    }, [currentPath]);

    useEffect(() => {
        if (state.mobileMenuOpen) {
            disablePageScroll();
        } else {
            enablePageScroll();
        }
        return () => {
            enablePageScroll();
        };
    }, [state.mobileMenuOpen]);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (state.activeDropdown && headerRef.current && !headerRef.current.contains(event.target as Node)) {
                closeAllDropdowns();
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [state.activeDropdown, closeAllDropdowns]);

    return {
        isSticky: state.isSticky,
        mobileMenuOpen: state.mobileMenuOpen,
        activeDropdown: state.activeDropdown,
        isLoaded: state.isLoaded,
        scrollPercent: state.scrollPercent,
        isSearchActive: state.isSearchActive,
        currentPath,
        currentYear,
        headerRef,
        searchInputRef,
        toggleMobileMenu,
        toggleDropdown,
        toggleSearch,
        closeAllDropdowns,
        navItems,
    };
};
