import React from 'react';
import { ImageSize } from '../../atoms/Image/Image.types';

export type CardVariant = 'default' | 'artist';
export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  variant?: CardVariant;
  size?: CardSize;
  imageSize?: ImageSize;
  onPlayClick?: () => void;
  showPlayButton?: boolean;
  className?: string;
  'aria-label'?: string;
}
