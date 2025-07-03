# MessageText Component

## Overview
Status messages and feedback text with contextual icons for Spotify's forms and notifications.

**Common use cases:**
- Form validation feedback
- Helper text for inputs
- Success and error notifications
- Inline guidance and tips

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Message Types** | `helper`, `error`, `success`, `warning` | Different status contexts |
| **Contextual Icons** | FontAwesome icons per type | Visual reinforcement of meaning |
| **Color Coding** | Semantic colors matching types | Consistent visual language |
| **Icon Control** | Optional icon display | Text-only vs icon + text |
| **Typography Integration** | Uses Typography component | Consistent text styling |
| **Flexible Content** | Supports any React content | Rich text and formatting |

## Styling & Tokens

- **Colors**: `colors.decorative.*` for icons, semantic colors for text
- **Spacing**: `spacing.xs/sm` for margins and icon gaps
- **Typography**: Inherits from Typography component design tokens
- **Icons**: FontAwesome with precise alignment calculations
- **Layout**: Stack-based horizontal layout

## Usage Patterns

```tsx
// Form helper text
<MessageText type="helper">
  Enter your email address to receive updates
</MessageText>

// Error message
<MessageText type="error">
  Password must be at least 8 characters
</MessageText>

// Success notification
<MessageText type="success" showIcon={false}>
  Account created successfully!
</MessageText>

// Warning with custom margin
<MessageText type="warning" marginTop="16px">
  This action cannot be undone
</MessageText>
```

## Accessibility

- Uses semantic Typography component for proper HTML elements
- Color-coded icons complement text (not color-only communication)
- Screen readers announce both icon context and text content
- Integrates with form controls for validation feedback
- Maintains reading flow and focus management 