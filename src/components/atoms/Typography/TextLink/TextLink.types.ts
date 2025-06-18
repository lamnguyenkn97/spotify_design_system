import React from 'react';

export type TextLinkVariant = 'default' | 'muted' | 'danger';

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
