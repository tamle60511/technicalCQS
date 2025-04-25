
import React from 'react';
import { BarChartHorizontal } from 'lucide-react';

// Define TypeScript types for our data
type PerformanceRating = 'Excellent' | 'Very Good' | 'Good' | 'Fair' | 'Poor';

interface CoatingType {
  name: string;
  highlighted?: boolean;
}

interface PerformanceFeature {
  id: string;
  name: string;
  ratings: {
    powderCoating: {
      rating: PerformanceRating;
      note: string;
    };
    liquidPainting: {
      rating: PerformanceRating;
      note: string;
    };
    eCoating: {
      rating: PerformanceRating;
      note: string;
    };
  };
}

interface PerformanceComparisonProps {
  id?: string;
  className?: string;
}

// Define coating types
const coatingTypes: CoatingType[] = [
  { name: 'Powder Coating', highlighted: true },
  { name: 'Liquid Painting' },
  { name: 'E-Coating' }
];

// Define performance features data
const performanceFeatures: PerformanceFeature[] = [
  {
    id: 'corrosion',
    name: 'Corrosion Resistance',
    ratings: {
      powderCoating: {
        rating: 'Excellent',
        note: '500-1,000 hrs salt spray'
      },
      liquidPainting: {
        rating: 'Good',
        note: '250-500 hrs salt spray'
      },
      eCoating: {
        rating: 'Excellent',
        note: '1,000+ hrs salt spray'
      }
    }
  },
  {
    id: 'uv',
    name: 'UV Resistance',
    ratings: {
      powderCoating: {
        rating: 'Very Good',
        note: 'With proper additives'
      },
      liquidPainting: {
        rating: 'Excellent',
        note: 'Automotive-grade'
      },
      eCoating: {
        rating: 'Fair',
        note: 'Requires topcoat'
      }
    }
  },
  {
    id: 'chemical',
    name: 'Chemical Resistance',
    ratings: {
      powderCoating: {
        rating: 'Excellent',
        note: 'Highly resistant'
      },
      liquidPainting: {
        rating: 'Good',
        note: 'Solvent-dependent'
      },
      eCoating: {
        rating: 'Very Good',
        note: 'Epoxy-based'
      }
    }
  },
  {
    id: 'durability',
    name: 'Durability/Hardness',
    ratings: {
      powderCoating: {
        rating: 'Excellent',
        note: '2H-4H pencil hardness'
      },
      liquidPainting: {
        rating: 'Good',
        note: 'H-2H pencil hardness'
      },
      eCoating: {
        rating: 'Very Good',
        note: '2H-3H pencil hardness'
      }
    }
  },
  {
    id: 'environmental',
    name: 'Environmental Impact',
    ratings: {
      powderCoating: {
        rating: 'Low',
        note: 'No solvents'
      },
      liquidPainting: {
        rating: 'Moderate',
        note: 'Contains VOCs'
      },
      eCoating: {
        rating: 'Low',
        note: 'Water-based'
      }
    }
  },
  {
    id: 'cost',
    name: 'Cost Efficiency',
    ratings: {
      powderCoating: {
        rating: 'High',
        note: '98% material utilization'
      },
      liquidPainting: {
        rating: 'Moderate',
        note: '60-70% material utilization'
      },
      eCoating: {
        rating: 'High',
        note: '95% material utilization'
      }
    }
  }
];

// Performance Rating Cell Component
const RatingCell: React.FC<{
  rating: string;
  note: string;
  highlighted?: boolean;
}> = ({ rating, note, highlighted = false }) => (
  <td className={`border border-neutral-200 p-3 ${highlighted ? 'bg-primary-50/30' : ''}`}>
    {rating}<br /><span className="text-xs text-neutral-500">{note}</span>
  </td>
);

const CoatingPerformanceComparison: React.FC<PerformanceComparisonProps> = ({
  id = "comparison",
  className = ""
}) => {
  return (
    <section id={id} className={`py-16 bg-white relative ${className}`}>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <BarChartHorizontal className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">Technology Comparison</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              Coating <span className="text-primary-600">Performance Comparison</span>
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <p className="text-neutral-600 max-w-3xl text-center mb-10">
              Compare the performance characteristics of our primary coating technologies to determine the optimal solution for your application requirements.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-neutral-200">
              <thead>
                <tr>
                  <th className="border border-neutral-200 bg-neutral-100 p-3 text-left text-neutral-700">Performance Feature</th>
                  {coatingTypes.map((coating, index) => (
                    <th
                      key={`coating-${index}`}
                      className={`border border-neutral-200 ${coating.highlighted ? 'bg-primary-50' : 'bg-neutral-100'} p-3 text-left ${coating.highlighted ? 'text-primary-900' : 'text-neutral-700'}`}
                    >
                      {coating.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {performanceFeatures.map((feature) => (
                  <tr key={feature.id}>
                    <td className="border border-neutral-200 p-3 bg-neutral-50 text-neutral-800 font-medium">
                      {feature.name}
                    </td>
                    <RatingCell
                      rating={feature.ratings.powderCoating.rating}
                      note={feature.ratings.powderCoating.note}
                      highlighted={true}
                    />
                    <RatingCell
                      rating={feature.ratings.liquidPainting.rating}
                      note={feature.ratings.liquidPainting.note}
                    />
                    <RatingCell
                      rating={feature.ratings.eCoating.rating}
                      note={feature.ratings.eCoating.note}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoatingPerformanceComparison;
