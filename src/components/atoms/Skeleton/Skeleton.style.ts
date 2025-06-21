import styled, { css } from 'styled-components';
import { SkeletonVariant, SkeletonAnimation } from './Skeleton.types';
import { colors, borderRadius, sizes } from '../../../styles/tokens';
import { animations, keyframes } from '../../../styles/tokens';

// ===== SKELETON-SPECIFIC CONSTANTS =====
const SKELETON_CONSTANTS = {
  // Default dimensions
  defaults: {
    width: {
      text: '100%',
      other: sizes.height.xl, // 40px for non-text variants
    },
    height: {
      text: '1.2em', // Relative to font size
      other: sizes.height.xl, // 40px for non-text variants
    },
  },
  // Positioning values
  position: {
    full: '100%',
    zero: '0',
  },
} as const;

// ===== ANIMATION STYLES =====
const getAnimationStyles = (animation: SkeletonAnimation) => {
  const animationMap = {
    pulse: css`
      animation: ${keyframes.skeletonPulse} ${animations.skeleton.pulse.duration} ${animations.skeleton.pulse.easing} ${animations.skeleton.pulse.iteration};
    `,
    wave: css`
      position: relative;
      overflow: hidden;
      
      &::after {
        content: '';
        position: absolute;
        top: ${SKELETON_CONSTANTS.position.zero};
        right: ${SKELETON_CONSTANTS.position.zero};
        bottom: ${SKELETON_CONSTANTS.position.zero};
        left: ${SKELETON_CONSTANTS.position.zero};
        transform: ${animations.skeleton.wave.transform.start};
        background: linear-gradient(
          90deg,
          transparent,
          ${colors.grey.grey3},
          transparent
        );
        animation: ${keyframes.skeletonWave} ${animations.skeleton.wave.duration} ${animations.skeleton.wave.easing} ${animations.skeleton.wave.iteration};
      }
    `,
    none: css``,
  };
  
  return animationMap[animation];
};

// ===== VARIANT STYLES =====
const getVariantStyles = (variant: SkeletonVariant) => {
  const variantMap = {
    text: css`
      border-radius: ${borderRadius.xs};
    `,
    rectangular: css`
      border-radius: ${SKELETON_CONSTANTS.position.zero};
    `,
    rounded: css`
      border-radius: ${borderRadius.sm};
    `,
    circular: css`
      border-radius: ${borderRadius.round};
    `,
  };
  
  return variantMap[variant];
};

// ===== SIZE CALCULATION HELPERS =====
interface SkeletonProps {
  $variant: SkeletonVariant;
  $animation: SkeletonAnimation;
  $width?: string | number;
  $height?: string | number;
}

const getWidth = ({ $width, $variant }: SkeletonProps): string => {
  if ($width) {
    return typeof $width === 'number' ? `${$width}px` : $width;
  }
  return $variant === 'text' 
    ? SKELETON_CONSTANTS.defaults.width.text 
    : SKELETON_CONSTANTS.defaults.width.other;
};

const getHeight = ({ $height, $variant }: SkeletonProps): string => {
  if ($height) {
    return typeof $height === 'number' ? `${$height}px` : $height;
  }
  return $variant === 'text' 
    ? SKELETON_CONSTANTS.defaults.height.text 
    : SKELETON_CONSTANTS.defaults.height.other;
};

const getCircularDimensions = ({ $width, $height }: SkeletonProps) => {
  // For circular, use width if provided, otherwise height, otherwise default
  const dimension = $width || $height || SKELETON_CONSTANTS.defaults.width.other;
  const dimensionValue = typeof dimension === 'number' ? `${dimension}px` : dimension;
  
  return css`
    width: ${dimensionValue};
    height: ${dimensionValue};
  `;
};

// ===== STYLED COMPONENT =====
export const SkeletonElement = styled.div<SkeletonProps>`
  background-color: ${colors.grey.grey2};
  display: inline-block;
  
  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $animation }) => getAnimationStyles($animation)}
  
  ${(props) => props.$variant !== 'circular' && css`
    width: ${getWidth(props)};
    height: ${getHeight(props)};
  `}
  
  ${(props) => props.$variant === 'circular' && getCircularDimensions(props)}
`; 