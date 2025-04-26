import React, { useState } from 'react'
import Factory from '../../Factory'
import { AlertCircle, BarChart2, Gauge, Shield, Users, Zap } from 'lucide-react'

type Props = {}

const TechnicalCompany = (props: Props) => {
     const [isLoaded, setIsLoaded] = useState(false);
          const currentYear = new Date().getFullYear();
  return (
    <div className={`bg-white rounded-sm shadow-md border border-neutral-200 transition-all duration-1000 hidden lg:block ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center">
                  <Factory size={18} className="text-primary-600 mr-2" />
                  <h3 className="font-medium text-neutral-800">Facility Monitoring</h3>
                </div>
                <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200 flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                  <span>LIVE</span>
                </div>
              </div>

              <div className="p-4">
                <div className="aspect-[16/9] overflow-hidden border border-neutral-200 rounded-sm">
                  {/* Technical corner elements */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary-600 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary-600 z-10"></div>

                  {/* Technical reference badge */}
                  <div className="absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-sm text-xs font-mono text-white px-2 py-1 z-10 border-r border-primary-600">
                    CQS-FACILITY-{currentYear}
                  </div>

                  <img
                    src='images/globel.jpg'
                    alt="CQS Die Casting Manufacturing Facility"
                    className="w-full h-full object-cover"
                  />



                  {/* Technical overlay patterns */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-neutral-900/30 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>

                  {/* Technical measurement grid */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-primary-500/10"></div>
                    ))}
                  </div>

                  {/* Caption bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-sm py-3 px-4 border-t border-neutral-700">
                    <div className="flex items-center">
                      <div className="w-2 h-6 bg-primary-600 mr-3"></div>
                      <div>
                        <div className="text-white font-medium">Advanced Die Casting Facility</div>
                        <div className="text-neutral-400 text-sm flex items-center">
                          <Shield size={12} className="mr-1.5 text-primary-400" />
                          <span>IATF16949 & ISO9001 Certified | Global Distribution</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical facility stats */}
              <div className="p-4 border-t border-neutral-200 bg-neutral-50">
                <div className="flex items-center mb-3">
                  <BarChart2 size={16} className="text-primary-600 mr-2" />
                  <h4 className="font-medium text-neutral-700">Facility Metrics</h4>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-sm border border-neutral-200">
                    <div className="flex items-center">
                      <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                        <Gauge className="text-primary-600" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 uppercase">Capacity</div>
                        <div className="font-medium text-neutral-800">15,000 m²</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-sm border border-neutral-200">
                    <div className="flex items-center">
                      <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                        <Users className="text-primary-600" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 uppercase">Workforce</div>
                        <div className="font-medium text-neutral-800">500+ Staff</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-sm border border-neutral-200">
                    <div className="flex items-center">
                      <div className="p-2 rounded-sm bg-neutral-100 flex items-center justify-center mr-3 border border-neutral-200">
                        <Zap className="text-primary-600" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 uppercase">Recycling</div>
                        <div className="font-medium text-neutral-800">93% Rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical footer */}
                <div className="mt-4 pt-3 border-t border-dashed border-neutral-300 text-xs font-mono text-neutral-500 flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertCircle size={12} className="mr-1 text-primary-600" />
                    <span>Facility data updated quarterly</span>
                  </div>
                  <span>CQS.FACILITY.{currentYear.toString().substring(2)}</span>
                </div>
              </div>
            </div>
  )
}

export default TechnicalCompany
