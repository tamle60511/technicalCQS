import React from 'react';
import { Monitor, Zap, Users, GitBranch, Shield, Target, Code, Ruler } from 'lucide-react';

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
  id?: string; // Optional technical ID
  priority?: number; // Optional priority value
}

interface CoreValuesProps {
  className?: string;
  sectionTitle?: string;
  heading?: React.ReactNode;
  values?: CoreValue[];
  companyName?: string;
}

const CoreValues: React.FC<CoreValuesProps> = ({
  className = '',
  sectionTitle = 'Our Principles',
  heading = <>Core <span className="text-primary-600">Values</span></>,
  values = [
    {
      title: 'Precision Excellence',
      description: 'We hold ourselves to the highest standards of precision, ensuring every component meets exacting tolerances. Our commitment to excellence drives continuous improvement in processes, technology, and quality control.',
      icon: <Monitor className="text-primary-600" size={20} />,
      id: 'VAL-01',
      priority: 95
    },
    {
      title: 'Innovation Focus',
      description: 'We embrace innovation in materials, design, and manufacturing processes. By staying at the forefront of technological advancements, we develop solutions that anticipate future industry needs and challenges.',
      icon: <Zap className="text-primary-600" size={20} />,
      id: 'VAL-02',
      priority: 90
    },
    {
      title: 'Collaborative Success',
      description: 'We believe in fostering meaningful partnerships with customers, suppliers, and employees. Through open communication and shared goals, we create collaborative environments that lead to mutual growth and success.',
      icon: <Users className="text-primary-600" size={20} />,
      id: 'VAL-03',
      priority: 85
    }
  ],
  companyName = 'CQS'
}) => {
  // Technical patterns
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";

  // Current year for reference codes
  const currentYear = new Date().getFullYear();

  return (
    <section className={`py-16 md:py-24 bg-neutral-50 relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-5 pointer-events-none ${gridPatternClass}`}></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#ddd_50px,#ddd_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#ddd_50px,#ddd_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.3]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-12 right-12 w-24 h-24 border-t border-r border-neutral-300 hidden lg:block"></div>
      <div className="absolute bottom-12 left-12 w-24 h-24 border-b border-l border-neutral-300 hidden lg:block"></div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30 hidden md:flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-neutral-400/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-neutral-400/50"></div>
            )}
          </div>
        ))}
      </div>

      {/* Vertical technical measurement line */}
      <div className="absolute top-32 bottom-32 right-8 hidden xl:block">
        <div className="h-full w-px bg-neutral-400/20 relative">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="absolute left-0 w-2 h-px bg-neutral-400/40" style={{ top: `${i * 25}%` }}>
              <div className="absolute -right-8 -top-1.5 text-xs font-mono text-neutral-500/60">
                {`V-${i+1}`}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          {/* Technical label with enhanced styling */}
          <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
            <Ruler className="mr-2" size={14} />
            <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center relative">
            {heading}
            <div className="absolute -top-2 -right-3 text-xs text-primary-500 font-mono opacity-60">[v.2]</div>
          </h2>

          <div className="w-20 h-0.5 bg-neutral-300 mb-8 relative">
            <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
          </div>

          {/* Technical reference number */}
          <div className="text-xs text-neutral-500 font-mono flex items-center">
            <span className="mr-2">DOC</span>
            <span className="text-primary-500 mr-2">{companyName}-PRINCIPLES-{currentYear}</span>
            <div className="w-6 h-px bg-neutral-300"></div>
          </div>
        </div>

        {/* Technical index line with markers */}
        <div className="w-full h-px bg-neutral-200 mb-12 relative max-w-5xl mx-auto hidden md:block">
          <div className="absolute -top-3 left-0 text-xs font-mono text-neutral-500">VALUES.INDEX</div>
          <div className="absolute -top-3 right-0 text-xs font-mono text-neutral-500">PRIORITY.SCALE</div>
          {values.map((value, index) => (
            <div
              key={`marker-${index}`}
              className="absolute -top-1 w-0.5 h-2 bg-primary-600"
              style={{ left: `${(index + 1) * 33.33}%` }}
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-mono text-primary-600">
                {value.id || `V${index+1}`}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={`core-value-${index}`}
              className="bg-white border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Technical corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>

              {/* Technical ID badge */}
              <div className="absolute -top-3 right-4 bg-white shadow-sm text-xs font-mono text-neutral-500 px-2 py-1 border border-neutral-200 group-hover:border-primary-400 group-hover:text-primary-600 transition-colors">
                {value.id || `VALUE-${index+1}`}
              </div>

              {/* Technical priority meter */}
              <div className="absolute -top-0.5 left-5 right-5 h-1 bg-neutral-100 overflow-hidden">
                <div
                  className="h-full bg-primary-500 opacity-50 group-hover:opacity-80 transition-opacity"
                  style={{ width: `${value.priority || 80}%` }}
                ></div>
              </div>

              <div className="flex items-center mb-5 mt-2">
                <div className="w-12 h-12 bg-primary-50 border border-primary-100 flex items-center justify-center mr-4 group-hover:bg-primary-100 transition-colors rounded-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{value.title}</h3>
              </div>

              {/* Technical code label */}
              <div className="flex items-center mb-3">
                <div className="h-px flex-grow bg-neutral-200 group-hover:bg-neutral-300 transition-colors"></div>
                <div className="px-2 text-xs font-mono text-neutral-400 whitespace-nowrap">VALUE DEFINITION</div>
                <div className="h-px flex-grow bg-neutral-200 group-hover:bg-neutral-300 transition-colors"></div>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-4">
                {value.description}
              </p>

              {/* Technical specs */}
              <div className="mt-4 pt-3 border-t border-dashed border-neutral-200 flex justify-between items-center">
                <div className="text-xs font-mono text-neutral-400">
                  <span className="text-neutral-500 mr-1">PRI:</span>
                  {value.priority || 80}%
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  {value.id || `V${index+1}`}/<span className="text-primary-500">{companyName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center text-xs font-mono text-neutral-500 bg-white px-3 py-1 border border-neutral-200 rounded-sm">
            <GitBranch size={12} className="mr-1 text-primary-500" />
            <span>{companyName}.VALUES.FOUNDATION.{currentYear}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
