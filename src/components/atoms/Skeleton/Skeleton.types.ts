export type SkeletonVariant = 'text' | 'rectangular' | 'circular' | 'rounded';
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';

export interface SkeletonProps {
  /** Variant shape of the skeleton */
  variant?: SkeletonVariant;
  /** Animation type */
  animation?: SkeletonAnimation;
  /** Width of the skeleton */
  width?: number | string;
  /** Height of the skeleton */
  height?: number | string;
  /** Custom className */
  className?: string;
  /** Whether to show the skeleton */
  loading?: boolean;
  /** Children to show when not loading */
  children?: React.ReactNode;
}

export const skeletonDefaults: Required<Pick<SkeletonProps, 'variant' | 'animation' | 'loading'>> = {
  variant: 'text',
  animation: 'pulse',
  loading: true,
}; 