import React from 'react';
import { Link } from '@inertiajs/react';
import { ProductCategory } from '../../types/product';
import { ChevronRight } from 'lucide-react';

interface ProductCategoryCardProps {
    category: ProductCategory;
    onClick?: () => void;
    isActive?: boolean;
  }

const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({  category,
    onClick,
    isActive = false    }) => {
  return (
    <Link
      href={`/products/${category.slug}`}
      onClick={onClick}
      className={`
        cursor-pointer
        border
        rounded-sm
        p-6
        transition-all
        duration-300
        ${isActive
          ? 'border-primary-600 bg-primary-50 shadow-md'
          : 'border-neutral-200 hover:border-primary-300'
        }
      `}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-neutral-800">
            {category.name}
          </h3>
          <span className="text-xs text-neutral-500">
            {category.productCount} Products
          </span>
        </div>
        <p className="text-sm text-neutral-600 mb-4">
          {category.description}
        </p>
        <div className="flex items-center text-primary-600 hover:text-primary-700">
          <span className="mr-2">View Products</span>
          <ChevronRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCategoryCard;
