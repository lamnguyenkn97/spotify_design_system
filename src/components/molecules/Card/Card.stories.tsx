import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { CardVariant, CardSize } from './Card.types';
import { colors, spacing } from '../../../styles';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'artist'],
      description: 'Card variant - artist cards have circular images and centered text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Card size - controls width and default image size',
    },
    title: {
      control: 'text',
      description: 'Main title of the card',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle for default cards (hidden for artist variant)',
    },
    imageUrl: {
      control: 'text',
      description: 'Cover image URL',
    },
    imageSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Override default image size (auto-selected based on card size)',
    },
    showPlayButton: {
      control: 'boolean',
      description: 'Whether to show the play button on hover',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Moody Mix',
    subtitle: 'Lauv, Miley Cyrus, Gracie Abrams and more',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e',
    variant: 'default',
    size: 'md',
    onPlayClick: () => console.log('Play clicked'),
  },
};

export const Artist: Story = {
  args: {
    title: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb859e4c14fa59296c8649e0e4',
    variant: 'artist',
    size: 'md',
    onPlayClick: () => console.log('Play clicked'),
  },
};

// Card sizes showcase
export const CardSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: spacing.lg, 
      backgroundColor: colors.primary.black, 
      padding: spacing.lg,
      alignItems: 'flex-start'
    }}>
      <Card
        title="Small Card"
        subtitle="Size: sm"
        imageUrl="https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5"
        size="sm"
        onPlayClick={() => console.log('Play small')}
      />
      <Card
        title="Medium Card"
        subtitle="Size: md (default)"
        imageUrl="https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc"
        size="md"
        onPlayClick={() => console.log('Play medium')}
      />
      <Card
        title="Large Card"
        subtitle="Size: lg"
        imageUrl="https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5"
        size="lg"
        onPlayClick={() => console.log('Play large')}
      />
    </div>
  ),
};

export const WithoutPlayButton: Story = {
  args: {
    title: '1989 (Taylor\'s Version)',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273904445d34bf2042d0b6ff4bb',
    showPlayButton: false,
    size: 'md',
  },
};

// Responsive grid layout
export const ResponsiveGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
      gap: spacing.lg, 
      backgroundColor: colors.primary.black, 
      padding: spacing.lg,
      maxWidth: '600px'
    }}>
      <Card
        title="folklore"
        subtitle="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d0000b2735076e4160d018e378f488c33"
        onPlayClick={() => console.log('Play folklore')}
        size="sm"
      />
      <Card
        title="Midnights"
        subtitle="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5"
        onPlayClick={() => console.log('Play Midnights')}
        size="sm"
      />
      <Card
        title="Lover"
        subtitle="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
        onPlayClick={() => console.log('Play Lover')}
        size="sm"
      />
              <Card
          title="Red (Taylor's Version)"
          subtitle="Taylor Swift"
          imageUrl="https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d"
          onPlayClick={() => console.log('Play Red')}
          size="sm"
        />
    </div>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: spacing.lg, 
      backgroundColor: colors.primary.black, 
      padding: spacing.lg,
      alignItems: 'flex-start'
    }}>
      <Card
        title="1989 (Taylor's Version)"
        subtitle="Taylor Swift • 2023"
        imageUrl="https://i.scdn.co/image/ab67616d0000b273904445d34bf2042d0b6ff4bb"
        variant="default"
        size="md"
        onPlayClick={() => console.log('Album play')}
      />
      <Card
        title="Taylor Swift"
        imageUrl="https://i.scdn.co/image/ab6761610000e5eb859e4c14fa59296c8649e0e4"
        variant="artist"
        size="md"
        onPlayClick={() => console.log('Artist play')}
      />
    </div>
  ),
};

// Custom image size example
export const CustomImageSize: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: spacing.lg, 
      backgroundColor: colors.primary.black, 
      padding: spacing.lg,
      alignItems: 'flex-start'
    }}>
      <Card
        title="Large Card"
        subtitle="Small Image"
        imageUrl="https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc"
        size="lg"
        imageSize="sm"
        onPlayClick={() => console.log('Play with small image')}
      />
      <Card
        title="Small Card"
        subtitle="Large Image"
        imageUrl="https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
        size="sm"
        imageSize="lg"
        onPlayClick={() => console.log('Play with large image')}
      />
    </div>
  ),
};

// Real-world examples
export const SpotifyExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
      gap: spacing.lg, 
      backgroundColor: colors.primary.black, 
      padding: spacing.lg 
    }}>
      <Card
        title="Today's Top Hits"
        subtitle="Dua Lipa, Ariana Grande, The Weeknd and more"
        imageUrl="https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e"
        size="md"
        onPlayClick={() => console.log('Playing Today\'s Top Hits')}
      />
      <Card
        title="RapCaviar"
        subtitle="New music from Kendrick Lamar, Future, and more"
        imageUrl="https://i.scdn.co/image/ab67616d0000b273c02e0cc99fba4c1f6e5e3e18"
        size="md"
        onPlayClick={() => console.log('Playing RapCaviar')}
      />
      <Card
        title="Billie Eilish"
        imageUrl="https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da"
        variant="artist"
        size="md"
        onPlayClick={() => console.log('Playing Billie Eilish')}
      />
      <Card
        title="Chill Pop"
        subtitle="Chill out to these laid-back pop tracks"
        imageUrl="https://i.scdn.co/image/ab67616d0000b273a6968fb5cae5d1b7d1a0b7e5"
        size="md"
        onPlayClick={() => console.log('Playing Chill Pop')}
      />
    </div>
  ),
};

// Accessibility example
export const AccessibilityExample: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: spacing.lg, 
      backgroundColor: colors.primary.black, 
      padding: spacing.lg,
      alignItems: 'flex-start'
    }}>
      <Card
        title="Accessible Card"
        subtitle="With custom aria-label"
        imageUrl="https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5"
        size="md"
        aria-label="Custom accessibility label for screen readers"
        onPlayClick={() => console.log('Play with custom label')}
      />
    </div>
  ),
};
