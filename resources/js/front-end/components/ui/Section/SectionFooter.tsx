// components/ui/TechnicalFooter.tsx
import { cva } from 'class-variance-authority';
import React from 'react';

// Variant cho màu sắc status dot
const statusDotVariants = cva('w-1.5 h-1.5 rounded-full mr-1.5', {
    variants: {
        color: {
            emerald: 'bg-emerald-500',
            red: 'bg-red-500',
            blue: 'bg-blue-500',
            yellow: 'bg-yellow-500',
            green: 'bg-green-500',
        },
    },
    defaultVariants: {
        color: 'emerald',
    },
});

// Interface cho props
interface TechnicalFooterProps {
    reference?: string;
    status?: {
        text: string;
        color?: 'emerald' | 'red' | 'blue' | 'yellow' | 'green';
    };
    className?: string;
    currentYear?: number;
}

const SectionFooter: React.FC<TechnicalFooterProps> = ({ reference, status, className = '', currentYear = new Date().getFullYear() }) => {
    const defaultReference = `CQS.SYSTEM.REFERENCE.${currentYear}`;

    return (
        <div
            className={`flex flex-col items-start justify-between border-t border-neutral-200 bg-neutral-50 px-4 py-3 font-mono text-xs text-neutral-500 sm:flex-row sm:items-center ${className} `}
        >
            {/* Reference Section */}
            <span>REF: {reference || defaultReference}</span>

            {/* Status Section */}
            {status && (
                <div className="mt-2 flex items-center sm:mt-0">
                    <div
                        className={statusDotVariants({
                            color: status.color,
                        })}
                    ></div>
                    <span>{status.text}</span>
                </div>
            )}
        </div>
    );
};

export default SectionFooter;
