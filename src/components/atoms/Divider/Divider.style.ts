import styled, { css } from 'styled-components';
import { colors, spacing } from '../../../styles';
import {
  DividerColor,
  DividerSpacing,
  DividerOrientation,
} from './Divider.types';

// Create a color token mapping that can be easily extended
const colorTokens = {
  primary: colors.primary.white,
  secondary: colors.grey.grey6,
  muted: colors.grey.grey3,
  brand: colors.primary.brand,
} as const;

// Create a spacing token mapping that can be easily extended
const spacingTokens = {
  none: '0',
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
  xl: spacing.xl,
} as const;

// Default design tokens for divider
const dividerDefaults = {
  thickness: 1,
  color: 'muted' as DividerColor,
  variant: 'solid',
  spacing: 'md' as DividerSpacing,
  orientation: 'horizontal' as DividerOrientation,
  length: '100%',
  fullSize: true,
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
  length: string | number,
  fullSize: boolean,
  spacingValue: string
) => {
  const lengthValue = typeof length === 'number' ? `${length}px` : length;

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
      height: ${fullSize ? '100%' : lengthValue};
      border-left: ${thickness}px ${variant} ${color};
      margin: 0 ${spacingValue};
      display: inline-block;
      vertical-align: top;
    `;
  }

  return css`
    ${baseStyles};
    width: ${fullSize ? '100%' : lengthValue};
    height: ${thickness}px;
    border-top: ${thickness}px ${variant} ${color};
    margin: ${spacingValue} 0;
    display: block;
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
      'customSpacing',
      'length',
      'fullSize',
    ].includes(prop),
})<{
  orientation: DividerOrientation;
  thickness: number;
  color: DividerColor;
  variant: string;
  spacing: DividerSpacing;
  customSpacing?: string;
  length: string | number;
  fullSize: boolean;
}>`
  /* Apply orientation-specific styles */
  ${({
    orientation,
    thickness,
    variant,
    color,
    length,
    fullSize,
    spacing: spacingProp,
    customSpacing,
  }) => {
    const colorValue = getColorValue(color);
    const spacingValue = customSpacing || getSpacingValue(spacingProp);

    return getOrientationStyles(
      orientation,
      thickness,
      variant,
      colorValue,
      length,
      fullSize,
      spacingValue
    );
  }};

  /* Accessibility and focus states */
  &:focus {
    outline: none;
  }

  /* Ensure proper behavior in flex containers */
  &[aria-orientation='vertical'] {
    align-self: stretch;
  }
`;

// Export the defaults for reuse
export { dividerDefaults, colorTokens, spacingTokens };
