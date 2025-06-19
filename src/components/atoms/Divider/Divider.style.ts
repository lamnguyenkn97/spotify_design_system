import styled, { css } from 'styled-components';
import { colors, spacing } from '../../../styles';
import {
  DividerColor,
  DividerSpacing,
  DividerOrientation,
  DividerVariant,
} from './Divider.types';

// Simplified color tokens for what Spotify actually uses
const colorTokens = {
  muted: colors.grey.grey3,
  subtle: colors.grey.grey2,
} as const;

// Simplified spacing tokens - only 3 options
const spacingTokens = {
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
} as const;

// Simplified defaults for Spotify - using proper enum types
const dividerDefaults = {
  thickness: 1,
  color: 'muted' as DividerColor,
  variant: 'solid' as DividerVariant,
  spacing: 'md' as DividerSpacing,
  orientation: 'horizontal' as DividerOrientation,
  fullWidth: true,
};

const getColorValue = (color: DividerColor): string => {
  return colorTokens[color as keyof typeof colorTokens] || color;
};

const getSpacingValue = (spacingProp: DividerSpacing): string => {
  return spacingTokens[spacingProp] || spacingTokens.md;
};

const getOrientationStyles = (
  orientation: DividerOrientation,
  thickness: number,
  variant: string,
  color: string,
  fullWidth: boolean,
  spacingValue: string
) => {
  const baseStyles = css`
    border: none;
    padding: 0;
    background: none;
    flex-shrink: 0;
  `;

  if (orientation === 'vertical') {
    return css`
      ${baseStyles};
      width: ${thickness}px;
      height: ${fullWidth ? '100%' : 'auto'};
      border-left: ${thickness}px ${variant} ${color};
      margin: 0 ${spacingValue};
      display: inline-block;
      vertical-align: top;
    `;
  }

  return css`
    ${baseStyles};
    width: ${fullWidth ? '100%' : 'auto'};
    height: ${thickness}px;
    border-top: ${thickness}px ${variant} ${color};
    margin: ${spacingValue} 0;
    display: block;

    ${variant === 'subtle' &&
    css`
      opacity: 0.3;
    `}
  `;
};

export const StyledDivider = styled.hr.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'orientation',
      'thickness',
      'color',
      'variant',
      'spacing',
      'fullWidth',
    ].includes(prop),
})<{
  orientation: DividerOrientation;
  thickness: number;
  color: DividerColor;
  variant: string;
  spacing: DividerSpacing;
  fullWidth: boolean;
}>`
  ${({
    orientation,
    thickness,
    variant,
    color,
    fullWidth,
    spacing: spacingProp,
  }) => {
    const colorValue = getColorValue(color);
    const spacingValue = getSpacingValue(spacingProp);

    return getOrientationStyles(
      orientation,
      thickness,
      variant,
      colorValue,
      fullWidth,
      spacingValue
    );
  }};

  /* Focus states for accessibility */
  &:focus {
    outline: none;
  }

  /* Proper behavior in flex containers */
  &[aria-orientation='vertical'] {
    align-self: stretch;
  }
`;

// Export the simplified defaults
export { dividerDefaults, colorTokens, spacingTokens };
