import styled, { css } from 'styled-components';
import {
  colors,
  spacing,
  opacity,
  animations,
  borderRadius,
} from '../../../styles';
import { IconSize, IconColor } from './Icon.types';

// Simplified size tokens - only 3 sizes that Spotify actually uses
const sizeTokens = {
  sm: spacing.md, // 16px
  md: spacing.lg, // 20px
  lg: spacing.xl, // 24px
} as const;

// Simplified color tokens - only what Spotify actually uses
const colorTokens = {
  primary: colors.primary.white,
  muted: colors.grey.grey3,
  brand: colors.primary.brand,
  inherit: 'currentColor',
} as const;

// Simplified defaults for Spotify
const iconDefaults = {
  size: 'md' as IconSize,
  color: 'inherit' as IconColor,
  backgroundColor: 'transparent',
  circular: false,
  clickable: false,
  disabled: false,
};

const getColorValue = (color: IconColor): string => {
  return colorTokens[color as keyof typeof colorTokens] || color;
};

const getSizeValue = (size: IconSize): string => {
  return sizeTokens[size] || sizeTokens.md;
};

const getInteractiveStyles = (clickable: boolean, disabled: boolean, backgroundColor: string) => {
  if (disabled) {
    return css`
      opacity: ${opacity.disabled};
      cursor: not-allowed;
      pointer-events: none;
    `;
  }

  if (clickable) {
    // If icon has a background, use scale and brightness effects instead of color change
    const hasBackground = backgroundColor && backgroundColor !== 'transparent';
    
    return css`
      cursor: pointer;
      transition:
        color ${animations.duration.fast} ${animations.easing.easeInOut},
        transform ${animations.duration.fast} ${animations.easing.easeInOut},
        filter ${animations.duration.fast} ${animations.easing.easeInOut};

      &:hover {
        ${hasBackground ? css`
          transform: scale(${animations.scale.small});
          filter: brightness(${animations.brightness.small});
        ` : css`
          color: ${colors.primary.brand};
        `}
      }

      &:active {
        transform: scale(${animations.scale.pressed});
      }

      &:focus-visible {
        outline: ${spacing.xs} solid ${colors.primary.brand};
        outline-offset: ${spacing.xs};
        border-radius: ${borderRadius.xs};
      }
    `;
  }

  return css``;
};

export const StyledIcon = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'size',
      'color',
      'backgroundColor',
      'circular',
      'clickable',
      'disabled',
    ].includes(prop),
})<{
  size: IconSize;
  color: IconColor;
  backgroundColor: string;
  circular: boolean;
  clickable: boolean;
  disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 0; /* Prevent line-height from affecting centering */
  box-sizing: border-box; /* Include padding in width/height calculation */

  /* Size styles */
  /* For circular icons with background, ensure equal width and height */
  width: ${({ size, backgroundColor, circular }) => {
    const baseSize = getSizeValue(size);
    // For circular backgrounds, container should be perfectly square
    if (circular && backgroundColor && backgroundColor !== 'transparent') {
      return `calc(${baseSize} * 3)`; // base + padding-left + padding-right
    }
    return baseSize;
  }};
  height: ${({ size, backgroundColor, circular }) => {
    const baseSize = getSizeValue(size);
    // For circular backgrounds, container should be perfectly square
    if (circular && backgroundColor && backgroundColor !== 'transparent') {
      return `calc(${baseSize} * 3)`; // base + padding-top + padding-bottom
    }
    return baseSize;
  }};
  font-size: ${({ size }) => getSizeValue(size)};
  padding: ${({ size, backgroundColor }) => {
    // If background color is set, add padding to create space around the icon
    return backgroundColor && backgroundColor !== 'transparent' ? getSizeValue(size) : '0';
  }};

  /* Color styles */
  color: ${({ color }) => getColorValue(color)};

  /* Background styles */
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ circular }) => (circular ? '50%' : '0')};

  /* Interactive styles */
  ${({ clickable, disabled, backgroundColor }) => getInteractiveStyles(clickable, disabled, backgroundColor)};

  /* FontAwesome icon styling - 1em scales with container's font-size */
  svg {
    display: block; /* Prevents inline spacing issues */
    width: 1em; /* Scales with the icon container's font-size (design token) */
    height: 1em; /* Scales with the icon container's font-size (design token) */
    flex-shrink: 0; /* Prevents icon from shrinking */
    margin: 0; /* Ensure no default margins */
    padding: 0; /* Ensure no default padding */
  }
`;

// Export simplified tokens and defaults
export { iconDefaults, sizeTokens, colorTokens };
