import React, { forwardRef, useState } from 'react';
import { CategoryCardProps } from './CategoryCard.types';
import { Stack } from '../../atoms/Layout/Stack';
import { Image } from '../../atoms/Image/Image';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { colors, spacing } from '../../../styles';

// Utility function for card size calculation
const getCategoryCardDimensions = (size: string) => {
  switch (size) {
    case 'sm':
      return { width: '200px', height: '100px' };
    case 'lg':
      return { width: '300px', height: '140px' };
    case 'md':
    default:
      return { width: '250px', height: '120px' };
  }
};

export const CategoryCard = forwardRef<HTMLDivElement, CategoryCardProps>(
  (
    {
      title,
      backgroundColor = colors.decorative.blueMoon,
      image,
      size = 'md',
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const dimensions = getCategoryCardDimensions(size);

    return (
      <Stack
        ref={ref}
        direction="column"
        justify="start"
        align="start"
        padding="md"
        borderRadius="md"
        backgroundColor={backgroundColor}
        width={dimensions.width}
        height={dimensions.height}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        style={{
          position: 'relative',
          overflow: 'hidden',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'transform 0.2s ease-in-out',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          color: colors.primary.white,
        }}
        {...props}
      >
        {/* Title - Using Stack instead of div */}
        <Stack
          style={{
            zIndex: 2,
            position: 'relative',
            maxWidth: '60%',
          }}
        >
          <Typography
            variant="h4"
            weight="bold"
            component="h3"
          >
            {title}
          </Typography>
        </Stack>

        {/* Background Image - Using Image directly with absolute positioning */}
        <Image
          src={image}
          alt={title}
          width="50%"
          height="auto"
          shape="rounded"
          style={{
            position: 'absolute',
            bottom: `-${spacing.sm}`,
            right: `-${spacing.sm}`,
            maxWidth: '80px',
            aspectRatio: '1 / 1',
            transform: 'rotate(25deg)',
            zIndex: 1,
            objectFit: 'cover',
          }}
        />
      </Stack>
    );
  }
);

CategoryCard.displayName = 'CategoryCard';
