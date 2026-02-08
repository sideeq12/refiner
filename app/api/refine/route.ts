import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { input } = await req.json();
        if (!input || typeof input !== "string") {
            return NextResponse.json({ error: "No input provided or input not a string" }, { status: 400 });
        }

        const AGENT_ID = process.env.ALGOLIA_AGENT_ID!;
        const APP_ID = process.env.ALGOLIA_APP_ID!;
        const API_KEY = process.env.ALGOLIA_API_KEY!;

        const url = `https://${APP_ID}.algolia.net/agent-studio/1/agents/${AGENT_ID}/completions?compatibilityMode=ai-sdk-5`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Algolia-Application-Id": APP_ID,
                "X-Algolia-API-Key": API_KEY,
            },
            body: JSON.stringify({
                messages: [
                    { role: "user", content: input } // ✅ plain string
                ]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Algolia Error:", data);
            return NextResponse.json(
                { error: "Agent API error", details: data.message },
                { status: response.status }
            );
        }

        // Agent should return valid JSON string in message.content
        const aiContent = data.choices?.[0]?.message?.content || "{}";
        let structuredData = {};
        try {
            structuredData = JSON.parse(aiContent);
        } catch (e) {
            console.error("JSON parse error:", e);
        }

        return NextResponse.json(structuredData);

    } catch (err: any) {
        console.error("Server Error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
