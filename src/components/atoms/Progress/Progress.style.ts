import styled, { css, keyframes } from 'styled-components';
import { ProgressVariant, ProgressSize, ProgressColor } from './Progress.types';
import { colors, borderRadius, sizes, spacing } from '../../../styles/tokens';
import { animations } from '../../../styles/tokens';

// ===== PROGRESS-SPECIFIC CONSTANTS =====
const PROGRESS_CONSTANTS = {
  // Indeterminate animation values
  indeterminate: {
    width: '30%', // Width of moving indicator
    duration: {
      linear: animations.duration.slower, // 750ms
      circular: animations.duration.slow, // 500ms
    },
    // Linear animation positions
    linear: {
      start: { left: '-35%', right: '100%' },
      middle: { left: '100%', right: '-90%' },
      end: { left: '100%', right: '-90%' },
    },
    // Animation timing keyframes
    keyframes: {
      start: '0%',
      middle: '60%',
      end: '100%',
    },
  },
  // Font weight for labels
  label: {
    fontWeight: 500,
  },
  // Positioning
  position: {
    full: '100%',
    zero: '0',
  },
} as const;

// ===== ANIMATIONS =====
const indeterminateLinearAnimation = keyframes`
  ${PROGRESS_CONSTANTS.indeterminate.keyframes.start} { 
    left: ${PROGRESS_CONSTANTS.indeterminate.linear.start.left}; 
    right: ${PROGRESS_CONSTANTS.indeterminate.linear.start.right}; 
  }
  ${PROGRESS_CONSTANTS.indeterminate.keyframes.middle} { 
    left: ${PROGRESS_CONSTANTS.indeterminate.linear.middle.left}; 
    right: ${PROGRESS_CONSTANTS.indeterminate.linear.middle.right}; 
  }
  ${PROGRESS_CONSTANTS.indeterminate.keyframes.end} { 
    left: ${PROGRESS_CONSTANTS.indeterminate.linear.end.left}; 
    right: ${PROGRESS_CONSTANTS.indeterminate.linear.end.right}; 
  }
`;

const indeterminateCircularAnimation = keyframes`
  ${PROGRESS_CONSTANTS.indeterminate.keyframes.start} { 
    transform: rotate(0deg); 
  }
  ${PROGRESS_CONSTANTS.indeterminate.keyframes.end} { 
    transform: rotate(360deg); 
  }
`;

// ===== COLOR STYLES =====
const getProgressColor = (color: ProgressColor) => {
  const colorMap = {
    primary: colors.primary.brand,
    success: colors.decorative.evergreen,
    warning: colors.decorative.mellowYellow,
    error: colors.decorative.redRedWine,
  };
  
  return css`
    --progress-color: ${colorMap[color]};
  `;
};

// ===== SIZE STYLES =====
const getLinearSize = (size: ProgressSize) => {
  const sizeMap = {
    sm: spacing.xs,
    md: spacing.sm,
    lg: spacing.md,
  };
  
  return css`
    height: ${sizeMap[size]};
  `;
};

const getCircularSize = (size: ProgressSize) => {
  const sizeMap = {
    sm: sizes.height.sm,
    md: sizes.height.xl,
    lg: sizes.height['2xl'],
  };
  
  return css`
    width: ${sizeMap[size]};
    height: ${sizeMap[size]};
  `;
};

// ===== VARIANT STYLES =====
const getLinearTrackStyles = (size: ProgressSize) => css`
  flex: 1;
  border-radius: ${borderRadius.sm};
  ${getLinearSize(size)}
`;

const getCircularTrackStyles = (size: ProgressSize) => css`
  border-radius: ${borderRadius.round};
  ${getCircularSize(size)}
`;

const getLinearFillStyles = (progress: number, indeterminate: boolean) => css`
  height: 100%;
  background-color: var(--progress-color);
  border-radius: inherit;
  transition: width 0.3s ease-in-out;
  width: ${indeterminate ? '30%' : `${progress}%`};
  
  ${indeterminate && css`
    position: absolute;
    animation: ${indeterminateLinearAnimation} 2s infinite linear;
  `}
`;

const getCircularFillStyles = () => css`
  position: absolute;
  inset: ${spacing.xs};
  border-radius: ${borderRadius.round};
  border: ${spacing.xs} solid var(--progress-color);
  border-right-color: transparent;
  animation: ${indeterminateCircularAnimation} 1s infinite linear;
`;

// ===== STYLED COMPONENTS =====
interface ProgressContainerProps {
  $variant: ProgressVariant;
  $size: ProgressSize;
}

export const ProgressContainer = styled.div<ProgressContainerProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  
  ${({ $variant }) => $variant === 'circular' && css`
    justify-content: center;
  `}
`;

interface ProgressTrackProps {
  $variant: ProgressVariant;
  $size: ProgressSize;
  $color: ProgressColor;
}

export const ProgressTrack = styled.div<ProgressTrackProps>`
  position: relative;
  background-color: ${colors.grey.grey2};
  overflow: hidden;
  
  ${({ $color }) => getProgressColor($color)}
  
  ${({ $variant, $size }) => 
    $variant === 'linear' 
      ? getLinearTrackStyles($size)
      : getCircularTrackStyles($size)
  }
`;

interface ProgressFillProps {
  $variant: ProgressVariant;
  $progress: number;
  $indeterminate: boolean;
}

export const ProgressFill = styled.div<ProgressFillProps>`
  ${({ $variant, $progress, $indeterminate }) =>
    $variant === 'linear'
      ? getLinearFillStyles($progress, $indeterminate)
      : getCircularFillStyles()
  }
`;

interface ProgressBufferProps {
  $buffer: number;
}

export const ProgressBuffer = styled.div<ProgressBufferProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $buffer }) => `${$buffer}%`};
  background-color: ${colors.grey.grey3};
  border-radius: inherit;
  transition: width 0.3s ease-in-out;
`;

export const ProgressLabel = styled.span`
  color: ${colors.primary.white};
  font-size: ${sizes.text.sm};
  font-weight: 500;
  min-width: ${sizes.height.xl};
  text-align: right;
  flex-shrink: 0;
`; 