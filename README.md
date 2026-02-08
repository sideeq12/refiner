# IntentRefiner

> Turn messy user complaints into machine-actionable intents

A modern AI-powered demo built for the Algolia Agent Studio Challenge. IntentRefiner transforms vague user complaints into structured, operational intents for support automation systems.

## Features

- 🎯 **AI-Powered Analysis**: Leverages Algolia Agent Studio to process natural language
- 📊 **Structured Output**: Returns refined intent, category, confidence score, and matched issues
- 🎨 **Modern UI**: Clean, dark-mode interface inspired by Vercel and Linear
- ⚡ **Fast & Secure**: Server-side API integration with environment-based credentials
- 🚀 **Deploy Ready**: Optimized for Vercel deployment

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create `.env.local` file in the project root:

```env
ALGOLIA_APP_ID=your_app_id_here
ALGOLIA_API_KEY=your_api_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## How It Works

1. **Retrieve**: Queries Algolia index of historical issues
2. **Converge**: Detects recurring failure patterns
3. **Refine**: Outputs structured operational intent

## API Integration

### Endpoint: `/api/refine`

**Request**:
```json
{
  "complaint": "My internet keeps dropping every evening..."
}
```

**Response**:
```json
{
  "refined_intent": "Investigate recurring evening network outages...",
  "intent_category": "Network Reliability",
  "confidence": 0.87,
  "matched_issue_ids": ["ISSUE_1021", "ISSUE_1187"],
  "explanation": "Detected pattern of recurring network issues..."
}
```

## Deployment to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Steps:

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables:
   - `ALGOLIA_APP_ID`
   - `ALGOLIA_API_KEY`
4. Deploy!

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **AI**: Algolia Agent Studio
- **Deployment**: Vercel

## Project Structure

```
algolia/
├── app/
│   ├── api/refine/       # Algolia Agent integration
│   ├── globals.css       # Dark mode styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── DemoSection.tsx   # Interactive demo
│   ├── Hero.tsx          # Landing section
│   ├── HowItWorks.tsx    # Process overview
│   └── Footer.tsx        # Footer
└── .env.local            # Environment variables (not committed)
```

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

MIT

---

Built for the **Algolia Agent Studio Challenge** 🏆

