import React, { forwardRef, useState, useCallback, useMemo } from 'react';
import { CardProps, CardSize } from './Card.types';
import { Stack } from '../../atoms/Stack';
import { Image } from '../../atoms/Image/Image';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Button, ButtonVariant, ButtonSize } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import {
  colors,
  spacing,
  sizes,
  animations,
  borderRadius,
} from '../../../styles';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// Card size configuration using design tokens
const getCardDimensions = (size: CardSize) => {
  const sizeMap = {
    sm: { width: '140px', imageSize: 'md' as const },
    md: { width: '160px', imageSize: 'lg' as const },
    lg: { width: '180px', imageSize: 'lg' as const },
  };
  return sizeMap[size];
};

// Play button positioning using design tokens - positioned to the right of center
const getPlayButtonPosition = () => ({
  top: '50%',
  left: '60%',
});

// Style configuration using design tokens - Spotify playlist card style
const getCardStyles = (isHovered: boolean, size: CardSize) => {
  const dimensions = getCardDimensions(size);
  const playButtonPos = getPlayButtonPosition();
  
  return {
    container: {
      cursor: 'pointer',
      transition: animations.transitions.card,
      backgroundColor: isHovered ? colors.grey.grey2 : 'transparent',
      transform: isHovered ? sizes.transform.lift.xs : 'translateY(0)',
      padding: spacing.sm,
      borderRadius: borderRadius.md,
      width: dimensions.width,
      height: 'auto',
      display: 'flex' as const,
      flexDirection: 'column' as const,
      alignItems: 'center' as const,
    },

    image: {
      transition: animations.transitions.transform,
      transform: isHovered
        ? `scale(${animations.scale.small})`
        : `scale(${animations.scale.none})`,
      width: '100%',
    },

    playButtonContainer: {
      position: 'absolute' as const,
      top: playButtonPos.top,
      left: playButtonPos.left,
      opacity: isHovered ? 1 : 0,
      transition: animations.transitions.all,
      transform: isHovered
        ? 'translate(-50%, -50%) scale(1)'
        : 'translate(-50%, -50%) translateY(8px) scale(0.8)',
      zIndex: sizes.zIndex.dropdown,
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    contentContainer: {
      gap: spacing.xs,
      width: '100%',
    },

    titleText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap' as const,
      width: '100%',
      textAlign: 'center' as const,
    },

    subtitleText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap' as const,
      width: '100%',
      textAlign: 'center' as const,
    },
  };
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      subtitle,
      imageUrl,
      variant = 'default',
      size = 'md',
      imageSize,
      onPlayClick,
      showPlayButton = true,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const isArtist = variant === 'artist';
    const dimensions = getCardDimensions(size);
    const finalImageSize = imageSize || dimensions.imageSize;

    // Memoized values for performance
    const styles = useMemo(() => getCardStyles(isHovered, size), [isHovered, size]);
    const cardAriaLabel = useMemo(
      () =>
        ariaLabel ||
        `${title}${subtitle ? ` by ${subtitle}` : ''}${isArtist ? ' artist' : ''}`,
      [ariaLabel, title, subtitle, isArtist]
    );

    // Event handlers
    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onPlayClick?.();
        }
      },
      [onPlayClick]
    );

    return (
      <Stack
        ref={ref}
        direction="column"
        spacing="xs"
        align={'center'}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        style={styles.container}
        role="article"
        aria-label={cardAriaLabel}
        tabIndex={0}
        {...props}
      >
        {/* Image Container */}
        <Stack
          style={{
            width: '100%',
            position: 'relative',
            aspectRatio: '1',
          }}
          align={'center'}
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`${title} cover`}
              size={finalImageSize}
              shape={isArtist ? 'circle' : 'rounded'}
              style={{
                objectFit: 'cover',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Play Button */}
          {showPlayButton && onPlayClick && (
            <div style={styles.playButtonContainer}>
              <Icon
                color="primary"
                backgroundColor={colors.primary.brand}
                circular
                clickable
                icon={faPlay}
                size="sm"
                onClick={onPlayClick}
                aria-label={`Play ${title}`}
                style={{ cursor: 'pointer' }}
              />
            </div>
          )}
        </Stack>

        {/* Content */}
        <Stack
          direction="column"
          spacing="xs"
          align="center"
          style={styles.contentContainer}
        >
          <Typography
            variant="body"
            weight="bold"
            color="primary"
            component="p"
            style={styles.titleText}
          >
            {title}
          </Typography>

          {!isArtist && subtitle && (
            <Typography variant="caption" color="muted" component="p" style={styles.subtitleText}>
              {subtitle}
            </Typography>
          )}

          {isArtist && (
            <Typography variant="caption" color="muted" component="p" style={styles.subtitleText}>
              Artist
            </Typography>
          )}
        </Stack>
      </Stack>
    );
  }
);

Card.displayName = 'Card';
