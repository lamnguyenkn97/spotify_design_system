import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { CardSize, CardVariant } from './Card.types';
import { colors, spacing } from '../../../styles';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible card component for displaying music content like albums, playlists, and artists with hover effects and play buttons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the card',
    },
    variant: {
      control: 'select',
      options: ['default', 'artist'],
      description: 'Card variant - artist cards have circular images',
    },
    title: {
      control: 'text',
      description: 'Main title of the card',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle for default cards',
    },
    imageUrl: {
      control: 'text',
      description: 'Cover image URL',
    },
    showPlayButton: {
      control: 'boolean',
      description: 'Whether to show the play button on hover',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state for the play button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Midnights',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    size: 'md',
    variant: 'default',
    onPlayClick: () => console.log('Play clicked'),
  },
};

export const Artist: Story = {
  args: {
    title: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    size: 'md',
    variant: 'artist',
    onPlayClick: () => console.log('Play clicked'),
  },
};

// Size variations
export const SmallCard: Story = {
  args: {
    title: 'folklore',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    size: 'sm',
    onPlayClick: () => console.log('Play clicked'),
  },
};

export const LargeCard: Story = {
  args: {
    title: 'evermore',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    size: 'lg',
    onPlayClick: () => console.log('Play clicked'),
  },
};

export const WithoutPlayButton: Story = {
  args: {
    title: '1989 (Taylor\'s Version)',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    showPlayButton: false,
  },
};

export const LoadingState: Story = {
  args: {
    title: 'Lover',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    loading: true,
    onPlayClick: () => console.log('Play clicked'),
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: spacing.lg, backgroundColor: colors.primary.black, padding: spacing.lg }}>
      <Card
        title="folklore"
        subtitle="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
        size="sm"
        onPlayClick={() => console.log('Small card play')}
      />
      <Card
        title="Midnights"
        subtitle="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
        size="md"
        onPlayClick={() => console.log('Medium card play')}
      />
      <Card
        title="evermore"
        subtitle="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
        size="lg"
        onPlayClick={() => console.log('Large card play')}
      />
    </div>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: spacing.lg, backgroundColor: colors.primary.black, padding: spacing.lg }}>
      <Card
        title="1989 (Taylor's Version)"
        subtitle="Taylor Swift • 2023"
        imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
        variant="default"
        onPlayClick={() => console.log('Album play')}
      />
      <Card
        title="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
        variant="artist"
        onPlayClick={() => console.log('Artist play')}
      />
    </div>
  ),
};

// Real-world examples
export const SpotifyExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: spacing.lg, 
      backgroundColor: colors.primary.black, 
      padding: spacing.lg 
    }}>
      <Card
        title="Anti-Hero"
        subtitle="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
        onPlayClick={() => console.log('Playing Anti-Hero')}
      />
      <Card
        title="Taylor Swift Essentials"
        subtitle="Spotify • 1,247,582 likes"
        imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
        onPlayClick={() => console.log('Playing playlist')}
      />
      <Card
        title="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
        variant="artist"
        onPlayClick={() => console.log('Playing Taylor Swift')}
      />
      <Card
        title="Lover"
        subtitle="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
        onPlayClick={() => console.log('Playing Lover')}
      />
    </div>
  ),
};
