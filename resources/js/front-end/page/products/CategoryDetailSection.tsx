
import React from 'react';
import {
  Factory,
  Cog,
  Leaf,
  Tractor,
  LucideIcon
} from 'lucide-react';
import { PRODUCT_CATEGORY_CONTENTS } from '../../data/productCategoryContent';

interface CategoryDetailSectionProps {
  categorySlug: keyof typeof CategoryIcons;
}

const CategoryIcons = {
  'al-wheel': Factory,
  'lightweight': Cog,
  'green-energy': Leaf,
  'agricultural': Tractor
} as const;

const CategoryDetailSection: React.FC<CategoryDetailSectionProps> = ({ categorySlug }) => {
  const categoryContent = PRODUCT_CATEGORY_CONTENTS[categorySlug];
  const CategoryIcon = CategoryIcons[categorySlug];

  if (!categoryContent) return null;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Placeholder - Replace with actual image */}
        <div className="bg-neutral-100 rounded-sm h-[500px] flex items-center justify-center">
          <CategoryIcon
            size={200}
            className="text-primary-600 opacity-30"
          />
        </div>

        <div>
          <div className="flex items-center mb-6">
            <CategoryIcon
              className="mr-4 text-primary-600"
              size={36}
            />
            <h2 className="text-3xl font-bold text-neutral-800">
              {categoryContent.title}
            </h2>
          </div>

          <h3 className="text-xl font-semibold text-neutral-700 mb-4">
            {categoryContent.subtitle}
          </h3>

          <p className="text-neutral-600 mb-6">
            {categoryContent.description}
          </p>

          {categoryContent.keyPoints && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-neutral-800 mb-3">
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {categoryContent.keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center text-neutral-600"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailSection;
