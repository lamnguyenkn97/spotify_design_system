import React, { useEffect, useState } from 'react';
import { Wrapper } from './Banner.style';
import { getImageGradient } from './utils';
import { Stack } from '../../atoms/Layout/Stack';
import { Image } from '../../atoms/Image/Image';
import { Typography } from '../../atoms/Typography/Text/Typography';

const bannerTypeLabelClass = 'banner-type-label';
const bannerTitleClass = 'banner-title';
const bannerMarginTopClass = 'banner-margin-top';

export type BannerType = 'album' | 'playlist' | 'podcast' | 'artist';

interface BannerProps {
  type: BannerType;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
}

export const Banner: React.FC<BannerProps> = ({
  type,
  title,
  subtitle,
  description,
  image,
}) => {
  const [background, setBackground] = useState<string>('#121212');

  useEffect(() => {
    getImageGradient(image)
      .then((gradient) => setBackground(gradient))
      .catch(() => setBackground('#121212'));
  }, [image]);

  return (
    <>
      <Wrapper style={{ background }}>
        <Image
          src={image}
          alt={`${title} cover`}
          width={200}
          aspectRatio={1}
          borderRadius="md"
          style={{ boxShadow: '0 16px 24px rgba(0,0,0,0.5)' }}
        />
        <Stack direction="column" spacing="sm" align="start">
          <Typography
            variant="body2"
            weight="bold"
            color="secondary"
            className={bannerTypeLabelClass}
          >
            {type === 'album'
              ? 'Album'
              : type === 'playlist'
                ? 'Playlist'
                : type === 'podcast'
                  ? 'Podcast'
                  : 'Verified Artist'}
          </Typography>
          <Typography
            variant="h1"
            weight="bold"
            color="primary"
            component="h1"
            className={bannerTitleClass}
          >
            {title}
          </Typography>
          {type === 'artist' ? (
            <Typography
              variant="body1"
              color="secondary"
              className={bannerMarginTopClass}
            >
              {description}
            </Typography>
          ) : (
            <Typography
              variant="body1"
              color="secondary"
              className={bannerMarginTopClass}
            >
              {subtitle}
            </Typography>
          )}
        </Stack>
      </Wrapper>
    </>
  );
};
