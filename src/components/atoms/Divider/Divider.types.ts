import { HTMLAttributes } from 'react';

export type DividerVariant = 'solid' | 'dashed' | 'dotted' | 'double';

export type DividerOrientation = 'horizontal' | 'vertical';

export type DividerColor = 'primary' | 'secondary' | 'muted' | 'brand' | string;

export type DividerSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface DividerProps extends Omit<HTMLAttributes<HTMLHRElement>, 'color'> {
  /**
   * The orientation of the divider
   * @default 'horizontal'
   */
  orientation?: DividerOrientation;
  
  /**
   * The thickness of the divider line in pixels
   * @default 1
   */
  thickness?: number;
  
  /**
   * The color of the divider. Can use preset colors or custom hex/rgb values
   * @default 'muted'
   */
  color?: DividerColor;
  
  /**
   * The style variant of the divider line
   * @default 'solid'
   */
  variant?: DividerVariant;
  
  /**
   * The spacing around the divider
   * @default 'md'
   */
  spacing?: DividerSpacing;
  
  /**
   * Custom spacing override (CSS value)
   */
  customSpacing?: string;
  
  /**
   * The length of the divider (width for horizontal, height for vertical)
   * @default '100%'
   */
  length?: string | number;
  
  /**
   * Whether the divider should be full width/height
   * @default true
   */
  fullSize?: boolean;
}
