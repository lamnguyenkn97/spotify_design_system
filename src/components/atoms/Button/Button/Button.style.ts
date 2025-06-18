import styled from 'styled-components';
import { borderRadius, colors, fontSizes, spacing } from '../../../../styles';
import { ButtonSize, ButtonVariant } from './Button.types';

// Design tokens for consistent button behavior
const buttonTokens = {
  animation: {
    hoverScale: '1.07',
    fontScale: '1.05',
    transition: 'all 0.3s ease-in-out',
  },
  border: {
    width: '2px',
    style: 'solid',
  },
  fontFamily: {
    medium: 'Circular-Medium, sans-serif',
    bold: 'Circular-Bold, sans-serif',
  },
  opacity: {
    disabled: 0.6,
  },
} as const;

// Size configuration object - eliminates repetition and hardcoded values
const sizeConfig = {
  [ButtonSize.ExtraSmall]: {
    padding: `${spacing.xs} ${spacing.xs}`,
    fontSize: `${fontSizes.sm}rem`,
    fontFamily: buttonTokens.fontFamily.medium,
  },
  [ButtonSize.Small]: {
    padding: `${spacing.xs} ${spacing.sm}`,
    fontSize: `${fontSizes.sm}rem`,
    fontFamily: buttonTokens.fontFamily.medium,
  },
  [ButtonSize.Medium]: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: `${fontSizes.md}rem`,
    fontFamily: buttonTokens.fontFamily.medium,
  },
  [ButtonSize.Large]: {
    padding: `${spacing.md} ${spacing.lg}`,
    fontSize: `${fontSizes.lg}rem`,
    fontFamily: buttonTokens.fontFamily.bold,
  },
} as const;

export const getSizeStyles = (size: ButtonSize) => {
  const config = sizeConfig[size] || sizeConfig[ButtonSize.Medium];
  return `
    padding: ${config.padding};
    font-size: ${config.fontSize};
    font-family: ${config.fontFamily};
  `;
};

// Variant configuration object
const variantConfig = {
  [ButtonVariant.Primary]: {
    backgroundColor: colors.primary.brand,
    color: colors.primary.black,
    borderColor: 'transparent',
    hover: {
      backgroundColor: colors.primary.brandHighlight,
      color: colors.primary.black,
      borderColor: 'transparent',
    },
  },
  [ButtonVariant.Secondary]: {
    backgroundColor: colors.primary.black,
    color: colors.grey.grey6,
    borderColor: colors.grey.grey3,
    hover: {
      backgroundColor: colors.primary.black,
      color: colors.primary.white,
      borderColor: colors.primary.white,
    },
  },
  [ButtonVariant.White]: {
    backgroundColor: colors.primary.white,
    color: colors.primary.black,
    borderColor: 'transparent',
    hover: {
      backgroundColor: colors.grey.grey6,
      color: colors.primary.black,
      borderColor: 'transparent',
    },
  },
  [ButtonVariant.FlatWhite]: {
    backgroundColor: 'transparent',
    color: colors.primary.white,
    borderColor: colors.grey.grey6,
    hover: {
      backgroundColor: 'transparent',
      color: colors.primary.white,
      borderColor: colors.primary.white,
    },
  },
} as const;

const getVariantStyles = (variant: ButtonVariant) => {
  const config = variantConfig[variant] || variantConfig[ButtonVariant.Primary];
  
  return `
    background-color: ${config.backgroundColor};
    color: ${config.color};
    border-color: ${config.borderColor};
    
    &:hover {
      background-color: ${config.hover.backgroundColor};
      color: ${config.hover.color};
      border-color: ${config.hover.borderColor};
      transform: scale(${buttonTokens.animation.hoverScale});
      font-size: calc(1em * ${buttonTokens.animation.fontScale});
    }
  `;
};

export const StyledButton = styled.button<{
  size: ButtonSize;
  variant: ButtonVariant;
}>`
  ${(props) => getSizeStyles(props.size)};
  ${(props) => getVariantStyles(props.variant)};
  
  /* Base styles */
  border: ${buttonTokens.border.width} ${buttonTokens.border.style} transparent;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.xs};
  border-radius: ${borderRadius.xl};
  cursor: pointer;
  transition: ${buttonTokens.animation.transition};
  
  &:disabled {
    cursor: not-allowed;
    opacity: ${buttonTokens.opacity.disabled};
    transform: none;
    
    &:hover {
      transform: none;
      font-size: inherit;
    }
  }
  
  .icon {
    display: inline-flex;
    align-items: center;
  }
`;
