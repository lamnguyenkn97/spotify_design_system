import React from 'react';

export interface EqualizerProps {
  /** Whether the equalizer is active/playing */
  isPlaying?: boolean;
  /** Color of the bars (defaults to brand green) */
  color?: string;
  /** Size of the equalizer */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

