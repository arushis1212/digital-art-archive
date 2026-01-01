'use client';

import { Search } from 'lucide-react';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
    return (
        <div className="relative w-full max-w-md mx-auto mb-12">
            <div className="relative flex items-center">
                <Search
                    size={18}
                    className="absolute left-0 text-neutral-500"
                />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, artist, or period..."
                    className="w-full bg-transparent py-3 pl-8 pr-4 text-foreground font-serif placeholder:font-sans placeholder:text-neutral-400 focus:outline-none border-b border-neutral-400 focus:border-accent transition-colors duration-300"
                />
            </div>
        </div>
    );
}
