import React from 'react'

interface LanguageSelectorProps {
  language: string;
  href: string;
  isActive?: boolean;
  code?: string;
}


const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  href,
  isActive = false,
  code
}) => (
  <a
    href={href}
    className={`flex items-center text-xs group relative ${
      isActive
        ? 'text-primary-400'
        : 'text-neutral-300 hover:text-primary-400'
    } transition-colors`}
  >
    <span className="group-hover:underline">{language}</span>
    {code && (
      <span
        className="ml-1 font-mono text-[10px]
        text-neutral-500 group-hover:text-neutral-400"
      >
        {code}
      </span>
    )}
    {isActive && (
      <div
        className="absolute -bottom-[9px] left-0
        right-0 h-0.5 bg-primary-500"
      ></div>
    )}
  </a>
);

export default LanguageSelector
