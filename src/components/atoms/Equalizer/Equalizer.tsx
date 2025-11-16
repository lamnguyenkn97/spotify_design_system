import React from 'react';
import { EqualizerContainer, EqualizerBar } from './Equalizer.style';
import { EqualizerProps } from './Equalizer.types';
import { colors, animations } from '../../../styles/tokens';

/**
 * Equalizer - An animated audio visualization component
 * 
 * Displays animated vertical bars that indicate audio playback is active.
 * Commonly used in music players to show that a track is currently playing.
 * 
 * @example
 * ```tsx
 * <Equalizer isPlaying={isPlaying} />
 * ```
 */
export const Equalizer: React.FC<EqualizerProps> = ({
  isPlaying = false,
  color = colors.primary.brand,
  size = 'md',
  className,
  style,
  'aria-label': ariaLabel = isPlaying ? 'Audio playing' : 'Audio paused',
}) => {
  // Three bars with different animation delays for wave effect
  // Delays are calculated from base delay (0s) with step increments
  const baseDelay = parseFloat(animations.equalizer.delay.base.replace('s', '')) || 0;
  const stepDelay = parseFloat(animations.equalizer.delay.step.replace('ms', '')) / 1000 || 0.2;
  
  const bars = [
    { delay: baseDelay },
    { delay: baseDelay + stepDelay },
    { delay: baseDelay + stepDelay * 2 },
  ];

  return (
    <EqualizerContainer
      $size={size}
      $isPlaying={isPlaying}
      className={className}
      style={style}
      role="img"
      aria-label={ariaLabel}
    >
      {bars.map((bar, index) => (
        <EqualizerBar
          key={index}
          $size={size}
          $color={color}
          $isPlaying={isPlaying}
          $delay={bar.delay}
        />
      ))}
    </EqualizerContainer>
  );
};

Equalizer.displayName = 'Equalizer';

