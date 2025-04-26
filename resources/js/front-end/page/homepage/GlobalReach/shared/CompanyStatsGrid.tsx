import { companyStats } from '@/front-end/constants/globalreach';


const CompanyStatsGrid = () => (
    <div className="grid grid-cols-2 gap-3 mb-5">
      {companyStats.map((stat, index) => (
        <div
          key={index}
          className="bg-neutral-50 p-3 border border-neutral-200 rounded-sm flex items-start"
        >
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
  );

export default CompanyStatsGrid
