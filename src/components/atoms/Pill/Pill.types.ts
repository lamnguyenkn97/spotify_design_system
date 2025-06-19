import React, { ButtonHTMLAttributes } from 'react';

export type PillSize = 'sm' | 'md' | 'lg';

export type PillVariant = 'default' | 'selected' | 'filter';

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
   * Whether the pill is selected/active
   * @default false
   */
  selected?: boolean;
  
  /**
   * Whether the pill is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the pill is dismissible (shows X icon for filters)
   * @default false
   */
  dismissible?: boolean;
  
  /**
   * Callback when dismiss button is clicked
   */
  onDismiss?: () => void;
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Custom className for additional styling
   */
  className?: string;
} 