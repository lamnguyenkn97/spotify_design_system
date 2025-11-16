/**
 * Animation tokens for consistent interactions across the design system
 * These values ensure a cohesive user experience across all components
 */

import { keyframes as styledKeyframes } from 'styled-components';

export const animations = {
  // Transition durations
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '750ms',
  },

  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    // Custom Spotify-style easings
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    sharp: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Scale transformations
  scale: {
    none: '1',
    subtle: '1.02',
    small: '1.05',
    medium: '1.07',
    large: '1.1',
    xl: '1.15',
    // Interactive states
    pressed: '0.98', // For button active/pressed state
  },

  // Brightness transformations for filter effects
  brightness: {
    none: '1',
    subtle: '1.05',
    small: '1.1',
    medium: '1.15',
    large: '1.2',
    // Dimming effects
    dim: '0.9',
    dimMedium: '0.8',
    dimLarge: '0.7',
  },

  // Font size scaling for interactive elements
  fontScale: {
    none: '1',
    subtle: '1.02',
    small: '1.05',
    medium: '1.1',
  },

  // Common transition combinations
  transitions: {
    // Basic transitions
    all: 'all 300ms ease-in-out',
    allFast: 'all 150ms ease-in-out',
    allSlow: 'all 500ms ease-in-out',
    
    // Specific property transitions
    transform: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    opacity: 'opacity 200ms ease-in-out',
    colors: 'background-color 200ms ease-in-out, color 200ms ease-in-out, border-color 200ms ease-in-out',
    
    // Interactive element transitions
    button: 'all 300ms ease-in-out',
    card: 'transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 200ms ease-in-out',
    input: 'border-color 200ms ease-in-out, box-shadow 200ms ease-in-out',
  },

  // Hover effects configuration
  hover: {
    // Scale-based hovers
    scaleSubtle: {
      transform: 'scale(1.02)',
      transition: 'transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    scaleSmall: {
      transform: 'scale(1.05)',
      transition: 'transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    scaleMedium: {
      transform: 'scale(1.07)',
      transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    
    // Lift effects (for cards, etc.)
    lift: {
      transform: 'translateY(-2px)',
      transition: 'transform 200ms ease-out',
    },
    liftMedium: {
      transform: 'translateY(-4px)',
      transition: 'transform 200ms ease-out',
    },
    
    // Glow effects
    glow: {
      transition: 'box-shadow 200ms ease-in-out',
      boxShadow: '0 0 0 2px rgba(29, 185, 84, 0.3)', // Using Spotify green
    },
  },

  // Loading and state animations
  loading: {
    spin: 'spin 1s linear infinite',
    pulse: 'pulse 2s infinite',
    bounce: 'bounce 1s infinite',
  },

  // Skeleton loading animations
  skeleton: {
    pulse: {
      duration: '1.5s',
      easing: 'ease-in-out',
      iteration: 'infinite',
      opacity: {
        start: '1',
        middle: '0.4',
        end: '1',
      },
    },
    wave: {
      duration: '2s',
      easing: 'linear',
      iteration: 'infinite',
      transform: {
        start: 'translateX(-100%)',
        middle: 'translateX(100%)',
        end: 'translateX(-100%)',
      },
    },
  },

  // Equalizer animations
  equalizer: {
    duration: '800ms', // 0.8s animation cycle
    easing: 'ease-in-out',
    iteration: 'infinite',
    delay: {
      base: '0s',
      step: '200ms', // Delay increment between bars (0.2s)
    },
    scale: {
      min: '0.3', // Minimum bar height (30%)
      max: '1', // Maximum bar height (100%)
    },
    transition: '150ms', // Fast transition for state changes (matches duration.fast)
  },
} as const;

// Properly defined keyframes using styled-components
export const keyframes = {
  spin: styledKeyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `,
  pulse: styledKeyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  `,
  bounce: styledKeyframes`
    0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
    40%, 43% { transform: translateY(-8px); }
    70% { transform: translateY(-4px); }
    90% { transform: translateY(-2px); }
  `,
  fadeIn: styledKeyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
  slideUp: styledKeyframes`
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  `,
  // Skeleton animations
  skeletonPulse: styledKeyframes`
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  `,
  skeletonWave: styledKeyframes`
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  `,
};

// Export individual sections for easier imports
export const { duration, easing, scale, brightness, fontScale, transitions, hover, loading } = animations; 