import styled, { css } from 'styled-components';
import { borderRadius, fontSizes, spacing, colors } from '../../../styles';
import { InputSize, InputVariant, InputState } from './Input.types';

// Size tokens mapping
const sizeTokens = {
  xs: {
    padding: `${spacing.xs} ${spacing.sm}`,
    fontSize: fontSizes.sm,
    height: '2rem',
    iconSize: 'xs' as const,
  },
  sm: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: fontSizes.sm,
    height: '2.5rem',
    iconSize: 'sm' as const,
  },
  md: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: fontSizes.md,
    height: '3rem',
    iconSize: 'sm' as const,
  },
  lg: {
    padding: `${spacing.md} ${spacing.lg}`,
    fontSize: fontSizes.lg,
    height: '3.5rem',
    iconSize: 'lg' as const,
  },
  xl: {
    padding: `${spacing.lg} ${spacing.xl}`,
    fontSize: fontSizes.xl,
    height: '4rem',
    iconSize: 'lg' as const,
  },
} as const;

// State color tokens
const stateTokens = {
  default: {
    border: colors.grey.grey2,
    background: colors.grey.grey0,
    text: colors.primary.white,
    placeholder: colors.grey.grey6,
    icon: colors.grey.grey5,
    focus: colors.primary.brand,
  },
  error: {
    border: colors.decorative.redRedWine,
    background: colors.grey.grey0,
    text: colors.primary.white,
    placeholder: colors.grey.grey6,
    icon: colors.decorative.redRedWine,
    focus: colors.decorative.redRedWine,
  },
  success: {
    border: colors.decorative.evergreen,
    background: colors.grey.grey0,
    text: colors.primary.white,
    placeholder: colors.grey.grey6,
    icon: colors.decorative.evergreen,
    focus: colors.decorative.evergreen,
  },
  warning: {
    border: colors.decorative.mellowYellow,
    background: colors.grey.grey0,
    text: colors.primary.white,
    placeholder: colors.grey.grey6,
    icon: colors.decorative.mellowYellow,
    focus: colors.decorative.mellowYellow,
  },
  disabled: {
    border: colors.grey.grey1,
    background: colors.grey.grey0,
    text: colors.grey.grey4,
    placeholder: colors.grey.grey3,
    icon: colors.grey.grey3,
    focus: colors.grey.grey1,
  },
} as const;

// Input configuration
const inputConfig = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: borderRadius.md,
  transition: 'all 0.2s ease-in-out',
  iconSpacing: spacing.sm,
} as const;

// Default values
const inputDefaults = {
  size: 'md' as InputSize,
  variant: 'default' as InputVariant,
  state: 'default' as InputState,
  iconSize: 'sm' as InputSize,
  fullWidth: false,
  clearable: false,
  showPasswordToggle: true,
  loading: false,
} as const;

// Helper functions
const getSizeStyles = (size: InputSize) => {
  const sizeConfig = sizeTokens[size];
  return css`
    padding: ${sizeConfig.padding};
    font-size: ${sizeConfig.fontSize}rem;
    min-height: ${sizeConfig.height};
  `;
};

const getStateStyles = (state: InputState) => {
  const stateConfig = stateTokens[state];
  return css`
    border-color: ${stateConfig.border};
    background-color: ${stateConfig.background};
    color: ${stateConfig.text};

    &::placeholder {
      color: ${stateConfig.placeholder};
    }

    &:focus {
      border-color: ${stateConfig.focus};
      box-shadow: 0 0 0 2px ${stateConfig.focus}25;
      outline: none;
    }

    ${state === 'disabled' &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}
  `;
};

export const InputContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['fullWidth'].includes(prop),
})<{
  fullWidth: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '320px')};
`;

export const InputLabel = styled.label`
  font-size: ${fontSizes.sm}rem;
  font-weight: 500;
  color: ${colors.primary.white};
  margin-bottom: ${spacing.xs};
`;

export const InputWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['size', 'state', 'hasLeftIcon', 'hasRightIcon'].includes(prop),
})<{
  size: InputSize;
  state: InputState;
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  border: ${inputConfig.borderWidth} ${inputConfig.borderStyle};
  border-radius: ${inputConfig.borderRadius};
  transition: ${inputConfig.transition};

  ${({ state }) => getStateStyles(state)};

  ${({ hasLeftIcon, size }) =>
    hasLeftIcon &&
    css`
      padding-left: calc(
        ${sizeTokens[size].iconSize === 'lg' ? '1.5rem' : '1.25rem'} +
          ${inputConfig.iconSpacing}
      );
    `}

  ${({ hasRightIcon, size }) =>
    hasRightIcon &&
    css`
      padding-right: calc(
        ${sizeTokens[size].iconSize === 'lg' ? '1.5rem' : '1.25rem'} +
          ${inputConfig.iconSpacing}
      );
    `}
  
  &:hover:not(:focus-within) {
    border-color: ${({ state }) => stateTokens[state].focus}66;
  }
`;

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !['size', 'state'].includes(prop),
})<{
  size: InputSize;
  state: InputState;
}>`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;

  ${({ size }) => getSizeStyles(size)};
  ${({ state }) => css`
    color: ${stateTokens[state].text};

    &::placeholder {
      color: ${stateTokens[state].placeholder};
    }
  `}

  &:disabled {
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['position', 'size', 'clickable'].includes(prop),
})<{
  position: 'left' | 'right';
  size: InputSize;
  clickable?: boolean;
}>`
  position: absolute;
  ${({ position }) => position}: ${inputConfig.iconSpacing};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      transition: ${inputConfig.transition};

      &:hover {
        opacity: 0.8;
      }
    `}
`;

export const MessageText = styled.div.withConfig({
  shouldForwardProp: (prop) => !['messageType'].includes(prop),
})<{
  messageType: 'helper' | 'error' | 'success' | 'warning';
}>`
  font-size: ${fontSizes.sm}rem;
  margin-top: ${spacing.xs};

  ${({ messageType }) => {
    switch (messageType) {
      case 'error':
        return css`
          color: ${colors.decorative.redRedWine};
        `;
      case 'success':
        return css`
          color: ${colors.decorative.evergreen};
        `;
      case 'warning':
        return css`
          color: ${colors.decorative.mellowYellow};
        `;
      case 'helper':
      default:
        return css`
          color: ${colors.grey.grey6};
        `;
    }
  }}
`;

export const LoadingSpinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid ${colors.grey.grey3};
  border-top: 2px solid ${colors.primary.brand};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Export tokens and defaults for reuse
export { sizeTokens, stateTokens, inputConfig, inputDefaults };
