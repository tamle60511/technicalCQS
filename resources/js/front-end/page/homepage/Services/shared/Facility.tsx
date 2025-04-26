import { usePromo } from '@/hooks/use-promo'
import { AlertCircle, BarChart2, Gauge, Globe, Zap } from 'lucide-react';
import React from 'react'

type Props = {}

const Facility = (props: Props) => {
    const {currentYear} = usePromo();
  return (
    <div className="border-t border-neutral-200 bg-neutral-50 p-4">
    <div className="mb-3 flex items-center">
        <BarChart2 size={16} className="text-primary-600 mr-2" />
        <h4 className="font-medium text-neutral-700">Facility Metrics</h4>
    </div>

    <div className="grid grid-cols-3 gap-3">
        <div className="rounded-sm border border-neutral-200 bg-white p-3">
            <div className="flex items-center">
                <div className="mr-3 flex items-center justify-center rounded-sm border border-neutral-200 bg-neutral-100 p-2">
                    <Gauge className="text-primary-600" size={16} />
                </div>
                <div>
                    <div className="text-xs text-neutral-500 uppercase">Capacity</div>
                    <div className="text-sm font-medium text-neutral-800">250-1,650 tons</div>
                </div>
            </div>
        </div>

        <div className="rounded-sm border border-neutral-200 bg-white p-3">
            <div className="flex items-center">
                <div className="mr-3 flex items-center justify-center rounded-sm border border-neutral-200 bg-neutral-100 p-2">
                    <Globe className="text-primary-600" size={16} />
                </div>
                <div>
                    <div className="text-xs text-neutral-500 uppercase">Distribution</div>
                    <div className="text-sm font-medium text-neutral-800">8+ Countries</div>
                </div>
            </div>
        </div>

        <div className="rounded-sm border border-neutral-200 bg-white p-3">
            <div className="flex items-center">
                <div className="mr-3 flex items-center justify-center rounded-sm border border-neutral-200 bg-neutral-100 p-2">
                    <Zap className="text-primary-600" size={16} />
                </div>
                <div>
                    <div className="text-xs text-neutral-500 uppercase">Precision</div>
                    <div className="text-sm font-medium text-neutral-800">±0.05mm</div>
                </div>
            </div>
        </div>
    </div>

    {/* Technical footer */}
    <div className="mt-4 flex items-center justify-between border-t border-dashed border-neutral-300 pt-3 font-mono text-xs text-neutral-500">
        <div className="flex items-center">
            <AlertCircle size={12} className="text-primary-600 mr-1" />
            <span>Facility data updated quarterly</span>
        </div>
        <span>CQS.FACILITY.{currentYear.toString().substring(2)}</span>
    </div>
</div>
  )
}

export default Facility
