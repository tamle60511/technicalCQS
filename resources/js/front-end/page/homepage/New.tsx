import React, { useState, useEffect } from 'react';
import {
  Newspaper, ChevronRight, Rss, Grid, ExternalLink,
  Factory, Wrench, FileText, Calendar, Flag,
  Lock, Award, Recycle, Terminal, Database,
  Clock, Shield, AlertCircle, Search, Filter,
  BarChart2, Zap, ArrowRight, Eye, Bookmark,
  Bell, RefreshCw, Share2, Copy, Info
} from 'lucide-react';

interface NewsProps {
  className?: string;
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
  featured?: boolean;
  views?: number;
  code?: string;
  status?: 'new' | 'updated' | 'archived';
  author?: string;
}

const News: React.FC<NewsProps> = ({ className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Current year for technical reference codes
  const currentYear = new Date().getFullYear();

  // Sample news data
  const newsItems: NewsItem[] = [
    {
      id: 'news-001',
      title: 'CQS Expands High Pressure Die Casting Capacity with New 1,650 Ton Machine',
      summary: 'CQS has expanded its manufacturing capabilities with the installation of a new 1,650 ton high-pressure die casting machine, increasing production capacity by 30% for large automotive structural components. This investment strengthens our position as a leading supplier to global automotive markets.',
      date: '2024-05-15',
      image: '/images/Material-3.jpg',
      category: 'facility',
      featured: true,
      views: 458,
      code: 'CQS-NEWS-2024-05',
      status: 'new',
      author: 'Technical Team'
    },
    {
      id: 'news-002',
      title: 'CQS Achieves 93% Aluminum Recycling Rate, Leading Sustainability Efforts',
      summary: 'Our sustainability initiatives have resulted in a record 93% aluminum recycling rate, significantly reducing our carbon footprint while maintaining high-quality standards...',
      date: '2024-05-02',
      image: '/images/Advanced.jpg',
      category: 'sustainability',
      views: 342,
      code: 'CQS-NEWS-2024-04',
      status: 'updated',
      author: 'Sustainability Department'
    },
    {
      id: 'news-003',
      title: 'CQS Renews IATF 16949 Certification for Automotive Quality Excellence',
      summary: 'Our Vietnam manufacturing facility has successfully renewed its IATF 16949 certification, confirming our commitment to the highest quality standards in automotive component production...',
      date: '2024-04-18',
      image: '/images/Aluminum.jpg',
      category: 'certification',
      views: 289,
      code: 'CQS-NEWS-2024-03',
      author: 'Quality Team'
    },
    {
      id: 'news-004',
      title: 'CQS Expands Distribution Network to Mexico and Southeast Asia',
      summary: 'In response to growing demand, CQS has strengthened its global distribution capabilities, opening new logistics channels in Mexico and expanding our presence in Southeast Asia...',
      date: '2024-03-25',
      image: '/images/cnc.jpg',
      category: 'business',
      views: 315,
      code: 'CQS-NEWS-2024-02',
      author: 'Logistics Department'
    },
    {
      id: 'news-005',
      title: 'CQS Showcases New Lightweight Components at Vietnam AutoExpo 2024',
      summary: 'CQS exhibited our latest aluminum die-cast automotive and motorcycle components at Vietnam AutoExpo 2024, featuring our innovative gravity die casting technology and lightweight designs...',
      date: '2024-03-12',
      image: '/images/Material-2.jpg',
      category: 'events',
      views: 267,
      code: 'CQS-NEWS-2024-01',
      author: 'Marketing Team'
    }
  ];

  // Category data with technical metadata
  const categories = [
    { id: 'all', name: 'All Updates', icon: Grid, count: newsItems.length },
    { id: 'facility', name: 'Facility Expansion', icon: Factory, count: newsItems.filter(item => item.category === 'facility').length },
    { id: 'sustainability', name: 'Sustainability', icon: Recycle, count: newsItems.filter(item => item.category === 'sustainability').length },
    { id: 'certification', name: 'Certifications', icon: Award, count: newsItems.filter(item => item.category === 'certification').length },
    { id: 'business', name: 'Business Updates', icon: BarChart2, count: newsItems.filter(item => item.category === 'business').length },
    { id: 'events', name: 'Events', icon: Calendar, count: newsItems.filter(item => item.category === 'events').length }
  ];

  // Recent updates data
  const recentUpdates = [
    { title: 'CQS expands CNC capacity with 5 new high-precision machines', date: '05-20', category: 'facility' },
    { title: 'New aluminum EV battery housing components enter production', date: '04-28', category: 'business' },
    { title: 'CQS reaches 5 million parts milestone for key automotive client', date: '04-15', category: 'business' }
  ];

  // Sustainability news
  const sustainabilityNews = [
    { title: 'CQS implements advanced aluminum recycling system at Vietnam facility', date: '05-10', category: 'sustainability' },
    { title: 'Energy-efficient die casting processes reduce carbon footprint by 18%', date: '04-20', category: 'sustainability' },
    { title: 'Solar panel installation completed at CQS headquarters', date: '03-28', category: 'sustainability' }
  ];

  // Technical resources
  const technicalResources = [
    { title: 'Comparing HPDC vs. GDC technologies for automotive applications', date: '05-17', category: 'technical' },
    { title: 'Optimal process parameters for ADC12 aluminum alloy die casting', date: '05-03', category: 'technical' },
    { title: 'Advanced surface treatments for aluminum motorcycle components', date: '04-22', category: 'technical' }
  ];

  // Filter news based on category and search
  const filteredNews = newsItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured news
  const featuredNews = newsItems.find(item => item.featured);

  // Animation setup
  useEffect(() => {
    setIsLoaded(true);




  }, []);

  return (
    <section id="news-center" className="py-16 md:py-20 bg-neutral-100 relative overflow-hidden">
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,transparent_49px,#222_50px,#222_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#222_50px,#222_51px,transparent_51px)] [background-size:50px_50px]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t border-l border-primary-600/20 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b border-r border-primary-600/20 opacity-60"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Technical title header */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <div className="inline-flex items-center mb-3 bg-neutral-900/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-neutral-800/10 relative">
              <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary-500/50"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary-500/50"></div>
              <Terminal className="mr-2 text-primary-600" size={16} />
              <p className="text-neutral-700 font-mono text-sm tracking-wider">
                <span className="text-primary-600">SYS:</span> CQS.NEWS.DATABASE.{currentYear}
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight flex items-center">
              <div className="w-1.5 h-8 bg-primary-600 mr-3"></div>
              <span>Die Casting <span className="text-primary-600">Innovation</span> & Updates</span>
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 text-xs text-neutral-500 font-mono flex items-center bg-white px-2 py-1 rounded-sm border border-neutral-200">
            <RefreshCw size={12} className="mr-1 text-primary-500" />
            <span>LAST UPDATE: {new Date().toISOString().split('T')[0]}</span>
          </div>
        </div>

        {/* Technical search and filter */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search news and updates..."
              className="w-full bg-white border border-neutral-200 py-2.5 pl-10 pr-4 rounded-sm text-neutral-800 placeholder-neutral-500 focus:border-primary-500 focus:outline-none transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="px-5 py-2.5 bg-neutral-800 text-white border border-neutral-700
                      hover:bg-primary-600 hover:border-primary-700 font-medium transition-all
                      flex items-center"
            >
              <Rss size={16} className="mr-2" />
              <span>Subscribe</span>
            </a>
            <a
              href="/news"
              className="px-5 py-2.5 bg-transparent text-neutral-800 border border-neutral-300
                       hover:border-primary-600 hover:text-primary-600 font-medium transition-all
                       flex items-center"
            >
              <Grid size={16} className="mr-2" />
              <span>Archive</span>
            </a>
          </div>
        </div>

        {/* Category tabs */}
        <div className={`flex overflow-x-auto pb-3 mb-8 scrollbar-hide transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2.5 mr-2 whitespace-nowrap border ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
              } transition-all duration-200 rounded-sm`}
            >
              <category.icon size={14} className="mr-2" />
              <span>{category.name}</span>
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-sm ${
                activeCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-neutral-100'
              }`}>{category.count}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Featured News (5 columns) */}
          <div className="lg:col-span-5">
            {featuredNews && (
              <div className={`bg-white rounded-sm shadow-md border border-neutral-200 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                {/* Dashboard header */}
                <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <Newspaper size={18} className="text-primary-600 mr-2" />
                    <h3 className="font-medium text-neutral-800">Featured Announcement</h3>
                  </div>
                  <div className="text-xs font-mono bg-primary-50 px-2 py-0.5 rounded-sm text-primary-700 border border-primary-200 flex items-center">
                    <Flag size={12} className="mr-1.5" />
                    <span>FEATURED</span>
                  </div>
                </div>

                <div className="relative h-56 overflow-hidden">
                  {/* Technical reference badge */}
                  <div className="absolute top-3 left-3 font-mono text-xs text-white bg-neutral-900/80
                                backdrop-blur-sm px-2 py-1 z-10 border-l border-primary-600">
                    {featuredNews.code}
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 right-3 font-mono text-xs px-2 py-1 z-10 flex items-center
                                bg-primary-500/90 text-white">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></div>
                    NEW
                  </div>

                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />



                  {/* Technical overlay patterns */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>

                  {/* Technical corners */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary-600 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary-600 z-10"></div>

                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center text-neutral-100 text-xs">
                      <Calendar size={12} className="mr-1.5" />
                      <span>{featuredNews.date}</span>
                    </div>
                    <div className="flex items-center text-neutral-100 text-xs space-x-2">
                      <div className="flex items-center">
                        <Eye size={12} className="mr-1" />
                        <span>{featuredNews.views}</span>
                      </div>
                      <div className="flex items-center">
                        <Bookmark size={12} className="mr-1" />
                        <span>Save</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 hover:text-primary-600 transition-colors">
                    <a href="#">{featuredNews.title}</a>
                  </h3>

                  <div className="h-0.5 w-20 bg-neutral-200 mb-3"></div>

                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {featuredNews.summary}
                  </p>

                  <div className="flex items-center justify-between pt-2 mt-4 border-t border-dashed border-neutral-200">
                    <div className="text-xs text-neutral-500 font-mono flex items-center">
                      <Clock size={12} className="mr-1" />
                      <span>PUBLISHED BY: {featuredNews.author}</span>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      <span>Read full announcement</span>
                      <ArrowRight size={14} className="ml-1.5" />
                    </a>
                  </div>
                </div>

                {/* Technical dashboard footer */}
                <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
                  <span>REF: {featuredNews.code}</span>
                  <div className="flex items-center">
                    <Share2 size={12} className="mr-1.5 text-neutral-600" />
                    <span>SHARE</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - News Grid (7 columns) */}
          <div className="lg:col-span-7">
            {/* News grid header */}
            <div className={`bg-white rounded-t-sm border-t border-l border-r border-neutral-200 p-4 flex items-center justify-between mb-0 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center">
                <Database size={18} className="text-primary-600 mr-2" />
                <h3 className="font-medium text-neutral-800">News Database</h3>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                  <Filter size={12} className="inline mr-1" />
                  {activeCategory === 'all' ? 'ALL CATEGORIES' : categories.find(c => c.id === activeCategory)?.name.toUpperCase()}
                </div>
                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                  RESULTS: {filteredNews.length}
                </div>
              </div>
            </div>

            {/* News grid content */}
            <div className={`bg-white rounded-b-sm border-b border-l border-r border-neutral-200 p-4 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredNews.filter(item => !item.featured).map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-white border border-neutral-200 hover:border-primary-300 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex p-4">
                      <div className="flex-shrink-0 mr-4 relative w-20 h-20">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        {/* Status indicator */}
                        {item.status && (
                          <div className={`absolute top-0 right-0 w-2 h-2 rounded-full ${
                            item.status === 'new' ? 'bg-emerald-500' :
                            item.status === 'updated' ? 'bg-amber-500' : 'bg-neutral-500'
                          }`}></div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="text-xs text-neutral-500 font-mono">
                            {item.date}
                          </div>
                          <div className="ml-2 text-xs px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 rounded-sm">
                            {categories.find(c => c.id === item.category)?.name}
                          </div>
                        </div>

                        <h3 className="text-sm font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                          <a href="#">{item.title}</a>
                        </h3>

                        <p className="text-neutral-600 text-xs line-clamp-2">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    {/* Technical reference id */}
                    <div className="absolute bottom-1 right-1 text-[10px] font-mono text-neutral-400">
                      {item.code}
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty state */}
              {filteredNews.length === 0 && (
                <div className="py-8 text-center">
                  <AlertCircle className="mx-auto mb-2 text-neutral-400" size={24} />
                  <p className="text-neutral-600">No news found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>

            {/* News categories in grid format */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
              {/* Company Updates */}
              <div className="bg-white border border-neutral-200 shadow-sm">
                <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <Factory size={16} className="text-primary-600 mr-2" />
                    <h4 className="font-medium text-neutral-800">Company Updates</h4>
                  </div>
                  <div className="text-xs font-mono bg-neutral-100 px-1.5 py-0.5 rounded-sm text-neutral-600">
                    {recentUpdates.length}
                  </div>
                </div>

                <div className="p-4">
                  <ul className="space-y-3">
                    {recentUpdates.map((update, index) => (
                      <li key={index} className="flex items-center group">
                        <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                        <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                          {update.title}
                        </a>
                        <span className="text-xs text-neutral-500 ml-auto flex-shrink-0 font-mono">{update.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-4 py-2 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-end">
                  <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                    VIEW ALL <ArrowRight size={10} className="ml-1" />
                  </a>
                </div>
              </div>

              {/* Sustainability News */}
              <div className="bg-white border border-neutral-200 shadow-sm">
                <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <Recycle size={16} className="text-primary-600 mr-2" />
                    <h4 className="font-medium text-neutral-800">Sustainability News</h4>
                  </div>
                  <div className="text-xs font-mono bg-neutral-100 px-1.5 py-0.5 rounded-sm text-neutral-600">
                    {sustainabilityNews.length}
                  </div>
                </div>

                <div className="p-4">
                  <ul className="space-y-3">
                    {sustainabilityNews.map((news, index) => (
                      <li key={index} className="flex items-center group">
                        <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                        <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                          {news.title}
                        </a>
                        <span className="text-xs text-neutral-500 ml-auto flex-shrink-0 font-mono">{news.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-4 py-2 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-end">
                  <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                    VIEW ALL <ArrowRight size={10} className="ml-1" />
                  </a>
                </div>
              </div>

              {/* Technical Resources */}
              <div className="bg-white border border-neutral-200 shadow-sm">
                <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <Wrench size={16} className="text-primary-600 mr-2" />
                    <h4 className="font-medium text-neutral-800">Technical Resources</h4>
                  </div>
                  <div className="text-xs font-mono bg-neutral-100 px-1.5 py-0.5 rounded-sm text-neutral-600">
                    {technicalResources.length}
                  </div>
                </div>

                <div className="p-4">
                  <ul className="space-y-3">
                    {technicalResources.map((resource, index) => (
                      <li key={index} className="flex items-center group">
                        <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                        <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                          {resource.title}
                        </a>
                        <span className="text-xs text-neutral-500 ml-auto flex-shrink-0 font-mono">{resource.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-4 py-2 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-end">
                  <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                    VIEW ALL <ArrowRight size={10} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default News;
