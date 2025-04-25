
import React from 'react';
import { Terminal, Cpu } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
    title?: string;
    resolution?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
    isOpen,
    onClose,
    videoSrc,
    title = 'CQS_MANUFACTURING_PROCESS.MP4',
    resolution = '1920x1080'
}) => {
    if (!isOpen) return null;

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="relative w-full max-w-4xl">
                <button
                    onClick={handleClose}
                    className="absolute -top-12 right-0 text-white hover:text-primary-500 transition-colors flex items-center font-mono text-sm"
                >
                    <Terminal size={14} className="mr-1.5" />
                    CLOSE_VIDEO //
                </button>
                <div className="aspect-video w-full bg-black relative overflow-hidden">
                    {/* Technical frame around video */}
                    <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-primary-500/70"></div>
                    <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-primary-500/70"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-primary-500/70"></div>
                    <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-primary-500/70"></div>

                    <video
                        autoPlay
                        controls
                        className="w-full h-full object-contain"
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support video playback.
                    </video>

                    {/* Technical header for video */}
                    <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2 flex justify-between items-center">
                        <div className="text-primary-400 text-xs font-mono flex items-center">
                            <Cpu size={12} className="mr-1.5" />
                            {title}
                        </div>
                        <div className="text-white/60 text-xs font-mono">RES: {resolution}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
