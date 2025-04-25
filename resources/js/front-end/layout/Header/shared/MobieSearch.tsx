import { Search } from 'lucide-react'
import React from 'react'

type Props = {}

const MobieSearch = (props: Props) => {
  return (
    <div className="border-t border-neutral-200 px-2 pt-1 pb-3 md:hidden">
    <div className="focus-within:border-primary-500 flex items-center overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
        <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent px-3 py-2 text-sm text-neutral-800 focus:outline-none"
        />
        <button className="hover:text-primary-600 px-3 text-neutral-500">
            <Search size={16} />
        </button>
    </div>
</div>
  )
}

export default MobieSearch
