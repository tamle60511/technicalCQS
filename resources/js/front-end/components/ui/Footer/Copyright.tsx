import { Link } from '@inertiajs/react';
import React from 'react'


interface NavLink {
    text: string;
    url: string;
}
const legalLinks: NavLink[] = [
    { text: 'Privacy Policy', url: '/privacy-policy' },
    { text: 'Terms of Service', url: '/terms-of-service' },
    { text: 'Cookie Policy', url: '/cookie-policy' },
];
const Copyright = () => {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 flex flex-col items-center justify-between md:flex-row">
    <p className="mb-4 text-gray-500 md:mb-0 text-sm">© {new Date().getFullYear()} CQS Corporation. All rights reserved.</p>
    <div className="flex flex-wrap justify-center gap-6">
        {legalLinks.map((link, index) => (
            <React.Fragment key={link.text}>
                <Link href={link.url} className="text-gray-500 transition hover:text-primary-400 text-sm">
                    {link.text}
                </Link>
                {index < legalLinks.length - 1 && (
                    <span className="text-gray-700">|</span>
                )}
            </React.Fragment>
        ))}
    </div>
</div>
  )
}

export default Copyright
