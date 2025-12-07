# TextArea

A multi-line text input component with support for labels, error states, and auto-resize functionality. Follows the same design patterns as the Input component for a consistent form experience.

## Features

- ✅ **Consistent Styling**: Matches Input component design patterns
- ✅ **Auto-resize**: Automatically grows with content
- ✅ **Error States**: Built-in error handling with visual feedback
- ✅ **Accessible**: Proper label associations and keyboard navigation
- ✅ **Custom Scrollbar**: Styled scrollbar for better UX
- ✅ **TypeScript**: Full type safety
- ✅ **Flexible Layout**: Support for fullWidth and custom rows

## Installation

```bash
npm install spotify-design-system
```

## Basic Usage

```tsx
import { TextArea } from 'spotify-design-system';

function MyForm() {
  return (
    <TextArea
      label="Description"
      placeholder="Describe your playlist..."
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above the textarea |
| `message` | `string` | - | Helper text or error message below textarea |
| `error` | `boolean` | `false` | Whether the textarea is in error state |
| `fullWidth` | `boolean` | `false` | Whether to take full width of container |
| `rows` | `number` | `3` | Number of visible text lines (min height) |
| `maxRows` | `number` | - | Maximum rows before scrolling (with autoResize) |
| `autoResize` | `boolean` | `false` | Auto-resize as user types |
| `onValueChange` | `(value: string) => void` | - | Callback when value changes |
| `className` | `string` | - | Custom CSS class |
| `disabled` | `boolean` | `false` | Disable the textarea |
| `placeholder` | `string` | - | Placeholder text |
| `...props` | `TextareaHTMLAttributes` | - | All native textarea attributes |

## Examples

### With Label and Helper Text

```tsx
<TextArea
  label="Bio"
  placeholder="Tell us about yourself"
  message="Maximum 500 characters"
/>
```

### Error State

```tsx
<TextArea
  label="Comment"
  placeholder="Write a comment"
  message="Comment is required"
  error
/>
```

### Auto-Resize

```tsx
function AutoResizeExample() {
  const [value, setValue] = useState('');
  
  return (
    <TextArea
      label="Auto-Resize TextArea"
      placeholder="Start typing..."
      value={value}
      onValueChange={setValue}
      autoResize
      rows={3}
      maxRows={8}
    />
  );
}
```

### Character Limit

```tsx
function CharacterLimitExample() {
  const [value, setValue] = useState('');
  const maxLength = 200;
  const remaining = maxLength - value.length;
  
  return (
    <TextArea
      label="Description"
      placeholder="Enter description..."
      value={value}
      onValueChange={(val) => setValue(val.slice(0, maxLength))}
      message={`${remaining} characters remaining`}
      error={remaining < 0}
      rows={4}
    />
  );
}
```

### Full Width

```tsx
<TextArea
  label="Playlist Description"
  placeholder="Add description..."
  fullWidth
  rows={4}
/>
```

### Custom Rows

```tsx
<TextArea
  label="Large TextArea"
  placeholder="More space to write..."
  rows={8}
/>
```

### Disabled State

```tsx
<TextArea
  label="Read-Only Content"
  value="This cannot be edited"
  disabled
/>
```

### Controlled Component

```tsx
function ControlledExample() {
  const [description, setDescription] = useState('');
  
  return (
    <div>
      <TextArea
        label="Playlist Description"
        value={description}
        onValueChange={setDescription}
        placeholder="Describe your playlist..."
        rows={4}
      />
      <button onClick={() => setDescription('')}>Clear</button>
    </div>
  );
}
```

## Use Cases

### Playlist Description

```tsx
<TextArea
  label="Playlist Description"
  placeholder="Add an optional description"
  rows={4}
  fullWidth
/>
```

### Comment Box

```tsx
function CommentBox() {
  const [comment, setComment] = useState('');
  
  const handleSubmit = () => {
    // Submit comment
    setComment('');
  };
  
  return (
    <div>
      <TextArea
        label="Add a comment"
        placeholder="Share your thoughts..."
        value={comment}
        onValueChange={setComment}
        autoResize
        rows={2}
        maxRows={8}
        fullWidth
      />
      <button 
        onClick={handleSubmit}
        disabled={!comment.trim()}
      >
        Post Comment
      </button>
    </div>
  );
}
```

### User Bio

```tsx
function BioEditor() {
  const [bio, setBio] = useState('');
  const maxLength = 500;
  
  return (
    <TextArea
      label="Bio"
      placeholder="Tell us about yourself..."
      value={bio}
      onValueChange={(val) => setBio(val.slice(0, maxLength))}
      message={`${maxLength - bio.length} characters left`}
      autoResize
      rows={5}
      maxRows={10}
      fullWidth
    />
  );
}
```

## Design Tokens

The TextArea component uses the following design tokens:

```typescript
{
  size: {
    minHeight: '96px',
    maxHeight: '400px',
  },
  typography: {
    label: { size: fontSizes.sm, weight: 500 },
    textarea: { size: fontSizes.md, weight: 400, lineHeight: 1.5 },
  },
  colors: {
    background: { default: grey0, disabled: grey1 },
    border: { default: grey2, hover: grey4, focus: brand, error: redRedWine },
    text: { default: white, placeholder: grey6, disabled: grey4 },
  },
}
```

## Accessibility

- ✅ Proper `<label>` association with textarea
- ✅ Keyboard navigation support
- ✅ Focus states clearly visible
- ✅ Error states announced to screen readers
- ✅ Supports all ARIA attributes

## Differences from Input

| Feature | Input | TextArea |
|---------|-------|----------|
| Multi-line | ❌ | ✅ |
| Auto-resize | ❌ | ✅ (optional) |
| Left Icon | ✅ | ❌ |
| Custom Rows | ❌ | ✅ |
| Resize Handle | ❌ | ✅ (when not auto-resize) |
| Custom Scrollbar | ❌ | ✅ |

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Related Components

- **Input**: Single-line text input with icon support
- **MessageText**: Helper text and error messages
- **Button**: Form submission buttons

## Contributing

See the main [CONTRIBUTING.md](../../../CONTRIBUTING.md) for contribution guidelines.

