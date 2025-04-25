import { AlertCircle, Award, Globe, Shield, Wrench, Zap } from 'lucide-react'
import React, { useMemo } from 'react'


function Specifications() {
      const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <div className="p-4 border-t border-neutral-200 bg-neutral-50">
    <div className="flex items-center mb-3">
        <Shield size={16} className="text-primary-600 mr-2" />
        <h4 className="font-medium text-neutral-700">Quality Standards & Specifications</h4>
    </div>

    <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-3 rounded-sm border border-neutral-200">
            <div className="flex items-center">
                <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                    <Award className="text-primary-600" size={18} />
                </div>
                <div>
                    <div className="text-xs text-neutral-500 uppercase">Quality Systems</div>
                    <div className="font-medium text-neutral-800">IATF16949, ISO9001</div>
                </div>
            </div>
        </div>

        <div className="bg-white p-3 rounded-sm border border-neutral-200">
            <div className="flex items-center">
                <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                    <Wrench className="text-primary-600" size={18} />
                </div>
                <div>
                    <div className="text-xs text-neutral-500 uppercase">Machine Range</div>
                    <div className="font-medium text-neutral-800">250-1,650 Tons</div>
                </div>
            </div>
        </div>

        <div className="bg-white p-3 rounded-sm border border-neutral-200">
            <div className="flex items-center">
                <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                    <Globe className="text-primary-600" size={18} />
                </div>
                <div>
                    <div className="text-xs text-neutral-500 uppercase">Global Distribution</div>
                    <div className="font-medium text-neutral-800">8+ Countries</div>
                </div>
            </div>
        </div>

        <div className="bg-white p-3 rounded-sm border border-neutral-200">
            <div className="flex items-center">
                <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                    <Zap className="text-primary-600" size={18} />
                </div>
                <div>
                    <div className="text-xs text-neutral-500 uppercase">Delivery Rate</div>
                    <div className="font-medium text-neutral-800">99.8% On-Time</div>
                </div>
            </div>
        </div>
    </div>

    {/* Technical footer */}
    <div className="mt-4 pt-4 border-t border-dashed border-neutral-300 text-xs font-mono text-neutral-500 flex items-center justify-between">
        <div className="flex items-center">
            <AlertCircle size={12} className="mr-1 text-primary-600" />
            <span>Specification data updated quarterly</span>
        </div>
        <span>CQS.SPEC.{currentYear.toString().substring(2)}</span>
    </div>
</div>
  )
}

export default Specifications
