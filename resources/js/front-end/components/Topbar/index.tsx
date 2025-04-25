// components/TopBar/index.tsx
import React, { useState, useEffect, useMemo } from 'react';
import {
  Mail,
  PhoneCall,
  Clock,
  Terminal,
  Server,
} from 'lucide-react';
import ContactInfo from './shared/ContactInfo';
import LanguageSelector from './shared/LanguageSelector';
import HelpButton from '../ui/Button/HelpButton';
import { useTopBarLogic } from './hooks/useTopBarlogic';


// Main TopBar Component
const TopBar: React.FC = () => {
  const {currentTime,
    isConnected,
    isLoaded,
    currentYear,
    languageConfigs,
    resetConnection   } = useTopBarLogic();

  return (
    <div
      className="relative bg-neutral-900 border-b border-neutral-700
      overflow-hidden"
    >
      {/* Technical Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none
        bg-[linear-gradient(to_right,#333_1px,transparent_1px),
        linear-gradient(to_bottom,#333_1px,transparent_1px)]
        [background-size:20px_20px] z-0"
      />

      {/* Horizontal Scanning Line */}
      <div
        className="absolute left-0 right-0 h-px bg-primary-500/30
        pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex justify-between items-center h-9">
          {/* Left Section */}
          <div
            className={`flex items-center space-x-4 md:space-x-6
            transition-all duration-700 ${
              isLoaded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`}
          >
            {/* Technical Identifier */}
            <div
              className="flex items-center text-neutral-500 text-[10px]
              font-mono pr-2 border-r border-neutral-700"
            >
              <Terminal size={10} className="mr-1 text-primary-500" />
              <span>CQS.{currentYear}</span>
            </div>

            {/* Contact Information */}
            <ContactInfo
              icon={<PhoneCall size={14} />}
              href="tel:+84 251 3981689"
              text="+84 251 3981689"
              code="TEL-01"
            />

            <div className="hidden sm:block">
              <ContactInfo
                icon={<Mail size={14} />}
                href="mailto:support@company.com"
                text="support@company.com"
                code="MAIL-01"
              />
            </div>
          </div>

          {/* Right Section */}
          <div
            className={`flex items-center space-x-3 md:space-x-4
            transition-all duration-700 ${
              isLoaded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-4'
            }`}
          >
            {/* System Status */}
            <div className="hidden md:flex items-center space-x-3 mr-2">
              {/* Server Status */}
              <div
                className="flex items-center text-[10px] font-mono
                text-neutral-500"
              >
                <Server size={10} className="mr-1" />
                <span>SYS:</span>
                <div
                  className={`ml-1 flex items-center ${
                    isConnected
                      ? 'text-emerald-500'
                      : 'text-red-500'
                  }`}
                >
                  <span className="mr-1">
                    {isConnected ? 'ONLINE' : 'CHECKING'}
                  </span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      isConnected
                        ? 'bg-emerald-500'
                        : 'bg-red-500 animate-pulse'
                    }`}
                  />
                </div>
              </div>

              {/* Current Time */}
              <div
                className="flex items-center text-[10px]
                font-mono text-neutral-500"
              >
                <Clock size={10} className="mr-1" />
                <span>{currentTime}</span>
              </div>
            </div>

            {/* Language Selectors */}
            <div className="flex items-center space-x-2">
              {languageConfigs.map((config, index) => (
                <React.Fragment key={config.code}>
                  {index > 0 && (
                    <div className="h-3 w-px bg-neutral-700" />
                  )}
                  <LanguageSelector {...config} />
                </React.Fragment>
              ))}
            </div>

            {/* Help Button */}
          <HelpButton />
          </div>
        </div>
      </div>



    </div>
  );
};

export default TopBar;
