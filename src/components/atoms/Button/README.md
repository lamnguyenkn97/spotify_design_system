# Button Component

## Overview
The Button component is a versatile, Spotify-styled button with multiple variants, sizes, and states including loading and disabled states.

## 🎨 Design System Principles Demonstrated

### Design Tokens (Systematic Values)
This component showcases how design systems use **tokens** instead of hardcoded values:

```typescript
// ❌ Without Design System
background-color: #1db954;
border-radius: 24px;
padding: 8px 16px;

// ✅ With Design System  
background-color: colors.primary.brand;     // Centralized color
border-radius: borderRadius.xl;             // Consistent radius scale
padding: spacing.sm spacing.md;             // Systematic spacing
```

### Variant System (Consistent but Flexible)
Each variant serves a specific purpose in Spotify's design language:
- **Primary** (`#57B660`): Main call-to-action (Play, Subscribe)
- **Secondary** (`#000` + border): Alternative actions  
- **Text**: Subtle interactions (Less important actions)
- **White/FlatWhite**: For use on dark backgrounds

### Behavioral Consistency
All variants share the same interaction patterns:
- **Hover**: Visual feedback (color change or scale)
- **Active**: `transform: scale(0.96)` (tactile pressed feeling)
- **Loading**: Spinner replaces content, disables interaction
- **Disabled**: Reduced opacity, no interaction

## Component Details

| Component Name | HTML Root Component | Important CSS for Spotify Look | Important Event Handlers & Logic |
|----------------|--------------------|---------------------------------|-----------------------------------|
| **Button** | `<button>` | **Base Styles:**<br/>• `border-radius: 500px` *(Creates Spotify's signature pill shape - friendly, modern, and touchable)*<br/>• `font-family: Circular` *(Spotify's custom font for brand consistency and legibility)*<br/>• `transition: all 0.33s cubic-bezier(0.3, 0, 0, 1)` *(Smooth, premium feel - matches Spotify's fluid animations)*<br/>• `display: inline-flex` with `align-items: center` *(Perfect alignment for text + icons, responsive layout)*<br/><br/>**Primary Variant:**<br/>• `background-color: #57B660` *(Spotify's iconic green - instant brand recognition)*<br/>• `color: #000000` *(High contrast black text ensures accessibility on green background)*<br/>• Hover: `background-color: #1fdf64` *(Lighter green provides clear interactive feedback)*<br/>• Active: `transform: scale(0.96)` *(Mimics physical button press - tactile feedback)*<br/><br/>**Secondary Variant:**<br/>• `background-color: #000000` *(Matches Spotify's dark theme, less prominent than primary)*<br/>• `color: #b3b3b3` *(Muted grey text indicates secondary importance)*<br/>• `border: 1px solid #727272` *(Subtle border defines button edges on dark backgrounds)*<br/>• Hover: white text and border *(Clear state change without overwhelming the primary action)*<br/><br/>**Text Variant:**<br/>• `background: transparent` *(Minimal visual weight for subtle interactions)*<br/>• `border: none` *(Clean, unobtrusive appearance)*<br/>• Hover: `font-size` increases by 1.1x scale *(Unique Spotify interaction - draws attention without background changes)*<br/>• Color transitions from grey to white *(Subtle feedback that maintains text hierarchy)* | **onClick Handler:**<br/>• Primary click event handler<br/>• Supports standard button events<br/><br/>**Loading State Logic:**<br/>• Disables pointer events when loading<br/>• Shows FontAwesome spinner icon<br/>• Hides button text during loading<br/><br/>**Icon Logic:**<br/>• Supports left/right icon positioning<br/>• Icon and text spacing with gap<br/>• Loading spinner replaces custom icon<br/><br/>**State Management:**<br/>• Disabled state with reduced opacity<br/>• Focus-visible outline for accessibility<br/>• ForwardRef for component composition<br/><br/>**Responsive Features:**<br/>• fullWidth prop for 100% width<br/>• Multiple size variants (small, medium, large)<br/>• Polymorphic 'as' prop support |

## 🔄 Design System Patterns to Study

### 1. **Token-Based Architecture**
```typescript
// Colors are centralized and semantic
colors.primary.brand        // #57B660 - main brand color
colors.primary.brandHighlight // #1fdf64 - hover state
colors.grey.grey6           // rgba(255,255,255,0.5) - text color
```

### 2. **Scalable Sizing System**
```typescript
spacing.xs   // 4px
spacing.sm   // 8px  
spacing.md   // 16px
spacing.lg   // 24px
// Creates consistent rhythm across all components
```

### 3. **Systematic State Management**
Every interactive component follows the same state pattern:
- **Default** → **Hover** → **Active** → **Loading** → **Disabled**

## Usage Examples

### Basic Usage
```tsx
<Button onClick={handleClick} text="Play" />
```

### With Loading State
```tsx
<Button loading={true} text="Loading..." />
```

### With Icon
```tsx
<Button 
  icon={<PlayIcon />} 
  iconPosition="left" 
  text="Play Song" 
  variant={ButtonVariant.Primary}
/>
```

### Full Width
```tsx
<Button 
  fullWidth={true} 
  text="Subscribe to Premium" 
  size={ButtonSize.Large}
/>
```

## Available Props
- `variant`: Primary, Secondary, White, FlatWhite, Text
- `size`: Small, Medium, Large  
- `loading`: Shows spinner and disables interaction
- `disabled`: Disables the button
- `fullWidth`: Makes button full width
- `icon`: React node for icon
- `iconPosition`: 'left' or 'right'
- `onClick`: Click event handler
- `as`: Polymorphic prop for different HTML elements

## 🎯 Learning Takeaways

1. **Consistency**: Same interaction patterns across all variants
2. **Flexibility**: Multiple variants for different use cases
3. **Scalability**: Token-based system makes changes easy
4. **Accessibility**: Focus states, disabled states, semantic HTML
5. **Performance**: Optimized styled-components with shouldForwardProp 