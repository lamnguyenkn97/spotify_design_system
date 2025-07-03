import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Image } from './Image';
import { Stack } from '../Stack';
import { colors, spacing, borderRadius } from '../../../styles';
import { Typography } from '../Typography';

// Sample images for Spotify use cases
const sampleImages = {
  album:
    'https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png', // Taylor Swift - Lover album
  avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  playlist:
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
  artist:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png/512px-191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png', // Taylor Swift artist photo
  fallback: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Spotify',
  broken: 'https://this-url-does-not-exist.jpg',
};

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A simplified image component optimized for Spotify use cases: albums, avatars, and playlists with built-in placeholder icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size using design tokens',
    },
    shape: {
      control: 'select',
      options: ['square', 'circle', 'rounded'],
      description: 'Shape of the image',
    },
    variant: {
      control: 'select',
      options: ['album', 'avatar', 'playlist', 'default'],
      description: 'Variant determines placeholder icon and styling',
    },
    lazy: {
      control: 'boolean',
      description: 'Whether to lazy load the image',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example
export const Default: Story = {
  args: {
    src: sampleImages.album,
    alt: 'Album cover',
    size: 'md',
    variant: 'album',
  },
};

// Essential variants for Spotify
export const Variants: Story = {
  render: () => (
    <Stack
      direction="row"
      spacing="lg"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
        color: colors.primary.white,
      }}
    >
      <Stack align="center" spacing="sm">
        <Typography variant="caption" color="muted">
          Album
        </Typography>
        <Image
          src={sampleImages.album}
          alt="Album cover"
          variant="album"
          size="lg"
        />
      </Stack>

      <Stack align="center" spacing="sm">
        <Typography variant="caption" color="muted">
          Avatar
        </Typography>
        <Image
          src={sampleImages.avatar}
          alt="User avatar"
          variant="avatar"
          shape="circle"
          size="lg"
        />
      </Stack>

      <Stack align="center" spacing="sm">
        <Typography variant="caption" color="muted">
          Playlist
        </Typography>
        <Image
          src={sampleImages.playlist}
          alt="Playlist cover"
          variant="playlist"
          size="lg"
        />
      </Stack>
    </Stack>
  ),
};

// Loading states demonstration
export const LoadingStates: Story = {
  render: () => {
    // Create slow-loading image URLs to demonstrate loading states
    const slowImages = {
      // Add cache-busting params to force reload and show loading
      slow1: `${sampleImages.album}?slow=1&t=${Date.now()}`,
      slow2: `${sampleImages.avatar}?slow=2&t=${Date.now()}`,
      slow3: `${sampleImages.playlist}?slow=3&t=${Date.now()}`,
    };

    return (
      <Stack
        direction="row"
        spacing="lg"
        style={{
          padding: spacing.lg,
          backgroundColor: colors.primary.black,
          color: colors.primary.white,
        }}
      >
        <Stack align="center" spacing="sm">
          <Typography variant="caption" color="muted">
            Loading Album
          </Typography>
          <Image
            src={slowImages.slow1}
            alt="Loading album cover"
            variant="album"
            size="lg"
          />
        </Stack>

        <Stack align="center" spacing="sm">
          <Typography variant="caption" color="muted">
            Loading Avatar
          </Typography>
          <Image
            src={slowImages.slow2}
            alt="Loading user avatar"
            variant="avatar"
            shape="circle"
            size="lg"
          />
        </Stack>

        <Stack align="center" spacing="sm">
          <Typography variant="caption" color="muted">
            Loading Playlist
          </Typography>
          <Image
            src={slowImages.slow3}
            alt="Loading playlist cover"
            variant="playlist"
            size="lg"
          />
        </Stack>

        <Stack align="center" spacing="sm">
          <Typography variant="caption" color="muted">
            No Src (Immediate Placeholder)
          </Typography>
          <Image
            src=""
            alt="No image provided"
            variant="default"
            size="lg"
          />
        </Stack>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates loading states, transitions, and immediate placeholder display. Images show opacity fade-in transitions when loaded.',
      },
    },
  },
};

// Lazy loading demonstration
export const LazyLoading: Story = {
  render: () => (
    <div
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
        color: colors.primary.white,
        height: '150vh', // Make container tall to demonstrate lazy loading
      }}
    >
      <Typography variant="heading" size="xl" style={{ marginBottom: spacing.md }}>
        Scroll down to see lazy loading in action
      </Typography>
      
      <div style={{ marginBottom: '100vh' }}>
        <Typography variant="body" color="muted">
          Images below are set to lazy load - they won't start loading until they come into view
        </Typography>
      </div>

      <Stack direction="row" spacing="lg">
        <Stack align="center" spacing="sm">
          <Typography variant="caption" color="muted">
            Lazy: true (default)
          </Typography>
          <Image
            src={sampleImages.album}
            alt="Lazy loaded album"
            variant="album"
            size="lg"
            lazy={true}
          />
        </Stack>

        <Stack align="center" spacing="sm">
          <Typography variant="caption" color="muted">
            Lazy: false (eager)
          </Typography>
          <Image
            src={sampleImages.avatar}
            alt="Eagerly loaded avatar"
            variant="avatar"
            shape="circle"
            size="lg"
            lazy={false}
          />
        </Stack>
      </Stack>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Demonstrates lazy loading behavior. Scroll down to see images load when they enter the viewport.',
      },
    },
  },
};

// Loading with fallback chain
export const LoadingWithFallback: Story = {
  render: () => {
    const [triggerReload, setTriggerReload] = React.useState(0);
    
    // Force reload to show loading states
    const reloadImages = () => setTriggerReload(prev => prev + 1);
    
    return (
      <div
        style={{
          padding: spacing.lg,
          backgroundColor: colors.primary.black,
          color: colors.primary.white,
        }}
      >
        <div style={{ marginBottom: spacing.lg }}>
          <button
            onClick={reloadImages}
            style={{
              padding: `${spacing.sm} ${spacing.md}`,
              backgroundColor: colors.primary.brand,
              color: colors.primary.white,
              border: 'none',
              borderRadius: borderRadius.md,
              cursor: 'pointer',
            }}
          >
            Reload Images (See Loading States)
          </button>
        </div>

        <Stack direction="row" spacing="lg">
          <Stack align="center" spacing="sm">
            <Typography variant="caption" color="muted">
              Primary → Fallback → Placeholder
            </Typography>
            <Image
              key={`broken-${triggerReload}`}
              src={`https://broken-url-${triggerReload}.jpg`}
              fallbackSrc={sampleImages.fallback}
              alt="Loading with fallback"
              variant="album"
              size="lg"
            />
          </Stack>

          <Stack align="center" spacing="sm">
            <Typography variant="caption" color="muted">
              Success on Primary
            </Typography>
            <Image
              key={`success-${triggerReload}`}
              src={`${sampleImages.album}?reload=${triggerReload}`}
              fallbackSrc={sampleImages.fallback}
              alt="Successful loading"
              variant="album"
              size="lg"
            />
          </Stack>

          <Stack align="center" spacing="sm">
            <Typography variant="caption" color="muted">
              Both URLs Fail → Placeholder
            </Typography>
            <Image
              key={`double-fail-${triggerReload}`}
              src={`https://broken-primary-${triggerReload}.jpg`}
              fallbackSrc={`https://broken-fallback-${triggerReload}.jpg`}
              alt="Double failure"
              variant="avatar"
              shape="circle"
              size="lg"
            />
          </Stack>
        </Stack>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the complete loading sequence: Primary URL → Fallback URL → Placeholder. Click reload to see loading transitions.',
      },
    },
  },
};

// Error handling - the most important story
export const ErrorHandling: Story = {
  render: () => (
    <Stack
      direction="row"
      spacing="lg"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
        color: colors.primary.white,
      }}
    >
      <Stack align="center" spacing="sm">
        <Typography variant="caption" color="muted">
          No Image (Placeholder)
        </Typography>
        <Image src="" alt="No album" variant="album" size="md" />
      </Stack>

      <Stack align="center" spacing="sm">
        <Typography variant="caption" color="muted">
          Broken URL
        </Typography>
        <Image
          src={sampleImages.broken}
          alt="Broken image"
          variant="avatar"
          shape="circle"
          size="md"
        />
      </Stack>

      <Stack align="center" spacing="sm">
        <Typography variant="caption" color="muted">
          With Fallback
        </Typography>
        <Image
          src={sampleImages.broken}
          alt="Image with fallback"
          fallbackSrc={sampleImages.fallback}
          variant="album"
          size="md"
        />
      </Stack>
    </Stack>
  ),
};

// Real Spotify use case
export const SpotifyExample: Story = {
  render: () => (
    <div
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
        color: colors.primary.white,
      }}
    >
      <Typography
        variant="heading"
        size="xl"
        style={{ marginBottom: spacing.md }}
      >
        Albums
      </Typography>
      <Stack direction="row" spacing="lg" style={{ marginBottom: spacing.xl }}>
        <Stack align="center" spacing="sm">
          <Image
            src={sampleImages.album}
            alt="Lover - Taylor Swift"
            variant="album"
            size="md"
          />
          <Typography variant="caption" color="secondary">
            Lover - Taylor Swift
          </Typography>
        </Stack>
        <Stack align="center" spacing="sm">
          <Image src="" alt="No Cover" variant="album" size="md" />
          <Typography variant="caption" color="muted">
            No Cover
          </Typography>
        </Stack>
        <Stack align="center" spacing="sm">
          <Image
            src={sampleImages.album}
            alt="Lover (Deluxe)"
            variant="album"
            size="md"
          />
          <Typography variant="caption" color="muted">
            Lover (Deluxe)
          </Typography>
        </Stack>
        <Stack align="center" spacing="sm">
          <Image
            src={sampleImages.broken}
            alt="Failed Load"
            variant="album"
            size="md"
          />
          <Typography variant="caption" color="muted">
            Failed Load
          </Typography>
        </Stack>
      </Stack>

      <Typography
        variant="heading"
        size="xl"
        style={{ marginBottom: spacing.md }}
      >
        Users
      </Typography>
      <Stack
        direction="row"
        spacing="lg"
        align="end"
        style={{ marginBottom: spacing.xl }}
      >
        <Stack align="center" spacing="sm">
          <Image
            src={sampleImages.avatar}
            alt="Active User"
            variant="avatar"
            shape="circle"
            size="lg"
          />
          <Typography variant="caption" color="muted">
            Active User
          </Typography>
        </Stack>
        <Stack align="center" spacing="sm">
          <Image
            src=""
            alt="New User"
            variant="avatar"
            shape="circle"
            size="md"
          />
          <Typography variant="caption" color="muted">
            New User
          </Typography>
        </Stack>
      </Stack>

      <Typography
        variant="heading"
        size="xl"
        style={{ marginBottom: spacing.md }}
      >
        Playlists
      </Typography>
      <Stack
        direction="row"
        spacing="lg"
        align="end"
        style={{ marginBottom: spacing.xl }}
      >
        <Stack align="center" spacing="sm">
          <Image
            src={sampleImages.playlist}
            alt="My Playlist"
            variant="playlist"
            size="lg"
          />
          <Typography variant="caption" color="muted">
            My Playlist
          </Typography>
        </Stack>
        <Stack align="center" spacing="sm">
          <Image src="" alt="Empty Playlist" variant="playlist" size="md" />
          <Typography variant="caption" color="muted">
            Empty Playlist
          </Typography>
        </Stack>
      </Stack>

      <Typography
        variant="heading"
        size="xl"
        style={{ marginBottom: spacing.md }}
      >
        Artists
      </Typography>
      <Stack direction="row" spacing="lg" align="end">
        <Stack align="center" spacing="sm">
          <Image
            src={sampleImages.artist}
            alt="Taylor Swift"
            variant="avatar"
            shape="circle"
            size="lg"
          />
          <Typography variant="caption" color="muted">
            Taylor Swift
          </Typography>
        </Stack>
        <Stack align="center" spacing="sm">
          <Image
            src=""
            alt="New Artist"
            variant="avatar"
            shape="circle"
            size="md"
          />
          <Typography variant="caption" color="muted">
            New Artist
          </Typography>
        </Stack>
      </Stack>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
