import styled, { css } from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizes,
  spacing,
  fonts,
  transitions,
  fontScale,
  scale,
  opacity,
  borders,
} from '../../../styles';
import { ButtonSize, ButtonVariant } from './Button.types';

// Design tokens for button-specific configurations
const buttonTokens = {
  minHeight: {
    small: spacing.xl, // 32px
    medium: spacing['2xl'], // 40px
    large: spacing['3xl'], // 48px
  },
  // Interactive state values
  transform: {
    active: `scale(${scale.pressed})`,
    hover: `scale(${scale.subtle})`,
  },
  fontSize: {
    hoverScale: fontScale.medium, // 1.1
  },
} as const;

// Enhanced overlay colors using design tokens
const overlayColors = {
  whiteSubtle: `rgba(255, 255, 255, ${opacity.overlay.subtle})`,
  whiteMedium: `rgba(255, 255, 255, ${opacity.overlay.medium})`,
} as const;

// Size configuration object - eliminates repetition and hardcoded values
const sizeConfig = {
  [ButtonSize.Small]: {
    padding: `${spacing.xs} ${spacing.sm}`,
    fontSize: `${fontSizes.sm}rem`,
    fontFamily: `${fonts.circular.medium}, sans-serif`,
    minHeight: buttonTokens.minHeight.small,
  },
  [ButtonSize.Medium]: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: `${fontSizes.md}rem`,
    fontFamily: `${fonts.circular.medium}, sans-serif`,
    minHeight: buttonTokens.minHeight.medium,
  },
  [ButtonSize.Large]: {
    padding: `${spacing.md} ${spacing.lg}`,
    fontSize: `${fontSizes.lg}rem`,
    fontFamily: `${fonts.circular.bold}, sans-serif`,
    minHeight: buttonTokens.minHeight.large,
  },
} as const;

export const getSizeStyles = (size: ButtonSize) => {
  const config = sizeConfig[size] || sizeConfig[ButtonSize.Medium];
  return css`
    padding: ${config.padding};
    font-size: ${config.fontSize};
    font-family: ${config.fontFamily};
    min-height: ${config.minHeight};
  `;
};

// Variant configuration object - eliminates hardcoded values and repetition
interface VariantConfig {
  backgroundColor: string;
  color: string;
  borderColor: string;
  customBorder?: string; // For Text variant
  customPadding?: string; // For Text variant
  hover: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    fontSize?: string; // For Text variant size change on hover
  };
  active: {
    backgroundColor?: string;
    transform?: string;
    color?: string; // For Text variant color change on active
  };
}

const variantConfig: Record<ButtonVariant, VariantConfig> = {
  [ButtonVariant.Primary]: {
    backgroundColor: colors.primary.brand,
    color: colors.primary.black,
    borderColor: colors.primary.brand,
    hover: {
      backgroundColor: colors.primary.brandHighlight,
      borderColor: colors.primary.brandHighlight,
    },
    active: {
      backgroundColor: colors.primary.brand,
      transform: buttonTokens.transform.active,
    },
  },
  [ButtonVariant.Secondary]: {
    backgroundColor: colors.primary.black,
    color: colors.grey.grey6,
    borderColor: colors.grey.grey3,
    hover: {
      color: colors.primary.white,
      borderColor: colors.primary.white,
      backgroundColor: colors.grey.grey1,
    },
    active: {
      backgroundColor: colors.grey.grey2,
    },
  },
  [ButtonVariant.White]: {
    backgroundColor: colors.primary.white,
    color: colors.primary.black,
    borderColor: colors.primary.white,
    hover: {
      backgroundColor: colors.grey.grey6,
    },
    active: {
      backgroundColor: colors.grey.grey5,
    },
  },
  [ButtonVariant.FlatWhite]: {
    backgroundColor: 'transparent',
    color: colors.primary.white,
    borderColor: colors.grey.grey6,
    hover: {
      borderColor: colors.primary.white,
      backgroundColor: overlayColors.whiteSubtle,
    },
    active: {
      backgroundColor: overlayColors.whiteMedium,
    },
  },
  [ButtonVariant.Text]: {
    backgroundColor: 'transparent',
    color: colors.grey.grey6,
    borderColor: 'transparent',
    customBorder: 'none',
    customPadding: spacing.xs,
    hover: {
      color: colors.primary.white,
      fontSize: buttonTokens.fontSize.hoverScale,
    },
    active: {
      color: colors.primary.white,
    },
  },
} as const;

const getVariantStyles = (variant: ButtonVariant) => {
  const config = variantConfig[variant];

  return css`
    background-color: ${config.backgroundColor};
    color: ${config.color};
    ${config.customBorder
      ? `border: ${config.customBorder};`
      : `border: ${borders.default.width} ${borders.default.style} ${config.borderColor};`}
    ${config.customPadding ? `padding: ${config.customPadding};` : ''}
    
    &:hover:not(:disabled) {
      ${config.hover.backgroundColor
        ? `background-color: ${config.hover.backgroundColor};`
        : ''}
      ${config.hover.color ? `color: ${config.hover.color};` : ''}
      ${config.hover.borderColor
        ? `border-color: ${config.hover.borderColor};`
        : ''}
      ${config.hover.fontSize ? `font-size: ${config.hover.fontSize};` : ''}
    }

    &:active:not(:disabled) {
      ${config.active.backgroundColor
        ? `background-color: ${config.active.backgroundColor};`
        : ''}
      ${config.active.transform ? `transform: ${config.active.transform};` : ''}
      ${config.active.color ? `color: ${config.active.color};` : ''}
    }
  `;
};

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['size', 'variant', 'fullWidth', 'loading', 'iconPosition'].includes(prop),
})<{
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
  iconPosition?: 'left' | 'right';
}>`
  ${(props) => getSizeStyles(props.size)};
  ${(props) => getVariantStyles(props.variant)};

  /* Base styles using global design tokens */
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.xs};
  border-radius: ${borderRadius.xl};
  cursor: pointer;
  transition: ${transitions.button};
  text-decoration: none;
  outline: none;
  position: relative;
  overflow: hidden;

  /* Full width option */
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  /* Icon positioning */
  ${(props) =>
    props.iconPosition === 'right' &&
    css`
      flex-direction: row-reverse;
    `}
  
  /* Loading state - Font Awesome spinner will be rendered in Button.tsx */
  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
    `}
  
  /* Disabled state using design tokens */
  &:disabled {
    opacity: ${opacity.disabled};
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Focus state */
  &:focus-visible {
    outline: 2px solid ${colors.primary.brand};
    outline-offset: 2px;
  }
`;
