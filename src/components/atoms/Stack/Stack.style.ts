import styled from 'styled-components';
import { spacing } from '../../../styles';
import {
  StackDirection,
  StackSpacing,
  StackAlign,
  StackJustify,
} from './Stack.types';

// Simplified spacing tokens for Spotify use cases
const spacingTokens = {
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
} as const;

// Component defaults
export const stackDefaults = {
  direction: 'column' as StackDirection,
  spacing: 'md' as StackSpacing,
  align: 'stretch' as StackAlign,
  justify: 'start' as StackJustify,
} as const;

// Helper function for spacing
const getSpacingValue = (spacingProp: StackSpacing): string => {
  return spacingTokens[spacingProp];
};

export const StyledStack = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['direction', 'spacing', 'align', 'justify'].includes(prop),
})<{
  direction: StackDirection;
  spacing: StackSpacing;
  align: StackAlign;
  justify: StackJustify;
}>`
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ spacing: spacingProp }) => getSpacingValue(spacingProp)};
`;
