import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AppHeader } from './AppHeader';
import { AppHeaderProps } from './AppHeader.types';

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
  },
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
    onHomeClick: {
      action: 'home',
      description: 'Home click handler',
    },
  },
} as Meta<typeof AppHeader>;

const Template: StoryFn<AppHeaderProps> = (args) => <AppHeader {...args} />;

export const LoggedOut: StoryFn<AppHeaderProps> = Template.bind({});
LoggedOut.args = {
  isAuthenticated: false,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => alert('Log in clicked'),
  onSignUp: () => alert('Sign up clicked'),
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
  onSignUp: () => alert('Sign up clicked'),
  onInstallApp: () => alert('Install App clicked'),
  onHomeClick: () => alert('Home clicked'),
};

export const LoggedInWithoutUser: StoryFn<AppHeaderProps> = Template.bind({});
LoggedInWithoutUser.args = {
  isAuthenticated: true,
  onSearch: (value) => console.log('Searching for:', value),
  onLogin: () => alert('Log in clicked'),
  onSignUp: () => alert('Sign up clicked'),
  onInstallApp: () => alert('Install App clicked'),
  onHomeClick: () => alert('Home clicked'),
};
