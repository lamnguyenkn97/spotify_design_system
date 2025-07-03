# Pill Component

## Overview
Pills are small, rounded buttons used for tags, filters, and selections in Spotify's interface.

**Common use cases:**
- Genre tags (Pop, Rock, Hip-Hop)
- Search filters with dismiss buttons
- Category selections with active states

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Sizes** | `sm` (28px), `md` (32px), `lg` (40px) | Different layouts need different sizes |
| **Variants** | `default`, `selected`, `filter` | Genre tags vs active selections vs search filters |
| **Interactive** | Hover, focus, click, dismiss | Visual feedback for all user interactions |
| **Dismissible** | Optional X button for filters | Remove active search filters |
| **Accessible** | Keyboard navigation, screen readers | WCAG compliant focus and ARIA labels |

## Styling & Tokens

- **Shape**: `borderRadius.xl` for pill appearance
- **Colors**: Grey backgrounds, white text, brand green focus
- **Selected**: Inverted colors (white bg, black text)
- **Transitions**: Smooth hover and focus changes
- **Typography**: Medium font-weight, responsive sizing

## Usage Patterns

```tsx
// Basic genre tag
<Pill label="Pop" />

// Selected state
<Pill label="Rock" selected />

// Dismissible filter
<Pill label="2020s" variant="filter" dismissible onDismiss={() => {}} />

// Different sizes
<Pill label="Small" size="sm" />
<Pill label="Large" size="lg" />
```

## Accessibility

- Uses native `<button>` elements
- Keyboard navigation (Enter/Space)
- Focus rings with brand colors
- ARIA labels for dismiss buttons
- Proper event separation (pill click vs dismiss)

 