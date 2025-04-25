
import React, { useState } from 'react';
import { Play, Clock } from 'lucide-react';
import VideoModal from '@/front-end/components/ui/Video/VideoModal';

const VideoThumbnail = () => {
    const [playPromoVideo, setPlayPromoVideo] = useState(false);

    const handleVideoPlay = () => {
        setPlayPromoVideo(true);
        // Add any additional logic for playing the video
    };

    return (
        <div className="p-4">
            <div
                className="relative group cursor-pointer rounded-sm overflow-hidden border border-neutral-200 z-10"
                onClick={handleVideoPlay}
            >
                <img
                    src='images/banner.jpg'
                    alt="CQS Manufacturing Facility"
                    className="w-full h-auto object-cover"
                />

                {/* Technical overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/50 opacity-70"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/50 opacity-70"></div>

                {/* Play button with technical styling */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <button
                        className="w-16 h-16 bg-black/40 backdrop-blur-sm border border-white/30 rounded-sm flex items-center justify-center group-hover:bg-primary-600/80 transition-colors"
                        onClick={handleVideoPlay}
                    >
                        <Play className="text-white ml-1" size={26} />
                    </button>
                </div>

                {/* Technical metrics readout */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-bold flex items-center mb-1">
                        <div className="w-1 h-4 bg-primary-500 mr-2"></div>
                        One-Stop Manufacturing Services
                    </h3>
                    <p className="text-white/80 text-sm ml-3 mb-2">
                        From die-casting to assembly, discover our comprehensive production capabilities
                    </p>

                    {/* Technical specs badges */}
                    <div className="flex space-x-3 ml-3">
                        <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/20 text-white text-xs font-mono">
                            RES: 1920x1080
                        </div>
                        <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/20 text-white text-xs font-mono flex items-center">
                            <Clock size={10} className="mr-1" />
                            DURATION: 03:24
                        </div>
                    </div>
                </div>
            </div>

          {/* Promotional Video Modal with technical styling */}
          <VideoModal
                isOpen={playPromoVideo}
                onClose={() => setPlayPromoVideo(false)}
                videoSrc="/path/to/company-intro.mp4"
                title="CQS_MANUFACTURING_PROCESS.MP4"
                resolution="1920x1080"
            />
        </div>
    );
};

export default VideoThumbnail;
