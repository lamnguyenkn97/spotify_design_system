import styled, { keyframes, css } from 'styled-components';
import { colors, sizes, animations, borderRadius, spacing } from '../../../styles/tokens';

// Animation for equalizer bars - each bar moves independently
const barAnimation = keyframes`
  0%, 100% {
    transform: scaleY(${animations.equalizer.scale.min});
  }
  50% {
    transform: scaleY(${animations.equalizer.scale.max});
  }
`;

// Size configurations using design tokens
const sizeConfig = {
  sm: {
    width: sizes.equalizer.container.sm,
    height: sizes.equalizer.container.sm,
    barWidth: sizes.equalizer.bar.sm,
    gap: sizes.equalizer.gap.sm,
  },
  md: {
    width: sizes.equalizer.container.md,
    height: sizes.equalizer.container.md,
    barWidth: sizes.equalizer.bar.md,
    gap: sizes.equalizer.gap.md,
  },
  lg: {
    width: sizes.equalizer.container.lg,
    height: sizes.equalizer.container.lg,
    barWidth: sizes.equalizer.bar.lg,
    gap: sizes.equalizer.gap.lg,
  },
};

interface EqualizerContainerProps {
  $size: 'sm' | 'md' | 'lg';
  $isPlaying: boolean;
}

export const EqualizerContainer = styled.div<EqualizerContainerProps>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${({ $size }) => sizeConfig[$size].gap};
  width: ${({ $size }) => sizeConfig[$size].width};
  height: ${({ $size }) => sizeConfig[$size].height};
  position: relative;
`;

interface EqualizerBarProps {
  $size: 'sm' | 'md' | 'lg';
  $color: string;
  $isPlaying: boolean;
  $delay: number; // Animation delay in seconds
}

export const EqualizerBar = styled.div<EqualizerBarProps>`
  width: ${({ $size }) => sizeConfig[$size].barWidth};
  height: 100%;
  background-color: ${({ $color }) => $color};
  border-radius: ${borderRadius.xs};
  transform-origin: bottom;
  transform: scaleY(${animations.equalizer.scale.min});
  
  ${({ $isPlaying, $delay }) =>
    $isPlaying &&
    css`
      animation: ${barAnimation} ${animations.equalizer.duration} ${animations.equalizer.easing} ${animations.equalizer.iteration};
      animation-delay: ${$delay}s;
    `}
  
  transition: transform ${animations.equalizer.transition} ${animations.easing.easeInOut};
`;

