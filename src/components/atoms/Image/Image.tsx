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
import { spacing } from '../../../styles';

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
    const [showPlaceholder, setShowPlaceholder] = useState(!src);

    // Reset states when src changes
    useEffect(() => {
      if (src) {
        setImageSrc(src);
        setShowPlaceholder(false);
      } else {
        setImageSrc('');
        setShowPlaceholder(true);
      }
    }, [src]);

    const handleError = () => {
      // Try fallback if available and not already using it
      if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc);
        setShowPlaceholder(false);
        return;
      }

      // Show placeholder if no fallback or fallback fails
      setImageSrc('');
      setShowPlaceholder(true);
    };

    // Get size value for inline styles to prevent FOUC
    // Use custom dimensions from props.style if provided, otherwise use design tokens
    const customWidth = props.style?.width;
    const customHeight = props.style?.height;
    const sizeValue = spacing.image[size];
    const wrapperWidth = customWidth || sizeValue;
    const wrapperHeight = customHeight || sizeValue;

    return (
      <ImageWrapper
        size={size}
        shape={shape}
        variant={variant}
        isLoading={false}
        className={className}
        style={{
          width: wrapperWidth,
          height: wrapperHeight,
        }}
      >
        {/* Show image if we have a src and not showing placeholder */}
        {imageSrc && !showPlaceholder && (
          <StyledImage
            ref={ref}
            src={imageSrc}
            alt={alt}
            isLoading={false}
            onError={handleError}
            loading={lazy ? 'lazy' : 'eager'}
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              ...props.style,
            }}
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
