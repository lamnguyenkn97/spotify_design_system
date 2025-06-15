import React, { ImgHTMLAttributes } from 'react';

export type ImageSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type ImageShape = 'square' | 'circle' | 'rounded' | 'rectangle';

export type ImageFit = 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';

export type ImagePlaceholder = 'blur' | 'empty' | 'skeleton' | 'custom';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height' | 'loading'> {
  /**
   * Image source URL
   */
  src: string;
  
  /**
   * Alt text for accessibility
   */
  alt: string;
  
  /**
   * Width of the image - can be preset size or custom value
   */
  width?: ImageSize | string | number;
  
  /**
   * Height of the image - can be preset size or custom value
   */
  height?: ImageSize | string | number;
  
  /**
   * Predefined shape of the image
   * @default 'rectangle'
   */
  shape?: ImageShape;
  
  /**
   * Aspect ratio of the image (e.g., "16/9", "1/1", 1.5)
   * @default undefined
   */
  aspectRatio?: string | number;
  
  /**
   * How the image should fit within its container
   * @default 'cover'
   */
  objectFit?: ImageFit;
  
  /**
   * Fallback image URL if primary src fails
   */
  fallbackSrc?: string;
  
  /**
   * Type of placeholder to show while loading
   * @default 'blur'
   */
  placeholder?: ImagePlaceholder;
  
  /**
   * Custom placeholder content (for 'custom' placeholder type)
   */
  placeholderContent?: React.ReactNode;
  
  /**
   * Type of default placeholder to use for errors/missing images
   * @default 'image'
   */
  placeholderType?: 'avatar' | 'album' | 'playlist' | 'image' | 'broken' | 'spotify';
  
  /**
   * Size of placeholder icon (FontAwesome size)
   * @default '3x'
   */
  placeholderIconSize?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  
  /**
   * Whether to show a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Whether the image should be lazy loaded
   * @default true
   */
  lazy?: boolean;
  
  /**
   * Error callback when image fails to load
   */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  
  /**
   * Load callback when image loads successfully
   */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  
  /**
   * Custom className for styling
   */
  className?: string;
}
