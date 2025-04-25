import { LucideIcon } from 'lucide-react';
import React from 'react';


export enum SectionHeaderVariant {
    DEFAULT = 'default',
    COMPACT = 'compact',
    OUTLINED = 'outlined',
}

interface TechnicalSectionHeaderProps {
    icon: LucideIcon;
    title: string;
    code?: string;
    additionalIcon?: LucideIcon;
    className?: string;
    iconClassName?: string;
    titleClassName?: string;
    codeClassName?: string;
    variant?: SectionHeaderVariant;
}

const variantStyles = {
    [SectionHeaderVariant.DEFAULT]: {
        container: 'border-b border-neutral-200',
        background: 'bg-white',
    },
    [SectionHeaderVariant.COMPACT]: {
        container: 'border-b border-neutral-200 p-3',
        background: 'bg-neutral-50',
    },
    [SectionHeaderVariant.OUTLINED]: {
        container: 'border border-neutral-200 rounded-sm',
        background: 'bg-neutral-50',
    },
};

const SectionHeader: React.FC<TechnicalSectionHeaderProps> = ({
    icon: Icon,
    title,
    code,
    additionalIcon: IconText,
    className = '',
    iconClassName = '',
    titleClassName = '',
    codeClassName = '',
    variant = SectionHeaderVariant.DEFAULT,
}) => {
    const currentYear = React.useMemo(() => new Date().getFullYear(), []);

    const sectionCode = React.useMemo(() => code || `CQS.DEFAULT.${currentYear}`, [code, currentYear]);

    const styles = variantStyles[variant];

    return (
        <div className={`flex items-center justify-between p-5 ${styles.container} ${styles.background} ${className} `}>
            {/* Left Section */}
            <div className="flex items-center">
                <Icon size={18} className={`text-primary-600 mr-2 ${iconClassName} `} />
                <h3 className={`font-medium text-neutral-800 ${titleClassName} `}>{title}</h3>
            </div>

            {/* Right Section */}
            <div
                className={`flex items-center rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-600 ${codeClassName} `}
            >
                {/* Optional Additional Icon */}
                {IconText && <IconText size={12} className="text-primary-600 mr-2" />}
                {sectionCode}
            </div>
        </div>
    );
};

export default SectionHeader;
