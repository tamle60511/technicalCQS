import React from 'react';
import { Product } from '../../types/product';
import { Search, X, BarChart2 } from 'lucide-react';

interface ProductSearchResultsProps {
  results: Product[];
  onClearSearch: () => void;
}

const ProductSearchResults: React.FC<ProductSearchResultsProps> = ({
  results,
  onClearSearch
}) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-sm mb-6 shadow-sm">
      {/* Results Header */}
      <div className="px-4 py-3 border-b border-neutral-200 flex justify-between items-center">
        <div className="flex items-center">
          <Search
            className="mr-2 text-primary-600"
            size={18}
          />
          <h3 className="text-base font-semibold text-neutral-800">
            Search Results
          </h3>
          <span className="ml-3 text-xs text-neutral-500">
            {results.length} Products Found
          </span>
        </div>
        <button
          onClick={onClearSearch}
          className="text-neutral-500 hover:text-neutral-800"
        >
          <X size={18} />
        </button>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {results.map(product => (
          <div
            key={product.id}
            className="border border-neutral-200 rounded-sm p-4 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <BarChart2
                className="text-primary-600 mr-2"
                size={20}
              />
              <span className="text-xs font-mono text-neutral-500">
                {product.technicalCode}
              </span>
            </div>

            <h4 className="text-sm font-semibold text-neutral-800 mb-2">
              {product.name}
            </h4>

            <p className="text-xs text-neutral-600 mb-3">
              {product.shortDescription}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xs text-neutral-500">
                {product.categorySlug}
              </span>
              <a
                href={`/products/detail/${product.id}`}
                className="text-xs text-primary-600 hover:underline"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearchResults;
