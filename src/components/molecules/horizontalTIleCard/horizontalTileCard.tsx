import React, { forwardRef, useState } from 'react';
import { HorizontalTileCardProps } from './HorizontalTileCard.types';
import { Stack } from '../../atoms/Stack';
import { Image } from '../../atoms/Image/Image';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Slider } from '../../atoms/Slider/Slider';
import { colors } from '../../../styles';

// Utility function for card dimensions
const getCardDimensions = (size: string) => {
  switch (size) {
    case 'small':
      return {
        imageSize: 40,
        titleVariant: 'body2' as const,
        subtitleVariant: 'caption' as const,
        stackSpacing: 'xs' as const,
        padding: 'xs' as const,
        gap: 'sm' as const,
        borderRadius: 'sm' as const,
      };
    case 'large':
    default:
      return {
        imageSize: 60,
        titleVariant: 'body1' as const,
        subtitleVariant: 'body2' as const,
        stackSpacing: 'sm' as const,
        padding: 'sm' as const,
        gap: 'md' as const,
        borderRadius: 'md' as const,
      };
  }
};

export const HorizontalTileCard = forwardRef<
  HTMLDivElement,
  HorizontalTileCardProps
>(
  (
    {
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
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const dimensions = getCardDimensions(size);

    const handleClick = (_e: React.MouseEvent) => {
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

    const getBackgroundColor = () => {
      if (disabled) return colors.grey.grey1;
      if (isActive) return colors.grey.grey2;
      if (isHovered) return colors.grey.grey2;
      return colors.grey.grey1;
    };

    return (
      <Stack
        ref={ref}
        direction="row"
        spacing={dimensions.gap}
        align="center"
        padding={dimensions.padding}
        borderRadius={dimensions.borderRadius}
        backgroundColor={getBackgroundColor()}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease-in-out',
          opacity: disabled ? 0.6 : 1,
        }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-label={`${title}${subtitle ? ` - ${subtitle}` : ''}`}
        data-testid={testId}
        {...props}
      >
        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={dimensions.imageSize}
          height={dimensions.imageSize}
          shape="rounded"
        />

        {/* Content */}
        <Stack
          direction="column"
          spacing={dimensions.stackSpacing}
          align="start"
          style={{ flex: 1, minWidth: 0 }}
        >
          {/* Title */}
          <Stack
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%',
            }}
          >
            <Typography variant={dimensions.titleVariant} weight="medium">
              {title}
            </Typography>
          </Stack>

          {/* Subtitle */}
          {subtitle && (
            <Stack
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: '100%',
              }}
            >
              <Typography
                variant={dimensions.subtitleVariant}
                color="secondary"
              >
                {subtitle}
              </Typography>
            </Stack>
          )}

          {/* Progress */}
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
      </Stack>
    );
  }
);

HorizontalTileCard.displayName = 'HorizontalTileCard';
