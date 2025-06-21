import React from 'react';
import {
  ProgressContainer,
  ProgressTrack,
  ProgressFill,
  ProgressBuffer,
  ProgressLabel,
} from './Progress.style';
import { ProgressProps, progressDefaults } from './Progress.types';

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = progressDefaults.max,
  indeterminate = progressDefaults.indeterminate,
  variant = progressDefaults.variant,
  size = progressDefaults.size,
  color = progressDefaults.color,
  showValue = progressDefaults.showValue,
  label,
  buffer,
  className,
  'aria-label': ariaLabel,
}) => {
  // Calculate progress percentage
  const progress = indeterminate ? 0 : Math.min(Math.max((value / max) * 100, 0), 100);
  const bufferProgress = buffer ? Math.min(Math.max(buffer, 0), 100) : 0;

  // Format percentage for display
  const formatValue = () => {
    if (label) return label;
    return `${Math.round(progress)}%`;
  };

  return (
    <ProgressContainer
      $variant={variant}
      $size={size}
      className={className}
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <ProgressTrack $variant={variant} $size={size} $color={color}>
        {/* Buffer for media progress */}
        {variant === 'linear' && buffer !== undefined && (
          <ProgressBuffer $buffer={bufferProgress} />
        )}
        
        {/* Main progress fill */}
        <ProgressFill
          $variant={variant}
          $progress={progress}
          $indeterminate={indeterminate}
        />
      </ProgressTrack>

      {/* Value label */}
      {showValue && variant === 'linear' && (
        <ProgressLabel>{formatValue()}</ProgressLabel>
      )}
    </ProgressContainer>
  );
};

Progress.displayName = 'Progress'; 