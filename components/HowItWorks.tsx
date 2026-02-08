"use client";

export default function HowItWorks() {
    const steps = [
        {
            title: "Retrieve",
            description: "Queries Algolia index of historical issues to find relevant patterns and similar complaints",
            icon: "🔍",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "Converge",
            description: "Detects recurring failure patterns and correlates multiple data points to identify root causes",
            icon: "🎯",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Refine",
            description: "Outputs structured operational intent ready for automation systems and support routing",
            icon: "✨",
            gradient: "from-violet-500 to-purple-500",
        },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        IntentRefiner uses a three-stage pipeline to transform raw complaints into actionable intents
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="group relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r {step.gradient} bg-clip-text text-transparent">
                                {step.title}
                            </h3>
                            <p className="text-foreground/70 leading-relaxed">
                                {step.description}
                            </p>

                            {/* Hover effect gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Connection Lines (desktop only) */}
                <div className="hidden md:block relative -mt-32 mb-16 mx-auto max-w-4xl h-1">
                    <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple opacity-20"></div>
                </div>
            </div>
        </section>
    );
}
