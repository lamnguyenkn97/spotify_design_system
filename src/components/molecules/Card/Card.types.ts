import React from 'react';

export type CardSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'default' | 'artist';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  size?: CardSize;
  variant?: CardVariant;
  onPlayClick?: () => void;
  showPlayButton?: boolean;
  loading?: boolean;
} 