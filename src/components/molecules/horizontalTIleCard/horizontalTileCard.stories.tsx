import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalTileCard } from './HorizontalTileCard';
import { Stack } from '../../atoms/Layout/Stack';

const meta: Meta<typeof HorizontalTileCard> = {
  title: 'Molecules/HorizontalTileCard',
  component: HorizontalTileCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'HorizontalTileCard displays content in a horizontal layout with image, title, subtitle, and optional progress bar. Commonly used in Spotify playlists and sidebar navigation.',
      },
    },
  },
  argTypes: {
    image: {
      control: 'text',
      description: 'Image URL for the card',
    },
    title: {
      control: 'text',
      description: 'Main title of the card',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle or description',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Size of the card',
    },
    showProgress: {
      control: 'boolean',
      description: 'Whether to show the progress slider',
    },
    progressValue: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      description: 'Progress value between 0 and 1',
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the card is currently selected/active',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled',
    },
    width: {
      control: 'text',
      description: 'Width of the card',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the card',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HorizontalTileCard>;

// Default story
export const Default: Story = {
  args: {
    image: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
    title: 'Liked Songs',
    subtitle: 'Playlist • 207 songs',
    size: 'large',
    width: '400px',
  },
};

// With Progress
export const WithProgress: Story = {
  args: {
    image: 'https://i.scdn.co/image/ab6765630000ba8ae24c2a24ccb969befb377b5e',
    title: '#33 - người lớn đổi thay',
    subtitle: 'Podcast • Giang ơi Radio',
    showProgress: true,
    progressValue: 0.45,
    size: 'large',
    width: '400px',
  },
};

// Size variants
export const AllSizes: Story = {
  render: () => (
    <Stack direction="column" spacing="lg" align="start">
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Large Size</h3>
        <HorizontalTileCard
          image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg"
          title="Liked Songs"
          subtitle="Playlist • 207 songs"
          size="large"
          width="400px"
        />
      </div>
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Small Size</h3>
        <HorizontalTileCard
          image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg"
          title="Liked Songs"
          subtitle="Playlist • 207 songs"
          size="small"
          width="300px"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'HorizontalTileCard supports two sizes: small (40px image) and large (60px image).',
      },
    },
  },
};

// States showcase
export const States: Story = {
  render: () => (
    <Stack direction="column" spacing="md" align="start">
      <HorizontalTileCard
        image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg"
        title="Normal State"
        subtitle="Default appearance"
        width="350px"
      />
      <HorizontalTileCard
        image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg"
        title="Active State"
        subtitle="Currently selected"
        isActive
        width="350px"
      />
      <HorizontalTileCard
        image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg"
        title="Disabled State"
        subtitle="Cannot be interacted with"
        disabled
        width="350px"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the HorizontalTileCard component.',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    image: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
    title: 'Your Playlist',
    subtitle: 'Playlist • 42 songs',
    size: 'large',
    width: '400px',
    showProgress: false,
    progressValue: 0.3,
    isActive: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different HorizontalTileCard configurations.',
      },
    },
  },
};
