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
                <div className="flex gap-8 items-center">
                    <a href="#" className="hover:text-white">API Docs</a>
                    <a href="#" className="hover:text-white">Security</a>
                    <div className="flex gap-4 ml-4">
                        <a href="https://www.facebook.com/profile.php?id=61586752351996" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/lovissaconsultingltd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Instagram">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.058.935 20.39.53 19.599.231c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.073 1.17.054 1.805.249 2.227.412.558.216.957.475 1.377.896.421.42.68.819.896 1.377.163.422.358 1.057.412 2.227.057 1.265.073 1.647.073 4.85s-.016 3.585-.073 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.558-.475.958-.896 1.377-.42.421-.819.68-1.377.896-.422.163-1.057.358-2.227.412-1.265.057-1.647.073-4.85.073s-3.585-.016-4.85-.073c-1.17-.054-1.805-.249-2.227-.412-.558-.216-.958-.475-1.377-.896-.421-.42-.68-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.057-1.265-.073-1.647-.073-4.85s.016-3.585.073-4.85c.054-1.17.249-1.805.412-2.227.216-.558.475-.957.896-1.377.42-.421.819-.68 1.377-.896.422-.163 1.057-.358 2.227-.412 1.265-.057 1.647-.073 4.85-.073zm0 3.678c-3.405 0-6.162 2.757-6.162 6.162 0 3.405 2.757 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.645-1.44-1.44 0-.794.645-1.439 1.44-1.439.794 0 1.44.645 1.44 1.439z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@lovissaconsulting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="YouTube">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>

            </footer>
        </section>
    );
}
