import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  ExternalLink,
  Users,
  Award,
  Factory,
  Terminal,
  Database,
  Globe,
  Shield,
  Cpu,
  Calendar,
  BarChart2,
  Zap,
  Gauge,
  Building,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Info
} from "lucide-react";
import MobileGlobal from "./shared/MobileGlobal";
import TechnicalCompany from "./shared/TechnicalCompany";
import { companyStats } from "@/front-end/constants/globalreach";
import { usePromo } from "@/hooks/use-promo";
import Background from "@/front-end/components/ui/Background";
import CompanyStatsGrid from "./shared/CompanyStatsGrid";

interface GlobalReachProps {
  className?: string;
}

const GlobalReach: React.FC<GlobalReachProps> = ({ className }) => {

  const {isLoaded, isScanning} = usePromo();

  const [activeTab, setActiveTab] = useState<'info' | 'stats'>('info');

  const currentYear = new Date().getFullYear();
  const renderTabContent = () => {
    if (activeTab === 'info') return (
      <div className="p-5">
        {/* Company Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
            <span className="text-sm font-medium text-neutral-800">Company Active Status</span>
          </div>
          <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
            <span className="text-emerald-500">●</span> OPERATIONAL
          </div>
        </div>

        <CompanyStatsGrid />

        {/* Các phần description và certification giữ nguyên */}
        {/* ... */}
      </div>
    );
    return (
        <div className="p-5">
          {/* Global presence content */}
          {/* ... */}
        </div>
      );
    };
  return (
    <section
      id="about-company"
      className="py-16 md:py-20 bg-neutral-100 relative overflow-hidden"
    >
      <Background isScanning={isScanning}/>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Technical title header */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <div className="inline-flex items-center mb-3 bg-neutral-900/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-neutral-800/10 relative">
              <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary-500/50"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary-500/50"></div>
              <Terminal className="mr-2 text-primary-600" size={16} />
              <p className="text-neutral-700 font-mono text-sm tracking-wider">
                <span className="text-primary-600">SYS:</span> CQS.COMPANY.PROFILE.{currentYear}
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight tracking-tight flex items-center">
              <div className="w-1.5 h-8 bg-primary-600 mr-3"></div>
              <span><span className="text-primary-600">Creativity</span>, Quality & Sustainability</span>
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 text-xs text-neutral-500 font-mono flex items-center bg-white px-2 py-1 rounded-sm border border-neutral-200">
            <Clock size={12} className="mr-1 text-primary-500" />
            <span>UPDATED: {new Date().toISOString().split('T')[0]}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Company Information Dashboard (5 columns) */}
          <div className="lg:col-span-5">
            {/* Main dashboard panel */}
            <div className={`bg-white rounded-sm shadow-md border border-neutral-200 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Dashboard header with tabs */}
              <div className="border-b border-neutral-200">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('info')}
                    className={`flex items-center px-4 py-3 text-sm font-medium ${
                      activeTab === 'info'
                        ? 'border-b-2 border-primary-600 text-primary-600'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <Database size={16} className="mr-2" />
                    Company Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`flex items-center px-4 py-3 text-sm font-medium ${
                      activeTab === 'stats'
                        ? 'border-b-2 border-primary-600 text-primary-600'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <BarChart2 size={16} className="mr-2" />
                    Global Presence
                  </button>
                </div>
              </div>

              {/* Info tab content */}
              {activeTab === 'info' && (
                <div className="p-5">
                  {/* Company Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                      <span className="text-sm font-medium text-neutral-800">Company Active Status</span>
                    </div>
                    <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                      <span className="text-emerald-500">●</span> OPERATIONAL
                    </div>
                  </div>

                  {/* Company Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {companyStats.map((stat, index) => (
                      <div key={index} className="bg-neutral-50 p-3 border border-neutral-200 rounded-sm flex items-start">
                        <div className="w-8 h-8 flex items-center justify-center bg-white border border-neutral-200 mr-3 rounded-sm">
                          <stat.icon size={16} className="text-primary-600" />
                        </div>
                        <div>
                          <div className="text-xs text-neutral-500">{stat.label}</div>
                          <div className="text-sm font-medium text-neutral-800">{stat.value}</div>
                          <div className="text-xs font-mono text-primary-600 mt-0.5">{stat.growth}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Company Description */}
                  <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-sm mb-4 relative">
                    <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-primary-500/20"></div>
                    <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-primary-500/20"></div>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      CQS is a leading aluminum die-casting and manufacturing specialist headquartered in Vietnam.
                      With strategically located facilities and superior logistics connectivity, we serve global
                      automotive and motorcycle manufacturers with precision components and assemblies.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-sm mb-5">
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Our comprehensive capabilities include High Pressure Die Casting (HPDC), Gravity Die Casting (GDC),
                      5-axis CNC precision machining, and integrated assembly services. We deliver premium aluminum
                      components with dimensional tolerances of <span className="font-mono text-primary-600">±0.05mm</span> for
                      automotive, motorcycle, green energy, and agricultural applications.
                    </p>
                  </div>

                  {/* Certifications */}
                  <div className="border-t border-dashed border-neutral-200 pt-4 mb-4">
                    <div className="flex items-center mb-2">
                      <Shield size={14} className="text-primary-600 mr-1.5" />
                      <div className="text-sm font-medium text-neutral-700">CERTIFICATIONS</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <div className="px-2 py-1 text-xs bg-neutral-50 border border-neutral-200 rounded-sm flex items-center">
                        <CheckCircle size={12} className="mr-1 text-emerald-500" />
                        IATF 16949:2016
                      </div>
                      <div className="px-2 py-1 text-xs bg-neutral-50 border border-neutral-200 rounded-sm flex items-center">
                        <CheckCircle size={12} className="mr-1 text-emerald-500" />
                        ISO 9001:2015
                      </div>
                      <div className="px-2 py-1 text-xs bg-neutral-50 border border-neutral-200 rounded-sm flex items-center">
                        <CheckCircle size={12} className="mr-1 text-emerald-500" />
                        ISO 14001:2015
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center pt-2">
                    <a
                      href="/about"
                      className="inline-flex items-center justify-center px-6 py-3
                               bg-primary-600 text-white
                               font-medium tracking-wide rounded-sm border border-primary-500
                               hover:bg-primary-700 transition-all
                               shadow-lg hover:shadow-primary-900/30 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/0 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span>Our Manufacturing Excellence</span>
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              )}

              {/* Stats tab content */}
              {activeTab === 'stats' && (
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Globe size={16} className="text-primary-600 mr-2" />
                      <h3 className="font-medium text-neutral-800">Global Market Presence</h3>
                    </div>
                    <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                      {globalPresence.reduce((acc, region) => acc + region.countries.length, 0)} COUNTRIES
                    </div>
                  </div>

                  {/* Global regions */}
                  <div className="space-y-4 mb-5">
                    {globalPresence.map((region, index) => (
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
                            <div key={idx} className="px-2 py-0.5 text-xs bg-white border border-neutral-200 rounded-sm flex items-center">
                              <MapPin size={10} className="mr-1 text-primary-500" />
                              {country}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Distribution capabilities */}
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

                  {/* CTA Button for stats tab */}
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
              )}

              {/* Technical dashboard footer */}
              <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
                <span>REF: CQS.PROFILE.{currentYear}</span>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                  <span>COMPANY DATA VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Technical Company Image (7 columns) */}
          <div className="lg:col-span-7">
            {/* Technical image dashboard for larger screens */}
           <TechnicalCompany />

            {/* Mobile version - simplified */}
                <MobileGlobal />
          </div>
        </div>
      </div>


    </section>
  );
};

export default React.memo(GlobalReach);
