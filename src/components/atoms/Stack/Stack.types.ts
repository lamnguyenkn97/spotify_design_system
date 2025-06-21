import React, { HTMLAttributes } from 'react';

// Simplified types for essential Spotify use cases
export type StackDirection = 'row' | 'column';

export type StackSpacing = 'sm' | 'md' | 'lg';

export type StackAlign = 'start' | 'center' | 'end' | 'stretch';

export type StackJustify = 'start' | 'center' | 'end' | 'space-between';

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
   * Children elements
   */
  children: React.ReactNode;
  
  /**
   * Custom className for additional styling
   */
  className?: string;
} 