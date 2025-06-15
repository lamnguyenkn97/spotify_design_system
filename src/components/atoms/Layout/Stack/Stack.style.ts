import styled, { css } from 'styled-components';
import { spacing, borderRadius, colors } from '../../../../styles';
import {
  StackDirection,
  StackSpacing,
  StackAlign,
  StackJustify,
  StackWrap,
  StackSize,
} from './Stack.types';

// Spacing tokens mapping
const spacingTokens = {
  none: '0',
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
  xl: spacing.xl,
  xxl: '48px', // Custom extra large spacing
} as const;

// Border radius tokens mapping
const borderRadiusTokens = {
  none: '0',
  xs: borderRadius.xs,
  sm: borderRadius.sm,
  md: borderRadius.md,
  lg: borderRadius.lg,
  xl: borderRadius.xl,
  full: '50%',
} as const;

// Size tokens mapping
const sizeTokens = {
  auto: 'auto',
  full: '100%',
  fit: 'fit-content',
  min: 'min-content',
  max: 'max-content',
} as const;

// Stack configuration
const stackConfig = {
  transition: 'all 0.2s ease-in-out',
} as const;

// Default values
const stackDefaults = {
  direction: 'column' as StackDirection,
  spacing: 'md' as StackSpacing,
  align: 'stretch' as StackAlign,
  justify: 'start' as StackJustify,
  wrap: 'nowrap' as StackWrap,
  grow: false,
  shrink: true,
  centered: false,
  scrollable: false,
} as const;

// Helper functions
const getSpacingValue = (spacingProp?: StackSpacing | string): string => {
  if (!spacingProp) return spacingTokens.md;
  return spacingTokens[spacingProp as StackSpacing] || spacingProp;
};

const getSizeValue = (sizeProp?: StackSize | string | number): string => {
  if (sizeProp === undefined) return 'auto';
  if (typeof sizeProp === 'number') return `${sizeProp}px`;
  return sizeTokens[sizeProp as StackSize] || sizeProp;
};

const getBorderRadiusValue = (radiusProp?: string): string => {
  if (!radiusProp) return '0';
  return borderRadiusTokens[radiusProp as keyof typeof borderRadiusTokens] || radiusProp;
};

const getFlexStyles = (grow: boolean, shrink: boolean) => css`
  flex-grow: ${grow ? 1 : 0};
  flex-shrink: ${shrink ? 1 : 0};
`;

const getCenteredStyles = (centered: boolean) => {
  if (!centered) return '';
  return css`
    margin-left: auto;
    margin-right: auto;
  `;
};

const getScrollableStyles = (scrollable: boolean) => {
  if (!scrollable) return '';
  return css`
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: ${colors.grey.grey4} ${colors.grey.grey1};
    
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${colors.grey.grey1};
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${colors.grey.grey4};
      border-radius: 3px;
      
      &:hover {
        background: ${colors.grey.grey5};
      }
    }
  `;
};

export const StyledStack = styled.div.withConfig({
  shouldForwardProp: (prop) => 
    ![
      'direction',
      'spacing', 
      'align', 
      'justify', 
      'wrap',
      'width',
      'height',
      'grow',
      'shrink',
      'minWidth',
      'maxWidth',
      'minHeight',
      'maxHeight',
      'scrollable',
      'padding',
      'margin',
      'centered',
      'backgroundColor',
      'borderRadius',
    ].includes(prop),
})<{
  direction?: StackDirection;
  spacing?: StackSpacing | string;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: StackWrap;
  width?: StackSize | string | number;
  height?: StackSize | string | number;
  grow?: boolean;
  shrink?: boolean;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  scrollable?: boolean;
  padding?: StackSpacing | string;
  margin?: StackSpacing | string;
  centered?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
}>`
  /* Base flex layout */
  display: flex;
  flex-direction: ${({ direction }) => direction || stackDefaults.direction};
  align-items: ${({ align }) => align || stackDefaults.align};
  justify-content: ${({ justify }) => justify || stackDefaults.justify};
  flex-wrap: ${({ wrap }) => wrap || stackDefaults.wrap};
  gap: ${({ spacing: spacingProp }) => getSpacingValue(spacingProp)};
  
  /* Size constraints */
  width: ${({ width }) => getSizeValue(width)};
  height: ${({ height }) => getSizeValue(height)};
  
  ${({ minWidth }) => minWidth && css`min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth};`}
  ${({ maxWidth }) => maxWidth && css`max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};`}
  ${({ minHeight }) => minHeight && css`min-height: ${typeof minHeight === 'number' ? `${minHeight}px` : minHeight};`}
  ${({ maxHeight }) => maxHeight && css`max-height: ${typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight};`}
  
  /* Flex behavior */
  ${({ grow = stackDefaults.grow, shrink = stackDefaults.shrink }) => getFlexStyles(grow, shrink)}
  
  /* Spacing */
  ${({ padding }) => padding && css`padding: ${getSpacingValue(padding as StackSpacing)};`}
  ${({ margin }) => margin && css`margin: ${getSpacingValue(margin as StackSpacing)};`}
  
  /* Centering */
  ${({ centered = stackDefaults.centered }) => getCenteredStyles(centered)}
  
  /* Background and border */
  ${({ backgroundColor }) => backgroundColor && css`background-color: ${backgroundColor};`}
  ${({ borderRadius: radiusProp }) => radiusProp && css`border-radius: ${getBorderRadiusValue(radiusProp)};`}
  
  /* Scrollable behavior */
  ${({ scrollable = stackDefaults.scrollable }) => getScrollableStyles(scrollable)}
  
  /* Smooth transitions for interactive elements */
  transition: ${stackConfig.transition};
  
  /* Ensure proper box-sizing */
  box-sizing: border-box;
  
  /* Handle edge cases */
  min-width: 0; /* Prevent flex items from overflowing */
  min-height: 0; /* Prevent flex items from overflowing */
`;

// Export tokens and defaults for reuse
export { 
  spacingTokens, 
  borderRadiusTokens, 
  sizeTokens, 
  stackConfig, 
  stackDefaults,
  getSpacingValue,
  getSizeValue,
  getBorderRadiusValue,
};
