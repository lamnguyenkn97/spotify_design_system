import styled, { css } from 'styled-components';
import { 
  colors, 
  spacing, 
  borderRadius, 
  fontSizes, 
  opacity, 
  transitions 
} from '../../../styles/tokens';
import { PillSize, PillVariant } from './Pill.types';

// Constants for better maintainability
const PILL_HEIGHTS = {
  sm: '28px',
  md: '32px',
  lg: '40px',
} as const;

const DISMISS_BUTTON_SIZE = '16px';

// Reusable style mixins
const pillSizeStyles = {
  sm: css`
    padding: ${spacing.xs} ${spacing.sm};
    font-size: ${fontSizes.sm}rem;
    height: ${PILL_HEIGHTS.sm};
  `,
  md: css`
    padding: ${spacing.xs} ${spacing.md};
    font-size: ${fontSizes.sm}rem;
    height: ${PILL_HEIGHTS.md};
  `,
  lg: css`
    padding: ${spacing.sm} ${spacing.lg};
    font-size: ${fontSizes.md}rem;
    height: ${PILL_HEIGHTS.lg};
  `,
} as const;

const pillVariantStyles = {
  default: css`
    background-color: ${colors.grey.grey1};
    color: ${colors.primary.white};
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: ${colors.grey.grey2};
    }
  `,
  selected: css`
    background-color: ${colors.primary.white};
    color: ${colors.primary.black};
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: ${colors.grey.grey6};
    }
  `,
  filter: css`
    background-color: ${colors.grey.grey2};
    color: ${colors.primary.white};
    border-color: ${colors.grey.grey4};

    &:hover:not(:disabled) {
      background-color: ${colors.grey.grey3};
    }
  `,
} as const;

// Base pill styles shared across all variants
const basePillStyles = css`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xs};
  border: 1px solid;
  border-radius: ${borderRadius.xl};
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  white-space: nowrap;
  transition: ${transitions.colors};

  &:disabled {
    opacity: ${opacity.disabled};
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid ${colors.primary.brand};
    outline-offset: 1px;
  }
`;

// Main Pill component
export const PillButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['size', 'variant', 'selected', 'dismissible'].includes(prop),
})<{
  size: PillSize;
  variant: PillVariant;
  selected: boolean;
  dismissible: boolean;
}>`
  ${basePillStyles}
  
  /* Apply size-specific styles */
  ${({ size }) => pillSizeStyles[size]}
  
  /* Apply variant styles based on selected state */
  ${({ variant, selected }) => {
    if (selected || variant === 'selected') {
      return pillVariantStyles.selected;
    }
    return pillVariantStyles[variant] || pillVariantStyles.default;
  }}
`;

export const PillDismissButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${DISMISS_BUTTON_SIZE};
  height: ${DISMISS_BUTTON_SIZE};
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  border-radius: 50%;
  transition: ${transitions.colors};

  &:hover {
    background-color: rgba(255, 255, 255, ${opacity.overlay.subtle});
  }

  &:focus {
    outline: 1px solid currentColor;
    outline-offset: 1px;
  }
`;

// Export with better names (keeping old exports for backward compatibility)
export const StyledPill = PillButton;
export const DismissButton = PillDismissButton;
