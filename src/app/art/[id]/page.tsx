import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { artworks } from '@/data/artworks';
import SingleArtView from '@/components/SingleArtView';

export async function generateStaticParams() {
    return artworks.map((art) => ({
        id: art.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const art = artworks.find((a) => a.id === id);

    if (!art) {
        return {
            title: 'Artwork Not Found | AP Art History 250 Archive',
        };
    }

    const title = `${art.title} - ${art.artist} | AP Art History 250 Archive`;
    const description = `Explore the Form, Function, Content, and Context of ${art.title}. Learn the history and significance of this AP Art History 250 masterpiece.`;

    return {
        title,
        description,
        keywords: [art.title, art.artist, 'AP Art History', 'Art History 250', art.unit],
        openGraph: {
            title,
            description,
            type: 'article',
            images: art.images[0] ? [{ url: art.images[0] }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    };
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

    // JSON-LD Structured Data for Schema.org/VisualArtwork
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        "name": art.title,
        "creator": {
            "@type": "Person",
            "name": art.artist
        },
        "description": art.story,
        "artMedium": art.collegeBoardLine,
        "image": art.images[0],
        "about": art.unit,
        "isPartOf": {
            "@type": "Collection",
            "name": "AP Art History 250 Required Works"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SingleArtView art={art} prevArt={prevArt} nextArt={nextArt} />
        </>
    );
}
