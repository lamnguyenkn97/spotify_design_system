import React, { forwardRef, useMemo } from 'react';
import { CategoryCardProps } from './CategoryCard.types';
import { Stack } from '../../atoms/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import {
  colors,
  spacing,
  sizes,
  animations,
  borderRadius,
  shadows,
} from '../../../styles';

// Style configuration using design tokens - Category card specific
const getCategoryCardStyles = (backgroundColor: string) => {
  return {
    container: {
      cursor: 'pointer',
      transition: animations.transitions.card,
      backgroundColor: backgroundColor,
      background: backgroundColor,
      padding: spacing.md,
      borderRadius: borderRadius.sm,
      width: sizes.card.width.category,
      height: sizes.card.height.category,
      position: 'relative' as const,
      overflow: 'hidden' as const,
    },

    overlayImage: {
      position: 'absolute' as const,
      bottom: sizes.card.overlay.bottomOffset,
      right: sizes.card.overlay.rightOffset,
      top: 'auto' as const,
      left: 'auto' as const,
      transform: `rotate(${sizes.card.overlay.rotation})`,
      width: sizes.card.overlay.width,
      height: sizes.card.overlay.height,
      borderRadius: sizes.card.overlay.borderRadius,
      boxShadow: shadows.medium,
      zIndex: sizes.zIndex.base + 1,
    },
  };
};

export const CategoryCard = forwardRef<HTMLDivElement, CategoryCardProps>(
  (
    {
      title,
      backgroundColor,
      overlayImageUrl,
      onClick,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Memoized values for performance
    const styles = useMemo(
      () => getCategoryCardStyles(backgroundColor),
      [backgroundColor]
    );
    const cardAriaLabel = useMemo(
      () => ariaLabel || `${title} category`,
      [ariaLabel, title]
    );

    // Keyboard event handler
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick?.();
      }
    };

    return (
      <Stack
        ref={ref}
        direction="column"
        spacing="xs"
        align="start"
        className={className}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        style={styles.container}
        role="button"
        aria-label={cardAriaLabel}
        tabIndex={0}
        {...props}
      >
        {/* Overlay Image */}
        {overlayImageUrl && (
          <img
            src={overlayImageUrl}
            alt={`${title} category`}
            style={styles.overlayImage}
          />
        )}

        {/* Content */}
        <Stack
          direction="column"
          spacing="xs"
          align="start"
          justify="start"
          style={{
            position: 'absolute',
            top: spacing.md,
            left: spacing.md,
            right: spacing.md,
            zIndex: sizes.zIndex.base + 2,
          }}
        >
          <Typography
            variant="body"
            weight="bold"
            color="primary"
            component="p"
            style={{
              color: colors.primary.white,
              fontSize: sizes.text.lg,
              lineHeight: '1.2',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              whiteSpace: 'normal',
              overflow: 'visible',
              textOverflow: 'unset',
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Stack>
    );
  }
);

CategoryCard.displayName = 'CategoryCard';
