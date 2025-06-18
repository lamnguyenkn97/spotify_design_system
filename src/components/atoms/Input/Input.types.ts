import React, { InputHTMLAttributes } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type InputVariant = 'default' | 'search' | 'password' | 'number' | 'email' | 'url';

export type InputState = 'default' | 'error' | 'success' | 'warning' | 'disabled';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Size of the input field
   * @default 'md'
   */
  size?: InputSize;
  
  /**
   * Variant of the input field
   * @default 'default'
   */
  variant?: InputVariant;
  
  /**
   * Visual state of the input
   * @default 'default'
   */
  state?: InputState;
  
  /**
   * Label text for the input
   */
  label?: string;
  
  /**
   * Helper text below the input
   */
  helperText?: string;
  
  /**
   * Error message to display
   */
  errorMessage?: string;
  
  /**
   * Success message to display
   */
  successMessage?: string;
  
  /**
   * Warning message to display
   */
  warningMessage?: string;
  
  /**
   * Icon to display on the left side
   */
  leftIcon?: IconProp;
  
  /**
   * Icon to display on the right side
   */
  rightIcon?: IconProp;
  
  /**
   * Size of the icons
   * @default 'sm'
   */
  iconSize?: InputSize;
  
  /**
   * Whether the input takes full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Whether to show a clear button (X) when input has value
   * @default false
   */
  clearable?: boolean;
  
  /**
   * Callback when clear button is clicked
   */
  onClear?: () => void;
  
  /**
   * Callback for search functionality (for search variant)
   */
  onSearch?: (value: string) => void;
  
  /**
   * Whether to show password toggle (for password variant)
   * @default true
   */
  showPasswordToggle?: boolean;
  
  /**
   * Custom className for styling
   */
  className?: string;
  
  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
} 