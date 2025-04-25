
import React from 'react';
import { Folder, Building, Cpu, Factory, Calendar } from 'lucide-react';

// Interface for a category
interface NewsCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  articleCount: number;
  link: string;
}

// Component props interface
interface NewsCategoriesSectionProps {
  className?: string;
  categories?: NewsCategory[];
}

// Category Card component
const CategoryCard: React.FC<{ category: NewsCategory }> = ({ category }) => {
  return (
    <a href={category.link} className="group">
      <div className="bg-white border border-neutral-200 hover:border-primary-300 shadow-sm hover:shadow-md transition-all p-6 text-center relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>

        <div className="w-14 h-14 bg-primary-50 border border-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
          {category.icon}
        </div>

        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">{category.title}</h3>
        <p className="text-neutral-600 text-sm mb-3">{category.description}</p>

        <div className="text-primary-600 font-medium">
          {category.articleCount} Articles
        </div>
      </div>
    </a>
  );
};

// Section Title component for reuse across sections
export const SectionTitle: React.FC<{
  icon: React.ReactNode;
  subtitle: string;
  title: React.ReactNode;
}> = ({ icon, subtitle, title }) => {
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
    </div>
  );
};

// Default categories data
const defaultCategories: NewsCategory[] = [
  {
    id: 'company',
    title: 'Company News',
    description: 'Latest updates about our company, leadership, and organizational announcements.',
    icon: <Building className="w-7 h-7 text-primary-600" />,
    articleCount: 15,
    link: '#'
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Insights on our latest technological innovations, R&D developments, and patents.',
    icon: <Cpu className="w-7 h-7 text-primary-600" />,
    articleCount: 23,
    link: '#'
  },
  {
    id: 'industry',
    title: 'Industry',
    description: 'Market trends, industry partnerships, and manufacturing ecosystem developments.',
    icon: <Factory className="w-7 h-7 text-primary-600" />,
    articleCount: 19,
    link: '#'
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Information about upcoming events, conferences, exhibitions, and webinars.',
    icon: <Calendar className="w-7 h-7 text-primary-600" />,
    articleCount: 12,
    link: '#'
  }
];

const NewsCategoriesSection: React.FC<NewsCategoriesSectionProps> = ({
  className = "",
  categories = defaultCategories
}) => {
  return (
    <section className={`py-16 bg-neutral-50 relative ${className}`}>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<Folder className="w-4 h-4 mr-2" />}
            subtitle="Browse By Topic"
            title={<>News <span className="text-primary-600">Categories</span></>}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCategoriesSection;
