import React from 'react'

interface ContactInfoProps {
    icon: React.ReactNode;
    href: string;
    text: string;
    code?: string;
  }

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  href,
  text,
  code
}) => (
  <a
    href={href}
    className="flex items-center space-x-2 text-neutral-300
    hover:text-primary-400 transition-colors text-sm group"
  >
    <div className="text-primary-500">{icon}</div>
    <span className="group-hover:underline">{text}</span>
    {code && (
      <span
        className="hidden md:inline-block text-[10px]
        font-mono text-neutral-500 group-hover:text-neutral-400"
      >
        {code}
      </span>
    )}
  </a>
);

export default ContactInfo
