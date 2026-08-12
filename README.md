# TruckParts AI

Premium AI-powered truck parts catalogue with OEM/reference search, compatibility system, and multi-language support.

## Features

- 🔍 Advanced search by OEM, reference, truck model, engine, and category
- 🚛 Comprehensive truck catalogue with manufacturers and models
- 🔗 Cross-reference system for finding compatible parts
- 🤖 AI Assistant for natural-language parts queries
- 📸 Image identification and upload system
- ⭐ Favorites and recently viewed parts
- 🌐 Multi-language support (English, French, Arabic with RTL)
- 📱 Mobile-first responsive design
- ♿ Full accessibility compliance
- 🔐 Secure and XSS-protected
- 📊 SEO-optimized with structured data

## Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/amineaddoul037-ai/truckparts-ai.git
cd truckparts-ai
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Key variables:
- `NEXT_PUBLIC_APP_URL` - Application URL
- `NEXT_PUBLIC_ENABLE_DEMO_DATA` - Enable demo data (default: true)
- `NEXT_PUBLIC_ENABLE_AD_SLOTS` - Enable advertisement slots (default: true)
- `VISION_API_KEY` - Vision API key for image identification (optional)
- `VISION_API_ENDPOINT` - Vision API endpoint (optional)

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
npm run build
npm start
```

## Testing

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

## Type Checking

```bash
npm run type-check
```

## Linting

```bash
npm run lint
```

## Architecture

### Directory Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── data/               # Demo data and data loaders
├── store/              # Zustand state management
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── styles/             # Global styles
```

### Data Models

- **Manufacturer** - Truck manufacturers (Volvo, DAF, Mercedes, etc.)
- **Truck** - Specific truck models with specs
- **Engine** - Engine specifications
- **Part** - Individual parts with OEM references
- **CrossReference** - Alternative parts and substitutes
- **Compatibility** - Part-truck-engine compatibility matrix
- **PartImage** - Images with metadata and licensing
- **Source** - Data sources for verification

### Data Verification

All technical data is marked with verification status:
- **VERIFIED** - Cross-checked against multiple sources
- **CROSS-CHECKED** - Validated with manufacturer data
- **NEEDS VERIFICATION** - Requires additional confirmation
- **DEMO DATA** - Example data for testing (clearly labeled)

### AI Assistant Limitations

The AI assistant provides information based on the catalogue database. It:
- ✅ Searches verified parts and compatibility data
- ✅ Provides cross-reference suggestions
- ✅ Answers questions about truck models
- ❌ Does NOT hallucinate technical compatibility
- ❌ Clearly indicates when data is unavailable
- ❌ Never presents demo data as verified

### Image Identification

Image upload supports:
- Part recognition from photos
- Metadata extraction
- Vision API integration (when configured)

When not configured, the service clearly indicates "Image identification service is not connected yet."

## Image Licensing

All images are:
- Licensed appropriately for use
- Attributed to sources
- Metadata includes source and license type
- No copyrighted images without permission

## Security

### XSS Protection

- React's built-in XSS protection for JSX
- DOMPurify for user-generated content
- Content Security Policy headers
- No unsafe HTML injection

### Input Validation

- Zod schemas for all forms
- Server-side validation
- Safe URL handling
- No arbitrary object property access

### Secrets Management

- All sensitive keys in `.env.local` (not committed)
- `.env.example` includes safe placeholders
- API keys never logged or exposed

## Performance

### Optimizations

- Next.js Image component for lazy loading
- Debounced search (300ms)
- Component code splitting
- Response caching
- Minimal dependencies
- Asset optimization

### Lighthouse Targets

- Performance: >90
- Accessibility: >95
- Best Practices: >95
- SEO: >95

## Accessibility

### WCAG 2.1 Level AA

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation (Tab, Enter, Escape)
- Focus management and indicators
- Color contrast ratio 4.5:1
- Text alternatives for images
- Accessible form controls
- Screen reader tested

## Mobile Support

- iOS 12+
- Android 8+
- Responsive grid system
- Touch-friendly components
- No horizontal overflow
- Mobile-first CSS

## Internationalization (i18n)

### Supported Languages

- **English** (en)
- **Français** (fr)
- **العربية** (ar) - RTL support

### Language Switcher

Available in header and settings. Persisted to localStorage.

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker build -t truckparts-ai .
docker run -p 3000:3000 truckparts-ai
```

### Other Platforms

For AWS, Google Cloud, Azure, or self-hosted:

```bash
npm run build
npm start
```

## API Documentation

See `/api` routes for endpoint documentation.

## Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review demo data specifications

## Changelog

See Git history for full changelog.
