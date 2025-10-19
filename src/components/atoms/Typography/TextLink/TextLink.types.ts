import React from 'react';

export type TextLinkVariant = 
  | 'default'  // White text (for dark backgrounds)
  | 'muted'    // Grey text
  | 'black'    // Black text (for light backgrounds)
  | 'inverse'  // Alias for black (for light backgrounds)
  | 'danger';  // Red text (error/delete actions)

export type TextLinkWeight = 'light' | 'regular' | 'medium' | 'bold';

export interface TextLinkProps {
  href?: string;
  children: React.ReactNode;
  component?: React.ElementType;
  className?: string;
  variant?: TextLinkVariant;
  weight?: TextLinkWeight;
  underline?: boolean;
}
