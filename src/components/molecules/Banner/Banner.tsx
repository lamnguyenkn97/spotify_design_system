import React, { useEffect, useState } from 'react';
import { BannerProps } from './Banner.types';
import { Typography, Stack, Image } from '../../atoms';
import { getImageGradient, getBannerTypeLabel } from './utils';
import { spacing, shadows, sizes, borders } from '../../../styles';

// Clean constants using design tokens - no hardcoded values
const BANNER_STYLES = {
  container: {
    height: sizes.container.banner,
    padding: spacing.md,
  },
  enhancedImage: {
    boxShadow: shadows.large,
    border: borders.thin,
  },
} as const;

export const Banner: React.FC<BannerProps> = ({
  type,
  title,
  subtitle,
  description,
  image,
}) => {
  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    'linear-gradient(135deg, #1db954, #191414)' // Spotify default
  );

  useEffect(() => {
    let isMounted = true;

    const loadGradient = async () => {
      try {
        const gradient = await getImageGradient(image);
        if (isMounted) {
          setBackgroundGradient(gradient);
        }
      } catch (error) {
        // Silent failure - keep default gradient for resilience
      }
    };

    loadGradient();

    return () => {
      isMounted = false;
    };
  }, [image]);
  
  return (
    <div
      style={{
        background: backgroundGradient,
        ...BANNER_STYLES.container,
      }}
      role="banner"
      aria-label={`${getBannerTypeLabel(type)} banner`}
    >
      <Stack direction="row" spacing="lg" align="center" style={{ height: '100%' }}>
        <Image
          src={image}
          alt={`${title} cover`}
          size="lg"
          shape="square"
          style={BANNER_STYLES.enhancedImage}
        />

        <Stack direction="column" spacing="sm" align="start">
          <Typography variant="caption" weight="bold" color="secondary">
            {getBannerTypeLabel(type)}
          </Typography>

          <Typography
            variant="title"
            size="xl"
            weight="bold"
            color="primary"
            component="h1"
          >
            {title}
          </Typography>

          <Typography variant="body" color="secondary">
            {type === 'artist' ? description : subtitle}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};
