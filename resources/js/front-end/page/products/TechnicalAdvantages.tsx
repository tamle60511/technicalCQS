
import React from 'react';
import { Zap, Feather, Thermometer, Shield, Blocks, ArrowRight } from 'lucide-react';

// Types and Interfaces
interface AdvantagePoint {
  id: string;
  text: string;
}

interface TechnicalAdvantage {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progressPercent: number;
  progressText: string;
  points: AdvantagePoint[];
}

interface TechnicalAdvantagesProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  advantages?: TechnicalAdvantage[];
}

// Reusable Components
const SectionTitle: React.FC<{
  icon: React.ReactNode;
  subtitle: string;
  title: React.ReactNode;
  description?: string;
}> = ({ icon, subtitle, title, description }) => {
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

      {description && (
        <p className="text-neutral-600 max-w-3xl text-center mb-10">
          {description}
        </p>
      )}
    </div>
  );
};

const ProgressBar: React.FC<{
  percent: number;
  text: string;
}> = ({ percent, text }) => {
  return (
    <div className="relative h-10 bg-neutral-100 rounded-sm mb-4">
      <div
        className="absolute left-0 top-0 h-10 bg-primary-500 rounded-sm"
        style={{ width: `${percent}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center font-medium text-neutral-600">
        {text}
      </div>
    </div>
  );
};

const AdvantagePoint: React.FC<{ point: AdvantagePoint }> = ({ point }) => {
  return (
    <div className="flex items-start">
      <ArrowRight className="w-4 h-4 text-primary-500 mt-0.5 mr-2" />
      <span>{point.text}</span>
    </div>
  );
};

const AdvantageCard: React.FC<{ advantage: TechnicalAdvantage }> = ({ advantage }) => {
  return (
    <div className="bg-white border border-neutral-200 shadow-sm p-6 relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/30"></div>

      <div className="w-12 h-12 bg-primary-50 border border-primary-200 rounded-md flex items-center justify-center mb-4">
        {advantage.icon}
      </div>

      <h3 className="text-xl font-bold text-neutral-900 mb-3">{advantage.title}</h3>

      <p className="text-neutral-600 mb-4">
        {advantage.description}
      </p>

      <ProgressBar percent={advantage.progressPercent} text={advantage.progressText} />

      <div className="text-sm text-neutral-600">
        {advantage.points.map((point, index) => (
          <div key={point.id} className={index < advantage.points.length - 1 ? "mb-2" : ""}>
            <AdvantagePoint point={point} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Default data
const defaultAdvantages: TechnicalAdvantage[] = [
  {
    id: 'adv-1',
    title: 'Weight Reduction',
    description: 'Our aluminum wheels are 30-40% lighter than comparable steel wheels, reducing unsprung mass for improved handling, acceleration, and fuel efficiency.',
    icon: <Feather className="w-6 h-6 text-primary-600" />,
    progressPercent: 35,
    progressText: 'Up to 40% Weight Reduction',
    points: [
      { id: 'adv1-point1', text: 'Reduces vehicle overall weight for improved mileage' },
      { id: 'adv1-point2', text: 'Decreases rotational inertia for better acceleration' }
    ]
  },
  {
    id: 'adv-2',
    title: 'Heat Dissipation',
    description: 'Aluminum\'s superior thermal conductivity improves brake cooling and overall heat management, enhancing braking performance and reducing thermal fatigue.',
    icon: <Thermometer className="w-6 h-6 text-primary-600" />,
    progressPercent: 65,
    progressText: '65% Better Thermal Conductivity',
    points: [
      { id: 'adv2-point1', text: 'Prevents brake fade during intensive use' },
      { id: 'adv2-point2', text: 'Extends the life of brake components' }
    ]
  },
  {
    id: 'adv-3',
    title: 'Corrosion Resistance',
    description: 'Our proprietary aluminum alloys and finishing processes provide exceptional resistance to road salts, moisture, and environmental contaminants.',
    icon: <Shield className="w-6 h-6 text-primary-600" />,
    progressPercent: 80,
    progressText: '80% Less Corrosion vs. Untreated Steel',
    points: [
      { id: 'adv3-point1', text: 'Maintains appearance and structural integrity longer' },
      { id: 'adv3-point2', text: 'Reduces maintenance requirements' }
    ]
  },
  {
    id: 'adv-4',
    title: 'Design Flexibility',
    description: 'Aluminum\'s casting and forging characteristics enable complex wheel designs that optimize both aesthetics and performance characteristics.',
    icon: <Blocks className="w-6 h-6 text-primary-600" />,
    progressPercent: 90,
    progressText: '90% More Design Possibilities',
    points: [
      { id: 'adv4-point1', text: 'Enables intricate, lightweight spoke patterns' },
      { id: 'adv4-point2', text: 'Supports custom finishes and treatments' }
    ]
  }
];

// Main Component
const TechnicalAdvantages: React.FC<TechnicalAdvantagesProps> = ({
  title = <>Aluminum Wheel <span className="text-primary-600">Performance Benefits</span></>,
  subtitle = "Technical Advantages",
  description = "Our advanced aluminum wheel systems deliver multiple performance advantages through precision engineering and material science.",
  advantages = defaultAdvantages
}) => {
  return (
    <section id="advantages" className="py-16 bg-neutral-50 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<Zap className="w-4 h-4 mr-2" />}
            subtitle={subtitle}
            title={title}
            description={description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map(advantage => (
              <AdvantageCard key={advantage.id} advantage={advantage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalAdvantages;
