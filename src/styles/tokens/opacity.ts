/**
 * Opacity tokens for consistent transparency values across the design system
 */

export const opacity = {
  // Disabled states
  disabled: 0.5,
  
  // Interactive overlays
  overlay: {
    subtle: 0.1,
    medium: 0.2,
    strong: 0.3,
  },
  
  // Hover states
  hover: {
    subtle: 0.8,
    medium: 0.6,
    strong: 0.4,
  },
  
  // Loading states
  loading: 0.7,
} as const; 