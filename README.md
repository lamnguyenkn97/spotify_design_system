# Spotify Design System

[![NPM Version](https://img.shields.io/npm/v/spotify-design-system.svg)](https://www.npmjs.com/package/spotify-design-system)
[![NPM Downloads](https://img.shields.io/npm/dm/spotify-design-system.svg)](https://www.npmjs.com/package/spotify-design-system)
[![License](https://img.shields.io/npm/l/spotify-design-system.svg)](https://github.com/lamnguyenkn97/spotify_design_system/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue.svg)](https://www.typescriptlang.org/)

> Production-ready React component library with **24 components**. Built with TypeScript, Styled Components, and Storybook. Published to NPM with 2.5k+ monthly downloads.

## 📊 Quick Stats

| Metric | Value |
|--------|-------|
| **Components** | 24 (16 Atoms, 7 Molecules, 4 Organisms) |
| **Version** | 1.2.1 |
| **Monthly Downloads** | 2.5k+ |
| **TypeScript** | 100% |
| **Test Coverage** | 70+ test cases |

## 🔗 Links

| Resource | URL |
|----------|-----|
| 📚 **Storybook Docs** | [spotify-storybook.vercel.app](https://spotify-storybook.vercel.app) |
| 📦 **NPM Package** | [npmjs.com/package/spotify-design-system](https://www.npmjs.com/package/spotify-design-system) |
| 💻 **Source Code** | [github.com/lamnguyenkn97/spotify_design_system](https://github.com/lamnguyenkn97/spotify_design_system) |

```bash
npm install spotify-design-system
```

---

## 🎯 Technical Highlights

**What Makes This Production-Ready:**

✅ **100% TypeScript** - Full type safety with enums & interfaces  
✅ **Atomic Design** - Scalable component hierarchy  
✅ **Design Tokens** - Zero hardcoded values, consistent theming  
✅ **WCAG AA Compliant** - Keyboard nav, ARIA labels, screen readers  
✅ **Drag & Drop** - HTML5 API with smooth visual feedback  
✅ **Focus Management** - Complex modal/input interactions (see v1.2.1 fix)  
✅ **Context API** - Global state for Toast notifications  
✅ **React Portals** - Proper layering for modals/drawers  
✅ **Tree-Shakeable** - Import only what you need  
✅ **Comprehensive Tests** - Jest + React Testing Library

---

## 🧩 Component Library

| Atoms | Molecules | Organisms |
|-------|-----------|-----------|
| Button | Banner | AppHeader |
| Divider | Card | Footer |
| Equalizer | CategoryCard | MusicPlayer |
| Icon | Drawer | Sidebar |
| Image | HorizontalTileCard | |
| Input | Modal | |
| MessageText | Toast | |
| Pill | | |
| Progress | | |
| Skeleton | | |
| Slider | | |
| Stack | | |
| Table | | |
| TextArea | | |
| Tooltip | | |
| Typography | | |

**[→ Explore all components in Storybook](https://spotify-storybook.vercel.app)**

---

## 🐛 Recent Fix (v1.2.1)

**Critical Bug:** Input fields inside Modal lost focus on every keystroke.

**Root Cause:** Focus management `useEffect` depended on a callback that changed on every re-render, causing the focus logic to re-execute.

**Solution:** Split into 2 separate `useEffect` hooks:
1. Focus management - runs only when modal opens
2. ESC key listener - updates without touching focus

**Impact:** +7 new test cases, 3 components optimized (Modal, Input, TextArea)

[View commit →](https://github.com/lamnguyenkn97/spotify_design_system/commit/c0a416c)

---

## 🚀 Quick Start

```tsx
import { Button, Stack, Typography, ThemeProvider } from 'spotify-design-system';

function App() {
  return (
    <ThemeProvider>
      <Stack direction="column" spacing="lg">
        <Typography variant="heading">Welcome to Spotify</Typography>
        <Button variant="primary">Get Started</Button>
      </Stack>
    </ThemeProvider>
  );
}
```

### Using Design Tokens

```tsx
import { colors, spacing, borderRadius } from 'spotify-design-system';

<div style={{
        backgroundColor: colors.primary.black,
        padding: spacing.lg,
        borderRadius: borderRadius.md,
}}>
  <h2 style={{ color: colors.primary.brand }}>Spotify Green</h2>
    </div>
```

**Available Tokens:**  
`colors` • `spacing` • `fontSizes` • `borderRadius` • `shadows` • `transitions` • `opacity`

---

## 🏗️ Architecture

### Project Structure

```
src/
├── components/
│   ├── atoms/        # 16 basic components (Button, Input, Icon...)
│   ├── molecules/    # 7 composite components (Card, Modal, Toast...)
│   └── organisms/    # 4 complex layouts (Sidebar, Footer, Header...)
├── styles/
│   ├── tokens/       # Design tokens (colors, spacing, typography)
│   └── theme.ts      # Theme configuration
└── utils/            # Shared utilities
```

### Component Pattern

Each component follows consistent structure:
```
Button/
├── Button.tsx           # Component logic
├── Button.style.ts      # Styled components
├── Button.types.ts      # TypeScript definitions
├── Button.stories.tsx   # Storybook docs
├── Button.spec.tsx      # Unit tests
└── index.tsx            # Public exports
```

---

## 🔧 Development

   ```bash
# Setup
   git clone https://github.com/lamnguyenkn97/spotify_design_system.git
   cd spotify_design_system
   npm install

# Development
npm run storybook    # Interactive component dev
npm run build        # Build for production
npm run test         # Run test suite
npm publish          # Publish to NPM
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/name`
3. Add tests for new features
4. Run `npm test` and `npm run lint`
5. Submit Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

**Built by [Lam Nguyen](https://github.com/lamnguyenkn97)** • 6 years experience as Software Engineer
