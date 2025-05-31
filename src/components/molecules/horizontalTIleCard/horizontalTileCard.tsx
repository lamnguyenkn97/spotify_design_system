import React from 'react';
import { Wrapper, TruncatedText } from './horizontalTileCard.style';
import { Image, Stack, Typography } from '../../atoms';
import { Slider } from '../../atoms/Slider/Slider';

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
  size?: 'small' | 'large';
}

export const HorizontalTileCard: React.FC<HorizontalTileCardProps> = ({
  image,
  title,
  subtitle,
  showProgress = false,
  progressValue = 0,
  width = '60%',
  onClick,
  className,
  isActive = false,
  disabled = false,
  'data-testid': testId,
  size = 'large',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (disabled || !onClick) return;
    onClick();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (disabled || !onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  // Size-based styles
  const imageSize = size === 'small' ? 40 : 60;
  const titleVariant = size === 'small' ? 'body1' : 'h1';
  const subtitleVariant = size === 'small' ? 'body2' : 'body1';
  const stackSpacing = size === 'small' ? 'xs' : 'sm';

  return (
    <Wrapper
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      width={width}
      className={className}
      isActive={isActive}
      disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-label={`${title}${subtitle ? ` - ${subtitle}` : ''}`}
      data-testid={testId}
      size={size}
    >
      <Image 
        src={image} 
        alt={title} 
        width={imageSize} 
        height={imageSize} 
        style={{ borderRadius: '4px' }}
      />
      <Stack direction="column" spacing={stackSpacing} align="start" style={{ flex: 1 }}>
        <TruncatedText>
          <Typography variant={titleVariant}>{title}</Typography>
        </TruncatedText>
        {subtitle && (
          <TruncatedText>
            <Typography variant={subtitleVariant} color="secondary">{subtitle}</Typography>
          </TruncatedText>
        )}
        {showProgress && (
          <Slider
            value={progressValue}
            min={0}
            max={1}
            step={0.01}
            onChange={() => {}}
            disabled
            style={{ width: '100%' }}
            aria-label={`Progress: ${Math.round(progressValue * 100)}%`}
          />
        )}
      </Stack>
    </Wrapper>
  );
};
