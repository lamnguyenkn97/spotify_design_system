import styled, { css } from 'styled-components';
import { colors, spacing, fontSizes, borderRadius } from '../../../styles';

interface CardProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'artist';
}

export const CardWrapper = styled.div<CardProps>`
  border-radius: ${borderRadius.lg};
  padding: ${spacing.sm};
  background-color: ${colors.grey.grey1};
  width: ${({ size }) =>
    size === 'sm' ? '160px' : size === 'md' ? '200px' : '240px'};
  transition: background 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  text-align: ${({ variant }) => (variant === 'artist' ? 'center' : 'left')};

  &:hover {
    background-color: ${colors.grey.grey2};
  }
`;

export const ImageWrapper = styled.div<{ variant?: 'default' | 'artist' }>`
  position: relative;
  width: 100%;
  border-radius: ${borderRadius.md};
  overflow: hidden;

  ${({ variant }) =>
    variant === 'artist' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;
    `}
`;

export const CardImage = styled.img<{ variant?: 'default' | 'artist' }>`
  width: 100%;
  height: 100%;
  border-radius: ${({ variant }) =>
    variant === 'artist' ? '50%' : borderRadius.md};
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const PlayButton = styled.button<{ variant?: 'default' | 'artist' }>`
  position: absolute;
  bottom: 10%;
  right: ${spacing.sm};
  width: ${spacing.xl};
  height: ${spacing.xl};
  background-color: ${colors.primary.brand};
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  ${CardWrapper}:hover & {
    opacity: 1;
    transform: translateY(-5px);
  }

  &:hover {
    background-color: ${colors.primary.brandHighlight};
  }
`;

export const CardContent = styled.div`
  margin-top: ${spacing.sm};
`;

export const CardTitle = styled.h3`
  font-size: ${fontSizes.md}rem;
  font-weight: bold;
  color: ${colors.primary.white};
`;

export const CardSubtitle = styled.p`
  font-size: ${fontSizes.sm}rem;
  color: ${colors.grey.grey6};
  margin-top: ${spacing.xs};
`;
