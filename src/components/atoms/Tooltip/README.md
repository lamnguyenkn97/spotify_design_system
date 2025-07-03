# Tooltip Component

## Overview
Contextual information display that appears on user interaction for Spotify's help and guidance.

**Common use cases:**
- Button and icon explanations
- Feature descriptions
- Keyboard shortcut hints
- Additional context for UI elements

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Trigger Types** | `hover`, `focus`, `click`, `manual` | Different interaction patterns |
| **Positioning** | `top`, `bottom`, `left`, `right` | Flexible placement options |
| **Delay Control** | Configurable show delay (500ms default) | Prevents accidental triggers |
| **Visibility Control** | Controlled or uncontrolled modes | External state management |
| **Max Width** | Constrains tooltip width | Prevents overly wide tooltips |
| **Rich Content** | Supports any React content | Text, icons, formatted content |

## Styling & Tokens

- **Colors**: `colors.tooltip.background/text` for high contrast
- **Spacing**: `spacing.tooltip.padding` for internal content
- **Shadows**: `shadows.tooltip` for elevation and depth
- **Typography**: `typography.tooltip` for readable text
- **Z-index**: `zIndex.tooltip` for proper layering

## Usage Patterns

```tsx
// Basic hover tooltip
<Tooltip content="Play this song">
  <PlayButton />
</Tooltip>

// Click tooltip with positioning
<Tooltip 
  content="More options available" 
  trigger="click"
  position="bottom"
>
  <MoreButton />
</Tooltip>

// Manual control
<Tooltip 
  content="Keyboard shortcut: Ctrl+P"
  trigger="manual"
  visible={showTooltip}
  onVisibilityChange={setShowTooltip}
>
  <Icon />
</Tooltip>
```

## Accessibility

- Uses `role="tooltip"` for screen reader identification
- `aria-hidden` properly manages visibility
- Focus trigger provides keyboard accessibility
- Content is announced when visible
- Manual trigger allows programmatic control 