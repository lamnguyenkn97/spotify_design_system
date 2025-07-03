# Image Component

## Overview
Displays images with fallback handling, lazy loading, and placeholder icons for Spotify's content.

**Common use cases:**
- Album artwork display
- User avatars and profile pictures
- Playlist thumbnails
- Content with graceful fallback handling

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Variants** | `album`, `avatar`, `playlist`, `default` | Different placeholder icons |
| **Sizes** | `sm`, `md`, `lg` using design tokens | Profile vs thumbnail vs hero images |
| **Shapes** | `square`, `rounded`, `circle` | Album covers vs user avatars |
| **Fallback** | Primary src → fallbackSrc → placeholder | Graceful error handling |
| **Lazy Loading** | Native loading attribute support | Performance optimization |
| **Placeholders** | FontAwesome icons by variant | Contextual loading states |

## Styling & Tokens

- **Sizes**: `spacing.image.sm/md/lg` for consistent dimensions
- **Shapes**: `borderRadius.md/lg/round` for different contexts
- **Colors**: `colors.image.placeholder.*` and `colors.image.background`
- **Transitions**: `transitions.opacity` for smooth loading
- **Layout**: Flex container with object-fit cover

## Usage Patterns

```tsx
// Basic album image
<Image src="/album.jpg" alt="Album cover" variant="album" />

// User avatar with fallback
<Image 
  src="/avatar.jpg" 
  alt="User avatar" 
  variant="avatar" 
  shape="circle"
  fallbackSrc="/default-avatar.jpg" 
/>

// Large playlist thumbnail
<Image 
  src="/playlist.jpg" 
  alt="Playlist cover" 
  variant="playlist" 
  size="lg" 
/>
```

## Accessibility

- Requires `alt` attribute for screen readers
- Proper `<img>` element with semantic meaning
- Fallback icons maintain context with meaningful symbols
- Lazy loading works with assistive technologies
- Error states don't break accessibility 