# Card Component

## Overview
A versatile card component for displaying **albums, playlists, artists, and podcasts** with optional play functionality and smooth hover effects. Commonly used in **Spotify's grid layouts**, **home page sections**, and **browse views**.

The component has been **fully optimized** with design tokens, atom composition, and performance enhancements for a production-ready Spotify-style experience.

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Design Token Integration** | Uses spacing, colors, animations, shadows, and size tokens | Consistent with design system |
| **Atom Composition** | Built using Stack, Image, Typography, Button, and Icon atoms | Pure composition approach |
| **Responsive Sizing** | Three sizes (sm/md/lg) with appropriate dimensions | 140px, 160px, 180px widths |
| **Artist vs Default Variants** | Different layouts for artists (circular) vs content (square) | Circle images vs rounded corners |
| **Interactive Play Button** | Hover-triggered play button with smooth animations | Fade-in with scale effects |
| **Enhanced Hover Effects** | Lift transforms, image scaling, and background changes | Professional interaction feedback |
| **Accessibility** | Full keyboard navigation, ARIA labels, and screen reader support | WCAG compliant |
| **Performance Optimized** | Memoized calculations and callback optimizations | React.memo, useMemo, useCallback |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | **Required.** Main title of the card |
| `subtitle` | `string` | - | Optional subtitle (hidden for artist variant) |
| `imageUrl` | `string` | - | Cover image URL |
| `variant` | `'default' \| 'artist'` | `'default'` | Card variant - affects layout and image shape |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Card size - controls width and default image size |
| `imageSize` | `'sm' \| 'md' \| 'lg'` | - | Override default image size (auto-selected based on card size) |
| `onPlayClick` | `() => void` | - | Play button click handler |
| `showPlayButton` | `boolean` | `true` | Whether to show play button on hover |
| `className` | `string` | - | Additional CSS classes |
| `aria-label` | `string` | - | Custom accessibility label |

## Design Tokens Integration

The component extensively uses design tokens for consistency:

### Size Configuration
```tsx
const getCardDimensions = (size: CardSize) => ({
  sm: { width: '140px', imageSize: 'md' },
  md: { width: '160px', imageSize: 'lg' }, 
  lg: { width: '180px', imageSize: 'lg' },
});
```

### Animation Tokens
```tsx
animations.transitions.card        // Card hover transitions
animations.transitions.transform   // Image scaling transitions
animations.scale.small            // Image hover scaling (1.05)
sizes.transform.lift.xs           // Hover lift effect (translateY(-2px))
sizes.zIndex.dropdown             // Play button z-index layering
```

### Spacing & Layout Tokens
```tsx
spacing.sm              // Container padding
spacing.xs              // Content gap
borderRadius.md         // Card border radius
colors.grey.grey2       // Hover background
colors.primary.brand    // Play button background
```

### Play Button Positioning
```tsx
const getPlayButtonPosition = () => ({
  top: '30%',    // Positioned for visual balance
  right: '20%',  // Positioned for visual balance
});
```

## Usage Patterns

### Basic Album Card
```tsx
<Card
  title="Abbey Road"
  subtitle="The Beatles • 1969 • 17 songs"
  imageUrl="/albums/abbey-road.jpg"
  onPlayClick={() => playAlbum('abbey-road')}
/>
```

### Artist Card (Circular Image)
```tsx
<Card
  title="Taylor Swift"
  variant="artist"
  imageUrl="/artists/taylor-swift.jpg"
  size="lg"
  onPlayClick={() => playArtistRadio('taylor-swift')}
/>
```

### Playlist Grid (Different Sizes)
```tsx
{/* Featured playlist - large */}
<Card
  title="Today's Top Hits"
  subtitle="The hottest tracks right now"
  imageUrl="/playlists/top-hits.jpg"
  size="lg"
/>

{/* Regular playlists - medium */}
<Card
  title="Daily Mix 1"
  subtitle="Made for you"
  imageUrl="/playlists/daily-mix.jpg"
  size="md"
/>

{/* Compact view - small */}
<Card
  title="Discover Weekly"
  subtitle="Your weekly mixtape"
  imageUrl="/playlists/discover.jpg"
  size="sm"
/>
```

### Custom Image Size Override
```tsx
<Card
  title="Podcast Series"
  subtitle="Tech Talk"
  imageUrl="/podcasts/tech-talk.jpg"
  size="lg"
  imageSize="sm"  // Smaller image within large card
/>
```

### Without Play Button
```tsx
<Card
  title="Coming Soon"
  subtitle="Pre-order now"
  imageUrl="/albums/coming-soon.jpg"
  showPlayButton={false}
/>
```

### With Custom Accessibility
```tsx
<Card
  title="Workout Mix"
  subtitle="High energy tracks"
  imageUrl="/playlists/workout.jpg"
  aria-label="Workout Mix playlist with 45 high energy tracks"
  onPlayClick={() => playWorkoutMix()}
/>
```

## Architecture & Performance

### Pure Atom Composition
The component follows **proper molecule design principles**:
- **Stack atoms** handle layout and spacing
- **Image atoms** manage image display with fallbacks
- **Typography atoms** handle text rendering with overflow
- **Button & Icon atoms** create the interactive play button
- **No custom styled-components** - pure composition with inline styles

### Performance Optimizations
```tsx
// Memoized calculations for expensive operations
const styles = useMemo(() => getCardStyles(isHovered, size), [isHovered, size]);
const cardAriaLabel = useMemo(() => 
  ariaLabel || `${title}${subtitle ? ` by ${subtitle}` : ''}${isArtist ? ' artist' : ''}`,
  [ariaLabel, title, subtitle, isArtist]
);

// Memoized event handlers to prevent unnecessary re-renders
const handleMouseEnter = useCallback(() => setIsHovered(true), []);
const handleMouseLeave = useCallback(() => setIsHovered(false), []);
```

### Design Token Benefits
- **Consistency**: All animations, spacing, and colors use design tokens
- **Maintainability**: Token changes automatically update all cards
- **Accessibility**: Proper timing and contrast ratios built into tokens
- **Performance**: Optimized transitions and hover effects

## Accessibility

- **Semantic Structure**: Uses `article` role with proper heading hierarchy
- **Keyboard Navigation**: Full support for Enter and Space keys  
- **Screen Readers**: Comprehensive ARIA labels with context
- **Focus Management**: Proper tab order and focus indicators
- **Play Button**: Separate accessible labels for play actions
- **Auto-generated Labels**: Smart defaults for accessibility when not provided

## States & Interactions

### Visual States
- **Default**: Transparent background with subtle shadows
- **Hover**: Background change, lift effect, image scaling, play button fade-in
- **Focus**: Keyboard focus indicators for accessibility
- **Artist vs Default**: Circular vs rounded image shapes

### Interactive Features
- **Hover Effects**: Smooth lift, background change, image scale, play button reveal
- **Play Button**: Click to trigger play action with visual feedback
- **Keyboard**: Enter and Space key support for all interactive elements
- **Performance**: Optimized with memoization for smooth 60fps interactions

## Animation Details

### Hover Sequence
1. **Background Change**: Transparent → `colors.grey.grey2`
2. **Lift Effect**: `translateY(0)` → `sizes.transform.lift.xs` (-2px)
3. **Image Scale**: `scale(1)` → `scale(1.05)` using `animations.scale.small`
4. **Play Button**: Opacity 0 → 1, scale 0.8 → 1, translateY 8px → 0

### Transition Timing
- **Card Container**: `animations.transitions.card` (smooth lift and background)
- **Image Transform**: `animations.transitions.transform` (image scaling)
- **Play Button**: `animations.transitions.all` (opacity and transform)

## Testing

The component includes comprehensive unit tests covering:
- Basic rendering and props validation
- Different sizes and variants (artist vs default)
- Play button functionality and hover states
- Keyboard navigation and accessibility
- Performance optimizations and memoization

Run tests with:
```bash
npm test -- --testPathPattern="Card"
```

## Recent Improvements ✨

**Design System Integration**:
- **Token Usage**: All spacing, colors, and animations use design tokens
- **Atom Composition**: Pure composition approach without custom styling
- **Performance**: Memoized calculations and optimized event handlers
- **Accessibility**: Enhanced keyboard navigation and screen reader support
- **Variants**: Proper artist vs default layouts with appropriate image shapes
- **Play Button**: Smooth animations with proper z-index layering

## Browser Support

- Modern browsers with CSS transforms and transitions
- Graceful degradation for older browsers
- Touch device support for mobile interactions
- High contrast mode support for accessibility 