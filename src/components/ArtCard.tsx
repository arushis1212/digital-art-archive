'use client';

import { motion } from 'framer-motion';
import { ArtPiece } from '@/types/art';

interface ArtCardProps {
    art: ArtPiece;
    onClick: (art: ArtPiece) => void;
}

export default function ArtCard({ art, onClick }: ArtCardProps) {
    const getFrameStyle = (type: string) => {
        switch (type) {
            case 'gold':
                return 'border-[12px] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-[#2a2a2a]';
            case 'wood':
                return 'border-[12px] border-[#5d4037] shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-[#2a2a2a]';
            case 'black':
                return 'border-[12px] border-black shadow-[0_0_10px_rgba(255,255,255,0.1)] bg-[#1a1a1a]';
            default:
                return 'border-[8px] border-gray-700';
        }
    };

    return (
        <motion.div
            layoutId={`card-${art.id}`}
            className={`relative cursor-pointer overflow-hidden rounded-sm ${getFrameStyle(art.frameType)}`}
            onClick={() => onClick(art)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
                {/* Placeholder for image - using a div with gradient for now if image fails or is placebo */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">{art.title}</span>
                </div>
                {/* Actual Image Tag */}
                {art.image && (
                    <motion.img
                        layoutId={`image-${art.id}`}
                        src={art.image}
                        alt={art.title}
                        className="h-full w-full object-cover"
                    />
                )}
            </div>
            <div className="bg-black/50 p-2 text-center">
                <h3 className="text-sm font-serif font-bold text-white/90">{art.title}</h3>
                <p className="text-xs text-white/70">{art.artist}</p>
            </div>
        </motion.div>
    );
}
