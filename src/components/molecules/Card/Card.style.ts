import styled, { css } from 'styled-components';

interface CardProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'artist';
}

export const CardWrapper = styled.div<CardProps>`
  border-radius: 12px;
  padding: 12px;
  background-color: #181818;
  width: ${({ size }) =>
    size === 'sm' ? '160px' : size === 'md' ? '200px' : '240px'};
  transition: background 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  text-align: ${({ variant }) => (variant === 'artist' ? 'center' : 'left')};

  &:hover {
    background-color: #282828;
  }
`;

export const ImageWrapper = styled.div<{ variant?: 'default' | 'artist' }>`
  position: relative;
  width: 100%;
  border-radius: 8px;
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
  border-radius: ${({ variant }) => (variant === 'artist' ? '50%' : '8px')};
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const PlayButton = styled.button<{ variant?: 'default' | 'artist' }>`
  position: absolute;
  bottom: 10%;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: #1ed760;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  z-index: 10; /* Ensure it's above everything else */

  ${CardWrapper}:hover & {
    opacity: 1;
    transform: translateY(-5px);
  }

  &:hover {
    background-color: #1db954;
  }
`;

export const CardContent = styled.div`
  margin-top: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;

export const CardSubtitle = styled.p`
  font-size: 0.875rem;
  color: #b3b3b3;
  margin-top: 4px;
`;
