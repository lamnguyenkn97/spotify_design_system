import styled, { css } from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizes,
  spacing,
  fonts,
  scale,
  transitions,
  keyframes,
} from '../../../styles';
import { ButtonSize, ButtonVariant } from './Button.types';

// Design tokens for button-specific configurations
const buttonTokens = {
  border: {
    width: '1px',
    style: 'solid',
  },
  opacity: {
    disabled: 0.5,
  },
  minHeight: {
    small: '32px',
    medium: '40px',
    large: '48px',
  },
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

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case ButtonVariant.Secondary:
      return css`
        background-color: ${colors.primary.black};
        color: ${colors.grey.grey6};
        border: ${buttonTokens.border.width} ${buttonTokens.border.style} ${colors.grey.grey3};
        &:hover:not(:disabled) {
          color: ${colors.primary.white};
          border-color: ${colors.primary.white};
          background-color: ${colors.grey.grey1};
        }
        &:active:not(:disabled) {
          background-color: ${colors.grey.grey2};
        }
      `;
    case ButtonVariant.White:
      return css`
        background-color: ${colors.primary.white};
        color: ${colors.primary.black};
        border: ${buttonTokens.border.width} ${buttonTokens.border.style} ${colors.primary.white};
        &:hover:not(:disabled) {
          background-color: ${colors.grey.grey6};
        }
        &:active:not(:disabled) {
          background-color: ${colors.grey.grey5};
        }
      `;
    case ButtonVariant.FlatWhite:
      return css`
        background-color: transparent;
        color: ${colors.primary.white};
        border: ${buttonTokens.border.width} ${buttonTokens.border.style} ${colors.grey.grey6};
        &:hover:not(:disabled) {
          border-color: ${colors.primary.white};
          background-color: rgba(255, 255, 255, 0.1);
        }
        &:active:not(:disabled) {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `;
    case ButtonVariant.Text:
      return css`
        background-color: transparent;
        color: ${colors.grey.grey6};
        border: none;
        padding: ${spacing.xs};
        &:hover:not(:disabled) {
          color: ${colors.primary.white};
          background-color: rgba(255, 255, 255, 0.1);
        }
        &:active:not(:disabled) {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `;
    case ButtonVariant.Primary:
    default:
      return css`
        background-color: ${colors.primary.brand};
        color: ${colors.primary.black};
        border: ${buttonTokens.border.width} ${buttonTokens.border.style} ${colors.primary.brand};
        &:hover:not(:disabled) {
          background-color: ${colors.primary.brandHighlight};
          border-color: ${colors.primary.brandHighlight};
        }
        &:active:not(:disabled) {
          background-color: ${colors.primary.brand};
          transform: scale(0.98);
        }
      `;
  }
};

export const StyledButton = styled.button<{
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
  
  /* Loading state using global keyframes */
  ${(props) =>
    props.loading &&
    css`
      color: transparent;
      pointer-events: none;

      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border: 2px solid currentColor;
        border-top: 2px solid transparent;
        border-radius: 50%;
        animation: ${keyframes.spin} 0.8s linear infinite;
        color: ${props.variant === ButtonVariant.Primary
          ? colors.primary.black
          : colors.primary.white};
      }
    `}
  
  /* Disabled state using design tokens */
  &:disabled {
    opacity: ${buttonTokens.opacity.disabled};
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Focus state */
  &:focus-visible {
    outline: 2px solid ${colors.primary.brand};
    outline-offset: 2px;
  }

  /* Icon container */
  .icon {
    display: inline-flex;
    align-items: center;
    line-height: 1;
  }
`;