import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Skeleton } from './index';
import { Stack } from '../Stack';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Skeleton component for displaying loading placeholders while content is being fetched.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'rectangular', 'circular', 'rounded'],
      description: 'Shape variant of the skeleton',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: 'Animation type',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton (string or number)',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (string or number)',
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show skeleton (true) or children (false)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
    loading: true,
  },
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing="lg" align="center">
      <Stack align="center" spacing="sm">
        <Skeleton variant="text" width="200px" />
        <div style={{ fontSize: '0.875rem' }}>Text</div>
      </Stack>
      <Stack align="center" spacing="sm">
        <Skeleton variant="rectangular" width="100px" height="60px" />
        <div style={{ fontSize: '0.875rem' }}>Rectangular</div>
      </Stack>
      <Stack align="center" spacing="sm">
        <Skeleton variant="circular" width="60px" height="60px" />
        <div style={{ fontSize: '0.875rem' }}>Circular</div>
      </Stack>
      <Stack align="center" spacing="sm">
        <Skeleton variant="rounded" width="100px" height="60px" />
        <div style={{ fontSize: '0.875rem' }}>Rounded</div>
      </Stack>
    </Stack>
  ),
};

export const Animations: Story = {
  render: () => (
    <Stack direction="row" spacing="lg" align="center">
      <Stack align="center" spacing="sm">
        <Skeleton variant="rectangular" width="150px" height="80px" animation="pulse" />
        <div style={{ fontSize: '0.875rem' }}>Pulse</div>
      </Stack>
      <Stack align="center" spacing="sm">
        <Skeleton variant="rectangular" width="150px" height="80px" animation="wave" />
        <div style={{ fontSize: '0.875rem' }}>Wave</div>
      </Stack>
      <Stack align="center" spacing="sm">
        <Skeleton variant="rectangular" width="150px" height="80px" animation="none" />
        <div style={{ fontSize: '0.875rem' }}>None</div>
      </Stack>
    </Stack>
  ),
};

export const TextSkeletons: Story = {
  render: () => (
    <Stack spacing="md" style={{ minWidth: '400px' }}>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="85%" />
      <Skeleton variant="text" width="70%" />
      <Skeleton variant="text" width="90%" />
      <Skeleton variant="text" width="60%" />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing="lg" align="center">
      <Stack align="center" spacing="sm">
        <Skeleton variant="circular" width={32} height={32} />
        <div style={{ fontSize: '0.875rem' }}>32px</div>
      </Stack>
      <Stack align="center" spacing="sm">
        <Skeleton variant="circular" width={48} height={48} />
        <div style={{ fontSize: '0.875rem' }}>48px</div>
      </Stack>
      <Stack align="center" spacing="sm">
        <Skeleton variant="circular" width={64} height={64} />
        <div style={{ fontSize: '0.875rem' }}>64px</div>
      </Stack>
      <Stack align="center" spacing="sm">
        <Skeleton variant="circular" width={80} height={80} />
        <div style={{ fontSize: '0.875rem' }}>80px</div>
      </Stack>
    </Stack>
  ),
};

const WithChildrenComponent = () => {
  const [loading, setLoading] = React.useState(true);
  
  return (
    <Stack align="center" spacing="md">
      <Skeleton loading={loading} variant="rectangular" width="300px" height="200px">
        <div style={{ 
          width: '300px', 
          height: '200px', 
          background: 'linear-gradient(45deg, #1DB954, #1ed760)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.25rem',
          fontWeight: 'bold'
        }}>
          Content Loaded!
        </div>
      </Skeleton>
      
      <button 
        onClick={() => setLoading(!loading)}
        style={{ 
          padding: '0.5rem 1rem', 
          background: '#1DB954', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {loading ? 'Show Content' : 'Show Skeleton'}
      </button>
    </Stack>
  );
};

export const WithChildren: Story = {
  render: () => <WithChildrenComponent />,
};

export const SpotifyUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexDirection: 'column', minWidth: '400px' }}>
      {/* Album Card Skeleton */}
      <div style={{ border: '1px solid #333', borderRadius: '8px', padding: '1rem', width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}>🎵 Album Card Loading</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <Skeleton variant="rounded" width={80} height={80} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
      </div>
      
      {/* Artist Profile Skeleton */}
      <div style={{ border: '1px solid #333', borderRadius: '8px', padding: '1rem', width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}>👤 Artist Profile Loading</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Skeleton variant="circular" width={60} height={60} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
      </div>
      
      {/* Playlist Skeleton */}
      <div style={{ border: '1px solid #333', borderRadius: '8px', padding: '1rem', width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}>📋 Playlist Loading</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <Skeleton variant="rectangular" width={64} height={64} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="30%" />
            <div style={{ marginTop: '0.5rem' }}>
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="85%" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Track List Skeleton */}
      <div style={{ border: '1px solid #333', borderRadius: '8px', padding: '1rem', width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}>🎶 Track List Loading</div>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
            <Skeleton variant="rounded" width={40} height={40} />
            <div style={{ flex: 1 }}>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </div>
            <Skeleton variant="text" width="40px" />
          </div>
        ))}
      </div>
    </div>
  ),
};

const LoadingStatesComponent = () => {
  const [loadingStates, setLoadingStates] = React.useState({
    profile: true,
    playlist: true,
    tracks: true,
  });

  const toggleLoading = (key: keyof typeof loadingStates) => {
    setLoadingStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexDirection: 'column', minWidth: '400px' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => toggleLoading('profile')} style={{ padding: '0.5rem', background: '#1DB954', color: 'white', border: 'none', borderRadius: '4px' }}>
          Toggle Profile
        </button>
        <button onClick={() => toggleLoading('playlist')} style={{ padding: '0.5rem', background: '#1DB954', color: 'white', border: 'none', borderRadius: '4px' }}>
          Toggle Playlist
        </button>
        <button onClick={() => toggleLoading('tracks')} style={{ padding: '0.5rem', background: '#1DB954', color: 'white', border: 'none', borderRadius: '4px' }}>
          Toggle Tracks
        </button>
      </div>
      
      <Skeleton loading={loadingStates.profile} variant="circular" width={80} height={80}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#1DB954', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
          User
        </div>
      </Skeleton>
      
      <Skeleton loading={loadingStates.playlist} variant="rectangular" width="300px" height="100px">
        <div style={{ width: '300px', height: '100px', background: '#333', borderRadius: '8px', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          My Awesome Playlist
        </div>
      </Skeleton>
      
      <Skeleton loading={loadingStates.tracks} variant="text" width="100%">
        <div style={{ color: 'white', fontSize: '1rem' }}>
          1. Song Title - Artist Name (3:45)
        </div>
      </Skeleton>
    </div>
  );
};

export const LoadingStates: Story = {
  render: () => <LoadingStatesComponent />,
};

export const Interactive: Story = {
  args: {
    variant: 'rectangular',
    animation: 'pulse',
    width: '200px',
    height: '100px',
    loading: true,
  },
}; 