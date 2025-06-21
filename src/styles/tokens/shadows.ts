/**
 * Shadow tokens for consistent depth and elevation across the design system
 */

export const shadows = {
  // Elevation levels
  none: 'none',
  subtle: '0 1px 3px rgba(0, 0, 0, 0.1)',
  small: '0 2px 6px rgba(0, 0, 0, 0.2)',
  medium: '0 4px 12px rgba(0, 0, 0, 0.15)',
  large: '0 8px 24px rgba(0, 0, 0, 0.2)',
  xl: '0 16px 48px rgba(0, 0, 0, 0.25)',
  
  // Interactive shadows
  hover: '0 2px 8px rgba(0, 0, 0, 0.3)',
  focus: '0 0 0 2px rgba(29, 185, 84, 0.3)', // Spotify green focus ring
  pressed: '0 1px 2px rgba(0, 0, 0, 0.2)',
  
  // Component-specific shadows
  button: {
    default: '0 2px 6px rgba(0, 0, 0, 0.2)',
    hover: '0 2px 8px rgba(0, 0, 0, 0.3)',
    pressed: '0 1px 2px rgba(0, 0, 0, 0.2)',
  },
  
  card: {
    default: '0 4px 12px rgba(0, 0, 0, 0.15)',
    hover: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
  
  slider: {
    thumb: '0 2px 6px rgba(0, 0, 0, 0.2)',
    thumbHover: '0 2px 8px rgba(0, 0, 0, 0.3)',
  },
} as const; 