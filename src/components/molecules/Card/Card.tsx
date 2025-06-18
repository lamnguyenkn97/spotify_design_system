import React, { forwardRef, useState } from 'react';
import { CardProps } from './Card.types';
import { Stack } from '../../atoms/Layout/Stack';
import { Image } from '../../atoms/Image/Image';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Icon } from '../../atoms/Icon';
import { faPlay, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { colors, spacing, scale, transitions } from '../../../styles';

// Utility function for card width calculation
const getCardWidth = (size: string): string => {
  switch (size) {
    case 'sm':
      return '160px';
    case 'lg':
      return '240px';
    case 'md':
    default:
      return '200px';
  }
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      subtitle,
      imageUrl,
      size = 'md',
      variant = 'default',
      onPlayClick,
      showPlayButton = true,
      loading = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const isArtist = variant === 'artist';

    return (
      <Stack
        ref={ref}
        direction="column"
        spacing="sm"
        padding="md"
        borderRadius="sm"
        backgroundColor={isHovered ? colors.grey.grey3 : colors.grey.grey1}
        width={getCardWidth(size)}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: transitions.card,
          cursor: 'pointer',
          textAlign: variant === 'artist' ? 'center' : 'left',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered
            ? '0 8px 24px rgba(0, 0, 0, 0.3)'
            : '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
        {...props}
      >
        {/* Image Container */}
        <Stack
          direction="column"
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            borderRadius: '8px',
          }}
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              width="100%"
              aspectRatio={1}
              shape={isArtist ? 'circle' : 'rounded'}
              style={{
                transition: transitions.transform,
                transform: isHovered ? `scale(${scale.small})` : `scale(${scale.none})`,
              }}
            />
          )}

          {/* Play Icon - Using Icon component directly */}
          {showPlayButton && onPlayClick && (
            <Icon
              icon={loading ? faSpinner : faPlay}
              size="medium"
              variant="rounded"
              backgroundColor="brand"
              color="primary"
              clickable
              spin={loading}
              disabled={loading}
              onClick={onPlayClick}
              aria-label="Play"
              style={{
                position: 'absolute',
                bottom: spacing.lg,
                right: spacing.sm,
                opacity: isHovered ? 1 : 0,
                transition: transitions.all,
                transform: isHovered
                  ? `translateY(-2px) scale(${scale.large})`
                  : 'translateY(8px) scale(1)',
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              }}
            />
          )}
        </Stack>

        {/* Content */}
        <Stack
          direction="column"
          spacing="xs"
          style={{ marginTop: spacing.xs }}
        >
          <div
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              margin: 0,
            }}
          >
            <Typography
              variant="body1"
              weight="bold"
              color="primary"
              component="h3"
            >
              {title}
            </Typography>
          </div>

          {isArtist ? (
            <div
              style={{
                margin: 0,
                opacity: 0.7,
              }}
            >
              <Typography variant="body2" color="muted" component="p">
                Artist
              </Typography>
            </div>
          ) : (
            subtitle && (
              <div
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  margin: 0,
                  opacity: 0.7,
                }}
              >
                <Typography variant="body2" color="muted" component="p">
                  {subtitle}
                </Typography>
              </div>
            )
          )}
        </Stack>
      </Stack>
    );
  }
);

Card.displayName = 'Card';
