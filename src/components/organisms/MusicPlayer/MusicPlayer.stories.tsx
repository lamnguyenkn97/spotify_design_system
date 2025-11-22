import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MusicPlayer } from './MusicPlayer';
import { MusicPlayerProps, Track } from './MusicPlayer.types';

const meta: Meta<typeof MusicPlayer> = {
  title: 'Organisms/MusicPlayer',
  component: MusicPlayer,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
          padding: '20px',
          position: 'relative',
          backgroundColor: '#121212', // Spotify dark background
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '1200px', 
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Story />
        </div>
      </div>
    ),
  ],
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

// Interactive story with centered layout
const InteractiveTemplate = (args: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(args.isPlaying || false);
  const [currentTime, setCurrentTime] = useState(args.currentTime || 0);
  const [volume, setVolume] = useState(args.volume || 100);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(args.isShuffled || false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'one' | 'all'>(args.repeatMode || 'off');

  const currentTrack = args.currentTrack || sampleTracks[currentTrackIndex];

  const handleShuffle = () => {
    const newShuffleState = !isShuffled;
    setIsShuffled(newShuffleState);
    // If shuffle is being enabled, turn off repeat
    if (newShuffleState && repeatMode !== 'off') {
      setRepeatMode('off');
    }
  };

  const handleRepeat = () => {
    // Toggle between 'off' and 'one' (repeat current track only)
    if (repeatMode === 'off') {
      // If repeat is being enabled, turn off shuffle
      if (isShuffled) {
        setIsShuffled(false);
      }
      setRepeatMode('one');
    } else {
      // If repeat is active, turn it off
      setRepeatMode('off');
    }
  };

  return (
    <div 
      style={{ 
        position: 'relative',
        width: '100%',
        maxWidth: '1000px', // Limit maximum width for better proportions
        minWidth: '600px', // Reduced minimum width for better responsiveness
      }}
    >
      <MusicPlayer
        {...args}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        currentTime={currentTime}
        volume={volume}
        isShuffled={isShuffled}
        repeatMode={repeatMode}
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
        onShuffle={handleShuffle}
        onRepeat={handleRepeat}
        onLyrics={() => {}}
        onQueue={() => {}}
        onCast={() => {}}
        onFullscreen={() => {}}
        style={{
          position: 'relative',
          bottom: 'auto',
          left: 'auto',
          right: 'auto',
          width: '100%',
          borderRadius: '8px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
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
    volume: 50,
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
