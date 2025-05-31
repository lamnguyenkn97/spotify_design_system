import React from 'react';
import { Stack } from '../../atoms/Layout/Stack';
import { Button } from '../../atoms/Button/Button';
import { ButtonSize, ButtonVariant } from '../../atoms/Button/Button/Button.types';
import { Icon } from '../../atoms/Icon/Icon';
import { faStepBackward, faStepForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

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
      />
      <Button
        onClick={onPlayPause}
        size={ButtonSize.Medium}
        variant={ButtonVariant.White}
        icon={<Icon icon={isPlaying ? faPause : faPlay} size="medium" />}
        text=""
      />
      <Button
        onClick={onNext}
        size={ButtonSize.Small}
        variant={ButtonVariant.Secondary}
        icon={<Icon icon={faStepForward} size="small" />}
        text=""
      />
    </Stack>
  );
}; 