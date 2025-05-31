import styled from 'styled-components';
import { borderRadius, colors, fontSizes, spacing, fonts } from '../../../../styles';
import { ButtonSize, ButtonVariant } from './Button.types';

export const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.Small:
      return `
        padding: ${spacing.xs} ${spacing.sm};
        font-size: ${fontSizes.sm}rem;
        font-family: ${fonts.circular.medium}, sans-serif;
      `;
    case ButtonSize.Large:
      return `
        padding: ${spacing.md} ${spacing.lg};
        font-size: ${fontSizes.lg}rem;
        font-family: ${fonts.circular.bold}, sans-serif;
      `;
    case ButtonSize.Medium:
    default:
      return `
        padding: ${spacing.sm} ${spacing.md};
        font-size: ${fontSizes.md}rem;
        font-family: ${fonts.circular.medium}, sans-serif;
      `;
  }
};

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case ButtonVariant.Secondary:
      return `
        background-color: ${colors.primary.black};
        color: ${colors.grey.grey6};
        border-color: ${colors.grey.grey3};
        &:hover {
          color: ${colors.primary.white};
          border-color: ${colors.primary.white};
          transform: scale(1.07);
          font-size: calc(${fontSizes.md}rem * 1.1);
        }
      `;
    case ButtonVariant.White:
      return `
        background-color: ${colors.primary.white};
        color: ${colors.primary.black};
        &:hover {
          background-color: ${colors.grey.grey6};
          transform: scale(1.07);
          font-size: calc(${fontSizes.md}rem * 1.05);
        }
      `;
    case ButtonVariant.FlatWhite:
      return `
        background-color: transparent;
        color: ${colors.primary.white};
        border: 2px solid ${colors.grey.grey6};
        &:hover {
          border: 2px solid ${colors.primary.white};
          transform: scale(1.07);
          font-size: calc(${fontSizes.md}rem * 1.05);
        }
      `;
    case ButtonVariant.Primary:
    default:
      return `
        background-color: ${colors.primary.brand};
        color: ${colors.primary.black};
        &:hover {
          transform: scale(1.07);
          font-size: calc(${fontSizes.md}rem * 1.05);
          background-color: ${colors.primary.brandHighlight};
        }
      `;
  }
};

export const StyledButton = styled.button<{
  size: ButtonSize;
  variant: ButtonVariant;
}>`
  ${(props) => getSizeStyles(props.size)};
  border: none;
  ${(props) => getVariantStyles(props.variant)};
  font-family: inherit;
  display: inline-flex;
  align-items: center; /* Vertically center content */
  justify-content: center; /* Optional: center everything */
  gap: ${spacing.xs};
  border-radius: ${borderRadius.xl};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:disabled {
    cursor: not-allowed;
  }
  .icon {
    display: inline-flex; /* Keeps the icon properly centered within itself */
    align-items: center;
  }
`;
