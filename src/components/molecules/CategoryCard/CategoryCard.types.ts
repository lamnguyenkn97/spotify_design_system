import React from 'react';

export interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  backgroundColor: string;
  overlayImageUrl?: string;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}
