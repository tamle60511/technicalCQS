import { Link } from '@inertiajs/react';
import { ChevronDown, ChevronRight, Shield, Terminal } from 'lucide-react';
import { useHeaderLogic } from '../hooks/useHeaderLogic';

type Props = {};

const MobileNavigation = (props: Props) => {
    const {
        activeDropdown,
        currentPath,
        currentYear,
        navItems,
        toggleDropdown,
    } = useHeaderLogic();
    return (
        <div className="md:hidden">
            <div className="-mt-px border-t border-b border-neutral-200 bg-neutral-50">
                <div className="flex items-center justify-between px-3 py-1 font-mono text-xs text-neutral-500">
                    <div className="flex items-center">
                        <Terminal size={12} className="text-primary-600 mr-1.5" />
                        <span>NAVIGATION</span>
                    </div>
                    <div className="text-neutral-400">{navItems.length} ITEMS</div>
                </div>
            </div>

            <div className="relative space-y-1 bg-white px-2 pt-2 pb-3">
                {/* Technical grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                <div className="relative">
                    {navItems.map((item, index) => (
                        <div key={item.href} className="py-1" style={{ animationDelay: `${index * 50}ms` }}>
                            {item.hasDropdown ? (
                                <div>
                                    <button
                                        onClick={() => toggleDropdown(item.href)}
                                        className={`group relative flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-base font-medium transition-colors ${
                                            currentPath.startsWith(item.href)
                                                ? 'text-primary-600 bg-primary-50'
                                                : 'text-neutral-700 hover:bg-neutral-50'
                                        }`}
                                    >
                                        <div className="flex items-center">
                                            {item.icon && <item.icon size={16} className="mr-2" />}
                                            <span>{item.label}</span>

                                            {/* Technical reference code */}
                                            <span className="ml-2 font-mono text-[10px] text-neutral-400">{item.code}</span>
                                        </div>

                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${activeDropdown === item.href ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Technical Mobile Dropdown Items */}
                                    {activeDropdown === item.href && (
                                        <div className="mt-1 mb-2 overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
                                            <div className="border-b border-neutral-200 bg-neutral-100 px-3 py-1.5 text-xs font-medium">
                                                {item.label} Options
                                            </div>

                                            <div className="py-1">
                                                {item.dropdownItems?.map((dropdownItem, idx) => (
                                                    <Link
                                                        key={dropdownItem.href}
                                                        href={dropdownItem.href}
                                                        className={`flex items-center justify-between px-4 py-2 text-sm ${
                                                            currentPath === dropdownItem.href
                                                                ? 'text-primary-600 bg-primary-50/60'
                                                                : 'text-neutral-700 hover:bg-neutral-100'
                                                        }`}
                                                    >
                                                        <div className="flex items-center">
                                                            {dropdownItem.icon && <dropdownItem.icon size={14} className="mr-2" />}
                                                            <span>{dropdownItem.label}</span>

                                                            {/* New item badge */}
                                                            {dropdownItem.isNew && (
                                                                <span className="bg-primary-100 text-primary-700 ml-2 rounded px-1.5 py-0.5 text-[9px] font-semibold">
                                                                    NEW
                                                                </span>
                                                            )}
                                                        </div>

                                                        <ChevronRight size={14} className="text-neutral-400" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : item.isButton ? (
                                <Link
                                    href={item.href}
                                    className="bg-primary-600 hover:bg-primary-700 relative block w-full rounded-sm px-3 py-2.5 text-center font-medium text-white shadow-sm"
                                >
                                    {/* Technical button styling */}
                                    <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/30"></div>
                                    <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-white/30"></div>

                                    <div className="flex items-center justify-center">
                                        {item.icon && <item.icon size={16} className="mr-2" />}
                                        {item.label}
                                    </div>
                                </Link>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`flex items-center justify-between rounded-sm px-3 py-2.5 text-base font-medium ${
                                        currentPath === item.href ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-50'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        {item.icon && <item.icon size={16} className="mr-2" />}
                                        <span>{item.label}</span>

                                        {/* Technical reference code */}
                                        <span className="ml-2 font-mono text-[10px] text-neutral-400">{item.code}</span>
                                    </div>

                                    <ChevronRight size={14} className="text-neutral-400" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical mobile footer */}
            <div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-4 py-2">
                <div className="flex items-center font-mono text-xs text-neutral-500">
                    <Shield size={12} className="text-primary-600 mr-1.5" />
                    <span>CQS.{currentYear}</span>
                </div>
                <button className="text-primary-600 text-xs font-medium">Close Panel</button>
            </div>
        </div>
    );
};

export default MobileNavigation;
