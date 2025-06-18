import React, { useState, useEffect, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ImageWrapper,
  StyledImage,
  PlaceholderContent,
  imageDefaults,
  placeholderConfig,
} from './Image.style';
import { ImageProps } from './Image.types';
import { getPlaceholderIcon, PlaceholderType } from './Image.utils';

// Helper function to get placeholder icon color based on state and type
const getPlaceholderColor = (
  hasError: boolean,
  placeholderType: PlaceholderType
): string => {
  if (hasError) return placeholderConfig.colors.error;
  if (placeholderType === 'spotify') return placeholderConfig.colors.spotify;
  return placeholderConfig.colors.default;
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width = imageDefaults.width,
      height = imageDefaults.height,
      shape = imageDefaults.shape,
      aspectRatio,
      objectFit = imageDefaults.objectFit,
      fallbackSrc = imageDefaults.fallbackSrc,
      placeholder = imageDefaults.placeholder,
      placeholderContent,
      placeholderType = 'image',
      placeholderIconSize = placeholderConfig.iconSize,
      loading: loadingProp = imageDefaults.loading,
      lazy = imageDefaults.lazy,
      onError,
      onLoad,
      className,
      ...props
    },
    ref
  ) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(!!src);
    const [hasError, setHasError] = useState(false);
    const [showIconPlaceholder, setShowIconPlaceholder] = useState(!src);

    // Reset states when src changes
    useEffect(() => {
      if (src) {
        setImageSrc(src);
        setIsLoading(true);
        setHasError(false);
        setShowIconPlaceholder(false);
      } else {
        // Show FontAwesome icon placeholder when no src provided
        setImageSrc('');
        setHasError(false);
        setIsLoading(false);
        setShowIconPlaceholder(true);
      }
    }, [src, placeholderType]);

    const handleLoad = (
      event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
      setIsLoading(false);
      onLoad?.(event);
    };

    const handleError = (
      event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
      setHasError(true);
      setIsLoading(false);

      // Try fallback if available and not already using it
      if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc);
        setIsLoading(true);
        setHasError(false);
        setShowIconPlaceholder(false);
        return;
      }

      // If no fallback or fallback also fails, show FontAwesome icon placeholder
      setImageSrc('');
      setShowIconPlaceholder(true);
      setHasError(true);
      setIsLoading(false);

      // Log the error for debugging
      if (process.env.NODE_ENV === 'development') {
        console.warn('Image failed to load:', src);
      }

      onError?.(event);
    };

    const showLoading = loadingProp || isLoading;
    const showPlaceholder = showLoading || hasError;

    return (
      <ImageWrapper
        width={width}
        height={height}
        aspectRatio={aspectRatio}
        shape={shape}
        loading={showLoading}
        placeholder={placeholder}
        className={className}
      >
        {/* Show image if we have a src and not showing icon placeholder */}
        {imageSrc && !showIconPlaceholder && (
          <StyledImage
            ref={ref}
            src={imageSrc}
            alt={alt}
            objectFit={objectFit}
            isLoading={isLoading}
            onLoad={handleLoad}
            onError={handleError}
            loading={lazy ? 'lazy' : 'eager'}
            {...props}
          />
        )}

        {/* Show FontAwesome icon placeholder */}
        {showIconPlaceholder && (
          <PlaceholderContent>
            <FontAwesomeIcon
              icon={getPlaceholderIcon(hasError ? 'broken' : placeholderType)}
              size={placeholderIconSize}
              color={getPlaceholderColor(hasError, placeholderType)}
            />
          </PlaceholderContent>
        )}

        {/* Show custom placeholder content */}
        {showPlaceholder &&
          placeholder === 'custom' &&
          placeholderContent &&
          !showIconPlaceholder && (
            <PlaceholderContent>{placeholderContent}</PlaceholderContent>
          )}
      </ImageWrapper>
    );
  }
);

Image.displayName = 'Image';
