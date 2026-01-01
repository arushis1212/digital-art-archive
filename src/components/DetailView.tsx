'use client';

import { motion } from 'framer-motion';
import { X, Info, PenTool, BookOpen, Clock } from 'lucide-react';
import { ArtPiece } from '@/types/art';

interface DetailViewProps {
    art: ArtPiece;
    onClose: () => void;
}

export default function DetailView({ art, onClose }: DetailViewProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div
                className="absolute inset-0"
                onClick={onClose}
                aria-label="Close overlay"
            />
            <motion.div
                layoutId={`card-${art.id}`}
                className="relative z-10 w-full max-w-5xl bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl flex flex-col md:flex-row h-[85vh]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Left Side: Image */}
                <div className="md:w-1/2 h-40 md:h-full relative bg-zinc-950 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-zinc-800">
                    {/* Replicate the Frame */}
                    <div className={`relative ${getFrameClasses(art.frameType)} shadow-xl max-h-full max-w-full`}>
                        <motion.img
                            layoutId={`image-${art.id}`}
                            src={art.image}
                            alt={art.title}
                            className="max-h-full object-contain"
                            style={{ maxHeight: 'calc(80vh - 4rem)' }}
                        />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-center">
                        <motion.h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1 drop-shadow-md">
                            {art.title}
                        </motion.h2>
                        <p className="text-zinc-400">{art.artist}, {art.year}</p>
                    </div>
                </div>

                {/* Right Side: 4 Quadrants */}
                <div className="md:w-1/2 h-full overflow-y-auto p-6 bg-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 1. Form */}
                    <div className="p-4 bg-zinc-950/50 rounded border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <div className="flex items-center gap-2 mb-2 text-gold-500 text-amber-500 section-header">
                            <PenTool size={18} />
                            <h3 className="font-bold text-lg uppercase tracking-wider text-amber-500">Form</h3>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed">{art.details.form}</p>
                    </div>

                    {/* 2. Function */}
                    <div className="p-4 bg-zinc-950/50 rounded border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <div className="flex items-center gap-2 mb-2 text-blue-400 section-header">
                            <Clock size={18} /> {/* Using Clock or Settings icon for Function usually, lets stick to generic or Tool? */}
                            <h3 className="font-bold text-lg uppercase tracking-wider text-blue-400">Function</h3>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed">{art.details.function}</p>
                    </div>

                    {/* 3. Content */}
                    <div className="p-4 bg-zinc-950/50 rounded border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <div className="flex items-center gap-2 mb-2 text-emerald-400 section-header">
                            <BookOpen size={18} />
                            <h3 className="font-bold text-lg uppercase tracking-wider text-emerald-400">Content</h3>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed">{art.details.content}</p>
                    </div>

                    {/* 4. Context */}
                    <div className="p-4 bg-zinc-950/50 rounded border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <div className="flex items-center gap-2 mb-2 text-purple-400 section-header">
                            <Info size={18} />
                            <h3 className="font-bold text-lg uppercase tracking-wider text-purple-400">Context</h3>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed">{art.details.context}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function getFrameClasses(type: string) {
    // Duplicate logic from ArtCard, but simpler just for classes
    switch (type) {
        case 'gold':
            return 'border-[12px] border-[#d4af37] bg-[#2a2a2a]';
        case 'wood':
            return 'border-[12px] border-[#5d4037] bg-[#2a2a2a]';
        case 'black':
            return 'border-[12px] border-black bg-[#1a1a1a]';
        default:
            return 'border-[8px] border-gray-700';
    }
}
