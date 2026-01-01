import { unit1 } from './unit1';
import { unit2 } from './unit2';
import { unit3Data } from './unit3';
import { unit4Data } from './unit4';
import { unit5 } from './unit5';
import { unit6 } from './unit6';
import { unit7 } from './unit7';
import { unit8 } from './unit8';
import { unit9 } from './unit9';
import { unit10Data } from './unit10';

export interface ArtData {
    id: string;
    title: string;
    artist: string;
    images: string[];
    variant: 'wood' | 'gold' | 'black'; // Added black to match FrameType roughly
    unit: string;
    // New Fields
    collegeBoardLine: string;
    imageCredits: string[];
    story: string;
    ffcc: {
        form: string[];
        function: string[];
        content: string[];
        context: string[];
    };
    // Kept optional legacy fields to avoid immediate breaks if any, but unit1 doesn't use them
    date?: string;
    material?: string;
    scale?: string;
    details?: {
        form: string;
        function: string;
        content: string;
        context: string;
    };
}

// Consolidate all units here
export const artworks: ArtData[] = [
    ...unit1,
    ...unit2,
    ...unit3Data,
    ...unit4Data,
    ...unit5,
    ...unit6,
    ...unit7,
    ...unit8,
    ...unit9,
    ...unit10Data
];
