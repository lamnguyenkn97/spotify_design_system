# Equalizer Component

## Overview
An animated audio visualization component that displays vertical bars that animate when audio is playing. Commonly used in music players to indicate that a track is currently active.

**Common use cases:**
- Music player "now playing" indicators
- Audio playback status visualization
- Playlist item active state
- Queue item indicators

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Animation** | Smooth wave-like animation when playing | Three bars with staggered delays |
| **Sizes** | `sm`, `md`, `lg` | Different sizes for different contexts |
| **Colors** | Customizable bar color | Defaults to brand green |
| **State Control** | `isPlaying` prop controls animation | Shows/hides animation |

## Styling & Tokens

- **Colors**: Defaults to `colors.primary.brand` (Spotify green)
- **Sizes**: Configurable via `size` prop with predefined dimensions
- **Animations**: Smooth wave animation with staggered delays for natural effect
- **Accessibility**: Uses `role="img"` with descriptive `aria-label`

## Usage Patterns

```tsx
// Basic usage
<Equalizer isPlaying={isPlaying} />

// In a music player context
<Stack direction="row" spacing="sm" align="center">
  <Equalizer isPlaying={isPlaying} size="sm" />
  <Typography variant="body">Now Playing</Typography>
</Stack>

// Custom color
<Equalizer 
  isPlaying={isPlaying} 
  color={colors.primary.brandHighlight}
  size="md"
/>

// In a playlist item
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Equalizer isPlaying={currentTrackId === track.id} size="sm" />
  <TrackInfo track={track} />
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isPlaying` | `boolean` | `false` | Whether the equalizer is active/playing |
| `color` | `string` | `colors.primary.brand` | Color of the bars |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the equalizer |
| `className` | `string` | - | Additional CSS class |
| `style` | `React.CSSProperties` | - | Inline styles |
| `aria-label` | `string` | Auto (based on `isPlaying`) | ARIA label for accessibility |

## Size Specifications

| Size | Width | Height | Bar Width | Gap |
|------|-------|--------|-----------|-----|
| `sm` | 12px | 12px | 2px | 2px |
| `md` | 16px | 16px | 3px | 3px |
| `lg` | 20px | 20px | 4px | 4px |

## Animation Details

- **Duration**: 0.8s per cycle
- **Easing**: `ease-in-out`
- **Bars**: 3 bars with delays of 0s, 0.2s, and 0.4s
- **Effect**: Creates a wave-like animation when `isPlaying` is true
- **Transform**: Bars scale from 30% to 100% height

## Accessibility

- Uses `role="img"` to indicate it's a decorative image
- Provides descriptive `aria-label` based on playing state
- Default labels: "Audio playing" when active, "Audio paused" when inactive
- Custom `aria-label` can be provided for specific contexts

