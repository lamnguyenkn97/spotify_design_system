import styled, { css, keyframes } from 'styled-components';
import { borderRadius, spacing, colors } from '../../../styles';
import { ImageSize, ImageShape, ImageFit, ImagePlaceholder } from './Image.types';

// Size tokens mapping
const sizeTokens = {
  xs: '2rem',    // 32px
  sm: '3rem',    // 48px
  md: '4rem',    // 64px
  lg: '6rem',    // 96px
  xl: '8rem',    // 128px
  full: '100%',
} as const;

// Shape variants with their border radius
const shapeTokens = {
  rectangle: borderRadius.md,
  rounded: borderRadius.lg,
  square: borderRadius.md,
  circle: '50%',
} as const;

// Placeholder icon configuration
const placeholderConfig = {
  iconSize: '3x' as const,
  colors: {
    default: colors.grey.grey4,
    error: colors.decorative.redRedWine,
    spotify: colors.primary.brand,
  },
} as const;

// Default design tokens for image
const imageDefaults = {
  width: 'auto',
  height: 'auto',
  shape: 'rectangle' as ImageShape,
  objectFit: 'cover' as ImageFit,
  placeholder: 'blur' as ImagePlaceholder,
  loading: false,
  lazy: true,
  fallbackSrc: undefined,
};

// Animations
const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const getSizeValue = (size: ImageSize | string | number): string => {
  if (typeof size === 'number') return `${size}px`;
  if (typeof size === 'string' && size in sizeTokens) {
    return sizeTokens[size as ImageSize];
  }
  return size as string;
};

const getShapeStyles = (shape: ImageShape, aspectRatio?: string | number) => {
  const borderRadiusValue = shapeTokens[shape] || shapeTokens.rectangle;
  
  // Special handling for square and circle shapes
  if (shape === 'square' && !aspectRatio) {
    return css`
      aspect-ratio: 1;
      border-radius: ${borderRadiusValue};
    `;
  }
  
  if (shape === 'circle') {
    return css`
      aspect-ratio: 1;
      border-radius: 50%;
    `;
  }
  
  return css`
    border-radius: ${borderRadiusValue};
    ${aspectRatio ? `aspect-ratio: ${aspectRatio};` : ''}
  `;
};

const getPlaceholderStyles = (placeholder: ImagePlaceholder) => {
  switch (placeholder) {
    case 'blur':
      return css`
        background: linear-gradient(90deg, ${colors.grey.grey2} 25%, ${colors.grey.grey3} 50%, ${colors.grey.grey2} 75%);
        background-size: 200% 100%;
        animation: ${shimmer} 2s infinite;
      `;
    case 'skeleton':
      return css`
        background-color: ${colors.grey.grey2};
        animation: ${pulse} 1.5s ease-in-out infinite;
      `;
    case 'empty':
      return css`
        background-color: ${colors.grey.grey1};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.grey.grey4};
        font-size: 0.875rem;
        
        &::after {
          content: '🖼️';
          font-size: 1.5rem;
        }
      `;
    case 'custom':
    default:
      return css`
        background-color: ${colors.grey.grey1};
      `;
  }
};

export const ImageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['width', 'height', 'aspectRatio', 'shape', 'loading', 'placeholder'].includes(prop),
})<{
  width: ImageSize | string | number;
  height: ImageSize | string | number;
  aspectRatio?: string | number;
  shape: ImageShape;
  loading: boolean;
  placeholder: ImagePlaceholder;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  
  /* Size styles */
  width: ${({ width }) => getSizeValue(width)};
  height: ${({ height }) => getSizeValue(height)};
  
  /* Shape and aspect ratio styles */
  ${({ shape, aspectRatio }) => getShapeStyles(shape, aspectRatio)};
  
  /* Loading placeholder styles */
  ${({ loading, placeholder }) => loading && getPlaceholderStyles(placeholder)};
`;

export const StyledImage = styled.img.withConfig({
  shouldForwardProp: (prop) =>
    !['objectFit', 'isLoading'].includes(prop),
})<{
  objectFit: ImageFit;
  isLoading: boolean;
}>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
  transition: opacity 0.3s ease;
  
  /* Hide image while loading */
  ${({ isLoading }) => isLoading && css`
    opacity: 0;
    position: absolute;
  `};
`;

export const PlaceholderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.grey.grey4};
  font-size: 0.875rem;
`;

// Export tokens and defaults for reuse
export { imageDefaults, sizeTokens, shapeTokens, placeholderConfig };
