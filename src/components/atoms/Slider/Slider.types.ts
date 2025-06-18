import React, { InputHTMLAttributes } from 'react';

export type SliderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SliderVariant = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'brand'
  | 'gradient';

export type SliderOrientation = 'horizontal' | 'vertical';

export interface SliderMark {
  value: number;
  label?: string;
  style?: React.CSSProperties;
}

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Current value of the slider
   */
  value: number;
  
  /**
   * Minimum value
   * @default 0
   */
  min?: number;
  
  /**
   * Maximum value  
   * @default 100
   */
  max?: number;
  
  /**
   * Step increment
   * @default 1
   */
  step?: number;
  
  /**
   * Size of the slider
   * @default 'md'
   */
  size?: SliderSize;
  
  /**
   * Visual variant of the slider
   * @default 'default'
   */
  variant?: SliderVariant;
  
  /**
   * Orientation of the slider
   * @default 'horizontal'
   */
  orientation?: SliderOrientation;
  
  /**
   * Whether the slider is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the slider is in loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Whether to show value tooltip on hover/drag
   * @default false
   */
  showTooltip?: boolean;
  
  /**
   * Custom tooltip formatter
   */
  tooltipFormatter?: (value: number) => string;
  
  /**
   * Whether to show current value label
   * @default false
   */
  showValue?: boolean;
  
  /**
   * Position of the value label
   * @default 'top'
   */
  valueLabelPosition?: 'top' | 'bottom' | 'left' | 'right';
  
  /**
   * Marks to display on the slider track
   */
  marks?: SliderMark[] | number[];
  
  /**
   * Whether to show marks
   * @default false
   */
  showMarks?: boolean;
  
  /**
   * Custom track color (overrides variant)
   */
  trackColor?: string;
  
  /**
   * Custom thumb color (overrides variant)
   */
  thumbColor?: string;
  
  /**
   * Custom background color
   */
  backgroundColor?: string;
  
  /**
   * Whether to animate transitions
   * @default true
   */
  animate?: boolean;
  
  /**
   * Width of the slider (for horizontal) or height (for vertical)
   */
  length?: string | number;
  
  /**
   * Label for the slider
   */
  label?: string;
  
  /**
   * Helper text below the slider
   */
  helperText?: string;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Whether the slider is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Callback when value changes
   */
  onChange: (value: number) => void;
  
  /**
   * Callback when dragging starts
   */
  onChangeStart?: (value: number) => void;
  
  /**
   * Callback when dragging ends
   */
  onChangeEnd?: (value: number) => void;
  
  /**
   * Custom className for additional styling
   */
  className?: string;
  
  /**
   * Test ID for automated testing
   */
  testId?: string;
}
