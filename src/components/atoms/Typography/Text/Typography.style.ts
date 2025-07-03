import styled from 'styled-components';
import { 
  colors, 
  fontSizes, 
  fontFamilies, 
  fontWeights, 
  lineHeights, 
  letterSpacing, 
  textTransforms 
} from '../../../../styles';
import { TypographyProps } from './Typography.types';

// Typography design tokens - centralized configuration using global tokens
const typographyTokens = {
  // Font family from design tokens
  fontFamily: {
    primary: fontFamilies.primary,
    fallback: fontFamilies.fallback,
    mono: fontFamilies.mono,
  },
  
  // Size mappings using design tokens
  size: {
    sm: fontSizes.sm,    // 0.875rem (14px)
    md: fontSizes.md,    // 1rem (16px)
    lg: fontSizes.lg,    // 1.125rem (18px)
    xl: fontSizes.xl,    // 2rem (32px)
    xxl: fontSizes.xxl,  // 3rem (48px)
    '2xl': fontSizes['2xl'], // 4rem (64px)
  },
  
  // Weight mappings using design tokens
  weight: {
    light: fontWeights.light,       // 300
    regular: fontWeights.regular,   // 400
    medium: fontWeights.medium,     // 500
    bold: fontWeights.bold,         // 700
  },
  
  // Color mappings - semantic usage from design tokens
  color: {
    primary: colors.primary.white,           // Main text
    secondary: colors.grey.grey6,            // Secondary text
    muted: colors.grey.grey4,                // Subtle text
    success: colors.decorative.evergreen,    // Success states (green)
    warning: colors.decorative.mellowYellow, // Warning states (yellow)
    error: colors.decorative.redRedWine,     // Error states
  },
  
  // Line height scale using design tokens
  lineHeight: {
    tight: lineHeights.tight,       // 1.2 - Headings
    snug: lineHeights.snug,         // 1.375 - Subheadings
    normal: lineHeights.normal,     // 1.5 - Body text
    relaxed: lineHeights.relaxed,   // 1.625 - Large text blocks
  },
  
  // Letter spacing using design tokens
  letterSpacing: {
    tighter: letterSpacing.tighter, // -0.02em - Large titles
    tight: letterSpacing.tight,     // -0.01em - Headings
    normal: letterSpacing.normal,   // 0 - Body text
    wide: letterSpacing.wide,       // 0.01em - Captions
  },
  
  // Text transforms using design tokens
  textTransform: {
    none: textTransforms.none,
    uppercase: textTransforms.uppercase,
  },
} as const;

export const StyledTypography = styled.span.withConfig({
  shouldForwardProp: (prop) => !['variant', 'size', 'weight', 'color'].includes(prop),
})<TypographyProps>`
  font-family: ${typographyTokens.fontFamily.primary};
  margin: 0;
  padding: 0;
  
  /* Size styling using design tokens */
  font-size: ${({ size = 'md' }) => `${typographyTokens.size[size]}rem`};
  
  /* Weight styling using design tokens */
  font-weight: ${({ weight = 'regular' }) => typographyTokens.weight[weight]};
  
  /* Color styling using design tokens */
  color: ${({ color = 'primary' }) => typographyTokens.color[color]};
  
  /* Variant-specific styling using design tokens */
  ${({ variant = 'body' }) => {
    switch (variant) {
      case 'title':
        return `
          font-weight: ${typographyTokens.weight.bold};
          line-height: ${typographyTokens.lineHeight.tight};
          letter-spacing: ${typographyTokens.letterSpacing.tighter};
        `;
      case 'heading':
        return `
          font-weight: ${typographyTokens.weight.medium};
          line-height: ${typographyTokens.lineHeight.tight};
          letter-spacing: ${typographyTokens.letterSpacing.tight};
        `;
      case 'body':
        return `
          line-height: ${typographyTokens.lineHeight.normal};
          letter-spacing: ${typographyTokens.letterSpacing.normal};
        `;
      case 'caption':
        return `
          line-height: ${typographyTokens.lineHeight.normal};
          letter-spacing: ${typographyTokens.letterSpacing.wide};
          font-weight: ${typographyTokens.weight.medium};
        `;
      default:
        return `
          line-height: ${typographyTokens.lineHeight.normal};
          letter-spacing: ${typographyTokens.letterSpacing.normal};
        `;
    }
  }}
`;

// Export tokens for reuse in other components
export { typographyTokens };
