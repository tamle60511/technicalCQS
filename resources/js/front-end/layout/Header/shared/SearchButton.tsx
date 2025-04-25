import { ChevronRight, Search, X } from 'lucide-react';
import { useHeaderLogic } from '../hooks/useHeaderLogic';

type Props = {};

const SearchButton = (props: Props) => {
    const {
        isSearchActive,
        searchInputRef,
        toggleSearch,
    } = useHeaderLogic();
    return (
        <div className="relative">
            <button
                className={`relative rounded-sm p-2 text-neutral-600 transition-all hover:cursor-pointer ${
                    isSearchActive
                        ? 'bg-primary-50 text-primary-600 border-primary-200 border'
                        : 'hover:text-primary-600 border border-neutral-200 hover:bg-neutral-50'
                }`}
                onClick={toggleSearch}
            >
                {isSearchActive ? <X size={16} /> : <Search size={16} />}
            </button>

            {/* Technical search dropdown */}
            <div
                className={`absolute right-0 mt-1 w-72 origin-top-right rounded-sm border border-neutral-200 bg-white shadow-lg transition-all duration-200 ${
                    isSearchActive ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
                }`}
            >
                <div className="p-3">
                    <div className="focus-within:border-primary-500 flex items-center overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50 transition-colors">
                        <input
                            type="text"
                            ref={searchInputRef}
                            placeholder="Search..."
                            className="w-full bg-transparent px-3 py-1.5 text-sm text-neutral-800 focus:outline-none"
                        />
                        <button className="hover:text-primary-600 px-3 text-neutral-500">
                            <Search size={14} />
                        </button>
                    </div>

                    <div className="mt-2 border-t border-neutral-200 pt-2">
                        <div className="text-xs text-neutral-500">Recent searches:</div>
                        <div className="mt-1 space-y-1">
                            <div className="flex cursor-pointer items-center justify-between px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50">
                                <span>High Pressure Die Casting</span>
                                <ChevronRight size={12} className="text-neutral-400" />
                            </div>
                            <div className="flex cursor-pointer items-center justify-between px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50">
                                <span>Aluminum Components</span>
                                <ChevronRight size={12} className="text-neutral-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end border-t border-neutral-200 bg-neutral-50 px-3 py-1.5">
                    <button className="text-primary-600 hover:text-primary-700 text-[10px]">ADVANCED SEARCH</button>
                </div>
            </div>
        </div>
    );
};

export default SearchButton;
