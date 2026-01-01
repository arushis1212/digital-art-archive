import { notFound } from 'next/navigation';
import { artworks } from '@/data/artworks';
import SingleArtView from '@/components/SingleArtView';

export async function generateStaticParams() {
    return artworks.map((art) => ({
        id: art.id,
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const art = artworks.find((a) => a.id === id);

    const currentIndex = artworks.findIndex((a) => a.id === id);

    if (!art) {
        notFound();
    }

    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    const nextIndex = (currentIndex + 1) % artworks.length;
    const prevArt = artworks[prevIndex];
    const nextArt = artworks[nextIndex];

    return <SingleArtView art={art} prevArt={prevArt} nextArt={nextArt} />;
}
