# Progress Component

## Overview
Progress indicators for loading states, media buffering, and task completion in Spotify's interface.

**Common use cases:**
- Song/video progress tracking
- Upload and download progress
- Loading states for content
- Media buffering visualization

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Variants** | `linear` bars, `circular` spinners (indeterminate only) | Horizontal bars vs spinning icons |
| **Buffer Support** | Secondary progress for media | Audio/video buffering states |
| **Indeterminate** | Unknown duration animations | Loading without specific progress |
| **Color Themes** | `primary`, `success`, `warning`, `error` | Different status contexts |
| **Sizes** | `sm`, `md`, `lg` using design tokens | Various UI contexts |
| **FontAwesome Integration** | Uses Icon component with spin for circular | Consistent with design system |
| **Value Display** | Optional percentage labels | User feedback for progress |

## Styling & Tokens

- **Colors**: `colors.progress.*` for themes and states
- **Sizes**: `spacing.progress.sm/md/lg` for linear, Icon sizes for circular
- **Animations**: FontAwesome spin animation for circular indeterminate
- **Borders**: `borderRadius.progress` for rounded edges
- **Transitions**: `transitions.progress` for smooth updates

## Usage Patterns

```tsx
// Song progress bar
<Progress 
  value={currentTime} 
  max={duration} 
  variant="linear"
  showValue 
/>

// Loading spinner (FontAwesome)
<Progress 
  indeterminate 
  variant="circular" 
  size="sm" 
  color="primary"
/>

// Media buffering with buffer
<Progress 
  value={playedTime}
  buffer={bufferedTime}
  max={totalTime}
  color="primary"
/>

// Upload progress with different colors
<Progress 
  value={uploadPercent}
  variant="linear"
  color="success"
  showValue
/>
```

## Accessibility

- Uses `role="progressbar"` for screen reader identification
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax` communicate state
- Progress changes are announced automatically
- Circular spinners use `aria-busy="true"` for loading states
- `aria-label` provides context for what's progressing 