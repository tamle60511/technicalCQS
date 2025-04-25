import React from 'react'

interface CertificationInfo {
    code: string
    title: string
  }



  const CertificationCard: React.FC<CertificationInfo> = ({ code, title }) => {
    return (
      <div className="p-4 border border-gray-200 w-32 h-32 flex items-center justify-center hover:bg-gray-50 transition-colors">
        <div className="text-center">
          <div className="text-secondary-700 font-bold mb-1">{code}</div>
          <div className="text-xs text-gray-500">{title}</div>
        </div>
      </div>
    )
  }

export default CertificationCard
