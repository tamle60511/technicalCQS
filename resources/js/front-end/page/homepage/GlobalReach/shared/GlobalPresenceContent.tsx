import { Globe, MapPin } from 'lucide-react';
import React from 'react'

type Props = {}

const GlobalPresenceContent = () => (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Globe size={16} className="text-primary-600 mr-2" />
          <h3 className="font-medium text-neutral-800">Global Market Presence</h3>
        </div>
        <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
          {GLOBAL_PRESENCE.reduce((acc, region) => acc + region.countries.length, 0)} COUNTRIES
        </div>
      </div>

      <div className="space-y-4 mb-5">
        {GLOBAL_PRESENCE.map((region, index) => (
          <div key={index} className="bg-neutral-50 p-4 border border-neutral-200 rounded-sm">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-neutral-800">{region.region}</div>
              <div className="text-xs font-mono">{region.marketShare}% MARKET</div>
            </div>

            <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-primary-500 transition-all duration-1000"
                style={{ width: `${region.marketShare}%` }}
              ></div>
            </div>

            <div className="flex flex-wrap gap-2">
              {region.countries.map((country, idx) => (
                <div
                  key={idx}
                  className="px-2 py-0.5 text-xs bg-white border border-neutral-200 rounded-sm flex items-center"
                >
                  <MapPin size={10} className="mr-1 text-primary-500" />
                  {country}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Phần còn lại của Global Presence Content */}
      <div className="border-t border-dashed border-neutral-200 pt-4 mb-5">
        <div className="flex items-center mb-3">
          <Cpu size={14} className="text-primary-600 mr-1.5" />
          <div className="text-sm font-medium text-neutral-700">DISTRIBUTION CAPABILITIES</div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white p-3 rounded-sm border border-neutral-200">
            <div className="text-xs text-neutral-500 mb-1">Shipping Volume</div>
            <div className="font-medium text-neutral-800">5,000+ tons/year</div>
          </div>
          <div className="bg-white p-3 rounded-sm border border-neutral-200">
            <div className="text-xs text-neutral-500 mb-1">Logistics Network</div>
            <div className="font-medium text-neutral-800">Global JIT</div>
          </div>
        </div>

        <div className="text-xs text-neutral-600 italic bg-neutral-50 p-3 border border-neutral-200 rounded-sm">
          <AlertCircle size={12} className="inline mr-1 text-primary-500" />
          CQS maintains strategically located distribution centers to ensure just-in-time delivery for all international clients.
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center pt-2">
        <a
          href="/global-presence"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          <Info size={16} className="mr-1.5" />
          Explore Our Global Network
          <ArrowRight size={14} className="ml-1.5" />
        </a>
      </div>
    </div>
  );
export default GlobalPresenceContent
