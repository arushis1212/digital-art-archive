'use client';

import type { ArtPiece } from '@/types/art';
import ArtCard from './ArtCard';

interface MasonryGridProps {
    items: ArtPiece[];
    onSelect: (art: ArtPiece) => void;
}

export default function MasonryGrid({ items, onSelect }: MasonryGridProps) {
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 p-4 md:p-8">
            {items.map((item) => (
                <div key={item.id} className="break-inside-avoid">
                    <ArtCard art={item} onClick={onSelect} />
                </div>
            ))}
        </div>
    );
}
