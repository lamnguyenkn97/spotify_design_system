import React, { HTMLAttributes } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type IconSize = 'sm' | 'md' | 'lg';

export type IconColor = 'primary' | 'muted' | 'brand' | 'inherit' | string;

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /**
   * FontAwesome icon definition
   */
  icon: FontAwesomeIconProps['icon'];
  
  /**
   * Size of the icon
   * @default 'md'
   */
  size?: IconSize;
  
  /**
   * Color of the icon - can be theme color or custom value
   * @default 'inherit'
   */
  color?: IconColor;
  
  /**
   * Background color of the icon container
   * @default 'transparent'
   */
  backgroundColor?: string;
  
  /**
   * Whether the icon should have a circular background
   * @default false
   */
  circular?: boolean;
  
  /**
   * Whether the icon is clickable (adds hover effects)
   * @default false
   */
  clickable?: boolean;
  
  /**
   * Whether the icon is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the icon should spin (for loading states)
   * @default false
   */
  spin?: boolean;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
}
