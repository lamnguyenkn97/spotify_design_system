# Footer

A comprehensive footer component displaying company links, social media icons, and footer content for Spotify-style applications.

## Overview

The Footer component provides a structured layout for footer content including organized link sections and social media icons. It uses semantic HTML and includes proper accessibility features.

## Key Features

- **Organized link sections**: Company, Communities, Useful Links, and Spotify Plans
- **Social media integration**: Instagram, Twitter, and Facebook icons with hover effects
- **Responsive design**: Flexible layout that adapts to different screen sizes
- **Accessibility**: Proper semantic structure with `contentinfo` role and ARIA labels
- **Interactive elements**: Hover states for links and social icons
- **Customizable**: Accepts custom className and additional props

## Styling & Tokens

The component uses design tokens for consistent styling:

```tsx
// Design tokens used
colors.primary.black     // Background color
colors.grey.grey6       // Text color
colors.primary.white    // Hover text color
spacing.xl              // Container padding
fontSizes.sm            // Link font size
animations.transitions.colors  // Hover transitions
borderRadius.md         // Social icon border radius
```

## Usage Patterns

### Basic Footer
```tsx
<Footer />
```

### Footer with Custom Styling
```tsx
<Footer className="custom-footer-class" />
```

### Footer with Additional Props
```tsx
<Footer data-testid="footer" role="contentinfo" />
```

## Content Structure

The Footer automatically includes:

- **Company links**: About, Jobs, For the Record
- **Community links**: For Artists, Developers, Advertising, Investors, Vendors  
- **Useful links**: Support, Free Mobile App
- **Spotify Plans**: Premium Individual, Premium Student, Spotify Free
- **Social media**: Instagram, Twitter, Facebook icons

## Accessibility

- Uses semantic `contentinfo` role for screen readers
- Provides descriptive ARIA labels for social media links
- Maintains proper heading structure with `h4` elements
- Social links open in new tabs with proper `rel` attributes
- Supports keyboard navigation and focus management 