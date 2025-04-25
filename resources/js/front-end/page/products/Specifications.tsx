
import React from 'react';
import { Ruler, Download } from 'lucide-react';

// Types and Interfaces
interface SpecificationRow {
  id: string;
  specification: string;
  performanceSeries: string;
  commercialSeries: string;
  offRoadSeries: string;
  isNumeric?: boolean; // For styling numeric values
}

interface MaterialComparisonItem {
  id: string;
  title: string;
  value: string;
  percentage: number;
  isAluminum: boolean;
}

interface TechnicalSpecsProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  specifications?: SpecificationRow[];
  tensileStrengthComparison?: MaterialComparisonItem[];
  weightComparison?: MaterialComparisonItem[];
  technicalDataSheetUrl?: string;
}

// Section Title Component - Similar to previous components for consistency
const SectionTitle: React.FC<{
  icon: React.ReactNode;
  subtitle: string;
  title: React.ReactNode;
  description?: string;
  isDark?: boolean;
}> = ({ icon, subtitle, title, description, isDark = false }) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
        {icon}
        <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
      </div>

      <h2 className={`text-3xl font-bold mb-4 tracking-tight text-center ${isDark ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>

      <div className={`w-20 h-0.5 mb-6 relative ${isDark ? 'bg-neutral-700' : 'bg-neutral-300'}`}>
        <div className={`absolute -top-1.5 left-1/2 w-3 h-3 border transform -translate-x-1/2 rotate-45 ${isDark ? 'border-neutral-700' : 'border-neutral-300'}`}></div>
      </div>

      {description && (
        <p className={`max-w-3xl text-center mb-10 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

// Technical Corner Accent Component - for consistent styling
const TechnicalCornerAccent: React.FC<{ position: 'top-left' | 'bottom-right' }> = ({ position }) => {
  const isTopLeft = position === 'top-left';

  return (
    <div
      className={`absolute ${isTopLeft ? 'top-0 left-0' : 'bottom-0 right-0'} w-32 h-32
      ${isTopLeft ? 'border-t-2 border-l-2' : 'border-b-2 border-r-2'} border-primary-600/30`}
    >
      <div
        className={`absolute ${isTopLeft ? 'top-4 left-4' : 'bottom-4 right-4'} w-8 h-8
        ${isTopLeft ? 'border-t border-l' : 'border-b border-r'} border-primary-600/40`}
      ></div>
    </div>
  );
};

// Specifications Table Component
const SpecificationsTable: React.FC<{ specifications: SpecificationRow[] }> = ({ specifications }) => {
  return (
    <div className="bg-neutral-800 border border-neutral-700 relative mb-10">
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-500/40"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-500/40"></div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-neutral-900/50">
              <th className="py-3 px-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider border-b border-r border-neutral-700">Specification</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider border-b border-r border-neutral-700">Performance Series (AL-P)</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider border-b border-r border-neutral-700">Commercial Series (AL-C)</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider border-b border-neutral-700">Off-Road Series (AL-X)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {specifications.map((row) => (
              <tr key={row.id}>
                <td className="py-3 px-4 text-sm border-r border-neutral-700 bg-neutral-850/30">{row.specification}</td>
                <td className={`py-3 px-4 text-sm border-r border-neutral-700 ${row.isNumeric ? 'font-mono text-primary-400' : ''}`}>
                  {row.performanceSeries}
                </td>
                <td className={`py-3 px-4 text-sm border-r border-neutral-700 ${row.isNumeric ? 'font-mono text-primary-400' : ''}`}>
                  {row.commercialSeries}
                </td>
                <td className={`py-3 px-4 text-sm ${row.isNumeric ? 'font-mono text-primary-400' : ''}`}>
                  {row.offRoadSeries}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Material Comparison Bar Component
const MaterialComparisonBar: React.FC<{
  item: MaterialComparisonItem;
}> = ({ item }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-neutral-400">{item.title}</span>
        <span className={`text-sm font-mono ${item.isAluminum ? 'text-primary-400' : 'text-neutral-400'}`}>
          {item.value}
        </span>
      </div>
      <div className="h-2 bg-neutral-700 rounded-sm overflow-hidden">
        <div
          className={`h-2 ${item.isAluminum ? 'bg-primary-500' : 'bg-neutral-500'} rounded-sm`}
          style={{ width: `${item.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

// Material Comparison Section Component
const MaterialComparison: React.FC<{
  tensileStrengthComparison: MaterialComparisonItem[];
  weightComparison: MaterialComparisonItem[];
}> = ({ tensileStrengthComparison, weightComparison }) => {
  return (
    <div className="bg-neutral-800/50 border border-neutral-700 p-6 relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/40"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/40"></div>

      <h3 className="text-xl font-bold text-white mb-4">Material Comparison: Aluminum vs Steel Wheels</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Material Strength */}
        <div className="space-y-3">
          <div className="text-primary-400 font-medium mb-2">Tensile Strength</div>
          <div className="space-y-2">
            {tensileStrengthComparison.map(item => (
              <MaterialComparisonBar key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Weight Comparison */}
        <div className="space-y-3">
          <div className="text-primary-400 font-medium mb-2">Weight (20" Wheel)</div>
          <div className="space-y-2">
            {weightComparison.map(item => (
              <MaterialComparisonBar key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Default specification data
const defaultSpecifications: SpecificationRow[] = [
  {
    id: "spec-1",
    specification: "Primary Alloy",
    performanceSeries: "6061-T6, 7075-T6",
    commercialSeries: "A356-T6",
    offRoadSeries: "A356-T6, 6082-T6",
    isNumeric: true
  },
  {
    id: "spec-2",
    specification: "Manufacturing Process",
    performanceSeries: "Forged / Flow-Formed",
    commercialSeries: "Low-Pressure Cast",
    offRoadSeries: "Forged / Gravity Cast"
  },
  {
    id: "spec-3",
    specification: "Available Diameters",
    performanceSeries: '18", 19", 20", 21", 22"',
    commercialSeries: '16", 17.5", 19.5"',
    offRoadSeries: '17", 18", 20", 22", 24"',
    isNumeric: true
  },
  {
    id: "spec-4",
    specification: "Weight Range",
    performanceSeries: "7.5 - 11.2 kg",
    commercialSeries: "12.0 - 22.5 kg",
    offRoadSeries: "14.0 - 25.0 kg",
    isNumeric: true
  },
  {
    id: "spec-5",
    specification: "Load Rating",
    performanceSeries: "650 - 850 kg",
    commercialSeries: "1,250 - 1,800 kg",
    offRoadSeries: "1,000 - 1,500 kg",
    isNumeric: true
  },
  {
    id: "spec-6",
    specification: "Finish Options",
    performanceSeries: "Polished, Painted, Machined, Brushed",
    commercialSeries: "Painted, Machined, Chrome",
    offRoadSeries: "Matte, Satin, Painted, Anodized"
  },
  {
    id: "spec-7",
    specification: "Standard Certifications",
    performanceSeries: "JWL, VIA, TÜV, SAE J2530",
    commercialSeries: "ISO, SAE J267, TÜV",
    offRoadSeries: "JWL, TÜV, SEMA",
    isNumeric: true
  },
  {
    id: "spec-8",
    specification: "Primary Applications",
    performanceSeries: "Luxury, Sports, Performance Vehicles",
    commercialSeries: "Commercial Trucks, Fleets, Vans",
    offRoadSeries: "SUVs, Trucks, Off-Road Vehicles"
  }
];

// Default tensile strength comparison data
const defaultTensileStrengthComparison: MaterialComparisonItem[] = [
  {
    id: "tensile-1",
    title: "Aluminum Alloy (6061-T6)",
    value: "310 MPa",
    percentage: 75,
    isAluminum: true
  },
  {
    id: "tensile-2",
    title: "Steel (Standard)",
    value: "410 MPa",
    percentage: 100,
    isAluminum: false
  }
];

// Default weight comparison data
const defaultWeightComparison: MaterialComparisonItem[] = [
  {
    id: "weight-1",
    title: "Aluminum Alloy Wheel",
    value: "9.5 kg",
    percentage: 60,
    isAluminum: true
  },
  {
    id: "weight-2",
    title: "Steel Wheel",
    value: "15.8 kg",
    percentage: 100,
    isAluminum: false
  }
];

// Main Component
const Specifications: React.FC<TechnicalSpecsProps> = ({
  title = <>Technical <span className="text-primary-500">Specifications</span></>,
  subtitle = "Product Details",
  description = "Comprehensive technical specifications for our aluminum wheel products across various series and applications.",
  specifications = defaultSpecifications,
  tensileStrengthComparison = defaultTensileStrengthComparison,
  weightComparison = defaultWeightComparison,
  technicalDataSheetUrl = "#"
}) => {
  return (
    <section id="specifications" className="py-16 bg-neutral-900 text-white relative">
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical corner accents */}
      <TechnicalCornerAccent position="top-left" />
      <TechnicalCornerAccent position="bottom-right" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<Ruler className="w-4 h-4 mr-2" />}
            subtitle={subtitle}
            title={title}
            description={description}
            isDark={true}
          />

          {/* Specifications Table */}
          <SpecificationsTable specifications={specifications} />

          {/* Download Technical Data Sheet */}
          <div className="flex justify-center mb-10">
            <a href={technicalDataSheetUrl} className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors border border-neutral-600 hover:border-neutral-500 inline-flex items-center group relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Download className="w-5 h-5 mr-2" />
              Download Complete Technical Data Sheet
            </a>
          </div>

          {/* Material Comparison */}
          <MaterialComparison
            tensileStrengthComparison={tensileStrengthComparison}
            weightComparison={weightComparison}
          />
        </div>
      </div>
    </section>
  );
};

export default Specifications;
