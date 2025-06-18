import styled, { css, keyframes } from 'styled-components';
import { colors, fontSizes, spacing, borderRadius } from '../../../styles';
import {
  PillSize,
  PillVariant,
  PillState,
  PillShape,
} from './Pill.types';

// Size tokens mapping
const sizeTokens = {
  xs: {
    padding: `${spacing.xs} ${spacing.sm}`,
    fontSize: fontSizes.sm,
    height: '1.5rem',
    iconSize: 'xs' as const,
    badgeSize: '12px',
  },
  sm: {
    padding: `${spacing.xs} ${spacing.md}`,
    fontSize: fontSizes.sm,
    height: '2rem',
    iconSize: 'xs' as const,
    badgeSize: '14px',
  },
  md: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: fontSizes.md,
    height: '2.5rem',
    iconSize: 'sm' as const,
    badgeSize: '16px',
  },
  lg: {
    padding: `${spacing.sm} ${spacing.lg}`,
    fontSize: fontSizes.lg,
    height: '3rem',
    iconSize: 'sm' as const,
    badgeSize: '18px',
  },
  xl: {
    padding: `${spacing.md} ${spacing.xl}`,
    fontSize: fontSizes.xl,
    height: '3.5rem',
    iconSize: 'lg' as const,
    badgeSize: '20px',
  },
} as const;

// Variant color tokens
const variantTokens = {
  default: {
    background: colors.grey.grey1,
    backgroundHover: colors.grey.grey2,
    backgroundActive: colors.grey.grey3,
    backgroundSelected: colors.primary.white,
    text: colors.primary.white,
    textSelected: colors.primary.black,
    border: 'transparent',
    borderHover: colors.grey.grey3,
  },
  primary: {
    background: colors.primary.brand,
    backgroundHover: colors.decorative.evergreen,
    backgroundActive: '#0f7b3c', // Dark green
    backgroundSelected: colors.primary.brand,
    text: colors.primary.white,
    textSelected: colors.primary.white,
    border: 'transparent',
    borderHover: 'transparent',
  },
  secondary: {
    background: colors.grey.grey2,
    backgroundHover: colors.grey.grey3,
    backgroundActive: colors.grey.grey4,
    backgroundSelected: colors.grey.grey4,
    text: colors.primary.white,
    textSelected: colors.primary.white,
    border: 'transparent',
    borderHover: 'transparent',
  },
  success: {
    background: colors.decorative.evergreen,
    backgroundHover: '#0f7b3c', // Dark green
    backgroundActive: '#0f7b3c', // Dark green
    backgroundSelected: colors.decorative.evergreen,
    text: colors.primary.white,
    textSelected: colors.primary.white,
    border: 'transparent',
    borderHover: 'transparent',
  },
  warning: {
    background: colors.decorative.mellowYellow,
    backgroundHover: '#d4ad00', // Warning dark
    backgroundActive: '#d4ad00', // Warning dark
    backgroundSelected: colors.decorative.mellowYellow,
    text: colors.primary.black,
    textSelected: colors.primary.black,
    border: 'transparent',
    borderHover: 'transparent',
  },
  error: {
    background: colors.decorative.redRedWine,
    backgroundHover: '#8b1538', // Error dark
    backgroundActive: '#8b1538', // Error dark
    backgroundSelected: colors.decorative.redRedWine,
    text: colors.primary.white,
    textSelected: colors.primary.white,
    border: 'transparent',
    borderHover: 'transparent',
  },
  brand: {
    background: colors.primary.brand,
    backgroundHover: colors.decorative.evergreen,
    backgroundActive: '#0f7b3c', // Dark green
    backgroundSelected: colors.primary.brand,
    text: colors.primary.white,
    textSelected: colors.primary.white,
    border: 'transparent',
    borderHover: 'transparent',
  },
  outline: {
    background: 'transparent',
    backgroundHover: colors.grey.grey1,
    backgroundActive: colors.grey.grey2,
    backgroundSelected: colors.primary.white,
    text: colors.primary.white,
    textSelected: colors.primary.black,
    border: colors.grey.grey4,
    borderHover: colors.primary.white,
  },
  ghost: {
    background: 'transparent',
    backgroundHover: colors.grey.grey0,
    backgroundActive: colors.grey.grey1,
    backgroundSelected: colors.grey.grey1,
    text: colors.primary.white,
    textSelected: colors.primary.white,
    border: 'transparent',
    borderHover: 'transparent',
  },
} as const;

// Shape tokens mapping
const shapeTokens = {
  rounded: borderRadius.md,
  pill: borderRadius.xl,
  square: borderRadius.xs,
} as const;

// Pill configuration
const pillConfig = {
  transition: 'all 0.2s ease-in-out',
  borderWidth: '1px',
  fontWeight: '600',
  iconSpacing: spacing.xs,
  badgeOffset: '2px',
  hoverOpacity: '0.9',
  activeScale: '0.98',
  loadingDuration: '1.5s',
} as const;

// Default values
const pillDefaults = {
  size: 'md' as PillSize,
  variant: 'default' as PillVariant,
  state: 'default' as PillState,
  shape: 'pill' as PillShape,
  selected: false,
  disabled: false,
  loading: false,
  dismissible: false,
  fullWidth: false,
  interactive: true,
  animate: false,
  animationDelay: 0,
  badgePosition: 'top-right' as const,
} as const;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

// Helper functions
const getSizeStyles = (size: PillSize) => {
  const sizeConfig = sizeTokens[size];
  return css`
    padding: ${sizeConfig.padding};
    font-size: ${sizeConfig.fontSize}rem;
    height: ${sizeConfig.height};
  `;
};

const getVariantStyles = (variant: PillVariant, selected: boolean, customColor?: string, customTextColor?: string) => {
  const variantConfig = variantTokens[variant];
  
  if (customColor) {
    return css`
      background-color: ${customColor};
      color: ${customTextColor || colors.primary.white};
      border-color: ${customColor};
    `;
  }
  
  return css`
    background-color: ${selected ? variantConfig.backgroundSelected : variantConfig.background};
    color: ${selected ? variantConfig.textSelected : variantConfig.text};
    border-color: ${variantConfig.border};
    
    &:hover:not(:disabled) {
      background-color: ${variantConfig.backgroundHover};
      border-color: ${variantConfig.borderHover};
      opacity: ${pillConfig.hoverOpacity};
    }
    
    &:active:not(:disabled) {
      background-color: ${variantConfig.backgroundActive};
      transform: scale(${pillConfig.activeScale});
    }
  `;
};

const getShapeStyles = (shape: PillShape) => css`
  border-radius: ${shapeTokens[shape]};
`;

const getStateStyles = (state: PillState, disabled: boolean, loading: boolean) => {
  if (disabled) {
    return css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `;
  }
  
  if (loading) {
    return css`
      cursor: wait;
      animation: ${pulse} ${pillConfig.loadingDuration} infinite;
    `;
  }
  
  if (state === 'pressed') {
    return css`
      transform: scale(${pillConfig.activeScale});
    `;
  }
  
  return '';
};

const getAnimationStyles = (animate: boolean, animationDelay: number) => {
  if (!animate) return '';
  
  return css`
    animation: ${fadeIn} 0.3s ease-out ${animationDelay}ms both;
  `;
};

export const PillContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['fullWidth', 'animate', 'animationDelay'].includes(prop),
})<{
  fullWidth: boolean;
  animate: boolean;
  animationDelay: number;
}>`
  position: relative;
  display: ${({ fullWidth }) => fullWidth ? 'block' : 'inline-block'};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  ${({ animate, animationDelay }) => getAnimationStyles(animate, animationDelay)}
`;

export const StyledPill = styled.button.withConfig({
  shouldForwardProp: (prop) => 
    ![
      'size',
      'variant', 
      'pillState',
      'shape',
      'selected',
      'fullWidth',
      'interactive',
      'customColor',
      'customTextColor',
      'loading',
    ].includes(prop),
})<{
  size: PillSize;
  variant: PillVariant;
  pillState: PillState;
  shape: PillShape;
  selected: boolean;
  fullWidth: boolean;
  interactive: boolean;
  customColor?: string;
  customTextColor?: string;
  loading?: boolean;
}>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${pillConfig.iconSpacing};
  border: ${pillConfig.borderWidth} solid;
  font-weight: ${pillConfig.fontWeight};
  text-align: center;
  white-space: nowrap;
  user-select: none;
  transition: ${pillConfig.transition};
  cursor: ${({ interactive }) => interactive ? 'pointer' : 'default'};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  text-decoration: none;
  outline: none;
  
  /* Size styles */
  ${({ size }) => getSizeStyles(size)}
  
  /* Variant styles */
  ${({ variant, selected, customColor, customTextColor }) => 
    getVariantStyles(variant, selected, customColor, customTextColor)}
  
  /* Shape styles */
  ${({ shape }) => getShapeStyles(shape)}
  
  /* State styles */
  ${({ pillState, disabled, loading }) => getStateStyles(pillState, disabled || false, loading || false)}
  
  /* Focus styles */
  &:focus-visible {
    outline: 2px solid ${colors.primary.brand};
    outline-offset: 2px;
  }
  
  /* Ensure proper content alignment */
  & > * {
    flex-shrink: 0;
  }
`;

export const IconWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => !['position', 'size'].includes(prop),
})<{
  position: 'left' | 'right';
  size: PillSize;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['position', 'size'].includes(prop),
})<{
  position: 'top-right' | 'top-left' | 'inline';
  size: PillSize;
}>`
  ${({ position }) => {
    if (position === 'inline') {
      return css`
        display: inline-flex;
        margin-left: ${spacing.xs};
      `;
    }
    
    return css`
      position: absolute;
      ${position.includes('top') ? 'top' : 'bottom'}: -${pillConfig.badgeOffset};
      ${position.includes('right') ? 'right' : 'left'}: -${pillConfig.badgeOffset};
      z-index: 1;
    `;
  }}
`;

export const Badge = styled.span.withConfig({
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{
  size: PillSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ size }) => sizeTokens[size].badgeSize};
  height: ${({ size }) => sizeTokens[size].badgeSize};
  padding: 0 ${spacing.xs};
  background-color: ${colors.decorative.redRedWine};
  color: ${colors.primary.white};
  border-radius: ${borderRadius.xl};
  font-size: ${fontSizes.sm}rem;
  font-weight: 600;
  line-height: 1;
`;

export const DismissButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  margin-left: ${spacing.xs};
  opacity: 0.7;
  transition: ${pillConfig.transition};

  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
    opacity: 1;
  }
`;

export const LoadingSpinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

// Export tokens and defaults for reuse
export { 
  sizeTokens, 
  variantTokens, 
  shapeTokens, 
  pillConfig, 
  pillDefaults,
  getSizeStyles,
  getVariantStyles,
  getShapeStyles,
};
