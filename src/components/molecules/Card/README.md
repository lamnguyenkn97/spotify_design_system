# Card

A versatile card component for displaying content like albums, playlists, and artists with optional play functionality.

## Overview

The Card component displays content in a clean, elevated container with hover effects and optional interactive elements. It supports different sizes, variants, and includes accessibility features with configurable dimensions.

## Key Features

- **Flexible sizing**: `sm` (140px), `md` (160px), `lg` (180px) with configurable image sizes
- **Content variants**: Default layout or artist-specific centered layout  
- **Interactive elements**: Optional play button with hover effects
- **Hover effects**: Smooth lift animation and image scaling
- **Responsive design**: Configurable sizing with design tokens
- **Accessibility**: Proper semantic structure, ARIA labels, and keyboard navigation

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | **Required.** Main title of the card |
| `subtitle` | `string` | - | Optional subtitle (hidden for artist variant) |
| `imageUrl` | `string` | - | Cover image URL |
| `variant` | `'default' \| 'artist'` | `'default'` | Card variant - affects layout and content |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Card size - controls width and default image size |
| `imageSize` | `'sm' \| 'md' \| 'lg'` | - | Override default image size (auto-selected based on card size) |
| `onPlayClick` | `() => void` | - | Play button click handler |
| `showPlayButton` | `boolean` | `true` | Whether to show play button on hover |
| `className` | `string` | - | Additional CSS classes |
| `aria-label` | `string` | - | Custom accessibility label |

## Design Tokens

The component uses configurable design tokens instead of hardcoded values:

```tsx
// Card dimensions (configurable)
const cardDimensions = {
  sm: { width: '140px', imageSize: 'md' },
  md: { width: '160px', imageSize: 'lg' }, 
  lg: { width: '180px', imageSize: 'lg' },
};

// Play button positioning (configurable)
const playButtonPosition = {
  top: '30%',
  right: '20%',
};

// Animation and styling tokens
animations.transitions.card     // Smooth hover transitions
animations.scale.small         // Image hover scaling
colors.grey.grey2             // Hover background
sizes.transform.lift.xs       // Hover lift effect
```

## Usage Patterns

### Basic Card (Default Size)
```tsx
<Card
  title="Abbey Road"
  subtitle="The Beatles • 1969 • 17 songs"
  imageUrl="/albums/abbey-road.jpg"
/>
```

### Different Sizes
```tsx
{/* Small card */}
<Card
  title="Daily Mix 1"
  subtitle="Your daily mix"
  imageUrl="/playlists/daily-mix.jpg"
  size="sm"
/>

{/* Medium card (default) */}
<Card
  title="Liked Songs"
  subtitle="64 songs"
  imageUrl="/playlists/liked.jpg"
  size="md"
/>

{/* Large card */}
<Card
  title="Discover Weekly"
  subtitle="Your weekly mixtape"
  imageUrl="/playlists/discover.jpg"
  size="lg"
/>
```

### Artist Card
```tsx
<Card
  title="Taylor Swift"
  variant="artist"
  imageUrl="/artists/taylor-swift.jpg"
  size="md"
/>
```

### Interactive Card with Play Button
```tsx
<Card
  title="Liked Songs"
  subtitle="64 songs"
  imageUrl="/playlists/liked.jpg"
  onPlayClick={() => playPlaylist('liked')}
  showPlayButton={true}
/>
```

### Custom Image Size
```tsx
<Card
  title="Album Name"
  subtitle="Artist Name"
  imageUrl="/albums/cover.jpg"
  size="lg"
  imageSize="sm"  // Override default image size
/>
```

## Accessibility

- Uses semantic `article` role for proper structure
- Provides comprehensive ARIA labels for interactive elements
- Maintains proper focus management with `tabIndex`
- Supports keyboard navigation (Enter/Space keys)
- Auto-generates accessible labels when not provided

## Responsive Behavior

Cards adapt to their container while maintaining aspect ratios:
- Images maintain 1:1 aspect ratio for consistent layout
- Content text is center-aligned for all variants
- Play button positioning scales with card size
- Hover effects work consistently across all sizes

## Animation & Interactions

- **Hover Effects**: Smooth lift animation with background color change
- **Image Scaling**: Subtle scale effect on image hover
- **Play Button**: Fade-in animation with scale effect
- **Keyboard Support**: Full keyboard navigation support 