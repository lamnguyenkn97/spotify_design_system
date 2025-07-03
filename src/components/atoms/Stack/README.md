# Stack Component

## Overview
Flexbox layout component for consistent spacing and alignment in Spotify's interface layouts.

**Common use cases:**
- Vertical content stacking
- Horizontal button groups
- Form field arrangements
- Card content organization

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Direction** | `row`, `column` layouts | Horizontal vs vertical stacking |
| **Spacing** | `sm`, `md`, `lg` gaps using tokens | Consistent item separation |
| **Alignment** | `start`, `center`, `end`, `stretch` | Cross-axis positioning |
| **Justification** | `start`, `center`, `end`, `space-between` | Main-axis distribution |
| **Flex Abstraction** | Clean API over CSS flexbox | Simplified layout management |
| **Responsive** | Adapts to container constraints | Mobile-friendly behavior |

## Styling & Tokens

- **Spacing**: `spacing.stack.sm/md/lg` for consistent gaps
- **Layout**: CSS flexbox with configurable properties
- **Direction**: `flex-direction` row or column
- **Gap**: Modern CSS gap property for spacing
- **Defaults**: Column direction, medium spacing, stretch alignment

## Usage Patterns

```tsx
// Vertical content stack
<Stack spacing="md">
  <Header />
  <Content />
  <Footer />
</Stack>

// Horizontal button group
<Stack direction="row" spacing="sm" justify="center">
  <Button>Cancel</Button>
  <Button variant="primary">Save</Button>
</Stack>

// Form layout
<Stack spacing="lg" align="stretch">
  <Input label="Name" />
  <Input label="Email" />
  <Button fullWidth>Submit</Button>
</Stack>
```

## Accessibility

- Maintains logical reading order and focus flow
- Preserves natural tab order of child elements
- Flexbox layout doesn't interfere with screen readers
- No keyboard traps or accessibility barriers
- Responsive behavior maintains usability 