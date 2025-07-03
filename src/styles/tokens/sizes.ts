/**
 * Size tokens for consistent component dimensions across the design system
 */

export const sizes = {
  // Component heights
  height: {
    xs: '16px',
    sm: '20px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    '2xl': '48px',
  },

  // Container heights for molecules
  container: {
    banner: '240px',
    card: '320px',
    header: '64px',
    footer: 'auto',
  },

  // Card-specific sizes
  card: {
    width: {
      sm: '160px',
      md: '200px',
    },
    image: {
      borderRadius: '8px',
    },
  },

  // Transform values for interactive effects
  transform: {
    lift: {
      xs: 'translateY(-2px)',
      sm: 'translateY(-4px)',
      md: 'translateY(-8px)',
      lg: 'translateY(-12px)',
    },
  },

  // Icon and thumb sizes
  icon: {
    xs: '8px',
    sm: '10px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
  },

  // Slider-specific sizes
  slider: {
    track: {
      height: '4px',
    },
    thumb: {
      small: '12px',
      medium: '16px',
      large: '20px',
    },
    container: {
      height: '24px',
    },
  },

  // Avatar component sizes
  avatar: {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '56px',
    xl: '80px',
  },

  // Text sizes for various components
  text: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '24px',
  },

  // Interactive area minimum (for accessibility)
  interactive: {
    minimum: '44px', // WCAG recommended minimum touch target
  },

  // Positioning values
  position: {
    center: '50%',
  },

  // Z-index layering system
  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    modal: 500,
    tooltip: 1000,
    popover: 1100,
    overlay: 1200,
  },

  // Max width constraints
  maxWidth: {
    tooltip: '320px',
    popover: '400px',
    modal: '600px',
  },
} as const;
