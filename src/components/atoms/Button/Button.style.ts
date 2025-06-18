import styled, { css, keyframes } from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizes,
  spacing,
  fonts,
} from '../../../styles';
import { ButtonSize, ButtonVariant } from './Button.types';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.Small:
      return css`
        padding: ${spacing.xs} ${spacing.sm};
        font-size: ${fontSizes.sm}rem;
        font-family: ${fonts.circular.medium}, sans-serif;
        min-height: 32px;
      `;
    case ButtonSize.Large:
      return css`
        padding: ${spacing.md} ${spacing.lg};
        font-size: ${fontSizes.lg}rem;
        font-family: ${fonts.circular.bold}, sans-serif;
        min-height: 48px;
      `;
    case ButtonSize.Medium:
    default:
      return css`
        padding: ${spacing.sm} ${spacing.md};
        font-size: ${fontSizes.md}rem;
        font-family: ${fonts.circular.medium}, sans-serif;
        min-height: 40px;
      `;
  }
};

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case ButtonVariant.Secondary:
      return css`
        background-color: ${colors.primary.black};
        color: ${colors.grey.grey6};
        border: 1px solid ${colors.grey.grey3};
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
        border: 1px solid ${colors.primary.white};
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
        border: 1px solid ${colors.grey.grey6};
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
        border: 1px solid ${colors.primary.brand};
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

  /* Base styles */
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.xs};
  border-radius: ${borderRadius.xl};
  cursor: pointer;
  transition: all 0.2s ease;
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
  
  /* Loading state */
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
        animation: ${spin} 0.8s linear infinite;
        color: ${props.variant === ButtonVariant.Primary
          ? colors.primary.black
          : colors.primary.white};
      }
    `}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
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
