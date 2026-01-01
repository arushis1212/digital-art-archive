'use client';

import { motion } from 'framer-motion';

interface ArtFrameProps {
    imageSrc: string;
    title: string;
    artist: string;
    variant?: 'wood' | 'gold' | 'black';
    onClick?: () => void;
    layoutId?: string;
    showInfo?: boolean;
    imageCredit?: string;
}

export default function ArtFrame({
    imageSrc,
    title,
    artist,
    variant = 'wood',
    onClick,
    layoutId,
    showInfo = true,
    imageCredit
}: ArtFrameProps) {

    const getFrameStyles = (type: 'wood' | 'gold' | 'black') => {
        if (type === 'gold') {
            // Antique Gold: softer, matte, less high-contrast shadow
            return 'bg-[#C5A059] shadow-lg border-[1px] border-[#A88B50]';
        }
        if (type === 'black') {
            return 'bg-neutral-900 border-[1px] border-neutral-700 shadow-lg';
        }
        // Dark Wood (Mahogany)
        return 'bg-[#4a3728] shadow-lg border-[1px] border-[#3e2b1e]';
    };

    return (
        <div className={`flex flex-col items-center break-inside-avoid ${showInfo ? 'mb-12' : ''}`}>
            {/* Frame Container */}
            <motion.div
                layoutId={layoutId}
                className={`p-[12px] ${getFrameStyles(variant)} relative cursor-pointer shadow-black/10 group/frame`}
                onClick={onClick}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                {/* Matting: Pure White */}
                <div className="bg-white p-8 border border-neutral-200 shadow-inner relative">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="h-full w-auto max-h-[65vh] object-contain max-w-full shadow-sm"
                    />
                    {imageCredit && (
                        <span className="absolute bottom-1 left-0 right-0 md:left-auto md:right-2 md:w-auto md:max-w-[70%] text-[10px] uppercase text-neutral-400 opacity-60 px-4 md:px-0 text-center md:text-right whitespace-normal break-words z-0 leading-tight pb-1">
                            {imageCredit}
                        </span>
                    )}
                </div>
            </motion.div>

            {/* Placard: Clean, minimal, academic */}
            {showInfo && (
                <div className="mt-6 text-center max-w-[90%]">
                    <h3 className="text-[#2C2A29] font-bold font-serif text-lg mb-1">{title}</h3>
                    <p className="text-[#6B6866] font-sans text-xs uppercase tracking-widest">{artist}</p>
                </div>
            )}
        </div>
    );
}
