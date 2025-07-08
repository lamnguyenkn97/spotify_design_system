# Banner Component

## Overview
A striking banner component for displaying **album headers, artist profiles, playlist covers, and podcast shows** with **dynamic background gradients** extracted from cover images. Commonly used in **Spotify's detail pages**, **artist profiles**, and **content headers**.

The component creates **visually cohesive experiences** by automatically adapting background colors to match each image's dominant colors, while maintaining **proper contrast and accessibility**.

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Dynamic Color Extraction** | Automatically extracts dominant colors from images using `dont-crop` | Green album → Green gradient background |
| **Visual Hierarchy** | Enhanced cover images with shadows, borders, and lift effects | Images "float" above gradient background |
| **Design Token Integration** | Uses spacing, shadows, borders, and size tokens consistently | Consistent with design system |
| **Pure Atom Composition** | Built using Stack, Image, and Typography atoms without custom styling | No .style.ts file needed |
| **Semantic Structure** | Proper banner role, heading hierarchy, and accessibility labels | WCAG compliant |
| **Smooth Transitions** | Animated background changes when images change | 0.5s smooth transitions |
| **Content Type Variants** | Different labels and layouts for albums, artists, playlists, podcasts | "Album", "Verified Artist", etc. |
| **Performance Optimized** | Efficient color extraction with cleanup and error handling | Graceful fallbacks |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'album' \| 'artist' \| 'playlist' \| 'podcast'` | - | **Required.** Content type - affects label and layout |
| `title` | `string` | - | **Required.** Main title (album name, artist name, etc.) |
| `subtitle` | `string` | - | Secondary information (artist name, track count, etc.) |
| `description` | `string` | - | Additional description (used for artists) |
| `image` | `string` | - | **Required.** Cover image URL for color extraction |

## Design Tokens Integration

The component uses design tokens for consistent styling:

### Container Styling
```tsx
const BANNER_STYLES = {
  container: {
    height: sizes.container.banner,    // Standard banner height
    borderRadius: borderRadius.lg,     // Large rounded corners
    padding: spacing.md,               // Medium padding
  },
  enhancedImage: {
    boxShadow: shadows.large,          // Large shadow for depth
    border: borders.thin,              // Thin border for definition
  },
};
```

### Typography Tokens
```tsx
// Content type label
<Typography variant="caption" weight="bold" color="secondary">

// Main title
<Typography variant="title" size="xl" weight="bold" color="primary" component="h1">

// Subtitle/description
<Typography variant="body" color="secondary">
```

### Layout Tokens
```tsx
// Main layout
<Stack direction="row" spacing="lg" align="center">

// Content stack
<Stack direction="column" spacing="sm" align="start">
```

## Dynamic Color Extraction

### Process Overview
1. **Image Analysis**: Uses `dont-crop` library to extract dominant colors
2. **Gradient Generation**: Creates smooth gradients from extracted colors
3. **Background Application**: Applies gradient with smooth transitions
4. **Error Handling**: Graceful fallback to Spotify brand colors
5. **Performance**: Async loading with component cleanup

### Implementation Details
```tsx
// Color extraction utility
export const getImageGradient = async (imageUrl: string): Promise<string> => {
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = imageUrl;
    });
    
    const gradient = fitGradient(img);
    return gradient;
  } catch (error) {
    return 'linear-gradient(135deg, rgb(35, 35, 35), rgb(15, 15, 15))';
  }
};
```

### Visual Enhancement Strategy
- **Dynamic Backgrounds**: Extracted colors create cohesive color schemes
- **Image Enhancement**: Shadows, borders, and lift effects make images prominent
- **Contrast Optimization**: Automatic color adjustment ensures text readability
- **Smooth Transitions**: 0.5s animations for background changes

## Usage Patterns

### Album Banner
```tsx
<Banner
  type="album"
  title="MAYHEM"
  subtitle="Lady Gaga • 2025 • 14 songs, 53 min 11 sec"
  image="https://example.com/album-cover.jpg"
/>
// Result: Album cover with extracted color gradient background
```

### Artist Profile Banner
```tsx
<Banner
  type="artist"
  title="Taylor Swift"
  description="82,240,376 monthly listeners"
  image="https://example.com/artist-photo.jpg"
/>
// Result: Artist photo with "Verified Artist" label and listener count
```

### Playlist Header
```tsx
<Banner
  type="playlist"
  title="Today's Top Hits"
  subtitle="The hottest tracks right now • 2,847,394 likes"
  image="https://example.com/playlist-cover.jpg"
/>
// Result: Playlist cover with dynamic color-matched background
```

### Podcast Show Banner
```tsx
<Banner
  type="podcast"
  title="The Joe Rogan Experience"
  subtitle="Podcast • 2024 • 156 episodes"
  image="https://example.com/podcast-cover.jpg"
/>
// Result: Podcast cover with "Podcast" label and episode info
```

### Different Content Types
```tsx
// Each type gets appropriate labeling
<Banner type="album" />     // → "Album"
<Banner type="artist" />    // → "Verified Artist"
<Banner type="playlist" />  // → "Playlist"
<Banner type="podcast" />   // → "Podcast"
```

## Architecture & Performance

### Pure Atom Composition
The component follows **proper molecule design principles**:
- **Stack atoms** handle layout and spacing
- **Image atoms** manage image display with enhancement effects
- **Typography atoms** handle text rendering with semantic colors
- **No custom styled-components** - pure composition with minimal inline styles

### Why No .style.ts File?
```tsx
// ❌ Over-engineered: Custom styled-components for simple composition
<BannerContainer><ImageWrapper><StyledImage>

// ✅ Pure composition: Well-designed atoms + minimal inline styles
<div style={bannerStyles}><Stack><Image style={enhancedEffects} /></Stack></div>
```

### Performance Optimizations
```tsx
// Async color extraction with cleanup
useEffect(() => {
  let isMounted = true;
  
  const loadGradient = async () => {
    try {
      const gradient = await getImageGradient(image);
      if (isMounted) {
        setBackgroundGradient(gradient);
      }
    } catch (error) {
      // Silent failure with graceful fallback
    }
  };
  
  loadGradient();
  return () => { isMounted = false; };
}, [image]);
```

### Design Token Benefits
- **Consistency**: All spacing, shadows, and borders use design tokens
- **Maintainability**: Token changes automatically update all banners
- **Accessibility**: Proper contrast ratios and semantic structure
- **Performance**: Optimized transitions and image enhancement

## Visual Enhancement Details

### Image Effects
```tsx
const enhancedImage = {
  boxShadow: shadows.large,    // Multi-layer shadow for depth
  border: borders.thin,        // Subtle border for definition
  // Additional effects applied inline for banner-specific styling
};
```

### Background Gradients
- **Extracted Colors**: Dynamic colors from image analysis
- **Smooth Transitions**: 0.5s animation between different gradients
- **Fallback Gradient**: Spotify brand colors for error cases
- **Contrast Optimization**: Automatic adjustment for text readability

### Layout Hierarchy
- **Cover Image**: Enhanced with shadows and borders (left side)
- **Content Type Label**: Caption typography with bold weight
- **Main Title**: Title variant with xl size and h1 semantic
- **Subtitle/Description**: Body variant with secondary color

## Content Type Handling

### Type-Specific Labels
```tsx
export const getBannerTypeLabel = (bannerType: BannerType): string => {
  switch (bannerType) {
    case 'album': return 'Album';
    case 'playlist': return 'Playlist';
    case 'podcast': return 'Podcast';
    case 'artist': return 'Verified Artist';
    default: return '';
  }
};
```

### Content Display Logic
- **Albums & Playlists**: Show subtitle with track/song information
- **Artists**: Show description with monthly listeners
- **Podcasts**: Show subtitle with episode count and year
- **All Types**: Consistent layout with type-specific labels

## Accessibility

- **Semantic Structure**: Uses `role="banner"` and proper heading hierarchy
- **Screen Reader Support**: Descriptive `aria-label` with content type context
- **Image Alt Text**: Contextual alt text for cover images
- **Color Contrast**: Dynamic backgrounds maintain proper contrast ratios
- **Focus Management**: Proper focus indicators where needed
- **Keyboard Navigation**: Full keyboard support for interactive elements

## Error Handling & Resilience

### Graceful Fallbacks
- **Image Loading Errors**: Fallback to default Spotify gradient
- **Color Extraction Failures**: Silent failure with brand colors
- **Network Issues**: Handles CORS and loading errors gracefully
- **Component Cleanup**: Prevents memory leaks with proper unmounting

### Error Boundary Strategy
```tsx
try {
  const gradient = await getImageGradient(image);
  setBackgroundGradient(gradient);
} catch (error) {
  // Silent failure - keep default gradient for resilience
  // No error UI - maintains smooth user experience
}
```

## Animation & Transitions

### Background Changes
- **Smooth Transitions**: 0.5s ease-in-out for gradient changes
- **Image Loading**: Seamless background updates when images change
- **Performance**: Optimized with CSS transitions, not JavaScript animation

### Visual Effects
- **Image Enhancement**: Shadows and borders for depth
- **Hover States**: Subtle interactive feedback where appropriate
- **Loading States**: Smooth transitions from default to extracted colors

## Testing

The component includes comprehensive unit tests covering:
- Basic rendering with all content types
- Color extraction functionality and error handling
- Accessibility features and semantic structure
- Performance optimizations and cleanup
- Different content type handling (album, artist, playlist, podcast)

Run tests with:
```bash
npm test -- --testPathPattern="Banner"
```

## Recent Improvements ✨

**Design System Integration**:
- **Token Usage**: All spacing, shadows, borders, and sizes use design tokens
- **Atom Composition**: Pure composition approach without custom styling
- **Performance**: Efficient color extraction with proper cleanup
- **Accessibility**: Enhanced semantic structure and ARIA labels
- **Visual Effects**: Improved image enhancement with shadows and borders
- **Error Handling**: Graceful fallbacks for network and processing errors

## Technical Dependencies

- **`dont-crop`**: Efficient color extraction library
- **Design Tokens**: Spacing, shadows, borders, and size tokens
- **Atom Components**: Stack, Image, Typography from design system
- **React Hooks**: useState, useEffect for state management
- **TypeScript**: Full type safety with proper interfaces

## Browser Support

- Modern browsers with CSS gradients and transitions
- Graceful degradation for older browsers
- CORS-enabled image loading for external images
- High contrast mode support for accessibility
- Touch device support for mobile interactions

 