import React from 'react'

interface KeyResult {
    value: string
    label: string
  }

const KeyResultCard: React.FC<KeyResult> = ({ value, label }) => (
  <div className="text-center p-2 bg-white shadow-sm">
    <div className="text-secondary-600 font-bold text-lg">{value}</div>
    <div className="text-gray-600 text-xs">{label}</div>
  </div>
)

export default KeyResultCard
