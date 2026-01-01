'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ArtData {
    id: string;
    title: string;
    artist: string;
    imageSrc: string;
    variant: 'wood' | 'gold';
    details: {
        form: string;
        function: string;
        content: string;
        context: string;
    };
}

interface CuratorModalProps {
    art: ArtData;
    onClose: () => void;
}

export default function CuratorModal({ art, onClose }: CuratorModalProps) {
    const getFrameStyles = (type: 'wood' | 'gold') => {
        if (type === 'gold') {
            return 'bg-gradient-to-br from-yellow-700 via-yellow-400 to-yellow-700 border-yellow-900';
        }
        return 'bg-[#8B5E3C] border-[#5d4037]';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            <motion.div
                layoutId={`frame-${art.id}`}
                className="relative z-10 w-full max-w-4xl bg-[#121212] rounded-sm overflow-hidden flex flex-col max-h-[95vh] shadow-2xl"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="overflow-y-auto custom-scrollbar">
                    {/* Top Section: The Art (Expanded Frame) */}
                    <div className="relative w-full p-8 md:p-12 bg-[#09090b] flex flex-col items-center">
                        <div className={`p-[16px] ${getFrameStyles(art.variant)} shadow-2xl relative`}>
                            <div className="bg-[#fdfbf7] p-8 md:p-12 border-2 border-[#2a2a2a]">
                                <motion.img
                                    src={art.imageSrc}
                                    alt={art.title}
                                    className="block max-h-[50vh] w-auto shadow-inner"
                                />
                            </div>
                        </div>
                        <div className="mt-8 text-center text-[#E0E0E0]">
                            <h2 className="text-3xl font-serif font-bold italic mb-2 tracking-wide">{art.title}</h2>
                            <p className="text-sm font-sans uppercase tracking-widest text-[#d4af37]">{art.artist}</p>
                        </div>
                    </div>

                    {/* Bottom Section: The Curator's Desk (2x2 Grid) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
                        {/* Form */}
                        <div className="p-8 border-b md:border-b-0 border-white/10 md:border-r">
                            <h3 className="text-xl font-serif font-bold text-[#d4af37] mb-3">Form</h3>
                            <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                                {art.details.form}
                            </p>
                        </div>

                        {/* Function */}
                        <div className="p-8 border-b md:border-b-0 border-white/10">
                            <h3 className="text-xl font-serif font-bold text-[#d4af37] mb-3">Function</h3>
                            <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                                {art.details.function}
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-8 border-b md:border-b-0 border-white/10 md:border-r md:border-t">
                            <h3 className="text-xl font-serif font-bold text-[#d4af37] mb-3">Content</h3>
                            <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                                {art.details.content}
                            </p>
                        </div>

                        {/* Context */}
                        <div className="p-8 md:border-t border-white/10">
                            <h3 className="text-xl font-serif font-bold text-[#d4af37] mb-3">Context</h3>
                            <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                                {art.details.context}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
