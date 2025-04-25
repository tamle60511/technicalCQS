import React from 'react';

interface MetadataItem {
    icon: React.ElementType;
    text: string;
    variant?: 'default' | 'system' | 'updated';
}

// Props cho component
interface TechnicalTitleProps {
    metadata?: MetadataItem;
    title: {
        span?: boolean;
        prefix?: string;
        main: string;
        highlight?: string;
        suffix?: string;
    };
    description?: string;
    showDivider?: boolean;
    className?: string;
}

const Title: React.FC<TechnicalTitleProps> = ({ metadata, title, description, showDivider = false, className = '' }) => {
    const currentYear = new Date().getFullYear();
    const renderMetadata = () => {
        if (!metadata) return null;
        const Icon = metadata.icon;
        const variantStyles = {
            default: 'bg-neutral-900/5 border-neutral-800/10',
            system: 'bg-neutral-900/5 border-neutral-800/10',
            updated: 'bg-neutral-100 border-neutral-200',
        };

        return (
            <div
                className={`relative mb-3 inline-flex items-center rounded-sm border px-4 py-2 backdrop-blur-sm ${variantStyles[metadata.variant || 'default']} `}
            >
                {/* Technical corner accents */}
                <div className="border-primary-500/50 absolute -top-1 -left-1 h-2 w-2 border-t border-l"></div>
                <div className="border-primary-500/50 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b"></div>
                <Icon className="text-primary-600 mr-2" size={16} />
                <p className="font-mono text-sm tracking-wider text-neutral-700">{metadata.text.replace('{currentYear}', currentYear.toString())}</p>
            </div>
        );
    };

    // Render title
    const renderTitle = () => {
        return (
            <h2 className="flex items-center text-3xl leading-tight font-bold mb-4 tracking-tight text-neutral-900 md:text-4xl">
                {title.span && <div className="bg-primary-600 mr-3 h-8 w-1.5"></div>}
                {title.prefix && <span className="mr-2">{title.prefix}</span>}
                <span className="flex items-center">
                    {title.main}
                    {title.highlight && <span className="text-primary-600 mx-2">{title.highlight}</span>}
                </span>
                {title.suffix && <span className="ml-2">{title.suffix}</span>}
            </h2>
        );
    };
    // Render divider
    const renderDivider = () => {
        if (!showDivider) return null;

        return (
            <div className="relative w-20 h-0.5 bg-neutral-300 mb-8">
                <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 transform border border-neutral-300"></div>
            </div>
        );
    };

    // Render description
    const renderDescription = () => {
        if (!description) return null;
        return (
            <div className="relative mb-8 max-w-3xl rounded-sm border border-neutral-200 bg-white p-4">
                {/* Technical corner accents */}
                <div className="border-primary-500/30 absolute -top-1 -left-1 h-2 w-2 border-t border-l"></div>
                <div className="border-primary-500/30 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b"></div>
                <p className="text-center leading-relaxed text-neutral-600">{description}</p>
            </div>
        );
    };

    return (
        <div className={`mb-10 ${className} `}>
            {metadata && renderMetadata()}
            {renderTitle()}
            {showDivider && renderDivider()}
            {description && renderDescription()}
        </div>
    );
};

export default Title;
