"use client";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
            {/* High-res background with overlay */}
            <div
                className="absolute inset-0 z-0 opacity-40 grayscale"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 bg-black/60 z-1" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <div className="inline-block px-4 py-1 border border-accent text-accent text-xs font-bold tracking-widest uppercase mb-8">
                    Algolia Agent Challenge 2026
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 tracking-tighter uppercase leading-[0.9]">
                    Intent<br />Refiner
                </h1>

                <p className="text-lg md:text-2xl text-neutral-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                    Transforming raw user complaints into precise operational metadata. The definitive bridge between feedback and automated resolution.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button
                        onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-12 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
                    >
                        Initialize Demo
                    </button>
                    <button
                        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-12 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Subtle bottom indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
