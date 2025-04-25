// components/ui/TechnicalButton.tsx
import { Link } from '@inertiajs/react';
import { ChevronRight, LucideIcon } from 'lucide-react';
import React from 'react';

// Enum cho các variant button (UPPERCASE để tránh lỗi)
export const BUTTON_VARIANT = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    OUTLINE: 'outline',
    GHOST: 'ghost',
} as const;

// Type cho variant thay vì enum
export type ButtonVariant = (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];

// Interface cho props button
interface TechnicalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    leftIcon?: LucideIcon;
    rightIcon?: LucideIcon;
    variant?: ButtonVariant;
    href?: string;
    iconClassName?: string;
    color?: string;
}

// Mapping styles cho các variant
const variantStyles: Record<
    ButtonVariant,
    {
        base: string;
        gradient: string;
        shadow: string;
    }
> = {
    [BUTTON_VARIANT.PRIMARY]: {
        base: 'bg-primary-600 border-primary-500 hover:bg-primary-700 text-white',
        gradient: 'from-primary-600/0 via-primary-600/0 to-primary-400/20',
        shadow: 'shadow-lg hover:shadow-primary-900/30',
    },
    [BUTTON_VARIANT.SECONDARY]: {
        base: 'hover:bg-primary-600 hover:border-primary-700 hover:shadow-primary-900/30 border border-neutral-900/80 bg-neutral-900  font-medium tracking-wide text-white',
        gradient: 'to-primary-400/20  bg-gradient-to-r from-neutral-900/0 via-neutral-900/0 opacity-0 transition-opacity group-hover:opacity-100',
        shadow: 'shadow-lg hover:shadow-neutral-900/30',
    },
    [BUTTON_VARIANT.OUTLINE]: {
        base: 'bg-white border-neutral-300 hover:border-primary-300 hover:text-primary-600 text-neutral-700',
        gradient: '',
        shadow: '',
    },
    [BUTTON_VARIANT.GHOST]: {
        base: 'bg-transparent border-transparent hover:bg-neutral-100 text-neutral-700',
        gradient: '',
        shadow: '',
    },
};

const Button: React.FC<TechnicalButtonProps> = ({
    children,
    leftIcon: LeftIcon,
    rightIcon: RightIcon = ChevronRight,
    variant = BUTTON_VARIANT.PRIMARY,
    href,
    iconClassName = '',
    color,
    className = '',
    ...rest
}) => {
    // Custom color override
    const customStyles = color
        ? {
              base: `bg-[${color}] border-[${color}] hover:bg-opacity-90 text-white`,
              gradient: `from-[${color}]/0 via-[${color}]/0 to-[${color}]/20`,
              shadow: `shadow-lg hover:shadow-[${color}]/30`,
          }
        : undefined;

    const styles = customStyles || variantStyles[variant];

    // Render button content
    const buttonContent = (
        <div
            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-sm border px-6 py-3 font-medium tracking-wide transition-all ${styles.base} ${styles.shadow} ${className} `}
        >
            {/* Gradient background */}
            {styles.gradient && (
                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100 ${styles.gradient} `}></div>
            )}

            {/* Left Icon */}
            {LeftIcon && <LeftIcon className={`mr-2 h-5 w-5 ${iconClassName} `} />}

            {/* Button Text */}
            <span>{children}</span>

            {/* Right Icon (default ChevronRight) */}
            {variant !== BUTTON_VARIANT.OUTLINE && RightIcon && (
                <RightIcon className={`ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 ${iconClassName} `} />
            )}
        </div>
    );

    // Render as Link or button
    return href ? (
        <Link href={href} className="no-underline">
            {buttonContent}
        </Link>
    ) : (
        <button {...rest}>{buttonContent}</button>
    );
};

export default Button;
