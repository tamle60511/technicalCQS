// components/ui/TechnicalSearchPanel.tsx
import { Search, X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { useHeaderLogic } from '../hooks/useHeaderLogic';

interface TechnicalSearchPanelProps {
    className?: string;
}

const TechnicalSearchPanel: React.FC<TechnicalSearchPanelProps> = ({ className = '' }) => {
    const { isSearchActive, toggleSearch } = useHeaderLogic();

    const searchInputRef = useRef<HTMLInputElement>(null);

    // Tự động focus vào input khi panel mở
    useEffect(() => {
        if (isSearchActive && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchActive]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý logic tìm kiếm
        const searchTerm = searchInputRef.current?.value;
        console.log('Searching:', searchTerm);
    };

    return (
        <div className={`border-t border-neutral-200 px-2 pt-1 pb-3 md:hidden ${className} `}>
            <form
                onSubmit={handleSearch}
                className={`focus-within:border-primary-500 relative flex items-center overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50 transition-all duration-300`}
            >
                {/* Technical corner accents */}
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-neutral-400/30"></div>
                <div className="absolute right-0 bottom-0 h-1.5 w-1.5 border-r border-b border-neutral-400/30"></div>

                {/* Search Input */}
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent px-3 py-2 text-sm text-neutral-800 placeholder-neutral-500 focus:outline-none"
                />

                {/* Search Button */}
                <div className="flex items-center">
                    {/* Search Button */}
                    <button type="submit" className="hover:text-primary-600 px-3 text-neutral-500 transition-colors duration-300 active:scale-95">
                        <Search size={16} />
                    </button>

                    {/* Close Search Button */}
                    <button
                        type="button"
                        onClick={toggleSearch}
                        className="hover:text-primary-600 px-3 text-neutral-500 transition-colors duration-300 active:scale-95"
                    >
                        <X size={16} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TechnicalSearchPanel;
