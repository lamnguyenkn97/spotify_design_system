import styled from 'styled-components';
import { 
  borderRadius, 
  fontSizes, 
  spacing, 
  colors, 
  borders,
  transitions,
  opacity 
} from '../../../styles';

// Input-specific design tokens
// These tokens follow the design system pattern and can be extended for other form components
const inputTokens = {
  // Component sizing (using existing spacing tokens)
  size: {
    height: spacing.image.sm, // 48px (3rem) - consistent with other components
    minWidth: '200px', // Minimum usable width
  },
  
  // Icon system
  icon: {
    size: '1.5rem', // 24px - standard icon size (could be moved to global icon tokens)
    spacing: spacing.sm, // 8px - gap between icon and text
    position: spacing.md, // 16px - distance from input edge
  },
  
  // Typography scale
  typography: {
    label: {
      size: fontSizes.sm, // 0.875rem
      weight: 500, // Medium weight for labels
    },
    input: {
      size: fontSizes.md, // 1rem
      weight: 400, // Regular weight for input text
    },
  },
  
  // Interactive states
  states: {
    focus: {
      ringWidth: borders.width.medium, // 2px
      ringOpacity: '25', // 25% opacity for focus ring
    },
    disabled: {
      opacity: opacity.disabled, // 0.5
    },
  },
  
  // Layout and positioning
  layout: {
    padding: {
      vertical: spacing.sm, // 8px
      horizontal: spacing.md, // 16px
    },
    iconOffset: `calc(${spacing.md} + 1.5rem + ${spacing.sm})`, // Dynamic calculation for icon padding
  },
  
  // Animation and transitions
  animation: {
    transition: transitions.input, // 'border-color 200ms ease-in-out, box-shadow 200ms ease-in-out'
  },
  
  // Z-index layering
  zIndex: {
    icon: 1,
    input: 0,
  },
  
  // Color mappings (semantic color usage)
  colors: {
    background: {
      default: colors.grey.grey0,
      disabled: colors.grey.grey1,
    },
    border: {
      default: colors.grey.grey2,
      hover: colors.grey.grey4,
      focus: colors.primary.brand,
      error: colors.decorative.redRedWine,
    },
    text: {
      default: colors.primary.white,
      placeholder: colors.grey.grey6,
      disabled: colors.grey.grey4,
      label: colors.primary.white,
      icon: colors.grey.grey5,
    },
  },
} as const;

export const InputContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['fullWidth'].includes(prop),
})<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

export const InputLabel = styled.label`
  font-size: ${inputTokens.typography.label.size}rem;
  font-weight: ${inputTokens.typography.label.weight};
  color: ${inputTokens.colors.text.label};
`;

export const InputWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['hasLeftIcon'].includes(prop),
})<{ hasLeftIcon?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LeftIconWrapper = styled.div`
  position: absolute;
  left: ${inputTokens.icon.position};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${inputTokens.colors.text.icon};
  z-index: ${inputTokens.zIndex.icon};
  pointer-events: none;
  font-size: ${inputTokens.icon.size};
`;

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !['hasError', 'hasLeftIcon'].includes(prop),
})<{ hasError?: boolean; hasLeftIcon?: boolean }>`
  background-color: ${inputTokens.colors.background.default};
  border: ${borders.thin} ${({ hasError }) => hasError ? inputTokens.colors.border.error : inputTokens.colors.border.default};
  border-radius: ${borderRadius.sm};
  color: ${inputTokens.colors.text.default};
  font-size: ${inputTokens.typography.input.size}rem;
  font-weight: ${inputTokens.typography.input.weight};
  padding: ${inputTokens.layout.padding.vertical} ${inputTokens.layout.padding.horizontal};
  padding-left: ${({ hasLeftIcon }) => 
    hasLeftIcon 
      ? inputTokens.layout.iconOffset
      : inputTokens.layout.padding.horizontal
  };
  height: ${inputTokens.size.height};
  width: 100%;
  transition: ${inputTokens.animation.transition};

  &::placeholder {
    color: ${inputTokens.colors.text.placeholder};
  }

  &:hover:not(:focus) {
    border-color: ${({ hasError }) => hasError ? inputTokens.colors.border.error : inputTokens.colors.border.hover};
  }

  &:focus {
    border-color: ${({ hasError }) => hasError ? inputTokens.colors.border.error : inputTokens.colors.border.focus};
    box-shadow: 0 0 0 ${inputTokens.states.focus.ringWidth} ${({ hasError }) => 
      hasError 
        ? `${inputTokens.colors.border.error}${inputTokens.states.focus.ringOpacity}` 
        : `${inputTokens.colors.border.focus}${inputTokens.states.focus.ringOpacity}`
    };
    outline: none;
  }

  &:disabled {
    background-color: ${inputTokens.colors.background.disabled};
    color: ${inputTokens.colors.text.disabled};
    cursor: not-allowed;
    border-color: ${inputTokens.colors.border.default};
    opacity: ${inputTokens.states.disabled.opacity};
  }
`;

// Export tokens for potential reuse in other input-related components
export { inputTokens }; 