'use client';

interface UnitSelectorProps {
    units: string[];
    selectedUnit: string | null;
    onSelect: (unit: string | null) => void;
}

export default function UnitSelector({ units, selectedUnit, onSelect }: UnitSelectorProps) {
    return (
        <div className="relative my-8 group w-full max-w-full">
            {/* Gradient Fade: Right Edge */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scroll Container */}
            {/* 
                no-scrollbar utility is needed. Since we are using Tailwind v4 or standard config, 
                we can use arbitrary variants or standard classes. 
                For cross-browser support without a plugin, we'll use a style block or standard CSS in globals.
                Here I'll use the [mask-image] trick or just standard overflow with hidden scrollbar classes if available.
                Let's use the standard utility-based approach for hiding scrollbars via arbitrary properties.
            */}
            <div className="overflow-x-auto pb-4 pt-1 flex gap-4 px-4 items-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

                {/* 'All Units' Button */}
                <button
                    onClick={() => onSelect(null)}
                    className={`
                        rounded-full px-6 py-2 text-xs font-sans tracking-widest uppercase transition-all whitespace-nowrap
                        ${selectedUnit === null
                            ? 'bg-[#C5A059] text-white shadow-md scale-105'
                            : 'bg-transparent text-neutral-600 border border-neutral-300 hover:border-[#C5A059] hover:text-[#C5A059]'
                        }
                    `}
                >
                    All Units
                </button>

                {/* Unit Buttons */}
                {units.map((unit) => (
                    <button
                        key={unit}
                        onClick={() => onSelect(unit)}
                        className={`
                            rounded-full px-6 py-2 text-xs font-sans tracking-widest uppercase transition-all whitespace-nowrap
                            ${selectedUnit === unit
                                ? 'bg-[#C5A059] text-white shadow-md scale-105'
                                : 'bg-transparent text-neutral-600 border border-neutral-300 hover:border-[#C5A059] hover:text-[#C5A059]'
                            }
                        `}
                    >
                        {unit}
                    </button>
                ))}

                {/* Spacer to ensure last item isn't covered by fade */}
                <div className="w-12 shrink-0" />
            </div>
        </div>
    );
}
