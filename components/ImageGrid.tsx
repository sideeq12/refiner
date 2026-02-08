"use client";

interface GridProps {
    title: string;
    description?: string;
    items: {
        title: string;
        description: string;
        image: string;
    }[];
    columns?: 3 | 4;
}

export default function ImageGrid({ title, description, items, columns = 3 }: GridProps) {
    return (
        <section className="py-24 px-6 border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 uppercase">{title}</h2>
                    {description && <p className="text-neutral-400 max-w-2xl">{description}</p>}
                </div>

                <div className={`grid gap-8 ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
                    {items.map((item, idx) => (
                        <div key={idx} className="group border border-border bg-neutral-900 overflow-hidden">
                            <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
