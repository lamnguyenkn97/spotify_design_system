# Spotify Design System

[![NPM Version](https://img.shields.io/npm/v/spotify-design-system.svg)](https://www.npmjs.com/package/spotify-design-system)
[![NPM Downloads](https://img.shields.io/npm/dm/spotify-design-system.svg)](https://www.npmjs.com/package/spotify-design-system)
[![License](https://img.shields.io/npm/l/spotify-design-system.svg)](https://github.com/lamnguyenkn97/spotify_design_system/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-Docs-ff4785.svg)](https://spotify-storybook.vercel.app)

> A production-ready React component library with **24 components**, featuring drag-and-drop functionality, portal-rendered modals, and comprehensive accessibility support. Built with TypeScript, Styled Components, and published to NPM.

## 🎯 What Is This?

A professional-grade design system demonstrating **modern component library architecture**, built to showcase advanced frontend engineering skills. This library powers a [full Spotify Clone application](https://github.com/lamnguyenkn97) with real-world features like queue management, playlist creation, and music playback.

**Built to demonstrate:**
- Component library architecture & API design
- Design tokens & theming systems
- Accessibility-first development (WCAG AA)
- Production deployment & NPM publishing
- Comprehensive documentation & testing

## 🔗 Quick Links

| Resource | Description |
|----------|-------------|
| **[📚 Interactive Docs](https://spotify-storybook.vercel.app)** | Storybook with live component examples |
| **[📦 NPM Package](https://www.npmjs.com/package/spotify-design-system)** | Published & actively maintained library |
| **[🎵 Live Application](https://github.com/lamnguyenkn97)** | Full Spotify clone built with this system |
| **[💻 Source Code](https://github.com/lamnguyenkn97/spotify_design_system)** | GitHub repository |

```bash
npm install spotify-design-system
```

---

## ⚡ Key Features

### 🧩 Component Library (24 Components)

**Atoms (16)** - Building Blocks  
`Button` • `Icon` • `Image` • `Input` • `TextArea` • `Progress` • `Slider` • `Stack` • `Typography` • `TextLink` • `Tooltip` • `Divider` • `MessageText` • `Pill` • `Skeleton` • `Table`

**Molecules (6)** - Composite Components  
`Banner` • `Card` • `Drawer` • `Footer` • `HorizontalTileCard` • `Toast`

**Organisms (3)** - Complex Features  
`AppHeader` • `MusicPlayer` • `Sidebar`

**[→ Explore all components in Storybook](https://spotify-storybook.vercel.app)**

### 🎯 Technical Excellence

| Feature | Implementation |
|---------|----------------|
| **🎭 Portal Rendering** | Drawer/Modal components with proper z-index layering |
| **🎯 Drag & Drop** | Queue reordering with HTML5 API + smooth visual feedback |
| **♿ WCAG AA Compliant** | Full keyboard navigation, ARIA labels, screen reader support |
| **🎨 100% Design Tokens** | Zero hardcoded values, consistent theming system |
| **📦 Tree-Shakeable** | Import only what you need, optimized bundle size |
| **🔷 TypeScript First** | Comprehensive type definitions with enums & interfaces |
| **🧪 Fully Tested** | Jest + React Testing Library, 70+ test cases |
| **📚 Living Documentation** | Interactive Storybook with real-world examples |

---

## 💡 Technical Highlights & Learnings

### 🏗️ **Advanced Patterns Implemented**

**Portal Rendering & Z-Index Management**
- Drawer/Modal components use React Portals to escape CSS containment
- Layered z-index system prevents overlay conflicts (modal: 500, drawer: 1300, tooltip: 1000)
- Proper focus management and keyboard trap handling

**Drag-and-Drop with Visual Feedback**
- HTML5 Drag & Drop API with three-state system (idle → dragging → drop-target)
- Smooth CSS transitions via styled-components for professional feel
- Optimistic UI updates with callback-driven state management

**Generic Component Composition**
- Single `Sidebar` component supports multiple variants (Library, Queue)
- Type-safe discriminated unions for variant-specific props
- Backward compatibility layer for deprecated APIs

**Design Token Architecture**
- 100% elimination of hardcoded values (colors, spacing, typography, shadows)
- Centralized theming system enables instant visual updates
- Example: `padding: spacing.md` instead of `padding: '16px'`

### 📚 **Key Learnings**

**1. Simplification Over Features**
- Reduced component complexity by 60% (Image: 156 → 77 lines, Stack: 20 → 4 props)
- **Insight**: Real use cases trump theoretical flexibility

**2. Leverage Existing Solutions**
- Replaced 60+ lines of custom CSS animations with FontAwesome's `spin` prop
- **Insight**: Always check if the ecosystem already solved the problem

**3. Documentation Drives Adoption**
- Standardized README format across all components (Overview → Props → Examples → A11y)
- **Result**: Developers can implement components in under 2 minutes

**4. Test User Journeys, Not Implementation**
- 70+ focused tests on interactions, accessibility, and error states
- **Insight**: Tests should mirror real user behavior

**5. Storybook as Living Documentation**
- Used real Spotify content (actual album covers, artist names) to reveal design gaps
- Demonstrated composition patterns developers can copy-paste

### 🎯 **Production Quality Gates**

✅ **100% TypeScript** - All components fully typed with enums & interfaces  
✅ **Zero Hardcoded Values** - Complete design token coverage  
✅ **WCAG AA Compliant** - Keyboard navigation, ARIA labels, focus management  
✅ **Tree-Shakeable** - Optimized bundle size, import only what you need  
✅ **Comprehensive Tests** - Jest + RTL with 70+ test cases  
✅ **Published to NPM** - Real-world deployment experience  
✅ **Component Composition** - Follows React's composition model over inheritance

---

## 🚀 Installation & Quick Start

### Install

```bash
npm install spotify-design-system
# Peer dependencies
npm install react react-dom styled-components
```

TypeScript definitions included - no additional @types needed!

### Basic Usage

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
  <h2 style={{ color: colors.primary.brand }}>Using Tokens</h2>
    </div>
```

**Available Tokens:**  
`colors` • `spacing` • `fontSizes` • `fontFamilies` • `fontWeights` • `lineHeights` • `borderRadius` • `animations` • `opacity` • `shadows`

### Real-World Implementation

See this design system in action: **[Spotify Clone Application →](https://github.com/lamnguyenkn97)**

Features drag-drop queue management, playlist creation, and music playback using these components.

---

## 🏗️ Architecture

### Atomic Design Structure

```
src/
├── components/
│   ├── atoms/        # Button, Icon, Input, Typography (15 components)
│   ├── molecules/    # Card, Drawer, Banner, Toast (6 components)
│   └── organisms/    # Sidebar, MusicPlayer, AppHeader (2 components)
├── styles/
│   ├── tokens/       # colors, spacing, typography, shadows
│   ├── theme.ts      # Theme configuration
│   └── GlobalStyles  # Global CSS reset
└── utils/            # Shared utilities

```

### Component Structure (Example)

Each component follows consistent patterns:
```
Button/
├── Button.tsx           # Component logic
├── Button.style.ts      # Styled components
├── Button.types.ts      # TypeScript interfaces & enums
├── Button.stories.tsx   # Storybook documentation
├── Button.spec.tsx      # Jest + RTL tests
├── README.md            # Usage guide
└── index.tsx            # Public exports
```

---

## 🔧 Development

### Local Setup

   ```bash
   git clone https://github.com/lamnguyenkn97/spotify_design_system.git
   cd spotify_design_system
   npm install
   npm run storybook
   ```

### Key Scripts

```bash
npm run storybook         # Interactive component development
npm run build             # Build library for production
npm run test              # Run test suite
npm run lint              # Check code quality
npm publish               # Publish to NPM (after build)
```

### Component Guidelines

✅ Use TypeScript with strict mode  
✅ Follow atomic design hierarchy  
✅ Use design tokens (no hardcoded values)  
✅ Write tests for user interactions  
✅ Document with Storybook stories  
✅ Include README with examples  
✅ Ensure WCAG AA compliance

---

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| **Version** | 1.2.0 |
| **Components** | 24 (16 Atoms, 6 Molecules, 3 Organisms) |
| **Published to NPM** | ✅ Active deployment & versioning |
| **Test Cases** | 70+ (Jest + React Testing Library) |
| **Storybook Stories** | 100% component coverage |
| **TypeScript** | 100% type coverage |
| **Design Tokens** | 100% (zero hardcoded values) |
| **Accessibility** | WCAG AA compliant |
| **Bundle** | Tree-shakeable, optimized |

---

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make changes and add tests
4. Run `npm test` and `npm run lint`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push and open a Pull Request

**Issue Reporting:** Include description, steps to reproduce, and expected behavior.

---

## 🔗 Links & Resources

| Resource | URL |
|----------|-----|
| **NPM Package** | [npmjs.com/package/spotify-design-system](https://www.npmjs.com/package/spotify-design-system) |
| **Storybook Docs** | [spotify-storybook.vercel.app](https://spotify-storybook.vercel.app) |
| **Live Application** | [Spotify Clone (GitHub)](https://github.com/lamnguyenkn97) |
| **Source Code** | [github.com/lamnguyenkn97/spotify_design_system](https://github.com/lamnguyenkn97/spotify_design_system) |
| **Issues** | [GitHub Issues](https://github.com/lamnguyenkn97/spotify_design_system/issues) |

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

**Spotify** - Design inspiration  
**React** - Component framework  
**TypeScript** - Type safety  
**Styled Components** - CSS-in-JS  
**FontAwesome** - Icon library  
**Storybook** - Documentation platform  
**Jest & React Testing Library** - Testing tools

---

**Built by [Lam Nguyen](https://github.com/lamnguyenkn97)** • Version 1.1.0
