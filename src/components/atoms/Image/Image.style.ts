import styled, { css } from 'styled-components';
import { borderRadius, spacing, colors, opacity, transitions } from '../../../styles';
import { ImageSize, ImageShape, ImageVariant } from './Image.types';

// Component defaults
const imageDefaults = {
  size: 'md' as ImageSize,
  shape: 'rounded' as ImageShape,
  variant: 'default' as ImageVariant,
  lazy: true,
};

const getSizeValue = (size: ImageSize): string => {
  return spacing.image[size];
};

const getShapeStyles = (shape: ImageShape) => {
  const shapeConfig = {
    square: {
      borderRadius: borderRadius.md,
      aspectRatio: '1',
    },
    rounded: {
      borderRadius: borderRadius.lg,
      aspectRatio: undefined,
    },
    circle: {
      borderRadius: borderRadius.round,
      aspectRatio: '1',
    },
  };
  
  const config = shapeConfig[shape];
  
  return css`
    border-radius: ${config.borderRadius};
    ${config.aspectRatio ? `aspect-ratio: ${config.aspectRatio};` : ''}
  `;
};

const getPlaceholderColor = (variant: ImageVariant): string => {
  return colors.image.placeholder[variant];
};

export const ImageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['size', 'shape', 'variant', 'isLoading'].includes(prop),
})<{
  size: ImageSize;
  shape: ImageShape;
  variant: ImageVariant;
  isLoading: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  
  /* Size styles */
  width: ${({ size }) => getSizeValue(size)};
  height: ${({ size }) => getSizeValue(size)};
  
  /* Shape styles */
  ${({ shape }) => getShapeStyles(shape)};
  
  /* Simple loading state - just opacity fade instead of shimmer */
  ${({ isLoading }) => isLoading && css`
    background-color: ${colors.image.background};
    opacity: ${opacity.loading};
  `};
`;

export const StyledImage = styled.img.withConfig({
  shouldForwardProp: (prop) => !['isLoading'].includes(prop),
})<{
  isLoading: boolean;
}>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${transitions.opacity};
  
  /* Hide image while loading */
  ${({ isLoading }) => isLoading && css`
    opacity: 0;
    position: absolute;
  `};
`;

export const PlaceholderContent = styled.div<{
  variant: ImageVariant;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ variant }) => getPlaceholderColor(variant)};
  background-color: ${colors.image.background};
`;

// Export defaults for reuse
export { imageDefaults };
