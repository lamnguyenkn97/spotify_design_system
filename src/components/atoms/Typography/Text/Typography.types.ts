import React from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption';

export type TypographyWeight = 'light' | 'regular' | 'medium' | 'bold';

export type TypographyColor = 'primary' | 'secondary' | 'muted' | 'danger';

export interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
  component?: React.ElementType;
  children: React.ReactNode;
  className?: string;
} 