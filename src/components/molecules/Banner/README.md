# Banner Component

## Overview
The Banner component displays prominent header sections for albums, playlists, podcasts, and artists with **dynamic background gradients extracted from cover images**. The gradient automatically adapts to each image's dominant colors, creating visually cohesive and striking banners.

## Key Features
| Feature | Description | Example |
|---------|-------------|---------|
| **Dynamic Color Extraction** | Automatically extracts dominant colors from images | Green album → Green gradient, Red artwork → Red gradient |
| **Visual Hierarchy** | Cover image dramatically stands out from muted background | Original image brightness vs 70% darker background |
| **Enhanced Image Effects** | Multi-layered shadows, glow, and lift effects | Dramatic depth and premium feel |
| **Pure Composition** | Built using well-designed atoms without custom styled-components | Stack + Image + Typography composition |
| **Semantic Structure** | Proper ARIA labels and heading hierarchy | `role="banner"`, `h1` for titles |
| **Smooth Transitions** | Animated background changes when image changes | 0.5s transition between gradients |

## Architecture Philosophy 🏗️
**Molecules = Composition, Not New Styling**

This Banner demonstrates **proper atomic design principles**:
- **Atoms** handle all styling complexity (Stack, Image, Typography)
- **Molecules** focus on composition and layout
- **No .style.ts file needed** - inline styles for Banner-specific effects only

### Why No .style.ts?
```tsx
// ❌ Over-engineered: Custom styled-components for simple composition
<BannerContainer><ImageWrapper><StyledImage>

// ✅ Pure composition: Well-designed atoms + minimal inline styles
<div><Stack><Image style={bannerEffects} /></Stack></div>
```

**Benefits:**
- **Simpler maintenance** - Fewer files, clearer dependencies
- **True atomic design** - Molecules are composition, not new components
- **Atom reusability** - Image, Stack, Typography handle all the complexity
- **Inline effects** - Banner-specific styling stays with Banner logic

## Visual Hierarchy Solution 🎯
**Problem**: Cover images could blend into extracted color backgrounds
**Solution**: Multi-layered approach for dramatic contrast

### Background Treatment
- **Extracted colors are heavily muted** (70% darker for gradient start)
- **Very dark gradient end** (85% darker than original)
- **Maintains color relationship** while ensuring contrast

### Cover Image Enhancement
- **Brightness boost** (+10%) and contrast enhancement
- **Multi-layered shadows** for dramatic depth
- **Subtle glow border** for premium feel  
- **Lift effect** (8px translate) for floating appearance
- **Sharp borders** with semi-transparent highlights

## Recent Improvements ✨
**Pure Composition Architecture**:
- **Color Extraction**: Efficient `fast-average-color` implementation
- **Architecture**: Removed `.style.ts` - molecules should be composition
- **Atomic Design**: Leverages well-designed atoms instead of custom styling
- **Benefits**: Simpler code, fewer files, better atomic design principles

## Color Extraction Process
1. **Image Analysis**: Uses `fast-average-color` to detect dominant color
2. **Background Muting**: Creates heavily muted versions (30% and 15% of original)
3. **Gradient Creation**: Generates subtle background gradient
4. **Image Enhancement**: Applies Banner-specific effects via inline styles
5. **Smooth Transition**: Animates background change over 0.5 seconds

## Styling & Tokens
- **Dynamic Colors**: Extracted from image dominant colors (heavily muted for background)
- **Typography**: `title`, `body`, `caption` variants with semantic colors
- **Layout**: Stack atom handles spacing and alignment
- **Visual Effects**: Inline styles for Banner-specific image enhancements

## Usage Patterns

### Basic Album Banner
```tsx
<Banner
  type="album"
  title="MAYHEM"
  subtitle="Lady Gaga • 2025 • 14 songs, 53 min 11 sec"
  image="https://example.com/album-cover.jpg"
/>
// Result: Bright album cover floating over muted color-matched background
```

### Artist Banner
```tsx
<Banner
  type="artist"
  title="Taylor Swift"
  description="82,240,376 monthly listeners"
  image="https://example.com/artist-photo.jpg"
/>
// Result: Enhanced artist photo with dramatic shadows over subtle background
```

### Playlist Banner
```tsx
<Banner
  type="playlist"
  title="Daily Mix 1"
  subtitle="Taylor Swift, Lady Gaga, Olivia Rodrigo and more"
  image="https://example.com/playlist-cover.jpg"
/>
// Result: Playlist cover with premium glow effects over color-coordinated background
```

## Technical Implementation
- **Architecture**: Pure composition using well-designed atoms
- **Library**: `fast-average-color` for efficient color detection
- **Algorithm**: Dominant color detection with precision mode
- **Background**: Muted versions (30% and 15% opacity) of extracted colors
- **Image Effects**: Inline styles for Banner-specific enhancements
- **Performance**: Async loading with cleanup for component unmounting
- **Error Handling**: Graceful fallback to Spotify brand colors

### Component Files
- `Banner.tsx` - Component logic and composition
- `Banner.types.ts` - TypeScript interfaces
- `utils.ts` - Color extraction utilities
- `Banner.stories.tsx` - Storybook demonstrations
- ~~`Banner.style.ts`~~ - **Removed** (molecules should be composition)

## Accessibility
- **Semantic Structure**: Uses `role="banner"` and proper heading hierarchy
- **Screen Readers**: Descriptive `aria-label` with content type
- **Image Alt Text**: Contextual alt text for cover images
- **Color Contrast**: Muted backgrounds ensure high contrast with white text
- **Visual Effects**: Enhanced without affecting keyboard navigation or screen readers

 