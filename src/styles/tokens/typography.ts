import { css } from 'styled-components';
import { fonts } from './fonts';

export const fontFaces = css`
  /* Black */
  @font-face {
    font-family: 'Circular-Black';
    src: url(${fonts.circular.black}) format('opentype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-BlackItalic';
    src: url(${fonts.circular.blackItalic}) format('opentype');
    font-weight: 900;
    font-style: italic;
  }

  /* Bold */
  @font-face {
    font-family: 'Circular-Bold';
    src: url(${fonts.circular.bold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-BoldItalic';
    src: url(${fonts.circular.boldItalic}) format('opentype');
    font-weight: 700;
    font-style: italic;
  }

  /* Book */
  @font-face {
    font-family: 'Circular-Book';
    src: url(${fonts.circular.book}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-BookItalic';
    src: url(${fonts.circular.bookItalic}) format('opentype');
    font-weight: 400;
    font-style: italic;
  }

  /* Light */
  @font-face {
    font-family: 'Circular-Light';
    src: url(${fonts.circular.light}) format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-LightItalic';
    src: url(${fonts.circular.lightItalic}) format('opentype');
    font-weight: 300;
    font-style: italic;
  }

  /* Medium */
  @font-face {
    font-family: 'Circular-Medium';
    src: url(${fonts.circular.medium}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-MediumItalic';
    src: url(${fonts.circular.mediumItalic}) format('opentype');
    font-weight: 500;
    font-style: italic;
  }
`;

export const fontSizes = {
  sm: '0.875',
  md: '1',
  lg: '1.125',
  xl: '2',
  xxl: '3',
  '2xl': '4',
};

// Font family design tokens
export const fontFamilies = {
  primary: 'Circular, -apple-system, BlinkMacSystemFont, sans-serif',
  fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  mono: 'Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
} as const;

// Font weight design tokens (matching Circular font weights)
export const fontWeights = {
  light: 300,    // Circular Light
  regular: 400,  // Circular Book
  medium: 500,   // Circular Medium
  bold: 700,     // Circular Bold
  black: 900,    // Circular Black
} as const;

// Line height design tokens for optimal readability
export const lineHeights = {
  tight: 1.2,    // Headings and titles
  snug: 1.375,   // Subheadings
  normal: 1.5,   // Body text
  relaxed: 1.625, // Large text blocks
  loose: 2,      // Spaced content
} as const;

// Letter spacing design tokens for typography hierarchy
export const letterSpacing = {
  tighter: '-0.02em', // Large titles
  tight: '-0.01em',   // Headings
  normal: '0',        // Body text
  wide: '0.01em',     // Captions and small text
  wider: '0.025em',   // All caps text
  widest: '0.1em',    // Tracked text
} as const;

// Text transform tokens
export const textTransforms = {
  none: 'none',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
} as const;
