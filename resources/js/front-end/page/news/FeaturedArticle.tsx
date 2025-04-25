
import React from 'react';
import { Bookmark, Calendar, Clock, ChevronRight } from 'lucide-react';

// Interface for featured article
interface FeaturedArticle {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
  author: {
    name: string;
    title: string;
    avatarSrc: string;
  };
  url: string;
}

// Interface for mini article
interface MiniArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
}

// Interface for component props
interface FeaturedArticlesProps {
  className?: string;
  mainArticle?: FeaturedArticle;
  miniArticles?: MiniArticle[];
}

// Main Featured Article Component
const MainArticle: React.FC<{ article: FeaturedArticle }> = ({ article }) => {
  return (
    <div className="bg-white border border-neutral-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow mb-10">
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-1/2 relative">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-500 m-4 z-10"></div>
          <img src={article.imageSrc} alt={article.imageAlt} className="w-full h-full object-cover" />

          {/* Category Tag */}
          <div className="absolute top-5 right-5 px-3 py-1.5 bg-primary-600 text-white text-xs font-medium z-10 border-l border-primary-700">
            Featured Article
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
          <div className="text-xs text-neutral-500 flex items-center mb-2">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            <span>{article.date}</span>
            <span className="mx-2">|</span>
            <Clock className="w-3.5 h-3.5 mr-1.5" />
            <span>{article.readTime}</span>
          </div>

          <h3 className="text-2xl font-bold text-neutral-900 mb-3">
            {article.title}
          </h3>

          <p className="text-neutral-600 mb-4">
            {article.content}
          </p>

          <div className="flex items-center mb-5">
            <img src={article.author.avatarSrc} alt={article.author.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <div className="font-medium text-neutral-900">{article.author.name}</div>
              <div className="text-xs text-neutral-500">{article.author.title}</div>
            </div>
          </div>

          <div className="mt-auto">
            <a href={article.url} className="inline-flex items-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 group relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Read Full Article
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mini Article Component
const MiniArticleCard: React.FC<{ article: MiniArticle }> = ({ article }) => {
  return (
    <div className="bg-white border border-neutral-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex">
      {/* Image */}
      <div className="w-1/3 relative">
        <img src={article.imageSrc} alt={article.imageAlt} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="w-2/3 p-4">
        <div className="text-xs text-neutral-500 flex items-center mb-1">
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          <span>{article.date}</span>
        </div>

        <h3 className="text-lg font-bold text-neutral-900 mb-2">
          <a href={article.url} className="hover:text-primary-600 transition-colors">{article.title}</a>
        </h3>

        <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
          {article.excerpt}
        </p>

        <a href={article.url} className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center text-sm">
          Read more
          <ChevronRight className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>
    </div>
  );
};

// Sample data
const sampleMainArticle: FeaturedArticle = {
  id: 'featured-1',
  title: 'The Future of Manufacturing: Industry 4.0 and Smart Factories',
  content: 'As the manufacturing industry advances into the era of Industry 4.0, smart factories are becoming the new standard. This article explores how technologies like IoT, AI, and digital twins are transforming production processes and creating unprecedented levels of efficiency and customization.',
  date: 'October 5, 2023',
  readTime: '5 min read',
  imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  imageAlt: 'Industry 4.0',
  author: {
    name: 'Michael Johnson',
    title: 'Director of Technology',
    avatarSrc: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  url: '#'
};

const sampleMiniArticles: MiniArticle[] = [
  {
    id: 'mini-1',
    title: 'Building Resilient Supply Chains in Manufacturing',
    excerpt: 'Learn how modern manufacturers are leveraging technology to create more resilient supply chains that can withstand disruptions and adapt to changing conditions.',
    date: 'September 28, 2023',
    imageSrc: 'https://plus.unsplash.com/premium_photo-1661337152210-70d60c6c9710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Supply Chain',
    url: '#'
  },
  {
    id: 'mini-2',
    title: 'Sustainable Manufacturing: The Path Forward',
    excerpt: 'Discover how manufacturers are implementing sustainable practices that reduce environmental impact while improving operational efficiency and brand reputation.',
    date: 'September 22, 2023',
    imageSrc: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Sustainable Manufacturing',
    url: '#'
  }
];

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({
  className = "",
  mainArticle = sampleMainArticle,
  miniArticles = sampleMiniArticles
}) => {
  return (
    <section className={`py-16 bg-white relative ${className}`}>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <Bookmark className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">Highlighted Content</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              Featured <span className="text-primary-600">Articles & Insights</span>
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>

          {/* Feature Article */}
          <MainArticle article={mainArticle} />

          {/* Mini Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {miniArticles.map(article => (
              <MiniArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
