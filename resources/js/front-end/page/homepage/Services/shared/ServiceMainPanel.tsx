import React from 'react';
import { Database, FileText } from 'lucide-react';
import SectionHeader from '@/front-end/components/ui/Section/SectionHeader';
import SectionFooter from '@/front-end/components/ui/Section/SectionFooter';
import Button, { BUTTON_VARIANT } from '@/front-end/components/ui/Button';
import { Service } from '@/front-end/types/services';
import ServiceCard from './ServiceCard';

interface ServiceMainPanelProps {
  serviceItems: Service[];
  activeServiceIndex: number;
  isLoaded: boolean;
  setActiveServiceIndex: (index: number) => void;
}

const ServiceMainPanel: React.FC<ServiceMainPanelProps> = ({
  serviceItems,
  activeServiceIndex,
  isLoaded,
  setActiveServiceIndex
}) => (
  <>
    <div
      className={`hover:border-primary-200 rounded-sm border border-neutral-200 bg-white shadow-md transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <SectionHeader icon={Database} title="Manufacturing Services Database" code="SERVICES: 6" />

      {/* Main company description */}
      <div className="border-b border-neutral-200 p-4">
        <div className="relative rounded-sm border border-neutral-200 bg-neutral-50 p-4">
          <div className="border-primary-500/20 absolute -top-1 -left-1 h-2 w-2 border-t border-l"></div>
          <div className="border-primary-500/20 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b"></div>
          <p className="leading-relaxed text-neutral-700">
            CQS provides customers with comprehensive "one-stop" services, from die-casting production to CNC precision
            processing, stamping, painting, assembly, and packaging. Our integrated approach ensures consistent quality
            and streamlined production for automotive and motorcycle components with global distribution.
          </p>
        </div>
      </div>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        {serviceItems.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            {...service}
            isLoaded={isLoaded}
            activeService={index === activeServiceIndex}
            onSelect={() => setActiveServiceIndex(index)}
          />
        ))}
      </div>

      <SectionFooter
        reference="CQS.SERVICES.2025"
        status={{
          text: 'ALL SERVICES OPERATIONAL',
          color: 'emerald',
        }}
      />
    </div>

    {/* Technical CTA button */}
    <div className="mt-6 text-center">
      <Button leftIcon={FileText} variant={BUTTON_VARIANT.PRIMARY}>
        Discover Our Technologies
      </Button>
    </div>
  </>
);

export default ServiceMainPanel;
