import React, { useState } from 'react';
import { ImageWrapper, StyledImage } from './Image.style';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: keyof typeof import('../../../styles/tokens').borderRadius;
  fallbackSrc?: string; // Image to show if the main src fails
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  borderRadius = 'md',
  fallbackSrc = '/fallback-image.png', // Default fallback image
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc(fallbackSrc);
  };

  return (
    <ImageWrapper width={width} height={height}>
      <StyledImage
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        borderRadiusProps={borderRadius}
        onError={handleError}
        {...props}
      />
    </ImageWrapper>
  );
};
