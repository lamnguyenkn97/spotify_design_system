import React, { forwardRef, useState } from 'react';
import { HorizontalTileCardProps } from './HorizontalTileCard.types';
import { Stack, Image, Typography, Progress } from '../../atoms';
import {
  colors,
  animations,
  opacity,
  shadows,
  sizes,
  spacing,
  borderRadius,
} from '../../../styles';

// Utility function for card dimensions using tokens
const getCardDimensions = (size: string) => {
  switch (size) {
    case 'small':
      return {
        imageSize: 'sm' as const,
        titleVariant: 'body' as const,
        titleSize: 'sm' as const,
        subtitleVariant: 'caption' as const,
        subtitleSize: 'sm' as const,
        stackSpacing: 'xs' as const,
        padding: 'xs' as const,
        gap: 'sm' as const,
        borderRadius: 'sm' as const,
      };
    case 'large':
    default:
      return {
        imageSize: 'lg' as const,
        titleVariant: 'body' as const,
        titleSize: 'md' as const,
        subtitleVariant: 'body' as const,
        subtitleSize: 'sm' as const,
        stackSpacing: 'sm' as const,
        padding: 'sm' as const,
        gap: 'md' as const,
        borderRadius: 'md' as const,
      };
  }
};

// Semantic color functions for better maintainability
const getSemanticColors = (
  disabled: boolean,
  isActive: boolean,
  isHovered: boolean
) => {
  if (disabled) {
    return {
      background: colors.grey.grey1,
      cursor: 'not-allowed',
      opacity: opacity.disabled,
    };
  }

  if (isActive) {
    return {
      background: colors.grey.grey2,
      cursor: 'pointer',
      opacity: 1,
    };
  }

  if (isHovered) {
    return {
      background: colors.grey.grey2,
      cursor: 'pointer',
      opacity: 1,
    };
  }

  return {
    background: colors.grey.grey1,
    cursor: 'pointer',
    opacity: 1,
  };
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
    const semanticColors = getSemanticColors(disabled, isActive, isHovered);

    const handleClick = (_e: React.MouseEvent) => {
      if (disabled || !onClick) return;
      onClick();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled || !onClick) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    };

    return (
      <Stack
        ref={ref}
        direction="row"
        spacing={dimensions.gap}
        align="center"
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          cursor: semanticColors.cursor,
          transition: animations.transitions.card,
          opacity: semanticColors.opacity,
          transform: isHovered && !disabled ? sizes.transform.lift.xs : 'none',
          boxShadow: isHovered && !disabled ? shadows.hover : shadows.none,
          padding: spacing[dimensions.padding],
          borderRadius: borderRadius[dimensions.borderRadius],
          backgroundColor: semanticColors.background,
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
          size={dimensions.imageSize}
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
            <Typography
              variant={dimensions.titleVariant}
              size={dimensions.titleSize}
              weight="medium"
            >
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
                size={dimensions.subtitleSize}
                color="secondary"
              >
                {subtitle}
              </Typography>
            </Stack>
          )}

          {/* Progress using Progress component instead of Slider */}
          {showProgress && (
            <div style={{ width: '100%' }}>
              <Progress
                value={progressValue}
                max={1}
                variant="linear"
                size="sm"
                showValue={false}
                aria-label={`Progress: ${Math.round(progressValue * 100)}%`}
              />
            </div>
          )}
        </Stack>
      </Stack>
    );
  }
);

HorizontalTileCard.displayName = 'HorizontalTileCard';
