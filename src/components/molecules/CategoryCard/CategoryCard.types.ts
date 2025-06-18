export type CategoryCardSize = 'sm' | 'md' | 'lg';

export interface CategoryCardProps {
  title: string;
  backgroundColor?: string;
  image: string;
  size?: CategoryCardSize;
  onClick?: () => void;
  className?: string;
} 