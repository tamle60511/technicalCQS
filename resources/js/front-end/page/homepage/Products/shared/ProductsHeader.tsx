import { Clock, Layers } from 'lucide-react';
import React from 'react';

interface ProductHeaderProps {
    isLoaded: boolean;
    visibleCardCount: number;
    totalProducts: number;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ isLoaded, visibleCardCount, totalProducts }) => (
    <div
        className={`flex items-center justify-between rounded-t-sm border-b border-neutral-700 bg-neutral-800 p-4 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
    >
        <div className="flex items-center">
            <Layers size={16} className="text-primary-500 mr-2" />
            <h3 className="font-medium text-white">Product Database</h3>
        </div>
        <div className="flex items-center space-x-4">
            <div className="flex items-center font-mono text-xs text-neutral-400">
                <Clock size={12} className="mr-1" />
                <span>UPD: {new Date().toISOString().split('T')[0]}</span>
            </div>
            <div className="rounded-sm border border-neutral-700 bg-neutral-900 px-2 py-0.5 font-mono text-xs text-neutral-300">
                VIEW: {visibleCardCount}/{totalProducts}
            </div>
        </div>
    </div>
);

export default ProductHeader;
