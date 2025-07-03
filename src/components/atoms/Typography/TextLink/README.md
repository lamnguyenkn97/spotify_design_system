# TextLink Component

## Overview
Styled link component with automatic external link handling and variant support for Spotify's navigation.

**Common use cases:**
- Navigation links within the app
- External links to artists and albums
- Action links in text content
- Styled text that behaves like links

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Auto Element** | `<a>` for href, `<span>` otherwise | Semantic HTML selection |
| **External Detection** | Automatic target="_blank" for external URLs | Safe external navigation |
| **Variants** | `default`, `muted`, `danger` color schemes | Different contexts and states |
| **Weight Control** | Font weight options | Visual hierarchy and emphasis |
| **Underline Control** | Optional underline styling | Clean or traditional link styles |
| **Component Override** | Custom element selection | Flexible HTML output |

## Styling & Tokens

- **Colors**: Theme-based color variants for different contexts
- **Typography**: Font weight and underline control
- **Hover States**: Interactive feedback for user actions
- **Focus States**: Keyboard navigation indicators
- **External Link**: Automatic security attributes (noopener noreferrer)

## Usage Patterns

```tsx
// Basic navigation link
<TextLink href="/playlist/123">
  My Playlist
</TextLink>

// External artist link
<TextLink href="https://open.spotify.com/artist/123">
  View on Spotify
</TextLink>

// Styled text as link
<TextLink 
  component="button"
  variant="danger"
  weight="medium"
  onClick={handleDelete}
>
  Delete Playlist
</TextLink>

// Muted link without underline
<TextLink href="/help" variant="muted" underline={false}>
  Learn more
</TextLink>
```

## Accessibility

- Uses semantic `<a>` elements for proper link behavior
- External links include security attributes
- Keyboard navigation with proper focus indicators
- Screen readers announce links with context
- Supports all standard link accessibility patterns 