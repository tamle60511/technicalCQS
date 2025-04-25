
import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Interface for category item
interface CategoryItem {
  id: string;
  name: string;
  href: string;
}

// Interface for component props
interface NewsSearchFilterProps {
  className?: string;
  defaultCategory?: string;
  onSearch?: (searchTerm: string) => void;
  onCategoryChange?: (categoryId: string) => void;
}

const NewsSearchFilter: React.FC<NewsSearchFilterProps> = ({
  className = "",
  defaultCategory = "all",
  onSearch,
  onCategoryChange
}) => {
  // State for search term and active category
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  // Sample categories data (could be passed as props in a real application)
  const categories: CategoryItem[] = [
    { id: "all", name: "All News", href: "#" },
    { id: "company", name: "Company", href: "#" },
    { id: "technology", name: "Technology", href: "#" },
    { id: "industry", name: "Industry", href: "#" },
    { id: "events", name: "Events", href: "#" }
  ];

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  // Handle category selection
  const handleCategoryClick = (categoryId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <section className={`py-8 bg-white border-b border-neutral-200 sticky top-0 z-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search */}
          <div className="w-full md:w-auto flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-sm transition-colors placeholder-neutral-400 bg-neutral-50"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            <div className="text-sm font-medium text-neutral-600 whitespace-nowrap">Filter by:</div>
            {categories.map(category => (
              <a
                key={category.id}
                href={category.href}
                onClick={(e) => handleCategoryClick(category.id, e)}
                className={`px-3 py-1.5 border ${
                  activeCategory === category.id
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-neutral-300 hover:border-primary-500 hover:bg-primary-50 text-neutral-600 hover:text-primary-700'
                } text-sm font-medium rounded-sm transition-colors whitespace-nowrap`}
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSearchFilter;
