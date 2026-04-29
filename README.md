# Copy Lab Pro

A professional UX copywriting application designed for teams targeting Millennials and Gen Z audiences. Copy Lab Pro streamlines the process of generating compelling, on-brand copy and provides rigorous, actionable feedback to reduce revision cycles.

## 🎯 Core Features

### Generate
- **3 Strategically Distinct Variants**: Each variant includes angle, rationale, strength, and risk analysis
- **Tone Direction**: Select from 12+ tone tags or blend custom tones
- **Copy Type Flexibility**: Support for 11 copy formats (headlines, CTAs, email subjects, error messages, etc.)
- **Contextual Generation**: AI-powered variants based on detailed briefs

### Analyze
- **5-Dimension Scorecard**: Clarity, Brand Voice, Audience Fit, Accuracy, Structure
- **Objective Scoring**: 0-100 scale with specific, actionable notes
- **Factual Accuracy Flags**: Identifies vague, misleading, or unsubstantiated claims
- **Suggested Rewrites**: AI-generated improvements when copy falls short
- **Contextual Review**: Optional context field for campaign goals and constraints

## 🎨 Design Philosophy

- **Clarity First**: No jargon, no corporate speak
- **Bold but Not Cheesy**: Confidence without hype
- **Meaningful not Abstract**: Real value, concrete language
- **Fast Feedback**: Reduce back-and-forth cycles
- **Reliable Guidance**: Precise, specific feedback from senior copywriters

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **API**: Anthropic Claude 3.5 Sonnet
- **Styling**: CSS-in-JS with DM Sans/Syne typography
- **State Management**: React Hooks + Context API
- **Build**: Vite

## 📋 Copy Types Supported

- Headline
- Tagline
- CTA (Call-to-Action)
- Social Caption
- Product Description
- Onboarding/Welcome
- Push Notification
- Email Subject Line
- Tooltip/Microcopy
- Error Message
- Empty State

## 🎭 Tone Direction Options

Confident, Playful, Direct, Warm, Premium, Minimal, Urgent, Conversational, Bold, Empowering, Witty, Grounded

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- Anthropic API key

### Installation

```bash
npm install
```

### Environment Setup

Create `.env.local`:
```
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 📁 Project Structure

```
copy-lab-pro/
├── src/
│   ├── components/
│   │   ├── CopyLab.jsx
│   │   ├── GeneratePanel.jsx
│   │   ├── AnalyzePanel.jsx
│   │   ├── VariantCard.jsx
│   │   ├── ScoreCard.jsx
│   │   └── UI/
│   ├── hooks/
│   │   ├── useCopyGeneration.js
│   │   ├── useCopyAnalysis.js
│   │   └── useCopyHistory.js
│   ├── services/
│   │   ├── claudeAPI.js
│   │   └── storageService.js
│   ├── context/
│   │   └── AppContext.jsx
│   ├── utils/
│   │   ├── constants.js
│   │   ├── validators.js
│   │   └── formatters.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── themes.css
│   └── App.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🔄 Workflow

### Generate Flow
1. Select copy type from dropdown
2. Write brief with context and goals
3. Select tone tags (optional)
4. Click "Generate 3 Variants"
5. Review strategically distinct options
6. Copy selected variant to clipboard

### Analyze Flow
1. Paste existing copy
2. Select format/type
3. Add context (optional but recommended)
4. Click "Run Analysis"
5. Review scores, flags, and suggestions
6. Copy suggested rewrite if needed

## 📊 Scoring Methodology

Each dimension scored 0-100:
- **80+**: Strong/Green
- **60-79**: Needs Work/Orange
- **Below 60**: Weak/Red

Overall score is contextual, not merely averaged.

## 🎓 Best Practices

- **Be specific in briefs**: Product name, feature, campaign moment, placement
- **Add context**: Campaign goal, audience segment, constraints
- **Use tone tags strategically**: 2-3 tags maximum for focused direction
- **Review rationale**: Understand the "why" behind each variant
- **Test suggestions**: AI output is starting point, not final answer

## 🤝 Contributing

This is an internal tool. For feature requests or bugs, contact the design team.

## 📄 License

Internal use only.