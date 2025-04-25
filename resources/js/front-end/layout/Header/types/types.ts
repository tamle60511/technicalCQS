// types.ts
import { LucideIcon } from 'lucide-react';
import { ElementType } from 'react';
export type IconType = LucideIcon | ElementType;
// Dropdown Item Type
export interface DropdownItem {
    label: string;
    href: string;
    icon?: IconType;
    isNew?: boolean;
    code?: string;
}

// Navigation Item Type
export interface NavItem {
    label: string;
    href: string;
    icon?: IconType;
    code?: string;
    isButton?: boolean;
    hasDropdown?: boolean;
    dropdownItems?: DropdownItem[];
  }
// Header Props Type
export interface HeaderProps {
    initialSticky?: boolean;
    className?: string;
}

// Search Component Props
export interface SearchProps {
    isSearchActive: boolean;
    toggleSearch: () => void;
    isMobile?: boolean;
}

// Dropdown Navigation Item Props
export interface DropdownNavItemProps {
    item: NavItem;
    activeDropdown: string | null;
    currentPath: string;
    toggleDropdown: (href: string) => void;
    isMobile?: boolean;
}

// Header State Type
export interface HeaderState {
    isSticky: boolean;
    mobileMenuOpen: boolean;
    activeDropdown: string | null;
    isSearchActive: boolean;
    scrollPercent: number;
    isLoaded: boolean;
}

// Utility Types
export type ToggleFunction = () => void;

// Custom Hook Return Type
export interface HeaderLogicHook {
    isSticky: boolean;
    mobileMenuOpen: boolean;
    activeDropdown: string | null;
    isSearchActive: boolean;
    scrollPercent: number;
    currentPath: string;
    currentYear: number;
    toggleMobileMenu: ToggleFunction;
    toggleDropdown: (href: string) => void;
    toggleSearch: ToggleFunction;
    headerRef: React.RefObject<HTMLDivElement>;
    searchInputRef: React.RefObject<HTMLInputElement>;
    isLoaded: boolean;
    closeAllDropdowns: () => void;
    navItems: NavItem[];
}
export function isLucideIcon(icon: IconType): icon is LucideIcon {
    return typeof icon === 'function' && 'displayName' in icon;
  }

  // Utility để chuyển đổi icon
  export function resolveIcon(Icon?: IconType) {
    if (!Icon) return undefined;

    // Nếu là LucideIcon thì trả về trực tiếp
    if (isLucideIcon(Icon)) return Icon;

    // Nếu là ElementType khác, có thể thêm logic xử lý
    return Icon;
  }
