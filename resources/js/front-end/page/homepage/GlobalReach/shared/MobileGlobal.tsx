import React, { useState } from 'react'
import Factory from '../../Factory'

interface GlobalReachProps {
    className?: string;
  }

const MobileGlobal:React.FC<GlobalReachProps> = ({ className }) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const currentYear = new Date().getFullYear();
  return (
    <div className={`bg-white rounded-sm shadow-md border border-neutral-200 transition-all duration-1000 lg:hidden ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
    <div className="p-3 border-b border-neutral-200 flex items-center justify-between">
      <div className="flex items-center">
        <Factory size={16} className="text-primary-600 mr-2" />
        <h3 className="text-sm font-medium text-neutral-800">Manufacturing Facility</h3>
      </div>
      <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
        CQS-{currentYear}
      </div>
    </div>

    <div className="p-3">
      <div className="aspect-[4/3] overflow-hidden border border-neutral-200 rounded-sm relative">
        {/* Technical corner elements - simplified for mobile */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-600 z-10"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-600 z-10"></div>

        <img
          src='images/globel.jpg'
          alt="CQS Die Casting Manufacturing Facility"
          className="w-full h-full object-cover"
        />

        {/* Technical scanning line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-primary-400/70 animate-scan z-20"></div>

        {/* Simplified overlay for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

        {/* Caption bar - simplified for mobile */}
        <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-sm py-2 px-3 border-t border-neutral-700">
          <div className="flex items-center">
            <div className="w-1.5 h-5 bg-primary-600 mr-2"></div>
            <div className="text-white text-sm font-medium">Advanced Die Casting Facility</div>
          </div>
        </div>
      </div>
    </div>

    {/* Simplified metrics for mobile */}
    <div className="p-3 border-t border-neutral-200 bg-neutral-50">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-sm border border-neutral-200 text-center">
          <div className="text-xs text-neutral-500">Facility Size</div>
          <div className="font-medium text-neutral-800">15,000 m²</div>
        </div>
        <div className="bg-white p-2 rounded-sm border border-neutral-200 text-center">
          <div className="text-xs text-neutral-500">Recycling Rate</div>
          <div className="font-medium text-neutral-800">93%</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MobileGlobal
