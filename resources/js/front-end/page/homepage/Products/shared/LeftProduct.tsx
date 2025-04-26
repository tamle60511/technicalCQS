import { Link } from '@inertiajs/react';
import { ExternalLink } from 'lucide-react';

type Props = {};

const LeftProduct = (props: Props) => {
    return (
        <div className="lg:col-span-4">
            <div className="border-primary-600 mb-6 inline-flex items-center rounded-sm border-l-2 bg-neutral-800/90 px-4 py-2">
                <span className="text-sm font-medium tracking-wider uppercase">Product Categories</span>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Precision <span className="text-primary-500">Die-Cast</span> Solutions for Every Industry
            </h2>

            <div className="mb-6 h-0.5 w-16 bg-neutral-700"></div>

            <p className="mb-8 leading-relaxed text-neutral-300">
                CQS specializes in premium aluminum die-casting solutions with applications across automotive, energy, and agricultural sectors. Our
                IATF 16949 certified facilities deliver precision-engineered components that combine lightweight properties with exceptional
                durability and dimensional accuracy of ±0.05mm.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                    <div className="bg-primary-500 mr-2 h-2 w-2"></div>
                    <span className="text-neutral-300">Automotive Components</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-primary-500 mr-2 h-2 w-2"></div>
                    <span className="text-neutral-300">EV Battery Housings</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-primary-500 mr-2 h-2 w-2"></div>
                    <span className="text-neutral-300">Green Energy Solutions</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-primary-500 mr-2 h-2 w-2"></div>
                    <span className="text-neutral-300">Agricultural Equipment</span>
                </div>
            </div>

            <Link
                href="/products"
                className="from-primary-600 to-primary-700 border-primary-700 hover:from-primary-700 hover:to-primary-800 hover:shadow-primary-900/30 group inline-flex items-center justify-center rounded-sm border bg-gradient-to-r px-6 py-3 font-medium tracking-wide text-white shadow-lg transition-all"
            >
                Explore All Products
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    );
};

export default LeftProduct;
