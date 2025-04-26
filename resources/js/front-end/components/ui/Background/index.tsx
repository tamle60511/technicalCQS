import React from 'react';

interface ServiceBackgroundProps {
  isScanning: boolean;
}

const Background: React.FC<ServiceBackgroundProps> = ({ isScanning }) => (
  <>
    {/* Technical background patterns */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#222_50px,#222_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#222_50px,#222_51px,transparent_51px)] [background-size:50px_50px] opacity-5"></div>

    {/* Horizontal scanning line */}
    <div
      className={`bg-primary-400/30 pointer-events-none absolute right-0 left-0 h-px transition-all duration-1000 ease-in-out ${isScanning ? 'top-0' : 'top-full'}`}
    ></div>

    {/* Technical corner accents */}
    <div className="border-primary-600/20 absolute top-0 left-0 h-40 w-40 border-t border-l opacity-60"></div>
    <div className="border-primary-600/20 absolute right-0 bottom-0 h-40 w-40 border-r border-b opacity-60"></div>

    {/* Technical measurement lines */}
    <div className="pointer-events-none absolute top-0 bottom-0 left-10 flex w-0.5 flex-col opacity-30">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="border-primary-600/30 relative flex-1 border-b">
          {i % 2 === 0 && <div className="bg-primary-600/50 absolute bottom-0 left-0 h-0.5 w-2"></div>}
        </div>
      ))}
    </div>
  </>
);

export default Background;
