# Divider Component

## Overview
Visual separators for creating clean breaks between content sections in Spotify's interface.

**Common use cases:**
- Section separators in lists and menus
- Content block divisions
- Sidebar and panel separations

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Orientations** | Horizontal and vertical layouts | List separators vs sidebar divisions |
| **Variants** | Solid (standard), subtle (reduced opacity) | Different visual prominence |
| **Spacing** | `sm`, `md`, `lg` margins | Consistent rhythm with content |
| **Colors** | Muted grey default, custom colors supported | Matches content hierarchy |
| **Thickness** | Configurable line weight | 1px default, customizable |

## Styling & Tokens

- **Colors**: `colors.grey.grey3` (muted), `colors.grey.grey2` (subtle)
- **Spacing**: Design token margins for consistent rhythm
- **Layout**: Block display for horizontal, inline-block for vertical
- **Flex**: `flex-shrink: 0` prevents unwanted shrinking

## Usage Patterns

```tsx
// Basic horizontal divider
<Divider />

// Vertical divider
<Divider orientation="vertical" />

// Subtle variant
<Divider variant="subtle" />

// Custom spacing and color
<Divider spacing="lg" color="brand" />
```

## Accessibility

- Uses semantic `<hr>` element
- Proper `role="separator"` and `aria-orientation`
- Screen readers announce as content separators
- Non-interactive (not in tab order)