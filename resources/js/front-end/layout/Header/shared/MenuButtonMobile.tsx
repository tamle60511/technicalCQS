import React from 'react';
import { LucideIcon } from 'lucide-react';


interface TechnicalButtonProps {
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
  activeIcon?: LucideIcon;
  className?: string;
  activeClassName?: string;
  srTextActive: string;
  srTextInactive: string;
}

const TechnicalButton: React.FC<TechnicalButtonProps> = ({
  icon: Icon,
  activeIcon: ActiveIcon,
  isActive,
  onClick,
  className = '',
  activeClassName = '',
  srTextActive,
  srTextInactive
}) => {

  const DisplayIcon = isActive && ActiveIcon ? ActiveIcon : Icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        rounded-sm
        border
        border-neutral-300
        p-2
        text-neutral-600
        transition-all
        duration-300
        hover:bg-neutral-100
        hover:text-neutral-800
        active:scale-95
        ${isActive ? activeClassName : className}
      `}
      aria-expanded={isActive}
      aria-label={isActive ? srTextActive : srTextInactive}
    >
      {/* Screen Reader Text */}
      <span className="sr-only">
        {isActive ? srTextActive : srTextInactive}
      </span>

      {/* Technical Corner Accents */}
      <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-neutral-400/30"></div>
      <div className="absolute right-0 bottom-0 h-1.5 w-1.5 border-r border-b border-neutral-400/30"></div>

      {/* Dynamic Icon */}
      <DisplayIcon
        className="h-5 w-5 transition-transform"
        aria-hidden="true"
      />
    </button>
  );
};

export default TechnicalButton;
