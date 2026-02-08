"use client";

import { useState } from "react";

interface RefineResponse {
    refined_intent: string;
    confidence: number;
    intent_category: string;
    likely_platform: string;
    suggested_tags: string[];
    matched_issue_ids: string[];
    explanation: string;
}

const EXAMPLE_DATA: RefineResponse = {
    refined_intent: "Investigate recurring evening network outages and escalate unresolved support tickets",
    intent_category: "Network Reliability",
    confidence: 0.87,
    likely_platform: "Support Portal",
    suggested_tags: ["network", "outage", "escalation"],
    matched_issue_ids: ["ISSUE_1021", "ISSUE_1187"],
    explanation: "Detected pattern of recurring network issues during evening hours with delayed support response"
};

export default function DemoSection() {
    const [complaint, setComplaint] = useState("My internet keeps dropping every evening and nobody is responding to my tickets");
    const [result, setResult] = useState<RefineResponse | null>(EXAMPLE_DATA);
    const [loading, setLoading] = useState(false);

    const handleRefine = async () => {
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch("/api/refine", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ input: complaint }),
            });

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Error refining intent:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="demo" className="py-24 px-6 bg-black border-y border-border">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 uppercase">Experience IntentRefiner</h2>
                    <p className="text-neutral-400 max-w-xl mx-auto">
                        Paste a raw user complaint to see how our AI transforms ambiguity into operational clarity.
                    </p>
                </div>

                <div className="bg-neutral-900 border border-border p-8 mb-12">
                    <label htmlFor="complaint" className="block text-xs font-bold uppercase tracking-widest mb-4 text-neutral-500">
                        Raw User Input
                    </label>
                    <textarea
                        id="complaint"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                        className="w-full h-32 px-4 py-3 bg-black border border-border text-white focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Type user complaint..."
                    />

                    <button
                        onClick={handleRefine}
                        disabled={loading || !complaint.trim()}
                        className="mt-6 w-full py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 disabled:opacity-50 transition-all"
                    >
                        {loading ? "Processing..." : "Refine Intent"}
                    </button>
                </div>

                {result && (
                    <div className="bg-black border border-border p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="mb-8 p-4 border-l-2 border-accent bg-neutral-900">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Optimized Operational Intent</h3>
                            <p className="text-xl font-medium">{result.refined_intent}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Category</h3>
                                <p className="text-lg">{result.intent_category}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Confidence Level</h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 bg-neutral-800 h-1">
                                        <div
                                            className="bg-accent h-full transition-all duration-1000"
                                            style={{ width: `${result.confidence * 100}%` }}
                                        />
                                    </div>
                                    <span className="font-mono text-sm leading-none">{(result.confidence * 100).toFixed(0)}%</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Associated Issue Clusters</h3>
                            <div className="flex flex-wrap gap-2">
                                {result.matched_issue_ids.map((id) => (
                                    <span key={id} className="px-3 py-1 bg-neutral-900 border border-border text-xs font-mono">
                                        {id}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Heuristic Analysis</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">{result.explanation}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
