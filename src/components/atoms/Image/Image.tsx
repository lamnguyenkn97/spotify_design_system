import React, { useState, useEffect, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ImageWrapper,
  StyledImage,
  PlaceholderContent,
  imageDefaults,
} from './Image.style';
import { ImageProps } from './Image.types';
import { getPlaceholderIcon } from './Image.utils';

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      size = imageDefaults.size,
      shape = imageDefaults.shape,
      variant = imageDefaults.variant,
      fallbackSrc,
      lazy = imageDefaults.lazy,
      className,
      ...props
    },
    ref
  ) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(!!src);
    const [showPlaceholder, setShowPlaceholder] = useState(!src);

    // Reset states when src changes
    useEffect(() => {
      if (src) {
        setImageSrc(src);
        setIsLoading(true);
        setShowPlaceholder(false);
      } else {
        setImageSrc('');
        setIsLoading(false);
        setShowPlaceholder(true);
      }
    }, [src]);

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      // Try fallback if available and not already using it
      if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc);
        setIsLoading(true);
        setShowPlaceholder(false);
        return;
      }

      // Show placeholder if no fallback or fallback fails
      setImageSrc('');
      setIsLoading(false);
      setShowPlaceholder(true);
    };

    return (
      <ImageWrapper
        size={size}
        shape={shape}
        variant={variant}
        isLoading={isLoading}
        className={className}
      >
        {/* Show image if we have a src and not showing placeholder */}
        {imageSrc && !showPlaceholder && (
          <StyledImage
            ref={ref}
            src={imageSrc}
            alt={alt}
            isLoading={isLoading}
            onLoad={handleLoad}
            onError={handleError}
            loading={lazy ? 'lazy' : 'eager'}
            {...props}
          />
        )}

        {/* Show FontAwesome icon placeholder */}
        {showPlaceholder && (
          <PlaceholderContent variant={variant}>
            <FontAwesomeIcon icon={getPlaceholderIcon(variant)} size="2x" />
          </PlaceholderContent>
        )}
      </ImageWrapper>
    );
  }
);

Image.displayName = 'Image';
