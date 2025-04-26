import { BarChart2, Database } from 'lucide-react';
import React from 'react'



const TabHeader = ({
    activeTab,
    onTabChange
  }: {
    activeTab: 'info' | 'stats',
    onTabChange: (tab: 'info' | 'stats') => void
  }) => (
    <div className="border-b border-neutral-200">
      <div className="flex">
        {[
          {
            key: 'info',
            label: 'Company Profile',
            icon: Database
          },
          {
            key: 'stats',
            label: 'Global Presence',
            icon: BarChart2
          }
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onTabChange(key as 'info' | 'stats')}
            className={`flex items-center px-4 py-3 text-sm font-medium ${
              activeTab === key
                ? 'border-b-2 border-primary-600 text-primary-600'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Icon size={16} className="mr-2" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
export default TabHeader
