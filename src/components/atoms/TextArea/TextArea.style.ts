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

// TextArea-specific design tokens
// Extends the input pattern for multi-line text areas
const textAreaTokens = {
  // Component sizing (using existing spacing tokens)
  size: {
    minHeight: '96px', // ~3 lines of text
    maxHeight: '400px', // Maximum height before scrolling
  },
  
  // Typography scale (same as Input for consistency)
  typography: {
    label: {
      size: fontSizes.sm, // 0.875rem
      weight: 500, // Medium weight for labels
    },
    textarea: {
      size: fontSizes.md, // 1rem
      weight: 400, // Regular weight for textarea text
      lineHeight: 1.5, // Comfortable line height for multi-line text
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
  },
  
  // Animation and transitions
  animation: {
    transition: transitions.input, // 'border-color 200ms ease-in-out, box-shadow 200ms ease-in-out'
    resize: 'height 100ms ease-out', // Smooth auto-resize
  },
  
  // Color mappings (semantic color usage - same as Input)
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
    },
  },
} as const;

export const TextAreaContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['fullWidth'].includes(prop),
})<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

export const TextAreaLabel = styled.label`
  font-size: ${textAreaTokens.typography.label.size}rem;
  font-weight: ${textAreaTokens.typography.label.weight};
  color: ${textAreaTokens.colors.text.label};
`;

export const StyledTextArea = styled.textarea.withConfig({
  shouldForwardProp: (prop) => !['hasError', 'autoResize'].includes(prop),
})<{ hasError?: boolean; autoResize?: boolean }>`
  background-color: ${textAreaTokens.colors.background.default};
  border: ${borders.width.thin} ${borders.style.solid} ${({ hasError }) => 
    hasError ? textAreaTokens.colors.border.error : textAreaTokens.colors.border.default
  };
  border-radius: ${borderRadius.sm};
  color: ${textAreaTokens.colors.text.default};
  font-size: ${textAreaTokens.typography.textarea.size}rem;
  font-weight: ${textAreaTokens.typography.textarea.weight};
  line-height: ${textAreaTokens.typography.textarea.lineHeight};
  padding: ${textAreaTokens.layout.padding.vertical} ${textAreaTokens.layout.padding.horizontal};
  min-height: ${textAreaTokens.size.minHeight};
  width: 100%;
  font-family: inherit;
  resize: ${({ autoResize }) => autoResize ? 'none' : 'vertical'};
  transition: ${textAreaTokens.animation.transition}${({ autoResize }) => 
    autoResize ? `, ${textAreaTokens.animation.resize}` : ''
  };

  &::placeholder {
    color: ${textAreaTokens.colors.text.placeholder};
  }

  &:hover:not(:focus) {
    border-color: ${({ hasError }) => 
      hasError ? textAreaTokens.colors.border.error : textAreaTokens.colors.border.hover
    };
  }

  &:focus {
    border-color: ${({ hasError }) => 
      hasError ? textAreaTokens.colors.border.error : textAreaTokens.colors.border.focus
    };
    box-shadow: 0 0 0 ${textAreaTokens.states.focus.ringWidth} ${({ hasError }) => 
      hasError 
        ? `${textAreaTokens.colors.border.error}${textAreaTokens.states.focus.ringOpacity}` 
        : `${textAreaTokens.colors.border.focus}${textAreaTokens.states.focus.ringOpacity}`
    };
    outline: none;
  }

  &:disabled {
    background-color: ${textAreaTokens.colors.background.disabled};
    color: ${textAreaTokens.colors.text.disabled};
    cursor: not-allowed;
    border-color: ${textAreaTokens.colors.border.default};
    opacity: ${textAreaTokens.states.disabled.opacity};
    resize: none;
  }

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.grey.grey0};
    border-radius: ${borderRadius.sm};
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.grey.grey3};
    border-radius: ${borderRadius.sm};
    
    &:hover {
      background: ${colors.grey.grey4};
    }
  }
`;

// Export tokens for potential reuse in other textarea-related components
export { textAreaTokens };

