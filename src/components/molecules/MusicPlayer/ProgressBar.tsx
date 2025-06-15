import React from 'react';
import { Stack } from '../../atoms/Layout/Stack';
import { Slider } from '../../atoms/Slider/Slider';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { ProgressBarProps } from './MusicPlayer.types';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onSeek,
}) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Stack direction="column" spacing="xs" style={{ width: '100%', maxWidth: 500 }}>
      <Slider
        value={currentTime}
        min={0}
        max={duration}
        step={1}
        onChange={onSeek}
        aria-label={`Seek to position: ${formatTime(currentTime)} of ${formatTime(duration)}`}
      />
      <Stack direction="row" justify="space-between" style={{ width: '100%' }}>
        <Typography variant="caption" color="secondary">
          {formatTime(currentTime)}
        </Typography>
        <Typography variant="caption" color="secondary">
          {formatTime(duration)}
        </Typography>
      </Stack>
    </Stack>
  );
}; 