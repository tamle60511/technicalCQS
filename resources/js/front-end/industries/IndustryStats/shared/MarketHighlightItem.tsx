import React from 'react'

interface MarketHighlight {
    value: string
    description: string
  }


const MarketHighlightItem: React.FC<MarketHighlight> = ({
  value,
  description
}) => (
  <div>
    <div className="text-2xl font-bold text-secondary-600">{value}</div>
    <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: description }}></div>
  </div>
)

export default MarketHighlightItem
