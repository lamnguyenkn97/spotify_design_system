export type ProgressVariant = 'linear' | 'circular';
export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressColor = 'primary' | 'success' | 'warning' | 'error';

export interface ProgressProps {
  /** Progress value (0-100) */
  value?: number;
  /** Maximum value */
  max?: number;
  /** Whether progress is indeterminate */
  indeterminate?: boolean;
  /** Variant of progress indicator */
  variant?: ProgressVariant;
  /** Size of the progress indicator */
  size?: ProgressSize;
  /** Color theme */
  color?: ProgressColor;
  /** Show percentage text */
  showValue?: boolean;
  /** Custom label */
  label?: string;
  /** Buffer value for media progress (0-100) */
  buffer?: number;
  /** Custom className */
  className?: string;
  /** Accessible label */
  'aria-label'?: string;
}

export const progressDefaults: Required<Pick<ProgressProps, 'max' | 'indeterminate' | 'variant' | 'size' | 'color' | 'showValue'>> = {
  max: 100,
  indeterminate: false,
  variant: 'linear',
  size: 'md',
  color: 'primary',
  showValue: false,
}; 