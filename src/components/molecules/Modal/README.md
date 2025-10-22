# Modal Component

A modal overlay component for displaying dialogs that require user attention, inspired by Spotify's design patterns.

## Features

- **Full-screen overlay**: Blocks interaction with the rest of the page
- **Dynamic color extraction**: Automatically extracts dominant colors from media images for beautiful gradients
- **Multiple sizes**: Small, Medium, Large
- **Flexible content**: Support for title, description, custom content, media, and actions
- **Accessible**: Full keyboard navigation, focus management, and ARIA attributes
- **Portal rendering**: Renders in a portal for proper z-index handling
- **Customizable**: Close on backdrop click, ESC key, or via action buttons
- **Smooth transitions**: Animated background changes when media changes

## Usage

### Basic Modal

```tsx
import { Modal, ModalSize } from '@spotify-design-system/atoms';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size={ModalSize.Medium}
        title="Start listening with a free Spotify account"
        media={<img src="/album.jpg" alt="Album cover" />}
        actions={[
          {
            label: 'Sign up free',
            onClick: () => console.log('Sign up'),
            variant: 'primary',
          },
          {
            label: 'Download app',
            onClick: () => console.log('Download'),
            variant: 'secondary',
          },
        ]}
        footer={
          <>
            Already have an account?{' '}
            <TextLink href="/login">Log in</TextLink>
          </>
        }
      />
    </>
  );
}
```

### Confirmation Modal

```tsx
function ConfirmationModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      size={ModalSize.Small}
      title="Remove from playlist?"
      description="Are you sure you want to remove this song from your playlist?"
      actions={[
        {
          label: 'Remove',
          onClick: () => {
            console.log('Removed');
            setOpen(false);
          },
          variant: 'primary',
        },
        {
          label: 'Cancel',
          onClick: () => setOpen(false),
          variant: 'secondary',
        },
      ]}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Whether the modal is open (required) |
| `onClose` | `() => void` | - | Callback when modal should close |
| `size` | `ModalSize` | `medium` | Modal size (small, medium, large) |
| `title` | `string` | - | Modal title |
| `description` | `string \| ReactNode` | - | Modal description/content |
| `children` | `ReactNode` | - | Custom content |
| `media` | `ReactNode` | - | Optional media/image content (left side) |
| `actions` | `ModalAction[]` | - | Action buttons |
| `showCloseButton` | `boolean` | `true` | Show close button |
| `closeOnBackdropClick` | `boolean` | `true` | Close on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Close on ESC key |
| `footer` | `ReactNode` | - | Additional footer content |
| `className` | `string` | - | Custom className |
| `data-testid` | `string` | `'modal'` | Test ID |

## ModalAction Type

```typescript
interface ModalAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
}
```

## Sizes

- **Small**: 400px max-width, 200px min-height (confirmations, alerts)
- **Medium**: 600px max-width, 300px min-height (default, signup flows)
- **Large**: 800px max-width, 400px min-height (detailed content)

## Accessibility

- Full keyboard navigation support
- Focus trap when modal is open
- ESC key to close (configurable)
- Focus restoration on close
- Proper ARIA attributes (`role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`)
- Prevents body scroll when modal is open

## Best Practices

1. **Use modals sparingly**: Only for critical actions that require full attention
2. **Provide clear actions**: Always include clear action buttons
3. **Title required**: Always provide a descriptive title for accessibility
4. **Allow dismissal**: Consider whether users should be able to dismiss via backdrop/ESC
5. **Media content**: For modals with media, images appear on the left side

## Examples

See Storybook for interactive examples:
- Signup modal with media
- Confirmation dialog
- Custom content modal
- Different sizes
- Modal without close button
