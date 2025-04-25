import { ExternalLink } from 'lucide-react'
import React from 'react'

type Props = {}

const Newsletter = (props: Props) => {
  return (
    <div className="mt-16 border-t border-neutral-800 pt-8 pb-8">
    <div className="bg-neutral-800 p-6 rounded-sm border border-neutral-700">
        <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-8">
                <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
                <p className="text-gray-400 text-sm">Stay updated with the latest products, technologies, and industry news</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col sm:flex-row">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-neutral-900 border border-neutral-700 rounded-sm py-2 px-4 text-white mb-3 sm:mb-0 sm:mr-2 focus:outline-none focus:border-primary-600"
                />
                <button className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-800 hover:to-primary-700 text-white py-2 px-6 rounded-sm text-sm uppercase tracking-wider font-semibold transition-all flex items-center justify-center border border-primary-800">
                    Subscribe
                    <ExternalLink size={16} className="ml-2" />
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Newsletter
