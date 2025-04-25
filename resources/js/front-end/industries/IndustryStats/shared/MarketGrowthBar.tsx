import React from 'react'

interface MarketGrowthItem {
    industry: string
    growthRate: number
  }

const MarketGrowthBar: React.FC<MarketGrowthItem> = ({
  industry,
  growthRate
}) => (
  <div>
    <div className="flex justify-between mb-1">
      <div className="text-sm font-medium">{industry}</div>
      <div className="text-sm text-secondary-600">{growthRate}%</div>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-2 bg-secondary-500 rounded-full"
        style={{ width: `${growthRate}%` }}
      ></div>
    </div>
  </div>
)

export default MarketGrowthBar
