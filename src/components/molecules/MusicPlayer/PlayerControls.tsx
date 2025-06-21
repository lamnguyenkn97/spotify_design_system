import React from 'react';
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

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
}) => {
  return (
    <Stack direction="row" spacing="md" align="center">
      <Button
        onClick={onPrevious}
        size={ButtonSize.Small}
        variant={ButtonVariant.Secondary}
        icon={<Icon icon={faStepBackward} size="small" />}
        text=""
        aria-label="Previous track"
      />
      <Button
        onClick={onPlayPause}
        size={ButtonSize.Medium}
        variant={ButtonVariant.White}
        icon={<Icon icon={isPlaying ? faPause : faPlay} size="medium" />}
        text=""
        aria-label={isPlaying ? 'Pause' : 'Play'}
      />
      <Button
        onClick={onNext}
        size={ButtonSize.Small}
        variant={ButtonVariant.Secondary}
        icon={<Icon icon={faStepForward} size="small" />}
        text=""
        aria-label="Next track"
      />
    </Stack>
  );
};
