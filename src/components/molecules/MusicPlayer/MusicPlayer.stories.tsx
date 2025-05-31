import { Meta, StoryObj } from '@storybook/react';
import { MusicPlayer } from './MusicPlayer';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { NowPlaying } from './NowPlaying';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import React, { useState } from 'react';

const meta: Meta<typeof MusicPlayer> = {
  title: 'molecules/MusicPlayer',
  component: MusicPlayer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MusicPlayer>;

const sampleTrack = {
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  album: 'After Hours',
  coverUrl: 'https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36',
};

// Interactive story with state management
const InteractiveTemplate = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);

  return (
    <MusicPlayer
      currentTrack={sampleTrack}
      isPlaying={isPlaying}
      currentTime={currentTime}
      duration={180} // 3 minutes
      volume={volume}
      onPlayPause={() => setIsPlaying(!isPlaying)}
      onNext={() => {
        // Simulate next track
        setCurrentTime(0);
        setIsPlaying(true);
      }}
      onPrevious={() => {
        // Simulate previous track
        setCurrentTime(0);
        setIsPlaying(true);
      }}
      onSeek={(time) => setCurrentTime(time)}
      onVolumeChange={(vol) => setVolume(vol)}
    />
  );
};

export const Default: Story = {
  render: InteractiveTemplate,
};

// Subcomponent stories
export const PlayerControlsStory: StoryObj<typeof PlayerControls> = {
  render: () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
      <PlayerControls
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onNext={() => {}}
        onPrevious={() => {}}
      />
    );
  },
};

export const ProgressBarStory: StoryObj<typeof ProgressBar> = {
  render: () => {
    const [currentTime, setCurrentTime] = useState(0);
    return (
      <ProgressBar
        currentTime={currentTime}
        duration={180}
        onSeek={(time) => setCurrentTime(time)}
      />
    );
  },
};

export const VolumeControlStory: StoryObj<typeof VolumeControl> = {
  render: () => {
    const [volume, setVolume] = useState(100);
    return <VolumeControl volume={volume} onVolumeChange={setVolume} />;
  },
};

export const NowPlayingStory: StoryObj<typeof NowPlaying> = {
  render: () => <NowPlaying {...sampleTrack} />,
};

// Different states
export const Playing: Story = {
  args: {
    currentTrack: sampleTrack,
    isPlaying: true,
    currentTime: 45,
    duration: 180,
    volume: 80,
  },
};

export const Paused: Story = {
  args: {
    currentTrack: sampleTrack,
    isPlaying: false,
    currentTime: 90,
    duration: 180,
    volume: 50,
  },
};

export const Muted: Story = {
  args: {
    currentTrack: sampleTrack,
    isPlaying: true,
    currentTime: 120,
    duration: 180,
    volume: 0,
  },
};

export const NoTrack: Story = {
  args: {
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 100,
  },
};
