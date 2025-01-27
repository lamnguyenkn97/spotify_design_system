import styled from 'styled-components';
import { borderRadius, colors, fontSizes, spacing } from '../../../styles';
import { ButtonSize, ButtonVariant } from './Button.types';

export interface ButtonStyleProps {
  size: ButtonSize; // Size of the button
  variant: ButtonVariant; // Variant of the button
}

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.Small:
      return `
        padding: ${spacing.xs} ${spacing.sm};
        font-size: ${fontSizes.sm};
        font-family: 'Circular-Medium', sans-serif;
      `;
    case ButtonSize.Large:
      return `
        padding: ${spacing.md} ${spacing.lg};
        font-size: ${fontSizes.lg};
        font-family: 'Circular-Bold', sans-serif;
      `;
    case ButtonSize.Medium:
    default:
      return `
        padding: ${spacing.sm} ${spacing.md};
        font-size: ${fontSizes.md};
        font-family: 'Circular-Medium', sans-serif;
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
        }
      `;
    case ButtonVariant.White:
      return `
        background-color: ${colors.primary.white};
        color: ${colors.primary.black};
        &:hover {
          background-color: ${colors.grey.grey6};
          
        }
      `;
    case ButtonVariant.Primary:
    default:
      return `
        background-color: ${colors.primary.brand};
        color: ${colors.primary.black};
        &:hover {
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
  ${(props) => getVariantStyles(props.variant)};
  border: none;
  font-family: inherit;
  border-radius: ${borderRadius.xl};
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:disabled {
    cursor: not-allowed;
  }
`;
