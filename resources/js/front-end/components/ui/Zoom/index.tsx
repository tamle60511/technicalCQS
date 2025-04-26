// components/ImageZoomModal.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  Minimize2,
  Terminal,
  Cpu
} from 'lucide-react';

interface ImageZoomModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    title?: string;
    resolution?: string;
    description?: string;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
    isOpen,
    onClose,
    imageSrc,
    title = 'IMAGE_PREVIEW',
    resolution = '1920x1080',
    description = ''
}) => {
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Reset transformations
    const resetTransform = () => {
        setZoom(1);
        setRotation(0);
        setPosition({ x: 0, y: 0 });
    };

    // Zoom handlers
    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev * 1.2, 3));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev / 1.2, 1));
    };

    // Rotation handlers
    const handleRotateLeft = () => {
        setRotation(prev => prev - 90);
    };

    const handleRotateRight = () => {
        setRotation(prev => prev + 90);
    };

    // Drag handling
    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoom > 1) {
            setIsDragging(true);
            e.preventDefault();
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && zoom > 1) {
            setPosition(prev => ({
                x: prev.x + e.movementX,
                y: prev.y + e.movementY
            }));
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Close handler
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="relative w-full max-w-4xl">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute -top-12 right-0 text-white hover:text-primary-500 transition-colors flex items-center font-mono text-sm"
                >
                    <Terminal size={14} className="mr-1.5" />
                    CLOSE_IMAGE //
                </button>

                {/* Image Container */}
                <div
                    ref={containerRef}
                    className="aspect-video w-full bg-black relative overflow-hidden rounded-sm"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {/* Technical frame around image */}
                    <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-primary-500/70"></div>
                    <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-primary-500/70"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-primary-500/70"></div>
                    <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-primary-500/70"></div>

                    {/* Image with Transformations */}
                    <img
                        ref={imageRef}
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-contain cursor-move"
                        style={{
                            transform: `scale(${zoom}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`,
                            transition: isDragging ? 'none' : 'transform 0.3s ease',
                            transformOrigin: 'center center'
                        }}
                    />

                    {/* Technical header for image */}
                    <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2 flex justify-between items-center">
                        <div className="text-primary-400 text-xs font-mono flex items-center">
                            <Cpu size={12} className="mr-1.5" />
                            {title}
                        </div>
                        <div className="text-white/60 text-xs font-mono">RES: {resolution}</div>
                    </div>

                    {/* Description */}
                    {description && (
                        <div className="absolute bottom-16 left-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-sm">
                            <p className="text-white/80 text-xs">{description}</p>
                        </div>
                    )}

                    {/* Control Buttons */}
                    <div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2
                        flex space-x-2 bg-white/20 rounded-full p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleZoomIn}
                            className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white"
                            aria-label="Zoom In"
                        >
                            <ZoomIn size={20} />
                        </button>
                        <button
                            onClick={handleZoomOut}
                            className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white"
                            aria-label="Zoom Out"
                        >
                            <ZoomOut size={20} />
                        </button>
                        <button
                            onClick={handleRotateLeft}
                            className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white"
                            aria-label="Rotate Left"
                        >
                            <RotateCcw size={20} />
                        </button>
                        <button
                            onClick={handleRotateRight}
                            className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white"
                            aria-label="Rotate Right"
                        >
                            <RotateCw size={20} />
                        </button>
                        <button
                            onClick={resetTransform}
                            className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white"
                            aria-label="Reset"
                        >
                            <Minimize2 size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageZoomModal;



