import React, { memo, useMemo, useCallback } from 'react';
import { Stack } from '../../atoms/Stack';
import { Progress } from '../../atoms/Progress/Progress';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { ProgressBarProps } from './MusicPlayer.types';
import { sizes } from '../../../styles';

export const ProgressBar = memo<ProgressBarProps>(({
  currentTime,
  duration,
  onSeek,
}) => {
  // Format time display (memoized for performance)
  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  // Calculate progress percentage (memoized)
  const progressPercentage = useMemo(() => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  }, [currentTime, duration]);

  // Memoized time displays
  const currentTimeDisplay = useMemo(() => formatTime(currentTime), [currentTime, formatTime]);
  const durationDisplay = useMemo(() => formatTime(duration), [duration, formatTime]);

  // Handle progress bar click for seeking
  const handleProgressClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    onSeek(Math.max(0, Math.min(duration, newTime)));
  }, [duration, onSeek]);

  return (
    <Stack
      direction="column"
      spacing="sm"
      style={{ 
        width: '100%', 
        maxWidth: sizes.maxWidth.modal, // 600px - consistent with parent constraint
      }}
    >
      <div
        onClick={handleProgressClick}
        style={{
          cursor: 'pointer',
          width: '100%',
          padding: '4px 0', // Increase click area for better UX
        }}
        role="slider"
        aria-label={`Seek to position: ${currentTimeDisplay} of ${durationDisplay}`}
        aria-valuemin={0}
        aria-valuemax={duration}
        aria-valuenow={currentTime}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            onSeek(Math.max(0, currentTime - 5));
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            onSeek(Math.min(duration, currentTime + 5));
          }
        }}
      >
                 <Progress
           value={progressPercentage}
           size="sm"
           showValue={false}
           aria-hidden="true" // Progress component is for display only, slider handles accessibility
         />
      </div>
      
      <Stack direction="row" justify="space-between" style={{ width: '100%' }}>
        <Typography variant="caption" color="secondary">
          {currentTimeDisplay}
        </Typography>
        <Typography variant="caption" color="secondary">
          {durationDisplay}
        </Typography>
      </Stack>
    </Stack>
  );
});

ProgressBar.displayName = 'ProgressBar';
