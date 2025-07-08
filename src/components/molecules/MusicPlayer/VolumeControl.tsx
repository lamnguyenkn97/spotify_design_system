import React, { useState, memo, useMemo, useCallback } from 'react';
import { Stack } from '../../atoms/Stack';
import { Button } from '../../atoms/Button/Button';
import { ButtonSize, ButtonVariant } from '../../atoms/Button/Button.types';
import { Icon } from '../../atoms/Icon/Icon';
import { Progress } from '../../atoms/Progress/Progress';
import { VolumeControlProps } from './MusicPlayer.types';
import { sizes, spacing } from '../../../styles';
import {
  faVolumeMute,
  faVolumeDown,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

// Volume control configuration using design tokens
const VOLUME_CONTROL_CONFIG = {
  minWidth: '180px',
  progressClickPadding: '4px 0',
  keyboardStepSize: 5,
} as const;

export const VolumeControl = memo<VolumeControlProps>(({
  volume,
  onVolumeChange,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(volume);

  // Memoized volume icon calculation
  const volumeIcon = useMemo(() => {
    if (isMuted || volume === 0) {
      return faVolumeMute;
    } else if (volume < 50) {
      return faVolumeDown;
    } else {
      return faVolumeUp;
    }
  }, [isMuted, volume]);

  // Memoized volume label calculation
  const volumeLabel = useMemo(() => {
    if (isMuted || volume === 0) {
      return 'Unmute';
    } else {
      return 'Mute';
    }
  }, [isMuted, volume]);

  // Memoized display volume (0 when muted, actual volume otherwise)
  const displayVolume = useMemo(() => {
    return isMuted ? 0 : volume;
  }, [isMuted, volume]);

  // Handle mute/unmute toggle
  const handleMuteToggle = useCallback(() => {
    if (isMuted) {
      onVolumeChange(previousVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      onVolumeChange(0);
      setIsMuted(true);
    }
  }, [isMuted, previousVolume, volume, onVolumeChange]);

  // Handle volume bar click for seeking
  const handleVolumeClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newVolume = Math.round(percentage * 100);
    const clampedVolume = Math.max(0, Math.min(100, newVolume));
    
    onVolumeChange(clampedVolume);
    if (isMuted && clampedVolume > 0) {
      setIsMuted(false);
    }
  }, [onVolumeChange, isMuted]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const newVolume = Math.max(0, volume - VOLUME_CONTROL_CONFIG.keyboardStepSize);
      onVolumeChange(newVolume);
      if (isMuted && newVolume > 0) {
        setIsMuted(false);
      }
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      const newVolume = Math.min(100, volume + VOLUME_CONTROL_CONFIG.keyboardStepSize);
      onVolumeChange(newVolume);
      if (isMuted && newVolume > 0) {
        setIsMuted(false);
      }
    }
  }, [volume, onVolumeChange, isMuted]);

  return (
    <Stack
      direction="row"
      spacing="sm"
      align="center"
      style={{ minWidth: VOLUME_CONTROL_CONFIG.minWidth }}
    >
      <Button
        onClick={handleMuteToggle}
        size={ButtonSize.Small}
        variant={ButtonVariant.Secondary}
        icon={<Icon icon={volumeIcon} size="sm" />}
        text=""
        aria-label={volumeLabel}
      />
      
      <div
        onClick={handleVolumeClick}
        style={{
          cursor: 'pointer',
          width: '100%',
          padding: VOLUME_CONTROL_CONFIG.progressClickPadding,
          flex: 1,
        }}
        role="slider"
        aria-label={`Volume: ${displayVolume}%`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={displayVolume}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <Progress
          value={displayVolume}
          size="sm"
          showValue={false}
          aria-hidden="true" // Progress component is for display only, slider handles accessibility
        />
      </div>
    </Stack>
  );
});

VolumeControl.displayName = 'VolumeControl';
