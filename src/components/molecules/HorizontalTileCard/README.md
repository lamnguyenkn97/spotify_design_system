# HorizontalTileCard Component

## Overview
A horizontal card component for displaying content like playlists, albums, podcasts, and recently played tracks with optional progress display. Commonly used in **Spotify's sidebar navigation**, **recently played sections**, and **playlist views**.

The component has been **fully refactored** to use design tokens instead of hardcoded values, semantic color functions, and proper atom composition for better maintainability and consistency.

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Design Token Integration** | Uses spacing, colors, animations, shadows, and size tokens | Consistent with design system |
| **Semantic Colors** | Smart color functions based on component state | Disabled, active, hover states |
| **Atom Composition** | Built using Stack, Image, Typography, and Progress atoms | Pure composition approach |
| **Progress Display** | Uses Progress component for media playback progress | Podcast/music progress tracking |
| **Responsive Sizing** | Two sizes (small/large) with appropriate image dimensions | 32px vs 56px images |
| **Enhanced Hover Effects** | Lift transforms and shadow effects using tokens | Professional interaction feedback |
| **Accessibility** | Full keyboard navigation, ARIA labels, and screen reader support | WCAG compliant |
| **Flexible Width** | Supports both pixel and percentage-based widths | Responsive layout support |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `string` | - | **Required.** Image URL for the card |
| `title` | `string` | - | **Required.** Main title of the card |
| `subtitle` | `string` | - | Optional subtitle or description |
| `showProgress` | `boolean` | `false` | Whether to show the progress bar |
| `progressValue` | `number` | `0` | Progress value between 0 and 1 |
| `onClick` | `() => void` | - | Click handler for the card |
| `width` | `string \| number` | `'60%'` | Width of the card (px or %) |
| `className` | `string` | - | Additional className for styling |
| `isActive` | `boolean` | `false` | Whether the card is currently selected/active |
| `disabled` | `boolean` | `false` | Whether the card is disabled |
| `size` | `'small' \| 'large'` | `'large'` | Size of the card |
| `data-testid` | `string` | - | Test identifier for testing |

## Design Tokens Integration

The component extensively uses design tokens instead of hardcoded values:

### Color Tokens
```tsx
// Semantic color functions using tokens
colors.grey.grey1          // Default background
colors.grey.grey2          // Hover/active background
opacity.disabled           // Disabled state opacity (0.5)
```

### Animation Tokens
```tsx
animations.transitions.card    // Card hover transitions
sizes.transform.lift.xs       // Hover lift effect (translateY(-2px))
shadows.hover                 // Hover shadow effect
```

### Spacing Tokens
```tsx
spacing.xs / spacing.sm      // Padding values
spacing.sm / spacing.md      // Gap between elements
borderRadius.sm / borderRadius.md  // Border radius values
```

### Size Tokens
```tsx
sizes.avatar.sm    // 32px for small cards
sizes.avatar.lg    // 56px for large cards
```

## Usage Patterns

### Basic Playlist Card
```tsx
<HorizontalTileCard
  title="Liked Songs"
  subtitle="Playlist • 207 songs"
  image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg"
  onClick={() => playPlaylist('liked')}
/>
```

### Recently Played Track with Progress
```tsx
<HorizontalTileCard
  title="#33 - người lớn đổi thay"
  subtitle="Podcast • Giang ơi Radio"
  image="https://i.scdn.co/image/ab6765630000ba8ae24c2a24ccb969befb377b5e"
  showProgress={true}
  progressValue={0.45}
  onClick={() => resumePlayback()}
/>
```

### Small Sidebar Navigation
```tsx
<HorizontalTileCard
  title="Create Playlist"
  subtitle="Quick action"
  image="/icons/create-playlist.svg"
  size="small"
  width="100%"
  onClick={() => createPlaylist()}
/>
```

### Active State Card
```tsx
<HorizontalTileCard
  title="Currently Playing"
  subtitle="Taylor Swift • Lover"
  image="/current-track.jpg"
  isActive={true}
  showProgress={true}
  progressValue={0.72}
/>
```

### Disabled State
```tsx
<HorizontalTileCard
  title="Premium Feature"
  subtitle="Upgrade to access"
  image="/premium-icon.svg"
  disabled={true}
  onClick={() => showUpgradeModal()}
/>
```

### Custom Width Examples
```tsx
{/* Percentage width */}
<HorizontalTileCard
  {...props}
  width="80%"
/>

{/* Fixed pixel width */}
<HorizontalTileCard
  {...props}
  width="320px"
/>

{/* Number converts to pixels */}
<HorizontalTileCard
  {...props}
  width={300}
/>
```

## Architecture & Refactoring

### Pure Atom Composition
The component follows **proper molecule design principles**:
- **Stack atoms** handle layout and spacing
- **Image atoms** manage image display and fallbacks
- **Typography atoms** handle text rendering
- **Progress atoms** display playback progress
- **No custom styled-components** - pure composition

### Semantic Color Functions
Instead of directly using color tokens, the component uses semantic functions:
```tsx
const getSemanticColors = (disabled, isActive, isHovered) => {
  // Returns appropriate colors based on state
  // Improves maintainability and readability
};
```

### Design Token Benefits
- **Consistency**: All spacing, colors, and animations use tokens
- **Maintainability**: Changes to tokens automatically update component
- **Accessibility**: Proper contrast ratios and timing built into tokens
- **Performance**: Optimized transitions and animations

## Accessibility

- **Keyboard Navigation**: Full support for Enter and Space keys
- **Screen Readers**: Proper ARIA labels with context (`"Playlist - 207 songs"`)
- **Focus Management**: Correct tab order and focus indicators
- **Disabled States**: Proper `aria-disabled` and `tabIndex` handling
- **Progress Indication**: Progress bar with percentage in `aria-label`
- **Semantic Structure**: Uses `role="button"` for interactive elements

## States & Interactions

### Visual States
- **Default**: Grey background with pointer cursor
- **Hover**: Slightly darker background with lift effect and shadow
- **Active**: Darker background indicating current selection
- **Disabled**: Muted colors with disabled cursor and reduced opacity

### Interactive Features
- **Click**: Triggers onClick handler if provided
- **Keyboard**: Enter and Space key support
- **Progress**: Visual progress indicator for media content
- **Hover Effects**: Smooth transitions with lift and shadow
- **Focus**: Keyboard focus indicators

## Testing

The component includes comprehensive unit tests covering:
- Basic rendering and props
- Different sizes and states
- Click and keyboard interactions
- Progress display functionality
- Accessibility attributes
- Edge cases and error handling

Run tests with:
```bash
npm test -- --testPathPattern="HorizontalTileCard"
```

## Recent Improvements ✨

**Design System Integration**:
- **Token Usage**: Replaced all hardcoded values with design tokens
- **Semantic Colors**: Smart color functions instead of direct token usage
- **Progress Component**: Replaced Slider with proper Progress component
- **Atom Composition**: Pure composition approach without custom styling
- **Enhanced Interactions**: Proper hover effects with shadows and transforms
- **Accessibility**: Improved keyboard navigation and screen reader support 