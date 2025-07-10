# MusicPlayer Component

## Overview
A comprehensive audio player component that displays current track information, playback controls, progress bar, and volume control. **Fully refactored** with design tokens, atom composition, and performance optimizations following Spotify's design patterns.

The component has been **completely modernized** with semantic color functions, memoized calculations, accessibility enhancements, and robust error handling for a production-ready Spotify-style music player experience.

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Design Token Integration** | Uses spacing, colors, animations, shadows, and size tokens | Consistent with design system |
| **Atom Composition** | Built using Stack, Image, Typography, Button, Icon, and Progress atoms | Pure composition approach |
| **Sub-component Architecture** | Modular components: PlayerControls, ProgressBar, VolumeControl, NowPlaying | Maintainable and testable |
| **Interactive Progress Control** | Click-to-seek with keyboard navigation (Arrow keys) | Professional interaction feedback |
| **Volume Control** | Interactive volume slider with mute/unmute functionality | Keyboard accessible |
| **Performance Optimized** | Memoized calculations, useCallback hooks, and React.memo | Optimized rendering |
| **Accessibility Enhanced** | Full keyboard navigation, ARIA labels, and screen reader support | WCAG compliant |
| **Error Handling** | Fallback handlers, image error handling, and graceful degradation | Robust user experience |
| **Responsive Design** | Flexible layout that works in fixed and relative positioning | Storybook and production ready |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentTrack` | `Track \| undefined` | - | Current track information with title, artist, album, coverUrl |
| `isPlaying` | `boolean` | `false` | Whether the player is currently playing |
| `currentTime` | `number` | `0` | Current playback time in seconds |
| `duration` | `number` | `0` | Total track duration in seconds |
| `volume` | `number` | `100` | Volume level (0-100) |
| `onPlayPause` | `() => void` | - | Callback when play/pause is clicked |
| `onNext` | `() => void` | - | Callback when next track is clicked |
| `onPrevious` | `() => void` | - | Callback when previous track is clicked |
| `onSeek` | `(time: number) => void` | - | Callback when seeking to a specific time |
| `onVolumeChange` | `(volume: number) => void` | - | Callback when volume is changed |
| `className` | `string` | - | Additional CSS classes |
| `style` | `React.CSSProperties` | - | Custom styles (merged with defaults) |

## Design Tokens Integration

The component extensively uses design tokens for consistency:

### Layout & Sizing
```tsx
const PLAYER_STYLES = {
  container: {
    height: sizes.container.header,        // 64px - consistent header height
    zIndex: sizes.zIndex.overlay,          // 1200 - above other content
    borderColor: colors.grey.grey3,        // Consistent border color
  },
  centerSection: {
    maxWidth: sizes.maxWidth.modal,        // 600px - constrain center section
  },
};
```

### Colors & Theming
```tsx
const getPlayerColors = () => ({
  background: colors.primary.black,        // Main player background
  border: colors.grey.grey3,               // Border color
  text: {
    primary: colors.primary.white,         // Main text color
    secondary: colors.grey.grey6,          // Secondary text color
  },
});
```

### Animation Tokens
```tsx
animations.transitions.all              // Smooth transitions
animations.transitions.card            // Component hover effects
```

## Sub-components

### PlayerControls
**Purpose**: Play/pause, previous, and next track controls
**Features**:
- Memoized for performance with `React.memo`
- Accessibility with proper ARIA labels
- ButtonSize/ButtonVariant enums for consistent styling
- FontAwesome icons for visual feedback

### ProgressBar
**Purpose**: Track progress display and seeking functionality
**Features**:
- Replaced Slider with Progress component for semantic correctness
- Click-to-seek with keyboard navigation (Arrow keys ±5s)
- Memoized time formatting and progress calculations
- Comprehensive accessibility with ARIA slider attributes

### VolumeControl
**Purpose**: Volume adjustment with mute/unmute functionality
**Features**:
- Interactive Progress component for volume seeking
- Keyboard navigation (Arrow keys ±5)
- Mute state handling with visual feedback
- Smart volume icon selection based on level

### NowPlaying
**Purpose**: Current track information display
**Features**:
- Image component with size="lg" and error handling
- Updated Typography variants (removed deprecated body1/body2)
- Semantic color functions for track presence/absence
- Text overflow handling with ellipsis

## Usage Patterns

### Basic Usage
```tsx
<MusicPlayer
  currentTrack={{
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    coverUrl: "https://example.com/cover.jpg"
  }}
  isPlaying={true}
  currentTime={45}
  duration={180}
  volume={80}
  onPlayPause={() => togglePlay()}
  onNext={() => nextTrack()}
  onPrevious={() => previousTrack()}
  onSeek={(time) => seekTo(time)}
  onVolumeChange={(vol) => setVolume(vol)}
/>
```

### With Custom Styling (Storybook)
```tsx
<MusicPlayer
  currentTrack={track}
  isPlaying={isPlaying}
  onPlayPause={handlePlayPause}
  style={{
    position: 'relative',
    bottom: 'auto',
    borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  }}
/>
```

### Without Track (Loading State)
```tsx
<MusicPlayer
  currentTrack={undefined}
  isPlaying={false}
  currentTime={0}
  duration={0}
  volume={50}
  onPlayPause={() => {}}
  onNext={() => {}}
  onPrevious={() => {}}
  onSeek={() => {}}
  onVolumeChange={() => {}}
/>
```

### Interactive State Management
```tsx
const [isPlaying, setIsPlaying] = useState(false);
const [currentTime, setCurrentTime] = useState(0);
const [volume, setVolume] = useState(100);

<MusicPlayer
  currentTrack={currentTrack}
  isPlaying={isPlaying}
  currentTime={currentTime}
  volume={volume}
  onPlayPause={() => setIsPlaying(!isPlaying)}
  onSeek={(time) => setCurrentTime(time)}
  onVolumeChange={(vol) => setVolume(vol)}
/>
```

## Architecture & Performance

### Pure Atom Composition
The component follows **proper molecule design principles**:
- **Stack atoms** handle layout and spacing throughout
- **Image atoms** manage album artwork with fallbacks
- **Typography atoms** handle all text rendering with proper variants
- **Button & Icon atoms** create interactive controls
- **Progress atoms** provide semantic progress display
- **No custom styled-components** - pure composition with design tokens

### Performance Optimizations
```tsx
// Memoized default handlers to prevent unnecessary re-renders
const defaultHandlers = useMemo(() => ({
  onPlayPause: () => {},
  onNext: () => {},
  onPrevious: () => {},
  onSeek: (_: number) => {},
  onVolumeChange: (_: number) => {},
}), []);

// Memoized player colors and styles
const playerColors = useMemo(() => getPlayerColors(), []);
const mergedStyles = useMemo(() => ({
  ...getDefaultPlayerStyles(),
  ...style,
}), [style]);

// Memoized event handlers with useCallback
const handlePlayPause = useCallback(() => {
  (onPlayPause || defaultHandlers.onPlayPause)();
}, [onPlayPause, defaultHandlers.onPlayPause]);
```

### Sub-component Performance
```tsx
// All sub-components use React.memo for optimal rendering
export const PlayerControls = memo<PlayerControlsProps>(({ ... }) => { ... });
export const ProgressBar = memo<ProgressBarProps>(({ ... }) => { ... });
export const VolumeControl = memo<VolumeControlProps>(({ ... }) => { ... });
export const NowPlaying = memo<NowPlayingProps>(({ ... }) => { ... });
```

## Accessibility

### Keyboard Navigation
- **ProgressBar**: Arrow keys for seeking (±5 seconds)
- **VolumeControl**: Arrow keys for volume adjustment (±5)
- **PlayerControls**: Standard button keyboard activation
- **Tab Order**: Logical flow through all interactive elements

### Screen Reader Support
```tsx
// Progress bar accessibility
<div
  role="slider"
  aria-label={`Seek to position: ${currentTime} of ${duration}`}
  aria-valuemin={0}
  aria-valuemax={duration}
  aria-valuenow={currentTime}
  tabIndex={0}
/>

// Volume control accessibility
<div
  role="slider"
  aria-label={`Volume: ${displayVolume}%`}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuenow={displayVolume}
  tabIndex={0}
/>
```

### Visual Accessibility
- **Focus indicators**: Proper focus rings for keyboard navigation
- **Color contrast**: Semantic color functions ensure proper contrast
- **State indication**: Clear visual feedback for play/pause states
- **Error handling**: Graceful fallbacks for missing data

## Error Handling & Fallbacks

### Image Error Handling
```tsx
<Image
  src={displayValues.coverUrl}
  alt={`${displayValues.title} album cover`}
  size="lg"
  onError={(e) => {
    e.currentTarget.src = NOW_PLAYING_DEFAULTS.coverUrl;
  }}
/>
```

### Missing Data Fallbacks
```tsx
const NOW_PLAYING_DEFAULTS = {
  title: 'Not Playing',
  artist: 'Unknown Artist',
  coverUrl: 'https://via.placeholder.com/56x56/333333/ffffff?text=♪',
};
```

### Handler Fallbacks
```tsx
// Graceful degradation when handlers are not provided
const handlePlayPause = useCallback(() => {
  (onPlayPause || defaultHandlers.onPlayPause)();
}, [onPlayPause, defaultHandlers.onPlayPause]);
```

## States & Interactions

### Visual States
- **Playing**: Play icon becomes pause icon, progress bar animates
- **Paused**: Pause icon becomes play icon, progress bar static
- **No Track**: Dimmed display with fallback text and placeholder image
- **Volume States**: Different icons for mute, low, and high volume

### Interactive Behaviors
- **Progress Seeking**: Click anywhere on progress bar to seek
- **Volume Control**: Click on volume bar to adjust, button to mute/unmute
- **Keyboard Navigation**: Arrow keys for fine-grained control
- **Responsive Layout**: Adapts to different container sizes

## Testing

The component includes comprehensive test coverage for:
- **Basic rendering** with different prop combinations
- **User interactions** (play/pause, seeking, volume control)
- **Error handling** (missing tracks, image failures)
- **Accessibility** (keyboard navigation, ARIA attributes)
- **Performance** (memoization, callback stability)

## Storybook Integration

The component includes multiple Storybook stories:
- **Default**: Basic player state
- **Playing**: Active playback state
- **Paused**: Paused state with progress
- **Low Volume**: Volume control demonstration
- **Muted**: Muted state display
- **No Track**: Empty state handling
- **Component Showcase**: Individual sub-components
- **Playground**: Interactive testing environment

## Migration Notes

If upgrading from the previous version:
1. **Button enums**: ButtonSize/ButtonVariant are maintained for type safety
2. **Progress component**: Slider replaced with Progress for semantic correctness
3. **Image props**: Use `size="lg"` instead of `width`/`height` props
4. **Typography variants**: Updated to use standardized variant names
5. **Design tokens**: All hardcoded values replaced with design tokens
6. **Performance**: Added memoization - ensure stable callback references 