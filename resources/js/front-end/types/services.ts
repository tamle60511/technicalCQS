export interface Service {
    title: string;
    description: string;
    icon: React.FC<{ className?: string; size?: number }>;
    code?: string;
    capacityLevel?: number;
    precisionLevel?: number;
    compatibility?: string[];
    status?: 'active' | 'maintenance' | 'upgrading';
    techSpecs?: string;
  }
