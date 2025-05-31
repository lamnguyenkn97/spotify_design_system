import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AppHeader, AppHeaderProps } from './AppHeader';

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
} as Meta<typeof AppHeader>;

const Template: StoryFn<AppHeaderProps> = (args) => <AppHeader {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  isAuthenticated: false,
  onLogin: () => alert('Log in clicked'),
  onSignUp: () => alert('Sign up clicked'),
  onInstallApp: () => alert('Install App clicked'),
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isAuthenticated: true,
  user: {
    name: 'Lana Nguyen',
    avatar: 'https://i.scdn.co/image/ab67706f00000002619c41c539a47b0b910728d0',
  },
  onSearch: (value) => console.log('Searching for:', value),
  onInstallApp: () => alert('Install App clicked'),
};
