import React from 'react'

interface InsightItem {
    icon: React.ElementType
    title: string
    description: string
  }

const InsightListItem: React.FC<InsightItem> = ({
  icon: Icon,
  title,
  description
}) => (
  <div className="flex items-start">
    <Icon className="w-5 h-5 text-secondary-600 mt-0.5 mr-3 flex-shrink-0" />
    <div>
      <div className="font-medium text-primary-900">{title}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
)

export default InsightListItem
