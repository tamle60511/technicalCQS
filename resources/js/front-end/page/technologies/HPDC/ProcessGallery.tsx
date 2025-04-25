
import React, { useState } from 'react';
import { Image, Hash, ZoomIn, Play, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  step: string;
  title: string;
  description: string;
  thumbnailSrc: string;
  fullSizeSrc: string;
  alt: string;
}

interface ProcessGalleryProps {
  className?: string;
  sectionId?: string;
  sectionTitle?: string;
  title?: React.ReactNode;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  galleryItems?: GalleryItem[];
}

const ProcessGallery: React.FC<ProcessGalleryProps> = ({
  className = '',
  sectionId = 'process-gallery',
  sectionTitle = 'Process Visualization',
  title = <>HPDC <span className="text-primary-500">Production Process</span> Gallery</>,
  description = 'Explore our high-pressure die casting production process through this detailed visual guide. Each image represents a critical stage in creating precision aluminum components.',
  ctaText = 'Watch HPDC Process Video',
  ctaHref = '#video',
  galleryItems = [
    {
      id: 'HPDC-01',
      step: 'STEP 01',
      title: 'Mold Preparation',
      description: 'Metal dies are cleaned, lubricated and preheated to 150-200°C for optimal casting conditions.',
      thumbnailSrc: 'https://images.unsplash.com/photo-1595078475395-e1c9bd91f7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      fullSizeSrc: 'https://images.unsplash.com/photo-1595078475395-e1c9bd91f7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Mold Preparation'
    },
    {
      id: 'HPDC-02',
      step: 'STEP 02',
      title: 'Metal Melting',
      description: 'Aluminum alloy is melted in furnaces at 650-700°C and treated to remove impurities.',
      thumbnailSrc: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      fullSizeSrc: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Metal Melting'
    },
    {
      id: 'HPDC-03',
      step: 'STEP 03',
      title: 'Metal Injection',
      description: 'Molten aluminum is injected at high velocity (30-100 m/s) and pressure (70-140 MPa) into the die cavity.',
      thumbnailSrc: 'https://images.unsplash.com/photo-1534959478479-3c954439430e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      fullSizeSrc: 'https://images.unsplash.com/photo-1534959478479-3c954439430e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Metal Injection'
    },
    {
      id: 'HPDC-04',
      step: 'STEP 04',
      title: 'Cooling Phase',
      description: 'Metal solidifies under pressure within seconds, ensuring excellent dimensional accuracy and surface finish.',
      thumbnailSrc: 'https://images.unsplash.com/photo-1531267370431-5a3bf5633f5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      fullSizeSrc: 'https://images.unsplash.com/photo-1531267370431-5a3bf5633f5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Cooling Phase'
    },
    {
      id: 'HPDC-05',
      step: 'STEP 05',
      title: 'Part Ejection',
      description: 'Die opens automatically and ejector pins push the solidified casting out of the mold cavity.',
      thumbnailSrc: 'https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      fullSizeSrc: 'https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Part Ejection'
    },
    {
      id: 'HPDC-06',
      step: 'STEP 06',
      title: 'Part Finishing',
      description: 'Excess material is trimmed off and parts undergo finishing operations like deburring, machining and surface treatments.',
      thumbnailSrc: 'https://images.unsplash.com/photo-1553002401-c0945c2ff0b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      fullSizeSrc: 'https://images.unsplash.com/photo-1553002401-c0945c2ff0b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Part Finishing'
    }
  ]
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openImage = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

  return (
    <section id={sectionId} className={`py-16 bg-neutral-900 text-white relative ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30">
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary-600/40"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary-600/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <Image className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight text-center">
              {title}
            </h2>

            <div className="w-20 h-0.5 bg-neutral-700 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <p className="text-neutral-300 max-w-3xl text-center mb-10">
              {description}
            </p>
          </div>

          {/* Process Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative cursor-pointer"
                onClick={() => openImage(item)}
              >
                <div className="overflow-hidden border border-neutral-700 bg-neutral-800 relative">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.thumbnailSrc}
                      alt={item.alt}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Technical overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,#333_25%,transparent_25%,transparent_50%,#333_50%,#333_75%,transparent_75%,transparent)] bg-[length:8px_8px] opacity-10"></div>

                  {/* Technical frame */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary-500/40"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary-500/40"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary-500/40"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary-500/40"></div>
                </div>

                {/* Caption */}
                <div className="bg-neutral-800 border-t border-neutral-700 p-4">
                  <div className="text-xs font-mono text-primary-400/80 mb-1 flex items-center">
                    <Hash className="w-3 h-3 mr-1.5" />
                    {item.step}
                  </div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-neutral-400 text-sm mt-1">{item.description}</p>
                </div>

                {/* Technical reference */}
                <div className="absolute top-3 right-3 text-xs font-mono text-white/70 bg-neutral-900/50 px-2 py-1 backdrop-blur-sm z-10">
                  {item.id}
                </div>

                {/* Zoom icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600/80 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Process Video Link */}
          <div className="mt-12 text-center">
            <a href={ctaHref} className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 group relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {ctaText}
              <Play className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal for enlarged images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="absolute top-4 right-4">
            <button
              className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-full transition-colors"
              onClick={closeImage}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className="max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.fullSizeSrc}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            <div className="bg-neutral-800/80 backdrop-blur-sm p-4 absolute bottom-0 left-0 right-0">
              <div className="flex items-center gap-2">
                <div className="bg-primary-600/20 border border-primary-500/30 px-2 py-1">
                  <span className="text-xs font-mono text-primary-400">{selectedImage.step}</span>
                </div>
                <h3 className="text-white font-medium">{selectedImage.title}</h3>
              </div>
              <p className="text-neutral-300 text-sm mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProcessGallery;
