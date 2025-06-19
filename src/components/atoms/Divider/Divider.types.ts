import { HTMLAttributes } from 'react';

export type DividerVariant = 'solid' | 'subtle';

export type DividerOrientation = 'horizontal' | 'vertical';

export type DividerColor = 'muted' | 'subtle' | string;

export type DividerSpacing = 'sm' | 'md' | 'lg';

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
   * Whether the divider should be full width/height
   * @default true
   */
  fullWidth?: boolean;
}
