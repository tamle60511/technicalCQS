import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface ProductSearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange?: (filters: any) => void;
}

const ProductSearchBar: React.FC<ProductSearchBarProps> = ({
  onSearch,
  onFilterChange
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-sm shadow-sm">
      <form onSubmit={handleSearch} className="flex items-center p-4">
        {/* Search Input */}
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search products, technical codes, descriptions..."
            className="w-full pl-10 pr-10 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
            size={18}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <button
          type="button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`p-2 rounded-sm transition-colors mr-2 ${
            isFilterOpen
              ? 'bg-primary-50 text-primary-600'
              : 'hover:bg-neutral-100 text-neutral-600'
          }`}
        >
          <Filter size={18} />
        </button>

        {/* Search Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-primary-600 text-white rounded-sm hover:bg-primary-700 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Advanced Filters */}
      {isFilterOpen && (
        <div className="border-t border-neutral-200 p-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-xs font-medium text-neutral-600 mb-2">
                Product Category
              </label>
              <select
                className="w-full border border-neutral-300 rounded-sm px-2 py-1"
                onChange={(e) => onFilterChange?.({ category: e.target.value })}
              >
                <option value="">All Categories</option>
                <option value="al-wheel">AL. Wheel</option>
                <option value="lightweight">Light-Weight</option>
                <option value="green-energy">Green Energy</option>
                <option value="agricultural">Agricultural</option>
              </select>
            </div>

            {/* Technical Code Filter */}
            <div>
              <label className="block text-xs font-medium text-neutral-600 mb-2">
                Technical Code
              </label>
              <input
                type="text"
                placeholder="Enter technical code"
                className="w-full border border-neutral-300 rounded-sm px-2 py-1"
                onChange={(e) => onFilterChange?.({ technicalCode: e.target.value })}
              />
            </div>

            {/* Performance Metric Filter */}
            <div>
              <label className="block text-xs font-medium text-neutral-600 mb-2">
                Performance Metric
              </label>
              <select
                className="w-full border border-neutral-300 rounded-sm px-2 py-1"
                onChange={(e) => onFilterChange?.({ performanceMetric: e.target.value })}
              >
                <option value="">Select Metric</option>
                <option value="tensile-strength">Tensile Strength</option>
                <option value="weight-reduction">Weight Reduction</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearchBar;
