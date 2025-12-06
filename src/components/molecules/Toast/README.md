## Toast Component

A flexible toast notification system for displaying temporary messages and feedback to users. Perfect for confirming actions, showing errors, and providing real-time updates.

## Overview

The Toast component provides a complete notification system with:
- **4 toast types**: Success, Error, Warning, Info
- **6 positions**: Top/Bottom × Left/Center/Right  
- **Auto-dismiss**: Configurable duration with animation
- **Stacking**: Multiple toasts display gracefully
- **Context API**: Easy-to-use `useToast()` hook
- **Accessibility**: ARIA labels, keyboard navigation
- **Animations**: Smooth slide-in/out transitions

## Key Features

| Feature | Description |
|---------|-------------|
| **Multiple Types** | Success, error, warning, info with color-coded styling |
| **Flexible Positioning** | 6 position options (top/bottom × left/center/right) |
| **Auto-Dismiss** | Configurable duration or persistent (duration=0) |
| **Manual Dismiss** | Optional close button |
| **Toast Stacking** | Multiple toasts stack beautifully |
| **Custom Icons** | Override default icons with custom ones |
| **Context Provider** | Global toast management via React Context |
| **Easy API** | Simple `toast.success()`, `toast.error()` methods |
| **Responsive** | Adapts to mobile screens |
| **Accessible** | ARIA roles, keyboard support |

## Installation & Setup

### 1. Wrap your app with ToastProvider

```tsx
import { ToastProvider } from '@spotify-design-system';

function App() {
  return (
    <ToastProvider
      defaultPosition="bottom-center"
      defaultDuration={3000}
      maxToasts={5}
    >
      <YourApp />
    </ToastProvider>
  );
}
```

### 2. Use the `useToast()` hook

```tsx
import { useToast } from '@spotify-design-system';

function MyComponent() {
  const { toast } = useToast();

  const handleLike = () => {
    toast.success("Liked!");
  };

  const handleError = () => {
    toast.error("Failed to load playlist");
  };

  return (
    <button onClick={handleLike}>Like Track</button>
  );
}
```

## Props

### ToastProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | **required** | Toast message content |
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Toast type/variant |
| `duration` | `number` | `3000` | Duration in ms (0 = no auto-dismiss) |
| `position` | `ToastPosition` | `'bottom-center'` | Position on screen |
| `showCloseButton` | `boolean` | `true` | Show close button |
| `icon` | `React.ReactNode` | Auto | Custom icon (overrides default) |
| `onClose` | `(id?: string) => void` | - | Callback when toast closes |
| `className` | `string` | - | Custom CSS class |
| `style` | `React.CSSProperties` | - | Custom inline styles |

### ToastProviderProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultPosition` | `ToastPosition` | `'bottom-center'` | Default position for all toasts |
| `defaultDuration` | `number` | `3000` | Default duration in milliseconds |
| `maxToasts` | `number` | `5` | Maximum number of toasts to show |
| `children` | `React.ReactNode` | **required** | App content |

## Toast Types

### Success
```tsx
toast.success("Track added to Liked Songs");
```
- ✅ Green background
- Used for: Successful actions, confirmations

### Error  
```tsx
toast.error("Failed to load playlist");
```
- ❌ Red background
- Used for: Errors, failed operations

### Warning
```tsx
toast.warning("Feature not implemented yet");
```
- ⚠️ Yellow background
- Used for: Warnings, cautions

### Info
```tsx
toast.info("Track added to queue");
```
- ℹ️ Brand color (green) background
- Used for: General information, neutral updates

## Toast Positions

| Position | Description |
|----------|-------------|
| `top-left` | Top left corner |
| `top-center` | Top center (horizontal center) |
| `top-right` | Top right corner |
| `bottom-left` | Bottom left corner |
| `bottom-center` | Bottom center (default) |
| `bottom-right` | Bottom right corner |

## Usage Patterns

### Basic Usage (Recommended)

```tsx
import { useToast } from '@spotify-design-system';

function TrackActions() {
  const { toast } = useToast();

  return (
    <>
      <button onClick={() => toast.success("Liked!")}>
        💚 Like
      </button>
      <button onClick={() => toast.info("Added to queue")}>
        ➕ Add to Queue
      </button>
      <button onClick={() => toast.error("Failed to save")}>
        ❌ Save (will fail)
      </button>
    </>
  );
}
```

### Custom Duration

```tsx
// Short notification (1 second)
toast.success("Copied!", { duration: 1000 });

// Long notification (10 seconds)
toast.warning("Please read this carefully", { duration: 10000 });

// No auto-dismiss (stays until user closes)
toast.info("Important: Action required", { duration: 0 });
```

### Custom Position

```tsx
// Top right for system notifications
toast.info("New message received", { position: ToastPosition.TOP_RIGHT });

// Bottom left for status updates
toast.success("Download complete", { position: ToastPosition.BOTTOM_LEFT });
```

### Custom Icons

```tsx
import { Icon } from '@spotify-design-system';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

toast.success("Track liked!", {
  icon: <Icon icon={faHeart} size="md" />
});
```

### Without Close Button

```tsx
// Auto-dismiss only, no manual close
toast.success("Saved", { showCloseButton: false });
```

### Manual Toast Control

```tsx
import { useToast } from '@spotify-design-system';

function AdvancedComponent() {
  const { addToast, removeToast, removeAllToasts } = useToast();

  const addCustomToast = () => {
    const toastId = addToast({
      message: "Custom toast",
      type: ToastType.SUCCESS,
      position: ToastPosition.TOP_RIGHT,
      duration: 5000,
      showCloseButton: true,
    });

    console.log('Toast ID:', toastId);
  };

  return (
    <>
      <button onClick={addCustomToast}>Add Toast</button>
      <button onClick={removeAllToasts}>Clear All</button>
    </>
  );
}
```

## Real-World Use Cases

### Like/Unlike Track Confirmation
```tsx
const [isLiked, setIsLiked] = useState(false);
const { toast } = useToast();

const toggleLike = () => {
  setIsLiked(!isLiked);
  if (!isLiked) {
    toast.success("Added to Liked Songs", { duration: 2000 });
  } else {
    toast.info("Removed from Liked Songs", { duration: 2000 });
  }
};
```

### Add to Queue Success
```tsx
const addToQueue = (track) => {
  queueService.add(track);
  toast.info(`"${track.title}" added to queue`);
};
```

### Login/Logout Feedback
```tsx
const handleLogin = async (credentials) => {
  try {
    await authService.login(credentials);
    toast.success("Logged in successfully");
  } catch (error) {
    toast.error("Invalid credentials");
  }
};

const handleLogout = () => {
  authService.logout();
  toast.info("Logged out");
};
```

### API Error Messages
```tsx
const loadPlaylist = async (id) => {
  try {
    const data = await api.getPlaylist(id);
    return data;
  } catch (error) {
    toast.error(error.message || "Failed to load playlist");
    throw error;
  }
};
```

### Feature Not Implemented Warnings
```tsx
const handlePremiumFeature = () => {
  if (!user.isPremium) {
    toast.warning("This feature requires Spotify Premium");
    return;
  }
  // ... premium feature logic
};
```

### Async Operation Progress
```tsx
const createPlaylist = async (name) => {
  const toastId = toast.info("Creating playlist...", { duration: 0 });
  
  try {
    await api.createPlaylist(name);
    removeToast(toastId);
    toast.success("Playlist created successfully");
  } catch (error) {
    removeToast(toastId);
    toast.error("Failed to create playlist");
  }
};
```

## Best Practices

### ✅ DO
- **Keep messages short and clear** - "Track liked!" vs "Your track has been successfully added to your liked songs"
- **Use appropriate types** - Success for positive actions, error for failures
- **Set reasonable durations** - 2-4 seconds for most messages
- **Provide context** - Include what happened and to what
- **Use for temporary feedback** - Not for critical information

### ❌ DON'T  
- **Don't overuse toasts** - Too many notifications annoy users
- **Don't use for critical errors** - Use modals for errors requiring attention
- **Don't make messages too long** - Users won't read lengthy toasts
- **Don't stack too many** - Set reasonable `maxToasts` limit
- **Don't use for permanent info** - Toasts disappear, use static UI instead

## Accessibility

- **ARIA role="alert"**: Announces toast to screen readers
- **aria-live="polite"**: Non-intrusive announcements
- **Keyboard navigation**: Close button is focusable and keyboard-accessible
- **Color contrast**: All toast types meet WCAG AA standards
- **Focus management**: No focus trap, non-blocking

## Animation Details

- **Enter animation**: Slide in from position direction (300ms)
- **Exit animation**: Slide out to position direction (300ms)
- **Easing**: `ease-out` for natural motion
- **Responsive**: Animations adapt to mobile viewports

## Design Tokens

```tsx
// Toast uses these design tokens
colors.semantic.success    // Green for success toasts
colors.semantic.error      // Red for error toasts
colors.semantic.warning    // Yellow for warning toasts
colors.primary.brand       // Spotify green for info toasts
spacing.md, spacing.lg     // Padding
borderRadius.lg            // Rounded corners
shadows.large              // Elevated shadow
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import { 
  ToastType, 
  ToastPosition, 
  ToastProps, 
  ToastContextType 
} from '@spotify-design-system';

const MyComponent: React.FC = () => {
  const { toast }: ToastContextType = useToast();
  
  const showToast = () => {
    toast.success("Message", {
      position: ToastPosition.TOP_RIGHT,
      duration: 3000,
    });
  };
};
```

## Examples

See **Storybook** for interactive examples:
- Basic toast types (success, error, warning, info)
- All 6 position options
- Custom durations and icons
- Multiple toasts stacking
- Real-world Spotify-style use cases
- Login/logout feedback
- Like/unlike confirmations

## Browser Support

- Chrome, Edge, Firefox, Safari (latest 2 versions)
- Mobile Safari, Chrome Mobile
- Requires modern browser with ES6+ support

