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
   * ARIA label for accessibility
   */
  'aria-label'?: string;
}
