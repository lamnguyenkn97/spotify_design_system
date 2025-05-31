import styled from 'styled-components';
import { colors, spacing, borderRadius } from '../../../styles';

interface WrapperProps {
  width?: string;
  height?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width = '250px' }) => width};
  height: ${({ height = '120px' }) => height};
  border-radius: ${borderRadius.md};
  padding: ${spacing.md};
  background-color: ${colors.decorative.blueMoon};
  overflow: hidden;
  color: ${colors.primary.white};
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: -${spacing.sm};
  right: -${spacing.sm};
  width: 50%;
  max-width: 80px;
  aspect-ratio: 1 / 1;
  transform: rotate(25deg);
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${borderRadius.sm};
  }
`;
