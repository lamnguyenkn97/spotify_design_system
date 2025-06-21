import React, { useEffect, useState } from 'react';
import { getImageGradient, getBannerTypeLabel } from './utils';
import { BannerProps, BannerType } from './Banner.types';
import { Stack } from '../../atoms/Stack';
import { Image } from '../../atoms/Image/Image';
import { Typography } from '../../atoms/Typography/Text/Typography';

type GradientState = {
  background: string;
  isLoading: boolean;
  error: Error | null;
};

export const Banner: React.FC<BannerProps> = ({
  type,
  title,
  subtitle,
  description,
  image,
}) => {
  const [gradientState, setGradientState] = useState<GradientState>({
    background: '#121212',
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const loadGradient = async () => {
      try {
        setGradientState((prev) => ({ ...prev, isLoading: true, error: null }));
        const gradient = await getImageGradient(image);
        if (isMounted) {
          setGradientState({
            background: gradient,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setGradientState({
            background: '#121212',
            isLoading: false,
            error:
              error instanceof Error
                ? error
                : new Error('Failed to load gradient'),
          });
        }
      }
    };

    loadGradient();

    return () => {
      isMounted = false;
    };
  }, [image]);

  // Validate required props
  if (!type || !title || !image) {
    console.error('Banner: Missing required props');
    return null;
  }

  // Validate type-specific props
  if (type === 'artist' && !description) {
    console.error('Banner: Artist type requires description prop');
    return null;
  }

  if (type !== 'artist' && !subtitle) {
    console.error('Banner: Non-artist types require subtitle prop');
    return null;
  }

  return (
    <Stack
      direction="row"
      spacing="lg"
      align="end"
      padding="lg"
      style={{
        background: gradientState.background,
        height: '300px',
        borderRadius: '8px',
        transition: 'background 0.3s ease-in-out',
      }}
      role="banner"
      aria-label={`${getBannerTypeLabel(type)} banner`}
    >
      <Image
        src={image}
        alt={`${title} cover`}
        width="200px"
        aspectRatio={1}
        shape="rounded"
        style={{ boxShadow: '0 16px 24px rgba(0,0,0,0.5)' }}
      />

      <Stack direction="column" spacing="sm" align="start">
        <Typography variant="body2" weight="bold" color="secondary">
          {getBannerTypeLabel(type)}
        </Typography>

        <Typography variant="h1" weight="bold" color="primary" component="h1">
          {title}
        </Typography>

        <Typography variant="body1" color="secondary">
          {type === 'artist' ? description : subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
};
