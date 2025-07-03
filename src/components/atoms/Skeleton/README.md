# Skeleton Component

## Overview
Loading placeholders that maintain layout space while content loads in Spotify's interface.

**Common use cases:**
- Content loading states
- Image and media placeholders
- List item skeletons
- Card content placeholders

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Shape Variants** | `text`, `rectangular`, `circular`, `rounded` | Different content types |
| **Animations** | `pulse`, `wave`, `none` | Loading feedback options |
| **Flexible Sizing** | Custom width/height support | Any content dimensions |
| **Loading Control** | Shows/hides based on loading state | Conditional rendering |
| **Content Replacement** | Graceful transition to real content | Seamless loading experience |
| **Responsive** | Adapts to container constraints | Mobile-friendly behavior |

## Styling & Tokens

- **Colors**: `colors.skeleton.background/highlight` for base and shimmer
- **Animations**: `animations.skeleton.pulse/wave` for loading feedback
- **Shapes**: `borderRadius.skeleton.*` for different content types
- **Transitions**: Smooth animations respecting motion preferences
- **Layout**: Maintains space to prevent layout shifts

## Usage Patterns

```tsx
// Text line skeleton
<Skeleton variant="text" width="80%" />

// Image placeholder
<Skeleton 
  variant="rectangular" 
  width={200} 
  height={200} 
/>

// User avatar skeleton
<Skeleton 
  variant="circular" 
  width={40} 
  height={40} 
/>

// Conditional loading
<Skeleton loading={isLoading} animation="wave">
  <UserProfile data={userData} />
</Skeleton>
```

## Accessibility

- Uses `role="status"` to announce loading state
- `aria-label="Loading..."` provides context
- Screen readers announce when content is loading
- Doesn't interfere with keyboard navigation
- Smooth transition preserves focus when content loads 