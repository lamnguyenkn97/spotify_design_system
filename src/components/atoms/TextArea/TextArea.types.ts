import React, { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'> {
  /**
   * Label text for the textarea
   */
  label?: string;
  
  /**
   * Message to display below the textarea (helper text or error message)
   */
  message?: string;
  
  /**
   * Whether the message is an error message (changes styling)
   * @default false
   */
  error?: boolean;
  
  /**
   * Whether the textarea takes full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Number of visible text lines (min height)
   * @default 3
   */
  rows?: number;
  
  /**
   * Maximum number of rows before scrolling
   */
  maxRows?: number;
  
  /**
   * Whether to auto-resize the textarea as user types
   * @default false
   */
  autoResize?: boolean;
  
  /**
   * Callback when textarea value changes
   */
  onValueChange?: (value: string) => void;
  
  /**
   * Custom className for styling
   */
  className?: string;
}

