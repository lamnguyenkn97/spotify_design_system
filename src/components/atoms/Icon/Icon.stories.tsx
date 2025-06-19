import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import { colors, spacing } from '../../../styles';
import {
  faPlay,
  faPause,
  faHeart,
  faDownload,
  faShare,
  faEllipsis,
  faHome,
  faSearch,
  faMusic,
  faMicrophone,
  faUser,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A simple icon component for Spotify interfaces with essential sizes and interactions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the icon',
    },
    color: {
      control: 'select',
      options: ['primary', 'muted', 'brand', 'inherit'],
      description: 'Color from Spotify design tokens',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the icon is clickable',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the icon is disabled',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        backgroundColor: colors.primary.black, 
        color: colors.primary.white,
        padding: spacing.lg 
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    icon: faPlay,
  },
};

export const Clickable: Story = {
  args: {
    icon: faHeart,
    clickable: true,
    color: 'brand',
    'aria-label': 'Like this song',
  },
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.lg }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Small (16px)
        </div>
        <Icon icon={faMusic} size="sm" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Medium (20px)
        </div>
        <Icon icon={faMusic} size="md" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Large (24px)
        </div>
        <Icon icon={faMusic} size="lg" />
      </div>
    </div>
  ),
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.lg }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Primary (White)
        </div>
        <Icon icon={faHeart} color="primary" size="lg" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Muted (Grey)
        </div>
        <Icon icon={faHeart} color="muted" size="lg" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Brand (Green)
        </div>
        <Icon icon={faHeart} color="brand" size="lg" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Custom
        </div>
        <Icon icon={faHeart} color="#ff6b6b" size="lg" />
      </div>
    </div>
  ),
};

// Real Spotify use cases
export const SpotifyPlaybackControls: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
      <Icon icon={faPlay} clickable color="primary" aria-label="Play" />
      <Icon icon={faPause} clickable color="primary" aria-label="Pause" />
      <Icon icon={faHeart} clickable color="muted" aria-label="Like song" />
      <Icon icon={faDownload} clickable color="muted" aria-label="Download" />
    </div>
  ),
};

export const SpotifyNavigation: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: spacing.md,
      backgroundColor: colors.grey.grey1,
      padding: spacing.lg,
      borderRadius: '8px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
        <Icon icon={faHome} color="primary" />
        <span>Home</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
        <Icon icon={faSearch} color="muted" />
        <span style={{ color: colors.grey.grey6 }}>Search</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
        <Icon icon={faMusic} color="muted" />
        <span style={{ color: colors.grey.grey6 }}>Your Library</span>
      </div>
    </div>
  ),
};

export const SpotifyContextMenu: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.lg }}>
      <Icon icon={faEllipsis} clickable color="muted" aria-label="More options" />
      <Icon icon={faShare} clickable color="muted" aria-label="Share" />
      <Icon icon={faUser} clickable color="muted" aria-label="Artist profile" />
    </div>
  ),
};

export const InteractiveStates: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.lg }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Normal
        </div>
        <Icon icon={faCheck} color="primary" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Clickable (hover me)
        </div>
        <Icon icon={faCheck} clickable color="primary" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: spacing.sm, fontSize: '12px', color: colors.grey.grey6 }}>
          Disabled
        </div>
        <Icon icon={faCheck} disabled color="primary" />
      </div>
    </div>
  ),
};
