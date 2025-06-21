export type BadgeVariant = 'dot' | 'count' | 'status' | 'icon';
export type BadgeColor = 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface BadgeProps {
  /** Type of badge */
  variant?: BadgeVariant;
  /** Color theme of the badge */
  color?: BadgeColor;
  /** Size of the badge */
  size?: BadgeSize;
  /** Count to display (for count variant) */
  count?: number;
  /** Maximum count to display before showing "99+" */
  maxCount?: number;
  /** Whether to show badge when count is 0 */
  showZero?: boolean;
  /** Icon name (for icon variant) */
  icon?: string;
  /** Position when used as overlay */
  position?: BadgePosition;
  /** Custom className */
  className?: string;
  /** Children to wrap (for positioned badges) */
  children?: React.ReactNode;
  /** Whether badge is visible */
  visible?: boolean;
}

export const badgeDefaults: Required<Pick<BadgeProps, 'variant' | 'color' | 'size' | 'maxCount' | 'showZero' | 'visible'>> = {
  variant: 'dot',
  color: 'primary',
  size: 'md',
  maxCount: 99,
  showZero: false,
  visible: true,
}; 