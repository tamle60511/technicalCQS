import React from 'react';
import { Terminal, Clock } from 'lucide-react';
import Title from '@/front-end/components/ui/Title/Title';

interface ServiceHeaderProps {
  currentYear: number;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ currentYear }) => (
  <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
    <Title
      metadata={{
        icon: Terminal,
        text: `SYS: CQS.MANUFACTURING.SERVICES.${currentYear}`,
        variant: 'default',
      }}
      title={{
        span: true,
        main: 'Complete',
        highlight: '  One-Stop',
        suffix: 'Solutions',
      }}
    />
    <div className="mt-4 flex items-center rounded-sm border border-neutral-200 bg-white px-2 py-1 font-mono text-xs text-neutral-500 sm:mt-0">
      <Clock size={12} className="text-primary-500 mr-1" />
      <span>SERVICE.MATRIX.{currentYear}</span>
    </div>
  </div>
);

export default ServiceHeader;
