import React, { forwardRef } from 'react';
import { Stack } from '../../atoms/Layout/Stack';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { NowPlaying } from './NowPlaying';
import { MusicPlayerProps } from './MusicPlayer.types';
import { colors } from '../../../styles';

const noop = () => {};
const noopNumber = (_: number) => {};

export const MusicPlayer = forwardRef<HTMLDivElement, MusicPlayerProps>(
  (
    {
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
      className,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    return (
      <Stack
        ref={ref}
        direction="row"
        spacing="md"
        align="center"
        justify="space-between"
        padding="lg"
        backgroundColor={colors.primary.black}
        className={className}
        data-testid={testId}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          borderTop: `1px solid ${colors.grey.grey3}`,
          zIndex: 1000,
          width: '100%',
        }}
        {...props}
      >
        <NowPlaying
          title={currentTrack?.title}
          artist={currentTrack?.artist}
          coverUrl={currentTrack?.coverUrl}
        />

        <Stack
          direction="column"
          spacing="sm"
          align="center"
          style={{ flex: 1, maxWidth: 600 }}
        >
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
    );
  }
);

MusicPlayer.displayName = 'MusicPlayer';
