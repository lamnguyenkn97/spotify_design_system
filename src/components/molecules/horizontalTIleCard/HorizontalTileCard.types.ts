export type HorizontalTileCardSize = 'small' | 'large';

export interface HorizontalTileCardProps {
  /** Image URL for the card */
  image: string;
  /** Main title of the card */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Whether to show the progress slider */
  showProgress?: boolean;
  /** Progress value between 0 and 1 */
  progressValue?: number;
  /** Click handler for the card */
  onClick?: () => void;
  /** Width of the card */
  width?: string | number;
  /** Additional className for styling */
  className?: string;
  /** Whether the card is currently selected/active */
  isActive?: boolean;
  /** Whether the card is disabled */
  disabled?: boolean;
  /** Additional data attributes */
  'data-testid'?: string;
  /** Size of the card: 'small' or 'large' */
  size?: HorizontalTileCardSize;
} 