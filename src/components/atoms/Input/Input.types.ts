import React, { InputHTMLAttributes, ReactNode } from 'react';

// SIMPLIFIED: Only essential props for Spotify's actual needs
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label text for the input
   */
  label?: string;
  
  /**
   * Message to display below the input (helper text or error message)
   */
  message?: string;
  
  /**
   * Whether the message is an error message (changes styling)
   * @default false
   */
  error?: boolean;
  
  /**
   * Whether the input takes full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Icon to display on the left side (typically for search)
   */
  leftIcon?: ReactNode;
  
  /**
   * Callback for search functionality (triggered on Enter key or search icon click)
   */
  onSearch?: (value: string) => void;
  
  /**
   * Callback when input value changes
   */
  onValueChange?: (value: string) => void;
  
  /**
   * Custom className for styling
   */
  className?: string;
} 