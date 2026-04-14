# KisanBridge

A responsive single-page React website for **KisanBridge** — a marketplace connecting farmers, traders, and storage facilities across Andhra Pradesh.

## Folder Structure

```
kisanbridge/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── AudienceStrip.js / AudienceStrip.css
│   │   ├── TrustSection.js / TrustSection.css
│   │   ├── HowItWorks.js / HowItWorks.css
│   │   ├── KeyFeatures.js / KeyFeatures.css
│   │   ├── StorageSection.js / StorageSection.css
│   │   ├── CallToAction.js / CallToAction.css
│   │   └── Footer.js / Footer.css
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Production build
npm run build
```

## Sections

| Section | Description |
|---------|-------------|
| **Navbar** | Fixed header with scroll effect, active link highlighting, mobile hamburger menu |
| **Hero** | Full-height landing with animated phone mockup, floating badges, app store links |
| **Audience Strip** | Three-column cards for Farmers, Traders, and Storages |
| **Trust Section** | Stats dashboard, trust points, and a visual credibility card |
| **How It Works** | 4-step process flow with connecting arrows |
| **Key Features** | Local search, live prices, QR verification, storage management |
| **Storage Section** | Dedicated warehouse management pitch with feature checklist |
| **Call To Action** | Download and contact conversion section |
| **Footer** | Contact details, navigation links, social media icons |

## Tech Stack

- **React 18** — Component-based UI
- **Lucide React** — Lightweight icon library
- **Vanilla CSS** — BEM methodology, component-scoped stylesheets
- **Google Fonts** — Playfair Display + DM Sans

## Customization

All design tokens are defined as CSS custom properties in `src/styles/global.css`:

```css
--green-mid:     #1a7a4a;   /* Primary brand color */
--font-display:  'Playfair Display', Georgia, serif;
--radius-lg:     16px;
--shadow-card:   0 2px 16px rgba(10, 61, 31, 0.08);
```

Edit these variables to retheme the entire site.
