import React, { useState } from 'react';
import { Stack } from '../../atoms/Layout/Stack';
import { Button } from '../../atoms/Button/Button';
import { ButtonSize, ButtonVariant } from '../../atoms/Button/Button/Button.types';
import { Icon } from '../../atoms/Icon/Icon';
import { Slider } from '../../atoms/Slider/Slider';
import { faVolumeMute, faVolumeDown, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  onVolumeChange,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(volume);

  const handleMuteToggle = () => {
    if (isMuted) {
      onVolumeChange(previousVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      onVolumeChange(0);
      setIsMuted(true);
    }
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return faVolumeMute;
    } else if (volume < 50) {
      return faVolumeDown;
    } else {
      return faVolumeUp;
    }
  };

  return (
    <Stack direction="row" spacing="sm" align="center" style={{ minWidth: 180 }}>
      <Button
        onClick={handleMuteToggle}
        size={ButtonSize.Small}
        variant={ButtonVariant.Secondary}
        icon={<Icon icon={getVolumeIcon()} size="small" />}
        text=""
      />
      <Slider
        value={isMuted ? 0 : volume}
        min={0}
        max={100}
        step={1}
        onChange={(value) => {
          onVolumeChange(value);
          if (isMuted && value > 0) {
            setIsMuted(false);
          }
        }}
      />
    </Stack>
  );
}; 