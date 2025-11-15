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
    header: '100px',
    musicPlayer: '150px', // Music player container height
    footer: 'auto',
  },

  // Card-specific sizes
  card: {
    width: {
      sm: '160px',
      md: '200px',
      category: '200px',
    },
    height: {
      category: '120px',
    },
    image: {
      borderRadius: '8px',
    },
    overlay: {
      width: '100px',
      height: '100px',
      borderRadius: '4px',
      rotation: '25deg',
      bottomOffset: '-20px',
      rightOffset: '-40px',
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
    musicPlayer: '600px', // Minimum width for music player
  },

  // Music player specific sizes
  musicPlayer: {
    leftSection: {
      maxWidth: '30%', // Maximum width for now playing section
    },
    centerSection: {
      minWidth: '400px',
      maxWidth: '600px',
    },
    rightSection: {
      width: '300px', // Fixed width for utility icons and volume
    },
    progressBar: {
      clickAreaWidth: '80%', // Width of clickable progress area
      volumeMinWidth: '80px', // Minimum width for volume slider
    },
  },
} as const;
