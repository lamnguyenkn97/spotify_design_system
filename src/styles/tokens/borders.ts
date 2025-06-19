/**
 * Border tokens for consistent border styles across the design system
 */

export const borders = {
  // Border widths
  width: {
    none: '0',
    thin: '1px',
    medium: '2px',
    thick: '3px',
  },
  
  // Border styles
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    none: 'none',
  },
  
  // Common border combinations
  default: {
    width: '1px',
    style: 'solid',
  },
  
  // Shorthand border values for common use cases
  thin: '1px solid',
  medium: '2px solid',
  thick: '3px solid',
} as const; 