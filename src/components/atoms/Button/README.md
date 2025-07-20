# Button Component

## Overview
Primary interactive elements for actions like Play, Follow, Subscribe, and navigation in Spotify's interface.

**Common use cases:**
- Primary actions (Play button, Subscribe)
- Secondary actions (Follow, Add to playlist)  
- Text-only actions (Cancel, Skip)

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Variants** | Primary, Secondary, White, Circular, FlatWhite, Text | Different visual importance levels |
| **Sizes** | `sm`, `md`, `lg` with responsive padding | Compact vs prominent buttons |
| **States** | Loading, disabled, hover, focus, active | Complete interaction feedback |
| **Icons** | Left-aligned icon support with spacing | Play icon, heart icon |
| **Polymorphic** | Can render as button, link, or custom element | `as="a"` for navigation |

## Styling & Tokens

- **Shape**: Pill-shaped with `borderRadius.xl` (500px)
- **Colors**: Spotify green primary, white/grey variants
- **Typography**: Circular font family, medium/bold weights
- **Animations**: Hover scale (1.04x), active scale (0.96x)
- **Focus**: 2px green outline with offset

## Usage Patterns

```tsx
// Primary action
<Button text="Play" variant="primary" />

// With icon (always left-aligned)
<Button 
  text="Play Now"
  icon={<Icon icon={faPlay} size="sm" />}
  variant="secondary" 
/>

// Loading state
<Button text="Subscribing..." loading />

// As link
<Button 
  as="a" 
  href="/profile" 
  text="View Profile"
  variant="text"
/>

// Circular play button
<Button 
  variant="circular"
  circular={true}
  icon={<Icon icon={faPlay} size="md" />}
  aria-label="Play"
/>
```

## Accessibility

- Native `<button>` semantics and keyboard support
- Focus rings visible only for keyboard navigation
- Loading states with `aria-disabled`
- Custom ARIA labels supported
- Maintains accessibility when polymorphic



