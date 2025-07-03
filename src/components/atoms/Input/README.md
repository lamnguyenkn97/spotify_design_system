# Input Component

## Overview
Text input field with search functionality, icons, and validation support for Spotify's forms.

**Common use cases:**
- Search functionality with Enter key support
- Form inputs with validation
- Settings and preference inputs
- User data collection

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Search Support** | Enter key triggers search callback | Search bars and filters |
| **Left Icons** | Icon support for visual context | Search icon, user icon |
| **Validation** | Error states with helper text | Form validation feedback |
| **Full Width** | Responsive width control | Mobile-friendly layouts |
| **Dual Handlers** | `onChange` and `onValueChange` | Flexible event handling |
| **Auto Labels** | Generated IDs for accessibility | Proper label association |

## Styling & Tokens

- **Colors**: `colors.input.background/border/text` and error states
- **Spacing**: `spacing.input.padding` for internal spacing
- **Borders**: `borderRadius.input` for rounded corners
- **Typography**: `typography.input` for consistent text styling
- **Transitions**: `transitions.input` for smooth state changes

## Usage Patterns

```tsx
// Basic input with label
<Input 
  label="Search music" 
  placeholder="Songs, artists, albums..." 
/>

// Search input with icon
<Input 
  leftIcon={<SearchIcon />}
  onSearch={(value) => handleSearch(value)}
  placeholder="Search..."
/>

// Form input with validation
<Input 
  label="Email"
  type="email"
  error={hasError}
  message={hasError ? "Invalid email" : "Enter your email"}
  fullWidth
/>
```

## Accessibility

- Uses semantic `<input>` with proper `<label>` association
- Auto-generated unique IDs for label-input relationship
- Error messages are properly announced to screen readers
- Enter key support for search functionality
- Full keyboard navigation support 