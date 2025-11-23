# Drawer

A drawer component that slides in from the edges of the screen to display content like navigation, forms, or additional information.

## Features

- Slides in from left, right, top, or bottom
- Customizable width/height
- Optional backdrop with click-to-close functionality
- Keyboard navigation (ESC to close)
- Focus management for accessibility
- Portal rendering for proper z-index layering
- Smooth animations
- Prevents body scroll when open

## Usage

```tsx
import { Drawer } from '@spotify-design-system/components';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        position="right"
        title="Settings"
      >
        <p>Drawer content goes here</p>
      </Drawer>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | required | Whether the drawer is open |
| `onClose` | `() => void` | required | Callback when drawer should close |
| `position` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Position of the drawer |
| `width` | `string` | `'400px'` | Width (for left/right) or height (for top/bottom) |
| `title` | `string` | - | Optional title displayed in header |
| `children` | `React.ReactNode` | required | Content to display in drawer |
| `showBackdrop` | `boolean` | `true` | Whether to show backdrop overlay |
| `closeOnBackdropClick` | `boolean` | `true` | Close drawer when backdrop is clicked |
| `closeOnEscape` | `boolean` | `true` | Close drawer when ESC key is pressed |
| `showCloseButton` | `boolean` | `true` | Show close button in header |
| `className` | `string` | - | Custom CSS class |
| `data-testid` | `string` | `'drawer'` | Test ID for testing |

## Examples

### Basic Drawer

```tsx
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Navigation"
>
  <nav>
    <a href="/home">Home</a>
    <a href="/about">About</a>
  </nav>
</Drawer>
```

### Left Side Drawer

```tsx
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  position="left"
  width="300px"
  title="Menu"
>
  <MenuContent />
</Drawer>
```

### Top Drawer

```tsx
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  position="top"
  width="200px"
  title="Notifications"
>
  <NotificationList />
</Drawer>
```

### Without Backdrop

```tsx
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  showBackdrop={false}
>
  <SidePanel />
</Drawer>
```

### Required Action (Cannot Close)

```tsx
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  showCloseButton={false}
  closeOnBackdropClick={false}
  closeOnEscape={false}
  title="Complete Action"
>
  <Form onComplete={() => setOpen(false)} />
</Drawer>
```

## Accessibility

- Uses `role="dialog"` and `aria-modal="true"`
- Automatically manages focus when opening/closing
- Supports keyboard navigation (ESC to close)
- Prevents background scroll when open
- Restores focus to trigger element on close
- Includes proper ARIA labels for screen readers

## Design Notes

- Follows Spotify's dark theme aesthetic
- Smooth slide-in animations
- Consistent spacing and typography
- Custom scrollbar styling
- Semi-transparent backdrop (when enabled)

