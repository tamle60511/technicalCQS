
import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import Video from '../images/cnc.mp4';
import Banner from '../images/banner.jpg'
import { ChevronRight, PlayCircle, X } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [playPromoVideo, setPlayPromoVideo] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden hero h-[85vh]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">

          <source src={Video} type="video/mp4" />
          <img
            src={Banner}
            alt="World's Leading Industry Corporation"
            className="w-full h-full object-cover"
          />
        {/* </video> */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<<<<<<< HEAD
          <div className={`lg:col-span-7 transition-all duration-1000 ${
=======
          <div className={`lg:col-span-7 2xl:col-span-6 transition-all duration-1000 ${
>>>>>>> 31c34cda01e4af463bbd4d32ccd28542df0dda5e
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Tech-style badge */}
            <div className="inline-flex items-center mb-6 bg-neutral-800/70 backdrop-blur-sm px-4 py-2 rounded-sm border border-neutral-700">
              <span className="h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
              <p className="text-white font-medium text-sm tracking-wider uppercase">
                CREATIVITY • QUALITY • SUSTAINABILITY
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 tracking-tight">
              Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Aluminum</span> Die Casting Solutions
            </h1>

            <p className="text-white/90 text-lg max-w-xl leading-relaxed mb-8">
              Providing comprehensive "one-stop" services from die-casting to assembly for automotive and motorcycle components with exceptional quality and precision.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/technologies"
                className="inline-flex items-center justify-center px-6 py-3
                bg-gradient-to-r from-primary-600 to-primary-700 text-white
                font-medium tracking-wide rounded-sm border border-primary-700
                hover:from-primary-700 hover:to-primary-800 transition-all
                shadow-lg hover:shadow-primary-900/30 group"
              >
                Discover Our Technologies
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => setPlayPromoVideo(true)}
                className="inline-flex items-center justify-center px-6 py-3
                bg-neutral-800/70 backdrop-blur-sm text-white border border-neutral-700
                font-medium tracking-wide rounded-sm hover:bg-neutral-700/70 transition-all"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Manufacturing Process
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technical bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-primary-900/20 to-primary-700/20 z-20">
        <div className="h-full w-full flex">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-full flex-1 border-l border-r border-white/5"></div>
          ))}
        </div>
      </div>

      {/* Promotional Video Modal */}
      {playPromoVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setPlayPromoVideo(false)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setPlayPromoVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary-500 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full bg-black">
              <video
                autoPlay
                controls
                className="w-full h-full object-contain"
              >
                <source src="/path/to/company-intro.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
