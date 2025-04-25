import { Link } from '@inertiajs/react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useHeaderLogic } from '../hooks/useHeaderLogic';
import SearchButton from './SearchButton';

type Props = {};

const Navigation = (props: Props) => {
    const { activeDropdown, isLoaded, currentPath, navItems, toggleDropdown } = useHeaderLogic();
    return (
        <div
            className={`hidden transition-all duration-500 md:flex md:items-center md:space-x-1 lg:space-x-2 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
        >
            {navItems.map((item, index) => (
                <div key={item.href} className="group relative" style={{ transitionDelay: `${index * 50}ms` }}>
                    {item.hasDropdown ? (
                        <>
                            <button
                                onClick={() => toggleDropdown(item.href)}
                                className={`group relative flex items-center rounded-sm px-3 py-2 font-medium transition-all ${
                                    currentPath.startsWith(item.href) || activeDropdown === item.href
                                        ? 'text-primary-600 bg-primary-50/80'
                                        : 'hover:text-primary-600 text-neutral-700 hover:bg-neutral-50'
                                }`}
                                aria-expanded={activeDropdown === item.href}
                            >
                                {/* Technical corners */}
                                <div className="border-primary-600/0 group-hover:border-primary-600/40 absolute top-0 left-0 h-1.5 w-1.5 border-t border-l transition-colors"></div>
                                <div className="border-primary-600/0 group-hover:border-primary-600/40 absolute right-0 bottom-0 h-1.5 w-1.5 border-r border-b transition-colors"></div>

                                {/* Active indicator dot */}
                                {(currentPath.startsWith(item.href) || activeDropdown === item.href) && (
                                    <div className="bg-primary-500 absolute top-0 right-0 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 transform rounded-full"></div>
                                )}

                                {/* Icon and label with tech styling */}
                                {item.icon && <item.icon size={14} className="mr-1.5" />}
                                <span>{item.label}</span>
                                <ChevronDown
                                    size={14}
                                    className={`ml-1 transition-transform duration-200 ${activeDropdown === item.href ? 'rotate-180' : ''}`}
                                />

                                {/* Technical bottom indicator for active state */}
                                <div
                                    className={`bg-primary-600 absolute bottom-0 left-0 h-0.5 transition-all ${
                                        currentPath.startsWith(item.href) || activeDropdown === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                ></div>
                            </button>

                            {/* Technical Dropdown Menu */}
                            <div
                                className={`absolute left-0 z-40 mt-1 w-60 origin-top-left overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-lg transition-all duration-200 ${
                                    activeDropdown === item.href
                                        ? 'pointer-events-auto scale-100 opacity-100'
                                        : 'pointer-events-none scale-95 opacity-0'
                                }`}
                            >
                                {/* Technical dropdown header */}
                                <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-2">
                                    <div className="flex items-center">
                                        {item.icon && <item.icon size={12} className="text-primary-600 mr-1.5" />}
                                        <h4 className="text-xs font-medium text-neutral-700">{item.label}</h4>
                                    </div>
                                    <div className="font-mono text-[10px] text-neutral-500">{item.code}</div>
                                </div>
                                {/* Technical dropdown items */}
                                <div className="max-h-[280px] overflow-y-auto py-1">
                                    {item.dropdownItems?.map((dropdownItem, idx) => (
                                        <Link
                                            key={dropdownItem.href}
                                            href={dropdownItem.href}
                                            className={`relative block px-4 py-2 text-sm transition-colors ${
                                                currentPath === dropdownItem.href
                                                    ? 'text-primary-600 bg-primary-50/60'
                                                    : 'hover:text-primary-600 text-neutral-700 hover:bg-neutral-50 hover:cursor-pointer'
                                            }`}
                                        >
                                            <div className="flex items-center">
                                                {dropdownItem.icon && (
                                                    <dropdownItem.icon
                                                        size={14}
                                                        className={`mr-2 ${
                                                            currentPath === dropdownItem.href ? 'text-primary-600' : 'text-neutral-500'
                                                        }`}
                                                    />
                                                )}
                                                <span>{dropdownItem.label}</span>

                                                {/* New item indicator */}
                                                {dropdownItem.isNew && (
                                                    <span className="bg-primary-100 text-primary-700 ml-2 rounded px-1.5 py-0.5 text-[9px] font-semibold">
                                                        NEW
                                                    </span>
                                                )}
                                            </div>

                                            {/* Technical reference code */}
                                            <div className="absolute top-1/2 right-4 -translate-y-1/2 font-mono text-[9px] text-neutral-400">
                                                {dropdownItem.code}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                {/* Technical dropdown footer */}
                                <div className="flex justify-between border-t border-neutral-200 bg-neutral-50 px-4 py-1.5 text-[10px]">
                                    <span className="font-mono text-neutral-500">{item.dropdownItems?.length} ITEMS</span>
                                    <Link href={item.href} className="text-primary-600 hover:text-primary-700 flex items-center font-medium">
                                        VIEW ALL <ChevronRight size={10} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : item.isButton ? (
                        <Link
                            href={item.href}
                            className="bg-primary-600 hover:bg-primary-700 group relative flex items-center rounded-sm px-4 py-2 font-medium text-white shadow-sm transition-colors duration-200"
                        >
                            {/* Technical button styling */}
                            <div className="from-primary-600/0 via-primary-600/0 to-primary-400/20 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/30"></div>
                            <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-white/30"></div>

                            {item.icon && <item.icon size={14} className="mr-1.5" />}
                            {item.label}
                        </Link>
                    ) : (
                        <Link
                            href={item.href}
                            className={`relative rounded-sm px-3 py-2 font-medium transition-all ${
                                currentPath === item.href
                                    ? 'text-primary-600 bg-primary-50/60'
                                    : 'hover:text-primary-600 text-neutral-700 hover:bg-neutral-50 hover:cursor-pointer'
                            }`}
                        >
                            {/* Technical corners */}
                            <div className="border-primary-600/0 group-hover:border-primary-600/40 absolute top-0 left-0 h-1.5 w-1.5 border-t border-l transition-colors"></div>
                            <div className="border-primary-600/0 group-hover:border-primary-600/40 absolute right-0 bottom-0 h-1.5 w-1.5 border-r border-b transition-colors"></div>

                            {/* Active indicator dot */}
                            {currentPath === item.href && (
                                <div className="bg-primary-500 absolute top-0 right-0 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 transform rounded-full"></div>
                            )}

                            <div className="flex items-center">
                                {item.icon && <item.icon size={14} className="mr-1.5" />}
                                <span>{item.label}</span>
                            </div>

                            {/* Technical bottom indicator for active state */}
                            <div
                                className={`bg-primary-600 absolute bottom-0 left-0 h-0.5 transition-all ${
                                    currentPath === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                            ></div>
                        </Link>
                    )}
                </div>
            ))}

            {/* Technical Search Button */}
            <SearchButton />
        </div>
    );
};

export default Navigation;
