import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AppHeader } from './AppHeader';
import { AppHeaderProps, HeaderAction, HeaderLink } from './AppHeader.types';
import { Icon } from '../../atoms';
import { faHeart, faUser, faCog, faBell } from '@fortawesome/free-solid-svg-icons';

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

Top navigation header with search, authentication, and navigation controls.

## Features
- Logo/brand
- Navigation arrows (back/forward)
- Search bar
- Authentication state (logged in/out)
- User menu with avatar
- Custom actions/links
- Install app button
- Responsive layout

## Usage

\`\`\`tsx
import { AppHeader } from 'spotify-design-system';

// Unauthenticated
<AppHeader
  onLogin={() => showLogin()}
  onSearch={(query) => search(query)}
  onInstallApp={() => downloadApp()}
/>

// Authenticated
<AppHeader
  isAuthenticated
  user={{
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatar.jpg',
  }}
  onSearch={(query) => search(query)}
  customActions={[
    { label: 'Profile', onClick: () => goToProfile() },
    { label: 'Settings', onClick: () => goToSettings() },
    { label: 'Logout', onClick: () => logout() },
  ]}
/>
\`\`\`

## Sections
- Left: Logo + navigation arrows
- Center: Search bar (full width)
- Right: Auth buttons or user menu
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
    onInstallApp: {
      action: 'install',
      description: 'Install app handler',
    },
    onHomeClick: {
      action: 'home',
      description: 'Home click handler',
    },
    customActions: {
      control: 'object',
      description: 'Custom actions for authenticated users',
    },
    customLinks: {
      control: 'object',
      description: 'Custom links for guest users',
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
  },
} as Meta<typeof AppHeader>;

const Template: StoryFn<AppHeaderProps> = (args) => <AppHeader {...args} />;

export const LoggedOut: StoryFn<AppHeaderProps> = Template.bind({});
LoggedOut.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => alert('Log in clicked'),
  onInstallApp: () => alert('Install App clicked'),
  onHomeClick: () => alert('Home clicked'),
};

export const LoggedIn: StoryFn<AppHeaderProps> = Template.bind({});
LoggedIn.args = {
  isAuthenticated: true,
  user: {
    name: 'Lana Nguyen',
    avatar: 'https://i.scdn.co/image/ab67706f00000002619c41c539a47b0b910728d0',
  },
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => alert('Log in clicked'),
  onInstallApp: () => alert('Install App clicked'),
  onHomeClick: () => alert('Home clicked'),
};

export const LoggedInWithoutUser: StoryFn<AppHeaderProps> = Template.bind({});
LoggedInWithoutUser.args = {
  isAuthenticated: true,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => alert('Log in clicked'),
  onInstallApp: () => alert('Install App clicked'),
  onHomeClick: () => alert('Home clicked'),
};

// Dynamic configuration examples
export const MinimalGuest: StoryFn<AppHeaderProps> = Template.bind({});
MinimalGuest.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => alert('Log in clicked'),
  onInstallApp: () => alert('Install App clicked'),
  onHomeClick: () => alert('Home clicked'),
  showInstallApp: false,
  showAuthButtons: false,
  showCustomLinks: false,
};

export const CustomGuestLinks: StoryFn<AppHeaderProps> = Template.bind({});
CustomGuestLinks.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => alert('Log in clicked'),
  onInstallApp: () => alert('Install App clicked'),
  onHomeClick: () => alert('Home clicked'),
  customLinks: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
    { id: 'help', label: 'Help', href: '#help' },
  ],
  showInstallApp: false,
};

export const CustomAuthenticatedActions: StoryFn<AppHeaderProps> = Template.bind({});
CustomAuthenticatedActions.args = {
  isAuthenticated: true,
  user: {
    name: 'Lana Nguyen',
    avatar: 'https://i.scdn.co/image/ab67706f00000002619c41c539a47b0b910728d0',
  },
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => alert('Log in clicked'),
  onInstallApp: () => alert('Install App clicked'),
  onHomeClick: () => alert('Home clicked'),
  customActions: [
    {
      id: 'favorites',
      label: 'Favorites',
      onClick: () => alert('Favorites clicked'),
      icon: <Icon icon={faHeart} size="sm" />,
      variant: 'text',
    },
    {
      id: 'notifications',
      label: 'Notifications',
      onClick: () => alert('Notifications clicked'),
      icon: <Icon icon={faBell} size="sm" />,
      variant: 'text',
    },
    {
      id: 'settings',
      label: 'Settings',
      onClick: () => alert('Settings clicked'),
      icon: <Icon icon={faCog} size="sm" />,
      variant: 'text',
    },
  ],
  showInstallApp: false,
};

export const MixedCustomActions: StoryFn<AppHeaderProps> = Template.bind({});
MixedCustomActions.args = {
  isAuthenticated: true,
  user: {
    name: 'Lana Nguyen',
    avatar: 'https://i.scdn.co/image/ab67706f00000002619c41c539a47b0b910728d0',
  },
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => alert('Log in clicked'),
  onInstallApp: () => alert('Install App clicked'),
  onHomeClick: () => alert('Home clicked'),
  customActions: [
    {
      id: 'profile',
      label: 'Profile',
      onClick: () => alert('Profile clicked'),
      icon: <Icon icon={faUser} size="sm" />,
      variant: 'text',
    },
    {
      id: 'premium-link',
      label: 'Go Premium',
      onClick: () => alert('Premium clicked'),
      type: 'link',
      href: '#premium',
    },
  ],
};
