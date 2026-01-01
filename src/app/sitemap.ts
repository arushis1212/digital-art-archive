import { MetadataRoute } from 'next';
import { artworks } from '@/data/artworks';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://digital-art-archive.vercel.app';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
    ];

    // Dynamic artwork pages
    const artworkPages: MetadataRoute.Sitemap = artworks.map((artwork) => ({
        url: `${baseUrl}/art/${artwork.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...artworkPages];
}
