export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'manual';

export interface TooltipProps {
  /** Content to display in the tooltip */
  content: React.ReactNode;
  /** Position of the tooltip relative to trigger */
  position?: TooltipPosition;
  /** How the tooltip is triggered */
  trigger?: TooltipTrigger;
  /** Whether tooltip is visible (for manual control) */
  visible?: boolean;
  /** Delay before showing tooltip (ms) */
  delay?: number;
  /** Maximum width of tooltip */
  maxWidth?: number | string;
  /** Custom className */
  className?: string;
  /** Children that trigger the tooltip */
  children: React.ReactNode;
  /** Callback when visibility changes */
  onVisibilityChange?: (visible: boolean) => void;
}

export const tooltipDefaults: Required<Pick<TooltipProps, 'position' | 'trigger' | 'delay'>> = {
  position: 'top',
  trigger: 'hover',
  delay: 500,
}; 