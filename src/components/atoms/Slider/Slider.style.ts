import styled, { css, keyframes } from 'styled-components';
import { borderRadius, colors, spacing, fontSizes } from '../../../styles';
import {
  SliderSize,
  SliderVariant,
  SliderOrientation,
} from './Slider.types';

// Size tokens mapping
const sizeTokens = {
  xs: {
    trackHeight: '2px',
    thumbSize: '12px',
    fontSize: fontSizes.sm,
    markSize: '4px',
    containerSpacing: spacing.xs,
  },
  sm: {
    trackHeight: '4px',
    thumbSize: '16px',
    fontSize: fontSizes.sm,
    markSize: '6px',
    containerSpacing: spacing.sm,
  },
  md: {
    trackHeight: '6px',
    thumbSize: '20px',
    fontSize: fontSizes.md,
    markSize: '8px',
    containerSpacing: spacing.md,
  },
  lg: {
    trackHeight: '8px',
    thumbSize: '24px',
    fontSize: fontSizes.lg,
    markSize: '10px',
    containerSpacing: spacing.lg,
  },
  xl: {
    trackHeight: '10px',
    thumbSize: '28px',
    fontSize: fontSizes.xl,
    markSize: '12px',
    containerSpacing: spacing.xl,
  },
} as const;

// Variant color tokens
const variantTokens = {
  default: {
    track: colors.grey.grey4,
    activeTrack: colors.primary.white,
    thumb: colors.primary.white,
    thumbBorder: colors.grey.grey4,
    thumbHover: colors.grey.grey5,
    background: colors.grey.grey2,
  },
  primary: {
    track: colors.primary.brand,
    activeTrack: colors.primary.brand,
    thumb: colors.primary.white,
    thumbBorder: colors.primary.brand,
    thumbHover: colors.decorative.evergreen,
    background: colors.grey.grey2,
  },
  secondary: {
    track: colors.grey.grey4,
    activeTrack: colors.grey.grey5,
    thumb: colors.grey.grey5,
    thumbBorder: colors.grey.grey4,
    thumbHover: colors.primary.white,
    background: colors.grey.grey1,
  },
  success: {
    track: colors.decorative.evergreen,
    activeTrack: colors.decorative.evergreen,
    thumb: colors.primary.white,
    thumbBorder: colors.decorative.evergreen,
    thumbHover: '#0f7b3c', // Dark green
    background: colors.grey.grey2,
  },
  warning: {
    track: colors.decorative.mellowYellow,
    activeTrack: colors.decorative.mellowYellow,
    thumb: colors.primary.black,
    thumbBorder: colors.decorative.mellowYellow,
    thumbHover: '#d4ad00', // Warning dark
    background: colors.grey.grey2,
  },
  error: {
    track: colors.decorative.redRedWine,
    activeTrack: colors.decorative.redRedWine,
    thumb: colors.primary.white,
    thumbBorder: colors.decorative.redRedWine,
    thumbHover: '#8b1538', // Error dark
    background: colors.grey.grey2,
  },
  brand: {
    track: colors.primary.brand,
    activeTrack: colors.primary.brand,
    thumb: colors.primary.white,
    thumbBorder: colors.primary.brand,
    thumbHover: colors.decorative.evergreen,
    background: colors.grey.grey2,
  },
  gradient: {
    track: 'linear-gradient(90deg, #1db954, #1ed760)',
    activeTrack: 'linear-gradient(90deg, #1db954, #1ed760)',
    thumb: colors.primary.white,
    thumbBorder: colors.primary.brand,
    thumbHover: colors.decorative.evergreen,
    background: colors.grey.grey2,
  },
} as const;

// Slider configuration
const sliderConfig = {
  transition: 'all 0.2s ease-in-out',
  thumbScaleHover: '1.2',
  thumbScaleActive: '1.3',
  tooltipOffset: '8px',
  markOffset: '4px',
  labelSpacing: spacing.xs,
  borderWidth: '2px',
} as const;

// Default values
const sliderDefaults = {
  size: 'md' as SliderSize,
  variant: 'default' as SliderVariant,
  orientation: 'horizontal' as SliderOrientation,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  loading: false,
  showTooltip: false,
  showValue: false,
  showMarks: false,
  animate: true,
  required: false,
  valueLabelPosition: 'top' as const,
} as const;

// Animations
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Helper functions
const getSizeStyles = (size: SliderSize, orientation: SliderOrientation) => {
  const sizeConfig = sizeTokens[size];
  const thumbSize = parseInt(sizeConfig.thumbSize);
  const trackHeight = parseInt(sizeConfig.trackHeight);
  // Container should be at least as tall as the thumb for proper hit area
  const containerHeight = Math.max(thumbSize, trackHeight);
  
  if (orientation === 'vertical') {
    return css`
      width: ${containerHeight}px;
      height: 200px;
      
      input[type="range"] {
        width: 200px;
        height: ${containerHeight}px;
        transform: rotate(-90deg);
        transform-origin: center;
      }
    `;
  }
  
  return css`
    height: ${containerHeight}px;
    
    input[type="range"] {
      height: ${containerHeight}px;
    }
  `;
};

const getVariantStyles = (variant: SliderVariant, customTrackColor?: string, customThumbColor?: string, customBackgroundColor?: string) => {
  const variantConfig = variantTokens[variant];
  
  return css`
    /* Track background */
    &::after {
      background: ${customBackgroundColor || variantConfig.background};
    }
    
    /* Active track */
    &::before {
      background: ${customTrackColor || variantConfig.activeTrack};
    }
    
    /* Thumb styles */
    input[type="range"]::-webkit-slider-thumb {
      background: ${customThumbColor || variantConfig.thumb};
      border: ${sliderConfig.borderWidth} solid ${variantConfig.thumbBorder};
      
      &:hover {
        background: ${variantConfig.thumbHover};
        transform: scale(${sliderConfig.thumbScaleHover});
      }
      
      &:active {
        transform: scale(${sliderConfig.thumbScaleActive});
      }
    }
    
    input[type="range"]::-moz-range-thumb {
      background: ${customThumbColor || variantConfig.thumb};
      border: ${sliderConfig.borderWidth} solid ${variantConfig.thumbBorder};
      
      &:hover {
        background: ${variantConfig.thumbHover};
        transform: scale(${sliderConfig.thumbScaleHover});
      }
      
      &:active {
        transform: scale(${sliderConfig.thumbScaleActive});
      }
    }
  `;
};

export const SliderContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['orientation', 'length', 'disabled'].includes(prop),
})<{
  orientation: SliderOrientation;
  length?: string | number;
  disabled: boolean;
}>`
  display: flex;
  flex-direction: ${({ orientation }) => orientation === 'vertical' ? 'row' : 'column'};
  align-items: ${({ orientation }) => orientation === 'vertical' ? 'center' : 'stretch'};
  gap: ${sliderConfig.labelSpacing};
  width: ${({ orientation, length }) => {
    if (orientation === 'horizontal') {
      return typeof length === 'number' ? `${length}px` : length || '100%';
    }
    return 'auto';
  }};
  height: ${({ orientation, length }) => {
    if (orientation === 'vertical') {
      return typeof length === 'number' ? `${length}px` : length || '200px';
    }
    return 'auto';
  }};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
`;

export const SliderLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => !['size', 'required', 'error'].includes(prop),
})<{
  size: SliderSize;
  required?: boolean;
  error?: boolean;
}>`
  font-size: ${({ size }) => sizeTokens[size].fontSize}rem;
  font-weight: 600;
  color: ${({ error }) => error ? colors.decorative.redRedWine : colors.primary.white};
  
  ${({ required }) => required && css`
    &::after {
      content: ' *';
      color: ${colors.decorative.redRedWine};
    }
  `}
`;

export const SliderWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size', 'variant', 'orientation', 'loading', 'customTrackColor', 'customThumbColor', 'customBackgroundColor'].includes(prop),
})<{
  size: SliderSize;
  variant: SliderVariant;
  orientation: SliderOrientation;
  loading?: boolean;
  customTrackColor?: string;
  customThumbColor?: string;
  customBackgroundColor?: string;
}>`
  position: relative;
  width: 100%;
  border-radius: ${borderRadius.xl};
  display: flex;
  align-items: center;
  
  ${({ size, orientation }) => getSizeStyles(size, orientation)}
  ${({ variant, customTrackColor, customThumbColor, customBackgroundColor }) => 
    getVariantStyles(variant, customTrackColor, customThumbColor, customBackgroundColor)}
  
  ${({ loading }) => loading && css`
    animation: ${pulse} 1.5s infinite;
  `}
  
  /* Track background - centered in container */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: ${({ size }) => sizeTokens[size].trackHeight};
    transform: translateY(-50%);
    border-radius: inherit;
    z-index: 0;
  }
  
  /* Active track overlay - centered in container */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: ${({ size }) => sizeTokens[size].trackHeight};
    transform: translateY(-50%);
    border-radius: inherit;
    pointer-events: none;
    z-index: 1;
  }
`;

export const SliderInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !['size', 'animate'].includes(prop),
})<{
  size: SliderSize;
  animate: boolean;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  appearance: none;
  background: transparent;
  outline: none;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  
  /* WebKit Thumb */
  &::-webkit-slider-thumb {
    appearance: none;
    width: ${({ size }) => sizeTokens[size].thumbSize};
    height: ${({ size }) => sizeTokens[size].thumbSize};
    border-radius: 50%;
    cursor: grab;
    transition: ${({ animate }) => animate ? sliderConfig.transition : 'none'};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    /* Center the thumb by calculating offset from input height to track position */
    margin-top: ${({ size }) => {
      const thumbSize = parseInt(sizeTokens[size].thumbSize);
      const trackHeight = parseInt(sizeTokens[size].trackHeight);
      const containerHeight = Math.max(thumbSize, trackHeight);
      // Calculate where the track center is relative to input top
      const trackCenterFromTop = containerHeight / 2;
      // Calculate where thumb center should be relative to input top
      const thumbCenterFromTop = thumbSize / 2;
      // Offset needed to align thumb center with track center
      const offset = trackCenterFromTop - thumbCenterFromTop;
      return `${offset}px`;
    }};
    
    &:active {
      cursor: grabbing;
    }
  }
  
  /* Firefox Thumb */
  &::-moz-range-thumb {
    width: ${({ size }) => sizeTokens[size].thumbSize};
    height: ${({ size }) => sizeTokens[size].thumbSize};
    border-radius: 50%;
    cursor: grab;
    transition: ${({ animate }) => animate ? sliderConfig.transition : 'none'};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border: none;
    /* Firefox automatically centers, but ensure no extra margin */
    margin: 0;
    
    &:active {
      cursor: grabbing;
    }
  }
  
  /* WebKit Track */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${({ size }) => {
      const thumbSize = parseInt(sizeTokens[size].thumbSize);
      const trackHeight = parseInt(sizeTokens[size].trackHeight);
      return `${Math.max(thumbSize, trackHeight)}px`;
    }};
    background: transparent;
    border-radius: inherit;
    cursor: pointer;
  }
  
  /* Firefox Track */
  &::-moz-range-track {
    width: 100%;
    height: ${({ size }) => {
      const thumbSize = parseInt(sizeTokens[size].thumbSize);
      const trackHeight = parseInt(sizeTokens[size].trackHeight);
      return `${Math.max(thumbSize, trackHeight)}px`;
    }};
    background: transparent;
    border-radius: inherit;
    border: none;
    cursor: pointer;
  }
  
  /* Focus styles */
  &:focus-visible {
    outline: 2px solid ${colors.primary.brand};
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    
    &::-webkit-slider-thumb {
      cursor: not-allowed;
    }
    
    &::-moz-range-thumb {
      cursor: not-allowed;
    }
  }
`;

export const SliderMarks = styled.div.withConfig({
  shouldForwardProp: (prop) => !['orientation', 'size'].includes(prop),
})<{
  orientation: SliderOrientation;
  size: SliderSize;
}>`
  position: absolute;
  ${({ orientation }) => orientation === 'vertical' ? 'right' : 'bottom'}: -${sliderConfig.markOffset};
  ${({ orientation }) => orientation === 'vertical' ? 'height' : 'width'}: 100%;
  display: flex;
  ${({ orientation }) => orientation === 'vertical' ? 'flex-direction: column;' : ''}
  justify-content: space-between;
  align-items: ${({ orientation }) => orientation === 'vertical' ? 'flex-start' : 'center'};
`;

export const SliderMark = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size', 'active'].includes(prop),
})<{
  size: SliderSize;
  active?: boolean;
}>`
  width: ${({ size }) => sizeTokens[size].markSize};
  height: ${({ size }) => sizeTokens[size].markSize};
  border-radius: 50%;
  background: ${({ active }) => active ? colors.primary.brand : colors.grey.grey4};
  transition: ${sliderConfig.transition};
`;

export const SliderMarkLabel = styled.span.withConfig({
  shouldForwardProp: (prop) => !['size', 'orientation'].includes(prop),
})<{
  size: SliderSize;
  orientation: SliderOrientation;
}>`
  font-size: ${({ size }) => sizeTokens[size].fontSize}rem;
  color: ${colors.grey.grey4};
  margin-${({ orientation }) => orientation === 'vertical' ? 'left' : 'top'}: ${spacing.xs};
  white-space: nowrap;
`;

export const SliderTooltip = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size', 'visible'].includes(prop),
})<{
  size: SliderSize;
  visible: boolean;
}>`
  position: absolute;
  top: -${sliderConfig.tooltipOffset};
  transform: translateX(-50%) translateY(-100%);
  background: ${colors.primary.black};
  color: ${colors.primary.white};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${borderRadius.sm};
  font-size: ${({ size }) => sizeTokens[size].fontSize}rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: ${({ visible }) => visible ? 1 : 0};
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  transition: ${sliderConfig.transition};
  animation: ${({ visible }) => visible ? slideIn : 'none'} 0.2s ease-out;
  z-index: 10;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${colors.primary.black};
  }
`;

export const SliderValueLabel = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size', 'position'].includes(prop),
})<{
  size: SliderSize;
  position: 'top' | 'bottom' | 'left' | 'right';
}>`
  font-size: ${({ size }) => sizeTokens[size].fontSize}rem;
  color: ${colors.primary.white};
  font-weight: 600;
  text-align: center;
`;

export const SliderHelperText = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size', 'error'].includes(prop),
})<{
  size: SliderSize;
  error?: boolean;
}>`
  font-size: ${({ size }) => sizeTokens[size].fontSize}rem;
  color: ${({ error }) => error ? colors.decorative.redRedWine : colors.grey.grey4};
  margin-top: ${spacing.xs};
`;

// Export tokens and defaults for reuse
export { 
  sizeTokens, 
  variantTokens, 
  sliderConfig, 
  sliderDefaults,
  getSizeStyles,
  getVariantStyles,
};
