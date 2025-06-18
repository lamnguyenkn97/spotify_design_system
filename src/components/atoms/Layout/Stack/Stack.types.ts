import React, { HTMLAttributes } from 'react';

export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type StackSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

export type StackJustify = 
  | 'start' 
  | 'center' 
  | 'end' 
  | 'space-between' 
  | 'space-around' 
  | 'space-evenly'
  | 'stretch';

export type StackWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type StackSize = 'auto' | 'full' | 'fit' | 'min' | 'max';

export interface StackProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The direction of the flex layout
   * @default 'column'
   */
  direction?: StackDirection;
  
  /**
   * The spacing between stack items using design tokens
   * @default 'md'
   */
  spacing?: StackSpacing;
  
  /**
   * How to align items along the cross axis
   * @default 'stretch'
   */
  align?: StackAlign;
  
  /**
   * How to justify items along the main axis
   * @default 'start'
   */
  justify?: StackJustify;
  
  /**
   * Whether items should wrap
   * @default 'nowrap'
   */
  wrap?: StackWrap;
  
  /**
   * The HTML element to render as
   * @default 'div'
   */
  as?: keyof React.JSX.IntrinsicElements;
  
  /**
   * Width sizing behavior
   * @default 'auto'
   */
  width?: StackSize | string | number;
  
  /**
   * Height sizing behavior
   * @default 'auto'
   */
  height?: StackSize | string | number;
  
  /**
   * Whether to grow to fill available space
   * @default false
   */
  grow?: boolean;
  
  /**
   * Whether to shrink when needed
   * @default true
   */
  shrink?: boolean;
  
  /**
   * Minimum width constraint
   */
  minWidth?: string | number;
  
  /**
   * Maximum width constraint
   */
  maxWidth?: string | number;
  
  /**
   * Minimum height constraint
   */
  minHeight?: string | number;
  
  /**
   * Maximum height constraint
   */
  maxHeight?: string | number;
  
  /**
   * Whether to create a scrollable container
   * @default false
   */
  scrollable?: boolean;
  
  /**
   * Padding around the entire stack
   */
  padding?: StackSpacing | string;
  
  /**
   * Margin around the entire stack
   */
  margin?: StackSpacing | string;
  
  /**
   * Whether to center the stack within its container
   * @default false
   */
  centered?: boolean;
  
  /**
   * Background color (design token or custom)
   */
  backgroundColor?: string;
  
  /**
   * Border radius using design tokens or custom value
   */
  borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | string;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
  
  /**
   * Custom className for additional styling
   */
  className?: string;
} 