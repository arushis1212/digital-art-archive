'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ArtFrame from '@/components/ArtFrame';
import { ArtData } from '@/data/artworks';

interface SingleArtViewProps {
    art: ArtData;
    prevArt: ArtData;
    nextArt: ArtData;
}

export default function SingleArtView({ art, prevArt, nextArt }: SingleArtViewProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 font-sans pb-24">

            {/* Navigation */}
            <div className="fixed top-6 left-6 z-50">
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors uppercase text-xs tracking-widest pl-2 pr-4 py-2 hover:bg-black/5 rounded-full"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Return to Gallery</span>
                </Link>
            </div>

            {/* Top Section: Art */}
            <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-20 px-4">

                {/* Wall Space Container */}
                <div className="flex justify-center items-center h-[70vh] w-full p-8">
                    <ArtFrame
                        imageSrc={art.images[selectedImageIndex]}
                        title={art.title}
                        artist={art.artist}
                        variant={art.variant}
                        showInfo={false}
                        imageCredit={art.imageCredits[selectedImageIndex] || art.imageCredits[0]}
                    />
                </div>

                {/* Curator Tray (Thumbnails) */}
                {art.images.length > 1 && (
                    <div className="flex gap-4 mt-6 mb-8">
                        {art.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImageIndex(index)}
                                className={`relative h-20 w-20 overflow-hidden rounded-sm border-2 transition-all duration-300 ${index === selectedImageIndex
                                    ? 'border-accent opacity-100 scale-105'
                                    : 'border-white opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`View ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}

                {/* Typography with added margin */}
                <div className="text-center space-y-4 max-w-2xl mt-8">
                    <h1 className="text-2xl md:text-6xl font-serif text-foreground font-medium mb-2 break-words">
                        {art.title}
                    </h1>

                    {/* College Board Line */}
                    <p className="font-serif italic text-neutral-500 text-lg md:text-xl leading-relaxed">
                        {art.collegeBoardLine}
                    </p>
                </div>
            </section>

            {/* Bottom Section: FFCC Grid */}
            <section className="bg-secondary/30 border-t border-border py-24">
                <div className="container mx-auto max-w-6xl px-6">

                    {/* Summary Section */}
                    {/* Curator Note / Story Section */}
                    <div className="mb-16 max-w-3xl mx-auto text-center">
                        <div className="inline-block border-y border-accent/30 py-6 px-8 bg-secondary/10">
                            <span className="block text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
                                Curator Note
                            </span>
                            <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-foreground opacity-90">
                                "{art.story}"
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Form */}
                        <div className="relative p-8 border border-border bg-white rounded-sm shadow-sm">
                            <h3 className="sticky top-0 text-xs font-bold text-accent uppercase tracking-widest mb-4 bg-white inline-block px-2 py-1 rounded">
                                Form
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                {art.ffcc.form.map((item, i) => (
                                    <li key={i} className="text-foreground font-serif text-lg leading-relaxed opacity-90">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Function */}
                        <div className="relative p-8 border border-border bg-white rounded-sm shadow-sm">
                            <h3 className="sticky top-0 text-xs font-bold text-accent uppercase tracking-widest mb-4 bg-white inline-block px-2 py-1 rounded">
                                Function
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                {art.ffcc.function.map((item, i) => (
                                    <li key={i} className="text-foreground font-serif text-lg leading-relaxed opacity-90">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Content */}
                        <div className="relative p-8 border border-border bg-white rounded-sm shadow-sm">
                            <h3 className="sticky top-0 text-xs font-bold text-accent uppercase tracking-widest mb-4 bg-white inline-block px-2 py-1 rounded">
                                Content
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                {art.ffcc.content.map((item, i) => (
                                    <li key={i} className="text-foreground font-serif text-lg leading-relaxed opacity-90">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Context */}
                        <div className="relative p-8 border border-border bg-white rounded-sm shadow-sm">
                            <h3 className="sticky top-0 text-xs font-bold text-accent uppercase tracking-widest mb-4 bg-white inline-block px-2 py-1 rounded">
                                Context
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                {art.ffcc.context.map((item, i) => (
                                    <li key={i} className="text-foreground font-serif text-lg leading-relaxed opacity-90">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-accent/20 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
                <Link href={`/art/${prevArt.id}`} className="flex items-center gap-3 group text-accent font-serif italic hover:text-foreground transition-colors">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <div className="hidden md:block">
                        <span className="block text-xs font-sans not-italic text-muted-foreground/60 uppercase tracking-widest mb-0.5">Previous</span>
                        {prevArt.title}
                    </div>
                </Link>

                <Link href={`/art/${nextArt.id}`} className="flex items-center gap-3 group text-accent font-serif italic hover:text-foreground transition-colors text-right">
                    <div className="hidden md:block">
                        <span className="block text-xs font-sans not-italic text-muted-foreground/60 uppercase tracking-widest mb-0.5">Next</span>
                        {nextArt.title}
                    </div>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </main>
    );
}
