import React from 'react';
import { SkeletonElement } from './Skeleton.style';
import { SkeletonProps, skeletonDefaults } from './Skeleton.types';

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = skeletonDefaults.variant,
  animation = skeletonDefaults.animation,
  width,
  height,
  className,
  loading = skeletonDefaults.loading,
  children,
}) => {
  // If not loading and has children, show children
  if (!loading && children) {
    return <>{children}</>;
  }

  // If not loading and no children, don't render anything
  if (!loading) {
    return null;
  }

  return (
    <SkeletonElement
      $variant={variant}
      $animation={animation}
      $width={width}
      $height={height}
      className={className}
      aria-label="Loading..."
      role="status"
    />
  );
};

Skeleton.displayName = 'Skeleton'; 