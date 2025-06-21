import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Image } from './Image';
import { Stack } from '../Stack';
import { colors, spacing } from '../../../styles';

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
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            marginBottom: spacing.sm,
            fontSize: '14px',
            color: colors.grey.grey6,
          }}
        >
          Album
        </div>
        <Image
          src={sampleImages.album}
          alt="Album cover"
          variant="album"
          size="lg"
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            marginBottom: spacing.sm,
            fontSize: '14px',
            color: colors.grey.grey6,
          }}
        >
          Avatar
        </div>
        <Image
          src={sampleImages.avatar}
          alt="User avatar"
          variant="avatar"
          shape="circle"
          size="lg"
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            marginBottom: spacing.sm,
            fontSize: '14px',
            color: colors.grey.grey6,
          }}
        >
          Playlist
        </div>
        <Image
          src={sampleImages.playlist}
          alt="Playlist cover"
          variant="playlist"
          size="lg"
        />
      </div>
    </Stack>
  ),
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
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            marginBottom: spacing.sm,
            fontSize: '14px',
            color: colors.grey.grey6,
          }}
        >
          No Image (Placeholder)
        </div>
        <Image src="" alt="No album" variant="album" size="md" />
      </div>

      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            marginBottom: spacing.sm,
            fontSize: '14px',
            color: colors.grey.grey6,
          }}
        >
          Broken URL
        </div>
        <Image
          src={sampleImages.broken}
          alt="Broken image"
          variant="avatar"
          shape="circle"
          size="md"
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            marginBottom: spacing.sm,
            fontSize: '14px',
            color: colors.grey.grey6,
          }}
        >
          With Fallback
        </div>
        <Image
          src={sampleImages.broken}
          alt="Image with fallback"
          fallbackSrc={sampleImages.fallback}
          variant="album"
          size="md"
        />
      </div>
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
      <h3 style={{ marginBottom: spacing.md, color: colors.primary.white }}>
        Albums
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: spacing.lg,
          marginBottom: spacing.xl,
          alignItems: 'start',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src={sampleImages.album}
            alt="Lover - Taylor Swift"
            variant="album"
            size="md"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Lover - Taylor Swift
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image src="" alt="No Cover" variant="album" size="md" />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            No Cover
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src={sampleImages.album}
            alt="Lover (Deluxe)"
            variant="album"
            size="md"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Lover (Deluxe)
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src={sampleImages.broken}
            alt="Failed Load"
            variant="album"
            size="md"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Failed Load
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: spacing.md, color: colors.primary.white }}>
        Users
      </h3>
      <div
        style={{
          display: 'flex',
          gap: spacing.xl,
          marginBottom: spacing.xl,
          alignItems: 'end',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src={sampleImages.avatar}
            alt="Active User"
            variant="avatar"
            shape="circle"
            size="lg"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Active User
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src=""
            alt="New User"
            variant="avatar"
            shape="circle"
            size="md"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            New User
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src={sampleImages.broken}
            alt="Offline User"
            variant="avatar"
            shape="circle"
            size="sm"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Offline User
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: spacing.md, color: colors.primary.white }}>
        Playlists
      </h3>
      <div
        style={{
          display: 'flex',
          gap: spacing.xl,
          marginBottom: spacing.xl,
          alignItems: 'end',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src={sampleImages.playlist}
            alt="My Playlist"
            variant="playlist"
            size="lg"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            My Playlist
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image src="" alt="Empty Playlist" variant="playlist" size="md" />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Empty Playlist
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src={sampleImages.broken}
            alt="Shared Playlist"
            variant="playlist"
            size="sm"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Shared Playlist
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: spacing.md, color: colors.primary.white }}>
        Artists
      </h3>
      <div
        style={{
          display: 'flex',
          gap: spacing.xl,
          alignItems: 'end',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src={sampleImages.artist}
            alt="Taylor Swift"
            variant="avatar"
            shape="circle"
            size="lg"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Taylor Swift
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src=""
            alt="New Artist"
            variant="avatar"
            shape="circle"
            size="md"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            New Artist
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            src={sampleImages.broken}
            alt="Popular Artist"
            variant="avatar"
            shape="circle"
            size="sm"
          />
          <div
            style={{
              fontSize: '12px',
              color: colors.grey.grey4,
              textAlign: 'center',
              lineHeight: '1.3',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Popular Artist
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
