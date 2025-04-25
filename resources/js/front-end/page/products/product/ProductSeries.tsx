
import React from 'react';
import { Layers, Circle, ArrowRight, CheckCircle } from 'lucide-react';

// Types and Interfaces
interface ProductFeature {
  id: string;
  text: string;
}

interface ProductSeries {
  id: string;
  title: string;
  code: string;
  description: string;
  imageSrc: string;
  badgeText: string;
  badgeColor: string;
  features: ProductFeature[];
  detailsLink: string;
}

interface FeaturedProduct {
  id: string;
  title: string;
  modelCode: string;
  description: string;
  imageSrc: string;
  features: ProductFeature[];
  specLink: string;
}

interface ProductSeriesProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  productSeries?: ProductSeries[];
  featuredProduct?: FeaturedProduct;
}

// Reusable Components
const SectionTitle: React.FC<{
  icon: React.ReactNode;
  subtitle: string;
  title: React.ReactNode;
  description?: string;
}> = ({ icon, subtitle, title, description }) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
        {icon}
        <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
      </div>

      <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
        {title}
      </h2>

      <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
        <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
      </div>

      {description && (
        <p className="text-neutral-600 max-w-3xl text-center mb-10">
          {description}
        </p>
      )}
    </div>
  );
};

const TechnicalCornerAccent: React.FC<{ position: 'top-right' | 'bottom-left' }> = ({ position }) => {
  const isTopRight = position === 'top-right';

  return (
    <div
      className={`absolute ${isTopRight ? 'top-12 right-12' : 'bottom-12 left-12'} w-24 h-24
      ${isTopRight ? 'border-t border-r' : 'border-b border-l'} border-neutral-300 hidden lg:block`}
    ></div>
  );
};

const FeatureItem: React.FC<{ feature: ProductFeature }> = ({ feature }) => {
  return (
    <div className="flex items-center text-sm text-neutral-600">
      <Circle className="w-1.5 h-1.5 mr-2 text-primary-500" />
      <span>{feature.text}</span>
    </div>
  );
};

const ProductSeriesCard: React.FC<{ series: ProductSeries }> = ({ series }) => {
  return (
    <div className="bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/30"></div>

      <div className="relative h-52 overflow-hidden">
        <img
          src={series.imageSrc}
          alt={series.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent"></div>
        <div className={`absolute top-3 right-3 ${series.badgeColor} text-white text-xs font-medium py-1 px-2`}>
          {series.badgeText}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900 mb-3 flex items-center">
          <span className="mr-2">{series.title}</span>
          <div className="text-xs py-0.5 px-2 bg-neutral-100 text-neutral-500 font-mono">{series.code}</div>
        </h3>

        <p className="text-neutral-600 mb-4">
          {series.description}
        </p>

        <div className="space-y-2 mb-4">
          {series.features.map(feature => (
            <FeatureItem key={feature.id} feature={feature} />
          ))}
        </div>

        <a href={series.detailsLink} className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium">
          View Series Details
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

const FeaturedProductHighlight: React.FC<{ product: FeaturedProduct }> = ({ product }) => {
  return (
    <div className="mt-12 bg-neutral-50 border border-neutral-200 p-6 relative">
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-400"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-400"></div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5">
          <div className="relative h-72 overflow-hidden border border-neutral-300">
            <img
              src={product.imageSrc}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-medium py-1 px-2">
              Featured Product
            </div>
          </div>
        </div>

        <div className="md:w-3/5">
          <div className="bg-white p-4 border-l-2 border-primary-500 inline-block mb-3">
            <div className="text-xs text-neutral-500 font-mono">MODEL: {product.modelCode}</div>
          </div>

          <h3 className="text-2xl font-bold text-neutral-900 mb-3">{product.title}</h3>
          <p className="text-neutral-600 mb-4">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6">
            {product.features.map(feature => (
              <div key={feature.id} className="flex items-center text-sm text-neutral-600">
                <CheckCircle className="w-4 h-4 mr-2 text-primary-600" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <a href={product.specLink} className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors inline-flex items-center">
            Product Specifications
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Default data
const defaultProductSeries: ProductSeries[] = [
  {
    id: 'series-1',
    title: 'Performance Series',
    code: 'AL-P',
    description: 'Engineered for high-performance vehicles, maximizing speed and handling through ultra-lightweight design and optimal strength characteristics.',
    imageSrc: 'https://images.unsplash.com/photo-1626664460627-214ecde4c368?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badgeText: 'High Performance',
    badgeColor: 'bg-primary-600',
    features: [
      { id: 'perf-feat-1', text: 'Flow-formed technology' },
      { id: 'perf-feat-2', text: '18" - 22" diameter options' },
      { id: 'perf-feat-3', text: 'Multi-spoke designs' }
    ],
    detailsLink: '#'
  },
  {
    id: 'series-2',
    title: 'Commercial Series',
    code: 'AL-C',
    description: 'Designed for commercial vehicles and fleets, balancing weight reduction with exceptional durability and load-bearing capacity.',
    imageSrc: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badgeText: 'Heavy Duty',
    badgeColor: 'bg-neutral-700',
    features: [
      { id: 'comm-feat-1', text: 'Reinforced rim structure' },
      { id: 'comm-feat-2', text: '16" - 19.5" diameter options' },
      { id: 'comm-feat-3', text: 'High load rating designs' }
    ],
    detailsLink: '#'
  },
  {
    id: 'series-3',
    title: 'Off-Road Series',
    code: 'AL-X',
    description: 'Specialized for off-road and rugged terrain applications, featuring reinforced construction and impact-resistant design.',
    imageSrc: 'https://images.unsplash.com/photo-1619020434123-25bd037e2551?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    badgeText: 'All-Terrain',
    badgeColor: 'bg-primary-800',
    features: [
      { id: 'off-feat-1', text: 'Impact-resistant alloy' },
      { id: 'off-feat-2', text: '17" - 24" diameter options' },
      { id: 'off-feat-3', text: 'Bead protection technology' }
    ],
    detailsLink: '#'
  }
];

const defaultFeaturedProduct: FeaturedProduct = {
  id: 'featured-1',
  title: 'AL-P Formula Edition',
  modelCode: 'AL-P-X9-FORMULA',
  description: 'Our flagship performance wheel featuring proprietary forging technology and aerospace-derived alloys. The Formula Edition delivers unmatched weight savings and structural integrity for high-demand automotive applications.',
  imageSrc: 'https://images.unsplash.com/photo-1569211063716-82ddf57f6e86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  features: [
    { id: 'feat-prod-1', text: '25% lighter than standard alloys' },
    { id: 'feat-prod-2', text: 'Exclusive 5-spoke razor design' },
    { id: 'feat-prod-3', text: 'Track-tested to 200+ mph' },
    { id: 'feat-prod-4', text: 'Available in 19", 20", and 21"' }
  ],
  specLink: '#'
};

// Main Component
const ProductSeries: React.FC<ProductSeriesProps> = ({
  title = <>Aluminum Wheel <span className="text-primary-600">Product Lines</span></>,
  subtitle = "Product Series",
  description = "Our aluminum wheel systems are organized into distinct product series, each engineered for specific applications and performance requirements.",
  productSeries = defaultProductSeries,
  featuredProduct = defaultFeaturedProduct
}) => {
  return (
    <section className="py-16 bg-white relative">
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical corner accents */}
      <TechnicalCornerAccent position="top-right" />
      <TechnicalCornerAccent position="bottom-left" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<Layers className="w-4 h-4 mr-2" />}
            subtitle={subtitle}
            title={title}
            description={description}
          />

          {/* Product Series Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productSeries.map(series => (
              <ProductSeriesCard key={series.id} series={series} />
            ))}
          </div>

          {/* Featured Product Highlight */}
          <FeaturedProductHighlight product={featuredProduct} />
        </div>
      </div>
    </section>
  );
};

export default ProductSeries;
