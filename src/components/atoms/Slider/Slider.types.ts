import { InputHTMLAttributes } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
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
   * Whether the slider is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Callback when value changes
   */
  onChange: (value: number) => void;
  
  /**
   * Custom className for additional styling
   */
  className?: string;

  /**
   * Optional icon to use as the slider thumb
   */
  thumbIcon?: IconProp;
}
