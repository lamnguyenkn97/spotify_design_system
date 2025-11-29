# Footer

A comprehensive footer component displaying company links, social media icons, and footer content for Spotify-style applications.

## Overview

The Footer component provides a structured layout for footer content including organized link sections and social media icons. It uses semantic HTML and includes proper accessibility features. Fully customizable with support for custom links, social media icons, and custom content insertion.

## Key Features

- **Organized link sections**: Company, Communities, Useful Links, and Spotify Plans (customizable)
- **Social media integration**: Instagram, Twitter, and Facebook icons with hover effects (customizable)
- **Custom content support**: Insert custom components at top, bottom, or replace entire footer
- **Responsive design**: Flexible layout that adapts to different screen sizes
- **Accessibility**: Proper semantic structure with `contentinfo` role and ARIA labels
- **Interactive elements**: Hover states for links and social icons with onClick handlers
- **Fully configurable**: Show/hide any section, custom copyright, and complete layout control

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

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class names |
| `customLinks` | `FooterLinkItem[]` | Default links | Custom footer link sections |
| `customSocialLinks` | `SocialLinkItem[]` | Default social links | Custom social media links |
| `showSocialLinks` | `boolean` | `true` | Whether to show social media links |
| `showLinks` | `boolean` | `true` | Whether to show footer links |
| `copyrightText` | `string` | `'© 2024 Spotify AB'` | Custom copyright text |
| `showCopyright` | `boolean` | `true` | Whether to show copyright text |
| `children` | `React.ReactNode` | - | Custom content to insert |
| `customContentPosition` | `'top' \| 'bottom' \| 'replace'` | `'bottom'` | Where to render custom content |

### FooterLinkItem Interface
```tsx
interface FooterLinkItem {
  title: string;
  links: { name: string; url: string; onClick?: () => void }[];
}
```

### SocialLinkItem Interface
```tsx
interface SocialLinkItem {
  icon: IconProp;
  url: string;
  label?: string;
  onClick?: () => void;
}
```

## Usage Patterns

### Basic Footer
```tsx
<Footer />
```

### Footer with Custom Links
```tsx
const customLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', url: '#features' },
      { name: 'Pricing', url: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', url: '#about' },
      { name: 'Careers', url: '#careers' },
    ],
  },
];

<Footer customLinks={customLinks} />
```

### Footer with Custom Social Links
```tsx
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const customSocialLinks = [
  { icon: faGithub, url: 'https://github.com/company', label: 'GitHub' },
  { icon: faLinkedin, url: 'https://linkedin.com/company', label: 'LinkedIn' },
];

<Footer customSocialLinks={customSocialLinks} />
```

### Footer with Click Handlers
```tsx
const customLinks = [
  {
    title: 'Actions',
    links: [
      { 
        name: 'Download App', 
        url: '#download',
        onClick: () => console.log('Download clicked'),
      },
    ],
  },
];

<Footer customLinks={customLinks} />
```

### Custom Content - CTA Banner at Top
```tsx
<Footer customContentPosition="top">
  <div style={{ padding: '32px', backgroundColor: '#1DB954', textAlign: 'center' }}>
    <h2>Join Our Newsletter</h2>
    <input type="email" placeholder="Enter your email" />
    <button>Subscribe</button>
  </div>
</Footer>
```

### Custom Content - Additional Info at Bottom
```tsx
<Footer customContentPosition="bottom">
  <div style={{ textAlign: 'center', padding: '16px' }}>
    <p>Available in 180+ countries</p>
    <p>USA • UK • Canada • Australia • Germany • Japan</p>
  </div>
</Footer>
```

### Custom Content - Replace Entire Footer
```tsx
<Footer customContentPosition="replace">
  <div style={{ textAlign: 'center', padding: '64px' }}>
    <h1>🎧 Coming Soon</h1>
    <p>Sign up to be the first to know!</p>
    <input type="email" placeholder="Your email" />
    <button>Notify Me</button>
  </div>
</Footer>
```

### Minimal Footer (Copyright Only)
```tsx
<Footer 
  showLinks={false} 
  showSocialLinks={false}
  copyrightText="© 2024 My Company"
/>
```

### Completely Custom Footer
```tsx
<Footer 
  customLinks={myCustomLinks}
  customSocialLinks={myCustomSocialLinks}
  copyrightText="© 2024 My Brand. All rights reserved."
  showCopyright={true}
/>
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