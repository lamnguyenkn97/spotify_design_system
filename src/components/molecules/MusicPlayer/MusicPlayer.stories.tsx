import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MusicPlayer } from './MusicPlayer';
import { MusicPlayerProps, Track } from './MusicPlayer.types';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { NowPlaying } from './NowPlaying';
import { Stack } from '../../atoms/Stack';

const meta: Meta<typeof MusicPlayer> = {
  title: 'Molecules/MusicPlayer',
  component: MusicPlayer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          "MusicPlayer is a comprehensive audio player component that displays current track information, playback controls, progress bar, and volume control. It follows Spotify's design patterns.",
      },
    },
  },
  argTypes: {
    currentTrack: {
      control: 'object',
      description: 'Current track information',
    },
    isPlaying: {
      control: 'boolean',
      description: 'Whether the player is currently playing',
    },
    currentTime: {
      control: { type: 'range', min: 0, max: 300, step: 1 },
      description: 'Current playback time in seconds',
    },
    duration: {
      control: { type: 'range', min: 0, max: 300, step: 1 },
      description: 'Total track duration in seconds',
    },
    volume: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Volume level (0-100)',
    },
    onPlayPause: {
      action: 'play-pause',
      description: 'Callback when play/pause is clicked',
    },
    onNext: {
      action: 'next',
      description: 'Callback when next track is clicked',
    },
    onPrevious: {
      action: 'previous',
      description: 'Callback when previous track is clicked',
    },
    onSeek: {
      action: 'seek',
      description: 'Callback when seeking to a specific time',
    },
    onVolumeChange: {
      action: 'volume-change',
      description: 'Callback when volume is changed',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MusicPlayer>;

// Sample tracks for stories
const sampleTracks: Track[] = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    coverUrl:
      'https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36',
  },
  {
    title: 'Anti-Hero',
    artist: 'Taylor Swift',
    album: 'Midnights',
    coverUrl:
      'https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5',
  },
  {
    title: 'As It Was',
    artist: 'Harry Styles',
    album: "Harry's House",
    coverUrl:
      'https://i.scdn.co/image/ab67616d0000b273daaa68c8a5b6b0e8c9b91f7e',
  },
];

// Interactive story with full functionality
const InteractiveTemplate = (args: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(args.isPlaying || false);
  const [currentTime, setCurrentTime] = useState(args.currentTime || 0);
  const [volume, setVolume] = useState(args.volume || 100);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const currentTrack = args.currentTrack || sampleTracks[currentTrackIndex];

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <MusicPlayer
        {...args}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        currentTime={currentTime}
        volume={volume}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onNext={() => {
          setCurrentTrackIndex((prev) => (prev + 1) % sampleTracks.length);
          setCurrentTime(0);
          setIsPlaying(true);
        }}
        onPrevious={() => {
          setCurrentTrackIndex(
            (prev) => (prev - 1 + sampleTracks.length) % sampleTracks.length
          );
          setCurrentTime(0);
          setIsPlaying(true);
        }}
        onSeek={(time) => setCurrentTime(time)}
        onVolumeChange={(vol) => setVolume(vol)}
      />
    </div>
  );
};

// Default story
export const Default: Story = {
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[0],
    isPlaying: false,
    currentTime: 0,
    duration: 180,
    volume: 100,
  },
};

// Playing state
export const Playing: Story = {
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[0],
    isPlaying: true,
    currentTime: 45,
    duration: 180,
    volume: 80,
  },
};

// Paused state
export const Paused: Story = {
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[1],
    isPlaying: false,
    currentTime: 90,
    duration: 210,
    volume: 60,
  },
};

// Low volume
export const LowVolume: Story = {
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[2],
    isPlaying: true,
    currentTime: 30,
    duration: 165,
    volume: 15,
  },
};

// Muted
export const Muted: Story = {
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[0],
    isPlaying: true,
    currentTime: 120,
    duration: 180,
    volume: 0,
  },
};

// No track loaded
export const NoTrack: Story = {
  render: InteractiveTemplate,
  args: {
    currentTrack: undefined,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 100,
  },
};

// Sub-component stories
export const ComponentShowcase: Story = {
  render: () => (
    <div
      style={{
        padding: '2rem',
        backgroundColor: '#121212',
        minHeight: '100vh',
      }}
    >
      <Stack direction="column" spacing="lg" align="start">
        <div>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>
            Player Controls
          </h3>
          <PlayerControls
            isPlaying={true}
            onPlayPause={() => {}}
            onNext={() => {}}
            onPrevious={() => {}}
          />
        </div>

        <div>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Now Playing</h3>
          <NowPlaying {...sampleTracks[0]} />
        </div>

        <div>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Progress Bar</h3>
          <ProgressBar currentTime={75} duration={180} onSeek={() => {}} />
        </div>

        <div>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>
            Volume Control
          </h3>
          <VolumeControl volume={65} onVolumeChange={() => {}} />
        </div>
      </Stack>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual components that make up the MusicPlayer.',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[0],
    isPlaying: false,
    currentTime: 0,
    duration: 180,
    volume: 100,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test different MusicPlayer configurations.',
      },
    },
  },
};
