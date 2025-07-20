import React, { memo } from 'react';
import { Stack } from '../../atoms/Stack';
import { Button } from '../../atoms/Button/Button';
import { ButtonSize, ButtonVariant } from '../../atoms/Button/Button.types';
import { Icon } from '../../atoms/Icon/Icon';
import { PlayerControlsProps } from './MusicPlayer.types';
import {
  faStepBackward,
  faStepForward,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

export const PlayerControls = memo<PlayerControlsProps>(({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
}) => {
  return (
    <Stack 
      direction="row" 
      spacing="md" 
      align="center"
      style={{
        minHeight: 0,
        maxHeight: '100%',
        flexShrink: 0,
      }}
    >
      <Button
        onClick={onPrevious}
        size={ButtonSize.Small}
        variant={ButtonVariant.Secondary}
        icon={<Icon icon={faStepBackward} size="sm" />}
        text=""
        aria-label="Previous track"
      />
      <Button
        onClick={onPlayPause}
        size={ButtonSize.Medium}
        variant={ButtonVariant.Circular}
        circular={true}
        icon={<Icon icon={isPlaying ? faPause : faPlay} size="md" />}
        text=""
        aria-label={isPlaying ? 'Pause' : 'Play'}
      />
      <Button
        onClick={onNext}
        size={ButtonSize.Small}
        variant={ButtonVariant.Secondary}
        icon={<Icon icon={faStepForward} size="sm" />}
        text=""
        aria-label="Next track"
      />
    </Stack>
  );
});

PlayerControls.displayName = 'PlayerControls';
