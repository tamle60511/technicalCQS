import { Product } from '@/front-end/types/product';
import { Link } from '@inertiajs/react';
import { AlertCircle, ArrowRight, BarChart2, Cpu, FileText, Gauge } from 'lucide-react';


interface ProductCardProps extends Product {
    index: number;
    isLoaded: boolean;
}

const ProductCard = ({ name, description, image, category, applications, material, techCode, precision, index, isLoaded }: ProductCardProps) => {
    return (
        <div
            className={`group hover:border-primary-500 relative overflow-hidden border border-neutral-700 bg-neutral-900 transition-all duration-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
                transitionDelay: `${index * 150}ms`,
            }}
        >
            {/* Technical corner elements */}
            <div className="absolute top-0 left-0 z-20 h-3 w-3 border-t border-l border-white/30"></div>
            <div className="absolute right-0 bottom-0 z-20 h-3 w-3 border-r border-b border-white/30"></div>

            <div className="relative">
                {/* Technical status indicator */}
                <div className="absolute top-3 right-3 z-30 flex items-center rounded-sm border border-neutral-700 bg-black/60 px-2 py-0.5 font-mono text-xs text-white/80 backdrop-blur-sm">
                    <AlertCircle size={10} className="text-primary-400 mr-1" />
                    {category}
                </div>

                {/* Technical code */}
                <div className="absolute top-3 left-3 z-30 font-mono text-xs text-white/60">
                    CQS-{techCode || `${(index + 1).toString().padStart(2, '0')}`}
                </div>

                <div className="h-48 overflow-hidden">
                    <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    {/* Technical overlay patterns */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-neutral-900/40"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>

                    {/* Product name badge */}
                    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-3">
                        <div className="flex items-center">
                            <div className="bg-primary-500 mr-2 h-5 w-1"></div>
                            <h3 className="font-bold tracking-wide text-white">{name}</h3>
                        </div>
                        <div className="border-primary-500/50 border-r bg-black/60 px-1.5 py-0.5 font-mono text-xs text-white/70 backdrop-blur-sm">
                            <Gauge size={10} className="text-primary-400 mr-1 inline" />
                            {precision}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-800/90 p-4">
                <p className="mb-3 line-clamp-2 text-sm text-neutral-300">{description}</p>

                {/* Technical specifications */}
                <div className="mt-3 grid grid-cols-1 gap-2 border-t border-neutral-700/70 pt-3">
                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-neutral-400">
                            <Cpu size={12} className="text-primary-400 mr-1" />
                            <span>MATERIAL</span>
                        </div>
                        <span className="font-mono text-white">{material}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-neutral-400">
                            <BarChart2 size={12} className="mr-1 text-amber-400" />
                            <span>APPLICATIONS</span>
                        </div>
                        <span className="max-w-[60%] truncate text-right text-white/90 italic">{applications}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs">
                        <Link
                            href={`/products/${name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-primary-500 hover:text-primary-400 inline-flex items-center font-medium"
                        >
                            <FileText size={12} className="mr-1" />
                            Technical Specs
                            <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>

                        <div className="flex items-center">
                            <div className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                            <span className="text-neutral-400">IN STOCK</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
