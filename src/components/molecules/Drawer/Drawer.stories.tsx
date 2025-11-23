import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../../atoms/Button';
import { ButtonVariant } from '../../atoms/Button/Button.types';
import { Typography } from '../../atoms/Typography';

const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Drawer component for displaying side panels. Drawers slide in from the edges of the screen and can contain navigation, forms, or other content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the drawer is open',
    },
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Position of the drawer',
    },
    width: {
      control: 'text',
      description: 'Width or height of the drawer',
    },
    title: {
      control: 'text',
      description: 'Drawer title',
    },
    showBackdrop: {
      control: 'boolean',
      description: 'Show backdrop overlay',
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Close on backdrop click',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close on ESC key',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// Interactive wrapper for stories
const DrawerWithTrigger = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant={ButtonVariant.Primary} onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

/**
 * Default drawer positioned on the right side
 */
export const Default: Story = {
  render: (args) => <DrawerWithTrigger {...args} />,
  args: {
    position: 'right',
    title: 'Settings',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Typography variant="body" style={{ color: '#fff' }}>
          Configure your settings here
        </Typography>
        <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
          <Typography variant="heading" size="md" style={{ color: '#fff', marginBottom: '8px' }}>
            Account
          </Typography>
          <Typography variant="caption" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Manage your account settings and preferences
          </Typography>
        </div>
        <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
          <Typography variant="heading" size="md" style={{ color: '#fff', marginBottom: '8px' }}>
            Privacy
          </Typography>
          <Typography variant="caption" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Control your privacy and data sharing options
          </Typography>
        </div>
        <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
          <Typography variant="heading" size="md" style={{ color: '#fff', marginBottom: '8px' }}>
            Notifications
          </Typography>
          <Typography variant="caption" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Customize what notifications you receive
          </Typography>
        </div>
      </div>
    ),
    showBackdrop: true,
    closeOnBackdropClick: true,
    closeOnEscape: true,
    showCloseButton: true,
  },
};

/**
 * Drawer positioned on the left side
 */
export const LeftDrawer: Story = {
  render: (args) => <DrawerWithTrigger {...args} />,
  args: {
    position: 'left',
    title: 'Navigation',
    width: '300px',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Button variant={ButtonVariant.Text} fullWidth style={{ justifyContent: 'flex-start' }}>
          Home
        </Button>
        <Button variant={ButtonVariant.Text} fullWidth style={{ justifyContent: 'flex-start' }}>
          Search
        </Button>
        <Button variant={ButtonVariant.Text} fullWidth style={{ justifyContent: 'flex-start' }}>
          Your Library
        </Button>
        <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '16px 0' }} />
        <Button variant={ButtonVariant.Text} fullWidth style={{ justifyContent: 'flex-start' }}>
          Create Playlist
        </Button>
        <Button variant={ButtonVariant.Text} fullWidth style={{ justifyContent: 'flex-start' }}>
          Liked Songs
        </Button>
      </div>
    ),
  },
};

/**
 * Drawer positioned on the top
 */
export const TopDrawer: Story = {
  render: (args) => <DrawerWithTrigger {...args} />,
  args: {
    position: 'top',
    title: 'Notifications',
    width: '250px',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ padding: '12px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
          <Typography variant="body" size="sm" weight="bold" style={{ color: '#fff' }}>
            New Release
          </Typography>
          <Typography variant="caption" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Your favorite artist just dropped a new album!
          </Typography>
        </div>
        <div style={{ padding: '12px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
          <Typography variant="body" size="sm" weight="bold" style={{ color: '#fff' }}>
            Weekly Discover
          </Typography>
          <Typography variant="caption" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Your personalized playlist is ready
          </Typography>
        </div>
      </div>
    ),
  },
};

/**
 * Drawer positioned at the bottom
 */
export const BottomDrawer: Story = {
  render: (args) => <DrawerWithTrigger {...args} />,
  args: {
    position: 'bottom',
    title: 'Now Playing',
    width: '300px',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <img
          src="https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
          alt="Album cover"
          style={{ width: '120px', height: '120px', borderRadius: '8px' }}
        />
        <div style={{ textAlign: 'center' }}>
          <Typography variant="heading" size="md" style={{ color: '#fff' }}>
            Lover
          </Typography>
          <Typography variant="caption" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Taylor Swift
          </Typography>
        </div>
      </div>
    ),
  },
};

/**
 * Drawer without backdrop
 */
export const NoBackdrop: Story = {
  render: (args) => <DrawerWithTrigger {...args} />,
  args: {
    position: 'right',
    title: 'Side Panel',
    width: '350px',
    showBackdrop: false,
    children: (
      <div>
        <Typography variant="body" style={{ color: '#fff' }}>
          This drawer doesn't have a backdrop, so you can interact with the content behind it.
        </Typography>
      </div>
    ),
  },
};

/**
 * Drawer without close button
 */
export const NoCloseButton: Story = {
  render: (args) => <DrawerWithTrigger {...args} />,
  args: {
    position: 'right',
    title: 'Required Action',
    showCloseButton: false,
    closeOnBackdropClick: false,
    closeOnEscape: false,
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Typography variant="body" style={{ color: '#fff' }}>
          You must complete this action to continue.
        </Typography>
        <Button variant={ButtonVariant.Primary} fullWidth>
          Complete Action
        </Button>
      </div>
    ),
  },
};

/**
 * Wide drawer
 */
export const WideDrawer: Story = {
  render: (args) => <DrawerWithTrigger {...args} />,
  args: {
    position: 'right',
    title: 'Playlist Details',
    width: '600px',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <img
            src="https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
            alt="Playlist cover"
            style={{ width: '160px', height: '160px', borderRadius: '8px', flexShrink: 0 }}
          />
          <div>
            <Typography variant="heading" size="lg" style={{ color: '#fff', marginBottom: '8px' }}>
              My Awesome Playlist
            </Typography>
            <Typography variant="caption" style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px' }}>
              50 songs • 3h 25min
            </Typography>
            <Button variant={ButtonVariant.Primary}>Play</Button>
          </div>
        </div>
        <div>
          <Typography variant="heading" size="md" style={{ color: '#fff', marginBottom: '12px' }}>
            Description
          </Typography>
          <Typography variant="caption" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            A collection of my favorite songs for every mood. Perfect for long drives, workout sessions, or just
            relaxing at home.
          </Typography>
        </div>
      </div>
    ),
  },
};

/**
 * Drawer without title
 */
export const NoTitle: Story = {
  render: (args) => <DrawerWithTrigger {...args} />,
  args: {
    position: 'right',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Typography variant="heading" size="lg" style={{ color: '#fff', marginBottom: '8px' }}>
          Custom Header
        </Typography>
        <Typography variant="body" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          This drawer doesn't use the built-in title prop, so you can create your own header structure.
        </Typography>
      </div>
    ),
  },
};

