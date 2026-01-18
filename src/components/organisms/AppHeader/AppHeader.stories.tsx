import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AppHeader } from './AppHeader';
import { AppHeaderProps, HeaderLink } from './AppHeader.types';

export default {
  title: 'Organisms/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    docs: {
      description: {
        component: `
# App Header Component

Modern Spotify-style navigation header with search, authentication, and navigation controls.

## Features
- Back/forward navigation arrows
- Integrated search bar
- Customizable guest links (Premium, Support, Download, etc.)
- Authentication state (Sign up/Log in buttons)
- User profile with avatar
- Install app button
- Notification icon
- Fully responsive design
- Smooth hover animations

## Usage

\`\`\`tsx
import { AppHeader } from 'spotify-design-system';

// Guest user with custom links
<AppHeader
  isAuthenticated={false}
  onLogin={() => showLogin()}
  onSignUp={() => showSignUp()}
  onSearch={(query) => search(query)}
  onInstallApp={() => downloadApp()}
  customLinks={[
    { id: 'premium', label: 'Premium', href: '/premium' },
    { id: 'support', label: 'Support', href: '/support' },
    { id: 'download', label: 'Download', href: '/download' },
  ]}
/>

// Authenticated user
<AppHeader
  isAuthenticated={true}
  user={{
    name: 'John Doe',
    avatar: '/avatar.jpg',
  }}
  onSearch={(query) => search(query)}
  onBack={() => goBack()}
  onForward={() => goForward()}
  canGoBack={true}
  canGoForward={false}
/>
\`\`\`

## Custom Links
You can customize the guest links displayed in the header by passing the \`customLinks\` prop:

\`\`\`tsx
<AppHeader
  customLinks={[
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'pricing', label: 'Pricing', href: '/pricing' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ]}
/>
\`\`\`

Each link can also have an optional \`onClick\` handler for custom behavior.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isAuthenticated: {
      control: 'boolean',
      description: 'Whether the user is authenticated',
    },
    user: {
      control: 'object',
      description: 'User information when authenticated',
    },
    onSearch: {
      action: 'search',
      description: 'Search handler',
    },
    onLogin: {
      action: 'login',
      description: 'Login handler',
    },
    onSignUp: {
      action: 'signup',
      description: 'Sign up handler',
    },
    onInstallApp: {
      action: 'install',
      description: 'Install app handler',
    },
    onBack: {
      action: 'back',
      description: 'Navigate back handler',
    },
    onForward: {
      action: 'forward',
      description: 'Navigate forward handler',
    },
    onHomeClick: {
      action: 'home',
      description: 'Home click handler',
    },
    customLinks: {
      control: 'object',
      description: 'Custom navigation links for guest users. Each link should have id, label, and href properties.',
    },
    showInstallApp: {
      control: 'boolean',
      description: 'Whether to show install app button',
    },
    showAuthButtons: {
      control: 'boolean',
      description: 'Whether to show auth buttons for guests',
    },
    showCustomLinks: {
      control: 'boolean',
      description: 'Whether to show custom links for guests',
    },
    showNavigationControls: {
      control: 'boolean',
      description: 'Whether to show back/forward navigation arrows',
    },
    canGoBack: {
      control: 'boolean',
      description: 'Whether the back button is enabled',
    },
    canGoForward: {
      control: 'boolean',
      description: 'Whether the forward button is enabled',
    },
  },
} as Meta<typeof AppHeader>;

const Template: StoryFn<AppHeaderProps> = (args) => <AppHeader {...args} />;

// Default guest user with standard Spotify links
export const GuestDefault: StoryFn<AppHeaderProps> = Template.bind({});
GuestDefault.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onSignUp: () => console.log('Sign up clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  onBack: () => console.log('Back clicked'),
  onForward: () => console.log('Forward clicked'),
  canGoBack: true,
  canGoForward: false,
};

// Guest user with custom links
export const GuestWithCustomLinks: StoryFn<AppHeaderProps> = Template.bind({});
GuestWithCustomLinks.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onSignUp: () => console.log('Sign up clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  customLinks: [
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'pricing', label: 'Pricing', href: '/pricing' },
    { id: 'features', label: 'Features', href: '/features' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ],
  canGoBack: false,
  canGoForward: false,
};

// Guest with custom links that have onClick handlers
export const GuestWithInteractiveLinks: StoryFn<AppHeaderProps> = Template.bind({});
GuestWithInteractiveLinks.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onSignUp: () => console.log('Sign up clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  customLinks: [
    { 
      id: 'premium', 
      label: 'Premium', 
      href: '#premium',
      onClick: () => console.log('Premium link clicked!')
    },
    { 
      id: 'support', 
      label: 'Support', 
      href: '#support',
      onClick: () => console.log('Support link clicked!')
    },
    { 
      id: 'blog', 
      label: 'Blog', 
      href: '#blog',
      onClick: () => console.log('Blog link clicked!')
    },
  ],
};

// Authenticated user
export const Authenticated: StoryFn<AppHeaderProps> = Template.bind({});
Authenticated.args = {
  isAuthenticated: true,
  user: {
    name: 'Lana Nguyen',
    avatar: 'https://i.scdn.co/image/ab67706f00000002619c41c539a47b0b910728d0',
  },
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  onBack: () => console.log('Back clicked'),
  onForward: () => console.log('Forward clicked'),
  canGoBack: true,
  canGoForward: true,
};

// Authenticated without avatar
export const AuthenticatedNoAvatar: StoryFn<AppHeaderProps> = Template.bind({});
AuthenticatedNoAvatar.args = {
  isAuthenticated: true,
  user: {
    name: 'John Doe',
    avatar: '',
  },
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  canGoBack: false,
  canGoForward: true,
};

// Minimal guest (no links, no buttons)
export const MinimalGuest: StoryFn<AppHeaderProps> = Template.bind({});
MinimalGuest.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  showInstallApp: false,
  showAuthButtons: false,
  showCustomLinks: false,
  showNavigationControls: false,
};

// Guest without navigation controls
export const GuestNoNavigation: StoryFn<AppHeaderProps> = Template.bind({});
GuestNoNavigation.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onSignUp: () => console.log('Sign up clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  showNavigationControls: false,
};

// Real-world example: E-commerce site
export const EcommerceHeader: StoryFn<AppHeaderProps> = Template.bind({});
EcommerceHeader.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onSignUp: () => console.log('Sign up clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  customLinks: [
    { id: 'shop', label: 'Shop', href: '/shop' },
    { id: 'deals', label: 'Deals', href: '/deals' },
    { id: 'new', label: 'New Arrivals', href: '/new' },
    { id: 'brands', label: 'Brands', href: '/brands' },
  ],
  showInstallApp: false,
};

// Real-world example: SaaS product
export const SaaSHeader: StoryFn<AppHeaderProps> = Template.bind({});
SaaSHeader.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onSignUp: () => console.log('Sign up clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  customLinks: [
    { id: 'features', label: 'Features', href: '/features' },
    { id: 'pricing', label: 'Pricing', href: '/pricing' },
    { id: 'docs', label: 'Docs', href: '/docs' },
    { id: 'api', label: 'API', href: '/api' },
  ],
  showInstallApp: false,
};

// Demo: Custom links with all features (href + onClick + external URLs)
export const CustomLinksShowcase: StoryFn<AppHeaderProps> = Template.bind({});
CustomLinksShowcase.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => console.log('Log in clicked'),
  onSignUp: () => console.log('Sign up clicked'),
  onInstallApp: () => console.log('Install App clicked'),
  customLinks: [
    { 
      id: 'internal', 
      label: 'Internal Link', 
      href: '/internal-page',
      onClick: () => console.log('Internal link clicked - you can add analytics here!')
    },
    { 
      id: 'external', 
      label: 'External Link', 
      href: 'https://spotify.com',
      onClick: () => console.log('External link clicked - tracking event sent!')
    },
    { 
      id: 'hash', 
      label: 'Hash Link', 
      href: '#section',
      onClick: () => console.log('Hash link clicked - smooth scroll to section!')
    },
    { 
      id: 'simple', 
      label: 'Simple Link', 
      href: '/about'
      // No onClick - just navigates
    },
  ],
  showInstallApp: false,
};
