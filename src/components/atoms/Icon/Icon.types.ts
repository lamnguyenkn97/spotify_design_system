import React, { HTMLAttributes } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type IconSize = 'xs' | 'small' | 'medium' | 'large' | 'xl';

export type IconColor = 'primary' | 'secondary' | 'muted' | 'brand' | 'error' | 'warning' | 'success' | 'inherit' | string;

export type IconVariant = 'default' | 'rounded' | 'outlined' | 'filled';

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /**
   * FontAwesome icon definition
   */
  icon: FontAwesomeIconProps['icon'];
  
  /**
   * Size of the icon
   * @default 'medium'
   */
  size?: IconSize;
  
  /**
   * Color of the icon - can be theme color or custom value
   * @default 'inherit'
   */
  color?: IconColor;
  
  /**
   * Color on hover state
   */
  hoverColor?: IconColor;
  
  /**
   * Visual variant of the icon
   * @default 'default'
   */
  variant?: IconVariant;
  
  /**
   * Background color when using filled or rounded variants
   */
  backgroundColor?: IconColor;
  
  /**
   * Whether the icon is clickable
   * @default false
   */
  clickable?: boolean;
  
  /**
   * FontAwesome spin animation
   * @default false
   */
  spin?: boolean;
  
  /**
   * FontAwesome pulse animation
   * @default false
   */
  pulse?: boolean;
  
  /**
   * FontAwesome flip transformation
   */
  flip?: 'horizontal' | 'vertical' | 'both';
  
  /**
   * FontAwesome rotation
   */
  rotate?: 90 | 180 | 270;
  
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
