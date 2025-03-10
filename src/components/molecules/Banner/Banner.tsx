import React, { useEffect, useState } from 'react';
import ColorThief from 'color-thief-browser';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../../atoms/Icon';
import { BannerProps } from './Banner.types';
import {
  BannerWrapper,
  ContentWrapper,
  BannerImage,
  TextContent,
  PodcastSubtitle,
  Title,
  Subtitle,
} from './Banner.style';

const Banner: React.FC<BannerProps> = ({
  type,
  imageUrl,
  title,
  subtitle,
  description,
  verified,
}) => {
  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    'linear-gradient(135deg, #333, #111)'
  );

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // Allow fetching images from different origins
    img.src = imageUrl;

    img.onload = () => {
      const colorThief = new ColorThief();
      const colors = colorThief.getPalette(img, 2); // Extract 2 dominant colors

      if (colors && colors.length >= 2) {
        const [color1, color2] = colors.map((rgb) => `rgb(${rgb.join(',')})`);
        setBackgroundGradient(`linear-gradient(135deg, ${color1}, ${color2})`);
      }
    };
  }, [imageUrl]);

  return (
    <BannerWrapper backgroundGradient={backgroundGradient}>
      <ContentWrapper>
        {type !== 'artist' && (
          <BannerImage src={imageUrl} alt={title} type={type} />
        )}
        <TextContent>
          {type === 'podcast' && (
            <PodcastSubtitle>Podcast Episode</PodcastSubtitle>
          )}
          {verified && (
            <PodcastSubtitle>
              <Icon icon={faCheckCircle} size={'medium'} color="#1DB954" />
              Verified Artist
            </PodcastSubtitle>
          )}
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {description && <Subtitle>{description}</Subtitle>}
        </TextContent>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default Banner;
