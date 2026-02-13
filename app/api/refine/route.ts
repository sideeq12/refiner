import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { input } = await req.json();
        if (!input || typeof input !== "string") {
            return NextResponse.json({ error: "No input provided or input not a string" }, { status: 400 });
        }

        const AGENT_ID = process.env.ALGOLIA_AGENT_ID || process.env.AGENT_ID;
        const APP_ID = process.env.ALGOLIA_APP_ID!;
        const API_KEY = process.env.ALGOLIA_API_KEY!;

        if (!AGENT_ID) {
            return NextResponse.json({ error: "Missing ALGOLIA_AGENT_ID" }, { status: 500 });
        }

        // Official Integration Guide Format: compatibilityMode=ai-sdk-5 + stream=false
        const url = `https://${APP_ID}.algolia.net/agent-studio/1/agents/${AGENT_ID}/completions?stream=false&compatibilityMode=ai-sdk-5`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Algolia-Application-Id": APP_ID,
                "X-Algolia-API-Key": API_KEY,
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: input
                            }
                        ]
                    }
                ]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Algolia Error:", data);
            return NextResponse.json(
                { error: "Agent API error", details: data.message || "Unknown error" },
                { status: response.status }
            );
        }

        // ai-sdk-5 structure: look for the text part in data.parts
        let aiContent = "";
        if (data.parts && Array.isArray(data.parts)) {
            const textPart = data.parts.find((p: any) => p.type === "text");
            if (textPart) {
                aiContent = textPart.text;
            }
        }

        // Fallback to data.content if parts didn't have it
        if (!aiContent && data.content) {
            aiContent = data.content;
        }

        if (!aiContent) {
            aiContent = "{}";
        }

        let structuredData = {};
        try {
            // Extract JSON if wrapped in markdown blocks or just parse directly
            const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
            const cleanContent = jsonMatch ? jsonMatch[0] : aiContent;
            structuredData = JSON.parse(cleanContent);
        } catch (e) {
            console.error("JSON parse error:", e);
            return NextResponse.json({
                error: "Invalid JSON from Agent",
                raw: aiContent
            }, { status: 500 });
        }

        return NextResponse.json(structuredData);

    } catch (err: any) {
        console.error("Server Error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
