import React from 'react'

type Props = {}

const ContactInfo: React.FC<{ icon: React.ReactNode; href: string; text: string }> = ({
    icon, href, text
  }) => (
    <div className="flex items-center text-neutral-400 text-sm gap-2 hover:text-primary-500 transition-colors">
      {icon}
      <a href={href} className="font-medium">{text}</a>
    </div>
  );
export  default ContactInfo
