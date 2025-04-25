
import React from 'react';
import { Newspaper, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

// Interface for news item
interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: {
    name: string;
    type: 'primary' | 'secondary'; // primary = colored, secondary = dark
  };
  date: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
}

// Interface for component props
interface LatestNewsGridProps {
  id?: string;
  className?: string;
  newsItems?: NewsItem[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

// News Item component
const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="group bg-white border border-neutral-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow relative">
      {/* Technical frame corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>

      {/* Category Tag */}
      <div
        className={`absolute top-3 left-3 px-2 py-1 ${
          item.category.type === 'primary'
            ? 'bg-primary-600 border-primary-700'
            : 'bg-neutral-800 border-neutral-900'
        } text-white text-xs font-medium z-10 border-l`}
      >
        {item.category.name}
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent opacity-70"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
          <a href={item.url} className="hover:underline">{item.title}</a>
        </h3>

        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
          {item.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            <span>{item.date}</span>
          </div>
          <a href={item.url} className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center">
            Read more
            <ChevronRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Pagination component
const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-12 flex justify-center">
      <div className="inline-flex items-center gap-1 border border-neutral-300 rounded-sm overflow-hidden bg-white">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) onPageChange(currentPage - 1);
          }}
          className="px-3 py-2 border-r border-neutral-300 text-neutral-500 hover:bg-neutral-50 transition-colors flex items-center"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Prev
        </a>

        {[...Array(totalPages)].map((_, index) => (
          <a
            key={`page-${index + 1}`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(index + 1);
            }}
            className={`px-3 py-2 border-r border-neutral-300 ${
              currentPage === index + 1
                ? 'bg-primary-600 text-white font-medium'
                : 'text-neutral-600 hover:bg-neutral-50'
            } transition-colors`}
          >
            {index + 1}
          </a>
        ))}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) onPageChange(currentPage + 1);
          }}
          className="px-3 py-2 text-neutral-500 hover:bg-neutral-50 transition-colors flex items-center"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

// Sample news items data
const sampleNewsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'New Manufacturing Facility Expansion Completed',
    excerpt: 'Our state-of-the-art manufacturing facility expansion has been completed ahead of schedule, increasing our production capacity by 40% and creating 150 new jobs in the local community.',
    category: { name: 'Company', type: 'primary' },
    date: 'October 15, 2023',
    imageSrc: 'https://plus.unsplash.com/premium_photo-1726797731069-1bf3d41ad62f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Manufacturing Facility',
    url: '#'
  },
  {
    id: 'news-2',
    title: 'Advanced Robotic Assembly Systems Implemented',
    excerpt: 'We\'ve successfully implemented next-generation robotic assembly systems that increase precision by 30% while reducing production time. These systems feature AI-driven quality control.',
    category: { name: 'Technology', type: 'secondary' },
    date: 'October 8, 2023',
    imageSrc: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Robotic Automation',
    url: '#'
  },
  {
    id: 'news-3',
    title: 'Strategic Partnership with Global Automotive Supplier',
    excerpt: 'We\'re excited to announce a strategic partnership with a leading global automotive supplier to deliver next-generation manufacturing solutions for electric vehicle components.',
    category: { name: 'Industry', type: 'primary' },
    date: 'October 1, 2023',
    imageSrc: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Industry Partnership',
    url: '#'
  },
  {
    id: 'news-4',
    title: 'Upcoming Industry Conference Participation',
    excerpt: 'Our team will be showcasing our latest technological innovations at the upcoming International Manufacturing Tech Expo in Chicago. Visit our booth #4275 for live demonstrations.',
    category: { name: 'Events', type: 'secondary' },
    date: 'September 25, 2023',
    imageSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Industry Conference',
    url: '#'
  },
  {
    id: 'news-5',
    title: 'New Chief Technology Officer Appointed',
    excerpt: 'We\'re pleased to announce the appointment of Dr. Sarah Chen as our new Chief Technology Officer. Dr. Chen brings over 20 years of experience in manufacturing innovation and digital transformation.',
    category: { name: 'Company', type: 'primary' },
    date: 'September 18, 2023',
    imageSrc: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Executive Appointment',
    url: '#'
  },
  {
    id: 'news-6',
    title: 'New Sustainable Manufacturing Technologies Unveiled',
    excerpt: 'Our R&D team has unveiled a suite of sustainable manufacturing technologies that reduce energy consumption by 35% and material waste by 40% compared to conventional methods.',
    category: { name: 'Technology', type: 'secondary' },
    date: 'September 10, 2023',
    imageSrc: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Sustainable Manufacturing',
    url: '#'
  }
];

const LatestNewsGrid: React.FC<LatestNewsGridProps> = ({
  id = "latest-news",
  className = "",
  newsItems = sampleNewsItems,
  currentPage = 1,
  totalPages = 3,
  onPageChange = () => {}
}) => {
  return (
    <section id={id} className={`py-16 bg-neutral-50 relative ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-12 right-12 w-24 h-24 border-t border-r border-neutral-300 hidden lg:block"></div>
      <div className="absolute bottom-12 left-12 w-24 h-24 border-b border-l border-neutral-300 hidden lg:block"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <Newspaper className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">News Feed</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              Latest <span className="text-primary-600">News & Updates</span>
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default LatestNewsGrid;
