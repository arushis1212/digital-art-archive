'use client';

import { useState } from 'react';
import GalleryGrid from '@/components/GalleryGrid';
import SearchBar from '@/components/SearchBar';
import UnitSelector from '@/components/UnitSelector';
import { artworks } from '@/data/artworks';

const AP_UNITS = [
  'Unit 1: Global Prehistory',
  'Unit 2: Ancient Mediterranean',
  'Unit 3: Early Europe and Colonial Americas',
  'Unit 4: Later Europe and Americas',
  'Unit 5: Indigenous Americas',
  'Unit 6: Africa',
  'Unit 7: West and Central Asia',
  'Unit 8: South, East, and Southeast Asia',
  'Unit 9: The Pacific',
  'Unit 10: Global Contemporary',
];

export default function Home() {
  const [query, setQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  const filteredArtworks = artworks.filter((art) => {
    const q = query.toLowerCase();
    const matchesQuery = (
      art.title.toLowerCase().includes(q) ||
      art.artist.toLowerCase().includes(q) ||
      // Search across all FFCC sections
      [
        ...(art.ffcc.form || []),
        ...(art.ffcc.function || []),
        ...(art.ffcc.content || []),
        ...(art.ffcc.context || [])
      ].join(' ').toLowerCase().includes(q)
    );
    const matchesUnit = selectedUnit ? art.unit === selectedUnit : true;

    return matchesQuery && matchesUnit;
  });

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-500">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-serif font-bold tracking-widest text-accent uppercase">
            ArtHistory250
          </h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-serif mb-4 tracking-wide text-primary">Digital Masterpieces</h2>
          <p className="text-muted-foreground italic font-serif opacity-80 max-w-lg mx-auto mb-8">
            "Every artist dips his brush in his own soul, and paints his own nature into his pictures."
          </p>

          <SearchBar
            searchTerm={query}
            setSearchTerm={(q) => {
              setQuery(q);
              if (q) setSelectedUnit(null);
            }}
          />

          {/* Unit Selector */}
          <UnitSelector
            units={AP_UNITS}
            selectedUnit={selectedUnit}
            onSelect={setSelectedUnit}
          />
        </div>

        <GalleryGrid artworks={filteredArtworks} />
      </section>

      <footer className="border-t border-border py-8 text-center text-muted-foreground text-xs font-sans">
        &copy; {new Date().getFullYear()} ArtHistory250.
      </footer>
    </main>
  );
}
