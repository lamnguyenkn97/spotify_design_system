import React, { ButtonHTMLAttributes } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type PillSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type PillVariant = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'brand' 
  | 'outline'
  | 'ghost';

export type PillState = 'default' | 'selected' | 'disabled' | 'loading' | 'pressed';

export type PillShape = 'rounded' | 'pill' | 'square';

export interface PillProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * Text content of the pill
   */
  label: string;
  
  /**
   * Size of the pill
   * @default 'md'
   */
  size?: PillSize;
  
  /**
   * Visual variant of the pill
   * @default 'default'
   */
  variant?: PillVariant;
  
  /**
   * Current state of the pill
   * @default 'default'
   */
  state?: PillState;
  
  /**
   * Shape/border radius style
   * @default 'pill'
   */
  shape?: PillShape;
  
  /**
   * Whether the pill is selected
   * @default false
   */
  selected?: boolean;
  
  /**
   * Whether the pill is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the pill is in loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Icon to display on the left side
   */
  leftIcon?: IconProp;
  
  /**
   * Icon to display on the right side
   */
  rightIcon?: IconProp;
  
  /**
   * Whether the pill is dismissible (shows X icon)
   * @default false
   */
  dismissible?: boolean;
  
  /**
   * Callback when dismiss button is clicked
   */
  onDismiss?: () => void;
  
  /**
   * Badge content to display (number or text)
   */
  badge?: string | number;
  
  /**
   * Position of the badge
   * @default 'top-right'
   */
  badgePosition?: 'top-right' | 'top-left' | 'inline';
  
  /**
   * Whether the pill takes full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Whether the pill is interactive (clickable)
   * @default true
   */
  interactive?: boolean;
  
  /**
   * Custom background color (overrides variant)
   */
  customColor?: string;
  
  /**
   * Custom text color
   */
  customTextColor?: string;
  
  /**
   * Tooltip text on hover
   */
  tooltip?: string;
  
  /**
   * Whether to animate on mount
   * @default false
   */
  animate?: boolean;
  
  /**
   * Animation delay in milliseconds
   * @default 0
   */
  animationDelay?: number;
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Custom className for additional styling
   */
  className?: string;
  
  /**
   * Children elements (alternative to label)
   */
  children?: React.ReactNode;
  
  /**
   * Test ID for automated testing
   */
  testId?: string;
} 