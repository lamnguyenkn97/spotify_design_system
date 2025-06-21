import React, { ImgHTMLAttributes } from 'react';

// Simplified variants for Spotify use cases
export type ImageVariant = 'album' | 'avatar' | 'playlist' | 'default';

export type ImageSize = 'sm' | 'md' | 'lg';

export type ImageShape = 'square' | 'circle' | 'rounded';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  /**
   * Image source URL
   */
  src: string;
  
  /**
   * Alt text for accessibility
   */
  alt: string;
  
  /**
   * Size of the image using design tokens
   * @default 'md'
   */
  size?: ImageSize;
  
  /**
   * Shape of the image
   * @default 'rounded'
   */
  shape?: ImageShape;
  
  /**
   * Variant determines the placeholder icon and styling
   * @default 'default'
   */
  variant?: ImageVariant;
  
  /**
   * Fallback image URL if primary src fails
   */
  fallbackSrc?: string;
  
  /**
   * Whether the image should be lazy loaded
   * @default true
   */
  lazy?: boolean;
  
  /**
   * Custom className for styling
   */
  className?: string;
}
