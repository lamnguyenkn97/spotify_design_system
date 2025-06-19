import styled, { css } from 'styled-components';
import { colors, spacing, opacity, animations, borderRadius } from '../../../styles';
import { IconSize, IconColor } from './Icon.types';

// Simplified size tokens - only 3 sizes that Spotify actually uses
const sizeTokens = {
  sm: spacing.md,   // 16px
  md: spacing.lg,   // 20px  
  lg: spacing.xl,   // 24px
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
  clickable: false,
  disabled: false,
};

const getColorValue = (color: IconColor): string => {
  return colorTokens[color as keyof typeof colorTokens] || color;
};

const getSizeValue = (size: IconSize): string => {
  return sizeTokens[size] || sizeTokens.md;
};

const getInteractiveStyles = (clickable: boolean, disabled: boolean) => {
  if (disabled) {
    return css`
      opacity: ${opacity.disabled};
      cursor: not-allowed;
      pointer-events: none;
    `;
  }

  if (clickable) {
    return css`
      cursor: pointer;
      transition:
        color ${animations.duration.fast} ${animations.easing.easeInOut},
        transform ${animations.duration.fast} ${animations.easing.easeInOut};

      &:hover {
        color: ${colors.primary.brand};
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
    !['size', 'color', 'clickable', 'disabled'].includes(prop),
})<{
  size: IconSize;
  color: IconColor;
  clickable: boolean;
  disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;

  /* Size styles */
  width: ${({ size }) => getSizeValue(size)};
  height: ${({ size }) => getSizeValue(size)};
  font-size: ${({ size }) => getSizeValue(size)};

  /* Color styles */
  color: ${({ color }) => getColorValue(color)};

  /* Interactive styles */
  ${({ clickable, disabled }) => getInteractiveStyles(clickable, disabled)};

  /* FontAwesome icon styling - 1em scales with container's font-size */
  svg {
    width: 1em;   /* Scales with the icon container's font-size (design token) */
    height: 1em;  /* Scales with the icon container's font-size (design token) */
  }
`;

// Export simplified tokens and defaults
export { iconDefaults, sizeTokens, colorTokens };
