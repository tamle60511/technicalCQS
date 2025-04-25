
import React from 'react';
import { MapPin, Building, ArrowRight } from 'lucide-react';

// Types and Interfaces
interface Office {
  id: string;
  title: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  isPrimary?: boolean;
}

interface Region {
  id: string;
  name: string;
  offices: Office[];
  directionsLink: string;
}

interface LocationMapSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  mapImageSrc?: string;
  regions?: Region[];
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

const MapContainer: React.FC<{ mapImageSrc: string }> = ({ mapImageSrc }) => {
  // These percentages are arbitrary for demo purposes - in a real app you might
  // calculate these based on actual coordinates
  const mapPoints = [
    { id: 'point-1', top: '1/4', left: '1/5' },
    { id: 'point-2', top: '1/3', left: '1/2' },
    { id: 'point-3', top: '1/2', left: '3/4' },
    { id: 'point-4', top: '2/3', left: '1/4' }
  ];

  return (
    <div className="bg-white border border-neutral-200 p-4 shadow-sm relative mb-12">
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary-500/30"></div>

      {/* Map with points */}
      <div className="h-96 bg-neutral-200 relative overflow-hidden">
        <img src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="World Map" className="w-full h-full object-cover opacity-60" />

        {/* Map Points */}
        {mapPoints.map(point => (
          <div
            key={point.id}
            className={`absolute top-${point.top} left-${point.left} w-4 h-4 bg-primary-500 rounded-full animate-pulse`}
          ></div>
        ))}

        {/* Technical Overlay */}
        <div className="absolute inset-0 pointer-events-none border border-neutral-500/20"></div>
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,transparent_49px,#333_50px,#333_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#333_50px,#333_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.05]"></div>

        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-2 text-xs font-mono text-neutral-600">
          CQS.GLOBAL_LOCATIONS[v4.2]
        </div>
      </div>
    </div>
  );
};

const RegionCard: React.FC<{ region: Region }> = ({ region }) => {
  return (
    <div className="bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/30"></div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center flex-shrink-0 mr-3">
            <Building className="w-5 h-5 text-primary-600" />
          </div>
          <h3 className="text-lg font-bold text-neutral-900">{region.name}</h3>
        </div>

        <div className="space-y-3 text-sm text-neutral-600">
          {region.offices.map((office, index) => (
            <p
              key={office.id}
              className={`border-l-2 ${office.isPrimary ? 'border-primary-300' : 'border-neutral-300'} pl-3`}
            >
              <span className="font-medium text-neutral-900">{office.title}:</span><br />
              {office.address}<br />
              {office.city}, {office.postalCode}<br />
              {office.country}
            </p>
          ))}
        </div>

        <div className="mt-4 text-sm">
          <a href={region.directionsLink} className="text-primary-600 hover:text-primary-700 inline-flex items-center">
            <span>View Directions</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Default data
const defaultRegions: Region[] = [
  {
    id: 'region-1',
    name: 'North America',
    offices: [
      {
        id: 'na-office-1',
        title: 'Headquarters',
        address: '1250 Technology Avenue, Suite 500',
        city: 'Innovation City, CA',
        postalCode: '92120',
        country: 'United States',
        isPrimary: true
      },
      {
        id: 'na-office-2',
        title: 'Manufacturing Center',
        address: '750 Industrial Parkway',
        city: 'Detroit, MI',
        postalCode: '48201',
        country: 'United States'
      },
      {
        id: 'na-office-3',
        title: 'R&D Lab',
        address: '200 Innovation Circle',
        city: 'Boston, MA',
        postalCode: '02110',
        country: 'United States'
      }
    ],
    directionsLink: '#'
  },
  {
    id: 'region-2',
    name: 'Europe',
    offices: [
      {
        id: 'eu-office-1',
        title: 'European Headquarters',
        address: 'Innovationsstraße 25',
        city: 'Munich',
        postalCode: '80331',
        country: 'Germany',
        isPrimary: true
      },
      {
        id: 'eu-office-2',
        title: 'UK Office',
        address: '120 Tech Square',
        city: 'London',
        postalCode: 'EC1V 9BW',
        country: 'United Kingdom'
      },
      {
        id: 'eu-office-3',
        title: 'Nordic Office',
        address: 'Teknologi Vej 15',
        city: 'Copenhagen',
        postalCode: '2100',
        country: 'Denmark'
      }
    ],
    directionsLink: '#'
  },
  {
    id: 'region-3',
    name: 'Asia Pacific',
    offices: [
      {
        id: 'ap-office-1',
        title: 'APAC Headquarters',
        address: '1 Science Park Road',
        city: 'Singapore',
        postalCode: '117528',
        country: 'Singapore',
        isPrimary: true
      },
      {
        id: 'ap-office-2',
        title: 'Japan Office',
        address: 'Minato Business Tower, Floor 15',
        city: 'Tokyo',
        postalCode: '105-0001',
        country: 'Japan'
      },
      {
        id: 'ap-office-3',
        title: 'Australia Office',
        address: '200 Technology Place',
        city: 'Sydney, NSW',
        postalCode: '2000',
        country: 'Australia'
      }
    ],
    directionsLink: '#'
  }
];

// Main Component
const LocationMapSection: React.FC<LocationMapSectionProps> = ({
  title = <>Global <span className="text-primary-600">Presence</span></>,
  subtitle = "Our Locations",
  description = "With offices and facilities around the world, we're strategically positioned to serve our clients wherever they are.",
  mapImageSrc = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  regions = defaultRegions
}) => {
  return (
    <section className="py-16 bg-neutral-50 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<MapPin className="w-4 h-4 mr-2" />}
            subtitle={subtitle}
            title={title}
            description={description}
          />

          {/* Map Container */}
          <MapContainer mapImageSrc={mapImageSrc} />

          {/* Office Locations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map(region => (
              <RegionCard key={region.id} region={region} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMapSection;
