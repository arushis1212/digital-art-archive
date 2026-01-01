import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
            <div className="max-w-xl space-y-8">
                <h1 className="font-serif text-5xl md:text-7xl text-accent mb-4">404</h1>

                <div className="space-y-4">
                    <h2 className="text-2xl font-serif text-foreground">
                        Page Not Found
                    </h2>
                    <p className="font-serif italic text-xl text-muted-foreground opacity-80">
                        "This artifact is missing from the archives."
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#b08d4b] text-white px-8 py-3 rounded-full uppercase tracking-widest text-xs font-bold transition-colors duration-300 shadow-md"
                >
                    <ArrowLeft size={16} />
                    <span>Return to Gallery</span>
                </Link>
            </div>
        </div>
    );
}
