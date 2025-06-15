import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Molecules/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A banner component that displays album, playlist, podcast, or artist information with dynamic background gradients generated from cover images.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['album', 'playlist', 'podcast', 'artist'],
      description: 'Type of content being displayed',
    },
    title: {
      control: 'text',
      description: 'Main title of the content',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle for albums, playlists, and podcasts',
    },
    description: {
      control: 'text',
      description: 'Description for artists (monthly listeners, etc.)',
    },
    image: {
      control: 'text',
      description: 'Cover image URL',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Album: Story = {
  args: {
    type: 'album',
    title: 'MAYHEM',
    subtitle: 'Lady Gaga • 2025 • 14 songs, 53 min 11 sec',
    image:
      'https://seed-mix-image.spotifycdn.com/v6/img/artist/1HY2Jd0NmPuamShAr6KMms/en/default',
  },
};

export const Playlist: Story = {
  args: {
    type: 'playlist',
    title: 'Daily Mix 1',
    subtitle: 'Taylor Swift, Lady Gaga, Olivia Rodrigo and more',
    image:
      'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebe672b5f553298dcdccb0e676/en',
  },
};

export const Podcast: Story = {
  args: {
    type: 'podcast',
    title: 'Lùm Xùm',
    subtitle: 'Lùm Xùm',
    image: 'https://i.scdn.co/image/ab67656300005f1f314cd690c89ed6b8f1e91b6f',
  },
};

export const Artist: Story = {
  args: {
    type: 'artist',
    title: 'Taylor Swift',
    description: '82,240,376 monthly listeners',
    image: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
  },
};

export const InvalidImage: Story = {
  args: {
    type: 'album',
    title: 'Invalid Image Test',
    subtitle: 'This should show a fallback background',
    image: 'https://invalid-image-url.com/image.jpg',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        backgroundColor: '#000',
        padding: '24px',
      }}
    >
      <Banner
        type="album"
        title="MAYHEM"
        subtitle="Lady Gaga • 2025 • 14 songs, 53 min 11 sec"
        image="https://seed-mix-image.spotifycdn.com/v6/img/artist/1HY2Jd0NmPuamShAr6KMms/en/default"
      />
      <Banner
        type="playlist"
        title="Daily Mix 1"
        subtitle="Taylor Swift, Lady Gaga, Olivia Rodrigo and more"
        image="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebe672b5f553298dcdccb0e676/en"
      />
      <Banner
        type="podcast"
        title="Lùm Xùm"
        subtitle="Lùm Xùm"
        image="https://i.scdn.co/image/ab67656300005f1f314cd690c89ed6b8f1e91b6f"
      />
      <Banner
        type="artist"
        title="Taylor Swift"
        description="82,240,376 monthly listeners"
        image="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
      />
    </div>
  ),
};
