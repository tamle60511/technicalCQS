import AppLogo from '@/components/app-logo';
import { Link } from '@inertiajs/react';
import { Menu, Search, X } from 'lucide-react';
import React, { useRef } from 'react';
import { useHeaderLogic } from './hooks/useHeaderLogic';
import TechnicalButton from './shared/MenuButtonMobile';
import MobileNavigation from './shared/MobileNavigation';
import Navigation from './shared/Navigation';
import TechnicalSearchPanel from './shared/TechnicalSearchPanel';

// Types and interfaces
export interface DropdownItem {
    label: string;
    href: string;
    isNew?: boolean;
    code?: string;
    icon?: React.ElementType;
}

export interface NavItem {
    label: string;
    href: string;
    isButton?: boolean;
    hasDropdown?: boolean;
    dropdownItems?: DropdownItem[];
    icon?: React.ElementType;
    code?: string;
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const headerHeight = useRef<number>(0);
    const {
        isSticky,
        mobileMenuOpen,
        scrollPercent,
        isSearchActive,
        currentPath,
        currentYear,
        headerRef,
        navItems,
        toggleMobileMenu,
        toggleSearch,
    } = useHeaderLogic();
    return (
        <>
            <div className="header-wrapper">
                {/* Technical spacer div - only visible when header is sticky */}
                {isSticky && <div className="header-spacer" style={{ height: `${headerHeight.current}px` }}></div>}

                {/* Technical progress bar */}
                <div className="bg-primary-600 fixed top-0 left-0 z-[60] h-0.5 transition-all" style={{ width: `${scrollPercent}%` }}></div>

                {/* Main Header with technical styling */}
                <header
                    ref={headerRef}
                    className={`z-50 w-full transition-all duration-300 ${isSticky ? 'fixed top-0 right-0 left-0 shadow-md' : 'relative'}`}
                >
                    {/* Technical pattern backgrounds */}
                    <div className="absolute inset-0 bg-white"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    {/* Technical top border with active indicator lights */}
                    <div className="relative h-[3px] overflow-hidden bg-neutral-200">
                        <div className="absolute inset-0 flex">
                            {navItems.map((item, index) => (
                                <div
                                    key={`indicator-${index}`}
                                    className={`h-full flex-1 transition-colors duration-300 ${
                                        currentPath === item.href || currentPath.startsWith(item.href) ? 'bg-primary-600' : 'bg-transparent'
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="relative border-b border-neutral-200">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between md:h-20">
                                {/* Logo area with technical frame */}
                                <div className="flex items-center">
                                    <div className="group relative">
                                        <Link href="/" className="relative flex flex-shrink-0 items-center py-2">
                                            <div className="group-hover:border-primary-500/30 absolute inset-0 border border-transparent transition-colors"></div>
                                            <div className="border-primary-500/40 absolute top-0 left-0 h-2 w-2 border-t border-l opacity-0 transition-opacity group-hover:opacity-100"></div>
                                            <div className="border-primary-500/40 absolute right-0 bottom-0 h-2 w-2 border-r border-b opacity-0 transition-opacity group-hover:opacity-100"></div>
                                            <AppLogo />

                                            {/* Technical reference indicator */}
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-[8px] text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100">
                                                CQS.{currentYear}
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Desktop Navigation - Technical Dashboard Style */}
                                <Navigation />

                                {/* Mobile menu button with technical styling */}
                                <div className="flex items-center md:hidden">
                                    <TechnicalButton
                                        icon={Menu}
                                        activeIcon={X}
                                        isActive={mobileMenuOpen}
                                        onClick={toggleMobileMenu}
                                        srTextActive="Close main menu"
                                        srTextInactive="Open main menu"
                                        className="hover:bg-neutral-100 hover:text-neutral-800"
                                        activeClassName="bg-neutral-100 text-neutral-800"
                                    />

                                    {/* Mobile search button */}
                                    <TechnicalButton
                                        icon={Search}
                                        activeIcon={X}
                                        isActive={isSearchActive}
                                        onClick={toggleSearch}
                                        srTextActive="Close search"
                                        srTextInactive="Open search"
                                        className="hover:bg-neutral-100 hover:text-neutral-800"
                                        activeClassName="bg-neutral-100 text-neutral-800"
                                    />
                                </div>
                            </div>

                            {/* Mobile search panel */}
                            {isSearchActive && (
                               <TechnicalSearchPanel
                               className="custom-search-panel-class"
                             />
                            )}
                        </div>
                    </div>

                    {/* Mobile Navigation - Technical Style */}
                    {mobileMenuOpen && <MobileNavigation />}
                </header>
            </div>

            {/* Technical overlay for mobile menu */}
            {mobileMenuOpen && (
                <div className="bg-opacity-25 fixed inset-0 z-40 bg-black backdrop-blur-sm md:hidden" onClick={toggleMobileMenu}></div>
            )}
        </>
    );
};

export default Header;
