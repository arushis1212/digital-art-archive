'use client';

import Link from 'next/link';
import ArtFrame from './ArtFrame';
import { ArtData } from '@/data/artworks';

interface GalleryGridProps {
    artworks: ArtData[];
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
    if (artworks.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 opacity-60">
                <p className="font-serif italic text-xl text-muted-foreground">No masterpieces found.</p>
            </div>
        );
    }

    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 p-4 md:p-12">
            {artworks.map((art) => (
                <div key={art.id} className="break-inside-avoid">
                    <Link href={`/art/${art.id}`}>
                        <ArtFrame
                            imageSrc={art.images[0]}
                            title={art.title}
                            artist={art.artist}
                            variant={art.variant}
                        // layoutId={`frame-${art.id}`} // Optional: keep for shared layout transition if we enable it
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}
