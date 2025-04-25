
import React from 'react';
import { FileDown, FileText, Ruler, Wrench, CheckCircle,  ExternalLink, Download, Play } from 'lucide-react';

// Types and Interfaces
interface ResourceDownload {
  id: string;
  title: string;
  icon: React.ReactNode;
  fileInfo: string;
  link: string;
}

interface ResourceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  downloads: ResourceDownload[];
}

interface CADFeature {
  id: string;
  text: string;
}

interface DownloadResourcesSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  resourceCards?: ResourceCard[];
  cadFeatures?: CADFeature[];
  cadLibraryUrl?: string;
}

// Section Title Component
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

// Resource Download Link Component
const ResourceDownloadLink: React.FC<{ download: ResourceDownload }> = ({ download }) => {
  return (
    <a href={download.link} className="flex items-center text-sm text-primary-600 hover:text-primary-700 transition-colors">
      {download.icon || <Download className="w-4 h-4 mr-2" />}
      <span>{download.title} ({download.fileInfo})</span>
    </a>
  );
};

// Resource Card Component
const ResourceCard: React.FC<{ resource: ResourceCard }> = ({ resource }) => {
  return (
    <div className="bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow p-6 relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/30"></div>

      <div className="w-12 h-12 bg-primary-50 border border-primary-200 rounded-md flex items-center justify-center mb-4">
        {resource.icon}
      </div>

      <h3 className="text-lg font-bold text-neutral-900 mb-2">{resource.title}</h3>
      <p className="text-neutral-600 text-sm mb-4">
        {resource.description}
      </p>

      <div className="space-y-2">
        {resource.downloads.map(download => (
          <ResourceDownloadLink key={download.id} download={download} />
        ))}
      </div>
    </div>
  );
};

// CAD Files Section Component
const CADFilesSection: React.FC<{
  features: CADFeature[];
  libraryUrl: string;
}> = ({ features, libraryUrl }) => {
  return (
    <div className="mt-12 bg-neutral-50 border border-neutral-200 p-6 relative">
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-400"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-400"></div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/4 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full border border-primary-300 flex items-center justify-center">
            <div className="w-12 h-12 text-primary-600" />
          </div>
        </div>

        <div className="md:w-3/4">
          <h3 className="text-xl font-bold text-neutral-900 mb-3">CAD Files & 3D Models</h3>
          <p className="text-neutral-600 mb-4">
            Access professional CAD files and 3D models of our aluminum wheel systems for integration into your engineering and design workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {features.map(feature => (
              <div key={feature.id} className="flex items-center text-sm text-neutral-600">
                <CheckCircle className="w-4 h-4 mr-2 text-primary-600" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <a href={libraryUrl} className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors inline-flex items-center">
            Access CAD Library
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Default data
const defaultResourceCards: ResourceCard[] = [
  {
    id: 'resource-catalogs',
    title: 'Product Catalogs',
    description: 'Comprehensive product catalogs with full specifications, dimensions, and application guides for all aluminum wheel series.',
    icon: <FileText className="w-6 h-6 text-primary-600" />,
    downloads: [
      {
        id: 'catalog-performance',
        title: 'Performance Series Catalog',
        fileInfo: 'PDF, 8.5 MB',
        icon: <Download className="w-4 h-4 mr-2" />,
        link: '#'
      },
      {
        id: 'catalog-commercial',
        title: 'Commercial Series Catalog',
        fileInfo: 'PDF, 7.2 MB',
        icon: <Download className="w-4 h-4 mr-2" />,
        link: '#'
      },
      {
        id: 'catalog-offroad',
        title: 'Off-Road Series Catalog',
        fileInfo: 'PDF, 9.1 MB',
        icon: <Download className="w-4 h-4 mr-2" />,
        link: '#'
      }
    ]
  },
  {
    id: 'resource-datasheets',
    title: 'Technical Data Sheets',
    description: 'Detailed technical specifications, material composition, testing results, and certification information.',
    icon: <Ruler className="w-6 h-6 text-primary-600" />,
    downloads: [
      {
        id: 'datasheet-alloy',
        title: 'Alloy Material Specifications',
        fileInfo: 'PDF, 2.1 MB',
        icon: <Download className="w-4 h-4 mr-2" />,
        link: '#'
      },
      {
        id: 'datasheet-testing',
        title: 'Testing & Certification Data',
        fileInfo: 'PDF, 3.4 MB',
        icon: <Download className="w-4 h-4 mr-2" />,
        link: '#'
      },
      {
        id: 'datasheet-load',
        title: 'Load Rating Documentation',
        fileInfo: 'PDF, 1.8 MB',
        icon: <Download className="w-4 h-4 mr-2" />,
        link: '#'
      }
    ]
  },
  {
    id: 'resource-installation',
    title: 'Installation Guides',
    description: 'Installation manuals, torque specifications, maintenance requirements, and best practices for wheel care.',
    icon: <Wrench className="w-6 h-6 text-primary-600" />,
    downloads: [
      {
        id: 'guide-installation',
        title: 'Installation & Torque Guide',
        fileInfo: 'PDF, 4.2 MB',
        icon: <Download className="w-4 h-4 mr-2" />,
        link: '#'
      },
      {
        id: 'guide-maintenance',
        title: 'Maintenance Manual',
        fileInfo: 'PDF, 3.7 MB',
        icon: <Download className="w-4 h-4 mr-2" />,
        link: '#'
      },
      {
        id: 'guide-video',
        title: 'Installation Video Tutorial',
        fileInfo: 'MP4, 85 MB',
        icon: <Play className="w-4 h-4 mr-2" />,
        link: '#'
      }
    ]
  }
];

const defaultCADFeatures: CADFeature[] = [
  {
    id: 'cad-feature-1',
    text: 'Multiple CAD formats available (.STEP, .IGES, .STP)'
  },
  {
    id: 'cad-feature-2',
    text: 'High-precision dimensional accuracy'
  },
  {
    id: 'cad-feature-3',
    text: 'Compatible with major CAD software'
  },
  {
    id: 'cad-feature-4',
    text: 'Regular updates for new product designs'
  }
];

// Main Component
const DownloadResourcesSection: React.FC<DownloadResourcesSectionProps> = ({
  title = <>Technical <span className="text-primary-600">Resources</span></>,
  subtitle = "Resources",
  description = "Access detailed technical information, specifications, and resources for our aluminum wheel systems.",
  resourceCards = defaultResourceCards,
  cadFeatures = defaultCADFeatures,
  cadLibraryUrl = "#"
}) => {
  return (
    <section className="py-16 bg-white relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<FileDown className="w-4 h-4 mr-2" />}
            subtitle={subtitle}
            title={title}
            description={description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCards.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>

          {/* CAD Files */}
          <CADFilesSection features={cadFeatures} libraryUrl={cadLibraryUrl} />
        </div>
      </div>
    </section>
  );
};

export default DownloadResourcesSection;
