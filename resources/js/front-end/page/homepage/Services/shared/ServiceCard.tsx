import { Service } from '@/front-end/types/services';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps extends Service {
    index: number;
    isLoaded: boolean;
    activeService: boolean;
    onSelect: () => void;
}

const ServiceCard = ({ title, description, icon: Icon, code, index, status, isLoaded, activeService, onSelect }: ServiceCardProps) => {
    return (
        <div
            className={`flex flex-col border bg-white p-4 ${
                activeService ? 'border-primary-300 ring-primary-200 shadow-md ring-1' : 'hover:border-primary-200 border-neutral-200 hover:shadow-sm'
            } cursor-pointer transition-all ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{
                transitionDelay: `${index * 100}ms`,
            }}
            onClick={onSelect}
        >
            <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                    <div
                        className={`h-12 w-12 ${
                            activeService ? 'bg-primary-50 border-primary-200' : 'border-neutral-300 bg-neutral-100'
                        } flex items-center justify-center border transition-colors`}
                    >
                        <Icon className="text-primary-600" size={20} />
                    </div>
                </div>
                <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center justify-between">
                        <h3 className="truncate font-semibold text-neutral-900">{title}</h3>
                        <div className="flex items-center">
                            <div className={`h-1.5 w-1.5 ${status === 'active' ? 'bg-emerald-500' : 'bg-amber-500'} mr-1.5 rounded-full`}></div>
                            <span className="font-mono text-xs text-neutral-500">{code}</span>
                        </div>
                    </div>
                    <p className="line-clamp-2 text-sm text-neutral-600">{description}</p>
                </div>
            </div>

            {activeService && (
                <div className="mt-3 border-t border-neutral-200 pt-3">
                    <div className="flex justify-between text-xs">
                        <span className="text-neutral-500">Tech Overview</span>
                        <Link href={`/services/${code?.toLowerCase()}`} className="text-primary-600 hover:text-primary-700 flex items-center">
                            Details <ArrowRight size={12} className="ml-1" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceCard;
