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
    const [isLoading, setIsLoading] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(!src);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Reset states when src changes
    useEffect(() => {
      if (src) {
        setImageSrc(src);
        setShowPlaceholder(false);
        // Don't reset loading state here - let the image handle it
        // This prevents flickering during hydration
      } else {
        setImageSrc('');
        setIsLoading(false);
        setShowPlaceholder(true);
        setImageLoaded(false);
      }
    }, [src]);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      // Check if image is actually complete (handles cached/already loaded images)
      const target = e.currentTarget;
      if (target.complete && target.naturalHeight !== 0) {
        setIsLoading(false);
        setImageLoaded(true);
      }
    };

    const handleError = () => {
      // Try fallback if available and not already using it
      if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc);
        setIsLoading(false);
        setShowPlaceholder(false);
        setImageLoaded(false);
        return;
      }

      // Show placeholder if no fallback or fallback fails
      setImageSrc('');
      setIsLoading(false);
      setShowPlaceholder(true);
      setImageLoaded(false);
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
            isLoading={false}
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
