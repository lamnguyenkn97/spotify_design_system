import styled from 'styled-components';
import { borderRadius } from '../../../styles';

export const ImageWrapper = styled.div<{
  width: string | number;
  height: string | number;
  aspectRatio?: string | number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  overflow: hidden;
  ${({ aspectRatio }) =>
    aspectRatio ? `aspect-ratio: ${aspectRatio};` : ''}
`;

export const StyledImage = styled.img<{
  borderRadiusProps: keyof typeof borderRadius;
}>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ borderRadiusProps }) =>
    borderRadiusProps && borderRadiusProps in borderRadius
      ? borderRadius[borderRadiusProps as keyof typeof borderRadius]
      : borderRadius.md}; // ✅ Fix: Ensures TypeScript correctly indexes
`;
