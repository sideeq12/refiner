"use client";

/* --- 2. Trust Indicators --- */
export function TrustLogos() {
    const logos = ["ALPHABET", "META", "AMAZON", "NETFLIX", "TESLA"];
    return (
        <section className="py-12 border-b border-border bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-between items-center gap-8 opacity-30 grayscale">
                    {logos.map(logo => (
                        <span key={logo} className="text-xl font-black tracking-tighter">{logo}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --- 3. About / Context --- */
export function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 border-b border-border">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">The Ambiguity Tax</h2>
                <p className="text-xl text-neutral-400 leading-relaxed">
                    Every minute your support team spends clarifying vague "the app is broken" messages is a minute lost to innovation.
                    IntentRefiner uses high-precision AI to extract operational intent from raw human frustration, turning noise into data.
                </p>
            </div>
        </section>
    );
}

/* --- 5. Core Methodology --- */
export function MethodologySection() {
    const steps = [
        { name: "Retrieve", desc: "Instantly correlates the input against historical issue patterns.", id: "01" },
        { name: "Converge", desc: "Aggregates disparate signals into a single operational theme.", id: "02" },
        { name: "Refine", desc: "Generates ultra-precise, machine-ready intent metadata.", id: "03" }
    ];
    return (
        <section className="py-24 px-6 border-b border-border bg-neutral-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map(step => (
                        <div key={step.id} className="border-t border-accent pt-8">
                            <span className="text-accent font-mono text-sm block mb-4 tracking-widest">{step.id} / METHOD</span>
                            <h3 className="text-2xl font-bold uppercase mb-4">{step.name}</h3>
                            <p className="text-neutral-400 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --- 9. Impact Metrics --- */
export function StatsSection() {
    const stats = [
        { val: "40%", label: "Triage Velocity" },
        { val: "98%", label: "Intent Accuracy" },
        { val: "12ms", label: "Latency" },
        { val: "2.4M", label: "Monthly Requests" }
    ];
    return (
        <section className="py-24 px-6 border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map(stat => (
                        <div key={stat.label} className="text-center">
                            <div className="text-5xl md:text-7xl font-bold mb-2 tracking-tighter">{stat.val}</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --- 10. Testimonials --- */
export function TestimonialSection() {
    return (
        <section className="py-24 px-6 border-b border-border bg-neutral-900">
            <div className="max-w-4xl mx-auto italic text-center text-2xl md:text-3xl font-light text-neutral-300">
                "IntentRefiner has fundamentally changed how we approach support automation. It's not just a tool; it's the missing layer in our AI stack."
                <div className="not-italic mt-8 text-sm font-bold uppercase tracking-widest text-accent">— Head of Operations, FinTech Global</div>
            </div>
        </section>
    );
}

/* --- 12. Conclusion & Footer --- */
export function FinalCTA() {
    return (
        <section className="py-32 px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12">Ready to refine?</h2>
            <button
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                className="px-16 py-6 bg-white text-black font-black uppercase tracking-widest text-lg hover:invert transition-all"
            >
                Get Started
            </button>
            <footer className="mt-32 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-widest text-neutral-600">
                <div>© 2026 IntentRefiner / All Rights Reserved</div>
                <div className="flex gap-12">
                    <a href="#" className="hover:text-white">API Docs</a>
                    <a href="#" className="hover:text-white">Security</a>
                    <a href="#" className="hover:text-white">GitHub</a>
                </div>
            </footer>
        </section>
    );
}
