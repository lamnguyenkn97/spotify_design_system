import styled, { css } from 'styled-components';
import { fontSizes, spacing, colors, borderRadius } from '../../../styles';
import { IconSize, IconColor, IconVariant } from './Icon.types';

// Icon size tokens mapping
const sizeTokens = {
  xs: {
    dimension: spacing.sm,
    fontSize: fontSizes.sm,
    padding: spacing.sm,
  },
  small: {
    dimension: spacing.md,
    fontSize: fontSizes.md,
    padding: spacing.md,
  },
  medium: {
    dimension: spacing.lg,
    fontSize: fontSizes.lg,
    padding: spacing.md,
  },
  large: {
    dimension: spacing.xl,
    fontSize: fontSizes.xl,
    padding: spacing.lg,
  },
  xl: {
    dimension: '2rem', // spacing.xxl if available
    fontSize: fontSizes.xl,
    padding: spacing.lg,
  },
} as const;

// Color tokens mapping that can be easily extended
const colorTokens = {
  primary: colors.primary.white,
  secondary: colors.grey.grey6,
  muted: colors.grey.grey3,
  brand: colors.primary.brand,
  error: colors.decorative.redRedWine,
  warning: colors.decorative.mellowYellow,
  success: colors.decorative.evergreen,
  inherit: 'currentColor',
} as const;

// Default design tokens for icon
const iconDefaults = {
  size: 'medium' as IconSize,
  color: 'inherit' as IconColor,
  variant: 'default' as IconVariant,
  clickable: false,
  spin: false,
  pulse: false,
  disabled: false,
};

const getColorValue = (color: IconColor): string => {
  return colorTokens[color as keyof typeof colorTokens] || color;
};

const getSizeStyles = (size: IconSize) => {
  const sizeConfig = sizeTokens[size] || sizeTokens.medium;

  return css`
    width: ${sizeConfig.dimension};
    height: ${sizeConfig.dimension};
    font-size: ${sizeConfig.fontSize}rem;
  `;
};

const getVariantStyles = (
  variant: IconVariant,
  backgroundColor?: IconColor,
  size: IconSize = 'medium'
) => {
  const sizeConfig = sizeTokens[size] || sizeTokens.medium;

  switch (variant) {
    case 'rounded':
      return css`
        background-color: ${backgroundColor
          ? getColorValue(backgroundColor)
          : colors.grey.grey2};
        border-radius: 50%;
        padding: ${sizeConfig.padding};
      `;
    case 'outlined':
      return css`
        border: 1px solid
          ${backgroundColor
            ? getColorValue(backgroundColor)
            : colors.grey.grey3};
        border-radius: ${borderRadius.sm};
        padding: ${sizeConfig.padding};
      `;
    case 'filled':
      return css`
        background-color: ${backgroundColor
          ? getColorValue(backgroundColor)
          : colors.grey.grey2};
        border-radius: ${borderRadius.sm};
        padding: ${sizeConfig.padding};
      `;
    case 'default':
    default:
      return css`
        /* No additional styles for default variant */
      `;
  }
};

const getInteractiveStyles = (
  clickable: boolean,
  disabled: boolean,
  hoverColor?: IconColor
) => {
  if (disabled) {
    return css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `;
  }

  if (clickable) {
    return css`
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        color: ${hoverColor ? getColorValue(hoverColor) : colors.primary.brand};
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.95);
      }

      &:focus-visible {
        outline: 2px solid ${colors.primary.brand};
        outline-offset: 2px;
        border-radius: ${borderRadius.xs};
      }
    `;
  }

  return css`
    /* No interactive styles */
  `;
};

export const StyledIcon = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'size',
      'color',
      'hoverColor',
      'variant',
      'backgroundColor',
      'clickable',
      'disabled',
    ].includes(prop),
})<{
  size: IconSize;
  color: IconColor;
  hoverColor?: IconColor;
  variant: IconVariant;
  backgroundColor?: IconColor;
  clickable: boolean;
  disabled: boolean;
}>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;

  /* Size styles */
  ${({ size }) => getSizeStyles(size)};

  /* Color styles */
  color: ${({ color }) => getColorValue(color)};

  /* Variant styles */
  ${({ variant, backgroundColor, size }) =>
    getVariantStyles(variant, backgroundColor, size)};

  /* Interactive styles */
  ${({ clickable, disabled, hoverColor }) =>
    getInteractiveStyles(clickable, disabled, hoverColor)};

  /* FontAwesome icon container */
  svg {
    width: 1em;
    height: 1em;
  }
`;

// Export tokens and defaults for reuse
export { iconDefaults, sizeTokens, colorTokens };
