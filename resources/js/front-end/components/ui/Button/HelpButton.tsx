import { HelpCircle } from 'lucide-react'
import React from 'react'

type Props = {}

const HelpButton = (props: Props) => {
  return (
    <div className="hidden md:flex items-center ">
    <button
      className="flex items-center space-x-1 text-xs
      text-neutral-400 hover:text-primary-400
      transition-colors px-1.5 py-0.5
      border border-transparent hover:border-neutral-700
      rounded-sm hover:cursor-pointer"
    >
      <HelpCircle size={12} />
      <span className="font-mono text-[10px]">HELP</span>
    </button>
  </div>
  )
}

export default HelpButton
