import React from 'react';
import { Stack } from '../../atoms/Layout/Stack';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { NowPlaying } from './NowPlaying';
import { PlayerWrapper } from './MusicPlayer.style';

export interface MusicPlayerProps {
  currentTrack?: {
    title: string;
    artist: string;
    album: string;
    coverUrl: string;
  };
  isPlaying?: boolean;
  currentTime?: number;
  duration?: number;
  volume?: number;
  onPlayPause?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onSeek?: (time: number) => void;
  onVolumeChange?: (volume: number) => void;
}

const noop = () => {};
const noopNumber = (_: number) => {};

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentTrack,
  isPlaying = false,
  currentTime = 0,
  duration = 0,
  volume = 100,
  onPlayPause = noop,
  onNext = noop,
  onPrevious = noop,
  onSeek = noopNumber,
  onVolumeChange = noopNumber,
}) => {
  return (
    <PlayerWrapper>
      <Stack direction="row" spacing="md" align="center" justify="space-between" style={{ width: '100%' }}>
        <NowPlaying
          title={currentTrack?.title}
          artist={currentTrack?.artist}
          coverUrl={currentTrack?.coverUrl}
        />
        <Stack direction="column" spacing="sm" align="center" style={{ flex: 1, maxWidth: 600 }}>
          <PlayerControls
            isPlaying={isPlaying}
            onPlayPause={onPlayPause}
            onNext={onNext}
            onPrevious={onPrevious}
          />
          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            onSeek={onSeek}
          />
        </Stack>
        <VolumeControl volume={volume} onVolumeChange={onVolumeChange} />
      </Stack>
    </PlayerWrapper>
  );
}; 