import React from 'react';

// Simplified variants based on Spotify's actual usage
export type TypographyVariant =
  | 'title'    // Page titles, album names
  | 'heading'  // Section headings, artist names
  | 'body'     // Main content, descriptions
  | 'caption'  // Small text, metadata

// Size scale using design tokens
export type TypographySize = 
  | 'sm'   // 14px - captions, small text
  | 'md'   // 16px - body text
  | 'lg'   // 18px - larger body text
  | 'xl'   // 32px - headings
  | 'xxl'  // 48px - major headings
  | '2xl'; // 64px - page titles

// Font weights matching Circular font family
export type TypographyWeight = 
  | 'light'   // 300
  | 'regular' // 400 (Book)
  | 'medium'  // 500
  | 'bold';   // 700

// Semantic color variants
export type TypographyColor = 
  | 'primary'   // White text
  | 'secondary' // Light grey text
  | 'muted'     // Darker grey text
  | 'success'   // Green text
  | 'warning'   // Yellow text
  | 'error';    // Red text

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: TypographyColor;
  component?: React.ElementType;
  children: React.ReactNode;
  className?: string;
} 